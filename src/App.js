import {NavLink, Route} from "react-router-dom"
import './App.css';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      <header>
        <h1>LDS Job Search</h1>
        <div>
          <NavLink to="/profile"><button>Login</button></NavLink>
          <NavLink to="/"><button>Logout</button></NavLink>
        </div>
      </header>
      <Route path="/profile">
        <Profile />
      </Route>
      <footer style={{display: "flex", justifyContent: "space-around", alignItems: "center", height: "10vh"}}>
        <NavLink to="/resources">Resources</NavLink>
        <NavLink to="/resume-auditing">Resume Auditing</NavLink>
      </footer>
    </div>
  );
}

export default App;
