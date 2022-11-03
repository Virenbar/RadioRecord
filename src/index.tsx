import "bootstrap";
import { render } from "preact";
import data from "../data.json";
import { Stations } from "./components/Stations";

function Main() {
    const stations = data.stations;
    return (
        <Stations stations={stations} />
    );
}

render(<Main />, document.getElementById("main") as HTMLElement);
