import propTypes from "prop-types";
import styled from "./Button.module.css";

function Button({text}) {
    return (
        <div>
            <button className={styled.btn}>
            {text}
            </button>
        </div>
    );
}

Button.propTypes = {
    text: propTypes.string.isRequired,
}

export default Button;