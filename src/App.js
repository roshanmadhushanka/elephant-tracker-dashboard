import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import NavigationBar from "./component/navigation/NavigationBar";
import Dashboard from "./component/dashboard/Dashboard";
import Footer from "./component/footer/Footer";
import ElephantSummaryView from "./component/dashboard/elephantSummaryView/ElephantSummaryView";

function App() {
  return (
      <BrowserRouter>
          <div className="App">
              <div className="row pin-top">
                  <NavigationBar/>
              </div>
              <div className="row">
                  <Switch>
                      <Route exact path="/" component={Dashboard}/>
                      <Route path="/dashboard" component={Dashboard}/>
                      <Route path="/elephantSummary" component={ElephantSummaryView}/>
                  </Switch>
              </div>
              <div className="row">
                  <Footer/>
              </div>
          </div>
      </BrowserRouter>
  );
}

export default App;
