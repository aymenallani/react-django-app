import React from 'react'
import PacmanLoader from "react-spinners/PacmanLoader";

const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
    position: "fixed",     // Fixes the loader position on the screen
    top: "108px",           // Positions the loader 20px from the top
    left: "79%",           // Positions the loader in the center horizontally
    transform: "translateX(-50%)",  // Centers the loader exactly


  };


const Loader = ({loading}) => {
  return (
    <PacmanLoader
        color={"orange"}
        loading={loading}
        cssOverride={override}
        size={23}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
  )
}

export default Loader