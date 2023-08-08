
  
  ///////////360deg text//////////////
  
  // const {
  //   FontLoader,
  //   OrbitControls,
  //   TextGeometry
  // } = THREE;
  // const container = document.querySelector('#container');
  
  // // Create renderer.
  // const renderer = new THREE.WebGLRenderer({
  //   alpha: true,
  //   antialias: true,
  // });
  // renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  // renderer.setClearColor(0x000000, 0);
  // container.appendChild(renderer.domElement);
  
  // // Create scene and lights.
  // const scene = new THREE.Scene();
  // addSpotlight(-200, 100, 100);
  // addSpotlight(100, -200, 100);
  // addSpotlight(100, 100, -200);
  
  // // Create and add a camera.
  // const initialPosition = new THREE.Vector3(0, 0, 100);
  // const camera = new THREE.PerspectiveCamera(
  //   45,
  //   window.innerWidth / window.innerHeight,
  //   0.1,
  //   1000,
  // );
  // camera.position.copy(initialPosition);
  // scene.add(camera);
  
  // // Bind controls.
  // const controls = new OrbitControls(camera, renderer.domElement);
  // controls.enableDamping = true;
  // controls.enableZoom = false;
  // controls.minPolarAngle = Math.PI / 2;
  // controls.maxPolarAngle = Math.PI / 2;
  
  // // Spotlight
  // function addSpotlight(x, y, z) {
  //   const spotLight = new THREE.SpotLight(0xffffff);
  //   spotLight.position.set(x, y, z);
  //   scene.add(spotLight);
  // }
  
  // // Add text.
  // const fontLoader = new FontLoader().load('https://assets.codepen.io/2017324/helvetiker_bold.typeface.json', (font) => {
  //   const textGeometry = new TextGeometry('PortFolio', {
  //     font,
  //     size: 16,
  //     height: 6,
  //     curveSegments: 20,
  //     bevelEnabled: true,
  //     bevelThickness: 1,
  //     bevelSize: 0.5,
  //     bevelSegments: 20,
  //   });
  //   textGeometry.center();
  
  //   const text = new THREE.Mesh(textGeometry, new THREE.MeshPhongMaterial({
  //     color: '#e2d2fc',
  //     emissive: '#ff0000',
  //     specular: '#0000ff',
  //     shininess: 0,
  //   }));
  //   scene.add(text);
  // });
  
  // camera.aspect = window.innerWidth / window.innerHeight;
  // camera.updateProjectionMatrix();
  // renderer.setSize(window.innerWidth, window.innerHeight);
  
  // // Request animation frame.
  // function animate() {
  //   controls.update();
  //   renderer.render(scene, camera);
  //   requestAnimationFrame(animate);
  // }
  // animate();
  
  // // Resize event.
  // window.addEventListener('resize', () => {
  //   camera.aspect = window.innerWidth / window.innerHeight;
  //   camera.updateProjectionMatrix();
  //   renderer.setSize(window.innerWidth, window.innerHeight);
  // });
  
  
  ///////////////////mouse trailer///////////////////
  
  const trailer = document.getElementById("trailer");
  const animateTrailer = e => {
    const x = e.clientX - trailer.offsetWidth / 2;
    const y = e.clientY - trailer.offsetHeight / 2;
    const keyframes = {
      transform: `translate(${x}px, ${y}px)`
    }
  
    trailer.animate(keyframes, {
      duration: 800,
      fill: "forwards"
    })
  }
  
  window.onmousemove = e => {
    animateTrailer(e);
  }
  
  /* ---------------------text effect------------------- */
  
  // let allText = document.querySelectorAll('.text');
  // let delay = 0;
  
  
  // allText.forEach((el, idx) => {
  //   el.style.animationDelay = `${delay}s`;
  //   el.style.zIndex = allText.length - idx;
  //   el.classList.add('base-anim');
  
  //   delay += 0.15;
  // });
  
  
  // //  선따라오는 글자
  // document.querySelectorAll('.text_effect').addEventListener('mousemove', (e) => {
  //   let innerWidth = window.innerWidth; //viewport�� �볦씠媛�
  //   let innerHeight = window.innerHeight; //viewport�� �믪씠媛�
  //   let clientX = e.clientX;
  //   let clientY = e.clientY;
  //   //console.log(clientX,clientY)
  
  //   let percentX = clientX / innerWidth;
  //   //console.log(percentX)
  //   let maxRangeX = innerWidth * 0.15;
  //   let minX = innerWidth / 2 - maxRangeX;
  //   let maxX = innerWidth / 2 + maxRangeX;
  //   let difX = maxX - minX;
  //   let pxOffset = difX * percentX;
  
  //   let left = minX + pxOffset;
  
  //   let percentY = clientY / innerHeight;
  //   //console.log(percentX)
  //   let maxRangeY = innerHeight * 0.15;
  //   let minY = innerHeight / 2 - maxRangeY;
  //   let maxY = innerHeight / 2 + maxRangeY;
  //   let difY = maxY - minY;
  //   let pxOffsetY = difY * percentY;
  
  //   let top = minY + pxOffsetY;
  
  //   allText.forEach((el, idx) => {
  //     //el.animate([],{})
  
  //     el.animate([{
  //       top: `${top}px`,
  //       left: `${left}px`
  //     }], {
  //       duration: 1000,
  //       fill: 'forwards',
  //       delay: idx * 50
  //     })
  //   })
  
  // });
  


  let allText = document.querySelectorAll('.text');
  let delay = 0;
  
  allText.forEach((el, idx) => {
    el.style.animationDelay = `${delay}s`;
    el.style.zIndex = allText.length - idx;
    el.classList.add('base-anim');
  
    delay += 0.15;
  });
  
  // 선따라오는 글자
  document.querySelectorAll('.text_effect').forEach((textEffectElement) => {
    textEffectElement.addEventListener('mousemove', (e) => {
      let innerWidth = window.innerWidth;
      let innerHeight = window.innerHeight;
      let clientX = e.clientX;
      let clientY = e.clientY;
  
      let percentX = clientX / innerWidth;
      let maxRangeX = innerWidth * 0.15;
      let minX = innerWidth / 2 - maxRangeX;
      let maxX = innerWidth / 2 + maxRangeX;
      let difX = maxX - minX;
      let pxOffset = difX * percentX;
  
      let left = minX + pxOffset;
  
      let percentY = clientY / innerHeight;
      let maxRangeY = innerHeight * 0.15;
      let minY = innerHeight / 2 - maxRangeY;
      let maxY = innerHeight / 2 + maxRangeY;
      let difY = maxY - minY;
      let pxOffsetY = difY * percentY;
  
      let top = minY + pxOffsetY;
  
      allText.forEach((el, idx) => {
        el.animate(
          [
            {
              top: `${top}px`,
              left: `${left}px`,
            },
          ],
          {
            duration: 1000,
            fill: 'forwards',
            delay: idx * 50,
          }
        );
      });
    });
  });
  
  let panoWrap=document.querySelector('.sj_panorama .pano_wrap');
