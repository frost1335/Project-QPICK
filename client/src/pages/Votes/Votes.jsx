import React from "react";
import { Footer, Navbar } from "../../components";
import { VotesView } from "../../containers";

import "./Votes.scss";

const Votes = () => {
  return (
    <div className="Votes">
      <Navbar />
      <VotesView />
      <Footer />
    </div>
  );
};

export default Votes;
