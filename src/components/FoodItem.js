import React from "react";
import { connect } from "react-redux";
import { addBurger, removeBurger } from "../actions";
class FoodItem extends React.Component {
  render() {
    const { name, price, addBurger, removeBurger } = this.props;
    return (
      <tr>
        <td>{name}</td>
        <td colSpan="2">
          <button
            className="btn btn-success mx-2"
            onClick={() => addBurger(name)}
          >
            +
          </button>
          <button
            className="btn btn-danger mx-2"
            onClick={() => removeBurger(name)}
          >
            -
          </button>
        </td>
        <td>{price}</td>
      </tr>
    );
  }
}
export default connect(null, { addBurger, removeBurger })(FoodItem);
