let txt = document.getElementsByClassName("txt")[0];

// txt.textContent ="h11e";

const cards = document.querySelectorAll('.card');

cards.forEach(card => {

    card.ontouchmove = (event) =>
    {

        var x = event.touches[0].clientX;
        var y = event.touches[0].clientY;
        txt.textContent = `x: ${x} y: ${y}`;
    }
    
});
