import React from 'react'; 
import Card from '../components/Card';


const CardGroup = ({results}) => {

    if(results.length <= 0) {
        return <p>We did not find any card info</p>
    }


    return (
        <>
            <div className="container">
                <div className="row">
                   
                    {results.map( element => (
                         <div className="col-ms-4 col-md-4 col-xl-3">
                            <Card key={element.id} {...element}/>
                        </div>
                        ))
                    }
                </div>
            </div>

        </>
    )
}


export default CardGroup;