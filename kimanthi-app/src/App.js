import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header'
import Caro from './components/Caro';
import Cont from './components/Content';
import Cont2 from './components/Content2';

function App() {
  return (
    <div className="App">
      <Header/>

      <Caro/>

      <Cont/>

      <Cont2/>
     
    </div>
  );
}

export default App;
