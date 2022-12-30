import { FormEvent, useEffect, useState } from "react";
import { ActionArgs, LinksFunction } from "@remix-run/node";
import { useLocalStorage } from "~/utils/useLocalStorage";
// import { db } from "~/utils/db.server";
import stylesUrl from "~/styles/index.css";
import { Form, Link, useSubmit } from "@remix-run/react";

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

// export const action = async ({ request }: ActionArgs) => {
//   const form = await request.formData();
//   const robScore = form.get("robScore");
//   const daniScore = form.get("daniScore");

//   const data = {
//     rob: Number(robScore),
//     dani: Number(daniScore),
//   };

//   console.log(data);

//   await db.game.create({ data });

//   return null;
// };

export default function Scoreboard() {
  const [state, setState] = useState<Scores>(initialState);
  const { daniDeals, daniScore, robScore, hands } = state;
  const [daniNewScore, setDaniNewScore] = useState<number | undefined>();
  const [robNewScore, setRobNewScore] = useState<number | undefined>();

  const submit = useSubmit();
  const { data, setInLocalStorage } = useLocalStorage<Scores>("score");

  useEffect(() => {
    if (!data) return;
    setState(data);
  }, [data]);

  const handleUpdate = () => {
    const updatedDaniScore = daniScore + (daniNewScore ?? 0);
    const updatedRobScore = robScore + (robNewScore ?? 0);
    const updatedHands = [...(hands || []), { daniScore: updatedDaniScore, robScore: updatedRobScore }];

    setInLocalStorage({
      daniDeals: !daniDeals,
      daniScore: updatedDaniScore,
      robScore: updatedRobScore,
      hands: updatedHands,
    });

    setDaniNewScore(undefined);
    setRobNewScore(undefined);
  };

  const handleReset = (e: FormEvent<HTMLFormElement>) => {
    const confirmReset = confirm("Are you sure you want to archive this game and reset the scores?");
    if (!confirmReset) return;
    // submit(e.currentTarget);

    setInLocalStorage(initialState);
    setDaniNewScore(undefined);
    setRobNewScore(undefined);
  };

  return (
    <div className="page">
      <h1 className="header">Scoreboard</h1>
      <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }} className="content">
        <div>
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

          <div className="row">
            <input
              type="number"
              name="daniNewScore"
              value={daniNewScore ?? ""}
              onChange={(e) => setDaniNewScore(Number(e.target.value))}
              placeholder="0"
            />
            <input
              type="number"
              name="robNewScore"
              value={robNewScore ?? ""}
              onChange={(e) => setRobNewScore(Number(e.target.value))}
              placeholder="0"
            />
          </div>

          <div className="row">
            <div className="smallRow">
              <button
                className="button"
                onClick={() => {
                  setDaniNewScore(-10);
                }}
              >
                -10
              </button>
              <button
                className="button"
                onClick={() => {
                  setDaniNewScore(100);
                }}
              >
                100
              </button>
            </div>

            <div className="smallRow">
              <button
                className="button"
                onClick={() => {
                  setRobNewScore(-10);
                }}
              >
                -10
              </button>
              <button
                className="button"
                onClick={() => {
                  setRobNewScore(100);
                }}
              >
                100
              </button>
            </div>
          </div>
        </div>

        <button className="button" onClick={handleUpdate}>
          Update
        </button>
      </div>

      <div className="content">
        <Form onSubmit={handleReset}>
          <input type="hidden" name="robScore" value={robScore} />
          <input type="hidden" name="daniScore" value={daniScore} />
          <button className="button" type="submit">
            Archive & Reset
          </button>
        </Form>

        <Link to="/stats">
          <button className="button">Stats</button>
        </Link>
      </div>
    </div>
  );
}
