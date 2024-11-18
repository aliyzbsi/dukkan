import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./layout/Header";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Switch>
          <Route path="/" exact component={HomePage} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
