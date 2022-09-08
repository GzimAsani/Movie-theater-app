import React,{useState, useEffect} from 'react'
import { View } from './View';
import "./Homepages.css"
import { Home } from '@mui/icons-material';


function Homepages() {
  const initialValues = {
    description: "",
    duration: "",
    language: "",
    date: "",
    country: "",
    genre: "",
    movieImage: "",
    image: "",
    title: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
 
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
    if (isSubmit) {
      fetch("https://hidden-lowlands-43310.herokuapp.com/movies", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          description: formValues.description,
          duration: formValues.duration,
          movielanguage: formValues.language,
          releasedate: "2022-12-12",
          country: formValues.country,
          genre: "comedy",
          movieimg: "https://m.media-amazon.com/images/M/MV5BOTYyZjVhYWMtYTU1Zi00M2UzLWIwNGMtOGFkYmRlODE0NGQ5XkEyXkFqcGdeQXVyMTA2ODkwNzM5._V1_.jpg",
          posterimg: "https://static1.moviewebimages.com/wordpress/wp-content/uploads/2022/08/Kevin-Hart-and-Mark-Wahlberg-run-with-a-turtle-in-the-Netflix-movie-Me-Time.jpg",
          title: "metime2",
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
        })
    }
      
        
    
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required!";
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
              name="description"
              placeholder="description"
              value={formValues.description}
              onChange={handleChange}
            />
          </div>
          
          <div className="field">
            <input
              type="text"
              name="duration"
              placeholder="duration"
              value={formValues.duration}
              onChange={handleChange}
            />
          </div>
          
          <div className="field">
            <input
              type="language"
              name="language"
              placeholder="language"
              value={formValues.language}
              onChange={handleChange}
            />
          </div>
         
          <div className="field">
            <input
              type="text"
              name="country"
              placeholder="country"
              value={formValues.country}
              onChange={handleChange}
            />
          </div>
          <button className="signUp-button ">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Homepages;
