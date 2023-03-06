// import ScrollToTop from "react-scroll-to-top";
// import ArticlesVertical from "../ArticlesVertical/ArticlesVertical";

// const ads = require("../API_Data/FoodAds.json");
// const articles = require("../API_Data/FoodArticles.json");

// const Food = () => {
//   return (
//     <div className="Food">
//       <ArticlesVertical
//         ads={ads}
//         articles={articles}
//         articleLink="https://www.inspiredtaste.net/24412/cocoa-brownies-recipe/"
//         category="Food"
//         photo="https://images.pexels.com/photos/45202/brownie-dessert-cake-sweet-45202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//         title="Choco Brownies"
//         date="October 5 2022"
//       />
//       <ScrollToTop className="scroll-arrow" color="white" smooth />
//     </div>
//   );
// };

// export default Food;

import React, { useState } from "react";
import ScrollToTop from "react-scroll-to-top";
import ArticlesVertical2 from "../ArticlesVertical/ArticleVertical2";
// import Photo from "../Images/Brahmastra.jpg";
// import { Link } from "react-router-dom";
// import CatCompo from "../../Utility/BollywoodCompo";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { FoodData } from "../../Utility/FoodArticles";
import TopPosts2 from "../TopPosts/TopPosts2";
import "../TopPosts/TopPosts.css";

// const articles = require("../API_Data/BollywoodArticles.json");
const ads = require("../API_Data/FoodAds.json");

const Food = () => {
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
      {FoodData.map((item) => {
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
        photo="https://cheapandbestbiriyani.in/wp-content/uploads/2021/12/chicken-biriyani-half-plate.jpg"
        title="Chinken Hyderabadi"
        category="Food"
        date=""
      />
      <ScrollToTop className="scroll-arrow" color="black" smooth />
    </div>
  );
};

export default Food;
