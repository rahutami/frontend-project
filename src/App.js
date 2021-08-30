import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ThreeColumnPreview from "./3-column/components/ThreeColumnPreview";
import StatsPreview from "./stats-preview/components/StatsPreview";
import Sunnyside from "./sunnyside/Sunnyside";

const Home = () => {
  return (
    <ul>
      <Link to="/three-column-preview">
        <li>Three Column Preview</li>
      </Link>
      <Link to="/stats-preview">
        <li>Stats Preview</li>
      </Link>
      <Link to="/sunnyside-landing-page">
        <li>Sunnyside Preview</li>
      </Link>
    </ul>
  );
};

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/three-column-preview" component={ThreeColumnPreview} />
        <Route path="/stats-preview" component={StatsPreview} />
        <Route path="/sunnyside-landing-page" component={Sunnyside} />
      </Router>
    </div>
  );
}

export default App;
