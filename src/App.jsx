import React, { Component } from "react";
import styles from "./App.module.css";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import classnames from "classnames/bind";

const cx = classnames.bind(styles);

export default class App extends Component {
   render() {
      return (
         <div className={cx("app")}>
            <Header />
            <Footer />
         </div>
      );
   }
}
