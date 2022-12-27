function displayTime() {
    // Get the current date and time
    var currentTime = new Date();

    // Extract the current hours and minutes
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();

    // Convert hours to the 12-hour clock format
    var ampm = "a.m.";
    if (hours > 12) {
      hours -= 12;
      ampm = "p.m.";
    } else if (hours == 12) {
      ampm = "p.m.";
    } else if (hours == 0) {
      hours = 12;
    }

    // Convert hours and minutes to strings with leading zeros
    hours = addLeadingZeros(hours);
    minutes = addLeadingZeros(minutes);

    // Get the day of the week as a string
    var dayOfWeek = getDayOfWeek(currentTime.getDay());

    // Get a reference to the clock element
    var clockElement = document.getElementById("clock");

    // Set the content of the clock element to the current time and day of the week
    clockElement.innerHTML = dayOfWeek + ", " + hours + ":" + minutes + " " + ampm;
  }

  // Add leading zeros to a number if necessary
  function addLeadingZeros(number) {
    if (number < 10) {
      return "0" + number;
    } else {
      return number;
    }
  }

  // Get the day of the week as a string
  function getDayOfWeek(day) {
    switch (day) {
      case 0:
        return "Sun";
      case 1:
        return "Mon";
      case 2:
        return "Tue";
      case 3:
        return "Wed";
      case 4:
        return "Thu";
      case 5:
        return "Fri";
      case 6:
        return "Sat";
    }
  }

  // Update the time and date every second
  setInterval(displayTime, 1000);