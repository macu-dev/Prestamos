import React, {Fragment} from 'react'
//un componente siempre es una funcion

function Header ({Titulo}) {
  //codigo js 

  return(
    <Fragment>
      <h1>{Titulo}</h1>
    </Fragment>
    
  ) 
  
}

export default Header;
