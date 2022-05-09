import React from "react";

import "./Control.scss";

const Control = () => {
  return (
    <div className="Control">
      <div className="control_menu">
        <div className="menu_category">
          <h3>category name</h3>
          <ul>
            <li>
              <div className="item_img">
                <img src="asdas" alt="asdsd" />
              </div>
              <p>Name</p>
              <div className="item_buttons">
                <button>
                  <i>e</i>
                </button>
                <button>
                  <i>d</i>
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Control;
