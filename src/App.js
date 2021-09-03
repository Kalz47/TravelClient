import { BrowserRouter, Route } from "react-router-dom";
// client routes
import Home from "./Client/pages/Home";
import NavBar from "./Client/components/NavBar";
import Login from "./Client/pages/Login";
import Register from "./Client/pages/Register";
// admin routes
import AdminLogin from "./Admin/pages/Login";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Route path="/" exact component={Home}></Route>
        <Route path="/login" exact component={Login}></Route>
        <Route path="/register" exact component={Register}></Route>
        {/* Admin routes */}
        <Route path="/admin/login" exact component={AdminLogin}></Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
