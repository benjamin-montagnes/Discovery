

animate();

var container, stats, clock;
var camera, scene, renderer, elf;

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize( window.innerWidth, window.innerHeight );
}
function animate() {
  requestAnimationFrame( animate );
  render();
}
function render() {
  var delta = clock.getDelta();
  if ( elf !== undefined ) {
    elf.rotation.z += delta * 0.5;
  }
  renderer.render( scene, camera );
}
