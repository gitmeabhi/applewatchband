import {BrowserRouter, Route, Routes} from "react-router-dom"

import Home from "./components/Home/index.js";
import Collections from "./components/Collections/index.js";

const App = () =>{
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element = {<Home />} />
      <Route path="/navbar2" element = {<Collections />} />
    </Routes>
    </BrowserRouter>
  )
}
export default App;
