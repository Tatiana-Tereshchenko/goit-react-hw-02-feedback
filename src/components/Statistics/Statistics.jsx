import { Component } from 'react';
import PropTypes from 'prop-types'; 
import css from './Statistics.module.css';

export class Statistics extends Component {
    render() {
        const { good, neutral, bad, total, positivePercentage } = this.props;

    return (
        <div>
            <p className={css.text}>Good: {good}</p>
            <p className={css.text}>Neutral: {neutral}</p>
            <p className={css.text}>Bad: {bad}</p>
            <p className={css.text}>Total: {total}</p>
            <p className={css.text_Percentage}>Positive feedback: {positivePercentage}%</p>
        </div>
    );
    }
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
};