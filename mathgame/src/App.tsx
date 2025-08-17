// React route
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* Dashboard page */}
        <Route path="/" element={<Dashboard />} />

        {/* Page not found */}
        <Route path="*" element={<div> Page not found 404 </div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
