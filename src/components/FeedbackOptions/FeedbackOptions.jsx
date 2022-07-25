import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <ul>
            {options.map(option => {
                return (
                    <li key={option}>
                        <button type="button" onClick={onLeaveFeedback}>{option}</button>
                    </li>)
            })}
        </ul>
    );

};