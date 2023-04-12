import React from "react";
import { FaceFrownIcon } from "@heroicons/react/24/solid";
import { Link, useRouteError } from "react-router-dom";
import "./ErrorPage.css"

const ErrorPage = () => {

    
  const { error, status } = useRouteError();
  return (
    <body className="body">
        <section className="notFound">
        <div className="img">
        <img src="https://assets.codepen.io/5647096/backToTheHomepage.png" alt="Back to the Homepage"/>
        <img src="https://assets.codepen.io/5647096/Delorean.png" alt="El Delorean, El Doc y Marti McFly"/>
        </div>
        <div className="text">
          <h1 className="font">{status || 404}</h1>
        <h2 className="font">{error?.message}</h2>
        <h3 className="font">BACK TO HOME? <Link to="/" className="yes btn px-4 font"> Home </Link></h3>
        </div>
    </section>
    </body>
  );
};

export default ErrorPage;
