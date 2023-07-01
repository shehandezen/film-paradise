import { useEffect, useState } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";

import MovieCards from "./MovieCards";
import { MovieDetails, dataLoader } from "./MovieDetails";

import "./App.css";
import SearchIcon from "./search.svg";
import PlaceholderImage from "./placeholder.png";

// 3347addc



const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<MovieCards />} />
        <Route
          path="/movie/:id"
          element={<MovieDetails />}
          loader={dataLoader}
        />
      </Route>
    )
  );

  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
};

const Root = () => {
  return (
    <>
      <div className="app">
        <h1>
          {" "}
          <Link to="/" class="header">
            Film Paradise{" "}
          </Link>
        </h1>
        <Outlet />
      </div>
    </>
  );
};

export default App;
