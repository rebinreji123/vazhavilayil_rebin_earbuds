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
  
    function modelLoaded() {
      hotspots.forEach((hotspot) => {
        hotspot.style.display = "block";
      });
    }
  
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

