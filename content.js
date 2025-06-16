(async function findAndClickButton() {
  // Click extend button if visible
  setInterval(async () => {
    const button = document.querySelector('.btn.btn-tiny.btn-success.server-extend-end');
    const extend = document.querySelector('.extend');
    if (button && extend && extend.style.display !== 'none') {
      button.click();
      console.log("✅ Button clicked!");
      await new Promise(resolve => setTimeout(resolve, 10000));
    } else {
      console.log("❌ Button not found.");
    }
  }, 2000);

  // Reload page every 5 minutes
  setTimeout(() => location.reload(), 300000);

  // Attempt to start offline server
  setInterval(() => {
    const e = document.querySelector('.server-actions.offline');
    const startButton = e?.querySelector('#start');
    if (startButton) {
      startButton.click();
    }
  }, 6000);

  // Dismiss green alert buttons
  setInterval(() => {
    const alertBox = document.querySelector(".alert-buttons.btn-group");
    const greenButton = alertBox?.querySelector(".btn.btn-green");
    if (greenButton) {
      greenButton.click();
    }
  }, 1000);
})();
