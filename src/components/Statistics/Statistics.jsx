import {
  StatisticsList,
  StatisticsItem,
  StatisticsInfoText,
} from './Statistics.styled';
import PropTypes from 'prop-types';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <StatisticsList>
      <StatisticsItem>
        <StatisticsInfoText>{`Good:${good}`}</StatisticsInfoText>
      </StatisticsItem>
      <StatisticsItem>
        <StatisticsInfoText>{`Neutral:${neutral}`}</StatisticsInfoText>
      </StatisticsItem>
      <StatisticsItem>
        <StatisticsInfoText>{`Bad:${bad}`}</StatisticsInfoText>
      </StatisticsItem>
      <StatisticsItem>
        <StatisticsInfoText>{`Total:${total}`}</StatisticsInfoText>
      </StatisticsItem>
      <StatisticsItem>
        <StatisticsInfoText>{`Positive feedback:${positivePercentage}%`}</StatisticsInfoText>
      </StatisticsItem>
    </StatisticsList>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
