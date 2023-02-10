  
  const whatsupA =  document.querySelector(".whatsup a");
  const whatsupoffers = document.querySelector(".whatsup_buttons a");
  var x = window.matchMedia("(max-width: 786px)");
  //console.log(whatsupoffers.href)


  function myFunction(x) {
    if (x.matches) { // If media query matches
      whatsupA.href = "https://api.whatsapp.com/send?phone=+971564013448";
      whatsupoffers.href = "https://api.whatsapp.com/send?phone=+971564013448" ;
      console.log(whatsupoffers.href)
    } else {
      // // document.body.style.backgroundColor = "pink";
      // whatsupA.href = "https://web.whatsapp.com/send?phone=+971564013448";
      // whatsupoffers.href = "https://web.whatsapp.com/send?phone=+971564013448";
      // console.log(whatsupoffers.href)
    }
  }
  
  
  myFunction(x) 