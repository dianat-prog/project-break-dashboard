const divList_Url =document.querySelector('.list');


function paintList(){
    const plantillaList =`<div class='title'>
                           <h2>Añade tu enlace de interés</h2> 
                           <img src='./assets/img/enlace.png' alt='link'>
                          </div>
                          <div class='input-container'>
                            <input type='text' id='name-input' placeholder='Nombre de tu enlace' required>
                            <input type='text' id='url-input' placeholder='Pega aquí la URL' required>
                            <button id='add-link-button' class='add-link-button'>Añadir enlace</button>
                          </div>
                          <ul id='links-container' class='links-container'></ul> `;
 divList_Url.innerHTML=plantillaList;



}

paintList();

//Cargar las Urls que ha guardadas en localstore
function loadUrlLocalstore(){
    let arrURLs =localStorage.getItem("links") || "[]";
     arrURLs =JSON.parse(arrURLs);

    //arrURLs=JSON.parse(arrURLs);
    arrURLs.forEach(elementLink => {
        const nameUrl=elementLink.name;
        const Url =elementLink.Url

        painURLli(nameUrl,Url);
   });
}

//Función que guarda o elimina la Url en LocalStore
function saveDeleteUrlLocalstore(nameUrl,Url,deleteUrl){
  if (nameUrl.length==0 || Url.length ==0){ return}

    let arrURLs = localStorage.getItem("links") || "[]";
     arrURLs = JSON.parse(arrURLs);
   
     

     if(deleteUrl){
        //Si entra aqui es porque va a eliminar la Url indicada
        const listLinks = arrURLs.findIndex(function(e) { return e.name === nameUrl && e.Url === Url });
    
        if (listLinks >-1){
            arrURLs.splice(listLinks, 1);
        }
     }else{
          //Si entra aqui es porque va a añadir la Url indicada
        const newURL = {
            name: `${nameUrl}`,
            Url: `${Url}`
         };
        //Añadimos la URL al array
        arrURLs.push(newURL);
     
     }
   
     //Guardamos en localstore
     localStorage.setItem('links', JSON.stringify(arrURLs));  
     
  
}

function deleteUrlListUl(nameURL, Url){
    //Nos traemos todos los objetos li que tiene la lista de Links 
    //para eliminarlo
 const ulElement =document.querySelectorAll('.links-container li a');

 for (let i = 0; i < ulElement.length; i++) {
    const aElement =ulElement[i];
   if (aElement.href===Url && aElement.textContent===nameURL){
        ulElement[i].parentNode.remove();
      
    }
   
  }

}



function painURLli(nameUrl,Url){
    const ulElement =document.getElementById('links-container');
    ulElement.style.height='540px';
    const liElement =document.createElement('li');

    //Elemento a
    const aElement =document.createElement('a');
    aElement.href=Url;
    aElement.innerText=nameUrl;
    aElement.target=`_blank`;

    //Buton
    const btn =document.createElement('button');
    btn.innerText='X';

    liElement.appendChild(aElement);
    liElement.appendChild(btn);

    ulElement.appendChild(liElement);

    //Añadimos el evento del botón
    btn.addEventListener('click',function(){
       saveDeleteUrlLocalstore(nameUrl, Url,true)
       deleteUrlListUl(nameUrl, Url);
    })
   
}
loadUrlLocalstore();

//Esta función me dice si el DOM se ha cargado para añadir el evento al botón que hay en el elemento li
document.addEventListener('DOMContentLoaded', function() {
    
    const btnAddLink=document.getElementById('add-link-button');
    btnAddLink.style.width='390px'
    btnAddLink.style.marginLeft='10px'
    btnAddLink.addEventListener('click',function(){
        const nameUrl =document.getElementById('name-input').value;
        const Url =document.getElementById('url-input').value;

     if (nameUrl.length===0 || Url.length===0){return}

        saveDeleteUrlLocalstore(nameUrl,Url,false);
        painURLli(nameUrl,Url);
       
     })
});

