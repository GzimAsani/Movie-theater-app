import React, { useState } from "react";
import "./Signin.css";

function Signin() {
  const [signinEmail, setsigninEmail] = useState("");
  const [signinPassword, setsigninPassword] = useState("");

  const onEmailChange = (event) => {
    setsigninEmail(event.target.value);
  };
  const onPasswordChange = (event) => {
    setsigninPassword(event.target.value);
  };

  const onSubmitSignin = () => {
    fetch("http://localhost:3000/signin", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: signinEmail,
        password: signinPassword,
      }),
    })
      .then((response) => response.json())
      .then(data => console.log(data)) 
  };

  //   useEffect(() => {
  //     fetch("http://localhost:3000")
  //       .then((response) => response.json())
  //       .then(console.log);
  //   }, []);

  return (
    <div className="main">
      <h3>Sign In</h3>
      <div className="email">
        <label>Email</label>
        <input
          onChange={onEmailChange}
          className="emailInput"
          type="email"
          name="email-address"
          id="email-address"
        />
      </div>
      <div className="password">
        <label>Password</label>
        <input
          onChange={onPasswordChange}
          className="passwordInput"
          type="password"
          name="password"
          id="password"
        />
      </div>
      <div className="signin">
        <input
          onClick={onSubmitSignin}
          className="signinInput"
          type="submit"
          value="Sign in"
        />
      </div>
    </div>
  );
}

export default Signin;
