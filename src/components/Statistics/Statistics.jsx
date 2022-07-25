import PropTypes from 'prop-types';
import { Notification } from 'components/Notification/Notification';

export const Statistics = ({ title, good, neutral, bad, total, positive}) => {
    return (
        <>
            {title && <h2>{title}</h2>}

            {good || bad || neutral ? <ul>
                <li>Good:{good}</li>
                <li>Neutral:{neutral }</li>
                <li>Bad:{bad}</li>
                <li>Total:{total}</li>
                <li>Positive feedback:{positive }</li>
            </ul> : 
            <Notification message={'There is no feedback'}/>}
        </>
    );
};

Statistics.propTypes = {
    title: PropTypes.string
}
