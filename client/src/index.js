import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import { BrowserRouter, HashRouter } from "react-router-dom";

const rootElement = document.getElementById("root");
ReactDOM.render(
    <HashRouter hashType="hashbang">
    <App />
    </HashRouter>
    //render platform, on refresh showed "not found" to solve browser router has been replaced with hashrouter :-https://www.youtube.com/watch?v=ip4Oybl7Rnc&t=431s 
, rootElement);
