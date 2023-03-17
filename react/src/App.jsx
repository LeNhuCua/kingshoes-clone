import { useContext, useEffect, useState } from "react";
import { SidebarContext } from "./hook/SidebarContext";
import Header from "./layout/Header";
import Sidebar from "./layout/Sidebar";
import routes from "./routes/routers";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import React from "react";
import ScrollToTop from "./hook/ScrollToTop";
import ScrollButton from "./hook/ScrollButton ";
import Loading from "./layout/Loading";
import Register from "./components/Register";
import Footer from "./layout/Footer";
import CopyRight from "./components/CopyRight";
function App() {
    const showContentMenu = (routes) => {
        let result = null;

        if (routes.length > 0) {
            result = routes.map((route, index) => {
                return (
                    <Route
                        exact={route.exact}
                        key={index}
                        path={route.path}
                        element={<route.element />}
                    />
                );
            });
        }

        return result;
    };
    const { isOpenSidebar } = useContext(SidebarContext);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Loading function to load data or
        // fake it using setTimeout;
        const loadData = async () => {
            // Wait for two second
            await new Promise((r) => setTimeout(r, 1000));

            // Toggle loading state
            setLoading((loading) => !loading);
        };

        loadData();
    }, []);

    // If page is in loading state, display
    // loading message. Modify it as per your
    // requirement.
    if (loading) {
        return (
            <div>
                <Loading />
            </div>
        );
    }

    return (
        <Router>
            <ScrollToTop />
            <div className="font-sans w-full">
                <div className={`relative`}>
                    <div
                        className={`relative xl:left-0 ${
                            isOpenSidebar ? "-left-[250px]" : ""
                        }`}
                    >
                        <Header />
                        <main className="">
                            <Routes>{showContentMenu(routes)}</Routes>
                        </main>
                        <div className="mt-8">
                            <Register />
                            <Footer />
                            <CopyRight/>
                        </div>

                        <ScrollButton />
                    </div>
             
                    {isOpenSidebar ? <Sidebar /> : ""}
                    <div
                        className={`absolute xl:w-0 xl:h-0 ${
                            isOpenSidebar
                                ? "absolute w-[calc(100%-250px)] top-0 h-full bg-[rgba(0,0,0,0.3)] z-50"
                                : ""
                        } `}
                    ></div>
                </div>
            </div>
        </Router>
    );
}

export default App;
