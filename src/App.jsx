import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import LandingPage from "./pages/LandingPage";
import NotFound from "./pages/NotFound";
import ContactPage from "./pages/ContactPage";
import ProjectsPage from "./pages/ProjectsPage";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/projects" element={<ProjectsPage />} />

        {/* Catch All */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  )
};

export default App;
