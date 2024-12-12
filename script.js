// Select the snowflakes container
const snowContainer = document.querySelector('.snowflakes');

// Function to create a snowflake
function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
    snowflake.textContent = '❄️'; // Change to other characters like ❄, ✲, ✻ for variety
    snowflake.style.left = `${Math.random() * 100}vw`; // Random horizontal position
    snowflake.style.animationDelay = `${Math.random() * 5}s`; // Staggered start
    snowflake.style.fontSize = `${Math.random() * 10 + 10}px`; // Random size
    snowContainer.appendChild(snowflake);

    // Remove the snowflake after its animation ends
    setTimeout(() => snowflake.remove(), 10000); // Match longest animation duration
}

// Create snowflakes continuously
setInterval(createSnowflake, 300); // Adjust interval for denser or lighter snow
