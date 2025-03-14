browser.runtime.onMessage.addListener((message) => {
    if(message.action == "extractHTML"){
        let pageHTML = document.documentElement.outerHTML; 
        browser.runtime.sendMessage({ action: "extracted", html: pageHTML})
    }
})
