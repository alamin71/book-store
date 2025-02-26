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
          <main className="min-h-screen max-w-screen-2xl mx-auto py-6 px-4 font-primary">
            <Outlet />
          </main>
          <Footer />
        </div>
      </AuthProvide>
    </>
  );
}

export default App;
