// Component generated with util/vox-create-component.js
export enum preset {
	default,
	primary,
	secondary,
	dark,
	danger,
}
export type ButtonProps = {
	// Required
	readonly label: string;
	readonly onClick: () => void;
	// Optional
	readonly preset?: keyof typeof preset;
};
