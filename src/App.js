//archivo principal
//fragment es como crear un div, pero no se muestra
import React, {Fragment} from 'react';
//exportamos nuestra componente
import Header from './componentes/Header'

function App() {
  return (
    <Fragment>
      <Header/>
    </Fragment>
    
  );
}

export default App;
