import PropTypes from 'prop-types';
import React from 'react';


function Form ({updateQuery,city,updateCity, disabled, country, updateCountry}){

    function getBadgeClasses() {
        let classes = "form_element submitButton ";
        classes += city.length > 0 && country !== 'none' ? "submitButton_activated" : "submitButton_disabled";
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
                <select value={country} onChange={updateCountry}>
                    <option value="none">-</option>
                    <option value="fr">France</option>
                    <option value="us">Amérique</option>
                </select>
                
                <input  disabled={disabled} className={getBadgeClasses()} type="submit" value="Envoyer" />
            </form>
        </React.Fragment>
    )

}

Form.propTypes = {
    updateQuery: PropTypes.func.isRequired,
    city: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.number.isRequired
    ]),
    updateCity: PropTypes.func.isRequired,
    disabled: PropTypes.bool.isRequired,
    country: PropTypes.string.isRequired
}

export default Form

