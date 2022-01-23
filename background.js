
const temporary = browser.runtime.id.endsWith('@temporary-addon'); // debugging?
const manifest = browser.runtime.getManifest();
const extname = manifest.name;

browser.menus.create({
	id: extname,
	title: "Prepend",
	documentUrlPatterns: [ "<all_urls>" ],
	contexts: ["page", "link", "image", "editable", "selection"],
	onclick: async function(clickData,tab) {
		let selected = clickData.linkUrl || clickData.selectionText || clickData.srcUrl || '';
		if(temporary){ console.log('selected', selected); }
		let content = await navigator.clipboard.readText();
		if(temporary){ console.log('content', content); }
		content = selected + "\n" + content;
		await navigator.clipboard.writeText(content);
		if(temporary){ console.log('content', content); }
	}
});

browser.menus.create({
	id: extname,
	title: "Append",
	documentUrlPatterns: [ "<all_urls>" ],
	contexts: ["page", "link", "image", "editable", "selection"],
	onclick: async function(clickData,tab) {
		let selected = clickData.linkUrl || clickData.selectionText || clickData.srcUrl || '';
		if(temporary){ console.log('selected', selected); }
		let content = await navigator.clipboard.readText();
		if(temporary){ console.log('content', content); }
		content = content + "\n" + selected + "\n";
		await navigator.clipboard.writeText(content);
		if(temporary){ console.log('content', content); }
	}
});
