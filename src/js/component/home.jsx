import React from "react";

//include images into your bundle
import Footer from "./footer"
import NavBar from "./navbar"
import Card from "./card"
import Jumbo from "./jumbotron"

//create your first component
const Home = () => {
	return (
		<div>
			<NavBar />
			<div className="main">
				<Jumbo />
			</div>
			
			<div className="cards d-flex justify-content-evenly">
				<Card />
			</div>
			
			
			<Footer />
		</div>
	);
};

export default Home;
