import { createBrowserRouter } from "react-router-dom"
import Home from "./pages/home"
import Movies from "./pages/movies"
import Error from "./pages/error"
import TvSeries from "./pages/tv-series"
import Bookmark from "./pages/bookmark"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <Error />
    },
    {
        path: "/movies",
        element: <Movies />,
        errorElement: <Error />
    },
    {
        path: "/tv-series",
        element: <TvSeries />,
        errorElement: <Error />
    },
    {
        path: "/bookmarks",
        element: <Bookmark />,
        errorElement: <Error />
    },

])