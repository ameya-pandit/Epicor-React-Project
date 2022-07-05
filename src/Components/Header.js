import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

function Header({data}) {
	const [filteredData, setFilteredData] = useState([]);
	const navigate = useNavigate(); 

	const filteringFunc = (event) =>	{
		const entry = event.target.value;
		
		const filteredList = data.filter((value) => {
			return value.name.toLowerCase().includes(entry.toLowerCase());
		})

		if (entry === "")	{
			setFilteredData([]);
		} else {
			setFilteredData(filteredList);
		}
	}

    const routeChange = (value) => { 
        navigate(`/${value.name}`, {state: {value}});
        setFilteredData([]);
    }

	return (
		<div className="header">
			<div className="headerMain">
				<div className="logoMain">
				</div>

				<div className="titleMain">
					<h1>STAR WARS UNIVERSE DATABASE</h1>
				</div>

				<div className="searchbarMain">
					<input type="text" placeholder="Search Planets..." onChange={filteringFunc}/>
				</div>
			</div>
			
			{filteredData.length !== 0 && (
			<div className="headerTiles">
				{filteredData.map((value, key) => {
					return (		
						<div key={key} className="tileMain" onClick={() => routeChange(value)}>
							<h1>{value.name}</h1>
				            <div className="">
				                <p><b>Population: </b>{value.population}</p>
				                <p><b>Climate: </b>{value.climate}</p>
				                <p><b>Terrain: </b>{value.terrain}</p>
				            </div>
						</div>
					);
				})}
			</div>
			)}
		</div>
	);
}

export default Header;