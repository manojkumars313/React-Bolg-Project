// import axios from "axios";
// import React, { useState, useEffect } from "react";
import Divider from "@mui/material/Divider";
// import TopPosts from "../TopPosts/TopPosts";
import "../ArticlesVertical/ArticlesVertical.css";
import "../TopPosts/TopPosts.css";
// import { Link } from "react-router-dom";

const ArticlesVertical2 = ({
  // articles,
  photoUrl,
  title,
  description,
  // ads,
  category,
  date,
  // photo,
  // articleLink,
}) => {
  // const [articlesData, setArticlesData] = useState([]);
  // const [adsData, setAdsData] = useState([]);

  // const [visible, setVisible] = useState(4);

  // useEffect(() => {
  //   // fetchData();
  //   setArticlesData(articles);
  // }, [articles]);

  // useEffect(() => {
  //   setAdsData(ads);
  // }, [ads]);

  // const showMoreArticles = () => {
  //   setVisible((previousValue) => previousValue + 4);
  // };

  return (
    <main className="vh-main-container">
      {/* <div className="vh-header">
        <h1 className="vh-heading">Latest Articles</h1>
        <hr className="vh-hr" />
      </div> */}
      <main className="vh-main-container-internal">
        {/* {articlesData.slice(0, visible).map(( index) => { */}

        <Divider />
        <div className="vh-container">
          {/* <Link to="/Details"> */}
          <div
            className="vh-images"
            style={{ backgroundImage: `url(${photoUrl})` }}
          ></div>
          {/* </Link> */}
          <div className="vh-images-caption">
            <h1 className="title">{title}</h1>
            <p className="description">{description}</p>
            <p className="vh-images-date">
              <span className="category">{category}</span>
              <span> / {date}</span>
            </p>
          </div>
        </div>
      </main>
    </main>
  );
};

export default ArticlesVertical2;
