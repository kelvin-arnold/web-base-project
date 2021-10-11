// Component generated with util/vox-create-component.js
import React from "react";
import {AppHomeWrapper} from "./AppHome.styled";
import {AppHomeProps} from "./AppHome.types";
import {UIButton} from "./../../ui";
import {AuthContext} from "./../../context/AuthContext";

export const AppHome: React.VFC<AppHomeProps> = ({...args}) => {
	// Context Here
	const {clearSession} = React.useContext(AuthContext);
	// States Here
	// Effects Here
	// Handlers Here
	return (
		<AppHomeWrapper {...args}>
			<span className="text-xl font-medium mb-2">Home</span>
			<span className="mb-4">Home description</span>
			<UIButton label="Logout" preset="danger" onClick={clearSession} />
		</AppHomeWrapper>
	);
};

export default AppHome;
