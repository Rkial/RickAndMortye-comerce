import Style from "../../styles/Modal.module.css";
import { Modals } from "../Modals";
import Image from "../../images/world_img.png";
export const ModalLocations = ({ state, setStateModal }) => {
  return (
    <Modals title={state.name} setStateModal={setStateModal}>
      <div className={`${Style.modals_container}`}>
        <div>
          <img className={`rounded`} src={Image} alt={state.name} />
          <hr />
          <p>Created: {state.created}</p>
        </div>
        <div className={`${Style.modals_features}`}>
          <p className={`${Style.cardText} card-text`}>{`Type: ${state.type}`}</p>
          <p className={`${Style.cardText} card-text`}>{`Dimension: ${state.dimension}`}</p>
          <div className={`${Style.cardText} card-text`}>
            <p className={`${Style.cardText} card-text`}>Residents:</p>
            <button className="btn btn-success">{state.residents}</button>
          </div>
        </div>
      </div>
    </Modals>
  );
};
