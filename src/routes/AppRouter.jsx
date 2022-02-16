import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Characters } from "../pages/Characters";
import { Episodes } from "../pages/Episodes";
import { Feed } from "../pages/Feed";
import { Shop } from "../pages/Shop";
import { Home } from "../pages/Home";
import SignUp from "../components/SignUp";
import SignIn from "../components/SignIn";
import Navbar from "../components/Navbar";
import CheckoutPage from "../components/CheckoutPage";

export const AppRoutes = () => {
  return (
    <Router>
      <Navbar />
      
        <Switch>
        <Route exact path="/" component={Feed} />
        <Route exact path="/characters" component={Characters} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/episodes" component={Episodes} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/checkoutpage" component={CheckoutPage} />

        
        
      </Switch>
      <Footer />
    </Router>
  );
};
