//funciones anonimas autoejecutables

// TRAVELING MENU
((doc)=>{
    const $btnMenu = doc.querySelector('.menu-btn'),
     $menu = doc.querySelector('.menu');

     $btnMenu.addEventListener('click', (e)=> {
        $btnMenu.firstElementChild.classList.toggle('none')
        $btnMenu.lastElementChild.classList.toggle('none')
        $menu.classList.toggle('is-active')
     })
     doc.addEventListener('click', e=> {
        if(!e.target.matches('.menu a')) return false

        $btnMenu.firstElementChild.classList.remove('none')
        $btnMenu.lastElementChild.classList.add('none')
        $menu.classList.remove('is-active')

     })
})(document);


/* CONTACT FORM */
((doc)=> {

   const $form = doc.querySelector(".contact-form"),
   $loader = doc.querySelector(".contact-form-loader"),
   $response = doc.querySelector(".contact-form-response");


   $form.addEventListener("submit", (e) => {
      e.preventDefault();
      $loader.classList.remove("none");
      fetch("https://formsubmit.co/ajax/diego.martinotti@hotmail.com", {
         method: "POST",
         body: new FormData(e.target)
      })
      .then(res => (
         res.ok 
         ? res.json() 
         : Promise.reject(res)))
      .then(json => {
         console.log(json); 
         location.hash = "#thankyou";
         $form.reset();
      })
      .catch(err => {
         console.log(err);
         let message = err.statusText || 'Ocurrio un error al enviar, intenta nuevamente'
         $response.querySelector("h3").innerHTML = `error: ${err.status}: ${message}`
      })
      .finally(()=> {
         $loader.classList.add("none");
         setTimeout(() => {
            location.hash = "#close"
         }, 2000);
      })
   });

})(document);

