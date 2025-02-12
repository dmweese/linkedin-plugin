(() => {
    let pageHTML = document.documentElement.outerHTML; // Get full page HTML
    browser.runtime.sendMessage({ action: "extractHTML", data: pageHTML });
})();