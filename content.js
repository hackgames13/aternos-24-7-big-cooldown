(async function findAndClickButton() {
setTimeout(async() => {
    while (true) {
      if (document.querySelector('.btn.btn-tiny.btn-success.server-extend-end') && document.querySelector('.extend').style.display !== 'none') {
        document.querySelector('.btn.btn-tiny.btn-success.server-extend-end').click();
        console.log("✅ Button clicked!");
        await new Promise((resolve, reject) => {
            setTimeout(resolve,10000);
        });
      } else {
        console.log("❌ Button not found.");
                await new Promise((resolve, reject) => {
            setTimeout(resolve,2000);
        });
      }
}
}, 1);
setTimeout(async() => {
    await new Promise((resolve, reject) => {
        setTimeout(resolve,300000);
    });
    location.reload();
}
}, 1);
setInterval(async() => {
const e = document.querySelector('.server-actions.offline');
if (e) {
    const startButton = e.querySelector('#start');
    if (startButton) {
        startButton.click();
    }
}
},6000);
setInterval(() => {
    const q = document.querySelector(".alert-buttons.btn-group");
    if (q) {
        const w = q.querySelector(".btn.btn-green");
        if (w) {
            w.click();
        }
    }
}, 1000);
})();
