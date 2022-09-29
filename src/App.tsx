import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "components/navbar/Navbar";
import HomePageSkeleton from "components/skeletonLoaders/HomePageSkeleton";
const Home = lazy(() => import("modules/home/Home"));
const Checkout = lazy(() => import("./modules/checkout/Checkout"));
const Notfound = lazy(() => import("modules/notfound/Notfound"));

export default function App() {
  return (
    <Suspense fallback={<HomePageSkeleton />}>
      <Router>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<Notfound />} />
          </Route>
        </Routes>
      </Router>
    </Suspense>
  );
}
