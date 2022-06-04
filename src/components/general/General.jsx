import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.css";
import "./general.css";
import "../../assets/Special.css";
import { useNavigate } from "react-router-dom";

const General = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="gpt3__general">
      <div className="gpt3__general-links">
        <div>
          <meta charSet="'utf-8" />
          <title>logo</title>
          <link rel="stylesheet" href="logo.css" />
          <div className="loader" />
        </div>
        <div
          className="gpt3__general-links_container"
          onClick={() => navigate(-1)}
        >
          <p>
            <a href="#home">Home</a>
          </p>
        </div>
      </div>
      <div className="gpt3__general-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="gpt3__general-menu_container scale-up-center">
            <div className="gpt3__general-menu_container-links">
              <p>
                <a href="#home">Home</a>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default General;
