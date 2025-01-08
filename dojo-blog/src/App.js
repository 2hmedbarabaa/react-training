import NavBar from './Navbar';
import Home from './Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Create from './create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
function App() {
  
  //react convert whatever datatype we use to string
  //we cannot put a boolean or objects
  // const person = {name:'yoshi' , age:30};


  return (
    <Router>
    <div className="App">
        <NavBar/>
        <div className="content">
        <Switch>
          <Route exact path= "/">
              <Home/>
          </Route>

        
          <Route path= "/create">
              <Create/>
          </Route>

          <Route path= "/blogs/:id">
              <BlogDetails/>
          </Route>

          <Route path="*">
            <NotFound/>
          </Route>

        </Switch>
        </div>
    </div>
    </Router>
  );
}

export default App;
