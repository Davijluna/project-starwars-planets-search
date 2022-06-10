import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [planetsFilter, setPlanetsfilter] = useState([]); // linha test.
  const [column, setColumn] = useState('population');
  const [operation, setOperation] = useState('maior que');
  const [value, setValue] = useState('0');
  const [numericFilter, setNumericFilter] = useState([]);

  useEffect(() => {
    const fetcStarWars = async () => {
      const reponse = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const reponseJson = await reponse.json();
      console.log(reponseJson);
      setData(reponseJson.results);
    };
    fetcStarWars();
  }, []);

  const data2 = {
    data,
    setPlanetsfilter,
    setData,
    planetsFilter,
    column,
    setColumn,
    operation,
    setOperation,
    value,
    setValue,
    numericFilter,
    setNumericFilter,
  };

  return (
    <PlanetsContext.Provider
      value={ data2 }
    >
      {children}
    </PlanetsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
