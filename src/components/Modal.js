import React, { Component } from "react";
import Burger from "./Burger";
import Bill from "./Bill";
import { connect } from "react-redux";
import { resetBurger } from "../actions";
class Modal extends Component {
  render() {
    return (
      <div
        className="modal fade"
        id="BurgerModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Burger CyberSort
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div>
                <Burger title="Chúc bạn ăn ngon miệng !" />
              </div>
              <div>
                <Bill />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Chọn Lại
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => this.props.resetBurger()}
                data-bs-dismiss="modal"
              >
                Thanh Toán
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { resetBurger })(Modal);
