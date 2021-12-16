import React, { FC } from 'react';
import logo from './logo.svg';
import './App.css';
import GetSnapshotBeforeUpdate from './GetSnapshotComp';

const App: FC<{ templateText?: string }> = (props) => {
  const { templateText } = props;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {templateText || 'Learn React'}
        </a>
		<GetSnapshotBeforeUpdate callback={() => console.log(props)} />
      </header>
    </div>
  );
}

export default App;
