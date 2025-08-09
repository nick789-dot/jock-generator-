
import React from "react";
import './Button.css'

const Button = ({ callApi, loading }) => {
    return (
        <button 
            onClick={callApi} 
            disabled={loading}
            className={loading ? 'loading' : ''}
        >
            {loading ? 'Loading...' : 'Click to generate a joke'}
        </button>
    );
};

export default Button;
