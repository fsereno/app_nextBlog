import { useState, useRef } from "react";
import { signIn } from "next-auth/client";
import { useRouter } from "next/router";

import Title from "../ui/title";
import ErrorMessage from "../ui/error-message";
import classes from "../../styles/auth-form.module.css";
import formClasses from "../../styles/form.module.css";

async function createUser(email, password) {
  const response = await fetch("/api/auth/signup", {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Error creating user!");
  }
  return data;
}

function AuthForm(props) {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const [isLogin, setIsLogin] = useState(true);
  const [showLoginError, setShowLoginError] = useState(false);
  const router = useRouter();

  function switchAuthModeHandler(e) {
    e.preventDefault();
    setIsLogin((prevState) => !prevState);
  }

  async function submitHandler(event) {
    event.preventDefault();
    const isValid = event.nativeEvent.target.checkValidity();
    if (!isValid) {
      return;
    }
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    if (isLogin) {
      const result = await signIn("credentials", {
        redirect: false,
        email: enteredEmail,
        password: enteredPassword,
      });
      if (!result.error) {
        router.replace("/");
      } else {
        setShowLoginError(true);
      }
    } else {
      try {
        const result = await createUser(enteredEmail, enteredPassword);
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <>
      <Title>{isLogin ? "Login" : "Sign Up"}</Title>
      <form className={formClasses.form} onSubmit={submitHandler}>
        <div className={formClasses.controls}>
          <div className={formClasses.control}>
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" required ref={emailInputRef} />
          </div>
          <div className={formClasses.control}>
            <label htmlFor="password">Your Password</label>
            <input
              type="password"
              id="password"
              required
              ref={passwordInputRef}
            />
          </div>
        </div>
        <ErrorMessage show={showLoginError}>
          There was an error, please check your credentials.
        </ErrorMessage>
        <div className={classes.actions}>
          <button>{isLogin ? "Login" : "Create Account"}</button>
          {props.allowUserCreate && (
            <a
              href="#"
              className={classes.toggle}
              onClick={switchAuthModeHandler}
            >
              {isLogin ? "Create new account" : "Login with existing account"}
            </a>
          )}
        </div>
      </form>
    </>
  );
}

export default AuthForm;
