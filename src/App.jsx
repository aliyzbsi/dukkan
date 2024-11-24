import { Route, Switch } from "react-router-dom";

import HomePage from "./pages/HomePage";
import PageContent from "./layout/PageContent";

function App() {
  return (
    <Switch>
      <PageContent>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
        <div>ali</div>
        <div>yüzbaşı</div>
        <div>Aksaray</div>
      </PageContent>
    </Switch>
  );
}

export default App;
