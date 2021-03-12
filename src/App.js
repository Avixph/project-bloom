import "./App.css";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./screens/LandingPage";
import HomePage from "./screens/HomePage";
import SearchPage from "./screens/SearchPage";
import AboutPage from "./screens/AboutPage";
import JobDescription from "./screens/JobDescription";

function App() {
  return (
    <div className="App">
      <main>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route
            exact
            path="/home"
            // component={HomePage(({ match }) => (
            //   <Route
            //     exact
            //     path={match.url + "/jobDescription"}
            //     component={JobDescription}
            //   />
            // ))}
            component={HomePage}
          />
          <Route
            exact
            path="/search"
            // component={SearchPage(({ match }) => (
            //   <Route
            //     exact
            //     path={match.url + "/jobDescription"}
            //     component={JobDescription}
            //   />
            // ))}
            component={SearchPage}
          />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/jobDescription" component={JobDescription} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
