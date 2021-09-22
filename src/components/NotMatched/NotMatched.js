import React from "react";
import { Redirect } from "react-router-dom";

const NotMatched = () => {
  const styles = {
    color: "red",
    textAlign: "center",
  };
  return (
    <div style={styles}>
      <h2>Sorry, Your Requesting page is not found.</h2>
      <h3>404 Not Found!!!!</h3>
    </div>
  );
};

export default NotMatched;
