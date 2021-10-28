import './Mon-style/App.css';
import Accueil from './Routes/Accueil';
import Nav from './Routes/Nav'
import Test from './Routes/Test'
import Contact from './Routes/Contact.js'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import User from './Routes/User'
import Horloge from './Components/Horloge';


function App() {

  return (  
    <div className="App">
      <Router>
        <Nav />
        <Horloge />
        <Route path='/' exact component={Accueil}/>
        <Route path='/Test' exact component={Test}/>
        <Route path='/Contact' exact component={Contact}/>
        <Route path='/Connexion' exact component={User}/>
        
      </Router>
      
    </div>
  );
}

export default App;
