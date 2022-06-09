// foi acrescentado o React da linha 2 pois estava tendo erro de lint na table linha 19 a 55.
import React, { useContext, useEffect, useState } from 'react';
import PlanetsContext from '../ContextAPI/PlanetsContext';

function Table() {
  const { data, setPlanetsfilter, planetsFilter } = useContext(PlanetsContext);
  const handlePlanetsFilter = ({ target }) => {
    setPlanetsfilter(target.value);
  };

  const [dataAPI, setDataAPI] = useState(data);

  useEffect(() => {
    const filterData = data.filter((planets) => planets.name.includes(planetsFilter));
    setDataAPI(filterData);
  }, [planetsFilter, data]);

  return (
    <div>
      <form>
        <input
          data-testid="name-filter"
          type="text"
          placeholder="panets"
          onChange={ handlePlanetsFilter }
        />
        <label htmlFor="planets">
          Filter
          <select>
            <option>name1</option>
            <option>name2</option>
          </select>
        </label>
        <label htmlFor="planets">
          Operation
          <select>
            <option>maior que</option>
            <option>menor que</option>
          </select>
        </label>
        <input type="number" placeholder="0" />
        <button type="button">filter</button>
      </form>
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
          {dataAPI.map((info, index) => ( // acrescentado index para ter uma key que não muda.
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
