import logo from './logo.svg';
import Myfriendlist from './components/myfriendlist';
import Myheader from './components/myheader';
import './App.css';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div>
      <Myheader></Myheader>
      <h1>Friends</h1>
     <Myfriendlist></Myfriendlist>
      
    </div>
  );
}

export default App;
