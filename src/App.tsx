import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePageSkeleton from "components/skeletonLoaders/HomePageSkeleton";
import Navbar from "components/navbar/Navbar";
const Home = lazy(() => import("modules/home/Home"));
const Checkout = lazy(() => import("./modules/checkout/Checkout"));
const Notfound = lazy(() => import("modules/notfound/Notfound"));
const Cart = lazy(() => import("modules/cart/Cart"));
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
            <Route path="/:categoryName" element={<Category />} />
            <Route path="/checkout" element={<Cart />} />
            <Route path="/products/:productId" element={<ProductDetails />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<Notfound />} />
          </Route>
        </Routes>
      </Router>
    </Suspense>
  );
}
