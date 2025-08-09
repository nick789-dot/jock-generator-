import React, { useState } from "react";
import Button from "./Button";
import './Joke.css';

const Joke = () => {
    const [joke, setJoke] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchApi = async () => {
        setLoading(true);
        setError(null);
        
        try {
            const response = await fetch("https://v2.jokeapi.dev/joke/Programming?type=single");
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data = await response.json();
            
            if (data.error) {
                throw new Error(data.message || "Failed to fetch joke");
            }
            
            setJoke(data.joke);
        } catch (err) {
            setError(err.message || "Failed to fetch joke. Please try again.");
            console.error("Error fetching joke:", err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="joke">
            <Button callApi={fetchApi} loading={loading} />
            {loading && <p>Loading joke...</p>}
            {error && <p className="error">{error}</p>}
            {joke && !loading && <p className="joke-text">{joke}</p>}
        </div>
    );
};

export default Joke;
