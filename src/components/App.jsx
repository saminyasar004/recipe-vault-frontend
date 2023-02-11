import Layout from "./common/Layout";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact/Contact";
import NotFound from "./pages/404/NotFound";
import Recipes from "./pages/Recipes/Recipes";
import Account from "./pages/Account/Account";

export default function App() {
    return (
        <>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/recipes" element={<Recipes />} />
                    <Route path="/account" element={<Account />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                {/* <Home /> */}
            </Layout>
        </>
    );
}
