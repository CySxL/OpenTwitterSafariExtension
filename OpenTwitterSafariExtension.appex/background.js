browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log("Received request: ", request);

    if (request.greeting === "hello") {
        sendResponse({ farewell: "goodbye" });
    }
    
    const url = sender.url || (request.url || "");
    if (url.includes("twitter.com") || url.includes("x.com") || url.includes("twitter.co") || url.includes("x.co") || url.includes("twimg.com")) {
        browser.runtime.sendNativeMessage("application.id.OpenTwitterSafariExtension", {url: url}, function(response) {
            console.log("Received response from native app: ", response);
        });
    }
});
