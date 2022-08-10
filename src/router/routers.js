import About from "../pages/About";
import Posts from "../pages/Posts";
import PostIdPage from "../pages/PostIdPage";
import Login from "../pages/Login";

export const privateRouters = [
    { path: "/about", element: <About />, exact: true },
    { path: "/posts", element: <Posts />, exact: true },
    { path: "/posts/:id", element: <PostIdPage />, exact: true },
    { path: "*", element: <Posts />, exact: true },
];

export const publicRouters = [
    { path: "/login", element: <Login />, exact: true },
    { path: "*", element: <Login />, exact: true },
];
