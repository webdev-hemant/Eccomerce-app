import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePageSkeleton from "components/skeletonLoaders/HomePageSkeleton";
const Home = lazy(() => import("modules/home/Home"));
const Signup = lazy(() => import("modules/signup/Signup"));
const Checkout = lazy(() => import("./modules/checkout/Checkout"));
const Navbar = lazy(() => import("components/navbar/Navbar"));
const Notfound = lazy(() => import("modules/notfound/Notfound"));
const ProductDetails = lazy(
  () => import("modules/ProductDetails/ProductDetails")
);
const Category = lazy(() => import("modules/category/Category"));

export default function App() {
  return (
    <Suspense fallback={<HomePageSkeleton />}>
      <Router>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="/category/:categoryName" element={<Category />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/products/:productId" element={<ProductDetails />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<Notfound />} />
          </Route>
          <Route path="/signup-login" element={<Signup />} />
        </Routes>
      </Router>
    </Suspense>
  );
}
