import './Btn.scss'


export default function Btn() {

    return (
        <>
        <div className="btn"></div>
            <button className="btn__pri">Click</button>
            <button className="btn__pri__disable">Click</button>
            <button className="btn__error">Click</button>
            <button className="btn__sec">Click</button>
        </>
    );
}