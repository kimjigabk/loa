import React from "react";
import { connect } from "react-redux";
import { totalPercentage } from "./totalPercentage";
import BarChart from "./BarChart";
import { convertToNumber } from "./convertToNumber";

const renderChartAchievement = (achievement) => {
  if (!achievement || achievement.length === 0) return "";
  const [top, bottom] = totalPercentage(achievement);
  const percent = ((top / bottom) * 100).toString().substring(0, 5) + "%";

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: `Homework Done: ${top} out of ${bottom}, ${percent}`,
      },
    },
  };
  const labels = achievement.map((a, index) => {
    return index.toString();
  });
  const dataset = convertToNumber(achievement);

  const data = {
    labels,
    datasets: [
      {
        label: "Homework %",
        data: dataset,
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  return <BarChart options={options} data={data} />;
};

const renderChartGold = (goldEarned) => {
  if (!goldEarned || goldEarned.length === 0) return;
  const total = getTotalGoldEarned(goldEarned);
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: `Gold Earned Total: ${total}G`,
      },
    },
  };
  const labels = goldEarned.map((a, index) => {
    return index.toString();
  });
  const data = {
    labels,
    datasets: [
      {
        label: "Gold Earned",
        data: goldEarned,
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  return <BarChart options={options} data={data} />;
};

const getTotalGoldEarned = (goldEarned) => {
  if (!goldEarned) return;
  const total = goldEarned.reduce((acc, cur) => {
    return acc + cur;
  });
  return total;
};

const Statistics = (props) => {
  return (
    <div>
      <h2>Statistics</h2>
      <div>{renderChartAchievement(props.achievement)}</div>
      <div className="ui section divider"></div>
      <div>{renderChartGold(props.goldEarned)}</div>
    </div>
  );
};

const mapStateToProps = ({ auth }) => {
  // const { achievement, goldEarned } = auth;
  if (!auth) return {};
  return {
    achievement: auth.achievement,
    goldEarned: auth.goldEarned,
  };
};

export default connect(mapStateToProps)(Statistics);
