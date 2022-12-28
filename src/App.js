import Profile from "./components/Profile"
import React from "react";
import "./App.css";


class App extends React.Component {
  state = {
    show: true,
  };

  handleShowPerson = () => {
    this.setState({
      ...this.state,
      show: !this.state.show,
    });
  };

  render() {
    
    return (
      <div>
      <>
        <button
          onClick={this.handleShowPerson}
          style={{
            width: "50%",
            height: "30px",
            marginTop: "5%",
            backgroundColor: "pink",
            border: "none",
            borderRadius: "100px",
          }}
        >
          click 
        </button>

        {this.state.show ? <Profile /> : null}
      </>
     
      </div>
    );
    
  
  }
  
}

export default App;

