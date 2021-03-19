import "./App.css";
import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./screens/LandingPage";
import HomePage from "./screens/HomePage";
import SearchPage from "./screens/SearchPage";
import AboutPage from "./screens/AboutPage";
import FullJobDescription from "./screens/FullJobDescription";

function App() {

  const [dark, setDark] = useState("false");

  const handleLights = () => {
    setDark((light) => !light); //??
  }

  if (!dark) {
    document.body.classList.add("App-dark")
  } else {
    document.body.classList.remove("App-dark")
  }

  console.log(dark)


  if (!dark) {
    document.body.classList.add("App-dark");
  } else if (dark) {
    document.body.classList.remove("App");
  }

  return (
<<<<<<< HEAD
    <div className={dark ? "App-dark" : "App"}>
=======
    <div className={light ? "App" : "App-dark"}>
>>>>>>> dev
      <main>
        <Switch>
          <Route exact path="/">
            <LandingPage lightSwitch={handleLights} light={light} />
          </Route>
          <Route exact path="/home">
            <HomePage lightSwitch={handleLights} light={light} />
          </Route>
          <Route exact path="/search">
            <SearchPage lightSwitch={handleLights} light={light} />
          </Route>
          <Route exact path="/about">
            <AboutPage lightSwitch={handleLights} light={light} />
          </Route>
          <Route exact path="/jobDescription">
            <FullJobDescription lightSwitch={handleLights} light={light} />
          </Route>
        </Switch>
      </main>
    </div>
  );
}
export default App;
