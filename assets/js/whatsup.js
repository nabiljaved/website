




let myMediaQuery = window.matchMedia('(max-width: 900px)');
  function widthChangeCallback(myMediaQuery) {
    if(myMediaQuery.matches) {
      const bann = document.querySelector('.show-add');
      bann.style.display = 'none'        
     } else {
   
     }
  }
  myMediaQuery.addEventListener('change', widthChangeCallback);

  if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
  
    const bann = document.querySelector('.show-add');
    bann.style.display = 'none'   

    const whatsupA =  document.querySelector(".whatsup a");
    whatsupA.href = "https://api.whatsapp.com/send?phone=+971564013448";
  
    const whatsupoffers = document.querySelectorAll(".whatsup_buttons a");
    

    whatsupoffers.forEach(function(element){
      element.href = "https://api.whatsapp.com/send?phone=+971564013448";
      
    })
  }


    
  
