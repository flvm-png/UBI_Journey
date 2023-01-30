import React from "react";

class Avatar extends React.Component {
  constructor(props) {
    super(props);
    const av1 = require('./avatar1.png');
    const av2 = require('./avatar2.png');
    const av3 = require('./avatar3.png');
    this.state = {
      currentImageIndex: 0,
      images: [av1, av2, av3]
    };
  }
  // Function to handle changing the image index
  changeImage(newIndex) {
    this.setState({
      currentImageIndex: newIndex
    });
    console.log(newIndex);
  }

  /*saveImgToDB(index){
    this.useState({currentImageIndex})

  }*/
  
  render() {
    return (
      <div>
      <div className="avSel"> 
      
        {this.state.currentImageIndex === 0 ? <button className="transp" onClick={() => this.changeImage(2)}>&#x2039;</button> : 
            <button className="transp" onClick={() => this.changeImage(this.state.currentImageIndex - 1)}>&#x2039;</button>}

        <img className="img" src={this.state.images[this.state.currentImageIndex]} alt="" />
        
        {this.state.currentImageIndex === 2 ? <button className="transp" onClick={() => this.changeImage(0)}>&#x203A;</button> : 
            <button className="transp" onClick={() => this.changeImage(this.state.currentImageIndex + 1)}>&#x203A;</button>}
      
      </div>
      </div>
    );
  }
}

export default Avatar;