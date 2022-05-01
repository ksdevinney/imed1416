function changeStyle(style) {
    const stylesheet = document.getElementById("color")

    stylesheet.setAttribute('href', style)
}

// Ask the user for a name to personalize the page. Display their name prominently on the page.
function nameOnPage() {
    console.log("this function loaded")
    const name = prompt("Enter your name.")
    
    if (!name) {
        document.getElementById("welcome").innerHTML = "Welcome!"
    } else {
        document.getElementById("welcome").innerHTML = `Hello, ${name}!`
    }
}

// Create a Responsive Top navbar
// Adapt the existing nav menu to collapse on small screens.
// Show 'hamburger' image for small screen nav select button.
// Add the new menu to all site pages.

function navToggle() {
    let bar = document.getElementById("myTopnav");
    if (bar.className === "topnav") {
      bar.className += "responsive";
    } else {
      bar.className = "topnav";
    }
  }