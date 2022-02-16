import React from "react";
import Styles from "../styles/Footer.module.css";

export const Footer = () => {
  return (
    <footer className={`${Styles.backFoot} d-flex justify-content-around `}>
      <div className="flex-fill">
        <div className={`${Styles.backFoot} d-flex justify-content-around `}>
          <div className={Styles.backFoot}>
            <p className={Styles.cabecera}></p>
            <p className={Styles.parrafos}></p>
            <p className={Styles.parrafos}> </p>
            <p className={Styles.parrafos}></p>
          </div>
        </div>
      </div>
      <div className="flex-fill">
        <div className="d-flex justify-content-center">
          <div>
            <p className={Styles.cabecera}>REDES SOCIALES:</p>
            <p className={Styles.parrafos}>
              <i className="fab fa-youtube"> Youtube/</i>
            </p>
            <p className={Styles.parrafos}>
              <i className="fab fa-facebook-square"> facebook/</i>
            </p>
            <p className={Styles.parrafos}>
              <i className="fab fa-twitter-square"> twitter/</i>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
