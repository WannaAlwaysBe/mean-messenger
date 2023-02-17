import React from 'react';

import {BsApple} from "react-icons/bs";
import {IconType} from "react-icons";

import './IconButton.css';

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	Icon?: IconType;
	iconColor?: string;
	iconSize?: 'sm' | 'md' | 'lg';
}

export const IconButton = ({
	Icon = BsApple,
	iconColor = '#000',
	iconSize = 'md',
	className,
	...props
}: IconButtonProps) => {
	const mergedStyles = `icon-btn ${iconSize} ${className}`;

	return (
		<button className={mergedStyles} {...props}>
			<Icon color={iconColor} size="1.5em" />
		</button>
	);
};
