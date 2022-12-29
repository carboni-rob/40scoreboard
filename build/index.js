var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_stream = require("stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
        fileName: "app/entry.server.tsx",
        lineNumber: 41,
        columnNumber: 7
      }, this),
      {
        onAllReady() {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          didError = !0, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
        fileName: "app/entry.server.tsx",
        lineNumber: 82,
        columnNumber: 7
      }, this),
      {
        onShellReady() {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(err) {
          reject(err);
        },
        onError(error) {
          didError = !0, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react2 = require("@remix-run/react");

// app/styles/global.css
var global_default = "/build/_assets/global-X42EWOC3.css";

// app/root.tsx
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), links = () => [
  {
    rel: "stylesheet",
    href: global_default
  }
], meta = () => ({
  charset: "utf-8",
  title: "Scoreboard",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 24,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 25,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 23,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 27,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 22,
    columnNumber: 5
  }, this);
}

// app/routes/scoreboard.tsx
var scoreboard_exports = {};
__export(scoreboard_exports, {
  action: () => action,
  default: () => Scoreboard,
  links: () => links2
});
var import_react4 = require("react");

// app/utils/useLocalStorage.ts
var import_react3 = require("react");
function useLocalStorage(key) {
  if (typeof window > "u")
    return { data: null, setInLocalStorage: () => {
    } };
  let [data, setState] = (0, import_react3.useState)(JSON.parse(localStorage.getItem(key) ?? ""));
  return { data, setInLocalStorage: (nextState) => {
    localStorage.setItem(key, JSON.stringify(nextState)), setState(nextState);
  } };
}

// app/utils/db.server.ts
var import_client = require("@prisma/client"), db;
global.__db || (global.__db = new import_client.PrismaClient()), db = global.__db;

// app/styles/index.css
var styles_default = "/build/_assets/index-GJCUZLPB.css";

// app/routes/scoreboard.tsx
var import_react5 = require("@remix-run/react"), import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), initialState = {
  daniDeals: !0,
  daniScore: 0,
  robScore: 0,
  hands: [{ daniScore: 0, robScore: 0 }]
}, links2 = () => [{ rel: "stylesheet", href: styles_default }], action = async ({ request }) => {
  let form = await request.formData(), robScore = form.get("robScore"), daniScore = form.get("daniScore"), data = {
    rob: Number(robScore),
    dani: Number(daniScore)
  };
  return console.log(data), await db.game.create({ data }), null;
};
function Scoreboard() {
  let [state, setState] = (0, import_react4.useState)(initialState), [daniNewScore, setDaniNewScore] = (0, import_react4.useState)(0), [robNewScore, setRobNewScore] = (0, import_react4.useState)(0), submit = (0, import_react5.useSubmit)(), { data, setInLocalStorage } = useLocalStorage("score");
  (0, import_react4.useEffect)(() => {
    !data || setState(data);
  }, [data]);
  let handleUpdate = () => {
    let updatedDaniScore = (state == null ? void 0 : state.daniScore) + (daniNewScore ?? 0), updatedRobScore = state.robScore + (robNewScore ?? 0), updatedHands = [...state.hands, { daniScore: updatedDaniScore, robScore: updatedRobScore }];
    setInLocalStorage({
      daniDeals: !state.daniDeals,
      daniScore: updatedDaniScore,
      robScore: updatedRobScore,
      hands: updatedHands
    }), setDaniNewScore(0), setRobNewScore(0);
  }, handleReset = (e) => {
    !confirm("Are you sure you want to archive this game and reset the scores?") || (setInLocalStorage(initialState), setDaniNewScore(0), setRobNewScore(0), submit(e.currentTarget));
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "page", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { className: "header", children: "Scoreboard" }, void 0, !1, {
      fileName: "app/routes/scoreboard.tsx",
      lineNumber: 90,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }, className: "content", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "row", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { className: state.daniDeals ? "" : "hidden", children: "\u{1F0CF}" }, void 0, !1, {
            fileName: "app/routes/scoreboard.tsx",
            lineNumber: 94,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { className: state.daniDeals ? "hidden" : "", children: "\u{1F0CF}" }, void 0, !1, {
            fileName: "app/routes/scoreboard.tsx",
            lineNumber: 95,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/scoreboard.tsx",
          lineNumber: 93,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "row", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { children: "Dani" }, void 0, !1, {
            fileName: "app/routes/scoreboard.tsx",
            lineNumber: 99,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { children: "Rob" }, void 0, !1, {
            fileName: "app/routes/scoreboard.tsx",
            lineNumber: 100,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/scoreboard.tsx",
          lineNumber: 98,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "row", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { children: [
            state.daniScore,
            " "
          ] }, void 0, !0, {
            fileName: "app/routes/scoreboard.tsx",
            lineNumber: 104,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { children: [
            state.robScore,
            " "
          ] }, void 0, !0, {
            fileName: "app/routes/scoreboard.tsx",
            lineNumber: 105,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/scoreboard.tsx",
          lineNumber: 103,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "row", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
            "input",
            {
              type: "number",
              name: "daniNewScore",
              value: daniNewScore,
              onChange: (e) => setDaniNewScore(Number(e.target.value))
            },
            void 0,
            !1,
            {
              fileName: "app/routes/scoreboard.tsx",
              lineNumber: 109,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
            "input",
            {
              type: "number",
              name: "robNewScore",
              value: robNewScore,
              onChange: (e) => setRobNewScore(Number(e.target.value))
            },
            void 0,
            !1,
            {
              fileName: "app/routes/scoreboard.tsx",
              lineNumber: 115,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/scoreboard.tsx",
          lineNumber: 108,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "row", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "row", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
            "button",
            {
              className: "button",
              onClick: () => {
                setDaniNewScore(-10);
              },
              children: "-10"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/scoreboard.tsx",
              lineNumber: 125,
              columnNumber: 15
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/scoreboard.tsx",
            lineNumber: 124,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "row", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
            "button",
            {
              className: "button",
              onClick: () => {
                setRobNewScore(-10);
              },
              children: "-10"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/scoreboard.tsx",
              lineNumber: 136,
              columnNumber: 15
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/scoreboard.tsx",
            lineNumber: 135,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/scoreboard.tsx",
          lineNumber: 123,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/scoreboard.tsx",
        lineNumber: 92,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { className: "button", onClick: handleUpdate, children: "Update" }, void 0, !1, {
        fileName: "app/routes/scoreboard.tsx",
        lineNumber: 148,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/scoreboard.tsx",
      lineNumber: 91,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("form", { method: "post", onSubmit: handleReset, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("input", { type: "hidden", name: "robScore", value: `${state.robScore}` }, void 0, !1, {
        fileName: "app/routes/scoreboard.tsx",
        lineNumber: 154,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("input", { type: "hidden", name: "daniScore", value: `${state.daniScore}` }, void 0, !1, {
        fileName: "app/routes/scoreboard.tsx",
        lineNumber: 155,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { className: "button", type: "submit", children: "Archive & Reset" }, void 0, !1, {
        fileName: "app/routes/scoreboard.tsx",
        lineNumber: 156,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/scoreboard.tsx",
      lineNumber: 153,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/scoreboard.tsx",
    lineNumber: 89,
    columnNumber: 5
  }, this);
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => IndexRoute,
  links: () => links3
});
var import_react6 = require("@remix-run/react");
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime"), links3 = () => [{ rel: "stylesheet", href: styles_default }];
function IndexRoute() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "container", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "content", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react6.Link, { to: "scoreboard", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("button", { className: "button", children: "Scoreboard" }, void 0, !1, {
    fileName: "app/routes/index.tsx",
    lineNumber: 15,
    columnNumber: 11
  }, this) }, void 0, !1, {
    fileName: "app/routes/index.tsx",
    lineNumber: 14,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/index.tsx",
    lineNumber: 13,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/index.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

// app/routes/stats.tsx
var stats_exports = {};
__export(stats_exports, {
  default: () => Stats,
  loader: () => loader
});
var import_node2 = require("@remix-run/node"), import_react7 = require("@remix-run/react");
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime"), loader = async () => (0, import_node2.json)({
  games: await db.game.findMany()
});
function Stats() {
  let data = (0, import_react7.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "container", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }, className: "content", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h1", { className: "header", children: "Stats" }, void 0, !1, {
      fileName: "app/routes/stats.tsx",
      lineNumber: 18,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("ul", { children: data.games.map((game) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_jsx_dev_runtime5.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: [
        "Dani: ",
        game.dani
      ] }, `${game.id}-dani`, !0, {
        fileName: "app/routes/stats.tsx",
        lineNumber: 22,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: [
        "Rob: ",
        game.rob
      ] }, `${game.id}-rob`, !0, {
        fileName: "app/routes/stats.tsx",
        lineNumber: 23,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/stats.tsx",
      lineNumber: 21,
      columnNumber: 13
    }, this)) }, void 0, !1, {
      fileName: "app/routes/stats.tsx",
      lineNumber: 19,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/stats.tsx",
    lineNumber: 17,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/stats.tsx",
    lineNumber: 16,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "28deef53", entry: { module: "/build/entry.client-YET7DG5C.js", imports: ["/build/_shared/chunk-2IH6UYMW.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-L4NJBHMO.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-VFE3MJK2.js", imports: ["/build/_shared/chunk-XQJCTGFB.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/scoreboard": { id: "routes/scoreboard", parentId: "root", path: "scoreboard", index: void 0, caseSensitive: void 0, module: "/build/routes/scoreboard-ZVZVZOBI.js", imports: ["/build/_shared/chunk-XQJCTGFB.js", "/build/_shared/chunk-JYGKOKIZ.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/stats": { id: "routes/stats", parentId: "root", path: "stats", index: void 0, caseSensitive: void 0, module: "/build/routes/stats-SZUH3JG2.js", imports: ["/build/_shared/chunk-JYGKOKIZ.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-28DEEF53.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { v2_meta: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/scoreboard": {
    id: "routes/scoreboard",
    parentId: "root",
    path: "scoreboard",
    index: void 0,
    caseSensitive: void 0,
    module: scoreboard_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/stats": {
    id: "routes/stats",
    parentId: "root",
    path: "stats",
    index: void 0,
    caseSensitive: void 0,
    module: stats_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
