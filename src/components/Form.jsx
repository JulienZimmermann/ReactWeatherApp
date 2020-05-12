import React from 'react';

function Form ({updateQuery,city,updateCity, disabled}){

    function getBadgeClasses() {
        let classes = "form_element submitButton";
        classes += city.length > 0 ? " green" : " ";
        return classes; 
    }

    return(
        <React.Fragment>
            <form className="form" onSubmit={updateQuery}>
                <input 
                    className="form_element input_text_city"
                    type="text"
                    placeholder="Ville/Village"
                    maxLength="50"
                    name='city'
                    value={city}
                    onChange={updateCity}
                />
                {/* <label>
                    <input
                        type="radio"
                        name="units"
                        // checked={unit === "metric"}
                        value="metric"
                        // onChange={(e) => setUnit(e.target.value)}
                    />
                    Celsius
                </label>
                <label>
                    <input
                        type="radio"
                        name="units"
                        // checked={unit === "imperial"}
                        value="imperial"
                        // onChange={(e) => setUnit(e.target.value)}
                    />
                    Fahrenheit
                </label> */}

                <input  disabled={disabled} className={getBadgeClasses()} type="submit" value="Envoyer" />
            </form>
        </React.Fragment>
    )

}

export default Form