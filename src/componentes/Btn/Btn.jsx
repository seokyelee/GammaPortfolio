import { Link } from "react-router-dom";
import "./Btn.scss";

export default function Btn() {
	return (
		<>
		<section className="btn__box">
			<div className="btn">Button
			<button className="btn__pri" type="button">
				Let's talk
			</button>
			<button className="btn__pri__disable" type="button">
				Let's talk
			</button>
			<button className="btn__hover" type="button">
				Let's talk
			</button>
			</div>
			<div className="btn__link"> Button whit Link
			<Link className="btn__pri">Click</Link>
			<Link className="btn__pri__disable">Click</Link>
			<Link className="btn__hover">Click</Link>
			</div>
		</section>
		</>
	);
}
