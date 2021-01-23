import React from 'react';
import '../assets/styles/components/ReceipeList.scss';


const ReceipeList = ({onSubmit, onChange, onIngredientsChange, values, submitedValues, isOpened , addInput, numberInputs, onDelete, onClose}) => {

    const inputs = numberInputs.map((ing, i) => (
        <div className="form-group">
            <input 
                type="text"
                onChange={onIngredientsChange}
                value={ing}
                name={`ingredient-${i}`}
                className="form-control" 
                placeholder="Ingredient"
            />
        </div>

    )) 
       
    


    return (


       <div className="container">
           <div className="row justify-content-center">
               <div className="col-6">

                {isOpened && (

               <form onSubmit={onSubmit} className="mb-3">
                    {/* title */}
                    <div className="x-close d-flex justify-content-end">
                        <button onClick={onClose}>X</button>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">Title</label>
                        <input 
                            type="text" 
                            onChange={onChange}
                            value={values.title}
                            name="title" 
                            className="form-control" 
                            id="exampleFormControlInput1" 
                            placeholder="Receipe Name"
                        />
                    </div>

                    {/* Text Area */}
                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">Instructions</label>
                        <textarea 
                            onChange={onChange}
                            value={values.imstructions}
                            name="instructions" 
                            className="form-control" 
                            id="exampleFormControlTextarea1" 
                            rows="3"
                        />
                    </div>
                    {/* <div className="form-group">
                        <input 
                            type="text"
                            onChange={onChange}
                            value={values.ingredient}
                            name="ingredient"
                            className="form-control" 
                            placeholder="Ingredients"
                        />
                    </div>
                    {numberInputs.map( (element, index) => (
                        <div className="form-group">
                            <input 
                                type="text"
                                onChange={onChange}
                                value={values.ingredient}
                                name="ingredient"
                                className="form-control" 
                                placeholder="Ingredients"
                            />
                        </div>
                    ))
                    } */}
                    {inputs}
                    <button 
                    onClick = {addInput}
                    className="button"
                    type="button">
                       + 
                    </button>

                    <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">Image Url</label>
                        <input 
                            type="text"
                            onChange={onChange}
                            value={values.imageUrl}
                            name="imageUrl"
                            className="form-control" 
                            id="exampleFormControlInput1" 
                            placeholder="Image Url"/>
                    </div>

                    <button className="button-submit" type="submit">
                        SAVE
                    </button>
                </form>
                )
                }

               </div>

           </div>



           <div className="row">
                {submitedValues.map( (element, index) => (
                    <div className="col-6">
                        <div className="card mb-4">
                            <img src={element.imageUrl} className="card-img-top" alt={element.title}/>
                            <div className="card-body">
                                <h5 className="card-title">{element.title}</h5>
                                <p className="card-text">Ingredients</p>
                                <p className="card-text">{element.instructions}</p>
                                <ul>
                                    {element.ingredients.map( element => (
                                        <li key={element}>{element}</li>
                                    ))
                                    }
                                    
                                    {/* <li>8 cups water</li>
                                    <li>1 box spaghetti</li> */}
                                </ul>
                                <button
                                onClick = {() => onDelete(index)}
                                type="button" 
                                className="btn btn-primary"
                                >Delete</button>
                            </div>
                        </div>
                    </div>

                ))}

               {/* <div className="col-6">
                    <div className="card">
                        <img src="..." className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Ingredients</p>
                            <ul>
                                <li>pasta</li>
                                <li>8 cups water</li>
                                <li>1 box spaghetti</li>
                            </ul>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
               </div>

               
               <div className="col-6">
                    <div className="card">
                        <img src="..." className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Ingredients</p>
                            <ul>
                                <li>2 Scoops Ice cream</li>
                                <li>8 ounces milk</li>
                                
                            </ul>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
               </div> */}


           </div>

       </div>
    )
}


export default ReceipeList;