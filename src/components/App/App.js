import "./App";
import Header from "../Header";
import Content from "../Content";
import Footer from "../Footer";
import { useState } from "react";


function App() {

	const [isVisible, setIsVisible] = useState(false);
	
	return (
		<div className="App">
			<Header isVisible={isVisible} setIsVisible={setIsVisible} />
			{/* {!isVisible && <Content />}
			{!isVisible && <Footer />} */}
			<Content />
			<Footer />
			
		</div>
	);
}
export default App;
