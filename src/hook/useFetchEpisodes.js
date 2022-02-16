import { useEffect, useState } from "react";

export const useFetchEpisodes = () => {
  const [state, setState] = useState([]);
  const [info, setInfo] = useState([]);
  const [route, setRoute] = useState("https://rickandmortyapi.com/api/episode?");

  useEffect(() => {
    const peticion = async () => {
      const res = await fetch(route);
      const data = await res.json();
      setState(data.results);
      setInfo(data.info);
    };
    peticion();
  }, [route]);

  const changeRoute = (req) => {
    req === "next" ? setRoute(info.next) : setRoute(info.prev);
  };
  return [info, state, changeRoute];
};
