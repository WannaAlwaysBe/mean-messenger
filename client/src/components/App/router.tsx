import React from "react";

import {createBrowserRouter} from "react-router-dom";

import {Home} from "../pages/Home";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
		errorElement: <h1>404</h1>,
	},
]);
