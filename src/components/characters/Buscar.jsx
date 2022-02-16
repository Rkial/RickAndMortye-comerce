import React from 'react';

export const Buscar = ({text,setText}) => {
const handelInputChange=({target})=>{
  setText(target.value)
}
const handleSubmit= (e)=>{
e.preventDefault()

console.log(text)
}


  return (
    <form className="form-inline my-2 my-lg-0" onSubmit={handleSubmit}>
      <input onChange={
        handelInputChange
      }
       placeholder='Buscar Personajes' type="search" value={text} className="form-control mr-sm-2" />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
      
    </form>
  );


};

export default Buscar;
