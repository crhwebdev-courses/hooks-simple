import React from 'react';
import Axios from 'axios';

class ResourceList extends React.Component {
  state = { resources: [] };
  async componentDidMount() {
    const response = await Axios.get(
      `https://jsonplaceholder.typicode.com/${this.props.resource}`
    );

    this.setState({ resources: response.data });
  }

  render() {
    return <div>{this.state.resources.length}</div>;
  }
}

export default ResourceList;
