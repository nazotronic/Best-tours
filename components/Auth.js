import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Firebase";
import { useAuth } from "../AuthContext";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import AuthDetails from "./AuthDetails";

function Auth() {
    const { isAuthBoxOpen, closeAuthBox } = useAuth();
    const [activeTab, setActiveTab] = useState("Sign Up");
    const [authUser, setAuthUser] = useState(null);

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user);
            } else {
                setAuthUser(null);
            }
        });
        return () => listen();
    }, []);

    if (!isAuthBoxOpen) return null;
    if (authUser) return <AuthDetails />;

    return (
        <div className="auth-box">
            <nav className="auth-nav-bar">
                <p
                    className={`tab-${activeTab === "Sign Up" ? "active" : ""}`}
                    onClick={() => setActiveTab("Sign Up")}
                >
                    Sign Up
                </p>

                <p
                    className={`tab-${activeTab === "Sign In" ? "active" : ""}`}
                    onClick={() => setActiveTab("Sign In")}
                >
                    Sign In
                </p>

                <button onClick={closeAuthBox} className="close-btn">✖</button>
            </nav>

            <div className="auth-content">
                {activeTab === "Sign Up" ? <SignUp /> : <SignIn />}
            </div>
        </div>
    );
}

export default Auth;
