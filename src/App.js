//archivo principal
//fragment es como crear un div, pero no se muestra
import React, {Fragment, useState} from 'react';
//exportamos nuestra componente
import Header from './componentes/Header';
//exportamos nuestro formulario
import Formulario from './componentes/Formulario';
import { calcularTotal } from './helpers';


function App() {
  //definir el state (cada pieza interactiva debe tener un state)
  //regresa dos valores (cantidad y una funcion)
  //arranca en cero
  //cantidad va a tener el valor que tenga el state

  //definir state
  const[cantidad, guardarCantidad] = useState(0);
  const[plazo, guardarPlazo] = useState('');
  //otra pieza de state 
  const [total, guardarTotal] = useState(0);

  //react se utiliza className para una clase
  return (
    <Fragment>
      <Header
        Titulo = "Cotizador de Prestamos"
      />
      <div className="container">
        <Formulario
          cantidad={cantidad}
          guardarCantidad={guardarCantidad}
          plazo={plazo}
          guardarPlazo={guardarPlazo}
          total = {total}
          guardarTotal = {guardarTotal}
        />
        <p>Total a pagar: ${total}</p>
        
      </div>
    </Fragment>
    
  );
}

export default App;
