import React from "react";
import "./Home.css";


function Home() {
	return (
		<div className="homeContainer">
			<div className="star-wars">
				<div className="crawl">
					<div className="title">
				    	<h1>Welcome to my SWAPI Project! </h1>
				    	<p>Enter a planet into the search bar on the top right. If nothing shows up, wait just a few seconds and try again; the App is fetching all the planets to search from!</p>
				    	<p>Everything is tile based. When you select a planet, you'll find a tile for general information about the planet, a tile for the films that took place there, and a tile for the residents who live there.
				    		If no tile exists, there was no data present that linked a film or a resident to that particular planet. You might have to wait for the fetch operation to complete retrieving the relevant data before the tile appears.</p>
				    	<p>Similarly, you can select a resident from the tile of residents and drill down to another page with a tile about their general information, a tile for the films they were featured in, a tile for species related information, 
				    		and a tile each for the starships and vehicles they were linked to. If no tile exists, no data existed that linked that resident to that category.</p>
				    	<h2>Happy searching, and may the force be with you!</h2>
				    </div>
				</div>
			</div>
		</div>
	);
}

export default Home;