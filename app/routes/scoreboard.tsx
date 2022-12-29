import { FormEvent, useEffect, useState } from "react";
import { ActionArgs, LinksFunction } from "@remix-run/node";
import { useLocalStorage } from "~/utils/useLocalStorage";
import { db } from "~/utils/db.server";
import stylesUrl from "~/styles/index.css";
import { useSubmit } from "@remix-run/react";

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

export const action = async ({ request }: ActionArgs) => {
  const form = await request.formData();
  const robScore = form.get("robScore");
  const daniScore = form.get("daniScore");

  const data = {
    rob: Number(robScore),
    dani: Number(daniScore),
  };

  console.log(data);

  await db.game.create({ data });

  return null;
};

export default function Scoreboard() {
  const [state, setState] = useState<Scores>(initialState);
  const [daniNewScore, setDaniNewScore] = useState(0);
  const [robNewScore, setRobNewScore] = useState(0);

  const submit = useSubmit();
  const { data, setInLocalStorage } = useLocalStorage<Scores>("score");

  useEffect(() => {
    if (!data) return;
    setState(data);
  }, [data]);

  const handleUpdate = () => {
    const updatedDaniScore = state?.daniScore + (daniNewScore ?? 0);
    const updatedRobScore = state.robScore + (robNewScore ?? 0);
    const updatedHands = [...state.hands, { daniScore: updatedDaniScore, robScore: updatedRobScore }];

    setInLocalStorage({
      daniDeals: !state.daniDeals,
      daniScore: updatedDaniScore,
      robScore: updatedRobScore,
      hands: updatedHands,
    });

    setDaniNewScore(0);
    setRobNewScore(0);
  };

  const handleReset = (e: FormEvent<HTMLFormElement>) => {
    const confirmReset = confirm("Are you sure you want to archive this game and reset the scores?");
    if (!confirmReset) return;

    setInLocalStorage(initialState);
    setDaniNewScore(0);
    setRobNewScore(0);

    submit(e.currentTarget);
  };

  return (
    <div className="page">
      <h1 className="header">Scoreboard</h1>
      <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }} className="content">
        <div>
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

          <div className="row">
            <input
              type="number"
              name="daniNewScore"
              value={daniNewScore}
              onChange={(e) => setDaniNewScore(Number(e.target.value))}
            />
            <input
              type="number"
              name="robNewScore"
              value={robNewScore}
              onChange={(e) => setRobNewScore(Number(e.target.value))}
            />
          </div>

          <div className="row">
            <div className="row">
              <button
                className="button"
                onClick={() => {
                  setDaniNewScore(-10);
                }}
              >
                -10
              </button>
            </div>

            <div className="row">
              <button
                className="button"
                onClick={() => {
                  setRobNewScore(-10);
                }}
              >
                -10
              </button>
            </div>
          </div>
        </div>

        <button className="button" onClick={handleUpdate}>
          Update
        </button>
      </div>

      <form method="post" onSubmit={handleReset}>
        <input type="hidden" name="robScore" value={`${state.robScore}`} />
        <input type="hidden" name="daniScore" value={`${state.daniScore}`} />
        <button className="button" type="submit">
          Archive & Reset
        </button>
      </form>
    </div>
  );
}
