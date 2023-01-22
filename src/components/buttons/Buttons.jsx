import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { actionsButtons } from '../../redux/actions/buttons.actions';
import {useDispatch} from 'react-redux'
import '../styles/Buttons.css';

const Buttons = () => {
    const dispatch = useDispatch();

    const handlePage = (r_or_l) => {
        dispatch(actionsButtons.nextAndBefore(r_or_l))
    }
    return (
        <div className="buttons-container">
            <button className="arrow-button left-arrow" onClick={() => handlePage("l")}>
                <FaArrowLeft className="arrow-icon" />
            </button>
            <button className="arrow-button right-arrow" onClick={() => handlePage("r")}>
                <FaArrowRight className="arrow-icon" />
            </button>
        </div>
    )
}

export default Buttons;
