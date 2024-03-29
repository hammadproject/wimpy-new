import React from 'react';
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react-dom';
import { useHistory } from "react-router-dom";

function Home() {
  const history = useHistory();
  
  const handleRoute = () =>{ 
    history.push("/about");
  }
  
  return (                     
          <Button
            onClick={handleRoute}>
              About
          </Button>
  );
}
export default Home;
