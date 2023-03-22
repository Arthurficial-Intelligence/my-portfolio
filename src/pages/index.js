import React from "react";
import { navigate } from "gatsby";

const IndexPage = () => {
  React.useEffect(() => {
    navigate("/under-construction");
  }, []);

  return null;
};

export default IndexPage;
