import { SvgIcon, type SvgIconProps } from "@mui/material";
import React from "react";

export interface IconProps extends SvgIconProps {}

export default function VoiceInteractionIcon(props: IconProps) {
	return (
		<SvgIcon
			{...props}
			fontSize="large"
			viewBox="0 0 1920 1920"
			sx={{ my: "6px", fontSize: { xs: "2.5rem", sm: "3.5rem" } }}
		>
			<path
				fill="#014D6D"
				d="M921 73h80l42 3 44 5 37 6 42 9 35 9 39 12 29 10 30 12 30 13 29 14 29 15 24 14 20 12 23 15 23 16 19 14 14 11 16 13 28 24 17 16 10 10 6 5 7 8 18 18 7 8 10 11 9 11 12 14 26 34 13 18 8 12 15 23 17 28 16 29 16 32 10 21 13 31 11 29 13 38 12 43 9 39 6 31 6 42 4 41 2 34v68l-2 35-4 40-6 42-7 36-10 42-12 41-13 38-14 35-11 25-12 25-8 16-11 21-14 24-14 23-12 18-11 16-13 18-10 13-13 16-8 10-12 14-7 8-22 24-36 36-8 7-12 11-11 9-14 12-17 13-18 14-20 14-24 16-19 12-24 14-22 12-27 14-30 14-31 13-29 11-46 15-41 11-41 9-35 6-38 5-33 3-35 2h-65l-33-2-41-4-35-5-38-7-43-10-35-10-37-12-34-13-26-11-26-12-17-8-19-10-27-15-23-14-25-16-28-20-16-12-13-10-17-14-14-12-10-9-8-7-15-14-34-34-7-8-12-13-9-11-9-10-11-14-10-13-15-20-13-19-14-21-16-26-14-25-12-22-17-35-13-30-9-23-13-36-11-36-10-38-8-37-6-35-5-39-3-35-1-18v-86l3-42 6-48 7-40 9-40 10-37 10-32 11-31 12-30 13-29 12-25 15-29 14-24 12-20 28-42 14-19 10-13 11-14 12-14 9-11 22-24 16-17 15-15 8-7 8-8 8-7 11-10 11-9 13-11 13-10 21-16 19-13 17-12 18-11 16-10 21-12 24-13 15-8 28-13 30-13 29-11 29-10 32-10 34-9 47-10 36-6 43-5 26-2z"
			></path>
			<path
				fill="#FEFEFE"
				d="M474 552h35l20 4 18 6 16 8 16 10 12 11 13 13 14 19 29 44 10 14 34 51 11 16 23 34 25 37 19 28 8 12 48 71 16 24 5 6 4-5 15-22 8-12 11-16 32-48 8-11 7-11 13-19 10-15 15-22 8-12 46-68 8-12 11-16 10-15 25-37 12-16 9-10 10-9 14-10 14-8 14-6 17-5 16-3h35l20 4 18 6 21 11 14 10 9 7v2l4 2 10 11 12 17 11 23 5 16 4 20 1 11v11l-2 17-5 21-6 16-9 17-12 18-21 31-22 33-7 10-21 31-16 24-13 19-10 15-11 16-8 12-19 28-16 24-9 13-10 15-15 22-20 30-11 16-16 24-13 19-21 31-16 24-9 13-32 48-10 16-11 14-14 14-13 10-19 11-21 8-21 5-8 1h-29l-25-5-17-6-16-8-14-9-10-8-15-15-9-12-15-24-23-34-17-25-16-24-19-28-50-74-16-24-9-13-16-24-13-19-21-31-8-12-17-25-16-24-9-13-12-18-21-31-25-37-8-12-17-25-10-15-10-19-7-21-3-14-2-21 1-18 4-21 6-18 8-16 6-10 8-11 12-13 10-9 13-9 16-9 18-7 16-4z"
			></path>
			<path
				fill="#FC6E21"
				d="M1398 855h23l19 3 23 7 16 8 12 8 9 7 12 11 9 10 7 10 8 14 6 14 4 14 3 14 1 11v22l-3 20-5 17-7 16-8 14-8 12-17 25-22 33-9 13-10 15-19 28-8 12-15 22-8 12-17 25-16 24-12 17-9 10-5 6-8 7-14 10-17 9-16 6-20 5-8 1h-27l-16-2-17-5-15-6-17-9-12-9-10-9-9-9-13-19-8-16-6-16-4-16-2-14v-23l3-19 6-20 8-17 14-22 10-14 18-27 17-25 8-12 19-28 22-33 14-20 28-42 16-23 9-11 7-8 11-9 10-7 10-6 13-6 11-4 16-4z"
			></path>
		</SvgIcon>
	);
}
