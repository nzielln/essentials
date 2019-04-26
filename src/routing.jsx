import React from "react";
import ReactDOM from "react-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./main.css";
import App from "./views/App.jsx";
import { Route, Link, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import Weather from "./views/weather.js";
import Calc from "./views/calc.jsx";
import Timer from "./views/timer.jsx";
import Stopwatch from "./views/stopwatch.jsx";
import Todo from "./views/todo.jsx";
import NotFound from "./views/404.jsx";

class Routing extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route exact path="/" component={App} />
                        <Route exact path="/weather" component={Weather} />
                        <Route exact path="/todo" component={Todo} />
                        <Route exact path="/stopwatch" component={Stopwatch} />
                        <Route exact path="/calc" component={Calc} />
                        <Route exact path="/timer" component={Timer} />
                        <Route exact path="/404" component={NotFound} />
                        <Redirect to="/404" />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }



}

export default Routing;