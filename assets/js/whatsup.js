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
      
  const whatsupA =  document.querySelector(".whatsup a");
  whatsupA.href = "https://api.whatsapp.com/send?phone=+971564013448";
  const whatsupoffers = document.querySelectorAll(".whatsup_buttons a");
    
    whatsupoffers.forEach(function(element){
      element.href = "https://api.whatsapp.com/send?phone=+971564013448";
      
    })
  }


    
  
