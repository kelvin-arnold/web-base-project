// Component generated with util/vox-create-component.js
import React from "react";
import {AuthSigninWrapper} from "./AuthSignin.styled";
import {AuthSigninProps} from "./AuthSignin.types";
import {UIButton} from "./../../ui";
import {AuthContext} from "./../../context/AuthContext";

export const AuthSignin: React.VFC<AuthSigninProps> = ({...args}) => {
	// Context Here
	const {setSession} = React.useContext(AuthContext);
	// States Here
	// Effects Here
	// Handlers Here
	const login = () =>
		setSession({userName: "devires@user"}, "deviresTokenAccess", "deviresRefreshToken");
	return (
		<AuthSigninWrapper {...args}>
			<span className="text-xl font-medium mb-2">Sign in</span>
			<span className="mb-4">Sign in description</span>
			<UIButton label="Sign in" onClick={login} />
		</AuthSigninWrapper>
	);
};

export default AuthSignin;
