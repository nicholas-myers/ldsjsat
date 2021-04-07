import {NavLink, Route} from "react-router-dom"
import './App.css';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Deseret Industries Job Search Tracking</h1>
        <div>
          <NavLink to="/profile/activity-tracker"><button>Login</button></NavLink>
          <NavLink to="/"><button>Logout</button></NavLink>
        </div>
      </header>
      <Route path="/profile">
        <Profile />
      </Route>
    </div>
  );
}

export default App;
