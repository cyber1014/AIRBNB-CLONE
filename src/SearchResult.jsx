import React from "react";
import "./SearchResult.css";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarIcon from "@material-ui/icons/Star";

function SearchResult({
  img,
  Location,
  title,
  description,
  star,
  price,
  total,
}) {
  return (
    <div className="searchresult">
      <img src={img} alt="images" />
      <FavoriteBorderIcon className="searchresult_heart" />
      <div className="searchresult_info">
        <div className="searchresult_infoTop">
          <p>{Location}</p>
          <h3>{title}</h3>
          <p>____</p>
          <p>{description}</p>
        </div>
        <div className="searchresult_infoBottom">
          <div className="searchresult_star">
            <StarIcon className="searchresult_starx" />
            <p>
              <strong>{star}</strong>
            </p>
          </div>
          <div className="searchresult_price">
            <h2>{price}</h2>
            <p>{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
