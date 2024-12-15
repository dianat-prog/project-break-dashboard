let index = 0;
let body =document.getElementById.body;
const footerElement=document.querySelector('.footer');


let  listImg = ['moon.webp','nebulosa.webp', 'clouds.webp','mars.webp','sand.webp','nasa.webp','start.webp','earth.webp','redSand.webp','sol.webp'];

function intImg(){

  document.body.style.backgroundImage = `url(./assets/img/${listImg[3]})`
 setInterval(changeImg,6000)
}


function changeImg() {
   
   document.body.style.backgroundImage = `url(./assets/img/${listImg[index]})`
  
  index++; 
                  
   if(index === 9){
    index = 0;
   }
     
    
    
}


/*FOOTER */
function paintFooter(){

  const plantilla=`<nav>
                    <a href='./digital-clock.html'>
                      <img src='./assets/img/reloj.png' alt='clock'>
                    </a>
                    <a href='./key-generator.html'>
                      <img src='./assets/img/candado.png' alt='lock'>
                    </a>
                    <a href='./short-list.html'>
                     <img src='./assets/img/enlace.png' alt='link'>
                    </a>
                    <a href='./weather.html'>
                      <img src='./assets/img/nube.png'>
                    </a>
                   </nav>`;
                 footerElement.innerHTML=plantilla;

}

 

paintFooter();

document.addEventListener('DOMContentLoaded', function() {
    
  intImg();
});



