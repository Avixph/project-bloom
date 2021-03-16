import "./App.css";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./screens/LandingPage";
import HomePage from "./screens/HomePage";
import SearchPage from "./screens/SearchPage";
import AboutPage from "./screens/AboutPage";
import FullJobDescription from "./screens/FullJobDescription";

function App() {
  return (
    <div className={"App"}>
      <main>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/search" component={SearchPage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/jobDescription" component={FullJobDescription} />
        </Switch>
      </main>
    </div>
  );
}
export default App;
