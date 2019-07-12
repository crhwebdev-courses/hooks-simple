import React from 'react';
import useResources from './useResources';
import { directive } from '@babel/types';

const ResourceList = ({ resource }) => {
  const resources = useResources(resource);

  return (
    <div>
      <h2>Resources:</h2>
      <ul>
        {resources.map(record => (
          <li key={record.id}>{record.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ResourceList;
