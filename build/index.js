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
var import_stream = require("stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_runtime = require("react/jsx-runtime"), ABORT_DELAY = 5e3;
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.RemixServer, { context: remixContext, url: request.url }),
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.RemixServer, { context: remixContext, url: request.url }),
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
var global_default = "/build/_assets/global-P7URZDJP.css";

// app/root.tsx
var import_jsx_runtime2 = require("react/jsx-runtime"), links = () => [
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
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Meta, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Links, {})
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Outlet, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.ScrollRestoration, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Scripts, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.LiveReload, {})
    ] })
  ] });
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  links: () => links2
});
var import_react3 = require("react");

// app/styles/index.css
var styles_default = "/build/_assets/index-NAG2CEC7.css";

// app/routes/index.tsx
var import_jsx_runtime3 = require("react/jsx-runtime"), links2 = () => [{ rel: "stylesheet", href: styles_default }];
function Index() {
  let [daniScore, setDaniScore] = (0, import_react3.useState)(0), [daniNewScore, setDaniNewScore] = (0, import_react3.useState)(0), [robScore, setRobScore] = (0, import_react3.useState)(0), [robNewScore, setRobNewScore] = (0, import_react3.useState)(0), formRef = (0, import_react3.useRef)(null), daniRef = (0, import_react3.useRef)(null), robRef = (0, import_react3.useRef)(null);
  (0, import_react3.useEffect)(() => {
    try {
      let score = JSON.parse(localStorage.getItem("score") ?? "{}");
      setDaniScore(score.daniScore ?? 0), setRobScore(score.robScore ?? 0);
    } catch (error) {
      console.error(error);
    }
  }, []);
  let handleUpdate = (e) => {
    var _a;
    e.preventDefault();
    try {
      localStorage.setItem(
        "score",
        JSON.stringify({
          daniScore: daniScore + (daniNewScore ?? 0),
          robScore: robScore + (robNewScore ?? 0)
        })
      );
    } catch (error) {
      console.error(error);
      return;
    }
    setDaniScore(daniScore + (daniNewScore ?? 0)), setRobScore(robScore + (robNewScore ?? 0)), setDaniNewScore(0), setRobNewScore(0), (_a = formRef.current) == null || _a.reset();
  }, handleReset = () => {
    var _a;
    if (!!confirm("Are you sure you want to reset the scores?")) {
      try {
        localStorage.setItem("score", JSON.stringify({ daniScore: 0, robScore: 0 }));
      } catch (error) {
        console.error(error);
        return;
      }
      setDaniScore(0), setRobScore(0), setDaniNewScore(0), setRobNewScore(0), (_a = formRef.current) == null || _a.reset();
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "container", children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }, className: "content", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h1", { className: "header", children: "\u{1F0CF} Scoreboard \u{1F0CF}" }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "row", children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h1", { children: "Dani" }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h1", { children: "Rob" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "row", children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("h1", { children: [
          daniScore,
          " "
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("h1", { children: [
          robScore,
          " "
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("form", { ref: formRef, children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "row", children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            "input",
            {
              ref: daniRef,
              type: "number",
              name: "daniNewScore",
              onChange: (e) => setDaniNewScore(Number(e.target.value)),
              placeholder: `${daniNewScore}`
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            "input",
            {
              ref: robRef,
              type: "number",
              name: "robNewScore",
              onChange: (e) => setRobNewScore(Number(e.target.value)),
              placeholder: "0"
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "row", children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            "button",
            {
              className: "button",
              onClick: (e) => {
                var _a, _b;
                e.preventDefault(), (_a = daniRef.current) == null || _a.stepDown(10), setDaniNewScore(Number((_b = daniRef.current) == null ? void 0 : _b.value));
              },
              children: "-10"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            "button",
            {
              className: "button",
              onClick: (e) => {
                var _a, _b;
                e.preventDefault(), (_a = robRef.current) == null || _a.stepDown(10), setRobNewScore(Number((_b = robRef.current) == null ? void 0 : _b.value));
              },
              children: "-10"
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("button", { className: "button", type: "submit", onClick: handleUpdate, children: "Update" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("button", { className: "button", type: "submit", onClick: handleReset, children: "Reset" })
  ] });
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "af47e301", entry: { module: "/build/entry.client-KPOOBG5E.js", imports: ["/build/_shared/chunk-3LPGR5PY.js", "/build/_shared/chunk-JKCUYFIB.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-PTLQPDWR.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-LZUN7UOX.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-AF47E301.js" };

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
