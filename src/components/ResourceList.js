import React from 'react';
import Axios from 'axios';

class ResourceList extends React.Component {
  componentDidMount() {
    Axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`);
  }

  render() {
    return <div>{this.props.resource}</div>;
  }
}

export default ResourceList;
