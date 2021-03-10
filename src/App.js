import "./App.css";
import Header from "./components/Header";
import LandingPage from "./screens/LandingPage";
import HomePage from "./screens/HomePage";
import SearchPage from "./screens/SearchPage";
import AboutPage from "./screens/AboutPage";
import JobDescription from "./screens/JobDescription";
import Footer from "./components/Footer";

import { BrowserRouter as Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route
            exact
            path="/home"
            component={HomePage(({ match }) => (
              <div>
                <Route
                  exact
                  path={match.url + "/jobDescription"}
                  component={JobDescription}
                />
              </div>
            ))}
          />
          <Route
            exact
            path="/search"
            component={SearchPage(({ match }) => (
              <div>
                <Route
                  exact
                  path={match.url + "/jobDescription"}
                  component={JobDescription}
                />
              </div>
            ))}
          />
          <Route exact path="/about" component={AboutPage} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
