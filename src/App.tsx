import { Suspense, lazy } from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';
import {NextUIProvider} from "@nextui-org/react";
import Navbar from './components/Header';
import "./App.css";

const Home = lazy(() => import("./pages/Home"));
const New = lazy(() => import("./pages/New"));
const Feed = lazy(() => import("./pages/Feed"));
const About = lazy(() => import("./pages/About"));

export default function App() {
  const navigate = useNavigate();
  return (
    <NextUIProvider navigate={navigate}>
      <Navbar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />
            <Route path="/feeds" element={<Feed />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Suspense>
    </NextUIProvider>
  );
}
