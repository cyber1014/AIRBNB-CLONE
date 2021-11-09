import React from "react";
import "./Home.css";
import Banner from "./Banner";
import Card from "./Card";

function Home() {
  return (
    <div className="home">
      <Banner />
      <div className="home_section">
        <Card
          src="https://a0.muscache.com/im/pictures/185705a3-3bc1-459d-9f8a-c551aeff490f.jpg?im_w=1200"
          title="Online Experience"
          description=" The nature of the cottage makes it a romantic suite for a couple or a cozy farm living space for a family of 2"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/9bc18fb2-4d2a-4026-9251-abda3607cb9d.jpg?im_w=1200"
          title="Unique Stays"
          description=" There is an abundance of trees, birds and fresh mountain air which makes it the perfect place for people wishing to get off the grid and to relax"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/cde5287e-04b9-4690-85df-84d6101c25fa.jpg?im_w=1200"
          title="Entire homes"
          description="Comfortable private place,with room for the family and friends "
        />
      </div>
      <div className="home_section">
        <Card
          src="https://a0.muscache.com/im/pictures/7c6b41a5-9a03-421f-a775-5d8e23446d8c.jpg?im_w=1200"
          title="3 Bedroom Flats in Bournemouth"
          description="Breathtaking ocean view beach house in Malibu. Your perfect peaceful ocean escape. This condo opens up to the Pacific ocean sights and sounds. You will catch dolphins and birds daily and few whales !"
          price="$650/Night"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/f6cbea48-1a3c-4970-9473-2808af2e15dc.jpg?im_w=1200"
          title="House in Washington"
          description=" A dreamy airstream above the clouds with a breathtaking panoramic view of the Pacific ocean. This eco-space is perched on 12 acres of untouched sprawling nature, and redesigned by a nature-lover himself"
          price="$700/Night"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/miso/Hosting-35355416/original/6b8a41aa-ca7c-4d57-9a36-c5ffd922ec66.jpeg?im_w=1200"
          title="Farm House in Amsterdam"
          description="the Inn at Palm Springs has been a favorite spot for yogis, couples, hikers, cyclists, mindfulness workshops, triathletes, artists, and festival-goers who travel here from near and far."
          price="$800/Night"
        />
      </div>
    </div>
  );
}

export default Home;
