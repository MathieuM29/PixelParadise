import React from "react";
import "./_style.scss";
import LinkListPath from "./linkList/index";
import GeneralCondition from "./generalCondition/index";
import Polygon from "./polygon/index";

function Footer() {
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

export default Footer;
