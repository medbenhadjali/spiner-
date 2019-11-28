import React from "react";
import "./Styles/Card.css";
import fullStar from "../image/startp.png";
import emptyStar from "../image/startv.png";
import MinRate from "./MinRate";

export default function Card({ info }) {
    // console.log(info)
  // const renderRate = rate => {
  //   // console.log(rate);
  //   switch (Number(rate)) {
  //     case 1:
  //       return (
  //         <div className="starts-container" >
  //           <img style={{width:"20%",height:"100%"}} src={fullStar} alt="image" />
  //           <img style={{width:"20%",height:"100%"}} src={emptyStar} alt="image" />
  //           <img style={{width:"20%",height:"100%"}} src={emptyStar} alt="image" />
  //           <img style={{width:"20%",height:"100%"}} src={emptyStar} alt="image" />
  //           <img style={{width:"20%",height:"100%"}} src={emptyStar} alt="image" />
  //         </div>
  //       );
  //       break;
  //     case 2:
  //       return (
  //         <div className="starts-container">
  //           <img style={{width:"20%",height:"100%"}} src={fullStar} alt="image" />
  //           <img style={{width:"20%",height:"100%"}} src={fullStar} alt="image" />
  //           <img style={{width:"20%",height:"100%"}} src={emptyStar} alt="image" />
  //           <img style={{width:"20%",height:"100%"}} src={emptyStar} alt="image" />
  //           <img style={{width:"20%",height:"100%"}} src={emptyStar} alt="image" />
  //         </div>
  //       );
  //       break;
  //     case 3:
  //       return (
  //         <div className="starts-container">
  //           <img style={{width:"20%",height:"100%"}} src={fullStar} alt="image" />
  //           <img style={{width:"20%",height:"100%"}} src={fullStar} alt="image" />
  //           <img style={{width:"20%",height:"100%"}} src={fullStar} alt="image" />
  //           <img style={{width:"20%",height:"100%"}} src={emptyStar} alt="image" />
  //           <img style={{width:"20%",height:"100%"}} src={emptyStar} alt="image" />
  //         </div>
  //       );
  //       break;
  //     case 4:
  //       return (
  //         <div className="starts-container">
  //           <img style={{width:"20%",height:"100%"}} src={fullStar} alt="image" />
  //           <img style={{width:"20%",height:"100%"}} src={fullStar} alt="image" />
  //           <img style={{width:"20%",height:"100%"}} src={fullStar} alt="image" />
  //           <img style={{width:"20%",height:"100%"}} src={fullStar} alt="image" />
  //           <img style={{width:"20%",height:"100%"}} src={emptyStar} alt="image" />
  //         </div>
  //       );
  //       break;
  //     case 5:
  //       return (
  //         <div className="starts-container">
  //           <img style={{width:"20%",height:"100%"}} src={fullStar} alt="image" />
  //           <img style={{width:"20%",height:"100%"}} src={fullStar} alt="image" />
  //           <img style={{width:"20%",height:"100%"}} src={fullStar} alt="image" />
  //           <img style={{width:"20%",height:"100%"}} src={fullStar} alt="image" />
  //           <img style={{width:"20%",height:"100%"}} src={fullStar} alt="image" />
  //         </div>
  //       );
  //       break;
  //   }
  // };

  // console.log(info.name)
  return (
    <div className="card-container">
      <div className="image-container">
        <div className="rate-container"> </div>
        <img className="image" src={info.link} alt="logo" />
      </div>
      <div className="footer">
        <span className="title">{info.Name}/</span>
        <span className="date">{info.Date}</span>
        <MinRate rate={info.Rate}/>
      </div>
    </div>
  );
}
