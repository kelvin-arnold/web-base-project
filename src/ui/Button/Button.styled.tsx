// Component generated with util/create-component.js
import styled from "styled-components";
import tw from "twin.macro";
import {preset} from "./Button.types";
import classNames from "classnames";

type IButtonProps = {
	bp: keyof typeof preset;
};
/**
 * Components
 */
export const ButtonWrapper = styled.button.attrs<IButtonProps>(({bp}) => {
	const className = classNames({
		"py-2 px-4 rounded": true,
		"bg-primary hover:bg-primary-light": bp === "default",
		"bg-red hover:bg-red-light": bp === "danger",
	});
	return {
		className,
	};
})<{bp: keyof typeof preset}>`
	& .label {
		${tw`text-white`}
	}
`;
