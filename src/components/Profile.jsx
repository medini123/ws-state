import React, {Component} from "react";
import img from "../images/PersonalImg.jpg"



class Profile extends React.Component {
  state = {
   
    name : "zied Medini",
 proffesion: "web developer",
 bio : "licence in management",
 imgSrc : "PersonalImg.jpg",
 show: true,
 timer: 0,
};
componentDidMount() {
  setInterval(() =>this.state({timer:this.state.timer + 1}), 1000);
}




  render() {
    return ( 
    <div>
      {this.state.show && (
        <>
      <img src={img} alt="zied" 
      style={{
        width:"30%", borderRadius:"100%", border:"solid 1px", padding:"3px", height:"auto", margin:"30px"
      }}
      ></img>
     <h1 style={{ color: "red" }}>{this.state.name}</h1>
     <h2>{this.state.proffesion}</h2>
     <h2>{this.state.bio}</h2>
     <h2>{this.state.timer}</h2>
     </>
      )}
     </div>
    )
  }
}
export default Profile;
 