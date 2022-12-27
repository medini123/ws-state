import React  from 'react'
import personalImg from "../components/PersonalImg.png.jpg"


class Profile extends React.Component{
    constructor(){
      super();
      this.state = {
        
        show : true,
        //timer : 0,
        Person : { 
                  fullName : "Zied Medini",
                  bio : "Licencié en management", 
                  imgSrc: personalImg.png ,
                  profession:"Web Developer",
                 
                },
              
      }
      
      this.clickHandler = this.clickHandler.bind(this);
    }
    clickHandler() {
        this.setState(function (prevState){
          return{
            show : !prevState.show ,
          }
        });
      }
     // componentDidMount() {
       // setInterval(() => this.setState({ timer: this.state.timer + 1 }), 1000);
    

      render(){
        if(this.state.show)
        return (
          <div className="container" 
          style={{textAlign:"center"}}
          >
            <button className="btn btn-primary" onClick={this.clickHandler}  style={{
            width: "20%",
            height: "30px",
            marginTop: "5%",
            backgroundColor: "green",
            border: "1px black solid"
          }}>Hide</button>
            <br/>
            <img src={personalImg} alt="img peronel" width="400" height="430" />
            <h1>{this.state.Person.fullName} </h1>
            <h3>{this.state.Person.bio}</h3>
            <h3>{this.state.Person.profession}</h3>
            <h2> {this.state.timer}</h2> 
          </div>
          );
          else return (
            <div className="container">
          <button className="btn btn-primary" onClick={this.clickHandler}>Show</button>
          </div>
          );
      }
   
    }
 
    export default Profile;
 