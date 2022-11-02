import React from "react";
import useAuth from "../../../hooks/useAuth";

const DashboardHome = () => {
  const { userInfo } = useAuth();
  return (
    <div>
      <h2 className="fw-bold pt-5 mt-5">
        Welcome to the Dashboard HomePage of{" "}
        <span className="text-primary">{userInfo?.displayName}</span>
      </h2>

      <h3 className="fw-bold pt-5">
        Your Primary Email Address:
        <span className="text-primary">&nbsp;{userInfo?.email}</span>
      </h3>
    </div>
  );
};

export default DashboardHome;
