import { useEffect, useRef, useState } from "react";
import { LinksFunction } from "@remix-run/node";

import stylesUrl from "~/styles/index.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export default function Index() {
  const [daniScore, setDaniScore] = useState(0);
  const [daniNewScore, setDaniNewScore] = useState(0);
  const [robScore, setRobScore] = useState(0);
  const [robNewScore, setRobNewScore] = useState(0);
  const [daniDeals, setDaniDeals] = useState(true);

  const formRef = useRef<HTMLFormElement>(null);
  const daniRef = useRef<HTMLInputElement>(null);
  const robRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    try {
      const score = JSON.parse(localStorage.getItem("score") ?? "{}");
      setDaniScore(score.daniScore ?? 0);
      setRobScore(score.robScore ?? 0);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const handleUpdate = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      localStorage.setItem(
        "score",
        JSON.stringify({
          daniScore: daniScore + (daniNewScore ?? 0),
          robScore: robScore + (robNewScore ?? 0),
        })
      );
    } catch (error) {
      console.error(error);
      return;
    }
    setDaniScore(daniScore + (daniNewScore ?? 0));
    setRobScore(robScore + (robNewScore ?? 0));
    setDaniNewScore(0);
    setRobNewScore(0);
    setDaniDeals(!daniDeals);
    formRef.current?.reset();
  };

  const handleReset = () => {
    const confirmReset = confirm("Are you sure you want to reset the scores?");
    if (!confirmReset) return;
    try {
      localStorage.setItem("score", JSON.stringify({ daniScore: 0, robScore: 0 }));
    } catch (error) {
      console.error(error);
      return;
    }

    setDaniScore(0);
    setRobScore(0);
    setDaniNewScore(0);
    setRobNewScore(0);
    formRef.current?.reset();
  };

  return (
    <div className="container">
      <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }} className="content">
        <h1 className="header">Scoreboard</h1>

        <div className="row">
          <h1 className={daniDeals ? "" : "hidden"}>🃏</h1>
          <h1 className={daniDeals ? "hidden" : ""}>🃏</h1>
        </div>

        <div className="row">
          <h1>Dani</h1>
          <h1>Rob</h1>
        </div>

        <div className="row">
          <h1>{daniScore} </h1>
          <h1>{robScore} </h1>
        </div>

        <form ref={formRef}>
          <div className="row">
            <input
              ref={daniRef}
              type="number"
              name="daniNewScore"
              onChange={(e) => setDaniNewScore(Number(e.target.value))}
              placeholder={`${daniNewScore}`}
            />
            <input
              ref={robRef}
              type="number"
              name="robNewScore"
              onChange={(e) => setRobNewScore(Number(e.target.value))}
              placeholder="0"
            />
          </div>

          <div className="row">
            <div className="row">
              <button
                className="button"
                onClick={(e) => {
                  e.preventDefault();
                  daniRef.current?.stepDown(10);
                  setDaniNewScore(Number(daniRef.current?.value));
                }}
              >
                -10
              </button>
            </div>
            <div className="row">
              <button
                className="button"
                onClick={(e) => {
                  e.preventDefault();
                  robRef.current?.stepDown(10);
                  setRobNewScore(Number(robRef.current?.value));
                }}
              >
                -10
              </button>
            </div>
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
