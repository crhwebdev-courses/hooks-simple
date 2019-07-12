import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const useResources = resource => {
  //set state using hook
  const [resources, setResources] = useState([]);

  // Note: second argument tells useEffect to rerender (if it changes) - all items
  // in the array will be checked for a change
  useEffect(() => {
    (async resource => {
      const response = await Axios.get(
        `https://jsonplaceholder.typicode.com/${resource}`
      );

      setResources(response.data);
    })(resource);
  }, [resource]);

  return resources;
};

export default useResources;
