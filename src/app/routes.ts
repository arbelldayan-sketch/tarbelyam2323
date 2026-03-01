import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Sailing from "./pages/Sailing";
import Fishing from "./pages/Fishing";
import Diving from "./pages/Diving";
import Rowing from "./pages/Rowing";
import Surfing from "./pages/Surfing";
import Volunteer from "./pages/Volunteer";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { 
        index: true, 
        Component: Home 
      },
      { 
        path: "about", 
        Component: About 
      },
      { 
        path: "activities/sailing", 
        Component: Sailing 
      },
      { 
        path: "activities/fishing", 
        Component: Fishing 
      },
      { 
        path: "activities/diving", 
        Component: Diving 
      },
      { 
        path: "activities/rowing", 
        Component: Rowing 
      },
      { 
        path: "activities/surfing", 
        Component: Surfing 
      },
      { 
        path: "volunteers", 
        Component: Volunteer 
      },
    ],
  },
]);