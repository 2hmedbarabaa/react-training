import NavBar from './Navbar';
import Home from './Home';
function App() {
  
  //react convert whatever datatype we use to string
  //we cannot put a boolean or objects
  // const person = {name:'yoshi' , age:30};


  return (
    <div className="App">
        <NavBar/>
        <div className="content">
        <Home/>
        </div>
    </div>
  );
}

export default App;
