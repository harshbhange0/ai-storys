import React from "react";

import { Link } from "react-router-dom";
import LoggedOutBtn from "../../other-components/LoggedOutBtn";


function FeedHome() {

  return (
    <div>
      <LoggedOutBtn/>
      <Link to="/user/log-in">Log in</Link>
    </div>
  );
}

export default FeedHome;
