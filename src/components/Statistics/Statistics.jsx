import PropTypes from 'prop-types';
import s from './Statistics.module.css';

import { Notification } from 'components/Notification/Notification';

export const Statistics = ({ title, good, neutral, bad, total, positive}) => {
    return (
        <>
            {title && <h2>{title}</h2>}

            {good || bad || neutral ? <ul>
                <li className={s.item}>Good: {good}</li>
                <li className={s.item}>Neutral: {neutral }</li>
                <li className={s.item}>Bad: {bad}</li>
                <li className={s.item}>Total: {total}</li>
                <li className={s.positiveItem}>Positive feedback: {positive}</li>
            </ul> : 
            <Notification message={'There is no feedback'}/>}
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
