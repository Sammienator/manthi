import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header'
import Caro from './components/Caro';
import Cont from './components/Content';
import Cont2 from './components/Content2';
import Footer from './components/Footer';
import Car from './components/Cards';


function App() {
  return (
    <div className="App">
      <Header/>
    

      <Caro/>

      <Cont/>

      <Cont2/>

      <Car/>

      <Footer/>
     
    </div>
  );
}

export default App;
