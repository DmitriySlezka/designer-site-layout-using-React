import React, { Component } from "react";
import styles from "./App.module.css";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import classnames from "classnames/bind";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import Contact from "./pages/Contact/Contact.jsx";

const cx = classnames.bind(styles);

export default class App extends Component {
   render() {
      return (
         <div className={cx("app")}>
            <Header className={cx("header")} />
            <div className={cx("content")}>
               <Router>
                  <Switch>
                     <Route exact path="/" component={Home} />
                     <Route exact path="/about" component={About} />
                     <Route exact path="/contact" component={Contact} />
                  </Switch>
               </Router>
            </div>
            <Footer className={cx("footer")} />
         </div>
      );
   }
}
