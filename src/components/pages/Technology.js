// import ScrollToTop from "react-scroll-to-top";
// import ArticlesVertical from "../ArticlesVertical/ArticlesVertical";

// const ads = require("../API_Data/TechnologyAds.json");
// const articles = require("../API_Data/TechnologyArticles.json");

// const Technology = () => {
//   return (
//     <div className="Technology">
//       <ArticlesVertical
//         ads={ads}
//         articles={articles}
//         articleLink="https://www.techradar.com/news/microsoft-teams-users-are-using-it-to-send-confidential-business-data"
//         category="Internet"
//         photo="https://cdn.mos.cms.futurecdn.net/CGyp2r9sbsdSekNPWVh2ta-970-80.jpg.webp"
//         title="Microsoft Teams users are using it"
//         date="September 9 2022"
//       />
//       <ScrollToTop className="scroll-arrow" color="white" smooth />
//     </div>
//   );
// };

// export default Technology;

// import ArticlesVertical from "../ArticlesVertical/ArticlesVertical";
import React, { useState } from "react";
import ScrollToTop from "react-scroll-to-top";
import ArticlesVertical2 from "../ArticlesVertical/ArticleVertical2";
// import Photo from "../Images/Brahmastra.jpg";
// import { Link } from "react-router-dom";
// import CatCompo from "../../Utility/BollywoodCompo";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { TechnologyData } from "../../Utility/TechnologyArticles";
import TopPosts2 from "../TopPosts/TopPosts2";
import "../TopPosts/TopPosts.css";

// const articles = require("../API_Data/BollywoodArticles.json");
const ads = require("../API_Data/TechnologyAds.json");

const Technology = () => {
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
      {TechnologyData.map((item) => {
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
      <button className="load-more-btn" style={{ color: "black" }}>
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
        photo="https://cdn.mos.cms.futurecdn.net/CGyp2r9sbsdSekNPWVh2ta-970-80.jpg.webp"
        title="Microsoft Teams users are using it"
        category="Internet"
        date="September 9 2022"
      />
      <ScrollToTop className="scroll-arrow" color="black" smooth />
    </div>
  );
};

export default Technology;
