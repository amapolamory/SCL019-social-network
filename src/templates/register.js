import { registerEvent } from '../lib/index.js';

export const register = () => {
  const registerPage = document.createElement('main');
  registerPage.className = 'register-page';
  registerPage.id = 'registerPage';
  const registerView = `
 
  <header class="title-register">
  <div class="titleContainer">
  <h1 class="title">Together</h1>
 </div>

     <a href="#/"> <img src="./imagenes/casa.png" class="menu-register"></a>
  
  </header>


  <section class="register-section">
   <section class= "img-section"> <img src="./imagenes/hanging.png"class="img-hanging"></section>


  

    <div class="white-section">
    
      <form id="form-register" class= "registerForm">

       <section id="form-inputs" class="register-inputs">
          <input type="name" id="registerName" class="registerInput" placeholder="  Ingresa tu nombre" />
          <input type="email" id="registerEmail" class="registerInput" placeholder="  Ingresa tu correo" required >
          <input type="password" id="registerPassword" class="registerInput" placeholder="  Ingresa tu contraseña" />
          <input type="password" id="confirmPassword" class="registerInput" placeholder="  Repite tu contraseña" />
          <button type="button" name="btn-register" class="buttonRegister" id="registerButton">Regístrate</button>
       </section>

      </form>
    
      <div class="grid-bottom"> 
        <p class="terms">¿Ya tienes cuenta?</p>
        <a class="link-login" id="linkLogin" href="#/login" id= "checkUser">Inicia sesión</a>
      </div>

   </div>
  
  </section>`;
  const printPage = document.getElementById('root');
  printPage.innerHTML = registerView;

  printPage
    .querySelector('#registerButton')
    .addEventListener('click', () => {
      const email = document.getElementById('registerEmail').value;
      const password = document.getElementById('registerPassword').value;
      const confirmPassword= document.getElementById('confirmPassword').value;
      const name = document.getElementById('registerName').value;

      if(confirmPassword !== password){
            alert('La contraseña de confirmacion no coincide')
      }
     else{registerEvent(email, password, name);
    }
    });
  return printPage;
};
