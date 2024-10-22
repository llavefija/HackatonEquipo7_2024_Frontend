import { Link } from "react-router-dom";

export const CurrentPlace = () => {

    return (
        <div className="card lg:card-side bg-slate-100 shadow-xl my-20">
            <figure>
                <img
                    src="https://cdn-imgix.headout.com/microbrands-content-image/image/0cfef2762d8811e1937510140ed70027-Sagrada%20Familia.jpg"
                    alt="Album" />
            </figure>
            <div className="card-body">
                <div>
                <h2 className="card-title text-gray-800 mb-5 ">Lorem Ipsum</h2>
                <p className="text-gray-600">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, 
                    cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años,
                     sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original.</p>
                </div>
                <div>
                <h3 className="text-gray-800 my-5"> <strong>Schedules </strong></h3>
                <span className="badge badge-success mx-2 mb-2">Badge</span>
                <span className="badge badge-success mx-2 mb-2">Badge</span>
                <span className="badge badge-success mx-2 mb-2">Badge</span>
                <span className="badge badge-success mx-2 mb-2">Badge</span>
                <span className="badge badge-success mx-2 mb-2">Badge</span>
                <span className="badge badge-success mx-2 mb-2">Badge</span>
                <span className="badge badge-success mx-2 mb-2">Badge</span>
                <span className="badge badge-success mx-2 mb-2">Badge</span>
                <span className="badge badge-success mx-2 mb-2">Badge</span>
                <span className="badge badge-success mx-2 mb-2">Badge</span>
                <span className="badge badge-success mx-2 mb-2">Badge</span>
                <span className="badge badge-success mx-2 mb-2">Badge</span>
                <span className="badge badge-success mx-2 mb-2">Badge</span>
                <span className="badge badge-success mx-2 mb-2">Badge</span>
                <span className="badge badge-success mx-2 mb-2">Badge</span>
                <span className="badge badge-success mx-2 mb-2">Badge</span>
                <span className="badge badge-success mx-2 mb-2">Badge</span>
                <span className="badge badge-success mx-2 mb-2">Badge</span>
                <span className="badge badge-success mx-2 mb-2">Badge</span>
                <span className="badge badge-success mx-2 mb-2">Badge</span>
                <span className="badge badge-success mx-2 mb-2">Badge</span>
                <span className="badge badge-success mx-2 mb-2">Badge</span>
                <span className="badge badge-success mx-2 mb-2">Badge</span>
                <span className="badge badge-success mx-2 mb-2">Badge</span>
                </div>
                <div className="card-actions justify-end mt-12">
                    <Link to="/map" className="btn btn-accent"> Go back </Link>
                </div>
            </div>
        </div>
    )
}