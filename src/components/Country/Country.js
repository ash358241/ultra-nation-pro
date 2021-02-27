import React from 'react';

const Country = (props) => {
    
    // const countryName = props.name;
    const {name, population, flag, region} = props.country;
    const countryStyle = {border: '1px solid red', margin:'10px', padding:'10px'};
    const handleAddCountry = props.handleAddCountry;
    return (
        <div style={countryStyle}>
            <h4>Country's name: {name}</h4>
             <img style={{height: '100px'}} src={flag} alt=""/>
             <p>Country's population: {population}</p>
            <p>Region: {region}</p>
            <button style={{cursor: 'pointer'}} onClick={() => handleAddCountry(props.country)}>Add Country</button>
        </div>
    );
};

export default Country;