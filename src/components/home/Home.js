import React from "react";
import HOMEIMAGE from "../../../public/assets/banner.svg";
import "./Home.css";
import { useState, useEffect, useContext } from "react";
import Book from "../book/Book";
export default function Home({data}) {
  // 
  const menuCategories = [{
    label: 'Business',
    value: 'Business',
  },
  {
    label: 'Education',
    value: 'Education',
  },
  {
    label: 'Food & Drink',
    value: 'Food & Drink',
  },
  {
    label : 'Fiction & Poetry',
    value: 'Fiction & Poetry',
  },
  {
    label : 'Cancel',
    value: '',
  }
]
  const [selectedCategory, setSselectedCategory] = useState('');


  return (
    <div className="home">
      <img src={HOMEIMAGE} width="1120px" height="702px" />
      <div className="home-content">
        <div className="home-category">
          <div className="home-categories">
            <h3>{selectedCategory === '' ? 'Categories' : selectedCategory}</h3>
            {menuCategories?.map(c =>{
              return(
                <>
                <span onClick={() => setSselectedCategory(c.value)}>{c.label}</span>
                </>
              )             
              })}
          </div>
        </div>
        <div className="home-books">
          {
            data?.filter((item)=>{
              if(selectedCategory){
              return item.category === selectedCategory
              }
              return true;
            })?.map(e =>{
              return(
                <>
                <Book book={e}/>
                </>
              );
            })
          }
          {/* {data?.map((data, index) => {
            return (
              <>
              <Book book={data}/>
              </>
            );
          })} */}
        </div>
      </div>
    </div>
  );
}
