import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import AuthenticationForm from "./Components/AuthenticationForm";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      exact: true,
      element: (
        <>
          <section className="main">
            <Header />
            <div className="contentMain flex">
              <div className="sidebarWrapper w-[17%]">
                <Sidebar />
              </div>
              <div className="contentRight w-[83%] py-4 pl-4">
                <Dashboard />
              </div>
            </div>
          </section>
        </>
      ),
    },
    {
      path: "/authenticate",
      exact: true,
      element: (
        <>
          <section className="main">
            <AuthenticationForm />
          </section>
        </>
      ),
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
