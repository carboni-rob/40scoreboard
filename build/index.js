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
var styles_default = "/build/_assets/index-JOA5AYKH.css";

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
  return await db.game.create({ data }), null;
};
function Scoreboard() {
  let [state, setState] = (0, import_react4.useState)(initialState), [daniNewScore, setDaniNewScore] = (0, import_react4.useState)(0), [robNewScore, setRobNewScore] = (0, import_react4.useState)(0), submit = (0, import_react5.useSubmit)(), { data, setInLocalStorage } = useLocalStorage("score"), formRef = (0, import_react4.useRef)(null), daniRef = (0, import_react4.useRef)(null), robRef = (0, import_react4.useRef)(null);
  (0, import_react4.useEffect)(() => {
    !data || setState(data);
  }, [data]);
  let handleUpdate = (e) => {
    var _a;
    e.preventDefault();
    let updatedDaniScore = (state == null ? void 0 : state.daniScore) + (daniNewScore ?? 0), updatedRobScore = state.robScore + (robNewScore ?? 0), updatedHands = [...state.hands, { daniScore: updatedDaniScore, robScore: updatedRobScore }];
    setInLocalStorage({
      daniDeals: !state.daniDeals,
      daniScore: updatedDaniScore,
      robScore: updatedDaniScore,
      hands: updatedHands
    }), setDaniNewScore(0), setRobNewScore(0), (_a = formRef.current) == null || _a.reset();
  }, handleReset = (e) => {
    var _a;
    !confirm("Are you sure you want to archive this game and reset the scores?") || (setInLocalStorage(initialState), setDaniNewScore(0), setRobNewScore(0), (_a = formRef.current) == null || _a.reset(), submit(e.currentTarget));
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "container", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }, className: "content", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { className: "header", children: "Scoreboard" }, void 0, !1, {
      fileName: "app/routes/scoreboard.tsx",
      lineNumber: 96,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "row", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { className: state.daniDeals ? "" : "hidden", children: "\u{1F0CF}" }, void 0, !1, {
        fileName: "app/routes/scoreboard.tsx",
        lineNumber: 99,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { className: state.daniDeals ? "hidden" : "", children: "\u{1F0CF}" }, void 0, !1, {
        fileName: "app/routes/scoreboard.tsx",
        lineNumber: 100,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/scoreboard.tsx",
      lineNumber: 98,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "row", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { children: "Dani" }, void 0, !1, {
        fileName: "app/routes/scoreboard.tsx",
        lineNumber: 104,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { children: "Rob" }, void 0, !1, {
        fileName: "app/routes/scoreboard.tsx",
        lineNumber: 105,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/scoreboard.tsx",
      lineNumber: 103,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "row", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { children: [
        state.daniScore,
        " "
      ] }, void 0, !0, {
        fileName: "app/routes/scoreboard.tsx",
        lineNumber: 109,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { children: [
        state.robScore,
        " "
      ] }, void 0, !0, {
        fileName: "app/routes/scoreboard.tsx",
        lineNumber: 110,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/scoreboard.tsx",
      lineNumber: 108,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("form", { ref: formRef, method: "post", onSubmit: handleReset, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "row", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
          "input",
          {
            ref: daniRef,
            type: "number",
            name: "daniNewScore",
            onChange: (e) => setDaniNewScore(Number(e.target.value)),
            placeholder: `${daniNewScore}`
          },
          void 0,
          !1,
          {
            fileName: "app/routes/scoreboard.tsx",
            lineNumber: 115,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
          "input",
          {
            ref: robRef,
            type: "number",
            name: "robNewScore",
            onChange: (e) => setRobNewScore(Number(e.target.value)),
            placeholder: "0"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/scoreboard.tsx",
            lineNumber: 122,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/scoreboard.tsx",
        lineNumber: 114,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "row", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "row", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
          "button",
          {
            className: "button",
            onClick: (e) => {
              var _a, _b;
              e.preventDefault(), (_a = daniRef.current) == null || _a.stepDown(10), setDaniNewScore(Number((_b = daniRef.current) == null ? void 0 : _b.value));
            },
            children: "-10"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/scoreboard.tsx",
            lineNumber: 133,
            columnNumber: 15
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/scoreboard.tsx",
          lineNumber: 132,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "row", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
          "button",
          {
            className: "button",
            onClick: (e) => {
              var _a, _b;
              e.preventDefault(), (_a = robRef.current) == null || _a.stepDown(10), setRobNewScore(Number((_b = robRef.current) == null ? void 0 : _b.value));
            },
            children: "-10"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/scoreboard.tsx",
            lineNumber: 145,
            columnNumber: 15
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/scoreboard.tsx",
          lineNumber: 144,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/scoreboard.tsx",
        lineNumber: 131,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("input", { type: "hidden", name: "robScore", value: `${state.robScore}` }, void 0, !1, {
        fileName: "app/routes/scoreboard.tsx",
        lineNumber: 158,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("input", { type: "hidden", name: "daniScore", value: `${state.daniScore}` }, void 0, !1, {
        fileName: "app/routes/scoreboard.tsx",
        lineNumber: 159,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { className: "button", onClick: handleUpdate, children: "Update" }, void 0, !1, {
        fileName: "app/routes/scoreboard.tsx",
        lineNumber: 161,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { className: "button", type: "submit", children: "Archive & Reset" }, void 0, !1, {
        fileName: "app/routes/scoreboard.tsx",
        lineNumber: 165,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/scoreboard.tsx",
      lineNumber: 113,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/scoreboard.tsx",
    lineNumber: 95,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/scoreboard.tsx",
    lineNumber: 94,
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

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "83de2665", entry: { module: "/build/entry.client-QVWNEAIE.js", imports: ["/build/_shared/chunk-IRSGWHCZ.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-7PIIOKKP.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-OTKJNQSK.js", imports: ["/build/_shared/chunk-5EWEWMZA.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/scoreboard": { id: "routes/scoreboard", parentId: "root", path: "scoreboard", index: void 0, caseSensitive: void 0, module: "/build/routes/scoreboard-2AT6PPEN.js", imports: ["/build/_shared/chunk-5EWEWMZA.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-83DE2665.js" };

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
