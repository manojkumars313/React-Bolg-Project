// import ScrollToTop from "react-scroll-to-top";
// import ArticlesVertical from "../ArticlesVertical/ArticlesVertical";

// const ads = require("../API_Data/HollywoodAds.json");
// const articles = require("../API_Data/HollywoodArticles.json");

// const Hollywood = () => {
//   return (
//     <div className="Hollywood">
//       <ArticlesVertical
//         ads={ads}
//         articles={articles}
//         articleLink="https://www.pexels.com/photo/hollywood-sign-2695679/"
//         category="Hollywood"
//         photo="https://images.pexels.com/photos/2695679/pexels-photo-2695679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//         title="Los Angeles, CA, Verenigde Staten"
//         date="May 7 2022"
//       />
//       <ScrollToTop className="scroll-arrow" color="white" smooth />
//     </div>
//   );
// };

// export default Hollywood;

// import ArticlesVertical from "../ArticlesVertical/ArticlesVertical";
import React, { useState } from "react";
import ScrollToTop from "react-scroll-to-top";
import ArticlesVertical2 from "../ArticlesVertical/ArticleVertical2";
// import Photo from "../Images/Brahmastra.jpg";
// import { Link } from "react-router-dom";
// import CatCompo from "../../Utility/BollywoodCompo";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { HollywoodData } from "../../Utility/HollywoodArticles";
import TopPosts2 from "../TopPosts/TopPosts2";
import "../TopPosts/TopPosts.css";

// const articles = require("../API_Data/BollywoodArticles.json");
const ads = require("../API_Data/HollywoodAds.json");

const Hollywood = () => {
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
      {HollywoodData.map((item) => {
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
        photo="https://images.theconversation.com/files/500899/original/file-20221214-461-22jr1l.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop"
        title="Avatar 3"
        category="Hollywood"
        date="16 December 2022 (India)"
      />
      <ScrollToTop className="scroll-arrow" color="black" smooth />
    </div>
  );
};

export default Hollywood;
