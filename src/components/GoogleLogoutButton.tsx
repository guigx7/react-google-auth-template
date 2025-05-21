import React from "react";
import { googleLogout } from "@react-oauth/google";

export interface GoogleLogoutButtonProps {
  onLogout: () => void;
}

export const GoogleLogoutButton: React.FC<GoogleLogoutButtonProps> = ({
  onLogout,
}) => {
  const handleLogout = () => {
    googleLogout();
    onLogout();
  };

  return (
    <div className="mt-8 flex justify-center">
      <button
        onClick={handleLogout}
        className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition cursor-pointer"
      >
        Logout
      </button>
    </div>
  );
};
