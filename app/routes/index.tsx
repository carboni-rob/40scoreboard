import type { LinksFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

import stylesUrl from "~/styles/index.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export default function IndexRoute() {
  return (
    <div className="container">
      <div className="content">
        <Link to="scoreboard">
          <button className="button">Scoreboard</button>
        </Link>
        <Link to="stats">
          <button className="button">Stats</button>
        </Link>
      </div>
    </div>
  );
}
