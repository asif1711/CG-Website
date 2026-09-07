function C1(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var Xu = { exports: {} }, Jo = {};
/**
 * @license React
 * react-jsx-dev-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Dh;
function k1() {
  if (Dh) return Jo;
  Dh = 1;
  var i = Symbol.for("react.fragment");
  return Jo.Fragment = i, Jo.jsxDEV = void 0, Jo;
}
var Eh;
function B1() {
  return Eh || (Eh = 1, Xu.exports = k1()), Xu.exports;
}
var p = B1(), Fu = { exports: {} }, fe = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wh;
function A1() {
  if (wh) return fe;
  wh = 1;
  var i = Symbol.for("react.transitional.element"), s = Symbol.for("react.portal"), l = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), m = Symbol.for("react.consumer"), f = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), v = Symbol.for("react.suspense"), g = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), y = Symbol.for("react.activity"), N = Symbol.iterator;
  function V(D) {
    return D === null || typeof D != "object" ? null : (D = N && D[N] || D["@@iterator"], typeof D == "function" ? D : null);
  }
  var T = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, z = Object.assign, A = {};
  function _(D, R, Z) {
    this.props = D, this.context = R, this.refs = A, this.updater = Z || T;
  }
  _.prototype.isReactComponent = {}, _.prototype.setState = function(D, R) {
    if (typeof D != "object" && typeof D != "function" && D != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, D, R, "setState");
  }, _.prototype.forceUpdate = function(D) {
    this.updater.enqueueForceUpdate(this, D, "forceUpdate");
  };
  function G() {
  }
  G.prototype = _.prototype;
  function L(D, R, Z) {
    this.props = D, this.context = R, this.refs = A, this.updater = Z || T;
  }
  var H = L.prototype = new G();
  H.constructor = L, z(H, _.prototype), H.isPureReactComponent = !0;
  var X = Array.isArray;
  function ee() {
  }
  var F = { H: null, A: null, T: null, S: null }, Y = Object.prototype.hasOwnProperty;
  function J(D, R, Z) {
    var W = Z.ref;
    return {
      $$typeof: i,
      type: D,
      key: R,
      ref: W !== void 0 ? W : null,
      props: Z
    };
  }
  function te(D, R) {
    return J(D.type, R, D.props);
  }
  function K(D) {
    return typeof D == "object" && D !== null && D.$$typeof === i;
  }
  function I(D) {
    var R = { "=": "=0", ":": "=2" };
    return "$" + D.replace(/[=:]/g, function(Z) {
      return R[Z];
    });
  }
  var Se = /\/+/g;
  function de(D, R) {
    return typeof D == "object" && D !== null && D.key != null ? I("" + D.key) : R.toString(36);
  }
  function me(D) {
    switch (D.status) {
      case "fulfilled":
        return D.value;
      case "rejected":
        throw D.reason;
      default:
        switch (typeof D.status == "string" ? D.then(ee, ee) : (D.status = "pending", D.then(
          function(R) {
            D.status === "pending" && (D.status = "fulfilled", D.value = R);
          },
          function(R) {
            D.status === "pending" && (D.status = "rejected", D.reason = R);
          }
        )), D.status) {
          case "fulfilled":
            return D.value;
          case "rejected":
            throw D.reason;
        }
    }
    throw D;
  }
  function j(D, R, Z, W, ue) {
    var ce = typeof D;
    (ce === "undefined" || ce === "boolean") && (D = null);
    var Ve = !1;
    if (D === null) Ve = !0;
    else
      switch (ce) {
        case "bigint":
        case "string":
        case "number":
          Ve = !0;
          break;
        case "object":
          switch (D.$$typeof) {
            case i:
            case s:
              Ve = !0;
              break;
            case x:
              return Ve = D._init, j(
                Ve(D._payload),
                R,
                Z,
                W,
                ue
              );
          }
      }
    if (Ve)
      return ue = ue(D), Ve = W === "" ? "." + de(D, 0) : W, X(ue) ? (Z = "", Ve != null && (Z = Ve.replace(Se, "$&/") + "/"), j(ue, R, Z, "", function(Na) {
        return Na;
      })) : ue != null && (K(ue) && (ue = te(
        ue,
        Z + (ue.key == null || D && D.key === ue.key ? "" : ("" + ue.key).replace(
          Se,
          "$&/"
        ) + "/") + Ve
      )), R.push(ue)), 1;
    Ve = 0;
    var rt = W === "" ? "." : W + ":";
    if (X(D))
      for (var qe = 0; qe < D.length; qe++)
        W = D[qe], ce = rt + de(W, qe), Ve += j(
          W,
          R,
          Z,
          ce,
          ue
        );
    else if (qe = V(D), typeof qe == "function")
      for (D = qe.call(D), qe = 0; !(W = D.next()).done; )
        W = W.value, ce = rt + de(W, qe++), Ve += j(
          W,
          R,
          Z,
          ce,
          ue
        );
    else if (ce === "object") {
      if (typeof D.then == "function")
        return j(
          me(D),
          R,
          Z,
          W,
          ue
        );
      throw R = String(D), Error(
        "Objects are not valid as a React child (found: " + (R === "[object Object]" ? "object with keys {" + Object.keys(D).join(", ") + "}" : R) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return Ve;
  }
  function $(D, R, Z) {
    if (D == null) return D;
    var W = [], ue = 0;
    return j(D, W, "", "", function(ce) {
      return R.call(Z, ce, ue++);
    }), W;
  }
  function Q(D) {
    if (D._status === -1) {
      var R = D._result;
      R = R(), R.then(
        function(Z) {
          (D._status === 0 || D._status === -1) && (D._status = 1, D._result = Z);
        },
        function(Z) {
          (D._status === 0 || D._status === -1) && (D._status = 2, D._result = Z);
        }
      ), D._status === -1 && (D._status = 0, D._result = R);
    }
    if (D._status === 1) return D._result.default;
    throw D._result;
  }
  var ne = typeof reportError == "function" ? reportError : function(D) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var R = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof D == "object" && D !== null && typeof D.message == "string" ? String(D.message) : String(D),
        error: D
      });
      if (!window.dispatchEvent(R)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", D);
      return;
    }
    console.error(D);
  }, oe = {
    map: $,
    forEach: function(D, R, Z) {
      $(
        D,
        function() {
          R.apply(this, arguments);
        },
        Z
      );
    },
    count: function(D) {
      var R = 0;
      return $(D, function() {
        R++;
      }), R;
    },
    toArray: function(D) {
      return $(D, function(R) {
        return R;
      }) || [];
    },
    only: function(D) {
      if (!K(D))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return D;
    }
  };
  return fe.Activity = y, fe.Children = oe, fe.Component = _, fe.Fragment = l, fe.Profiler = c, fe.PureComponent = L, fe.StrictMode = r, fe.Suspense = v, fe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = F, fe.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(D) {
      return F.H.useMemoCache(D);
    }
  }, fe.cache = function(D) {
    return function() {
      return D.apply(null, arguments);
    };
  }, fe.cacheSignal = function() {
    return null;
  }, fe.cloneElement = function(D, R, Z) {
    if (D == null)
      throw Error(
        "The argument must be a React element, but you passed " + D + "."
      );
    var W = z({}, D.props), ue = D.key;
    if (R != null)
      for (ce in R.key !== void 0 && (ue = "" + R.key), R)
        !Y.call(R, ce) || ce === "key" || ce === "__self" || ce === "__source" || ce === "ref" && R.ref === void 0 || (W[ce] = R[ce]);
    var ce = arguments.length - 2;
    if (ce === 1) W.children = Z;
    else if (1 < ce) {
      for (var Ve = Array(ce), rt = 0; rt < ce; rt++)
        Ve[rt] = arguments[rt + 2];
      W.children = Ve;
    }
    return J(D.type, ue, W);
  }, fe.createContext = function(D) {
    return D = {
      $$typeof: f,
      _currentValue: D,
      _currentValue2: D,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, D.Provider = D, D.Consumer = {
      $$typeof: m,
      _context: D
    }, D;
  }, fe.createElement = function(D, R, Z) {
    var W, ue = {}, ce = null;
    if (R != null)
      for (W in R.key !== void 0 && (ce = "" + R.key), R)
        Y.call(R, W) && W !== "key" && W !== "__self" && W !== "__source" && (ue[W] = R[W]);
    var Ve = arguments.length - 2;
    if (Ve === 1) ue.children = Z;
    else if (1 < Ve) {
      for (var rt = Array(Ve), qe = 0; qe < Ve; qe++)
        rt[qe] = arguments[qe + 2];
      ue.children = rt;
    }
    if (D && D.defaultProps)
      for (W in Ve = D.defaultProps, Ve)
        ue[W] === void 0 && (ue[W] = Ve[W]);
    return J(D, ce, ue);
  }, fe.createRef = function() {
    return { current: null };
  }, fe.forwardRef = function(D) {
    return { $$typeof: h, render: D };
  }, fe.isValidElement = K, fe.lazy = function(D) {
    return {
      $$typeof: x,
      _payload: { _status: -1, _result: D },
      _init: Q
    };
  }, fe.memo = function(D, R) {
    return {
      $$typeof: g,
      type: D,
      compare: R === void 0 ? null : R
    };
  }, fe.startTransition = function(D) {
    var R = F.T, Z = {};
    F.T = Z;
    try {
      var W = D(), ue = F.S;
      ue !== null && ue(Z, W), typeof W == "object" && W !== null && typeof W.then == "function" && W.then(ee, ne);
    } catch (ce) {
      ne(ce);
    } finally {
      R !== null && Z.types !== null && (R.types = Z.types), F.T = R;
    }
  }, fe.unstable_useCacheRefresh = function() {
    return F.H.useCacheRefresh();
  }, fe.use = function(D) {
    return F.H.use(D);
  }, fe.useActionState = function(D, R, Z) {
    return F.H.useActionState(D, R, Z);
  }, fe.useCallback = function(D, R) {
    return F.H.useCallback(D, R);
  }, fe.useContext = function(D) {
    return F.H.useContext(D);
  }, fe.useDebugValue = function() {
  }, fe.useDeferredValue = function(D, R) {
    return F.H.useDeferredValue(D, R);
  }, fe.useEffect = function(D, R) {
    return F.H.useEffect(D, R);
  }, fe.useEffectEvent = function(D) {
    return F.H.useEffectEvent(D);
  }, fe.useId = function() {
    return F.H.useId();
  }, fe.useImperativeHandle = function(D, R, Z) {
    return F.H.useImperativeHandle(D, R, Z);
  }, fe.useInsertionEffect = function(D, R) {
    return F.H.useInsertionEffect(D, R);
  }, fe.useLayoutEffect = function(D, R) {
    return F.H.useLayoutEffect(D, R);
  }, fe.useMemo = function(D, R) {
    return F.H.useMemo(D, R);
  }, fe.useOptimistic = function(D, R) {
    return F.H.useOptimistic(D, R);
  }, fe.useReducer = function(D, R, Z) {
    return F.H.useReducer(D, R, Z);
  }, fe.useRef = function(D) {
    return F.H.useRef(D);
  }, fe.useState = function(D) {
    return F.H.useState(D);
  }, fe.useSyncExternalStore = function(D, R, Z) {
    return F.H.useSyncExternalStore(
      D,
      R,
      Z
    );
  }, fe.useTransition = function() {
    return F.H.useTransition();
  }, fe.version = "19.2.6", fe;
}
var Vh;
function Qc() {
  return Vh || (Vh = 1, Fu.exports = A1()), Fu.exports;
}
var q = Qc();
const Th = /* @__PURE__ */ C1(q);
var Qu = { exports: {} }, ps = {}, Ku = { exports: {} }, Zu = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ch;
function j1() {
  return Ch || (Ch = 1, (function(i) {
    function s(j, $) {
      var Q = j.length;
      j.push($);
      e: for (; 0 < Q; ) {
        var ne = Q - 1 >>> 1, oe = j[ne];
        if (0 < c(oe, $))
          j[ne] = $, j[Q] = oe, Q = ne;
        else break e;
      }
    }
    function l(j) {
      return j.length === 0 ? null : j[0];
    }
    function r(j) {
      if (j.length === 0) return null;
      var $ = j[0], Q = j.pop();
      if (Q !== $) {
        j[0] = Q;
        e: for (var ne = 0, oe = j.length, D = oe >>> 1; ne < D; ) {
          var R = 2 * (ne + 1) - 1, Z = j[R], W = R + 1, ue = j[W];
          if (0 > c(Z, Q))
            W < oe && 0 > c(ue, Z) ? (j[ne] = ue, j[W] = Q, ne = W) : (j[ne] = Z, j[R] = Q, ne = R);
          else if (W < oe && 0 > c(ue, Q))
            j[ne] = ue, j[W] = Q, ne = W;
          else break e;
        }
      }
      return $;
    }
    function c(j, $) {
      var Q = j.sortIndex - $.sortIndex;
      return Q !== 0 ? Q : j.id - $.id;
    }
    if (i.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var m = performance;
      i.unstable_now = function() {
        return m.now();
      };
    } else {
      var f = Date, h = f.now();
      i.unstable_now = function() {
        return f.now() - h;
      };
    }
    var v = [], g = [], x = 1, y = null, N = 3, V = !1, T = !1, z = !1, A = !1, _ = typeof setTimeout == "function" ? setTimeout : null, G = typeof clearTimeout == "function" ? clearTimeout : null, L = typeof setImmediate < "u" ? setImmediate : null;
    function H(j) {
      for (var $ = l(g); $ !== null; ) {
        if ($.callback === null) r(g);
        else if ($.startTime <= j)
          r(g), $.sortIndex = $.expirationTime, s(v, $);
        else break;
        $ = l(g);
      }
    }
    function X(j) {
      if (z = !1, H(j), !T)
        if (l(v) !== null)
          T = !0, ee || (ee = !0, I());
        else {
          var $ = l(g);
          $ !== null && me(X, $.startTime - j);
        }
    }
    var ee = !1, F = -1, Y = 5, J = -1;
    function te() {
      return A ? !0 : !(i.unstable_now() - J < Y);
    }
    function K() {
      if (A = !1, ee) {
        var j = i.unstable_now();
        J = j;
        var $ = !0;
        try {
          e: {
            T = !1, z && (z = !1, G(F), F = -1), V = !0;
            var Q = N;
            try {
              t: {
                for (H(j), y = l(v); y !== null && !(y.expirationTime > j && te()); ) {
                  var ne = y.callback;
                  if (typeof ne == "function") {
                    y.callback = null, N = y.priorityLevel;
                    var oe = ne(
                      y.expirationTime <= j
                    );
                    if (j = i.unstable_now(), typeof oe == "function") {
                      y.callback = oe, H(j), $ = !0;
                      break t;
                    }
                    y === l(v) && r(v), H(j);
                  } else r(v);
                  y = l(v);
                }
                if (y !== null) $ = !0;
                else {
                  var D = l(g);
                  D !== null && me(
                    X,
                    D.startTime - j
                  ), $ = !1;
                }
              }
              break e;
            } finally {
              y = null, N = Q, V = !1;
            }
            $ = void 0;
          }
        } finally {
          $ ? I() : ee = !1;
        }
      }
    }
    var I;
    if (typeof L == "function")
      I = function() {
        L(K);
      };
    else if (typeof MessageChannel < "u") {
      var Se = new MessageChannel(), de = Se.port2;
      Se.port1.onmessage = K, I = function() {
        de.postMessage(null);
      };
    } else
      I = function() {
        _(K, 0);
      };
    function me(j, $) {
      F = _(function() {
        j(i.unstable_now());
      }, $);
    }
    i.unstable_IdlePriority = 5, i.unstable_ImmediatePriority = 1, i.unstable_LowPriority = 4, i.unstable_NormalPriority = 3, i.unstable_Profiling = null, i.unstable_UserBlockingPriority = 2, i.unstable_cancelCallback = function(j) {
      j.callback = null;
    }, i.unstable_forceFrameRate = function(j) {
      0 > j || 125 < j ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : Y = 0 < j ? Math.floor(1e3 / j) : 5;
    }, i.unstable_getCurrentPriorityLevel = function() {
      return N;
    }, i.unstable_next = function(j) {
      switch (N) {
        case 1:
        case 2:
        case 3:
          var $ = 3;
          break;
        default:
          $ = N;
      }
      var Q = N;
      N = $;
      try {
        return j();
      } finally {
        N = Q;
      }
    }, i.unstable_requestPaint = function() {
      A = !0;
    }, i.unstable_runWithPriority = function(j, $) {
      switch (j) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          j = 3;
      }
      var Q = N;
      N = j;
      try {
        return $();
      } finally {
        N = Q;
      }
    }, i.unstable_scheduleCallback = function(j, $, Q) {
      var ne = i.unstable_now();
      switch (typeof Q == "object" && Q !== null ? (Q = Q.delay, Q = typeof Q == "number" && 0 < Q ? ne + Q : ne) : Q = ne, j) {
        case 1:
          var oe = -1;
          break;
        case 2:
          oe = 250;
          break;
        case 5:
          oe = 1073741823;
          break;
        case 4:
          oe = 1e4;
          break;
        default:
          oe = 5e3;
      }
      return oe = Q + oe, j = {
        id: x++,
        callback: $,
        priorityLevel: j,
        startTime: Q,
        expirationTime: oe,
        sortIndex: -1
      }, Q > ne ? (j.sortIndex = Q, s(g, j), l(v) === null && j === l(g) && (z ? (G(F), F = -1) : z = !0, me(X, Q - ne))) : (j.sortIndex = oe, s(v, j), T || V || (T = !0, ee || (ee = !0, I()))), j;
    }, i.unstable_shouldYield = te, i.unstable_wrapCallback = function(j) {
      var $ = N;
      return function() {
        var Q = N;
        N = $;
        try {
          return j.apply(this, arguments);
        } finally {
          N = Q;
        }
      };
    };
  })(Zu)), Zu;
}
var kh;
function M1() {
  return kh || (kh = 1, Ku.exports = j1()), Ku.exports;
}
var Ju = { exports: {} }, lt = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Bh;
function P1() {
  if (Bh) return lt;
  Bh = 1;
  var i = Qc();
  function s(v) {
    var g = "https://react.dev/errors/" + v;
    if (1 < arguments.length) {
      g += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var x = 2; x < arguments.length; x++)
        g += "&args[]=" + encodeURIComponent(arguments[x]);
    }
    return "Minified React error #" + v + "; visit " + g + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function l() {
  }
  var r = {
    d: {
      f: l,
      r: function() {
        throw Error(s(522));
      },
      D: l,
      C: l,
      L: l,
      m: l,
      X: l,
      S: l,
      M: l
    },
    p: 0,
    findDOMNode: null
  }, c = Symbol.for("react.portal");
  function m(v, g, x) {
    var y = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: c,
      key: y == null ? null : "" + y,
      children: v,
      containerInfo: g,
      implementation: x
    };
  }
  var f = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function h(v, g) {
    if (v === "font") return "";
    if (typeof g == "string")
      return g === "use-credentials" ? g : "";
  }
  return lt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r, lt.createPortal = function(v, g) {
    var x = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!g || g.nodeType !== 1 && g.nodeType !== 9 && g.nodeType !== 11)
      throw Error(s(299));
    return m(v, g, null, x);
  }, lt.flushSync = function(v) {
    var g = f.T, x = r.p;
    try {
      if (f.T = null, r.p = 2, v) return v();
    } finally {
      f.T = g, r.p = x, r.d.f();
    }
  }, lt.preconnect = function(v, g) {
    typeof v == "string" && (g ? (g = g.crossOrigin, g = typeof g == "string" ? g === "use-credentials" ? g : "" : void 0) : g = null, r.d.C(v, g));
  }, lt.prefetchDNS = function(v) {
    typeof v == "string" && r.d.D(v);
  }, lt.preinit = function(v, g) {
    if (typeof v == "string" && g && typeof g.as == "string") {
      var x = g.as, y = h(x, g.crossOrigin), N = typeof g.integrity == "string" ? g.integrity : void 0, V = typeof g.fetchPriority == "string" ? g.fetchPriority : void 0;
      x === "style" ? r.d.S(
        v,
        typeof g.precedence == "string" ? g.precedence : void 0,
        {
          crossOrigin: y,
          integrity: N,
          fetchPriority: V
        }
      ) : x === "script" && r.d.X(v, {
        crossOrigin: y,
        integrity: N,
        fetchPriority: V,
        nonce: typeof g.nonce == "string" ? g.nonce : void 0
      });
    }
  }, lt.preinitModule = function(v, g) {
    if (typeof v == "string")
      if (typeof g == "object" && g !== null) {
        if (g.as == null || g.as === "script") {
          var x = h(
            g.as,
            g.crossOrigin
          );
          r.d.M(v, {
            crossOrigin: x,
            integrity: typeof g.integrity == "string" ? g.integrity : void 0,
            nonce: typeof g.nonce == "string" ? g.nonce : void 0
          });
        }
      } else g == null && r.d.M(v);
  }, lt.preload = function(v, g) {
    if (typeof v == "string" && typeof g == "object" && g !== null && typeof g.as == "string") {
      var x = g.as, y = h(x, g.crossOrigin);
      r.d.L(v, x, {
        crossOrigin: y,
        integrity: typeof g.integrity == "string" ? g.integrity : void 0,
        nonce: typeof g.nonce == "string" ? g.nonce : void 0,
        type: typeof g.type == "string" ? g.type : void 0,
        fetchPriority: typeof g.fetchPriority == "string" ? g.fetchPriority : void 0,
        referrerPolicy: typeof g.referrerPolicy == "string" ? g.referrerPolicy : void 0,
        imageSrcSet: typeof g.imageSrcSet == "string" ? g.imageSrcSet : void 0,
        imageSizes: typeof g.imageSizes == "string" ? g.imageSizes : void 0,
        media: typeof g.media == "string" ? g.media : void 0
      });
    }
  }, lt.preloadModule = function(v, g) {
    if (typeof v == "string")
      if (g) {
        var x = h(g.as, g.crossOrigin);
        r.d.m(v, {
          as: typeof g.as == "string" && g.as !== "script" ? g.as : void 0,
          crossOrigin: x,
          integrity: typeof g.integrity == "string" ? g.integrity : void 0
        });
      } else r.d.m(v);
  }, lt.requestFormReset = function(v) {
    r.d.r(v);
  }, lt.unstable_batchedUpdates = function(v, g) {
    return v(g);
  }, lt.useFormState = function(v, g, x) {
    return f.H.useFormState(v, g, x);
  }, lt.useFormStatus = function() {
    return f.H.useHostTransitionStatus();
  }, lt.version = "19.2.6", lt;
}
var Ah;
function z1() {
  if (Ah) return Ju.exports;
  Ah = 1;
  function i() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (s) {
        console.error(s);
      }
  }
  return i(), Ju.exports = P1(), Ju.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var jh;
function R1() {
  if (jh) return ps;
  jh = 1;
  var i = M1(), s = Qc(), l = z1();
  function r(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function c(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function m(e) {
    var t = e, n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do
        t = e, (t.flags & 4098) !== 0 && (n = t.return), e = t.return;
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function f(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function h(e) {
    if (e.tag === 31) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function v(e) {
    if (m(e) !== e)
      throw Error(r(188));
  }
  function g(e) {
    var t = e.alternate;
    if (!t) {
      if (t = m(e), t === null) throw Error(r(188));
      return t !== e ? null : e;
    }
    for (var n = e, a = t; ; ) {
      var o = n.return;
      if (o === null) break;
      var u = o.alternate;
      if (u === null) {
        if (a = o.return, a !== null) {
          n = a;
          continue;
        }
        break;
      }
      if (o.child === u.child) {
        for (u = o.child; u; ) {
          if (u === n) return v(o), e;
          if (u === a) return v(o), t;
          u = u.sibling;
        }
        throw Error(r(188));
      }
      if (n.return !== a.return) n = o, a = u;
      else {
        for (var d = !1, b = o.child; b; ) {
          if (b === n) {
            d = !0, n = o, a = u;
            break;
          }
          if (b === a) {
            d = !0, a = o, n = u;
            break;
          }
          b = b.sibling;
        }
        if (!d) {
          for (b = u.child; b; ) {
            if (b === n) {
              d = !0, n = u, a = o;
              break;
            }
            if (b === a) {
              d = !0, a = u, n = o;
              break;
            }
            b = b.sibling;
          }
          if (!d) throw Error(r(189));
        }
      }
      if (n.alternate !== a) throw Error(r(190));
    }
    if (n.tag !== 3) throw Error(r(188));
    return n.stateNode.current === n ? e : t;
  }
  function x(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (t = x(e), t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var y = Object.assign, N = Symbol.for("react.element"), V = Symbol.for("react.transitional.element"), T = Symbol.for("react.portal"), z = Symbol.for("react.fragment"), A = Symbol.for("react.strict_mode"), _ = Symbol.for("react.profiler"), G = Symbol.for("react.consumer"), L = Symbol.for("react.context"), H = Symbol.for("react.forward_ref"), X = Symbol.for("react.suspense"), ee = Symbol.for("react.suspense_list"), F = Symbol.for("react.memo"), Y = Symbol.for("react.lazy"), J = Symbol.for("react.activity"), te = Symbol.for("react.memo_cache_sentinel"), K = Symbol.iterator;
  function I(e) {
    return e === null || typeof e != "object" ? null : (e = K && e[K] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var Se = Symbol.for("react.client.reference");
  function de(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === Se ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case z:
        return "Fragment";
      case _:
        return "Profiler";
      case A:
        return "StrictMode";
      case X:
        return "Suspense";
      case ee:
        return "SuspenseList";
      case J:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case T:
          return "Portal";
        case L:
          return e.displayName || "Context";
        case G:
          return (e._context.displayName || "Context") + ".Consumer";
        case H:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case F:
          return t = e.displayName || null, t !== null ? t : de(e.type) || "Memo";
        case Y:
          t = e._payload, e = e._init;
          try {
            return de(e(t));
          } catch {
          }
      }
    return null;
  }
  var me = Array.isArray, j = s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, $ = l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Q = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, ne = [], oe = -1;
  function D(e) {
    return { current: e };
  }
  function R(e) {
    0 > oe || (e.current = ne[oe], ne[oe] = null, oe--);
  }
  function Z(e, t) {
    oe++, ne[oe] = e.current, e.current = t;
  }
  var W = D(null), ue = D(null), ce = D(null), Ve = D(null);
  function rt(e, t) {
    switch (Z(ce, t), Z(ue, e), Z(W, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? Fp(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI)
          t = Fp(t), e = Qp(t, e);
        else
          switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    R(W), Z(W, e);
  }
  function qe() {
    R(W), R(ue), R(ce);
  }
  function Na(e) {
    e.memoizedState !== null && Z(Ve, e);
    var t = W.current, n = Qp(t, e.type);
    t !== n && (Z(ue, e), Z(W, n));
  }
  function As(e) {
    ue.current === e && (R(W), R(ue)), Ve.current === e && (R(Ve), cs._currentValue = Q);
  }
  var Tl, Sf;
  function ei(e) {
    if (Tl === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        Tl = t && t[1] || "", Sf = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Tl + e + Sf;
  }
  var Cl = !1;
  function kl(e, t) {
    if (!e || Cl) return "";
    Cl = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var U = function() {
                throw Error();
              };
              if (Object.defineProperty(U.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(U, []);
                } catch (M) {
                  var B = M;
                }
                Reflect.construct(e, [], U);
              } else {
                try {
                  U.call();
                } catch (M) {
                  B = M;
                }
                e.call(U.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (M) {
                B = M;
              }
              (U = e()) && typeof U.catch == "function" && U.catch(function() {
              });
            }
          } catch (M) {
            if (M && B && typeof M.stack == "string")
              return [M.stack, B.stack];
          }
          return [null, null];
        }
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var o = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name"
      );
      o && o.configurable && Object.defineProperty(
        a.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var u = a.DetermineComponentFrameRoot(), d = u[0], b = u[1];
      if (d && b) {
        var S = d.split(`
`), k = b.split(`
`);
        for (o = a = 0; a < S.length && !S[a].includes("DetermineComponentFrameRoot"); )
          a++;
        for (; o < k.length && !k[o].includes(
          "DetermineComponentFrameRoot"
        ); )
          o++;
        if (a === S.length || o === k.length)
          for (a = S.length - 1, o = k.length - 1; 1 <= a && 0 <= o && S[a] !== k[o]; )
            o--;
        for (; 1 <= a && 0 <= o; a--, o--)
          if (S[a] !== k[o]) {
            if (a !== 1 || o !== 1)
              do
                if (a--, o--, 0 > o || S[a] !== k[o]) {
                  var P = `
` + S[a].replace(" at new ", " at ");
                  return e.displayName && P.includes("<anonymous>") && (P = P.replace("<anonymous>", e.displayName)), P;
                }
              while (1 <= a && 0 <= o);
            break;
          }
      }
    } finally {
      Cl = !1, Error.prepareStackTrace = n;
    }
    return (n = e ? e.displayName || e.name : "") ? ei(n) : "";
  }
  function sv(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return ei(e.type);
      case 16:
        return ei("Lazy");
      case 13:
        return e.child !== t && t !== null ? ei("Suspense Fallback") : ei("Suspense");
      case 19:
        return ei("SuspenseList");
      case 0:
      case 15:
        return kl(e.type, !1);
      case 11:
        return kl(e.type.render, !1);
      case 1:
        return kl(e.type, !0);
      case 31:
        return ei("Activity");
      default:
        return "";
    }
  }
  function Df(e) {
    try {
      var t = "", n = null;
      do
        t += sv(e, n), n = e, e = e.return;
      while (e);
      return t;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  var Bl = Object.prototype.hasOwnProperty, Al = i.unstable_scheduleCallback, jl = i.unstable_cancelCallback, ov = i.unstable_shouldYield, lv = i.unstable_requestPaint, yt = i.unstable_now, rv = i.unstable_getCurrentPriorityLevel, Ef = i.unstable_ImmediatePriority, wf = i.unstable_UserBlockingPriority, js = i.unstable_NormalPriority, uv = i.unstable_LowPriority, Vf = i.unstable_IdlePriority, cv = i.log, fv = i.unstable_setDisableYieldValue, Sa = null, Nt = null;
  function Dn(e) {
    if (typeof cv == "function" && fv(e), Nt && typeof Nt.setStrictMode == "function")
      try {
        Nt.setStrictMode(Sa, e);
      } catch {
      }
  }
  var St = Math.clz32 ? Math.clz32 : pv, dv = Math.log, mv = Math.LN2;
  function pv(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (dv(e) / mv | 0) | 0;
  }
  var Ms = 256, Ps = 262144, zs = 4194304;
  function ti(e) {
    var t = e & 42;
    if (t !== 0) return t;
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return e & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function Rs(e, t, n) {
    var a = e.pendingLanes;
    if (a === 0) return 0;
    var o = 0, u = e.suspendedLanes, d = e.pingedLanes;
    e = e.warmLanes;
    var b = a & 134217727;
    return b !== 0 ? (a = b & ~u, a !== 0 ? o = ti(a) : (d &= b, d !== 0 ? o = ti(d) : n || (n = b & ~e, n !== 0 && (o = ti(n))))) : (b = a & ~u, b !== 0 ? o = ti(b) : d !== 0 ? o = ti(d) : n || (n = a & ~e, n !== 0 && (o = ti(n)))), o === 0 ? 0 : t !== 0 && t !== o && (t & u) === 0 && (u = o & -o, n = t & -t, u >= n || u === 32 && (n & 4194048) !== 0) ? t : o;
  }
  function Da(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function hv(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Tf() {
    var e = zs;
    return zs <<= 1, (zs & 62914560) === 0 && (zs = 4194304), e;
  }
  function Ml(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Ea(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function gv(e, t, n, a, o, u) {
    var d = e.pendingLanes;
    e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0;
    var b = e.entanglements, S = e.expirationTimes, k = e.hiddenUpdates;
    for (n = d & ~n; 0 < n; ) {
      var P = 31 - St(n), U = 1 << P;
      b[P] = 0, S[P] = -1;
      var B = k[P];
      if (B !== null)
        for (k[P] = null, P = 0; P < B.length; P++) {
          var M = B[P];
          M !== null && (M.lane &= -536870913);
        }
      n &= ~U;
    }
    a !== 0 && Cf(e, a, 0), u !== 0 && o === 0 && e.tag !== 0 && (e.suspendedLanes |= u & ~(d & ~t));
  }
  function Cf(e, t, n) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var a = 31 - St(t);
    e.entangledLanes |= t, e.entanglements[a] = e.entanglements[a] | 1073741824 | n & 261930;
  }
  function kf(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var a = 31 - St(n), o = 1 << a;
      o & t | e[a] & t && (e[a] |= t), n &= ~o;
    }
  }
  function Bf(e, t) {
    var n = t & -t;
    return n = (n & 42) !== 0 ? 1 : Pl(n), (n & (e.suspendedLanes | t)) !== 0 ? 0 : n;
  }
  function Pl(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function zl(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Af() {
    var e = $.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : gh(e.type));
  }
  function jf(e, t) {
    var n = $.p;
    try {
      return $.p = e, t();
    } finally {
      $.p = n;
    }
  }
  var En = Math.random().toString(36).slice(2), et = "__reactFiber$" + En, dt = "__reactProps$" + En, Vi = "__reactContainer$" + En, Rl = "__reactEvents$" + En, bv = "__reactListeners$" + En, vv = "__reactHandles$" + En, Mf = "__reactResources$" + En, wa = "__reactMarker$" + En;
  function _l(e) {
    delete e[et], delete e[dt], delete e[Rl], delete e[bv], delete e[vv];
  }
  function Ti(e) {
    var t = e[et];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[Vi] || n[et]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
          for (e = eh(e); e !== null; ) {
            if (n = e[et]) return n;
            e = eh(e);
          }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function Ci(e) {
    if (e = e[et] || e[Vi]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function Va(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(r(33));
  }
  function ki(e) {
    var t = e[Mf];
    return t || (t = e[Mf] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function We(e) {
    e[wa] = !0;
  }
  var Pf = /* @__PURE__ */ new Set(), zf = {};
  function ni(e, t) {
    Bi(e, t), Bi(e + "Capture", t);
  }
  function Bi(e, t) {
    for (zf[e] = t, e = 0; e < t.length; e++)
      Pf.add(t[e]);
  }
  var xv = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Rf = {}, _f = {};
  function yv(e) {
    return Bl.call(_f, e) ? !0 : Bl.call(Rf, e) ? !1 : xv.test(e) ? _f[e] = !0 : (Rf[e] = !0, !1);
  }
  function _s(e, t, n) {
    if (yv(t))
      if (n === null) e.removeAttribute(t);
      else {
        switch (typeof n) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var a = t.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, "" + n);
      }
  }
  function Os(e, t, n) {
    if (n === null) e.removeAttribute(t);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, "" + n);
    }
  }
  function nn(e, t, n, a) {
    if (a === null) e.removeAttribute(n);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(n);
          return;
      }
      e.setAttributeNS(t, n, "" + a);
    }
  }
  function Bt(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function Of(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Nv(e, t, n) {
    var a = Object.getOwnPropertyDescriptor(
      e.constructor.prototype,
      t
    );
    if (!e.hasOwnProperty(t) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
      var o = a.get, u = a.set;
      return Object.defineProperty(e, t, {
        configurable: !0,
        get: function() {
          return o.call(this);
        },
        set: function(d) {
          n = "" + d, u.call(this, d);
        }
      }), Object.defineProperty(e, t, {
        enumerable: a.enumerable
      }), {
        getValue: function() {
          return n;
        },
        setValue: function(d) {
          n = "" + d;
        },
        stopTracking: function() {
          e._valueTracker = null, delete e[t];
        }
      };
    }
  }
  function Ol(e) {
    if (!e._valueTracker) {
      var t = Of(e) ? "checked" : "value";
      e._valueTracker = Nv(
        e,
        t,
        "" + e[t]
      );
    }
  }
  function Uf(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), a = "";
    return e && (a = Of(e) ? e.checked ? "true" : "false" : e.value), e = a, e !== n ? (t.setValue(e), !0) : !1;
  }
  function Us(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var Sv = /[\n"\\]/g;
  function At(e) {
    return e.replace(
      Sv,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Ul(e, t, n, a, o, u, d, b) {
    e.name = "", d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" ? e.type = d : e.removeAttribute("type"), t != null ? d === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Bt(t)) : e.value !== "" + Bt(t) && (e.value = "" + Bt(t)) : d !== "submit" && d !== "reset" || e.removeAttribute("value"), t != null ? Ll(e, d, Bt(t)) : n != null ? Ll(e, d, Bt(n)) : a != null && e.removeAttribute("value"), o == null && u != null && (e.defaultChecked = !!u), o != null && (e.checked = o && typeof o != "function" && typeof o != "symbol"), b != null && typeof b != "function" && typeof b != "symbol" && typeof b != "boolean" ? e.name = "" + Bt(b) : e.removeAttribute("name");
  }
  function Lf(e, t, n, a, o, u, d, b) {
    if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (e.type = u), t != null || n != null) {
      if (!(u !== "submit" && u !== "reset" || t != null)) {
        Ol(e);
        return;
      }
      n = n != null ? "" + Bt(n) : "", t = t != null ? "" + Bt(t) : n, b || t === e.value || (e.value = t), e.defaultValue = t;
    }
    a = a ?? o, a = typeof a != "function" && typeof a != "symbol" && !!a, e.checked = b ? e.checked : !!a, e.defaultChecked = !!a, d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" && (e.name = d), Ol(e);
  }
  function Ll(e, t, n) {
    t === "number" && Us(e.ownerDocument) === e || e.defaultValue === "" + n || (e.defaultValue = "" + n);
  }
  function Ai(e, t, n, a) {
    if (e = e.options, t) {
      t = {};
      for (var o = 0; o < n.length; o++)
        t["$" + n[o]] = !0;
      for (n = 0; n < e.length; n++)
        o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && a && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + Bt(n), t = null, o = 0; o < e.length; o++) {
        if (e[o].value === n) {
          e[o].selected = !0, a && (e[o].defaultSelected = !0);
          return;
        }
        t !== null || e[o].disabled || (t = e[o]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Hf(e, t, n) {
    if (t != null && (t = "" + Bt(t), t !== e.value && (e.value = t), n == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = n != null ? "" + Bt(n) : "";
  }
  function qf(e, t, n, a) {
    if (t == null) {
      if (a != null) {
        if (n != null) throw Error(r(92));
        if (me(a)) {
          if (1 < a.length) throw Error(r(93));
          a = a[0];
        }
        n = a;
      }
      n == null && (n = ""), t = n;
    }
    n = Bt(t), e.defaultValue = n, a = e.textContent, a === n && a !== "" && a !== null && (e.value = a), Ol(e);
  }
  function ji(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Dv = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Gf(e, t, n) {
    var a = t.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === "" ? a ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : a ? e.setProperty(t, n) : typeof n != "number" || n === 0 || Dv.has(t) ? t === "float" ? e.cssFloat = n : e[t] = ("" + n).trim() : e[t] = n + "px";
  }
  function Yf(e, t, n) {
    if (t != null && typeof t != "object")
      throw Error(r(62));
    if (e = e.style, n != null) {
      for (var a in n)
        !n.hasOwnProperty(a) || t != null && t.hasOwnProperty(a) || (a.indexOf("--") === 0 ? e.setProperty(a, "") : a === "float" ? e.cssFloat = "" : e[a] = "");
      for (var o in t)
        a = t[o], t.hasOwnProperty(o) && n[o] !== a && Gf(e, o, a);
    } else
      for (var u in t)
        t.hasOwnProperty(u) && Gf(e, u, t[u]);
  }
  function Hl(e) {
    if (e.indexOf("-") === -1) return !1;
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Ev = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), wv = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Ls(e) {
    return wv.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function an() {
  }
  var ql = null;
  function Gl(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Mi = null, Pi = null;
  function Xf(e) {
    var t = Ci(e);
    if (t && (e = t.stateNode)) {
      var n = e[dt] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (Ul(
            e,
            n.value,
            n.defaultValue,
            n.defaultValue,
            n.checked,
            n.defaultChecked,
            n.type,
            n.name
          ), t = n.name, n.type === "radio" && t != null) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (n = n.querySelectorAll(
              'input[name="' + At(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < n.length; t++) {
              var a = n[t];
              if (a !== e && a.form === e.form) {
                var o = a[dt] || null;
                if (!o) throw Error(r(90));
                Ul(
                  a,
                  o.value,
                  o.defaultValue,
                  o.defaultValue,
                  o.checked,
                  o.defaultChecked,
                  o.type,
                  o.name
                );
              }
            }
            for (t = 0; t < n.length; t++)
              a = n[t], a.form === e.form && Uf(a);
          }
          break e;
        case "textarea":
          Hf(e, n.value, n.defaultValue);
          break e;
        case "select":
          t = n.value, t != null && Ai(e, !!n.multiple, t, !1);
      }
    }
  }
  var Yl = !1;
  function Ff(e, t, n) {
    if (Yl) return e(t, n);
    Yl = !0;
    try {
      var a = e(t);
      return a;
    } finally {
      if (Yl = !1, (Mi !== null || Pi !== null) && (Co(), Mi && (t = Mi, e = Pi, Pi = Mi = null, Xf(t), e)))
        for (t = 0; t < e.length; t++) Xf(e[t]);
    }
  }
  function Ta(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var a = n[dt] || null;
    if (a === null) return null;
    n = a[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (a = !a.disabled) || (e = e.type, a = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !a;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function")
      throw Error(
        r(231, t, typeof n)
      );
    return n;
  }
  var sn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Xl = !1;
  if (sn)
    try {
      var Ca = {};
      Object.defineProperty(Ca, "passive", {
        get: function() {
          Xl = !0;
        }
      }), window.addEventListener("test", Ca, Ca), window.removeEventListener("test", Ca, Ca);
    } catch {
      Xl = !1;
    }
  var wn = null, Fl = null, Hs = null;
  function Qf() {
    if (Hs) return Hs;
    var e, t = Fl, n = t.length, a, o = "value" in wn ? wn.value : wn.textContent, u = o.length;
    for (e = 0; e < n && t[e] === o[e]; e++) ;
    var d = n - e;
    for (a = 1; a <= d && t[n - a] === o[u - a]; a++) ;
    return Hs = o.slice(e, 1 < a ? 1 - a : void 0);
  }
  function qs(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Gs() {
    return !0;
  }
  function Kf() {
    return !1;
  }
  function mt(e) {
    function t(n, a, o, u, d) {
      this._reactName = n, this._targetInst = o, this.type = a, this.nativeEvent = u, this.target = d, this.currentTarget = null;
      for (var b in e)
        e.hasOwnProperty(b) && (n = e[b], this[b] = n ? n(u) : u[b]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? Gs : Kf, this.isPropagationStopped = Kf, this;
    }
    return y(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Gs);
      },
      stopPropagation: function() {
        var n = this.nativeEvent;
        n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Gs);
      },
      persist: function() {
      },
      isPersistent: Gs
    }), t;
  }
  var ii = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Ys = mt(ii), ka = y({}, ii, { view: 0, detail: 0 }), Vv = mt(ka), Ql, Kl, Ba, Xs = y({}, ka, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Jl,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== Ba && (Ba && e.type === "mousemove" ? (Ql = e.screenX - Ba.screenX, Kl = e.screenY - Ba.screenY) : Kl = Ql = 0, Ba = e), Ql);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : Kl;
    }
  }), Zf = mt(Xs), Tv = y({}, Xs, { dataTransfer: 0 }), Cv = mt(Tv), kv = y({}, ka, { relatedTarget: 0 }), Zl = mt(kv), Bv = y({}, ii, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Av = mt(Bv), jv = y({}, ii, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), Mv = mt(jv), Pv = y({}, ii, { data: 0 }), Jf = mt(Pv), zv = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, Rv = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, _v = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Ov(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = _v[e]) ? !!t[e] : !1;
  }
  function Jl() {
    return Ov;
  }
  var Uv = y({}, ka, {
    key: function(e) {
      if (e.key) {
        var t = zv[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = qs(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Rv[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Jl,
    charCode: function(e) {
      return e.type === "keypress" ? qs(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? qs(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), Lv = mt(Uv), Hv = y({}, Xs, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), $f = mt(Hv), qv = y({}, ka, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Jl
  }), Gv = mt(qv), Yv = y({}, ii, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Xv = mt(Yv), Fv = y({}, Xs, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Qv = mt(Fv), Kv = y({}, ii, {
    newState: 0,
    oldState: 0
  }), Zv = mt(Kv), Jv = [9, 13, 27, 32], $l = sn && "CompositionEvent" in window, Aa = null;
  sn && "documentMode" in document && (Aa = document.documentMode);
  var $v = sn && "TextEvent" in window && !Aa, Wf = sn && (!$l || Aa && 8 < Aa && 11 >= Aa), If = " ", ed = !1;
  function td(e, t) {
    switch (e) {
      case "keyup":
        return Jv.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function nd(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var zi = !1;
  function Wv(e, t) {
    switch (e) {
      case "compositionend":
        return nd(t);
      case "keypress":
        return t.which !== 32 ? null : (ed = !0, If);
      case "textInput":
        return e = t.data, e === If && ed ? null : e;
      default:
        return null;
    }
  }
  function Iv(e, t) {
    if (zi)
      return e === "compositionend" || !$l && td(e, t) ? (e = Qf(), Hs = Fl = wn = null, zi = !1, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length)
            return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Wf && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var ex = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function id(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!ex[e.type] : t === "textarea";
  }
  function ad(e, t, n, a) {
    Mi ? Pi ? Pi.push(a) : Pi = [a] : Mi = a, t = zo(t, "onChange"), 0 < t.length && (n = new Ys(
      "onChange",
      "change",
      null,
      n,
      a
    ), e.push({ event: n, listeners: t }));
  }
  var ja = null, Ma = null;
  function tx(e) {
    Lp(e, 0);
  }
  function Fs(e) {
    var t = Va(e);
    if (Uf(t)) return e;
  }
  function sd(e, t) {
    if (e === "change") return t;
  }
  var od = !1;
  if (sn) {
    var Wl;
    if (sn) {
      var Il = "oninput" in document;
      if (!Il) {
        var ld = document.createElement("div");
        ld.setAttribute("oninput", "return;"), Il = typeof ld.oninput == "function";
      }
      Wl = Il;
    } else Wl = !1;
    od = Wl && (!document.documentMode || 9 < document.documentMode);
  }
  function rd() {
    ja && (ja.detachEvent("onpropertychange", ud), Ma = ja = null);
  }
  function ud(e) {
    if (e.propertyName === "value" && Fs(Ma)) {
      var t = [];
      ad(
        t,
        Ma,
        e,
        Gl(e)
      ), Ff(tx, t);
    }
  }
  function nx(e, t, n) {
    e === "focusin" ? (rd(), ja = t, Ma = n, ja.attachEvent("onpropertychange", ud)) : e === "focusout" && rd();
  }
  function ix(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Fs(Ma);
  }
  function ax(e, t) {
    if (e === "click") return Fs(t);
  }
  function sx(e, t) {
    if (e === "input" || e === "change")
      return Fs(t);
  }
  function ox(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Dt = typeof Object.is == "function" ? Object.is : ox;
  function Pa(e, t) {
    if (Dt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var n = Object.keys(e), a = Object.keys(t);
    if (n.length !== a.length) return !1;
    for (a = 0; a < n.length; a++) {
      var o = n[a];
      if (!Bl.call(t, o) || !Dt(e[o], t[o]))
        return !1;
    }
    return !0;
  }
  function cd(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function fd(e, t) {
    var n = cd(e);
    e = 0;
    for (var a; n; ) {
      if (n.nodeType === 3) {
        if (a = e + n.textContent.length, e <= t && a >= t)
          return { node: n, offset: t - e };
        e = a;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = cd(n);
    }
  }
  function dd(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? dd(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function md(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = Us(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Us(e.document);
    }
    return t;
  }
  function er(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var lx = sn && "documentMode" in document && 11 >= document.documentMode, Ri = null, tr = null, za = null, nr = !1;
  function pd(e, t, n) {
    var a = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    nr || Ri == null || Ri !== Us(a) || (a = Ri, "selectionStart" in a && er(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), za && Pa(za, a) || (za = a, a = zo(tr, "onSelect"), 0 < a.length && (t = new Ys(
      "onSelect",
      "select",
      null,
      t,
      n
    ), e.push({ event: t, listeners: a }), t.target = Ri)));
  }
  function ai(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var _i = {
    animationend: ai("Animation", "AnimationEnd"),
    animationiteration: ai("Animation", "AnimationIteration"),
    animationstart: ai("Animation", "AnimationStart"),
    transitionrun: ai("Transition", "TransitionRun"),
    transitionstart: ai("Transition", "TransitionStart"),
    transitioncancel: ai("Transition", "TransitionCancel"),
    transitionend: ai("Transition", "TransitionEnd")
  }, ir = {}, hd = {};
  sn && (hd = document.createElement("div").style, "AnimationEvent" in window || (delete _i.animationend.animation, delete _i.animationiteration.animation, delete _i.animationstart.animation), "TransitionEvent" in window || delete _i.transitionend.transition);
  function si(e) {
    if (ir[e]) return ir[e];
    if (!_i[e]) return e;
    var t = _i[e], n;
    for (n in t)
      if (t.hasOwnProperty(n) && n in hd)
        return ir[e] = t[n];
    return e;
  }
  var gd = si("animationend"), bd = si("animationiteration"), vd = si("animationstart"), rx = si("transitionrun"), ux = si("transitionstart"), cx = si("transitioncancel"), xd = si("transitionend"), yd = /* @__PURE__ */ new Map(), ar = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  ar.push("scrollEnd");
  function qt(e, t) {
    yd.set(e, t), ni(t, [e]);
  }
  var Qs = typeof reportError == "function" ? reportError : function(e) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var t = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
        error: e
      });
      if (!window.dispatchEvent(t)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", e);
      return;
    }
    console.error(e);
  }, jt = [], Oi = 0, sr = 0;
  function Ks() {
    for (var e = Oi, t = sr = Oi = 0; t < e; ) {
      var n = jt[t];
      jt[t++] = null;
      var a = jt[t];
      jt[t++] = null;
      var o = jt[t];
      jt[t++] = null;
      var u = jt[t];
      if (jt[t++] = null, a !== null && o !== null) {
        var d = a.pending;
        d === null ? o.next = o : (o.next = d.next, d.next = o), a.pending = o;
      }
      u !== 0 && Nd(n, o, u);
    }
  }
  function Zs(e, t, n, a) {
    jt[Oi++] = e, jt[Oi++] = t, jt[Oi++] = n, jt[Oi++] = a, sr |= a, e.lanes |= a, e = e.alternate, e !== null && (e.lanes |= a);
  }
  function or(e, t, n, a) {
    return Zs(e, t, n, a), Js(e);
  }
  function oi(e, t) {
    return Zs(e, null, null, t), Js(e);
  }
  function Nd(e, t, n) {
    e.lanes |= n;
    var a = e.alternate;
    a !== null && (a.lanes |= n);
    for (var o = !1, u = e.return; u !== null; )
      u.childLanes |= n, a = u.alternate, a !== null && (a.childLanes |= n), u.tag === 22 && (e = u.stateNode, e === null || e._visibility & 1 || (o = !0)), e = u, u = u.return;
    return e.tag === 3 ? (u = e.stateNode, o && t !== null && (o = 31 - St(n), e = u.hiddenUpdates, a = e[o], a === null ? e[o] = [t] : a.push(t), t.lane = n | 536870912), u) : null;
  }
  function Js(e) {
    if (50 < is)
      throw is = 0, hu = null, Error(r(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var Ui = {};
  function fx(e, t, n, a) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Et(e, t, n, a) {
    return new fx(e, t, n, a);
  }
  function lr(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function on(e, t) {
    var n = e.alternate;
    return n === null ? (n = Et(
      e.tag,
      t,
      e.key,
      e.mode
    ), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 65011712, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n.refCleanup = e.refCleanup, n;
  }
  function Sd(e, t) {
    e.flags &= 65011714;
    var n = e.alternate;
    return n === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = n.childLanes, e.lanes = n.lanes, e.child = n.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue, e.type = n.type, t = n.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), e;
  }
  function $s(e, t, n, a, o, u) {
    var d = 0;
    if (a = e, typeof e == "function") lr(e) && (d = 1);
    else if (typeof e == "string")
      d = g1(
        e,
        n,
        W.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case J:
          return e = Et(31, n, t, o), e.elementType = J, e.lanes = u, e;
        case z:
          return li(n.children, o, u, t);
        case A:
          d = 8, o |= 24;
          break;
        case _:
          return e = Et(12, n, t, o | 2), e.elementType = _, e.lanes = u, e;
        case X:
          return e = Et(13, n, t, o), e.elementType = X, e.lanes = u, e;
        case ee:
          return e = Et(19, n, t, o), e.elementType = ee, e.lanes = u, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case L:
                d = 10;
                break e;
              case G:
                d = 9;
                break e;
              case H:
                d = 11;
                break e;
              case F:
                d = 14;
                break e;
              case Y:
                d = 16, a = null;
                break e;
            }
          d = 29, n = Error(
            r(130, e === null ? "null" : typeof e, "")
          ), a = null;
      }
    return t = Et(d, n, t, o), t.elementType = e, t.type = a, t.lanes = u, t;
  }
  function li(e, t, n, a) {
    return e = Et(7, e, a, t), e.lanes = n, e;
  }
  function rr(e, t, n) {
    return e = Et(6, e, null, t), e.lanes = n, e;
  }
  function Dd(e) {
    var t = Et(18, null, null, 0);
    return t.stateNode = e, t;
  }
  function ur(e, t, n) {
    return t = Et(
      4,
      e.children !== null ? e.children : [],
      e.key,
      t
    ), t.lanes = n, t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation
    }, t;
  }
  var Ed = /* @__PURE__ */ new WeakMap();
  function Mt(e, t) {
    if (typeof e == "object" && e !== null) {
      var n = Ed.get(e);
      return n !== void 0 ? n : (t = {
        value: e,
        source: t,
        stack: Df(t)
      }, Ed.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: Df(t)
    };
  }
  var Li = [], Hi = 0, Ws = null, Ra = 0, Pt = [], zt = 0, Vn = null, Kt = 1, Zt = "";
  function ln(e, t) {
    Li[Hi++] = Ra, Li[Hi++] = Ws, Ws = e, Ra = t;
  }
  function wd(e, t, n) {
    Pt[zt++] = Kt, Pt[zt++] = Zt, Pt[zt++] = Vn, Vn = e;
    var a = Kt;
    e = Zt;
    var o = 32 - St(a) - 1;
    a &= ~(1 << o), n += 1;
    var u = 32 - St(t) + o;
    if (30 < u) {
      var d = o - o % 5;
      u = (a & (1 << d) - 1).toString(32), a >>= d, o -= d, Kt = 1 << 32 - St(t) + o | n << o | a, Zt = u + e;
    } else
      Kt = 1 << u | n << o | a, Zt = e;
  }
  function cr(e) {
    e.return !== null && (ln(e, 1), wd(e, 1, 0));
  }
  function fr(e) {
    for (; e === Ws; )
      Ws = Li[--Hi], Li[Hi] = null, Ra = Li[--Hi], Li[Hi] = null;
    for (; e === Vn; )
      Vn = Pt[--zt], Pt[zt] = null, Zt = Pt[--zt], Pt[zt] = null, Kt = Pt[--zt], Pt[zt] = null;
  }
  function Vd(e, t) {
    Pt[zt++] = Kt, Pt[zt++] = Zt, Pt[zt++] = Vn, Kt = t.id, Zt = t.overflow, Vn = e;
  }
  var tt = null, ze = null, ye = !1, Tn = null, Rt = !1, dr = Error(r(519));
  function Cn(e) {
    var t = Error(
      r(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw _a(Mt(t, e)), dr;
  }
  function Td(e) {
    var t = e.stateNode, n = e.type, a = e.memoizedProps;
    switch (t[et] = e, t[dt] = a, n) {
      case "dialog":
        be("cancel", t), be("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        be("load", t);
        break;
      case "video":
      case "audio":
        for (n = 0; n < ss.length; n++)
          be(ss[n], t);
        break;
      case "source":
        be("error", t);
        break;
      case "img":
      case "image":
      case "link":
        be("error", t), be("load", t);
        break;
      case "details":
        be("toggle", t);
        break;
      case "input":
        be("invalid", t), Lf(
          t,
          a.value,
          a.defaultValue,
          a.checked,
          a.defaultChecked,
          a.type,
          a.name,
          !0
        );
        break;
      case "select":
        be("invalid", t);
        break;
      case "textarea":
        be("invalid", t), qf(t, a.value, a.defaultValue, a.children);
    }
    n = a.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || t.textContent === "" + n || a.suppressHydrationWarning === !0 || Yp(t.textContent, n) ? (a.popover != null && (be("beforetoggle", t), be("toggle", t)), a.onScroll != null && be("scroll", t), a.onScrollEnd != null && be("scrollend", t), a.onClick != null && (t.onclick = an), t = !0) : t = !1, t || Cn(e, !0);
  }
  function Cd(e) {
    for (tt = e.return; tt; )
      switch (tt.tag) {
        case 5:
        case 31:
        case 13:
          Rt = !1;
          return;
        case 27:
        case 3:
          Rt = !0;
          return;
        default:
          tt = tt.return;
      }
  }
  function qi(e) {
    if (e !== tt) return !1;
    if (!ye) return Cd(e), ye = !0, !1;
    var t = e.tag, n;
    if ((n = t !== 3 && t !== 27) && ((n = t === 5) && (n = e.type, n = !(n !== "form" && n !== "button") || Bu(e.type, e.memoizedProps)), n = !n), n && ze && Cn(e), Cd(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(r(317));
      ze = Ip(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(r(317));
      ze = Ip(e);
    } else
      t === 27 ? (t = ze, qn(e.type) ? (e = zu, zu = null, ze = e) : ze = t) : ze = tt ? Ot(e.stateNode.nextSibling) : null;
    return !0;
  }
  function ri() {
    ze = tt = null, ye = !1;
  }
  function mr() {
    var e = Tn;
    return e !== null && (bt === null ? bt = e : bt.push.apply(
      bt,
      e
    ), Tn = null), e;
  }
  function _a(e) {
    Tn === null ? Tn = [e] : Tn.push(e);
  }
  var pr = D(null), ui = null, rn = null;
  function kn(e, t, n) {
    Z(pr, t._currentValue), t._currentValue = n;
  }
  function un(e) {
    e._currentValue = pr.current, R(pr);
  }
  function hr(e, t, n) {
    for (; e !== null; ) {
      var a = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function gr(e, t, n, a) {
    var o = e.child;
    for (o !== null && (o.return = e); o !== null; ) {
      var u = o.dependencies;
      if (u !== null) {
        var d = o.child;
        u = u.firstContext;
        e: for (; u !== null; ) {
          var b = u;
          u = o;
          for (var S = 0; S < t.length; S++)
            if (b.context === t[S]) {
              u.lanes |= n, b = u.alternate, b !== null && (b.lanes |= n), hr(
                u.return,
                n,
                e
              ), a || (d = null);
              break e;
            }
          u = b.next;
        }
      } else if (o.tag === 18) {
        if (d = o.return, d === null) throw Error(r(341));
        d.lanes |= n, u = d.alternate, u !== null && (u.lanes |= n), hr(d, n, e), d = null;
      } else d = o.child;
      if (d !== null) d.return = o;
      else
        for (d = o; d !== null; ) {
          if (d === e) {
            d = null;
            break;
          }
          if (o = d.sibling, o !== null) {
            o.return = d.return, d = o;
            break;
          }
          d = d.return;
        }
      o = d;
    }
  }
  function Gi(e, t, n, a) {
    e = null;
    for (var o = t, u = !1; o !== null; ) {
      if (!u) {
        if ((o.flags & 524288) !== 0) u = !0;
        else if ((o.flags & 262144) !== 0) break;
      }
      if (o.tag === 10) {
        var d = o.alternate;
        if (d === null) throw Error(r(387));
        if (d = d.memoizedProps, d !== null) {
          var b = o.type;
          Dt(o.pendingProps.value, d.value) || (e !== null ? e.push(b) : e = [b]);
        }
      } else if (o === Ve.current) {
        if (d = o.alternate, d === null) throw Error(r(387));
        d.memoizedState.memoizedState !== o.memoizedState.memoizedState && (e !== null ? e.push(cs) : e = [cs]);
      }
      o = o.return;
    }
    e !== null && gr(
      t,
      e,
      n,
      a
    ), t.flags |= 262144;
  }
  function Is(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!Dt(
        e.context._currentValue,
        e.memoizedValue
      ))
        return !0;
      e = e.next;
    }
    return !1;
  }
  function ci(e) {
    ui = e, rn = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function nt(e) {
    return kd(ui, e);
  }
  function eo(e, t) {
    return ui === null && ci(e), kd(e, t);
  }
  function kd(e, t) {
    var n = t._currentValue;
    if (t = { context: t, memoizedValue: n, next: null }, rn === null) {
      if (e === null) throw Error(r(308));
      rn = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else rn = rn.next = t;
    return n;
  }
  var dx = typeof AbortController < "u" ? AbortController : function() {
    var e = [], t = this.signal = {
      aborted: !1,
      addEventListener: function(n, a) {
        e.push(a);
      }
    };
    this.abort = function() {
      t.aborted = !0, e.forEach(function(n) {
        return n();
      });
    };
  }, mx = i.unstable_scheduleCallback, px = i.unstable_NormalPriority, Xe = {
    $$typeof: L,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function br() {
    return {
      controller: new dx(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Oa(e) {
    e.refCount--, e.refCount === 0 && mx(px, function() {
      e.controller.abort();
    });
  }
  var Ua = null, vr = 0, Yi = 0, Xi = null;
  function hx(e, t) {
    if (Ua === null) {
      var n = Ua = [];
      vr = 0, Yi = Nu(), Xi = {
        status: "pending",
        value: void 0,
        then: function(a) {
          n.push(a);
        }
      };
    }
    return vr++, t.then(Bd, Bd), t;
  }
  function Bd() {
    if (--vr === 0 && Ua !== null) {
      Xi !== null && (Xi.status = "fulfilled");
      var e = Ua;
      Ua = null, Yi = 0, Xi = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function gx(e, t) {
    var n = [], a = {
      status: "pending",
      value: null,
      reason: null,
      then: function(o) {
        n.push(o);
      }
    };
    return e.then(
      function() {
        a.status = "fulfilled", a.value = t;
        for (var o = 0; o < n.length; o++) (0, n[o])(t);
      },
      function(o) {
        for (a.status = "rejected", a.reason = o, o = 0; o < n.length; o++)
          (0, n[o])(void 0);
      }
    ), a;
  }
  var Ad = j.S;
  j.S = function(e, t) {
    pp = yt(), typeof t == "object" && t !== null && typeof t.then == "function" && hx(e, t), Ad !== null && Ad(e, t);
  };
  var fi = D(null);
  function xr() {
    var e = fi.current;
    return e !== null ? e : je.pooledCache;
  }
  function to(e, t) {
    t === null ? Z(fi, fi.current) : Z(fi, t.pool);
  }
  function jd() {
    var e = xr();
    return e === null ? null : { parent: Xe._currentValue, pool: e };
  }
  var Fi = Error(r(460)), yr = Error(r(474)), no = Error(r(542)), io = { then: function() {
  } };
  function Md(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function Pd(e, t, n) {
    switch (n = e[n], n === void 0 ? e.push(t) : n !== t && (t.then(an, an), t = n), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, Rd(e), e;
      default:
        if (typeof t.status == "string") t.then(an, an);
        else {
          if (e = je, e !== null && 100 < e.shellSuspendCounter)
            throw Error(r(482));
          e = t, e.status = "pending", e.then(
            function(a) {
              if (t.status === "pending") {
                var o = t;
                o.status = "fulfilled", o.value = a;
              }
            },
            function(a) {
              if (t.status === "pending") {
                var o = t;
                o.status = "rejected", o.reason = a;
              }
            }
          );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw e = t.reason, Rd(e), e;
        }
        throw mi = t, Fi;
    }
  }
  function di(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (n) {
      throw n !== null && typeof n == "object" && typeof n.then == "function" ? (mi = n, Fi) : n;
    }
  }
  var mi = null;
  function zd() {
    if (mi === null) throw Error(r(459));
    var e = mi;
    return mi = null, e;
  }
  function Rd(e) {
    if (e === Fi || e === no)
      throw Error(r(483));
  }
  var Qi = null, La = 0;
  function ao(e) {
    var t = La;
    return La += 1, Qi === null && (Qi = []), Pd(Qi, e, t);
  }
  function Ha(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function so(e, t) {
    throw t.$$typeof === N ? Error(r(525)) : (e = Object.prototype.toString.call(t), Error(
      r(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function _d(e) {
    function t(w, E) {
      if (e) {
        var C = w.deletions;
        C === null ? (w.deletions = [E], w.flags |= 16) : C.push(E);
      }
    }
    function n(w, E) {
      if (!e) return null;
      for (; E !== null; )
        t(w, E), E = E.sibling;
      return null;
    }
    function a(w) {
      for (var E = /* @__PURE__ */ new Map(); w !== null; )
        w.key !== null ? E.set(w.key, w) : E.set(w.index, w), w = w.sibling;
      return E;
    }
    function o(w, E) {
      return w = on(w, E), w.index = 0, w.sibling = null, w;
    }
    function u(w, E, C) {
      return w.index = C, e ? (C = w.alternate, C !== null ? (C = C.index, C < E ? (w.flags |= 67108866, E) : C) : (w.flags |= 67108866, E)) : (w.flags |= 1048576, E);
    }
    function d(w) {
      return e && w.alternate === null && (w.flags |= 67108866), w;
    }
    function b(w, E, C, O) {
      return E === null || E.tag !== 6 ? (E = rr(C, w.mode, O), E.return = w, E) : (E = o(E, C), E.return = w, E);
    }
    function S(w, E, C, O) {
      var le = C.type;
      return le === z ? P(
        w,
        E,
        C.props.children,
        O,
        C.key
      ) : E !== null && (E.elementType === le || typeof le == "object" && le !== null && le.$$typeof === Y && di(le) === E.type) ? (E = o(E, C.props), Ha(E, C), E.return = w, E) : (E = $s(
        C.type,
        C.key,
        C.props,
        null,
        w.mode,
        O
      ), Ha(E, C), E.return = w, E);
    }
    function k(w, E, C, O) {
      return E === null || E.tag !== 4 || E.stateNode.containerInfo !== C.containerInfo || E.stateNode.implementation !== C.implementation ? (E = ur(C, w.mode, O), E.return = w, E) : (E = o(E, C.children || []), E.return = w, E);
    }
    function P(w, E, C, O, le) {
      return E === null || E.tag !== 7 ? (E = li(
        C,
        w.mode,
        O,
        le
      ), E.return = w, E) : (E = o(E, C), E.return = w, E);
    }
    function U(w, E, C) {
      if (typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint")
        return E = rr(
          "" + E,
          w.mode,
          C
        ), E.return = w, E;
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case V:
            return C = $s(
              E.type,
              E.key,
              E.props,
              null,
              w.mode,
              C
            ), Ha(C, E), C.return = w, C;
          case T:
            return E = ur(
              E,
              w.mode,
              C
            ), E.return = w, E;
          case Y:
            return E = di(E), U(w, E, C);
        }
        if (me(E) || I(E))
          return E = li(
            E,
            w.mode,
            C,
            null
          ), E.return = w, E;
        if (typeof E.then == "function")
          return U(w, ao(E), C);
        if (E.$$typeof === L)
          return U(
            w,
            eo(w, E),
            C
          );
        so(w, E);
      }
      return null;
    }
    function B(w, E, C, O) {
      var le = E !== null ? E.key : null;
      if (typeof C == "string" && C !== "" || typeof C == "number" || typeof C == "bigint")
        return le !== null ? null : b(w, E, "" + C, O);
      if (typeof C == "object" && C !== null) {
        switch (C.$$typeof) {
          case V:
            return C.key === le ? S(w, E, C, O) : null;
          case T:
            return C.key === le ? k(w, E, C, O) : null;
          case Y:
            return C = di(C), B(w, E, C, O);
        }
        if (me(C) || I(C))
          return le !== null ? null : P(w, E, C, O, null);
        if (typeof C.then == "function")
          return B(
            w,
            E,
            ao(C),
            O
          );
        if (C.$$typeof === L)
          return B(
            w,
            E,
            eo(w, C),
            O
          );
        so(w, C);
      }
      return null;
    }
    function M(w, E, C, O, le) {
      if (typeof O == "string" && O !== "" || typeof O == "number" || typeof O == "bigint")
        return w = w.get(C) || null, b(E, w, "" + O, le);
      if (typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case V:
            return w = w.get(
              O.key === null ? C : O.key
            ) || null, S(E, w, O, le);
          case T:
            return w = w.get(
              O.key === null ? C : O.key
            ) || null, k(E, w, O, le);
          case Y:
            return O = di(O), M(
              w,
              E,
              C,
              O,
              le
            );
        }
        if (me(O) || I(O))
          return w = w.get(C) || null, P(E, w, O, le, null);
        if (typeof O.then == "function")
          return M(
            w,
            E,
            C,
            ao(O),
            le
          );
        if (O.$$typeof === L)
          return M(
            w,
            E,
            C,
            eo(E, O),
            le
          );
        so(E, O);
      }
      return null;
    }
    function ie(w, E, C, O) {
      for (var le = null, De = null, se = E, he = E = 0, xe = null; se !== null && he < C.length; he++) {
        se.index > he ? (xe = se, se = null) : xe = se.sibling;
        var Ee = B(
          w,
          se,
          C[he],
          O
        );
        if (Ee === null) {
          se === null && (se = xe);
          break;
        }
        e && se && Ee.alternate === null && t(w, se), E = u(Ee, E, he), De === null ? le = Ee : De.sibling = Ee, De = Ee, se = xe;
      }
      if (he === C.length)
        return n(w, se), ye && ln(w, he), le;
      if (se === null) {
        for (; he < C.length; he++)
          se = U(w, C[he], O), se !== null && (E = u(
            se,
            E,
            he
          ), De === null ? le = se : De.sibling = se, De = se);
        return ye && ln(w, he), le;
      }
      for (se = a(se); he < C.length; he++)
        xe = M(
          se,
          w,
          he,
          C[he],
          O
        ), xe !== null && (e && xe.alternate !== null && se.delete(
          xe.key === null ? he : xe.key
        ), E = u(
          xe,
          E,
          he
        ), De === null ? le = xe : De.sibling = xe, De = xe);
      return e && se.forEach(function(Qn) {
        return t(w, Qn);
      }), ye && ln(w, he), le;
    }
    function re(w, E, C, O) {
      if (C == null) throw Error(r(151));
      for (var le = null, De = null, se = E, he = E = 0, xe = null, Ee = C.next(); se !== null && !Ee.done; he++, Ee = C.next()) {
        se.index > he ? (xe = se, se = null) : xe = se.sibling;
        var Qn = B(w, se, Ee.value, O);
        if (Qn === null) {
          se === null && (se = xe);
          break;
        }
        e && se && Qn.alternate === null && t(w, se), E = u(Qn, E, he), De === null ? le = Qn : De.sibling = Qn, De = Qn, se = xe;
      }
      if (Ee.done)
        return n(w, se), ye && ln(w, he), le;
      if (se === null) {
        for (; !Ee.done; he++, Ee = C.next())
          Ee = U(w, Ee.value, O), Ee !== null && (E = u(Ee, E, he), De === null ? le = Ee : De.sibling = Ee, De = Ee);
        return ye && ln(w, he), le;
      }
      for (se = a(se); !Ee.done; he++, Ee = C.next())
        Ee = M(se, w, he, Ee.value, O), Ee !== null && (e && Ee.alternate !== null && se.delete(Ee.key === null ? he : Ee.key), E = u(Ee, E, he), De === null ? le = Ee : De.sibling = Ee, De = Ee);
      return e && se.forEach(function(T1) {
        return t(w, T1);
      }), ye && ln(w, he), le;
    }
    function Ae(w, E, C, O) {
      if (typeof C == "object" && C !== null && C.type === z && C.key === null && (C = C.props.children), typeof C == "object" && C !== null) {
        switch (C.$$typeof) {
          case V:
            e: {
              for (var le = C.key; E !== null; ) {
                if (E.key === le) {
                  if (le = C.type, le === z) {
                    if (E.tag === 7) {
                      n(
                        w,
                        E.sibling
                      ), O = o(
                        E,
                        C.props.children
                      ), O.return = w, w = O;
                      break e;
                    }
                  } else if (E.elementType === le || typeof le == "object" && le !== null && le.$$typeof === Y && di(le) === E.type) {
                    n(
                      w,
                      E.sibling
                    ), O = o(E, C.props), Ha(O, C), O.return = w, w = O;
                    break e;
                  }
                  n(w, E);
                  break;
                } else t(w, E);
                E = E.sibling;
              }
              C.type === z ? (O = li(
                C.props.children,
                w.mode,
                O,
                C.key
              ), O.return = w, w = O) : (O = $s(
                C.type,
                C.key,
                C.props,
                null,
                w.mode,
                O
              ), Ha(O, C), O.return = w, w = O);
            }
            return d(w);
          case T:
            e: {
              for (le = C.key; E !== null; ) {
                if (E.key === le)
                  if (E.tag === 4 && E.stateNode.containerInfo === C.containerInfo && E.stateNode.implementation === C.implementation) {
                    n(
                      w,
                      E.sibling
                    ), O = o(E, C.children || []), O.return = w, w = O;
                    break e;
                  } else {
                    n(w, E);
                    break;
                  }
                else t(w, E);
                E = E.sibling;
              }
              O = ur(C, w.mode, O), O.return = w, w = O;
            }
            return d(w);
          case Y:
            return C = di(C), Ae(
              w,
              E,
              C,
              O
            );
        }
        if (me(C))
          return ie(
            w,
            E,
            C,
            O
          );
        if (I(C)) {
          if (le = I(C), typeof le != "function") throw Error(r(150));
          return C = le.call(C), re(
            w,
            E,
            C,
            O
          );
        }
        if (typeof C.then == "function")
          return Ae(
            w,
            E,
            ao(C),
            O
          );
        if (C.$$typeof === L)
          return Ae(
            w,
            E,
            eo(w, C),
            O
          );
        so(w, C);
      }
      return typeof C == "string" && C !== "" || typeof C == "number" || typeof C == "bigint" ? (C = "" + C, E !== null && E.tag === 6 ? (n(w, E.sibling), O = o(E, C), O.return = w, w = O) : (n(w, E), O = rr(C, w.mode, O), O.return = w, w = O), d(w)) : n(w, E);
    }
    return function(w, E, C, O) {
      try {
        La = 0;
        var le = Ae(
          w,
          E,
          C,
          O
        );
        return Qi = null, le;
      } catch (se) {
        if (se === Fi || se === no) throw se;
        var De = Et(29, se, null, w.mode);
        return De.lanes = O, De.return = w, De;
      } finally {
      }
    };
  }
  var pi = _d(!0), Od = _d(!1), Bn = !1;
  function Nr(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Sr(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    });
  }
  function An(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function jn(e, t, n) {
    var a = e.updateQueue;
    if (a === null) return null;
    if (a = a.shared, (we & 2) !== 0) {
      var o = a.pending;
      return o === null ? t.next = t : (t.next = o.next, o.next = t), a.pending = t, t = Js(e), Nd(e, null, n), t;
    }
    return Zs(e, a, t, n), Js(e);
  }
  function qa(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194048) !== 0)) {
      var a = t.lanes;
      a &= e.pendingLanes, n |= a, t.lanes = n, kf(e, n);
    }
  }
  function Dr(e, t) {
    var n = e.updateQueue, a = e.alternate;
    if (a !== null && (a = a.updateQueue, n === a)) {
      var o = null, u = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var d = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null
          };
          u === null ? o = u = d : u = u.next = d, n = n.next;
        } while (n !== null);
        u === null ? o = u = t : u = u.next = t;
      } else o = u = t;
      n = {
        baseState: a.baseState,
        firstBaseUpdate: o,
        lastBaseUpdate: u,
        shared: a.shared,
        callbacks: a.callbacks
      }, e.updateQueue = n;
      return;
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
  }
  var Er = !1;
  function Ga() {
    if (Er) {
      var e = Xi;
      if (e !== null) throw e;
    }
  }
  function Ya(e, t, n, a) {
    Er = !1;
    var o = e.updateQueue;
    Bn = !1;
    var u = o.firstBaseUpdate, d = o.lastBaseUpdate, b = o.shared.pending;
    if (b !== null) {
      o.shared.pending = null;
      var S = b, k = S.next;
      S.next = null, d === null ? u = k : d.next = k, d = S;
      var P = e.alternate;
      P !== null && (P = P.updateQueue, b = P.lastBaseUpdate, b !== d && (b === null ? P.firstBaseUpdate = k : b.next = k, P.lastBaseUpdate = S));
    }
    if (u !== null) {
      var U = o.baseState;
      d = 0, P = k = S = null, b = u;
      do {
        var B = b.lane & -536870913, M = B !== b.lane;
        if (M ? (ve & B) === B : (a & B) === B) {
          B !== 0 && B === Yi && (Er = !0), P !== null && (P = P.next = {
            lane: 0,
            tag: b.tag,
            payload: b.payload,
            callback: null,
            next: null
          });
          e: {
            var ie = e, re = b;
            B = t;
            var Ae = n;
            switch (re.tag) {
              case 1:
                if (ie = re.payload, typeof ie == "function") {
                  U = ie.call(Ae, U, B);
                  break e;
                }
                U = ie;
                break e;
              case 3:
                ie.flags = ie.flags & -65537 | 128;
              case 0:
                if (ie = re.payload, B = typeof ie == "function" ? ie.call(Ae, U, B) : ie, B == null) break e;
                U = y({}, U, B);
                break e;
              case 2:
                Bn = !0;
            }
          }
          B = b.callback, B !== null && (e.flags |= 64, M && (e.flags |= 8192), M = o.callbacks, M === null ? o.callbacks = [B] : M.push(B));
        } else
          M = {
            lane: B,
            tag: b.tag,
            payload: b.payload,
            callback: b.callback,
            next: null
          }, P === null ? (k = P = M, S = U) : P = P.next = M, d |= B;
        if (b = b.next, b === null) {
          if (b = o.shared.pending, b === null)
            break;
          M = b, b = M.next, M.next = null, o.lastBaseUpdate = M, o.shared.pending = null;
        }
      } while (!0);
      P === null && (S = U), o.baseState = S, o.firstBaseUpdate = k, o.lastBaseUpdate = P, u === null && (o.shared.lanes = 0), _n |= d, e.lanes = d, e.memoizedState = U;
    }
  }
  function Ud(e, t) {
    if (typeof e != "function")
      throw Error(r(191, e));
    e.call(t);
  }
  function Ld(e, t) {
    var n = e.callbacks;
    if (n !== null)
      for (e.callbacks = null, e = 0; e < n.length; e++)
        Ud(n[e], t);
  }
  var Ki = D(null), oo = D(0);
  function Hd(e, t) {
    e = vn, Z(oo, e), Z(Ki, t), vn = e | t.baseLanes;
  }
  function wr() {
    Z(oo, vn), Z(Ki, Ki.current);
  }
  function Vr() {
    vn = oo.current, R(Ki), R(oo);
  }
  var wt = D(null), _t = null;
  function Mn(e) {
    var t = e.alternate;
    Z(Ge, Ge.current & 1), Z(wt, e), _t === null && (t === null || Ki.current !== null || t.memoizedState !== null) && (_t = e);
  }
  function Tr(e) {
    Z(Ge, Ge.current), Z(wt, e), _t === null && (_t = e);
  }
  function qd(e) {
    e.tag === 22 ? (Z(Ge, Ge.current), Z(wt, e), _t === null && (_t = e)) : Pn();
  }
  function Pn() {
    Z(Ge, Ge.current), Z(wt, wt.current);
  }
  function Vt(e) {
    R(wt), _t === e && (_t = null), R(Ge);
  }
  var Ge = D(0);
  function lo(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || Mu(n) || Pu(n)))
          return t;
      } else if (t.tag === 19 && (t.memoizedProps.revealOrder === "forwards" || t.memoizedProps.revealOrder === "backwards" || t.memoizedProps.revealOrder === "unstable_legacy-backwards" || t.memoizedProps.revealOrder === "together")) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var cn = 0, pe = null, ke = null, Fe = null, ro = !1, Zi = !1, hi = !1, uo = 0, Xa = 0, Ji = null, bx = 0;
  function Le() {
    throw Error(r(321));
  }
  function Cr(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!Dt(e[n], t[n])) return !1;
    return !0;
  }
  function kr(e, t, n, a, o, u) {
    return cn = u, pe = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, j.H = e === null || e.memoizedState === null ? wm : Yr, hi = !1, u = n(a, o), hi = !1, Zi && (u = Yd(
      t,
      n,
      a,
      o
    )), Gd(e), u;
  }
  function Gd(e) {
    j.H = Ka;
    var t = ke !== null && ke.next !== null;
    if (cn = 0, Fe = ke = pe = null, ro = !1, Xa = 0, Ji = null, t) throw Error(r(300));
    e === null || Qe || (e = e.dependencies, e !== null && Is(e) && (Qe = !0));
  }
  function Yd(e, t, n, a) {
    pe = e;
    var o = 0;
    do {
      if (Zi && (Ji = null), Xa = 0, Zi = !1, 25 <= o) throw Error(r(301));
      if (o += 1, Fe = ke = null, e.updateQueue != null) {
        var u = e.updateQueue;
        u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0);
      }
      j.H = Vm, u = t(n, a);
    } while (Zi);
    return u;
  }
  function vx() {
    var e = j.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? Fa(t) : t, e = e.useState()[0], (ke !== null ? ke.memoizedState : null) !== e && (pe.flags |= 1024), t;
  }
  function Br() {
    var e = uo !== 0;
    return uo = 0, e;
  }
  function Ar(e, t, n) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~n;
  }
  function jr(e) {
    if (ro) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      ro = !1;
    }
    cn = 0, Fe = ke = pe = null, Zi = !1, Xa = uo = 0, Ji = null;
  }
  function ut() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Fe === null ? pe.memoizedState = Fe = e : Fe = Fe.next = e, Fe;
  }
  function Ye() {
    if (ke === null) {
      var e = pe.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = ke.next;
    var t = Fe === null ? pe.memoizedState : Fe.next;
    if (t !== null)
      Fe = t, ke = e;
    else {
      if (e === null)
        throw pe.alternate === null ? Error(r(467)) : Error(r(310));
      ke = e, e = {
        memoizedState: ke.memoizedState,
        baseState: ke.baseState,
        baseQueue: ke.baseQueue,
        queue: ke.queue,
        next: null
      }, Fe === null ? pe.memoizedState = Fe = e : Fe = Fe.next = e;
    }
    return Fe;
  }
  function co() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Fa(e) {
    var t = Xa;
    return Xa += 1, Ji === null && (Ji = []), e = Pd(Ji, e, t), t = pe, (Fe === null ? t.memoizedState : Fe.next) === null && (t = t.alternate, j.H = t === null || t.memoizedState === null ? wm : Yr), e;
  }
  function fo(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Fa(e);
      if (e.$$typeof === L) return nt(e);
    }
    throw Error(r(438, String(e)));
  }
  function Mr(e) {
    var t = null, n = pe.updateQueue;
    if (n !== null && (t = n.memoCache), t == null) {
      var a = pe.alternate;
      a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (t = {
        data: a.data.map(function(o) {
          return o.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), n === null && (n = co(), pe.updateQueue = n), n.memoCache = t, n = t.data[t.index], n === void 0)
      for (n = t.data[t.index] = Array(e), a = 0; a < e; a++)
        n[a] = te;
    return t.index++, n;
  }
  function fn(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function mo(e) {
    var t = Ye();
    return Pr(t, ke, e);
  }
  function Pr(e, t, n) {
    var a = e.queue;
    if (a === null) throw Error(r(311));
    a.lastRenderedReducer = n;
    var o = e.baseQueue, u = a.pending;
    if (u !== null) {
      if (o !== null) {
        var d = o.next;
        o.next = u.next, u.next = d;
      }
      t.baseQueue = o = u, a.pending = null;
    }
    if (u = e.baseState, o === null) e.memoizedState = u;
    else {
      t = o.next;
      var b = d = null, S = null, k = t, P = !1;
      do {
        var U = k.lane & -536870913;
        if (U !== k.lane ? (ve & U) === U : (cn & U) === U) {
          var B = k.revertLane;
          if (B === 0)
            S !== null && (S = S.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: k.action,
              hasEagerState: k.hasEagerState,
              eagerState: k.eagerState,
              next: null
            }), U === Yi && (P = !0);
          else if ((cn & B) === B) {
            k = k.next, B === Yi && (P = !0);
            continue;
          } else
            U = {
              lane: 0,
              revertLane: k.revertLane,
              gesture: null,
              action: k.action,
              hasEagerState: k.hasEagerState,
              eagerState: k.eagerState,
              next: null
            }, S === null ? (b = S = U, d = u) : S = S.next = U, pe.lanes |= B, _n |= B;
          U = k.action, hi && n(u, U), u = k.hasEagerState ? k.eagerState : n(u, U);
        } else
          B = {
            lane: U,
            revertLane: k.revertLane,
            gesture: k.gesture,
            action: k.action,
            hasEagerState: k.hasEagerState,
            eagerState: k.eagerState,
            next: null
          }, S === null ? (b = S = B, d = u) : S = S.next = B, pe.lanes |= U, _n |= U;
        k = k.next;
      } while (k !== null && k !== t);
      if (S === null ? d = u : S.next = b, !Dt(u, e.memoizedState) && (Qe = !0, P && (n = Xi, n !== null)))
        throw n;
      e.memoizedState = u, e.baseState = d, e.baseQueue = S, a.lastRenderedState = u;
    }
    return o === null && (a.lanes = 0), [e.memoizedState, a.dispatch];
  }
  function zr(e) {
    var t = Ye(), n = t.queue;
    if (n === null) throw Error(r(311));
    n.lastRenderedReducer = e;
    var a = n.dispatch, o = n.pending, u = t.memoizedState;
    if (o !== null) {
      n.pending = null;
      var d = o = o.next;
      do
        u = e(u, d.action), d = d.next;
      while (d !== o);
      Dt(u, t.memoizedState) || (Qe = !0), t.memoizedState = u, t.baseQueue === null && (t.baseState = u), n.lastRenderedState = u;
    }
    return [u, a];
  }
  function Xd(e, t, n) {
    var a = pe, o = Ye(), u = ye;
    if (u) {
      if (n === void 0) throw Error(r(407));
      n = n();
    } else n = t();
    var d = !Dt(
      (ke || o).memoizedState,
      n
    );
    if (d && (o.memoizedState = n, Qe = !0), o = o.queue, Or(Kd.bind(null, a, o, e), [
      e
    ]), o.getSnapshot !== t || d || Fe !== null && Fe.memoizedState.tag & 1) {
      if (a.flags |= 2048, $i(
        9,
        { destroy: void 0 },
        Qd.bind(
          null,
          a,
          o,
          n,
          t
        ),
        null
      ), je === null) throw Error(r(349));
      u || (cn & 127) !== 0 || Fd(a, t, n);
    }
    return n;
  }
  function Fd(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = pe.updateQueue, t === null ? (t = co(), pe.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function Qd(e, t, n, a) {
    t.value = n, t.getSnapshot = a, Zd(t) && Jd(e);
  }
  function Kd(e, t, n) {
    return n(function() {
      Zd(t) && Jd(e);
    });
  }
  function Zd(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Dt(e, n);
    } catch {
      return !0;
    }
  }
  function Jd(e) {
    var t = oi(e, 2);
    t !== null && vt(t, e, 2);
  }
  function Rr(e) {
    var t = ut();
    if (typeof e == "function") {
      var n = e;
      if (e = n(), hi) {
        Dn(!0);
        try {
          n();
        } finally {
          Dn(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = e, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: fn,
      lastRenderedState: e
    }, t;
  }
  function $d(e, t, n, a) {
    return e.baseState = n, Pr(
      e,
      ke,
      typeof a == "function" ? a : fn
    );
  }
  function xx(e, t, n, a, o) {
    if (go(e)) throw Error(r(485));
    if (e = t.action, e !== null) {
      var u = {
        payload: o,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(d) {
          u.listeners.push(d);
        }
      };
      j.T !== null ? n(!0) : u.isTransition = !1, a(u), n = t.pending, n === null ? (u.next = t.pending = u, Wd(t, u)) : (u.next = n.next, t.pending = n.next = u);
    }
  }
  function Wd(e, t) {
    var n = t.action, a = t.payload, o = e.state;
    if (t.isTransition) {
      var u = j.T, d = {};
      j.T = d;
      try {
        var b = n(o, a), S = j.S;
        S !== null && S(d, b), Id(e, t, b);
      } catch (k) {
        _r(e, t, k);
      } finally {
        u !== null && d.types !== null && (u.types = d.types), j.T = u;
      }
    } else
      try {
        u = n(o, a), Id(e, t, u);
      } catch (k) {
        _r(e, t, k);
      }
  }
  function Id(e, t, n) {
    n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(
      function(a) {
        em(e, t, a);
      },
      function(a) {
        return _r(e, t, a);
      }
    ) : em(e, t, n);
  }
  function em(e, t, n) {
    t.status = "fulfilled", t.value = n, tm(t), e.state = n, t = e.pending, t !== null && (n = t.next, n === t ? e.pending = null : (n = n.next, t.next = n, Wd(e, n)));
  }
  function _r(e, t, n) {
    var a = e.pending;
    if (e.pending = null, a !== null) {
      a = a.next;
      do
        t.status = "rejected", t.reason = n, tm(t), t = t.next;
      while (t !== a);
    }
    e.action = null;
  }
  function tm(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function nm(e, t) {
    return t;
  }
  function im(e, t) {
    if (ye) {
      var n = je.formState;
      if (n !== null) {
        e: {
          var a = pe;
          if (ye) {
            if (ze) {
              t: {
                for (var o = ze, u = Rt; o.nodeType !== 8; ) {
                  if (!u) {
                    o = null;
                    break t;
                  }
                  if (o = Ot(
                    o.nextSibling
                  ), o === null) {
                    o = null;
                    break t;
                  }
                }
                u = o.data, o = u === "F!" || u === "F" ? o : null;
              }
              if (o) {
                ze = Ot(
                  o.nextSibling
                ), a = o.data === "F!";
                break e;
              }
            }
            Cn(a);
          }
          a = !1;
        }
        a && (t = n[0]);
      }
    }
    return n = ut(), n.memoizedState = n.baseState = t, a = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: nm,
      lastRenderedState: t
    }, n.queue = a, n = Sm.bind(
      null,
      pe,
      a
    ), a.dispatch = n, a = Rr(!1), u = Gr.bind(
      null,
      pe,
      !1,
      a.queue
    ), a = ut(), o = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, a.queue = o, n = xx.bind(
      null,
      pe,
      o,
      u,
      n
    ), o.dispatch = n, a.memoizedState = e, [t, n, !1];
  }
  function am(e) {
    var t = Ye();
    return sm(t, ke, e);
  }
  function sm(e, t, n) {
    if (t = Pr(
      e,
      t,
      nm
    )[0], e = mo(fn)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var a = Fa(t);
      } catch (d) {
        throw d === Fi ? no : d;
      }
    else a = t;
    t = Ye();
    var o = t.queue, u = o.dispatch;
    return n !== t.memoizedState && (pe.flags |= 2048, $i(
      9,
      { destroy: void 0 },
      yx.bind(null, o, n),
      null
    )), [a, u, e];
  }
  function yx(e, t) {
    e.action = t;
  }
  function om(e) {
    var t = Ye(), n = ke;
    if (n !== null)
      return sm(t, n, e);
    Ye(), t = t.memoizedState, n = Ye();
    var a = n.queue.dispatch;
    return n.memoizedState = e, [t, a, !1];
  }
  function $i(e, t, n, a) {
    return e = { tag: e, create: n, deps: a, inst: t, next: null }, t = pe.updateQueue, t === null && (t = co(), pe.updateQueue = t), n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (a = n.next, n.next = e, e.next = a, t.lastEffect = e), e;
  }
  function lm() {
    return Ye().memoizedState;
  }
  function po(e, t, n, a) {
    var o = ut();
    pe.flags |= e, o.memoizedState = $i(
      1 | t,
      { destroy: void 0 },
      n,
      a === void 0 ? null : a
    );
  }
  function ho(e, t, n, a) {
    var o = Ye();
    a = a === void 0 ? null : a;
    var u = o.memoizedState.inst;
    ke !== null && a !== null && Cr(a, ke.memoizedState.deps) ? o.memoizedState = $i(t, u, n, a) : (pe.flags |= e, o.memoizedState = $i(
      1 | t,
      u,
      n,
      a
    ));
  }
  function rm(e, t) {
    po(8390656, 8, e, t);
  }
  function Or(e, t) {
    ho(2048, 8, e, t);
  }
  function Nx(e) {
    pe.flags |= 4;
    var t = pe.updateQueue;
    if (t === null)
      t = co(), pe.updateQueue = t, t.events = [e];
    else {
      var n = t.events;
      n === null ? t.events = [e] : n.push(e);
    }
  }
  function um(e) {
    var t = Ye().memoizedState;
    return Nx({ ref: t, nextImpl: e }), function() {
      if ((we & 2) !== 0) throw Error(r(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function cm(e, t) {
    return ho(4, 2, e, t);
  }
  function fm(e, t) {
    return ho(4, 4, e, t);
  }
  function dm(e, t) {
    if (typeof t == "function") {
      e = e();
      var n = t(e);
      return function() {
        typeof n == "function" ? n() : t(null);
      };
    }
    if (t != null)
      return e = e(), t.current = e, function() {
        t.current = null;
      };
  }
  function mm(e, t, n) {
    n = n != null ? n.concat([e]) : null, ho(4, 4, dm.bind(null, t, e), n);
  }
  function Ur() {
  }
  function pm(e, t) {
    var n = Ye();
    t = t === void 0 ? null : t;
    var a = n.memoizedState;
    return t !== null && Cr(t, a[1]) ? a[0] : (n.memoizedState = [e, t], e);
  }
  function hm(e, t) {
    var n = Ye();
    t = t === void 0 ? null : t;
    var a = n.memoizedState;
    if (t !== null && Cr(t, a[1]))
      return a[0];
    if (a = e(), hi) {
      Dn(!0);
      try {
        e();
      } finally {
        Dn(!1);
      }
    }
    return n.memoizedState = [a, t], a;
  }
  function Lr(e, t, n) {
    return n === void 0 || (cn & 1073741824) !== 0 && (ve & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = n, e = gp(), pe.lanes |= e, _n |= e, n);
  }
  function gm(e, t, n, a) {
    return Dt(n, t) ? n : Ki.current !== null ? (e = Lr(e, n, a), Dt(e, t) || (Qe = !0), e) : (cn & 42) === 0 || (cn & 1073741824) !== 0 && (ve & 261930) === 0 ? (Qe = !0, e.memoizedState = n) : (e = gp(), pe.lanes |= e, _n |= e, t);
  }
  function bm(e, t, n, a, o) {
    var u = $.p;
    $.p = u !== 0 && 8 > u ? u : 8;
    var d = j.T, b = {};
    j.T = b, Gr(e, !1, t, n);
    try {
      var S = o(), k = j.S;
      if (k !== null && k(b, S), S !== null && typeof S == "object" && typeof S.then == "function") {
        var P = gx(
          S,
          a
        );
        Qa(
          e,
          t,
          P,
          kt(e)
        );
      } else
        Qa(
          e,
          t,
          a,
          kt(e)
        );
    } catch (U) {
      Qa(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: U },
        kt()
      );
    } finally {
      $.p = u, d !== null && b.types !== null && (d.types = b.types), j.T = d;
    }
  }
  function Sx() {
  }
  function Hr(e, t, n, a) {
    if (e.tag !== 5) throw Error(r(476));
    var o = vm(e).queue;
    bm(
      e,
      o,
      t,
      Q,
      n === null ? Sx : function() {
        return xm(e), n(a);
      }
    );
  }
  function vm(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: Q,
      baseState: Q,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: fn,
        lastRenderedState: Q
      },
      next: null
    };
    var n = {};
    return t.next = {
      memoizedState: n,
      baseState: n,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: fn,
        lastRenderedState: n
      },
      next: null
    }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
  }
  function xm(e) {
    var t = vm(e);
    t.next === null && (t = e.alternate.memoizedState), Qa(
      e,
      t.next.queue,
      {},
      kt()
    );
  }
  function qr() {
    return nt(cs);
  }
  function ym() {
    return Ye().memoizedState;
  }
  function Nm() {
    return Ye().memoizedState;
  }
  function Dx(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var n = kt();
          e = An(n);
          var a = jn(t, e, n);
          a !== null && (vt(a, t, n), qa(a, t, n)), t = { cache: br() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function Ex(e, t, n) {
    var a = kt();
    n = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, go(e) ? Dm(t, n) : (n = or(e, t, n, a), n !== null && (vt(n, e, a), Em(n, t, a)));
  }
  function Sm(e, t, n) {
    var a = kt();
    Qa(e, t, n, a);
  }
  function Qa(e, t, n, a) {
    var o = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (go(e)) Dm(t, o);
    else {
      var u = e.alternate;
      if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = t.lastRenderedReducer, u !== null))
        try {
          var d = t.lastRenderedState, b = u(d, n);
          if (o.hasEagerState = !0, o.eagerState = b, Dt(b, d))
            return Zs(e, t, o, 0), je === null && Ks(), !1;
        } catch {
        } finally {
        }
      if (n = or(e, t, o, a), n !== null)
        return vt(n, e, a), Em(n, t, a), !0;
    }
    return !1;
  }
  function Gr(e, t, n, a) {
    if (a = {
      lane: 2,
      revertLane: Nu(),
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, go(e)) {
      if (t) throw Error(r(479));
    } else
      t = or(
        e,
        n,
        a,
        2
      ), t !== null && vt(t, e, 2);
  }
  function go(e) {
    var t = e.alternate;
    return e === pe || t !== null && t === pe;
  }
  function Dm(e, t) {
    Zi = ro = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function Em(e, t, n) {
    if ((n & 4194048) !== 0) {
      var a = t.lanes;
      a &= e.pendingLanes, n |= a, t.lanes = n, kf(e, n);
    }
  }
  var Ka = {
    readContext: nt,
    use: fo,
    useCallback: Le,
    useContext: Le,
    useEffect: Le,
    useImperativeHandle: Le,
    useLayoutEffect: Le,
    useInsertionEffect: Le,
    useMemo: Le,
    useReducer: Le,
    useRef: Le,
    useState: Le,
    useDebugValue: Le,
    useDeferredValue: Le,
    useTransition: Le,
    useSyncExternalStore: Le,
    useId: Le,
    useHostTransitionStatus: Le,
    useFormState: Le,
    useActionState: Le,
    useOptimistic: Le,
    useMemoCache: Le,
    useCacheRefresh: Le
  };
  Ka.useEffectEvent = Le;
  var wm = {
    readContext: nt,
    use: fo,
    useCallback: function(e, t) {
      return ut().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: nt,
    useEffect: rm,
    useImperativeHandle: function(e, t, n) {
      n = n != null ? n.concat([e]) : null, po(
        4194308,
        4,
        dm.bind(null, t, e),
        n
      );
    },
    useLayoutEffect: function(e, t) {
      return po(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      po(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var n = ut();
      t = t === void 0 ? null : t;
      var a = e();
      if (hi) {
        Dn(!0);
        try {
          e();
        } finally {
          Dn(!1);
        }
      }
      return n.memoizedState = [a, t], a;
    },
    useReducer: function(e, t, n) {
      var a = ut();
      if (n !== void 0) {
        var o = n(t);
        if (hi) {
          Dn(!0);
          try {
            n(t);
          } finally {
            Dn(!1);
          }
        }
      } else o = t;
      return a.memoizedState = a.baseState = o, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: o
      }, a.queue = e, e = e.dispatch = Ex.bind(
        null,
        pe,
        e
      ), [a.memoizedState, e];
    },
    useRef: function(e) {
      var t = ut();
      return e = { current: e }, t.memoizedState = e;
    },
    useState: function(e) {
      e = Rr(e);
      var t = e.queue, n = Sm.bind(null, pe, t);
      return t.dispatch = n, [e.memoizedState, n];
    },
    useDebugValue: Ur,
    useDeferredValue: function(e, t) {
      var n = ut();
      return Lr(n, e, t);
    },
    useTransition: function() {
      var e = Rr(!1);
      return e = bm.bind(
        null,
        pe,
        e.queue,
        !0,
        !1
      ), ut().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, n) {
      var a = pe, o = ut();
      if (ye) {
        if (n === void 0)
          throw Error(r(407));
        n = n();
      } else {
        if (n = t(), je === null)
          throw Error(r(349));
        (ve & 127) !== 0 || Fd(a, t, n);
      }
      o.memoizedState = n;
      var u = { value: n, getSnapshot: t };
      return o.queue = u, rm(Kd.bind(null, a, u, e), [
        e
      ]), a.flags |= 2048, $i(
        9,
        { destroy: void 0 },
        Qd.bind(
          null,
          a,
          u,
          n,
          t
        ),
        null
      ), n;
    },
    useId: function() {
      var e = ut(), t = je.identifierPrefix;
      if (ye) {
        var n = Zt, a = Kt;
        n = (a & ~(1 << 32 - St(a) - 1)).toString(32) + n, t = "_" + t + "R_" + n, n = uo++, 0 < n && (t += "H" + n.toString(32)), t += "_";
      } else
        n = bx++, t = "_" + t + "r_" + n.toString(32) + "_";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: qr,
    useFormState: im,
    useActionState: im,
    useOptimistic: function(e) {
      var t = ut();
      t.memoizedState = t.baseState = e;
      var n = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = n, t = Gr.bind(
        null,
        pe,
        !0,
        n
      ), n.dispatch = t, [e, t];
    },
    useMemoCache: Mr,
    useCacheRefresh: function() {
      return ut().memoizedState = Dx.bind(
        null,
        pe
      );
    },
    useEffectEvent: function(e) {
      var t = ut(), n = { impl: e };
      return t.memoizedState = n, function() {
        if ((we & 2) !== 0)
          throw Error(r(440));
        return n.impl.apply(void 0, arguments);
      };
    }
  }, Yr = {
    readContext: nt,
    use: fo,
    useCallback: pm,
    useContext: nt,
    useEffect: Or,
    useImperativeHandle: mm,
    useInsertionEffect: cm,
    useLayoutEffect: fm,
    useMemo: hm,
    useReducer: mo,
    useRef: lm,
    useState: function() {
      return mo(fn);
    },
    useDebugValue: Ur,
    useDeferredValue: function(e, t) {
      var n = Ye();
      return gm(
        n,
        ke.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = mo(fn)[0], t = Ye().memoizedState;
      return [
        typeof e == "boolean" ? e : Fa(e),
        t
      ];
    },
    useSyncExternalStore: Xd,
    useId: ym,
    useHostTransitionStatus: qr,
    useFormState: am,
    useActionState: am,
    useOptimistic: function(e, t) {
      var n = Ye();
      return $d(n, ke, e, t);
    },
    useMemoCache: Mr,
    useCacheRefresh: Nm
  };
  Yr.useEffectEvent = um;
  var Vm = {
    readContext: nt,
    use: fo,
    useCallback: pm,
    useContext: nt,
    useEffect: Or,
    useImperativeHandle: mm,
    useInsertionEffect: cm,
    useLayoutEffect: fm,
    useMemo: hm,
    useReducer: zr,
    useRef: lm,
    useState: function() {
      return zr(fn);
    },
    useDebugValue: Ur,
    useDeferredValue: function(e, t) {
      var n = Ye();
      return ke === null ? Lr(n, e, t) : gm(
        n,
        ke.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = zr(fn)[0], t = Ye().memoizedState;
      return [
        typeof e == "boolean" ? e : Fa(e),
        t
      ];
    },
    useSyncExternalStore: Xd,
    useId: ym,
    useHostTransitionStatus: qr,
    useFormState: om,
    useActionState: om,
    useOptimistic: function(e, t) {
      var n = Ye();
      return ke !== null ? $d(n, ke, e, t) : (n.baseState = e, [e, n.queue.dispatch]);
    },
    useMemoCache: Mr,
    useCacheRefresh: Nm
  };
  Vm.useEffectEvent = um;
  function Xr(e, t, n, a) {
    t = e.memoizedState, n = n(a, t), n = n == null ? t : y({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Fr = {
    enqueueSetState: function(e, t, n) {
      e = e._reactInternals;
      var a = kt(), o = An(a);
      o.payload = t, n != null && (o.callback = n), t = jn(e, o, a), t !== null && (vt(t, e, a), qa(t, e, a));
    },
    enqueueReplaceState: function(e, t, n) {
      e = e._reactInternals;
      var a = kt(), o = An(a);
      o.tag = 1, o.payload = t, n != null && (o.callback = n), t = jn(e, o, a), t !== null && (vt(t, e, a), qa(t, e, a));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var n = kt(), a = An(n);
      a.tag = 2, t != null && (a.callback = t), t = jn(e, a, n), t !== null && (vt(t, e, n), qa(t, e, n));
    }
  };
  function Tm(e, t, n, a, o, u, d) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(a, u, d) : t.prototype && t.prototype.isPureReactComponent ? !Pa(n, a) || !Pa(o, u) : !0;
  }
  function Cm(e, t, n, a) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, a), t.state !== e && Fr.enqueueReplaceState(t, t.state, null);
  }
  function gi(e, t) {
    var n = t;
    if ("ref" in t) {
      n = {};
      for (var a in t)
        a !== "ref" && (n[a] = t[a]);
    }
    if (e = e.defaultProps) {
      n === t && (n = y({}, n));
      for (var o in e)
        n[o] === void 0 && (n[o] = e[o]);
    }
    return n;
  }
  function km(e) {
    Qs(e);
  }
  function Bm(e) {
    console.error(e);
  }
  function Am(e) {
    Qs(e);
  }
  function bo(e, t) {
    try {
      var n = e.onUncaughtError;
      n(t.value, { componentStack: t.stack });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function jm(e, t, n) {
    try {
      var a = e.onCaughtError;
      a(n.value, {
        componentStack: n.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      });
    } catch (o) {
      setTimeout(function() {
        throw o;
      });
    }
  }
  function Qr(e, t, n) {
    return n = An(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
      bo(e, t);
    }, n;
  }
  function Mm(e) {
    return e = An(e), e.tag = 3, e;
  }
  function Pm(e, t, n, a) {
    var o = n.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var u = a.value;
      e.payload = function() {
        return o(u);
      }, e.callback = function() {
        jm(t, n, a);
      };
    }
    var d = n.stateNode;
    d !== null && typeof d.componentDidCatch == "function" && (e.callback = function() {
      jm(t, n, a), typeof o != "function" && (On === null ? On = /* @__PURE__ */ new Set([this]) : On.add(this));
      var b = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: b !== null ? b : ""
      });
    });
  }
  function wx(e, t, n, a, o) {
    if (n.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (t = n.alternate, t !== null && Gi(
        t,
        n,
        o,
        !0
      ), n = wt.current, n !== null) {
        switch (n.tag) {
          case 31:
          case 13:
            return _t === null ? ko() : n.alternate === null && He === 0 && (He = 3), n.flags &= -257, n.flags |= 65536, n.lanes = o, a === io ? n.flags |= 16384 : (t = n.updateQueue, t === null ? n.updateQueue = /* @__PURE__ */ new Set([a]) : t.add(a), vu(e, a, o)), !1;
          case 22:
            return n.flags |= 65536, a === io ? n.flags |= 16384 : (t = n.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, n.updateQueue = t) : (n = t.retryQueue, n === null ? t.retryQueue = /* @__PURE__ */ new Set([a]) : n.add(a)), vu(e, a, o)), !1;
        }
        throw Error(r(435, n.tag));
      }
      return vu(e, a, o), ko(), !1;
    }
    if (ye)
      return t = wt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = o, a !== dr && (e = Error(r(422), { cause: a }), _a(Mt(e, n)))) : (a !== dr && (t = Error(r(423), {
        cause: a
      }), _a(
        Mt(t, n)
      )), e = e.current.alternate, e.flags |= 65536, o &= -o, e.lanes |= o, a = Mt(a, n), o = Qr(
        e.stateNode,
        a,
        o
      ), Dr(e, o), He !== 4 && (He = 2)), !1;
    var u = Error(r(520), { cause: a });
    if (u = Mt(u, n), ns === null ? ns = [u] : ns.push(u), He !== 4 && (He = 2), t === null) return !0;
    a = Mt(a, n), n = t;
    do {
      switch (n.tag) {
        case 3:
          return n.flags |= 65536, e = o & -o, n.lanes |= e, e = Qr(n.stateNode, a, e), Dr(n, e), !1;
        case 1:
          if (t = n.type, u = n.stateNode, (n.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (On === null || !On.has(u))))
            return n.flags |= 65536, o &= -o, n.lanes |= o, o = Mm(o), Pm(
              o,
              e,
              n,
              a
            ), Dr(n, o), !1;
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var Kr = Error(r(461)), Qe = !1;
  function it(e, t, n, a) {
    t.child = e === null ? Od(t, null, n, a) : pi(
      t,
      e.child,
      n,
      a
    );
  }
  function zm(e, t, n, a, o) {
    n = n.render;
    var u = t.ref;
    if ("ref" in a) {
      var d = {};
      for (var b in a)
        b !== "ref" && (d[b] = a[b]);
    } else d = a;
    return ci(t), a = kr(
      e,
      t,
      n,
      d,
      u,
      o
    ), b = Br(), e !== null && !Qe ? (Ar(e, t, o), dn(e, t, o)) : (ye && b && cr(t), t.flags |= 1, it(e, t, a, o), t.child);
  }
  function Rm(e, t, n, a, o) {
    if (e === null) {
      var u = n.type;
      return typeof u == "function" && !lr(u) && u.defaultProps === void 0 && n.compare === null ? (t.tag = 15, t.type = u, _m(
        e,
        t,
        u,
        a,
        o
      )) : (e = $s(
        n.type,
        null,
        a,
        t,
        t.mode,
        o
      ), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (u = e.child, !nu(e, o)) {
      var d = u.memoizedProps;
      if (n = n.compare, n = n !== null ? n : Pa, n(d, a) && e.ref === t.ref)
        return dn(e, t, o);
    }
    return t.flags |= 1, e = on(u, a), e.ref = t.ref, e.return = t, t.child = e;
  }
  function _m(e, t, n, a, o) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (Pa(u, a) && e.ref === t.ref)
        if (Qe = !1, t.pendingProps = a = u, nu(e, o))
          (e.flags & 131072) !== 0 && (Qe = !0);
        else
          return t.lanes = e.lanes, dn(e, t, o);
    }
    return Zr(
      e,
      t,
      n,
      a,
      o
    );
  }
  function Om(e, t, n, a) {
    var o = a.children, u = e !== null ? e.memoizedState : null;
    if (e === null && t.stateNode === null && (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), a.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (u = u !== null ? u.baseLanes | n : n, e !== null) {
          for (a = t.child = e.child, o = 0; a !== null; )
            o = o | a.lanes | a.childLanes, a = a.sibling;
          a = o & ~u;
        } else a = 0, t.child = null;
        return Um(
          e,
          t,
          u,
          n,
          a
        );
      }
      if ((n & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && to(
          t,
          u !== null ? u.cachePool : null
        ), u !== null ? Hd(t, u) : wr(), qd(t);
      else
        return a = t.lanes = 536870912, Um(
          e,
          t,
          u !== null ? u.baseLanes | n : n,
          n,
          a
        );
    } else
      u !== null ? (to(t, u.cachePool), Hd(t, u), Pn(), t.memoizedState = null) : (e !== null && to(t, null), wr(), Pn());
    return it(e, t, o, n), t.child;
  }
  function Za(e, t) {
    return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function Um(e, t, n, a, o) {
    var u = xr();
    return u = u === null ? null : { parent: Xe._currentValue, pool: u }, t.memoizedState = {
      baseLanes: n,
      cachePool: u
    }, e !== null && to(t, null), wr(), qd(t), e !== null && Gi(e, t, a, !0), t.childLanes = o, null;
  }
  function vo(e, t) {
    return t = yo(
      { mode: t.mode, children: t.children },
      e.mode
    ), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function Lm(e, t, n) {
    return pi(t, e.child, null, n), e = vo(t, t.pendingProps), e.flags |= 2, Vt(t), t.memoizedState = null, e;
  }
  function Vx(e, t, n) {
    var a = t.pendingProps, o = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (ye) {
        if (a.mode === "hidden")
          return e = vo(t, a), t.lanes = 536870912, Za(null, e);
        if (Tr(t), (e = ze) ? (e = Wp(
          e,
          Rt
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: Vn !== null ? { id: Kt, overflow: Zt } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = Dd(e), n.return = t, t.child = n, tt = t, ze = null)) : e = null, e === null) throw Cn(t);
        return t.lanes = 536870912, null;
      }
      return vo(t, a);
    }
    var u = e.memoizedState;
    if (u !== null) {
      var d = u.dehydrated;
      if (Tr(t), o)
        if (t.flags & 256)
          t.flags &= -257, t = Lm(
            e,
            t,
            n
          );
        else if (t.memoizedState !== null)
          t.child = e.child, t.flags |= 128, t = null;
        else throw Error(r(558));
      else if (Qe || Gi(e, t, n, !1), o = (n & e.childLanes) !== 0, Qe || o) {
        if (a = je, a !== null && (d = Bf(a, n), d !== 0 && d !== u.retryLane))
          throw u.retryLane = d, oi(e, d), vt(a, e, d), Kr;
        ko(), t = Lm(
          e,
          t,
          n
        );
      } else
        e = u.treeContext, ze = Ot(d.nextSibling), tt = t, ye = !0, Tn = null, Rt = !1, e !== null && Vd(t, e), t = vo(t, a), t.flags |= 4096;
      return t;
    }
    return e = on(e.child, {
      mode: a.mode,
      children: a.children
    }), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function xo(e, t) {
    var n = t.ref;
    if (n === null)
      e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object")
        throw Error(r(284));
      (e === null || e.ref !== n) && (t.flags |= 4194816);
    }
  }
  function Zr(e, t, n, a, o) {
    return ci(t), n = kr(
      e,
      t,
      n,
      a,
      void 0,
      o
    ), a = Br(), e !== null && !Qe ? (Ar(e, t, o), dn(e, t, o)) : (ye && a && cr(t), t.flags |= 1, it(e, t, n, o), t.child);
  }
  function Hm(e, t, n, a, o, u) {
    return ci(t), t.updateQueue = null, n = Yd(
      t,
      a,
      n,
      o
    ), Gd(e), a = Br(), e !== null && !Qe ? (Ar(e, t, u), dn(e, t, u)) : (ye && a && cr(t), t.flags |= 1, it(e, t, n, u), t.child);
  }
  function qm(e, t, n, a, o) {
    if (ci(t), t.stateNode === null) {
      var u = Ui, d = n.contextType;
      typeof d == "object" && d !== null && (u = nt(d)), u = new n(a, u), t.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = Fr, t.stateNode = u, u._reactInternals = t, u = t.stateNode, u.props = a, u.state = t.memoizedState, u.refs = {}, Nr(t), d = n.contextType, u.context = typeof d == "object" && d !== null ? nt(d) : Ui, u.state = t.memoizedState, d = n.getDerivedStateFromProps, typeof d == "function" && (Xr(
        t,
        n,
        d,
        a
      ), u.state = t.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (d = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), d !== u.state && Fr.enqueueReplaceState(u, u.state, null), Ya(t, a, u, o), Ga(), u.state = t.memoizedState), typeof u.componentDidMount == "function" && (t.flags |= 4194308), a = !0;
    } else if (e === null) {
      u = t.stateNode;
      var b = t.memoizedProps, S = gi(n, b);
      u.props = S;
      var k = u.context, P = n.contextType;
      d = Ui, typeof P == "object" && P !== null && (d = nt(P));
      var U = n.getDerivedStateFromProps;
      P = typeof U == "function" || typeof u.getSnapshotBeforeUpdate == "function", b = t.pendingProps !== b, P || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (b || k !== d) && Cm(
        t,
        u,
        a,
        d
      ), Bn = !1;
      var B = t.memoizedState;
      u.state = B, Ya(t, a, u, o), Ga(), k = t.memoizedState, b || B !== k || Bn ? (typeof U == "function" && (Xr(
        t,
        n,
        U,
        a
      ), k = t.memoizedState), (S = Bn || Tm(
        t,
        n,
        S,
        a,
        B,
        k,
        d
      )) ? (P || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = k), u.props = a, u.state = k, u.context = d, a = S) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), a = !1);
    } else {
      u = t.stateNode, Sr(e, t), d = t.memoizedProps, P = gi(n, d), u.props = P, U = t.pendingProps, B = u.context, k = n.contextType, S = Ui, typeof k == "object" && k !== null && (S = nt(k)), b = n.getDerivedStateFromProps, (k = typeof b == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (d !== U || B !== S) && Cm(
        t,
        u,
        a,
        S
      ), Bn = !1, B = t.memoizedState, u.state = B, Ya(t, a, u, o), Ga();
      var M = t.memoizedState;
      d !== U || B !== M || Bn || e !== null && e.dependencies !== null && Is(e.dependencies) ? (typeof b == "function" && (Xr(
        t,
        n,
        b,
        a
      ), M = t.memoizedState), (P = Bn || Tm(
        t,
        n,
        P,
        a,
        B,
        M,
        S
      ) || e !== null && e.dependencies !== null && Is(e.dependencies)) ? (k || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(a, M, S), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(
        a,
        M,
        S
      )), typeof u.componentDidUpdate == "function" && (t.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || d === e.memoizedProps && B === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && B === e.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = M), u.props = a, u.state = M, u.context = S, a = P) : (typeof u.componentDidUpdate != "function" || d === e.memoizedProps && B === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && B === e.memoizedState || (t.flags |= 1024), a = !1);
    }
    return u = a, xo(e, t), a = (t.flags & 128) !== 0, u || a ? (u = t.stateNode, n = a && typeof n.getDerivedStateFromError != "function" ? null : u.render(), t.flags |= 1, e !== null && a ? (t.child = pi(
      t,
      e.child,
      null,
      o
    ), t.child = pi(
      t,
      null,
      n,
      o
    )) : it(e, t, n, o), t.memoizedState = u.state, e = t.child) : e = dn(
      e,
      t,
      o
    ), e;
  }
  function Gm(e, t, n, a) {
    return ri(), t.flags |= 256, it(e, t, n, a), t.child;
  }
  var Jr = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function $r(e) {
    return { baseLanes: e, cachePool: jd() };
  }
  function Wr(e, t, n) {
    return e = e !== null ? e.childLanes & ~n : 0, t && (e |= Ct), e;
  }
  function Ym(e, t, n) {
    var a = t.pendingProps, o = !1, u = (t.flags & 128) !== 0, d;
    if ((d = u) || (d = e !== null && e.memoizedState === null ? !1 : (Ge.current & 2) !== 0), d && (o = !0, t.flags &= -129), d = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (ye) {
        if (o ? Mn(t) : Pn(), (e = ze) ? (e = Wp(
          e,
          Rt
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: Vn !== null ? { id: Kt, overflow: Zt } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = Dd(e), n.return = t, t.child = n, tt = t, ze = null)) : e = null, e === null) throw Cn(t);
        return Pu(e) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var b = a.children;
      return a = a.fallback, o ? (Pn(), o = t.mode, b = yo(
        { mode: "hidden", children: b },
        o
      ), a = li(
        a,
        o,
        n,
        null
      ), b.return = t, a.return = t, b.sibling = a, t.child = b, a = t.child, a.memoizedState = $r(n), a.childLanes = Wr(
        e,
        d,
        n
      ), t.memoizedState = Jr, Za(null, a)) : (Mn(t), Ir(t, b));
    }
    var S = e.memoizedState;
    if (S !== null && (b = S.dehydrated, b !== null)) {
      if (u)
        t.flags & 256 ? (Mn(t), t.flags &= -257, t = eu(
          e,
          t,
          n
        )) : t.memoizedState !== null ? (Pn(), t.child = e.child, t.flags |= 128, t = null) : (Pn(), b = a.fallback, o = t.mode, a = yo(
          { mode: "visible", children: a.children },
          o
        ), b = li(
          b,
          o,
          n,
          null
        ), b.flags |= 2, a.return = t, b.return = t, a.sibling = b, t.child = a, pi(
          t,
          e.child,
          null,
          n
        ), a = t.child, a.memoizedState = $r(n), a.childLanes = Wr(
          e,
          d,
          n
        ), t.memoizedState = Jr, t = Za(null, a));
      else if (Mn(t), Pu(b)) {
        if (d = b.nextSibling && b.nextSibling.dataset, d) var k = d.dgst;
        d = k, a = Error(r(419)), a.stack = "", a.digest = d, _a({ value: a, source: null, stack: null }), t = eu(
          e,
          t,
          n
        );
      } else if (Qe || Gi(e, t, n, !1), d = (n & e.childLanes) !== 0, Qe || d) {
        if (d = je, d !== null && (a = Bf(d, n), a !== 0 && a !== S.retryLane))
          throw S.retryLane = a, oi(e, a), vt(d, e, a), Kr;
        Mu(b) || ko(), t = eu(
          e,
          t,
          n
        );
      } else
        Mu(b) ? (t.flags |= 192, t.child = e.child, t = null) : (e = S.treeContext, ze = Ot(
          b.nextSibling
        ), tt = t, ye = !0, Tn = null, Rt = !1, e !== null && Vd(t, e), t = Ir(
          t,
          a.children
        ), t.flags |= 4096);
      return t;
    }
    return o ? (Pn(), b = a.fallback, o = t.mode, S = e.child, k = S.sibling, a = on(S, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = S.subtreeFlags & 65011712, k !== null ? b = on(
      k,
      b
    ) : (b = li(
      b,
      o,
      n,
      null
    ), b.flags |= 2), b.return = t, a.return = t, a.sibling = b, t.child = a, Za(null, a), a = t.child, b = e.child.memoizedState, b === null ? b = $r(n) : (o = b.cachePool, o !== null ? (S = Xe._currentValue, o = o.parent !== S ? { parent: S, pool: S } : o) : o = jd(), b = {
      baseLanes: b.baseLanes | n,
      cachePool: o
    }), a.memoizedState = b, a.childLanes = Wr(
      e,
      d,
      n
    ), t.memoizedState = Jr, Za(e.child, a)) : (Mn(t), n = e.child, e = n.sibling, n = on(n, {
      mode: "visible",
      children: a.children
    }), n.return = t, n.sibling = null, e !== null && (d = t.deletions, d === null ? (t.deletions = [e], t.flags |= 16) : d.push(e)), t.child = n, t.memoizedState = null, n);
  }
  function Ir(e, t) {
    return t = yo(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function yo(e, t) {
    return e = Et(22, e, null, t), e.lanes = 0, e;
  }
  function eu(e, t, n) {
    return pi(t, e.child, null, n), e = Ir(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function Xm(e, t, n) {
    e.lanes |= t;
    var a = e.alternate;
    a !== null && (a.lanes |= t), hr(e.return, t, n);
  }
  function tu(e, t, n, a, o, u) {
    var d = e.memoizedState;
    d === null ? e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: a,
      tail: n,
      tailMode: o,
      treeForkCount: u
    } : (d.isBackwards = t, d.rendering = null, d.renderingStartTime = 0, d.last = a, d.tail = n, d.tailMode = o, d.treeForkCount = u);
  }
  function Fm(e, t, n) {
    var a = t.pendingProps, o = a.revealOrder, u = a.tail;
    a = a.children;
    var d = Ge.current, b = (d & 2) !== 0;
    if (b ? (d = d & 1 | 2, t.flags |= 128) : d &= 1, Z(Ge, d), it(e, t, a, n), a = ye ? Ra : 0, !b && e !== null && (e.flags & 128) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13)
          e.memoizedState !== null && Xm(e, n, t);
        else if (e.tag === 19)
          Xm(e, n, t);
        else if (e.child !== null) {
          e.child.return = e, e = e.child;
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t)
            break e;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          e = n.alternate, e !== null && lo(e) === null && (o = n), n = n.sibling;
        n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), tu(
          t,
          !1,
          o,
          n,
          u,
          a
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (e = o.alternate, e !== null && lo(e) === null) {
            t.child = o;
            break;
          }
          e = o.sibling, o.sibling = n, n = o, o = e;
        }
        tu(
          t,
          !0,
          n,
          null,
          u,
          a
        );
        break;
      case "together":
        tu(
          t,
          !1,
          null,
          null,
          void 0,
          a
        );
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function dn(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), _n |= t.lanes, (n & t.childLanes) === 0)
      if (e !== null) {
        if (Gi(
          e,
          t,
          n,
          !1
        ), (n & t.childLanes) === 0)
          return null;
      } else return null;
    if (e !== null && t.child !== e.child)
      throw Error(r(153));
    if (t.child !== null) {
      for (e = t.child, n = on(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
        e = e.sibling, n = n.sibling = on(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function nu(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Is(e)));
  }
  function Tx(e, t, n) {
    switch (t.tag) {
      case 3:
        rt(t, t.stateNode.containerInfo), kn(t, Xe, e.memoizedState.cache), ri();
        break;
      case 27:
      case 5:
        Na(t);
        break;
      case 4:
        rt(t, t.stateNode.containerInfo);
        break;
      case 10:
        kn(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 31:
        if (t.memoizedState !== null)
          return t.flags |= 128, Tr(t), null;
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null)
          return a.dehydrated !== null ? (Mn(t), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? Ym(e, t, n) : (Mn(t), e = dn(
            e,
            t,
            n
          ), e !== null ? e.sibling : null);
        Mn(t);
        break;
      case 19:
        var o = (e.flags & 128) !== 0;
        if (a = (n & t.childLanes) !== 0, a || (Gi(
          e,
          t,
          n,
          !1
        ), a = (n & t.childLanes) !== 0), o) {
          if (a)
            return Fm(
              e,
              t,
              n
            );
          t.flags |= 128;
        }
        if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), Z(Ge, Ge.current), a) break;
        return null;
      case 22:
        return t.lanes = 0, Om(
          e,
          t,
          n,
          t.pendingProps
        );
      case 24:
        kn(t, Xe, e.memoizedState.cache);
    }
    return dn(e, t, n);
  }
  function Qm(e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        Qe = !0;
      else {
        if (!nu(e, n) && (t.flags & 128) === 0)
          return Qe = !1, Tx(
            e,
            t,
            n
          );
        Qe = (e.flags & 131072) !== 0;
      }
    else
      Qe = !1, ye && (t.flags & 1048576) !== 0 && wd(t, Ra, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var a = t.pendingProps;
          if (e = di(t.elementType), t.type = e, typeof e == "function")
            lr(e) ? (a = gi(e, a), t.tag = 1, t = qm(
              null,
              t,
              e,
              a,
              n
            )) : (t.tag = 0, t = Zr(
              null,
              t,
              e,
              a,
              n
            ));
          else {
            if (e != null) {
              var o = e.$$typeof;
              if (o === H) {
                t.tag = 11, t = zm(
                  null,
                  t,
                  e,
                  a,
                  n
                );
                break e;
              } else if (o === F) {
                t.tag = 14, t = Rm(
                  null,
                  t,
                  e,
                  a,
                  n
                );
                break e;
              }
            }
            throw t = de(e) || e, Error(r(306, t, ""));
          }
        }
        return t;
      case 0:
        return Zr(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 1:
        return a = t.type, o = gi(
          a,
          t.pendingProps
        ), qm(
          e,
          t,
          a,
          o,
          n
        );
      case 3:
        e: {
          if (rt(
            t,
            t.stateNode.containerInfo
          ), e === null) throw Error(r(387));
          a = t.pendingProps;
          var u = t.memoizedState;
          o = u.element, Sr(e, t), Ya(t, a, null, n);
          var d = t.memoizedState;
          if (a = d.cache, kn(t, Xe, a), a !== u.cache && gr(
            t,
            [Xe],
            n,
            !0
          ), Ga(), a = d.element, u.isDehydrated)
            if (u = {
              element: a,
              isDehydrated: !1,
              cache: d.cache
            }, t.updateQueue.baseState = u, t.memoizedState = u, t.flags & 256) {
              t = Gm(
                e,
                t,
                a,
                n
              );
              break e;
            } else if (a !== o) {
              o = Mt(
                Error(r(424)),
                t
              ), _a(o), t = Gm(
                e,
                t,
                a,
                n
              );
              break e;
            } else {
              switch (e = t.stateNode.containerInfo, e.nodeType) {
                case 9:
                  e = e.body;
                  break;
                default:
                  e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
              }
              for (ze = Ot(e.firstChild), tt = t, ye = !0, Tn = null, Rt = !0, n = Od(
                t,
                null,
                a,
                n
              ), t.child = n; n; )
                n.flags = n.flags & -3 | 4096, n = n.sibling;
            }
          else {
            if (ri(), a === o) {
              t = dn(
                e,
                t,
                n
              );
              break e;
            }
            it(e, t, a, n);
          }
          t = t.child;
        }
        return t;
      case 26:
        return xo(e, t), e === null ? (n = ah(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = n : ye || (n = t.type, e = t.pendingProps, a = Ro(
          ce.current
        ).createElement(n), a[et] = t, a[dt] = e, at(a, n, e), We(a), t.stateNode = a) : t.memoizedState = ah(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return Na(t), e === null && ye && (a = t.stateNode = th(
          t.type,
          t.pendingProps,
          ce.current
        ), tt = t, Rt = !0, o = ze, qn(t.type) ? (zu = o, ze = Ot(a.firstChild)) : ze = o), it(
          e,
          t,
          t.pendingProps.children,
          n
        ), xo(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && ye && ((o = a = ze) && (a = i1(
          a,
          t.type,
          t.pendingProps,
          Rt
        ), a !== null ? (t.stateNode = a, tt = t, ze = Ot(a.firstChild), Rt = !1, o = !0) : o = !1), o || Cn(t)), Na(t), o = t.type, u = t.pendingProps, d = e !== null ? e.memoizedProps : null, a = u.children, Bu(o, u) ? a = null : d !== null && Bu(o, d) && (t.flags |= 32), t.memoizedState !== null && (o = kr(
          e,
          t,
          vx,
          null,
          null,
          n
        ), cs._currentValue = o), xo(e, t), it(e, t, a, n), t.child;
      case 6:
        return e === null && ye && ((e = n = ze) && (n = a1(
          n,
          t.pendingProps,
          Rt
        ), n !== null ? (t.stateNode = n, tt = t, ze = null, e = !0) : e = !1), e || Cn(t)), null;
      case 13:
        return Ym(e, t, n);
      case 4:
        return rt(
          t,
          t.stateNode.containerInfo
        ), a = t.pendingProps, e === null ? t.child = pi(
          t,
          null,
          a,
          n
        ) : it(e, t, a, n), t.child;
      case 11:
        return zm(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 7:
        return it(
          e,
          t,
          t.pendingProps,
          n
        ), t.child;
      case 8:
        return it(
          e,
          t,
          t.pendingProps.children,
          n
        ), t.child;
      case 12:
        return it(
          e,
          t,
          t.pendingProps.children,
          n
        ), t.child;
      case 10:
        return a = t.pendingProps, kn(t, t.type, a.value), it(e, t, a.children, n), t.child;
      case 9:
        return o = t.type._context, a = t.pendingProps.children, ci(t), o = nt(o), a = a(o), t.flags |= 1, it(e, t, a, n), t.child;
      case 14:
        return Rm(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 15:
        return _m(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 19:
        return Fm(e, t, n);
      case 31:
        return Vx(e, t, n);
      case 22:
        return Om(
          e,
          t,
          n,
          t.pendingProps
        );
      case 24:
        return ci(t), a = nt(Xe), e === null ? (o = xr(), o === null && (o = je, u = br(), o.pooledCache = u, u.refCount++, u !== null && (o.pooledCacheLanes |= n), o = u), t.memoizedState = { parent: a, cache: o }, Nr(t), kn(t, Xe, o)) : ((e.lanes & n) !== 0 && (Sr(e, t), Ya(t, null, null, n), Ga()), o = e.memoizedState, u = t.memoizedState, o.parent !== a ? (o = { parent: a, cache: a }, t.memoizedState = o, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = o), kn(t, Xe, a)) : (a = u.cache, kn(t, Xe, a), a !== o.cache && gr(
          t,
          [Xe],
          n,
          !0
        ))), it(
          e,
          t,
          t.pendingProps.children,
          n
        ), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(r(156, t.tag));
  }
  function mn(e) {
    e.flags |= 4;
  }
  function iu(e, t, n, a, o) {
    if ((t = (e.mode & 32) !== 0) && (t = !1), t) {
      if (e.flags |= 16777216, (o & 335544128) === o)
        if (e.stateNode.complete) e.flags |= 8192;
        else if (yp()) e.flags |= 8192;
        else
          throw mi = io, yr;
    } else e.flags &= -16777217;
  }
  function Km(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !uh(t))
      if (yp()) e.flags |= 8192;
      else
        throw mi = io, yr;
  }
  function No(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? Tf() : 536870912, e.lanes |= t, ta |= t);
  }
  function Ja(e, t) {
    if (!ye)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null; )
            t.alternate !== null && (n = t), t = t.sibling;
          n === null ? e.tail = null : n.sibling = null;
          break;
        case "collapsed":
          n = e.tail;
          for (var a = null; n !== null; )
            n.alternate !== null && (a = n), n = n.sibling;
          a === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : a.sibling = null;
      }
  }
  function Re(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, a = 0;
    if (t)
      for (var o = e.child; o !== null; )
        n |= o.lanes | o.childLanes, a |= o.subtreeFlags & 65011712, a |= o.flags & 65011712, o.return = e, o = o.sibling;
    else
      for (o = e.child; o !== null; )
        n |= o.lanes | o.childLanes, a |= o.subtreeFlags, a |= o.flags, o.return = e, o = o.sibling;
    return e.subtreeFlags |= a, e.childLanes = n, t;
  }
  function Cx(e, t, n) {
    var a = t.pendingProps;
    switch (fr(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Re(t), null;
      case 1:
        return Re(t), null;
      case 3:
        return n = t.stateNode, a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), un(Xe), qe(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (qi(t) ? mn(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, mr())), Re(t), null;
      case 26:
        var o = t.type, u = t.memoizedState;
        return e === null ? (mn(t), u !== null ? (Re(t), Km(t, u)) : (Re(t), iu(
          t,
          o,
          null,
          a,
          n
        ))) : u ? u !== e.memoizedState ? (mn(t), Re(t), Km(t, u)) : (Re(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== a && mn(t), Re(t), iu(
          t,
          o,
          e,
          a,
          n
        )), null;
      case 27:
        if (As(t), n = ce.current, o = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== a && mn(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(r(166));
            return Re(t), null;
          }
          e = W.current, qi(t) ? Td(t) : (e = th(o, a, n), t.stateNode = e, mn(t));
        }
        return Re(t), null;
      case 5:
        if (As(t), o = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== a && mn(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(r(166));
            return Re(t), null;
          }
          if (u = W.current, qi(t))
            Td(t);
          else {
            var d = Ro(
              ce.current
            );
            switch (u) {
              case 1:
                u = d.createElementNS(
                  "http://www.w3.org/2000/svg",
                  o
                );
                break;
              case 2:
                u = d.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  o
                );
                break;
              default:
                switch (o) {
                  case "svg":
                    u = d.createElementNS(
                      "http://www.w3.org/2000/svg",
                      o
                    );
                    break;
                  case "math":
                    u = d.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      o
                    );
                    break;
                  case "script":
                    u = d.createElement("div"), u.innerHTML = "<script><\/script>", u = u.removeChild(
                      u.firstChild
                    );
                    break;
                  case "select":
                    u = typeof a.is == "string" ? d.createElement("select", {
                      is: a.is
                    }) : d.createElement("select"), a.multiple ? u.multiple = !0 : a.size && (u.size = a.size);
                    break;
                  default:
                    u = typeof a.is == "string" ? d.createElement(o, { is: a.is }) : d.createElement(o);
                }
            }
            u[et] = t, u[dt] = a;
            e: for (d = t.child; d !== null; ) {
              if (d.tag === 5 || d.tag === 6)
                u.appendChild(d.stateNode);
              else if (d.tag !== 4 && d.tag !== 27 && d.child !== null) {
                d.child.return = d, d = d.child;
                continue;
              }
              if (d === t) break e;
              for (; d.sibling === null; ) {
                if (d.return === null || d.return === t)
                  break e;
                d = d.return;
              }
              d.sibling.return = d.return, d = d.sibling;
            }
            t.stateNode = u;
            e: switch (at(u, o, a), o) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                a = !!a.autoFocus;
                break e;
              case "img":
                a = !0;
                break e;
              default:
                a = !1;
            }
            a && mn(t);
          }
        }
        return Re(t), iu(
          t,
          t.type,
          e === null ? null : e.memoizedProps,
          t.pendingProps,
          n
        ), null;
      case 6:
        if (e && t.stateNode != null)
          e.memoizedProps !== a && mn(t);
        else {
          if (typeof a != "string" && t.stateNode === null)
            throw Error(r(166));
          if (e = ce.current, qi(t)) {
            if (e = t.stateNode, n = t.memoizedProps, a = null, o = tt, o !== null)
              switch (o.tag) {
                case 27:
                case 5:
                  a = o.memoizedProps;
              }
            e[et] = t, e = !!(e.nodeValue === n || a !== null && a.suppressHydrationWarning === !0 || Yp(e.nodeValue, n)), e || Cn(t, !0);
          } else
            e = Ro(e).createTextNode(
              a
            ), e[et] = t, t.stateNode = e;
        }
        return Re(t), null;
      case 31:
        if (n = t.memoizedState, e === null || e.memoizedState !== null) {
          if (a = qi(t), n !== null) {
            if (e === null) {
              if (!a) throw Error(r(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(r(557));
              e[et] = t;
            } else
              ri(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Re(t), e = !1;
          } else
            n = mr(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), e = !0;
          if (!e)
            return t.flags & 256 ? (Vt(t), t) : (Vt(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(r(558));
        }
        return Re(t), null;
      case 13:
        if (a = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (o = qi(t), a !== null && a.dehydrated !== null) {
            if (e === null) {
              if (!o) throw Error(r(318));
              if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(r(317));
              o[et] = t;
            } else
              ri(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Re(t), o = !1;
          } else
            o = mr(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = o), o = !0;
          if (!o)
            return t.flags & 256 ? (Vt(t), t) : (Vt(t), null);
        }
        return Vt(t), (t.flags & 128) !== 0 ? (t.lanes = n, t) : (n = a !== null, e = e !== null && e.memoizedState !== null, n && (a = t.child, o = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (o = a.alternate.memoizedState.cachePool.pool), u = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (u = a.memoizedState.cachePool.pool), u !== o && (a.flags |= 2048)), n !== e && n && (t.child.flags |= 8192), No(t, t.updateQueue), Re(t), null);
      case 4:
        return qe(), e === null && wu(t.stateNode.containerInfo), Re(t), null;
      case 10:
        return un(t.type), Re(t), null;
      case 19:
        if (R(Ge), a = t.memoizedState, a === null) return Re(t), null;
        if (o = (t.flags & 128) !== 0, u = a.rendering, u === null)
          if (o) Ja(a, !1);
          else {
            if (He !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (u = lo(e), u !== null) {
                  for (t.flags |= 128, Ja(a, !1), e = u.updateQueue, t.updateQueue = e, No(t, e), t.subtreeFlags = 0, e = n, n = t.child; n !== null; )
                    Sd(n, e), n = n.sibling;
                  return Z(
                    Ge,
                    Ge.current & 1 | 2
                  ), ye && ln(t, a.treeForkCount), t.child;
                }
                e = e.sibling;
              }
            a.tail !== null && yt() > Vo && (t.flags |= 128, o = !0, Ja(a, !1), t.lanes = 4194304);
          }
        else {
          if (!o)
            if (e = lo(u), e !== null) {
              if (t.flags |= 128, o = !0, e = e.updateQueue, t.updateQueue = e, No(t, e), Ja(a, !0), a.tail === null && a.tailMode === "hidden" && !u.alternate && !ye)
                return Re(t), null;
            } else
              2 * yt() - a.renderingStartTime > Vo && n !== 536870912 && (t.flags |= 128, o = !0, Ja(a, !1), t.lanes = 4194304);
          a.isBackwards ? (u.sibling = t.child, t.child = u) : (e = a.last, e !== null ? e.sibling = u : t.child = u, a.last = u);
        }
        return a.tail !== null ? (e = a.tail, a.rendering = e, a.tail = e.sibling, a.renderingStartTime = yt(), e.sibling = null, n = Ge.current, Z(
          Ge,
          o ? n & 1 | 2 : n & 1
        ), ye && ln(t, a.treeForkCount), e) : (Re(t), null);
      case 22:
      case 23:
        return Vt(t), Vr(), a = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192), a ? (n & 536870912) !== 0 && (t.flags & 128) === 0 && (Re(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Re(t), n = t.updateQueue, n !== null && No(t, n.retryQueue), n = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), a = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), a !== n && (t.flags |= 2048), e !== null && R(fi), null;
      case 24:
        return n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), un(Xe), Re(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(r(156, t.tag));
  }
  function kx(e, t) {
    switch (fr(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return un(Xe), qe(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return As(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (Vt(t), t.alternate === null)
            throw Error(r(340));
          ri();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 13:
        if (Vt(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(r(340));
          ri();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return R(Ge), null;
      case 4:
        return qe(), null;
      case 10:
        return un(t.type), null;
      case 22:
      case 23:
        return Vt(t), Vr(), e !== null && R(fi), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return un(Xe), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Zm(e, t) {
    switch (fr(t), t.tag) {
      case 3:
        un(Xe), qe();
        break;
      case 26:
      case 27:
      case 5:
        As(t);
        break;
      case 4:
        qe();
        break;
      case 31:
        t.memoizedState !== null && Vt(t);
        break;
      case 13:
        Vt(t);
        break;
      case 19:
        R(Ge);
        break;
      case 10:
        un(t.type);
        break;
      case 22:
      case 23:
        Vt(t), Vr(), e !== null && R(fi);
        break;
      case 24:
        un(Xe);
    }
  }
  function $a(e, t) {
    try {
      var n = t.updateQueue, a = n !== null ? n.lastEffect : null;
      if (a !== null) {
        var o = a.next;
        n = o;
        do {
          if ((n.tag & e) === e) {
            a = void 0;
            var u = n.create, d = n.inst;
            a = u(), d.destroy = a;
          }
          n = n.next;
        } while (n !== o);
      }
    } catch (b) {
      Ce(t, t.return, b);
    }
  }
  function zn(e, t, n) {
    try {
      var a = t.updateQueue, o = a !== null ? a.lastEffect : null;
      if (o !== null) {
        var u = o.next;
        a = u;
        do {
          if ((a.tag & e) === e) {
            var d = a.inst, b = d.destroy;
            if (b !== void 0) {
              d.destroy = void 0, o = t;
              var S = n, k = b;
              try {
                k();
              } catch (P) {
                Ce(
                  o,
                  S,
                  P
                );
              }
            }
          }
          a = a.next;
        } while (a !== u);
      }
    } catch (P) {
      Ce(t, t.return, P);
    }
  }
  function Jm(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var n = e.stateNode;
      try {
        Ld(t, n);
      } catch (a) {
        Ce(e, e.return, a);
      }
    }
  }
  function $m(e, t, n) {
    n.props = gi(
      e.type,
      e.memoizedProps
    ), n.state = e.memoizedState;
    try {
      n.componentWillUnmount();
    } catch (a) {
      Ce(e, t, a);
    }
  }
  function Wa(e, t) {
    try {
      var n = e.ref;
      if (n !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var a = e.stateNode;
            break;
          case 30:
            a = e.stateNode;
            break;
          default:
            a = e.stateNode;
        }
        typeof n == "function" ? e.refCleanup = n(a) : n.current = a;
      }
    } catch (o) {
      Ce(e, t, o);
    }
  }
  function Jt(e, t) {
    var n = e.ref, a = e.refCleanup;
    if (n !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (o) {
          Ce(e, t, o);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (o) {
          Ce(e, t, o);
        }
      else n.current = null;
  }
  function Wm(e) {
    var t = e.type, n = e.memoizedProps, a = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && a.focus();
          break e;
        case "img":
          n.src ? a.src = n.src : n.srcSet && (a.srcset = n.srcSet);
      }
    } catch (o) {
      Ce(e, e.return, o);
    }
  }
  function au(e, t, n) {
    try {
      var a = e.stateNode;
      $x(a, e.type, n, t), a[dt] = t;
    } catch (o) {
      Ce(e, e.return, o);
    }
  }
  function Im(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && qn(e.type) || e.tag === 4;
  }
  function su(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Im(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && qn(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function ou(e, t, n) {
    var a = e.tag;
    if (a === 5 || a === 6)
      e = e.stateNode, t ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(e, t) : (t = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, t.appendChild(e), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = an));
    else if (a !== 4 && (a === 27 && qn(e.type) && (n = e.stateNode, t = null), e = e.child, e !== null))
      for (ou(e, t, n), e = e.sibling; e !== null; )
        ou(e, t, n), e = e.sibling;
  }
  function So(e, t, n) {
    var a = e.tag;
    if (a === 5 || a === 6)
      e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (a !== 4 && (a === 27 && qn(e.type) && (n = e.stateNode), e = e.child, e !== null))
      for (So(e, t, n), e = e.sibling; e !== null; )
        So(e, t, n), e = e.sibling;
  }
  function ep(e) {
    var t = e.stateNode, n = e.memoizedProps;
    try {
      for (var a = e.type, o = t.attributes; o.length; )
        t.removeAttributeNode(o[0]);
      at(t, a, n), t[et] = e, t[dt] = n;
    } catch (u) {
      Ce(e, e.return, u);
    }
  }
  var pn = !1, Ke = !1, lu = !1, tp = typeof WeakSet == "function" ? WeakSet : Set, Ie = null;
  function Bx(e, t) {
    if (e = e.containerInfo, Cu = Go, e = md(e), er(e)) {
      if ("selectionStart" in e)
        var n = {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      else
        e: {
          n = (n = e.ownerDocument) && n.defaultView || window;
          var a = n.getSelection && n.getSelection();
          if (a && a.rangeCount !== 0) {
            n = a.anchorNode;
            var o = a.anchorOffset, u = a.focusNode;
            a = a.focusOffset;
            try {
              n.nodeType, u.nodeType;
            } catch {
              n = null;
              break e;
            }
            var d = 0, b = -1, S = -1, k = 0, P = 0, U = e, B = null;
            t: for (; ; ) {
              for (var M; U !== n || o !== 0 && U.nodeType !== 3 || (b = d + o), U !== u || a !== 0 && U.nodeType !== 3 || (S = d + a), U.nodeType === 3 && (d += U.nodeValue.length), (M = U.firstChild) !== null; )
                B = U, U = M;
              for (; ; ) {
                if (U === e) break t;
                if (B === n && ++k === o && (b = d), B === u && ++P === a && (S = d), (M = U.nextSibling) !== null) break;
                U = B, B = U.parentNode;
              }
              U = M;
            }
            n = b === -1 || S === -1 ? null : { start: b, end: S };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (ku = { focusedElem: e, selectionRange: n }, Go = !1, Ie = t; Ie !== null; )
      if (t = Ie, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
        e.return = t, Ie = e;
      else
        for (; Ie !== null; ) {
          switch (t = Ie, u = t.alternate, e = t.flags, t.tag) {
            case 0:
              if ((e & 4) !== 0 && (e = t.updateQueue, e = e !== null ? e.events : null, e !== null))
                for (n = 0; n < e.length; n++)
                  o = e[n], o.ref.impl = o.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && u !== null) {
                e = void 0, n = t, o = u.memoizedProps, u = u.memoizedState, a = n.stateNode;
                try {
                  var ie = gi(
                    n.type,
                    o
                  );
                  e = a.getSnapshotBeforeUpdate(
                    ie,
                    u
                  ), a.__reactInternalSnapshotBeforeUpdate = e;
                } catch (re) {
                  Ce(
                    n,
                    n.return,
                    re
                  );
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (e = t.stateNode.containerInfo, n = e.nodeType, n === 9)
                  ju(e);
                else if (n === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      ju(e);
                      break;
                    default:
                      e.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((e & 1024) !== 0) throw Error(r(163));
          }
          if (e = t.sibling, e !== null) {
            e.return = t.return, Ie = e;
            break;
          }
          Ie = t.return;
        }
  }
  function np(e, t, n) {
    var a = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        gn(e, n), a & 4 && $a(5, n);
        break;
      case 1:
        if (gn(e, n), a & 4)
          if (e = n.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (d) {
              Ce(n, n.return, d);
            }
          else {
            var o = gi(
              n.type,
              t.memoizedProps
            );
            t = t.memoizedState;
            try {
              e.componentDidUpdate(
                o,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              );
            } catch (d) {
              Ce(
                n,
                n.return,
                d
              );
            }
          }
        a & 64 && Jm(n), a & 512 && Wa(n, n.return);
        break;
      case 3:
        if (gn(e, n), a & 64 && (e = n.updateQueue, e !== null)) {
          if (t = null, n.child !== null)
            switch (n.child.tag) {
              case 27:
              case 5:
                t = n.child.stateNode;
                break;
              case 1:
                t = n.child.stateNode;
            }
          try {
            Ld(e, t);
          } catch (d) {
            Ce(n, n.return, d);
          }
        }
        break;
      case 27:
        t === null && a & 4 && ep(n);
      case 26:
      case 5:
        gn(e, n), t === null && a & 4 && Wm(n), a & 512 && Wa(n, n.return);
        break;
      case 12:
        gn(e, n);
        break;
      case 31:
        gn(e, n), a & 4 && sp(e, n);
        break;
      case 13:
        gn(e, n), a & 4 && op(e, n), a & 64 && (e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null && (n = Ux.bind(
          null,
          n
        ), s1(e, n))));
        break;
      case 22:
        if (a = n.memoizedState !== null || pn, !a) {
          t = t !== null && t.memoizedState !== null || Ke, o = pn;
          var u = Ke;
          pn = a, (Ke = t) && !u ? bn(
            e,
            n,
            (n.subtreeFlags & 8772) !== 0
          ) : gn(e, n), pn = o, Ke = u;
        }
        break;
      case 30:
        break;
      default:
        gn(e, n);
    }
  }
  function ip(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, ip(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && _l(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var _e = null, pt = !1;
  function hn(e, t, n) {
    for (n = n.child; n !== null; )
      ap(e, t, n), n = n.sibling;
  }
  function ap(e, t, n) {
    if (Nt && typeof Nt.onCommitFiberUnmount == "function")
      try {
        Nt.onCommitFiberUnmount(Sa, n);
      } catch {
      }
    switch (n.tag) {
      case 26:
        Ke || Jt(n, t), hn(
          e,
          t,
          n
        ), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode, n.parentNode.removeChild(n));
        break;
      case 27:
        Ke || Jt(n, t);
        var a = _e, o = pt;
        qn(n.type) && (_e = n.stateNode, pt = !1), hn(
          e,
          t,
          n
        ), ls(n.stateNode), _e = a, pt = o;
        break;
      case 5:
        Ke || Jt(n, t);
      case 6:
        if (a = _e, o = pt, _e = null, hn(
          e,
          t,
          n
        ), _e = a, pt = o, _e !== null)
          if (pt)
            try {
              (_e.nodeType === 9 ? _e.body : _e.nodeName === "HTML" ? _e.ownerDocument.body : _e).removeChild(n.stateNode);
            } catch (u) {
              Ce(
                n,
                t,
                u
              );
            }
          else
            try {
              _e.removeChild(n.stateNode);
            } catch (u) {
              Ce(
                n,
                t,
                u
              );
            }
        break;
      case 18:
        _e !== null && (pt ? (e = _e, Jp(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          n.stateNode
        ), ua(e)) : Jp(_e, n.stateNode));
        break;
      case 4:
        a = _e, o = pt, _e = n.stateNode.containerInfo, pt = !0, hn(
          e,
          t,
          n
        ), _e = a, pt = o;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        zn(2, n, t), Ke || zn(4, n, t), hn(
          e,
          t,
          n
        );
        break;
      case 1:
        Ke || (Jt(n, t), a = n.stateNode, typeof a.componentWillUnmount == "function" && $m(
          n,
          t,
          a
        )), hn(
          e,
          t,
          n
        );
        break;
      case 21:
        hn(
          e,
          t,
          n
        );
        break;
      case 22:
        Ke = (a = Ke) || n.memoizedState !== null, hn(
          e,
          t,
          n
        ), Ke = a;
        break;
      default:
        hn(
          e,
          t,
          n
        );
    }
  }
  function sp(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        ua(e);
      } catch (n) {
        Ce(t, t.return, n);
      }
    }
  }
  function op(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        ua(e);
      } catch (n) {
        Ce(t, t.return, n);
      }
  }
  function Ax(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new tp()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new tp()), t;
      default:
        throw Error(r(435, e.tag));
    }
  }
  function Do(e, t) {
    var n = Ax(e);
    t.forEach(function(a) {
      if (!n.has(a)) {
        n.add(a);
        var o = Lx.bind(null, e, a);
        a.then(o, o);
      }
    });
  }
  function ht(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var a = 0; a < n.length; a++) {
        var o = n[a], u = e, d = t, b = d;
        e: for (; b !== null; ) {
          switch (b.tag) {
            case 27:
              if (qn(b.type)) {
                _e = b.stateNode, pt = !1;
                break e;
              }
              break;
            case 5:
              _e = b.stateNode, pt = !1;
              break e;
            case 3:
            case 4:
              _e = b.stateNode.containerInfo, pt = !0;
              break e;
          }
          b = b.return;
        }
        if (_e === null) throw Error(r(160));
        ap(u, d, o), _e = null, pt = !1, u = o.alternate, u !== null && (u.return = null), o.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        lp(t, e), t = t.sibling;
  }
  var Gt = null;
  function lp(e, t) {
    var n = e.alternate, a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        ht(t, e), gt(e), a & 4 && (zn(3, e, e.return), $a(3, e), zn(5, e, e.return));
        break;
      case 1:
        ht(t, e), gt(e), a & 512 && (Ke || n === null || Jt(n, n.return)), a & 64 && pn && (e = e.updateQueue, e !== null && (a = e.callbacks, a !== null && (n = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = n === null ? a : n.concat(a))));
        break;
      case 26:
        var o = Gt;
        if (ht(t, e), gt(e), a & 512 && (Ke || n === null || Jt(n, n.return)), a & 4) {
          var u = n !== null ? n.memoizedState : null;
          if (a = e.memoizedState, n === null)
            if (a === null)
              if (e.stateNode === null) {
                e: {
                  a = e.type, n = e.memoizedProps, o = o.ownerDocument || o;
                  t: switch (a) {
                    case "title":
                      u = o.getElementsByTagName("title")[0], (!u || u[wa] || u[et] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = o.createElement(a), o.head.insertBefore(
                        u,
                        o.querySelector("head > title")
                      )), at(u, a, n), u[et] = e, We(u), a = u;
                      break e;
                    case "link":
                      var d = lh(
                        "link",
                        "href",
                        o
                      ).get(a + (n.href || ""));
                      if (d) {
                        for (var b = 0; b < d.length; b++)
                          if (u = d[b], u.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && u.getAttribute("rel") === (n.rel == null ? null : n.rel) && u.getAttribute("title") === (n.title == null ? null : n.title) && u.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
                            d.splice(b, 1);
                            break t;
                          }
                      }
                      u = o.createElement(a), at(u, a, n), o.head.appendChild(u);
                      break;
                    case "meta":
                      if (d = lh(
                        "meta",
                        "content",
                        o
                      ).get(a + (n.content || ""))) {
                        for (b = 0; b < d.length; b++)
                          if (u = d[b], u.getAttribute("content") === (n.content == null ? null : "" + n.content) && u.getAttribute("name") === (n.name == null ? null : n.name) && u.getAttribute("property") === (n.property == null ? null : n.property) && u.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && u.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
                            d.splice(b, 1);
                            break t;
                          }
                      }
                      u = o.createElement(a), at(u, a, n), o.head.appendChild(u);
                      break;
                    default:
                      throw Error(r(468, a));
                  }
                  u[et] = e, We(u), a = u;
                }
                e.stateNode = a;
              } else
                rh(
                  o,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = oh(
                o,
                a,
                e.memoizedProps
              );
          else
            u !== a ? (u === null ? n.stateNode !== null && (n = n.stateNode, n.parentNode.removeChild(n)) : u.count--, a === null ? rh(
              o,
              e.type,
              e.stateNode
            ) : oh(
              o,
              a,
              e.memoizedProps
            )) : a === null && e.stateNode !== null && au(
              e,
              e.memoizedProps,
              n.memoizedProps
            );
        }
        break;
      case 27:
        ht(t, e), gt(e), a & 512 && (Ke || n === null || Jt(n, n.return)), n !== null && a & 4 && au(
          e,
          e.memoizedProps,
          n.memoizedProps
        );
        break;
      case 5:
        if (ht(t, e), gt(e), a & 512 && (Ke || n === null || Jt(n, n.return)), e.flags & 32) {
          o = e.stateNode;
          try {
            ji(o, "");
          } catch (ie) {
            Ce(e, e.return, ie);
          }
        }
        a & 4 && e.stateNode != null && (o = e.memoizedProps, au(
          e,
          o,
          n !== null ? n.memoizedProps : o
        )), a & 1024 && (lu = !0);
        break;
      case 6:
        if (ht(t, e), gt(e), a & 4) {
          if (e.stateNode === null)
            throw Error(r(162));
          a = e.memoizedProps, n = e.stateNode;
          try {
            n.nodeValue = a;
          } catch (ie) {
            Ce(e, e.return, ie);
          }
        }
        break;
      case 3:
        if (Uo = null, o = Gt, Gt = _o(t.containerInfo), ht(t, e), Gt = o, gt(e), a & 4 && n !== null && n.memoizedState.isDehydrated)
          try {
            ua(t.containerInfo);
          } catch (ie) {
            Ce(e, e.return, ie);
          }
        lu && (lu = !1, rp(e));
        break;
      case 4:
        a = Gt, Gt = _o(
          e.stateNode.containerInfo
        ), ht(t, e), gt(e), Gt = a;
        break;
      case 12:
        ht(t, e), gt(e);
        break;
      case 31:
        ht(t, e), gt(e), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, Do(e, a)));
        break;
      case 13:
        ht(t, e), gt(e), e.child.flags & 8192 && e.memoizedState !== null != (n !== null && n.memoizedState !== null) && (wo = yt()), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, Do(e, a)));
        break;
      case 22:
        o = e.memoizedState !== null;
        var S = n !== null && n.memoizedState !== null, k = pn, P = Ke;
        if (pn = k || o, Ke = P || S, ht(t, e), Ke = P, pn = k, gt(e), a & 8192)
          e: for (t = e.stateNode, t._visibility = o ? t._visibility & -2 : t._visibility | 1, o && (n === null || S || pn || Ke || bi(e)), n = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (n === null) {
                S = n = t;
                try {
                  if (u = S.stateNode, o)
                    d = u.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none";
                  else {
                    b = S.stateNode;
                    var U = S.memoizedProps.style, B = U != null && U.hasOwnProperty("display") ? U.display : null;
                    b.style.display = B == null || typeof B == "boolean" ? "" : ("" + B).trim();
                  }
                } catch (ie) {
                  Ce(S, S.return, ie);
                }
              }
            } else if (t.tag === 6) {
              if (n === null) {
                S = t;
                try {
                  S.stateNode.nodeValue = o ? "" : S.memoizedProps;
                } catch (ie) {
                  Ce(S, S.return, ie);
                }
              }
            } else if (t.tag === 18) {
              if (n === null) {
                S = t;
                try {
                  var M = S.stateNode;
                  o ? $p(M, !0) : $p(S.stateNode, !1);
                } catch (ie) {
                  Ce(S, S.return, ie);
                }
              }
            } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
              t.child.return = t, t = t.child;
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e;
              n === t && (n = null), t = t.return;
            }
            n === t && (n = null), t.sibling.return = t.return, t = t.sibling;
          }
        a & 4 && (a = e.updateQueue, a !== null && (n = a.retryQueue, n !== null && (a.retryQueue = null, Do(e, n))));
        break;
      case 19:
        ht(t, e), gt(e), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, Do(e, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        ht(t, e), gt(e);
    }
  }
  function gt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var n, a = e.return; a !== null; ) {
          if (Im(a)) {
            n = a;
            break;
          }
          a = a.return;
        }
        if (n == null) throw Error(r(160));
        switch (n.tag) {
          case 27:
            var o = n.stateNode, u = su(e);
            So(e, u, o);
            break;
          case 5:
            var d = n.stateNode;
            n.flags & 32 && (ji(d, ""), n.flags &= -33);
            var b = su(e);
            So(e, b, d);
            break;
          case 3:
          case 4:
            var S = n.stateNode.containerInfo, k = su(e);
            ou(
              e,
              k,
              S
            );
            break;
          default:
            throw Error(r(161));
        }
      } catch (P) {
        Ce(e, e.return, P);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function rp(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        rp(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
      }
  }
  function gn(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        np(e, t.alternate, t), t = t.sibling;
  }
  function bi(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          zn(4, t, t.return), bi(t);
          break;
        case 1:
          Jt(t, t.return);
          var n = t.stateNode;
          typeof n.componentWillUnmount == "function" && $m(
            t,
            t.return,
            n
          ), bi(t);
          break;
        case 27:
          ls(t.stateNode);
        case 26:
        case 5:
          Jt(t, t.return), bi(t);
          break;
        case 22:
          t.memoizedState === null && bi(t);
          break;
        case 30:
          bi(t);
          break;
        default:
          bi(t);
      }
      e = e.sibling;
    }
  }
  function bn(e, t, n) {
    for (n = n && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var a = t.alternate, o = e, u = t, d = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          bn(
            o,
            u,
            n
          ), $a(4, u);
          break;
        case 1:
          if (bn(
            o,
            u,
            n
          ), a = u, o = a.stateNode, typeof o.componentDidMount == "function")
            try {
              o.componentDidMount();
            } catch (k) {
              Ce(a, a.return, k);
            }
          if (a = u, o = a.updateQueue, o !== null) {
            var b = a.stateNode;
            try {
              var S = o.shared.hiddenCallbacks;
              if (S !== null)
                for (o.shared.hiddenCallbacks = null, o = 0; o < S.length; o++)
                  Ud(S[o], b);
            } catch (k) {
              Ce(a, a.return, k);
            }
          }
          n && d & 64 && Jm(u), Wa(u, u.return);
          break;
        case 27:
          ep(u);
        case 26:
        case 5:
          bn(
            o,
            u,
            n
          ), n && a === null && d & 4 && Wm(u), Wa(u, u.return);
          break;
        case 12:
          bn(
            o,
            u,
            n
          );
          break;
        case 31:
          bn(
            o,
            u,
            n
          ), n && d & 4 && sp(o, u);
          break;
        case 13:
          bn(
            o,
            u,
            n
          ), n && d & 4 && op(o, u);
          break;
        case 22:
          u.memoizedState === null && bn(
            o,
            u,
            n
          ), Wa(u, u.return);
          break;
        case 30:
          break;
        default:
          bn(
            o,
            u,
            n
          );
      }
      t = t.sibling;
    }
  }
  function ru(e, t) {
    var n = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== n && (e != null && e.refCount++, n != null && Oa(n));
  }
  function uu(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Oa(e));
  }
  function Yt(e, t, n, a) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        up(
          e,
          t,
          n,
          a
        ), t = t.sibling;
  }
  function up(e, t, n, a) {
    var o = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Yt(
          e,
          t,
          n,
          a
        ), o & 2048 && $a(9, t);
        break;
      case 1:
        Yt(
          e,
          t,
          n,
          a
        );
        break;
      case 3:
        Yt(
          e,
          t,
          n,
          a
        ), o & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Oa(e)));
        break;
      case 12:
        if (o & 2048) {
          Yt(
            e,
            t,
            n,
            a
          ), e = t.stateNode;
          try {
            var u = t.memoizedProps, d = u.id, b = u.onPostCommit;
            typeof b == "function" && b(
              d,
              t.alternate === null ? "mount" : "update",
              e.passiveEffectDuration,
              -0
            );
          } catch (S) {
            Ce(t, t.return, S);
          }
        } else
          Yt(
            e,
            t,
            n,
            a
          );
        break;
      case 31:
        Yt(
          e,
          t,
          n,
          a
        );
        break;
      case 13:
        Yt(
          e,
          t,
          n,
          a
        );
        break;
      case 23:
        break;
      case 22:
        u = t.stateNode, d = t.alternate, t.memoizedState !== null ? u._visibility & 2 ? Yt(
          e,
          t,
          n,
          a
        ) : Ia(e, t) : u._visibility & 2 ? Yt(
          e,
          t,
          n,
          a
        ) : (u._visibility |= 2, Wi(
          e,
          t,
          n,
          a,
          (t.subtreeFlags & 10256) !== 0 || !1
        )), o & 2048 && ru(d, t);
        break;
      case 24:
        Yt(
          e,
          t,
          n,
          a
        ), o & 2048 && uu(t.alternate, t);
        break;
      default:
        Yt(
          e,
          t,
          n,
          a
        );
    }
  }
  function Wi(e, t, n, a, o) {
    for (o = o && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var u = e, d = t, b = n, S = a, k = d.flags;
      switch (d.tag) {
        case 0:
        case 11:
        case 15:
          Wi(
            u,
            d,
            b,
            S,
            o
          ), $a(8, d);
          break;
        case 23:
          break;
        case 22:
          var P = d.stateNode;
          d.memoizedState !== null ? P._visibility & 2 ? Wi(
            u,
            d,
            b,
            S,
            o
          ) : Ia(
            u,
            d
          ) : (P._visibility |= 2, Wi(
            u,
            d,
            b,
            S,
            o
          )), o && k & 2048 && ru(
            d.alternate,
            d
          );
          break;
        case 24:
          Wi(
            u,
            d,
            b,
            S,
            o
          ), o && k & 2048 && uu(d.alternate, d);
          break;
        default:
          Wi(
            u,
            d,
            b,
            S,
            o
          );
      }
      t = t.sibling;
    }
  }
  function Ia(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var n = e, a = t, o = a.flags;
        switch (a.tag) {
          case 22:
            Ia(n, a), o & 2048 && ru(
              a.alternate,
              a
            );
            break;
          case 24:
            Ia(n, a), o & 2048 && uu(a.alternate, a);
            break;
          default:
            Ia(n, a);
        }
        t = t.sibling;
      }
  }
  var es = 8192;
  function Ii(e, t, n) {
    if (e.subtreeFlags & es)
      for (e = e.child; e !== null; )
        cp(
          e,
          t,
          n
        ), e = e.sibling;
  }
  function cp(e, t, n) {
    switch (e.tag) {
      case 26:
        Ii(
          e,
          t,
          n
        ), e.flags & es && e.memoizedState !== null && b1(
          n,
          Gt,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        Ii(
          e,
          t,
          n
        );
        break;
      case 3:
      case 4:
        var a = Gt;
        Gt = _o(e.stateNode.containerInfo), Ii(
          e,
          t,
          n
        ), Gt = a;
        break;
      case 22:
        e.memoizedState === null && (a = e.alternate, a !== null && a.memoizedState !== null ? (a = es, es = 16777216, Ii(
          e,
          t,
          n
        ), es = a) : Ii(
          e,
          t,
          n
        ));
        break;
      default:
        Ii(
          e,
          t,
          n
        );
    }
  }
  function fp(e) {
    var t = e.alternate;
    if (t !== null && (e = t.child, e !== null)) {
      t.child = null;
      do
        t = e.sibling, e.sibling = null, e = t;
      while (e !== null);
    }
  }
  function ts(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var a = t[n];
          Ie = a, mp(
            a,
            e
          );
        }
      fp(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        dp(e), e = e.sibling;
  }
  function dp(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        ts(e), e.flags & 2048 && zn(9, e, e.return);
        break;
      case 3:
        ts(e);
        break;
      case 12:
        ts(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, Eo(e)) : ts(e);
        break;
      default:
        ts(e);
    }
  }
  function Eo(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var a = t[n];
          Ie = a, mp(
            a,
            e
          );
        }
      fp(e);
    }
    for (e = e.child; e !== null; ) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          zn(8, t, t.return), Eo(t);
          break;
        case 22:
          n = t.stateNode, n._visibility & 2 && (n._visibility &= -3, Eo(t));
          break;
        default:
          Eo(t);
      }
      e = e.sibling;
    }
  }
  function mp(e, t) {
    for (; Ie !== null; ) {
      var n = Ie;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          zn(8, n, t);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var a = n.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          Oa(n.memoizedState.cache);
      }
      if (a = n.child, a !== null) a.return = n, Ie = a;
      else
        e: for (n = e; Ie !== null; ) {
          a = Ie;
          var o = a.sibling, u = a.return;
          if (ip(a), a === n) {
            Ie = null;
            break e;
          }
          if (o !== null) {
            o.return = u, Ie = o;
            break e;
          }
          Ie = u;
        }
    }
  }
  var jx = {
    getCacheForType: function(e) {
      var t = nt(Xe), n = t.data.get(e);
      return n === void 0 && (n = e(), t.data.set(e, n)), n;
    },
    cacheSignal: function() {
      return nt(Xe).controller.signal;
    }
  }, Mx = typeof WeakMap == "function" ? WeakMap : Map, we = 0, je = null, ge = null, ve = 0, Te = 0, Tt = null, Rn = !1, ea = !1, cu = !1, vn = 0, He = 0, _n = 0, vi = 0, fu = 0, Ct = 0, ta = 0, ns = null, bt = null, du = !1, wo = 0, pp = 0, Vo = 1 / 0, To = null, On = null, Je = 0, Un = null, na = null, xn = 0, mu = 0, pu = null, hp = null, is = 0, hu = null;
  function kt() {
    return (we & 2) !== 0 && ve !== 0 ? ve & -ve : j.T !== null ? Nu() : Af();
  }
  function gp() {
    if (Ct === 0)
      if ((ve & 536870912) === 0 || ye) {
        var e = Ps;
        Ps <<= 1, (Ps & 3932160) === 0 && (Ps = 262144), Ct = e;
      } else Ct = 536870912;
    return e = wt.current, e !== null && (e.flags |= 32), Ct;
  }
  function vt(e, t, n) {
    (e === je && (Te === 2 || Te === 9) || e.cancelPendingCommit !== null) && (ia(e, 0), Ln(
      e,
      ve,
      Ct,
      !1
    )), Ea(e, n), ((we & 2) === 0 || e !== je) && (e === je && ((we & 2) === 0 && (vi |= n), He === 4 && Ln(
      e,
      ve,
      Ct,
      !1
    )), $t(e));
  }
  function bp(e, t, n) {
    if ((we & 6) !== 0) throw Error(r(327));
    var a = !n && (t & 127) === 0 && (t & e.expiredLanes) === 0 || Da(e, t), o = a ? Rx(e, t) : bu(e, t, !0), u = a;
    do {
      if (o === 0) {
        ea && !a && Ln(e, t, 0, !1);
        break;
      } else {
        if (n = e.current.alternate, u && !Px(n)) {
          o = bu(e, t, !1), u = !1;
          continue;
        }
        if (o === 2) {
          if (u = t, e.errorRecoveryDisabledLanes & u)
            var d = 0;
          else
            d = e.pendingLanes & -536870913, d = d !== 0 ? d : d & 536870912 ? 536870912 : 0;
          if (d !== 0) {
            t = d;
            e: {
              var b = e;
              o = ns;
              var S = b.current.memoizedState.isDehydrated;
              if (S && (ia(b, d).flags |= 256), d = bu(
                b,
                d,
                !1
              ), d !== 2) {
                if (cu && !S) {
                  b.errorRecoveryDisabledLanes |= u, vi |= u, o = 4;
                  break e;
                }
                u = bt, bt = o, u !== null && (bt === null ? bt = u : bt.push.apply(
                  bt,
                  u
                ));
              }
              o = d;
            }
            if (u = !1, o !== 2) continue;
          }
        }
        if (o === 1) {
          ia(e, 0), Ln(e, t, 0, !0);
          break;
        }
        e: {
          switch (a = e, u = o, u) {
            case 0:
            case 1:
              throw Error(r(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              Ln(
                a,
                t,
                Ct,
                !Rn
              );
              break e;
            case 2:
              bt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(r(329));
          }
          if ((t & 62914560) === t && (o = wo + 300 - yt(), 10 < o)) {
            if (Ln(
              a,
              t,
              Ct,
              !Rn
            ), Rs(a, 0, !0) !== 0) break e;
            xn = t, a.timeoutHandle = Kp(
              vp.bind(
                null,
                a,
                n,
                bt,
                To,
                du,
                t,
                Ct,
                vi,
                ta,
                Rn,
                u,
                "Throttled",
                -0,
                0
              ),
              o
            );
            break e;
          }
          vp(
            a,
            n,
            bt,
            To,
            du,
            t,
            Ct,
            vi,
            ta,
            Rn,
            u,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    $t(e);
  }
  function vp(e, t, n, a, o, u, d, b, S, k, P, U, B, M) {
    if (e.timeoutHandle = -1, U = t.subtreeFlags, U & 8192 || (U & 16785408) === 16785408) {
      U = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: an
      }, cp(
        t,
        u,
        U
      );
      var ie = (u & 62914560) === u ? wo - yt() : (u & 4194048) === u ? pp - yt() : 0;
      if (ie = v1(
        U,
        ie
      ), ie !== null) {
        xn = u, e.cancelPendingCommit = ie(
          Vp.bind(
            null,
            e,
            t,
            u,
            n,
            a,
            o,
            d,
            b,
            S,
            P,
            U,
            null,
            B,
            M
          )
        ), Ln(e, u, d, !k);
        return;
      }
    }
    Vp(
      e,
      t,
      u,
      n,
      a,
      o,
      d,
      b,
      S
    );
  }
  function Px(e) {
    for (var t = e; ; ) {
      var n = t.tag;
      if ((n === 0 || n === 11 || n === 15) && t.flags & 16384 && (n = t.updateQueue, n !== null && (n = n.stores, n !== null)))
        for (var a = 0; a < n.length; a++) {
          var o = n[a], u = o.getSnapshot;
          o = o.value;
          try {
            if (!Dt(u(), o)) return !1;
          } catch {
            return !1;
          }
        }
      if (n = t.child, t.subtreeFlags & 16384 && n !== null)
        n.return = t, t = n;
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return !0;
  }
  function Ln(e, t, n, a) {
    t &= ~fu, t &= ~vi, e.suspendedLanes |= t, e.pingedLanes &= ~t, a && (e.warmLanes |= t), a = e.expirationTimes;
    for (var o = t; 0 < o; ) {
      var u = 31 - St(o), d = 1 << u;
      a[u] = -1, o &= ~d;
    }
    n !== 0 && Cf(e, n, t);
  }
  function Co() {
    return (we & 6) === 0 ? (as(0), !1) : !0;
  }
  function gu() {
    if (ge !== null) {
      if (Te === 0)
        var e = ge.return;
      else
        e = ge, rn = ui = null, jr(e), Qi = null, La = 0, e = ge;
      for (; e !== null; )
        Zm(e.alternate, e), e = e.return;
      ge = null;
    }
  }
  function ia(e, t) {
    var n = e.timeoutHandle;
    n !== -1 && (e.timeoutHandle = -1, e1(n)), n = e.cancelPendingCommit, n !== null && (e.cancelPendingCommit = null, n()), xn = 0, gu(), je = e, ge = n = on(e.current, null), ve = t, Te = 0, Tt = null, Rn = !1, ea = Da(e, t), cu = !1, ta = Ct = fu = vi = _n = He = 0, bt = ns = null, du = !1, (t & 8) !== 0 && (t |= t & 32);
    var a = e.entangledLanes;
    if (a !== 0)
      for (e = e.entanglements, a &= t; 0 < a; ) {
        var o = 31 - St(a), u = 1 << o;
        t |= e[o], a &= ~u;
      }
    return vn = t, Ks(), n;
  }
  function xp(e, t) {
    pe = null, j.H = Ka, t === Fi || t === no ? (t = zd(), Te = 3) : t === yr ? (t = zd(), Te = 4) : Te = t === Kr ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, Tt = t, ge === null && (He = 1, bo(
      e,
      Mt(t, e.current)
    ));
  }
  function yp() {
    var e = wt.current;
    return e === null ? !0 : (ve & 4194048) === ve ? _t === null : (ve & 62914560) === ve || (ve & 536870912) !== 0 ? e === _t : !1;
  }
  function Np() {
    var e = j.H;
    return j.H = Ka, e === null ? Ka : e;
  }
  function Sp() {
    var e = j.A;
    return j.A = jx, e;
  }
  function ko() {
    He = 4, Rn || (ve & 4194048) !== ve && wt.current !== null || (ea = !0), (_n & 134217727) === 0 && (vi & 134217727) === 0 || je === null || Ln(
      je,
      ve,
      Ct,
      !1
    );
  }
  function bu(e, t, n) {
    var a = we;
    we |= 2;
    var o = Np(), u = Sp();
    (je !== e || ve !== t) && (To = null, ia(e, t)), t = !1;
    var d = He;
    e: do
      try {
        if (Te !== 0 && ge !== null) {
          var b = ge, S = Tt;
          switch (Te) {
            case 8:
              gu(), d = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              wt.current === null && (t = !0);
              var k = Te;
              if (Te = 0, Tt = null, aa(e, b, S, k), n && ea) {
                d = 0;
                break e;
              }
              break;
            default:
              k = Te, Te = 0, Tt = null, aa(e, b, S, k);
          }
        }
        zx(), d = He;
        break;
      } catch (P) {
        xp(e, P);
      }
    while (!0);
    return t && e.shellSuspendCounter++, rn = ui = null, we = a, j.H = o, j.A = u, ge === null && (je = null, ve = 0, Ks()), d;
  }
  function zx() {
    for (; ge !== null; ) Dp(ge);
  }
  function Rx(e, t) {
    var n = we;
    we |= 2;
    var a = Np(), o = Sp();
    je !== e || ve !== t ? (To = null, Vo = yt() + 500, ia(e, t)) : ea = Da(
      e,
      t
    );
    e: do
      try {
        if (Te !== 0 && ge !== null) {
          t = ge;
          var u = Tt;
          t: switch (Te) {
            case 1:
              Te = 0, Tt = null, aa(e, t, u, 1);
              break;
            case 2:
            case 9:
              if (Md(u)) {
                Te = 0, Tt = null, Ep(t);
                break;
              }
              t = function() {
                Te !== 2 && Te !== 9 || je !== e || (Te = 7), $t(e);
              }, u.then(t, t);
              break e;
            case 3:
              Te = 7;
              break e;
            case 4:
              Te = 5;
              break e;
            case 7:
              Md(u) ? (Te = 0, Tt = null, Ep(t)) : (Te = 0, Tt = null, aa(e, t, u, 7));
              break;
            case 5:
              var d = null;
              switch (ge.tag) {
                case 26:
                  d = ge.memoizedState;
                case 5:
                case 27:
                  var b = ge;
                  if (d ? uh(d) : b.stateNode.complete) {
                    Te = 0, Tt = null;
                    var S = b.sibling;
                    if (S !== null) ge = S;
                    else {
                      var k = b.return;
                      k !== null ? (ge = k, Bo(k)) : ge = null;
                    }
                    break t;
                  }
              }
              Te = 0, Tt = null, aa(e, t, u, 5);
              break;
            case 6:
              Te = 0, Tt = null, aa(e, t, u, 6);
              break;
            case 8:
              gu(), He = 6;
              break e;
            default:
              throw Error(r(462));
          }
        }
        _x();
        break;
      } catch (P) {
        xp(e, P);
      }
    while (!0);
    return rn = ui = null, j.H = a, j.A = o, we = n, ge !== null ? 0 : (je = null, ve = 0, Ks(), He);
  }
  function _x() {
    for (; ge !== null && !ov(); )
      Dp(ge);
  }
  function Dp(e) {
    var t = Qm(e.alternate, e, vn);
    e.memoizedProps = e.pendingProps, t === null ? Bo(e) : ge = t;
  }
  function Ep(e) {
    var t = e, n = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Hm(
          n,
          t,
          t.pendingProps,
          t.type,
          void 0,
          ve
        );
        break;
      case 11:
        t = Hm(
          n,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          ve
        );
        break;
      case 5:
        jr(t);
      default:
        Zm(n, t), t = ge = Sd(t, vn), t = Qm(n, t, vn);
    }
    e.memoizedProps = e.pendingProps, t === null ? Bo(e) : ge = t;
  }
  function aa(e, t, n, a) {
    rn = ui = null, jr(t), Qi = null, La = 0;
    var o = t.return;
    try {
      if (wx(
        e,
        o,
        t,
        n,
        ve
      )) {
        He = 1, bo(
          e,
          Mt(n, e.current)
        ), ge = null;
        return;
      }
    } catch (u) {
      if (o !== null) throw ge = o, u;
      He = 1, bo(
        e,
        Mt(n, e.current)
      ), ge = null;
      return;
    }
    t.flags & 32768 ? (ye || a === 1 ? e = !0 : ea || (ve & 536870912) !== 0 ? e = !1 : (Rn = e = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = wt.current, a !== null && a.tag === 13 && (a.flags |= 16384))), wp(t, e)) : Bo(t);
  }
  function Bo(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        wp(
          t,
          Rn
        );
        return;
      }
      e = t.return;
      var n = Cx(
        t.alternate,
        t,
        vn
      );
      if (n !== null) {
        ge = n;
        return;
      }
      if (t = t.sibling, t !== null) {
        ge = t;
        return;
      }
      ge = t = e;
    } while (t !== null);
    He === 0 && (He = 5);
  }
  function wp(e, t) {
    do {
      var n = kx(e.alternate, e);
      if (n !== null) {
        n.flags &= 32767, ge = n;
        return;
      }
      if (n = e.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !t && (e = e.sibling, e !== null)) {
        ge = e;
        return;
      }
      ge = e = n;
    } while (e !== null);
    He = 6, ge = null;
  }
  function Vp(e, t, n, a, o, u, d, b, S) {
    e.cancelPendingCommit = null;
    do
      Ao();
    while (Je !== 0);
    if ((we & 6) !== 0) throw Error(r(327));
    if (t !== null) {
      if (t === e.current) throw Error(r(177));
      if (u = t.lanes | t.childLanes, u |= sr, gv(
        e,
        n,
        u,
        d,
        b,
        S
      ), e === je && (ge = je = null, ve = 0), na = t, Un = e, xn = n, mu = u, pu = o, hp = a, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, Hx(js, function() {
        return Ap(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), a = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || a) {
        a = j.T, j.T = null, o = $.p, $.p = 2, d = we, we |= 4;
        try {
          Bx(e, t, n);
        } finally {
          we = d, $.p = o, j.T = a;
        }
      }
      Je = 1, Tp(), Cp(), kp();
    }
  }
  function Tp() {
    if (Je === 1) {
      Je = 0;
      var e = Un, t = na, n = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || n) {
        n = j.T, j.T = null;
        var a = $.p;
        $.p = 2;
        var o = we;
        we |= 4;
        try {
          lp(t, e);
          var u = ku, d = md(e.containerInfo), b = u.focusedElem, S = u.selectionRange;
          if (d !== b && b && b.ownerDocument && dd(
            b.ownerDocument.documentElement,
            b
          )) {
            if (S !== null && er(b)) {
              var k = S.start, P = S.end;
              if (P === void 0 && (P = k), "selectionStart" in b)
                b.selectionStart = k, b.selectionEnd = Math.min(
                  P,
                  b.value.length
                );
              else {
                var U = b.ownerDocument || document, B = U && U.defaultView || window;
                if (B.getSelection) {
                  var M = B.getSelection(), ie = b.textContent.length, re = Math.min(S.start, ie), Ae = S.end === void 0 ? re : Math.min(S.end, ie);
                  !M.extend && re > Ae && (d = Ae, Ae = re, re = d);
                  var w = fd(
                    b,
                    re
                  ), E = fd(
                    b,
                    Ae
                  );
                  if (w && E && (M.rangeCount !== 1 || M.anchorNode !== w.node || M.anchorOffset !== w.offset || M.focusNode !== E.node || M.focusOffset !== E.offset)) {
                    var C = U.createRange();
                    C.setStart(w.node, w.offset), M.removeAllRanges(), re > Ae ? (M.addRange(C), M.extend(E.node, E.offset)) : (C.setEnd(E.node, E.offset), M.addRange(C));
                  }
                }
              }
            }
            for (U = [], M = b; M = M.parentNode; )
              M.nodeType === 1 && U.push({
                element: M,
                left: M.scrollLeft,
                top: M.scrollTop
              });
            for (typeof b.focus == "function" && b.focus(), b = 0; b < U.length; b++) {
              var O = U[b];
              O.element.scrollLeft = O.left, O.element.scrollTop = O.top;
            }
          }
          Go = !!Cu, ku = Cu = null;
        } finally {
          we = o, $.p = a, j.T = n;
        }
      }
      e.current = t, Je = 2;
    }
  }
  function Cp() {
    if (Je === 2) {
      Je = 0;
      var e = Un, t = na, n = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || n) {
        n = j.T, j.T = null;
        var a = $.p;
        $.p = 2;
        var o = we;
        we |= 4;
        try {
          np(e, t.alternate, t);
        } finally {
          we = o, $.p = a, j.T = n;
        }
      }
      Je = 3;
    }
  }
  function kp() {
    if (Je === 4 || Je === 3) {
      Je = 0, lv();
      var e = Un, t = na, n = xn, a = hp;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Je = 5 : (Je = 0, na = Un = null, Bp(e, e.pendingLanes));
      var o = e.pendingLanes;
      if (o === 0 && (On = null), zl(n), t = t.stateNode, Nt && typeof Nt.onCommitFiberRoot == "function")
        try {
          Nt.onCommitFiberRoot(
            Sa,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (a !== null) {
        t = j.T, o = $.p, $.p = 2, j.T = null;
        try {
          for (var u = e.onRecoverableError, d = 0; d < a.length; d++) {
            var b = a[d];
            u(b.value, {
              componentStack: b.stack
            });
          }
        } finally {
          j.T = t, $.p = o;
        }
      }
      (xn & 3) !== 0 && Ao(), $t(e), o = e.pendingLanes, (n & 261930) !== 0 && (o & 42) !== 0 ? e === hu ? is++ : (is = 0, hu = e) : is = 0, as(0);
    }
  }
  function Bp(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, Oa(t)));
  }
  function Ao() {
    return Tp(), Cp(), kp(), Ap();
  }
  function Ap() {
    if (Je !== 5) return !1;
    var e = Un, t = mu;
    mu = 0;
    var n = zl(xn), a = j.T, o = $.p;
    try {
      $.p = 32 > n ? 32 : n, j.T = null, n = pu, pu = null;
      var u = Un, d = xn;
      if (Je = 0, na = Un = null, xn = 0, (we & 6) !== 0) throw Error(r(331));
      var b = we;
      if (we |= 4, dp(u.current), up(
        u,
        u.current,
        d,
        n
      ), we = b, as(0, !1), Nt && typeof Nt.onPostCommitFiberRoot == "function")
        try {
          Nt.onPostCommitFiberRoot(Sa, u);
        } catch {
        }
      return !0;
    } finally {
      $.p = o, j.T = a, Bp(e, t);
    }
  }
  function jp(e, t, n) {
    t = Mt(n, t), t = Qr(e.stateNode, t, 2), e = jn(e, t, 2), e !== null && (Ea(e, 2), $t(e));
  }
  function Ce(e, t, n) {
    if (e.tag === 3)
      jp(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          jp(
            t,
            e,
            n
          );
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (On === null || !On.has(a))) {
            e = Mt(n, e), n = Mm(2), a = jn(t, n, 2), a !== null && (Pm(
              n,
              a,
              t,
              e
            ), Ea(a, 2), $t(a));
            break;
          }
        }
        t = t.return;
      }
  }
  function vu(e, t, n) {
    var a = e.pingCache;
    if (a === null) {
      a = e.pingCache = new Mx();
      var o = /* @__PURE__ */ new Set();
      a.set(t, o);
    } else
      o = a.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), a.set(t, o));
    o.has(n) || (cu = !0, o.add(n), e = Ox.bind(null, e, t, n), t.then(e, e));
  }
  function Ox(e, t, n) {
    var a = e.pingCache;
    a !== null && a.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, je === e && (ve & n) === n && (He === 4 || He === 3 && (ve & 62914560) === ve && 300 > yt() - wo ? (we & 2) === 0 && ia(e, 0) : fu |= n, ta === ve && (ta = 0)), $t(e);
  }
  function Mp(e, t) {
    t === 0 && (t = Tf()), e = oi(e, t), e !== null && (Ea(e, t), $t(e));
  }
  function Ux(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), Mp(e, n);
  }
  function Lx(e, t) {
    var n = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var a = e.stateNode, o = e.memoizedState;
        o !== null && (n = o.retryLane);
        break;
      case 19:
        a = e.stateNode;
        break;
      case 22:
        a = e.stateNode._retryCache;
        break;
      default:
        throw Error(r(314));
    }
    a !== null && a.delete(t), Mp(e, n);
  }
  function Hx(e, t) {
    return Al(e, t);
  }
  var jo = null, sa = null, xu = !1, Mo = !1, yu = !1, Hn = 0;
  function $t(e) {
    e !== sa && e.next === null && (sa === null ? jo = sa = e : sa = sa.next = e), Mo = !0, xu || (xu = !0, Gx());
  }
  function as(e, t) {
    if (!yu && Mo) {
      yu = !0;
      do
        for (var n = !1, a = jo; a !== null; ) {
          if (e !== 0) {
            var o = a.pendingLanes;
            if (o === 0) var u = 0;
            else {
              var d = a.suspendedLanes, b = a.pingedLanes;
              u = (1 << 31 - St(42 | e) + 1) - 1, u &= o & ~(d & ~b), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0;
            }
            u !== 0 && (n = !0, _p(a, u));
          } else
            u = ve, u = Rs(
              a,
              a === je ? u : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (u & 3) === 0 || Da(a, u) || (n = !0, _p(a, u));
          a = a.next;
        }
      while (n);
      yu = !1;
    }
  }
  function qx() {
    Pp();
  }
  function Pp() {
    Mo = xu = !1;
    var e = 0;
    Hn !== 0 && Ix() && (e = Hn);
    for (var t = yt(), n = null, a = jo; a !== null; ) {
      var o = a.next, u = zp(a, t);
      u === 0 ? (a.next = null, n === null ? jo = o : n.next = o, o === null && (sa = n)) : (n = a, (e !== 0 || (u & 3) !== 0) && (Mo = !0)), a = o;
    }
    Je !== 0 && Je !== 5 || as(e), Hn !== 0 && (Hn = 0);
  }
  function zp(e, t) {
    for (var n = e.suspendedLanes, a = e.pingedLanes, o = e.expirationTimes, u = e.pendingLanes & -62914561; 0 < u; ) {
      var d = 31 - St(u), b = 1 << d, S = o[d];
      S === -1 ? ((b & n) === 0 || (b & a) !== 0) && (o[d] = hv(b, t)) : S <= t && (e.expiredLanes |= b), u &= ~b;
    }
    if (t = je, n = ve, n = Rs(
      e,
      e === t ? n : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), a = e.callbackNode, n === 0 || e === t && (Te === 2 || Te === 9) || e.cancelPendingCommit !== null)
      return a !== null && a !== null && jl(a), e.callbackNode = null, e.callbackPriority = 0;
    if ((n & 3) === 0 || Da(e, n)) {
      if (t = n & -n, t === e.callbackPriority) return t;
      switch (a !== null && jl(a), zl(n)) {
        case 2:
        case 8:
          n = wf;
          break;
        case 32:
          n = js;
          break;
        case 268435456:
          n = Vf;
          break;
        default:
          n = js;
      }
      return a = Rp.bind(null, e), n = Al(n, a), e.callbackPriority = t, e.callbackNode = n, t;
    }
    return a !== null && a !== null && jl(a), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function Rp(e, t) {
    if (Je !== 0 && Je !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var n = e.callbackNode;
    if (Ao() && e.callbackNode !== n)
      return null;
    var a = ve;
    return a = Rs(
      e,
      e === je ? a : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), a === 0 ? null : (bp(e, a, t), zp(e, yt()), e.callbackNode != null && e.callbackNode === n ? Rp.bind(null, e) : null);
  }
  function _p(e, t) {
    if (Ao()) return null;
    bp(e, t, !0);
  }
  function Gx() {
    t1(function() {
      (we & 6) !== 0 ? Al(
        Ef,
        qx
      ) : Pp();
    });
  }
  function Nu() {
    if (Hn === 0) {
      var e = Yi;
      e === 0 && (e = Ms, Ms <<= 1, (Ms & 261888) === 0 && (Ms = 256)), Hn = e;
    }
    return Hn;
  }
  function Op(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : Ls("" + e);
  }
  function Up(e, t) {
    var n = t.ownerDocument.createElement("input");
    return n.name = t.name, n.value = t.value, e.id && n.setAttribute("form", e.id), t.parentNode.insertBefore(n, t), e = new FormData(e), n.parentNode.removeChild(n), e;
  }
  function Yx(e, t, n, a, o) {
    if (t === "submit" && n && n.stateNode === o) {
      var u = Op(
        (o[dt] || null).action
      ), d = a.submitter;
      d && (t = (t = d[dt] || null) ? Op(t.formAction) : d.getAttribute("formAction"), t !== null && (u = t, d = null));
      var b = new Ys(
        "action",
        "action",
        null,
        a,
        o
      );
      e.push({
        event: b,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (a.defaultPrevented) {
                if (Hn !== 0) {
                  var S = d ? Up(o, d) : new FormData(o);
                  Hr(
                    n,
                    {
                      pending: !0,
                      data: S,
                      method: o.method,
                      action: u
                    },
                    null,
                    S
                  );
                }
              } else
                typeof u == "function" && (b.preventDefault(), S = d ? Up(o, d) : new FormData(o), Hr(
                  n,
                  {
                    pending: !0,
                    data: S,
                    method: o.method,
                    action: u
                  },
                  u,
                  S
                ));
            },
            currentTarget: o
          }
        ]
      });
    }
  }
  for (var Su = 0; Su < ar.length; Su++) {
    var Du = ar[Su], Xx = Du.toLowerCase(), Fx = Du[0].toUpperCase() + Du.slice(1);
    qt(
      Xx,
      "on" + Fx
    );
  }
  qt(gd, "onAnimationEnd"), qt(bd, "onAnimationIteration"), qt(vd, "onAnimationStart"), qt("dblclick", "onDoubleClick"), qt("focusin", "onFocus"), qt("focusout", "onBlur"), qt(rx, "onTransitionRun"), qt(ux, "onTransitionStart"), qt(cx, "onTransitionCancel"), qt(xd, "onTransitionEnd"), Bi("onMouseEnter", ["mouseout", "mouseover"]), Bi("onMouseLeave", ["mouseout", "mouseover"]), Bi("onPointerEnter", ["pointerout", "pointerover"]), Bi("onPointerLeave", ["pointerout", "pointerover"]), ni(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), ni(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), ni("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), ni(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), ni(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), ni(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var ss = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), Qx = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ss)
  );
  function Lp(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var a = e[n], o = a.event;
      a = a.listeners;
      e: {
        var u = void 0;
        if (t)
          for (var d = a.length - 1; 0 <= d; d--) {
            var b = a[d], S = b.instance, k = b.currentTarget;
            if (b = b.listener, S !== u && o.isPropagationStopped())
              break e;
            u = b, o.currentTarget = k;
            try {
              u(o);
            } catch (P) {
              Qs(P);
            }
            o.currentTarget = null, u = S;
          }
        else
          for (d = 0; d < a.length; d++) {
            if (b = a[d], S = b.instance, k = b.currentTarget, b = b.listener, S !== u && o.isPropagationStopped())
              break e;
            u = b, o.currentTarget = k;
            try {
              u(o);
            } catch (P) {
              Qs(P);
            }
            o.currentTarget = null, u = S;
          }
      }
    }
  }
  function be(e, t) {
    var n = t[Rl];
    n === void 0 && (n = t[Rl] = /* @__PURE__ */ new Set());
    var a = e + "__bubble";
    n.has(a) || (Hp(t, e, 2, !1), n.add(a));
  }
  function Eu(e, t, n) {
    var a = 0;
    t && (a |= 4), Hp(
      n,
      e,
      a,
      t
    );
  }
  var Po = "_reactListening" + Math.random().toString(36).slice(2);
  function wu(e) {
    if (!e[Po]) {
      e[Po] = !0, Pf.forEach(function(n) {
        n !== "selectionchange" && (Qx.has(n) || Eu(n, !1, e), Eu(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Po] || (t[Po] = !0, Eu("selectionchange", !1, t));
    }
  }
  function Hp(e, t, n, a) {
    switch (gh(t)) {
      case 2:
        var o = N1;
        break;
      case 8:
        o = S1;
        break;
      default:
        o = Lu;
    }
    n = o.bind(
      null,
      t,
      n,
      e
    ), o = void 0, !Xl || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), a ? o !== void 0 ? e.addEventListener(t, n, {
      capture: !0,
      passive: o
    }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, {
      passive: o
    }) : e.addEventListener(t, n, !1);
  }
  function Vu(e, t, n, a, o) {
    var u = a;
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
      e: for (; ; ) {
        if (a === null) return;
        var d = a.tag;
        if (d === 3 || d === 4) {
          var b = a.stateNode.containerInfo;
          if (b === o) break;
          if (d === 4)
            for (d = a.return; d !== null; ) {
              var S = d.tag;
              if ((S === 3 || S === 4) && d.stateNode.containerInfo === o)
                return;
              d = d.return;
            }
          for (; b !== null; ) {
            if (d = Ti(b), d === null) return;
            if (S = d.tag, S === 5 || S === 6 || S === 26 || S === 27) {
              a = u = d;
              continue e;
            }
            b = b.parentNode;
          }
        }
        a = a.return;
      }
    Ff(function() {
      var k = u, P = Gl(n), U = [];
      e: {
        var B = yd.get(e);
        if (B !== void 0) {
          var M = Ys, ie = e;
          switch (e) {
            case "keypress":
              if (qs(n) === 0) break e;
            case "keydown":
            case "keyup":
              M = Lv;
              break;
            case "focusin":
              ie = "focus", M = Zl;
              break;
            case "focusout":
              ie = "blur", M = Zl;
              break;
            case "beforeblur":
            case "afterblur":
              M = Zl;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              M = Zf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              M = Cv;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              M = Gv;
              break;
            case gd:
            case bd:
            case vd:
              M = Av;
              break;
            case xd:
              M = Xv;
              break;
            case "scroll":
            case "scrollend":
              M = Vv;
              break;
            case "wheel":
              M = Qv;
              break;
            case "copy":
            case "cut":
            case "paste":
              M = Mv;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              M = $f;
              break;
            case "toggle":
            case "beforetoggle":
              M = Zv;
          }
          var re = (t & 4) !== 0, Ae = !re && (e === "scroll" || e === "scrollend"), w = re ? B !== null ? B + "Capture" : null : B;
          re = [];
          for (var E = k, C; E !== null; ) {
            var O = E;
            if (C = O.stateNode, O = O.tag, O !== 5 && O !== 26 && O !== 27 || C === null || w === null || (O = Ta(E, w), O != null && re.push(
              os(E, O, C)
            )), Ae) break;
            E = E.return;
          }
          0 < re.length && (B = new M(
            B,
            ie,
            null,
            n,
            P
          ), U.push({ event: B, listeners: re }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (B = e === "mouseover" || e === "pointerover", M = e === "mouseout" || e === "pointerout", B && n !== ql && (ie = n.relatedTarget || n.fromElement) && (Ti(ie) || ie[Vi]))
            break e;
          if ((M || B) && (B = P.window === P ? P : (B = P.ownerDocument) ? B.defaultView || B.parentWindow : window, M ? (ie = n.relatedTarget || n.toElement, M = k, ie = ie ? Ti(ie) : null, ie !== null && (Ae = m(ie), re = ie.tag, ie !== Ae || re !== 5 && re !== 27 && re !== 6) && (ie = null)) : (M = null, ie = k), M !== ie)) {
            if (re = Zf, O = "onMouseLeave", w = "onMouseEnter", E = "mouse", (e === "pointerout" || e === "pointerover") && (re = $f, O = "onPointerLeave", w = "onPointerEnter", E = "pointer"), Ae = M == null ? B : Va(M), C = ie == null ? B : Va(ie), B = new re(
              O,
              E + "leave",
              M,
              n,
              P
            ), B.target = Ae, B.relatedTarget = C, O = null, Ti(P) === k && (re = new re(
              w,
              E + "enter",
              ie,
              n,
              P
            ), re.target = C, re.relatedTarget = Ae, O = re), Ae = O, M && ie)
              t: {
                for (re = Kx, w = M, E = ie, C = 0, O = w; O; O = re(O))
                  C++;
                O = 0;
                for (var le = E; le; le = re(le))
                  O++;
                for (; 0 < C - O; )
                  w = re(w), C--;
                for (; 0 < O - C; )
                  E = re(E), O--;
                for (; C--; ) {
                  if (w === E || E !== null && w === E.alternate) {
                    re = w;
                    break t;
                  }
                  w = re(w), E = re(E);
                }
                re = null;
              }
            else re = null;
            M !== null && qp(
              U,
              B,
              M,
              re,
              !1
            ), ie !== null && Ae !== null && qp(
              U,
              Ae,
              ie,
              re,
              !0
            );
          }
        }
        e: {
          if (B = k ? Va(k) : window, M = B.nodeName && B.nodeName.toLowerCase(), M === "select" || M === "input" && B.type === "file")
            var De = sd;
          else if (id(B))
            if (od)
              De = sx;
            else {
              De = ix;
              var se = nx;
            }
          else
            M = B.nodeName, !M || M.toLowerCase() !== "input" || B.type !== "checkbox" && B.type !== "radio" ? k && Hl(k.elementType) && (De = sd) : De = ax;
          if (De && (De = De(e, k))) {
            ad(
              U,
              De,
              n,
              P
            );
            break e;
          }
          se && se(e, B, k), e === "focusout" && k && B.type === "number" && k.memoizedProps.value != null && Ll(B, "number", B.value);
        }
        switch (se = k ? Va(k) : window, e) {
          case "focusin":
            (id(se) || se.contentEditable === "true") && (Ri = se, tr = k, za = null);
            break;
          case "focusout":
            za = tr = Ri = null;
            break;
          case "mousedown":
            nr = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            nr = !1, pd(U, n, P);
            break;
          case "selectionchange":
            if (lx) break;
          case "keydown":
          case "keyup":
            pd(U, n, P);
        }
        var he;
        if ($l)
          e: {
            switch (e) {
              case "compositionstart":
                var xe = "onCompositionStart";
                break e;
              case "compositionend":
                xe = "onCompositionEnd";
                break e;
              case "compositionupdate":
                xe = "onCompositionUpdate";
                break e;
            }
            xe = void 0;
          }
        else
          zi ? td(e, n) && (xe = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (xe = "onCompositionStart");
        xe && (Wf && n.locale !== "ko" && (zi || xe !== "onCompositionStart" ? xe === "onCompositionEnd" && zi && (he = Qf()) : (wn = P, Fl = "value" in wn ? wn.value : wn.textContent, zi = !0)), se = zo(k, xe), 0 < se.length && (xe = new Jf(
          xe,
          e,
          null,
          n,
          P
        ), U.push({ event: xe, listeners: se }), he ? xe.data = he : (he = nd(n), he !== null && (xe.data = he)))), (he = $v ? Wv(e, n) : Iv(e, n)) && (xe = zo(k, "onBeforeInput"), 0 < xe.length && (se = new Jf(
          "onBeforeInput",
          "beforeinput",
          null,
          n,
          P
        ), U.push({
          event: se,
          listeners: xe
        }), se.data = he)), Yx(
          U,
          e,
          k,
          n,
          P
        );
      }
      Lp(U, t);
    });
  }
  function os(e, t, n) {
    return {
      instance: e,
      listener: t,
      currentTarget: n
    };
  }
  function zo(e, t) {
    for (var n = t + "Capture", a = []; e !== null; ) {
      var o = e, u = o.stateNode;
      if (o = o.tag, o !== 5 && o !== 26 && o !== 27 || u === null || (o = Ta(e, n), o != null && a.unshift(
        os(e, o, u)
      ), o = Ta(e, t), o != null && a.push(
        os(e, o, u)
      )), e.tag === 3) return a;
      e = e.return;
    }
    return [];
  }
  function Kx(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function qp(e, t, n, a, o) {
    for (var u = t._reactName, d = []; n !== null && n !== a; ) {
      var b = n, S = b.alternate, k = b.stateNode;
      if (b = b.tag, S !== null && S === a) break;
      b !== 5 && b !== 26 && b !== 27 || k === null || (S = k, o ? (k = Ta(n, u), k != null && d.unshift(
        os(n, k, S)
      )) : o || (k = Ta(n, u), k != null && d.push(
        os(n, k, S)
      ))), n = n.return;
    }
    d.length !== 0 && e.push({ event: t, listeners: d });
  }
  var Zx = /\r\n?/g, Jx = /\u0000|\uFFFD/g;
  function Gp(e) {
    return (typeof e == "string" ? e : "" + e).replace(Zx, `
`).replace(Jx, "");
  }
  function Yp(e, t) {
    return t = Gp(t), Gp(e) === t;
  }
  function Be(e, t, n, a, o, u) {
    switch (n) {
      case "children":
        typeof a == "string" ? t === "body" || t === "textarea" && a === "" || ji(e, a) : (typeof a == "number" || typeof a == "bigint") && t !== "body" && ji(e, "" + a);
        break;
      case "className":
        Os(e, "class", a);
        break;
      case "tabIndex":
        Os(e, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Os(e, n, a);
        break;
      case "style":
        Yf(e, a, u);
        break;
      case "data":
        if (t !== "object") {
          Os(e, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (t !== "a" || n !== "href")) {
          e.removeAttribute(n);
          break;
        }
        if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
          e.removeAttribute(n);
          break;
        }
        a = Ls("" + a), e.setAttribute(n, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          e.setAttribute(
            n,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof u == "function" && (n === "formAction" ? (t !== "input" && Be(e, t, "name", o.name, o, null), Be(
            e,
            t,
            "formEncType",
            o.formEncType,
            o,
            null
          ), Be(
            e,
            t,
            "formMethod",
            o.formMethod,
            o,
            null
          ), Be(
            e,
            t,
            "formTarget",
            o.formTarget,
            o,
            null
          )) : (Be(e, t, "encType", o.encType, o, null), Be(e, t, "method", o.method, o, null), Be(e, t, "target", o.target, o, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          e.removeAttribute(n);
          break;
        }
        a = Ls("" + a), e.setAttribute(n, a);
        break;
      case "onClick":
        a != null && (e.onclick = an);
        break;
      case "onScroll":
        a != null && be("scroll", e);
        break;
      case "onScrollEnd":
        a != null && be("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(r(61));
          if (n = a.__html, n != null) {
            if (o.children != null) throw Error(r(60));
            e.innerHTML = n;
          }
        }
        break;
      case "multiple":
        e.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        e.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
          e.removeAttribute("xlink:href");
          break;
        }
        n = Ls("" + a), e.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          n
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol" ? e.setAttribute(n, "" + a) : e.removeAttribute(n);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        a && typeof a != "function" && typeof a != "symbol" ? e.setAttribute(n, "") : e.removeAttribute(n);
        break;
      case "capture":
      case "download":
        a === !0 ? e.setAttribute(n, "") : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol" ? e.setAttribute(n, a) : e.removeAttribute(n);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? e.setAttribute(n, a) : e.removeAttribute(n);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? e.removeAttribute(n) : e.setAttribute(n, a);
        break;
      case "popover":
        be("beforetoggle", e), be("toggle", e), _s(e, "popover", a);
        break;
      case "xlinkActuate":
        nn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          a
        );
        break;
      case "xlinkArcrole":
        nn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          a
        );
        break;
      case "xlinkRole":
        nn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          a
        );
        break;
      case "xlinkShow":
        nn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          a
        );
        break;
      case "xlinkTitle":
        nn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          a
        );
        break;
      case "xlinkType":
        nn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          a
        );
        break;
      case "xmlBase":
        nn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          a
        );
        break;
      case "xmlLang":
        nn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          a
        );
        break;
      case "xmlSpace":
        nn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          a
        );
        break;
      case "is":
        _s(e, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (n = Ev.get(n) || n, _s(e, n, a));
    }
  }
  function Tu(e, t, n, a, o, u) {
    switch (n) {
      case "style":
        Yf(e, a, u);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(r(61));
          if (n = a.__html, n != null) {
            if (o.children != null) throw Error(r(60));
            e.innerHTML = n;
          }
        }
        break;
      case "children":
        typeof a == "string" ? ji(e, a) : (typeof a == "number" || typeof a == "bigint") && ji(e, "" + a);
        break;
      case "onScroll":
        a != null && be("scroll", e);
        break;
      case "onScrollEnd":
        a != null && be("scrollend", e);
        break;
      case "onClick":
        a != null && (e.onclick = an);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!zf.hasOwnProperty(n))
          e: {
            if (n[0] === "o" && n[1] === "n" && (o = n.endsWith("Capture"), t = n.slice(2, o ? n.length - 7 : void 0), u = e[dt] || null, u = u != null ? u[n] : null, typeof u == "function" && e.removeEventListener(t, u, o), typeof a == "function")) {
              typeof u != "function" && u !== null && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)), e.addEventListener(t, a, o);
              break e;
            }
            n in e ? e[n] = a : a === !0 ? e.setAttribute(n, "") : _s(e, n, a);
          }
    }
  }
  function at(e, t, n) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        be("error", e), be("load", e);
        var a = !1, o = !1, u;
        for (u in n)
          if (n.hasOwnProperty(u)) {
            var d = n[u];
            if (d != null)
              switch (u) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  o = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(r(137, t));
                default:
                  Be(e, t, u, d, n, null);
              }
          }
        o && Be(e, t, "srcSet", n.srcSet, n, null), a && Be(e, t, "src", n.src, n, null);
        return;
      case "input":
        be("invalid", e);
        var b = u = d = o = null, S = null, k = null;
        for (a in n)
          if (n.hasOwnProperty(a)) {
            var P = n[a];
            if (P != null)
              switch (a) {
                case "name":
                  o = P;
                  break;
                case "type":
                  d = P;
                  break;
                case "checked":
                  S = P;
                  break;
                case "defaultChecked":
                  k = P;
                  break;
                case "value":
                  u = P;
                  break;
                case "defaultValue":
                  b = P;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (P != null)
                    throw Error(r(137, t));
                  break;
                default:
                  Be(e, t, a, P, n, null);
              }
          }
        Lf(
          e,
          u,
          b,
          S,
          k,
          d,
          o,
          !1
        );
        return;
      case "select":
        be("invalid", e), a = d = u = null;
        for (o in n)
          if (n.hasOwnProperty(o) && (b = n[o], b != null))
            switch (o) {
              case "value":
                u = b;
                break;
              case "defaultValue":
                d = b;
                break;
              case "multiple":
                a = b;
              default:
                Be(e, t, o, b, n, null);
            }
        t = u, n = d, e.multiple = !!a, t != null ? Ai(e, !!a, t, !1) : n != null && Ai(e, !!a, n, !0);
        return;
      case "textarea":
        be("invalid", e), u = o = a = null;
        for (d in n)
          if (n.hasOwnProperty(d) && (b = n[d], b != null))
            switch (d) {
              case "value":
                a = b;
                break;
              case "defaultValue":
                o = b;
                break;
              case "children":
                u = b;
                break;
              case "dangerouslySetInnerHTML":
                if (b != null) throw Error(r(91));
                break;
              default:
                Be(e, t, d, b, n, null);
            }
        qf(e, a, o, u);
        return;
      case "option":
        for (S in n)
          if (n.hasOwnProperty(S) && (a = n[S], a != null))
            switch (S) {
              case "selected":
                e.selected = a && typeof a != "function" && typeof a != "symbol";
                break;
              default:
                Be(e, t, S, a, n, null);
            }
        return;
      case "dialog":
        be("beforetoggle", e), be("toggle", e), be("cancel", e), be("close", e);
        break;
      case "iframe":
      case "object":
        be("load", e);
        break;
      case "video":
      case "audio":
        for (a = 0; a < ss.length; a++)
          be(ss[a], e);
        break;
      case "image":
        be("error", e), be("load", e);
        break;
      case "details":
        be("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        be("error", e), be("load", e);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (k in n)
          if (n.hasOwnProperty(k) && (a = n[k], a != null))
            switch (k) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(r(137, t));
              default:
                Be(e, t, k, a, n, null);
            }
        return;
      default:
        if (Hl(t)) {
          for (P in n)
            n.hasOwnProperty(P) && (a = n[P], a !== void 0 && Tu(
              e,
              t,
              P,
              a,
              n,
              void 0
            ));
          return;
        }
    }
    for (b in n)
      n.hasOwnProperty(b) && (a = n[b], a != null && Be(e, t, b, a, n, null));
  }
  function $x(e, t, n, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var o = null, u = null, d = null, b = null, S = null, k = null, P = null;
        for (M in n) {
          var U = n[M];
          if (n.hasOwnProperty(M) && U != null)
            switch (M) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                S = U;
              default:
                a.hasOwnProperty(M) || Be(e, t, M, null, a, U);
            }
        }
        for (var B in a) {
          var M = a[B];
          if (U = n[B], a.hasOwnProperty(B) && (M != null || U != null))
            switch (B) {
              case "type":
                u = M;
                break;
              case "name":
                o = M;
                break;
              case "checked":
                k = M;
                break;
              case "defaultChecked":
                P = M;
                break;
              case "value":
                d = M;
                break;
              case "defaultValue":
                b = M;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (M != null)
                  throw Error(r(137, t));
                break;
              default:
                M !== U && Be(
                  e,
                  t,
                  B,
                  M,
                  a,
                  U
                );
            }
        }
        Ul(
          e,
          d,
          b,
          S,
          k,
          P,
          u,
          o
        );
        return;
      case "select":
        M = d = b = B = null;
        for (u in n)
          if (S = n[u], n.hasOwnProperty(u) && S != null)
            switch (u) {
              case "value":
                break;
              case "multiple":
                M = S;
              default:
                a.hasOwnProperty(u) || Be(
                  e,
                  t,
                  u,
                  null,
                  a,
                  S
                );
            }
        for (o in a)
          if (u = a[o], S = n[o], a.hasOwnProperty(o) && (u != null || S != null))
            switch (o) {
              case "value":
                B = u;
                break;
              case "defaultValue":
                b = u;
                break;
              case "multiple":
                d = u;
              default:
                u !== S && Be(
                  e,
                  t,
                  o,
                  u,
                  a,
                  S
                );
            }
        t = b, n = d, a = M, B != null ? Ai(e, !!n, B, !1) : !!a != !!n && (t != null ? Ai(e, !!n, t, !0) : Ai(e, !!n, n ? [] : "", !1));
        return;
      case "textarea":
        M = B = null;
        for (b in n)
          if (o = n[b], n.hasOwnProperty(b) && o != null && !a.hasOwnProperty(b))
            switch (b) {
              case "value":
                break;
              case "children":
                break;
              default:
                Be(e, t, b, null, a, o);
            }
        for (d in a)
          if (o = a[d], u = n[d], a.hasOwnProperty(d) && (o != null || u != null))
            switch (d) {
              case "value":
                B = o;
                break;
              case "defaultValue":
                M = o;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (o != null) throw Error(r(91));
                break;
              default:
                o !== u && Be(e, t, d, o, a, u);
            }
        Hf(e, B, M);
        return;
      case "option":
        for (var ie in n)
          if (B = n[ie], n.hasOwnProperty(ie) && B != null && !a.hasOwnProperty(ie))
            switch (ie) {
              case "selected":
                e.selected = !1;
                break;
              default:
                Be(
                  e,
                  t,
                  ie,
                  null,
                  a,
                  B
                );
            }
        for (S in a)
          if (B = a[S], M = n[S], a.hasOwnProperty(S) && B !== M && (B != null || M != null))
            switch (S) {
              case "selected":
                e.selected = B && typeof B != "function" && typeof B != "symbol";
                break;
              default:
                Be(
                  e,
                  t,
                  S,
                  B,
                  a,
                  M
                );
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var re in n)
          B = n[re], n.hasOwnProperty(re) && B != null && !a.hasOwnProperty(re) && Be(e, t, re, null, a, B);
        for (k in a)
          if (B = a[k], M = n[k], a.hasOwnProperty(k) && B !== M && (B != null || M != null))
            switch (k) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (B != null)
                  throw Error(r(137, t));
                break;
              default:
                Be(
                  e,
                  t,
                  k,
                  B,
                  a,
                  M
                );
            }
        return;
      default:
        if (Hl(t)) {
          for (var Ae in n)
            B = n[Ae], n.hasOwnProperty(Ae) && B !== void 0 && !a.hasOwnProperty(Ae) && Tu(
              e,
              t,
              Ae,
              void 0,
              a,
              B
            );
          for (P in a)
            B = a[P], M = n[P], !a.hasOwnProperty(P) || B === M || B === void 0 && M === void 0 || Tu(
              e,
              t,
              P,
              B,
              a,
              M
            );
          return;
        }
    }
    for (var w in n)
      B = n[w], n.hasOwnProperty(w) && B != null && !a.hasOwnProperty(w) && Be(e, t, w, null, a, B);
    for (U in a)
      B = a[U], M = n[U], !a.hasOwnProperty(U) || B === M || B == null && M == null || Be(e, t, U, B, a, M);
  }
  function Xp(e) {
    switch (e) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function Wx() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, t = 0, n = performance.getEntriesByType("resource"), a = 0; a < n.length; a++) {
        var o = n[a], u = o.transferSize, d = o.initiatorType, b = o.duration;
        if (u && b && Xp(d)) {
          for (d = 0, b = o.responseEnd, a += 1; a < n.length; a++) {
            var S = n[a], k = S.startTime;
            if (k > b) break;
            var P = S.transferSize, U = S.initiatorType;
            P && Xp(U) && (S = S.responseEnd, d += P * (S < b ? 1 : (b - k) / (S - k)));
          }
          if (--a, t += 8 * (u + d) / (o.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var Cu = null, ku = null;
  function Ro(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Fp(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Qp(e, t) {
    if (e === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && t === "foreignObject" ? 0 : e;
  }
  function Bu(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Au = null;
  function Ix() {
    var e = window.event;
    return e && e.type === "popstate" ? e === Au ? !1 : (Au = e, !0) : (Au = null, !1);
  }
  var Kp = typeof setTimeout == "function" ? setTimeout : void 0, e1 = typeof clearTimeout == "function" ? clearTimeout : void 0, Zp = typeof Promise == "function" ? Promise : void 0, t1 = typeof queueMicrotask == "function" ? queueMicrotask : typeof Zp < "u" ? function(e) {
    return Zp.resolve(null).then(e).catch(n1);
  } : Kp;
  function n1(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function qn(e) {
    return e === "head";
  }
  function Jp(e, t) {
    var n = t, a = 0;
    do {
      var o = n.nextSibling;
      if (e.removeChild(n), o && o.nodeType === 8)
        if (n = o.data, n === "/$" || n === "/&") {
          if (a === 0) {
            e.removeChild(o), ua(t);
            return;
          }
          a--;
        } else if (n === "$" || n === "$?" || n === "$~" || n === "$!" || n === "&")
          a++;
        else if (n === "html")
          ls(e.ownerDocument.documentElement);
        else if (n === "head") {
          n = e.ownerDocument.head, ls(n);
          for (var u = n.firstChild; u; ) {
            var d = u.nextSibling, b = u.nodeName;
            u[wa] || b === "SCRIPT" || b === "STYLE" || b === "LINK" && u.rel.toLowerCase() === "stylesheet" || n.removeChild(u), u = d;
          }
        } else
          n === "body" && ls(e.ownerDocument.body);
      n = o;
    } while (n);
    ua(t);
  }
  function $p(e, t) {
    var n = e;
    e = 0;
    do {
      var a = n.nextSibling;
      if (n.nodeType === 1 ? t ? (n._stashedDisplay = n.style.display, n.style.display = "none") : (n.style.display = n._stashedDisplay || "", n.getAttribute("style") === "" && n.removeAttribute("style")) : n.nodeType === 3 && (t ? (n._stashedText = n.nodeValue, n.nodeValue = "") : n.nodeValue = n._stashedText || ""), a && a.nodeType === 8)
        if (n = a.data, n === "/$") {
          if (e === 0) break;
          e--;
        } else
          n !== "$" && n !== "$?" && n !== "$~" && n !== "$!" || e++;
      n = a;
    } while (n);
  }
  function ju(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var n = t;
      switch (t = t.nextSibling, n.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          ju(n), _l(n);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (n.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(n);
    }
  }
  function i1(e, t, n, a) {
    for (; e.nodeType === 1; ) {
      var o = n;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (a) {
        if (!e[wa])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (u = e.getAttribute("rel"), u === "stylesheet" && e.hasAttribute("data-precedence"))
                break;
              if (u !== o.rel || e.getAttribute("href") !== (o.href == null || o.href === "" ? null : o.href) || e.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin) || e.getAttribute("title") !== (o.title == null ? null : o.title))
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (u = e.getAttribute("src"), (u !== (o.src == null ? null : o.src) || e.getAttribute("type") !== (o.type == null ? null : o.type) || e.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin)) && u && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var u = o.name == null ? null : "" + o.name;
        if (o.type === "hidden" && e.getAttribute("name") === u)
          return e;
      } else return e;
      if (e = Ot(e.nextSibling), e === null) break;
    }
    return null;
  }
  function a1(e, t, n) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !n || (e = Ot(e.nextSibling), e === null)) return null;
    return e;
  }
  function Wp(e, t) {
    for (; e.nodeType !== 8; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = Ot(e.nextSibling), e === null)) return null;
    return e;
  }
  function Mu(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function Pu(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
  }
  function s1(e, t) {
    var n = e.ownerDocument;
    if (e.data === "$~") e._reactRetry = t;
    else if (e.data !== "$?" || n.readyState !== "loading")
      t();
    else {
      var a = function() {
        t(), n.removeEventListener("DOMContentLoaded", a);
      };
      n.addEventListener("DOMContentLoaded", a), e._reactRetry = a;
    }
  }
  function Ot(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = e.data, t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F")
          break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return e;
  }
  var zu = null;
  function Ip(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "/$" || n === "/&") {
          if (t === 0)
            return Ot(e.nextSibling);
          t--;
        } else
          n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&" || t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function eh(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&") {
          if (t === 0) return e;
          t--;
        } else n !== "/$" && n !== "/&" || t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function th(e, t, n) {
    switch (t = Ro(n), e) {
      case "html":
        if (e = t.documentElement, !e) throw Error(r(452));
        return e;
      case "head":
        if (e = t.head, !e) throw Error(r(453));
        return e;
      case "body":
        if (e = t.body, !e) throw Error(r(454));
        return e;
      default:
        throw Error(r(451));
    }
  }
  function ls(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    _l(e);
  }
  var Ut = /* @__PURE__ */ new Map(), nh = /* @__PURE__ */ new Set();
  function _o(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var yn = $.d;
  $.d = {
    f: o1,
    r: l1,
    D: r1,
    C: u1,
    L: c1,
    m: f1,
    X: m1,
    S: d1,
    M: p1
  };
  function o1() {
    var e = yn.f(), t = Co();
    return e || t;
  }
  function l1(e) {
    var t = Ci(e);
    t !== null && t.tag === 5 && t.type === "form" ? xm(t) : yn.r(e);
  }
  var oa = typeof document > "u" ? null : document;
  function ih(e, t, n) {
    var a = oa;
    if (a && typeof t == "string" && t) {
      var o = At(t);
      o = 'link[rel="' + e + '"][href="' + o + '"]', typeof n == "string" && (o += '[crossorigin="' + n + '"]'), nh.has(o) || (nh.add(o), e = { rel: e, crossOrigin: n, href: t }, a.querySelector(o) === null && (t = a.createElement("link"), at(t, "link", e), We(t), a.head.appendChild(t)));
    }
  }
  function r1(e) {
    yn.D(e), ih("dns-prefetch", e, null);
  }
  function u1(e, t) {
    yn.C(e, t), ih("preconnect", e, t);
  }
  function c1(e, t, n) {
    yn.L(e, t, n);
    var a = oa;
    if (a && e && t) {
      var o = 'link[rel="preload"][as="' + At(t) + '"]';
      t === "image" && n && n.imageSrcSet ? (o += '[imagesrcset="' + At(
        n.imageSrcSet
      ) + '"]', typeof n.imageSizes == "string" && (o += '[imagesizes="' + At(
        n.imageSizes
      ) + '"]')) : o += '[href="' + At(e) + '"]';
      var u = o;
      switch (t) {
        case "style":
          u = la(e);
          break;
        case "script":
          u = ra(e);
      }
      Ut.has(u) || (e = y(
        {
          rel: "preload",
          href: t === "image" && n && n.imageSrcSet ? void 0 : e,
          as: t
        },
        n
      ), Ut.set(u, e), a.querySelector(o) !== null || t === "style" && a.querySelector(rs(u)) || t === "script" && a.querySelector(us(u)) || (t = a.createElement("link"), at(t, "link", e), We(t), a.head.appendChild(t)));
    }
  }
  function f1(e, t) {
    yn.m(e, t);
    var n = oa;
    if (n && e) {
      var a = t && typeof t.as == "string" ? t.as : "script", o = 'link[rel="modulepreload"][as="' + At(a) + '"][href="' + At(e) + '"]', u = o;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = ra(e);
      }
      if (!Ut.has(u) && (e = y({ rel: "modulepreload", href: e }, t), Ut.set(u, e), n.querySelector(o) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(us(u)))
              return;
        }
        a = n.createElement("link"), at(a, "link", e), We(a), n.head.appendChild(a);
      }
    }
  }
  function d1(e, t, n) {
    yn.S(e, t, n);
    var a = oa;
    if (a && e) {
      var o = ki(a).hoistableStyles, u = la(e);
      t = t || "default";
      var d = o.get(u);
      if (!d) {
        var b = { loading: 0, preload: null };
        if (d = a.querySelector(
          rs(u)
        ))
          b.loading = 5;
        else {
          e = y(
            { rel: "stylesheet", href: e, "data-precedence": t },
            n
          ), (n = Ut.get(u)) && Ru(e, n);
          var S = d = a.createElement("link");
          We(S), at(S, "link", e), S._p = new Promise(function(k, P) {
            S.onload = k, S.onerror = P;
          }), S.addEventListener("load", function() {
            b.loading |= 1;
          }), S.addEventListener("error", function() {
            b.loading |= 2;
          }), b.loading |= 4, Oo(d, t, a);
        }
        d = {
          type: "stylesheet",
          instance: d,
          count: 1,
          state: b
        }, o.set(u, d);
      }
    }
  }
  function m1(e, t) {
    yn.X(e, t);
    var n = oa;
    if (n && e) {
      var a = ki(n).hoistableScripts, o = ra(e), u = a.get(o);
      u || (u = n.querySelector(us(o)), u || (e = y({ src: e, async: !0 }, t), (t = Ut.get(o)) && _u(e, t), u = n.createElement("script"), We(u), at(u, "link", e), n.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, a.set(o, u));
    }
  }
  function p1(e, t) {
    yn.M(e, t);
    var n = oa;
    if (n && e) {
      var a = ki(n).hoistableScripts, o = ra(e), u = a.get(o);
      u || (u = n.querySelector(us(o)), u || (e = y({ src: e, async: !0, type: "module" }, t), (t = Ut.get(o)) && _u(e, t), u = n.createElement("script"), We(u), at(u, "link", e), n.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, a.set(o, u));
    }
  }
  function ah(e, t, n, a) {
    var o = (o = ce.current) ? _o(o) : null;
    if (!o) throw Error(r(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string" ? (t = la(n.href), n = ki(
          o
        ).hoistableStyles, a = n.get(t), a || (a = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, n.set(t, a)), a) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
          e = la(n.href);
          var u = ki(
            o
          ).hoistableStyles, d = u.get(e);
          if (d || (o = o.ownerDocument || o, d = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, u.set(e, d), (u = o.querySelector(
            rs(e)
          )) && !u._p && (d.instance = u, d.state.loading = 5), Ut.has(e) || (n = {
            rel: "preload",
            as: "style",
            href: n.href,
            crossOrigin: n.crossOrigin,
            integrity: n.integrity,
            media: n.media,
            hrefLang: n.hrefLang,
            referrerPolicy: n.referrerPolicy
          }, Ut.set(e, n), u || h1(
            o,
            e,
            n,
            d.state
          ))), t && a === null)
            throw Error(r(528, ""));
          return d;
        }
        if (t && a !== null)
          throw Error(r(529, ""));
        return null;
      case "script":
        return t = n.async, n = n.src, typeof n == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = ra(n), n = ki(
          o
        ).hoistableScripts, a = n.get(t), a || (a = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, n.set(t, a)), a) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(r(444, e));
    }
  }
  function la(e) {
    return 'href="' + At(e) + '"';
  }
  function rs(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function sh(e) {
    return y({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function h1(e, t, n, a) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? a.loading = 1 : (t = e.createElement("link"), a.preload = t, t.addEventListener("load", function() {
      return a.loading |= 1;
    }), t.addEventListener("error", function() {
      return a.loading |= 2;
    }), at(t, "link", n), We(t), e.head.appendChild(t));
  }
  function ra(e) {
    return '[src="' + At(e) + '"]';
  }
  function us(e) {
    return "script[async]" + e;
  }
  function oh(e, t, n) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var a = e.querySelector(
            'style[data-href~="' + At(n.href) + '"]'
          );
          if (a)
            return t.instance = a, We(a), a;
          var o = y({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null
          });
          return a = (e.ownerDocument || e).createElement(
            "style"
          ), We(a), at(a, "style", o), Oo(a, n.precedence, e), t.instance = a;
        case "stylesheet":
          o = la(n.href);
          var u = e.querySelector(
            rs(o)
          );
          if (u)
            return t.state.loading |= 4, t.instance = u, We(u), u;
          a = sh(n), (o = Ut.get(o)) && Ru(a, o), u = (e.ownerDocument || e).createElement("link"), We(u);
          var d = u;
          return d._p = new Promise(function(b, S) {
            d.onload = b, d.onerror = S;
          }), at(u, "link", a), t.state.loading |= 4, Oo(u, n.precedence, e), t.instance = u;
        case "script":
          return u = ra(n.src), (o = e.querySelector(
            us(u)
          )) ? (t.instance = o, We(o), o) : (a = n, (o = Ut.get(u)) && (a = y({}, n), _u(a, o)), e = e.ownerDocument || e, o = e.createElement("script"), We(o), at(o, "link", a), e.head.appendChild(o), t.instance = o);
        case "void":
          return null;
        default:
          throw Error(r(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (a = t.instance, t.state.loading |= 4, Oo(a, n.precedence, e));
    return t.instance;
  }
  function Oo(e, t, n) {
    for (var a = n.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), o = a.length ? a[a.length - 1] : null, u = o, d = 0; d < a.length; d++) {
      var b = a[d];
      if (b.dataset.precedence === t) u = b;
      else if (u !== o) break;
    }
    u ? u.parentNode.insertBefore(e, u.nextSibling) : (t = n.nodeType === 9 ? n.head : n, t.insertBefore(e, t.firstChild));
  }
  function Ru(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function _u(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var Uo = null;
  function lh(e, t, n) {
    if (Uo === null) {
      var a = /* @__PURE__ */ new Map(), o = Uo = /* @__PURE__ */ new Map();
      o.set(n, a);
    } else
      o = Uo, a = o.get(n), a || (a = /* @__PURE__ */ new Map(), o.set(n, a));
    if (a.has(e)) return a;
    for (a.set(e, null), n = n.getElementsByTagName(e), o = 0; o < n.length; o++) {
      var u = n[o];
      if (!(u[wa] || u[et] || e === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
        var d = u.getAttribute(t) || "";
        d = e + d;
        var b = a.get(d);
        b ? b.push(u) : a.set(d, [u]);
      }
    }
    return a;
  }
  function rh(e, t, n) {
    e = e.ownerDocument || e, e.head.insertBefore(
      n,
      t === "title" ? e.querySelector("head > title") : null
    );
  }
  function g1(e, t, n) {
    if (n === 1 || t.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "")
          break;
        return !0;
      case "link":
        if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError)
          break;
        switch (t.rel) {
          case "stylesheet":
            return e = t.disabled, typeof t.precedence == "string" && e == null;
          default:
            return !0;
        }
      case "script":
        if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string")
          return !0;
    }
    return !1;
  }
  function uh(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function b1(e, t, n, a) {
    if (n.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (n.state.loading & 4) === 0) {
      if (n.instance === null) {
        var o = la(a.href), u = t.querySelector(
          rs(o)
        );
        if (u) {
          t = u._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = Lo.bind(e), t.then(e, e)), n.state.loading |= 4, n.instance = u, We(u);
          return;
        }
        u = t.ownerDocument || t, a = sh(a), (o = Ut.get(o)) && Ru(a, o), u = u.createElement("link"), We(u);
        var d = u;
        d._p = new Promise(function(b, S) {
          d.onload = b, d.onerror = S;
        }), at(u, "link", a), n.instance = u;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(n, t), (t = n.state.preload) && (n.state.loading & 3) === 0 && (e.count++, n = Lo.bind(e), t.addEventListener("load", n), t.addEventListener("error", n));
    }
  }
  var Ou = 0;
  function v1(e, t) {
    return e.stylesheets && e.count === 0 && qo(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(n) {
      var a = setTimeout(function() {
        if (e.stylesheets && qo(e, e.stylesheets), e.unsuspend) {
          var u = e.unsuspend;
          e.unsuspend = null, u();
        }
      }, 6e4 + t);
      0 < e.imgBytes && Ou === 0 && (Ou = 62500 * Wx());
      var o = setTimeout(
        function() {
          if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && qo(e, e.stylesheets), e.unsuspend)) {
            var u = e.unsuspend;
            e.unsuspend = null, u();
          }
        },
        (e.imgBytes > Ou ? 50 : 800) + t
      );
      return e.unsuspend = n, function() {
        e.unsuspend = null, clearTimeout(a), clearTimeout(o);
      };
    } : null;
  }
  function Lo() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) qo(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var Ho = null;
  function qo(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, Ho = /* @__PURE__ */ new Map(), t.forEach(x1, e), Ho = null, Lo.call(e));
  }
  function x1(e, t) {
    if (!(t.state.loading & 4)) {
      var n = Ho.get(e);
      if (n) var a = n.get(null);
      else {
        n = /* @__PURE__ */ new Map(), Ho.set(e, n);
        for (var o = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), u = 0; u < o.length; u++) {
          var d = o[u];
          (d.nodeName === "LINK" || d.getAttribute("media") !== "not all") && (n.set(d.dataset.precedence, d), a = d);
        }
        a && n.set(null, a);
      }
      o = t.instance, d = o.getAttribute("data-precedence"), u = n.get(d) || a, u === a && n.set(null, o), n.set(d, o), this.count++, a = Lo.bind(this), o.addEventListener("load", a), o.addEventListener("error", a), u ? u.parentNode.insertBefore(o, u.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(o, e.firstChild)), t.state.loading |= 4;
    }
  }
  var cs = {
    $$typeof: L,
    Provider: null,
    Consumer: null,
    _currentValue: Q,
    _currentValue2: Q,
    _threadCount: 0
  };
  function y1(e, t, n, a, o, u, d, b, S) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Ml(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ml(0), this.hiddenUpdates = Ml(null), this.identifierPrefix = a, this.onUncaughtError = o, this.onCaughtError = u, this.onRecoverableError = d, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = S, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function ch(e, t, n, a, o, u, d, b, S, k, P, U) {
    return e = new y1(
      e,
      t,
      n,
      d,
      S,
      k,
      P,
      U,
      b
    ), t = 1, u === !0 && (t |= 24), u = Et(3, null, null, t), e.current = u, u.stateNode = e, t = br(), t.refCount++, e.pooledCache = t, t.refCount++, u.memoizedState = {
      element: a,
      isDehydrated: n,
      cache: t
    }, Nr(u), e;
  }
  function fh(e) {
    return e ? (e = Ui, e) : Ui;
  }
  function dh(e, t, n, a, o, u) {
    o = fh(o), a.context === null ? a.context = o : a.pendingContext = o, a = An(t), a.payload = { element: n }, u = u === void 0 ? null : u, u !== null && (a.callback = u), n = jn(e, a, t), n !== null && (vt(n, e, t), qa(n, e, t));
  }
  function mh(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Uu(e, t) {
    mh(e, t), (e = e.alternate) && mh(e, t);
  }
  function ph(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = oi(e, 67108864);
      t !== null && vt(t, e, 67108864), Uu(e, 67108864);
    }
  }
  function hh(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = kt();
      t = Pl(t);
      var n = oi(e, t);
      n !== null && vt(n, e, t), Uu(e, t);
    }
  }
  var Go = !0;
  function N1(e, t, n, a) {
    var o = j.T;
    j.T = null;
    var u = $.p;
    try {
      $.p = 2, Lu(e, t, n, a);
    } finally {
      $.p = u, j.T = o;
    }
  }
  function S1(e, t, n, a) {
    var o = j.T;
    j.T = null;
    var u = $.p;
    try {
      $.p = 8, Lu(e, t, n, a);
    } finally {
      $.p = u, j.T = o;
    }
  }
  function Lu(e, t, n, a) {
    if (Go) {
      var o = Hu(a);
      if (o === null)
        Vu(
          e,
          t,
          a,
          Yo,
          n
        ), bh(e, a);
      else if (E1(
        o,
        e,
        t,
        n,
        a
      ))
        a.stopPropagation();
      else if (bh(e, a), t & 4 && -1 < D1.indexOf(e)) {
        for (; o !== null; ) {
          var u = Ci(o);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                  var d = ti(u.pendingLanes);
                  if (d !== 0) {
                    var b = u;
                    for (b.pendingLanes |= 2, b.entangledLanes |= 2; d; ) {
                      var S = 1 << 31 - St(d);
                      b.entanglements[1] |= S, d &= ~S;
                    }
                    $t(u), (we & 6) === 0 && (Vo = yt() + 500, as(0));
                  }
                }
                break;
              case 31:
              case 13:
                b = oi(u, 2), b !== null && vt(b, u, 2), Co(), Uu(u, 2);
            }
          if (u = Hu(a), u === null && Vu(
            e,
            t,
            a,
            Yo,
            n
          ), u === o) break;
          o = u;
        }
        o !== null && a.stopPropagation();
      } else
        Vu(
          e,
          t,
          a,
          null,
          n
        );
    }
  }
  function Hu(e) {
    return e = Gl(e), qu(e);
  }
  var Yo = null;
  function qu(e) {
    if (Yo = null, e = Ti(e), e !== null) {
      var t = m(e);
      if (t === null) e = null;
      else {
        var n = t.tag;
        if (n === 13) {
          if (e = f(t), e !== null) return e;
          e = null;
        } else if (n === 31) {
          if (e = h(t), e !== null) return e;
          e = null;
        } else if (n === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return Yo = e, null;
  }
  function gh(e) {
    switch (e) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (rv()) {
          case Ef:
            return 2;
          case wf:
            return 8;
          case js:
          case uv:
            return 32;
          case Vf:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Gu = !1, Gn = null, Yn = null, Xn = null, fs = /* @__PURE__ */ new Map(), ds = /* @__PURE__ */ new Map(), Fn = [], D1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function bh(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Gn = null;
        break;
      case "dragenter":
      case "dragleave":
        Yn = null;
        break;
      case "mouseover":
      case "mouseout":
        Xn = null;
        break;
      case "pointerover":
      case "pointerout":
        fs.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ds.delete(t.pointerId);
    }
  }
  function ms(e, t, n, a, o, u) {
    return e === null || e.nativeEvent !== u ? (e = {
      blockedOn: t,
      domEventName: n,
      eventSystemFlags: a,
      nativeEvent: u,
      targetContainers: [o]
    }, t !== null && (t = Ci(t), t !== null && ph(t)), e) : (e.eventSystemFlags |= a, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
  }
  function E1(e, t, n, a, o) {
    switch (t) {
      case "focusin":
        return Gn = ms(
          Gn,
          e,
          t,
          n,
          a,
          o
        ), !0;
      case "dragenter":
        return Yn = ms(
          Yn,
          e,
          t,
          n,
          a,
          o
        ), !0;
      case "mouseover":
        return Xn = ms(
          Xn,
          e,
          t,
          n,
          a,
          o
        ), !0;
      case "pointerover":
        var u = o.pointerId;
        return fs.set(
          u,
          ms(
            fs.get(u) || null,
            e,
            t,
            n,
            a,
            o
          )
        ), !0;
      case "gotpointercapture":
        return u = o.pointerId, ds.set(
          u,
          ms(
            ds.get(u) || null,
            e,
            t,
            n,
            a,
            o
          )
        ), !0;
    }
    return !1;
  }
  function vh(e) {
    var t = Ti(e.target);
    if (t !== null) {
      var n = m(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = f(n), t !== null) {
            e.blockedOn = t, jf(e.priority, function() {
              hh(n);
            });
            return;
          }
        } else if (t === 31) {
          if (t = h(n), t !== null) {
            e.blockedOn = t, jf(e.priority, function() {
              hh(n);
            });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Xo(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Hu(e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var a = new n.constructor(
          n.type,
          n
        );
        ql = a, n.target.dispatchEvent(a), ql = null;
      } else
        return t = Ci(n), t !== null && ph(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function xh(e, t, n) {
    Xo(e) && n.delete(t);
  }
  function w1() {
    Gu = !1, Gn !== null && Xo(Gn) && (Gn = null), Yn !== null && Xo(Yn) && (Yn = null), Xn !== null && Xo(Xn) && (Xn = null), fs.forEach(xh), ds.forEach(xh);
  }
  function Fo(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Gu || (Gu = !0, i.unstable_scheduleCallback(
      i.unstable_NormalPriority,
      w1
    )));
  }
  var Qo = null;
  function yh(e) {
    Qo !== e && (Qo = e, i.unstable_scheduleCallback(
      i.unstable_NormalPriority,
      function() {
        Qo === e && (Qo = null);
        for (var t = 0; t < e.length; t += 3) {
          var n = e[t], a = e[t + 1], o = e[t + 2];
          if (typeof a != "function") {
            if (qu(a || n) === null)
              continue;
            break;
          }
          var u = Ci(n);
          u !== null && (e.splice(t, 3), t -= 3, Hr(
            u,
            {
              pending: !0,
              data: o,
              method: n.method,
              action: a
            },
            a,
            o
          ));
        }
      }
    ));
  }
  function ua(e) {
    function t(S) {
      return Fo(S, e);
    }
    Gn !== null && Fo(Gn, e), Yn !== null && Fo(Yn, e), Xn !== null && Fo(Xn, e), fs.forEach(t), ds.forEach(t);
    for (var n = 0; n < Fn.length; n++) {
      var a = Fn[n];
      a.blockedOn === e && (a.blockedOn = null);
    }
    for (; 0 < Fn.length && (n = Fn[0], n.blockedOn === null); )
      vh(n), n.blockedOn === null && Fn.shift();
    if (n = (e.ownerDocument || e).$$reactFormReplay, n != null)
      for (a = 0; a < n.length; a += 3) {
        var o = n[a], u = n[a + 1], d = o[dt] || null;
        if (typeof u == "function")
          d || yh(n);
        else if (d) {
          var b = null;
          if (u && u.hasAttribute("formAction")) {
            if (o = u, d = u[dt] || null)
              b = d.formAction;
            else if (qu(o) !== null) continue;
          } else b = d.action;
          typeof b == "function" ? n[a + 1] = b : (n.splice(a, 3), a -= 3), yh(n);
        }
      }
  }
  function Nh() {
    function e(u) {
      u.canIntercept && u.info === "react-transition" && u.intercept({
        handler: function() {
          return new Promise(function(d) {
            return o = d;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function t() {
      o !== null && (o(), o = null), a || setTimeout(n, 20);
    }
    function n() {
      if (!a && !navigation.transition) {
        var u = navigation.currentEntry;
        u && u.url != null && navigation.navigate(u.url, {
          state: u.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var a = !1, o = null;
      return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(n, 100), function() {
        a = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), o !== null && (o(), o = null);
      };
    }
  }
  function Yu(e) {
    this._internalRoot = e;
  }
  Ko.prototype.render = Yu.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(r(409));
    var n = t.current, a = kt();
    dh(n, a, e, t, null, null);
  }, Ko.prototype.unmount = Yu.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      dh(e.current, 2, null, e, null, null), Co(), t[Vi] = null;
    }
  };
  function Ko(e) {
    this._internalRoot = e;
  }
  Ko.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Af();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Fn.length && t !== 0 && t < Fn[n].priority; n++) ;
      Fn.splice(n, 0, e), n === 0 && vh(e);
    }
  };
  var Sh = s.version;
  if (Sh !== "19.2.6")
    throw Error(
      r(
        527,
        Sh,
        "19.2.6"
      )
    );
  $.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(r(188)) : (e = Object.keys(e).join(","), Error(r(268, e)));
    return e = g(t), e = e !== null ? x(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var V1 = {
    bundleType: 0,
    version: "19.2.6",
    rendererPackageName: "react-dom",
    currentDispatcherRef: j,
    reconcilerVersion: "19.2.6"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Zo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Zo.isDisabled && Zo.supportsFiber)
      try {
        Sa = Zo.inject(
          V1
        ), Nt = Zo;
      } catch {
      }
  }
  return ps.createRoot = function(e, t) {
    if (!c(e)) throw Error(r(299));
    var n = !1, a = "", o = km, u = Bm, d = Am;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onUncaughtError !== void 0 && (o = t.onUncaughtError), t.onCaughtError !== void 0 && (u = t.onCaughtError), t.onRecoverableError !== void 0 && (d = t.onRecoverableError)), t = ch(
      e,
      1,
      !1,
      null,
      null,
      n,
      a,
      null,
      o,
      u,
      d,
      Nh
    ), e[Vi] = t.current, wu(e), new Yu(t);
  }, ps.hydrateRoot = function(e, t, n) {
    if (!c(e)) throw Error(r(299));
    var a = !1, o = "", u = km, d = Bm, b = Am, S = null;
    return n != null && (n.unstable_strictMode === !0 && (a = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onUncaughtError !== void 0 && (u = n.onUncaughtError), n.onCaughtError !== void 0 && (d = n.onCaughtError), n.onRecoverableError !== void 0 && (b = n.onRecoverableError), n.formState !== void 0 && (S = n.formState)), t = ch(
      e,
      1,
      !0,
      t,
      n ?? null,
      a,
      o,
      S,
      u,
      d,
      b,
      Nh
    ), t.context = fh(null), n = t.current, a = kt(), a = Pl(a), o = An(a), o.callback = null, jn(n, o, a), n = a, t.current.lanes = n, Ea(t, n), $t(t), e[Vi] = t.current, wu(e), new Ko(t);
  }, ps.version = "19.2.6", ps;
}
var Mh;
function _1() {
  if (Mh) return Qu.exports;
  Mh = 1;
  function i() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (s) {
        console.error(s);
      }
  }
  return i(), Qu.exports = R1(), Qu.exports;
}
var O1 = _1(), $u = { exports: {} }, hs = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ph;
function U1() {
  if (Ph) return hs;
  Ph = 1;
  var i = Symbol.for("react.transitional.element"), s = Symbol.for("react.fragment");
  function l(r, c, m) {
    var f = null;
    if (m !== void 0 && (f = "" + m), c.key !== void 0 && (f = "" + c.key), "key" in c) {
      m = {};
      for (var h in c)
        h !== "key" && (m[h] = c[h]);
    } else m = c;
    return c = m.ref, {
      $$typeof: i,
      type: r,
      key: f,
      ref: c !== void 0 ? c : null,
      props: m
    };
  }
  return hs.Fragment = s, hs.jsx = l, hs.jsxs = l, hs;
}
var zh;
function L1() {
  return zh || (zh = 1, $u.exports = U1()), $u.exports;
}
var Sn = L1();
const Kc = q.createContext({});
function Zc(i) {
  const s = q.useRef(null);
  return s.current === null && (s.current = i()), s.current;
}
const H1 = typeof window < "u", mg = H1 ? q.useLayoutEffect : q.useEffect, Sl = /* @__PURE__ */ q.createContext(null);
function Jc(i, s) {
  i.indexOf(s) === -1 && i.push(s);
}
function cl(i, s) {
  const l = i.indexOf(s);
  l > -1 && i.splice(l, 1);
}
const tn = (i, s, l) => l > s ? s : l < i ? i : l;
function Rh(i, s) {
  return s ? `${i}. For more information and steps for solving, visit https://motion.dev/troubleshooting/${s}` : i;
}
let Vs = () => {
}, wi = () => {
};
var dg;
typeof process < "u" && ((dg = process.env) == null ? void 0 : dg.NODE_ENV) !== "production" && (Vs = (i, s, l) => {
  !i && typeof console < "u" && console.warn(Rh(s, l));
}, wi = (i, s, l) => {
  if (!i)
    throw new Error(Rh(s, l));
});
const $n = {}, pg = (i) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(i), hg = (i) => typeof i == "object" && i !== null, gg = (i) => /^0[^.\s]+$/u.test(i);
// @__NO_SIDE_EFFECTS__
function bg(i) {
  let s;
  return () => (s === void 0 && (s = i()), s);
}
const Ht = /* @__NO_SIDE_EFFECTS__ */ (i) => i, Ts = (...i) => i.reduce((s, l) => (r) => l(s(r))), Ss = /* @__NO_SIDE_EFFECTS__ */ (i, s, l) => {
  const r = s - i;
  return r ? (l - i) / r : 1;
};
class $c {
  constructor() {
    this.subscriptions = [];
  }
  add(s) {
    return Jc(this.subscriptions, s), () => cl(this.subscriptions, s);
  }
  notify(s, l, r) {
    const c = this.subscriptions.length;
    if (c)
      if (c === 1)
        this.subscriptions[0](s, l, r);
      else
        for (let m = 0; m < c; m++) {
          const f = this.subscriptions[m];
          f && f(s, l, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const xt = /* @__NO_SIDE_EFFECTS__ */ (i) => i * 1e3, Lt = /* @__NO_SIDE_EFFECTS__ */ (i) => i / 1e3, vg = /* @__NO_SIDE_EFFECTS__ */ (i, s) => s ? i * (1e3 / s) : 0, xg = (i, s, l) => (((1 - 3 * l + 3 * s) * i + (3 * l - 6 * s)) * i + 3 * s) * i, q1 = 1e-7, G1 = 12;
function Y1(i, s, l, r, c) {
  let m, f, h = 0;
  do
    f = s + (l - s) / 2, m = xg(f, r, c) - i, m > 0 ? l = f : s = f;
  while (Math.abs(m) > q1 && ++h < G1);
  return f;
}
// @__NO_SIDE_EFFECTS__
function Cs(i, s, l, r) {
  if (i === s && l === r)
    return Ht;
  const c = (m) => Y1(m, 0, 1, i, l);
  return (m) => m === 0 || m === 1 ? m : xg(c(m), s, r);
}
const yg = /* @__NO_SIDE_EFFECTS__ */ (i) => (s) => s <= 0.5 ? i(2 * s) / 2 : (2 - i(2 * (1 - s))) / 2, Ng = /* @__NO_SIDE_EFFECTS__ */ (i) => (s) => 1 - i(1 - s), Sg = /* @__PURE__ */ Cs(0.33, 1.53, 0.69, 0.99), Wc = /* @__PURE__ */ Ng(Sg), Dg = /* @__PURE__ */ yg(Wc), Eg = (i) => i >= 1 ? 1 : (i *= 2) < 1 ? 0.5 * Wc(i) : 0.5 * (2 - Math.pow(2, -10 * (i - 1))), Ic = (i) => 1 - Math.sin(Math.acos(i)), wg = /* @__PURE__ */ Ng(Ic), Vg = /* @__PURE__ */ yg(Ic), X1 = /* @__PURE__ */ Cs(0.42, 0, 1, 1), F1 = /* @__PURE__ */ Cs(0, 0, 0.58, 1), Tg = /* @__PURE__ */ Cs(0.42, 0, 0.58, 1), Q1 = /* @__NO_SIDE_EFFECTS__ */ (i) => Array.isArray(i) && typeof i[0] != "number", Cg = /* @__NO_SIDE_EFFECTS__ */ (i) => Array.isArray(i) && typeof i[0] == "number", _h = {
  linear: Ht,
  easeIn: X1,
  easeInOut: Tg,
  easeOut: F1,
  circIn: Ic,
  circInOut: Vg,
  circOut: wg,
  backIn: Wc,
  backInOut: Dg,
  backOut: Sg,
  anticipate: Eg
}, K1 = (i) => typeof i == "string", Oh = (i) => {
  if (/* @__PURE__ */ Cg(i)) {
    wi(i.length === 4, "Cubic bezier arrays must contain four numerical values.", "cubic-bezier-length");
    const [s, l, r, c] = i;
    return /* @__PURE__ */ Cs(s, l, r, c);
  } else if (K1(i))
    return wi(_h[i] !== void 0, `Invalid easing type '${i}'`, "invalid-easing-type"), _h[i];
  return i;
}, $o = [
  "setup",
  // Compute
  "read",
  // Read
  "resolveKeyframes",
  // Write/Read/Write/Read
  "preUpdate",
  // Compute
  "update",
  // Compute
  "preRender",
  // Compute
  "render",
  // Write
  "postRender"
  // Compute
];
function Z1(i, s) {
  let l = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Set(), c = !1, m = !1;
  const f = /* @__PURE__ */ new WeakSet();
  let h = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  };
  function v(x) {
    f.has(x) && (g.schedule(x), i()), x(h);
  }
  const g = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (x, y = !1, N = !1) => {
      const T = N && c ? l : r;
      return y && f.add(x), T.add(x), x;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (x) => {
      r.delete(x), f.delete(x);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (x) => {
      if (h = x, c) {
        m = !0;
        return;
      }
      c = !0;
      const y = l;
      l = r, r = y, l.forEach(v), l.clear(), c = !1, m && (m = !1, g.process(x));
    }
  };
  return g;
}
const J1 = 40;
function kg(i, s) {
  let l = !1, r = !0;
  const c = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, m = () => l = !0, f = $o.reduce((L, H) => (L[H] = Z1(m), L), {}), { setup: h, read: v, resolveKeyframes: g, preUpdate: x, update: y, preRender: N, render: V, postRender: T } = f, z = () => {
    const L = $n.useManualTiming, H = L ? c.timestamp : performance.now();
    l = !1, L || (c.delta = r ? 1e3 / 60 : Math.max(Math.min(H - c.timestamp, J1), 1)), c.timestamp = H, c.isProcessing = !0, h.process(c), v.process(c), g.process(c), x.process(c), y.process(c), N.process(c), V.process(c), T.process(c), c.isProcessing = !1, l && s && (r = !1, i(z));
  }, A = () => {
    l = !0, r = !0, c.isProcessing || i(z);
  };
  return { schedule: $o.reduce((L, H) => {
    const X = f[H];
    return L[H] = (ee, F = !1, Y = !1) => (l || A(), X.schedule(ee, F, Y)), L;
  }, {}), cancel: (L) => {
    for (let H = 0; H < $o.length; H++)
      f[$o[H]].cancel(L);
  }, state: c, steps: f };
}
const { schedule: Pe, cancel: Wn, state: st, steps: Wu } = /* @__PURE__ */ kg(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Ht, !0);
let nl;
function $1() {
  nl = void 0;
}
const ct = {
  now: () => (nl === void 0 && ct.set(st.isProcessing || $n.useManualTiming ? st.timestamp : performance.now()), nl),
  set: (i) => {
    nl = i, queueMicrotask($1);
  }
}, Bg = (i) => (s) => typeof s == "string" && s.startsWith(i), Ag = /* @__PURE__ */ Bg("--"), W1 = /* @__PURE__ */ Bg("var(--"), ef = (i) => W1(i) ? I1.test(i.split("/*")[0].trim()) : !1, I1 = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function Uh(i) {
  return typeof i != "string" ? !1 : i.split("/*")[0].includes("var(--");
}
const va = {
  test: (i) => typeof i == "number",
  parse: parseFloat,
  transform: (i) => i
}, Ds = {
  ...va,
  transform: (i) => tn(0, 1, i)
}, Wo = {
  ...va,
  default: 1
}, vs = (i) => Math.round(i * 1e5) / 1e5, tf = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function ey(i) {
  return i == null;
}
const ty = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, nf = (i, s) => (l) => !!(typeof l == "string" && ty.test(l) && l.startsWith(i) || s && !ey(l) && Object.prototype.hasOwnProperty.call(l, s)), jg = (i, s, l) => (r) => {
  if (typeof r != "string")
    return r;
  const [c, m, f, h] = r.match(tf);
  return {
    [i]: parseFloat(c),
    [s]: parseFloat(m),
    [l]: parseFloat(f),
    alpha: h !== void 0 ? parseFloat(h) : 1
  };
}, ny = (i) => tn(0, 255, i), Iu = {
  ...va,
  transform: (i) => Math.round(ny(i))
}, Ni = {
  test: /* @__PURE__ */ nf("rgb", "red"),
  parse: /* @__PURE__ */ jg("red", "green", "blue"),
  transform: ({ red: i, green: s, blue: l, alpha: r = 1 }) => "rgba(" + Iu.transform(i) + ", " + Iu.transform(s) + ", " + Iu.transform(l) + ", " + vs(Ds.transform(r)) + ")"
};
function iy(i) {
  let s = "", l = "", r = "", c = "";
  return i.length > 5 ? (s = i.substring(1, 3), l = i.substring(3, 5), r = i.substring(5, 7), c = i.substring(7, 9)) : (s = i.substring(1, 2), l = i.substring(2, 3), r = i.substring(3, 4), c = i.substring(4, 5), s += s, l += l, r += r, c += c), {
    red: parseInt(s, 16),
    green: parseInt(l, 16),
    blue: parseInt(r, 16),
    alpha: c ? parseInt(c, 16) / 255 : 1
  };
}
const gc = {
  test: /* @__PURE__ */ nf("#"),
  parse: iy,
  transform: Ni.transform
}, ks = /* @__NO_SIDE_EFFECTS__ */ (i) => ({
  test: (s) => typeof s == "string" && s.endsWith(i) && s.split(" ").length === 1,
  parse: parseFloat,
  transform: (s) => `${s}${i}`
}), Nn = /* @__PURE__ */ ks("deg"), en = /* @__PURE__ */ ks("%"), ae = /* @__PURE__ */ ks("px"), ay = /* @__PURE__ */ ks("vh"), sy = /* @__PURE__ */ ks("vw"), Lh = {
  ...en,
  parse: (i) => en.parse(i) / 100,
  transform: (i) => en.transform(i * 100)
}, fa = {
  test: /* @__PURE__ */ nf("hsl", "hue"),
  parse: /* @__PURE__ */ jg("hue", "saturation", "lightness"),
  transform: ({ hue: i, saturation: s, lightness: l, alpha: r = 1 }) => "hsla(" + Math.round(i) + ", " + en.transform(vs(s)) + ", " + en.transform(vs(l)) + ", " + vs(Ds.transform(r)) + ")"
}, Ze = {
  test: (i) => Ni.test(i) || gc.test(i) || fa.test(i),
  parse: (i) => Ni.test(i) ? Ni.parse(i) : fa.test(i) ? fa.parse(i) : gc.parse(i),
  transform: (i) => typeof i == "string" ? i : i.hasOwnProperty("red") ? Ni.transform(i) : fa.transform(i),
  getAnimatableNone: (i) => {
    const s = Ze.parse(i);
    return s.alpha = 0, Ze.transform(s);
  }
}, oy = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function ly(i) {
  var s, l;
  return isNaN(i) && typeof i == "string" && (((s = i.match(tf)) == null ? void 0 : s.length) || 0) + (((l = i.match(oy)) == null ? void 0 : l.length) || 0) > 0;
}
const Mg = "number", Pg = "color", ry = "var", uy = "var(", Hh = "${}", cy = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function ga(i) {
  const s = i.toString(), l = [], r = {
    color: [],
    number: [],
    var: []
  }, c = [];
  let m = 0;
  const h = s.replace(cy, (v) => (Ze.test(v) ? (r.color.push(m), c.push(Pg), l.push(Ze.parse(v))) : v.startsWith(uy) ? (r.var.push(m), c.push(ry), l.push(v)) : (r.number.push(m), c.push(Mg), l.push(parseFloat(v))), ++m, Hh)).split(Hh);
  return { values: l, split: h, indexes: r, types: c };
}
function fy(i) {
  return ga(i).values;
}
function zg({ split: i, types: s }) {
  const l = i.length;
  return (r) => {
    let c = "";
    for (let m = 0; m < l; m++)
      if (c += i[m], r[m] !== void 0) {
        const f = s[m];
        f === Mg ? c += vs(r[m]) : f === Pg ? c += Ze.transform(r[m]) : c += r[m];
      }
    return c;
  };
}
function dy(i) {
  return zg(ga(i));
}
const my = (i) => typeof i == "number" ? 0 : Ze.test(i) ? Ze.getAnimatableNone(i) : i, py = (i, s) => typeof i == "number" ? s != null && s.trim().endsWith("/") ? i : 0 : my(i);
function hy(i) {
  const s = ga(i);
  return zg(s)(s.values.map((r, c) => py(r, s.split[c])));
}
const Qt = {
  test: ly,
  parse: fy,
  createTransformer: dy,
  getAnimatableNone: hy
};
function ec(i, s, l) {
  return l < 0 && (l += 1), l > 1 && (l -= 1), l < 1 / 6 ? i + (s - i) * 6 * l : l < 1 / 2 ? s : l < 2 / 3 ? i + (s - i) * (2 / 3 - l) * 6 : i;
}
function gy({ hue: i, saturation: s, lightness: l, alpha: r }) {
  i /= 360, s /= 100, l /= 100;
  let c = 0, m = 0, f = 0;
  if (!s)
    c = m = f = l;
  else {
    const h = l < 0.5 ? l * (1 + s) : l + s - l * s, v = 2 * l - h;
    c = ec(v, h, i + 1 / 3), m = ec(v, h, i), f = ec(v, h, i - 1 / 3);
  }
  return {
    red: Math.round(c * 255),
    green: Math.round(m * 255),
    blue: Math.round(f * 255),
    alpha: r
  };
}
function fl(i, s) {
  return (l) => l > 0 ? s : i;
}
const Me = (i, s, l) => i + (s - i) * l, tc = (i, s, l) => {
  const r = i * i, c = l * (s * s - r) + r;
  return c < 0 ? 0 : Math.sqrt(c);
}, by = [gc, Ni, fa], vy = (i) => by.find((s) => s.test(i));
function qh(i) {
  const s = vy(i);
  if (Vs(!!s, `'${i}' is not an animatable color. Use the equivalent color code instead.`, "color-not-animatable"), !s)
    return !1;
  let l = s.parse(i);
  return s === fa && (l = gy(l)), l;
}
const Gh = (i, s) => {
  const l = qh(i), r = qh(s);
  if (!l || !r)
    return fl(i, s);
  const c = { ...l };
  return (m) => (c.red = tc(l.red, r.red, m), c.green = tc(l.green, r.green, m), c.blue = tc(l.blue, r.blue, m), c.alpha = Me(l.alpha, r.alpha, m), Ni.transform(c));
}, bc = /* @__PURE__ */ new Set(["none", "hidden"]);
function xy(i, s) {
  return bc.has(i) ? (l) => l <= 0 ? i : s : (l) => l >= 1 ? s : i;
}
function yy(i, s) {
  return (l) => Me(i, s, l);
}
function af(i) {
  return typeof i == "number" ? yy : typeof i == "string" ? ef(i) ? fl : Ze.test(i) ? Gh : Dy : Array.isArray(i) ? Rg : typeof i == "object" ? Ze.test(i) ? Gh : Ny : fl;
}
function Rg(i, s) {
  const l = [...i], r = l.length, c = i.map((m, f) => af(m)(m, s[f]));
  return (m) => {
    for (let f = 0; f < r; f++)
      l[f] = c[f](m);
    return l;
  };
}
function Ny(i, s) {
  const l = { ...i, ...s }, r = {};
  for (const c in l)
    i[c] !== void 0 && s[c] !== void 0 && (r[c] = af(i[c])(i[c], s[c]));
  return (c) => {
    for (const m in r)
      l[m] = r[m](c);
    return l;
  };
}
function Sy(i, s) {
  const l = [], r = { color: 0, var: 0, number: 0 };
  for (let c = 0; c < s.values.length; c++) {
    const m = s.types[c], f = i.indexes[m][r[m]], h = i.values[f] ?? 0;
    l[c] = h, r[m]++;
  }
  return l;
}
const Dy = (i, s) => {
  const l = Qt.createTransformer(s), r = ga(i), c = ga(s);
  return r.indexes.var.length === c.indexes.var.length && r.indexes.color.length === c.indexes.color.length && r.indexes.number.length >= c.indexes.number.length ? bc.has(i) && !c.values.length || bc.has(s) && !r.values.length ? xy(i, s) : Ts(Rg(Sy(r, c), c.values), l) : (Vs(!0, `Complex values '${i}' and '${s}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`, "complex-values-different"), fl(i, s));
};
function _g(i, s, l) {
  return typeof i == "number" && typeof s == "number" && typeof l == "number" ? Me(i, s, l) : af(i)(i, s);
}
const Ey = (i) => {
  const s = ({ timestamp: l }) => i(l);
  return {
    start: (l = !0) => Pe.update(s, l),
    stop: () => Wn(s),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => st.isProcessing ? st.timestamp : ct.now()
  };
}, Og = (i, s, l = 10) => {
  let r = "";
  const c = Math.max(Math.round(s / l), 2);
  for (let m = 0; m < c; m++)
    r += Math.round(i(m / (c - 1)) * 1e4) / 1e4 + ", ";
  return `linear(${r.substring(0, r.length - 2)})`;
}, dl = 2e4;
function sf(i) {
  let s = 0;
  const l = 50;
  let r = i.next(s);
  for (; !r.done && s < dl; )
    s += l, r = i.next(s);
  return s >= dl ? 1 / 0 : s;
}
function wy(i, s = 100, l) {
  const r = l({ ...i, keyframes: [0, s] }), c = Math.min(sf(r), dl);
  return {
    type: "keyframes",
    ease: (m) => r.next(c * m).value / s,
    duration: /* @__PURE__ */ Lt(c)
  };
}
const Ue = {
  // Default spring physics
  stiffness: 100,
  damping: 10,
  mass: 1,
  velocity: 0,
  // Default duration/bounce-based options
  duration: 800,
  // in ms
  bounce: 0.3,
  visualDuration: 0.3,
  // in seconds
  // Rest thresholds
  restSpeed: {
    granular: 0.01,
    default: 2
  },
  restDelta: {
    granular: 5e-3,
    default: 0.5
  },
  // Limits
  minDuration: 0.01,
  // in seconds
  maxDuration: 10,
  // in seconds
  minDamping: 0.05,
  maxDamping: 1
};
function vc(i, s) {
  return i * Math.sqrt(1 - s * s);
}
const Vy = 12;
function Ty(i, s, l) {
  let r = l;
  for (let c = 1; c < Vy; c++)
    r = r - i(r) / s(r);
  return r;
}
const nc = 1e-3;
function Cy({ duration: i = Ue.duration, bounce: s = Ue.bounce, velocity: l = Ue.velocity, mass: r = Ue.mass }) {
  let c, m;
  Vs(i <= /* @__PURE__ */ xt(Ue.maxDuration), "Spring duration must be 10 seconds or less", "spring-duration-limit");
  let f = 1 - s;
  f = tn(Ue.minDamping, Ue.maxDamping, f), i = tn(Ue.minDuration, Ue.maxDuration, /* @__PURE__ */ Lt(i)), f < 1 ? (c = (g) => {
    const x = g * f, y = x * i, N = x - l, V = vc(g, f), T = Math.exp(-y);
    return nc - N / V * T;
  }, m = (g) => {
    const y = g * f * i, N = y * l + l, V = Math.pow(f, 2) * Math.pow(g, 2) * i, T = Math.exp(-y), z = vc(Math.pow(g, 2), f);
    return (-c(g) + nc > 0 ? -1 : 1) * ((N - V) * T) / z;
  }) : (c = (g) => {
    const x = Math.exp(-g * i), y = (g - l) * i + 1;
    return -nc + x * y;
  }, m = (g) => {
    const x = Math.exp(-g * i), y = (l - g) * (i * i);
    return x * y;
  });
  const h = 5 / i, v = Ty(c, m, h);
  if (i = /* @__PURE__ */ xt(i), isNaN(v))
    return {
      stiffness: Ue.stiffness,
      damping: Ue.damping,
      duration: i
    };
  {
    const g = Math.pow(v, 2) * r;
    return {
      stiffness: g,
      damping: f * 2 * Math.sqrt(r * g),
      duration: i
    };
  }
}
const ky = ["duration", "bounce"], By = ["stiffness", "damping", "mass"];
function Yh(i, s) {
  return s.some((l) => i[l] !== void 0);
}
function Ay(i) {
  let s = {
    velocity: Ue.velocity,
    stiffness: Ue.stiffness,
    damping: Ue.damping,
    mass: Ue.mass,
    isResolvedFromDuration: !1,
    ...i
  };
  if (!Yh(i, By) && Yh(i, ky))
    if (s.velocity = 0, i.visualDuration) {
      const l = i.visualDuration, r = 2 * Math.PI / (l * 1.2), c = r * r, m = 2 * tn(0.05, 1, 1 - (i.bounce || 0)) * Math.sqrt(c);
      s = {
        ...s,
        mass: Ue.mass,
        stiffness: c,
        damping: m
      };
    } else {
      const l = Cy({ ...i, velocity: 0 });
      s = {
        ...s,
        ...l,
        mass: Ue.mass
      }, s.isResolvedFromDuration = !0;
    }
  return s;
}
function ml(i = Ue.visualDuration, s = Ue.bounce) {
  const l = typeof i != "object" ? {
    visualDuration: i,
    keyframes: [0, 1],
    bounce: s
  } : i;
  let { restSpeed: r, restDelta: c } = l;
  const m = l.keyframes[0], f = l.keyframes[l.keyframes.length - 1], h = { done: !1, value: m }, { stiffness: v, damping: g, mass: x, duration: y, velocity: N, isResolvedFromDuration: V } = Ay({
    ...l,
    velocity: -/* @__PURE__ */ Lt(l.velocity || 0)
  }), T = N || 0, z = g / (2 * Math.sqrt(v * x)), A = f - m, _ = /* @__PURE__ */ Lt(Math.sqrt(v / x)), G = Math.abs(A) < 5;
  r || (r = G ? Ue.restSpeed.granular : Ue.restSpeed.default), c || (c = G ? Ue.restDelta.granular : Ue.restDelta.default);
  let L, H, X, ee, F, Y;
  if (z < 1)
    X = vc(_, z), ee = (T + z * _ * A) / X, L = (te) => {
      const K = Math.exp(-z * _ * te);
      return f - K * (ee * Math.sin(X * te) + A * Math.cos(X * te));
    }, F = z * _ * ee + A * X, Y = z * _ * A - ee * X, H = (te) => Math.exp(-z * _ * te) * (F * Math.sin(X * te) + Y * Math.cos(X * te));
  else if (z === 1) {
    L = (K) => f - Math.exp(-_ * K) * (A + (T + _ * A) * K);
    const te = T + _ * A;
    H = (K) => Math.exp(-_ * K) * (_ * te * K - T);
  } else {
    const te = _ * Math.sqrt(z * z - 1);
    L = (de) => {
      const me = Math.exp(-z * _ * de), j = Math.min(te * de, 300);
      return f - me * ((T + z * _ * A) * Math.sinh(j) + te * A * Math.cosh(j)) / te;
    };
    const K = (T + z * _ * A) / te, I = z * _ * K - A * te, Se = z * _ * A - K * te;
    H = (de) => {
      const me = Math.exp(-z * _ * de), j = Math.min(te * de, 300);
      return me * (I * Math.sinh(j) + Se * Math.cosh(j));
    };
  }
  const J = {
    calculatedDuration: V && y || null,
    velocity: (te) => /* @__PURE__ */ xt(H(te)),
    next: (te) => {
      if (!V && z < 1) {
        const I = Math.exp(-z * _ * te), Se = Math.sin(X * te), de = Math.cos(X * te), me = f - I * (ee * Se + A * de), j = /* @__PURE__ */ xt(I * (F * Se + Y * de));
        return h.done = Math.abs(j) <= r && Math.abs(f - me) <= c, h.value = h.done ? f : me, h;
      }
      const K = L(te);
      if (V)
        h.done = te >= y;
      else {
        const I = /* @__PURE__ */ xt(H(te));
        h.done = Math.abs(I) <= r && Math.abs(f - K) <= c;
      }
      return h.value = h.done ? f : K, h;
    },
    toString: () => {
      const te = Math.min(sf(J), dl), K = Og((I) => J.next(te * I).value, te, 30);
      return te + "ms " + K;
    },
    toTransition: () => {
    }
  };
  return J;
}
ml.applyToOptions = (i) => {
  const s = wy(i, 100, ml);
  return i.ease = s.ease, i.duration = /* @__PURE__ */ xt(s.duration), i.type = "keyframes", i;
};
const jy = 5;
function Ug(i, s, l) {
  const r = Math.max(s - jy, 0);
  return /* @__PURE__ */ vg(l - i(r), s - r);
}
function xc({ keyframes: i, velocity: s = 0, power: l = 0.8, timeConstant: r = 325, bounceDamping: c = 10, bounceStiffness: m = 500, modifyTarget: f, min: h, max: v, restDelta: g = 0.5, restSpeed: x }) {
  const y = i[0], N = {
    done: !1,
    value: y
  }, V = (Y) => h !== void 0 && Y < h || v !== void 0 && Y > v, T = (Y) => h === void 0 ? v : v === void 0 || Math.abs(h - Y) < Math.abs(v - Y) ? h : v;
  let z = l * s;
  const A = y + z, _ = f === void 0 ? A : f(A);
  _ !== A && (z = _ - y);
  const G = (Y) => -z * Math.exp(-Y / r), L = (Y) => _ + G(Y), H = (Y) => {
    const J = G(Y), te = L(Y);
    N.done = Math.abs(J) <= g, N.value = N.done ? _ : te;
  };
  let X, ee;
  const F = (Y) => {
    V(N.value) && (X = Y, ee = ml({
      keyframes: [N.value, T(N.value)],
      velocity: Ug(L, Y, N.value),
      // TODO: This should be passing * 1000
      damping: c,
      stiffness: m,
      restDelta: g,
      restSpeed: x
    }));
  };
  return F(0), {
    calculatedDuration: null,
    next: (Y) => {
      let J = !1;
      return !ee && X === void 0 && (J = !0, H(Y), F(Y)), X !== void 0 && Y >= X ? ee.next(Y - X) : (!J && H(Y), N);
    }
  };
}
function My(i, s, l) {
  const r = [], c = l || $n.mix || _g, m = i.length - 1;
  for (let f = 0; f < m; f++) {
    let h = c(i[f], i[f + 1]);
    if (s) {
      const v = Array.isArray(s) ? s[f] || Ht : s;
      h = Ts(v, h);
    }
    r.push(h);
  }
  return r;
}
function Py(i, s, { clamp: l = !0, ease: r, mixer: c } = {}) {
  const m = i.length;
  if (wi(m === s.length, "Both input and output ranges must be the same length", "range-length"), m === 1)
    return () => s[0];
  if (m === 2 && s[0] === s[1])
    return () => s[1];
  const f = i[0] === i[1];
  i[0] > i[m - 1] && (i = [...i].reverse(), s = [...s].reverse());
  const h = My(s, r, c), v = h.length, g = (x) => {
    if (f && x < i[0])
      return s[0];
    let y = 0;
    if (v > 1)
      for (; y < i.length - 2 && !(x < i[y + 1]); y++)
        ;
    const N = /* @__PURE__ */ Ss(i[y], i[y + 1], x);
    return h[y](N);
  };
  return l ? (x) => g(tn(i[0], i[m - 1], x)) : g;
}
function zy(i, s) {
  const l = i[i.length - 1];
  for (let r = 1; r <= s; r++) {
    const c = /* @__PURE__ */ Ss(0, s, r);
    i.push(Me(l, 1, c));
  }
}
function Ry(i) {
  const s = [0];
  return zy(s, i.length - 1), s;
}
function _y(i, s) {
  return i.map((l) => l * s);
}
function Oy(i, s) {
  return i.map(() => s || Tg).splice(0, i.length - 1);
}
function xs({ duration: i = 300, keyframes: s, times: l, ease: r = "easeInOut" }) {
  const c = /* @__PURE__ */ Q1(r) ? r.map(Oh) : Oh(r), m = {
    done: !1,
    value: s[0]
  }, f = _y(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    l && l.length === s.length ? l : Ry(s),
    i
  ), h = Py(f, s, {
    ease: Array.isArray(c) ? c : Oy(s, c)
  });
  return {
    calculatedDuration: i,
    next: (v) => (m.value = h(v), m.done = v >= i, m)
  };
}
const Uy = (i) => i !== null;
function Dl(i, { repeat: s, repeatType: l = "loop" }, r, c = 1) {
  const m = i.filter(Uy), h = c < 0 || s && l !== "loop" && s % 2 === 1 ? 0 : m.length - 1;
  return !h || r === void 0 ? m[h] : r;
}
const Ly = {
  decay: xc,
  inertia: xc,
  tween: xs,
  keyframes: xs,
  spring: ml
};
function Lg(i) {
  typeof i.type == "string" && (i.type = Ly[i.type]);
}
class of {
  constructor() {
    this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this._finished = new Promise((s) => {
      this.resolve = s;
    });
  }
  notifyFinished() {
    this.resolve();
  }
  /**
   * Allows the animation to be awaited.
   *
   * @deprecated Use `finished` instead.
   */
  then(s, l) {
    return this.finished.then(s, l);
  }
}
const Hy = (i) => i / 100;
class pl extends of {
  constructor(s) {
    super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.delayState = {
      done: !1,
      value: void 0
    }, this.stop = () => {
      var r, c;
      const { motionValue: l } = this.options;
      l && l.updatedAt !== ct.now() && this.tick(ct.now()), this.isStopped = !0, this.state !== "idle" && (this.teardown(), (c = (r = this.options).onStop) == null || c.call(r));
    }, this.options = s, this.initAnimation(), this.play(), s.autoplay === !1 && this.pause();
  }
  initAnimation() {
    const { options: s } = this;
    Lg(s);
    const { type: l = xs, repeat: r = 0, repeatDelay: c = 0, repeatType: m, velocity: f = 0 } = s;
    let { keyframes: h } = s;
    const v = l || xs;
    v !== xs && typeof h[0] != "number" && (this.mixKeyframes = Ts(Hy, _g(h[0], h[1])), h = [0, 100]);
    const g = v({ ...s, keyframes: h });
    m === "mirror" && (this.mirroredGenerator = v({
      ...s,
      keyframes: [...h].reverse(),
      velocity: -f
    })), g.calculatedDuration === null && (g.calculatedDuration = sf(g));
    const { calculatedDuration: x } = g;
    this.calculatedDuration = x, this.resolvedDuration = x + c, this.totalDuration = this.resolvedDuration * (r + 1) - c, this.generator = g;
  }
  updateTime(s) {
    const l = Math.round(s - this.startTime) * this.playbackSpeed;
    this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = l;
  }
  tick(s, l = !1) {
    const { generator: r, totalDuration: c, mixKeyframes: m, mirroredGenerator: f, resolvedDuration: h, calculatedDuration: v } = this;
    if (this.startTime === null)
      return r.next(0);
    const { delay: g = 0, keyframes: x, repeat: y, repeatType: N, repeatDelay: V, type: T, onUpdate: z, finalKeyframe: A } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, s) : this.speed < 0 && (this.startTime = Math.min(s - c / this.speed, this.startTime)), l ? this.currentTime = s : this.updateTime(s);
    const _ = this.currentTime - g * (this.playbackSpeed >= 0 ? 1 : -1), G = this.playbackSpeed >= 0 ? _ < 0 : _ > c;
    this.currentTime = Math.max(_, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = c);
    let L = this.currentTime, H = r;
    if (y) {
      const Y = Math.min(this.currentTime, c) / h;
      let J = Math.floor(Y), te = Y % 1;
      !te && Y >= 1 && (te = 1), te === 1 && J--, J = Math.min(J, y + 1), !!(J % 2) && (N === "reverse" ? (te = 1 - te, V && (te -= V / h)) : N === "mirror" && (H = f)), L = tn(0, 1, te) * h;
    }
    let X;
    G ? (this.delayState.value = x[0], X = this.delayState) : X = H.next(L), m && !G && (X.value = m(X.value));
    let { done: ee } = X;
    !G && v !== null && (ee = this.playbackSpeed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
    const F = this.holdTime === null && (this.state === "finished" || this.state === "running" && ee);
    return F && T !== xc && (X.value = Dl(x, this.options, A, this.speed)), z && z(X.value), F && this.finish(), X;
  }
  /**
   * Allows the returned animation to be awaited or promise-chained. Currently
   * resolves when the animation finishes at all but in a future update could/should
   * reject if its cancels.
   */
  then(s, l) {
    return this.finished.then(s, l);
  }
  get duration() {
    return /* @__PURE__ */ Lt(this.calculatedDuration);
  }
  get iterationDuration() {
    const { delay: s = 0 } = this.options || {};
    return this.duration + /* @__PURE__ */ Lt(s);
  }
  get time() {
    return /* @__PURE__ */ Lt(this.currentTime);
  }
  set time(s) {
    s = /* @__PURE__ */ xt(s), this.currentTime = s, this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = s : this.driver && (this.startTime = this.driver.now() - s / this.playbackSpeed), this.driver ? this.driver.start(!1) : (this.startTime = 0, this.state = "paused", this.holdTime = s, this.tick(s));
  }
  /**
   * Returns the generator's velocity at the current time in units/second.
   * Uses the analytical derivative when available (springs), avoiding
   * the MotionValue's frame-dependent velocity estimation.
   */
  getGeneratorVelocity() {
    const s = this.currentTime;
    if (s <= 0)
      return this.options.velocity || 0;
    if (this.generator.velocity)
      return this.generator.velocity(s);
    const l = this.generator.next(s).value;
    return Ug((r) => this.generator.next(r).value, s, l);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(s) {
    const l = this.playbackSpeed !== s;
    l && this.driver && this.updateTime(ct.now()), this.playbackSpeed = s, l && this.driver && (this.time = /* @__PURE__ */ Lt(this.currentTime));
  }
  play() {
    var c, m;
    if (this.isStopped)
      return;
    const { driver: s = Ey, startTime: l } = this.options;
    this.driver || (this.driver = s((f) => this.tick(f))), (m = (c = this.options).onPlay) == null || m.call(c);
    const r = this.driver.now();
    this.state === "finished" ? (this.updateFinished(), this.startTime = r) : this.holdTime !== null ? this.startTime = r - this.holdTime : this.startTime || (this.startTime = l ?? r), this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start();
  }
  pause() {
    this.state = "paused", this.updateTime(ct.now()), this.holdTime = this.currentTime;
  }
  complete() {
    this.state !== "running" && this.play(), this.state = "finished", this.holdTime = null;
  }
  finish() {
    var s, l;
    this.notifyFinished(), this.teardown(), this.state = "finished", (l = (s = this.options).onComplete) == null || l.call(s);
  }
  cancel() {
    var s, l;
    this.holdTime = null, this.startTime = 0, this.tick(0), this.teardown(), (l = (s = this.options).onCancel) == null || l.call(s);
  }
  teardown() {
    this.state = "idle", this.stopDriver(), this.startTime = this.holdTime = null;
  }
  stopDriver() {
    this.driver && (this.driver.stop(), this.driver = void 0);
  }
  sample(s) {
    return this.startTime = 0, this.tick(s, !0);
  }
  attachTimeline(s) {
    var l;
    return this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear", this.initAnimation()), (l = this.driver) == null || l.stop(), s.observe(this);
  }
}
function qy(i) {
  for (let s = 1; s < i.length; s++)
    i[s] ?? (i[s] = i[s - 1]);
}
const Si = (i) => i * 180 / Math.PI, yc = (i) => {
  const s = Si(Math.atan2(i[1], i[0]));
  return Nc(s);
}, Gy = {
  x: 4,
  y: 5,
  translateX: 4,
  translateY: 5,
  scaleX: 0,
  scaleY: 3,
  scale: (i) => (Math.abs(i[0]) + Math.abs(i[3])) / 2,
  rotate: yc,
  rotateZ: yc,
  skewX: (i) => Si(Math.atan(i[1])),
  skewY: (i) => Si(Math.atan(i[2])),
  skew: (i) => (Math.abs(i[1]) + Math.abs(i[2])) / 2
}, Nc = (i) => (i = i % 360, i < 0 && (i += 360), i), Xh = yc, Fh = (i) => Math.sqrt(i[0] * i[0] + i[1] * i[1]), Qh = (i) => Math.sqrt(i[4] * i[4] + i[5] * i[5]), Yy = {
  x: 12,
  y: 13,
  z: 14,
  translateX: 12,
  translateY: 13,
  translateZ: 14,
  scaleX: Fh,
  scaleY: Qh,
  scale: (i) => (Fh(i) + Qh(i)) / 2,
  rotateX: (i) => Nc(Si(Math.atan2(i[6], i[5]))),
  rotateY: (i) => Nc(Si(Math.atan2(-i[2], i[0]))),
  rotateZ: Xh,
  rotate: Xh,
  skewX: (i) => Si(Math.atan(i[4])),
  skewY: (i) => Si(Math.atan(i[1])),
  skew: (i) => (Math.abs(i[1]) + Math.abs(i[4])) / 2
};
function Sc(i) {
  return i.includes("scale") ? 1 : 0;
}
function Dc(i, s) {
  if (!i || i === "none")
    return Sc(s);
  const l = i.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let r, c;
  if (l)
    r = Yy, c = l;
  else {
    const h = i.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    r = Gy, c = h;
  }
  if (!c)
    return Sc(s);
  const m = r[s], f = c[1].split(",").map(Fy);
  return typeof m == "function" ? m(f) : f[m];
}
const Xy = (i, s) => {
  const { transform: l = "none" } = getComputedStyle(i);
  return Dc(l, s);
};
function Fy(i) {
  return parseFloat(i.trim());
}
const xa = [
  "transformPerspective",
  "x",
  "y",
  "z",
  "translateX",
  "translateY",
  "translateZ",
  "scale",
  "scaleX",
  "scaleY",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "skew",
  "skewX",
  "skewY"
], ya = /* @__PURE__ */ new Set([...xa, "pathRotation"]), Kh = (i) => i === va || i === ae, Qy = /* @__PURE__ */ new Set(["x", "y", "z"]), Ky = xa.filter((i) => !Qy.has(i));
function Zy(i) {
  const s = [];
  return Ky.forEach((l) => {
    const r = i.getValue(l);
    r !== void 0 && (s.push([l, r.get()]), r.set(l.startsWith("scale") ? 1 : 0));
  }), s;
}
const Zn = {
  // Dimensions
  width: ({ x: i }, { paddingLeft: s = "0", paddingRight: l = "0", boxSizing: r }) => {
    const c = i.max - i.min;
    return r === "border-box" ? c : c - parseFloat(s) - parseFloat(l);
  },
  height: ({ y: i }, { paddingTop: s = "0", paddingBottom: l = "0", boxSizing: r }) => {
    const c = i.max - i.min;
    return r === "border-box" ? c : c - parseFloat(s) - parseFloat(l);
  },
  top: (i, { top: s }) => parseFloat(s),
  left: (i, { left: s }) => parseFloat(s),
  bottom: ({ y: i }, { top: s }) => parseFloat(s) + (i.max - i.min),
  right: ({ x: i }, { left: s }) => parseFloat(s) + (i.max - i.min),
  // Transform
  x: (i, { transform: s }) => Dc(s, "x"),
  y: (i, { transform: s }) => Dc(s, "y")
};
Zn.translateX = Zn.x;
Zn.translateY = Zn.y;
const Di = /* @__PURE__ */ new Set();
let Ec = !1, wc = !1, Vc = !1;
function Hg() {
  if (wc) {
    const i = Array.from(Di).filter((r) => r.needsMeasurement), s = new Set(i.map((r) => r.element)), l = /* @__PURE__ */ new Map();
    s.forEach((r) => {
      const c = Zy(r);
      c.length && (l.set(r, c), r.render());
    }), i.forEach((r) => r.measureInitialState()), s.forEach((r) => {
      r.render();
      const c = l.get(r);
      c && c.forEach(([m, f]) => {
        var h;
        (h = r.getValue(m)) == null || h.set(f);
      });
    }), i.forEach((r) => r.measureEndState()), i.forEach((r) => {
      r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
    });
  }
  wc = !1, Ec = !1, Di.forEach((i) => i.complete(Vc)), Di.clear();
}
function qg() {
  Di.forEach((i) => {
    i.readKeyframes(), i.needsMeasurement && (wc = !0);
  });
}
function Jy() {
  Vc = !0, qg(), Hg(), Vc = !1;
}
class lf {
  constructor(s, l, r, c, m, f = !1) {
    this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...s], this.onComplete = l, this.name = r, this.motionValue = c, this.element = m, this.isAsync = f;
  }
  scheduleResolve() {
    this.state = "scheduled", this.isAsync ? (Di.add(this), Ec || (Ec = !0, Pe.read(qg), Pe.resolveKeyframes(Hg))) : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const { unresolvedKeyframes: s, name: l, element: r, motionValue: c } = this;
    if (s[0] === null) {
      const m = c == null ? void 0 : c.get(), f = s[s.length - 1];
      if (m !== void 0)
        s[0] = m;
      else if (r && l) {
        const h = r.readValue(l, f);
        h != null && (s[0] = h);
      }
      s[0] === void 0 && (s[0] = f), c && m === void 0 && c.set(s[0]);
    }
    qy(s);
  }
  setFinalKeyframe() {
  }
  measureInitialState() {
  }
  renderEndStyles() {
  }
  measureEndState() {
  }
  complete(s = !1) {
    this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, s), Di.delete(this);
  }
  cancel() {
    this.state === "scheduled" && (Di.delete(this), this.state = "pending");
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const $y = (i) => i.startsWith("--");
function Gg(i, s, l) {
  $y(s) ? i.style.setProperty(s, l) : i.style[s] = l;
}
const Wy = {};
function Yg(i, s) {
  const l = /* @__PURE__ */ bg(i);
  return () => Wy[s] ?? l();
}
const Iy = /* @__PURE__ */ Yg(() => window.ScrollTimeline !== void 0, "scrollTimeline"), Xg = /* @__PURE__ */ Yg(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing"), bs = ([i, s, l, r]) => `cubic-bezier(${i}, ${s}, ${l}, ${r})`, Zh = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ bs([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ bs([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ bs([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ bs([0.33, 1.53, 0.69, 0.99])
};
function Fg(i, s) {
  if (i)
    return typeof i == "function" ? Xg() ? Og(i, s) : "ease-out" : /* @__PURE__ */ Cg(i) ? bs(i) : Array.isArray(i) ? i.map((l) => Fg(l, s) || Zh.easeOut) : Zh[i];
}
function eN(i, s, l, { delay: r = 0, duration: c = 300, repeat: m = 0, repeatType: f = "loop", ease: h = "easeOut", times: v } = {}, g = void 0) {
  const x = {
    [s]: l
  };
  v && (x.offset = v);
  const y = Fg(h, c);
  Array.isArray(y) && (x.easing = y);
  const N = {
    delay: r,
    duration: c,
    easing: Array.isArray(y) ? "linear" : y,
    fill: "both",
    iterations: m + 1,
    direction: f === "reverse" ? "alternate" : "normal"
  };
  return g && (N.pseudoElement = g), i.animate(x, N);
}
function Qg(i) {
  return typeof i == "function" && "applyToOptions" in i;
}
function tN({ type: i, ...s }) {
  return Qg(i) && Xg() ? i.applyToOptions(s) : (s.duration ?? (s.duration = 300), s.ease ?? (s.ease = "easeOut"), s);
}
class Kg extends of {
  constructor(s) {
    if (super(), this.finishedTime = null, this.isStopped = !1, this.manualStartTime = null, !s)
      return;
    const { element: l, name: r, keyframes: c, pseudoElement: m, allowFlatten: f = !1, finalKeyframe: h, onComplete: v } = s;
    this.isPseudoElement = !!m, this.allowFlatten = f, this.options = s, wi(typeof s.type != "string", `Mini animate() doesn't support "type" as a string.`, "mini-spring");
    const g = tN(s);
    this.animation = eN(l, r, c, g, m), g.autoplay === !1 && this.animation.pause(), this.animation.onfinish = () => {
      if (this.finishedTime = this.time, !m) {
        const x = Dl(c, this.options, h, this.speed);
        this.updateMotionValue && this.updateMotionValue(x), Gg(l, r, x), this.animation.cancel();
      }
      v == null || v(), this.notifyFinished();
    };
  }
  play() {
    this.isStopped || (this.manualStartTime = null, this.animation.play(), this.state === "finished" && this.updateFinished());
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    var s, l;
    (l = (s = this.animation).finish) == null || l.call(s);
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch {
    }
  }
  stop() {
    if (this.isStopped)
      return;
    this.isStopped = !0;
    const { state: s } = this;
    s === "idle" || s === "finished" || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel());
  }
  /**
   * WAAPI doesn't natively have any interruption capabilities.
   *
   * In this method, we commit styles back to the DOM before cancelling
   * the animation.
   *
   * This is designed to be overridden by NativeAnimationExtended, which
   * will create a renderless JS animation and sample it twice to calculate
   * its current value, "previous" value, and therefore allow
   * Motion to also correctly calculate velocity for any subsequent animation
   * while deferring the commit until the next animation frame.
   */
  commitStyles() {
    var l, r, c;
    const s = (l = this.options) == null ? void 0 : l.element;
    !this.isPseudoElement && (s != null && s.isConnected) && ((c = (r = this.animation).commitStyles) == null || c.call(r));
  }
  get duration() {
    var l, r;
    const s = ((r = (l = this.animation.effect) == null ? void 0 : l.getComputedTiming) == null ? void 0 : r.call(l).duration) || 0;
    return /* @__PURE__ */ Lt(Number(s));
  }
  get iterationDuration() {
    const { delay: s = 0 } = this.options || {};
    return this.duration + /* @__PURE__ */ Lt(s);
  }
  get time() {
    return /* @__PURE__ */ Lt(Number(this.animation.currentTime) || 0);
  }
  set time(s) {
    const l = this.finishedTime !== null;
    this.manualStartTime = null, this.finishedTime = null, this.animation.currentTime = /* @__PURE__ */ xt(s), l && this.animation.pause();
  }
  /**
   * The playback speed of the animation.
   * 1 = normal speed, 2 = double speed, 0.5 = half speed.
   */
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(s) {
    s < 0 && (this.finishedTime = null), this.animation.playbackRate = s;
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState;
  }
  get startTime() {
    return this.manualStartTime ?? Number(this.animation.startTime);
  }
  set startTime(s) {
    this.manualStartTime = this.animation.startTime = s;
  }
  /**
   * Attaches a timeline to the animation, for instance the `ScrollTimeline`.
   */
  attachTimeline({ timeline: s, rangeStart: l, rangeEnd: r, observe: c }) {
    var m;
    return this.allowFlatten && ((m = this.animation.effect) == null || m.updateTiming({ easing: "linear" })), this.animation.onfinish = null, s && Iy() ? (this.animation.timeline = s, l && (this.animation.rangeStart = l), r && (this.animation.rangeEnd = r), Ht) : c(this);
  }
}
const Zg = {
  anticipate: Eg,
  backInOut: Dg,
  circInOut: Vg
};
function nN(i) {
  return i in Zg;
}
function iN(i) {
  typeof i.ease == "string" && nN(i.ease) && (i.ease = Zg[i.ease]);
}
const ic = 10;
class aN extends Kg {
  constructor(s) {
    iN(s), Lg(s), super(s), s.startTime !== void 0 && s.autoplay !== !1 && (this.startTime = s.startTime), this.options = s;
  }
  /**
   * WAAPI doesn't natively have any interruption capabilities.
   *
   * Rather than read committed styles back out of the DOM, we can
   * create a renderless JS animation and sample it twice to calculate
   * its current value, "previous" value, and therefore allow
   * Motion to calculate velocity for any subsequent animation.
   */
  updateMotionValue(s) {
    const { motionValue: l, onUpdate: r, onComplete: c, element: m, ...f } = this.options;
    if (!l)
      return;
    if (s !== void 0) {
      l.set(s);
      return;
    }
    const h = new pl({
      ...f,
      autoplay: !1
    }), v = Math.max(ic, ct.now() - this.startTime), g = tn(0, ic, v - ic), x = h.sample(v).value, { name: y } = this.options;
    m && y && Gg(m, y, x), l.setWithVelocity(h.sample(Math.max(0, v - g)).value, x, g), h.stop();
  }
}
const Jh = (i, s) => s === "zIndex" ? !1 : !!(typeof i == "number" || Array.isArray(i) || typeof i == "string" && // It's animatable if we have a string
(Qt.test(i) || i === "0") && // And it contains numbers and/or colors
!i.startsWith("url("));
function sN(i) {
  const s = i[0];
  if (i.length === 1)
    return !0;
  for (let l = 0; l < i.length; l++)
    if (i[l] !== s)
      return !0;
}
function oN(i, s, l, r) {
  const c = i[0];
  if (c === null)
    return !1;
  if (s === "display" || s === "visibility")
    return !0;
  const m = i[i.length - 1], f = Jh(c, s), h = Jh(m, s);
  return Vs(f === h, `You are trying to animate ${s} from "${c}" to "${m}". "${f ? m : c}" is not an animatable value.`, "value-not-animatable"), !f || !h ? !1 : sN(i) || (l === "spring" || Qg(l)) && r;
}
function Tc(i) {
  i.duration = 0, i.type = "keyframes";
}
const Jg = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform"
  // TODO: Can be accelerated but currently disabled until https://issues.chromium.org/issues/41491098 is resolved
  // or until we implement support for linear() easing.
  // "background-color"
]), lN = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
function rN(i) {
  for (let s = 0; s < i.length; s++)
    if (typeof i[s] == "string" && lN.test(i[s]))
      return !0;
  return !1;
}
const uN = /* @__PURE__ */ new Set([
  "color",
  "backgroundColor",
  "outlineColor",
  "fill",
  "stroke",
  "borderColor",
  "borderTopColor",
  "borderRightColor",
  "borderBottomColor",
  "borderLeftColor"
]), cN = /* @__PURE__ */ bg(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function fN(i) {
  var y;
  const { motionValue: s, name: l, repeatDelay: r, repeatType: c, damping: m, type: f, keyframes: h } = i;
  if (!(((y = s == null ? void 0 : s.owner) == null ? void 0 : y.current) instanceof HTMLElement))
    return !1;
  const { onUpdate: g, transformTemplate: x } = s.owner.getProps();
  return cN() && l && /**
   * Force WAAPI for color properties with browser-only color formats
   * (oklch, oklab, lab, lch, etc.) that the JS animation path can't parse.
   */
  (Jg.has(l) || uN.has(l) && rN(h)) && (l !== "transform" || !x) && /**
   * If we're outputting values to onUpdate then we can't use WAAPI as there's
   * no way to read the value from WAAPI every frame.
   */
  !g && !r && c !== "mirror" && m !== 0 && f !== "inertia";
}
const dN = 40;
class mN extends of {
  constructor({ autoplay: s = !0, delay: l = 0, type: r = "keyframes", repeat: c = 0, repeatDelay: m = 0, repeatType: f = "loop", keyframes: h, name: v, motionValue: g, element: x, ...y }) {
    var T;
    super(), this.stop = () => {
      var z, A;
      this._animation && (this._animation.stop(), (z = this.stopTimeline) == null || z.call(this)), (A = this.keyframeResolver) == null || A.cancel();
    }, this.createdAt = ct.now();
    const N = {
      autoplay: s,
      delay: l,
      type: r,
      repeat: c,
      repeatDelay: m,
      repeatType: f,
      name: v,
      motionValue: g,
      element: x,
      ...y
    }, V = (x == null ? void 0 : x.KeyframeResolver) || lf;
    this.keyframeResolver = new V(h, (z, A, _) => this.onKeyframesResolved(z, A, N, !_), v, g, x), (T = this.keyframeResolver) == null || T.scheduleResolve();
  }
  onKeyframesResolved(s, l, r, c) {
    var _, G;
    this.keyframeResolver = void 0;
    const { name: m, type: f, velocity: h, delay: v, isHandoff: g, onUpdate: x } = r;
    this.resolvedAt = ct.now();
    let y = !0;
    oN(s, m, f, h) || (y = !1, ($n.instantAnimations || !v) && (x == null || x(Dl(s, r, l))), s[0] = s[s.length - 1], Tc(r), r.repeat = 0);
    const V = {
      startTime: c ? this.resolvedAt ? this.resolvedAt - this.createdAt > dN ? this.resolvedAt : this.createdAt : this.createdAt : void 0,
      finalKeyframe: l,
      ...r,
      keyframes: s
    }, T = y && !g && fN(V), z = (G = (_ = V.motionValue) == null ? void 0 : _.owner) == null ? void 0 : G.current;
    let A;
    if (T)
      try {
        A = new aN({
          ...V,
          element: z
        });
      } catch {
        A = new pl(V);
      }
    else
      A = new pl(V);
    A.finished.then(() => {
      this.notifyFinished();
    }).catch(Ht), this.pendingTimeline && (this.stopTimeline = A.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = A;
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(s, l) {
    return this.finished.finally(s).then(() => {
    });
  }
  get animation() {
    var s;
    return this._animation || ((s = this.keyframeResolver) == null || s.resume(), Jy()), this._animation;
  }
  get duration() {
    return this.animation.duration;
  }
  get iterationDuration() {
    return this.animation.iterationDuration;
  }
  get time() {
    return this.animation.time;
  }
  set time(s) {
    this.animation.time = s;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(s) {
    this.animation.speed = s;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(s) {
    return this._animation ? this.stopTimeline = this.animation.attachTimeline(s) : this.pendingTimeline = s, () => this.stop();
  }
  play() {
    this.animation.play();
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.complete();
  }
  cancel() {
    var s;
    this._animation && this.animation.cancel(), (s = this.keyframeResolver) == null || s.cancel();
  }
}
function $g(i, s, l, r = 0, c = 1) {
  const m = Array.from(i).sort((g, x) => g.sortNodePosition(x)).indexOf(s), f = i.size, h = (f - 1) * r;
  return typeof l == "function" ? l(m, f) : c === 1 ? m * r : h - m * r;
}
const $h = 30, pN = (i) => !isNaN(parseFloat(i));
class hN {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   */
  constructor(s, l = {}) {
    this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (r) => {
      var m;
      const c = ct.now();
      if (this.updatedAt !== c && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(r), this.current !== this.prev && ((m = this.events.change) == null || m.notify(this.current), this.dependents))
        for (const f of this.dependents)
          f.dirty();
    }, this.hasAnimated = !1, this.setCurrent(s), this.owner = l.owner;
  }
  setCurrent(s) {
    this.current = s, this.updatedAt = ct.now(), this.canTrackVelocity === null && s !== void 0 && (this.canTrackVelocity = pN(this.current));
  }
  setPrevFrameValue(s = this.current) {
    this.prevFrameValue = s, this.prevUpdatedAt = this.updatedAt;
  }
  /**
   * Adds a function that will be notified when the `MotionValue` is updated.
   *
   * It returns a function that, when called, will cancel the subscription.
   *
   * When calling `onChange` inside a React component, it should be wrapped with the
   * `useEffect` hook. As it returns an unsubscribe function, this should be returned
   * from the `useEffect` function to ensure you don't add duplicate subscribers..
   *
   * ```jsx
   * export const MyComponent = () => {
   *   const x = useMotionValue(0)
   *   const y = useMotionValue(0)
   *   const opacity = useMotionValue(1)
   *
   *   useEffect(() => {
   *     function updateOpacity() {
   *       const maxXY = Math.max(x.get(), y.get())
   *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
   *       opacity.set(newOpacity)
   *     }
   *
   *     const unsubscribeX = x.on("change", updateOpacity)
   *     const unsubscribeY = y.on("change", updateOpacity)
   *
   *     return () => {
   *       unsubscribeX()
   *       unsubscribeY()
   *     }
   *   }, [])
   *
   *   return <motion.div style={{ x }} />
   * }
   * ```
   *
   * @param subscriber - A function that receives the latest value.
   * @returns A function that, when called, will cancel this subscription.
   *
   * @deprecated
   */
  onChange(s) {
    return this.on("change", s);
  }
  on(s, l) {
    this.events[s] || (this.events[s] = new $c());
    const r = this.events[s].add(l);
    return s === "change" ? () => {
      r(), Pe.read(() => {
        this.events.change.getSize() || this.stop();
      });
    } : r;
  }
  clearListeners() {
    for (const s in this.events)
      this.events[s].clear();
  }
  /**
   * Attaches a passive effect to the `MotionValue`.
   */
  attach(s, l) {
    this.passiveEffect = s, this.stopPassiveEffect = l;
  }
  /**
   * Sets the state of the `MotionValue`.
   *
   * @remarks
   *
   * ```jsx
   * const x = useMotionValue(0)
   * x.set(10)
   * ```
   *
   * @param latest - Latest value to set.
   * @param render - Whether to notify render subscribers. Defaults to `true`
   *
   * @public
   */
  set(s) {
    this.passiveEffect ? this.passiveEffect(s, this.updateAndNotify) : this.updateAndNotify(s);
  }
  setWithVelocity(s, l, r) {
    this.set(l), this.prev = void 0, this.prevFrameValue = s, this.prevUpdatedAt = this.updatedAt - r;
  }
  /**
   * Set the state of the `MotionValue`, stopping any active animations,
   * effects, and resets velocity to `0`.
   */
  jump(s, l = !0) {
    this.updateAndNotify(s), this.prev = s, this.prevUpdatedAt = this.prevFrameValue = void 0, l && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
  dirty() {
    var s;
    (s = this.events.change) == null || s.notify(this.current);
  }
  addDependent(s) {
    this.dependents || (this.dependents = /* @__PURE__ */ new Set()), this.dependents.add(s);
  }
  removeDependent(s) {
    this.dependents && this.dependents.delete(s);
  }
  /**
   * Returns the latest state of `MotionValue`
   *
   * @returns - The latest state of `MotionValue`
   *
   * @public
   */
  get() {
    return this.current;
  }
  /**
   * @public
   */
  getPrevious() {
    return this.prev;
  }
  /**
   * Returns the latest velocity of `MotionValue`
   *
   * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
   *
   * @public
   */
  getVelocity() {
    const s = ct.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || s - this.updatedAt > $h)
      return 0;
    const l = Math.min(this.updatedAt - this.prevUpdatedAt, $h);
    return /* @__PURE__ */ vg(parseFloat(this.current) - parseFloat(this.prevFrameValue), l);
  }
  /**
   * Registers a new animation to control this `MotionValue`. Only one
   * animation can drive a `MotionValue` at one time.
   *
   * ```jsx
   * value.start()
   * ```
   *
   * @param animation - A function that starts the provided animation
   */
  start(s) {
    return this.stop(), new Promise((l) => {
      this.hasAnimated = !0, this.animation = s(l), this.events.animationStart && this.events.animationStart.notify();
    }).then(() => {
      this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
    });
  }
  /**
   * Stop the currently active animation.
   *
   * @public
   */
  stop() {
    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
  }
  /**
   * Returns `true` if this value is currently animating.
   *
   * @public
   */
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  /**
   * Destroy and clean up subscribers to this `MotionValue`.
   *
   * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
   * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
   * created a `MotionValue` via the `motionValue` function.
   *
   * @public
   */
  destroy() {
    var s, l;
    (s = this.dependents) == null || s.clear(), (l = this.events.destroy) == null || l.notify(), this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function ba(i, s) {
  return new hN(i, s);
}
function Wg(i, s) {
  if (i != null && i.inherit && s) {
    const { inherit: l, ...r } = i;
    return { ...s, ...r };
  }
  return i;
}
function rf(i, s) {
  const l = (i == null ? void 0 : i[s]) ?? (i == null ? void 0 : i.default) ?? i;
  return l !== i ? Wg(l, i) : l;
}
const gN = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, bN = (i) => ({
  type: "spring",
  stiffness: 550,
  damping: i === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), vN = {
  type: "keyframes",
  duration: 0.8
}, xN = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, yN = (i, { keyframes: s }) => s.length > 2 ? vN : ya.has(i) ? i.startsWith("scale") ? bN(s[1]) : gN : xN, NN = /* @__PURE__ */ new Set([
  "when",
  "delay",
  "delayChildren",
  "staggerChildren",
  "staggerDirection",
  "repeat",
  "repeatType",
  "repeatDelay",
  "from",
  "elapsed"
]);
function SN(i) {
  for (const s in i)
    if (!NN.has(s))
      return !0;
  return !1;
}
const uf = (i, s, l, r = {}, c, m) => (f) => {
  const h = rf(r, i) || {}, v = h.delay || r.delay || 0;
  let { elapsed: g = 0 } = r;
  g = g - /* @__PURE__ */ xt(v);
  const x = {
    keyframes: Array.isArray(l) ? l : [null, l],
    ease: "easeOut",
    velocity: s.getVelocity(),
    ...h,
    delay: -g,
    onUpdate: (N) => {
      s.set(N), h.onUpdate && h.onUpdate(N);
    },
    onComplete: () => {
      f(), h.onComplete && h.onComplete();
    },
    name: i,
    motionValue: s,
    element: m ? void 0 : c
  };
  SN(h) || Object.assign(x, yN(i, x)), x.duration && (x.duration = /* @__PURE__ */ xt(x.duration)), x.repeatDelay && (x.repeatDelay = /* @__PURE__ */ xt(x.repeatDelay)), x.from !== void 0 && (x.keyframes[0] = x.from);
  let y = !1;
  if ((x.type === !1 || x.duration === 0 && !x.repeatDelay) && (Tc(x), x.delay === 0 && (y = !0)), ($n.instantAnimations || $n.skipAnimations || c != null && c.shouldSkipAnimations || h.skipAnimations) && (y = !0, Tc(x), x.delay = 0), x.allowFlatten = !h.type && !h.ease, y && !m && s.get() !== void 0) {
    const N = Dl(x.keyframes, h);
    if (N !== void 0) {
      Pe.update(() => {
        x.onUpdate(N), x.onComplete();
      });
      return;
    }
  }
  return h.isSync ? new pl(x) : new mN(x);
}, DN = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function EN(i) {
  const s = DN.exec(i);
  if (!s)
    return [,];
  const [, l, r, c] = s;
  return [`--${l ?? r}`, c];
}
const wN = 4;
function Ig(i, s, l = 1) {
  wi(l <= wN, `Max CSS variable fallback depth detected in property "${i}". This may indicate a circular fallback dependency.`, "max-css-var-depth");
  const [r, c] = EN(i);
  if (!r)
    return;
  const m = window.getComputedStyle(s).getPropertyValue(r);
  if (m) {
    const f = m.trim();
    return pg(f) ? parseFloat(f) : f;
  }
  return ef(c) ? Ig(c, s, l + 1) : c;
}
function Wh(i) {
  const s = [{}, {}];
  return i == null || i.values.forEach((l, r) => {
    s[0][r] = l.get(), s[1][r] = l.getVelocity();
  }), s;
}
function cf(i, s, l, r) {
  if (typeof s == "function") {
    const [c, m] = Wh(r);
    s = s(l !== void 0 ? l : i.custom, c, m);
  }
  if (typeof s == "string" && (s = i.variants && i.variants[s]), typeof s == "function") {
    const [c, m] = Wh(r);
    s = s(l !== void 0 ? l : i.custom, c, m);
  }
  return s;
}
function Ei(i, s, l) {
  const r = i.getProps();
  return cf(r, s, l !== void 0 ? l : r.custom, i);
}
const eb = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...xa
]), Cc = (i) => Array.isArray(i);
function VN(i, s, l) {
  i.hasValue(s) ? i.getValue(s).set(l) : i.addValue(s, ba(l));
}
function TN(i) {
  return Cc(i) ? i[i.length - 1] || 0 : i;
}
function CN(i, s) {
  const l = Ei(i, s);
  let { transitionEnd: r = {}, transition: c = {}, ...m } = l || {};
  m = { ...m, ...r };
  for (const f in m) {
    const h = TN(m[f]);
    VN(i, f, h);
  }
}
const ot = (i) => !!(i && i.getVelocity);
function kN(i) {
  return !!(ot(i) && i.add);
}
function kc(i, s) {
  const l = i.getValue("willChange");
  if (kN(l))
    return l.add(s);
  if (!l && $n.WillChange) {
    const r = new $n.WillChange("auto");
    i.addValue("willChange", r), r.add(s);
  }
}
function ff(i) {
  return i.replace(/([A-Z])/g, (s) => `-${s.toLowerCase()}`);
}
const BN = "framerAppearId", tb = "data-" + ff(BN);
function nb(i) {
  return i.props[tb];
}
function AN({ protectedKeys: i, needsAnimating: s }, l) {
  const r = i.hasOwnProperty(l) && s[l] !== !0;
  return s[l] = !1, r;
}
function ib(i, s, { delay: l = 0, transitionOverride: r, type: c } = {}) {
  let { transition: m, transitionEnd: f, ...h } = s;
  const v = i.getDefaultTransition();
  m = m ? Wg(m, v) : v;
  const g = m == null ? void 0 : m.reduceMotion, x = m == null ? void 0 : m.skipAnimations;
  r && (m = r);
  const y = [], N = c && i.animationState && i.animationState.getState()[c], V = m == null ? void 0 : m.path;
  V && V.animateVisualElement(i, h, m, l, y);
  for (const T in h) {
    const z = i.getValue(T, i.latestValues[T] ?? null), A = h[T];
    if (A === void 0 || N && AN(N, T))
      continue;
    const _ = {
      delay: l,
      ...rf(m || {}, T)
    };
    x && (_.skipAnimations = !0);
    const G = z.get();
    if (G !== void 0 && !z.isAnimating() && !Array.isArray(A) && A === G && !_.velocity) {
      Pe.update(() => z.set(A));
      continue;
    }
    let L = !1;
    if (window.MotionHandoffAnimation) {
      const ee = nb(i);
      if (ee) {
        const F = window.MotionHandoffAnimation(ee, T, Pe);
        F !== null && (_.startTime = F, L = !0);
      }
    }
    kc(i, T);
    const H = g ?? i.shouldReduceMotion;
    z.start(uf(T, z, A, H && eb.has(T) ? { type: !1 } : _, i, L));
    const X = z.animation;
    X && y.push(X);
  }
  if (f) {
    const T = () => Pe.update(() => {
      f && CN(i, f);
    });
    y.length ? Promise.all(y).then(T) : T();
  }
  return y;
}
function Bc(i, s, l = {}) {
  var v;
  const r = Ei(i, s, l.type === "exit" ? (v = i.presenceContext) == null ? void 0 : v.custom : void 0);
  let { transition: c = i.getDefaultTransition() || {} } = r || {};
  l.transitionOverride && (c = l.transitionOverride);
  const m = r ? () => Promise.all(ib(i, r, l)) : () => Promise.resolve(), f = i.variantChildren && i.variantChildren.size ? (g = 0) => {
    const { delayChildren: x = 0, staggerChildren: y, staggerDirection: N } = c;
    return jN(i, s, g, x, y, N, l);
  } : () => Promise.resolve(), { when: h } = c;
  if (h) {
    const [g, x] = h === "beforeChildren" ? [m, f] : [f, m];
    return g().then(() => x());
  } else
    return Promise.all([m(), f(l.delay)]);
}
function jN(i, s, l = 0, r = 0, c = 0, m = 1, f) {
  const h = [];
  for (const v of i.variantChildren)
    v.notify("AnimationStart", s), h.push(Bc(v, s, {
      ...f,
      delay: l + (typeof r == "function" ? 0 : r) + $g(i.variantChildren, v, r, c, m)
    }).then(() => v.notify("AnimationComplete", s)));
  return Promise.all(h);
}
function MN(i, s, l = {}) {
  i.notify("AnimationStart", s);
  let r;
  if (Array.isArray(s)) {
    const c = s.map((m) => Bc(i, m, l));
    r = Promise.all(c);
  } else if (typeof s == "string")
    r = Bc(i, s, l);
  else {
    const c = typeof s == "function" ? Ei(i, s, l.custom) : s;
    r = Promise.all(ib(i, c, l));
  }
  return r.then(() => {
    i.notify("AnimationComplete", s);
  });
}
const PN = {
  test: (i) => i === "auto",
  parse: (i) => i
}, ab = (i) => (s) => s.test(i), sb = [va, ae, en, Nn, sy, ay, PN], Ih = (i) => sb.find(ab(i));
function zN(i) {
  return typeof i == "number" ? i === 0 : i !== null ? i === "none" || i === "0" || gg(i) : !0;
}
const RN = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function _N(i) {
  const [s, l] = i.slice(0, -1).split("(");
  if (s === "drop-shadow")
    return i;
  const [r] = l.match(tf) || [];
  if (!r)
    return i;
  const c = l.replace(r, "");
  let m = RN.has(s) ? 1 : 0;
  return r !== l && (m *= 100), s + "(" + m + c + ")";
}
const ON = /\b([a-z-]*)\(.*?\)/gu, Ac = {
  ...Qt,
  getAnimatableNone: (i) => {
    const s = i.match(ON);
    return s ? s.map(_N).join(" ") : i;
  }
}, jc = {
  ...Qt,
  getAnimatableNone: (i) => {
    const s = Qt.parse(i);
    return Qt.createTransformer(i)(s.map((r) => typeof r == "number" ? 0 : typeof r == "object" ? { ...r, alpha: 1 } : r));
  }
}, e0 = {
  ...va,
  transform: Math.round
}, UN = {
  rotate: Nn,
  /**
   * Internal channel for `transition.path` orientToPath. Composed onto
   * `rotate` at the transform-build sites so the user's `rotate` is
   * never read or overwritten. Not part of `transformPropOrder`.
   */
  pathRotation: Nn,
  rotateX: Nn,
  rotateY: Nn,
  rotateZ: Nn,
  scale: Wo,
  scaleX: Wo,
  scaleY: Wo,
  scaleZ: Wo,
  skew: Nn,
  skewX: Nn,
  skewY: Nn,
  distance: ae,
  translateX: ae,
  translateY: ae,
  translateZ: ae,
  x: ae,
  y: ae,
  z: ae,
  perspective: ae,
  transformPerspective: ae,
  opacity: Ds,
  originX: Lh,
  originY: Lh,
  originZ: ae
}, hl = {
  // Border props
  borderWidth: ae,
  borderTopWidth: ae,
  borderRightWidth: ae,
  borderBottomWidth: ae,
  borderLeftWidth: ae,
  borderRadius: ae,
  borderTopLeftRadius: ae,
  borderTopRightRadius: ae,
  borderBottomRightRadius: ae,
  borderBottomLeftRadius: ae,
  // Positioning props
  width: ae,
  maxWidth: ae,
  height: ae,
  maxHeight: ae,
  top: ae,
  right: ae,
  bottom: ae,
  left: ae,
  inset: ae,
  insetBlock: ae,
  insetBlockStart: ae,
  insetBlockEnd: ae,
  insetInline: ae,
  insetInlineStart: ae,
  insetInlineEnd: ae,
  // Spacing props
  padding: ae,
  paddingTop: ae,
  paddingRight: ae,
  paddingBottom: ae,
  paddingLeft: ae,
  paddingBlock: ae,
  paddingBlockStart: ae,
  paddingBlockEnd: ae,
  paddingInline: ae,
  paddingInlineStart: ae,
  paddingInlineEnd: ae,
  margin: ae,
  marginTop: ae,
  marginRight: ae,
  marginBottom: ae,
  marginLeft: ae,
  marginBlock: ae,
  marginBlockStart: ae,
  marginBlockEnd: ae,
  marginInline: ae,
  marginInlineStart: ae,
  marginInlineEnd: ae,
  // Typography
  fontSize: ae,
  // Misc
  backgroundPositionX: ae,
  backgroundPositionY: ae,
  ...UN,
  zIndex: e0,
  // SVG
  fillOpacity: Ds,
  strokeOpacity: Ds,
  numOctaves: e0
}, LN = {
  ...hl,
  // Color props
  color: Ze,
  backgroundColor: Ze,
  outlineColor: Ze,
  fill: Ze,
  stroke: Ze,
  // Border props
  borderColor: Ze,
  borderTopColor: Ze,
  borderRightColor: Ze,
  borderBottomColor: Ze,
  borderLeftColor: Ze,
  filter: Ac,
  WebkitFilter: Ac,
  mask: jc,
  WebkitMask: jc
}, ob = (i) => LN[i], HN = /* @__PURE__ */ new Set([Ac, jc]);
function lb(i, s) {
  let l = ob(i);
  return HN.has(l) || (l = Qt), l.getAnimatableNone ? l.getAnimatableNone(s) : void 0;
}
const qN = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function GN(i, s, l) {
  let r = 0, c;
  for (; r < i.length && !c; ) {
    const m = i[r];
    typeof m == "string" && !qN.has(m) && ga(m).values.length && (c = i[r]), r++;
  }
  if (c && l)
    for (const m of s)
      i[m] = lb(l, c);
}
class YN extends lf {
  constructor(s, l, r, c, m) {
    super(s, l, r, c, m, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: s, element: l, name: r } = this;
    if (!l || !l.current)
      return;
    super.readKeyframes();
    for (let x = 0; x < s.length; x++) {
      let y = s[x];
      if (typeof y == "string" && (y = y.trim(), ef(y))) {
        const N = Ig(y, l.current);
        N !== void 0 && (s[x] = N), x === s.length - 1 && (this.finalKeyframe = y);
      }
    }
    if (this.resolveNoneKeyframes(), !eb.has(r) || s.length !== 2)
      return;
    const [c, m] = s, f = Ih(c), h = Ih(m), v = Uh(c), g = Uh(m);
    if (v !== g && Zn[r]) {
      this.needsMeasurement = !0;
      return;
    }
    if (f !== h)
      if (Kh(f) && Kh(h))
        for (let x = 0; x < s.length; x++) {
          const y = s[x];
          typeof y == "string" && (s[x] = parseFloat(y));
        }
      else Zn[r] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: s, name: l } = this, r = [];
    for (let c = 0; c < s.length; c++)
      (s[c] === null || zN(s[c])) && r.push(c);
    r.length && GN(s, r, l);
  }
  measureInitialState() {
    const { element: s, unresolvedKeyframes: l, name: r } = this;
    if (!s || !s.current)
      return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = Zn[r](s.measureViewportBox(), window.getComputedStyle(s.current)), l[0] = this.measuredOrigin;
    const c = l[l.length - 1];
    c !== void 0 && s.getValue(r, c).jump(c, !1);
  }
  measureEndState() {
    var h;
    const { element: s, name: l, unresolvedKeyframes: r } = this;
    if (!s || !s.current)
      return;
    const c = s.getValue(l);
    c && c.jump(this.measuredOrigin, !1);
    const m = r.length - 1, f = r[m];
    r[m] = Zn[l](s.measureViewportBox(), window.getComputedStyle(s.current)), f !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = f), (h = this.removedTransforms) != null && h.length && this.removedTransforms.forEach(([v, g]) => {
      s.getValue(v).set(g);
    }), this.resolveNoneKeyframes();
  }
}
function rb(i, s, l) {
  if (i == null)
    return [];
  if (i instanceof EventTarget)
    return [i];
  if (typeof i == "string") {
    let r = document;
    const c = (l == null ? void 0 : l[i]) ?? r.querySelectorAll(i);
    return c ? Array.from(c) : [];
  }
  return Array.from(i).filter((r) => r != null);
}
const Mc = (i, s) => s && typeof i == "number" ? s.transform(i) : i;
function il(i) {
  return hg(i) && "offsetHeight" in i && !("ownerSVGElement" in i);
}
const { schedule: df } = /* @__PURE__ */ kg(queueMicrotask, !1), Ft = {
  x: !1,
  y: !1
};
function ub() {
  return Ft.x || Ft.y;
}
function XN(i) {
  return i === "x" || i === "y" ? Ft[i] ? null : (Ft[i] = !0, () => {
    Ft[i] = !1;
  }) : Ft.x || Ft.y ? null : (Ft.x = Ft.y = !0, () => {
    Ft.x = Ft.y = !1;
  });
}
function cb(i, s) {
  const l = rb(i), r = new AbortController(), c = {
    passive: !0,
    ...s,
    signal: r.signal
  };
  return [l, c, () => r.abort()];
}
function FN(i) {
  return !(i.pointerType === "touch" || ub());
}
function QN(i, s, l = {}) {
  const [r, c, m] = cb(i, l);
  return r.forEach((f) => {
    let h = !1, v = !1, g;
    const x = () => {
      f.removeEventListener("pointerleave", T);
    }, y = (A) => {
      g && (g(A), g = void 0), x();
    }, N = (A) => {
      h = !1, window.removeEventListener("pointerup", N), window.removeEventListener("pointercancel", N), v && (v = !1, y(A));
    }, V = () => {
      h = !0, window.addEventListener("pointerup", N, c), window.addEventListener("pointercancel", N, c);
    }, T = (A) => {
      if (A.pointerType !== "touch") {
        if (h) {
          v = !0;
          return;
        }
        y(A);
      }
    }, z = (A) => {
      if (!FN(A))
        return;
      v = !1;
      const _ = s(f, A);
      typeof _ == "function" && (g = _, f.addEventListener("pointerleave", T, c));
    };
    f.addEventListener("pointerenter", z, c), f.addEventListener("pointerdown", V, c);
  }), m;
}
const fb = (i, s) => s ? i === s ? !0 : fb(i, s.parentElement) : !1, mf = (i) => i.pointerType === "mouse" ? typeof i.button != "number" || i.button <= 0 : i.isPrimary !== !1, KN = /* @__PURE__ */ new Set([
  "BUTTON",
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "A"
]);
function ZN(i) {
  return KN.has(i.tagName) || i.isContentEditable === !0;
}
const JN = /* @__PURE__ */ new Set(["INPUT", "SELECT", "TEXTAREA"]);
function $N(i) {
  return JN.has(i.tagName) || i.isContentEditable === !0;
}
const al = /* @__PURE__ */ new WeakSet();
function t0(i) {
  return (s) => {
    s.key === "Enter" && i(s);
  };
}
function ac(i, s) {
  i.dispatchEvent(new PointerEvent("pointer" + s, { isPrimary: !0, bubbles: !0 }));
}
const WN = (i, s) => {
  const l = i.currentTarget;
  if (!l)
    return;
  const r = t0(() => {
    if (al.has(l))
      return;
    ac(l, "down");
    const c = t0(() => {
      ac(l, "up");
    }), m = () => ac(l, "cancel");
    l.addEventListener("keyup", c, s), l.addEventListener("blur", m, s);
  });
  l.addEventListener("keydown", r, s), l.addEventListener("blur", () => l.removeEventListener("keydown", r), s);
};
function n0(i) {
  return mf(i) && !ub();
}
const i0 = /* @__PURE__ */ new WeakSet();
function IN(i, s, l = {}) {
  const [r, c, m] = cb(i, l), f = (h) => {
    const v = h.currentTarget;
    if (!n0(h) || i0.has(h))
      return;
    al.add(v), l.stopPropagation && i0.add(h);
    const g = s(v, h), x = (V, T) => {
      window.removeEventListener("pointerup", y), window.removeEventListener("pointercancel", N), al.has(v) && al.delete(v), n0(V) && typeof g == "function" && g(V, { success: T });
    }, y = (V) => {
      x(V, v === window || v === document || l.useGlobalTarget || fb(v, V.target));
    }, N = (V) => {
      x(V, !1);
    };
    window.addEventListener("pointerup", y, c), window.addEventListener("pointercancel", N, c);
  };
  return r.forEach((h) => {
    (l.useGlobalTarget ? window : h).addEventListener("pointerdown", f, c), il(h) && (h.addEventListener("focus", (g) => WN(g, c)), !ZN(h) && !h.hasAttribute("tabindex") && (h.tabIndex = 0));
  }), m;
}
function pf(i) {
  return hg(i) && "ownerSVGElement" in i;
}
const sl = /* @__PURE__ */ new WeakMap();
let Kn;
const db = (i, s, l) => (r, c) => c && c[0] ? c[0][i + "Size"] : pf(r) && "getBBox" in r ? r.getBBox()[s] : r[l], e2 = /* @__PURE__ */ db("inline", "width", "offsetWidth"), t2 = /* @__PURE__ */ db("block", "height", "offsetHeight");
function n2({ target: i, borderBoxSize: s }) {
  var l;
  (l = sl.get(i)) == null || l.forEach((r) => {
    r(i, {
      get width() {
        return e2(i, s);
      },
      get height() {
        return t2(i, s);
      }
    });
  });
}
function i2(i) {
  i.forEach(n2);
}
function a2() {
  typeof ResizeObserver > "u" || (Kn = new ResizeObserver(i2));
}
function s2(i, s) {
  Kn || a2();
  const l = rb(i);
  return l.forEach((r) => {
    let c = sl.get(r);
    c || (c = /* @__PURE__ */ new Set(), sl.set(r, c)), c.add(s), Kn == null || Kn.observe(r);
  }), () => {
    l.forEach((r) => {
      const c = sl.get(r);
      c == null || c.delete(s), c != null && c.size || Kn == null || Kn.unobserve(r);
    });
  };
}
const ol = /* @__PURE__ */ new Set();
let da;
function o2() {
  da = () => {
    const i = {
      get width() {
        return window.innerWidth;
      },
      get height() {
        return window.innerHeight;
      }
    };
    ol.forEach((s) => s(i));
  }, window.addEventListener("resize", da);
}
function l2(i) {
  return ol.add(i), da || o2(), () => {
    ol.delete(i), !ol.size && typeof da == "function" && (window.removeEventListener("resize", da), da = void 0);
  };
}
function a0(i, s) {
  return typeof i == "function" ? l2(i) : s2(i, s);
}
function r2(i) {
  return pf(i) && i.tagName === "svg";
}
const u2 = [...sb, Ze, Qt], c2 = (i) => u2.find(ab(i)), s0 = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), ma = () => ({
  x: s0(),
  y: s0()
}), o0 = () => ({ min: 0, max: 0 }), $e = () => ({
  x: o0(),
  y: o0()
}), f2 = /* @__PURE__ */ new WeakMap();
function El(i) {
  return i !== null && typeof i == "object" && typeof i.start == "function";
}
function Es(i) {
  return typeof i == "string" || Array.isArray(i);
}
const hf = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], gf = ["initial", ...hf];
function wl(i) {
  return El(i.animate) || gf.some((s) => Es(i[s]));
}
function mb(i) {
  return !!(wl(i) || i.variants);
}
function d2(i, s, l) {
  for (const r in s) {
    const c = s[r], m = l[r];
    if (ot(c))
      i.addValue(r, c);
    else if (ot(m))
      i.addValue(r, ba(c, { owner: i }));
    else if (m !== c)
      if (i.hasValue(r)) {
        const f = i.getValue(r);
        f.liveStyle === !0 ? f.jump(c) : f.hasAnimated || f.set(c);
      } else {
        const f = i.getStaticValue(r);
        i.addValue(r, ba(f !== void 0 ? f : c, { owner: i }));
      }
  }
  for (const r in l)
    s[r] === void 0 && i.removeValue(r);
  return s;
}
const Pc = { current: null }, pb = { current: !1 }, m2 = typeof window < "u";
function p2() {
  if (pb.current = !0, !!m2)
    if (window.matchMedia) {
      const i = window.matchMedia("(prefers-reduced-motion)"), s = () => Pc.current = i.matches;
      i.addEventListener("change", s), s();
    } else
      Pc.current = !1;
}
const l0 = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
let gl = {};
function hb(i) {
  gl = i;
}
function h2() {
  return gl;
}
class g2 {
  /**
   * This method takes React props and returns found MotionValues. For example, HTML
   * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
   *
   * This isn't an abstract method as it needs calling in the constructor, but it is
   * intended to be one.
   */
  scrapeMotionValuesFromProps(s, l, r) {
    return {};
  }
  constructor({ parent: s, props: l, presenceContext: r, reducedMotionConfig: c, skipAnimations: m, blockInitialAnimation: f, visualState: h }, v = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.shouldSkipAnimations = !1, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = lf, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.hasBeenMounted = !1, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const V = ct.now();
      this.renderScheduledAt < V && (this.renderScheduledAt = V, Pe.render(this.render, !1, !0));
    };
    const { latestValues: g, renderState: x } = h;
    this.latestValues = g, this.baseTarget = { ...g }, this.initialValues = l.initial ? { ...g } : {}, this.renderState = x, this.parent = s, this.props = l, this.presenceContext = r, this.depth = s ? s.depth + 1 : 0, this.reducedMotionConfig = c, this.skipAnimationsConfig = m, this.options = v, this.blockInitialAnimation = !!f, this.isControllingVariants = wl(l), this.isVariantNode = mb(l), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(s && s.current);
    const { willChange: y, ...N } = this.scrapeMotionValuesFromProps(l, {}, this);
    for (const V in N) {
      const T = N[V];
      g[V] !== void 0 && ot(T) && T.set(g[V]);
    }
  }
  mount(s) {
    var l, r;
    if (this.hasBeenMounted)
      for (const c in this.initialValues)
        (l = this.values.get(c)) == null || l.jump(this.initialValues[c]), this.latestValues[c] = this.initialValues[c];
    this.current = s, f2.set(s, this), this.projection && !this.projection.instance && this.projection.mount(s), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((c, m) => this.bindToMotionValue(m, c)), this.reducedMotionConfig === "never" ? this.shouldReduceMotion = !1 : this.reducedMotionConfig === "always" ? this.shouldReduceMotion = !0 : (pb.current || p2(), this.shouldReduceMotion = Pc.current), this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1, (r = this.parent) == null || r.addChild(this), this.update(this.props, this.presenceContext), this.hasBeenMounted = !0;
  }
  unmount() {
    var s;
    this.projection && this.projection.unmount(), Wn(this.notifyUpdate), Wn(this.render), this.valueSubscriptions.forEach((l) => l()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), (s = this.parent) == null || s.removeChild(this);
    for (const l in this.events)
      this.events[l].clear();
    for (const l in this.features) {
      const r = this.features[l];
      r && (r.unmount(), r.isMounted = !1);
    }
    this.current = null;
  }
  addChild(s) {
    this.children.add(s), this.enteringChildren ?? (this.enteringChildren = /* @__PURE__ */ new Set()), this.enteringChildren.add(s);
  }
  removeChild(s) {
    this.children.delete(s), this.enteringChildren && this.enteringChildren.delete(s);
  }
  bindToMotionValue(s, l) {
    if (this.valueSubscriptions.has(s) && this.valueSubscriptions.get(s)(), l.accelerate && Jg.has(s) && this.current instanceof HTMLElement) {
      const { factory: f, keyframes: h, times: v, ease: g, duration: x } = l.accelerate, y = new Kg({
        element: this.current,
        name: s,
        keyframes: h,
        times: v,
        ease: g,
        duration: /* @__PURE__ */ xt(x)
      }), N = f(y);
      this.valueSubscriptions.set(s, () => {
        N(), y.cancel();
      });
      return;
    }
    const r = ya.has(s);
    r && this.onBindTransform && this.onBindTransform();
    const c = l.on("change", (f) => {
      this.latestValues[s] = f, this.props.onUpdate && Pe.preRender(this.notifyUpdate), r && this.projection && (this.projection.isTransformDirty = !0), this.scheduleRender();
    });
    let m;
    typeof window < "u" && window.MotionCheckAppearSync && (m = window.MotionCheckAppearSync(this, s, l)), this.valueSubscriptions.set(s, () => {
      c(), m && m();
    });
  }
  sortNodePosition(s) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== s.type ? 0 : this.sortInstanceNodePosition(this.current, s.current);
  }
  updateFeatures() {
    let s = "animation";
    for (s in gl) {
      const l = gl[s];
      if (!l)
        continue;
      const { isEnabled: r, Feature: c } = l;
      if (!this.features[s] && c && r(this.props) && (this.features[s] = new c(this)), this.features[s]) {
        const m = this.features[s];
        m.isMounted ? m.update() : (m.mount(), m.isMounted = !0);
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  /**
   * Measure the current viewport box with or without transforms.
   * Only measures axis-aligned boxes, rotate and skew must be manually
   * removed with a re-render to work.
   */
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : $e();
  }
  getStaticValue(s) {
    return this.latestValues[s];
  }
  setStaticValue(s, l) {
    this.latestValues[s] = l;
  }
  /**
   * Update the provided props. Ensure any newly-added motion values are
   * added to our map, old ones removed, and listeners updated.
   */
  update(s, l) {
    (s.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = s, this.prevPresenceContext = this.presenceContext, this.presenceContext = l;
    for (let r = 0; r < l0.length; r++) {
      const c = l0[r];
      this.propEventSubscriptions[c] && (this.propEventSubscriptions[c](), delete this.propEventSubscriptions[c]);
      const m = "on" + c, f = s[m];
      f && (this.propEventSubscriptions[c] = this.on(c, f));
    }
    this.prevMotionValues = d2(this, this.scrapeMotionValuesFromProps(s, this.prevProps || {}, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  /**
   * Returns the variant definition with a given name.
   */
  getVariant(s) {
    return this.props.variants ? this.props.variants[s] : void 0;
  }
  /**
   * Returns the defined default transition on this component.
   */
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
  }
  /**
   * Add a child visual element to our set of children.
   */
  addVariantChild(s) {
    const l = this.getClosestVariantNode();
    if (l)
      return l.variantChildren && l.variantChildren.add(s), () => l.variantChildren.delete(s);
  }
  /**
   * Add a motion value and bind it to this visual element.
   */
  addValue(s, l) {
    const r = this.values.get(s);
    l !== r && (r && this.removeValue(s), this.bindToMotionValue(s, l), this.values.set(s, l), this.latestValues[s] = l.get());
  }
  /**
   * Remove a motion value and unbind any active subscriptions.
   */
  removeValue(s) {
    this.values.delete(s);
    const l = this.valueSubscriptions.get(s);
    l && (l(), this.valueSubscriptions.delete(s)), delete this.latestValues[s], this.removeValueFromRenderState(s, this.renderState);
  }
  /**
   * Check whether we have a motion value for this key
   */
  hasValue(s) {
    return this.values.has(s);
  }
  getValue(s, l) {
    if (this.props.values && this.props.values[s])
      return this.props.values[s];
    let r = this.values.get(s);
    return r === void 0 && l !== void 0 && (r = ba(l === null ? void 0 : l, { owner: this }), this.addValue(s, r)), r;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(s, l) {
    let r = this.latestValues[s] !== void 0 || !this.current ? this.latestValues[s] : this.getBaseTargetFromProps(this.props, s) ?? this.readValueFromInstance(this.current, s, this.options);
    return r != null && (typeof r == "string" && (pg(r) || gg(r)) ? r = parseFloat(r) : !c2(r) && Qt.test(l) && (r = lb(s, l)), this.setBaseTarget(s, ot(r) ? r.get() : r)), ot(r) ? r.get() : r;
  }
  /**
   * Set the base target to later animate back to. This is currently
   * only hydrated on creation and when we first read a value.
   */
  setBaseTarget(s, l) {
    this.baseTarget[s] = l;
  }
  /**
   * Find the base target for a value thats been removed from all animation
   * props.
   */
  getBaseTarget(s) {
    var m;
    const { initial: l } = this.props;
    let r;
    if (typeof l == "string" || typeof l == "object") {
      const f = cf(this.props, l, (m = this.presenceContext) == null ? void 0 : m.custom);
      f && (r = f[s]);
    }
    if (l && r !== void 0)
      return r;
    const c = this.getBaseTargetFromProps(this.props, s);
    return c !== void 0 && !ot(c) ? c : this.initialValues[s] !== void 0 && r === void 0 ? void 0 : this.baseTarget[s];
  }
  on(s, l) {
    return this.events[s] || (this.events[s] = new $c()), this.events[s].add(l);
  }
  notify(s, ...l) {
    this.events[s] && this.events[s].notify(...l);
  }
  scheduleRenderMicrotask() {
    df.render(this.render);
  }
}
class gb extends g2 {
  constructor() {
    super(...arguments), this.KeyframeResolver = YN;
  }
  sortInstanceNodePosition(s, l) {
    return s.compareDocumentPosition(l) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(s, l) {
    const r = s.style;
    return r ? r[l] : void 0;
  }
  removeValueFromRenderState(s, { vars: l, style: r }) {
    delete l[s], delete r[s];
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: s } = this.props;
    ot(s) && (this.childSubscription = s.on("change", (l) => {
      this.current && (this.current.textContent = `${l}`);
    }));
  }
}
class In {
  constructor(s) {
    this.isMounted = !1, this.node = s;
  }
  update() {
  }
}
function bb({ top: i, left: s, right: l, bottom: r }) {
  return {
    x: { min: s, max: l },
    y: { min: i, max: r }
  };
}
function b2({ x: i, y: s }) {
  return { top: s.min, right: i.max, bottom: s.max, left: i.min };
}
function v2(i, s) {
  if (!s)
    return i;
  const l = s({ x: i.left, y: i.top }), r = s({ x: i.right, y: i.bottom });
  return {
    top: l.y,
    left: l.x,
    bottom: r.y,
    right: r.x
  };
}
function sc(i) {
  return i === void 0 || i === 1;
}
function zc({ scale: i, scaleX: s, scaleY: l }) {
  return !sc(i) || !sc(s) || !sc(l);
}
function yi(i) {
  return zc(i) || vb(i) || i.z || i.rotate || i.rotateX || i.rotateY || i.skewX || i.skewY;
}
function vb(i) {
  return r0(i.x) || r0(i.y);
}
function r0(i) {
  return i && i !== "0%";
}
function bl(i, s, l) {
  const r = i - l, c = s * r;
  return l + c;
}
function u0(i, s, l, r, c) {
  return c !== void 0 && (i = bl(i, c, r)), bl(i, l, r) + s;
}
function Rc(i, s = 0, l = 1, r, c) {
  i.min = u0(i.min, s, l, r, c), i.max = u0(i.max, s, l, r, c);
}
function xb(i, { x: s, y: l }) {
  Rc(i.x, s.translate, s.scale, s.originPoint), Rc(i.y, l.translate, l.scale, l.originPoint);
}
const c0 = 0.999999999999, f0 = 1.0000000000001;
function x2(i, s, l, r = !1) {
  var h;
  const c = l.length;
  if (!c)
    return;
  s.x = s.y = 1;
  let m, f;
  for (let v = 0; v < c; v++) {
    m = l[v], f = m.projectionDelta;
    const { visualElement: g } = m.options;
    g && g.props.style && g.props.style.display === "contents" || (r && m.options.layoutScroll && m.scroll && m !== m.root && (It(i.x, -m.scroll.offset.x), It(i.y, -m.scroll.offset.y)), f && (s.x *= f.x.scale, s.y *= f.y.scale, xb(i, f)), r && yi(m.latestValues) && ll(i, m.latestValues, (h = m.layout) == null ? void 0 : h.layoutBox));
  }
  s.x < f0 && s.x > c0 && (s.x = 1), s.y < f0 && s.y > c0 && (s.y = 1);
}
function It(i, s) {
  i.min += s, i.max += s;
}
function d0(i, s, l, r, c = 0.5) {
  const m = Me(i.min, i.max, c);
  Rc(i, s, l, m, r);
}
function m0(i, s) {
  return typeof i == "string" ? parseFloat(i) / 100 * (s.max - s.min) : i;
}
function ll(i, s, l) {
  const r = l ?? i;
  d0(i.x, m0(s.x, r.x), s.scaleX, s.scale, s.originX), d0(i.y, m0(s.y, r.y), s.scaleY, s.scale, s.originY);
}
function yb(i, s) {
  return bb(v2(i.getBoundingClientRect(), s));
}
function y2(i, s, l) {
  const r = yb(i, l), { scroll: c } = s;
  return c && (It(r.x, c.offset.x), It(r.y, c.offset.y)), r;
}
const N2 = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, S2 = xa.length;
function D2(i, s, l) {
  let r = "", c = !0;
  for (let f = 0; f < S2; f++) {
    const h = xa[f], v = i[h];
    if (v === void 0)
      continue;
    let g = !0;
    if (typeof v == "number")
      g = v === (h.startsWith("scale") ? 1 : 0);
    else {
      const x = parseFloat(v);
      g = h.startsWith("scale") ? x === 1 : x === 0;
    }
    if (!g || l) {
      const x = Mc(v, hl[h]);
      if (!g) {
        c = !1;
        const y = N2[h] || h;
        r += `${y}(${x}) `;
      }
      l && (s[h] = x);
    }
  }
  const m = i.pathRotation;
  return m && (c = !1, r += `rotate(${Mc(m, hl.pathRotation)}) `), r = r.trim(), l ? r = l(s, c ? "" : r) : c && (r = "none"), r;
}
function bf(i, s, l) {
  const { style: r, vars: c, transformOrigin: m } = i;
  let f = !1, h = !1;
  for (const v in s) {
    const g = s[v];
    if (ya.has(v)) {
      f = !0;
      continue;
    } else if (Ag(v)) {
      c[v] = g;
      continue;
    } else {
      const x = Mc(g, hl[v]);
      v.startsWith("origin") ? (h = !0, m[v] = x) : r[v] = x;
    }
  }
  if (s.transform || (f || l ? r.transform = D2(s, i.transform, l) : r.transform && (r.transform = "none")), h) {
    const { originX: v = "50%", originY: g = "50%", originZ: x = 0 } = m;
    r.transformOrigin = `${v} ${g} ${x}`;
  }
}
function Nb(i, { style: s, vars: l }, r, c) {
  const m = i.style;
  let f;
  for (f in s)
    m[f] = s[f];
  c == null || c.applyProjectionStyles(m, r);
  for (f in l)
    m.setProperty(f, l[f]);
}
function p0(i, s) {
  return s.max === s.min ? 0 : i / (s.max - s.min) * 100;
}
const gs = {
  correct: (i, s) => {
    if (!s.target)
      return i;
    if (typeof i == "string")
      if (ae.test(i))
        i = parseFloat(i);
      else
        return i;
    const l = p0(i, s.target.x), r = p0(i, s.target.y);
    return `${l}% ${r}%`;
  }
}, E2 = {
  correct: (i, { treeScale: s, projectionDelta: l }) => {
    const r = i, c = Qt.parse(i);
    if (c.length > 5)
      return r;
    const m = Qt.createTransformer(i), f = typeof c[0] != "number" ? 1 : 0, h = l.x.scale * s.x, v = l.y.scale * s.y;
    c[0 + f] /= h, c[1 + f] /= v;
    const g = Me(h, v, 0.5);
    return typeof c[2 + f] == "number" && (c[2 + f] /= g), typeof c[3 + f] == "number" && (c[3 + f] /= g), m(c);
  }
}, _c = {
  borderRadius: {
    ...gs,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: gs,
  borderTopRightRadius: gs,
  borderBottomLeftRadius: gs,
  borderBottomRightRadius: gs,
  boxShadow: E2
};
function Sb(i, { layout: s, layoutId: l }) {
  return ya.has(i) || i.startsWith("origin") || (s || l !== void 0) && (!!_c[i] || i === "opacity");
}
function vf(i, s, l) {
  var f;
  const r = i.style, c = s == null ? void 0 : s.style, m = {};
  if (!r)
    return m;
  for (const h in r)
    (ot(r[h]) || c && ot(c[h]) || Sb(h, i) || ((f = l == null ? void 0 : l.getValue(h)) == null ? void 0 : f.liveStyle) !== void 0) && (m[h] = r[h]);
  return m;
}
function w2(i) {
  return window.getComputedStyle(i);
}
class V2 extends gb {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = Nb;
  }
  readValueFromInstance(s, l) {
    var r;
    if (ya.has(l))
      return (r = this.projection) != null && r.isProjecting ? Sc(l) : Xy(s, l);
    {
      const c = w2(s), m = (Ag(l) ? c.getPropertyValue(l) : c[l]) || 0;
      return typeof m == "string" ? m.trim() : m;
    }
  }
  measureInstanceViewportBox(s, { transformPagePoint: l }) {
    return yb(s, l);
  }
  build(s, l, r) {
    bf(s, l, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(s, l, r) {
    return vf(s, l, r);
  }
}
const T2 = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, C2 = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function k2(i, s, l = 1, r = 0, c = !0) {
  i.pathLength = 1;
  const m = c ? T2 : C2;
  i[m.offset] = `${-r}`, i[m.array] = `${s} ${l}`;
}
const B2 = [
  "offsetDistance",
  "offsetPath",
  "offsetRotate",
  "offsetAnchor"
];
function Db(i, {
  attrX: s,
  attrY: l,
  attrScale: r,
  pathLength: c,
  pathSpacing: m = 1,
  pathOffset: f = 0,
  // This is object creation, which we try to avoid per-frame.
  ...h
}, v, g, x) {
  if (bf(i, h, g), v) {
    i.style.viewBox && (i.attrs.viewBox = i.style.viewBox);
    return;
  }
  i.attrs = i.style, i.style = {};
  const { attrs: y, style: N } = i;
  y.transform && (N.transform = y.transform, delete y.transform), (N.transform || y.transformOrigin) && (N.transformOrigin = y.transformOrigin ?? "50% 50%", delete y.transformOrigin), N.transform && (N.transformBox = (x == null ? void 0 : x.transformBox) ?? "fill-box", delete y.transformBox);
  for (const V of B2)
    y[V] !== void 0 && (N[V] = y[V], delete y[V]);
  s !== void 0 && (y.x = s), l !== void 0 && (y.y = l), r !== void 0 && (y.scale = r), c !== void 0 && k2(y, c, m, f, !1);
}
const Eb = /* @__PURE__ */ new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust"
]), wb = (i) => typeof i == "string" && i.toLowerCase() === "svg";
function A2(i, s, l, r) {
  Nb(i, s, void 0, r);
  for (const c in s.attrs)
    i.setAttribute(Eb.has(c) ? c : ff(c), s.attrs[c]);
}
function Vb(i, s, l) {
  const r = vf(i, s, l);
  for (const c in i)
    if (ot(i[c]) || ot(s[c])) {
      const m = xa.indexOf(c) !== -1 ? "attr" + c.charAt(0).toUpperCase() + c.substring(1) : c;
      r[m] = i[c];
    }
  return r;
}
class j2 extends gb {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = $e;
  }
  getBaseTargetFromProps(s, l) {
    return s[l];
  }
  readValueFromInstance(s, l) {
    if (ya.has(l)) {
      const r = ob(l);
      return r && r.default || 0;
    }
    return l = Eb.has(l) ? l : ff(l), s.getAttribute(l);
  }
  scrapeMotionValuesFromProps(s, l, r) {
    return Vb(s, l, r);
  }
  build(s, l, r) {
    Db(s, l, this.isSVGTag, r.transformTemplate, r.style);
  }
  renderInstance(s, l, r, c) {
    A2(s, l, r, c);
  }
  mount(s) {
    this.isSVGTag = wb(s.tagName), super.mount(s);
  }
}
const M2 = gf.length;
function Tb(i) {
  if (!i)
    return;
  if (!i.isControllingVariants) {
    const l = i.parent ? Tb(i.parent) || {} : {};
    return i.props.initial !== void 0 && (l.initial = i.props.initial), l;
  }
  const s = {};
  for (let l = 0; l < M2; l++) {
    const r = gf[l], c = i.props[r];
    (Es(c) || c === !1) && (s[r] = c);
  }
  return s;
}
function Cb(i, s) {
  if (!Array.isArray(s))
    return !1;
  const l = s.length;
  if (l !== i.length)
    return !1;
  for (let r = 0; r < l; r++)
    if (s[r] !== i[r])
      return !1;
  return !0;
}
const P2 = [...hf].reverse(), z2 = hf.length;
function R2(i) {
  return (s) => Promise.all(s.map(({ animation: l, options: r }) => MN(i, l, r)));
}
function _2(i) {
  let s = R2(i), l = h0(), r = !0, c = !1;
  const m = (g) => (x, y) => {
    var V;
    const N = Ei(i, y, g === "exit" ? (V = i.presenceContext) == null ? void 0 : V.custom : void 0);
    if (N) {
      const { transition: T, transitionEnd: z, ...A } = N;
      x = { ...x, ...A, ...z };
    }
    return x;
  };
  function f(g) {
    s = g(i);
  }
  function h(g) {
    const { props: x } = i, y = Tb(i.parent) || {}, N = [], V = /* @__PURE__ */ new Set();
    let T = {}, z = 1 / 0;
    for (let _ = 0; _ < z2; _++) {
      const G = P2[_], L = l[G], H = x[G] !== void 0 ? x[G] : y[G], X = Es(H), ee = G === g ? L.isActive : null;
      ee === !1 && (z = _);
      let F = H === y[G] && H !== x[G] && X;
      if (F && (r || c) && i.manuallyAnimateOnMount && (F = !1), L.protectedKeys = { ...T }, // If it isn't active and hasn't *just* been set as inactive
      !L.isActive && ee === null || // If we didn't and don't have any defined prop for this animation type
      !H && !L.prevProp || // Or if the prop doesn't define an animation
      El(H) || typeof H == "boolean")
        continue;
      if (G === "exit" && L.isActive && ee !== !0) {
        L.prevResolvedValues && (T = {
          ...T,
          ...L.prevResolvedValues
        });
        continue;
      }
      const Y = O2(L.prevProp, H);
      let J = Y || // If we're making this variant active, we want to always make it active
      G === g && L.isActive && !F && X || // If we removed a higher-priority variant (i is in reverse order)
      _ > z && X, te = !1;
      const K = Array.isArray(H) ? H : [H];
      let I = K.reduce(m(G), {});
      ee === !1 && (I = {});
      const { prevResolvedValues: Se = {} } = L, de = {
        ...Se,
        ...I
      }, me = (Q) => {
        J = !0, V.has(Q) && (te = !0, V.delete(Q)), L.needsAnimating[Q] = !0;
        const ne = i.getValue(Q);
        ne && (ne.liveStyle = !1);
      };
      for (const Q in de) {
        const ne = I[Q], oe = Se[Q];
        if (T.hasOwnProperty(Q))
          continue;
        let D = !1;
        Cc(ne) && Cc(oe) ? D = !Cb(ne, oe) || Y : D = ne !== oe, D ? ne != null ? me(Q) : V.add(Q) : ne !== void 0 && V.has(Q) ? me(Q) : L.protectedKeys[Q] = !0;
      }
      L.prevProp = H, L.prevResolvedValues = I, L.isActive && (T = { ...T, ...I }), (r || c) && i.blockInitialAnimation && (J = !1);
      const j = F && Y;
      J && (!j || te) && N.push(...K.map((Q) => {
        const ne = { type: G };
        if (typeof Q == "string" && (r || c) && !j && i.manuallyAnimateOnMount && i.parent) {
          const { parent: oe } = i, D = Ei(oe, Q);
          if (oe.enteringChildren && D) {
            const { delayChildren: R } = D.transition || {};
            ne.delay = $g(oe.enteringChildren, i, R);
          }
        }
        return {
          animation: Q,
          options: ne
        };
      }));
    }
    if (V.size) {
      const _ = {};
      if (typeof x.initial != "boolean") {
        const G = Ei(i, Array.isArray(x.initial) ? x.initial[0] : x.initial);
        G && G.transition && (_.transition = G.transition);
      }
      V.forEach((G) => {
        const L = i.getBaseTarget(G), H = i.getValue(G);
        H && (H.liveStyle = !0), _[G] = L ?? null;
      }), N.push({ animation: _ });
    }
    let A = !!N.length;
    return r && (x.initial === !1 || x.initial === x.animate) && !i.manuallyAnimateOnMount && (A = !1), r = !1, c = !1, A ? s(N) : Promise.resolve();
  }
  function v(g, x) {
    var N;
    if (l[g].isActive === x)
      return Promise.resolve();
    (N = i.variantChildren) == null || N.forEach((V) => {
      var T;
      return (T = V.animationState) == null ? void 0 : T.setActive(g, x);
    }), l[g].isActive = x;
    const y = h(g);
    for (const V in l)
      l[V].protectedKeys = {};
    return y;
  }
  return {
    animateChanges: h,
    setActive: v,
    setAnimateFunction: f,
    getState: () => l,
    reset: () => {
      l = h0(), c = !0;
    }
  };
}
function O2(i, s) {
  return typeof s == "string" ? s !== i : Array.isArray(s) ? !Cb(s, i) : !1;
}
function xi(i = !1) {
  return {
    isActive: i,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function h0() {
  return {
    animate: xi(!0),
    whileInView: xi(),
    whileHover: xi(),
    whileTap: xi(),
    whileDrag: xi(),
    whileFocus: xi(),
    exit: xi()
  };
}
function Oc(i, s) {
  i.min = s.min, i.max = s.max;
}
function Xt(i, s) {
  Oc(i.x, s.x), Oc(i.y, s.y);
}
function g0(i, s) {
  i.translate = s.translate, i.scale = s.scale, i.originPoint = s.originPoint, i.origin = s.origin;
}
const kb = 1e-4, U2 = 1 - kb, L2 = 1 + kb, Bb = 0.01, H2 = 0 - Bb, q2 = 0 + Bb;
function ft(i) {
  return i.max - i.min;
}
function G2(i, s, l) {
  return Math.abs(i - s) <= l;
}
function b0(i, s, l, r = 0.5) {
  i.origin = r, i.originPoint = Me(s.min, s.max, i.origin), i.scale = ft(l) / ft(s), i.translate = Me(l.min, l.max, i.origin) - i.originPoint, (i.scale >= U2 && i.scale <= L2 || isNaN(i.scale)) && (i.scale = 1), (i.translate >= H2 && i.translate <= q2 || isNaN(i.translate)) && (i.translate = 0);
}
function ys(i, s, l, r) {
  b0(i.x, s.x, l.x, r ? r.originX : void 0), b0(i.y, s.y, l.y, r ? r.originY : void 0);
}
function v0(i, s, l, r = 0) {
  const c = r ? Me(l.min, l.max, r) : l.min;
  i.min = c + s.min, i.max = i.min + ft(s);
}
function Y2(i, s, l, r) {
  v0(i.x, s.x, l.x, r == null ? void 0 : r.x), v0(i.y, s.y, l.y, r == null ? void 0 : r.y);
}
function x0(i, s, l, r = 0) {
  const c = r ? Me(l.min, l.max, r) : l.min;
  i.min = s.min - c, i.max = i.min + ft(s);
}
function vl(i, s, l, r) {
  x0(i.x, s.x, l.x, r == null ? void 0 : r.x), x0(i.y, s.y, l.y, r == null ? void 0 : r.y);
}
function y0(i, s, l, r, c) {
  return i -= s, i = bl(i, 1 / l, r), c !== void 0 && (i = bl(i, 1 / c, r)), i;
}
function X2(i, s = 0, l = 1, r = 0.5, c, m = i, f = i) {
  if (en.test(s) && (s = parseFloat(s), s = Me(f.min, f.max, s / 100) - f.min), typeof s != "number")
    return;
  let h = Me(m.min, m.max, r);
  i === m && (h -= s), i.min = y0(i.min, s, l, h, c), i.max = y0(i.max, s, l, h, c);
}
function N0(i, s, [l, r, c], m, f) {
  X2(i, s[l], s[r], s[c], s.scale, m, f);
}
const F2 = ["x", "scaleX", "originX"], Q2 = ["y", "scaleY", "originY"];
function S0(i, s, l, r) {
  N0(i.x, s, F2, l ? l.x : void 0, r ? r.x : void 0), N0(i.y, s, Q2, l ? l.y : void 0, r ? r.y : void 0);
}
function D0(i) {
  return i.translate === 0 && i.scale === 1;
}
function Ab(i) {
  return D0(i.x) && D0(i.y);
}
function E0(i, s) {
  return i.min === s.min && i.max === s.max;
}
function K2(i, s) {
  return E0(i.x, s.x) && E0(i.y, s.y);
}
function w0(i, s) {
  return Math.round(i.min) === Math.round(s.min) && Math.round(i.max) === Math.round(s.max);
}
function jb(i, s) {
  return w0(i.x, s.x) && w0(i.y, s.y);
}
function V0(i) {
  return ft(i.x) / ft(i.y);
}
function T0(i, s) {
  return i.translate === s.translate && i.scale === s.scale && i.originPoint === s.originPoint;
}
function Wt(i) {
  return [i("x"), i("y")];
}
function Z2(i, s, l) {
  let r = "";
  const c = i.x.translate / s.x, m = i.y.translate / s.y, f = (l == null ? void 0 : l.z) || 0;
  if ((c || m || f) && (r = `translate3d(${c}px, ${m}px, ${f}px) `), (s.x !== 1 || s.y !== 1) && (r += `scale(${1 / s.x}, ${1 / s.y}) `), l) {
    const { transformPerspective: g, rotate: x, pathRotation: y, rotateX: N, rotateY: V, skewX: T, skewY: z } = l;
    g && (r = `perspective(${g}px) ${r}`), x && (r += `rotate(${x}deg) `), y && (r += `rotate(${y}deg) `), N && (r += `rotateX(${N}deg) `), V && (r += `rotateY(${V}deg) `), T && (r += `skewX(${T}deg) `), z && (r += `skewY(${z}deg) `);
  }
  const h = i.x.scale * s.x, v = i.y.scale * s.y;
  return (h !== 1 || v !== 1) && (r += `scale(${h}, ${v})`), r || "none";
}
const Mb = [
  "borderTopLeftRadius",
  "borderTopRightRadius",
  "borderBottomLeftRadius",
  "borderBottomRightRadius"
], J2 = Mb.length, C0 = (i) => typeof i == "string" ? parseFloat(i) : i, k0 = (i) => typeof i == "number" || ae.test(i);
function $2(i, s, l, r, c, m) {
  c ? (i.opacity = Me(0, l.opacity ?? 1, W2(r)), i.opacityExit = Me(s.opacity ?? 1, 0, I2(r))) : m && (i.opacity = Me(s.opacity ?? 1, l.opacity ?? 1, r));
  for (let f = 0; f < J2; f++) {
    const h = Mb[f];
    let v = B0(s, h), g = B0(l, h);
    if (v === void 0 && g === void 0)
      continue;
    v || (v = 0), g || (g = 0), v === 0 || g === 0 || k0(v) === k0(g) ? (i[h] = Math.max(Me(C0(v), C0(g), r), 0), (en.test(g) || en.test(v)) && (i[h] += "%")) : i[h] = g;
  }
  (s.rotate || l.rotate) && (i.rotate = Me(s.rotate || 0, l.rotate || 0, r));
}
function B0(i, s) {
  return i[s] !== void 0 ? i[s] : i.borderRadius;
}
const W2 = /* @__PURE__ */ Pb(0, 0.5, wg), I2 = /* @__PURE__ */ Pb(0.5, 0.95, Ht);
function Pb(i, s, l) {
  return (r) => r < i ? 0 : r > s ? 1 : l(/* @__PURE__ */ Ss(i, s, r));
}
function eS(i, s, l) {
  const r = ot(i) ? i : ba(i);
  return r.start(uf("", r, s, l)), r.animation;
}
function ws(i, s, l, r = { passive: !0 }) {
  return i.addEventListener(s, l, r), () => i.removeEventListener(s, l);
}
const tS = (i, s) => i.depth - s.depth;
class nS {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(s) {
    Jc(this.children, s), this.isDirty = !0;
  }
  remove(s) {
    cl(this.children, s), this.isDirty = !0;
  }
  forEach(s) {
    this.isDirty && this.children.sort(tS), this.isDirty = !1, this.children.forEach(s);
  }
}
function iS(i, s) {
  const l = ct.now(), r = ({ timestamp: c }) => {
    const m = c - l;
    m >= s && (Wn(r), i(m - s));
  };
  return Pe.setup(r, !0), () => Wn(r);
}
function rl(i) {
  return ot(i) ? i.get() : i;
}
class aS {
  constructor() {
    this.members = [];
  }
  add(s) {
    Jc(this.members, s);
    for (let l = this.members.length - 1; l >= 0; l--) {
      const r = this.members[l];
      if (r === s || r === this.lead || r === this.prevLead)
        continue;
      const c = r.instance;
      (!c || c.isConnected === !1) && !r.snapshot && (cl(this.members, r), r.unmount());
    }
    s.scheduleRender();
  }
  remove(s) {
    if (cl(this.members, s), s === this.prevLead && (this.prevLead = void 0), s === this.lead) {
      const l = this.members[this.members.length - 1];
      l && this.promote(l);
    }
  }
  relegate(s) {
    var l;
    for (let r = this.members.indexOf(s) - 1; r >= 0; r--) {
      const c = this.members[r];
      if (c.isPresent !== !1 && ((l = c.instance) == null ? void 0 : l.isConnected) !== !1)
        return this.promote(c), !0;
    }
    return !1;
  }
  promote(s, l) {
    var c;
    const r = this.lead;
    if (s !== r && (this.prevLead = r, this.lead = s, s.show(), r)) {
      r.updateSnapshot(), s.scheduleRender();
      const { layoutDependency: m } = r.options, { layoutDependency: f } = s.options;
      (m === void 0 || m !== f) && (s.resumeFrom = r, l && (r.preserveOpacity = !0), r.snapshot && (s.snapshot = r.snapshot, s.snapshot.latestValues = r.animationValues || r.latestValues), (c = s.root) != null && c.isUpdating && (s.isLayoutDirty = !0)), s.options.crossfade === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((s) => {
      var l, r, c, m, f;
      (r = (l = s.options).onExitComplete) == null || r.call(l), (f = (c = s.resumingFrom) == null ? void 0 : (m = c.options).onExitComplete) == null || f.call(m);
    });
  }
  scheduleRender() {
    this.members.forEach((s) => s.instance && s.scheduleRender(!1));
  }
  removeLeadSnapshot() {
    var s;
    (s = this.lead) != null && s.snapshot && (this.lead.snapshot = void 0);
  }
}
const ul = {
  /**
   * Global flag as to whether the tree has animated since the last time
   * we resized the window
   */
  hasAnimatedSinceResize: !0,
  /**
   * We set this to true once, on the first update. Any nodes added to the tree beyond that
   * update will be given a `data-projection-id` attribute.
   */
  hasEverUpdated: !1
}, oc = ["", "X", "Y", "Z"], sS = 1e3;
let oS = 0;
function lc(i, s, l, r) {
  const { latestValues: c } = s;
  c[i] && (l[i] = c[i], s.setStaticValue(i, 0), r && (r[i] = 0));
}
function zb(i) {
  if (i.hasCheckedOptimisedAppear = !0, i.root === i)
    return;
  const { visualElement: s } = i.options;
  if (!s)
    return;
  const l = nb(s);
  if (window.MotionHasOptimisedAnimation(l, "transform")) {
    const { layout: c, layoutId: m } = i.options;
    window.MotionCancelOptimisedAnimation(l, "transform", Pe, !(c || m));
  }
  const { parent: r } = i;
  r && !r.hasCheckedOptimisedAppear && zb(r);
}
function Rb({ attachResizeListener: i, defaultParent: s, measureScroll: l, checkIsScrollRoot: r, resetTransform: c }) {
  return class {
    constructor(f = {}, h = s == null ? void 0 : s()) {
      this.id = oS++, this.animationId = 0, this.animationCommitId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.layoutVersion = 0, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, this.nodes.forEach(uS), this.nodes.forEach(hS), this.nodes.forEach(gS), this.nodes.forEach(cS);
      }, this.resolvedRelativeTargetAt = 0, this.linkedParentVersion = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = f, this.root = h ? h.root || h : this, this.path = h ? [...h.path, h] : [], this.parent = h, this.depth = h ? h.depth + 1 : 0;
      for (let v = 0; v < this.path.length; v++)
        this.path[v].shouldResetTransform = !0;
      this.root === this && (this.nodes = new nS());
    }
    addEventListener(f, h) {
      return this.eventHandlers.has(f) || this.eventHandlers.set(f, new $c()), this.eventHandlers.get(f).add(h);
    }
    notifyListeners(f, ...h) {
      const v = this.eventHandlers.get(f);
      v && v.notify(...h);
    }
    hasListeners(f) {
      return this.eventHandlers.has(f);
    }
    /**
     * Lifecycles
     */
    mount(f) {
      if (this.instance)
        return;
      this.isSVG = pf(f) && !r2(f), this.instance = f;
      const { layoutId: h, layout: v, visualElement: g } = this.options;
      if (g && !g.current && g.mount(f), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (v || h) && (this.isLayoutDirty = !0), i) {
        let x, y = 0;
        const N = () => this.root.updateBlockedByResize = !1;
        Pe.read(() => {
          y = window.innerWidth;
        }), i(f, () => {
          const V = window.innerWidth;
          V !== y && (y = V, this.root.updateBlockedByResize = !0, x && x(), x = iS(N, 250), ul.hasAnimatedSinceResize && (ul.hasAnimatedSinceResize = !1, this.nodes.forEach(M0)));
        });
      }
      h && this.root.registerSharedNode(h, this), this.options.animate !== !1 && g && (h || v) && this.addEventListener("didUpdate", ({ delta: x, hasLayoutChanged: y, hasRelativeLayoutChanged: N, layout: V }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const T = this.options.transition || g.getDefaultTransition() || NS, { onLayoutAnimationStart: z, onLayoutAnimationComplete: A } = g.getProps(), _ = !this.targetLayout || !jb(this.targetLayout, V), G = !y && N;
        if (this.options.layoutRoot || this.resumeFrom || G || y && (_ || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
          const L = {
            ...rf(T, "layout"),
            onPlay: z,
            onComplete: A
          };
          (g.shouldReduceMotion || this.options.layoutRoot) && (L.delay = 0, L.type = !1), this.startAnimation(L), this.setAnimationOrigin(x, G, L.path);
        } else
          y || M0(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = V;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const f = this.getStack();
      f && f.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), Wn(this.updateProjection);
    }
    // only on the root
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1;
    }
    // Note: currently only running on root node
    startUpdate() {
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(bS), this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: f } = this.options;
      return f && f.getProps().transformTemplate;
    }
    willUpdate(f = !0) {
      if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && zb(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
        return;
      this.isLayoutDirty = !0;
      for (let x = 0; x < this.path.length; x++) {
        const y = this.path[x];
        y.shouldResetTransform = !0, (typeof y.latestValues.x == "string" || typeof y.latestValues.y == "string") && (y.isLayoutDirty = !0), y.updateScroll("snapshot"), y.options.layoutRoot && y.willUpdate(!1);
      }
      const { layoutId: h, layout: v } = this.options;
      if (h === void 0 && !v)
        return;
      const g = this.getTransformTemplate();
      this.prevTransformTemplateValue = g ? g(this.latestValues, "") : void 0, this.updateSnapshot(), f && this.notifyListeners("willUpdate");
    }
    update() {
      if (this.updateScheduled = !1, this.isUpdateBlocked()) {
        const v = this.updateBlockedByResize;
        this.unblockUpdate(), this.updateBlockedByResize = !1, this.clearAllSnapshots(), v && this.nodes.forEach(dS), this.nodes.forEach(A0);
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(j0);
        return;
      }
      this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach(mS), this.nodes.forEach(pS), this.nodes.forEach(lS), this.nodes.forEach(rS)) : this.nodes.forEach(j0), this.clearAllSnapshots();
      const h = ct.now();
      st.delta = tn(0, 1e3 / 60, h - st.timestamp), st.timestamp = h, st.isProcessing = !0, Wu.update.process(st), Wu.preRender.process(st), Wu.render.process(st), st.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, df.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(fS), this.sharedNodes.forEach(vS);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, Pe.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      Pe.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    /**
     * Update measurements
     */
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !ft(this.snapshot.measuredBox.x) && !ft(this.snapshot.measuredBox.y) && (this.snapshot = void 0));
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let v = 0; v < this.path.length; v++)
          this.path[v].updateScroll();
      const f = this.layout;
      this.layout = this.measure(!1), this.layoutVersion++, this.layoutCorrected || (this.layoutCorrected = $e()), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: h } = this.options;
      h && h.notify("LayoutMeasure", this.layout.layoutBox, f ? f.layoutBox : void 0);
    }
    updateScroll(f = "measure") {
      let h = !!(this.options.layoutScroll && this.instance);
      if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === f && (h = !1), h && this.instance) {
        const v = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: f,
          isRoot: v,
          offset: l(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : v
        };
      }
    }
    resetTransform() {
      if (!c)
        return;
      const f = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, h = this.projectionDelta && !Ab(this.projectionDelta), v = this.getTransformTemplate(), g = v ? v(this.latestValues, "") : void 0, x = g !== this.prevTransformTemplateValue;
      f && this.instance && (h || yi(this.latestValues) || x) && (c(this.instance, g), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(f = !0) {
      const h = this.measurePageBox();
      let v = this.removeElementScroll(h);
      return f && (v = this.removeTransform(v)), SS(v), {
        animationId: this.root.animationId,
        measuredBox: h,
        layoutBox: v,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      var g;
      const { visualElement: f } = this.options;
      if (!f)
        return $e();
      const h = f.measureViewportBox();
      if (!(((g = this.scroll) == null ? void 0 : g.wasRoot) || this.path.some(DS))) {
        const { scroll: x } = this.root;
        x && (It(h.x, x.offset.x), It(h.y, x.offset.y));
      }
      return h;
    }
    removeElementScroll(f) {
      var v;
      const h = $e();
      if (Xt(h, f), (v = this.scroll) != null && v.wasRoot)
        return h;
      for (let g = 0; g < this.path.length; g++) {
        const x = this.path[g], { scroll: y, options: N } = x;
        x !== this.root && y && N.layoutScroll && (y.wasRoot && Xt(h, f), It(h.x, y.offset.x), It(h.y, y.offset.y));
      }
      return h;
    }
    applyTransform(f, h = !1, v) {
      var x, y;
      const g = v || $e();
      Xt(g, f);
      for (let N = 0; N < this.path.length; N++) {
        const V = this.path[N];
        !h && V.options.layoutScroll && V.scroll && V !== V.root && (It(g.x, -V.scroll.offset.x), It(g.y, -V.scroll.offset.y)), yi(V.latestValues) && ll(g, V.latestValues, (x = V.layout) == null ? void 0 : x.layoutBox);
      }
      return yi(this.latestValues) && ll(g, this.latestValues, (y = this.layout) == null ? void 0 : y.layoutBox), g;
    }
    removeTransform(f) {
      var v;
      const h = $e();
      Xt(h, f);
      for (let g = 0; g < this.path.length; g++) {
        const x = this.path[g];
        if (!yi(x.latestValues))
          continue;
        let y;
        x.instance && (zc(x.latestValues) && x.updateSnapshot(), y = $e(), Xt(y, x.measurePageBox())), S0(h, x.latestValues, (v = x.snapshot) == null ? void 0 : v.layoutBox, y);
      }
      return yi(this.latestValues) && S0(h, this.latestValues), h;
    }
    setTargetDelta(f) {
      this.targetDelta = f, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0;
    }
    setOptions(f) {
      this.options = {
        ...this.options,
        ...f,
        crossfade: f.crossfade !== void 0 ? f.crossfade : !0
      };
    }
    clearMeasurements() {
      this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== st.timestamp && this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(f = !1) {
      var V;
      const h = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = h.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = h.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = h.isSharedProjectionDirty);
      const v = !!this.resumingFrom || this !== h;
      if (!(f || v && this.isSharedProjectionDirty || this.isProjectionDirty || (V = this.parent) != null && V.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
        return;
      const { layout: x, layoutId: y } = this.options;
      if (!this.layout || !(x || y))
        return;
      this.resolvedRelativeTargetAt = st.timestamp;
      const N = this.getClosestProjectingParent();
      N && this.linkedParentVersion !== N.layoutVersion && !N.options.layoutRoot && this.removeRelativeTarget(), !this.targetDelta && !this.relativeTarget && (this.options.layoutAnchor !== !1 && N && N.layout ? this.createRelativeTarget(N, this.layout.layoutBox, N.layout.layoutBox) : this.removeRelativeTarget()), !(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = $e(), this.targetWithTransforms = $e()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), Y2(this.target, this.relativeTarget, this.relativeParent.target, this.options.layoutAnchor || void 0)) : this.targetDelta ? (this.resumingFrom ? this.applyTransform(this.layout.layoutBox, !1, this.target) : Xt(this.target, this.layout.layoutBox), xb(this.target, this.targetDelta)) : Xt(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1, this.options.layoutAnchor !== !1 && N && !!N.resumingFrom == !!this.resumingFrom && !N.options.layoutScroll && N.target && this.animationProgress !== 1 ? this.createRelativeTarget(N, this.target, N.target) : this.relativeParent = this.relativeTarget = void 0));
    }
    getClosestProjectingParent() {
      if (!(!this.parent || zc(this.parent.latestValues) || vb(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    createRelativeTarget(f, h, v) {
      this.relativeParent = f, this.linkedParentVersion = f.layoutVersion, this.forceRelativeParentToResolveTarget(), this.relativeTarget = $e(), this.relativeTargetOrigin = $e(), vl(this.relativeTargetOrigin, h, v, this.options.layoutAnchor || void 0), Xt(this.relativeTarget, this.relativeTargetOrigin);
    }
    removeRelativeTarget() {
      this.relativeParent = this.relativeTarget = void 0;
    }
    calcProjection() {
      var T;
      const f = this.getLead(), h = !!this.resumingFrom || this !== f;
      let v = !0;
      if ((this.isProjectionDirty || (T = this.parent) != null && T.isProjectionDirty) && (v = !1), h && (this.isSharedProjectionDirty || this.isTransformDirty) && (v = !1), this.resolvedRelativeTargetAt === st.timestamp && (v = !1), v)
        return;
      const { layout: g, layoutId: x } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(g || x))
        return;
      Xt(this.layoutCorrected, this.layout.layoutBox);
      const y = this.treeScale.x, N = this.treeScale.y;
      x2(this.layoutCorrected, this.treeScale, this.path, h), f.layout && !f.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (f.target = f.layout.layoutBox, f.targetWithTransforms = $e());
      const { target: V } = f;
      if (!V) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (g0(this.prevProjectionDelta.x, this.projectionDelta.x), g0(this.prevProjectionDelta.y, this.projectionDelta.y)), ys(this.projectionDelta, this.layoutCorrected, V, this.latestValues), (this.treeScale.x !== y || this.treeScale.y !== N || !T0(this.projectionDelta.x, this.prevProjectionDelta.x) || !T0(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", V));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(f = !0) {
      var h;
      if ((h = this.options.visualElement) == null || h.scheduleRender(), f) {
        const v = this.getStack();
        v && v.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      this.prevProjectionDelta = ma(), this.projectionDelta = ma(), this.projectionDeltaWithTransform = ma();
    }
    setAnimationOrigin(f, h = !1, v) {
      const g = this.snapshot, x = g ? g.latestValues : {}, y = { ...this.latestValues }, N = ma();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !h;
      const V = $e(), T = g ? g.source : void 0, z = this.layout ? this.layout.source : void 0, A = T !== z, _ = this.getStack(), G = !_ || _.members.length <= 1, L = !!(A && !G && this.options.crossfade === !0 && !this.path.some(yS));
      this.animationProgress = 0;
      let H;
      const X = v == null ? void 0 : v.interpolateProjection(f);
      this.mixTargetDelta = (ee) => {
        const F = ee / 1e3, Y = X == null ? void 0 : X(F);
        Y ? (N.x.translate = Y.x, N.x.scale = Me(f.x.scale, 1, F), N.x.origin = f.x.origin, N.x.originPoint = f.x.originPoint, N.y.translate = Y.y, N.y.scale = Me(f.y.scale, 1, F), N.y.origin = f.y.origin, N.y.originPoint = f.y.originPoint) : (P0(N.x, f.x, F), P0(N.y, f.y, F)), this.setTargetDelta(N), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (vl(V, this.layout.layoutBox, this.relativeParent.layout.layoutBox, this.options.layoutAnchor || void 0), xS(this.relativeTarget, this.relativeTargetOrigin, V, F), H && K2(this.relativeTarget, H) && (this.isProjectionDirty = !1), H || (H = $e()), Xt(H, this.relativeTarget)), A && (this.animationValues = y, $2(y, x, this.latestValues, F, L, G)), Y && Y.rotate !== void 0 && (this.animationValues || (this.animationValues = y), this.animationValues.pathRotation = Y.rotate), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = F;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(f) {
      var h, v, g;
      this.notifyListeners("animationStart"), (h = this.currentAnimation) == null || h.stop(), (g = (v = this.resumingFrom) == null ? void 0 : v.currentAnimation) == null || g.stop(), this.pendingAnimation && (Wn(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = Pe.update(() => {
        ul.hasAnimatedSinceResize = !0, this.motionValue || (this.motionValue = ba(0)), this.motionValue.jump(0, !1), this.currentAnimation = eS(this.motionValue, [0, 1e3], {
          ...f,
          velocity: 0,
          isSync: !0,
          onUpdate: (x) => {
            this.mixTargetDelta(x), f.onUpdate && f.onUpdate(x);
          },
          onStop: () => {
          },
          onComplete: () => {
            f.onComplete && f.onComplete(), this.completeAnimation();
          }
        }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
      const f = this.getStack();
      f && f.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(sS), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const f = this.getLead();
      let { targetWithTransforms: h, target: v, layout: g, latestValues: x } = f;
      if (!(!h || !v || !g)) {
        if (this !== f && this.layout && g && _b(this.options.animationType, this.layout.layoutBox, g.layoutBox)) {
          v = this.target || $e();
          const y = ft(this.layout.layoutBox.x);
          v.x.min = f.target.x.min, v.x.max = v.x.min + y;
          const N = ft(this.layout.layoutBox.y);
          v.y.min = f.target.y.min, v.y.max = v.y.min + N;
        }
        Xt(h, v), ll(h, x), ys(this.projectionDeltaWithTransform, this.layoutCorrected, h, x);
      }
    }
    registerSharedNode(f, h) {
      this.sharedNodes.has(f) || this.sharedNodes.set(f, new aS()), this.sharedNodes.get(f).add(h);
      const g = h.options.initialPromotionConfig;
      h.promote({
        transition: g ? g.transition : void 0,
        preserveFollowOpacity: g && g.shouldPreserveFollowOpacity ? g.shouldPreserveFollowOpacity(h) : void 0
      });
    }
    isLead() {
      const f = this.getStack();
      return f ? f.lead === this : !0;
    }
    getLead() {
      var h;
      const { layoutId: f } = this.options;
      return f ? ((h = this.getStack()) == null ? void 0 : h.lead) || this : this;
    }
    getPrevLead() {
      var h;
      const { layoutId: f } = this.options;
      return f ? (h = this.getStack()) == null ? void 0 : h.prevLead : void 0;
    }
    getStack() {
      const { layoutId: f } = this.options;
      if (f)
        return this.root.sharedNodes.get(f);
    }
    promote({ needsReset: f, transition: h, preserveFollowOpacity: v } = {}) {
      const g = this.getStack();
      g && g.promote(this, v), f && (this.projectionDelta = void 0, this.needsReset = !0), h && this.setOptions({ transition: h });
    }
    relegate() {
      const f = this.getStack();
      return f ? f.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: f } = this.options;
      if (!f)
        return;
      let h = !1;
      const { latestValues: v } = f;
      if ((v.z || v.rotate || v.rotateX || v.rotateY || v.rotateZ || v.skewX || v.skewY) && (h = !0), !h)
        return;
      const g = {};
      v.z && lc("z", f, g, this.animationValues);
      for (let x = 0; x < oc.length; x++)
        lc(`rotate${oc[x]}`, f, g, this.animationValues), lc(`skew${oc[x]}`, f, g, this.animationValues);
      f.render();
      for (const x in g)
        f.setStaticValue(x, g[x]), this.animationValues && (this.animationValues[x] = g[x]);
      f.scheduleRender();
    }
    applyProjectionStyles(f, h) {
      if (!this.instance || this.isSVG)
        return;
      if (!this.isVisible) {
        f.visibility = "hidden";
        return;
      }
      const v = this.getTransformTemplate();
      if (this.needsReset) {
        this.needsReset = !1, f.visibility = "", f.opacity = "", f.pointerEvents = rl(h == null ? void 0 : h.pointerEvents) || "", f.transform = v ? v(this.latestValues, "") : "none";
        return;
      }
      const g = this.getLead();
      if (!this.projectionDelta || !this.layout || !g.target) {
        this.options.layoutId && (f.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, f.pointerEvents = rl(h == null ? void 0 : h.pointerEvents) || ""), this.hasProjected && !yi(this.latestValues) && (f.transform = v ? v({}, "") : "none", this.hasProjected = !1);
        return;
      }
      f.visibility = "";
      const x = g.animationValues || g.latestValues;
      this.applyTransformsToTarget();
      let y = Z2(this.projectionDeltaWithTransform, this.treeScale, x);
      v && (y = v(x, y)), f.transform = y;
      const { x: N, y: V } = this.projectionDelta;
      f.transformOrigin = `${N.origin * 100}% ${V.origin * 100}% 0`, g.animationValues ? f.opacity = g === this ? x.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : x.opacityExit : f.opacity = g === this ? x.opacity !== void 0 ? x.opacity : "" : x.opacityExit !== void 0 ? x.opacityExit : 0;
      for (const T in _c) {
        if (x[T] === void 0)
          continue;
        const { correct: z, applyTo: A, isCSSVariable: _ } = _c[T], G = y === "none" ? x[T] : z(x[T], g);
        if (A) {
          const L = A.length;
          for (let H = 0; H < L; H++)
            f[A[H]] = G;
        } else
          _ ? this.options.visualElement.renderState.vars[T] = G : f[T] = G;
      }
      this.options.layoutId && (f.pointerEvents = g === this ? rl(h == null ? void 0 : h.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((f) => {
        var h;
        return (h = f.currentAnimation) == null ? void 0 : h.stop();
      }), this.root.nodes.forEach(A0), this.root.sharedNodes.clear();
    }
  };
}
function lS(i) {
  i.updateLayout();
}
function rS(i) {
  var l;
  const s = ((l = i.resumeFrom) == null ? void 0 : l.snapshot) || i.snapshot;
  if (i.isLead() && i.layout && s && i.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: c } = i.layout, { animationType: m } = i.options, f = s.source !== i.layout.source;
    if (m === "size")
      Wt((y) => {
        const N = f ? s.measuredBox[y] : s.layoutBox[y], V = ft(N);
        N.min = r[y].min, N.max = N.min + V;
      });
    else if (m === "x" || m === "y") {
      const y = m === "x" ? "y" : "x";
      Oc(f ? s.measuredBox[y] : s.layoutBox[y], r[y]);
    } else _b(m, s.layoutBox, r) && Wt((y) => {
      const N = f ? s.measuredBox[y] : s.layoutBox[y], V = ft(r[y]);
      N.max = N.min + V, i.relativeTarget && !i.currentAnimation && (i.isProjectionDirty = !0, i.relativeTarget[y].max = i.relativeTarget[y].min + V);
    });
    const h = ma();
    ys(h, r, s.layoutBox);
    const v = ma();
    f ? ys(v, i.applyTransform(c, !0), s.measuredBox) : ys(v, r, s.layoutBox);
    const g = !Ab(h);
    let x = !1;
    if (!i.resumeFrom) {
      const y = i.getClosestProjectingParent();
      if (y && !y.resumeFrom) {
        const { snapshot: N, layout: V } = y;
        if (N && V) {
          const T = i.options.layoutAnchor || void 0, z = $e();
          vl(z, s.layoutBox, N.layoutBox, T);
          const A = $e();
          vl(A, r, V.layoutBox, T), jb(z, A) || (x = !0), y.options.layoutRoot && (i.relativeTarget = A, i.relativeTargetOrigin = z, i.relativeParent = y);
        }
      }
    }
    i.notifyListeners("didUpdate", {
      layout: r,
      snapshot: s,
      delta: v,
      layoutDelta: h,
      hasLayoutChanged: g,
      hasRelativeLayoutChanged: x
    });
  } else if (i.isLead()) {
    const { onExitComplete: r } = i.options;
    r && r();
  }
  i.options.transition = void 0;
}
function uS(i) {
  i.parent && (i.isProjecting() || (i.isProjectionDirty = i.parent.isProjectionDirty), i.isSharedProjectionDirty || (i.isSharedProjectionDirty = !!(i.isProjectionDirty || i.parent.isProjectionDirty || i.parent.isSharedProjectionDirty)), i.isTransformDirty || (i.isTransformDirty = i.parent.isTransformDirty));
}
function cS(i) {
  i.isProjectionDirty = i.isSharedProjectionDirty = i.isTransformDirty = !1;
}
function fS(i) {
  i.clearSnapshot();
}
function A0(i) {
  i.clearMeasurements();
}
function dS(i) {
  i.isLayoutDirty = !0, i.updateLayout();
}
function j0(i) {
  i.isLayoutDirty = !1;
}
function mS(i) {
  i.isAnimationBlocked && i.layout && !i.isLayoutDirty && (i.snapshot = i.layout, i.isLayoutDirty = !0);
}
function pS(i) {
  const { visualElement: s } = i.options;
  s && s.getProps().onBeforeLayoutMeasure && s.notify("BeforeLayoutMeasure"), i.resetTransform();
}
function M0(i) {
  i.finishAnimation(), i.targetDelta = i.relativeTarget = i.target = void 0, i.isProjectionDirty = !0;
}
function hS(i) {
  i.resolveTargetDelta();
}
function gS(i) {
  i.calcProjection();
}
function bS(i) {
  i.resetSkewAndRotation();
}
function vS(i) {
  i.removeLeadSnapshot();
}
function P0(i, s, l) {
  i.translate = Me(s.translate, 0, l), i.scale = Me(s.scale, 1, l), i.origin = s.origin, i.originPoint = s.originPoint;
}
function z0(i, s, l, r) {
  i.min = Me(s.min, l.min, r), i.max = Me(s.max, l.max, r);
}
function xS(i, s, l, r) {
  z0(i.x, s.x, l.x, r), z0(i.y, s.y, l.y, r);
}
function yS(i) {
  return i.animationValues && i.animationValues.opacityExit !== void 0;
}
const NS = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, R0 = (i) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(i), _0 = R0("applewebkit/") && !R0("chrome/") ? Math.round : Ht;
function O0(i) {
  i.min = _0(i.min), i.max = _0(i.max);
}
function SS(i) {
  O0(i.x), O0(i.y);
}
function _b(i, s, l) {
  return i === "position" || i === "preserve-aspect" && !G2(V0(s), V0(l), 0.2);
}
function DS(i) {
  var s;
  return i !== i.root && ((s = i.scroll) == null ? void 0 : s.wasRoot);
}
const ES = Rb({
  attachResizeListener: (i, s) => ws(i, "resize", s),
  measureScroll: () => {
    var i, s;
    return {
      x: document.documentElement.scrollLeft || ((i = document.body) == null ? void 0 : i.scrollLeft) || 0,
      y: document.documentElement.scrollTop || ((s = document.body) == null ? void 0 : s.scrollTop) || 0
    };
  },
  checkIsScrollRoot: () => !0
}), rc = {
  current: void 0
}, Ob = Rb({
  measureScroll: (i) => ({
    x: i.scrollLeft,
    y: i.scrollTop
  }),
  defaultParent: () => {
    if (!rc.current) {
      const i = new ES({});
      i.mount(window), i.setOptions({ layoutScroll: !0 }), rc.current = i;
    }
    return rc.current;
  },
  resetTransform: (i, s) => {
    i.style.transform = s !== void 0 ? s : "none";
  },
  checkIsScrollRoot: (i) => window.getComputedStyle(i).position === "fixed"
}), xf = q.createContext({
  transformPagePoint: (i) => i,
  isStatic: !1,
  reducedMotion: "never"
});
function U0(i, s) {
  if (typeof i == "function")
    return i(s);
  i != null && (i.current = s);
}
function wS(...i) {
  return (s) => {
    let l = !1;
    const r = i.map((c) => {
      const m = U0(c, s);
      return !l && typeof m == "function" && (l = !0), m;
    });
    if (l)
      return () => {
        for (let c = 0; c < r.length; c++) {
          const m = r[c];
          typeof m == "function" ? m() : U0(i[c], null);
        }
      };
  };
}
function VS(...i) {
  return q.useCallback(wS(...i), i);
}
class TS extends q.Component {
  getSnapshotBeforeUpdate(s) {
    const l = this.props.childRef.current;
    if (il(l) && s.isPresent && !this.props.isPresent && this.props.pop !== !1) {
      const r = l.offsetParent, c = il(r) && r.offsetWidth || 0, m = il(r) && r.offsetHeight || 0, f = getComputedStyle(l), h = this.props.sizeRef.current;
      h.height = parseFloat(f.height), h.width = parseFloat(f.width), h.top = l.offsetTop, h.left = l.offsetLeft, h.right = c - h.width - h.left, h.bottom = m - h.height - h.top, h.direction = f.direction;
    }
    return null;
  }
  /**
   * Required with getSnapshotBeforeUpdate to stop React complaining.
   */
  componentDidUpdate() {
  }
  render() {
    return this.props.children;
  }
}
function CS({ children: i, isPresent: s, anchorX: l, anchorY: r, root: c, pop: m }) {
  var N;
  const f = q.useId(), h = q.useRef(null), v = q.useRef({
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    direction: "ltr"
  }), { nonce: g } = q.useContext(xf), x = ((N = i.props) == null ? void 0 : N.ref) ?? (i == null ? void 0 : i.ref), y = VS(h, x);
  return q.useInsertionEffect(() => {
    const { width: V, height: T, top: z, left: A, right: _, bottom: G, direction: L } = v.current;
    if (s || m === !1 || !h.current || !V || !T)
      return;
    const H = L === "rtl", X = l === "left" ? H ? `right: ${_}` : `left: ${A}` : H ? `left: ${A}` : `right: ${_}`, ee = r === "bottom" ? `bottom: ${G}` : `top: ${z}`;
    h.current.dataset.motionPopId = f;
    const F = document.createElement("style");
    g && (F.nonce = g);
    const Y = c ?? document.head;
    return Y.appendChild(F), F.sheet && F.sheet.insertRule(`
          [data-motion-pop-id="${f}"] {
            position: absolute !important;
            width: ${V}px !important;
            height: ${T}px !important;
            ${X}px !important;
            ${ee}px !important;
          }
        `), () => {
      var J;
      (J = h.current) == null || J.removeAttribute("data-motion-pop-id"), Y.contains(F) && Y.removeChild(F);
    };
  }, [s]), Sn.jsx(TS, { isPresent: s, childRef: h, sizeRef: v, pop: m, children: m === !1 ? i : q.cloneElement(i, { ref: y }) });
}
const kS = ({ children: i, initial: s, isPresent: l, onExitComplete: r, custom: c, presenceAffectsLayout: m, mode: f, anchorX: h, anchorY: v, root: g }) => {
  const x = Zc(BS), y = q.useId();
  let N = !0, V = q.useMemo(() => (N = !1, {
    id: y,
    initial: s,
    isPresent: l,
    custom: c,
    onExitComplete: (T) => {
      x.set(T, !0);
      for (const z of x.values())
        if (!z)
          return;
      r && r();
    },
    register: (T) => (x.set(T, !1), () => x.delete(T))
  }), [l, x, r]);
  return m && N && (V = { ...V }), q.useMemo(() => {
    x.forEach((T, z) => x.set(z, !1));
  }, [l]), q.useEffect(() => {
    !l && !x.size && r && r();
  }, [l]), i = Sn.jsx(CS, { pop: f === "popLayout", isPresent: l, anchorX: h, anchorY: v, root: g, children: i }), Sn.jsx(Sl.Provider, { value: V, children: i });
};
function BS() {
  return /* @__PURE__ */ new Map();
}
function Ub(i = !0) {
  const s = q.useContext(Sl);
  if (s === null)
    return [!0, null];
  const { isPresent: l, onExitComplete: r, register: c } = s, m = q.useId();
  q.useEffect(() => {
    if (i)
      return c(m);
  }, [i]);
  const f = q.useCallback(() => i && r && r(m), [m, r, i]);
  return !l && r ? [!1, f] : [!0];
}
const Io = (i) => i.key || "";
function L0(i) {
  const s = [];
  return q.Children.forEach(i, (l) => {
    q.isValidElement(l) && s.push(l);
  }), s;
}
const xl = ({ children: i, custom: s, initial: l = !0, onExitComplete: r, presenceAffectsLayout: c = !0, mode: m = "sync", propagate: f = !1, anchorX: h = "left", anchorY: v = "top", root: g }) => {
  const [x, y] = Ub(f), N = q.useMemo(() => L0(i), [i]), V = f && !x ? [] : N.map(Io), T = q.useRef(!0), z = q.useRef(N), A = Zc(() => /* @__PURE__ */ new Map()), _ = q.useRef(/* @__PURE__ */ new Set()), [G, L] = q.useState(N), [H, X] = q.useState(N);
  mg(() => {
    T.current = !1, z.current = N;
    for (let Y = 0; Y < H.length; Y++) {
      const J = Io(H[Y]);
      V.includes(J) ? (A.delete(J), _.current.delete(J)) : A.get(J) !== !0 && A.set(J, !1);
    }
  }, [H, V.length, V.join("-")]);
  const ee = [];
  if (N !== G) {
    let Y = [...N];
    for (let J = 0; J < H.length; J++) {
      const te = H[J], K = Io(te);
      V.includes(K) || (Y.splice(J, 0, te), ee.push(te));
    }
    return m === "wait" && ee.length && (Y = ee), X(L0(Y)), L(N), null;
  }
  const { forceRender: F } = q.useContext(Kc);
  return Sn.jsx(Sn.Fragment, { children: H.map((Y) => {
    const J = Io(Y), te = f && !x ? !1 : N === H || V.includes(J), K = () => {
      if (_.current.has(J))
        return;
      if (A.has(J))
        _.current.add(J), A.set(J, !0);
      else
        return;
      let I = !0;
      A.forEach((Se) => {
        Se || (I = !1);
      }), I && (F == null || F(), X(z.current), f && (y == null || y()), r && r());
    };
    return Sn.jsx(kS, { isPresent: te, initial: !T.current || l ? void 0 : !1, custom: s, presenceAffectsLayout: c, mode: m, root: g, onExitComplete: te ? void 0 : K, anchorX: h, anchorY: v, children: Y }, J);
  }) });
}, Lb = q.createContext({ strict: !1 }), H0 = {
  animation: [
    "animate",
    "variants",
    "whileHover",
    "whileTap",
    "exit",
    "whileInView",
    "whileFocus",
    "whileDrag"
  ],
  exit: ["exit"],
  drag: ["drag", "dragControls"],
  focus: ["whileFocus"],
  hover: ["whileHover", "onHoverStart", "onHoverEnd"],
  tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
  pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
  inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
  layout: ["layout", "layoutId"]
};
let q0 = !1;
function AS() {
  if (q0)
    return;
  const i = {};
  for (const s in H0)
    i[s] = {
      isEnabled: (l) => H0[s].some((r) => !!l[r])
    };
  hb(i), q0 = !0;
}
function Hb() {
  return AS(), h2();
}
function jS(i) {
  const s = Hb();
  for (const l in i)
    s[l] = {
      ...s[l],
      ...i[l]
    };
  hb(s);
}
const MS = /* @__PURE__ */ new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "propagate",
  "ignoreStrict",
  "viewport"
]);
function yl(i) {
  return i.startsWith("while") || i.startsWith("drag") && i !== "draggable" || i.startsWith("layout") || i.startsWith("onTap") || i.startsWith("onPan") || i.startsWith("onLayout") || MS.has(i);
}
let qb = (i) => !yl(i);
function PS(i) {
  typeof i == "function" && (qb = (s) => s.startsWith("on") ? !yl(s) : i(s));
}
try {
  PS(require("@emotion/is-prop-valid").default);
} catch {
}
function zS(i, s, l) {
  const r = {};
  for (const c in i)
    c === "values" && typeof i.values == "object" || ot(i[c]) || (qb(c) || l === !0 && yl(c) || !s && !yl(c) || // If trying to use native HTML drag events, forward drag listeners
    i.draggable && c.startsWith("onDrag")) && (r[c] = i[c]);
  return r;
}
const Vl = /* @__PURE__ */ q.createContext({});
function RS(i, s) {
  if (wl(i)) {
    const { initial: l, animate: r } = i;
    return {
      initial: l === !1 || Es(l) ? l : void 0,
      animate: Es(r) ? r : void 0
    };
  }
  return i.inherit !== !1 ? s : {};
}
function _S(i) {
  const { initial: s, animate: l } = RS(i, q.useContext(Vl));
  return q.useMemo(() => ({ initial: s, animate: l }), [G0(s), G0(l)]);
}
function G0(i) {
  return Array.isArray(i) ? i.join(" ") : i;
}
const yf = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function Gb(i, s, l) {
  for (const r in s)
    !ot(s[r]) && !Sb(r, l) && (i[r] = s[r]);
}
function OS({ transformTemplate: i }, s) {
  return q.useMemo(() => {
    const l = yf();
    return bf(l, s, i), Object.assign({}, l.vars, l.style);
  }, [s]);
}
function US(i, s) {
  const l = i.style || {}, r = {};
  return Gb(r, l, i), Object.assign(r, OS(i, s)), r;
}
function LS(i, s) {
  const l = {}, r = US(i, s);
  return i.drag && i.dragListener !== !1 && (l.draggable = !1, r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none", r.touchAction = i.drag === !0 ? "none" : `pan-${i.drag === "x" ? "y" : "x"}`), i.tabIndex === void 0 && (i.onTap || i.onTapStart || i.whileTap) && (l.tabIndex = 0), l.style = r, l;
}
const Yb = () => ({
  ...yf(),
  attrs: {}
});
function HS(i, s, l, r) {
  const c = q.useMemo(() => {
    const m = Yb();
    return Db(m, s, wb(r), i.transformTemplate, i.style), {
      ...m.attrs,
      style: { ...m.style }
    };
  }, [s]);
  if (i.style) {
    const m = {};
    Gb(m, i.style, i), c.style = { ...m, ...c.style };
  }
  return c;
}
const qS = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view"
];
function Nf(i) {
  return (
    /**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */
    typeof i != "string" || /**
     * If it contains a dash, the element is a custom HTML webcomponent.
     */
    i.includes("-") ? !1 : (
      /**
       * If it's in our list of lowercase SVG tags, it's an SVG component
       */
      !!(qS.indexOf(i) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(i))
    )
  );
}
function GS(i, s, l, { latestValues: r }, c, m = !1, f) {
  const v = (f ?? Nf(i) ? HS : LS)(s, r, c, i), g = zS(s, typeof i == "string", m), x = i !== q.Fragment ? { ...g, ...v, ref: l } : {}, { children: y } = s, N = q.useMemo(() => ot(y) ? y.get() : y, [y]);
  return q.createElement(i, {
    ...x,
    children: N
  });
}
function YS({ scrapeMotionValuesFromProps: i, createRenderState: s }, l, r, c) {
  return {
    latestValues: XS(l, r, c, i),
    renderState: s()
  };
}
function XS(i, s, l, r) {
  const c = {}, m = r(i, {});
  for (const N in m)
    c[N] = rl(m[N]);
  let { initial: f, animate: h } = i;
  const v = wl(i), g = mb(i);
  s && g && !v && i.inherit !== !1 && (f === void 0 && (f = s.initial), h === void 0 && (h = s.animate));
  let x = l ? l.initial === !1 : !1;
  x = x || f === !1;
  const y = x ? h : f;
  if (y && typeof y != "boolean" && !El(y)) {
    const N = Array.isArray(y) ? y : [y];
    for (let V = 0; V < N.length; V++) {
      const T = cf(i, N[V]);
      if (T) {
        const { transitionEnd: z, transition: A, ..._ } = T;
        for (const G in _) {
          let L = _[G];
          if (Array.isArray(L)) {
            const H = x ? L.length - 1 : 0;
            L = L[H];
          }
          L !== null && (c[G] = L);
        }
        for (const G in z)
          c[G] = z[G];
      }
    }
  }
  return c;
}
const Xb = (i) => (s, l) => {
  const r = q.useContext(Vl), c = q.useContext(Sl), m = () => YS(i, s, r, c);
  return l ? m() : Zc(m);
}, FS = /* @__PURE__ */ Xb({
  scrapeMotionValuesFromProps: vf,
  createRenderState: yf
}), QS = /* @__PURE__ */ Xb({
  scrapeMotionValuesFromProps: Vb,
  createRenderState: Yb
}), KS = Symbol.for("motionComponentSymbol");
function ZS(i, s, l) {
  const r = q.useRef(l);
  q.useInsertionEffect(() => {
    r.current = l;
  });
  const c = q.useRef(null);
  return q.useCallback((m) => {
    var h;
    m && ((h = i.onMount) == null || h.call(i, m)), s && (m ? s.mount(m) : s.unmount());
    const f = r.current;
    if (typeof f == "function")
      if (m) {
        const v = f(m);
        typeof v == "function" && (c.current = v);
      } else c.current ? (c.current(), c.current = null) : f(m);
    else f && (f.current = m);
  }, [s]);
}
const Fb = q.createContext({});
function ca(i) {
  return i && typeof i == "object" && Object.prototype.hasOwnProperty.call(i, "current");
}
function JS(i, s, l, r, c, m) {
  var L, H;
  const { visualElement: f } = q.useContext(Vl), h = q.useContext(Lb), v = q.useContext(Sl), g = q.useContext(xf), x = g.reducedMotion, y = g.skipAnimations, N = q.useRef(null), V = q.useRef(!1);
  r = r || h.renderer, !N.current && r && (N.current = r(i, {
    visualState: s,
    parent: f,
    props: l,
    presenceContext: v,
    blockInitialAnimation: v ? v.initial === !1 : !1,
    reducedMotionConfig: x,
    skipAnimations: y,
    isSVG: m
  }), V.current && N.current && (N.current.manuallyAnimateOnMount = !0));
  const T = N.current, z = q.useContext(Fb);
  T && !T.projection && c && (T.type === "html" || T.type === "svg") && $S(N.current, l, c, z);
  const A = q.useRef(!1);
  q.useInsertionEffect(() => {
    T && A.current && T.update(l, v);
  });
  const _ = l[tb], G = q.useRef(!!_ && typeof window < "u" && !((L = window.MotionHandoffIsComplete) != null && L.call(window, _)) && ((H = window.MotionHasOptimisedAnimation) == null ? void 0 : H.call(window, _)));
  return mg(() => {
    V.current = !0, T && (A.current = !0, window.MotionIsMounted = !0, T.updateFeatures(), T.scheduleRenderMicrotask(), G.current && T.animationState && T.animationState.animateChanges());
  }), q.useEffect(() => {
    T && (!G.current && T.animationState && T.animationState.animateChanges(), G.current && (queueMicrotask(() => {
      var X;
      (X = window.MotionHandoffMarkAsComplete) == null || X.call(window, _);
    }), G.current = !1), T.enteringChildren = void 0);
  }), T;
}
function $S(i, s, l, r) {
  const { layoutId: c, layout: m, drag: f, dragConstraints: h, layoutScroll: v, layoutRoot: g, layoutAnchor: x, layoutCrossfade: y } = s;
  i.projection = new l(i.latestValues, s["data-framer-portal-id"] ? void 0 : Qb(i.parent)), i.projection.setOptions({
    layoutId: c,
    layout: m,
    alwaysMeasureLayout: !!f || h && ca(h),
    visualElement: i,
    /**
     * TODO: Update options in an effect. This could be tricky as it'll be too late
     * to update by the time layout animations run.
     * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
     * ensuring it gets called if there's no potential layout animations.
     *
     */
    animationType: typeof m == "string" ? m : "both",
    initialPromotionConfig: r,
    crossfade: y,
    layoutScroll: v,
    layoutRoot: g,
    layoutAnchor: x
  });
}
function Qb(i) {
  if (i)
    return i.options.allowProjection !== !1 ? i.projection : Qb(i.parent);
}
function uc(i, { forwardMotionProps: s = !1, type: l } = {}, r, c) {
  r && jS(r);
  const m = l ? l === "svg" : Nf(i), f = m ? QS : FS;
  function h(g, x) {
    let y;
    const N = {
      ...q.useContext(xf),
      ...g,
      layoutId: WS(g)
    }, { isStatic: V } = N, T = _S(g), z = f(g, V);
    if (!V && typeof window < "u") {
      IS();
      const A = eD(N);
      y = A.MeasureLayout, T.visualElement = JS(i, z, N, c, A.ProjectionNode, m);
    }
    return Sn.jsxs(Vl.Provider, { value: T, children: [y && T.visualElement ? Sn.jsx(y, { visualElement: T.visualElement, ...N }) : null, GS(i, g, ZS(z, T.visualElement, x), z, V, s, m)] });
  }
  h.displayName = `motion.${typeof i == "string" ? i : `create(${i.displayName ?? i.name ?? ""})`}`;
  const v = q.forwardRef(h);
  return v[KS] = i, v;
}
function WS({ layoutId: i }) {
  const s = q.useContext(Kc).id;
  return s && i !== void 0 ? s + "-" + i : i;
}
function IS(i, s) {
  q.useContext(Lb).strict;
}
function eD(i) {
  const s = Hb(), { drag: l, layout: r } = s;
  if (!l && !r)
    return {};
  const c = { ...l, ...r };
  return {
    MeasureLayout: l != null && l.isEnabled(i) || r != null && r.isEnabled(i) ? c.MeasureLayout : void 0,
    ProjectionNode: c.ProjectionNode
  };
}
function tD(i, s) {
  if (typeof Proxy > "u")
    return uc;
  const l = /* @__PURE__ */ new Map(), r = (m, f) => uc(m, f, i, s), c = (m, f) => r(m, f);
  return new Proxy(c, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (m, f) => f === "create" ? r : (l.has(f) || l.set(f, uc(f, void 0, i, s)), l.get(f))
  });
}
const nD = (i, s) => s.isSVG ?? Nf(i) ? new j2(s) : new V2(s, {
  allowProjection: i !== q.Fragment
});
class iD extends In {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(s) {
    super(s), s.animationState || (s.animationState = _2(s));
  }
  updateAnimationControlsSubscription() {
    const { animate: s } = this.node.getProps();
    El(s) && (this.unmountControls = s.subscribe(this.node));
  }
  /**
   * Subscribe any provided AnimationControls to the component's VisualElement
   */
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: s } = this.node.getProps(), { animate: l } = this.node.prevProps || {};
    s !== l && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var s;
    this.node.animationState.reset(), (s = this.unmountControls) == null || s.call(this);
  }
}
let aD = 0;
class sD extends In {
  constructor() {
    super(...arguments), this.id = aD++, this.isExitComplete = !1;
  }
  update() {
    var m;
    if (!this.node.presenceContext)
      return;
    const { isPresent: s, onExitComplete: l } = this.node.presenceContext, { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || s === r)
      return;
    if (s && r === !1) {
      if (this.isExitComplete) {
        const { initial: f, custom: h } = this.node.getProps();
        if (typeof f == "string" || typeof f == "object" && f !== null && !Array.isArray(f)) {
          const v = Ei(this.node, f, h);
          if (v) {
            const { transition: g, transitionEnd: x, ...y } = v;
            for (const N in y)
              (m = this.node.getValue(N)) == null || m.jump(y[N]);
          }
        }
        this.node.animationState.reset(), this.node.animationState.animateChanges();
      } else
        this.node.animationState.setActive("exit", !1);
      this.isExitComplete = !1;
      return;
    }
    const c = this.node.animationState.setActive("exit", !s);
    l && !s && c.then(() => {
      this.isExitComplete = !0, l(this.id);
    });
  }
  mount() {
    const { register: s, onExitComplete: l } = this.node.presenceContext || {};
    l && l(this.id), s && (this.unmount = s(this.id));
  }
  unmount() {
  }
}
const oD = {
  animation: {
    Feature: iD
  },
  exit: {
    Feature: sD
  }
};
function Bs(i) {
  return {
    point: {
      x: i.pageX,
      y: i.pageY
    }
  };
}
const lD = (i) => (s) => mf(s) && i(s, Bs(s));
function Ns(i, s, l, r) {
  return ws(i, s, lD(l), r);
}
const Kb = ({ current: i }) => i ? i.ownerDocument.defaultView : null, Y0 = (i, s) => Math.abs(i - s);
function rD(i, s) {
  const l = Y0(i.x, s.x), r = Y0(i.y, s.y);
  return Math.sqrt(l ** 2 + r ** 2);
}
const X0 = /* @__PURE__ */ new Set(["auto", "scroll"]);
class Zb {
  constructor(s, l, { transformPagePoint: r, contextWindow: c = window, dragSnapToOrigin: m = !1, distanceThreshold: f = 3, element: h } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.lastRawMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.scrollPositions = /* @__PURE__ */ new Map(), this.removeScrollListeners = null, this.onElementScroll = (V) => {
      this.handleScroll(V.target);
    }, this.onWindowScroll = () => {
      this.handleScroll(window);
    }, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      this.lastRawMoveEventInfo && (this.lastMoveEventInfo = el(this.lastRawMoveEventInfo, this.transformPagePoint));
      const V = cc(this.lastMoveEventInfo, this.history), T = this.startEvent !== null, z = rD(V.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
      if (!T && !z)
        return;
      const { point: A } = V, { timestamp: _ } = st;
      this.history.push({ ...A, timestamp: _ });
      const { onStart: G, onMove: L } = this.handlers;
      T || (G && G(this.lastMoveEvent, V), this.startEvent = this.lastMoveEvent), L && L(this.lastMoveEvent, V);
    }, this.handlePointerMove = (V, T) => {
      this.lastMoveEvent = V, this.lastRawMoveEventInfo = T, this.lastMoveEventInfo = el(T, this.transformPagePoint), Pe.update(this.updatePoint, !0);
    }, this.handlePointerUp = (V, T) => {
      this.end();
      const { onEnd: z, onSessionEnd: A, resumeAnimation: _ } = this.handlers;
      if ((this.dragSnapToOrigin || !this.startEvent) && _ && _(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const G = cc(V.type === "pointercancel" ? this.lastMoveEventInfo : el(T, this.transformPagePoint), this.history);
      this.startEvent && z && z(V, G), A && A(V, G);
    }, !mf(s))
      return;
    this.dragSnapToOrigin = m, this.handlers = l, this.transformPagePoint = r, this.distanceThreshold = f, this.contextWindow = c || window;
    const v = Bs(s), g = el(v, this.transformPagePoint), { point: x } = g, { timestamp: y } = st;
    this.history = [{ ...x, timestamp: y }];
    const { onSessionStart: N } = l;
    N && N(s, cc(g, this.history)), this.removeListeners = Ts(Ns(this.contextWindow, "pointermove", this.handlePointerMove), Ns(this.contextWindow, "pointerup", this.handlePointerUp), Ns(this.contextWindow, "pointercancel", this.handlePointerUp)), h && this.startScrollTracking(h);
  }
  /**
   * Start tracking scroll on ancestors and window.
   */
  startScrollTracking(s) {
    let l = s.parentElement;
    for (; l; ) {
      const r = getComputedStyle(l);
      (X0.has(r.overflowX) || X0.has(r.overflowY)) && this.scrollPositions.set(l, {
        x: l.scrollLeft,
        y: l.scrollTop
      }), l = l.parentElement;
    }
    this.scrollPositions.set(window, {
      x: window.scrollX,
      y: window.scrollY
    }), window.addEventListener("scroll", this.onElementScroll, {
      capture: !0
    }), window.addEventListener("scroll", this.onWindowScroll), this.removeScrollListeners = () => {
      window.removeEventListener("scroll", this.onElementScroll, {
        capture: !0
      }), window.removeEventListener("scroll", this.onWindowScroll);
    };
  }
  /**
   * Handle scroll compensation during drag.
   *
   * For element scroll: adjusts history origin since pageX/pageY doesn't change.
   * For window scroll: adjusts lastMoveEventInfo since pageX/pageY would change.
   */
  handleScroll(s) {
    const l = this.scrollPositions.get(s);
    if (!l)
      return;
    const r = s === window, c = r ? { x: window.scrollX, y: window.scrollY } : {
      x: s.scrollLeft,
      y: s.scrollTop
    }, m = { x: c.x - l.x, y: c.y - l.y };
    m.x === 0 && m.y === 0 || (r ? this.lastMoveEventInfo && (this.lastMoveEventInfo.point.x += m.x, this.lastMoveEventInfo.point.y += m.y) : this.history.length > 0 && (this.history[0].x -= m.x, this.history[0].y -= m.y), this.scrollPositions.set(s, c), Pe.update(this.updatePoint, !0));
  }
  updateHandlers(s) {
    this.handlers = s;
  }
  end() {
    this.removeListeners && this.removeListeners(), this.removeScrollListeners && this.removeScrollListeners(), this.scrollPositions.clear(), Wn(this.updatePoint);
  }
}
function el(i, s) {
  return s ? { point: s(i.point) } : i;
}
function F0(i, s) {
  return { x: i.x - s.x, y: i.y - s.y };
}
function cc({ point: i }, s) {
  return {
    point: i,
    delta: F0(i, Jb(s)),
    offset: F0(i, uD(s)),
    velocity: cD(s, 0.1)
  };
}
function uD(i) {
  return i[0];
}
function Jb(i) {
  return i[i.length - 1];
}
function cD(i, s) {
  if (i.length < 2)
    return { x: 0, y: 0 };
  let l = i.length - 1, r = null;
  const c = Jb(i);
  for (; l >= 0 && (r = i[l], !(c.timestamp - r.timestamp > /* @__PURE__ */ xt(s))); )
    l--;
  if (!r)
    return { x: 0, y: 0 };
  r === i[0] && i.length > 2 && c.timestamp - r.timestamp > /* @__PURE__ */ xt(s) * 2 && (r = i[1]);
  const m = /* @__PURE__ */ Lt(c.timestamp - r.timestamp);
  if (m === 0)
    return { x: 0, y: 0 };
  const f = {
    x: (c.x - r.x) / m,
    y: (c.y - r.y) / m
  };
  return f.x === 1 / 0 && (f.x = 0), f.y === 1 / 0 && (f.y = 0), f;
}
function fD(i, { min: s, max: l }, r) {
  return s !== void 0 && i < s ? i = r ? Me(s, i, r.min) : Math.max(i, s) : l !== void 0 && i > l && (i = r ? Me(l, i, r.max) : Math.min(i, l)), i;
}
function Q0(i, s, l) {
  return {
    min: s !== void 0 ? i.min + s : void 0,
    max: l !== void 0 ? i.max + l - (i.max - i.min) : void 0
  };
}
function dD(i, { top: s, left: l, bottom: r, right: c }) {
  return {
    x: Q0(i.x, l, c),
    y: Q0(i.y, s, r)
  };
}
function K0(i, s) {
  let l = s.min - i.min, r = s.max - i.max;
  return s.max - s.min < i.max - i.min && ([l, r] = [r, l]), { min: l, max: r };
}
function mD(i, s) {
  return {
    x: K0(i.x, s.x),
    y: K0(i.y, s.y)
  };
}
function pD(i, s) {
  let l = 0.5;
  const r = ft(i), c = ft(s);
  return c > r ? l = /* @__PURE__ */ Ss(s.min, s.max - r, i.min) : r > c && (l = /* @__PURE__ */ Ss(i.min, i.max - c, s.min)), tn(0, 1, l);
}
function hD(i, s) {
  const l = {};
  return s.min !== void 0 && (l.min = s.min - i.min), s.max !== void 0 && (l.max = s.max - i.min), l;
}
const Uc = 0.35;
function gD(i = Uc) {
  return i === !1 ? i = 0 : i === !0 && (i = Uc), {
    x: Z0(i, "left", "right"),
    y: Z0(i, "top", "bottom")
  };
}
function Z0(i, s, l) {
  return {
    min: J0(i, s),
    max: J0(i, l)
  };
}
function J0(i, s) {
  return typeof i == "number" ? i : i[s] || 0;
}
const bD = /* @__PURE__ */ new WeakMap();
class vD {
  constructor(s) {
    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = $e(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = s;
  }
  start(s, { snapToCursor: l = !1, distanceThreshold: r } = {}) {
    const { presenceContext: c } = this.visualElement;
    if (c && c.isPresent === !1)
      return;
    const m = (y) => {
      l && this.snapToCursor(Bs(y).point), this.stopAnimation();
    }, f = (y, N) => {
      const { drag: V, dragPropagation: T, onDragStart: z } = this.getProps();
      if (V && !T && (this.openDragLock && this.openDragLock(), this.openDragLock = XN(V), !this.openDragLock))
        return;
      this.latestPointerEvent = y, this.latestPanInfo = N, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), Wt((_) => {
        let G = this.getAxisMotionValue(_).get() || 0;
        if (en.test(G)) {
          const { projection: L } = this.visualElement;
          if (L && L.layout) {
            const H = L.layout.layoutBox[_];
            H && (G = ft(H) * (parseFloat(G) / 100));
          }
        }
        this.originPoint[_] = G;
      }), z && Pe.update(() => z(y, N), !1, !0), kc(this.visualElement, "transform");
      const { animationState: A } = this.visualElement;
      A && A.setActive("whileDrag", !0);
    }, h = (y, N) => {
      this.latestPointerEvent = y, this.latestPanInfo = N;
      const { dragPropagation: V, dragDirectionLock: T, onDirectionLock: z, onDrag: A } = this.getProps();
      if (!V && !this.openDragLock)
        return;
      const { offset: _ } = N;
      if (T && this.currentDirection === null) {
        this.currentDirection = yD(_), this.currentDirection !== null && z && z(this.currentDirection);
        return;
      }
      this.updateAxis("x", N.point, _), this.updateAxis("y", N.point, _), this.visualElement.render(), A && Pe.update(() => A(y, N), !1, !0);
    }, v = (y, N) => {
      this.latestPointerEvent = y, this.latestPanInfo = N, this.stop(y, N), this.latestPointerEvent = null, this.latestPanInfo = null;
    }, g = () => {
      const { dragSnapToOrigin: y } = this.getProps();
      (y || this.constraints) && this.startAnimation({ x: 0, y: 0 });
    }, { dragSnapToOrigin: x } = this.getProps();
    this.panSession = new Zb(s, {
      onSessionStart: m,
      onStart: f,
      onMove: h,
      onSessionEnd: v,
      resumeAnimation: g
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: x,
      distanceThreshold: r,
      contextWindow: Kb(this.visualElement),
      element: this.visualElement.current
    });
  }
  /**
   * @internal
   */
  stop(s, l) {
    const r = s || this.latestPointerEvent, c = l || this.latestPanInfo, m = this.isDragging;
    if (this.cancel(), !m || !c || !r)
      return;
    const { velocity: f } = c;
    this.startAnimation(f);
    const { onDragEnd: h } = this.getProps();
    h && Pe.postRender(() => h(r, c));
  }
  /**
   * @internal
   */
  cancel() {
    this.isDragging = !1;
    const { projection: s, animationState: l } = this.visualElement;
    s && (s.isAnimationBlocked = !1), this.endPanSession();
    const { dragPropagation: r } = this.getProps();
    !r && this.openDragLock && (this.openDragLock(), this.openDragLock = null), l && l.setActive("whileDrag", !1);
  }
  /**
   * Clean up the pan session without modifying other drag state.
   * This is used during unmount to ensure event listeners are removed
   * without affecting projection animations or drag locks.
   * @internal
   */
  endPanSession() {
    this.panSession && this.panSession.end(), this.panSession = void 0;
  }
  updateAxis(s, l, r) {
    const { drag: c } = this.getProps();
    if (!r || !tl(s, c, this.currentDirection))
      return;
    const m = this.getAxisMotionValue(s);
    let f = this.originPoint[s] + r[s];
    this.constraints && this.constraints[s] && (f = fD(f, this.constraints[s], this.elastic[s])), m.set(f);
  }
  resolveConstraints() {
    var m;
    const { dragConstraints: s, dragElastic: l } = this.getProps(), r = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (m = this.visualElement.projection) == null ? void 0 : m.layout, c = this.constraints;
    s && ca(s) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : s && r ? this.constraints = dD(r.layoutBox, s) : this.constraints = !1, this.elastic = gD(l), c !== this.constraints && !ca(s) && r && this.constraints && !this.hasMutatedConstraints && Wt((f) => {
      this.constraints !== !1 && this.getAxisMotionValue(f) && (this.constraints[f] = hD(r.layoutBox[f], this.constraints[f]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: s, onMeasureDragConstraints: l } = this.getProps();
    if (!s || !ca(s))
      return !1;
    const r = s.current;
    wi(r !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.", "drag-constraints-ref");
    const { projection: c } = this.visualElement;
    if (!c || !c.layout)
      return !1;
    c.root && (c.root.scroll = void 0, c.root.updateScroll());
    const m = y2(r, c.root, this.visualElement.getTransformPagePoint());
    let f = mD(c.layout.layoutBox, m);
    if (l) {
      const h = l(b2(f));
      this.hasMutatedConstraints = !!h, h && (f = bb(h));
    }
    return f;
  }
  startAnimation(s) {
    const { drag: l, dragMomentum: r, dragElastic: c, dragTransition: m, dragSnapToOrigin: f, onDragTransitionEnd: h } = this.getProps(), v = this.constraints || {}, g = Wt((x) => {
      if (!tl(x, l, this.currentDirection))
        return;
      let y = v && v[x] || {};
      (f === !0 || f === x) && (y = { min: 0, max: 0 });
      const N = c ? 200 : 1e6, V = c ? 40 : 1e7, T = {
        type: "inertia",
        velocity: r ? s[x] : 0,
        bounceStiffness: N,
        bounceDamping: V,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...m,
        ...y
      };
      return this.startAxisValueAnimation(x, T);
    });
    return Promise.all(g).then(h);
  }
  startAxisValueAnimation(s, l) {
    const r = this.getAxisMotionValue(s);
    return kc(this.visualElement, s), r.start(uf(s, r, 0, l, this.visualElement, !1));
  }
  stopAnimation() {
    Wt((s) => this.getAxisMotionValue(s).stop());
  }
  /**
   * Drag works differently depending on which props are provided.
   *
   * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
   * - Otherwise, we apply the delta to the x/y motion values.
   */
  getAxisMotionValue(s) {
    const l = `_drag${s.toUpperCase()}`, c = this.visualElement.getProps()[l];
    return c || this.visualElement.getValue(s, this.visualElement.latestValues[s] ?? 0);
  }
  snapToCursor(s) {
    Wt((l) => {
      const { drag: r } = this.getProps();
      if (!tl(l, r, this.currentDirection))
        return;
      const { projection: c } = this.visualElement, m = this.getAxisMotionValue(l);
      if (c && c.layout) {
        const { min: f, max: h } = c.layout.layoutBox[l], v = m.get() || 0;
        m.set(s[l] - Me(f, h, 0.5) + v);
      }
    });
  }
  /**
   * When the viewport resizes we want to check if the measured constraints
   * have changed and, if so, reposition the element within those new constraints
   * relative to where it was before the resize.
   */
  scalePositionWithinConstraints() {
    if (!this.visualElement.current)
      return;
    const { drag: s, dragConstraints: l } = this.getProps(), { projection: r } = this.visualElement;
    if (!ca(l) || !r || !this.constraints)
      return;
    this.stopAnimation();
    const c = { x: 0, y: 0 };
    Wt((f) => {
      const h = this.getAxisMotionValue(f);
      if (h && this.constraints !== !1) {
        const v = h.get();
        c[f] = pD({ min: v, max: v }, this.constraints[f]);
      }
    });
    const { transformTemplate: m } = this.visualElement.getProps();
    this.visualElement.current.style.transform = m ? m({}, "") : "none", r.root && r.root.updateScroll(), r.updateLayout(), this.constraints = !1, this.resolveConstraints(), Wt((f) => {
      if (!tl(f, s, null))
        return;
      const h = this.getAxisMotionValue(f), { min: v, max: g } = this.constraints[f];
      h.set(Me(v, g, c[f]));
    }), this.visualElement.render();
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    bD.set(this.visualElement, this);
    const s = this.visualElement.current, l = Ns(s, "pointerdown", (g) => {
      const { drag: x, dragListener: y = !0 } = this.getProps(), N = g.target, V = N !== s && $N(N);
      x && y && !V && this.start(g);
    });
    let r;
    const c = () => {
      const { dragConstraints: g } = this.getProps();
      ca(g) && g.current && (this.constraints = this.resolveRefConstraints(), r || (r = xD(s, g.current, () => this.scalePositionWithinConstraints())));
    }, { projection: m } = this.visualElement, f = m.addEventListener("measure", c);
    m && !m.layout && (m.root && m.root.updateScroll(), m.updateLayout()), Pe.read(c);
    const h = ws(window, "resize", () => this.scalePositionWithinConstraints()), v = m.addEventListener("didUpdate", (({ delta: g, hasLayoutChanged: x }) => {
      this.isDragging && x && (Wt((y) => {
        const N = this.getAxisMotionValue(y);
        N && (this.originPoint[y] += g[y].translate, N.set(N.get() + g[y].translate));
      }), this.visualElement.render());
    }));
    return () => {
      h(), l(), f(), v && v(), r && r();
    };
  }
  getProps() {
    const s = this.visualElement.getProps(), { drag: l = !1, dragDirectionLock: r = !1, dragPropagation: c = !1, dragConstraints: m = !1, dragElastic: f = Uc, dragMomentum: h = !0 } = s;
    return {
      ...s,
      drag: l,
      dragDirectionLock: r,
      dragPropagation: c,
      dragConstraints: m,
      dragElastic: f,
      dragMomentum: h
    };
  }
}
function $0(i) {
  let s = !0;
  return () => {
    if (s) {
      s = !1;
      return;
    }
    i();
  };
}
function xD(i, s, l) {
  const r = a0(i, $0(l)), c = a0(s, $0(l));
  return () => {
    r(), c();
  };
}
function tl(i, s, l) {
  return (s === !0 || s === i) && (l === null || l === i);
}
function yD(i, s = 10) {
  let l = null;
  return Math.abs(i.y) > s ? l = "y" : Math.abs(i.x) > s && (l = "x"), l;
}
class ND extends In {
  constructor(s) {
    super(s), this.removeGroupControls = Ht, this.removeListeners = Ht, this.controls = new vD(s);
  }
  mount() {
    const { dragControls: s } = this.node.getProps();
    s && (this.removeGroupControls = s.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || Ht;
  }
  update() {
    const { dragControls: s } = this.node.getProps(), { dragControls: l } = this.node.prevProps || {};
    s !== l && (this.removeGroupControls(), s && (this.removeGroupControls = s.subscribe(this.controls)));
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners(), this.controls.isDragging || this.controls.endPanSession();
  }
}
const fc = (i) => (s, l) => {
  i && Pe.update(() => i(s, l), !1, !0);
};
class SD extends In {
  constructor() {
    super(...arguments), this.removePointerDownListener = Ht;
  }
  onPointerDown(s) {
    this.session = new Zb(s, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Kb(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: s, onPanStart: l, onPan: r, onPanEnd: c } = this.node.getProps();
    return {
      onSessionStart: fc(s),
      onStart: fc(l),
      onMove: fc(r),
      onEnd: (m, f) => {
        delete this.session, c && Pe.postRender(() => c(m, f));
      }
    };
  }
  mount() {
    this.removePointerDownListener = Ns(this.node.current, "pointerdown", (s) => this.onPointerDown(s));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
let dc = !1;
class DD extends q.Component {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: s, layoutGroup: l, switchLayoutGroup: r, layoutId: c } = this.props, { projection: m } = s;
    m && (l.group && l.group.add(m), r && r.register && c && r.register(m), dc && m.root.didUpdate(), m.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), m.setOptions({
      ...m.options,
      layoutDependency: this.props.layoutDependency,
      onExitComplete: () => this.safeToRemove()
    })), ul.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(s) {
    const { layoutDependency: l, visualElement: r, drag: c, isPresent: m } = this.props, { projection: f } = r;
    return f && (f.isPresent = m, s.layoutDependency !== l && f.setOptions({
      ...f.options,
      layoutDependency: l
    }), dc = !0, c || s.layoutDependency !== l || l === void 0 || s.isPresent !== m ? f.willUpdate() : this.safeToRemove(), s.isPresent !== m && (m ? f.promote() : f.relegate() || Pe.postRender(() => {
      const h = f.getStack();
      (!h || !h.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { visualElement: s, layoutAnchor: l } = this.props, { projection: r } = s;
    r && (r.options.layoutAnchor = l, r.root.didUpdate(), df.postRender(() => {
      !r.currentAnimation && r.isLead() && this.safeToRemove();
    }));
  }
  componentWillUnmount() {
    const { visualElement: s, layoutGroup: l, switchLayoutGroup: r } = this.props, { projection: c } = s;
    dc = !0, c && (c.scheduleCheckAfterUnmount(), l && l.group && l.group.remove(c), r && r.deregister && r.deregister(c));
  }
  safeToRemove() {
    const { safeToRemove: s } = this.props;
    s && s();
  }
  render() {
    return null;
  }
}
function $b(i) {
  const [s, l] = Ub(), r = q.useContext(Kc);
  return Sn.jsx(DD, { ...i, layoutGroup: r, switchLayoutGroup: q.useContext(Fb), isPresent: s, safeToRemove: l });
}
const ED = {
  pan: {
    Feature: SD
  },
  drag: {
    Feature: ND,
    ProjectionNode: Ob,
    MeasureLayout: $b
  }
};
function W0(i, s, l) {
  const { props: r } = i;
  i.animationState && r.whileHover && i.animationState.setActive("whileHover", l === "Start");
  const c = "onHover" + l, m = r[c];
  m && Pe.postRender(() => m(s, Bs(s)));
}
class wD extends In {
  mount() {
    const { current: s } = this.node;
    s && (this.unmount = QN(s, (l, r) => (W0(this.node, r, "Start"), (c) => W0(this.node, c, "End"))));
  }
  unmount() {
  }
}
class VD extends In {
  constructor() {
    super(...arguments), this.isActive = !1;
  }
  onFocus() {
    let s = !1;
    try {
      s = this.node.current.matches(":focus-visible");
    } catch {
      s = !0;
    }
    !s || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0);
  }
  onBlur() {
    !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1);
  }
  mount() {
    this.unmount = Ts(ws(this.node.current, "focus", () => this.onFocus()), ws(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
function I0(i, s, l) {
  const { props: r } = i;
  if (i.current instanceof HTMLButtonElement && i.current.disabled)
    return;
  i.animationState && r.whileTap && i.animationState.setActive("whileTap", l === "Start");
  const c = "onTap" + (l === "End" ? "" : l), m = r[c];
  m && Pe.postRender(() => m(s, Bs(s)));
}
class TD extends In {
  mount() {
    const { current: s } = this.node;
    if (!s)
      return;
    const { globalTapTarget: l, propagate: r } = this.node.props;
    this.unmount = IN(s, (c, m) => (I0(this.node, m, "Start"), (f, { success: h }) => I0(this.node, f, h ? "End" : "Cancel")), {
      useGlobalTarget: l,
      stopPropagation: (r == null ? void 0 : r.tap) === !1
    });
  }
  unmount() {
  }
}
const Lc = /* @__PURE__ */ new WeakMap(), mc = /* @__PURE__ */ new WeakMap(), CD = (i) => {
  const s = Lc.get(i.target);
  s && s(i);
}, kD = (i) => {
  i.forEach(CD);
};
function BD({ root: i, ...s }) {
  const l = i || document;
  mc.has(l) || mc.set(l, {});
  const r = mc.get(l), c = JSON.stringify(s);
  return r[c] || (r[c] = new IntersectionObserver(kD, { root: i, ...s })), r[c];
}
function AD(i, s, l) {
  const r = BD(s);
  return Lc.set(i, l), r.observe(i), () => {
    Lc.delete(i), r.unobserve(i);
  };
}
const jD = {
  some: 0,
  all: 1
};
class MD extends In {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    var v;
    (v = this.stopObserver) == null || v.call(this);
    const { viewport: s = {} } = this.node.getProps(), { root: l, margin: r, amount: c = "some", once: m } = s, f = {
      root: l ? l.current : void 0,
      rootMargin: r,
      threshold: typeof c == "number" ? c : jD[c]
    }, h = (g) => {
      const { isIntersecting: x } = g;
      if (this.isInView === x || (this.isInView = x, m && !x && this.hasEnteredView))
        return;
      x && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", x);
      const { onViewportEnter: y, onViewportLeave: N } = this.node.getProps(), V = x ? y : N;
      V && V(g);
    };
    this.stopObserver = AD(this.node.current, f, h);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: s, prevProps: l } = this.node;
    ["amount", "margin", "root"].some(PD(s, l)) && this.startObserver();
  }
  unmount() {
    var s;
    (s = this.stopObserver) == null || s.call(this), this.hasEnteredView = !1, this.isInView = !1;
  }
}
function PD({ viewport: i = {} }, { viewport: s = {} } = {}) {
  return (l) => i[l] !== s[l];
}
const zD = {
  inView: {
    Feature: MD
  },
  tap: {
    Feature: TD
  },
  focus: {
    Feature: VD
  },
  hover: {
    Feature: wD
  }
}, RD = {
  layout: {
    ProjectionNode: Ob,
    MeasureLayout: $b
  }
}, _D = {
  ...oD,
  ...zD,
  ...ED,
  ...RD
}, Oe = /* @__PURE__ */ tD(_D, nD);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const OD = (i) => i.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Wb = (...i) => i.filter((s, l, r) => !!s && s.trim() !== "" && r.indexOf(s) === l).join(" ").trim();
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var UD = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const LD = q.forwardRef(
  ({
    color: i = "currentColor",
    size: s = 24,
    strokeWidth: l = 2,
    absoluteStrokeWidth: r,
    className: c = "",
    children: m,
    iconNode: f,
    ...h
  }, v) => q.createElement(
    "svg",
    {
      ref: v,
      ...UD,
      width: s,
      height: s,
      stroke: i,
      strokeWidth: r ? Number(l) * 24 / Number(s) : l,
      className: Wb("lucide", c),
      ...h
    },
    [
      ...f.map(([g, x]) => q.createElement(g, x)),
      ...Array.isArray(m) ? m : [m]
    ]
  )
);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ne = (i, s) => {
  const l = q.forwardRef(
    ({ className: r, ...c }, m) => q.createElement(LD, {
      ref: m,
      iconNode: s,
      className: Wb(`lucide-${OD(i)}`, r),
      ...c
    })
  );
  return l.displayName = `${i}`, l;
};
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const HD = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
], pa = Ne("ArrowRight", HD);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qD = [
  [
    "path",
    {
      d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
      key: "1yiouv"
    }
  ],
  ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }]
], eg = Ne("Award", qD);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const GD = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["path", { d: "M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8", key: "3spt84" }],
  ["path", { d: "M3 10h18", key: "8toen8" }],
  ["path", { d: "M16 19h6", key: "xwg31i" }],
  ["path", { d: "M19 16v6", key: "tddt3s" }]
], YD = Ne("CalendarPlus", GD);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const XD = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
], ha = Ne("Calendar", XD);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const FD = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], Ib = Ne("ChevronDown", FD);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const QD = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], KD = Ne("ChevronLeft", QD);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ZD = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], ev = Ne("ChevronRight", ZD);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const JD = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
], pc = Ne("CircleAlert", JD);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $D = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
], WD = Ne("CircleCheck", $D);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ID = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }]
], tg = Ne("CircleX", ID);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const e5 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]
], tv = Ne("Clock", e5);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const t5 = [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "7 10 12 15 17 10", key: "2ggqvy" }],
  ["line", { x1: "12", x2: "12", y1: "15", y2: "3", key: "1vk2je" }]
], Nl = Ne("Download", t5);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const n5 = [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
], i5 = Ne("ExternalLink", n5);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const a5 = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
], hc = Ne("FileText", a5);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const s5 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }],
  ["path", { d: "M2 12h20", key: "9i4pu4" }]
], o5 = Ne("Globe", s5);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const l5 = [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }],
  ["path", { d: "M12 7v5l4 2", key: "1fdv2h" }]
], r5 = Ne("History", l5);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const u5 = [
  ["path", { d: "m5 8 6 6", key: "1wu5hv" }],
  ["path", { d: "m4 14 6-6 2-3", key: "1k1g8d" }],
  ["path", { d: "M2 5h12", key: "or177f" }],
  ["path", { d: "M7 2h1", key: "1t2jsx" }],
  ["path", { d: "m22 22-5-10-5 10", key: "don7ne" }],
  ["path", { d: "M14 18h6", key: "1m8k6r" }]
], nv = Ne("Languages", u5);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const c5 = [
  [
    "path",
    {
      d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
      key: "c2jq9f"
    }
  ],
  ["rect", { width: "4", height: "12", x: "2", y: "9", key: "mk3on5" }],
  ["circle", { cx: "4", cy: "4", r: "2", key: "bt5ra8" }]
], f5 = Ne("Linkedin", c5);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const d5 = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]], m5 = Ne("LoaderCircle", d5);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const p5 = [
  ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" }],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }]
], h5 = Ne("Mail", p5);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const g5 = [
  ["polyline", { points: "15 3 21 3 21 9", key: "mznyad" }],
  ["polyline", { points: "9 21 3 21 3 15", key: "1avn1i" }],
  ["line", { x1: "21", x2: "14", y1: "3", y2: "10", key: "ota7mn" }],
  ["line", { x1: "3", x2: "10", y1: "21", y2: "14", key: "1atl0r" }]
], b5 = Ne("Maximize2", g5);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const v5 = [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }]
], x5 = Ne("Menu", v5);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const y5 = [
  ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }]
], Hc = Ne("MessageSquare", y5);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const N5 = [
  ["polyline", { points: "4 14 10 14 10 20", key: "11kfnr" }],
  ["polyline", { points: "20 10 14 10 14 4", key: "rlmsce" }],
  ["line", { x1: "14", x2: "21", y1: "10", y2: "3", key: "o5lafz" }],
  ["line", { x1: "3", x2: "10", y1: "21", y2: "14", key: "1atl0r" }]
], S5 = Ne("Minimize2", N5);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const D5 = [
  ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
  ["path", { d: "M8 16H3v5", key: "1cv678" }]
], iv = Ne("RefreshCw", D5);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const E5 = [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
], ng = Ne("RotateCcw", E5);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const w5 = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
], V5 = Ne("Search", w5);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const T5 = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
], qc = Ne("ShieldCheck", T5);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const C5 = [
  ["path", { d: "M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z", key: "hou9p0" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M16 10a4 4 0 0 1-8 0", key: "1ltviw" }]
], ig = Ne("ShoppingBag", C5);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const k5 = [
  [
    "path",
    {
      d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
      key: "4pj2yx"
    }
  ],
  ["path", { d: "M20 3v4", key: "1olli1" }],
  ["path", { d: "M22 5h-4", key: "1gvqau" }],
  ["path", { d: "M4 17v2", key: "vumght" }],
  ["path", { d: "M5 18H3", key: "zchphs" }]
], ag = Ne("Sparkles", k5);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const B5 = [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
], A5 = Ne("User", B5);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const j5 = [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75", key: "1da9ce" }]
], Gc = Ne("Users", j5);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const M5 = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], av = Ne("X", M5), P5 = (i) => {
  if (!i) return "";
  try {
    const s = i.split("-");
    if (s.length === 3) {
      const l = parseInt(s[0], 10), r = parseInt(s[1], 10) - 1, c = parseInt(s[2], 10), m = new Date(l, r, c);
      if (!isNaN(m.getTime()))
        return m.toLocaleDateString("en-US", {
          weekday: "short",
          month: "short",
          day: "numeric",
          year: "numeric"
        });
    }
    return i;
  } catch {
    return i;
  }
}, z5 = () => {
  var L;
  const [i, s] = q.useState(""), [l, r] = q.useState(""), [c, m] = q.useState(!1), [f, h] = q.useState(null), [v, g] = q.useState(null), [x, y] = q.useState(null), [N, V] = q.useState("a4-portrait"), [T, z] = q.useState(!1);
  q.useEffect(() => {
    const H = (X) => {
      X.key === "Escape" && T && z(!1);
    };
    return window.addEventListener("keydown", H), () => window.removeEventListener("keydown", H);
  }, [T]);
  const A = async (H) => {
    if (H.preventDefault(), c) return;
    h(null), g(null);
    const X = i.trim(), ee = l.trim();
    if (!X || !ee) {
      h("Please enter both your Full Name and Certificate ID.");
      return;
    }
    m(!0), y(null);
    const F = `certificate_id=${encodeURIComponent(ee)}&full_name=${encodeURIComponent(X)}`;
    try {
      let Y = null;
      try {
        const J = await fetch(`/wp-json/certificates/v1/verify?${F}`, {
          method: "GET",
          headers: {
            Accept: "application/json"
          }
        });
        (J.headers.get("content-type") || "").includes("application/json") && (Y = await J.json());
      } catch (J) {
        console.warn("Relative verification request failed, trying remote fallback:", J);
      }
      if (!Y) {
        const J = await fetch(`https://chelsongordon.com/wp-json/certificates/v1/verify?${F}`, {
          method: "GET",
          headers: {
            Accept: "application/json"
          }
        });
        if ((J.headers.get("content-type") || "").includes("application/json"))
          Y = await J.json();
        else
          throw new Error("Received non-JSON response from verification server");
      }
      Y && Y.verified && Y.certificate ? y({
        verified: !0,
        certificate: Y.certificate
      }) : y({
        verified: !1,
        message: (Y == null ? void 0 : Y.message) || "No matching certificate was found for the provided details."
      });
    } catch (Y) {
      console.error("Certificate verification request failed:", Y), g("Unable to connect to the verification server. Please check your network connection and try again.");
    } finally {
      m(!1);
    }
  }, _ = () => {
    s(""), r(""), h(null), g(null), y(null);
  }, G = (H) => {
    const X = (H || "").toLowerCase();
    return X === "valid" ? /* @__PURE__ */ p.jsxDEV("span", { className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-200/80", children: [
      /* @__PURE__ */ p.jsxDEV(WD, { className: "w-3.5 h-3.5 text-emerald-600 shrink-0" }, void 0, !1, {
        fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
        lineNumber: 176,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ p.jsxDEV("span", { children: "Valid Certificate" }, void 0, !1, {
        fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
        lineNumber: 177,
        columnNumber: 11
      }, void 0)
    ] }, void 0, !0, {
      fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
      lineNumber: 175,
      columnNumber: 9
    }, void 0) : X === "revoked" ? /* @__PURE__ */ p.jsxDEV("span", { className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-rose-100 text-rose-800 border border-rose-200/80", children: [
      /* @__PURE__ */ p.jsxDEV(tg, { className: "w-3.5 h-3.5 text-rose-600 shrink-0" }, void 0, !1, {
        fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
        lineNumber: 185,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ p.jsxDEV("span", { children: "Certificate Revoked" }, void 0, !1, {
        fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
        lineNumber: 186,
        columnNumber: 11
      }, void 0)
    ] }, void 0, !0, {
      fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
      lineNumber: 184,
      columnNumber: 9
    }, void 0) : X === "expired" ? /* @__PURE__ */ p.jsxDEV("span", { className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800 border border-amber-200/80", children: [
      /* @__PURE__ */ p.jsxDEV(pc, { className: "w-3.5 h-3.5 text-amber-600 shrink-0" }, void 0, !1, {
        fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
        lineNumber: 194,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ p.jsxDEV("span", { children: "Certificate Expired" }, void 0, !1, {
        fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
        lineNumber: 195,
        columnNumber: 11
      }, void 0)
    ] }, void 0, !0, {
      fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
      lineNumber: 193,
      columnNumber: 9
    }, void 0) : /* @__PURE__ */ p.jsxDEV("span", { className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-800 border border-slate-200", children: [
      /* @__PURE__ */ p.jsxDEV(qc, { className: "w-3.5 h-3.5 text-slate-500 shrink-0" }, void 0, !1, {
        fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
        lineNumber: 203,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ p.jsxDEV("span", { className: "capitalize", children: H }, void 0, !1, {
        fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
        lineNumber: 204,
        columnNumber: 9
      }, void 0)
    ] }, void 0, !0, {
      fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
      lineNumber: 202,
      columnNumber: 7
    }, void 0);
  };
  return /* @__PURE__ */ p.jsxDEV(
    "div",
    {
      id: "certificate-verification-section",
      className: "mt-8 sm:mt-12 bg-white rounded-[26px] sm:rounded-[28px] p-6 sm:p-8 lg:p-10 border border-slate-200/80 shadow-sm relative overflow-hidden scroll-mt-28 sm:scroll-mt-36",
      children: [
        /* @__PURE__ */ p.jsxDEV(
          "div",
          {
            className: "absolute -top-24 -right-24 w-80 h-80 bg-[#0072CE]/8 rounded-full blur-3xl pointer-events-none",
            "aria-hidden": "true"
          },
          void 0,
          !1,
          {
            fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
            lineNumber: 215,
            columnNumber: 7
          },
          void 0
        ),
        /* @__PURE__ */ p.jsxDEV("div", { className: "mb-6 sm:mb-8 pb-5 sm:pb-6 border-b border-slate-100 relative z-10", children: [
          /* @__PURE__ */ p.jsxDEV("div", { className: "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0072CE]/10 text-[#0072CE] text-xs font-bold tracking-wider uppercase mb-3", children: [
            /* @__PURE__ */ p.jsxDEV(qc, { className: "w-3.5 h-3.5 text-[#0072CE]" }, void 0, !1, {
              fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
              lineNumber: 223,
              columnNumber: 11
            }, void 0),
            /* @__PURE__ */ p.jsxDEV("span", { children: "Certificate Verification" }, void 0, !1, {
              fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
              lineNumber: 224,
              columnNumber: 11
            }, void 0)
          ] }, void 0, !0, {
            fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
            lineNumber: 222,
            columnNumber: 9
          }, void 0),
          /* @__PURE__ */ p.jsxDEV("h2", { className: "text-2xl sm:text-3xl lg:text-[32px] font-black text-[#042F61] tracking-tight leading-tight", children: "Verify your Certificate" }, void 0, !1, {
            fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
            lineNumber: 226,
            columnNumber: 9
          }, void 0),
          /* @__PURE__ */ p.jsxDEV("p", { className: "text-sm sm:text-base text-slate-600 max-w-2xl mt-2 leading-relaxed", children: "Verify the authenticity of your Professional Development Certificate by entering your full name and unique certificate ID provided by our team." }, void 0, !1, {
            fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
            lineNumber: 229,
            columnNumber: 9
          }, void 0)
        ] }, void 0, !0, {
          fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
          lineNumber: 221,
          columnNumber: 7
        }, void 0),
        /* @__PURE__ */ p.jsxDEV("form", { onSubmit: A, className: "relative z-10", children: [
          /* @__PURE__ */ p.jsxDEV("div", { className: "grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-5 items-end", children: [
            /* @__PURE__ */ p.jsxDEV("div", { className: "sm:col-span-5", children: [
              /* @__PURE__ */ p.jsxDEV(
                "label",
                {
                  htmlFor: "verify-full-name",
                  className: "block text-xs font-bold uppercase tracking-wider text-[#042F61] mb-2",
                  children: "Full Name"
                },
                void 0,
                !1,
                {
                  fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                  lineNumber: 240,
                  columnNumber: 13
                },
                void 0
              ),
              /* @__PURE__ */ p.jsxDEV("div", { className: "relative", children: [
                /* @__PURE__ */ p.jsxDEV("div", { className: "absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400", children: /* @__PURE__ */ p.jsxDEV(A5, { className: "w-4 h-4" }, void 0, !1, {
                  fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                  lineNumber: 248,
                  columnNumber: 17
                }, void 0) }, void 0, !1, {
                  fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                  lineNumber: 247,
                  columnNumber: 15
                }, void 0),
                /* @__PURE__ */ p.jsxDEV(
                  "input",
                  {
                    id: "verify-full-name",
                    type: "text",
                    value: i,
                    onChange: (H) => {
                      s(H.target.value), f && h(null);
                    },
                    disabled: c,
                    placeholder: "e.g. John Smith",
                    className: "w-full pl-10 pr-4 py-3 bg-slate-50 hover:bg-white focus:bg-white rounded-xl border border-slate-200 focus:border-[#0072CE] focus:ring-2 focus:ring-[#0072CE]/20 text-[#042F61] placeholder-slate-400 text-sm font-medium transition-all outline-hidden disabled:opacity-60 disabled:cursor-not-allowed"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                    lineNumber: 250,
                    columnNumber: 15
                  },
                  void 0
                )
              ] }, void 0, !0, {
                fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                lineNumber: 246,
                columnNumber: 13
              }, void 0)
            ] }, void 0, !0, {
              fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
              lineNumber: 239,
              columnNumber: 11
            }, void 0),
            /* @__PURE__ */ p.jsxDEV("div", { className: "sm:col-span-4", children: [
              /* @__PURE__ */ p.jsxDEV(
                "label",
                {
                  htmlFor: "verify-certificate-id",
                  className: "block text-xs font-bold uppercase tracking-wider text-[#042F61] mb-2",
                  children: "Certificate ID"
                },
                void 0,
                !1,
                {
                  fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                  lineNumber: 267,
                  columnNumber: 13
                },
                void 0
              ),
              /* @__PURE__ */ p.jsxDEV("div", { className: "relative", children: [
                /* @__PURE__ */ p.jsxDEV("div", { className: "absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400", children: /* @__PURE__ */ p.jsxDEV(eg, { className: "w-4 h-4" }, void 0, !1, {
                  fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                  lineNumber: 275,
                  columnNumber: 17
                }, void 0) }, void 0, !1, {
                  fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                  lineNumber: 274,
                  columnNumber: 15
                }, void 0),
                /* @__PURE__ */ p.jsxDEV(
                  "input",
                  {
                    id: "verify-certificate-id",
                    type: "text",
                    value: l,
                    onChange: (H) => {
                      r(H.target.value), f && h(null);
                    },
                    disabled: c,
                    placeholder: "e.g. CERT-12345",
                    className: "w-full pl-10 pr-4 py-3 bg-slate-50 hover:bg-white focus:bg-white rounded-xl border border-slate-200 focus:border-[#0072CE] focus:ring-2 focus:ring-[#0072CE]/20 text-[#042F61] placeholder-slate-400 text-sm font-medium transition-all outline-hidden disabled:opacity-60 disabled:cursor-not-allowed"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                    lineNumber: 277,
                    columnNumber: 15
                  },
                  void 0
                )
              ] }, void 0, !0, {
                fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                lineNumber: 273,
                columnNumber: 13
              }, void 0)
            ] }, void 0, !0, {
              fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
              lineNumber: 266,
              columnNumber: 11
            }, void 0),
            /* @__PURE__ */ p.jsxDEV("div", { className: "sm:col-span-3", children: /* @__PURE__ */ p.jsxDEV(
              "button",
              {
                type: "submit",
                disabled: c,
                className: "w-full bg-[#FDB913] hover:bg-[#0072CE] text-[#042F61] hover:text-white text-sm font-black tracking-wider uppercase py-3.5 px-5 rounded-xl shadow-md transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed select-none group",
                children: c ? /* @__PURE__ */ p.jsxDEV(p.Fragment, { children: [
                  /* @__PURE__ */ p.jsxDEV(m5, { className: "w-4 h-4 animate-spin text-[#042F61]" }, void 0, !1, {
                    fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                    lineNumber: 301,
                    columnNumber: 19
                  }, void 0),
                  /* @__PURE__ */ p.jsxDEV("span", { children: "Verifying..." }, void 0, !1, {
                    fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                    lineNumber: 302,
                    columnNumber: 19
                  }, void 0)
                ] }, void 0, !0, {
                  fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                  lineNumber: 300,
                  columnNumber: 17
                }, void 0) : /* @__PURE__ */ p.jsxDEV(p.Fragment, { children: [
                  /* @__PURE__ */ p.jsxDEV(V5, { className: "w-4 h-4 transition-transform duration-200 group-hover:scale-110" }, void 0, !1, {
                    fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                    lineNumber: 306,
                    columnNumber: 19
                  }, void 0),
                  /* @__PURE__ */ p.jsxDEV("span", { children: "Verify" }, void 0, !1, {
                    fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                    lineNumber: 307,
                    columnNumber: 19
                  }, void 0)
                ] }, void 0, !0, {
                  fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                  lineNumber: 305,
                  columnNumber: 17
                }, void 0)
              },
              void 0,
              !1,
              {
                fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                lineNumber: 294,
                columnNumber: 13
              },
              void 0
            ) }, void 0, !1, {
              fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
              lineNumber: 293,
              columnNumber: 11
            }, void 0)
          ] }, void 0, !0, {
            fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
            lineNumber: 236,
            columnNumber: 9
          }, void 0),
          f && /* @__PURE__ */ p.jsxDEV("div", { className: "mt-3.5 p-3 rounded-xl bg-amber-50 border border-amber-200/80 text-amber-800 text-xs font-semibold flex items-center gap-2 animate-fadeIn", children: [
            /* @__PURE__ */ p.jsxDEV(pc, { className: "w-4 h-4 text-amber-600 shrink-0" }, void 0, !1, {
              fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
              lineNumber: 318,
              columnNumber: 13
            }, void 0),
            /* @__PURE__ */ p.jsxDEV("span", { children: f }, void 0, !1, {
              fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
              lineNumber: 319,
              columnNumber: 13
            }, void 0)
          ] }, void 0, !0, {
            fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
            lineNumber: 317,
            columnNumber: 11
          }, void 0),
          v && /* @__PURE__ */ p.jsxDEV("div", { className: "mt-3.5 p-3 rounded-xl bg-rose-50 border border-rose-200/80 text-rose-800 text-xs font-semibold flex items-center gap-2 animate-fadeIn", children: [
            /* @__PURE__ */ p.jsxDEV(pc, { className: "w-4 h-4 text-rose-600 shrink-0" }, void 0, !1, {
              fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
              lineNumber: 326,
              columnNumber: 13
            }, void 0),
            /* @__PURE__ */ p.jsxDEV("span", { children: v }, void 0, !1, {
              fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
              lineNumber: 327,
              columnNumber: 13
            }, void 0)
          ] }, void 0, !0, {
            fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
            lineNumber: 325,
            columnNumber: 11
          }, void 0)
        ] }, void 0, !0, {
          fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
          lineNumber: 235,
          columnNumber: 7
        }, void 0),
        x && /* @__PURE__ */ p.jsxDEV("div", { className: "mt-8 pt-7 border-t border-slate-100 relative z-10", children: x.verified && x.certificate ? (
          /* Successful Verification Result */
          /* @__PURE__ */ p.jsxDEV("div", { className: "space-y-6", children: [
            /* @__PURE__ */ p.jsxDEV("div", { className: "bg-[#E1EFFB]/70 border border-[#B8DCF8] rounded-2xl p-5 sm:p-6 relative overflow-hidden", children: [
              /* @__PURE__ */ p.jsxDEV("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4", children: [
                /* @__PURE__ */ p.jsxDEV("div", { className: "flex items-start gap-3.5", children: [
                  /* @__PURE__ */ p.jsxDEV("div", { className: "w-10 h-10 rounded-xl bg-[#0072CE] text-white flex items-center justify-center shrink-0 shadow-sm mt-0.5", children: /* @__PURE__ */ p.jsxDEV(eg, { className: "w-5 h-5" }, void 0, !1, {
                    fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                    lineNumber: 344,
                    columnNumber: 23
                  }, void 0) }, void 0, !1, {
                    fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                    lineNumber: 343,
                    columnNumber: 21
                  }, void 0),
                  /* @__PURE__ */ p.jsxDEV("div", { children: [
                    /* @__PURE__ */ p.jsxDEV("div", { className: "flex items-center gap-2.5 flex-wrap", children: G(x.certificate.status) }, void 0, !1, {
                      fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                      lineNumber: 347,
                      columnNumber: 23
                    }, void 0),
                    /* @__PURE__ */ p.jsxDEV("h3", { className: "text-xl sm:text-2xl font-black text-[#042F61] tracking-tight mt-1", children: x.certificate.full_name }, void 0, !1, {
                      fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                      lineNumber: 350,
                      columnNumber: 23
                    }, void 0)
                  ] }, void 0, !0, {
                    fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                    lineNumber: 346,
                    columnNumber: 21
                  }, void 0)
                ] }, void 0, !0, {
                  fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                  lineNumber: 342,
                  columnNumber: 19
                }, void 0),
                /* @__PURE__ */ p.jsxDEV(
                  "button",
                  {
                    type: "button",
                    onClick: _,
                    className: "inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-[#042F61] bg-white border border-slate-200 hover:border-[#0072CE] hover:text-[#0072CE] shadow-xs transition-colors self-start sm:self-center cursor-pointer",
                    children: [
                      /* @__PURE__ */ p.jsxDEV(ng, { className: "w-3.5 h-3.5" }, void 0, !1, {
                        fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                        lineNumber: 361,
                        columnNumber: 21
                      }, void 0),
                      /* @__PURE__ */ p.jsxDEV("span", { children: "Check Another" }, void 0, !1, {
                        fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                        lineNumber: 362,
                        columnNumber: 21
                      }, void 0)
                    ]
                  },
                  void 0,
                  !0,
                  {
                    fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                    lineNumber: 356,
                    columnNumber: 19
                  },
                  void 0
                )
              ] }, void 0, !0, {
                fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                lineNumber: 341,
                columnNumber: 17
              }, void 0),
              /* @__PURE__ */ p.jsxDEV("div", { className: "grid grid-cols-2 gap-3 mt-5 pt-4 border-t border-[#B8DCF8]/60", children: [
                /* @__PURE__ */ p.jsxDEV("div", { className: "bg-white/80 rounded-xl p-3 border border-white/60", children: [
                  /* @__PURE__ */ p.jsxDEV("span", { className: "text-[10px] uppercase font-bold text-slate-400 block tracking-wider", children: "Certificate ID" }, void 0, !1, {
                    fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                    lineNumber: 369,
                    columnNumber: 21
                  }, void 0),
                  /* @__PURE__ */ p.jsxDEV("span", { className: "text-xs sm:text-sm font-black text-[#042F61] font-mono mt-0.5 block truncate", children: x.certificate.certificate_id }, void 0, !1, {
                    fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                    lineNumber: 372,
                    columnNumber: 21
                  }, void 0)
                ] }, void 0, !0, {
                  fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                  lineNumber: 368,
                  columnNumber: 19
                }, void 0),
                /* @__PURE__ */ p.jsxDEV("div", { className: "bg-white/80 rounded-xl p-3 border border-white/60", children: [
                  /* @__PURE__ */ p.jsxDEV("span", { className: "text-[10px] uppercase font-bold text-slate-400 block tracking-wider", children: "Issue Date" }, void 0, !1, {
                    fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                    lineNumber: 378,
                    columnNumber: 21
                  }, void 0),
                  /* @__PURE__ */ p.jsxDEV("span", { className: "text-xs sm:text-sm font-bold text-[#042F61] mt-0.5 flex items-center gap-1.5", children: [
                    /* @__PURE__ */ p.jsxDEV(ha, { className: "w-3.5 h-3.5 text-[#0072CE] shrink-0" }, void 0, !1, {
                      fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                      lineNumber: 382,
                      columnNumber: 23
                    }, void 0),
                    /* @__PURE__ */ p.jsxDEV("span", { className: "truncate", children: P5(x.certificate.issue_date) }, void 0, !1, {
                      fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                      lineNumber: 383,
                      columnNumber: 23
                    }, void 0)
                  ] }, void 0, !0, {
                    fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                    lineNumber: 381,
                    columnNumber: 21
                  }, void 0)
                ] }, void 0, !0, {
                  fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                  lineNumber: 377,
                  columnNumber: 19
                }, void 0),
                /* @__PURE__ */ p.jsxDEV("div", { className: "col-span-2 bg-white/80 rounded-xl p-3 border border-white/60", children: [
                  /* @__PURE__ */ p.jsxDEV("span", { className: "text-[10px] uppercase font-bold text-slate-400 block tracking-wider", children: "Session Name" }, void 0, !1, {
                    fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                    lineNumber: 388,
                    columnNumber: 21
                  }, void 0),
                  /* @__PURE__ */ p.jsxDEV("span", { className: "text-xs sm:text-sm font-bold text-[#042F61] mt-0.5 block truncate", title: x.certificate.session_name, children: x.certificate.session_name }, void 0, !1, {
                    fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                    lineNumber: 391,
                    columnNumber: 21
                  }, void 0)
                ] }, void 0, !0, {
                  fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                  lineNumber: 387,
                  columnNumber: 19
                }, void 0)
              ] }, void 0, !0, {
                fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                lineNumber: 367,
                columnNumber: 17
              }, void 0)
            ] }, void 0, !0, {
              fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
              lineNumber: 340,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ p.jsxDEV("div", { className: "bg-slate-50 border border-slate-200/80 rounded-2xl p-4 sm:p-6", children: [
              /* @__PURE__ */ p.jsxDEV("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4", children: [
                /* @__PURE__ */ p.jsxDEV("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ p.jsxDEV("div", { className: "w-7 h-7 rounded-lg bg-[#0072CE]/10 flex items-center justify-center text-[#0072CE]", children: /* @__PURE__ */ p.jsxDEV(hc, { className: "w-4 h-4" }, void 0, !1, {
                    fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                    lineNumber: 403,
                    columnNumber: 23
                  }, void 0) }, void 0, !1, {
                    fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                    lineNumber: 402,
                    columnNumber: 21
                  }, void 0),
                  /* @__PURE__ */ p.jsxDEV("div", { children: /* @__PURE__ */ p.jsxDEV("h4", { className: "text-sm font-bold text-[#042F61]", children: "Verified Certificate" }, void 0, !1, {
                    fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                    lineNumber: 406,
                    columnNumber: 23
                  }, void 0) }, void 0, !1, {
                    fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                    lineNumber: 405,
                    columnNumber: 21
                  }, void 0)
                ] }, void 0, !0, {
                  fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                  lineNumber: 401,
                  columnNumber: 19
                }, void 0),
                x.certificate.certificate_url && /* @__PURE__ */ p.jsxDEV("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ p.jsxDEV(
                    "a",
                    {
                      href: x.certificate.certificate_url,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      download: !0,
                      className: "inline-flex items-center justify-center gap-1.5 bg-[#0072CE] hover:bg-[#042F61] text-white text-xs font-bold py-2.5 px-4 rounded-xl shadow-xs transition-colors",
                      children: [
                        /* @__PURE__ */ p.jsxDEV(Nl, { className: "w-3.5 h-3.5" }, void 0, !1, {
                          fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                          lineNumber: 422,
                          columnNumber: 25
                        }, void 0),
                        /* @__PURE__ */ p.jsxDEV("span", { children: "Download PDF" }, void 0, !1, {
                          fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                          lineNumber: 423,
                          columnNumber: 25
                        }, void 0)
                      ]
                    },
                    void 0,
                    !0,
                    {
                      fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                      lineNumber: 415,
                      columnNumber: 23
                    },
                    void 0
                  ),
                  /* @__PURE__ */ p.jsxDEV(
                    "a",
                    {
                      href: x.certificate.certificate_url,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "inline-flex items-center justify-center gap-1.5 bg-white hover:bg-slate-100 text-[#042F61] border border-slate-300 text-xs font-bold py-2.5 px-3.5 rounded-xl shadow-xs transition-colors",
                      title: "Open Certificate in new tab",
                      children: [
                        /* @__PURE__ */ p.jsxDEV(i5, { className: "w-3.5 h-3.5" }, void 0, !1, {
                          fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                          lineNumber: 432,
                          columnNumber: 25
                        }, void 0),
                        /* @__PURE__ */ p.jsxDEV("span", { className: "hidden sm:inline", children: "Open" }, void 0, !1, {
                          fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                          lineNumber: 433,
                          columnNumber: 25
                        }, void 0)
                      ]
                    },
                    void 0,
                    !0,
                    {
                      fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                      lineNumber: 425,
                      columnNumber: 23
                    },
                    void 0
                  )
                ] }, void 0, !0, {
                  fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                  lineNumber: 414,
                  columnNumber: 21
                }, void 0)
              ] }, void 0, !0, {
                fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                lineNumber: 400,
                columnNumber: 17
              }, void 0),
              x.certificate.certificate_url && /* @__PURE__ */ p.jsxDEV("div", { className: "flex flex-wrap items-center justify-between gap-3 mb-3.5 pb-3 border-b border-slate-200/80", children: [
                /* @__PURE__ */ p.jsxDEV("div", { className: "flex items-center gap-1 bg-slate-200/70 p-1 rounded-xl", children: [
                  /* @__PURE__ */ p.jsxDEV(
                    "button",
                    {
                      type: "button",
                      onClick: () => V("a4-portrait"),
                      className: `px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${N === "a4-portrait" ? "bg-white text-[#042F61] shadow-xs" : "text-slate-600 hover:text-[#042F61]"}`,
                      title: "Standard A4 Portrait ratio (210 × 297 mm)",
                      children: "A4 Portrait"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                      lineNumber: 443,
                      columnNumber: 23
                    },
                    void 0
                  ),
                  /* @__PURE__ */ p.jsxDEV(
                    "button",
                    {
                      type: "button",
                      onClick: () => V("a4-landscape"),
                      className: `px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${N === "a4-landscape" ? "bg-white text-[#042F61] shadow-xs" : "text-slate-600 hover:text-[#042F61]"}`,
                      title: "Standard A4 Landscape ratio (297 × 210 mm)",
                      children: "A4 Landscape"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                      lineNumber: 455,
                      columnNumber: 23
                    },
                    void 0
                  ),
                  /* @__PURE__ */ p.jsxDEV(
                    "button",
                    {
                      type: "button",
                      onClick: () => V("dynamic"),
                      className: `px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${N === "dynamic" ? "bg-white text-[#042F61] shadow-xs" : "text-slate-600 hover:text-[#042F61]"}`,
                      title: "Dynamic responsive viewport to view the whole page",
                      children: "Dynamic View"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                      lineNumber: 467,
                      columnNumber: 23
                    },
                    void 0
                  )
                ] }, void 0, !0, {
                  fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                  lineNumber: 442,
                  columnNumber: 21
                }, void 0),
                /* @__PURE__ */ p.jsxDEV(
                  "button",
                  {
                    type: "button",
                    onClick: () => z(!0),
                    className: "inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold text-[#042F61] bg-white border border-slate-200 hover:border-[#0072CE] hover:text-[#0072CE] shadow-xs transition-colors cursor-pointer",
                    title: "Expand to Fullscreen A4 view",
                    children: [
                      /* @__PURE__ */ p.jsxDEV(b5, { className: "w-3.5 h-3.5" }, void 0, !1, {
                        fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                        lineNumber: 487,
                        columnNumber: 23
                      }, void 0),
                      /* @__PURE__ */ p.jsxDEV("span", { children: "Fullscreen" }, void 0, !1, {
                        fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                        lineNumber: 488,
                        columnNumber: 23
                      }, void 0)
                    ]
                  },
                  void 0,
                  !0,
                  {
                    fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                    lineNumber: 481,
                    columnNumber: 21
                  },
                  void 0
                )
              ] }, void 0, !0, {
                fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                lineNumber: 441,
                columnNumber: 19
              }, void 0),
              x.certificate.certificate_url ? /* @__PURE__ */ p.jsxDEV(
                "div",
                {
                  className: `relative rounded-xl overflow-hidden border border-slate-200 bg-white shadow-inner transition-all duration-300 ${N === "a4-portrait" ? "w-full max-w-[720px] aspect-[1/1.414] min-h-[580px] mx-auto" : N === "a4-landscape" ? "w-full aspect-[1.414/1] min-h-[460px] max-h-[85vh] mx-auto" : "w-full h-[78vh] min-h-[640px] sm:min-h-[750px] lg:min-h-[880px] max-h-[1100px]"}`,
                  children: /* @__PURE__ */ p.jsxDEV(
                    "iframe",
                    {
                      src: `${x.certificate.certificate_url}#view=Fit&toolbar=1&navpanes=0`,
                      className: "w-full h-full border-none",
                      title: `Official Certificate for ${x.certificate.full_name}`
                    },
                    void 0,
                    !1,
                    {
                      fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                      lineNumber: 504,
                      columnNumber: 21
                    },
                    void 0
                  )
                },
                void 0,
                !1,
                {
                  fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                  lineNumber: 495,
                  columnNumber: 19
                },
                void 0
              ) : /* @__PURE__ */ p.jsxDEV("div", { className: "p-6 text-center bg-white rounded-xl border border-dashed border-slate-300", children: [
                /* @__PURE__ */ p.jsxDEV(hc, { className: "w-8 h-8 text-slate-400 mx-auto mb-2" }, void 0, !1, {
                  fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                  lineNumber: 512,
                  columnNumber: 21
                }, void 0),
                /* @__PURE__ */ p.jsxDEV("p", { className: "text-xs text-slate-500 font-medium", children: "PDF preview is currently unavailable for this record." }, void 0, !1, {
                  fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                  lineNumber: 513,
                  columnNumber: 21
                }, void 0)
              ] }, void 0, !0, {
                fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                lineNumber: 511,
                columnNumber: 19
              }, void 0)
            ] }, void 0, !0, {
              fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
              lineNumber: 399,
              columnNumber: 15
            }, void 0),
            T && ((L = x == null ? void 0 : x.certificate) == null ? void 0 : L.certificate_url) && /* @__PURE__ */ p.jsxDEV("div", { className: "fixed inset-0 z-50 bg-[#042F61]/90 backdrop-blur-md p-3 sm:p-6 flex flex-col", children: [
              /* @__PURE__ */ p.jsxDEV("div", { className: "flex items-center justify-between mb-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-2.5 text-white", children: [
                /* @__PURE__ */ p.jsxDEV("div", { className: "flex items-center gap-2.5 truncate mr-3", children: [
                  /* @__PURE__ */ p.jsxDEV(hc, { className: "w-4 h-4 text-[#FDB913] shrink-0" }, void 0, !1, {
                    fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                    lineNumber: 525,
                    columnNumber: 23
                  }, void 0),
                  /* @__PURE__ */ p.jsxDEV("span", { className: "text-sm font-bold truncate", children: [
                    "Certificate: ",
                    x.certificate.full_name,
                    " (",
                    x.certificate.certificate_id,
                    ")"
                  ] }, void 0, !0, {
                    fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                    lineNumber: 526,
                    columnNumber: 23
                  }, void 0)
                ] }, void 0, !0, {
                  fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                  lineNumber: 524,
                  columnNumber: 21
                }, void 0),
                /* @__PURE__ */ p.jsxDEV("div", { className: "flex items-center gap-2 shrink-0", children: [
                  /* @__PURE__ */ p.jsxDEV(
                    "a",
                    {
                      href: x.certificate.certificate_url,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      download: !0,
                      className: "inline-flex items-center gap-1.5 bg-[#0072CE] hover:bg-[#005bb5] text-white text-xs font-bold py-1.5 px-3 rounded-lg transition-colors",
                      children: [
                        /* @__PURE__ */ p.jsxDEV(Nl, { className: "w-3.5 h-3.5" }, void 0, !1, {
                          fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                          lineNumber: 538,
                          columnNumber: 25
                        }, void 0),
                        /* @__PURE__ */ p.jsxDEV("span", { children: "Download" }, void 0, !1, {
                          fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                          lineNumber: 539,
                          columnNumber: 25
                        }, void 0)
                      ]
                    },
                    void 0,
                    !0,
                    {
                      fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                      lineNumber: 531,
                      columnNumber: 23
                    },
                    void 0
                  ),
                  /* @__PURE__ */ p.jsxDEV(
                    "button",
                    {
                      type: "button",
                      onClick: () => z(!1),
                      className: "inline-flex items-center gap-1.5 bg-white/20 hover:bg-white/30 text-white text-xs font-bold py-1.5 px-3 rounded-lg transition-colors cursor-pointer",
                      children: [
                        /* @__PURE__ */ p.jsxDEV(S5, { className: "w-3.5 h-3.5" }, void 0, !1, {
                          fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                          lineNumber: 546,
                          columnNumber: 25
                        }, void 0),
                        /* @__PURE__ */ p.jsxDEV("span", { children: "Close (Esc)" }, void 0, !1, {
                          fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                          lineNumber: 547,
                          columnNumber: 25
                        }, void 0)
                      ]
                    },
                    void 0,
                    !0,
                    {
                      fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                      lineNumber: 541,
                      columnNumber: 23
                    },
                    void 0
                  )
                ] }, void 0, !0, {
                  fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                  lineNumber: 530,
                  columnNumber: 21
                }, void 0)
              ] }, void 0, !0, {
                fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                lineNumber: 523,
                columnNumber: 19
              }, void 0),
              /* @__PURE__ */ p.jsxDEV("div", { className: "flex-1 w-full rounded-xl overflow-hidden bg-white shadow-2xl border border-white/20", children: /* @__PURE__ */ p.jsxDEV(
                "iframe",
                {
                  src: `${x.certificate.certificate_url}#view=Fit&toolbar=1`,
                  className: "w-full h-full border-none",
                  title: `Official Certificate for ${x.certificate.full_name} (Fullscreen)`
                },
                void 0,
                !1,
                {
                  fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                  lineNumber: 552,
                  columnNumber: 21
                },
                void 0
              ) }, void 0, !1, {
                fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                lineNumber: 551,
                columnNumber: 19
              }, void 0)
            ] }, void 0, !0, {
              fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
              lineNumber: 522,
              columnNumber: 17
            }, void 0)
          ] }, void 0, !0, {
            fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
            lineNumber: 337,
            columnNumber: 13
          }, void 0)
        ) : (
          /* Not Found / Invalid State */
          /* @__PURE__ */ p.jsxDEV("div", { className: "bg-rose-50/70 border border-rose-200/80 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4", children: [
            /* @__PURE__ */ p.jsxDEV("div", { className: "flex items-start gap-3.5", children: [
              /* @__PURE__ */ p.jsxDEV("div", { className: "w-10 h-10 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center shrink-0 mt-0.5", children: /* @__PURE__ */ p.jsxDEV(tg, { className: "w-5 h-5" }, void 0, !1, {
                fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                lineNumber: 567,
                columnNumber: 19
              }, void 0) }, void 0, !1, {
                fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                lineNumber: 566,
                columnNumber: 17
              }, void 0),
              /* @__PURE__ */ p.jsxDEV("div", { children: [
                /* @__PURE__ */ p.jsxDEV("h4", { className: "text-base font-bold text-rose-950", children: "Certificate Verification Failed" }, void 0, !1, {
                  fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                  lineNumber: 570,
                  columnNumber: 19
                }, void 0),
                /* @__PURE__ */ p.jsxDEV("p", { className: "text-xs sm:text-sm text-rose-800 mt-1 leading-relaxed max-w-xl", children: x.message || "No certificate record was found matching the provided Certificate ID and Full Name. Please confirm the details on the issued document." }, void 0, !1, {
                  fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                  lineNumber: 573,
                  columnNumber: 19
                }, void 0)
              ] }, void 0, !0, {
                fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                lineNumber: 569,
                columnNumber: 17
              }, void 0)
            ] }, void 0, !0, {
              fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
              lineNumber: 565,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ p.jsxDEV(
              "button",
              {
                type: "button",
                onClick: _,
                className: "inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-rose-900 bg-white border border-rose-200 hover:bg-rose-50 shadow-xs transition-colors shrink-0 cursor-pointer",
                children: [
                  /* @__PURE__ */ p.jsxDEV(ng, { className: "w-3.5 h-3.5" }, void 0, !1, {
                    fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                    lineNumber: 584,
                    columnNumber: 17
                  }, void 0),
                  /* @__PURE__ */ p.jsxDEV("span", { children: "Try Again" }, void 0, !1, {
                    fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                    lineNumber: 585,
                    columnNumber: 17
                  }, void 0)
                ]
              },
              void 0,
              !0,
              {
                fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                lineNumber: 579,
                columnNumber: 15
              },
              void 0
            )
          ] }, void 0, !0, {
            fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
            lineNumber: 564,
            columnNumber: 13
          }, void 0)
        ) }, void 0, !1, {
          fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
          lineNumber: 334,
          columnNumber: 9
        }, void 0)
      ]
    },
    void 0,
    !0,
    {
      fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
      lineNumber: 210,
      columnNumber: 5
    },
    void 0
  );
}, Jn = (i) => {
  if (!i) return "";
  try {
    return new DOMParser().parseFromString(i, "text/html").body.textContent || i;
  } catch {
    return i.replace(/&#8211;/g, "–").replace(/&#8212;/g, "—").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#039;/g, "'");
  }
}, Yc = (i) => {
  if (!i) return "";
  try {
    const s = i.split("-");
    if (s.length === 3) {
      const l = parseInt(s[0], 10), r = parseInt(s[1], 10) - 1, c = parseInt(s[2], 10), m = new Date(l, r, c);
      if (!isNaN(m.getTime()))
        return m.toLocaleDateString("en-US", {
          weekday: "short",
          month: "short",
          day: "numeric",
          year: "numeric"
        });
    }
    return i;
  } catch {
    return i;
  }
}, R5 = () => {
  const i = /* @__PURE__ */ new Date(), s = i.getFullYear(), l = String(i.getMonth() + 1).padStart(2, "0"), r = String(i.getDate()).padStart(2, "0");
  return `${s}-${l}-${r}`;
}, sg = (i) => {
  const s = Jn(i), l = s.match(/^(.*?)\s*[-–—]\s*(.*)$/);
  if (l) {
    const r = l[1].trim(), c = l[2].trim();
    return /* @__PURE__ */ p.jsxDEV("div", { className: "font-sans leading-snug", children: [
      /* @__PURE__ */ p.jsxDEV("span", { className: "text-xs sm:text-[13px] font-bold text-white group-hover:text-[#FDB913] transition-colors block leading-tight", children: r }, void 0, !1, {
        fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
        lineNumber: 95,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ p.jsxDEV("span", { className: "text-[11px] sm:text-xs font-medium text-sky-100/90 group-hover:text-white transition-colors block mt-0.5 leading-snug", children: c }, void 0, !1, {
        fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
        lineNumber: 98,
        columnNumber: 9
      }, void 0)
    ] }, void 0, !0, {
      fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
      lineNumber: 94,
      columnNumber: 7
    }, void 0);
  }
  return /* @__PURE__ */ p.jsxDEV("div", { className: "font-sans leading-snug", children: /* @__PURE__ */ p.jsxDEV("span", { className: "text-xs sm:text-[13px] font-bold text-white group-hover:text-[#FDB913] transition-colors block leading-tight", children: s }, void 0, !1, {
    fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
    lineNumber: 107,
    columnNumber: 7
  }, void 0) }, void 0, !1, {
    fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
    lineNumber: 106,
    columnNumber: 5
  }, void 0);
}, og = [
  {
    id: 22272,
    title: "Compliant Assessment Practices – Embedding Validity and Reliability in Assessment",
    description: "Equip your assessors with the knowledge, evidence-gathering strategies, and practical tools to embed fairness, flexibility, validity, and sufficiency into daily assessment workflows in line with ASQA Standards.",
    date: "2026-09-04",
    time: "04:00 PM AEST",
    url: "https://buy.stripe.com/6oUeVd7yRfz06GqaKNds40e"
  },
  {
    id: 22273,
    title: "Assessment Confidence – Applying Validity and Sufficiency in Practice",
    description: "Master evidence sufficiency, authentic learner verification, and robust validation instruments to ensure total audit confidence.",
    date: "2026-09-11",
    time: "04:00 PM AEST",
    url: "https://buy.stripe.com/6oUeVd7yRfz06GqaKNds40e"
  },
  {
    id: 22274,
    title: "Assessment Integrity – Ensuring Authenticity and Currency of Evidence",
    description: "Stay ahead of regulatory reforms, audit expectations, and risk-based regulatory trends shaping Australian vocational education and training.",
    date: "2026-09-18",
    time: "03:30 PM AEST",
    url: "https://buy.stripe.com/6oUeVd7yRfz06GqaKNds40e"
  },
  {
    id: 22275,
    title: "Designing Learner Guides for Quality Training and Compliance",
    description: "Learn systematic development methodologies for student learning materials that elevate assessor delivery and streamline learner progression.",
    date: "2026-09-25",
    time: "04:00 PM AEST",
    url: "https://buy.stripe.com/6oUeVd7yRfz06GqaKNds40e"
  },
  {
    id: 22276,
    title: "Learner Guide to Learning Experience – Designing Engaging Training Presentations",
    description: "Transform static training materials into immersive, interactive learning journeys tailored for high adult learner engagement and retention.",
    date: "2026-10-02",
    time: "04:00 PM AEST",
    url: "https://buy.stripe.com/6oUeVd7yRfz06GqaKNds40e"
  }
], lg = [
  {
    id: 22271,
    title: "Compliant Assessment Practices – Embedding Fairness and Flexibility in Assessment",
    description: "Equipped assessors with evidence-gathering strategies and practical tools to embed fairness, flexibility, and validity into daily workflows.",
    date: "2026-08-28",
    time: "04:00 PM AEST",
    url: "https://buy.stripe.com/6oUeVd7yRfz06GqaKNds40e"
  },
  {
    id: 22270,
    title: "VET Regulatory Trends & Standards for RTO Compliance",
    description: "Unpacked regulatory reforms, audit expectations, and risk-based compliance methodologies shaping modern RTO governance.",
    date: "2026-08-14",
    time: "03:30 PM AEST",
    url: "https://buy.stripe.com/6oUeVd7yRfz06GqaKNds40e"
  },
  {
    id: 22269,
    title: "Evidence Sufficiency & Authenticity in Vocational Assessment",
    description: "Deep dive into authentic student evidence collection, validation methods, and third-party reports under ASQA standards.",
    date: "2026-07-31",
    time: "04:00 PM AEST",
    url: "https://buy.stripe.com/6oUeVd7yRfz06GqaKNds40e"
  },
  {
    id: 22268,
    title: "Designing Impactful Learner Guides & Assessment Tools",
    description: "Practical masterclass on developing compliant learning materials that boost student engagement and meet audit scrutiny.",
    date: "2026-07-17",
    time: "03:00 PM AEST",
    url: "https://buy.stripe.com/6oUeVd7yRfz06GqaKNds40e"
  },
  {
    id: 22267,
    title: "RPL Evidence Gathering & Competency Conversation Strategies",
    description: "Advanced masterclass on streamlining Recognition of Prior Learning workflows and audit-tested candidate interview techniques.",
    date: "2026-07-03",
    time: "04:00 PM AEST",
    url: "https://buy.stripe.com/6oUeVd7yRfz06GqaKNds40e"
  },
  {
    id: 22266,
    title: "Industry Consultation Frameworks & Trainer Currency Evidence",
    description: "Robust methodologies for documenting authentic industry engagement and vocational currency in alignment with ASQA standards.",
    date: "2026-06-19",
    time: "03:30 PM AEST",
    url: "https://buy.stripe.com/6oUeVd7yRfz06GqaKNds40e"
  },
  {
    id: 22265,
    title: "Assessment Validation Workflows – Pre & Post Delivery",
    description: "Step-by-step guidance on establishing statistically valid sampling and collaborative validation panels across RTO faculties.",
    date: "2026-06-05",
    time: "04:00 PM AEST",
    url: "https://buy.stripe.com/6oUeVd7yRfz06GqaKNds40e"
  },
  {
    id: 22264,
    title: "Training & Assessment Strategy (TAS) Design for Audit Scrutiny",
    description: "Comprehensive blueprint for structuring compliant TAS documents reflecting real learner cohorts and delivery modes.",
    date: "2026-05-22",
    time: "04:00 PM AEST",
    url: "https://buy.stripe.com/6oUeVd7yRfz06GqaKNds40e"
  }
], rg = {
  // 22272: Compliant Assessment Practices – Embedding Validity and Reliability in Assessment
  22272: {
    thumbnail: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    description: "Equip your assessors with the knowledge, evidence-gathering strategies, and practical tools to embed fairness, flexibility, validity, and sufficiency into daily assessment workflows in line with ASQA Standards."
  },
  // 22273: Assessment Confidence – Applying Validity and Sufficiency in Practice
  // User selected: https://unsplash.com/photos/a-man-sitting-at-a-desk-working-on-a-computer-Oexx7cEMKFA
  22273: {
    thumbnail: "https://images.unsplash.com/photo-1738566061961-4e20e3bf470d?auto=format&fit=crop&w=800&q=80",
    description: "Master evidence sufficiency, authentic learner verification, and robust validation instruments to ensure total audit confidence and defensible assessor judgments."
  },
  // 22274: Assessment Integrity – Ensuring Authenticity and Currency of Evidence
  // User selected: https://unsplash.com/photos/a-pen-sitting-on-top-of-a-pile-of-papers-PUd6C90Isp0
  22274: {
    thumbnail: "https://images.unsplash.com/photo-1631557776808-91908aba7ca0?auto=format&fit=crop&w=800&q=80",
    description: "Establish rigorous safeguards against plagiarism and emerging AI misuse while mastering authentic evidence verification and workplace supervisor validation under ASQA standards."
  },
  // 22275: Designing Learner Guides for Quality Training and Compliance
  // User selected: https://unsplash.com/photos/man-standing-in-front-of-group-of-men-rxpThOwuVgE
  22275: {
    thumbnail: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80",
    description: "Learn systematic development methodologies for student learning materials that elevate assessor delivery, streamline learner progression, and ensure full compliance with packaging rules."
  },
  // 22276: Learner Guide to Learning Experience – Designing Engaging Training Presentations
  22276: {
    thumbnail: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80",
    description: "Transform static training materials into immersive, interactive learning journeys with modern presentation frameworks tailored for high adult learner engagement and retention."
  },
  // 22271: Compliant Assessment Practices – Embedding Fairness and Flexibility in Assessment
  22271: {
    thumbnail: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80",
    description: "Unpack practical methods for implementing reasonable adjustments, supportive learner accommodations, and culturally responsive assessment practices without compromising competency standards."
  },
  // 22270: VET Regulatory Trends & Standards for RTO Compliance
  22270: {
    thumbnail: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
    description: "Unpack regulatory reforms, upcoming Standards for RTOs revisions, and risk-based compliance methodologies shaping modern Australian RTO governance."
  },
  // 22269: Evidence Sufficiency & Authenticity in Vocational Assessment
  22269: {
    thumbnail: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&q=80",
    description: "Deep dive into authentic student evidence collection, validation methods, and third-party reports under ASQA standards to ensure audit-tested competency sign-offs."
  },
  // 22268: Designing Impactful Learner Guides & Assessment Tools
  22268: {
    thumbnail: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=80",
    description: "Practical masterclass on developing compliant learning materials and assessment tools that boost student engagement, provide clear benchmarks, and satisfy audit scrutiny."
  },
  // 22267: RPL Evidence Gathering & Competency Conversation Strategies
  22267: {
    thumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    description: "Advanced masterclass on streamlining Recognition of Prior Learning workflows with structured competency interview techniques and authentic prior work portfolio evaluations."
  },
  // 22266: Industry Consultation Frameworks & Trainer Currency Evidence
  22266: {
    thumbnail: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80",
    description: "Robust methodologies for establishing active industry advisory networks and maintaining verifiable trainer currency logs in alignment with ASQA Standard 1."
  },
  // 22265: Assessment Validation Workflows – Pre & Post Delivery
  22265: {
    thumbnail: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80",
    description: "Step-by-step guidance on establishing statistically valid sampling formulas, collaborative moderation panels, and continuous improvement validation logs across RTO faculties."
  },
  // 22264: Training & Assessment Strategy (TAS) Design for Audit Scrutiny
  22264: {
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    description: "Comprehensive blueprint for structuring compliant TAS documents reflecting real learner cohorts, volume of learning calculations, and delivery modes ready for audit scrutiny."
  }
}, _5 = (i) => {
  if (i.id && rg[i.id])
    return rg[i.id];
  const s = Jn(i.title || "").toLowerCase(), l = i.description && i.description.trim().length > 15 ? Jn(i.description) : "";
  return s.includes("validity") || s.includes("reliability") ? {
    thumbnail: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    description: l || "Equip your assessors with the knowledge, evidence-gathering strategies, and practical tools to embed fairness, flexibility, validity, and sufficiency into daily assessment workflows in line with ASQA Standards."
  } : s.includes("confidence") || s.includes("sufficiency") ? {
    thumbnail: "https://images.unsplash.com/photo-1738566061961-4e20e3bf470d?auto=format&fit=crop&w=800&q=80",
    description: l || "Master evidence sufficiency, authentic learner verification, and robust validation instruments to ensure total audit confidence and defensible assessor judgments."
  } : s.includes("integrity") || s.includes("authenticity") || s.includes("currency") ? {
    thumbnail: "https://images.unsplash.com/photo-1631557776808-91908aba7ca0?auto=format&fit=crop&w=800&q=80",
    description: l || "Establish rigorous safeguards against plagiarism and emerging AI misuse while mastering authentic evidence verification and workplace supervisor validation under ASQA standards."
  } : s.includes("presentation") || s.includes("experience") || s.includes("engaging") ? {
    thumbnail: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80",
    description: l || "Transform static training materials into immersive, interactive learning journeys with modern presentation frameworks tailored for high adult learner engagement and retention."
  } : s.includes("learner guide") || s.includes("designing") || s.includes("materials") ? {
    thumbnail: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80",
    description: l || "Learn systematic development methodologies for student learning materials that elevate assessor delivery, streamline learner progression, and ensure full compliance with packaging rules."
  } : s.includes("fairness") || s.includes("flexibility") || s.includes("adjustment") ? {
    thumbnail: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80",
    description: l || "Unpack practical methods for implementing reasonable adjustments, supportive learner accommodations, and culturally responsive assessment practices without compromising competency standards."
  } : s.includes("regulatory") || s.includes("standards") || s.includes("compliance") ? {
    thumbnail: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
    description: l || "Unpack regulatory reforms, upcoming Standards for RTOs revisions, and risk-based compliance methodologies shaping modern Australian RTO governance."
  } : s.includes("rpl") || s.includes("prior learning") || s.includes("conversation") ? {
    thumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    description: l || "Advanced masterclass on streamlining Recognition of Prior Learning workflows with structured competency interview techniques and authentic prior work portfolio evaluations."
  } : s.includes("validation") || s.includes("workflow") || s.includes("sampling") ? {
    thumbnail: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80",
    description: l || "Step-by-step guidance on establishing statistically valid sampling formulas, collaborative moderation panels, and continuous improvement validation logs across RTO faculties."
  } : s.includes("tas") || s.includes("strategy") ? {
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    description: l || "Comprehensive blueprint for structuring compliant TAS documents reflecting real learner cohorts, volume of learning calculations, and delivery modes ready for audit scrutiny."
  } : {
    thumbnail: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
    description: l || "Join an interactive professional development masterclass where compliance rigour and practical training unite to build confidence, resilience, and fair assessment outcomes in line with ASQA Standards."
  };
}, ug = ({
  session: i,
  isCenter: s,
  isSpacer: l = !1,
  onCardClick: r,
  scrollToGravityFormMount: c
}) => {
  const [m, f] = q.useState(!1);
  q.useEffect(() => {
    const g = () => f(window.innerWidth >= 640);
    return g(), window.addEventListener("resize", g), () => window.removeEventListener("resize", g);
  }, []);
  const h = _5(i), v = s && m ? {
    WebkitMaskImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 264 100" width="264" height="100"><path d="M 0,0 L 264,0 A 24,24 0 0,1 240,24 L 48,24 A 24,24 0 0,0 24,48 L 24,76 A 24,24 0 0,1 0,100 L 0,100 Z" fill="black"/></svg>'), linear-gradient(#000,#000), linear-gradient(#000,#000)`,
    WebkitMaskPosition: "bottom right, top left, bottom left",
    WebkitMaskSize: "264px 100px, 100% calc(100% - 99px), calc(100% - 263px) 100px",
    WebkitMaskRepeat: "no-repeat",
    maskImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 264 100" width="264" height="100"><path d="M 0,0 L 264,0 A 24,24 0 0,1 240,24 L 48,24 A 24,24 0 0,0 24,48 L 24,76 A 24,24 0 0,1 0,100 L 0,100 Z" fill="black"/></svg>'), linear-gradient(#000,#000), linear-gradient(#000,#000)`,
    maskPosition: "bottom right, top left, bottom left",
    maskSize: "264px 100px, 100% calc(100% - 99px), calc(100% - 263px) 100px",
    maskRepeat: "no-repeat"
  } : void 0;
  return /* @__PURE__ */ p.jsxDEV(
    "div",
    {
      onClick: s ? void 0 : r,
      className: `relative w-full h-full bg-transparent ${s ? "" : "cursor-pointer select-none"}`,
      children: [
        /* @__PURE__ */ p.jsxDEV(
          "div",
          {
            style: v,
            className: "w-full h-full bg-gradient-to-br from-[#CDE4F9] via-[#E2F0FD] to-[#BEE0F8] border border-white/80 rounded-[24px] sm:rounded-[26px] p-4 sm:p-6 lg:p-7 xl:p-8 relative overflow-hidden flex flex-col justify-between shadow-[0_10px_28px_rgba(4,47,97,0.07)]",
            children: [
              /* @__PURE__ */ p.jsxDEV("div", { className: "absolute -left-12 -top-12 w-80 sm:w-96 h-80 sm:h-96 bg-[#0072CE]/18 rounded-full blur-3xl pointer-events-none" }, void 0, !1, {
                fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                lineNumber: 454,
                columnNumber: 9
              }, void 0),
              /* @__PURE__ */ p.jsxDEV("div", { className: "absolute left-40 top-20 w-72 h-72 bg-[#FDB913]/20 rounded-full blur-2xl pointer-events-none" }, void 0, !1, {
                fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                lineNumber: 455,
                columnNumber: 9
              }, void 0),
              /* @__PURE__ */ p.jsxDEV("div", { className: "absolute -right-20 -bottom-20 w-96 h-96 bg-[#0072CE]/16 rounded-full blur-3xl pointer-events-none" }, void 0, !1, {
                fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                lineNumber: 456,
                columnNumber: 9
              }, void 0),
              /* @__PURE__ */ p.jsxDEV("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-8 items-center relative z-10", children: [
                /* @__PURE__ */ p.jsxDEV("div", { className: "lg:col-span-5 flex flex-col items-center justify-center relative", children: /* @__PURE__ */ p.jsxDEV("div", { className: "relative w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[350px] aspect-[4/3.1] flex items-center justify-center", children: [
                  /* @__PURE__ */ p.jsxDEV(
                    "svg",
                    {
                      viewBox: "0 0 200 200",
                      className: "absolute inset-0 w-full h-full text-[#0072CE]/15 fill-current transform -rotate-6 scale-110 pointer-events-none",
                      children: /* @__PURE__ */ p.jsxDEV("path", { d: "M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C86.9,14.6,81.3,29.1,72.9,41.9C64.6,54.6,53.5,65.6,40.3,72.7C27.1,79.8,11.8,83.1,-3.1,88.4C-17.9,93.8,-35.8,101.3,-50,95.5C-64.2,89.7,-74.7,70.8,-81.4,52.3C-88.1,33.8,-91,15.7,-88.9,-1.2C-86.8,-18.1,-79.7,-33.8,-69.8,-46.8C-59.9,-59.9,-47.2,-70.3,-33.4,-77.8C-19.6,-85.2,-9.8,-89.7,2.8,-94.5C15.4,-99.4,30.7,-83.6,44.7,-76.4Z", transform: "translate(100 100)" }, void 0, !1, {
                        fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                        lineNumber: 469,
                        columnNumber: 17
                      }, void 0)
                    },
                    void 0,
                    !1,
                    {
                      fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                      lineNumber: 465,
                      columnNumber: 15
                    },
                    void 0
                  ),
                  /* @__PURE__ */ p.jsxDEV("div", { className: "relative w-full h-full rounded-[22px] overflow-hidden border-2 border-white/80 shadow-[0_12px_28px_rgba(4,47,97,0.12)] bg-gradient-to-b from-white/90 via-sky-50 to-[#EAF3FA]", children: [
                    /* @__PURE__ */ p.jsxDEV(
                      "img",
                      {
                        src: h.thumbnail,
                        alt: Jn(i.title),
                        className: "w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700",
                        loading: "eager",
                        referrerPolicy: "no-referrer"
                      },
                      void 0,
                      !1,
                      {
                        fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                        lineNumber: 473,
                        columnNumber: 17
                      },
                      void 0
                    ),
                    s && /* @__PURE__ */ p.jsxDEV("div", { className: "absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md py-1.5 px-3 rounded-xl border border-slate-200/80 shadow-md flex items-center justify-between", children: [
                      /* @__PURE__ */ p.jsxDEV("div", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ p.jsxDEV("span", { className: "relative flex h-2 w-2", children: [
                          /* @__PURE__ */ p.jsxDEV("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0072CE] opacity-75" }, void 0, !1, {
                            fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                            lineNumber: 486,
                            columnNumber: 25
                          }, void 0),
                          /* @__PURE__ */ p.jsxDEV("span", { className: "relative inline-flex rounded-full h-2 w-2 bg-[#0072CE]" }, void 0, !1, {
                            fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                            lineNumber: 487,
                            columnNumber: 25
                          }, void 0)
                        ] }, void 0, !0, {
                          fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                          lineNumber: 485,
                          columnNumber: 23
                        }, void 0),
                        /* @__PURE__ */ p.jsxDEV("span", { className: "text-[10.5px] font-bold text-[#042F61] uppercase tracking-wider", children: "Live & Interactive" }, void 0, !1, {
                          fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                          lineNumber: 489,
                          columnNumber: 23
                        }, void 0)
                      ] }, void 0, !0, {
                        fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                        lineNumber: 484,
                        columnNumber: 21
                      }, void 0),
                      /* @__PURE__ */ p.jsxDEV("span", { className: "text-[10.5px] font-bold text-[#0072CE] bg-[#0072CE]/10 px-2 py-0.5 rounded-md", children: "VET Accredited" }, void 0, !1, {
                        fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                        lineNumber: 491,
                        columnNumber: 21
                      }, void 0)
                    ] }, void 0, !0, {
                      fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                      lineNumber: 483,
                      columnNumber: 19
                    }, void 0)
                  ] }, void 0, !0, {
                    fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                    lineNumber: 472,
                    columnNumber: 15
                  }, void 0)
                ] }, void 0, !0, {
                  fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                  lineNumber: 462,
                  columnNumber: 13
                }, void 0) }, void 0, !1, {
                  fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                  lineNumber: 461,
                  columnNumber: 11
                }, void 0),
                /* @__PURE__ */ p.jsxDEV("div", { className: "lg:col-span-7 flex flex-col justify-between h-full space-y-4 sm:space-y-5 sm:pr-6 lg:pr-10", children: /* @__PURE__ */ p.jsxDEV("div", { className: "space-y-3 sm:space-y-3.5", children: [
                  /* @__PURE__ */ p.jsxDEV("div", { className: "flex items-center", children: /* @__PURE__ */ p.jsxDEV("div", { className: "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/85 border border-[#0072CE]/20 text-[#0072CE] text-xs font-bold tracking-wider uppercase shadow-xs", children: [
                    /* @__PURE__ */ p.jsxDEV("span", { className: "inline-flex items-center text-[#0072CE]", children: [
                      /* @__PURE__ */ p.jsxDEV(ha, { className: "w-3.5 h-3.5" }, void 0, !1, {
                        fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                        lineNumber: 506,
                        columnNumber: 21
                      }, void 0),
                      /* @__PURE__ */ p.jsxDEV(pa, { className: "w-2.5 h-2.5 -ml-0.5" }, void 0, !1, {
                        fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                        lineNumber: 507,
                        columnNumber: 21
                      }, void 0)
                    ] }, void 0, !0, {
                      fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                      lineNumber: 505,
                      columnNumber: 19
                    }, void 0),
                    /* @__PURE__ */ p.jsxDEV("span", { children: "UPCOMING SESSIONS" }, void 0, !1, {
                      fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                      lineNumber: 509,
                      columnNumber: 19
                    }, void 0)
                  ] }, void 0, !0, {
                    fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                    lineNumber: 504,
                    columnNumber: 17
                  }, void 0) }, void 0, !1, {
                    fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                    lineNumber: 503,
                    columnNumber: 15
                  }, void 0),
                  /* @__PURE__ */ p.jsxDEV(
                    "h1",
                    {
                      className: "text-[18px] font-bold text-[#042F61] tracking-tight leading-[1.3] font-sans transition-all line-clamp-2",
                      style: { fontSize: "18px", fontWeight: 700 },
                      children: Jn(i.title)
                    },
                    void 0,
                    !1,
                    {
                      fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                      lineNumber: 514,
                      columnNumber: 15
                    },
                    void 0
                  ),
                  /* @__PURE__ */ p.jsxDEV(
                    "p",
                    {
                      className: "text-sm sm:text-base text-slate-700 leading-relaxed font-normal max-w-2xl",
                      style: { fontSize: "14px" },
                      children: h.description
                    },
                    void 0,
                    !1,
                    {
                      fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                      lineNumber: 522,
                      columnNumber: 15
                    },
                    void 0
                  )
                ] }, void 0, !0, {
                  fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                  lineNumber: 501,
                  columnNumber: 13
                }, void 0) }, void 0, !1, {
                  fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                  lineNumber: 499,
                  columnNumber: 11
                }, void 0)
              ] }, void 0, !0, {
                fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                lineNumber: 458,
                columnNumber: 9
              }, void 0),
              /* @__PURE__ */ p.jsxDEV("div", { className: `relative z-10 mt-4 sm:mt-5 w-full ${s ? "sm:max-w-[calc(100%-245px)] lg:max-w-[calc(100%-230px)]" : ""}`, children: [
                /* @__PURE__ */ p.jsxDEV("div", { className: "grid grid-cols-3 gap-2 sm:gap-2.5", children: [
                  /* @__PURE__ */ p.jsxDEV("div", { className: "bg-white/85 backdrop-blur-sm rounded-xl p-2 sm:p-2.5 border border-slate-200/70 shadow-xs", children: [
                    /* @__PURE__ */ p.jsxDEV("span", { className: "text-[9.5px] uppercase font-bold text-slate-400 block tracking-wider", children: "Mode" }, void 0, !1, {
                      fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                      lineNumber: 538,
                      columnNumber: 15
                    }, void 0),
                    /* @__PURE__ */ p.jsxDEV("span", { className: "text-xs sm:text-[13px] font-bold text-[#042F61] flex items-center gap-1.5 mt-0.5", children: [
                      /* @__PURE__ */ p.jsxDEV(o5, { className: "w-3.5 h-3.5 text-[#0072CE] shrink-0" }, void 0, !1, {
                        fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                        lineNumber: 540,
                        columnNumber: 17
                      }, void 0),
                      /* @__PURE__ */ p.jsxDEV("span", { className: "truncate", children: "Online Session" }, void 0, !1, {
                        fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                        lineNumber: 541,
                        columnNumber: 17
                      }, void 0)
                    ] }, void 0, !0, {
                      fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                      lineNumber: 539,
                      columnNumber: 15
                    }, void 0)
                  ] }, void 0, !0, {
                    fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                    lineNumber: 537,
                    columnNumber: 13
                  }, void 0),
                  /* @__PURE__ */ p.jsxDEV("div", { className: "bg-white/85 backdrop-blur-sm rounded-xl p-2 sm:p-2.5 border border-slate-200/70 shadow-xs", children: [
                    /* @__PURE__ */ p.jsxDEV("span", { className: "text-[9.5px] uppercase font-bold text-slate-400 block tracking-wider", children: "Session Date" }, void 0, !1, {
                      fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                      lineNumber: 545,
                      columnNumber: 15
                    }, void 0),
                    /* @__PURE__ */ p.jsxDEV("span", { className: "text-xs sm:text-[13px] font-bold text-[#042F61] flex items-center gap-1.5 mt-0.5", children: [
                      /* @__PURE__ */ p.jsxDEV(ha, { className: "w-3.5 h-3.5 text-[#0072CE] shrink-0" }, void 0, !1, {
                        fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                        lineNumber: 547,
                        columnNumber: 17
                      }, void 0),
                      /* @__PURE__ */ p.jsxDEV("span", { className: "truncate", children: Yc(i.date) }, void 0, !1, {
                        fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                        lineNumber: 548,
                        columnNumber: 17
                      }, void 0)
                    ] }, void 0, !0, {
                      fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                      lineNumber: 546,
                      columnNumber: 15
                    }, void 0)
                  ] }, void 0, !0, {
                    fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                    lineNumber: 544,
                    columnNumber: 13
                  }, void 0),
                  /* @__PURE__ */ p.jsxDEV("div", { className: "bg-white/85 backdrop-blur-sm rounded-xl p-2 sm:p-2.5 border border-slate-200/70 shadow-xs", children: [
                    /* @__PURE__ */ p.jsxDEV("span", { className: "text-[9.5px] uppercase font-bold text-slate-400 block tracking-wider", children: "Session Time" }, void 0, !1, {
                      fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                      lineNumber: 552,
                      columnNumber: 15
                    }, void 0),
                    /* @__PURE__ */ p.jsxDEV("span", { className: "text-xs sm:text-[13px] font-bold text-[#042F61] flex items-center gap-1.5 mt-0.5", children: [
                      /* @__PURE__ */ p.jsxDEV(tv, { className: "w-3.5 h-3.5 text-[#0072CE] shrink-0" }, void 0, !1, {
                        fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                        lineNumber: 554,
                        columnNumber: 17
                      }, void 0),
                      /* @__PURE__ */ p.jsxDEV("span", { className: "truncate", children: i.time || "04:00 PM AEST" }, void 0, !1, {
                        fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                        lineNumber: 555,
                        columnNumber: 17
                      }, void 0)
                    ] }, void 0, !0, {
                      fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                      lineNumber: 553,
                      columnNumber: 15
                    }, void 0)
                  ] }, void 0, !0, {
                    fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                    lineNumber: 551,
                    columnNumber: 13
                  }, void 0)
                ] }, void 0, !0, {
                  fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                  lineNumber: 536,
                  columnNumber: 11
                }, void 0),
                s && /* @__PURE__ */ p.jsxDEV("div", { className: "sm:hidden pt-3 mt-3 border-t border-slate-300/40 flex justify-end", children: /* @__PURE__ */ p.jsxDEV(
                  "a",
                  {
                    href: "/#booking-registration-section",
                    onClick: (g) => {
                      l || c(g);
                    },
                    className: "w-full bg-[#FDB913] hover:bg-[#042F61] text-[#042F61] hover:text-[#FDB913] text-sm font-black tracking-wider uppercase py-3 px-6 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer select-none",
                    children: [
                      /* @__PURE__ */ p.jsxDEV("span", { className: "relative z-10 whitespace-nowrap font-extrabold", style: { fontWeight: 800 }, children: "Join Now" }, void 0, !1, {
                        fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                        lineNumber: 572,
                        columnNumber: 17
                      }, void 0),
                      /* @__PURE__ */ p.jsxDEV(pa, { className: "w-4 h-4" }, void 0, !1, {
                        fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                        lineNumber: 573,
                        columnNumber: 17
                      }, void 0)
                    ]
                  },
                  void 0,
                  !0,
                  {
                    fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                    lineNumber: 563,
                    columnNumber: 15
                  },
                  void 0
                ) }, void 0, !1, {
                  fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                  lineNumber: 562,
                  columnNumber: 13
                }, void 0)
              ] }, void 0, !0, {
                fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                lineNumber: 535,
                columnNumber: 9
              }, void 0)
            ]
          },
          void 0,
          !0,
          {
            fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
            lineNumber: 448,
            columnNumber: 7
          },
          void 0
        ),
        s && /* @__PURE__ */ p.jsxDEV(
          "svg",
          {
            className: "hidden sm:block absolute -bottom-px -right-px w-[265px] h-[101px] pointer-events-none z-10",
            viewBox: "0 0 264 100",
            preserveAspectRatio: "none",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            "aria-hidden": "true",
            children: [
              /* @__PURE__ */ p.jsxDEV(
                "path",
                {
                  d: "M 264,0 A 24,24 0 0,1 240,24 L 48,24 A 24,24 0 0,0 24,48 L 24,76 A 24,24 0 0,1 0,100 L 264,100 Z",
                  fill: "transparent"
                },
                void 0,
                !1,
                {
                  fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                  lineNumber: 596,
                  columnNumber: 11
                },
                void 0
              ),
              /* @__PURE__ */ p.jsxDEV(
                "path",
                {
                  d: "M 264,0 A 24,24 0 0,1 240,24 L 48,24 A 24,24 0 0,0 24,48 L 24,76 A 24,24 0 0,1 0,100",
                  stroke: "rgba(255,255,255,0.85)",
                  strokeWidth: "1.5",
                  fill: "none"
                },
                void 0,
                !1,
                {
                  fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                  lineNumber: 601,
                  columnNumber: 11
                },
                void 0
              )
            ]
          },
          void 0,
          !0,
          {
            fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
            lineNumber: 587,
            columnNumber: 9
          },
          void 0
        ),
        s && /* @__PURE__ */ p.jsxDEV("div", { className: "hidden sm:flex absolute bottom-3.5 right-[1px] z-20", children: /* @__PURE__ */ p.jsxDEV(
          "a",
          {
            href: "/#booking-registration-section",
            onClick: (g) => {
              l || c(g);
            },
            className: "relative group overflow-hidden bg-[#FDB913] hover:bg-[#0072CE] text-[#042F61] hover:text-white text-xs sm:text-sm font-black tracking-wider uppercase px-10 sm:px-[52px] py-3 sm:py-3.5 rounded-full shadow-lg border border-[#FDB913]/60 hover:border-[#0072CE] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer select-none",
            children: [
              /* @__PURE__ */ p.jsxDEV("div", { className: "absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none -skew-x-12" }, void 0, !1, {
                fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                lineNumber: 626,
                columnNumber: 13
              }, void 0),
              /* @__PURE__ */ p.jsxDEV("span", { className: "relative z-10 whitespace-nowrap font-extrabold", style: { fontWeight: 800 }, children: "JOIN NOW" }, void 0, !1, {
                fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                lineNumber: 628,
                columnNumber: 13
              }, void 0),
              /* @__PURE__ */ p.jsxDEV(pa, { className: "w-4 h-4 sm:w-4.5 sm:h-4.5 relative z-10 transition-transform duration-300 group-hover:translate-x-1 stroke-[2.5]" }, void 0, !1, {
                fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                lineNumber: 629,
                columnNumber: 13
              }, void 0)
            ]
          },
          void 0,
          !0,
          {
            fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
            lineNumber: 616,
            columnNumber: 11
          },
          void 0
        ) }, void 0, !1, {
          fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
          lineNumber: 615,
          columnNumber: 9
        }, void 0)
      ]
    },
    void 0,
    !0,
    {
      fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
      lineNumber: 443,
      columnNumber: 5
    },
    void 0
  );
}, O5 = () => {
  const [i, s] = q.useState([]), [l, r] = q.useState(og), [c, m] = q.useState(lg), [f, h] = q.useState(0), [v, g] = q.useState(!1), [x, y] = q.useState(!1), N = q.useRef(null), V = q.useRef(null), [T, z] = q.useState(null), A = q.useRef(null);
  q.useEffect(() => {
    const K = document.title;
    document.title = "Book Professional Development Session - Chelson Gordon", window.scrollTo({ top: 0, behavior: "instant" });
    let I = !0;
    (async () => {
      try {
        let Q;
        try {
          if (Q = await fetch("/wp-json/cg/v1/pd-sessions"), !Q.ok) throw new Error();
        } catch {
          Q = await fetch("https://chelsongordon.com/wp-json/cg/v1/pd-sessions");
        }
        if (Q.ok) {
          const ne = await Q.json();
          if (I && Array.isArray(ne) && ne.length > 0) {
            s(ne);
            const oe = R5(), D = ne.filter((Z) => !Z.date || Z.date >= oe).sort((Z, W) => (Z.date || "").localeCompare(W.date || "")), R = ne.filter((Z) => Z.date && Z.date < oe).sort((Z, W) => (W.date || "").localeCompare(Z.date || ""));
            if (D.length > 0 && r(D), R.length > 0) {
              const Z = [
                ...R,
                ...lg.filter((W) => !R.some((ue) => ue.id === W.id || ue.date === W.date))
              ];
              m(Z);
            }
          }
        }
      } catch (Q) {
        console.warn("Using default sessions fallback:", Q);
      }
    })();
    let de = [], me = null;
    const j = () => {
      if (!I) return !1;
      const Q = A.current || document.getElementById("wp-gravity-form-mount");
      if (!Q) return !1;
      if (Q.querySelector('#gform_wrapper_20, #gform_20, form.gform, [id*="gform_wrapper_20"]'))
        return !0;
      const ne = document.getElementById("cg-hidden-gform-source"), oe = (ne == null ? void 0 : ne.querySelector("#gform_wrapper_20, #gform_20, form")) || document.getElementById("gform_wrapper_20") || document.querySelector('[id*="gform_wrapper_20"]') || (ne == null ? void 0 : ne.firstElementChild);
      return oe && !Q.contains(oe) ? (Q.replaceChildren(oe), typeof window < "u" && (window.dispatchEvent(new CustomEvent("gform_mount_ready", {
        detail: { containerId: "wp-gravity-form-mount" }
      })), window.dispatchEvent(new Event("resize"))), !0) : !1;
    };
    if (!j()) {
      de = [50, 150, 300, 600, 1200, 2500].map(
        (oe) => setTimeout(() => {
          j();
        }, oe)
      ), typeof MutationObserver < "u" && typeof document < "u" && (me = new MutationObserver(() => {
        j() && (me == null || me.disconnect());
      }), me.observe(document.body, { childList: !0, subtree: !0 }));
      const ne = setTimeout(() => {
        const oe = A.current || document.getElementById("wp-gravity-form-mount");
        oe && !oe.querySelector("#gform_wrapper_20, #gform_20, form") && !document.getElementById("cg-hidden-gform-source") && typeof window < "u" && window.location.pathname.startsWith("/book-pd-session") && fetch("/book-pd-session/", { headers: { "X-Requested-With": "XMLHttpRequest" } }).then((R) => R.ok ? R.text() : "").then((R) => {
          if (!R || !I) return;
          const W = new DOMParser().parseFromString(R, "text/html"), ue = W.getElementById("cg-hidden-gform-source") || W.getElementById("gform_wrapper_20");
          if (ue) {
            let ce = document.getElementById("cg-hidden-gform-source");
            ce || (ce = document.createElement("div"), ce.id = "cg-hidden-gform-source", ce.style.display = "none", document.body.appendChild(ce)), ce.innerHTML = ue.innerHTML, j();
          }
        }).catch(() => {
        });
      }, 350);
      de.push(ne);
    }
    return typeof window < "u" && window.dispatchEvent(new CustomEvent("gform_mount_ready", {
      detail: { containerId: "wp-gravity-form-mount" }
    })), () => {
      I = !1, document.title = K, de.forEach((D) => clearTimeout(D)), me && me.disconnect();
      const Q = A.current || document.getElementById("wp-gravity-form-mount"), ne = Q == null ? void 0 : Q.querySelector("#gform_wrapper_20, #gform_20"), oe = document.getElementById("cg-hidden-gform-source");
      ne && oe && !oe.contains(ne) && oe.appendChild(ne);
    };
  }, []);
  const _ = l[f] || l[0] || og[0], G = () => {
    h((K) => (K - 1 + l.length) % l.length);
  }, L = () => {
    h((K) => (K + 1) % l.length);
  }, H = q.useRef(null), X = (K) => {
    H.current = K.touches[0].clientX;
  }, ee = (K) => {
    if (H.current === null) return;
    const I = K.changedTouches[0].clientX - H.current;
    H.current = null, I > 45 ? G() : I < -45 && L();
  }, F = (K) => {
    const I = K.currentTarget.scrollTop;
    y(I > 15), g(!0), N.current && clearTimeout(N.current), N.current = setTimeout(() => {
      g(!1);
    }, 900);
  }, Y = () => {
    V.current && V.current.scrollBy({ top: 120, behavior: "smooth" });
  };
  q.useEffect(() => () => {
    N.current && clearTimeout(N.current);
  }, []);
  const J = (K) => {
    K && K.preventDefault();
    const I = document.getElementById("booking-registration-section") || document.getElementById("wp-gravity-form-mount") || A.current;
    if (I) {
      const me = I.getBoundingClientRect().top + window.pageYOffset - 100;
      try {
        window.scrollTo({
          top: Math.max(0, me),
          behavior: "smooth"
        });
      } catch {
        window.scrollTo(0, Math.max(0, me));
      }
      try {
        I.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      } catch {
        I.scrollIntoView();
      }
      window.history && window.history.pushState ? window.history.pushState(null, "", "#booking-registration-section") : window.location.hash = "booking-registration-section";
    } else
      window.location.hash = "booking-registration-section";
  }, te = (K) => {
    const I = document.getElementById("certificate-verification-section");
    if (I) {
      const me = I.getBoundingClientRect().top + window.pageYOffset - 100;
      try {
        window.scrollTo({
          top: Math.max(0, me),
          behavior: "smooth"
        });
      } catch {
        window.scrollTo(0, Math.max(0, me));
      }
      try {
        I.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      } catch {
        I.scrollIntoView();
      }
      window.history && window.history.pushState ? window.history.pushState(null, "", "#certificate-verification-section") : window.location.hash = "certificate-verification-section";
    } else
      window.location.hash = "certificate-verification-section";
  };
  return q.useEffect(() => {
    const K = () => {
      if (typeof window < "u" && window.location.hash === "#certificate-verification-section") {
        const I = setTimeout(() => {
          te();
        }, 200);
        return () => clearTimeout(I);
      }
    };
    return K(), window.addEventListener("hashchange", K), () => window.removeEventListener("hashchange", K);
  }, []), q.useEffect(() => {
    const K = () => {
      if (typeof window < "u" && (window.location.hash === "#booking-registration-section" || window.location.hash === "#wp-gravity-form-mount")) {
        const I = setTimeout(() => {
          J();
        }, 200);
        return () => clearTimeout(I);
      }
    };
    return K(), window.addEventListener("hashchange", K), () => window.removeEventListener("hashchange", K);
  }, []), /* @__PURE__ */ p.jsxDEV("div", { className: "min-h-screen bg-[#F4F7FB] font-sans pt-[180px] sm:pt-[190px] lg:pt-[175px] xl:pt-[200px] 2xl:pt-[220px] pb-24 relative overflow-hidden select-none", children: [
    /* @__PURE__ */ p.jsxDEV(
      "div",
      {
        className: "absolute inset-0 pointer-events-none overflow-hidden select-none z-0",
        "aria-hidden": "true",
        children: [
          /* @__PURE__ */ p.jsxDEV("div", { className: "absolute top-[180px] sm:top-[190px] lg:top-[175px] xl:top-[200px] 2xl:top-[220px] right-[120px] lg:right-[60px] xl:right-[120px] w-0 h-0 overflow-visible origin-top-left transform rotate-90 text-[52px] sm:text-[64px] lg:text-[72px] xl:text-[80px] font-black tracking-widest text-[#042F61]/[0.07] uppercase leading-none whitespace-nowrap select-none", children: "PROFESSIONAL DEVELOPMENT" }, void 0, !1, {
            fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
            lineNumber: 1013,
            columnNumber: 9
          }, void 0),
          /* @__PURE__ */ p.jsxDEV("div", { className: "absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(0,114,206,0.06)_0%,transparent_70%)] blur-3xl pointer-events-none" }, void 0, !1, {
            fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
            lineNumber: 1017,
            columnNumber: 9
          }, void 0),
          /* @__PURE__ */ p.jsxDEV("div", { className: "absolute bottom-1/4 right-10 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(253,185,19,0.05)_0%,transparent_70%)] blur-3xl pointer-events-none" }, void 0, !1, {
            fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
            lineNumber: 1018,
            columnNumber: 9
          }, void 0)
        ]
      },
      void 0,
      !0,
      {
        fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
        lineNumber: 1008,
        columnNumber: 7
      },
      void 0
    ),
    /* @__PURE__ */ p.jsxDEV("div", { className: "max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-8 relative z-10", children: [
      /* @__PURE__ */ p.jsxDEV("div", { className: "relative", children: [
        /* @__PURE__ */ p.jsxDEV(
          "div",
          {
            className: "relative mt-2 sm:mt-3 lg:mt-4 mb-4 sm:mb-5 -mx-2 sm:-mx-4 lg:-mx-6 px-2 sm:px-4 lg:px-6",
            onTouchStart: X,
            onTouchEnd: ee,
            children: [
              /* @__PURE__ */ p.jsxDEV("div", { className: "relative w-full overflow-hidden py-3 sm:py-4 px-1 sm:px-2", children: [
                /* @__PURE__ */ p.jsxDEV(
                  "div",
                  {
                    className: "invisible pointer-events-none select-none opacity-0 w-[76%] sm:w-[72%] lg:w-[68%] xl:w-[66%] max-w-[960px] mx-auto",
                    "aria-hidden": "true",
                    children: /* @__PURE__ */ p.jsxDEV(
                      ug,
                      {
                        session: _,
                        sessionIndex: f,
                        totalSessions: l.length,
                        isCenter: !0,
                        isSpacer: !0,
                        scrollToGravityFormMount: J,
                        allSessions: l
                      },
                      void 0,
                      !1,
                      {
                        fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                        lineNumber: 1046,
                        columnNumber: 17
                      },
                      void 0
                    )
                  },
                  void 0,
                  !1,
                  {
                    fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                    lineNumber: 1042,
                    columnNumber: 15
                  },
                  void 0
                ),
                /* @__PURE__ */ p.jsxDEV("div", { className: "absolute inset-0 flex items-center justify-center pointer-events-none", children: l.map((K, I) => {
                  const Se = l.length;
                  let de = (I - f) % Se;
                  de > Math.floor(Se / 2) ? de -= Se : de < -Math.floor((Se - 1) / 2) && (de += Se);
                  const me = de === 0, j = de === -1, $ = de === 1, Q = Math.abs(de) <= 1;
                  let ne = "translate(-50%, -50%) scale(1)", oe = 1, D = 20;
                  return me ? (ne = "translate(-50%, -50%) scale(1)", oe = 1, D = 20) : j ? (ne = "translate(calc(-50% - 30%), -50%) scale(0.82)", oe = 0.65, D = 10) : $ ? (ne = "translate(calc(-50% + 30%), -50%) scale(0.82)", oe = 0.65, D = 10) : (ne = de < 0 ? "translate(calc(-50% - 120%), -50%) scale(0.7)" : "translate(calc(-50% + 120%), -50%) scale(0.7)", oe = 0, D = 0), /* @__PURE__ */ p.jsxDEV(
                    "div",
                    {
                      style: {
                        transform: ne,
                        opacity: oe,
                        zIndex: D,
                        pointerEvents: Q ? "auto" : "none",
                        visibility: Q ? "visible" : "hidden",
                        transition: "transform 550ms cubic-bezier(0.16, 1, 0.3, 1), opacity 500ms ease, filter 500ms ease",
                        left: "50%",
                        top: "50%"
                      },
                      className: `absolute w-[76%] sm:w-[72%] lg:w-[68%] xl:w-[66%] max-w-[960px] h-[94%] sm:h-[96%] bg-transparent transition-all ${me ? "" : "hover:opacity-85 filter brightness-[0.98]"}`,
                      children: /* @__PURE__ */ p.jsxDEV(
                        ug,
                        {
                          session: K,
                          sessionIndex: I,
                          totalSessions: l.length,
                          isCenter: me,
                          onCardClick: () => {
                            j && G(), $ && L();
                          },
                          scrollToGravityFormMount: J,
                          allSessions: l
                        },
                        void 0,
                        !1,
                        {
                          fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                          lineNumber: 1116,
                          columnNumber: 23
                        },
                        void 0
                      )
                    },
                    K.id || I,
                    !1,
                    {
                      fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                      lineNumber: 1098,
                      columnNumber: 21
                    },
                    void 0
                  );
                }) }, void 0, !1, {
                  fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                  lineNumber: 1058,
                  columnNumber: 15
                }, void 0)
              ] }, void 0, !0, {
                fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                lineNumber: 1039,
                columnNumber: 13
              }, void 0),
              l.length > 1 && /* @__PURE__ */ p.jsxDEV(p.Fragment, { children: [
                /* @__PURE__ */ p.jsxDEV(
                  "button",
                  {
                    type: "button",
                    onClick: G,
                    "aria-label": "Previous upcoming session",
                    className: "absolute left-1 sm:left-2 lg:left-3 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-full bg-white/95 hover:bg-[#0072CE] text-[#042F61] hover:text-white border-2 border-white shadow-[0_6px_20px_rgba(4,47,97,0.18)] hover:shadow-[0_10px_25px_rgba(0,114,206,0.35)] flex items-center justify-center transition-all duration-300 transform hover:scale-110 active:scale-95 cursor-pointer backdrop-blur-md group",
                    children: /* @__PURE__ */ p.jsxDEV(KD, { className: "w-5 h-5 stroke-[2.5] transition-transform duration-200 group-hover:-translate-x-0.5" }, void 0, !1, {
                      fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                      lineNumber: 1144,
                      columnNumber: 19
                    }, void 0)
                  },
                  void 0,
                  !1,
                  {
                    fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                    lineNumber: 1138,
                    columnNumber: 17
                  },
                  void 0
                ),
                /* @__PURE__ */ p.jsxDEV(
                  "button",
                  {
                    type: "button",
                    onClick: L,
                    "aria-label": "Next upcoming session",
                    className: "absolute right-1 sm:right-2 lg:right-3 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-full bg-white/95 hover:bg-[#0072CE] text-[#042F61] hover:text-white border-2 border-white shadow-[0_6px_20px_rgba(4,47,97,0.18)] hover:shadow-[0_10px_25px_rgba(0,114,206,0.35)] flex items-center justify-center transition-all duration-300 transform hover:scale-110 active:scale-95 cursor-pointer backdrop-blur-md group",
                    children: /* @__PURE__ */ p.jsxDEV(ev, { className: "w-5 h-5 stroke-[2.5] transition-transform duration-200 group-hover:translate-x-0.5" }, void 0, !1, {
                      fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                      lineNumber: 1153,
                      columnNumber: 19
                    }, void 0)
                  },
                  void 0,
                  !1,
                  {
                    fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                    lineNumber: 1147,
                    columnNumber: 17
                  },
                  void 0
                )
              ] }, void 0, !0, {
                fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                lineNumber: 1137,
                columnNumber: 15
              }, void 0),
              l.length > 1 && /* @__PURE__ */ p.jsxDEV("div", { className: "flex justify-center items-center mt-2.5 sm:mt-3 relative z-30", children: /* @__PURE__ */ p.jsxDEV("div", { className: "flex items-center gap-1.5 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full border border-slate-200/80 shadow-xs", children: l.map((K, I) => /* @__PURE__ */ p.jsxDEV(
                "button",
                {
                  type: "button",
                  onClick: () => h(I),
                  "aria-label": `Go to upcoming session slide ${I + 1}`,
                  className: `transition-all rounded-full cursor-pointer ${I === f ? "w-5 h-2 bg-[#0072CE]" : "w-2 h-2 bg-slate-300 hover:bg-slate-400"}`
                },
                I,
                !1,
                {
                  fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                  lineNumber: 1163,
                  columnNumber: 21
                },
                void 0
              )) }, void 0, !1, {
                fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                lineNumber: 1161,
                columnNumber: 17
              }, void 0) }, void 0, !1, {
                fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                lineNumber: 1160,
                columnNumber: 15
              }, void 0)
            ]
          },
          void 0,
          !0,
          {
            fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
            lineNumber: 1034,
            columnNumber: 11
          },
          void 0
        ),
        /* @__PURE__ */ p.jsxDEV("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-3.5 sm:gap-5", children: [
          /* @__PURE__ */ p.jsxDEV("div", { className: "lg:col-span-4 flex flex-col gap-3.5 sm:gap-5 justify-between", children: [
            /* @__PURE__ */ p.jsxDEV("div", { className: "bg-[#E1EFFB] border border-[#B8DCF8] rounded-[24px] p-5 sm:p-6 flex flex-col justify-between relative shadow-sm hover:shadow-md transition-shadow flex-1", children: [
              /* @__PURE__ */ p.jsxDEV("div", { children: [
                /* @__PURE__ */ p.jsxDEV("div", { className: "flex items-start justify-between gap-4 mb-2", children: [
                  /* @__PURE__ */ p.jsxDEV("div", { children: [
                    /* @__PURE__ */ p.jsxDEV("span", { className: "text-[11px] font-bold text-[#0072CE] uppercase tracking-widest block", children: "Our" }, void 0, !1, {
                      fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                      lineNumber: 1199,
                      columnNumber: 23
                    }, void 0),
                    /* @__PURE__ */ p.jsxDEV("h2", { className: "text-2xl sm:text-[24px] font-black text-[#042F61] tracking-tight leading-tight mt-0.5", children: "Community" }, void 0, !1, {
                      fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                      lineNumber: 1200,
                      columnNumber: 23
                    }, void 0)
                  ] }, void 0, !0, {
                    fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                    lineNumber: 1198,
                    columnNumber: 21
                  }, void 0),
                  /* @__PURE__ */ p.jsxDEV("div", { className: "w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-[#042F61] shrink-0", children: /* @__PURE__ */ p.jsxDEV(Gc, { className: "w-[30px] h-[30px] text-[#042F61]", strokeWidth: 2 }, void 0, !1, {
                    fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                    lineNumber: 1206,
                    columnNumber: 23
                  }, void 0) }, void 0, !1, {
                    fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                    lineNumber: 1205,
                    columnNumber: 21
                  }, void 0)
                ] }, void 0, !0, {
                  fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                  lineNumber: 1197,
                  columnNumber: 19
                }, void 0),
                /* @__PURE__ */ p.jsxDEV("div", { className: "space-y-3 pt-1", children: [
                  /* @__PURE__ */ p.jsxDEV("div", { className: "flex items-center gap-3", children: [
                    /* @__PURE__ */ p.jsxDEV("div", { className: "w-9 h-9 rounded-full bg-white shadow-xs flex items-center justify-center text-[#042F61] shrink-0", children: /* @__PURE__ */ p.jsxDEV(Gc, { className: "w-4 h-4 text-[#042F61]" }, void 0, !1, {
                      fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                      lineNumber: 1215,
                      columnNumber: 25
                    }, void 0) }, void 0, !1, {
                      fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                      lineNumber: 1214,
                      columnNumber: 23
                    }, void 0),
                    /* @__PURE__ */ p.jsxDEV("div", { children: [
                      /* @__PURE__ */ p.jsxDEV("span", { className: "text-sm sm:text-base font-black text-[#042F61] block leading-tight", children: "1,200+ Active" }, void 0, !1, {
                        fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                        lineNumber: 1218,
                        columnNumber: 25
                      }, void 0),
                      /* @__PURE__ */ p.jsxDEV("span", { className: "text-[11px] font-semibold text-slate-600 block", children: "Educators & Assessors" }, void 0, !1, {
                        fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                        lineNumber: 1219,
                        columnNumber: 25
                      }, void 0)
                    ] }, void 0, !0, {
                      fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                      lineNumber: 1217,
                      columnNumber: 23
                    }, void 0)
                  ] }, void 0, !0, {
                    fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                    lineNumber: 1213,
                    columnNumber: 21
                  }, void 0),
                  /* @__PURE__ */ p.jsxDEV("div", { className: "flex items-center gap-3", children: [
                    /* @__PURE__ */ p.jsxDEV("div", { className: "w-9 h-9 rounded-full bg-white shadow-xs flex items-center justify-center text-[#042F61] shrink-0", children: /* @__PURE__ */ p.jsxDEV(qc, { className: "w-4 h-4 text-[#042F61]" }, void 0, !1, {
                      fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                      lineNumber: 1226,
                      columnNumber: 25
                    }, void 0) }, void 0, !1, {
                      fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                      lineNumber: 1225,
                      columnNumber: 23
                    }, void 0),
                    /* @__PURE__ */ p.jsxDEV("div", { children: [
                      /* @__PURE__ */ p.jsxDEV("span", { className: "text-sm sm:text-base font-black text-[#042F61] block leading-tight", children: "100% ASQA" }, void 0, !1, {
                        fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                        lineNumber: 1229,
                        columnNumber: 25
                      }, void 0),
                      /* @__PURE__ */ p.jsxDEV("span", { className: "text-[11px] font-semibold text-slate-600 block", children: "Compliant Frameworks" }, void 0, !1, {
                        fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                        lineNumber: 1230,
                        columnNumber: 25
                      }, void 0)
                    ] }, void 0, !0, {
                      fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                      lineNumber: 1228,
                      columnNumber: 23
                    }, void 0)
                  ] }, void 0, !0, {
                    fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                    lineNumber: 1224,
                    columnNumber: 21
                  }, void 0)
                ] }, void 0, !0, {
                  fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                  lineNumber: 1211,
                  columnNumber: 19
                }, void 0)
              ] }, void 0, !0, {
                fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                lineNumber: 1195,
                columnNumber: 17
              }, void 0),
              /* @__PURE__ */ p.jsxDEV("div", { className: "pt-4 sm:pt-5", children: /* @__PURE__ */ p.jsxDEV(
                "a",
                {
                  href: "mailto:professionaldevelopment@chelsongordon.com?subject=Enquiry%20from%20Community%20-%20Ask%20us%20Anything",
                  className: "w-full inline-flex items-center justify-center gap-2 bg-[#042F61] hover:bg-[#0072CE] text-white text-xs font-black uppercase tracking-wider px-5 py-3 rounded-xl shadow-xs transition-colors cursor-pointer group select-none",
                  children: [
                    /* @__PURE__ */ p.jsxDEV("span", { children: "Ask us Anything" }, void 0, !1, {
                      fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                      lineNumber: 1242,
                      columnNumber: 21
                    }, void 0),
                    /* @__PURE__ */ p.jsxDEV(h5, { className: "w-4 h-4 transition-transform group-hover:scale-110" }, void 0, !1, {
                      fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                      lineNumber: 1243,
                      columnNumber: 21
                    }, void 0)
                  ]
                },
                void 0,
                !0,
                {
                  fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                  lineNumber: 1238,
                  columnNumber: 19
                },
                void 0
              ) }, void 0, !1, {
                fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                lineNumber: 1237,
                columnNumber: 17
              }, void 0)
            ] }, void 0, !0, {
              fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
              lineNumber: 1194,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ p.jsxDEV("div", { className: "bg-[#E1EFFB] border border-[#B8DCF8] rounded-[24px] p-5 sm:p-6 flex flex-col justify-between relative shadow-sm hover:shadow-md transition-shadow", children: [
              /* @__PURE__ */ p.jsxDEV("div", { children: [
                /* @__PURE__ */ p.jsxDEV("div", { className: "flex items-start justify-between gap-4 mb-2", children: [
                  /* @__PURE__ */ p.jsxDEV("div", { children: [
                    /* @__PURE__ */ p.jsxDEV("span", { className: "text-[11px] font-bold text-[#0072CE] uppercase tracking-widest block", children: "Share Your Experience" }, void 0, !1, {
                      fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                      lineNumber: 1253,
                      columnNumber: 23
                    }, void 0),
                    /* @__PURE__ */ p.jsxDEV("h2", { className: "text-2xl sm:text-[24px] font-black text-[#042F61] tracking-tight leading-tight mt-0.5", children: "Give Feedback" }, void 0, !1, {
                      fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                      lineNumber: 1254,
                      columnNumber: 23
                    }, void 0)
                  ] }, void 0, !0, {
                    fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                    lineNumber: 1252,
                    columnNumber: 21
                  }, void 0),
                  /* @__PURE__ */ p.jsxDEV("div", { className: "w-9 h-9 rounded-full bg-white shadow-sm flex items-center justify-center text-[#042F61] shrink-0", children: /* @__PURE__ */ p.jsxDEV(Hc, { className: "w-4 h-4 text-[#042F61]" }, void 0, !1, {
                    fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                    lineNumber: 1259,
                    columnNumber: 23
                  }, void 0) }, void 0, !1, {
                    fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                    lineNumber: 1258,
                    columnNumber: 21
                  }, void 0)
                ] }, void 0, !0, {
                  fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                  lineNumber: 1251,
                  columnNumber: 19
                }, void 0),
                /* @__PURE__ */ p.jsxDEV("p", { className: "text-xs text-slate-600 leading-relaxed mt-2 mb-4", children: "Help us refine future vocational masterclasses and topic compliance coverage." }, void 0, !1, {
                  fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                  lineNumber: 1262,
                  columnNumber: 19
                }, void 0)
              ] }, void 0, !0, {
                fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                lineNumber: 1250,
                columnNumber: 17
              }, void 0),
              /* @__PURE__ */ p.jsxDEV(
                "a",
                {
                  href: "https://chelsongordon.com/feedback/",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "w-full inline-flex items-center justify-center gap-2 bg-[#042F61] hover:bg-[#0072CE] text-white text-xs font-black uppercase tracking-wider px-5 py-3 rounded-xl shadow-xs transition-colors cursor-pointer group select-none",
                  children: [
                    /* @__PURE__ */ p.jsxDEV("span", { children: "Give Feedback" }, void 0, !1, {
                      fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                      lineNumber: 1273,
                      columnNumber: 19
                    }, void 0),
                    /* @__PURE__ */ p.jsxDEV(pa, { className: "w-3.5 h-3.5 transition-transform group-hover:translate-x-1" }, void 0, !1, {
                      fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                      lineNumber: 1274,
                      columnNumber: 19
                    }, void 0)
                  ]
                },
                void 0,
                !0,
                {
                  fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                  lineNumber: 1267,
                  columnNumber: 17
                },
                void 0
              )
            ] }, void 0, !0, {
              fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
              lineNumber: 1249,
              columnNumber: 15
            }, void 0)
          ] }, void 0, !0, {
            fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
            lineNumber: 1191,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ p.jsxDEV("div", { className: "lg:col-span-8 bg-gradient-to-br from-[#123E6E] via-[#1A4E88] to-[#225E9F] text-white border border-white/15 rounded-[24px] p-5 sm:p-6 md:p-7 flex flex-col justify-start relative overflow-hidden shadow-md", children: [
            /* @__PURE__ */ p.jsxDEV(
              "div",
              {
                className: "absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-white/35 via-50% to-transparent pointer-events-none",
                "aria-hidden": "true"
              },
              void 0,
              !1,
              {
                fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                lineNumber: 1288,
                columnNumber: 15
              },
              void 0
            ),
            /* @__PURE__ */ p.jsxDEV(
              "div",
              {
                className: "absolute -top-14 -right-14 w-40 h-40 bg-white/10 rounded-full blur-2xl pointer-events-none",
                "aria-hidden": "true"
              },
              void 0,
              !1,
              {
                fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                lineNumber: 1292,
                columnNumber: 15
              },
              void 0
            ),
            /* @__PURE__ */ p.jsxDEV("style", { children: `
                .past-pd-scroll-area {
                  scrollbar-gutter: stable;
                }
                .past-pd-scroll-area::-webkit-scrollbar {
                  width: 5px;
                }
                .past-pd-scroll-area::-webkit-scrollbar-track {
                  background: transparent;
                }
                .past-pd-scroll-area::-webkit-scrollbar-thumb {
                  background-color: transparent;
                  border-radius: 9999px;
                  transition: background-color 0.25s ease;
                }
                .past-pd-scroll-area.is-scrolling::-webkit-scrollbar-thumb {
                  background-color: rgba(255, 255, 255, 0.4);
                }
              ` }, void 0, !1, {
              fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
              lineNumber: 1298,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ p.jsxDEV("div", { className: "flex items-center justify-between pb-3.5 sm:pb-4 border-b border-white/15 mb-3 sm:mb-3.5 relative z-10", children: [
              /* @__PURE__ */ p.jsxDEV("div", { className: "flex items-center gap-3 sm:gap-3.5", children: [
                /* @__PURE__ */ p.jsxDEV("div", { className: "w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/15 border border-white/20 flex items-center justify-center text-white shrink-0 shadow-inner", children: /* @__PURE__ */ p.jsxDEV(r5, { className: "w-5 h-5 text-white" }, void 0, !1, {
                  fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                  lineNumber: 1322,
                  columnNumber: 21
                }, void 0) }, void 0, !1, {
                  fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                  lineNumber: 1321,
                  columnNumber: 19
                }, void 0),
                /* @__PURE__ */ p.jsxDEV("div", { children: [
                  /* @__PURE__ */ p.jsxDEV("span", { className: "text-[11px] font-bold text-sky-200 uppercase tracking-wider block", children: "50+ Completed Masterclasses" }, void 0, !1, {
                    fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                    lineNumber: 1325,
                    columnNumber: 21
                  }, void 0),
                  /* @__PURE__ */ p.jsxDEV("h2", { className: "text-2xl sm:text-[26px] font-black text-white tracking-tight leading-tight mt-0.5", children: "Previous Sessions" }, void 0, !1, {
                    fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                    lineNumber: 1328,
                    columnNumber: 21
                  }, void 0)
                ] }, void 0, !0, {
                  fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                  lineNumber: 1324,
                  columnNumber: 19
                }, void 0)
              ] }, void 0, !0, {
                fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                lineNumber: 1320,
                columnNumber: 17
              }, void 0),
              /* @__PURE__ */ p.jsxDEV("span", { className: "text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/15 text-white border border-white/25 shadow-2xs font-sans", children: [
                c.length,
                " Topics"
              ] }, void 0, !0, {
                fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                lineNumber: 1334,
                columnNumber: 17
              }, void 0)
            ] }, void 0, !0, {
              fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
              lineNumber: 1319,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ p.jsxDEV(
              "div",
              {
                ref: V,
                onScroll: F,
                className: `overflow-y-auto max-h-[310px] sm:max-h-[340px] lg:max-h-[365px] pr-1.5 flex flex-col gap-1.5 sm:gap-2 past-pd-scroll-area relative z-10 ${v ? "is-scrolling" : ""}`,
                style: {
                  scrollbarWidth: "thin",
                  scrollbarColor: v ? "rgba(255, 255, 255, 0.4) transparent" : "transparent transparent"
                },
                tabIndex: 0,
                role: "region",
                "aria-label": "Scrollable list of previous session topics",
                children: [
                  (c.length > 3 ? c.slice(0, 3) : c).map((K, I) => {
                    const Se = Jn(K.title);
                    return /* @__PURE__ */ p.jsxDEV(
                      "div",
                      {
                        onClick: () => z(K),
                        onKeyDown: (de) => {
                          (de.key === "Enter" || de.key === " ") && (de.preventDefault(), z(K));
                        },
                        role: "button",
                        tabIndex: 0,
                        "aria-label": `View details for ${Se}`,
                        className: "px-2.5 py-0 rounded-xl bg-white/10 border border-white/15 hover:border-white/40 hover:bg-white/20 transition-all duration-200 group flex items-center w-full cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-white/40 select-none",
                        children: [
                          /* @__PURE__ */ p.jsxDEV("div", { className: "w-[16%] sm:w-[13%] aspect-square flex items-center justify-center shrink-0 -translate-x-[4px]", children: /* @__PURE__ */ p.jsxDEV("span", { className: "text-lg sm:text-xl font-black text-[#FDB913] font-sans select-none tracking-tight", children: I + 1 }, void 0, !1, {
                            fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                            lineNumber: 1375,
                            columnNumber: 25
                          }, void 0) }, void 0, !1, {
                            fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                            lineNumber: 1374,
                            columnNumber: 23
                          }, void 0),
                          /* @__PURE__ */ p.jsxDEV("div", { className: "w-[84%] sm:w-[87%] flex-1 pl-2 sm:pl-3 pr-2 py-0.5 sm:py-1 -translate-x-[4px]", children: [
                            /* @__PURE__ */ p.jsxDEV("div", { className: "flex items-center gap-2 mb-0.5", children: [
                              /* @__PURE__ */ p.jsxDEV("span", { className: "text-[10px] sm:text-[11px] font-semibold text-sky-200 flex items-center gap-1", children: [
                                /* @__PURE__ */ p.jsxDEV(ha, { className: "w-3 h-3 text-sky-300" }, void 0, !1, {
                                  fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                                  lineNumber: 1384,
                                  columnNumber: 29
                                }, void 0),
                                Yc(K.date)
                              ] }, void 0, !0, {
                                fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                                lineNumber: 1383,
                                columnNumber: 27
                              }, void 0),
                              K.time && /* @__PURE__ */ p.jsxDEV("span", { className: "text-[10px] text-sky-200/80", children: [
                                "• ",
                                K.time
                              ] }, void 0, !0, {
                                fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                                lineNumber: 1388,
                                columnNumber: 29
                              }, void 0)
                            ] }, void 0, !0, {
                              fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                              lineNumber: 1382,
                              columnNumber: 25
                            }, void 0),
                            sg(Se)
                          ] }, void 0, !0, {
                            fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                            lineNumber: 1381,
                            columnNumber: 23
                          }, void 0)
                        ]
                      },
                      K.id || I,
                      !0,
                      {
                        fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                        lineNumber: 1359,
                        columnNumber: 21
                      },
                      void 0
                    );
                  }),
                  c.length > 3 && /* @__PURE__ */ p.jsxDEV(xl, { initial: !1, children: !x && /* @__PURE__ */ p.jsxDEV(
                    Oe.div,
                    {
                      initial: { opacity: 0, height: 0, marginTop: -6 },
                      animate: { opacity: 1, height: "auto", marginTop: 0 },
                      exit: { opacity: 0, height: 0, marginTop: -6 },
                      transition: { duration: 0.28, ease: "easeInOut" },
                      className: "overflow-hidden w-full shrink-0",
                      children: /* @__PURE__ */ p.jsxDEV(
                        "div",
                        {
                          onClick: Y,
                          onKeyDown: (K) => {
                            (K.key === "Enter" || K.key === " ") && (K.preventDefault(), Y());
                          },
                          role: "button",
                          tabIndex: 0,
                          "aria-label": `Scroll to view ${c.length - 3} more sessions`,
                          className: "w-full py-1.5 px-2 flex items-center justify-center gap-2 text-white hover:text-[#FDB913] transition-colors cursor-pointer select-none group focus:outline-hidden",
                          children: [
                            /* @__PURE__ */ p.jsxDEV(Ib, { className: "w-4 h-4 shrink-0 text-white group-hover:text-[#FDB913] group-hover:translate-y-0.5 transition-transform duration-200" }, void 0, !1, {
                              fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                              lineNumber: 1422,
                              columnNumber: 27
                            }, void 0),
                            /* @__PURE__ */ p.jsxDEV("span", { className: "text-xs sm:text-sm font-semibold text-white group-hover:text-[#FDB913] transition-colors tracking-tight whitespace-nowrap", children: "Scroll to view more sessions" }, void 0, !1, {
                              fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                              lineNumber: 1423,
                              columnNumber: 27
                            }, void 0),
                            /* @__PURE__ */ p.jsxDEV("span", { className: "inline-flex items-center justify-center px-2 py-0.5 text-[11px] font-bold rounded-full bg-white/15 text-white border border-white/20 group-hover:bg-white/25 group-hover:text-[#FDB913] transition-colors whitespace-nowrap shrink-0", children: [
                              "+",
                              c.length - 3
                            ] }, void 0, !0, {
                              fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                              lineNumber: 1426,
                              columnNumber: 27
                            }, void 0)
                          ]
                        },
                        void 0,
                        !0,
                        {
                          fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                          lineNumber: 1409,
                          columnNumber: 25
                        },
                        void 0
                      )
                    },
                    "scroll-more-past-indicator",
                    !1,
                    {
                      fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                      lineNumber: 1401,
                      columnNumber: 23
                    },
                    void 0
                  ) }, void 0, !1, {
                    fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                    lineNumber: 1399,
                    columnNumber: 19
                  }, void 0),
                  c.length > 3 && c.slice(3).map((K, I) => {
                    const Se = Jn(K.title), de = I + 4;
                    return /* @__PURE__ */ p.jsxDEV(
                      "div",
                      {
                        onClick: () => z(K),
                        onKeyDown: (me) => {
                          (me.key === "Enter" || me.key === " ") && (me.preventDefault(), z(K));
                        },
                        role: "button",
                        tabIndex: 0,
                        "aria-label": `View details for ${Se}`,
                        className: "px-2.5 py-0 rounded-xl bg-white/10 border border-white/15 hover:border-white/40 hover:bg-white/20 transition-all duration-200 group flex items-center w-full cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-white/40 select-none",
                        children: [
                          /* @__PURE__ */ p.jsxDEV("div", { className: "w-[16%] sm:w-[13%] aspect-square flex items-center justify-center shrink-0 -translate-x-[4px]", children: /* @__PURE__ */ p.jsxDEV("span", { className: "text-lg sm:text-xl font-black text-[#FDB913] font-sans select-none tracking-tight", children: de }, void 0, !1, {
                            fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                            lineNumber: 1457,
                            columnNumber: 25
                          }, void 0) }, void 0, !1, {
                            fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                            lineNumber: 1456,
                            columnNumber: 23
                          }, void 0),
                          /* @__PURE__ */ p.jsxDEV("div", { className: "w-[84%] sm:w-[87%] flex-1 pl-2 sm:pl-3 pr-2 py-0.5 sm:py-1 -translate-x-[4px]", children: [
                            /* @__PURE__ */ p.jsxDEV("div", { className: "flex items-center gap-2 mb-0.5", children: [
                              /* @__PURE__ */ p.jsxDEV("span", { className: "text-[10px] sm:text-[11px] font-semibold text-sky-200 flex items-center gap-1", children: [
                                /* @__PURE__ */ p.jsxDEV(ha, { className: "w-3 h-3 text-sky-300" }, void 0, !1, {
                                  fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                                  lineNumber: 1466,
                                  columnNumber: 29
                                }, void 0),
                                Yc(K.date)
                              ] }, void 0, !0, {
                                fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                                lineNumber: 1465,
                                columnNumber: 27
                              }, void 0),
                              K.time && /* @__PURE__ */ p.jsxDEV("span", { className: "text-[10px] text-sky-200/80", children: [
                                "• ",
                                K.time
                              ] }, void 0, !0, {
                                fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                                lineNumber: 1470,
                                columnNumber: 29
                              }, void 0)
                            ] }, void 0, !0, {
                              fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                              lineNumber: 1464,
                              columnNumber: 25
                            }, void 0),
                            sg(Se)
                          ] }, void 0, !0, {
                            fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                            lineNumber: 1463,
                            columnNumber: 23
                          }, void 0)
                        ]
                      },
                      K.id || de,
                      !0,
                      {
                        fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                        lineNumber: 1441,
                        columnNumber: 21
                      },
                      void 0
                    );
                  })
                ]
              },
              void 0,
              !0,
              {
                fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                lineNumber: 1340,
                columnNumber: 15
              },
              void 0
            )
          ] }, void 0, !0, {
            fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
            lineNumber: 1285,
            columnNumber: 13
          }, void 0)
        ] }, void 0, !0, {
          fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
          lineNumber: 1184,
          columnNumber: 11
        }, void 0)
      ] }, void 0, !0, {
        fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
        lineNumber: 1026,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ p.jsxDEV(
        "div",
        {
          id: "booking-registration-section",
          className: "mt-8 sm:mt-12 bg-white rounded-[26px] sm:rounded-[28px] p-6 sm:p-8 lg:p-10 border border-slate-200/80 shadow-sm relative overflow-hidden scroll-mt-28 sm:scroll-mt-36",
          children: [
            /* @__PURE__ */ p.jsxDEV("div", { className: "mb-6 sm:mb-8 pb-5 sm:pb-6 border-b border-slate-100 relative z-10", children: [
              /* @__PURE__ */ p.jsxDEV("div", { className: "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0072CE]/10 text-[#0072CE] text-xs font-bold tracking-wider uppercase mb-3", children: [
                /* @__PURE__ */ p.jsxDEV(YD, { className: "w-3.5 h-3.5 text-[#0072CE]" }, void 0, !1, {
                  fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                  lineNumber: 1497,
                  columnNumber: 15
                }, void 0),
                /* @__PURE__ */ p.jsxDEV("span", { children: "Session Registration" }, void 0, !1, {
                  fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                  lineNumber: 1498,
                  columnNumber: 15
                }, void 0)
              ] }, void 0, !0, {
                fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                lineNumber: 1496,
                columnNumber: 13
              }, void 0),
              /* @__PURE__ */ p.jsxDEV("h2", { className: "text-2xl sm:text-3xl lg:text-[32px] font-black text-[#042F61] tracking-tight leading-tight", children: "Book Your Professional Development Session" }, void 0, !1, {
                fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                lineNumber: 1500,
                columnNumber: 13
              }, void 0),
              /* @__PURE__ */ p.jsxDEV("p", { className: "text-sm sm:text-base text-slate-600 max-w-2xl mt-2 leading-relaxed", children: "Complete the registration form below to secure your seat for upcoming masterclasses and receive direct session access details." }, void 0, !1, {
                fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                lineNumber: 1503,
                columnNumber: 13
              }, void 0)
            ] }, void 0, !0, {
              fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
              lineNumber: 1495,
              columnNumber: 11
            }, void 0),
            /* @__PURE__ */ p.jsxDEV(
              "div",
              {
                id: "wp-gravity-form-mount",
                ref: A,
                className: "gform_wrapper gravity-form-mount-container w-full min-h-[160px] flex items-center justify-center scroll-mt-28 sm:scroll-mt-36",
                "data-form-type": "gravity-forms",
                "data-form-name": "pd-session-registration"
              },
              void 0,
              !1,
              {
                fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                lineNumber: 1508,
                columnNumber: 11
              },
              void 0
            )
          ]
        },
        void 0,
        !0,
        {
          fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
          lineNumber: 1490,
          columnNumber: 9
        },
        void 0
      ),
      /* @__PURE__ */ p.jsxDEV(z5, {}, void 0, !1, {
        fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
        lineNumber: 1521,
        columnNumber: 9
      }, void 0)
    ] }, void 0, !0, {
      fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
      lineNumber: 1021,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ p.jsxDEV(xl, { children: T && /* @__PURE__ */ p.jsxDEV(
      "div",
      {
        className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs",
        onClick: () => z(null),
        children: /* @__PURE__ */ p.jsxDEV(
          Oe.div,
          {
            initial: { opacity: 0, scale: 0.95, y: 15 },
            animate: { opacity: 1, scale: 1, y: 0 },
            exit: { opacity: 0, scale: 0.95, y: 15 },
            transition: { duration: 0.2 },
            className: "bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative max-h-[90vh] overflow-y-auto",
            onClick: (K) => K.stopPropagation(),
            children: [
              /* @__PURE__ */ p.jsxDEV(
                "button",
                {
                  onClick: () => z(null),
                  className: "absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors cursor-pointer",
                  "aria-label": "Close Modal",
                  children: /* @__PURE__ */ p.jsxDEV(av, { className: "w-4 h-4" }, void 0, !1, {
                    fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                    lineNumber: 1548,
                    columnNumber: 17
                  }, void 0)
                },
                void 0,
                !1,
                {
                  fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                  lineNumber: 1543,
                  columnNumber: 15
                },
                void 0
              ),
              /* @__PURE__ */ p.jsxDEV("div", { className: "space-y-4", children: [
                /* @__PURE__ */ p.jsxDEV("div", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0072CE]/10 text-[#0072CE] text-xs font-bold uppercase tracking-wider", children: [
                  /* @__PURE__ */ p.jsxDEV(ag, { className: "w-3.5 h-3.5 text-[#FDB913]" }, void 0, !1, {
                    fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                    lineNumber: 1553,
                    columnNumber: 19
                  }, void 0),
                  /* @__PURE__ */ p.jsxDEV("span", { children: "About this Session" }, void 0, !1, {
                    fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                    lineNumber: 1554,
                    columnNumber: 19
                  }, void 0)
                ] }, void 0, !0, {
                  fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                  lineNumber: 1552,
                  columnNumber: 17
                }, void 0),
                /* @__PURE__ */ p.jsxDEV("h3", { className: "text-2xl font-black text-[#042F61] tracking-tight leading-snug", children: T.title }, void 0, !1, {
                  fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                  lineNumber: 1557,
                  columnNumber: 17
                }, void 0),
                /* @__PURE__ */ p.jsxDEV("div", { className: "grid grid-cols-2 gap-3 py-3 border-y border-slate-100", children: [
                  /* @__PURE__ */ p.jsxDEV("div", { className: "flex items-center gap-2.5", children: [
                    /* @__PURE__ */ p.jsxDEV("div", { className: "w-8 h-8 rounded-lg bg-[#0072CE]/10 flex items-center justify-center text-[#0072CE]", children: /* @__PURE__ */ p.jsxDEV(ha, { className: "w-4 h-4" }, void 0, !1, {
                      fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                      lineNumber: 1565,
                      columnNumber: 23
                    }, void 0) }, void 0, !1, {
                      fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                      lineNumber: 1564,
                      columnNumber: 21
                    }, void 0),
                    /* @__PURE__ */ p.jsxDEV("div", { children: [
                      /* @__PURE__ */ p.jsxDEV("span", { className: "text-[10px] uppercase font-bold text-[#042F61] block tracking-wider", children: "Session Date" }, void 0, !1, {
                        fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                        lineNumber: 1568,
                        columnNumber: 23
                      }, void 0),
                      /* @__PURE__ */ p.jsxDEV("span", { className: "text-sm font-semibold text-slate-800", children: T.date }, void 0, !1, {
                        fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                        lineNumber: 1569,
                        columnNumber: 23
                      }, void 0)
                    ] }, void 0, !0, {
                      fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                      lineNumber: 1567,
                      columnNumber: 21
                    }, void 0)
                  ] }, void 0, !0, {
                    fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                    lineNumber: 1563,
                    columnNumber: 19
                  }, void 0),
                  /* @__PURE__ */ p.jsxDEV("div", { className: "flex items-center gap-2.5", children: [
                    /* @__PURE__ */ p.jsxDEV("div", { className: "w-8 h-8 rounded-lg bg-[#0072CE]/10 flex items-center justify-center text-[#0072CE]", children: /* @__PURE__ */ p.jsxDEV(tv, { className: "w-4 h-4" }, void 0, !1, {
                      fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                      lineNumber: 1575,
                      columnNumber: 23
                    }, void 0) }, void 0, !1, {
                      fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                      lineNumber: 1574,
                      columnNumber: 21
                    }, void 0),
                    /* @__PURE__ */ p.jsxDEV("div", { children: [
                      /* @__PURE__ */ p.jsxDEV("span", { className: "text-[10px] uppercase font-bold text-[#042F61] block tracking-wider", children: "Session Time" }, void 0, !1, {
                        fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                        lineNumber: 1578,
                        columnNumber: 23
                      }, void 0),
                      /* @__PURE__ */ p.jsxDEV("span", { className: "text-sm font-semibold text-slate-800", children: T.time }, void 0, !1, {
                        fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                        lineNumber: 1579,
                        columnNumber: 23
                      }, void 0)
                    ] }, void 0, !0, {
                      fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                      lineNumber: 1577,
                      columnNumber: 21
                    }, void 0)
                  ] }, void 0, !0, {
                    fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                    lineNumber: 1573,
                    columnNumber: 19
                  }, void 0)
                ] }, void 0, !0, {
                  fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                  lineNumber: 1562,
                  columnNumber: 17
                }, void 0),
                /* @__PURE__ */ p.jsxDEV("div", { children: [
                  /* @__PURE__ */ p.jsxDEV("h4", { className: "text-xs uppercase font-bold text-[#042F61] tracking-wider mb-2", children: "Description" }, void 0, !1, {
                    fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                    lineNumber: 1585,
                    columnNumber: 19
                  }, void 0),
                  (T.description ? T.description.replace(/<[^>]*>?/gm, "").trim() : "").length > 0 ? /* @__PURE__ */ p.jsxDEV("p", { className: "text-sm text-slate-600 leading-relaxed whitespace-pre-line", children: Jn(T.description) }, void 0, !1, {
                    fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                    lineNumber: 1592,
                    columnNumber: 25
                  }, void 0) : /* @__PURE__ */ p.jsxDEV("div", { className: "p-3.5 sm:p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-slate-600 flex items-start gap-3", children: [
                    /* @__PURE__ */ p.jsxDEV("div", { className: "w-8 h-8 rounded-xl bg-[#FDB913]/15 flex items-center justify-center shrink-0 mt-0.5", children: /* @__PURE__ */ p.jsxDEV(ag, { className: "w-4 h-4 text-[#FDB913]" }, void 0, !1, {
                      fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                      lineNumber: 1601,
                      columnNumber: 27
                    }, void 0) }, void 0, !1, {
                      fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                      lineNumber: 1600,
                      columnNumber: 25
                    }, void 0),
                    /* @__PURE__ */ p.jsxDEV("div", { children: [
                      /* @__PURE__ */ p.jsxDEV("span", { className: "text-xs font-bold text-[#042F61] uppercase tracking-wider block mb-1", children: "Description Pending Update" }, void 0, !1, {
                        fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                        lineNumber: 1604,
                        columnNumber: 27
                      }, void 0),
                      /* @__PURE__ */ p.jsxDEV("p", { className: "text-xs sm:text-sm text-slate-500 leading-relaxed", children: "A detailed session syllabus, learning outcomes, and recording archives for this masterclass will be updated shortly. You can reserve your seat or inquiry below." }, void 0, !1, {
                        fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                        lineNumber: 1607,
                        columnNumber: 27
                      }, void 0)
                    ] }, void 0, !0, {
                      fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                      lineNumber: 1603,
                      columnNumber: 25
                    }, void 0)
                  ] }, void 0, !0, {
                    fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                    lineNumber: 1599,
                    columnNumber: 23
                  }, void 0)
                ] }, void 0, !0, {
                  fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                  lineNumber: 1584,
                  columnNumber: 17
                }, void 0),
                /* @__PURE__ */ p.jsxDEV("div", { className: "pt-4 border-t border-slate-100 flex justify-end", children: /* @__PURE__ */ p.jsxDEV(
                  "button",
                  {
                    type: "button",
                    onClick: () => z(null),
                    className: "w-full sm:w-auto border border-slate-300 hover:border-slate-400 hover:bg-slate-50 text-slate-700 font-bold text-sm py-3 px-6 rounded-xl transition-colors cursor-pointer text-center",
                    children: "Dismiss"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                    lineNumber: 1617,
                    columnNumber: 19
                  },
                  void 0
                ) }, void 0, !1, {
                  fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                  lineNumber: 1616,
                  columnNumber: 17
                }, void 0)
              ] }, void 0, !0, {
                fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                lineNumber: 1551,
                columnNumber: 15
              }, void 0)
            ]
          },
          void 0,
          !0,
          {
            fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
            lineNumber: 1534,
            columnNumber: 13
          },
          void 0
        )
      },
      void 0,
      !1,
      {
        fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
        lineNumber: 1530,
        columnNumber: 11
      },
      void 0
    ) }, void 0, !1, {
      fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
      lineNumber: 1528,
      columnNumber: 7
    }, void 0)
  ] }, void 0, !0, {
    fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
    lineNumber: 1005,
    columnNumber: 5
  }, void 0);
};
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
const cg = "https://storage.googleapis.com/chelsongordon/com.chelsongordon/logos/logo.svg", U5 = "https://storage.googleapis.com/chelsongordon/com.chelsongordon/logos/logo_white.svg", L5 = ({
  isScrolled: i = !1,
  isHomepage: s
}) => {
  const l = () => {
    if (typeof s == "boolean")
      return s;
    if (typeof window > "u" || document.getElementById("pd-announcement"))
      return !0;
    const f = window.location.pathname.split("?")[0].replace(/\/+$/, "") || "/", h = window.location.hash || "";
    return !(f.startsWith("/book-pd-session") || f.startsWith("/our-people") || f.startsWith("/our-teams") || f.startsWith("/team") || f.startsWith("/hr-dashboard") || h.startsWith("#book-pd-session") || h === "#booking-registration-section" || h.startsWith("#our-people") || h.startsWith("#our-teams") || h.startsWith("#meet-our-team") || h.startsWith("#hr-dashboard") || h === "#org-chart") && (f === "/" || f === "");
  }, [r, c] = Th.useState(l);
  Th.useEffect(() => {
    if (typeof s == "boolean") {
      c(s);
      return;
    }
    const f = () => {
      c(l());
    };
    return f(), window.addEventListener("popstate", f), window.addEventListener("hashchange", f), () => {
      window.removeEventListener("popstate", f), window.removeEventListener("hashchange", f);
    };
  }, [s]);
  const m = (f) => {
    if (r) {
      f.preventDefault();
      const h = document.getElementById("pd-announcement");
      h ? (h.scrollIntoView({ behavior: "smooth", block: "start" }), window.history.pushState(null, "", "#pd-announcement")) : (window.history.pushState(null, "", "/#pd-announcement"), window.dispatchEvent(new Event("popstate")), setTimeout(() => {
        const v = document.getElementById("pd-announcement");
        v && v.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 150));
    } else
      f.preventDefault(), window.location.href = "https://chelsongordon.com/book-pd-session/";
  };
  return /* @__PURE__ */ p.jsxDEV(
    "aside",
    {
      "aria-label": "Professional Development Announcement",
      className: `w-full group relative z-50 transition-colors duration-500 overflow-hidden select-none border-b ${i ? "bg-[#021A38] border-white/10" : "bg-[#01142B]/90 border-white/10 backdrop-blur-md"}`,
      children: [
        /* @__PURE__ */ p.jsxDEV(
          "div",
          {
            className: "absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-cyan-300/80 via-sky-200 to-transparent pointer-events-none opacity-80"
          },
          void 0,
          !1,
          {
            fileName: "/app/applet/src/components/TopAnnouncementBanner.tsx",
            lineNumber: 97,
            columnNumber: 7
          },
          void 0
        ),
        /* @__PURE__ */ p.jsxDEV(
          "div",
          {
            className: "absolute -top-3 left-1/2 -translate-x-1/2 w-[340px] sm:w-[500px] h-[22px] bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.45)_0%,rgba(14,165,233,0.15)_45%,transparent_75%)] pointer-events-none blur-[4px]"
          },
          void 0,
          !1,
          {
            fileName: "/app/applet/src/components/TopAnnouncementBanner.tsx",
            lineNumber: 101,
            columnNumber: 7
          },
          void 0
        ),
        /* @__PURE__ */ p.jsxDEV(
          "div",
          {
            className: "absolute inset-0 bg-[radial-gradient(ellipse_70%_120%_at_50%_0%,rgba(56,189,248,0.08),transparent_80%)] pointer-events-none"
          },
          void 0,
          !1,
          {
            fileName: "/app/applet/src/components/TopAnnouncementBanner.tsx",
            lineNumber: 105,
            columnNumber: 7
          },
          void 0
        ),
        /* @__PURE__ */ p.jsxDEV(
          "div",
          {
            className: "absolute inset-y-0 -left-[100%] w-[100%] bg-gradient-to-r from-transparent via-white/20 via-cyan-200/25 to-transparent -skew-x-[25deg] pointer-events-none transition-transform duration-1000 ease-out group-hover:translate-x-[300%]"
          },
          void 0,
          !1,
          {
            fileName: "/app/applet/src/components/TopAnnouncementBanner.tsx",
            lineNumber: 110,
            columnNumber: 7
          },
          void 0
        ),
        /* @__PURE__ */ p.jsxDEV(
          "div",
          {
            className: "absolute inset-y-0 -left-[100%] w-[40%] bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-[25deg] pointer-events-none transition-transform duration-1000 ease-out delay-75 group-hover:translate-x-[500%]"
          },
          void 0,
          !1,
          {
            fileName: "/app/applet/src/components/TopAnnouncementBanner.tsx",
            lineNumber: 114,
            columnNumber: 7
          },
          void 0
        ),
        /* @__PURE__ */ p.jsxDEV(
          "a",
          {
            href: r ? "#pd-announcement" : "https://chelsongordon.com/book-pd-session/",
            onClick: m,
            className: "group relative flex items-center justify-center gap-2 sm:gap-2.5 px-4 py-2 sm:py-2.5 text-center cursor-pointer transition-all duration-300",
            children: [
              /* @__PURE__ */ p.jsxDEV("span", { className: "inline-flex items-center gap-1.5 text-[11px] sm:text-xs md:text-[13px] text-white/90 group-hover:text-white font-medium tracking-normal transition-colors", children: [
                /* @__PURE__ */ p.jsxDEV("span", { className: "hidden sm:inline", children: "Join our upcoming Professional Development Sessions — practical, expert-led workshops for VET leaders" }, void 0, !1, {
                  fileName: "/app/applet/src/components/TopAnnouncementBanner.tsx",
                  lineNumber: 124,
                  columnNumber: 11
                }, void 0),
                /* @__PURE__ */ p.jsxDEV("span", { className: "inline sm:hidden", children: "Join our Professional Development Sessions" }, void 0, !1, {
                  fileName: "/app/applet/src/components/TopAnnouncementBanner.tsx",
                  lineNumber: 125,
                  columnNumber: 11
                }, void 0)
              ] }, void 0, !0, {
                fileName: "/app/applet/src/components/TopAnnouncementBanner.tsx",
                lineNumber: 123,
                columnNumber: 9
              }, void 0),
              /* @__PURE__ */ p.jsxDEV(
                Oe.span,
                {
                  className: "inline-flex items-center text-white/90 group-hover:text-white transition-colors",
                  initial: { x: 0 },
                  whileHover: { x: 3 },
                  children: /* @__PURE__ */ p.jsxDEV(ev, { className: "w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" }, void 0, !1, {
                    fileName: "/app/applet/src/components/TopAnnouncementBanner.tsx",
                    lineNumber: 133,
                    columnNumber: 11
                  }, void 0)
                },
                void 0,
                !1,
                {
                  fileName: "/app/applet/src/components/TopAnnouncementBanner.tsx",
                  lineNumber: 128,
                  columnNumber: 9
                },
                void 0
              )
            ]
          },
          void 0,
          !0,
          {
            fileName: "/app/applet/src/components/TopAnnouncementBanner.tsx",
            lineNumber: 118,
            columnNumber: 7
          },
          void 0
        )
      ]
    },
    void 0,
    !0,
    {
      fileName: "/app/applet/src/components/TopAnnouncementBanner.tsx",
      lineNumber: 88,
      columnNumber: 5
    },
    void 0
  );
}, Xc = [
  { name: "Arabic", code: "AR", english: "Arabic", native: "عربي" },
  { name: "Chinese", code: "ZH", english: "Chinese", native: "中国人" },
  { name: "Hindi", code: "HI", english: "Hindi", native: "हिन्दी" },
  { name: "Thai", code: "TH", english: "Thai", native: "ไทย" },
  { name: "Vietnamese", code: "VI", english: "Vietnamese", native: "Tiếng Việt" }
], H5 = (i) => {
  switch (i) {
    case "English":
      return "ENG";
    case "Arabic":
      return "ARA";
    case "Chinese":
      return "CHI";
    case "Hindi":
      return "HIN";
    case "Thai":
      return "THA";
    case "Vietnamese":
      return "VIE";
    default:
      return "ENG";
  }
}, q5 = ({
  isScrolled: i,
  selectedLang: s,
  onLanguageChange: l
}) => {
  const [r, c] = q.useState(!1), m = q.useRef(null);
  return q.useEffect(() => {
    const f = (h) => {
      m.current && !m.current.contains(h.target) && c(!1);
    };
    return document.addEventListener("mousedown", f), () => {
      document.removeEventListener("mousedown", f);
    };
  }, []), /* @__PURE__ */ p.jsxDEV("div", { className: "relative", ref: m, children: [
    /* @__PURE__ */ p.jsxDEV("div", { id: "google_translate_element", style: { display: "none" } }, void 0, !1, {
      fileName: "/app/applet/src/components/Navbar.tsx",
      lineNumber: 68,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ p.jsxDEV(
      Oe.button,
      {
        whileHover: { scale: 1.05 },
        whileTap: { scale: 0.95 },
        onClick: () => c(!r),
        className: "flex items-center gap-1 min-[1600px]:gap-1.5 px-2.5 py-1.5 min-[1600px]:px-4 min-[1600px]:py-2.5 rounded-[18px] min-[1600px]:rounded-xl text-[9px] min-[1600px]:text-[11px] font-bold uppercase tracking-wider min-[1600px]:tracking-widest transition-all border shadow-sm notranslate bg-white/5 text-white border-white/10 hover:bg-white/10 backdrop-blur-md",
        translate: "no",
        style: i ? { backgroundColor: "rgba(4, 47, 97, 0.05)", color: "#042F61", borderColor: "rgba(4, 47, 97, 0.1)" } : {},
        children: [
          /* @__PURE__ */ p.jsxDEV(nv, { className: "w-3 h-3 min-[1600px]:w-3.5 min-[1600px]:h-3.5" }, void 0, !1, {
            fileName: "/app/applet/src/components/Navbar.tsx",
            lineNumber: 77,
            columnNumber: 9
          }, void 0),
          /* @__PURE__ */ p.jsxDEV("span", { className: "inline", children: H5(s) }, void 0, !1, {
            fileName: "/app/applet/src/components/Navbar.tsx",
            lineNumber: 78,
            columnNumber: 9
          }, void 0),
          /* @__PURE__ */ p.jsxDEV(Ib, { className: `w-2.5 h-2.5 min-[1600px]:w-3 min-[1600px]:h-3 transition-transform duration-300 ${r ? "rotate-180" : ""}` }, void 0, !1, {
            fileName: "/app/applet/src/components/Navbar.tsx",
            lineNumber: 79,
            columnNumber: 9
          }, void 0)
        ]
      },
      void 0,
      !0,
      {
        fileName: "/app/applet/src/components/Navbar.tsx",
        lineNumber: 69,
        columnNumber: 7
      },
      void 0
    ),
    /* @__PURE__ */ p.jsxDEV(xl, { children: r && /* @__PURE__ */ p.jsxDEV(
      Oe.div,
      {
        initial: { opacity: 0, y: 15, scale: 0.95 },
        animate: { opacity: 1, y: 0, scale: 1 },
        exit: { opacity: 0, y: 15, scale: 0.95 },
        transition: { type: "spring", damping: 20, stiffness: 300 },
        className: "absolute right-0 mt-3 w-[270px] bg-white/95 backdrop-blur-xl rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-gray-100 overflow-hidden z-[100]",
        children: /* @__PURE__ */ p.jsxDEV("div", { className: "py-2", children: [
          /* @__PURE__ */ p.jsxDEV(
            Oe.button,
            {
              initial: { opacity: 0, x: -10 },
              animate: { opacity: 1, x: 0 },
              transition: { duration: 0.2 },
              whileHover: { backgroundColor: "rgba(249, 115, 22, 0.08)", x: 3 },
              whileTap: { scale: 0.98 },
              onClick: () => {
                l("EN", "English"), c(!1);
              },
              className: "w-full flex items-center gap-2.5 px-5 py-4 border-b border-orange-100 bg-orange-50/50 text-[10.5px] font-extrabold uppercase tracking-widest text-[#042F61] transition-all text-left group notranslate",
              translate: "no",
              children: [
                /* @__PURE__ */ p.jsxDEV(iv, { className: "w-3.5 h-3.5 text-orange-500 transition-transform duration-500 group-hover:rotate-180" }, void 0, !1, {
                  fileName: "/app/applet/src/components/Navbar.tsx",
                  lineNumber: 105,
                  columnNumber: 17
                }, void 0),
                /* @__PURE__ */ p.jsxDEV("span", { className: "text-orange-950 font-black", children: "Reset to English" }, void 0, !1, {
                  fileName: "/app/applet/src/components/Navbar.tsx",
                  lineNumber: 106,
                  columnNumber: 17
                }, void 0)
              ]
            },
            void 0,
            !0,
            {
              fileName: "/app/applet/src/components/Navbar.tsx",
              lineNumber: 92,
              columnNumber: 15
            },
            void 0
          ),
          Xc.map((f, h) => /* @__PURE__ */ p.jsxDEV(
            Oe.button,
            {
              initial: { opacity: 0, x: -10 },
              animate: { opacity: 1, x: 0 },
              transition: { delay: 0.05 + h * 0.04, duration: 0.2 },
              whileHover: {
                x: 3,
                backgroundColor: s === f.name ? "rgb(4, 47, 97)" : "rgba(4, 47, 97, 0.04)"
              },
              whileTap: { scale: 0.98 },
              onClick: () => {
                l(f.code, f.name), c(!1);
              },
              className: `w-full flex items-center gap-2.5 px-5 py-3.5 text-[11px] font-bold uppercase tracking-widest transition-all notranslate ${s === f.name ? "bg-[#042F61] text-white font-black" : "text-primary"}`,
              translate: "no",
              children: [
                /* @__PURE__ */ p.jsxDEV("span", { className: "whitespace-nowrap", children: f.english }, void 0, !1, {
                  fileName: "/app/applet/src/components/Navbar.tsx",
                  lineNumber: 130,
                  columnNumber: 19
                }, void 0),
                /* @__PURE__ */ p.jsxDEV("span", { className: `w-[1px] h-3.5 flex-shrink-0 ${s === f.name ? "bg-white/30" : "bg-[#042F61]/20"}` }, void 0, !1, {
                  fileName: "/app/applet/src/components/Navbar.tsx",
                  lineNumber: 131,
                  columnNumber: 19
                }, void 0),
                /* @__PURE__ */ p.jsxDEV("span", { className: `whitespace-nowrap text-[12px] font-bold normal-case tracking-normal ${s === f.name ? "text-white" : "text-[#042F61]"}`, children: f.native }, void 0, !1, {
                  fileName: "/app/applet/src/components/Navbar.tsx",
                  lineNumber: 132,
                  columnNumber: 19
                }, void 0)
              ]
            },
            f.code,
            !0,
            {
              fileName: "/app/applet/src/components/Navbar.tsx",
              lineNumber: 109,
              columnNumber: 17
            },
            void 0
          ))
        ] }, void 0, !0, {
          fileName: "/app/applet/src/components/Navbar.tsx",
          lineNumber: 91,
          columnNumber: 13
        }, void 0)
      },
      void 0,
      !1,
      {
        fileName: "/app/applet/src/components/Navbar.tsx",
        lineNumber: 84,
        columnNumber: 11
      },
      void 0
    ) }, void 0, !1, {
      fileName: "/app/applet/src/components/Navbar.tsx",
      lineNumber: 82,
      columnNumber: 7
    }, void 0)
  ] }, void 0, !0, {
    fileName: "/app/applet/src/components/Navbar.tsx",
    lineNumber: 67,
    columnNumber: 5
  }, void 0);
}, fg = [
  { name: "About Us", href: "https://chelsongordon.com/who-we-are/" },
  { name: "Our Services", href: "https://chelsongordon.com/our-services/" },
  { name: "Our People", href: "https://chelsongordon.com/our-team/" },
  { name: "Careers", href: "https://chelsongordon.com/careers/" }
], G5 = ({ forceSolid: i, logoHref: s, isHomepage: l }) => {
  const [r, c] = q.useState(!1), [m, f] = q.useState(!1), [h, v] = q.useState(!1), [g, x] = q.useState(() => localStorage.getItem("selected_language_name") || "English"), y = typeof window < "u" && (window.location.pathname === "/book-pd-session" || window.location.pathname.startsWith("/book-pd-session") || window.location.hash === "#book-pd-session" || window.location.hash.startsWith("#book-pd-session")), N = s || (y ? "https://chelsongordon.com/" : "/"), V = N.startsWith("http"), T = r || i;
  q.useEffect(() => {
    var H;
    let A = !1;
    const _ = () => {
      A || (window.requestAnimationFrame(() => {
        c(window.scrollY > 50), A = !1;
      }), A = !0);
    };
    window.addEventListener("scroll", _, { passive: !0 });
    const L = ((X) => {
      const ee = document.cookie.split(";");
      for (let F = 0; F < ee.length; F++) {
        let Y = ee[F].trim();
        if (Y.startsWith(X + "=")) {
          let J = Y.substring(X.length + 1);
          return J.startsWith('"') && J.endsWith('"') && (J = J.slice(1, -1)), decodeURIComponent(J);
        }
      }
      return null;
    })("googtrans");
    if (L) {
      let X = ((H = L.split("/").pop()) == null ? void 0 : H.toUpperCase()) || "";
      if (X = X.replace(/["\s]/g, ""), X === "EN")
        x("English"), localStorage.setItem("selected_language_name", "English");
      else if (X) {
        const ee = Xc.find((F) => F.code === (X === "ZH-CN" ? "ZH" : X));
        ee && (x(ee.name), localStorage.setItem("selected_language_name", ee.name));
      }
    } else {
      const X = localStorage.getItem("selected_language_name");
      X && x(X);
    }
    if (!document.getElementById("google-translate-script")) {
      const X = document.createElement("script");
      X.id = "google-translate-script", X.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit", X.async = !0, document.body.appendChild(X);
    }
    return window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement({
        pageLanguage: "en",
        includedLanguages: "ar,zh-CN,hi,th,vi",
        layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: !1
      }, "google_translate_element");
    }, () => window.removeEventListener("scroll", _);
  }, []);
  const z = (A, _) => {
    x(_), localStorage.setItem("selected_language_name", _);
    let G = A.toLowerCase();
    G === "zh" && (G = "zh-CN");
    const L = window.location.hostname, H = L.split(".");
    if (G === "en") {
      const ee = "expires=Thu, 01 Jan 1970 00:00:00 UTC", F = ["/", "/en/", "/en-US/"], Y = [
        "",
        L,
        `.${L}`,
        H.slice(-2).join("."),
        `.${H.slice(-2).join(".")}`
      ];
      for (const J of Y)
        for (const te of F)
          document.cookie = `googtrans=; path=${te}; ${J ? `domain=${J};` : ""} ${ee}`, document.cookie = `googtrans=; ${J ? `domain=${J};` : ""} ${ee}`;
      try {
        const J = document.querySelector("iframe.goog-te-banner-frame");
        if (J && J.contentDocument) {
          const te = J.contentDocument.getElementById("BannerRestoreBtn") || J.contentDocument.querySelector(".goog-te-button button");
          te && te.click();
        }
      } catch (J) {
        console.error(J);
      }
    } else {
      const ee = `/en/${G}`;
      if (document.cookie = `googtrans=${ee}; path=/`, document.cookie = `googtrans=${ee}; path=/; domain=.${L}`, document.cookie = `googtrans=${ee}; path=/; domain=${L}`, H.length > 2) {
        const F = H.slice(1).join(".");
        document.cookie = `googtrans=${ee}; path=/; domain=.${F}`, document.cookie = `googtrans=${ee}; path=/; domain=${F}`;
      }
    }
    const X = document.querySelector(".goog-te-combo");
    X ? (X.value = G === "en" ? "" : G, X.dispatchEvent(new Event("change")), G === "en" && setTimeout(() => {
      window.location.reload();
    }, 150)) : setTimeout(() => {
      const ee = document.querySelector(".goog-te-combo");
      ee ? (ee.value = G === "en" ? "" : G, ee.dispatchEvent(new Event("change")), G === "en" && setTimeout(() => {
        window.location.reload();
      }, 150)) : window.location.reload();
    }, 500);
  };
  return /* @__PURE__ */ p.jsxDEV("nav", { className: `fixed top-0 left-0 w-full z-50 transition-all duration-500 ${T ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"}`, children: [
    /* @__PURE__ */ p.jsxDEV(L5, { isScrolled: T, isHomepage: l }, void 0, !1, {
      fileName: "/app/applet/src/components/Navbar.tsx",
      lineNumber: 331,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ p.jsxDEV("div", { className: "max-w-full mx-auto w-full px-4 md:px-8 lg:px-10 xl:px-12 2xl:px-[4%] h-[120px] lg:h-[100px] xl:h-[120px] 2xl:h-[140px] flex items-center justify-between gap-4", children: [
      /* @__PURE__ */ p.jsxDEV("div", { className: "flex-shrink-0", children: /* @__PURE__ */ p.jsxDEV(
        "a",
        {
          href: N,
          onClick: (A) => {
            V || (A.preventDefault(), window.history.pushState(null, "", "/"), window.location.hash = "", window.dispatchEvent(new Event("popstate")), window.scrollTo({ top: 0, behavior: "smooth" }));
          },
          className: "flex items-center gap-3 cursor-pointer",
          children: /* @__PURE__ */ p.jsxDEV(
            "img",
            {
              src: T || m ? cg : U5,
              alt: "Chelson Gordon Logo",
              className: `mt-0 md:-mt-[20px] lg:mt-[5px] h-[145px] md:h-[125px] lg:h-[110px] xl:h-[145px] 2xl:h-[170px] w-auto transition-all transform origin-left ${!T && m ? "brightness-0 invert" : ""}`,
              onError: () => !T && f(!0),
              referrerPolicy: "no-referrer",
              decoding: "async",
              fetchPriority: "high"
            },
            void 0,
            !1,
            {
              fileName: "/app/applet/src/components/Navbar.tsx",
              lineNumber: 350,
              columnNumber: 14
            },
            void 0
          )
        },
        void 0,
        !1,
        {
          fileName: "/app/applet/src/components/Navbar.tsx",
          lineNumber: 335,
          columnNumber: 11
        },
        void 0
      ) }, void 0, !1, {
        fileName: "/app/applet/src/components/Navbar.tsx",
        lineNumber: 334,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ p.jsxDEV("div", { className: "hidden lg:flex items-center justify-end ml-auto min-w-0 flex-shrink-0", children: /* @__PURE__ */ p.jsxDEV("div", { className: "flex items-center gap-[20px] min-[1600px]:gap-[30px] justify-end flex-shrink-0", children: [
        /* @__PURE__ */ p.jsxDEV("div", { className: "flex items-center gap-[30px] min-[1600px]:gap-[40px] mr-1 xl:mr-2 min-[1600px]:mr-2 flex-shrink-0", children: fg.map((A) => {
          const _ = A.href.startsWith("/") || A.href.startsWith("#"), G = A.name === "Careers";
          return /* @__PURE__ */ p.jsxDEV(
            "a",
            {
              href: A.href,
              target: _ ? void 0 : "_blank",
              rel: _ ? void 0 : "noopener noreferrer",
              onClick: (L) => {
                _ && (L.preventDefault(), A.href.startsWith("#") ? window.location.hash = A.href : (window.history.pushState(null, "", A.href), window.dispatchEvent(new Event("popstate"))), window.scrollTo({ top: 0, behavior: "smooth" }));
              },
              className: `${G ? "hidden min-[1600px]:inline-block" : "inline-block"} text-[10px] xl:text-xs font-bold uppercase tracking-widest transition-all hover:text-accent whitespace-nowrap ${T ? "text-primary" : "text-white"}`,
              children: A.name
            },
            A.name,
            !1,
            {
              fileName: "/app/applet/src/components/Navbar.tsx",
              lineNumber: 372,
              columnNumber: 19
            },
            void 0
          );
        }) }, void 0, !1, {
          fileName: "/app/applet/src/components/Navbar.tsx",
          lineNumber: 367,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ p.jsxDEV("div", { className: "flex items-center gap-[12px] min-[1600px]:gap-3 flex-shrink-0", children: [
          /* @__PURE__ */ p.jsxDEV(
            Oe.a,
            {
              href: "https://chelsongordon.com/contact-us-page/",
              target: "_blank",
              rel: "noopener noreferrer",
              whileHover: { scale: 1.05 },
              whileTap: { scale: 0.95 },
              className: `flex items-center gap-1 px-2.5 py-1.5 min-[1600px]:px-4 min-[1600px]:py-2.5 rounded-[18px] min-[1600px]:rounded-xl text-[9px] min-[1600px]:text-[11px] font-bold uppercase tracking-wider min-[1600px]:tracking-widest transition-all whitespace-nowrap shadow-md border border-transparent ${T ? "bg-primary text-white hover:bg-accent hover:text-primary" : "bg-accent text-primary hover:bg-primary hover:text-white"}`,
              children: [
                "Get in Touch ",
                /* @__PURE__ */ p.jsxDEV(pa, { className: "w-3 h-3 min-[1600px]:w-3.5 min-[1600px]:h-3.5" }, void 0, !1, {
                  fileName: "/app/applet/src/components/Navbar.tsx",
                  lineNumber: 411,
                  columnNumber: 30
                }, void 0)
              ]
            },
            void 0,
            !0,
            {
              fileName: "/app/applet/src/components/Navbar.tsx",
              lineNumber: 399,
              columnNumber: 15
            },
            void 0
          ),
          /* @__PURE__ */ p.jsxDEV(
            Oe.a,
            {
              href: "https://storage.googleapis.com/chelsongordon/com.chelsongordon/CG%20-%20Company%20Handbook.pdf",
              target: "_blank",
              rel: "noopener noreferrer",
              whileHover: { scale: 1.05 },
              whileTap: { scale: 0.95 },
              className: `flex items-center gap-1 px-2.5 py-1.5 min-[1600px]:px-4 min-[1600px]:py-2.5 rounded-[18px] min-[1600px]:rounded-xl text-[9px] min-[1600px]:text-[11px] font-bold uppercase tracking-wider min-[1600px]:tracking-widest transition-all whitespace-nowrap shadow-sm border border-transparent ${T ? "bg-accent text-primary hover:bg-primary hover:text-white" : "bg-primary text-white hover:bg-accent hover:text-primary"}`,
              children: [
                "Company Profile ",
                /* @__PURE__ */ p.jsxDEV(Nl, { className: "w-3 h-3 min-[1600px]:w-3.5 min-[1600px]:h-3.5" }, void 0, !1, {
                  fileName: "/app/applet/src/components/Navbar.tsx",
                  lineNumber: 426,
                  columnNumber: 33
                }, void 0)
              ]
            },
            void 0,
            !0,
            {
              fileName: "/app/applet/src/components/Navbar.tsx",
              lineNumber: 414,
              columnNumber: 15
            },
            void 0
          ),
          /* @__PURE__ */ p.jsxDEV(
            Oe.a,
            {
              href: "https://chelsongordon.com/feedback/",
              target: "_blank",
              rel: "noopener noreferrer",
              whileHover: { scale: 1.05 },
              whileTap: { scale: 0.95 },
              className: `flex items-center gap-1 px-2.5 py-1.5 min-[1600px]:px-4 min-[1600px]:py-2.5 rounded-[18px] min-[1600px]:rounded-xl text-[9px] min-[1600px]:text-[11px] font-bold uppercase tracking-wider min-[1600px]:tracking-widest transition-all whitespace-nowrap shadow-sm border border-transparent ${T ? "bg-primary text-white hover:bg-accent hover:text-primary" : "bg-accent text-primary hover:bg-primary hover:text-white"}`,
              children: [
                /* @__PURE__ */ p.jsxDEV("span", { className: "inline min-[1600px]:hidden", children: "Feedback" }, void 0, !1, {
                  fileName: "/app/applet/src/components/Navbar.tsx",
                  lineNumber: 442,
                  columnNumber: 17
                }, void 0),
                /* @__PURE__ */ p.jsxDEV("span", { className: "hidden min-[1600px]:inline", children: "Leave a Feedback" }, void 0, !1, {
                  fileName: "/app/applet/src/components/Navbar.tsx",
                  lineNumber: 443,
                  columnNumber: 17
                }, void 0),
                /* @__PURE__ */ p.jsxDEV(Hc, { className: "w-3 h-3 min-[1600px]:w-3.5 min-[1600px]:h-3.5" }, void 0, !1, {
                  fileName: "/app/applet/src/components/Navbar.tsx",
                  lineNumber: 444,
                  columnNumber: 17
                }, void 0)
              ]
            },
            void 0,
            !0,
            {
              fileName: "/app/applet/src/components/Navbar.tsx",
              lineNumber: 430,
              columnNumber: 15
            },
            void 0
          ),
          /* @__PURE__ */ p.jsxDEV(
            Oe.a,
            {
              href: "https://cgresources.com.au/",
              target: "_blank",
              rel: "noopener noreferrer",
              whileHover: { scale: 1.05 },
              whileTap: { scale: 0.95 },
              className: `flex items-center gap-1 px-2.5 py-1.5 min-[1600px]:px-4 min-[1600px]:py-2.5 rounded-[18px] min-[1600px]:rounded-xl text-[9px] min-[1600px]:text-[11px] font-bold uppercase tracking-wider min-[1600px]:tracking-widest transition-all whitespace-nowrap border shadow-sm ${T ? "bg-primary/5 text-primary border-primary/10 hover:bg-primary/10" : "bg-white/5 text-white border-white/10 hover:bg-white/10 backdrop-blur-md"}`,
              children: [
                "CG Resources ",
                /* @__PURE__ */ p.jsxDEV(ig, { className: "w-3 h-3 min-[1600px]:w-3.5 min-[1600px]:h-3.5" }, void 0, !1, {
                  fileName: "/app/applet/src/components/Navbar.tsx",
                  lineNumber: 455,
                  columnNumber: 30
                }, void 0)
              ]
            },
            void 0,
            !0,
            {
              fileName: "/app/applet/src/components/Navbar.tsx",
              lineNumber: 447,
              columnNumber: 15
            },
            void 0
          ),
          /* @__PURE__ */ p.jsxDEV(
            q5,
            {
              isScrolled: T,
              selectedLang: g,
              onLanguageChange: z
            },
            void 0,
            !1,
            {
              fileName: "/app/applet/src/components/Navbar.tsx",
              lineNumber: 458,
              columnNumber: 15
            },
            void 0
          )
        ] }, void 0, !0, {
          fileName: "/app/applet/src/components/Navbar.tsx",
          lineNumber: 398,
          columnNumber: 13
        }, void 0)
      ] }, void 0, !0, {
        fileName: "/app/applet/src/components/Navbar.tsx",
        lineNumber: 365,
        columnNumber: 11
      }, void 0) }, void 0, !1, {
        fileName: "/app/applet/src/components/Navbar.tsx",
        lineNumber: 363,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ p.jsxDEV(
        "button",
        {
          className: "lg:hidden ml-auto relative z-[60]",
          onClick: () => v(!h),
          "aria-label": "Toggle Navigation Menu",
          children: h ? /* @__PURE__ */ p.jsxDEV(av, { className: T || h ? "text-primary" : "text-white", size: 32 }, void 0, !1, {
            fileName: "/app/applet/src/components/Navbar.tsx",
            lineNumber: 473,
            columnNumber: 29
          }, void 0) : /* @__PURE__ */ p.jsxDEV(x5, { className: T ? "text-primary" : "text-white", size: 32 }, void 0, !1, {
            fileName: "/app/applet/src/components/Navbar.tsx",
            lineNumber: 473,
            columnNumber: 124
          }, void 0)
        },
        void 0,
        !1,
        {
          fileName: "/app/applet/src/components/Navbar.tsx",
          lineNumber: 468,
          columnNumber: 9
        },
        void 0
      )
    ] }, void 0, !0, {
      fileName: "/app/applet/src/components/Navbar.tsx",
      lineNumber: 332,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ p.jsxDEV(xl, { children: h && /* @__PURE__ */ p.jsxDEV(
      Oe.div,
      {
        initial: { opacity: 0, x: "100%" },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: "100%" },
        transition: { type: "spring", damping: 30, stiffness: 300 },
        className: "fixed inset-0 bg-white z-50 lg:hidden overflow-y-auto h-screen",
        children: /* @__PURE__ */ p.jsxDEV("div", { className: "flex flex-col p-6 pt-20 pb-10", children: [
          /* @__PURE__ */ p.jsxDEV("div", { className: "flex flex-col gap-5 mb-10", children: fg.map((A, _) => {
            const G = A.href.startsWith("/") || A.href.startsWith("#");
            return /* @__PURE__ */ p.jsxDEV(
              Oe.a,
              {
                initial: { opacity: 0, x: 20 },
                animate: { opacity: 1, x: 0 },
                transition: { delay: 0.1 + _ * 0.05 },
                href: A.href,
                target: G ? void 0 : "_blank",
                rel: G ? void 0 : "noopener noreferrer",
                onClick: (L) => {
                  v(!1), G && (L.preventDefault(), A.href.startsWith("#") ? window.location.hash = A.href : (window.history.pushState(null, "", A.href), window.dispatchEvent(new Event("popstate"))), window.scrollTo({ top: 0, behavior: "smooth" }));
                },
                className: "text-4xl font-black text-primary uppercase tracking-tighter hover:text-accent transition-colors",
                children: A.name
              },
              A.name,
              !1,
              {
                fileName: "/app/applet/src/components/Navbar.tsx",
                lineNumber: 492,
                columnNumber: 21
              },
              void 0
            );
          }) }, void 0, !1, {
            fileName: "/app/applet/src/components/Navbar.tsx",
            lineNumber: 488,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ p.jsxDEV("div", { className: "space-y-4", children: [
            /* @__PURE__ */ p.jsxDEV(
              Oe.a,
              {
                href: "https://chelsongordon.com/contact-us-page/",
                target: "_blank",
                rel: "noopener noreferrer",
                onClick: () => v(!1),
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { delay: 0.3 },
                whileTap: { scale: 0.95 },
                className: "w-full flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-primary text-white font-extrabold uppercase tracking-widest text-sm shadow-xl",
                children: [
                  "Get in Touch ",
                  /* @__PURE__ */ p.jsxDEV(pa, { className: "w-5 h-5" }, void 0, !1, {
                    fileName: "/app/applet/src/components/Navbar.tsx",
                    lineNumber: 533,
                    columnNumber: 32
                  }, void 0)
                ]
              },
              void 0,
              !0,
              {
                fileName: "/app/applet/src/components/Navbar.tsx",
                lineNumber: 522,
                columnNumber: 17
              },
              void 0
            ),
            /* @__PURE__ */ p.jsxDEV("div", { className: "grid grid-cols-2 gap-3", children: [
              /* @__PURE__ */ p.jsxDEV(
                Oe.a,
                {
                  href: "https://storage.googleapis.com/chelsongordon/com.chelsongordon/CG%20-%20Company%20Handbook.pdf",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { delay: 0.4 },
                  whileTap: { scale: 0.95 },
                  className: "flex items-center justify-center gap-2 px-4 py-4 rounded-xl bg-accent text-primary font-bold uppercase tracking-widest text-[10px] shadow-md",
                  children: [
                    "Company Profile ",
                    /* @__PURE__ */ p.jsxDEV(Nl, { className: "w-4 h-4" }, void 0, !1, {
                      fileName: "/app/applet/src/components/Navbar.tsx",
                      lineNumber: 547,
                      columnNumber: 37
                    }, void 0)
                  ]
                },
                void 0,
                !0,
                {
                  fileName: "/app/applet/src/components/Navbar.tsx",
                  lineNumber: 537,
                  columnNumber: 19
                },
                void 0
              ),
              /* @__PURE__ */ p.jsxDEV(
                Oe.a,
                {
                  href: "https://cgresources.com.au/",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { delay: 0.5 },
                  whileTap: { scale: 0.95 },
                  className: "flex items-center justify-center gap-2 px-4 py-4 rounded-xl bg-primary/5 text-primary border border-primary/10 font-bold uppercase tracking-widest text-[10px]",
                  children: [
                    "Resources ",
                    /* @__PURE__ */ p.jsxDEV(ig, { className: "w-4 h-4" }, void 0, !1, {
                      fileName: "/app/applet/src/components/Navbar.tsx",
                      lineNumber: 560,
                      columnNumber: 31
                    }, void 0)
                  ]
                },
                void 0,
                !0,
                {
                  fileName: "/app/applet/src/components/Navbar.tsx",
                  lineNumber: 550,
                  columnNumber: 19
                },
                void 0
              )
            ] }, void 0, !0, {
              fileName: "/app/applet/src/components/Navbar.tsx",
              lineNumber: 536,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ p.jsxDEV(
              Oe.a,
              {
                href: "https://chelsongordon.com/feedback/",
                target: "_blank",
                rel: "noopener noreferrer",
                onClick: () => v(!1),
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { delay: 0.55 },
                whileTap: { scale: 0.95 },
                className: "w-full flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-accent text-primary font-extrabold uppercase tracking-widest text-sm shadow-xl",
                children: [
                  "Leave a Feedback ",
                  /* @__PURE__ */ p.jsxDEV(Hc, { className: "w-5 h-5" }, void 0, !1, {
                    fileName: "/app/applet/src/components/Navbar.tsx",
                    lineNumber: 575,
                    columnNumber: 36
                  }, void 0)
                ]
              },
              void 0,
              !0,
              {
                fileName: "/app/applet/src/components/Navbar.tsx",
                lineNumber: 564,
                columnNumber: 17
              },
              void 0
            ),
            /* @__PURE__ */ p.jsxDEV("div", { className: "pt-8 mt-8 border-t border-gray-100", children: [
              /* @__PURE__ */ p.jsxDEV("div", { className: "flex items-center gap-2 mb-4 notranslate", translate: "no", children: [
                /* @__PURE__ */ p.jsxDEV(nv, { className: "w-4 h-4 text-accent" }, void 0, !1, {
                  fileName: "/app/applet/src/components/Navbar.tsx",
                  lineNumber: 580,
                  columnNumber: 21
                }, void 0),
                /* @__PURE__ */ p.jsxDEV("span", { className: "text-[10px] font-bold uppercase tracking-[0.2em] text-primary/40", children: "Select Language" }, void 0, !1, {
                  fileName: "/app/applet/src/components/Navbar.tsx",
                  lineNumber: 581,
                  columnNumber: 21
                }, void 0)
              ] }, void 0, !0, {
                fileName: "/app/applet/src/components/Navbar.tsx",
                lineNumber: 579,
                columnNumber: 19
              }, void 0),
              /* @__PURE__ */ p.jsxDEV(
                Oe.button,
                {
                  initial: { opacity: 0, y: 10 },
                  animate: { opacity: 1, y: 0 },
                  transition: { delay: 0.55 },
                  whileTap: { scale: 0.95 },
                  onClick: () => {
                    z("EN", "English"), v(!1);
                  },
                  className: "w-full flex items-center justify-center gap-2 mb-3.5 py-3.5 rounded-xl border border-orange-200 bg-orange-50/50 text-orange-950 text-[10px] font-extrabold uppercase tracking-widest transition-all active:scale-95 notranslate",
                  translate: "no",
                  children: [
                    /* @__PURE__ */ p.jsxDEV(iv, { className: "w-3.5 h-3.5 text-orange-500" }, void 0, !1, {
                      fileName: "/app/applet/src/components/Navbar.tsx",
                      lineNumber: 597,
                      columnNumber: 21
                    }, void 0),
                    /* @__PURE__ */ p.jsxDEV("span", { children: "Reset to English" }, void 0, !1, {
                      fileName: "/app/applet/src/components/Navbar.tsx",
                      lineNumber: 598,
                      columnNumber: 21
                    }, void 0)
                  ]
                },
                void 0,
                !0,
                {
                  fileName: "/app/applet/src/components/Navbar.tsx",
                  lineNumber: 585,
                  columnNumber: 19
                },
                void 0
              ),
              /* @__PURE__ */ p.jsxDEV("div", { className: "grid grid-cols-2 gap-2", children: Xc.map((A, _) => /* @__PURE__ */ p.jsxDEV(
                Oe.button,
                {
                  initial: { opacity: 0, y: 10 },
                  animate: { opacity: 1, y: 0 },
                  transition: { delay: 0.6 + _ * 0.05 },
                  onClick: () => {
                    z(A.code, A.name), v(!1);
                  },
                  className: `flex flex-col items-center justify-center gap-1.5 py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all active:scale-95 notranslate ${g === A.name ? "bg-primary text-white shadow-lg" : "bg-primary/5 text-primary border border-primary/10 hover:bg-accent"}`,
                  translate: "no",
                  children: [
                    /* @__PURE__ */ p.jsxDEV("span", { className: "whitespace-nowrap", children: A.english }, void 0, !1, {
                      fileName: "/app/applet/src/components/Navbar.tsx",
                      lineNumber: 619,
                      columnNumber: 25
                    }, void 0),
                    /* @__PURE__ */ p.jsxDEV("div", { className: `w-6 h-[1px] ${g === A.name ? "bg-white/30" : "bg-primary/20"}` }, void 0, !1, {
                      fileName: "/app/applet/src/components/Navbar.tsx",
                      lineNumber: 620,
                      columnNumber: 25
                    }, void 0),
                    /* @__PURE__ */ p.jsxDEV("span", { className: `text-[11px] font-bold normal-case tracking-normal select-none ${g === A.name ? "text-white" : "text-primary"}`, children: A.native }, void 0, !1, {
                      fileName: "/app/applet/src/components/Navbar.tsx",
                      lineNumber: 621,
                      columnNumber: 25
                    }, void 0)
                  ]
                },
                A.code,
                !0,
                {
                  fileName: "/app/applet/src/components/Navbar.tsx",
                  lineNumber: 603,
                  columnNumber: 23
                },
                void 0
              )) }, void 0, !1, {
                fileName: "/app/applet/src/components/Navbar.tsx",
                lineNumber: 601,
                columnNumber: 19
              }, void 0)
            ] }, void 0, !0, {
              fileName: "/app/applet/src/components/Navbar.tsx",
              lineNumber: 578,
              columnNumber: 17
            }, void 0)
          ] }, void 0, !0, {
            fileName: "/app/applet/src/components/Navbar.tsx",
            lineNumber: 521,
            columnNumber: 15
          }, void 0)
        ] }, void 0, !0, {
          fileName: "/app/applet/src/components/Navbar.tsx",
          lineNumber: 487,
          columnNumber: 13
        }, void 0)
      },
      void 0,
      !1,
      {
        fileName: "/app/applet/src/components/Navbar.tsx",
        lineNumber: 480,
        columnNumber: 11
      },
      void 0
    ) }, void 0, !1, {
      fileName: "/app/applet/src/components/Navbar.tsx",
      lineNumber: 478,
      columnNumber: 7
    }, void 0)
  ] }, void 0, !0, {
    fileName: "/app/applet/src/components/Navbar.tsx",
    lineNumber: 330,
    columnNumber: 5
  }, void 0);
}, Y5 = () => /* @__PURE__ */ p.jsxDEV("footer", { className: "relative pt-3.5 pb-4 md:pt-4.5 md:pb-5.5 overflow-hidden text-primary/80 bg-[#F8FAFC] border-t border-slate-200/60 h-auto font-sans", children: /* @__PURE__ */ p.jsxDEV("div", { className: "max-w-full w-full px-4 sm:px-6 md:px-8 lg:px-12 relative z-10", children: [
  /* @__PURE__ */ p.jsxDEV("div", { className: "flex flex-col md:flex-row gap-8 md:gap-16 lg:gap-12 xl:gap-20 mb-3 md:mb-4 items-stretch", children: [
    /* @__PURE__ */ p.jsxDEV("div", { className: "w-full md:w-5/12 flex flex-col justify-start", children: [
      /* @__PURE__ */ p.jsxDEV("div", { className: "space-y-2 md:space-y-3 mb-3 md:mb-3.5 lg:mb-3", children: [
        /* @__PURE__ */ p.jsxDEV(
          "a",
          {
            href: "/",
            onClick: (i) => {
              i.preventDefault(), window.history.pushState(null, "", "/"), window.location.hash = "", window.dispatchEvent(new Event("popstate")), window.scrollTo({ top: 0, behavior: "smooth" });
            },
            className: "flex items-center gap-4 group cursor-pointer decoration-none",
            children: [
              /* @__PURE__ */ p.jsxDEV("div", { className: "relative flex items-center justify-center", children: /* @__PURE__ */ p.jsxDEV(
                "img",
                {
                  src: "https://storage.googleapis.com/chelsongordon/com.chelsongordon/logos/CG_plain.webp",
                  alt: "Chelson Gordon Logo",
                  className: "h-14 md:h-[72px] w-auto relative z-10 transition-all duration-500 ease-out group-hover:scale-105 group-hover:-translate-y-0.5 filter group-hover:brightness-105",
                  referrerPolicy: "no-referrer",
                  loading: "lazy",
                  decoding: "async"
                },
                void 0,
                !1,
                {
                  fileName: "/app/applet/src/components/Footer.tsx",
                  lineNumber: 25,
                  columnNumber: 19
                },
                void 0
              ) }, void 0, !1, {
                fileName: "/app/applet/src/components/Footer.tsx",
                lineNumber: 24,
                columnNumber: 17
              }, void 0),
              /* @__PURE__ */ p.jsxDEV("div", { className: "flex flex-col justify-center", children: [
                /* @__PURE__ */ p.jsxDEV("span", { className: "text-primary font-bold text-[14px] md:text-[20px] lg:text-[18px] xl:text-[20px] tracking-widest leading-tight uppercase", style: { wordSpacing: "0.15em" }, children: "Chelson Gordon" }, void 0, !1, {
                  fileName: "/app/applet/src/components/Footer.tsx",
                  lineNumber: 35,
                  columnNumber: 19
                }, void 0),
                /* @__PURE__ */ p.jsxDEV("span", { className: "text-primary font-bold text-[12px] md:text-[16px] lg:text-[14px] xl:text-[16px] uppercase leading-none", style: { letterSpacing: "0.66em", marginRight: "-0.66em" }, children: "Consultancy" }, void 0, !1, {
                  fileName: "/app/applet/src/components/Footer.tsx",
                  lineNumber: 36,
                  columnNumber: 19
                }, void 0)
              ] }, void 0, !0, {
                fileName: "/app/applet/src/components/Footer.tsx",
                lineNumber: 34,
                columnNumber: 17
              }, void 0)
            ]
          },
          void 0,
          !0,
          {
            fileName: "/app/applet/src/components/Footer.tsx",
            lineNumber: 13,
            columnNumber: 15
          },
          void 0
        ),
        /* @__PURE__ */ p.jsxDEV("div", { className: "h-[1.5px] w-full max-w-[280px] md:max-w-[340px] bg-accent/40" }, void 0, !1, {
          fileName: "/app/applet/src/components/Footer.tsx",
          lineNumber: 39,
          columnNumber: 15
        }, void 0)
      ] }, void 0, !0, {
        fileName: "/app/applet/src/components/Footer.tsx",
        lineNumber: 12,
        columnNumber: 13
      }, void 0),
      /* @__PURE__ */ p.jsxDEV("p", { className: "text-slate-700 text-[11px] md:text-sm lg:text-[10px] xl:text-[13px] leading-relaxed max-w-lg lg:max-w-md xl:max-w-lg font-medium text-justify", children: "All content and materials on this website are protected under the Australian Copyright Act 1968, with all rights reserved by Chelson Gordon Consultancy Pty Ltd. No part of this website may be reproduced, stored, transmitted, distributed, or otherwise used in any form without prior written permission. Unauthorised use may result in penalties for copyright infringement." }, void 0, !1, {
        fileName: "/app/applet/src/components/Footer.tsx",
        lineNumber: 42,
        columnNumber: 13
      }, void 0)
    ] }, void 0, !0, {
      fileName: "/app/applet/src/components/Footer.tsx",
      lineNumber: 11,
      columnNumber: 11
    }, void 0),
    /* @__PURE__ */ p.jsxDEV("div", { className: "w-full md:w-4/12 md:pl-10 lg:pl-8 xl:pl-12 relative flex flex-col justify-start self-stretch", children: [
      /* @__PURE__ */ p.jsxDEV("div", { className: "hidden md:block absolute left-0 top-[2%] bottom-[2%] w-[1.5px] bg-gradient-to-b from-transparent via-[#042F61]/40 to-transparent rounded-full filter blur-[0.5px] opacity-50" }, void 0, !1, {
        fileName: "/app/applet/src/components/Footer.tsx",
        lineNumber: 49,
        columnNumber: 13
      }, void 0),
      /* @__PURE__ */ p.jsxDEV("div", { className: "mb-3 lg:mb-2", children: [
        /* @__PURE__ */ p.jsxDEV("h4", { className: "font-bold text-primary mb-1 text-base lg:text-lg tracking-tight", children: "Contact Us" }, void 0, !1, {
          fileName: "/app/applet/src/components/Footer.tsx",
          lineNumber: 51,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ p.jsxDEV("div", { className: "h-0.5 w-16 lg:w-20 bg-accent/60" }, void 0, !1, {
          fileName: "/app/applet/src/components/Footer.tsx",
          lineNumber: 52,
          columnNumber: 15
        }, void 0)
      ] }, void 0, !0, {
        fileName: "/app/applet/src/components/Footer.tsx",
        lineNumber: 50,
        columnNumber: 13
      }, void 0),
      /* @__PURE__ */ p.jsxDEV("ul", { className: "space-y-3 md:space-y-5 lg:space-y-3 xl:space-y-5 mt-3 md:mt-6 lg:mt-4", children: [
        /* @__PURE__ */ p.jsxDEV("li", { className: "flex items-center gap-3 group", children: [
          /* @__PURE__ */ p.jsxDEV("div", { className: "p-1.5 md:p-2 bg-primary/5 rounded-lg text-primary border border-primary/10 group-hover:bg-accent group-hover:text-primary group-hover:border-accent transition-all duration-300", children: /* @__PURE__ */ p.jsxDEV("img", { src: "https://storage.googleapis.com/chelsongordon/com.chelsongordon/logos/call.svg", alt: "Phone", className: "w-5 h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7", loading: "lazy", decoding: "async" }, void 0, !1, {
            fileName: "/app/applet/src/components/Footer.tsx",
            lineNumber: 57,
            columnNumber: 19
          }, void 0) }, void 0, !1, {
            fileName: "/app/applet/src/components/Footer.tsx",
            lineNumber: 56,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ p.jsxDEV("div", { className: "flex flex-wrap lg:flex-nowrap items-center gap-x-4 md:gap-x-8 lg:gap-x-4 xl:gap-x-8", children: [
            /* @__PURE__ */ p.jsxDEV("a", { href: "tel:+61499994530", className: "hover:text-accent text-primary transition-colors font-bold text-[12px] md:text-sm lg:text-[11px] xl:text-sm tracking-tight whitespace-nowrap", children: "+61 499 994 530" }, void 0, !1, {
              fileName: "/app/applet/src/components/Footer.tsx",
              lineNumber: 60,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ p.jsxDEV("a", { href: "tel:+66621744994", className: "hover:text-accent text-primary transition-colors font-bold text-[12px] md:text-sm lg:text-[11px] xl:text-sm tracking-tight whitespace-nowrap", children: "+66 62 174 4994" }, void 0, !1, {
              fileName: "/app/applet/src/components/Footer.tsx",
              lineNumber: 61,
              columnNumber: 19
            }, void 0)
          ] }, void 0, !0, {
            fileName: "/app/applet/src/components/Footer.tsx",
            lineNumber: 59,
            columnNumber: 17
          }, void 0)
        ] }, void 0, !0, {
          fileName: "/app/applet/src/components/Footer.tsx",
          lineNumber: 55,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ p.jsxDEV("li", { className: "flex items-center gap-3 group", children: [
          /* @__PURE__ */ p.jsxDEV("div", { className: "p-1.5 md:p-2 bg-primary/5 rounded-lg text-primary border border-primary/15 group-hover:bg-accent group-hover:text-primary group-hover:border-accent transition-all duration-300", children: /* @__PURE__ */ p.jsxDEV("img", { src: "https://storage.googleapis.com/chelsongordon/com.chelsongordon/logos/email.svg", alt: "Email", className: "w-5 h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7", loading: "lazy", decoding: "async" }, void 0, !1, {
            fileName: "/app/applet/src/components/Footer.tsx",
            lineNumber: 66,
            columnNumber: 19
          }, void 0) }, void 0, !1, {
            fileName: "/app/applet/src/components/Footer.tsx",
            lineNumber: 65,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ p.jsxDEV("div", { className: "flex-1 min-w-0", children: /* @__PURE__ */ p.jsxDEV("a", { href: "mailto:support.coordinator@chelsongordon.com", className: "hover:text-accent text-primary transition-colors font-bold text-[11px] md:text-sm lg:text-[10px] xl:text-[13px] tracking-tight block truncate", children: "support.coordinator@chelsongordon.com" }, void 0, !1, {
            fileName: "/app/applet/src/components/Footer.tsx",
            lineNumber: 69,
            columnNumber: 19
          }, void 0) }, void 0, !1, {
            fileName: "/app/applet/src/components/Footer.tsx",
            lineNumber: 68,
            columnNumber: 17
          }, void 0)
        ] }, void 0, !0, {
          fileName: "/app/applet/src/components/Footer.tsx",
          lineNumber: 64,
          columnNumber: 15
        }, void 0)
      ] }, void 0, !0, {
        fileName: "/app/applet/src/components/Footer.tsx",
        lineNumber: 54,
        columnNumber: 13
      }, void 0)
    ] }, void 0, !0, {
      fileName: "/app/applet/src/components/Footer.tsx",
      lineNumber: 48,
      columnNumber: 11
    }, void 0),
    /* @__PURE__ */ p.jsxDEV("div", { className: "w-full md:w-3/12 md:pl-10 lg:pl-8 xl:pl-12 flex flex-col items-center justify-center self-stretch relative", children: [
      /* @__PURE__ */ p.jsxDEV("div", { className: "hidden md:block absolute left-0 top-[2%] bottom-[2%] w-[1.5px] bg-gradient-to-b from-transparent via-[#042F61]/40 to-transparent rounded-full filter blur-[0.5px] opacity-50" }, void 0, !1, {
        fileName: "/app/applet/src/components/Footer.tsx",
        lineNumber: 77,
        columnNumber: 13
      }, void 0),
      /* @__PURE__ */ p.jsxDEV(
        Oe.a,
        {
          href: "https://mycg.chelsongordon.com/",
          target: "_blank",
          rel: "noopener noreferrer",
          initial: "initial",
          whileHover: "hover",
          whileTap: { scale: 0.95 },
          className: "px-8 py-3.5 md:py-4 lg:px-5 lg:py-3.5 xl:px-8 xl:py-4 rounded-xl flex items-center gap-3 font-extrabold text-[11px] md:text-[12px] lg:text-[10px] xl:text-[12px] tracking-widest uppercase shadow-lg border transition-all duration-300 relative overflow-hidden group lg:whitespace-nowrap",
          children: [
            /* @__PURE__ */ p.jsxDEV(
              Oe.div,
              {
                variants: {
                  initial: { backgroundColor: "#042F61", borderColor: "#042F61" },
                  hover: { backgroundColor: "#FDB913", borderColor: "#FDB913", scale: 1.05 }
                },
                transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] },
                className: "absolute inset-0 z-0"
              },
              void 0,
              !1,
              {
                fileName: "/app/applet/src/components/Footer.tsx",
                lineNumber: 87,
                columnNumber: 15
              },
              void 0
            ),
            /* @__PURE__ */ p.jsxDEV("div", { className: "relative z-10 flex items-center gap-3", children: [
              /* @__PURE__ */ p.jsxDEV(
                Oe.div,
                {
                  variants: {
                    initial: { color: "#FDB913", x: 0 },
                    hover: { color: "#042F61", x: -2 }
                  },
                  transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] },
                  children: /* @__PURE__ */ p.jsxDEV(Gc, { className: "w-5 h-5" }, void 0, !1, {
                    fileName: "/app/applet/src/components/Footer.tsx",
                    lineNumber: 103,
                    columnNumber: 19
                  }, void 0)
                },
                void 0,
                !1,
                {
                  fileName: "/app/applet/src/components/Footer.tsx",
                  lineNumber: 96,
                  columnNumber: 17
                },
                void 0
              ),
              /* @__PURE__ */ p.jsxDEV(
                Oe.span,
                {
                  variants: {
                    initial: { color: "#FFFFFF" },
                    hover: { color: "#042F61" }
                  },
                  transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] },
                  children: "Staff Intranet"
                },
                void 0,
                !1,
                {
                  fileName: "/app/applet/src/components/Footer.tsx",
                  lineNumber: 105,
                  columnNumber: 17
                },
                void 0
              )
            ] }, void 0, !0, {
              fileName: "/app/applet/src/components/Footer.tsx",
              lineNumber: 95,
              columnNumber: 15
            }, void 0)
          ]
        },
        void 0,
        !0,
        {
          fileName: "/app/applet/src/components/Footer.tsx",
          lineNumber: 78,
          columnNumber: 13
        },
        void 0
      )
    ] }, void 0, !0, {
      fileName: "/app/applet/src/components/Footer.tsx",
      lineNumber: 76,
      columnNumber: 11
    }, void 0)
  ] }, void 0, !0, {
    fileName: "/app/applet/src/components/Footer.tsx",
    lineNumber: 9,
    columnNumber: 9
  }, void 0),
  /* @__PURE__ */ p.jsxDEV("div", { className: "h-[2px] w-full bg-gradient-to-r from-transparent via-[#042F61]/15 via-[#021E3D]/50 via-[#042F61]/15 to-transparent rounded-full filter blur-[0.5px] opacity-60 mt-1 mb-2.5 md:mt-1.5 md:mb-3.5" }, void 0, !1, {
    fileName: "/app/applet/src/components/Footer.tsx",
    lineNumber: 120,
    columnNumber: 9
  }, void 0),
  /* @__PURE__ */ p.jsxDEV("div", { className: "pt-0 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 w-full", children: [
    /* @__PURE__ */ p.jsxDEV("div", { className: "w-full lg:w-5/12 flex justify-center lg:justify-start", children: /* @__PURE__ */ p.jsxDEV("p", { className: "text-[#042F61] text-[12px] md:text-sm tracking-wide uppercase font-extrabold text-center lg:text-left", style: { wordSpacing: "0.05em" }, children: "© 2026 Chelson Gordon Consultancy. All Rights Reserved." }, void 0, !1, {
      fileName: "/app/applet/src/components/Footer.tsx",
      lineNumber: 125,
      columnNumber: 13
    }, void 0) }, void 0, !1, {
      fileName: "/app/applet/src/components/Footer.tsx",
      lineNumber: 124,
      columnNumber: 11
    }, void 0),
    /* @__PURE__ */ p.jsxDEV("div", { className: "w-full lg:w-4/12 flex justify-center font-sans font-medium", children: /* @__PURE__ */ p.jsxDEV("div", { className: "flex flex-wrap justify-center gap-x-6 gap-y-1.5", children: [
      { name: "Terms of use", href: "https://chelsongordon.com/terms-and-conditions/" },
      { name: "Privacy Policy", href: "https://chelsongordon.com/privacy-policy/" },
      { name: "Cancellation & Refund", href: "https://chelsongordon.com/cancellation-and-refunds/" }
    ].map((i) => /* @__PURE__ */ p.jsxDEV(
      "a",
      {
        href: i.href,
        target: "_blank",
        rel: "noopener noreferrer",
        className: "text-slate-500 hover:text-accent transition-colors font-bold text-[11px] md:text-xs tracking-wider uppercase whitespace-nowrap cursor-pointer",
        children: i.name
      },
      i.name,
      !1,
      {
        fileName: "/app/applet/src/components/Footer.tsx",
        lineNumber: 138,
        columnNumber: 17
      },
      void 0
    )) }, void 0, !1, {
      fileName: "/app/applet/src/components/Footer.tsx",
      lineNumber: 132,
      columnNumber: 13
    }, void 0) }, void 0, !1, {
      fileName: "/app/applet/src/components/Footer.tsx",
      lineNumber: 131,
      columnNumber: 11
    }, void 0),
    /* @__PURE__ */ p.jsxDEV("div", { className: "w-full lg:w-3/12 flex items-center justify-center lg:justify-end gap-3 shrink-0", children: [
      /* @__PURE__ */ p.jsxDEV(
        "a",
        {
          href: "https://www.linkedin.com/company/92809574/",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "group bg-[#042F61]/5 rounded-lg text-primary border border-[#042F61]/10 hover:bg-[#042F61] hover:border-[#042F61] transition-all duration-300 shadow-sm",
          style: { width: "50px", height: "50px", display: "flex", alignItems: "center", justifyContent: "center" },
          children: /* @__PURE__ */ p.jsxDEV(f5, { className: "w-[23px] h-[23px] md:w-[27px] md:h-[27px] text-[#042F61] group-hover:text-white transition-colors" }, void 0, !1, {
            fileName: "/app/applet/src/components/Footer.tsx",
            lineNumber: 160,
            columnNumber: 15
          }, void 0)
        },
        void 0,
        !1,
        {
          fileName: "/app/applet/src/components/Footer.tsx",
          lineNumber: 153,
          columnNumber: 13
        },
        void 0
      ),
      /* @__PURE__ */ p.jsxDEV(
        "a",
        {
          href: "https://www.instagram.com/chelsongordonofficial?igsh=MXhwc3o2ZTRieXJyaQ==",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "group bg-[#042F61]/5 rounded-lg border border-[#042F61]/10 hover:bg-[#042F61] hover:border-[#042F61] transition-all duration-300 shadow-sm",
          style: { width: "50px", height: "50px", display: "flex", alignItems: "center", justifyContent: "center" },
          children: /* @__PURE__ */ p.jsxDEV("img", { src: "https://storage.googleapis.com/chelsongordon/com.chelsongordon/logos/instagram.svg", alt: "Instagram", className: "w-[23px] h-[23px] md:w-[27px] md:h-[27px] transition-all group-hover:brightness-0 group-hover:invert", loading: "lazy", decoding: "async" }, void 0, !1, {
            fileName: "/app/applet/src/components/Footer.tsx",
            lineNumber: 169,
            columnNumber: 15
          }, void 0)
        },
        void 0,
        !1,
        {
          fileName: "/app/applet/src/components/Footer.tsx",
          lineNumber: 162,
          columnNumber: 13
        },
        void 0
      ),
      /* @__PURE__ */ p.jsxDEV(
        "a",
        {
          href: "https://www.youtube.com/@ChelsonGordonConsultancy",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "group bg-[#042F61]/5 rounded-lg border border-[#042F61]/10 hover:bg-[#042F61] hover:border-[#042F61] transition-all duration-300 shadow-sm",
          style: { width: "50px", height: "50px", display: "flex", alignItems: "center", justifyContent: "center" },
          children: /* @__PURE__ */ p.jsxDEV("img", { src: "https://storage.googleapis.com/chelsongordon/com.chelsongordon/logos/youtube.svg", alt: "Youtube", className: "w-[23px] h-[23px] md:w-[27px] md:h-[27px] transition-all group-hover:brightness-0 group-hover:invert", loading: "lazy", decoding: "async" }, void 0, !1, {
            fileName: "/app/applet/src/components/Footer.tsx",
            lineNumber: 178,
            columnNumber: 15
          }, void 0)
        },
        void 0,
        !1,
        {
          fileName: "/app/applet/src/components/Footer.tsx",
          lineNumber: 171,
          columnNumber: 13
        },
        void 0
      ),
      /* @__PURE__ */ p.jsxDEV(
        "a",
        {
          href: "https://www.facebook.com/share/15r9QeRt2x/?mibextid=wwXIfr",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "group bg-[#042F61]/5 rounded-lg border border-[#042F61]/10 hover:bg-[#042F61] hover:border-[#042F61] transition-all duration-300 shadow-sm",
          style: { width: "50px", height: "50px", display: "flex", alignItems: "center", justifyContent: "center" },
          children: /* @__PURE__ */ p.jsxDEV("img", { src: "https://storage.googleapis.com/chelsongordon/com.chelsongordon/logos/facebook.svg", alt: "Facebook", className: "w-[23px] h-[23px] md:w-[27px] md:h-[27px] transition-all group-hover:brightness-0 group-hover:invert", loading: "lazy", decoding: "async" }, void 0, !1, {
            fileName: "/app/applet/src/components/Footer.tsx",
            lineNumber: 187,
            columnNumber: 15
          }, void 0)
        },
        void 0,
        !1,
        {
          fileName: "/app/applet/src/components/Footer.tsx",
          lineNumber: 180,
          columnNumber: 13
        },
        void 0
      )
    ] }, void 0, !0, {
      fileName: "/app/applet/src/components/Footer.tsx",
      lineNumber: 152,
      columnNumber: 11
    }, void 0)
  ] }, void 0, !0, {
    fileName: "/app/applet/src/components/Footer.tsx",
    lineNumber: 122,
    columnNumber: 9
  }, void 0)
] }, void 0, !0, {
  fileName: "/app/applet/src/components/Footer.tsx",
  lineNumber: 8,
  columnNumber: 7
}, void 0) }, void 0, !1, {
  fileName: "/app/applet/src/components/Footer.tsx",
  lineNumber: 7,
  columnNumber: 5
}, void 0);
if (typeof Node < "u" && Node.prototype) {
  const i = Node.prototype.removeChild;
  Node.prototype.removeChild = function(r) {
    return r.parentNode !== this ? r : i.call(this, r);
  };
  const s = Node.prototype.insertBefore;
  Node.prototype.insertBefore = function(r, c) {
    return c && c.parentNode !== this ? r : s.call(this, r, c);
  };
  const l = Node.prototype.replaceChild;
  Node.prototype.replaceChild = function(r, c) {
    return c.parentNode !== this ? c : l.call(this, r, c);
  };
}
function X5() {
  return /* @__PURE__ */ p.jsxDEV("div", { className: "font-sans min-h-screen flex flex-col justify-between", children: [
    /* @__PURE__ */ p.jsxDEV(G5, { forceSolid: !0, logoHref: "https://chelsongordon.com/", isHomepage: !1 }, void 0, !1, {
      fileName: "/app/applet/src/pd-session-main.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ p.jsxDEV("main", { className: "flex-1", children: /* @__PURE__ */ p.jsxDEV(O5, {}, void 0, !1, {
      fileName: "/app/applet/src/pd-session-main.tsx",
      lineNumber: 41,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "/app/applet/src/pd-session-main.tsx",
      lineNumber: 40,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ p.jsxDEV(Y5, {}, void 0, !1, {
      fileName: "/app/applet/src/pd-session-main.tsx",
      lineNumber: 43,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "/app/applet/src/pd-session-main.tsx",
    lineNumber: 38,
    columnNumber: 5
  }, this);
}
function Fc() {
  const i = [
    "#cg-book-pd-session",
    "#book-pd-session-root",
    "#root"
  ];
  let s = null;
  for (const r of i) {
    const c = document.querySelector(r);
    if (c) {
      s = c;
      break;
    }
  }
  if (!s) {
    console.warn("[CG Book PD Session] Target mount element not found (#cg-book-pd-session, #root).");
    return;
  }
  if (s.dataset.cgInitialized === "true") {
    console.warn("[CG Book PD Session] Duplicate initialization prevented.");
    return;
  }
  s.dataset.cgInitialized = "true", O1.createRoot(s).render(
    /* @__PURE__ */ p.jsxDEV(q.StrictMode, { children: /* @__PURE__ */ p.jsxDEV(X5, {}, void 0, !1, {
      fileName: "/app/applet/src/pd-session-main.tsx",
      lineNumber: 82,
      columnNumber: 7
    }, this) }, void 0, !1, {
      fileName: "/app/applet/src/pd-session-main.tsx",
      lineNumber: 81,
      columnNumber: 5
    }, this)
  );
}
typeof window < "u" && (window.initCgBookPdSession = Fc);
document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", Fc) : Fc();
export {
  Fc as default
};
