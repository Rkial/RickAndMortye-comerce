import React from "react";
import Styles from "../../styles/Shop.module.css";
import NavBarShop from "../NavBarShop";
import Products from "../Products";

export const Shoppage = () => {
    return (
        <>
       

            <NavBarShop/>
            <div className={Styles.fondo}>
                <Products className={Styles.Productos}/>
                </div>
            



        </>
    );
};
