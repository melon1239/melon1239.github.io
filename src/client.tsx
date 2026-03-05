import { render } from "preact";
import App from "./routes/index.tsx";

const mount = document.getElementById("app");
if (!mount) throw new Error("No #app element found in the document.");

render(<App />, mount);
