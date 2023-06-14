import React, { useContext } from "react";
import './Btn.scss';
import { ThemeContext } from "../../App";

export default function Btn() {
	const themeContext = useContext(ThemeContext);

	const textStyle = {
		color: themeContext.theme === 'dark' ? '#fff' : '',
		fontWeight: themeContext.theme === 'dark' ? 'border' : '',
		backgroundColor: themeContext.theme === 'dark' ? '#8A4ADD' : '',
		border: themeContext.theme === 'dark' ? '1px solid #fff' : '',
	};

	const shadowStyle = {
		boxShadow: themeContext.theme === 'dark' ? '10px 5px 5px #0b027a ' : '',
	};

	return (
		<>

			<div >
				<button style={{ ...shadowStyle, ...textStyle }} className="btn__pri" type="sbmit">
					Let's talk
				</button>

			</div>
		</>
	);
}
