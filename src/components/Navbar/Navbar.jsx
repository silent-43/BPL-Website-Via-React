import React from 'react';
import navImg from "../../assets/logo.png";
import currencyImg from "../../assets/Currency.png";

const Navbar = ({availableBalance}) => {
    return (
        <div>
            <div className="navbar max-w-[1200px] mx-auto">
        <div className="flex-1">
          <a className="text-xl">
            <img className="w-[60px] h-[60px]" src={navImg} />
          </a>
        </div>
        <div className="flex">
          <span className="mr-1">{availableBalance}</span>
          <span className="mr-1">Coin</span>
          <img src={currencyImg} />
        </div>
      </div>
        </div>
    );
};

export default Navbar;