import { useRef, useState } from "react";
import { LinksFunction } from "@remix-run/node";

import stylesUrl from "~/styles/index.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export default function Index() {
  const [daniScore, setDaniScore] = useState(0);
  const [daniNewScore, setDaniNewScore] = useState<number | undefined>();
  const [robScore, setRobScore] = useState(0);
  const [robNewScore, setRobNewScore] = useState<number | undefined>();

  const formRef = useRef<HTMLFormElement>(null);

  const handleUpdate = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setDaniScore(daniScore + (daniNewScore ?? 0));
    setRobScore(robScore + (robNewScore ?? 0));
    setDaniNewScore(undefined);
    setRobNewScore(undefined);
    formRef.current?.reset();
  };

  const handleReset = () => {
    const confirmReset = confirm("Are you sure you want to reset the scores?");
    if (!confirmReset) return;
    setDaniScore(0);
    setRobScore(0);
    setDaniNewScore(undefined);
    setRobNewScore(undefined);
    formRef.current?.reset();
  };

  return (
    <div className="container">
      <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }} className="content">
        <h1 className="header">🃏 Scoreboard 🃏</h1>
        <div className="row">
          <h1>Dani</h1>
          <h1>Rob</h1>
        </div>
        <div className="row">
          <h1>{daniScore} </h1>
          <h1>{robScore} </h1>
        </div>
        <form method="post" ref={formRef}>
          <div className="row">
            <input
              type="number"
              name="daniNewScore"
              onChange={(e) => setDaniNewScore(Number(e.target.value))}
              placeholder="0"
            />
            <input
              type="number"
              name="robNewScore"
              onChange={(e) => setRobNewScore(Number(e.target.value))}
              placeholder="0"
            />
          </div>
          <button className="button" type="submit" onClick={handleUpdate}>
            Update
          </button>
        </form>
      </div>
      <button className="button" type="submit" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}
