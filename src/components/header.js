import React from "react";
import LogoutGoogle from "./logoutGoogle";

const Header = () => {
  return (
    <div>
      <div className="w-full bg-blue-500 text-white p-3 flex items-center justify-between">
        <div>
          <strong>GitHub</strong> Jobs
        </div>
        <div>
          <LogoutGoogle />
        </div>
      </div>
    </div>
  );
};

export default Header;
