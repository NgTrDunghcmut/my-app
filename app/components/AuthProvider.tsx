import { createContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

interface AuthContextProps {
  user: any; // Update the type to match your user object type
  authTokens: any; // Ensure authTokens is of type string
  loginUser: {};
  logoutUser: {};
}
const AuthContext = createContext<AuthContextProps>({
  user: null,
  authTokens: null,
  loginUser: () => {}, // Placeholder function
  logoutUser: () => {}, // Placeholder function
});
export default AuthContext;
export const AuthProvider = ({ children }: any) => {
  let [user, setUser] = useState<any>(() => {
    const storedTokens = localStorage.getItem("authTokens");
    return storedTokens ? jwtDecode(storedTokens) : null;
  });
  let [authTokens, setAuthTokens] = useState<string | null>(() => {
    const storedTokens = localStorage.getItem("authTokens");
    return storedTokens ? JSON.parse(storedTokens) : null;
  });
  let [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  let loginUser = async (e: any) => {
    e.preventDefault();
    const response = await fetch("http://192.168.1.109:8000/api/token/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: e.target.username.value,
        password: e.target.password.value,
      }),
    });
    let data = await response.json();

    if (data) {
      localStorage.setItem("authTokens", JSON.stringify(data));
      setAuthTokens(data);
      setUser(jwtDecode(data.access));
      navigate("/");
    } else {
      alert("Something went wrong while loggin in the user!");
    }
  };

  let logoutUser = (e: any) => {
    e.preventDefault();
    localStorage.removeItem("authTokens");
    setAuthTokens(null);
    setUser(null);
    navigate("/login");
  };
  const updateToken = async () => {
    const response = await fetch("http://127.0.0.1:8000/api/token/refresh/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ refresh: authTokens?.refresh }),
    });

    const data = await response.json();
    if (response.status === 200) {
      setAuthTokens(data);
      setUser(jwtDecode(data.access));
      localStorage.setItem("authTokens", JSON.stringify(data));
    } else {
      logoutUser;
    }
    useEffect(() => {
      if (loading) {
        updateToken();
      }
    }, [authTokens, loading]);
    if (loading) {
      setLoading(false);
    }
  };

  let contextData = {
    user: user,
    authTokens: authTokens,
    loginUser: loginUser,
    logoutUser: logoutUser,
  };

  useEffect(() => {
    const REFRESH_INTERVAL = 1000 * 60 * 4; // 4 minutes
    let interval = setInterval(() => {
      if (authTokens) {
        updateToken();
      }
    }, REFRESH_INTERVAL);
    return () => clearInterval(interval);
  }, [authTokens]);

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
