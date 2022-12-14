browser.contextMenus.create({
    id: "send-thought-to-napkin",
    title: "Send thought to Napkin",
    contexts: ["selection"],
});

function openSettingPage() {
    console.log("injecting");
    browser.tabs.create({
        "url": "/setting-page.html"
    });
}

browser.contextMenus.onClicked.addListener((info, tab) => {
    const urlAPI = 'https://app.napkin.one/api/createThought';
    let email = 'khoi0941@gmail.com';
    let token = "macchina-dettatura-ec1air8wcr";
    let thought = "The natural desire of good men is knowledge.";
    let sourceUrl = "https://www.codex-atlanticus.it";

    if (info.menuItemId === "send-thought-to-napkin") {
        fetch(urlAPI, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "email": email,
                "token": token,
                "thought": thought,
                "sourceUrl": sourceUrl
            })
        })
            .then(response => response.json())
            .then(response => console.log(JSON.stringify(response)))
    }
});