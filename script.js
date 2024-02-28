// Declaring the date variables and accessing the html elements through the dom
  const now = new Date();
  const endDate = new Date();

  const daysElement = document.querySelector('#days');
  const hoursElement = document.querySelector('#hours');
  const minutesElement = document.querySelector('#minutes');
  const secondsElement = document.querySelector('#seconds');


  // Set the end date for the countdown (10 days from now)
  endDate.setDate(endDate.getDate() + 10);

  // calculating the time difference
  let timeDifference = endDate.getTime() - now.getTime();

  // function that decreases the timedifference by 1000 milliseconds(a second), calculates the days, hours and minutes based on the time difference and displaying it
  function updateCountdown() {
    timeDifference -= 1000;

    // end the timer if the time difference is = 0
    if (timeDifference <= 0) {
      daysElement.textContent = '00';
      hoursElement.textContent = '00';
      minutesElement.textContent = '00';
      secondsElement.textContent = '00';
      alert("The giveaway has ended.");
      return;
    }

    // mathematical expressions to calcculate the days, hours, minutes and seconds from the time difference
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  
    // displaying the days, hours and seconds and padding it with zero if it has a value less than 10
    daysElement.innerText = days < 10 ? '0' + days : days;
    hoursElement.innerText = hours < 10 ? '0' + hours : hours;
    minutesElement.innerText = minutes < 10 ? '0' + minutes : minutes;
    secondsElement.innerText = seconds < 10 ? '0' + seconds : seconds;
  }

  // run the updateCountdown function every 1000 milliseconds(every second)
  setInterval(updateCountdown, 1000);

