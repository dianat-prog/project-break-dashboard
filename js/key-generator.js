const divPass =document.querySelector('.pass');

function paintKey(){

    const plantilla=`<div class='title'>
                        <h2>Crea tu contraseña segura</h2>
                        <img src='./assets/candado.png' alt='imagen candado'>
                     </div>
                     <div id='passwordForm' class='passwordForm'>
                        <label for='length'>Número de caracteres de la contraseña</label>
                        <input type='number' id='length' name='length' min='12' max='50' value='12'>
                        <button type='button' onclick='generatePassword()'>Generar Contraseña</button>
                        <div id='password-result' class='password-result'>
                        </div
                     </div>`

const divTitle=document.createElement('div');
divTitle.classList.add('title');

const h2Element=document.createElement('h2');
h2Element.textContent='Crea tu contraseña segura';

const imgCandado=document.createElement('img');
imgCandado.src='./assets/img/candado.png';
imgCandado.alt='imagen candado';

divTitle.appendChild(h2Element);
divTitle.appendChild(imgCandado);

divPass.appendChild(divTitle);

//-- DIV divPasswordForm
const divPasswordForm=document.createElement('div');
divPasswordForm.id='passwordForm';
divPasswordForm.classList.add('passwordForm');

const labelElement=document.createElement('label');
labelElement.for='length'
labelElement.textContent='Número de caracteres de la contraseña'

const inputNumber =document.createElement('input');
inputNumber.type='number';
inputNumber.id='length';
inputNumber.name='length';
inputNumber.value=12;
inputNumber.min=12;
inputNumber.max=50;

//type='button' onclick='generatePassword()'>Generar Contraseña

const btnPasword=document.createElement('button');
btnPasword.type='button';
btnPasword.textContent='Generar Contraseña';
btnPasword.onclick = function(){ generatePassword(); };

divPasswordForm.appendChild(labelElement)
divPasswordForm.appendChild(inputNumber)
divPasswordForm.appendChild(btnPasword)



//-- DIV divPassResult
const divPassResult =document.createElement('div');
 divPassResult.id='password-result';
 divPassResult.classList.add('password-result');

 divPasswordForm.appendChild(divPassResult);

 divPass.appendChild(divPasswordForm);
 
                     
}

paintKey();

function generatePassword(){

    let lenghtPassw =document.getElementById('length').value;
    lenghtPassw=parseInt(lenghtPassw);
    if (isNaN(lenghtPassw) === true || lenghtPassw < 12 || lenghtPassw > 50){
        alert('Debe indicar un valor entre 12 y 50.')
        return;
    } 

    //if (isNaN(lenghtPassw)) return;
    
    const mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const minusculas = "abcdefghijklmnopqrstuvwxyz";
    const numeros = "0123456789";
    const simbolos = "!@#$%^&*()-_=+";

    const allCharacters = mayusculas + minusculas + numeros + simbolos;

    let password = "";
    password += mayusculas[Math.floor(Math.random() * mayusculas.length)];
    password += minusculas[Math.floor(Math.random() * minusculas.length)];
    password += numeros[Math.floor(Math.random() * numeros.length)];
    password += simbolos[Math.floor(Math.random() * simbolos.length)];

    // Completar la longitud de la contraseña con caracteres aleatorios
    for (let i = password.length; i < lenghtPassw; i++) {
        password += allCharacters[Math.floor(Math.random() * allCharacters.length)];
    }

    password = password.split('').sort(() => Math.random() - 0.5).join('');


    //Mostramos la contraseña
    const divResult =document.getElementById('password-result');

    const plantilla=`Contraseña Generada:
                    <span>${password}</span>`
   divResult.innerHTML=plantilla;



   //Modificamos el stilo
   const divPasswordForm =document.getElementById('passwordForm')
   divPasswordForm.style.height ='170px';

   divResult.style.height ='50px';

}
