
import { Link } from "react-router-dom";
import { useState } from "react";


export default function Btn() {

	let [classText, setClassText] = useState('');
	
	function changeClass(){
		if (classText === 'active') {
			setClassText('');
		}else{
			setClassText('active');
		}
	}
	return (
		<>
	
		<h2 className="sub_title" onClick={changeClass}>Botones</h2>
		<section className={'btn__container' + classText}>
			<article className='btn__box'>
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
		</article>
		</section>
		</>
	);
}
