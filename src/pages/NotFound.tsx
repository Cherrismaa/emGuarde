// src/pages/NotFound.tsx

import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <Helmet>
        <title>Page Not Found | emGuarde™</title>
        <meta
          name="description"
          content="The page you are trying to access does not exist or has been removed. Navigate back to the emGuarde™ home page."
        />

        {/* Important: Prevent search engines from indexing 404 pages */}
        <meta name="robots" content="noindex, nofollow" />

        <link rel="canonical" href="https://emguarde.shop/404" />

        <meta property="og:title" content="Page Not Found | emGuarde™" />
        <meta
          property="og:description"
          content="This page cannot be found. Return to emGuarde™ official website."
        />
        <meta property="og:url" content="https://emguarde.shop/404" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">Oops! Page not found</p>
        <a href="/" aria-label="Return to emGuarde home page" className="text-primary underline hover:text-primary/90">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
