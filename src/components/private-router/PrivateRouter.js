import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export const PrivateRouter = ({ children }) => {
  const location = useLocation();

  console.log(location);

  const { user } = useSelector((state) => state.user);

  const isAuth = user?._id;

  console.log(user);

  return isAuth ? (
    children
  ) : (
    <Navigate
      to="/"
      replace
      state={{
        from: location,
      }}
    />
  );
};

// The <p>Welcome to the protected area.</p> is the "children" of the PrivateRouter component. When isAuth is true (indicating that the user is authenticated), the children will be rendered, which means that the content between the <PrivateRouter> tags will be displayed. If isAuth is false, it will not be rendered, and instead, the <Navigate> component will be returned, which typically redirects the user to another route
