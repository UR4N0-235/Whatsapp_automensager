async function getMessage(){
    return await chrome.storage.sync.get('message').then((result)=>{
        return result["message"];         
    });
}

setInterval(()=>{
    chrome.storage.sync.get("sendingMensages", async (result)=>{
        if(result.sendingMensages){
            let message = await getMessage();
            sendMessage(message);    
        }
    });
}, 100);

function sendMessage(mensage){
    let localToPasteText = document.querySelector("#main > footer > div._2lSWV._3cjY2.copyable-area > div > span:nth-child(2) > div > div._1VZX7 > div._3Uu1_ > div > div > p");
    if(localToPasteText != null){
        localToPasteText.focus();
        document.execCommand('insertText', false, mensage);
        document.querySelector("#main > footer > div._2lSWV._3cjY2.copyable-area > div > span:nth-child(2) > div > div._1VZX7 > div._2xy_p._3XKXx > button > span").click()
    }
}