// Component generated with util/vox-create-component.js
import React from "react";
import {ButtonWrapper} from "./Button.styled";
import {ButtonProps} from "./Button.types";

export const Button: React.VFC<ButtonProps> = ({label, onClick, preset = "default", ...args}) => {
	return (
		<ButtonWrapper {...{onClick, bp: preset}} {...args}>
			<span className="label">{label || "Button"}</span>
		</ButtonWrapper>
	);
};

export default Button;
