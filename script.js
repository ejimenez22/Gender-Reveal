// Convert deadline to CST time zone (using GMT-0600 for CST)
let deadline = new Date("Jan 22, 2025 22:45:00 GMT-0600").getTime(); // Set to CST explicitly

// To call defined function every second
let x = setInterval(function () {

    // Getting current CST time
    let now = new Date().toLocaleString("en-US", { timeZone: "America/Chicago" });
    now = new Date(now).getTime();

    // Calculating the difference
    let t = deadline - now;

    // If the timer has reached zero or gone negative, handle it
    if (t < 0) {
        clearInterval(x); // Stop the timer

        // Apply fade-out effect to timer
        document.getElementById("demo").classList.add("fade-out");

        // Wait for the fade-out to finish before showing the new text and background color change
        setTimeout(function () {
            // Change text and fade-in effect
            document.getElementById("demo").innerHTML = "Coming August 2025";
            document.getElementById("demo").classList.add("fade-in");

            // Change background color to pink
            document.documentElement.style.background = '#ff00ff';
            document.body.style.background = '#ff00ff';

            // Trigger confetti effect when the timer hits zero
            // More powerful confetti for visibility
            confetti({
                particleCount: 200,   // Number of particles
                spread: 180,          // Wider spread for more dispersion
                origin: { x: 0.5, y: 0.5 },  // Center the confetti in the middle of the screen
                duration: 8000,       // Duration set to 8 seconds
            });
        }, 5000); // 5 seconds delay for the fade-out effect to complete

        return; // Stop further execution
    }

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

}, 1000);