import React from "react";

import TopContent from "../TopContent/TopContent";
import MiddleContent from "../MiddleContent/MiddleContent";
import VectorContent from "../VectorContent/VectorContent";
import BottomContent from "../BottomContent/BottomContent";

const Main = () => {
  return (
    <div className="main-page">
      <TopContent />
      <MiddleContent />
      <VectorContent />
      <BottomContent />
    </div>
  );
};

export default Main;
