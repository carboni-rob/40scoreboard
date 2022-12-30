import { json, LinksFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { db } from "~/utils/db.server";
import stylesUrl from "~/styles/index.css";
import "chart.js/auto";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export const loader = async () => {
  return json({
    games: await db.game.findMany(),
  });
};

const chartData = {
  datasets: [
    {
      label: "Wins",
      data: [0, 0],
      backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)"],
      hoverOffset: 4,
      cutout: "60%",
      borderWidth: 0,
    },
  ],
};

export default function Stats() {
  const data = useLoaderData<typeof loader>();

  const [pieData, setPieData] = useState(chartData);
  const [daniWins, setDaniWins] = useState(0);
  const [robWins, setRobWins] = useState(0);

  const calculatePercentage = (wins: number) => {
    return Math.round((wins / (daniWins + robWins)) * 100);
  };

  useEffect(() => {
    const daniWins = data.games.reduce((acc, game) => acc + (game.dani < game.rob ? 1 : 0), 0);
    const robWins = data.games.reduce((acc, game) => acc + (game.dani > game.rob ? 1 : 0), 0);
    const newDataSet = { ...pieData.datasets[0], data: [daniWins, robWins] };
    const updatedChartData = { ...pieData, datasets: [newDataSet] };

    setPieData(updatedChartData);
    setDaniWins(daniWins);
    setRobWins(robWins);
  }, [data.games]);

  return (
    <div className="page">
      <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }} className="content">
        <h1 className="header">Stats</h1>
        <div className="chartContainer">
          <h1>Wins:</h1>
          <Doughnut data={pieData} />
          <div className="row">
            <h1 className="robColor">R0b</h1>
            <h1 className="daniColor">Dani</h1>
          </div>
          <div className="row">
            <h1 className="robColor">{robWins}</h1>
            <h1 className="daniColor">{daniWins}</h1>
          </div>
          <div className="row">
            <h1 className="robColor">({calculatePercentage(robWins)}%)</h1>
            <h1 className="daniColor">({calculatePercentage(daniWins)}%)</h1>
          </div>
        </div>
      </div>
      <div className="content">
        <Link to="/scoreboard">
          <button className="button">Scoreboard</button>
        </Link>
      </div>
    </div>
  );
}
