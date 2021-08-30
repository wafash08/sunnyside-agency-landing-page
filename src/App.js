import { GlobalStyles } from "./global";
import { Burger, Menu } from "./components";
import { useState } from "react";

function App() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <GlobalStyles />
      <div>
        <Menu open={open} setOpen={setOpen} />
        <Burger open={open} setOpen={setOpen} />
      </div>
    </>
  );
}

export default App;
