import OptionOnePage from "pages/OptionOnePage";
import React from "react";
import { useRoutes } from "react-router-dom";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <OptionOnePage /> },
    
  ]);

  return element;
};

export default ProjectRoutes;
