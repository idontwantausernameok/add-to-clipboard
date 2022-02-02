
const temporary = browser.runtime.id.endsWith('@temporary-addon'); // debugging?
const manifest = browser.runtime.getManifest();
const extname = manifest.name;


browser.menus.create({
	id: extname + "-insert",
	title: "Insert",
	documentUrlPatterns: [ "<all_urls>" ],
	contexts: ["page", "link", "image", "editable", "selection"],
	onclick: async function(clickData,tab) {
		const selected = clickData.linkUrl || clickData.selectionText || clickData.srcUrl || '';
		await navigator.clipboard.writeText(selected);
	}
});
browser.menus.create({
	id: extname + "-prepend",
	title: "Prepend",
	documentUrlPatterns: [ "<all_urls>" ],
	contexts: ["page", "link", "image", "editable", "selection"],
	onclick: async function(clickData,tab) {
		const selected = clickData.linkUrl || clickData.selectionText || clickData.srcUrl || '';
		let content = await navigator.clipboard.readText();
        content = selected + "\n" + content;
		await navigator.clipboard.writeText(content);
	}
});

browser.menus.create({
	id: extname + "-append",
	title: "Append",
	documentUrlPatterns: [ "<all_urls>" ],
	contexts: ["page", "link", "image", "editable", "selection"],
	onclick: async function(clickData,tab) {
		const selected = clickData.linkUrl || clickData.selectionText || clickData.srcUrl || '';
		let content = await navigator.clipboard.readText();
        content = selected + "\n" + content;
		await navigator.clipboard.writeText(content);
	}
});
