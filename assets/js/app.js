const closeModal = document.querySelector("#close-ad");
closeModal.addEventListener("click", function(){
    const showModal = document.querySelector(".show-add");
    showModal.style.display = "none";
    console.log(showModal)
})
