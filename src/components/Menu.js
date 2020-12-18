import React, { Component } from "react";
import FoodItem from "./FoodItem";
import { connect } from "react-redux";
import Modal from "./Modal";
class Menu extends Component {
  render() {
    const { menu, total } = this.props;
    let arrFood = Object.getOwnPropertyNames(menu);
    return (
      <div className="choose-food__box">
        <h3 className="text-center">Chọn Thức Ăn</h3>
        <div className="p-3">
          <table className="table">
            <thead>
              <tr>
                <th>Thức Ăn</th>
                <th colSpan="2"></th>
                <th>Giá</th>
              </tr>
            </thead>
            <tbody>
              {arrFood.map((item) => {
                return <FoodItem key={item} name={item} price={menu[item]} />;
              })}
              <tr>
                <th colSpan="3" className=" text-end">
                  Tổng Tiền
                </th>
                <th>{total}</th>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="d-flex justify-content-end p-2">
          <button
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#BurgerModal"
          >
            Thanh Toán
          </button>
          <Modal />
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { menu: state.BurgerReducer.menu, total: state.BurgerReducer.total };
};
export default connect(mapStateToProps)(Menu);
