import React, { useEffect, useState } from "react";
import { getResidents, getFilms } from "../service.js";
import { useLocation, useNavigate, Link } from "react-router-dom";
import Tile from "./Tile";
import "./Planet.css";

function Planet()  {
	const planet = useLocation();
	const urlCheck = planet.state;

	var appropURL = false;
	if (urlCheck !== null)	{
		appropURL = true;
	}

	const [residents, setResidents] = useState([null]);
	const [films, setFilms] = useState([null]);

	var renderData = false;
	var residentRender = false;
	var filmRender = false;

  	useEffect(() =>   {
  		if (appropURL)	{
  			getResidents(planet.state.value.residents).then(res => setResidents(res));
    		getFilms(planet.state.value.films).then(res => setFilms(res));
  		}
  	}, [planet])

  	if (residents[0] !== null && films[0] !== null)	{
  		renderData = true;
  	}

  	if (residents.length > 0)	{
  		residentRender = true;
  	}

  	if (films.length > 0)	{
  		filmRender = true;
  	}

  	const navigate = useNavigate(); 
  	const routeChange = (value) => { 
    	navigate(`/${planet.state.value.name}/${value.name}`, {state: {value}});
  	}

	return (
		<div>
			{appropURL && <div className="main">
				<div className="breadcrumbs">
					<Link className="linkColor" to={{pathname: "/"}}>Home</Link><b> / {planet.state.value.name}</b>
				</div>
			 	<div className="planetContainer">
			 		<h1>{planet.state.value.name}</h1>

			 		<div className="secondPlanetCont">
						<Tile type={"General Information Planet"} detail={planet.state.value}/>
			 	 		{renderData && filmRender && <Tile type={"Films"} detail={films}/>}
			 	 		{renderData && residentRender && <Tile planet={planet.state.value} type={"Residents"} detail={residents}/>}
					</div>
			 	</div>
		 	</div>}
		 	{!appropURL && <div className="main">
		 		<div className="breadcrumbs">
					<Link className="linkColor" to={{pathname: "/"}}>Home</Link><b> / Bad URL</b>
				</div>
		 		<div className="planetContainer">
			 		<h1>BAD URL</h1>
			 		<div>
						<p>This probably happened because you entered something into the URL, instead of going through the search bar and selecting a planet. </p>
						<p>This application passes a planet object from the header component (the one that is selected), to this planet component that is the base for the planet tiles.</p>
						<p>Currently, this application cannot handle URL manipulation to render another planet/resident.</p>
						<p>Hit the Home tag above, or enter in a planet in the Search Bar and click through to leave this page!</p>
					</div>
			 	</div>
		 	</div>}
		</div>
  	);
}

export default Planet;