// recovery latest toggle sender mensager value
chrome.storage.sync.get("sendingMensages", (result)=>{
    // console.log("letest sendingMensages is " + JSON.stringify(result.sendingMensages))
    document.querySelector("#togglesendmessages").checked = (JSON.stringify(result.sendingMensages) === "true");
});

// change togglesendmensagger value
document.querySelector("#togglesendmessages").addEventListener("change", () => {
    chrome.storage.sync.set({ "sendingMensages": document.querySelector("#togglesendmessages").checked});
});

// // change await time to send
// document.querySelector("[name='time']").addEventListener("change", () => {
//     chrome.storage.sync.set({ "awaitTime": document.querySelector("[name='time']").value});
// });

// paste text to send
document.querySelector("#paste").addEventListener("click", () => {
    chrome.storage.sync.set({ "message": getClipboard() });
});


function getClipboard() {
    var el = document.createElement('textarea');
    el.style.display = "hidden";
    document.body.appendChild(el);
    el.focus();
    document.execCommand('paste');
    var value = el.value;
    document.body.removeChild(el);
    return value;
}

