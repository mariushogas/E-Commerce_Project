class MyHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <header>
    <div class="loginRegisterForm">
      <span class="icon-close">
        <div class="x"><i class="fa-solid fa-xmark"></i></div>
      </span>

      <div class="form-box login">
        <h2>Login</h2>
        <div class="loginError"></div>
        <div class="btnReset"></div>
        <form class="form" action="#">
          <div class="input-box">
            <span class="icon"><i class="fa-solid fa-envelope"></i></span>
            <input id="emailLogin" name="emailLogin" type="text">
            <label for="emailLogin">Email</label>
          </div>
          <div class="input-box">
            <span class="icon eyeSlash toggleLog"><i class="fa-solid fa-eye-slash"></i> </span>
            <span class="icon"><i class="fa-solid fa-lock"></i></span>
            <input id="passwordLogin" name="passwordLogin" type="password">
            <label for="passwordLogin">Password</label>
          </div>
          <div class="remember-forgot">
            <label><input type="checkbox">Remember me</label>
            <a href="#">Forget Passord ?</a>
          </div>
          <div class="buttons">
            <button type="reset" class="btn" class="resetBtn" id="resetLoginBtn">Reset</button>
            <button type="button" class="btn" class="loginBtn" id="loginBtn">Login</button>
          </div>
          <div class="login-register">
            <p>Don't have an acount?
              <a href="#" class="register-link">Register!</a>
            </p>
          </div>
        </form>
      </div>

      <div class="form-box register">
        <h2>Registration</h2>
        <form id="form" action="#">
          <div class="input-box ">
            <span class="icon"><i class="fa-solid fa-user"></i></span>
            <input id="username" name="username" type="text">
            <label for="username">Username</label>
            <div class="error"></div>
          </div>
          <div class="input-box ">
            <span class="icon"><i class="fa-solid fa-envelope"></i></span>
            <input id="email" name="email" type="text">
            <label for="email">Email</label>
            <div class="error"></div>
          </div>
          <div class="input-box">
            <span class="icon eyeSlash toggleReg"><i class="fa-solid fa-eye-slash"></i> </span>
            <span class="icon"><i class="fa-solid fa-lock"></i></span>
            <input id="password" name="password" type="password">
            <label for="password">Password</label>
            <div class="error"></div>
          </div>
          <div class="remember-forgot">
            <label><input type="checkbox">I agree to the terms & conditions</label>
          </div>
          <div class="buttons">
             <button type="reset" class="btn" class="resetBtn" id="resetRegBtn">Reset</button>
             <button type="submit" id="registerBtn" class="btn">Register</button>
          </div>
          <div class="register">
            <p>Already have an acount? <a href="#" class="login-link">Login!</a></p>
          </div>
        </form>
      </div>

    </div>

    <div class="hamburger">
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
    </div>

    <div class="logo">
      <a href="/">
        <img class="logo-img" src="images/logo/logo-no-background.png" alt="AlphaCamera Logo" />
      </a>
    </div>

    <nav>
      <ul class="nav-menu">
        <li class="nav-item"><a href="/index.html" class="nav-link">HOME</a></li>
        <li class="nav-item">
          <a href="/bodyCategory.html" class="nav-link">
            CAMERAS
          </a>
          <div class="dropdown-content">
            <a href="#">ALPHA 9 II</a>
            <a href="#">ALPHA 7R V</a>
            <a href="#">ALPHA FX III</a>
          </div>
        </li>
       
        <li class="nav-item">
        <a href="/lensCategory.html" class="nav-link">LENSES</a>
        <div class="dropdown-content">
            <a href="#">G-MASTER</a>
            <a href="#">G-SSM II</a>
            <a href="#">VARIO-T ZEISS</a>
          </div>
        </li>
        
        <li class="nav-item">
        <a href="/flashCategory.html" class="nav-link">FLASHES</a>
        <div class="dropdown-content">
            <a href="#">GN60RM</a>
            <a href="#">F60M</a>
            <a href="#">F45RM</a>
          </div>
        </li>
        <li class="nav-item">
        <a href="/flashCategory.html" class="nav-link">SUPPORTS</a>
        <div class="dropdown-content">
            <a href="#">FACTORY MAINTENANCE</a>
            <a href="#">PRODUCT REPAIR</a>
            <a href="#">PRODUCT ADVISORIES</a>
          </div>
        </li>
        <li class="nav-item"><a href="/products.html" class="nav-link">PRODUCTS</a></li>
      </ul>
    </nav>

    <div class="logIn-Cart">
      <button type="button" class="btnLogin-popup"><i class="fa-regular fa-user fa-lg"></i></button>
      <button type="button" class="cart btnCart-popup">
        <div class="fa fa-light fa-cart-shopping fa-lg">
          <span class="quantity">0</span>
        </div>
      </button>
    </div>

  
    <div class="productsInCart">
      <div class="top-cart">
        <span class="icon-close-cart">
          <div class="x"><i class="fa-solid fa-xmark"></i></div>
        </span>
        <h2>Cart</h2>
      </div>
      <div class="bottom-cart">
        <ul id="buyItems">
          <h3 class="empty">Your shopping cart is <br> empty</h3>
        </ul>
      </div>
      <div class="total hidden">
        <div>TOTAL</div>
        <div id="sum-prices"></div>
      </div>
      <button class="btn checkout hidden">Checkout</button>
    </div>

    <div class="helloUser">
      <p></p>
      <button class="btn">Logout</button>
    </div>

  </header>`;
  }
}

customElements.define("my-header", MyHeader);

class MyFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<footer>
    <div class="container">

      <div class="logo">
        <a href="/">
          <img class="logo-img" src="images/logo/logo-no-background.png" alt="AlphaCamera Logo" />
        </a>
      </div>

      <nav>
        <ul class="nav-menu">
          <li class="nav-item"><a href="/index.html" class="nav-link">HOME</a></li>
          <li class="nav-item"><a href="/bodyCategory.html" class="nav-link">BODIES</a></li>
          <li class="nav-item"><a href="/lensCategory.html" class="nav-link">LENSES</a></li>
          <li class="nav-item"><a href="/flashCategory.html" class="nav-link">FLASHES</a></li>
          <li class="nav-item"><a href="/products.html" class="nav-link">PRODUCTS</a></li>
        </ul>
      </nav>

      <p class="paragraph">Customer-first is AlphaCamera primary policy. WE pride ourselves on our helpful, pleasant and
        knowledgeable
        staff of professional photographers. From the moment you walk onto our sales floor, one of our salespeople will
        be there to assist you with whatever question you mai have. You can be confident that one of our highly trained
        and experienced staff will have all the answers.
      </p>

      <p class="reserved">
        ©2023 AlphaCamera. All right reserved.
      </p>

      <ul class="social">
        <li><a href="#">
            <i class="fa-brands fa-facebook fa-xl"></i>
          </a></li>
        <li><a href="#">
            <i class="fa-brands fa-twitter fa-xl"></i>
          </a></li>
        <li><a href="#">
            <i class="fa-brands fa-instagram fa-xl"></i>
          </a></li>
      </ul>


    </div>
  </footer> `;
  }
}

customElements.define("my-footer", MyFooter);
