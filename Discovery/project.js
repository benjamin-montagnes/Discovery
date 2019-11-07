"use strict";

const blackHole = document.getElementById('blackHole')

document.addEventListener('mousemove',mouseMoveEvent)

function mouseMoveEvent(event) {
  blackHole.style.left = `${event.clientX-20}px`
  blackHole.style.top = `${event.clientY-20}px`
}
