import { useEffect, useState } from "react";

export const useFetchCharacters = () => {
  
  const [state, setState] = useState([]);
  const [info, setInfo] = useState([]);
  const[text,setText]=useState('');
const [loading, setloading]=useState(true);
  /*const [search,setSearch]=useState("");*/
  const [route, setRoute] = useState("https://rickandmortyapi.com/api/character?");

  useEffect(() => {
    async function peticion() {
      const res = await fetch(route);
      const data = await res.json();
      setState(data.results);
      setInfo(data.info);
    }
    peticion();
  }, [route]);

const personajesFiltrados= state.filter(personaje=>personaje.name.toLowerCase().includes(text.toLowerCase()));
console.log(personajesFiltrados);
const changeRoute = (req) => {
    req === "next" ? setRoute(info.next) : setRoute(info.prev);
  };

  return [info, personajesFiltrados, changeRoute,text,setText,loading];
  
};
