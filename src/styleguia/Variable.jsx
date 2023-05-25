import { useState } from "react";


export default function Variable() {
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
		
		<h2 className="sub_title" onClick={changeClass}>Paleta de colores</h2>
			<section className={'color__container'+ classText}>
			<div className="color__box">
				<ul>
					<li className = "p">color parrafo:#777777</li>
					<li className = "border">color border:#8E8E8E</li>
					<li className = "disable">color disable:#D3D3D3</li>
					<li className = "bg">color fondo:#ffffff</li>
					<li className = "color_btn">color botones:#00FFF0</li>
					<li className = "complementario">color complementario: #8A4ADD</li>
				</ul>
			</div>
		</section>
		
		<h2 className="sub_title" onClick={changeClass}>Tipografía</h2>
		<section className={'font__container'+ classText}>
			<div className="font__box">
			<h1 className="exemple_title">
				Titulo - Lorem ipsum dolor sit amet consectetur 
			</h1>
			<h1>
				h1 - Lorem ipsum dolor sit amet consectetur adipiscing elit 
			</h1>
			<h2>
				h2 - Lorem ipsum dolor sit amet consectetur adipiscing elit donec
				venenatis morbi sociosqu mattis
			</h2>
			<h3>
				h3 - Lorem ipsum dolor sit amet consectetur adipiscing elit donec
				venenatis morbi sociosqu mattis
			</h3>
			<h4>
				h4 - Lorem ipsum dolor sit amet consectetur adipiscing elit donec
				venenatis morbi sociosqu mattis
			</h4>
			<h5>
				h5 - Lorem ipsum dolor sit amet consectetur adipiscing elit donec
				venenatis morbi sociosqu mattis
			</h5>
			<h6>
				h6 - Lorem ipsum dolor sit amet consectetur adipiscing elit donec
				venenatis morbi sociosqu mattis
			</h6>
			</div>
			
			<h2> Parrafo</h2>
			<div>
			<p className="exemple__p">
				Paragraph - Lorem ipsum dolor sit amet consectetur adipiscing elit
				donec, venenatis morbi sociosqu mattis porta nullam nulla molestie
				luctus, convallis mi phasellus augue vestibulum cursus sociis.
				Dictumst volutpat lectus vivamus congue lobortis vel mattis enim
				consequat, non pharetra aenean mollis pellentesque tristique faucibus
				sem rutrum mus, eleifend egestas turpis conubia fames vulputate
				convallis bibendum.
			</p>
		</div>
		</section>
		
		<div className="grid">
			<div className="grid__item grid__item--1"></div>
			<div className="grid__item grid__item--2"></div>
			<div className="grid__item"></div>
			<div className="grid__item"></div>
			<div className="grid__item"></div>
			<div className="grid__item"></div>
			<div className="grid__item"></div>
			<div className="grid__item"></div>
			<div className="grid__item"></div>
			<div className="grid__item"></div>
			<div className="grid__item"></div>
		</div>
			<div className="grid">
			<div className="grid__item"></div>
			<div className="grid__item"></div>
			<div className="grid__item"></div>
			<div className="grid__item"></div>
			<div className="grid__item"></div>
			<div className="grid__item"></div>
			<div className="grid__item"></div>
			<div className="grid__item"></div>
			<div className="grid__item"></div>
			<div className="grid__item"></div>
			<div className="grid__item"></div>
			<div className="grid__item"></div>
		</div>
		<div className="grid">
			<div className="grid__item grid__item--6"></div>
			<div className="grid__item grid__item--6"></div>
		</div>


		</>
	);
}
