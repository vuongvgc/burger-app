import React, { Component } from "react";
import { connect } from "react-redux";
import { calcTotalBurger } from "../selectors/selectBurger";
class Bill extends Component {
  render() {
    const { burger, menu, total } = this.props;
    let arrFood = Object.getOwnPropertyNames(burger);
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Thức Ăn</th>
              <th colSpan="2">Đơn Giá $</th>
              <th>Thành Tiền $</th>
            </tr>
          </thead>
          <tbody>
            {arrFood.map((item) => {
              return (
                <tr key={`Bill_${item}`}>
                  <td>{item}</td>
                  <td colSpan="2">{menu[item]}</td>
                  <td>{menu[item] * burger[item]}</td>
                </tr>
              );
            })}

            <tr>
              <th colSpan="3" className=" text-end">
                Tổng Tiền
              </th>
              <th>{calcTotalBurger(burger, menu)}</th>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    burger: state.BurgerReducer.burger,
    menu: state.BurgerReducer.menu,
    total: state.BurgerReducer.total,
  };
};
export default connect(mapStateToProps)(Bill);
