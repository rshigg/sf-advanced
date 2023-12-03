import { createRoot } from "react-dom/client";
import "./style.css";

import AdvancedSearch from "@src/components/AdvancedSearch";

const main = document.getElementById("main");
if (!main) throw new Error("Can't find main element");

const div = document.createElement("div");
div.id = "__root";
div.setAttribute(
  "style",
  `position: sticky;top: 0;background: inherit;z-index: 100;overflow: hidden;`
);
main.prepend(div);

const rootContainer = document.querySelector("#__root");
if (!rootContainer) throw new Error("Can't find Options root element");
const root = createRoot(rootContainer);
root.render(
  <div className="px-4 w-full border-b border-solid border-primary/10">
    <AdvancedSearch />
  </div>
);
