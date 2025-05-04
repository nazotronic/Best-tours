import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../Firebase";
import { useAuth } from "../AuthContext";

function AuthDetails() {
	const { closeAuthBox } = useAuth();
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

	function userSignOut() {
		signOut(auth).then((user) => {
			
        }).catch((error) => {
            console.log(error);
        });

		window.location.reload();
	}

	function userDelete() {
		authUser.delete()
		.then(() => {
		})
		.catch((error) => {
			console.log(error);
		});
	}

	if (!authUser) return null;

    return (
        <div className="auth-details">
			<div className="auth-details-header">
				<h2>Signed In</h2>
				<button onClick={closeAuthBox} className="close-btn">✖</button>
			</div>

			<div className="auth-details-content">
				<p>{authUser.email}</p> 

				<div className="auth-details-buttons">
					<button onClick={userSignOut} >Sign out</button>
					<button className="delete-btn" onClick={userDelete} >Delete</button>
				</div>
			</div>
        </div>
    );
}

export default AuthDetails;