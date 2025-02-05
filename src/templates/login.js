import { signIn, checkGoogle } from '../lib/index.js';

export const login = () => {
  const loginPage = document.createElement('main');
  loginPage.className = 'login-page';
  loginPage.id = 'login-page';
  const usserLoginPage = `
    

  <header class="title-menu">

  <div class="titleContainer">
   <h1 class="title">Together</h1>
  </div>

  <div class="homeContainer">
   <a class="iconContainer" href="#/"> <img src="./imagenes/casa.png" class="menu-icon"></a>
  </div>

  </header>


  <div class= "loginContainer">

    <section class= "img-section">
     <img class="img-skating" src="./imagenes/skating.png" />
    </section>



    <section class= "form-section">

      <form id="login">

       <section class="login-user">
         <input type="email" id="emailUser" class="login-input" placeholder="Ingresa tu correo" required >
         <input type="password" id="passwordUser" class="login-input" placeholder="Ingresa tu contraseña" />
         <button type="button" name="btn-login" class="button-login" id="accessButton">
         Inicia Sesión</button>
       </section>
       
       <section class="login-google">
        
         <img class="img-google" src="./imagenes/google.png" />

         <a id="googleButton" class="googleButton" >Inicia sesión con Google</a>
       </section>

       <section class="login-newAccount">
          
          <p class="terms">¿No tienes una cuenta?</p>
          <a class="link-newAccount" href="#/register" id="checkUser">Regístrate</a>
         
       </section>

    
      </form>

    </section>

  </div>

    `;

  const printPage = document.getElementById('root');
  printPage.innerHTML = usserLoginPage;

  printPage.querySelector('#checkUser').addEventListener('click', () => {
    window.location.hash = '#/register';
  });


  // Evento para Ingresar
  printPage
    .querySelector('#accessButton')
    .addEventListener('click', () => {
      const emailRegister = document.querySelector('#emailUser').value;
      const passwordRegister = document.querySelector('#passwordUser').value;
      signIn(emailRegister, passwordRegister);
    });

  // Evento para ingresar con Google
  printPage
    .querySelector('#googleButton')
    .addEventListener('click', () => {
      checkGoogle();
      //window.location.hash = "#/wall";
    });


  return printPage;
};
