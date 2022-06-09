import React from 'react';
import './App.css';
import Table from './Componente/Table';
import Provider from './ContextAPI/Provider';

function App() {
  return (
    <div>
      <Provider>
        <Table />
      </Provider>
    </div>
  );
}

export default App;
