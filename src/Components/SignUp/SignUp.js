import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./signUp.css";

function SignUp() {
  const initialValues = {
    username: "",
    email: "",
    street:"",
    city:"",
    postalCode:"",
    password: "",
    confirmPassword: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  let navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      fetch("https://hidden-lowlands-43310.herokuapp.com/api/auth/register", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: formValues.username,
          email: formValues.email,
          street:formValues.street,
          city: formValues.city,
          postalCode:formValues.postalCode,
          password: formValues.password,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.id) {
            navigate("/login");
          } else {
            console.log("unable to register");
          }
        });
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.street) {
      errors.street = "Street is required!";
    }
    if (!values.city) {
      errors.city = "City is required!";
    }
    if (!values.postalCode) {
      errors.postalCode = "PostalCode is required!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 16) {
      errors.password = "Password cannot exceed more than 16 characters";
    } else if (values.password !== values.confirmPassword) {
      errors.confirmPassword = "Those passwords didnt match. Try again.";
    }
    return errors;
  };

  return (
    <div className="signUp-container">
      <form className="signUp-form" onSubmit={handleSubmit}>
        <div className="signUp-title">
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
              value={formValues.username}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.username}</p>
          <div className="field">
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.street}</p>
          <div className="field">
            <input
              type="text"
              name="street"
              placeholder="Street"
              value={formValues.street}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.street}</p>
          <div className="field">
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formValues.city}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.city}</p>
          <div className="field">
            <input
              type="text"
              name="postalCode"
              placeholder="PostalCode"
              value={formValues.postalCode}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.postalCode}</p>
          <div className="field">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.password}</p>
          <div className="field">
            <input
              type="password"
              name="confirmPassword"
              placeholder="confirmPassword"
              value={formValues.confirmPassword}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.confirmPassword}</p>
          <button className="signUp-button ">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
