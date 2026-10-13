function L1(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var Wu = { exports: {} }, Io = {};
/**
 * @license React
 * react-jsx-dev-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ah;
function H1() {
  if (Ah) return Io;
  Ah = 1;
  var i = Symbol.for("react.fragment");
  return Io.Fragment = i, Io.jsxDEV = void 0, Io;
}
var jh;
function q1() {
  return jh || (jh = 1, Wu.exports = H1()), Wu.exports;
}
var p = q1(), Iu = { exports: {} }, me = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mh;
function G1() {
  if (Mh) return me;
  Mh = 1;
  var i = Symbol.for("react.transitional.element"), s = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), m = Symbol.for("react.consumer"), f = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), b = Symbol.for("react.suspense"), g = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), y = Symbol.for("react.activity"), N = Symbol.iterator;
  function w(D) {
    return D === null || typeof D != "object" ? null : (D = N && D[N] || D["@@iterator"], typeof D == "function" ? D : null);
  }
  var V = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, P = Object.assign, B = {};
  function z(D, R, $) {
    this.props = D, this.context = R, this.refs = B, this.updater = $ || V;
  }
  z.prototype.isReactComponent = {}, z.prototype.setState = function(D, R) {
    if (typeof D != "object" && typeof D != "function" && D != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, D, R, "setState");
  }, z.prototype.forceUpdate = function(D) {
    this.updater.enqueueForceUpdate(this, D, "forceUpdate");
  };
  function G() {
  }
  G.prototype = z.prototype;
  function L(D, R, $) {
    this.props = D, this.context = R, this.refs = B, this.updater = $ || V;
  }
  var q = L.prototype = new G();
  q.constructor = L, P(q, z.prototype), q.isPureReactComponent = !0;
  var F = Array.isArray;
  function W() {
  }
  var Q = { H: null, A: null, T: null, S: null }, X = Object.prototype.hasOwnProperty;
  function J(D, R, $) {
    var te = $.ref;
    return {
      $$typeof: i,
      type: D,
      key: R,
      ref: te !== void 0 ? te : null,
      props: $
    };
  }
  function ee(D, R) {
    return J(D.type, R, D.props);
  }
  function Y(D) {
    return typeof D == "object" && D !== null && D.$$typeof === i;
  }
  function I(D) {
    var R = { "=": "=0", ":": "=2" };
    return "$" + D.replace(/[=:]/g, function($) {
      return R[$];
    });
  }
  var ye = /\/+/g;
  function ce(D, R) {
    return typeof D == "object" && D !== null && D.key != null ? I("" + D.key) : R.toString(36);
  }
  function le(D) {
    switch (D.status) {
      case "fulfilled":
        return D.value;
      case "rejected":
        throw D.reason;
      default:
        switch (typeof D.status == "string" ? D.then(W, W) : (D.status = "pending", D.then(
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
  function j(D, R, $, te, fe) {
    var de = typeof D;
    (de === "undefined" || de === "boolean") && (D = null);
    var Te = !1;
    if (D === null) Te = !0;
    else
      switch (de) {
        case "bigint":
        case "string":
        case "number":
          Te = !0;
          break;
        case "object":
          switch (D.$$typeof) {
            case i:
            case s:
              Te = !0;
              break;
            case v:
              return Te = D._init, j(
                Te(D._payload),
                R,
                $,
                te,
                fe
              );
          }
      }
    if (Te)
      return fe = fe(D), Te = te === "" ? "." + ce(D, 0) : te, F(fe) ? ($ = "", Te != null && ($ = Te.replace(ye, "$&/") + "/"), j(fe, R, $, "", function(Da) {
        return Da;
      })) : fe != null && (Y(fe) && (fe = ee(
        fe,
        $ + (fe.key == null || D && D.key === fe.key ? "" : ("" + fe.key).replace(
          ye,
          "$&/"
        ) + "/") + Te
      )), R.push(fe)), 1;
    Te = 0;
    var rt = te === "" ? "." : te + ":";
    if (F(D))
      for (var qe = 0; qe < D.length; qe++)
        te = D[qe], de = rt + ce(te, qe), Te += j(
          te,
          R,
          $,
          de,
          fe
        );
    else if (qe = w(D), typeof qe == "function")
      for (D = qe.call(D), qe = 0; !(te = D.next()).done; )
        te = te.value, de = rt + ce(te, qe++), Te += j(
          te,
          R,
          $,
          de,
          fe
        );
    else if (de === "object") {
      if (typeof D.then == "function")
        return j(
          le(D),
          R,
          $,
          te,
          fe
        );
      throw R = String(D), Error(
        "Objects are not valid as a React child (found: " + (R === "[object Object]" ? "object with keys {" + Object.keys(D).join(", ") + "}" : R) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return Te;
  }
  function K(D, R, $) {
    if (D == null) return D;
    var te = [], fe = 0;
    return j(D, te, "", "", function(de) {
      return R.call($, de, fe++);
    }), te;
  }
  function Z(D) {
    if (D._status === -1) {
      var R = D._result;
      R = R(), R.then(
        function($) {
          (D._status === 0 || D._status === -1) && (D._status = 1, D._result = $);
        },
        function($) {
          (D._status === 0 || D._status === -1) && (D._status = 2, D._result = $);
        }
      ), D._status === -1 && (D._status = 0, D._result = R);
    }
    if (D._status === 1) return D._result.default;
    throw D._result;
  }
  var se = typeof reportError == "function" ? reportError : function(D) {
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
  }, re = {
    map: K,
    forEach: function(D, R, $) {
      K(
        D,
        function() {
          R.apply(this, arguments);
        },
        $
      );
    },
    count: function(D) {
      var R = 0;
      return K(D, function() {
        R++;
      }), R;
    },
    toArray: function(D) {
      return K(D, function(R) {
        return R;
      }) || [];
    },
    only: function(D) {
      if (!Y(D))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return D;
    }
  };
  return me.Activity = y, me.Children = re, me.Component = z, me.Fragment = o, me.Profiler = c, me.PureComponent = L, me.StrictMode = r, me.Suspense = b, me.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Q, me.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(D) {
      return Q.H.useMemoCache(D);
    }
  }, me.cache = function(D) {
    return function() {
      return D.apply(null, arguments);
    };
  }, me.cacheSignal = function() {
    return null;
  }, me.cloneElement = function(D, R, $) {
    if (D == null)
      throw Error(
        "The argument must be a React element, but you passed " + D + "."
      );
    var te = P({}, D.props), fe = D.key;
    if (R != null)
      for (de in R.key !== void 0 && (fe = "" + R.key), R)
        !X.call(R, de) || de === "key" || de === "__self" || de === "__source" || de === "ref" && R.ref === void 0 || (te[de] = R[de]);
    var de = arguments.length - 2;
    if (de === 1) te.children = $;
    else if (1 < de) {
      for (var Te = Array(de), rt = 0; rt < de; rt++)
        Te[rt] = arguments[rt + 2];
      te.children = Te;
    }
    return J(D.type, fe, te);
  }, me.createContext = function(D) {
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
  }, me.createElement = function(D, R, $) {
    var te, fe = {}, de = null;
    if (R != null)
      for (te in R.key !== void 0 && (de = "" + R.key), R)
        X.call(R, te) && te !== "key" && te !== "__self" && te !== "__source" && (fe[te] = R[te]);
    var Te = arguments.length - 2;
    if (Te === 1) fe.children = $;
    else if (1 < Te) {
      for (var rt = Array(Te), qe = 0; qe < Te; qe++)
        rt[qe] = arguments[qe + 2];
      fe.children = rt;
    }
    if (D && D.defaultProps)
      for (te in Te = D.defaultProps, Te)
        fe[te] === void 0 && (fe[te] = Te[te]);
    return J(D, de, fe);
  }, me.createRef = function() {
    return { current: null };
  }, me.forwardRef = function(D) {
    return { $$typeof: h, render: D };
  }, me.isValidElement = Y, me.lazy = function(D) {
    return {
      $$typeof: v,
      _payload: { _status: -1, _result: D },
      _init: Z
    };
  }, me.memo = function(D, R) {
    return {
      $$typeof: g,
      type: D,
      compare: R === void 0 ? null : R
    };
  }, me.startTransition = function(D) {
    var R = Q.T, $ = {};
    Q.T = $;
    try {
      var te = D(), fe = Q.S;
      fe !== null && fe($, te), typeof te == "object" && te !== null && typeof te.then == "function" && te.then(W, se);
    } catch (de) {
      se(de);
    } finally {
      R !== null && $.types !== null && (R.types = $.types), Q.T = R;
    }
  }, me.unstable_useCacheRefresh = function() {
    return Q.H.useCacheRefresh();
  }, me.use = function(D) {
    return Q.H.use(D);
  }, me.useActionState = function(D, R, $) {
    return Q.H.useActionState(D, R, $);
  }, me.useCallback = function(D, R) {
    return Q.H.useCallback(D, R);
  }, me.useContext = function(D) {
    return Q.H.useContext(D);
  }, me.useDebugValue = function() {
  }, me.useDeferredValue = function(D, R) {
    return Q.H.useDeferredValue(D, R);
  }, me.useEffect = function(D, R) {
    return Q.H.useEffect(D, R);
  }, me.useEffectEvent = function(D) {
    return Q.H.useEffectEvent(D);
  }, me.useId = function() {
    return Q.H.useId();
  }, me.useImperativeHandle = function(D, R, $) {
    return Q.H.useImperativeHandle(D, R, $);
  }, me.useInsertionEffect = function(D, R) {
    return Q.H.useInsertionEffect(D, R);
  }, me.useLayoutEffect = function(D, R) {
    return Q.H.useLayoutEffect(D, R);
  }, me.useMemo = function(D, R) {
    return Q.H.useMemo(D, R);
  }, me.useOptimistic = function(D, R) {
    return Q.H.useOptimistic(D, R);
  }, me.useReducer = function(D, R, $) {
    return Q.H.useReducer(D, R, $);
  }, me.useRef = function(D) {
    return Q.H.useRef(D);
  }, me.useState = function(D) {
    return Q.H.useState(D);
  }, me.useSyncExternalStore = function(D, R, $) {
    return Q.H.useSyncExternalStore(
      D,
      R,
      $
    );
  }, me.useTransition = function() {
    return Q.H.useTransition();
  }, me.version = "19.2.6", me;
}
var Ph;
function tf() {
  return Ph || (Ph = 1, Iu.exports = G1()), Iu.exports;
}
var H = tf();
const _h = /* @__PURE__ */ L1(H);
var ec = { exports: {} }, gs = {}, tc = { exports: {} }, nc = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zh;
function Y1() {
  return zh || (zh = 1, (function(i) {
    function s(j, K) {
      var Z = j.length;
      j.push(K);
      e: for (; 0 < Z; ) {
        var se = Z - 1 >>> 1, re = j[se];
        if (0 < c(re, K))
          j[se] = K, j[Z] = re, Z = se;
        else break e;
      }
    }
    function o(j) {
      return j.length === 0 ? null : j[0];
    }
    function r(j) {
      if (j.length === 0) return null;
      var K = j[0], Z = j.pop();
      if (Z !== K) {
        j[0] = Z;
        e: for (var se = 0, re = j.length, D = re >>> 1; se < D; ) {
          var R = 2 * (se + 1) - 1, $ = j[R], te = R + 1, fe = j[te];
          if (0 > c($, Z))
            te < re && 0 > c(fe, $) ? (j[se] = fe, j[te] = Z, se = te) : (j[se] = $, j[R] = Z, se = R);
          else if (te < re && 0 > c(fe, Z))
            j[se] = fe, j[te] = Z, se = te;
          else break e;
        }
      }
      return K;
    }
    function c(j, K) {
      var Z = j.sortIndex - K.sortIndex;
      return Z !== 0 ? Z : j.id - K.id;
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
    var b = [], g = [], v = 1, y = null, N = 3, w = !1, V = !1, P = !1, B = !1, z = typeof setTimeout == "function" ? setTimeout : null, G = typeof clearTimeout == "function" ? clearTimeout : null, L = typeof setImmediate < "u" ? setImmediate : null;
    function q(j) {
      for (var K = o(g); K !== null; ) {
        if (K.callback === null) r(g);
        else if (K.startTime <= j)
          r(g), K.sortIndex = K.expirationTime, s(b, K);
        else break;
        K = o(g);
      }
    }
    function F(j) {
      if (P = !1, q(j), !V)
        if (o(b) !== null)
          V = !0, W || (W = !0, I());
        else {
          var K = o(g);
          K !== null && le(F, K.startTime - j);
        }
    }
    var W = !1, Q = -1, X = 5, J = -1;
    function ee() {
      return B ? !0 : !(i.unstable_now() - J < X);
    }
    function Y() {
      if (B = !1, W) {
        var j = i.unstable_now();
        J = j;
        var K = !0;
        try {
          e: {
            V = !1, P && (P = !1, G(Q), Q = -1), w = !0;
            var Z = N;
            try {
              t: {
                for (q(j), y = o(b); y !== null && !(y.expirationTime > j && ee()); ) {
                  var se = y.callback;
                  if (typeof se == "function") {
                    y.callback = null, N = y.priorityLevel;
                    var re = se(
                      y.expirationTime <= j
                    );
                    if (j = i.unstable_now(), typeof re == "function") {
                      y.callback = re, q(j), K = !0;
                      break t;
                    }
                    y === o(b) && r(b), q(j);
                  } else r(b);
                  y = o(b);
                }
                if (y !== null) K = !0;
                else {
                  var D = o(g);
                  D !== null && le(
                    F,
                    D.startTime - j
                  ), K = !1;
                }
              }
              break e;
            } finally {
              y = null, N = Z, w = !1;
            }
            K = void 0;
          }
        } finally {
          K ? I() : W = !1;
        }
      }
    }
    var I;
    if (typeof L == "function")
      I = function() {
        L(Y);
      };
    else if (typeof MessageChannel < "u") {
      var ye = new MessageChannel(), ce = ye.port2;
      ye.port1.onmessage = Y, I = function() {
        ce.postMessage(null);
      };
    } else
      I = function() {
        z(Y, 0);
      };
    function le(j, K) {
      Q = z(function() {
        j(i.unstable_now());
      }, K);
    }
    i.unstable_IdlePriority = 5, i.unstable_ImmediatePriority = 1, i.unstable_LowPriority = 4, i.unstable_NormalPriority = 3, i.unstable_Profiling = null, i.unstable_UserBlockingPriority = 2, i.unstable_cancelCallback = function(j) {
      j.callback = null;
    }, i.unstable_forceFrameRate = function(j) {
      0 > j || 125 < j ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : X = 0 < j ? Math.floor(1e3 / j) : 5;
    }, i.unstable_getCurrentPriorityLevel = function() {
      return N;
    }, i.unstable_next = function(j) {
      switch (N) {
        case 1:
        case 2:
        case 3:
          var K = 3;
          break;
        default:
          K = N;
      }
      var Z = N;
      N = K;
      try {
        return j();
      } finally {
        N = Z;
      }
    }, i.unstable_requestPaint = function() {
      B = !0;
    }, i.unstable_runWithPriority = function(j, K) {
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
      var Z = N;
      N = j;
      try {
        return K();
      } finally {
        N = Z;
      }
    }, i.unstable_scheduleCallback = function(j, K, Z) {
      var se = i.unstable_now();
      switch (typeof Z == "object" && Z !== null ? (Z = Z.delay, Z = typeof Z == "number" && 0 < Z ? se + Z : se) : Z = se, j) {
        case 1:
          var re = -1;
          break;
        case 2:
          re = 250;
          break;
        case 5:
          re = 1073741823;
          break;
        case 4:
          re = 1e4;
          break;
        default:
          re = 5e3;
      }
      return re = Z + re, j = {
        id: v++,
        callback: K,
        priorityLevel: j,
        startTime: Z,
        expirationTime: re,
        sortIndex: -1
      }, Z > se ? (j.sortIndex = Z, s(g, j), o(b) === null && j === o(g) && (P ? (G(Q), Q = -1) : P = !0, le(F, Z - se))) : (j.sortIndex = re, s(b, j), V || w || (V = !0, W || (W = !0, I()))), j;
    }, i.unstable_shouldYield = ee, i.unstable_wrapCallback = function(j) {
      var K = N;
      return function() {
        var Z = N;
        N = K;
        try {
          return j.apply(this, arguments);
        } finally {
          N = Z;
        }
      };
    };
  })(nc)), nc;
}
var Rh;
function X1() {
  return Rh || (Rh = 1, tc.exports = Y1()), tc.exports;
}
var ic = { exports: {} }, lt = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oh;
function F1() {
  if (Oh) return lt;
  Oh = 1;
  var i = tf();
  function s(b) {
    var g = "https://react.dev/errors/" + b;
    if (1 < arguments.length) {
      g += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var v = 2; v < arguments.length; v++)
        g += "&args[]=" + encodeURIComponent(arguments[v]);
    }
    return "Minified React error #" + b + "; visit " + g + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function o() {
  }
  var r = {
    d: {
      f: o,
      r: function() {
        throw Error(s(522));
      },
      D: o,
      C: o,
      L: o,
      m: o,
      X: o,
      S: o,
      M: o
    },
    p: 0,
    findDOMNode: null
  }, c = Symbol.for("react.portal");
  function m(b, g, v) {
    var y = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: c,
      key: y == null ? null : "" + y,
      children: b,
      containerInfo: g,
      implementation: v
    };
  }
  var f = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function h(b, g) {
    if (b === "font") return "";
    if (typeof g == "string")
      return g === "use-credentials" ? g : "";
  }
  return lt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r, lt.createPortal = function(b, g) {
    var v = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!g || g.nodeType !== 1 && g.nodeType !== 9 && g.nodeType !== 11)
      throw Error(s(299));
    return m(b, g, null, v);
  }, lt.flushSync = function(b) {
    var g = f.T, v = r.p;
    try {
      if (f.T = null, r.p = 2, b) return b();
    } finally {
      f.T = g, r.p = v, r.d.f();
    }
  }, lt.preconnect = function(b, g) {
    typeof b == "string" && (g ? (g = g.crossOrigin, g = typeof g == "string" ? g === "use-credentials" ? g : "" : void 0) : g = null, r.d.C(b, g));
  }, lt.prefetchDNS = function(b) {
    typeof b == "string" && r.d.D(b);
  }, lt.preinit = function(b, g) {
    if (typeof b == "string" && g && typeof g.as == "string") {
      var v = g.as, y = h(v, g.crossOrigin), N = typeof g.integrity == "string" ? g.integrity : void 0, w = typeof g.fetchPriority == "string" ? g.fetchPriority : void 0;
      v === "style" ? r.d.S(
        b,
        typeof g.precedence == "string" ? g.precedence : void 0,
        {
          crossOrigin: y,
          integrity: N,
          fetchPriority: w
        }
      ) : v === "script" && r.d.X(b, {
        crossOrigin: y,
        integrity: N,
        fetchPriority: w,
        nonce: typeof g.nonce == "string" ? g.nonce : void 0
      });
    }
  }, lt.preinitModule = function(b, g) {
    if (typeof b == "string")
      if (typeof g == "object" && g !== null) {
        if (g.as == null || g.as === "script") {
          var v = h(
            g.as,
            g.crossOrigin
          );
          r.d.M(b, {
            crossOrigin: v,
            integrity: typeof g.integrity == "string" ? g.integrity : void 0,
            nonce: typeof g.nonce == "string" ? g.nonce : void 0
          });
        }
      } else g == null && r.d.M(b);
  }, lt.preload = function(b, g) {
    if (typeof b == "string" && typeof g == "object" && g !== null && typeof g.as == "string") {
      var v = g.as, y = h(v, g.crossOrigin);
      r.d.L(b, v, {
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
  }, lt.preloadModule = function(b, g) {
    if (typeof b == "string")
      if (g) {
        var v = h(g.as, g.crossOrigin);
        r.d.m(b, {
          as: typeof g.as == "string" && g.as !== "script" ? g.as : void 0,
          crossOrigin: v,
          integrity: typeof g.integrity == "string" ? g.integrity : void 0
        });
      } else r.d.m(b);
  }, lt.requestFormReset = function(b) {
    r.d.r(b);
  }, lt.unstable_batchedUpdates = function(b, g) {
    return b(g);
  }, lt.useFormState = function(b, g, v) {
    return f.H.useFormState(b, g, v);
  }, lt.useFormStatus = function() {
    return f.H.useHostTransitionStatus();
  }, lt.version = "19.2.6", lt;
}
var Uh;
function Q1() {
  if (Uh) return ic.exports;
  Uh = 1;
  function i() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (s) {
        console.error(s);
      }
  }
  return i(), ic.exports = F1(), ic.exports;
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
var Lh;
function Z1() {
  if (Lh) return gs;
  Lh = 1;
  var i = X1(), s = tf(), o = Q1();
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
  function b(e) {
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
      var l = n.return;
      if (l === null) break;
      var u = l.alternate;
      if (u === null) {
        if (a = l.return, a !== null) {
          n = a;
          continue;
        }
        break;
      }
      if (l.child === u.child) {
        for (u = l.child; u; ) {
          if (u === n) return b(l), e;
          if (u === a) return b(l), t;
          u = u.sibling;
        }
        throw Error(r(188));
      }
      if (n.return !== a.return) n = l, a = u;
      else {
        for (var d = !1, x = l.child; x; ) {
          if (x === n) {
            d = !0, n = l, a = u;
            break;
          }
          if (x === a) {
            d = !0, a = l, n = u;
            break;
          }
          x = x.sibling;
        }
        if (!d) {
          for (x = u.child; x; ) {
            if (x === n) {
              d = !0, n = u, a = l;
              break;
            }
            if (x === a) {
              d = !0, a = u, n = l;
              break;
            }
            x = x.sibling;
          }
          if (!d) throw Error(r(189));
        }
      }
      if (n.alternate !== a) throw Error(r(190));
    }
    if (n.tag !== 3) throw Error(r(188));
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
  var y = Object.assign, N = Symbol.for("react.element"), w = Symbol.for("react.transitional.element"), V = Symbol.for("react.portal"), P = Symbol.for("react.fragment"), B = Symbol.for("react.strict_mode"), z = Symbol.for("react.profiler"), G = Symbol.for("react.consumer"), L = Symbol.for("react.context"), q = Symbol.for("react.forward_ref"), F = Symbol.for("react.suspense"), W = Symbol.for("react.suspense_list"), Q = Symbol.for("react.memo"), X = Symbol.for("react.lazy"), J = Symbol.for("react.activity"), ee = Symbol.for("react.memo_cache_sentinel"), Y = Symbol.iterator;
  function I(e) {
    return e === null || typeof e != "object" ? null : (e = Y && e[Y] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var ye = Symbol.for("react.client.reference");
  function ce(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === ye ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case P:
        return "Fragment";
      case z:
        return "Profiler";
      case B:
        return "StrictMode";
      case F:
        return "Suspense";
      case W:
        return "SuspenseList";
      case J:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case V:
          return "Portal";
        case L:
          return e.displayName || "Context";
        case G:
          return (e._context.displayName || "Context") + ".Consumer";
        case q:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case Q:
          return t = e.displayName || null, t !== null ? t : ce(e.type) || "Memo";
        case X:
          t = e._payload, e = e._init;
          try {
            return ce(e(t));
          } catch {
          }
      }
    return null;
  }
  var le = Array.isArray, j = s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, K = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Z = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, se = [], re = -1;
  function D(e) {
    return { current: e };
  }
  function R(e) {
    0 > re || (e.current = se[re], se[re] = null, re--);
  }
  function $(e, t) {
    re++, se[re] = e.current, e.current = t;
  }
  var te = D(null), fe = D(null), de = D(null), Te = D(null);
  function rt(e, t) {
    switch ($(de, t), $(fe, e), $(te, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? eh(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI)
          t = eh(t), e = th(t, e);
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
    R(te), $(te, e);
  }
  function qe() {
    R(te), R(fe), R(de);
  }
  function Da(e) {
    e.memoizedState !== null && $(Te, e);
    var t = te.current, n = th(t, e.type);
    t !== n && ($(fe, e), $(te, n));
  }
  function Ps(e) {
    fe.current === e && (R(te), R(fe)), Te.current === e && (R(Te), ds._currentValue = Z);
  }
  var Pl, Bf;
  function ei(e) {
    if (Pl === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        Pl = t && t[1] || "", Bf = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Pl + e + Bf;
  }
  var _l = !1;
  function zl(e, t) {
    if (!e || _l) return "";
    _l = !0;
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
                  var A = M;
                }
                Reflect.construct(e, [], U);
              } else {
                try {
                  U.call();
                } catch (M) {
                  A = M;
                }
                e.call(U.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (M) {
                A = M;
              }
              (U = e()) && typeof U.catch == "function" && U.catch(function() {
              });
            }
          } catch (M) {
            if (M && A && typeof M.stack == "string")
              return [M.stack, A.stack];
          }
          return [null, null];
        }
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var l = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name"
      );
      l && l.configurable && Object.defineProperty(
        a.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var u = a.DetermineComponentFrameRoot(), d = u[0], x = u[1];
      if (d && x) {
        var S = d.split(`
`), k = x.split(`
`);
        for (l = a = 0; a < S.length && !S[a].includes("DetermineComponentFrameRoot"); )
          a++;
        for (; l < k.length && !k[l].includes(
          "DetermineComponentFrameRoot"
        ); )
          l++;
        if (a === S.length || l === k.length)
          for (a = S.length - 1, l = k.length - 1; 1 <= a && 0 <= l && S[a] !== k[l]; )
            l--;
        for (; 1 <= a && 0 <= l; a--, l--)
          if (S[a] !== k[l]) {
            if (a !== 1 || l !== 1)
              do
                if (a--, l--, 0 > l || S[a] !== k[l]) {
                  var _ = `
` + S[a].replace(" at new ", " at ");
                  return e.displayName && _.includes("<anonymous>") && (_ = _.replace("<anonymous>", e.displayName)), _;
                }
              while (1 <= a && 0 <= l);
            break;
          }
      }
    } finally {
      _l = !1, Error.prepareStackTrace = n;
    }
    return (n = e ? e.displayName || e.name : "") ? ei(n) : "";
  }
  function bv(e, t) {
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
        return zl(e.type, !1);
      case 11:
        return zl(e.type.render, !1);
      case 1:
        return zl(e.type, !0);
      case 31:
        return ei("Activity");
      default:
        return "";
    }
  }
  function Af(e) {
    try {
      var t = "", n = null;
      do
        t += bv(e, n), n = e, e = e.return;
      while (e);
      return t;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  var Rl = Object.prototype.hasOwnProperty, Ol = i.unstable_scheduleCallback, Ul = i.unstable_cancelCallback, vv = i.unstable_shouldYield, xv = i.unstable_requestPaint, Nt = i.unstable_now, yv = i.unstable_getCurrentPriorityLevel, jf = i.unstable_ImmediatePriority, Mf = i.unstable_UserBlockingPriority, _s = i.unstable_NormalPriority, Nv = i.unstable_LowPriority, Pf = i.unstable_IdlePriority, Sv = i.log, Dv = i.unstable_setDisableYieldValue, Ea = null, St = null;
  function En(e) {
    if (typeof Sv == "function" && Dv(e), St && typeof St.setStrictMode == "function")
      try {
        St.setStrictMode(Ea, e);
      } catch {
      }
  }
  var Dt = Math.clz32 ? Math.clz32 : Tv, Ev = Math.log, wv = Math.LN2;
  function Tv(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Ev(e) / wv | 0) | 0;
  }
  var zs = 256, Rs = 262144, Os = 4194304;
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
  function Us(e, t, n) {
    var a = e.pendingLanes;
    if (a === 0) return 0;
    var l = 0, u = e.suspendedLanes, d = e.pingedLanes;
    e = e.warmLanes;
    var x = a & 134217727;
    return x !== 0 ? (a = x & ~u, a !== 0 ? l = ti(a) : (d &= x, d !== 0 ? l = ti(d) : n || (n = x & ~e, n !== 0 && (l = ti(n))))) : (x = a & ~u, x !== 0 ? l = ti(x) : d !== 0 ? l = ti(d) : n || (n = a & ~e, n !== 0 && (l = ti(n)))), l === 0 ? 0 : t !== 0 && t !== l && (t & u) === 0 && (u = l & -l, n = t & -t, u >= n || u === 32 && (n & 4194048) !== 0) ? t : l;
  }
  function wa(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function Vv(e, t) {
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
  function _f() {
    var e = Os;
    return Os <<= 1, (Os & 62914560) === 0 && (Os = 4194304), e;
  }
  function Ll(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Ta(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function Cv(e, t, n, a, l, u) {
    var d = e.pendingLanes;
    e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0;
    var x = e.entanglements, S = e.expirationTimes, k = e.hiddenUpdates;
    for (n = d & ~n; 0 < n; ) {
      var _ = 31 - Dt(n), U = 1 << _;
      x[_] = 0, S[_] = -1;
      var A = k[_];
      if (A !== null)
        for (k[_] = null, _ = 0; _ < A.length; _++) {
          var M = A[_];
          M !== null && (M.lane &= -536870913);
        }
      n &= ~U;
    }
    a !== 0 && zf(e, a, 0), u !== 0 && l === 0 && e.tag !== 0 && (e.suspendedLanes |= u & ~(d & ~t));
  }
  function zf(e, t, n) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var a = 31 - Dt(t);
    e.entangledLanes |= t, e.entanglements[a] = e.entanglements[a] | 1073741824 | n & 261930;
  }
  function Rf(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var a = 31 - Dt(n), l = 1 << a;
      l & t | e[a] & t && (e[a] |= t), n &= ~l;
    }
  }
  function Of(e, t) {
    var n = t & -t;
    return n = (n & 42) !== 0 ? 1 : Hl(n), (n & (e.suspendedLanes | t)) !== 0 ? 0 : n;
  }
  function Hl(e) {
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
  function ql(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Uf() {
    var e = K.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : Eh(e.type));
  }
  function Lf(e, t) {
    var n = K.p;
    try {
      return K.p = e, t();
    } finally {
      K.p = n;
    }
  }
  var wn = Math.random().toString(36).slice(2), et = "__reactFiber$" + wn, dt = "__reactProps$" + wn, Ci = "__reactContainer$" + wn, Gl = "__reactEvents$" + wn, kv = "__reactListeners$" + wn, Bv = "__reactHandles$" + wn, Hf = "__reactResources$" + wn, Va = "__reactMarker$" + wn;
  function Yl(e) {
    delete e[et], delete e[dt], delete e[Gl], delete e[kv], delete e[Bv];
  }
  function ki(e) {
    var t = e[et];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[Ci] || n[et]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
          for (e = rh(e); e !== null; ) {
            if (n = e[et]) return n;
            e = rh(e);
          }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function Bi(e) {
    if (e = e[et] || e[Ci]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function Ca(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(r(33));
  }
  function Ai(e) {
    var t = e[Hf];
    return t || (t = e[Hf] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function We(e) {
    e[Va] = !0;
  }
  var qf = /* @__PURE__ */ new Set(), Gf = {};
  function ni(e, t) {
    ji(e, t), ji(e + "Capture", t);
  }
  function ji(e, t) {
    for (Gf[e] = t, e = 0; e < t.length; e++)
      qf.add(t[e]);
  }
  var Av = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Yf = {}, Xf = {};
  function jv(e) {
    return Rl.call(Xf, e) ? !0 : Rl.call(Yf, e) ? !1 : Av.test(e) ? Xf[e] = !0 : (Yf[e] = !0, !1);
  }
  function Ls(e, t, n) {
    if (jv(t))
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
  function Hs(e, t, n) {
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
  function an(e, t, n, a) {
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
  function At(e) {
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
  function Ff(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Mv(e, t, n) {
    var a = Object.getOwnPropertyDescriptor(
      e.constructor.prototype,
      t
    );
    if (!e.hasOwnProperty(t) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
      var l = a.get, u = a.set;
      return Object.defineProperty(e, t, {
        configurable: !0,
        get: function() {
          return l.call(this);
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
  function Xl(e) {
    if (!e._valueTracker) {
      var t = Ff(e) ? "checked" : "value";
      e._valueTracker = Mv(
        e,
        t,
        "" + e[t]
      );
    }
  }
  function Qf(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), a = "";
    return e && (a = Ff(e) ? e.checked ? "true" : "false" : e.value), e = a, e !== n ? (t.setValue(e), !0) : !1;
  }
  function qs(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var Pv = /[\n"\\]/g;
  function jt(e) {
    return e.replace(
      Pv,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Fl(e, t, n, a, l, u, d, x) {
    e.name = "", d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" ? e.type = d : e.removeAttribute("type"), t != null ? d === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + At(t)) : e.value !== "" + At(t) && (e.value = "" + At(t)) : d !== "submit" && d !== "reset" || e.removeAttribute("value"), t != null ? Ql(e, d, At(t)) : n != null ? Ql(e, d, At(n)) : a != null && e.removeAttribute("value"), l == null && u != null && (e.defaultChecked = !!u), l != null && (e.checked = l && typeof l != "function" && typeof l != "symbol"), x != null && typeof x != "function" && typeof x != "symbol" && typeof x != "boolean" ? e.name = "" + At(x) : e.removeAttribute("name");
  }
  function Zf(e, t, n, a, l, u, d, x) {
    if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (e.type = u), t != null || n != null) {
      if (!(u !== "submit" && u !== "reset" || t != null)) {
        Xl(e);
        return;
      }
      n = n != null ? "" + At(n) : "", t = t != null ? "" + At(t) : n, x || t === e.value || (e.value = t), e.defaultValue = t;
    }
    a = a ?? l, a = typeof a != "function" && typeof a != "symbol" && !!a, e.checked = x ? e.checked : !!a, e.defaultChecked = !!a, d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" && (e.name = d), Xl(e);
  }
  function Ql(e, t, n) {
    t === "number" && qs(e.ownerDocument) === e || e.defaultValue === "" + n || (e.defaultValue = "" + n);
  }
  function Mi(e, t, n, a) {
    if (e = e.options, t) {
      t = {};
      for (var l = 0; l < n.length; l++)
        t["$" + n[l]] = !0;
      for (n = 0; n < e.length; n++)
        l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && a && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + At(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          e[l].selected = !0, a && (e[l].defaultSelected = !0);
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Kf(e, t, n) {
    if (t != null && (t = "" + At(t), t !== e.value && (e.value = t), n == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = n != null ? "" + At(n) : "";
  }
  function Jf(e, t, n, a) {
    if (t == null) {
      if (a != null) {
        if (n != null) throw Error(r(92));
        if (le(a)) {
          if (1 < a.length) throw Error(r(93));
          a = a[0];
        }
        n = a;
      }
      n == null && (n = ""), t = n;
    }
    n = At(t), e.defaultValue = n, a = e.textContent, a === n && a !== "" && a !== null && (e.value = a), Xl(e);
  }
  function Pi(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var _v = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function $f(e, t, n) {
    var a = t.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === "" ? a ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : a ? e.setProperty(t, n) : typeof n != "number" || n === 0 || _v.has(t) ? t === "float" ? e.cssFloat = n : e[t] = ("" + n).trim() : e[t] = n + "px";
  }
  function Wf(e, t, n) {
    if (t != null && typeof t != "object")
      throw Error(r(62));
    if (e = e.style, n != null) {
      for (var a in n)
        !n.hasOwnProperty(a) || t != null && t.hasOwnProperty(a) || (a.indexOf("--") === 0 ? e.setProperty(a, "") : a === "float" ? e.cssFloat = "" : e[a] = "");
      for (var l in t)
        a = t[l], t.hasOwnProperty(l) && n[l] !== a && $f(e, l, a);
    } else
      for (var u in t)
        t.hasOwnProperty(u) && $f(e, u, t[u]);
  }
  function Zl(e) {
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
  var zv = /* @__PURE__ */ new Map([
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
  ]), Rv = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Gs(e) {
    return Rv.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function sn() {
  }
  var Kl = null;
  function Jl(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var _i = null, zi = null;
  function If(e) {
    var t = Bi(e);
    if (t && (e = t.stateNode)) {
      var n = e[dt] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (Fl(
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
              'input[name="' + jt(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < n.length; t++) {
              var a = n[t];
              if (a !== e && a.form === e.form) {
                var l = a[dt] || null;
                if (!l) throw Error(r(90));
                Fl(
                  a,
                  l.value,
                  l.defaultValue,
                  l.defaultValue,
                  l.checked,
                  l.defaultChecked,
                  l.type,
                  l.name
                );
              }
            }
            for (t = 0; t < n.length; t++)
              a = n[t], a.form === e.form && Qf(a);
          }
          break e;
        case "textarea":
          Kf(e, n.value, n.defaultValue);
          break e;
        case "select":
          t = n.value, t != null && Mi(e, !!n.multiple, t, !1);
      }
    }
  }
  var $l = !1;
  function ed(e, t, n) {
    if ($l) return e(t, n);
    $l = !0;
    try {
      var a = e(t);
      return a;
    } finally {
      if ($l = !1, (_i !== null || zi !== null) && (Ao(), _i && (t = _i, e = zi, zi = _i = null, If(t), e)))
        for (t = 0; t < e.length; t++) If(e[t]);
    }
  }
  function ka(e, t) {
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
  var on = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Wl = !1;
  if (on)
    try {
      var Ba = {};
      Object.defineProperty(Ba, "passive", {
        get: function() {
          Wl = !0;
        }
      }), window.addEventListener("test", Ba, Ba), window.removeEventListener("test", Ba, Ba);
    } catch {
      Wl = !1;
    }
  var Tn = null, Il = null, Ys = null;
  function td() {
    if (Ys) return Ys;
    var e, t = Il, n = t.length, a, l = "value" in Tn ? Tn.value : Tn.textContent, u = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++) ;
    var d = n - e;
    for (a = 1; a <= d && t[n - a] === l[u - a]; a++) ;
    return Ys = l.slice(e, 1 < a ? 1 - a : void 0);
  }
  function Xs(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Fs() {
    return !0;
  }
  function nd() {
    return !1;
  }
  function mt(e) {
    function t(n, a, l, u, d) {
      this._reactName = n, this._targetInst = l, this.type = a, this.nativeEvent = u, this.target = d, this.currentTarget = null;
      for (var x in e)
        e.hasOwnProperty(x) && (n = e[x], this[x] = n ? n(u) : u[x]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? Fs : nd, this.isPropagationStopped = nd, this;
    }
    return y(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Fs);
      },
      stopPropagation: function() {
        var n = this.nativeEvent;
        n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Fs);
      },
      persist: function() {
      },
      isPersistent: Fs
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
  }, Qs = mt(ii), Aa = y({}, ii, { view: 0, detail: 0 }), Ov = mt(Aa), er, tr, ja, Zs = y({}, Aa, {
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
    getModifierState: ir,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== ja && (ja && e.type === "mousemove" ? (er = e.screenX - ja.screenX, tr = e.screenY - ja.screenY) : tr = er = 0, ja = e), er);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : tr;
    }
  }), id = mt(Zs), Uv = y({}, Zs, { dataTransfer: 0 }), Lv = mt(Uv), Hv = y({}, Aa, { relatedTarget: 0 }), nr = mt(Hv), qv = y({}, ii, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Gv = mt(qv), Yv = y({}, ii, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), Xv = mt(Yv), Fv = y({}, ii, { data: 0 }), ad = mt(Fv), Qv = {
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
  }, Zv = {
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
  }, Kv = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Jv(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Kv[e]) ? !!t[e] : !1;
  }
  function ir() {
    return Jv;
  }
  var $v = y({}, Aa, {
    key: function(e) {
      if (e.key) {
        var t = Qv[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = Xs(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Zv[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ir,
    charCode: function(e) {
      return e.type === "keypress" ? Xs(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? Xs(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), Wv = mt($v), Iv = y({}, Zs, {
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
  }), sd = mt(Iv), ex = y({}, Aa, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ir
  }), tx = mt(ex), nx = y({}, ii, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), ix = mt(nx), ax = y({}, Zs, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), sx = mt(ax), ox = y({}, ii, {
    newState: 0,
    oldState: 0
  }), lx = mt(ox), rx = [9, 13, 27, 32], ar = on && "CompositionEvent" in window, Ma = null;
  on && "documentMode" in document && (Ma = document.documentMode);
  var ux = on && "TextEvent" in window && !Ma, od = on && (!ar || Ma && 8 < Ma && 11 >= Ma), ld = " ", rd = !1;
  function ud(e, t) {
    switch (e) {
      case "keyup":
        return rx.indexOf(t.keyCode) !== -1;
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
  function cd(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Ri = !1;
  function cx(e, t) {
    switch (e) {
      case "compositionend":
        return cd(t);
      case "keypress":
        return t.which !== 32 ? null : (rd = !0, ld);
      case "textInput":
        return e = t.data, e === ld && rd ? null : e;
      default:
        return null;
    }
  }
  function fx(e, t) {
    if (Ri)
      return e === "compositionend" || !ar && ud(e, t) ? (e = td(), Ys = Il = Tn = null, Ri = !1, e) : null;
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
        return od && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var dx = {
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
  function fd(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!dx[e.type] : t === "textarea";
  }
  function dd(e, t, n, a) {
    _i ? zi ? zi.push(a) : zi = [a] : _i = a, t = Oo(t, "onChange"), 0 < t.length && (n = new Qs(
      "onChange",
      "change",
      null,
      n,
      a
    ), e.push({ event: n, listeners: t }));
  }
  var Pa = null, _a = null;
  function mx(e) {
    Zp(e, 0);
  }
  function Ks(e) {
    var t = Ca(e);
    if (Qf(t)) return e;
  }
  function md(e, t) {
    if (e === "change") return t;
  }
  var pd = !1;
  if (on) {
    var sr;
    if (on) {
      var or = "oninput" in document;
      if (!or) {
        var hd = document.createElement("div");
        hd.setAttribute("oninput", "return;"), or = typeof hd.oninput == "function";
      }
      sr = or;
    } else sr = !1;
    pd = sr && (!document.documentMode || 9 < document.documentMode);
  }
  function gd() {
    Pa && (Pa.detachEvent("onpropertychange", bd), _a = Pa = null);
  }
  function bd(e) {
    if (e.propertyName === "value" && Ks(_a)) {
      var t = [];
      dd(
        t,
        _a,
        e,
        Jl(e)
      ), ed(mx, t);
    }
  }
  function px(e, t, n) {
    e === "focusin" ? (gd(), Pa = t, _a = n, Pa.attachEvent("onpropertychange", bd)) : e === "focusout" && gd();
  }
  function hx(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Ks(_a);
  }
  function gx(e, t) {
    if (e === "click") return Ks(t);
  }
  function bx(e, t) {
    if (e === "input" || e === "change")
      return Ks(t);
  }
  function vx(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Et = typeof Object.is == "function" ? Object.is : vx;
  function za(e, t) {
    if (Et(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var n = Object.keys(e), a = Object.keys(t);
    if (n.length !== a.length) return !1;
    for (a = 0; a < n.length; a++) {
      var l = n[a];
      if (!Rl.call(t, l) || !Et(e[l], t[l]))
        return !1;
    }
    return !0;
  }
  function vd(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function xd(e, t) {
    var n = vd(e);
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
      n = vd(n);
    }
  }
  function yd(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? yd(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Nd(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = qs(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = qs(e.document);
    }
    return t;
  }
  function lr(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var xx = on && "documentMode" in document && 11 >= document.documentMode, Oi = null, rr = null, Ra = null, ur = !1;
  function Sd(e, t, n) {
    var a = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    ur || Oi == null || Oi !== qs(a) || (a = Oi, "selectionStart" in a && lr(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), Ra && za(Ra, a) || (Ra = a, a = Oo(rr, "onSelect"), 0 < a.length && (t = new Qs(
      "onSelect",
      "select",
      null,
      t,
      n
    ), e.push({ event: t, listeners: a }), t.target = Oi)));
  }
  function ai(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var Ui = {
    animationend: ai("Animation", "AnimationEnd"),
    animationiteration: ai("Animation", "AnimationIteration"),
    animationstart: ai("Animation", "AnimationStart"),
    transitionrun: ai("Transition", "TransitionRun"),
    transitionstart: ai("Transition", "TransitionStart"),
    transitioncancel: ai("Transition", "TransitionCancel"),
    transitionend: ai("Transition", "TransitionEnd")
  }, cr = {}, Dd = {};
  on && (Dd = document.createElement("div").style, "AnimationEvent" in window || (delete Ui.animationend.animation, delete Ui.animationiteration.animation, delete Ui.animationstart.animation), "TransitionEvent" in window || delete Ui.transitionend.transition);
  function si(e) {
    if (cr[e]) return cr[e];
    if (!Ui[e]) return e;
    var t = Ui[e], n;
    for (n in t)
      if (t.hasOwnProperty(n) && n in Dd)
        return cr[e] = t[n];
    return e;
  }
  var Ed = si("animationend"), wd = si("animationiteration"), Td = si("animationstart"), yx = si("transitionrun"), Nx = si("transitionstart"), Sx = si("transitioncancel"), Vd = si("transitionend"), Cd = /* @__PURE__ */ new Map(), fr = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  fr.push("scrollEnd");
  function Gt(e, t) {
    Cd.set(e, t), ni(t, [e]);
  }
  var Js = typeof reportError == "function" ? reportError : function(e) {
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
  }, Mt = [], Li = 0, dr = 0;
  function $s() {
    for (var e = Li, t = dr = Li = 0; t < e; ) {
      var n = Mt[t];
      Mt[t++] = null;
      var a = Mt[t];
      Mt[t++] = null;
      var l = Mt[t];
      Mt[t++] = null;
      var u = Mt[t];
      if (Mt[t++] = null, a !== null && l !== null) {
        var d = a.pending;
        d === null ? l.next = l : (l.next = d.next, d.next = l), a.pending = l;
      }
      u !== 0 && kd(n, l, u);
    }
  }
  function Ws(e, t, n, a) {
    Mt[Li++] = e, Mt[Li++] = t, Mt[Li++] = n, Mt[Li++] = a, dr |= a, e.lanes |= a, e = e.alternate, e !== null && (e.lanes |= a);
  }
  function mr(e, t, n, a) {
    return Ws(e, t, n, a), Is(e);
  }
  function oi(e, t) {
    return Ws(e, null, null, t), Is(e);
  }
  function kd(e, t, n) {
    e.lanes |= n;
    var a = e.alternate;
    a !== null && (a.lanes |= n);
    for (var l = !1, u = e.return; u !== null; )
      u.childLanes |= n, a = u.alternate, a !== null && (a.childLanes |= n), u.tag === 22 && (e = u.stateNode, e === null || e._visibility & 1 || (l = !0)), e = u, u = u.return;
    return e.tag === 3 ? (u = e.stateNode, l && t !== null && (l = 31 - Dt(n), e = u.hiddenUpdates, a = e[l], a === null ? e[l] = [t] : a.push(t), t.lane = n | 536870912), u) : null;
  }
  function Is(e) {
    if (50 < ss)
      throw ss = 0, Su = null, Error(r(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var Hi = {};
  function Dx(e, t, n, a) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function wt(e, t, n, a) {
    return new Dx(e, t, n, a);
  }
  function pr(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function ln(e, t) {
    var n = e.alternate;
    return n === null ? (n = wt(
      e.tag,
      t,
      e.key,
      e.mode
    ), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 65011712, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n.refCleanup = e.refCleanup, n;
  }
  function Bd(e, t) {
    e.flags &= 65011714;
    var n = e.alternate;
    return n === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = n.childLanes, e.lanes = n.lanes, e.child = n.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue, e.type = n.type, t = n.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), e;
  }
  function eo(e, t, n, a, l, u) {
    var d = 0;
    if (a = e, typeof e == "function") pr(e) && (d = 1);
    else if (typeof e == "string")
      d = C1(
        e,
        n,
        te.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case J:
          return e = wt(31, n, t, l), e.elementType = J, e.lanes = u, e;
        case P:
          return li(n.children, l, u, t);
        case B:
          d = 8, l |= 24;
          break;
        case z:
          return e = wt(12, n, t, l | 2), e.elementType = z, e.lanes = u, e;
        case F:
          return e = wt(13, n, t, l), e.elementType = F, e.lanes = u, e;
        case W:
          return e = wt(19, n, t, l), e.elementType = W, e.lanes = u, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case L:
                d = 10;
                break e;
              case G:
                d = 9;
                break e;
              case q:
                d = 11;
                break e;
              case Q:
                d = 14;
                break e;
              case X:
                d = 16, a = null;
                break e;
            }
          d = 29, n = Error(
            r(130, e === null ? "null" : typeof e, "")
          ), a = null;
      }
    return t = wt(d, n, t, l), t.elementType = e, t.type = a, t.lanes = u, t;
  }
  function li(e, t, n, a) {
    return e = wt(7, e, a, t), e.lanes = n, e;
  }
  function hr(e, t, n) {
    return e = wt(6, e, null, t), e.lanes = n, e;
  }
  function Ad(e) {
    var t = wt(18, null, null, 0);
    return t.stateNode = e, t;
  }
  function gr(e, t, n) {
    return t = wt(
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
  var jd = /* @__PURE__ */ new WeakMap();
  function Pt(e, t) {
    if (typeof e == "object" && e !== null) {
      var n = jd.get(e);
      return n !== void 0 ? n : (t = {
        value: e,
        source: t,
        stack: Af(t)
      }, jd.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: Af(t)
    };
  }
  var qi = [], Gi = 0, to = null, Oa = 0, _t = [], zt = 0, Vn = null, Kt = 1, Jt = "";
  function rn(e, t) {
    qi[Gi++] = Oa, qi[Gi++] = to, to = e, Oa = t;
  }
  function Md(e, t, n) {
    _t[zt++] = Kt, _t[zt++] = Jt, _t[zt++] = Vn, Vn = e;
    var a = Kt;
    e = Jt;
    var l = 32 - Dt(a) - 1;
    a &= ~(1 << l), n += 1;
    var u = 32 - Dt(t) + l;
    if (30 < u) {
      var d = l - l % 5;
      u = (a & (1 << d) - 1).toString(32), a >>= d, l -= d, Kt = 1 << 32 - Dt(t) + l | n << l | a, Jt = u + e;
    } else
      Kt = 1 << u | n << l | a, Jt = e;
  }
  function br(e) {
    e.return !== null && (rn(e, 1), Md(e, 1, 0));
  }
  function vr(e) {
    for (; e === to; )
      to = qi[--Gi], qi[Gi] = null, Oa = qi[--Gi], qi[Gi] = null;
    for (; e === Vn; )
      Vn = _t[--zt], _t[zt] = null, Jt = _t[--zt], _t[zt] = null, Kt = _t[--zt], _t[zt] = null;
  }
  function Pd(e, t) {
    _t[zt++] = Kt, _t[zt++] = Jt, _t[zt++] = Vn, Kt = t.id, Jt = t.overflow, Vn = e;
  }
  var tt = null, _e = null, Ne = !1, Cn = null, Rt = !1, xr = Error(r(519));
  function kn(e) {
    var t = Error(
      r(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Ua(Pt(t, e)), xr;
  }
  function _d(e) {
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
        for (n = 0; n < ls.length; n++)
          be(ls[n], t);
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
        be("invalid", t), Zf(
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
        be("invalid", t), Jf(t, a.value, a.defaultValue, a.children);
    }
    n = a.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || t.textContent === "" + n || a.suppressHydrationWarning === !0 || Wp(t.textContent, n) ? (a.popover != null && (be("beforetoggle", t), be("toggle", t)), a.onScroll != null && be("scroll", t), a.onScrollEnd != null && be("scrollend", t), a.onClick != null && (t.onclick = sn), t = !0) : t = !1, t || kn(e, !0);
  }
  function zd(e) {
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
  function Yi(e) {
    if (e !== tt) return !1;
    if (!Ne) return zd(e), Ne = !0, !1;
    var t = e.tag, n;
    if ((n = t !== 3 && t !== 27) && ((n = t === 5) && (n = e.type, n = !(n !== "form" && n !== "button") || Ru(e.type, e.memoizedProps)), n = !n), n && _e && kn(e), zd(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(r(317));
      _e = lh(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(r(317));
      _e = lh(e);
    } else
      t === 27 ? (t = _e, Gn(e.type) ? (e = qu, qu = null, _e = e) : _e = t) : _e = tt ? Ut(e.stateNode.nextSibling) : null;
    return !0;
  }
  function ri() {
    _e = tt = null, Ne = !1;
  }
  function yr() {
    var e = Cn;
    return e !== null && (bt === null ? bt = e : bt.push.apply(
      bt,
      e
    ), Cn = null), e;
  }
  function Ua(e) {
    Cn === null ? Cn = [e] : Cn.push(e);
  }
  var Nr = D(null), ui = null, un = null;
  function Bn(e, t, n) {
    $(Nr, t._currentValue), t._currentValue = n;
  }
  function cn(e) {
    e._currentValue = Nr.current, R(Nr);
  }
  function Sr(e, t, n) {
    for (; e !== null; ) {
      var a = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function Dr(e, t, n, a) {
    var l = e.child;
    for (l !== null && (l.return = e); l !== null; ) {
      var u = l.dependencies;
      if (u !== null) {
        var d = l.child;
        u = u.firstContext;
        e: for (; u !== null; ) {
          var x = u;
          u = l;
          for (var S = 0; S < t.length; S++)
            if (x.context === t[S]) {
              u.lanes |= n, x = u.alternate, x !== null && (x.lanes |= n), Sr(
                u.return,
                n,
                e
              ), a || (d = null);
              break e;
            }
          u = x.next;
        }
      } else if (l.tag === 18) {
        if (d = l.return, d === null) throw Error(r(341));
        d.lanes |= n, u = d.alternate, u !== null && (u.lanes |= n), Sr(d, n, e), d = null;
      } else d = l.child;
      if (d !== null) d.return = l;
      else
        for (d = l; d !== null; ) {
          if (d === e) {
            d = null;
            break;
          }
          if (l = d.sibling, l !== null) {
            l.return = d.return, d = l;
            break;
          }
          d = d.return;
        }
      l = d;
    }
  }
  function Xi(e, t, n, a) {
    e = null;
    for (var l = t, u = !1; l !== null; ) {
      if (!u) {
        if ((l.flags & 524288) !== 0) u = !0;
        else if ((l.flags & 262144) !== 0) break;
      }
      if (l.tag === 10) {
        var d = l.alternate;
        if (d === null) throw Error(r(387));
        if (d = d.memoizedProps, d !== null) {
          var x = l.type;
          Et(l.pendingProps.value, d.value) || (e !== null ? e.push(x) : e = [x]);
        }
      } else if (l === Te.current) {
        if (d = l.alternate, d === null) throw Error(r(387));
        d.memoizedState.memoizedState !== l.memoizedState.memoizedState && (e !== null ? e.push(ds) : e = [ds]);
      }
      l = l.return;
    }
    e !== null && Dr(
      t,
      e,
      n,
      a
    ), t.flags |= 262144;
  }
  function no(e) {
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
  function ci(e) {
    ui = e, un = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function nt(e) {
    return Rd(ui, e);
  }
  function io(e, t) {
    return ui === null && ci(e), Rd(e, t);
  }
  function Rd(e, t) {
    var n = t._currentValue;
    if (t = { context: t, memoizedValue: n, next: null }, un === null) {
      if (e === null) throw Error(r(308));
      un = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else un = un.next = t;
    return n;
  }
  var Ex = typeof AbortController < "u" ? AbortController : function() {
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
  }, wx = i.unstable_scheduleCallback, Tx = i.unstable_NormalPriority, Xe = {
    $$typeof: L,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Er() {
    return {
      controller: new Ex(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function La(e) {
    e.refCount--, e.refCount === 0 && wx(Tx, function() {
      e.controller.abort();
    });
  }
  var Ha = null, wr = 0, Fi = 0, Qi = null;
  function Vx(e, t) {
    if (Ha === null) {
      var n = Ha = [];
      wr = 0, Fi = Cu(), Qi = {
        status: "pending",
        value: void 0,
        then: function(a) {
          n.push(a);
        }
      };
    }
    return wr++, t.then(Od, Od), t;
  }
  function Od() {
    if (--wr === 0 && Ha !== null) {
      Qi !== null && (Qi.status = "fulfilled");
      var e = Ha;
      Ha = null, Fi = 0, Qi = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function Cx(e, t) {
    var n = [], a = {
      status: "pending",
      value: null,
      reason: null,
      then: function(l) {
        n.push(l);
      }
    };
    return e.then(
      function() {
        a.status = "fulfilled", a.value = t;
        for (var l = 0; l < n.length; l++) (0, n[l])(t);
      },
      function(l) {
        for (a.status = "rejected", a.reason = l, l = 0; l < n.length; l++)
          (0, n[l])(void 0);
      }
    ), a;
  }
  var Ud = j.S;
  j.S = function(e, t) {
    Sp = Nt(), typeof t == "object" && t !== null && typeof t.then == "function" && Vx(e, t), Ud !== null && Ud(e, t);
  };
  var fi = D(null);
  function Tr() {
    var e = fi.current;
    return e !== null ? e : je.pooledCache;
  }
  function ao(e, t) {
    t === null ? $(fi, fi.current) : $(fi, t.pool);
  }
  function Ld() {
    var e = Tr();
    return e === null ? null : { parent: Xe._currentValue, pool: e };
  }
  var Zi = Error(r(460)), Vr = Error(r(474)), so = Error(r(542)), oo = { then: function() {
  } };
  function Hd(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function qd(e, t, n) {
    switch (n = e[n], n === void 0 ? e.push(t) : n !== t && (t.then(sn, sn), t = n), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, Yd(e), e;
      default:
        if (typeof t.status == "string") t.then(sn, sn);
        else {
          if (e = je, e !== null && 100 < e.shellSuspendCounter)
            throw Error(r(482));
          e = t, e.status = "pending", e.then(
            function(a) {
              if (t.status === "pending") {
                var l = t;
                l.status = "fulfilled", l.value = a;
              }
            },
            function(a) {
              if (t.status === "pending") {
                var l = t;
                l.status = "rejected", l.reason = a;
              }
            }
          );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw e = t.reason, Yd(e), e;
        }
        throw mi = t, Zi;
    }
  }
  function di(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (n) {
      throw n !== null && typeof n == "object" && typeof n.then == "function" ? (mi = n, Zi) : n;
    }
  }
  var mi = null;
  function Gd() {
    if (mi === null) throw Error(r(459));
    var e = mi;
    return mi = null, e;
  }
  function Yd(e) {
    if (e === Zi || e === so)
      throw Error(r(483));
  }
  var Ki = null, qa = 0;
  function lo(e) {
    var t = qa;
    return qa += 1, Ki === null && (Ki = []), qd(Ki, e, t);
  }
  function Ga(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function ro(e, t) {
    throw t.$$typeof === N ? Error(r(525)) : (e = Object.prototype.toString.call(t), Error(
      r(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function Xd(e) {
    function t(T, E) {
      if (e) {
        var C = T.deletions;
        C === null ? (T.deletions = [E], T.flags |= 16) : C.push(E);
      }
    }
    function n(T, E) {
      if (!e) return null;
      for (; E !== null; )
        t(T, E), E = E.sibling;
      return null;
    }
    function a(T) {
      for (var E = /* @__PURE__ */ new Map(); T !== null; )
        T.key !== null ? E.set(T.key, T) : E.set(T.index, T), T = T.sibling;
      return E;
    }
    function l(T, E) {
      return T = ln(T, E), T.index = 0, T.sibling = null, T;
    }
    function u(T, E, C) {
      return T.index = C, e ? (C = T.alternate, C !== null ? (C = C.index, C < E ? (T.flags |= 67108866, E) : C) : (T.flags |= 67108866, E)) : (T.flags |= 1048576, E);
    }
    function d(T) {
      return e && T.alternate === null && (T.flags |= 67108866), T;
    }
    function x(T, E, C, O) {
      return E === null || E.tag !== 6 ? (E = hr(C, T.mode, O), E.return = T, E) : (E = l(E, C), E.return = T, E);
    }
    function S(T, E, C, O) {
      var oe = C.type;
      return oe === P ? _(
        T,
        E,
        C.props.children,
        O,
        C.key
      ) : E !== null && (E.elementType === oe || typeof oe == "object" && oe !== null && oe.$$typeof === X && di(oe) === E.type) ? (E = l(E, C.props), Ga(E, C), E.return = T, E) : (E = eo(
        C.type,
        C.key,
        C.props,
        null,
        T.mode,
        O
      ), Ga(E, C), E.return = T, E);
    }
    function k(T, E, C, O) {
      return E === null || E.tag !== 4 || E.stateNode.containerInfo !== C.containerInfo || E.stateNode.implementation !== C.implementation ? (E = gr(C, T.mode, O), E.return = T, E) : (E = l(E, C.children || []), E.return = T, E);
    }
    function _(T, E, C, O, oe) {
      return E === null || E.tag !== 7 ? (E = li(
        C,
        T.mode,
        O,
        oe
      ), E.return = T, E) : (E = l(E, C), E.return = T, E);
    }
    function U(T, E, C) {
      if (typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint")
        return E = hr(
          "" + E,
          T.mode,
          C
        ), E.return = T, E;
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case w:
            return C = eo(
              E.type,
              E.key,
              E.props,
              null,
              T.mode,
              C
            ), Ga(C, E), C.return = T, C;
          case V:
            return E = gr(
              E,
              T.mode,
              C
            ), E.return = T, E;
          case X:
            return E = di(E), U(T, E, C);
        }
        if (le(E) || I(E))
          return E = li(
            E,
            T.mode,
            C,
            null
          ), E.return = T, E;
        if (typeof E.then == "function")
          return U(T, lo(E), C);
        if (E.$$typeof === L)
          return U(
            T,
            io(T, E),
            C
          );
        ro(T, E);
      }
      return null;
    }
    function A(T, E, C, O) {
      var oe = E !== null ? E.key : null;
      if (typeof C == "string" && C !== "" || typeof C == "number" || typeof C == "bigint")
        return oe !== null ? null : x(T, E, "" + C, O);
      if (typeof C == "object" && C !== null) {
        switch (C.$$typeof) {
          case w:
            return C.key === oe ? S(T, E, C, O) : null;
          case V:
            return C.key === oe ? k(T, E, C, O) : null;
          case X:
            return C = di(C), A(T, E, C, O);
        }
        if (le(C) || I(C))
          return oe !== null ? null : _(T, E, C, O, null);
        if (typeof C.then == "function")
          return A(
            T,
            E,
            lo(C),
            O
          );
        if (C.$$typeof === L)
          return A(
            T,
            E,
            io(T, C),
            O
          );
        ro(T, C);
      }
      return null;
    }
    function M(T, E, C, O, oe) {
      if (typeof O == "string" && O !== "" || typeof O == "number" || typeof O == "bigint")
        return T = T.get(C) || null, x(E, T, "" + O, oe);
      if (typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case w:
            return T = T.get(
              O.key === null ? C : O.key
            ) || null, S(E, T, O, oe);
          case V:
            return T = T.get(
              O.key === null ? C : O.key
            ) || null, k(E, T, O, oe);
          case X:
            return O = di(O), M(
              T,
              E,
              C,
              O,
              oe
            );
        }
        if (le(O) || I(O))
          return T = T.get(C) || null, _(E, T, O, oe, null);
        if (typeof O.then == "function")
          return M(
            T,
            E,
            C,
            lo(O),
            oe
          );
        if (O.$$typeof === L)
          return M(
            T,
            E,
            C,
            io(E, O),
            oe
          );
        ro(E, O);
      }
      return null;
    }
    function ne(T, E, C, O) {
      for (var oe = null, De = null, ae = E, he = E = 0, xe = null; ae !== null && he < C.length; he++) {
        ae.index > he ? (xe = ae, ae = null) : xe = ae.sibling;
        var Ee = A(
          T,
          ae,
          C[he],
          O
        );
        if (Ee === null) {
          ae === null && (ae = xe);
          break;
        }
        e && ae && Ee.alternate === null && t(T, ae), E = u(Ee, E, he), De === null ? oe = Ee : De.sibling = Ee, De = Ee, ae = xe;
      }
      if (he === C.length)
        return n(T, ae), Ne && rn(T, he), oe;
      if (ae === null) {
        for (; he < C.length; he++)
          ae = U(T, C[he], O), ae !== null && (E = u(
            ae,
            E,
            he
          ), De === null ? oe = ae : De.sibling = ae, De = ae);
        return Ne && rn(T, he), oe;
      }
      for (ae = a(ae); he < C.length; he++)
        xe = M(
          ae,
          T,
          he,
          C[he],
          O
        ), xe !== null && (e && xe.alternate !== null && ae.delete(
          xe.key === null ? he : xe.key
        ), E = u(
          xe,
          E,
          he
        ), De === null ? oe = xe : De.sibling = xe, De = xe);
      return e && ae.forEach(function(Zn) {
        return t(T, Zn);
      }), Ne && rn(T, he), oe;
    }
    function ue(T, E, C, O) {
      if (C == null) throw Error(r(151));
      for (var oe = null, De = null, ae = E, he = E = 0, xe = null, Ee = C.next(); ae !== null && !Ee.done; he++, Ee = C.next()) {
        ae.index > he ? (xe = ae, ae = null) : xe = ae.sibling;
        var Zn = A(T, ae, Ee.value, O);
        if (Zn === null) {
          ae === null && (ae = xe);
          break;
        }
        e && ae && Zn.alternate === null && t(T, ae), E = u(Zn, E, he), De === null ? oe = Zn : De.sibling = Zn, De = Zn, ae = xe;
      }
      if (Ee.done)
        return n(T, ae), Ne && rn(T, he), oe;
      if (ae === null) {
        for (; !Ee.done; he++, Ee = C.next())
          Ee = U(T, Ee.value, O), Ee !== null && (E = u(Ee, E, he), De === null ? oe = Ee : De.sibling = Ee, De = Ee);
        return Ne && rn(T, he), oe;
      }
      for (ae = a(ae); !Ee.done; he++, Ee = C.next())
        Ee = M(ae, T, he, Ee.value, O), Ee !== null && (e && Ee.alternate !== null && ae.delete(Ee.key === null ? he : Ee.key), E = u(Ee, E, he), De === null ? oe = Ee : De.sibling = Ee, De = Ee);
      return e && ae.forEach(function(U1) {
        return t(T, U1);
      }), Ne && rn(T, he), oe;
    }
    function Ae(T, E, C, O) {
      if (typeof C == "object" && C !== null && C.type === P && C.key === null && (C = C.props.children), typeof C == "object" && C !== null) {
        switch (C.$$typeof) {
          case w:
            e: {
              for (var oe = C.key; E !== null; ) {
                if (E.key === oe) {
                  if (oe = C.type, oe === P) {
                    if (E.tag === 7) {
                      n(
                        T,
                        E.sibling
                      ), O = l(
                        E,
                        C.props.children
                      ), O.return = T, T = O;
                      break e;
                    }
                  } else if (E.elementType === oe || typeof oe == "object" && oe !== null && oe.$$typeof === X && di(oe) === E.type) {
                    n(
                      T,
                      E.sibling
                    ), O = l(E, C.props), Ga(O, C), O.return = T, T = O;
                    break e;
                  }
                  n(T, E);
                  break;
                } else t(T, E);
                E = E.sibling;
              }
              C.type === P ? (O = li(
                C.props.children,
                T.mode,
                O,
                C.key
              ), O.return = T, T = O) : (O = eo(
                C.type,
                C.key,
                C.props,
                null,
                T.mode,
                O
              ), Ga(O, C), O.return = T, T = O);
            }
            return d(T);
          case V:
            e: {
              for (oe = C.key; E !== null; ) {
                if (E.key === oe)
                  if (E.tag === 4 && E.stateNode.containerInfo === C.containerInfo && E.stateNode.implementation === C.implementation) {
                    n(
                      T,
                      E.sibling
                    ), O = l(E, C.children || []), O.return = T, T = O;
                    break e;
                  } else {
                    n(T, E);
                    break;
                  }
                else t(T, E);
                E = E.sibling;
              }
              O = gr(C, T.mode, O), O.return = T, T = O;
            }
            return d(T);
          case X:
            return C = di(C), Ae(
              T,
              E,
              C,
              O
            );
        }
        if (le(C))
          return ne(
            T,
            E,
            C,
            O
          );
        if (I(C)) {
          if (oe = I(C), typeof oe != "function") throw Error(r(150));
          return C = oe.call(C), ue(
            T,
            E,
            C,
            O
          );
        }
        if (typeof C.then == "function")
          return Ae(
            T,
            E,
            lo(C),
            O
          );
        if (C.$$typeof === L)
          return Ae(
            T,
            E,
            io(T, C),
            O
          );
        ro(T, C);
      }
      return typeof C == "string" && C !== "" || typeof C == "number" || typeof C == "bigint" ? (C = "" + C, E !== null && E.tag === 6 ? (n(T, E.sibling), O = l(E, C), O.return = T, T = O) : (n(T, E), O = hr(C, T.mode, O), O.return = T, T = O), d(T)) : n(T, E);
    }
    return function(T, E, C, O) {
      try {
        qa = 0;
        var oe = Ae(
          T,
          E,
          C,
          O
        );
        return Ki = null, oe;
      } catch (ae) {
        if (ae === Zi || ae === so) throw ae;
        var De = wt(29, ae, null, T.mode);
        return De.lanes = O, De.return = T, De;
      } finally {
      }
    };
  }
  var pi = Xd(!0), Fd = Xd(!1), An = !1;
  function Cr(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function kr(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    });
  }
  function jn(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function Mn(e, t, n) {
    var a = e.updateQueue;
    if (a === null) return null;
    if (a = a.shared, (we & 2) !== 0) {
      var l = a.pending;
      return l === null ? t.next = t : (t.next = l.next, l.next = t), a.pending = t, t = Is(e), kd(e, null, n), t;
    }
    return Ws(e, a, t, n), Is(e);
  }
  function Ya(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194048) !== 0)) {
      var a = t.lanes;
      a &= e.pendingLanes, n |= a, t.lanes = n, Rf(e, n);
    }
  }
  function Br(e, t) {
    var n = e.updateQueue, a = e.alternate;
    if (a !== null && (a = a.updateQueue, n === a)) {
      var l = null, u = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var d = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null
          };
          u === null ? l = u = d : u = u.next = d, n = n.next;
        } while (n !== null);
        u === null ? l = u = t : u = u.next = t;
      } else l = u = t;
      n = {
        baseState: a.baseState,
        firstBaseUpdate: l,
        lastBaseUpdate: u,
        shared: a.shared,
        callbacks: a.callbacks
      }, e.updateQueue = n;
      return;
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
  }
  var Ar = !1;
  function Xa() {
    if (Ar) {
      var e = Qi;
      if (e !== null) throw e;
    }
  }
  function Fa(e, t, n, a) {
    Ar = !1;
    var l = e.updateQueue;
    An = !1;
    var u = l.firstBaseUpdate, d = l.lastBaseUpdate, x = l.shared.pending;
    if (x !== null) {
      l.shared.pending = null;
      var S = x, k = S.next;
      S.next = null, d === null ? u = k : d.next = k, d = S;
      var _ = e.alternate;
      _ !== null && (_ = _.updateQueue, x = _.lastBaseUpdate, x !== d && (x === null ? _.firstBaseUpdate = k : x.next = k, _.lastBaseUpdate = S));
    }
    if (u !== null) {
      var U = l.baseState;
      d = 0, _ = k = S = null, x = u;
      do {
        var A = x.lane & -536870913, M = A !== x.lane;
        if (M ? (ve & A) === A : (a & A) === A) {
          A !== 0 && A === Fi && (Ar = !0), _ !== null && (_ = _.next = {
            lane: 0,
            tag: x.tag,
            payload: x.payload,
            callback: null,
            next: null
          });
          e: {
            var ne = e, ue = x;
            A = t;
            var Ae = n;
            switch (ue.tag) {
              case 1:
                if (ne = ue.payload, typeof ne == "function") {
                  U = ne.call(Ae, U, A);
                  break e;
                }
                U = ne;
                break e;
              case 3:
                ne.flags = ne.flags & -65537 | 128;
              case 0:
                if (ne = ue.payload, A = typeof ne == "function" ? ne.call(Ae, U, A) : ne, A == null) break e;
                U = y({}, U, A);
                break e;
              case 2:
                An = !0;
            }
          }
          A = x.callback, A !== null && (e.flags |= 64, M && (e.flags |= 8192), M = l.callbacks, M === null ? l.callbacks = [A] : M.push(A));
        } else
          M = {
            lane: A,
            tag: x.tag,
            payload: x.payload,
            callback: x.callback,
            next: null
          }, _ === null ? (k = _ = M, S = U) : _ = _.next = M, d |= A;
        if (x = x.next, x === null) {
          if (x = l.shared.pending, x === null)
            break;
          M = x, x = M.next, M.next = null, l.lastBaseUpdate = M, l.shared.pending = null;
        }
      } while (!0);
      _ === null && (S = U), l.baseState = S, l.firstBaseUpdate = k, l.lastBaseUpdate = _, u === null && (l.shared.lanes = 0), On |= d, e.lanes = d, e.memoizedState = U;
    }
  }
  function Qd(e, t) {
    if (typeof e != "function")
      throw Error(r(191, e));
    e.call(t);
  }
  function Zd(e, t) {
    var n = e.callbacks;
    if (n !== null)
      for (e.callbacks = null, e = 0; e < n.length; e++)
        Qd(n[e], t);
  }
  var Ji = D(null), uo = D(0);
  function Kd(e, t) {
    e = xn, $(uo, e), $(Ji, t), xn = e | t.baseLanes;
  }
  function jr() {
    $(uo, xn), $(Ji, Ji.current);
  }
  function Mr() {
    xn = uo.current, R(Ji), R(uo);
  }
  var Tt = D(null), Ot = null;
  function Pn(e) {
    var t = e.alternate;
    $(Ge, Ge.current & 1), $(Tt, e), Ot === null && (t === null || Ji.current !== null || t.memoizedState !== null) && (Ot = e);
  }
  function Pr(e) {
    $(Ge, Ge.current), $(Tt, e), Ot === null && (Ot = e);
  }
  function Jd(e) {
    e.tag === 22 ? ($(Ge, Ge.current), $(Tt, e), Ot === null && (Ot = e)) : _n();
  }
  function _n() {
    $(Ge, Ge.current), $(Tt, Tt.current);
  }
  function Vt(e) {
    R(Tt), Ot === e && (Ot = null), R(Ge);
  }
  var Ge = D(0);
  function co(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || Lu(n) || Hu(n)))
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
  var fn = 0, pe = null, ke = null, Fe = null, fo = !1, $i = !1, hi = !1, mo = 0, Qa = 0, Wi = null, kx = 0;
  function Le() {
    throw Error(r(321));
  }
  function _r(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!Et(e[n], t[n])) return !1;
    return !0;
  }
  function zr(e, t, n, a, l, u) {
    return fn = u, pe = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, j.H = e === null || e.memoizedState === null ? Mm : $r, hi = !1, u = n(a, l), hi = !1, $i && (u = Wd(
      t,
      n,
      a,
      l
    )), $d(e), u;
  }
  function $d(e) {
    j.H = Ja;
    var t = ke !== null && ke.next !== null;
    if (fn = 0, Fe = ke = pe = null, fo = !1, Qa = 0, Wi = null, t) throw Error(r(300));
    e === null || Qe || (e = e.dependencies, e !== null && no(e) && (Qe = !0));
  }
  function Wd(e, t, n, a) {
    pe = e;
    var l = 0;
    do {
      if ($i && (Wi = null), Qa = 0, $i = !1, 25 <= l) throw Error(r(301));
      if (l += 1, Fe = ke = null, e.updateQueue != null) {
        var u = e.updateQueue;
        u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0);
      }
      j.H = Pm, u = t(n, a);
    } while ($i);
    return u;
  }
  function Bx() {
    var e = j.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? Za(t) : t, e = e.useState()[0], (ke !== null ? ke.memoizedState : null) !== e && (pe.flags |= 1024), t;
  }
  function Rr() {
    var e = mo !== 0;
    return mo = 0, e;
  }
  function Or(e, t, n) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~n;
  }
  function Ur(e) {
    if (fo) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      fo = !1;
    }
    fn = 0, Fe = ke = pe = null, $i = !1, Qa = mo = 0, Wi = null;
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
  function po() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Za(e) {
    var t = Qa;
    return Qa += 1, Wi === null && (Wi = []), e = qd(Wi, e, t), t = pe, (Fe === null ? t.memoizedState : Fe.next) === null && (t = t.alternate, j.H = t === null || t.memoizedState === null ? Mm : $r), e;
  }
  function ho(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Za(e);
      if (e.$$typeof === L) return nt(e);
    }
    throw Error(r(438, String(e)));
  }
  function Lr(e) {
    var t = null, n = pe.updateQueue;
    if (n !== null && (t = n.memoCache), t == null) {
      var a = pe.alternate;
      a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (t = {
        data: a.data.map(function(l) {
          return l.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), n === null && (n = po(), pe.updateQueue = n), n.memoCache = t, n = t.data[t.index], n === void 0)
      for (n = t.data[t.index] = Array(e), a = 0; a < e; a++)
        n[a] = ee;
    return t.index++, n;
  }
  function dn(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function go(e) {
    var t = Ye();
    return Hr(t, ke, e);
  }
  function Hr(e, t, n) {
    var a = e.queue;
    if (a === null) throw Error(r(311));
    a.lastRenderedReducer = n;
    var l = e.baseQueue, u = a.pending;
    if (u !== null) {
      if (l !== null) {
        var d = l.next;
        l.next = u.next, u.next = d;
      }
      t.baseQueue = l = u, a.pending = null;
    }
    if (u = e.baseState, l === null) e.memoizedState = u;
    else {
      t = l.next;
      var x = d = null, S = null, k = t, _ = !1;
      do {
        var U = k.lane & -536870913;
        if (U !== k.lane ? (ve & U) === U : (fn & U) === U) {
          var A = k.revertLane;
          if (A === 0)
            S !== null && (S = S.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: k.action,
              hasEagerState: k.hasEagerState,
              eagerState: k.eagerState,
              next: null
            }), U === Fi && (_ = !0);
          else if ((fn & A) === A) {
            k = k.next, A === Fi && (_ = !0);
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
            }, S === null ? (x = S = U, d = u) : S = S.next = U, pe.lanes |= A, On |= A;
          U = k.action, hi && n(u, U), u = k.hasEagerState ? k.eagerState : n(u, U);
        } else
          A = {
            lane: U,
            revertLane: k.revertLane,
            gesture: k.gesture,
            action: k.action,
            hasEagerState: k.hasEagerState,
            eagerState: k.eagerState,
            next: null
          }, S === null ? (x = S = A, d = u) : S = S.next = A, pe.lanes |= U, On |= U;
        k = k.next;
      } while (k !== null && k !== t);
      if (S === null ? d = u : S.next = x, !Et(u, e.memoizedState) && (Qe = !0, _ && (n = Qi, n !== null)))
        throw n;
      e.memoizedState = u, e.baseState = d, e.baseQueue = S, a.lastRenderedState = u;
    }
    return l === null && (a.lanes = 0), [e.memoizedState, a.dispatch];
  }
  function qr(e) {
    var t = Ye(), n = t.queue;
    if (n === null) throw Error(r(311));
    n.lastRenderedReducer = e;
    var a = n.dispatch, l = n.pending, u = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var d = l = l.next;
      do
        u = e(u, d.action), d = d.next;
      while (d !== l);
      Et(u, t.memoizedState) || (Qe = !0), t.memoizedState = u, t.baseQueue === null && (t.baseState = u), n.lastRenderedState = u;
    }
    return [u, a];
  }
  function Id(e, t, n) {
    var a = pe, l = Ye(), u = Ne;
    if (u) {
      if (n === void 0) throw Error(r(407));
      n = n();
    } else n = t();
    var d = !Et(
      (ke || l).memoizedState,
      n
    );
    if (d && (l.memoizedState = n, Qe = !0), l = l.queue, Xr(nm.bind(null, a, l, e), [
      e
    ]), l.getSnapshot !== t || d || Fe !== null && Fe.memoizedState.tag & 1) {
      if (a.flags |= 2048, Ii(
        9,
        { destroy: void 0 },
        tm.bind(
          null,
          a,
          l,
          n,
          t
        ),
        null
      ), je === null) throw Error(r(349));
      u || (fn & 127) !== 0 || em(a, t, n);
    }
    return n;
  }
  function em(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = pe.updateQueue, t === null ? (t = po(), pe.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function tm(e, t, n, a) {
    t.value = n, t.getSnapshot = a, im(t) && am(e);
  }
  function nm(e, t, n) {
    return n(function() {
      im(t) && am(e);
    });
  }
  function im(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Et(e, n);
    } catch {
      return !0;
    }
  }
  function am(e) {
    var t = oi(e, 2);
    t !== null && vt(t, e, 2);
  }
  function Gr(e) {
    var t = ut();
    if (typeof e == "function") {
      var n = e;
      if (e = n(), hi) {
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
      lastRenderedReducer: dn,
      lastRenderedState: e
    }, t;
  }
  function sm(e, t, n, a) {
    return e.baseState = n, Hr(
      e,
      ke,
      typeof a == "function" ? a : dn
    );
  }
  function Ax(e, t, n, a, l) {
    if (xo(e)) throw Error(r(485));
    if (e = t.action, e !== null) {
      var u = {
        payload: l,
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
      j.T !== null ? n(!0) : u.isTransition = !1, a(u), n = t.pending, n === null ? (u.next = t.pending = u, om(t, u)) : (u.next = n.next, t.pending = n.next = u);
    }
  }
  function om(e, t) {
    var n = t.action, a = t.payload, l = e.state;
    if (t.isTransition) {
      var u = j.T, d = {};
      j.T = d;
      try {
        var x = n(l, a), S = j.S;
        S !== null && S(d, x), lm(e, t, x);
      } catch (k) {
        Yr(e, t, k);
      } finally {
        u !== null && d.types !== null && (u.types = d.types), j.T = u;
      }
    } else
      try {
        u = n(l, a), lm(e, t, u);
      } catch (k) {
        Yr(e, t, k);
      }
  }
  function lm(e, t, n) {
    n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(
      function(a) {
        rm(e, t, a);
      },
      function(a) {
        return Yr(e, t, a);
      }
    ) : rm(e, t, n);
  }
  function rm(e, t, n) {
    t.status = "fulfilled", t.value = n, um(t), e.state = n, t = e.pending, t !== null && (n = t.next, n === t ? e.pending = null : (n = n.next, t.next = n, om(e, n)));
  }
  function Yr(e, t, n) {
    var a = e.pending;
    if (e.pending = null, a !== null) {
      a = a.next;
      do
        t.status = "rejected", t.reason = n, um(t), t = t.next;
      while (t !== a);
    }
    e.action = null;
  }
  function um(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function cm(e, t) {
    return t;
  }
  function fm(e, t) {
    if (Ne) {
      var n = je.formState;
      if (n !== null) {
        e: {
          var a = pe;
          if (Ne) {
            if (_e) {
              t: {
                for (var l = _e, u = Rt; l.nodeType !== 8; ) {
                  if (!u) {
                    l = null;
                    break t;
                  }
                  if (l = Ut(
                    l.nextSibling
                  ), l === null) {
                    l = null;
                    break t;
                  }
                }
                u = l.data, l = u === "F!" || u === "F" ? l : null;
              }
              if (l) {
                _e = Ut(
                  l.nextSibling
                ), a = l.data === "F!";
                break e;
              }
            }
            kn(a);
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
      lastRenderedReducer: cm,
      lastRenderedState: t
    }, n.queue = a, n = Bm.bind(
      null,
      pe,
      a
    ), a.dispatch = n, a = Gr(!1), u = Jr.bind(
      null,
      pe,
      !1,
      a.queue
    ), a = ut(), l = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, a.queue = l, n = Ax.bind(
      null,
      pe,
      l,
      u,
      n
    ), l.dispatch = n, a.memoizedState = e, [t, n, !1];
  }
  function dm(e) {
    var t = Ye();
    return mm(t, ke, e);
  }
  function mm(e, t, n) {
    if (t = Hr(
      e,
      t,
      cm
    )[0], e = go(dn)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var a = Za(t);
      } catch (d) {
        throw d === Zi ? so : d;
      }
    else a = t;
    t = Ye();
    var l = t.queue, u = l.dispatch;
    return n !== t.memoizedState && (pe.flags |= 2048, Ii(
      9,
      { destroy: void 0 },
      jx.bind(null, l, n),
      null
    )), [a, u, e];
  }
  function jx(e, t) {
    e.action = t;
  }
  function pm(e) {
    var t = Ye(), n = ke;
    if (n !== null)
      return mm(t, n, e);
    Ye(), t = t.memoizedState, n = Ye();
    var a = n.queue.dispatch;
    return n.memoizedState = e, [t, a, !1];
  }
  function Ii(e, t, n, a) {
    return e = { tag: e, create: n, deps: a, inst: t, next: null }, t = pe.updateQueue, t === null && (t = po(), pe.updateQueue = t), n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (a = n.next, n.next = e, e.next = a, t.lastEffect = e), e;
  }
  function hm() {
    return Ye().memoizedState;
  }
  function bo(e, t, n, a) {
    var l = ut();
    pe.flags |= e, l.memoizedState = Ii(
      1 | t,
      { destroy: void 0 },
      n,
      a === void 0 ? null : a
    );
  }
  function vo(e, t, n, a) {
    var l = Ye();
    a = a === void 0 ? null : a;
    var u = l.memoizedState.inst;
    ke !== null && a !== null && _r(a, ke.memoizedState.deps) ? l.memoizedState = Ii(t, u, n, a) : (pe.flags |= e, l.memoizedState = Ii(
      1 | t,
      u,
      n,
      a
    ));
  }
  function gm(e, t) {
    bo(8390656, 8, e, t);
  }
  function Xr(e, t) {
    vo(2048, 8, e, t);
  }
  function Mx(e) {
    pe.flags |= 4;
    var t = pe.updateQueue;
    if (t === null)
      t = po(), pe.updateQueue = t, t.events = [e];
    else {
      var n = t.events;
      n === null ? t.events = [e] : n.push(e);
    }
  }
  function bm(e) {
    var t = Ye().memoizedState;
    return Mx({ ref: t, nextImpl: e }), function() {
      if ((we & 2) !== 0) throw Error(r(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function vm(e, t) {
    return vo(4, 2, e, t);
  }
  function xm(e, t) {
    return vo(4, 4, e, t);
  }
  function ym(e, t) {
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
  function Nm(e, t, n) {
    n = n != null ? n.concat([e]) : null, vo(4, 4, ym.bind(null, t, e), n);
  }
  function Fr() {
  }
  function Sm(e, t) {
    var n = Ye();
    t = t === void 0 ? null : t;
    var a = n.memoizedState;
    return t !== null && _r(t, a[1]) ? a[0] : (n.memoizedState = [e, t], e);
  }
  function Dm(e, t) {
    var n = Ye();
    t = t === void 0 ? null : t;
    var a = n.memoizedState;
    if (t !== null && _r(t, a[1]))
      return a[0];
    if (a = e(), hi) {
      En(!0);
      try {
        e();
      } finally {
        En(!1);
      }
    }
    return n.memoizedState = [a, t], a;
  }
  function Qr(e, t, n) {
    return n === void 0 || (fn & 1073741824) !== 0 && (ve & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = n, e = Ep(), pe.lanes |= e, On |= e, n);
  }
  function Em(e, t, n, a) {
    return Et(n, t) ? n : Ji.current !== null ? (e = Qr(e, n, a), Et(e, t) || (Qe = !0), e) : (fn & 42) === 0 || (fn & 1073741824) !== 0 && (ve & 261930) === 0 ? (Qe = !0, e.memoizedState = n) : (e = Ep(), pe.lanes |= e, On |= e, t);
  }
  function wm(e, t, n, a, l) {
    var u = K.p;
    K.p = u !== 0 && 8 > u ? u : 8;
    var d = j.T, x = {};
    j.T = x, Jr(e, !1, t, n);
    try {
      var S = l(), k = j.S;
      if (k !== null && k(x, S), S !== null && typeof S == "object" && typeof S.then == "function") {
        var _ = Cx(
          S,
          a
        );
        Ka(
          e,
          t,
          _,
          Bt(e)
        );
      } else
        Ka(
          e,
          t,
          a,
          Bt(e)
        );
    } catch (U) {
      Ka(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: U },
        Bt()
      );
    } finally {
      K.p = u, d !== null && x.types !== null && (d.types = x.types), j.T = d;
    }
  }
  function Px() {
  }
  function Zr(e, t, n, a) {
    if (e.tag !== 5) throw Error(r(476));
    var l = Tm(e).queue;
    wm(
      e,
      l,
      t,
      Z,
      n === null ? Px : function() {
        return Vm(e), n(a);
      }
    );
  }
  function Tm(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: Z,
      baseState: Z,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: dn,
        lastRenderedState: Z
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
        lastRenderedReducer: dn,
        lastRenderedState: n
      },
      next: null
    }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
  }
  function Vm(e) {
    var t = Tm(e);
    t.next === null && (t = e.alternate.memoizedState), Ka(
      e,
      t.next.queue,
      {},
      Bt()
    );
  }
  function Kr() {
    return nt(ds);
  }
  function Cm() {
    return Ye().memoizedState;
  }
  function km() {
    return Ye().memoizedState;
  }
  function _x(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var n = Bt();
          e = jn(n);
          var a = Mn(t, e, n);
          a !== null && (vt(a, t, n), Ya(a, t, n)), t = { cache: Er() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function zx(e, t, n) {
    var a = Bt();
    n = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, xo(e) ? Am(t, n) : (n = mr(e, t, n, a), n !== null && (vt(n, e, a), jm(n, t, a)));
  }
  function Bm(e, t, n) {
    var a = Bt();
    Ka(e, t, n, a);
  }
  function Ka(e, t, n, a) {
    var l = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (xo(e)) Am(t, l);
    else {
      var u = e.alternate;
      if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = t.lastRenderedReducer, u !== null))
        try {
          var d = t.lastRenderedState, x = u(d, n);
          if (l.hasEagerState = !0, l.eagerState = x, Et(x, d))
            return Ws(e, t, l, 0), je === null && $s(), !1;
        } catch {
        } finally {
        }
      if (n = mr(e, t, l, a), n !== null)
        return vt(n, e, a), jm(n, t, a), !0;
    }
    return !1;
  }
  function Jr(e, t, n, a) {
    if (a = {
      lane: 2,
      revertLane: Cu(),
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, xo(e)) {
      if (t) throw Error(r(479));
    } else
      t = mr(
        e,
        n,
        a,
        2
      ), t !== null && vt(t, e, 2);
  }
  function xo(e) {
    var t = e.alternate;
    return e === pe || t !== null && t === pe;
  }
  function Am(e, t) {
    $i = fo = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function jm(e, t, n) {
    if ((n & 4194048) !== 0) {
      var a = t.lanes;
      a &= e.pendingLanes, n |= a, t.lanes = n, Rf(e, n);
    }
  }
  var Ja = {
    readContext: nt,
    use: ho,
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
  Ja.useEffectEvent = Le;
  var Mm = {
    readContext: nt,
    use: ho,
    useCallback: function(e, t) {
      return ut().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: nt,
    useEffect: gm,
    useImperativeHandle: function(e, t, n) {
      n = n != null ? n.concat([e]) : null, bo(
        4194308,
        4,
        ym.bind(null, t, e),
        n
      );
    },
    useLayoutEffect: function(e, t) {
      return bo(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      bo(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var n = ut();
      t = t === void 0 ? null : t;
      var a = e();
      if (hi) {
        En(!0);
        try {
          e();
        } finally {
          En(!1);
        }
      }
      return n.memoizedState = [a, t], a;
    },
    useReducer: function(e, t, n) {
      var a = ut();
      if (n !== void 0) {
        var l = n(t);
        if (hi) {
          En(!0);
          try {
            n(t);
          } finally {
            En(!1);
          }
        }
      } else l = t;
      return a.memoizedState = a.baseState = l, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: l
      }, a.queue = e, e = e.dispatch = zx.bind(
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
      e = Gr(e);
      var t = e.queue, n = Bm.bind(null, pe, t);
      return t.dispatch = n, [e.memoizedState, n];
    },
    useDebugValue: Fr,
    useDeferredValue: function(e, t) {
      var n = ut();
      return Qr(n, e, t);
    },
    useTransition: function() {
      var e = Gr(!1);
      return e = wm.bind(
        null,
        pe,
        e.queue,
        !0,
        !1
      ), ut().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, n) {
      var a = pe, l = ut();
      if (Ne) {
        if (n === void 0)
          throw Error(r(407));
        n = n();
      } else {
        if (n = t(), je === null)
          throw Error(r(349));
        (ve & 127) !== 0 || em(a, t, n);
      }
      l.memoizedState = n;
      var u = { value: n, getSnapshot: t };
      return l.queue = u, gm(nm.bind(null, a, u, e), [
        e
      ]), a.flags |= 2048, Ii(
        9,
        { destroy: void 0 },
        tm.bind(
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
      if (Ne) {
        var n = Jt, a = Kt;
        n = (a & ~(1 << 32 - Dt(a) - 1)).toString(32) + n, t = "_" + t + "R_" + n, n = mo++, 0 < n && (t += "H" + n.toString(32)), t += "_";
      } else
        n = kx++, t = "_" + t + "r_" + n.toString(32) + "_";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: Kr,
    useFormState: fm,
    useActionState: fm,
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
      return t.queue = n, t = Jr.bind(
        null,
        pe,
        !0,
        n
      ), n.dispatch = t, [e, t];
    },
    useMemoCache: Lr,
    useCacheRefresh: function() {
      return ut().memoizedState = _x.bind(
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
  }, $r = {
    readContext: nt,
    use: ho,
    useCallback: Sm,
    useContext: nt,
    useEffect: Xr,
    useImperativeHandle: Nm,
    useInsertionEffect: vm,
    useLayoutEffect: xm,
    useMemo: Dm,
    useReducer: go,
    useRef: hm,
    useState: function() {
      return go(dn);
    },
    useDebugValue: Fr,
    useDeferredValue: function(e, t) {
      var n = Ye();
      return Em(
        n,
        ke.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = go(dn)[0], t = Ye().memoizedState;
      return [
        typeof e == "boolean" ? e : Za(e),
        t
      ];
    },
    useSyncExternalStore: Id,
    useId: Cm,
    useHostTransitionStatus: Kr,
    useFormState: dm,
    useActionState: dm,
    useOptimistic: function(e, t) {
      var n = Ye();
      return sm(n, ke, e, t);
    },
    useMemoCache: Lr,
    useCacheRefresh: km
  };
  $r.useEffectEvent = bm;
  var Pm = {
    readContext: nt,
    use: ho,
    useCallback: Sm,
    useContext: nt,
    useEffect: Xr,
    useImperativeHandle: Nm,
    useInsertionEffect: vm,
    useLayoutEffect: xm,
    useMemo: Dm,
    useReducer: qr,
    useRef: hm,
    useState: function() {
      return qr(dn);
    },
    useDebugValue: Fr,
    useDeferredValue: function(e, t) {
      var n = Ye();
      return ke === null ? Qr(n, e, t) : Em(
        n,
        ke.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = qr(dn)[0], t = Ye().memoizedState;
      return [
        typeof e == "boolean" ? e : Za(e),
        t
      ];
    },
    useSyncExternalStore: Id,
    useId: Cm,
    useHostTransitionStatus: Kr,
    useFormState: pm,
    useActionState: pm,
    useOptimistic: function(e, t) {
      var n = Ye();
      return ke !== null ? sm(n, ke, e, t) : (n.baseState = e, [e, n.queue.dispatch]);
    },
    useMemoCache: Lr,
    useCacheRefresh: km
  };
  Pm.useEffectEvent = bm;
  function Wr(e, t, n, a) {
    t = e.memoizedState, n = n(a, t), n = n == null ? t : y({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Ir = {
    enqueueSetState: function(e, t, n) {
      e = e._reactInternals;
      var a = Bt(), l = jn(a);
      l.payload = t, n != null && (l.callback = n), t = Mn(e, l, a), t !== null && (vt(t, e, a), Ya(t, e, a));
    },
    enqueueReplaceState: function(e, t, n) {
      e = e._reactInternals;
      var a = Bt(), l = jn(a);
      l.tag = 1, l.payload = t, n != null && (l.callback = n), t = Mn(e, l, a), t !== null && (vt(t, e, a), Ya(t, e, a));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var n = Bt(), a = jn(n);
      a.tag = 2, t != null && (a.callback = t), t = Mn(e, a, n), t !== null && (vt(t, e, n), Ya(t, e, n));
    }
  };
  function _m(e, t, n, a, l, u, d) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(a, u, d) : t.prototype && t.prototype.isPureReactComponent ? !za(n, a) || !za(l, u) : !0;
  }
  function zm(e, t, n, a) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, a), t.state !== e && Ir.enqueueReplaceState(t, t.state, null);
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
      for (var l in e)
        n[l] === void 0 && (n[l] = e[l]);
    }
    return n;
  }
  function Rm(e) {
    Js(e);
  }
  function Om(e) {
    console.error(e);
  }
  function Um(e) {
    Js(e);
  }
  function yo(e, t) {
    try {
      var n = e.onUncaughtError;
      n(t.value, { componentStack: t.stack });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function Lm(e, t, n) {
    try {
      var a = e.onCaughtError;
      a(n.value, {
        componentStack: n.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      });
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  function eu(e, t, n) {
    return n = jn(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
      yo(e, t);
    }, n;
  }
  function Hm(e) {
    return e = jn(e), e.tag = 3, e;
  }
  function qm(e, t, n, a) {
    var l = n.type.getDerivedStateFromError;
    if (typeof l == "function") {
      var u = a.value;
      e.payload = function() {
        return l(u);
      }, e.callback = function() {
        Lm(t, n, a);
      };
    }
    var d = n.stateNode;
    d !== null && typeof d.componentDidCatch == "function" && (e.callback = function() {
      Lm(t, n, a), typeof l != "function" && (Un === null ? Un = /* @__PURE__ */ new Set([this]) : Un.add(this));
      var x = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: x !== null ? x : ""
      });
    });
  }
  function Rx(e, t, n, a, l) {
    if (n.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (t = n.alternate, t !== null && Xi(
        t,
        n,
        l,
        !0
      ), n = Tt.current, n !== null) {
        switch (n.tag) {
          case 31:
          case 13:
            return Ot === null ? jo() : n.alternate === null && He === 0 && (He = 3), n.flags &= -257, n.flags |= 65536, n.lanes = l, a === oo ? n.flags |= 16384 : (t = n.updateQueue, t === null ? n.updateQueue = /* @__PURE__ */ new Set([a]) : t.add(a), wu(e, a, l)), !1;
          case 22:
            return n.flags |= 65536, a === oo ? n.flags |= 16384 : (t = n.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, n.updateQueue = t) : (n = t.retryQueue, n === null ? t.retryQueue = /* @__PURE__ */ new Set([a]) : n.add(a)), wu(e, a, l)), !1;
        }
        throw Error(r(435, n.tag));
      }
      return wu(e, a, l), jo(), !1;
    }
    if (Ne)
      return t = Tt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = l, a !== xr && (e = Error(r(422), { cause: a }), Ua(Pt(e, n)))) : (a !== xr && (t = Error(r(423), {
        cause: a
      }), Ua(
        Pt(t, n)
      )), e = e.current.alternate, e.flags |= 65536, l &= -l, e.lanes |= l, a = Pt(a, n), l = eu(
        e.stateNode,
        a,
        l
      ), Br(e, l), He !== 4 && (He = 2)), !1;
    var u = Error(r(520), { cause: a });
    if (u = Pt(u, n), as === null ? as = [u] : as.push(u), He !== 4 && (He = 2), t === null) return !0;
    a = Pt(a, n), n = t;
    do {
      switch (n.tag) {
        case 3:
          return n.flags |= 65536, e = l & -l, n.lanes |= e, e = eu(n.stateNode, a, e), Br(n, e), !1;
        case 1:
          if (t = n.type, u = n.stateNode, (n.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (Un === null || !Un.has(u))))
            return n.flags |= 65536, l &= -l, n.lanes |= l, l = Hm(l), qm(
              l,
              e,
              n,
              a
            ), Br(n, l), !1;
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var tu = Error(r(461)), Qe = !1;
  function it(e, t, n, a) {
    t.child = e === null ? Fd(t, null, n, a) : pi(
      t,
      e.child,
      n,
      a
    );
  }
  function Gm(e, t, n, a, l) {
    n = n.render;
    var u = t.ref;
    if ("ref" in a) {
      var d = {};
      for (var x in a)
        x !== "ref" && (d[x] = a[x]);
    } else d = a;
    return ci(t), a = zr(
      e,
      t,
      n,
      d,
      u,
      l
    ), x = Rr(), e !== null && !Qe ? (Or(e, t, l), mn(e, t, l)) : (Ne && x && br(t), t.flags |= 1, it(e, t, a, l), t.child);
  }
  function Ym(e, t, n, a, l) {
    if (e === null) {
      var u = n.type;
      return typeof u == "function" && !pr(u) && u.defaultProps === void 0 && n.compare === null ? (t.tag = 15, t.type = u, Xm(
        e,
        t,
        u,
        a,
        l
      )) : (e = eo(
        n.type,
        null,
        a,
        t,
        t.mode,
        l
      ), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (u = e.child, !uu(e, l)) {
      var d = u.memoizedProps;
      if (n = n.compare, n = n !== null ? n : za, n(d, a) && e.ref === t.ref)
        return mn(e, t, l);
    }
    return t.flags |= 1, e = ln(u, a), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Xm(e, t, n, a, l) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (za(u, a) && e.ref === t.ref)
        if (Qe = !1, t.pendingProps = a = u, uu(e, l))
          (e.flags & 131072) !== 0 && (Qe = !0);
        else
          return t.lanes = e.lanes, mn(e, t, l);
    }
    return nu(
      e,
      t,
      n,
      a,
      l
    );
  }
  function Fm(e, t, n, a) {
    var l = a.children, u = e !== null ? e.memoizedState : null;
    if (e === null && t.stateNode === null && (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), a.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (u = u !== null ? u.baseLanes | n : n, e !== null) {
          for (a = t.child = e.child, l = 0; a !== null; )
            l = l | a.lanes | a.childLanes, a = a.sibling;
          a = l & ~u;
        } else a = 0, t.child = null;
        return Qm(
          e,
          t,
          u,
          n,
          a
        );
      }
      if ((n & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && ao(
          t,
          u !== null ? u.cachePool : null
        ), u !== null ? Kd(t, u) : jr(), Jd(t);
      else
        return a = t.lanes = 536870912, Qm(
          e,
          t,
          u !== null ? u.baseLanes | n : n,
          n,
          a
        );
    } else
      u !== null ? (ao(t, u.cachePool), Kd(t, u), _n(), t.memoizedState = null) : (e !== null && ao(t, null), jr(), _n());
    return it(e, t, l, n), t.child;
  }
  function $a(e, t) {
    return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function Qm(e, t, n, a, l) {
    var u = Tr();
    return u = u === null ? null : { parent: Xe._currentValue, pool: u }, t.memoizedState = {
      baseLanes: n,
      cachePool: u
    }, e !== null && ao(t, null), jr(), Jd(t), e !== null && Xi(e, t, a, !0), t.childLanes = l, null;
  }
  function No(e, t) {
    return t = Do(
      { mode: t.mode, children: t.children },
      e.mode
    ), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function Zm(e, t, n) {
    return pi(t, e.child, null, n), e = No(t, t.pendingProps), e.flags |= 2, Vt(t), t.memoizedState = null, e;
  }
  function Ox(e, t, n) {
    var a = t.pendingProps, l = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (Ne) {
        if (a.mode === "hidden")
          return e = No(t, a), t.lanes = 536870912, $a(null, e);
        if (Pr(t), (e = _e) ? (e = oh(
          e,
          Rt
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: Vn !== null ? { id: Kt, overflow: Jt } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = Ad(e), n.return = t, t.child = n, tt = t, _e = null)) : e = null, e === null) throw kn(t);
        return t.lanes = 536870912, null;
      }
      return No(t, a);
    }
    var u = e.memoizedState;
    if (u !== null) {
      var d = u.dehydrated;
      if (Pr(t), l)
        if (t.flags & 256)
          t.flags &= -257, t = Zm(
            e,
            t,
            n
          );
        else if (t.memoizedState !== null)
          t.child = e.child, t.flags |= 128, t = null;
        else throw Error(r(558));
      else if (Qe || Xi(e, t, n, !1), l = (n & e.childLanes) !== 0, Qe || l) {
        if (a = je, a !== null && (d = Of(a, n), d !== 0 && d !== u.retryLane))
          throw u.retryLane = d, oi(e, d), vt(a, e, d), tu;
        jo(), t = Zm(
          e,
          t,
          n
        );
      } else
        e = u.treeContext, _e = Ut(d.nextSibling), tt = t, Ne = !0, Cn = null, Rt = !1, e !== null && Pd(t, e), t = No(t, a), t.flags |= 4096;
      return t;
    }
    return e = ln(e.child, {
      mode: a.mode,
      children: a.children
    }), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function So(e, t) {
    var n = t.ref;
    if (n === null)
      e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object")
        throw Error(r(284));
      (e === null || e.ref !== n) && (t.flags |= 4194816);
    }
  }
  function nu(e, t, n, a, l) {
    return ci(t), n = zr(
      e,
      t,
      n,
      a,
      void 0,
      l
    ), a = Rr(), e !== null && !Qe ? (Or(e, t, l), mn(e, t, l)) : (Ne && a && br(t), t.flags |= 1, it(e, t, n, l), t.child);
  }
  function Km(e, t, n, a, l, u) {
    return ci(t), t.updateQueue = null, n = Wd(
      t,
      a,
      n,
      l
    ), $d(e), a = Rr(), e !== null && !Qe ? (Or(e, t, u), mn(e, t, u)) : (Ne && a && br(t), t.flags |= 1, it(e, t, n, u), t.child);
  }
  function Jm(e, t, n, a, l) {
    if (ci(t), t.stateNode === null) {
      var u = Hi, d = n.contextType;
      typeof d == "object" && d !== null && (u = nt(d)), u = new n(a, u), t.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = Ir, t.stateNode = u, u._reactInternals = t, u = t.stateNode, u.props = a, u.state = t.memoizedState, u.refs = {}, Cr(t), d = n.contextType, u.context = typeof d == "object" && d !== null ? nt(d) : Hi, u.state = t.memoizedState, d = n.getDerivedStateFromProps, typeof d == "function" && (Wr(
        t,
        n,
        d,
        a
      ), u.state = t.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (d = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), d !== u.state && Ir.enqueueReplaceState(u, u.state, null), Fa(t, a, u, l), Xa(), u.state = t.memoizedState), typeof u.componentDidMount == "function" && (t.flags |= 4194308), a = !0;
    } else if (e === null) {
      u = t.stateNode;
      var x = t.memoizedProps, S = gi(n, x);
      u.props = S;
      var k = u.context, _ = n.contextType;
      d = Hi, typeof _ == "object" && _ !== null && (d = nt(_));
      var U = n.getDerivedStateFromProps;
      _ = typeof U == "function" || typeof u.getSnapshotBeforeUpdate == "function", x = t.pendingProps !== x, _ || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (x || k !== d) && zm(
        t,
        u,
        a,
        d
      ), An = !1;
      var A = t.memoizedState;
      u.state = A, Fa(t, a, u, l), Xa(), k = t.memoizedState, x || A !== k || An ? (typeof U == "function" && (Wr(
        t,
        n,
        U,
        a
      ), k = t.memoizedState), (S = An || _m(
        t,
        n,
        S,
        a,
        A,
        k,
        d
      )) ? (_ || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = k), u.props = a, u.state = k, u.context = d, a = S) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), a = !1);
    } else {
      u = t.stateNode, kr(e, t), d = t.memoizedProps, _ = gi(n, d), u.props = _, U = t.pendingProps, A = u.context, k = n.contextType, S = Hi, typeof k == "object" && k !== null && (S = nt(k)), x = n.getDerivedStateFromProps, (k = typeof x == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (d !== U || A !== S) && zm(
        t,
        u,
        a,
        S
      ), An = !1, A = t.memoizedState, u.state = A, Fa(t, a, u, l), Xa();
      var M = t.memoizedState;
      d !== U || A !== M || An || e !== null && e.dependencies !== null && no(e.dependencies) ? (typeof x == "function" && (Wr(
        t,
        n,
        x,
        a
      ), M = t.memoizedState), (_ = An || _m(
        t,
        n,
        _,
        a,
        A,
        M,
        S
      ) || e !== null && e.dependencies !== null && no(e.dependencies)) ? (k || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(a, M, S), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(
        a,
        M,
        S
      )), typeof u.componentDidUpdate == "function" && (t.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || d === e.memoizedProps && A === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && A === e.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = M), u.props = a, u.state = M, u.context = S, a = _) : (typeof u.componentDidUpdate != "function" || d === e.memoizedProps && A === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && A === e.memoizedState || (t.flags |= 1024), a = !1);
    }
    return u = a, So(e, t), a = (t.flags & 128) !== 0, u || a ? (u = t.stateNode, n = a && typeof n.getDerivedStateFromError != "function" ? null : u.render(), t.flags |= 1, e !== null && a ? (t.child = pi(
      t,
      e.child,
      null,
      l
    ), t.child = pi(
      t,
      null,
      n,
      l
    )) : it(e, t, n, l), t.memoizedState = u.state, e = t.child) : e = mn(
      e,
      t,
      l
    ), e;
  }
  function $m(e, t, n, a) {
    return ri(), t.flags |= 256, it(e, t, n, a), t.child;
  }
  var iu = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function au(e) {
    return { baseLanes: e, cachePool: Ld() };
  }
  function su(e, t, n) {
    return e = e !== null ? e.childLanes & ~n : 0, t && (e |= kt), e;
  }
  function Wm(e, t, n) {
    var a = t.pendingProps, l = !1, u = (t.flags & 128) !== 0, d;
    if ((d = u) || (d = e !== null && e.memoizedState === null ? !1 : (Ge.current & 2) !== 0), d && (l = !0, t.flags &= -129), d = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (Ne) {
        if (l ? Pn(t) : _n(), (e = _e) ? (e = oh(
          e,
          Rt
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: Vn !== null ? { id: Kt, overflow: Jt } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = Ad(e), n.return = t, t.child = n, tt = t, _e = null)) : e = null, e === null) throw kn(t);
        return Hu(e) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var x = a.children;
      return a = a.fallback, l ? (_n(), l = t.mode, x = Do(
        { mode: "hidden", children: x },
        l
      ), a = li(
        a,
        l,
        n,
        null
      ), x.return = t, a.return = t, x.sibling = a, t.child = x, a = t.child, a.memoizedState = au(n), a.childLanes = su(
        e,
        d,
        n
      ), t.memoizedState = iu, $a(null, a)) : (Pn(t), ou(t, x));
    }
    var S = e.memoizedState;
    if (S !== null && (x = S.dehydrated, x !== null)) {
      if (u)
        t.flags & 256 ? (Pn(t), t.flags &= -257, t = lu(
          e,
          t,
          n
        )) : t.memoizedState !== null ? (_n(), t.child = e.child, t.flags |= 128, t = null) : (_n(), x = a.fallback, l = t.mode, a = Do(
          { mode: "visible", children: a.children },
          l
        ), x = li(
          x,
          l,
          n,
          null
        ), x.flags |= 2, a.return = t, x.return = t, a.sibling = x, t.child = a, pi(
          t,
          e.child,
          null,
          n
        ), a = t.child, a.memoizedState = au(n), a.childLanes = su(
          e,
          d,
          n
        ), t.memoizedState = iu, t = $a(null, a));
      else if (Pn(t), Hu(x)) {
        if (d = x.nextSibling && x.nextSibling.dataset, d) var k = d.dgst;
        d = k, a = Error(r(419)), a.stack = "", a.digest = d, Ua({ value: a, source: null, stack: null }), t = lu(
          e,
          t,
          n
        );
      } else if (Qe || Xi(e, t, n, !1), d = (n & e.childLanes) !== 0, Qe || d) {
        if (d = je, d !== null && (a = Of(d, n), a !== 0 && a !== S.retryLane))
          throw S.retryLane = a, oi(e, a), vt(d, e, a), tu;
        Lu(x) || jo(), t = lu(
          e,
          t,
          n
        );
      } else
        Lu(x) ? (t.flags |= 192, t.child = e.child, t = null) : (e = S.treeContext, _e = Ut(
          x.nextSibling
        ), tt = t, Ne = !0, Cn = null, Rt = !1, e !== null && Pd(t, e), t = ou(
          t,
          a.children
        ), t.flags |= 4096);
      return t;
    }
    return l ? (_n(), x = a.fallback, l = t.mode, S = e.child, k = S.sibling, a = ln(S, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = S.subtreeFlags & 65011712, k !== null ? x = ln(
      k,
      x
    ) : (x = li(
      x,
      l,
      n,
      null
    ), x.flags |= 2), x.return = t, a.return = t, a.sibling = x, t.child = a, $a(null, a), a = t.child, x = e.child.memoizedState, x === null ? x = au(n) : (l = x.cachePool, l !== null ? (S = Xe._currentValue, l = l.parent !== S ? { parent: S, pool: S } : l) : l = Ld(), x = {
      baseLanes: x.baseLanes | n,
      cachePool: l
    }), a.memoizedState = x, a.childLanes = su(
      e,
      d,
      n
    ), t.memoizedState = iu, $a(e.child, a)) : (Pn(t), n = e.child, e = n.sibling, n = ln(n, {
      mode: "visible",
      children: a.children
    }), n.return = t, n.sibling = null, e !== null && (d = t.deletions, d === null ? (t.deletions = [e], t.flags |= 16) : d.push(e)), t.child = n, t.memoizedState = null, n);
  }
  function ou(e, t) {
    return t = Do(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function Do(e, t) {
    return e = wt(22, e, null, t), e.lanes = 0, e;
  }
  function lu(e, t, n) {
    return pi(t, e.child, null, n), e = ou(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function Im(e, t, n) {
    e.lanes |= t;
    var a = e.alternate;
    a !== null && (a.lanes |= t), Sr(e.return, t, n);
  }
  function ru(e, t, n, a, l, u) {
    var d = e.memoizedState;
    d === null ? e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: a,
      tail: n,
      tailMode: l,
      treeForkCount: u
    } : (d.isBackwards = t, d.rendering = null, d.renderingStartTime = 0, d.last = a, d.tail = n, d.tailMode = l, d.treeForkCount = u);
  }
  function ep(e, t, n) {
    var a = t.pendingProps, l = a.revealOrder, u = a.tail;
    a = a.children;
    var d = Ge.current, x = (d & 2) !== 0;
    if (x ? (d = d & 1 | 2, t.flags |= 128) : d &= 1, $(Ge, d), it(e, t, a, n), a = Ne ? Oa : 0, !x && e !== null && (e.flags & 128) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13)
          e.memoizedState !== null && Im(e, n, t);
        else if (e.tag === 19)
          Im(e, n, t);
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
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          e = n.alternate, e !== null && co(e) === null && (l = n), n = n.sibling;
        n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), ru(
          t,
          !1,
          l,
          n,
          u,
          a
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (e = l.alternate, e !== null && co(e) === null) {
            t.child = l;
            break;
          }
          e = l.sibling, l.sibling = n, n = l, l = e;
        }
        ru(
          t,
          !0,
          n,
          null,
          u,
          a
        );
        break;
      case "together":
        ru(
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
  function mn(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), On |= t.lanes, (n & t.childLanes) === 0)
      if (e !== null) {
        if (Xi(
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
      for (e = t.child, n = ln(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
        e = e.sibling, n = n.sibling = ln(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function uu(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && no(e)));
  }
  function Ux(e, t, n) {
    switch (t.tag) {
      case 3:
        rt(t, t.stateNode.containerInfo), Bn(t, Xe, e.memoizedState.cache), ri();
        break;
      case 27:
      case 5:
        Da(t);
        break;
      case 4:
        rt(t, t.stateNode.containerInfo);
        break;
      case 10:
        Bn(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 31:
        if (t.memoizedState !== null)
          return t.flags |= 128, Pr(t), null;
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null)
          return a.dehydrated !== null ? (Pn(t), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? Wm(e, t, n) : (Pn(t), e = mn(
            e,
            t,
            n
          ), e !== null ? e.sibling : null);
        Pn(t);
        break;
      case 19:
        var l = (e.flags & 128) !== 0;
        if (a = (n & t.childLanes) !== 0, a || (Xi(
          e,
          t,
          n,
          !1
        ), a = (n & t.childLanes) !== 0), l) {
          if (a)
            return ep(
              e,
              t,
              n
            );
          t.flags |= 128;
        }
        if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), $(Ge, Ge.current), a) break;
        return null;
      case 22:
        return t.lanes = 0, Fm(
          e,
          t,
          n,
          t.pendingProps
        );
      case 24:
        Bn(t, Xe, e.memoizedState.cache);
    }
    return mn(e, t, n);
  }
  function tp(e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        Qe = !0;
      else {
        if (!uu(e, n) && (t.flags & 128) === 0)
          return Qe = !1, Ux(
            e,
            t,
            n
          );
        Qe = (e.flags & 131072) !== 0;
      }
    else
      Qe = !1, Ne && (t.flags & 1048576) !== 0 && Md(t, Oa, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var a = t.pendingProps;
          if (e = di(t.elementType), t.type = e, typeof e == "function")
            pr(e) ? (a = gi(e, a), t.tag = 1, t = Jm(
              null,
              t,
              e,
              a,
              n
            )) : (t.tag = 0, t = nu(
              null,
              t,
              e,
              a,
              n
            ));
          else {
            if (e != null) {
              var l = e.$$typeof;
              if (l === q) {
                t.tag = 11, t = Gm(
                  null,
                  t,
                  e,
                  a,
                  n
                );
                break e;
              } else if (l === Q) {
                t.tag = 14, t = Ym(
                  null,
                  t,
                  e,
                  a,
                  n
                );
                break e;
              }
            }
            throw t = ce(e) || e, Error(r(306, t, ""));
          }
        }
        return t;
      case 0:
        return nu(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 1:
        return a = t.type, l = gi(
          a,
          t.pendingProps
        ), Jm(
          e,
          t,
          a,
          l,
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
          l = u.element, kr(e, t), Fa(t, a, null, n);
          var d = t.memoizedState;
          if (a = d.cache, Bn(t, Xe, a), a !== u.cache && Dr(
            t,
            [Xe],
            n,
            !0
          ), Xa(), a = d.element, u.isDehydrated)
            if (u = {
              element: a,
              isDehydrated: !1,
              cache: d.cache
            }, t.updateQueue.baseState = u, t.memoizedState = u, t.flags & 256) {
              t = $m(
                e,
                t,
                a,
                n
              );
              break e;
            } else if (a !== l) {
              l = Pt(
                Error(r(424)),
                t
              ), Ua(l), t = $m(
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
              for (_e = Ut(e.firstChild), tt = t, Ne = !0, Cn = null, Rt = !0, n = Fd(
                t,
                null,
                a,
                n
              ), t.child = n; n; )
                n.flags = n.flags & -3 | 4096, n = n.sibling;
            }
          else {
            if (ri(), a === l) {
              t = mn(
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
        return So(e, t), e === null ? (n = dh(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = n : Ne || (n = t.type, e = t.pendingProps, a = Uo(
          de.current
        ).createElement(n), a[et] = t, a[dt] = e, at(a, n, e), We(a), t.stateNode = a) : t.memoizedState = dh(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return Da(t), e === null && Ne && (a = t.stateNode = uh(
          t.type,
          t.pendingProps,
          de.current
        ), tt = t, Rt = !0, l = _e, Gn(t.type) ? (qu = l, _e = Ut(a.firstChild)) : _e = l), it(
          e,
          t,
          t.pendingProps.children,
          n
        ), So(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && Ne && ((l = a = _e) && (a = h1(
          a,
          t.type,
          t.pendingProps,
          Rt
        ), a !== null ? (t.stateNode = a, tt = t, _e = Ut(a.firstChild), Rt = !1, l = !0) : l = !1), l || kn(t)), Da(t), l = t.type, u = t.pendingProps, d = e !== null ? e.memoizedProps : null, a = u.children, Ru(l, u) ? a = null : d !== null && Ru(l, d) && (t.flags |= 32), t.memoizedState !== null && (l = zr(
          e,
          t,
          Bx,
          null,
          null,
          n
        ), ds._currentValue = l), So(e, t), it(e, t, a, n), t.child;
      case 6:
        return e === null && Ne && ((e = n = _e) && (n = g1(
          n,
          t.pendingProps,
          Rt
        ), n !== null ? (t.stateNode = n, tt = t, _e = null, e = !0) : e = !1), e || kn(t)), null;
      case 13:
        return Wm(e, t, n);
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
        return Gm(
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
        return a = t.pendingProps, Bn(t, t.type, a.value), it(e, t, a.children, n), t.child;
      case 9:
        return l = t.type._context, a = t.pendingProps.children, ci(t), l = nt(l), a = a(l), t.flags |= 1, it(e, t, a, n), t.child;
      case 14:
        return Ym(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 15:
        return Xm(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 19:
        return ep(e, t, n);
      case 31:
        return Ox(e, t, n);
      case 22:
        return Fm(
          e,
          t,
          n,
          t.pendingProps
        );
      case 24:
        return ci(t), a = nt(Xe), e === null ? (l = Tr(), l === null && (l = je, u = Er(), l.pooledCache = u, u.refCount++, u !== null && (l.pooledCacheLanes |= n), l = u), t.memoizedState = { parent: a, cache: l }, Cr(t), Bn(t, Xe, l)) : ((e.lanes & n) !== 0 && (kr(e, t), Fa(t, null, null, n), Xa()), l = e.memoizedState, u = t.memoizedState, l.parent !== a ? (l = { parent: a, cache: a }, t.memoizedState = l, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = l), Bn(t, Xe, a)) : (a = u.cache, Bn(t, Xe, a), a !== l.cache && Dr(
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
  function pn(e) {
    e.flags |= 4;
  }
  function cu(e, t, n, a, l) {
    if ((t = (e.mode & 32) !== 0) && (t = !1), t) {
      if (e.flags |= 16777216, (l & 335544128) === l)
        if (e.stateNode.complete) e.flags |= 8192;
        else if (Cp()) e.flags |= 8192;
        else
          throw mi = oo, Vr;
    } else e.flags &= -16777217;
  }
  function np(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !bh(t))
      if (Cp()) e.flags |= 8192;
      else
        throw mi = oo, Vr;
  }
  function Eo(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? _f() : 536870912, e.lanes |= t, ia |= t);
  }
  function Wa(e, t) {
    if (!Ne)
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
  function ze(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, a = 0;
    if (t)
      for (var l = e.child; l !== null; )
        n |= l.lanes | l.childLanes, a |= l.subtreeFlags & 65011712, a |= l.flags & 65011712, l.return = e, l = l.sibling;
    else
      for (l = e.child; l !== null; )
        n |= l.lanes | l.childLanes, a |= l.subtreeFlags, a |= l.flags, l.return = e, l = l.sibling;
    return e.subtreeFlags |= a, e.childLanes = n, t;
  }
  function Lx(e, t, n) {
    var a = t.pendingProps;
    switch (vr(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return ze(t), null;
      case 1:
        return ze(t), null;
      case 3:
        return n = t.stateNode, a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), cn(Xe), qe(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (Yi(t) ? pn(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, yr())), ze(t), null;
      case 26:
        var l = t.type, u = t.memoizedState;
        return e === null ? (pn(t), u !== null ? (ze(t), np(t, u)) : (ze(t), cu(
          t,
          l,
          null,
          a,
          n
        ))) : u ? u !== e.memoizedState ? (pn(t), ze(t), np(t, u)) : (ze(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== a && pn(t), ze(t), cu(
          t,
          l,
          e,
          a,
          n
        )), null;
      case 27:
        if (Ps(t), n = de.current, l = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== a && pn(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(r(166));
            return ze(t), null;
          }
          e = te.current, Yi(t) ? _d(t) : (e = uh(l, a, n), t.stateNode = e, pn(t));
        }
        return ze(t), null;
      case 5:
        if (Ps(t), l = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== a && pn(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(r(166));
            return ze(t), null;
          }
          if (u = te.current, Yi(t))
            _d(t);
          else {
            var d = Uo(
              de.current
            );
            switch (u) {
              case 1:
                u = d.createElementNS(
                  "http://www.w3.org/2000/svg",
                  l
                );
                break;
              case 2:
                u = d.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  l
                );
                break;
              default:
                switch (l) {
                  case "svg":
                    u = d.createElementNS(
                      "http://www.w3.org/2000/svg",
                      l
                    );
                    break;
                  case "math":
                    u = d.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      l
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
                    u = typeof a.is == "string" ? d.createElement(l, { is: a.is }) : d.createElement(l);
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
            e: switch (at(u, l, a), l) {
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
            a && pn(t);
          }
        }
        return ze(t), cu(
          t,
          t.type,
          e === null ? null : e.memoizedProps,
          t.pendingProps,
          n
        ), null;
      case 6:
        if (e && t.stateNode != null)
          e.memoizedProps !== a && pn(t);
        else {
          if (typeof a != "string" && t.stateNode === null)
            throw Error(r(166));
          if (e = de.current, Yi(t)) {
            if (e = t.stateNode, n = t.memoizedProps, a = null, l = tt, l !== null)
              switch (l.tag) {
                case 27:
                case 5:
                  a = l.memoizedProps;
              }
            e[et] = t, e = !!(e.nodeValue === n || a !== null && a.suppressHydrationWarning === !0 || Wp(e.nodeValue, n)), e || kn(t, !0);
          } else
            e = Uo(e).createTextNode(
              a
            ), e[et] = t, t.stateNode = e;
        }
        return ze(t), null;
      case 31:
        if (n = t.memoizedState, e === null || e.memoizedState !== null) {
          if (a = Yi(t), n !== null) {
            if (e === null) {
              if (!a) throw Error(r(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(r(557));
              e[et] = t;
            } else
              ri(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            ze(t), e = !1;
          } else
            n = yr(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), e = !0;
          if (!e)
            return t.flags & 256 ? (Vt(t), t) : (Vt(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(r(558));
        }
        return ze(t), null;
      case 13:
        if (a = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (l = Yi(t), a !== null && a.dehydrated !== null) {
            if (e === null) {
              if (!l) throw Error(r(318));
              if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(r(317));
              l[et] = t;
            } else
              ri(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            ze(t), l = !1;
          } else
            l = yr(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = l), l = !0;
          if (!l)
            return t.flags & 256 ? (Vt(t), t) : (Vt(t), null);
        }
        return Vt(t), (t.flags & 128) !== 0 ? (t.lanes = n, t) : (n = a !== null, e = e !== null && e.memoizedState !== null, n && (a = t.child, l = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (l = a.alternate.memoizedState.cachePool.pool), u = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (u = a.memoizedState.cachePool.pool), u !== l && (a.flags |= 2048)), n !== e && n && (t.child.flags |= 8192), Eo(t, t.updateQueue), ze(t), null);
      case 4:
        return qe(), e === null && ju(t.stateNode.containerInfo), ze(t), null;
      case 10:
        return cn(t.type), ze(t), null;
      case 19:
        if (R(Ge), a = t.memoizedState, a === null) return ze(t), null;
        if (l = (t.flags & 128) !== 0, u = a.rendering, u === null)
          if (l) Wa(a, !1);
          else {
            if (He !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (u = co(e), u !== null) {
                  for (t.flags |= 128, Wa(a, !1), e = u.updateQueue, t.updateQueue = e, Eo(t, e), t.subtreeFlags = 0, e = n, n = t.child; n !== null; )
                    Bd(n, e), n = n.sibling;
                  return $(
                    Ge,
                    Ge.current & 1 | 2
                  ), Ne && rn(t, a.treeForkCount), t.child;
                }
                e = e.sibling;
              }
            a.tail !== null && Nt() > ko && (t.flags |= 128, l = !0, Wa(a, !1), t.lanes = 4194304);
          }
        else {
          if (!l)
            if (e = co(u), e !== null) {
              if (t.flags |= 128, l = !0, e = e.updateQueue, t.updateQueue = e, Eo(t, e), Wa(a, !0), a.tail === null && a.tailMode === "hidden" && !u.alternate && !Ne)
                return ze(t), null;
            } else
              2 * Nt() - a.renderingStartTime > ko && n !== 536870912 && (t.flags |= 128, l = !0, Wa(a, !1), t.lanes = 4194304);
          a.isBackwards ? (u.sibling = t.child, t.child = u) : (e = a.last, e !== null ? e.sibling = u : t.child = u, a.last = u);
        }
        return a.tail !== null ? (e = a.tail, a.rendering = e, a.tail = e.sibling, a.renderingStartTime = Nt(), e.sibling = null, n = Ge.current, $(
          Ge,
          l ? n & 1 | 2 : n & 1
        ), Ne && rn(t, a.treeForkCount), e) : (ze(t), null);
      case 22:
      case 23:
        return Vt(t), Mr(), a = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192), a ? (n & 536870912) !== 0 && (t.flags & 128) === 0 && (ze(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ze(t), n = t.updateQueue, n !== null && Eo(t, n.retryQueue), n = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), a = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), a !== n && (t.flags |= 2048), e !== null && R(fi), null;
      case 24:
        return n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), cn(Xe), ze(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(r(156, t.tag));
  }
  function Hx(e, t) {
    switch (vr(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return cn(Xe), qe(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return Ps(t), null;
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
        return cn(t.type), null;
      case 22:
      case 23:
        return Vt(t), Mr(), e !== null && R(fi), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return cn(Xe), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function ip(e, t) {
    switch (vr(t), t.tag) {
      case 3:
        cn(Xe), qe();
        break;
      case 26:
      case 27:
      case 5:
        Ps(t);
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
        cn(t.type);
        break;
      case 22:
      case 23:
        Vt(t), Mr(), e !== null && R(fi);
        break;
      case 24:
        cn(Xe);
    }
  }
  function Ia(e, t) {
    try {
      var n = t.updateQueue, a = n !== null ? n.lastEffect : null;
      if (a !== null) {
        var l = a.next;
        n = l;
        do {
          if ((n.tag & e) === e) {
            a = void 0;
            var u = n.create, d = n.inst;
            a = u(), d.destroy = a;
          }
          n = n.next;
        } while (n !== l);
      }
    } catch (x) {
      Ce(t, t.return, x);
    }
  }
  function zn(e, t, n) {
    try {
      var a = t.updateQueue, l = a !== null ? a.lastEffect : null;
      if (l !== null) {
        var u = l.next;
        a = u;
        do {
          if ((a.tag & e) === e) {
            var d = a.inst, x = d.destroy;
            if (x !== void 0) {
              d.destroy = void 0, l = t;
              var S = n, k = x;
              try {
                k();
              } catch (_) {
                Ce(
                  l,
                  S,
                  _
                );
              }
            }
          }
          a = a.next;
        } while (a !== u);
      }
    } catch (_) {
      Ce(t, t.return, _);
    }
  }
  function ap(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var n = e.stateNode;
      try {
        Zd(t, n);
      } catch (a) {
        Ce(e, e.return, a);
      }
    }
  }
  function sp(e, t, n) {
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
  function es(e, t) {
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
    } catch (l) {
      Ce(e, t, l);
    }
  }
  function $t(e, t) {
    var n = e.ref, a = e.refCleanup;
    if (n !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (l) {
          Ce(e, t, l);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (l) {
          Ce(e, t, l);
        }
      else n.current = null;
  }
  function op(e) {
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
    } catch (l) {
      Ce(e, e.return, l);
    }
  }
  function fu(e, t, n) {
    try {
      var a = e.stateNode;
      u1(a, e.type, n, t), a[dt] = t;
    } catch (l) {
      Ce(e, e.return, l);
    }
  }
  function lp(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Gn(e.type) || e.tag === 4;
  }
  function du(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || lp(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && Gn(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function mu(e, t, n) {
    var a = e.tag;
    if (a === 5 || a === 6)
      e = e.stateNode, t ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(e, t) : (t = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, t.appendChild(e), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = sn));
    else if (a !== 4 && (a === 27 && Gn(e.type) && (n = e.stateNode, t = null), e = e.child, e !== null))
      for (mu(e, t, n), e = e.sibling; e !== null; )
        mu(e, t, n), e = e.sibling;
  }
  function wo(e, t, n) {
    var a = e.tag;
    if (a === 5 || a === 6)
      e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (a !== 4 && (a === 27 && Gn(e.type) && (n = e.stateNode), e = e.child, e !== null))
      for (wo(e, t, n), e = e.sibling; e !== null; )
        wo(e, t, n), e = e.sibling;
  }
  function rp(e) {
    var t = e.stateNode, n = e.memoizedProps;
    try {
      for (var a = e.type, l = t.attributes; l.length; )
        t.removeAttributeNode(l[0]);
      at(t, a, n), t[et] = e, t[dt] = n;
    } catch (u) {
      Ce(e, e.return, u);
    }
  }
  var hn = !1, Ze = !1, pu = !1, up = typeof WeakSet == "function" ? WeakSet : Set, Ie = null;
  function qx(e, t) {
    if (e = e.containerInfo, _u = Fo, e = Nd(e), lr(e)) {
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
            var l = a.anchorOffset, u = a.focusNode;
            a = a.focusOffset;
            try {
              n.nodeType, u.nodeType;
            } catch {
              n = null;
              break e;
            }
            var d = 0, x = -1, S = -1, k = 0, _ = 0, U = e, A = null;
            t: for (; ; ) {
              for (var M; U !== n || l !== 0 && U.nodeType !== 3 || (x = d + l), U !== u || a !== 0 && U.nodeType !== 3 || (S = d + a), U.nodeType === 3 && (d += U.nodeValue.length), (M = U.firstChild) !== null; )
                A = U, U = M;
              for (; ; ) {
                if (U === e) break t;
                if (A === n && ++k === l && (x = d), A === u && ++_ === a && (S = d), (M = U.nextSibling) !== null) break;
                U = A, A = U.parentNode;
              }
              U = M;
            }
            n = x === -1 || S === -1 ? null : { start: x, end: S };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (zu = { focusedElem: e, selectionRange: n }, Fo = !1, Ie = t; Ie !== null; )
      if (t = Ie, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
        e.return = t, Ie = e;
      else
        for (; Ie !== null; ) {
          switch (t = Ie, u = t.alternate, e = t.flags, t.tag) {
            case 0:
              if ((e & 4) !== 0 && (e = t.updateQueue, e = e !== null ? e.events : null, e !== null))
                for (n = 0; n < e.length; n++)
                  l = e[n], l.ref.impl = l.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && u !== null) {
                e = void 0, n = t, l = u.memoizedProps, u = u.memoizedState, a = n.stateNode;
                try {
                  var ne = gi(
                    n.type,
                    l
                  );
                  e = a.getSnapshotBeforeUpdate(
                    ne,
                    u
                  ), a.__reactInternalSnapshotBeforeUpdate = e;
                } catch (ue) {
                  Ce(
                    n,
                    n.return,
                    ue
                  );
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (e = t.stateNode.containerInfo, n = e.nodeType, n === 9)
                  Uu(e);
                else if (n === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Uu(e);
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
  function cp(e, t, n) {
    var a = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        bn(e, n), a & 4 && Ia(5, n);
        break;
      case 1:
        if (bn(e, n), a & 4)
          if (e = n.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (d) {
              Ce(n, n.return, d);
            }
          else {
            var l = gi(
              n.type,
              t.memoizedProps
            );
            t = t.memoizedState;
            try {
              e.componentDidUpdate(
                l,
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
        a & 64 && ap(n), a & 512 && es(n, n.return);
        break;
      case 3:
        if (bn(e, n), a & 64 && (e = n.updateQueue, e !== null)) {
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
            Zd(e, t);
          } catch (d) {
            Ce(n, n.return, d);
          }
        }
        break;
      case 27:
        t === null && a & 4 && rp(n);
      case 26:
      case 5:
        bn(e, n), t === null && a & 4 && op(n), a & 512 && es(n, n.return);
        break;
      case 12:
        bn(e, n);
        break;
      case 31:
        bn(e, n), a & 4 && mp(e, n);
        break;
      case 13:
        bn(e, n), a & 4 && pp(e, n), a & 64 && (e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null && (n = $x.bind(
          null,
          n
        ), b1(e, n))));
        break;
      case 22:
        if (a = n.memoizedState !== null || hn, !a) {
          t = t !== null && t.memoizedState !== null || Ze, l = hn;
          var u = Ze;
          hn = a, (Ze = t) && !u ? vn(
            e,
            n,
            (n.subtreeFlags & 8772) !== 0
          ) : bn(e, n), hn = l, Ze = u;
        }
        break;
      case 30:
        break;
      default:
        bn(e, n);
    }
  }
  function fp(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, fp(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Yl(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var Re = null, pt = !1;
  function gn(e, t, n) {
    for (n = n.child; n !== null; )
      dp(e, t, n), n = n.sibling;
  }
  function dp(e, t, n) {
    if (St && typeof St.onCommitFiberUnmount == "function")
      try {
        St.onCommitFiberUnmount(Ea, n);
      } catch {
      }
    switch (n.tag) {
      case 26:
        Ze || $t(n, t), gn(
          e,
          t,
          n
        ), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode, n.parentNode.removeChild(n));
        break;
      case 27:
        Ze || $t(n, t);
        var a = Re, l = pt;
        Gn(n.type) && (Re = n.stateNode, pt = !1), gn(
          e,
          t,
          n
        ), us(n.stateNode), Re = a, pt = l;
        break;
      case 5:
        Ze || $t(n, t);
      case 6:
        if (a = Re, l = pt, Re = null, gn(
          e,
          t,
          n
        ), Re = a, pt = l, Re !== null)
          if (pt)
            try {
              (Re.nodeType === 9 ? Re.body : Re.nodeName === "HTML" ? Re.ownerDocument.body : Re).removeChild(n.stateNode);
            } catch (u) {
              Ce(
                n,
                t,
                u
              );
            }
          else
            try {
              Re.removeChild(n.stateNode);
            } catch (u) {
              Ce(
                n,
                t,
                u
              );
            }
        break;
      case 18:
        Re !== null && (pt ? (e = Re, ah(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          n.stateNode
        ), fa(e)) : ah(Re, n.stateNode));
        break;
      case 4:
        a = Re, l = pt, Re = n.stateNode.containerInfo, pt = !0, gn(
          e,
          t,
          n
        ), Re = a, pt = l;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        zn(2, n, t), Ze || zn(4, n, t), gn(
          e,
          t,
          n
        );
        break;
      case 1:
        Ze || ($t(n, t), a = n.stateNode, typeof a.componentWillUnmount == "function" && sp(
          n,
          t,
          a
        )), gn(
          e,
          t,
          n
        );
        break;
      case 21:
        gn(
          e,
          t,
          n
        );
        break;
      case 22:
        Ze = (a = Ze) || n.memoizedState !== null, gn(
          e,
          t,
          n
        ), Ze = a;
        break;
      default:
        gn(
          e,
          t,
          n
        );
    }
  }
  function mp(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        fa(e);
      } catch (n) {
        Ce(t, t.return, n);
      }
    }
  }
  function pp(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        fa(e);
      } catch (n) {
        Ce(t, t.return, n);
      }
  }
  function Gx(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new up()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new up()), t;
      default:
        throw Error(r(435, e.tag));
    }
  }
  function To(e, t) {
    var n = Gx(e);
    t.forEach(function(a) {
      if (!n.has(a)) {
        n.add(a);
        var l = Wx.bind(null, e, a);
        a.then(l, l);
      }
    });
  }
  function ht(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var a = 0; a < n.length; a++) {
        var l = n[a], u = e, d = t, x = d;
        e: for (; x !== null; ) {
          switch (x.tag) {
            case 27:
              if (Gn(x.type)) {
                Re = x.stateNode, pt = !1;
                break e;
              }
              break;
            case 5:
              Re = x.stateNode, pt = !1;
              break e;
            case 3:
            case 4:
              Re = x.stateNode.containerInfo, pt = !0;
              break e;
          }
          x = x.return;
        }
        if (Re === null) throw Error(r(160));
        dp(u, d, l), Re = null, pt = !1, u = l.alternate, u !== null && (u.return = null), l.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        hp(t, e), t = t.sibling;
  }
  var Yt = null;
  function hp(e, t) {
    var n = e.alternate, a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        ht(t, e), gt(e), a & 4 && (zn(3, e, e.return), Ia(3, e), zn(5, e, e.return));
        break;
      case 1:
        ht(t, e), gt(e), a & 512 && (Ze || n === null || $t(n, n.return)), a & 64 && hn && (e = e.updateQueue, e !== null && (a = e.callbacks, a !== null && (n = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = n === null ? a : n.concat(a))));
        break;
      case 26:
        var l = Yt;
        if (ht(t, e), gt(e), a & 512 && (Ze || n === null || $t(n, n.return)), a & 4) {
          var u = n !== null ? n.memoizedState : null;
          if (a = e.memoizedState, n === null)
            if (a === null)
              if (e.stateNode === null) {
                e: {
                  a = e.type, n = e.memoizedProps, l = l.ownerDocument || l;
                  t: switch (a) {
                    case "title":
                      u = l.getElementsByTagName("title")[0], (!u || u[Va] || u[et] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = l.createElement(a), l.head.insertBefore(
                        u,
                        l.querySelector("head > title")
                      )), at(u, a, n), u[et] = e, We(u), a = u;
                      break e;
                    case "link":
                      var d = hh(
                        "link",
                        "href",
                        l
                      ).get(a + (n.href || ""));
                      if (d) {
                        for (var x = 0; x < d.length; x++)
                          if (u = d[x], u.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && u.getAttribute("rel") === (n.rel == null ? null : n.rel) && u.getAttribute("title") === (n.title == null ? null : n.title) && u.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
                            d.splice(x, 1);
                            break t;
                          }
                      }
                      u = l.createElement(a), at(u, a, n), l.head.appendChild(u);
                      break;
                    case "meta":
                      if (d = hh(
                        "meta",
                        "content",
                        l
                      ).get(a + (n.content || ""))) {
                        for (x = 0; x < d.length; x++)
                          if (u = d[x], u.getAttribute("content") === (n.content == null ? null : "" + n.content) && u.getAttribute("name") === (n.name == null ? null : n.name) && u.getAttribute("property") === (n.property == null ? null : n.property) && u.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && u.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
                            d.splice(x, 1);
                            break t;
                          }
                      }
                      u = l.createElement(a), at(u, a, n), l.head.appendChild(u);
                      break;
                    default:
                      throw Error(r(468, a));
                  }
                  u[et] = e, We(u), a = u;
                }
                e.stateNode = a;
              } else
                gh(
                  l,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = ph(
                l,
                a,
                e.memoizedProps
              );
          else
            u !== a ? (u === null ? n.stateNode !== null && (n = n.stateNode, n.parentNode.removeChild(n)) : u.count--, a === null ? gh(
              l,
              e.type,
              e.stateNode
            ) : ph(
              l,
              a,
              e.memoizedProps
            )) : a === null && e.stateNode !== null && fu(
              e,
              e.memoizedProps,
              n.memoizedProps
            );
        }
        break;
      case 27:
        ht(t, e), gt(e), a & 512 && (Ze || n === null || $t(n, n.return)), n !== null && a & 4 && fu(
          e,
          e.memoizedProps,
          n.memoizedProps
        );
        break;
      case 5:
        if (ht(t, e), gt(e), a & 512 && (Ze || n === null || $t(n, n.return)), e.flags & 32) {
          l = e.stateNode;
          try {
            Pi(l, "");
          } catch (ne) {
            Ce(e, e.return, ne);
          }
        }
        a & 4 && e.stateNode != null && (l = e.memoizedProps, fu(
          e,
          l,
          n !== null ? n.memoizedProps : l
        )), a & 1024 && (pu = !0);
        break;
      case 6:
        if (ht(t, e), gt(e), a & 4) {
          if (e.stateNode === null)
            throw Error(r(162));
          a = e.memoizedProps, n = e.stateNode;
          try {
            n.nodeValue = a;
          } catch (ne) {
            Ce(e, e.return, ne);
          }
        }
        break;
      case 3:
        if (qo = null, l = Yt, Yt = Lo(t.containerInfo), ht(t, e), Yt = l, gt(e), a & 4 && n !== null && n.memoizedState.isDehydrated)
          try {
            fa(t.containerInfo);
          } catch (ne) {
            Ce(e, e.return, ne);
          }
        pu && (pu = !1, gp(e));
        break;
      case 4:
        a = Yt, Yt = Lo(
          e.stateNode.containerInfo
        ), ht(t, e), gt(e), Yt = a;
        break;
      case 12:
        ht(t, e), gt(e);
        break;
      case 31:
        ht(t, e), gt(e), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, To(e, a)));
        break;
      case 13:
        ht(t, e), gt(e), e.child.flags & 8192 && e.memoizedState !== null != (n !== null && n.memoizedState !== null) && (Co = Nt()), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, To(e, a)));
        break;
      case 22:
        l = e.memoizedState !== null;
        var S = n !== null && n.memoizedState !== null, k = hn, _ = Ze;
        if (hn = k || l, Ze = _ || S, ht(t, e), Ze = _, hn = k, gt(e), a & 8192)
          e: for (t = e.stateNode, t._visibility = l ? t._visibility & -2 : t._visibility | 1, l && (n === null || S || hn || Ze || bi(e)), n = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (n === null) {
                S = n = t;
                try {
                  if (u = S.stateNode, l)
                    d = u.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none";
                  else {
                    x = S.stateNode;
                    var U = S.memoizedProps.style, A = U != null && U.hasOwnProperty("display") ? U.display : null;
                    x.style.display = A == null || typeof A == "boolean" ? "" : ("" + A).trim();
                  }
                } catch (ne) {
                  Ce(S, S.return, ne);
                }
              }
            } else if (t.tag === 6) {
              if (n === null) {
                S = t;
                try {
                  S.stateNode.nodeValue = l ? "" : S.memoizedProps;
                } catch (ne) {
                  Ce(S, S.return, ne);
                }
              }
            } else if (t.tag === 18) {
              if (n === null) {
                S = t;
                try {
                  var M = S.stateNode;
                  l ? sh(M, !0) : sh(S.stateNode, !1);
                } catch (ne) {
                  Ce(S, S.return, ne);
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
        a & 4 && (a = e.updateQueue, a !== null && (n = a.retryQueue, n !== null && (a.retryQueue = null, To(e, n))));
        break;
      case 19:
        ht(t, e), gt(e), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, To(e, a)));
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
          if (lp(a)) {
            n = a;
            break;
          }
          a = a.return;
        }
        if (n == null) throw Error(r(160));
        switch (n.tag) {
          case 27:
            var l = n.stateNode, u = du(e);
            wo(e, u, l);
            break;
          case 5:
            var d = n.stateNode;
            n.flags & 32 && (Pi(d, ""), n.flags &= -33);
            var x = du(e);
            wo(e, x, d);
            break;
          case 3:
          case 4:
            var S = n.stateNode.containerInfo, k = du(e);
            mu(
              e,
              k,
              S
            );
            break;
          default:
            throw Error(r(161));
        }
      } catch (_) {
        Ce(e, e.return, _);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function gp(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        gp(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
      }
  }
  function bn(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        cp(e, t.alternate, t), t = t.sibling;
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
          $t(t, t.return);
          var n = t.stateNode;
          typeof n.componentWillUnmount == "function" && sp(
            t,
            t.return,
            n
          ), bi(t);
          break;
        case 27:
          us(t.stateNode);
        case 26:
        case 5:
          $t(t, t.return), bi(t);
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
  function vn(e, t, n) {
    for (n = n && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var a = t.alternate, l = e, u = t, d = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          vn(
            l,
            u,
            n
          ), Ia(4, u);
          break;
        case 1:
          if (vn(
            l,
            u,
            n
          ), a = u, l = a.stateNode, typeof l.componentDidMount == "function")
            try {
              l.componentDidMount();
            } catch (k) {
              Ce(a, a.return, k);
            }
          if (a = u, l = a.updateQueue, l !== null) {
            var x = a.stateNode;
            try {
              var S = l.shared.hiddenCallbacks;
              if (S !== null)
                for (l.shared.hiddenCallbacks = null, l = 0; l < S.length; l++)
                  Qd(S[l], x);
            } catch (k) {
              Ce(a, a.return, k);
            }
          }
          n && d & 64 && ap(u), es(u, u.return);
          break;
        case 27:
          rp(u);
        case 26:
        case 5:
          vn(
            l,
            u,
            n
          ), n && a === null && d & 4 && op(u), es(u, u.return);
          break;
        case 12:
          vn(
            l,
            u,
            n
          );
          break;
        case 31:
          vn(
            l,
            u,
            n
          ), n && d & 4 && mp(l, u);
          break;
        case 13:
          vn(
            l,
            u,
            n
          ), n && d & 4 && pp(l, u);
          break;
        case 22:
          u.memoizedState === null && vn(
            l,
            u,
            n
          ), es(u, u.return);
          break;
        case 30:
          break;
        default:
          vn(
            l,
            u,
            n
          );
      }
      t = t.sibling;
    }
  }
  function hu(e, t) {
    var n = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== n && (e != null && e.refCount++, n != null && La(n));
  }
  function gu(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && La(e));
  }
  function Xt(e, t, n, a) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        bp(
          e,
          t,
          n,
          a
        ), t = t.sibling;
  }
  function bp(e, t, n, a) {
    var l = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Xt(
          e,
          t,
          n,
          a
        ), l & 2048 && Ia(9, t);
        break;
      case 1:
        Xt(
          e,
          t,
          n,
          a
        );
        break;
      case 3:
        Xt(
          e,
          t,
          n,
          a
        ), l & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && La(e)));
        break;
      case 12:
        if (l & 2048) {
          Xt(
            e,
            t,
            n,
            a
          ), e = t.stateNode;
          try {
            var u = t.memoizedProps, d = u.id, x = u.onPostCommit;
            typeof x == "function" && x(
              d,
              t.alternate === null ? "mount" : "update",
              e.passiveEffectDuration,
              -0
            );
          } catch (S) {
            Ce(t, t.return, S);
          }
        } else
          Xt(
            e,
            t,
            n,
            a
          );
        break;
      case 31:
        Xt(
          e,
          t,
          n,
          a
        );
        break;
      case 13:
        Xt(
          e,
          t,
          n,
          a
        );
        break;
      case 23:
        break;
      case 22:
        u = t.stateNode, d = t.alternate, t.memoizedState !== null ? u._visibility & 2 ? Xt(
          e,
          t,
          n,
          a
        ) : ts(e, t) : u._visibility & 2 ? Xt(
          e,
          t,
          n,
          a
        ) : (u._visibility |= 2, ea(
          e,
          t,
          n,
          a,
          (t.subtreeFlags & 10256) !== 0 || !1
        )), l & 2048 && hu(d, t);
        break;
      case 24:
        Xt(
          e,
          t,
          n,
          a
        ), l & 2048 && gu(t.alternate, t);
        break;
      default:
        Xt(
          e,
          t,
          n,
          a
        );
    }
  }
  function ea(e, t, n, a, l) {
    for (l = l && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var u = e, d = t, x = n, S = a, k = d.flags;
      switch (d.tag) {
        case 0:
        case 11:
        case 15:
          ea(
            u,
            d,
            x,
            S,
            l
          ), Ia(8, d);
          break;
        case 23:
          break;
        case 22:
          var _ = d.stateNode;
          d.memoizedState !== null ? _._visibility & 2 ? ea(
            u,
            d,
            x,
            S,
            l
          ) : ts(
            u,
            d
          ) : (_._visibility |= 2, ea(
            u,
            d,
            x,
            S,
            l
          )), l && k & 2048 && hu(
            d.alternate,
            d
          );
          break;
        case 24:
          ea(
            u,
            d,
            x,
            S,
            l
          ), l && k & 2048 && gu(d.alternate, d);
          break;
        default:
          ea(
            u,
            d,
            x,
            S,
            l
          );
      }
      t = t.sibling;
    }
  }
  function ts(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var n = e, a = t, l = a.flags;
        switch (a.tag) {
          case 22:
            ts(n, a), l & 2048 && hu(
              a.alternate,
              a
            );
            break;
          case 24:
            ts(n, a), l & 2048 && gu(a.alternate, a);
            break;
          default:
            ts(n, a);
        }
        t = t.sibling;
      }
  }
  var ns = 8192;
  function ta(e, t, n) {
    if (e.subtreeFlags & ns)
      for (e = e.child; e !== null; )
        vp(
          e,
          t,
          n
        ), e = e.sibling;
  }
  function vp(e, t, n) {
    switch (e.tag) {
      case 26:
        ta(
          e,
          t,
          n
        ), e.flags & ns && e.memoizedState !== null && k1(
          n,
          Yt,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        ta(
          e,
          t,
          n
        );
        break;
      case 3:
      case 4:
        var a = Yt;
        Yt = Lo(e.stateNode.containerInfo), ta(
          e,
          t,
          n
        ), Yt = a;
        break;
      case 22:
        e.memoizedState === null && (a = e.alternate, a !== null && a.memoizedState !== null ? (a = ns, ns = 16777216, ta(
          e,
          t,
          n
        ), ns = a) : ta(
          e,
          t,
          n
        ));
        break;
      default:
        ta(
          e,
          t,
          n
        );
    }
  }
  function xp(e) {
    var t = e.alternate;
    if (t !== null && (e = t.child, e !== null)) {
      t.child = null;
      do
        t = e.sibling, e.sibling = null, e = t;
      while (e !== null);
    }
  }
  function is(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var a = t[n];
          Ie = a, Np(
            a,
            e
          );
        }
      xp(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        yp(e), e = e.sibling;
  }
  function yp(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        is(e), e.flags & 2048 && zn(9, e, e.return);
        break;
      case 3:
        is(e);
        break;
      case 12:
        is(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, Vo(e)) : is(e);
        break;
      default:
        is(e);
    }
  }
  function Vo(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var a = t[n];
          Ie = a, Np(
            a,
            e
          );
        }
      xp(e);
    }
    for (e = e.child; e !== null; ) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          zn(8, t, t.return), Vo(t);
          break;
        case 22:
          n = t.stateNode, n._visibility & 2 && (n._visibility &= -3, Vo(t));
          break;
        default:
          Vo(t);
      }
      e = e.sibling;
    }
  }
  function Np(e, t) {
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
          La(n.memoizedState.cache);
      }
      if (a = n.child, a !== null) a.return = n, Ie = a;
      else
        e: for (n = e; Ie !== null; ) {
          a = Ie;
          var l = a.sibling, u = a.return;
          if (fp(a), a === n) {
            Ie = null;
            break e;
          }
          if (l !== null) {
            l.return = u, Ie = l;
            break e;
          }
          Ie = u;
        }
    }
  }
  var Yx = {
    getCacheForType: function(e) {
      var t = nt(Xe), n = t.data.get(e);
      return n === void 0 && (n = e(), t.data.set(e, n)), n;
    },
    cacheSignal: function() {
      return nt(Xe).controller.signal;
    }
  }, Xx = typeof WeakMap == "function" ? WeakMap : Map, we = 0, je = null, ge = null, ve = 0, Ve = 0, Ct = null, Rn = !1, na = !1, bu = !1, xn = 0, He = 0, On = 0, vi = 0, vu = 0, kt = 0, ia = 0, as = null, bt = null, xu = !1, Co = 0, Sp = 0, ko = 1 / 0, Bo = null, Un = null, Je = 0, Ln = null, aa = null, yn = 0, yu = 0, Nu = null, Dp = null, ss = 0, Su = null;
  function Bt() {
    return (we & 2) !== 0 && ve !== 0 ? ve & -ve : j.T !== null ? Cu() : Uf();
  }
  function Ep() {
    if (kt === 0)
      if ((ve & 536870912) === 0 || Ne) {
        var e = Rs;
        Rs <<= 1, (Rs & 3932160) === 0 && (Rs = 262144), kt = e;
      } else kt = 536870912;
    return e = Tt.current, e !== null && (e.flags |= 32), kt;
  }
  function vt(e, t, n) {
    (e === je && (Ve === 2 || Ve === 9) || e.cancelPendingCommit !== null) && (sa(e, 0), Hn(
      e,
      ve,
      kt,
      !1
    )), Ta(e, n), ((we & 2) === 0 || e !== je) && (e === je && ((we & 2) === 0 && (vi |= n), He === 4 && Hn(
      e,
      ve,
      kt,
      !1
    )), Wt(e));
  }
  function wp(e, t, n) {
    if ((we & 6) !== 0) throw Error(r(327));
    var a = !n && (t & 127) === 0 && (t & e.expiredLanes) === 0 || wa(e, t), l = a ? Zx(e, t) : Eu(e, t, !0), u = a;
    do {
      if (l === 0) {
        na && !a && Hn(e, t, 0, !1);
        break;
      } else {
        if (n = e.current.alternate, u && !Fx(n)) {
          l = Eu(e, t, !1), u = !1;
          continue;
        }
        if (l === 2) {
          if (u = t, e.errorRecoveryDisabledLanes & u)
            var d = 0;
          else
            d = e.pendingLanes & -536870913, d = d !== 0 ? d : d & 536870912 ? 536870912 : 0;
          if (d !== 0) {
            t = d;
            e: {
              var x = e;
              l = as;
              var S = x.current.memoizedState.isDehydrated;
              if (S && (sa(x, d).flags |= 256), d = Eu(
                x,
                d,
                !1
              ), d !== 2) {
                if (bu && !S) {
                  x.errorRecoveryDisabledLanes |= u, vi |= u, l = 4;
                  break e;
                }
                u = bt, bt = l, u !== null && (bt === null ? bt = u : bt.push.apply(
                  bt,
                  u
                ));
              }
              l = d;
            }
            if (u = !1, l !== 2) continue;
          }
        }
        if (l === 1) {
          sa(e, 0), Hn(e, t, 0, !0);
          break;
        }
        e: {
          switch (a = e, u = l, u) {
            case 0:
            case 1:
              throw Error(r(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              Hn(
                a,
                t,
                kt,
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
          if ((t & 62914560) === t && (l = Co + 300 - Nt(), 10 < l)) {
            if (Hn(
              a,
              t,
              kt,
              !Rn
            ), Us(a, 0, !0) !== 0) break e;
            yn = t, a.timeoutHandle = nh(
              Tp.bind(
                null,
                a,
                n,
                bt,
                Bo,
                xu,
                t,
                kt,
                vi,
                ia,
                Rn,
                u,
                "Throttled",
                -0,
                0
              ),
              l
            );
            break e;
          }
          Tp(
            a,
            n,
            bt,
            Bo,
            xu,
            t,
            kt,
            vi,
            ia,
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
    Wt(e);
  }
  function Tp(e, t, n, a, l, u, d, x, S, k, _, U, A, M) {
    if (e.timeoutHandle = -1, U = t.subtreeFlags, U & 8192 || (U & 16785408) === 16785408) {
      U = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: sn
      }, vp(
        t,
        u,
        U
      );
      var ne = (u & 62914560) === u ? Co - Nt() : (u & 4194048) === u ? Sp - Nt() : 0;
      if (ne = B1(
        U,
        ne
      ), ne !== null) {
        yn = u, e.cancelPendingCommit = ne(
          Pp.bind(
            null,
            e,
            t,
            u,
            n,
            a,
            l,
            d,
            x,
            S,
            _,
            U,
            null,
            A,
            M
          )
        ), Hn(e, u, d, !k);
        return;
      }
    }
    Pp(
      e,
      t,
      u,
      n,
      a,
      l,
      d,
      x,
      S
    );
  }
  function Fx(e) {
    for (var t = e; ; ) {
      var n = t.tag;
      if ((n === 0 || n === 11 || n === 15) && t.flags & 16384 && (n = t.updateQueue, n !== null && (n = n.stores, n !== null)))
        for (var a = 0; a < n.length; a++) {
          var l = n[a], u = l.getSnapshot;
          l = l.value;
          try {
            if (!Et(u(), l)) return !1;
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
  function Hn(e, t, n, a) {
    t &= ~vu, t &= ~vi, e.suspendedLanes |= t, e.pingedLanes &= ~t, a && (e.warmLanes |= t), a = e.expirationTimes;
    for (var l = t; 0 < l; ) {
      var u = 31 - Dt(l), d = 1 << u;
      a[u] = -1, l &= ~d;
    }
    n !== 0 && zf(e, n, t);
  }
  function Ao() {
    return (we & 6) === 0 ? (os(0), !1) : !0;
  }
  function Du() {
    if (ge !== null) {
      if (Ve === 0)
        var e = ge.return;
      else
        e = ge, un = ui = null, Ur(e), Ki = null, qa = 0, e = ge;
      for (; e !== null; )
        ip(e.alternate, e), e = e.return;
      ge = null;
    }
  }
  function sa(e, t) {
    var n = e.timeoutHandle;
    n !== -1 && (e.timeoutHandle = -1, d1(n)), n = e.cancelPendingCommit, n !== null && (e.cancelPendingCommit = null, n()), yn = 0, Du(), je = e, ge = n = ln(e.current, null), ve = t, Ve = 0, Ct = null, Rn = !1, na = wa(e, t), bu = !1, ia = kt = vu = vi = On = He = 0, bt = as = null, xu = !1, (t & 8) !== 0 && (t |= t & 32);
    var a = e.entangledLanes;
    if (a !== 0)
      for (e = e.entanglements, a &= t; 0 < a; ) {
        var l = 31 - Dt(a), u = 1 << l;
        t |= e[l], a &= ~u;
      }
    return xn = t, $s(), n;
  }
  function Vp(e, t) {
    pe = null, j.H = Ja, t === Zi || t === so ? (t = Gd(), Ve = 3) : t === Vr ? (t = Gd(), Ve = 4) : Ve = t === tu ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, Ct = t, ge === null && (He = 1, yo(
      e,
      Pt(t, e.current)
    ));
  }
  function Cp() {
    var e = Tt.current;
    return e === null ? !0 : (ve & 4194048) === ve ? Ot === null : (ve & 62914560) === ve || (ve & 536870912) !== 0 ? e === Ot : !1;
  }
  function kp() {
    var e = j.H;
    return j.H = Ja, e === null ? Ja : e;
  }
  function Bp() {
    var e = j.A;
    return j.A = Yx, e;
  }
  function jo() {
    He = 4, Rn || (ve & 4194048) !== ve && Tt.current !== null || (na = !0), (On & 134217727) === 0 && (vi & 134217727) === 0 || je === null || Hn(
      je,
      ve,
      kt,
      !1
    );
  }
  function Eu(e, t, n) {
    var a = we;
    we |= 2;
    var l = kp(), u = Bp();
    (je !== e || ve !== t) && (Bo = null, sa(e, t)), t = !1;
    var d = He;
    e: do
      try {
        if (Ve !== 0 && ge !== null) {
          var x = ge, S = Ct;
          switch (Ve) {
            case 8:
              Du(), d = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Tt.current === null && (t = !0);
              var k = Ve;
              if (Ve = 0, Ct = null, oa(e, x, S, k), n && na) {
                d = 0;
                break e;
              }
              break;
            default:
              k = Ve, Ve = 0, Ct = null, oa(e, x, S, k);
          }
        }
        Qx(), d = He;
        break;
      } catch (_) {
        Vp(e, _);
      }
    while (!0);
    return t && e.shellSuspendCounter++, un = ui = null, we = a, j.H = l, j.A = u, ge === null && (je = null, ve = 0, $s()), d;
  }
  function Qx() {
    for (; ge !== null; ) Ap(ge);
  }
  function Zx(e, t) {
    var n = we;
    we |= 2;
    var a = kp(), l = Bp();
    je !== e || ve !== t ? (Bo = null, ko = Nt() + 500, sa(e, t)) : na = wa(
      e,
      t
    );
    e: do
      try {
        if (Ve !== 0 && ge !== null) {
          t = ge;
          var u = Ct;
          t: switch (Ve) {
            case 1:
              Ve = 0, Ct = null, oa(e, t, u, 1);
              break;
            case 2:
            case 9:
              if (Hd(u)) {
                Ve = 0, Ct = null, jp(t);
                break;
              }
              t = function() {
                Ve !== 2 && Ve !== 9 || je !== e || (Ve = 7), Wt(e);
              }, u.then(t, t);
              break e;
            case 3:
              Ve = 7;
              break e;
            case 4:
              Ve = 5;
              break e;
            case 7:
              Hd(u) ? (Ve = 0, Ct = null, jp(t)) : (Ve = 0, Ct = null, oa(e, t, u, 7));
              break;
            case 5:
              var d = null;
              switch (ge.tag) {
                case 26:
                  d = ge.memoizedState;
                case 5:
                case 27:
                  var x = ge;
                  if (d ? bh(d) : x.stateNode.complete) {
                    Ve = 0, Ct = null;
                    var S = x.sibling;
                    if (S !== null) ge = S;
                    else {
                      var k = x.return;
                      k !== null ? (ge = k, Mo(k)) : ge = null;
                    }
                    break t;
                  }
              }
              Ve = 0, Ct = null, oa(e, t, u, 5);
              break;
            case 6:
              Ve = 0, Ct = null, oa(e, t, u, 6);
              break;
            case 8:
              Du(), He = 6;
              break e;
            default:
              throw Error(r(462));
          }
        }
        Kx();
        break;
      } catch (_) {
        Vp(e, _);
      }
    while (!0);
    return un = ui = null, j.H = a, j.A = l, we = n, ge !== null ? 0 : (je = null, ve = 0, $s(), He);
  }
  function Kx() {
    for (; ge !== null && !vv(); )
      Ap(ge);
  }
  function Ap(e) {
    var t = tp(e.alternate, e, xn);
    e.memoizedProps = e.pendingProps, t === null ? Mo(e) : ge = t;
  }
  function jp(e) {
    var t = e, n = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Km(
          n,
          t,
          t.pendingProps,
          t.type,
          void 0,
          ve
        );
        break;
      case 11:
        t = Km(
          n,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          ve
        );
        break;
      case 5:
        Ur(t);
      default:
        ip(n, t), t = ge = Bd(t, xn), t = tp(n, t, xn);
    }
    e.memoizedProps = e.pendingProps, t === null ? Mo(e) : ge = t;
  }
  function oa(e, t, n, a) {
    un = ui = null, Ur(t), Ki = null, qa = 0;
    var l = t.return;
    try {
      if (Rx(
        e,
        l,
        t,
        n,
        ve
      )) {
        He = 1, yo(
          e,
          Pt(n, e.current)
        ), ge = null;
        return;
      }
    } catch (u) {
      if (l !== null) throw ge = l, u;
      He = 1, yo(
        e,
        Pt(n, e.current)
      ), ge = null;
      return;
    }
    t.flags & 32768 ? (Ne || a === 1 ? e = !0 : na || (ve & 536870912) !== 0 ? e = !1 : (Rn = e = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = Tt.current, a !== null && a.tag === 13 && (a.flags |= 16384))), Mp(t, e)) : Mo(t);
  }
  function Mo(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        Mp(
          t,
          Rn
        );
        return;
      }
      e = t.return;
      var n = Lx(
        t.alternate,
        t,
        xn
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
  function Mp(e, t) {
    do {
      var n = Hx(e.alternate, e);
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
  function Pp(e, t, n, a, l, u, d, x, S) {
    e.cancelPendingCommit = null;
    do
      Po();
    while (Je !== 0);
    if ((we & 6) !== 0) throw Error(r(327));
    if (t !== null) {
      if (t === e.current) throw Error(r(177));
      if (u = t.lanes | t.childLanes, u |= dr, Cv(
        e,
        n,
        u,
        d,
        x,
        S
      ), e === je && (ge = je = null, ve = 0), aa = t, Ln = e, yn = n, yu = u, Nu = l, Dp = a, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, Ix(_s, function() {
        return Up(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), a = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || a) {
        a = j.T, j.T = null, l = K.p, K.p = 2, d = we, we |= 4;
        try {
          qx(e, t, n);
        } finally {
          we = d, K.p = l, j.T = a;
        }
      }
      Je = 1, _p(), zp(), Rp();
    }
  }
  function _p() {
    if (Je === 1) {
      Je = 0;
      var e = Ln, t = aa, n = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || n) {
        n = j.T, j.T = null;
        var a = K.p;
        K.p = 2;
        var l = we;
        we |= 4;
        try {
          hp(t, e);
          var u = zu, d = Nd(e.containerInfo), x = u.focusedElem, S = u.selectionRange;
          if (d !== x && x && x.ownerDocument && yd(
            x.ownerDocument.documentElement,
            x
          )) {
            if (S !== null && lr(x)) {
              var k = S.start, _ = S.end;
              if (_ === void 0 && (_ = k), "selectionStart" in x)
                x.selectionStart = k, x.selectionEnd = Math.min(
                  _,
                  x.value.length
                );
              else {
                var U = x.ownerDocument || document, A = U && U.defaultView || window;
                if (A.getSelection) {
                  var M = A.getSelection(), ne = x.textContent.length, ue = Math.min(S.start, ne), Ae = S.end === void 0 ? ue : Math.min(S.end, ne);
                  !M.extend && ue > Ae && (d = Ae, Ae = ue, ue = d);
                  var T = xd(
                    x,
                    ue
                  ), E = xd(
                    x,
                    Ae
                  );
                  if (T && E && (M.rangeCount !== 1 || M.anchorNode !== T.node || M.anchorOffset !== T.offset || M.focusNode !== E.node || M.focusOffset !== E.offset)) {
                    var C = U.createRange();
                    C.setStart(T.node, T.offset), M.removeAllRanges(), ue > Ae ? (M.addRange(C), M.extend(E.node, E.offset)) : (C.setEnd(E.node, E.offset), M.addRange(C));
                  }
                }
              }
            }
            for (U = [], M = x; M = M.parentNode; )
              M.nodeType === 1 && U.push({
                element: M,
                left: M.scrollLeft,
                top: M.scrollTop
              });
            for (typeof x.focus == "function" && x.focus(), x = 0; x < U.length; x++) {
              var O = U[x];
              O.element.scrollLeft = O.left, O.element.scrollTop = O.top;
            }
          }
          Fo = !!_u, zu = _u = null;
        } finally {
          we = l, K.p = a, j.T = n;
        }
      }
      e.current = t, Je = 2;
    }
  }
  function zp() {
    if (Je === 2) {
      Je = 0;
      var e = Ln, t = aa, n = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || n) {
        n = j.T, j.T = null;
        var a = K.p;
        K.p = 2;
        var l = we;
        we |= 4;
        try {
          cp(e, t.alternate, t);
        } finally {
          we = l, K.p = a, j.T = n;
        }
      }
      Je = 3;
    }
  }
  function Rp() {
    if (Je === 4 || Je === 3) {
      Je = 0, xv();
      var e = Ln, t = aa, n = yn, a = Dp;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Je = 5 : (Je = 0, aa = Ln = null, Op(e, e.pendingLanes));
      var l = e.pendingLanes;
      if (l === 0 && (Un = null), ql(n), t = t.stateNode, St && typeof St.onCommitFiberRoot == "function")
        try {
          St.onCommitFiberRoot(
            Ea,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (a !== null) {
        t = j.T, l = K.p, K.p = 2, j.T = null;
        try {
          for (var u = e.onRecoverableError, d = 0; d < a.length; d++) {
            var x = a[d];
            u(x.value, {
              componentStack: x.stack
            });
          }
        } finally {
          j.T = t, K.p = l;
        }
      }
      (yn & 3) !== 0 && Po(), Wt(e), l = e.pendingLanes, (n & 261930) !== 0 && (l & 42) !== 0 ? e === Su ? ss++ : (ss = 0, Su = e) : ss = 0, os(0);
    }
  }
  function Op(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, La(t)));
  }
  function Po() {
    return _p(), zp(), Rp(), Up();
  }
  function Up() {
    if (Je !== 5) return !1;
    var e = Ln, t = yu;
    yu = 0;
    var n = ql(yn), a = j.T, l = K.p;
    try {
      K.p = 32 > n ? 32 : n, j.T = null, n = Nu, Nu = null;
      var u = Ln, d = yn;
      if (Je = 0, aa = Ln = null, yn = 0, (we & 6) !== 0) throw Error(r(331));
      var x = we;
      if (we |= 4, yp(u.current), bp(
        u,
        u.current,
        d,
        n
      ), we = x, os(0, !1), St && typeof St.onPostCommitFiberRoot == "function")
        try {
          St.onPostCommitFiberRoot(Ea, u);
        } catch {
        }
      return !0;
    } finally {
      K.p = l, j.T = a, Op(e, t);
    }
  }
  function Lp(e, t, n) {
    t = Pt(n, t), t = eu(e.stateNode, t, 2), e = Mn(e, t, 2), e !== null && (Ta(e, 2), Wt(e));
  }
  function Ce(e, t, n) {
    if (e.tag === 3)
      Lp(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Lp(
            t,
            e,
            n
          );
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (Un === null || !Un.has(a))) {
            e = Pt(n, e), n = Hm(2), a = Mn(t, n, 2), a !== null && (qm(
              n,
              a,
              t,
              e
            ), Ta(a, 2), Wt(a));
            break;
          }
        }
        t = t.return;
      }
  }
  function wu(e, t, n) {
    var a = e.pingCache;
    if (a === null) {
      a = e.pingCache = new Xx();
      var l = /* @__PURE__ */ new Set();
      a.set(t, l);
    } else
      l = a.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), a.set(t, l));
    l.has(n) || (bu = !0, l.add(n), e = Jx.bind(null, e, t, n), t.then(e, e));
  }
  function Jx(e, t, n) {
    var a = e.pingCache;
    a !== null && a.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, je === e && (ve & n) === n && (He === 4 || He === 3 && (ve & 62914560) === ve && 300 > Nt() - Co ? (we & 2) === 0 && sa(e, 0) : vu |= n, ia === ve && (ia = 0)), Wt(e);
  }
  function Hp(e, t) {
    t === 0 && (t = _f()), e = oi(e, t), e !== null && (Ta(e, t), Wt(e));
  }
  function $x(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), Hp(e, n);
  }
  function Wx(e, t) {
    var n = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var a = e.stateNode, l = e.memoizedState;
        l !== null && (n = l.retryLane);
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
    a !== null && a.delete(t), Hp(e, n);
  }
  function Ix(e, t) {
    return Ol(e, t);
  }
  var _o = null, la = null, Tu = !1, zo = !1, Vu = !1, qn = 0;
  function Wt(e) {
    e !== la && e.next === null && (la === null ? _o = la = e : la = la.next = e), zo = !0, Tu || (Tu = !0, t1());
  }
  function os(e, t) {
    if (!Vu && zo) {
      Vu = !0;
      do
        for (var n = !1, a = _o; a !== null; ) {
          if (e !== 0) {
            var l = a.pendingLanes;
            if (l === 0) var u = 0;
            else {
              var d = a.suspendedLanes, x = a.pingedLanes;
              u = (1 << 31 - Dt(42 | e) + 1) - 1, u &= l & ~(d & ~x), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0;
            }
            u !== 0 && (n = !0, Xp(a, u));
          } else
            u = ve, u = Us(
              a,
              a === je ? u : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (u & 3) === 0 || wa(a, u) || (n = !0, Xp(a, u));
          a = a.next;
        }
      while (n);
      Vu = !1;
    }
  }
  function e1() {
    qp();
  }
  function qp() {
    zo = Tu = !1;
    var e = 0;
    qn !== 0 && f1() && (e = qn);
    for (var t = Nt(), n = null, a = _o; a !== null; ) {
      var l = a.next, u = Gp(a, t);
      u === 0 ? (a.next = null, n === null ? _o = l : n.next = l, l === null && (la = n)) : (n = a, (e !== 0 || (u & 3) !== 0) && (zo = !0)), a = l;
    }
    Je !== 0 && Je !== 5 || os(e), qn !== 0 && (qn = 0);
  }
  function Gp(e, t) {
    for (var n = e.suspendedLanes, a = e.pingedLanes, l = e.expirationTimes, u = e.pendingLanes & -62914561; 0 < u; ) {
      var d = 31 - Dt(u), x = 1 << d, S = l[d];
      S === -1 ? ((x & n) === 0 || (x & a) !== 0) && (l[d] = Vv(x, t)) : S <= t && (e.expiredLanes |= x), u &= ~x;
    }
    if (t = je, n = ve, n = Us(
      e,
      e === t ? n : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), a = e.callbackNode, n === 0 || e === t && (Ve === 2 || Ve === 9) || e.cancelPendingCommit !== null)
      return a !== null && a !== null && Ul(a), e.callbackNode = null, e.callbackPriority = 0;
    if ((n & 3) === 0 || wa(e, n)) {
      if (t = n & -n, t === e.callbackPriority) return t;
      switch (a !== null && Ul(a), ql(n)) {
        case 2:
        case 8:
          n = Mf;
          break;
        case 32:
          n = _s;
          break;
        case 268435456:
          n = Pf;
          break;
        default:
          n = _s;
      }
      return a = Yp.bind(null, e), n = Ol(n, a), e.callbackPriority = t, e.callbackNode = n, t;
    }
    return a !== null && a !== null && Ul(a), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function Yp(e, t) {
    if (Je !== 0 && Je !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var n = e.callbackNode;
    if (Po() && e.callbackNode !== n)
      return null;
    var a = ve;
    return a = Us(
      e,
      e === je ? a : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), a === 0 ? null : (wp(e, a, t), Gp(e, Nt()), e.callbackNode != null && e.callbackNode === n ? Yp.bind(null, e) : null);
  }
  function Xp(e, t) {
    if (Po()) return null;
    wp(e, t, !0);
  }
  function t1() {
    m1(function() {
      (we & 6) !== 0 ? Ol(
        jf,
        e1
      ) : qp();
    });
  }
  function Cu() {
    if (qn === 0) {
      var e = Fi;
      e === 0 && (e = zs, zs <<= 1, (zs & 261888) === 0 && (zs = 256)), qn = e;
    }
    return qn;
  }
  function Fp(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : Gs("" + e);
  }
  function Qp(e, t) {
    var n = t.ownerDocument.createElement("input");
    return n.name = t.name, n.value = t.value, e.id && n.setAttribute("form", e.id), t.parentNode.insertBefore(n, t), e = new FormData(e), n.parentNode.removeChild(n), e;
  }
  function n1(e, t, n, a, l) {
    if (t === "submit" && n && n.stateNode === l) {
      var u = Fp(
        (l[dt] || null).action
      ), d = a.submitter;
      d && (t = (t = d[dt] || null) ? Fp(t.formAction) : d.getAttribute("formAction"), t !== null && (u = t, d = null));
      var x = new Qs(
        "action",
        "action",
        null,
        a,
        l
      );
      e.push({
        event: x,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (a.defaultPrevented) {
                if (qn !== 0) {
                  var S = d ? Qp(l, d) : new FormData(l);
                  Zr(
                    n,
                    {
                      pending: !0,
                      data: S,
                      method: l.method,
                      action: u
                    },
                    null,
                    S
                  );
                }
              } else
                typeof u == "function" && (x.preventDefault(), S = d ? Qp(l, d) : new FormData(l), Zr(
                  n,
                  {
                    pending: !0,
                    data: S,
                    method: l.method,
                    action: u
                  },
                  u,
                  S
                ));
            },
            currentTarget: l
          }
        ]
      });
    }
  }
  for (var ku = 0; ku < fr.length; ku++) {
    var Bu = fr[ku], i1 = Bu.toLowerCase(), a1 = Bu[0].toUpperCase() + Bu.slice(1);
    Gt(
      i1,
      "on" + a1
    );
  }
  Gt(Ed, "onAnimationEnd"), Gt(wd, "onAnimationIteration"), Gt(Td, "onAnimationStart"), Gt("dblclick", "onDoubleClick"), Gt("focusin", "onFocus"), Gt("focusout", "onBlur"), Gt(yx, "onTransitionRun"), Gt(Nx, "onTransitionStart"), Gt(Sx, "onTransitionCancel"), Gt(Vd, "onTransitionEnd"), ji("onMouseEnter", ["mouseout", "mouseover"]), ji("onMouseLeave", ["mouseout", "mouseover"]), ji("onPointerEnter", ["pointerout", "pointerover"]), ji("onPointerLeave", ["pointerout", "pointerover"]), ni(
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
  var ls = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), s1 = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ls)
  );
  function Zp(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var a = e[n], l = a.event;
      a = a.listeners;
      e: {
        var u = void 0;
        if (t)
          for (var d = a.length - 1; 0 <= d; d--) {
            var x = a[d], S = x.instance, k = x.currentTarget;
            if (x = x.listener, S !== u && l.isPropagationStopped())
              break e;
            u = x, l.currentTarget = k;
            try {
              u(l);
            } catch (_) {
              Js(_);
            }
            l.currentTarget = null, u = S;
          }
        else
          for (d = 0; d < a.length; d++) {
            if (x = a[d], S = x.instance, k = x.currentTarget, x = x.listener, S !== u && l.isPropagationStopped())
              break e;
            u = x, l.currentTarget = k;
            try {
              u(l);
            } catch (_) {
              Js(_);
            }
            l.currentTarget = null, u = S;
          }
      }
    }
  }
  function be(e, t) {
    var n = t[Gl];
    n === void 0 && (n = t[Gl] = /* @__PURE__ */ new Set());
    var a = e + "__bubble";
    n.has(a) || (Kp(t, e, 2, !1), n.add(a));
  }
  function Au(e, t, n) {
    var a = 0;
    t && (a |= 4), Kp(
      n,
      e,
      a,
      t
    );
  }
  var Ro = "_reactListening" + Math.random().toString(36).slice(2);
  function ju(e) {
    if (!e[Ro]) {
      e[Ro] = !0, qf.forEach(function(n) {
        n !== "selectionchange" && (s1.has(n) || Au(n, !1, e), Au(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Ro] || (t[Ro] = !0, Au("selectionchange", !1, t));
    }
  }
  function Kp(e, t, n, a) {
    switch (Eh(t)) {
      case 2:
        var l = M1;
        break;
      case 8:
        l = P1;
        break;
      default:
        l = Qu;
    }
    n = l.bind(
      null,
      t,
      n,
      e
    ), l = void 0, !Wl || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), a ? l !== void 0 ? e.addEventListener(t, n, {
      capture: !0,
      passive: l
    }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, {
      passive: l
    }) : e.addEventListener(t, n, !1);
  }
  function Mu(e, t, n, a, l) {
    var u = a;
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
      e: for (; ; ) {
        if (a === null) return;
        var d = a.tag;
        if (d === 3 || d === 4) {
          var x = a.stateNode.containerInfo;
          if (x === l) break;
          if (d === 4)
            for (d = a.return; d !== null; ) {
              var S = d.tag;
              if ((S === 3 || S === 4) && d.stateNode.containerInfo === l)
                return;
              d = d.return;
            }
          for (; x !== null; ) {
            if (d = ki(x), d === null) return;
            if (S = d.tag, S === 5 || S === 6 || S === 26 || S === 27) {
              a = u = d;
              continue e;
            }
            x = x.parentNode;
          }
        }
        a = a.return;
      }
    ed(function() {
      var k = u, _ = Jl(n), U = [];
      e: {
        var A = Cd.get(e);
        if (A !== void 0) {
          var M = Qs, ne = e;
          switch (e) {
            case "keypress":
              if (Xs(n) === 0) break e;
            case "keydown":
            case "keyup":
              M = Wv;
              break;
            case "focusin":
              ne = "focus", M = nr;
              break;
            case "focusout":
              ne = "blur", M = nr;
              break;
            case "beforeblur":
            case "afterblur":
              M = nr;
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
              M = id;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              M = Lv;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              M = tx;
              break;
            case Ed:
            case wd:
            case Td:
              M = Gv;
              break;
            case Vd:
              M = ix;
              break;
            case "scroll":
            case "scrollend":
              M = Ov;
              break;
            case "wheel":
              M = sx;
              break;
            case "copy":
            case "cut":
            case "paste":
              M = Xv;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              M = sd;
              break;
            case "toggle":
            case "beforetoggle":
              M = lx;
          }
          var ue = (t & 4) !== 0, Ae = !ue && (e === "scroll" || e === "scrollend"), T = ue ? A !== null ? A + "Capture" : null : A;
          ue = [];
          for (var E = k, C; E !== null; ) {
            var O = E;
            if (C = O.stateNode, O = O.tag, O !== 5 && O !== 26 && O !== 27 || C === null || T === null || (O = ka(E, T), O != null && ue.push(
              rs(E, O, C)
            )), Ae) break;
            E = E.return;
          }
          0 < ue.length && (A = new M(
            A,
            ne,
            null,
            n,
            _
          ), U.push({ event: A, listeners: ue }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (A = e === "mouseover" || e === "pointerover", M = e === "mouseout" || e === "pointerout", A && n !== Kl && (ne = n.relatedTarget || n.fromElement) && (ki(ne) || ne[Ci]))
            break e;
          if ((M || A) && (A = _.window === _ ? _ : (A = _.ownerDocument) ? A.defaultView || A.parentWindow : window, M ? (ne = n.relatedTarget || n.toElement, M = k, ne = ne ? ki(ne) : null, ne !== null && (Ae = m(ne), ue = ne.tag, ne !== Ae || ue !== 5 && ue !== 27 && ue !== 6) && (ne = null)) : (M = null, ne = k), M !== ne)) {
            if (ue = id, O = "onMouseLeave", T = "onMouseEnter", E = "mouse", (e === "pointerout" || e === "pointerover") && (ue = sd, O = "onPointerLeave", T = "onPointerEnter", E = "pointer"), Ae = M == null ? A : Ca(M), C = ne == null ? A : Ca(ne), A = new ue(
              O,
              E + "leave",
              M,
              n,
              _
            ), A.target = Ae, A.relatedTarget = C, O = null, ki(_) === k && (ue = new ue(
              T,
              E + "enter",
              ne,
              n,
              _
            ), ue.target = C, ue.relatedTarget = Ae, O = ue), Ae = O, M && ne)
              t: {
                for (ue = o1, T = M, E = ne, C = 0, O = T; O; O = ue(O))
                  C++;
                O = 0;
                for (var oe = E; oe; oe = ue(oe))
                  O++;
                for (; 0 < C - O; )
                  T = ue(T), C--;
                for (; 0 < O - C; )
                  E = ue(E), O--;
                for (; C--; ) {
                  if (T === E || E !== null && T === E.alternate) {
                    ue = T;
                    break t;
                  }
                  T = ue(T), E = ue(E);
                }
                ue = null;
              }
            else ue = null;
            M !== null && Jp(
              U,
              A,
              M,
              ue,
              !1
            ), ne !== null && Ae !== null && Jp(
              U,
              Ae,
              ne,
              ue,
              !0
            );
          }
        }
        e: {
          if (A = k ? Ca(k) : window, M = A.nodeName && A.nodeName.toLowerCase(), M === "select" || M === "input" && A.type === "file")
            var De = md;
          else if (fd(A))
            if (pd)
              De = bx;
            else {
              De = hx;
              var ae = px;
            }
          else
            M = A.nodeName, !M || M.toLowerCase() !== "input" || A.type !== "checkbox" && A.type !== "radio" ? k && Zl(k.elementType) && (De = md) : De = gx;
          if (De && (De = De(e, k))) {
            dd(
              U,
              De,
              n,
              _
            );
            break e;
          }
          ae && ae(e, A, k), e === "focusout" && k && A.type === "number" && k.memoizedProps.value != null && Ql(A, "number", A.value);
        }
        switch (ae = k ? Ca(k) : window, e) {
          case "focusin":
            (fd(ae) || ae.contentEditable === "true") && (Oi = ae, rr = k, Ra = null);
            break;
          case "focusout":
            Ra = rr = Oi = null;
            break;
          case "mousedown":
            ur = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ur = !1, Sd(U, n, _);
            break;
          case "selectionchange":
            if (xx) break;
          case "keydown":
          case "keyup":
            Sd(U, n, _);
        }
        var he;
        if (ar)
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
          Ri ? ud(e, n) && (xe = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (xe = "onCompositionStart");
        xe && (od && n.locale !== "ko" && (Ri || xe !== "onCompositionStart" ? xe === "onCompositionEnd" && Ri && (he = td()) : (Tn = _, Il = "value" in Tn ? Tn.value : Tn.textContent, Ri = !0)), ae = Oo(k, xe), 0 < ae.length && (xe = new ad(
          xe,
          e,
          null,
          n,
          _
        ), U.push({ event: xe, listeners: ae }), he ? xe.data = he : (he = cd(n), he !== null && (xe.data = he)))), (he = ux ? cx(e, n) : fx(e, n)) && (xe = Oo(k, "onBeforeInput"), 0 < xe.length && (ae = new ad(
          "onBeforeInput",
          "beforeinput",
          null,
          n,
          _
        ), U.push({
          event: ae,
          listeners: xe
        }), ae.data = he)), n1(
          U,
          e,
          k,
          n,
          _
        );
      }
      Zp(U, t);
    });
  }
  function rs(e, t, n) {
    return {
      instance: e,
      listener: t,
      currentTarget: n
    };
  }
  function Oo(e, t) {
    for (var n = t + "Capture", a = []; e !== null; ) {
      var l = e, u = l.stateNode;
      if (l = l.tag, l !== 5 && l !== 26 && l !== 27 || u === null || (l = ka(e, n), l != null && a.unshift(
        rs(e, l, u)
      ), l = ka(e, t), l != null && a.push(
        rs(e, l, u)
      )), e.tag === 3) return a;
      e = e.return;
    }
    return [];
  }
  function o1(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function Jp(e, t, n, a, l) {
    for (var u = t._reactName, d = []; n !== null && n !== a; ) {
      var x = n, S = x.alternate, k = x.stateNode;
      if (x = x.tag, S !== null && S === a) break;
      x !== 5 && x !== 26 && x !== 27 || k === null || (S = k, l ? (k = ka(n, u), k != null && d.unshift(
        rs(n, k, S)
      )) : l || (k = ka(n, u), k != null && d.push(
        rs(n, k, S)
      ))), n = n.return;
    }
    d.length !== 0 && e.push({ event: t, listeners: d });
  }
  var l1 = /\r\n?/g, r1 = /\u0000|\uFFFD/g;
  function $p(e) {
    return (typeof e == "string" ? e : "" + e).replace(l1, `
`).replace(r1, "");
  }
  function Wp(e, t) {
    return t = $p(t), $p(e) === t;
  }
  function Be(e, t, n, a, l, u) {
    switch (n) {
      case "children":
        typeof a == "string" ? t === "body" || t === "textarea" && a === "" || Pi(e, a) : (typeof a == "number" || typeof a == "bigint") && t !== "body" && Pi(e, "" + a);
        break;
      case "className":
        Hs(e, "class", a);
        break;
      case "tabIndex":
        Hs(e, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Hs(e, n, a);
        break;
      case "style":
        Wf(e, a, u);
        break;
      case "data":
        if (t !== "object") {
          Hs(e, "data", a);
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
        a = Gs("" + a), e.setAttribute(n, a);
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
          typeof u == "function" && (n === "formAction" ? (t !== "input" && Be(e, t, "name", l.name, l, null), Be(
            e,
            t,
            "formEncType",
            l.formEncType,
            l,
            null
          ), Be(
            e,
            t,
            "formMethod",
            l.formMethod,
            l,
            null
          ), Be(
            e,
            t,
            "formTarget",
            l.formTarget,
            l,
            null
          )) : (Be(e, t, "encType", l.encType, l, null), Be(e, t, "method", l.method, l, null), Be(e, t, "target", l.target, l, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          e.removeAttribute(n);
          break;
        }
        a = Gs("" + a), e.setAttribute(n, a);
        break;
      case "onClick":
        a != null && (e.onclick = sn);
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
            if (l.children != null) throw Error(r(60));
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
        n = Gs("" + a), e.setAttributeNS(
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
        be("beforetoggle", e), be("toggle", e), Ls(e, "popover", a);
        break;
      case "xlinkActuate":
        an(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          a
        );
        break;
      case "xlinkArcrole":
        an(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          a
        );
        break;
      case "xlinkRole":
        an(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          a
        );
        break;
      case "xlinkShow":
        an(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          a
        );
        break;
      case "xlinkTitle":
        an(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          a
        );
        break;
      case "xlinkType":
        an(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          a
        );
        break;
      case "xmlBase":
        an(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          a
        );
        break;
      case "xmlLang":
        an(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          a
        );
        break;
      case "xmlSpace":
        an(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          a
        );
        break;
      case "is":
        Ls(e, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (n = zv.get(n) || n, Ls(e, n, a));
    }
  }
  function Pu(e, t, n, a, l, u) {
    switch (n) {
      case "style":
        Wf(e, a, u);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(r(61));
          if (n = a.__html, n != null) {
            if (l.children != null) throw Error(r(60));
            e.innerHTML = n;
          }
        }
        break;
      case "children":
        typeof a == "string" ? Pi(e, a) : (typeof a == "number" || typeof a == "bigint") && Pi(e, "" + a);
        break;
      case "onScroll":
        a != null && be("scroll", e);
        break;
      case "onScrollEnd":
        a != null && be("scrollend", e);
        break;
      case "onClick":
        a != null && (e.onclick = sn);
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
        if (!Gf.hasOwnProperty(n))
          e: {
            if (n[0] === "o" && n[1] === "n" && (l = n.endsWith("Capture"), t = n.slice(2, l ? n.length - 7 : void 0), u = e[dt] || null, u = u != null ? u[n] : null, typeof u == "function" && e.removeEventListener(t, u, l), typeof a == "function")) {
              typeof u != "function" && u !== null && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)), e.addEventListener(t, a, l);
              break e;
            }
            n in e ? e[n] = a : a === !0 ? e.setAttribute(n, "") : Ls(e, n, a);
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
        var a = !1, l = !1, u;
        for (u in n)
          if (n.hasOwnProperty(u)) {
            var d = n[u];
            if (d != null)
              switch (u) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  l = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(r(137, t));
                default:
                  Be(e, t, u, d, n, null);
              }
          }
        l && Be(e, t, "srcSet", n.srcSet, n, null), a && Be(e, t, "src", n.src, n, null);
        return;
      case "input":
        be("invalid", e);
        var x = u = d = l = null, S = null, k = null;
        for (a in n)
          if (n.hasOwnProperty(a)) {
            var _ = n[a];
            if (_ != null)
              switch (a) {
                case "name":
                  l = _;
                  break;
                case "type":
                  d = _;
                  break;
                case "checked":
                  S = _;
                  break;
                case "defaultChecked":
                  k = _;
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
                    throw Error(r(137, t));
                  break;
                default:
                  Be(e, t, a, _, n, null);
              }
          }
        Zf(
          e,
          u,
          x,
          S,
          k,
          d,
          l,
          !1
        );
        return;
      case "select":
        be("invalid", e), a = d = u = null;
        for (l in n)
          if (n.hasOwnProperty(l) && (x = n[l], x != null))
            switch (l) {
              case "value":
                u = x;
                break;
              case "defaultValue":
                d = x;
                break;
              case "multiple":
                a = x;
              default:
                Be(e, t, l, x, n, null);
            }
        t = u, n = d, e.multiple = !!a, t != null ? Mi(e, !!a, t, !1) : n != null && Mi(e, !!a, n, !0);
        return;
      case "textarea":
        be("invalid", e), u = l = a = null;
        for (d in n)
          if (n.hasOwnProperty(d) && (x = n[d], x != null))
            switch (d) {
              case "value":
                a = x;
                break;
              case "defaultValue":
                l = x;
                break;
              case "children":
                u = x;
                break;
              case "dangerouslySetInnerHTML":
                if (x != null) throw Error(r(91));
                break;
              default:
                Be(e, t, d, x, n, null);
            }
        Jf(e, a, l, u);
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
        for (a = 0; a < ls.length; a++)
          be(ls[a], e);
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
        if (Zl(t)) {
          for (_ in n)
            n.hasOwnProperty(_) && (a = n[_], a !== void 0 && Pu(
              e,
              t,
              _,
              a,
              n,
              void 0
            ));
          return;
        }
    }
    for (x in n)
      n.hasOwnProperty(x) && (a = n[x], a != null && Be(e, t, x, a, n, null));
  }
  function u1(e, t, n, a) {
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
        var l = null, u = null, d = null, x = null, S = null, k = null, _ = null;
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
        for (var A in a) {
          var M = a[A];
          if (U = n[A], a.hasOwnProperty(A) && (M != null || U != null))
            switch (A) {
              case "type":
                u = M;
                break;
              case "name":
                l = M;
                break;
              case "checked":
                k = M;
                break;
              case "defaultChecked":
                _ = M;
                break;
              case "value":
                d = M;
                break;
              case "defaultValue":
                x = M;
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
                  A,
                  M,
                  a,
                  U
                );
            }
        }
        Fl(
          e,
          d,
          x,
          S,
          k,
          _,
          u,
          l
        );
        return;
      case "select":
        M = d = x = A = null;
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
        for (l in a)
          if (u = a[l], S = n[l], a.hasOwnProperty(l) && (u != null || S != null))
            switch (l) {
              case "value":
                A = u;
                break;
              case "defaultValue":
                x = u;
                break;
              case "multiple":
                d = u;
              default:
                u !== S && Be(
                  e,
                  t,
                  l,
                  u,
                  a,
                  S
                );
            }
        t = x, n = d, a = M, A != null ? Mi(e, !!n, A, !1) : !!a != !!n && (t != null ? Mi(e, !!n, t, !0) : Mi(e, !!n, n ? [] : "", !1));
        return;
      case "textarea":
        M = A = null;
        for (x in n)
          if (l = n[x], n.hasOwnProperty(x) && l != null && !a.hasOwnProperty(x))
            switch (x) {
              case "value":
                break;
              case "children":
                break;
              default:
                Be(e, t, x, null, a, l);
            }
        for (d in a)
          if (l = a[d], u = n[d], a.hasOwnProperty(d) && (l != null || u != null))
            switch (d) {
              case "value":
                A = l;
                break;
              case "defaultValue":
                M = l;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (l != null) throw Error(r(91));
                break;
              default:
                l !== u && Be(e, t, d, l, a, u);
            }
        Kf(e, A, M);
        return;
      case "option":
        for (var ne in n)
          if (A = n[ne], n.hasOwnProperty(ne) && A != null && !a.hasOwnProperty(ne))
            switch (ne) {
              case "selected":
                e.selected = !1;
                break;
              default:
                Be(
                  e,
                  t,
                  ne,
                  null,
                  a,
                  A
                );
            }
        for (S in a)
          if (A = a[S], M = n[S], a.hasOwnProperty(S) && A !== M && (A != null || M != null))
            switch (S) {
              case "selected":
                e.selected = A && typeof A != "function" && typeof A != "symbol";
                break;
              default:
                Be(
                  e,
                  t,
                  S,
                  A,
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
        for (var ue in n)
          A = n[ue], n.hasOwnProperty(ue) && A != null && !a.hasOwnProperty(ue) && Be(e, t, ue, null, a, A);
        for (k in a)
          if (A = a[k], M = n[k], a.hasOwnProperty(k) && A !== M && (A != null || M != null))
            switch (k) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (A != null)
                  throw Error(r(137, t));
                break;
              default:
                Be(
                  e,
                  t,
                  k,
                  A,
                  a,
                  M
                );
            }
        return;
      default:
        if (Zl(t)) {
          for (var Ae in n)
            A = n[Ae], n.hasOwnProperty(Ae) && A !== void 0 && !a.hasOwnProperty(Ae) && Pu(
              e,
              t,
              Ae,
              void 0,
              a,
              A
            );
          for (_ in a)
            A = a[_], M = n[_], !a.hasOwnProperty(_) || A === M || A === void 0 && M === void 0 || Pu(
              e,
              t,
              _,
              A,
              a,
              M
            );
          return;
        }
    }
    for (var T in n)
      A = n[T], n.hasOwnProperty(T) && A != null && !a.hasOwnProperty(T) && Be(e, t, T, null, a, A);
    for (U in a)
      A = a[U], M = n[U], !a.hasOwnProperty(U) || A === M || A == null && M == null || Be(e, t, U, A, a, M);
  }
  function Ip(e) {
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
  function c1() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, t = 0, n = performance.getEntriesByType("resource"), a = 0; a < n.length; a++) {
        var l = n[a], u = l.transferSize, d = l.initiatorType, x = l.duration;
        if (u && x && Ip(d)) {
          for (d = 0, x = l.responseEnd, a += 1; a < n.length; a++) {
            var S = n[a], k = S.startTime;
            if (k > x) break;
            var _ = S.transferSize, U = S.initiatorType;
            _ && Ip(U) && (S = S.responseEnd, d += _ * (S < x ? 1 : (x - k) / (S - k)));
          }
          if (--a, t += 8 * (u + d) / (l.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var _u = null, zu = null;
  function Uo(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function eh(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function th(e, t) {
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
  function Ru(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Ou = null;
  function f1() {
    var e = window.event;
    return e && e.type === "popstate" ? e === Ou ? !1 : (Ou = e, !0) : (Ou = null, !1);
  }
  var nh = typeof setTimeout == "function" ? setTimeout : void 0, d1 = typeof clearTimeout == "function" ? clearTimeout : void 0, ih = typeof Promise == "function" ? Promise : void 0, m1 = typeof queueMicrotask == "function" ? queueMicrotask : typeof ih < "u" ? function(e) {
    return ih.resolve(null).then(e).catch(p1);
  } : nh;
  function p1(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Gn(e) {
    return e === "head";
  }
  function ah(e, t) {
    var n = t, a = 0;
    do {
      var l = n.nextSibling;
      if (e.removeChild(n), l && l.nodeType === 8)
        if (n = l.data, n === "/$" || n === "/&") {
          if (a === 0) {
            e.removeChild(l), fa(t);
            return;
          }
          a--;
        } else if (n === "$" || n === "$?" || n === "$~" || n === "$!" || n === "&")
          a++;
        else if (n === "html")
          us(e.ownerDocument.documentElement);
        else if (n === "head") {
          n = e.ownerDocument.head, us(n);
          for (var u = n.firstChild; u; ) {
            var d = u.nextSibling, x = u.nodeName;
            u[Va] || x === "SCRIPT" || x === "STYLE" || x === "LINK" && u.rel.toLowerCase() === "stylesheet" || n.removeChild(u), u = d;
          }
        } else
          n === "body" && us(e.ownerDocument.body);
      n = l;
    } while (n);
    fa(t);
  }
  function sh(e, t) {
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
  function Uu(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var n = t;
      switch (t = t.nextSibling, n.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Uu(n), Yl(n);
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
  function h1(e, t, n, a) {
    for (; e.nodeType === 1; ) {
      var l = n;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (a) {
        if (!e[Va])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (u = e.getAttribute("rel"), u === "stylesheet" && e.hasAttribute("data-precedence"))
                break;
              if (u !== l.rel || e.getAttribute("href") !== (l.href == null || l.href === "" ? null : l.href) || e.getAttribute("crossorigin") !== (l.crossOrigin == null ? null : l.crossOrigin) || e.getAttribute("title") !== (l.title == null ? null : l.title))
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (u = e.getAttribute("src"), (u !== (l.src == null ? null : l.src) || e.getAttribute("type") !== (l.type == null ? null : l.type) || e.getAttribute("crossorigin") !== (l.crossOrigin == null ? null : l.crossOrigin)) && u && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var u = l.name == null ? null : "" + l.name;
        if (l.type === "hidden" && e.getAttribute("name") === u)
          return e;
      } else return e;
      if (e = Ut(e.nextSibling), e === null) break;
    }
    return null;
  }
  function g1(e, t, n) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !n || (e = Ut(e.nextSibling), e === null)) return null;
    return e;
  }
  function oh(e, t) {
    for (; e.nodeType !== 8; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = Ut(e.nextSibling), e === null)) return null;
    return e;
  }
  function Lu(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function Hu(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
  }
  function b1(e, t) {
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
  var qu = null;
  function lh(e) {
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
  function rh(e) {
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
  function uh(e, t, n) {
    switch (t = Uo(n), e) {
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
  function us(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    Yl(e);
  }
  var Lt = /* @__PURE__ */ new Map(), ch = /* @__PURE__ */ new Set();
  function Lo(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var Nn = K.d;
  K.d = {
    f: v1,
    r: x1,
    D: y1,
    C: N1,
    L: S1,
    m: D1,
    X: w1,
    S: E1,
    M: T1
  };
  function v1() {
    var e = Nn.f(), t = Ao();
    return e || t;
  }
  function x1(e) {
    var t = Bi(e);
    t !== null && t.tag === 5 && t.type === "form" ? Vm(t) : Nn.r(e);
  }
  var ra = typeof document > "u" ? null : document;
  function fh(e, t, n) {
    var a = ra;
    if (a && typeof t == "string" && t) {
      var l = jt(t);
      l = 'link[rel="' + e + '"][href="' + l + '"]', typeof n == "string" && (l += '[crossorigin="' + n + '"]'), ch.has(l) || (ch.add(l), e = { rel: e, crossOrigin: n, href: t }, a.querySelector(l) === null && (t = a.createElement("link"), at(t, "link", e), We(t), a.head.appendChild(t)));
    }
  }
  function y1(e) {
    Nn.D(e), fh("dns-prefetch", e, null);
  }
  function N1(e, t) {
    Nn.C(e, t), fh("preconnect", e, t);
  }
  function S1(e, t, n) {
    Nn.L(e, t, n);
    var a = ra;
    if (a && e && t) {
      var l = 'link[rel="preload"][as="' + jt(t) + '"]';
      t === "image" && n && n.imageSrcSet ? (l += '[imagesrcset="' + jt(
        n.imageSrcSet
      ) + '"]', typeof n.imageSizes == "string" && (l += '[imagesizes="' + jt(
        n.imageSizes
      ) + '"]')) : l += '[href="' + jt(e) + '"]';
      var u = l;
      switch (t) {
        case "style":
          u = ua(e);
          break;
        case "script":
          u = ca(e);
      }
      Lt.has(u) || (e = y(
        {
          rel: "preload",
          href: t === "image" && n && n.imageSrcSet ? void 0 : e,
          as: t
        },
        n
      ), Lt.set(u, e), a.querySelector(l) !== null || t === "style" && a.querySelector(cs(u)) || t === "script" && a.querySelector(fs(u)) || (t = a.createElement("link"), at(t, "link", e), We(t), a.head.appendChild(t)));
    }
  }
  function D1(e, t) {
    Nn.m(e, t);
    var n = ra;
    if (n && e) {
      var a = t && typeof t.as == "string" ? t.as : "script", l = 'link[rel="modulepreload"][as="' + jt(a) + '"][href="' + jt(e) + '"]', u = l;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = ca(e);
      }
      if (!Lt.has(u) && (e = y({ rel: "modulepreload", href: e }, t), Lt.set(u, e), n.querySelector(l) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(fs(u)))
              return;
        }
        a = n.createElement("link"), at(a, "link", e), We(a), n.head.appendChild(a);
      }
    }
  }
  function E1(e, t, n) {
    Nn.S(e, t, n);
    var a = ra;
    if (a && e) {
      var l = Ai(a).hoistableStyles, u = ua(e);
      t = t || "default";
      var d = l.get(u);
      if (!d) {
        var x = { loading: 0, preload: null };
        if (d = a.querySelector(
          cs(u)
        ))
          x.loading = 5;
        else {
          e = y(
            { rel: "stylesheet", href: e, "data-precedence": t },
            n
          ), (n = Lt.get(u)) && Gu(e, n);
          var S = d = a.createElement("link");
          We(S), at(S, "link", e), S._p = new Promise(function(k, _) {
            S.onload = k, S.onerror = _;
          }), S.addEventListener("load", function() {
            x.loading |= 1;
          }), S.addEventListener("error", function() {
            x.loading |= 2;
          }), x.loading |= 4, Ho(d, t, a);
        }
        d = {
          type: "stylesheet",
          instance: d,
          count: 1,
          state: x
        }, l.set(u, d);
      }
    }
  }
  function w1(e, t) {
    Nn.X(e, t);
    var n = ra;
    if (n && e) {
      var a = Ai(n).hoistableScripts, l = ca(e), u = a.get(l);
      u || (u = n.querySelector(fs(l)), u || (e = y({ src: e, async: !0 }, t), (t = Lt.get(l)) && Yu(e, t), u = n.createElement("script"), We(u), at(u, "link", e), n.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, a.set(l, u));
    }
  }
  function T1(e, t) {
    Nn.M(e, t);
    var n = ra;
    if (n && e) {
      var a = Ai(n).hoistableScripts, l = ca(e), u = a.get(l);
      u || (u = n.querySelector(fs(l)), u || (e = y({ src: e, async: !0, type: "module" }, t), (t = Lt.get(l)) && Yu(e, t), u = n.createElement("script"), We(u), at(u, "link", e), n.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, a.set(l, u));
    }
  }
  function dh(e, t, n, a) {
    var l = (l = de.current) ? Lo(l) : null;
    if (!l) throw Error(r(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string" ? (t = ua(n.href), n = Ai(
          l
        ).hoistableStyles, a = n.get(t), a || (a = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, n.set(t, a)), a) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
          e = ua(n.href);
          var u = Ai(
            l
          ).hoistableStyles, d = u.get(e);
          if (d || (l = l.ownerDocument || l, d = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, u.set(e, d), (u = l.querySelector(
            cs(e)
          )) && !u._p && (d.instance = u, d.state.loading = 5), Lt.has(e) || (n = {
            rel: "preload",
            as: "style",
            href: n.href,
            crossOrigin: n.crossOrigin,
            integrity: n.integrity,
            media: n.media,
            hrefLang: n.hrefLang,
            referrerPolicy: n.referrerPolicy
          }, Lt.set(e, n), u || V1(
            l,
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
        return t = n.async, n = n.src, typeof n == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = ca(n), n = Ai(
          l
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
  function ua(e) {
    return 'href="' + jt(e) + '"';
  }
  function cs(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function mh(e) {
    return y({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function V1(e, t, n, a) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? a.loading = 1 : (t = e.createElement("link"), a.preload = t, t.addEventListener("load", function() {
      return a.loading |= 1;
    }), t.addEventListener("error", function() {
      return a.loading |= 2;
    }), at(t, "link", n), We(t), e.head.appendChild(t));
  }
  function ca(e) {
    return '[src="' + jt(e) + '"]';
  }
  function fs(e) {
    return "script[async]" + e;
  }
  function ph(e, t, n) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var a = e.querySelector(
            'style[data-href~="' + jt(n.href) + '"]'
          );
          if (a)
            return t.instance = a, We(a), a;
          var l = y({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null
          });
          return a = (e.ownerDocument || e).createElement(
            "style"
          ), We(a), at(a, "style", l), Ho(a, n.precedence, e), t.instance = a;
        case "stylesheet":
          l = ua(n.href);
          var u = e.querySelector(
            cs(l)
          );
          if (u)
            return t.state.loading |= 4, t.instance = u, We(u), u;
          a = mh(n), (l = Lt.get(l)) && Gu(a, l), u = (e.ownerDocument || e).createElement("link"), We(u);
          var d = u;
          return d._p = new Promise(function(x, S) {
            d.onload = x, d.onerror = S;
          }), at(u, "link", a), t.state.loading |= 4, Ho(u, n.precedence, e), t.instance = u;
        case "script":
          return u = ca(n.src), (l = e.querySelector(
            fs(u)
          )) ? (t.instance = l, We(l), l) : (a = n, (l = Lt.get(u)) && (a = y({}, n), Yu(a, l)), e = e.ownerDocument || e, l = e.createElement("script"), We(l), at(l, "link", a), e.head.appendChild(l), t.instance = l);
        case "void":
          return null;
        default:
          throw Error(r(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (a = t.instance, t.state.loading |= 4, Ho(a, n.precedence, e));
    return t.instance;
  }
  function Ho(e, t, n) {
    for (var a = n.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), l = a.length ? a[a.length - 1] : null, u = l, d = 0; d < a.length; d++) {
      var x = a[d];
      if (x.dataset.precedence === t) u = x;
      else if (u !== l) break;
    }
    u ? u.parentNode.insertBefore(e, u.nextSibling) : (t = n.nodeType === 9 ? n.head : n, t.insertBefore(e, t.firstChild));
  }
  function Gu(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function Yu(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var qo = null;
  function hh(e, t, n) {
    if (qo === null) {
      var a = /* @__PURE__ */ new Map(), l = qo = /* @__PURE__ */ new Map();
      l.set(n, a);
    } else
      l = qo, a = l.get(n), a || (a = /* @__PURE__ */ new Map(), l.set(n, a));
    if (a.has(e)) return a;
    for (a.set(e, null), n = n.getElementsByTagName(e), l = 0; l < n.length; l++) {
      var u = n[l];
      if (!(u[Va] || u[et] || e === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
        var d = u.getAttribute(t) || "";
        d = e + d;
        var x = a.get(d);
        x ? x.push(u) : a.set(d, [u]);
      }
    }
    return a;
  }
  function gh(e, t, n) {
    e = e.ownerDocument || e, e.head.insertBefore(
      n,
      t === "title" ? e.querySelector("head > title") : null
    );
  }
  function C1(e, t, n) {
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
  function bh(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function k1(e, t, n, a) {
    if (n.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (n.state.loading & 4) === 0) {
      if (n.instance === null) {
        var l = ua(a.href), u = t.querySelector(
          cs(l)
        );
        if (u) {
          t = u._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = Go.bind(e), t.then(e, e)), n.state.loading |= 4, n.instance = u, We(u);
          return;
        }
        u = t.ownerDocument || t, a = mh(a), (l = Lt.get(l)) && Gu(a, l), u = u.createElement("link"), We(u);
        var d = u;
        d._p = new Promise(function(x, S) {
          d.onload = x, d.onerror = S;
        }), at(u, "link", a), n.instance = u;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(n, t), (t = n.state.preload) && (n.state.loading & 3) === 0 && (e.count++, n = Go.bind(e), t.addEventListener("load", n), t.addEventListener("error", n));
    }
  }
  var Xu = 0;
  function B1(e, t) {
    return e.stylesheets && e.count === 0 && Xo(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(n) {
      var a = setTimeout(function() {
        if (e.stylesheets && Xo(e, e.stylesheets), e.unsuspend) {
          var u = e.unsuspend;
          e.unsuspend = null, u();
        }
      }, 6e4 + t);
      0 < e.imgBytes && Xu === 0 && (Xu = 62500 * c1());
      var l = setTimeout(
        function() {
          if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && Xo(e, e.stylesheets), e.unsuspend)) {
            var u = e.unsuspend;
            e.unsuspend = null, u();
          }
        },
        (e.imgBytes > Xu ? 50 : 800) + t
      );
      return e.unsuspend = n, function() {
        e.unsuspend = null, clearTimeout(a), clearTimeout(l);
      };
    } : null;
  }
  function Go() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Xo(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var Yo = null;
  function Xo(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, Yo = /* @__PURE__ */ new Map(), t.forEach(A1, e), Yo = null, Go.call(e));
  }
  function A1(e, t) {
    if (!(t.state.loading & 4)) {
      var n = Yo.get(e);
      if (n) var a = n.get(null);
      else {
        n = /* @__PURE__ */ new Map(), Yo.set(e, n);
        for (var l = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), u = 0; u < l.length; u++) {
          var d = l[u];
          (d.nodeName === "LINK" || d.getAttribute("media") !== "not all") && (n.set(d.dataset.precedence, d), a = d);
        }
        a && n.set(null, a);
      }
      l = t.instance, d = l.getAttribute("data-precedence"), u = n.get(d) || a, u === a && n.set(null, l), n.set(d, l), this.count++, a = Go.bind(this), l.addEventListener("load", a), l.addEventListener("error", a), u ? u.parentNode.insertBefore(l, u.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(l, e.firstChild)), t.state.loading |= 4;
    }
  }
  var ds = {
    $$typeof: L,
    Provider: null,
    Consumer: null,
    _currentValue: Z,
    _currentValue2: Z,
    _threadCount: 0
  };
  function j1(e, t, n, a, l, u, d, x, S) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Ll(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ll(0), this.hiddenUpdates = Ll(null), this.identifierPrefix = a, this.onUncaughtError = l, this.onCaughtError = u, this.onRecoverableError = d, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = S, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function vh(e, t, n, a, l, u, d, x, S, k, _, U) {
    return e = new j1(
      e,
      t,
      n,
      d,
      S,
      k,
      _,
      U,
      x
    ), t = 1, u === !0 && (t |= 24), u = wt(3, null, null, t), e.current = u, u.stateNode = e, t = Er(), t.refCount++, e.pooledCache = t, t.refCount++, u.memoizedState = {
      element: a,
      isDehydrated: n,
      cache: t
    }, Cr(u), e;
  }
  function xh(e) {
    return e ? (e = Hi, e) : Hi;
  }
  function yh(e, t, n, a, l, u) {
    l = xh(l), a.context === null ? a.context = l : a.pendingContext = l, a = jn(t), a.payload = { element: n }, u = u === void 0 ? null : u, u !== null && (a.callback = u), n = Mn(e, a, t), n !== null && (vt(n, e, t), Ya(n, e, t));
  }
  function Nh(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Fu(e, t) {
    Nh(e, t), (e = e.alternate) && Nh(e, t);
  }
  function Sh(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = oi(e, 67108864);
      t !== null && vt(t, e, 67108864), Fu(e, 67108864);
    }
  }
  function Dh(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Bt();
      t = Hl(t);
      var n = oi(e, t);
      n !== null && vt(n, e, t), Fu(e, t);
    }
  }
  var Fo = !0;
  function M1(e, t, n, a) {
    var l = j.T;
    j.T = null;
    var u = K.p;
    try {
      K.p = 2, Qu(e, t, n, a);
    } finally {
      K.p = u, j.T = l;
    }
  }
  function P1(e, t, n, a) {
    var l = j.T;
    j.T = null;
    var u = K.p;
    try {
      K.p = 8, Qu(e, t, n, a);
    } finally {
      K.p = u, j.T = l;
    }
  }
  function Qu(e, t, n, a) {
    if (Fo) {
      var l = Zu(a);
      if (l === null)
        Mu(
          e,
          t,
          a,
          Qo,
          n
        ), wh(e, a);
      else if (z1(
        l,
        e,
        t,
        n,
        a
      ))
        a.stopPropagation();
      else if (wh(e, a), t & 4 && -1 < _1.indexOf(e)) {
        for (; l !== null; ) {
          var u = Bi(l);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                  var d = ti(u.pendingLanes);
                  if (d !== 0) {
                    var x = u;
                    for (x.pendingLanes |= 2, x.entangledLanes |= 2; d; ) {
                      var S = 1 << 31 - Dt(d);
                      x.entanglements[1] |= S, d &= ~S;
                    }
                    Wt(u), (we & 6) === 0 && (ko = Nt() + 500, os(0));
                  }
                }
                break;
              case 31:
              case 13:
                x = oi(u, 2), x !== null && vt(x, u, 2), Ao(), Fu(u, 2);
            }
          if (u = Zu(a), u === null && Mu(
            e,
            t,
            a,
            Qo,
            n
          ), u === l) break;
          l = u;
        }
        l !== null && a.stopPropagation();
      } else
        Mu(
          e,
          t,
          a,
          null,
          n
        );
    }
  }
  function Zu(e) {
    return e = Jl(e), Ku(e);
  }
  var Qo = null;
  function Ku(e) {
    if (Qo = null, e = ki(e), e !== null) {
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
    return Qo = e, null;
  }
  function Eh(e) {
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
        switch (yv()) {
          case jf:
            return 2;
          case Mf:
            return 8;
          case _s:
          case Nv:
            return 32;
          case Pf:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Ju = !1, Yn = null, Xn = null, Fn = null, ms = /* @__PURE__ */ new Map(), ps = /* @__PURE__ */ new Map(), Qn = [], _1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function wh(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Yn = null;
        break;
      case "dragenter":
      case "dragleave":
        Xn = null;
        break;
      case "mouseover":
      case "mouseout":
        Fn = null;
        break;
      case "pointerover":
      case "pointerout":
        ms.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ps.delete(t.pointerId);
    }
  }
  function hs(e, t, n, a, l, u) {
    return e === null || e.nativeEvent !== u ? (e = {
      blockedOn: t,
      domEventName: n,
      eventSystemFlags: a,
      nativeEvent: u,
      targetContainers: [l]
    }, t !== null && (t = Bi(t), t !== null && Sh(t)), e) : (e.eventSystemFlags |= a, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
  }
  function z1(e, t, n, a, l) {
    switch (t) {
      case "focusin":
        return Yn = hs(
          Yn,
          e,
          t,
          n,
          a,
          l
        ), !0;
      case "dragenter":
        return Xn = hs(
          Xn,
          e,
          t,
          n,
          a,
          l
        ), !0;
      case "mouseover":
        return Fn = hs(
          Fn,
          e,
          t,
          n,
          a,
          l
        ), !0;
      case "pointerover":
        var u = l.pointerId;
        return ms.set(
          u,
          hs(
            ms.get(u) || null,
            e,
            t,
            n,
            a,
            l
          )
        ), !0;
      case "gotpointercapture":
        return u = l.pointerId, ps.set(
          u,
          hs(
            ps.get(u) || null,
            e,
            t,
            n,
            a,
            l
          )
        ), !0;
    }
    return !1;
  }
  function Th(e) {
    var t = ki(e.target);
    if (t !== null) {
      var n = m(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = f(n), t !== null) {
            e.blockedOn = t, Lf(e.priority, function() {
              Dh(n);
            });
            return;
          }
        } else if (t === 31) {
          if (t = h(n), t !== null) {
            e.blockedOn = t, Lf(e.priority, function() {
              Dh(n);
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
  function Zo(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Zu(e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var a = new n.constructor(
          n.type,
          n
        );
        Kl = a, n.target.dispatchEvent(a), Kl = null;
      } else
        return t = Bi(n), t !== null && Sh(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function Vh(e, t, n) {
    Zo(e) && n.delete(t);
  }
  function R1() {
    Ju = !1, Yn !== null && Zo(Yn) && (Yn = null), Xn !== null && Zo(Xn) && (Xn = null), Fn !== null && Zo(Fn) && (Fn = null), ms.forEach(Vh), ps.forEach(Vh);
  }
  function Ko(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Ju || (Ju = !0, i.unstable_scheduleCallback(
      i.unstable_NormalPriority,
      R1
    )));
  }
  var Jo = null;
  function Ch(e) {
    Jo !== e && (Jo = e, i.unstable_scheduleCallback(
      i.unstable_NormalPriority,
      function() {
        Jo === e && (Jo = null);
        for (var t = 0; t < e.length; t += 3) {
          var n = e[t], a = e[t + 1], l = e[t + 2];
          if (typeof a != "function") {
            if (Ku(a || n) === null)
              continue;
            break;
          }
          var u = Bi(n);
          u !== null && (e.splice(t, 3), t -= 3, Zr(
            u,
            {
              pending: !0,
              data: l,
              method: n.method,
              action: a
            },
            a,
            l
          ));
        }
      }
    ));
  }
  function fa(e) {
    function t(S) {
      return Ko(S, e);
    }
    Yn !== null && Ko(Yn, e), Xn !== null && Ko(Xn, e), Fn !== null && Ko(Fn, e), ms.forEach(t), ps.forEach(t);
    for (var n = 0; n < Qn.length; n++) {
      var a = Qn[n];
      a.blockedOn === e && (a.blockedOn = null);
    }
    for (; 0 < Qn.length && (n = Qn[0], n.blockedOn === null); )
      Th(n), n.blockedOn === null && Qn.shift();
    if (n = (e.ownerDocument || e).$$reactFormReplay, n != null)
      for (a = 0; a < n.length; a += 3) {
        var l = n[a], u = n[a + 1], d = l[dt] || null;
        if (typeof u == "function")
          d || Ch(n);
        else if (d) {
          var x = null;
          if (u && u.hasAttribute("formAction")) {
            if (l = u, d = u[dt] || null)
              x = d.formAction;
            else if (Ku(l) !== null) continue;
          } else x = d.action;
          typeof x == "function" ? n[a + 1] = x : (n.splice(a, 3), a -= 3), Ch(n);
        }
      }
  }
  function kh() {
    function e(u) {
      u.canIntercept && u.info === "react-transition" && u.intercept({
        handler: function() {
          return new Promise(function(d) {
            return l = d;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function t() {
      l !== null && (l(), l = null), a || setTimeout(n, 20);
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
      var a = !1, l = null;
      return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(n, 100), function() {
        a = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), l !== null && (l(), l = null);
      };
    }
  }
  function $u(e) {
    this._internalRoot = e;
  }
  $o.prototype.render = $u.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(r(409));
    var n = t.current, a = Bt();
    yh(n, a, e, t, null, null);
  }, $o.prototype.unmount = $u.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      yh(e.current, 2, null, e, null, null), Ao(), t[Ci] = null;
    }
  };
  function $o(e) {
    this._internalRoot = e;
  }
  $o.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Uf();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Qn.length && t !== 0 && t < Qn[n].priority; n++) ;
      Qn.splice(n, 0, e), n === 0 && Th(e);
    }
  };
  var Bh = s.version;
  if (Bh !== "19.2.6")
    throw Error(
      r(
        527,
        Bh,
        "19.2.6"
      )
    );
  K.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(r(188)) : (e = Object.keys(e).join(","), Error(r(268, e)));
    return e = g(t), e = e !== null ? v(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var O1 = {
    bundleType: 0,
    version: "19.2.6",
    rendererPackageName: "react-dom",
    currentDispatcherRef: j,
    reconcilerVersion: "19.2.6"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Wo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Wo.isDisabled && Wo.supportsFiber)
      try {
        Ea = Wo.inject(
          O1
        ), St = Wo;
      } catch {
      }
  }
  return gs.createRoot = function(e, t) {
    if (!c(e)) throw Error(r(299));
    var n = !1, a = "", l = Rm, u = Om, d = Um;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onUncaughtError !== void 0 && (l = t.onUncaughtError), t.onCaughtError !== void 0 && (u = t.onCaughtError), t.onRecoverableError !== void 0 && (d = t.onRecoverableError)), t = vh(
      e,
      1,
      !1,
      null,
      null,
      n,
      a,
      null,
      l,
      u,
      d,
      kh
    ), e[Ci] = t.current, ju(e), new $u(t);
  }, gs.hydrateRoot = function(e, t, n) {
    if (!c(e)) throw Error(r(299));
    var a = !1, l = "", u = Rm, d = Om, x = Um, S = null;
    return n != null && (n.unstable_strictMode === !0 && (a = !0), n.identifierPrefix !== void 0 && (l = n.identifierPrefix), n.onUncaughtError !== void 0 && (u = n.onUncaughtError), n.onCaughtError !== void 0 && (d = n.onCaughtError), n.onRecoverableError !== void 0 && (x = n.onRecoverableError), n.formState !== void 0 && (S = n.formState)), t = vh(
      e,
      1,
      !0,
      t,
      n ?? null,
      a,
      l,
      S,
      u,
      d,
      x,
      kh
    ), t.context = xh(null), n = t.current, a = Bt(), a = Hl(a), l = jn(a), l.callback = null, Mn(n, l, a), n = a, t.current.lanes = n, Ta(t, n), Wt(t), e[Ci] = t.current, ju(e), new $o(t);
  }, gs.version = "19.2.6", gs;
}
var Hh;
function K1() {
  if (Hh) return ec.exports;
  Hh = 1;
  function i() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (s) {
        console.error(s);
      }
  }
  return i(), ec.exports = Z1(), ec.exports;
}
var J1 = K1(), ac = { exports: {} }, bs = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qh;
function $1() {
  if (qh) return bs;
  qh = 1;
  var i = Symbol.for("react.transitional.element"), s = Symbol.for("react.fragment");
  function o(r, c, m) {
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
  return bs.Fragment = s, bs.jsx = o, bs.jsxs = o, bs;
}
var Gh;
function W1() {
  return Gh || (Gh = 1, ac.exports = $1()), ac.exports;
}
var Dn = W1();
const nf = H.createContext({});
function af(i) {
  const s = H.useRef(null);
  return s.current === null && (s.current = i()), s.current;
}
const I1 = typeof window < "u", yg = I1 ? H.useLayoutEffect : H.useEffect, Vl = /* @__PURE__ */ H.createContext(null);
function sf(i, s) {
  i.indexOf(s) === -1 && i.push(s);
}
function pl(i, s) {
  const o = i.indexOf(s);
  o > -1 && i.splice(o, 1);
}
const nn = (i, s, o) => o > s ? s : o < i ? i : o;
function Yh(i, s) {
  return s ? `${i}. For more information and steps for solving, visit https://motion.dev/troubleshooting/${s}` : i;
}
let ks = () => {
}, Ti = () => {
};
var xg;
typeof process < "u" && ((xg = process.env) == null ? void 0 : xg.NODE_ENV) !== "production" && (ks = (i, s, o) => {
  !i && typeof console < "u" && console.warn(Yh(s, o));
}, Ti = (i, s, o) => {
  if (!i)
    throw new Error(Yh(s, o));
});
const $n = {}, Ng = (i) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(i), Sg = (i) => typeof i == "object" && i !== null, Dg = (i) => /^0[^.\s]+$/u.test(i);
// @__NO_SIDE_EFFECTS__
function Eg(i) {
  let s;
  return () => (s === void 0 && (s = i()), s);
}
const qt = /* @__NO_SIDE_EFFECTS__ */ (i) => i, Bs = (...i) => i.reduce((s, o) => (r) => o(s(r))), ws = /* @__NO_SIDE_EFFECTS__ */ (i, s, o) => {
  const r = s - i;
  return r ? (o - i) / r : 1;
};
class of {
  constructor() {
    this.subscriptions = [];
  }
  add(s) {
    return sf(this.subscriptions, s), () => pl(this.subscriptions, s);
  }
  notify(s, o, r) {
    const c = this.subscriptions.length;
    if (c)
      if (c === 1)
        this.subscriptions[0](s, o, r);
      else
        for (let m = 0; m < c; m++) {
          const f = this.subscriptions[m];
          f && f(s, o, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const yt = /* @__NO_SIDE_EFFECTS__ */ (i) => i * 1e3, Ht = /* @__NO_SIDE_EFFECTS__ */ (i) => i / 1e3, wg = /* @__NO_SIDE_EFFECTS__ */ (i, s) => s ? i * (1e3 / s) : 0, Tg = (i, s, o) => (((1 - 3 * o + 3 * s) * i + (3 * o - 6 * s)) * i + 3 * s) * i, ey = 1e-7, ty = 12;
function ny(i, s, o, r, c) {
  let m, f, h = 0;
  do
    f = s + (o - s) / 2, m = Tg(f, r, c) - i, m > 0 ? o = f : s = f;
  while (Math.abs(m) > ey && ++h < ty);
  return f;
}
// @__NO_SIDE_EFFECTS__
function As(i, s, o, r) {
  if (i === s && o === r)
    return qt;
  const c = (m) => ny(m, 0, 1, i, o);
  return (m) => m === 0 || m === 1 ? m : Tg(c(m), s, r);
}
const Vg = /* @__NO_SIDE_EFFECTS__ */ (i) => (s) => s <= 0.5 ? i(2 * s) / 2 : (2 - i(2 * (1 - s))) / 2, Cg = /* @__NO_SIDE_EFFECTS__ */ (i) => (s) => 1 - i(1 - s), kg = /* @__PURE__ */ As(0.33, 1.53, 0.69, 0.99), lf = /* @__PURE__ */ Cg(kg), Bg = /* @__PURE__ */ Vg(lf), Ag = (i) => i >= 1 ? 1 : (i *= 2) < 1 ? 0.5 * lf(i) : 0.5 * (2 - Math.pow(2, -10 * (i - 1))), rf = (i) => 1 - Math.sin(Math.acos(i)), jg = /* @__PURE__ */ Cg(rf), Mg = /* @__PURE__ */ Vg(rf), iy = /* @__PURE__ */ As(0.42, 0, 1, 1), ay = /* @__PURE__ */ As(0, 0, 0.58, 1), Pg = /* @__PURE__ */ As(0.42, 0, 0.58, 1), sy = /* @__NO_SIDE_EFFECTS__ */ (i) => Array.isArray(i) && typeof i[0] != "number", _g = /* @__NO_SIDE_EFFECTS__ */ (i) => Array.isArray(i) && typeof i[0] == "number", Xh = {
  linear: qt,
  easeIn: iy,
  easeInOut: Pg,
  easeOut: ay,
  circIn: rf,
  circInOut: Mg,
  circOut: jg,
  backIn: lf,
  backInOut: Bg,
  backOut: kg,
  anticipate: Ag
}, oy = (i) => typeof i == "string", Fh = (i) => {
  if (/* @__PURE__ */ _g(i)) {
    Ti(i.length === 4, "Cubic bezier arrays must contain four numerical values.", "cubic-bezier-length");
    const [s, o, r, c] = i;
    return /* @__PURE__ */ As(s, o, r, c);
  } else if (oy(i))
    return Ti(Xh[i] !== void 0, `Invalid easing type '${i}'`, "invalid-easing-type"), Xh[i];
  return i;
}, el = [
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
function ly(i, s) {
  let o = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Set(), c = !1, m = !1;
  const f = /* @__PURE__ */ new WeakSet();
  let h = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  };
  function b(v) {
    f.has(v) && (g.schedule(v), i()), v(h);
  }
  const g = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (v, y = !1, N = !1) => {
      const V = N && c ? o : r;
      return y && f.add(v), V.add(v), v;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (v) => {
      r.delete(v), f.delete(v);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (v) => {
      if (h = v, c) {
        m = !0;
        return;
      }
      c = !0;
      const y = o;
      o = r, r = y, o.forEach(b), o.clear(), c = !1, m && (m = !1, g.process(v));
    }
  };
  return g;
}
const ry = 40;
function zg(i, s) {
  let o = !1, r = !0;
  const c = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, m = () => o = !0, f = el.reduce((L, q) => (L[q] = ly(m), L), {}), { setup: h, read: b, resolveKeyframes: g, preUpdate: v, update: y, preRender: N, render: w, postRender: V } = f, P = () => {
    const L = $n.useManualTiming, q = L ? c.timestamp : performance.now();
    o = !1, L || (c.delta = r ? 1e3 / 60 : Math.max(Math.min(q - c.timestamp, ry), 1)), c.timestamp = q, c.isProcessing = !0, h.process(c), b.process(c), g.process(c), v.process(c), y.process(c), N.process(c), w.process(c), V.process(c), c.isProcessing = !1, o && s && (r = !1, i(P));
  }, B = () => {
    o = !0, r = !0, c.isProcessing || i(P);
  };
  return { schedule: el.reduce((L, q) => {
    const F = f[q];
    return L[q] = (W, Q = !1, X = !1) => (o || B(), F.schedule(W, Q, X)), L;
  }, {}), cancel: (L) => {
    for (let q = 0; q < el.length; q++)
      f[el[q]].cancel(L);
  }, state: c, steps: f };
}
const { schedule: Pe, cancel: Wn, state: st, steps: sc } = /* @__PURE__ */ zg(typeof requestAnimationFrame < "u" ? requestAnimationFrame : qt, !0);
let sl;
function uy() {
  sl = void 0;
}
const ct = {
  now: () => (sl === void 0 && ct.set(st.isProcessing || $n.useManualTiming ? st.timestamp : performance.now()), sl),
  set: (i) => {
    sl = i, queueMicrotask(uy);
  }
}, Rg = (i) => (s) => typeof s == "string" && s.startsWith(i), Og = /* @__PURE__ */ Rg("--"), cy = /* @__PURE__ */ Rg("var(--"), uf = (i) => cy(i) ? fy.test(i.split("/*")[0].trim()) : !1, fy = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function Qh(i) {
  return typeof i != "string" ? !1 : i.split("/*")[0].includes("var(--");
}
const ya = {
  test: (i) => typeof i == "number",
  parse: parseFloat,
  transform: (i) => i
}, Ts = {
  ...ya,
  transform: (i) => nn(0, 1, i)
}, tl = {
  ...ya,
  default: 1
}, Ns = (i) => Math.round(i * 1e5) / 1e5, cf = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function dy(i) {
  return i == null;
}
const my = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, ff = (i, s) => (o) => !!(typeof o == "string" && my.test(o) && o.startsWith(i) || s && !dy(o) && Object.prototype.hasOwnProperty.call(o, s)), Ug = (i, s, o) => (r) => {
  if (typeof r != "string")
    return r;
  const [c, m, f, h] = r.match(cf);
  return {
    [i]: parseFloat(c),
    [s]: parseFloat(m),
    [o]: parseFloat(f),
    alpha: h !== void 0 ? parseFloat(h) : 1
  };
}, py = (i) => nn(0, 255, i), oc = {
  ...ya,
  transform: (i) => Math.round(py(i))
}, Si = {
  test: /* @__PURE__ */ ff("rgb", "red"),
  parse: /* @__PURE__ */ Ug("red", "green", "blue"),
  transform: ({ red: i, green: s, blue: o, alpha: r = 1 }) => "rgba(" + oc.transform(i) + ", " + oc.transform(s) + ", " + oc.transform(o) + ", " + Ns(Ts.transform(r)) + ")"
};
function hy(i) {
  let s = "", o = "", r = "", c = "";
  return i.length > 5 ? (s = i.substring(1, 3), o = i.substring(3, 5), r = i.substring(5, 7), c = i.substring(7, 9)) : (s = i.substring(1, 2), o = i.substring(2, 3), r = i.substring(3, 4), c = i.substring(4, 5), s += s, o += o, r += r, c += c), {
    red: parseInt(s, 16),
    green: parseInt(o, 16),
    blue: parseInt(r, 16),
    alpha: c ? parseInt(c, 16) / 255 : 1
  };
}
const Ec = {
  test: /* @__PURE__ */ ff("#"),
  parse: hy,
  transform: Si.transform
}, js = /* @__NO_SIDE_EFFECTS__ */ (i) => ({
  test: (s) => typeof s == "string" && s.endsWith(i) && s.split(" ").length === 1,
  parse: parseFloat,
  transform: (s) => `${s}${i}`
}), Sn = /* @__PURE__ */ js("deg"), tn = /* @__PURE__ */ js("%"), ie = /* @__PURE__ */ js("px"), gy = /* @__PURE__ */ js("vh"), by = /* @__PURE__ */ js("vw"), Zh = {
  ...tn,
  parse: (i) => tn.parse(i) / 100,
  transform: (i) => tn.transform(i * 100)
}, ma = {
  test: /* @__PURE__ */ ff("hsl", "hue"),
  parse: /* @__PURE__ */ Ug("hue", "saturation", "lightness"),
  transform: ({ hue: i, saturation: s, lightness: o, alpha: r = 1 }) => "hsla(" + Math.round(i) + ", " + tn.transform(Ns(s)) + ", " + tn.transform(Ns(o)) + ", " + Ns(Ts.transform(r)) + ")"
}, Ke = {
  test: (i) => Si.test(i) || Ec.test(i) || ma.test(i),
  parse: (i) => Si.test(i) ? Si.parse(i) : ma.test(i) ? ma.parse(i) : Ec.parse(i),
  transform: (i) => typeof i == "string" ? i : i.hasOwnProperty("red") ? Si.transform(i) : ma.transform(i),
  getAnimatableNone: (i) => {
    const s = Ke.parse(i);
    return s.alpha = 0, Ke.transform(s);
  }
}, vy = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function xy(i) {
  var s, o;
  return isNaN(i) && typeof i == "string" && (((s = i.match(cf)) == null ? void 0 : s.length) || 0) + (((o = i.match(vy)) == null ? void 0 : o.length) || 0) > 0;
}
const Lg = "number", Hg = "color", yy = "var", Ny = "var(", Kh = "${}", Sy = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function va(i) {
  const s = i.toString(), o = [], r = {
    color: [],
    number: [],
    var: []
  }, c = [];
  let m = 0;
  const h = s.replace(Sy, (b) => (Ke.test(b) ? (r.color.push(m), c.push(Hg), o.push(Ke.parse(b))) : b.startsWith(Ny) ? (r.var.push(m), c.push(yy), o.push(b)) : (r.number.push(m), c.push(Lg), o.push(parseFloat(b))), ++m, Kh)).split(Kh);
  return { values: o, split: h, indexes: r, types: c };
}
function Dy(i) {
  return va(i).values;
}
function qg({ split: i, types: s }) {
  const o = i.length;
  return (r) => {
    let c = "";
    for (let m = 0; m < o; m++)
      if (c += i[m], r[m] !== void 0) {
        const f = s[m];
        f === Lg ? c += Ns(r[m]) : f === Hg ? c += Ke.transform(r[m]) : c += r[m];
      }
    return c;
  };
}
function Ey(i) {
  return qg(va(i));
}
const wy = (i) => typeof i == "number" ? 0 : Ke.test(i) ? Ke.getAnimatableNone(i) : i, Ty = (i, s) => typeof i == "number" ? s != null && s.trim().endsWith("/") ? i : 0 : wy(i);
function Vy(i) {
  const s = va(i);
  return qg(s)(s.values.map((r, c) => Ty(r, s.split[c])));
}
const Zt = {
  test: xy,
  parse: Dy,
  createTransformer: Ey,
  getAnimatableNone: Vy
};
function lc(i, s, o) {
  return o < 0 && (o += 1), o > 1 && (o -= 1), o < 1 / 6 ? i + (s - i) * 6 * o : o < 1 / 2 ? s : o < 2 / 3 ? i + (s - i) * (2 / 3 - o) * 6 : i;
}
function Cy({ hue: i, saturation: s, lightness: o, alpha: r }) {
  i /= 360, s /= 100, o /= 100;
  let c = 0, m = 0, f = 0;
  if (!s)
    c = m = f = o;
  else {
    const h = o < 0.5 ? o * (1 + s) : o + s - o * s, b = 2 * o - h;
    c = lc(b, h, i + 1 / 3), m = lc(b, h, i), f = lc(b, h, i - 1 / 3);
  }
  return {
    red: Math.round(c * 255),
    green: Math.round(m * 255),
    blue: Math.round(f * 255),
    alpha: r
  };
}
function hl(i, s) {
  return (o) => o > 0 ? s : i;
}
const Me = (i, s, o) => i + (s - i) * o, rc = (i, s, o) => {
  const r = i * i, c = o * (s * s - r) + r;
  return c < 0 ? 0 : Math.sqrt(c);
}, ky = [Ec, Si, ma], By = (i) => ky.find((s) => s.test(i));
function Jh(i) {
  const s = By(i);
  if (ks(!!s, `'${i}' is not an animatable color. Use the equivalent color code instead.`, "color-not-animatable"), !s)
    return !1;
  let o = s.parse(i);
  return s === ma && (o = Cy(o)), o;
}
const $h = (i, s) => {
  const o = Jh(i), r = Jh(s);
  if (!o || !r)
    return hl(i, s);
  const c = { ...o };
  return (m) => (c.red = rc(o.red, r.red, m), c.green = rc(o.green, r.green, m), c.blue = rc(o.blue, r.blue, m), c.alpha = Me(o.alpha, r.alpha, m), Si.transform(c));
}, wc = /* @__PURE__ */ new Set(["none", "hidden"]);
function Ay(i, s) {
  return wc.has(i) ? (o) => o <= 0 ? i : s : (o) => o >= 1 ? s : i;
}
function jy(i, s) {
  return (o) => Me(i, s, o);
}
function df(i) {
  return typeof i == "number" ? jy : typeof i == "string" ? uf(i) ? hl : Ke.test(i) ? $h : _y : Array.isArray(i) ? Gg : typeof i == "object" ? Ke.test(i) ? $h : My : hl;
}
function Gg(i, s) {
  const o = [...i], r = o.length, c = i.map((m, f) => df(m)(m, s[f]));
  return (m) => {
    for (let f = 0; f < r; f++)
      o[f] = c[f](m);
    return o;
  };
}
function My(i, s) {
  const o = { ...i, ...s }, r = {};
  for (const c in o)
    i[c] !== void 0 && s[c] !== void 0 && (r[c] = df(i[c])(i[c], s[c]));
  return (c) => {
    for (const m in r)
      o[m] = r[m](c);
    return o;
  };
}
function Py(i, s) {
  const o = [], r = { color: 0, var: 0, number: 0 };
  for (let c = 0; c < s.values.length; c++) {
    const m = s.types[c], f = i.indexes[m][r[m]], h = i.values[f] ?? 0;
    o[c] = h, r[m]++;
  }
  return o;
}
const _y = (i, s) => {
  const o = Zt.createTransformer(s), r = va(i), c = va(s);
  return r.indexes.var.length === c.indexes.var.length && r.indexes.color.length === c.indexes.color.length && r.indexes.number.length >= c.indexes.number.length ? wc.has(i) && !c.values.length || wc.has(s) && !r.values.length ? Ay(i, s) : Bs(Gg(Py(r, c), c.values), o) : (ks(!0, `Complex values '${i}' and '${s}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`, "complex-values-different"), hl(i, s));
};
function Yg(i, s, o) {
  return typeof i == "number" && typeof s == "number" && typeof o == "number" ? Me(i, s, o) : df(i)(i, s);
}
const zy = (i) => {
  const s = ({ timestamp: o }) => i(o);
  return {
    start: (o = !0) => Pe.update(s, o),
    stop: () => Wn(s),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => st.isProcessing ? st.timestamp : ct.now()
  };
}, Xg = (i, s, o = 10) => {
  let r = "";
  const c = Math.max(Math.round(s / o), 2);
  for (let m = 0; m < c; m++)
    r += Math.round(i(m / (c - 1)) * 1e4) / 1e4 + ", ";
  return `linear(${r.substring(0, r.length - 2)})`;
}, gl = 2e4;
function mf(i) {
  let s = 0;
  const o = 50;
  let r = i.next(s);
  for (; !r.done && s < gl; )
    s += o, r = i.next(s);
  return s >= gl ? 1 / 0 : s;
}
function Ry(i, s = 100, o) {
  const r = o({ ...i, keyframes: [0, s] }), c = Math.min(mf(r), gl);
  return {
    type: "keyframes",
    ease: (m) => r.next(c * m).value / s,
    duration: /* @__PURE__ */ Ht(c)
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
function Tc(i, s) {
  return i * Math.sqrt(1 - s * s);
}
const Oy = 12;
function Uy(i, s, o) {
  let r = o;
  for (let c = 1; c < Oy; c++)
    r = r - i(r) / s(r);
  return r;
}
const uc = 1e-3;
function Ly({ duration: i = Ue.duration, bounce: s = Ue.bounce, velocity: o = Ue.velocity, mass: r = Ue.mass }) {
  let c, m;
  ks(i <= /* @__PURE__ */ yt(Ue.maxDuration), "Spring duration must be 10 seconds or less", "spring-duration-limit");
  let f = 1 - s;
  f = nn(Ue.minDamping, Ue.maxDamping, f), i = nn(Ue.minDuration, Ue.maxDuration, /* @__PURE__ */ Ht(i)), f < 1 ? (c = (g) => {
    const v = g * f, y = v * i, N = v - o, w = Tc(g, f), V = Math.exp(-y);
    return uc - N / w * V;
  }, m = (g) => {
    const y = g * f * i, N = y * o + o, w = Math.pow(f, 2) * Math.pow(g, 2) * i, V = Math.exp(-y), P = Tc(Math.pow(g, 2), f);
    return (-c(g) + uc > 0 ? -1 : 1) * ((N - w) * V) / P;
  }) : (c = (g) => {
    const v = Math.exp(-g * i), y = (g - o) * i + 1;
    return -uc + v * y;
  }, m = (g) => {
    const v = Math.exp(-g * i), y = (o - g) * (i * i);
    return v * y;
  });
  const h = 5 / i, b = Uy(c, m, h);
  if (i = /* @__PURE__ */ yt(i), isNaN(b))
    return {
      stiffness: Ue.stiffness,
      damping: Ue.damping,
      duration: i
    };
  {
    const g = Math.pow(b, 2) * r;
    return {
      stiffness: g,
      damping: f * 2 * Math.sqrt(r * g),
      duration: i
    };
  }
}
const Hy = ["duration", "bounce"], qy = ["stiffness", "damping", "mass"];
function Wh(i, s) {
  return s.some((o) => i[o] !== void 0);
}
function Gy(i) {
  let s = {
    velocity: Ue.velocity,
    stiffness: Ue.stiffness,
    damping: Ue.damping,
    mass: Ue.mass,
    isResolvedFromDuration: !1,
    ...i
  };
  if (!Wh(i, qy) && Wh(i, Hy))
    if (s.velocity = 0, i.visualDuration) {
      const o = i.visualDuration, r = 2 * Math.PI / (o * 1.2), c = r * r, m = 2 * nn(0.05, 1, 1 - (i.bounce || 0)) * Math.sqrt(c);
      s = {
        ...s,
        mass: Ue.mass,
        stiffness: c,
        damping: m
      };
    } else {
      const o = Ly({ ...i, velocity: 0 });
      s = {
        ...s,
        ...o,
        mass: Ue.mass
      }, s.isResolvedFromDuration = !0;
    }
  return s;
}
function bl(i = Ue.visualDuration, s = Ue.bounce) {
  const o = typeof i != "object" ? {
    visualDuration: i,
    keyframes: [0, 1],
    bounce: s
  } : i;
  let { restSpeed: r, restDelta: c } = o;
  const m = o.keyframes[0], f = o.keyframes[o.keyframes.length - 1], h = { done: !1, value: m }, { stiffness: b, damping: g, mass: v, duration: y, velocity: N, isResolvedFromDuration: w } = Gy({
    ...o,
    velocity: -/* @__PURE__ */ Ht(o.velocity || 0)
  }), V = N || 0, P = g / (2 * Math.sqrt(b * v)), B = f - m, z = /* @__PURE__ */ Ht(Math.sqrt(b / v)), G = Math.abs(B) < 5;
  r || (r = G ? Ue.restSpeed.granular : Ue.restSpeed.default), c || (c = G ? Ue.restDelta.granular : Ue.restDelta.default);
  let L, q, F, W, Q, X;
  if (P < 1)
    F = Tc(z, P), W = (V + P * z * B) / F, L = (ee) => {
      const Y = Math.exp(-P * z * ee);
      return f - Y * (W * Math.sin(F * ee) + B * Math.cos(F * ee));
    }, Q = P * z * W + B * F, X = P * z * B - W * F, q = (ee) => Math.exp(-P * z * ee) * (Q * Math.sin(F * ee) + X * Math.cos(F * ee));
  else if (P === 1) {
    L = (Y) => f - Math.exp(-z * Y) * (B + (V + z * B) * Y);
    const ee = V + z * B;
    q = (Y) => Math.exp(-z * Y) * (z * ee * Y - V);
  } else {
    const ee = z * Math.sqrt(P * P - 1);
    L = (ce) => {
      const le = Math.exp(-P * z * ce), j = Math.min(ee * ce, 300);
      return f - le * ((V + P * z * B) * Math.sinh(j) + ee * B * Math.cosh(j)) / ee;
    };
    const Y = (V + P * z * B) / ee, I = P * z * Y - B * ee, ye = P * z * B - Y * ee;
    q = (ce) => {
      const le = Math.exp(-P * z * ce), j = Math.min(ee * ce, 300);
      return le * (I * Math.sinh(j) + ye * Math.cosh(j));
    };
  }
  const J = {
    calculatedDuration: w && y || null,
    velocity: (ee) => /* @__PURE__ */ yt(q(ee)),
    next: (ee) => {
      if (!w && P < 1) {
        const I = Math.exp(-P * z * ee), ye = Math.sin(F * ee), ce = Math.cos(F * ee), le = f - I * (W * ye + B * ce), j = /* @__PURE__ */ yt(I * (Q * ye + X * ce));
        return h.done = Math.abs(j) <= r && Math.abs(f - le) <= c, h.value = h.done ? f : le, h;
      }
      const Y = L(ee);
      if (w)
        h.done = ee >= y;
      else {
        const I = /* @__PURE__ */ yt(q(ee));
        h.done = Math.abs(I) <= r && Math.abs(f - Y) <= c;
      }
      return h.value = h.done ? f : Y, h;
    },
    toString: () => {
      const ee = Math.min(mf(J), gl), Y = Xg((I) => J.next(ee * I).value, ee, 30);
      return ee + "ms " + Y;
    },
    toTransition: () => {
    }
  };
  return J;
}
bl.applyToOptions = (i) => {
  const s = Ry(i, 100, bl);
  return i.ease = s.ease, i.duration = /* @__PURE__ */ yt(s.duration), i.type = "keyframes", i;
};
const Yy = 5;
function Fg(i, s, o) {
  const r = Math.max(s - Yy, 0);
  return /* @__PURE__ */ wg(o - i(r), s - r);
}
function Vc({ keyframes: i, velocity: s = 0, power: o = 0.8, timeConstant: r = 325, bounceDamping: c = 10, bounceStiffness: m = 500, modifyTarget: f, min: h, max: b, restDelta: g = 0.5, restSpeed: v }) {
  const y = i[0], N = {
    done: !1,
    value: y
  }, w = (X) => h !== void 0 && X < h || b !== void 0 && X > b, V = (X) => h === void 0 ? b : b === void 0 || Math.abs(h - X) < Math.abs(b - X) ? h : b;
  let P = o * s;
  const B = y + P, z = f === void 0 ? B : f(B);
  z !== B && (P = z - y);
  const G = (X) => -P * Math.exp(-X / r), L = (X) => z + G(X), q = (X) => {
    const J = G(X), ee = L(X);
    N.done = Math.abs(J) <= g, N.value = N.done ? z : ee;
  };
  let F, W;
  const Q = (X) => {
    w(N.value) && (F = X, W = bl({
      keyframes: [N.value, V(N.value)],
      velocity: Fg(L, X, N.value),
      // TODO: This should be passing * 1000
      damping: c,
      stiffness: m,
      restDelta: g,
      restSpeed: v
    }));
  };
  return Q(0), {
    calculatedDuration: null,
    next: (X) => {
      let J = !1;
      return !W && F === void 0 && (J = !0, q(X), Q(X)), F !== void 0 && X >= F ? W.next(X - F) : (!J && q(X), N);
    }
  };
}
function Xy(i, s, o) {
  const r = [], c = o || $n.mix || Yg, m = i.length - 1;
  for (let f = 0; f < m; f++) {
    let h = c(i[f], i[f + 1]);
    if (s) {
      const b = Array.isArray(s) ? s[f] || qt : s;
      h = Bs(b, h);
    }
    r.push(h);
  }
  return r;
}
function Fy(i, s, { clamp: o = !0, ease: r, mixer: c } = {}) {
  const m = i.length;
  if (Ti(m === s.length, "Both input and output ranges must be the same length", "range-length"), m === 1)
    return () => s[0];
  if (m === 2 && s[0] === s[1])
    return () => s[1];
  const f = i[0] === i[1];
  i[0] > i[m - 1] && (i = [...i].reverse(), s = [...s].reverse());
  const h = Xy(s, r, c), b = h.length, g = (v) => {
    if (f && v < i[0])
      return s[0];
    let y = 0;
    if (b > 1)
      for (; y < i.length - 2 && !(v < i[y + 1]); y++)
        ;
    const N = /* @__PURE__ */ ws(i[y], i[y + 1], v);
    return h[y](N);
  };
  return o ? (v) => g(nn(i[0], i[m - 1], v)) : g;
}
function Qy(i, s) {
  const o = i[i.length - 1];
  for (let r = 1; r <= s; r++) {
    const c = /* @__PURE__ */ ws(0, s, r);
    i.push(Me(o, 1, c));
  }
}
function Zy(i) {
  const s = [0];
  return Qy(s, i.length - 1), s;
}
function Ky(i, s) {
  return i.map((o) => o * s);
}
function Jy(i, s) {
  return i.map(() => s || Pg).splice(0, i.length - 1);
}
function Ss({ duration: i = 300, keyframes: s, times: o, ease: r = "easeInOut" }) {
  const c = /* @__PURE__ */ sy(r) ? r.map(Fh) : Fh(r), m = {
    done: !1,
    value: s[0]
  }, f = Ky(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    o && o.length === s.length ? o : Zy(s),
    i
  ), h = Fy(f, s, {
    ease: Array.isArray(c) ? c : Jy(s, c)
  });
  return {
    calculatedDuration: i,
    next: (b) => (m.value = h(b), m.done = b >= i, m)
  };
}
const $y = (i) => i !== null;
function Cl(i, { repeat: s, repeatType: o = "loop" }, r, c = 1) {
  const m = i.filter($y), h = c < 0 || s && o !== "loop" && s % 2 === 1 ? 0 : m.length - 1;
  return !h || r === void 0 ? m[h] : r;
}
const Wy = {
  decay: Vc,
  inertia: Vc,
  tween: Ss,
  keyframes: Ss,
  spring: bl
};
function Qg(i) {
  typeof i.type == "string" && (i.type = Wy[i.type]);
}
class pf {
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
  then(s, o) {
    return this.finished.then(s, o);
  }
}
const Iy = (i) => i / 100;
class vl extends pf {
  constructor(s) {
    super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.delayState = {
      done: !1,
      value: void 0
    }, this.stop = () => {
      var r, c;
      const { motionValue: o } = this.options;
      o && o.updatedAt !== ct.now() && this.tick(ct.now()), this.isStopped = !0, this.state !== "idle" && (this.teardown(), (c = (r = this.options).onStop) == null || c.call(r));
    }, this.options = s, this.initAnimation(), this.play(), s.autoplay === !1 && this.pause();
  }
  initAnimation() {
    const { options: s } = this;
    Qg(s);
    const { type: o = Ss, repeat: r = 0, repeatDelay: c = 0, repeatType: m, velocity: f = 0 } = s;
    let { keyframes: h } = s;
    const b = o || Ss;
    b !== Ss && typeof h[0] != "number" && (this.mixKeyframes = Bs(Iy, Yg(h[0], h[1])), h = [0, 100]);
    const g = b({ ...s, keyframes: h });
    m === "mirror" && (this.mirroredGenerator = b({
      ...s,
      keyframes: [...h].reverse(),
      velocity: -f
    })), g.calculatedDuration === null && (g.calculatedDuration = mf(g));
    const { calculatedDuration: v } = g;
    this.calculatedDuration = v, this.resolvedDuration = v + c, this.totalDuration = this.resolvedDuration * (r + 1) - c, this.generator = g;
  }
  updateTime(s) {
    const o = Math.round(s - this.startTime) * this.playbackSpeed;
    this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = o;
  }
  tick(s, o = !1) {
    const { generator: r, totalDuration: c, mixKeyframes: m, mirroredGenerator: f, resolvedDuration: h, calculatedDuration: b } = this;
    if (this.startTime === null)
      return r.next(0);
    const { delay: g = 0, keyframes: v, repeat: y, repeatType: N, repeatDelay: w, type: V, onUpdate: P, finalKeyframe: B } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, s) : this.speed < 0 && (this.startTime = Math.min(s - c / this.speed, this.startTime)), o ? this.currentTime = s : this.updateTime(s);
    const z = this.currentTime - g * (this.playbackSpeed >= 0 ? 1 : -1), G = this.playbackSpeed >= 0 ? z < 0 : z > c;
    this.currentTime = Math.max(z, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = c);
    let L = this.currentTime, q = r;
    if (y) {
      const X = Math.min(this.currentTime, c) / h;
      let J = Math.floor(X), ee = X % 1;
      !ee && X >= 1 && (ee = 1), ee === 1 && J--, J = Math.min(J, y + 1), !!(J % 2) && (N === "reverse" ? (ee = 1 - ee, w && (ee -= w / h)) : N === "mirror" && (q = f)), L = nn(0, 1, ee) * h;
    }
    let F;
    G ? (this.delayState.value = v[0], F = this.delayState) : F = q.next(L), m && !G && (F.value = m(F.value));
    let { done: W } = F;
    !G && b !== null && (W = this.playbackSpeed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
    const Q = this.holdTime === null && (this.state === "finished" || this.state === "running" && W);
    return Q && V !== Vc && (F.value = Cl(v, this.options, B, this.speed)), P && P(F.value), Q && this.finish(), F;
  }
  /**
   * Allows the returned animation to be awaited or promise-chained. Currently
   * resolves when the animation finishes at all but in a future update could/should
   * reject if its cancels.
   */
  then(s, o) {
    return this.finished.then(s, o);
  }
  get duration() {
    return /* @__PURE__ */ Ht(this.calculatedDuration);
  }
  get iterationDuration() {
    const { delay: s = 0 } = this.options || {};
    return this.duration + /* @__PURE__ */ Ht(s);
  }
  get time() {
    return /* @__PURE__ */ Ht(this.currentTime);
  }
  set time(s) {
    s = /* @__PURE__ */ yt(s), this.currentTime = s, this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = s : this.driver && (this.startTime = this.driver.now() - s / this.playbackSpeed), this.driver ? this.driver.start(!1) : (this.startTime = 0, this.state = "paused", this.holdTime = s, this.tick(s));
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
    const o = this.generator.next(s).value;
    return Fg((r) => this.generator.next(r).value, s, o);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(s) {
    const o = this.playbackSpeed !== s;
    o && this.driver && this.updateTime(ct.now()), this.playbackSpeed = s, o && this.driver && (this.time = /* @__PURE__ */ Ht(this.currentTime));
  }
  play() {
    var c, m;
    if (this.isStopped)
      return;
    const { driver: s = zy, startTime: o } = this.options;
    this.driver || (this.driver = s((f) => this.tick(f))), (m = (c = this.options).onPlay) == null || m.call(c);
    const r = this.driver.now();
    this.state === "finished" ? (this.updateFinished(), this.startTime = r) : this.holdTime !== null ? this.startTime = r - this.holdTime : this.startTime || (this.startTime = o ?? r), this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start();
  }
  pause() {
    this.state = "paused", this.updateTime(ct.now()), this.holdTime = this.currentTime;
  }
  complete() {
    this.state !== "running" && this.play(), this.state = "finished", this.holdTime = null;
  }
  finish() {
    var s, o;
    this.notifyFinished(), this.teardown(), this.state = "finished", (o = (s = this.options).onComplete) == null || o.call(s);
  }
  cancel() {
    var s, o;
    this.holdTime = null, this.startTime = 0, this.tick(0), this.teardown(), (o = (s = this.options).onCancel) == null || o.call(s);
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
    var o;
    return this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear", this.initAnimation()), (o = this.driver) == null || o.stop(), s.observe(this);
  }
}
function eN(i) {
  for (let s = 1; s < i.length; s++)
    i[s] ?? (i[s] = i[s - 1]);
}
const Di = (i) => i * 180 / Math.PI, Cc = (i) => {
  const s = Di(Math.atan2(i[1], i[0]));
  return kc(s);
}, tN = {
  x: 4,
  y: 5,
  translateX: 4,
  translateY: 5,
  scaleX: 0,
  scaleY: 3,
  scale: (i) => (Math.abs(i[0]) + Math.abs(i[3])) / 2,
  rotate: Cc,
  rotateZ: Cc,
  skewX: (i) => Di(Math.atan(i[1])),
  skewY: (i) => Di(Math.atan(i[2])),
  skew: (i) => (Math.abs(i[1]) + Math.abs(i[2])) / 2
}, kc = (i) => (i = i % 360, i < 0 && (i += 360), i), Ih = Cc, e0 = (i) => Math.sqrt(i[0] * i[0] + i[1] * i[1]), t0 = (i) => Math.sqrt(i[4] * i[4] + i[5] * i[5]), nN = {
  x: 12,
  y: 13,
  z: 14,
  translateX: 12,
  translateY: 13,
  translateZ: 14,
  scaleX: e0,
  scaleY: t0,
  scale: (i) => (e0(i) + t0(i)) / 2,
  rotateX: (i) => kc(Di(Math.atan2(i[6], i[5]))),
  rotateY: (i) => kc(Di(Math.atan2(-i[2], i[0]))),
  rotateZ: Ih,
  rotate: Ih,
  skewX: (i) => Di(Math.atan(i[4])),
  skewY: (i) => Di(Math.atan(i[1])),
  skew: (i) => (Math.abs(i[1]) + Math.abs(i[4])) / 2
};
function Bc(i) {
  return i.includes("scale") ? 1 : 0;
}
function Ac(i, s) {
  if (!i || i === "none")
    return Bc(s);
  const o = i.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let r, c;
  if (o)
    r = nN, c = o;
  else {
    const h = i.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    r = tN, c = h;
  }
  if (!c)
    return Bc(s);
  const m = r[s], f = c[1].split(",").map(aN);
  return typeof m == "function" ? m(f) : f[m];
}
const iN = (i, s) => {
  const { transform: o = "none" } = getComputedStyle(i);
  return Ac(o, s);
};
function aN(i) {
  return parseFloat(i.trim());
}
const Na = [
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
], Sa = /* @__PURE__ */ new Set([...Na, "pathRotation"]), n0 = (i) => i === ya || i === ie, sN = /* @__PURE__ */ new Set(["x", "y", "z"]), oN = Na.filter((i) => !sN.has(i));
function lN(i) {
  const s = [];
  return oN.forEach((o) => {
    const r = i.getValue(o);
    r !== void 0 && (s.push([o, r.get()]), r.set(o.startsWith("scale") ? 1 : 0));
  }), s;
}
const Jn = {
  // Dimensions
  width: ({ x: i }, { paddingLeft: s = "0", paddingRight: o = "0", boxSizing: r }) => {
    const c = i.max - i.min;
    return r === "border-box" ? c : c - parseFloat(s) - parseFloat(o);
  },
  height: ({ y: i }, { paddingTop: s = "0", paddingBottom: o = "0", boxSizing: r }) => {
    const c = i.max - i.min;
    return r === "border-box" ? c : c - parseFloat(s) - parseFloat(o);
  },
  top: (i, { top: s }) => parseFloat(s),
  left: (i, { left: s }) => parseFloat(s),
  bottom: ({ y: i }, { top: s }) => parseFloat(s) + (i.max - i.min),
  right: ({ x: i }, { left: s }) => parseFloat(s) + (i.max - i.min),
  // Transform
  x: (i, { transform: s }) => Ac(s, "x"),
  y: (i, { transform: s }) => Ac(s, "y")
};
Jn.translateX = Jn.x;
Jn.translateY = Jn.y;
const Ei = /* @__PURE__ */ new Set();
let jc = !1, Mc = !1, Pc = !1;
function Zg() {
  if (Mc) {
    const i = Array.from(Ei).filter((r) => r.needsMeasurement), s = new Set(i.map((r) => r.element)), o = /* @__PURE__ */ new Map();
    s.forEach((r) => {
      const c = lN(r);
      c.length && (o.set(r, c), r.render());
    }), i.forEach((r) => r.measureInitialState()), s.forEach((r) => {
      r.render();
      const c = o.get(r);
      c && c.forEach(([m, f]) => {
        var h;
        (h = r.getValue(m)) == null || h.set(f);
      });
    }), i.forEach((r) => r.measureEndState()), i.forEach((r) => {
      r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
    });
  }
  Mc = !1, jc = !1, Ei.forEach((i) => i.complete(Pc)), Ei.clear();
}
function Kg() {
  Ei.forEach((i) => {
    i.readKeyframes(), i.needsMeasurement && (Mc = !0);
  });
}
function rN() {
  Pc = !0, Kg(), Zg(), Pc = !1;
}
class hf {
  constructor(s, o, r, c, m, f = !1) {
    this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...s], this.onComplete = o, this.name = r, this.motionValue = c, this.element = m, this.isAsync = f;
  }
  scheduleResolve() {
    this.state = "scheduled", this.isAsync ? (Ei.add(this), jc || (jc = !0, Pe.read(Kg), Pe.resolveKeyframes(Zg))) : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const { unresolvedKeyframes: s, name: o, element: r, motionValue: c } = this;
    if (s[0] === null) {
      const m = c == null ? void 0 : c.get(), f = s[s.length - 1];
      if (m !== void 0)
        s[0] = m;
      else if (r && o) {
        const h = r.readValue(o, f);
        h != null && (s[0] = h);
      }
      s[0] === void 0 && (s[0] = f), c && m === void 0 && c.set(s[0]);
    }
    eN(s);
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
    this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, s), Ei.delete(this);
  }
  cancel() {
    this.state === "scheduled" && (Ei.delete(this), this.state = "pending");
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const uN = (i) => i.startsWith("--");
function Jg(i, s, o) {
  uN(s) ? i.style.setProperty(s, o) : i.style[s] = o;
}
const cN = {};
function $g(i, s) {
  const o = /* @__PURE__ */ Eg(i);
  return () => cN[s] ?? o();
}
const fN = /* @__PURE__ */ $g(() => window.ScrollTimeline !== void 0, "scrollTimeline"), Wg = /* @__PURE__ */ $g(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing"), ys = ([i, s, o, r]) => `cubic-bezier(${i}, ${s}, ${o}, ${r})`, i0 = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ ys([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ ys([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ ys([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ ys([0.33, 1.53, 0.69, 0.99])
};
function Ig(i, s) {
  if (i)
    return typeof i == "function" ? Wg() ? Xg(i, s) : "ease-out" : /* @__PURE__ */ _g(i) ? ys(i) : Array.isArray(i) ? i.map((o) => Ig(o, s) || i0.easeOut) : i0[i];
}
function dN(i, s, o, { delay: r = 0, duration: c = 300, repeat: m = 0, repeatType: f = "loop", ease: h = "easeOut", times: b } = {}, g = void 0) {
  const v = {
    [s]: o
  };
  b && (v.offset = b);
  const y = Ig(h, c);
  Array.isArray(y) && (v.easing = y);
  const N = {
    delay: r,
    duration: c,
    easing: Array.isArray(y) ? "linear" : y,
    fill: "both",
    iterations: m + 1,
    direction: f === "reverse" ? "alternate" : "normal"
  };
  return g && (N.pseudoElement = g), i.animate(v, N);
}
function eb(i) {
  return typeof i == "function" && "applyToOptions" in i;
}
function mN({ type: i, ...s }) {
  return eb(i) && Wg() ? i.applyToOptions(s) : (s.duration ?? (s.duration = 300), s.ease ?? (s.ease = "easeOut"), s);
}
class tb extends pf {
  constructor(s) {
    if (super(), this.finishedTime = null, this.isStopped = !1, this.manualStartTime = null, !s)
      return;
    const { element: o, name: r, keyframes: c, pseudoElement: m, allowFlatten: f = !1, finalKeyframe: h, onComplete: b } = s;
    this.isPseudoElement = !!m, this.allowFlatten = f, this.options = s, Ti(typeof s.type != "string", `Mini animate() doesn't support "type" as a string.`, "mini-spring");
    const g = mN(s);
    this.animation = dN(o, r, c, g, m), g.autoplay === !1 && this.animation.pause(), this.animation.onfinish = () => {
      if (this.finishedTime = this.time, !m) {
        const v = Cl(c, this.options, h, this.speed);
        this.updateMotionValue && this.updateMotionValue(v), Jg(o, r, v), this.animation.cancel();
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
    var s, o;
    (o = (s = this.animation).finish) == null || o.call(s);
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
    var o, r, c;
    const s = (o = this.options) == null ? void 0 : o.element;
    !this.isPseudoElement && (s != null && s.isConnected) && ((c = (r = this.animation).commitStyles) == null || c.call(r));
  }
  get duration() {
    var o, r;
    const s = ((r = (o = this.animation.effect) == null ? void 0 : o.getComputedTiming) == null ? void 0 : r.call(o).duration) || 0;
    return /* @__PURE__ */ Ht(Number(s));
  }
  get iterationDuration() {
    const { delay: s = 0 } = this.options || {};
    return this.duration + /* @__PURE__ */ Ht(s);
  }
  get time() {
    return /* @__PURE__ */ Ht(Number(this.animation.currentTime) || 0);
  }
  set time(s) {
    const o = this.finishedTime !== null;
    this.manualStartTime = null, this.finishedTime = null, this.animation.currentTime = /* @__PURE__ */ yt(s), o && this.animation.pause();
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
  attachTimeline({ timeline: s, rangeStart: o, rangeEnd: r, observe: c }) {
    var m;
    return this.allowFlatten && ((m = this.animation.effect) == null || m.updateTiming({ easing: "linear" })), this.animation.onfinish = null, s && fN() ? (this.animation.timeline = s, o && (this.animation.rangeStart = o), r && (this.animation.rangeEnd = r), qt) : c(this);
  }
}
const nb = {
  anticipate: Ag,
  backInOut: Bg,
  circInOut: Mg
};
function pN(i) {
  return i in nb;
}
function hN(i) {
  typeof i.ease == "string" && pN(i.ease) && (i.ease = nb[i.ease]);
}
const cc = 10;
class gN extends tb {
  constructor(s) {
    hN(s), Qg(s), super(s), s.startTime !== void 0 && s.autoplay !== !1 && (this.startTime = s.startTime), this.options = s;
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
    const { motionValue: o, onUpdate: r, onComplete: c, element: m, ...f } = this.options;
    if (!o)
      return;
    if (s !== void 0) {
      o.set(s);
      return;
    }
    const h = new vl({
      ...f,
      autoplay: !1
    }), b = Math.max(cc, ct.now() - this.startTime), g = nn(0, cc, b - cc), v = h.sample(b).value, { name: y } = this.options;
    m && y && Jg(m, y, v), o.setWithVelocity(h.sample(Math.max(0, b - g)).value, v, g), h.stop();
  }
}
const a0 = (i, s) => s === "zIndex" ? !1 : !!(typeof i == "number" || Array.isArray(i) || typeof i == "string" && // It's animatable if we have a string
(Zt.test(i) || i === "0") && // And it contains numbers and/or colors
!i.startsWith("url("));
function bN(i) {
  const s = i[0];
  if (i.length === 1)
    return !0;
  for (let o = 0; o < i.length; o++)
    if (i[o] !== s)
      return !0;
}
function vN(i, s, o, r) {
  const c = i[0];
  if (c === null)
    return !1;
  if (s === "display" || s === "visibility")
    return !0;
  const m = i[i.length - 1], f = a0(c, s), h = a0(m, s);
  return ks(f === h, `You are trying to animate ${s} from "${c}" to "${m}". "${f ? m : c}" is not an animatable value.`, "value-not-animatable"), !f || !h ? !1 : bN(i) || (o === "spring" || eb(o)) && r;
}
function _c(i) {
  i.duration = 0, i.type = "keyframes";
}
const ib = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform"
  // TODO: Can be accelerated but currently disabled until https://issues.chromium.org/issues/41491098 is resolved
  // or until we implement support for linear() easing.
  // "background-color"
]), xN = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
function yN(i) {
  for (let s = 0; s < i.length; s++)
    if (typeof i[s] == "string" && xN.test(i[s]))
      return !0;
  return !1;
}
const NN = /* @__PURE__ */ new Set([
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
]), SN = /* @__PURE__ */ Eg(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function DN(i) {
  var y;
  const { motionValue: s, name: o, repeatDelay: r, repeatType: c, damping: m, type: f, keyframes: h } = i;
  if (!(((y = s == null ? void 0 : s.owner) == null ? void 0 : y.current) instanceof HTMLElement))
    return !1;
  const { onUpdate: g, transformTemplate: v } = s.owner.getProps();
  return SN() && o && /**
   * Force WAAPI for color properties with browser-only color formats
   * (oklch, oklab, lab, lch, etc.) that the JS animation path can't parse.
   */
  (ib.has(o) || NN.has(o) && yN(h)) && (o !== "transform" || !v) && /**
   * If we're outputting values to onUpdate then we can't use WAAPI as there's
   * no way to read the value from WAAPI every frame.
   */
  !g && !r && c !== "mirror" && m !== 0 && f !== "inertia";
}
const EN = 40;
class wN extends pf {
  constructor({ autoplay: s = !0, delay: o = 0, type: r = "keyframes", repeat: c = 0, repeatDelay: m = 0, repeatType: f = "loop", keyframes: h, name: b, motionValue: g, element: v, ...y }) {
    var V;
    super(), this.stop = () => {
      var P, B;
      this._animation && (this._animation.stop(), (P = this.stopTimeline) == null || P.call(this)), (B = this.keyframeResolver) == null || B.cancel();
    }, this.createdAt = ct.now();
    const N = {
      autoplay: s,
      delay: o,
      type: r,
      repeat: c,
      repeatDelay: m,
      repeatType: f,
      name: b,
      motionValue: g,
      element: v,
      ...y
    }, w = (v == null ? void 0 : v.KeyframeResolver) || hf;
    this.keyframeResolver = new w(h, (P, B, z) => this.onKeyframesResolved(P, B, N, !z), b, g, v), (V = this.keyframeResolver) == null || V.scheduleResolve();
  }
  onKeyframesResolved(s, o, r, c) {
    var z, G;
    this.keyframeResolver = void 0;
    const { name: m, type: f, velocity: h, delay: b, isHandoff: g, onUpdate: v } = r;
    this.resolvedAt = ct.now();
    let y = !0;
    vN(s, m, f, h) || (y = !1, ($n.instantAnimations || !b) && (v == null || v(Cl(s, r, o))), s[0] = s[s.length - 1], _c(r), r.repeat = 0);
    const w = {
      startTime: c ? this.resolvedAt ? this.resolvedAt - this.createdAt > EN ? this.resolvedAt : this.createdAt : this.createdAt : void 0,
      finalKeyframe: o,
      ...r,
      keyframes: s
    }, V = y && !g && DN(w), P = (G = (z = w.motionValue) == null ? void 0 : z.owner) == null ? void 0 : G.current;
    let B;
    if (V)
      try {
        B = new gN({
          ...w,
          element: P
        });
      } catch {
        B = new vl(w);
      }
    else
      B = new vl(w);
    B.finished.then(() => {
      this.notifyFinished();
    }).catch(qt), this.pendingTimeline && (this.stopTimeline = B.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = B;
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(s, o) {
    return this.finished.finally(s).then(() => {
    });
  }
  get animation() {
    var s;
    return this._animation || ((s = this.keyframeResolver) == null || s.resume(), rN()), this._animation;
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
function ab(i, s, o, r = 0, c = 1) {
  const m = Array.from(i).sort((g, v) => g.sortNodePosition(v)).indexOf(s), f = i.size, h = (f - 1) * r;
  return typeof o == "function" ? o(m, f) : c === 1 ? m * r : h - m * r;
}
const s0 = 30, TN = (i) => !isNaN(parseFloat(i));
class VN {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   */
  constructor(s, o = {}) {
    this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (r) => {
      var m;
      const c = ct.now();
      if (this.updatedAt !== c && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(r), this.current !== this.prev && ((m = this.events.change) == null || m.notify(this.current), this.dependents))
        for (const f of this.dependents)
          f.dirty();
    }, this.hasAnimated = !1, this.setCurrent(s), this.owner = o.owner;
  }
  setCurrent(s) {
    this.current = s, this.updatedAt = ct.now(), this.canTrackVelocity === null && s !== void 0 && (this.canTrackVelocity = TN(this.current));
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
  on(s, o) {
    this.events[s] || (this.events[s] = new of());
    const r = this.events[s].add(o);
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
  attach(s, o) {
    this.passiveEffect = s, this.stopPassiveEffect = o;
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
  setWithVelocity(s, o, r) {
    this.set(o), this.prev = void 0, this.prevFrameValue = s, this.prevUpdatedAt = this.updatedAt - r;
  }
  /**
   * Set the state of the `MotionValue`, stopping any active animations,
   * effects, and resets velocity to `0`.
   */
  jump(s, o = !0) {
    this.updateAndNotify(s), this.prev = s, this.prevUpdatedAt = this.prevFrameValue = void 0, o && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
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
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || s - this.updatedAt > s0)
      return 0;
    const o = Math.min(this.updatedAt - this.prevUpdatedAt, s0);
    return /* @__PURE__ */ wg(parseFloat(this.current) - parseFloat(this.prevFrameValue), o);
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
    return this.stop(), new Promise((o) => {
      this.hasAnimated = !0, this.animation = s(o), this.events.animationStart && this.events.animationStart.notify();
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
    var s, o;
    (s = this.dependents) == null || s.clear(), (o = this.events.destroy) == null || o.notify(), this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function xa(i, s) {
  return new VN(i, s);
}
function sb(i, s) {
  if (i != null && i.inherit && s) {
    const { inherit: o, ...r } = i;
    return { ...s, ...r };
  }
  return i;
}
function gf(i, s) {
  const o = (i == null ? void 0 : i[s]) ?? (i == null ? void 0 : i.default) ?? i;
  return o !== i ? sb(o, i) : o;
}
const CN = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, kN = (i) => ({
  type: "spring",
  stiffness: 550,
  damping: i === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), BN = {
  type: "keyframes",
  duration: 0.8
}, AN = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, jN = (i, { keyframes: s }) => s.length > 2 ? BN : Sa.has(i) ? i.startsWith("scale") ? kN(s[1]) : CN : AN, MN = /* @__PURE__ */ new Set([
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
function PN(i) {
  for (const s in i)
    if (!MN.has(s))
      return !0;
  return !1;
}
const bf = (i, s, o, r = {}, c, m) => (f) => {
  const h = gf(r, i) || {}, b = h.delay || r.delay || 0;
  let { elapsed: g = 0 } = r;
  g = g - /* @__PURE__ */ yt(b);
  const v = {
    keyframes: Array.isArray(o) ? o : [null, o],
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
  PN(h) || Object.assign(v, jN(i, v)), v.duration && (v.duration = /* @__PURE__ */ yt(v.duration)), v.repeatDelay && (v.repeatDelay = /* @__PURE__ */ yt(v.repeatDelay)), v.from !== void 0 && (v.keyframes[0] = v.from);
  let y = !1;
  if ((v.type === !1 || v.duration === 0 && !v.repeatDelay) && (_c(v), v.delay === 0 && (y = !0)), ($n.instantAnimations || $n.skipAnimations || c != null && c.shouldSkipAnimations || h.skipAnimations) && (y = !0, _c(v), v.delay = 0), v.allowFlatten = !h.type && !h.ease, y && !m && s.get() !== void 0) {
    const N = Cl(v.keyframes, h);
    if (N !== void 0) {
      Pe.update(() => {
        v.onUpdate(N), v.onComplete();
      });
      return;
    }
  }
  return h.isSync ? new vl(v) : new wN(v);
}, _N = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function zN(i) {
  const s = _N.exec(i);
  if (!s)
    return [,];
  const [, o, r, c] = s;
  return [`--${o ?? r}`, c];
}
const RN = 4;
function ob(i, s, o = 1) {
  Ti(o <= RN, `Max CSS variable fallback depth detected in property "${i}". This may indicate a circular fallback dependency.`, "max-css-var-depth");
  const [r, c] = zN(i);
  if (!r)
    return;
  const m = window.getComputedStyle(s).getPropertyValue(r);
  if (m) {
    const f = m.trim();
    return Ng(f) ? parseFloat(f) : f;
  }
  return uf(c) ? ob(c, s, o + 1) : c;
}
function o0(i) {
  const s = [{}, {}];
  return i == null || i.values.forEach((o, r) => {
    s[0][r] = o.get(), s[1][r] = o.getVelocity();
  }), s;
}
function vf(i, s, o, r) {
  if (typeof s == "function") {
    const [c, m] = o0(r);
    s = s(o !== void 0 ? o : i.custom, c, m);
  }
  if (typeof s == "string" && (s = i.variants && i.variants[s]), typeof s == "function") {
    const [c, m] = o0(r);
    s = s(o !== void 0 ? o : i.custom, c, m);
  }
  return s;
}
function wi(i, s, o) {
  const r = i.getProps();
  return vf(r, s, o !== void 0 ? o : r.custom, i);
}
const lb = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...Na
]), zc = (i) => Array.isArray(i);
function ON(i, s, o) {
  i.hasValue(s) ? i.getValue(s).set(o) : i.addValue(s, xa(o));
}
function UN(i) {
  return zc(i) ? i[i.length - 1] || 0 : i;
}
function LN(i, s) {
  const o = wi(i, s);
  let { transitionEnd: r = {}, transition: c = {}, ...m } = o || {};
  m = { ...m, ...r };
  for (const f in m) {
    const h = UN(m[f]);
    ON(i, f, h);
  }
}
const ot = (i) => !!(i && i.getVelocity);
function HN(i) {
  return !!(ot(i) && i.add);
}
function Rc(i, s) {
  const o = i.getValue("willChange");
  if (HN(o))
    return o.add(s);
  if (!o && $n.WillChange) {
    const r = new $n.WillChange("auto");
    i.addValue("willChange", r), r.add(s);
  }
}
function xf(i) {
  return i.replace(/([A-Z])/g, (s) => `-${s.toLowerCase()}`);
}
const qN = "framerAppearId", rb = "data-" + xf(qN);
function ub(i) {
  return i.props[rb];
}
function GN({ protectedKeys: i, needsAnimating: s }, o) {
  const r = i.hasOwnProperty(o) && s[o] !== !0;
  return s[o] = !1, r;
}
function cb(i, s, { delay: o = 0, transitionOverride: r, type: c } = {}) {
  let { transition: m, transitionEnd: f, ...h } = s;
  const b = i.getDefaultTransition();
  m = m ? sb(m, b) : b;
  const g = m == null ? void 0 : m.reduceMotion, v = m == null ? void 0 : m.skipAnimations;
  r && (m = r);
  const y = [], N = c && i.animationState && i.animationState.getState()[c], w = m == null ? void 0 : m.path;
  w && w.animateVisualElement(i, h, m, o, y);
  for (const V in h) {
    const P = i.getValue(V, i.latestValues[V] ?? null), B = h[V];
    if (B === void 0 || N && GN(N, V))
      continue;
    const z = {
      delay: o,
      ...gf(m || {}, V)
    };
    v && (z.skipAnimations = !0);
    const G = P.get();
    if (G !== void 0 && !P.isAnimating() && !Array.isArray(B) && B === G && !z.velocity) {
      Pe.update(() => P.set(B));
      continue;
    }
    let L = !1;
    if (window.MotionHandoffAnimation) {
      const W = ub(i);
      if (W) {
        const Q = window.MotionHandoffAnimation(W, V, Pe);
        Q !== null && (z.startTime = Q, L = !0);
      }
    }
    Rc(i, V);
    const q = g ?? i.shouldReduceMotion;
    P.start(bf(V, P, B, q && lb.has(V) ? { type: !1 } : z, i, L));
    const F = P.animation;
    F && y.push(F);
  }
  if (f) {
    const V = () => Pe.update(() => {
      f && LN(i, f);
    });
    y.length ? Promise.all(y).then(V) : V();
  }
  return y;
}
function Oc(i, s, o = {}) {
  var b;
  const r = wi(i, s, o.type === "exit" ? (b = i.presenceContext) == null ? void 0 : b.custom : void 0);
  let { transition: c = i.getDefaultTransition() || {} } = r || {};
  o.transitionOverride && (c = o.transitionOverride);
  const m = r ? () => Promise.all(cb(i, r, o)) : () => Promise.resolve(), f = i.variantChildren && i.variantChildren.size ? (g = 0) => {
    const { delayChildren: v = 0, staggerChildren: y, staggerDirection: N } = c;
    return YN(i, s, g, v, y, N, o);
  } : () => Promise.resolve(), { when: h } = c;
  if (h) {
    const [g, v] = h === "beforeChildren" ? [m, f] : [f, m];
    return g().then(() => v());
  } else
    return Promise.all([m(), f(o.delay)]);
}
function YN(i, s, o = 0, r = 0, c = 0, m = 1, f) {
  const h = [];
  for (const b of i.variantChildren)
    b.notify("AnimationStart", s), h.push(Oc(b, s, {
      ...f,
      delay: o + (typeof r == "function" ? 0 : r) + ab(i.variantChildren, b, r, c, m)
    }).then(() => b.notify("AnimationComplete", s)));
  return Promise.all(h);
}
function XN(i, s, o = {}) {
  i.notify("AnimationStart", s);
  let r;
  if (Array.isArray(s)) {
    const c = s.map((m) => Oc(i, m, o));
    r = Promise.all(c);
  } else if (typeof s == "string")
    r = Oc(i, s, o);
  else {
    const c = typeof s == "function" ? wi(i, s, o.custom) : s;
    r = Promise.all(cb(i, c, o));
  }
  return r.then(() => {
    i.notify("AnimationComplete", s);
  });
}
const FN = {
  test: (i) => i === "auto",
  parse: (i) => i
}, fb = (i) => (s) => s.test(i), db = [ya, ie, tn, Sn, by, gy, FN], l0 = (i) => db.find(fb(i));
function QN(i) {
  return typeof i == "number" ? i === 0 : i !== null ? i === "none" || i === "0" || Dg(i) : !0;
}
const ZN = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function KN(i) {
  const [s, o] = i.slice(0, -1).split("(");
  if (s === "drop-shadow")
    return i;
  const [r] = o.match(cf) || [];
  if (!r)
    return i;
  const c = o.replace(r, "");
  let m = ZN.has(s) ? 1 : 0;
  return r !== o && (m *= 100), s + "(" + m + c + ")";
}
const JN = /\b([a-z-]*)\(.*?\)/gu, Uc = {
  ...Zt,
  getAnimatableNone: (i) => {
    const s = i.match(JN);
    return s ? s.map(KN).join(" ") : i;
  }
}, Lc = {
  ...Zt,
  getAnimatableNone: (i) => {
    const s = Zt.parse(i);
    return Zt.createTransformer(i)(s.map((r) => typeof r == "number" ? 0 : typeof r == "object" ? { ...r, alpha: 1 } : r));
  }
}, r0 = {
  ...ya,
  transform: Math.round
}, $N = {
  rotate: Sn,
  /**
   * Internal channel for `transition.path` orientToPath. Composed onto
   * `rotate` at the transform-build sites so the user's `rotate` is
   * never read or overwritten. Not part of `transformPropOrder`.
   */
  pathRotation: Sn,
  rotateX: Sn,
  rotateY: Sn,
  rotateZ: Sn,
  scale: tl,
  scaleX: tl,
  scaleY: tl,
  scaleZ: tl,
  skew: Sn,
  skewX: Sn,
  skewY: Sn,
  distance: ie,
  translateX: ie,
  translateY: ie,
  translateZ: ie,
  x: ie,
  y: ie,
  z: ie,
  perspective: ie,
  transformPerspective: ie,
  opacity: Ts,
  originX: Zh,
  originY: Zh,
  originZ: ie
}, xl = {
  // Border props
  borderWidth: ie,
  borderTopWidth: ie,
  borderRightWidth: ie,
  borderBottomWidth: ie,
  borderLeftWidth: ie,
  borderRadius: ie,
  borderTopLeftRadius: ie,
  borderTopRightRadius: ie,
  borderBottomRightRadius: ie,
  borderBottomLeftRadius: ie,
  // Positioning props
  width: ie,
  maxWidth: ie,
  height: ie,
  maxHeight: ie,
  top: ie,
  right: ie,
  bottom: ie,
  left: ie,
  inset: ie,
  insetBlock: ie,
  insetBlockStart: ie,
  insetBlockEnd: ie,
  insetInline: ie,
  insetInlineStart: ie,
  insetInlineEnd: ie,
  // Spacing props
  padding: ie,
  paddingTop: ie,
  paddingRight: ie,
  paddingBottom: ie,
  paddingLeft: ie,
  paddingBlock: ie,
  paddingBlockStart: ie,
  paddingBlockEnd: ie,
  paddingInline: ie,
  paddingInlineStart: ie,
  paddingInlineEnd: ie,
  margin: ie,
  marginTop: ie,
  marginRight: ie,
  marginBottom: ie,
  marginLeft: ie,
  marginBlock: ie,
  marginBlockStart: ie,
  marginBlockEnd: ie,
  marginInline: ie,
  marginInlineStart: ie,
  marginInlineEnd: ie,
  // Typography
  fontSize: ie,
  // Misc
  backgroundPositionX: ie,
  backgroundPositionY: ie,
  ...$N,
  zIndex: r0,
  // SVG
  fillOpacity: Ts,
  strokeOpacity: Ts,
  numOctaves: r0
}, WN = {
  ...xl,
  // Color props
  color: Ke,
  backgroundColor: Ke,
  outlineColor: Ke,
  fill: Ke,
  stroke: Ke,
  // Border props
  borderColor: Ke,
  borderTopColor: Ke,
  borderRightColor: Ke,
  borderBottomColor: Ke,
  borderLeftColor: Ke,
  filter: Uc,
  WebkitFilter: Uc,
  mask: Lc,
  WebkitMask: Lc
}, mb = (i) => WN[i], IN = /* @__PURE__ */ new Set([Uc, Lc]);
function pb(i, s) {
  let o = mb(i);
  return IN.has(o) || (o = Zt), o.getAnimatableNone ? o.getAnimatableNone(s) : void 0;
}
const e2 = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function t2(i, s, o) {
  let r = 0, c;
  for (; r < i.length && !c; ) {
    const m = i[r];
    typeof m == "string" && !e2.has(m) && va(m).values.length && (c = i[r]), r++;
  }
  if (c && o)
    for (const m of s)
      i[m] = pb(o, c);
}
class n2 extends hf {
  constructor(s, o, r, c, m) {
    super(s, o, r, c, m, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: s, element: o, name: r } = this;
    if (!o || !o.current)
      return;
    super.readKeyframes();
    for (let v = 0; v < s.length; v++) {
      let y = s[v];
      if (typeof y == "string" && (y = y.trim(), uf(y))) {
        const N = ob(y, o.current);
        N !== void 0 && (s[v] = N), v === s.length - 1 && (this.finalKeyframe = y);
      }
    }
    if (this.resolveNoneKeyframes(), !lb.has(r) || s.length !== 2)
      return;
    const [c, m] = s, f = l0(c), h = l0(m), b = Qh(c), g = Qh(m);
    if (b !== g && Jn[r]) {
      this.needsMeasurement = !0;
      return;
    }
    if (f !== h)
      if (n0(f) && n0(h))
        for (let v = 0; v < s.length; v++) {
          const y = s[v];
          typeof y == "string" && (s[v] = parseFloat(y));
        }
      else Jn[r] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: s, name: o } = this, r = [];
    for (let c = 0; c < s.length; c++)
      (s[c] === null || QN(s[c])) && r.push(c);
    r.length && t2(s, r, o);
  }
  measureInitialState() {
    const { element: s, unresolvedKeyframes: o, name: r } = this;
    if (!s || !s.current)
      return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = Jn[r](s.measureViewportBox(), window.getComputedStyle(s.current)), o[0] = this.measuredOrigin;
    const c = o[o.length - 1];
    c !== void 0 && s.getValue(r, c).jump(c, !1);
  }
  measureEndState() {
    var h;
    const { element: s, name: o, unresolvedKeyframes: r } = this;
    if (!s || !s.current)
      return;
    const c = s.getValue(o);
    c && c.jump(this.measuredOrigin, !1);
    const m = r.length - 1, f = r[m];
    r[m] = Jn[o](s.measureViewportBox(), window.getComputedStyle(s.current)), f !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = f), (h = this.removedTransforms) != null && h.length && this.removedTransforms.forEach(([b, g]) => {
      s.getValue(b).set(g);
    }), this.resolveNoneKeyframes();
  }
}
function hb(i, s, o) {
  if (i == null)
    return [];
  if (i instanceof EventTarget)
    return [i];
  if (typeof i == "string") {
    let r = document;
    const c = (o == null ? void 0 : o[i]) ?? r.querySelectorAll(i);
    return c ? Array.from(c) : [];
  }
  return Array.from(i).filter((r) => r != null);
}
const Hc = (i, s) => s && typeof i == "number" ? s.transform(i) : i;
function ol(i) {
  return Sg(i) && "offsetHeight" in i && !("ownerSVGElement" in i);
}
const { schedule: yf } = /* @__PURE__ */ zg(queueMicrotask, !1), Qt = {
  x: !1,
  y: !1
};
function gb() {
  return Qt.x || Qt.y;
}
function i2(i) {
  return i === "x" || i === "y" ? Qt[i] ? null : (Qt[i] = !0, () => {
    Qt[i] = !1;
  }) : Qt.x || Qt.y ? null : (Qt.x = Qt.y = !0, () => {
    Qt.x = Qt.y = !1;
  });
}
function bb(i, s) {
  const o = hb(i), r = new AbortController(), c = {
    passive: !0,
    ...s,
    signal: r.signal
  };
  return [o, c, () => r.abort()];
}
function a2(i) {
  return !(i.pointerType === "touch" || gb());
}
function s2(i, s, o = {}) {
  const [r, c, m] = bb(i, o);
  return r.forEach((f) => {
    let h = !1, b = !1, g;
    const v = () => {
      f.removeEventListener("pointerleave", V);
    }, y = (B) => {
      g && (g(B), g = void 0), v();
    }, N = (B) => {
      h = !1, window.removeEventListener("pointerup", N), window.removeEventListener("pointercancel", N), b && (b = !1, y(B));
    }, w = () => {
      h = !0, window.addEventListener("pointerup", N, c), window.addEventListener("pointercancel", N, c);
    }, V = (B) => {
      if (B.pointerType !== "touch") {
        if (h) {
          b = !0;
          return;
        }
        y(B);
      }
    }, P = (B) => {
      if (!a2(B))
        return;
      b = !1;
      const z = s(f, B);
      typeof z == "function" && (g = z, f.addEventListener("pointerleave", V, c));
    };
    f.addEventListener("pointerenter", P, c), f.addEventListener("pointerdown", w, c);
  }), m;
}
const vb = (i, s) => s ? i === s ? !0 : vb(i, s.parentElement) : !1, Nf = (i) => i.pointerType === "mouse" ? typeof i.button != "number" || i.button <= 0 : i.isPrimary !== !1, o2 = /* @__PURE__ */ new Set([
  "BUTTON",
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "A"
]);
function l2(i) {
  return o2.has(i.tagName) || i.isContentEditable === !0;
}
const r2 = /* @__PURE__ */ new Set(["INPUT", "SELECT", "TEXTAREA"]);
function u2(i) {
  return r2.has(i.tagName) || i.isContentEditable === !0;
}
const ll = /* @__PURE__ */ new WeakSet();
function u0(i) {
  return (s) => {
    s.key === "Enter" && i(s);
  };
}
function fc(i, s) {
  i.dispatchEvent(new PointerEvent("pointer" + s, { isPrimary: !0, bubbles: !0 }));
}
const c2 = (i, s) => {
  const o = i.currentTarget;
  if (!o)
    return;
  const r = u0(() => {
    if (ll.has(o))
      return;
    fc(o, "down");
    const c = u0(() => {
      fc(o, "up");
    }), m = () => fc(o, "cancel");
    o.addEventListener("keyup", c, s), o.addEventListener("blur", m, s);
  });
  o.addEventListener("keydown", r, s), o.addEventListener("blur", () => o.removeEventListener("keydown", r), s);
};
function c0(i) {
  return Nf(i) && !gb();
}
const f0 = /* @__PURE__ */ new WeakSet();
function f2(i, s, o = {}) {
  const [r, c, m] = bb(i, o), f = (h) => {
    const b = h.currentTarget;
    if (!c0(h) || f0.has(h))
      return;
    ll.add(b), o.stopPropagation && f0.add(h);
    const g = s(b, h), v = (w, V) => {
      window.removeEventListener("pointerup", y), window.removeEventListener("pointercancel", N), ll.has(b) && ll.delete(b), c0(w) && typeof g == "function" && g(w, { success: V });
    }, y = (w) => {
      v(w, b === window || b === document || o.useGlobalTarget || vb(b, w.target));
    }, N = (w) => {
      v(w, !1);
    };
    window.addEventListener("pointerup", y, c), window.addEventListener("pointercancel", N, c);
  };
  return r.forEach((h) => {
    (o.useGlobalTarget ? window : h).addEventListener("pointerdown", f, c), ol(h) && (h.addEventListener("focus", (g) => c2(g, c)), !l2(h) && !h.hasAttribute("tabindex") && (h.tabIndex = 0));
  }), m;
}
function Sf(i) {
  return Sg(i) && "ownerSVGElement" in i;
}
const rl = /* @__PURE__ */ new WeakMap();
let Kn;
const xb = (i, s, o) => (r, c) => c && c[0] ? c[0][i + "Size"] : Sf(r) && "getBBox" in r ? r.getBBox()[s] : r[o], d2 = /* @__PURE__ */ xb("inline", "width", "offsetWidth"), m2 = /* @__PURE__ */ xb("block", "height", "offsetHeight");
function p2({ target: i, borderBoxSize: s }) {
  var o;
  (o = rl.get(i)) == null || o.forEach((r) => {
    r(i, {
      get width() {
        return d2(i, s);
      },
      get height() {
        return m2(i, s);
      }
    });
  });
}
function h2(i) {
  i.forEach(p2);
}
function g2() {
  typeof ResizeObserver > "u" || (Kn = new ResizeObserver(h2));
}
function b2(i, s) {
  Kn || g2();
  const o = hb(i);
  return o.forEach((r) => {
    let c = rl.get(r);
    c || (c = /* @__PURE__ */ new Set(), rl.set(r, c)), c.add(s), Kn == null || Kn.observe(r);
  }), () => {
    o.forEach((r) => {
      const c = rl.get(r);
      c == null || c.delete(s), c != null && c.size || Kn == null || Kn.unobserve(r);
    });
  };
}
const ul = /* @__PURE__ */ new Set();
let pa;
function v2() {
  pa = () => {
    const i = {
      get width() {
        return window.innerWidth;
      },
      get height() {
        return window.innerHeight;
      }
    };
    ul.forEach((s) => s(i));
  }, window.addEventListener("resize", pa);
}
function x2(i) {
  return ul.add(i), pa || v2(), () => {
    ul.delete(i), !ul.size && typeof pa == "function" && (window.removeEventListener("resize", pa), pa = void 0);
  };
}
function d0(i, s) {
  return typeof i == "function" ? x2(i) : b2(i, s);
}
function y2(i) {
  return Sf(i) && i.tagName === "svg";
}
const N2 = [...db, Ke, Zt], S2 = (i) => N2.find(fb(i)), m0 = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), ha = () => ({
  x: m0(),
  y: m0()
}), p0 = () => ({ min: 0, max: 0 }), $e = () => ({
  x: p0(),
  y: p0()
}), D2 = /* @__PURE__ */ new WeakMap();
function kl(i) {
  return i !== null && typeof i == "object" && typeof i.start == "function";
}
function Vs(i) {
  return typeof i == "string" || Array.isArray(i);
}
const Df = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], Ef = ["initial", ...Df];
function Bl(i) {
  return kl(i.animate) || Ef.some((s) => Vs(i[s]));
}
function yb(i) {
  return !!(Bl(i) || i.variants);
}
function E2(i, s, o) {
  for (const r in s) {
    const c = s[r], m = o[r];
    if (ot(c))
      i.addValue(r, c);
    else if (ot(m))
      i.addValue(r, xa(c, { owner: i }));
    else if (m !== c)
      if (i.hasValue(r)) {
        const f = i.getValue(r);
        f.liveStyle === !0 ? f.jump(c) : f.hasAnimated || f.set(c);
      } else {
        const f = i.getStaticValue(r);
        i.addValue(r, xa(f !== void 0 ? f : c, { owner: i }));
      }
  }
  for (const r in o)
    s[r] === void 0 && i.removeValue(r);
  return s;
}
const qc = { current: null }, Nb = { current: !1 }, w2 = typeof window < "u";
function T2() {
  if (Nb.current = !0, !!w2)
    if (window.matchMedia) {
      const i = window.matchMedia("(prefers-reduced-motion)"), s = () => qc.current = i.matches;
      i.addEventListener("change", s), s();
    } else
      qc.current = !1;
}
const h0 = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
let yl = {};
function Sb(i) {
  yl = i;
}
function V2() {
  return yl;
}
class C2 {
  /**
   * This method takes React props and returns found MotionValues. For example, HTML
   * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
   *
   * This isn't an abstract method as it needs calling in the constructor, but it is
   * intended to be one.
   */
  scrapeMotionValuesFromProps(s, o, r) {
    return {};
  }
  constructor({ parent: s, props: o, presenceContext: r, reducedMotionConfig: c, skipAnimations: m, blockInitialAnimation: f, visualState: h }, b = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.shouldSkipAnimations = !1, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = hf, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.hasBeenMounted = !1, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const w = ct.now();
      this.renderScheduledAt < w && (this.renderScheduledAt = w, Pe.render(this.render, !1, !0));
    };
    const { latestValues: g, renderState: v } = h;
    this.latestValues = g, this.baseTarget = { ...g }, this.initialValues = o.initial ? { ...g } : {}, this.renderState = v, this.parent = s, this.props = o, this.presenceContext = r, this.depth = s ? s.depth + 1 : 0, this.reducedMotionConfig = c, this.skipAnimationsConfig = m, this.options = b, this.blockInitialAnimation = !!f, this.isControllingVariants = Bl(o), this.isVariantNode = yb(o), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(s && s.current);
    const { willChange: y, ...N } = this.scrapeMotionValuesFromProps(o, {}, this);
    for (const w in N) {
      const V = N[w];
      g[w] !== void 0 && ot(V) && V.set(g[w]);
    }
  }
  mount(s) {
    var o, r;
    if (this.hasBeenMounted)
      for (const c in this.initialValues)
        (o = this.values.get(c)) == null || o.jump(this.initialValues[c]), this.latestValues[c] = this.initialValues[c];
    this.current = s, D2.set(s, this), this.projection && !this.projection.instance && this.projection.mount(s), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((c, m) => this.bindToMotionValue(m, c)), this.reducedMotionConfig === "never" ? this.shouldReduceMotion = !1 : this.reducedMotionConfig === "always" ? this.shouldReduceMotion = !0 : (Nb.current || T2(), this.shouldReduceMotion = qc.current), this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1, (r = this.parent) == null || r.addChild(this), this.update(this.props, this.presenceContext), this.hasBeenMounted = !0;
  }
  unmount() {
    var s;
    this.projection && this.projection.unmount(), Wn(this.notifyUpdate), Wn(this.render), this.valueSubscriptions.forEach((o) => o()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), (s = this.parent) == null || s.removeChild(this);
    for (const o in this.events)
      this.events[o].clear();
    for (const o in this.features) {
      const r = this.features[o];
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
  bindToMotionValue(s, o) {
    if (this.valueSubscriptions.has(s) && this.valueSubscriptions.get(s)(), o.accelerate && ib.has(s) && this.current instanceof HTMLElement) {
      const { factory: f, keyframes: h, times: b, ease: g, duration: v } = o.accelerate, y = new tb({
        element: this.current,
        name: s,
        keyframes: h,
        times: b,
        ease: g,
        duration: /* @__PURE__ */ yt(v)
      }), N = f(y);
      this.valueSubscriptions.set(s, () => {
        N(), y.cancel();
      });
      return;
    }
    const r = Sa.has(s);
    r && this.onBindTransform && this.onBindTransform();
    const c = o.on("change", (f) => {
      this.latestValues[s] = f, this.props.onUpdate && Pe.preRender(this.notifyUpdate), r && this.projection && (this.projection.isTransformDirty = !0), this.scheduleRender();
    });
    let m;
    typeof window < "u" && window.MotionCheckAppearSync && (m = window.MotionCheckAppearSync(this, s, o)), this.valueSubscriptions.set(s, () => {
      c(), m && m();
    });
  }
  sortNodePosition(s) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== s.type ? 0 : this.sortInstanceNodePosition(this.current, s.current);
  }
  updateFeatures() {
    let s = "animation";
    for (s in yl) {
      const o = yl[s];
      if (!o)
        continue;
      const { isEnabled: r, Feature: c } = o;
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
  setStaticValue(s, o) {
    this.latestValues[s] = o;
  }
  /**
   * Update the provided props. Ensure any newly-added motion values are
   * added to our map, old ones removed, and listeners updated.
   */
  update(s, o) {
    (s.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = s, this.prevPresenceContext = this.presenceContext, this.presenceContext = o;
    for (let r = 0; r < h0.length; r++) {
      const c = h0[r];
      this.propEventSubscriptions[c] && (this.propEventSubscriptions[c](), delete this.propEventSubscriptions[c]);
      const m = "on" + c, f = s[m];
      f && (this.propEventSubscriptions[c] = this.on(c, f));
    }
    this.prevMotionValues = E2(this, this.scrapeMotionValuesFromProps(s, this.prevProps || {}, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
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
    const o = this.getClosestVariantNode();
    if (o)
      return o.variantChildren && o.variantChildren.add(s), () => o.variantChildren.delete(s);
  }
  /**
   * Add a motion value and bind it to this visual element.
   */
  addValue(s, o) {
    const r = this.values.get(s);
    o !== r && (r && this.removeValue(s), this.bindToMotionValue(s, o), this.values.set(s, o), this.latestValues[s] = o.get());
  }
  /**
   * Remove a motion value and unbind any active subscriptions.
   */
  removeValue(s) {
    this.values.delete(s);
    const o = this.valueSubscriptions.get(s);
    o && (o(), this.valueSubscriptions.delete(s)), delete this.latestValues[s], this.removeValueFromRenderState(s, this.renderState);
  }
  /**
   * Check whether we have a motion value for this key
   */
  hasValue(s) {
    return this.values.has(s);
  }
  getValue(s, o) {
    if (this.props.values && this.props.values[s])
      return this.props.values[s];
    let r = this.values.get(s);
    return r === void 0 && o !== void 0 && (r = xa(o === null ? void 0 : o, { owner: this }), this.addValue(s, r)), r;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(s, o) {
    let r = this.latestValues[s] !== void 0 || !this.current ? this.latestValues[s] : this.getBaseTargetFromProps(this.props, s) ?? this.readValueFromInstance(this.current, s, this.options);
    return r != null && (typeof r == "string" && (Ng(r) || Dg(r)) ? r = parseFloat(r) : !S2(r) && Zt.test(o) && (r = pb(s, o)), this.setBaseTarget(s, ot(r) ? r.get() : r)), ot(r) ? r.get() : r;
  }
  /**
   * Set the base target to later animate back to. This is currently
   * only hydrated on creation and when we first read a value.
   */
  setBaseTarget(s, o) {
    this.baseTarget[s] = o;
  }
  /**
   * Find the base target for a value thats been removed from all animation
   * props.
   */
  getBaseTarget(s) {
    var m;
    const { initial: o } = this.props;
    let r;
    if (typeof o == "string" || typeof o == "object") {
      const f = vf(this.props, o, (m = this.presenceContext) == null ? void 0 : m.custom);
      f && (r = f[s]);
    }
    if (o && r !== void 0)
      return r;
    const c = this.getBaseTargetFromProps(this.props, s);
    return c !== void 0 && !ot(c) ? c : this.initialValues[s] !== void 0 && r === void 0 ? void 0 : this.baseTarget[s];
  }
  on(s, o) {
    return this.events[s] || (this.events[s] = new of()), this.events[s].add(o);
  }
  notify(s, ...o) {
    this.events[s] && this.events[s].notify(...o);
  }
  scheduleRenderMicrotask() {
    yf.render(this.render);
  }
}
class Db extends C2 {
  constructor() {
    super(...arguments), this.KeyframeResolver = n2;
  }
  sortInstanceNodePosition(s, o) {
    return s.compareDocumentPosition(o) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(s, o) {
    const r = s.style;
    return r ? r[o] : void 0;
  }
  removeValueFromRenderState(s, { vars: o, style: r }) {
    delete o[s], delete r[s];
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: s } = this.props;
    ot(s) && (this.childSubscription = s.on("change", (o) => {
      this.current && (this.current.textContent = `${o}`);
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
function Eb({ top: i, left: s, right: o, bottom: r }) {
  return {
    x: { min: s, max: o },
    y: { min: i, max: r }
  };
}
function k2({ x: i, y: s }) {
  return { top: s.min, right: i.max, bottom: s.max, left: i.min };
}
function B2(i, s) {
  if (!s)
    return i;
  const o = s({ x: i.left, y: i.top }), r = s({ x: i.right, y: i.bottom });
  return {
    top: o.y,
    left: o.x,
    bottom: r.y,
    right: r.x
  };
}
function dc(i) {
  return i === void 0 || i === 1;
}
function Gc({ scale: i, scaleX: s, scaleY: o }) {
  return !dc(i) || !dc(s) || !dc(o);
}
function yi(i) {
  return Gc(i) || wb(i) || i.z || i.rotate || i.rotateX || i.rotateY || i.skewX || i.skewY;
}
function wb(i) {
  return g0(i.x) || g0(i.y);
}
function g0(i) {
  return i && i !== "0%";
}
function Nl(i, s, o) {
  const r = i - o, c = s * r;
  return o + c;
}
function b0(i, s, o, r, c) {
  return c !== void 0 && (i = Nl(i, c, r)), Nl(i, o, r) + s;
}
function Yc(i, s = 0, o = 1, r, c) {
  i.min = b0(i.min, s, o, r, c), i.max = b0(i.max, s, o, r, c);
}
function Tb(i, { x: s, y: o }) {
  Yc(i.x, s.translate, s.scale, s.originPoint), Yc(i.y, o.translate, o.scale, o.originPoint);
}
const v0 = 0.999999999999, x0 = 1.0000000000001;
function A2(i, s, o, r = !1) {
  var h;
  const c = o.length;
  if (!c)
    return;
  s.x = s.y = 1;
  let m, f;
  for (let b = 0; b < c; b++) {
    m = o[b], f = m.projectionDelta;
    const { visualElement: g } = m.options;
    g && g.props.style && g.props.style.display === "contents" || (r && m.options.layoutScroll && m.scroll && m !== m.root && (en(i.x, -m.scroll.offset.x), en(i.y, -m.scroll.offset.y)), f && (s.x *= f.x.scale, s.y *= f.y.scale, Tb(i, f)), r && yi(m.latestValues) && cl(i, m.latestValues, (h = m.layout) == null ? void 0 : h.layoutBox));
  }
  s.x < x0 && s.x > v0 && (s.x = 1), s.y < x0 && s.y > v0 && (s.y = 1);
}
function en(i, s) {
  i.min += s, i.max += s;
}
function y0(i, s, o, r, c = 0.5) {
  const m = Me(i.min, i.max, c);
  Yc(i, s, o, m, r);
}
function N0(i, s) {
  return typeof i == "string" ? parseFloat(i) / 100 * (s.max - s.min) : i;
}
function cl(i, s, o) {
  const r = o ?? i;
  y0(i.x, N0(s.x, r.x), s.scaleX, s.scale, s.originX), y0(i.y, N0(s.y, r.y), s.scaleY, s.scale, s.originY);
}
function Vb(i, s) {
  return Eb(B2(i.getBoundingClientRect(), s));
}
function j2(i, s, o) {
  const r = Vb(i, o), { scroll: c } = s;
  return c && (en(r.x, c.offset.x), en(r.y, c.offset.y)), r;
}
const M2 = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, P2 = Na.length;
function _2(i, s, o) {
  let r = "", c = !0;
  for (let f = 0; f < P2; f++) {
    const h = Na[f], b = i[h];
    if (b === void 0)
      continue;
    let g = !0;
    if (typeof b == "number")
      g = b === (h.startsWith("scale") ? 1 : 0);
    else {
      const v = parseFloat(b);
      g = h.startsWith("scale") ? v === 1 : v === 0;
    }
    if (!g || o) {
      const v = Hc(b, xl[h]);
      if (!g) {
        c = !1;
        const y = M2[h] || h;
        r += `${y}(${v}) `;
      }
      o && (s[h] = v);
    }
  }
  const m = i.pathRotation;
  return m && (c = !1, r += `rotate(${Hc(m, xl.pathRotation)}) `), r = r.trim(), o ? r = o(s, c ? "" : r) : c && (r = "none"), r;
}
function wf(i, s, o) {
  const { style: r, vars: c, transformOrigin: m } = i;
  let f = !1, h = !1;
  for (const b in s) {
    const g = s[b];
    if (Sa.has(b)) {
      f = !0;
      continue;
    } else if (Og(b)) {
      c[b] = g;
      continue;
    } else {
      const v = Hc(g, xl[b]);
      b.startsWith("origin") ? (h = !0, m[b] = v) : r[b] = v;
    }
  }
  if (s.transform || (f || o ? r.transform = _2(s, i.transform, o) : r.transform && (r.transform = "none")), h) {
    const { originX: b = "50%", originY: g = "50%", originZ: v = 0 } = m;
    r.transformOrigin = `${b} ${g} ${v}`;
  }
}
function Cb(i, { style: s, vars: o }, r, c) {
  const m = i.style;
  let f;
  for (f in s)
    m[f] = s[f];
  c == null || c.applyProjectionStyles(m, r);
  for (f in o)
    m.setProperty(f, o[f]);
}
function S0(i, s) {
  return s.max === s.min ? 0 : i / (s.max - s.min) * 100;
}
const vs = {
  correct: (i, s) => {
    if (!s.target)
      return i;
    if (typeof i == "string")
      if (ie.test(i))
        i = parseFloat(i);
      else
        return i;
    const o = S0(i, s.target.x), r = S0(i, s.target.y);
    return `${o}% ${r}%`;
  }
}, z2 = {
  correct: (i, { treeScale: s, projectionDelta: o }) => {
    const r = i, c = Zt.parse(i);
    if (c.length > 5)
      return r;
    const m = Zt.createTransformer(i), f = typeof c[0] != "number" ? 1 : 0, h = o.x.scale * s.x, b = o.y.scale * s.y;
    c[0 + f] /= h, c[1 + f] /= b;
    const g = Me(h, b, 0.5);
    return typeof c[2 + f] == "number" && (c[2 + f] /= g), typeof c[3 + f] == "number" && (c[3 + f] /= g), m(c);
  }
}, Xc = {
  borderRadius: {
    ...vs,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: vs,
  borderTopRightRadius: vs,
  borderBottomLeftRadius: vs,
  borderBottomRightRadius: vs,
  boxShadow: z2
};
function kb(i, { layout: s, layoutId: o }) {
  return Sa.has(i) || i.startsWith("origin") || (s || o !== void 0) && (!!Xc[i] || i === "opacity");
}
function Tf(i, s, o) {
  var f;
  const r = i.style, c = s == null ? void 0 : s.style, m = {};
  if (!r)
    return m;
  for (const h in r)
    (ot(r[h]) || c && ot(c[h]) || kb(h, i) || ((f = o == null ? void 0 : o.getValue(h)) == null ? void 0 : f.liveStyle) !== void 0) && (m[h] = r[h]);
  return m;
}
function R2(i) {
  return window.getComputedStyle(i);
}
class O2 extends Db {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = Cb;
  }
  readValueFromInstance(s, o) {
    var r;
    if (Sa.has(o))
      return (r = this.projection) != null && r.isProjecting ? Bc(o) : iN(s, o);
    {
      const c = R2(s), m = (Og(o) ? c.getPropertyValue(o) : c[o]) || 0;
      return typeof m == "string" ? m.trim() : m;
    }
  }
  measureInstanceViewportBox(s, { transformPagePoint: o }) {
    return Vb(s, o);
  }
  build(s, o, r) {
    wf(s, o, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(s, o, r) {
    return Tf(s, o, r);
  }
}
const U2 = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, L2 = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function H2(i, s, o = 1, r = 0, c = !0) {
  i.pathLength = 1;
  const m = c ? U2 : L2;
  i[m.offset] = `${-r}`, i[m.array] = `${s} ${o}`;
}
const q2 = [
  "offsetDistance",
  "offsetPath",
  "offsetRotate",
  "offsetAnchor"
];
function Bb(i, {
  attrX: s,
  attrY: o,
  attrScale: r,
  pathLength: c,
  pathSpacing: m = 1,
  pathOffset: f = 0,
  // This is object creation, which we try to avoid per-frame.
  ...h
}, b, g, v) {
  if (wf(i, h, g), b) {
    i.style.viewBox && (i.attrs.viewBox = i.style.viewBox);
    return;
  }
  i.attrs = i.style, i.style = {};
  const { attrs: y, style: N } = i;
  y.transform && (N.transform = y.transform, delete y.transform), (N.transform || y.transformOrigin) && (N.transformOrigin = y.transformOrigin ?? "50% 50%", delete y.transformOrigin), N.transform && (N.transformBox = (v == null ? void 0 : v.transformBox) ?? "fill-box", delete y.transformBox);
  for (const w of q2)
    y[w] !== void 0 && (N[w] = y[w], delete y[w]);
  s !== void 0 && (y.x = s), o !== void 0 && (y.y = o), r !== void 0 && (y.scale = r), c !== void 0 && H2(y, c, m, f, !1);
}
const Ab = /* @__PURE__ */ new Set([
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
]), jb = (i) => typeof i == "string" && i.toLowerCase() === "svg";
function G2(i, s, o, r) {
  Cb(i, s, void 0, r);
  for (const c in s.attrs)
    i.setAttribute(Ab.has(c) ? c : xf(c), s.attrs[c]);
}
function Mb(i, s, o) {
  const r = Tf(i, s, o);
  for (const c in i)
    if (ot(i[c]) || ot(s[c])) {
      const m = Na.indexOf(c) !== -1 ? "attr" + c.charAt(0).toUpperCase() + c.substring(1) : c;
      r[m] = i[c];
    }
  return r;
}
class Y2 extends Db {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = $e;
  }
  getBaseTargetFromProps(s, o) {
    return s[o];
  }
  readValueFromInstance(s, o) {
    if (Sa.has(o)) {
      const r = mb(o);
      return r && r.default || 0;
    }
    return o = Ab.has(o) ? o : xf(o), s.getAttribute(o);
  }
  scrapeMotionValuesFromProps(s, o, r) {
    return Mb(s, o, r);
  }
  build(s, o, r) {
    Bb(s, o, this.isSVGTag, r.transformTemplate, r.style);
  }
  renderInstance(s, o, r, c) {
    G2(s, o, r, c);
  }
  mount(s) {
    this.isSVGTag = jb(s.tagName), super.mount(s);
  }
}
const X2 = Ef.length;
function Pb(i) {
  if (!i)
    return;
  if (!i.isControllingVariants) {
    const o = i.parent ? Pb(i.parent) || {} : {};
    return i.props.initial !== void 0 && (o.initial = i.props.initial), o;
  }
  const s = {};
  for (let o = 0; o < X2; o++) {
    const r = Ef[o], c = i.props[r];
    (Vs(c) || c === !1) && (s[r] = c);
  }
  return s;
}
function _b(i, s) {
  if (!Array.isArray(s))
    return !1;
  const o = s.length;
  if (o !== i.length)
    return !1;
  for (let r = 0; r < o; r++)
    if (s[r] !== i[r])
      return !1;
  return !0;
}
const F2 = [...Df].reverse(), Q2 = Df.length;
function Z2(i) {
  return (s) => Promise.all(s.map(({ animation: o, options: r }) => XN(i, o, r)));
}
function K2(i) {
  let s = Z2(i), o = D0(), r = !0, c = !1;
  const m = (g) => (v, y) => {
    var w;
    const N = wi(i, y, g === "exit" ? (w = i.presenceContext) == null ? void 0 : w.custom : void 0);
    if (N) {
      const { transition: V, transitionEnd: P, ...B } = N;
      v = { ...v, ...B, ...P };
    }
    return v;
  };
  function f(g) {
    s = g(i);
  }
  function h(g) {
    const { props: v } = i, y = Pb(i.parent) || {}, N = [], w = /* @__PURE__ */ new Set();
    let V = {}, P = 1 / 0;
    for (let z = 0; z < Q2; z++) {
      const G = F2[z], L = o[G], q = v[G] !== void 0 ? v[G] : y[G], F = Vs(q), W = G === g ? L.isActive : null;
      W === !1 && (P = z);
      let Q = q === y[G] && q !== v[G] && F;
      if (Q && (r || c) && i.manuallyAnimateOnMount && (Q = !1), L.protectedKeys = { ...V }, // If it isn't active and hasn't *just* been set as inactive
      !L.isActive && W === null || // If we didn't and don't have any defined prop for this animation type
      !q && !L.prevProp || // Or if the prop doesn't define an animation
      kl(q) || typeof q == "boolean")
        continue;
      if (G === "exit" && L.isActive && W !== !0) {
        L.prevResolvedValues && (V = {
          ...V,
          ...L.prevResolvedValues
        });
        continue;
      }
      const X = J2(L.prevProp, q);
      let J = X || // If we're making this variant active, we want to always make it active
      G === g && L.isActive && !Q && F || // If we removed a higher-priority variant (i is in reverse order)
      z > P && F, ee = !1;
      const Y = Array.isArray(q) ? q : [q];
      let I = Y.reduce(m(G), {});
      W === !1 && (I = {});
      const { prevResolvedValues: ye = {} } = L, ce = {
        ...ye,
        ...I
      }, le = (Z) => {
        J = !0, w.has(Z) && (ee = !0, w.delete(Z)), L.needsAnimating[Z] = !0;
        const se = i.getValue(Z);
        se && (se.liveStyle = !1);
      };
      for (const Z in ce) {
        const se = I[Z], re = ye[Z];
        if (V.hasOwnProperty(Z))
          continue;
        let D = !1;
        zc(se) && zc(re) ? D = !_b(se, re) || X : D = se !== re, D ? se != null ? le(Z) : w.add(Z) : se !== void 0 && w.has(Z) ? le(Z) : L.protectedKeys[Z] = !0;
      }
      L.prevProp = q, L.prevResolvedValues = I, L.isActive && (V = { ...V, ...I }), (r || c) && i.blockInitialAnimation && (J = !1);
      const j = Q && X;
      J && (!j || ee) && N.push(...Y.map((Z) => {
        const se = { type: G };
        if (typeof Z == "string" && (r || c) && !j && i.manuallyAnimateOnMount && i.parent) {
          const { parent: re } = i, D = wi(re, Z);
          if (re.enteringChildren && D) {
            const { delayChildren: R } = D.transition || {};
            se.delay = ab(re.enteringChildren, i, R);
          }
        }
        return {
          animation: Z,
          options: se
        };
      }));
    }
    if (w.size) {
      const z = {};
      if (typeof v.initial != "boolean") {
        const G = wi(i, Array.isArray(v.initial) ? v.initial[0] : v.initial);
        G && G.transition && (z.transition = G.transition);
      }
      w.forEach((G) => {
        const L = i.getBaseTarget(G), q = i.getValue(G);
        q && (q.liveStyle = !0), z[G] = L ?? null;
      }), N.push({ animation: z });
    }
    let B = !!N.length;
    return r && (v.initial === !1 || v.initial === v.animate) && !i.manuallyAnimateOnMount && (B = !1), r = !1, c = !1, B ? s(N) : Promise.resolve();
  }
  function b(g, v) {
    var N;
    if (o[g].isActive === v)
      return Promise.resolve();
    (N = i.variantChildren) == null || N.forEach((w) => {
      var V;
      return (V = w.animationState) == null ? void 0 : V.setActive(g, v);
    }), o[g].isActive = v;
    const y = h(g);
    for (const w in o)
      o[w].protectedKeys = {};
    return y;
  }
  return {
    animateChanges: h,
    setActive: b,
    setAnimateFunction: f,
    getState: () => o,
    reset: () => {
      o = D0(), c = !0;
    }
  };
}
function J2(i, s) {
  return typeof s == "string" ? s !== i : Array.isArray(s) ? !_b(s, i) : !1;
}
function xi(i = !1) {
  return {
    isActive: i,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function D0() {
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
function Fc(i, s) {
  i.min = s.min, i.max = s.max;
}
function Ft(i, s) {
  Fc(i.x, s.x), Fc(i.y, s.y);
}
function E0(i, s) {
  i.translate = s.translate, i.scale = s.scale, i.originPoint = s.originPoint, i.origin = s.origin;
}
const zb = 1e-4, $2 = 1 - zb, W2 = 1 + zb, Rb = 0.01, I2 = 0 - Rb, eS = 0 + Rb;
function ft(i) {
  return i.max - i.min;
}
function tS(i, s, o) {
  return Math.abs(i - s) <= o;
}
function w0(i, s, o, r = 0.5) {
  i.origin = r, i.originPoint = Me(s.min, s.max, i.origin), i.scale = ft(o) / ft(s), i.translate = Me(o.min, o.max, i.origin) - i.originPoint, (i.scale >= $2 && i.scale <= W2 || isNaN(i.scale)) && (i.scale = 1), (i.translate >= I2 && i.translate <= eS || isNaN(i.translate)) && (i.translate = 0);
}
function Ds(i, s, o, r) {
  w0(i.x, s.x, o.x, r ? r.originX : void 0), w0(i.y, s.y, o.y, r ? r.originY : void 0);
}
function T0(i, s, o, r = 0) {
  const c = r ? Me(o.min, o.max, r) : o.min;
  i.min = c + s.min, i.max = i.min + ft(s);
}
function nS(i, s, o, r) {
  T0(i.x, s.x, o.x, r == null ? void 0 : r.x), T0(i.y, s.y, o.y, r == null ? void 0 : r.y);
}
function V0(i, s, o, r = 0) {
  const c = r ? Me(o.min, o.max, r) : o.min;
  i.min = s.min - c, i.max = i.min + ft(s);
}
function Sl(i, s, o, r) {
  V0(i.x, s.x, o.x, r == null ? void 0 : r.x), V0(i.y, s.y, o.y, r == null ? void 0 : r.y);
}
function C0(i, s, o, r, c) {
  return i -= s, i = Nl(i, 1 / o, r), c !== void 0 && (i = Nl(i, 1 / c, r)), i;
}
function iS(i, s = 0, o = 1, r = 0.5, c, m = i, f = i) {
  if (tn.test(s) && (s = parseFloat(s), s = Me(f.min, f.max, s / 100) - f.min), typeof s != "number")
    return;
  let h = Me(m.min, m.max, r);
  i === m && (h -= s), i.min = C0(i.min, s, o, h, c), i.max = C0(i.max, s, o, h, c);
}
function k0(i, s, [o, r, c], m, f) {
  iS(i, s[o], s[r], s[c], s.scale, m, f);
}
const aS = ["x", "scaleX", "originX"], sS = ["y", "scaleY", "originY"];
function B0(i, s, o, r) {
  k0(i.x, s, aS, o ? o.x : void 0, r ? r.x : void 0), k0(i.y, s, sS, o ? o.y : void 0, r ? r.y : void 0);
}
function A0(i) {
  return i.translate === 0 && i.scale === 1;
}
function Ob(i) {
  return A0(i.x) && A0(i.y);
}
function j0(i, s) {
  return i.min === s.min && i.max === s.max;
}
function oS(i, s) {
  return j0(i.x, s.x) && j0(i.y, s.y);
}
function M0(i, s) {
  return Math.round(i.min) === Math.round(s.min) && Math.round(i.max) === Math.round(s.max);
}
function Ub(i, s) {
  return M0(i.x, s.x) && M0(i.y, s.y);
}
function P0(i) {
  return ft(i.x) / ft(i.y);
}
function _0(i, s) {
  return i.translate === s.translate && i.scale === s.scale && i.originPoint === s.originPoint;
}
function It(i) {
  return [i("x"), i("y")];
}
function lS(i, s, o) {
  let r = "";
  const c = i.x.translate / s.x, m = i.y.translate / s.y, f = (o == null ? void 0 : o.z) || 0;
  if ((c || m || f) && (r = `translate3d(${c}px, ${m}px, ${f}px) `), (s.x !== 1 || s.y !== 1) && (r += `scale(${1 / s.x}, ${1 / s.y}) `), o) {
    const { transformPerspective: g, rotate: v, pathRotation: y, rotateX: N, rotateY: w, skewX: V, skewY: P } = o;
    g && (r = `perspective(${g}px) ${r}`), v && (r += `rotate(${v}deg) `), y && (r += `rotate(${y}deg) `), N && (r += `rotateX(${N}deg) `), w && (r += `rotateY(${w}deg) `), V && (r += `skewX(${V}deg) `), P && (r += `skewY(${P}deg) `);
  }
  const h = i.x.scale * s.x, b = i.y.scale * s.y;
  return (h !== 1 || b !== 1) && (r += `scale(${h}, ${b})`), r || "none";
}
const Lb = [
  "borderTopLeftRadius",
  "borderTopRightRadius",
  "borderBottomLeftRadius",
  "borderBottomRightRadius"
], rS = Lb.length, z0 = (i) => typeof i == "string" ? parseFloat(i) : i, R0 = (i) => typeof i == "number" || ie.test(i);
function uS(i, s, o, r, c, m) {
  c ? (i.opacity = Me(0, o.opacity ?? 1, cS(r)), i.opacityExit = Me(s.opacity ?? 1, 0, fS(r))) : m && (i.opacity = Me(s.opacity ?? 1, o.opacity ?? 1, r));
  for (let f = 0; f < rS; f++) {
    const h = Lb[f];
    let b = O0(s, h), g = O0(o, h);
    if (b === void 0 && g === void 0)
      continue;
    b || (b = 0), g || (g = 0), b === 0 || g === 0 || R0(b) === R0(g) ? (i[h] = Math.max(Me(z0(b), z0(g), r), 0), (tn.test(g) || tn.test(b)) && (i[h] += "%")) : i[h] = g;
  }
  (s.rotate || o.rotate) && (i.rotate = Me(s.rotate || 0, o.rotate || 0, r));
}
function O0(i, s) {
  return i[s] !== void 0 ? i[s] : i.borderRadius;
}
const cS = /* @__PURE__ */ Hb(0, 0.5, jg), fS = /* @__PURE__ */ Hb(0.5, 0.95, qt);
function Hb(i, s, o) {
  return (r) => r < i ? 0 : r > s ? 1 : o(/* @__PURE__ */ ws(i, s, r));
}
function dS(i, s, o) {
  const r = ot(i) ? i : xa(i);
  return r.start(bf("", r, s, o)), r.animation;
}
function Cs(i, s, o, r = { passive: !0 }) {
  return i.addEventListener(s, o, r), () => i.removeEventListener(s, o);
}
const mS = (i, s) => i.depth - s.depth;
class pS {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(s) {
    sf(this.children, s), this.isDirty = !0;
  }
  remove(s) {
    pl(this.children, s), this.isDirty = !0;
  }
  forEach(s) {
    this.isDirty && this.children.sort(mS), this.isDirty = !1, this.children.forEach(s);
  }
}
function hS(i, s) {
  const o = ct.now(), r = ({ timestamp: c }) => {
    const m = c - o;
    m >= s && (Wn(r), i(m - s));
  };
  return Pe.setup(r, !0), () => Wn(r);
}
function fl(i) {
  return ot(i) ? i.get() : i;
}
class gS {
  constructor() {
    this.members = [];
  }
  add(s) {
    sf(this.members, s);
    for (let o = this.members.length - 1; o >= 0; o--) {
      const r = this.members[o];
      if (r === s || r === this.lead || r === this.prevLead)
        continue;
      const c = r.instance;
      (!c || c.isConnected === !1) && !r.snapshot && (pl(this.members, r), r.unmount());
    }
    s.scheduleRender();
  }
  remove(s) {
    if (pl(this.members, s), s === this.prevLead && (this.prevLead = void 0), s === this.lead) {
      const o = this.members[this.members.length - 1];
      o && this.promote(o);
    }
  }
  relegate(s) {
    var o;
    for (let r = this.members.indexOf(s) - 1; r >= 0; r--) {
      const c = this.members[r];
      if (c.isPresent !== !1 && ((o = c.instance) == null ? void 0 : o.isConnected) !== !1)
        return this.promote(c), !0;
    }
    return !1;
  }
  promote(s, o) {
    var c;
    const r = this.lead;
    if (s !== r && (this.prevLead = r, this.lead = s, s.show(), r)) {
      r.updateSnapshot(), s.scheduleRender();
      const { layoutDependency: m } = r.options, { layoutDependency: f } = s.options;
      (m === void 0 || m !== f) && (s.resumeFrom = r, o && (r.preserveOpacity = !0), r.snapshot && (s.snapshot = r.snapshot, s.snapshot.latestValues = r.animationValues || r.latestValues), (c = s.root) != null && c.isUpdating && (s.isLayoutDirty = !0)), s.options.crossfade === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((s) => {
      var o, r, c, m, f;
      (r = (o = s.options).onExitComplete) == null || r.call(o), (f = (c = s.resumingFrom) == null ? void 0 : (m = c.options).onExitComplete) == null || f.call(m);
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
const dl = {
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
}, mc = ["", "X", "Y", "Z"], bS = 1e3;
let vS = 0;
function pc(i, s, o, r) {
  const { latestValues: c } = s;
  c[i] && (o[i] = c[i], s.setStaticValue(i, 0), r && (r[i] = 0));
}
function qb(i) {
  if (i.hasCheckedOptimisedAppear = !0, i.root === i)
    return;
  const { visualElement: s } = i.options;
  if (!s)
    return;
  const o = ub(s);
  if (window.MotionHasOptimisedAnimation(o, "transform")) {
    const { layout: c, layoutId: m } = i.options;
    window.MotionCancelOptimisedAnimation(o, "transform", Pe, !(c || m));
  }
  const { parent: r } = i;
  r && !r.hasCheckedOptimisedAppear && qb(r);
}
function Gb({ attachResizeListener: i, defaultParent: s, measureScroll: o, checkIsScrollRoot: r, resetTransform: c }) {
  return class {
    constructor(f = {}, h = s == null ? void 0 : s()) {
      this.id = vS++, this.animationId = 0, this.animationCommitId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.layoutVersion = 0, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, this.nodes.forEach(NS), this.nodes.forEach(VS), this.nodes.forEach(CS), this.nodes.forEach(SS);
      }, this.resolvedRelativeTargetAt = 0, this.linkedParentVersion = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = f, this.root = h ? h.root || h : this, this.path = h ? [...h.path, h] : [], this.parent = h, this.depth = h ? h.depth + 1 : 0;
      for (let b = 0; b < this.path.length; b++)
        this.path[b].shouldResetTransform = !0;
      this.root === this && (this.nodes = new pS());
    }
    addEventListener(f, h) {
      return this.eventHandlers.has(f) || this.eventHandlers.set(f, new of()), this.eventHandlers.get(f).add(h);
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
      this.isSVG = Sf(f) && !y2(f), this.instance = f;
      const { layoutId: h, layout: b, visualElement: g } = this.options;
      if (g && !g.current && g.mount(f), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (b || h) && (this.isLayoutDirty = !0), i) {
        let v, y = 0;
        const N = () => this.root.updateBlockedByResize = !1;
        Pe.read(() => {
          y = window.innerWidth;
        }), i(f, () => {
          const w = window.innerWidth;
          w !== y && (y = w, this.root.updateBlockedByResize = !0, v && v(), v = hS(N, 250), dl.hasAnimatedSinceResize && (dl.hasAnimatedSinceResize = !1, this.nodes.forEach(H0)));
        });
      }
      h && this.root.registerSharedNode(h, this), this.options.animate !== !1 && g && (h || b) && this.addEventListener("didUpdate", ({ delta: v, hasLayoutChanged: y, hasRelativeLayoutChanged: N, layout: w }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const V = this.options.transition || g.getDefaultTransition() || MS, { onLayoutAnimationStart: P, onLayoutAnimationComplete: B } = g.getProps(), z = !this.targetLayout || !Ub(this.targetLayout, w), G = !y && N;
        if (this.options.layoutRoot || this.resumeFrom || G || y && (z || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
          const L = {
            ...gf(V, "layout"),
            onPlay: P,
            onComplete: B
          };
          (g.shouldReduceMotion || this.options.layoutRoot) && (L.delay = 0, L.type = !1), this.startAnimation(L), this.setAnimationOrigin(v, G, L.path);
        } else
          y || H0(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = w;
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
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(kS), this.animationId++);
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
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && qb(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
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
        this.unblockUpdate(), this.updateBlockedByResize = !1, this.clearAllSnapshots(), b && this.nodes.forEach(ES), this.nodes.forEach(U0);
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(L0);
        return;
      }
      this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach(wS), this.nodes.forEach(TS), this.nodes.forEach(xS), this.nodes.forEach(yS)) : this.nodes.forEach(L0), this.clearAllSnapshots();
      const h = ct.now();
      st.delta = nn(0, 1e3 / 60, h - st.timestamp), st.timestamp = h, st.isProcessing = !0, sc.update.process(st), sc.preRender.process(st), sc.render.process(st), st.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, yf.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(DS), this.sharedNodes.forEach(BS);
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
        for (let b = 0; b < this.path.length; b++)
          this.path[b].updateScroll();
      const f = this.layout;
      this.layout = this.measure(!1), this.layoutVersion++, this.layoutCorrected || (this.layoutCorrected = $e()), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: h } = this.options;
      h && h.notify("LayoutMeasure", this.layout.layoutBox, f ? f.layoutBox : void 0);
    }
    updateScroll(f = "measure") {
      let h = !!(this.options.layoutScroll && this.instance);
      if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === f && (h = !1), h && this.instance) {
        const b = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: f,
          isRoot: b,
          offset: o(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : b
        };
      }
    }
    resetTransform() {
      if (!c)
        return;
      const f = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, h = this.projectionDelta && !Ob(this.projectionDelta), b = this.getTransformTemplate(), g = b ? b(this.latestValues, "") : void 0, v = g !== this.prevTransformTemplateValue;
      f && this.instance && (h || yi(this.latestValues) || v) && (c(this.instance, g), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(f = !0) {
      const h = this.measurePageBox();
      let b = this.removeElementScroll(h);
      return f && (b = this.removeTransform(b)), PS(b), {
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
        return $e();
      const h = f.measureViewportBox();
      if (!(((g = this.scroll) == null ? void 0 : g.wasRoot) || this.path.some(_S))) {
        const { scroll: v } = this.root;
        v && (en(h.x, v.offset.x), en(h.y, v.offset.y));
      }
      return h;
    }
    removeElementScroll(f) {
      var b;
      const h = $e();
      if (Ft(h, f), (b = this.scroll) != null && b.wasRoot)
        return h;
      for (let g = 0; g < this.path.length; g++) {
        const v = this.path[g], { scroll: y, options: N } = v;
        v !== this.root && y && N.layoutScroll && (y.wasRoot && Ft(h, f), en(h.x, y.offset.x), en(h.y, y.offset.y));
      }
      return h;
    }
    applyTransform(f, h = !1, b) {
      var v, y;
      const g = b || $e();
      Ft(g, f);
      for (let N = 0; N < this.path.length; N++) {
        const w = this.path[N];
        !h && w.options.layoutScroll && w.scroll && w !== w.root && (en(g.x, -w.scroll.offset.x), en(g.y, -w.scroll.offset.y)), yi(w.latestValues) && cl(g, w.latestValues, (v = w.layout) == null ? void 0 : v.layoutBox);
      }
      return yi(this.latestValues) && cl(g, this.latestValues, (y = this.layout) == null ? void 0 : y.layoutBox), g;
    }
    removeTransform(f) {
      var b;
      const h = $e();
      Ft(h, f);
      for (let g = 0; g < this.path.length; g++) {
        const v = this.path[g];
        if (!yi(v.latestValues))
          continue;
        let y;
        v.instance && (Gc(v.latestValues) && v.updateSnapshot(), y = $e(), Ft(y, v.measurePageBox())), B0(h, v.latestValues, (b = v.snapshot) == null ? void 0 : b.layoutBox, y);
      }
      return yi(this.latestValues) && B0(h, this.latestValues), h;
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
      var w;
      const h = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = h.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = h.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = h.isSharedProjectionDirty);
      const b = !!this.resumingFrom || this !== h;
      if (!(f || b && this.isSharedProjectionDirty || this.isProjectionDirty || (w = this.parent) != null && w.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
        return;
      const { layout: v, layoutId: y } = this.options;
      if (!this.layout || !(v || y))
        return;
      this.resolvedRelativeTargetAt = st.timestamp;
      const N = this.getClosestProjectingParent();
      N && this.linkedParentVersion !== N.layoutVersion && !N.options.layoutRoot && this.removeRelativeTarget(), !this.targetDelta && !this.relativeTarget && (this.options.layoutAnchor !== !1 && N && N.layout ? this.createRelativeTarget(N, this.layout.layoutBox, N.layout.layoutBox) : this.removeRelativeTarget()), !(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = $e(), this.targetWithTransforms = $e()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), nS(this.target, this.relativeTarget, this.relativeParent.target, this.options.layoutAnchor || void 0)) : this.targetDelta ? (this.resumingFrom ? this.applyTransform(this.layout.layoutBox, !1, this.target) : Ft(this.target, this.layout.layoutBox), Tb(this.target, this.targetDelta)) : Ft(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1, this.options.layoutAnchor !== !1 && N && !!N.resumingFrom == !!this.resumingFrom && !N.options.layoutScroll && N.target && this.animationProgress !== 1 ? this.createRelativeTarget(N, this.target, N.target) : this.relativeParent = this.relativeTarget = void 0));
    }
    getClosestProjectingParent() {
      if (!(!this.parent || Gc(this.parent.latestValues) || wb(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    createRelativeTarget(f, h, b) {
      this.relativeParent = f, this.linkedParentVersion = f.layoutVersion, this.forceRelativeParentToResolveTarget(), this.relativeTarget = $e(), this.relativeTargetOrigin = $e(), Sl(this.relativeTargetOrigin, h, b, this.options.layoutAnchor || void 0), Ft(this.relativeTarget, this.relativeTargetOrigin);
    }
    removeRelativeTarget() {
      this.relativeParent = this.relativeTarget = void 0;
    }
    calcProjection() {
      var V;
      const f = this.getLead(), h = !!this.resumingFrom || this !== f;
      let b = !0;
      if ((this.isProjectionDirty || (V = this.parent) != null && V.isProjectionDirty) && (b = !1), h && (this.isSharedProjectionDirty || this.isTransformDirty) && (b = !1), this.resolvedRelativeTargetAt === st.timestamp && (b = !1), b)
        return;
      const { layout: g, layoutId: v } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(g || v))
        return;
      Ft(this.layoutCorrected, this.layout.layoutBox);
      const y = this.treeScale.x, N = this.treeScale.y;
      A2(this.layoutCorrected, this.treeScale, this.path, h), f.layout && !f.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (f.target = f.layout.layoutBox, f.targetWithTransforms = $e());
      const { target: w } = f;
      if (!w) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (E0(this.prevProjectionDelta.x, this.projectionDelta.x), E0(this.prevProjectionDelta.y, this.projectionDelta.y)), Ds(this.projectionDelta, this.layoutCorrected, w, this.latestValues), (this.treeScale.x !== y || this.treeScale.y !== N || !_0(this.projectionDelta.x, this.prevProjectionDelta.x) || !_0(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", w));
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
      this.prevProjectionDelta = ha(), this.projectionDelta = ha(), this.projectionDeltaWithTransform = ha();
    }
    setAnimationOrigin(f, h = !1, b) {
      const g = this.snapshot, v = g ? g.latestValues : {}, y = { ...this.latestValues }, N = ha();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !h;
      const w = $e(), V = g ? g.source : void 0, P = this.layout ? this.layout.source : void 0, B = V !== P, z = this.getStack(), G = !z || z.members.length <= 1, L = !!(B && !G && this.options.crossfade === !0 && !this.path.some(jS));
      this.animationProgress = 0;
      let q;
      const F = b == null ? void 0 : b.interpolateProjection(f);
      this.mixTargetDelta = (W) => {
        const Q = W / 1e3, X = F == null ? void 0 : F(Q);
        X ? (N.x.translate = X.x, N.x.scale = Me(f.x.scale, 1, Q), N.x.origin = f.x.origin, N.x.originPoint = f.x.originPoint, N.y.translate = X.y, N.y.scale = Me(f.y.scale, 1, Q), N.y.origin = f.y.origin, N.y.originPoint = f.y.originPoint) : (q0(N.x, f.x, Q), q0(N.y, f.y, Q)), this.setTargetDelta(N), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Sl(w, this.layout.layoutBox, this.relativeParent.layout.layoutBox, this.options.layoutAnchor || void 0), AS(this.relativeTarget, this.relativeTargetOrigin, w, Q), q && oS(this.relativeTarget, q) && (this.isProjectionDirty = !1), q || (q = $e()), Ft(q, this.relativeTarget)), B && (this.animationValues = y, uS(y, v, this.latestValues, Q, L, G)), X && X.rotate !== void 0 && (this.animationValues || (this.animationValues = y), this.animationValues.pathRotation = X.rotate), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = Q;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(f) {
      var h, b, g;
      this.notifyListeners("animationStart"), (h = this.currentAnimation) == null || h.stop(), (g = (b = this.resumingFrom) == null ? void 0 : b.currentAnimation) == null || g.stop(), this.pendingAnimation && (Wn(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = Pe.update(() => {
        dl.hasAnimatedSinceResize = !0, this.motionValue || (this.motionValue = xa(0)), this.motionValue.jump(0, !1), this.currentAnimation = dS(this.motionValue, [0, 1e3], {
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
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(bS), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const f = this.getLead();
      let { targetWithTransforms: h, target: b, layout: g, latestValues: v } = f;
      if (!(!h || !b || !g)) {
        if (this !== f && this.layout && g && Yb(this.options.animationType, this.layout.layoutBox, g.layoutBox)) {
          b = this.target || $e();
          const y = ft(this.layout.layoutBox.x);
          b.x.min = f.target.x.min, b.x.max = b.x.min + y;
          const N = ft(this.layout.layoutBox.y);
          b.y.min = f.target.y.min, b.y.max = b.y.min + N;
        }
        Ft(h, b), cl(h, v), Ds(this.projectionDeltaWithTransform, this.layoutCorrected, h, v);
      }
    }
    registerSharedNode(f, h) {
      this.sharedNodes.has(f) || this.sharedNodes.set(f, new gS()), this.sharedNodes.get(f).add(h);
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
      b.z && pc("z", f, g, this.animationValues);
      for (let v = 0; v < mc.length; v++)
        pc(`rotate${mc[v]}`, f, g, this.animationValues), pc(`skew${mc[v]}`, f, g, this.animationValues);
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
        this.needsReset = !1, f.visibility = "", f.opacity = "", f.pointerEvents = fl(h == null ? void 0 : h.pointerEvents) || "", f.transform = b ? b(this.latestValues, "") : "none";
        return;
      }
      const g = this.getLead();
      if (!this.projectionDelta || !this.layout || !g.target) {
        this.options.layoutId && (f.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, f.pointerEvents = fl(h == null ? void 0 : h.pointerEvents) || ""), this.hasProjected && !yi(this.latestValues) && (f.transform = b ? b({}, "") : "none", this.hasProjected = !1);
        return;
      }
      f.visibility = "";
      const v = g.animationValues || g.latestValues;
      this.applyTransformsToTarget();
      let y = lS(this.projectionDeltaWithTransform, this.treeScale, v);
      b && (y = b(v, y)), f.transform = y;
      const { x: N, y: w } = this.projectionDelta;
      f.transformOrigin = `${N.origin * 100}% ${w.origin * 100}% 0`, g.animationValues ? f.opacity = g === this ? v.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : v.opacityExit : f.opacity = g === this ? v.opacity !== void 0 ? v.opacity : "" : v.opacityExit !== void 0 ? v.opacityExit : 0;
      for (const V in Xc) {
        if (v[V] === void 0)
          continue;
        const { correct: P, applyTo: B, isCSSVariable: z } = Xc[V], G = y === "none" ? v[V] : P(v[V], g);
        if (B) {
          const L = B.length;
          for (let q = 0; q < L; q++)
            f[B[q]] = G;
        } else
          z ? this.options.visualElement.renderState.vars[V] = G : f[V] = G;
      }
      this.options.layoutId && (f.pointerEvents = g === this ? fl(h == null ? void 0 : h.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((f) => {
        var h;
        return (h = f.currentAnimation) == null ? void 0 : h.stop();
      }), this.root.nodes.forEach(U0), this.root.sharedNodes.clear();
    }
  };
}
function xS(i) {
  i.updateLayout();
}
function yS(i) {
  var o;
  const s = ((o = i.resumeFrom) == null ? void 0 : o.snapshot) || i.snapshot;
  if (i.isLead() && i.layout && s && i.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: c } = i.layout, { animationType: m } = i.options, f = s.source !== i.layout.source;
    if (m === "size")
      It((y) => {
        const N = f ? s.measuredBox[y] : s.layoutBox[y], w = ft(N);
        N.min = r[y].min, N.max = N.min + w;
      });
    else if (m === "x" || m === "y") {
      const y = m === "x" ? "y" : "x";
      Fc(f ? s.measuredBox[y] : s.layoutBox[y], r[y]);
    } else Yb(m, s.layoutBox, r) && It((y) => {
      const N = f ? s.measuredBox[y] : s.layoutBox[y], w = ft(r[y]);
      N.max = N.min + w, i.relativeTarget && !i.currentAnimation && (i.isProjectionDirty = !0, i.relativeTarget[y].max = i.relativeTarget[y].min + w);
    });
    const h = ha();
    Ds(h, r, s.layoutBox);
    const b = ha();
    f ? Ds(b, i.applyTransform(c, !0), s.measuredBox) : Ds(b, r, s.layoutBox);
    const g = !Ob(h);
    let v = !1;
    if (!i.resumeFrom) {
      const y = i.getClosestProjectingParent();
      if (y && !y.resumeFrom) {
        const { snapshot: N, layout: w } = y;
        if (N && w) {
          const V = i.options.layoutAnchor || void 0, P = $e();
          Sl(P, s.layoutBox, N.layoutBox, V);
          const B = $e();
          Sl(B, r, w.layoutBox, V), Ub(P, B) || (v = !0), y.options.layoutRoot && (i.relativeTarget = B, i.relativeTargetOrigin = P, i.relativeParent = y);
        }
      }
    }
    i.notifyListeners("didUpdate", {
      layout: r,
      snapshot: s,
      delta: b,
      layoutDelta: h,
      hasLayoutChanged: g,
      hasRelativeLayoutChanged: v
    });
  } else if (i.isLead()) {
    const { onExitComplete: r } = i.options;
    r && r();
  }
  i.options.transition = void 0;
}
function NS(i) {
  i.parent && (i.isProjecting() || (i.isProjectionDirty = i.parent.isProjectionDirty), i.isSharedProjectionDirty || (i.isSharedProjectionDirty = !!(i.isProjectionDirty || i.parent.isProjectionDirty || i.parent.isSharedProjectionDirty)), i.isTransformDirty || (i.isTransformDirty = i.parent.isTransformDirty));
}
function SS(i) {
  i.isProjectionDirty = i.isSharedProjectionDirty = i.isTransformDirty = !1;
}
function DS(i) {
  i.clearSnapshot();
}
function U0(i) {
  i.clearMeasurements();
}
function ES(i) {
  i.isLayoutDirty = !0, i.updateLayout();
}
function L0(i) {
  i.isLayoutDirty = !1;
}
function wS(i) {
  i.isAnimationBlocked && i.layout && !i.isLayoutDirty && (i.snapshot = i.layout, i.isLayoutDirty = !0);
}
function TS(i) {
  const { visualElement: s } = i.options;
  s && s.getProps().onBeforeLayoutMeasure && s.notify("BeforeLayoutMeasure"), i.resetTransform();
}
function H0(i) {
  i.finishAnimation(), i.targetDelta = i.relativeTarget = i.target = void 0, i.isProjectionDirty = !0;
}
function VS(i) {
  i.resolveTargetDelta();
}
function CS(i) {
  i.calcProjection();
}
function kS(i) {
  i.resetSkewAndRotation();
}
function BS(i) {
  i.removeLeadSnapshot();
}
function q0(i, s, o) {
  i.translate = Me(s.translate, 0, o), i.scale = Me(s.scale, 1, o), i.origin = s.origin, i.originPoint = s.originPoint;
}
function G0(i, s, o, r) {
  i.min = Me(s.min, o.min, r), i.max = Me(s.max, o.max, r);
}
function AS(i, s, o, r) {
  G0(i.x, s.x, o.x, r), G0(i.y, s.y, o.y, r);
}
function jS(i) {
  return i.animationValues && i.animationValues.opacityExit !== void 0;
}
const MS = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, Y0 = (i) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(i), X0 = Y0("applewebkit/") && !Y0("chrome/") ? Math.round : qt;
function F0(i) {
  i.min = X0(i.min), i.max = X0(i.max);
}
function PS(i) {
  F0(i.x), F0(i.y);
}
function Yb(i, s, o) {
  return i === "position" || i === "preserve-aspect" && !tS(P0(s), P0(o), 0.2);
}
function _S(i) {
  var s;
  return i !== i.root && ((s = i.scroll) == null ? void 0 : s.wasRoot);
}
const zS = Gb({
  attachResizeListener: (i, s) => Cs(i, "resize", s),
  measureScroll: () => {
    var i, s;
    return {
      x: document.documentElement.scrollLeft || ((i = document.body) == null ? void 0 : i.scrollLeft) || 0,
      y: document.documentElement.scrollTop || ((s = document.body) == null ? void 0 : s.scrollTop) || 0
    };
  },
  checkIsScrollRoot: () => !0
}), hc = {
  current: void 0
}, Xb = Gb({
  measureScroll: (i) => ({
    x: i.scrollLeft,
    y: i.scrollTop
  }),
  defaultParent: () => {
    if (!hc.current) {
      const i = new zS({});
      i.mount(window), i.setOptions({ layoutScroll: !0 }), hc.current = i;
    }
    return hc.current;
  },
  resetTransform: (i, s) => {
    i.style.transform = s !== void 0 ? s : "none";
  },
  checkIsScrollRoot: (i) => window.getComputedStyle(i).position === "fixed"
}), Vf = H.createContext({
  transformPagePoint: (i) => i,
  isStatic: !1,
  reducedMotion: "never"
});
function Q0(i, s) {
  if (typeof i == "function")
    return i(s);
  i != null && (i.current = s);
}
function RS(...i) {
  return (s) => {
    let o = !1;
    const r = i.map((c) => {
      const m = Q0(c, s);
      return !o && typeof m == "function" && (o = !0), m;
    });
    if (o)
      return () => {
        for (let c = 0; c < r.length; c++) {
          const m = r[c];
          typeof m == "function" ? m() : Q0(i[c], null);
        }
      };
  };
}
function OS(...i) {
  return H.useCallback(RS(...i), i);
}
class US extends H.Component {
  getSnapshotBeforeUpdate(s) {
    const o = this.props.childRef.current;
    if (ol(o) && s.isPresent && !this.props.isPresent && this.props.pop !== !1) {
      const r = o.offsetParent, c = ol(r) && r.offsetWidth || 0, m = ol(r) && r.offsetHeight || 0, f = getComputedStyle(o), h = this.props.sizeRef.current;
      h.height = parseFloat(f.height), h.width = parseFloat(f.width), h.top = o.offsetTop, h.left = o.offsetLeft, h.right = c - h.width - h.left, h.bottom = m - h.height - h.top, h.direction = f.direction;
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
function LS({ children: i, isPresent: s, anchorX: o, anchorY: r, root: c, pop: m }) {
  var N;
  const f = H.useId(), h = H.useRef(null), b = H.useRef({
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    direction: "ltr"
  }), { nonce: g } = H.useContext(Vf), v = ((N = i.props) == null ? void 0 : N.ref) ?? (i == null ? void 0 : i.ref), y = OS(h, v);
  return H.useInsertionEffect(() => {
    const { width: w, height: V, top: P, left: B, right: z, bottom: G, direction: L } = b.current;
    if (s || m === !1 || !h.current || !w || !V)
      return;
    const q = L === "rtl", F = o === "left" ? q ? `right: ${z}` : `left: ${B}` : q ? `left: ${B}` : `right: ${z}`, W = r === "bottom" ? `bottom: ${G}` : `top: ${P}`;
    h.current.dataset.motionPopId = f;
    const Q = document.createElement("style");
    g && (Q.nonce = g);
    const X = c ?? document.head;
    return X.appendChild(Q), Q.sheet && Q.sheet.insertRule(`
          [data-motion-pop-id="${f}"] {
            position: absolute !important;
            width: ${w}px !important;
            height: ${V}px !important;
            ${F}px !important;
            ${W}px !important;
          }
        `), () => {
      var J;
      (J = h.current) == null || J.removeAttribute("data-motion-pop-id"), X.contains(Q) && X.removeChild(Q);
    };
  }, [s]), Dn.jsx(US, { isPresent: s, childRef: h, sizeRef: b, pop: m, children: m === !1 ? i : H.cloneElement(i, { ref: y }) });
}
const HS = ({ children: i, initial: s, isPresent: o, onExitComplete: r, custom: c, presenceAffectsLayout: m, mode: f, anchorX: h, anchorY: b, root: g }) => {
  const v = af(qS), y = H.useId();
  let N = !0, w = H.useMemo(() => (N = !1, {
    id: y,
    initial: s,
    isPresent: o,
    custom: c,
    onExitComplete: (V) => {
      v.set(V, !0);
      for (const P of v.values())
        if (!P)
          return;
      r && r();
    },
    register: (V) => (v.set(V, !1), () => v.delete(V))
  }), [o, v, r]);
  return m && N && (w = { ...w }), H.useMemo(() => {
    v.forEach((V, P) => v.set(P, !1));
  }, [o]), H.useEffect(() => {
    !o && !v.size && r && r();
  }, [o]), i = Dn.jsx(LS, { pop: f === "popLayout", isPresent: o, anchorX: h, anchorY: b, root: g, children: i }), Dn.jsx(Vl.Provider, { value: w, children: i });
};
function qS() {
  return /* @__PURE__ */ new Map();
}
function Fb(i = !0) {
  const s = H.useContext(Vl);
  if (s === null)
    return [!0, null];
  const { isPresent: o, onExitComplete: r, register: c } = s, m = H.useId();
  H.useEffect(() => {
    if (i)
      return c(m);
  }, [i]);
  const f = H.useCallback(() => i && r && r(m), [m, r, i]);
  return !o && r ? [!1, f] : [!0];
}
const nl = (i) => i.key || "";
function Z0(i) {
  const s = [];
  return H.Children.forEach(i, (o) => {
    H.isValidElement(o) && s.push(o);
  }), s;
}
const Dl = ({ children: i, custom: s, initial: o = !0, onExitComplete: r, presenceAffectsLayout: c = !0, mode: m = "sync", propagate: f = !1, anchorX: h = "left", anchorY: b = "top", root: g }) => {
  const [v, y] = Fb(f), N = H.useMemo(() => Z0(i), [i]), w = f && !v ? [] : N.map(nl), V = H.useRef(!0), P = H.useRef(N), B = af(() => /* @__PURE__ */ new Map()), z = H.useRef(/* @__PURE__ */ new Set()), [G, L] = H.useState(N), [q, F] = H.useState(N);
  yg(() => {
    V.current = !1, P.current = N;
    for (let X = 0; X < q.length; X++) {
      const J = nl(q[X]);
      w.includes(J) ? (B.delete(J), z.current.delete(J)) : B.get(J) !== !0 && B.set(J, !1);
    }
  }, [q, w.length, w.join("-")]);
  const W = [];
  if (N !== G) {
    let X = [...N];
    for (let J = 0; J < q.length; J++) {
      const ee = q[J], Y = nl(ee);
      w.includes(Y) || (X.splice(J, 0, ee), W.push(ee));
    }
    return m === "wait" && W.length && (X = W), F(Z0(X)), L(N), null;
  }
  const { forceRender: Q } = H.useContext(nf);
  return Dn.jsx(Dn.Fragment, { children: q.map((X) => {
    const J = nl(X), ee = f && !v ? !1 : N === q || w.includes(J), Y = () => {
      if (z.current.has(J))
        return;
      if (B.has(J))
        z.current.add(J), B.set(J, !0);
      else
        return;
      let I = !0;
      B.forEach((ye) => {
        ye || (I = !1);
      }), I && (Q == null || Q(), F(P.current), f && (y == null || y()), r && r());
    };
    return Dn.jsx(HS, { isPresent: ee, initial: !V.current || o ? void 0 : !1, custom: s, presenceAffectsLayout: c, mode: m, root: g, onExitComplete: ee ? void 0 : Y, anchorX: h, anchorY: b, children: X }, J);
  }) });
}, Qb = H.createContext({ strict: !1 }), K0 = {
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
let J0 = !1;
function GS() {
  if (J0)
    return;
  const i = {};
  for (const s in K0)
    i[s] = {
      isEnabled: (o) => K0[s].some((r) => !!o[r])
    };
  Sb(i), J0 = !0;
}
function Zb() {
  return GS(), V2();
}
function YS(i) {
  const s = Zb();
  for (const o in i)
    s[o] = {
      ...s[o],
      ...i[o]
    };
  Sb(s);
}
const XS = /* @__PURE__ */ new Set([
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
function El(i) {
  return i.startsWith("while") || i.startsWith("drag") && i !== "draggable" || i.startsWith("layout") || i.startsWith("onTap") || i.startsWith("onPan") || i.startsWith("onLayout") || XS.has(i);
}
let Kb = (i) => !El(i);
function FS(i) {
  typeof i == "function" && (Kb = (s) => s.startsWith("on") ? !El(s) : i(s));
}
try {
  FS(require("@emotion/is-prop-valid").default);
} catch {
}
function QS(i, s, o) {
  const r = {};
  for (const c in i)
    c === "values" && typeof i.values == "object" || ot(i[c]) || (Kb(c) || o === !0 && El(c) || !s && !El(c) || // If trying to use native HTML drag events, forward drag listeners
    i.draggable && c.startsWith("onDrag")) && (r[c] = i[c]);
  return r;
}
const Al = /* @__PURE__ */ H.createContext({});
function ZS(i, s) {
  if (Bl(i)) {
    const { initial: o, animate: r } = i;
    return {
      initial: o === !1 || Vs(o) ? o : void 0,
      animate: Vs(r) ? r : void 0
    };
  }
  return i.inherit !== !1 ? s : {};
}
function KS(i) {
  const { initial: s, animate: o } = ZS(i, H.useContext(Al));
  return H.useMemo(() => ({ initial: s, animate: o }), [$0(s), $0(o)]);
}
function $0(i) {
  return Array.isArray(i) ? i.join(" ") : i;
}
const Cf = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function Jb(i, s, o) {
  for (const r in s)
    !ot(s[r]) && !kb(r, o) && (i[r] = s[r]);
}
function JS({ transformTemplate: i }, s) {
  return H.useMemo(() => {
    const o = Cf();
    return wf(o, s, i), Object.assign({}, o.vars, o.style);
  }, [s]);
}
function $S(i, s) {
  const o = i.style || {}, r = {};
  return Jb(r, o, i), Object.assign(r, JS(i, s)), r;
}
function WS(i, s) {
  const o = {}, r = $S(i, s);
  return i.drag && i.dragListener !== !1 && (o.draggable = !1, r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none", r.touchAction = i.drag === !0 ? "none" : `pan-${i.drag === "x" ? "y" : "x"}`), i.tabIndex === void 0 && (i.onTap || i.onTapStart || i.whileTap) && (o.tabIndex = 0), o.style = r, o;
}
const $b = () => ({
  ...Cf(),
  attrs: {}
});
function IS(i, s, o, r) {
  const c = H.useMemo(() => {
    const m = $b();
    return Bb(m, s, jb(r), i.transformTemplate, i.style), {
      ...m.attrs,
      style: { ...m.style }
    };
  }, [s]);
  if (i.style) {
    const m = {};
    Jb(m, i.style, i), c.style = { ...m, ...c.style };
  }
  return c;
}
const eD = [
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
function kf(i) {
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
      !!(eD.indexOf(i) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(i))
    )
  );
}
function tD(i, s, o, { latestValues: r }, c, m = !1, f) {
  const b = (f ?? kf(i) ? IS : WS)(s, r, c, i), g = QS(s, typeof i == "string", m), v = i !== H.Fragment ? { ...g, ...b, ref: o } : {}, { children: y } = s, N = H.useMemo(() => ot(y) ? y.get() : y, [y]);
  return H.createElement(i, {
    ...v,
    children: N
  });
}
function nD({ scrapeMotionValuesFromProps: i, createRenderState: s }, o, r, c) {
  return {
    latestValues: iD(o, r, c, i),
    renderState: s()
  };
}
function iD(i, s, o, r) {
  const c = {}, m = r(i, {});
  for (const N in m)
    c[N] = fl(m[N]);
  let { initial: f, animate: h } = i;
  const b = Bl(i), g = yb(i);
  s && g && !b && i.inherit !== !1 && (f === void 0 && (f = s.initial), h === void 0 && (h = s.animate));
  let v = o ? o.initial === !1 : !1;
  v = v || f === !1;
  const y = v ? h : f;
  if (y && typeof y != "boolean" && !kl(y)) {
    const N = Array.isArray(y) ? y : [y];
    for (let w = 0; w < N.length; w++) {
      const V = vf(i, N[w]);
      if (V) {
        const { transitionEnd: P, transition: B, ...z } = V;
        for (const G in z) {
          let L = z[G];
          if (Array.isArray(L)) {
            const q = v ? L.length - 1 : 0;
            L = L[q];
          }
          L !== null && (c[G] = L);
        }
        for (const G in P)
          c[G] = P[G];
      }
    }
  }
  return c;
}
const Wb = (i) => (s, o) => {
  const r = H.useContext(Al), c = H.useContext(Vl), m = () => nD(i, s, r, c);
  return o ? m() : af(m);
}, aD = /* @__PURE__ */ Wb({
  scrapeMotionValuesFromProps: Tf,
  createRenderState: Cf
}), sD = /* @__PURE__ */ Wb({
  scrapeMotionValuesFromProps: Mb,
  createRenderState: $b
}), oD = Symbol.for("motionComponentSymbol");
function lD(i, s, o) {
  const r = H.useRef(o);
  H.useInsertionEffect(() => {
    r.current = o;
  });
  const c = H.useRef(null);
  return H.useCallback((m) => {
    var h;
    m && ((h = i.onMount) == null || h.call(i, m)), s && (m ? s.mount(m) : s.unmount());
    const f = r.current;
    if (typeof f == "function")
      if (m) {
        const b = f(m);
        typeof b == "function" && (c.current = b);
      } else c.current ? (c.current(), c.current = null) : f(m);
    else f && (f.current = m);
  }, [s]);
}
const Ib = H.createContext({});
function da(i) {
  return i && typeof i == "object" && Object.prototype.hasOwnProperty.call(i, "current");
}
function rD(i, s, o, r, c, m) {
  var L, q;
  const { visualElement: f } = H.useContext(Al), h = H.useContext(Qb), b = H.useContext(Vl), g = H.useContext(Vf), v = g.reducedMotion, y = g.skipAnimations, N = H.useRef(null), w = H.useRef(!1);
  r = r || h.renderer, !N.current && r && (N.current = r(i, {
    visualState: s,
    parent: f,
    props: o,
    presenceContext: b,
    blockInitialAnimation: b ? b.initial === !1 : !1,
    reducedMotionConfig: v,
    skipAnimations: y,
    isSVG: m
  }), w.current && N.current && (N.current.manuallyAnimateOnMount = !0));
  const V = N.current, P = H.useContext(Ib);
  V && !V.projection && c && (V.type === "html" || V.type === "svg") && uD(N.current, o, c, P);
  const B = H.useRef(!1);
  H.useInsertionEffect(() => {
    V && B.current && V.update(o, b);
  });
  const z = o[rb], G = H.useRef(!!z && typeof window < "u" && !((L = window.MotionHandoffIsComplete) != null && L.call(window, z)) && ((q = window.MotionHasOptimisedAnimation) == null ? void 0 : q.call(window, z)));
  return yg(() => {
    w.current = !0, V && (B.current = !0, window.MotionIsMounted = !0, V.updateFeatures(), V.scheduleRenderMicrotask(), G.current && V.animationState && V.animationState.animateChanges());
  }), H.useEffect(() => {
    V && (!G.current && V.animationState && V.animationState.animateChanges(), G.current && (queueMicrotask(() => {
      var F;
      (F = window.MotionHandoffMarkAsComplete) == null || F.call(window, z);
    }), G.current = !1), V.enteringChildren = void 0);
  }), V;
}
function uD(i, s, o, r) {
  const { layoutId: c, layout: m, drag: f, dragConstraints: h, layoutScroll: b, layoutRoot: g, layoutAnchor: v, layoutCrossfade: y } = s;
  i.projection = new o(i.latestValues, s["data-framer-portal-id"] ? void 0 : ev(i.parent)), i.projection.setOptions({
    layoutId: c,
    layout: m,
    alwaysMeasureLayout: !!f || h && da(h),
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
    layoutScroll: b,
    layoutRoot: g,
    layoutAnchor: v
  });
}
function ev(i) {
  if (i)
    return i.options.allowProjection !== !1 ? i.projection : ev(i.parent);
}
function gc(i, { forwardMotionProps: s = !1, type: o } = {}, r, c) {
  r && YS(r);
  const m = o ? o === "svg" : kf(i), f = m ? sD : aD;
  function h(g, v) {
    let y;
    const N = {
      ...H.useContext(Vf),
      ...g,
      layoutId: cD(g)
    }, { isStatic: w } = N, V = KS(g), P = f(g, w);
    if (!w && typeof window < "u") {
      fD();
      const B = dD(N);
      y = B.MeasureLayout, V.visualElement = rD(i, P, N, c, B.ProjectionNode, m);
    }
    return Dn.jsxs(Al.Provider, { value: V, children: [y && V.visualElement ? Dn.jsx(y, { visualElement: V.visualElement, ...N }) : null, tD(i, g, lD(P, V.visualElement, v), P, w, s, m)] });
  }
  h.displayName = `motion.${typeof i == "string" ? i : `create(${i.displayName ?? i.name ?? ""})`}`;
  const b = H.forwardRef(h);
  return b[oD] = i, b;
}
function cD({ layoutId: i }) {
  const s = H.useContext(nf).id;
  return s && i !== void 0 ? s + "-" + i : i;
}
function fD(i, s) {
  H.useContext(Qb).strict;
}
function dD(i) {
  const s = Zb(), { drag: o, layout: r } = s;
  if (!o && !r)
    return {};
  const c = { ...o, ...r };
  return {
    MeasureLayout: o != null && o.isEnabled(i) || r != null && r.isEnabled(i) ? c.MeasureLayout : void 0,
    ProjectionNode: c.ProjectionNode
  };
}
function mD(i, s) {
  if (typeof Proxy > "u")
    return gc;
  const o = /* @__PURE__ */ new Map(), r = (m, f) => gc(m, f, i, s), c = (m, f) => r(m, f);
  return new Proxy(c, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (m, f) => f === "create" ? r : (o.has(f) || o.set(f, gc(f, void 0, i, s)), o.get(f))
  });
}
const pD = (i, s) => s.isSVG ?? kf(i) ? new Y2(s) : new O2(s, {
  allowProjection: i !== H.Fragment
});
class hD extends In {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(s) {
    super(s), s.animationState || (s.animationState = K2(s));
  }
  updateAnimationControlsSubscription() {
    const { animate: s } = this.node.getProps();
    kl(s) && (this.unmountControls = s.subscribe(this.node));
  }
  /**
   * Subscribe any provided AnimationControls to the component's VisualElement
   */
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: s } = this.node.getProps(), { animate: o } = this.node.prevProps || {};
    s !== o && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var s;
    this.node.animationState.reset(), (s = this.unmountControls) == null || s.call(this);
  }
}
let gD = 0;
class bD extends In {
  constructor() {
    super(...arguments), this.id = gD++, this.isExitComplete = !1;
  }
  update() {
    var m;
    if (!this.node.presenceContext)
      return;
    const { isPresent: s, onExitComplete: o } = this.node.presenceContext, { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || s === r)
      return;
    if (s && r === !1) {
      if (this.isExitComplete) {
        const { initial: f, custom: h } = this.node.getProps();
        if (typeof f == "string" || typeof f == "object" && f !== null && !Array.isArray(f)) {
          const b = wi(this.node, f, h);
          if (b) {
            const { transition: g, transitionEnd: v, ...y } = b;
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
    o && !s && c.then(() => {
      this.isExitComplete = !0, o(this.id);
    });
  }
  mount() {
    const { register: s, onExitComplete: o } = this.node.presenceContext || {};
    o && o(this.id), s && (this.unmount = s(this.id));
  }
  unmount() {
  }
}
const vD = {
  animation: {
    Feature: hD
  },
  exit: {
    Feature: bD
  }
};
function Ms(i) {
  return {
    point: {
      x: i.pageX,
      y: i.pageY
    }
  };
}
const xD = (i) => (s) => Nf(s) && i(s, Ms(s));
function Es(i, s, o, r) {
  return Cs(i, s, xD(o), r);
}
const tv = ({ current: i }) => i ? i.ownerDocument.defaultView : null, W0 = (i, s) => Math.abs(i - s);
function yD(i, s) {
  const o = W0(i.x, s.x), r = W0(i.y, s.y);
  return Math.sqrt(o ** 2 + r ** 2);
}
const I0 = /* @__PURE__ */ new Set(["auto", "scroll"]);
class nv {
  constructor(s, o, { transformPagePoint: r, contextWindow: c = window, dragSnapToOrigin: m = !1, distanceThreshold: f = 3, element: h } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.lastRawMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.scrollPositions = /* @__PURE__ */ new Map(), this.removeScrollListeners = null, this.onElementScroll = (w) => {
      this.handleScroll(w.target);
    }, this.onWindowScroll = () => {
      this.handleScroll(window);
    }, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      this.lastRawMoveEventInfo && (this.lastMoveEventInfo = il(this.lastRawMoveEventInfo, this.transformPagePoint));
      const w = bc(this.lastMoveEventInfo, this.history), V = this.startEvent !== null, P = yD(w.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
      if (!V && !P)
        return;
      const { point: B } = w, { timestamp: z } = st;
      this.history.push({ ...B, timestamp: z });
      const { onStart: G, onMove: L } = this.handlers;
      V || (G && G(this.lastMoveEvent, w), this.startEvent = this.lastMoveEvent), L && L(this.lastMoveEvent, w);
    }, this.handlePointerMove = (w, V) => {
      this.lastMoveEvent = w, this.lastRawMoveEventInfo = V, this.lastMoveEventInfo = il(V, this.transformPagePoint), Pe.update(this.updatePoint, !0);
    }, this.handlePointerUp = (w, V) => {
      this.end();
      const { onEnd: P, onSessionEnd: B, resumeAnimation: z } = this.handlers;
      if ((this.dragSnapToOrigin || !this.startEvent) && z && z(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const G = bc(w.type === "pointercancel" ? this.lastMoveEventInfo : il(V, this.transformPagePoint), this.history);
      this.startEvent && P && P(w, G), B && B(w, G);
    }, !Nf(s))
      return;
    this.dragSnapToOrigin = m, this.handlers = o, this.transformPagePoint = r, this.distanceThreshold = f, this.contextWindow = c || window;
    const b = Ms(s), g = il(b, this.transformPagePoint), { point: v } = g, { timestamp: y } = st;
    this.history = [{ ...v, timestamp: y }];
    const { onSessionStart: N } = o;
    N && N(s, bc(g, this.history)), this.removeListeners = Bs(Es(this.contextWindow, "pointermove", this.handlePointerMove), Es(this.contextWindow, "pointerup", this.handlePointerUp), Es(this.contextWindow, "pointercancel", this.handlePointerUp)), h && this.startScrollTracking(h);
  }
  /**
   * Start tracking scroll on ancestors and window.
   */
  startScrollTracking(s) {
    let o = s.parentElement;
    for (; o; ) {
      const r = getComputedStyle(o);
      (I0.has(r.overflowX) || I0.has(r.overflowY)) && this.scrollPositions.set(o, {
        x: o.scrollLeft,
        y: o.scrollTop
      }), o = o.parentElement;
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
    const o = this.scrollPositions.get(s);
    if (!o)
      return;
    const r = s === window, c = r ? { x: window.scrollX, y: window.scrollY } : {
      x: s.scrollLeft,
      y: s.scrollTop
    }, m = { x: c.x - o.x, y: c.y - o.y };
    m.x === 0 && m.y === 0 || (r ? this.lastMoveEventInfo && (this.lastMoveEventInfo.point.x += m.x, this.lastMoveEventInfo.point.y += m.y) : this.history.length > 0 && (this.history[0].x -= m.x, this.history[0].y -= m.y), this.scrollPositions.set(s, c), Pe.update(this.updatePoint, !0));
  }
  updateHandlers(s) {
    this.handlers = s;
  }
  end() {
    this.removeListeners && this.removeListeners(), this.removeScrollListeners && this.removeScrollListeners(), this.scrollPositions.clear(), Wn(this.updatePoint);
  }
}
function il(i, s) {
  return s ? { point: s(i.point) } : i;
}
function eg(i, s) {
  return { x: i.x - s.x, y: i.y - s.y };
}
function bc({ point: i }, s) {
  return {
    point: i,
    delta: eg(i, iv(s)),
    offset: eg(i, ND(s)),
    velocity: SD(s, 0.1)
  };
}
function ND(i) {
  return i[0];
}
function iv(i) {
  return i[i.length - 1];
}
function SD(i, s) {
  if (i.length < 2)
    return { x: 0, y: 0 };
  let o = i.length - 1, r = null;
  const c = iv(i);
  for (; o >= 0 && (r = i[o], !(c.timestamp - r.timestamp > /* @__PURE__ */ yt(s))); )
    o--;
  if (!r)
    return { x: 0, y: 0 };
  r === i[0] && i.length > 2 && c.timestamp - r.timestamp > /* @__PURE__ */ yt(s) * 2 && (r = i[1]);
  const m = /* @__PURE__ */ Ht(c.timestamp - r.timestamp);
  if (m === 0)
    return { x: 0, y: 0 };
  const f = {
    x: (c.x - r.x) / m,
    y: (c.y - r.y) / m
  };
  return f.x === 1 / 0 && (f.x = 0), f.y === 1 / 0 && (f.y = 0), f;
}
function DD(i, { min: s, max: o }, r) {
  return s !== void 0 && i < s ? i = r ? Me(s, i, r.min) : Math.max(i, s) : o !== void 0 && i > o && (i = r ? Me(o, i, r.max) : Math.min(i, o)), i;
}
function tg(i, s, o) {
  return {
    min: s !== void 0 ? i.min + s : void 0,
    max: o !== void 0 ? i.max + o - (i.max - i.min) : void 0
  };
}
function ED(i, { top: s, left: o, bottom: r, right: c }) {
  return {
    x: tg(i.x, o, c),
    y: tg(i.y, s, r)
  };
}
function ng(i, s) {
  let o = s.min - i.min, r = s.max - i.max;
  return s.max - s.min < i.max - i.min && ([o, r] = [r, o]), { min: o, max: r };
}
function wD(i, s) {
  return {
    x: ng(i.x, s.x),
    y: ng(i.y, s.y)
  };
}
function TD(i, s) {
  let o = 0.5;
  const r = ft(i), c = ft(s);
  return c > r ? o = /* @__PURE__ */ ws(s.min, s.max - r, i.min) : r > c && (o = /* @__PURE__ */ ws(i.min, i.max - c, s.min)), nn(0, 1, o);
}
function VD(i, s) {
  const o = {};
  return s.min !== void 0 && (o.min = s.min - i.min), s.max !== void 0 && (o.max = s.max - i.min), o;
}
const Qc = 0.35;
function CD(i = Qc) {
  return i === !1 ? i = 0 : i === !0 && (i = Qc), {
    x: ig(i, "left", "right"),
    y: ig(i, "top", "bottom")
  };
}
function ig(i, s, o) {
  return {
    min: ag(i, s),
    max: ag(i, o)
  };
}
function ag(i, s) {
  return typeof i == "number" ? i : i[s] || 0;
}
const kD = /* @__PURE__ */ new WeakMap();
class BD {
  constructor(s) {
    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = $e(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = s;
  }
  start(s, { snapToCursor: o = !1, distanceThreshold: r } = {}) {
    const { presenceContext: c } = this.visualElement;
    if (c && c.isPresent === !1)
      return;
    const m = (y) => {
      o && this.snapToCursor(Ms(y).point), this.stopAnimation();
    }, f = (y, N) => {
      const { drag: w, dragPropagation: V, onDragStart: P } = this.getProps();
      if (w && !V && (this.openDragLock && this.openDragLock(), this.openDragLock = i2(w), !this.openDragLock))
        return;
      this.latestPointerEvent = y, this.latestPanInfo = N, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), It((z) => {
        let G = this.getAxisMotionValue(z).get() || 0;
        if (tn.test(G)) {
          const { projection: L } = this.visualElement;
          if (L && L.layout) {
            const q = L.layout.layoutBox[z];
            q && (G = ft(q) * (parseFloat(G) / 100));
          }
        }
        this.originPoint[z] = G;
      }), P && Pe.update(() => P(y, N), !1, !0), Rc(this.visualElement, "transform");
      const { animationState: B } = this.visualElement;
      B && B.setActive("whileDrag", !0);
    }, h = (y, N) => {
      this.latestPointerEvent = y, this.latestPanInfo = N;
      const { dragPropagation: w, dragDirectionLock: V, onDirectionLock: P, onDrag: B } = this.getProps();
      if (!w && !this.openDragLock)
        return;
      const { offset: z } = N;
      if (V && this.currentDirection === null) {
        this.currentDirection = jD(z), this.currentDirection !== null && P && P(this.currentDirection);
        return;
      }
      this.updateAxis("x", N.point, z), this.updateAxis("y", N.point, z), this.visualElement.render(), B && Pe.update(() => B(y, N), !1, !0);
    }, b = (y, N) => {
      this.latestPointerEvent = y, this.latestPanInfo = N, this.stop(y, N), this.latestPointerEvent = null, this.latestPanInfo = null;
    }, g = () => {
      const { dragSnapToOrigin: y } = this.getProps();
      (y || this.constraints) && this.startAnimation({ x: 0, y: 0 });
    }, { dragSnapToOrigin: v } = this.getProps();
    this.panSession = new nv(s, {
      onSessionStart: m,
      onStart: f,
      onMove: h,
      onSessionEnd: b,
      resumeAnimation: g
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: v,
      distanceThreshold: r,
      contextWindow: tv(this.visualElement),
      element: this.visualElement.current
    });
  }
  /**
   * @internal
   */
  stop(s, o) {
    const r = s || this.latestPointerEvent, c = o || this.latestPanInfo, m = this.isDragging;
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
    const { projection: s, animationState: o } = this.visualElement;
    s && (s.isAnimationBlocked = !1), this.endPanSession();
    const { dragPropagation: r } = this.getProps();
    !r && this.openDragLock && (this.openDragLock(), this.openDragLock = null), o && o.setActive("whileDrag", !1);
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
  updateAxis(s, o, r) {
    const { drag: c } = this.getProps();
    if (!r || !al(s, c, this.currentDirection))
      return;
    const m = this.getAxisMotionValue(s);
    let f = this.originPoint[s] + r[s];
    this.constraints && this.constraints[s] && (f = DD(f, this.constraints[s], this.elastic[s])), m.set(f);
  }
  resolveConstraints() {
    var m;
    const { dragConstraints: s, dragElastic: o } = this.getProps(), r = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (m = this.visualElement.projection) == null ? void 0 : m.layout, c = this.constraints;
    s && da(s) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : s && r ? this.constraints = ED(r.layoutBox, s) : this.constraints = !1, this.elastic = CD(o), c !== this.constraints && !da(s) && r && this.constraints && !this.hasMutatedConstraints && It((f) => {
      this.constraints !== !1 && this.getAxisMotionValue(f) && (this.constraints[f] = VD(r.layoutBox[f], this.constraints[f]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: s, onMeasureDragConstraints: o } = this.getProps();
    if (!s || !da(s))
      return !1;
    const r = s.current;
    Ti(r !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.", "drag-constraints-ref");
    const { projection: c } = this.visualElement;
    if (!c || !c.layout)
      return !1;
    c.root && (c.root.scroll = void 0, c.root.updateScroll());
    const m = j2(r, c.root, this.visualElement.getTransformPagePoint());
    let f = wD(c.layout.layoutBox, m);
    if (o) {
      const h = o(k2(f));
      this.hasMutatedConstraints = !!h, h && (f = Eb(h));
    }
    return f;
  }
  startAnimation(s) {
    const { drag: o, dragMomentum: r, dragElastic: c, dragTransition: m, dragSnapToOrigin: f, onDragTransitionEnd: h } = this.getProps(), b = this.constraints || {}, g = It((v) => {
      if (!al(v, o, this.currentDirection))
        return;
      let y = b && b[v] || {};
      (f === !0 || f === v) && (y = { min: 0, max: 0 });
      const N = c ? 200 : 1e6, w = c ? 40 : 1e7, V = {
        type: "inertia",
        velocity: r ? s[v] : 0,
        bounceStiffness: N,
        bounceDamping: w,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...m,
        ...y
      };
      return this.startAxisValueAnimation(v, V);
    });
    return Promise.all(g).then(h);
  }
  startAxisValueAnimation(s, o) {
    const r = this.getAxisMotionValue(s);
    return Rc(this.visualElement, s), r.start(bf(s, r, 0, o, this.visualElement, !1));
  }
  stopAnimation() {
    It((s) => this.getAxisMotionValue(s).stop());
  }
  /**
   * Drag works differently depending on which props are provided.
   *
   * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
   * - Otherwise, we apply the delta to the x/y motion values.
   */
  getAxisMotionValue(s) {
    const o = `_drag${s.toUpperCase()}`, c = this.visualElement.getProps()[o];
    return c || this.visualElement.getValue(s, this.visualElement.latestValues[s] ?? 0);
  }
  snapToCursor(s) {
    It((o) => {
      const { drag: r } = this.getProps();
      if (!al(o, r, this.currentDirection))
        return;
      const { projection: c } = this.visualElement, m = this.getAxisMotionValue(o);
      if (c && c.layout) {
        const { min: f, max: h } = c.layout.layoutBox[o], b = m.get() || 0;
        m.set(s[o] - Me(f, h, 0.5) + b);
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
    const { drag: s, dragConstraints: o } = this.getProps(), { projection: r } = this.visualElement;
    if (!da(o) || !r || !this.constraints)
      return;
    this.stopAnimation();
    const c = { x: 0, y: 0 };
    It((f) => {
      const h = this.getAxisMotionValue(f);
      if (h && this.constraints !== !1) {
        const b = h.get();
        c[f] = TD({ min: b, max: b }, this.constraints[f]);
      }
    });
    const { transformTemplate: m } = this.visualElement.getProps();
    this.visualElement.current.style.transform = m ? m({}, "") : "none", r.root && r.root.updateScroll(), r.updateLayout(), this.constraints = !1, this.resolveConstraints(), It((f) => {
      if (!al(f, s, null))
        return;
      const h = this.getAxisMotionValue(f), { min: b, max: g } = this.constraints[f];
      h.set(Me(b, g, c[f]));
    }), this.visualElement.render();
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    kD.set(this.visualElement, this);
    const s = this.visualElement.current, o = Es(s, "pointerdown", (g) => {
      const { drag: v, dragListener: y = !0 } = this.getProps(), N = g.target, w = N !== s && u2(N);
      v && y && !w && this.start(g);
    });
    let r;
    const c = () => {
      const { dragConstraints: g } = this.getProps();
      da(g) && g.current && (this.constraints = this.resolveRefConstraints(), r || (r = AD(s, g.current, () => this.scalePositionWithinConstraints())));
    }, { projection: m } = this.visualElement, f = m.addEventListener("measure", c);
    m && !m.layout && (m.root && m.root.updateScroll(), m.updateLayout()), Pe.read(c);
    const h = Cs(window, "resize", () => this.scalePositionWithinConstraints()), b = m.addEventListener("didUpdate", (({ delta: g, hasLayoutChanged: v }) => {
      this.isDragging && v && (It((y) => {
        const N = this.getAxisMotionValue(y);
        N && (this.originPoint[y] += g[y].translate, N.set(N.get() + g[y].translate));
      }), this.visualElement.render());
    }));
    return () => {
      h(), o(), f(), b && b(), r && r();
    };
  }
  getProps() {
    const s = this.visualElement.getProps(), { drag: o = !1, dragDirectionLock: r = !1, dragPropagation: c = !1, dragConstraints: m = !1, dragElastic: f = Qc, dragMomentum: h = !0 } = s;
    return {
      ...s,
      drag: o,
      dragDirectionLock: r,
      dragPropagation: c,
      dragConstraints: m,
      dragElastic: f,
      dragMomentum: h
    };
  }
}
function sg(i) {
  let s = !0;
  return () => {
    if (s) {
      s = !1;
      return;
    }
    i();
  };
}
function AD(i, s, o) {
  const r = d0(i, sg(o)), c = d0(s, sg(o));
  return () => {
    r(), c();
  };
}
function al(i, s, o) {
  return (s === !0 || s === i) && (o === null || o === i);
}
function jD(i, s = 10) {
  let o = null;
  return Math.abs(i.y) > s ? o = "y" : Math.abs(i.x) > s && (o = "x"), o;
}
class MD extends In {
  constructor(s) {
    super(s), this.removeGroupControls = qt, this.removeListeners = qt, this.controls = new BD(s);
  }
  mount() {
    const { dragControls: s } = this.node.getProps();
    s && (this.removeGroupControls = s.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || qt;
  }
  update() {
    const { dragControls: s } = this.node.getProps(), { dragControls: o } = this.node.prevProps || {};
    s !== o && (this.removeGroupControls(), s && (this.removeGroupControls = s.subscribe(this.controls)));
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners(), this.controls.isDragging || this.controls.endPanSession();
  }
}
const vc = (i) => (s, o) => {
  i && Pe.update(() => i(s, o), !1, !0);
};
class PD extends In {
  constructor() {
    super(...arguments), this.removePointerDownListener = qt;
  }
  onPointerDown(s) {
    this.session = new nv(s, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: tv(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: s, onPanStart: o, onPan: r, onPanEnd: c } = this.node.getProps();
    return {
      onSessionStart: vc(s),
      onStart: vc(o),
      onMove: vc(r),
      onEnd: (m, f) => {
        delete this.session, c && Pe.postRender(() => c(m, f));
      }
    };
  }
  mount() {
    this.removePointerDownListener = Es(this.node.current, "pointerdown", (s) => this.onPointerDown(s));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
let xc = !1;
class _D extends H.Component {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: s, layoutGroup: o, switchLayoutGroup: r, layoutId: c } = this.props, { projection: m } = s;
    m && (o.group && o.group.add(m), r && r.register && c && r.register(m), xc && m.root.didUpdate(), m.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), m.setOptions({
      ...m.options,
      layoutDependency: this.props.layoutDependency,
      onExitComplete: () => this.safeToRemove()
    })), dl.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(s) {
    const { layoutDependency: o, visualElement: r, drag: c, isPresent: m } = this.props, { projection: f } = r;
    return f && (f.isPresent = m, s.layoutDependency !== o && f.setOptions({
      ...f.options,
      layoutDependency: o
    }), xc = !0, c || s.layoutDependency !== o || o === void 0 || s.isPresent !== m ? f.willUpdate() : this.safeToRemove(), s.isPresent !== m && (m ? f.promote() : f.relegate() || Pe.postRender(() => {
      const h = f.getStack();
      (!h || !h.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { visualElement: s, layoutAnchor: o } = this.props, { projection: r } = s;
    r && (r.options.layoutAnchor = o, r.root.didUpdate(), yf.postRender(() => {
      !r.currentAnimation && r.isLead() && this.safeToRemove();
    }));
  }
  componentWillUnmount() {
    const { visualElement: s, layoutGroup: o, switchLayoutGroup: r } = this.props, { projection: c } = s;
    xc = !0, c && (c.scheduleCheckAfterUnmount(), o && o.group && o.group.remove(c), r && r.deregister && r.deregister(c));
  }
  safeToRemove() {
    const { safeToRemove: s } = this.props;
    s && s();
  }
  render() {
    return null;
  }
}
function av(i) {
  const [s, o] = Fb(), r = H.useContext(nf);
  return Dn.jsx(_D, { ...i, layoutGroup: r, switchLayoutGroup: H.useContext(Ib), isPresent: s, safeToRemove: o });
}
const zD = {
  pan: {
    Feature: PD
  },
  drag: {
    Feature: MD,
    ProjectionNode: Xb,
    MeasureLayout: av
  }
};
function og(i, s, o) {
  const { props: r } = i;
  i.animationState && r.whileHover && i.animationState.setActive("whileHover", o === "Start");
  const c = "onHover" + o, m = r[c];
  m && Pe.postRender(() => m(s, Ms(s)));
}
class RD extends In {
  mount() {
    const { current: s } = this.node;
    s && (this.unmount = s2(s, (o, r) => (og(this.node, r, "Start"), (c) => og(this.node, c, "End"))));
  }
  unmount() {
  }
}
class OD extends In {
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
    this.unmount = Bs(Cs(this.node.current, "focus", () => this.onFocus()), Cs(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
function lg(i, s, o) {
  const { props: r } = i;
  if (i.current instanceof HTMLButtonElement && i.current.disabled)
    return;
  i.animationState && r.whileTap && i.animationState.setActive("whileTap", o === "Start");
  const c = "onTap" + (o === "End" ? "" : o), m = r[c];
  m && Pe.postRender(() => m(s, Ms(s)));
}
class UD extends In {
  mount() {
    const { current: s } = this.node;
    if (!s)
      return;
    const { globalTapTarget: o, propagate: r } = this.node.props;
    this.unmount = f2(s, (c, m) => (lg(this.node, m, "Start"), (f, { success: h }) => lg(this.node, f, h ? "End" : "Cancel")), {
      useGlobalTarget: o,
      stopPropagation: (r == null ? void 0 : r.tap) === !1
    });
  }
  unmount() {
  }
}
const Zc = /* @__PURE__ */ new WeakMap(), yc = /* @__PURE__ */ new WeakMap(), LD = (i) => {
  const s = Zc.get(i.target);
  s && s(i);
}, HD = (i) => {
  i.forEach(LD);
};
function qD({ root: i, ...s }) {
  const o = i || document;
  yc.has(o) || yc.set(o, {});
  const r = yc.get(o), c = JSON.stringify(s);
  return r[c] || (r[c] = new IntersectionObserver(HD, { root: i, ...s })), r[c];
}
function GD(i, s, o) {
  const r = qD(s);
  return Zc.set(i, o), r.observe(i), () => {
    Zc.delete(i), r.unobserve(i);
  };
}
const YD = {
  some: 0,
  all: 1
};
class XD extends In {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    var b;
    (b = this.stopObserver) == null || b.call(this);
    const { viewport: s = {} } = this.node.getProps(), { root: o, margin: r, amount: c = "some", once: m } = s, f = {
      root: o ? o.current : void 0,
      rootMargin: r,
      threshold: typeof c == "number" ? c : YD[c]
    }, h = (g) => {
      const { isIntersecting: v } = g;
      if (this.isInView === v || (this.isInView = v, m && !v && this.hasEnteredView))
        return;
      v && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", v);
      const { onViewportEnter: y, onViewportLeave: N } = this.node.getProps(), w = v ? y : N;
      w && w(g);
    };
    this.stopObserver = GD(this.node.current, f, h);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: s, prevProps: o } = this.node;
    ["amount", "margin", "root"].some(FD(s, o)) && this.startObserver();
  }
  unmount() {
    var s;
    (s = this.stopObserver) == null || s.call(this), this.hasEnteredView = !1, this.isInView = !1;
  }
}
function FD({ viewport: i = {} }, { viewport: s = {} } = {}) {
  return (o) => i[o] !== s[o];
}
const QD = {
  inView: {
    Feature: XD
  },
  tap: {
    Feature: UD
  },
  focus: {
    Feature: OD
  },
  hover: {
    Feature: RD
  }
}, ZD = {
  layout: {
    ProjectionNode: Xb,
    MeasureLayout: av
  }
}, KD = {
  ...vD,
  ...QD,
  ...zD,
  ...ZD
}, Oe = /* @__PURE__ */ mD(KD, pD);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const JD = (i) => i.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), sv = (...i) => i.filter((s, o, r) => !!s && s.trim() !== "" && r.indexOf(s) === o).join(" ").trim();
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var $D = {
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
const WD = H.forwardRef(
  ({
    color: i = "currentColor",
    size: s = 24,
    strokeWidth: o = 2,
    absoluteStrokeWidth: r,
    className: c = "",
    children: m,
    iconNode: f,
    ...h
  }, b) => H.createElement(
    "svg",
    {
      ref: b,
      ...$D,
      width: s,
      height: s,
      stroke: i,
      strokeWidth: r ? Number(o) * 24 / Number(s) : o,
      className: sv("lucide", c),
      ...h
    },
    [
      ...f.map(([g, v]) => H.createElement(g, v)),
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
const Se = (i, s) => {
  const o = H.forwardRef(
    ({ className: r, ...c }, m) => H.createElement(WD, {
      ref: m,
      iconNode: s,
      className: sv(`lucide-${JD(i)}`, r),
      ...c
    })
  );
  return o.displayName = `${i}`, o;
};
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ID = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
], ga = Se("ArrowRight", ID);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const eE = [
  [
    "path",
    {
      d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
      key: "1yiouv"
    }
  ],
  ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }]
], rg = Se("Award", eE);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tE = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["path", { d: "M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8", key: "3spt84" }],
  ["path", { d: "M3 10h18", key: "8toen8" }],
  ["path", { d: "M16 19h6", key: "xwg31i" }],
  ["path", { d: "M19 16v6", key: "tddt3s" }]
], nE = Se("CalendarPlus", tE);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const iE = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
], ba = Se("Calendar", iE);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const aE = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], ov = Se("ChevronDown", aE);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sE = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], oE = Se("ChevronLeft", sE);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lE = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], lv = Se("ChevronRight", lE);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rE = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
], Nc = Se("CircleAlert", rE);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uE = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
], cE = Se("CircleCheck", uE);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fE = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }]
], ug = Se("CircleX", fE);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dE = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]
], rv = Se("Clock", dE);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mE = [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "7 10 12 15 17 10", key: "2ggqvy" }],
  ["line", { x1: "12", x2: "12", y1: "15", y2: "3", key: "1vk2je" }]
], wl = Se("Download", mE);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pE = [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
], hE = Se("ExternalLink", pE);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gE = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
], Sc = Se("FileText", gE);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bE = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }],
  ["path", { d: "M2 12h20", key: "9i4pu4" }]
], vE = Se("Globe", bE);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xE = [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }],
  ["path", { d: "M12 7v5l4 2", key: "1fdv2h" }]
], yE = Se("History", xE);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const NE = [
  ["path", { d: "m5 8 6 6", key: "1wu5hv" }],
  ["path", { d: "m4 14 6-6 2-3", key: "1k1g8d" }],
  ["path", { d: "M2 5h12", key: "or177f" }],
  ["path", { d: "M7 2h1", key: "1t2jsx" }],
  ["path", { d: "m22 22-5-10-5 10", key: "don7ne" }],
  ["path", { d: "M14 18h6", key: "1m8k6r" }]
], uv = Se("Languages", NE);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const SE = [
  [
    "path",
    {
      d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
      key: "c2jq9f"
    }
  ],
  ["rect", { width: "4", height: "12", x: "2", y: "9", key: "mk3on5" }],
  ["circle", { cx: "4", cy: "4", r: "2", key: "bt5ra8" }]
], DE = Se("Linkedin", SE);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const EE = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]], wE = Se("LoaderCircle", EE);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const TE = [
  ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" }],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }]
], VE = Se("Mail", TE);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const CE = [
  ["polyline", { points: "15 3 21 3 21 9", key: "mznyad" }],
  ["polyline", { points: "9 21 3 21 3 15", key: "1avn1i" }],
  ["line", { x1: "21", x2: "14", y1: "3", y2: "10", key: "ota7mn" }],
  ["line", { x1: "3", x2: "10", y1: "21", y2: "14", key: "1atl0r" }]
], kE = Se("Maximize2", CE);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const BE = [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }]
], AE = Se("Menu", BE);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jE = [
  ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }]
], Kc = Se("MessageSquare", jE);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ME = [
  ["polyline", { points: "4 14 10 14 10 20", key: "11kfnr" }],
  ["polyline", { points: "20 10 14 10 14 4", key: "rlmsce" }],
  ["line", { x1: "14", x2: "21", y1: "10", y2: "3", key: "o5lafz" }],
  ["line", { x1: "3", x2: "10", y1: "21", y2: "14", key: "1atl0r" }]
], PE = Se("Minimize2", ME);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _E = [
  ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
  ["path", { d: "M8 16H3v5", key: "1cv678" }]
], cv = Se("RefreshCw", _E);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zE = [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
], cg = Se("RotateCcw", zE);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const RE = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
], OE = Se("Search", RE);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const UE = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
], Jc = Se("ShieldCheck", UE);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const LE = [
  ["path", { d: "M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z", key: "hou9p0" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M16 10a4 4 0 0 1-8 0", key: "1ltviw" }]
], fg = Se("ShoppingBag", LE);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const HE = [
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
], dg = Se("Sparkles", HE);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qE = [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
], GE = Se("User", qE);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const YE = [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75", key: "1da9ce" }]
], $c = Se("Users", YE);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const XE = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], fv = Se("X", XE), jl = () => {
  const i = /* @__PURE__ */ new Date(), s = i.getFullYear(), o = String(i.getMonth() + 1).padStart(2, "0"), r = String(i.getDate()).padStart(2, "0");
  return `${s}-${o}-${r}`;
}, Ml = [
  {
    id: 22762,
    title: "Australian Student Visa Reforms &#038; International Education Changes – Part 1",
    description: `<p><span data-teams="true"><i>What Every CRICOS Provider, RTO Owners &amp; Compliance Managers Must Know</i></span></p>
<p>&nbsp;</p>
<p><strong>Topics it will cover:</strong></p>
<p>1. Student Visa Reforms 2026: Onshore vs Offshore Applications – Key Changes, Compliance Risks &amp; Implications for RTOs</p>
<p>2. Student Visa Dependants: Family Inclusion Rules, Eligibility Restrictions &amp; What Education Providers Need to Know</p>
<p>{hide_date}</p>
<p>{hide_time}</p>`,
    date: "2026-10-31",
    time: "",
    url: "https://storage.googleapis.com/chelsongordon.com/com.chelsongordon/PD%20Sessions/Thumbnails/visa%20reform%20session%20part%201.webp"
  }
], Tl = [
  {
    id: 22619,
    title: "Assessment Validation: From Risk Identification to Continuous Improvement",
    description: "Systematic review of assessment validation workflows, ensuring audit-readiness and continuous improvement across RTO delivery.",
    date: "2026-10-08",
    time: "04:00 PM AEST",
    url: "https://buy.stripe.com/6oUeVd7yRfz06GqaKNds40e"
  },
  {
    id: 22274,
    title: "Assessment Integrity – Ensuring Authenticity and Currency of Evidence",
    description: "Stay ahead of regulatory reforms, audit expectations, and risk-based regulatory trends shaping Australian vocational education and training.",
    date: "2026-09-24",
    time: "04:00 PM AEST",
    url: "https://buy.stripe.com/6oUeVd7yRfz06GqaKNds40e"
  },
  {
    id: 22273,
    title: "Assessment Confidence – Applying Validity and Sufficiency in Practice",
    description: "Master evidence sufficiency, authentic learner verification, and robust validation instruments to ensure total audit confidence.",
    date: "2026-09-16",
    time: "04:00 PM AEST",
    url: "https://buy.stripe.com/6oUeVd7yRfz06GqaKNds40e"
  },
  {
    id: 22272,
    title: "Compliant Assessment Practices – Embedding Validity and Reliability in Assessment",
    description: "Equip your assessors with the knowledge, evidence-gathering strategies, and practical tools to embed fairness, flexibility, validity, and sufficiency into daily assessment workflows.",
    date: "2026-09-04",
    time: "04:00 PM AEST",
    url: "https://buy.stripe.com/6oUeVd7yRfz06GqaKNds40e"
  },
  {
    id: 22271,
    title: "Compliant Assessment Practices – Embedding Fairness and Flexibility in Assessment",
    description: "Equipped assessors with evidence-gathering strategies and practical tools to embed fairness, flexibility, and validity into daily workflows in line with ASQA Standards.",
    date: "2026-08-28",
    time: "04:00 PM AEST",
    url: "https://buy.stripe.com/6oUeVd7yRfz06GqaKNds40e"
  }
], dv = "cg_pd_sessions_cache", FE = 300 * 1e3;
let xt = null;
const Wc = /* @__PURE__ */ new Set(), QE = () => {
  if (typeof window > "u") return null;
  try {
    const i = sessionStorage.getItem(dv);
    if (!i) return null;
    const s = JSON.parse(i);
    if (s && Array.isArray(s.data) && s.data.length > 0 && Date.now() - (s.timestamp || 0) < FE)
      return s.data;
  } catch {
  }
  return null;
};
xt = QE();
const ZE = (i, s = jl()) => {
  const o = i.description || "";
  return o.includes("{TBA_for_now}") || o.includes("{hide_date}") ? !0 : !i.date || i.date >= s;
}, KE = (i, s = jl()) => !i.date || (i.description || "").includes("{TBA_for_now}") ? !1 : i.date < s, mv = (i) => {
  const s = jl(), o = i.filter((r) => ZE(r, s)).sort((r, c) => (r.date || "").localeCompare(c.date || ""));
  return o.length > 0 ? o : Ml;
}, pv = (i) => {
  const s = jl(), o = i.filter((c) => KE(c, s)).sort((c, m) => (m.date || "").localeCompare(c.date || ""));
  return o.length === 0 ? Tl : [
    ...o,
    ...Tl.filter((c) => !o.some((m) => m.id === c.id || m.date === c.date))
  ];
}, hv = () => xt && xt.length > 0 ? xt : [...Ml, ...Tl], JE = () => xt && xt.length > 0 ? mv(xt) : Ml, $E = () => xt && xt.length > 0 ? pv(xt) : Tl, WE = (i) => (Wc.add(i), () => {
  Wc.delete(i);
});
let xs = null;
const gv = async (i = !1) => !i && xt && xt.length > 0 ? xt : xs || (xs = (async () => {
  try {
    const s = "https://chelsongordon.com/wp-json/cg/v1/pd-sessions", o = "/wp-json/cg/v1/pd-sessions", r = async (m) => {
      const f = new AbortController(), h = setTimeout(() => f.abort(), 6e3);
      try {
        const b = await fetch(m, {
          headers: { Accept: "application/json" },
          signal: f.signal
        });
        clearTimeout(h);
        const g = b.headers.get("content-type") || "";
        if (!b.ok || g.includes("text/html"))
          throw new Error(`Invalid response from ${m}`);
        const v = await b.json();
        if (Array.isArray(v) && v.length > 0)
          return v;
        throw new Error(`Empty data from ${m}`);
      } catch (b) {
        throw clearTimeout(h), b;
      }
    };
    let c;
    try {
      c = await Promise.any([r(s), r(o)]);
    } catch {
      try {
        c = await r(s);
      } catch {
        c = await r(o);
      }
    }
    if (Array.isArray(c) && c.length > 0) {
      xt = c;
      try {
        typeof window < "u" && sessionStorage.setItem(
          dv,
          JSON.stringify({ data: c, timestamp: Date.now() })
        );
      } catch {
      }
      return Wc.forEach((m) => m(c)), c;
    }
  } catch (s) {
    console.warn("Using cached / fallback sessions:", s);
  } finally {
    xs = null;
  }
  return hv();
})(), xs);
typeof window < "u" && setTimeout(() => {
  gv().catch(() => {
  });
}, 10);
Se("calendar-arrow-right", [
  ["path", { d: "M8 2v3", key: "tab-left" }],
  ["path", { d: "M16 2v3", key: "tab-right" }],
  ["path", { d: "M3 9h18", key: "cal-divider" }],
  ["path", { d: "M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6", key: "cal-frame" }],
  ["path", { d: "M13 18h8", key: "arrow-shaft" }],
  ["path", { d: "m17 14 4 4-4 4", key: "arrow-head" }]
]);
const Ni = (i) => {
  if (!i)
    return {
      isTba: !1,
      hideDate: !1,
      hideTime: !1,
      hideDescription: !1,
      firstLineHtml: "",
      remainingHtml: ""
    };
  const s = i.replace(/&#123;/gi, "{").replace(/&#125;/gi, "}").replace(/&lbrace;/gi, "{").replace(/&rbrace;/gi, "}"), o = /\{\s*TBA_for_now\s*\}/i.test(s), r = /\{\s*hide_date\s*\}/i.test(s), c = /\{\s*hide_time\s*\}/i.test(s), m = /\{\s*hide_description\s*\}/i.test(s), f = s.replace(/<\/?(?:p|div|span)[^>]*>\s*\{\s*(?:TBA_for_now|hide_date|hide_time|hide_description)\s*\}\s*<\/(?:p|div|span)>/gi, "").replace(/\{\s*(?:TBA_for_now|hide_date|hide_time|hide_description)\s*\}/gi, "").trim();
  if (m || !f)
    return {
      isTba: o,
      hideDate: r,
      hideTime: c,
      hideDescription: m,
      firstLineHtml: "",
      remainingHtml: ""
    };
  const h = /<(?:p|div|h[1-6]|li)[^>]*>([\s\S]*?)<\/(?:p|div|h[1-6]|li)>/gi;
  let b = "", g = f, v;
  for (; (v = h.exec(f)) !== null; )
    if (v[1].replace(/<[^>]*>/g, "").replace(/&nbsp;/gi, " ").trim().length > 0) {
      b = v[0].trim();
      const N = v.index + v[0].length;
      let w = f.slice(N).trim();
      w = w.replace(/^(?:\s*<(?:p|div)[^>]*>(?:\s|&nbsp;|<br\s*\/?>)*<\/(?:p|div)>\s*)+/gi, "").trim(), g = w;
      break;
    }
  if (!b) {
    const y = f.split(/(?:<br\s*\/?>|\r?\n)/i), N = y.findIndex((w) => w.replace(/<[^>]*>/g, "").trim().length > 0);
    N !== -1 ? (b = y[N].trim(), g = y.slice(N + 1).join("<br />").trim()) : (b = "", g = f);
  }
  return {
    isTba: o,
    hideDate: r,
    hideTime: c,
    hideDescription: m,
    firstLineHtml: b,
    remainingHtml: g
  };
}, IE = (i) => {
  if (!i) return "";
  try {
    const s = i.split("-");
    if (s.length === 3) {
      const o = parseInt(s[0], 10), r = parseInt(s[1], 10) - 1, c = parseInt(s[2], 10), m = new Date(o, r, c);
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
}, e5 = () => {
  var L;
  const [i, s] = H.useState(""), [o, r] = H.useState(""), [c, m] = H.useState(!1), [f, h] = H.useState(null), [b, g] = H.useState(null), [v, y] = H.useState(null), [N, w] = H.useState("a4-portrait"), [V, P] = H.useState(!1);
  H.useEffect(() => {
    const q = (F) => {
      F.key === "Escape" && V && P(!1);
    };
    return window.addEventListener("keydown", q), () => window.removeEventListener("keydown", q);
  }, [V]);
  const B = async (q) => {
    if (q.preventDefault(), c) return;
    h(null), g(null);
    const F = i.trim(), W = o.trim();
    if (!F || !W) {
      h("Please enter both your Full Name and Certificate ID.");
      return;
    }
    m(!0), y(null);
    const Q = `certificate_id=${encodeURIComponent(W)}&full_name=${encodeURIComponent(F)}`;
    try {
      let X = null;
      try {
        const J = await fetch(`/wp-json/certificates/v1/verify?${Q}`, {
          method: "GET",
          headers: {
            Accept: "application/json"
          }
        });
        (J.headers.get("content-type") || "").includes("application/json") && (X = await J.json());
      } catch (J) {
        console.warn("Relative verification request failed, trying remote fallback:", J);
      }
      if (!X) {
        const J = await fetch(`https://chelsongordon.com/wp-json/certificates/v1/verify?${Q}`, {
          method: "GET",
          headers: {
            Accept: "application/json"
          }
        });
        if ((J.headers.get("content-type") || "").includes("application/json"))
          X = await J.json();
        else
          throw new Error("Received non-JSON response from verification server");
      }
      X && X.verified && X.certificate ? y({
        verified: !0,
        certificate: X.certificate
      }) : y({
        verified: !1,
        message: (X == null ? void 0 : X.message) || "No matching certificate was found for the provided details."
      });
    } catch (X) {
      console.error("Certificate verification request failed:", X), g("Unable to connect to the verification server. Please check your network connection and try again.");
    } finally {
      m(!1);
    }
  }, z = () => {
    s(""), r(""), h(null), g(null), y(null);
  }, G = (q) => {
    const F = (q || "").toLowerCase();
    return F === "valid" ? /* @__PURE__ */ p.jsxDEV("span", { className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-200/80", children: [
      /* @__PURE__ */ p.jsxDEV(cE, { className: "w-3.5 h-3.5 text-emerald-600 shrink-0" }, void 0, !1, {
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
    }, void 0) : F === "revoked" ? /* @__PURE__ */ p.jsxDEV("span", { className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-rose-100 text-rose-800 border border-rose-200/80", children: [
      /* @__PURE__ */ p.jsxDEV(ug, { className: "w-3.5 h-3.5 text-rose-600 shrink-0" }, void 0, !1, {
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
    }, void 0) : F === "expired" ? /* @__PURE__ */ p.jsxDEV("span", { className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800 border border-amber-200/80", children: [
      /* @__PURE__ */ p.jsxDEV(Nc, { className: "w-3.5 h-3.5 text-amber-600 shrink-0" }, void 0, !1, {
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
      /* @__PURE__ */ p.jsxDEV(Jc, { className: "w-3.5 h-3.5 text-slate-500 shrink-0" }, void 0, !1, {
        fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
        lineNumber: 203,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ p.jsxDEV("span", { className: "capitalize", children: q }, void 0, !1, {
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
            /* @__PURE__ */ p.jsxDEV(Jc, { className: "w-3.5 h-3.5 text-[#0072CE]" }, void 0, !1, {
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
        /* @__PURE__ */ p.jsxDEV("form", { onSubmit: B, className: "relative z-10", children: [
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
                /* @__PURE__ */ p.jsxDEV("div", { className: "absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400", children: /* @__PURE__ */ p.jsxDEV(GE, { className: "w-4 h-4" }, void 0, !1, {
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
                    onChange: (q) => {
                      s(q.target.value), f && h(null);
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
                /* @__PURE__ */ p.jsxDEV("div", { className: "absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400", children: /* @__PURE__ */ p.jsxDEV(rg, { className: "w-4 h-4" }, void 0, !1, {
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
                    value: o,
                    onChange: (q) => {
                      r(q.target.value), f && h(null);
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
                  /* @__PURE__ */ p.jsxDEV(wE, { className: "w-4 h-4 animate-spin text-[#042F61]" }, void 0, !1, {
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
                  /* @__PURE__ */ p.jsxDEV(OE, { className: "w-4 h-4 transition-transform duration-200 group-hover:scale-110" }, void 0, !1, {
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
            /* @__PURE__ */ p.jsxDEV(Nc, { className: "w-4 h-4 text-amber-600 shrink-0" }, void 0, !1, {
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
          b && /* @__PURE__ */ p.jsxDEV("div", { className: "mt-3.5 p-3 rounded-xl bg-rose-50 border border-rose-200/80 text-rose-800 text-xs font-semibold flex items-center gap-2 animate-fadeIn", children: [
            /* @__PURE__ */ p.jsxDEV(Nc, { className: "w-4 h-4 text-rose-600 shrink-0" }, void 0, !1, {
              fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
              lineNumber: 326,
              columnNumber: 13
            }, void 0),
            /* @__PURE__ */ p.jsxDEV("span", { children: b }, void 0, !1, {
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
        v && /* @__PURE__ */ p.jsxDEV("div", { className: "mt-8 pt-7 border-t border-slate-100 relative z-10", children: v.verified && v.certificate ? (
          /* Successful Verification Result */
          /* @__PURE__ */ p.jsxDEV("div", { className: "space-y-6", children: [
            /* @__PURE__ */ p.jsxDEV("div", { className: "bg-[#E1EFFB]/70 border border-[#B8DCF8] rounded-2xl p-5 sm:p-6 relative overflow-hidden", children: [
              /* @__PURE__ */ p.jsxDEV("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4", children: [
                /* @__PURE__ */ p.jsxDEV("div", { className: "flex items-start gap-3.5", children: [
                  /* @__PURE__ */ p.jsxDEV("div", { className: "w-10 h-10 rounded-xl bg-[#0072CE] text-white flex items-center justify-center shrink-0 shadow-sm mt-0.5", children: /* @__PURE__ */ p.jsxDEV(rg, { className: "w-5 h-5" }, void 0, !1, {
                    fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                    lineNumber: 344,
                    columnNumber: 23
                  }, void 0) }, void 0, !1, {
                    fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                    lineNumber: 343,
                    columnNumber: 21
                  }, void 0),
                  /* @__PURE__ */ p.jsxDEV("div", { children: [
                    /* @__PURE__ */ p.jsxDEV("div", { className: "flex items-center gap-2.5 flex-wrap", children: G(v.certificate.status) }, void 0, !1, {
                      fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                      lineNumber: 347,
                      columnNumber: 23
                    }, void 0),
                    /* @__PURE__ */ p.jsxDEV("h3", { className: "text-xl sm:text-2xl font-black text-[#042F61] tracking-tight mt-1", children: v.certificate.full_name }, void 0, !1, {
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
                    onClick: z,
                    className: "inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-[#042F61] bg-white border border-slate-200 hover:border-[#0072CE] hover:text-[#0072CE] shadow-xs transition-colors self-start sm:self-center cursor-pointer",
                    children: [
                      /* @__PURE__ */ p.jsxDEV(cg, { className: "w-3.5 h-3.5" }, void 0, !1, {
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
                  /* @__PURE__ */ p.jsxDEV("span", { className: "text-xs sm:text-sm font-black text-[#042F61] font-mono mt-0.5 block truncate", children: v.certificate.certificate_id }, void 0, !1, {
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
                    /* @__PURE__ */ p.jsxDEV(ba, { className: "w-3.5 h-3.5 text-[#0072CE] shrink-0" }, void 0, !1, {
                      fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                      lineNumber: 382,
                      columnNumber: 23
                    }, void 0),
                    /* @__PURE__ */ p.jsxDEV("span", { className: "truncate", children: IE(v.certificate.issue_date) }, void 0, !1, {
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
                  /* @__PURE__ */ p.jsxDEV("span", { className: "text-xs sm:text-sm font-bold text-[#042F61] mt-0.5 block truncate", title: v.certificate.session_name, children: v.certificate.session_name }, void 0, !1, {
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
                  /* @__PURE__ */ p.jsxDEV("div", { className: "w-7 h-7 rounded-lg bg-[#0072CE]/10 flex items-center justify-center text-[#0072CE]", children: /* @__PURE__ */ p.jsxDEV(Sc, { className: "w-4 h-4" }, void 0, !1, {
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
                v.certificate.certificate_url && /* @__PURE__ */ p.jsxDEV("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ p.jsxDEV(
                    "a",
                    {
                      href: v.certificate.certificate_url,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      download: !0,
                      className: "inline-flex items-center justify-center gap-1.5 bg-[#0072CE] hover:bg-[#042F61] text-white text-xs font-bold py-2.5 px-4 rounded-xl shadow-xs transition-colors",
                      children: [
                        /* @__PURE__ */ p.jsxDEV(wl, { className: "w-3.5 h-3.5" }, void 0, !1, {
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
                      href: v.certificate.certificate_url,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "inline-flex items-center justify-center gap-1.5 bg-white hover:bg-slate-100 text-[#042F61] border border-slate-300 text-xs font-bold py-2.5 px-3.5 rounded-xl shadow-xs transition-colors",
                      title: "Open Certificate in new tab",
                      children: [
                        /* @__PURE__ */ p.jsxDEV(hE, { className: "w-3.5 h-3.5" }, void 0, !1, {
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
              v.certificate.certificate_url && /* @__PURE__ */ p.jsxDEV("div", { className: "flex flex-wrap items-center justify-between gap-3 mb-3.5 pb-3 border-b border-slate-200/80", children: [
                /* @__PURE__ */ p.jsxDEV("div", { className: "flex items-center gap-1 bg-slate-200/70 p-1 rounded-xl", children: [
                  /* @__PURE__ */ p.jsxDEV(
                    "button",
                    {
                      type: "button",
                      onClick: () => w("a4-portrait"),
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
                      onClick: () => w("a4-landscape"),
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
                      onClick: () => w("dynamic"),
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
                    onClick: () => P(!0),
                    className: "inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold text-[#042F61] bg-white border border-slate-200 hover:border-[#0072CE] hover:text-[#0072CE] shadow-xs transition-colors cursor-pointer",
                    title: "Expand to Fullscreen A4 view",
                    children: [
                      /* @__PURE__ */ p.jsxDEV(kE, { className: "w-3.5 h-3.5" }, void 0, !1, {
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
              v.certificate.certificate_url ? /* @__PURE__ */ p.jsxDEV(
                "div",
                {
                  className: `relative rounded-xl overflow-hidden border border-slate-200 bg-white shadow-inner transition-all duration-300 ${N === "a4-portrait" ? "w-full max-w-[720px] aspect-[1/1.414] min-h-[580px] mx-auto" : N === "a4-landscape" ? "w-full aspect-[1.414/1] min-h-[460px] max-h-[85vh] mx-auto" : "w-full h-[78vh] min-h-[640px] sm:min-h-[750px] lg:min-h-[880px] max-h-[1100px]"}`,
                  children: /* @__PURE__ */ p.jsxDEV(
                    "iframe",
                    {
                      src: `${v.certificate.certificate_url}#view=Fit&toolbar=1&navpanes=0`,
                      className: "w-full h-full border-none",
                      title: `Official Certificate for ${v.certificate.full_name}`
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
                /* @__PURE__ */ p.jsxDEV(Sc, { className: "w-8 h-8 text-slate-400 mx-auto mb-2" }, void 0, !1, {
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
            V && ((L = v == null ? void 0 : v.certificate) == null ? void 0 : L.certificate_url) && /* @__PURE__ */ p.jsxDEV("div", { className: "fixed inset-0 z-50 bg-[#042F61]/90 backdrop-blur-md p-3 sm:p-6 flex flex-col", children: [
              /* @__PURE__ */ p.jsxDEV("div", { className: "flex items-center justify-between mb-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-2.5 text-white", children: [
                /* @__PURE__ */ p.jsxDEV("div", { className: "flex items-center gap-2.5 truncate mr-3", children: [
                  /* @__PURE__ */ p.jsxDEV(Sc, { className: "w-4 h-4 text-[#FDB913] shrink-0" }, void 0, !1, {
                    fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                    lineNumber: 525,
                    columnNumber: 23
                  }, void 0),
                  /* @__PURE__ */ p.jsxDEV("span", { className: "text-sm font-bold truncate", children: [
                    "Certificate: ",
                    v.certificate.full_name,
                    " (",
                    v.certificate.certificate_id,
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
                      href: v.certificate.certificate_url,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      download: !0,
                      className: "inline-flex items-center gap-1.5 bg-[#0072CE] hover:bg-[#005bb5] text-white text-xs font-bold py-1.5 px-3 rounded-lg transition-colors",
                      children: [
                        /* @__PURE__ */ p.jsxDEV(wl, { className: "w-3.5 h-3.5" }, void 0, !1, {
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
                      onClick: () => P(!1),
                      className: "inline-flex items-center gap-1.5 bg-white/20 hover:bg-white/30 text-white text-xs font-bold py-1.5 px-3 rounded-lg transition-colors cursor-pointer",
                      children: [
                        /* @__PURE__ */ p.jsxDEV(PE, { className: "w-3.5 h-3.5" }, void 0, !1, {
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
                  src: `${v.certificate.certificate_url}#view=Fit&toolbar=1`,
                  className: "w-full h-full border-none",
                  title: `Official Certificate for ${v.certificate.full_name} (Fullscreen)`
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
              /* @__PURE__ */ p.jsxDEV("div", { className: "w-10 h-10 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center shrink-0 mt-0.5", children: /* @__PURE__ */ p.jsxDEV(ug, { className: "w-5 h-5" }, void 0, !1, {
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
                /* @__PURE__ */ p.jsxDEV("p", { className: "text-xs sm:text-sm text-rose-800 mt-1 leading-relaxed max-w-xl", children: v.message || "No certificate record was found matching the provided Certificate ID and Full Name. Please confirm the details on the issued document." }, void 0, !1, {
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
                onClick: z,
                className: "inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-rose-900 bg-white border border-rose-200 hover:bg-rose-50 shadow-xs transition-colors shrink-0 cursor-pointer",
                children: [
                  /* @__PURE__ */ p.jsxDEV(cg, { className: "w-3.5 h-3.5" }, void 0, !1, {
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
}, Vi = (i) => {
  if (!i) return "";
  try {
    return new DOMParser().parseFromString(i, "text/html").body.textContent || i;
  } catch {
    return i.replace(/&#8211;/g, "–").replace(/&#8212;/g, "—").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#039;/g, "'");
  }
}, ml = (i) => {
  if (!i) return "";
  try {
    const s = i.split("-");
    if (s.length === 3) {
      const o = parseInt(s[0], 10), r = parseInt(s[1], 10) - 1, c = parseInt(s[2], 10), m = new Date(o, r, c);
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
}, mg = (i) => {
  const s = Vi(i), o = s.match(/^(.*?)\s*[-–—]\s*(.*)$/);
  if (o) {
    const r = o[1].trim(), c = o[2].trim();
    return /* @__PURE__ */ p.jsxDEV("div", { className: "font-sans leading-snug", children: [
      /* @__PURE__ */ p.jsxDEV("span", { className: "text-xs sm:text-[13px] font-bold text-white group-hover:text-[#FDB913] transition-colors block leading-tight", children: r }, void 0, !1, {
        fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
        lineNumber: 107,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ p.jsxDEV("span", { className: "text-[11px] sm:text-xs font-medium text-sky-100/90 group-hover:text-white transition-colors block mt-0.5 leading-snug", children: c }, void 0, !1, {
        fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
        lineNumber: 110,
        columnNumber: 9
      }, void 0)
    ] }, void 0, !0, {
      fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
      lineNumber: 106,
      columnNumber: 7
    }, void 0);
  }
  return /* @__PURE__ */ p.jsxDEV("div", { className: "font-sans leading-snug", children: /* @__PURE__ */ p.jsxDEV("span", { className: "text-xs sm:text-[13px] font-bold text-white group-hover:text-[#FDB913] transition-colors block leading-tight", children: s }, void 0, !1, {
    fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
    lineNumber: 119,
    columnNumber: 7
  }, void 0) }, void 0, !1, {
    fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
    lineNumber: 118,
    columnNumber: 5
  }, void 0);
}, t5 = Ml, pg = {
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
}, n5 = (i) => {
  if (i.id && pg[i.id])
    return pg[i.id];
  const s = Vi(i.title || "").toLowerCase(), o = i.description && i.description.trim().length > 15 ? Vi(i.description) : "";
  return s.includes("validity") || s.includes("reliability") ? {
    thumbnail: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    description: o || "Equip your assessors with the knowledge, evidence-gathering strategies, and practical tools to embed fairness, flexibility, validity, and sufficiency into daily assessment workflows in line with ASQA Standards."
  } : s.includes("confidence") || s.includes("sufficiency") ? {
    thumbnail: "https://images.unsplash.com/photo-1738566061961-4e20e3bf470d?auto=format&fit=crop&w=800&q=80",
    description: o || "Master evidence sufficiency, authentic learner verification, and robust validation instruments to ensure total audit confidence and defensible assessor judgments."
  } : s.includes("integrity") || s.includes("authenticity") || s.includes("currency") ? {
    thumbnail: "https://images.unsplash.com/photo-1631557776808-91908aba7ca0?auto=format&fit=crop&w=800&q=80",
    description: o || "Establish rigorous safeguards against plagiarism and emerging AI misuse while mastering authentic evidence verification and workplace supervisor validation under ASQA standards."
  } : s.includes("presentation") || s.includes("experience") || s.includes("engaging") ? {
    thumbnail: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80",
    description: o || "Transform static training materials into immersive, interactive learning journeys with modern presentation frameworks tailored for high adult learner engagement and retention."
  } : s.includes("learner guide") || s.includes("designing") || s.includes("materials") ? {
    thumbnail: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80",
    description: o || "Learn systematic development methodologies for student learning materials that elevate assessor delivery, streamline learner progression, and ensure full compliance with packaging rules."
  } : s.includes("visa") || s.includes("international") || s.includes("cricos") ? {
    thumbnail: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
    description: o || "Comprehensive masterclass on Australian student visa reforms, international education compliance, and regulatory risk management for CRICOS providers and RTO leaders."
  } : s.includes("fairness") || s.includes("flexibility") || s.includes("adjustment") ? {
    thumbnail: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80",
    description: o || "Unpack practical methods for implementing reasonable adjustments, supportive learner accommodations, and culturally responsive assessment practices without compromising competency standards."
  } : s.includes("regulatory") || s.includes("standards") || s.includes("compliance") ? {
    thumbnail: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
    description: o || "Unpack regulatory reforms, upcoming Standards for RTOs revisions, and risk-based compliance methodologies shaping modern Australian RTO governance."
  } : s.includes("rpl") || s.includes("prior learning") || s.includes("conversation") ? {
    thumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    description: o || "Advanced masterclass on streamlining Recognition of Prior Learning workflows with structured competency interview techniques and authentic prior work portfolio evaluations."
  } : s.includes("validation") || s.includes("workflow") || s.includes("sampling") ? {
    thumbnail: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80",
    description: o || "Step-by-step guidance on establishing statistically valid sampling formulas, collaborative moderation panels, and continuous improvement validation logs across RTO faculties."
  } : s.includes("tas") || s.includes("strategy") ? {
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    description: o || "Comprehensive blueprint for structuring compliant TAS documents reflecting real learner cohorts, volume of learning calculations, and delivery modes ready for audit scrutiny."
  } : {
    thumbnail: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
    description: o || "Join an interactive professional development masterclass where compliance rigour and practical training unite to build confidence, resilience, and fair assessment outcomes in line with ASQA Standards."
  };
}, Dc = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80", hg = (i) => {
  if (!i || typeof i != "string") return !0;
  const s = i.trim().toLowerCase();
  return !!(!s.startsWith("http://") && !s.startsWith("https://") || s.includes("stripe.com") || s.includes("paypal.com") || s.includes("checkout") || s.includes("mailto:"));
}, gg = ({
  session: i,
  isCenter: s,
  isSpacer: o = !1,
  onCardClick: r,
  scrollToGravityFormMount: c
}) => {
  const [m, f] = H.useState(!1);
  H.useEffect(() => {
    const N = () => f(window.innerWidth >= 640);
    return N(), window.addEventListener("resize", N), () => window.removeEventListener("resize", N);
  }, []);
  const h = n5(i), b = H.useMemo(() => h.thumbnail || Dc, [h.thumbnail]), [g, v] = H.useState(() => {
    var w;
    const N = (w = i.url) == null ? void 0 : w.trim();
    return N && !hg(N) ? N : b;
  });
  H.useEffect(() => {
    var w;
    const N = (w = i.url) == null ? void 0 : w.trim();
    N && !hg(N) ? v(N) : v(b);
  }, [i.url, b]);
  const y = s && m ? {
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
            style: y,
            className: "w-full h-full bg-gradient-to-br from-[#CDE4F9] via-[#E2F0FD] to-[#BEE0F8] border border-white/80 rounded-[24px] sm:rounded-[26px] p-4 sm:p-6 lg:p-7 xl:p-8 relative overflow-hidden flex flex-col justify-between shadow-[0_10px_28px_rgba(4,47,97,0.07)]",
            children: [
              /* @__PURE__ */ p.jsxDEV("div", { className: "absolute -left-12 -top-12 w-80 sm:w-96 h-80 sm:h-96 bg-[#0072CE]/18 rounded-full blur-3xl pointer-events-none" }, void 0, !1, {
                fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                lineNumber: 404,
                columnNumber: 9
              }, void 0),
              /* @__PURE__ */ p.jsxDEV("div", { className: "absolute left-40 top-20 w-72 h-72 bg-[#FDB913]/20 rounded-full blur-2xl pointer-events-none" }, void 0, !1, {
                fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                lineNumber: 405,
                columnNumber: 9
              }, void 0),
              /* @__PURE__ */ p.jsxDEV("div", { className: "absolute -right-20 -bottom-20 w-96 h-96 bg-[#0072CE]/16 rounded-full blur-3xl pointer-events-none" }, void 0, !1, {
                fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                lineNumber: 406,
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
                        lineNumber: 419,
                        columnNumber: 17
                      }, void 0)
                    },
                    void 0,
                    !1,
                    {
                      fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                      lineNumber: 415,
                      columnNumber: 15
                    },
                    void 0
                  ),
                  /* @__PURE__ */ p.jsxDEV("div", { className: "relative w-full h-full rounded-[22px] overflow-hidden border-2 border-white/80 shadow-[0_12px_28px_rgba(4,47,97,0.12)] bg-gradient-to-b from-white/90 via-sky-50 to-[#EAF3FA]", children: [
                    /* @__PURE__ */ p.jsxDEV(
                      "img",
                      {
                        src: g,
                        alt: Vi(i.title),
                        onError: () => {
                          g !== b ? v(b) : g !== Dc && v(Dc);
                        },
                        className: "w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700",
                        loading: "eager",
                        referrerPolicy: "no-referrer"
                      },
                      void 0,
                      !1,
                      {
                        fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                        lineNumber: 423,
                        columnNumber: 17
                      },
                      void 0
                    ),
                    s && /* @__PURE__ */ p.jsxDEV("div", { className: "absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md py-1.5 px-3 rounded-xl border border-slate-200/80 shadow-md flex items-center justify-between", children: /* @__PURE__ */ p.jsxDEV("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ p.jsxDEV("span", { className: "relative flex h-2 w-2", children: [
                        /* @__PURE__ */ p.jsxDEV("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0072CE] opacity-75" }, void 0, !1, {
                          fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                          lineNumber: 444,
                          columnNumber: 25
                        }, void 0),
                        /* @__PURE__ */ p.jsxDEV("span", { className: "relative inline-flex rounded-full h-2 w-2 bg-[#0072CE]" }, void 0, !1, {
                          fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                          lineNumber: 445,
                          columnNumber: 25
                        }, void 0)
                      ] }, void 0, !0, {
                        fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                        lineNumber: 443,
                        columnNumber: 23
                      }, void 0),
                      /* @__PURE__ */ p.jsxDEV("span", { className: "text-[10.5px] font-bold text-[#042F61] uppercase tracking-wider", children: "Live & Interactive" }, void 0, !1, {
                        fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                        lineNumber: 447,
                        columnNumber: 23
                      }, void 0)
                    ] }, void 0, !0, {
                      fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                      lineNumber: 442,
                      columnNumber: 21
                    }, void 0) }, void 0, !1, {
                      fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                      lineNumber: 441,
                      columnNumber: 19
                    }, void 0)
                  ] }, void 0, !0, {
                    fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                    lineNumber: 422,
                    columnNumber: 15
                  }, void 0)
                ] }, void 0, !0, {
                  fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                  lineNumber: 412,
                  columnNumber: 13
                }, void 0) }, void 0, !1, {
                  fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                  lineNumber: 411,
                  columnNumber: 11
                }, void 0),
                /* @__PURE__ */ p.jsxDEV("div", { className: "lg:col-span-7 flex flex-col justify-between h-full space-y-4 sm:space-y-5 sm:pr-6 lg:pr-10", children: /* @__PURE__ */ p.jsxDEV("div", { className: "space-y-3 sm:space-y-3.5", children: [
                  /* @__PURE__ */ p.jsxDEV("div", { className: "flex items-center", children: /* @__PURE__ */ p.jsxDEV("div", { className: "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/85 border border-[#0072CE]/20 text-[#0072CE] text-xs font-bold tracking-wider uppercase shadow-xs", children: [
                    /* @__PURE__ */ p.jsxDEV("span", { className: "inline-flex items-center text-[#0072CE]", children: [
                      /* @__PURE__ */ p.jsxDEV(ba, { className: "w-3.5 h-3.5" }, void 0, !1, {
                        fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                        lineNumber: 463,
                        columnNumber: 21
                      }, void 0),
                      /* @__PURE__ */ p.jsxDEV(ga, { className: "w-2.5 h-2.5 -ml-0.5" }, void 0, !1, {
                        fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                        lineNumber: 464,
                        columnNumber: 21
                      }, void 0)
                    ] }, void 0, !0, {
                      fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                      lineNumber: 462,
                      columnNumber: 19
                    }, void 0),
                    /* @__PURE__ */ p.jsxDEV("span", { children: "UPCOMING SESSIONS" }, void 0, !1, {
                      fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                      lineNumber: 466,
                      columnNumber: 19
                    }, void 0)
                  ] }, void 0, !0, {
                    fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                    lineNumber: 461,
                    columnNumber: 17
                  }, void 0) }, void 0, !1, {
                    fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                    lineNumber: 460,
                    columnNumber: 15
                  }, void 0),
                  /* @__PURE__ */ p.jsxDEV(
                    "h1",
                    {
                      className: "text-[18px] font-bold text-[#042F61] tracking-tight leading-[1.3] font-sans transition-all line-clamp-2",
                      style: { fontSize: "18px", fontWeight: 700 },
                      children: Vi(i.title)
                    },
                    void 0,
                    !1,
                    {
                      fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                      lineNumber: 471,
                      columnNumber: 15
                    },
                    void 0
                  ),
                  (() => {
                    const N = Ni(i.description);
                    if (N.hideDescription)
                      return /* @__PURE__ */ p.jsxDEV(
                        "p",
                        {
                          className: "text-sm sm:text-base text-slate-500 leading-relaxed font-normal max-w-2xl italic font-sans",
                          style: { fontSize: "14px" },
                          children: "Session details will be announced soon."
                        },
                        void 0,
                        !1,
                        {
                          fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                          lineNumber: 483,
                          columnNumber: 21
                        },
                        void 0
                      );
                    const w = !!(N.firstLineHtml && N.firstLineHtml.trim().length > 0), V = !!(N.remainingHtml && N.remainingHtml.trim().length > 0);
                    return w || V ? /* @__PURE__ */ p.jsxDEV("div", { className: "space-y-1.5 sm:space-y-2 max-w-2xl", children: [
                      w && /* @__PURE__ */ p.jsxDEV(
                        "div",
                        {
                          className: "text-slate-600 font-sans text-sm sm:text-[15px] leading-relaxed [&>p]:mb-0 [&>p]:leading-relaxed",
                          style: { fontSize: "14px" },
                          dangerouslySetInnerHTML: { __html: N.firstLineHtml }
                        },
                        void 0,
                        !1,
                        {
                          fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                          lineNumber: 499,
                          columnNumber: 25
                        },
                        void 0
                      ),
                      V && /* @__PURE__ */ p.jsxDEV(
                        "div",
                        {
                          className: "text-slate-600 font-sans text-sm leading-relaxed max-w-none [&>p]:mb-1.5 [&>p:last-child]:mb-0 [&>ul]:list-disc [&>ul]:pl-5 [&>ol]:list-decimal [&>ol]:pl-5",
                          style: { fontSize: "14px" },
                          dangerouslySetInnerHTML: { __html: N.remainingHtml }
                        },
                        void 0,
                        !1,
                        {
                          fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                          lineNumber: 506,
                          columnNumber: 25
                        },
                        void 0
                      )
                    ] }, void 0, !0, {
                      fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                      lineNumber: 497,
                      columnNumber: 21
                    }, void 0) : /* @__PURE__ */ p.jsxDEV(
                      "p",
                      {
                        className: "text-sm sm:text-base text-slate-700 leading-relaxed font-normal max-w-2xl font-sans",
                        style: { fontSize: "14px" },
                        children: h.description
                      },
                      void 0,
                      !1,
                      {
                        fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                        lineNumber: 517,
                        columnNumber: 19
                      },
                      void 0
                    );
                  })()
                ] }, void 0, !0, {
                  fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                  lineNumber: 458,
                  columnNumber: 13
                }, void 0) }, void 0, !1, {
                  fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                  lineNumber: 456,
                  columnNumber: 11
                }, void 0)
              ] }, void 0, !0, {
                fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                lineNumber: 408,
                columnNumber: 9
              }, void 0),
              (() => {
                const N = Ni(i.description), w = N.hideDate && N.hideTime, V = !!i.date, P = !!i.time, B = !w && !N.hideDate && (V || N.isTba), z = !w && !N.hideTime && (P || N.isTba), G = 1 + (B ? 1 : 0) + (z ? 1 : 0), L = G === 3 ? "grid-cols-3" : G === 2 ? "grid-cols-2" : "grid-cols-1";
                return /* @__PURE__ */ p.jsxDEV("div", { className: `relative z-10 mt-4 sm:mt-5 w-full ${s ? "sm:max-w-[calc(100%-245px)] lg:max-w-[calc(100%-230px)]" : ""}`, children: [
                  /* @__PURE__ */ p.jsxDEV("div", { className: `grid ${L} gap-2 sm:gap-2.5`, children: [
                    /* @__PURE__ */ p.jsxDEV("div", { className: "bg-white/85 backdrop-blur-sm rounded-xl p-2 sm:p-2.5 border border-slate-200/70 shadow-xs", children: [
                      /* @__PURE__ */ p.jsxDEV("span", { className: "text-[9.5px] uppercase font-bold text-slate-400 block tracking-wider", children: "Mode" }, void 0, !1, {
                        fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                        lineNumber: 553,
                        columnNumber: 19
                      }, void 0),
                      /* @__PURE__ */ p.jsxDEV("span", { className: "text-xs sm:text-[13px] font-bold text-[#042F61] flex items-center gap-1.5 mt-0.5", children: [
                        /* @__PURE__ */ p.jsxDEV(vE, { className: "w-3.5 h-3.5 text-[#0072CE] shrink-0" }, void 0, !1, {
                          fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                          lineNumber: 555,
                          columnNumber: 21
                        }, void 0),
                        /* @__PURE__ */ p.jsxDEV("span", { className: "truncate", children: "Online Session" }, void 0, !1, {
                          fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                          lineNumber: 556,
                          columnNumber: 21
                        }, void 0)
                      ] }, void 0, !0, {
                        fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                        lineNumber: 554,
                        columnNumber: 19
                      }, void 0)
                    ] }, void 0, !0, {
                      fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                      lineNumber: 552,
                      columnNumber: 17
                    }, void 0),
                    B && /* @__PURE__ */ p.jsxDEV("div", { className: "bg-white/85 backdrop-blur-sm rounded-xl p-2 sm:p-2.5 border border-slate-200/70 shadow-xs", children: [
                      /* @__PURE__ */ p.jsxDEV("span", { className: "text-[9.5px] uppercase font-bold text-slate-400 block tracking-wider", children: "Session Date" }, void 0, !1, {
                        fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                        lineNumber: 562,
                        columnNumber: 21
                      }, void 0),
                      /* @__PURE__ */ p.jsxDEV("span", { className: "text-xs sm:text-[13px] font-bold text-[#042F61] flex items-center gap-1.5 mt-0.5", children: [
                        /* @__PURE__ */ p.jsxDEV(ba, { className: "w-3.5 h-3.5 text-[#0072CE] shrink-0" }, void 0, !1, {
                          fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                          lineNumber: 564,
                          columnNumber: 23
                        }, void 0),
                        /* @__PURE__ */ p.jsxDEV("span", { className: "truncate", children: i.date ? ml(i.date) : "TBA" }, void 0, !1, {
                          fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                          lineNumber: 565,
                          columnNumber: 23
                        }, void 0)
                      ] }, void 0, !0, {
                        fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                        lineNumber: 563,
                        columnNumber: 21
                      }, void 0)
                    ] }, void 0, !0, {
                      fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                      lineNumber: 561,
                      columnNumber: 19
                    }, void 0),
                    z && /* @__PURE__ */ p.jsxDEV("div", { className: "bg-white/85 backdrop-blur-sm rounded-xl p-2 sm:p-2.5 border border-slate-200/70 shadow-xs", children: [
                      /* @__PURE__ */ p.jsxDEV("span", { className: "text-[9.5px] uppercase font-bold text-slate-400 block tracking-wider", children: "Session Time" }, void 0, !1, {
                        fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                        lineNumber: 572,
                        columnNumber: 21
                      }, void 0),
                      /* @__PURE__ */ p.jsxDEV("span", { className: "text-xs sm:text-[13px] font-bold text-[#042F61] flex items-center gap-1.5 mt-0.5", children: [
                        /* @__PURE__ */ p.jsxDEV(rv, { className: "w-3.5 h-3.5 text-[#0072CE] shrink-0" }, void 0, !1, {
                          fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                          lineNumber: 574,
                          columnNumber: 23
                        }, void 0),
                        /* @__PURE__ */ p.jsxDEV("span", { className: "truncate", children: i.time || "TBA" }, void 0, !1, {
                          fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                          lineNumber: 575,
                          columnNumber: 23
                        }, void 0)
                      ] }, void 0, !0, {
                        fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                        lineNumber: 573,
                        columnNumber: 21
                      }, void 0)
                    ] }, void 0, !0, {
                      fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                      lineNumber: 571,
                      columnNumber: 19
                    }, void 0)
                  ] }, void 0, !0, {
                    fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                    lineNumber: 551,
                    columnNumber: 15
                  }, void 0),
                  s && /* @__PURE__ */ p.jsxDEV("div", { className: "sm:hidden pt-3 mt-3 border-t border-slate-300/40 flex justify-end", children: /* @__PURE__ */ p.jsxDEV(
                    "a",
                    {
                      href: "/#booking-registration-section",
                      onClick: (q) => {
                        o || c(q);
                      },
                      className: "w-full bg-[#FDB913] hover:bg-[#042F61] text-[#042F61] hover:text-[#FDB913] text-sm font-black tracking-wider uppercase py-3 px-6 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer select-none",
                      children: [
                        /* @__PURE__ */ p.jsxDEV("span", { className: "relative z-10 whitespace-nowrap font-extrabold", style: { fontWeight: 800 }, children: "Join Now" }, void 0, !1, {
                          fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                          lineNumber: 593,
                          columnNumber: 17
                        }, void 0),
                        /* @__PURE__ */ p.jsxDEV(ga, { className: "w-4 h-4" }, void 0, !1, {
                          fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                          lineNumber: 594,
                          columnNumber: 17
                        }, void 0)
                      ]
                    },
                    void 0,
                    !0,
                    {
                      fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                      lineNumber: 584,
                      columnNumber: 15
                    },
                    void 0
                  ) }, void 0, !1, {
                    fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                    lineNumber: 583,
                    columnNumber: 13
                  }, void 0)
                ] }, void 0, !0, {
                  fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                  lineNumber: 550,
                  columnNumber: 13
                }, void 0);
              })()
            ]
          },
          void 0,
          !0,
          {
            fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
            lineNumber: 398,
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
                  lineNumber: 619,
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
                  lineNumber: 624,
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
            lineNumber: 610,
            columnNumber: 9
          },
          void 0
        ),
        s && /* @__PURE__ */ p.jsxDEV("div", { className: "hidden sm:flex absolute bottom-3.5 right-[1px] z-20", children: /* @__PURE__ */ p.jsxDEV(
          "a",
          {
            href: "/#booking-registration-section",
            onClick: (N) => {
              o || c(N);
            },
            className: "relative group overflow-hidden bg-[#FDB913] hover:bg-[#0072CE] text-[#042F61] hover:text-white text-xs sm:text-sm font-black tracking-wider uppercase px-10 sm:px-[52px] py-3 sm:py-3.5 rounded-full shadow-lg border border-[#FDB913]/60 hover:border-[#0072CE] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer select-none",
            children: [
              /* @__PURE__ */ p.jsxDEV("div", { className: "absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none -skew-x-12" }, void 0, !1, {
                fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                lineNumber: 649,
                columnNumber: 13
              }, void 0),
              /* @__PURE__ */ p.jsxDEV("span", { className: "relative z-10 whitespace-nowrap font-extrabold", style: { fontWeight: 800 }, children: "JOIN NOW" }, void 0, !1, {
                fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                lineNumber: 651,
                columnNumber: 13
              }, void 0),
              /* @__PURE__ */ p.jsxDEV(ga, { className: "w-4 h-4 sm:w-4.5 sm:h-4.5 relative z-10 transition-transform duration-300 group-hover:translate-x-1 stroke-[2.5]" }, void 0, !1, {
                fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                lineNumber: 652,
                columnNumber: 13
              }, void 0)
            ]
          },
          void 0,
          !0,
          {
            fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
            lineNumber: 639,
            columnNumber: 11
          },
          void 0
        ) }, void 0, !1, {
          fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
          lineNumber: 638,
          columnNumber: 9
        }, void 0)
      ]
    },
    void 0,
    !0,
    {
      fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
      lineNumber: 393,
      columnNumber: 5
    },
    void 0
  );
}, i5 = () => {
  const [i, s] = H.useState(() => hv()), [o, r] = H.useState(() => JE()), [c, m] = H.useState(() => $E()), [f, h] = H.useState(0), [b, g] = H.useState(!1), [v, y] = H.useState(!1), N = H.useRef(null), w = H.useRef(null), [V, P] = H.useState(null), B = H.useRef(null);
  H.useEffect(() => {
    let Y = !0;
    const I = document.title;
    document.title = "Book Professional Development Session - Chelson Gordon", window.scrollTo({ top: 0, behavior: "instant" });
    const ye = WE((Z) => {
      s(Z), r(mv(Z)), m(pv(Z));
    });
    gv().catch((Z) => {
      console.warn("Using default / cached sessions:", Z);
    });
    let ce = [], le = null;
    const j = () => {
      if (!Y) return !1;
      const Z = B.current || document.getElementById("wp-gravity-form-mount");
      if (!Z) return !1;
      if (Z.querySelector('#gform_wrapper_20, #gform_20, form.gform, [id*="gform_wrapper_20"]'))
        return !0;
      const se = document.getElementById("cg-hidden-gform-source"), re = (se == null ? void 0 : se.querySelector("#gform_wrapper_20, #gform_20, form")) || document.getElementById("gform_wrapper_20") || document.querySelector('[id*="gform_wrapper_20"]') || (se == null ? void 0 : se.firstElementChild);
      return re && !Z.contains(re) ? (Z.replaceChildren(re), typeof window < "u" && (window.dispatchEvent(new CustomEvent("gform_mount_ready", {
        detail: { containerId: "wp-gravity-form-mount" }
      })), window.dispatchEvent(new Event("resize"))), !0) : !1;
    };
    if (!j()) {
      ce = [50, 150, 300, 600, 1200, 2500].map(
        (re) => setTimeout(() => {
          j();
        }, re)
      ), typeof MutationObserver < "u" && typeof document < "u" && (le = new MutationObserver(() => {
        j() && (le == null || le.disconnect());
      }), le.observe(document.body, { childList: !0, subtree: !0 }));
      const se = setTimeout(() => {
        const re = B.current || document.getElementById("wp-gravity-form-mount");
        re && !re.querySelector("#gform_wrapper_20, #gform_20, form") && !document.getElementById("cg-hidden-gform-source") && typeof window < "u" && window.location.pathname.startsWith("/book-pd-session") && fetch("/book-pd-session/", { headers: { "X-Requested-With": "XMLHttpRequest" } }).then((R) => R.ok ? R.text() : "").then((R) => {
          if (!R || !Y) return;
          const te = new DOMParser().parseFromString(R, "text/html"), fe = te.getElementById("cg-hidden-gform-source") || te.getElementById("gform_wrapper_20");
          if (fe) {
            let de = document.getElementById("cg-hidden-gform-source");
            de || (de = document.createElement("div"), de.id = "cg-hidden-gform-source", de.style.display = "none", document.body.appendChild(de)), de.innerHTML = fe.innerHTML, j();
          }
        }).catch(() => {
        });
      }, 350);
      ce.push(se);
    }
    return typeof window < "u" && window.dispatchEvent(new CustomEvent("gform_mount_ready", {
      detail: { containerId: "wp-gravity-form-mount" }
    })), () => {
      Y = !1, ye(), document.title = I, ce.forEach((D) => clearTimeout(D)), le && le.disconnect();
      const Z = B.current || document.getElementById("wp-gravity-form-mount"), se = Z == null ? void 0 : Z.querySelector("#gform_wrapper_20, #gform_20"), re = document.getElementById("cg-hidden-gform-source");
      se && re && !re.contains(se) && re.appendChild(se);
    };
  }, []);
  const z = o[f] || o[0] || t5[0], G = () => {
    h((Y) => (Y - 1 + o.length) % o.length);
  }, L = () => {
    h((Y) => (Y + 1) % o.length);
  }, q = H.useRef(null), F = (Y) => {
    q.current = Y.touches[0].clientX;
  }, W = (Y) => {
    if (q.current === null) return;
    const I = Y.changedTouches[0].clientX - q.current;
    q.current = null, I > 45 ? G() : I < -45 && L();
  }, Q = (Y) => {
    const I = Y.currentTarget.scrollTop;
    y(I > 15), g(!0), N.current && clearTimeout(N.current), N.current = setTimeout(() => {
      g(!1);
    }, 900);
  }, X = () => {
    w.current && w.current.scrollBy({ top: 120, behavior: "smooth" });
  };
  H.useEffect(() => () => {
    N.current && clearTimeout(N.current);
  }, []);
  const J = (Y) => {
    Y && Y.preventDefault();
    const I = document.getElementById("booking-registration-section") || document.getElementById("wp-gravity-form-mount") || B.current;
    if (I) {
      const le = I.getBoundingClientRect().top + window.pageYOffset - 100;
      try {
        window.scrollTo({
          top: Math.max(0, le),
          behavior: "smooth"
        });
      } catch {
        window.scrollTo(0, Math.max(0, le));
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
  }, ee = (Y) => {
    const I = document.getElementById("certificate-verification-section");
    if (I) {
      const le = I.getBoundingClientRect().top + window.pageYOffset - 100;
      try {
        window.scrollTo({
          top: Math.max(0, le),
          behavior: "smooth"
        });
      } catch {
        window.scrollTo(0, Math.max(0, le));
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
  return H.useEffect(() => {
    const Y = () => {
      if (typeof window < "u" && window.location.hash === "#certificate-verification-section") {
        const I = setTimeout(() => {
          ee();
        }, 200);
        return () => clearTimeout(I);
      }
    };
    return Y(), window.addEventListener("hashchange", Y), () => window.removeEventListener("hashchange", Y);
  }, []), H.useEffect(() => {
    const Y = () => {
      if (typeof window < "u" && (window.location.hash === "#booking-registration-section" || window.location.hash === "#wp-gravity-form-mount")) {
        const I = setTimeout(() => {
          J();
        }, 200);
        return () => clearTimeout(I);
      }
    };
    return Y(), window.addEventListener("hashchange", Y), () => window.removeEventListener("hashchange", Y);
  }, []), /* @__PURE__ */ p.jsxDEV("div", { className: "min-h-screen bg-[#F4F7FB] font-sans pt-[180px] sm:pt-[190px] lg:pt-[175px] xl:pt-[200px] 2xl:pt-[220px] pb-24 relative overflow-hidden select-none", children: [
    /* @__PURE__ */ p.jsxDEV(
      "div",
      {
        className: "absolute inset-0 pointer-events-none overflow-hidden select-none z-0",
        "aria-hidden": "true",
        children: [
          /* @__PURE__ */ p.jsxDEV("div", { className: "absolute top-[180px] sm:top-[190px] lg:top-[175px] xl:top-[200px] 2xl:top-[220px] right-[120px] lg:right-[60px] xl:right-[120px] w-0 h-0 overflow-visible origin-top-left transform rotate-90 text-[52px] sm:text-[64px] lg:text-[72px] xl:text-[80px] font-black tracking-widest text-[#042F61]/[0.07] uppercase leading-none whitespace-nowrap select-none", children: "PROFESSIONAL DEVELOPMENT" }, void 0, !1, {
            fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
            lineNumber: 1001,
            columnNumber: 9
          }, void 0),
          /* @__PURE__ */ p.jsxDEV("div", { className: "absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(0,114,206,0.06)_0%,transparent_70%)] blur-3xl pointer-events-none" }, void 0, !1, {
            fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
            lineNumber: 1005,
            columnNumber: 9
          }, void 0),
          /* @__PURE__ */ p.jsxDEV("div", { className: "absolute bottom-1/4 right-10 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(253,185,19,0.05)_0%,transparent_70%)] blur-3xl pointer-events-none" }, void 0, !1, {
            fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
            lineNumber: 1006,
            columnNumber: 9
          }, void 0)
        ]
      },
      void 0,
      !0,
      {
        fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
        lineNumber: 996,
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
            onTouchStart: F,
            onTouchEnd: W,
            children: [
              /* @__PURE__ */ p.jsxDEV("div", { className: "relative w-full overflow-hidden py-3 sm:py-4 px-1 sm:px-2", children: [
                /* @__PURE__ */ p.jsxDEV(
                  "div",
                  {
                    className: "invisible pointer-events-none select-none opacity-0 w-[76%] sm:w-[72%] lg:w-[68%] xl:w-[66%] max-w-[960px] mx-auto",
                    "aria-hidden": "true",
                    children: /* @__PURE__ */ p.jsxDEV(
                      gg,
                      {
                        session: z,
                        sessionIndex: f,
                        totalSessions: o.length,
                        isCenter: !0,
                        isSpacer: !0,
                        scrollToGravityFormMount: J,
                        allSessions: o
                      },
                      void 0,
                      !1,
                      {
                        fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                        lineNumber: 1034,
                        columnNumber: 17
                      },
                      void 0
                    )
                  },
                  void 0,
                  !1,
                  {
                    fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                    lineNumber: 1030,
                    columnNumber: 15
                  },
                  void 0
                ),
                /* @__PURE__ */ p.jsxDEV("div", { className: "absolute inset-0 flex items-center justify-center pointer-events-none", children: o.map((Y, I) => {
                  const ye = o.length;
                  let ce = (I - f) % ye;
                  ce > Math.floor(ye / 2) ? ce -= ye : ce < -Math.floor((ye - 1) / 2) && (ce += ye);
                  const le = ce === 0, j = ce === -1, K = ce === 1, Z = Math.abs(ce) <= 1;
                  let se = "translate(-50%, -50%) scale(1)", re = 1, D = 20;
                  return le ? (se = "translate(-50%, -50%) scale(1)", re = 1, D = 20) : j ? (se = "translate(calc(-50% - 30%), -50%) scale(0.82)", re = 0.65, D = 10) : K ? (se = "translate(calc(-50% + 30%), -50%) scale(0.82)", re = 0.65, D = 10) : (se = ce < 0 ? "translate(calc(-50% - 120%), -50%) scale(0.7)" : "translate(calc(-50% + 120%), -50%) scale(0.7)", re = 0, D = 0), /* @__PURE__ */ p.jsxDEV(
                    "div",
                    {
                      style: {
                        transform: se,
                        opacity: re,
                        zIndex: D,
                        pointerEvents: Z ? "auto" : "none",
                        visibility: Z ? "visible" : "hidden",
                        transition: "transform 550ms cubic-bezier(0.16, 1, 0.3, 1), opacity 500ms ease, filter 500ms ease",
                        left: "50%",
                        top: "50%"
                      },
                      className: `absolute w-[76%] sm:w-[72%] lg:w-[68%] xl:w-[66%] max-w-[960px] h-[94%] sm:h-[96%] bg-transparent transition-all ${le ? "" : "hover:opacity-85 filter brightness-[0.98]"}`,
                      children: /* @__PURE__ */ p.jsxDEV(
                        gg,
                        {
                          session: Y,
                          sessionIndex: I,
                          totalSessions: o.length,
                          isCenter: le,
                          onCardClick: () => {
                            j && G(), K && L();
                          },
                          scrollToGravityFormMount: J,
                          allSessions: o
                        },
                        void 0,
                        !1,
                        {
                          fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                          lineNumber: 1104,
                          columnNumber: 23
                        },
                        void 0
                      )
                    },
                    Y.id || I,
                    !1,
                    {
                      fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                      lineNumber: 1086,
                      columnNumber: 21
                    },
                    void 0
                  );
                }) }, void 0, !1, {
                  fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                  lineNumber: 1046,
                  columnNumber: 15
                }, void 0)
              ] }, void 0, !0, {
                fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                lineNumber: 1027,
                columnNumber: 13
              }, void 0),
              o.length > 1 && /* @__PURE__ */ p.jsxDEV(p.Fragment, { children: [
                /* @__PURE__ */ p.jsxDEV(
                  "button",
                  {
                    type: "button",
                    onClick: G,
                    "aria-label": "Previous upcoming session",
                    className: "absolute left-1 sm:left-2 lg:left-3 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-full bg-white/95 hover:bg-[#0072CE] text-[#042F61] hover:text-white border-2 border-white shadow-[0_6px_20px_rgba(4,47,97,0.18)] hover:shadow-[0_10px_25px_rgba(0,114,206,0.35)] flex items-center justify-center transition-all duration-300 transform hover:scale-110 active:scale-95 cursor-pointer backdrop-blur-md group",
                    children: /* @__PURE__ */ p.jsxDEV(oE, { className: "w-5 h-5 stroke-[2.5] transition-transform duration-200 group-hover:-translate-x-0.5" }, void 0, !1, {
                      fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                      lineNumber: 1132,
                      columnNumber: 19
                    }, void 0)
                  },
                  void 0,
                  !1,
                  {
                    fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                    lineNumber: 1126,
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
                    children: /* @__PURE__ */ p.jsxDEV(lv, { className: "w-5 h-5 stroke-[2.5] transition-transform duration-200 group-hover:translate-x-0.5" }, void 0, !1, {
                      fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                      lineNumber: 1141,
                      columnNumber: 19
                    }, void 0)
                  },
                  void 0,
                  !1,
                  {
                    fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                    lineNumber: 1135,
                    columnNumber: 17
                  },
                  void 0
                )
              ] }, void 0, !0, {
                fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                lineNumber: 1125,
                columnNumber: 15
              }, void 0),
              o.length > 1 && /* @__PURE__ */ p.jsxDEV("div", { className: "flex justify-center items-center mt-2.5 sm:mt-3 relative z-30", children: /* @__PURE__ */ p.jsxDEV("div", { className: "flex items-center gap-1.5 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full border border-slate-200/80 shadow-xs", children: o.map((Y, I) => /* @__PURE__ */ p.jsxDEV(
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
                  lineNumber: 1151,
                  columnNumber: 21
                },
                void 0
              )) }, void 0, !1, {
                fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                lineNumber: 1149,
                columnNumber: 17
              }, void 0) }, void 0, !1, {
                fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                lineNumber: 1148,
                columnNumber: 15
              }, void 0)
            ]
          },
          void 0,
          !0,
          {
            fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
            lineNumber: 1022,
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
                      lineNumber: 1187,
                      columnNumber: 23
                    }, void 0),
                    /* @__PURE__ */ p.jsxDEV("h2", { className: "text-2xl sm:text-[24px] font-black text-[#042F61] tracking-tight leading-tight mt-0.5", children: "Community" }, void 0, !1, {
                      fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                      lineNumber: 1188,
                      columnNumber: 23
                    }, void 0)
                  ] }, void 0, !0, {
                    fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                    lineNumber: 1186,
                    columnNumber: 21
                  }, void 0),
                  /* @__PURE__ */ p.jsxDEV("div", { className: "w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-[#042F61] shrink-0", children: /* @__PURE__ */ p.jsxDEV($c, { className: "w-[30px] h-[30px] text-[#042F61]", strokeWidth: 2 }, void 0, !1, {
                    fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                    lineNumber: 1194,
                    columnNumber: 23
                  }, void 0) }, void 0, !1, {
                    fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                    lineNumber: 1193,
                    columnNumber: 21
                  }, void 0)
                ] }, void 0, !0, {
                  fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                  lineNumber: 1185,
                  columnNumber: 19
                }, void 0),
                /* @__PURE__ */ p.jsxDEV("div", { className: "space-y-3 pt-1", children: [
                  /* @__PURE__ */ p.jsxDEV("div", { className: "flex items-center gap-3", children: [
                    /* @__PURE__ */ p.jsxDEV("div", { className: "w-9 h-9 rounded-full bg-white shadow-xs flex items-center justify-center text-[#042F61] shrink-0", children: /* @__PURE__ */ p.jsxDEV($c, { className: "w-4 h-4 text-[#042F61]" }, void 0, !1, {
                      fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                      lineNumber: 1203,
                      columnNumber: 25
                    }, void 0) }, void 0, !1, {
                      fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                      lineNumber: 1202,
                      columnNumber: 23
                    }, void 0),
                    /* @__PURE__ */ p.jsxDEV("div", { children: [
                      /* @__PURE__ */ p.jsxDEV("span", { className: "text-sm sm:text-base font-black text-[#042F61] block leading-tight", children: "1,200+ Active" }, void 0, !1, {
                        fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                        lineNumber: 1206,
                        columnNumber: 25
                      }, void 0),
                      /* @__PURE__ */ p.jsxDEV("span", { className: "text-[11px] font-semibold text-slate-600 block", children: "Educators & Assessors" }, void 0, !1, {
                        fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                        lineNumber: 1207,
                        columnNumber: 25
                      }, void 0)
                    ] }, void 0, !0, {
                      fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                      lineNumber: 1205,
                      columnNumber: 23
                    }, void 0)
                  ] }, void 0, !0, {
                    fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                    lineNumber: 1201,
                    columnNumber: 21
                  }, void 0),
                  /* @__PURE__ */ p.jsxDEV("div", { className: "flex items-center gap-3", children: [
                    /* @__PURE__ */ p.jsxDEV("div", { className: "w-9 h-9 rounded-full bg-white shadow-xs flex items-center justify-center text-[#042F61] shrink-0", children: /* @__PURE__ */ p.jsxDEV(Jc, { className: "w-4 h-4 text-[#042F61]" }, void 0, !1, {
                      fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                      lineNumber: 1214,
                      columnNumber: 25
                    }, void 0) }, void 0, !1, {
                      fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                      lineNumber: 1213,
                      columnNumber: 23
                    }, void 0),
                    /* @__PURE__ */ p.jsxDEV("div", { children: [
                      /* @__PURE__ */ p.jsxDEV("span", { className: "text-sm sm:text-base font-black text-[#042F61] block leading-tight", children: "100% ASQA" }, void 0, !1, {
                        fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                        lineNumber: 1217,
                        columnNumber: 25
                      }, void 0),
                      /* @__PURE__ */ p.jsxDEV("span", { className: "text-[11px] font-semibold text-slate-600 block", children: "Compliant Frameworks" }, void 0, !1, {
                        fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                        lineNumber: 1218,
                        columnNumber: 25
                      }, void 0)
                    ] }, void 0, !0, {
                      fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                      lineNumber: 1216,
                      columnNumber: 23
                    }, void 0)
                  ] }, void 0, !0, {
                    fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                    lineNumber: 1212,
                    columnNumber: 21
                  }, void 0)
                ] }, void 0, !0, {
                  fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                  lineNumber: 1199,
                  columnNumber: 19
                }, void 0)
              ] }, void 0, !0, {
                fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                lineNumber: 1183,
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
                      lineNumber: 1230,
                      columnNumber: 21
                    }, void 0),
                    /* @__PURE__ */ p.jsxDEV(VE, { className: "w-4 h-4 transition-transform group-hover:scale-110" }, void 0, !1, {
                      fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                      lineNumber: 1231,
                      columnNumber: 21
                    }, void 0)
                  ]
                },
                void 0,
                !0,
                {
                  fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                  lineNumber: 1226,
                  columnNumber: 19
                },
                void 0
              ) }, void 0, !1, {
                fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                lineNumber: 1225,
                columnNumber: 17
              }, void 0)
            ] }, void 0, !0, {
              fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
              lineNumber: 1182,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ p.jsxDEV("div", { className: "bg-[#E1EFFB] border border-[#B8DCF8] rounded-[24px] p-5 sm:p-6 flex flex-col justify-between relative shadow-sm hover:shadow-md transition-shadow", children: [
              /* @__PURE__ */ p.jsxDEV("div", { children: [
                /* @__PURE__ */ p.jsxDEV("div", { className: "flex items-start justify-between gap-4 mb-2", children: [
                  /* @__PURE__ */ p.jsxDEV("div", { children: [
                    /* @__PURE__ */ p.jsxDEV("span", { className: "text-[11px] font-bold text-[#0072CE] uppercase tracking-widest block", children: "Share Your Experience" }, void 0, !1, {
                      fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                      lineNumber: 1241,
                      columnNumber: 23
                    }, void 0),
                    /* @__PURE__ */ p.jsxDEV("h2", { className: "text-2xl sm:text-[24px] font-black text-[#042F61] tracking-tight leading-tight mt-0.5", children: "Give Feedback" }, void 0, !1, {
                      fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                      lineNumber: 1242,
                      columnNumber: 23
                    }, void 0)
                  ] }, void 0, !0, {
                    fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                    lineNumber: 1240,
                    columnNumber: 21
                  }, void 0),
                  /* @__PURE__ */ p.jsxDEV("div", { className: "w-9 h-9 rounded-full bg-white shadow-sm flex items-center justify-center text-[#042F61] shrink-0", children: /* @__PURE__ */ p.jsxDEV(Kc, { className: "w-4 h-4 text-[#042F61]" }, void 0, !1, {
                    fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                    lineNumber: 1247,
                    columnNumber: 23
                  }, void 0) }, void 0, !1, {
                    fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                    lineNumber: 1246,
                    columnNumber: 21
                  }, void 0)
                ] }, void 0, !0, {
                  fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                  lineNumber: 1239,
                  columnNumber: 19
                }, void 0),
                /* @__PURE__ */ p.jsxDEV("p", { className: "text-xs text-slate-600 leading-relaxed mt-2 mb-4", children: "Help us refine future vocational masterclasses and topic compliance coverage." }, void 0, !1, {
                  fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                  lineNumber: 1250,
                  columnNumber: 19
                }, void 0)
              ] }, void 0, !0, {
                fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                lineNumber: 1238,
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
                      lineNumber: 1261,
                      columnNumber: 19
                    }, void 0),
                    /* @__PURE__ */ p.jsxDEV(ga, { className: "w-3.5 h-3.5 transition-transform group-hover:translate-x-1" }, void 0, !1, {
                      fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                      lineNumber: 1262,
                      columnNumber: 19
                    }, void 0)
                  ]
                },
                void 0,
                !0,
                {
                  fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                  lineNumber: 1255,
                  columnNumber: 17
                },
                void 0
              )
            ] }, void 0, !0, {
              fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
              lineNumber: 1237,
              columnNumber: 15
            }, void 0)
          ] }, void 0, !0, {
            fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
            lineNumber: 1179,
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
                lineNumber: 1276,
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
                lineNumber: 1280,
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
              lineNumber: 1286,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ p.jsxDEV("div", { className: "flex items-center justify-between pb-3.5 sm:pb-4 border-b border-white/15 mb-3 sm:mb-3.5 relative z-10", children: [
              /* @__PURE__ */ p.jsxDEV("div", { className: "flex items-center gap-3 sm:gap-3.5", children: [
                /* @__PURE__ */ p.jsxDEV("div", { className: "w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/15 border border-white/20 flex items-center justify-center text-white shrink-0 shadow-inner", children: /* @__PURE__ */ p.jsxDEV(yE, { className: "w-5 h-5 text-white" }, void 0, !1, {
                  fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                  lineNumber: 1310,
                  columnNumber: 21
                }, void 0) }, void 0, !1, {
                  fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                  lineNumber: 1309,
                  columnNumber: 19
                }, void 0),
                /* @__PURE__ */ p.jsxDEV("div", { children: [
                  /* @__PURE__ */ p.jsxDEV("span", { className: "text-[11px] font-bold text-sky-200 uppercase tracking-wider block", children: "50+ Completed Masterclasses" }, void 0, !1, {
                    fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                    lineNumber: 1313,
                    columnNumber: 21
                  }, void 0),
                  /* @__PURE__ */ p.jsxDEV("h2", { className: "text-2xl sm:text-[26px] font-black text-white tracking-tight leading-tight mt-0.5", children: "Previous Sessions" }, void 0, !1, {
                    fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                    lineNumber: 1316,
                    columnNumber: 21
                  }, void 0)
                ] }, void 0, !0, {
                  fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                  lineNumber: 1312,
                  columnNumber: 19
                }, void 0)
              ] }, void 0, !0, {
                fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                lineNumber: 1308,
                columnNumber: 17
              }, void 0),
              /* @__PURE__ */ p.jsxDEV("span", { className: "text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/15 text-white border border-white/25 shadow-2xs font-sans", children: [
                c.length,
                " Topics"
              ] }, void 0, !0, {
                fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                lineNumber: 1322,
                columnNumber: 17
              }, void 0)
            ] }, void 0, !0, {
              fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
              lineNumber: 1307,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ p.jsxDEV(
              "div",
              {
                ref: w,
                onScroll: Q,
                className: `overflow-y-auto max-h-[310px] sm:max-h-[340px] lg:max-h-[365px] pr-1.5 flex flex-col gap-1.5 sm:gap-2 past-pd-scroll-area relative z-10 ${b ? "is-scrolling" : ""}`,
                style: {
                  scrollbarWidth: "thin",
                  scrollbarColor: b ? "rgba(255, 255, 255, 0.4) transparent" : "transparent transparent"
                },
                tabIndex: 0,
                role: "region",
                "aria-label": "Scrollable list of previous session topics",
                children: [
                  (c.length > 3 ? c.slice(0, 3) : c).map((Y, I) => {
                    const ye = Vi(Y.title);
                    return /* @__PURE__ */ p.jsxDEV(
                      "div",
                      {
                        onClick: () => P(Y),
                        onKeyDown: (ce) => {
                          (ce.key === "Enter" || ce.key === " ") && (ce.preventDefault(), P(Y));
                        },
                        role: "button",
                        tabIndex: 0,
                        "aria-label": `View details for ${ye}`,
                        className: "px-2.5 py-0 rounded-xl bg-white/10 border border-white/15 hover:border-white/40 hover:bg-white/20 transition-all duration-200 group flex items-center w-full cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-white/40 select-none",
                        children: [
                          /* @__PURE__ */ p.jsxDEV("div", { className: "w-[16%] sm:w-[13%] aspect-square flex items-center justify-center shrink-0 -translate-x-[4px]", children: /* @__PURE__ */ p.jsxDEV("span", { className: "text-lg sm:text-xl font-black text-[#FDB913] font-sans select-none tracking-tight", children: I + 1 }, void 0, !1, {
                            fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                            lineNumber: 1363,
                            columnNumber: 25
                          }, void 0) }, void 0, !1, {
                            fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                            lineNumber: 1362,
                            columnNumber: 23
                          }, void 0),
                          /* @__PURE__ */ p.jsxDEV("div", { className: "w-[84%] sm:w-[87%] flex-1 pl-2 sm:pl-3 pr-2 py-0.5 sm:py-1 -translate-x-[4px]", children: [
                            (() => {
                              const ce = Ni(Y.description), le = !ce.hideDate && !!Y.date, j = !ce.hideTime && !!Y.time;
                              return !le && !j ? null : /* @__PURE__ */ p.jsxDEV("div", { className: "flex items-center gap-2 mb-0.5", children: [
                                le && /* @__PURE__ */ p.jsxDEV("span", { className: "text-[10px] sm:text-[11px] font-semibold text-sky-200 flex items-center gap-1", children: [
                                  /* @__PURE__ */ p.jsxDEV(ba, { className: "w-3 h-3 text-sky-300" }, void 0, !1, {
                                    fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                                    lineNumber: 1379,
                                    columnNumber: 35
                                  }, void 0),
                                  ml(Y.date)
                                ] }, void 0, !0, {
                                  fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                                  lineNumber: 1378,
                                  columnNumber: 33
                                }, void 0),
                                j && /* @__PURE__ */ p.jsxDEV("span", { className: "text-[10px] text-sky-200/80", children: [
                                  le ? "• " : "",
                                  Y.time
                                ] }, void 0, !0, {
                                  fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                                  lineNumber: 1384,
                                  columnNumber: 33
                                }, void 0)
                              ] }, void 0, !0, {
                                fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                                lineNumber: 1376,
                                columnNumber: 29
                              }, void 0);
                            })(),
                            mg(ye)
                          ] }, void 0, !0, {
                            fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                            lineNumber: 1369,
                            columnNumber: 23
                          }, void 0)
                        ]
                      },
                      Y.id || I,
                      !0,
                      {
                        fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                        lineNumber: 1347,
                        columnNumber: 21
                      },
                      void 0
                    );
                  }),
                  c.length > 3 && /* @__PURE__ */ p.jsxDEV(Dl, { initial: !1, children: !v && /* @__PURE__ */ p.jsxDEV(
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
                          onClick: X,
                          onKeyDown: (Y) => {
                            (Y.key === "Enter" || Y.key === " ") && (Y.preventDefault(), X());
                          },
                          role: "button",
                          tabIndex: 0,
                          "aria-label": `Scroll to view ${c.length - 3} more sessions`,
                          className: "w-full py-1.5 px-2 flex items-center justify-center gap-2 text-white hover:text-[#FDB913] transition-colors cursor-pointer select-none group focus:outline-hidden",
                          children: [
                            /* @__PURE__ */ p.jsxDEV(ov, { className: "w-4 h-4 shrink-0 text-white group-hover:text-[#FDB913] group-hover:translate-y-0.5 transition-transform duration-200" }, void 0, !1, {
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
                  c.length > 3 && c.slice(3).map((Y, I) => {
                    const ye = Vi(Y.title), ce = I + 4;
                    return /* @__PURE__ */ p.jsxDEV(
                      "div",
                      {
                        onClick: () => P(Y),
                        onKeyDown: (le) => {
                          (le.key === "Enter" || le.key === " ") && (le.preventDefault(), P(Y));
                        },
                        role: "button",
                        tabIndex: 0,
                        "aria-label": `View details for ${ye}`,
                        className: "px-2.5 py-0 rounded-xl bg-white/10 border border-white/15 hover:border-white/40 hover:bg-white/20 transition-all duration-200 group flex items-center w-full cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-white/40 select-none",
                        children: [
                          /* @__PURE__ */ p.jsxDEV("div", { className: "w-[16%] sm:w-[13%] aspect-square flex items-center justify-center shrink-0 -translate-x-[4px]", children: /* @__PURE__ */ p.jsxDEV("span", { className: "text-lg sm:text-xl font-black text-[#FDB913] font-sans select-none tracking-tight", children: ce }, void 0, !1, {
                            fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                            lineNumber: 1457,
                            columnNumber: 25
                          }, void 0) }, void 0, !1, {
                            fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                            lineNumber: 1456,
                            columnNumber: 23
                          }, void 0),
                          /* @__PURE__ */ p.jsxDEV("div", { className: "w-[84%] sm:w-[87%] flex-1 pl-2 sm:pl-3 pr-2 py-0.5 sm:py-1 -translate-x-[4px]", children: [
                            (() => {
                              const le = Ni(Y.description), j = !le.hideDate && !!Y.date, K = !le.hideTime && !!Y.time;
                              return !j && !K ? null : /* @__PURE__ */ p.jsxDEV("div", { className: "flex items-center gap-2 mb-0.5", children: [
                                j && /* @__PURE__ */ p.jsxDEV("span", { className: "text-[10px] sm:text-[11px] font-semibold text-sky-200 flex items-center gap-1", children: [
                                  /* @__PURE__ */ p.jsxDEV(ba, { className: "w-3 h-3 text-sky-300" }, void 0, !1, {
                                    fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                                    lineNumber: 1473,
                                    columnNumber: 35
                                  }, void 0),
                                  ml(Y.date)
                                ] }, void 0, !0, {
                                  fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                                  lineNumber: 1472,
                                  columnNumber: 33
                                }, void 0),
                                K && /* @__PURE__ */ p.jsxDEV("span", { className: "text-[10px] text-sky-200/80", children: [
                                  j ? "• " : "",
                                  Y.time
                                ] }, void 0, !0, {
                                  fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                                  lineNumber: 1478,
                                  columnNumber: 33
                                }, void 0)
                              ] }, void 0, !0, {
                                fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                                lineNumber: 1470,
                                columnNumber: 29
                              }, void 0);
                            })(),
                            mg(ye)
                          ] }, void 0, !0, {
                            fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                            lineNumber: 1463,
                            columnNumber: 23
                          }, void 0)
                        ]
                      },
                      Y.id || ce,
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
                lineNumber: 1328,
                columnNumber: 15
              },
              void 0
            )
          ] }, void 0, !0, {
            fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
            lineNumber: 1273,
            columnNumber: 13
          }, void 0)
        ] }, void 0, !0, {
          fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
          lineNumber: 1172,
          columnNumber: 11
        }, void 0)
      ] }, void 0, !0, {
        fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
        lineNumber: 1014,
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
                /* @__PURE__ */ p.jsxDEV(nE, { className: "w-3.5 h-3.5 text-[#0072CE]" }, void 0, !1, {
                  fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                  lineNumber: 1509,
                  columnNumber: 15
                }, void 0),
                /* @__PURE__ */ p.jsxDEV("span", { children: "Session Registration" }, void 0, !1, {
                  fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                  lineNumber: 1510,
                  columnNumber: 15
                }, void 0)
              ] }, void 0, !0, {
                fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                lineNumber: 1508,
                columnNumber: 13
              }, void 0),
              /* @__PURE__ */ p.jsxDEV("h2", { className: "text-2xl sm:text-3xl lg:text-[32px] font-black text-[#042F61] tracking-tight leading-tight", children: "Book Your Professional Development Session" }, void 0, !1, {
                fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                lineNumber: 1512,
                columnNumber: 13
              }, void 0),
              /* @__PURE__ */ p.jsxDEV("p", { className: "text-sm sm:text-base text-slate-600 max-w-2xl mt-2 leading-relaxed", children: "Complete the registration form below to secure your seat for upcoming masterclasses and receive direct session access details." }, void 0, !1, {
                fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                lineNumber: 1515,
                columnNumber: 13
              }, void 0)
            ] }, void 0, !0, {
              fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
              lineNumber: 1507,
              columnNumber: 11
            }, void 0),
            /* @__PURE__ */ p.jsxDEV(
              "div",
              {
                id: "wp-gravity-form-mount",
                ref: B,
                className: "gform_wrapper gravity-form-mount-container w-full min-h-[160px] flex items-center justify-center scroll-mt-28 sm:scroll-mt-36",
                "data-form-type": "gravity-forms",
                "data-form-name": "pd-session-registration"
              },
              void 0,
              !1,
              {
                fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                lineNumber: 1520,
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
          lineNumber: 1502,
          columnNumber: 9
        },
        void 0
      ),
      /* @__PURE__ */ p.jsxDEV(e5, {}, void 0, !1, {
        fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
        lineNumber: 1533,
        columnNumber: 9
      }, void 0)
    ] }, void 0, !0, {
      fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
      lineNumber: 1009,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ p.jsxDEV(Dl, { children: V && /* @__PURE__ */ p.jsxDEV(
      "div",
      {
        className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs",
        onClick: () => P(null),
        children: /* @__PURE__ */ p.jsxDEV(
          Oe.div,
          {
            initial: { opacity: 0, scale: 0.95, y: 15 },
            animate: { opacity: 1, scale: 1, y: 0 },
            exit: { opacity: 0, scale: 0.95, y: 15 },
            transition: { duration: 0.2 },
            className: "bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative max-h-[90vh] overflow-y-auto",
            onClick: (Y) => Y.stopPropagation(),
            children: [
              /* @__PURE__ */ p.jsxDEV(
                "button",
                {
                  onClick: () => P(null),
                  className: "absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors cursor-pointer",
                  "aria-label": "Close Modal",
                  children: /* @__PURE__ */ p.jsxDEV(fv, { className: "w-4 h-4" }, void 0, !1, {
                    fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                    lineNumber: 1560,
                    columnNumber: 17
                  }, void 0)
                },
                void 0,
                !1,
                {
                  fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                  lineNumber: 1555,
                  columnNumber: 15
                },
                void 0
              ),
              /* @__PURE__ */ p.jsxDEV("div", { className: "space-y-4", children: [
                /* @__PURE__ */ p.jsxDEV("div", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0072CE]/10 text-[#0072CE] text-xs font-bold uppercase tracking-wider", children: [
                  /* @__PURE__ */ p.jsxDEV(dg, { className: "w-3.5 h-3.5 text-[#FDB913]" }, void 0, !1, {
                    fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                    lineNumber: 1565,
                    columnNumber: 19
                  }, void 0),
                  /* @__PURE__ */ p.jsxDEV("span", { children: "About this Session" }, void 0, !1, {
                    fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                    lineNumber: 1566,
                    columnNumber: 19
                  }, void 0)
                ] }, void 0, !0, {
                  fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                  lineNumber: 1564,
                  columnNumber: 17
                }, void 0),
                /* @__PURE__ */ p.jsxDEV("h3", { className: "text-2xl font-black text-[#042F61] tracking-tight leading-snug", children: V.title }, void 0, !1, {
                  fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                  lineNumber: 1569,
                  columnNumber: 17
                }, void 0),
                (() => {
                  const Y = Ni(V.description);
                  return Y.firstLineHtml ? /* @__PURE__ */ p.jsxDEV(
                    "div",
                    {
                      className: "mt-2 text-slate-600 font-sans text-sm sm:text-[15px] leading-relaxed [&>p]:mb-0 [&>p]:leading-relaxed",
                      dangerouslySetInnerHTML: { __html: Y.firstLineHtml }
                    },
                    void 0,
                    !1,
                    {
                      fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                      lineNumber: 1577,
                      columnNumber: 21
                    },
                    void 0
                  ) : null;
                })(),
                (() => {
                  const Y = Ni(V.description);
                  if (Y.hideDate && Y.hideTime)
                    return null;
                  const I = !!V.date, ye = !!V.time, ce = !Y.hideDate && (I || Y.isTba), le = !Y.hideTime && (ye || Y.isTba);
                  return !ce && !le ? null : /* @__PURE__ */ p.jsxDEV("div", { className: `grid ${ce && le ? "grid-cols-2" : "grid-cols-1"} gap-3 py-3 border-y border-slate-100`, children: [
                    ce && /* @__PURE__ */ p.jsxDEV("div", { className: "flex items-center gap-2.5", children: [
                      /* @__PURE__ */ p.jsxDEV("div", { className: "w-8 h-8 rounded-lg bg-[#0072CE]/10 flex items-center justify-center text-[#0072CE]", children: /* @__PURE__ */ p.jsxDEV(ba, { className: "w-4 h-4" }, void 0, !1, {
                        fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                        lineNumber: 1604,
                        columnNumber: 29
                      }, void 0) }, void 0, !1, {
                        fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                        lineNumber: 1603,
                        columnNumber: 27
                      }, void 0),
                      /* @__PURE__ */ p.jsxDEV("div", { children: [
                        /* @__PURE__ */ p.jsxDEV("span", { className: "text-[10px] uppercase font-bold text-[#042F61] block tracking-wider", children: "Session Date" }, void 0, !1, {
                          fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                          lineNumber: 1607,
                          columnNumber: 29
                        }, void 0),
                        /* @__PURE__ */ p.jsxDEV("span", { className: "text-sm font-semibold text-slate-800", children: V.date ? ml(V.date) : "TBA" }, void 0, !1, {
                          fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                          lineNumber: 1608,
                          columnNumber: 29
                        }, void 0)
                      ] }, void 0, !0, {
                        fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                        lineNumber: 1606,
                        columnNumber: 27
                      }, void 0)
                    ] }, void 0, !0, {
                      fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                      lineNumber: 1602,
                      columnNumber: 25
                    }, void 0),
                    le && /* @__PURE__ */ p.jsxDEV("div", { className: "flex items-center gap-2.5", children: [
                      /* @__PURE__ */ p.jsxDEV("div", { className: "w-8 h-8 rounded-lg bg-[#0072CE]/10 flex items-center justify-center text-[#0072CE]", children: /* @__PURE__ */ p.jsxDEV(rv, { className: "w-4 h-4" }, void 0, !1, {
                        fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                        lineNumber: 1616,
                        columnNumber: 29
                      }, void 0) }, void 0, !1, {
                        fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                        lineNumber: 1615,
                        columnNumber: 27
                      }, void 0),
                      /* @__PURE__ */ p.jsxDEV("div", { children: [
                        /* @__PURE__ */ p.jsxDEV("span", { className: "text-[10px] uppercase font-bold text-[#042F61] block tracking-wider", children: "Session Time" }, void 0, !1, {
                          fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                          lineNumber: 1619,
                          columnNumber: 29
                        }, void 0),
                        /* @__PURE__ */ p.jsxDEV("span", { className: "text-sm font-semibold text-slate-800", children: V.time || "TBA" }, void 0, !1, {
                          fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                          lineNumber: 1620,
                          columnNumber: 29
                        }, void 0)
                      ] }, void 0, !0, {
                        fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                        lineNumber: 1618,
                        columnNumber: 27
                      }, void 0)
                    ] }, void 0, !0, {
                      fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                      lineNumber: 1614,
                      columnNumber: 25
                    }, void 0)
                  ] }, void 0, !0, {
                    fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                    lineNumber: 1600,
                    columnNumber: 21
                  }, void 0);
                })(),
                /* @__PURE__ */ p.jsxDEV("div", { children: [
                  /* @__PURE__ */ p.jsxDEV("h4", { className: "text-xs uppercase font-bold text-[#042F61] tracking-wider mb-2", children: "Description" }, void 0, !1, {
                    fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                    lineNumber: 1629,
                    columnNumber: 19
                  }, void 0),
                  (() => {
                    const Y = Ni(V.description);
                    return Y.hideDescription ? /* @__PURE__ */ p.jsxDEV("p", { className: "text-slate-500 font-sans text-sm leading-relaxed italic", children: "Session details will be announced soon." }, void 0, !1, {
                      fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                      lineNumber: 1634,
                      columnNumber: 25
                    }, void 0) : Y.remainingHtml && Y.remainingHtml.trim().length > 0 ? /* @__PURE__ */ p.jsxDEV(
                      "div",
                      {
                        className: "text-slate-600 font-sans text-sm leading-relaxed max-w-none [&>p]:mb-2 [&>p:last-child]:mb-0 [&>ul]:list-disc [&>ul]:pl-5 [&>ol]:list-decimal [&>ol]:pl-5",
                        dangerouslySetInnerHTML: { __html: Y.remainingHtml }
                      },
                      void 0,
                      !1,
                      {
                        fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                        lineNumber: 1642,
                        columnNumber: 25
                      },
                      void 0
                    ) : /* @__PURE__ */ p.jsxDEV("div", { className: "p-3.5 sm:p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-slate-600 flex items-start gap-3", children: [
                      /* @__PURE__ */ p.jsxDEV("div", { className: "w-8 h-8 rounded-xl bg-[#FDB913]/15 flex items-center justify-center shrink-0 mt-0.5", children: /* @__PURE__ */ p.jsxDEV(dg, { className: "w-4 h-4 text-[#FDB913]" }, void 0, !1, {
                        fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                        lineNumber: 1652,
                        columnNumber: 27
                      }, void 0) }, void 0, !1, {
                        fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                        lineNumber: 1651,
                        columnNumber: 25
                      }, void 0),
                      /* @__PURE__ */ p.jsxDEV("div", { children: [
                        /* @__PURE__ */ p.jsxDEV("span", { className: "text-xs font-bold text-[#042F61] uppercase tracking-wider block mb-1", children: "Description Pending Update" }, void 0, !1, {
                          fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                          lineNumber: 1655,
                          columnNumber: 27
                        }, void 0),
                        /* @__PURE__ */ p.jsxDEV("p", { className: "text-xs sm:text-sm text-slate-500 leading-relaxed", children: "A detailed session syllabus, learning outcomes, and recording archives for this masterclass will be updated shortly. You can reserve your seat or inquiry below." }, void 0, !1, {
                          fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                          lineNumber: 1658,
                          columnNumber: 27
                        }, void 0)
                      ] }, void 0, !0, {
                        fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                        lineNumber: 1654,
                        columnNumber: 25
                      }, void 0)
                    ] }, void 0, !0, {
                      fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                      lineNumber: 1650,
                      columnNumber: 23
                    }, void 0);
                  })()
                ] }, void 0, !0, {
                  fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                  lineNumber: 1628,
                  columnNumber: 17
                }, void 0),
                /* @__PURE__ */ p.jsxDEV("div", { className: "pt-4 border-t border-slate-100 flex justify-end", children: /* @__PURE__ */ p.jsxDEV(
                  "button",
                  {
                    type: "button",
                    onClick: () => P(null),
                    className: "w-full sm:w-auto border border-slate-300 hover:border-slate-400 hover:bg-slate-50 text-slate-700 font-bold text-sm py-3 px-6 rounded-xl transition-colors cursor-pointer text-center",
                    children: "Dismiss"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                    lineNumber: 1668,
                    columnNumber: 19
                  },
                  void 0
                ) }, void 0, !1, {
                  fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                  lineNumber: 1667,
                  columnNumber: 17
                }, void 0)
              ] }, void 0, !0, {
                fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                lineNumber: 1563,
                columnNumber: 15
              }, void 0)
            ]
          },
          void 0,
          !0,
          {
            fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
            lineNumber: 1546,
            columnNumber: 13
          },
          void 0
        )
      },
      void 0,
      !1,
      {
        fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
        lineNumber: 1542,
        columnNumber: 11
      },
      void 0
    ) }, void 0, !1, {
      fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
      lineNumber: 1540,
      columnNumber: 7
    }, void 0)
  ] }, void 0, !0, {
    fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
    lineNumber: 993,
    columnNumber: 5
  }, void 0);
};
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
const bg = "https://storage.googleapis.com/chelsongordon/com.chelsongordon/logos/logo.svg", a5 = "https://storage.googleapis.com/chelsongordon/com.chelsongordon/logos/logo_white.svg", s5 = ({
  isScrolled: i = !1,
  isHomepage: s
}) => {
  const o = () => {
    if (typeof s == "boolean")
      return s;
    if (typeof window > "u" || document.getElementById("pd-announcement"))
      return !0;
    const f = window.location.pathname.split("?")[0].replace(/\/+$/, "") || "/", h = window.location.hash || "";
    return !(f.startsWith("/book-pd-session") || f.startsWith("/our-people") || f.startsWith("/our-teams") || f.startsWith("/team") || f.startsWith("/hr-dashboard") || h.startsWith("#book-pd-session") || h === "#booking-registration-section" || h.startsWith("#our-people") || h.startsWith("#our-teams") || h.startsWith("#meet-our-team") || h.startsWith("#hr-dashboard") || h === "#org-chart") && (f === "/" || f === "");
  }, [r, c] = _h.useState(o);
  _h.useEffect(() => {
    if (typeof s == "boolean") {
      c(s);
      return;
    }
    const f = () => {
      c(o());
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
                  children: /* @__PURE__ */ p.jsxDEV(lv, { className: "w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" }, void 0, !1, {
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
}, Ic = [
  { name: "Arabic", code: "AR", english: "Arabic", native: "عربي" },
  { name: "Chinese", code: "ZH", english: "Chinese", native: "中国人" },
  { name: "Hindi", code: "HI", english: "Hindi", native: "हिन्दी" },
  { name: "Thai", code: "TH", english: "Thai", native: "ไทย" },
  { name: "Vietnamese", code: "VI", english: "Vietnamese", native: "Tiếng Việt" }
], o5 = (i) => {
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
}, l5 = ({
  isScrolled: i,
  selectedLang: s,
  onLanguageChange: o
}) => {
  const [r, c] = H.useState(!1), m = H.useRef(null);
  return H.useEffect(() => {
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
          /* @__PURE__ */ p.jsxDEV(uv, { className: "w-3 h-3 min-[1600px]:w-3.5 min-[1600px]:h-3.5" }, void 0, !1, {
            fileName: "/app/applet/src/components/Navbar.tsx",
            lineNumber: 77,
            columnNumber: 9
          }, void 0),
          /* @__PURE__ */ p.jsxDEV("span", { className: "inline", children: o5(s) }, void 0, !1, {
            fileName: "/app/applet/src/components/Navbar.tsx",
            lineNumber: 78,
            columnNumber: 9
          }, void 0),
          /* @__PURE__ */ p.jsxDEV(ov, { className: `w-2.5 h-2.5 min-[1600px]:w-3 min-[1600px]:h-3 transition-transform duration-300 ${r ? "rotate-180" : ""}` }, void 0, !1, {
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
    /* @__PURE__ */ p.jsxDEV(Dl, { children: r && /* @__PURE__ */ p.jsxDEV(
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
                o("EN", "English"), c(!1);
              },
              className: "w-full flex items-center gap-2.5 px-5 py-4 border-b border-orange-100 bg-orange-50/50 text-[10.5px] font-extrabold uppercase tracking-widest text-[#042F61] transition-all text-left group notranslate",
              translate: "no",
              children: [
                /* @__PURE__ */ p.jsxDEV(cv, { className: "w-3.5 h-3.5 text-orange-500 transition-transform duration-500 group-hover:rotate-180" }, void 0, !1, {
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
          Ic.map((f, h) => /* @__PURE__ */ p.jsxDEV(
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
                o(f.code, f.name), c(!1);
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
}, vg = [
  { name: "About Us", href: "https://chelsongordon.com/who-we-are/" },
  { name: "Our Services", href: "https://chelsongordon.com/our-services/" },
  { name: "Our People", href: "https://chelsongordon.com/our-team/" },
  { name: "Careers", href: "https://chelsongordon.com/careers/" }
], r5 = ({ forceSolid: i, logoHref: s, isHomepage: o }) => {
  const [r, c] = H.useState(!1), [m, f] = H.useState(!1), [h, b] = H.useState(!1), [g, v] = H.useState(() => localStorage.getItem("selected_language_name") || "English"), y = typeof window < "u" && (window.location.pathname === "/book-pd-session" || window.location.pathname.startsWith("/book-pd-session") || window.location.hash === "#book-pd-session" || window.location.hash.startsWith("#book-pd-session")), N = s || (y ? "https://chelsongordon.com/" : "/"), w = N.startsWith("http"), V = r || i;
  H.useEffect(() => {
    var q;
    let B = !1;
    const z = () => {
      B || (window.requestAnimationFrame(() => {
        c(window.scrollY > 50), B = !1;
      }), B = !0);
    };
    window.addEventListener("scroll", z, { passive: !0 });
    const L = ((F) => {
      const W = document.cookie.split(";");
      for (let Q = 0; Q < W.length; Q++) {
        let X = W[Q].trim();
        if (X.startsWith(F + "=")) {
          let J = X.substring(F.length + 1);
          return J.startsWith('"') && J.endsWith('"') && (J = J.slice(1, -1)), decodeURIComponent(J);
        }
      }
      return null;
    })("googtrans");
    if (L) {
      let F = ((q = L.split("/").pop()) == null ? void 0 : q.toUpperCase()) || "";
      if (F = F.replace(/["\s]/g, ""), F === "EN")
        v("English"), localStorage.setItem("selected_language_name", "English");
      else if (F) {
        const W = Ic.find((Q) => Q.code === (F === "ZH-CN" ? "ZH" : F));
        W && (v(W.name), localStorage.setItem("selected_language_name", W.name));
      }
    } else {
      const F = localStorage.getItem("selected_language_name");
      F && v(F);
    }
    if (!document.getElementById("google-translate-script")) {
      const F = document.createElement("script");
      F.id = "google-translate-script", F.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit", F.async = !0, document.body.appendChild(F);
    }
    return window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement({
        pageLanguage: "en",
        includedLanguages: "ar,zh-CN,hi,th,vi",
        layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: !1
      }, "google_translate_element");
    }, () => window.removeEventListener("scroll", z);
  }, []);
  const P = (B, z) => {
    v(z), localStorage.setItem("selected_language_name", z);
    let G = B.toLowerCase();
    G === "zh" && (G = "zh-CN");
    const L = window.location.hostname, q = L.split(".");
    if (G === "en") {
      const W = "expires=Thu, 01 Jan 1970 00:00:00 UTC", Q = ["/", "/en/", "/en-US/"], X = [
        "",
        L,
        `.${L}`,
        q.slice(-2).join("."),
        `.${q.slice(-2).join(".")}`
      ];
      for (const J of X)
        for (const ee of Q)
          document.cookie = `googtrans=; path=${ee}; ${J ? `domain=${J};` : ""} ${W}`, document.cookie = `googtrans=; ${J ? `domain=${J};` : ""} ${W}`;
      try {
        const J = document.querySelector("iframe.goog-te-banner-frame");
        if (J && J.contentDocument) {
          const ee = J.contentDocument.getElementById("BannerRestoreBtn") || J.contentDocument.querySelector(".goog-te-button button");
          ee && ee.click();
        }
      } catch (J) {
        console.error(J);
      }
    } else {
      const W = `/en/${G}`;
      if (document.cookie = `googtrans=${W}; path=/`, document.cookie = `googtrans=${W}; path=/; domain=.${L}`, document.cookie = `googtrans=${W}; path=/; domain=${L}`, q.length > 2) {
        const Q = q.slice(1).join(".");
        document.cookie = `googtrans=${W}; path=/; domain=.${Q}`, document.cookie = `googtrans=${W}; path=/; domain=${Q}`;
      }
    }
    const F = document.querySelector(".goog-te-combo");
    F ? (F.value = G === "en" ? "" : G, F.dispatchEvent(new Event("change")), G === "en" && setTimeout(() => {
      window.location.reload();
    }, 150)) : setTimeout(() => {
      const W = document.querySelector(".goog-te-combo");
      W ? (W.value = G === "en" ? "" : G, W.dispatchEvent(new Event("change")), G === "en" && setTimeout(() => {
        window.location.reload();
      }, 150)) : window.location.reload();
    }, 500);
  };
  return /* @__PURE__ */ p.jsxDEV("nav", { className: `fixed top-0 left-0 w-full z-50 transition-all duration-500 ${V ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"}`, children: [
    /* @__PURE__ */ p.jsxDEV(s5, { isScrolled: V, isHomepage: o }, void 0, !1, {
      fileName: "/app/applet/src/components/Navbar.tsx",
      lineNumber: 331,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ p.jsxDEV("div", { className: "max-w-full mx-auto w-full px-4 md:px-8 lg:px-10 xl:px-12 2xl:px-[4%] h-[120px] lg:h-[100px] xl:h-[120px] 2xl:h-[140px] flex items-center justify-between gap-4", children: [
      /* @__PURE__ */ p.jsxDEV("div", { className: "flex-shrink-0", children: /* @__PURE__ */ p.jsxDEV(
        "a",
        {
          href: N,
          onClick: (B) => {
            w || (B.preventDefault(), window.history.pushState(null, "", "/"), window.location.hash = "", window.dispatchEvent(new Event("popstate")), window.scrollTo({ top: 0, behavior: "smooth" }));
          },
          className: "flex items-center gap-3 cursor-pointer",
          children: /* @__PURE__ */ p.jsxDEV(
            "img",
            {
              src: V || m ? bg : a5,
              alt: "Chelson Gordon Logo",
              className: `mt-0 md:-mt-[20px] lg:mt-[5px] h-[145px] md:h-[125px] lg:h-[110px] xl:h-[145px] 2xl:h-[170px] w-auto transition-all transform origin-left ${!V && m ? "brightness-0 invert" : ""}`,
              onError: () => !V && f(!0),
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
        /* @__PURE__ */ p.jsxDEV("div", { className: "flex items-center gap-[30px] min-[1600px]:gap-[40px] mr-1 xl:mr-2 min-[1600px]:mr-2 flex-shrink-0", children: vg.map((B) => {
          const z = B.href.startsWith("/") || B.href.startsWith("#"), G = B.name === "Careers";
          return /* @__PURE__ */ p.jsxDEV(
            "a",
            {
              href: B.href,
              target: z ? void 0 : "_blank",
              rel: z ? void 0 : "noopener noreferrer",
              onClick: (L) => {
                z && (L.preventDefault(), B.href.startsWith("#") ? window.location.hash = B.href : (window.history.pushState(null, "", B.href), window.dispatchEvent(new Event("popstate"))), window.scrollTo({ top: 0, behavior: "smooth" }));
              },
              className: `${G ? "hidden min-[1600px]:inline-block" : "inline-block"} text-[10px] xl:text-xs font-bold uppercase tracking-widest transition-all hover:text-accent whitespace-nowrap ${V ? "text-primary" : "text-white"}`,
              children: B.name
            },
            B.name,
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
              className: `flex items-center gap-1 px-2.5 py-1.5 min-[1600px]:px-4 min-[1600px]:py-2.5 rounded-[18px] min-[1600px]:rounded-xl text-[9px] min-[1600px]:text-[11px] font-bold uppercase tracking-wider min-[1600px]:tracking-widest transition-all whitespace-nowrap shadow-md border border-transparent ${V ? "bg-primary text-white hover:bg-accent hover:text-primary" : "bg-accent text-primary hover:bg-primary hover:text-white"}`,
              children: [
                "Get in Touch ",
                /* @__PURE__ */ p.jsxDEV(ga, { className: "w-3 h-3 min-[1600px]:w-3.5 min-[1600px]:h-3.5" }, void 0, !1, {
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
              className: `flex items-center gap-1 px-2.5 py-1.5 min-[1600px]:px-4 min-[1600px]:py-2.5 rounded-[18px] min-[1600px]:rounded-xl text-[9px] min-[1600px]:text-[11px] font-bold uppercase tracking-wider min-[1600px]:tracking-widest transition-all whitespace-nowrap shadow-sm border border-transparent ${V ? "bg-accent text-primary hover:bg-primary hover:text-white" : "bg-primary text-white hover:bg-accent hover:text-primary"}`,
              children: [
                "Company Profile ",
                /* @__PURE__ */ p.jsxDEV(wl, { className: "w-3 h-3 min-[1600px]:w-3.5 min-[1600px]:h-3.5" }, void 0, !1, {
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
              className: `flex items-center gap-1 px-2.5 py-1.5 min-[1600px]:px-4 min-[1600px]:py-2.5 rounded-[18px] min-[1600px]:rounded-xl text-[9px] min-[1600px]:text-[11px] font-bold uppercase tracking-wider min-[1600px]:tracking-widest transition-all whitespace-nowrap shadow-sm border border-transparent ${V ? "bg-primary text-white hover:bg-accent hover:text-primary" : "bg-accent text-primary hover:bg-primary hover:text-white"}`,
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
                /* @__PURE__ */ p.jsxDEV(Kc, { className: "w-3 h-3 min-[1600px]:w-3.5 min-[1600px]:h-3.5" }, void 0, !1, {
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
              className: `flex items-center gap-1 px-2.5 py-1.5 min-[1600px]:px-4 min-[1600px]:py-2.5 rounded-[18px] min-[1600px]:rounded-xl text-[9px] min-[1600px]:text-[11px] font-bold uppercase tracking-wider min-[1600px]:tracking-widest transition-all whitespace-nowrap border shadow-sm ${V ? "bg-primary/5 text-primary border-primary/10 hover:bg-primary/10" : "bg-white/5 text-white border-white/10 hover:bg-white/10 backdrop-blur-md"}`,
              children: [
                "CG Resources ",
                /* @__PURE__ */ p.jsxDEV(fg, { className: "w-3 h-3 min-[1600px]:w-3.5 min-[1600px]:h-3.5" }, void 0, !1, {
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
            l5,
            {
              isScrolled: V,
              selectedLang: g,
              onLanguageChange: P
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
          onClick: () => b(!h),
          "aria-label": "Toggle Navigation Menu",
          children: h ? /* @__PURE__ */ p.jsxDEV(fv, { className: V || h ? "text-primary" : "text-white", size: 32 }, void 0, !1, {
            fileName: "/app/applet/src/components/Navbar.tsx",
            lineNumber: 473,
            columnNumber: 29
          }, void 0) : /* @__PURE__ */ p.jsxDEV(AE, { className: V ? "text-primary" : "text-white", size: 32 }, void 0, !1, {
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
    /* @__PURE__ */ p.jsxDEV(Dl, { children: h && /* @__PURE__ */ p.jsxDEV(
      Oe.div,
      {
        initial: { opacity: 0, x: "100%" },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: "100%" },
        transition: { type: "spring", damping: 30, stiffness: 300 },
        className: "fixed inset-0 bg-white z-50 lg:hidden overflow-y-auto h-screen",
        children: /* @__PURE__ */ p.jsxDEV("div", { className: "flex flex-col p-6 pt-20 pb-10", children: [
          /* @__PURE__ */ p.jsxDEV("div", { className: "flex flex-col gap-5 mb-10", children: vg.map((B, z) => {
            const G = B.href.startsWith("/") || B.href.startsWith("#");
            return /* @__PURE__ */ p.jsxDEV(
              Oe.a,
              {
                initial: { opacity: 0, x: 20 },
                animate: { opacity: 1, x: 0 },
                transition: { delay: 0.1 + z * 0.05 },
                href: B.href,
                target: G ? void 0 : "_blank",
                rel: G ? void 0 : "noopener noreferrer",
                onClick: (L) => {
                  b(!1), G && (L.preventDefault(), B.href.startsWith("#") ? window.location.hash = B.href : (window.history.pushState(null, "", B.href), window.dispatchEvent(new Event("popstate"))), window.scrollTo({ top: 0, behavior: "smooth" }));
                },
                className: "text-4xl font-black text-primary uppercase tracking-tighter hover:text-accent transition-colors",
                children: B.name
              },
              B.name,
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
                onClick: () => b(!1),
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { delay: 0.3 },
                whileTap: { scale: 0.95 },
                className: "w-full flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-primary text-white font-extrabold uppercase tracking-widest text-sm shadow-xl",
                children: [
                  "Get in Touch ",
                  /* @__PURE__ */ p.jsxDEV(ga, { className: "w-5 h-5" }, void 0, !1, {
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
                    /* @__PURE__ */ p.jsxDEV(wl, { className: "w-4 h-4" }, void 0, !1, {
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
                    /* @__PURE__ */ p.jsxDEV(fg, { className: "w-4 h-4" }, void 0, !1, {
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
                onClick: () => b(!1),
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { delay: 0.55 },
                whileTap: { scale: 0.95 },
                className: "w-full flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-accent text-primary font-extrabold uppercase tracking-widest text-sm shadow-xl",
                children: [
                  "Leave a Feedback ",
                  /* @__PURE__ */ p.jsxDEV(Kc, { className: "w-5 h-5" }, void 0, !1, {
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
                /* @__PURE__ */ p.jsxDEV(uv, { className: "w-4 h-4 text-accent" }, void 0, !1, {
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
                    P("EN", "English"), b(!1);
                  },
                  className: "w-full flex items-center justify-center gap-2 mb-3.5 py-3.5 rounded-xl border border-orange-200 bg-orange-50/50 text-orange-950 text-[10px] font-extrabold uppercase tracking-widest transition-all active:scale-95 notranslate",
                  translate: "no",
                  children: [
                    /* @__PURE__ */ p.jsxDEV(cv, { className: "w-3.5 h-3.5 text-orange-500" }, void 0, !1, {
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
              /* @__PURE__ */ p.jsxDEV("div", { className: "grid grid-cols-2 gap-2", children: Ic.map((B, z) => /* @__PURE__ */ p.jsxDEV(
                Oe.button,
                {
                  initial: { opacity: 0, y: 10 },
                  animate: { opacity: 1, y: 0 },
                  transition: { delay: 0.6 + z * 0.05 },
                  onClick: () => {
                    P(B.code, B.name), b(!1);
                  },
                  className: `flex flex-col items-center justify-center gap-1.5 py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all active:scale-95 notranslate ${g === B.name ? "bg-primary text-white shadow-lg" : "bg-primary/5 text-primary border border-primary/10 hover:bg-accent"}`,
                  translate: "no",
                  children: [
                    /* @__PURE__ */ p.jsxDEV("span", { className: "whitespace-nowrap", children: B.english }, void 0, !1, {
                      fileName: "/app/applet/src/components/Navbar.tsx",
                      lineNumber: 619,
                      columnNumber: 25
                    }, void 0),
                    /* @__PURE__ */ p.jsxDEV("div", { className: `w-6 h-[1px] ${g === B.name ? "bg-white/30" : "bg-primary/20"}` }, void 0, !1, {
                      fileName: "/app/applet/src/components/Navbar.tsx",
                      lineNumber: 620,
                      columnNumber: 25
                    }, void 0),
                    /* @__PURE__ */ p.jsxDEV("span", { className: `text-[11px] font-bold normal-case tracking-normal select-none ${g === B.name ? "text-white" : "text-primary"}`, children: B.native }, void 0, !1, {
                      fileName: "/app/applet/src/components/Navbar.tsx",
                      lineNumber: 621,
                      columnNumber: 25
                    }, void 0)
                  ]
                },
                B.code,
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
}, u5 = () => /* @__PURE__ */ p.jsxDEV("footer", { className: "relative pt-3.5 pb-4 md:pt-4.5 md:pb-5.5 overflow-hidden text-primary/80 bg-[#F8FAFC] border-t border-slate-200/60 h-auto font-sans", children: /* @__PURE__ */ p.jsxDEV("div", { className: "max-w-full w-full px-4 sm:px-6 md:px-8 lg:px-12 relative z-10", children: [
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
                  children: /* @__PURE__ */ p.jsxDEV($c, { className: "w-5 h-5" }, void 0, !1, {
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
          children: /* @__PURE__ */ p.jsxDEV(DE, { className: "w-[23px] h-[23px] md:w-[27px] md:h-[27px] text-[#042F61] group-hover:text-white transition-colors" }, void 0, !1, {
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
  const o = Node.prototype.replaceChild;
  Node.prototype.replaceChild = function(r, c) {
    return c.parentNode !== this ? c : o.call(this, r, c);
  };
}
function c5() {
  return /* @__PURE__ */ p.jsxDEV("div", { className: "font-sans min-h-screen flex flex-col justify-between", children: [
    /* @__PURE__ */ p.jsxDEV(r5, { forceSolid: !0, logoHref: "https://chelsongordon.com/", isHomepage: !1 }, void 0, !1, {
      fileName: "/app/applet/src/pd-session-main.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ p.jsxDEV("main", { className: "flex-1", children: /* @__PURE__ */ p.jsxDEV(i5, {}, void 0, !1, {
      fileName: "/app/applet/src/pd-session-main.tsx",
      lineNumber: 41,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "/app/applet/src/pd-session-main.tsx",
      lineNumber: 40,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ p.jsxDEV(u5, {}, void 0, !1, {
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
function ef() {
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
  s.dataset.cgInitialized = "true", J1.createRoot(s).render(
    /* @__PURE__ */ p.jsxDEV(H.StrictMode, { children: /* @__PURE__ */ p.jsxDEV(c5, {}, void 0, !1, {
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
typeof window < "u" && (window.initCgBookPdSession = ef);
document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", ef) : ef();
export {
  ef as default
};
