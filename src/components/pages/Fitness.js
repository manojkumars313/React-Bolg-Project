// import ScrollToTop from "react-scroll-to-top";
// import ArticlesVertical from "../ArticlesVertical/ArticlesVertical";

// const ads = require("../API_Data/FitnessAds.json");
// const articles = require("../API_Data/FitnessArticles.json");

// const Fitness = () => {
//   return (
//     <div className="Fitness">
//       <ArticlesVertical
//         ads={ads}
//         articles={articles}
//         articleLink="https://www.healthline.com/health/fitness/10-ways-to-move-more"
//         category="Fitness"
//         photo="https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//         title="10 Ways to Move More in Everyday Life"
//         date="October 9 2022"
//       />
//       <ScrollToTop className="scroll-arrow" color="white" smooth />
//     </div>
//   );
// };

// export default Fitness;

// import ArticlesVertical from "../ArticlesVertical/ArticlesVertical";
import React, { useState } from "react";
import ScrollToTop from "react-scroll-to-top";
import ArticlesVertical2 from "../ArticlesVertical/ArticleVertical2";
// import Photo from "../Images/Brahmastra.jpg";
// import { Link } from "react-router-dom";
// import CatCompo from "../../Utility/BollywoodCompo";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { FitnessData } from "../../Utility/Fitness";
import TopPosts2 from "../TopPosts/TopPosts2";
import "../TopPosts/TopPosts.css";

// const articles = require("../API_Data/BollywoodArticles.json");
const ads = require("../API_Data/FitnessAds.json");

const Fitness = () => {
  const navigate = useNavigate();
  const [adsData, setAdsData] = useState([]);

  useEffect(() => {
    setAdsData(ads);
  }, []);

  const handleNavigate = (id, item) => {
    console.log("Parameters", id, item);

    //Push
    navigate(`/Details/${id}`, {
      state: { Details: item },
      // replace: true,
    });
  };

  return (
    <div className="Bollywood">
      <div className="vh-header">
        <h1 className="vh-heading">Latest Articles</h1>
        <hr className="vh-hr" />
      </div>
      {FitnessData.map((item) => {
        return (
          <div key={item.id} onClick={() => handleNavigate(item.id, item)}>
            <ArticlesVertical2
              photoUrl={item.photoUrl}
              // photo={Photo}
              title={item.title}
              description={item.description}
              category={item.category}
              date={item.date}
            />
          </div>
        );
      })}
      <button className="load-more-btn">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2267/2267918.png"
          alt=""
        />
        Load More
      </button>
      {/* <ArticlesVertical ads={bollyWoodAds} /> */}
      <div className="ad-box2">
        <h2>Advertisement</h2> <br />
        {adsData.map((data) => {
          return (
            <iframe title={data.title} src={data.link} frameBorder="0"></iframe>
          );
        })}
      </div>
      <TopPosts2
        photo="https://img.freepik.com/free-photo/young-fitness-man-studio_7502-5008.jpg"
        title="10 Ways to Move More in Everyday Life"
        category="Fitness"
        date="Marcg 9 2022"
      />
      <ScrollToTop className="scroll-arrow" color="black" smooth />
    </div>
  );
};

export default Fitness;
