import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <ul className={s.btnList}>
            {options.map(option => {
                return (
                    <li className={s.btnItem} key={option}>
                        <button type="button" onClick={onLeaveFeedback} className={s.btn}>{option}</button>
                    </li>)
            })}
        </ul>
    );

};

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string),
    onLeaveFeedback: PropTypes.func.isRequired
}