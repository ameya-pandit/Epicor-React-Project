import React from 'react';
import { useNavigate } from "react-router-dom";
import './Tile.css';

const Tile = (props) => {  
    var genInfoTilePlanet = false;
    var genInfoTileResident = false;
    var filmTile = false;
    var residentTile = false;
    var speciesTile = false;
    var starshipTile = false;
    var vehicleTile = false;

    var planetName = undefined;

    if (props.type === 'General Information Planet') {
        genInfoTilePlanet = true;
    }

    if (props.type === 'General Information Resident') {
        genInfoTileResident = true;
    }

    if (props.type === 'Films') {
        filmTile = true;
    }

    if (props.type === 'Residents') {
        planetName = props.planet.name;
        residentTile = true;
    }

    if (props.type === 'Species') {
        speciesTile = true;
    }

    if (props.type === 'Starships') {
        starshipTile = true;
    }

    if (props.type === 'Vehicles')  {
        vehicleTile = true;
    }

    const navigate = useNavigate(); 
    const routeChange = (value) => { 
        navigate(`/${planetName}/${value.name}`, {state: {value: value, planet: planetName}} );
    }

    return(
        <div>
            {genInfoTilePlanet &&
                <div className="genInfoTilePlanet">
                    <h1 className="blackColor">GENERAL INFORMATION</h1>
                    <div className="secondaryText">
                        <p><b>Population: </b>{props.detail.population} <b>Diameter: </b>{props.detail.diameter}</p>
                        <p><b>Climate: </b>{props.detail.climate} <b>Terrain: </b>{props.detail.terrain}</p>
                        <p><b>Gravity: </b>{props.detail.gravity} <b>Surface Water: </b>{props.detail.surface_water}</p>
                        <p><b>Orbital Period: </b>{props.detail.orbital_period} <b>Rotation Period: </b>{props.detail.rotation_period}</p>
                    </div>
                </div>
            }

            {genInfoTileResident &&
                <div className="genInfoTilePlanet">
                    <h1 className="blackColor">GENERAL INFORMATION</h1>
                    <div className="secondaryText">
                        <p><b>Gender: </b>{props.detail.gender} <b>Birth Year: </b>{props.detail.birth_year}</p>
                        <p><b>Height: </b>{props.detail.height} <b>Mass: </b>{props.detail.mass}</p>
                        <p><b>Eye Color: </b>{props.detail.eye_color} <b>Hair Color: </b>{props.detail.hair_color} <b>Skin Color: </b>{props.detail.skin_color}</p>
                    </div>
                </div>
            }

            {filmTile &&
                <div className="filmTile">
                    <h1 className="blackColor">FILMS</h1>
                    {props.detail.map((value, key) => {
                        return (        
                            <div key={key} className="filmTileSecondary">
                                <h2><em>{value.title}</em></h2>
                                <div className="">
                                    <p className="pText"><b>Director: </b>{value.director}</p>
                                    <p className="pText"><b>Producer: </b>{value.producer}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            }

            {residentTile &&
                <div className="residentTile">
                    <h1 className="blackColor">RESIDENTS</h1>
                    {props.detail.map((value, key) => {
                        return (        
                            <div key={key} className="resTileSecondary" onClick={() => routeChange(value)}>
                                <h2>{value.name}</h2>
                            </div>
                        );
                    })}
                </div>
            }

            {speciesTile &&
                <div className="speciesTile">
                    <h1 className="blackColor">SPECIES</h1>
                    {props.detail.map((value, key) => {
                        return (        
                            <div key={key} className="filmTileSecondary">
                                <h2>{value.name}</h2>
                                <div className="">
                                    <p><b>Classification: </b>{value.classification} <b>Designation: </b>{value.designation}</p>
                                    <p><b>Average Height: </b>{value.average_height} <b>Average Lifespan: </b>{value.average_lifespan}</p>                                </div>
                            </div>
                        );
                    })}
                </div>
            }

            {starshipTile &&
                <div className="starshipTile">
                    <h1 className="blackColor">STARSHIPS</h1>
                    {props.detail.map((value, key) => {
                        return (        
                            <div key={key} className="filmTileSecondary">
                                <h2>{value.name}</h2>
                                <div>
                                    <p className="pText"><b>Model: </b>{value.model}</p>
                                    <p className="pText"><b>Starship Class: </b>{value.starship_class}</p>
                                    <p className="pText"><b>Crew: </b>{value.crew} <b>Passengers: </b>{value.passengers}</p>
                                    <p className="pText"><b>Manufacturer: </b>{value.manufacturer}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            }

            {vehicleTile &&
                <div className="vehicleTile">
                    <h1 className="blackColor">VEHICLES</h1>
                    {props.detail.map((value, key) => {
                        return (        
                            <div key={key} className="filmTileSecondary">
                                <h2>{value.name}</h2>
                                <div>
                                    <p className="pText"><b>Model: </b>{value.model}</p>
                                    <p className="pText"><b>Vehicle Class: </b>{value.vehicle_class}</p>
                                    <p className="pText"><b>Crew: </b>{value.crew} <b>Passengers: </b>{value.passengers}</p>
                                    <p className="pText"><b>Manufacturer: </b>{value.manufacturer}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            }
        </div>
    );
}

export default Tile;