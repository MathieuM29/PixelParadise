import "./style.css";
import React from "react";

class LinkListPath extends React.Component {
	render() {
		return (
			<div className="linkList">
				
					<button>
						<a href="/">Accueil</a>
					</button>
					<button>
						<a href="/composants">Composants</a>
					</button>
					<button>
						<a href="/contact">Contact</a>
					</button>
					<button>
						<a href="/profil">Profil</a>
					</button>
				
			</div>
		);
	}
}

export default LinkListPath;
