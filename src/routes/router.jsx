import { createBrowserRouter, Route } from "react-router-dom";
import Layout from "../Components/Layout/Layout";
import Auctions from "../pages/Auctions";
import Directions from "../pages/Directions";
import About from "../pages/About";
import Browsing from "../pages/Browsing";
import Listing from "../pages/Listing";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import UserProfile from "../pages/UserProfile";
import BiddingPage from "../pages/BiddingPage";

const router = createBrowserRouter([
  { element: <Layout />, index: true, path: "/" },
  { element: <Auctions />, path: "/auctions" },
  { element: <About />, path: "/about" },
  { element: <Directions />, path: "/directions" },
  { element: <Browsing />, path: "/browsing" },
  { element: <Listing />, path: "/listing" },
  { element: <SignIn />, path: "/signin" },
  { element: <SignUp />, path: "/signup" },
  { element: <UserProfile />, path: "/userprofile" },
  // Include both the base and dynamic route definitions for BiddingPage
  { element: <BiddingPage />, path: "/biddingpage" }, // Base route for initial rendering
//   <Route path="/biddingpage/:id" element={<BiddingPage />} />, // Dynamic route capturing ID
]);

export default router;