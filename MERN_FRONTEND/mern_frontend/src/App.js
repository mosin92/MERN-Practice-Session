
import './App.css';
import Home from './Component/Home'
import Login from './Component/Login'
import Registration from './Component/Registration'
import {Switch,Route,Redirect} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/registration" component={Registration} />
        </Switch>
    
    </div>
  );
}

export default App;
