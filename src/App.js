import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled';
import Frase from './components/Frase';

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

const Boton = styled.button`
  background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
  background-size: 300px;
  font-family: Arial- Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  font-size: 2rem;
  border: 2px solid black;
  transition: background-size .8s ease;
  
  :hover {
    cursor:pointer;
    background-size: 400px;
  }
`;

function App() {

  const [frase, guardarFrase] = useState({});

  /* const consultarAPI = () => {
    const api = fetch('http://breaking-bad-quotes.herokuapp.com/v1/quotes');
    const frase = api.then( respuesta => respuesta.json());
    frase.then(respuesta => console.log(respuesta));
  } */
  const consultarAPI = async () => {
    const api = await fetch('http://breaking-bad-quotes.herokuapp.com/v1/quotes');
    const frase = await api.json()
    guardarFrase(frase[0]);
  }

  //cargar una frase cuando el componente este listo (cargue)
  useEffect( () => {
    consultarAPI();
  }, []);

  return (  
    <Contenedor>
      <Frase
        frase={frase}
      />
      <Boton
        onClick={consultarAPI}
      >Breaking Bad</Boton>
    </Contenedor>
    
  );
}

export default App;
