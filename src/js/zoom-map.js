function zoom(e) {
  let zoom = e.currentTarget;
  e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX;
  e.offsetY ? offsetY = e.offsetY : offsetX = e.touches[0].pageX;
  let x = offsetX / zoom.offsetWidth * 150;
  let y = offsetY / zoom.offsetHeight * 150;
  zoom.style.backgroundPosition = x + '% ' + y + '%';
}