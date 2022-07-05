import React, { useEffect, useState } from "react";
import { getFilms, getSpecies, getStarships, getVehicles } from "../service.js";
import { useLocation, useNavigate, Link } from "react-router-dom";
import Tile from "./Tile";
import "./Planet.css";

function Resident()  {
	const resident = useLocation();
	let navigate = useNavigate();

	const urlCheck = resident.state;
	var appropRes = false;

	if (urlCheck !== null)	{
		appropRes = true;
	}

	const [films, setFilms] = useState([null]);
	const [species, setSpecies] = useState([null]);
	const [starships, setStarships] = useState([null]);
	const [vehicles, setVehicles] = useState([null]);

	let renderData = false;
	let filmRender = false;
	let speciesRender = false;
	let starshipsRender = false;
	let vehiclesRender = false;

	useEffect(() =>   {
		if (appropRes)	{
			getFilms(resident.state.value.films).then(res => setFilms(res));
	    	getSpecies(resident.state.value.species).then(res => setSpecies(res));
	    	getStarships(resident.state.value.starships).then(res => setStarships(res));
	    	getVehicles(resident.state.value.vehicles).then(res => setVehicles(res));
		}
  	}, [])

  	if (films[0] !== null && species[0] !== null && starships[0] !== null)	{
  		renderData = true;
  	}

  	if (films.length > 0)	{
  		filmRender = true;
  	}

  	if (species.length > 0)	{
  		speciesRender = true;
  	}

  	if (starships.length > 0)	{
  		starshipsRender = true;
  	}

  	if (vehicles.length > 0)	{
  		vehiclesRender = true;
  	}

	return (
		<div>
			{appropRes && <div className="main">
				<div className="breadcrumbs">
					<Link className="linkColor" to={{pathname: "/"}}>Home</Link> / <a onClick={() => navigate(-1)}>{resident.state.planet}</a> / <a><b>{resident.state.value.name}</b></a>
				</div>
			    <div className="planetContainer">
			    	<h1>{resident.state.value.name}</h1>
			    	<div className="secondPlanetCont">
			    		<Tile type={"General Information Resident"} detail={resident.state.value}/>
			    		{renderData && filmRender && <Tile type={"Films"} detail={films}/>}
			    		{renderData && speciesRender && <Tile type={"Species"} detail={species}/>}
			    		{renderData && starshipsRender && <Tile type={"Starships"} detail={starships}/>}
			    		{renderData && vehiclesRender && <Tile type={"Vehicles"} detail={vehicles}/>}

			    	</div>
			    </div>
			</div>}
			{!appropRes && <div className="main">
		 		<div className="breadcrumbs">
					<Link className="linkColor" to={{pathname: "/"}}>Home</Link><b> / Bad URL</b>
				</div>
		 		<div className="planetContainer">
			 		<h1>BAD URL</h1>
			 		<div>
						<p>This probably happened because you entered something into the URL, instead of going through the search bar and selecting a planet, and then a resident. </p>
						<p>The planet component passes the selected resident object to this resident component.</p>
						<p>Currently, this application cannot handle URL manipulation to render another planet/resident.</p>
						<p>Hit the Home tag above, or enter in a planet in the Search Bar and click through to leave this page!</p>
					</div>
			 	</div>
		 	</div>}
		</div>
  	);
}

export default Resident;