import React from "react";
import { data } from "../data";
import "./list.css";

const List = () => {
  return data.map((elem) => {
   
      return (
        <>
          <Item className="padding1" info={elem} key={elem.id}></Item>
        </>
      );
    
  });
};

export default List;

const Item = (props) => {
  const { id, title, category, price, img, desc } = props.info;
  return (
    <div className="grid">
      <div className="image">
        <img src={img} alt="" />
      </div>
      <div className="padding height content">
        <div className="flex1">
          <h3 className="display">{title}</h3>
          <div className="display color align-left">${price}</div>
        </div>

        <hr></hr>
        <p className="desc">{desc}</p>
      </div>
    </div>
  );
};
