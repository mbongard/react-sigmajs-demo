import React, { useState } from 'react';

import './App.scss';
import NetworkGraph from './components/NetworkGraph/NetworkGraph';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Controls from './components/Controls/Controls';

function App(): JSX.Element {
  const [pathHighlighted, setPathHighlighted] = useState<boolean>(false);

  const onPathHighlightingChanged = (): void => {
    setPathHighlighted(!pathHighlighted);
  };

  return (
    <div className="App">
      <Header />
      <Controls
        pathHighlighted={pathHighlighted}
        onPathHighlightingChanged={onPathHighlightingChanged}
      />
      <NetworkGraph pathHighlighted={pathHighlighted} />
      <Footer />
    </div>
  );
}

export default App;
