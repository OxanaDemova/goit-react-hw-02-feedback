import PropTypes from 'prop-types';

export const Statistics = ({ title, good, neutral, bad, total, positive}) => {
    return (
        <>
            {title && <h2>{title}</h2>}

            <ul>
                <li>Good:{good}</li>
                <li>Neutral:{neutral }</li>
                <li>Bad:{bad}</li>
                <li>Total:{total }</li>
                <li>Positive feedback:{positive }</li>
            </ul>
        </>
    );
};

Statistics.propTypes = {
    title: PropTypes.string
}
