import { CardLocation } from "./CardLocation";
import { useFetchLocations } from "../../hook/useFetchLocations";
import Styles from "../../styles/GridCards.module.css";
import { Pagination } from "../Pagination";
import { ModalLocations } from "./ModalLocations";
import { useState } from "react";

export const GridCardsLocations = ({ local }) => {
  const [info, state, changeRoute] = useFetchLocations();
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
        <h1 className={Styles.title}>LOCATIONS</h1>
      </div>
      <div className={Styles.container}>
        {state.map((res) => {
          return (
            <CardLocation
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
      {click === true && <ModalLocations state={stateModal} setStateModal={handleClick} />}

      <Pagination info={info} handleNext={handleClickNext} handlePrevious={handleClickPrevious} />
    </>
  );
};
