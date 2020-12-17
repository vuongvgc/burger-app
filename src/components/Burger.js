import React, { Component } from "react";
import { connect } from "react-redux";
const BurgerItem = (props) => {
  return <div className={props.name}></div>;
};
class Burger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      salad: 0,
      cheese: 0,
      beef: 0,
    };
  }
  renderBurger = (name, index) => {
    return <BurgerItem key={name + index} name={name} />;
  };
  renderBurgerList = (name, number) => {
    let arrBurger = [];
    for (let i = 0; i < number; i++) {
      arrBurger.push(this.renderBurger(name, i));
    }
    console.log(arrBurger);
    return arrBurger;
  };
  render() {
    console.log(this.props.burger);
    const arrBurger = Object.getOwnPropertyNames(this.props.burger);
    console.log(arrBurger);
    let burgerList = arrBurger.map((item) => {
      return this.renderBurgerList(item, this.props.burger[item]);
    });
    return (
      <div className="burger__box">
        <h3 className="text-center">Cửa Hàng Burger CyberSoft</h3>
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
