function openWindow(id) {
  document.getElementById(id).classList.remove('hidden');
}

function closeWindow(id) {
  document.getElementById(id).classList.add('hidden');
}

// Basic draggable window logic
document.querySelectorAll('.window').forEach(win => {
  const header = win.querySelector('.title-bar');
  let isDragging = false, offsetX = 0, offsetY = 0;

  header.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX - win.offsetLeft;
    offsetY = e.clientY - win.offsetTop;
  });

  document.addEventListener('mousemove', (e) => {
    if (isDragging) {
      win.style.left = `${e.clientX - offsetX}px`;
      win.style.top = `${e.clientY - offsetY}px`;
    }
  });

  document.addEventListener('mouseup', () => {
    isDragging = false;
  });
});
