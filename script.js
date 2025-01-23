// Convert deadline to CST time zone (using GMT-0600 for CST)
let deadline = new Date("Feb 4, 2025 12:00:00 GMT-0600").getTime(); // Set to CST explicitly

// To call defined function every second
let x = setInterval(function () {

    // Getting current CST time
    let now = new Date().toLocaleString("en-US", { timeZone: "America/Chicago" });
    now = new Date(now).getTime();

    // Calculating the difference
    let t = deadline - now;

    // Getting value of days, hours, minutes, seconds
    let days = Math.floor(t / (1000 * 60 * 60 * 24));
    let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((t % (1000 * 60)) / 1000);

    // Convert to 12-hour format (only if hours >= 1)
    if (hours > 0) {
        hours = hours % 12;  // Convert '0' hours to '12'
        if (hours === 0) hours = 12; // Fix the "0 hours" edge case for midnight
        // Display full countdown (days, hours, minutes, seconds)
        document.getElementById("demo").innerHTML =
            days + "d " + hours + "h " + minutes + "m " + seconds + "s";
    } else {
        // When the time is less than 1 hour, only show minutes and seconds
        document.getElementById("demo").innerHTML =
            minutes + "m " + seconds + "s";
    }

    // Output for over time
    if (t < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "Coming August 2025";
        
        // Change background color to pink
        document.documentElement.style.background = 'green'; 
        document.body.style.background = 'green';
    }
}, 1000);