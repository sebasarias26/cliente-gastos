import './Banner.css';
import Finanzas from '../assets/finanzas.png'

function Banner() {
    return (
        <>
            <div className="banner"> 

                <div className="left__container--banner">
                    <h1 className='tittle--left'>Control Gastos</h1>
                    <h3 className="subtitle--left">Conócenos</h3>
                    <p className="description--left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem veniam cupiditate quo delectus tempora vel, sequi esse omnis quod nulla itaque expedita quaerat in officia dolore nihil doloremque illo ipsa voluptates? Quam culpa assumenda in tenetur consequuntur provident dignissimos, nobis distinctio! Voluptatem ut fuga repellat consequatur neque, quo assumenda praesentium.</p>
                </div>

                <div className="right__container--banner">
                    <img src={Finanzas} className="ilustration--right" />
                    <p className="desciption--right">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui vero ipsum ullam dolorem fuga voluptatum similique totam autem eum suscipit soluta veritatis reiciendis, explicabo ad!</p>
                </div>
            </div>
        </>
    );
}

export default Banner;