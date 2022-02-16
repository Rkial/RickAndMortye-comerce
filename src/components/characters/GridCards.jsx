import { Card } from "./Card";
import Styles from "../../styles/GridCards.module.css";
import { Pagination } from "../Pagination";
import { useState } from "react";
import { ModalCharacter } from "./ModalCharacter";
import { useFetchCharacters } from "../../hook/useFetchCharacters";
import { Buscar } from "./Buscar";

export const GridCards = () => {
  const [info, state, changeRoute, text, setText] = useFetchCharacters();
  const [click, setClick] = useState(false);
  const [stateModal, setStateModal] = useState([]);

  if (state.length === 0) {
    return (
      <>
      <div className={Styles.buscar}>
        <nav >
          
          <Buscar text={text} setText={setText} />
        </nav>
      </div>
      <div className={Styles.containerTitle}>
        <h1 className={Styles.title}>PERSONAJES</h1>
      </div>
      <p className={Styles.p}> No existe el personaje..."{text}"</p>
      
      </>
    );


  };

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
      <div className={Styles.buscar}>
        <nav >
        <Buscar text={text} setText={setText} />
        
      
          
        </nav>
      </div>
      <div className={Styles.containerTitle}>
        <h1 className={Styles.title}>PERSONAJES</h1>
      </div>
      
      <div className={Styles.container}>
        {state.map((res) => {
          return (
            <Card
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
      {click === true && <ModalCharacter state={stateModal} setStateModal={handleClick} />}
      <Pagination info={info} handleNext={handleClickNext} handlePrevious={handleClickPrevious} />
    </>
  );
};
