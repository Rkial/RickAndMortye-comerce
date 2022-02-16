import { CardEpisode } from "./CardEpisode";
import { useFetchEpisodes } from "../../hook/useFetchEpisodes";
import Styles from "../../styles/GridCards.module.css";
import { Pagination } from "../Pagination";
import { useState } from "react";
import { ModalEpisode } from "./ModalEpisode";

export const GridCardsEpisodes = () => {
  const [info, state, changeRoute] = useFetchEpisodes();
  const [click, setClick] = useState(false);
  const [stateModal, setStateModal] = useState([]);

  const handleClick = () => {
    setClick(!click);
  };
  const handleClickNext = () => {
    changeRoute("next");
  };
  const handleClickPrevious = () => {
    changeRoute("prev");
  };
  
  return (
    <>
     
      <div className={Styles.containerTitle}>
        <h1 className={Styles.title}>EPISODIOS</h1>
      </div>
      <div className={Styles.container}>

        {state.map((res) => {
          return (
            <CardEpisode
              key={res.id}
              state={res}
              modal={(state) => {
                setStateModal(state);
              }}
              handleClick={handleClick}
            />
          );
        })}
      </div>
      {click === true && <ModalEpisode state={stateModal} setStateModal={handleClick} />}
      <Pagination info={info} handleNext={handleClickNext} handlePrevious={handleClickPrevious} />
    </>
  );
};
