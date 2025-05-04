import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../Firebase";

function SignUp() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [copy_password, setCopyPassword] = useState("");
	const [error, setError] = useState("");

	function register(e) {
		e.preventDefault();

		setError("");
		if (copy_password !== password) {
			setError("incorrect password")
			return;
		}

		createUserWithEmailAndPassword(auth, email, password).then((user) => {
			console.log(user);

			setEmail("");
			setPassword("");
			setCopyPassword("");
		}).catch((error) => {
			console.log(error);
			setError("account already exists");
		});
	}

	return (
		<form className="sign-up" onSubmit={register}>
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
			<input
				placeholder="repeat password"
				value={copy_password}
				onChange={(e) => setCopyPassword(e.target.value)}
				type="password"
				required
			/>
			<button>Create</button>

			{error ? <p>{error}</p> : ""}
		</form>
	);
}

export default SignUp;
