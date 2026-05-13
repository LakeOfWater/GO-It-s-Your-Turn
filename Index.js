//If nudge button is toggled display the hidden "It's your turn" message.

//If nudge button is clicked then run this code.
const nudgeButton = document.getElementById("Nudge");
const notif = document.getElementById("notif");
const nudgeSent = document.getElementById("nudgeSent");
nudgeButton.addEventListener("click", async function() {
    nudgeButton.innerHTML = "Nudge Sent!"
    function nudgeTimer(){
        nudgeButton.innerHTML = "Nudge A Friend!";
    }
    setTimeout(nudgeTimer, 3000);

    // Notification code
    const reg = await navigator.serviceWorker.register('./serviceWorker.js');
    await Notification.requestPermission();
    reg.showNotification('GO! Its Your Turn!', { 
        body: "Goooooooo", 
        icon: "goapppic.png",
        sound: "GO-It-s-Your-Turn\gosound.mp3"
    });






    });
