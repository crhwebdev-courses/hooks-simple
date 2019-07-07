import React, { useState } from 'react';

const App = () => {
  // use useState hook to set state for this functional component
  // resource - the name we are using for state object
  // setResource - name for function we are using to set state with
  const [resource, setResource] = useState('posts');
  return (
    <div>
      <div>
        <button onClick={() => setResource('posts')}>Posts</button>
        <button onClick={() => setResource('todos')}>Todos</button>
      </div>
      {resource}
    </div>
  );
};

export default App;
