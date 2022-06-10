// foi acrescentado o React da linha 2 pois estava tendo erro de lint na table linha 19 a 55.
import React, { useContext, useEffect, useState } from 'react';
import PlanetsContext from '../ContextAPI/PlanetsContext';

function Table() {
  const { data,
    setPlanetsfilter,
    planetsFilter,
    column,
    setColumn,
    operation,
    setOperation,
    value,
    setValue,
    numericFilter,
    setNumericFilter,
  } = useContext(PlanetsContext);
  // atualiza o input ao digitar
  const handlePlanetsFilter = ({ target }) => {
    setPlanetsfilter(target.value);
  };

  const [dataAPI, setDataAPI] = useState(data);

  useEffect(() => {
    const filterData = data.filter((planets) => planets.name.includes(planetsFilter));
    const resultArray = numericFilter
      .reduce((accumulator, filter) => accumulator.filter((item) => {
        switch (filter.operation) {
        case 'maior que':
          return Number(item[filter.column]) > Number(filter.value);
        case 'menor que':
          return Number(item[filter.column]) < Number(filter.value);
        case 'igual a':
          return Number(item[filter.column]) === Number(filter.value);
        default:
          return true;
        }
      }), filterData);
    setDataAPI(resultArray);
  }, [planetsFilter, data, numericFilter]);

  const handleNumericFilter = () => {
    const newNumericFilter = {
      column,
      operation,
      value,
    };
    setNumericFilter([...numericFilter, newNumericFilter]);
  };

  // remove cada filtro individualmente.
  const removeChang = (index) => {
    setNumericFilter(
      numericFilter.filter((_item, intemIndex) => intemIndex !== index),
    );
  };

  const removeAll = () => {
    setNumericFilter([]);
  };

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
          Coluna
          <select
            data-testid="column-filter"
            onChange={ ({ target }) => setColumn(target.value) }
          >
            <option>population</option>
            <option>orbital_period</option>
            <option>diameter</option>
            <option>rotation_period</option>
            <option>surface_water</option>
          </select>
        </label>
        <label htmlFor="planets">
          Operation
          <select
            data-testid="comparison-filter"
            onChange={ ({ target }) => setOperation(target.value) }
          >
            <option>maior que</option>
            <option>menor que</option>
            <option>igual a</option>
          </select>
        </label>
        <input
          data-testid="value-filter"
          type="number"
          placeholder="0"
          value={ value }
          onChange={ ({ target }) => setValue(target.value) }
        />
        <button
          data-testid="button-filter"
          type="button"
          onClick={ handleNumericFilter }
        >
          filter

        </button>
        <button
          data-testid="button-remove-filters"
          type="button"
          onClick={ removeAll }
        >
          Remover Filtros
        </button>
      </form>
      { numericFilter.map((filter, index) => (
        <div key={ index }>
          <p data-testid="filter" key={ `${filter.column}-${index}` }>
            {filter.column}
            {' '}
            {filter.operation}
            {' '}
            {filter.value}
            <button
              type="button"
              onClick={ () => removeChang(index) }
            >
              Remove
            </button>
          </p>
        </div>
      )) }
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
