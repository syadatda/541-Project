// Function to update the clock
    function updateClock() {
      let now = new Date();
      let hrs = now.getHours();
      let mins = now.getMinutes();
      let secs = now.getSeconds();
      let strTime = hrs + ':' + mins + ':' + secs;
      document.getElementById('clock').textContent = strTime;
    }

    // Call the function every second to update the clock
    setInterval(updateClock, 1000);