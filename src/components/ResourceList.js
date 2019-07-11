import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const ResourceList = () => {
  //set state using hook
  const [resources, setResources] = useState([]);

  const fetchResource = async () => {
    const response = await Axios.get(
      `https://jsonplaceholder.typicode.com/${this.props.resource}`
    );

    this.setState({ resources: response.data });
  };

  return <div>{resources.length}</div>;
};

export default ResourceList;
