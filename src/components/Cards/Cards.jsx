import React from 'react'

const Cards = ({ results }) => {
    let display;
    if (results) {
        display = results.map(personaje => {
            const { id, name, image, location, species, status } = personaje;
            return (
                <div key={id} className="col-4 position-relative my-2">
                    <div className="cards">
                        <img src={image} alt={name} className='img img-fluid' />
                        <div className="content">
                            <div className="fs-4 fw-bold mb-4">{name}</div>
                            <div className="">
                                <div className="fs-6">Last location</div>
                                <div className="fs-7">{location.name}</div>
                            </div>
                        </div>
                    </div>
                    <span className={`badge position-absolute ${(status == "Alive" ? "text-bg-success" : (status == "Dead" ? "text-bg-danger" : "text-bg-secondary"))}`}>{status}</span>

                </div>
            );
        });
    } else {
        display = 'No hay data'
    }
   // console.log(results);
    return (
        <>
            {display}
        </>
    );
}

export default Cards