let txt = document.getElementsByClassName("txt")[0];

// txt.textContent ="h11e";

const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.draggable = true;

    const func = (e) =>
        {
            console.log('helo');
            // e.preventDefault();
            card.draggable = true;
            card.style.transition = 'none'; // Disable smooth transitions while dragging
            card.style.zIndex = 1000; // Bring the card to the front

        
        }
    card.touchmove = (event) =>
    {
        console.log('ss');
        

        var x = event.clientX || event.touches[0].clientX;
        var y = event.clientY || event.touches[0].clientY;
        txt.textContent = x;
        card.style.marginLeft = `${x}px`;
        card.style.marginTop = `${y}px`;

    }

    card.onclick = () =>
    {
        txt.textContent = "arkaa";
    }
    // card.ondra
    card.addEventListener('mousedown', func);
    card.addEventListener('touchstart', func);

});
