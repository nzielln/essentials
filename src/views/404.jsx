import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom"

class NotFound extends React.Component {
    render() {
        return (
            <div className="notfound">
                <h3> <span id="bold">404!</span> <br /> Couldn't find what you're looking for. <br /> Please got back to the main page and try again.</h3>
                <div className="notfoundlink" >
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <FontAwesomeIcon icon="circle" color="white" size="lg" />
                    </Link>
                </div>
            </div>
        );
    }
}

export default NotFound;
