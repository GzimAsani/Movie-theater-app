import { useState } from "react";
import "./login.css";

function Login() {
  const initialValues = { username: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [UserLogin, setUserLogin] = useState("");
  const [PasswordLogin, setPasswordLogin] = useState("");

  const onUserChange = (e) => {
    setUserLogin(e.target.value);
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const onPasswordChange = (e) => {
    setPasswordLogin(e.target.value);
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    fetch("http://localhost:3000/login", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: UserLogin,
        password: PasswordLogin,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
    e.preventDefault();
    setFormErrors(validate(formValues));
  };

  const validate = (values) => {
    const errors = {};

    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 16) {
      errors.password = "Password cannot exceed more than 16 characters";
    }
    return errors;
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="login-title">
          <h2>Login Form</h2>
          <h3>EaglesCinema</h3>
        </div>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <input
              type="text"
              name="username"
              placeholder="Username"
              onChange={onUserChange}
            />
          </div>
          <p>{formErrors.username}</p>
          <div className="field">
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={onPasswordChange}
            />
          </div>
          <p>{formErrors.password}</p>
          <button className="login-button ">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
