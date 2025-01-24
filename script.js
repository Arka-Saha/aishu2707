const cards = document.querySelectorAll('.card');

cards.forEach((card) => {
  let offsetX = 0;
  let offsetY = 0;
  let isDragging = false;

  const onDragStart = (e) => {
    e.preventDefault();
    isDragging = true;

    // Get initial offsets
    const rect = card.getBoundingClientRect();
    offsetX = (e.clientX || e.touches[0].clientX) - rect.left;
    offsetY = (e.clientY || e.touches[0].clientY) - rect.top;

    card.style.transition = 'none'; // Disable smooth transitions while dragging
    card.style.zIndex = 1000; // Bring the card to the front
  };

  const onDragMove = (e) => {
    if (!isDragging) return;

    // Update card position based on cursor/touch position
    const mouseX = e.clientX || e.touches[0].clientX;
    const mouseY = e.clientY || e.touches[0].clientY;

    card.style.left = `${mouseX - offsetX}px`;
    card.style.top = `${mouseY - offsetY}px`;
  };

  const onDragEnd = () => {
    isDragging = false;
    card.style.transition = ''; // Re-enable smooth transitions
    card.style.zIndex = 'auto'; // Reset z-index
  };

  // Add event listeners for mouse and touch events
  card.addEventListener('mousedown', onDragStart);
  card.addEventListener('touchstart', onDragStart);

  window.addEventListener('mousemove', onDragMove);
  window.addEventListener('touchmove', onDragMove);

  window.addEventListener('mouseup', onDragEnd);
  window.addEventListener('touchend', onDragEnd);
});
