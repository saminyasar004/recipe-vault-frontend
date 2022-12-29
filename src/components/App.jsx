import Layout from "./common/Layout";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact/Contact";

export default function App() {
    return (
        <>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                {/* <Home /> */}
            </Layout>
        </>
    );
}
