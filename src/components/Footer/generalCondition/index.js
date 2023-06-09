import "./style.css";
import React from "react";


class GeneralCondition extends React.Component {
  render() {
    return (
      <div className="generalConditionContainer">
				<ul className="generalConditionList">
					<li>
						<a href="">Condition Générale de Vente</a>
					</li>
					<li>
						<a href="">Condition Générale d'utilisation</a>
					</li>
				</ul>
			</div>
    );
  }
}

export default GeneralCondition;