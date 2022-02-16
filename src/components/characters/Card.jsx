import Styles from "../../styles/GridCards.module.css";
import { Status } from "./Status";

export const Card = ({ state, modal, handleClick }) => {
  return (
    <>
      <div
        className={` ${Styles.mar} card border`}
        style={{width: "18rem"}}
        onClick={() => {
          modal(state);
          handleClick();
        }}
      >
        <img src={state.image} className="card-img-top" alt="..."/>
        <div className={` ${Styles.card} card-body`}>
          <h5 className="card-title">{state.name}</h5>
          <Status state={state} />
          <p className={`${Styles.cardText} card-text`}>{`Especie: ${state.species}`}</p>
          <p className={`${Styles.cardText} card-text`}>{`Genero: ${state.gender}`}</p>
        </div>
      </div>
    </>
  );
};
