import React from 'react';
import './App.css';
import Header from './components/Header'
import CHeader from './components/CHeader'
import Channel from './components/Channel'



const name = <span>Hello this is with jsx</span>

// new class component

class App extends React.Component{

render(){
  return(
  <div className="App">
  
  <Header name="Shivam">
    <p>This is prop through Functional component </p>
  </Header>
  <CHeader name="Shivam">
  <p>This is prop through Class component </p>
  </CHeader>
  <Channel/>
  </div>
  );
  
}

}

// function App() {
//   return (
//     <div className="App">
//     <h1>Hello welcome to my keeps app, {name}</h1>
   

//     </div>
//   );
// }

export default App;
