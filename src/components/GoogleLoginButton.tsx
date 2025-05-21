import { GoogleLogin, type CredentialResponse } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import type { GooglePayload } from "../types/google";
import React from "react";

export interface GoogleLoginButtonProps {
  onLogin: (payload: GooglePayload) => void;
}

export const GoogleLoginButton: React.FC<GoogleLoginButtonProps> = ({
  onLogin,
}) => {
  const handleSuccess = (response: CredentialResponse) => {
    if (!response.credential) return;
    const payload = jwtDecode<GooglePayload>(response.credential);
    onLogin(payload);
  };

  const handleError = () => {
    console.error("Erro no login com Google");
  };

  return (
    <div className="flex justify-center">
      <GoogleLogin onSuccess={handleSuccess} onError={handleError} />
    </div>
  );
};
