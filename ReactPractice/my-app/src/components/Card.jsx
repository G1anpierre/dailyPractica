import React from 'react';

const Card = ({name, image, species}) => {


    return (
        <>
            <div className="card mb-3">
                <div className="row no-gutters">
                    <div className="col-md-4">
                    <img src={image} className="card-img" alt={name}/>
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{species}</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;