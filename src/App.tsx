import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home";
import InformeSe from "./pages/Informe-se";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/informe-se",
      element: <InformeSe />,
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
