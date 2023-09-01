const audioElement = document.getElementById('test');
  let hasStarted = false;

  // Function to play audio if not started yet
  function playAudio() {
    if (!hasStarted) {
      audioElement.play();
      hasStarted = true;
    }
  }

  // Attach event listener to start playback on mousemove
  document.addEventListener('mousemove', playAudio);

  var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();
  var x;

  function setManualTime() {
    const manualTimeInput = document.getElementById('manual-time').value;
    const [hours, minutes] = manualTimeInput.split(':');

    if (hours && minutes) {
      const currentDate = new Date();
      const manualDate = new Date(currentDate);
      manualDate.setHours(parseInt(hours), parseInt(minutes), 0, 0);

      countDownDate = manualDate.getTime();
      until = "Manual Time";
    }
  }

  function startCountdown() {
    clearInterval(x);

    x = setInterval(function() {
      var now = new Date().getTime();
      var distance = countDownDate - now;
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      document.getElementById("countdown").innerHTML = days + "d " + hours + "h " +
        minutes + "m " + seconds + "s ";

      if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "EXPIRED";
      }
    }, 1000);
  }

  startCountdown();
