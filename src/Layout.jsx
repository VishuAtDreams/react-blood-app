import "./assets/vendors/feather/feather.css";
import "./assets/vendors/ti-icons/css/themify-icons.css";
import "./assets/vendors/css/vendor.bundle.base.css";
// Plugin css for this page
import "./assets/vendors/datatables.net-bs4/dataTables.bootstrap4.css";
// Note: The next line seems incorrect. Corrected it to match the file extension.
// import "./assets/js/select.dataTables.min.css";
// End plugin css for this page
import "./assets/css/vertical-layout-light/style.css";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import Request from "./Pages/Request";
// import Login from "./Pages/Login";

const Layout = () => {
  return (
    <div className="container-scroller">
      <Navbar />
      <div className="container-fluid page-body-wrapper">
        <Sidebar />
        <div className="main-panel">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/requests" element={<Request />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Layout;
