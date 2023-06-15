import "./_style.scss";
import React from "react";


class GeneralCondition extends React.Component {
  render() {
    return (
      <div className="generalConditionContainer">
				<ul className="generalConditionList">
					<li>
						<a href="">CGU</a>
					</li>
					<li>
						<a href="">CGV</a>
					</li>
				</ul>
			</div>
    );
  }
}
export default GeneralCondition;