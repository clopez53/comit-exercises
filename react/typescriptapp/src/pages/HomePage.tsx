import React from "react";
import { Link, useHistory } from "react-router-dom";


const HomePage = () => {
    const history = useHistory();

    const handleOnClick = () => {
        history.push("/reservations");
    }

    return <div>This is my home page <button onClick={handleOnClick}>page</button><Link to="/reservations">Take me to reservations!</Link> </div>

}

export default HomePage;