  
  const whatsupA =  document.querySelector(".whatsup a");
  const whatsupoffers = document.querySelector(".whatsup_buttons a");



  // let myMediaQuery = window.matchMedia('(max-width: 786px)');
  // function widthChangeCallback(myMediaQuery) {
  //   if(myMediaQuery.matches) {
  //     console.log("mobile")
  //     whatsupA.href = "https://api.whatsapp.com/send?phone=+971564013448";
  //     whatsupoffers.href = "https://api.whatsapp.com/send?phone=+971564013448" ;
  //     console.log(whatsupoffers.href)
  //    } else {
   
  //    }
  // }
  // myMediaQuery.addEventListener('change', widthChangeCallback);

  if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    // true for mobile device
    console.log("mobile")
    whatsupA.href = "https://api.whatsapp.com/send?phone=+971564013448";
    whatsupoffers.href = "https://api.whatsapp.com/send?phone=+971564013448" ;
  }else{
    // false for not mobile device
    document.write("not mobile device");
  }


    
  
