import React, { Suspense, lazy } from "react";
import ErrorBoundary from "./utils/ErrorBoundary";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Loading from "./components/Loading";
import AppProvider from "./utils/Context";

const Home = lazy(() => import("./pages/Home"));
const Page404 = lazy(() => import("./pages/Page404"));
const SearchResult = lazy(() => import("./pages/SearchResult"));
const LoginPage = lazy(() => import("./pages/Login"));

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Suspense fallback={<div className="lazy-loading"></div>}>
          <AppProvider>
            {/* <Loading /> */}
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/search/*" exact element={<SearchResult />} />
              <Route path="/signin/" element={<LoginPage />} />
              <Route path="*" element={<Page404 />} />
            </Routes>
          </AppProvider>
        </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  );
}
