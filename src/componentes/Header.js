import React from 'react'
//un componente siempre es una funcion

// function Header ({Titulo}) {
//   //codigo js 

//   return(
//     <Fragment>
//       <h1>{Titulo}</h1>
//     </Fragment>
    
//   ) 
  
// }

//otra forma de declarar un componente
const Header  = ({Titulo}) => (
  // si no esta implicito return, aqui no se podra colocar codigo js
  <h1>{Titulo}</h1>
  
);
 
export default Header;
