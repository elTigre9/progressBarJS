function move() {
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 10);

    function frame() {
        if (width >= 100) {
            clearInterval(id);
            progress();
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}

function progress() {
    // alert("Go to other page");
    window.location.href = "index.html"
}

move();