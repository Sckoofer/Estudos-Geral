function move() {
    var redElem = document.getElementById('red');
    var poe = 0;
    var anim = setInterval(animate, 5);

    function animate() {
        if (poe == 370) {
            clearInterval(anim);
        } else {
            poe++;
            redElem.style.top = poe + "px";
            redElem.style.left = poe + "px";

        }
    }

}