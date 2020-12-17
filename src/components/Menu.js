import React, { Component } from "react";

class Menu extends Component {
  render() {
    return (
      <div className="choose-food__box">
        <h3 className="text-center">Chọn Thức Ăn</h3>
        <div className="p-3">
          <table className="table">
            <thead>
              <tr>
                <th>Thức Ăn</th>
                <th colspan="2"></th>
                <th>Giá</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Salad</td>
                <td colspan="2">
                  <button className="btn btn-success mx-2">+</button>
                  <button className="btn btn-danger mx-2">-</button>
                </td>
                <td>10</td>
              </tr>
              <tr>
                <td>Beef</td>
                <td colspan="2">
                  <button className="btn btn-success mx-2">+</button>
                  <button className="btn btn-danger mx-2">-</button>
                </td>
                <td>10</td>
              </tr>
              <tr>
                <td>Cheese</td>
                <td colspan="2">
                  <button className="btn btn-success mx-2">+</button>
                  <button className="btn btn-danger mx-2">-</button>
                </td>
                <td>10</td>
              </tr>
              <tr>
                <th colSpan="3" className=" text-end">
                  Tổng Tiền
                </th>
                <th>30</th>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="d-flex justify-content-end p-2">
          <button className="btn btn-primary">Thanh Toán</button>
        </div>
      </div>
    );
  }
}

export default Menu;
