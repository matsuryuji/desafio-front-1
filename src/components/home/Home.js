import React from "react";
import HOMEIMAGE from "../../../public/assets/banner.svg";
import "./Home.css";
import { useState, useEffect } from "react";
import axios from "axios";
export default function Home() {
  const [data, setData] = useState([{}]);
  useEffect(() => {
    axios.get("http://localhost:3333/books").then((response) => {
      setData(response.data);
    });
    console.log(data);
  }, []);

  return (
    <div className="home">
      <img src={HOMEIMAGE} width="1120px" height="702px" />
      <div className="home-category">
        <h3>Categories</h3>
        <div className="home-categories">
          <span>Art & Fashion</span>
          <span>Business</span>
          <span>Food & Drink</span>
          <span>Education</span>
          <span>Film, TV & Drama</span>
          <span>Biography</span>
        </div>
      </div>
      <div className="star-rating">
        <span style={{width: "50%"}}></span>
      </div>
      {/* <img src={data[0].image_url} alt=""/>
      <h3>{data[0].author}</h3> */}
      <div className="home-books">
        {data?.map((e, index) => {
          return (
            <>
              <div>
                <img src={e.image_url} />
                <div>
                  <span>{e.author}</span>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
