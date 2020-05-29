//archivo principal
//fragment es como crear un div, pero no se muestra
import React, {Fragment} from 'react';
//exportamos nuestra componente
import Header from './componentes/Header';
//exportamos nuestro formulario
import Formulario from './componentes/Formulario';


function App() {
  //react se utiliza className para una clase
  return (
    <Fragment>
      <Header
        Titulo = "Cotizador de Prestamos"
      />
      <div className="container">
        <Formulario/>
      </div>
    </Fragment>
    
  );
}

export default App;
