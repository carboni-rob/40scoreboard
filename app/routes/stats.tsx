import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { db } from "~/utils/db.server";

export const loader = async () => {
  return json({
    games: await db.game.findMany(),
  });
};

export default function Stats() {
  const data = useLoaderData<typeof loader>();

  return (
    <div className="container">
      <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }} className="content">
        <h1 className="header">Stats</h1>
        <ul>
          {data.games.map((game) => (
            <>
              <li key={`${game.id}-dani`}>Dani: {game.dani}</li>
              <li key={`${game.id}-rob`}>Rob: {game.rob}</li>
            </>
          ))}
        </ul>
      </div>
    </div>
  );
}
