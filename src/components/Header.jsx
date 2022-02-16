import React from "react";
import Styles from "../styles/Header.module.css";
import rick from "../images/Rick-Ico.png";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
export const Header = () => {
  return (
    <>
      <header className={`${Styles.backHead} navbar  d-flex justify-content-around`} >
        <div className={Styles.gen}>
         
          <nav class={Styles.navbar}>
            <Navbar />
          </nav>
         
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Tienda
          </Typography>
          <Button color="inherit">Login</Button>
        </div>





      </header>
    </>
  );
};
