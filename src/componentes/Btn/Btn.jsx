import { Link } from "react-router-dom";
import "./Btn.scss";

export default function Btn() {
	return (
		<>
			<div className="btn">Button</div>
			<button className="btn__pri" type="button">
				Click
			</button>
			<button className="btn__pri__disable" type="button">
				Click
			</button>
			<button className="btn__hover" type="button">
				Click
			</button>

			<Link className="btn__pri">Click</Link>
			<Link className="btn__pri__disable">Click</Link>
			<Link className="btn__hover">Click</Link>
		</>
	);
}
