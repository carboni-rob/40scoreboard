import { useEffect, useRef, useState } from "react";
import { LinksFunction } from "@remix-run/node";
import { useLocalStorage } from "~/utils/useLocalStorage";

import stylesUrl from "~/styles/index.css";

type Score = {
  daniScore: number;
  robScore: number;
};

type Scores = {
  daniDeals: boolean;
  daniScore: number;
  robScore: number;
  hands: Score[];
};

const initialState: Scores = {
  daniDeals: true,
  daniScore: 0,
  robScore: 0,
  hands: [{ daniScore: 0, robScore: 0 }],
};

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export default function Scoreboard() {
  const [state, setState] = useState<Scores>(initialState);
  const [daniNewScore, setDaniNewScore] = useState(0);
  const [robNewScore, setRobNewScore] = useState(0);

  const { data, setInLocalStorage } = useLocalStorage<Scores>("score");

  const formRef = useRef<HTMLFormElement>(null);
  const daniRef = useRef<HTMLInputElement>(null);
  const robRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!data) return;
    setState(data);
  }, [data]);

  const handleUpdate = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const updatedDaniScore = state?.daniScore + (daniNewScore ?? 0);
    const updatedRobScore = state.robScore + (robNewScore ?? 0);
    const updatedHands = [...state.hands, { daniScore: updatedDaniScore, robScore: updatedRobScore }];

    setInLocalStorage({
      daniDeals: !state.daniDeals,
      daniScore: updatedDaniScore,
      robScore: updatedDaniScore,
      hands: updatedHands,
    });

    setDaniNewScore(0);
    setRobNewScore(0);
    formRef.current?.reset();
  };

  const handleReset = () => {
    const confirmReset = confirm("Are you sure you want to archive this game and reset the scores?");
    if (!confirmReset) return;

    setInLocalStorage(initialState);
    setDaniNewScore(0);
    setRobNewScore(0);
    formRef.current?.reset();
  };

  return (
    <div className="container">
      <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }} className="content">
        <h1 className="header">Scoreboard</h1>

        <div className="row">
          <h1 className={state.daniDeals ? "" : "hidden"}>🃏</h1>
          <h1 className={state.daniDeals ? "hidden" : ""}>🃏</h1>
        </div>

        <div className="row">
          <h1>Dani</h1>
          <h1>Rob</h1>
        </div>

        <div className="row">
          <h1>{state.daniScore} </h1>
          <h1>{state.robScore} </h1>
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
