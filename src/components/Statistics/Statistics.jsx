import PropTypes from 'prop-types';
import s from './Statistics.module.css';


export const Statistics = ({ good, neutral, bad, total, positive}) => {
    return (
        <>
            <ul>
                <li className={s.item}>Good: {good}</li>
                <li className={s.item}>Neutral: {neutral}</li>
                <li className={s.item}>Bad: {bad}</li>
                <li className={s.item}>Total: {total}</li>
                <li className={s.positiveItem}>Positive feedback: {positive}</li>
            </ul>
            
        </>
    );
};

Statistics.propTypes = {
    title: PropTypes.string,
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number,
    positive: PropTypes.number
}
