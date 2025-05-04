import React, { useState } from "react";
import { auth } from "../Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    function logIn(e) {
        e.preventDefault();
        setError("");

        signInWithEmailAndPassword(auth, email, password).then((user) => {
            console.log(user);

            setEmail("");
            setPassword("");
        }).catch((error) => {
            console.log(error)
            setError("Account data error")
        });
    }

    return (
        <form className="sign-in" onSubmit={logIn}>
            <input
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                required
            />
            <input
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                required
            />
            <button>Login</button>

            {error ? <p>{error}</p> : ""}
        </form>
    );
}

export default SignIn;
