document.addEventListener("DOMContentLoaded", function() {
    let button = document.getElementById("colorButton");
    button.addEventListener("click", function() {
        // Generate a random color
        let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        document.body.style.backgroundColor = randomColor;
    });
});
