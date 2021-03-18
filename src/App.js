import "./App.css";
import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./screens/LandingPage";
import HomePage from "./screens/HomePage";
import SearchPage from "./screens/SearchPage";
import AboutPage from "./screens/AboutPage";
import FullJobDescription from "./screens/FullJobDescription";

function App() {
  const [dark, setDark] = useState(false);

  const handleLights = () => {
    setDark((light) => !light);
  };

  return (
    <div className={dark ? "App" : "App-dark"}>
      <main>
        <Switch>
          <Route exact path="/">
            <LandingPage lightSwitch={handleLights} dark={dark} />
          </Route>
          <Route exact path="/home">
            <HomePage lightSwitch={handleLights} dark={dark} />
          </Route>
          <Route exact path="/search">
            <SearchPage lightSwitch={handleLights} dark={dark} />
          </Route>
          <Route exact path="/about">
            <AboutPage lightSwitch={handleLights} dark={dark} />
          </Route>
          <Route exact path="/jobDescription">
            <FullJobDescription />
          </Route>
        </Switch>
      </main>
    </div>
  );
}
export default App;
