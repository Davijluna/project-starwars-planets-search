import React, { useEffect, useState } from 'react';

function Table() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetcStarWars = async () => {
      const reponse = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const reponseJson = await reponse.json();
      console.log(reponseJson);
      setData(reponseJson.results);
    };
    fetcStarWars();
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>Rotation_Period</th>
            <th>Orbital_Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>SurFace Water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edit</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          {data.map((info, index) => (
            <tr key={ index }>
              <td>{info.name}</td>
              <td>{info.rotation_period}</td>
              <td>{info.orbital_period}</td>
              <td>{info.diameter}</td>
              <td>{info.climate}</td>
              <td>{info.gravity}</td>
              <td>{info.terrain}</td>
              <td>{info.surface_water}</td>
              <td>{info.population}</td>
              <td>{info.films}</td>
              <td>{info.created}</td>
              <td>{info.edited}</td>
              <td>{info.url}</td>
            </tr>))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
