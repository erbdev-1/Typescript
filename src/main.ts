import "./style.css";
import { setupCounter } from "./counter.ts";
import "./tutorial.ts";
document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <a href="/tasks" target='_blank'>
      TASKS APP
    </a>
    <a href="/tasks" target='_blank'>

    </a>
    
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
