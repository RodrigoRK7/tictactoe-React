import React from "react";

import Menu from "../menu/Menu";
import Game from "./servicios/Servicios";

class Home extends React.Component {
  render() {
    return (
      <>
        <Menu />
        <main role="main" className="flex-shrink-0 mt-5">
          <div className="container">
            <Game />
            <hr className="featurette-divider" />
          </div>
        </main>
      </>
    );
  }
}

export default Home;
