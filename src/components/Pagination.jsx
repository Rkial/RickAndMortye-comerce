import React from "react";
import Styles from "../styles/Pagination.module.css";

export const Pagination = ({ info, handleNext, handlePrevious }) => {

  

  return (
    <>
       <section className={Styles.paginacion}>
        <ul className={Styles.container}>
          <li>{info.prev === null ? <button>Previous</button> : <button onClick={handlePrevious}>Previous</button>}</li>
          <li>{info.next === null ? <button>Next</button> : <button onClick={handleNext}>Next</button>}</li>
        </ul>
      </section>
    </>
  );
};
