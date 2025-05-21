import { useState } from "react";
import type { GooglePayload } from "../types/google";
import { GoogleLoginButton } from "./GoogleLoginButton";
import { UserData } from "./UserData";
import { GoogleLogoutButton } from "./GoogleLogoutButton";

export function LandingPage() {
  const [user, setUser] = useState<GooglePayload | null>(null);

  return (
    <div className="h-screen w-full bg-white relative">
      {!user && (
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <GoogleLoginButton onLogin={setUser} />
        </div>
      )}

      {user && (
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <UserData
            name={user.name}
            email={user.email}
            picture={user.picture}
          />
          <GoogleLogoutButton onLogout={() => setUser(null)} />
        </div>
      )}
    </div>
  );
}
