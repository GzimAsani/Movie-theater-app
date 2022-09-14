import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./Profile.css";
import {favoriteMovies} from "../../data/favoriteMovies";

const ProfilePage = () => {
  const { user } = useContext(AuthContext);
  return (
   
    <section className="profile">
      <div className="profile-details">
        <h1 className="profile-details-title">Account Details</h1>
        <div className="profile-details-center">
          <div className="profile-details-image">
     <img alt="avatar" className="profile-details-avatar" src={`https://ui-avatars.com/api/?name=${user.username}&background=random`} />
     <button>Edit Profile</button>

          </div>
          <div className="profile-details-info">
            <div className="profile-details-item">
              <p>Username</p>
              <h3>{user.username}</h3>
            </div>
            <div className="profile-details-item">
              <p>Email</p>
              <h3>{user.email}</h3>
            </div> <div className="profile-details-item">
              <p>Phone</p>
              <h3>+383045000000</h3>
            </div>
           
            <div className="profile-details-item profile-details-row">
              <p>Joined On: </p>
              <h3>{user.joined.substring(0,10)}</h3>
            </div>
          </div>
          <div className="profile-details-info">
            <div className="profile-details-item">
              <p>Street</p>
              <h3>Rr.Laberia</h3>
          
          </div>
          </div>
        </div>

      </div>

      <div className="favorite-movies">
        <h1>Favorite Movies</h1>
       <div className="favorite-movies-row">
       {favoriteMovies.map(movie => (
          <div key={movie.id} className="favorite-movies-item">
            <img alt="movie poster" src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}/>
            <h1>{movie.title}</h1>
          </div>
        ))}

       </div>
      </div>
      <div className="favorite-movies">
        <h1>Tickets</h1>
        <div className="favorite-movies-row">
        </div>
        
      </div>
      <div className="favorite-movies">
        <h1>Events</h1>
        <div className="favorite-movies-row">
        </div>
        
      </div>

    </section>
  );
}

export default ProfilePage;
