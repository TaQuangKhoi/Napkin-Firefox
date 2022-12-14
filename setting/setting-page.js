// Firefox extension get from local storage
// and set to the setting page
function getSetting() {
    browser.storage.local.get().then((result) => {
        document.getElementById("email").value = result.email;
        document.getElementById("token").value = result.token;
    });
}

// save setting to local storage
function saveSetting() {
    browser.storage.local.set({
        email: document.getElementById("email").value,
        token: document.getElementById("token").value
    });

    // Get the snackbar DIV
    let x = document.getElementById("snackbar");

    // Add the "show" class to DIV
    x.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

// check if the setting is exist, return boolean
function checkSetting() {
    browser.storage.local.get().then((result) => {
        if (result.email == undefined || result.token == undefined) {
            return false;
        }
    });
}

if (checkSetting()) {
    getSetting();
}

// add event listener to save button
document.getElementById("save").addEventListener("click", saveSetting);