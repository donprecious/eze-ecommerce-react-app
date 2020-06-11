import React from "react";
function Loader() {
  return (
    <React.Fragment>
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </React.Fragment>
  );
}

export default Loader;
