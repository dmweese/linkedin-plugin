document.getElementById("getHTML").addEventListener("click", () => {
  browser.tabs.query({active: true, currentWindow: true}).then((tabs) => {
    browser.tabs.sendMessage(tabs[0].id, { action: "extractHTML"})
  })
})

browser.runtime.onMessage.addListener((message) => {
  if (message.action == "extracted") {
    document.getElementById("output").innerHTML = message.html
  }
})