/**  



    HTML JS 

    Result
    Skip Results Iframe

EDIT ON
**/


/**
 * Generate a scene object with a background color
 **/

function getScene() {
  var scene = new THREE.Scene();
  scene.background = new THREE.Color('#14a1f3');
  return scene;
}

/**
 * Generate the camera to be used in the scene. Camera args:
 *   [0] field of view: identifies the portion of the scene
 *     visible at any time (in degrees)
 *   [1] aspect ratio: identifies the aspect ratio of the
 *     scene in width/height
 *   [2] near clipping plane: objects closer than the near
 *     clipping plane are culled from the scene
 *   [3] far clipping plane: objects farther than the far
 *     clipping plane are culled from the scene
 **/

function getCamera() {
  var aspectRatio = window.innerWidth / window.innerHeight;
  var camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 1000);
  camera.position.set(8, 4, 3);
  return camera;
}

/**
 * Generate the light to be used in the scene. Light args:
 *   [0]: Hexadecimal color of the light
 *   [1]: Numeric value of the light's strength/intensity
 *   [2]: The distance from the light where the intensity is 0
 * @param {obj} scene: the current scene object
 **/

function getLight(scene) {
  var light = new THREE.PointLight(0xffffff, .5, 0);
  light.position.set(20, 40, 20);
  scene.add(light);

    var light2 = new THREE.PointLight(0xffffff, .5, 0);
  light2.position.set(-20, -40, -20);
  scene.add(light2);

      var light3 = new THREE.PointLight(0xb5fff9, .8, 0);
  light3.position.set(0, 70, 0);
  scene.add(light3);

  var ambientLight = new THREE.AmbientLight(0x189ae6);
  scene.add(ambientLight);
  return light;
}

/**
 * Generate the renderer to be used in the scene
 **/

function getRenderer() {
  // Create the canvas with a renderer
  var renderer = new THREE.WebGLRenderer({ antialias: true });
  // Add support for retina displays
  renderer.setPixelRatio(window.devicePixelRatio);
  // Specify the size of the canvas
  renderer.setSize(window.innerWidth, window.innerHeight);
  // Add the canvas to the DOM
  document.body.appendChild(renderer.domElement);
  return renderer;
}

/**
 * Generate the controls to be used in the scene
 * @param {obj} camera: the three.js camera for the scene
 * @param {obj} renderer: the three.js renderer for the scene
 **/

function getControls(camera, renderer) {
  var controls = new THREE.TrackballControls(camera, renderer.domElement);
  controls.zoomSpeed = 0.4;
  controls.panSpeed = 0.5;
  return controls;
}

var scene = getScene();
var camera = getCamera();
var light = getLight(scene);
var renderer = getRenderer();
var controls = getControls(camera, renderer);


/**
 * make 2+ objects (and animate them).
 **/

//spheres
const sphereGeometry = new THREE.SphereGeometry(1, 32, 32);
const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0xdceefa });
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
sphere.position.set(-4, 4, -12);
scene.add(sphere);

const sphereGeometry2 = new THREE.SphereGeometry(2, 32, 32);
const sphereMaterial2 = new THREE.MeshBasicMaterial({ color: 0xdceefa });
const sphere2 = new THREE.Mesh(sphereGeometry2, sphereMaterial2);
sphere2.position.set(0, 0, -17);
scene.add(sphere2);

const sphereGeometry3 = new THREE.SphereGeometry(.5, 32, 32);
const sphereMaterial3 = new THREE.MeshBasicMaterial({ color: 0xdceefa });
const sphere3 = new THREE.Mesh(sphereGeometry3, sphereMaterial3);
sphere3.position.set(2, .5, 4);
scene.add(sphere3);

//lines
var material = new THREE.LineBasicMaterial( { color: 0x46e368 } );
var points = [];
points.push( new THREE.Vector3( -2, 0, 8 ) );
points.push( new THREE.Vector3( 0, 1, 4 ) );
points.push( new THREE.Vector3( 4, -.8, 1 ) );
points.push( new THREE.Vector3( 0, .5, -7 ));
points.push( new THREE.Vector3( 5, -5, -15 ));

var line = new THREE.Line( new THREE.BufferGeometry().setFromPoints( points ), material );
scene.add( line );


//rotating cube
const geometry = new THREE.BoxGeometry(2, 2, 2);

const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0xdceefa }); //  color
const cube = new THREE.Mesh(geometry, cubeMaterial);
cube.position.set(1.2, -1, 7.5);
scene.add(cube);

function animate() {
    requestAnimationFrame( animate );
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    controls.update();
    renderer.render( scene, camera );
}


/**
 * Load Bicorn model that I made in Blender and exported as an OBJ file.
   **/


function loadModel() {
  var loader = new THREE.OBJLoader();
  loader.load(
    "models/Bicorn.obj",
    function (object) {
      scene.add(object);
      document.querySelector("h1").style.display = "none";
    }
  );
}


/**
 * Render!
 **/

/*
function render() {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
  controls.update();
}*/



loadModel();

animate();

//render();

