import { BrowserRouter, Route } from "react-router-dom";

// client routes
import Home from "./Client/pages/Home";
import Login from "./Client/pages/Login";
import Register from "./Client/pages/Register";
import AboutUs from "./Client/pages/AbotUs";
import ContactUs from "./Client/pages/ContactUs";
import Infromation from "./Client/pages/Infromation";
import Support from "./Client/pages/Support";
// admin routes
import AdminLogin from "./Admin/pages/Login";
import AdminDashboard from "./Admin/pages/Dashboard";
import Appoinments from "./Admin/pages/subpages/Appoinments";
import Calender from "./Admin/pages/subpages/Calender";
import Cupons from "./Admin/pages/subpages/Cupons";
import Customers from "./Admin/pages/subpages/Customers";
import Invoices from "./Admin/pages/subpages/Invoices";
import Locations from "./Admin/pages/subpages/locations";
import Payments from "./Admin/pages/subpages/Payments";
import Reports from "./Admin/pages/subpages/Reports";
import Services from "./Admin/pages/subpages/Services";
import Settings from "./Admin/pages/subpages/Settings";
import Staff from "./Admin/pages/subpages/Staff";

function App() {
  return (
    <BrowserRouter>
      <div>
        {/* client routes */}
        <Route path="/" exact component={Home}></Route>
        <Route path="/login" exact component={Login}></Route>
        <Route path="/register" exact component={Register}></Route>
        <Route path="/AboutUs" exact component={AboutUs}></Route>
        <Route path="/ContactUs" exact component={ContactUs}></Route>
        <Route path="/Infromation" exact component={Infromation}></Route>
        <Route path="/Support" exact component={Support}></Route>
        {/* Admin routes */}
        <Route path="/admin/login" exact component={AdminLogin}></Route>
        <Route path="/admin/dashboard" exact component={AdminDashboard}></Route>
        <Route path="/admin/appoinments" exact component={Appoinments}></Route>
        <Route path="/admin/calender" exact component={Calender}></Route>
        <Route path="/admin/cupons" exact component={Cupons}></Route>
        <Route path="/admin/customers" exact component={Customers}></Route>
        <Route path="/admin/invoices" exact component={Invoices}></Route>
        <Route path="/admin/locations" exact component={Locations}></Route>
        <Route path="/admin/payments" exact component={Payments}></Route>
        <Route path="/admin/reports" exact component={Reports}></Route>
        <Route path="/admin/services" exact component={Services}></Route>
        <Route path="/admin/settings" exact component={Settings}></Route>
        <Route path="/admin/staff" exact component={Staff}></Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
