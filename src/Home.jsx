import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home({ loggedIn }) {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1 className="home-heading">ToyCraft Tales: Tableau's Vision into Toy Manufacturer Data</h1>

      {!loggedIn && (
        <button className="get-started-btn" onClick={() => navigate("/signup")}>
          Get Started →
        </button>
      )}

      <img
        className="home-image"
        src="https://bbst1.badabusiness.com/wp-content/uploads/2021/03/Toy-Names-For-Kids.jpg"

        alt="ToyCraft"
      />
    </div>
  );
}

export default Home;
