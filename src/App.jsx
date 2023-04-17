import { useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AdoptedPetContext from "./context/AdoptedPetContext";
import Details from "./components/Details";
import SearchParams from "./components/SearchParams";

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: Infinity, cacheTime: Infinity } },
});

const App = () => {
  const adoptedPet = useState(null);

  return (
    <div>
      <Router>
        <QueryClientProvider client={queryClient}>
          <AdoptedPetContext.Provider value={adoptedPet}>
            <header>
              <Link to="/">Adopt Me!</Link>
            </header>
            <Routes>
              <Route path="/details/:id" element={<Details />} />
              <Route path="/" element={<SearchParams />} />
            </Routes>
          </AdoptedPetContext.Provider>
        </QueryClientProvider>
      </Router>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
