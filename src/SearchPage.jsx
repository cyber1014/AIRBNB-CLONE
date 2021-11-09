import React from "react";
import "./SearchPage.css";
import Button from "@material-ui/core/Button";
import SearchResult from "./SearchResult";
import imagesss1 from "./images1.jpg";
import images2 from "./images2.jpg";
import images3 from "./images3.jpg";
import images4 from "./images4.jpg";
import images5 from "./images5.jpg";

function SearchPage() {
  return (
    <div className="searchpage">
      <div className="searchpage_info">
        <p> 62 Stays · 26 May to 30 May · 2 Guest </p>
        <h1> Stays nearby </h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined">More filters</Button>
      </div>
      <SearchResult
        img={imagesss1}
        Location="Tiny house in center of Turkey "
        title="Unique little cottage in Hallingdal Sangefjell in Ål"
        description="2 guests · 1 bedroom · 1 bed · 1 bathroom"
        star={4.73}
        price="$30 / night "
        total="$80/ total "
      />
      <SearchResult
        img={images2}
        Location="Modern house in middle of Amsterdam "
        title="Modern wooded cottage with unobstructed views"
        description="2 guests · 1 bedroom · 1 bed · 1 bathroom"
        star={3.8}
        price="$80/ night"
        total="$160/ total"
      />
      <SearchResult
        img={images3}
        Location="Luxury House in Paris"
        title="New caravan idyllic in the countryside by the lake"
        description="4 guests · 1 bedroom · 3 beds · 1 bathroom"
        star={4.2}
        price="$40/ night"
        total="$75/ total"
      />
      <SearchResult
        img={images4}
        Location="Amazing apartments in Italy"
        title="Malibu Airstream Eco Retreat Above The Clouds"
        description="4 guests · 2 bedrooms · 2 beds · 1 bathroom"
        star={4.5}
        price="$90/ night"
        total="$200/ total"
      />
      <SearchResult
        img={images5}
        Location="Marvelous Hotel in Los'Angels "
        title="Accommodation in a beautiful Hälsingland environment with its own beach"
        description="4 guests · 1 bedroom · 4 beds · 1 bathroom"
        star={4.8}
        price="$60/ night"
        total="$170/ total"
      />
    </div>
  );
}

export default SearchPage;
