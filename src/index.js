import ReactDOM from "react-dom";
import { TodoComp } from "./comps";
import { Parent } from "./callback";
import { RenderingComp } from "./render-props";
import { Comp } from "./context";
import { CompA, TypedComp } from "./typed-comps/typed-comp";

// ReactDOM.render(<h1>Hello, world!</h1>, document.getElementById("root"));

const name = "Sowmiya B";
const element = <h1>Hello, {name}!</h1>;

// ReactDOM.render(element, document.getElementById("root"));

// npx create-react-app react-app

// ReactDOM.render(<Parent />, document.getElementById("root"));

ReactDOM.render(<CompA />, document.getElementById("root"));

// ReactDOM.render(<RenderingComp />, document.getElementById("root"));