let listWrap=panoWrap.querySelector('.list'); //ul
let item=listWrap.children
//console.log(item);
let listClone=null;
let itemWidth=item[0].offsetWidth; //이미지하나의넓이
let itemLength=item.length; // 10개
let listWidth=itemWidth*itemLength; //300*10=3000px (이미지하나넚이 * 개수 )
let move=0;
//let controls=document.querySelector('.sj_panorama .controls');
let controls=panoWrap.parentElement.querySelector('.controls');
let timer;




// function init(){}
// let init=()=>{}
let init= function(){
  panoWrap.style.width=listWidth*2+"px";
  listWrap.style.width=listWidth+"px";
  panoWrap.appendChild(listWrap.cloneNode(true)) //listWrap을 복사(자식까지 포함복사)
  listClone=panoWrap.children
  //console.log(listClone)
  render();
  add();
  event();
}

let render=function(){
  move +=1;
  //유사배열을 배열로 바꿈
  //console.log(Array.from(listClone))
  Array.from(listClone).forEach(function(clone){
    clone.style.transform=`translateX(${-move}px)`
  })

  timer=window.requestAnimationFrame(render)

}


let add=function(){
  setInterval(function(){
    panoWrap.appendChild(listWrap.cloneNode(true));
    listClone=panoWrap.children;
  },10000);
}

let event=function(){
  controls.querySelector('.play_on').addEventListener('click',function(e){
    e.preventDefault();
    //console.log(this)
    if(this.classList.contains('active')){
      this.classList.remove('active')
      window.cancelAnimationFrame(timer)
    }else{
      this.classList.add('active')
      render();
    }
  })
}


window.addEventListener('load',function(){
  init()
})































  
  // /* mainpage */
  
  // const getRandomInt = (min, max) => {
  //   min = Math.ceil(min);
  //   max = Math.floor(max);
  //   return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  // };
  
  // const stars = document.getElementById("stars");
  
  // const render = () => {
  //   // Create stars ✨
  //   stars.innerHTML = "";
  //   const w = window.innerWidth;
  //   const h = window.innerHeight;
  //   const starCount = getRandomInt(42, 100);
  
  //   for (let i = 0; i < starCount; i++) {
  //     const star = document.createElement("div");
  //     star.classList.add("star");
  //     const x = getRandomInt(0, w);
  //     const y = getRandomInt(0, h);
  //     star.style.setProperty("--x", `${x}px`);
  //     star.style.setProperty("--y", `${y}px`);
  //     stars.appendChild(star);
  //   }
  // };
  
  // requestAnimationFrame(render);
  // const volume = document.getElementById("volume");
  // const audio = document.getElementById("synthwave-track");
  
  // const volumeToggle = () => {
  //   if (volume.classList.contains("playing")) {
  //     volume.classList.remove("playing");
  //     audio.pause();
  //   } else {
  //     volume.classList.add("playing");
  //     audio.play();
  //   }
  // };

  Splitting({
    whitespace: true
  });

  /* contact */

  document.querySelector('#contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.elements.name.value = '';
    e.target.elements.email.value = '';
    e.target.elements.message.value = '';
  }); 