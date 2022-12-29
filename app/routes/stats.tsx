import { json, LinksFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
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
  labels: ["Dani", "Rob"],
  datasets: [
    {
      label: "My First Dataset",
      data: [0, 0],
      backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)"],
      hoverOffset: 4,
    },
  ],
};

export default function Stats() {
  const data = useLoaderData<typeof loader>();

  const [pieData, setPieData] = useState(chartData);

  useEffect(() => {
    const daniWins = data.games.reduce((acc, game) => acc + (game.dani > game.rob ? 1 : 0), 0);
    const robWins = data.games.reduce((acc, game) => acc + (game.dani < game.rob ? 1 : 0), 0);
    const newDataSet = { ...pieData.datasets[0], data: [daniWins, robWins] };
    const updatedChartData = { ...pieData, datasets: [newDataSet] };

    setPieData(updatedChartData);
  }, [data.games]);

  return (
    <div className="page">
      <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }} className="content">
        <h1 className="header">Stats</h1>
        <Doughnut data={pieData} />
      </div>
    </div>
  );
}
