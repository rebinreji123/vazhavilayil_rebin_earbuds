(() => {
    console.log("IIFE Fired");
    //   variables
    const model = document.querySelector("#model");
    const hotspots = document.querySelectorAll(".Hotspot");
  
    const InfoBoxes = [
      {
        title: "dual driver",
        text: "dual driver for better enhanced audio for all audiophiles",
      },
      {
        title: "High-Fidelity Audio",
        text: "Experience crystal-clear sound quality with our advanced acoustic technology, designed to deliver rich, detailed audio for your music, podcasts, and calls.",
      },
      {
        title: "magnetic charging",
        text: "fast charging that can last upto 2 hours from just 5 min",
      },
      {
        title: "Transparency Mode",
        text: "Stay aware of your surroundings with transparency mode, which lets external sound in so you can hear announcements or have conversations without removing your earbuds.",
      },
      {
        title: "long battery life",
        text: "100mah battery for the uninteripated long hours sessions",
      },
    ];
    // functions
  
   
  
    function loadInfo() {
      InfoBoxes.forEach((infoBox, index) => {
        let selected = document.querySelector(`#hotspot-${index + 1}`);
  
        const titleElement = document.createElement("h2");
        titleElement.textContent = infoBox.title;
  
        const textElement = document.createElement("p");
        textElement.textContent = infoBox.text;
  
        selected.appendChild(titleElement);
        selected.appendChild(textElement);
      });
    }
    loadInfo();
  
   
  function showInfo() {
    let infoBoxId = this.getAttribute('slot'); // Assuming 'slot' attribute contains the ID of the info box
    let selected = document.querySelector(`#${infoBoxId}`);
    gsap.to(selected, { duration: 1, autoAlpha: 1 }); // Ensure info box fades in
  }
  
  function hideInfo() {
    let infoBoxId = this.getAttribute('slot'); // Assuming 'slot' attribute contains the ID of the info box
    let selected = document.querySelector(`#${infoBoxId}`);
    gsap.to(selected, { duration: 1, autoAlpha: 0 }); // Ensure info box fades out
  }
  
  
    // event listeners
    model.addEventListener("load", modelLoaded);
  
    hotspots.forEach(function (hotspot) {
      hotspot.addEventListener("mouseover", showInfo);
      hotspot.addEventListener("mouseout", hideInfo);
    });
  })();

  (() => {
    const canvas = document.querySelector("#explode-view");
    const context = canvas.getContext("2d");
    canvas.width = 1920;
    canvas.height = 1080;
    const frameCount = 450;
    const images = [];
  
    const buds = {
      frame: 0,
    };
  
    for (let i = 0; i < frameCount; i++) {
      // console.log(i);
      const img = new Image();
      img.src = `images/vazhavilayil_rebin_animation_${(i + 1).toString().padStart(4, "0")}.webp`;
      images.push(img);
    }
  
    // console.log(images);
  
    //we are not animating a DOM element, but rather an object
    gsap.to(buds, {
      frame: 449,
      snap: "frame",
      scrollTrigger: {
        trigger: "#explode-view",
        pin: true,
        scrub: 1,
        markers: true,
        start: "top top",
      },
      onUpdate: render,
    });
  
    images[0].addEventListener("onload", render);
  
    function render() {
      // console.log(buds.frame);
      // console.log(images[buds.frame]);
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(images[buds.frame], 0, 0);
    }
  })();
  


  // x-ray slider 


   // variables
   let imageCon = document.querySelector('#imageCon'),
   drag = document.querySelector('.image-drag'),
   left = document.querySelector('.image-left'),
   dragging = false,
   min = 0,
   max = imageCon.offsetWidth;

// function
function onDown() {
   dragging = true;
   console.log("on down Called");
}

function onUp() {
   dragging = false;
   console.log("on up Called");
}

function onMove(event) {
   if (dragging === true) {
       let x = event.clientX - imageCon.getBoundingClientRect().left;
       if(x < min) {
           x = min;
       }else if(x > max){
           x = max-4;
       }

       drag.style.left = x + "px";
       left.style.width = x + "px"
   }
}

// event listeners
drag.addEventListener('mousedown', onDown);
document.body.addEventListener('mouseup', onUp);
document.body.addEventListener('mousemove', onMove);

(() => {

  // variables
  let imageCon = document.querySelector('#imageCon'),
      drag = document.querySelector('.image-drag'),
      left = document.querySelector('.image-left'),
      dragging = false,
      min = 0,
      max = imageCon.offsetWidth;

  // function
  function onDown() {
      dragging = true;
      console.log("on down Called");
  }

  function onUp() {
      dragging = false;
      console.log("on up Called");
  }

  function onMove(event) {
      if (dragging === true) {
          let x = event.clientX - imageCon.getBoundingClientRect().left;
          if(x < min) {
              x = min;
          }else if(x > max){
              x = max-4;
          }

          drag.style.left = x + "px";
          left.style.width = x + "px"
      }
  }

  // event listeners
  drag.addEventListener('mousedown', onDown);
  document.body.addEventListener('mouseup', onUp);
  document.body.addEventListener('mousemove', onMove);
})();

