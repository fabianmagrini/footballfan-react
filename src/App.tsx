import { Routes, Route, useNavigate } from 'react-router-dom';
import {NextUIProvider} from "@nextui-org/react";
import Home from './pages/Home';

export default function App() {
  const navigate = useNavigate();
  return (
    <NextUIProvider navigate={navigate}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </NextUIProvider>
  );
}
