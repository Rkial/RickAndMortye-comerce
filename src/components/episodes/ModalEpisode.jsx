import React from "react";
import Style from "../../styles/Modal.module.css";
import { Modals } from "../Modals";

import Image from "../../images/world_img.png";

export const ModalEpisode = ({ state, setStateModal }) => {
  return (
    <Modals title={state.name} setStateModal={setStateModal}>
      <div className={`${Style.modals_container}`}>
        <div>
          <img className={`rounded`} src={Image} alt={state.name} />
          <hr />
          <p>Created: {state.created}</p>
        </div>
        <div className={`${Style.modals_features}`}>
          <p className={`${Style.cardText} card-text`}>{`Air_date: ${state.air_date}`}</p>
          <p className={`${Style.cardText} card-text`}>{`Episodio: ${state.episode}`}</p>
          <div className={`${Style.cardText} card-text`}>
            <p className={`${Style.cardText} card-text`}>Characters:</p>
            <button className="btn btn-success">{state.characters}</button>
          </div>
        </div>
      </div>
    </Modals>
  );
};
