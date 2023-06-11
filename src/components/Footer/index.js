import React from "react";
import "./style.css";
import './polygon/style.css';
import './generalCondition/style.css';
import "./linkList/style.css";
import LinkListPath from "./linkList/index.js";
import GeneralCondition from './generalCondition/index';
import Polygon from './polygon/index';



class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="footerContainer">
          <LinkListPath />
          <GeneralCondition />
          <Polygon />
        </div>
      </footer>
    );
  }
}


export default Footer;