import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { AuthProvide } from "./context/AuthContext";

function App() {
  return (
    <>
      <AuthProvide>
        <div className="">
          <Navbar />
          <main className="min-h-screen max-w-screen-2xl mx-auto px-4 py-6 font-primary">
            <Outlet />
          </main>
          <Footer />
        </div>
      </AuthProvide>
    </>
  );
}

export default App;
