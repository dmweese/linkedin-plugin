document.getElementById("extractHTML").addEventListener("click", () => {
  browser.tabs.query({active: true, currentWindow: true}).then((tabs) => {
    browser.tabs.sendMessage(tabs[0].id, { action: "extractHTML"})
  })
})

browser.runtime.onMessage.addListener((message) => {
  if (message.html) {
    document.getElementById("output").innerHTML = message.html
  }
})