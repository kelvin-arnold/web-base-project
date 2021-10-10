// Component generated with util/vox-create-component.js
import React from "react";
import {ButtonWrapper} from "./Button.styled";
import {ButtonProps} from "./Button.types";

export const Button: React.VFC<ButtonProps> = ({...args}) => {
	return (
		<ButtonWrapper {...args}>
			<span>Button</span>
		</ButtonWrapper>
	);
};

export default Button;
