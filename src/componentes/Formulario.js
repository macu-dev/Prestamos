//para poder utilizar el state
import React,{Fragment, useState} from 'react';
//importar la funcion calcular total
import{calcularTotal} from '../helpers';

const Formulario  = ({cantidad, guardarCantidad, plazo, guardarPlazo}) => {

  //definir state local
  const [error, guardarError]= useState(false);
  //definir funcion
  const leerCantidad = (e) =>{
    guardarCantidad(parseInt(e.target.value));
  }

  //cuando el usuario hace submit
  const calcularPrestamo = e =>{
    e.preventDefault();
    //validar
    if(cantidad === 0 || plazo === ''){
      guardarError(true);
      return;
    }

    //elimina el error previo 
    guardarError(false);

    //realizar el calculo
    const totalAPagar = calcularTotal(cantidad, plazo);
    console.log(totalAPagar);
  }

  return ( 
   <Fragment>
      <form onSubmit={calcularPrestamo}>
        <div className="row">
          <div>
            <label>Cantidad Prestamo</label>
            <input className="u-full-width" type="number" placeholder="Ejemplo: 3000"
            onChange={leerCantidad} />
          </div>
          <div>
            <label>Plazo para Pagar</label>
            <select className="u-full-width"
            onChange={e => guardarPlazo(parseInt(e.target.value))}>
              <option value="">Seleccionar</option>
              <option value="3">3 meses</option>
              <option value="6">6 meses</option>
              <option value="12">12 meses</option>
              <option value="24">24 meses</option>
           </select>
          </div>
          <div>
            <input type="submit" value="Calcular" className="button-primary u-full-width"/>
          </div>
        </div>
      </form>
   
      {(error) ?  <p className="error">Todos los campos son obligatorios</p> : null }
     
    </Fragment>

  );
}
 
export default Formulario;