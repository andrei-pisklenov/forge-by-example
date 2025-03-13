import React, { useEffect, useState } from 'react';
import { view } from '@forge/bridge';

function App() {
  const [context, setContext] = useState(null);

  useEffect(() => {
    view.getContext().then(setContext);
  }, []);

  if (!context) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {`This is "${context.extension.type}"`}
    </div>
  );
}

export default App;
