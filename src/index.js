import ReactDOM from "react-dom";
import { TodoComp } from "./comps";
import { Parent } from "./callback";
import { RenderingComp } from "./render-props";
import { Comp } from "./context";

// ReactDOM.render(<h1>Hello, world!</h1>, document.getElementById("root"));

const name = "Sowmiya B";
const element = <h1>Hello, {name}!</h1>;

// ReactDOM.render(element, document.getElementById("root"));

// npx create-react-app react-app

// ReactDOM.render(<Parent />, document.getElementById("root"));

ReactDOM.render(<Comp />, document.getElementById("root"));

// ReactDOM.render(<RenderingComp />, document.getElementById("root"));
