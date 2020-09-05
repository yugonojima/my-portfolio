import React from "react";
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";

const SwichButton = ({ route, color }) => {
  return (
    <>
      <Link to={route} style={{ textDecoration: "none" }}>
        <Button variant={color} size="lg">
          {route}
        </Button>
      </Link>
    </>
  );
};

export default SwichButton;
