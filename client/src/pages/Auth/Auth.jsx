import React from "react";

import "./Auth.scss";

const Auth = () => {
  return (
    <div className="Auth">
      <div className="auth_content">
        <h3>Админский вход</h3>
        <form>
          <div className="input_form">
            <label htmlFor="login">Логин</label>
            <input type="text" placeholder="Пищите свой логин" id="login" />
          </div>
          <div className="input_form">
            <label htmlFor="login">Пароль</label>
            <input type="text" placeholder="Пищите свой логин" id="login" />
          </div>
          <div className="form_button">
            <button>Вход</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Auth;
