import React from "react";
import ReactiveButton from "reactive-button";
import { Icons } from "../icons";
import "./styles.scss";

function View({
  redirectTo,
  email,
  setEmail,
  password,
  setPassword,
  passwordValidation,
  state,
  onClickHandler,
  messageValidation,
  handleKeyPress,
  viewPassword,
  setViewPassword,
}) {
  return (
    <div className="login">
      <div className="login-content flex">
        <div className="logo-main">
          <div className="logo">{Icons("login_main")}</div>
        </div>

        <div className="inputs-main">
          <div className="inputs">
            <p className="text-purple">
              <h2>Inicia sesión</h2>
            </p>
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              className={passwordValidation ? "input-txt error" : "input-txt"}
              onKeyPress={(e) => handleKeyPress(e)}
            />
            {passwordValidation && (
              <p className="text-error">* Email invalido</p>
            )}
            <div className="pass flex">
              <input
                type={viewPassword ? "text" : "password"}
                className="input-txt"
                placeholder="Contraseña"
                onChange={(e) => setPassword(e.target.value)}
                onKeyPress={(e) => handleKeyPress(e)}
              />
              <div
                className="view-pass"
                onClick={() => setViewPassword(!viewPassword)}
              >
                {Icons(viewPassword ? "hidde_eye" : "eye")}
              </div>
            </div>

            {messageValidation && (
              <div className="user-invalid">
                <p className="text-error">Usuario invalido</p>
              </div>
            )}

            <p
              className="text-purple recovery"
              onClick={() => redirectTo("recover-password")}
            >
              ¿Olvidaste tu contraseña?
            </p>

            <div className="button-reactive">
              <ReactiveButton
                className={
                  !password || !email
                    ? "button button-gray"
                    : "button button-blue"
                }
                buttonState={state}
                onClick={() => (password || email) && onClickHandler()}
                shadow={false}
                loadingText={"Iniciando sesión..."}
                outline={false}
                rounded={false}
                block={false}
                idleText={"Inicia sesión"}
              />
            </div>

            {/* <div
              className={!password || !email ? "button-gray" : "button-blue"}
              onClick={() => {
                (password || email) && login();
                // toggleAuthenticated();
                // redirectTo(USER_DATA.onboarding ? "onboarding" : "/");
              }}
            >
              Iniciar sesión
            </div> */}
            <p className="not-account">
              ¿No tienes una cuenta?
              <div
                className="text-purple"
                onClick={() => redirectTo("sing-up")}
              >
                Crea una cuenta
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default View;
