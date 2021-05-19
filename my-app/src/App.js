import {Header} from './components/header'
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import  ProductListing  from './components/ProductListing';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <Router>
    <Header/>
    <Switch>
    <Route path = "/" exact component= {ProductListing}/>
    <Route path = "/products/:productId" component= {ProductDetails}/>
    <Route>404 not found</Route>
    </Switch>
    </Router>

  );
}

export default App;
