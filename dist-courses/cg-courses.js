function Ev(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a;
}
var Yu = { exports: {} }, Zs = {};
/**
 * @license React
 * react-jsx-dev-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Nh;
function Dv() {
  if (Nh) return Zs;
  Nh = 1;
  var a = Symbol.for("react.fragment");
  return Zs.Fragment = a, Zs.jsxDEV = void 0, Zs;
}
var Ch;
function Sv() {
  return Ch || (Ch = 1, Yu.exports = Dv()), Yu.exports;
}
var p = Sv(), Xu = { exports: {} }, le = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Eh;
function Av() {
  if (Eh) return le;
  Eh = 1;
  var a = Symbol.for("react.transitional.element"), l = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), d = Symbol.for("react.consumer"), f = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), b = Symbol.for("react.suspense"), g = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), y = Symbol.for("react.activity"), N = Symbol.iterator;
  function S(D) {
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
  }, U = Object.assign, M = {};
  function B(D, L, Z) {
    this.props = D, this.context = L, this.refs = M, this.updater = Z || T;
  }
  B.prototype.isReactComponent = {}, B.prototype.setState = function(D, L) {
    if (typeof D != "object" && typeof D != "function" && D != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, D, L, "setState");
  }, B.prototype.forceUpdate = function(D) {
    this.updater.enqueueForceUpdate(this, D, "forceUpdate");
  };
  function H() {
  }
  H.prototype = B.prototype;
  function q(D, L, Z) {
    this.props = D, this.context = L, this.refs = M, this.updater = Z || T;
  }
  var F = q.prototype = new H();
  F.constructor = q, U(F, B.prototype), F.isPureReactComponent = !0;
  var J = Array.isArray;
  function P() {
  }
  var G = { H: null, A: null, T: null, S: null }, X = Object.prototype.hasOwnProperty;
  function W(D, L, Z) {
    var te = Z.ref;
    return {
      $$typeof: a,
      type: D,
      key: L,
      ref: te !== void 0 ? te : null,
      props: Z
    };
  }
  function K(D, L) {
    return W(D.type, L, D.props);
  }
  function ge(D) {
    return typeof D == "object" && D !== null && D.$$typeof === a;
  }
  function ve(D) {
    var L = { "=": "=0", ":": "=2" };
    return "$" + D.replace(/[=:]/g, function(Z) {
      return L[Z];
    });
  }
  var We = /\/+/g;
  function Ge(D, L) {
    return typeof D == "object" && D !== null && D.key != null ? ve("" + D.key) : L.toString(36);
  }
  function Le(D) {
    switch (D.status) {
      case "fulfilled":
        return D.value;
      case "rejected":
        throw D.reason;
      default:
        switch (typeof D.status == "string" ? D.then(P, P) : (D.status = "pending", D.then(
          function(L) {
            D.status === "pending" && (D.status = "fulfilled", D.value = L);
          },
          function(L) {
            D.status === "pending" && (D.status = "rejected", D.reason = L);
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
  function R(D, L, Z, te, se) {
    var fe = typeof D;
    (fe === "undefined" || fe === "boolean") && (D = null);
    var De = !1;
    if (D === null) De = !0;
    else
      switch (fe) {
        case "bigint":
        case "string":
        case "number":
          De = !0;
          break;
        case "object":
          switch (D.$$typeof) {
            case a:
            case l:
              De = !0;
              break;
            case v:
              return De = D._init, R(
                De(D._payload),
                L,
                Z,
                te,
                se
              );
          }
      }
    if (De)
      return se = se(D), De = te === "" ? "." + Ge(D, 0) : te, J(se) ? (Z = "", De != null && (Z = De.replace(We, "$&/") + "/"), R(se, L, Z, "", function(vi) {
        return vi;
      })) : se != null && (ge(se) && (se = K(
        se,
        Z + (se.key == null || D && D.key === se.key ? "" : ("" + se.key).replace(
          We,
          "$&/"
        ) + "/") + De
      )), L.push(se)), 1;
    De = 0;
    var rt = te === "" ? "." : te + ":";
    if (J(D))
      for (var He = 0; He < D.length; He++)
        te = D[He], fe = rt + Ge(te, He), De += R(
          te,
          L,
          Z,
          fe,
          se
        );
    else if (He = S(D), typeof He == "function")
      for (D = He.call(D), He = 0; !(te = D.next()).done; )
        te = te.value, fe = rt + Ge(te, He++), De += R(
          te,
          L,
          Z,
          fe,
          se
        );
    else if (fe === "object") {
      if (typeof D.then == "function")
        return R(
          Le(D),
          L,
          Z,
          te,
          se
        );
      throw L = String(D), Error(
        "Objects are not valid as a React child (found: " + (L === "[object Object]" ? "object with keys {" + Object.keys(D).join(", ") + "}" : L) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return De;
  }
  function Q(D, L, Z) {
    if (D == null) return D;
    var te = [], se = 0;
    return R(D, te, "", "", function(fe) {
      return L.call(Z, fe, se++);
    }), te;
  }
  function I(D) {
    if (D._status === -1) {
      var L = D._result;
      L = L(), L.then(
        function(Z) {
          (D._status === 0 || D._status === -1) && (D._status = 1, D._result = Z);
        },
        function(Z) {
          (D._status === 0 || D._status === -1) && (D._status = 2, D._result = Z);
        }
      ), D._status === -1 && (D._status = 0, D._result = L);
    }
    if (D._status === 1) return D._result.default;
    throw D._result;
  }
  var re = typeof reportError == "function" ? reportError : function(D) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var L = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof D == "object" && D !== null && typeof D.message == "string" ? String(D.message) : String(D),
        error: D
      });
      if (!window.dispatchEvent(L)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", D);
      return;
    }
    console.error(D);
  }, xe = {
    map: Q,
    forEach: function(D, L, Z) {
      Q(
        D,
        function() {
          L.apply(this, arguments);
        },
        Z
      );
    },
    count: function(D) {
      var L = 0;
      return Q(D, function() {
        L++;
      }), L;
    },
    toArray: function(D) {
      return Q(D, function(L) {
        return L;
      }) || [];
    },
    only: function(D) {
      if (!ge(D))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return D;
    }
  };
  return le.Activity = y, le.Children = xe, le.Component = B, le.Fragment = r, le.Profiler = c, le.PureComponent = q, le.StrictMode = o, le.Suspense = b, le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = G, le.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(D) {
      return G.H.useMemoCache(D);
    }
  }, le.cache = function(D) {
    return function() {
      return D.apply(null, arguments);
    };
  }, le.cacheSignal = function() {
    return null;
  }, le.cloneElement = function(D, L, Z) {
    if (D == null)
      throw Error(
        "The argument must be a React element, but you passed " + D + "."
      );
    var te = U({}, D.props), se = D.key;
    if (L != null)
      for (fe in L.key !== void 0 && (se = "" + L.key), L)
        !X.call(L, fe) || fe === "key" || fe === "__self" || fe === "__source" || fe === "ref" && L.ref === void 0 || (te[fe] = L[fe]);
    var fe = arguments.length - 2;
    if (fe === 1) te.children = Z;
    else if (1 < fe) {
      for (var De = Array(fe), rt = 0; rt < fe; rt++)
        De[rt] = arguments[rt + 2];
      te.children = De;
    }
    return W(D.type, se, te);
  }, le.createContext = function(D) {
    return D = {
      $$typeof: f,
      _currentValue: D,
      _currentValue2: D,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, D.Provider = D, D.Consumer = {
      $$typeof: d,
      _context: D
    }, D;
  }, le.createElement = function(D, L, Z) {
    var te, se = {}, fe = null;
    if (L != null)
      for (te in L.key !== void 0 && (fe = "" + L.key), L)
        X.call(L, te) && te !== "key" && te !== "__self" && te !== "__source" && (se[te] = L[te]);
    var De = arguments.length - 2;
    if (De === 1) se.children = Z;
    else if (1 < De) {
      for (var rt = Array(De), He = 0; He < De; He++)
        rt[He] = arguments[He + 2];
      se.children = rt;
    }
    if (D && D.defaultProps)
      for (te in De = D.defaultProps, De)
        se[te] === void 0 && (se[te] = De[te]);
    return W(D, fe, se);
  }, le.createRef = function() {
    return { current: null };
  }, le.forwardRef = function(D) {
    return { $$typeof: h, render: D };
  }, le.isValidElement = ge, le.lazy = function(D) {
    return {
      $$typeof: v,
      _payload: { _status: -1, _result: D },
      _init: I
    };
  }, le.memo = function(D, L) {
    return {
      $$typeof: g,
      type: D,
      compare: L === void 0 ? null : L
    };
  }, le.startTransition = function(D) {
    var L = G.T, Z = {};
    G.T = Z;
    try {
      var te = D(), se = G.S;
      se !== null && se(Z, te), typeof te == "object" && te !== null && typeof te.then == "function" && te.then(P, re);
    } catch (fe) {
      re(fe);
    } finally {
      L !== null && Z.types !== null && (L.types = Z.types), G.T = L;
    }
  }, le.unstable_useCacheRefresh = function() {
    return G.H.useCacheRefresh();
  }, le.use = function(D) {
    return G.H.use(D);
  }, le.useActionState = function(D, L, Z) {
    return G.H.useActionState(D, L, Z);
  }, le.useCallback = function(D, L) {
    return G.H.useCallback(D, L);
  }, le.useContext = function(D) {
    return G.H.useContext(D);
  }, le.useDebugValue = function() {
  }, le.useDeferredValue = function(D, L) {
    return G.H.useDeferredValue(D, L);
  }, le.useEffect = function(D, L) {
    return G.H.useEffect(D, L);
  }, le.useEffectEvent = function(D) {
    return G.H.useEffectEvent(D);
  }, le.useId = function() {
    return G.H.useId();
  }, le.useImperativeHandle = function(D, L, Z) {
    return G.H.useImperativeHandle(D, L, Z);
  }, le.useInsertionEffect = function(D, L) {
    return G.H.useInsertionEffect(D, L);
  }, le.useLayoutEffect = function(D, L) {
    return G.H.useLayoutEffect(D, L);
  }, le.useMemo = function(D, L) {
    return G.H.useMemo(D, L);
  }, le.useOptimistic = function(D, L) {
    return G.H.useOptimistic(D, L);
  }, le.useReducer = function(D, L, Z) {
    return G.H.useReducer(D, L, Z);
  }, le.useRef = function(D) {
    return G.H.useRef(D);
  }, le.useState = function(D) {
    return G.H.useState(D);
  }, le.useSyncExternalStore = function(D, L, Z) {
    return G.H.useSyncExternalStore(
      D,
      L,
      Z
    );
  }, le.useTransition = function() {
    return G.H.useTransition();
  }, le.version = "19.2.6", le;
}
var Dh;
function Yc() {
  return Dh || (Dh = 1, Xu.exports = Av()), Xu.exports;
}
var Y = Yc();
const Sh = /* @__PURE__ */ Ev(Y);
var Pu = { exports: {} }, ml = {}, Qu = { exports: {} }, Zu = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ah;
function Tv() {
  return Ah || (Ah = 1, (function(a) {
    function l(R, Q) {
      var I = R.length;
      R.push(Q);
      e: for (; 0 < I; ) {
        var re = I - 1 >>> 1, xe = R[re];
        if (0 < c(xe, Q))
          R[re] = Q, R[I] = xe, I = re;
        else break e;
      }
    }
    function r(R) {
      return R.length === 0 ? null : R[0];
    }
    function o(R) {
      if (R.length === 0) return null;
      var Q = R[0], I = R.pop();
      if (I !== Q) {
        R[0] = I;
        e: for (var re = 0, xe = R.length, D = xe >>> 1; re < D; ) {
          var L = 2 * (re + 1) - 1, Z = R[L], te = L + 1, se = R[te];
          if (0 > c(Z, I))
            te < xe && 0 > c(se, Z) ? (R[re] = se, R[te] = I, re = te) : (R[re] = Z, R[L] = I, re = L);
          else if (te < xe && 0 > c(se, I))
            R[re] = se, R[te] = I, re = te;
          else break e;
        }
      }
      return Q;
    }
    function c(R, Q) {
      var I = R.sortIndex - Q.sortIndex;
      return I !== 0 ? I : R.id - Q.id;
    }
    if (a.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var d = performance;
      a.unstable_now = function() {
        return d.now();
      };
    } else {
      var f = Date, h = f.now();
      a.unstable_now = function() {
        return f.now() - h;
      };
    }
    var b = [], g = [], v = 1, y = null, N = 3, S = !1, T = !1, U = !1, M = !1, B = typeof setTimeout == "function" ? setTimeout : null, H = typeof clearTimeout == "function" ? clearTimeout : null, q = typeof setImmediate < "u" ? setImmediate : null;
    function F(R) {
      for (var Q = r(g); Q !== null; ) {
        if (Q.callback === null) o(g);
        else if (Q.startTime <= R)
          o(g), Q.sortIndex = Q.expirationTime, l(b, Q);
        else break;
        Q = r(g);
      }
    }
    function J(R) {
      if (U = !1, F(R), !T)
        if (r(b) !== null)
          T = !0, P || (P = !0, ve());
        else {
          var Q = r(g);
          Q !== null && Le(J, Q.startTime - R);
        }
    }
    var P = !1, G = -1, X = 5, W = -1;
    function K() {
      return M ? !0 : !(a.unstable_now() - W < X);
    }
    function ge() {
      if (M = !1, P) {
        var R = a.unstable_now();
        W = R;
        var Q = !0;
        try {
          e: {
            T = !1, U && (U = !1, H(G), G = -1), S = !0;
            var I = N;
            try {
              t: {
                for (F(R), y = r(b); y !== null && !(y.expirationTime > R && K()); ) {
                  var re = y.callback;
                  if (typeof re == "function") {
                    y.callback = null, N = y.priorityLevel;
                    var xe = re(
                      y.expirationTime <= R
                    );
                    if (R = a.unstable_now(), typeof xe == "function") {
                      y.callback = xe, F(R), Q = !0;
                      break t;
                    }
                    y === r(b) && o(b), F(R);
                  } else o(b);
                  y = r(b);
                }
                if (y !== null) Q = !0;
                else {
                  var D = r(g);
                  D !== null && Le(
                    J,
                    D.startTime - R
                  ), Q = !1;
                }
              }
              break e;
            } finally {
              y = null, N = I, S = !1;
            }
            Q = void 0;
          }
        } finally {
          Q ? ve() : P = !1;
        }
      }
    }
    var ve;
    if (typeof q == "function")
      ve = function() {
        q(ge);
      };
    else if (typeof MessageChannel < "u") {
      var We = new MessageChannel(), Ge = We.port2;
      We.port1.onmessage = ge, ve = function() {
        Ge.postMessage(null);
      };
    } else
      ve = function() {
        B(ge, 0);
      };
    function Le(R, Q) {
      G = B(function() {
        R(a.unstable_now());
      }, Q);
    }
    a.unstable_IdlePriority = 5, a.unstable_ImmediatePriority = 1, a.unstable_LowPriority = 4, a.unstable_NormalPriority = 3, a.unstable_Profiling = null, a.unstable_UserBlockingPriority = 2, a.unstable_cancelCallback = function(R) {
      R.callback = null;
    }, a.unstable_forceFrameRate = function(R) {
      0 > R || 125 < R ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : X = 0 < R ? Math.floor(1e3 / R) : 5;
    }, a.unstable_getCurrentPriorityLevel = function() {
      return N;
    }, a.unstable_next = function(R) {
      switch (N) {
        case 1:
        case 2:
        case 3:
          var Q = 3;
          break;
        default:
          Q = N;
      }
      var I = N;
      N = Q;
      try {
        return R();
      } finally {
        N = I;
      }
    }, a.unstable_requestPaint = function() {
      M = !0;
    }, a.unstable_runWithPriority = function(R, Q) {
      switch (R) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          R = 3;
      }
      var I = N;
      N = R;
      try {
        return Q();
      } finally {
        N = I;
      }
    }, a.unstable_scheduleCallback = function(R, Q, I) {
      var re = a.unstable_now();
      switch (typeof I == "object" && I !== null ? (I = I.delay, I = typeof I == "number" && 0 < I ? re + I : re) : I = re, R) {
        case 1:
          var xe = -1;
          break;
        case 2:
          xe = 250;
          break;
        case 5:
          xe = 1073741823;
          break;
        case 4:
          xe = 1e4;
          break;
        default:
          xe = 5e3;
      }
      return xe = I + xe, R = {
        id: v++,
        callback: Q,
        priorityLevel: R,
        startTime: I,
        expirationTime: xe,
        sortIndex: -1
      }, I > re ? (R.sortIndex = I, l(g, R), r(b) === null && R === r(g) && (U ? (H(G), G = -1) : U = !0, Le(J, I - re))) : (R.sortIndex = xe, l(b, R), T || S || (T = !0, P || (P = !0, ve()))), R;
    }, a.unstable_shouldYield = K, a.unstable_wrapCallback = function(R) {
      var Q = N;
      return function() {
        var I = N;
        N = Q;
        try {
          return R.apply(this, arguments);
        } finally {
          N = I;
        }
      };
    };
  })(Zu)), Zu;
}
var Th;
function wv() {
  return Th || (Th = 1, Qu.exports = Tv()), Qu.exports;
}
var Ku = { exports: {} }, ot = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wh;
function Vv() {
  if (wh) return ot;
  wh = 1;
  var a = Yc();
  function l(b) {
    var g = "https://react.dev/errors/" + b;
    if (1 < arguments.length) {
      g += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var v = 2; v < arguments.length; v++)
        g += "&args[]=" + encodeURIComponent(arguments[v]);
    }
    return "Minified React error #" + b + "; visit " + g + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function r() {
  }
  var o = {
    d: {
      f: r,
      r: function() {
        throw Error(l(522));
      },
      D: r,
      C: r,
      L: r,
      m: r,
      X: r,
      S: r,
      M: r
    },
    p: 0,
    findDOMNode: null
  }, c = Symbol.for("react.portal");
  function d(b, g, v) {
    var y = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: c,
      key: y == null ? null : "" + y,
      children: b,
      containerInfo: g,
      implementation: v
    };
  }
  var f = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function h(b, g) {
    if (b === "font") return "";
    if (typeof g == "string")
      return g === "use-credentials" ? g : "";
  }
  return ot.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o, ot.createPortal = function(b, g) {
    var v = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!g || g.nodeType !== 1 && g.nodeType !== 9 && g.nodeType !== 11)
      throw Error(l(299));
    return d(b, g, null, v);
  }, ot.flushSync = function(b) {
    var g = f.T, v = o.p;
    try {
      if (f.T = null, o.p = 2, b) return b();
    } finally {
      f.T = g, o.p = v, o.d.f();
    }
  }, ot.preconnect = function(b, g) {
    typeof b == "string" && (g ? (g = g.crossOrigin, g = typeof g == "string" ? g === "use-credentials" ? g : "" : void 0) : g = null, o.d.C(b, g));
  }, ot.prefetchDNS = function(b) {
    typeof b == "string" && o.d.D(b);
  }, ot.preinit = function(b, g) {
    if (typeof b == "string" && g && typeof g.as == "string") {
      var v = g.as, y = h(v, g.crossOrigin), N = typeof g.integrity == "string" ? g.integrity : void 0, S = typeof g.fetchPriority == "string" ? g.fetchPriority : void 0;
      v === "style" ? o.d.S(
        b,
        typeof g.precedence == "string" ? g.precedence : void 0,
        {
          crossOrigin: y,
          integrity: N,
          fetchPriority: S
        }
      ) : v === "script" && o.d.X(b, {
        crossOrigin: y,
        integrity: N,
        fetchPriority: S,
        nonce: typeof g.nonce == "string" ? g.nonce : void 0
      });
    }
  }, ot.preinitModule = function(b, g) {
    if (typeof b == "string")
      if (typeof g == "object" && g !== null) {
        if (g.as == null || g.as === "script") {
          var v = h(
            g.as,
            g.crossOrigin
          );
          o.d.M(b, {
            crossOrigin: v,
            integrity: typeof g.integrity == "string" ? g.integrity : void 0,
            nonce: typeof g.nonce == "string" ? g.nonce : void 0
          });
        }
      } else g == null && o.d.M(b);
  }, ot.preload = function(b, g) {
    if (typeof b == "string" && typeof g == "object" && g !== null && typeof g.as == "string") {
      var v = g.as, y = h(v, g.crossOrigin);
      o.d.L(b, v, {
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
  }, ot.preloadModule = function(b, g) {
    if (typeof b == "string")
      if (g) {
        var v = h(g.as, g.crossOrigin);
        o.d.m(b, {
          as: typeof g.as == "string" && g.as !== "script" ? g.as : void 0,
          crossOrigin: v,
          integrity: typeof g.integrity == "string" ? g.integrity : void 0
        });
      } else o.d.m(b);
  }, ot.requestFormReset = function(b) {
    o.d.r(b);
  }, ot.unstable_batchedUpdates = function(b, g) {
    return b(g);
  }, ot.useFormState = function(b, g, v) {
    return f.H.useFormState(b, g, v);
  }, ot.useFormStatus = function() {
    return f.H.useHostTransitionStatus();
  }, ot.version = "19.2.6", ot;
}
var Vh;
function jv() {
  if (Vh) return Ku.exports;
  Vh = 1;
  function a() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (l) {
        console.error(l);
      }
  }
  return a(), Ku.exports = Vv(), Ku.exports;
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
function Mv() {
  if (jh) return ml;
  jh = 1;
  var a = wv(), l = Yc(), r = jv();
  function o(e) {
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
  function d(e) {
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
  function b(e) {
    if (d(e) !== e)
      throw Error(o(188));
  }
  function g(e) {
    var t = e.alternate;
    if (!t) {
      if (t = d(e), t === null) throw Error(o(188));
      return t !== e ? null : e;
    }
    for (var n = e, i = t; ; ) {
      var s = n.return;
      if (s === null) break;
      var u = s.alternate;
      if (u === null) {
        if (i = s.return, i !== null) {
          n = i;
          continue;
        }
        break;
      }
      if (s.child === u.child) {
        for (u = s.child; u; ) {
          if (u === n) return b(s), e;
          if (u === i) return b(s), t;
          u = u.sibling;
        }
        throw Error(o(188));
      }
      if (n.return !== i.return) n = s, i = u;
      else {
        for (var m = !1, x = s.child; x; ) {
          if (x === n) {
            m = !0, n = s, i = u;
            break;
          }
          if (x === i) {
            m = !0, i = s, n = u;
            break;
          }
          x = x.sibling;
        }
        if (!m) {
          for (x = u.child; x; ) {
            if (x === n) {
              m = !0, n = u, i = s;
              break;
            }
            if (x === i) {
              m = !0, i = u, n = s;
              break;
            }
            x = x.sibling;
          }
          if (!m) throw Error(o(189));
        }
      }
      if (n.alternate !== i) throw Error(o(190));
    }
    if (n.tag !== 3) throw Error(o(188));
    return n.stateNode.current === n ? e : t;
  }
  function v(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (t = v(e), t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var y = Object.assign, N = Symbol.for("react.element"), S = Symbol.for("react.transitional.element"), T = Symbol.for("react.portal"), U = Symbol.for("react.fragment"), M = Symbol.for("react.strict_mode"), B = Symbol.for("react.profiler"), H = Symbol.for("react.consumer"), q = Symbol.for("react.context"), F = Symbol.for("react.forward_ref"), J = Symbol.for("react.suspense"), P = Symbol.for("react.suspense_list"), G = Symbol.for("react.memo"), X = Symbol.for("react.lazy"), W = Symbol.for("react.activity"), K = Symbol.for("react.memo_cache_sentinel"), ge = Symbol.iterator;
  function ve(e) {
    return e === null || typeof e != "object" ? null : (e = ge && e[ge] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var We = Symbol.for("react.client.reference");
  function Ge(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === We ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case U:
        return "Fragment";
      case B:
        return "Profiler";
      case M:
        return "StrictMode";
      case J:
        return "Suspense";
      case P:
        return "SuspenseList";
      case W:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case T:
          return "Portal";
        case q:
          return e.displayName || "Context";
        case H:
          return (e._context.displayName || "Context") + ".Consumer";
        case F:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case G:
          return t = e.displayName || null, t !== null ? t : Ge(e.type) || "Memo";
        case X:
          t = e._payload, e = e._init;
          try {
            return Ge(e(t));
          } catch {
          }
      }
    return null;
  }
  var Le = Array.isArray, R = l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Q = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, I = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, re = [], xe = -1;
  function D(e) {
    return { current: e };
  }
  function L(e) {
    0 > xe || (e.current = re[xe], re[xe] = null, xe--);
  }
  function Z(e, t) {
    xe++, re[xe] = e.current, e.current = t;
  }
  var te = D(null), se = D(null), fe = D(null), De = D(null);
  function rt(e, t) {
    switch (Z(fe, t), Z(se, e), Z(te, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? Yp(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI)
          t = Yp(t), e = Xp(t, e);
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
    L(te), Z(te, e);
  }
  function He() {
    L(te), L(se), L(fe);
  }
  function vi(e) {
    e.memoizedState !== null && Z(De, e);
    var t = te.current, n = Xp(t, e.type);
    t !== n && (Z(se, e), Z(te, n));
  }
  function jl(e) {
    se.current === e && (L(te), L(se)), De.current === e && (L(De), rl._currentValue = I);
  }
  var Ao, yf;
  function Wn(e) {
    if (Ao === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        Ao = t && t[1] || "", yf = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Ao + e + yf;
  }
  var To = !1;
  function wo(e, t) {
    if (!e || To) return "";
    To = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var i = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var k = function() {
                throw Error();
              };
              if (Object.defineProperty(k.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(k, []);
                } catch (z) {
                  var j = z;
                }
                Reflect.construct(e, [], k);
              } else {
                try {
                  k.call();
                } catch (z) {
                  j = z;
                }
                e.call(k.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (z) {
                j = z;
              }
              (k = e()) && typeof k.catch == "function" && k.catch(function() {
              });
            }
          } catch (z) {
            if (z && j && typeof z.stack == "string")
              return [z.stack, j.stack];
          }
          return [null, null];
        }
      };
      i.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var s = Object.getOwnPropertyDescriptor(
        i.DetermineComponentFrameRoot,
        "name"
      );
      s && s.configurable && Object.defineProperty(
        i.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var u = i.DetermineComponentFrameRoot(), m = u[0], x = u[1];
      if (m && x) {
        var C = m.split(`
`), V = x.split(`
`);
        for (s = i = 0; i < C.length && !C[i].includes("DetermineComponentFrameRoot"); )
          i++;
        for (; s < V.length && !V[s].includes(
          "DetermineComponentFrameRoot"
        ); )
          s++;
        if (i === C.length || s === V.length)
          for (i = C.length - 1, s = V.length - 1; 1 <= i && 0 <= s && C[i] !== V[s]; )
            s--;
        for (; 1 <= i && 0 <= s; i--, s--)
          if (C[i] !== V[s]) {
            if (i !== 1 || s !== 1)
              do
                if (i--, s--, 0 > s || C[i] !== V[s]) {
                  var _ = `
` + C[i].replace(" at new ", " at ");
                  return e.displayName && _.includes("<anonymous>") && (_ = _.replace("<anonymous>", e.displayName)), _;
                }
              while (1 <= i && 0 <= s);
            break;
          }
      }
    } finally {
      To = !1, Error.prepareStackTrace = n;
    }
    return (n = e ? e.displayName || e.name : "") ? Wn(n) : "";
  }
  function e1(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Wn(e.type);
      case 16:
        return Wn("Lazy");
      case 13:
        return e.child !== t && t !== null ? Wn("Suspense Fallback") : Wn("Suspense");
      case 19:
        return Wn("SuspenseList");
      case 0:
      case 15:
        return wo(e.type, !1);
      case 11:
        return wo(e.type.render, !1);
      case 1:
        return wo(e.type, !0);
      case 31:
        return Wn("Activity");
      default:
        return "";
    }
  }
  function Nf(e) {
    try {
      var t = "", n = null;
      do
        t += e1(e, n), n = e, e = e.return;
      while (e);
      return t;
    } catch (i) {
      return `
Error generating stack: ` + i.message + `
` + i.stack;
    }
  }
  var Vo = Object.prototype.hasOwnProperty, jo = a.unstable_scheduleCallback, Mo = a.unstable_cancelCallback, t1 = a.unstable_shouldYield, n1 = a.unstable_requestPaint, yt = a.unstable_now, a1 = a.unstable_getCurrentPriorityLevel, Cf = a.unstable_ImmediatePriority, Ef = a.unstable_UserBlockingPriority, Ml = a.unstable_NormalPriority, i1 = a.unstable_LowPriority, Df = a.unstable_IdlePriority, l1 = a.log, s1 = a.unstable_setDisableYieldValue, yi = null, Nt = null;
  function En(e) {
    if (typeof l1 == "function" && s1(e), Nt && typeof Nt.setStrictMode == "function")
      try {
        Nt.setStrictMode(yi, e);
      } catch {
      }
  }
  var Ct = Math.clz32 ? Math.clz32 : u1, o1 = Math.log, r1 = Math.LN2;
  function u1(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (o1(e) / r1 | 0) | 0;
  }
  var zl = 256, Rl = 262144, _l = 4194304;
  function ea(e) {
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
  function Ol(e, t, n) {
    var i = e.pendingLanes;
    if (i === 0) return 0;
    var s = 0, u = e.suspendedLanes, m = e.pingedLanes;
    e = e.warmLanes;
    var x = i & 134217727;
    return x !== 0 ? (i = x & ~u, i !== 0 ? s = ea(i) : (m &= x, m !== 0 ? s = ea(m) : n || (n = x & ~e, n !== 0 && (s = ea(n))))) : (x = i & ~u, x !== 0 ? s = ea(x) : m !== 0 ? s = ea(m) : n || (n = i & ~e, n !== 0 && (s = ea(n)))), s === 0 ? 0 : t !== 0 && t !== s && (t & u) === 0 && (u = s & -s, n = t & -t, u >= n || u === 32 && (n & 4194048) !== 0) ? t : s;
  }
  function Ni(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function c1(e, t) {
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
  function Sf() {
    var e = _l;
    return _l <<= 1, (_l & 62914560) === 0 && (_l = 4194304), e;
  }
  function zo(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Ci(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function f1(e, t, n, i, s, u) {
    var m = e.pendingLanes;
    e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0;
    var x = e.entanglements, C = e.expirationTimes, V = e.hiddenUpdates;
    for (n = m & ~n; 0 < n; ) {
      var _ = 31 - Ct(n), k = 1 << _;
      x[_] = 0, C[_] = -1;
      var j = V[_];
      if (j !== null)
        for (V[_] = null, _ = 0; _ < j.length; _++) {
          var z = j[_];
          z !== null && (z.lane &= -536870913);
        }
      n &= ~k;
    }
    i !== 0 && Af(e, i, 0), u !== 0 && s === 0 && e.tag !== 0 && (e.suspendedLanes |= u & ~(m & ~t));
  }
  function Af(e, t, n) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var i = 31 - Ct(t);
    e.entangledLanes |= t, e.entanglements[i] = e.entanglements[i] | 1073741824 | n & 261930;
  }
  function Tf(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var i = 31 - Ct(n), s = 1 << i;
      s & t | e[i] & t && (e[i] |= t), n &= ~s;
    }
  }
  function wf(e, t) {
    var n = t & -t;
    return n = (n & 42) !== 0 ? 1 : Ro(n), (n & (e.suspendedLanes | t)) !== 0 ? 0 : n;
  }
  function Ro(e) {
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
  function _o(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Vf() {
    var e = Q.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : ph(e.type));
  }
  function jf(e, t) {
    var n = Q.p;
    try {
      return Q.p = e, t();
    } finally {
      Q.p = n;
    }
  }
  var Dn = Math.random().toString(36).slice(2), et = "__reactFiber$" + Dn, mt = "__reactProps$" + Dn, Aa = "__reactContainer$" + Dn, Oo = "__reactEvents$" + Dn, m1 = "__reactListeners$" + Dn, d1 = "__reactHandles$" + Dn, Mf = "__reactResources$" + Dn, Ei = "__reactMarker$" + Dn;
  function Bo(e) {
    delete e[et], delete e[mt], delete e[Oo], delete e[m1], delete e[d1];
  }
  function Ta(e) {
    var t = e[et];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[Aa] || n[et]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
          for (e = $p(e); e !== null; ) {
            if (n = e[et]) return n;
            e = $p(e);
          }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function wa(e) {
    if (e = e[et] || e[Aa]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function Di(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(o(33));
  }
  function Va(e) {
    var t = e[Mf];
    return t || (t = e[Mf] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function Je(e) {
    e[Ei] = !0;
  }
  var zf = /* @__PURE__ */ new Set(), Rf = {};
  function ta(e, t) {
    ja(e, t), ja(e + "Capture", t);
  }
  function ja(e, t) {
    for (Rf[e] = t, e = 0; e < t.length; e++)
      zf.add(t[e]);
  }
  var p1 = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), _f = {}, Of = {};
  function h1(e) {
    return Vo.call(Of, e) ? !0 : Vo.call(_f, e) ? !1 : p1.test(e) ? Of[e] = !0 : (_f[e] = !0, !1);
  }
  function Bl(e, t, n) {
    if (h1(t))
      if (n === null) e.removeAttribute(t);
      else {
        switch (typeof n) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var i = t.toLowerCase().slice(0, 5);
            if (i !== "data-" && i !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, "" + n);
      }
  }
  function kl(e, t, n) {
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
  function nn(e, t, n, i) {
    if (i === null) e.removeAttribute(n);
    else {
      switch (typeof i) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(n);
          return;
      }
      e.setAttributeNS(t, n, "" + i);
    }
  }
  function jt(e) {
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
  function Bf(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function g1(e, t, n) {
    var i = Object.getOwnPropertyDescriptor(
      e.constructor.prototype,
      t
    );
    if (!e.hasOwnProperty(t) && typeof i < "u" && typeof i.get == "function" && typeof i.set == "function") {
      var s = i.get, u = i.set;
      return Object.defineProperty(e, t, {
        configurable: !0,
        get: function() {
          return s.call(this);
        },
        set: function(m) {
          n = "" + m, u.call(this, m);
        }
      }), Object.defineProperty(e, t, {
        enumerable: i.enumerable
      }), {
        getValue: function() {
          return n;
        },
        setValue: function(m) {
          n = "" + m;
        },
        stopTracking: function() {
          e._valueTracker = null, delete e[t];
        }
      };
    }
  }
  function ko(e) {
    if (!e._valueTracker) {
      var t = Bf(e) ? "checked" : "value";
      e._valueTracker = g1(
        e,
        t,
        "" + e[t]
      );
    }
  }
  function kf(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), i = "";
    return e && (i = Bf(e) ? e.checked ? "true" : "false" : e.value), e = i, e !== n ? (t.setValue(e), !0) : !1;
  }
  function Ul(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var x1 = /[\n"\\]/g;
  function Mt(e) {
    return e.replace(
      x1,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Uo(e, t, n, i, s, u, m, x) {
    e.name = "", m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" ? e.type = m : e.removeAttribute("type"), t != null ? m === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + jt(t)) : e.value !== "" + jt(t) && (e.value = "" + jt(t)) : m !== "submit" && m !== "reset" || e.removeAttribute("value"), t != null ? Lo(e, m, jt(t)) : n != null ? Lo(e, m, jt(n)) : i != null && e.removeAttribute("value"), s == null && u != null && (e.defaultChecked = !!u), s != null && (e.checked = s && typeof s != "function" && typeof s != "symbol"), x != null && typeof x != "function" && typeof x != "symbol" && typeof x != "boolean" ? e.name = "" + jt(x) : e.removeAttribute("name");
  }
  function Uf(e, t, n, i, s, u, m, x) {
    if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (e.type = u), t != null || n != null) {
      if (!(u !== "submit" && u !== "reset" || t != null)) {
        ko(e);
        return;
      }
      n = n != null ? "" + jt(n) : "", t = t != null ? "" + jt(t) : n, x || t === e.value || (e.value = t), e.defaultValue = t;
    }
    i = i ?? s, i = typeof i != "function" && typeof i != "symbol" && !!i, e.checked = x ? e.checked : !!i, e.defaultChecked = !!i, m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" && (e.name = m), ko(e);
  }
  function Lo(e, t, n) {
    t === "number" && Ul(e.ownerDocument) === e || e.defaultValue === "" + n || (e.defaultValue = "" + n);
  }
  function Ma(e, t, n, i) {
    if (e = e.options, t) {
      t = {};
      for (var s = 0; s < n.length; s++)
        t["$" + n[s]] = !0;
      for (n = 0; n < e.length; n++)
        s = t.hasOwnProperty("$" + e[n].value), e[n].selected !== s && (e[n].selected = s), s && i && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + jt(n), t = null, s = 0; s < e.length; s++) {
        if (e[s].value === n) {
          e[s].selected = !0, i && (e[s].defaultSelected = !0);
          return;
        }
        t !== null || e[s].disabled || (t = e[s]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Lf(e, t, n) {
    if (t != null && (t = "" + jt(t), t !== e.value && (e.value = t), n == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = n != null ? "" + jt(n) : "";
  }
  function Hf(e, t, n, i) {
    if (t == null) {
      if (i != null) {
        if (n != null) throw Error(o(92));
        if (Le(i)) {
          if (1 < i.length) throw Error(o(93));
          i = i[0];
        }
        n = i;
      }
      n == null && (n = ""), t = n;
    }
    n = jt(t), e.defaultValue = n, i = e.textContent, i === n && i !== "" && i !== null && (e.value = i), ko(e);
  }
  function za(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var b1 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function qf(e, t, n) {
    var i = t.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === "" ? i ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : i ? e.setProperty(t, n) : typeof n != "number" || n === 0 || b1.has(t) ? t === "float" ? e.cssFloat = n : e[t] = ("" + n).trim() : e[t] = n + "px";
  }
  function Ff(e, t, n) {
    if (t != null && typeof t != "object")
      throw Error(o(62));
    if (e = e.style, n != null) {
      for (var i in n)
        !n.hasOwnProperty(i) || t != null && t.hasOwnProperty(i) || (i.indexOf("--") === 0 ? e.setProperty(i, "") : i === "float" ? e.cssFloat = "" : e[i] = "");
      for (var s in t)
        i = t[s], t.hasOwnProperty(s) && n[s] !== i && qf(e, s, i);
    } else
      for (var u in t)
        t.hasOwnProperty(u) && qf(e, u, t[u]);
  }
  function Ho(e) {
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
  var v1 = /* @__PURE__ */ new Map([
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
  ]), y1 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Ll(e) {
    return y1.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function an() {
  }
  var qo = null;
  function Fo(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Ra = null, _a = null;
  function Gf(e) {
    var t = wa(e);
    if (t && (e = t.stateNode)) {
      var n = e[mt] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (Uo(
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
              'input[name="' + Mt(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < n.length; t++) {
              var i = n[t];
              if (i !== e && i.form === e.form) {
                var s = i[mt] || null;
                if (!s) throw Error(o(90));
                Uo(
                  i,
                  s.value,
                  s.defaultValue,
                  s.defaultValue,
                  s.checked,
                  s.defaultChecked,
                  s.type,
                  s.name
                );
              }
            }
            for (t = 0; t < n.length; t++)
              i = n[t], i.form === e.form && kf(i);
          }
          break e;
        case "textarea":
          Lf(e, n.value, n.defaultValue);
          break e;
        case "select":
          t = n.value, t != null && Ma(e, !!n.multiple, t, !1);
      }
    }
  }
  var Go = !1;
  function Yf(e, t, n) {
    if (Go) return e(t, n);
    Go = !0;
    try {
      var i = e(t);
      return i;
    } finally {
      if (Go = !1, (Ra !== null || _a !== null) && (As(), Ra && (t = Ra, e = _a, _a = Ra = null, Gf(t), e)))
        for (t = 0; t < e.length; t++) Gf(e[t]);
    }
  }
  function Si(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var i = n[mt] || null;
    if (i === null) return null;
    n = i[t];
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
        (i = !i.disabled) || (e = e.type, i = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !i;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function")
      throw Error(
        o(231, t, typeof n)
      );
    return n;
  }
  var ln = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Yo = !1;
  if (ln)
    try {
      var Ai = {};
      Object.defineProperty(Ai, "passive", {
        get: function() {
          Yo = !0;
        }
      }), window.addEventListener("test", Ai, Ai), window.removeEventListener("test", Ai, Ai);
    } catch {
      Yo = !1;
    }
  var Sn = null, Xo = null, Hl = null;
  function Xf() {
    if (Hl) return Hl;
    var e, t = Xo, n = t.length, i, s = "value" in Sn ? Sn.value : Sn.textContent, u = s.length;
    for (e = 0; e < n && t[e] === s[e]; e++) ;
    var m = n - e;
    for (i = 1; i <= m && t[n - i] === s[u - i]; i++) ;
    return Hl = s.slice(e, 1 < i ? 1 - i : void 0);
  }
  function ql(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Fl() {
    return !0;
  }
  function Pf() {
    return !1;
  }
  function dt(e) {
    function t(n, i, s, u, m) {
      this._reactName = n, this._targetInst = s, this.type = i, this.nativeEvent = u, this.target = m, this.currentTarget = null;
      for (var x in e)
        e.hasOwnProperty(x) && (n = e[x], this[x] = n ? n(u) : u[x]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? Fl : Pf, this.isPropagationStopped = Pf, this;
    }
    return y(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Fl);
      },
      stopPropagation: function() {
        var n = this.nativeEvent;
        n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Fl);
      },
      persist: function() {
      },
      isPersistent: Fl
    }), t;
  }
  var na = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Gl = dt(na), Ti = y({}, na, { view: 0, detail: 0 }), N1 = dt(Ti), Po, Qo, wi, Yl = y({}, Ti, {
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
    getModifierState: Ko,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== wi && (wi && e.type === "mousemove" ? (Po = e.screenX - wi.screenX, Qo = e.screenY - wi.screenY) : Qo = Po = 0, wi = e), Po);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : Qo;
    }
  }), Qf = dt(Yl), C1 = y({}, Yl, { dataTransfer: 0 }), E1 = dt(C1), D1 = y({}, Ti, { relatedTarget: 0 }), Zo = dt(D1), S1 = y({}, na, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), A1 = dt(S1), T1 = y({}, na, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), w1 = dt(T1), V1 = y({}, na, { data: 0 }), Zf = dt(V1), j1 = {
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
  }, M1 = {
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
  }, z1 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function R1(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = z1[e]) ? !!t[e] : !1;
  }
  function Ko() {
    return R1;
  }
  var _1 = y({}, Ti, {
    key: function(e) {
      if (e.key) {
        var t = j1[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = ql(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? M1[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ko,
    charCode: function(e) {
      return e.type === "keypress" ? ql(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? ql(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), O1 = dt(_1), B1 = y({}, Yl, {
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
  }), Kf = dt(B1), k1 = y({}, Ti, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ko
  }), U1 = dt(k1), L1 = y({}, na, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), H1 = dt(L1), q1 = y({}, Yl, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), F1 = dt(q1), G1 = y({}, na, {
    newState: 0,
    oldState: 0
  }), Y1 = dt(G1), X1 = [9, 13, 27, 32], Io = ln && "CompositionEvent" in window, Vi = null;
  ln && "documentMode" in document && (Vi = document.documentMode);
  var P1 = ln && "TextEvent" in window && !Vi, If = ln && (!Io || Vi && 8 < Vi && 11 >= Vi), Jf = " ", $f = !1;
  function Wf(e, t) {
    switch (e) {
      case "keyup":
        return X1.indexOf(t.keyCode) !== -1;
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
  function em(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Oa = !1;
  function Q1(e, t) {
    switch (e) {
      case "compositionend":
        return em(t);
      case "keypress":
        return t.which !== 32 ? null : ($f = !0, Jf);
      case "textInput":
        return e = t.data, e === Jf && $f ? null : e;
      default:
        return null;
    }
  }
  function Z1(e, t) {
    if (Oa)
      return e === "compositionend" || !Io && Wf(e, t) ? (e = Xf(), Hl = Xo = Sn = null, Oa = !1, e) : null;
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
        return If && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var K1 = {
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
  function tm(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!K1[e.type] : t === "textarea";
  }
  function nm(e, t, n, i) {
    Ra ? _a ? _a.push(i) : _a = [i] : Ra = i, t = Rs(t, "onChange"), 0 < t.length && (n = new Gl(
      "onChange",
      "change",
      null,
      n,
      i
    ), e.push({ event: n, listeners: t }));
  }
  var ji = null, Mi = null;
  function I1(e) {
    Up(e, 0);
  }
  function Xl(e) {
    var t = Di(e);
    if (kf(t)) return e;
  }
  function am(e, t) {
    if (e === "change") return t;
  }
  var im = !1;
  if (ln) {
    var Jo;
    if (ln) {
      var $o = "oninput" in document;
      if (!$o) {
        var lm = document.createElement("div");
        lm.setAttribute("oninput", "return;"), $o = typeof lm.oninput == "function";
      }
      Jo = $o;
    } else Jo = !1;
    im = Jo && (!document.documentMode || 9 < document.documentMode);
  }
  function sm() {
    ji && (ji.detachEvent("onpropertychange", om), Mi = ji = null);
  }
  function om(e) {
    if (e.propertyName === "value" && Xl(Mi)) {
      var t = [];
      nm(
        t,
        Mi,
        e,
        Fo(e)
      ), Yf(I1, t);
    }
  }
  function J1(e, t, n) {
    e === "focusin" ? (sm(), ji = t, Mi = n, ji.attachEvent("onpropertychange", om)) : e === "focusout" && sm();
  }
  function $1(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Xl(Mi);
  }
  function W1(e, t) {
    if (e === "click") return Xl(t);
  }
  function eb(e, t) {
    if (e === "input" || e === "change")
      return Xl(t);
  }
  function tb(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Et = typeof Object.is == "function" ? Object.is : tb;
  function zi(e, t) {
    if (Et(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var n = Object.keys(e), i = Object.keys(t);
    if (n.length !== i.length) return !1;
    for (i = 0; i < n.length; i++) {
      var s = n[i];
      if (!Vo.call(t, s) || !Et(e[s], t[s]))
        return !1;
    }
    return !0;
  }
  function rm(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function um(e, t) {
    var n = rm(e);
    e = 0;
    for (var i; n; ) {
      if (n.nodeType === 3) {
        if (i = e + n.textContent.length, e <= t && i >= t)
          return { node: n, offset: t - e };
        e = i;
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
      n = rm(n);
    }
  }
  function cm(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? cm(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function fm(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = Ul(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Ul(e.document);
    }
    return t;
  }
  function Wo(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var nb = ln && "documentMode" in document && 11 >= document.documentMode, Ba = null, er = null, Ri = null, tr = !1;
  function mm(e, t, n) {
    var i = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    tr || Ba == null || Ba !== Ul(i) || (i = Ba, "selectionStart" in i && Wo(i) ? i = { start: i.selectionStart, end: i.selectionEnd } : (i = (i.ownerDocument && i.ownerDocument.defaultView || window).getSelection(), i = {
      anchorNode: i.anchorNode,
      anchorOffset: i.anchorOffset,
      focusNode: i.focusNode,
      focusOffset: i.focusOffset
    }), Ri && zi(Ri, i) || (Ri = i, i = Rs(er, "onSelect"), 0 < i.length && (t = new Gl(
      "onSelect",
      "select",
      null,
      t,
      n
    ), e.push({ event: t, listeners: i }), t.target = Ba)));
  }
  function aa(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var ka = {
    animationend: aa("Animation", "AnimationEnd"),
    animationiteration: aa("Animation", "AnimationIteration"),
    animationstart: aa("Animation", "AnimationStart"),
    transitionrun: aa("Transition", "TransitionRun"),
    transitionstart: aa("Transition", "TransitionStart"),
    transitioncancel: aa("Transition", "TransitionCancel"),
    transitionend: aa("Transition", "TransitionEnd")
  }, nr = {}, dm = {};
  ln && (dm = document.createElement("div").style, "AnimationEvent" in window || (delete ka.animationend.animation, delete ka.animationiteration.animation, delete ka.animationstart.animation), "TransitionEvent" in window || delete ka.transitionend.transition);
  function ia(e) {
    if (nr[e]) return nr[e];
    if (!ka[e]) return e;
    var t = ka[e], n;
    for (n in t)
      if (t.hasOwnProperty(n) && n in dm)
        return nr[e] = t[n];
    return e;
  }
  var pm = ia("animationend"), hm = ia("animationiteration"), gm = ia("animationstart"), ab = ia("transitionrun"), ib = ia("transitionstart"), lb = ia("transitioncancel"), xm = ia("transitionend"), bm = /* @__PURE__ */ new Map(), ar = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  ar.push("scrollEnd");
  function Ft(e, t) {
    bm.set(e, t), ta(t, [e]);
  }
  var Pl = typeof reportError == "function" ? reportError : function(e) {
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
  }, zt = [], Ua = 0, ir = 0;
  function Ql() {
    for (var e = Ua, t = ir = Ua = 0; t < e; ) {
      var n = zt[t];
      zt[t++] = null;
      var i = zt[t];
      zt[t++] = null;
      var s = zt[t];
      zt[t++] = null;
      var u = zt[t];
      if (zt[t++] = null, i !== null && s !== null) {
        var m = i.pending;
        m === null ? s.next = s : (s.next = m.next, m.next = s), i.pending = s;
      }
      u !== 0 && vm(n, s, u);
    }
  }
  function Zl(e, t, n, i) {
    zt[Ua++] = e, zt[Ua++] = t, zt[Ua++] = n, zt[Ua++] = i, ir |= i, e.lanes |= i, e = e.alternate, e !== null && (e.lanes |= i);
  }
  function lr(e, t, n, i) {
    return Zl(e, t, n, i), Kl(e);
  }
  function la(e, t) {
    return Zl(e, null, null, t), Kl(e);
  }
  function vm(e, t, n) {
    e.lanes |= n;
    var i = e.alternate;
    i !== null && (i.lanes |= n);
    for (var s = !1, u = e.return; u !== null; )
      u.childLanes |= n, i = u.alternate, i !== null && (i.childLanes |= n), u.tag === 22 && (e = u.stateNode, e === null || e._visibility & 1 || (s = !0)), e = u, u = u.return;
    return e.tag === 3 ? (u = e.stateNode, s && t !== null && (s = 31 - Ct(n), e = u.hiddenUpdates, i = e[s], i === null ? e[s] = [t] : i.push(t), t.lane = n | 536870912), u) : null;
  }
  function Kl(e) {
    if (50 < tl)
      throw tl = 0, pu = null, Error(o(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var La = {};
  function sb(e, t, n, i) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = i, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Dt(e, t, n, i) {
    return new sb(e, t, n, i);
  }
  function sr(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function sn(e, t) {
    var n = e.alternate;
    return n === null ? (n = Dt(
      e.tag,
      t,
      e.key,
      e.mode
    ), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 65011712, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n.refCleanup = e.refCleanup, n;
  }
  function ym(e, t) {
    e.flags &= 65011714;
    var n = e.alternate;
    return n === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = n.childLanes, e.lanes = n.lanes, e.child = n.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue, e.type = n.type, t = n.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), e;
  }
  function Il(e, t, n, i, s, u) {
    var m = 0;
    if (i = e, typeof e == "function") sr(e) && (m = 1);
    else if (typeof e == "string")
      m = fv(
        e,
        n,
        te.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case W:
          return e = Dt(31, n, t, s), e.elementType = W, e.lanes = u, e;
        case U:
          return sa(n.children, s, u, t);
        case M:
          m = 8, s |= 24;
          break;
        case B:
          return e = Dt(12, n, t, s | 2), e.elementType = B, e.lanes = u, e;
        case J:
          return e = Dt(13, n, t, s), e.elementType = J, e.lanes = u, e;
        case P:
          return e = Dt(19, n, t, s), e.elementType = P, e.lanes = u, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case q:
                m = 10;
                break e;
              case H:
                m = 9;
                break e;
              case F:
                m = 11;
                break e;
              case G:
                m = 14;
                break e;
              case X:
                m = 16, i = null;
                break e;
            }
          m = 29, n = Error(
            o(130, e === null ? "null" : typeof e, "")
          ), i = null;
      }
    return t = Dt(m, n, t, s), t.elementType = e, t.type = i, t.lanes = u, t;
  }
  function sa(e, t, n, i) {
    return e = Dt(7, e, i, t), e.lanes = n, e;
  }
  function or(e, t, n) {
    return e = Dt(6, e, null, t), e.lanes = n, e;
  }
  function Nm(e) {
    var t = Dt(18, null, null, 0);
    return t.stateNode = e, t;
  }
  function rr(e, t, n) {
    return t = Dt(
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
  var Cm = /* @__PURE__ */ new WeakMap();
  function Rt(e, t) {
    if (typeof e == "object" && e !== null) {
      var n = Cm.get(e);
      return n !== void 0 ? n : (t = {
        value: e,
        source: t,
        stack: Nf(t)
      }, Cm.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: Nf(t)
    };
  }
  var Ha = [], qa = 0, Jl = null, _i = 0, _t = [], Ot = 0, An = null, Zt = 1, Kt = "";
  function on(e, t) {
    Ha[qa++] = _i, Ha[qa++] = Jl, Jl = e, _i = t;
  }
  function Em(e, t, n) {
    _t[Ot++] = Zt, _t[Ot++] = Kt, _t[Ot++] = An, An = e;
    var i = Zt;
    e = Kt;
    var s = 32 - Ct(i) - 1;
    i &= ~(1 << s), n += 1;
    var u = 32 - Ct(t) + s;
    if (30 < u) {
      var m = s - s % 5;
      u = (i & (1 << m) - 1).toString(32), i >>= m, s -= m, Zt = 1 << 32 - Ct(t) + s | n << s | i, Kt = u + e;
    } else
      Zt = 1 << u | n << s | i, Kt = e;
  }
  function ur(e) {
    e.return !== null && (on(e, 1), Em(e, 1, 0));
  }
  function cr(e) {
    for (; e === Jl; )
      Jl = Ha[--qa], Ha[qa] = null, _i = Ha[--qa], Ha[qa] = null;
    for (; e === An; )
      An = _t[--Ot], _t[Ot] = null, Kt = _t[--Ot], _t[Ot] = null, Zt = _t[--Ot], _t[Ot] = null;
  }
  function Dm(e, t) {
    _t[Ot++] = Zt, _t[Ot++] = Kt, _t[Ot++] = An, Zt = t.id, Kt = t.overflow, An = e;
  }
  var tt = null, Re = null, be = !1, Tn = null, Bt = !1, fr = Error(o(519));
  function wn(e) {
    var t = Error(
      o(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Oi(Rt(t, e)), fr;
  }
  function Sm(e) {
    var t = e.stateNode, n = e.type, i = e.memoizedProps;
    switch (t[et] = e, t[mt] = i, n) {
      case "dialog":
        de("cancel", t), de("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        de("load", t);
        break;
      case "video":
      case "audio":
        for (n = 0; n < al.length; n++)
          de(al[n], t);
        break;
      case "source":
        de("error", t);
        break;
      case "img":
      case "image":
      case "link":
        de("error", t), de("load", t);
        break;
      case "details":
        de("toggle", t);
        break;
      case "input":
        de("invalid", t), Uf(
          t,
          i.value,
          i.defaultValue,
          i.checked,
          i.defaultChecked,
          i.type,
          i.name,
          !0
        );
        break;
      case "select":
        de("invalid", t);
        break;
      case "textarea":
        de("invalid", t), Hf(t, i.value, i.defaultValue, i.children);
    }
    n = i.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || t.textContent === "" + n || i.suppressHydrationWarning === !0 || Fp(t.textContent, n) ? (i.popover != null && (de("beforetoggle", t), de("toggle", t)), i.onScroll != null && de("scroll", t), i.onScrollEnd != null && de("scrollend", t), i.onClick != null && (t.onclick = an), t = !0) : t = !1, t || wn(e, !0);
  }
  function Am(e) {
    for (tt = e.return; tt; )
      switch (tt.tag) {
        case 5:
        case 31:
        case 13:
          Bt = !1;
          return;
        case 27:
        case 3:
          Bt = !0;
          return;
        default:
          tt = tt.return;
      }
  }
  function Fa(e) {
    if (e !== tt) return !1;
    if (!be) return Am(e), be = !0, !1;
    var t = e.tag, n;
    if ((n = t !== 3 && t !== 27) && ((n = t === 5) && (n = e.type, n = !(n !== "form" && n !== "button") || Vu(e.type, e.memoizedProps)), n = !n), n && Re && wn(e), Am(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(317));
      Re = Jp(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(317));
      Re = Jp(e);
    } else
      t === 27 ? (t = Re, Fn(e.type) ? (e = _u, _u = null, Re = e) : Re = t) : Re = tt ? Ut(e.stateNode.nextSibling) : null;
    return !0;
  }
  function oa() {
    Re = tt = null, be = !1;
  }
  function mr() {
    var e = Tn;
    return e !== null && (xt === null ? xt = e : xt.push.apply(
      xt,
      e
    ), Tn = null), e;
  }
  function Oi(e) {
    Tn === null ? Tn = [e] : Tn.push(e);
  }
  var dr = D(null), ra = null, rn = null;
  function Vn(e, t, n) {
    Z(dr, t._currentValue), t._currentValue = n;
  }
  function un(e) {
    e._currentValue = dr.current, L(dr);
  }
  function pr(e, t, n) {
    for (; e !== null; ) {
      var i = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, i !== null && (i.childLanes |= t)) : i !== null && (i.childLanes & t) !== t && (i.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function hr(e, t, n, i) {
    var s = e.child;
    for (s !== null && (s.return = e); s !== null; ) {
      var u = s.dependencies;
      if (u !== null) {
        var m = s.child;
        u = u.firstContext;
        e: for (; u !== null; ) {
          var x = u;
          u = s;
          for (var C = 0; C < t.length; C++)
            if (x.context === t[C]) {
              u.lanes |= n, x = u.alternate, x !== null && (x.lanes |= n), pr(
                u.return,
                n,
                e
              ), i || (m = null);
              break e;
            }
          u = x.next;
        }
      } else if (s.tag === 18) {
        if (m = s.return, m === null) throw Error(o(341));
        m.lanes |= n, u = m.alternate, u !== null && (u.lanes |= n), pr(m, n, e), m = null;
      } else m = s.child;
      if (m !== null) m.return = s;
      else
        for (m = s; m !== null; ) {
          if (m === e) {
            m = null;
            break;
          }
          if (s = m.sibling, s !== null) {
            s.return = m.return, m = s;
            break;
          }
          m = m.return;
        }
      s = m;
    }
  }
  function Ga(e, t, n, i) {
    e = null;
    for (var s = t, u = !1; s !== null; ) {
      if (!u) {
        if ((s.flags & 524288) !== 0) u = !0;
        else if ((s.flags & 262144) !== 0) break;
      }
      if (s.tag === 10) {
        var m = s.alternate;
        if (m === null) throw Error(o(387));
        if (m = m.memoizedProps, m !== null) {
          var x = s.type;
          Et(s.pendingProps.value, m.value) || (e !== null ? e.push(x) : e = [x]);
        }
      } else if (s === De.current) {
        if (m = s.alternate, m === null) throw Error(o(387));
        m.memoizedState.memoizedState !== s.memoizedState.memoizedState && (e !== null ? e.push(rl) : e = [rl]);
      }
      s = s.return;
    }
    e !== null && hr(
      t,
      e,
      n,
      i
    ), t.flags |= 262144;
  }
  function $l(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!Et(
        e.context._currentValue,
        e.memoizedValue
      ))
        return !0;
      e = e.next;
    }
    return !1;
  }
  function ua(e) {
    ra = e, rn = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function nt(e) {
    return Tm(ra, e);
  }
  function Wl(e, t) {
    return ra === null && ua(e), Tm(e, t);
  }
  function Tm(e, t) {
    var n = t._currentValue;
    if (t = { context: t, memoizedValue: n, next: null }, rn === null) {
      if (e === null) throw Error(o(308));
      rn = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else rn = rn.next = t;
    return n;
  }
  var ob = typeof AbortController < "u" ? AbortController : function() {
    var e = [], t = this.signal = {
      aborted: !1,
      addEventListener: function(n, i) {
        e.push(i);
      }
    };
    this.abort = function() {
      t.aborted = !0, e.forEach(function(n) {
        return n();
      });
    };
  }, rb = a.unstable_scheduleCallback, ub = a.unstable_NormalPriority, Ye = {
    $$typeof: q,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function gr() {
    return {
      controller: new ob(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Bi(e) {
    e.refCount--, e.refCount === 0 && rb(ub, function() {
      e.controller.abort();
    });
  }
  var ki = null, xr = 0, Ya = 0, Xa = null;
  function cb(e, t) {
    if (ki === null) {
      var n = ki = [];
      xr = 0, Ya = yu(), Xa = {
        status: "pending",
        value: void 0,
        then: function(i) {
          n.push(i);
        }
      };
    }
    return xr++, t.then(wm, wm), t;
  }
  function wm() {
    if (--xr === 0 && ki !== null) {
      Xa !== null && (Xa.status = "fulfilled");
      var e = ki;
      ki = null, Ya = 0, Xa = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function fb(e, t) {
    var n = [], i = {
      status: "pending",
      value: null,
      reason: null,
      then: function(s) {
        n.push(s);
      }
    };
    return e.then(
      function() {
        i.status = "fulfilled", i.value = t;
        for (var s = 0; s < n.length; s++) (0, n[s])(t);
      },
      function(s) {
        for (i.status = "rejected", i.reason = s, s = 0; s < n.length; s++)
          (0, n[s])(void 0);
      }
    ), i;
  }
  var Vm = R.S;
  R.S = function(e, t) {
    mp = yt(), typeof t == "object" && t !== null && typeof t.then == "function" && cb(e, t), Vm !== null && Vm(e, t);
  };
  var ca = D(null);
  function br() {
    var e = ca.current;
    return e !== null ? e : je.pooledCache;
  }
  function es(e, t) {
    t === null ? Z(ca, ca.current) : Z(ca, t.pool);
  }
  function jm() {
    var e = br();
    return e === null ? null : { parent: Ye._currentValue, pool: e };
  }
  var Pa = Error(o(460)), vr = Error(o(474)), ts = Error(o(542)), ns = { then: function() {
  } };
  function Mm(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function zm(e, t, n) {
    switch (n = e[n], n === void 0 ? e.push(t) : n !== t && (t.then(an, an), t = n), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, _m(e), e;
      default:
        if (typeof t.status == "string") t.then(an, an);
        else {
          if (e = je, e !== null && 100 < e.shellSuspendCounter)
            throw Error(o(482));
          e = t, e.status = "pending", e.then(
            function(i) {
              if (t.status === "pending") {
                var s = t;
                s.status = "fulfilled", s.value = i;
              }
            },
            function(i) {
              if (t.status === "pending") {
                var s = t;
                s.status = "rejected", s.reason = i;
              }
            }
          );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw e = t.reason, _m(e), e;
        }
        throw ma = t, Pa;
    }
  }
  function fa(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (n) {
      throw n !== null && typeof n == "object" && typeof n.then == "function" ? (ma = n, Pa) : n;
    }
  }
  var ma = null;
  function Rm() {
    if (ma === null) throw Error(o(459));
    var e = ma;
    return ma = null, e;
  }
  function _m(e) {
    if (e === Pa || e === ts)
      throw Error(o(483));
  }
  var Qa = null, Ui = 0;
  function as(e) {
    var t = Ui;
    return Ui += 1, Qa === null && (Qa = []), zm(Qa, e, t);
  }
  function Li(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function is(e, t) {
    throw t.$$typeof === N ? Error(o(525)) : (e = Object.prototype.toString.call(t), Error(
      o(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function Om(e) {
    function t(A, E) {
      if (e) {
        var w = A.deletions;
        w === null ? (A.deletions = [E], A.flags |= 16) : w.push(E);
      }
    }
    function n(A, E) {
      if (!e) return null;
      for (; E !== null; )
        t(A, E), E = E.sibling;
      return null;
    }
    function i(A) {
      for (var E = /* @__PURE__ */ new Map(); A !== null; )
        A.key !== null ? E.set(A.key, A) : E.set(A.index, A), A = A.sibling;
      return E;
    }
    function s(A, E) {
      return A = sn(A, E), A.index = 0, A.sibling = null, A;
    }
    function u(A, E, w) {
      return A.index = w, e ? (w = A.alternate, w !== null ? (w = w.index, w < E ? (A.flags |= 67108866, E) : w) : (A.flags |= 67108866, E)) : (A.flags |= 1048576, E);
    }
    function m(A) {
      return e && A.alternate === null && (A.flags |= 67108866), A;
    }
    function x(A, E, w, O) {
      return E === null || E.tag !== 6 ? (E = or(w, A.mode, O), E.return = A, E) : (E = s(E, w), E.return = A, E);
    }
    function C(A, E, w, O) {
      var ae = w.type;
      return ae === U ? _(
        A,
        E,
        w.props.children,
        O,
        w.key
      ) : E !== null && (E.elementType === ae || typeof ae == "object" && ae !== null && ae.$$typeof === X && fa(ae) === E.type) ? (E = s(E, w.props), Li(E, w), E.return = A, E) : (E = Il(
        w.type,
        w.key,
        w.props,
        null,
        A.mode,
        O
      ), Li(E, w), E.return = A, E);
    }
    function V(A, E, w, O) {
      return E === null || E.tag !== 4 || E.stateNode.containerInfo !== w.containerInfo || E.stateNode.implementation !== w.implementation ? (E = rr(w, A.mode, O), E.return = A, E) : (E = s(E, w.children || []), E.return = A, E);
    }
    function _(A, E, w, O, ae) {
      return E === null || E.tag !== 7 ? (E = sa(
        w,
        A.mode,
        O,
        ae
      ), E.return = A, E) : (E = s(E, w), E.return = A, E);
    }
    function k(A, E, w) {
      if (typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint")
        return E = or(
          "" + E,
          A.mode,
          w
        ), E.return = A, E;
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case S:
            return w = Il(
              E.type,
              E.key,
              E.props,
              null,
              A.mode,
              w
            ), Li(w, E), w.return = A, w;
          case T:
            return E = rr(
              E,
              A.mode,
              w
            ), E.return = A, E;
          case X:
            return E = fa(E), k(A, E, w);
        }
        if (Le(E) || ve(E))
          return E = sa(
            E,
            A.mode,
            w,
            null
          ), E.return = A, E;
        if (typeof E.then == "function")
          return k(A, as(E), w);
        if (E.$$typeof === q)
          return k(
            A,
            Wl(A, E),
            w
          );
        is(A, E);
      }
      return null;
    }
    function j(A, E, w, O) {
      var ae = E !== null ? E.key : null;
      if (typeof w == "string" && w !== "" || typeof w == "number" || typeof w == "bigint")
        return ae !== null ? null : x(A, E, "" + w, O);
      if (typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case S:
            return w.key === ae ? C(A, E, w, O) : null;
          case T:
            return w.key === ae ? V(A, E, w, O) : null;
          case X:
            return w = fa(w), j(A, E, w, O);
        }
        if (Le(w) || ve(w))
          return ae !== null ? null : _(A, E, w, O, null);
        if (typeof w.then == "function")
          return j(
            A,
            E,
            as(w),
            O
          );
        if (w.$$typeof === q)
          return j(
            A,
            E,
            Wl(A, w),
            O
          );
        is(A, w);
      }
      return null;
    }
    function z(A, E, w, O, ae) {
      if (typeof O == "string" && O !== "" || typeof O == "number" || typeof O == "bigint")
        return A = A.get(w) || null, x(E, A, "" + O, ae);
      if (typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case S:
            return A = A.get(
              O.key === null ? w : O.key
            ) || null, C(E, A, O, ae);
          case T:
            return A = A.get(
              O.key === null ? w : O.key
            ) || null, V(E, A, O, ae);
          case X:
            return O = fa(O), z(
              A,
              E,
              w,
              O,
              ae
            );
        }
        if (Le(O) || ve(O))
          return A = A.get(w) || null, _(E, A, O, ae, null);
        if (typeof O.then == "function")
          return z(
            A,
            E,
            w,
            as(O),
            ae
          );
        if (O.$$typeof === q)
          return z(
            A,
            E,
            w,
            Wl(E, O),
            ae
          );
        is(E, O);
      }
      return null;
    }
    function $(A, E, w, O) {
      for (var ae = null, ye = null, ne = E, ue = E = 0, he = null; ne !== null && ue < w.length; ue++) {
        ne.index > ue ? (he = ne, ne = null) : he = ne.sibling;
        var Ne = j(
          A,
          ne,
          w[ue],
          O
        );
        if (Ne === null) {
          ne === null && (ne = he);
          break;
        }
        e && ne && Ne.alternate === null && t(A, ne), E = u(Ne, E, ue), ye === null ? ae = Ne : ye.sibling = Ne, ye = Ne, ne = he;
      }
      if (ue === w.length)
        return n(A, ne), be && on(A, ue), ae;
      if (ne === null) {
        for (; ue < w.length; ue++)
          ne = k(A, w[ue], O), ne !== null && (E = u(
            ne,
            E,
            ue
          ), ye === null ? ae = ne : ye.sibling = ne, ye = ne);
        return be && on(A, ue), ae;
      }
      for (ne = i(ne); ue < w.length; ue++)
        he = z(
          ne,
          A,
          ue,
          w[ue],
          O
        ), he !== null && (e && he.alternate !== null && ne.delete(
          he.key === null ? ue : he.key
        ), E = u(
          he,
          E,
          ue
        ), ye === null ? ae = he : ye.sibling = he, ye = he);
      return e && ne.forEach(function(Qn) {
        return t(A, Qn);
      }), be && on(A, ue), ae;
    }
    function ie(A, E, w, O) {
      if (w == null) throw Error(o(151));
      for (var ae = null, ye = null, ne = E, ue = E = 0, he = null, Ne = w.next(); ne !== null && !Ne.done; ue++, Ne = w.next()) {
        ne.index > ue ? (he = ne, ne = null) : he = ne.sibling;
        var Qn = j(A, ne, Ne.value, O);
        if (Qn === null) {
          ne === null && (ne = he);
          break;
        }
        e && ne && Qn.alternate === null && t(A, ne), E = u(Qn, E, ue), ye === null ? ae = Qn : ye.sibling = Qn, ye = Qn, ne = he;
      }
      if (Ne.done)
        return n(A, ne), be && on(A, ue), ae;
      if (ne === null) {
        for (; !Ne.done; ue++, Ne = w.next())
          Ne = k(A, Ne.value, O), Ne !== null && (E = u(Ne, E, ue), ye === null ? ae = Ne : ye.sibling = Ne, ye = Ne);
        return be && on(A, ue), ae;
      }
      for (ne = i(ne); !Ne.done; ue++, Ne = w.next())
        Ne = z(ne, A, ue, Ne.value, O), Ne !== null && (e && Ne.alternate !== null && ne.delete(Ne.key === null ? ue : Ne.key), E = u(Ne, E, ue), ye === null ? ae = Ne : ye.sibling = Ne, ye = Ne);
      return e && ne.forEach(function(Cv) {
        return t(A, Cv);
      }), be && on(A, ue), ae;
    }
    function Ve(A, E, w, O) {
      if (typeof w == "object" && w !== null && w.type === U && w.key === null && (w = w.props.children), typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case S:
            e: {
              for (var ae = w.key; E !== null; ) {
                if (E.key === ae) {
                  if (ae = w.type, ae === U) {
                    if (E.tag === 7) {
                      n(
                        A,
                        E.sibling
                      ), O = s(
                        E,
                        w.props.children
                      ), O.return = A, A = O;
                      break e;
                    }
                  } else if (E.elementType === ae || typeof ae == "object" && ae !== null && ae.$$typeof === X && fa(ae) === E.type) {
                    n(
                      A,
                      E.sibling
                    ), O = s(E, w.props), Li(O, w), O.return = A, A = O;
                    break e;
                  }
                  n(A, E);
                  break;
                } else t(A, E);
                E = E.sibling;
              }
              w.type === U ? (O = sa(
                w.props.children,
                A.mode,
                O,
                w.key
              ), O.return = A, A = O) : (O = Il(
                w.type,
                w.key,
                w.props,
                null,
                A.mode,
                O
              ), Li(O, w), O.return = A, A = O);
            }
            return m(A);
          case T:
            e: {
              for (ae = w.key; E !== null; ) {
                if (E.key === ae)
                  if (E.tag === 4 && E.stateNode.containerInfo === w.containerInfo && E.stateNode.implementation === w.implementation) {
                    n(
                      A,
                      E.sibling
                    ), O = s(E, w.children || []), O.return = A, A = O;
                    break e;
                  } else {
                    n(A, E);
                    break;
                  }
                else t(A, E);
                E = E.sibling;
              }
              O = rr(w, A.mode, O), O.return = A, A = O;
            }
            return m(A);
          case X:
            return w = fa(w), Ve(
              A,
              E,
              w,
              O
            );
        }
        if (Le(w))
          return $(
            A,
            E,
            w,
            O
          );
        if (ve(w)) {
          if (ae = ve(w), typeof ae != "function") throw Error(o(150));
          return w = ae.call(w), ie(
            A,
            E,
            w,
            O
          );
        }
        if (typeof w.then == "function")
          return Ve(
            A,
            E,
            as(w),
            O
          );
        if (w.$$typeof === q)
          return Ve(
            A,
            E,
            Wl(A, w),
            O
          );
        is(A, w);
      }
      return typeof w == "string" && w !== "" || typeof w == "number" || typeof w == "bigint" ? (w = "" + w, E !== null && E.tag === 6 ? (n(A, E.sibling), O = s(E, w), O.return = A, A = O) : (n(A, E), O = or(w, A.mode, O), O.return = A, A = O), m(A)) : n(A, E);
    }
    return function(A, E, w, O) {
      try {
        Ui = 0;
        var ae = Ve(
          A,
          E,
          w,
          O
        );
        return Qa = null, ae;
      } catch (ne) {
        if (ne === Pa || ne === ts) throw ne;
        var ye = Dt(29, ne, null, A.mode);
        return ye.lanes = O, ye.return = A, ye;
      } finally {
      }
    };
  }
  var da = Om(!0), Bm = Om(!1), jn = !1;
  function yr(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Nr(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    });
  }
  function Mn(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function zn(e, t, n) {
    var i = e.updateQueue;
    if (i === null) return null;
    if (i = i.shared, (Ee & 2) !== 0) {
      var s = i.pending;
      return s === null ? t.next = t : (t.next = s.next, s.next = t), i.pending = t, t = Kl(e), vm(e, null, n), t;
    }
    return Zl(e, i, t, n), Kl(e);
  }
  function Hi(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194048) !== 0)) {
      var i = t.lanes;
      i &= e.pendingLanes, n |= i, t.lanes = n, Tf(e, n);
    }
  }
  function Cr(e, t) {
    var n = e.updateQueue, i = e.alternate;
    if (i !== null && (i = i.updateQueue, n === i)) {
      var s = null, u = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var m = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null
          };
          u === null ? s = u = m : u = u.next = m, n = n.next;
        } while (n !== null);
        u === null ? s = u = t : u = u.next = t;
      } else s = u = t;
      n = {
        baseState: i.baseState,
        firstBaseUpdate: s,
        lastBaseUpdate: u,
        shared: i.shared,
        callbacks: i.callbacks
      }, e.updateQueue = n;
      return;
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
  }
  var Er = !1;
  function qi() {
    if (Er) {
      var e = Xa;
      if (e !== null) throw e;
    }
  }
  function Fi(e, t, n, i) {
    Er = !1;
    var s = e.updateQueue;
    jn = !1;
    var u = s.firstBaseUpdate, m = s.lastBaseUpdate, x = s.shared.pending;
    if (x !== null) {
      s.shared.pending = null;
      var C = x, V = C.next;
      C.next = null, m === null ? u = V : m.next = V, m = C;
      var _ = e.alternate;
      _ !== null && (_ = _.updateQueue, x = _.lastBaseUpdate, x !== m && (x === null ? _.firstBaseUpdate = V : x.next = V, _.lastBaseUpdate = C));
    }
    if (u !== null) {
      var k = s.baseState;
      m = 0, _ = V = C = null, x = u;
      do {
        var j = x.lane & -536870913, z = j !== x.lane;
        if (z ? (pe & j) === j : (i & j) === j) {
          j !== 0 && j === Ya && (Er = !0), _ !== null && (_ = _.next = {
            lane: 0,
            tag: x.tag,
            payload: x.payload,
            callback: null,
            next: null
          });
          e: {
            var $ = e, ie = x;
            j = t;
            var Ve = n;
            switch (ie.tag) {
              case 1:
                if ($ = ie.payload, typeof $ == "function") {
                  k = $.call(Ve, k, j);
                  break e;
                }
                k = $;
                break e;
              case 3:
                $.flags = $.flags & -65537 | 128;
              case 0:
                if ($ = ie.payload, j = typeof $ == "function" ? $.call(Ve, k, j) : $, j == null) break e;
                k = y({}, k, j);
                break e;
              case 2:
                jn = !0;
            }
          }
          j = x.callback, j !== null && (e.flags |= 64, z && (e.flags |= 8192), z = s.callbacks, z === null ? s.callbacks = [j] : z.push(j));
        } else
          z = {
            lane: j,
            tag: x.tag,
            payload: x.payload,
            callback: x.callback,
            next: null
          }, _ === null ? (V = _ = z, C = k) : _ = _.next = z, m |= j;
        if (x = x.next, x === null) {
          if (x = s.shared.pending, x === null)
            break;
          z = x, x = z.next, z.next = null, s.lastBaseUpdate = z, s.shared.pending = null;
        }
      } while (!0);
      _ === null && (C = k), s.baseState = C, s.firstBaseUpdate = V, s.lastBaseUpdate = _, u === null && (s.shared.lanes = 0), kn |= m, e.lanes = m, e.memoizedState = k;
    }
  }
  function km(e, t) {
    if (typeof e != "function")
      throw Error(o(191, e));
    e.call(t);
  }
  function Um(e, t) {
    var n = e.callbacks;
    if (n !== null)
      for (e.callbacks = null, e = 0; e < n.length; e++)
        km(n[e], t);
  }
  var Za = D(null), ls = D(0);
  function Lm(e, t) {
    e = bn, Z(ls, e), Z(Za, t), bn = e | t.baseLanes;
  }
  function Dr() {
    Z(ls, bn), Z(Za, Za.current);
  }
  function Sr() {
    bn = ls.current, L(Za), L(ls);
  }
  var St = D(null), kt = null;
  function Rn(e) {
    var t = e.alternate;
    Z(qe, qe.current & 1), Z(St, e), kt === null && (t === null || Za.current !== null || t.memoizedState !== null) && (kt = e);
  }
  function Ar(e) {
    Z(qe, qe.current), Z(St, e), kt === null && (kt = e);
  }
  function Hm(e) {
    e.tag === 22 ? (Z(qe, qe.current), Z(St, e), kt === null && (kt = e)) : _n();
  }
  function _n() {
    Z(qe, qe.current), Z(St, St.current);
  }
  function At(e) {
    L(St), kt === e && (kt = null), L(qe);
  }
  var qe = D(0);
  function ss(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || zu(n) || Ru(n)))
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
  var cn = 0, oe = null, Te = null, Xe = null, os = !1, Ka = !1, pa = !1, rs = 0, Gi = 0, Ia = null, mb = 0;
  function ke() {
    throw Error(o(321));
  }
  function Tr(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!Et(e[n], t[n])) return !1;
    return !0;
  }
  function wr(e, t, n, i, s, u) {
    return cn = u, oe = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, R.H = e === null || e.memoizedState === null ? Ed : Gr, pa = !1, u = n(i, s), pa = !1, Ka && (u = Fm(
      t,
      n,
      i,
      s
    )), qm(e), u;
  }
  function qm(e) {
    R.H = Pi;
    var t = Te !== null && Te.next !== null;
    if (cn = 0, Xe = Te = oe = null, os = !1, Gi = 0, Ia = null, t) throw Error(o(300));
    e === null || Pe || (e = e.dependencies, e !== null && $l(e) && (Pe = !0));
  }
  function Fm(e, t, n, i) {
    oe = e;
    var s = 0;
    do {
      if (Ka && (Ia = null), Gi = 0, Ka = !1, 25 <= s) throw Error(o(301));
      if (s += 1, Xe = Te = null, e.updateQueue != null) {
        var u = e.updateQueue;
        u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0);
      }
      R.H = Dd, u = t(n, i);
    } while (Ka);
    return u;
  }
  function db() {
    var e = R.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? Yi(t) : t, e = e.useState()[0], (Te !== null ? Te.memoizedState : null) !== e && (oe.flags |= 1024), t;
  }
  function Vr() {
    var e = rs !== 0;
    return rs = 0, e;
  }
  function jr(e, t, n) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~n;
  }
  function Mr(e) {
    if (os) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      os = !1;
    }
    cn = 0, Xe = Te = oe = null, Ka = !1, Gi = rs = 0, Ia = null;
  }
  function ut() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Xe === null ? oe.memoizedState = Xe = e : Xe = Xe.next = e, Xe;
  }
  function Fe() {
    if (Te === null) {
      var e = oe.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Te.next;
    var t = Xe === null ? oe.memoizedState : Xe.next;
    if (t !== null)
      Xe = t, Te = e;
    else {
      if (e === null)
        throw oe.alternate === null ? Error(o(467)) : Error(o(310));
      Te = e, e = {
        memoizedState: Te.memoizedState,
        baseState: Te.baseState,
        baseQueue: Te.baseQueue,
        queue: Te.queue,
        next: null
      }, Xe === null ? oe.memoizedState = Xe = e : Xe = Xe.next = e;
    }
    return Xe;
  }
  function us() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Yi(e) {
    var t = Gi;
    return Gi += 1, Ia === null && (Ia = []), e = zm(Ia, e, t), t = oe, (Xe === null ? t.memoizedState : Xe.next) === null && (t = t.alternate, R.H = t === null || t.memoizedState === null ? Ed : Gr), e;
  }
  function cs(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Yi(e);
      if (e.$$typeof === q) return nt(e);
    }
    throw Error(o(438, String(e)));
  }
  function zr(e) {
    var t = null, n = oe.updateQueue;
    if (n !== null && (t = n.memoCache), t == null) {
      var i = oe.alternate;
      i !== null && (i = i.updateQueue, i !== null && (i = i.memoCache, i != null && (t = {
        data: i.data.map(function(s) {
          return s.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), n === null && (n = us(), oe.updateQueue = n), n.memoCache = t, n = t.data[t.index], n === void 0)
      for (n = t.data[t.index] = Array(e), i = 0; i < e; i++)
        n[i] = K;
    return t.index++, n;
  }
  function fn(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function fs(e) {
    var t = Fe();
    return Rr(t, Te, e);
  }
  function Rr(e, t, n) {
    var i = e.queue;
    if (i === null) throw Error(o(311));
    i.lastRenderedReducer = n;
    var s = e.baseQueue, u = i.pending;
    if (u !== null) {
      if (s !== null) {
        var m = s.next;
        s.next = u.next, u.next = m;
      }
      t.baseQueue = s = u, i.pending = null;
    }
    if (u = e.baseState, s === null) e.memoizedState = u;
    else {
      t = s.next;
      var x = m = null, C = null, V = t, _ = !1;
      do {
        var k = V.lane & -536870913;
        if (k !== V.lane ? (pe & k) === k : (cn & k) === k) {
          var j = V.revertLane;
          if (j === 0)
            C !== null && (C = C.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: V.action,
              hasEagerState: V.hasEagerState,
              eagerState: V.eagerState,
              next: null
            }), k === Ya && (_ = !0);
          else if ((cn & j) === j) {
            V = V.next, j === Ya && (_ = !0);
            continue;
          } else
            k = {
              lane: 0,
              revertLane: V.revertLane,
              gesture: null,
              action: V.action,
              hasEagerState: V.hasEagerState,
              eagerState: V.eagerState,
              next: null
            }, C === null ? (x = C = k, m = u) : C = C.next = k, oe.lanes |= j, kn |= j;
          k = V.action, pa && n(u, k), u = V.hasEagerState ? V.eagerState : n(u, k);
        } else
          j = {
            lane: k,
            revertLane: V.revertLane,
            gesture: V.gesture,
            action: V.action,
            hasEagerState: V.hasEagerState,
            eagerState: V.eagerState,
            next: null
          }, C === null ? (x = C = j, m = u) : C = C.next = j, oe.lanes |= k, kn |= k;
        V = V.next;
      } while (V !== null && V !== t);
      if (C === null ? m = u : C.next = x, !Et(u, e.memoizedState) && (Pe = !0, _ && (n = Xa, n !== null)))
        throw n;
      e.memoizedState = u, e.baseState = m, e.baseQueue = C, i.lastRenderedState = u;
    }
    return s === null && (i.lanes = 0), [e.memoizedState, i.dispatch];
  }
  function _r(e) {
    var t = Fe(), n = t.queue;
    if (n === null) throw Error(o(311));
    n.lastRenderedReducer = e;
    var i = n.dispatch, s = n.pending, u = t.memoizedState;
    if (s !== null) {
      n.pending = null;
      var m = s = s.next;
      do
        u = e(u, m.action), m = m.next;
      while (m !== s);
      Et(u, t.memoizedState) || (Pe = !0), t.memoizedState = u, t.baseQueue === null && (t.baseState = u), n.lastRenderedState = u;
    }
    return [u, i];
  }
  function Gm(e, t, n) {
    var i = oe, s = Fe(), u = be;
    if (u) {
      if (n === void 0) throw Error(o(407));
      n = n();
    } else n = t();
    var m = !Et(
      (Te || s).memoizedState,
      n
    );
    if (m && (s.memoizedState = n, Pe = !0), s = s.queue, kr(Pm.bind(null, i, s, e), [
      e
    ]), s.getSnapshot !== t || m || Xe !== null && Xe.memoizedState.tag & 1) {
      if (i.flags |= 2048, Ja(
        9,
        { destroy: void 0 },
        Xm.bind(
          null,
          i,
          s,
          n,
          t
        ),
        null
      ), je === null) throw Error(o(349));
      u || (cn & 127) !== 0 || Ym(i, t, n);
    }
    return n;
  }
  function Ym(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = oe.updateQueue, t === null ? (t = us(), oe.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function Xm(e, t, n, i) {
    t.value = n, t.getSnapshot = i, Qm(t) && Zm(e);
  }
  function Pm(e, t, n) {
    return n(function() {
      Qm(t) && Zm(e);
    });
  }
  function Qm(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Et(e, n);
    } catch {
      return !0;
    }
  }
  function Zm(e) {
    var t = la(e, 2);
    t !== null && bt(t, e, 2);
  }
  function Or(e) {
    var t = ut();
    if (typeof e == "function") {
      var n = e;
      if (e = n(), pa) {
        En(!0);
        try {
          n();
        } finally {
          En(!1);
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
  function Km(e, t, n, i) {
    return e.baseState = n, Rr(
      e,
      Te,
      typeof i == "function" ? i : fn
    );
  }
  function pb(e, t, n, i, s) {
    if (ps(e)) throw Error(o(485));
    if (e = t.action, e !== null) {
      var u = {
        payload: s,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(m) {
          u.listeners.push(m);
        }
      };
      R.T !== null ? n(!0) : u.isTransition = !1, i(u), n = t.pending, n === null ? (u.next = t.pending = u, Im(t, u)) : (u.next = n.next, t.pending = n.next = u);
    }
  }
  function Im(e, t) {
    var n = t.action, i = t.payload, s = e.state;
    if (t.isTransition) {
      var u = R.T, m = {};
      R.T = m;
      try {
        var x = n(s, i), C = R.S;
        C !== null && C(m, x), Jm(e, t, x);
      } catch (V) {
        Br(e, t, V);
      } finally {
        u !== null && m.types !== null && (u.types = m.types), R.T = u;
      }
    } else
      try {
        u = n(s, i), Jm(e, t, u);
      } catch (V) {
        Br(e, t, V);
      }
  }
  function Jm(e, t, n) {
    n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(
      function(i) {
        $m(e, t, i);
      },
      function(i) {
        return Br(e, t, i);
      }
    ) : $m(e, t, n);
  }
  function $m(e, t, n) {
    t.status = "fulfilled", t.value = n, Wm(t), e.state = n, t = e.pending, t !== null && (n = t.next, n === t ? e.pending = null : (n = n.next, t.next = n, Im(e, n)));
  }
  function Br(e, t, n) {
    var i = e.pending;
    if (e.pending = null, i !== null) {
      i = i.next;
      do
        t.status = "rejected", t.reason = n, Wm(t), t = t.next;
      while (t !== i);
    }
    e.action = null;
  }
  function Wm(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function ed(e, t) {
    return t;
  }
  function td(e, t) {
    if (be) {
      var n = je.formState;
      if (n !== null) {
        e: {
          var i = oe;
          if (be) {
            if (Re) {
              t: {
                for (var s = Re, u = Bt; s.nodeType !== 8; ) {
                  if (!u) {
                    s = null;
                    break t;
                  }
                  if (s = Ut(
                    s.nextSibling
                  ), s === null) {
                    s = null;
                    break t;
                  }
                }
                u = s.data, s = u === "F!" || u === "F" ? s : null;
              }
              if (s) {
                Re = Ut(
                  s.nextSibling
                ), i = s.data === "F!";
                break e;
              }
            }
            wn(i);
          }
          i = !1;
        }
        i && (t = n[0]);
      }
    }
    return n = ut(), n.memoizedState = n.baseState = t, i = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ed,
      lastRenderedState: t
    }, n.queue = i, n = yd.bind(
      null,
      oe,
      i
    ), i.dispatch = n, i = Or(!1), u = Fr.bind(
      null,
      oe,
      !1,
      i.queue
    ), i = ut(), s = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, i.queue = s, n = pb.bind(
      null,
      oe,
      s,
      u,
      n
    ), s.dispatch = n, i.memoizedState = e, [t, n, !1];
  }
  function nd(e) {
    var t = Fe();
    return ad(t, Te, e);
  }
  function ad(e, t, n) {
    if (t = Rr(
      e,
      t,
      ed
    )[0], e = fs(fn)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var i = Yi(t);
      } catch (m) {
        throw m === Pa ? ts : m;
      }
    else i = t;
    t = Fe();
    var s = t.queue, u = s.dispatch;
    return n !== t.memoizedState && (oe.flags |= 2048, Ja(
      9,
      { destroy: void 0 },
      hb.bind(null, s, n),
      null
    )), [i, u, e];
  }
  function hb(e, t) {
    e.action = t;
  }
  function id(e) {
    var t = Fe(), n = Te;
    if (n !== null)
      return ad(t, n, e);
    Fe(), t = t.memoizedState, n = Fe();
    var i = n.queue.dispatch;
    return n.memoizedState = e, [t, i, !1];
  }
  function Ja(e, t, n, i) {
    return e = { tag: e, create: n, deps: i, inst: t, next: null }, t = oe.updateQueue, t === null && (t = us(), oe.updateQueue = t), n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (i = n.next, n.next = e, e.next = i, t.lastEffect = e), e;
  }
  function ld() {
    return Fe().memoizedState;
  }
  function ms(e, t, n, i) {
    var s = ut();
    oe.flags |= e, s.memoizedState = Ja(
      1 | t,
      { destroy: void 0 },
      n,
      i === void 0 ? null : i
    );
  }
  function ds(e, t, n, i) {
    var s = Fe();
    i = i === void 0 ? null : i;
    var u = s.memoizedState.inst;
    Te !== null && i !== null && Tr(i, Te.memoizedState.deps) ? s.memoizedState = Ja(t, u, n, i) : (oe.flags |= e, s.memoizedState = Ja(
      1 | t,
      u,
      n,
      i
    ));
  }
  function sd(e, t) {
    ms(8390656, 8, e, t);
  }
  function kr(e, t) {
    ds(2048, 8, e, t);
  }
  function gb(e) {
    oe.flags |= 4;
    var t = oe.updateQueue;
    if (t === null)
      t = us(), oe.updateQueue = t, t.events = [e];
    else {
      var n = t.events;
      n === null ? t.events = [e] : n.push(e);
    }
  }
  function od(e) {
    var t = Fe().memoizedState;
    return gb({ ref: t, nextImpl: e }), function() {
      if ((Ee & 2) !== 0) throw Error(o(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function rd(e, t) {
    return ds(4, 2, e, t);
  }
  function ud(e, t) {
    return ds(4, 4, e, t);
  }
  function cd(e, t) {
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
  function fd(e, t, n) {
    n = n != null ? n.concat([e]) : null, ds(4, 4, cd.bind(null, t, e), n);
  }
  function Ur() {
  }
  function md(e, t) {
    var n = Fe();
    t = t === void 0 ? null : t;
    var i = n.memoizedState;
    return t !== null && Tr(t, i[1]) ? i[0] : (n.memoizedState = [e, t], e);
  }
  function dd(e, t) {
    var n = Fe();
    t = t === void 0 ? null : t;
    var i = n.memoizedState;
    if (t !== null && Tr(t, i[1]))
      return i[0];
    if (i = e(), pa) {
      En(!0);
      try {
        e();
      } finally {
        En(!1);
      }
    }
    return n.memoizedState = [i, t], i;
  }
  function Lr(e, t, n) {
    return n === void 0 || (cn & 1073741824) !== 0 && (pe & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = n, e = pp(), oe.lanes |= e, kn |= e, n);
  }
  function pd(e, t, n, i) {
    return Et(n, t) ? n : Za.current !== null ? (e = Lr(e, n, i), Et(e, t) || (Pe = !0), e) : (cn & 42) === 0 || (cn & 1073741824) !== 0 && (pe & 261930) === 0 ? (Pe = !0, e.memoizedState = n) : (e = pp(), oe.lanes |= e, kn |= e, t);
  }
  function hd(e, t, n, i, s) {
    var u = Q.p;
    Q.p = u !== 0 && 8 > u ? u : 8;
    var m = R.T, x = {};
    R.T = x, Fr(e, !1, t, n);
    try {
      var C = s(), V = R.S;
      if (V !== null && V(x, C), C !== null && typeof C == "object" && typeof C.then == "function") {
        var _ = fb(
          C,
          i
        );
        Xi(
          e,
          t,
          _,
          Vt(e)
        );
      } else
        Xi(
          e,
          t,
          i,
          Vt(e)
        );
    } catch (k) {
      Xi(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: k },
        Vt()
      );
    } finally {
      Q.p = u, m !== null && x.types !== null && (m.types = x.types), R.T = m;
    }
  }
  function xb() {
  }
  function Hr(e, t, n, i) {
    if (e.tag !== 5) throw Error(o(476));
    var s = gd(e).queue;
    hd(
      e,
      s,
      t,
      I,
      n === null ? xb : function() {
        return xd(e), n(i);
      }
    );
  }
  function gd(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: I,
      baseState: I,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: fn,
        lastRenderedState: I
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
  function xd(e) {
    var t = gd(e);
    t.next === null && (t = e.alternate.memoizedState), Xi(
      e,
      t.next.queue,
      {},
      Vt()
    );
  }
  function qr() {
    return nt(rl);
  }
  function bd() {
    return Fe().memoizedState;
  }
  function vd() {
    return Fe().memoizedState;
  }
  function bb(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var n = Vt();
          e = Mn(n);
          var i = zn(t, e, n);
          i !== null && (bt(i, t, n), Hi(i, t, n)), t = { cache: gr() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function vb(e, t, n) {
    var i = Vt();
    n = {
      lane: i,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, ps(e) ? Nd(t, n) : (n = lr(e, t, n, i), n !== null && (bt(n, e, i), Cd(n, t, i)));
  }
  function yd(e, t, n) {
    var i = Vt();
    Xi(e, t, n, i);
  }
  function Xi(e, t, n, i) {
    var s = {
      lane: i,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (ps(e)) Nd(t, s);
    else {
      var u = e.alternate;
      if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = t.lastRenderedReducer, u !== null))
        try {
          var m = t.lastRenderedState, x = u(m, n);
          if (s.hasEagerState = !0, s.eagerState = x, Et(x, m))
            return Zl(e, t, s, 0), je === null && Ql(), !1;
        } catch {
        } finally {
        }
      if (n = lr(e, t, s, i), n !== null)
        return bt(n, e, i), Cd(n, t, i), !0;
    }
    return !1;
  }
  function Fr(e, t, n, i) {
    if (i = {
      lane: 2,
      revertLane: yu(),
      gesture: null,
      action: i,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, ps(e)) {
      if (t) throw Error(o(479));
    } else
      t = lr(
        e,
        n,
        i,
        2
      ), t !== null && bt(t, e, 2);
  }
  function ps(e) {
    var t = e.alternate;
    return e === oe || t !== null && t === oe;
  }
  function Nd(e, t) {
    Ka = os = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function Cd(e, t, n) {
    if ((n & 4194048) !== 0) {
      var i = t.lanes;
      i &= e.pendingLanes, n |= i, t.lanes = n, Tf(e, n);
    }
  }
  var Pi = {
    readContext: nt,
    use: cs,
    useCallback: ke,
    useContext: ke,
    useEffect: ke,
    useImperativeHandle: ke,
    useLayoutEffect: ke,
    useInsertionEffect: ke,
    useMemo: ke,
    useReducer: ke,
    useRef: ke,
    useState: ke,
    useDebugValue: ke,
    useDeferredValue: ke,
    useTransition: ke,
    useSyncExternalStore: ke,
    useId: ke,
    useHostTransitionStatus: ke,
    useFormState: ke,
    useActionState: ke,
    useOptimistic: ke,
    useMemoCache: ke,
    useCacheRefresh: ke
  };
  Pi.useEffectEvent = ke;
  var Ed = {
    readContext: nt,
    use: cs,
    useCallback: function(e, t) {
      return ut().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: nt,
    useEffect: sd,
    useImperativeHandle: function(e, t, n) {
      n = n != null ? n.concat([e]) : null, ms(
        4194308,
        4,
        cd.bind(null, t, e),
        n
      );
    },
    useLayoutEffect: function(e, t) {
      return ms(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      ms(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var n = ut();
      t = t === void 0 ? null : t;
      var i = e();
      if (pa) {
        En(!0);
        try {
          e();
        } finally {
          En(!1);
        }
      }
      return n.memoizedState = [i, t], i;
    },
    useReducer: function(e, t, n) {
      var i = ut();
      if (n !== void 0) {
        var s = n(t);
        if (pa) {
          En(!0);
          try {
            n(t);
          } finally {
            En(!1);
          }
        }
      } else s = t;
      return i.memoizedState = i.baseState = s, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: s
      }, i.queue = e, e = e.dispatch = vb.bind(
        null,
        oe,
        e
      ), [i.memoizedState, e];
    },
    useRef: function(e) {
      var t = ut();
      return e = { current: e }, t.memoizedState = e;
    },
    useState: function(e) {
      e = Or(e);
      var t = e.queue, n = yd.bind(null, oe, t);
      return t.dispatch = n, [e.memoizedState, n];
    },
    useDebugValue: Ur,
    useDeferredValue: function(e, t) {
      var n = ut();
      return Lr(n, e, t);
    },
    useTransition: function() {
      var e = Or(!1);
      return e = hd.bind(
        null,
        oe,
        e.queue,
        !0,
        !1
      ), ut().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, n) {
      var i = oe, s = ut();
      if (be) {
        if (n === void 0)
          throw Error(o(407));
        n = n();
      } else {
        if (n = t(), je === null)
          throw Error(o(349));
        (pe & 127) !== 0 || Ym(i, t, n);
      }
      s.memoizedState = n;
      var u = { value: n, getSnapshot: t };
      return s.queue = u, sd(Pm.bind(null, i, u, e), [
        e
      ]), i.flags |= 2048, Ja(
        9,
        { destroy: void 0 },
        Xm.bind(
          null,
          i,
          u,
          n,
          t
        ),
        null
      ), n;
    },
    useId: function() {
      var e = ut(), t = je.identifierPrefix;
      if (be) {
        var n = Kt, i = Zt;
        n = (i & ~(1 << 32 - Ct(i) - 1)).toString(32) + n, t = "_" + t + "R_" + n, n = rs++, 0 < n && (t += "H" + n.toString(32)), t += "_";
      } else
        n = mb++, t = "_" + t + "r_" + n.toString(32) + "_";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: qr,
    useFormState: td,
    useActionState: td,
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
      return t.queue = n, t = Fr.bind(
        null,
        oe,
        !0,
        n
      ), n.dispatch = t, [e, t];
    },
    useMemoCache: zr,
    useCacheRefresh: function() {
      return ut().memoizedState = bb.bind(
        null,
        oe
      );
    },
    useEffectEvent: function(e) {
      var t = ut(), n = { impl: e };
      return t.memoizedState = n, function() {
        if ((Ee & 2) !== 0)
          throw Error(o(440));
        return n.impl.apply(void 0, arguments);
      };
    }
  }, Gr = {
    readContext: nt,
    use: cs,
    useCallback: md,
    useContext: nt,
    useEffect: kr,
    useImperativeHandle: fd,
    useInsertionEffect: rd,
    useLayoutEffect: ud,
    useMemo: dd,
    useReducer: fs,
    useRef: ld,
    useState: function() {
      return fs(fn);
    },
    useDebugValue: Ur,
    useDeferredValue: function(e, t) {
      var n = Fe();
      return pd(
        n,
        Te.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = fs(fn)[0], t = Fe().memoizedState;
      return [
        typeof e == "boolean" ? e : Yi(e),
        t
      ];
    },
    useSyncExternalStore: Gm,
    useId: bd,
    useHostTransitionStatus: qr,
    useFormState: nd,
    useActionState: nd,
    useOptimistic: function(e, t) {
      var n = Fe();
      return Km(n, Te, e, t);
    },
    useMemoCache: zr,
    useCacheRefresh: vd
  };
  Gr.useEffectEvent = od;
  var Dd = {
    readContext: nt,
    use: cs,
    useCallback: md,
    useContext: nt,
    useEffect: kr,
    useImperativeHandle: fd,
    useInsertionEffect: rd,
    useLayoutEffect: ud,
    useMemo: dd,
    useReducer: _r,
    useRef: ld,
    useState: function() {
      return _r(fn);
    },
    useDebugValue: Ur,
    useDeferredValue: function(e, t) {
      var n = Fe();
      return Te === null ? Lr(n, e, t) : pd(
        n,
        Te.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = _r(fn)[0], t = Fe().memoizedState;
      return [
        typeof e == "boolean" ? e : Yi(e),
        t
      ];
    },
    useSyncExternalStore: Gm,
    useId: bd,
    useHostTransitionStatus: qr,
    useFormState: id,
    useActionState: id,
    useOptimistic: function(e, t) {
      var n = Fe();
      return Te !== null ? Km(n, Te, e, t) : (n.baseState = e, [e, n.queue.dispatch]);
    },
    useMemoCache: zr,
    useCacheRefresh: vd
  };
  Dd.useEffectEvent = od;
  function Yr(e, t, n, i) {
    t = e.memoizedState, n = n(i, t), n = n == null ? t : y({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Xr = {
    enqueueSetState: function(e, t, n) {
      e = e._reactInternals;
      var i = Vt(), s = Mn(i);
      s.payload = t, n != null && (s.callback = n), t = zn(e, s, i), t !== null && (bt(t, e, i), Hi(t, e, i));
    },
    enqueueReplaceState: function(e, t, n) {
      e = e._reactInternals;
      var i = Vt(), s = Mn(i);
      s.tag = 1, s.payload = t, n != null && (s.callback = n), t = zn(e, s, i), t !== null && (bt(t, e, i), Hi(t, e, i));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var n = Vt(), i = Mn(n);
      i.tag = 2, t != null && (i.callback = t), t = zn(e, i, n), t !== null && (bt(t, e, n), Hi(t, e, n));
    }
  };
  function Sd(e, t, n, i, s, u, m) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(i, u, m) : t.prototype && t.prototype.isPureReactComponent ? !zi(n, i) || !zi(s, u) : !0;
  }
  function Ad(e, t, n, i) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, i), t.state !== e && Xr.enqueueReplaceState(t, t.state, null);
  }
  function ha(e, t) {
    var n = t;
    if ("ref" in t) {
      n = {};
      for (var i in t)
        i !== "ref" && (n[i] = t[i]);
    }
    if (e = e.defaultProps) {
      n === t && (n = y({}, n));
      for (var s in e)
        n[s] === void 0 && (n[s] = e[s]);
    }
    return n;
  }
  function Td(e) {
    Pl(e);
  }
  function wd(e) {
    console.error(e);
  }
  function Vd(e) {
    Pl(e);
  }
  function hs(e, t) {
    try {
      var n = e.onUncaughtError;
      n(t.value, { componentStack: t.stack });
    } catch (i) {
      setTimeout(function() {
        throw i;
      });
    }
  }
  function jd(e, t, n) {
    try {
      var i = e.onCaughtError;
      i(n.value, {
        componentStack: n.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      });
    } catch (s) {
      setTimeout(function() {
        throw s;
      });
    }
  }
  function Pr(e, t, n) {
    return n = Mn(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
      hs(e, t);
    }, n;
  }
  function Md(e) {
    return e = Mn(e), e.tag = 3, e;
  }
  function zd(e, t, n, i) {
    var s = n.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var u = i.value;
      e.payload = function() {
        return s(u);
      }, e.callback = function() {
        jd(t, n, i);
      };
    }
    var m = n.stateNode;
    m !== null && typeof m.componentDidCatch == "function" && (e.callback = function() {
      jd(t, n, i), typeof s != "function" && (Un === null ? Un = /* @__PURE__ */ new Set([this]) : Un.add(this));
      var x = i.stack;
      this.componentDidCatch(i.value, {
        componentStack: x !== null ? x : ""
      });
    });
  }
  function yb(e, t, n, i, s) {
    if (n.flags |= 32768, i !== null && typeof i == "object" && typeof i.then == "function") {
      if (t = n.alternate, t !== null && Ga(
        t,
        n,
        s,
        !0
      ), n = St.current, n !== null) {
        switch (n.tag) {
          case 31:
          case 13:
            return kt === null ? Ts() : n.alternate === null && Ue === 0 && (Ue = 3), n.flags &= -257, n.flags |= 65536, n.lanes = s, i === ns ? n.flags |= 16384 : (t = n.updateQueue, t === null ? n.updateQueue = /* @__PURE__ */ new Set([i]) : t.add(i), xu(e, i, s)), !1;
          case 22:
            return n.flags |= 65536, i === ns ? n.flags |= 16384 : (t = n.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([i])
            }, n.updateQueue = t) : (n = t.retryQueue, n === null ? t.retryQueue = /* @__PURE__ */ new Set([i]) : n.add(i)), xu(e, i, s)), !1;
        }
        throw Error(o(435, n.tag));
      }
      return xu(e, i, s), Ts(), !1;
    }
    if (be)
      return t = St.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = s, i !== fr && (e = Error(o(422), { cause: i }), Oi(Rt(e, n)))) : (i !== fr && (t = Error(o(423), {
        cause: i
      }), Oi(
        Rt(t, n)
      )), e = e.current.alternate, e.flags |= 65536, s &= -s, e.lanes |= s, i = Rt(i, n), s = Pr(
        e.stateNode,
        i,
        s
      ), Cr(e, s), Ue !== 4 && (Ue = 2)), !1;
    var u = Error(o(520), { cause: i });
    if (u = Rt(u, n), el === null ? el = [u] : el.push(u), Ue !== 4 && (Ue = 2), t === null) return !0;
    i = Rt(i, n), n = t;
    do {
      switch (n.tag) {
        case 3:
          return n.flags |= 65536, e = s & -s, n.lanes |= e, e = Pr(n.stateNode, i, e), Cr(n, e), !1;
        case 1:
          if (t = n.type, u = n.stateNode, (n.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (Un === null || !Un.has(u))))
            return n.flags |= 65536, s &= -s, n.lanes |= s, s = Md(s), zd(
              s,
              e,
              n,
              i
            ), Cr(n, s), !1;
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var Qr = Error(o(461)), Pe = !1;
  function at(e, t, n, i) {
    t.child = e === null ? Bm(t, null, n, i) : da(
      t,
      e.child,
      n,
      i
    );
  }
  function Rd(e, t, n, i, s) {
    n = n.render;
    var u = t.ref;
    if ("ref" in i) {
      var m = {};
      for (var x in i)
        x !== "ref" && (m[x] = i[x]);
    } else m = i;
    return ua(t), i = wr(
      e,
      t,
      n,
      m,
      u,
      s
    ), x = Vr(), e !== null && !Pe ? (jr(e, t, s), mn(e, t, s)) : (be && x && ur(t), t.flags |= 1, at(e, t, i, s), t.child);
  }
  function _d(e, t, n, i, s) {
    if (e === null) {
      var u = n.type;
      return typeof u == "function" && !sr(u) && u.defaultProps === void 0 && n.compare === null ? (t.tag = 15, t.type = u, Od(
        e,
        t,
        u,
        i,
        s
      )) : (e = Il(
        n.type,
        null,
        i,
        t,
        t.mode,
        s
      ), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (u = e.child, !tu(e, s)) {
      var m = u.memoizedProps;
      if (n = n.compare, n = n !== null ? n : zi, n(m, i) && e.ref === t.ref)
        return mn(e, t, s);
    }
    return t.flags |= 1, e = sn(u, i), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Od(e, t, n, i, s) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (zi(u, i) && e.ref === t.ref)
        if (Pe = !1, t.pendingProps = i = u, tu(e, s))
          (e.flags & 131072) !== 0 && (Pe = !0);
        else
          return t.lanes = e.lanes, mn(e, t, s);
    }
    return Zr(
      e,
      t,
      n,
      i,
      s
    );
  }
  function Bd(e, t, n, i) {
    var s = i.children, u = e !== null ? e.memoizedState : null;
    if (e === null && t.stateNode === null && (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), i.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (u = u !== null ? u.baseLanes | n : n, e !== null) {
          for (i = t.child = e.child, s = 0; i !== null; )
            s = s | i.lanes | i.childLanes, i = i.sibling;
          i = s & ~u;
        } else i = 0, t.child = null;
        return kd(
          e,
          t,
          u,
          n,
          i
        );
      }
      if ((n & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && es(
          t,
          u !== null ? u.cachePool : null
        ), u !== null ? Lm(t, u) : Dr(), Hm(t);
      else
        return i = t.lanes = 536870912, kd(
          e,
          t,
          u !== null ? u.baseLanes | n : n,
          n,
          i
        );
    } else
      u !== null ? (es(t, u.cachePool), Lm(t, u), _n(), t.memoizedState = null) : (e !== null && es(t, null), Dr(), _n());
    return at(e, t, s, n), t.child;
  }
  function Qi(e, t) {
    return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function kd(e, t, n, i, s) {
    var u = br();
    return u = u === null ? null : { parent: Ye._currentValue, pool: u }, t.memoizedState = {
      baseLanes: n,
      cachePool: u
    }, e !== null && es(t, null), Dr(), Hm(t), e !== null && Ga(e, t, i, !0), t.childLanes = s, null;
  }
  function gs(e, t) {
    return t = bs(
      { mode: t.mode, children: t.children },
      e.mode
    ), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function Ud(e, t, n) {
    return da(t, e.child, null, n), e = gs(t, t.pendingProps), e.flags |= 2, At(t), t.memoizedState = null, e;
  }
  function Nb(e, t, n) {
    var i = t.pendingProps, s = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (be) {
        if (i.mode === "hidden")
          return e = gs(t, i), t.lanes = 536870912, Qi(null, e);
        if (Ar(t), (e = Re) ? (e = Ip(
          e,
          Bt
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: An !== null ? { id: Zt, overflow: Kt } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = Nm(e), n.return = t, t.child = n, tt = t, Re = null)) : e = null, e === null) throw wn(t);
        return t.lanes = 536870912, null;
      }
      return gs(t, i);
    }
    var u = e.memoizedState;
    if (u !== null) {
      var m = u.dehydrated;
      if (Ar(t), s)
        if (t.flags & 256)
          t.flags &= -257, t = Ud(
            e,
            t,
            n
          );
        else if (t.memoizedState !== null)
          t.child = e.child, t.flags |= 128, t = null;
        else throw Error(o(558));
      else if (Pe || Ga(e, t, n, !1), s = (n & e.childLanes) !== 0, Pe || s) {
        if (i = je, i !== null && (m = wf(i, n), m !== 0 && m !== u.retryLane))
          throw u.retryLane = m, la(e, m), bt(i, e, m), Qr;
        Ts(), t = Ud(
          e,
          t,
          n
        );
      } else
        e = u.treeContext, Re = Ut(m.nextSibling), tt = t, be = !0, Tn = null, Bt = !1, e !== null && Dm(t, e), t = gs(t, i), t.flags |= 4096;
      return t;
    }
    return e = sn(e.child, {
      mode: i.mode,
      children: i.children
    }), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function xs(e, t) {
    var n = t.ref;
    if (n === null)
      e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object")
        throw Error(o(284));
      (e === null || e.ref !== n) && (t.flags |= 4194816);
    }
  }
  function Zr(e, t, n, i, s) {
    return ua(t), n = wr(
      e,
      t,
      n,
      i,
      void 0,
      s
    ), i = Vr(), e !== null && !Pe ? (jr(e, t, s), mn(e, t, s)) : (be && i && ur(t), t.flags |= 1, at(e, t, n, s), t.child);
  }
  function Ld(e, t, n, i, s, u) {
    return ua(t), t.updateQueue = null, n = Fm(
      t,
      i,
      n,
      s
    ), qm(e), i = Vr(), e !== null && !Pe ? (jr(e, t, u), mn(e, t, u)) : (be && i && ur(t), t.flags |= 1, at(e, t, n, u), t.child);
  }
  function Hd(e, t, n, i, s) {
    if (ua(t), t.stateNode === null) {
      var u = La, m = n.contextType;
      typeof m == "object" && m !== null && (u = nt(m)), u = new n(i, u), t.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = Xr, t.stateNode = u, u._reactInternals = t, u = t.stateNode, u.props = i, u.state = t.memoizedState, u.refs = {}, yr(t), m = n.contextType, u.context = typeof m == "object" && m !== null ? nt(m) : La, u.state = t.memoizedState, m = n.getDerivedStateFromProps, typeof m == "function" && (Yr(
        t,
        n,
        m,
        i
      ), u.state = t.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (m = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), m !== u.state && Xr.enqueueReplaceState(u, u.state, null), Fi(t, i, u, s), qi(), u.state = t.memoizedState), typeof u.componentDidMount == "function" && (t.flags |= 4194308), i = !0;
    } else if (e === null) {
      u = t.stateNode;
      var x = t.memoizedProps, C = ha(n, x);
      u.props = C;
      var V = u.context, _ = n.contextType;
      m = La, typeof _ == "object" && _ !== null && (m = nt(_));
      var k = n.getDerivedStateFromProps;
      _ = typeof k == "function" || typeof u.getSnapshotBeforeUpdate == "function", x = t.pendingProps !== x, _ || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (x || V !== m) && Ad(
        t,
        u,
        i,
        m
      ), jn = !1;
      var j = t.memoizedState;
      u.state = j, Fi(t, i, u, s), qi(), V = t.memoizedState, x || j !== V || jn ? (typeof k == "function" && (Yr(
        t,
        n,
        k,
        i
      ), V = t.memoizedState), (C = jn || Sd(
        t,
        n,
        C,
        i,
        j,
        V,
        m
      )) ? (_ || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = i, t.memoizedState = V), u.props = i, u.state = V, u.context = m, i = C) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), i = !1);
    } else {
      u = t.stateNode, Nr(e, t), m = t.memoizedProps, _ = ha(n, m), u.props = _, k = t.pendingProps, j = u.context, V = n.contextType, C = La, typeof V == "object" && V !== null && (C = nt(V)), x = n.getDerivedStateFromProps, (V = typeof x == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (m !== k || j !== C) && Ad(
        t,
        u,
        i,
        C
      ), jn = !1, j = t.memoizedState, u.state = j, Fi(t, i, u, s), qi();
      var z = t.memoizedState;
      m !== k || j !== z || jn || e !== null && e.dependencies !== null && $l(e.dependencies) ? (typeof x == "function" && (Yr(
        t,
        n,
        x,
        i
      ), z = t.memoizedState), (_ = jn || Sd(
        t,
        n,
        _,
        i,
        j,
        z,
        C
      ) || e !== null && e.dependencies !== null && $l(e.dependencies)) ? (V || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(i, z, C), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(
        i,
        z,
        C
      )), typeof u.componentDidUpdate == "function" && (t.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || m === e.memoizedProps && j === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || m === e.memoizedProps && j === e.memoizedState || (t.flags |= 1024), t.memoizedProps = i, t.memoizedState = z), u.props = i, u.state = z, u.context = C, i = _) : (typeof u.componentDidUpdate != "function" || m === e.memoizedProps && j === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || m === e.memoizedProps && j === e.memoizedState || (t.flags |= 1024), i = !1);
    }
    return u = i, xs(e, t), i = (t.flags & 128) !== 0, u || i ? (u = t.stateNode, n = i && typeof n.getDerivedStateFromError != "function" ? null : u.render(), t.flags |= 1, e !== null && i ? (t.child = da(
      t,
      e.child,
      null,
      s
    ), t.child = da(
      t,
      null,
      n,
      s
    )) : at(e, t, n, s), t.memoizedState = u.state, e = t.child) : e = mn(
      e,
      t,
      s
    ), e;
  }
  function qd(e, t, n, i) {
    return oa(), t.flags |= 256, at(e, t, n, i), t.child;
  }
  var Kr = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Ir(e) {
    return { baseLanes: e, cachePool: jm() };
  }
  function Jr(e, t, n) {
    return e = e !== null ? e.childLanes & ~n : 0, t && (e |= wt), e;
  }
  function Fd(e, t, n) {
    var i = t.pendingProps, s = !1, u = (t.flags & 128) !== 0, m;
    if ((m = u) || (m = e !== null && e.memoizedState === null ? !1 : (qe.current & 2) !== 0), m && (s = !0, t.flags &= -129), m = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (be) {
        if (s ? Rn(t) : _n(), (e = Re) ? (e = Ip(
          e,
          Bt
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: An !== null ? { id: Zt, overflow: Kt } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = Nm(e), n.return = t, t.child = n, tt = t, Re = null)) : e = null, e === null) throw wn(t);
        return Ru(e) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var x = i.children;
      return i = i.fallback, s ? (_n(), s = t.mode, x = bs(
        { mode: "hidden", children: x },
        s
      ), i = sa(
        i,
        s,
        n,
        null
      ), x.return = t, i.return = t, x.sibling = i, t.child = x, i = t.child, i.memoizedState = Ir(n), i.childLanes = Jr(
        e,
        m,
        n
      ), t.memoizedState = Kr, Qi(null, i)) : (Rn(t), $r(t, x));
    }
    var C = e.memoizedState;
    if (C !== null && (x = C.dehydrated, x !== null)) {
      if (u)
        t.flags & 256 ? (Rn(t), t.flags &= -257, t = Wr(
          e,
          t,
          n
        )) : t.memoizedState !== null ? (_n(), t.child = e.child, t.flags |= 128, t = null) : (_n(), x = i.fallback, s = t.mode, i = bs(
          { mode: "visible", children: i.children },
          s
        ), x = sa(
          x,
          s,
          n,
          null
        ), x.flags |= 2, i.return = t, x.return = t, i.sibling = x, t.child = i, da(
          t,
          e.child,
          null,
          n
        ), i = t.child, i.memoizedState = Ir(n), i.childLanes = Jr(
          e,
          m,
          n
        ), t.memoizedState = Kr, t = Qi(null, i));
      else if (Rn(t), Ru(x)) {
        if (m = x.nextSibling && x.nextSibling.dataset, m) var V = m.dgst;
        m = V, i = Error(o(419)), i.stack = "", i.digest = m, Oi({ value: i, source: null, stack: null }), t = Wr(
          e,
          t,
          n
        );
      } else if (Pe || Ga(e, t, n, !1), m = (n & e.childLanes) !== 0, Pe || m) {
        if (m = je, m !== null && (i = wf(m, n), i !== 0 && i !== C.retryLane))
          throw C.retryLane = i, la(e, i), bt(m, e, i), Qr;
        zu(x) || Ts(), t = Wr(
          e,
          t,
          n
        );
      } else
        zu(x) ? (t.flags |= 192, t.child = e.child, t = null) : (e = C.treeContext, Re = Ut(
          x.nextSibling
        ), tt = t, be = !0, Tn = null, Bt = !1, e !== null && Dm(t, e), t = $r(
          t,
          i.children
        ), t.flags |= 4096);
      return t;
    }
    return s ? (_n(), x = i.fallback, s = t.mode, C = e.child, V = C.sibling, i = sn(C, {
      mode: "hidden",
      children: i.children
    }), i.subtreeFlags = C.subtreeFlags & 65011712, V !== null ? x = sn(
      V,
      x
    ) : (x = sa(
      x,
      s,
      n,
      null
    ), x.flags |= 2), x.return = t, i.return = t, i.sibling = x, t.child = i, Qi(null, i), i = t.child, x = e.child.memoizedState, x === null ? x = Ir(n) : (s = x.cachePool, s !== null ? (C = Ye._currentValue, s = s.parent !== C ? { parent: C, pool: C } : s) : s = jm(), x = {
      baseLanes: x.baseLanes | n,
      cachePool: s
    }), i.memoizedState = x, i.childLanes = Jr(
      e,
      m,
      n
    ), t.memoizedState = Kr, Qi(e.child, i)) : (Rn(t), n = e.child, e = n.sibling, n = sn(n, {
      mode: "visible",
      children: i.children
    }), n.return = t, n.sibling = null, e !== null && (m = t.deletions, m === null ? (t.deletions = [e], t.flags |= 16) : m.push(e)), t.child = n, t.memoizedState = null, n);
  }
  function $r(e, t) {
    return t = bs(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function bs(e, t) {
    return e = Dt(22, e, null, t), e.lanes = 0, e;
  }
  function Wr(e, t, n) {
    return da(t, e.child, null, n), e = $r(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function Gd(e, t, n) {
    e.lanes |= t;
    var i = e.alternate;
    i !== null && (i.lanes |= t), pr(e.return, t, n);
  }
  function eu(e, t, n, i, s, u) {
    var m = e.memoizedState;
    m === null ? e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: i,
      tail: n,
      tailMode: s,
      treeForkCount: u
    } : (m.isBackwards = t, m.rendering = null, m.renderingStartTime = 0, m.last = i, m.tail = n, m.tailMode = s, m.treeForkCount = u);
  }
  function Yd(e, t, n) {
    var i = t.pendingProps, s = i.revealOrder, u = i.tail;
    i = i.children;
    var m = qe.current, x = (m & 2) !== 0;
    if (x ? (m = m & 1 | 2, t.flags |= 128) : m &= 1, Z(qe, m), at(e, t, i, n), i = be ? _i : 0, !x && e !== null && (e.flags & 128) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13)
          e.memoizedState !== null && Gd(e, n, t);
        else if (e.tag === 19)
          Gd(e, n, t);
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
    switch (s) {
      case "forwards":
        for (n = t.child, s = null; n !== null; )
          e = n.alternate, e !== null && ss(e) === null && (s = n), n = n.sibling;
        n = s, n === null ? (s = t.child, t.child = null) : (s = n.sibling, n.sibling = null), eu(
          t,
          !1,
          s,
          n,
          u,
          i
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (n = null, s = t.child, t.child = null; s !== null; ) {
          if (e = s.alternate, e !== null && ss(e) === null) {
            t.child = s;
            break;
          }
          e = s.sibling, s.sibling = n, n = s, s = e;
        }
        eu(
          t,
          !0,
          n,
          null,
          u,
          i
        );
        break;
      case "together":
        eu(
          t,
          !1,
          null,
          null,
          void 0,
          i
        );
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function mn(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), kn |= t.lanes, (n & t.childLanes) === 0)
      if (e !== null) {
        if (Ga(
          e,
          t,
          n,
          !1
        ), (n & t.childLanes) === 0)
          return null;
      } else return null;
    if (e !== null && t.child !== e.child)
      throw Error(o(153));
    if (t.child !== null) {
      for (e = t.child, n = sn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
        e = e.sibling, n = n.sibling = sn(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function tu(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && $l(e)));
  }
  function Cb(e, t, n) {
    switch (t.tag) {
      case 3:
        rt(t, t.stateNode.containerInfo), Vn(t, Ye, e.memoizedState.cache), oa();
        break;
      case 27:
      case 5:
        vi(t);
        break;
      case 4:
        rt(t, t.stateNode.containerInfo);
        break;
      case 10:
        Vn(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 31:
        if (t.memoizedState !== null)
          return t.flags |= 128, Ar(t), null;
        break;
      case 13:
        var i = t.memoizedState;
        if (i !== null)
          return i.dehydrated !== null ? (Rn(t), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? Fd(e, t, n) : (Rn(t), e = mn(
            e,
            t,
            n
          ), e !== null ? e.sibling : null);
        Rn(t);
        break;
      case 19:
        var s = (e.flags & 128) !== 0;
        if (i = (n & t.childLanes) !== 0, i || (Ga(
          e,
          t,
          n,
          !1
        ), i = (n & t.childLanes) !== 0), s) {
          if (i)
            return Yd(
              e,
              t,
              n
            );
          t.flags |= 128;
        }
        if (s = t.memoizedState, s !== null && (s.rendering = null, s.tail = null, s.lastEffect = null), Z(qe, qe.current), i) break;
        return null;
      case 22:
        return t.lanes = 0, Bd(
          e,
          t,
          n,
          t.pendingProps
        );
      case 24:
        Vn(t, Ye, e.memoizedState.cache);
    }
    return mn(e, t, n);
  }
  function Xd(e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        Pe = !0;
      else {
        if (!tu(e, n) && (t.flags & 128) === 0)
          return Pe = !1, Cb(
            e,
            t,
            n
          );
        Pe = (e.flags & 131072) !== 0;
      }
    else
      Pe = !1, be && (t.flags & 1048576) !== 0 && Em(t, _i, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var i = t.pendingProps;
          if (e = fa(t.elementType), t.type = e, typeof e == "function")
            sr(e) ? (i = ha(e, i), t.tag = 1, t = Hd(
              null,
              t,
              e,
              i,
              n
            )) : (t.tag = 0, t = Zr(
              null,
              t,
              e,
              i,
              n
            ));
          else {
            if (e != null) {
              var s = e.$$typeof;
              if (s === F) {
                t.tag = 11, t = Rd(
                  null,
                  t,
                  e,
                  i,
                  n
                );
                break e;
              } else if (s === G) {
                t.tag = 14, t = _d(
                  null,
                  t,
                  e,
                  i,
                  n
                );
                break e;
              }
            }
            throw t = Ge(e) || e, Error(o(306, t, ""));
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
        return i = t.type, s = ha(
          i,
          t.pendingProps
        ), Hd(
          e,
          t,
          i,
          s,
          n
        );
      case 3:
        e: {
          if (rt(
            t,
            t.stateNode.containerInfo
          ), e === null) throw Error(o(387));
          i = t.pendingProps;
          var u = t.memoizedState;
          s = u.element, Nr(e, t), Fi(t, i, null, n);
          var m = t.memoizedState;
          if (i = m.cache, Vn(t, Ye, i), i !== u.cache && hr(
            t,
            [Ye],
            n,
            !0
          ), qi(), i = m.element, u.isDehydrated)
            if (u = {
              element: i,
              isDehydrated: !1,
              cache: m.cache
            }, t.updateQueue.baseState = u, t.memoizedState = u, t.flags & 256) {
              t = qd(
                e,
                t,
                i,
                n
              );
              break e;
            } else if (i !== s) {
              s = Rt(
                Error(o(424)),
                t
              ), Oi(s), t = qd(
                e,
                t,
                i,
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
              for (Re = Ut(e.firstChild), tt = t, be = !0, Tn = null, Bt = !0, n = Bm(
                t,
                null,
                i,
                n
              ), t.child = n; n; )
                n.flags = n.flags & -3 | 4096, n = n.sibling;
            }
          else {
            if (oa(), i === s) {
              t = mn(
                e,
                t,
                n
              );
              break e;
            }
            at(e, t, i, n);
          }
          t = t.child;
        }
        return t;
      case 26:
        return xs(e, t), e === null ? (n = nh(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = n : be || (n = t.type, e = t.pendingProps, i = _s(
          fe.current
        ).createElement(n), i[et] = t, i[mt] = e, it(i, n, e), Je(i), t.stateNode = i) : t.memoizedState = nh(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return vi(t), e === null && be && (i = t.stateNode = Wp(
          t.type,
          t.pendingProps,
          fe.current
        ), tt = t, Bt = !0, s = Re, Fn(t.type) ? (_u = s, Re = Ut(i.firstChild)) : Re = s), at(
          e,
          t,
          t.pendingProps.children,
          n
        ), xs(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && be && ((s = i = Re) && (i = $b(
          i,
          t.type,
          t.pendingProps,
          Bt
        ), i !== null ? (t.stateNode = i, tt = t, Re = Ut(i.firstChild), Bt = !1, s = !0) : s = !1), s || wn(t)), vi(t), s = t.type, u = t.pendingProps, m = e !== null ? e.memoizedProps : null, i = u.children, Vu(s, u) ? i = null : m !== null && Vu(s, m) && (t.flags |= 32), t.memoizedState !== null && (s = wr(
          e,
          t,
          db,
          null,
          null,
          n
        ), rl._currentValue = s), xs(e, t), at(e, t, i, n), t.child;
      case 6:
        return e === null && be && ((e = n = Re) && (n = Wb(
          n,
          t.pendingProps,
          Bt
        ), n !== null ? (t.stateNode = n, tt = t, Re = null, e = !0) : e = !1), e || wn(t)), null;
      case 13:
        return Fd(e, t, n);
      case 4:
        return rt(
          t,
          t.stateNode.containerInfo
        ), i = t.pendingProps, e === null ? t.child = da(
          t,
          null,
          i,
          n
        ) : at(e, t, i, n), t.child;
      case 11:
        return Rd(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 7:
        return at(
          e,
          t,
          t.pendingProps,
          n
        ), t.child;
      case 8:
        return at(
          e,
          t,
          t.pendingProps.children,
          n
        ), t.child;
      case 12:
        return at(
          e,
          t,
          t.pendingProps.children,
          n
        ), t.child;
      case 10:
        return i = t.pendingProps, Vn(t, t.type, i.value), at(e, t, i.children, n), t.child;
      case 9:
        return s = t.type._context, i = t.pendingProps.children, ua(t), s = nt(s), i = i(s), t.flags |= 1, at(e, t, i, n), t.child;
      case 14:
        return _d(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 15:
        return Od(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 19:
        return Yd(e, t, n);
      case 31:
        return Nb(e, t, n);
      case 22:
        return Bd(
          e,
          t,
          n,
          t.pendingProps
        );
      case 24:
        return ua(t), i = nt(Ye), e === null ? (s = br(), s === null && (s = je, u = gr(), s.pooledCache = u, u.refCount++, u !== null && (s.pooledCacheLanes |= n), s = u), t.memoizedState = { parent: i, cache: s }, yr(t), Vn(t, Ye, s)) : ((e.lanes & n) !== 0 && (Nr(e, t), Fi(t, null, null, n), qi()), s = e.memoizedState, u = t.memoizedState, s.parent !== i ? (s = { parent: i, cache: i }, t.memoizedState = s, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = s), Vn(t, Ye, i)) : (i = u.cache, Vn(t, Ye, i), i !== s.cache && hr(
          t,
          [Ye],
          n,
          !0
        ))), at(
          e,
          t,
          t.pendingProps.children,
          n
        ), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(o(156, t.tag));
  }
  function dn(e) {
    e.flags |= 4;
  }
  function nu(e, t, n, i, s) {
    if ((t = (e.mode & 32) !== 0) && (t = !1), t) {
      if (e.flags |= 16777216, (s & 335544128) === s)
        if (e.stateNode.complete) e.flags |= 8192;
        else if (bp()) e.flags |= 8192;
        else
          throw ma = ns, vr;
    } else e.flags &= -16777217;
  }
  function Pd(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !oh(t))
      if (bp()) e.flags |= 8192;
      else
        throw ma = ns, vr;
  }
  function vs(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? Sf() : 536870912, e.lanes |= t, ti |= t);
  }
  function Zi(e, t) {
    if (!be)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null; )
            t.alternate !== null && (n = t), t = t.sibling;
          n === null ? e.tail = null : n.sibling = null;
          break;
        case "collapsed":
          n = e.tail;
          for (var i = null; n !== null; )
            n.alternate !== null && (i = n), n = n.sibling;
          i === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : i.sibling = null;
      }
  }
  function _e(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, i = 0;
    if (t)
      for (var s = e.child; s !== null; )
        n |= s.lanes | s.childLanes, i |= s.subtreeFlags & 65011712, i |= s.flags & 65011712, s.return = e, s = s.sibling;
    else
      for (s = e.child; s !== null; )
        n |= s.lanes | s.childLanes, i |= s.subtreeFlags, i |= s.flags, s.return = e, s = s.sibling;
    return e.subtreeFlags |= i, e.childLanes = n, t;
  }
  function Eb(e, t, n) {
    var i = t.pendingProps;
    switch (cr(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return _e(t), null;
      case 1:
        return _e(t), null;
      case 3:
        return n = t.stateNode, i = null, e !== null && (i = e.memoizedState.cache), t.memoizedState.cache !== i && (t.flags |= 2048), un(Ye), He(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (Fa(t) ? dn(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, mr())), _e(t), null;
      case 26:
        var s = t.type, u = t.memoizedState;
        return e === null ? (dn(t), u !== null ? (_e(t), Pd(t, u)) : (_e(t), nu(
          t,
          s,
          null,
          i,
          n
        ))) : u ? u !== e.memoizedState ? (dn(t), _e(t), Pd(t, u)) : (_e(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== i && dn(t), _e(t), nu(
          t,
          s,
          e,
          i,
          n
        )), null;
      case 27:
        if (jl(t), n = fe.current, s = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== i && dn(t);
        else {
          if (!i) {
            if (t.stateNode === null)
              throw Error(o(166));
            return _e(t), null;
          }
          e = te.current, Fa(t) ? Sm(t) : (e = Wp(s, i, n), t.stateNode = e, dn(t));
        }
        return _e(t), null;
      case 5:
        if (jl(t), s = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== i && dn(t);
        else {
          if (!i) {
            if (t.stateNode === null)
              throw Error(o(166));
            return _e(t), null;
          }
          if (u = te.current, Fa(t))
            Sm(t);
          else {
            var m = _s(
              fe.current
            );
            switch (u) {
              case 1:
                u = m.createElementNS(
                  "http://www.w3.org/2000/svg",
                  s
                );
                break;
              case 2:
                u = m.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  s
                );
                break;
              default:
                switch (s) {
                  case "svg":
                    u = m.createElementNS(
                      "http://www.w3.org/2000/svg",
                      s
                    );
                    break;
                  case "math":
                    u = m.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      s
                    );
                    break;
                  case "script":
                    u = m.createElement("div"), u.innerHTML = "<script><\/script>", u = u.removeChild(
                      u.firstChild
                    );
                    break;
                  case "select":
                    u = typeof i.is == "string" ? m.createElement("select", {
                      is: i.is
                    }) : m.createElement("select"), i.multiple ? u.multiple = !0 : i.size && (u.size = i.size);
                    break;
                  default:
                    u = typeof i.is == "string" ? m.createElement(s, { is: i.is }) : m.createElement(s);
                }
            }
            u[et] = t, u[mt] = i;
            e: for (m = t.child; m !== null; ) {
              if (m.tag === 5 || m.tag === 6)
                u.appendChild(m.stateNode);
              else if (m.tag !== 4 && m.tag !== 27 && m.child !== null) {
                m.child.return = m, m = m.child;
                continue;
              }
              if (m === t) break e;
              for (; m.sibling === null; ) {
                if (m.return === null || m.return === t)
                  break e;
                m = m.return;
              }
              m.sibling.return = m.return, m = m.sibling;
            }
            t.stateNode = u;
            e: switch (it(u, s, i), s) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                i = !!i.autoFocus;
                break e;
              case "img":
                i = !0;
                break e;
              default:
                i = !1;
            }
            i && dn(t);
          }
        }
        return _e(t), nu(
          t,
          t.type,
          e === null ? null : e.memoizedProps,
          t.pendingProps,
          n
        ), null;
      case 6:
        if (e && t.stateNode != null)
          e.memoizedProps !== i && dn(t);
        else {
          if (typeof i != "string" && t.stateNode === null)
            throw Error(o(166));
          if (e = fe.current, Fa(t)) {
            if (e = t.stateNode, n = t.memoizedProps, i = null, s = tt, s !== null)
              switch (s.tag) {
                case 27:
                case 5:
                  i = s.memoizedProps;
              }
            e[et] = t, e = !!(e.nodeValue === n || i !== null && i.suppressHydrationWarning === !0 || Fp(e.nodeValue, n)), e || wn(t, !0);
          } else
            e = _s(e).createTextNode(
              i
            ), e[et] = t, t.stateNode = e;
        }
        return _e(t), null;
      case 31:
        if (n = t.memoizedState, e === null || e.memoizedState !== null) {
          if (i = Fa(t), n !== null) {
            if (e === null) {
              if (!i) throw Error(o(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(557));
              e[et] = t;
            } else
              oa(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            _e(t), e = !1;
          } else
            n = mr(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), e = !0;
          if (!e)
            return t.flags & 256 ? (At(t), t) : (At(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(o(558));
        }
        return _e(t), null;
      case 13:
        if (i = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (s = Fa(t), i !== null && i.dehydrated !== null) {
            if (e === null) {
              if (!s) throw Error(o(318));
              if (s = t.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error(o(317));
              s[et] = t;
            } else
              oa(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            _e(t), s = !1;
          } else
            s = mr(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = s), s = !0;
          if (!s)
            return t.flags & 256 ? (At(t), t) : (At(t), null);
        }
        return At(t), (t.flags & 128) !== 0 ? (t.lanes = n, t) : (n = i !== null, e = e !== null && e.memoizedState !== null, n && (i = t.child, s = null, i.alternate !== null && i.alternate.memoizedState !== null && i.alternate.memoizedState.cachePool !== null && (s = i.alternate.memoizedState.cachePool.pool), u = null, i.memoizedState !== null && i.memoizedState.cachePool !== null && (u = i.memoizedState.cachePool.pool), u !== s && (i.flags |= 2048)), n !== e && n && (t.child.flags |= 8192), vs(t, t.updateQueue), _e(t), null);
      case 4:
        return He(), e === null && Du(t.stateNode.containerInfo), _e(t), null;
      case 10:
        return un(t.type), _e(t), null;
      case 19:
        if (L(qe), i = t.memoizedState, i === null) return _e(t), null;
        if (s = (t.flags & 128) !== 0, u = i.rendering, u === null)
          if (s) Zi(i, !1);
          else {
            if (Ue !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (u = ss(e), u !== null) {
                  for (t.flags |= 128, Zi(i, !1), e = u.updateQueue, t.updateQueue = e, vs(t, e), t.subtreeFlags = 0, e = n, n = t.child; n !== null; )
                    ym(n, e), n = n.sibling;
                  return Z(
                    qe,
                    qe.current & 1 | 2
                  ), be && on(t, i.treeForkCount), t.child;
                }
                e = e.sibling;
              }
            i.tail !== null && yt() > Ds && (t.flags |= 128, s = !0, Zi(i, !1), t.lanes = 4194304);
          }
        else {
          if (!s)
            if (e = ss(u), e !== null) {
              if (t.flags |= 128, s = !0, e = e.updateQueue, t.updateQueue = e, vs(t, e), Zi(i, !0), i.tail === null && i.tailMode === "hidden" && !u.alternate && !be)
                return _e(t), null;
            } else
              2 * yt() - i.renderingStartTime > Ds && n !== 536870912 && (t.flags |= 128, s = !0, Zi(i, !1), t.lanes = 4194304);
          i.isBackwards ? (u.sibling = t.child, t.child = u) : (e = i.last, e !== null ? e.sibling = u : t.child = u, i.last = u);
        }
        return i.tail !== null ? (e = i.tail, i.rendering = e, i.tail = e.sibling, i.renderingStartTime = yt(), e.sibling = null, n = qe.current, Z(
          qe,
          s ? n & 1 | 2 : n & 1
        ), be && on(t, i.treeForkCount), e) : (_e(t), null);
      case 22:
      case 23:
        return At(t), Sr(), i = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== i && (t.flags |= 8192) : i && (t.flags |= 8192), i ? (n & 536870912) !== 0 && (t.flags & 128) === 0 && (_e(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : _e(t), n = t.updateQueue, n !== null && vs(t, n.retryQueue), n = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), i = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (i = t.memoizedState.cachePool.pool), i !== n && (t.flags |= 2048), e !== null && L(ca), null;
      case 24:
        return n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), un(Ye), _e(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(o(156, t.tag));
  }
  function Db(e, t) {
    switch (cr(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return un(Ye), He(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return jl(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (At(t), t.alternate === null)
            throw Error(o(340));
          oa();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 13:
        if (At(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(o(340));
          oa();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return L(qe), null;
      case 4:
        return He(), null;
      case 10:
        return un(t.type), null;
      case 22:
      case 23:
        return At(t), Sr(), e !== null && L(ca), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return un(Ye), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Qd(e, t) {
    switch (cr(t), t.tag) {
      case 3:
        un(Ye), He();
        break;
      case 26:
      case 27:
      case 5:
        jl(t);
        break;
      case 4:
        He();
        break;
      case 31:
        t.memoizedState !== null && At(t);
        break;
      case 13:
        At(t);
        break;
      case 19:
        L(qe);
        break;
      case 10:
        un(t.type);
        break;
      case 22:
      case 23:
        At(t), Sr(), e !== null && L(ca);
        break;
      case 24:
        un(Ye);
    }
  }
  function Ki(e, t) {
    try {
      var n = t.updateQueue, i = n !== null ? n.lastEffect : null;
      if (i !== null) {
        var s = i.next;
        n = s;
        do {
          if ((n.tag & e) === e) {
            i = void 0;
            var u = n.create, m = n.inst;
            i = u(), m.destroy = i;
          }
          n = n.next;
        } while (n !== s);
      }
    } catch (x) {
      Ae(t, t.return, x);
    }
  }
  function On(e, t, n) {
    try {
      var i = t.updateQueue, s = i !== null ? i.lastEffect : null;
      if (s !== null) {
        var u = s.next;
        i = u;
        do {
          if ((i.tag & e) === e) {
            var m = i.inst, x = m.destroy;
            if (x !== void 0) {
              m.destroy = void 0, s = t;
              var C = n, V = x;
              try {
                V();
              } catch (_) {
                Ae(
                  s,
                  C,
                  _
                );
              }
            }
          }
          i = i.next;
        } while (i !== u);
      }
    } catch (_) {
      Ae(t, t.return, _);
    }
  }
  function Zd(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var n = e.stateNode;
      try {
        Um(t, n);
      } catch (i) {
        Ae(e, e.return, i);
      }
    }
  }
  function Kd(e, t, n) {
    n.props = ha(
      e.type,
      e.memoizedProps
    ), n.state = e.memoizedState;
    try {
      n.componentWillUnmount();
    } catch (i) {
      Ae(e, t, i);
    }
  }
  function Ii(e, t) {
    try {
      var n = e.ref;
      if (n !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var i = e.stateNode;
            break;
          case 30:
            i = e.stateNode;
            break;
          default:
            i = e.stateNode;
        }
        typeof n == "function" ? e.refCleanup = n(i) : n.current = i;
      }
    } catch (s) {
      Ae(e, t, s);
    }
  }
  function It(e, t) {
    var n = e.ref, i = e.refCleanup;
    if (n !== null)
      if (typeof i == "function")
        try {
          i();
        } catch (s) {
          Ae(e, t, s);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (s) {
          Ae(e, t, s);
        }
      else n.current = null;
  }
  function Id(e) {
    var t = e.type, n = e.memoizedProps, i = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && i.focus();
          break e;
        case "img":
          n.src ? i.src = n.src : n.srcSet && (i.srcset = n.srcSet);
      }
    } catch (s) {
      Ae(e, e.return, s);
    }
  }
  function au(e, t, n) {
    try {
      var i = e.stateNode;
      Pb(i, e.type, n, t), i[mt] = t;
    } catch (s) {
      Ae(e, e.return, s);
    }
  }
  function Jd(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Fn(e.type) || e.tag === 4;
  }
  function iu(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Jd(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && Fn(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function lu(e, t, n) {
    var i = e.tag;
    if (i === 5 || i === 6)
      e = e.stateNode, t ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(e, t) : (t = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, t.appendChild(e), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = an));
    else if (i !== 4 && (i === 27 && Fn(e.type) && (n = e.stateNode, t = null), e = e.child, e !== null))
      for (lu(e, t, n), e = e.sibling; e !== null; )
        lu(e, t, n), e = e.sibling;
  }
  function ys(e, t, n) {
    var i = e.tag;
    if (i === 5 || i === 6)
      e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (i !== 4 && (i === 27 && Fn(e.type) && (n = e.stateNode), e = e.child, e !== null))
      for (ys(e, t, n), e = e.sibling; e !== null; )
        ys(e, t, n), e = e.sibling;
  }
  function $d(e) {
    var t = e.stateNode, n = e.memoizedProps;
    try {
      for (var i = e.type, s = t.attributes; s.length; )
        t.removeAttributeNode(s[0]);
      it(t, i, n), t[et] = e, t[mt] = n;
    } catch (u) {
      Ae(e, e.return, u);
    }
  }
  var pn = !1, Qe = !1, su = !1, Wd = typeof WeakSet == "function" ? WeakSet : Set, $e = null;
  function Sb(e, t) {
    if (e = e.containerInfo, Tu = qs, e = fm(e), Wo(e)) {
      if ("selectionStart" in e)
        var n = {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      else
        e: {
          n = (n = e.ownerDocument) && n.defaultView || window;
          var i = n.getSelection && n.getSelection();
          if (i && i.rangeCount !== 0) {
            n = i.anchorNode;
            var s = i.anchorOffset, u = i.focusNode;
            i = i.focusOffset;
            try {
              n.nodeType, u.nodeType;
            } catch {
              n = null;
              break e;
            }
            var m = 0, x = -1, C = -1, V = 0, _ = 0, k = e, j = null;
            t: for (; ; ) {
              for (var z; k !== n || s !== 0 && k.nodeType !== 3 || (x = m + s), k !== u || i !== 0 && k.nodeType !== 3 || (C = m + i), k.nodeType === 3 && (m += k.nodeValue.length), (z = k.firstChild) !== null; )
                j = k, k = z;
              for (; ; ) {
                if (k === e) break t;
                if (j === n && ++V === s && (x = m), j === u && ++_ === i && (C = m), (z = k.nextSibling) !== null) break;
                k = j, j = k.parentNode;
              }
              k = z;
            }
            n = x === -1 || C === -1 ? null : { start: x, end: C };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (wu = { focusedElem: e, selectionRange: n }, qs = !1, $e = t; $e !== null; )
      if (t = $e, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
        e.return = t, $e = e;
      else
        for (; $e !== null; ) {
          switch (t = $e, u = t.alternate, e = t.flags, t.tag) {
            case 0:
              if ((e & 4) !== 0 && (e = t.updateQueue, e = e !== null ? e.events : null, e !== null))
                for (n = 0; n < e.length; n++)
                  s = e[n], s.ref.impl = s.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && u !== null) {
                e = void 0, n = t, s = u.memoizedProps, u = u.memoizedState, i = n.stateNode;
                try {
                  var $ = ha(
                    n.type,
                    s
                  );
                  e = i.getSnapshotBeforeUpdate(
                    $,
                    u
                  ), i.__reactInternalSnapshotBeforeUpdate = e;
                } catch (ie) {
                  Ae(
                    n,
                    n.return,
                    ie
                  );
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (e = t.stateNode.containerInfo, n = e.nodeType, n === 9)
                  Mu(e);
                else if (n === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Mu(e);
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
              if ((e & 1024) !== 0) throw Error(o(163));
          }
          if (e = t.sibling, e !== null) {
            e.return = t.return, $e = e;
            break;
          }
          $e = t.return;
        }
  }
  function ep(e, t, n) {
    var i = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        gn(e, n), i & 4 && Ki(5, n);
        break;
      case 1:
        if (gn(e, n), i & 4)
          if (e = n.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (m) {
              Ae(n, n.return, m);
            }
          else {
            var s = ha(
              n.type,
              t.memoizedProps
            );
            t = t.memoizedState;
            try {
              e.componentDidUpdate(
                s,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              );
            } catch (m) {
              Ae(
                n,
                n.return,
                m
              );
            }
          }
        i & 64 && Zd(n), i & 512 && Ii(n, n.return);
        break;
      case 3:
        if (gn(e, n), i & 64 && (e = n.updateQueue, e !== null)) {
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
            Um(e, t);
          } catch (m) {
            Ae(n, n.return, m);
          }
        }
        break;
      case 27:
        t === null && i & 4 && $d(n);
      case 26:
      case 5:
        gn(e, n), t === null && i & 4 && Id(n), i & 512 && Ii(n, n.return);
        break;
      case 12:
        gn(e, n);
        break;
      case 31:
        gn(e, n), i & 4 && ap(e, n);
        break;
      case 13:
        gn(e, n), i & 4 && ip(e, n), i & 64 && (e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null && (n = _b.bind(
          null,
          n
        ), ev(e, n))));
        break;
      case 22:
        if (i = n.memoizedState !== null || pn, !i) {
          t = t !== null && t.memoizedState !== null || Qe, s = pn;
          var u = Qe;
          pn = i, (Qe = t) && !u ? xn(
            e,
            n,
            (n.subtreeFlags & 8772) !== 0
          ) : gn(e, n), pn = s, Qe = u;
        }
        break;
      case 30:
        break;
      default:
        gn(e, n);
    }
  }
  function tp(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, tp(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Bo(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var Oe = null, pt = !1;
  function hn(e, t, n) {
    for (n = n.child; n !== null; )
      np(e, t, n), n = n.sibling;
  }
  function np(e, t, n) {
    if (Nt && typeof Nt.onCommitFiberUnmount == "function")
      try {
        Nt.onCommitFiberUnmount(yi, n);
      } catch {
      }
    switch (n.tag) {
      case 26:
        Qe || It(n, t), hn(
          e,
          t,
          n
        ), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode, n.parentNode.removeChild(n));
        break;
      case 27:
        Qe || It(n, t);
        var i = Oe, s = pt;
        Fn(n.type) && (Oe = n.stateNode, pt = !1), hn(
          e,
          t,
          n
        ), ll(n.stateNode), Oe = i, pt = s;
        break;
      case 5:
        Qe || It(n, t);
      case 6:
        if (i = Oe, s = pt, Oe = null, hn(
          e,
          t,
          n
        ), Oe = i, pt = s, Oe !== null)
          if (pt)
            try {
              (Oe.nodeType === 9 ? Oe.body : Oe.nodeName === "HTML" ? Oe.ownerDocument.body : Oe).removeChild(n.stateNode);
            } catch (u) {
              Ae(
                n,
                t,
                u
              );
            }
          else
            try {
              Oe.removeChild(n.stateNode);
            } catch (u) {
              Ae(
                n,
                t,
                u
              );
            }
        break;
      case 18:
        Oe !== null && (pt ? (e = Oe, Zp(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          n.stateNode
        ), ui(e)) : Zp(Oe, n.stateNode));
        break;
      case 4:
        i = Oe, s = pt, Oe = n.stateNode.containerInfo, pt = !0, hn(
          e,
          t,
          n
        ), Oe = i, pt = s;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        On(2, n, t), Qe || On(4, n, t), hn(
          e,
          t,
          n
        );
        break;
      case 1:
        Qe || (It(n, t), i = n.stateNode, typeof i.componentWillUnmount == "function" && Kd(
          n,
          t,
          i
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
        Qe = (i = Qe) || n.memoizedState !== null, hn(
          e,
          t,
          n
        ), Qe = i;
        break;
      default:
        hn(
          e,
          t,
          n
        );
    }
  }
  function ap(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        ui(e);
      } catch (n) {
        Ae(t, t.return, n);
      }
    }
  }
  function ip(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        ui(e);
      } catch (n) {
        Ae(t, t.return, n);
      }
  }
  function Ab(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new Wd()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new Wd()), t;
      default:
        throw Error(o(435, e.tag));
    }
  }
  function Ns(e, t) {
    var n = Ab(e);
    t.forEach(function(i) {
      if (!n.has(i)) {
        n.add(i);
        var s = Ob.bind(null, e, i);
        i.then(s, s);
      }
    });
  }
  function ht(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var i = 0; i < n.length; i++) {
        var s = n[i], u = e, m = t, x = m;
        e: for (; x !== null; ) {
          switch (x.tag) {
            case 27:
              if (Fn(x.type)) {
                Oe = x.stateNode, pt = !1;
                break e;
              }
              break;
            case 5:
              Oe = x.stateNode, pt = !1;
              break e;
            case 3:
            case 4:
              Oe = x.stateNode.containerInfo, pt = !0;
              break e;
          }
          x = x.return;
        }
        if (Oe === null) throw Error(o(160));
        np(u, m, s), Oe = null, pt = !1, u = s.alternate, u !== null && (u.return = null), s.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        lp(t, e), t = t.sibling;
  }
  var Gt = null;
  function lp(e, t) {
    var n = e.alternate, i = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        ht(t, e), gt(e), i & 4 && (On(3, e, e.return), Ki(3, e), On(5, e, e.return));
        break;
      case 1:
        ht(t, e), gt(e), i & 512 && (Qe || n === null || It(n, n.return)), i & 64 && pn && (e = e.updateQueue, e !== null && (i = e.callbacks, i !== null && (n = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = n === null ? i : n.concat(i))));
        break;
      case 26:
        var s = Gt;
        if (ht(t, e), gt(e), i & 512 && (Qe || n === null || It(n, n.return)), i & 4) {
          var u = n !== null ? n.memoizedState : null;
          if (i = e.memoizedState, n === null)
            if (i === null)
              if (e.stateNode === null) {
                e: {
                  i = e.type, n = e.memoizedProps, s = s.ownerDocument || s;
                  t: switch (i) {
                    case "title":
                      u = s.getElementsByTagName("title")[0], (!u || u[Ei] || u[et] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = s.createElement(i), s.head.insertBefore(
                        u,
                        s.querySelector("head > title")
                      )), it(u, i, n), u[et] = e, Je(u), i = u;
                      break e;
                    case "link":
                      var m = lh(
                        "link",
                        "href",
                        s
                      ).get(i + (n.href || ""));
                      if (m) {
                        for (var x = 0; x < m.length; x++)
                          if (u = m[x], u.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && u.getAttribute("rel") === (n.rel == null ? null : n.rel) && u.getAttribute("title") === (n.title == null ? null : n.title) && u.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
                            m.splice(x, 1);
                            break t;
                          }
                      }
                      u = s.createElement(i), it(u, i, n), s.head.appendChild(u);
                      break;
                    case "meta":
                      if (m = lh(
                        "meta",
                        "content",
                        s
                      ).get(i + (n.content || ""))) {
                        for (x = 0; x < m.length; x++)
                          if (u = m[x], u.getAttribute("content") === (n.content == null ? null : "" + n.content) && u.getAttribute("name") === (n.name == null ? null : n.name) && u.getAttribute("property") === (n.property == null ? null : n.property) && u.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && u.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
                            m.splice(x, 1);
                            break t;
                          }
                      }
                      u = s.createElement(i), it(u, i, n), s.head.appendChild(u);
                      break;
                    default:
                      throw Error(o(468, i));
                  }
                  u[et] = e, Je(u), i = u;
                }
                e.stateNode = i;
              } else
                sh(
                  s,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = ih(
                s,
                i,
                e.memoizedProps
              );
          else
            u !== i ? (u === null ? n.stateNode !== null && (n = n.stateNode, n.parentNode.removeChild(n)) : u.count--, i === null ? sh(
              s,
              e.type,
              e.stateNode
            ) : ih(
              s,
              i,
              e.memoizedProps
            )) : i === null && e.stateNode !== null && au(
              e,
              e.memoizedProps,
              n.memoizedProps
            );
        }
        break;
      case 27:
        ht(t, e), gt(e), i & 512 && (Qe || n === null || It(n, n.return)), n !== null && i & 4 && au(
          e,
          e.memoizedProps,
          n.memoizedProps
        );
        break;
      case 5:
        if (ht(t, e), gt(e), i & 512 && (Qe || n === null || It(n, n.return)), e.flags & 32) {
          s = e.stateNode;
          try {
            za(s, "");
          } catch ($) {
            Ae(e, e.return, $);
          }
        }
        i & 4 && e.stateNode != null && (s = e.memoizedProps, au(
          e,
          s,
          n !== null ? n.memoizedProps : s
        )), i & 1024 && (su = !0);
        break;
      case 6:
        if (ht(t, e), gt(e), i & 4) {
          if (e.stateNode === null)
            throw Error(o(162));
          i = e.memoizedProps, n = e.stateNode;
          try {
            n.nodeValue = i;
          } catch ($) {
            Ae(e, e.return, $);
          }
        }
        break;
      case 3:
        if (ks = null, s = Gt, Gt = Os(t.containerInfo), ht(t, e), Gt = s, gt(e), i & 4 && n !== null && n.memoizedState.isDehydrated)
          try {
            ui(t.containerInfo);
          } catch ($) {
            Ae(e, e.return, $);
          }
        su && (su = !1, sp(e));
        break;
      case 4:
        i = Gt, Gt = Os(
          e.stateNode.containerInfo
        ), ht(t, e), gt(e), Gt = i;
        break;
      case 12:
        ht(t, e), gt(e);
        break;
      case 31:
        ht(t, e), gt(e), i & 4 && (i = e.updateQueue, i !== null && (e.updateQueue = null, Ns(e, i)));
        break;
      case 13:
        ht(t, e), gt(e), e.child.flags & 8192 && e.memoizedState !== null != (n !== null && n.memoizedState !== null) && (Es = yt()), i & 4 && (i = e.updateQueue, i !== null && (e.updateQueue = null, Ns(e, i)));
        break;
      case 22:
        s = e.memoizedState !== null;
        var C = n !== null && n.memoizedState !== null, V = pn, _ = Qe;
        if (pn = V || s, Qe = _ || C, ht(t, e), Qe = _, pn = V, gt(e), i & 8192)
          e: for (t = e.stateNode, t._visibility = s ? t._visibility & -2 : t._visibility | 1, s && (n === null || C || pn || Qe || ga(e)), n = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (n === null) {
                C = n = t;
                try {
                  if (u = C.stateNode, s)
                    m = u.style, typeof m.setProperty == "function" ? m.setProperty("display", "none", "important") : m.display = "none";
                  else {
                    x = C.stateNode;
                    var k = C.memoizedProps.style, j = k != null && k.hasOwnProperty("display") ? k.display : null;
                    x.style.display = j == null || typeof j == "boolean" ? "" : ("" + j).trim();
                  }
                } catch ($) {
                  Ae(C, C.return, $);
                }
              }
            } else if (t.tag === 6) {
              if (n === null) {
                C = t;
                try {
                  C.stateNode.nodeValue = s ? "" : C.memoizedProps;
                } catch ($) {
                  Ae(C, C.return, $);
                }
              }
            } else if (t.tag === 18) {
              if (n === null) {
                C = t;
                try {
                  var z = C.stateNode;
                  s ? Kp(z, !0) : Kp(C.stateNode, !1);
                } catch ($) {
                  Ae(C, C.return, $);
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
        i & 4 && (i = e.updateQueue, i !== null && (n = i.retryQueue, n !== null && (i.retryQueue = null, Ns(e, n))));
        break;
      case 19:
        ht(t, e), gt(e), i & 4 && (i = e.updateQueue, i !== null && (e.updateQueue = null, Ns(e, i)));
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
        for (var n, i = e.return; i !== null; ) {
          if (Jd(i)) {
            n = i;
            break;
          }
          i = i.return;
        }
        if (n == null) throw Error(o(160));
        switch (n.tag) {
          case 27:
            var s = n.stateNode, u = iu(e);
            ys(e, u, s);
            break;
          case 5:
            var m = n.stateNode;
            n.flags & 32 && (za(m, ""), n.flags &= -33);
            var x = iu(e);
            ys(e, x, m);
            break;
          case 3:
          case 4:
            var C = n.stateNode.containerInfo, V = iu(e);
            lu(
              e,
              V,
              C
            );
            break;
          default:
            throw Error(o(161));
        }
      } catch (_) {
        Ae(e, e.return, _);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function sp(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        sp(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
      }
  }
  function gn(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        ep(e, t.alternate, t), t = t.sibling;
  }
  function ga(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          On(4, t, t.return), ga(t);
          break;
        case 1:
          It(t, t.return);
          var n = t.stateNode;
          typeof n.componentWillUnmount == "function" && Kd(
            t,
            t.return,
            n
          ), ga(t);
          break;
        case 27:
          ll(t.stateNode);
        case 26:
        case 5:
          It(t, t.return), ga(t);
          break;
        case 22:
          t.memoizedState === null && ga(t);
          break;
        case 30:
          ga(t);
          break;
        default:
          ga(t);
      }
      e = e.sibling;
    }
  }
  function xn(e, t, n) {
    for (n = n && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var i = t.alternate, s = e, u = t, m = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          xn(
            s,
            u,
            n
          ), Ki(4, u);
          break;
        case 1:
          if (xn(
            s,
            u,
            n
          ), i = u, s = i.stateNode, typeof s.componentDidMount == "function")
            try {
              s.componentDidMount();
            } catch (V) {
              Ae(i, i.return, V);
            }
          if (i = u, s = i.updateQueue, s !== null) {
            var x = i.stateNode;
            try {
              var C = s.shared.hiddenCallbacks;
              if (C !== null)
                for (s.shared.hiddenCallbacks = null, s = 0; s < C.length; s++)
                  km(C[s], x);
            } catch (V) {
              Ae(i, i.return, V);
            }
          }
          n && m & 64 && Zd(u), Ii(u, u.return);
          break;
        case 27:
          $d(u);
        case 26:
        case 5:
          xn(
            s,
            u,
            n
          ), n && i === null && m & 4 && Id(u), Ii(u, u.return);
          break;
        case 12:
          xn(
            s,
            u,
            n
          );
          break;
        case 31:
          xn(
            s,
            u,
            n
          ), n && m & 4 && ap(s, u);
          break;
        case 13:
          xn(
            s,
            u,
            n
          ), n && m & 4 && ip(s, u);
          break;
        case 22:
          u.memoizedState === null && xn(
            s,
            u,
            n
          ), Ii(u, u.return);
          break;
        case 30:
          break;
        default:
          xn(
            s,
            u,
            n
          );
      }
      t = t.sibling;
    }
  }
  function ou(e, t) {
    var n = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== n && (e != null && e.refCount++, n != null && Bi(n));
  }
  function ru(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Bi(e));
  }
  function Yt(e, t, n, i) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        op(
          e,
          t,
          n,
          i
        ), t = t.sibling;
  }
  function op(e, t, n, i) {
    var s = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Yt(
          e,
          t,
          n,
          i
        ), s & 2048 && Ki(9, t);
        break;
      case 1:
        Yt(
          e,
          t,
          n,
          i
        );
        break;
      case 3:
        Yt(
          e,
          t,
          n,
          i
        ), s & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Bi(e)));
        break;
      case 12:
        if (s & 2048) {
          Yt(
            e,
            t,
            n,
            i
          ), e = t.stateNode;
          try {
            var u = t.memoizedProps, m = u.id, x = u.onPostCommit;
            typeof x == "function" && x(
              m,
              t.alternate === null ? "mount" : "update",
              e.passiveEffectDuration,
              -0
            );
          } catch (C) {
            Ae(t, t.return, C);
          }
        } else
          Yt(
            e,
            t,
            n,
            i
          );
        break;
      case 31:
        Yt(
          e,
          t,
          n,
          i
        );
        break;
      case 13:
        Yt(
          e,
          t,
          n,
          i
        );
        break;
      case 23:
        break;
      case 22:
        u = t.stateNode, m = t.alternate, t.memoizedState !== null ? u._visibility & 2 ? Yt(
          e,
          t,
          n,
          i
        ) : Ji(e, t) : u._visibility & 2 ? Yt(
          e,
          t,
          n,
          i
        ) : (u._visibility |= 2, $a(
          e,
          t,
          n,
          i,
          (t.subtreeFlags & 10256) !== 0 || !1
        )), s & 2048 && ou(m, t);
        break;
      case 24:
        Yt(
          e,
          t,
          n,
          i
        ), s & 2048 && ru(t.alternate, t);
        break;
      default:
        Yt(
          e,
          t,
          n,
          i
        );
    }
  }
  function $a(e, t, n, i, s) {
    for (s = s && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var u = e, m = t, x = n, C = i, V = m.flags;
      switch (m.tag) {
        case 0:
        case 11:
        case 15:
          $a(
            u,
            m,
            x,
            C,
            s
          ), Ki(8, m);
          break;
        case 23:
          break;
        case 22:
          var _ = m.stateNode;
          m.memoizedState !== null ? _._visibility & 2 ? $a(
            u,
            m,
            x,
            C,
            s
          ) : Ji(
            u,
            m
          ) : (_._visibility |= 2, $a(
            u,
            m,
            x,
            C,
            s
          )), s && V & 2048 && ou(
            m.alternate,
            m
          );
          break;
        case 24:
          $a(
            u,
            m,
            x,
            C,
            s
          ), s && V & 2048 && ru(m.alternate, m);
          break;
        default:
          $a(
            u,
            m,
            x,
            C,
            s
          );
      }
      t = t.sibling;
    }
  }
  function Ji(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var n = e, i = t, s = i.flags;
        switch (i.tag) {
          case 22:
            Ji(n, i), s & 2048 && ou(
              i.alternate,
              i
            );
            break;
          case 24:
            Ji(n, i), s & 2048 && ru(i.alternate, i);
            break;
          default:
            Ji(n, i);
        }
        t = t.sibling;
      }
  }
  var $i = 8192;
  function Wa(e, t, n) {
    if (e.subtreeFlags & $i)
      for (e = e.child; e !== null; )
        rp(
          e,
          t,
          n
        ), e = e.sibling;
  }
  function rp(e, t, n) {
    switch (e.tag) {
      case 26:
        Wa(
          e,
          t,
          n
        ), e.flags & $i && e.memoizedState !== null && mv(
          n,
          Gt,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        Wa(
          e,
          t,
          n
        );
        break;
      case 3:
      case 4:
        var i = Gt;
        Gt = Os(e.stateNode.containerInfo), Wa(
          e,
          t,
          n
        ), Gt = i;
        break;
      case 22:
        e.memoizedState === null && (i = e.alternate, i !== null && i.memoizedState !== null ? (i = $i, $i = 16777216, Wa(
          e,
          t,
          n
        ), $i = i) : Wa(
          e,
          t,
          n
        ));
        break;
      default:
        Wa(
          e,
          t,
          n
        );
    }
  }
  function up(e) {
    var t = e.alternate;
    if (t !== null && (e = t.child, e !== null)) {
      t.child = null;
      do
        t = e.sibling, e.sibling = null, e = t;
      while (e !== null);
    }
  }
  function Wi(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          $e = i, fp(
            i,
            e
          );
        }
      up(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        cp(e), e = e.sibling;
  }
  function cp(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Wi(e), e.flags & 2048 && On(9, e, e.return);
        break;
      case 3:
        Wi(e);
        break;
      case 12:
        Wi(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, Cs(e)) : Wi(e);
        break;
      default:
        Wi(e);
    }
  }
  function Cs(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          $e = i, fp(
            i,
            e
          );
        }
      up(e);
    }
    for (e = e.child; e !== null; ) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          On(8, t, t.return), Cs(t);
          break;
        case 22:
          n = t.stateNode, n._visibility & 2 && (n._visibility &= -3, Cs(t));
          break;
        default:
          Cs(t);
      }
      e = e.sibling;
    }
  }
  function fp(e, t) {
    for (; $e !== null; ) {
      var n = $e;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          On(8, n, t);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var i = n.memoizedState.cachePool.pool;
            i != null && i.refCount++;
          }
          break;
        case 24:
          Bi(n.memoizedState.cache);
      }
      if (i = n.child, i !== null) i.return = n, $e = i;
      else
        e: for (n = e; $e !== null; ) {
          i = $e;
          var s = i.sibling, u = i.return;
          if (tp(i), i === n) {
            $e = null;
            break e;
          }
          if (s !== null) {
            s.return = u, $e = s;
            break e;
          }
          $e = u;
        }
    }
  }
  var Tb = {
    getCacheForType: function(e) {
      var t = nt(Ye), n = t.data.get(e);
      return n === void 0 && (n = e(), t.data.set(e, n)), n;
    },
    cacheSignal: function() {
      return nt(Ye).controller.signal;
    }
  }, wb = typeof WeakMap == "function" ? WeakMap : Map, Ee = 0, je = null, me = null, pe = 0, Se = 0, Tt = null, Bn = !1, ei = !1, uu = !1, bn = 0, Ue = 0, kn = 0, xa = 0, cu = 0, wt = 0, ti = 0, el = null, xt = null, fu = !1, Es = 0, mp = 0, Ds = 1 / 0, Ss = null, Un = null, Ke = 0, Ln = null, ni = null, vn = 0, mu = 0, du = null, dp = null, tl = 0, pu = null;
  function Vt() {
    return (Ee & 2) !== 0 && pe !== 0 ? pe & -pe : R.T !== null ? yu() : Vf();
  }
  function pp() {
    if (wt === 0)
      if ((pe & 536870912) === 0 || be) {
        var e = Rl;
        Rl <<= 1, (Rl & 3932160) === 0 && (Rl = 262144), wt = e;
      } else wt = 536870912;
    return e = St.current, e !== null && (e.flags |= 32), wt;
  }
  function bt(e, t, n) {
    (e === je && (Se === 2 || Se === 9) || e.cancelPendingCommit !== null) && (ai(e, 0), Hn(
      e,
      pe,
      wt,
      !1
    )), Ci(e, n), ((Ee & 2) === 0 || e !== je) && (e === je && ((Ee & 2) === 0 && (xa |= n), Ue === 4 && Hn(
      e,
      pe,
      wt,
      !1
    )), Jt(e));
  }
  function hp(e, t, n) {
    if ((Ee & 6) !== 0) throw Error(o(327));
    var i = !n && (t & 127) === 0 && (t & e.expiredLanes) === 0 || Ni(e, t), s = i ? Mb(e, t) : gu(e, t, !0), u = i;
    do {
      if (s === 0) {
        ei && !i && Hn(e, t, 0, !1);
        break;
      } else {
        if (n = e.current.alternate, u && !Vb(n)) {
          s = gu(e, t, !1), u = !1;
          continue;
        }
        if (s === 2) {
          if (u = t, e.errorRecoveryDisabledLanes & u)
            var m = 0;
          else
            m = e.pendingLanes & -536870913, m = m !== 0 ? m : m & 536870912 ? 536870912 : 0;
          if (m !== 0) {
            t = m;
            e: {
              var x = e;
              s = el;
              var C = x.current.memoizedState.isDehydrated;
              if (C && (ai(x, m).flags |= 256), m = gu(
                x,
                m,
                !1
              ), m !== 2) {
                if (uu && !C) {
                  x.errorRecoveryDisabledLanes |= u, xa |= u, s = 4;
                  break e;
                }
                u = xt, xt = s, u !== null && (xt === null ? xt = u : xt.push.apply(
                  xt,
                  u
                ));
              }
              s = m;
            }
            if (u = !1, s !== 2) continue;
          }
        }
        if (s === 1) {
          ai(e, 0), Hn(e, t, 0, !0);
          break;
        }
        e: {
          switch (i = e, u = s, u) {
            case 0:
            case 1:
              throw Error(o(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              Hn(
                i,
                t,
                wt,
                !Bn
              );
              break e;
            case 2:
              xt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(o(329));
          }
          if ((t & 62914560) === t && (s = Es + 300 - yt(), 10 < s)) {
            if (Hn(
              i,
              t,
              wt,
              !Bn
            ), Ol(i, 0, !0) !== 0) break e;
            vn = t, i.timeoutHandle = Pp(
              gp.bind(
                null,
                i,
                n,
                xt,
                Ss,
                fu,
                t,
                wt,
                xa,
                ti,
                Bn,
                u,
                "Throttled",
                -0,
                0
              ),
              s
            );
            break e;
          }
          gp(
            i,
            n,
            xt,
            Ss,
            fu,
            t,
            wt,
            xa,
            ti,
            Bn,
            u,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Jt(e);
  }
  function gp(e, t, n, i, s, u, m, x, C, V, _, k, j, z) {
    if (e.timeoutHandle = -1, k = t.subtreeFlags, k & 8192 || (k & 16785408) === 16785408) {
      k = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: an
      }, rp(
        t,
        u,
        k
      );
      var $ = (u & 62914560) === u ? Es - yt() : (u & 4194048) === u ? mp - yt() : 0;
      if ($ = dv(
        k,
        $
      ), $ !== null) {
        vn = u, e.cancelPendingCommit = $(
          Dp.bind(
            null,
            e,
            t,
            u,
            n,
            i,
            s,
            m,
            x,
            C,
            _,
            k,
            null,
            j,
            z
          )
        ), Hn(e, u, m, !V);
        return;
      }
    }
    Dp(
      e,
      t,
      u,
      n,
      i,
      s,
      m,
      x,
      C
    );
  }
  function Vb(e) {
    for (var t = e; ; ) {
      var n = t.tag;
      if ((n === 0 || n === 11 || n === 15) && t.flags & 16384 && (n = t.updateQueue, n !== null && (n = n.stores, n !== null)))
        for (var i = 0; i < n.length; i++) {
          var s = n[i], u = s.getSnapshot;
          s = s.value;
          try {
            if (!Et(u(), s)) return !1;
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
  function Hn(e, t, n, i) {
    t &= ~cu, t &= ~xa, e.suspendedLanes |= t, e.pingedLanes &= ~t, i && (e.warmLanes |= t), i = e.expirationTimes;
    for (var s = t; 0 < s; ) {
      var u = 31 - Ct(s), m = 1 << u;
      i[u] = -1, s &= ~m;
    }
    n !== 0 && Af(e, n, t);
  }
  function As() {
    return (Ee & 6) === 0 ? (nl(0), !1) : !0;
  }
  function hu() {
    if (me !== null) {
      if (Se === 0)
        var e = me.return;
      else
        e = me, rn = ra = null, Mr(e), Qa = null, Ui = 0, e = me;
      for (; e !== null; )
        Qd(e.alternate, e), e = e.return;
      me = null;
    }
  }
  function ai(e, t) {
    var n = e.timeoutHandle;
    n !== -1 && (e.timeoutHandle = -1, Kb(n)), n = e.cancelPendingCommit, n !== null && (e.cancelPendingCommit = null, n()), vn = 0, hu(), je = e, me = n = sn(e.current, null), pe = t, Se = 0, Tt = null, Bn = !1, ei = Ni(e, t), uu = !1, ti = wt = cu = xa = kn = Ue = 0, xt = el = null, fu = !1, (t & 8) !== 0 && (t |= t & 32);
    var i = e.entangledLanes;
    if (i !== 0)
      for (e = e.entanglements, i &= t; 0 < i; ) {
        var s = 31 - Ct(i), u = 1 << s;
        t |= e[s], i &= ~u;
      }
    return bn = t, Ql(), n;
  }
  function xp(e, t) {
    oe = null, R.H = Pi, t === Pa || t === ts ? (t = Rm(), Se = 3) : t === vr ? (t = Rm(), Se = 4) : Se = t === Qr ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, Tt = t, me === null && (Ue = 1, hs(
      e,
      Rt(t, e.current)
    ));
  }
  function bp() {
    var e = St.current;
    return e === null ? !0 : (pe & 4194048) === pe ? kt === null : (pe & 62914560) === pe || (pe & 536870912) !== 0 ? e === kt : !1;
  }
  function vp() {
    var e = R.H;
    return R.H = Pi, e === null ? Pi : e;
  }
  function yp() {
    var e = R.A;
    return R.A = Tb, e;
  }
  function Ts() {
    Ue = 4, Bn || (pe & 4194048) !== pe && St.current !== null || (ei = !0), (kn & 134217727) === 0 && (xa & 134217727) === 0 || je === null || Hn(
      je,
      pe,
      wt,
      !1
    );
  }
  function gu(e, t, n) {
    var i = Ee;
    Ee |= 2;
    var s = vp(), u = yp();
    (je !== e || pe !== t) && (Ss = null, ai(e, t)), t = !1;
    var m = Ue;
    e: do
      try {
        if (Se !== 0 && me !== null) {
          var x = me, C = Tt;
          switch (Se) {
            case 8:
              hu(), m = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              St.current === null && (t = !0);
              var V = Se;
              if (Se = 0, Tt = null, ii(e, x, C, V), n && ei) {
                m = 0;
                break e;
              }
              break;
            default:
              V = Se, Se = 0, Tt = null, ii(e, x, C, V);
          }
        }
        jb(), m = Ue;
        break;
      } catch (_) {
        xp(e, _);
      }
    while (!0);
    return t && e.shellSuspendCounter++, rn = ra = null, Ee = i, R.H = s, R.A = u, me === null && (je = null, pe = 0, Ql()), m;
  }
  function jb() {
    for (; me !== null; ) Np(me);
  }
  function Mb(e, t) {
    var n = Ee;
    Ee |= 2;
    var i = vp(), s = yp();
    je !== e || pe !== t ? (Ss = null, Ds = yt() + 500, ai(e, t)) : ei = Ni(
      e,
      t
    );
    e: do
      try {
        if (Se !== 0 && me !== null) {
          t = me;
          var u = Tt;
          t: switch (Se) {
            case 1:
              Se = 0, Tt = null, ii(e, t, u, 1);
              break;
            case 2:
            case 9:
              if (Mm(u)) {
                Se = 0, Tt = null, Cp(t);
                break;
              }
              t = function() {
                Se !== 2 && Se !== 9 || je !== e || (Se = 7), Jt(e);
              }, u.then(t, t);
              break e;
            case 3:
              Se = 7;
              break e;
            case 4:
              Se = 5;
              break e;
            case 7:
              Mm(u) ? (Se = 0, Tt = null, Cp(t)) : (Se = 0, Tt = null, ii(e, t, u, 7));
              break;
            case 5:
              var m = null;
              switch (me.tag) {
                case 26:
                  m = me.memoizedState;
                case 5:
                case 27:
                  var x = me;
                  if (m ? oh(m) : x.stateNode.complete) {
                    Se = 0, Tt = null;
                    var C = x.sibling;
                    if (C !== null) me = C;
                    else {
                      var V = x.return;
                      V !== null ? (me = V, ws(V)) : me = null;
                    }
                    break t;
                  }
              }
              Se = 0, Tt = null, ii(e, t, u, 5);
              break;
            case 6:
              Se = 0, Tt = null, ii(e, t, u, 6);
              break;
            case 8:
              hu(), Ue = 6;
              break e;
            default:
              throw Error(o(462));
          }
        }
        zb();
        break;
      } catch (_) {
        xp(e, _);
      }
    while (!0);
    return rn = ra = null, R.H = i, R.A = s, Ee = n, me !== null ? 0 : (je = null, pe = 0, Ql(), Ue);
  }
  function zb() {
    for (; me !== null && !t1(); )
      Np(me);
  }
  function Np(e) {
    var t = Xd(e.alternate, e, bn);
    e.memoizedProps = e.pendingProps, t === null ? ws(e) : me = t;
  }
  function Cp(e) {
    var t = e, n = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Ld(
          n,
          t,
          t.pendingProps,
          t.type,
          void 0,
          pe
        );
        break;
      case 11:
        t = Ld(
          n,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          pe
        );
        break;
      case 5:
        Mr(t);
      default:
        Qd(n, t), t = me = ym(t, bn), t = Xd(n, t, bn);
    }
    e.memoizedProps = e.pendingProps, t === null ? ws(e) : me = t;
  }
  function ii(e, t, n, i) {
    rn = ra = null, Mr(t), Qa = null, Ui = 0;
    var s = t.return;
    try {
      if (yb(
        e,
        s,
        t,
        n,
        pe
      )) {
        Ue = 1, hs(
          e,
          Rt(n, e.current)
        ), me = null;
        return;
      }
    } catch (u) {
      if (s !== null) throw me = s, u;
      Ue = 1, hs(
        e,
        Rt(n, e.current)
      ), me = null;
      return;
    }
    t.flags & 32768 ? (be || i === 1 ? e = !0 : ei || (pe & 536870912) !== 0 ? e = !1 : (Bn = e = !0, (i === 2 || i === 9 || i === 3 || i === 6) && (i = St.current, i !== null && i.tag === 13 && (i.flags |= 16384))), Ep(t, e)) : ws(t);
  }
  function ws(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        Ep(
          t,
          Bn
        );
        return;
      }
      e = t.return;
      var n = Eb(
        t.alternate,
        t,
        bn
      );
      if (n !== null) {
        me = n;
        return;
      }
      if (t = t.sibling, t !== null) {
        me = t;
        return;
      }
      me = t = e;
    } while (t !== null);
    Ue === 0 && (Ue = 5);
  }
  function Ep(e, t) {
    do {
      var n = Db(e.alternate, e);
      if (n !== null) {
        n.flags &= 32767, me = n;
        return;
      }
      if (n = e.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !t && (e = e.sibling, e !== null)) {
        me = e;
        return;
      }
      me = e = n;
    } while (e !== null);
    Ue = 6, me = null;
  }
  function Dp(e, t, n, i, s, u, m, x, C) {
    e.cancelPendingCommit = null;
    do
      Vs();
    while (Ke !== 0);
    if ((Ee & 6) !== 0) throw Error(o(327));
    if (t !== null) {
      if (t === e.current) throw Error(o(177));
      if (u = t.lanes | t.childLanes, u |= ir, f1(
        e,
        n,
        u,
        m,
        x,
        C
      ), e === je && (me = je = null, pe = 0), ni = t, Ln = e, vn = n, mu = u, du = s, dp = i, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, Bb(Ml, function() {
        return Vp(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), i = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || i) {
        i = R.T, R.T = null, s = Q.p, Q.p = 2, m = Ee, Ee |= 4;
        try {
          Sb(e, t, n);
        } finally {
          Ee = m, Q.p = s, R.T = i;
        }
      }
      Ke = 1, Sp(), Ap(), Tp();
    }
  }
  function Sp() {
    if (Ke === 1) {
      Ke = 0;
      var e = Ln, t = ni, n = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || n) {
        n = R.T, R.T = null;
        var i = Q.p;
        Q.p = 2;
        var s = Ee;
        Ee |= 4;
        try {
          lp(t, e);
          var u = wu, m = fm(e.containerInfo), x = u.focusedElem, C = u.selectionRange;
          if (m !== x && x && x.ownerDocument && cm(
            x.ownerDocument.documentElement,
            x
          )) {
            if (C !== null && Wo(x)) {
              var V = C.start, _ = C.end;
              if (_ === void 0 && (_ = V), "selectionStart" in x)
                x.selectionStart = V, x.selectionEnd = Math.min(
                  _,
                  x.value.length
                );
              else {
                var k = x.ownerDocument || document, j = k && k.defaultView || window;
                if (j.getSelection) {
                  var z = j.getSelection(), $ = x.textContent.length, ie = Math.min(C.start, $), Ve = C.end === void 0 ? ie : Math.min(C.end, $);
                  !z.extend && ie > Ve && (m = Ve, Ve = ie, ie = m);
                  var A = um(
                    x,
                    ie
                  ), E = um(
                    x,
                    Ve
                  );
                  if (A && E && (z.rangeCount !== 1 || z.anchorNode !== A.node || z.anchorOffset !== A.offset || z.focusNode !== E.node || z.focusOffset !== E.offset)) {
                    var w = k.createRange();
                    w.setStart(A.node, A.offset), z.removeAllRanges(), ie > Ve ? (z.addRange(w), z.extend(E.node, E.offset)) : (w.setEnd(E.node, E.offset), z.addRange(w));
                  }
                }
              }
            }
            for (k = [], z = x; z = z.parentNode; )
              z.nodeType === 1 && k.push({
                element: z,
                left: z.scrollLeft,
                top: z.scrollTop
              });
            for (typeof x.focus == "function" && x.focus(), x = 0; x < k.length; x++) {
              var O = k[x];
              O.element.scrollLeft = O.left, O.element.scrollTop = O.top;
            }
          }
          qs = !!Tu, wu = Tu = null;
        } finally {
          Ee = s, Q.p = i, R.T = n;
        }
      }
      e.current = t, Ke = 2;
    }
  }
  function Ap() {
    if (Ke === 2) {
      Ke = 0;
      var e = Ln, t = ni, n = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || n) {
        n = R.T, R.T = null;
        var i = Q.p;
        Q.p = 2;
        var s = Ee;
        Ee |= 4;
        try {
          ep(e, t.alternate, t);
        } finally {
          Ee = s, Q.p = i, R.T = n;
        }
      }
      Ke = 3;
    }
  }
  function Tp() {
    if (Ke === 4 || Ke === 3) {
      Ke = 0, n1();
      var e = Ln, t = ni, n = vn, i = dp;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Ke = 5 : (Ke = 0, ni = Ln = null, wp(e, e.pendingLanes));
      var s = e.pendingLanes;
      if (s === 0 && (Un = null), _o(n), t = t.stateNode, Nt && typeof Nt.onCommitFiberRoot == "function")
        try {
          Nt.onCommitFiberRoot(
            yi,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (i !== null) {
        t = R.T, s = Q.p, Q.p = 2, R.T = null;
        try {
          for (var u = e.onRecoverableError, m = 0; m < i.length; m++) {
            var x = i[m];
            u(x.value, {
              componentStack: x.stack
            });
          }
        } finally {
          R.T = t, Q.p = s;
        }
      }
      (vn & 3) !== 0 && Vs(), Jt(e), s = e.pendingLanes, (n & 261930) !== 0 && (s & 42) !== 0 ? e === pu ? tl++ : (tl = 0, pu = e) : tl = 0, nl(0);
    }
  }
  function wp(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, Bi(t)));
  }
  function Vs() {
    return Sp(), Ap(), Tp(), Vp();
  }
  function Vp() {
    if (Ke !== 5) return !1;
    var e = Ln, t = mu;
    mu = 0;
    var n = _o(vn), i = R.T, s = Q.p;
    try {
      Q.p = 32 > n ? 32 : n, R.T = null, n = du, du = null;
      var u = Ln, m = vn;
      if (Ke = 0, ni = Ln = null, vn = 0, (Ee & 6) !== 0) throw Error(o(331));
      var x = Ee;
      if (Ee |= 4, cp(u.current), op(
        u,
        u.current,
        m,
        n
      ), Ee = x, nl(0, !1), Nt && typeof Nt.onPostCommitFiberRoot == "function")
        try {
          Nt.onPostCommitFiberRoot(yi, u);
        } catch {
        }
      return !0;
    } finally {
      Q.p = s, R.T = i, wp(e, t);
    }
  }
  function jp(e, t, n) {
    t = Rt(n, t), t = Pr(e.stateNode, t, 2), e = zn(e, t, 2), e !== null && (Ci(e, 2), Jt(e));
  }
  function Ae(e, t, n) {
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
          var i = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof i.componentDidCatch == "function" && (Un === null || !Un.has(i))) {
            e = Rt(n, e), n = Md(2), i = zn(t, n, 2), i !== null && (zd(
              n,
              i,
              t,
              e
            ), Ci(i, 2), Jt(i));
            break;
          }
        }
        t = t.return;
      }
  }
  function xu(e, t, n) {
    var i = e.pingCache;
    if (i === null) {
      i = e.pingCache = new wb();
      var s = /* @__PURE__ */ new Set();
      i.set(t, s);
    } else
      s = i.get(t), s === void 0 && (s = /* @__PURE__ */ new Set(), i.set(t, s));
    s.has(n) || (uu = !0, s.add(n), e = Rb.bind(null, e, t, n), t.then(e, e));
  }
  function Rb(e, t, n) {
    var i = e.pingCache;
    i !== null && i.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, je === e && (pe & n) === n && (Ue === 4 || Ue === 3 && (pe & 62914560) === pe && 300 > yt() - Es ? (Ee & 2) === 0 && ai(e, 0) : cu |= n, ti === pe && (ti = 0)), Jt(e);
  }
  function Mp(e, t) {
    t === 0 && (t = Sf()), e = la(e, t), e !== null && (Ci(e, t), Jt(e));
  }
  function _b(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), Mp(e, n);
  }
  function Ob(e, t) {
    var n = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var i = e.stateNode, s = e.memoizedState;
        s !== null && (n = s.retryLane);
        break;
      case 19:
        i = e.stateNode;
        break;
      case 22:
        i = e.stateNode._retryCache;
        break;
      default:
        throw Error(o(314));
    }
    i !== null && i.delete(t), Mp(e, n);
  }
  function Bb(e, t) {
    return jo(e, t);
  }
  var js = null, li = null, bu = !1, Ms = !1, vu = !1, qn = 0;
  function Jt(e) {
    e !== li && e.next === null && (li === null ? js = li = e : li = li.next = e), Ms = !0, bu || (bu = !0, Ub());
  }
  function nl(e, t) {
    if (!vu && Ms) {
      vu = !0;
      do
        for (var n = !1, i = js; i !== null; ) {
          if (e !== 0) {
            var s = i.pendingLanes;
            if (s === 0) var u = 0;
            else {
              var m = i.suspendedLanes, x = i.pingedLanes;
              u = (1 << 31 - Ct(42 | e) + 1) - 1, u &= s & ~(m & ~x), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0;
            }
            u !== 0 && (n = !0, Op(i, u));
          } else
            u = pe, u = Ol(
              i,
              i === je ? u : 0,
              i.cancelPendingCommit !== null || i.timeoutHandle !== -1
            ), (u & 3) === 0 || Ni(i, u) || (n = !0, Op(i, u));
          i = i.next;
        }
      while (n);
      vu = !1;
    }
  }
  function kb() {
    zp();
  }
  function zp() {
    Ms = bu = !1;
    var e = 0;
    qn !== 0 && Zb() && (e = qn);
    for (var t = yt(), n = null, i = js; i !== null; ) {
      var s = i.next, u = Rp(i, t);
      u === 0 ? (i.next = null, n === null ? js = s : n.next = s, s === null && (li = n)) : (n = i, (e !== 0 || (u & 3) !== 0) && (Ms = !0)), i = s;
    }
    Ke !== 0 && Ke !== 5 || nl(e), qn !== 0 && (qn = 0);
  }
  function Rp(e, t) {
    for (var n = e.suspendedLanes, i = e.pingedLanes, s = e.expirationTimes, u = e.pendingLanes & -62914561; 0 < u; ) {
      var m = 31 - Ct(u), x = 1 << m, C = s[m];
      C === -1 ? ((x & n) === 0 || (x & i) !== 0) && (s[m] = c1(x, t)) : C <= t && (e.expiredLanes |= x), u &= ~x;
    }
    if (t = je, n = pe, n = Ol(
      e,
      e === t ? n : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), i = e.callbackNode, n === 0 || e === t && (Se === 2 || Se === 9) || e.cancelPendingCommit !== null)
      return i !== null && i !== null && Mo(i), e.callbackNode = null, e.callbackPriority = 0;
    if ((n & 3) === 0 || Ni(e, n)) {
      if (t = n & -n, t === e.callbackPriority) return t;
      switch (i !== null && Mo(i), _o(n)) {
        case 2:
        case 8:
          n = Ef;
          break;
        case 32:
          n = Ml;
          break;
        case 268435456:
          n = Df;
          break;
        default:
          n = Ml;
      }
      return i = _p.bind(null, e), n = jo(n, i), e.callbackPriority = t, e.callbackNode = n, t;
    }
    return i !== null && i !== null && Mo(i), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function _p(e, t) {
    if (Ke !== 0 && Ke !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var n = e.callbackNode;
    if (Vs() && e.callbackNode !== n)
      return null;
    var i = pe;
    return i = Ol(
      e,
      e === je ? i : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), i === 0 ? null : (hp(e, i, t), Rp(e, yt()), e.callbackNode != null && e.callbackNode === n ? _p.bind(null, e) : null);
  }
  function Op(e, t) {
    if (Vs()) return null;
    hp(e, t, !0);
  }
  function Ub() {
    Ib(function() {
      (Ee & 6) !== 0 ? jo(
        Cf,
        kb
      ) : zp();
    });
  }
  function yu() {
    if (qn === 0) {
      var e = Ya;
      e === 0 && (e = zl, zl <<= 1, (zl & 261888) === 0 && (zl = 256)), qn = e;
    }
    return qn;
  }
  function Bp(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : Ll("" + e);
  }
  function kp(e, t) {
    var n = t.ownerDocument.createElement("input");
    return n.name = t.name, n.value = t.value, e.id && n.setAttribute("form", e.id), t.parentNode.insertBefore(n, t), e = new FormData(e), n.parentNode.removeChild(n), e;
  }
  function Lb(e, t, n, i, s) {
    if (t === "submit" && n && n.stateNode === s) {
      var u = Bp(
        (s[mt] || null).action
      ), m = i.submitter;
      m && (t = (t = m[mt] || null) ? Bp(t.formAction) : m.getAttribute("formAction"), t !== null && (u = t, m = null));
      var x = new Gl(
        "action",
        "action",
        null,
        i,
        s
      );
      e.push({
        event: x,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (i.defaultPrevented) {
                if (qn !== 0) {
                  var C = m ? kp(s, m) : new FormData(s);
                  Hr(
                    n,
                    {
                      pending: !0,
                      data: C,
                      method: s.method,
                      action: u
                    },
                    null,
                    C
                  );
                }
              } else
                typeof u == "function" && (x.preventDefault(), C = m ? kp(s, m) : new FormData(s), Hr(
                  n,
                  {
                    pending: !0,
                    data: C,
                    method: s.method,
                    action: u
                  },
                  u,
                  C
                ));
            },
            currentTarget: s
          }
        ]
      });
    }
  }
  for (var Nu = 0; Nu < ar.length; Nu++) {
    var Cu = ar[Nu], Hb = Cu.toLowerCase(), qb = Cu[0].toUpperCase() + Cu.slice(1);
    Ft(
      Hb,
      "on" + qb
    );
  }
  Ft(pm, "onAnimationEnd"), Ft(hm, "onAnimationIteration"), Ft(gm, "onAnimationStart"), Ft("dblclick", "onDoubleClick"), Ft("focusin", "onFocus"), Ft("focusout", "onBlur"), Ft(ab, "onTransitionRun"), Ft(ib, "onTransitionStart"), Ft(lb, "onTransitionCancel"), Ft(xm, "onTransitionEnd"), ja("onMouseEnter", ["mouseout", "mouseover"]), ja("onMouseLeave", ["mouseout", "mouseover"]), ja("onPointerEnter", ["pointerout", "pointerover"]), ja("onPointerLeave", ["pointerout", "pointerover"]), ta(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), ta(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), ta("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), ta(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), ta(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), ta(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var al = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), Fb = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(al)
  );
  function Up(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var i = e[n], s = i.event;
      i = i.listeners;
      e: {
        var u = void 0;
        if (t)
          for (var m = i.length - 1; 0 <= m; m--) {
            var x = i[m], C = x.instance, V = x.currentTarget;
            if (x = x.listener, C !== u && s.isPropagationStopped())
              break e;
            u = x, s.currentTarget = V;
            try {
              u(s);
            } catch (_) {
              Pl(_);
            }
            s.currentTarget = null, u = C;
          }
        else
          for (m = 0; m < i.length; m++) {
            if (x = i[m], C = x.instance, V = x.currentTarget, x = x.listener, C !== u && s.isPropagationStopped())
              break e;
            u = x, s.currentTarget = V;
            try {
              u(s);
            } catch (_) {
              Pl(_);
            }
            s.currentTarget = null, u = C;
          }
      }
    }
  }
  function de(e, t) {
    var n = t[Oo];
    n === void 0 && (n = t[Oo] = /* @__PURE__ */ new Set());
    var i = e + "__bubble";
    n.has(i) || (Lp(t, e, 2, !1), n.add(i));
  }
  function Eu(e, t, n) {
    var i = 0;
    t && (i |= 4), Lp(
      n,
      e,
      i,
      t
    );
  }
  var zs = "_reactListening" + Math.random().toString(36).slice(2);
  function Du(e) {
    if (!e[zs]) {
      e[zs] = !0, zf.forEach(function(n) {
        n !== "selectionchange" && (Fb.has(n) || Eu(n, !1, e), Eu(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[zs] || (t[zs] = !0, Eu("selectionchange", !1, t));
    }
  }
  function Lp(e, t, n, i) {
    switch (ph(t)) {
      case 2:
        var s = gv;
        break;
      case 8:
        s = xv;
        break;
      default:
        s = Lu;
    }
    n = s.bind(
      null,
      t,
      n,
      e
    ), s = void 0, !Yo || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (s = !0), i ? s !== void 0 ? e.addEventListener(t, n, {
      capture: !0,
      passive: s
    }) : e.addEventListener(t, n, !0) : s !== void 0 ? e.addEventListener(t, n, {
      passive: s
    }) : e.addEventListener(t, n, !1);
  }
  function Su(e, t, n, i, s) {
    var u = i;
    if ((t & 1) === 0 && (t & 2) === 0 && i !== null)
      e: for (; ; ) {
        if (i === null) return;
        var m = i.tag;
        if (m === 3 || m === 4) {
          var x = i.stateNode.containerInfo;
          if (x === s) break;
          if (m === 4)
            for (m = i.return; m !== null; ) {
              var C = m.tag;
              if ((C === 3 || C === 4) && m.stateNode.containerInfo === s)
                return;
              m = m.return;
            }
          for (; x !== null; ) {
            if (m = Ta(x), m === null) return;
            if (C = m.tag, C === 5 || C === 6 || C === 26 || C === 27) {
              i = u = m;
              continue e;
            }
            x = x.parentNode;
          }
        }
        i = i.return;
      }
    Yf(function() {
      var V = u, _ = Fo(n), k = [];
      e: {
        var j = bm.get(e);
        if (j !== void 0) {
          var z = Gl, $ = e;
          switch (e) {
            case "keypress":
              if (ql(n) === 0) break e;
            case "keydown":
            case "keyup":
              z = O1;
              break;
            case "focusin":
              $ = "focus", z = Zo;
              break;
            case "focusout":
              $ = "blur", z = Zo;
              break;
            case "beforeblur":
            case "afterblur":
              z = Zo;
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
              z = Qf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              z = E1;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              z = U1;
              break;
            case pm:
            case hm:
            case gm:
              z = A1;
              break;
            case xm:
              z = H1;
              break;
            case "scroll":
            case "scrollend":
              z = N1;
              break;
            case "wheel":
              z = F1;
              break;
            case "copy":
            case "cut":
            case "paste":
              z = w1;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              z = Kf;
              break;
            case "toggle":
            case "beforetoggle":
              z = Y1;
          }
          var ie = (t & 4) !== 0, Ve = !ie && (e === "scroll" || e === "scrollend"), A = ie ? j !== null ? j + "Capture" : null : j;
          ie = [];
          for (var E = V, w; E !== null; ) {
            var O = E;
            if (w = O.stateNode, O = O.tag, O !== 5 && O !== 26 && O !== 27 || w === null || A === null || (O = Si(E, A), O != null && ie.push(
              il(E, O, w)
            )), Ve) break;
            E = E.return;
          }
          0 < ie.length && (j = new z(
            j,
            $,
            null,
            n,
            _
          ), k.push({ event: j, listeners: ie }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (j = e === "mouseover" || e === "pointerover", z = e === "mouseout" || e === "pointerout", j && n !== qo && ($ = n.relatedTarget || n.fromElement) && (Ta($) || $[Aa]))
            break e;
          if ((z || j) && (j = _.window === _ ? _ : (j = _.ownerDocument) ? j.defaultView || j.parentWindow : window, z ? ($ = n.relatedTarget || n.toElement, z = V, $ = $ ? Ta($) : null, $ !== null && (Ve = d($), ie = $.tag, $ !== Ve || ie !== 5 && ie !== 27 && ie !== 6) && ($ = null)) : (z = null, $ = V), z !== $)) {
            if (ie = Qf, O = "onMouseLeave", A = "onMouseEnter", E = "mouse", (e === "pointerout" || e === "pointerover") && (ie = Kf, O = "onPointerLeave", A = "onPointerEnter", E = "pointer"), Ve = z == null ? j : Di(z), w = $ == null ? j : Di($), j = new ie(
              O,
              E + "leave",
              z,
              n,
              _
            ), j.target = Ve, j.relatedTarget = w, O = null, Ta(_) === V && (ie = new ie(
              A,
              E + "enter",
              $,
              n,
              _
            ), ie.target = w, ie.relatedTarget = Ve, O = ie), Ve = O, z && $)
              t: {
                for (ie = Gb, A = z, E = $, w = 0, O = A; O; O = ie(O))
                  w++;
                O = 0;
                for (var ae = E; ae; ae = ie(ae))
                  O++;
                for (; 0 < w - O; )
                  A = ie(A), w--;
                for (; 0 < O - w; )
                  E = ie(E), O--;
                for (; w--; ) {
                  if (A === E || E !== null && A === E.alternate) {
                    ie = A;
                    break t;
                  }
                  A = ie(A), E = ie(E);
                }
                ie = null;
              }
            else ie = null;
            z !== null && Hp(
              k,
              j,
              z,
              ie,
              !1
            ), $ !== null && Ve !== null && Hp(
              k,
              Ve,
              $,
              ie,
              !0
            );
          }
        }
        e: {
          if (j = V ? Di(V) : window, z = j.nodeName && j.nodeName.toLowerCase(), z === "select" || z === "input" && j.type === "file")
            var ye = am;
          else if (tm(j))
            if (im)
              ye = eb;
            else {
              ye = $1;
              var ne = J1;
            }
          else
            z = j.nodeName, !z || z.toLowerCase() !== "input" || j.type !== "checkbox" && j.type !== "radio" ? V && Ho(V.elementType) && (ye = am) : ye = W1;
          if (ye && (ye = ye(e, V))) {
            nm(
              k,
              ye,
              n,
              _
            );
            break e;
          }
          ne && ne(e, j, V), e === "focusout" && V && j.type === "number" && V.memoizedProps.value != null && Lo(j, "number", j.value);
        }
        switch (ne = V ? Di(V) : window, e) {
          case "focusin":
            (tm(ne) || ne.contentEditable === "true") && (Ba = ne, er = V, Ri = null);
            break;
          case "focusout":
            Ri = er = Ba = null;
            break;
          case "mousedown":
            tr = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            tr = !1, mm(k, n, _);
            break;
          case "selectionchange":
            if (nb) break;
          case "keydown":
          case "keyup":
            mm(k, n, _);
        }
        var ue;
        if (Io)
          e: {
            switch (e) {
              case "compositionstart":
                var he = "onCompositionStart";
                break e;
              case "compositionend":
                he = "onCompositionEnd";
                break e;
              case "compositionupdate":
                he = "onCompositionUpdate";
                break e;
            }
            he = void 0;
          }
        else
          Oa ? Wf(e, n) && (he = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (he = "onCompositionStart");
        he && (If && n.locale !== "ko" && (Oa || he !== "onCompositionStart" ? he === "onCompositionEnd" && Oa && (ue = Xf()) : (Sn = _, Xo = "value" in Sn ? Sn.value : Sn.textContent, Oa = !0)), ne = Rs(V, he), 0 < ne.length && (he = new Zf(
          he,
          e,
          null,
          n,
          _
        ), k.push({ event: he, listeners: ne }), ue ? he.data = ue : (ue = em(n), ue !== null && (he.data = ue)))), (ue = P1 ? Q1(e, n) : Z1(e, n)) && (he = Rs(V, "onBeforeInput"), 0 < he.length && (ne = new Zf(
          "onBeforeInput",
          "beforeinput",
          null,
          n,
          _
        ), k.push({
          event: ne,
          listeners: he
        }), ne.data = ue)), Lb(
          k,
          e,
          V,
          n,
          _
        );
      }
      Up(k, t);
    });
  }
  function il(e, t, n) {
    return {
      instance: e,
      listener: t,
      currentTarget: n
    };
  }
  function Rs(e, t) {
    for (var n = t + "Capture", i = []; e !== null; ) {
      var s = e, u = s.stateNode;
      if (s = s.tag, s !== 5 && s !== 26 && s !== 27 || u === null || (s = Si(e, n), s != null && i.unshift(
        il(e, s, u)
      ), s = Si(e, t), s != null && i.push(
        il(e, s, u)
      )), e.tag === 3) return i;
      e = e.return;
    }
    return [];
  }
  function Gb(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function Hp(e, t, n, i, s) {
    for (var u = t._reactName, m = []; n !== null && n !== i; ) {
      var x = n, C = x.alternate, V = x.stateNode;
      if (x = x.tag, C !== null && C === i) break;
      x !== 5 && x !== 26 && x !== 27 || V === null || (C = V, s ? (V = Si(n, u), V != null && m.unshift(
        il(n, V, C)
      )) : s || (V = Si(n, u), V != null && m.push(
        il(n, V, C)
      ))), n = n.return;
    }
    m.length !== 0 && e.push({ event: t, listeners: m });
  }
  var Yb = /\r\n?/g, Xb = /\u0000|\uFFFD/g;
  function qp(e) {
    return (typeof e == "string" ? e : "" + e).replace(Yb, `
`).replace(Xb, "");
  }
  function Fp(e, t) {
    return t = qp(t), qp(e) === t;
  }
  function we(e, t, n, i, s, u) {
    switch (n) {
      case "children":
        typeof i == "string" ? t === "body" || t === "textarea" && i === "" || za(e, i) : (typeof i == "number" || typeof i == "bigint") && t !== "body" && za(e, "" + i);
        break;
      case "className":
        kl(e, "class", i);
        break;
      case "tabIndex":
        kl(e, "tabindex", i);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        kl(e, n, i);
        break;
      case "style":
        Ff(e, i, u);
        break;
      case "data":
        if (t !== "object") {
          kl(e, "data", i);
          break;
        }
      case "src":
      case "href":
        if (i === "" && (t !== "a" || n !== "href")) {
          e.removeAttribute(n);
          break;
        }
        if (i == null || typeof i == "function" || typeof i == "symbol" || typeof i == "boolean") {
          e.removeAttribute(n);
          break;
        }
        i = Ll("" + i), e.setAttribute(n, i);
        break;
      case "action":
      case "formAction":
        if (typeof i == "function") {
          e.setAttribute(
            n,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof u == "function" && (n === "formAction" ? (t !== "input" && we(e, t, "name", s.name, s, null), we(
            e,
            t,
            "formEncType",
            s.formEncType,
            s,
            null
          ), we(
            e,
            t,
            "formMethod",
            s.formMethod,
            s,
            null
          ), we(
            e,
            t,
            "formTarget",
            s.formTarget,
            s,
            null
          )) : (we(e, t, "encType", s.encType, s, null), we(e, t, "method", s.method, s, null), we(e, t, "target", s.target, s, null)));
        if (i == null || typeof i == "symbol" || typeof i == "boolean") {
          e.removeAttribute(n);
          break;
        }
        i = Ll("" + i), e.setAttribute(n, i);
        break;
      case "onClick":
        i != null && (e.onclick = an);
        break;
      case "onScroll":
        i != null && de("scroll", e);
        break;
      case "onScrollEnd":
        i != null && de("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (i != null) {
          if (typeof i != "object" || !("__html" in i))
            throw Error(o(61));
          if (n = i.__html, n != null) {
            if (s.children != null) throw Error(o(60));
            e.innerHTML = n;
          }
        }
        break;
      case "multiple":
        e.multiple = i && typeof i != "function" && typeof i != "symbol";
        break;
      case "muted":
        e.muted = i && typeof i != "function" && typeof i != "symbol";
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
        if (i == null || typeof i == "function" || typeof i == "boolean" || typeof i == "symbol") {
          e.removeAttribute("xlink:href");
          break;
        }
        n = Ll("" + i), e.setAttributeNS(
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
        i != null && typeof i != "function" && typeof i != "symbol" ? e.setAttribute(n, "" + i) : e.removeAttribute(n);
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
        i && typeof i != "function" && typeof i != "symbol" ? e.setAttribute(n, "") : e.removeAttribute(n);
        break;
      case "capture":
      case "download":
        i === !0 ? e.setAttribute(n, "") : i !== !1 && i != null && typeof i != "function" && typeof i != "symbol" ? e.setAttribute(n, i) : e.removeAttribute(n);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        i != null && typeof i != "function" && typeof i != "symbol" && !isNaN(i) && 1 <= i ? e.setAttribute(n, i) : e.removeAttribute(n);
        break;
      case "rowSpan":
      case "start":
        i == null || typeof i == "function" || typeof i == "symbol" || isNaN(i) ? e.removeAttribute(n) : e.setAttribute(n, i);
        break;
      case "popover":
        de("beforetoggle", e), de("toggle", e), Bl(e, "popover", i);
        break;
      case "xlinkActuate":
        nn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          i
        );
        break;
      case "xlinkArcrole":
        nn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          i
        );
        break;
      case "xlinkRole":
        nn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          i
        );
        break;
      case "xlinkShow":
        nn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          i
        );
        break;
      case "xlinkTitle":
        nn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          i
        );
        break;
      case "xlinkType":
        nn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          i
        );
        break;
      case "xmlBase":
        nn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          i
        );
        break;
      case "xmlLang":
        nn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          i
        );
        break;
      case "xmlSpace":
        nn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          i
        );
        break;
      case "is":
        Bl(e, "is", i);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (n = v1.get(n) || n, Bl(e, n, i));
    }
  }
  function Au(e, t, n, i, s, u) {
    switch (n) {
      case "style":
        Ff(e, i, u);
        break;
      case "dangerouslySetInnerHTML":
        if (i != null) {
          if (typeof i != "object" || !("__html" in i))
            throw Error(o(61));
          if (n = i.__html, n != null) {
            if (s.children != null) throw Error(o(60));
            e.innerHTML = n;
          }
        }
        break;
      case "children":
        typeof i == "string" ? za(e, i) : (typeof i == "number" || typeof i == "bigint") && za(e, "" + i);
        break;
      case "onScroll":
        i != null && de("scroll", e);
        break;
      case "onScrollEnd":
        i != null && de("scrollend", e);
        break;
      case "onClick":
        i != null && (e.onclick = an);
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
        if (!Rf.hasOwnProperty(n))
          e: {
            if (n[0] === "o" && n[1] === "n" && (s = n.endsWith("Capture"), t = n.slice(2, s ? n.length - 7 : void 0), u = e[mt] || null, u = u != null ? u[n] : null, typeof u == "function" && e.removeEventListener(t, u, s), typeof i == "function")) {
              typeof u != "function" && u !== null && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)), e.addEventListener(t, i, s);
              break e;
            }
            n in e ? e[n] = i : i === !0 ? e.setAttribute(n, "") : Bl(e, n, i);
          }
    }
  }
  function it(e, t, n) {
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
        de("error", e), de("load", e);
        var i = !1, s = !1, u;
        for (u in n)
          if (n.hasOwnProperty(u)) {
            var m = n[u];
            if (m != null)
              switch (u) {
                case "src":
                  i = !0;
                  break;
                case "srcSet":
                  s = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(o(137, t));
                default:
                  we(e, t, u, m, n, null);
              }
          }
        s && we(e, t, "srcSet", n.srcSet, n, null), i && we(e, t, "src", n.src, n, null);
        return;
      case "input":
        de("invalid", e);
        var x = u = m = s = null, C = null, V = null;
        for (i in n)
          if (n.hasOwnProperty(i)) {
            var _ = n[i];
            if (_ != null)
              switch (i) {
                case "name":
                  s = _;
                  break;
                case "type":
                  m = _;
                  break;
                case "checked":
                  C = _;
                  break;
                case "defaultChecked":
                  V = _;
                  break;
                case "value":
                  u = _;
                  break;
                case "defaultValue":
                  x = _;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (_ != null)
                    throw Error(o(137, t));
                  break;
                default:
                  we(e, t, i, _, n, null);
              }
          }
        Uf(
          e,
          u,
          x,
          C,
          V,
          m,
          s,
          !1
        );
        return;
      case "select":
        de("invalid", e), i = m = u = null;
        for (s in n)
          if (n.hasOwnProperty(s) && (x = n[s], x != null))
            switch (s) {
              case "value":
                u = x;
                break;
              case "defaultValue":
                m = x;
                break;
              case "multiple":
                i = x;
              default:
                we(e, t, s, x, n, null);
            }
        t = u, n = m, e.multiple = !!i, t != null ? Ma(e, !!i, t, !1) : n != null && Ma(e, !!i, n, !0);
        return;
      case "textarea":
        de("invalid", e), u = s = i = null;
        for (m in n)
          if (n.hasOwnProperty(m) && (x = n[m], x != null))
            switch (m) {
              case "value":
                i = x;
                break;
              case "defaultValue":
                s = x;
                break;
              case "children":
                u = x;
                break;
              case "dangerouslySetInnerHTML":
                if (x != null) throw Error(o(91));
                break;
              default:
                we(e, t, m, x, n, null);
            }
        Hf(e, i, s, u);
        return;
      case "option":
        for (C in n)
          if (n.hasOwnProperty(C) && (i = n[C], i != null))
            switch (C) {
              case "selected":
                e.selected = i && typeof i != "function" && typeof i != "symbol";
                break;
              default:
                we(e, t, C, i, n, null);
            }
        return;
      case "dialog":
        de("beforetoggle", e), de("toggle", e), de("cancel", e), de("close", e);
        break;
      case "iframe":
      case "object":
        de("load", e);
        break;
      case "video":
      case "audio":
        for (i = 0; i < al.length; i++)
          de(al[i], e);
        break;
      case "image":
        de("error", e), de("load", e);
        break;
      case "details":
        de("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        de("error", e), de("load", e);
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
        for (V in n)
          if (n.hasOwnProperty(V) && (i = n[V], i != null))
            switch (V) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(o(137, t));
              default:
                we(e, t, V, i, n, null);
            }
        return;
      default:
        if (Ho(t)) {
          for (_ in n)
            n.hasOwnProperty(_) && (i = n[_], i !== void 0 && Au(
              e,
              t,
              _,
              i,
              n,
              void 0
            ));
          return;
        }
    }
    for (x in n)
      n.hasOwnProperty(x) && (i = n[x], i != null && we(e, t, x, i, n, null));
  }
  function Pb(e, t, n, i) {
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
        var s = null, u = null, m = null, x = null, C = null, V = null, _ = null;
        for (z in n) {
          var k = n[z];
          if (n.hasOwnProperty(z) && k != null)
            switch (z) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                C = k;
              default:
                i.hasOwnProperty(z) || we(e, t, z, null, i, k);
            }
        }
        for (var j in i) {
          var z = i[j];
          if (k = n[j], i.hasOwnProperty(j) && (z != null || k != null))
            switch (j) {
              case "type":
                u = z;
                break;
              case "name":
                s = z;
                break;
              case "checked":
                V = z;
                break;
              case "defaultChecked":
                _ = z;
                break;
              case "value":
                m = z;
                break;
              case "defaultValue":
                x = z;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (z != null)
                  throw Error(o(137, t));
                break;
              default:
                z !== k && we(
                  e,
                  t,
                  j,
                  z,
                  i,
                  k
                );
            }
        }
        Uo(
          e,
          m,
          x,
          C,
          V,
          _,
          u,
          s
        );
        return;
      case "select":
        z = m = x = j = null;
        for (u in n)
          if (C = n[u], n.hasOwnProperty(u) && C != null)
            switch (u) {
              case "value":
                break;
              case "multiple":
                z = C;
              default:
                i.hasOwnProperty(u) || we(
                  e,
                  t,
                  u,
                  null,
                  i,
                  C
                );
            }
        for (s in i)
          if (u = i[s], C = n[s], i.hasOwnProperty(s) && (u != null || C != null))
            switch (s) {
              case "value":
                j = u;
                break;
              case "defaultValue":
                x = u;
                break;
              case "multiple":
                m = u;
              default:
                u !== C && we(
                  e,
                  t,
                  s,
                  u,
                  i,
                  C
                );
            }
        t = x, n = m, i = z, j != null ? Ma(e, !!n, j, !1) : !!i != !!n && (t != null ? Ma(e, !!n, t, !0) : Ma(e, !!n, n ? [] : "", !1));
        return;
      case "textarea":
        z = j = null;
        for (x in n)
          if (s = n[x], n.hasOwnProperty(x) && s != null && !i.hasOwnProperty(x))
            switch (x) {
              case "value":
                break;
              case "children":
                break;
              default:
                we(e, t, x, null, i, s);
            }
        for (m in i)
          if (s = i[m], u = n[m], i.hasOwnProperty(m) && (s != null || u != null))
            switch (m) {
              case "value":
                j = s;
                break;
              case "defaultValue":
                z = s;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (s != null) throw Error(o(91));
                break;
              default:
                s !== u && we(e, t, m, s, i, u);
            }
        Lf(e, j, z);
        return;
      case "option":
        for (var $ in n)
          if (j = n[$], n.hasOwnProperty($) && j != null && !i.hasOwnProperty($))
            switch ($) {
              case "selected":
                e.selected = !1;
                break;
              default:
                we(
                  e,
                  t,
                  $,
                  null,
                  i,
                  j
                );
            }
        for (C in i)
          if (j = i[C], z = n[C], i.hasOwnProperty(C) && j !== z && (j != null || z != null))
            switch (C) {
              case "selected":
                e.selected = j && typeof j != "function" && typeof j != "symbol";
                break;
              default:
                we(
                  e,
                  t,
                  C,
                  j,
                  i,
                  z
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
        for (var ie in n)
          j = n[ie], n.hasOwnProperty(ie) && j != null && !i.hasOwnProperty(ie) && we(e, t, ie, null, i, j);
        for (V in i)
          if (j = i[V], z = n[V], i.hasOwnProperty(V) && j !== z && (j != null || z != null))
            switch (V) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (j != null)
                  throw Error(o(137, t));
                break;
              default:
                we(
                  e,
                  t,
                  V,
                  j,
                  i,
                  z
                );
            }
        return;
      default:
        if (Ho(t)) {
          for (var Ve in n)
            j = n[Ve], n.hasOwnProperty(Ve) && j !== void 0 && !i.hasOwnProperty(Ve) && Au(
              e,
              t,
              Ve,
              void 0,
              i,
              j
            );
          for (_ in i)
            j = i[_], z = n[_], !i.hasOwnProperty(_) || j === z || j === void 0 && z === void 0 || Au(
              e,
              t,
              _,
              j,
              i,
              z
            );
          return;
        }
    }
    for (var A in n)
      j = n[A], n.hasOwnProperty(A) && j != null && !i.hasOwnProperty(A) && we(e, t, A, null, i, j);
    for (k in i)
      j = i[k], z = n[k], !i.hasOwnProperty(k) || j === z || j == null && z == null || we(e, t, k, j, i, z);
  }
  function Gp(e) {
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
  function Qb() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, t = 0, n = performance.getEntriesByType("resource"), i = 0; i < n.length; i++) {
        var s = n[i], u = s.transferSize, m = s.initiatorType, x = s.duration;
        if (u && x && Gp(m)) {
          for (m = 0, x = s.responseEnd, i += 1; i < n.length; i++) {
            var C = n[i], V = C.startTime;
            if (V > x) break;
            var _ = C.transferSize, k = C.initiatorType;
            _ && Gp(k) && (C = C.responseEnd, m += _ * (C < x ? 1 : (x - V) / (C - V)));
          }
          if (--i, t += 8 * (u + m) / (s.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var Tu = null, wu = null;
  function _s(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Yp(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Xp(e, t) {
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
  function Vu(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var ju = null;
  function Zb() {
    var e = window.event;
    return e && e.type === "popstate" ? e === ju ? !1 : (ju = e, !0) : (ju = null, !1);
  }
  var Pp = typeof setTimeout == "function" ? setTimeout : void 0, Kb = typeof clearTimeout == "function" ? clearTimeout : void 0, Qp = typeof Promise == "function" ? Promise : void 0, Ib = typeof queueMicrotask == "function" ? queueMicrotask : typeof Qp < "u" ? function(e) {
    return Qp.resolve(null).then(e).catch(Jb);
  } : Pp;
  function Jb(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Fn(e) {
    return e === "head";
  }
  function Zp(e, t) {
    var n = t, i = 0;
    do {
      var s = n.nextSibling;
      if (e.removeChild(n), s && s.nodeType === 8)
        if (n = s.data, n === "/$" || n === "/&") {
          if (i === 0) {
            e.removeChild(s), ui(t);
            return;
          }
          i--;
        } else if (n === "$" || n === "$?" || n === "$~" || n === "$!" || n === "&")
          i++;
        else if (n === "html")
          ll(e.ownerDocument.documentElement);
        else if (n === "head") {
          n = e.ownerDocument.head, ll(n);
          for (var u = n.firstChild; u; ) {
            var m = u.nextSibling, x = u.nodeName;
            u[Ei] || x === "SCRIPT" || x === "STYLE" || x === "LINK" && u.rel.toLowerCase() === "stylesheet" || n.removeChild(u), u = m;
          }
        } else
          n === "body" && ll(e.ownerDocument.body);
      n = s;
    } while (n);
    ui(t);
  }
  function Kp(e, t) {
    var n = e;
    e = 0;
    do {
      var i = n.nextSibling;
      if (n.nodeType === 1 ? t ? (n._stashedDisplay = n.style.display, n.style.display = "none") : (n.style.display = n._stashedDisplay || "", n.getAttribute("style") === "" && n.removeAttribute("style")) : n.nodeType === 3 && (t ? (n._stashedText = n.nodeValue, n.nodeValue = "") : n.nodeValue = n._stashedText || ""), i && i.nodeType === 8)
        if (n = i.data, n === "/$") {
          if (e === 0) break;
          e--;
        } else
          n !== "$" && n !== "$?" && n !== "$~" && n !== "$!" || e++;
      n = i;
    } while (n);
  }
  function Mu(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var n = t;
      switch (t = t.nextSibling, n.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Mu(n), Bo(n);
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
  function $b(e, t, n, i) {
    for (; e.nodeType === 1; ) {
      var s = n;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!i && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (i) {
        if (!e[Ei])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (u = e.getAttribute("rel"), u === "stylesheet" && e.hasAttribute("data-precedence"))
                break;
              if (u !== s.rel || e.getAttribute("href") !== (s.href == null || s.href === "" ? null : s.href) || e.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin) || e.getAttribute("title") !== (s.title == null ? null : s.title))
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (u = e.getAttribute("src"), (u !== (s.src == null ? null : s.src) || e.getAttribute("type") !== (s.type == null ? null : s.type) || e.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin)) && u && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var u = s.name == null ? null : "" + s.name;
        if (s.type === "hidden" && e.getAttribute("name") === u)
          return e;
      } else return e;
      if (e = Ut(e.nextSibling), e === null) break;
    }
    return null;
  }
  function Wb(e, t, n) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !n || (e = Ut(e.nextSibling), e === null)) return null;
    return e;
  }
  function Ip(e, t) {
    for (; e.nodeType !== 8; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = Ut(e.nextSibling), e === null)) return null;
    return e;
  }
  function zu(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function Ru(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
  }
  function ev(e, t) {
    var n = e.ownerDocument;
    if (e.data === "$~") e._reactRetry = t;
    else if (e.data !== "$?" || n.readyState !== "loading")
      t();
    else {
      var i = function() {
        t(), n.removeEventListener("DOMContentLoaded", i);
      };
      n.addEventListener("DOMContentLoaded", i), e._reactRetry = i;
    }
  }
  function Ut(e) {
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
  var _u = null;
  function Jp(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "/$" || n === "/&") {
          if (t === 0)
            return Ut(e.nextSibling);
          t--;
        } else
          n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&" || t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function $p(e) {
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
  function Wp(e, t, n) {
    switch (t = _s(n), e) {
      case "html":
        if (e = t.documentElement, !e) throw Error(o(452));
        return e;
      case "head":
        if (e = t.head, !e) throw Error(o(453));
        return e;
      case "body":
        if (e = t.body, !e) throw Error(o(454));
        return e;
      default:
        throw Error(o(451));
    }
  }
  function ll(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    Bo(e);
  }
  var Lt = /* @__PURE__ */ new Map(), eh = /* @__PURE__ */ new Set();
  function Os(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var yn = Q.d;
  Q.d = {
    f: tv,
    r: nv,
    D: av,
    C: iv,
    L: lv,
    m: sv,
    X: rv,
    S: ov,
    M: uv
  };
  function tv() {
    var e = yn.f(), t = As();
    return e || t;
  }
  function nv(e) {
    var t = wa(e);
    t !== null && t.tag === 5 && t.type === "form" ? xd(t) : yn.r(e);
  }
  var si = typeof document > "u" ? null : document;
  function th(e, t, n) {
    var i = si;
    if (i && typeof t == "string" && t) {
      var s = Mt(t);
      s = 'link[rel="' + e + '"][href="' + s + '"]', typeof n == "string" && (s += '[crossorigin="' + n + '"]'), eh.has(s) || (eh.add(s), e = { rel: e, crossOrigin: n, href: t }, i.querySelector(s) === null && (t = i.createElement("link"), it(t, "link", e), Je(t), i.head.appendChild(t)));
    }
  }
  function av(e) {
    yn.D(e), th("dns-prefetch", e, null);
  }
  function iv(e, t) {
    yn.C(e, t), th("preconnect", e, t);
  }
  function lv(e, t, n) {
    yn.L(e, t, n);
    var i = si;
    if (i && e && t) {
      var s = 'link[rel="preload"][as="' + Mt(t) + '"]';
      t === "image" && n && n.imageSrcSet ? (s += '[imagesrcset="' + Mt(
        n.imageSrcSet
      ) + '"]', typeof n.imageSizes == "string" && (s += '[imagesizes="' + Mt(
        n.imageSizes
      ) + '"]')) : s += '[href="' + Mt(e) + '"]';
      var u = s;
      switch (t) {
        case "style":
          u = oi(e);
          break;
        case "script":
          u = ri(e);
      }
      Lt.has(u) || (e = y(
        {
          rel: "preload",
          href: t === "image" && n && n.imageSrcSet ? void 0 : e,
          as: t
        },
        n
      ), Lt.set(u, e), i.querySelector(s) !== null || t === "style" && i.querySelector(sl(u)) || t === "script" && i.querySelector(ol(u)) || (t = i.createElement("link"), it(t, "link", e), Je(t), i.head.appendChild(t)));
    }
  }
  function sv(e, t) {
    yn.m(e, t);
    var n = si;
    if (n && e) {
      var i = t && typeof t.as == "string" ? t.as : "script", s = 'link[rel="modulepreload"][as="' + Mt(i) + '"][href="' + Mt(e) + '"]', u = s;
      switch (i) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = ri(e);
      }
      if (!Lt.has(u) && (e = y({ rel: "modulepreload", href: e }, t), Lt.set(u, e), n.querySelector(s) === null)) {
        switch (i) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(ol(u)))
              return;
        }
        i = n.createElement("link"), it(i, "link", e), Je(i), n.head.appendChild(i);
      }
    }
  }
  function ov(e, t, n) {
    yn.S(e, t, n);
    var i = si;
    if (i && e) {
      var s = Va(i).hoistableStyles, u = oi(e);
      t = t || "default";
      var m = s.get(u);
      if (!m) {
        var x = { loading: 0, preload: null };
        if (m = i.querySelector(
          sl(u)
        ))
          x.loading = 5;
        else {
          e = y(
            { rel: "stylesheet", href: e, "data-precedence": t },
            n
          ), (n = Lt.get(u)) && Ou(e, n);
          var C = m = i.createElement("link");
          Je(C), it(C, "link", e), C._p = new Promise(function(V, _) {
            C.onload = V, C.onerror = _;
          }), C.addEventListener("load", function() {
            x.loading |= 1;
          }), C.addEventListener("error", function() {
            x.loading |= 2;
          }), x.loading |= 4, Bs(m, t, i);
        }
        m = {
          type: "stylesheet",
          instance: m,
          count: 1,
          state: x
        }, s.set(u, m);
      }
    }
  }
  function rv(e, t) {
    yn.X(e, t);
    var n = si;
    if (n && e) {
      var i = Va(n).hoistableScripts, s = ri(e), u = i.get(s);
      u || (u = n.querySelector(ol(s)), u || (e = y({ src: e, async: !0 }, t), (t = Lt.get(s)) && Bu(e, t), u = n.createElement("script"), Je(u), it(u, "link", e), n.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, i.set(s, u));
    }
  }
  function uv(e, t) {
    yn.M(e, t);
    var n = si;
    if (n && e) {
      var i = Va(n).hoistableScripts, s = ri(e), u = i.get(s);
      u || (u = n.querySelector(ol(s)), u || (e = y({ src: e, async: !0, type: "module" }, t), (t = Lt.get(s)) && Bu(e, t), u = n.createElement("script"), Je(u), it(u, "link", e), n.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, i.set(s, u));
    }
  }
  function nh(e, t, n, i) {
    var s = (s = fe.current) ? Os(s) : null;
    if (!s) throw Error(o(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string" ? (t = oi(n.href), n = Va(
          s
        ).hoistableStyles, i = n.get(t), i || (i = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, n.set(t, i)), i) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
          e = oi(n.href);
          var u = Va(
            s
          ).hoistableStyles, m = u.get(e);
          if (m || (s = s.ownerDocument || s, m = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, u.set(e, m), (u = s.querySelector(
            sl(e)
          )) && !u._p && (m.instance = u, m.state.loading = 5), Lt.has(e) || (n = {
            rel: "preload",
            as: "style",
            href: n.href,
            crossOrigin: n.crossOrigin,
            integrity: n.integrity,
            media: n.media,
            hrefLang: n.hrefLang,
            referrerPolicy: n.referrerPolicy
          }, Lt.set(e, n), u || cv(
            s,
            e,
            n,
            m.state
          ))), t && i === null)
            throw Error(o(528, ""));
          return m;
        }
        if (t && i !== null)
          throw Error(o(529, ""));
        return null;
      case "script":
        return t = n.async, n = n.src, typeof n == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = ri(n), n = Va(
          s
        ).hoistableScripts, i = n.get(t), i || (i = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, n.set(t, i)), i) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(o(444, e));
    }
  }
  function oi(e) {
    return 'href="' + Mt(e) + '"';
  }
  function sl(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function ah(e) {
    return y({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function cv(e, t, n, i) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? i.loading = 1 : (t = e.createElement("link"), i.preload = t, t.addEventListener("load", function() {
      return i.loading |= 1;
    }), t.addEventListener("error", function() {
      return i.loading |= 2;
    }), it(t, "link", n), Je(t), e.head.appendChild(t));
  }
  function ri(e) {
    return '[src="' + Mt(e) + '"]';
  }
  function ol(e) {
    return "script[async]" + e;
  }
  function ih(e, t, n) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var i = e.querySelector(
            'style[data-href~="' + Mt(n.href) + '"]'
          );
          if (i)
            return t.instance = i, Je(i), i;
          var s = y({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null
          });
          return i = (e.ownerDocument || e).createElement(
            "style"
          ), Je(i), it(i, "style", s), Bs(i, n.precedence, e), t.instance = i;
        case "stylesheet":
          s = oi(n.href);
          var u = e.querySelector(
            sl(s)
          );
          if (u)
            return t.state.loading |= 4, t.instance = u, Je(u), u;
          i = ah(n), (s = Lt.get(s)) && Ou(i, s), u = (e.ownerDocument || e).createElement("link"), Je(u);
          var m = u;
          return m._p = new Promise(function(x, C) {
            m.onload = x, m.onerror = C;
          }), it(u, "link", i), t.state.loading |= 4, Bs(u, n.precedence, e), t.instance = u;
        case "script":
          return u = ri(n.src), (s = e.querySelector(
            ol(u)
          )) ? (t.instance = s, Je(s), s) : (i = n, (s = Lt.get(u)) && (i = y({}, n), Bu(i, s)), e = e.ownerDocument || e, s = e.createElement("script"), Je(s), it(s, "link", i), e.head.appendChild(s), t.instance = s);
        case "void":
          return null;
        default:
          throw Error(o(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (i = t.instance, t.state.loading |= 4, Bs(i, n.precedence, e));
    return t.instance;
  }
  function Bs(e, t, n) {
    for (var i = n.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), s = i.length ? i[i.length - 1] : null, u = s, m = 0; m < i.length; m++) {
      var x = i[m];
      if (x.dataset.precedence === t) u = x;
      else if (u !== s) break;
    }
    u ? u.parentNode.insertBefore(e, u.nextSibling) : (t = n.nodeType === 9 ? n.head : n, t.insertBefore(e, t.firstChild));
  }
  function Ou(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function Bu(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var ks = null;
  function lh(e, t, n) {
    if (ks === null) {
      var i = /* @__PURE__ */ new Map(), s = ks = /* @__PURE__ */ new Map();
      s.set(n, i);
    } else
      s = ks, i = s.get(n), i || (i = /* @__PURE__ */ new Map(), s.set(n, i));
    if (i.has(e)) return i;
    for (i.set(e, null), n = n.getElementsByTagName(e), s = 0; s < n.length; s++) {
      var u = n[s];
      if (!(u[Ei] || u[et] || e === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
        var m = u.getAttribute(t) || "";
        m = e + m;
        var x = i.get(m);
        x ? x.push(u) : i.set(m, [u]);
      }
    }
    return i;
  }
  function sh(e, t, n) {
    e = e.ownerDocument || e, e.head.insertBefore(
      n,
      t === "title" ? e.querySelector("head > title") : null
    );
  }
  function fv(e, t, n) {
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
  function oh(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function mv(e, t, n, i) {
    if (n.type === "stylesheet" && (typeof i.media != "string" || matchMedia(i.media).matches !== !1) && (n.state.loading & 4) === 0) {
      if (n.instance === null) {
        var s = oi(i.href), u = t.querySelector(
          sl(s)
        );
        if (u) {
          t = u._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = Us.bind(e), t.then(e, e)), n.state.loading |= 4, n.instance = u, Je(u);
          return;
        }
        u = t.ownerDocument || t, i = ah(i), (s = Lt.get(s)) && Ou(i, s), u = u.createElement("link"), Je(u);
        var m = u;
        m._p = new Promise(function(x, C) {
          m.onload = x, m.onerror = C;
        }), it(u, "link", i), n.instance = u;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(n, t), (t = n.state.preload) && (n.state.loading & 3) === 0 && (e.count++, n = Us.bind(e), t.addEventListener("load", n), t.addEventListener("error", n));
    }
  }
  var ku = 0;
  function dv(e, t) {
    return e.stylesheets && e.count === 0 && Hs(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(n) {
      var i = setTimeout(function() {
        if (e.stylesheets && Hs(e, e.stylesheets), e.unsuspend) {
          var u = e.unsuspend;
          e.unsuspend = null, u();
        }
      }, 6e4 + t);
      0 < e.imgBytes && ku === 0 && (ku = 62500 * Qb());
      var s = setTimeout(
        function() {
          if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && Hs(e, e.stylesheets), e.unsuspend)) {
            var u = e.unsuspend;
            e.unsuspend = null, u();
          }
        },
        (e.imgBytes > ku ? 50 : 800) + t
      );
      return e.unsuspend = n, function() {
        e.unsuspend = null, clearTimeout(i), clearTimeout(s);
      };
    } : null;
  }
  function Us() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Hs(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var Ls = null;
  function Hs(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, Ls = /* @__PURE__ */ new Map(), t.forEach(pv, e), Ls = null, Us.call(e));
  }
  function pv(e, t) {
    if (!(t.state.loading & 4)) {
      var n = Ls.get(e);
      if (n) var i = n.get(null);
      else {
        n = /* @__PURE__ */ new Map(), Ls.set(e, n);
        for (var s = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), u = 0; u < s.length; u++) {
          var m = s[u];
          (m.nodeName === "LINK" || m.getAttribute("media") !== "not all") && (n.set(m.dataset.precedence, m), i = m);
        }
        i && n.set(null, i);
      }
      s = t.instance, m = s.getAttribute("data-precedence"), u = n.get(m) || i, u === i && n.set(null, s), n.set(m, s), this.count++, i = Us.bind(this), s.addEventListener("load", i), s.addEventListener("error", i), u ? u.parentNode.insertBefore(s, u.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(s, e.firstChild)), t.state.loading |= 4;
    }
  }
  var rl = {
    $$typeof: q,
    Provider: null,
    Consumer: null,
    _currentValue: I,
    _currentValue2: I,
    _threadCount: 0
  };
  function hv(e, t, n, i, s, u, m, x, C) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = zo(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = zo(0), this.hiddenUpdates = zo(null), this.identifierPrefix = i, this.onUncaughtError = s, this.onCaughtError = u, this.onRecoverableError = m, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = C, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function rh(e, t, n, i, s, u, m, x, C, V, _, k) {
    return e = new hv(
      e,
      t,
      n,
      m,
      C,
      V,
      _,
      k,
      x
    ), t = 1, u === !0 && (t |= 24), u = Dt(3, null, null, t), e.current = u, u.stateNode = e, t = gr(), t.refCount++, e.pooledCache = t, t.refCount++, u.memoizedState = {
      element: i,
      isDehydrated: n,
      cache: t
    }, yr(u), e;
  }
  function uh(e) {
    return e ? (e = La, e) : La;
  }
  function ch(e, t, n, i, s, u) {
    s = uh(s), i.context === null ? i.context = s : i.pendingContext = s, i = Mn(t), i.payload = { element: n }, u = u === void 0 ? null : u, u !== null && (i.callback = u), n = zn(e, i, t), n !== null && (bt(n, e, t), Hi(n, e, t));
  }
  function fh(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Uu(e, t) {
    fh(e, t), (e = e.alternate) && fh(e, t);
  }
  function mh(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = la(e, 67108864);
      t !== null && bt(t, e, 67108864), Uu(e, 67108864);
    }
  }
  function dh(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Vt();
      t = Ro(t);
      var n = la(e, t);
      n !== null && bt(n, e, t), Uu(e, t);
    }
  }
  var qs = !0;
  function gv(e, t, n, i) {
    var s = R.T;
    R.T = null;
    var u = Q.p;
    try {
      Q.p = 2, Lu(e, t, n, i);
    } finally {
      Q.p = u, R.T = s;
    }
  }
  function xv(e, t, n, i) {
    var s = R.T;
    R.T = null;
    var u = Q.p;
    try {
      Q.p = 8, Lu(e, t, n, i);
    } finally {
      Q.p = u, R.T = s;
    }
  }
  function Lu(e, t, n, i) {
    if (qs) {
      var s = Hu(i);
      if (s === null)
        Su(
          e,
          t,
          i,
          Fs,
          n
        ), hh(e, i);
      else if (vv(
        s,
        e,
        t,
        n,
        i
      ))
        i.stopPropagation();
      else if (hh(e, i), t & 4 && -1 < bv.indexOf(e)) {
        for (; s !== null; ) {
          var u = wa(s);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                  var m = ea(u.pendingLanes);
                  if (m !== 0) {
                    var x = u;
                    for (x.pendingLanes |= 2, x.entangledLanes |= 2; m; ) {
                      var C = 1 << 31 - Ct(m);
                      x.entanglements[1] |= C, m &= ~C;
                    }
                    Jt(u), (Ee & 6) === 0 && (Ds = yt() + 500, nl(0));
                  }
                }
                break;
              case 31:
              case 13:
                x = la(u, 2), x !== null && bt(x, u, 2), As(), Uu(u, 2);
            }
          if (u = Hu(i), u === null && Su(
            e,
            t,
            i,
            Fs,
            n
          ), u === s) break;
          s = u;
        }
        s !== null && i.stopPropagation();
      } else
        Su(
          e,
          t,
          i,
          null,
          n
        );
    }
  }
  function Hu(e) {
    return e = Fo(e), qu(e);
  }
  var Fs = null;
  function qu(e) {
    if (Fs = null, e = Ta(e), e !== null) {
      var t = d(e);
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
    return Fs = e, null;
  }
  function ph(e) {
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
        switch (a1()) {
          case Cf:
            return 2;
          case Ef:
            return 8;
          case Ml:
          case i1:
            return 32;
          case Df:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Fu = !1, Gn = null, Yn = null, Xn = null, ul = /* @__PURE__ */ new Map(), cl = /* @__PURE__ */ new Map(), Pn = [], bv = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function hh(e, t) {
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
        ul.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        cl.delete(t.pointerId);
    }
  }
  function fl(e, t, n, i, s, u) {
    return e === null || e.nativeEvent !== u ? (e = {
      blockedOn: t,
      domEventName: n,
      eventSystemFlags: i,
      nativeEvent: u,
      targetContainers: [s]
    }, t !== null && (t = wa(t), t !== null && mh(t)), e) : (e.eventSystemFlags |= i, t = e.targetContainers, s !== null && t.indexOf(s) === -1 && t.push(s), e);
  }
  function vv(e, t, n, i, s) {
    switch (t) {
      case "focusin":
        return Gn = fl(
          Gn,
          e,
          t,
          n,
          i,
          s
        ), !0;
      case "dragenter":
        return Yn = fl(
          Yn,
          e,
          t,
          n,
          i,
          s
        ), !0;
      case "mouseover":
        return Xn = fl(
          Xn,
          e,
          t,
          n,
          i,
          s
        ), !0;
      case "pointerover":
        var u = s.pointerId;
        return ul.set(
          u,
          fl(
            ul.get(u) || null,
            e,
            t,
            n,
            i,
            s
          )
        ), !0;
      case "gotpointercapture":
        return u = s.pointerId, cl.set(
          u,
          fl(
            cl.get(u) || null,
            e,
            t,
            n,
            i,
            s
          )
        ), !0;
    }
    return !1;
  }
  function gh(e) {
    var t = Ta(e.target);
    if (t !== null) {
      var n = d(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = f(n), t !== null) {
            e.blockedOn = t, jf(e.priority, function() {
              dh(n);
            });
            return;
          }
        } else if (t === 31) {
          if (t = h(n), t !== null) {
            e.blockedOn = t, jf(e.priority, function() {
              dh(n);
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
  function Gs(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Hu(e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var i = new n.constructor(
          n.type,
          n
        );
        qo = i, n.target.dispatchEvent(i), qo = null;
      } else
        return t = wa(n), t !== null && mh(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function xh(e, t, n) {
    Gs(e) && n.delete(t);
  }
  function yv() {
    Fu = !1, Gn !== null && Gs(Gn) && (Gn = null), Yn !== null && Gs(Yn) && (Yn = null), Xn !== null && Gs(Xn) && (Xn = null), ul.forEach(xh), cl.forEach(xh);
  }
  function Ys(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Fu || (Fu = !0, a.unstable_scheduleCallback(
      a.unstable_NormalPriority,
      yv
    )));
  }
  var Xs = null;
  function bh(e) {
    Xs !== e && (Xs = e, a.unstable_scheduleCallback(
      a.unstable_NormalPriority,
      function() {
        Xs === e && (Xs = null);
        for (var t = 0; t < e.length; t += 3) {
          var n = e[t], i = e[t + 1], s = e[t + 2];
          if (typeof i != "function") {
            if (qu(i || n) === null)
              continue;
            break;
          }
          var u = wa(n);
          u !== null && (e.splice(t, 3), t -= 3, Hr(
            u,
            {
              pending: !0,
              data: s,
              method: n.method,
              action: i
            },
            i,
            s
          ));
        }
      }
    ));
  }
  function ui(e) {
    function t(C) {
      return Ys(C, e);
    }
    Gn !== null && Ys(Gn, e), Yn !== null && Ys(Yn, e), Xn !== null && Ys(Xn, e), ul.forEach(t), cl.forEach(t);
    for (var n = 0; n < Pn.length; n++) {
      var i = Pn[n];
      i.blockedOn === e && (i.blockedOn = null);
    }
    for (; 0 < Pn.length && (n = Pn[0], n.blockedOn === null); )
      gh(n), n.blockedOn === null && Pn.shift();
    if (n = (e.ownerDocument || e).$$reactFormReplay, n != null)
      for (i = 0; i < n.length; i += 3) {
        var s = n[i], u = n[i + 1], m = s[mt] || null;
        if (typeof u == "function")
          m || bh(n);
        else if (m) {
          var x = null;
          if (u && u.hasAttribute("formAction")) {
            if (s = u, m = u[mt] || null)
              x = m.formAction;
            else if (qu(s) !== null) continue;
          } else x = m.action;
          typeof x == "function" ? n[i + 1] = x : (n.splice(i, 3), i -= 3), bh(n);
        }
      }
  }
  function vh() {
    function e(u) {
      u.canIntercept && u.info === "react-transition" && u.intercept({
        handler: function() {
          return new Promise(function(m) {
            return s = m;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function t() {
      s !== null && (s(), s = null), i || setTimeout(n, 20);
    }
    function n() {
      if (!i && !navigation.transition) {
        var u = navigation.currentEntry;
        u && u.url != null && navigation.navigate(u.url, {
          state: u.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var i = !1, s = null;
      return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(n, 100), function() {
        i = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), s !== null && (s(), s = null);
      };
    }
  }
  function Gu(e) {
    this._internalRoot = e;
  }
  Ps.prototype.render = Gu.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(o(409));
    var n = t.current, i = Vt();
    ch(n, i, e, t, null, null);
  }, Ps.prototype.unmount = Gu.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      ch(e.current, 2, null, e, null, null), As(), t[Aa] = null;
    }
  };
  function Ps(e) {
    this._internalRoot = e;
  }
  Ps.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Vf();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Pn.length && t !== 0 && t < Pn[n].priority; n++) ;
      Pn.splice(n, 0, e), n === 0 && gh(e);
    }
  };
  var yh = l.version;
  if (yh !== "19.2.6")
    throw Error(
      o(
        527,
        yh,
        "19.2.6"
      )
    );
  Q.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(o(188)) : (e = Object.keys(e).join(","), Error(o(268, e)));
    return e = g(t), e = e !== null ? v(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var Nv = {
    bundleType: 0,
    version: "19.2.6",
    rendererPackageName: "react-dom",
    currentDispatcherRef: R,
    reconcilerVersion: "19.2.6"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Qs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Qs.isDisabled && Qs.supportsFiber)
      try {
        yi = Qs.inject(
          Nv
        ), Nt = Qs;
      } catch {
      }
  }
  return ml.createRoot = function(e, t) {
    if (!c(e)) throw Error(o(299));
    var n = !1, i = "", s = Td, u = wd, m = Vd;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (i = t.identifierPrefix), t.onUncaughtError !== void 0 && (s = t.onUncaughtError), t.onCaughtError !== void 0 && (u = t.onCaughtError), t.onRecoverableError !== void 0 && (m = t.onRecoverableError)), t = rh(
      e,
      1,
      !1,
      null,
      null,
      n,
      i,
      null,
      s,
      u,
      m,
      vh
    ), e[Aa] = t.current, Du(e), new Gu(t);
  }, ml.hydrateRoot = function(e, t, n) {
    if (!c(e)) throw Error(o(299));
    var i = !1, s = "", u = Td, m = wd, x = Vd, C = null;
    return n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (s = n.identifierPrefix), n.onUncaughtError !== void 0 && (u = n.onUncaughtError), n.onCaughtError !== void 0 && (m = n.onCaughtError), n.onRecoverableError !== void 0 && (x = n.onRecoverableError), n.formState !== void 0 && (C = n.formState)), t = rh(
      e,
      1,
      !0,
      t,
      n ?? null,
      i,
      s,
      C,
      u,
      m,
      x,
      vh
    ), t.context = uh(null), n = t.current, i = Vt(), i = Ro(i), s = Mn(i), s.callback = null, zn(n, s, i), n = i, t.current.lanes = n, Ci(t, n), Jt(t), e[Aa] = t.current, Du(e), new Ps(t);
  }, ml.version = "19.2.6", ml;
}
var Mh;
function zv() {
  if (Mh) return Pu.exports;
  Mh = 1;
  function a() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (l) {
        console.error(l);
      }
  }
  return a(), Pu.exports = Mv(), Pu.exports;
}
var lg = zv(), Iu = { exports: {} }, dl = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zh;
function Rv() {
  if (zh) return dl;
  zh = 1;
  var a = Symbol.for("react.transitional.element"), l = Symbol.for("react.fragment");
  function r(o, c, d) {
    var f = null;
    if (d !== void 0 && (f = "" + d), c.key !== void 0 && (f = "" + c.key), "key" in c) {
      d = {};
      for (var h in c)
        h !== "key" && (d[h] = c[h]);
    } else d = c;
    return c = d.ref, {
      $$typeof: a,
      type: o,
      key: f,
      ref: c !== void 0 ? c : null,
      props: d
    };
  }
  return dl.Fragment = l, dl.jsx = r, dl.jsxs = r, dl;
}
var Rh;
function _v() {
  return Rh || (Rh = 1, Iu.exports = Rv()), Iu.exports;
}
var Cn = _v();
const Xc = Y.createContext({});
function Pc(a) {
  const l = Y.useRef(null);
  return l.current === null && (l.current = a()), l.current;
}
const Ov = typeof window < "u", sg = Ov ? Y.useLayoutEffect : Y.useEffect, No = /* @__PURE__ */ Y.createContext(null);
function Qc(a, l) {
  a.indexOf(l) === -1 && a.push(l);
}
function uo(a, l) {
  const r = a.indexOf(l);
  r > -1 && a.splice(r, 1);
}
const tn = (a, l, r) => r > l ? l : r < a ? a : r;
function _h(a, l) {
  return l ? `${a}. For more information and steps for solving, visit https://motion.dev/troubleshooting/${l}` : a;
}
let Sl = () => {
}, Sa = () => {
};
var ig;
typeof process < "u" && ((ig = process.env) == null ? void 0 : ig.NODE_ENV) !== "production" && (Sl = (a, l, r) => {
  !a && typeof console < "u" && console.warn(_h(l, r));
}, Sa = (a, l, r) => {
  if (!a)
    throw new Error(_h(l, r));
});
const In = {}, og = (a) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(a), rg = (a) => typeof a == "object" && a !== null, ug = (a) => /^0[^.\s]+$/u.test(a);
// @__NO_SIDE_EFFECTS__
function cg(a) {
  let l;
  return () => (l === void 0 && (l = a()), l);
}
const qt = /* @__NO_SIDE_EFFECTS__ */ (a) => a, Al = (...a) => a.reduce((l, r) => (o) => r(l(o))), yl = /* @__NO_SIDE_EFFECTS__ */ (a, l, r) => {
  const o = l - a;
  return o ? (r - a) / o : 1;
};
class Zc {
  constructor() {
    this.subscriptions = [];
  }
  add(l) {
    return Qc(this.subscriptions, l), () => uo(this.subscriptions, l);
  }
  notify(l, r, o) {
    const c = this.subscriptions.length;
    if (c)
      if (c === 1)
        this.subscriptions[0](l, r, o);
      else
        for (let d = 0; d < c; d++) {
          const f = this.subscriptions[d];
          f && f(l, r, o);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const vt = /* @__NO_SIDE_EFFECTS__ */ (a) => a * 1e3, Ht = /* @__NO_SIDE_EFFECTS__ */ (a) => a / 1e3, fg = /* @__NO_SIDE_EFFECTS__ */ (a, l) => l ? a * (1e3 / l) : 0, mg = (a, l, r) => (((1 - 3 * r + 3 * l) * a + (3 * r - 6 * l)) * a + 3 * l) * a, Bv = 1e-7, kv = 12;
function Uv(a, l, r, o, c) {
  let d, f, h = 0;
  do
    f = l + (r - l) / 2, d = mg(f, o, c) - a, d > 0 ? r = f : l = f;
  while (Math.abs(d) > Bv && ++h < kv);
  return f;
}
// @__NO_SIDE_EFFECTS__
function Tl(a, l, r, o) {
  if (a === l && r === o)
    return qt;
  const c = (d) => Uv(d, 0, 1, a, r);
  return (d) => d === 0 || d === 1 ? d : mg(c(d), l, o);
}
const dg = /* @__NO_SIDE_EFFECTS__ */ (a) => (l) => l <= 0.5 ? a(2 * l) / 2 : (2 - a(2 * (1 - l))) / 2, pg = /* @__NO_SIDE_EFFECTS__ */ (a) => (l) => 1 - a(1 - l), hg = /* @__PURE__ */ Tl(0.33, 1.53, 0.69, 0.99), Kc = /* @__PURE__ */ pg(hg), gg = /* @__PURE__ */ dg(Kc), xg = (a) => a >= 1 ? 1 : (a *= 2) < 1 ? 0.5 * Kc(a) : 0.5 * (2 - Math.pow(2, -10 * (a - 1))), Ic = (a) => 1 - Math.sin(Math.acos(a)), bg = /* @__PURE__ */ pg(Ic), vg = /* @__PURE__ */ dg(Ic), Lv = /* @__PURE__ */ Tl(0.42, 0, 1, 1), Hv = /* @__PURE__ */ Tl(0, 0, 0.58, 1), yg = /* @__PURE__ */ Tl(0.42, 0, 0.58, 1), qv = /* @__NO_SIDE_EFFECTS__ */ (a) => Array.isArray(a) && typeof a[0] != "number", Ng = /* @__NO_SIDE_EFFECTS__ */ (a) => Array.isArray(a) && typeof a[0] == "number", Oh = {
  linear: qt,
  easeIn: Lv,
  easeInOut: yg,
  easeOut: Hv,
  circIn: Ic,
  circInOut: vg,
  circOut: bg,
  backIn: Kc,
  backInOut: gg,
  backOut: hg,
  anticipate: xg
}, Fv = (a) => typeof a == "string", Bh = (a) => {
  if (/* @__PURE__ */ Ng(a)) {
    Sa(a.length === 4, "Cubic bezier arrays must contain four numerical values.", "cubic-bezier-length");
    const [l, r, o, c] = a;
    return /* @__PURE__ */ Tl(l, r, o, c);
  } else if (Fv(a))
    return Sa(Oh[a] !== void 0, `Invalid easing type '${a}'`, "invalid-easing-type"), Oh[a];
  return a;
}, Ks = [
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
function Gv(a, l) {
  let r = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Set(), c = !1, d = !1;
  const f = /* @__PURE__ */ new WeakSet();
  let h = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  };
  function b(v) {
    f.has(v) && (g.schedule(v), a()), v(h);
  }
  const g = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (v, y = !1, N = !1) => {
      const T = N && c ? r : o;
      return y && f.add(v), T.add(v), v;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (v) => {
      o.delete(v), f.delete(v);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (v) => {
      if (h = v, c) {
        d = !0;
        return;
      }
      c = !0;
      const y = r;
      r = o, o = y, r.forEach(b), r.clear(), c = !1, d && (d = !1, g.process(v));
    }
  };
  return g;
}
const Yv = 40;
function Cg(a, l) {
  let r = !1, o = !0;
  const c = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, d = () => r = !0, f = Ks.reduce((q, F) => (q[F] = Gv(d), q), {}), { setup: h, read: b, resolveKeyframes: g, preUpdate: v, update: y, preRender: N, render: S, postRender: T } = f, U = () => {
    const q = In.useManualTiming, F = q ? c.timestamp : performance.now();
    r = !1, q || (c.delta = o ? 1e3 / 60 : Math.max(Math.min(F - c.timestamp, Yv), 1)), c.timestamp = F, c.isProcessing = !0, h.process(c), b.process(c), g.process(c), v.process(c), y.process(c), N.process(c), S.process(c), T.process(c), c.isProcessing = !1, r && l && (o = !1, a(U));
  }, M = () => {
    r = !0, o = !0, c.isProcessing || a(U);
  };
  return { schedule: Ks.reduce((q, F) => {
    const J = f[F];
    return q[F] = (P, G = !1, X = !1) => (r || M(), J.schedule(P, G, X)), q;
  }, {}), cancel: (q) => {
    for (let F = 0; F < Ks.length; F++)
      f[Ks[F]].cancel(q);
  }, state: c, steps: f };
}
const { schedule: ze, cancel: Jn, state: lt, steps: Ju } = /* @__PURE__ */ Cg(typeof requestAnimationFrame < "u" ? requestAnimationFrame : qt, !0);
let eo;
function Xv() {
  eo = void 0;
}
const ct = {
  now: () => (eo === void 0 && ct.set(lt.isProcessing || In.useManualTiming ? lt.timestamp : performance.now()), eo),
  set: (a) => {
    eo = a, queueMicrotask(Xv);
  }
}, Eg = (a) => (l) => typeof l == "string" && l.startsWith(a), Dg = /* @__PURE__ */ Eg("--"), Pv = /* @__PURE__ */ Eg("var(--"), Jc = (a) => Pv(a) ? Qv.test(a.split("/*")[0].trim()) : !1, Qv = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function kh(a) {
  return typeof a != "string" ? !1 : a.split("/*")[0].includes("var(--");
}
const gi = {
  test: (a) => typeof a == "number",
  parse: parseFloat,
  transform: (a) => a
}, Nl = {
  ...gi,
  transform: (a) => tn(0, 1, a)
}, Is = {
  ...gi,
  default: 1
}, gl = (a) => Math.round(a * 1e5) / 1e5, $c = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function Zv(a) {
  return a == null;
}
const Kv = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, Wc = (a, l) => (r) => !!(typeof r == "string" && Kv.test(r) && r.startsWith(a) || l && !Zv(r) && Object.prototype.hasOwnProperty.call(r, l)), Sg = (a, l, r) => (o) => {
  if (typeof o != "string")
    return o;
  const [c, d, f, h] = o.match($c);
  return {
    [a]: parseFloat(c),
    [l]: parseFloat(d),
    [r]: parseFloat(f),
    alpha: h !== void 0 ? parseFloat(h) : 1
  };
}, Iv = (a) => tn(0, 255, a), $u = {
  ...gi,
  transform: (a) => Math.round(Iv(a))
}, Na = {
  test: /* @__PURE__ */ Wc("rgb", "red"),
  parse: /* @__PURE__ */ Sg("red", "green", "blue"),
  transform: ({ red: a, green: l, blue: r, alpha: o = 1 }) => "rgba(" + $u.transform(a) + ", " + $u.transform(l) + ", " + $u.transform(r) + ", " + gl(Nl.transform(o)) + ")"
};
function Jv(a) {
  let l = "", r = "", o = "", c = "";
  return a.length > 5 ? (l = a.substring(1, 3), r = a.substring(3, 5), o = a.substring(5, 7), c = a.substring(7, 9)) : (l = a.substring(1, 2), r = a.substring(2, 3), o = a.substring(3, 4), c = a.substring(4, 5), l += l, r += r, o += o, c += c), {
    red: parseInt(l, 16),
    green: parseInt(r, 16),
    blue: parseInt(o, 16),
    alpha: c ? parseInt(c, 16) / 255 : 1
  };
}
const dc = {
  test: /* @__PURE__ */ Wc("#"),
  parse: Jv,
  transform: Na.transform
}, wl = /* @__NO_SIDE_EFFECTS__ */ (a) => ({
  test: (l) => typeof l == "string" && l.endsWith(a) && l.split(" ").length === 1,
  parse: parseFloat,
  transform: (l) => `${l}${a}`
}), Nn = /* @__PURE__ */ wl("deg"), en = /* @__PURE__ */ wl("%"), ee = /* @__PURE__ */ wl("px"), $v = /* @__PURE__ */ wl("vh"), Wv = /* @__PURE__ */ wl("vw"), Uh = {
  ...en,
  parse: (a) => en.parse(a) / 100,
  transform: (a) => en.transform(a * 100)
}, fi = {
  test: /* @__PURE__ */ Wc("hsl", "hue"),
  parse: /* @__PURE__ */ Sg("hue", "saturation", "lightness"),
  transform: ({ hue: a, saturation: l, lightness: r, alpha: o = 1 }) => "hsla(" + Math.round(a) + ", " + en.transform(gl(l)) + ", " + en.transform(gl(r)) + ", " + gl(Nl.transform(o)) + ")"
}, Ze = {
  test: (a) => Na.test(a) || dc.test(a) || fi.test(a),
  parse: (a) => Na.test(a) ? Na.parse(a) : fi.test(a) ? fi.parse(a) : dc.parse(a),
  transform: (a) => typeof a == "string" ? a : a.hasOwnProperty("red") ? Na.transform(a) : fi.transform(a),
  getAnimatableNone: (a) => {
    const l = Ze.parse(a);
    return l.alpha = 0, Ze.transform(l);
  }
}, ey = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function ty(a) {
  var l, r;
  return isNaN(a) && typeof a == "string" && (((l = a.match($c)) == null ? void 0 : l.length) || 0) + (((r = a.match(ey)) == null ? void 0 : r.length) || 0) > 0;
}
const Ag = "number", Tg = "color", ny = "var", ay = "var(", Lh = "${}", iy = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function pi(a) {
  const l = a.toString(), r = [], o = {
    color: [],
    number: [],
    var: []
  }, c = [];
  let d = 0;
  const h = l.replace(iy, (b) => (Ze.test(b) ? (o.color.push(d), c.push(Tg), r.push(Ze.parse(b))) : b.startsWith(ay) ? (o.var.push(d), c.push(ny), r.push(b)) : (o.number.push(d), c.push(Ag), r.push(parseFloat(b))), ++d, Lh)).split(Lh);
  return { values: r, split: h, indexes: o, types: c };
}
function ly(a) {
  return pi(a).values;
}
function wg({ split: a, types: l }) {
  const r = a.length;
  return (o) => {
    let c = "";
    for (let d = 0; d < r; d++)
      if (c += a[d], o[d] !== void 0) {
        const f = l[d];
        f === Ag ? c += gl(o[d]) : f === Tg ? c += Ze.transform(o[d]) : c += o[d];
      }
    return c;
  };
}
function sy(a) {
  return wg(pi(a));
}
const oy = (a) => typeof a == "number" ? 0 : Ze.test(a) ? Ze.getAnimatableNone(a) : a, ry = (a, l) => typeof a == "number" ? l != null && l.trim().endsWith("/") ? a : 0 : oy(a);
function uy(a) {
  const l = pi(a);
  return wg(l)(l.values.map((o, c) => ry(o, l.split[c])));
}
const Qt = {
  test: ty,
  parse: ly,
  createTransformer: sy,
  getAnimatableNone: uy
};
function Wu(a, l, r) {
  return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? a + (l - a) * 6 * r : r < 1 / 2 ? l : r < 2 / 3 ? a + (l - a) * (2 / 3 - r) * 6 : a;
}
function cy({ hue: a, saturation: l, lightness: r, alpha: o }) {
  a /= 360, l /= 100, r /= 100;
  let c = 0, d = 0, f = 0;
  if (!l)
    c = d = f = r;
  else {
    const h = r < 0.5 ? r * (1 + l) : r + l - r * l, b = 2 * r - h;
    c = Wu(b, h, a + 1 / 3), d = Wu(b, h, a), f = Wu(b, h, a - 1 / 3);
  }
  return {
    red: Math.round(c * 255),
    green: Math.round(d * 255),
    blue: Math.round(f * 255),
    alpha: o
  };
}
function co(a, l) {
  return (r) => r > 0 ? l : a;
}
const Me = (a, l, r) => a + (l - a) * r, ec = (a, l, r) => {
  const o = a * a, c = r * (l * l - o) + o;
  return c < 0 ? 0 : Math.sqrt(c);
}, fy = [dc, Na, fi], my = (a) => fy.find((l) => l.test(a));
function Hh(a) {
  const l = my(a);
  if (Sl(!!l, `'${a}' is not an animatable color. Use the equivalent color code instead.`, "color-not-animatable"), !l)
    return !1;
  let r = l.parse(a);
  return l === fi && (r = cy(r)), r;
}
const qh = (a, l) => {
  const r = Hh(a), o = Hh(l);
  if (!r || !o)
    return co(a, l);
  const c = { ...r };
  return (d) => (c.red = ec(r.red, o.red, d), c.green = ec(r.green, o.green, d), c.blue = ec(r.blue, o.blue, d), c.alpha = Me(r.alpha, o.alpha, d), Na.transform(c));
}, pc = /* @__PURE__ */ new Set(["none", "hidden"]);
function dy(a, l) {
  return pc.has(a) ? (r) => r <= 0 ? a : l : (r) => r >= 1 ? l : a;
}
function py(a, l) {
  return (r) => Me(a, l, r);
}
function ef(a) {
  return typeof a == "number" ? py : typeof a == "string" ? Jc(a) ? co : Ze.test(a) ? qh : xy : Array.isArray(a) ? Vg : typeof a == "object" ? Ze.test(a) ? qh : hy : co;
}
function Vg(a, l) {
  const r = [...a], o = r.length, c = a.map((d, f) => ef(d)(d, l[f]));
  return (d) => {
    for (let f = 0; f < o; f++)
      r[f] = c[f](d);
    return r;
  };
}
function hy(a, l) {
  const r = { ...a, ...l }, o = {};
  for (const c in r)
    a[c] !== void 0 && l[c] !== void 0 && (o[c] = ef(a[c])(a[c], l[c]));
  return (c) => {
    for (const d in o)
      r[d] = o[d](c);
    return r;
  };
}
function gy(a, l) {
  const r = [], o = { color: 0, var: 0, number: 0 };
  for (let c = 0; c < l.values.length; c++) {
    const d = l.types[c], f = a.indexes[d][o[d]], h = a.values[f] ?? 0;
    r[c] = h, o[d]++;
  }
  return r;
}
const xy = (a, l) => {
  const r = Qt.createTransformer(l), o = pi(a), c = pi(l);
  return o.indexes.var.length === c.indexes.var.length && o.indexes.color.length === c.indexes.color.length && o.indexes.number.length >= c.indexes.number.length ? pc.has(a) && !c.values.length || pc.has(l) && !o.values.length ? dy(a, l) : Al(Vg(gy(o, c), c.values), r) : (Sl(!0, `Complex values '${a}' and '${l}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`, "complex-values-different"), co(a, l));
};
function jg(a, l, r) {
  return typeof a == "number" && typeof l == "number" && typeof r == "number" ? Me(a, l, r) : ef(a)(a, l);
}
const by = (a) => {
  const l = ({ timestamp: r }) => a(r);
  return {
    start: (r = !0) => ze.update(l, r),
    stop: () => Jn(l),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => lt.isProcessing ? lt.timestamp : ct.now()
  };
}, Mg = (a, l, r = 10) => {
  let o = "";
  const c = Math.max(Math.round(l / r), 2);
  for (let d = 0; d < c; d++)
    o += Math.round(a(d / (c - 1)) * 1e4) / 1e4 + ", ";
  return `linear(${o.substring(0, o.length - 2)})`;
}, fo = 2e4;
function tf(a) {
  let l = 0;
  const r = 50;
  let o = a.next(l);
  for (; !o.done && l < fo; )
    l += r, o = a.next(l);
  return l >= fo ? 1 / 0 : l;
}
function vy(a, l = 100, r) {
  const o = r({ ...a, keyframes: [0, l] }), c = Math.min(tf(o), fo);
  return {
    type: "keyframes",
    ease: (d) => o.next(c * d).value / l,
    duration: /* @__PURE__ */ Ht(c)
  };
}
const Be = {
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
function hc(a, l) {
  return a * Math.sqrt(1 - l * l);
}
const yy = 12;
function Ny(a, l, r) {
  let o = r;
  for (let c = 1; c < yy; c++)
    o = o - a(o) / l(o);
  return o;
}
const tc = 1e-3;
function Cy({ duration: a = Be.duration, bounce: l = Be.bounce, velocity: r = Be.velocity, mass: o = Be.mass }) {
  let c, d;
  Sl(a <= /* @__PURE__ */ vt(Be.maxDuration), "Spring duration must be 10 seconds or less", "spring-duration-limit");
  let f = 1 - l;
  f = tn(Be.minDamping, Be.maxDamping, f), a = tn(Be.minDuration, Be.maxDuration, /* @__PURE__ */ Ht(a)), f < 1 ? (c = (g) => {
    const v = g * f, y = v * a, N = v - r, S = hc(g, f), T = Math.exp(-y);
    return tc - N / S * T;
  }, d = (g) => {
    const y = g * f * a, N = y * r + r, S = Math.pow(f, 2) * Math.pow(g, 2) * a, T = Math.exp(-y), U = hc(Math.pow(g, 2), f);
    return (-c(g) + tc > 0 ? -1 : 1) * ((N - S) * T) / U;
  }) : (c = (g) => {
    const v = Math.exp(-g * a), y = (g - r) * a + 1;
    return -tc + v * y;
  }, d = (g) => {
    const v = Math.exp(-g * a), y = (r - g) * (a * a);
    return v * y;
  });
  const h = 5 / a, b = Ny(c, d, h);
  if (a = /* @__PURE__ */ vt(a), isNaN(b))
    return {
      stiffness: Be.stiffness,
      damping: Be.damping,
      duration: a
    };
  {
    const g = Math.pow(b, 2) * o;
    return {
      stiffness: g,
      damping: f * 2 * Math.sqrt(o * g),
      duration: a
    };
  }
}
const Ey = ["duration", "bounce"], Dy = ["stiffness", "damping", "mass"];
function Fh(a, l) {
  return l.some((r) => a[r] !== void 0);
}
function Sy(a) {
  let l = {
    velocity: Be.velocity,
    stiffness: Be.stiffness,
    damping: Be.damping,
    mass: Be.mass,
    isResolvedFromDuration: !1,
    ...a
  };
  if (!Fh(a, Dy) && Fh(a, Ey))
    if (l.velocity = 0, a.visualDuration) {
      const r = a.visualDuration, o = 2 * Math.PI / (r * 1.2), c = o * o, d = 2 * tn(0.05, 1, 1 - (a.bounce || 0)) * Math.sqrt(c);
      l = {
        ...l,
        mass: Be.mass,
        stiffness: c,
        damping: d
      };
    } else {
      const r = Cy({ ...a, velocity: 0 });
      l = {
        ...l,
        ...r,
        mass: Be.mass
      }, l.isResolvedFromDuration = !0;
    }
  return l;
}
function mo(a = Be.visualDuration, l = Be.bounce) {
  const r = typeof a != "object" ? {
    visualDuration: a,
    keyframes: [0, 1],
    bounce: l
  } : a;
  let { restSpeed: o, restDelta: c } = r;
  const d = r.keyframes[0], f = r.keyframes[r.keyframes.length - 1], h = { done: !1, value: d }, { stiffness: b, damping: g, mass: v, duration: y, velocity: N, isResolvedFromDuration: S } = Sy({
    ...r,
    velocity: -/* @__PURE__ */ Ht(r.velocity || 0)
  }), T = N || 0, U = g / (2 * Math.sqrt(b * v)), M = f - d, B = /* @__PURE__ */ Ht(Math.sqrt(b / v)), H = Math.abs(M) < 5;
  o || (o = H ? Be.restSpeed.granular : Be.restSpeed.default), c || (c = H ? Be.restDelta.granular : Be.restDelta.default);
  let q, F, J, P, G, X;
  if (U < 1)
    J = hc(B, U), P = (T + U * B * M) / J, q = (K) => {
      const ge = Math.exp(-U * B * K);
      return f - ge * (P * Math.sin(J * K) + M * Math.cos(J * K));
    }, G = U * B * P + M * J, X = U * B * M - P * J, F = (K) => Math.exp(-U * B * K) * (G * Math.sin(J * K) + X * Math.cos(J * K));
  else if (U === 1) {
    q = (ge) => f - Math.exp(-B * ge) * (M + (T + B * M) * ge);
    const K = T + B * M;
    F = (ge) => Math.exp(-B * ge) * (B * K * ge - T);
  } else {
    const K = B * Math.sqrt(U * U - 1);
    q = (Ge) => {
      const Le = Math.exp(-U * B * Ge), R = Math.min(K * Ge, 300);
      return f - Le * ((T + U * B * M) * Math.sinh(R) + K * M * Math.cosh(R)) / K;
    };
    const ge = (T + U * B * M) / K, ve = U * B * ge - M * K, We = U * B * M - ge * K;
    F = (Ge) => {
      const Le = Math.exp(-U * B * Ge), R = Math.min(K * Ge, 300);
      return Le * (ve * Math.sinh(R) + We * Math.cosh(R));
    };
  }
  const W = {
    calculatedDuration: S && y || null,
    velocity: (K) => /* @__PURE__ */ vt(F(K)),
    next: (K) => {
      if (!S && U < 1) {
        const ve = Math.exp(-U * B * K), We = Math.sin(J * K), Ge = Math.cos(J * K), Le = f - ve * (P * We + M * Ge), R = /* @__PURE__ */ vt(ve * (G * We + X * Ge));
        return h.done = Math.abs(R) <= o && Math.abs(f - Le) <= c, h.value = h.done ? f : Le, h;
      }
      const ge = q(K);
      if (S)
        h.done = K >= y;
      else {
        const ve = /* @__PURE__ */ vt(F(K));
        h.done = Math.abs(ve) <= o && Math.abs(f - ge) <= c;
      }
      return h.value = h.done ? f : ge, h;
    },
    toString: () => {
      const K = Math.min(tf(W), fo), ge = Mg((ve) => W.next(K * ve).value, K, 30);
      return K + "ms " + ge;
    },
    toTransition: () => {
    }
  };
  return W;
}
mo.applyToOptions = (a) => {
  const l = vy(a, 100, mo);
  return a.ease = l.ease, a.duration = /* @__PURE__ */ vt(l.duration), a.type = "keyframes", a;
};
const Ay = 5;
function zg(a, l, r) {
  const o = Math.max(l - Ay, 0);
  return /* @__PURE__ */ fg(r - a(o), l - o);
}
function gc({ keyframes: a, velocity: l = 0, power: r = 0.8, timeConstant: o = 325, bounceDamping: c = 10, bounceStiffness: d = 500, modifyTarget: f, min: h, max: b, restDelta: g = 0.5, restSpeed: v }) {
  const y = a[0], N = {
    done: !1,
    value: y
  }, S = (X) => h !== void 0 && X < h || b !== void 0 && X > b, T = (X) => h === void 0 ? b : b === void 0 || Math.abs(h - X) < Math.abs(b - X) ? h : b;
  let U = r * l;
  const M = y + U, B = f === void 0 ? M : f(M);
  B !== M && (U = B - y);
  const H = (X) => -U * Math.exp(-X / o), q = (X) => B + H(X), F = (X) => {
    const W = H(X), K = q(X);
    N.done = Math.abs(W) <= g, N.value = N.done ? B : K;
  };
  let J, P;
  const G = (X) => {
    S(N.value) && (J = X, P = mo({
      keyframes: [N.value, T(N.value)],
      velocity: zg(q, X, N.value),
      // TODO: This should be passing * 1000
      damping: c,
      stiffness: d,
      restDelta: g,
      restSpeed: v
    }));
  };
  return G(0), {
    calculatedDuration: null,
    next: (X) => {
      let W = !1;
      return !P && J === void 0 && (W = !0, F(X), G(X)), J !== void 0 && X >= J ? P.next(X - J) : (!W && F(X), N);
    }
  };
}
function Ty(a, l, r) {
  const o = [], c = r || In.mix || jg, d = a.length - 1;
  for (let f = 0; f < d; f++) {
    let h = c(a[f], a[f + 1]);
    if (l) {
      const b = Array.isArray(l) ? l[f] || qt : l;
      h = Al(b, h);
    }
    o.push(h);
  }
  return o;
}
function wy(a, l, { clamp: r = !0, ease: o, mixer: c } = {}) {
  const d = a.length;
  if (Sa(d === l.length, "Both input and output ranges must be the same length", "range-length"), d === 1)
    return () => l[0];
  if (d === 2 && l[0] === l[1])
    return () => l[1];
  const f = a[0] === a[1];
  a[0] > a[d - 1] && (a = [...a].reverse(), l = [...l].reverse());
  const h = Ty(l, o, c), b = h.length, g = (v) => {
    if (f && v < a[0])
      return l[0];
    let y = 0;
    if (b > 1)
      for (; y < a.length - 2 && !(v < a[y + 1]); y++)
        ;
    const N = /* @__PURE__ */ yl(a[y], a[y + 1], v);
    return h[y](N);
  };
  return r ? (v) => g(tn(a[0], a[d - 1], v)) : g;
}
function Vy(a, l) {
  const r = a[a.length - 1];
  for (let o = 1; o <= l; o++) {
    const c = /* @__PURE__ */ yl(0, l, o);
    a.push(Me(r, 1, c));
  }
}
function jy(a) {
  const l = [0];
  return Vy(l, a.length - 1), l;
}
function My(a, l) {
  return a.map((r) => r * l);
}
function zy(a, l) {
  return a.map(() => l || yg).splice(0, a.length - 1);
}
function xl({ duration: a = 300, keyframes: l, times: r, ease: o = "easeInOut" }) {
  const c = /* @__PURE__ */ qv(o) ? o.map(Bh) : Bh(o), d = {
    done: !1,
    value: l[0]
  }, f = My(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    r && r.length === l.length ? r : jy(l),
    a
  ), h = wy(f, l, {
    ease: Array.isArray(c) ? c : zy(l, c)
  });
  return {
    calculatedDuration: a,
    next: (b) => (d.value = h(b), d.done = b >= a, d)
  };
}
const Ry = (a) => a !== null;
function Co(a, { repeat: l, repeatType: r = "loop" }, o, c = 1) {
  const d = a.filter(Ry), h = c < 0 || l && r !== "loop" && l % 2 === 1 ? 0 : d.length - 1;
  return !h || o === void 0 ? d[h] : o;
}
const _y = {
  decay: gc,
  inertia: gc,
  tween: xl,
  keyframes: xl,
  spring: mo
};
function Rg(a) {
  typeof a.type == "string" && (a.type = _y[a.type]);
}
class nf {
  constructor() {
    this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this._finished = new Promise((l) => {
      this.resolve = l;
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
  then(l, r) {
    return this.finished.then(l, r);
  }
}
const Oy = (a) => a / 100;
class po extends nf {
  constructor(l) {
    super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.delayState = {
      done: !1,
      value: void 0
    }, this.stop = () => {
      var o, c;
      const { motionValue: r } = this.options;
      r && r.updatedAt !== ct.now() && this.tick(ct.now()), this.isStopped = !0, this.state !== "idle" && (this.teardown(), (c = (o = this.options).onStop) == null || c.call(o));
    }, this.options = l, this.initAnimation(), this.play(), l.autoplay === !1 && this.pause();
  }
  initAnimation() {
    const { options: l } = this;
    Rg(l);
    const { type: r = xl, repeat: o = 0, repeatDelay: c = 0, repeatType: d, velocity: f = 0 } = l;
    let { keyframes: h } = l;
    const b = r || xl;
    b !== xl && typeof h[0] != "number" && (this.mixKeyframes = Al(Oy, jg(h[0], h[1])), h = [0, 100]);
    const g = b({ ...l, keyframes: h });
    d === "mirror" && (this.mirroredGenerator = b({
      ...l,
      keyframes: [...h].reverse(),
      velocity: -f
    })), g.calculatedDuration === null && (g.calculatedDuration = tf(g));
    const { calculatedDuration: v } = g;
    this.calculatedDuration = v, this.resolvedDuration = v + c, this.totalDuration = this.resolvedDuration * (o + 1) - c, this.generator = g;
  }
  updateTime(l) {
    const r = Math.round(l - this.startTime) * this.playbackSpeed;
    this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = r;
  }
  tick(l, r = !1) {
    const { generator: o, totalDuration: c, mixKeyframes: d, mirroredGenerator: f, resolvedDuration: h, calculatedDuration: b } = this;
    if (this.startTime === null)
      return o.next(0);
    const { delay: g = 0, keyframes: v, repeat: y, repeatType: N, repeatDelay: S, type: T, onUpdate: U, finalKeyframe: M } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, l) : this.speed < 0 && (this.startTime = Math.min(l - c / this.speed, this.startTime)), r ? this.currentTime = l : this.updateTime(l);
    const B = this.currentTime - g * (this.playbackSpeed >= 0 ? 1 : -1), H = this.playbackSpeed >= 0 ? B < 0 : B > c;
    this.currentTime = Math.max(B, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = c);
    let q = this.currentTime, F = o;
    if (y) {
      const X = Math.min(this.currentTime, c) / h;
      let W = Math.floor(X), K = X % 1;
      !K && X >= 1 && (K = 1), K === 1 && W--, W = Math.min(W, y + 1), !!(W % 2) && (N === "reverse" ? (K = 1 - K, S && (K -= S / h)) : N === "mirror" && (F = f)), q = tn(0, 1, K) * h;
    }
    let J;
    H ? (this.delayState.value = v[0], J = this.delayState) : J = F.next(q), d && !H && (J.value = d(J.value));
    let { done: P } = J;
    !H && b !== null && (P = this.playbackSpeed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
    const G = this.holdTime === null && (this.state === "finished" || this.state === "running" && P);
    return G && T !== gc && (J.value = Co(v, this.options, M, this.speed)), U && U(J.value), G && this.finish(), J;
  }
  /**
   * Allows the returned animation to be awaited or promise-chained. Currently
   * resolves when the animation finishes at all but in a future update could/should
   * reject if its cancels.
   */
  then(l, r) {
    return this.finished.then(l, r);
  }
  get duration() {
    return /* @__PURE__ */ Ht(this.calculatedDuration);
  }
  get iterationDuration() {
    const { delay: l = 0 } = this.options || {};
    return this.duration + /* @__PURE__ */ Ht(l);
  }
  get time() {
    return /* @__PURE__ */ Ht(this.currentTime);
  }
  set time(l) {
    l = /* @__PURE__ */ vt(l), this.currentTime = l, this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = l : this.driver && (this.startTime = this.driver.now() - l / this.playbackSpeed), this.driver ? this.driver.start(!1) : (this.startTime = 0, this.state = "paused", this.holdTime = l, this.tick(l));
  }
  /**
   * Returns the generator's velocity at the current time in units/second.
   * Uses the analytical derivative when available (springs), avoiding
   * the MotionValue's frame-dependent velocity estimation.
   */
  getGeneratorVelocity() {
    const l = this.currentTime;
    if (l <= 0)
      return this.options.velocity || 0;
    if (this.generator.velocity)
      return this.generator.velocity(l);
    const r = this.generator.next(l).value;
    return zg((o) => this.generator.next(o).value, l, r);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(l) {
    const r = this.playbackSpeed !== l;
    r && this.driver && this.updateTime(ct.now()), this.playbackSpeed = l, r && this.driver && (this.time = /* @__PURE__ */ Ht(this.currentTime));
  }
  play() {
    var c, d;
    if (this.isStopped)
      return;
    const { driver: l = by, startTime: r } = this.options;
    this.driver || (this.driver = l((f) => this.tick(f))), (d = (c = this.options).onPlay) == null || d.call(c);
    const o = this.driver.now();
    this.state === "finished" ? (this.updateFinished(), this.startTime = o) : this.holdTime !== null ? this.startTime = o - this.holdTime : this.startTime || (this.startTime = r ?? o), this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start();
  }
  pause() {
    this.state = "paused", this.updateTime(ct.now()), this.holdTime = this.currentTime;
  }
  complete() {
    this.state !== "running" && this.play(), this.state = "finished", this.holdTime = null;
  }
  finish() {
    var l, r;
    this.notifyFinished(), this.teardown(), this.state = "finished", (r = (l = this.options).onComplete) == null || r.call(l);
  }
  cancel() {
    var l, r;
    this.holdTime = null, this.startTime = 0, this.tick(0), this.teardown(), (r = (l = this.options).onCancel) == null || r.call(l);
  }
  teardown() {
    this.state = "idle", this.stopDriver(), this.startTime = this.holdTime = null;
  }
  stopDriver() {
    this.driver && (this.driver.stop(), this.driver = void 0);
  }
  sample(l) {
    return this.startTime = 0, this.tick(l, !0);
  }
  attachTimeline(l) {
    var r;
    return this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear", this.initAnimation()), (r = this.driver) == null || r.stop(), l.observe(this);
  }
}
function By(a) {
  for (let l = 1; l < a.length; l++)
    a[l] ?? (a[l] = a[l - 1]);
}
const Ca = (a) => a * 180 / Math.PI, xc = (a) => {
  const l = Ca(Math.atan2(a[1], a[0]));
  return bc(l);
}, ky = {
  x: 4,
  y: 5,
  translateX: 4,
  translateY: 5,
  scaleX: 0,
  scaleY: 3,
  scale: (a) => (Math.abs(a[0]) + Math.abs(a[3])) / 2,
  rotate: xc,
  rotateZ: xc,
  skewX: (a) => Ca(Math.atan(a[1])),
  skewY: (a) => Ca(Math.atan(a[2])),
  skew: (a) => (Math.abs(a[1]) + Math.abs(a[2])) / 2
}, bc = (a) => (a = a % 360, a < 0 && (a += 360), a), Gh = xc, Yh = (a) => Math.sqrt(a[0] * a[0] + a[1] * a[1]), Xh = (a) => Math.sqrt(a[4] * a[4] + a[5] * a[5]), Uy = {
  x: 12,
  y: 13,
  z: 14,
  translateX: 12,
  translateY: 13,
  translateZ: 14,
  scaleX: Yh,
  scaleY: Xh,
  scale: (a) => (Yh(a) + Xh(a)) / 2,
  rotateX: (a) => bc(Ca(Math.atan2(a[6], a[5]))),
  rotateY: (a) => bc(Ca(Math.atan2(-a[2], a[0]))),
  rotateZ: Gh,
  rotate: Gh,
  skewX: (a) => Ca(Math.atan(a[4])),
  skewY: (a) => Ca(Math.atan(a[1])),
  skew: (a) => (Math.abs(a[1]) + Math.abs(a[4])) / 2
};
function vc(a) {
  return a.includes("scale") ? 1 : 0;
}
function yc(a, l) {
  if (!a || a === "none")
    return vc(l);
  const r = a.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let o, c;
  if (r)
    o = Uy, c = r;
  else {
    const h = a.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    o = ky, c = h;
  }
  if (!c)
    return vc(l);
  const d = o[l], f = c[1].split(",").map(Hy);
  return typeof d == "function" ? d(f) : f[d];
}
const Ly = (a, l) => {
  const { transform: r = "none" } = getComputedStyle(a);
  return yc(r, l);
};
function Hy(a) {
  return parseFloat(a.trim());
}
const xi = [
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
], bi = /* @__PURE__ */ new Set([...xi, "pathRotation"]), Ph = (a) => a === gi || a === ee, qy = /* @__PURE__ */ new Set(["x", "y", "z"]), Fy = xi.filter((a) => !qy.has(a));
function Gy(a) {
  const l = [];
  return Fy.forEach((r) => {
    const o = a.getValue(r);
    o !== void 0 && (l.push([r, o.get()]), o.set(r.startsWith("scale") ? 1 : 0));
  }), l;
}
const Kn = {
  // Dimensions
  width: ({ x: a }, { paddingLeft: l = "0", paddingRight: r = "0", boxSizing: o }) => {
    const c = a.max - a.min;
    return o === "border-box" ? c : c - parseFloat(l) - parseFloat(r);
  },
  height: ({ y: a }, { paddingTop: l = "0", paddingBottom: r = "0", boxSizing: o }) => {
    const c = a.max - a.min;
    return o === "border-box" ? c : c - parseFloat(l) - parseFloat(r);
  },
  top: (a, { top: l }) => parseFloat(l),
  left: (a, { left: l }) => parseFloat(l),
  bottom: ({ y: a }, { top: l }) => parseFloat(l) + (a.max - a.min),
  right: ({ x: a }, { left: l }) => parseFloat(l) + (a.max - a.min),
  // Transform
  x: (a, { transform: l }) => yc(l, "x"),
  y: (a, { transform: l }) => yc(l, "y")
};
Kn.translateX = Kn.x;
Kn.translateY = Kn.y;
const Ea = /* @__PURE__ */ new Set();
let Nc = !1, Cc = !1, Ec = !1;
function _g() {
  if (Cc) {
    const a = Array.from(Ea).filter((o) => o.needsMeasurement), l = new Set(a.map((o) => o.element)), r = /* @__PURE__ */ new Map();
    l.forEach((o) => {
      const c = Gy(o);
      c.length && (r.set(o, c), o.render());
    }), a.forEach((o) => o.measureInitialState()), l.forEach((o) => {
      o.render();
      const c = r.get(o);
      c && c.forEach(([d, f]) => {
        var h;
        (h = o.getValue(d)) == null || h.set(f);
      });
    }), a.forEach((o) => o.measureEndState()), a.forEach((o) => {
      o.suspendedScrollY !== void 0 && window.scrollTo(0, o.suspendedScrollY);
    });
  }
  Cc = !1, Nc = !1, Ea.forEach((a) => a.complete(Ec)), Ea.clear();
}
function Og() {
  Ea.forEach((a) => {
    a.readKeyframes(), a.needsMeasurement && (Cc = !0);
  });
}
function Yy() {
  Ec = !0, Og(), _g(), Ec = !1;
}
class af {
  constructor(l, r, o, c, d, f = !1) {
    this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...l], this.onComplete = r, this.name = o, this.motionValue = c, this.element = d, this.isAsync = f;
  }
  scheduleResolve() {
    this.state = "scheduled", this.isAsync ? (Ea.add(this), Nc || (Nc = !0, ze.read(Og), ze.resolveKeyframes(_g))) : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const { unresolvedKeyframes: l, name: r, element: o, motionValue: c } = this;
    if (l[0] === null) {
      const d = c == null ? void 0 : c.get(), f = l[l.length - 1];
      if (d !== void 0)
        l[0] = d;
      else if (o && r) {
        const h = o.readValue(r, f);
        h != null && (l[0] = h);
      }
      l[0] === void 0 && (l[0] = f), c && d === void 0 && c.set(l[0]);
    }
    By(l);
  }
  setFinalKeyframe() {
  }
  measureInitialState() {
  }
  renderEndStyles() {
  }
  measureEndState() {
  }
  complete(l = !1) {
    this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, l), Ea.delete(this);
  }
  cancel() {
    this.state === "scheduled" && (Ea.delete(this), this.state = "pending");
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const Xy = (a) => a.startsWith("--");
function Bg(a, l, r) {
  Xy(l) ? a.style.setProperty(l, r) : a.style[l] = r;
}
const Py = {};
function kg(a, l) {
  const r = /* @__PURE__ */ cg(a);
  return () => Py[l] ?? r();
}
const Qy = /* @__PURE__ */ kg(() => window.ScrollTimeline !== void 0, "scrollTimeline"), Ug = /* @__PURE__ */ kg(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing"), hl = ([a, l, r, o]) => `cubic-bezier(${a}, ${l}, ${r}, ${o})`, Qh = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ hl([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ hl([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ hl([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ hl([0.33, 1.53, 0.69, 0.99])
};
function Lg(a, l) {
  if (a)
    return typeof a == "function" ? Ug() ? Mg(a, l) : "ease-out" : /* @__PURE__ */ Ng(a) ? hl(a) : Array.isArray(a) ? a.map((r) => Lg(r, l) || Qh.easeOut) : Qh[a];
}
function Zy(a, l, r, { delay: o = 0, duration: c = 300, repeat: d = 0, repeatType: f = "loop", ease: h = "easeOut", times: b } = {}, g = void 0) {
  const v = {
    [l]: r
  };
  b && (v.offset = b);
  const y = Lg(h, c);
  Array.isArray(y) && (v.easing = y);
  const N = {
    delay: o,
    duration: c,
    easing: Array.isArray(y) ? "linear" : y,
    fill: "both",
    iterations: d + 1,
    direction: f === "reverse" ? "alternate" : "normal"
  };
  return g && (N.pseudoElement = g), a.animate(v, N);
}
function Hg(a) {
  return typeof a == "function" && "applyToOptions" in a;
}
function Ky({ type: a, ...l }) {
  return Hg(a) && Ug() ? a.applyToOptions(l) : (l.duration ?? (l.duration = 300), l.ease ?? (l.ease = "easeOut"), l);
}
class qg extends nf {
  constructor(l) {
    if (super(), this.finishedTime = null, this.isStopped = !1, this.manualStartTime = null, !l)
      return;
    const { element: r, name: o, keyframes: c, pseudoElement: d, allowFlatten: f = !1, finalKeyframe: h, onComplete: b } = l;
    this.isPseudoElement = !!d, this.allowFlatten = f, this.options = l, Sa(typeof l.type != "string", `Mini animate() doesn't support "type" as a string.`, "mini-spring");
    const g = Ky(l);
    this.animation = Zy(r, o, c, g, d), g.autoplay === !1 && this.animation.pause(), this.animation.onfinish = () => {
      if (this.finishedTime = this.time, !d) {
        const v = Co(c, this.options, h, this.speed);
        this.updateMotionValue && this.updateMotionValue(v), Bg(r, o, v), this.animation.cancel();
      }
      b == null || b(), this.notifyFinished();
    };
  }
  play() {
    this.isStopped || (this.manualStartTime = null, this.animation.play(), this.state === "finished" && this.updateFinished());
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    var l, r;
    (r = (l = this.animation).finish) == null || r.call(l);
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
    const { state: l } = this;
    l === "idle" || l === "finished" || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel());
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
    var r, o, c;
    const l = (r = this.options) == null ? void 0 : r.element;
    !this.isPseudoElement && (l != null && l.isConnected) && ((c = (o = this.animation).commitStyles) == null || c.call(o));
  }
  get duration() {
    var r, o;
    const l = ((o = (r = this.animation.effect) == null ? void 0 : r.getComputedTiming) == null ? void 0 : o.call(r).duration) || 0;
    return /* @__PURE__ */ Ht(Number(l));
  }
  get iterationDuration() {
    const { delay: l = 0 } = this.options || {};
    return this.duration + /* @__PURE__ */ Ht(l);
  }
  get time() {
    return /* @__PURE__ */ Ht(Number(this.animation.currentTime) || 0);
  }
  set time(l) {
    const r = this.finishedTime !== null;
    this.manualStartTime = null, this.finishedTime = null, this.animation.currentTime = /* @__PURE__ */ vt(l), r && this.animation.pause();
  }
  /**
   * The playback speed of the animation.
   * 1 = normal speed, 2 = double speed, 0.5 = half speed.
   */
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(l) {
    l < 0 && (this.finishedTime = null), this.animation.playbackRate = l;
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState;
  }
  get startTime() {
    return this.manualStartTime ?? Number(this.animation.startTime);
  }
  set startTime(l) {
    this.manualStartTime = this.animation.startTime = l;
  }
  /**
   * Attaches a timeline to the animation, for instance the `ScrollTimeline`.
   */
  attachTimeline({ timeline: l, rangeStart: r, rangeEnd: o, observe: c }) {
    var d;
    return this.allowFlatten && ((d = this.animation.effect) == null || d.updateTiming({ easing: "linear" })), this.animation.onfinish = null, l && Qy() ? (this.animation.timeline = l, r && (this.animation.rangeStart = r), o && (this.animation.rangeEnd = o), qt) : c(this);
  }
}
const Fg = {
  anticipate: xg,
  backInOut: gg,
  circInOut: vg
};
function Iy(a) {
  return a in Fg;
}
function Jy(a) {
  typeof a.ease == "string" && Iy(a.ease) && (a.ease = Fg[a.ease]);
}
const nc = 10;
class $y extends qg {
  constructor(l) {
    Jy(l), Rg(l), super(l), l.startTime !== void 0 && l.autoplay !== !1 && (this.startTime = l.startTime), this.options = l;
  }
  /**
   * WAAPI doesn't natively have any interruption capabilities.
   *
   * Rather than read committed styles back out of the DOM, we can
   * create a renderless JS animation and sample it twice to calculate
   * its current value, "previous" value, and therefore allow
   * Motion to calculate velocity for any subsequent animation.
   */
  updateMotionValue(l) {
    const { motionValue: r, onUpdate: o, onComplete: c, element: d, ...f } = this.options;
    if (!r)
      return;
    if (l !== void 0) {
      r.set(l);
      return;
    }
    const h = new po({
      ...f,
      autoplay: !1
    }), b = Math.max(nc, ct.now() - this.startTime), g = tn(0, nc, b - nc), v = h.sample(b).value, { name: y } = this.options;
    d && y && Bg(d, y, v), r.setWithVelocity(h.sample(Math.max(0, b - g)).value, v, g), h.stop();
  }
}
const Zh = (a, l) => l === "zIndex" ? !1 : !!(typeof a == "number" || Array.isArray(a) || typeof a == "string" && // It's animatable if we have a string
(Qt.test(a) || a === "0") && // And it contains numbers and/or colors
!a.startsWith("url("));
function Wy(a) {
  const l = a[0];
  if (a.length === 1)
    return !0;
  for (let r = 0; r < a.length; r++)
    if (a[r] !== l)
      return !0;
}
function eN(a, l, r, o) {
  const c = a[0];
  if (c === null)
    return !1;
  if (l === "display" || l === "visibility")
    return !0;
  const d = a[a.length - 1], f = Zh(c, l), h = Zh(d, l);
  return Sl(f === h, `You are trying to animate ${l} from "${c}" to "${d}". "${f ? d : c}" is not an animatable value.`, "value-not-animatable"), !f || !h ? !1 : Wy(a) || (r === "spring" || Hg(r)) && o;
}
function Dc(a) {
  a.duration = 0, a.type = "keyframes";
}
const Gg = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform"
  // TODO: Can be accelerated but currently disabled until https://issues.chromium.org/issues/41491098 is resolved
  // or until we implement support for linear() easing.
  // "background-color"
]), tN = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
function nN(a) {
  for (let l = 0; l < a.length; l++)
    if (typeof a[l] == "string" && tN.test(a[l]))
      return !0;
  return !1;
}
const aN = /* @__PURE__ */ new Set([
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
]), iN = /* @__PURE__ */ cg(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function lN(a) {
  var y;
  const { motionValue: l, name: r, repeatDelay: o, repeatType: c, damping: d, type: f, keyframes: h } = a;
  if (!(((y = l == null ? void 0 : l.owner) == null ? void 0 : y.current) instanceof HTMLElement))
    return !1;
  const { onUpdate: g, transformTemplate: v } = l.owner.getProps();
  return iN() && r && /**
   * Force WAAPI for color properties with browser-only color formats
   * (oklch, oklab, lab, lch, etc.) that the JS animation path can't parse.
   */
  (Gg.has(r) || aN.has(r) && nN(h)) && (r !== "transform" || !v) && /**
   * If we're outputting values to onUpdate then we can't use WAAPI as there's
   * no way to read the value from WAAPI every frame.
   */
  !g && !o && c !== "mirror" && d !== 0 && f !== "inertia";
}
const sN = 40;
class oN extends nf {
  constructor({ autoplay: l = !0, delay: r = 0, type: o = "keyframes", repeat: c = 0, repeatDelay: d = 0, repeatType: f = "loop", keyframes: h, name: b, motionValue: g, element: v, ...y }) {
    var T;
    super(), this.stop = () => {
      var U, M;
      this._animation && (this._animation.stop(), (U = this.stopTimeline) == null || U.call(this)), (M = this.keyframeResolver) == null || M.cancel();
    }, this.createdAt = ct.now();
    const N = {
      autoplay: l,
      delay: r,
      type: o,
      repeat: c,
      repeatDelay: d,
      repeatType: f,
      name: b,
      motionValue: g,
      element: v,
      ...y
    }, S = (v == null ? void 0 : v.KeyframeResolver) || af;
    this.keyframeResolver = new S(h, (U, M, B) => this.onKeyframesResolved(U, M, N, !B), b, g, v), (T = this.keyframeResolver) == null || T.scheduleResolve();
  }
  onKeyframesResolved(l, r, o, c) {
    var B, H;
    this.keyframeResolver = void 0;
    const { name: d, type: f, velocity: h, delay: b, isHandoff: g, onUpdate: v } = o;
    this.resolvedAt = ct.now();
    let y = !0;
    eN(l, d, f, h) || (y = !1, (In.instantAnimations || !b) && (v == null || v(Co(l, o, r))), l[0] = l[l.length - 1], Dc(o), o.repeat = 0);
    const S = {
      startTime: c ? this.resolvedAt ? this.resolvedAt - this.createdAt > sN ? this.resolvedAt : this.createdAt : this.createdAt : void 0,
      finalKeyframe: r,
      ...o,
      keyframes: l
    }, T = y && !g && lN(S), U = (H = (B = S.motionValue) == null ? void 0 : B.owner) == null ? void 0 : H.current;
    let M;
    if (T)
      try {
        M = new $y({
          ...S,
          element: U
        });
      } catch {
        M = new po(S);
      }
    else
      M = new po(S);
    M.finished.then(() => {
      this.notifyFinished();
    }).catch(qt), this.pendingTimeline && (this.stopTimeline = M.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = M;
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(l, r) {
    return this.finished.finally(l).then(() => {
    });
  }
  get animation() {
    var l;
    return this._animation || ((l = this.keyframeResolver) == null || l.resume(), Yy()), this._animation;
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
  set time(l) {
    this.animation.time = l;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(l) {
    this.animation.speed = l;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(l) {
    return this._animation ? this.stopTimeline = this.animation.attachTimeline(l) : this.pendingTimeline = l, () => this.stop();
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
    var l;
    this._animation && this.animation.cancel(), (l = this.keyframeResolver) == null || l.cancel();
  }
}
function Yg(a, l, r, o = 0, c = 1) {
  const d = Array.from(a).sort((g, v) => g.sortNodePosition(v)).indexOf(l), f = a.size, h = (f - 1) * o;
  return typeof r == "function" ? r(d, f) : c === 1 ? d * o : h - d * o;
}
const Kh = 30, rN = (a) => !isNaN(parseFloat(a));
class uN {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   */
  constructor(l, r = {}) {
    this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (o) => {
      var d;
      const c = ct.now();
      if (this.updatedAt !== c && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(o), this.current !== this.prev && ((d = this.events.change) == null || d.notify(this.current), this.dependents))
        for (const f of this.dependents)
          f.dirty();
    }, this.hasAnimated = !1, this.setCurrent(l), this.owner = r.owner;
  }
  setCurrent(l) {
    this.current = l, this.updatedAt = ct.now(), this.canTrackVelocity === null && l !== void 0 && (this.canTrackVelocity = rN(this.current));
  }
  setPrevFrameValue(l = this.current) {
    this.prevFrameValue = l, this.prevUpdatedAt = this.updatedAt;
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
  onChange(l) {
    return this.on("change", l);
  }
  on(l, r) {
    this.events[l] || (this.events[l] = new Zc());
    const o = this.events[l].add(r);
    return l === "change" ? () => {
      o(), ze.read(() => {
        this.events.change.getSize() || this.stop();
      });
    } : o;
  }
  clearListeners() {
    for (const l in this.events)
      this.events[l].clear();
  }
  /**
   * Attaches a passive effect to the `MotionValue`.
   */
  attach(l, r) {
    this.passiveEffect = l, this.stopPassiveEffect = r;
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
  set(l) {
    this.passiveEffect ? this.passiveEffect(l, this.updateAndNotify) : this.updateAndNotify(l);
  }
  setWithVelocity(l, r, o) {
    this.set(r), this.prev = void 0, this.prevFrameValue = l, this.prevUpdatedAt = this.updatedAt - o;
  }
  /**
   * Set the state of the `MotionValue`, stopping any active animations,
   * effects, and resets velocity to `0`.
   */
  jump(l, r = !0) {
    this.updateAndNotify(l), this.prev = l, this.prevUpdatedAt = this.prevFrameValue = void 0, r && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
  dirty() {
    var l;
    (l = this.events.change) == null || l.notify(this.current);
  }
  addDependent(l) {
    this.dependents || (this.dependents = /* @__PURE__ */ new Set()), this.dependents.add(l);
  }
  removeDependent(l) {
    this.dependents && this.dependents.delete(l);
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
    const l = ct.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || l - this.updatedAt > Kh)
      return 0;
    const r = Math.min(this.updatedAt - this.prevUpdatedAt, Kh);
    return /* @__PURE__ */ fg(parseFloat(this.current) - parseFloat(this.prevFrameValue), r);
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
  start(l) {
    return this.stop(), new Promise((r) => {
      this.hasAnimated = !0, this.animation = l(r), this.events.animationStart && this.events.animationStart.notify();
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
    var l, r;
    (l = this.dependents) == null || l.clear(), (r = this.events.destroy) == null || r.notify(), this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function hi(a, l) {
  return new uN(a, l);
}
function Xg(a, l) {
  if (a != null && a.inherit && l) {
    const { inherit: r, ...o } = a;
    return { ...l, ...o };
  }
  return a;
}
function lf(a, l) {
  const r = (a == null ? void 0 : a[l]) ?? (a == null ? void 0 : a.default) ?? a;
  return r !== a ? Xg(r, a) : r;
}
const cN = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, fN = (a) => ({
  type: "spring",
  stiffness: 550,
  damping: a === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), mN = {
  type: "keyframes",
  duration: 0.8
}, dN = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, pN = (a, { keyframes: l }) => l.length > 2 ? mN : bi.has(a) ? a.startsWith("scale") ? fN(l[1]) : cN : dN, hN = /* @__PURE__ */ new Set([
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
function gN(a) {
  for (const l in a)
    if (!hN.has(l))
      return !0;
  return !1;
}
const sf = (a, l, r, o = {}, c, d) => (f) => {
  const h = lf(o, a) || {}, b = h.delay || o.delay || 0;
  let { elapsed: g = 0 } = o;
  g = g - /* @__PURE__ */ vt(b);
  const v = {
    keyframes: Array.isArray(r) ? r : [null, r],
    ease: "easeOut",
    velocity: l.getVelocity(),
    ...h,
    delay: -g,
    onUpdate: (N) => {
      l.set(N), h.onUpdate && h.onUpdate(N);
    },
    onComplete: () => {
      f(), h.onComplete && h.onComplete();
    },
    name: a,
    motionValue: l,
    element: d ? void 0 : c
  };
  gN(h) || Object.assign(v, pN(a, v)), v.duration && (v.duration = /* @__PURE__ */ vt(v.duration)), v.repeatDelay && (v.repeatDelay = /* @__PURE__ */ vt(v.repeatDelay)), v.from !== void 0 && (v.keyframes[0] = v.from);
  let y = !1;
  if ((v.type === !1 || v.duration === 0 && !v.repeatDelay) && (Dc(v), v.delay === 0 && (y = !0)), (In.instantAnimations || In.skipAnimations || c != null && c.shouldSkipAnimations || h.skipAnimations) && (y = !0, Dc(v), v.delay = 0), v.allowFlatten = !h.type && !h.ease, y && !d && l.get() !== void 0) {
    const N = Co(v.keyframes, h);
    if (N !== void 0) {
      ze.update(() => {
        v.onUpdate(N), v.onComplete();
      });
      return;
    }
  }
  return h.isSync ? new po(v) : new oN(v);
}, xN = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function bN(a) {
  const l = xN.exec(a);
  if (!l)
    return [,];
  const [, r, o, c] = l;
  return [`--${r ?? o}`, c];
}
const vN = 4;
function Pg(a, l, r = 1) {
  Sa(r <= vN, `Max CSS variable fallback depth detected in property "${a}". This may indicate a circular fallback dependency.`, "max-css-var-depth");
  const [o, c] = bN(a);
  if (!o)
    return;
  const d = window.getComputedStyle(l).getPropertyValue(o);
  if (d) {
    const f = d.trim();
    return og(f) ? parseFloat(f) : f;
  }
  return Jc(c) ? Pg(c, l, r + 1) : c;
}
function Ih(a) {
  const l = [{}, {}];
  return a == null || a.values.forEach((r, o) => {
    l[0][o] = r.get(), l[1][o] = r.getVelocity();
  }), l;
}
function of(a, l, r, o) {
  if (typeof l == "function") {
    const [c, d] = Ih(o);
    l = l(r !== void 0 ? r : a.custom, c, d);
  }
  if (typeof l == "string" && (l = a.variants && a.variants[l]), typeof l == "function") {
    const [c, d] = Ih(o);
    l = l(r !== void 0 ? r : a.custom, c, d);
  }
  return l;
}
function Da(a, l, r) {
  const o = a.getProps();
  return of(o, l, r !== void 0 ? r : o.custom, a);
}
const Qg = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...xi
]), Sc = (a) => Array.isArray(a);
function yN(a, l, r) {
  a.hasValue(l) ? a.getValue(l).set(r) : a.addValue(l, hi(r));
}
function NN(a) {
  return Sc(a) ? a[a.length - 1] || 0 : a;
}
function CN(a, l) {
  const r = Da(a, l);
  let { transitionEnd: o = {}, transition: c = {}, ...d } = r || {};
  d = { ...d, ...o };
  for (const f in d) {
    const h = NN(d[f]);
    yN(a, f, h);
  }
}
const st = (a) => !!(a && a.getVelocity);
function EN(a) {
  return !!(st(a) && a.add);
}
function Ac(a, l) {
  const r = a.getValue("willChange");
  if (EN(r))
    return r.add(l);
  if (!r && In.WillChange) {
    const o = new In.WillChange("auto");
    a.addValue("willChange", o), o.add(l);
  }
}
function rf(a) {
  return a.replace(/([A-Z])/g, (l) => `-${l.toLowerCase()}`);
}
const DN = "framerAppearId", Zg = "data-" + rf(DN);
function Kg(a) {
  return a.props[Zg];
}
function SN({ protectedKeys: a, needsAnimating: l }, r) {
  const o = a.hasOwnProperty(r) && l[r] !== !0;
  return l[r] = !1, o;
}
function Ig(a, l, { delay: r = 0, transitionOverride: o, type: c } = {}) {
  let { transition: d, transitionEnd: f, ...h } = l;
  const b = a.getDefaultTransition();
  d = d ? Xg(d, b) : b;
  const g = d == null ? void 0 : d.reduceMotion, v = d == null ? void 0 : d.skipAnimations;
  o && (d = o);
  const y = [], N = c && a.animationState && a.animationState.getState()[c], S = d == null ? void 0 : d.path;
  S && S.animateVisualElement(a, h, d, r, y);
  for (const T in h) {
    const U = a.getValue(T, a.latestValues[T] ?? null), M = h[T];
    if (M === void 0 || N && SN(N, T))
      continue;
    const B = {
      delay: r,
      ...lf(d || {}, T)
    };
    v && (B.skipAnimations = !0);
    const H = U.get();
    if (H !== void 0 && !U.isAnimating() && !Array.isArray(M) && M === H && !B.velocity) {
      ze.update(() => U.set(M));
      continue;
    }
    let q = !1;
    if (window.MotionHandoffAnimation) {
      const P = Kg(a);
      if (P) {
        const G = window.MotionHandoffAnimation(P, T, ze);
        G !== null && (B.startTime = G, q = !0);
      }
    }
    Ac(a, T);
    const F = g ?? a.shouldReduceMotion;
    U.start(sf(T, U, M, F && Qg.has(T) ? { type: !1 } : B, a, q));
    const J = U.animation;
    J && y.push(J);
  }
  if (f) {
    const T = () => ze.update(() => {
      f && CN(a, f);
    });
    y.length ? Promise.all(y).then(T) : T();
  }
  return y;
}
function Tc(a, l, r = {}) {
  var b;
  const o = Da(a, l, r.type === "exit" ? (b = a.presenceContext) == null ? void 0 : b.custom : void 0);
  let { transition: c = a.getDefaultTransition() || {} } = o || {};
  r.transitionOverride && (c = r.transitionOverride);
  const d = o ? () => Promise.all(Ig(a, o, r)) : () => Promise.resolve(), f = a.variantChildren && a.variantChildren.size ? (g = 0) => {
    const { delayChildren: v = 0, staggerChildren: y, staggerDirection: N } = c;
    return AN(a, l, g, v, y, N, r);
  } : () => Promise.resolve(), { when: h } = c;
  if (h) {
    const [g, v] = h === "beforeChildren" ? [d, f] : [f, d];
    return g().then(() => v());
  } else
    return Promise.all([d(), f(r.delay)]);
}
function AN(a, l, r = 0, o = 0, c = 0, d = 1, f) {
  const h = [];
  for (const b of a.variantChildren)
    b.notify("AnimationStart", l), h.push(Tc(b, l, {
      ...f,
      delay: r + (typeof o == "function" ? 0 : o) + Yg(a.variantChildren, b, o, c, d)
    }).then(() => b.notify("AnimationComplete", l)));
  return Promise.all(h);
}
function TN(a, l, r = {}) {
  a.notify("AnimationStart", l);
  let o;
  if (Array.isArray(l)) {
    const c = l.map((d) => Tc(a, d, r));
    o = Promise.all(c);
  } else if (typeof l == "string")
    o = Tc(a, l, r);
  else {
    const c = typeof l == "function" ? Da(a, l, r.custom) : l;
    o = Promise.all(Ig(a, c, r));
  }
  return o.then(() => {
    a.notify("AnimationComplete", l);
  });
}
const wN = {
  test: (a) => a === "auto",
  parse: (a) => a
}, Jg = (a) => (l) => l.test(a), $g = [gi, ee, en, Nn, Wv, $v, wN], Jh = (a) => $g.find(Jg(a));
function VN(a) {
  return typeof a == "number" ? a === 0 : a !== null ? a === "none" || a === "0" || ug(a) : !0;
}
const jN = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function MN(a) {
  const [l, r] = a.slice(0, -1).split("(");
  if (l === "drop-shadow")
    return a;
  const [o] = r.match($c) || [];
  if (!o)
    return a;
  const c = r.replace(o, "");
  let d = jN.has(l) ? 1 : 0;
  return o !== r && (d *= 100), l + "(" + d + c + ")";
}
const zN = /\b([a-z-]*)\(.*?\)/gu, wc = {
  ...Qt,
  getAnimatableNone: (a) => {
    const l = a.match(zN);
    return l ? l.map(MN).join(" ") : a;
  }
}, Vc = {
  ...Qt,
  getAnimatableNone: (a) => {
    const l = Qt.parse(a);
    return Qt.createTransformer(a)(l.map((o) => typeof o == "number" ? 0 : typeof o == "object" ? { ...o, alpha: 1 } : o));
  }
}, $h = {
  ...gi,
  transform: Math.round
}, RN = {
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
  scale: Is,
  scaleX: Is,
  scaleY: Is,
  scaleZ: Is,
  skew: Nn,
  skewX: Nn,
  skewY: Nn,
  distance: ee,
  translateX: ee,
  translateY: ee,
  translateZ: ee,
  x: ee,
  y: ee,
  z: ee,
  perspective: ee,
  transformPerspective: ee,
  opacity: Nl,
  originX: Uh,
  originY: Uh,
  originZ: ee
}, ho = {
  // Border props
  borderWidth: ee,
  borderTopWidth: ee,
  borderRightWidth: ee,
  borderBottomWidth: ee,
  borderLeftWidth: ee,
  borderRadius: ee,
  borderTopLeftRadius: ee,
  borderTopRightRadius: ee,
  borderBottomRightRadius: ee,
  borderBottomLeftRadius: ee,
  // Positioning props
  width: ee,
  maxWidth: ee,
  height: ee,
  maxHeight: ee,
  top: ee,
  right: ee,
  bottom: ee,
  left: ee,
  inset: ee,
  insetBlock: ee,
  insetBlockStart: ee,
  insetBlockEnd: ee,
  insetInline: ee,
  insetInlineStart: ee,
  insetInlineEnd: ee,
  // Spacing props
  padding: ee,
  paddingTop: ee,
  paddingRight: ee,
  paddingBottom: ee,
  paddingLeft: ee,
  paddingBlock: ee,
  paddingBlockStart: ee,
  paddingBlockEnd: ee,
  paddingInline: ee,
  paddingInlineStart: ee,
  paddingInlineEnd: ee,
  margin: ee,
  marginTop: ee,
  marginRight: ee,
  marginBottom: ee,
  marginLeft: ee,
  marginBlock: ee,
  marginBlockStart: ee,
  marginBlockEnd: ee,
  marginInline: ee,
  marginInlineStart: ee,
  marginInlineEnd: ee,
  // Typography
  fontSize: ee,
  // Misc
  backgroundPositionX: ee,
  backgroundPositionY: ee,
  ...RN,
  zIndex: $h,
  // SVG
  fillOpacity: Nl,
  strokeOpacity: Nl,
  numOctaves: $h
}, _N = {
  ...ho,
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
  filter: wc,
  WebkitFilter: wc,
  mask: Vc,
  WebkitMask: Vc
}, Wg = (a) => _N[a], ON = /* @__PURE__ */ new Set([wc, Vc]);
function ex(a, l) {
  let r = Wg(a);
  return ON.has(r) || (r = Qt), r.getAnimatableNone ? r.getAnimatableNone(l) : void 0;
}
const BN = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function kN(a, l, r) {
  let o = 0, c;
  for (; o < a.length && !c; ) {
    const d = a[o];
    typeof d == "string" && !BN.has(d) && pi(d).values.length && (c = a[o]), o++;
  }
  if (c && r)
    for (const d of l)
      a[d] = ex(r, c);
}
class UN extends af {
  constructor(l, r, o, c, d) {
    super(l, r, o, c, d, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: l, element: r, name: o } = this;
    if (!r || !r.current)
      return;
    super.readKeyframes();
    for (let v = 0; v < l.length; v++) {
      let y = l[v];
      if (typeof y == "string" && (y = y.trim(), Jc(y))) {
        const N = Pg(y, r.current);
        N !== void 0 && (l[v] = N), v === l.length - 1 && (this.finalKeyframe = y);
      }
    }
    if (this.resolveNoneKeyframes(), !Qg.has(o) || l.length !== 2)
      return;
    const [c, d] = l, f = Jh(c), h = Jh(d), b = kh(c), g = kh(d);
    if (b !== g && Kn[o]) {
      this.needsMeasurement = !0;
      return;
    }
    if (f !== h)
      if (Ph(f) && Ph(h))
        for (let v = 0; v < l.length; v++) {
          const y = l[v];
          typeof y == "string" && (l[v] = parseFloat(y));
        }
      else Kn[o] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: l, name: r } = this, o = [];
    for (let c = 0; c < l.length; c++)
      (l[c] === null || VN(l[c])) && o.push(c);
    o.length && kN(l, o, r);
  }
  measureInitialState() {
    const { element: l, unresolvedKeyframes: r, name: o } = this;
    if (!l || !l.current)
      return;
    o === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = Kn[o](l.measureViewportBox(), window.getComputedStyle(l.current)), r[0] = this.measuredOrigin;
    const c = r[r.length - 1];
    c !== void 0 && l.getValue(o, c).jump(c, !1);
  }
  measureEndState() {
    var h;
    const { element: l, name: r, unresolvedKeyframes: o } = this;
    if (!l || !l.current)
      return;
    const c = l.getValue(r);
    c && c.jump(this.measuredOrigin, !1);
    const d = o.length - 1, f = o[d];
    o[d] = Kn[r](l.measureViewportBox(), window.getComputedStyle(l.current)), f !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = f), (h = this.removedTransforms) != null && h.length && this.removedTransforms.forEach(([b, g]) => {
      l.getValue(b).set(g);
    }), this.resolveNoneKeyframes();
  }
}
function tx(a, l, r) {
  if (a == null)
    return [];
  if (a instanceof EventTarget)
    return [a];
  if (typeof a == "string") {
    let o = document;
    const c = (r == null ? void 0 : r[a]) ?? o.querySelectorAll(a);
    return c ? Array.from(c) : [];
  }
  return Array.from(a).filter((o) => o != null);
}
const jc = (a, l) => l && typeof a == "number" ? l.transform(a) : a;
function to(a) {
  return rg(a) && "offsetHeight" in a && !("ownerSVGElement" in a);
}
const { schedule: uf } = /* @__PURE__ */ Cg(queueMicrotask, !1), Pt = {
  x: !1,
  y: !1
};
function nx() {
  return Pt.x || Pt.y;
}
function LN(a) {
  return a === "x" || a === "y" ? Pt[a] ? null : (Pt[a] = !0, () => {
    Pt[a] = !1;
  }) : Pt.x || Pt.y ? null : (Pt.x = Pt.y = !0, () => {
    Pt.x = Pt.y = !1;
  });
}
function ax(a, l) {
  const r = tx(a), o = new AbortController(), c = {
    passive: !0,
    ...l,
    signal: o.signal
  };
  return [r, c, () => o.abort()];
}
function HN(a) {
  return !(a.pointerType === "touch" || nx());
}
function qN(a, l, r = {}) {
  const [o, c, d] = ax(a, r);
  return o.forEach((f) => {
    let h = !1, b = !1, g;
    const v = () => {
      f.removeEventListener("pointerleave", T);
    }, y = (M) => {
      g && (g(M), g = void 0), v();
    }, N = (M) => {
      h = !1, window.removeEventListener("pointerup", N), window.removeEventListener("pointercancel", N), b && (b = !1, y(M));
    }, S = () => {
      h = !0, window.addEventListener("pointerup", N, c), window.addEventListener("pointercancel", N, c);
    }, T = (M) => {
      if (M.pointerType !== "touch") {
        if (h) {
          b = !0;
          return;
        }
        y(M);
      }
    }, U = (M) => {
      if (!HN(M))
        return;
      b = !1;
      const B = l(f, M);
      typeof B == "function" && (g = B, f.addEventListener("pointerleave", T, c));
    };
    f.addEventListener("pointerenter", U, c), f.addEventListener("pointerdown", S, c);
  }), d;
}
const ix = (a, l) => l ? a === l ? !0 : ix(a, l.parentElement) : !1, cf = (a) => a.pointerType === "mouse" ? typeof a.button != "number" || a.button <= 0 : a.isPrimary !== !1, FN = /* @__PURE__ */ new Set([
  "BUTTON",
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "A"
]);
function GN(a) {
  return FN.has(a.tagName) || a.isContentEditable === !0;
}
const YN = /* @__PURE__ */ new Set(["INPUT", "SELECT", "TEXTAREA"]);
function XN(a) {
  return YN.has(a.tagName) || a.isContentEditable === !0;
}
const no = /* @__PURE__ */ new WeakSet();
function Wh(a) {
  return (l) => {
    l.key === "Enter" && a(l);
  };
}
function ac(a, l) {
  a.dispatchEvent(new PointerEvent("pointer" + l, { isPrimary: !0, bubbles: !0 }));
}
const PN = (a, l) => {
  const r = a.currentTarget;
  if (!r)
    return;
  const o = Wh(() => {
    if (no.has(r))
      return;
    ac(r, "down");
    const c = Wh(() => {
      ac(r, "up");
    }), d = () => ac(r, "cancel");
    r.addEventListener("keyup", c, l), r.addEventListener("blur", d, l);
  });
  r.addEventListener("keydown", o, l), r.addEventListener("blur", () => r.removeEventListener("keydown", o), l);
};
function e0(a) {
  return cf(a) && !nx();
}
const t0 = /* @__PURE__ */ new WeakSet();
function QN(a, l, r = {}) {
  const [o, c, d] = ax(a, r), f = (h) => {
    const b = h.currentTarget;
    if (!e0(h) || t0.has(h))
      return;
    no.add(b), r.stopPropagation && t0.add(h);
    const g = l(b, h), v = (S, T) => {
      window.removeEventListener("pointerup", y), window.removeEventListener("pointercancel", N), no.has(b) && no.delete(b), e0(S) && typeof g == "function" && g(S, { success: T });
    }, y = (S) => {
      v(S, b === window || b === document || r.useGlobalTarget || ix(b, S.target));
    }, N = (S) => {
      v(S, !1);
    };
    window.addEventListener("pointerup", y, c), window.addEventListener("pointercancel", N, c);
  };
  return o.forEach((h) => {
    (r.useGlobalTarget ? window : h).addEventListener("pointerdown", f, c), to(h) && (h.addEventListener("focus", (g) => PN(g, c)), !GN(h) && !h.hasAttribute("tabindex") && (h.tabIndex = 0));
  }), d;
}
function ff(a) {
  return rg(a) && "ownerSVGElement" in a;
}
const ao = /* @__PURE__ */ new WeakMap();
let Zn;
const lx = (a, l, r) => (o, c) => c && c[0] ? c[0][a + "Size"] : ff(o) && "getBBox" in o ? o.getBBox()[l] : o[r], ZN = /* @__PURE__ */ lx("inline", "width", "offsetWidth"), KN = /* @__PURE__ */ lx("block", "height", "offsetHeight");
function IN({ target: a, borderBoxSize: l }) {
  var r;
  (r = ao.get(a)) == null || r.forEach((o) => {
    o(a, {
      get width() {
        return ZN(a, l);
      },
      get height() {
        return KN(a, l);
      }
    });
  });
}
function JN(a) {
  a.forEach(IN);
}
function $N() {
  typeof ResizeObserver > "u" || (Zn = new ResizeObserver(JN));
}
function WN(a, l) {
  Zn || $N();
  const r = tx(a);
  return r.forEach((o) => {
    let c = ao.get(o);
    c || (c = /* @__PURE__ */ new Set(), ao.set(o, c)), c.add(l), Zn == null || Zn.observe(o);
  }), () => {
    r.forEach((o) => {
      const c = ao.get(o);
      c == null || c.delete(l), c != null && c.size || Zn == null || Zn.unobserve(o);
    });
  };
}
const io = /* @__PURE__ */ new Set();
let mi;
function e2() {
  mi = () => {
    const a = {
      get width() {
        return window.innerWidth;
      },
      get height() {
        return window.innerHeight;
      }
    };
    io.forEach((l) => l(a));
  }, window.addEventListener("resize", mi);
}
function t2(a) {
  return io.add(a), mi || e2(), () => {
    io.delete(a), !io.size && typeof mi == "function" && (window.removeEventListener("resize", mi), mi = void 0);
  };
}
function n0(a, l) {
  return typeof a == "function" ? t2(a) : WN(a, l);
}
function n2(a) {
  return ff(a) && a.tagName === "svg";
}
const a2 = [...$g, Ze, Qt], i2 = (a) => a2.find(Jg(a)), a0 = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), di = () => ({
  x: a0(),
  y: a0()
}), i0 = () => ({ min: 0, max: 0 }), Ie = () => ({
  x: i0(),
  y: i0()
}), l2 = /* @__PURE__ */ new WeakMap();
function Eo(a) {
  return a !== null && typeof a == "object" && typeof a.start == "function";
}
function Cl(a) {
  return typeof a == "string" || Array.isArray(a);
}
const mf = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], df = ["initial", ...mf];
function Do(a) {
  return Eo(a.animate) || df.some((l) => Cl(a[l]));
}
function sx(a) {
  return !!(Do(a) || a.variants);
}
function s2(a, l, r) {
  for (const o in l) {
    const c = l[o], d = r[o];
    if (st(c))
      a.addValue(o, c);
    else if (st(d))
      a.addValue(o, hi(c, { owner: a }));
    else if (d !== c)
      if (a.hasValue(o)) {
        const f = a.getValue(o);
        f.liveStyle === !0 ? f.jump(c) : f.hasAnimated || f.set(c);
      } else {
        const f = a.getStaticValue(o);
        a.addValue(o, hi(f !== void 0 ? f : c, { owner: a }));
      }
  }
  for (const o in r)
    l[o] === void 0 && a.removeValue(o);
  return l;
}
const Mc = { current: null }, ox = { current: !1 }, o2 = typeof window < "u";
function r2() {
  if (ox.current = !0, !!o2)
    if (window.matchMedia) {
      const a = window.matchMedia("(prefers-reduced-motion)"), l = () => Mc.current = a.matches;
      a.addEventListener("change", l), l();
    } else
      Mc.current = !1;
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
let go = {};
function rx(a) {
  go = a;
}
function u2() {
  return go;
}
class c2 {
  /**
   * This method takes React props and returns found MotionValues. For example, HTML
   * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
   *
   * This isn't an abstract method as it needs calling in the constructor, but it is
   * intended to be one.
   */
  scrapeMotionValuesFromProps(l, r, o) {
    return {};
  }
  constructor({ parent: l, props: r, presenceContext: o, reducedMotionConfig: c, skipAnimations: d, blockInitialAnimation: f, visualState: h }, b = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.shouldSkipAnimations = !1, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = af, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.hasBeenMounted = !1, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const S = ct.now();
      this.renderScheduledAt < S && (this.renderScheduledAt = S, ze.render(this.render, !1, !0));
    };
    const { latestValues: g, renderState: v } = h;
    this.latestValues = g, this.baseTarget = { ...g }, this.initialValues = r.initial ? { ...g } : {}, this.renderState = v, this.parent = l, this.props = r, this.presenceContext = o, this.depth = l ? l.depth + 1 : 0, this.reducedMotionConfig = c, this.skipAnimationsConfig = d, this.options = b, this.blockInitialAnimation = !!f, this.isControllingVariants = Do(r), this.isVariantNode = sx(r), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(l && l.current);
    const { willChange: y, ...N } = this.scrapeMotionValuesFromProps(r, {}, this);
    for (const S in N) {
      const T = N[S];
      g[S] !== void 0 && st(T) && T.set(g[S]);
    }
  }
  mount(l) {
    var r, o;
    if (this.hasBeenMounted)
      for (const c in this.initialValues)
        (r = this.values.get(c)) == null || r.jump(this.initialValues[c]), this.latestValues[c] = this.initialValues[c];
    this.current = l, l2.set(l, this), this.projection && !this.projection.instance && this.projection.mount(l), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((c, d) => this.bindToMotionValue(d, c)), this.reducedMotionConfig === "never" ? this.shouldReduceMotion = !1 : this.reducedMotionConfig === "always" ? this.shouldReduceMotion = !0 : (ox.current || r2(), this.shouldReduceMotion = Mc.current), this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1, (o = this.parent) == null || o.addChild(this), this.update(this.props, this.presenceContext), this.hasBeenMounted = !0;
  }
  unmount() {
    var l;
    this.projection && this.projection.unmount(), Jn(this.notifyUpdate), Jn(this.render), this.valueSubscriptions.forEach((r) => r()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), (l = this.parent) == null || l.removeChild(this);
    for (const r in this.events)
      this.events[r].clear();
    for (const r in this.features) {
      const o = this.features[r];
      o && (o.unmount(), o.isMounted = !1);
    }
    this.current = null;
  }
  addChild(l) {
    this.children.add(l), this.enteringChildren ?? (this.enteringChildren = /* @__PURE__ */ new Set()), this.enteringChildren.add(l);
  }
  removeChild(l) {
    this.children.delete(l), this.enteringChildren && this.enteringChildren.delete(l);
  }
  bindToMotionValue(l, r) {
    if (this.valueSubscriptions.has(l) && this.valueSubscriptions.get(l)(), r.accelerate && Gg.has(l) && this.current instanceof HTMLElement) {
      const { factory: f, keyframes: h, times: b, ease: g, duration: v } = r.accelerate, y = new qg({
        element: this.current,
        name: l,
        keyframes: h,
        times: b,
        ease: g,
        duration: /* @__PURE__ */ vt(v)
      }), N = f(y);
      this.valueSubscriptions.set(l, () => {
        N(), y.cancel();
      });
      return;
    }
    const o = bi.has(l);
    o && this.onBindTransform && this.onBindTransform();
    const c = r.on("change", (f) => {
      this.latestValues[l] = f, this.props.onUpdate && ze.preRender(this.notifyUpdate), o && this.projection && (this.projection.isTransformDirty = !0), this.scheduleRender();
    });
    let d;
    typeof window < "u" && window.MotionCheckAppearSync && (d = window.MotionCheckAppearSync(this, l, r)), this.valueSubscriptions.set(l, () => {
      c(), d && d();
    });
  }
  sortNodePosition(l) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== l.type ? 0 : this.sortInstanceNodePosition(this.current, l.current);
  }
  updateFeatures() {
    let l = "animation";
    for (l in go) {
      const r = go[l];
      if (!r)
        continue;
      const { isEnabled: o, Feature: c } = r;
      if (!this.features[l] && c && o(this.props) && (this.features[l] = new c(this)), this.features[l]) {
        const d = this.features[l];
        d.isMounted ? d.update() : (d.mount(), d.isMounted = !0);
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
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Ie();
  }
  getStaticValue(l) {
    return this.latestValues[l];
  }
  setStaticValue(l, r) {
    this.latestValues[l] = r;
  }
  /**
   * Update the provided props. Ensure any newly-added motion values are
   * added to our map, old ones removed, and listeners updated.
   */
  update(l, r) {
    (l.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = l, this.prevPresenceContext = this.presenceContext, this.presenceContext = r;
    for (let o = 0; o < l0.length; o++) {
      const c = l0[o];
      this.propEventSubscriptions[c] && (this.propEventSubscriptions[c](), delete this.propEventSubscriptions[c]);
      const d = "on" + c, f = l[d];
      f && (this.propEventSubscriptions[c] = this.on(c, f));
    }
    this.prevMotionValues = s2(this, this.scrapeMotionValuesFromProps(l, this.prevProps || {}, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  /**
   * Returns the variant definition with a given name.
   */
  getVariant(l) {
    return this.props.variants ? this.props.variants[l] : void 0;
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
  addVariantChild(l) {
    const r = this.getClosestVariantNode();
    if (r)
      return r.variantChildren && r.variantChildren.add(l), () => r.variantChildren.delete(l);
  }
  /**
   * Add a motion value and bind it to this visual element.
   */
  addValue(l, r) {
    const o = this.values.get(l);
    r !== o && (o && this.removeValue(l), this.bindToMotionValue(l, r), this.values.set(l, r), this.latestValues[l] = r.get());
  }
  /**
   * Remove a motion value and unbind any active subscriptions.
   */
  removeValue(l) {
    this.values.delete(l);
    const r = this.valueSubscriptions.get(l);
    r && (r(), this.valueSubscriptions.delete(l)), delete this.latestValues[l], this.removeValueFromRenderState(l, this.renderState);
  }
  /**
   * Check whether we have a motion value for this key
   */
  hasValue(l) {
    return this.values.has(l);
  }
  getValue(l, r) {
    if (this.props.values && this.props.values[l])
      return this.props.values[l];
    let o = this.values.get(l);
    return o === void 0 && r !== void 0 && (o = hi(r === null ? void 0 : r, { owner: this }), this.addValue(l, o)), o;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(l, r) {
    let o = this.latestValues[l] !== void 0 || !this.current ? this.latestValues[l] : this.getBaseTargetFromProps(this.props, l) ?? this.readValueFromInstance(this.current, l, this.options);
    return o != null && (typeof o == "string" && (og(o) || ug(o)) ? o = parseFloat(o) : !i2(o) && Qt.test(r) && (o = ex(l, r)), this.setBaseTarget(l, st(o) ? o.get() : o)), st(o) ? o.get() : o;
  }
  /**
   * Set the base target to later animate back to. This is currently
   * only hydrated on creation and when we first read a value.
   */
  setBaseTarget(l, r) {
    this.baseTarget[l] = r;
  }
  /**
   * Find the base target for a value thats been removed from all animation
   * props.
   */
  getBaseTarget(l) {
    var d;
    const { initial: r } = this.props;
    let o;
    if (typeof r == "string" || typeof r == "object") {
      const f = of(this.props, r, (d = this.presenceContext) == null ? void 0 : d.custom);
      f && (o = f[l]);
    }
    if (r && o !== void 0)
      return o;
    const c = this.getBaseTargetFromProps(this.props, l);
    return c !== void 0 && !st(c) ? c : this.initialValues[l] !== void 0 && o === void 0 ? void 0 : this.baseTarget[l];
  }
  on(l, r) {
    return this.events[l] || (this.events[l] = new Zc()), this.events[l].add(r);
  }
  notify(l, ...r) {
    this.events[l] && this.events[l].notify(...r);
  }
  scheduleRenderMicrotask() {
    uf.render(this.render);
  }
}
class ux extends c2 {
  constructor() {
    super(...arguments), this.KeyframeResolver = UN;
  }
  sortInstanceNodePosition(l, r) {
    return l.compareDocumentPosition(r) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(l, r) {
    const o = l.style;
    return o ? o[r] : void 0;
  }
  removeValueFromRenderState(l, { vars: r, style: o }) {
    delete r[l], delete o[l];
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: l } = this.props;
    st(l) && (this.childSubscription = l.on("change", (r) => {
      this.current && (this.current.textContent = `${r}`);
    }));
  }
}
class $n {
  constructor(l) {
    this.isMounted = !1, this.node = l;
  }
  update() {
  }
}
function cx({ top: a, left: l, right: r, bottom: o }) {
  return {
    x: { min: l, max: r },
    y: { min: a, max: o }
  };
}
function f2({ x: a, y: l }) {
  return { top: l.min, right: a.max, bottom: l.max, left: a.min };
}
function m2(a, l) {
  if (!l)
    return a;
  const r = l({ x: a.left, y: a.top }), o = l({ x: a.right, y: a.bottom });
  return {
    top: r.y,
    left: r.x,
    bottom: o.y,
    right: o.x
  };
}
function ic(a) {
  return a === void 0 || a === 1;
}
function zc({ scale: a, scaleX: l, scaleY: r }) {
  return !ic(a) || !ic(l) || !ic(r);
}
function va(a) {
  return zc(a) || fx(a) || a.z || a.rotate || a.rotateX || a.rotateY || a.skewX || a.skewY;
}
function fx(a) {
  return s0(a.x) || s0(a.y);
}
function s0(a) {
  return a && a !== "0%";
}
function xo(a, l, r) {
  const o = a - r, c = l * o;
  return r + c;
}
function o0(a, l, r, o, c) {
  return c !== void 0 && (a = xo(a, c, o)), xo(a, r, o) + l;
}
function Rc(a, l = 0, r = 1, o, c) {
  a.min = o0(a.min, l, r, o, c), a.max = o0(a.max, l, r, o, c);
}
function mx(a, { x: l, y: r }) {
  Rc(a.x, l.translate, l.scale, l.originPoint), Rc(a.y, r.translate, r.scale, r.originPoint);
}
const r0 = 0.999999999999, u0 = 1.0000000000001;
function d2(a, l, r, o = !1) {
  var h;
  const c = r.length;
  if (!c)
    return;
  l.x = l.y = 1;
  let d, f;
  for (let b = 0; b < c; b++) {
    d = r[b], f = d.projectionDelta;
    const { visualElement: g } = d.options;
    g && g.props.style && g.props.style.display === "contents" || (o && d.options.layoutScroll && d.scroll && d !== d.root && (Wt(a.x, -d.scroll.offset.x), Wt(a.y, -d.scroll.offset.y)), f && (l.x *= f.x.scale, l.y *= f.y.scale, mx(a, f)), o && va(d.latestValues) && lo(a, d.latestValues, (h = d.layout) == null ? void 0 : h.layoutBox));
  }
  l.x < u0 && l.x > r0 && (l.x = 1), l.y < u0 && l.y > r0 && (l.y = 1);
}
function Wt(a, l) {
  a.min += l, a.max += l;
}
function c0(a, l, r, o, c = 0.5) {
  const d = Me(a.min, a.max, c);
  Rc(a, l, r, d, o);
}
function f0(a, l) {
  return typeof a == "string" ? parseFloat(a) / 100 * (l.max - l.min) : a;
}
function lo(a, l, r) {
  const o = r ?? a;
  c0(a.x, f0(l.x, o.x), l.scaleX, l.scale, l.originX), c0(a.y, f0(l.y, o.y), l.scaleY, l.scale, l.originY);
}
function dx(a, l) {
  return cx(m2(a.getBoundingClientRect(), l));
}
function p2(a, l, r) {
  const o = dx(a, r), { scroll: c } = l;
  return c && (Wt(o.x, c.offset.x), Wt(o.y, c.offset.y)), o;
}
const h2 = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, g2 = xi.length;
function x2(a, l, r) {
  let o = "", c = !0;
  for (let f = 0; f < g2; f++) {
    const h = xi[f], b = a[h];
    if (b === void 0)
      continue;
    let g = !0;
    if (typeof b == "number")
      g = b === (h.startsWith("scale") ? 1 : 0);
    else {
      const v = parseFloat(b);
      g = h.startsWith("scale") ? v === 1 : v === 0;
    }
    if (!g || r) {
      const v = jc(b, ho[h]);
      if (!g) {
        c = !1;
        const y = h2[h] || h;
        o += `${y}(${v}) `;
      }
      r && (l[h] = v);
    }
  }
  const d = a.pathRotation;
  return d && (c = !1, o += `rotate(${jc(d, ho.pathRotation)}) `), o = o.trim(), r ? o = r(l, c ? "" : o) : c && (o = "none"), o;
}
function pf(a, l, r) {
  const { style: o, vars: c, transformOrigin: d } = a;
  let f = !1, h = !1;
  for (const b in l) {
    const g = l[b];
    if (bi.has(b)) {
      f = !0;
      continue;
    } else if (Dg(b)) {
      c[b] = g;
      continue;
    } else {
      const v = jc(g, ho[b]);
      b.startsWith("origin") ? (h = !0, d[b] = v) : o[b] = v;
    }
  }
  if (l.transform || (f || r ? o.transform = x2(l, a.transform, r) : o.transform && (o.transform = "none")), h) {
    const { originX: b = "50%", originY: g = "50%", originZ: v = 0 } = d;
    o.transformOrigin = `${b} ${g} ${v}`;
  }
}
function px(a, { style: l, vars: r }, o, c) {
  const d = a.style;
  let f;
  for (f in l)
    d[f] = l[f];
  c == null || c.applyProjectionStyles(d, o);
  for (f in r)
    d.setProperty(f, r[f]);
}
function m0(a, l) {
  return l.max === l.min ? 0 : a / (l.max - l.min) * 100;
}
const pl = {
  correct: (a, l) => {
    if (!l.target)
      return a;
    if (typeof a == "string")
      if (ee.test(a))
        a = parseFloat(a);
      else
        return a;
    const r = m0(a, l.target.x), o = m0(a, l.target.y);
    return `${r}% ${o}%`;
  }
}, b2 = {
  correct: (a, { treeScale: l, projectionDelta: r }) => {
    const o = a, c = Qt.parse(a);
    if (c.length > 5)
      return o;
    const d = Qt.createTransformer(a), f = typeof c[0] != "number" ? 1 : 0, h = r.x.scale * l.x, b = r.y.scale * l.y;
    c[0 + f] /= h, c[1 + f] /= b;
    const g = Me(h, b, 0.5);
    return typeof c[2 + f] == "number" && (c[2 + f] /= g), typeof c[3 + f] == "number" && (c[3 + f] /= g), d(c);
  }
}, _c = {
  borderRadius: {
    ...pl,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: pl,
  borderTopRightRadius: pl,
  borderBottomLeftRadius: pl,
  borderBottomRightRadius: pl,
  boxShadow: b2
};
function hx(a, { layout: l, layoutId: r }) {
  return bi.has(a) || a.startsWith("origin") || (l || r !== void 0) && (!!_c[a] || a === "opacity");
}
function hf(a, l, r) {
  var f;
  const o = a.style, c = l == null ? void 0 : l.style, d = {};
  if (!o)
    return d;
  for (const h in o)
    (st(o[h]) || c && st(c[h]) || hx(h, a) || ((f = r == null ? void 0 : r.getValue(h)) == null ? void 0 : f.liveStyle) !== void 0) && (d[h] = o[h]);
  return d;
}
function v2(a) {
  return window.getComputedStyle(a);
}
class y2 extends ux {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = px;
  }
  readValueFromInstance(l, r) {
    var o;
    if (bi.has(r))
      return (o = this.projection) != null && o.isProjecting ? vc(r) : Ly(l, r);
    {
      const c = v2(l), d = (Dg(r) ? c.getPropertyValue(r) : c[r]) || 0;
      return typeof d == "string" ? d.trim() : d;
    }
  }
  measureInstanceViewportBox(l, { transformPagePoint: r }) {
    return dx(l, r);
  }
  build(l, r, o) {
    pf(l, r, o.transformTemplate);
  }
  scrapeMotionValuesFromProps(l, r, o) {
    return hf(l, r, o);
  }
}
const N2 = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, C2 = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function E2(a, l, r = 1, o = 0, c = !0) {
  a.pathLength = 1;
  const d = c ? N2 : C2;
  a[d.offset] = `${-o}`, a[d.array] = `${l} ${r}`;
}
const D2 = [
  "offsetDistance",
  "offsetPath",
  "offsetRotate",
  "offsetAnchor"
];
function gx(a, {
  attrX: l,
  attrY: r,
  attrScale: o,
  pathLength: c,
  pathSpacing: d = 1,
  pathOffset: f = 0,
  // This is object creation, which we try to avoid per-frame.
  ...h
}, b, g, v) {
  if (pf(a, h, g), b) {
    a.style.viewBox && (a.attrs.viewBox = a.style.viewBox);
    return;
  }
  a.attrs = a.style, a.style = {};
  const { attrs: y, style: N } = a;
  y.transform && (N.transform = y.transform, delete y.transform), (N.transform || y.transformOrigin) && (N.transformOrigin = y.transformOrigin ?? "50% 50%", delete y.transformOrigin), N.transform && (N.transformBox = (v == null ? void 0 : v.transformBox) ?? "fill-box", delete y.transformBox);
  for (const S of D2)
    y[S] !== void 0 && (N[S] = y[S], delete y[S]);
  l !== void 0 && (y.x = l), r !== void 0 && (y.y = r), o !== void 0 && (y.scale = o), c !== void 0 && E2(y, c, d, f, !1);
}
const xx = /* @__PURE__ */ new Set([
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
]), bx = (a) => typeof a == "string" && a.toLowerCase() === "svg";
function S2(a, l, r, o) {
  px(a, l, void 0, o);
  for (const c in l.attrs)
    a.setAttribute(xx.has(c) ? c : rf(c), l.attrs[c]);
}
function vx(a, l, r) {
  const o = hf(a, l, r);
  for (const c in a)
    if (st(a[c]) || st(l[c])) {
      const d = xi.indexOf(c) !== -1 ? "attr" + c.charAt(0).toUpperCase() + c.substring(1) : c;
      o[d] = a[c];
    }
  return o;
}
class A2 extends ux {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = Ie;
  }
  getBaseTargetFromProps(l, r) {
    return l[r];
  }
  readValueFromInstance(l, r) {
    if (bi.has(r)) {
      const o = Wg(r);
      return o && o.default || 0;
    }
    return r = xx.has(r) ? r : rf(r), l.getAttribute(r);
  }
  scrapeMotionValuesFromProps(l, r, o) {
    return vx(l, r, o);
  }
  build(l, r, o) {
    gx(l, r, this.isSVGTag, o.transformTemplate, o.style);
  }
  renderInstance(l, r, o, c) {
    S2(l, r, o, c);
  }
  mount(l) {
    this.isSVGTag = bx(l.tagName), super.mount(l);
  }
}
const T2 = df.length;
function yx(a) {
  if (!a)
    return;
  if (!a.isControllingVariants) {
    const r = a.parent ? yx(a.parent) || {} : {};
    return a.props.initial !== void 0 && (r.initial = a.props.initial), r;
  }
  const l = {};
  for (let r = 0; r < T2; r++) {
    const o = df[r], c = a.props[o];
    (Cl(c) || c === !1) && (l[o] = c);
  }
  return l;
}
function Nx(a, l) {
  if (!Array.isArray(l))
    return !1;
  const r = l.length;
  if (r !== a.length)
    return !1;
  for (let o = 0; o < r; o++)
    if (l[o] !== a[o])
      return !1;
  return !0;
}
const w2 = [...mf].reverse(), V2 = mf.length;
function j2(a) {
  return (l) => Promise.all(l.map(({ animation: r, options: o }) => TN(a, r, o)));
}
function M2(a) {
  let l = j2(a), r = d0(), o = !0, c = !1;
  const d = (g) => (v, y) => {
    var S;
    const N = Da(a, y, g === "exit" ? (S = a.presenceContext) == null ? void 0 : S.custom : void 0);
    if (N) {
      const { transition: T, transitionEnd: U, ...M } = N;
      v = { ...v, ...M, ...U };
    }
    return v;
  };
  function f(g) {
    l = g(a);
  }
  function h(g) {
    const { props: v } = a, y = yx(a.parent) || {}, N = [], S = /* @__PURE__ */ new Set();
    let T = {}, U = 1 / 0;
    for (let B = 0; B < V2; B++) {
      const H = w2[B], q = r[H], F = v[H] !== void 0 ? v[H] : y[H], J = Cl(F), P = H === g ? q.isActive : null;
      P === !1 && (U = B);
      let G = F === y[H] && F !== v[H] && J;
      if (G && (o || c) && a.manuallyAnimateOnMount && (G = !1), q.protectedKeys = { ...T }, // If it isn't active and hasn't *just* been set as inactive
      !q.isActive && P === null || // If we didn't and don't have any defined prop for this animation type
      !F && !q.prevProp || // Or if the prop doesn't define an animation
      Eo(F) || typeof F == "boolean")
        continue;
      if (H === "exit" && q.isActive && P !== !0) {
        q.prevResolvedValues && (T = {
          ...T,
          ...q.prevResolvedValues
        });
        continue;
      }
      const X = z2(q.prevProp, F);
      let W = X || // If we're making this variant active, we want to always make it active
      H === g && q.isActive && !G && J || // If we removed a higher-priority variant (i is in reverse order)
      B > U && J, K = !1;
      const ge = Array.isArray(F) ? F : [F];
      let ve = ge.reduce(d(H), {});
      P === !1 && (ve = {});
      const { prevResolvedValues: We = {} } = q, Ge = {
        ...We,
        ...ve
      }, Le = (I) => {
        W = !0, S.has(I) && (K = !0, S.delete(I)), q.needsAnimating[I] = !0;
        const re = a.getValue(I);
        re && (re.liveStyle = !1);
      };
      for (const I in Ge) {
        const re = ve[I], xe = We[I];
        if (T.hasOwnProperty(I))
          continue;
        let D = !1;
        Sc(re) && Sc(xe) ? D = !Nx(re, xe) || X : D = re !== xe, D ? re != null ? Le(I) : S.add(I) : re !== void 0 && S.has(I) ? Le(I) : q.protectedKeys[I] = !0;
      }
      q.prevProp = F, q.prevResolvedValues = ve, q.isActive && (T = { ...T, ...ve }), (o || c) && a.blockInitialAnimation && (W = !1);
      const R = G && X;
      W && (!R || K) && N.push(...ge.map((I) => {
        const re = { type: H };
        if (typeof I == "string" && (o || c) && !R && a.manuallyAnimateOnMount && a.parent) {
          const { parent: xe } = a, D = Da(xe, I);
          if (xe.enteringChildren && D) {
            const { delayChildren: L } = D.transition || {};
            re.delay = Yg(xe.enteringChildren, a, L);
          }
        }
        return {
          animation: I,
          options: re
        };
      }));
    }
    if (S.size) {
      const B = {};
      if (typeof v.initial != "boolean") {
        const H = Da(a, Array.isArray(v.initial) ? v.initial[0] : v.initial);
        H && H.transition && (B.transition = H.transition);
      }
      S.forEach((H) => {
        const q = a.getBaseTarget(H), F = a.getValue(H);
        F && (F.liveStyle = !0), B[H] = q ?? null;
      }), N.push({ animation: B });
    }
    let M = !!N.length;
    return o && (v.initial === !1 || v.initial === v.animate) && !a.manuallyAnimateOnMount && (M = !1), o = !1, c = !1, M ? l(N) : Promise.resolve();
  }
  function b(g, v) {
    var N;
    if (r[g].isActive === v)
      return Promise.resolve();
    (N = a.variantChildren) == null || N.forEach((S) => {
      var T;
      return (T = S.animationState) == null ? void 0 : T.setActive(g, v);
    }), r[g].isActive = v;
    const y = h(g);
    for (const S in r)
      r[S].protectedKeys = {};
    return y;
  }
  return {
    animateChanges: h,
    setActive: b,
    setAnimateFunction: f,
    getState: () => r,
    reset: () => {
      r = d0(), c = !0;
    }
  };
}
function z2(a, l) {
  return typeof l == "string" ? l !== a : Array.isArray(l) ? !Nx(l, a) : !1;
}
function ba(a = !1) {
  return {
    isActive: a,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function d0() {
  return {
    animate: ba(!0),
    whileInView: ba(),
    whileHover: ba(),
    whileTap: ba(),
    whileDrag: ba(),
    whileFocus: ba(),
    exit: ba()
  };
}
function Oc(a, l) {
  a.min = l.min, a.max = l.max;
}
function Xt(a, l) {
  Oc(a.x, l.x), Oc(a.y, l.y);
}
function p0(a, l) {
  a.translate = l.translate, a.scale = l.scale, a.originPoint = l.originPoint, a.origin = l.origin;
}
const Cx = 1e-4, R2 = 1 - Cx, _2 = 1 + Cx, Ex = 0.01, O2 = 0 - Ex, B2 = 0 + Ex;
function ft(a) {
  return a.max - a.min;
}
function k2(a, l, r) {
  return Math.abs(a - l) <= r;
}
function h0(a, l, r, o = 0.5) {
  a.origin = o, a.originPoint = Me(l.min, l.max, a.origin), a.scale = ft(r) / ft(l), a.translate = Me(r.min, r.max, a.origin) - a.originPoint, (a.scale >= R2 && a.scale <= _2 || isNaN(a.scale)) && (a.scale = 1), (a.translate >= O2 && a.translate <= B2 || isNaN(a.translate)) && (a.translate = 0);
}
function bl(a, l, r, o) {
  h0(a.x, l.x, r.x, o ? o.originX : void 0), h0(a.y, l.y, r.y, o ? o.originY : void 0);
}
function g0(a, l, r, o = 0) {
  const c = o ? Me(r.min, r.max, o) : r.min;
  a.min = c + l.min, a.max = a.min + ft(l);
}
function U2(a, l, r, o) {
  g0(a.x, l.x, r.x, o == null ? void 0 : o.x), g0(a.y, l.y, r.y, o == null ? void 0 : o.y);
}
function x0(a, l, r, o = 0) {
  const c = o ? Me(r.min, r.max, o) : r.min;
  a.min = l.min - c, a.max = a.min + ft(l);
}
function bo(a, l, r, o) {
  x0(a.x, l.x, r.x, o == null ? void 0 : o.x), x0(a.y, l.y, r.y, o == null ? void 0 : o.y);
}
function b0(a, l, r, o, c) {
  return a -= l, a = xo(a, 1 / r, o), c !== void 0 && (a = xo(a, 1 / c, o)), a;
}
function L2(a, l = 0, r = 1, o = 0.5, c, d = a, f = a) {
  if (en.test(l) && (l = parseFloat(l), l = Me(f.min, f.max, l / 100) - f.min), typeof l != "number")
    return;
  let h = Me(d.min, d.max, o);
  a === d && (h -= l), a.min = b0(a.min, l, r, h, c), a.max = b0(a.max, l, r, h, c);
}
function v0(a, l, [r, o, c], d, f) {
  L2(a, l[r], l[o], l[c], l.scale, d, f);
}
const H2 = ["x", "scaleX", "originX"], q2 = ["y", "scaleY", "originY"];
function y0(a, l, r, o) {
  v0(a.x, l, H2, r ? r.x : void 0, o ? o.x : void 0), v0(a.y, l, q2, r ? r.y : void 0, o ? o.y : void 0);
}
function N0(a) {
  return a.translate === 0 && a.scale === 1;
}
function Dx(a) {
  return N0(a.x) && N0(a.y);
}
function C0(a, l) {
  return a.min === l.min && a.max === l.max;
}
function F2(a, l) {
  return C0(a.x, l.x) && C0(a.y, l.y);
}
function E0(a, l) {
  return Math.round(a.min) === Math.round(l.min) && Math.round(a.max) === Math.round(l.max);
}
function Sx(a, l) {
  return E0(a.x, l.x) && E0(a.y, l.y);
}
function D0(a) {
  return ft(a.x) / ft(a.y);
}
function S0(a, l) {
  return a.translate === l.translate && a.scale === l.scale && a.originPoint === l.originPoint;
}
function $t(a) {
  return [a("x"), a("y")];
}
function G2(a, l, r) {
  let o = "";
  const c = a.x.translate / l.x, d = a.y.translate / l.y, f = (r == null ? void 0 : r.z) || 0;
  if ((c || d || f) && (o = `translate3d(${c}px, ${d}px, ${f}px) `), (l.x !== 1 || l.y !== 1) && (o += `scale(${1 / l.x}, ${1 / l.y}) `), r) {
    const { transformPerspective: g, rotate: v, pathRotation: y, rotateX: N, rotateY: S, skewX: T, skewY: U } = r;
    g && (o = `perspective(${g}px) ${o}`), v && (o += `rotate(${v}deg) `), y && (o += `rotate(${y}deg) `), N && (o += `rotateX(${N}deg) `), S && (o += `rotateY(${S}deg) `), T && (o += `skewX(${T}deg) `), U && (o += `skewY(${U}deg) `);
  }
  const h = a.x.scale * l.x, b = a.y.scale * l.y;
  return (h !== 1 || b !== 1) && (o += `scale(${h}, ${b})`), o || "none";
}
const Ax = [
  "borderTopLeftRadius",
  "borderTopRightRadius",
  "borderBottomLeftRadius",
  "borderBottomRightRadius"
], Y2 = Ax.length, A0 = (a) => typeof a == "string" ? parseFloat(a) : a, T0 = (a) => typeof a == "number" || ee.test(a);
function X2(a, l, r, o, c, d) {
  c ? (a.opacity = Me(0, r.opacity ?? 1, P2(o)), a.opacityExit = Me(l.opacity ?? 1, 0, Q2(o))) : d && (a.opacity = Me(l.opacity ?? 1, r.opacity ?? 1, o));
  for (let f = 0; f < Y2; f++) {
    const h = Ax[f];
    let b = w0(l, h), g = w0(r, h);
    if (b === void 0 && g === void 0)
      continue;
    b || (b = 0), g || (g = 0), b === 0 || g === 0 || T0(b) === T0(g) ? (a[h] = Math.max(Me(A0(b), A0(g), o), 0), (en.test(g) || en.test(b)) && (a[h] += "%")) : a[h] = g;
  }
  (l.rotate || r.rotate) && (a.rotate = Me(l.rotate || 0, r.rotate || 0, o));
}
function w0(a, l) {
  return a[l] !== void 0 ? a[l] : a.borderRadius;
}
const P2 = /* @__PURE__ */ Tx(0, 0.5, bg), Q2 = /* @__PURE__ */ Tx(0.5, 0.95, qt);
function Tx(a, l, r) {
  return (o) => o < a ? 0 : o > l ? 1 : r(/* @__PURE__ */ yl(a, l, o));
}
function Z2(a, l, r) {
  const o = st(a) ? a : hi(a);
  return o.start(sf("", o, l, r)), o.animation;
}
function El(a, l, r, o = { passive: !0 }) {
  return a.addEventListener(l, r, o), () => a.removeEventListener(l, r);
}
const K2 = (a, l) => a.depth - l.depth;
class I2 {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(l) {
    Qc(this.children, l), this.isDirty = !0;
  }
  remove(l) {
    uo(this.children, l), this.isDirty = !0;
  }
  forEach(l) {
    this.isDirty && this.children.sort(K2), this.isDirty = !1, this.children.forEach(l);
  }
}
function J2(a, l) {
  const r = ct.now(), o = ({ timestamp: c }) => {
    const d = c - r;
    d >= l && (Jn(o), a(d - l));
  };
  return ze.setup(o, !0), () => Jn(o);
}
function so(a) {
  return st(a) ? a.get() : a;
}
class $2 {
  constructor() {
    this.members = [];
  }
  add(l) {
    Qc(this.members, l);
    for (let r = this.members.length - 1; r >= 0; r--) {
      const o = this.members[r];
      if (o === l || o === this.lead || o === this.prevLead)
        continue;
      const c = o.instance;
      (!c || c.isConnected === !1) && !o.snapshot && (uo(this.members, o), o.unmount());
    }
    l.scheduleRender();
  }
  remove(l) {
    if (uo(this.members, l), l === this.prevLead && (this.prevLead = void 0), l === this.lead) {
      const r = this.members[this.members.length - 1];
      r && this.promote(r);
    }
  }
  relegate(l) {
    var r;
    for (let o = this.members.indexOf(l) - 1; o >= 0; o--) {
      const c = this.members[o];
      if (c.isPresent !== !1 && ((r = c.instance) == null ? void 0 : r.isConnected) !== !1)
        return this.promote(c), !0;
    }
    return !1;
  }
  promote(l, r) {
    var c;
    const o = this.lead;
    if (l !== o && (this.prevLead = o, this.lead = l, l.show(), o)) {
      o.updateSnapshot(), l.scheduleRender();
      const { layoutDependency: d } = o.options, { layoutDependency: f } = l.options;
      (d === void 0 || d !== f) && (l.resumeFrom = o, r && (o.preserveOpacity = !0), o.snapshot && (l.snapshot = o.snapshot, l.snapshot.latestValues = o.animationValues || o.latestValues), (c = l.root) != null && c.isUpdating && (l.isLayoutDirty = !0)), l.options.crossfade === !1 && o.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((l) => {
      var r, o, c, d, f;
      (o = (r = l.options).onExitComplete) == null || o.call(r), (f = (c = l.resumingFrom) == null ? void 0 : (d = c.options).onExitComplete) == null || f.call(d);
    });
  }
  scheduleRender() {
    this.members.forEach((l) => l.instance && l.scheduleRender(!1));
  }
  removeLeadSnapshot() {
    var l;
    (l = this.lead) != null && l.snapshot && (this.lead.snapshot = void 0);
  }
}
const oo = {
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
}, lc = ["", "X", "Y", "Z"], W2 = 1e3;
let eC = 0;
function sc(a, l, r, o) {
  const { latestValues: c } = l;
  c[a] && (r[a] = c[a], l.setStaticValue(a, 0), o && (o[a] = 0));
}
function wx(a) {
  if (a.hasCheckedOptimisedAppear = !0, a.root === a)
    return;
  const { visualElement: l } = a.options;
  if (!l)
    return;
  const r = Kg(l);
  if (window.MotionHasOptimisedAnimation(r, "transform")) {
    const { layout: c, layoutId: d } = a.options;
    window.MotionCancelOptimisedAnimation(r, "transform", ze, !(c || d));
  }
  const { parent: o } = a;
  o && !o.hasCheckedOptimisedAppear && wx(o);
}
function Vx({ attachResizeListener: a, defaultParent: l, measureScroll: r, checkIsScrollRoot: o, resetTransform: c }) {
  return class {
    constructor(f = {}, h = l == null ? void 0 : l()) {
      this.id = eC++, this.animationId = 0, this.animationCommitId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.layoutVersion = 0, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, this.nodes.forEach(aC), this.nodes.forEach(uC), this.nodes.forEach(cC), this.nodes.forEach(iC);
      }, this.resolvedRelativeTargetAt = 0, this.linkedParentVersion = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = f, this.root = h ? h.root || h : this, this.path = h ? [...h.path, h] : [], this.parent = h, this.depth = h ? h.depth + 1 : 0;
      for (let b = 0; b < this.path.length; b++)
        this.path[b].shouldResetTransform = !0;
      this.root === this && (this.nodes = new I2());
    }
    addEventListener(f, h) {
      return this.eventHandlers.has(f) || this.eventHandlers.set(f, new Zc()), this.eventHandlers.get(f).add(h);
    }
    notifyListeners(f, ...h) {
      const b = this.eventHandlers.get(f);
      b && b.notify(...h);
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
      this.isSVG = ff(f) && !n2(f), this.instance = f;
      const { layoutId: h, layout: b, visualElement: g } = this.options;
      if (g && !g.current && g.mount(f), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (b || h) && (this.isLayoutDirty = !0), a) {
        let v, y = 0;
        const N = () => this.root.updateBlockedByResize = !1;
        ze.read(() => {
          y = window.innerWidth;
        }), a(f, () => {
          const S = window.innerWidth;
          S !== y && (y = S, this.root.updateBlockedByResize = !0, v && v(), v = J2(N, 250), oo.hasAnimatedSinceResize && (oo.hasAnimatedSinceResize = !1, this.nodes.forEach(M0)));
        });
      }
      h && this.root.registerSharedNode(h, this), this.options.animate !== !1 && g && (h || b) && this.addEventListener("didUpdate", ({ delta: v, hasLayoutChanged: y, hasRelativeLayoutChanged: N, layout: S }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const T = this.options.transition || g.getDefaultTransition() || hC, { onLayoutAnimationStart: U, onLayoutAnimationComplete: M } = g.getProps(), B = !this.targetLayout || !Sx(this.targetLayout, S), H = !y && N;
        if (this.options.layoutRoot || this.resumeFrom || H || y && (B || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
          const q = {
            ...lf(T, "layout"),
            onPlay: U,
            onComplete: M
          };
          (g.shouldReduceMotion || this.options.layoutRoot) && (q.delay = 0, q.type = !1), this.startAnimation(q), this.setAnimationOrigin(v, H, q.path);
        } else
          y || M0(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = S;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const f = this.getStack();
      f && f.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), Jn(this.updateProjection);
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
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(fC), this.animationId++);
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
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && wx(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
        return;
      this.isLayoutDirty = !0;
      for (let v = 0; v < this.path.length; v++) {
        const y = this.path[v];
        y.shouldResetTransform = !0, (typeof y.latestValues.x == "string" || typeof y.latestValues.y == "string") && (y.isLayoutDirty = !0), y.updateScroll("snapshot"), y.options.layoutRoot && y.willUpdate(!1);
      }
      const { layoutId: h, layout: b } = this.options;
      if (h === void 0 && !b)
        return;
      const g = this.getTransformTemplate();
      this.prevTransformTemplateValue = g ? g(this.latestValues, "") : void 0, this.updateSnapshot(), f && this.notifyListeners("willUpdate");
    }
    update() {
      if (this.updateScheduled = !1, this.isUpdateBlocked()) {
        const b = this.updateBlockedByResize;
        this.unblockUpdate(), this.updateBlockedByResize = !1, this.clearAllSnapshots(), b && this.nodes.forEach(sC), this.nodes.forEach(V0);
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(j0);
        return;
      }
      this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach(oC), this.nodes.forEach(rC), this.nodes.forEach(tC), this.nodes.forEach(nC)) : this.nodes.forEach(j0), this.clearAllSnapshots();
      const h = ct.now();
      lt.delta = tn(0, 1e3 / 60, h - lt.timestamp), lt.timestamp = h, lt.isProcessing = !0, Ju.update.process(lt), Ju.preRender.process(lt), Ju.render.process(lt), lt.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, uf.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(lC), this.sharedNodes.forEach(mC);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, ze.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      ze.postRender(() => {
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
        for (let b = 0; b < this.path.length; b++)
          this.path[b].updateScroll();
      const f = this.layout;
      this.layout = this.measure(!1), this.layoutVersion++, this.layoutCorrected || (this.layoutCorrected = Ie()), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: h } = this.options;
      h && h.notify("LayoutMeasure", this.layout.layoutBox, f ? f.layoutBox : void 0);
    }
    updateScroll(f = "measure") {
      let h = !!(this.options.layoutScroll && this.instance);
      if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === f && (h = !1), h && this.instance) {
        const b = o(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: f,
          isRoot: b,
          offset: r(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : b
        };
      }
    }
    resetTransform() {
      if (!c)
        return;
      const f = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, h = this.projectionDelta && !Dx(this.projectionDelta), b = this.getTransformTemplate(), g = b ? b(this.latestValues, "") : void 0, v = g !== this.prevTransformTemplateValue;
      f && this.instance && (h || va(this.latestValues) || v) && (c(this.instance, g), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(f = !0) {
      const h = this.measurePageBox();
      let b = this.removeElementScroll(h);
      return f && (b = this.removeTransform(b)), gC(b), {
        animationId: this.root.animationId,
        measuredBox: h,
        layoutBox: b,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      var g;
      const { visualElement: f } = this.options;
      if (!f)
        return Ie();
      const h = f.measureViewportBox();
      if (!(((g = this.scroll) == null ? void 0 : g.wasRoot) || this.path.some(xC))) {
        const { scroll: v } = this.root;
        v && (Wt(h.x, v.offset.x), Wt(h.y, v.offset.y));
      }
      return h;
    }
    removeElementScroll(f) {
      var b;
      const h = Ie();
      if (Xt(h, f), (b = this.scroll) != null && b.wasRoot)
        return h;
      for (let g = 0; g < this.path.length; g++) {
        const v = this.path[g], { scroll: y, options: N } = v;
        v !== this.root && y && N.layoutScroll && (y.wasRoot && Xt(h, f), Wt(h.x, y.offset.x), Wt(h.y, y.offset.y));
      }
      return h;
    }
    applyTransform(f, h = !1, b) {
      var v, y;
      const g = b || Ie();
      Xt(g, f);
      for (let N = 0; N < this.path.length; N++) {
        const S = this.path[N];
        !h && S.options.layoutScroll && S.scroll && S !== S.root && (Wt(g.x, -S.scroll.offset.x), Wt(g.y, -S.scroll.offset.y)), va(S.latestValues) && lo(g, S.latestValues, (v = S.layout) == null ? void 0 : v.layoutBox);
      }
      return va(this.latestValues) && lo(g, this.latestValues, (y = this.layout) == null ? void 0 : y.layoutBox), g;
    }
    removeTransform(f) {
      var b;
      const h = Ie();
      Xt(h, f);
      for (let g = 0; g < this.path.length; g++) {
        const v = this.path[g];
        if (!va(v.latestValues))
          continue;
        let y;
        v.instance && (zc(v.latestValues) && v.updateSnapshot(), y = Ie(), Xt(y, v.measurePageBox())), y0(h, v.latestValues, (b = v.snapshot) == null ? void 0 : b.layoutBox, y);
      }
      return va(this.latestValues) && y0(h, this.latestValues), h;
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
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== lt.timestamp && this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(f = !1) {
      var S;
      const h = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = h.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = h.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = h.isSharedProjectionDirty);
      const b = !!this.resumingFrom || this !== h;
      if (!(f || b && this.isSharedProjectionDirty || this.isProjectionDirty || (S = this.parent) != null && S.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
        return;
      const { layout: v, layoutId: y } = this.options;
      if (!this.layout || !(v || y))
        return;
      this.resolvedRelativeTargetAt = lt.timestamp;
      const N = this.getClosestProjectingParent();
      N && this.linkedParentVersion !== N.layoutVersion && !N.options.layoutRoot && this.removeRelativeTarget(), !this.targetDelta && !this.relativeTarget && (this.options.layoutAnchor !== !1 && N && N.layout ? this.createRelativeTarget(N, this.layout.layoutBox, N.layout.layoutBox) : this.removeRelativeTarget()), !(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = Ie(), this.targetWithTransforms = Ie()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), U2(this.target, this.relativeTarget, this.relativeParent.target, this.options.layoutAnchor || void 0)) : this.targetDelta ? (this.resumingFrom ? this.applyTransform(this.layout.layoutBox, !1, this.target) : Xt(this.target, this.layout.layoutBox), mx(this.target, this.targetDelta)) : Xt(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1, this.options.layoutAnchor !== !1 && N && !!N.resumingFrom == !!this.resumingFrom && !N.options.layoutScroll && N.target && this.animationProgress !== 1 ? this.createRelativeTarget(N, this.target, N.target) : this.relativeParent = this.relativeTarget = void 0));
    }
    getClosestProjectingParent() {
      if (!(!this.parent || zc(this.parent.latestValues) || fx(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    createRelativeTarget(f, h, b) {
      this.relativeParent = f, this.linkedParentVersion = f.layoutVersion, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Ie(), this.relativeTargetOrigin = Ie(), bo(this.relativeTargetOrigin, h, b, this.options.layoutAnchor || void 0), Xt(this.relativeTarget, this.relativeTargetOrigin);
    }
    removeRelativeTarget() {
      this.relativeParent = this.relativeTarget = void 0;
    }
    calcProjection() {
      var T;
      const f = this.getLead(), h = !!this.resumingFrom || this !== f;
      let b = !0;
      if ((this.isProjectionDirty || (T = this.parent) != null && T.isProjectionDirty) && (b = !1), h && (this.isSharedProjectionDirty || this.isTransformDirty) && (b = !1), this.resolvedRelativeTargetAt === lt.timestamp && (b = !1), b)
        return;
      const { layout: g, layoutId: v } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(g || v))
        return;
      Xt(this.layoutCorrected, this.layout.layoutBox);
      const y = this.treeScale.x, N = this.treeScale.y;
      d2(this.layoutCorrected, this.treeScale, this.path, h), f.layout && !f.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (f.target = f.layout.layoutBox, f.targetWithTransforms = Ie());
      const { target: S } = f;
      if (!S) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (p0(this.prevProjectionDelta.x, this.projectionDelta.x), p0(this.prevProjectionDelta.y, this.projectionDelta.y)), bl(this.projectionDelta, this.layoutCorrected, S, this.latestValues), (this.treeScale.x !== y || this.treeScale.y !== N || !S0(this.projectionDelta.x, this.prevProjectionDelta.x) || !S0(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", S));
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
        const b = this.getStack();
        b && b.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      this.prevProjectionDelta = di(), this.projectionDelta = di(), this.projectionDeltaWithTransform = di();
    }
    setAnimationOrigin(f, h = !1, b) {
      const g = this.snapshot, v = g ? g.latestValues : {}, y = { ...this.latestValues }, N = di();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !h;
      const S = Ie(), T = g ? g.source : void 0, U = this.layout ? this.layout.source : void 0, M = T !== U, B = this.getStack(), H = !B || B.members.length <= 1, q = !!(M && !H && this.options.crossfade === !0 && !this.path.some(pC));
      this.animationProgress = 0;
      let F;
      const J = b == null ? void 0 : b.interpolateProjection(f);
      this.mixTargetDelta = (P) => {
        const G = P / 1e3, X = J == null ? void 0 : J(G);
        X ? (N.x.translate = X.x, N.x.scale = Me(f.x.scale, 1, G), N.x.origin = f.x.origin, N.x.originPoint = f.x.originPoint, N.y.translate = X.y, N.y.scale = Me(f.y.scale, 1, G), N.y.origin = f.y.origin, N.y.originPoint = f.y.originPoint) : (z0(N.x, f.x, G), z0(N.y, f.y, G)), this.setTargetDelta(N), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (bo(S, this.layout.layoutBox, this.relativeParent.layout.layoutBox, this.options.layoutAnchor || void 0), dC(this.relativeTarget, this.relativeTargetOrigin, S, G), F && F2(this.relativeTarget, F) && (this.isProjectionDirty = !1), F || (F = Ie()), Xt(F, this.relativeTarget)), M && (this.animationValues = y, X2(y, v, this.latestValues, G, q, H)), X && X.rotate !== void 0 && (this.animationValues || (this.animationValues = y), this.animationValues.pathRotation = X.rotate), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = G;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(f) {
      var h, b, g;
      this.notifyListeners("animationStart"), (h = this.currentAnimation) == null || h.stop(), (g = (b = this.resumingFrom) == null ? void 0 : b.currentAnimation) == null || g.stop(), this.pendingAnimation && (Jn(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = ze.update(() => {
        oo.hasAnimatedSinceResize = !0, this.motionValue || (this.motionValue = hi(0)), this.motionValue.jump(0, !1), this.currentAnimation = Z2(this.motionValue, [0, 1e3], {
          ...f,
          velocity: 0,
          isSync: !0,
          onUpdate: (v) => {
            this.mixTargetDelta(v), f.onUpdate && f.onUpdate(v);
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
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(W2), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const f = this.getLead();
      let { targetWithTransforms: h, target: b, layout: g, latestValues: v } = f;
      if (!(!h || !b || !g)) {
        if (this !== f && this.layout && g && jx(this.options.animationType, this.layout.layoutBox, g.layoutBox)) {
          b = this.target || Ie();
          const y = ft(this.layout.layoutBox.x);
          b.x.min = f.target.x.min, b.x.max = b.x.min + y;
          const N = ft(this.layout.layoutBox.y);
          b.y.min = f.target.y.min, b.y.max = b.y.min + N;
        }
        Xt(h, b), lo(h, v), bl(this.projectionDeltaWithTransform, this.layoutCorrected, h, v);
      }
    }
    registerSharedNode(f, h) {
      this.sharedNodes.has(f) || this.sharedNodes.set(f, new $2()), this.sharedNodes.get(f).add(h);
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
    promote({ needsReset: f, transition: h, preserveFollowOpacity: b } = {}) {
      const g = this.getStack();
      g && g.promote(this, b), f && (this.projectionDelta = void 0, this.needsReset = !0), h && this.setOptions({ transition: h });
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
      const { latestValues: b } = f;
      if ((b.z || b.rotate || b.rotateX || b.rotateY || b.rotateZ || b.skewX || b.skewY) && (h = !0), !h)
        return;
      const g = {};
      b.z && sc("z", f, g, this.animationValues);
      for (let v = 0; v < lc.length; v++)
        sc(`rotate${lc[v]}`, f, g, this.animationValues), sc(`skew${lc[v]}`, f, g, this.animationValues);
      f.render();
      for (const v in g)
        f.setStaticValue(v, g[v]), this.animationValues && (this.animationValues[v] = g[v]);
      f.scheduleRender();
    }
    applyProjectionStyles(f, h) {
      if (!this.instance || this.isSVG)
        return;
      if (!this.isVisible) {
        f.visibility = "hidden";
        return;
      }
      const b = this.getTransformTemplate();
      if (this.needsReset) {
        this.needsReset = !1, f.visibility = "", f.opacity = "", f.pointerEvents = so(h == null ? void 0 : h.pointerEvents) || "", f.transform = b ? b(this.latestValues, "") : "none";
        return;
      }
      const g = this.getLead();
      if (!this.projectionDelta || !this.layout || !g.target) {
        this.options.layoutId && (f.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, f.pointerEvents = so(h == null ? void 0 : h.pointerEvents) || ""), this.hasProjected && !va(this.latestValues) && (f.transform = b ? b({}, "") : "none", this.hasProjected = !1);
        return;
      }
      f.visibility = "";
      const v = g.animationValues || g.latestValues;
      this.applyTransformsToTarget();
      let y = G2(this.projectionDeltaWithTransform, this.treeScale, v);
      b && (y = b(v, y)), f.transform = y;
      const { x: N, y: S } = this.projectionDelta;
      f.transformOrigin = `${N.origin * 100}% ${S.origin * 100}% 0`, g.animationValues ? f.opacity = g === this ? v.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : v.opacityExit : f.opacity = g === this ? v.opacity !== void 0 ? v.opacity : "" : v.opacityExit !== void 0 ? v.opacityExit : 0;
      for (const T in _c) {
        if (v[T] === void 0)
          continue;
        const { correct: U, applyTo: M, isCSSVariable: B } = _c[T], H = y === "none" ? v[T] : U(v[T], g);
        if (M) {
          const q = M.length;
          for (let F = 0; F < q; F++)
            f[M[F]] = H;
        } else
          B ? this.options.visualElement.renderState.vars[T] = H : f[T] = H;
      }
      this.options.layoutId && (f.pointerEvents = g === this ? so(h == null ? void 0 : h.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((f) => {
        var h;
        return (h = f.currentAnimation) == null ? void 0 : h.stop();
      }), this.root.nodes.forEach(V0), this.root.sharedNodes.clear();
    }
  };
}
function tC(a) {
  a.updateLayout();
}
function nC(a) {
  var r;
  const l = ((r = a.resumeFrom) == null ? void 0 : r.snapshot) || a.snapshot;
  if (a.isLead() && a.layout && l && a.hasListeners("didUpdate")) {
    const { layoutBox: o, measuredBox: c } = a.layout, { animationType: d } = a.options, f = l.source !== a.layout.source;
    if (d === "size")
      $t((y) => {
        const N = f ? l.measuredBox[y] : l.layoutBox[y], S = ft(N);
        N.min = o[y].min, N.max = N.min + S;
      });
    else if (d === "x" || d === "y") {
      const y = d === "x" ? "y" : "x";
      Oc(f ? l.measuredBox[y] : l.layoutBox[y], o[y]);
    } else jx(d, l.layoutBox, o) && $t((y) => {
      const N = f ? l.measuredBox[y] : l.layoutBox[y], S = ft(o[y]);
      N.max = N.min + S, a.relativeTarget && !a.currentAnimation && (a.isProjectionDirty = !0, a.relativeTarget[y].max = a.relativeTarget[y].min + S);
    });
    const h = di();
    bl(h, o, l.layoutBox);
    const b = di();
    f ? bl(b, a.applyTransform(c, !0), l.measuredBox) : bl(b, o, l.layoutBox);
    const g = !Dx(h);
    let v = !1;
    if (!a.resumeFrom) {
      const y = a.getClosestProjectingParent();
      if (y && !y.resumeFrom) {
        const { snapshot: N, layout: S } = y;
        if (N && S) {
          const T = a.options.layoutAnchor || void 0, U = Ie();
          bo(U, l.layoutBox, N.layoutBox, T);
          const M = Ie();
          bo(M, o, S.layoutBox, T), Sx(U, M) || (v = !0), y.options.layoutRoot && (a.relativeTarget = M, a.relativeTargetOrigin = U, a.relativeParent = y);
        }
      }
    }
    a.notifyListeners("didUpdate", {
      layout: o,
      snapshot: l,
      delta: b,
      layoutDelta: h,
      hasLayoutChanged: g,
      hasRelativeLayoutChanged: v
    });
  } else if (a.isLead()) {
    const { onExitComplete: o } = a.options;
    o && o();
  }
  a.options.transition = void 0;
}
function aC(a) {
  a.parent && (a.isProjecting() || (a.isProjectionDirty = a.parent.isProjectionDirty), a.isSharedProjectionDirty || (a.isSharedProjectionDirty = !!(a.isProjectionDirty || a.parent.isProjectionDirty || a.parent.isSharedProjectionDirty)), a.isTransformDirty || (a.isTransformDirty = a.parent.isTransformDirty));
}
function iC(a) {
  a.isProjectionDirty = a.isSharedProjectionDirty = a.isTransformDirty = !1;
}
function lC(a) {
  a.clearSnapshot();
}
function V0(a) {
  a.clearMeasurements();
}
function sC(a) {
  a.isLayoutDirty = !0, a.updateLayout();
}
function j0(a) {
  a.isLayoutDirty = !1;
}
function oC(a) {
  a.isAnimationBlocked && a.layout && !a.isLayoutDirty && (a.snapshot = a.layout, a.isLayoutDirty = !0);
}
function rC(a) {
  const { visualElement: l } = a.options;
  l && l.getProps().onBeforeLayoutMeasure && l.notify("BeforeLayoutMeasure"), a.resetTransform();
}
function M0(a) {
  a.finishAnimation(), a.targetDelta = a.relativeTarget = a.target = void 0, a.isProjectionDirty = !0;
}
function uC(a) {
  a.resolveTargetDelta();
}
function cC(a) {
  a.calcProjection();
}
function fC(a) {
  a.resetSkewAndRotation();
}
function mC(a) {
  a.removeLeadSnapshot();
}
function z0(a, l, r) {
  a.translate = Me(l.translate, 0, r), a.scale = Me(l.scale, 1, r), a.origin = l.origin, a.originPoint = l.originPoint;
}
function R0(a, l, r, o) {
  a.min = Me(l.min, r.min, o), a.max = Me(l.max, r.max, o);
}
function dC(a, l, r, o) {
  R0(a.x, l.x, r.x, o), R0(a.y, l.y, r.y, o);
}
function pC(a) {
  return a.animationValues && a.animationValues.opacityExit !== void 0;
}
const hC = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, _0 = (a) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(a), O0 = _0("applewebkit/") && !_0("chrome/") ? Math.round : qt;
function B0(a) {
  a.min = O0(a.min), a.max = O0(a.max);
}
function gC(a) {
  B0(a.x), B0(a.y);
}
function jx(a, l, r) {
  return a === "position" || a === "preserve-aspect" && !k2(D0(l), D0(r), 0.2);
}
function xC(a) {
  var l;
  return a !== a.root && ((l = a.scroll) == null ? void 0 : l.wasRoot);
}
const bC = Vx({
  attachResizeListener: (a, l) => El(a, "resize", l),
  measureScroll: () => {
    var a, l;
    return {
      x: document.documentElement.scrollLeft || ((a = document.body) == null ? void 0 : a.scrollLeft) || 0,
      y: document.documentElement.scrollTop || ((l = document.body) == null ? void 0 : l.scrollTop) || 0
    };
  },
  checkIsScrollRoot: () => !0
}), oc = {
  current: void 0
}, Mx = Vx({
  measureScroll: (a) => ({
    x: a.scrollLeft,
    y: a.scrollTop
  }),
  defaultParent: () => {
    if (!oc.current) {
      const a = new bC({});
      a.mount(window), a.setOptions({ layoutScroll: !0 }), oc.current = a;
    }
    return oc.current;
  },
  resetTransform: (a, l) => {
    a.style.transform = l !== void 0 ? l : "none";
  },
  checkIsScrollRoot: (a) => window.getComputedStyle(a).position === "fixed"
}), gf = Y.createContext({
  transformPagePoint: (a) => a,
  isStatic: !1,
  reducedMotion: "never"
});
function k0(a, l) {
  if (typeof a == "function")
    return a(l);
  a != null && (a.current = l);
}
function vC(...a) {
  return (l) => {
    let r = !1;
    const o = a.map((c) => {
      const d = k0(c, l);
      return !r && typeof d == "function" && (r = !0), d;
    });
    if (r)
      return () => {
        for (let c = 0; c < o.length; c++) {
          const d = o[c];
          typeof d == "function" ? d() : k0(a[c], null);
        }
      };
  };
}
function yC(...a) {
  return Y.useCallback(vC(...a), a);
}
class NC extends Y.Component {
  getSnapshotBeforeUpdate(l) {
    const r = this.props.childRef.current;
    if (to(r) && l.isPresent && !this.props.isPresent && this.props.pop !== !1) {
      const o = r.offsetParent, c = to(o) && o.offsetWidth || 0, d = to(o) && o.offsetHeight || 0, f = getComputedStyle(r), h = this.props.sizeRef.current;
      h.height = parseFloat(f.height), h.width = parseFloat(f.width), h.top = r.offsetTop, h.left = r.offsetLeft, h.right = c - h.width - h.left, h.bottom = d - h.height - h.top, h.direction = f.direction;
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
function CC({ children: a, isPresent: l, anchorX: r, anchorY: o, root: c, pop: d }) {
  var N;
  const f = Y.useId(), h = Y.useRef(null), b = Y.useRef({
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    direction: "ltr"
  }), { nonce: g } = Y.useContext(gf), v = ((N = a.props) == null ? void 0 : N.ref) ?? (a == null ? void 0 : a.ref), y = yC(h, v);
  return Y.useInsertionEffect(() => {
    const { width: S, height: T, top: U, left: M, right: B, bottom: H, direction: q } = b.current;
    if (l || d === !1 || !h.current || !S || !T)
      return;
    const F = q === "rtl", J = r === "left" ? F ? `right: ${B}` : `left: ${M}` : F ? `left: ${M}` : `right: ${B}`, P = o === "bottom" ? `bottom: ${H}` : `top: ${U}`;
    h.current.dataset.motionPopId = f;
    const G = document.createElement("style");
    g && (G.nonce = g);
    const X = c ?? document.head;
    return X.appendChild(G), G.sheet && G.sheet.insertRule(`
          [data-motion-pop-id="${f}"] {
            position: absolute !important;
            width: ${S}px !important;
            height: ${T}px !important;
            ${J}px !important;
            ${P}px !important;
          }
        `), () => {
      var W;
      (W = h.current) == null || W.removeAttribute("data-motion-pop-id"), X.contains(G) && X.removeChild(G);
    };
  }, [l]), Cn.jsx(NC, { isPresent: l, childRef: h, sizeRef: b, pop: d, children: d === !1 ? a : Y.cloneElement(a, { ref: y }) });
}
const EC = ({ children: a, initial: l, isPresent: r, onExitComplete: o, custom: c, presenceAffectsLayout: d, mode: f, anchorX: h, anchorY: b, root: g }) => {
  const v = Pc(DC), y = Y.useId();
  let N = !0, S = Y.useMemo(() => (N = !1, {
    id: y,
    initial: l,
    isPresent: r,
    custom: c,
    onExitComplete: (T) => {
      v.set(T, !0);
      for (const U of v.values())
        if (!U)
          return;
      o && o();
    },
    register: (T) => (v.set(T, !1), () => v.delete(T))
  }), [r, v, o]);
  return d && N && (S = { ...S }), Y.useMemo(() => {
    v.forEach((T, U) => v.set(U, !1));
  }, [r]), Y.useEffect(() => {
    !r && !v.size && o && o();
  }, [r]), a = Cn.jsx(CC, { pop: f === "popLayout", isPresent: r, anchorX: h, anchorY: b, root: g, children: a }), Cn.jsx(No.Provider, { value: S, children: a });
};
function DC() {
  return /* @__PURE__ */ new Map();
}
function zx(a = !0) {
  const l = Y.useContext(No);
  if (l === null)
    return [!0, null];
  const { isPresent: r, onExitComplete: o, register: c } = l, d = Y.useId();
  Y.useEffect(() => {
    if (a)
      return c(d);
  }, [a]);
  const f = Y.useCallback(() => a && o && o(d), [d, o, a]);
  return !r && o ? [!1, f] : [!0];
}
const Js = (a) => a.key || "";
function U0(a) {
  const l = [];
  return Y.Children.forEach(a, (r) => {
    Y.isValidElement(r) && l.push(r);
  }), l;
}
const vo = ({ children: a, custom: l, initial: r = !0, onExitComplete: o, presenceAffectsLayout: c = !0, mode: d = "sync", propagate: f = !1, anchorX: h = "left", anchorY: b = "top", root: g }) => {
  const [v, y] = zx(f), N = Y.useMemo(() => U0(a), [a]), S = f && !v ? [] : N.map(Js), T = Y.useRef(!0), U = Y.useRef(N), M = Pc(() => /* @__PURE__ */ new Map()), B = Y.useRef(/* @__PURE__ */ new Set()), [H, q] = Y.useState(N), [F, J] = Y.useState(N);
  sg(() => {
    T.current = !1, U.current = N;
    for (let X = 0; X < F.length; X++) {
      const W = Js(F[X]);
      S.includes(W) ? (M.delete(W), B.current.delete(W)) : M.get(W) !== !0 && M.set(W, !1);
    }
  }, [F, S.length, S.join("-")]);
  const P = [];
  if (N !== H) {
    let X = [...N];
    for (let W = 0; W < F.length; W++) {
      const K = F[W], ge = Js(K);
      S.includes(ge) || (X.splice(W, 0, K), P.push(K));
    }
    return d === "wait" && P.length && (X = P), J(U0(X)), q(N), null;
  }
  const { forceRender: G } = Y.useContext(Xc);
  return Cn.jsx(Cn.Fragment, { children: F.map((X) => {
    const W = Js(X), K = f && !v ? !1 : N === F || S.includes(W), ge = () => {
      if (B.current.has(W))
        return;
      if (M.has(W))
        B.current.add(W), M.set(W, !0);
      else
        return;
      let ve = !0;
      M.forEach((We) => {
        We || (ve = !1);
      }), ve && (G == null || G(), J(U.current), f && (y == null || y()), o && o());
    };
    return Cn.jsx(EC, { isPresent: K, initial: !T.current || r ? void 0 : !1, custom: l, presenceAffectsLayout: c, mode: d, root: g, onExitComplete: K ? void 0 : ge, anchorX: h, anchorY: b, children: X }, W);
  }) });
}, Rx = Y.createContext({ strict: !1 }), L0 = {
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
let H0 = !1;
function SC() {
  if (H0)
    return;
  const a = {};
  for (const l in L0)
    a[l] = {
      isEnabled: (r) => L0[l].some((o) => !!r[o])
    };
  rx(a), H0 = !0;
}
function _x() {
  return SC(), u2();
}
function AC(a) {
  const l = _x();
  for (const r in a)
    l[r] = {
      ...l[r],
      ...a[r]
    };
  rx(l);
}
const TC = /* @__PURE__ */ new Set([
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
function yo(a) {
  return a.startsWith("while") || a.startsWith("drag") && a !== "draggable" || a.startsWith("layout") || a.startsWith("onTap") || a.startsWith("onPan") || a.startsWith("onLayout") || TC.has(a);
}
let Ox = (a) => !yo(a);
function wC(a) {
  typeof a == "function" && (Ox = (l) => l.startsWith("on") ? !yo(l) : a(l));
}
try {
  wC(require("@emotion/is-prop-valid").default);
} catch {
}
function VC(a, l, r) {
  const o = {};
  for (const c in a)
    c === "values" && typeof a.values == "object" || st(a[c]) || (Ox(c) || r === !0 && yo(c) || !l && !yo(c) || // If trying to use native HTML drag events, forward drag listeners
    a.draggable && c.startsWith("onDrag")) && (o[c] = a[c]);
  return o;
}
const So = /* @__PURE__ */ Y.createContext({});
function jC(a, l) {
  if (Do(a)) {
    const { initial: r, animate: o } = a;
    return {
      initial: r === !1 || Cl(r) ? r : void 0,
      animate: Cl(o) ? o : void 0
    };
  }
  return a.inherit !== !1 ? l : {};
}
function MC(a) {
  const { initial: l, animate: r } = jC(a, Y.useContext(So));
  return Y.useMemo(() => ({ initial: l, animate: r }), [q0(l), q0(r)]);
}
function q0(a) {
  return Array.isArray(a) ? a.join(" ") : a;
}
const xf = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function Bx(a, l, r) {
  for (const o in l)
    !st(l[o]) && !hx(o, r) && (a[o] = l[o]);
}
function zC({ transformTemplate: a }, l) {
  return Y.useMemo(() => {
    const r = xf();
    return pf(r, l, a), Object.assign({}, r.vars, r.style);
  }, [l]);
}
function RC(a, l) {
  const r = a.style || {}, o = {};
  return Bx(o, r, a), Object.assign(o, zC(a, l)), o;
}
function _C(a, l) {
  const r = {}, o = RC(a, l);
  return a.drag && a.dragListener !== !1 && (r.draggable = !1, o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none", o.touchAction = a.drag === !0 ? "none" : `pan-${a.drag === "x" ? "y" : "x"}`), a.tabIndex === void 0 && (a.onTap || a.onTapStart || a.whileTap) && (r.tabIndex = 0), r.style = o, r;
}
const kx = () => ({
  ...xf(),
  attrs: {}
});
function OC(a, l, r, o) {
  const c = Y.useMemo(() => {
    const d = kx();
    return gx(d, l, bx(o), a.transformTemplate, a.style), {
      ...d.attrs,
      style: { ...d.style }
    };
  }, [l]);
  if (a.style) {
    const d = {};
    Bx(d, a.style, a), c.style = { ...d, ...c.style };
  }
  return c;
}
const BC = [
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
function bf(a) {
  return (
    /**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */
    typeof a != "string" || /**
     * If it contains a dash, the element is a custom HTML webcomponent.
     */
    a.includes("-") ? !1 : (
      /**
       * If it's in our list of lowercase SVG tags, it's an SVG component
       */
      !!(BC.indexOf(a) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(a))
    )
  );
}
function kC(a, l, r, { latestValues: o }, c, d = !1, f) {
  const b = (f ?? bf(a) ? OC : _C)(l, o, c, a), g = VC(l, typeof a == "string", d), v = a !== Y.Fragment ? { ...g, ...b, ref: r } : {}, { children: y } = l, N = Y.useMemo(() => st(y) ? y.get() : y, [y]);
  return Y.createElement(a, {
    ...v,
    children: N
  });
}
function UC({ scrapeMotionValuesFromProps: a, createRenderState: l }, r, o, c) {
  return {
    latestValues: LC(r, o, c, a),
    renderState: l()
  };
}
function LC(a, l, r, o) {
  const c = {}, d = o(a, {});
  for (const N in d)
    c[N] = so(d[N]);
  let { initial: f, animate: h } = a;
  const b = Do(a), g = sx(a);
  l && g && !b && a.inherit !== !1 && (f === void 0 && (f = l.initial), h === void 0 && (h = l.animate));
  let v = r ? r.initial === !1 : !1;
  v = v || f === !1;
  const y = v ? h : f;
  if (y && typeof y != "boolean" && !Eo(y)) {
    const N = Array.isArray(y) ? y : [y];
    for (let S = 0; S < N.length; S++) {
      const T = of(a, N[S]);
      if (T) {
        const { transitionEnd: U, transition: M, ...B } = T;
        for (const H in B) {
          let q = B[H];
          if (Array.isArray(q)) {
            const F = v ? q.length - 1 : 0;
            q = q[F];
          }
          q !== null && (c[H] = q);
        }
        for (const H in U)
          c[H] = U[H];
      }
    }
  }
  return c;
}
const Ux = (a) => (l, r) => {
  const o = Y.useContext(So), c = Y.useContext(No), d = () => UC(a, l, o, c);
  return r ? d() : Pc(d);
}, HC = /* @__PURE__ */ Ux({
  scrapeMotionValuesFromProps: hf,
  createRenderState: xf
}), qC = /* @__PURE__ */ Ux({
  scrapeMotionValuesFromProps: vx,
  createRenderState: kx
}), FC = Symbol.for("motionComponentSymbol");
function GC(a, l, r) {
  const o = Y.useRef(r);
  Y.useInsertionEffect(() => {
    o.current = r;
  });
  const c = Y.useRef(null);
  return Y.useCallback((d) => {
    var h;
    d && ((h = a.onMount) == null || h.call(a, d)), l && (d ? l.mount(d) : l.unmount());
    const f = o.current;
    if (typeof f == "function")
      if (d) {
        const b = f(d);
        typeof b == "function" && (c.current = b);
      } else c.current ? (c.current(), c.current = null) : f(d);
    else f && (f.current = d);
  }, [l]);
}
const Lx = Y.createContext({});
function ci(a) {
  return a && typeof a == "object" && Object.prototype.hasOwnProperty.call(a, "current");
}
function YC(a, l, r, o, c, d) {
  var q, F;
  const { visualElement: f } = Y.useContext(So), h = Y.useContext(Rx), b = Y.useContext(No), g = Y.useContext(gf), v = g.reducedMotion, y = g.skipAnimations, N = Y.useRef(null), S = Y.useRef(!1);
  o = o || h.renderer, !N.current && o && (N.current = o(a, {
    visualState: l,
    parent: f,
    props: r,
    presenceContext: b,
    blockInitialAnimation: b ? b.initial === !1 : !1,
    reducedMotionConfig: v,
    skipAnimations: y,
    isSVG: d
  }), S.current && N.current && (N.current.manuallyAnimateOnMount = !0));
  const T = N.current, U = Y.useContext(Lx);
  T && !T.projection && c && (T.type === "html" || T.type === "svg") && XC(N.current, r, c, U);
  const M = Y.useRef(!1);
  Y.useInsertionEffect(() => {
    T && M.current && T.update(r, b);
  });
  const B = r[Zg], H = Y.useRef(!!B && typeof window < "u" && !((q = window.MotionHandoffIsComplete) != null && q.call(window, B)) && ((F = window.MotionHasOptimisedAnimation) == null ? void 0 : F.call(window, B)));
  return sg(() => {
    S.current = !0, T && (M.current = !0, window.MotionIsMounted = !0, T.updateFeatures(), T.scheduleRenderMicrotask(), H.current && T.animationState && T.animationState.animateChanges());
  }), Y.useEffect(() => {
    T && (!H.current && T.animationState && T.animationState.animateChanges(), H.current && (queueMicrotask(() => {
      var J;
      (J = window.MotionHandoffMarkAsComplete) == null || J.call(window, B);
    }), H.current = !1), T.enteringChildren = void 0);
  }), T;
}
function XC(a, l, r, o) {
  const { layoutId: c, layout: d, drag: f, dragConstraints: h, layoutScroll: b, layoutRoot: g, layoutAnchor: v, layoutCrossfade: y } = l;
  a.projection = new r(a.latestValues, l["data-framer-portal-id"] ? void 0 : Hx(a.parent)), a.projection.setOptions({
    layoutId: c,
    layout: d,
    alwaysMeasureLayout: !!f || h && ci(h),
    visualElement: a,
    /**
     * TODO: Update options in an effect. This could be tricky as it'll be too late
     * to update by the time layout animations run.
     * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
     * ensuring it gets called if there's no potential layout animations.
     *
     */
    animationType: typeof d == "string" ? d : "both",
    initialPromotionConfig: o,
    crossfade: y,
    layoutScroll: b,
    layoutRoot: g,
    layoutAnchor: v
  });
}
function Hx(a) {
  if (a)
    return a.options.allowProjection !== !1 ? a.projection : Hx(a.parent);
}
function rc(a, { forwardMotionProps: l = !1, type: r } = {}, o, c) {
  o && AC(o);
  const d = r ? r === "svg" : bf(a), f = d ? qC : HC;
  function h(g, v) {
    let y;
    const N = {
      ...Y.useContext(gf),
      ...g,
      layoutId: PC(g)
    }, { isStatic: S } = N, T = MC(g), U = f(g, S);
    if (!S && typeof window < "u") {
      QC();
      const M = ZC(N);
      y = M.MeasureLayout, T.visualElement = YC(a, U, N, c, M.ProjectionNode, d);
    }
    return Cn.jsxs(So.Provider, { value: T, children: [y && T.visualElement ? Cn.jsx(y, { visualElement: T.visualElement, ...N }) : null, kC(a, g, GC(U, T.visualElement, v), U, S, l, d)] });
  }
  h.displayName = `motion.${typeof a == "string" ? a : `create(${a.displayName ?? a.name ?? ""})`}`;
  const b = Y.forwardRef(h);
  return b[FC] = a, b;
}
function PC({ layoutId: a }) {
  const l = Y.useContext(Xc).id;
  return l && a !== void 0 ? l + "-" + a : a;
}
function QC(a, l) {
  Y.useContext(Rx).strict;
}
function ZC(a) {
  const l = _x(), { drag: r, layout: o } = l;
  if (!r && !o)
    return {};
  const c = { ...r, ...o };
  return {
    MeasureLayout: r != null && r.isEnabled(a) || o != null && o.isEnabled(a) ? c.MeasureLayout : void 0,
    ProjectionNode: c.ProjectionNode
  };
}
function KC(a, l) {
  if (typeof Proxy > "u")
    return rc;
  const r = /* @__PURE__ */ new Map(), o = (d, f) => rc(d, f, a, l), c = (d, f) => o(d, f);
  return new Proxy(c, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (d, f) => f === "create" ? o : (r.has(f) || r.set(f, rc(f, void 0, a, l)), r.get(f))
  });
}
const IC = (a, l) => l.isSVG ?? bf(a) ? new A2(l) : new y2(l, {
  allowProjection: a !== Y.Fragment
});
class JC extends $n {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(l) {
    super(l), l.animationState || (l.animationState = M2(l));
  }
  updateAnimationControlsSubscription() {
    const { animate: l } = this.node.getProps();
    Eo(l) && (this.unmountControls = l.subscribe(this.node));
  }
  /**
   * Subscribe any provided AnimationControls to the component's VisualElement
   */
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: l } = this.node.getProps(), { animate: r } = this.node.prevProps || {};
    l !== r && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var l;
    this.node.animationState.reset(), (l = this.unmountControls) == null || l.call(this);
  }
}
let $C = 0;
class WC extends $n {
  constructor() {
    super(...arguments), this.id = $C++, this.isExitComplete = !1;
  }
  update() {
    var d;
    if (!this.node.presenceContext)
      return;
    const { isPresent: l, onExitComplete: r } = this.node.presenceContext, { isPresent: o } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || l === o)
      return;
    if (l && o === !1) {
      if (this.isExitComplete) {
        const { initial: f, custom: h } = this.node.getProps();
        if (typeof f == "string" || typeof f == "object" && f !== null && !Array.isArray(f)) {
          const b = Da(this.node, f, h);
          if (b) {
            const { transition: g, transitionEnd: v, ...y } = b;
            for (const N in y)
              (d = this.node.getValue(N)) == null || d.jump(y[N]);
          }
        }
        this.node.animationState.reset(), this.node.animationState.animateChanges();
      } else
        this.node.animationState.setActive("exit", !1);
      this.isExitComplete = !1;
      return;
    }
    const c = this.node.animationState.setActive("exit", !l);
    r && !l && c.then(() => {
      this.isExitComplete = !0, r(this.id);
    });
  }
  mount() {
    const { register: l, onExitComplete: r } = this.node.presenceContext || {};
    r && r(this.id), l && (this.unmount = l(this.id));
  }
  unmount() {
  }
}
const eE = {
  animation: {
    Feature: JC
  },
  exit: {
    Feature: WC
  }
};
function Vl(a) {
  return {
    point: {
      x: a.pageX,
      y: a.pageY
    }
  };
}
const tE = (a) => (l) => cf(l) && a(l, Vl(l));
function vl(a, l, r, o) {
  return El(a, l, tE(r), o);
}
const qx = ({ current: a }) => a ? a.ownerDocument.defaultView : null, F0 = (a, l) => Math.abs(a - l);
function nE(a, l) {
  const r = F0(a.x, l.x), o = F0(a.y, l.y);
  return Math.sqrt(r ** 2 + o ** 2);
}
const G0 = /* @__PURE__ */ new Set(["auto", "scroll"]);
class Fx {
  constructor(l, r, { transformPagePoint: o, contextWindow: c = window, dragSnapToOrigin: d = !1, distanceThreshold: f = 3, element: h } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.lastRawMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.scrollPositions = /* @__PURE__ */ new Map(), this.removeScrollListeners = null, this.onElementScroll = (S) => {
      this.handleScroll(S.target);
    }, this.onWindowScroll = () => {
      this.handleScroll(window);
    }, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      this.lastRawMoveEventInfo && (this.lastMoveEventInfo = $s(this.lastRawMoveEventInfo, this.transformPagePoint));
      const S = uc(this.lastMoveEventInfo, this.history), T = this.startEvent !== null, U = nE(S.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
      if (!T && !U)
        return;
      const { point: M } = S, { timestamp: B } = lt;
      this.history.push({ ...M, timestamp: B });
      const { onStart: H, onMove: q } = this.handlers;
      T || (H && H(this.lastMoveEvent, S), this.startEvent = this.lastMoveEvent), q && q(this.lastMoveEvent, S);
    }, this.handlePointerMove = (S, T) => {
      this.lastMoveEvent = S, this.lastRawMoveEventInfo = T, this.lastMoveEventInfo = $s(T, this.transformPagePoint), ze.update(this.updatePoint, !0);
    }, this.handlePointerUp = (S, T) => {
      this.end();
      const { onEnd: U, onSessionEnd: M, resumeAnimation: B } = this.handlers;
      if ((this.dragSnapToOrigin || !this.startEvent) && B && B(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const H = uc(S.type === "pointercancel" ? this.lastMoveEventInfo : $s(T, this.transformPagePoint), this.history);
      this.startEvent && U && U(S, H), M && M(S, H);
    }, !cf(l))
      return;
    this.dragSnapToOrigin = d, this.handlers = r, this.transformPagePoint = o, this.distanceThreshold = f, this.contextWindow = c || window;
    const b = Vl(l), g = $s(b, this.transformPagePoint), { point: v } = g, { timestamp: y } = lt;
    this.history = [{ ...v, timestamp: y }];
    const { onSessionStart: N } = r;
    N && N(l, uc(g, this.history)), this.removeListeners = Al(vl(this.contextWindow, "pointermove", this.handlePointerMove), vl(this.contextWindow, "pointerup", this.handlePointerUp), vl(this.contextWindow, "pointercancel", this.handlePointerUp)), h && this.startScrollTracking(h);
  }
  /**
   * Start tracking scroll on ancestors and window.
   */
  startScrollTracking(l) {
    let r = l.parentElement;
    for (; r; ) {
      const o = getComputedStyle(r);
      (G0.has(o.overflowX) || G0.has(o.overflowY)) && this.scrollPositions.set(r, {
        x: r.scrollLeft,
        y: r.scrollTop
      }), r = r.parentElement;
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
  handleScroll(l) {
    const r = this.scrollPositions.get(l);
    if (!r)
      return;
    const o = l === window, c = o ? { x: window.scrollX, y: window.scrollY } : {
      x: l.scrollLeft,
      y: l.scrollTop
    }, d = { x: c.x - r.x, y: c.y - r.y };
    d.x === 0 && d.y === 0 || (o ? this.lastMoveEventInfo && (this.lastMoveEventInfo.point.x += d.x, this.lastMoveEventInfo.point.y += d.y) : this.history.length > 0 && (this.history[0].x -= d.x, this.history[0].y -= d.y), this.scrollPositions.set(l, c), ze.update(this.updatePoint, !0));
  }
  updateHandlers(l) {
    this.handlers = l;
  }
  end() {
    this.removeListeners && this.removeListeners(), this.removeScrollListeners && this.removeScrollListeners(), this.scrollPositions.clear(), Jn(this.updatePoint);
  }
}
function $s(a, l) {
  return l ? { point: l(a.point) } : a;
}
function Y0(a, l) {
  return { x: a.x - l.x, y: a.y - l.y };
}
function uc({ point: a }, l) {
  return {
    point: a,
    delta: Y0(a, Gx(l)),
    offset: Y0(a, aE(l)),
    velocity: iE(l, 0.1)
  };
}
function aE(a) {
  return a[0];
}
function Gx(a) {
  return a[a.length - 1];
}
function iE(a, l) {
  if (a.length < 2)
    return { x: 0, y: 0 };
  let r = a.length - 1, o = null;
  const c = Gx(a);
  for (; r >= 0 && (o = a[r], !(c.timestamp - o.timestamp > /* @__PURE__ */ vt(l))); )
    r--;
  if (!o)
    return { x: 0, y: 0 };
  o === a[0] && a.length > 2 && c.timestamp - o.timestamp > /* @__PURE__ */ vt(l) * 2 && (o = a[1]);
  const d = /* @__PURE__ */ Ht(c.timestamp - o.timestamp);
  if (d === 0)
    return { x: 0, y: 0 };
  const f = {
    x: (c.x - o.x) / d,
    y: (c.y - o.y) / d
  };
  return f.x === 1 / 0 && (f.x = 0), f.y === 1 / 0 && (f.y = 0), f;
}
function lE(a, { min: l, max: r }, o) {
  return l !== void 0 && a < l ? a = o ? Me(l, a, o.min) : Math.max(a, l) : r !== void 0 && a > r && (a = o ? Me(r, a, o.max) : Math.min(a, r)), a;
}
function X0(a, l, r) {
  return {
    min: l !== void 0 ? a.min + l : void 0,
    max: r !== void 0 ? a.max + r - (a.max - a.min) : void 0
  };
}
function sE(a, { top: l, left: r, bottom: o, right: c }) {
  return {
    x: X0(a.x, r, c),
    y: X0(a.y, l, o)
  };
}
function P0(a, l) {
  let r = l.min - a.min, o = l.max - a.max;
  return l.max - l.min < a.max - a.min && ([r, o] = [o, r]), { min: r, max: o };
}
function oE(a, l) {
  return {
    x: P0(a.x, l.x),
    y: P0(a.y, l.y)
  };
}
function rE(a, l) {
  let r = 0.5;
  const o = ft(a), c = ft(l);
  return c > o ? r = /* @__PURE__ */ yl(l.min, l.max - o, a.min) : o > c && (r = /* @__PURE__ */ yl(a.min, a.max - c, l.min)), tn(0, 1, r);
}
function uE(a, l) {
  const r = {};
  return l.min !== void 0 && (r.min = l.min - a.min), l.max !== void 0 && (r.max = l.max - a.min), r;
}
const Bc = 0.35;
function cE(a = Bc) {
  return a === !1 ? a = 0 : a === !0 && (a = Bc), {
    x: Q0(a, "left", "right"),
    y: Q0(a, "top", "bottom")
  };
}
function Q0(a, l, r) {
  return {
    min: Z0(a, l),
    max: Z0(a, r)
  };
}
function Z0(a, l) {
  return typeof a == "number" ? a : a[l] || 0;
}
const fE = /* @__PURE__ */ new WeakMap();
class mE {
  constructor(l) {
    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = Ie(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = l;
  }
  start(l, { snapToCursor: r = !1, distanceThreshold: o } = {}) {
    const { presenceContext: c } = this.visualElement;
    if (c && c.isPresent === !1)
      return;
    const d = (y) => {
      r && this.snapToCursor(Vl(y).point), this.stopAnimation();
    }, f = (y, N) => {
      const { drag: S, dragPropagation: T, onDragStart: U } = this.getProps();
      if (S && !T && (this.openDragLock && this.openDragLock(), this.openDragLock = LN(S), !this.openDragLock))
        return;
      this.latestPointerEvent = y, this.latestPanInfo = N, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), $t((B) => {
        let H = this.getAxisMotionValue(B).get() || 0;
        if (en.test(H)) {
          const { projection: q } = this.visualElement;
          if (q && q.layout) {
            const F = q.layout.layoutBox[B];
            F && (H = ft(F) * (parseFloat(H) / 100));
          }
        }
        this.originPoint[B] = H;
      }), U && ze.update(() => U(y, N), !1, !0), Ac(this.visualElement, "transform");
      const { animationState: M } = this.visualElement;
      M && M.setActive("whileDrag", !0);
    }, h = (y, N) => {
      this.latestPointerEvent = y, this.latestPanInfo = N;
      const { dragPropagation: S, dragDirectionLock: T, onDirectionLock: U, onDrag: M } = this.getProps();
      if (!S && !this.openDragLock)
        return;
      const { offset: B } = N;
      if (T && this.currentDirection === null) {
        this.currentDirection = pE(B), this.currentDirection !== null && U && U(this.currentDirection);
        return;
      }
      this.updateAxis("x", N.point, B), this.updateAxis("y", N.point, B), this.visualElement.render(), M && ze.update(() => M(y, N), !1, !0);
    }, b = (y, N) => {
      this.latestPointerEvent = y, this.latestPanInfo = N, this.stop(y, N), this.latestPointerEvent = null, this.latestPanInfo = null;
    }, g = () => {
      const { dragSnapToOrigin: y } = this.getProps();
      (y || this.constraints) && this.startAnimation({ x: 0, y: 0 });
    }, { dragSnapToOrigin: v } = this.getProps();
    this.panSession = new Fx(l, {
      onSessionStart: d,
      onStart: f,
      onMove: h,
      onSessionEnd: b,
      resumeAnimation: g
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: v,
      distanceThreshold: o,
      contextWindow: qx(this.visualElement),
      element: this.visualElement.current
    });
  }
  /**
   * @internal
   */
  stop(l, r) {
    const o = l || this.latestPointerEvent, c = r || this.latestPanInfo, d = this.isDragging;
    if (this.cancel(), !d || !c || !o)
      return;
    const { velocity: f } = c;
    this.startAnimation(f);
    const { onDragEnd: h } = this.getProps();
    h && ze.postRender(() => h(o, c));
  }
  /**
   * @internal
   */
  cancel() {
    this.isDragging = !1;
    const { projection: l, animationState: r } = this.visualElement;
    l && (l.isAnimationBlocked = !1), this.endPanSession();
    const { dragPropagation: o } = this.getProps();
    !o && this.openDragLock && (this.openDragLock(), this.openDragLock = null), r && r.setActive("whileDrag", !1);
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
  updateAxis(l, r, o) {
    const { drag: c } = this.getProps();
    if (!o || !Ws(l, c, this.currentDirection))
      return;
    const d = this.getAxisMotionValue(l);
    let f = this.originPoint[l] + o[l];
    this.constraints && this.constraints[l] && (f = lE(f, this.constraints[l], this.elastic[l])), d.set(f);
  }
  resolveConstraints() {
    var d;
    const { dragConstraints: l, dragElastic: r } = this.getProps(), o = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (d = this.visualElement.projection) == null ? void 0 : d.layout, c = this.constraints;
    l && ci(l) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : l && o ? this.constraints = sE(o.layoutBox, l) : this.constraints = !1, this.elastic = cE(r), c !== this.constraints && !ci(l) && o && this.constraints && !this.hasMutatedConstraints && $t((f) => {
      this.constraints !== !1 && this.getAxisMotionValue(f) && (this.constraints[f] = uE(o.layoutBox[f], this.constraints[f]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: l, onMeasureDragConstraints: r } = this.getProps();
    if (!l || !ci(l))
      return !1;
    const o = l.current;
    Sa(o !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.", "drag-constraints-ref");
    const { projection: c } = this.visualElement;
    if (!c || !c.layout)
      return !1;
    c.root && (c.root.scroll = void 0, c.root.updateScroll());
    const d = p2(o, c.root, this.visualElement.getTransformPagePoint());
    let f = oE(c.layout.layoutBox, d);
    if (r) {
      const h = r(f2(f));
      this.hasMutatedConstraints = !!h, h && (f = cx(h));
    }
    return f;
  }
  startAnimation(l) {
    const { drag: r, dragMomentum: o, dragElastic: c, dragTransition: d, dragSnapToOrigin: f, onDragTransitionEnd: h } = this.getProps(), b = this.constraints || {}, g = $t((v) => {
      if (!Ws(v, r, this.currentDirection))
        return;
      let y = b && b[v] || {};
      (f === !0 || f === v) && (y = { min: 0, max: 0 });
      const N = c ? 200 : 1e6, S = c ? 40 : 1e7, T = {
        type: "inertia",
        velocity: o ? l[v] : 0,
        bounceStiffness: N,
        bounceDamping: S,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...d,
        ...y
      };
      return this.startAxisValueAnimation(v, T);
    });
    return Promise.all(g).then(h);
  }
  startAxisValueAnimation(l, r) {
    const o = this.getAxisMotionValue(l);
    return Ac(this.visualElement, l), o.start(sf(l, o, 0, r, this.visualElement, !1));
  }
  stopAnimation() {
    $t((l) => this.getAxisMotionValue(l).stop());
  }
  /**
   * Drag works differently depending on which props are provided.
   *
   * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
   * - Otherwise, we apply the delta to the x/y motion values.
   */
  getAxisMotionValue(l) {
    const r = `_drag${l.toUpperCase()}`, c = this.visualElement.getProps()[r];
    return c || this.visualElement.getValue(l, this.visualElement.latestValues[l] ?? 0);
  }
  snapToCursor(l) {
    $t((r) => {
      const { drag: o } = this.getProps();
      if (!Ws(r, o, this.currentDirection))
        return;
      const { projection: c } = this.visualElement, d = this.getAxisMotionValue(r);
      if (c && c.layout) {
        const { min: f, max: h } = c.layout.layoutBox[r], b = d.get() || 0;
        d.set(l[r] - Me(f, h, 0.5) + b);
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
    const { drag: l, dragConstraints: r } = this.getProps(), { projection: o } = this.visualElement;
    if (!ci(r) || !o || !this.constraints)
      return;
    this.stopAnimation();
    const c = { x: 0, y: 0 };
    $t((f) => {
      const h = this.getAxisMotionValue(f);
      if (h && this.constraints !== !1) {
        const b = h.get();
        c[f] = rE({ min: b, max: b }, this.constraints[f]);
      }
    });
    const { transformTemplate: d } = this.visualElement.getProps();
    this.visualElement.current.style.transform = d ? d({}, "") : "none", o.root && o.root.updateScroll(), o.updateLayout(), this.constraints = !1, this.resolveConstraints(), $t((f) => {
      if (!Ws(f, l, null))
        return;
      const h = this.getAxisMotionValue(f), { min: b, max: g } = this.constraints[f];
      h.set(Me(b, g, c[f]));
    }), this.visualElement.render();
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    fE.set(this.visualElement, this);
    const l = this.visualElement.current, r = vl(l, "pointerdown", (g) => {
      const { drag: v, dragListener: y = !0 } = this.getProps(), N = g.target, S = N !== l && XN(N);
      v && y && !S && this.start(g);
    });
    let o;
    const c = () => {
      const { dragConstraints: g } = this.getProps();
      ci(g) && g.current && (this.constraints = this.resolveRefConstraints(), o || (o = dE(l, g.current, () => this.scalePositionWithinConstraints())));
    }, { projection: d } = this.visualElement, f = d.addEventListener("measure", c);
    d && !d.layout && (d.root && d.root.updateScroll(), d.updateLayout()), ze.read(c);
    const h = El(window, "resize", () => this.scalePositionWithinConstraints()), b = d.addEventListener("didUpdate", (({ delta: g, hasLayoutChanged: v }) => {
      this.isDragging && v && ($t((y) => {
        const N = this.getAxisMotionValue(y);
        N && (this.originPoint[y] += g[y].translate, N.set(N.get() + g[y].translate));
      }), this.visualElement.render());
    }));
    return () => {
      h(), r(), f(), b && b(), o && o();
    };
  }
  getProps() {
    const l = this.visualElement.getProps(), { drag: r = !1, dragDirectionLock: o = !1, dragPropagation: c = !1, dragConstraints: d = !1, dragElastic: f = Bc, dragMomentum: h = !0 } = l;
    return {
      ...l,
      drag: r,
      dragDirectionLock: o,
      dragPropagation: c,
      dragConstraints: d,
      dragElastic: f,
      dragMomentum: h
    };
  }
}
function K0(a) {
  let l = !0;
  return () => {
    if (l) {
      l = !1;
      return;
    }
    a();
  };
}
function dE(a, l, r) {
  const o = n0(a, K0(r)), c = n0(l, K0(r));
  return () => {
    o(), c();
  };
}
function Ws(a, l, r) {
  return (l === !0 || l === a) && (r === null || r === a);
}
function pE(a, l = 10) {
  let r = null;
  return Math.abs(a.y) > l ? r = "y" : Math.abs(a.x) > l && (r = "x"), r;
}
class hE extends $n {
  constructor(l) {
    super(l), this.removeGroupControls = qt, this.removeListeners = qt, this.controls = new mE(l);
  }
  mount() {
    const { dragControls: l } = this.node.getProps();
    l && (this.removeGroupControls = l.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || qt;
  }
  update() {
    const { dragControls: l } = this.node.getProps(), { dragControls: r } = this.node.prevProps || {};
    l !== r && (this.removeGroupControls(), l && (this.removeGroupControls = l.subscribe(this.controls)));
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners(), this.controls.isDragging || this.controls.endPanSession();
  }
}
const cc = (a) => (l, r) => {
  a && ze.update(() => a(l, r), !1, !0);
};
class gE extends $n {
  constructor() {
    super(...arguments), this.removePointerDownListener = qt;
  }
  onPointerDown(l) {
    this.session = new Fx(l, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: qx(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: l, onPanStart: r, onPan: o, onPanEnd: c } = this.node.getProps();
    return {
      onSessionStart: cc(l),
      onStart: cc(r),
      onMove: cc(o),
      onEnd: (d, f) => {
        delete this.session, c && ze.postRender(() => c(d, f));
      }
    };
  }
  mount() {
    this.removePointerDownListener = vl(this.node.current, "pointerdown", (l) => this.onPointerDown(l));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
let fc = !1;
class xE extends Y.Component {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: l, layoutGroup: r, switchLayoutGroup: o, layoutId: c } = this.props, { projection: d } = l;
    d && (r.group && r.group.add(d), o && o.register && c && o.register(d), fc && d.root.didUpdate(), d.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), d.setOptions({
      ...d.options,
      layoutDependency: this.props.layoutDependency,
      onExitComplete: () => this.safeToRemove()
    })), oo.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(l) {
    const { layoutDependency: r, visualElement: o, drag: c, isPresent: d } = this.props, { projection: f } = o;
    return f && (f.isPresent = d, l.layoutDependency !== r && f.setOptions({
      ...f.options,
      layoutDependency: r
    }), fc = !0, c || l.layoutDependency !== r || r === void 0 || l.isPresent !== d ? f.willUpdate() : this.safeToRemove(), l.isPresent !== d && (d ? f.promote() : f.relegate() || ze.postRender(() => {
      const h = f.getStack();
      (!h || !h.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { visualElement: l, layoutAnchor: r } = this.props, { projection: o } = l;
    o && (o.options.layoutAnchor = r, o.root.didUpdate(), uf.postRender(() => {
      !o.currentAnimation && o.isLead() && this.safeToRemove();
    }));
  }
  componentWillUnmount() {
    const { visualElement: l, layoutGroup: r, switchLayoutGroup: o } = this.props, { projection: c } = l;
    fc = !0, c && (c.scheduleCheckAfterUnmount(), r && r.group && r.group.remove(c), o && o.deregister && o.deregister(c));
  }
  safeToRemove() {
    const { safeToRemove: l } = this.props;
    l && l();
  }
  render() {
    return null;
  }
}
function Yx(a) {
  const [l, r] = zx(), o = Y.useContext(Xc);
  return Cn.jsx(xE, { ...a, layoutGroup: o, switchLayoutGroup: Y.useContext(Lx), isPresent: l, safeToRemove: r });
}
const bE = {
  pan: {
    Feature: gE
  },
  drag: {
    Feature: hE,
    ProjectionNode: Mx,
    MeasureLayout: Yx
  }
};
function I0(a, l, r) {
  const { props: o } = a;
  a.animationState && o.whileHover && a.animationState.setActive("whileHover", r === "Start");
  const c = "onHover" + r, d = o[c];
  d && ze.postRender(() => d(l, Vl(l)));
}
class vE extends $n {
  mount() {
    const { current: l } = this.node;
    l && (this.unmount = qN(l, (r, o) => (I0(this.node, o, "Start"), (c) => I0(this.node, c, "End"))));
  }
  unmount() {
  }
}
class yE extends $n {
  constructor() {
    super(...arguments), this.isActive = !1;
  }
  onFocus() {
    let l = !1;
    try {
      l = this.node.current.matches(":focus-visible");
    } catch {
      l = !0;
    }
    !l || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0);
  }
  onBlur() {
    !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1);
  }
  mount() {
    this.unmount = Al(El(this.node.current, "focus", () => this.onFocus()), El(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
function J0(a, l, r) {
  const { props: o } = a;
  if (a.current instanceof HTMLButtonElement && a.current.disabled)
    return;
  a.animationState && o.whileTap && a.animationState.setActive("whileTap", r === "Start");
  const c = "onTap" + (r === "End" ? "" : r), d = o[c];
  d && ze.postRender(() => d(l, Vl(l)));
}
class NE extends $n {
  mount() {
    const { current: l } = this.node;
    if (!l)
      return;
    const { globalTapTarget: r, propagate: o } = this.node.props;
    this.unmount = QN(l, (c, d) => (J0(this.node, d, "Start"), (f, { success: h }) => J0(this.node, f, h ? "End" : "Cancel")), {
      useGlobalTarget: r,
      stopPropagation: (o == null ? void 0 : o.tap) === !1
    });
  }
  unmount() {
  }
}
const kc = /* @__PURE__ */ new WeakMap(), mc = /* @__PURE__ */ new WeakMap(), CE = (a) => {
  const l = kc.get(a.target);
  l && l(a);
}, EE = (a) => {
  a.forEach(CE);
};
function DE({ root: a, ...l }) {
  const r = a || document;
  mc.has(r) || mc.set(r, {});
  const o = mc.get(r), c = JSON.stringify(l);
  return o[c] || (o[c] = new IntersectionObserver(EE, { root: a, ...l })), o[c];
}
function SE(a, l, r) {
  const o = DE(l);
  return kc.set(a, r), o.observe(a), () => {
    kc.delete(a), o.unobserve(a);
  };
}
const AE = {
  some: 0,
  all: 1
};
class TE extends $n {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    var b;
    (b = this.stopObserver) == null || b.call(this);
    const { viewport: l = {} } = this.node.getProps(), { root: r, margin: o, amount: c = "some", once: d } = l, f = {
      root: r ? r.current : void 0,
      rootMargin: o,
      threshold: typeof c == "number" ? c : AE[c]
    }, h = (g) => {
      const { isIntersecting: v } = g;
      if (this.isInView === v || (this.isInView = v, d && !v && this.hasEnteredView))
        return;
      v && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", v);
      const { onViewportEnter: y, onViewportLeave: N } = this.node.getProps(), S = v ? y : N;
      S && S(g);
    };
    this.stopObserver = SE(this.node.current, f, h);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: l, prevProps: r } = this.node;
    ["amount", "margin", "root"].some(wE(l, r)) && this.startObserver();
  }
  unmount() {
    var l;
    (l = this.stopObserver) == null || l.call(this), this.hasEnteredView = !1, this.isInView = !1;
  }
}
function wE({ viewport: a = {} }, { viewport: l = {} } = {}) {
  return (r) => a[r] !== l[r];
}
const VE = {
  inView: {
    Feature: TE
  },
  tap: {
    Feature: NE
  },
  focus: {
    Feature: yE
  },
  hover: {
    Feature: vE
  }
}, jE = {
  layout: {
    ProjectionNode: Mx,
    MeasureLayout: Yx
  }
}, ME = {
  ...eE,
  ...VE,
  ...bE,
  ...jE
}, ce = /* @__PURE__ */ KC(ME, IC), Xx = {
  id: "diploma-machine-learning-artificial-intelligence",
  slug: "/courses/diploma-machine-learning-artificial-intelligence/",
  title: "Diploma of Machine Learning and Artificial Intelligence Technology",
  code: "11480NAT",
  aqfLevel: 5,
  classification: "Nationally accredited course",
  status: "Current",
  recognitionManager: "Australian Skills Quality Authority (ASQA)",
  currency: "23 October 2026 – 22 October 2031",
  fieldOfEducation: "Computer Science (0201)",
  officialSource: "https://training.gov.au/Training/Details/11480NAT",
  intake: "January 2027",
  intakeMessage: "First Intake — January 2027 · Enrolments Opening Soon",
  deliveryFormat: "Face-to-Face Training",
  totalUnits: 19,
  foundationUnitsCount: 4,
  specialisedUnitsCount: 15,
  heroImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1600&q=80",
  cardImage: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
  overviewHeading: "Building Practical Skills for the Future of AI",
  overviewParagraphs: [
    "The Diploma of Machine Learning and Artificial Intelligence Technology is designed to develop practical capabilities in implementing, managing and supporting AI and machine learning systems within organisational ICT environments.",
    "The course covers the AI implementation lifecycle, from programming and data preparation to machine learning development, deployment, testing, governance and enterprise integration."
  ],
  learningAreasHeading: "Explore the Technologies Shaping Tomorrow",
  learningAreas: [
    {
      id: "01",
      number: "01",
      title: "Python Programming and Statistics",
      description: "Develop Python programming capabilities and foundational statistical techniques used in AI and machine learning applications."
    },
    {
      id: "02",
      number: "02",
      title: "Machine Learning Development",
      description: "Implement, train, tune and evaluate machine learning models."
    },
    {
      id: "03",
      number: "03",
      title: "Data Engineering and Analytics",
      description: "Explore data engineering, data analysis and visualisation techniques for AI applications."
    },
    {
      id: "04",
      number: "04",
      title: "AI Deployment and Integration",
      description: "Deploy, manage and integrate AI systems into existing organisational ICT environments."
    },
    {
      id: "05",
      number: "05",
      title: "Generative AI and Intelligent Solutions",
      description: "Explore enterprise generative AI applications, decision-support systems and predictive forecasting solutions."
    },
    {
      id: "06",
      number: "06",
      title: "Responsible AI and Governance",
      description: "Understand ethical AI practices, explainability, governance, testing, validation and auditing."
    }
  ],
  curriculumHeading: "Explore the Course Curriculum",
  units: [
    // Group A — ICT Foundation Units (4 units)
    {
      code: "ICTNWK421",
      title: "Install, configure and test network security",
      group: "foundation"
    },
    {
      code: "ICTPRG431",
      title: "Apply query language in relational databases",
      group: "foundation"
    },
    {
      code: "ICTPRG433",
      title: "Test software developments",
      group: "foundation"
    },
    {
      code: "ICTSAS432",
      title: "Identify and resolve client ICT problems",
      group: "foundation"
    },
    // Group B — Specialised AI and Machine Learning Units (15 units)
    {
      code: "NAT11480001",
      title: "Apply Python programming and foundational statistical techniques",
      group: "specialised"
    },
    {
      code: "NAT11480002",
      title: "Implement artificial intelligence (AI) systems lifecycle",
      group: "specialised"
    },
    {
      code: "NAT11480003",
      title: "Implement and tune machine learning models",
      group: "specialised"
    },
    {
      code: "NAT11480004",
      title: "Deploy and manage artificial intelligence (AI) systems in operational environments",
      group: "specialised"
    },
    {
      code: "NAT11480005",
      title: "Implement ethical and explainable artificial intelligence (AI) practices",
      group: "specialised"
    },
    {
      code: "NAT11480006",
      title: "Implement data engineering techniques for artificial intelligence (AI) systems",
      group: "specialised"
    },
    {
      code: "NAT11480007",
      title: "Test, validate and audit artificial intelligence (AI) systems",
      group: "specialised"
    },
    {
      code: "NAT11480008",
      title: "Plan, develop and deploy an integrated artificial intelligence (AI) solution",
      group: "specialised"
    },
    {
      code: "NAT11480009",
      title: "Analyse and visualise data for artificial intelligence (AI) applications",
      group: "specialised"
    },
    {
      code: "NAT11480010",
      title: "Apply artificial intelligence (AI) governance policies in organisational contexts",
      group: "specialised"
    },
    {
      code: "NAT11480011",
      title: "Develop artificial intelligence (AI) solutions for decision support and forecasting",
      group: "specialised"
    },
    {
      code: "NAT11480012",
      title: "Integrate artificial intelligence systems with existing information and communications technology",
      group: "specialised"
    },
    {
      code: "NAT11480013",
      title: "Implement machine learning operations pipelines and cloud-based artificial intelligence deployment",
      group: "specialised"
    },
    {
      code: "NAT11480014",
      title: "Develop and apply generative artificial intelligence (AI) solutions in enterprise contexts",
      group: "specialised"
    },
    {
      code: "NAT11480015",
      title: "Communicate artificial intelligence (AI) insights and support business decision-making",
      group: "specialised"
    }
  ],
  audienceHeading: "Who Is This Course Designed For?",
  audiences: [
    {
      title: "Aspiring AI Professionals",
      description: "Individuals looking to develop foundational and applied capabilities in artificial intelligence and machine learning."
    },
    {
      title: "IT and Software Professionals",
      description: "People working in ICT, programming, systems administration or related technical environments."
    },
    {
      title: "Data and Analytics Professionals",
      description: "Individuals interested in applying machine learning, data engineering and predictive analytics."
    },
    {
      title: "Technology Professionals",
      description: "People looking to develop capabilities in AI deployment, enterprise integration and responsible AI practices."
    }
  ],
  capabilitiesHeading: "Turn Technical Knowledge into Practical Capabilities",
  capabilities: [
    "Develop and evaluate machine learning models.",
    "Implement Python-based AI workflows.",
    "Apply data engineering techniques.",
    "Deploy and manage AI systems.",
    "Develop enterprise generative AI solutions.",
    "Test and audit AI implementations.",
    "Integrate AI into existing ICT systems.",
    "Apply AI governance and responsible practices."
  ],
  intakeHeading: "Take the Next Step into the Future of AI",
  enquiryHeading: "Interested in the Diploma of Machine Learning and Artificial Intelligence Technology?",
  enquiryDescription: "Get in touch with Chelson Gordon Consultancy to express your interest and receive further information about the upcoming January 2027 intake.",
  contact: {
    phone: "+61 499 998 590",
    phoneFormatted: "+61 499 998 590",
    phoneLink: "tel:+61499998590",
    email: "n.malik@vconsultancy.com.au",
    emailLink: "mailto:n.malik@vconsultancy.com.au?subject=Enquiry%20-%20Diploma%20of%20Machine%20Learning%20and%20AI%20(11480NAT)",
    website: "https://chelsongordon.com/contact-us-page/",
    websiteLink: "https://chelsongordon.com/contact-us-page/"
  }
}, zE = [
  Xx
];
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const RE = (a) => a.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Px = (...a) => a.filter((l, r, o) => !!l && l.trim() !== "" && o.indexOf(l) === r).join(" ").trim();
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var _E = {
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
const OE = Y.forwardRef(
  ({
    color: a = "currentColor",
    size: l = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: c = "",
    children: d,
    iconNode: f,
    ...h
  }, b) => Y.createElement(
    "svg",
    {
      ref: b,
      ..._E,
      width: l,
      height: l,
      stroke: a,
      strokeWidth: o ? Number(r) * 24 / Number(l) : r,
      className: Px("lucide", c),
      ...h
    },
    [
      ...f.map(([g, v]) => Y.createElement(g, v)),
      ...Array.isArray(d) ? d : [d]
    ]
  )
);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ce = (a, l) => {
  const r = Y.forwardRef(
    ({ className: o, ...c }, d) => Y.createElement(OE, {
      ref: d,
      iconNode: l,
      className: Px(`lucide-${RE(a)}`, o),
      ...c
    })
  );
  return r.displayName = `${a}`, r;
};
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const BE = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
], kE = Ce("ArrowLeft", BE);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const UE = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
], Dl = Ce("ArrowRight", UE);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const LE = [
  [
    "path",
    {
      d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
      key: "1yiouv"
    }
  ],
  ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }]
], Uc = Ce("Award", LE);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const HE = [
  ["path", { d: "M12 7v14", key: "1akyts" }],
  [
    "path",
    {
      d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
      key: "ruj8y"
    }
  ]
], vf = Ce("BookOpen", HE);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qE = [
  [
    "path",
    {
      d: "M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",
      key: "l5xja"
    }
  ],
  ["path", { d: "M9 13a4.5 4.5 0 0 0 3-4", key: "10igwf" }],
  ["path", { d: "M6.003 5.125A3 3 0 0 0 6.401 6.5", key: "105sqy" }],
  ["path", { d: "M3.477 10.896a4 4 0 0 1 .585-.396", key: "ql3yin" }],
  ["path", { d: "M6 18a4 4 0 0 1-1.967-.516", key: "2e4loj" }],
  ["path", { d: "M12 13h4", key: "1ku699" }],
  ["path", { d: "M12 18h6a2 2 0 0 1 2 2v1", key: "105ag5" }],
  ["path", { d: "M12 8h8", key: "1lhi5i" }],
  ["path", { d: "M16 8V5a2 2 0 0 1 2-2", key: "u6izg6" }],
  ["circle", { cx: "16", cy: "13", r: ".5", key: "ry7gng" }],
  ["circle", { cx: "18", cy: "3", r: ".5", key: "1aiba7" }],
  ["circle", { cx: "20", cy: "21", r: ".5", key: "yhc1fs" }],
  ["circle", { cx: "20", cy: "8", r: ".5", key: "1e43v0" }]
], FE = Ce("BrainCircuit", qE);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const GE = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
], Qx = Ce("Calendar", GE);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const YE = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], Lc = Ce("ChevronDown", YE);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const XE = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], Hc = Ce("ChevronRight", XE);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const PE = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
], ya = Ce("CircleCheck", PE);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const QE = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]
], ZE = Ce("Clock", QE);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const KE = [
  ["rect", { width: "16", height: "16", x: "4", y: "4", rx: "2", key: "14l7u7" }],
  ["rect", { width: "6", height: "6", x: "9", y: "9", rx: "1", key: "5aljv4" }],
  ["path", { d: "M15 2v2", key: "13l42r" }],
  ["path", { d: "M15 20v2", key: "15mkzm" }],
  ["path", { d: "M2 15h2", key: "1gxd5l" }],
  ["path", { d: "M2 9h2", key: "1bbxkp" }],
  ["path", { d: "M20 15h2", key: "19e6y8" }],
  ["path", { d: "M20 9h2", key: "19tzq7" }],
  ["path", { d: "M9 2v2", key: "165o2o" }],
  ["path", { d: "M9 20v2", key: "i2bqo8" }]
], IE = Ce("Cpu", KE);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const JE = [
  ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3", key: "msslwz" }],
  ["path", { d: "M3 5V19A9 3 0 0 0 21 19V5", key: "1wlel7" }],
  ["path", { d: "M3 12A9 3 0 0 0 21 12", key: "mv7ke4" }]
], $E = Ce("Database", JE);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const WE = [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "7 10 12 15 17 10", key: "2ggqvy" }],
  ["line", { x1: "12", x2: "12", y1: "15", y2: "3", key: "1vk2je" }]
], $0 = Ce("Download", WE);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const eD = [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
], ro = Ce("ExternalLink", eD);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tD = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }],
  ["path", { d: "M2 12h20", key: "9i4pu4" }]
], nD = Ce("Globe", tD);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const aD = [
  ["path", { d: "m5 8 6 6", key: "1wu5hv" }],
  ["path", { d: "m4 14 6-6 2-3", key: "1k1g8d" }],
  ["path", { d: "M2 5h12", key: "or177f" }],
  ["path", { d: "M7 2h1", key: "1t2jsx" }],
  ["path", { d: "m22 22-5-10-5 10", key: "don7ne" }],
  ["path", { d: "M14 18h6", key: "1m8k6r" }]
], Zx = Ce("Languages", aD);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const iD = [
  [
    "path",
    {
      d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",
      key: "zw3jo"
    }
  ],
  [
    "path",
    {
      d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",
      key: "1wduqc"
    }
  ],
  [
    "path",
    {
      d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",
      key: "kqbvx6"
    }
  ]
], W0 = Ce("Layers", iD);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lD = [
  [
    "path",
    {
      d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
      key: "c2jq9f"
    }
  ],
  ["rect", { width: "4", height: "12", x: "2", y: "9", key: "mk3on5" }],
  ["circle", { cx: "4", cy: "4", r: "2", key: "bt5ra8" }]
], sD = Ce("Linkedin", lD);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oD = [
  ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" }],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }]
], rD = Ce("Mail", oD);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uD = [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z"
    }
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
], Kx = Ce("MapPin", uD);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cD = [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }]
], fD = Ce("Menu", cD);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mD = [
  ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }]
], eg = Ce("MessageSquare", mD);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dD = [
  ["rect", { x: "16", y: "16", width: "6", height: "6", rx: "1", key: "4q2zg0" }],
  ["rect", { x: "2", y: "16", width: "6", height: "6", rx: "1", key: "8cvhb9" }],
  ["rect", { x: "9", y: "2", width: "6", height: "6", rx: "1", key: "1egb70" }],
  ["path", { d: "M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3", key: "1jsf9p" }],
  ["path", { d: "M12 12V8", key: "2874zd" }]
], pD = Ce("Network", dD);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hD = [
  [
    "path",
    {
      d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
      key: "foiqr5"
    }
  ]
], gD = Ce("Phone", hD);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xD = [
  ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
  ["path", { d: "M8 16H3v5", key: "1cv678" }]
], Ix = Ce("RefreshCw", xD);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bD = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
], vD = Ce("ShieldCheck", bD);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yD = [
  ["path", { d: "M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z", key: "hou9p0" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M16 10a4 4 0 0 1-8 0", key: "1ltviw" }]
], tg = Ce("ShoppingBag", yD);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ND = [
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
], qc = Ce("Sparkles", ND);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const CD = [
  ["polyline", { points: "4 17 10 11 4 5", key: "akl6gq" }],
  ["line", { x1: "12", x2: "20", y1: "19", y2: "19", key: "q2wloq" }]
], ED = Ce("Terminal", CD);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const DD = [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["polyline", { points: "16 11 18 13 22 9", key: "1pwet4" }]
], SD = Ce("UserCheck", DD);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const AD = [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75", key: "1da9ce" }]
], TD = Ce("Users", AD);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wD = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], VD = Ce("X", wD), jD = ({
  course: a,
  onExplore: l,
  onEnquire: r
}) => {
  const o = (d) => {
    l && (d.preventDefault(), l());
  }, c = (d) => {
    r && (d.preventDefault(), r());
  };
  return /* @__PURE__ */ p.jsxDEV("div", { className: "bg-white rounded-[2rem] md:rounded-[2.5rem] border border-slate-200/90 shadow-[0_20px_50px_-15px_rgba(4,47,97,0.08)] hover:shadow-[0_25px_60px_-15px_rgba(4,47,97,0.14)] transition-all duration-300 overflow-hidden", children: /* @__PURE__ */ p.jsxDEV("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-0", children: [
    /* @__PURE__ */ p.jsxDEV("div", { className: "lg:col-span-5 relative min-h-[300px] sm:min-h-[360px] lg:min-h-full overflow-hidden bg-slate-900", children: [
      /* @__PURE__ */ p.jsxDEV(
        "img",
        {
          src: a.cardImage || a.heroImage,
          alt: a.title,
          className: "w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700",
          loading: "lazy",
          decoding: "async",
          onError: (d) => {
            const f = d.currentTarget;
            f.dataset.triedFallback || (f.dataset.triedFallback = "true", f.src = "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80");
          }
        },
        void 0,
        !1,
        {
          fileName: "/app/applet/src/components/Courses/FeaturedCourseCard.tsx",
          lineNumber: 39,
          columnNumber: 11
        },
        void 0
      ),
      /* @__PURE__ */ p.jsxDEV("div", { className: "absolute inset-0 bg-gradient-to-t from-[#042F61]/90 via-[#042F61]/40 to-transparent" }, void 0, !1, {
        fileName: "/app/applet/src/components/Courses/FeaturedCourseCard.tsx",
        lineNumber: 53,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ p.jsxDEV("div", { className: "absolute top-5 left-5 right-5 flex flex-wrap gap-2 z-10", children: [
        /* @__PURE__ */ p.jsxDEV("span", { className: "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-[#042F61] text-xs font-black uppercase tracking-wider shadow-sm", children: [
          /* @__PURE__ */ p.jsxDEV(Uc, { className: "w-3.5 h-3.5 text-[#FDB913]" }, void 0, !1, {
            fileName: "/app/applet/src/components/Courses/FeaturedCourseCard.tsx",
            lineNumber: 58,
            columnNumber: 15
          }, void 0),
          a.code
        ] }, void 0, !0, {
          fileName: "/app/applet/src/components/Courses/FeaturedCourseCard.tsx",
          lineNumber: 57,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ p.jsxDEV("span", { className: "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#042F61]/90 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider", children: [
          "AQF Level ",
          a.aqfLevel
        ] }, void 0, !0, {
          fileName: "/app/applet/src/components/Courses/FeaturedCourseCard.tsx",
          lineNumber: 61,
          columnNumber: 13
        }, void 0)
      ] }, void 0, !0, {
        fileName: "/app/applet/src/components/Courses/FeaturedCourseCard.tsx",
        lineNumber: 56,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ p.jsxDEV("div", { className: "absolute bottom-5 left-5 right-5 z-10 text-white", children: [
        /* @__PURE__ */ p.jsxDEV("div", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FDB913] text-[#042F61] text-[11px] font-extrabold uppercase tracking-wider mb-2 shadow-sm", children: [
          /* @__PURE__ */ p.jsxDEV(Qx, { className: "w-3 h-3 text-[#042F61]" }, void 0, !1, {
            fileName: "/app/applet/src/components/Courses/FeaturedCourseCard.tsx",
            lineNumber: 68,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ p.jsxDEV("span", { children: [
            a.intake,
            " Intake"
          ] }, void 0, !0, {
            fileName: "/app/applet/src/components/Courses/FeaturedCourseCard.tsx",
            lineNumber: 69,
            columnNumber: 15
          }, void 0)
        ] }, void 0, !0, {
          fileName: "/app/applet/src/components/Courses/FeaturedCourseCard.tsx",
          lineNumber: 67,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ p.jsxDEV("p", { className: "text-xs text-white/90 font-medium", children: [
          a.deliveryFormat,
          " · Face-to-Face Learning"
        ] }, void 0, !0, {
          fileName: "/app/applet/src/components/Courses/FeaturedCourseCard.tsx",
          lineNumber: 71,
          columnNumber: 13
        }, void 0)
      ] }, void 0, !0, {
        fileName: "/app/applet/src/components/Courses/FeaturedCourseCard.tsx",
        lineNumber: 66,
        columnNumber: 11
      }, void 0)
    ] }, void 0, !0, {
      fileName: "/app/applet/src/components/Courses/FeaturedCourseCard.tsx",
      lineNumber: 38,
      columnNumber: 9
    }, void 0),
    /* @__PURE__ */ p.jsxDEV("div", { className: "lg:col-span-7 p-6 sm:p-8 lg:p-10 xl:p-12 flex flex-col justify-between", children: [
      /* @__PURE__ */ p.jsxDEV("div", { children: [
        /* @__PURE__ */ p.jsxDEV("div", { className: "flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-[#0072CE] mb-2", children: [
          /* @__PURE__ */ p.jsxDEV(qc, { className: "w-3.5 h-3.5 text-[#FDB913]" }, void 0, !1, {
            fileName: "/app/applet/src/components/Courses/FeaturedCourseCard.tsx",
            lineNumber: 82,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ p.jsxDEV("span", { children: a.classification }, void 0, !1, {
            fileName: "/app/applet/src/components/Courses/FeaturedCourseCard.tsx",
            lineNumber: 83,
            columnNumber: 15
          }, void 0)
        ] }, void 0, !0, {
          fileName: "/app/applet/src/components/Courses/FeaturedCourseCard.tsx",
          lineNumber: 81,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ p.jsxDEV("h3", { className: "text-2xl sm:text-3xl lg:text-[28px] xl:text-3xl font-black text-[#042F61] tracking-tight leading-tight mb-4", children: a.title }, void 0, !1, {
          fileName: "/app/applet/src/components/Courses/FeaturedCourseCard.tsx",
          lineNumber: 87,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ p.jsxDEV("p", { className: "text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-medium", children: "Develop practical capabilities in Python programming, machine learning, data engineering, generative AI and intelligent systems through a comprehensive course covering 19 units of competency." }, void 0, !1, {
          fileName: "/app/applet/src/components/Courses/FeaturedCourseCard.tsx",
          lineNumber: 92,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ p.jsxDEV("div", { className: "grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 pb-6 border-y border-slate-100 mb-6", children: [
          /* @__PURE__ */ p.jsxDEV("div", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ p.jsxDEV(ya, { className: "w-4 h-4 text-[#0072CE] shrink-0 mt-0.5" }, void 0, !1, {
              fileName: "/app/applet/src/components/Courses/FeaturedCourseCard.tsx",
              lineNumber: 99,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ p.jsxDEV("div", { className: "text-xs", children: [
              /* @__PURE__ */ p.jsxDEV("span", { className: "block font-bold text-[#042F61]", children: [
                "AQF Level ",
                a.aqfLevel
              ] }, void 0, !0, {
                fileName: "/app/applet/src/components/Courses/FeaturedCourseCard.tsx",
                lineNumber: 101,
                columnNumber: 19
              }, void 0),
              /* @__PURE__ */ p.jsxDEV("span", { className: "text-slate-500", children: "Diploma" }, void 0, !1, {
                fileName: "/app/applet/src/components/Courses/FeaturedCourseCard.tsx",
                lineNumber: 102,
                columnNumber: 19
              }, void 0)
            ] }, void 0, !0, {
              fileName: "/app/applet/src/components/Courses/FeaturedCourseCard.tsx",
              lineNumber: 100,
              columnNumber: 17
            }, void 0)
          ] }, void 0, !0, {
            fileName: "/app/applet/src/components/Courses/FeaturedCourseCard.tsx",
            lineNumber: 98,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ p.jsxDEV("div", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ p.jsxDEV(vf, { className: "w-4 h-4 text-[#0072CE] shrink-0 mt-0.5" }, void 0, !1, {
              fileName: "/app/applet/src/components/Courses/FeaturedCourseCard.tsx",
              lineNumber: 107,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ p.jsxDEV("div", { className: "text-xs", children: [
              /* @__PURE__ */ p.jsxDEV("span", { className: "block font-bold text-[#042F61]", children: [
                a.totalUnits,
                " Units"
              ] }, void 0, !0, {
                fileName: "/app/applet/src/components/Courses/FeaturedCourseCard.tsx",
                lineNumber: 109,
                columnNumber: 19
              }, void 0),
              /* @__PURE__ */ p.jsxDEV("span", { className: "text-slate-500", children: "Competency based" }, void 0, !1, {
                fileName: "/app/applet/src/components/Courses/FeaturedCourseCard.tsx",
                lineNumber: 110,
                columnNumber: 19
              }, void 0)
            ] }, void 0, !0, {
              fileName: "/app/applet/src/components/Courses/FeaturedCourseCard.tsx",
              lineNumber: 108,
              columnNumber: 17
            }, void 0)
          ] }, void 0, !0, {
            fileName: "/app/applet/src/components/Courses/FeaturedCourseCard.tsx",
            lineNumber: 106,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ p.jsxDEV("div", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ p.jsxDEV(Kx, { className: "w-4 h-4 text-[#0072CE] shrink-0 mt-0.5" }, void 0, !1, {
              fileName: "/app/applet/src/components/Courses/FeaturedCourseCard.tsx",
              lineNumber: 115,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ p.jsxDEV("div", { className: "text-xs", children: [
              /* @__PURE__ */ p.jsxDEV("span", { className: "block font-bold text-[#042F61]", children: "Face-to-Face" }, void 0, !1, {
                fileName: "/app/applet/src/components/Courses/FeaturedCourseCard.tsx",
                lineNumber: 117,
                columnNumber: 19
              }, void 0),
              /* @__PURE__ */ p.jsxDEV("span", { className: "text-slate-500", children: "On-campus" }, void 0, !1, {
                fileName: "/app/applet/src/components/Courses/FeaturedCourseCard.tsx",
                lineNumber: 118,
                columnNumber: 19
              }, void 0)
            ] }, void 0, !0, {
              fileName: "/app/applet/src/components/Courses/FeaturedCourseCard.tsx",
              lineNumber: 116,
              columnNumber: 17
            }, void 0)
          ] }, void 0, !0, {
            fileName: "/app/applet/src/components/Courses/FeaturedCourseCard.tsx",
            lineNumber: 114,
            columnNumber: 15
          }, void 0)
        ] }, void 0, !0, {
          fileName: "/app/applet/src/components/Courses/FeaturedCourseCard.tsx",
          lineNumber: 97,
          columnNumber: 13
        }, void 0)
      ] }, void 0, !0, {
        fileName: "/app/applet/src/components/Courses/FeaturedCourseCard.tsx",
        lineNumber: 79,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ p.jsxDEV("div", { className: "flex flex-wrap items-center gap-3 sm:gap-4 pt-2", children: [
        /* @__PURE__ */ p.jsxDEV(
          ce.a,
          {
            href: "https://chelsongordon.com/courses-by-us",
            onClick: o,
            whileHover: { scale: 1.02, y: -2 },
            whileTap: { scale: 0.98 },
            className: "inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#0072CE] hover:bg-[#042F61] text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-[#0072CE]/20 transition-all duration-200 group cursor-pointer",
            children: [
              /* @__PURE__ */ p.jsxDEV("span", { children: "Explore Course" }, void 0, !1, {
                fileName: "/app/applet/src/components/Courses/FeaturedCourseCard.tsx",
                lineNumber: 133,
                columnNumber: 15
              }, void 0),
              /* @__PURE__ */ p.jsxDEV(Dl, { className: "w-4 h-4 text-white group-hover:translate-x-1 transition-transform" }, void 0, !1, {
                fileName: "/app/applet/src/components/Courses/FeaturedCourseCard.tsx",
                lineNumber: 134,
                columnNumber: 15
              }, void 0)
            ]
          },
          void 0,
          !0,
          {
            fileName: "/app/applet/src/components/Courses/FeaturedCourseCard.tsx",
            lineNumber: 126,
            columnNumber: 13
          },
          void 0
        ),
        /* @__PURE__ */ p.jsxDEV(
          ce.a,
          {
            href: "https://chelsongordon.com/contact-us-page/",
            onClick: c,
            whileHover: { scale: 1.02, y: -1 },
            whileTap: { scale: 0.98 },
            className: "inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 rounded-full bg-white hover:bg-slate-50 text-[#042F61] hover:text-[#0072CE] font-bold text-xs sm:text-sm uppercase tracking-wider border border-slate-300 shadow-sm transition-all duration-200 group cursor-pointer",
            children: /* @__PURE__ */ p.jsxDEV("span", { children: "Enquire Now" }, void 0, !1, {
              fileName: "/app/applet/src/components/Courses/FeaturedCourseCard.tsx",
              lineNumber: 144,
              columnNumber: 15
            }, void 0)
          },
          void 0,
          !1,
          {
            fileName: "/app/applet/src/components/Courses/FeaturedCourseCard.tsx",
            lineNumber: 137,
            columnNumber: 13
          },
          void 0
        )
      ] }, void 0, !0, {
        fileName: "/app/applet/src/components/Courses/FeaturedCourseCard.tsx",
        lineNumber: 125,
        columnNumber: 11
      }, void 0)
    ] }, void 0, !0, {
      fileName: "/app/applet/src/components/Courses/FeaturedCourseCard.tsx",
      lineNumber: 78,
      columnNumber: 9
    }, void 0)
  ] }, void 0, !0, {
    fileName: "/app/applet/src/components/Courses/FeaturedCourseCard.tsx",
    lineNumber: 35,
    columnNumber: 7
  }, void 0) }, void 0, !1, {
    fileName: "/app/applet/src/components/Courses/FeaturedCourseCard.tsx",
    lineNumber: 34,
    columnNumber: 5
  }, void 0);
}, MD = ({
  courses: a = zE,
  onNavigateToCourse: l
}) => /* @__PURE__ */ p.jsxDEV(
  "section",
  {
    id: "cg-courses-section",
    className: "cg-courses-section relative py-20 sm:py-24 lg:py-28 bg-[#F4F7FB] overflow-hidden",
    children: [
      /* @__PURE__ */ p.jsxDEV(
        "div",
        {
          className: "absolute inset-0 pointer-events-none overflow-hidden select-none z-0",
          "aria-hidden": "true",
          children: [
            /* @__PURE__ */ p.jsxDEV("div", { className: "absolute top-10 right-10 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(0,114,206,0.06)_0%,transparent_70%)] blur-3xl pointer-events-none" }, void 0, !1, {
              fileName: "/app/applet/src/components/Courses/CoursesSection.tsx",
              lineNumber: 26,
              columnNumber: 9
            }, void 0),
            /* @__PURE__ */ p.jsxDEV("div", { className: "absolute bottom-10 left-10 w-[600px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(4,47,97,0.05)_0%,transparent_70%)] blur-3xl pointer-events-none" }, void 0, !1, {
              fileName: "/app/applet/src/components/Courses/CoursesSection.tsx",
              lineNumber: 27,
              columnNumber: 9
            }, void 0)
          ]
        },
        void 0,
        !0,
        {
          fileName: "/app/applet/src/components/Courses/CoursesSection.tsx",
          lineNumber: 22,
          columnNumber: 7
        },
        void 0
      ),
      /* @__PURE__ */ p.jsxDEV("div", { className: "max-w-7xl mx-auto px-6 relative z-10", children: [
        /* @__PURE__ */ p.jsxDEV("div", { className: "text-center max-w-3xl mx-auto mb-14 sm:mb-16", children: [
          /* @__PURE__ */ p.jsxDEV(
            ce.div,
            {
              initial: { opacity: 0, y: 15 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: !0 },
              transition: { duration: 0.5 },
              className: "inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#042F61]/90 backdrop-blur-md text-[#FFB800] text-xs font-extrabold uppercase tracking-[0.25em] mb-5 shadow-sm border border-[#042F61]/20",
              children: [
                /* @__PURE__ */ p.jsxDEV("span", { className: "w-2 h-2 rounded-full bg-[#FFB800] animate-pulse" }, void 0, !1, {
                  fileName: "/app/applet/src/components/Courses/CoursesSection.tsx",
                  lineNumber: 42,
                  columnNumber: 13
                }, void 0),
                /* @__PURE__ */ p.jsxDEV("span", { children: "OUR COURSE DEVELOPMENT" }, void 0, !1, {
                  fileName: "/app/applet/src/components/Courses/CoursesSection.tsx",
                  lineNumber: 43,
                  columnNumber: 13
                }, void 0)
              ]
            },
            void 0,
            !0,
            {
              fileName: "/app/applet/src/components/Courses/CoursesSection.tsx",
              lineNumber: 35,
              columnNumber: 11
            },
            void 0
          ),
          /* @__PURE__ */ p.jsxDEV(
            ce.h2,
            {
              initial: { opacity: 0, y: 15 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: !0 },
              transition: { duration: 0.5, delay: 0.1 },
              className: "text-3xl sm:text-4xl lg:text-5xl font-black text-[#042F61] tracking-tight leading-tight mb-4 font-sans",
              children: "Our Accredited Courses"
            },
            void 0,
            !1,
            {
              fileName: "/app/applet/src/components/Courses/CoursesSection.tsx",
              lineNumber: 47,
              columnNumber: 11
            },
            void 0
          ),
          /* @__PURE__ */ p.jsxDEV(
            ce.h3,
            {
              initial: { opacity: 0, y: 15 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: !0 },
              transition: { duration: 0.5, delay: 0.15 },
              className: "text-lg sm:text-xl font-bold text-[#0072CE] mb-4",
              children: "Developed with Industry. Designed for the Future."
            },
            void 0,
            !1,
            {
              fileName: "/app/applet/src/components/Courses/CoursesSection.tsx",
              lineNumber: 58,
              columnNumber: 11
            },
            void 0
          ),
          /* @__PURE__ */ p.jsxDEV(
            ce.p,
            {
              initial: { opacity: 0, y: 15 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: !0 },
              transition: { duration: 0.5, delay: 0.2 },
              className: "text-slate-600 text-sm sm:text-base leading-relaxed",
              children: "We develop industry-focused training programs designed to address emerging technologies and evolving professional requirements. Our courses bring together technical knowledge and practical capabilities to help learners prepare for the opportunities of tomorrow."
            },
            void 0,
            !1,
            {
              fileName: "/app/applet/src/components/Courses/CoursesSection.tsx",
              lineNumber: 69,
              columnNumber: 11
            },
            void 0
          )
        ] }, void 0, !0, {
          fileName: "/app/applet/src/components/Courses/CoursesSection.tsx",
          lineNumber: 33,
          columnNumber: 9
        }, void 0),
        /* @__PURE__ */ p.jsxDEV("div", { className: "space-y-8", children: a.map((r, o) => /* @__PURE__ */ p.jsxDEV(
          ce.div,
          {
            initial: { opacity: 0, y: 25 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: !0 },
            transition: { duration: 0.6, delay: 0.25 + o * 0.1 },
            children: /* @__PURE__ */ p.jsxDEV(
              jD,
              {
                course: r,
                onExplore: l ? () => l(r.slug) : void 0
              },
              void 0,
              !1,
              {
                fileName: "/app/applet/src/components/Courses/CoursesSection.tsx",
                lineNumber: 90,
                columnNumber: 15
              },
              void 0
            )
          },
          r.id,
          !1,
          {
            fileName: "/app/applet/src/components/Courses/CoursesSection.tsx",
            lineNumber: 83,
            columnNumber: 13
          },
          void 0
        )) }, void 0, !1, {
          fileName: "/app/applet/src/components/Courses/CoursesSection.tsx",
          lineNumber: 81,
          columnNumber: 9
        }, void 0)
      ] }, void 0, !0, {
        fileName: "/app/applet/src/components/Courses/CoursesSection.tsx",
        lineNumber: 30,
        columnNumber: 7
      }, void 0)
    ]
  },
  void 0,
  !0,
  {
    fileName: "/app/applet/src/components/Courses/CoursesSection.tsx",
    lineNumber: 17,
    columnNumber: 5
  },
  void 0
), zD = ({ units: a, officialSource: l }) => {
  const [r, o] = Y.useState({
    NAT11480001: !0
    // Keep first core AI unit expanded by default
  }), c = a.filter((y) => y.group === "foundation"), d = a.filter((y) => y.group === "specialised"), f = a.map((y) => y.code), h = f.every((y) => r[y]), b = (y) => {
    o((N) => ({
      ...N,
      [y]: !N[y]
    }));
  }, g = () => {
    const y = {};
    f.forEach((N) => {
      y[N] = !0;
    }), o(y);
  }, v = () => {
    o({});
  };
  return /* @__PURE__ */ p.jsxDEV("div", { className: "w-full", children: [
    /* @__PURE__ */ p.jsxDEV("div", { className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 mb-8 border-b border-slate-200", children: [
      /* @__PURE__ */ p.jsxDEV("div", { className: "flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm font-semibold", children: [
        /* @__PURE__ */ p.jsxDEV("span", { className: "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#042F61] text-white", children: [
          /* @__PURE__ */ p.jsxDEV(vf, { className: "w-3.5 h-3.5 text-[#FDB913]" }, void 0, !1, {
            fileName: "/app/applet/src/components/Courses/CourseCurriculum.tsx",
            lineNumber: 48,
            columnNumber: 13
          }, void 0),
          "19 Units of Competency"
        ] }, void 0, !0, {
          fileName: "/app/applet/src/components/Courses/CourseCurriculum.tsx",
          lineNumber: 47,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ p.jsxDEV("span", { className: "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200", children: [
          /* @__PURE__ */ p.jsxDEV(W0, { className: "w-3.5 h-3.5 text-[#0072CE]" }, void 0, !1, {
            fileName: "/app/applet/src/components/Courses/CourseCurriculum.tsx",
            lineNumber: 52,
            columnNumber: 13
          }, void 0),
          "4 ICT Foundation Units"
        ] }, void 0, !0, {
          fileName: "/app/applet/src/components/Courses/CourseCurriculum.tsx",
          lineNumber: 51,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ p.jsxDEV("span", { className: "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0072CE]/10 text-[#0072CE] border border-[#0072CE]/20", children: [
          /* @__PURE__ */ p.jsxDEV(ya, { className: "w-3.5 h-3.5 text-[#0072CE]" }, void 0, !1, {
            fileName: "/app/applet/src/components/Courses/CourseCurriculum.tsx",
            lineNumber: 56,
            columnNumber: 13
          }, void 0),
          "15 Specialised AI Units"
        ] }, void 0, !0, {
          fileName: "/app/applet/src/components/Courses/CourseCurriculum.tsx",
          lineNumber: 55,
          columnNumber: 11
        }, void 0)
      ] }, void 0, !0, {
        fileName: "/app/applet/src/components/Courses/CourseCurriculum.tsx",
        lineNumber: 46,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ p.jsxDEV("div", { className: "flex items-center gap-2 shrink-0", children: /* @__PURE__ */ p.jsxDEV(
        "button",
        {
          type: "button",
          onClick: h ? v : g,
          className: "px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider text-[#042F61] bg-white hover:bg-slate-50 border border-slate-200 shadow-sm transition-all duration-200 hover:border-[#0072CE] cursor-pointer",
          children: h ? "Collapse All" : "Expand All Units"
        },
        void 0,
        !1,
        {
          fileName: "/app/applet/src/components/Courses/CourseCurriculum.tsx",
          lineNumber: 62,
          columnNumber: 11
        },
        void 0
      ) }, void 0, !1, {
        fileName: "/app/applet/src/components/Courses/CourseCurriculum.tsx",
        lineNumber: 61,
        columnNumber: 9
      }, void 0)
    ] }, void 0, !0, {
      fileName: "/app/applet/src/components/Courses/CourseCurriculum.tsx",
      lineNumber: 45,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ p.jsxDEV("div", { className: "space-y-10", children: [
      /* @__PURE__ */ p.jsxDEV("div", { className: "bg-slate-50/70 rounded-3xl p-6 sm:p-8 border border-slate-200/80", children: [
        /* @__PURE__ */ p.jsxDEV("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-5 mb-5 border-b border-slate-200", children: [
          /* @__PURE__ */ p.jsxDEV("div", { children: [
            /* @__PURE__ */ p.jsxDEV("span", { className: "text-[11px] font-extrabold uppercase tracking-widest text-[#0072CE]", children: "Group A · 4 Units" }, void 0, !1, {
              fileName: "/app/applet/src/components/Courses/CourseCurriculum.tsx",
              lineNumber: 78,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ p.jsxDEV("h3", { className: "text-xl sm:text-2xl font-bold text-[#042F61] tracking-tight", children: "ICT Foundation Units" }, void 0, !1, {
              fileName: "/app/applet/src/components/Courses/CourseCurriculum.tsx",
              lineNumber: 81,
              columnNumber: 15
            }, void 0)
          ] }, void 0, !0, {
            fileName: "/app/applet/src/components/Courses/CourseCurriculum.tsx",
            lineNumber: 77,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ p.jsxDEV("p", { className: "text-xs text-slate-500 max-w-sm", children: "Core technical capabilities across network security, database queries, testing, and client problem resolution." }, void 0, !1, {
            fileName: "/app/applet/src/components/Courses/CourseCurriculum.tsx",
            lineNumber: 85,
            columnNumber: 13
          }, void 0)
        ] }, void 0, !0, {
          fileName: "/app/applet/src/components/Courses/CourseCurriculum.tsx",
          lineNumber: 76,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ p.jsxDEV("div", { className: "space-y-3", children: c.map((y, N) => {
          const S = !!r[y.code];
          return /* @__PURE__ */ p.jsxDEV(
            "div",
            {
              className: `bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${S ? "border-[#0072CE]/40 shadow-md ring-1 ring-[#0072CE]/20" : "border-slate-200/80 hover:border-slate-300 hover:shadow-sm"}`,
              children: [
                /* @__PURE__ */ p.jsxDEV(
                  "button",
                  {
                    type: "button",
                    onClick: () => b(y.code),
                    onKeyDown: (T) => {
                      (T.key === "Enter" || T.key === " ") && (T.preventDefault(), b(y.code));
                    },
                    "aria-expanded": S,
                    className: "w-full flex items-center justify-between p-4 sm:p-5 text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0072CE]",
                    children: [
                      /* @__PURE__ */ p.jsxDEV("div", { className: "flex items-start sm:items-center gap-3 sm:gap-4 min-w-0 pr-2", children: [
                        /* @__PURE__ */ p.jsxDEV("span", { className: "shrink-0 font-mono text-xs font-bold px-2.5 py-1 rounded-md bg-slate-100 text-[#042F61] border border-slate-200", children: y.code }, void 0, !1, {
                          fileName: "/app/applet/src/components/Courses/CourseCurriculum.tsx",
                          lineNumber: 115,
                          columnNumber: 23
                        }, void 0),
                        /* @__PURE__ */ p.jsxDEV("span", { className: "font-semibold text-sm sm:text-base text-slate-800 leading-snug", children: y.title }, void 0, !1, {
                          fileName: "/app/applet/src/components/Courses/CourseCurriculum.tsx",
                          lineNumber: 118,
                          columnNumber: 23
                        }, void 0)
                      ] }, void 0, !0, {
                        fileName: "/app/applet/src/components/Courses/CourseCurriculum.tsx",
                        lineNumber: 114,
                        columnNumber: 21
                      }, void 0),
                      /* @__PURE__ */ p.jsxDEV(
                        "div",
                        {
                          className: `shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-200 ${S ? "rotate-180 bg-[#0072CE]/10 text-[#0072CE]" : "bg-slate-100 text-slate-500"}`,
                          children: /* @__PURE__ */ p.jsxDEV(Lc, { className: "w-4 h-4" }, void 0, !1, {
                            fileName: "/app/applet/src/components/Courses/CourseCurriculum.tsx",
                            lineNumber: 127,
                            columnNumber: 23
                          }, void 0)
                        },
                        void 0,
                        !1,
                        {
                          fileName: "/app/applet/src/components/Courses/CourseCurriculum.tsx",
                          lineNumber: 122,
                          columnNumber: 21
                        },
                        void 0
                      )
                    ]
                  },
                  void 0,
                  !0,
                  {
                    fileName: "/app/applet/src/components/Courses/CourseCurriculum.tsx",
                    lineNumber: 102,
                    columnNumber: 19
                  },
                  void 0
                ),
                /* @__PURE__ */ p.jsxDEV(vo, { children: S && /* @__PURE__ */ p.jsxDEV(
                  ce.div,
                  {
                    initial: { opacity: 0, height: 0 },
                    animate: { opacity: 1, height: "auto" },
                    exit: { opacity: 0, height: 0 },
                    transition: { duration: 0.2 },
                    className: "px-4 pb-4 sm:px-5 sm:pb-5 pt-1 border-t border-slate-100 text-xs sm:text-sm text-slate-600 bg-slate-50/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3",
                    children: [
                      /* @__PURE__ */ p.jsxDEV("div", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ p.jsxDEV("span", { className: "font-bold text-[#042F61]", children: "National Competency Unit:" }, void 0, !1, {
                          fileName: "/app/applet/src/components/Courses/CourseCurriculum.tsx",
                          lineNumber: 141,
                          columnNumber: 27
                        }, void 0),
                        /* @__PURE__ */ p.jsxDEV("span", { className: "font-mono text-slate-700", children: y.code }, void 0, !1, {
                          fileName: "/app/applet/src/components/Courses/CourseCurriculum.tsx",
                          lineNumber: 142,
                          columnNumber: 27
                        }, void 0),
                        /* @__PURE__ */ p.jsxDEV("span", { className: "text-slate-400", children: "·" }, void 0, !1, {
                          fileName: "/app/applet/src/components/Courses/CourseCurriculum.tsx",
                          lineNumber: 143,
                          columnNumber: 27
                        }, void 0),
                        /* @__PURE__ */ p.jsxDEV("span", { className: "text-slate-600", children: "AQF Level 5 Aligned" }, void 0, !1, {
                          fileName: "/app/applet/src/components/Courses/CourseCurriculum.tsx",
                          lineNumber: 144,
                          columnNumber: 27
                        }, void 0)
                      ] }, void 0, !0, {
                        fileName: "/app/applet/src/components/Courses/CourseCurriculum.tsx",
                        lineNumber: 140,
                        columnNumber: 25
                      }, void 0),
                      /* @__PURE__ */ p.jsxDEV(
                        "a",
                        {
                          href: `${l}`,
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className: "inline-flex items-center gap-1.5 font-bold text-[#0072CE] hover:text-[#042F61] transition-colors",
                          children: [
                            /* @__PURE__ */ p.jsxDEV("span", { children: "training.gov.au details" }, void 0, !1, {
                              fileName: "/app/applet/src/components/Courses/CourseCurriculum.tsx",
                              lineNumber: 152,
                              columnNumber: 27
                            }, void 0),
                            /* @__PURE__ */ p.jsxDEV(ro, { className: "w-3.5 h-3.5" }, void 0, !1, {
                              fileName: "/app/applet/src/components/Courses/CourseCurriculum.tsx",
                              lineNumber: 153,
                              columnNumber: 27
                            }, void 0)
                          ]
                        },
                        void 0,
                        !0,
                        {
                          fileName: "/app/applet/src/components/Courses/CourseCurriculum.tsx",
                          lineNumber: 146,
                          columnNumber: 25
                        },
                        void 0
                      )
                    ]
                  },
                  void 0,
                  !0,
                  {
                    fileName: "/app/applet/src/components/Courses/CourseCurriculum.tsx",
                    lineNumber: 133,
                    columnNumber: 23
                  },
                  void 0
                ) }, void 0, !1, {
                  fileName: "/app/applet/src/components/Courses/CourseCurriculum.tsx",
                  lineNumber: 131,
                  columnNumber: 19
                }, void 0)
              ]
            },
            y.code,
            !0,
            {
              fileName: "/app/applet/src/components/Courses/CourseCurriculum.tsx",
              lineNumber: 94,
              columnNumber: 17
            },
            void 0
          );
        }) }, void 0, !1, {
          fileName: "/app/applet/src/components/Courses/CourseCurriculum.tsx",
          lineNumber: 90,
          columnNumber: 11
        }, void 0)
      ] }, void 0, !0, {
        fileName: "/app/applet/src/components/Courses/CourseCurriculum.tsx",
        lineNumber: 75,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ p.jsxDEV("div", { className: "bg-slate-50/70 rounded-3xl p-6 sm:p-8 border border-slate-200/80", children: [
        /* @__PURE__ */ p.jsxDEV("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-5 mb-5 border-b border-slate-200", children: [
          /* @__PURE__ */ p.jsxDEV("div", { children: [
            /* @__PURE__ */ p.jsxDEV("span", { className: "text-[11px] font-extrabold uppercase tracking-widest text-[#0072CE]", children: "Group B · 15 Units" }, void 0, !1, {
              fileName: "/app/applet/src/components/Courses/CourseCurriculum.tsx",
              lineNumber: 168,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ p.jsxDEV("h3", { className: "text-xl sm:text-2xl font-bold text-[#042F61] tracking-tight", children: "Specialised AI & Machine Learning Units" }, void 0, !1, {
              fileName: "/app/applet/src/components/Courses/CourseCurriculum.tsx",
              lineNumber: 171,
              columnNumber: 15
            }, void 0)
          ] }, void 0, !0, {
            fileName: "/app/applet/src/components/Courses/CourseCurriculum.tsx",
            lineNumber: 167,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ p.jsxDEV("p", { className: "text-xs text-slate-500 max-w-sm", children: "Comprehensive accredited units spanning machine learning, Python programming, generative AI, MLOps, ethics, and governance." }, void 0, !1, {
            fileName: "/app/applet/src/components/Courses/CourseCurriculum.tsx",
            lineNumber: 175,
            columnNumber: 13
          }, void 0)
        ] }, void 0, !0, {
          fileName: "/app/applet/src/components/Courses/CourseCurriculum.tsx",
          lineNumber: 166,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ p.jsxDEV("div", { className: "space-y-3", children: d.map((y, N) => {
          const S = !!r[y.code];
          return /* @__PURE__ */ p.jsxDEV(
            "div",
            {
              className: `bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${S ? "border-[#0072CE]/40 shadow-md ring-1 ring-[#0072CE]/20" : "border-slate-200/80 hover:border-slate-300 hover:shadow-sm"}`,
              children: [
                /* @__PURE__ */ p.jsxDEV(
                  "button",
                  {
                    type: "button",
                    onClick: () => b(y.code),
                    onKeyDown: (T) => {
                      (T.key === "Enter" || T.key === " ") && (T.preventDefault(), b(y.code));
                    },
                    "aria-expanded": S,
                    className: "w-full flex items-center justify-between p-4 sm:p-5 text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0072CE]",
                    children: [
                      /* @__PURE__ */ p.jsxDEV("div", { className: "flex items-start sm:items-center gap-3 sm:gap-4 min-w-0 pr-2", children: [
                        /* @__PURE__ */ p.jsxDEV("span", { className: "shrink-0 font-mono text-xs font-bold px-2.5 py-1 rounded-md bg-[#0072CE]/10 text-[#0072CE] border border-[#0072CE]/20", children: y.code }, void 0, !1, {
                          fileName: "/app/applet/src/components/Courses/CourseCurriculum.tsx",
                          lineNumber: 205,
                          columnNumber: 23
                        }, void 0),
                        /* @__PURE__ */ p.jsxDEV("span", { className: "font-semibold text-sm sm:text-base text-slate-800 leading-snug", children: y.title }, void 0, !1, {
                          fileName: "/app/applet/src/components/Courses/CourseCurriculum.tsx",
                          lineNumber: 208,
                          columnNumber: 23
                        }, void 0)
                      ] }, void 0, !0, {
                        fileName: "/app/applet/src/components/Courses/CourseCurriculum.tsx",
                        lineNumber: 204,
                        columnNumber: 21
                      }, void 0),
                      /* @__PURE__ */ p.jsxDEV(
                        "div",
                        {
                          className: `shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-200 ${S ? "rotate-180 bg-[#0072CE]/10 text-[#0072CE]" : "bg-slate-100 text-slate-500"}`,
                          children: /* @__PURE__ */ p.jsxDEV(Lc, { className: "w-4 h-4" }, void 0, !1, {
                            fileName: "/app/applet/src/components/Courses/CourseCurriculum.tsx",
                            lineNumber: 217,
                            columnNumber: 23
                          }, void 0)
                        },
                        void 0,
                        !1,
                        {
                          fileName: "/app/applet/src/components/Courses/CourseCurriculum.tsx",
                          lineNumber: 212,
                          columnNumber: 21
                        },
                        void 0
                      )
                    ]
                  },
                  void 0,
                  !0,
                  {
                    fileName: "/app/applet/src/components/Courses/CourseCurriculum.tsx",
                    lineNumber: 192,
                    columnNumber: 19
                  },
                  void 0
                ),
                /* @__PURE__ */ p.jsxDEV(vo, { children: S && /* @__PURE__ */ p.jsxDEV(
                  ce.div,
                  {
                    initial: { opacity: 0, height: 0 },
                    animate: { opacity: 1, height: "auto" },
                    exit: { opacity: 0, height: 0 },
                    transition: { duration: 0.2 },
                    className: "px-4 pb-4 sm:px-5 sm:pb-5 pt-1 border-t border-slate-100 text-xs sm:text-sm text-slate-600 bg-slate-50/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3",
                    children: [
                      /* @__PURE__ */ p.jsxDEV("div", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ p.jsxDEV("span", { className: "font-bold text-[#042F61]", children: "National Accredited Unit:" }, void 0, !1, {
                          fileName: "/app/applet/src/components/Courses/CourseCurriculum.tsx",
                          lineNumber: 231,
                          columnNumber: 27
                        }, void 0),
                        /* @__PURE__ */ p.jsxDEV("span", { className: "font-mono text-slate-700", children: y.code }, void 0, !1, {
                          fileName: "/app/applet/src/components/Courses/CourseCurriculum.tsx",
                          lineNumber: 232,
                          columnNumber: 27
                        }, void 0),
                        /* @__PURE__ */ p.jsxDEV("span", { className: "text-slate-400", children: "·" }, void 0, !1, {
                          fileName: "/app/applet/src/components/Courses/CourseCurriculum.tsx",
                          lineNumber: 233,
                          columnNumber: 27
                        }, void 0),
                        /* @__PURE__ */ p.jsxDEV("span", { className: "text-slate-600", children: [
                          "Unit ",
                          N + 5,
                          " of 19"
                        ] }, void 0, !0, {
                          fileName: "/app/applet/src/components/Courses/CourseCurriculum.tsx",
                          lineNumber: 234,
                          columnNumber: 27
                        }, void 0)
                      ] }, void 0, !0, {
                        fileName: "/app/applet/src/components/Courses/CourseCurriculum.tsx",
                        lineNumber: 230,
                        columnNumber: 25
                      }, void 0),
                      /* @__PURE__ */ p.jsxDEV(
                        "a",
                        {
                          href: `${l}`,
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className: "inline-flex items-center gap-1.5 font-bold text-[#0072CE] hover:text-[#042F61] transition-colors",
                          children: [
                            /* @__PURE__ */ p.jsxDEV("span", { children: "View on training.gov.au" }, void 0, !1, {
                              fileName: "/app/applet/src/components/Courses/CourseCurriculum.tsx",
                              lineNumber: 242,
                              columnNumber: 27
                            }, void 0),
                            /* @__PURE__ */ p.jsxDEV(ro, { className: "w-3.5 h-3.5" }, void 0, !1, {
                              fileName: "/app/applet/src/components/Courses/CourseCurriculum.tsx",
                              lineNumber: 243,
                              columnNumber: 27
                            }, void 0)
                          ]
                        },
                        void 0,
                        !0,
                        {
                          fileName: "/app/applet/src/components/Courses/CourseCurriculum.tsx",
                          lineNumber: 236,
                          columnNumber: 25
                        },
                        void 0
                      )
                    ]
                  },
                  void 0,
                  !0,
                  {
                    fileName: "/app/applet/src/components/Courses/CourseCurriculum.tsx",
                    lineNumber: 223,
                    columnNumber: 23
                  },
                  void 0
                ) }, void 0, !1, {
                  fileName: "/app/applet/src/components/Courses/CourseCurriculum.tsx",
                  lineNumber: 221,
                  columnNumber: 19
                }, void 0)
              ]
            },
            y.code,
            !0,
            {
              fileName: "/app/applet/src/components/Courses/CourseCurriculum.tsx",
              lineNumber: 184,
              columnNumber: 17
            },
            void 0
          );
        }) }, void 0, !1, {
          fileName: "/app/applet/src/components/Courses/CourseCurriculum.tsx",
          lineNumber: 180,
          columnNumber: 11
        }, void 0)
      ] }, void 0, !0, {
        fileName: "/app/applet/src/components/Courses/CourseCurriculum.tsx",
        lineNumber: 165,
        columnNumber: 9
      }, void 0)
    ] }, void 0, !0, {
      fileName: "/app/applet/src/components/Courses/CourseCurriculum.tsx",
      lineNumber: 73,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ p.jsxDEV("div", { className: "mt-8 p-5 rounded-2xl bg-white border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4", children: [
      /* @__PURE__ */ p.jsxDEV("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ p.jsxDEV("div", { className: "w-10 h-10 rounded-xl bg-[#042F61]/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ p.jsxDEV(W0, { className: "w-5 h-5 text-[#042F61]" }, void 0, !1, {
          fileName: "/app/applet/src/components/Courses/CourseCurriculum.tsx",
          lineNumber: 259,
          columnNumber: 13
        }, void 0) }, void 0, !1, {
          fileName: "/app/applet/src/components/Courses/CourseCurriculum.tsx",
          lineNumber: 258,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ p.jsxDEV("div", { children: [
          /* @__PURE__ */ p.jsxDEV("p", { className: "text-xs sm:text-sm font-bold text-[#042F61]", children: "National Course Code: 11480NAT · AQF Level 5" }, void 0, !1, {
            fileName: "/app/applet/src/components/Courses/CourseCurriculum.tsx",
            lineNumber: 262,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ p.jsxDEV("p", { className: "text-xs text-slate-500", children: "Registered with Australian Skills Quality Authority (ASQA) · Currency: 23 Oct 2026 – 22 Oct 2031" }, void 0, !1, {
            fileName: "/app/applet/src/components/Courses/CourseCurriculum.tsx",
            lineNumber: 265,
            columnNumber: 13
          }, void 0)
        ] }, void 0, !0, {
          fileName: "/app/applet/src/components/Courses/CourseCurriculum.tsx",
          lineNumber: 261,
          columnNumber: 11
        }, void 0)
      ] }, void 0, !0, {
        fileName: "/app/applet/src/components/Courses/CourseCurriculum.tsx",
        lineNumber: 257,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ p.jsxDEV(
        "a",
        {
          href: l,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-[#042F61] hover:bg-[#0072CE] transition-all duration-200 shadow-sm whitespace-nowrap",
          children: [
            /* @__PURE__ */ p.jsxDEV("span", { children: "Official Registration" }, void 0, !1, {
              fileName: "/app/applet/src/components/Courses/CourseCurriculum.tsx",
              lineNumber: 277,
              columnNumber: 11
            }, void 0),
            /* @__PURE__ */ p.jsxDEV(ro, { className: "w-3.5 h-3.5" }, void 0, !1, {
              fileName: "/app/applet/src/components/Courses/CourseCurriculum.tsx",
              lineNumber: 278,
              columnNumber: 11
            }, void 0)
          ]
        },
        void 0,
        !0,
        {
          fileName: "/app/applet/src/components/Courses/CourseCurriculum.tsx",
          lineNumber: 271,
          columnNumber: 9
        },
        void 0
      )
    ] }, void 0, !0, {
      fileName: "/app/applet/src/components/Courses/CourseCurriculum.tsx",
      lineNumber: 256,
      columnNumber: 7
    }, void 0)
  ] }, void 0, !0, {
    fileName: "/app/applet/src/components/Courses/CourseCurriculum.tsx",
    lineNumber: 43,
    columnNumber: 5
  }, void 0);
}, Jx = ({ onNavigateHome: a }) => {
  const l = Xx, r = Y.useRef(null);
  Y.useEffect(() => {
    const f = document.title;
    document.title = "Diploma of Machine Learning and Artificial Intelligence Technology | Chelson Gordon", window.scrollTo({ top: 0, behavior: "instant" }), document.documentElement.scrollTop = 0, document.body.scrollTop = 0;
    const h = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "instant" }), document.documentElement.scrollTop = 0, document.body.scrollTop = 0;
    }, 50), b = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "instant" }), document.documentElement.scrollTop = 0, document.body.scrollTop = 0;
    }, 180);
    let g = document.querySelector('meta[name="description"]');
    const v = (g == null ? void 0 : g.getAttribute("content")) || "";
    g && g.setAttribute(
      "content",
      "Explore the Diploma of Machine Learning and Artificial Intelligence Technology (11480NAT), covering Python programming, machine learning, data engineering, generative AI and AI systems."
    );
    const y = r.current || document.getElementById("course-enquiry-gravity-form-mount"), N = document.getElementById("cg-hidden-gform-course-enquiry") || document.getElementById("cg-hidden-gform-source");
    if (y && N) {
      const S = N.querySelector("form, .gform_wrapper") || N.firstElementChild;
      S && !y.contains(S) && y.replaceChildren(S);
    }
    return () => {
      clearTimeout(h), clearTimeout(b), document.title = f, g && v && g.setAttribute("content", v);
    };
  }, []);
  const o = (f) => {
    const h = document.getElementById(f);
    if (h) {
      const v = h.getBoundingClientRect().top + window.pageYOffset - 100;
      window.scrollTo({ top: Math.max(0, v), behavior: "smooth" });
    }
  }, c = (f) => {
    a ? (f.preventDefault(), a()) : typeof window < "u" && (!window.location.hostname.includes("chelsongordon.com") || window.location.origin.includes("ais-") || window.location.origin.includes("localhost")) && (f.preventDefault(), window.history.pushState(null, "", "/"), window.dispatchEvent(new Event("popstate")), window.scrollTo({ top: 0, behavior: "smooth" }));
  }, d = [
    ED,
    IE,
    $E,
    pD,
    FE,
    vD
  ];
  return /* @__PURE__ */ p.jsxDEV(
    "div",
    {
      id: "cg-diploma-ai-course",
      className: "cg-diploma-ai-course min-h-screen bg-white font-sans text-slate-800 selection:bg-[#0072CE]/20 selection:text-[#042F61]",
      children: [
        /* @__PURE__ */ p.jsxDEV("section", { className: "relative pt-[180px] sm:pt-[190px] lg:pt-[180px] xl:pt-[200px] 2xl:pt-[220px] pb-16 lg:pb-24 bg-[#F4F7FB] overflow-hidden border-b border-slate-200/80", children: [
          /* @__PURE__ */ p.jsxDEV(
            "div",
            {
              className: "absolute inset-0 pointer-events-none overflow-hidden select-none z-0",
              "aria-hidden": "true",
              children: [
                /* @__PURE__ */ p.jsxDEV("div", { className: "absolute top-[160px] right-[40px] w-0 h-0 overflow-visible origin-top-left transform rotate-90 text-[64px] lg:text-[88px] font-black tracking-widest text-[#042F61]/[0.04] uppercase leading-none whitespace-nowrap select-none", children: "11480NAT · AI DIPLOMA" }, void 0, !1, {
                  fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                  lineNumber: 138,
                  columnNumber: 11
                }, void 0),
                /* @__PURE__ */ p.jsxDEV("div", { className: "absolute top-1/4 left-1/4 w-[600px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(0,114,206,0.08)_0%,transparent_70%)] blur-3xl pointer-events-none" }, void 0, !1, {
                  fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                  lineNumber: 141,
                  columnNumber: 11
                }, void 0),
                /* @__PURE__ */ p.jsxDEV("div", { className: "absolute bottom-10 right-10 w-[500px] h-[450px] bg-[radial-gradient(ellipse_at_center,rgba(253,185,19,0.06)_0%,transparent_70%)] blur-3xl pointer-events-none" }, void 0, !1, {
                  fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                  lineNumber: 142,
                  columnNumber: 11
                }, void 0)
              ]
            },
            void 0,
            !0,
            {
              fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
              lineNumber: 134,
              columnNumber: 9
            },
            void 0
          ),
          /* @__PURE__ */ p.jsxDEV("div", { className: "max-w-7xl mx-auto px-6 relative z-10", children: [
            /* @__PURE__ */ p.jsxDEV("div", { className: "flex items-center gap-2 text-xs font-semibold text-slate-500 mb-8", children: [
              /* @__PURE__ */ p.jsxDEV(
                "a",
                {
                  href: "/",
                  onClick: c,
                  className: "hover:text-[#0072CE] transition-colors flex items-center gap-1.5",
                  children: [
                    /* @__PURE__ */ p.jsxDEV(kE, { className: "w-3.5 h-3.5" }, void 0, !1, {
                      fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                      lineNumber: 154,
                      columnNumber: 15
                    }, void 0),
                    /* @__PURE__ */ p.jsxDEV("span", { children: "Home" }, void 0, !1, {
                      fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                      lineNumber: 155,
                      columnNumber: 15
                    }, void 0)
                  ]
                },
                void 0,
                !0,
                {
                  fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                  lineNumber: 149,
                  columnNumber: 13
                },
                void 0
              ),
              /* @__PURE__ */ p.jsxDEV(Hc, { className: "w-3 h-3 text-slate-400" }, void 0, !1, {
                fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                lineNumber: 157,
                columnNumber: 13
              }, void 0),
              /* @__PURE__ */ p.jsxDEV("span", { className: "text-slate-600", children: "Courses" }, void 0, !1, {
                fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                lineNumber: 158,
                columnNumber: 13
              }, void 0),
              /* @__PURE__ */ p.jsxDEV(Hc, { className: "w-3 h-3 text-slate-400" }, void 0, !1, {
                fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                lineNumber: 159,
                columnNumber: 13
              }, void 0),
              /* @__PURE__ */ p.jsxDEV("span", { className: "text-[#042F61] font-bold truncate max-w-[240px] sm:max-w-none", children: "11480NAT Diploma of AI" }, void 0, !1, {
                fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                lineNumber: 160,
                columnNumber: 13
              }, void 0)
            ] }, void 0, !0, {
              fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
              lineNumber: 148,
              columnNumber: 11
            }, void 0),
            /* @__PURE__ */ p.jsxDEV("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 xl:gap-14 items-center", children: [
              /* @__PURE__ */ p.jsxDEV("div", { className: "lg:col-span-7", children: [
                /* @__PURE__ */ p.jsxDEV(
                  ce.div,
                  {
                    initial: { opacity: 0, y: 15 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 0.5 },
                    className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#042F61] text-[#FFB800] text-xs font-black uppercase tracking-[0.2em] mb-6 shadow-sm",
                    children: [
                      /* @__PURE__ */ p.jsxDEV(Uc, { className: "w-3.5 h-3.5 text-[#FFB800]" }, void 0, !1, {
                        fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                        lineNumber: 176,
                        columnNumber: 17
                      }, void 0),
                      /* @__PURE__ */ p.jsxDEV("span", { children: "NATIONALLY ACCREDITED COURSE · 11480NAT" }, void 0, !1, {
                        fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                        lineNumber: 177,
                        columnNumber: 17
                      }, void 0)
                    ]
                  },
                  void 0,
                  !0,
                  {
                    fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                    lineNumber: 170,
                    columnNumber: 15
                  },
                  void 0
                ),
                /* @__PURE__ */ p.jsxDEV(
                  ce.h1,
                  {
                    initial: { opacity: 0, y: 15 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 0.5, delay: 0.1 },
                    className: "text-3xl sm:text-4xl lg:text-5xl xl:text-[54px] font-black text-[#042F61] tracking-tight leading-[1.12] mb-6 font-sans",
                    children: "Diploma of Machine Learning and Artificial Intelligence Technology"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                    lineNumber: 181,
                    columnNumber: 15
                  },
                  void 0
                ),
                /* @__PURE__ */ p.jsxDEV(
                  ce.p,
                  {
                    initial: { opacity: 0, y: 15 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 0.5, delay: 0.15 },
                    className: "text-slate-600 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl font-medium",
                    children: "Develop the skills to implement, deploy and manage artificial intelligence and machine learning systems. Explore Python programming, predictive modelling, data engineering, generative AI and intelligent business solutions through a comprehensive, industry-focused course."
                  },
                  void 0,
                  !1,
                  {
                    fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                    lineNumber: 191,
                    columnNumber: 15
                  },
                  void 0
                ),
                /* @__PURE__ */ p.jsxDEV(
                  ce.div,
                  {
                    initial: { opacity: 0, y: 15 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 0.5, delay: 0.2 },
                    className: "grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8",
                    children: [
                      /* @__PURE__ */ p.jsxDEV("div", { className: "bg-white p-3.5 rounded-2xl border border-slate-200/80 shadow-sm", children: [
                        /* @__PURE__ */ p.jsxDEV("div", { className: "flex items-center gap-1.5 text-xs text-slate-500 font-bold uppercase tracking-wider mb-1", children: [
                          /* @__PURE__ */ p.jsxDEV(Uc, { className: "w-3.5 h-3.5 text-[#0072CE]" }, void 0, !1, {
                            fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                            lineNumber: 209,
                            columnNumber: 21
                          }, void 0),
                          /* @__PURE__ */ p.jsxDEV("span", { children: "Level" }, void 0, !1, {
                            fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                            lineNumber: 210,
                            columnNumber: 21
                          }, void 0)
                        ] }, void 0, !0, {
                          fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                          lineNumber: 208,
                          columnNumber: 19
                        }, void 0),
                        /* @__PURE__ */ p.jsxDEV("span", { className: "text-sm sm:text-base font-black text-[#042F61]", children: "AQF Level 5" }, void 0, !1, {
                          fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                          lineNumber: 212,
                          columnNumber: 19
                        }, void 0)
                      ] }, void 0, !0, {
                        fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                        lineNumber: 207,
                        columnNumber: 17
                      }, void 0),
                      /* @__PURE__ */ p.jsxDEV("div", { className: "bg-white p-3.5 rounded-2xl border border-slate-200/80 shadow-sm", children: [
                        /* @__PURE__ */ p.jsxDEV("div", { className: "flex items-center gap-1.5 text-xs text-slate-500 font-bold uppercase tracking-wider mb-1", children: [
                          /* @__PURE__ */ p.jsxDEV(vf, { className: "w-3.5 h-3.5 text-[#0072CE]" }, void 0, !1, {
                            fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                            lineNumber: 217,
                            columnNumber: 21
                          }, void 0),
                          /* @__PURE__ */ p.jsxDEV("span", { children: "Curriculum" }, void 0, !1, {
                            fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                            lineNumber: 218,
                            columnNumber: 21
                          }, void 0)
                        ] }, void 0, !0, {
                          fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                          lineNumber: 216,
                          columnNumber: 19
                        }, void 0),
                        /* @__PURE__ */ p.jsxDEV("span", { className: "text-sm sm:text-base font-black text-[#042F61]", children: "19 Units" }, void 0, !1, {
                          fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                          lineNumber: 220,
                          columnNumber: 19
                        }, void 0)
                      ] }, void 0, !0, {
                        fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                        lineNumber: 215,
                        columnNumber: 17
                      }, void 0),
                      /* @__PURE__ */ p.jsxDEV("div", { className: "bg-white p-3.5 rounded-2xl border border-slate-200/80 shadow-sm", children: [
                        /* @__PURE__ */ p.jsxDEV("div", { className: "flex items-center gap-1.5 text-xs text-slate-500 font-bold uppercase tracking-wider mb-1", children: [
                          /* @__PURE__ */ p.jsxDEV(Kx, { className: "w-3.5 h-3.5 text-[#0072CE]" }, void 0, !1, {
                            fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                            lineNumber: 225,
                            columnNumber: 21
                          }, void 0),
                          /* @__PURE__ */ p.jsxDEV("span", { children: "Delivery" }, void 0, !1, {
                            fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                            lineNumber: 226,
                            columnNumber: 21
                          }, void 0)
                        ] }, void 0, !0, {
                          fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                          lineNumber: 224,
                          columnNumber: 19
                        }, void 0),
                        /* @__PURE__ */ p.jsxDEV("span", { className: "text-sm sm:text-base font-black text-[#042F61]", children: "Face-to-Face" }, void 0, !1, {
                          fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                          lineNumber: 228,
                          columnNumber: 19
                        }, void 0)
                      ] }, void 0, !0, {
                        fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                        lineNumber: 223,
                        columnNumber: 17
                      }, void 0),
                      /* @__PURE__ */ p.jsxDEV("div", { className: "bg-white p-3.5 rounded-2xl border border-slate-200/80 shadow-sm", children: [
                        /* @__PURE__ */ p.jsxDEV("div", { className: "flex items-center gap-1.5 text-xs text-slate-500 font-bold uppercase tracking-wider mb-1", children: [
                          /* @__PURE__ */ p.jsxDEV(Qx, { className: "w-3.5 h-3.5 text-[#0072CE]" }, void 0, !1, {
                            fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                            lineNumber: 233,
                            columnNumber: 21
                          }, void 0),
                          /* @__PURE__ */ p.jsxDEV("span", { children: "Intake" }, void 0, !1, {
                            fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                            lineNumber: 234,
                            columnNumber: 21
                          }, void 0)
                        ] }, void 0, !0, {
                          fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                          lineNumber: 232,
                          columnNumber: 19
                        }, void 0),
                        /* @__PURE__ */ p.jsxDEV("span", { className: "text-sm sm:text-base font-black text-[#042F61]", children: "Jan 2027" }, void 0, !1, {
                          fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                          lineNumber: 236,
                          columnNumber: 19
                        }, void 0)
                      ] }, void 0, !0, {
                        fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                        lineNumber: 231,
                        columnNumber: 17
                      }, void 0)
                    ]
                  },
                  void 0,
                  !0,
                  {
                    fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                    lineNumber: 201,
                    columnNumber: 15
                  },
                  void 0
                ),
                /* @__PURE__ */ p.jsxDEV(
                  ce.div,
                  {
                    initial: { opacity: 0, y: 15 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 0.5, delay: 0.25 },
                    className: "flex items-center gap-3 p-3.5 px-4 rounded-2xl bg-amber-50 border border-amber-200/80 text-amber-950 text-xs sm:text-sm font-semibold mb-8",
                    children: [
                      /* @__PURE__ */ p.jsxDEV("div", { className: "w-2.5 h-2.5 rounded-full bg-amber-500 shrink-0 animate-ping" }, void 0, !1, {
                        fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                        lineNumber: 247,
                        columnNumber: 17
                      }, void 0),
                      /* @__PURE__ */ p.jsxDEV("span", { children: [
                        /* @__PURE__ */ p.jsxDEV("strong", { children: "First Intake - January 2027 :" }, void 0, !1, {
                          fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                          lineNumber: 249,
                          columnNumber: 19
                        }, void 0),
                        " Enrolments Opening Soon.",
                        /* @__PURE__ */ p.jsxDEV("br", {}, void 0, !1, {
                          fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                          lineNumber: 249,
                          columnNumber: 90
                        }, void 0),
                        "Register your early interest today."
                      ] }, void 0, !0, {
                        fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                        lineNumber: 248,
                        columnNumber: 17
                      }, void 0)
                    ]
                  },
                  void 0,
                  !0,
                  {
                    fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                    lineNumber: 241,
                    columnNumber: 15
                  },
                  void 0
                ),
                /* @__PURE__ */ p.jsxDEV(
                  ce.div,
                  {
                    initial: { opacity: 0, y: 15 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 0.5, delay: 0.3 },
                    className: "flex flex-wrap items-center gap-4",
                    children: [
                      /* @__PURE__ */ p.jsxDEV(
                        "button",
                        {
                          type: "button",
                          onClick: () => o("enquiry"),
                          className: "inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#0072CE] hover:bg-[#042F61] text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-[#0072CE]/25 transition-all duration-200 group cursor-pointer",
                          children: [
                            /* @__PURE__ */ p.jsxDEV("span", { children: "Enquire About This Course" }, void 0, !1, {
                              fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                              lineNumber: 265,
                              columnNumber: 19
                            }, void 0),
                            /* @__PURE__ */ p.jsxDEV(Dl, { className: "w-4 h-4 text-white group-hover:translate-x-1 transition-transform" }, void 0, !1, {
                              fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                              lineNumber: 266,
                              columnNumber: 19
                            }, void 0)
                          ]
                        },
                        void 0,
                        !0,
                        {
                          fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                          lineNumber: 260,
                          columnNumber: 17
                        },
                        void 0
                      ),
                      /* @__PURE__ */ p.jsxDEV(
                        "button",
                        {
                          type: "button",
                          onClick: () => o("curriculum"),
                          className: "inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white hover:bg-slate-50 text-[#042F61] hover:text-[#0072CE] font-bold text-xs sm:text-sm uppercase tracking-wider border border-slate-300 shadow-sm transition-all duration-200 cursor-pointer",
                          children: /* @__PURE__ */ p.jsxDEV("span", { children: "Explore Course Curriculum" }, void 0, !1, {
                            fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                            lineNumber: 274,
                            columnNumber: 19
                          }, void 0)
                        },
                        void 0,
                        !1,
                        {
                          fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                          lineNumber: 269,
                          columnNumber: 17
                        },
                        void 0
                      )
                    ]
                  },
                  void 0,
                  !0,
                  {
                    fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                    lineNumber: 254,
                    columnNumber: 15
                  },
                  void 0
                )
              ] }, void 0, !0, {
                fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                lineNumber: 168,
                columnNumber: 13
              }, void 0),
              /* @__PURE__ */ p.jsxDEV("div", { className: "lg:col-span-5", children: /* @__PURE__ */ p.jsxDEV(
                ce.div,
                {
                  initial: { opacity: 0, scale: 0.95 },
                  animate: { opacity: 1, scale: 1 },
                  transition: { duration: 0.7, delay: 0.2 },
                  className: "relative rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-slate-900 group",
                  children: [
                    /* @__PURE__ */ p.jsxDEV(
                      "img",
                      {
                        src: l.heroImage,
                        alt: "AI systems development and machine learning workstation",
                        className: "w-full h-[400px] sm:h-[480px] lg:h-[540px] object-cover object-center group-hover:scale-105 transition-transform duration-700",
                        loading: "eager",
                        decoding: "async",
                        onError: (f) => {
                          const h = f.currentTarget;
                          h.dataset.triedFallback || (h.dataset.triedFallback = "true", h.src = "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1600&q=80");
                        }
                      },
                      void 0,
                      !1,
                      {
                        fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                        lineNumber: 287,
                        columnNumber: 17
                      },
                      void 0
                    ),
                    /* @__PURE__ */ p.jsxDEV("div", { className: "absolute inset-0 bg-gradient-to-t from-[#042F61]/90 via-[#042F61]/30 to-transparent" }, void 0, !1, {
                      fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                      lineNumber: 301,
                      columnNumber: 17
                    }, void 0),
                    /* @__PURE__ */ p.jsxDEV("div", { className: "absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/90 backdrop-blur-md border border-white/40 shadow-xl text-slate-800", children: [
                      /* @__PURE__ */ p.jsxDEV("div", { className: "flex items-center justify-between mb-2", children: [
                        /* @__PURE__ */ p.jsxDEV("span", { className: "text-[11px] font-black uppercase tracking-wider text-[#0072CE]", children: "Nationally Accredited" }, void 0, !1, {
                          fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                          lineNumber: 306,
                          columnNumber: 21
                        }, void 0),
                        /* @__PURE__ */ p.jsxDEV("span", { className: "font-mono text-xs font-bold px-2 py-0.5 rounded bg-slate-100 text-[#042F61]", children: "11480NAT" }, void 0, !1, {
                          fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                          lineNumber: 309,
                          columnNumber: 21
                        }, void 0)
                      ] }, void 0, !0, {
                        fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                        lineNumber: 305,
                        columnNumber: 19
                      }, void 0),
                      /* @__PURE__ */ p.jsxDEV("p", { className: "text-xs sm:text-sm font-bold text-[#042F61] leading-snug", children: "Field of Education: Computer Science (0201)" }, void 0, !1, {
                        fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                        lineNumber: 313,
                        columnNumber: 19
                      }, void 0),
                      /* @__PURE__ */ p.jsxDEV("p", { className: "text-[11px] text-slate-500 mt-1", children: "Accredited by ASQA · 19 Units of Competency" }, void 0, !1, {
                        fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                        lineNumber: 316,
                        columnNumber: 19
                      }, void 0)
                    ] }, void 0, !0, {
                      fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                      lineNumber: 304,
                      columnNumber: 17
                    }, void 0)
                  ]
                },
                void 0,
                !0,
                {
                  fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                  lineNumber: 281,
                  columnNumber: 15
                },
                void 0
              ) }, void 0, !1, {
                fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                lineNumber: 280,
                columnNumber: 13
              }, void 0)
            ] }, void 0, !0, {
              fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
              lineNumber: 165,
              columnNumber: 11
            }, void 0)
          ] }, void 0, !0, {
            fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
            lineNumber: 145,
            columnNumber: 9
          }, void 0)
        ] }, void 0, !0, {
          fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
          lineNumber: 132,
          columnNumber: 7
        }, void 0),
        /* @__PURE__ */ p.jsxDEV("section", { id: "overview", className: "py-20 lg:py-24 bg-white", children: /* @__PURE__ */ p.jsxDEV("div", { className: "max-w-7xl mx-auto px-6", children: /* @__PURE__ */ p.jsxDEV("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-12 items-center", children: [
          /* @__PURE__ */ p.jsxDEV("div", { className: "lg:col-span-7", children: [
            /* @__PURE__ */ p.jsxDEV("span", { className: "text-xs font-extrabold uppercase tracking-widest text-[#0072CE] block mb-3", children: "COURSE OVERVIEW" }, void 0, !1, {
              fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
              lineNumber: 335,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ p.jsxDEV("h2", { className: "text-3xl sm:text-4xl font-black text-[#042F61] tracking-tight leading-tight mb-6", children: "Building Practical Skills for the Future of AI" }, void 0, !1, {
              fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
              lineNumber: 338,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ p.jsxDEV("div", { className: "space-y-5 text-slate-600 text-base sm:text-lg leading-relaxed", children: l.overviewParagraphs.map((f, h) => /* @__PURE__ */ p.jsxDEV("p", { children: f }, h, !1, {
              fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
              lineNumber: 344,
              columnNumber: 19
            }, void 0)) }, void 0, !1, {
              fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
              lineNumber: 342,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ p.jsxDEV("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 mt-8 border-t border-slate-100", children: [
              /* @__PURE__ */ p.jsxDEV("div", { className: "p-4 rounded-2xl bg-slate-50 border border-slate-100", children: [
                /* @__PURE__ */ p.jsxDEV("span", { className: "block text-xs uppercase font-bold text-slate-400 tracking-wider", children: "Course Code" }, void 0, !1, {
                  fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                  lineNumber: 351,
                  columnNumber: 19
                }, void 0),
                /* @__PURE__ */ p.jsxDEV("span", { className: "text-xl font-black text-[#042F61] mt-1 block", children: "11480NAT" }, void 0, !1, {
                  fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                  lineNumber: 354,
                  columnNumber: 19
                }, void 0)
              ] }, void 0, !0, {
                fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                lineNumber: 350,
                columnNumber: 17
              }, void 0),
              /* @__PURE__ */ p.jsxDEV("div", { className: "p-4 rounded-2xl bg-slate-50 border border-slate-100", children: [
                /* @__PURE__ */ p.jsxDEV("span", { className: "block text-xs uppercase font-bold text-slate-400 tracking-wider", children: "AQF Level" }, void 0, !1, {
                  fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                  lineNumber: 360,
                  columnNumber: 19
                }, void 0),
                /* @__PURE__ */ p.jsxDEV("span", { className: "text-xl font-black text-[#042F61] mt-1 block", children: "Level 5 Diploma" }, void 0, !1, {
                  fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                  lineNumber: 363,
                  columnNumber: 19
                }, void 0)
              ] }, void 0, !0, {
                fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                lineNumber: 359,
                columnNumber: 17
              }, void 0),
              /* @__PURE__ */ p.jsxDEV("div", { className: "p-4 rounded-2xl bg-slate-50 border border-slate-100", children: [
                /* @__PURE__ */ p.jsxDEV("span", { className: "block text-xs uppercase font-bold text-slate-400 tracking-wider", children: "Total Curriculum" }, void 0, !1, {
                  fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                  lineNumber: 369,
                  columnNumber: 19
                }, void 0),
                /* @__PURE__ */ p.jsxDEV("span", { className: "text-xl font-black text-[#042F61] mt-1 block", children: "19 Units" }, void 0, !1, {
                  fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                  lineNumber: 372,
                  columnNumber: 19
                }, void 0)
              ] }, void 0, !0, {
                fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                lineNumber: 368,
                columnNumber: 17
              }, void 0)
            ] }, void 0, !0, {
              fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
              lineNumber: 349,
              columnNumber: 15
            }, void 0)
          ] }, void 0, !0, {
            fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
            lineNumber: 334,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ p.jsxDEV("div", { className: "lg:col-span-5", children: /* @__PURE__ */ p.jsxDEV("div", { className: "bg-gradient-to-br from-[#042F61] to-[#021e3d] rounded-[2rem] p-8 sm:p-10 text-white shadow-xl relative overflow-hidden", children: [
            /* @__PURE__ */ p.jsxDEV("div", { className: "absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(ellipse_at_center,rgba(0,114,206,0.3)_0%,transparent_70%)] blur-2xl pointer-events-none" }, void 0, !1, {
              fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
              lineNumber: 382,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ p.jsxDEV("div", { className: "relative z-10", children: [
              /* @__PURE__ */ p.jsxDEV("div", { className: "w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-6 border border-white/20", children: /* @__PURE__ */ p.jsxDEV(qc, { className: "w-6 h-6 text-[#FFB800]" }, void 0, !1, {
                fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                lineNumber: 386,
                columnNumber: 21
              }, void 0) }, void 0, !1, {
                fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                lineNumber: 385,
                columnNumber: 19
              }, void 0),
              /* @__PURE__ */ p.jsxDEV("h3", { className: "text-2xl font-bold mb-4 tracking-tight", children: "Industry-Focused Qualification" }, void 0, !1, {
                fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                lineNumber: 389,
                columnNumber: 19
              }, void 0),
              /* @__PURE__ */ p.jsxDEV("p", { className: "text-white/80 text-sm leading-relaxed mb-6", children: "Designed to bridge the growing gap between academic technology concepts and real-world enterprise implementation of AI and ML systems." }, void 0, !1, {
                fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                lineNumber: 393,
                columnNumber: 19
              }, void 0),
              /* @__PURE__ */ p.jsxDEV("ul", { className: "space-y-3 text-sm text-white/90", children: [
                /* @__PURE__ */ p.jsxDEV("li", { className: "flex items-center gap-2.5", children: [
                  /* @__PURE__ */ p.jsxDEV(ya, { className: "w-4 h-4 text-[#FFB800] shrink-0" }, void 0, !1, {
                    fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                    lineNumber: 399,
                    columnNumber: 23
                  }, void 0),
                  /* @__PURE__ */ p.jsxDEV("span", { children: "End-to-end AI systems lifecycle" }, void 0, !1, {
                    fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                    lineNumber: 400,
                    columnNumber: 23
                  }, void 0)
                ] }, void 0, !0, {
                  fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                  lineNumber: 398,
                  columnNumber: 21
                }, void 0),
                /* @__PURE__ */ p.jsxDEV("li", { className: "flex items-center gap-2.5", children: [
                  /* @__PURE__ */ p.jsxDEV(ya, { className: "w-4 h-4 text-[#FFB800] shrink-0" }, void 0, !1, {
                    fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                    lineNumber: 403,
                    columnNumber: 23
                  }, void 0),
                  /* @__PURE__ */ p.jsxDEV("span", { children: "Enterprise Generative AI applications" }, void 0, !1, {
                    fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                    lineNumber: 404,
                    columnNumber: 23
                  }, void 0)
                ] }, void 0, !0, {
                  fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                  lineNumber: 402,
                  columnNumber: 21
                }, void 0),
                /* @__PURE__ */ p.jsxDEV("li", { className: "flex items-center gap-2.5", children: [
                  /* @__PURE__ */ p.jsxDEV(ya, { className: "w-4 h-4 text-[#FFB800] shrink-0" }, void 0, !1, {
                    fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                    lineNumber: 407,
                    columnNumber: 23
                  }, void 0),
                  /* @__PURE__ */ p.jsxDEV("span", { children: "Cloud deployment and MLOps pipelines" }, void 0, !1, {
                    fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                    lineNumber: 408,
                    columnNumber: 23
                  }, void 0)
                ] }, void 0, !0, {
                  fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                  lineNumber: 406,
                  columnNumber: 21
                }, void 0),
                /* @__PURE__ */ p.jsxDEV("li", { className: "flex items-center gap-2.5", children: [
                  /* @__PURE__ */ p.jsxDEV(ya, { className: "w-4 h-4 text-[#FFB800] shrink-0" }, void 0, !1, {
                    fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                    lineNumber: 411,
                    columnNumber: 23
                  }, void 0),
                  /* @__PURE__ */ p.jsxDEV("span", { children: "Responsible governance and auditing" }, void 0, !1, {
                    fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                    lineNumber: 412,
                    columnNumber: 23
                  }, void 0)
                ] }, void 0, !0, {
                  fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                  lineNumber: 410,
                  columnNumber: 21
                }, void 0)
              ] }, void 0, !0, {
                fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                lineNumber: 397,
                columnNumber: 19
              }, void 0)
            ] }, void 0, !0, {
              fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
              lineNumber: 384,
              columnNumber: 17
            }, void 0)
          ] }, void 0, !0, {
            fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
            lineNumber: 381,
            columnNumber: 15
          }, void 0) }, void 0, !1, {
            fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
            lineNumber: 380,
            columnNumber: 13
          }, void 0)
        ] }, void 0, !0, {
          fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
          lineNumber: 332,
          columnNumber: 11
        }, void 0) }, void 0, !1, {
          fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
          lineNumber: 331,
          columnNumber: 9
        }, void 0) }, void 0, !1, {
          fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
          lineNumber: 330,
          columnNumber: 7
        }, void 0),
        /* @__PURE__ */ p.jsxDEV("section", { id: "what-you-will-learn", className: "py-20 lg:py-24 bg-[#F4F7FB]", children: /* @__PURE__ */ p.jsxDEV("div", { className: "max-w-7xl mx-auto px-6", children: [
          /* @__PURE__ */ p.jsxDEV("div", { className: "text-center max-w-3xl mx-auto mb-16", children: [
            /* @__PURE__ */ p.jsxDEV("span", { className: "text-xs font-extrabold uppercase tracking-widest text-[#0072CE] block mb-3", children: "WHAT YOU WILL LEARN" }, void 0, !1, {
              fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
              lineNumber: 429,
              columnNumber: 13
            }, void 0),
            /* @__PURE__ */ p.jsxDEV("h2", { className: "text-3xl sm:text-4xl lg:text-5xl font-black text-[#042F61] tracking-tight leading-tight mb-4", children: "Explore the Technologies Shaping Tomorrow" }, void 0, !1, {
              fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
              lineNumber: 432,
              columnNumber: 13
            }, void 0),
            /* @__PURE__ */ p.jsxDEV("p", { className: "text-slate-600 text-sm sm:text-base leading-relaxed", children: "Six core domains structured to take learners from foundational code and data analysis to advanced enterprise deployment." }, void 0, !1, {
              fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
              lineNumber: 435,
              columnNumber: 13
            }, void 0)
          ] }, void 0, !0, {
            fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
            lineNumber: 428,
            columnNumber: 11
          }, void 0),
          /* @__PURE__ */ p.jsxDEV("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8", children: l.learningAreas.map((f, h) => {
            const b = d[h] || qc;
            return /* @__PURE__ */ p.jsxDEV(
              ce.div,
              {
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: !0 },
                transition: { duration: 0.5, delay: h * 0.08 },
                className: "bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group",
                children: /* @__PURE__ */ p.jsxDEV("div", { children: [
                  /* @__PURE__ */ p.jsxDEV("div", { className: "flex items-center justify-between mb-6", children: [
                    /* @__PURE__ */ p.jsxDEV("div", { className: "w-12 h-12 rounded-2xl bg-[#0072CE]/10 text-[#0072CE] flex items-center justify-center group-hover:bg-[#0072CE] group-hover:!text-white transition-all duration-300", children: /* @__PURE__ */ p.jsxDEV(b, { className: "w-6 h-6 text-[#0072CE] group-hover:!text-white transition-colors duration-300" }, void 0, !1, {
                      fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                      lineNumber: 455,
                      columnNumber: 25
                    }, void 0) }, void 0, !1, {
                      fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                      lineNumber: 454,
                      columnNumber: 23
                    }, void 0),
                    /* @__PURE__ */ p.jsxDEV("span", { className: "font-mono text-xs font-bold px-2.5 py-1 rounded-md bg-slate-100 text-slate-500", children: f.number }, void 0, !1, {
                      fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                      lineNumber: 457,
                      columnNumber: 23
                    }, void 0)
                  ] }, void 0, !0, {
                    fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                    lineNumber: 453,
                    columnNumber: 21
                  }, void 0),
                  /* @__PURE__ */ p.jsxDEV("h3", { className: "text-xl font-bold text-[#042F61] tracking-tight mb-3 group-hover:text-[#0072CE] transition-colors", children: f.title }, void 0, !1, {
                    fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                    lineNumber: 462,
                    columnNumber: 21
                  }, void 0),
                  /* @__PURE__ */ p.jsxDEV("p", { className: "text-slate-600 text-sm leading-relaxed", children: f.description }, void 0, !1, {
                    fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                    lineNumber: 466,
                    columnNumber: 21
                  }, void 0)
                ] }, void 0, !0, {
                  fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                  lineNumber: 452,
                  columnNumber: 19
                }, void 0)
              },
              f.id,
              !1,
              {
                fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                lineNumber: 444,
                columnNumber: 17
              },
              void 0
            );
          }) }, void 0, !1, {
            fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
            lineNumber: 440,
            columnNumber: 11
          }, void 0)
        ] }, void 0, !0, {
          fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
          lineNumber: 427,
          columnNumber: 9
        }, void 0) }, void 0, !1, {
          fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
          lineNumber: 426,
          columnNumber: 7
        }, void 0),
        /* @__PURE__ */ p.jsxDEV("section", { id: "curriculum", className: "py-20 lg:py-24 bg-white scroll-mt-24", children: /* @__PURE__ */ p.jsxDEV("div", { className: "max-w-7xl mx-auto px-6", children: [
          /* @__PURE__ */ p.jsxDEV("div", { className: "text-center max-w-3xl mx-auto mb-14", children: [
            /* @__PURE__ */ p.jsxDEV("span", { className: "text-xs font-extrabold uppercase tracking-widest text-[#0072CE] block mb-3", children: "COMPREHENSIVE QUALIFICATION" }, void 0, !1, {
              fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
              lineNumber: 483,
              columnNumber: 13
            }, void 0),
            /* @__PURE__ */ p.jsxDEV("h2", { className: "text-3xl sm:text-4xl lg:text-5xl font-black text-[#042F61] tracking-tight leading-tight mb-4", children: "Explore the Course Curriculum" }, void 0, !1, {
              fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
              lineNumber: 486,
              columnNumber: 13
            }, void 0),
            /* @__PURE__ */ p.jsxDEV("p", { className: "text-slate-600 text-sm sm:text-base leading-relaxed", children: "All 19 nationally registered units of competency covering fundamental ICT disciplines and specialised artificial intelligence technologies." }, void 0, !1, {
              fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
              lineNumber: 489,
              columnNumber: 13
            }, void 0)
          ] }, void 0, !0, {
            fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
            lineNumber: 482,
            columnNumber: 11
          }, void 0),
          /* @__PURE__ */ p.jsxDEV(zD, { units: l.units, officialSource: l.officialSource }, void 0, !1, {
            fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
            lineNumber: 494,
            columnNumber: 11
          }, void 0)
        ] }, void 0, !0, {
          fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
          lineNumber: 481,
          columnNumber: 9
        }, void 0) }, void 0, !1, {
          fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
          lineNumber: 480,
          columnNumber: 7
        }, void 0),
        /* @__PURE__ */ p.jsxDEV("section", { id: "audience", className: "py-20 lg:py-24 bg-[#F4F7FB]", children: /* @__PURE__ */ p.jsxDEV("div", { className: "max-w-7xl mx-auto px-6", children: [
          /* @__PURE__ */ p.jsxDEV("div", { className: "text-center max-w-3xl mx-auto mb-16", children: [
            /* @__PURE__ */ p.jsxDEV("span", { className: "text-xs font-extrabold uppercase tracking-widest text-[#0072CE] block mb-3", children: "WHO SHOULD ENROL" }, void 0, !1, {
              fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
              lineNumber: 504,
              columnNumber: 13
            }, void 0),
            /* @__PURE__ */ p.jsxDEV("h2", { className: "text-3xl sm:text-4xl lg:text-5xl font-black text-[#042F61] tracking-tight leading-tight mb-4", children: "Who Is This Course Designed For?" }, void 0, !1, {
              fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
              lineNumber: 507,
              columnNumber: 13
            }, void 0),
            /* @__PURE__ */ p.jsxDEV("p", { className: "text-slate-600 text-sm sm:text-base leading-relaxed", children: "Tailored for learners and professionals seeking practical capabilities across modern applied artificial intelligence." }, void 0, !1, {
              fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
              lineNumber: 510,
              columnNumber: 13
            }, void 0)
          ] }, void 0, !0, {
            fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
            lineNumber: 503,
            columnNumber: 11
          }, void 0),
          /* @__PURE__ */ p.jsxDEV("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", children: l.audiences.map((f, h) => /* @__PURE__ */ p.jsxDEV(
            ce.div,
            {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: !0 },
              transition: { duration: 0.5, delay: h * 0.1 },
              className: "bg-white rounded-3xl p-7 border border-slate-200/90 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between",
              children: /* @__PURE__ */ p.jsxDEV("div", { children: [
                /* @__PURE__ */ p.jsxDEV("div", { className: "w-10 h-10 rounded-xl bg-[#042F61]/10 flex items-center justify-center text-[#042F61] mb-5", children: /* @__PURE__ */ p.jsxDEV(SD, { className: "w-5 h-5 text-[#042F61]" }, void 0, !1, {
                  fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                  lineNumber: 527,
                  columnNumber: 21
                }, void 0) }, void 0, !1, {
                  fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                  lineNumber: 526,
                  columnNumber: 19
                }, void 0),
                /* @__PURE__ */ p.jsxDEV("h3", { className: "text-lg font-bold text-[#042F61] tracking-tight mb-3", children: f.title }, void 0, !1, {
                  fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                  lineNumber: 529,
                  columnNumber: 19
                }, void 0),
                /* @__PURE__ */ p.jsxDEV("p", { className: "text-slate-600 text-xs sm:text-sm leading-relaxed", children: f.description }, void 0, !1, {
                  fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                  lineNumber: 532,
                  columnNumber: 19
                }, void 0)
              ] }, void 0, !0, {
                fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                lineNumber: 525,
                columnNumber: 17
              }, void 0)
            },
            h,
            !1,
            {
              fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
              lineNumber: 517,
              columnNumber: 15
            },
            void 0
          )) }, void 0, !1, {
            fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
            lineNumber: 515,
            columnNumber: 11
          }, void 0),
          /* @__PURE__ */ p.jsxDEV("p", { className: "text-center text-xs text-slate-500 mt-8 italic", children: "* Note: These are suggested target audiences based on curriculum alignment, not official entry eligibility criteria." }, void 0, !1, {
            fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
            lineNumber: 540,
            columnNumber: 11
          }, void 0)
        ] }, void 0, !0, {
          fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
          lineNumber: 502,
          columnNumber: 9
        }, void 0) }, void 0, !1, {
          fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
          lineNumber: 501,
          columnNumber: 7
        }, void 0),
        /* @__PURE__ */ p.jsxDEV("section", { id: "capabilities", className: "py-20 lg:py-24 bg-white", children: /* @__PURE__ */ p.jsxDEV("div", { className: "max-w-7xl mx-auto px-6", children: [
          /* @__PURE__ */ p.jsxDEV("div", { className: "text-center max-w-3xl mx-auto mb-14", children: [
            /* @__PURE__ */ p.jsxDEV("span", { className: "text-xs font-extrabold uppercase tracking-widest text-[#0072CE] block mb-3", children: "APPLIED COMPETENCIES" }, void 0, !1, {
              fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
              lineNumber: 552,
              columnNumber: 13
            }, void 0),
            /* @__PURE__ */ p.jsxDEV("h2", { className: "text-3xl sm:text-4xl lg:text-5xl font-black text-[#042F61] tracking-tight leading-tight mb-4", children: "Turn Technical Knowledge into Practical Capabilities" }, void 0, !1, {
              fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
              lineNumber: 555,
              columnNumber: 13
            }, void 0),
            /* @__PURE__ */ p.jsxDEV("p", { className: "text-slate-600 text-sm sm:text-base leading-relaxed", children: "Graduates develop tangible, production-ready capabilities aligned directly with modern enterprise technology requirements." }, void 0, !1, {
              fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
              lineNumber: 558,
              columnNumber: 13
            }, void 0)
          ] }, void 0, !0, {
            fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
            lineNumber: 551,
            columnNumber: 11
          }, void 0),
          /* @__PURE__ */ p.jsxDEV("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6", children: l.capabilities.map((f, h) => /* @__PURE__ */ p.jsxDEV(
            "div",
            {
              className: "p-5 rounded-2xl bg-slate-50 border border-slate-200/70 hover:border-[#0072CE]/30 hover:bg-white hover:shadow-md transition-all duration-200 flex items-start gap-3",
              children: [
                /* @__PURE__ */ p.jsxDEV("div", { className: "w-7 h-7 rounded-lg bg-[#0072CE]/10 flex items-center justify-center shrink-0 mt-0.5", children: /* @__PURE__ */ p.jsxDEV(ya, { className: "w-4 h-4 text-[#0072CE]" }, void 0, !1, {
                  fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                  lineNumber: 570,
                  columnNumber: 19
                }, void 0) }, void 0, !1, {
                  fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                  lineNumber: 569,
                  columnNumber: 17
                }, void 0),
                /* @__PURE__ */ p.jsxDEV("span", { className: "text-xs sm:text-sm font-semibold text-slate-800 leading-snug", children: f }, void 0, !1, {
                  fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                  lineNumber: 572,
                  columnNumber: 17
                }, void 0)
              ]
            },
            h,
            !0,
            {
              fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
              lineNumber: 565,
              columnNumber: 15
            },
            void 0
          )) }, void 0, !1, {
            fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
            lineNumber: 563,
            columnNumber: 11
          }, void 0)
        ] }, void 0, !0, {
          fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
          lineNumber: 550,
          columnNumber: 9
        }, void 0) }, void 0, !1, {
          fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
          lineNumber: 549,
          columnNumber: 7
        }, void 0),
        /* @__PURE__ */ p.jsxDEV("section", { id: "intake", className: "py-20 lg:py-24 bg-[#042F61] text-white relative overflow-hidden", children: [
          /* @__PURE__ */ p.jsxDEV(
            "div",
            {
              className: "absolute inset-0 pointer-events-none select-none",
              "aria-hidden": "true",
              children: /* @__PURE__ */ p.jsxDEV("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(0,114,206,0.3)_0%,transparent_70%)] blur-3xl pointer-events-none" }, void 0, !1, {
                fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                lineNumber: 589,
                columnNumber: 11
              }, void 0)
            },
            void 0,
            !1,
            {
              fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
              lineNumber: 585,
              columnNumber: 9
            },
            void 0
          ),
          /* @__PURE__ */ p.jsxDEV("div", { className: "max-w-5xl mx-auto px-6 relative z-10 text-center", children: [
            /* @__PURE__ */ p.jsxDEV("div", { className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-[#FFB800] text-xs font-bold uppercase tracking-widest mb-6 border border-white/20", children: [
              /* @__PURE__ */ p.jsxDEV(ZE, { className: "w-3.5 h-3.5 text-[#FFB800]" }, void 0, !1, {
                fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                lineNumber: 594,
                columnNumber: 13
              }, void 0),
              /* @__PURE__ */ p.jsxDEV("span", { children: "ADVERTISED INTAKE SCHEDULE" }, void 0, !1, {
                fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                lineNumber: 595,
                columnNumber: 13
              }, void 0)
            ] }, void 0, !0, {
              fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
              lineNumber: 593,
              columnNumber: 11
            }, void 0),
            /* @__PURE__ */ p.jsxDEV("h2", { className: "text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-6", children: "Take the Next Step into the Future of AI" }, void 0, !1, {
              fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
              lineNumber: 598,
              columnNumber: 11
            }, void 0),
            /* @__PURE__ */ p.jsxDEV("p", { className: "text-white/80 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-10", children: "Prepare for the upcoming intake of the Diploma of Machine Learning and Artificial Intelligence Technology. Early enquiries are now open." }, void 0, !1, {
              fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
              lineNumber: 602,
              columnNumber: 11
            }, void 0),
            /* @__PURE__ */ p.jsxDEV("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto mb-10", children: [
              /* @__PURE__ */ p.jsxDEV("div", { className: "p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15", children: [
                /* @__PURE__ */ p.jsxDEV("span", { className: "block text-xs uppercase font-extrabold text-[#FFB800] tracking-wider mb-1", children: "First Intake" }, void 0, !1, {
                  fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                  lineNumber: 609,
                  columnNumber: 15
                }, void 0),
                /* @__PURE__ */ p.jsxDEV("span", { className: "text-2xl font-black text-white", children: "January 2027" }, void 0, !1, {
                  fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                  lineNumber: 612,
                  columnNumber: 15
                }, void 0)
              ] }, void 0, !0, {
                fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                lineNumber: 608,
                columnNumber: 13
              }, void 0),
              /* @__PURE__ */ p.jsxDEV("div", { className: "p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15", children: [
                /* @__PURE__ */ p.jsxDEV("span", { className: "block text-xs uppercase font-extrabold text-[#FFB800] tracking-wider mb-1", children: "Delivery Format" }, void 0, !1, {
                  fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                  lineNumber: 618,
                  columnNumber: 15
                }, void 0),
                /* @__PURE__ */ p.jsxDEV("span", { className: "text-2xl font-black text-white", children: "Face-to-Face" }, void 0, !1, {
                  fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                  lineNumber: 621,
                  columnNumber: 15
                }, void 0)
              ] }, void 0, !0, {
                fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                lineNumber: 617,
                columnNumber: 13
              }, void 0),
              /* @__PURE__ */ p.jsxDEV("div", { className: "p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15", children: [
                /* @__PURE__ */ p.jsxDEV("span", { className: "block text-xs uppercase font-extrabold text-[#FFB800] tracking-wider mb-1", children: "Enrolment Status" }, void 0, !1, {
                  fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                  lineNumber: 627,
                  columnNumber: 15
                }, void 0),
                /* @__PURE__ */ p.jsxDEV("span", { className: "text-xl sm:text-2xl font-black text-white", children: "Opening Soon" }, void 0, !1, {
                  fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                  lineNumber: 630,
                  columnNumber: 15
                }, void 0)
              ] }, void 0, !0, {
                fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                lineNumber: 626,
                columnNumber: 13
              }, void 0)
            ] }, void 0, !0, {
              fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
              lineNumber: 607,
              columnNumber: 11
            }, void 0),
            /* @__PURE__ */ p.jsxDEV(
              "button",
              {
                type: "button",
                onClick: () => o("enquiry"),
                className: "inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#FFB800] hover:bg-white text-[#042F61] font-black text-xs sm:text-sm uppercase tracking-wider shadow-xl transition-all duration-200 cursor-pointer",
                children: [
                  /* @__PURE__ */ p.jsxDEV("span", { children: "Express Your Interest" }, void 0, !1, {
                    fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                    lineNumber: 641,
                    columnNumber: 13
                  }, void 0),
                  /* @__PURE__ */ p.jsxDEV(Dl, { className: "w-4 h-4 text-[#042F61]" }, void 0, !1, {
                    fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                    lineNumber: 642,
                    columnNumber: 13
                  }, void 0)
                ]
              },
              void 0,
              !0,
              {
                fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                lineNumber: 636,
                columnNumber: 11
              },
              void 0
            )
          ] }, void 0, !0, {
            fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
            lineNumber: 592,
            columnNumber: 9
          }, void 0)
        ] }, void 0, !0, {
          fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
          lineNumber: 584,
          columnNumber: 7
        }, void 0),
        /* @__PURE__ */ p.jsxDEV("section", { id: "enquiry", className: "py-20 lg:py-24 bg-[#F4F7FB] scroll-mt-24", children: /* @__PURE__ */ p.jsxDEV("div", { className: "max-w-5xl mx-auto px-6", children: [
          /* @__PURE__ */ p.jsxDEV("div", { className: "text-center max-w-3xl mx-auto mb-12", children: [
            /* @__PURE__ */ p.jsxDEV("span", { className: "text-xs font-extrabold uppercase tracking-widest text-[#0072CE] block mb-3", children: "GET IN TOUCH" }, void 0, !1, {
              fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
              lineNumber: 653,
              columnNumber: 13
            }, void 0),
            /* @__PURE__ */ p.jsxDEV("h2", { className: "text-3xl sm:text-4xl lg:text-5xl font-black text-[#042F61] tracking-tight leading-tight mb-4", children: "Interested in the Diploma of Machine Learning and Artificial Intelligence Technology?" }, void 0, !1, {
              fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
              lineNumber: 656,
              columnNumber: 13
            }, void 0),
            /* @__PURE__ */ p.jsxDEV("p", { className: "text-slate-600 text-sm sm:text-base leading-relaxed", children: "Get in touch with Chelson Gordon Consultancy to express your interest and receive further information about the upcoming January 2027 intake." }, void 0, !1, {
              fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
              lineNumber: 659,
              columnNumber: 13
            }, void 0)
          ] }, void 0, !0, {
            fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
            lineNumber: 652,
            columnNumber: 11
          }, void 0),
          /* @__PURE__ */ p.jsxDEV("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-12", children: [
            /* @__PURE__ */ p.jsxDEV(
              "a",
              {
                href: l.contact.phoneLink,
                className: "bg-white p-7 rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#0072CE] transition-all duration-300 flex flex-col items-center text-center group",
                children: [
                  /* @__PURE__ */ p.jsxDEV("div", { className: "w-14 h-14 rounded-2xl bg-[#0072CE]/10 text-[#0072CE] flex items-center justify-center mb-4 group-hover:bg-[#0072CE] group-hover:text-white transition-colors", children: /* @__PURE__ */ p.jsxDEV(gD, { className: "w-6 h-6" }, void 0, !1, {
                    fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                    lineNumber: 672,
                    columnNumber: 17
                  }, void 0) }, void 0, !1, {
                    fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                    lineNumber: 671,
                    columnNumber: 15
                  }, void 0),
                  /* @__PURE__ */ p.jsxDEV("span", { className: "text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-1", children: "Direct Telephone" }, void 0, !1, {
                    fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                    lineNumber: 674,
                    columnNumber: 15
                  }, void 0),
                  /* @__PURE__ */ p.jsxDEV("span", { className: "text-lg font-black text-[#042F61] group-hover:text-[#0072CE] transition-colors", children: l.contact.phoneFormatted }, void 0, !1, {
                    fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                    lineNumber: 677,
                    columnNumber: 15
                  }, void 0),
                  /* @__PURE__ */ p.jsxDEV("span", { className: "text-xs text-[#0072CE] font-bold mt-2", children: "Click to Call" }, void 0, !1, {
                    fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                    lineNumber: 680,
                    columnNumber: 15
                  }, void 0)
                ]
              },
              void 0,
              !0,
              {
                fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                lineNumber: 667,
                columnNumber: 13
              },
              void 0
            ),
            /* @__PURE__ */ p.jsxDEV(
              "a",
              {
                href: l.contact.emailLink,
                className: "bg-white p-7 rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#0072CE] transition-all duration-300 flex flex-col items-center text-center group",
                children: [
                  /* @__PURE__ */ p.jsxDEV("div", { className: "w-14 h-14 rounded-2xl bg-[#0072CE]/10 text-[#0072CE] flex items-center justify-center mb-4 group-hover:bg-[#0072CE] group-hover:text-white transition-colors", children: /* @__PURE__ */ p.jsxDEV(rD, { className: "w-6 h-6" }, void 0, !1, {
                    fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                    lineNumber: 691,
                    columnNumber: 17
                  }, void 0) }, void 0, !1, {
                    fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                    lineNumber: 690,
                    columnNumber: 15
                  }, void 0),
                  /* @__PURE__ */ p.jsxDEV("span", { className: "text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-1", children: "Course Enquiries Email" }, void 0, !1, {
                    fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                    lineNumber: 693,
                    columnNumber: 15
                  }, void 0),
                  /* @__PURE__ */ p.jsxDEV("span", { className: "text-sm sm:text-base font-black text-[#042F61] group-hover:text-[#0072CE] transition-colors break-all", children: l.contact.email }, void 0, !1, {
                    fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                    lineNumber: 696,
                    columnNumber: 15
                  }, void 0),
                  /* @__PURE__ */ p.jsxDEV("span", { className: "text-xs text-[#0072CE] font-bold mt-2", children: "Click to Email" }, void 0, !1, {
                    fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                    lineNumber: 699,
                    columnNumber: 15
                  }, void 0)
                ]
              },
              void 0,
              !0,
              {
                fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                lineNumber: 686,
                columnNumber: 13
              },
              void 0
            ),
            /* @__PURE__ */ p.jsxDEV(
              "a",
              {
                href: l.contact.websiteLink,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "bg-white p-7 rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#0072CE] transition-all duration-300 flex flex-col items-center text-center group",
                children: [
                  /* @__PURE__ */ p.jsxDEV("div", { className: "w-14 h-14 rounded-2xl bg-[#0072CE]/10 text-[#0072CE] flex items-center justify-center mb-4 group-hover:bg-[#0072CE] group-hover:text-white transition-colors", children: /* @__PURE__ */ p.jsxDEV(nD, { className: "w-6 h-6" }, void 0, !1, {
                    fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                    lineNumber: 712,
                    columnNumber: 17
                  }, void 0) }, void 0, !1, {
                    fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                    lineNumber: 711,
                    columnNumber: 15
                  }, void 0),
                  /* @__PURE__ */ p.jsxDEV("span", { className: "text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-1", children: "Website" }, void 0, !1, {
                    fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                    lineNumber: 714,
                    columnNumber: 15
                  }, void 0),
                  /* @__PURE__ */ p.jsxDEV("span", { className: "text-base font-black text-[#042F61] group-hover:text-[#0072CE] transition-colors", children: "chelsongordon.com" }, void 0, !1, {
                    fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                    lineNumber: 717,
                    columnNumber: 15
                  }, void 0),
                  /* @__PURE__ */ p.jsxDEV("span", { className: "text-xs text-[#0072CE] font-bold mt-2 flex items-center gap-1", children: [
                    /* @__PURE__ */ p.jsxDEV("span", { children: "Visit Site" }, void 0, !1, {
                      fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                      lineNumber: 721,
                      columnNumber: 17
                    }, void 0),
                    /* @__PURE__ */ p.jsxDEV(ro, { className: "w-3 h-3" }, void 0, !1, {
                      fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                      lineNumber: 722,
                      columnNumber: 17
                    }, void 0)
                  ] }, void 0, !0, {
                    fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                    lineNumber: 720,
                    columnNumber: 15
                  }, void 0)
                ]
              },
              void 0,
              !0,
              {
                fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
                lineNumber: 705,
                columnNumber: 13
              },
              void 0
            )
          ] }, void 0, !0, {
            fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
            lineNumber: 665,
            columnNumber: 11
          }, void 0),
          /* @__PURE__ */ p.jsxDEV(
            "div",
            {
              id: "course-enquiry-gravity-form-mount",
              ref: r,
              className: "w-full",
              "data-form-purpose": "diploma-ai-enquiry"
            },
            void 0,
            !1,
            {
              fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
              lineNumber: 728,
              columnNumber: 11
            },
            void 0
          )
        ] }, void 0, !0, {
          fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
          lineNumber: 651,
          columnNumber: 9
        }, void 0) }, void 0, !1, {
          fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
          lineNumber: 650,
          columnNumber: 7
        }, void 0)
      ]
    },
    void 0,
    !0,
    {
      fileName: "/app/applet/src/components/Courses/DiplomaAICoursePage.tsx",
      lineNumber: 125,
      columnNumber: 5
    },
    void 0
  );
};
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
const ng = "https://storage.googleapis.com/chelsongordon/com.chelsongordon/logos/logo.svg", RD = "https://storage.googleapis.com/chelsongordon/com.chelsongordon/logos/logo_white.svg", _D = ({
  isScrolled: a = !1,
  isHomepage: l
}) => {
  const r = () => {
    if (typeof l == "boolean")
      return l;
    if (typeof window > "u" || document.getElementById("pd-announcement"))
      return !0;
    const f = window.location.pathname.split("?")[0].replace(/\/+$/, "") || "/", h = window.location.hash || "";
    return !(f.startsWith("/courses") || f.startsWith("/book-pd-session") || f.startsWith("/our-people") || f.startsWith("/our-teams") || f.startsWith("/team") || f.startsWith("/hr-dashboard") || h.startsWith("#course") || h.startsWith("#book-pd-session") || h === "#booking-registration-section" || h.startsWith("#our-people") || h.startsWith("#our-teams") || h.startsWith("#meet-our-team") || h.startsWith("#hr-dashboard") || h === "#org-chart") && (f === "/" || f === "");
  }, [o, c] = Sh.useState(r);
  Sh.useEffect(() => {
    if (typeof l == "boolean") {
      c(l);
      return;
    }
    const f = () => {
      c(r());
    };
    return f(), window.addEventListener("popstate", f), window.addEventListener("hashchange", f), () => {
      window.removeEventListener("popstate", f), window.removeEventListener("hashchange", f);
    };
  }, [l]);
  const d = (f) => {
    if (o) {
      f.preventDefault();
      const h = document.getElementById("pd-announcement");
      h ? (h.scrollIntoView({ behavior: "smooth", block: "start" }), window.history.pushState(null, "", "#pd-announcement")) : (window.history.pushState(null, "", "/#pd-announcement"), window.dispatchEvent(new Event("popstate")), setTimeout(() => {
        const b = document.getElementById("pd-announcement");
        b && b.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 150));
    } else
      f.preventDefault(), window.location.href = "https://chelsongordon.com/book-pd-session/";
  };
  return /* @__PURE__ */ p.jsxDEV(
    "aside",
    {
      "aria-label": "Professional Development Announcement",
      className: `w-full group relative z-50 transition-colors duration-500 overflow-hidden select-none border-b ${a ? "bg-[#021A38] border-white/10" : "bg-[#01142B]/90 border-white/10 backdrop-blur-md"}`,
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
            lineNumber: 99,
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
            lineNumber: 103,
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
            lineNumber: 107,
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
            lineNumber: 112,
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
            lineNumber: 116,
            columnNumber: 7
          },
          void 0
        ),
        /* @__PURE__ */ p.jsxDEV(
          "a",
          {
            href: o ? "#pd-announcement" : "https://chelsongordon.com/book-pd-session/",
            onClick: d,
            className: "group relative flex items-center justify-center gap-2 sm:gap-2.5 px-4 py-2 sm:py-2.5 text-center cursor-pointer transition-all duration-300",
            children: [
              /* @__PURE__ */ p.jsxDEV("span", { className: "inline-flex items-center gap-1.5 text-[11px] sm:text-xs md:text-[13px] text-white/90 group-hover:text-white font-medium tracking-normal transition-colors", children: [
                /* @__PURE__ */ p.jsxDEV("span", { className: "hidden sm:inline", children: "Join our upcoming Professional Development Sessions — practical, expert-led workshops for VET leaders" }, void 0, !1, {
                  fileName: "/app/applet/src/components/TopAnnouncementBanner.tsx",
                  lineNumber: 126,
                  columnNumber: 11
                }, void 0),
                /* @__PURE__ */ p.jsxDEV("span", { className: "inline sm:hidden", children: "Join our Professional Development Sessions" }, void 0, !1, {
                  fileName: "/app/applet/src/components/TopAnnouncementBanner.tsx",
                  lineNumber: 127,
                  columnNumber: 11
                }, void 0)
              ] }, void 0, !0, {
                fileName: "/app/applet/src/components/TopAnnouncementBanner.tsx",
                lineNumber: 125,
                columnNumber: 9
              }, void 0),
              /* @__PURE__ */ p.jsxDEV(
                ce.span,
                {
                  className: "inline-flex items-center text-white/90 group-hover:text-white transition-colors",
                  initial: { x: 0 },
                  whileHover: { x: 3 },
                  children: /* @__PURE__ */ p.jsxDEV(Hc, { className: "w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" }, void 0, !1, {
                    fileName: "/app/applet/src/components/TopAnnouncementBanner.tsx",
                    lineNumber: 135,
                    columnNumber: 11
                  }, void 0)
                },
                void 0,
                !1,
                {
                  fileName: "/app/applet/src/components/TopAnnouncementBanner.tsx",
                  lineNumber: 130,
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
            lineNumber: 120,
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
      lineNumber: 90,
      columnNumber: 5
    },
    void 0
  );
}, Fc = [
  { name: "Arabic", code: "AR", english: "Arabic", native: "عربي" },
  { name: "Chinese", code: "ZH", english: "Chinese", native: "中国人" },
  { name: "Hindi", code: "HI", english: "Hindi", native: "हिन्दी" },
  { name: "Thai", code: "TH", english: "Thai", native: "ไทย" },
  { name: "Vietnamese", code: "VI", english: "Vietnamese", native: "Tiếng Việt" }
], OD = (a) => {
  switch (a) {
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
}, BD = ({
  isScrolled: a,
  selectedLang: l,
  onLanguageChange: r
}) => {
  const [o, c] = Y.useState(!1), d = Y.useRef(null);
  return Y.useEffect(() => {
    const f = (h) => {
      d.current && !d.current.contains(h.target) && c(!1);
    };
    return document.addEventListener("mousedown", f), () => {
      document.removeEventListener("mousedown", f);
    };
  }, []), /* @__PURE__ */ p.jsxDEV("div", { className: "relative", ref: d, children: [
    /* @__PURE__ */ p.jsxDEV("div", { id: "google_translate_element", style: { display: "none" } }, void 0, !1, {
      fileName: "/app/applet/src/components/Navbar.tsx",
      lineNumber: 68,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ p.jsxDEV(
      ce.button,
      {
        whileHover: { scale: 1.05 },
        whileTap: { scale: 0.95 },
        onClick: () => c(!o),
        className: "flex items-center gap-1 min-[1600px]:gap-1.5 px-2.5 py-1.5 min-[1600px]:px-4 min-[1600px]:py-2.5 rounded-[18px] min-[1600px]:rounded-xl text-[9px] min-[1600px]:text-[11px] font-bold uppercase tracking-wider min-[1600px]:tracking-widest transition-all border shadow-sm notranslate bg-white/5 text-white border-white/10 hover:bg-white/10 backdrop-blur-md",
        translate: "no",
        style: a ? { backgroundColor: "rgba(4, 47, 97, 0.05)", color: "#042F61", borderColor: "rgba(4, 47, 97, 0.1)" } : {},
        children: [
          /* @__PURE__ */ p.jsxDEV(Zx, { className: "w-3 h-3 min-[1600px]:w-3.5 min-[1600px]:h-3.5" }, void 0, !1, {
            fileName: "/app/applet/src/components/Navbar.tsx",
            lineNumber: 77,
            columnNumber: 9
          }, void 0),
          /* @__PURE__ */ p.jsxDEV("span", { className: "inline", children: OD(l) }, void 0, !1, {
            fileName: "/app/applet/src/components/Navbar.tsx",
            lineNumber: 78,
            columnNumber: 9
          }, void 0),
          /* @__PURE__ */ p.jsxDEV(Lc, { className: `w-2.5 h-2.5 min-[1600px]:w-3 min-[1600px]:h-3 transition-transform duration-300 ${o ? "rotate-180" : ""}` }, void 0, !1, {
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
    /* @__PURE__ */ p.jsxDEV(vo, { children: o && /* @__PURE__ */ p.jsxDEV(
      ce.div,
      {
        initial: { opacity: 0, y: 15, scale: 0.95 },
        animate: { opacity: 1, y: 0, scale: 1 },
        exit: { opacity: 0, y: 15, scale: 0.95 },
        transition: { type: "spring", damping: 20, stiffness: 300 },
        className: "absolute right-0 mt-3 w-[270px] bg-white/95 backdrop-blur-xl rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-gray-100 overflow-hidden z-[100]",
        children: /* @__PURE__ */ p.jsxDEV("div", { className: "py-2", children: [
          /* @__PURE__ */ p.jsxDEV(
            ce.button,
            {
              initial: { opacity: 0, x: -10 },
              animate: { opacity: 1, x: 0 },
              transition: { duration: 0.2 },
              whileHover: { backgroundColor: "rgba(249, 115, 22, 0.08)", x: 3 },
              whileTap: { scale: 0.98 },
              onClick: () => {
                r("EN", "English"), c(!1);
              },
              className: "w-full flex items-center gap-2.5 px-5 py-4 border-b border-orange-100 bg-orange-50/50 text-[10.5px] font-extrabold uppercase tracking-widest text-[#042F61] transition-all text-left group notranslate",
              translate: "no",
              children: [
                /* @__PURE__ */ p.jsxDEV(Ix, { className: "w-3.5 h-3.5 text-orange-500 transition-transform duration-500 group-hover:rotate-180" }, void 0, !1, {
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
          Fc.map((f, h) => /* @__PURE__ */ p.jsxDEV(
            ce.button,
            {
              initial: { opacity: 0, x: -10 },
              animate: { opacity: 1, x: 0 },
              transition: { delay: 0.05 + h * 0.04, duration: 0.2 },
              whileHover: {
                x: 3,
                backgroundColor: l === f.name ? "rgb(4, 47, 97)" : "rgba(4, 47, 97, 0.04)"
              },
              whileTap: { scale: 0.98 },
              onClick: () => {
                r(f.code, f.name), c(!1);
              },
              className: `w-full flex items-center gap-2.5 px-5 py-3.5 text-[11px] font-bold uppercase tracking-widest transition-all notranslate ${l === f.name ? "bg-[#042F61] text-white font-black" : "text-primary"}`,
              translate: "no",
              children: [
                /* @__PURE__ */ p.jsxDEV("span", { className: "whitespace-nowrap", children: f.english }, void 0, !1, {
                  fileName: "/app/applet/src/components/Navbar.tsx",
                  lineNumber: 130,
                  columnNumber: 19
                }, void 0),
                /* @__PURE__ */ p.jsxDEV("span", { className: `w-[1px] h-3.5 flex-shrink-0 ${l === f.name ? "bg-white/30" : "bg-[#042F61]/20"}` }, void 0, !1, {
                  fileName: "/app/applet/src/components/Navbar.tsx",
                  lineNumber: 131,
                  columnNumber: 19
                }, void 0),
                /* @__PURE__ */ p.jsxDEV("span", { className: `whitespace-nowrap text-[12px] font-bold normal-case tracking-normal ${l === f.name ? "text-white" : "text-[#042F61]"}`, children: f.native }, void 0, !1, {
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
}, ag = [
  { name: "About Us", href: "https://chelsongordon.com/who-we-are/" },
  { name: "Our Services", href: "https://chelsongordon.com/our-services/" },
  { name: "Our People", href: "https://chelsongordon.com/our-team/" },
  { name: "Workplace Assessment", href: "https://chelsongordon.com/workplace-assessment/" },
  { name: "Careers", href: "https://chelsongordon.com/careers/" }
], kD = ({ forceSolid: a, logoHref: l, isHomepage: r }) => {
  const [o, c] = Y.useState(!1), [d, f] = Y.useState(!1), [h, b] = Y.useState(!1), [g, v] = Y.useState(() => localStorage.getItem("selected_language_name") || "English"), y = typeof window < "u" && (window.location.pathname === "/book-pd-session" || window.location.pathname.startsWith("/book-pd-session") || window.location.hash === "#book-pd-session" || window.location.hash.startsWith("#book-pd-session")), N = l || (y ? "https://chelsongordon.com/" : "/"), S = N.startsWith("http"), T = o || a;
  Y.useEffect(() => {
    var J;
    let M = !1;
    const B = () => {
      M || (window.requestAnimationFrame(() => {
        c(window.scrollY > 20), M = !1;
      }), M = !0);
    };
    c(window.scrollY > 20);
    const H = () => {
      c(!1), b(!1), setTimeout(() => {
        c(window.scrollY > 20);
      }, 50);
    };
    window.addEventListener("scroll", B, { passive: !0 }), window.addEventListener("popstate", H), window.addEventListener("hashchange", H);
    const F = ((P) => {
      const G = document.cookie.split(";");
      for (let X = 0; X < G.length; X++) {
        let W = G[X].trim();
        if (W.startsWith(P + "=")) {
          let K = W.substring(P.length + 1);
          return K.startsWith('"') && K.endsWith('"') && (K = K.slice(1, -1)), decodeURIComponent(K);
        }
      }
      return null;
    })("googtrans");
    if (F) {
      let P = ((J = F.split("/").pop()) == null ? void 0 : J.toUpperCase()) || "";
      if (P = P.replace(/["\s]/g, ""), P === "EN")
        v("English"), localStorage.setItem("selected_language_name", "English");
      else if (P) {
        const G = Fc.find((X) => X.code === (P === "ZH-CN" ? "ZH" : P));
        G && (v(G.name), localStorage.setItem("selected_language_name", G.name));
      }
    } else {
      const P = localStorage.getItem("selected_language_name");
      P && v(P);
    }
    if (!document.getElementById("google-translate-script")) {
      const P = document.createElement("script");
      P.id = "google-translate-script", P.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit", P.async = !0, document.body.appendChild(P);
    }
    return window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement({
        pageLanguage: "en",
        includedLanguages: "ar,zh-CN,hi,th,vi",
        layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: !1
      }, "google_translate_element");
    }, () => window.removeEventListener("scroll", B);
  }, []);
  const U = (M, B) => {
    v(B), localStorage.setItem("selected_language_name", B);
    let H = M.toLowerCase();
    H === "zh" && (H = "zh-CN");
    const q = window.location.hostname, F = q.split(".");
    if (H === "en") {
      const P = "expires=Thu, 01 Jan 1970 00:00:00 UTC", G = ["/", "/en/", "/en-US/"], X = [
        "",
        q,
        `.${q}`,
        F.slice(-2).join("."),
        `.${F.slice(-2).join(".")}`
      ];
      for (const W of X)
        for (const K of G)
          document.cookie = `googtrans=; path=${K}; ${W ? `domain=${W};` : ""} ${P}`, document.cookie = `googtrans=; ${W ? `domain=${W};` : ""} ${P}`;
      try {
        const W = document.querySelector("iframe.goog-te-banner-frame");
        if (W && W.contentDocument) {
          const K = W.contentDocument.getElementById("BannerRestoreBtn") || W.contentDocument.querySelector(".goog-te-button button");
          K && K.click();
        }
      } catch (W) {
        console.error(W);
      }
    } else {
      const P = `/en/${H}`;
      if (document.cookie = `googtrans=${P}; path=/`, document.cookie = `googtrans=${P}; path=/; domain=.${q}`, document.cookie = `googtrans=${P}; path=/; domain=${q}`, F.length > 2) {
        const G = F.slice(1).join(".");
        document.cookie = `googtrans=${P}; path=/; domain=.${G}`, document.cookie = `googtrans=${P}; path=/; domain=${G}`;
      }
    }
    const J = document.querySelector(".goog-te-combo");
    J ? (J.value = H === "en" ? "" : H, J.dispatchEvent(new Event("change")), H === "en" && setTimeout(() => {
      window.location.reload();
    }, 150)) : setTimeout(() => {
      const P = document.querySelector(".goog-te-combo");
      P ? (P.value = H === "en" ? "" : H, P.dispatchEvent(new Event("change")), H === "en" && setTimeout(() => {
        window.location.reload();
      }, 150)) : window.location.reload();
    }, 500);
  };
  return /* @__PURE__ */ p.jsxDEV("nav", { className: `fixed top-0 left-0 w-full z-50 transition-all duration-300 ${T ? o ? "bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200/80" : "bg-white shadow-none border-b border-slate-100" : "bg-transparent shadow-none"}`, children: [
    /* @__PURE__ */ p.jsxDEV(_D, { isScrolled: T, isHomepage: r }, void 0, !1, {
      fileName: "/app/applet/src/components/Navbar.tsx",
      lineNumber: 352,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ p.jsxDEV("div", { className: "max-w-full mx-auto w-full px-4 md:px-8 lg:px-10 xl:px-12 2xl:px-[4%] h-[120px] lg:h-[100px] xl:h-[120px] 2xl:h-[140px] flex items-center justify-between gap-4", children: [
      /* @__PURE__ */ p.jsxDEV("div", { className: "flex-shrink-0", children: /* @__PURE__ */ p.jsxDEV(
        "a",
        {
          href: N,
          onClick: (M) => {
            S || (M.preventDefault(), window.history.pushState(null, "", "/"), window.location.hash = "", window.dispatchEvent(new Event("popstate")), window.scrollTo({ top: 0, behavior: "smooth" }));
          },
          className: "flex items-center gap-3 cursor-pointer",
          children: /* @__PURE__ */ p.jsxDEV(
            "img",
            {
              src: T || d ? ng : RD,
              alt: "Chelson Gordon Logo",
              className: `mt-0 md:-mt-[20px] lg:mt-[5px] h-[145px] md:h-[125px] lg:h-[110px] xl:h-[145px] 2xl:h-[170px] w-auto transition-all transform origin-left ${!T && d ? "brightness-0 invert" : ""}`,
              onError: () => !T && f(!0),
              referrerPolicy: "no-referrer",
              decoding: "async",
              fetchPriority: "high"
            },
            void 0,
            !1,
            {
              fileName: "/app/applet/src/components/Navbar.tsx",
              lineNumber: 371,
              columnNumber: 14
            },
            void 0
          )
        },
        void 0,
        !1,
        {
          fileName: "/app/applet/src/components/Navbar.tsx",
          lineNumber: 356,
          columnNumber: 11
        },
        void 0
      ) }, void 0, !1, {
        fileName: "/app/applet/src/components/Navbar.tsx",
        lineNumber: 355,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ p.jsxDEV("div", { className: "hidden lg:flex items-center justify-end ml-auto min-w-0 flex-shrink-0", children: /* @__PURE__ */ p.jsxDEV("div", { className: "flex items-center gap-[14px] xl:gap-[20px] min-[1600px]:gap-[28px] justify-end flex-shrink-0", children: [
        /* @__PURE__ */ p.jsxDEV("div", { className: "flex items-center gap-[14px] xl:gap-[22px] min-[1600px]:gap-[32px] mr-1 xl:mr-2 flex-shrink-0", children: ag.map((M) => {
          const B = M.href.startsWith("/") || M.href.startsWith("#"), H = M.name === "Careers";
          return /* @__PURE__ */ p.jsxDEV(
            "a",
            {
              href: M.href,
              target: B ? void 0 : "_blank",
              rel: B ? void 0 : "noopener noreferrer",
              onClick: (q) => {
                B && (q.preventDefault(), M.href.startsWith("#") ? window.location.hash = M.href : (window.history.pushState(null, "", M.href), window.dispatchEvent(new Event("popstate"))), window.scrollTo({ top: 0, behavior: "smooth" }));
              },
              className: `${H ? "hidden min-[1600px]:inline-block" : "inline-block"} text-[9px] xl:text-[10.5px] min-[1600px]:text-xs font-bold uppercase tracking-wider xl:tracking-widest transition-all hover:text-accent whitespace-nowrap ${T ? "text-primary" : "text-white"}`,
              children: M.name
            },
            M.name,
            !1,
            {
              fileName: "/app/applet/src/components/Navbar.tsx",
              lineNumber: 393,
              columnNumber: 19
            },
            void 0
          );
        }) }, void 0, !1, {
          fileName: "/app/applet/src/components/Navbar.tsx",
          lineNumber: 388,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ p.jsxDEV("div", { className: "flex items-center gap-[12px] min-[1600px]:gap-3 flex-shrink-0", children: [
          /* @__PURE__ */ p.jsxDEV(
            ce.a,
            {
              href: "https://chelsongordon.com/contact-us-page/",
              target: "_blank",
              rel: "noopener noreferrer",
              whileHover: { scale: 1.05 },
              whileTap: { scale: 0.95 },
              className: `flex items-center gap-1 px-2.5 py-1.5 min-[1600px]:px-4 min-[1600px]:py-2.5 rounded-[18px] min-[1600px]:rounded-xl text-[9px] min-[1600px]:text-[11px] font-bold uppercase tracking-wider min-[1600px]:tracking-widest transition-all whitespace-nowrap shadow-md border border-transparent ${T ? "bg-primary text-white hover:bg-accent hover:text-primary" : "bg-accent text-primary hover:bg-primary hover:text-white"}`,
              children: [
                "Get in Touch ",
                /* @__PURE__ */ p.jsxDEV(Dl, { className: "w-3 h-3 min-[1600px]:w-3.5 min-[1600px]:h-3.5" }, void 0, !1, {
                  fileName: "/app/applet/src/components/Navbar.tsx",
                  lineNumber: 432,
                  columnNumber: 30
                }, void 0)
              ]
            },
            void 0,
            !0,
            {
              fileName: "/app/applet/src/components/Navbar.tsx",
              lineNumber: 420,
              columnNumber: 15
            },
            void 0
          ),
          /* @__PURE__ */ p.jsxDEV(
            ce.a,
            {
              href: "https://storage.googleapis.com/chelsongordon/com.chelsongordon/CG%20-%20Company%20Handbook.pdf",
              target: "_blank",
              rel: "noopener noreferrer",
              whileHover: { scale: 1.05 },
              whileTap: { scale: 0.95 },
              className: `flex items-center gap-1 px-2.5 py-1.5 min-[1600px]:px-4 min-[1600px]:py-2.5 rounded-[18px] min-[1600px]:rounded-xl text-[9px] min-[1600px]:text-[11px] font-bold uppercase tracking-wider min-[1600px]:tracking-widest transition-all whitespace-nowrap shadow-sm border border-transparent ${T ? "bg-accent text-primary hover:bg-primary hover:text-white" : "bg-primary text-white hover:bg-accent hover:text-primary"}`,
              children: [
                "Company Profile ",
                /* @__PURE__ */ p.jsxDEV($0, { className: "w-3 h-3 min-[1600px]:w-3.5 min-[1600px]:h-3.5" }, void 0, !1, {
                  fileName: "/app/applet/src/components/Navbar.tsx",
                  lineNumber: 447,
                  columnNumber: 33
                }, void 0)
              ]
            },
            void 0,
            !0,
            {
              fileName: "/app/applet/src/components/Navbar.tsx",
              lineNumber: 435,
              columnNumber: 15
            },
            void 0
          ),
          /* @__PURE__ */ p.jsxDEV(
            ce.a,
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
                  lineNumber: 463,
                  columnNumber: 17
                }, void 0),
                /* @__PURE__ */ p.jsxDEV("span", { className: "hidden min-[1600px]:inline", children: "Leave a Feedback" }, void 0, !1, {
                  fileName: "/app/applet/src/components/Navbar.tsx",
                  lineNumber: 464,
                  columnNumber: 17
                }, void 0),
                /* @__PURE__ */ p.jsxDEV(eg, { className: "w-3 h-3 min-[1600px]:w-3.5 min-[1600px]:h-3.5" }, void 0, !1, {
                  fileName: "/app/applet/src/components/Navbar.tsx",
                  lineNumber: 465,
                  columnNumber: 17
                }, void 0)
              ]
            },
            void 0,
            !0,
            {
              fileName: "/app/applet/src/components/Navbar.tsx",
              lineNumber: 451,
              columnNumber: 15
            },
            void 0
          ),
          /* @__PURE__ */ p.jsxDEV(
            ce.a,
            {
              href: "https://cgresources.com.au/",
              target: "_blank",
              rel: "noopener noreferrer",
              whileHover: { scale: 1.05 },
              whileTap: { scale: 0.95 },
              className: `flex items-center gap-1 px-2.5 py-1.5 min-[1600px]:px-4 min-[1600px]:py-2.5 rounded-[18px] min-[1600px]:rounded-xl text-[9px] min-[1600px]:text-[11px] font-bold uppercase tracking-wider min-[1600px]:tracking-widest transition-all whitespace-nowrap border shadow-sm ${T ? "bg-primary/5 text-primary border-primary/10 hover:bg-primary/10" : "bg-white/5 text-white border-white/10 hover:bg-white/10 backdrop-blur-md"}`,
              children: [
                "CG Resources ",
                /* @__PURE__ */ p.jsxDEV(tg, { className: "w-3 h-3 min-[1600px]:w-3.5 min-[1600px]:h-3.5" }, void 0, !1, {
                  fileName: "/app/applet/src/components/Navbar.tsx",
                  lineNumber: 476,
                  columnNumber: 30
                }, void 0)
              ]
            },
            void 0,
            !0,
            {
              fileName: "/app/applet/src/components/Navbar.tsx",
              lineNumber: 468,
              columnNumber: 15
            },
            void 0
          ),
          /* @__PURE__ */ p.jsxDEV(
            BD,
            {
              isScrolled: T,
              selectedLang: g,
              onLanguageChange: U
            },
            void 0,
            !1,
            {
              fileName: "/app/applet/src/components/Navbar.tsx",
              lineNumber: 479,
              columnNumber: 15
            },
            void 0
          )
        ] }, void 0, !0, {
          fileName: "/app/applet/src/components/Navbar.tsx",
          lineNumber: 419,
          columnNumber: 13
        }, void 0)
      ] }, void 0, !0, {
        fileName: "/app/applet/src/components/Navbar.tsx",
        lineNumber: 386,
        columnNumber: 11
      }, void 0) }, void 0, !1, {
        fileName: "/app/applet/src/components/Navbar.tsx",
        lineNumber: 384,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ p.jsxDEV(
        "button",
        {
          className: "lg:hidden ml-auto relative z-[60]",
          onClick: () => b(!h),
          "aria-label": "Toggle Navigation Menu",
          children: h ? /* @__PURE__ */ p.jsxDEV(VD, { className: T || h ? "text-primary" : "text-white", size: 32 }, void 0, !1, {
            fileName: "/app/applet/src/components/Navbar.tsx",
            lineNumber: 494,
            columnNumber: 29
          }, void 0) : /* @__PURE__ */ p.jsxDEV(fD, { className: T ? "text-primary" : "text-white", size: 32 }, void 0, !1, {
            fileName: "/app/applet/src/components/Navbar.tsx",
            lineNumber: 494,
            columnNumber: 124
          }, void 0)
        },
        void 0,
        !1,
        {
          fileName: "/app/applet/src/components/Navbar.tsx",
          lineNumber: 489,
          columnNumber: 9
        },
        void 0
      )
    ] }, void 0, !0, {
      fileName: "/app/applet/src/components/Navbar.tsx",
      lineNumber: 353,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ p.jsxDEV(vo, { children: h && /* @__PURE__ */ p.jsxDEV(
      ce.div,
      {
        initial: { opacity: 0, x: "100%" },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: "100%" },
        transition: { type: "spring", damping: 30, stiffness: 300 },
        className: "fixed inset-0 bg-white z-50 lg:hidden overflow-y-auto h-screen",
        children: /* @__PURE__ */ p.jsxDEV("div", { className: "flex flex-col p-6 pt-20 pb-10", children: [
          /* @__PURE__ */ p.jsxDEV("div", { className: "flex flex-col gap-5 mb-10", children: ag.map((M, B) => {
            const H = M.href.startsWith("/") || M.href.startsWith("#");
            return /* @__PURE__ */ p.jsxDEV(
              ce.a,
              {
                initial: { opacity: 0, x: 20 },
                animate: { opacity: 1, x: 0 },
                transition: { delay: 0.1 + B * 0.05 },
                href: M.href,
                target: H ? void 0 : "_blank",
                rel: H ? void 0 : "noopener noreferrer",
                onClick: (q) => {
                  b(!1), H && (q.preventDefault(), M.href.startsWith("#") ? window.location.hash = M.href : (window.history.pushState(null, "", M.href), window.dispatchEvent(new Event("popstate"))), window.scrollTo({ top: 0, behavior: "smooth" }));
                },
                className: "text-4xl font-black text-primary uppercase tracking-tighter hover:text-accent transition-colors",
                children: M.name
              },
              M.name,
              !1,
              {
                fileName: "/app/applet/src/components/Navbar.tsx",
                lineNumber: 513,
                columnNumber: 21
              },
              void 0
            );
          }) }, void 0, !1, {
            fileName: "/app/applet/src/components/Navbar.tsx",
            lineNumber: 509,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ p.jsxDEV("div", { className: "space-y-4", children: [
            /* @__PURE__ */ p.jsxDEV(
              ce.a,
              {
                href: "https://chelsongordon.com/contact-us-page/",
                target: "_blank",
                rel: "noopener noreferrer",
                onClick: () => b(!1),
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { delay: 0.3 },
                whileTap: { scale: 0.95 },
                className: "w-full flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-primary text-white font-extrabold uppercase tracking-widest text-sm shadow-xl",
                children: [
                  "Get in Touch ",
                  /* @__PURE__ */ p.jsxDEV(Dl, { className: "w-5 h-5" }, void 0, !1, {
                    fileName: "/app/applet/src/components/Navbar.tsx",
                    lineNumber: 554,
                    columnNumber: 32
                  }, void 0)
                ]
              },
              void 0,
              !0,
              {
                fileName: "/app/applet/src/components/Navbar.tsx",
                lineNumber: 543,
                columnNumber: 17
              },
              void 0
            ),
            /* @__PURE__ */ p.jsxDEV("div", { className: "grid grid-cols-2 gap-3", children: [
              /* @__PURE__ */ p.jsxDEV(
                ce.a,
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
                    /* @__PURE__ */ p.jsxDEV($0, { className: "w-4 h-4" }, void 0, !1, {
                      fileName: "/app/applet/src/components/Navbar.tsx",
                      lineNumber: 568,
                      columnNumber: 37
                    }, void 0)
                  ]
                },
                void 0,
                !0,
                {
                  fileName: "/app/applet/src/components/Navbar.tsx",
                  lineNumber: 558,
                  columnNumber: 19
                },
                void 0
              ),
              /* @__PURE__ */ p.jsxDEV(
                ce.a,
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
                    /* @__PURE__ */ p.jsxDEV(tg, { className: "w-4 h-4" }, void 0, !1, {
                      fileName: "/app/applet/src/components/Navbar.tsx",
                      lineNumber: 581,
                      columnNumber: 31
                    }, void 0)
                  ]
                },
                void 0,
                !0,
                {
                  fileName: "/app/applet/src/components/Navbar.tsx",
                  lineNumber: 571,
                  columnNumber: 19
                },
                void 0
              )
            ] }, void 0, !0, {
              fileName: "/app/applet/src/components/Navbar.tsx",
              lineNumber: 557,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ p.jsxDEV(
              ce.a,
              {
                href: "https://chelsongordon.com/feedback/",
                target: "_blank",
                rel: "noopener noreferrer",
                onClick: () => b(!1),
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { delay: 0.55 },
                whileTap: { scale: 0.95 },
                className: "w-full flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-accent text-primary font-extrabold uppercase tracking-widest text-sm shadow-xl",
                children: [
                  "Leave a Feedback ",
                  /* @__PURE__ */ p.jsxDEV(eg, { className: "w-5 h-5" }, void 0, !1, {
                    fileName: "/app/applet/src/components/Navbar.tsx",
                    lineNumber: 596,
                    columnNumber: 36
                  }, void 0)
                ]
              },
              void 0,
              !0,
              {
                fileName: "/app/applet/src/components/Navbar.tsx",
                lineNumber: 585,
                columnNumber: 17
              },
              void 0
            ),
            /* @__PURE__ */ p.jsxDEV("div", { className: "pt-8 mt-8 border-t border-gray-100", children: [
              /* @__PURE__ */ p.jsxDEV("div", { className: "flex items-center gap-2 mb-4 notranslate", translate: "no", children: [
                /* @__PURE__ */ p.jsxDEV(Zx, { className: "w-4 h-4 text-accent" }, void 0, !1, {
                  fileName: "/app/applet/src/components/Navbar.tsx",
                  lineNumber: 601,
                  columnNumber: 21
                }, void 0),
                /* @__PURE__ */ p.jsxDEV("span", { className: "text-[10px] font-bold uppercase tracking-[0.2em] text-primary/40", children: "Select Language" }, void 0, !1, {
                  fileName: "/app/applet/src/components/Navbar.tsx",
                  lineNumber: 602,
                  columnNumber: 21
                }, void 0)
              ] }, void 0, !0, {
                fileName: "/app/applet/src/components/Navbar.tsx",
                lineNumber: 600,
                columnNumber: 19
              }, void 0),
              /* @__PURE__ */ p.jsxDEV(
                ce.button,
                {
                  initial: { opacity: 0, y: 10 },
                  animate: { opacity: 1, y: 0 },
                  transition: { delay: 0.55 },
                  whileTap: { scale: 0.95 },
                  onClick: () => {
                    U("EN", "English"), b(!1);
                  },
                  className: "w-full flex items-center justify-center gap-2 mb-3.5 py-3.5 rounded-xl border border-orange-200 bg-orange-50/50 text-orange-950 text-[10px] font-extrabold uppercase tracking-widest transition-all active:scale-95 notranslate",
                  translate: "no",
                  children: [
                    /* @__PURE__ */ p.jsxDEV(Ix, { className: "w-3.5 h-3.5 text-orange-500" }, void 0, !1, {
                      fileName: "/app/applet/src/components/Navbar.tsx",
                      lineNumber: 618,
                      columnNumber: 21
                    }, void 0),
                    /* @__PURE__ */ p.jsxDEV("span", { children: "Reset to English" }, void 0, !1, {
                      fileName: "/app/applet/src/components/Navbar.tsx",
                      lineNumber: 619,
                      columnNumber: 21
                    }, void 0)
                  ]
                },
                void 0,
                !0,
                {
                  fileName: "/app/applet/src/components/Navbar.tsx",
                  lineNumber: 606,
                  columnNumber: 19
                },
                void 0
              ),
              /* @__PURE__ */ p.jsxDEV("div", { className: "grid grid-cols-2 gap-2", children: Fc.map((M, B) => /* @__PURE__ */ p.jsxDEV(
                ce.button,
                {
                  initial: { opacity: 0, y: 10 },
                  animate: { opacity: 1, y: 0 },
                  transition: { delay: 0.6 + B * 0.05 },
                  onClick: () => {
                    U(M.code, M.name), b(!1);
                  },
                  className: `flex flex-col items-center justify-center gap-1.5 py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all active:scale-95 notranslate ${g === M.name ? "bg-primary text-white shadow-lg" : "bg-primary/5 text-primary border border-primary/10 hover:bg-accent"}`,
                  translate: "no",
                  children: [
                    /* @__PURE__ */ p.jsxDEV("span", { className: "whitespace-nowrap", children: M.english }, void 0, !1, {
                      fileName: "/app/applet/src/components/Navbar.tsx",
                      lineNumber: 640,
                      columnNumber: 25
                    }, void 0),
                    /* @__PURE__ */ p.jsxDEV("div", { className: `w-6 h-[1px] ${g === M.name ? "bg-white/30" : "bg-primary/20"}` }, void 0, !1, {
                      fileName: "/app/applet/src/components/Navbar.tsx",
                      lineNumber: 641,
                      columnNumber: 25
                    }, void 0),
                    /* @__PURE__ */ p.jsxDEV("span", { className: `text-[11px] font-bold normal-case tracking-normal select-none ${g === M.name ? "text-white" : "text-primary"}`, children: M.native }, void 0, !1, {
                      fileName: "/app/applet/src/components/Navbar.tsx",
                      lineNumber: 642,
                      columnNumber: 25
                    }, void 0)
                  ]
                },
                M.code,
                !0,
                {
                  fileName: "/app/applet/src/components/Navbar.tsx",
                  lineNumber: 624,
                  columnNumber: 23
                },
                void 0
              )) }, void 0, !1, {
                fileName: "/app/applet/src/components/Navbar.tsx",
                lineNumber: 622,
                columnNumber: 19
              }, void 0)
            ] }, void 0, !0, {
              fileName: "/app/applet/src/components/Navbar.tsx",
              lineNumber: 599,
              columnNumber: 17
            }, void 0)
          ] }, void 0, !0, {
            fileName: "/app/applet/src/components/Navbar.tsx",
            lineNumber: 542,
            columnNumber: 15
          }, void 0)
        ] }, void 0, !0, {
          fileName: "/app/applet/src/components/Navbar.tsx",
          lineNumber: 508,
          columnNumber: 13
        }, void 0)
      },
      void 0,
      !1,
      {
        fileName: "/app/applet/src/components/Navbar.tsx",
        lineNumber: 501,
        columnNumber: 11
      },
      void 0
    ) }, void 0, !1, {
      fileName: "/app/applet/src/components/Navbar.tsx",
      lineNumber: 499,
      columnNumber: 7
    }, void 0)
  ] }, void 0, !0, {
    fileName: "/app/applet/src/components/Navbar.tsx",
    lineNumber: 345,
    columnNumber: 5
  }, void 0);
}, UD = () => /* @__PURE__ */ p.jsxDEV("footer", { className: "relative pt-3.5 pb-4 md:pt-4.5 md:pb-5.5 overflow-hidden text-primary/80 bg-[#F8FAFC] border-t border-slate-200/60 h-auto font-sans", children: /* @__PURE__ */ p.jsxDEV("div", { className: "max-w-full w-full px-4 sm:px-6 md:px-8 lg:px-12 relative z-10", children: [
  /* @__PURE__ */ p.jsxDEV("div", { className: "flex flex-col md:flex-row gap-8 md:gap-16 lg:gap-12 xl:gap-20 mb-3 md:mb-4 items-stretch", children: [
    /* @__PURE__ */ p.jsxDEV("div", { className: "w-full md:w-5/12 flex flex-col justify-start", children: [
      /* @__PURE__ */ p.jsxDEV("div", { className: "space-y-2 md:space-y-3 mb-3 md:mb-3.5 lg:mb-3", children: [
        /* @__PURE__ */ p.jsxDEV(
          "a",
          {
            href: "/",
            onClick: (a) => {
              a.preventDefault(), window.history.pushState(null, "", "/"), window.location.hash = "", window.dispatchEvent(new Event("popstate")), window.scrollTo({ top: 0, behavior: "smooth" });
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
        ce.a,
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
              ce.div,
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
                ce.div,
                {
                  variants: {
                    initial: { color: "#FDB913", x: 0 },
                    hover: { color: "#042F61", x: -2 }
                  },
                  transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] },
                  children: /* @__PURE__ */ p.jsxDEV(TD, { className: "w-5 h-5" }, void 0, !1, {
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
                ce.span,
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
    ].map((a) => /* @__PURE__ */ p.jsxDEV(
      "a",
      {
        href: a.href,
        target: "_blank",
        rel: "noopener noreferrer",
        className: "text-slate-500 hover:text-accent transition-colors font-bold text-[11px] md:text-xs tracking-wider uppercase whitespace-nowrap cursor-pointer",
        children: a.name
      },
      a.name,
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
          children: /* @__PURE__ */ p.jsxDEV(sD, { className: "w-[23px] h-[23px] md:w-[27px] md:h-[27px] text-[#042F61] group-hover:text-white transition-colors" }, void 0, !1, {
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
  const a = Node.prototype.removeChild;
  Node.prototype.removeChild = function(o) {
    return o.parentNode !== this ? o : a.call(this, o);
  };
  const l = Node.prototype.insertBefore;
  Node.prototype.insertBefore = function(o, c) {
    return c && c.parentNode !== this ? o : l.call(this, o, c);
  };
  const r = Node.prototype.replaceChild;
  Node.prototype.replaceChild = function(o, c) {
    return c.parentNode !== this ? c : r.call(this, o, c);
  };
}
function LD() {
  return /* @__PURE__ */ p.jsxDEV("div", { className: "font-sans min-h-screen flex flex-col justify-between", children: [
    /* @__PURE__ */ p.jsxDEV(kD, { forceSolid: !0, logoHref: "https://chelsongordon.com/", isHomepage: !1 }, void 0, !1, {
      fileName: "/app/applet/src/courses-main.tsx",
      lineNumber: 44,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ p.jsxDEV("main", { className: "flex-1", children: /* @__PURE__ */ p.jsxDEV(Jx, {}, void 0, !1, {
      fileName: "/app/applet/src/courses-main.tsx",
      lineNumber: 46,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "/app/applet/src/courses-main.tsx",
      lineNumber: 45,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ p.jsxDEV(UD, {}, void 0, !1, {
      fileName: "/app/applet/src/courses-main.tsx",
      lineNumber: 48,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "/app/applet/src/courses-main.tsx",
    lineNumber: 43,
    columnNumber: 5
  }, this);
}
function $x() {
  const a = [
    "#cg-courses-section",
    "#courses-section-root",
    ".cg-courses-section-mount"
  ];
  let l = null;
  for (const o of a) {
    const c = document.querySelector(o);
    if (c) {
      l = c;
      break;
    }
  }
  return l ? (l.dataset.cgCoursesInitialized === "true" || (l.dataset.cgCoursesInitialized = "true", lg.createRoot(l).render(
    /* @__PURE__ */ p.jsxDEV(Y.StrictMode, { children: /* @__PURE__ */ p.jsxDEV(MD, {}, void 0, !1, {
      fileName: "/app/applet/src/courses-main.tsx",
      lineNumber: 85,
      columnNumber: 7
    }, this) }, void 0, !1, {
      fileName: "/app/applet/src/courses-main.tsx",
      lineNumber: 84,
      columnNumber: 5
    }, this)
  )), !0) : !1;
}
function Wx() {
  const a = [
    "#cg-diploma-ai-course",
    "#diploma-ai-course-root",
    "#cg-course-detail-root"
  ];
  let l = null;
  for (const d of a) {
    const f = document.querySelector(d);
    if (f) {
      l = f;
      break;
    }
  }
  if (!l)
    return !1;
  if (l.dataset.cgCourseInitialized === "true")
    return !0;
  l.dataset.cgCourseInitialized = "true";
  const o = !!document.querySelector("header, .site-header, #masthead, nav.elementor-nav-menu") ? Jx : LD;
  return lg.createRoot(l).render(
    /* @__PURE__ */ p.jsxDEV(Y.StrictMode, { children: /* @__PURE__ */ p.jsxDEV(o, {}, void 0, !1, {
      fileName: "/app/applet/src/courses-main.tsx",
      lineNumber: 128,
      columnNumber: 7
    }, this) }, void 0, !1, {
      fileName: "/app/applet/src/courses-main.tsx",
      lineNumber: 127,
      columnNumber: 5
    }, this)
  ), !0;
}
function Gc() {
  $x(), Wx();
}
typeof window < "u" && (window.initCgCourses = Gc, window.initCgCoursesSection = $x, window.initCgDiplomaAICourse = Wx);
document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", Gc) : Gc();
export {
  Gc as default,
  Gc as initCgCourses,
  $x as initCgCoursesSection,
  Wx as initCgDiplomaAICourse
};
