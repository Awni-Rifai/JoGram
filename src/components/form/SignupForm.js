import "./signupForm.scss";

import React from "react";
import FormInput from "./FormInput";
import * as validate from "../../validate";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase";
import Spinner from "../Spinner";

export default function SignupForm(props) {
  const navigate=useNavigate();
  const [loading, setLoading] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [errorCheck, setErrorCheck] = useState({
    name: false,
    email: false,
    password: false,
    confirmPassword: false,
  });
  const [error, setError] = useState("");
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    name: "",
    confirmPassword: "",
  });
  useEffect(() => {
    for (const check in errorCheck) {
      if (errorCheck[check] === false) {
        setIsValid(false);
        return;
      }
    }
    setIsValid(true);
  }, [inputs]);

  const saveInputs = (name, input, check) => {
    setErrorCheck((prevState) => {
      prevState[name] = check;
      return {
        ...prevState,
      };
    });

    setInputs((prevState) => {
      prevState[name] = input;
      return {
        ...prevState,
      };
    });
  };
  const registerUser = async (email, password) => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      updateProfile(auth.currentUser, {
        displayName: inputs.name,
        photoURL: "https://example.com/jane-q-user/profile.jpg",
      })
        .then(() => {
          // Profile updated!
          setInputs({ email: "", password: "", name: "", confirmPassword: "" });
          // ...
        })
        .catch((err) => {
          setError(err.message);
        });
    } catch (err) {
      setLoading(false);
      setError(err.message);
    }
  };

  const submitForm = async (e) => {
    try {
      setLoading(true);
      e.preventDefault();
      validate.validateName(inputs.name);
      validate.validateEmail(inputs.email);
      validate.validatePassword(inputs.password);
      validate.confirmPassword(inputs.password, inputs.confirmPassword);
      const registerCompleted = await registerUser(
        inputs.email,
        inputs.password
      );
      setLoading(false);
      localStorage.setItem('loggedIn','succeeded');
      setError("");
      props.loggedIn();
      
    } catch (err) {
      setLoading(false);
      setError(err.message);
    }
  };

  const inputsData = [
    {
      name: "name",
      validate: validate.validateName,
      htmlFor: "name",
      labelName: "name",
      type: "text",
      id: 1,
      placeholder: "Enter your name",
    },
    {
      name: "email",
      validate: validate.validateEmail,
      htmlFor: "email",
      labelName: "email",
      type: "email",
      id: 2,
      placeholder: "enter your email",
    },
    {
      name: "password",
      validate: validate.validatePassword,
      htmlFor: "password",
      labelName: "password",
      type: "password",
      id: 3,
      placeholder: "enter you password",
    },
    {
      validate: validate.confirmPassword,
      name: "confirmPassword",

      htmlFor: "confirm-password",
      labelName: "confirm-password",
      type: "password",
      id: 4,
      placeholder: "enter password confirmation",
    },
  ];

  return (
    <>
      {loading ? <Spinner /> : ""}
      <section className="signup" style={{ opacity: loading ? "0.2" : "1" }}>
        <div className="signup__container">
          <div className="signup__form">
            <h1>Join us now</h1>
            <small>crate an account with us</small>
            <form onSubmit={submitForm}>
              {inputsData.map((input) => (
                <FormInput
                  key={input.id}
                  {...input}
                    saveInputs={saveInputs}
                    inputData={inputs}
                />
              ))}

              <div className="signup__form__group">
                <span style={{ fontSize: "0.8rem", color: "red" }}>
                  {error}
                </span>

                <button
                  style={{ opacity: isValid ? "1" : "0.1" }}
                  className="signup__form__group--btn"
                  type={isValid ? "submit" : "button"}
                >
                  sign up
                </button>
              </div>
            </form>
          </div>
          <div className="signup__image"></div>
        </div>
      </section>
    </>
  );
}
