import './App.css';
import {CFooter} from './components/CFooter';
import CHeader from './components/CHeader';
import CContents from './components/CContents';
import COuter from './components/COuter';

function App() {
  return (
    <div className="App">
      <CHeader aName="Piotr" aFamily="Swobodziński"/>
      {/* <CHeader aName="Dawid" aFamily="Pasieka"/> */}
      <COuter/>
      <CContents/>
      <CFooter weather="sunny" temp="30">
        <p>Sky is clear and wind you can feel a breeze of light wind</p>
      </CFooter>
      {/* <CFooter weather="snowy" temp="(-15)"/>
      <CFooter weather="rainy" temp="10"/> */}
    </div>
  );
}

export default App;
