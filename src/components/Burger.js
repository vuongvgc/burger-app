import React, { Component } from "react";
class Burger extends Component {
  render() {
    return (
      <div className="burger__box">
        <h3 className="text-center">Cửa Hàng Burger CyberSoft</h3>
        <div className="breadTop"></div>
        <div className="salad"></div>
        <div className="cheese"></div>
        <div className="beef"></div>
        <div className="breadBottom"></div>
      </div>
    );
  }
}

export default Burger;
