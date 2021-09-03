import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Client/pages/Home";
import NavBar from "./Client/components/NavBar";
import Login from "./Client/pages/Login";
import Register from "./Client/pages/Register";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="container">
        <Route path="/" exact component={Home}></Route>
        <Route path="/login" exact component={Login}></Route>
        <Route path="/register" exact component={Register}></Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
