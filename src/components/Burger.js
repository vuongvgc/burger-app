import React, { Component } from "react";
import { connect } from "react-redux";
import { renderBurgerList } from "../selectors/selectBurger";
class Burger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      salad: 0,
      cheese: 0,
      beef: 0,
    };
  }
  render() {
    // console.log(this.props.burger);
    const arrBurger = Object.getOwnPropertyNames(this.props.burger);
    // console.log(arrBurger);
    let burgerList = arrBurger.map((item) => {
      return renderBurgerList(item, this.props.burger[item]);
    });
    return (
      <div className="burger__box">
        <h3 className="text-center">{this.props.title}</h3>
        <div className="breadTop"></div>
        {burgerList}
        <div className="breadBottom"></div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { burger: state.BurgerReducer.burger };
};
export default connect(mapStateToProps)(Burger);
