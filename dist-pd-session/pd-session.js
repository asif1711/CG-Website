var qu = { exports: {} }, Ql = {};
/**
 * @license React
 * react-jsx-dev-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bh;
function h1() {
  if (bh) return Ql;
  bh = 1;
  var i = Symbol.for("react.fragment");
  return Ql.Fragment = i, Ql.jsxDEV = void 0, Ql;
}
var xh;
function g1() {
  return xh || (xh = 1, qu.exports = h1()), qu.exports;
}
var y = g1(), Gu = { exports: {} }, le = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Sh;
function y1() {
  if (Sh) return le;
  Sh = 1;
  var i = Symbol.for("react.transitional.element"), s = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), m = Symbol.for("react.consumer"), d = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), b = Symbol.for("react.suspense"), h = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), x = Symbol.for("react.activity"), S = Symbol.iterator;
  function C(E) {
    return E === null || typeof E != "object" ? null : (E = S && E[S] || E["@@iterator"], typeof E == "function" ? E : null);
  }
  var A = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, j = Object.assign, U = {};
  function L(E, _, Z) {
    this.props = E, this.context = _, this.refs = U, this.updater = Z || A;
  }
  L.prototype.isReactComponent = {}, L.prototype.setState = function(E, _) {
    if (typeof E != "object" && typeof E != "function" && E != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, E, _, "setState");
  }, L.prototype.forceUpdate = function(E) {
    this.updater.enqueueForceUpdate(this, E, "forceUpdate");
  };
  function X() {
  }
  X.prototype = L.prototype;
  function G(E, _, Z) {
    this.props = E, this.context = _, this.refs = U, this.updater = Z || A;
  }
  var q = G.prototype = new X();
  q.constructor = G, j(q, L.prototype), q.isPureReactComponent = !0;
  var F = Array.isArray;
  function ie() {
  }
  var R = { H: null, A: null, T: null, S: null }, H = Object.prototype.hasOwnProperty;
  function $(E, _, Z) {
    var ee = Z.ref;
    return {
      $$typeof: i,
      type: E,
      key: _,
      ref: ee !== void 0 ? ee : null,
      props: Z
    };
  }
  function Q(E, _) {
    return $(E.type, _, E.props);
  }
  function se(E) {
    return typeof E == "object" && E !== null && E.$$typeof === i;
  }
  function ge(E) {
    var _ = { "=": "=0", ":": "=2" };
    return "$" + E.replace(/[=:]/g, function(Z) {
      return _[Z];
    });
  }
  var Ge = /\/+/g;
  function ze(E, _) {
    return typeof E == "object" && E !== null && E.key != null ? ge("" + E.key) : _.toString(36);
  }
  function be(E) {
    switch (E.status) {
      case "fulfilled":
        return E.value;
      case "rejected":
        throw E.reason;
      default:
        switch (typeof E.status == "string" ? E.then(ie, ie) : (E.status = "pending", E.then(
          function(_) {
            E.status === "pending" && (E.status = "fulfilled", E.value = _);
          },
          function(_) {
            E.status === "pending" && (E.status = "rejected", E.reason = _);
          }
        )), E.status) {
          case "fulfilled":
            return E.value;
          case "rejected":
            throw E.reason;
        }
    }
    throw E;
  }
  function w(E, _, Z, ee, oe) {
    var fe = typeof E;
    (fe === "undefined" || fe === "boolean") && (E = null);
    var De = !1;
    if (E === null) De = !0;
    else
      switch (fe) {
        case "bigint":
        case "string":
        case "number":
          De = !0;
          break;
        case "object":
          switch (E.$$typeof) {
            case i:
            case s:
              De = !0;
              break;
            case v:
              return De = E._init, w(
                De(E._payload),
                _,
                Z,
                ee,
                oe
              );
          }
      }
    if (De)
      return oe = oe(E), De = ee === "" ? "." + ze(E, 0) : ee, F(oe) ? (Z = "", De != null && (Z = De.replace(Ge, "$&/") + "/"), w(oe, _, Z, "", function(va) {
        return va;
      })) : oe != null && (se(oe) && (oe = Q(
        oe,
        Z + (oe.key == null || E && E.key === oe.key ? "" : ("" + oe.key).replace(
          Ge,
          "$&/"
        ) + "/") + De
      )), _.push(oe)), 1;
    De = 0;
    var ot = ee === "" ? "." : ee + ":";
    if (F(E))
      for (var Le = 0; Le < E.length; Le++)
        ee = E[Le], fe = ot + ze(ee, Le), De += w(
          ee,
          _,
          Z,
          fe,
          oe
        );
    else if (Le = C(E), typeof Le == "function")
      for (E = Le.call(E), Le = 0; !(ee = E.next()).done; )
        ee = ee.value, fe = ot + ze(ee, Le++), De += w(
          ee,
          _,
          Z,
          fe,
          oe
        );
    else if (fe === "object") {
      if (typeof E.then == "function")
        return w(
          be(E),
          _,
          Z,
          ee,
          oe
        );
      throw _ = String(E), Error(
        "Objects are not valid as a React child (found: " + (_ === "[object Object]" ? "object with keys {" + Object.keys(E).join(", ") + "}" : _) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return De;
  }
  function K(E, _, Z) {
    if (E == null) return E;
    var ee = [], oe = 0;
    return w(E, ee, "", "", function(fe) {
      return _.call(Z, fe, oe++);
    }), ee;
  }
  function J(E) {
    if (E._status === -1) {
      var _ = E._result;
      _ = _(), _.then(
        function(Z) {
          (E._status === 0 || E._status === -1) && (E._status = 1, E._result = Z);
        },
        function(Z) {
          (E._status === 0 || E._status === -1) && (E._status = 2, E._result = Z);
        }
      ), E._status === -1 && (E._status = 0, E._result = _);
    }
    if (E._status === 1) return E._result.default;
    throw E._result;
  }
  var ue = typeof reportError == "function" ? reportError : function(E) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var _ = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof E == "object" && E !== null && typeof E.message == "string" ? String(E.message) : String(E),
        error: E
      });
      if (!window.dispatchEvent(_)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", E);
      return;
    }
    console.error(E);
  }, ye = {
    map: K,
    forEach: function(E, _, Z) {
      K(
        E,
        function() {
          _.apply(this, arguments);
        },
        Z
      );
    },
    count: function(E) {
      var _ = 0;
      return K(E, function() {
        _++;
      }), _;
    },
    toArray: function(E) {
      return K(E, function(_) {
        return _;
      }) || [];
    },
    only: function(E) {
      if (!se(E))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return E;
    }
  };
  return le.Activity = x, le.Children = ye, le.Component = L, le.Fragment = r, le.Profiler = c, le.PureComponent = G, le.StrictMode = o, le.Suspense = b, le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = R, le.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(E) {
      return R.H.useMemoCache(E);
    }
  }, le.cache = function(E) {
    return function() {
      return E.apply(null, arguments);
    };
  }, le.cacheSignal = function() {
    return null;
  }, le.cloneElement = function(E, _, Z) {
    if (E == null)
      throw Error(
        "The argument must be a React element, but you passed " + E + "."
      );
    var ee = j({}, E.props), oe = E.key;
    if (_ != null)
      for (fe in _.key !== void 0 && (oe = "" + _.key), _)
        !H.call(_, fe) || fe === "key" || fe === "__self" || fe === "__source" || fe === "ref" && _.ref === void 0 || (ee[fe] = _[fe]);
    var fe = arguments.length - 2;
    if (fe === 1) ee.children = Z;
    else if (1 < fe) {
      for (var De = Array(fe), ot = 0; ot < fe; ot++)
        De[ot] = arguments[ot + 2];
      ee.children = De;
    }
    return $(E.type, oe, ee);
  }, le.createContext = function(E) {
    return E = {
      $$typeof: d,
      _currentValue: E,
      _currentValue2: E,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, E.Provider = E, E.Consumer = {
      $$typeof: m,
      _context: E
    }, E;
  }, le.createElement = function(E, _, Z) {
    var ee, oe = {}, fe = null;
    if (_ != null)
      for (ee in _.key !== void 0 && (fe = "" + _.key), _)
        H.call(_, ee) && ee !== "key" && ee !== "__self" && ee !== "__source" && (oe[ee] = _[ee]);
    var De = arguments.length - 2;
    if (De === 1) oe.children = Z;
    else if (1 < De) {
      for (var ot = Array(De), Le = 0; Le < De; Le++)
        ot[Le] = arguments[Le + 2];
      oe.children = ot;
    }
    if (E && E.defaultProps)
      for (ee in De = E.defaultProps, De)
        oe[ee] === void 0 && (oe[ee] = De[ee]);
    return $(E, fe, oe);
  }, le.createRef = function() {
    return { current: null };
  }, le.forwardRef = function(E) {
    return { $$typeof: p, render: E };
  }, le.isValidElement = se, le.lazy = function(E) {
    return {
      $$typeof: v,
      _payload: { _status: -1, _result: E },
      _init: J
    };
  }, le.memo = function(E, _) {
    return {
      $$typeof: h,
      type: E,
      compare: _ === void 0 ? null : _
    };
  }, le.startTransition = function(E) {
    var _ = R.T, Z = {};
    R.T = Z;
    try {
      var ee = E(), oe = R.S;
      oe !== null && oe(Z, ee), typeof ee == "object" && ee !== null && typeof ee.then == "function" && ee.then(ie, ue);
    } catch (fe) {
      ue(fe);
    } finally {
      _ !== null && Z.types !== null && (_.types = Z.types), R.T = _;
    }
  }, le.unstable_useCacheRefresh = function() {
    return R.H.useCacheRefresh();
  }, le.use = function(E) {
    return R.H.use(E);
  }, le.useActionState = function(E, _, Z) {
    return R.H.useActionState(E, _, Z);
  }, le.useCallback = function(E, _) {
    return R.H.useCallback(E, _);
  }, le.useContext = function(E) {
    return R.H.useContext(E);
  }, le.useDebugValue = function() {
  }, le.useDeferredValue = function(E, _) {
    return R.H.useDeferredValue(E, _);
  }, le.useEffect = function(E, _) {
    return R.H.useEffect(E, _);
  }, le.useEffectEvent = function(E) {
    return R.H.useEffectEvent(E);
  }, le.useId = function() {
    return R.H.useId();
  }, le.useImperativeHandle = function(E, _, Z) {
    return R.H.useImperativeHandle(E, _, Z);
  }, le.useInsertionEffect = function(E, _) {
    return R.H.useInsertionEffect(E, _);
  }, le.useLayoutEffect = function(E, _) {
    return R.H.useLayoutEffect(E, _);
  }, le.useMemo = function(E, _) {
    return R.H.useMemo(E, _);
  }, le.useOptimistic = function(E, _) {
    return R.H.useOptimistic(E, _);
  }, le.useReducer = function(E, _, Z) {
    return R.H.useReducer(E, _, Z);
  }, le.useRef = function(E) {
    return R.H.useRef(E);
  }, le.useState = function(E) {
    return R.H.useState(E);
  }, le.useSyncExternalStore = function(E, _, Z) {
    return R.H.useSyncExternalStore(
      E,
      _,
      Z
    );
  }, le.useTransition = function() {
    return R.H.useTransition();
  }, le.version = "19.2.6", le;
}
var Nh;
function Gc() {
  return Nh || (Nh = 1, Gu.exports = y1()), Gu.exports;
}
var Y = Gc(), Yu = { exports: {} }, fs = {}, Xu = { exports: {} }, Ku = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Dh;
function v1() {
  return Dh || (Dh = 1, (function(i) {
    function s(w, K) {
      var J = w.length;
      w.push(K);
      e: for (; 0 < J; ) {
        var ue = J - 1 >>> 1, ye = w[ue];
        if (0 < c(ye, K))
          w[ue] = K, w[J] = ye, J = ue;
        else break e;
      }
    }
    function r(w) {
      return w.length === 0 ? null : w[0];
    }
    function o(w) {
      if (w.length === 0) return null;
      var K = w[0], J = w.pop();
      if (J !== K) {
        w[0] = J;
        e: for (var ue = 0, ye = w.length, E = ye >>> 1; ue < E; ) {
          var _ = 2 * (ue + 1) - 1, Z = w[_], ee = _ + 1, oe = w[ee];
          if (0 > c(Z, J))
            ee < ye && 0 > c(oe, Z) ? (w[ue] = oe, w[ee] = J, ue = ee) : (w[ue] = Z, w[_] = J, ue = _);
          else if (ee < ye && 0 > c(oe, J))
            w[ue] = oe, w[ee] = J, ue = ee;
          else break e;
        }
      }
      return K;
    }
    function c(w, K) {
      var J = w.sortIndex - K.sortIndex;
      return J !== 0 ? J : w.id - K.id;
    }
    if (i.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var m = performance;
      i.unstable_now = function() {
        return m.now();
      };
    } else {
      var d = Date, p = d.now();
      i.unstable_now = function() {
        return d.now() - p;
      };
    }
    var b = [], h = [], v = 1, x = null, S = 3, C = !1, A = !1, j = !1, U = !1, L = typeof setTimeout == "function" ? setTimeout : null, X = typeof clearTimeout == "function" ? clearTimeout : null, G = typeof setImmediate < "u" ? setImmediate : null;
    function q(w) {
      for (var K = r(h); K !== null; ) {
        if (K.callback === null) o(h);
        else if (K.startTime <= w)
          o(h), K.sortIndex = K.expirationTime, s(b, K);
        else break;
        K = r(h);
      }
    }
    function F(w) {
      if (j = !1, q(w), !A)
        if (r(b) !== null)
          A = !0, ie || (ie = !0, ge());
        else {
          var K = r(h);
          K !== null && be(F, K.startTime - w);
        }
    }
    var ie = !1, R = -1, H = 5, $ = -1;
    function Q() {
      return U ? !0 : !(i.unstable_now() - $ < H);
    }
    function se() {
      if (U = !1, ie) {
        var w = i.unstable_now();
        $ = w;
        var K = !0;
        try {
          e: {
            A = !1, j && (j = !1, X(R), R = -1), C = !0;
            var J = S;
            try {
              t: {
                for (q(w), x = r(b); x !== null && !(x.expirationTime > w && Q()); ) {
                  var ue = x.callback;
                  if (typeof ue == "function") {
                    x.callback = null, S = x.priorityLevel;
                    var ye = ue(
                      x.expirationTime <= w
                    );
                    if (w = i.unstable_now(), typeof ye == "function") {
                      x.callback = ye, q(w), K = !0;
                      break t;
                    }
                    x === r(b) && o(b), q(w);
                  } else o(b);
                  x = r(b);
                }
                if (x !== null) K = !0;
                else {
                  var E = r(h);
                  E !== null && be(
                    F,
                    E.startTime - w
                  ), K = !1;
                }
              }
              break e;
            } finally {
              x = null, S = J, C = !1;
            }
            K = void 0;
          }
        } finally {
          K ? ge() : ie = !1;
        }
      }
    }
    var ge;
    if (typeof G == "function")
      ge = function() {
        G(se);
      };
    else if (typeof MessageChannel < "u") {
      var Ge = new MessageChannel(), ze = Ge.port2;
      Ge.port1.onmessage = se, ge = function() {
        ze.postMessage(null);
      };
    } else
      ge = function() {
        L(se, 0);
      };
    function be(w, K) {
      R = L(function() {
        w(i.unstable_now());
      }, K);
    }
    i.unstable_IdlePriority = 5, i.unstable_ImmediatePriority = 1, i.unstable_LowPriority = 4, i.unstable_NormalPriority = 3, i.unstable_Profiling = null, i.unstable_UserBlockingPriority = 2, i.unstable_cancelCallback = function(w) {
      w.callback = null;
    }, i.unstable_forceFrameRate = function(w) {
      0 > w || 125 < w ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : H = 0 < w ? Math.floor(1e3 / w) : 5;
    }, i.unstable_getCurrentPriorityLevel = function() {
      return S;
    }, i.unstable_next = function(w) {
      switch (S) {
        case 1:
        case 2:
        case 3:
          var K = 3;
          break;
        default:
          K = S;
      }
      var J = S;
      S = K;
      try {
        return w();
      } finally {
        S = J;
      }
    }, i.unstable_requestPaint = function() {
      U = !0;
    }, i.unstable_runWithPriority = function(w, K) {
      switch (w) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          w = 3;
      }
      var J = S;
      S = w;
      try {
        return K();
      } finally {
        S = J;
      }
    }, i.unstable_scheduleCallback = function(w, K, J) {
      var ue = i.unstable_now();
      switch (typeof J == "object" && J !== null ? (J = J.delay, J = typeof J == "number" && 0 < J ? ue + J : ue) : J = ue, w) {
        case 1:
          var ye = -1;
          break;
        case 2:
          ye = 250;
          break;
        case 5:
          ye = 1073741823;
          break;
        case 4:
          ye = 1e4;
          break;
        default:
          ye = 5e3;
      }
      return ye = J + ye, w = {
        id: v++,
        callback: K,
        priorityLevel: w,
        startTime: J,
        expirationTime: ye,
        sortIndex: -1
      }, J > ue ? (w.sortIndex = J, s(h, w), r(b) === null && w === r(h) && (j ? (X(R), R = -1) : j = !0, be(F, J - ue))) : (w.sortIndex = ye, s(b, w), A || C || (A = !0, ie || (ie = !0, ge()))), w;
    }, i.unstable_shouldYield = Q, i.unstable_wrapCallback = function(w) {
      var K = S;
      return function() {
        var J = S;
        S = K;
        try {
          return w.apply(this, arguments);
        } finally {
          S = J;
        }
      };
    };
  })(Ku)), Ku;
}
var Eh;
function b1() {
  return Eh || (Eh = 1, Xu.exports = v1()), Xu.exports;
}
var Qu = { exports: {} }, lt = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Th;
function x1() {
  if (Th) return lt;
  Th = 1;
  var i = Gc();
  function s(b) {
    var h = "https://react.dev/errors/" + b;
    if (1 < arguments.length) {
      h += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var v = 2; v < arguments.length; v++)
        h += "&args[]=" + encodeURIComponent(arguments[v]);
    }
    return "Minified React error #" + b + "; visit " + h + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function r() {
  }
  var o = {
    d: {
      f: r,
      r: function() {
        throw Error(s(522));
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
  function m(b, h, v) {
    var x = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: c,
      key: x == null ? null : "" + x,
      children: b,
      containerInfo: h,
      implementation: v
    };
  }
  var d = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function p(b, h) {
    if (b === "font") return "";
    if (typeof h == "string")
      return h === "use-credentials" ? h : "";
  }
  return lt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o, lt.createPortal = function(b, h) {
    var v = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!h || h.nodeType !== 1 && h.nodeType !== 9 && h.nodeType !== 11)
      throw Error(s(299));
    return m(b, h, null, v);
  }, lt.flushSync = function(b) {
    var h = d.T, v = o.p;
    try {
      if (d.T = null, o.p = 2, b) return b();
    } finally {
      d.T = h, o.p = v, o.d.f();
    }
  }, lt.preconnect = function(b, h) {
    typeof b == "string" && (h ? (h = h.crossOrigin, h = typeof h == "string" ? h === "use-credentials" ? h : "" : void 0) : h = null, o.d.C(b, h));
  }, lt.prefetchDNS = function(b) {
    typeof b == "string" && o.d.D(b);
  }, lt.preinit = function(b, h) {
    if (typeof b == "string" && h && typeof h.as == "string") {
      var v = h.as, x = p(v, h.crossOrigin), S = typeof h.integrity == "string" ? h.integrity : void 0, C = typeof h.fetchPriority == "string" ? h.fetchPriority : void 0;
      v === "style" ? o.d.S(
        b,
        typeof h.precedence == "string" ? h.precedence : void 0,
        {
          crossOrigin: x,
          integrity: S,
          fetchPriority: C
        }
      ) : v === "script" && o.d.X(b, {
        crossOrigin: x,
        integrity: S,
        fetchPriority: C,
        nonce: typeof h.nonce == "string" ? h.nonce : void 0
      });
    }
  }, lt.preinitModule = function(b, h) {
    if (typeof b == "string")
      if (typeof h == "object" && h !== null) {
        if (h.as == null || h.as === "script") {
          var v = p(
            h.as,
            h.crossOrigin
          );
          o.d.M(b, {
            crossOrigin: v,
            integrity: typeof h.integrity == "string" ? h.integrity : void 0,
            nonce: typeof h.nonce == "string" ? h.nonce : void 0
          });
        }
      } else h == null && o.d.M(b);
  }, lt.preload = function(b, h) {
    if (typeof b == "string" && typeof h == "object" && h !== null && typeof h.as == "string") {
      var v = h.as, x = p(v, h.crossOrigin);
      o.d.L(b, v, {
        crossOrigin: x,
        integrity: typeof h.integrity == "string" ? h.integrity : void 0,
        nonce: typeof h.nonce == "string" ? h.nonce : void 0,
        type: typeof h.type == "string" ? h.type : void 0,
        fetchPriority: typeof h.fetchPriority == "string" ? h.fetchPriority : void 0,
        referrerPolicy: typeof h.referrerPolicy == "string" ? h.referrerPolicy : void 0,
        imageSrcSet: typeof h.imageSrcSet == "string" ? h.imageSrcSet : void 0,
        imageSizes: typeof h.imageSizes == "string" ? h.imageSizes : void 0,
        media: typeof h.media == "string" ? h.media : void 0
      });
    }
  }, lt.preloadModule = function(b, h) {
    if (typeof b == "string")
      if (h) {
        var v = p(h.as, h.crossOrigin);
        o.d.m(b, {
          as: typeof h.as == "string" && h.as !== "script" ? h.as : void 0,
          crossOrigin: v,
          integrity: typeof h.integrity == "string" ? h.integrity : void 0
        });
      } else o.d.m(b);
  }, lt.requestFormReset = function(b) {
    o.d.r(b);
  }, lt.unstable_batchedUpdates = function(b, h) {
    return b(h);
  }, lt.useFormState = function(b, h, v) {
    return d.H.useFormState(b, h, v);
  }, lt.useFormStatus = function() {
    return d.H.useHostTransitionStatus();
  }, lt.version = "19.2.6", lt;
}
var Ch;
function S1() {
  if (Ch) return Qu.exports;
  Ch = 1;
  function i() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (s) {
        console.error(s);
      }
  }
  return i(), Qu.exports = x1(), Qu.exports;
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
var Vh;
function N1() {
  if (Vh) return fs;
  Vh = 1;
  var i = b1(), s = Gc(), r = S1();
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
  function d(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function p(e) {
    if (e.tag === 31) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function b(e) {
    if (m(e) !== e)
      throw Error(o(188));
  }
  function h(e) {
    var t = e.alternate;
    if (!t) {
      if (t = m(e), t === null) throw Error(o(188));
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
        throw Error(o(188));
      }
      if (n.return !== a.return) n = l, a = u;
      else {
        for (var f = !1, g = l.child; g; ) {
          if (g === n) {
            f = !0, n = l, a = u;
            break;
          }
          if (g === a) {
            f = !0, a = l, n = u;
            break;
          }
          g = g.sibling;
        }
        if (!f) {
          for (g = u.child; g; ) {
            if (g === n) {
              f = !0, n = u, a = l;
              break;
            }
            if (g === a) {
              f = !0, a = u, n = l;
              break;
            }
            g = g.sibling;
          }
          if (!f) throw Error(o(189));
        }
      }
      if (n.alternate !== a) throw Error(o(190));
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
  var x = Object.assign, S = Symbol.for("react.element"), C = Symbol.for("react.transitional.element"), A = Symbol.for("react.portal"), j = Symbol.for("react.fragment"), U = Symbol.for("react.strict_mode"), L = Symbol.for("react.profiler"), X = Symbol.for("react.consumer"), G = Symbol.for("react.context"), q = Symbol.for("react.forward_ref"), F = Symbol.for("react.suspense"), ie = Symbol.for("react.suspense_list"), R = Symbol.for("react.memo"), H = Symbol.for("react.lazy"), $ = Symbol.for("react.activity"), Q = Symbol.for("react.memo_cache_sentinel"), se = Symbol.iterator;
  function ge(e) {
    return e === null || typeof e != "object" ? null : (e = se && e[se] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var Ge = Symbol.for("react.client.reference");
  function ze(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === Ge ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case j:
        return "Fragment";
      case L:
        return "Profiler";
      case U:
        return "StrictMode";
      case F:
        return "Suspense";
      case ie:
        return "SuspenseList";
      case $:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case A:
          return "Portal";
        case G:
          return e.displayName || "Context";
        case X:
          return (e._context.displayName || "Context") + ".Consumer";
        case q:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case R:
          return t = e.displayName || null, t !== null ? t : ze(e.type) || "Memo";
        case H:
          t = e._payload, e = e._init;
          try {
            return ze(e(t));
          } catch {
          }
      }
    return null;
  }
  var be = Array.isArray, w = s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, K = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, J = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, ue = [], ye = -1;
  function E(e) {
    return { current: e };
  }
  function _(e) {
    0 > ye || (e.current = ue[ye], ue[ye] = null, ye--);
  }
  function Z(e, t) {
    ye++, ue[ye] = e.current, e.current = t;
  }
  var ee = E(null), oe = E(null), fe = E(null), De = E(null);
  function ot(e, t) {
    switch (Z(fe, t), Z(oe, e), Z(ee, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? qp(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI)
          t = qp(t), e = Gp(t, e);
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
    _(ee), Z(ee, e);
  }
  function Le() {
    _(ee), _(oe), _(fe);
  }
  function va(e) {
    e.memoizedState !== null && Z(De, e);
    var t = ee.current, n = Gp(t, e.type);
    t !== n && (Z(oe, e), Z(ee, n));
  }
  function As(e) {
    oe.current === e && (_(ee), _(oe)), De.current === e && (_(De), os._currentValue = J);
  }
  var Eo, vf;
  function Wn(e) {
    if (Eo === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        Eo = t && t[1] || "", vf = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Eo + e + vf;
  }
  var To = !1;
  function Co(e, t) {
    if (!e || To) return "";
    To = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var O = function() {
                throw Error();
              };
              if (Object.defineProperty(O.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(O, []);
                } catch (M) {
                  var k = M;
                }
                Reflect.construct(e, [], O);
              } else {
                try {
                  O.call();
                } catch (M) {
                  k = M;
                }
                e.call(O.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (M) {
                k = M;
              }
              (O = e()) && typeof O.catch == "function" && O.catch(function() {
              });
            }
          } catch (M) {
            if (M && k && typeof M.stack == "string")
              return [M.stack, k.stack];
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
      var u = a.DetermineComponentFrameRoot(), f = u[0], g = u[1];
      if (f && g) {
        var N = f.split(`
`), B = g.split(`
`);
        for (l = a = 0; a < N.length && !N[a].includes("DetermineComponentFrameRoot"); )
          a++;
        for (; l < B.length && !B[l].includes(
          "DetermineComponentFrameRoot"
        ); )
          l++;
        if (a === N.length || l === B.length)
          for (a = N.length - 1, l = B.length - 1; 1 <= a && 0 <= l && N[a] !== B[l]; )
            l--;
        for (; 1 <= a && 0 <= l; a--, l--)
          if (N[a] !== B[l]) {
            if (a !== 1 || l !== 1)
              do
                if (a--, l--, 0 > l || N[a] !== B[l]) {
                  var P = `
` + N[a].replace(" at new ", " at ");
                  return e.displayName && P.includes("<anonymous>") && (P = P.replace("<anonymous>", e.displayName)), P;
                }
              while (1 <= a && 0 <= l);
            break;
          }
      }
    } finally {
      To = !1, Error.prepareStackTrace = n;
    }
    return (n = e ? e.displayName || e.name : "") ? Wn(n) : "";
  }
  function Ky(e, t) {
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
        return Co(e.type, !1);
      case 11:
        return Co(e.type.render, !1);
      case 1:
        return Co(e.type, !0);
      case 31:
        return Wn("Activity");
      default:
        return "";
    }
  }
  function bf(e) {
    try {
      var t = "", n = null;
      do
        t += Ky(e, n), n = e, e = e.return;
      while (e);
      return t;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  var Vo = Object.prototype.hasOwnProperty, Bo = i.unstable_scheduleCallback, Ao = i.unstable_cancelCallback, Qy = i.unstable_shouldYield, Zy = i.unstable_requestPaint, bt = i.unstable_now, Fy = i.unstable_getCurrentPriorityLevel, xf = i.unstable_ImmediatePriority, Sf = i.unstable_UserBlockingPriority, ks = i.unstable_NormalPriority, Jy = i.unstable_LowPriority, Nf = i.unstable_IdlePriority, $y = i.log, Wy = i.unstable_setDisableYieldValue, ba = null, xt = null;
  function Nn(e) {
    if (typeof $y == "function" && Wy(e), xt && typeof xt.setStrictMode == "function")
      try {
        xt.setStrictMode(ba, e);
      } catch {
      }
  }
  var St = Math.clz32 ? Math.clz32 : tv, Iy = Math.log, ev = Math.LN2;
  function tv(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Iy(e) / ev | 0) | 0;
  }
  var ws = 256, Ms = 262144, Ps = 4194304;
  function In(e) {
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
  function js(e, t, n) {
    var a = e.pendingLanes;
    if (a === 0) return 0;
    var l = 0, u = e.suspendedLanes, f = e.pingedLanes;
    e = e.warmLanes;
    var g = a & 134217727;
    return g !== 0 ? (a = g & ~u, a !== 0 ? l = In(a) : (f &= g, f !== 0 ? l = In(f) : n || (n = g & ~e, n !== 0 && (l = In(n))))) : (g = a & ~u, g !== 0 ? l = In(g) : f !== 0 ? l = In(f) : n || (n = a & ~e, n !== 0 && (l = In(n)))), l === 0 ? 0 : t !== 0 && t !== l && (t & u) === 0 && (u = l & -l, n = t & -t, u >= n || u === 32 && (n & 4194048) !== 0) ? t : l;
  }
  function xa(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function nv(e, t) {
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
  function Df() {
    var e = Ps;
    return Ps <<= 1, (Ps & 62914560) === 0 && (Ps = 4194304), e;
  }
  function ko(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Sa(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function iv(e, t, n, a, l, u) {
    var f = e.pendingLanes;
    e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0;
    var g = e.entanglements, N = e.expirationTimes, B = e.hiddenUpdates;
    for (n = f & ~n; 0 < n; ) {
      var P = 31 - St(n), O = 1 << P;
      g[P] = 0, N[P] = -1;
      var k = B[P];
      if (k !== null)
        for (B[P] = null, P = 0; P < k.length; P++) {
          var M = k[P];
          M !== null && (M.lane &= -536870913);
        }
      n &= ~O;
    }
    a !== 0 && Ef(e, a, 0), u !== 0 && l === 0 && e.tag !== 0 && (e.suspendedLanes |= u & ~(f & ~t));
  }
  function Ef(e, t, n) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var a = 31 - St(t);
    e.entangledLanes |= t, e.entanglements[a] = e.entanglements[a] | 1073741824 | n & 261930;
  }
  function Tf(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var a = 31 - St(n), l = 1 << a;
      l & t | e[a] & t && (e[a] |= t), n &= ~l;
    }
  }
  function Cf(e, t) {
    var n = t & -t;
    return n = (n & 42) !== 0 ? 1 : wo(n), (n & (e.suspendedLanes | t)) !== 0 ? 0 : n;
  }
  function wo(e) {
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
  function Mo(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Vf() {
    var e = K.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : dh(e.type));
  }
  function Bf(e, t) {
    var n = K.p;
    try {
      return K.p = e, t();
    } finally {
      K.p = n;
    }
  }
  var Dn = Math.random().toString(36).slice(2), Ie = "__reactFiber$" + Dn, ft = "__reactProps$" + Dn, Ei = "__reactContainer$" + Dn, Po = "__reactEvents$" + Dn, av = "__reactListeners$" + Dn, sv = "__reactHandles$" + Dn, Af = "__reactResources$" + Dn, Na = "__reactMarker$" + Dn;
  function jo(e) {
    delete e[Ie], delete e[ft], delete e[Po], delete e[av], delete e[sv];
  }
  function Ti(e) {
    var t = e[Ie];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[Ei] || n[Ie]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
          for (e = Jp(e); e !== null; ) {
            if (n = e[Ie]) return n;
            e = Jp(e);
          }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function Ci(e) {
    if (e = e[Ie] || e[Ei]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function Da(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(o(33));
  }
  function Vi(e) {
    var t = e[Af];
    return t || (t = e[Af] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function $e(e) {
    e[Na] = !0;
  }
  var kf = /* @__PURE__ */ new Set(), wf = {};
  function ei(e, t) {
    Bi(e, t), Bi(e + "Capture", t);
  }
  function Bi(e, t) {
    for (wf[e] = t, e = 0; e < t.length; e++)
      kf.add(t[e]);
  }
  var lv = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Mf = {}, Pf = {};
  function ov(e) {
    return Vo.call(Pf, e) ? !0 : Vo.call(Mf, e) ? !1 : lv.test(e) ? Pf[e] = !0 : (Mf[e] = !0, !1);
  }
  function zs(e, t, n) {
    if (ov(t))
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
  function Rs(e, t, n) {
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
  function tn(e, t, n, a) {
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
  function jf(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function rv(e, t, n) {
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
        set: function(f) {
          n = "" + f, u.call(this, f);
        }
      }), Object.defineProperty(e, t, {
        enumerable: a.enumerable
      }), {
        getValue: function() {
          return n;
        },
        setValue: function(f) {
          n = "" + f;
        },
        stopTracking: function() {
          e._valueTracker = null, delete e[t];
        }
      };
    }
  }
  function zo(e) {
    if (!e._valueTracker) {
      var t = jf(e) ? "checked" : "value";
      e._valueTracker = rv(
        e,
        t,
        "" + e[t]
      );
    }
  }
  function zf(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), a = "";
    return e && (a = jf(e) ? e.checked ? "true" : "false" : e.value), e = a, e !== n ? (t.setValue(e), !0) : !1;
  }
  function Os(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var uv = /[\n"\\]/g;
  function kt(e) {
    return e.replace(
      uv,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Ro(e, t, n, a, l, u, f, g) {
    e.name = "", f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? e.type = f : e.removeAttribute("type"), t != null ? f === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + At(t)) : e.value !== "" + At(t) && (e.value = "" + At(t)) : f !== "submit" && f !== "reset" || e.removeAttribute("value"), t != null ? Oo(e, f, At(t)) : n != null ? Oo(e, f, At(n)) : a != null && e.removeAttribute("value"), l == null && u != null && (e.defaultChecked = !!u), l != null && (e.checked = l && typeof l != "function" && typeof l != "symbol"), g != null && typeof g != "function" && typeof g != "symbol" && typeof g != "boolean" ? e.name = "" + At(g) : e.removeAttribute("name");
  }
  function Rf(e, t, n, a, l, u, f, g) {
    if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (e.type = u), t != null || n != null) {
      if (!(u !== "submit" && u !== "reset" || t != null)) {
        zo(e);
        return;
      }
      n = n != null ? "" + At(n) : "", t = t != null ? "" + At(t) : n, g || t === e.value || (e.value = t), e.defaultValue = t;
    }
    a = a ?? l, a = typeof a != "function" && typeof a != "symbol" && !!a, e.checked = g ? e.checked : !!a, e.defaultChecked = !!a, f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (e.name = f), zo(e);
  }
  function Oo(e, t, n) {
    t === "number" && Os(e.ownerDocument) === e || e.defaultValue === "" + n || (e.defaultValue = "" + n);
  }
  function Ai(e, t, n, a) {
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
  function Of(e, t, n) {
    if (t != null && (t = "" + At(t), t !== e.value && (e.value = t), n == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = n != null ? "" + At(n) : "";
  }
  function _f(e, t, n, a) {
    if (t == null) {
      if (a != null) {
        if (n != null) throw Error(o(92));
        if (be(a)) {
          if (1 < a.length) throw Error(o(93));
          a = a[0];
        }
        n = a;
      }
      n == null && (n = ""), t = n;
    }
    n = At(t), e.defaultValue = n, a = e.textContent, a === n && a !== "" && a !== null && (e.value = a), zo(e);
  }
  function ki(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var cv = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Uf(e, t, n) {
    var a = t.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === "" ? a ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : a ? e.setProperty(t, n) : typeof n != "number" || n === 0 || cv.has(t) ? t === "float" ? e.cssFloat = n : e[t] = ("" + n).trim() : e[t] = n + "px";
  }
  function Lf(e, t, n) {
    if (t != null && typeof t != "object")
      throw Error(o(62));
    if (e = e.style, n != null) {
      for (var a in n)
        !n.hasOwnProperty(a) || t != null && t.hasOwnProperty(a) || (a.indexOf("--") === 0 ? e.setProperty(a, "") : a === "float" ? e.cssFloat = "" : e[a] = "");
      for (var l in t)
        a = t[l], t.hasOwnProperty(l) && n[l] !== a && Uf(e, l, a);
    } else
      for (var u in t)
        t.hasOwnProperty(u) && Uf(e, u, t[u]);
  }
  function _o(e) {
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
  var fv = /* @__PURE__ */ new Map([
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
  ]), dv = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function _s(e) {
    return dv.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function nn() {
  }
  var Uo = null;
  function Lo(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var wi = null, Mi = null;
  function Hf(e) {
    var t = Ci(e);
    if (t && (e = t.stateNode)) {
      var n = e[ft] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (Ro(
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
              'input[name="' + kt(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < n.length; t++) {
              var a = n[t];
              if (a !== e && a.form === e.form) {
                var l = a[ft] || null;
                if (!l) throw Error(o(90));
                Ro(
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
              a = n[t], a.form === e.form && zf(a);
          }
          break e;
        case "textarea":
          Of(e, n.value, n.defaultValue);
          break e;
        case "select":
          t = n.value, t != null && Ai(e, !!n.multiple, t, !1);
      }
    }
  }
  var Ho = !1;
  function qf(e, t, n) {
    if (Ho) return e(t, n);
    Ho = !0;
    try {
      var a = e(t);
      return a;
    } finally {
      if (Ho = !1, (wi !== null || Mi !== null) && (Tl(), wi && (t = wi, e = Mi, Mi = wi = null, Hf(t), e)))
        for (t = 0; t < e.length; t++) Hf(e[t]);
    }
  }
  function Ea(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var a = n[ft] || null;
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
        o(231, t, typeof n)
      );
    return n;
  }
  var an = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), qo = !1;
  if (an)
    try {
      var Ta = {};
      Object.defineProperty(Ta, "passive", {
        get: function() {
          qo = !0;
        }
      }), window.addEventListener("test", Ta, Ta), window.removeEventListener("test", Ta, Ta);
    } catch {
      qo = !1;
    }
  var En = null, Go = null, Us = null;
  function Gf() {
    if (Us) return Us;
    var e, t = Go, n = t.length, a, l = "value" in En ? En.value : En.textContent, u = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++) ;
    var f = n - e;
    for (a = 1; a <= f && t[n - a] === l[u - a]; a++) ;
    return Us = l.slice(e, 1 < a ? 1 - a : void 0);
  }
  function Ls(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Hs() {
    return !0;
  }
  function Yf() {
    return !1;
  }
  function dt(e) {
    function t(n, a, l, u, f) {
      this._reactName = n, this._targetInst = l, this.type = a, this.nativeEvent = u, this.target = f, this.currentTarget = null;
      for (var g in e)
        e.hasOwnProperty(g) && (n = e[g], this[g] = n ? n(u) : u[g]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? Hs : Yf, this.isPropagationStopped = Yf, this;
    }
    return x(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Hs);
      },
      stopPropagation: function() {
        var n = this.nativeEvent;
        n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Hs);
      },
      persist: function() {
      },
      isPersistent: Hs
    }), t;
  }
  var ti = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, qs = dt(ti), Ca = x({}, ti, { view: 0, detail: 0 }), mv = dt(Ca), Yo, Xo, Va, Gs = x({}, Ca, {
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
    getModifierState: Qo,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== Va && (Va && e.type === "mousemove" ? (Yo = e.screenX - Va.screenX, Xo = e.screenY - Va.screenY) : Xo = Yo = 0, Va = e), Yo);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : Xo;
    }
  }), Xf = dt(Gs), pv = x({}, Gs, { dataTransfer: 0 }), hv = dt(pv), gv = x({}, Ca, { relatedTarget: 0 }), Ko = dt(gv), yv = x({}, ti, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), vv = dt(yv), bv = x({}, ti, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), xv = dt(bv), Sv = x({}, ti, { data: 0 }), Kf = dt(Sv), Nv = {
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
  }, Dv = {
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
  }, Ev = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Tv(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Ev[e]) ? !!t[e] : !1;
  }
  function Qo() {
    return Tv;
  }
  var Cv = x({}, Ca, {
    key: function(e) {
      if (e.key) {
        var t = Nv[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = Ls(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Dv[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Qo,
    charCode: function(e) {
      return e.type === "keypress" ? Ls(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? Ls(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), Vv = dt(Cv), Bv = x({}, Gs, {
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
  }), Qf = dt(Bv), Av = x({}, Ca, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Qo
  }), kv = dt(Av), wv = x({}, ti, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Mv = dt(wv), Pv = x({}, Gs, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), jv = dt(Pv), zv = x({}, ti, {
    newState: 0,
    oldState: 0
  }), Rv = dt(zv), Ov = [9, 13, 27, 32], Zo = an && "CompositionEvent" in window, Ba = null;
  an && "documentMode" in document && (Ba = document.documentMode);
  var _v = an && "TextEvent" in window && !Ba, Zf = an && (!Zo || Ba && 8 < Ba && 11 >= Ba), Ff = " ", Jf = !1;
  function $f(e, t) {
    switch (e) {
      case "keyup":
        return Ov.indexOf(t.keyCode) !== -1;
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
  function Wf(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Pi = !1;
  function Uv(e, t) {
    switch (e) {
      case "compositionend":
        return Wf(t);
      case "keypress":
        return t.which !== 32 ? null : (Jf = !0, Ff);
      case "textInput":
        return e = t.data, e === Ff && Jf ? null : e;
      default:
        return null;
    }
  }
  function Lv(e, t) {
    if (Pi)
      return e === "compositionend" || !Zo && $f(e, t) ? (e = Gf(), Us = Go = En = null, Pi = !1, e) : null;
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
        return Zf && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Hv = {
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
  function If(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Hv[e.type] : t === "textarea";
  }
  function ed(e, t, n, a) {
    wi ? Mi ? Mi.push(a) : Mi = [a] : wi = a, t = Ml(t, "onChange"), 0 < t.length && (n = new qs(
      "onChange",
      "change",
      null,
      n,
      a
    ), e.push({ event: n, listeners: t }));
  }
  var Aa = null, ka = null;
  function qv(e) {
    Rp(e, 0);
  }
  function Ys(e) {
    var t = Da(e);
    if (zf(t)) return e;
  }
  function td(e, t) {
    if (e === "change") return t;
  }
  var nd = !1;
  if (an) {
    var Fo;
    if (an) {
      var Jo = "oninput" in document;
      if (!Jo) {
        var id = document.createElement("div");
        id.setAttribute("oninput", "return;"), Jo = typeof id.oninput == "function";
      }
      Fo = Jo;
    } else Fo = !1;
    nd = Fo && (!document.documentMode || 9 < document.documentMode);
  }
  function ad() {
    Aa && (Aa.detachEvent("onpropertychange", sd), ka = Aa = null);
  }
  function sd(e) {
    if (e.propertyName === "value" && Ys(ka)) {
      var t = [];
      ed(
        t,
        ka,
        e,
        Lo(e)
      ), qf(qv, t);
    }
  }
  function Gv(e, t, n) {
    e === "focusin" ? (ad(), Aa = t, ka = n, Aa.attachEvent("onpropertychange", sd)) : e === "focusout" && ad();
  }
  function Yv(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Ys(ka);
  }
  function Xv(e, t) {
    if (e === "click") return Ys(t);
  }
  function Kv(e, t) {
    if (e === "input" || e === "change")
      return Ys(t);
  }
  function Qv(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Nt = typeof Object.is == "function" ? Object.is : Qv;
  function wa(e, t) {
    if (Nt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var n = Object.keys(e), a = Object.keys(t);
    if (n.length !== a.length) return !1;
    for (a = 0; a < n.length; a++) {
      var l = n[a];
      if (!Vo.call(t, l) || !Nt(e[l], t[l]))
        return !1;
    }
    return !0;
  }
  function ld(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function od(e, t) {
    var n = ld(e);
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
      n = ld(n);
    }
  }
  function rd(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? rd(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function ud(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = Os(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Os(e.document);
    }
    return t;
  }
  function $o(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var Zv = an && "documentMode" in document && 11 >= document.documentMode, ji = null, Wo = null, Ma = null, Io = !1;
  function cd(e, t, n) {
    var a = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Io || ji == null || ji !== Os(a) || (a = ji, "selectionStart" in a && $o(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), Ma && wa(Ma, a) || (Ma = a, a = Ml(Wo, "onSelect"), 0 < a.length && (t = new qs(
      "onSelect",
      "select",
      null,
      t,
      n
    ), e.push({ event: t, listeners: a }), t.target = ji)));
  }
  function ni(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var zi = {
    animationend: ni("Animation", "AnimationEnd"),
    animationiteration: ni("Animation", "AnimationIteration"),
    animationstart: ni("Animation", "AnimationStart"),
    transitionrun: ni("Transition", "TransitionRun"),
    transitionstart: ni("Transition", "TransitionStart"),
    transitioncancel: ni("Transition", "TransitionCancel"),
    transitionend: ni("Transition", "TransitionEnd")
  }, er = {}, fd = {};
  an && (fd = document.createElement("div").style, "AnimationEvent" in window || (delete zi.animationend.animation, delete zi.animationiteration.animation, delete zi.animationstart.animation), "TransitionEvent" in window || delete zi.transitionend.transition);
  function ii(e) {
    if (er[e]) return er[e];
    if (!zi[e]) return e;
    var t = zi[e], n;
    for (n in t)
      if (t.hasOwnProperty(n) && n in fd)
        return er[e] = t[n];
    return e;
  }
  var dd = ii("animationend"), md = ii("animationiteration"), pd = ii("animationstart"), Fv = ii("transitionrun"), Jv = ii("transitionstart"), $v = ii("transitioncancel"), hd = ii("transitionend"), gd = /* @__PURE__ */ new Map(), tr = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  tr.push("scrollEnd");
  function Ht(e, t) {
    gd.set(e, t), ei(t, [e]);
  }
  var Xs = typeof reportError == "function" ? reportError : function(e) {
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
  }, wt = [], Ri = 0, nr = 0;
  function Ks() {
    for (var e = Ri, t = nr = Ri = 0; t < e; ) {
      var n = wt[t];
      wt[t++] = null;
      var a = wt[t];
      wt[t++] = null;
      var l = wt[t];
      wt[t++] = null;
      var u = wt[t];
      if (wt[t++] = null, a !== null && l !== null) {
        var f = a.pending;
        f === null ? l.next = l : (l.next = f.next, f.next = l), a.pending = l;
      }
      u !== 0 && yd(n, l, u);
    }
  }
  function Qs(e, t, n, a) {
    wt[Ri++] = e, wt[Ri++] = t, wt[Ri++] = n, wt[Ri++] = a, nr |= a, e.lanes |= a, e = e.alternate, e !== null && (e.lanes |= a);
  }
  function ir(e, t, n, a) {
    return Qs(e, t, n, a), Zs(e);
  }
  function ai(e, t) {
    return Qs(e, null, null, t), Zs(e);
  }
  function yd(e, t, n) {
    e.lanes |= n;
    var a = e.alternate;
    a !== null && (a.lanes |= n);
    for (var l = !1, u = e.return; u !== null; )
      u.childLanes |= n, a = u.alternate, a !== null && (a.childLanes |= n), u.tag === 22 && (e = u.stateNode, e === null || e._visibility & 1 || (l = !0)), e = u, u = u.return;
    return e.tag === 3 ? (u = e.stateNode, l && t !== null && (l = 31 - St(n), e = u.hiddenUpdates, a = e[l], a === null ? e[l] = [t] : a.push(t), t.lane = n | 536870912), u) : null;
  }
  function Zs(e) {
    if (50 < es)
      throw es = 0, du = null, Error(o(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var Oi = {};
  function Wv(e, t, n, a) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Dt(e, t, n, a) {
    return new Wv(e, t, n, a);
  }
  function ar(e) {
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
  function vd(e, t) {
    e.flags &= 65011714;
    var n = e.alternate;
    return n === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = n.childLanes, e.lanes = n.lanes, e.child = n.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue, e.type = n.type, t = n.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), e;
  }
  function Fs(e, t, n, a, l, u) {
    var f = 0;
    if (a = e, typeof e == "function") ar(e) && (f = 1);
    else if (typeof e == "string")
      f = i1(
        e,
        n,
        ee.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case $:
          return e = Dt(31, n, t, l), e.elementType = $, e.lanes = u, e;
        case j:
          return si(n.children, l, u, t);
        case U:
          f = 8, l |= 24;
          break;
        case L:
          return e = Dt(12, n, t, l | 2), e.elementType = L, e.lanes = u, e;
        case F:
          return e = Dt(13, n, t, l), e.elementType = F, e.lanes = u, e;
        case ie:
          return e = Dt(19, n, t, l), e.elementType = ie, e.lanes = u, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case G:
                f = 10;
                break e;
              case X:
                f = 9;
                break e;
              case q:
                f = 11;
                break e;
              case R:
                f = 14;
                break e;
              case H:
                f = 16, a = null;
                break e;
            }
          f = 29, n = Error(
            o(130, e === null ? "null" : typeof e, "")
          ), a = null;
      }
    return t = Dt(f, n, t, l), t.elementType = e, t.type = a, t.lanes = u, t;
  }
  function si(e, t, n, a) {
    return e = Dt(7, e, a, t), e.lanes = n, e;
  }
  function sr(e, t, n) {
    return e = Dt(6, e, null, t), e.lanes = n, e;
  }
  function bd(e) {
    var t = Dt(18, null, null, 0);
    return t.stateNode = e, t;
  }
  function lr(e, t, n) {
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
  var xd = /* @__PURE__ */ new WeakMap();
  function Mt(e, t) {
    if (typeof e == "object" && e !== null) {
      var n = xd.get(e);
      return n !== void 0 ? n : (t = {
        value: e,
        source: t,
        stack: bf(t)
      }, xd.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: bf(t)
    };
  }
  var _i = [], Ui = 0, Js = null, Pa = 0, Pt = [], jt = 0, Tn = null, Qt = 1, Zt = "";
  function ln(e, t) {
    _i[Ui++] = Pa, _i[Ui++] = Js, Js = e, Pa = t;
  }
  function Sd(e, t, n) {
    Pt[jt++] = Qt, Pt[jt++] = Zt, Pt[jt++] = Tn, Tn = e;
    var a = Qt;
    e = Zt;
    var l = 32 - St(a) - 1;
    a &= ~(1 << l), n += 1;
    var u = 32 - St(t) + l;
    if (30 < u) {
      var f = l - l % 5;
      u = (a & (1 << f) - 1).toString(32), a >>= f, l -= f, Qt = 1 << 32 - St(t) + l | n << l | a, Zt = u + e;
    } else
      Qt = 1 << u | n << l | a, Zt = e;
  }
  function or(e) {
    e.return !== null && (ln(e, 1), Sd(e, 1, 0));
  }
  function rr(e) {
    for (; e === Js; )
      Js = _i[--Ui], _i[Ui] = null, Pa = _i[--Ui], _i[Ui] = null;
    for (; e === Tn; )
      Tn = Pt[--jt], Pt[jt] = null, Zt = Pt[--jt], Pt[jt] = null, Qt = Pt[--jt], Pt[jt] = null;
  }
  function Nd(e, t) {
    Pt[jt++] = Qt, Pt[jt++] = Zt, Pt[jt++] = Tn, Qt = t.id, Zt = t.overflow, Tn = e;
  }
  var et = null, Pe = null, ve = !1, Cn = null, zt = !1, ur = Error(o(519));
  function Vn(e) {
    var t = Error(
      o(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw ja(Mt(t, e)), ur;
  }
  function Dd(e) {
    var t = e.stateNode, n = e.type, a = e.memoizedProps;
    switch (t[Ie] = e, t[ft] = a, n) {
      case "dialog":
        me("cancel", t), me("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        me("load", t);
        break;
      case "video":
      case "audio":
        for (n = 0; n < ns.length; n++)
          me(ns[n], t);
        break;
      case "source":
        me("error", t);
        break;
      case "img":
      case "image":
      case "link":
        me("error", t), me("load", t);
        break;
      case "details":
        me("toggle", t);
        break;
      case "input":
        me("invalid", t), Rf(
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
        me("invalid", t);
        break;
      case "textarea":
        me("invalid", t), _f(t, a.value, a.defaultValue, a.children);
    }
    n = a.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || t.textContent === "" + n || a.suppressHydrationWarning === !0 || Lp(t.textContent, n) ? (a.popover != null && (me("beforetoggle", t), me("toggle", t)), a.onScroll != null && me("scroll", t), a.onScrollEnd != null && me("scrollend", t), a.onClick != null && (t.onclick = nn), t = !0) : t = !1, t || Vn(e, !0);
  }
  function Ed(e) {
    for (et = e.return; et; )
      switch (et.tag) {
        case 5:
        case 31:
        case 13:
          zt = !1;
          return;
        case 27:
        case 3:
          zt = !0;
          return;
        default:
          et = et.return;
      }
  }
  function Li(e) {
    if (e !== et) return !1;
    if (!ve) return Ed(e), ve = !0, !1;
    var t = e.tag, n;
    if ((n = t !== 3 && t !== 27) && ((n = t === 5) && (n = e.type, n = !(n !== "form" && n !== "button") || Vu(e.type, e.memoizedProps)), n = !n), n && Pe && Vn(e), Ed(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(317));
      Pe = Fp(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(317));
      Pe = Fp(e);
    } else
      t === 27 ? (t = Pe, Hn(e.type) ? (e = Mu, Mu = null, Pe = e) : Pe = t) : Pe = et ? Ot(e.stateNode.nextSibling) : null;
    return !0;
  }
  function li() {
    Pe = et = null, ve = !1;
  }
  function cr() {
    var e = Cn;
    return e !== null && (gt === null ? gt = e : gt.push.apply(
      gt,
      e
    ), Cn = null), e;
  }
  function ja(e) {
    Cn === null ? Cn = [e] : Cn.push(e);
  }
  var fr = E(null), oi = null, on = null;
  function Bn(e, t, n) {
    Z(fr, t._currentValue), t._currentValue = n;
  }
  function rn(e) {
    e._currentValue = fr.current, _(fr);
  }
  function dr(e, t, n) {
    for (; e !== null; ) {
      var a = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function mr(e, t, n, a) {
    var l = e.child;
    for (l !== null && (l.return = e); l !== null; ) {
      var u = l.dependencies;
      if (u !== null) {
        var f = l.child;
        u = u.firstContext;
        e: for (; u !== null; ) {
          var g = u;
          u = l;
          for (var N = 0; N < t.length; N++)
            if (g.context === t[N]) {
              u.lanes |= n, g = u.alternate, g !== null && (g.lanes |= n), dr(
                u.return,
                n,
                e
              ), a || (f = null);
              break e;
            }
          u = g.next;
        }
      } else if (l.tag === 18) {
        if (f = l.return, f === null) throw Error(o(341));
        f.lanes |= n, u = f.alternate, u !== null && (u.lanes |= n), dr(f, n, e), f = null;
      } else f = l.child;
      if (f !== null) f.return = l;
      else
        for (f = l; f !== null; ) {
          if (f === e) {
            f = null;
            break;
          }
          if (l = f.sibling, l !== null) {
            l.return = f.return, f = l;
            break;
          }
          f = f.return;
        }
      l = f;
    }
  }
  function Hi(e, t, n, a) {
    e = null;
    for (var l = t, u = !1; l !== null; ) {
      if (!u) {
        if ((l.flags & 524288) !== 0) u = !0;
        else if ((l.flags & 262144) !== 0) break;
      }
      if (l.tag === 10) {
        var f = l.alternate;
        if (f === null) throw Error(o(387));
        if (f = f.memoizedProps, f !== null) {
          var g = l.type;
          Nt(l.pendingProps.value, f.value) || (e !== null ? e.push(g) : e = [g]);
        }
      } else if (l === De.current) {
        if (f = l.alternate, f === null) throw Error(o(387));
        f.memoizedState.memoizedState !== l.memoizedState.memoizedState && (e !== null ? e.push(os) : e = [os]);
      }
      l = l.return;
    }
    e !== null && mr(
      t,
      e,
      n,
      a
    ), t.flags |= 262144;
  }
  function $s(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!Nt(
        e.context._currentValue,
        e.memoizedValue
      ))
        return !0;
      e = e.next;
    }
    return !1;
  }
  function ri(e) {
    oi = e, on = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function tt(e) {
    return Td(oi, e);
  }
  function Ws(e, t) {
    return oi === null && ri(e), Td(e, t);
  }
  function Td(e, t) {
    var n = t._currentValue;
    if (t = { context: t, memoizedValue: n, next: null }, on === null) {
      if (e === null) throw Error(o(308));
      on = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else on = on.next = t;
    return n;
  }
  var Iv = typeof AbortController < "u" ? AbortController : function() {
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
  }, eb = i.unstable_scheduleCallback, tb = i.unstable_NormalPriority, Ye = {
    $$typeof: G,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function pr() {
    return {
      controller: new Iv(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function za(e) {
    e.refCount--, e.refCount === 0 && eb(tb, function() {
      e.controller.abort();
    });
  }
  var Ra = null, hr = 0, qi = 0, Gi = null;
  function nb(e, t) {
    if (Ra === null) {
      var n = Ra = [];
      hr = 0, qi = vu(), Gi = {
        status: "pending",
        value: void 0,
        then: function(a) {
          n.push(a);
        }
      };
    }
    return hr++, t.then(Cd, Cd), t;
  }
  function Cd() {
    if (--hr === 0 && Ra !== null) {
      Gi !== null && (Gi.status = "fulfilled");
      var e = Ra;
      Ra = null, qi = 0, Gi = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function ib(e, t) {
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
  var Vd = w.S;
  w.S = function(e, t) {
    cp = bt(), typeof t == "object" && t !== null && typeof t.then == "function" && nb(e, t), Vd !== null && Vd(e, t);
  };
  var ui = E(null);
  function gr() {
    var e = ui.current;
    return e !== null ? e : Ae.pooledCache;
  }
  function Is(e, t) {
    t === null ? Z(ui, ui.current) : Z(ui, t.pool);
  }
  function Bd() {
    var e = gr();
    return e === null ? null : { parent: Ye._currentValue, pool: e };
  }
  var Yi = Error(o(460)), yr = Error(o(474)), el = Error(o(542)), tl = { then: function() {
  } };
  function Ad(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function kd(e, t, n) {
    switch (n = e[n], n === void 0 ? e.push(t) : n !== t && (t.then(nn, nn), t = n), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, Md(e), e;
      default:
        if (typeof t.status == "string") t.then(nn, nn);
        else {
          if (e = Ae, e !== null && 100 < e.shellSuspendCounter)
            throw Error(o(482));
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
            throw e = t.reason, Md(e), e;
        }
        throw fi = t, Yi;
    }
  }
  function ci(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (n) {
      throw n !== null && typeof n == "object" && typeof n.then == "function" ? (fi = n, Yi) : n;
    }
  }
  var fi = null;
  function wd() {
    if (fi === null) throw Error(o(459));
    var e = fi;
    return fi = null, e;
  }
  function Md(e) {
    if (e === Yi || e === el)
      throw Error(o(483));
  }
  var Xi = null, Oa = 0;
  function nl(e) {
    var t = Oa;
    return Oa += 1, Xi === null && (Xi = []), kd(Xi, e, t);
  }
  function _a(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function il(e, t) {
    throw t.$$typeof === S ? Error(o(525)) : (e = Object.prototype.toString.call(t), Error(
      o(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function Pd(e) {
    function t(T, D) {
      if (e) {
        var V = T.deletions;
        V === null ? (T.deletions = [D], T.flags |= 16) : V.push(D);
      }
    }
    function n(T, D) {
      if (!e) return null;
      for (; D !== null; )
        t(T, D), D = D.sibling;
      return null;
    }
    function a(T) {
      for (var D = /* @__PURE__ */ new Map(); T !== null; )
        T.key !== null ? D.set(T.key, T) : D.set(T.index, T), T = T.sibling;
      return D;
    }
    function l(T, D) {
      return T = sn(T, D), T.index = 0, T.sibling = null, T;
    }
    function u(T, D, V) {
      return T.index = V, e ? (V = T.alternate, V !== null ? (V = V.index, V < D ? (T.flags |= 67108866, D) : V) : (T.flags |= 67108866, D)) : (T.flags |= 1048576, D);
    }
    function f(T) {
      return e && T.alternate === null && (T.flags |= 67108866), T;
    }
    function g(T, D, V, z) {
      return D === null || D.tag !== 6 ? (D = sr(V, T.mode, z), D.return = T, D) : (D = l(D, V), D.return = T, D);
    }
    function N(T, D, V, z) {
      var ne = V.type;
      return ne === j ? P(
        T,
        D,
        V.props.children,
        z,
        V.key
      ) : D !== null && (D.elementType === ne || typeof ne == "object" && ne !== null && ne.$$typeof === H && ci(ne) === D.type) ? (D = l(D, V.props), _a(D, V), D.return = T, D) : (D = Fs(
        V.type,
        V.key,
        V.props,
        null,
        T.mode,
        z
      ), _a(D, V), D.return = T, D);
    }
    function B(T, D, V, z) {
      return D === null || D.tag !== 4 || D.stateNode.containerInfo !== V.containerInfo || D.stateNode.implementation !== V.implementation ? (D = lr(V, T.mode, z), D.return = T, D) : (D = l(D, V.children || []), D.return = T, D);
    }
    function P(T, D, V, z, ne) {
      return D === null || D.tag !== 7 ? (D = si(
        V,
        T.mode,
        z,
        ne
      ), D.return = T, D) : (D = l(D, V), D.return = T, D);
    }
    function O(T, D, V) {
      if (typeof D == "string" && D !== "" || typeof D == "number" || typeof D == "bigint")
        return D = sr(
          "" + D,
          T.mode,
          V
        ), D.return = T, D;
      if (typeof D == "object" && D !== null) {
        switch (D.$$typeof) {
          case C:
            return V = Fs(
              D.type,
              D.key,
              D.props,
              null,
              T.mode,
              V
            ), _a(V, D), V.return = T, V;
          case A:
            return D = lr(
              D,
              T.mode,
              V
            ), D.return = T, D;
          case H:
            return D = ci(D), O(T, D, V);
        }
        if (be(D) || ge(D))
          return D = si(
            D,
            T.mode,
            V,
            null
          ), D.return = T, D;
        if (typeof D.then == "function")
          return O(T, nl(D), V);
        if (D.$$typeof === G)
          return O(
            T,
            Ws(T, D),
            V
          );
        il(T, D);
      }
      return null;
    }
    function k(T, D, V, z) {
      var ne = D !== null ? D.key : null;
      if (typeof V == "string" && V !== "" || typeof V == "number" || typeof V == "bigint")
        return ne !== null ? null : g(T, D, "" + V, z);
      if (typeof V == "object" && V !== null) {
        switch (V.$$typeof) {
          case C:
            return V.key === ne ? N(T, D, V, z) : null;
          case A:
            return V.key === ne ? B(T, D, V, z) : null;
          case H:
            return V = ci(V), k(T, D, V, z);
        }
        if (be(V) || ge(V))
          return ne !== null ? null : P(T, D, V, z, null);
        if (typeof V.then == "function")
          return k(
            T,
            D,
            nl(V),
            z
          );
        if (V.$$typeof === G)
          return k(
            T,
            D,
            Ws(T, V),
            z
          );
        il(T, V);
      }
      return null;
    }
    function M(T, D, V, z, ne) {
      if (typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint")
        return T = T.get(V) || null, g(D, T, "" + z, ne);
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case C:
            return T = T.get(
              z.key === null ? V : z.key
            ) || null, N(D, T, z, ne);
          case A:
            return T = T.get(
              z.key === null ? V : z.key
            ) || null, B(D, T, z, ne);
          case H:
            return z = ci(z), M(
              T,
              D,
              V,
              z,
              ne
            );
        }
        if (be(z) || ge(z))
          return T = T.get(V) || null, P(D, T, z, ne, null);
        if (typeof z.then == "function")
          return M(
            T,
            D,
            V,
            nl(z),
            ne
          );
        if (z.$$typeof === G)
          return M(
            T,
            D,
            V,
            Ws(D, z),
            ne
          );
        il(D, z);
      }
      return null;
    }
    function W(T, D, V, z) {
      for (var ne = null, xe = null, te = D, ce = D = 0, he = null; te !== null && ce < V.length; ce++) {
        te.index > ce ? (he = te, te = null) : he = te.sibling;
        var Se = k(
          T,
          te,
          V[ce],
          z
        );
        if (Se === null) {
          te === null && (te = he);
          break;
        }
        e && te && Se.alternate === null && t(T, te), D = u(Se, D, ce), xe === null ? ne = Se : xe.sibling = Se, xe = Se, te = he;
      }
      if (ce === V.length)
        return n(T, te), ve && ln(T, ce), ne;
      if (te === null) {
        for (; ce < V.length; ce++)
          te = O(T, V[ce], z), te !== null && (D = u(
            te,
            D,
            ce
          ), xe === null ? ne = te : xe.sibling = te, xe = te);
        return ve && ln(T, ce), ne;
      }
      for (te = a(te); ce < V.length; ce++)
        he = M(
          te,
          T,
          ce,
          V[ce],
          z
        ), he !== null && (e && he.alternate !== null && te.delete(
          he.key === null ? ce : he.key
        ), D = u(
          he,
          D,
          ce
        ), xe === null ? ne = he : xe.sibling = he, xe = he);
      return e && te.forEach(function(Kn) {
        return t(T, Kn);
      }), ve && ln(T, ce), ne;
    }
    function ae(T, D, V, z) {
      if (V == null) throw Error(o(151));
      for (var ne = null, xe = null, te = D, ce = D = 0, he = null, Se = V.next(); te !== null && !Se.done; ce++, Se = V.next()) {
        te.index > ce ? (he = te, te = null) : he = te.sibling;
        var Kn = k(T, te, Se.value, z);
        if (Kn === null) {
          te === null && (te = he);
          break;
        }
        e && te && Kn.alternate === null && t(T, te), D = u(Kn, D, ce), xe === null ? ne = Kn : xe.sibling = Kn, xe = Kn, te = he;
      }
      if (Se.done)
        return n(T, te), ve && ln(T, ce), ne;
      if (te === null) {
        for (; !Se.done; ce++, Se = V.next())
          Se = O(T, Se.value, z), Se !== null && (D = u(Se, D, ce), xe === null ? ne = Se : xe.sibling = Se, xe = Se);
        return ve && ln(T, ce), ne;
      }
      for (te = a(te); !Se.done; ce++, Se = V.next())
        Se = M(te, T, ce, Se.value, z), Se !== null && (e && Se.alternate !== null && te.delete(Se.key === null ? ce : Se.key), D = u(Se, D, ce), xe === null ? ne = Se : xe.sibling = Se, xe = Se);
      return e && te.forEach(function(p1) {
        return t(T, p1);
      }), ve && ln(T, ce), ne;
    }
    function Be(T, D, V, z) {
      if (typeof V == "object" && V !== null && V.type === j && V.key === null && (V = V.props.children), typeof V == "object" && V !== null) {
        switch (V.$$typeof) {
          case C:
            e: {
              for (var ne = V.key; D !== null; ) {
                if (D.key === ne) {
                  if (ne = V.type, ne === j) {
                    if (D.tag === 7) {
                      n(
                        T,
                        D.sibling
                      ), z = l(
                        D,
                        V.props.children
                      ), z.return = T, T = z;
                      break e;
                    }
                  } else if (D.elementType === ne || typeof ne == "object" && ne !== null && ne.$$typeof === H && ci(ne) === D.type) {
                    n(
                      T,
                      D.sibling
                    ), z = l(D, V.props), _a(z, V), z.return = T, T = z;
                    break e;
                  }
                  n(T, D);
                  break;
                } else t(T, D);
                D = D.sibling;
              }
              V.type === j ? (z = si(
                V.props.children,
                T.mode,
                z,
                V.key
              ), z.return = T, T = z) : (z = Fs(
                V.type,
                V.key,
                V.props,
                null,
                T.mode,
                z
              ), _a(z, V), z.return = T, T = z);
            }
            return f(T);
          case A:
            e: {
              for (ne = V.key; D !== null; ) {
                if (D.key === ne)
                  if (D.tag === 4 && D.stateNode.containerInfo === V.containerInfo && D.stateNode.implementation === V.implementation) {
                    n(
                      T,
                      D.sibling
                    ), z = l(D, V.children || []), z.return = T, T = z;
                    break e;
                  } else {
                    n(T, D);
                    break;
                  }
                else t(T, D);
                D = D.sibling;
              }
              z = lr(V, T.mode, z), z.return = T, T = z;
            }
            return f(T);
          case H:
            return V = ci(V), Be(
              T,
              D,
              V,
              z
            );
        }
        if (be(V))
          return W(
            T,
            D,
            V,
            z
          );
        if (ge(V)) {
          if (ne = ge(V), typeof ne != "function") throw Error(o(150));
          return V = ne.call(V), ae(
            T,
            D,
            V,
            z
          );
        }
        if (typeof V.then == "function")
          return Be(
            T,
            D,
            nl(V),
            z
          );
        if (V.$$typeof === G)
          return Be(
            T,
            D,
            Ws(T, V),
            z
          );
        il(T, V);
      }
      return typeof V == "string" && V !== "" || typeof V == "number" || typeof V == "bigint" ? (V = "" + V, D !== null && D.tag === 6 ? (n(T, D.sibling), z = l(D, V), z.return = T, T = z) : (n(T, D), z = sr(V, T.mode, z), z.return = T, T = z), f(T)) : n(T, D);
    }
    return function(T, D, V, z) {
      try {
        Oa = 0;
        var ne = Be(
          T,
          D,
          V,
          z
        );
        return Xi = null, ne;
      } catch (te) {
        if (te === Yi || te === el) throw te;
        var xe = Dt(29, te, null, T.mode);
        return xe.lanes = z, xe.return = T, xe;
      } finally {
      }
    };
  }
  var di = Pd(!0), jd = Pd(!1), An = !1;
  function vr(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function br(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    });
  }
  function kn(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function wn(e, t, n) {
    var a = e.updateQueue;
    if (a === null) return null;
    if (a = a.shared, (Ne & 2) !== 0) {
      var l = a.pending;
      return l === null ? t.next = t : (t.next = l.next, l.next = t), a.pending = t, t = Zs(e), yd(e, null, n), t;
    }
    return Qs(e, a, t, n), Zs(e);
  }
  function Ua(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194048) !== 0)) {
      var a = t.lanes;
      a &= e.pendingLanes, n |= a, t.lanes = n, Tf(e, n);
    }
  }
  function xr(e, t) {
    var n = e.updateQueue, a = e.alternate;
    if (a !== null && (a = a.updateQueue, n === a)) {
      var l = null, u = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var f = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null
          };
          u === null ? l = u = f : u = u.next = f, n = n.next;
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
  var Sr = !1;
  function La() {
    if (Sr) {
      var e = Gi;
      if (e !== null) throw e;
    }
  }
  function Ha(e, t, n, a) {
    Sr = !1;
    var l = e.updateQueue;
    An = !1;
    var u = l.firstBaseUpdate, f = l.lastBaseUpdate, g = l.shared.pending;
    if (g !== null) {
      l.shared.pending = null;
      var N = g, B = N.next;
      N.next = null, f === null ? u = B : f.next = B, f = N;
      var P = e.alternate;
      P !== null && (P = P.updateQueue, g = P.lastBaseUpdate, g !== f && (g === null ? P.firstBaseUpdate = B : g.next = B, P.lastBaseUpdate = N));
    }
    if (u !== null) {
      var O = l.baseState;
      f = 0, P = B = N = null, g = u;
      do {
        var k = g.lane & -536870913, M = k !== g.lane;
        if (M ? (pe & k) === k : (a & k) === k) {
          k !== 0 && k === qi && (Sr = !0), P !== null && (P = P.next = {
            lane: 0,
            tag: g.tag,
            payload: g.payload,
            callback: null,
            next: null
          });
          e: {
            var W = e, ae = g;
            k = t;
            var Be = n;
            switch (ae.tag) {
              case 1:
                if (W = ae.payload, typeof W == "function") {
                  O = W.call(Be, O, k);
                  break e;
                }
                O = W;
                break e;
              case 3:
                W.flags = W.flags & -65537 | 128;
              case 0:
                if (W = ae.payload, k = typeof W == "function" ? W.call(Be, O, k) : W, k == null) break e;
                O = x({}, O, k);
                break e;
              case 2:
                An = !0;
            }
          }
          k = g.callback, k !== null && (e.flags |= 64, M && (e.flags |= 8192), M = l.callbacks, M === null ? l.callbacks = [k] : M.push(k));
        } else
          M = {
            lane: k,
            tag: g.tag,
            payload: g.payload,
            callback: g.callback,
            next: null
          }, P === null ? (B = P = M, N = O) : P = P.next = M, f |= k;
        if (g = g.next, g === null) {
          if (g = l.shared.pending, g === null)
            break;
          M = g, g = M.next, M.next = null, l.lastBaseUpdate = M, l.shared.pending = null;
        }
      } while (!0);
      P === null && (N = O), l.baseState = N, l.firstBaseUpdate = B, l.lastBaseUpdate = P, u === null && (l.shared.lanes = 0), Rn |= f, e.lanes = f, e.memoizedState = O;
    }
  }
  function zd(e, t) {
    if (typeof e != "function")
      throw Error(o(191, e));
    e.call(t);
  }
  function Rd(e, t) {
    var n = e.callbacks;
    if (n !== null)
      for (e.callbacks = null, e = 0; e < n.length; e++)
        zd(n[e], t);
  }
  var Ki = E(null), al = E(0);
  function Od(e, t) {
    e = yn, Z(al, e), Z(Ki, t), yn = e | t.baseLanes;
  }
  function Nr() {
    Z(al, yn), Z(Ki, Ki.current);
  }
  function Dr() {
    yn = al.current, _(Ki), _(al);
  }
  var Et = E(null), Rt = null;
  function Mn(e) {
    var t = e.alternate;
    Z(He, He.current & 1), Z(Et, e), Rt === null && (t === null || Ki.current !== null || t.memoizedState !== null) && (Rt = e);
  }
  function Er(e) {
    Z(He, He.current), Z(Et, e), Rt === null && (Rt = e);
  }
  function _d(e) {
    e.tag === 22 ? (Z(He, He.current), Z(Et, e), Rt === null && (Rt = e)) : Pn();
  }
  function Pn() {
    Z(He, He.current), Z(Et, Et.current);
  }
  function Tt(e) {
    _(Et), Rt === e && (Rt = null), _(He);
  }
  var He = E(0);
  function sl(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || ku(n) || wu(n)))
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
  var un = 0, re = null, Ce = null, Xe = null, ll = !1, Qi = !1, mi = !1, ol = 0, qa = 0, Zi = null, ab = 0;
  function _e() {
    throw Error(o(321));
  }
  function Tr(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!Nt(e[n], t[n])) return !1;
    return !0;
  }
  function Cr(e, t, n, a, l, u) {
    return un = u, re = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, w.H = e === null || e.memoizedState === null ? Sm : Hr, mi = !1, u = n(a, l), mi = !1, Qi && (u = Ld(
      t,
      n,
      a,
      l
    )), Ud(e), u;
  }
  function Ud(e) {
    w.H = Xa;
    var t = Ce !== null && Ce.next !== null;
    if (un = 0, Xe = Ce = re = null, ll = !1, qa = 0, Zi = null, t) throw Error(o(300));
    e === null || Ke || (e = e.dependencies, e !== null && $s(e) && (Ke = !0));
  }
  function Ld(e, t, n, a) {
    re = e;
    var l = 0;
    do {
      if (Qi && (Zi = null), qa = 0, Qi = !1, 25 <= l) throw Error(o(301));
      if (l += 1, Xe = Ce = null, e.updateQueue != null) {
        var u = e.updateQueue;
        u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0);
      }
      w.H = Nm, u = t(n, a);
    } while (Qi);
    return u;
  }
  function sb() {
    var e = w.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? Ga(t) : t, e = e.useState()[0], (Ce !== null ? Ce.memoizedState : null) !== e && (re.flags |= 1024), t;
  }
  function Vr() {
    var e = ol !== 0;
    return ol = 0, e;
  }
  function Br(e, t, n) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~n;
  }
  function Ar(e) {
    if (ll) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      ll = !1;
    }
    un = 0, Xe = Ce = re = null, Qi = !1, qa = ol = 0, Zi = null;
  }
  function rt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Xe === null ? re.memoizedState = Xe = e : Xe = Xe.next = e, Xe;
  }
  function qe() {
    if (Ce === null) {
      var e = re.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ce.next;
    var t = Xe === null ? re.memoizedState : Xe.next;
    if (t !== null)
      Xe = t, Ce = e;
    else {
      if (e === null)
        throw re.alternate === null ? Error(o(467)) : Error(o(310));
      Ce = e, e = {
        memoizedState: Ce.memoizedState,
        baseState: Ce.baseState,
        baseQueue: Ce.baseQueue,
        queue: Ce.queue,
        next: null
      }, Xe === null ? re.memoizedState = Xe = e : Xe = Xe.next = e;
    }
    return Xe;
  }
  function rl() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Ga(e) {
    var t = qa;
    return qa += 1, Zi === null && (Zi = []), e = kd(Zi, e, t), t = re, (Xe === null ? t.memoizedState : Xe.next) === null && (t = t.alternate, w.H = t === null || t.memoizedState === null ? Sm : Hr), e;
  }
  function ul(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Ga(e);
      if (e.$$typeof === G) return tt(e);
    }
    throw Error(o(438, String(e)));
  }
  function kr(e) {
    var t = null, n = re.updateQueue;
    if (n !== null && (t = n.memoCache), t == null) {
      var a = re.alternate;
      a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (t = {
        data: a.data.map(function(l) {
          return l.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), n === null && (n = rl(), re.updateQueue = n), n.memoCache = t, n = t.data[t.index], n === void 0)
      for (n = t.data[t.index] = Array(e), a = 0; a < e; a++)
        n[a] = Q;
    return t.index++, n;
  }
  function cn(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function cl(e) {
    var t = qe();
    return wr(t, Ce, e);
  }
  function wr(e, t, n) {
    var a = e.queue;
    if (a === null) throw Error(o(311));
    a.lastRenderedReducer = n;
    var l = e.baseQueue, u = a.pending;
    if (u !== null) {
      if (l !== null) {
        var f = l.next;
        l.next = u.next, u.next = f;
      }
      t.baseQueue = l = u, a.pending = null;
    }
    if (u = e.baseState, l === null) e.memoizedState = u;
    else {
      t = l.next;
      var g = f = null, N = null, B = t, P = !1;
      do {
        var O = B.lane & -536870913;
        if (O !== B.lane ? (pe & O) === O : (un & O) === O) {
          var k = B.revertLane;
          if (k === 0)
            N !== null && (N = N.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: B.action,
              hasEagerState: B.hasEagerState,
              eagerState: B.eagerState,
              next: null
            }), O === qi && (P = !0);
          else if ((un & k) === k) {
            B = B.next, k === qi && (P = !0);
            continue;
          } else
            O = {
              lane: 0,
              revertLane: B.revertLane,
              gesture: null,
              action: B.action,
              hasEagerState: B.hasEagerState,
              eagerState: B.eagerState,
              next: null
            }, N === null ? (g = N = O, f = u) : N = N.next = O, re.lanes |= k, Rn |= k;
          O = B.action, mi && n(u, O), u = B.hasEagerState ? B.eagerState : n(u, O);
        } else
          k = {
            lane: O,
            revertLane: B.revertLane,
            gesture: B.gesture,
            action: B.action,
            hasEagerState: B.hasEagerState,
            eagerState: B.eagerState,
            next: null
          }, N === null ? (g = N = k, f = u) : N = N.next = k, re.lanes |= O, Rn |= O;
        B = B.next;
      } while (B !== null && B !== t);
      if (N === null ? f = u : N.next = g, !Nt(u, e.memoizedState) && (Ke = !0, P && (n = Gi, n !== null)))
        throw n;
      e.memoizedState = u, e.baseState = f, e.baseQueue = N, a.lastRenderedState = u;
    }
    return l === null && (a.lanes = 0), [e.memoizedState, a.dispatch];
  }
  function Mr(e) {
    var t = qe(), n = t.queue;
    if (n === null) throw Error(o(311));
    n.lastRenderedReducer = e;
    var a = n.dispatch, l = n.pending, u = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var f = l = l.next;
      do
        u = e(u, f.action), f = f.next;
      while (f !== l);
      Nt(u, t.memoizedState) || (Ke = !0), t.memoizedState = u, t.baseQueue === null && (t.baseState = u), n.lastRenderedState = u;
    }
    return [u, a];
  }
  function Hd(e, t, n) {
    var a = re, l = qe(), u = ve;
    if (u) {
      if (n === void 0) throw Error(o(407));
      n = n();
    } else n = t();
    var f = !Nt(
      (Ce || l).memoizedState,
      n
    );
    if (f && (l.memoizedState = n, Ke = !0), l = l.queue, zr(Yd.bind(null, a, l, e), [
      e
    ]), l.getSnapshot !== t || f || Xe !== null && Xe.memoizedState.tag & 1) {
      if (a.flags |= 2048, Fi(
        9,
        { destroy: void 0 },
        Gd.bind(
          null,
          a,
          l,
          n,
          t
        ),
        null
      ), Ae === null) throw Error(o(349));
      u || (un & 127) !== 0 || qd(a, t, n);
    }
    return n;
  }
  function qd(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = re.updateQueue, t === null ? (t = rl(), re.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function Gd(e, t, n, a) {
    t.value = n, t.getSnapshot = a, Xd(t) && Kd(e);
  }
  function Yd(e, t, n) {
    return n(function() {
      Xd(t) && Kd(e);
    });
  }
  function Xd(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Nt(e, n);
    } catch {
      return !0;
    }
  }
  function Kd(e) {
    var t = ai(e, 2);
    t !== null && yt(t, e, 2);
  }
  function Pr(e) {
    var t = rt();
    if (typeof e == "function") {
      var n = e;
      if (e = n(), mi) {
        Nn(!0);
        try {
          n();
        } finally {
          Nn(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = e, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: cn,
      lastRenderedState: e
    }, t;
  }
  function Qd(e, t, n, a) {
    return e.baseState = n, wr(
      e,
      Ce,
      typeof a == "function" ? a : cn
    );
  }
  function lb(e, t, n, a, l) {
    if (ml(e)) throw Error(o(485));
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
        then: function(f) {
          u.listeners.push(f);
        }
      };
      w.T !== null ? n(!0) : u.isTransition = !1, a(u), n = t.pending, n === null ? (u.next = t.pending = u, Zd(t, u)) : (u.next = n.next, t.pending = n.next = u);
    }
  }
  function Zd(e, t) {
    var n = t.action, a = t.payload, l = e.state;
    if (t.isTransition) {
      var u = w.T, f = {};
      w.T = f;
      try {
        var g = n(l, a), N = w.S;
        N !== null && N(f, g), Fd(e, t, g);
      } catch (B) {
        jr(e, t, B);
      } finally {
        u !== null && f.types !== null && (u.types = f.types), w.T = u;
      }
    } else
      try {
        u = n(l, a), Fd(e, t, u);
      } catch (B) {
        jr(e, t, B);
      }
  }
  function Fd(e, t, n) {
    n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(
      function(a) {
        Jd(e, t, a);
      },
      function(a) {
        return jr(e, t, a);
      }
    ) : Jd(e, t, n);
  }
  function Jd(e, t, n) {
    t.status = "fulfilled", t.value = n, $d(t), e.state = n, t = e.pending, t !== null && (n = t.next, n === t ? e.pending = null : (n = n.next, t.next = n, Zd(e, n)));
  }
  function jr(e, t, n) {
    var a = e.pending;
    if (e.pending = null, a !== null) {
      a = a.next;
      do
        t.status = "rejected", t.reason = n, $d(t), t = t.next;
      while (t !== a);
    }
    e.action = null;
  }
  function $d(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function Wd(e, t) {
    return t;
  }
  function Id(e, t) {
    if (ve) {
      var n = Ae.formState;
      if (n !== null) {
        e: {
          var a = re;
          if (ve) {
            if (Pe) {
              t: {
                for (var l = Pe, u = zt; l.nodeType !== 8; ) {
                  if (!u) {
                    l = null;
                    break t;
                  }
                  if (l = Ot(
                    l.nextSibling
                  ), l === null) {
                    l = null;
                    break t;
                  }
                }
                u = l.data, l = u === "F!" || u === "F" ? l : null;
              }
              if (l) {
                Pe = Ot(
                  l.nextSibling
                ), a = l.data === "F!";
                break e;
              }
            }
            Vn(a);
          }
          a = !1;
        }
        a && (t = n[0]);
      }
    }
    return n = rt(), n.memoizedState = n.baseState = t, a = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Wd,
      lastRenderedState: t
    }, n.queue = a, n = vm.bind(
      null,
      re,
      a
    ), a.dispatch = n, a = Pr(!1), u = Lr.bind(
      null,
      re,
      !1,
      a.queue
    ), a = rt(), l = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, a.queue = l, n = lb.bind(
      null,
      re,
      l,
      u,
      n
    ), l.dispatch = n, a.memoizedState = e, [t, n, !1];
  }
  function em(e) {
    var t = qe();
    return tm(t, Ce, e);
  }
  function tm(e, t, n) {
    if (t = wr(
      e,
      t,
      Wd
    )[0], e = cl(cn)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var a = Ga(t);
      } catch (f) {
        throw f === Yi ? el : f;
      }
    else a = t;
    t = qe();
    var l = t.queue, u = l.dispatch;
    return n !== t.memoizedState && (re.flags |= 2048, Fi(
      9,
      { destroy: void 0 },
      ob.bind(null, l, n),
      null
    )), [a, u, e];
  }
  function ob(e, t) {
    e.action = t;
  }
  function nm(e) {
    var t = qe(), n = Ce;
    if (n !== null)
      return tm(t, n, e);
    qe(), t = t.memoizedState, n = qe();
    var a = n.queue.dispatch;
    return n.memoizedState = e, [t, a, !1];
  }
  function Fi(e, t, n, a) {
    return e = { tag: e, create: n, deps: a, inst: t, next: null }, t = re.updateQueue, t === null && (t = rl(), re.updateQueue = t), n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (a = n.next, n.next = e, e.next = a, t.lastEffect = e), e;
  }
  function im() {
    return qe().memoizedState;
  }
  function fl(e, t, n, a) {
    var l = rt();
    re.flags |= e, l.memoizedState = Fi(
      1 | t,
      { destroy: void 0 },
      n,
      a === void 0 ? null : a
    );
  }
  function dl(e, t, n, a) {
    var l = qe();
    a = a === void 0 ? null : a;
    var u = l.memoizedState.inst;
    Ce !== null && a !== null && Tr(a, Ce.memoizedState.deps) ? l.memoizedState = Fi(t, u, n, a) : (re.flags |= e, l.memoizedState = Fi(
      1 | t,
      u,
      n,
      a
    ));
  }
  function am(e, t) {
    fl(8390656, 8, e, t);
  }
  function zr(e, t) {
    dl(2048, 8, e, t);
  }
  function rb(e) {
    re.flags |= 4;
    var t = re.updateQueue;
    if (t === null)
      t = rl(), re.updateQueue = t, t.events = [e];
    else {
      var n = t.events;
      n === null ? t.events = [e] : n.push(e);
    }
  }
  function sm(e) {
    var t = qe().memoizedState;
    return rb({ ref: t, nextImpl: e }), function() {
      if ((Ne & 2) !== 0) throw Error(o(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function lm(e, t) {
    return dl(4, 2, e, t);
  }
  function om(e, t) {
    return dl(4, 4, e, t);
  }
  function rm(e, t) {
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
  function um(e, t, n) {
    n = n != null ? n.concat([e]) : null, dl(4, 4, rm.bind(null, t, e), n);
  }
  function Rr() {
  }
  function cm(e, t) {
    var n = qe();
    t = t === void 0 ? null : t;
    var a = n.memoizedState;
    return t !== null && Tr(t, a[1]) ? a[0] : (n.memoizedState = [e, t], e);
  }
  function fm(e, t) {
    var n = qe();
    t = t === void 0 ? null : t;
    var a = n.memoizedState;
    if (t !== null && Tr(t, a[1]))
      return a[0];
    if (a = e(), mi) {
      Nn(!0);
      try {
        e();
      } finally {
        Nn(!1);
      }
    }
    return n.memoizedState = [a, t], a;
  }
  function Or(e, t, n) {
    return n === void 0 || (un & 1073741824) !== 0 && (pe & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = n, e = dp(), re.lanes |= e, Rn |= e, n);
  }
  function dm(e, t, n, a) {
    return Nt(n, t) ? n : Ki.current !== null ? (e = Or(e, n, a), Nt(e, t) || (Ke = !0), e) : (un & 42) === 0 || (un & 1073741824) !== 0 && (pe & 261930) === 0 ? (Ke = !0, e.memoizedState = n) : (e = dp(), re.lanes |= e, Rn |= e, t);
  }
  function mm(e, t, n, a, l) {
    var u = K.p;
    K.p = u !== 0 && 8 > u ? u : 8;
    var f = w.T, g = {};
    w.T = g, Lr(e, !1, t, n);
    try {
      var N = l(), B = w.S;
      if (B !== null && B(g, N), N !== null && typeof N == "object" && typeof N.then == "function") {
        var P = ib(
          N,
          a
        );
        Ya(
          e,
          t,
          P,
          Bt(e)
        );
      } else
        Ya(
          e,
          t,
          a,
          Bt(e)
        );
    } catch (O) {
      Ya(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: O },
        Bt()
      );
    } finally {
      K.p = u, f !== null && g.types !== null && (f.types = g.types), w.T = f;
    }
  }
  function ub() {
  }
  function _r(e, t, n, a) {
    if (e.tag !== 5) throw Error(o(476));
    var l = pm(e).queue;
    mm(
      e,
      l,
      t,
      J,
      n === null ? ub : function() {
        return hm(e), n(a);
      }
    );
  }
  function pm(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: J,
      baseState: J,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: cn,
        lastRenderedState: J
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
        lastRenderedReducer: cn,
        lastRenderedState: n
      },
      next: null
    }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
  }
  function hm(e) {
    var t = pm(e);
    t.next === null && (t = e.alternate.memoizedState), Ya(
      e,
      t.next.queue,
      {},
      Bt()
    );
  }
  function Ur() {
    return tt(os);
  }
  function gm() {
    return qe().memoizedState;
  }
  function ym() {
    return qe().memoizedState;
  }
  function cb(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var n = Bt();
          e = kn(n);
          var a = wn(t, e, n);
          a !== null && (yt(a, t, n), Ua(a, t, n)), t = { cache: pr() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function fb(e, t, n) {
    var a = Bt();
    n = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, ml(e) ? bm(t, n) : (n = ir(e, t, n, a), n !== null && (yt(n, e, a), xm(n, t, a)));
  }
  function vm(e, t, n) {
    var a = Bt();
    Ya(e, t, n, a);
  }
  function Ya(e, t, n, a) {
    var l = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (ml(e)) bm(t, l);
    else {
      var u = e.alternate;
      if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = t.lastRenderedReducer, u !== null))
        try {
          var f = t.lastRenderedState, g = u(f, n);
          if (l.hasEagerState = !0, l.eagerState = g, Nt(g, f))
            return Qs(e, t, l, 0), Ae === null && Ks(), !1;
        } catch {
        } finally {
        }
      if (n = ir(e, t, l, a), n !== null)
        return yt(n, e, a), xm(n, t, a), !0;
    }
    return !1;
  }
  function Lr(e, t, n, a) {
    if (a = {
      lane: 2,
      revertLane: vu(),
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, ml(e)) {
      if (t) throw Error(o(479));
    } else
      t = ir(
        e,
        n,
        a,
        2
      ), t !== null && yt(t, e, 2);
  }
  function ml(e) {
    var t = e.alternate;
    return e === re || t !== null && t === re;
  }
  function bm(e, t) {
    Qi = ll = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function xm(e, t, n) {
    if ((n & 4194048) !== 0) {
      var a = t.lanes;
      a &= e.pendingLanes, n |= a, t.lanes = n, Tf(e, n);
    }
  }
  var Xa = {
    readContext: tt,
    use: ul,
    useCallback: _e,
    useContext: _e,
    useEffect: _e,
    useImperativeHandle: _e,
    useLayoutEffect: _e,
    useInsertionEffect: _e,
    useMemo: _e,
    useReducer: _e,
    useRef: _e,
    useState: _e,
    useDebugValue: _e,
    useDeferredValue: _e,
    useTransition: _e,
    useSyncExternalStore: _e,
    useId: _e,
    useHostTransitionStatus: _e,
    useFormState: _e,
    useActionState: _e,
    useOptimistic: _e,
    useMemoCache: _e,
    useCacheRefresh: _e
  };
  Xa.useEffectEvent = _e;
  var Sm = {
    readContext: tt,
    use: ul,
    useCallback: function(e, t) {
      return rt().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: tt,
    useEffect: am,
    useImperativeHandle: function(e, t, n) {
      n = n != null ? n.concat([e]) : null, fl(
        4194308,
        4,
        rm.bind(null, t, e),
        n
      );
    },
    useLayoutEffect: function(e, t) {
      return fl(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      fl(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var n = rt();
      t = t === void 0 ? null : t;
      var a = e();
      if (mi) {
        Nn(!0);
        try {
          e();
        } finally {
          Nn(!1);
        }
      }
      return n.memoizedState = [a, t], a;
    },
    useReducer: function(e, t, n) {
      var a = rt();
      if (n !== void 0) {
        var l = n(t);
        if (mi) {
          Nn(!0);
          try {
            n(t);
          } finally {
            Nn(!1);
          }
        }
      } else l = t;
      return a.memoizedState = a.baseState = l, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: l
      }, a.queue = e, e = e.dispatch = fb.bind(
        null,
        re,
        e
      ), [a.memoizedState, e];
    },
    useRef: function(e) {
      var t = rt();
      return e = { current: e }, t.memoizedState = e;
    },
    useState: function(e) {
      e = Pr(e);
      var t = e.queue, n = vm.bind(null, re, t);
      return t.dispatch = n, [e.memoizedState, n];
    },
    useDebugValue: Rr,
    useDeferredValue: function(e, t) {
      var n = rt();
      return Or(n, e, t);
    },
    useTransition: function() {
      var e = Pr(!1);
      return e = mm.bind(
        null,
        re,
        e.queue,
        !0,
        !1
      ), rt().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, n) {
      var a = re, l = rt();
      if (ve) {
        if (n === void 0)
          throw Error(o(407));
        n = n();
      } else {
        if (n = t(), Ae === null)
          throw Error(o(349));
        (pe & 127) !== 0 || qd(a, t, n);
      }
      l.memoizedState = n;
      var u = { value: n, getSnapshot: t };
      return l.queue = u, am(Yd.bind(null, a, u, e), [
        e
      ]), a.flags |= 2048, Fi(
        9,
        { destroy: void 0 },
        Gd.bind(
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
      var e = rt(), t = Ae.identifierPrefix;
      if (ve) {
        var n = Zt, a = Qt;
        n = (a & ~(1 << 32 - St(a) - 1)).toString(32) + n, t = "_" + t + "R_" + n, n = ol++, 0 < n && (t += "H" + n.toString(32)), t += "_";
      } else
        n = ab++, t = "_" + t + "r_" + n.toString(32) + "_";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: Ur,
    useFormState: Id,
    useActionState: Id,
    useOptimistic: function(e) {
      var t = rt();
      t.memoizedState = t.baseState = e;
      var n = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = n, t = Lr.bind(
        null,
        re,
        !0,
        n
      ), n.dispatch = t, [e, t];
    },
    useMemoCache: kr,
    useCacheRefresh: function() {
      return rt().memoizedState = cb.bind(
        null,
        re
      );
    },
    useEffectEvent: function(e) {
      var t = rt(), n = { impl: e };
      return t.memoizedState = n, function() {
        if ((Ne & 2) !== 0)
          throw Error(o(440));
        return n.impl.apply(void 0, arguments);
      };
    }
  }, Hr = {
    readContext: tt,
    use: ul,
    useCallback: cm,
    useContext: tt,
    useEffect: zr,
    useImperativeHandle: um,
    useInsertionEffect: lm,
    useLayoutEffect: om,
    useMemo: fm,
    useReducer: cl,
    useRef: im,
    useState: function() {
      return cl(cn);
    },
    useDebugValue: Rr,
    useDeferredValue: function(e, t) {
      var n = qe();
      return dm(
        n,
        Ce.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = cl(cn)[0], t = qe().memoizedState;
      return [
        typeof e == "boolean" ? e : Ga(e),
        t
      ];
    },
    useSyncExternalStore: Hd,
    useId: gm,
    useHostTransitionStatus: Ur,
    useFormState: em,
    useActionState: em,
    useOptimistic: function(e, t) {
      var n = qe();
      return Qd(n, Ce, e, t);
    },
    useMemoCache: kr,
    useCacheRefresh: ym
  };
  Hr.useEffectEvent = sm;
  var Nm = {
    readContext: tt,
    use: ul,
    useCallback: cm,
    useContext: tt,
    useEffect: zr,
    useImperativeHandle: um,
    useInsertionEffect: lm,
    useLayoutEffect: om,
    useMemo: fm,
    useReducer: Mr,
    useRef: im,
    useState: function() {
      return Mr(cn);
    },
    useDebugValue: Rr,
    useDeferredValue: function(e, t) {
      var n = qe();
      return Ce === null ? Or(n, e, t) : dm(
        n,
        Ce.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Mr(cn)[0], t = qe().memoizedState;
      return [
        typeof e == "boolean" ? e : Ga(e),
        t
      ];
    },
    useSyncExternalStore: Hd,
    useId: gm,
    useHostTransitionStatus: Ur,
    useFormState: nm,
    useActionState: nm,
    useOptimistic: function(e, t) {
      var n = qe();
      return Ce !== null ? Qd(n, Ce, e, t) : (n.baseState = e, [e, n.queue.dispatch]);
    },
    useMemoCache: kr,
    useCacheRefresh: ym
  };
  Nm.useEffectEvent = sm;
  function qr(e, t, n, a) {
    t = e.memoizedState, n = n(a, t), n = n == null ? t : x({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Gr = {
    enqueueSetState: function(e, t, n) {
      e = e._reactInternals;
      var a = Bt(), l = kn(a);
      l.payload = t, n != null && (l.callback = n), t = wn(e, l, a), t !== null && (yt(t, e, a), Ua(t, e, a));
    },
    enqueueReplaceState: function(e, t, n) {
      e = e._reactInternals;
      var a = Bt(), l = kn(a);
      l.tag = 1, l.payload = t, n != null && (l.callback = n), t = wn(e, l, a), t !== null && (yt(t, e, a), Ua(t, e, a));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var n = Bt(), a = kn(n);
      a.tag = 2, t != null && (a.callback = t), t = wn(e, a, n), t !== null && (yt(t, e, n), Ua(t, e, n));
    }
  };
  function Dm(e, t, n, a, l, u, f) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(a, u, f) : t.prototype && t.prototype.isPureReactComponent ? !wa(n, a) || !wa(l, u) : !0;
  }
  function Em(e, t, n, a) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, a), t.state !== e && Gr.enqueueReplaceState(t, t.state, null);
  }
  function pi(e, t) {
    var n = t;
    if ("ref" in t) {
      n = {};
      for (var a in t)
        a !== "ref" && (n[a] = t[a]);
    }
    if (e = e.defaultProps) {
      n === t && (n = x({}, n));
      for (var l in e)
        n[l] === void 0 && (n[l] = e[l]);
    }
    return n;
  }
  function Tm(e) {
    Xs(e);
  }
  function Cm(e) {
    console.error(e);
  }
  function Vm(e) {
    Xs(e);
  }
  function pl(e, t) {
    try {
      var n = e.onUncaughtError;
      n(t.value, { componentStack: t.stack });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function Bm(e, t, n) {
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
  function Yr(e, t, n) {
    return n = kn(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
      pl(e, t);
    }, n;
  }
  function Am(e) {
    return e = kn(e), e.tag = 3, e;
  }
  function km(e, t, n, a) {
    var l = n.type.getDerivedStateFromError;
    if (typeof l == "function") {
      var u = a.value;
      e.payload = function() {
        return l(u);
      }, e.callback = function() {
        Bm(t, n, a);
      };
    }
    var f = n.stateNode;
    f !== null && typeof f.componentDidCatch == "function" && (e.callback = function() {
      Bm(t, n, a), typeof l != "function" && (On === null ? On = /* @__PURE__ */ new Set([this]) : On.add(this));
      var g = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: g !== null ? g : ""
      });
    });
  }
  function db(e, t, n, a, l) {
    if (n.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (t = n.alternate, t !== null && Hi(
        t,
        n,
        l,
        !0
      ), n = Et.current, n !== null) {
        switch (n.tag) {
          case 31:
          case 13:
            return Rt === null ? Cl() : n.alternate === null && Ue === 0 && (Ue = 3), n.flags &= -257, n.flags |= 65536, n.lanes = l, a === tl ? n.flags |= 16384 : (t = n.updateQueue, t === null ? n.updateQueue = /* @__PURE__ */ new Set([a]) : t.add(a), hu(e, a, l)), !1;
          case 22:
            return n.flags |= 65536, a === tl ? n.flags |= 16384 : (t = n.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, n.updateQueue = t) : (n = t.retryQueue, n === null ? t.retryQueue = /* @__PURE__ */ new Set([a]) : n.add(a)), hu(e, a, l)), !1;
        }
        throw Error(o(435, n.tag));
      }
      return hu(e, a, l), Cl(), !1;
    }
    if (ve)
      return t = Et.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = l, a !== ur && (e = Error(o(422), { cause: a }), ja(Mt(e, n)))) : (a !== ur && (t = Error(o(423), {
        cause: a
      }), ja(
        Mt(t, n)
      )), e = e.current.alternate, e.flags |= 65536, l &= -l, e.lanes |= l, a = Mt(a, n), l = Yr(
        e.stateNode,
        a,
        l
      ), xr(e, l), Ue !== 4 && (Ue = 2)), !1;
    var u = Error(o(520), { cause: a });
    if (u = Mt(u, n), Ia === null ? Ia = [u] : Ia.push(u), Ue !== 4 && (Ue = 2), t === null) return !0;
    a = Mt(a, n), n = t;
    do {
      switch (n.tag) {
        case 3:
          return n.flags |= 65536, e = l & -l, n.lanes |= e, e = Yr(n.stateNode, a, e), xr(n, e), !1;
        case 1:
          if (t = n.type, u = n.stateNode, (n.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (On === null || !On.has(u))))
            return n.flags |= 65536, l &= -l, n.lanes |= l, l = Am(l), km(
              l,
              e,
              n,
              a
            ), xr(n, l), !1;
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var Xr = Error(o(461)), Ke = !1;
  function nt(e, t, n, a) {
    t.child = e === null ? jd(t, null, n, a) : di(
      t,
      e.child,
      n,
      a
    );
  }
  function wm(e, t, n, a, l) {
    n = n.render;
    var u = t.ref;
    if ("ref" in a) {
      var f = {};
      for (var g in a)
        g !== "ref" && (f[g] = a[g]);
    } else f = a;
    return ri(t), a = Cr(
      e,
      t,
      n,
      f,
      u,
      l
    ), g = Vr(), e !== null && !Ke ? (Br(e, t, l), fn(e, t, l)) : (ve && g && or(t), t.flags |= 1, nt(e, t, a, l), t.child);
  }
  function Mm(e, t, n, a, l) {
    if (e === null) {
      var u = n.type;
      return typeof u == "function" && !ar(u) && u.defaultProps === void 0 && n.compare === null ? (t.tag = 15, t.type = u, Pm(
        e,
        t,
        u,
        a,
        l
      )) : (e = Fs(
        n.type,
        null,
        a,
        t,
        t.mode,
        l
      ), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (u = e.child, !Ir(e, l)) {
      var f = u.memoizedProps;
      if (n = n.compare, n = n !== null ? n : wa, n(f, a) && e.ref === t.ref)
        return fn(e, t, l);
    }
    return t.flags |= 1, e = sn(u, a), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Pm(e, t, n, a, l) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (wa(u, a) && e.ref === t.ref)
        if (Ke = !1, t.pendingProps = a = u, Ir(e, l))
          (e.flags & 131072) !== 0 && (Ke = !0);
        else
          return t.lanes = e.lanes, fn(e, t, l);
    }
    return Kr(
      e,
      t,
      n,
      a,
      l
    );
  }
  function jm(e, t, n, a) {
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
        return zm(
          e,
          t,
          u,
          n,
          a
        );
      }
      if ((n & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && Is(
          t,
          u !== null ? u.cachePool : null
        ), u !== null ? Od(t, u) : Nr(), _d(t);
      else
        return a = t.lanes = 536870912, zm(
          e,
          t,
          u !== null ? u.baseLanes | n : n,
          n,
          a
        );
    } else
      u !== null ? (Is(t, u.cachePool), Od(t, u), Pn(), t.memoizedState = null) : (e !== null && Is(t, null), Nr(), Pn());
    return nt(e, t, l, n), t.child;
  }
  function Ka(e, t) {
    return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function zm(e, t, n, a, l) {
    var u = gr();
    return u = u === null ? null : { parent: Ye._currentValue, pool: u }, t.memoizedState = {
      baseLanes: n,
      cachePool: u
    }, e !== null && Is(t, null), Nr(), _d(t), e !== null && Hi(e, t, a, !0), t.childLanes = l, null;
  }
  function hl(e, t) {
    return t = yl(
      { mode: t.mode, children: t.children },
      e.mode
    ), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function Rm(e, t, n) {
    return di(t, e.child, null, n), e = hl(t, t.pendingProps), e.flags |= 2, Tt(t), t.memoizedState = null, e;
  }
  function mb(e, t, n) {
    var a = t.pendingProps, l = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (ve) {
        if (a.mode === "hidden")
          return e = hl(t, a), t.lanes = 536870912, Ka(null, e);
        if (Er(t), (e = Pe) ? (e = Zp(
          e,
          zt
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: Tn !== null ? { id: Qt, overflow: Zt } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = bd(e), n.return = t, t.child = n, et = t, Pe = null)) : e = null, e === null) throw Vn(t);
        return t.lanes = 536870912, null;
      }
      return hl(t, a);
    }
    var u = e.memoizedState;
    if (u !== null) {
      var f = u.dehydrated;
      if (Er(t), l)
        if (t.flags & 256)
          t.flags &= -257, t = Rm(
            e,
            t,
            n
          );
        else if (t.memoizedState !== null)
          t.child = e.child, t.flags |= 128, t = null;
        else throw Error(o(558));
      else if (Ke || Hi(e, t, n, !1), l = (n & e.childLanes) !== 0, Ke || l) {
        if (a = Ae, a !== null && (f = Cf(a, n), f !== 0 && f !== u.retryLane))
          throw u.retryLane = f, ai(e, f), yt(a, e, f), Xr;
        Cl(), t = Rm(
          e,
          t,
          n
        );
      } else
        e = u.treeContext, Pe = Ot(f.nextSibling), et = t, ve = !0, Cn = null, zt = !1, e !== null && Nd(t, e), t = hl(t, a), t.flags |= 4096;
      return t;
    }
    return e = sn(e.child, {
      mode: a.mode,
      children: a.children
    }), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function gl(e, t) {
    var n = t.ref;
    if (n === null)
      e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object")
        throw Error(o(284));
      (e === null || e.ref !== n) && (t.flags |= 4194816);
    }
  }
  function Kr(e, t, n, a, l) {
    return ri(t), n = Cr(
      e,
      t,
      n,
      a,
      void 0,
      l
    ), a = Vr(), e !== null && !Ke ? (Br(e, t, l), fn(e, t, l)) : (ve && a && or(t), t.flags |= 1, nt(e, t, n, l), t.child);
  }
  function Om(e, t, n, a, l, u) {
    return ri(t), t.updateQueue = null, n = Ld(
      t,
      a,
      n,
      l
    ), Ud(e), a = Vr(), e !== null && !Ke ? (Br(e, t, u), fn(e, t, u)) : (ve && a && or(t), t.flags |= 1, nt(e, t, n, u), t.child);
  }
  function _m(e, t, n, a, l) {
    if (ri(t), t.stateNode === null) {
      var u = Oi, f = n.contextType;
      typeof f == "object" && f !== null && (u = tt(f)), u = new n(a, u), t.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = Gr, t.stateNode = u, u._reactInternals = t, u = t.stateNode, u.props = a, u.state = t.memoizedState, u.refs = {}, vr(t), f = n.contextType, u.context = typeof f == "object" && f !== null ? tt(f) : Oi, u.state = t.memoizedState, f = n.getDerivedStateFromProps, typeof f == "function" && (qr(
        t,
        n,
        f,
        a
      ), u.state = t.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (f = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), f !== u.state && Gr.enqueueReplaceState(u, u.state, null), Ha(t, a, u, l), La(), u.state = t.memoizedState), typeof u.componentDidMount == "function" && (t.flags |= 4194308), a = !0;
    } else if (e === null) {
      u = t.stateNode;
      var g = t.memoizedProps, N = pi(n, g);
      u.props = N;
      var B = u.context, P = n.contextType;
      f = Oi, typeof P == "object" && P !== null && (f = tt(P));
      var O = n.getDerivedStateFromProps;
      P = typeof O == "function" || typeof u.getSnapshotBeforeUpdate == "function", g = t.pendingProps !== g, P || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (g || B !== f) && Em(
        t,
        u,
        a,
        f
      ), An = !1;
      var k = t.memoizedState;
      u.state = k, Ha(t, a, u, l), La(), B = t.memoizedState, g || k !== B || An ? (typeof O == "function" && (qr(
        t,
        n,
        O,
        a
      ), B = t.memoizedState), (N = An || Dm(
        t,
        n,
        N,
        a,
        k,
        B,
        f
      )) ? (P || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = B), u.props = a, u.state = B, u.context = f, a = N) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), a = !1);
    } else {
      u = t.stateNode, br(e, t), f = t.memoizedProps, P = pi(n, f), u.props = P, O = t.pendingProps, k = u.context, B = n.contextType, N = Oi, typeof B == "object" && B !== null && (N = tt(B)), g = n.getDerivedStateFromProps, (B = typeof g == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (f !== O || k !== N) && Em(
        t,
        u,
        a,
        N
      ), An = !1, k = t.memoizedState, u.state = k, Ha(t, a, u, l), La();
      var M = t.memoizedState;
      f !== O || k !== M || An || e !== null && e.dependencies !== null && $s(e.dependencies) ? (typeof g == "function" && (qr(
        t,
        n,
        g,
        a
      ), M = t.memoizedState), (P = An || Dm(
        t,
        n,
        P,
        a,
        k,
        M,
        N
      ) || e !== null && e.dependencies !== null && $s(e.dependencies)) ? (B || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(a, M, N), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(
        a,
        M,
        N
      )), typeof u.componentDidUpdate == "function" && (t.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || f === e.memoizedProps && k === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || f === e.memoizedProps && k === e.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = M), u.props = a, u.state = M, u.context = N, a = P) : (typeof u.componentDidUpdate != "function" || f === e.memoizedProps && k === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || f === e.memoizedProps && k === e.memoizedState || (t.flags |= 1024), a = !1);
    }
    return u = a, gl(e, t), a = (t.flags & 128) !== 0, u || a ? (u = t.stateNode, n = a && typeof n.getDerivedStateFromError != "function" ? null : u.render(), t.flags |= 1, e !== null && a ? (t.child = di(
      t,
      e.child,
      null,
      l
    ), t.child = di(
      t,
      null,
      n,
      l
    )) : nt(e, t, n, l), t.memoizedState = u.state, e = t.child) : e = fn(
      e,
      t,
      l
    ), e;
  }
  function Um(e, t, n, a) {
    return li(), t.flags |= 256, nt(e, t, n, a), t.child;
  }
  var Qr = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Zr(e) {
    return { baseLanes: e, cachePool: Bd() };
  }
  function Fr(e, t, n) {
    return e = e !== null ? e.childLanes & ~n : 0, t && (e |= Vt), e;
  }
  function Lm(e, t, n) {
    var a = t.pendingProps, l = !1, u = (t.flags & 128) !== 0, f;
    if ((f = u) || (f = e !== null && e.memoizedState === null ? !1 : (He.current & 2) !== 0), f && (l = !0, t.flags &= -129), f = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (ve) {
        if (l ? Mn(t) : Pn(), (e = Pe) ? (e = Zp(
          e,
          zt
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: Tn !== null ? { id: Qt, overflow: Zt } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = bd(e), n.return = t, t.child = n, et = t, Pe = null)) : e = null, e === null) throw Vn(t);
        return wu(e) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var g = a.children;
      return a = a.fallback, l ? (Pn(), l = t.mode, g = yl(
        { mode: "hidden", children: g },
        l
      ), a = si(
        a,
        l,
        n,
        null
      ), g.return = t, a.return = t, g.sibling = a, t.child = g, a = t.child, a.memoizedState = Zr(n), a.childLanes = Fr(
        e,
        f,
        n
      ), t.memoizedState = Qr, Ka(null, a)) : (Mn(t), Jr(t, g));
    }
    var N = e.memoizedState;
    if (N !== null && (g = N.dehydrated, g !== null)) {
      if (u)
        t.flags & 256 ? (Mn(t), t.flags &= -257, t = $r(
          e,
          t,
          n
        )) : t.memoizedState !== null ? (Pn(), t.child = e.child, t.flags |= 128, t = null) : (Pn(), g = a.fallback, l = t.mode, a = yl(
          { mode: "visible", children: a.children },
          l
        ), g = si(
          g,
          l,
          n,
          null
        ), g.flags |= 2, a.return = t, g.return = t, a.sibling = g, t.child = a, di(
          t,
          e.child,
          null,
          n
        ), a = t.child, a.memoizedState = Zr(n), a.childLanes = Fr(
          e,
          f,
          n
        ), t.memoizedState = Qr, t = Ka(null, a));
      else if (Mn(t), wu(g)) {
        if (f = g.nextSibling && g.nextSibling.dataset, f) var B = f.dgst;
        f = B, a = Error(o(419)), a.stack = "", a.digest = f, ja({ value: a, source: null, stack: null }), t = $r(
          e,
          t,
          n
        );
      } else if (Ke || Hi(e, t, n, !1), f = (n & e.childLanes) !== 0, Ke || f) {
        if (f = Ae, f !== null && (a = Cf(f, n), a !== 0 && a !== N.retryLane))
          throw N.retryLane = a, ai(e, a), yt(f, e, a), Xr;
        ku(g) || Cl(), t = $r(
          e,
          t,
          n
        );
      } else
        ku(g) ? (t.flags |= 192, t.child = e.child, t = null) : (e = N.treeContext, Pe = Ot(
          g.nextSibling
        ), et = t, ve = !0, Cn = null, zt = !1, e !== null && Nd(t, e), t = Jr(
          t,
          a.children
        ), t.flags |= 4096);
      return t;
    }
    return l ? (Pn(), g = a.fallback, l = t.mode, N = e.child, B = N.sibling, a = sn(N, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = N.subtreeFlags & 65011712, B !== null ? g = sn(
      B,
      g
    ) : (g = si(
      g,
      l,
      n,
      null
    ), g.flags |= 2), g.return = t, a.return = t, a.sibling = g, t.child = a, Ka(null, a), a = t.child, g = e.child.memoizedState, g === null ? g = Zr(n) : (l = g.cachePool, l !== null ? (N = Ye._currentValue, l = l.parent !== N ? { parent: N, pool: N } : l) : l = Bd(), g = {
      baseLanes: g.baseLanes | n,
      cachePool: l
    }), a.memoizedState = g, a.childLanes = Fr(
      e,
      f,
      n
    ), t.memoizedState = Qr, Ka(e.child, a)) : (Mn(t), n = e.child, e = n.sibling, n = sn(n, {
      mode: "visible",
      children: a.children
    }), n.return = t, n.sibling = null, e !== null && (f = t.deletions, f === null ? (t.deletions = [e], t.flags |= 16) : f.push(e)), t.child = n, t.memoizedState = null, n);
  }
  function Jr(e, t) {
    return t = yl(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function yl(e, t) {
    return e = Dt(22, e, null, t), e.lanes = 0, e;
  }
  function $r(e, t, n) {
    return di(t, e.child, null, n), e = Jr(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function Hm(e, t, n) {
    e.lanes |= t;
    var a = e.alternate;
    a !== null && (a.lanes |= t), dr(e.return, t, n);
  }
  function Wr(e, t, n, a, l, u) {
    var f = e.memoizedState;
    f === null ? e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: a,
      tail: n,
      tailMode: l,
      treeForkCount: u
    } : (f.isBackwards = t, f.rendering = null, f.renderingStartTime = 0, f.last = a, f.tail = n, f.tailMode = l, f.treeForkCount = u);
  }
  function qm(e, t, n) {
    var a = t.pendingProps, l = a.revealOrder, u = a.tail;
    a = a.children;
    var f = He.current, g = (f & 2) !== 0;
    if (g ? (f = f & 1 | 2, t.flags |= 128) : f &= 1, Z(He, f), nt(e, t, a, n), a = ve ? Pa : 0, !g && e !== null && (e.flags & 128) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13)
          e.memoizedState !== null && Hm(e, n, t);
        else if (e.tag === 19)
          Hm(e, n, t);
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
          e = n.alternate, e !== null && sl(e) === null && (l = n), n = n.sibling;
        n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), Wr(
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
          if (e = l.alternate, e !== null && sl(e) === null) {
            t.child = l;
            break;
          }
          e = l.sibling, l.sibling = n, n = l, l = e;
        }
        Wr(
          t,
          !0,
          n,
          null,
          u,
          a
        );
        break;
      case "together":
        Wr(
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
  function fn(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), Rn |= t.lanes, (n & t.childLanes) === 0)
      if (e !== null) {
        if (Hi(
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
  function Ir(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && $s(e)));
  }
  function pb(e, t, n) {
    switch (t.tag) {
      case 3:
        ot(t, t.stateNode.containerInfo), Bn(t, Ye, e.memoizedState.cache), li();
        break;
      case 27:
      case 5:
        va(t);
        break;
      case 4:
        ot(t, t.stateNode.containerInfo);
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
          return t.flags |= 128, Er(t), null;
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null)
          return a.dehydrated !== null ? (Mn(t), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? Lm(e, t, n) : (Mn(t), e = fn(
            e,
            t,
            n
          ), e !== null ? e.sibling : null);
        Mn(t);
        break;
      case 19:
        var l = (e.flags & 128) !== 0;
        if (a = (n & t.childLanes) !== 0, a || (Hi(
          e,
          t,
          n,
          !1
        ), a = (n & t.childLanes) !== 0), l) {
          if (a)
            return qm(
              e,
              t,
              n
            );
          t.flags |= 128;
        }
        if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), Z(He, He.current), a) break;
        return null;
      case 22:
        return t.lanes = 0, jm(
          e,
          t,
          n,
          t.pendingProps
        );
      case 24:
        Bn(t, Ye, e.memoizedState.cache);
    }
    return fn(e, t, n);
  }
  function Gm(e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        Ke = !0;
      else {
        if (!Ir(e, n) && (t.flags & 128) === 0)
          return Ke = !1, pb(
            e,
            t,
            n
          );
        Ke = (e.flags & 131072) !== 0;
      }
    else
      Ke = !1, ve && (t.flags & 1048576) !== 0 && Sd(t, Pa, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var a = t.pendingProps;
          if (e = ci(t.elementType), t.type = e, typeof e == "function")
            ar(e) ? (a = pi(e, a), t.tag = 1, t = _m(
              null,
              t,
              e,
              a,
              n
            )) : (t.tag = 0, t = Kr(
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
                t.tag = 11, t = wm(
                  null,
                  t,
                  e,
                  a,
                  n
                );
                break e;
              } else if (l === R) {
                t.tag = 14, t = Mm(
                  null,
                  t,
                  e,
                  a,
                  n
                );
                break e;
              }
            }
            throw t = ze(e) || e, Error(o(306, t, ""));
          }
        }
        return t;
      case 0:
        return Kr(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 1:
        return a = t.type, l = pi(
          a,
          t.pendingProps
        ), _m(
          e,
          t,
          a,
          l,
          n
        );
      case 3:
        e: {
          if (ot(
            t,
            t.stateNode.containerInfo
          ), e === null) throw Error(o(387));
          a = t.pendingProps;
          var u = t.memoizedState;
          l = u.element, br(e, t), Ha(t, a, null, n);
          var f = t.memoizedState;
          if (a = f.cache, Bn(t, Ye, a), a !== u.cache && mr(
            t,
            [Ye],
            n,
            !0
          ), La(), a = f.element, u.isDehydrated)
            if (u = {
              element: a,
              isDehydrated: !1,
              cache: f.cache
            }, t.updateQueue.baseState = u, t.memoizedState = u, t.flags & 256) {
              t = Um(
                e,
                t,
                a,
                n
              );
              break e;
            } else if (a !== l) {
              l = Mt(
                Error(o(424)),
                t
              ), ja(l), t = Um(
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
              for (Pe = Ot(e.firstChild), et = t, ve = !0, Cn = null, zt = !0, n = jd(
                t,
                null,
                a,
                n
              ), t.child = n; n; )
                n.flags = n.flags & -3 | 4096, n = n.sibling;
            }
          else {
            if (li(), a === l) {
              t = fn(
                e,
                t,
                n
              );
              break e;
            }
            nt(e, t, a, n);
          }
          t = t.child;
        }
        return t;
      case 26:
        return gl(e, t), e === null ? (n = eh(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = n : ve || (n = t.type, e = t.pendingProps, a = Pl(
          fe.current
        ).createElement(n), a[Ie] = t, a[ft] = e, it(a, n, e), $e(a), t.stateNode = a) : t.memoizedState = eh(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return va(t), e === null && ve && (a = t.stateNode = $p(
          t.type,
          t.pendingProps,
          fe.current
        ), et = t, zt = !0, l = Pe, Hn(t.type) ? (Mu = l, Pe = Ot(a.firstChild)) : Pe = l), nt(
          e,
          t,
          t.pendingProps.children,
          n
        ), gl(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && ve && ((l = a = Pe) && (a = Yb(
          a,
          t.type,
          t.pendingProps,
          zt
        ), a !== null ? (t.stateNode = a, et = t, Pe = Ot(a.firstChild), zt = !1, l = !0) : l = !1), l || Vn(t)), va(t), l = t.type, u = t.pendingProps, f = e !== null ? e.memoizedProps : null, a = u.children, Vu(l, u) ? a = null : f !== null && Vu(l, f) && (t.flags |= 32), t.memoizedState !== null && (l = Cr(
          e,
          t,
          sb,
          null,
          null,
          n
        ), os._currentValue = l), gl(e, t), nt(e, t, a, n), t.child;
      case 6:
        return e === null && ve && ((e = n = Pe) && (n = Xb(
          n,
          t.pendingProps,
          zt
        ), n !== null ? (t.stateNode = n, et = t, Pe = null, e = !0) : e = !1), e || Vn(t)), null;
      case 13:
        return Lm(e, t, n);
      case 4:
        return ot(
          t,
          t.stateNode.containerInfo
        ), a = t.pendingProps, e === null ? t.child = di(
          t,
          null,
          a,
          n
        ) : nt(e, t, a, n), t.child;
      case 11:
        return wm(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 7:
        return nt(
          e,
          t,
          t.pendingProps,
          n
        ), t.child;
      case 8:
        return nt(
          e,
          t,
          t.pendingProps.children,
          n
        ), t.child;
      case 12:
        return nt(
          e,
          t,
          t.pendingProps.children,
          n
        ), t.child;
      case 10:
        return a = t.pendingProps, Bn(t, t.type, a.value), nt(e, t, a.children, n), t.child;
      case 9:
        return l = t.type._context, a = t.pendingProps.children, ri(t), l = tt(l), a = a(l), t.flags |= 1, nt(e, t, a, n), t.child;
      case 14:
        return Mm(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 15:
        return Pm(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 19:
        return qm(e, t, n);
      case 31:
        return mb(e, t, n);
      case 22:
        return jm(
          e,
          t,
          n,
          t.pendingProps
        );
      case 24:
        return ri(t), a = tt(Ye), e === null ? (l = gr(), l === null && (l = Ae, u = pr(), l.pooledCache = u, u.refCount++, u !== null && (l.pooledCacheLanes |= n), l = u), t.memoizedState = { parent: a, cache: l }, vr(t), Bn(t, Ye, l)) : ((e.lanes & n) !== 0 && (br(e, t), Ha(t, null, null, n), La()), l = e.memoizedState, u = t.memoizedState, l.parent !== a ? (l = { parent: a, cache: a }, t.memoizedState = l, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = l), Bn(t, Ye, a)) : (a = u.cache, Bn(t, Ye, a), a !== l.cache && mr(
          t,
          [Ye],
          n,
          !0
        ))), nt(
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
  function eu(e, t, n, a, l) {
    if ((t = (e.mode & 32) !== 0) && (t = !1), t) {
      if (e.flags |= 16777216, (l & 335544128) === l)
        if (e.stateNode.complete) e.flags |= 8192;
        else if (gp()) e.flags |= 8192;
        else
          throw fi = tl, yr;
    } else e.flags &= -16777217;
  }
  function Ym(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !sh(t))
      if (gp()) e.flags |= 8192;
      else
        throw fi = tl, yr;
  }
  function vl(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? Df() : 536870912, e.lanes |= t, Ii |= t);
  }
  function Qa(e, t) {
    if (!ve)
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
  function je(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, a = 0;
    if (t)
      for (var l = e.child; l !== null; )
        n |= l.lanes | l.childLanes, a |= l.subtreeFlags & 65011712, a |= l.flags & 65011712, l.return = e, l = l.sibling;
    else
      for (l = e.child; l !== null; )
        n |= l.lanes | l.childLanes, a |= l.subtreeFlags, a |= l.flags, l.return = e, l = l.sibling;
    return e.subtreeFlags |= a, e.childLanes = n, t;
  }
  function hb(e, t, n) {
    var a = t.pendingProps;
    switch (rr(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return je(t), null;
      case 1:
        return je(t), null;
      case 3:
        return n = t.stateNode, a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), rn(Ye), Le(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (Li(t) ? dn(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, cr())), je(t), null;
      case 26:
        var l = t.type, u = t.memoizedState;
        return e === null ? (dn(t), u !== null ? (je(t), Ym(t, u)) : (je(t), eu(
          t,
          l,
          null,
          a,
          n
        ))) : u ? u !== e.memoizedState ? (dn(t), je(t), Ym(t, u)) : (je(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== a && dn(t), je(t), eu(
          t,
          l,
          e,
          a,
          n
        )), null;
      case 27:
        if (As(t), n = fe.current, l = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== a && dn(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(o(166));
            return je(t), null;
          }
          e = ee.current, Li(t) ? Dd(t) : (e = $p(l, a, n), t.stateNode = e, dn(t));
        }
        return je(t), null;
      case 5:
        if (As(t), l = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== a && dn(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(o(166));
            return je(t), null;
          }
          if (u = ee.current, Li(t))
            Dd(t);
          else {
            var f = Pl(
              fe.current
            );
            switch (u) {
              case 1:
                u = f.createElementNS(
                  "http://www.w3.org/2000/svg",
                  l
                );
                break;
              case 2:
                u = f.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  l
                );
                break;
              default:
                switch (l) {
                  case "svg":
                    u = f.createElementNS(
                      "http://www.w3.org/2000/svg",
                      l
                    );
                    break;
                  case "math":
                    u = f.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      l
                    );
                    break;
                  case "script":
                    u = f.createElement("div"), u.innerHTML = "<script><\/script>", u = u.removeChild(
                      u.firstChild
                    );
                    break;
                  case "select":
                    u = typeof a.is == "string" ? f.createElement("select", {
                      is: a.is
                    }) : f.createElement("select"), a.multiple ? u.multiple = !0 : a.size && (u.size = a.size);
                    break;
                  default:
                    u = typeof a.is == "string" ? f.createElement(l, { is: a.is }) : f.createElement(l);
                }
            }
            u[Ie] = t, u[ft] = a;
            e: for (f = t.child; f !== null; ) {
              if (f.tag === 5 || f.tag === 6)
                u.appendChild(f.stateNode);
              else if (f.tag !== 4 && f.tag !== 27 && f.child !== null) {
                f.child.return = f, f = f.child;
                continue;
              }
              if (f === t) break e;
              for (; f.sibling === null; ) {
                if (f.return === null || f.return === t)
                  break e;
                f = f.return;
              }
              f.sibling.return = f.return, f = f.sibling;
            }
            t.stateNode = u;
            e: switch (it(u, l, a), l) {
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
            a && dn(t);
          }
        }
        return je(t), eu(
          t,
          t.type,
          e === null ? null : e.memoizedProps,
          t.pendingProps,
          n
        ), null;
      case 6:
        if (e && t.stateNode != null)
          e.memoizedProps !== a && dn(t);
        else {
          if (typeof a != "string" && t.stateNode === null)
            throw Error(o(166));
          if (e = fe.current, Li(t)) {
            if (e = t.stateNode, n = t.memoizedProps, a = null, l = et, l !== null)
              switch (l.tag) {
                case 27:
                case 5:
                  a = l.memoizedProps;
              }
            e[Ie] = t, e = !!(e.nodeValue === n || a !== null && a.suppressHydrationWarning === !0 || Lp(e.nodeValue, n)), e || Vn(t, !0);
          } else
            e = Pl(e).createTextNode(
              a
            ), e[Ie] = t, t.stateNode = e;
        }
        return je(t), null;
      case 31:
        if (n = t.memoizedState, e === null || e.memoizedState !== null) {
          if (a = Li(t), n !== null) {
            if (e === null) {
              if (!a) throw Error(o(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(557));
              e[Ie] = t;
            } else
              li(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            je(t), e = !1;
          } else
            n = cr(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), e = !0;
          if (!e)
            return t.flags & 256 ? (Tt(t), t) : (Tt(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(o(558));
        }
        return je(t), null;
      case 13:
        if (a = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (l = Li(t), a !== null && a.dehydrated !== null) {
            if (e === null) {
              if (!l) throw Error(o(318));
              if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(o(317));
              l[Ie] = t;
            } else
              li(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            je(t), l = !1;
          } else
            l = cr(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = l), l = !0;
          if (!l)
            return t.flags & 256 ? (Tt(t), t) : (Tt(t), null);
        }
        return Tt(t), (t.flags & 128) !== 0 ? (t.lanes = n, t) : (n = a !== null, e = e !== null && e.memoizedState !== null, n && (a = t.child, l = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (l = a.alternate.memoizedState.cachePool.pool), u = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (u = a.memoizedState.cachePool.pool), u !== l && (a.flags |= 2048)), n !== e && n && (t.child.flags |= 8192), vl(t, t.updateQueue), je(t), null);
      case 4:
        return Le(), e === null && Nu(t.stateNode.containerInfo), je(t), null;
      case 10:
        return rn(t.type), je(t), null;
      case 19:
        if (_(He), a = t.memoizedState, a === null) return je(t), null;
        if (l = (t.flags & 128) !== 0, u = a.rendering, u === null)
          if (l) Qa(a, !1);
          else {
            if (Ue !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (u = sl(e), u !== null) {
                  for (t.flags |= 128, Qa(a, !1), e = u.updateQueue, t.updateQueue = e, vl(t, e), t.subtreeFlags = 0, e = n, n = t.child; n !== null; )
                    vd(n, e), n = n.sibling;
                  return Z(
                    He,
                    He.current & 1 | 2
                  ), ve && ln(t, a.treeForkCount), t.child;
                }
                e = e.sibling;
              }
            a.tail !== null && bt() > Dl && (t.flags |= 128, l = !0, Qa(a, !1), t.lanes = 4194304);
          }
        else {
          if (!l)
            if (e = sl(u), e !== null) {
              if (t.flags |= 128, l = !0, e = e.updateQueue, t.updateQueue = e, vl(t, e), Qa(a, !0), a.tail === null && a.tailMode === "hidden" && !u.alternate && !ve)
                return je(t), null;
            } else
              2 * bt() - a.renderingStartTime > Dl && n !== 536870912 && (t.flags |= 128, l = !0, Qa(a, !1), t.lanes = 4194304);
          a.isBackwards ? (u.sibling = t.child, t.child = u) : (e = a.last, e !== null ? e.sibling = u : t.child = u, a.last = u);
        }
        return a.tail !== null ? (e = a.tail, a.rendering = e, a.tail = e.sibling, a.renderingStartTime = bt(), e.sibling = null, n = He.current, Z(
          He,
          l ? n & 1 | 2 : n & 1
        ), ve && ln(t, a.treeForkCount), e) : (je(t), null);
      case 22:
      case 23:
        return Tt(t), Dr(), a = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192), a ? (n & 536870912) !== 0 && (t.flags & 128) === 0 && (je(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : je(t), n = t.updateQueue, n !== null && vl(t, n.retryQueue), n = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), a = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), a !== n && (t.flags |= 2048), e !== null && _(ui), null;
      case 24:
        return n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), rn(Ye), je(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(o(156, t.tag));
  }
  function gb(e, t) {
    switch (rr(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return rn(Ye), Le(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return As(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (Tt(t), t.alternate === null)
            throw Error(o(340));
          li();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 13:
        if (Tt(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(o(340));
          li();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return _(He), null;
      case 4:
        return Le(), null;
      case 10:
        return rn(t.type), null;
      case 22:
      case 23:
        return Tt(t), Dr(), e !== null && _(ui), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return rn(Ye), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Xm(e, t) {
    switch (rr(t), t.tag) {
      case 3:
        rn(Ye), Le();
        break;
      case 26:
      case 27:
      case 5:
        As(t);
        break;
      case 4:
        Le();
        break;
      case 31:
        t.memoizedState !== null && Tt(t);
        break;
      case 13:
        Tt(t);
        break;
      case 19:
        _(He);
        break;
      case 10:
        rn(t.type);
        break;
      case 22:
      case 23:
        Tt(t), Dr(), e !== null && _(ui);
        break;
      case 24:
        rn(Ye);
    }
  }
  function Za(e, t) {
    try {
      var n = t.updateQueue, a = n !== null ? n.lastEffect : null;
      if (a !== null) {
        var l = a.next;
        n = l;
        do {
          if ((n.tag & e) === e) {
            a = void 0;
            var u = n.create, f = n.inst;
            a = u(), f.destroy = a;
          }
          n = n.next;
        } while (n !== l);
      }
    } catch (g) {
      Te(t, t.return, g);
    }
  }
  function jn(e, t, n) {
    try {
      var a = t.updateQueue, l = a !== null ? a.lastEffect : null;
      if (l !== null) {
        var u = l.next;
        a = u;
        do {
          if ((a.tag & e) === e) {
            var f = a.inst, g = f.destroy;
            if (g !== void 0) {
              f.destroy = void 0, l = t;
              var N = n, B = g;
              try {
                B();
              } catch (P) {
                Te(
                  l,
                  N,
                  P
                );
              }
            }
          }
          a = a.next;
        } while (a !== u);
      }
    } catch (P) {
      Te(t, t.return, P);
    }
  }
  function Km(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var n = e.stateNode;
      try {
        Rd(t, n);
      } catch (a) {
        Te(e, e.return, a);
      }
    }
  }
  function Qm(e, t, n) {
    n.props = pi(
      e.type,
      e.memoizedProps
    ), n.state = e.memoizedState;
    try {
      n.componentWillUnmount();
    } catch (a) {
      Te(e, t, a);
    }
  }
  function Fa(e, t) {
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
      Te(e, t, l);
    }
  }
  function Ft(e, t) {
    var n = e.ref, a = e.refCleanup;
    if (n !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (l) {
          Te(e, t, l);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (l) {
          Te(e, t, l);
        }
      else n.current = null;
  }
  function Zm(e) {
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
      Te(e, e.return, l);
    }
  }
  function tu(e, t, n) {
    try {
      var a = e.stateNode;
      _b(a, e.type, n, t), a[ft] = t;
    } catch (l) {
      Te(e, e.return, l);
    }
  }
  function Fm(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Hn(e.type) || e.tag === 4;
  }
  function nu(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Fm(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && Hn(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function iu(e, t, n) {
    var a = e.tag;
    if (a === 5 || a === 6)
      e = e.stateNode, t ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(e, t) : (t = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, t.appendChild(e), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = nn));
    else if (a !== 4 && (a === 27 && Hn(e.type) && (n = e.stateNode, t = null), e = e.child, e !== null))
      for (iu(e, t, n), e = e.sibling; e !== null; )
        iu(e, t, n), e = e.sibling;
  }
  function bl(e, t, n) {
    var a = e.tag;
    if (a === 5 || a === 6)
      e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (a !== 4 && (a === 27 && Hn(e.type) && (n = e.stateNode), e = e.child, e !== null))
      for (bl(e, t, n), e = e.sibling; e !== null; )
        bl(e, t, n), e = e.sibling;
  }
  function Jm(e) {
    var t = e.stateNode, n = e.memoizedProps;
    try {
      for (var a = e.type, l = t.attributes; l.length; )
        t.removeAttributeNode(l[0]);
      it(t, a, n), t[Ie] = e, t[ft] = n;
    } catch (u) {
      Te(e, e.return, u);
    }
  }
  var mn = !1, Qe = !1, au = !1, $m = typeof WeakSet == "function" ? WeakSet : Set, We = null;
  function yb(e, t) {
    if (e = e.containerInfo, Tu = Ll, e = ud(e), $o(e)) {
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
            var f = 0, g = -1, N = -1, B = 0, P = 0, O = e, k = null;
            t: for (; ; ) {
              for (var M; O !== n || l !== 0 && O.nodeType !== 3 || (g = f + l), O !== u || a !== 0 && O.nodeType !== 3 || (N = f + a), O.nodeType === 3 && (f += O.nodeValue.length), (M = O.firstChild) !== null; )
                k = O, O = M;
              for (; ; ) {
                if (O === e) break t;
                if (k === n && ++B === l && (g = f), k === u && ++P === a && (N = f), (M = O.nextSibling) !== null) break;
                O = k, k = O.parentNode;
              }
              O = M;
            }
            n = g === -1 || N === -1 ? null : { start: g, end: N };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (Cu = { focusedElem: e, selectionRange: n }, Ll = !1, We = t; We !== null; )
      if (t = We, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
        e.return = t, We = e;
      else
        for (; We !== null; ) {
          switch (t = We, u = t.alternate, e = t.flags, t.tag) {
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
                  var W = pi(
                    n.type,
                    l
                  );
                  e = a.getSnapshotBeforeUpdate(
                    W,
                    u
                  ), a.__reactInternalSnapshotBeforeUpdate = e;
                } catch (ae) {
                  Te(
                    n,
                    n.return,
                    ae
                  );
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (e = t.stateNode.containerInfo, n = e.nodeType, n === 9)
                  Au(e);
                else if (n === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Au(e);
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
            e.return = t.return, We = e;
            break;
          }
          We = t.return;
        }
  }
  function Wm(e, t, n) {
    var a = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        hn(e, n), a & 4 && Za(5, n);
        break;
      case 1:
        if (hn(e, n), a & 4)
          if (e = n.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (f) {
              Te(n, n.return, f);
            }
          else {
            var l = pi(
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
            } catch (f) {
              Te(
                n,
                n.return,
                f
              );
            }
          }
        a & 64 && Km(n), a & 512 && Fa(n, n.return);
        break;
      case 3:
        if (hn(e, n), a & 64 && (e = n.updateQueue, e !== null)) {
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
            Rd(e, t);
          } catch (f) {
            Te(n, n.return, f);
          }
        }
        break;
      case 27:
        t === null && a & 4 && Jm(n);
      case 26:
      case 5:
        hn(e, n), t === null && a & 4 && Zm(n), a & 512 && Fa(n, n.return);
        break;
      case 12:
        hn(e, n);
        break;
      case 31:
        hn(e, n), a & 4 && tp(e, n);
        break;
      case 13:
        hn(e, n), a & 4 && np(e, n), a & 64 && (e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null && (n = Cb.bind(
          null,
          n
        ), Kb(e, n))));
        break;
      case 22:
        if (a = n.memoizedState !== null || mn, !a) {
          t = t !== null && t.memoizedState !== null || Qe, l = mn;
          var u = Qe;
          mn = a, (Qe = t) && !u ? gn(
            e,
            n,
            (n.subtreeFlags & 8772) !== 0
          ) : hn(e, n), mn = l, Qe = u;
        }
        break;
      case 30:
        break;
      default:
        hn(e, n);
    }
  }
  function Im(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Im(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && jo(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var Re = null, mt = !1;
  function pn(e, t, n) {
    for (n = n.child; n !== null; )
      ep(e, t, n), n = n.sibling;
  }
  function ep(e, t, n) {
    if (xt && typeof xt.onCommitFiberUnmount == "function")
      try {
        xt.onCommitFiberUnmount(ba, n);
      } catch {
      }
    switch (n.tag) {
      case 26:
        Qe || Ft(n, t), pn(
          e,
          t,
          n
        ), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode, n.parentNode.removeChild(n));
        break;
      case 27:
        Qe || Ft(n, t);
        var a = Re, l = mt;
        Hn(n.type) && (Re = n.stateNode, mt = !1), pn(
          e,
          t,
          n
        ), as(n.stateNode), Re = a, mt = l;
        break;
      case 5:
        Qe || Ft(n, t);
      case 6:
        if (a = Re, l = mt, Re = null, pn(
          e,
          t,
          n
        ), Re = a, mt = l, Re !== null)
          if (mt)
            try {
              (Re.nodeType === 9 ? Re.body : Re.nodeName === "HTML" ? Re.ownerDocument.body : Re).removeChild(n.stateNode);
            } catch (u) {
              Te(
                n,
                t,
                u
              );
            }
          else
            try {
              Re.removeChild(n.stateNode);
            } catch (u) {
              Te(
                n,
                t,
                u
              );
            }
        break;
      case 18:
        Re !== null && (mt ? (e = Re, Kp(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          n.stateNode
        ), oa(e)) : Kp(Re, n.stateNode));
        break;
      case 4:
        a = Re, l = mt, Re = n.stateNode.containerInfo, mt = !0, pn(
          e,
          t,
          n
        ), Re = a, mt = l;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        jn(2, n, t), Qe || jn(4, n, t), pn(
          e,
          t,
          n
        );
        break;
      case 1:
        Qe || (Ft(n, t), a = n.stateNode, typeof a.componentWillUnmount == "function" && Qm(
          n,
          t,
          a
        )), pn(
          e,
          t,
          n
        );
        break;
      case 21:
        pn(
          e,
          t,
          n
        );
        break;
      case 22:
        Qe = (a = Qe) || n.memoizedState !== null, pn(
          e,
          t,
          n
        ), Qe = a;
        break;
      default:
        pn(
          e,
          t,
          n
        );
    }
  }
  function tp(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        oa(e);
      } catch (n) {
        Te(t, t.return, n);
      }
    }
  }
  function np(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        oa(e);
      } catch (n) {
        Te(t, t.return, n);
      }
  }
  function vb(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new $m()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new $m()), t;
      default:
        throw Error(o(435, e.tag));
    }
  }
  function xl(e, t) {
    var n = vb(e);
    t.forEach(function(a) {
      if (!n.has(a)) {
        n.add(a);
        var l = Vb.bind(null, e, a);
        a.then(l, l);
      }
    });
  }
  function pt(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var a = 0; a < n.length; a++) {
        var l = n[a], u = e, f = t, g = f;
        e: for (; g !== null; ) {
          switch (g.tag) {
            case 27:
              if (Hn(g.type)) {
                Re = g.stateNode, mt = !1;
                break e;
              }
              break;
            case 5:
              Re = g.stateNode, mt = !1;
              break e;
            case 3:
            case 4:
              Re = g.stateNode.containerInfo, mt = !0;
              break e;
          }
          g = g.return;
        }
        if (Re === null) throw Error(o(160));
        ep(u, f, l), Re = null, mt = !1, u = l.alternate, u !== null && (u.return = null), l.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        ip(t, e), t = t.sibling;
  }
  var qt = null;
  function ip(e, t) {
    var n = e.alternate, a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        pt(t, e), ht(e), a & 4 && (jn(3, e, e.return), Za(3, e), jn(5, e, e.return));
        break;
      case 1:
        pt(t, e), ht(e), a & 512 && (Qe || n === null || Ft(n, n.return)), a & 64 && mn && (e = e.updateQueue, e !== null && (a = e.callbacks, a !== null && (n = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = n === null ? a : n.concat(a))));
        break;
      case 26:
        var l = qt;
        if (pt(t, e), ht(e), a & 512 && (Qe || n === null || Ft(n, n.return)), a & 4) {
          var u = n !== null ? n.memoizedState : null;
          if (a = e.memoizedState, n === null)
            if (a === null)
              if (e.stateNode === null) {
                e: {
                  a = e.type, n = e.memoizedProps, l = l.ownerDocument || l;
                  t: switch (a) {
                    case "title":
                      u = l.getElementsByTagName("title")[0], (!u || u[Na] || u[Ie] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = l.createElement(a), l.head.insertBefore(
                        u,
                        l.querySelector("head > title")
                      )), it(u, a, n), u[Ie] = e, $e(u), a = u;
                      break e;
                    case "link":
                      var f = ih(
                        "link",
                        "href",
                        l
                      ).get(a + (n.href || ""));
                      if (f) {
                        for (var g = 0; g < f.length; g++)
                          if (u = f[g], u.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && u.getAttribute("rel") === (n.rel == null ? null : n.rel) && u.getAttribute("title") === (n.title == null ? null : n.title) && u.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
                            f.splice(g, 1);
                            break t;
                          }
                      }
                      u = l.createElement(a), it(u, a, n), l.head.appendChild(u);
                      break;
                    case "meta":
                      if (f = ih(
                        "meta",
                        "content",
                        l
                      ).get(a + (n.content || ""))) {
                        for (g = 0; g < f.length; g++)
                          if (u = f[g], u.getAttribute("content") === (n.content == null ? null : "" + n.content) && u.getAttribute("name") === (n.name == null ? null : n.name) && u.getAttribute("property") === (n.property == null ? null : n.property) && u.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && u.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
                            f.splice(g, 1);
                            break t;
                          }
                      }
                      u = l.createElement(a), it(u, a, n), l.head.appendChild(u);
                      break;
                    default:
                      throw Error(o(468, a));
                  }
                  u[Ie] = e, $e(u), a = u;
                }
                e.stateNode = a;
              } else
                ah(
                  l,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = nh(
                l,
                a,
                e.memoizedProps
              );
          else
            u !== a ? (u === null ? n.stateNode !== null && (n = n.stateNode, n.parentNode.removeChild(n)) : u.count--, a === null ? ah(
              l,
              e.type,
              e.stateNode
            ) : nh(
              l,
              a,
              e.memoizedProps
            )) : a === null && e.stateNode !== null && tu(
              e,
              e.memoizedProps,
              n.memoizedProps
            );
        }
        break;
      case 27:
        pt(t, e), ht(e), a & 512 && (Qe || n === null || Ft(n, n.return)), n !== null && a & 4 && tu(
          e,
          e.memoizedProps,
          n.memoizedProps
        );
        break;
      case 5:
        if (pt(t, e), ht(e), a & 512 && (Qe || n === null || Ft(n, n.return)), e.flags & 32) {
          l = e.stateNode;
          try {
            ki(l, "");
          } catch (W) {
            Te(e, e.return, W);
          }
        }
        a & 4 && e.stateNode != null && (l = e.memoizedProps, tu(
          e,
          l,
          n !== null ? n.memoizedProps : l
        )), a & 1024 && (au = !0);
        break;
      case 6:
        if (pt(t, e), ht(e), a & 4) {
          if (e.stateNode === null)
            throw Error(o(162));
          a = e.memoizedProps, n = e.stateNode;
          try {
            n.nodeValue = a;
          } catch (W) {
            Te(e, e.return, W);
          }
        }
        break;
      case 3:
        if (Rl = null, l = qt, qt = jl(t.containerInfo), pt(t, e), qt = l, ht(e), a & 4 && n !== null && n.memoizedState.isDehydrated)
          try {
            oa(t.containerInfo);
          } catch (W) {
            Te(e, e.return, W);
          }
        au && (au = !1, ap(e));
        break;
      case 4:
        a = qt, qt = jl(
          e.stateNode.containerInfo
        ), pt(t, e), ht(e), qt = a;
        break;
      case 12:
        pt(t, e), ht(e);
        break;
      case 31:
        pt(t, e), ht(e), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, xl(e, a)));
        break;
      case 13:
        pt(t, e), ht(e), e.child.flags & 8192 && e.memoizedState !== null != (n !== null && n.memoizedState !== null) && (Nl = bt()), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, xl(e, a)));
        break;
      case 22:
        l = e.memoizedState !== null;
        var N = n !== null && n.memoizedState !== null, B = mn, P = Qe;
        if (mn = B || l, Qe = P || N, pt(t, e), Qe = P, mn = B, ht(e), a & 8192)
          e: for (t = e.stateNode, t._visibility = l ? t._visibility & -2 : t._visibility | 1, l && (n === null || N || mn || Qe || hi(e)), n = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (n === null) {
                N = n = t;
                try {
                  if (u = N.stateNode, l)
                    f = u.style, typeof f.setProperty == "function" ? f.setProperty("display", "none", "important") : f.display = "none";
                  else {
                    g = N.stateNode;
                    var O = N.memoizedProps.style, k = O != null && O.hasOwnProperty("display") ? O.display : null;
                    g.style.display = k == null || typeof k == "boolean" ? "" : ("" + k).trim();
                  }
                } catch (W) {
                  Te(N, N.return, W);
                }
              }
            } else if (t.tag === 6) {
              if (n === null) {
                N = t;
                try {
                  N.stateNode.nodeValue = l ? "" : N.memoizedProps;
                } catch (W) {
                  Te(N, N.return, W);
                }
              }
            } else if (t.tag === 18) {
              if (n === null) {
                N = t;
                try {
                  var M = N.stateNode;
                  l ? Qp(M, !0) : Qp(N.stateNode, !1);
                } catch (W) {
                  Te(N, N.return, W);
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
        a & 4 && (a = e.updateQueue, a !== null && (n = a.retryQueue, n !== null && (a.retryQueue = null, xl(e, n))));
        break;
      case 19:
        pt(t, e), ht(e), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, xl(e, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        pt(t, e), ht(e);
    }
  }
  function ht(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var n, a = e.return; a !== null; ) {
          if (Fm(a)) {
            n = a;
            break;
          }
          a = a.return;
        }
        if (n == null) throw Error(o(160));
        switch (n.tag) {
          case 27:
            var l = n.stateNode, u = nu(e);
            bl(e, u, l);
            break;
          case 5:
            var f = n.stateNode;
            n.flags & 32 && (ki(f, ""), n.flags &= -33);
            var g = nu(e);
            bl(e, g, f);
            break;
          case 3:
          case 4:
            var N = n.stateNode.containerInfo, B = nu(e);
            iu(
              e,
              B,
              N
            );
            break;
          default:
            throw Error(o(161));
        }
      } catch (P) {
        Te(e, e.return, P);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function ap(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        ap(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
      }
  }
  function hn(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        Wm(e, t.alternate, t), t = t.sibling;
  }
  function hi(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          jn(4, t, t.return), hi(t);
          break;
        case 1:
          Ft(t, t.return);
          var n = t.stateNode;
          typeof n.componentWillUnmount == "function" && Qm(
            t,
            t.return,
            n
          ), hi(t);
          break;
        case 27:
          as(t.stateNode);
        case 26:
        case 5:
          Ft(t, t.return), hi(t);
          break;
        case 22:
          t.memoizedState === null && hi(t);
          break;
        case 30:
          hi(t);
          break;
        default:
          hi(t);
      }
      e = e.sibling;
    }
  }
  function gn(e, t, n) {
    for (n = n && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var a = t.alternate, l = e, u = t, f = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          gn(
            l,
            u,
            n
          ), Za(4, u);
          break;
        case 1:
          if (gn(
            l,
            u,
            n
          ), a = u, l = a.stateNode, typeof l.componentDidMount == "function")
            try {
              l.componentDidMount();
            } catch (B) {
              Te(a, a.return, B);
            }
          if (a = u, l = a.updateQueue, l !== null) {
            var g = a.stateNode;
            try {
              var N = l.shared.hiddenCallbacks;
              if (N !== null)
                for (l.shared.hiddenCallbacks = null, l = 0; l < N.length; l++)
                  zd(N[l], g);
            } catch (B) {
              Te(a, a.return, B);
            }
          }
          n && f & 64 && Km(u), Fa(u, u.return);
          break;
        case 27:
          Jm(u);
        case 26:
        case 5:
          gn(
            l,
            u,
            n
          ), n && a === null && f & 4 && Zm(u), Fa(u, u.return);
          break;
        case 12:
          gn(
            l,
            u,
            n
          );
          break;
        case 31:
          gn(
            l,
            u,
            n
          ), n && f & 4 && tp(l, u);
          break;
        case 13:
          gn(
            l,
            u,
            n
          ), n && f & 4 && np(l, u);
          break;
        case 22:
          u.memoizedState === null && gn(
            l,
            u,
            n
          ), Fa(u, u.return);
          break;
        case 30:
          break;
        default:
          gn(
            l,
            u,
            n
          );
      }
      t = t.sibling;
    }
  }
  function su(e, t) {
    var n = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== n && (e != null && e.refCount++, n != null && za(n));
  }
  function lu(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && za(e));
  }
  function Gt(e, t, n, a) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        sp(
          e,
          t,
          n,
          a
        ), t = t.sibling;
  }
  function sp(e, t, n, a) {
    var l = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Gt(
          e,
          t,
          n,
          a
        ), l & 2048 && Za(9, t);
        break;
      case 1:
        Gt(
          e,
          t,
          n,
          a
        );
        break;
      case 3:
        Gt(
          e,
          t,
          n,
          a
        ), l & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && za(e)));
        break;
      case 12:
        if (l & 2048) {
          Gt(
            e,
            t,
            n,
            a
          ), e = t.stateNode;
          try {
            var u = t.memoizedProps, f = u.id, g = u.onPostCommit;
            typeof g == "function" && g(
              f,
              t.alternate === null ? "mount" : "update",
              e.passiveEffectDuration,
              -0
            );
          } catch (N) {
            Te(t, t.return, N);
          }
        } else
          Gt(
            e,
            t,
            n,
            a
          );
        break;
      case 31:
        Gt(
          e,
          t,
          n,
          a
        );
        break;
      case 13:
        Gt(
          e,
          t,
          n,
          a
        );
        break;
      case 23:
        break;
      case 22:
        u = t.stateNode, f = t.alternate, t.memoizedState !== null ? u._visibility & 2 ? Gt(
          e,
          t,
          n,
          a
        ) : Ja(e, t) : u._visibility & 2 ? Gt(
          e,
          t,
          n,
          a
        ) : (u._visibility |= 2, Ji(
          e,
          t,
          n,
          a,
          (t.subtreeFlags & 10256) !== 0 || !1
        )), l & 2048 && su(f, t);
        break;
      case 24:
        Gt(
          e,
          t,
          n,
          a
        ), l & 2048 && lu(t.alternate, t);
        break;
      default:
        Gt(
          e,
          t,
          n,
          a
        );
    }
  }
  function Ji(e, t, n, a, l) {
    for (l = l && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var u = e, f = t, g = n, N = a, B = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          Ji(
            u,
            f,
            g,
            N,
            l
          ), Za(8, f);
          break;
        case 23:
          break;
        case 22:
          var P = f.stateNode;
          f.memoizedState !== null ? P._visibility & 2 ? Ji(
            u,
            f,
            g,
            N,
            l
          ) : Ja(
            u,
            f
          ) : (P._visibility |= 2, Ji(
            u,
            f,
            g,
            N,
            l
          )), l && B & 2048 && su(
            f.alternate,
            f
          );
          break;
        case 24:
          Ji(
            u,
            f,
            g,
            N,
            l
          ), l && B & 2048 && lu(f.alternate, f);
          break;
        default:
          Ji(
            u,
            f,
            g,
            N,
            l
          );
      }
      t = t.sibling;
    }
  }
  function Ja(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var n = e, a = t, l = a.flags;
        switch (a.tag) {
          case 22:
            Ja(n, a), l & 2048 && su(
              a.alternate,
              a
            );
            break;
          case 24:
            Ja(n, a), l & 2048 && lu(a.alternate, a);
            break;
          default:
            Ja(n, a);
        }
        t = t.sibling;
      }
  }
  var $a = 8192;
  function $i(e, t, n) {
    if (e.subtreeFlags & $a)
      for (e = e.child; e !== null; )
        lp(
          e,
          t,
          n
        ), e = e.sibling;
  }
  function lp(e, t, n) {
    switch (e.tag) {
      case 26:
        $i(
          e,
          t,
          n
        ), e.flags & $a && e.memoizedState !== null && a1(
          n,
          qt,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        $i(
          e,
          t,
          n
        );
        break;
      case 3:
      case 4:
        var a = qt;
        qt = jl(e.stateNode.containerInfo), $i(
          e,
          t,
          n
        ), qt = a;
        break;
      case 22:
        e.memoizedState === null && (a = e.alternate, a !== null && a.memoizedState !== null ? (a = $a, $a = 16777216, $i(
          e,
          t,
          n
        ), $a = a) : $i(
          e,
          t,
          n
        ));
        break;
      default:
        $i(
          e,
          t,
          n
        );
    }
  }
  function op(e) {
    var t = e.alternate;
    if (t !== null && (e = t.child, e !== null)) {
      t.child = null;
      do
        t = e.sibling, e.sibling = null, e = t;
      while (e !== null);
    }
  }
  function Wa(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var a = t[n];
          We = a, up(
            a,
            e
          );
        }
      op(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        rp(e), e = e.sibling;
  }
  function rp(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Wa(e), e.flags & 2048 && jn(9, e, e.return);
        break;
      case 3:
        Wa(e);
        break;
      case 12:
        Wa(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, Sl(e)) : Wa(e);
        break;
      default:
        Wa(e);
    }
  }
  function Sl(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var a = t[n];
          We = a, up(
            a,
            e
          );
        }
      op(e);
    }
    for (e = e.child; e !== null; ) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          jn(8, t, t.return), Sl(t);
          break;
        case 22:
          n = t.stateNode, n._visibility & 2 && (n._visibility &= -3, Sl(t));
          break;
        default:
          Sl(t);
      }
      e = e.sibling;
    }
  }
  function up(e, t) {
    for (; We !== null; ) {
      var n = We;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          jn(8, n, t);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var a = n.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          za(n.memoizedState.cache);
      }
      if (a = n.child, a !== null) a.return = n, We = a;
      else
        e: for (n = e; We !== null; ) {
          a = We;
          var l = a.sibling, u = a.return;
          if (Im(a), a === n) {
            We = null;
            break e;
          }
          if (l !== null) {
            l.return = u, We = l;
            break e;
          }
          We = u;
        }
    }
  }
  var bb = {
    getCacheForType: function(e) {
      var t = tt(Ye), n = t.data.get(e);
      return n === void 0 && (n = e(), t.data.set(e, n)), n;
    },
    cacheSignal: function() {
      return tt(Ye).controller.signal;
    }
  }, xb = typeof WeakMap == "function" ? WeakMap : Map, Ne = 0, Ae = null, de = null, pe = 0, Ee = 0, Ct = null, zn = !1, Wi = !1, ou = !1, yn = 0, Ue = 0, Rn = 0, gi = 0, ru = 0, Vt = 0, Ii = 0, Ia = null, gt = null, uu = !1, Nl = 0, cp = 0, Dl = 1 / 0, El = null, On = null, Fe = 0, _n = null, ea = null, vn = 0, cu = 0, fu = null, fp = null, es = 0, du = null;
  function Bt() {
    return (Ne & 2) !== 0 && pe !== 0 ? pe & -pe : w.T !== null ? vu() : Vf();
  }
  function dp() {
    if (Vt === 0)
      if ((pe & 536870912) === 0 || ve) {
        var e = Ms;
        Ms <<= 1, (Ms & 3932160) === 0 && (Ms = 262144), Vt = e;
      } else Vt = 536870912;
    return e = Et.current, e !== null && (e.flags |= 32), Vt;
  }
  function yt(e, t, n) {
    (e === Ae && (Ee === 2 || Ee === 9) || e.cancelPendingCommit !== null) && (ta(e, 0), Un(
      e,
      pe,
      Vt,
      !1
    )), Sa(e, n), ((Ne & 2) === 0 || e !== Ae) && (e === Ae && ((Ne & 2) === 0 && (gi |= n), Ue === 4 && Un(
      e,
      pe,
      Vt,
      !1
    )), Jt(e));
  }
  function mp(e, t, n) {
    if ((Ne & 6) !== 0) throw Error(o(327));
    var a = !n && (t & 127) === 0 && (t & e.expiredLanes) === 0 || xa(e, t), l = a ? Db(e, t) : pu(e, t, !0), u = a;
    do {
      if (l === 0) {
        Wi && !a && Un(e, t, 0, !1);
        break;
      } else {
        if (n = e.current.alternate, u && !Sb(n)) {
          l = pu(e, t, !1), u = !1;
          continue;
        }
        if (l === 2) {
          if (u = t, e.errorRecoveryDisabledLanes & u)
            var f = 0;
          else
            f = e.pendingLanes & -536870913, f = f !== 0 ? f : f & 536870912 ? 536870912 : 0;
          if (f !== 0) {
            t = f;
            e: {
              var g = e;
              l = Ia;
              var N = g.current.memoizedState.isDehydrated;
              if (N && (ta(g, f).flags |= 256), f = pu(
                g,
                f,
                !1
              ), f !== 2) {
                if (ou && !N) {
                  g.errorRecoveryDisabledLanes |= u, gi |= u, l = 4;
                  break e;
                }
                u = gt, gt = l, u !== null && (gt === null ? gt = u : gt.push.apply(
                  gt,
                  u
                ));
              }
              l = f;
            }
            if (u = !1, l !== 2) continue;
          }
        }
        if (l === 1) {
          ta(e, 0), Un(e, t, 0, !0);
          break;
        }
        e: {
          switch (a = e, u = l, u) {
            case 0:
            case 1:
              throw Error(o(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              Un(
                a,
                t,
                Vt,
                !zn
              );
              break e;
            case 2:
              gt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(o(329));
          }
          if ((t & 62914560) === t && (l = Nl + 300 - bt(), 10 < l)) {
            if (Un(
              a,
              t,
              Vt,
              !zn
            ), js(a, 0, !0) !== 0) break e;
            vn = t, a.timeoutHandle = Yp(
              pp.bind(
                null,
                a,
                n,
                gt,
                El,
                uu,
                t,
                Vt,
                gi,
                Ii,
                zn,
                u,
                "Throttled",
                -0,
                0
              ),
              l
            );
            break e;
          }
          pp(
            a,
            n,
            gt,
            El,
            uu,
            t,
            Vt,
            gi,
            Ii,
            zn,
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
  function pp(e, t, n, a, l, u, f, g, N, B, P, O, k, M) {
    if (e.timeoutHandle = -1, O = t.subtreeFlags, O & 8192 || (O & 16785408) === 16785408) {
      O = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: nn
      }, lp(
        t,
        u,
        O
      );
      var W = (u & 62914560) === u ? Nl - bt() : (u & 4194048) === u ? cp - bt() : 0;
      if (W = s1(
        O,
        W
      ), W !== null) {
        vn = u, e.cancelPendingCommit = W(
          Np.bind(
            null,
            e,
            t,
            u,
            n,
            a,
            l,
            f,
            g,
            N,
            P,
            O,
            null,
            k,
            M
          )
        ), Un(e, u, f, !B);
        return;
      }
    }
    Np(
      e,
      t,
      u,
      n,
      a,
      l,
      f,
      g,
      N
    );
  }
  function Sb(e) {
    for (var t = e; ; ) {
      var n = t.tag;
      if ((n === 0 || n === 11 || n === 15) && t.flags & 16384 && (n = t.updateQueue, n !== null && (n = n.stores, n !== null)))
        for (var a = 0; a < n.length; a++) {
          var l = n[a], u = l.getSnapshot;
          l = l.value;
          try {
            if (!Nt(u(), l)) return !1;
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
  function Un(e, t, n, a) {
    t &= ~ru, t &= ~gi, e.suspendedLanes |= t, e.pingedLanes &= ~t, a && (e.warmLanes |= t), a = e.expirationTimes;
    for (var l = t; 0 < l; ) {
      var u = 31 - St(l), f = 1 << u;
      a[u] = -1, l &= ~f;
    }
    n !== 0 && Ef(e, n, t);
  }
  function Tl() {
    return (Ne & 6) === 0 ? (ts(0), !1) : !0;
  }
  function mu() {
    if (de !== null) {
      if (Ee === 0)
        var e = de.return;
      else
        e = de, on = oi = null, Ar(e), Xi = null, Oa = 0, e = de;
      for (; e !== null; )
        Xm(e.alternate, e), e = e.return;
      de = null;
    }
  }
  function ta(e, t) {
    var n = e.timeoutHandle;
    n !== -1 && (e.timeoutHandle = -1, Hb(n)), n = e.cancelPendingCommit, n !== null && (e.cancelPendingCommit = null, n()), vn = 0, mu(), Ae = e, de = n = sn(e.current, null), pe = t, Ee = 0, Ct = null, zn = !1, Wi = xa(e, t), ou = !1, Ii = Vt = ru = gi = Rn = Ue = 0, gt = Ia = null, uu = !1, (t & 8) !== 0 && (t |= t & 32);
    var a = e.entangledLanes;
    if (a !== 0)
      for (e = e.entanglements, a &= t; 0 < a; ) {
        var l = 31 - St(a), u = 1 << l;
        t |= e[l], a &= ~u;
      }
    return yn = t, Ks(), n;
  }
  function hp(e, t) {
    re = null, w.H = Xa, t === Yi || t === el ? (t = wd(), Ee = 3) : t === yr ? (t = wd(), Ee = 4) : Ee = t === Xr ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, Ct = t, de === null && (Ue = 1, pl(
      e,
      Mt(t, e.current)
    ));
  }
  function gp() {
    var e = Et.current;
    return e === null ? !0 : (pe & 4194048) === pe ? Rt === null : (pe & 62914560) === pe || (pe & 536870912) !== 0 ? e === Rt : !1;
  }
  function yp() {
    var e = w.H;
    return w.H = Xa, e === null ? Xa : e;
  }
  function vp() {
    var e = w.A;
    return w.A = bb, e;
  }
  function Cl() {
    Ue = 4, zn || (pe & 4194048) !== pe && Et.current !== null || (Wi = !0), (Rn & 134217727) === 0 && (gi & 134217727) === 0 || Ae === null || Un(
      Ae,
      pe,
      Vt,
      !1
    );
  }
  function pu(e, t, n) {
    var a = Ne;
    Ne |= 2;
    var l = yp(), u = vp();
    (Ae !== e || pe !== t) && (El = null, ta(e, t)), t = !1;
    var f = Ue;
    e: do
      try {
        if (Ee !== 0 && de !== null) {
          var g = de, N = Ct;
          switch (Ee) {
            case 8:
              mu(), f = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Et.current === null && (t = !0);
              var B = Ee;
              if (Ee = 0, Ct = null, na(e, g, N, B), n && Wi) {
                f = 0;
                break e;
              }
              break;
            default:
              B = Ee, Ee = 0, Ct = null, na(e, g, N, B);
          }
        }
        Nb(), f = Ue;
        break;
      } catch (P) {
        hp(e, P);
      }
    while (!0);
    return t && e.shellSuspendCounter++, on = oi = null, Ne = a, w.H = l, w.A = u, de === null && (Ae = null, pe = 0, Ks()), f;
  }
  function Nb() {
    for (; de !== null; ) bp(de);
  }
  function Db(e, t) {
    var n = Ne;
    Ne |= 2;
    var a = yp(), l = vp();
    Ae !== e || pe !== t ? (El = null, Dl = bt() + 500, ta(e, t)) : Wi = xa(
      e,
      t
    );
    e: do
      try {
        if (Ee !== 0 && de !== null) {
          t = de;
          var u = Ct;
          t: switch (Ee) {
            case 1:
              Ee = 0, Ct = null, na(e, t, u, 1);
              break;
            case 2:
            case 9:
              if (Ad(u)) {
                Ee = 0, Ct = null, xp(t);
                break;
              }
              t = function() {
                Ee !== 2 && Ee !== 9 || Ae !== e || (Ee = 7), Jt(e);
              }, u.then(t, t);
              break e;
            case 3:
              Ee = 7;
              break e;
            case 4:
              Ee = 5;
              break e;
            case 7:
              Ad(u) ? (Ee = 0, Ct = null, xp(t)) : (Ee = 0, Ct = null, na(e, t, u, 7));
              break;
            case 5:
              var f = null;
              switch (de.tag) {
                case 26:
                  f = de.memoizedState;
                case 5:
                case 27:
                  var g = de;
                  if (f ? sh(f) : g.stateNode.complete) {
                    Ee = 0, Ct = null;
                    var N = g.sibling;
                    if (N !== null) de = N;
                    else {
                      var B = g.return;
                      B !== null ? (de = B, Vl(B)) : de = null;
                    }
                    break t;
                  }
              }
              Ee = 0, Ct = null, na(e, t, u, 5);
              break;
            case 6:
              Ee = 0, Ct = null, na(e, t, u, 6);
              break;
            case 8:
              mu(), Ue = 6;
              break e;
            default:
              throw Error(o(462));
          }
        }
        Eb();
        break;
      } catch (P) {
        hp(e, P);
      }
    while (!0);
    return on = oi = null, w.H = a, w.A = l, Ne = n, de !== null ? 0 : (Ae = null, pe = 0, Ks(), Ue);
  }
  function Eb() {
    for (; de !== null && !Qy(); )
      bp(de);
  }
  function bp(e) {
    var t = Gm(e.alternate, e, yn);
    e.memoizedProps = e.pendingProps, t === null ? Vl(e) : de = t;
  }
  function xp(e) {
    var t = e, n = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Om(
          n,
          t,
          t.pendingProps,
          t.type,
          void 0,
          pe
        );
        break;
      case 11:
        t = Om(
          n,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          pe
        );
        break;
      case 5:
        Ar(t);
      default:
        Xm(n, t), t = de = vd(t, yn), t = Gm(n, t, yn);
    }
    e.memoizedProps = e.pendingProps, t === null ? Vl(e) : de = t;
  }
  function na(e, t, n, a) {
    on = oi = null, Ar(t), Xi = null, Oa = 0;
    var l = t.return;
    try {
      if (db(
        e,
        l,
        t,
        n,
        pe
      )) {
        Ue = 1, pl(
          e,
          Mt(n, e.current)
        ), de = null;
        return;
      }
    } catch (u) {
      if (l !== null) throw de = l, u;
      Ue = 1, pl(
        e,
        Mt(n, e.current)
      ), de = null;
      return;
    }
    t.flags & 32768 ? (ve || a === 1 ? e = !0 : Wi || (pe & 536870912) !== 0 ? e = !1 : (zn = e = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = Et.current, a !== null && a.tag === 13 && (a.flags |= 16384))), Sp(t, e)) : Vl(t);
  }
  function Vl(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        Sp(
          t,
          zn
        );
        return;
      }
      e = t.return;
      var n = hb(
        t.alternate,
        t,
        yn
      );
      if (n !== null) {
        de = n;
        return;
      }
      if (t = t.sibling, t !== null) {
        de = t;
        return;
      }
      de = t = e;
    } while (t !== null);
    Ue === 0 && (Ue = 5);
  }
  function Sp(e, t) {
    do {
      var n = gb(e.alternate, e);
      if (n !== null) {
        n.flags &= 32767, de = n;
        return;
      }
      if (n = e.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !t && (e = e.sibling, e !== null)) {
        de = e;
        return;
      }
      de = e = n;
    } while (e !== null);
    Ue = 6, de = null;
  }
  function Np(e, t, n, a, l, u, f, g, N) {
    e.cancelPendingCommit = null;
    do
      Bl();
    while (Fe !== 0);
    if ((Ne & 6) !== 0) throw Error(o(327));
    if (t !== null) {
      if (t === e.current) throw Error(o(177));
      if (u = t.lanes | t.childLanes, u |= nr, iv(
        e,
        n,
        u,
        f,
        g,
        N
      ), e === Ae && (de = Ae = null, pe = 0), ea = t, _n = e, vn = n, cu = u, fu = l, fp = a, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, Bb(ks, function() {
        return Vp(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), a = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || a) {
        a = w.T, w.T = null, l = K.p, K.p = 2, f = Ne, Ne |= 4;
        try {
          yb(e, t, n);
        } finally {
          Ne = f, K.p = l, w.T = a;
        }
      }
      Fe = 1, Dp(), Ep(), Tp();
    }
  }
  function Dp() {
    if (Fe === 1) {
      Fe = 0;
      var e = _n, t = ea, n = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || n) {
        n = w.T, w.T = null;
        var a = K.p;
        K.p = 2;
        var l = Ne;
        Ne |= 4;
        try {
          ip(t, e);
          var u = Cu, f = ud(e.containerInfo), g = u.focusedElem, N = u.selectionRange;
          if (f !== g && g && g.ownerDocument && rd(
            g.ownerDocument.documentElement,
            g
          )) {
            if (N !== null && $o(g)) {
              var B = N.start, P = N.end;
              if (P === void 0 && (P = B), "selectionStart" in g)
                g.selectionStart = B, g.selectionEnd = Math.min(
                  P,
                  g.value.length
                );
              else {
                var O = g.ownerDocument || document, k = O && O.defaultView || window;
                if (k.getSelection) {
                  var M = k.getSelection(), W = g.textContent.length, ae = Math.min(N.start, W), Be = N.end === void 0 ? ae : Math.min(N.end, W);
                  !M.extend && ae > Be && (f = Be, Be = ae, ae = f);
                  var T = od(
                    g,
                    ae
                  ), D = od(
                    g,
                    Be
                  );
                  if (T && D && (M.rangeCount !== 1 || M.anchorNode !== T.node || M.anchorOffset !== T.offset || M.focusNode !== D.node || M.focusOffset !== D.offset)) {
                    var V = O.createRange();
                    V.setStart(T.node, T.offset), M.removeAllRanges(), ae > Be ? (M.addRange(V), M.extend(D.node, D.offset)) : (V.setEnd(D.node, D.offset), M.addRange(V));
                  }
                }
              }
            }
            for (O = [], M = g; M = M.parentNode; )
              M.nodeType === 1 && O.push({
                element: M,
                left: M.scrollLeft,
                top: M.scrollTop
              });
            for (typeof g.focus == "function" && g.focus(), g = 0; g < O.length; g++) {
              var z = O[g];
              z.element.scrollLeft = z.left, z.element.scrollTop = z.top;
            }
          }
          Ll = !!Tu, Cu = Tu = null;
        } finally {
          Ne = l, K.p = a, w.T = n;
        }
      }
      e.current = t, Fe = 2;
    }
  }
  function Ep() {
    if (Fe === 2) {
      Fe = 0;
      var e = _n, t = ea, n = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || n) {
        n = w.T, w.T = null;
        var a = K.p;
        K.p = 2;
        var l = Ne;
        Ne |= 4;
        try {
          Wm(e, t.alternate, t);
        } finally {
          Ne = l, K.p = a, w.T = n;
        }
      }
      Fe = 3;
    }
  }
  function Tp() {
    if (Fe === 4 || Fe === 3) {
      Fe = 0, Zy();
      var e = _n, t = ea, n = vn, a = fp;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Fe = 5 : (Fe = 0, ea = _n = null, Cp(e, e.pendingLanes));
      var l = e.pendingLanes;
      if (l === 0 && (On = null), Mo(n), t = t.stateNode, xt && typeof xt.onCommitFiberRoot == "function")
        try {
          xt.onCommitFiberRoot(
            ba,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (a !== null) {
        t = w.T, l = K.p, K.p = 2, w.T = null;
        try {
          for (var u = e.onRecoverableError, f = 0; f < a.length; f++) {
            var g = a[f];
            u(g.value, {
              componentStack: g.stack
            });
          }
        } finally {
          w.T = t, K.p = l;
        }
      }
      (vn & 3) !== 0 && Bl(), Jt(e), l = e.pendingLanes, (n & 261930) !== 0 && (l & 42) !== 0 ? e === du ? es++ : (es = 0, du = e) : es = 0, ts(0);
    }
  }
  function Cp(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, za(t)));
  }
  function Bl() {
    return Dp(), Ep(), Tp(), Vp();
  }
  function Vp() {
    if (Fe !== 5) return !1;
    var e = _n, t = cu;
    cu = 0;
    var n = Mo(vn), a = w.T, l = K.p;
    try {
      K.p = 32 > n ? 32 : n, w.T = null, n = fu, fu = null;
      var u = _n, f = vn;
      if (Fe = 0, ea = _n = null, vn = 0, (Ne & 6) !== 0) throw Error(o(331));
      var g = Ne;
      if (Ne |= 4, rp(u.current), sp(
        u,
        u.current,
        f,
        n
      ), Ne = g, ts(0, !1), xt && typeof xt.onPostCommitFiberRoot == "function")
        try {
          xt.onPostCommitFiberRoot(ba, u);
        } catch {
        }
      return !0;
    } finally {
      K.p = l, w.T = a, Cp(e, t);
    }
  }
  function Bp(e, t, n) {
    t = Mt(n, t), t = Yr(e.stateNode, t, 2), e = wn(e, t, 2), e !== null && (Sa(e, 2), Jt(e));
  }
  function Te(e, t, n) {
    if (e.tag === 3)
      Bp(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Bp(
            t,
            e,
            n
          );
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (On === null || !On.has(a))) {
            e = Mt(n, e), n = Am(2), a = wn(t, n, 2), a !== null && (km(
              n,
              a,
              t,
              e
            ), Sa(a, 2), Jt(a));
            break;
          }
        }
        t = t.return;
      }
  }
  function hu(e, t, n) {
    var a = e.pingCache;
    if (a === null) {
      a = e.pingCache = new xb();
      var l = /* @__PURE__ */ new Set();
      a.set(t, l);
    } else
      l = a.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), a.set(t, l));
    l.has(n) || (ou = !0, l.add(n), e = Tb.bind(null, e, t, n), t.then(e, e));
  }
  function Tb(e, t, n) {
    var a = e.pingCache;
    a !== null && a.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, Ae === e && (pe & n) === n && (Ue === 4 || Ue === 3 && (pe & 62914560) === pe && 300 > bt() - Nl ? (Ne & 2) === 0 && ta(e, 0) : ru |= n, Ii === pe && (Ii = 0)), Jt(e);
  }
  function Ap(e, t) {
    t === 0 && (t = Df()), e = ai(e, t), e !== null && (Sa(e, t), Jt(e));
  }
  function Cb(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), Ap(e, n);
  }
  function Vb(e, t) {
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
        throw Error(o(314));
    }
    a !== null && a.delete(t), Ap(e, n);
  }
  function Bb(e, t) {
    return Bo(e, t);
  }
  var Al = null, ia = null, gu = !1, kl = !1, yu = !1, Ln = 0;
  function Jt(e) {
    e !== ia && e.next === null && (ia === null ? Al = ia = e : ia = ia.next = e), kl = !0, gu || (gu = !0, kb());
  }
  function ts(e, t) {
    if (!yu && kl) {
      yu = !0;
      do
        for (var n = !1, a = Al; a !== null; ) {
          if (e !== 0) {
            var l = a.pendingLanes;
            if (l === 0) var u = 0;
            else {
              var f = a.suspendedLanes, g = a.pingedLanes;
              u = (1 << 31 - St(42 | e) + 1) - 1, u &= l & ~(f & ~g), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0;
            }
            u !== 0 && (n = !0, Pp(a, u));
          } else
            u = pe, u = js(
              a,
              a === Ae ? u : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (u & 3) === 0 || xa(a, u) || (n = !0, Pp(a, u));
          a = a.next;
        }
      while (n);
      yu = !1;
    }
  }
  function Ab() {
    kp();
  }
  function kp() {
    kl = gu = !1;
    var e = 0;
    Ln !== 0 && Lb() && (e = Ln);
    for (var t = bt(), n = null, a = Al; a !== null; ) {
      var l = a.next, u = wp(a, t);
      u === 0 ? (a.next = null, n === null ? Al = l : n.next = l, l === null && (ia = n)) : (n = a, (e !== 0 || (u & 3) !== 0) && (kl = !0)), a = l;
    }
    Fe !== 0 && Fe !== 5 || ts(e), Ln !== 0 && (Ln = 0);
  }
  function wp(e, t) {
    for (var n = e.suspendedLanes, a = e.pingedLanes, l = e.expirationTimes, u = e.pendingLanes & -62914561; 0 < u; ) {
      var f = 31 - St(u), g = 1 << f, N = l[f];
      N === -1 ? ((g & n) === 0 || (g & a) !== 0) && (l[f] = nv(g, t)) : N <= t && (e.expiredLanes |= g), u &= ~g;
    }
    if (t = Ae, n = pe, n = js(
      e,
      e === t ? n : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), a = e.callbackNode, n === 0 || e === t && (Ee === 2 || Ee === 9) || e.cancelPendingCommit !== null)
      return a !== null && a !== null && Ao(a), e.callbackNode = null, e.callbackPriority = 0;
    if ((n & 3) === 0 || xa(e, n)) {
      if (t = n & -n, t === e.callbackPriority) return t;
      switch (a !== null && Ao(a), Mo(n)) {
        case 2:
        case 8:
          n = Sf;
          break;
        case 32:
          n = ks;
          break;
        case 268435456:
          n = Nf;
          break;
        default:
          n = ks;
      }
      return a = Mp.bind(null, e), n = Bo(n, a), e.callbackPriority = t, e.callbackNode = n, t;
    }
    return a !== null && a !== null && Ao(a), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function Mp(e, t) {
    if (Fe !== 0 && Fe !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var n = e.callbackNode;
    if (Bl() && e.callbackNode !== n)
      return null;
    var a = pe;
    return a = js(
      e,
      e === Ae ? a : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), a === 0 ? null : (mp(e, a, t), wp(e, bt()), e.callbackNode != null && e.callbackNode === n ? Mp.bind(null, e) : null);
  }
  function Pp(e, t) {
    if (Bl()) return null;
    mp(e, t, !0);
  }
  function kb() {
    qb(function() {
      (Ne & 6) !== 0 ? Bo(
        xf,
        Ab
      ) : kp();
    });
  }
  function vu() {
    if (Ln === 0) {
      var e = qi;
      e === 0 && (e = ws, ws <<= 1, (ws & 261888) === 0 && (ws = 256)), Ln = e;
    }
    return Ln;
  }
  function jp(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : _s("" + e);
  }
  function zp(e, t) {
    var n = t.ownerDocument.createElement("input");
    return n.name = t.name, n.value = t.value, e.id && n.setAttribute("form", e.id), t.parentNode.insertBefore(n, t), e = new FormData(e), n.parentNode.removeChild(n), e;
  }
  function wb(e, t, n, a, l) {
    if (t === "submit" && n && n.stateNode === l) {
      var u = jp(
        (l[ft] || null).action
      ), f = a.submitter;
      f && (t = (t = f[ft] || null) ? jp(t.formAction) : f.getAttribute("formAction"), t !== null && (u = t, f = null));
      var g = new qs(
        "action",
        "action",
        null,
        a,
        l
      );
      e.push({
        event: g,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (a.defaultPrevented) {
                if (Ln !== 0) {
                  var N = f ? zp(l, f) : new FormData(l);
                  _r(
                    n,
                    {
                      pending: !0,
                      data: N,
                      method: l.method,
                      action: u
                    },
                    null,
                    N
                  );
                }
              } else
                typeof u == "function" && (g.preventDefault(), N = f ? zp(l, f) : new FormData(l), _r(
                  n,
                  {
                    pending: !0,
                    data: N,
                    method: l.method,
                    action: u
                  },
                  u,
                  N
                ));
            },
            currentTarget: l
          }
        ]
      });
    }
  }
  for (var bu = 0; bu < tr.length; bu++) {
    var xu = tr[bu], Mb = xu.toLowerCase(), Pb = xu[0].toUpperCase() + xu.slice(1);
    Ht(
      Mb,
      "on" + Pb
    );
  }
  Ht(dd, "onAnimationEnd"), Ht(md, "onAnimationIteration"), Ht(pd, "onAnimationStart"), Ht("dblclick", "onDoubleClick"), Ht("focusin", "onFocus"), Ht("focusout", "onBlur"), Ht(Fv, "onTransitionRun"), Ht(Jv, "onTransitionStart"), Ht($v, "onTransitionCancel"), Ht(hd, "onTransitionEnd"), Bi("onMouseEnter", ["mouseout", "mouseover"]), Bi("onMouseLeave", ["mouseout", "mouseover"]), Bi("onPointerEnter", ["pointerout", "pointerover"]), Bi("onPointerLeave", ["pointerout", "pointerover"]), ei(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), ei(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), ei("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), ei(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), ei(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), ei(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var ns = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), jb = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ns)
  );
  function Rp(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var a = e[n], l = a.event;
      a = a.listeners;
      e: {
        var u = void 0;
        if (t)
          for (var f = a.length - 1; 0 <= f; f--) {
            var g = a[f], N = g.instance, B = g.currentTarget;
            if (g = g.listener, N !== u && l.isPropagationStopped())
              break e;
            u = g, l.currentTarget = B;
            try {
              u(l);
            } catch (P) {
              Xs(P);
            }
            l.currentTarget = null, u = N;
          }
        else
          for (f = 0; f < a.length; f++) {
            if (g = a[f], N = g.instance, B = g.currentTarget, g = g.listener, N !== u && l.isPropagationStopped())
              break e;
            u = g, l.currentTarget = B;
            try {
              u(l);
            } catch (P) {
              Xs(P);
            }
            l.currentTarget = null, u = N;
          }
      }
    }
  }
  function me(e, t) {
    var n = t[Po];
    n === void 0 && (n = t[Po] = /* @__PURE__ */ new Set());
    var a = e + "__bubble";
    n.has(a) || (Op(t, e, 2, !1), n.add(a));
  }
  function Su(e, t, n) {
    var a = 0;
    t && (a |= 4), Op(
      n,
      e,
      a,
      t
    );
  }
  var wl = "_reactListening" + Math.random().toString(36).slice(2);
  function Nu(e) {
    if (!e[wl]) {
      e[wl] = !0, kf.forEach(function(n) {
        n !== "selectionchange" && (jb.has(n) || Su(n, !1, e), Su(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[wl] || (t[wl] = !0, Su("selectionchange", !1, t));
    }
  }
  function Op(e, t, n, a) {
    switch (dh(t)) {
      case 2:
        var l = r1;
        break;
      case 8:
        l = u1;
        break;
      default:
        l = Ou;
    }
    n = l.bind(
      null,
      t,
      n,
      e
    ), l = void 0, !qo || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), a ? l !== void 0 ? e.addEventListener(t, n, {
      capture: !0,
      passive: l
    }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, {
      passive: l
    }) : e.addEventListener(t, n, !1);
  }
  function Du(e, t, n, a, l) {
    var u = a;
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
      e: for (; ; ) {
        if (a === null) return;
        var f = a.tag;
        if (f === 3 || f === 4) {
          var g = a.stateNode.containerInfo;
          if (g === l) break;
          if (f === 4)
            for (f = a.return; f !== null; ) {
              var N = f.tag;
              if ((N === 3 || N === 4) && f.stateNode.containerInfo === l)
                return;
              f = f.return;
            }
          for (; g !== null; ) {
            if (f = Ti(g), f === null) return;
            if (N = f.tag, N === 5 || N === 6 || N === 26 || N === 27) {
              a = u = f;
              continue e;
            }
            g = g.parentNode;
          }
        }
        a = a.return;
      }
    qf(function() {
      var B = u, P = Lo(n), O = [];
      e: {
        var k = gd.get(e);
        if (k !== void 0) {
          var M = qs, W = e;
          switch (e) {
            case "keypress":
              if (Ls(n) === 0) break e;
            case "keydown":
            case "keyup":
              M = Vv;
              break;
            case "focusin":
              W = "focus", M = Ko;
              break;
            case "focusout":
              W = "blur", M = Ko;
              break;
            case "beforeblur":
            case "afterblur":
              M = Ko;
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
              M = Xf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              M = hv;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              M = kv;
              break;
            case dd:
            case md:
            case pd:
              M = vv;
              break;
            case hd:
              M = Mv;
              break;
            case "scroll":
            case "scrollend":
              M = mv;
              break;
            case "wheel":
              M = jv;
              break;
            case "copy":
            case "cut":
            case "paste":
              M = xv;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              M = Qf;
              break;
            case "toggle":
            case "beforetoggle":
              M = Rv;
          }
          var ae = (t & 4) !== 0, Be = !ae && (e === "scroll" || e === "scrollend"), T = ae ? k !== null ? k + "Capture" : null : k;
          ae = [];
          for (var D = B, V; D !== null; ) {
            var z = D;
            if (V = z.stateNode, z = z.tag, z !== 5 && z !== 26 && z !== 27 || V === null || T === null || (z = Ea(D, T), z != null && ae.push(
              is(D, z, V)
            )), Be) break;
            D = D.return;
          }
          0 < ae.length && (k = new M(
            k,
            W,
            null,
            n,
            P
          ), O.push({ event: k, listeners: ae }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (k = e === "mouseover" || e === "pointerover", M = e === "mouseout" || e === "pointerout", k && n !== Uo && (W = n.relatedTarget || n.fromElement) && (Ti(W) || W[Ei]))
            break e;
          if ((M || k) && (k = P.window === P ? P : (k = P.ownerDocument) ? k.defaultView || k.parentWindow : window, M ? (W = n.relatedTarget || n.toElement, M = B, W = W ? Ti(W) : null, W !== null && (Be = m(W), ae = W.tag, W !== Be || ae !== 5 && ae !== 27 && ae !== 6) && (W = null)) : (M = null, W = B), M !== W)) {
            if (ae = Xf, z = "onMouseLeave", T = "onMouseEnter", D = "mouse", (e === "pointerout" || e === "pointerover") && (ae = Qf, z = "onPointerLeave", T = "onPointerEnter", D = "pointer"), Be = M == null ? k : Da(M), V = W == null ? k : Da(W), k = new ae(
              z,
              D + "leave",
              M,
              n,
              P
            ), k.target = Be, k.relatedTarget = V, z = null, Ti(P) === B && (ae = new ae(
              T,
              D + "enter",
              W,
              n,
              P
            ), ae.target = V, ae.relatedTarget = Be, z = ae), Be = z, M && W)
              t: {
                for (ae = zb, T = M, D = W, V = 0, z = T; z; z = ae(z))
                  V++;
                z = 0;
                for (var ne = D; ne; ne = ae(ne))
                  z++;
                for (; 0 < V - z; )
                  T = ae(T), V--;
                for (; 0 < z - V; )
                  D = ae(D), z--;
                for (; V--; ) {
                  if (T === D || D !== null && T === D.alternate) {
                    ae = T;
                    break t;
                  }
                  T = ae(T), D = ae(D);
                }
                ae = null;
              }
            else ae = null;
            M !== null && _p(
              O,
              k,
              M,
              ae,
              !1
            ), W !== null && Be !== null && _p(
              O,
              Be,
              W,
              ae,
              !0
            );
          }
        }
        e: {
          if (k = B ? Da(B) : window, M = k.nodeName && k.nodeName.toLowerCase(), M === "select" || M === "input" && k.type === "file")
            var xe = td;
          else if (If(k))
            if (nd)
              xe = Kv;
            else {
              xe = Yv;
              var te = Gv;
            }
          else
            M = k.nodeName, !M || M.toLowerCase() !== "input" || k.type !== "checkbox" && k.type !== "radio" ? B && _o(B.elementType) && (xe = td) : xe = Xv;
          if (xe && (xe = xe(e, B))) {
            ed(
              O,
              xe,
              n,
              P
            );
            break e;
          }
          te && te(e, k, B), e === "focusout" && B && k.type === "number" && B.memoizedProps.value != null && Oo(k, "number", k.value);
        }
        switch (te = B ? Da(B) : window, e) {
          case "focusin":
            (If(te) || te.contentEditable === "true") && (ji = te, Wo = B, Ma = null);
            break;
          case "focusout":
            Ma = Wo = ji = null;
            break;
          case "mousedown":
            Io = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Io = !1, cd(O, n, P);
            break;
          case "selectionchange":
            if (Zv) break;
          case "keydown":
          case "keyup":
            cd(O, n, P);
        }
        var ce;
        if (Zo)
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
          Pi ? $f(e, n) && (he = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (he = "onCompositionStart");
        he && (Zf && n.locale !== "ko" && (Pi || he !== "onCompositionStart" ? he === "onCompositionEnd" && Pi && (ce = Gf()) : (En = P, Go = "value" in En ? En.value : En.textContent, Pi = !0)), te = Ml(B, he), 0 < te.length && (he = new Kf(
          he,
          e,
          null,
          n,
          P
        ), O.push({ event: he, listeners: te }), ce ? he.data = ce : (ce = Wf(n), ce !== null && (he.data = ce)))), (ce = _v ? Uv(e, n) : Lv(e, n)) && (he = Ml(B, "onBeforeInput"), 0 < he.length && (te = new Kf(
          "onBeforeInput",
          "beforeinput",
          null,
          n,
          P
        ), O.push({
          event: te,
          listeners: he
        }), te.data = ce)), wb(
          O,
          e,
          B,
          n,
          P
        );
      }
      Rp(O, t);
    });
  }
  function is(e, t, n) {
    return {
      instance: e,
      listener: t,
      currentTarget: n
    };
  }
  function Ml(e, t) {
    for (var n = t + "Capture", a = []; e !== null; ) {
      var l = e, u = l.stateNode;
      if (l = l.tag, l !== 5 && l !== 26 && l !== 27 || u === null || (l = Ea(e, n), l != null && a.unshift(
        is(e, l, u)
      ), l = Ea(e, t), l != null && a.push(
        is(e, l, u)
      )), e.tag === 3) return a;
      e = e.return;
    }
    return [];
  }
  function zb(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function _p(e, t, n, a, l) {
    for (var u = t._reactName, f = []; n !== null && n !== a; ) {
      var g = n, N = g.alternate, B = g.stateNode;
      if (g = g.tag, N !== null && N === a) break;
      g !== 5 && g !== 26 && g !== 27 || B === null || (N = B, l ? (B = Ea(n, u), B != null && f.unshift(
        is(n, B, N)
      )) : l || (B = Ea(n, u), B != null && f.push(
        is(n, B, N)
      ))), n = n.return;
    }
    f.length !== 0 && e.push({ event: t, listeners: f });
  }
  var Rb = /\r\n?/g, Ob = /\u0000|\uFFFD/g;
  function Up(e) {
    return (typeof e == "string" ? e : "" + e).replace(Rb, `
`).replace(Ob, "");
  }
  function Lp(e, t) {
    return t = Up(t), Up(e) === t;
  }
  function Ve(e, t, n, a, l, u) {
    switch (n) {
      case "children":
        typeof a == "string" ? t === "body" || t === "textarea" && a === "" || ki(e, a) : (typeof a == "number" || typeof a == "bigint") && t !== "body" && ki(e, "" + a);
        break;
      case "className":
        Rs(e, "class", a);
        break;
      case "tabIndex":
        Rs(e, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Rs(e, n, a);
        break;
      case "style":
        Lf(e, a, u);
        break;
      case "data":
        if (t !== "object") {
          Rs(e, "data", a);
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
        a = _s("" + a), e.setAttribute(n, a);
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
          typeof u == "function" && (n === "formAction" ? (t !== "input" && Ve(e, t, "name", l.name, l, null), Ve(
            e,
            t,
            "formEncType",
            l.formEncType,
            l,
            null
          ), Ve(
            e,
            t,
            "formMethod",
            l.formMethod,
            l,
            null
          ), Ve(
            e,
            t,
            "formTarget",
            l.formTarget,
            l,
            null
          )) : (Ve(e, t, "encType", l.encType, l, null), Ve(e, t, "method", l.method, l, null), Ve(e, t, "target", l.target, l, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          e.removeAttribute(n);
          break;
        }
        a = _s("" + a), e.setAttribute(n, a);
        break;
      case "onClick":
        a != null && (e.onclick = nn);
        break;
      case "onScroll":
        a != null && me("scroll", e);
        break;
      case "onScrollEnd":
        a != null && me("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(o(61));
          if (n = a.__html, n != null) {
            if (l.children != null) throw Error(o(60));
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
        n = _s("" + a), e.setAttributeNS(
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
        me("beforetoggle", e), me("toggle", e), zs(e, "popover", a);
        break;
      case "xlinkActuate":
        tn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          a
        );
        break;
      case "xlinkArcrole":
        tn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          a
        );
        break;
      case "xlinkRole":
        tn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          a
        );
        break;
      case "xlinkShow":
        tn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          a
        );
        break;
      case "xlinkTitle":
        tn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          a
        );
        break;
      case "xlinkType":
        tn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          a
        );
        break;
      case "xmlBase":
        tn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          a
        );
        break;
      case "xmlLang":
        tn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          a
        );
        break;
      case "xmlSpace":
        tn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          a
        );
        break;
      case "is":
        zs(e, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (n = fv.get(n) || n, zs(e, n, a));
    }
  }
  function Eu(e, t, n, a, l, u) {
    switch (n) {
      case "style":
        Lf(e, a, u);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(o(61));
          if (n = a.__html, n != null) {
            if (l.children != null) throw Error(o(60));
            e.innerHTML = n;
          }
        }
        break;
      case "children":
        typeof a == "string" ? ki(e, a) : (typeof a == "number" || typeof a == "bigint") && ki(e, "" + a);
        break;
      case "onScroll":
        a != null && me("scroll", e);
        break;
      case "onScrollEnd":
        a != null && me("scrollend", e);
        break;
      case "onClick":
        a != null && (e.onclick = nn);
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
        if (!wf.hasOwnProperty(n))
          e: {
            if (n[0] === "o" && n[1] === "n" && (l = n.endsWith("Capture"), t = n.slice(2, l ? n.length - 7 : void 0), u = e[ft] || null, u = u != null ? u[n] : null, typeof u == "function" && e.removeEventListener(t, u, l), typeof a == "function")) {
              typeof u != "function" && u !== null && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)), e.addEventListener(t, a, l);
              break e;
            }
            n in e ? e[n] = a : a === !0 ? e.setAttribute(n, "") : zs(e, n, a);
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
        me("error", e), me("load", e);
        var a = !1, l = !1, u;
        for (u in n)
          if (n.hasOwnProperty(u)) {
            var f = n[u];
            if (f != null)
              switch (u) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  l = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(o(137, t));
                default:
                  Ve(e, t, u, f, n, null);
              }
          }
        l && Ve(e, t, "srcSet", n.srcSet, n, null), a && Ve(e, t, "src", n.src, n, null);
        return;
      case "input":
        me("invalid", e);
        var g = u = f = l = null, N = null, B = null;
        for (a in n)
          if (n.hasOwnProperty(a)) {
            var P = n[a];
            if (P != null)
              switch (a) {
                case "name":
                  l = P;
                  break;
                case "type":
                  f = P;
                  break;
                case "checked":
                  N = P;
                  break;
                case "defaultChecked":
                  B = P;
                  break;
                case "value":
                  u = P;
                  break;
                case "defaultValue":
                  g = P;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (P != null)
                    throw Error(o(137, t));
                  break;
                default:
                  Ve(e, t, a, P, n, null);
              }
          }
        Rf(
          e,
          u,
          g,
          N,
          B,
          f,
          l,
          !1
        );
        return;
      case "select":
        me("invalid", e), a = f = u = null;
        for (l in n)
          if (n.hasOwnProperty(l) && (g = n[l], g != null))
            switch (l) {
              case "value":
                u = g;
                break;
              case "defaultValue":
                f = g;
                break;
              case "multiple":
                a = g;
              default:
                Ve(e, t, l, g, n, null);
            }
        t = u, n = f, e.multiple = !!a, t != null ? Ai(e, !!a, t, !1) : n != null && Ai(e, !!a, n, !0);
        return;
      case "textarea":
        me("invalid", e), u = l = a = null;
        for (f in n)
          if (n.hasOwnProperty(f) && (g = n[f], g != null))
            switch (f) {
              case "value":
                a = g;
                break;
              case "defaultValue":
                l = g;
                break;
              case "children":
                u = g;
                break;
              case "dangerouslySetInnerHTML":
                if (g != null) throw Error(o(91));
                break;
              default:
                Ve(e, t, f, g, n, null);
            }
        _f(e, a, l, u);
        return;
      case "option":
        for (N in n)
          if (n.hasOwnProperty(N) && (a = n[N], a != null))
            switch (N) {
              case "selected":
                e.selected = a && typeof a != "function" && typeof a != "symbol";
                break;
              default:
                Ve(e, t, N, a, n, null);
            }
        return;
      case "dialog":
        me("beforetoggle", e), me("toggle", e), me("cancel", e), me("close", e);
        break;
      case "iframe":
      case "object":
        me("load", e);
        break;
      case "video":
      case "audio":
        for (a = 0; a < ns.length; a++)
          me(ns[a], e);
        break;
      case "image":
        me("error", e), me("load", e);
        break;
      case "details":
        me("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        me("error", e), me("load", e);
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
        for (B in n)
          if (n.hasOwnProperty(B) && (a = n[B], a != null))
            switch (B) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(o(137, t));
              default:
                Ve(e, t, B, a, n, null);
            }
        return;
      default:
        if (_o(t)) {
          for (P in n)
            n.hasOwnProperty(P) && (a = n[P], a !== void 0 && Eu(
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
    for (g in n)
      n.hasOwnProperty(g) && (a = n[g], a != null && Ve(e, t, g, a, n, null));
  }
  function _b(e, t, n, a) {
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
        var l = null, u = null, f = null, g = null, N = null, B = null, P = null;
        for (M in n) {
          var O = n[M];
          if (n.hasOwnProperty(M) && O != null)
            switch (M) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                N = O;
              default:
                a.hasOwnProperty(M) || Ve(e, t, M, null, a, O);
            }
        }
        for (var k in a) {
          var M = a[k];
          if (O = n[k], a.hasOwnProperty(k) && (M != null || O != null))
            switch (k) {
              case "type":
                u = M;
                break;
              case "name":
                l = M;
                break;
              case "checked":
                B = M;
                break;
              case "defaultChecked":
                P = M;
                break;
              case "value":
                f = M;
                break;
              case "defaultValue":
                g = M;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (M != null)
                  throw Error(o(137, t));
                break;
              default:
                M !== O && Ve(
                  e,
                  t,
                  k,
                  M,
                  a,
                  O
                );
            }
        }
        Ro(
          e,
          f,
          g,
          N,
          B,
          P,
          u,
          l
        );
        return;
      case "select":
        M = f = g = k = null;
        for (u in n)
          if (N = n[u], n.hasOwnProperty(u) && N != null)
            switch (u) {
              case "value":
                break;
              case "multiple":
                M = N;
              default:
                a.hasOwnProperty(u) || Ve(
                  e,
                  t,
                  u,
                  null,
                  a,
                  N
                );
            }
        for (l in a)
          if (u = a[l], N = n[l], a.hasOwnProperty(l) && (u != null || N != null))
            switch (l) {
              case "value":
                k = u;
                break;
              case "defaultValue":
                g = u;
                break;
              case "multiple":
                f = u;
              default:
                u !== N && Ve(
                  e,
                  t,
                  l,
                  u,
                  a,
                  N
                );
            }
        t = g, n = f, a = M, k != null ? Ai(e, !!n, k, !1) : !!a != !!n && (t != null ? Ai(e, !!n, t, !0) : Ai(e, !!n, n ? [] : "", !1));
        return;
      case "textarea":
        M = k = null;
        for (g in n)
          if (l = n[g], n.hasOwnProperty(g) && l != null && !a.hasOwnProperty(g))
            switch (g) {
              case "value":
                break;
              case "children":
                break;
              default:
                Ve(e, t, g, null, a, l);
            }
        for (f in a)
          if (l = a[f], u = n[f], a.hasOwnProperty(f) && (l != null || u != null))
            switch (f) {
              case "value":
                k = l;
                break;
              case "defaultValue":
                M = l;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (l != null) throw Error(o(91));
                break;
              default:
                l !== u && Ve(e, t, f, l, a, u);
            }
        Of(e, k, M);
        return;
      case "option":
        for (var W in n)
          if (k = n[W], n.hasOwnProperty(W) && k != null && !a.hasOwnProperty(W))
            switch (W) {
              case "selected":
                e.selected = !1;
                break;
              default:
                Ve(
                  e,
                  t,
                  W,
                  null,
                  a,
                  k
                );
            }
        for (N in a)
          if (k = a[N], M = n[N], a.hasOwnProperty(N) && k !== M && (k != null || M != null))
            switch (N) {
              case "selected":
                e.selected = k && typeof k != "function" && typeof k != "symbol";
                break;
              default:
                Ve(
                  e,
                  t,
                  N,
                  k,
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
        for (var ae in n)
          k = n[ae], n.hasOwnProperty(ae) && k != null && !a.hasOwnProperty(ae) && Ve(e, t, ae, null, a, k);
        for (B in a)
          if (k = a[B], M = n[B], a.hasOwnProperty(B) && k !== M && (k != null || M != null))
            switch (B) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (k != null)
                  throw Error(o(137, t));
                break;
              default:
                Ve(
                  e,
                  t,
                  B,
                  k,
                  a,
                  M
                );
            }
        return;
      default:
        if (_o(t)) {
          for (var Be in n)
            k = n[Be], n.hasOwnProperty(Be) && k !== void 0 && !a.hasOwnProperty(Be) && Eu(
              e,
              t,
              Be,
              void 0,
              a,
              k
            );
          for (P in a)
            k = a[P], M = n[P], !a.hasOwnProperty(P) || k === M || k === void 0 && M === void 0 || Eu(
              e,
              t,
              P,
              k,
              a,
              M
            );
          return;
        }
    }
    for (var T in n)
      k = n[T], n.hasOwnProperty(T) && k != null && !a.hasOwnProperty(T) && Ve(e, t, T, null, a, k);
    for (O in a)
      k = a[O], M = n[O], !a.hasOwnProperty(O) || k === M || k == null && M == null || Ve(e, t, O, k, a, M);
  }
  function Hp(e) {
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
  function Ub() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, t = 0, n = performance.getEntriesByType("resource"), a = 0; a < n.length; a++) {
        var l = n[a], u = l.transferSize, f = l.initiatorType, g = l.duration;
        if (u && g && Hp(f)) {
          for (f = 0, g = l.responseEnd, a += 1; a < n.length; a++) {
            var N = n[a], B = N.startTime;
            if (B > g) break;
            var P = N.transferSize, O = N.initiatorType;
            P && Hp(O) && (N = N.responseEnd, f += P * (N < g ? 1 : (g - B) / (N - B)));
          }
          if (--a, t += 8 * (u + f) / (l.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var Tu = null, Cu = null;
  function Pl(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function qp(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Gp(e, t) {
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
  var Bu = null;
  function Lb() {
    var e = window.event;
    return e && e.type === "popstate" ? e === Bu ? !1 : (Bu = e, !0) : (Bu = null, !1);
  }
  var Yp = typeof setTimeout == "function" ? setTimeout : void 0, Hb = typeof clearTimeout == "function" ? clearTimeout : void 0, Xp = typeof Promise == "function" ? Promise : void 0, qb = typeof queueMicrotask == "function" ? queueMicrotask : typeof Xp < "u" ? function(e) {
    return Xp.resolve(null).then(e).catch(Gb);
  } : Yp;
  function Gb(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Hn(e) {
    return e === "head";
  }
  function Kp(e, t) {
    var n = t, a = 0;
    do {
      var l = n.nextSibling;
      if (e.removeChild(n), l && l.nodeType === 8)
        if (n = l.data, n === "/$" || n === "/&") {
          if (a === 0) {
            e.removeChild(l), oa(t);
            return;
          }
          a--;
        } else if (n === "$" || n === "$?" || n === "$~" || n === "$!" || n === "&")
          a++;
        else if (n === "html")
          as(e.ownerDocument.documentElement);
        else if (n === "head") {
          n = e.ownerDocument.head, as(n);
          for (var u = n.firstChild; u; ) {
            var f = u.nextSibling, g = u.nodeName;
            u[Na] || g === "SCRIPT" || g === "STYLE" || g === "LINK" && u.rel.toLowerCase() === "stylesheet" || n.removeChild(u), u = f;
          }
        } else
          n === "body" && as(e.ownerDocument.body);
      n = l;
    } while (n);
    oa(t);
  }
  function Qp(e, t) {
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
  function Au(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var n = t;
      switch (t = t.nextSibling, n.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Au(n), jo(n);
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
  function Yb(e, t, n, a) {
    for (; e.nodeType === 1; ) {
      var l = n;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (a) {
        if (!e[Na])
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
      if (e = Ot(e.nextSibling), e === null) break;
    }
    return null;
  }
  function Xb(e, t, n) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !n || (e = Ot(e.nextSibling), e === null)) return null;
    return e;
  }
  function Zp(e, t) {
    for (; e.nodeType !== 8; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = Ot(e.nextSibling), e === null)) return null;
    return e;
  }
  function ku(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function wu(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
  }
  function Kb(e, t) {
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
  var Mu = null;
  function Fp(e) {
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
  function Jp(e) {
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
  function $p(e, t, n) {
    switch (t = Pl(n), e) {
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
  function as(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    jo(e);
  }
  var _t = /* @__PURE__ */ new Map(), Wp = /* @__PURE__ */ new Set();
  function jl(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var bn = K.d;
  K.d = {
    f: Qb,
    r: Zb,
    D: Fb,
    C: Jb,
    L: $b,
    m: Wb,
    X: e1,
    S: Ib,
    M: t1
  };
  function Qb() {
    var e = bn.f(), t = Tl();
    return e || t;
  }
  function Zb(e) {
    var t = Ci(e);
    t !== null && t.tag === 5 && t.type === "form" ? hm(t) : bn.r(e);
  }
  var aa = typeof document > "u" ? null : document;
  function Ip(e, t, n) {
    var a = aa;
    if (a && typeof t == "string" && t) {
      var l = kt(t);
      l = 'link[rel="' + e + '"][href="' + l + '"]', typeof n == "string" && (l += '[crossorigin="' + n + '"]'), Wp.has(l) || (Wp.add(l), e = { rel: e, crossOrigin: n, href: t }, a.querySelector(l) === null && (t = a.createElement("link"), it(t, "link", e), $e(t), a.head.appendChild(t)));
    }
  }
  function Fb(e) {
    bn.D(e), Ip("dns-prefetch", e, null);
  }
  function Jb(e, t) {
    bn.C(e, t), Ip("preconnect", e, t);
  }
  function $b(e, t, n) {
    bn.L(e, t, n);
    var a = aa;
    if (a && e && t) {
      var l = 'link[rel="preload"][as="' + kt(t) + '"]';
      t === "image" && n && n.imageSrcSet ? (l += '[imagesrcset="' + kt(
        n.imageSrcSet
      ) + '"]', typeof n.imageSizes == "string" && (l += '[imagesizes="' + kt(
        n.imageSizes
      ) + '"]')) : l += '[href="' + kt(e) + '"]';
      var u = l;
      switch (t) {
        case "style":
          u = sa(e);
          break;
        case "script":
          u = la(e);
      }
      _t.has(u) || (e = x(
        {
          rel: "preload",
          href: t === "image" && n && n.imageSrcSet ? void 0 : e,
          as: t
        },
        n
      ), _t.set(u, e), a.querySelector(l) !== null || t === "style" && a.querySelector(ss(u)) || t === "script" && a.querySelector(ls(u)) || (t = a.createElement("link"), it(t, "link", e), $e(t), a.head.appendChild(t)));
    }
  }
  function Wb(e, t) {
    bn.m(e, t);
    var n = aa;
    if (n && e) {
      var a = t && typeof t.as == "string" ? t.as : "script", l = 'link[rel="modulepreload"][as="' + kt(a) + '"][href="' + kt(e) + '"]', u = l;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = la(e);
      }
      if (!_t.has(u) && (e = x({ rel: "modulepreload", href: e }, t), _t.set(u, e), n.querySelector(l) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(ls(u)))
              return;
        }
        a = n.createElement("link"), it(a, "link", e), $e(a), n.head.appendChild(a);
      }
    }
  }
  function Ib(e, t, n) {
    bn.S(e, t, n);
    var a = aa;
    if (a && e) {
      var l = Vi(a).hoistableStyles, u = sa(e);
      t = t || "default";
      var f = l.get(u);
      if (!f) {
        var g = { loading: 0, preload: null };
        if (f = a.querySelector(
          ss(u)
        ))
          g.loading = 5;
        else {
          e = x(
            { rel: "stylesheet", href: e, "data-precedence": t },
            n
          ), (n = _t.get(u)) && Pu(e, n);
          var N = f = a.createElement("link");
          $e(N), it(N, "link", e), N._p = new Promise(function(B, P) {
            N.onload = B, N.onerror = P;
          }), N.addEventListener("load", function() {
            g.loading |= 1;
          }), N.addEventListener("error", function() {
            g.loading |= 2;
          }), g.loading |= 4, zl(f, t, a);
        }
        f = {
          type: "stylesheet",
          instance: f,
          count: 1,
          state: g
        }, l.set(u, f);
      }
    }
  }
  function e1(e, t) {
    bn.X(e, t);
    var n = aa;
    if (n && e) {
      var a = Vi(n).hoistableScripts, l = la(e), u = a.get(l);
      u || (u = n.querySelector(ls(l)), u || (e = x({ src: e, async: !0 }, t), (t = _t.get(l)) && ju(e, t), u = n.createElement("script"), $e(u), it(u, "link", e), n.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, a.set(l, u));
    }
  }
  function t1(e, t) {
    bn.M(e, t);
    var n = aa;
    if (n && e) {
      var a = Vi(n).hoistableScripts, l = la(e), u = a.get(l);
      u || (u = n.querySelector(ls(l)), u || (e = x({ src: e, async: !0, type: "module" }, t), (t = _t.get(l)) && ju(e, t), u = n.createElement("script"), $e(u), it(u, "link", e), n.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, a.set(l, u));
    }
  }
  function eh(e, t, n, a) {
    var l = (l = fe.current) ? jl(l) : null;
    if (!l) throw Error(o(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string" ? (t = sa(n.href), n = Vi(
          l
        ).hoistableStyles, a = n.get(t), a || (a = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, n.set(t, a)), a) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
          e = sa(n.href);
          var u = Vi(
            l
          ).hoistableStyles, f = u.get(e);
          if (f || (l = l.ownerDocument || l, f = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, u.set(e, f), (u = l.querySelector(
            ss(e)
          )) && !u._p && (f.instance = u, f.state.loading = 5), _t.has(e) || (n = {
            rel: "preload",
            as: "style",
            href: n.href,
            crossOrigin: n.crossOrigin,
            integrity: n.integrity,
            media: n.media,
            hrefLang: n.hrefLang,
            referrerPolicy: n.referrerPolicy
          }, _t.set(e, n), u || n1(
            l,
            e,
            n,
            f.state
          ))), t && a === null)
            throw Error(o(528, ""));
          return f;
        }
        if (t && a !== null)
          throw Error(o(529, ""));
        return null;
      case "script":
        return t = n.async, n = n.src, typeof n == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = la(n), n = Vi(
          l
        ).hoistableScripts, a = n.get(t), a || (a = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, n.set(t, a)), a) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(o(444, e));
    }
  }
  function sa(e) {
    return 'href="' + kt(e) + '"';
  }
  function ss(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function th(e) {
    return x({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function n1(e, t, n, a) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? a.loading = 1 : (t = e.createElement("link"), a.preload = t, t.addEventListener("load", function() {
      return a.loading |= 1;
    }), t.addEventListener("error", function() {
      return a.loading |= 2;
    }), it(t, "link", n), $e(t), e.head.appendChild(t));
  }
  function la(e) {
    return '[src="' + kt(e) + '"]';
  }
  function ls(e) {
    return "script[async]" + e;
  }
  function nh(e, t, n) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var a = e.querySelector(
            'style[data-href~="' + kt(n.href) + '"]'
          );
          if (a)
            return t.instance = a, $e(a), a;
          var l = x({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null
          });
          return a = (e.ownerDocument || e).createElement(
            "style"
          ), $e(a), it(a, "style", l), zl(a, n.precedence, e), t.instance = a;
        case "stylesheet":
          l = sa(n.href);
          var u = e.querySelector(
            ss(l)
          );
          if (u)
            return t.state.loading |= 4, t.instance = u, $e(u), u;
          a = th(n), (l = _t.get(l)) && Pu(a, l), u = (e.ownerDocument || e).createElement("link"), $e(u);
          var f = u;
          return f._p = new Promise(function(g, N) {
            f.onload = g, f.onerror = N;
          }), it(u, "link", a), t.state.loading |= 4, zl(u, n.precedence, e), t.instance = u;
        case "script":
          return u = la(n.src), (l = e.querySelector(
            ls(u)
          )) ? (t.instance = l, $e(l), l) : (a = n, (l = _t.get(u)) && (a = x({}, n), ju(a, l)), e = e.ownerDocument || e, l = e.createElement("script"), $e(l), it(l, "link", a), e.head.appendChild(l), t.instance = l);
        case "void":
          return null;
        default:
          throw Error(o(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (a = t.instance, t.state.loading |= 4, zl(a, n.precedence, e));
    return t.instance;
  }
  function zl(e, t, n) {
    for (var a = n.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), l = a.length ? a[a.length - 1] : null, u = l, f = 0; f < a.length; f++) {
      var g = a[f];
      if (g.dataset.precedence === t) u = g;
      else if (u !== l) break;
    }
    u ? u.parentNode.insertBefore(e, u.nextSibling) : (t = n.nodeType === 9 ? n.head : n, t.insertBefore(e, t.firstChild));
  }
  function Pu(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function ju(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var Rl = null;
  function ih(e, t, n) {
    if (Rl === null) {
      var a = /* @__PURE__ */ new Map(), l = Rl = /* @__PURE__ */ new Map();
      l.set(n, a);
    } else
      l = Rl, a = l.get(n), a || (a = /* @__PURE__ */ new Map(), l.set(n, a));
    if (a.has(e)) return a;
    for (a.set(e, null), n = n.getElementsByTagName(e), l = 0; l < n.length; l++) {
      var u = n[l];
      if (!(u[Na] || u[Ie] || e === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
        var f = u.getAttribute(t) || "";
        f = e + f;
        var g = a.get(f);
        g ? g.push(u) : a.set(f, [u]);
      }
    }
    return a;
  }
  function ah(e, t, n) {
    e = e.ownerDocument || e, e.head.insertBefore(
      n,
      t === "title" ? e.querySelector("head > title") : null
    );
  }
  function i1(e, t, n) {
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
  function sh(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function a1(e, t, n, a) {
    if (n.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (n.state.loading & 4) === 0) {
      if (n.instance === null) {
        var l = sa(a.href), u = t.querySelector(
          ss(l)
        );
        if (u) {
          t = u._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = Ol.bind(e), t.then(e, e)), n.state.loading |= 4, n.instance = u, $e(u);
          return;
        }
        u = t.ownerDocument || t, a = th(a), (l = _t.get(l)) && Pu(a, l), u = u.createElement("link"), $e(u);
        var f = u;
        f._p = new Promise(function(g, N) {
          f.onload = g, f.onerror = N;
        }), it(u, "link", a), n.instance = u;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(n, t), (t = n.state.preload) && (n.state.loading & 3) === 0 && (e.count++, n = Ol.bind(e), t.addEventListener("load", n), t.addEventListener("error", n));
    }
  }
  var zu = 0;
  function s1(e, t) {
    return e.stylesheets && e.count === 0 && Ul(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(n) {
      var a = setTimeout(function() {
        if (e.stylesheets && Ul(e, e.stylesheets), e.unsuspend) {
          var u = e.unsuspend;
          e.unsuspend = null, u();
        }
      }, 6e4 + t);
      0 < e.imgBytes && zu === 0 && (zu = 62500 * Ub());
      var l = setTimeout(
        function() {
          if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && Ul(e, e.stylesheets), e.unsuspend)) {
            var u = e.unsuspend;
            e.unsuspend = null, u();
          }
        },
        (e.imgBytes > zu ? 50 : 800) + t
      );
      return e.unsuspend = n, function() {
        e.unsuspend = null, clearTimeout(a), clearTimeout(l);
      };
    } : null;
  }
  function Ol() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Ul(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var _l = null;
  function Ul(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, _l = /* @__PURE__ */ new Map(), t.forEach(l1, e), _l = null, Ol.call(e));
  }
  function l1(e, t) {
    if (!(t.state.loading & 4)) {
      var n = _l.get(e);
      if (n) var a = n.get(null);
      else {
        n = /* @__PURE__ */ new Map(), _l.set(e, n);
        for (var l = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), u = 0; u < l.length; u++) {
          var f = l[u];
          (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") && (n.set(f.dataset.precedence, f), a = f);
        }
        a && n.set(null, a);
      }
      l = t.instance, f = l.getAttribute("data-precedence"), u = n.get(f) || a, u === a && n.set(null, l), n.set(f, l), this.count++, a = Ol.bind(this), l.addEventListener("load", a), l.addEventListener("error", a), u ? u.parentNode.insertBefore(l, u.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(l, e.firstChild)), t.state.loading |= 4;
    }
  }
  var os = {
    $$typeof: G,
    Provider: null,
    Consumer: null,
    _currentValue: J,
    _currentValue2: J,
    _threadCount: 0
  };
  function o1(e, t, n, a, l, u, f, g, N) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = ko(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ko(0), this.hiddenUpdates = ko(null), this.identifierPrefix = a, this.onUncaughtError = l, this.onCaughtError = u, this.onRecoverableError = f, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = N, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function lh(e, t, n, a, l, u, f, g, N, B, P, O) {
    return e = new o1(
      e,
      t,
      n,
      f,
      N,
      B,
      P,
      O,
      g
    ), t = 1, u === !0 && (t |= 24), u = Dt(3, null, null, t), e.current = u, u.stateNode = e, t = pr(), t.refCount++, e.pooledCache = t, t.refCount++, u.memoizedState = {
      element: a,
      isDehydrated: n,
      cache: t
    }, vr(u), e;
  }
  function oh(e) {
    return e ? (e = Oi, e) : Oi;
  }
  function rh(e, t, n, a, l, u) {
    l = oh(l), a.context === null ? a.context = l : a.pendingContext = l, a = kn(t), a.payload = { element: n }, u = u === void 0 ? null : u, u !== null && (a.callback = u), n = wn(e, a, t), n !== null && (yt(n, e, t), Ua(n, e, t));
  }
  function uh(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Ru(e, t) {
    uh(e, t), (e = e.alternate) && uh(e, t);
  }
  function ch(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = ai(e, 67108864);
      t !== null && yt(t, e, 67108864), Ru(e, 67108864);
    }
  }
  function fh(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Bt();
      t = wo(t);
      var n = ai(e, t);
      n !== null && yt(n, e, t), Ru(e, t);
    }
  }
  var Ll = !0;
  function r1(e, t, n, a) {
    var l = w.T;
    w.T = null;
    var u = K.p;
    try {
      K.p = 2, Ou(e, t, n, a);
    } finally {
      K.p = u, w.T = l;
    }
  }
  function u1(e, t, n, a) {
    var l = w.T;
    w.T = null;
    var u = K.p;
    try {
      K.p = 8, Ou(e, t, n, a);
    } finally {
      K.p = u, w.T = l;
    }
  }
  function Ou(e, t, n, a) {
    if (Ll) {
      var l = _u(a);
      if (l === null)
        Du(
          e,
          t,
          a,
          Hl,
          n
        ), mh(e, a);
      else if (f1(
        l,
        e,
        t,
        n,
        a
      ))
        a.stopPropagation();
      else if (mh(e, a), t & 4 && -1 < c1.indexOf(e)) {
        for (; l !== null; ) {
          var u = Ci(l);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                  var f = In(u.pendingLanes);
                  if (f !== 0) {
                    var g = u;
                    for (g.pendingLanes |= 2, g.entangledLanes |= 2; f; ) {
                      var N = 1 << 31 - St(f);
                      g.entanglements[1] |= N, f &= ~N;
                    }
                    Jt(u), (Ne & 6) === 0 && (Dl = bt() + 500, ts(0));
                  }
                }
                break;
              case 31:
              case 13:
                g = ai(u, 2), g !== null && yt(g, u, 2), Tl(), Ru(u, 2);
            }
          if (u = _u(a), u === null && Du(
            e,
            t,
            a,
            Hl,
            n
          ), u === l) break;
          l = u;
        }
        l !== null && a.stopPropagation();
      } else
        Du(
          e,
          t,
          a,
          null,
          n
        );
    }
  }
  function _u(e) {
    return e = Lo(e), Uu(e);
  }
  var Hl = null;
  function Uu(e) {
    if (Hl = null, e = Ti(e), e !== null) {
      var t = m(e);
      if (t === null) e = null;
      else {
        var n = t.tag;
        if (n === 13) {
          if (e = d(t), e !== null) return e;
          e = null;
        } else if (n === 31) {
          if (e = p(t), e !== null) return e;
          e = null;
        } else if (n === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return Hl = e, null;
  }
  function dh(e) {
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
        switch (Fy()) {
          case xf:
            return 2;
          case Sf:
            return 8;
          case ks:
          case Jy:
            return 32;
          case Nf:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Lu = !1, qn = null, Gn = null, Yn = null, rs = /* @__PURE__ */ new Map(), us = /* @__PURE__ */ new Map(), Xn = [], c1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function mh(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        qn = null;
        break;
      case "dragenter":
      case "dragleave":
        Gn = null;
        break;
      case "mouseover":
      case "mouseout":
        Yn = null;
        break;
      case "pointerover":
      case "pointerout":
        rs.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        us.delete(t.pointerId);
    }
  }
  function cs(e, t, n, a, l, u) {
    return e === null || e.nativeEvent !== u ? (e = {
      blockedOn: t,
      domEventName: n,
      eventSystemFlags: a,
      nativeEvent: u,
      targetContainers: [l]
    }, t !== null && (t = Ci(t), t !== null && ch(t)), e) : (e.eventSystemFlags |= a, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
  }
  function f1(e, t, n, a, l) {
    switch (t) {
      case "focusin":
        return qn = cs(
          qn,
          e,
          t,
          n,
          a,
          l
        ), !0;
      case "dragenter":
        return Gn = cs(
          Gn,
          e,
          t,
          n,
          a,
          l
        ), !0;
      case "mouseover":
        return Yn = cs(
          Yn,
          e,
          t,
          n,
          a,
          l
        ), !0;
      case "pointerover":
        var u = l.pointerId;
        return rs.set(
          u,
          cs(
            rs.get(u) || null,
            e,
            t,
            n,
            a,
            l
          )
        ), !0;
      case "gotpointercapture":
        return u = l.pointerId, us.set(
          u,
          cs(
            us.get(u) || null,
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
  function ph(e) {
    var t = Ti(e.target);
    if (t !== null) {
      var n = m(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = d(n), t !== null) {
            e.blockedOn = t, Bf(e.priority, function() {
              fh(n);
            });
            return;
          }
        } else if (t === 31) {
          if (t = p(n), t !== null) {
            e.blockedOn = t, Bf(e.priority, function() {
              fh(n);
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
  function ql(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = _u(e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var a = new n.constructor(
          n.type,
          n
        );
        Uo = a, n.target.dispatchEvent(a), Uo = null;
      } else
        return t = Ci(n), t !== null && ch(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function hh(e, t, n) {
    ql(e) && n.delete(t);
  }
  function d1() {
    Lu = !1, qn !== null && ql(qn) && (qn = null), Gn !== null && ql(Gn) && (Gn = null), Yn !== null && ql(Yn) && (Yn = null), rs.forEach(hh), us.forEach(hh);
  }
  function Gl(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Lu || (Lu = !0, i.unstable_scheduleCallback(
      i.unstable_NormalPriority,
      d1
    )));
  }
  var Yl = null;
  function gh(e) {
    Yl !== e && (Yl = e, i.unstable_scheduleCallback(
      i.unstable_NormalPriority,
      function() {
        Yl === e && (Yl = null);
        for (var t = 0; t < e.length; t += 3) {
          var n = e[t], a = e[t + 1], l = e[t + 2];
          if (typeof a != "function") {
            if (Uu(a || n) === null)
              continue;
            break;
          }
          var u = Ci(n);
          u !== null && (e.splice(t, 3), t -= 3, _r(
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
  function oa(e) {
    function t(N) {
      return Gl(N, e);
    }
    qn !== null && Gl(qn, e), Gn !== null && Gl(Gn, e), Yn !== null && Gl(Yn, e), rs.forEach(t), us.forEach(t);
    for (var n = 0; n < Xn.length; n++) {
      var a = Xn[n];
      a.blockedOn === e && (a.blockedOn = null);
    }
    for (; 0 < Xn.length && (n = Xn[0], n.blockedOn === null); )
      ph(n), n.blockedOn === null && Xn.shift();
    if (n = (e.ownerDocument || e).$$reactFormReplay, n != null)
      for (a = 0; a < n.length; a += 3) {
        var l = n[a], u = n[a + 1], f = l[ft] || null;
        if (typeof u == "function")
          f || gh(n);
        else if (f) {
          var g = null;
          if (u && u.hasAttribute("formAction")) {
            if (l = u, f = u[ft] || null)
              g = f.formAction;
            else if (Uu(l) !== null) continue;
          } else g = f.action;
          typeof g == "function" ? n[a + 1] = g : (n.splice(a, 3), a -= 3), gh(n);
        }
      }
  }
  function yh() {
    function e(u) {
      u.canIntercept && u.info === "react-transition" && u.intercept({
        handler: function() {
          return new Promise(function(f) {
            return l = f;
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
  function Hu(e) {
    this._internalRoot = e;
  }
  Xl.prototype.render = Hu.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(o(409));
    var n = t.current, a = Bt();
    rh(n, a, e, t, null, null);
  }, Xl.prototype.unmount = Hu.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      rh(e.current, 2, null, e, null, null), Tl(), t[Ei] = null;
    }
  };
  function Xl(e) {
    this._internalRoot = e;
  }
  Xl.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Vf();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Xn.length && t !== 0 && t < Xn[n].priority; n++) ;
      Xn.splice(n, 0, e), n === 0 && ph(e);
    }
  };
  var vh = s.version;
  if (vh !== "19.2.6")
    throw Error(
      o(
        527,
        vh,
        "19.2.6"
      )
    );
  K.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(o(188)) : (e = Object.keys(e).join(","), Error(o(268, e)));
    return e = h(t), e = e !== null ? v(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var m1 = {
    bundleType: 0,
    version: "19.2.6",
    rendererPackageName: "react-dom",
    currentDispatcherRef: w,
    reconcilerVersion: "19.2.6"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Kl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Kl.isDisabled && Kl.supportsFiber)
      try {
        ba = Kl.inject(
          m1
        ), xt = Kl;
      } catch {
      }
  }
  return fs.createRoot = function(e, t) {
    if (!c(e)) throw Error(o(299));
    var n = !1, a = "", l = Tm, u = Cm, f = Vm;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onUncaughtError !== void 0 && (l = t.onUncaughtError), t.onCaughtError !== void 0 && (u = t.onCaughtError), t.onRecoverableError !== void 0 && (f = t.onRecoverableError)), t = lh(
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
      f,
      yh
    ), e[Ei] = t.current, Nu(e), new Hu(t);
  }, fs.hydrateRoot = function(e, t, n) {
    if (!c(e)) throw Error(o(299));
    var a = !1, l = "", u = Tm, f = Cm, g = Vm, N = null;
    return n != null && (n.unstable_strictMode === !0 && (a = !0), n.identifierPrefix !== void 0 && (l = n.identifierPrefix), n.onUncaughtError !== void 0 && (u = n.onUncaughtError), n.onCaughtError !== void 0 && (f = n.onCaughtError), n.onRecoverableError !== void 0 && (g = n.onRecoverableError), n.formState !== void 0 && (N = n.formState)), t = lh(
      e,
      1,
      !0,
      t,
      n ?? null,
      a,
      l,
      N,
      u,
      f,
      g,
      yh
    ), t.context = oh(null), n = t.current, a = Bt(), a = wo(a), l = kn(a), l.callback = null, wn(n, l, a), n = a, t.current.lanes = n, Sa(t, n), Jt(t), e[Ei] = t.current, Nu(e), new Xl(t);
  }, fs.version = "19.2.6", fs;
}
var Bh;
function D1() {
  if (Bh) return Yu.exports;
  Bh = 1;
  function i() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (s) {
        console.error(s);
      }
  }
  return i(), Yu.exports = N1(), Yu.exports;
}
var E1 = D1(), Zu = { exports: {} }, ds = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ah;
function T1() {
  if (Ah) return ds;
  Ah = 1;
  var i = Symbol.for("react.transitional.element"), s = Symbol.for("react.fragment");
  function r(o, c, m) {
    var d = null;
    if (m !== void 0 && (d = "" + m), c.key !== void 0 && (d = "" + c.key), "key" in c) {
      m = {};
      for (var p in c)
        p !== "key" && (m[p] = c[p]);
    } else m = c;
    return c = m.ref, {
      $$typeof: i,
      type: o,
      key: d,
      ref: c !== void 0 ? c : null,
      props: m
    };
  }
  return ds.Fragment = s, ds.jsx = r, ds.jsxs = r, ds;
}
var kh;
function C1() {
  return kh || (kh = 1, Zu.exports = T1()), Zu.exports;
}
var Sn = C1();
const Yc = Y.createContext({});
function Xc(i) {
  const s = Y.useRef(null);
  return s.current === null && (s.current = i()), s.current;
}
const V1 = typeof window < "u", lg = V1 ? Y.useLayoutEffect : Y.useEffect, bo = /* @__PURE__ */ Y.createContext(null);
function Kc(i, s) {
  i.indexOf(s) === -1 && i.push(s);
}
function ro(i, s) {
  const r = i.indexOf(s);
  r > -1 && i.splice(r, 1);
}
const en = (i, s, r) => r > s ? s : r < i ? i : r;
function wh(i, s) {
  return s ? `${i}. For more information and steps for solving, visit https://motion.dev/troubleshooting/${s}` : i;
}
let Es = () => {
}, Di = () => {
};
var sg;
typeof process < "u" && ((sg = process.env) == null ? void 0 : sg.NODE_ENV) !== "production" && (Es = (i, s, r) => {
  !i && typeof console < "u" && console.warn(wh(s, r));
}, Di = (i, s, r) => {
  if (!i)
    throw new Error(wh(s, r));
});
const Fn = {}, og = (i) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(i), rg = (i) => typeof i == "object" && i !== null, ug = (i) => /^0[^.\s]+$/u.test(i);
// @__NO_SIDE_EFFECTS__
function cg(i) {
  let s;
  return () => (s === void 0 && (s = i()), s);
}
const Lt = /* @__NO_SIDE_EFFECTS__ */ (i) => i, Ts = (...i) => i.reduce((s, r) => (o) => r(s(o))), xs = /* @__NO_SIDE_EFFECTS__ */ (i, s, r) => {
  const o = s - i;
  return o ? (r - i) / o : 1;
};
class Qc {
  constructor() {
    this.subscriptions = [];
  }
  add(s) {
    return Kc(this.subscriptions, s), () => ro(this.subscriptions, s);
  }
  notify(s, r, o) {
    const c = this.subscriptions.length;
    if (c)
      if (c === 1)
        this.subscriptions[0](s, r, o);
      else
        for (let m = 0; m < c; m++) {
          const d = this.subscriptions[m];
          d && d(s, r, o);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const vt = /* @__NO_SIDE_EFFECTS__ */ (i) => i * 1e3, Ut = /* @__NO_SIDE_EFFECTS__ */ (i) => i / 1e3, fg = /* @__NO_SIDE_EFFECTS__ */ (i, s) => s ? i * (1e3 / s) : 0, dg = (i, s, r) => (((1 - 3 * r + 3 * s) * i + (3 * r - 6 * s)) * i + 3 * s) * i, B1 = 1e-7, A1 = 12;
function k1(i, s, r, o, c) {
  let m, d, p = 0;
  do
    d = s + (r - s) / 2, m = dg(d, o, c) - i, m > 0 ? r = d : s = d;
  while (Math.abs(m) > B1 && ++p < A1);
  return d;
}
// @__NO_SIDE_EFFECTS__
function Cs(i, s, r, o) {
  if (i === s && r === o)
    return Lt;
  const c = (m) => k1(m, 0, 1, i, r);
  return (m) => m === 0 || m === 1 ? m : dg(c(m), s, o);
}
const mg = /* @__NO_SIDE_EFFECTS__ */ (i) => (s) => s <= 0.5 ? i(2 * s) / 2 : (2 - i(2 * (1 - s))) / 2, pg = /* @__NO_SIDE_EFFECTS__ */ (i) => (s) => 1 - i(1 - s), hg = /* @__PURE__ */ Cs(0.33, 1.53, 0.69, 0.99), Zc = /* @__PURE__ */ pg(hg), gg = /* @__PURE__ */ mg(Zc), yg = (i) => i >= 1 ? 1 : (i *= 2) < 1 ? 0.5 * Zc(i) : 0.5 * (2 - Math.pow(2, -10 * (i - 1))), Fc = (i) => 1 - Math.sin(Math.acos(i)), vg = /* @__PURE__ */ pg(Fc), bg = /* @__PURE__ */ mg(Fc), w1 = /* @__PURE__ */ Cs(0.42, 0, 1, 1), M1 = /* @__PURE__ */ Cs(0, 0, 0.58, 1), xg = /* @__PURE__ */ Cs(0.42, 0, 0.58, 1), P1 = /* @__NO_SIDE_EFFECTS__ */ (i) => Array.isArray(i) && typeof i[0] != "number", Sg = /* @__NO_SIDE_EFFECTS__ */ (i) => Array.isArray(i) && typeof i[0] == "number", Mh = {
  linear: Lt,
  easeIn: w1,
  easeInOut: xg,
  easeOut: M1,
  circIn: Fc,
  circInOut: bg,
  circOut: vg,
  backIn: Zc,
  backInOut: gg,
  backOut: hg,
  anticipate: yg
}, j1 = (i) => typeof i == "string", Ph = (i) => {
  if (/* @__PURE__ */ Sg(i)) {
    Di(i.length === 4, "Cubic bezier arrays must contain four numerical values.", "cubic-bezier-length");
    const [s, r, o, c] = i;
    return /* @__PURE__ */ Cs(s, r, o, c);
  } else if (j1(i))
    return Di(Mh[i] !== void 0, `Invalid easing type '${i}'`, "invalid-easing-type"), Mh[i];
  return i;
}, Zl = [
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
function z1(i, s) {
  let r = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Set(), c = !1, m = !1;
  const d = /* @__PURE__ */ new WeakSet();
  let p = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  };
  function b(v) {
    d.has(v) && (h.schedule(v), i()), v(p);
  }
  const h = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (v, x = !1, S = !1) => {
      const A = S && c ? r : o;
      return x && d.add(v), A.add(v), v;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (v) => {
      o.delete(v), d.delete(v);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (v) => {
      if (p = v, c) {
        m = !0;
        return;
      }
      c = !0;
      const x = r;
      r = o, o = x, r.forEach(b), r.clear(), c = !1, m && (m = !1, h.process(v));
    }
  };
  return h;
}
const R1 = 40;
function Ng(i, s) {
  let r = !1, o = !0;
  const c = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, m = () => r = !0, d = Zl.reduce((G, q) => (G[q] = z1(m), G), {}), { setup: p, read: b, resolveKeyframes: h, preUpdate: v, update: x, preRender: S, render: C, postRender: A } = d, j = () => {
    const G = Fn.useManualTiming, q = G ? c.timestamp : performance.now();
    r = !1, G || (c.delta = o ? 1e3 / 60 : Math.max(Math.min(q - c.timestamp, R1), 1)), c.timestamp = q, c.isProcessing = !0, p.process(c), b.process(c), h.process(c), v.process(c), x.process(c), S.process(c), C.process(c), A.process(c), c.isProcessing = !1, r && s && (o = !1, i(j));
  }, U = () => {
    r = !0, o = !0, c.isProcessing || i(j);
  };
  return { schedule: Zl.reduce((G, q) => {
    const F = d[q];
    return G[q] = (ie, R = !1, H = !1) => (r || U(), F.schedule(ie, R, H)), G;
  }, {}), cancel: (G) => {
    for (let q = 0; q < Zl.length; q++)
      d[Zl[q]].cancel(G);
  }, state: c, steps: d };
}
const { schedule: we, cancel: Jn, state: at, steps: Fu } = /* @__PURE__ */ Ng(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Lt, !0);
let eo;
function O1() {
  eo = void 0;
}
const ut = {
  now: () => (eo === void 0 && ut.set(at.isProcessing || Fn.useManualTiming ? at.timestamp : performance.now()), eo),
  set: (i) => {
    eo = i, queueMicrotask(O1);
  }
}, Dg = (i) => (s) => typeof s == "string" && s.startsWith(i), Eg = /* @__PURE__ */ Dg("--"), _1 = /* @__PURE__ */ Dg("var(--"), Jc = (i) => _1(i) ? U1.test(i.split("/*")[0].trim()) : !1, U1 = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function jh(i) {
  return typeof i != "string" ? !1 : i.split("/*")[0].includes("var(--");
}
const ha = {
  test: (i) => typeof i == "number",
  parse: parseFloat,
  transform: (i) => i
}, Ss = {
  ...ha,
  transform: (i) => en(0, 1, i)
}, Fl = {
  ...ha,
  default: 1
}, gs = (i) => Math.round(i * 1e5) / 1e5, $c = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function L1(i) {
  return i == null;
}
const H1 = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, Wc = (i, s) => (r) => !!(typeof r == "string" && H1.test(r) && r.startsWith(i) || s && !L1(r) && Object.prototype.hasOwnProperty.call(r, s)), Tg = (i, s, r) => (o) => {
  if (typeof o != "string")
    return o;
  const [c, m, d, p] = o.match($c);
  return {
    [i]: parseFloat(c),
    [s]: parseFloat(m),
    [r]: parseFloat(d),
    alpha: p !== void 0 ? parseFloat(p) : 1
  };
}, q1 = (i) => en(0, 255, i), Ju = {
  ...ha,
  transform: (i) => Math.round(q1(i))
}, bi = {
  test: /* @__PURE__ */ Wc("rgb", "red"),
  parse: /* @__PURE__ */ Tg("red", "green", "blue"),
  transform: ({ red: i, green: s, blue: r, alpha: o = 1 }) => "rgba(" + Ju.transform(i) + ", " + Ju.transform(s) + ", " + Ju.transform(r) + ", " + gs(Ss.transform(o)) + ")"
};
function G1(i) {
  let s = "", r = "", o = "", c = "";
  return i.length > 5 ? (s = i.substring(1, 3), r = i.substring(3, 5), o = i.substring(5, 7), c = i.substring(7, 9)) : (s = i.substring(1, 2), r = i.substring(2, 3), o = i.substring(3, 4), c = i.substring(4, 5), s += s, r += r, o += o, c += c), {
    red: parseInt(s, 16),
    green: parseInt(r, 16),
    blue: parseInt(o, 16),
    alpha: c ? parseInt(c, 16) / 255 : 1
  };
}
const hc = {
  test: /* @__PURE__ */ Wc("#"),
  parse: G1,
  transform: bi.transform
}, Vs = /* @__NO_SIDE_EFFECTS__ */ (i) => ({
  test: (s) => typeof s == "string" && s.endsWith(i) && s.split(" ").length === 1,
  parse: parseFloat,
  transform: (s) => `${s}${i}`
}), xn = /* @__PURE__ */ Vs("deg"), It = /* @__PURE__ */ Vs("%"), I = /* @__PURE__ */ Vs("px"), Y1 = /* @__PURE__ */ Vs("vh"), X1 = /* @__PURE__ */ Vs("vw"), zh = {
  ...It,
  parse: (i) => It.parse(i) / 100,
  transform: (i) => It.transform(i * 100)
}, ca = {
  test: /* @__PURE__ */ Wc("hsl", "hue"),
  parse: /* @__PURE__ */ Tg("hue", "saturation", "lightness"),
  transform: ({ hue: i, saturation: s, lightness: r, alpha: o = 1 }) => "hsla(" + Math.round(i) + ", " + It.transform(gs(s)) + ", " + It.transform(gs(r)) + ", " + gs(Ss.transform(o)) + ")"
}, Ze = {
  test: (i) => bi.test(i) || hc.test(i) || ca.test(i),
  parse: (i) => bi.test(i) ? bi.parse(i) : ca.test(i) ? ca.parse(i) : hc.parse(i),
  transform: (i) => typeof i == "string" ? i : i.hasOwnProperty("red") ? bi.transform(i) : ca.transform(i),
  getAnimatableNone: (i) => {
    const s = Ze.parse(i);
    return s.alpha = 0, Ze.transform(s);
  }
}, K1 = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function Q1(i) {
  var s, r;
  return isNaN(i) && typeof i == "string" && (((s = i.match($c)) == null ? void 0 : s.length) || 0) + (((r = i.match(K1)) == null ? void 0 : r.length) || 0) > 0;
}
const Cg = "number", Vg = "color", Z1 = "var", F1 = "var(", Rh = "${}", J1 = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function ma(i) {
  const s = i.toString(), r = [], o = {
    color: [],
    number: [],
    var: []
  }, c = [];
  let m = 0;
  const p = s.replace(J1, (b) => (Ze.test(b) ? (o.color.push(m), c.push(Vg), r.push(Ze.parse(b))) : b.startsWith(F1) ? (o.var.push(m), c.push(Z1), r.push(b)) : (o.number.push(m), c.push(Cg), r.push(parseFloat(b))), ++m, Rh)).split(Rh);
  return { values: r, split: p, indexes: o, types: c };
}
function $1(i) {
  return ma(i).values;
}
function Bg({ split: i, types: s }) {
  const r = i.length;
  return (o) => {
    let c = "";
    for (let m = 0; m < r; m++)
      if (c += i[m], o[m] !== void 0) {
        const d = s[m];
        d === Cg ? c += gs(o[m]) : d === Vg ? c += Ze.transform(o[m]) : c += o[m];
      }
    return c;
  };
}
function W1(i) {
  return Bg(ma(i));
}
const I1 = (i) => typeof i == "number" ? 0 : Ze.test(i) ? Ze.getAnimatableNone(i) : i, ex = (i, s) => typeof i == "number" ? s != null && s.trim().endsWith("/") ? i : 0 : I1(i);
function tx(i) {
  const s = ma(i);
  return Bg(s)(s.values.map((o, c) => ex(o, s.split[c])));
}
const Kt = {
  test: Q1,
  parse: $1,
  createTransformer: W1,
  getAnimatableNone: tx
};
function $u(i, s, r) {
  return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? i + (s - i) * 6 * r : r < 1 / 2 ? s : r < 2 / 3 ? i + (s - i) * (2 / 3 - r) * 6 : i;
}
function nx({ hue: i, saturation: s, lightness: r, alpha: o }) {
  i /= 360, s /= 100, r /= 100;
  let c = 0, m = 0, d = 0;
  if (!s)
    c = m = d = r;
  else {
    const p = r < 0.5 ? r * (1 + s) : r + s - r * s, b = 2 * r - p;
    c = $u(b, p, i + 1 / 3), m = $u(b, p, i), d = $u(b, p, i - 1 / 3);
  }
  return {
    red: Math.round(c * 255),
    green: Math.round(m * 255),
    blue: Math.round(d * 255),
    alpha: o
  };
}
function uo(i, s) {
  return (r) => r > 0 ? s : i;
}
const ke = (i, s, r) => i + (s - i) * r, Wu = (i, s, r) => {
  const o = i * i, c = r * (s * s - o) + o;
  return c < 0 ? 0 : Math.sqrt(c);
}, ix = [hc, bi, ca], ax = (i) => ix.find((s) => s.test(i));
function Oh(i) {
  const s = ax(i);
  if (Es(!!s, `'${i}' is not an animatable color. Use the equivalent color code instead.`, "color-not-animatable"), !s)
    return !1;
  let r = s.parse(i);
  return s === ca && (r = nx(r)), r;
}
const _h = (i, s) => {
  const r = Oh(i), o = Oh(s);
  if (!r || !o)
    return uo(i, s);
  const c = { ...r };
  return (m) => (c.red = Wu(r.red, o.red, m), c.green = Wu(r.green, o.green, m), c.blue = Wu(r.blue, o.blue, m), c.alpha = ke(r.alpha, o.alpha, m), bi.transform(c));
}, gc = /* @__PURE__ */ new Set(["none", "hidden"]);
function sx(i, s) {
  return gc.has(i) ? (r) => r <= 0 ? i : s : (r) => r >= 1 ? s : i;
}
function lx(i, s) {
  return (r) => ke(i, s, r);
}
function Ic(i) {
  return typeof i == "number" ? lx : typeof i == "string" ? Jc(i) ? uo : Ze.test(i) ? _h : ux : Array.isArray(i) ? Ag : typeof i == "object" ? Ze.test(i) ? _h : ox : uo;
}
function Ag(i, s) {
  const r = [...i], o = r.length, c = i.map((m, d) => Ic(m)(m, s[d]));
  return (m) => {
    for (let d = 0; d < o; d++)
      r[d] = c[d](m);
    return r;
  };
}
function ox(i, s) {
  const r = { ...i, ...s }, o = {};
  for (const c in r)
    i[c] !== void 0 && s[c] !== void 0 && (o[c] = Ic(i[c])(i[c], s[c]));
  return (c) => {
    for (const m in o)
      r[m] = o[m](c);
    return r;
  };
}
function rx(i, s) {
  const r = [], o = { color: 0, var: 0, number: 0 };
  for (let c = 0; c < s.values.length; c++) {
    const m = s.types[c], d = i.indexes[m][o[m]], p = i.values[d] ?? 0;
    r[c] = p, o[m]++;
  }
  return r;
}
const ux = (i, s) => {
  const r = Kt.createTransformer(s), o = ma(i), c = ma(s);
  return o.indexes.var.length === c.indexes.var.length && o.indexes.color.length === c.indexes.color.length && o.indexes.number.length >= c.indexes.number.length ? gc.has(i) && !c.values.length || gc.has(s) && !o.values.length ? sx(i, s) : Ts(Ag(rx(o, c), c.values), r) : (Es(!0, `Complex values '${i}' and '${s}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`, "complex-values-different"), uo(i, s));
};
function kg(i, s, r) {
  return typeof i == "number" && typeof s == "number" && typeof r == "number" ? ke(i, s, r) : Ic(i)(i, s);
}
const cx = (i) => {
  const s = ({ timestamp: r }) => i(r);
  return {
    start: (r = !0) => we.update(s, r),
    stop: () => Jn(s),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => at.isProcessing ? at.timestamp : ut.now()
  };
}, wg = (i, s, r = 10) => {
  let o = "";
  const c = Math.max(Math.round(s / r), 2);
  for (let m = 0; m < c; m++)
    o += Math.round(i(m / (c - 1)) * 1e4) / 1e4 + ", ";
  return `linear(${o.substring(0, o.length - 2)})`;
}, co = 2e4;
function ef(i) {
  let s = 0;
  const r = 50;
  let o = i.next(s);
  for (; !o.done && s < co; )
    s += r, o = i.next(s);
  return s >= co ? 1 / 0 : s;
}
function fx(i, s = 100, r) {
  const o = r({ ...i, keyframes: [0, s] }), c = Math.min(ef(o), co);
  return {
    type: "keyframes",
    ease: (m) => o.next(c * m).value / s,
    duration: /* @__PURE__ */ Ut(c)
  };
}
const Oe = {
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
function yc(i, s) {
  return i * Math.sqrt(1 - s * s);
}
const dx = 12;
function mx(i, s, r) {
  let o = r;
  for (let c = 1; c < dx; c++)
    o = o - i(o) / s(o);
  return o;
}
const Iu = 1e-3;
function px({ duration: i = Oe.duration, bounce: s = Oe.bounce, velocity: r = Oe.velocity, mass: o = Oe.mass }) {
  let c, m;
  Es(i <= /* @__PURE__ */ vt(Oe.maxDuration), "Spring duration must be 10 seconds or less", "spring-duration-limit");
  let d = 1 - s;
  d = en(Oe.minDamping, Oe.maxDamping, d), i = en(Oe.minDuration, Oe.maxDuration, /* @__PURE__ */ Ut(i)), d < 1 ? (c = (h) => {
    const v = h * d, x = v * i, S = v - r, C = yc(h, d), A = Math.exp(-x);
    return Iu - S / C * A;
  }, m = (h) => {
    const x = h * d * i, S = x * r + r, C = Math.pow(d, 2) * Math.pow(h, 2) * i, A = Math.exp(-x), j = yc(Math.pow(h, 2), d);
    return (-c(h) + Iu > 0 ? -1 : 1) * ((S - C) * A) / j;
  }) : (c = (h) => {
    const v = Math.exp(-h * i), x = (h - r) * i + 1;
    return -Iu + v * x;
  }, m = (h) => {
    const v = Math.exp(-h * i), x = (r - h) * (i * i);
    return v * x;
  });
  const p = 5 / i, b = mx(c, m, p);
  if (i = /* @__PURE__ */ vt(i), isNaN(b))
    return {
      stiffness: Oe.stiffness,
      damping: Oe.damping,
      duration: i
    };
  {
    const h = Math.pow(b, 2) * o;
    return {
      stiffness: h,
      damping: d * 2 * Math.sqrt(o * h),
      duration: i
    };
  }
}
const hx = ["duration", "bounce"], gx = ["stiffness", "damping", "mass"];
function Uh(i, s) {
  return s.some((r) => i[r] !== void 0);
}
function yx(i) {
  let s = {
    velocity: Oe.velocity,
    stiffness: Oe.stiffness,
    damping: Oe.damping,
    mass: Oe.mass,
    isResolvedFromDuration: !1,
    ...i
  };
  if (!Uh(i, gx) && Uh(i, hx))
    if (s.velocity = 0, i.visualDuration) {
      const r = i.visualDuration, o = 2 * Math.PI / (r * 1.2), c = o * o, m = 2 * en(0.05, 1, 1 - (i.bounce || 0)) * Math.sqrt(c);
      s = {
        ...s,
        mass: Oe.mass,
        stiffness: c,
        damping: m
      };
    } else {
      const r = px({ ...i, velocity: 0 });
      s = {
        ...s,
        ...r,
        mass: Oe.mass
      }, s.isResolvedFromDuration = !0;
    }
  return s;
}
function fo(i = Oe.visualDuration, s = Oe.bounce) {
  const r = typeof i != "object" ? {
    visualDuration: i,
    keyframes: [0, 1],
    bounce: s
  } : i;
  let { restSpeed: o, restDelta: c } = r;
  const m = r.keyframes[0], d = r.keyframes[r.keyframes.length - 1], p = { done: !1, value: m }, { stiffness: b, damping: h, mass: v, duration: x, velocity: S, isResolvedFromDuration: C } = yx({
    ...r,
    velocity: -/* @__PURE__ */ Ut(r.velocity || 0)
  }), A = S || 0, j = h / (2 * Math.sqrt(b * v)), U = d - m, L = /* @__PURE__ */ Ut(Math.sqrt(b / v)), X = Math.abs(U) < 5;
  o || (o = X ? Oe.restSpeed.granular : Oe.restSpeed.default), c || (c = X ? Oe.restDelta.granular : Oe.restDelta.default);
  let G, q, F, ie, R, H;
  if (j < 1)
    F = yc(L, j), ie = (A + j * L * U) / F, G = (Q) => {
      const se = Math.exp(-j * L * Q);
      return d - se * (ie * Math.sin(F * Q) + U * Math.cos(F * Q));
    }, R = j * L * ie + U * F, H = j * L * U - ie * F, q = (Q) => Math.exp(-j * L * Q) * (R * Math.sin(F * Q) + H * Math.cos(F * Q));
  else if (j === 1) {
    G = (se) => d - Math.exp(-L * se) * (U + (A + L * U) * se);
    const Q = A + L * U;
    q = (se) => Math.exp(-L * se) * (L * Q * se - A);
  } else {
    const Q = L * Math.sqrt(j * j - 1);
    G = (ze) => {
      const be = Math.exp(-j * L * ze), w = Math.min(Q * ze, 300);
      return d - be * ((A + j * L * U) * Math.sinh(w) + Q * U * Math.cosh(w)) / Q;
    };
    const se = (A + j * L * U) / Q, ge = j * L * se - U * Q, Ge = j * L * U - se * Q;
    q = (ze) => {
      const be = Math.exp(-j * L * ze), w = Math.min(Q * ze, 300);
      return be * (ge * Math.sinh(w) + Ge * Math.cosh(w));
    };
  }
  const $ = {
    calculatedDuration: C && x || null,
    velocity: (Q) => /* @__PURE__ */ vt(q(Q)),
    next: (Q) => {
      if (!C && j < 1) {
        const ge = Math.exp(-j * L * Q), Ge = Math.sin(F * Q), ze = Math.cos(F * Q), be = d - ge * (ie * Ge + U * ze), w = /* @__PURE__ */ vt(ge * (R * Ge + H * ze));
        return p.done = Math.abs(w) <= o && Math.abs(d - be) <= c, p.value = p.done ? d : be, p;
      }
      const se = G(Q);
      if (C)
        p.done = Q >= x;
      else {
        const ge = /* @__PURE__ */ vt(q(Q));
        p.done = Math.abs(ge) <= o && Math.abs(d - se) <= c;
      }
      return p.value = p.done ? d : se, p;
    },
    toString: () => {
      const Q = Math.min(ef($), co), se = wg((ge) => $.next(Q * ge).value, Q, 30);
      return Q + "ms " + se;
    },
    toTransition: () => {
    }
  };
  return $;
}
fo.applyToOptions = (i) => {
  const s = fx(i, 100, fo);
  return i.ease = s.ease, i.duration = /* @__PURE__ */ vt(s.duration), i.type = "keyframes", i;
};
const vx = 5;
function Mg(i, s, r) {
  const o = Math.max(s - vx, 0);
  return /* @__PURE__ */ fg(r - i(o), s - o);
}
function vc({ keyframes: i, velocity: s = 0, power: r = 0.8, timeConstant: o = 325, bounceDamping: c = 10, bounceStiffness: m = 500, modifyTarget: d, min: p, max: b, restDelta: h = 0.5, restSpeed: v }) {
  const x = i[0], S = {
    done: !1,
    value: x
  }, C = (H) => p !== void 0 && H < p || b !== void 0 && H > b, A = (H) => p === void 0 ? b : b === void 0 || Math.abs(p - H) < Math.abs(b - H) ? p : b;
  let j = r * s;
  const U = x + j, L = d === void 0 ? U : d(U);
  L !== U && (j = L - x);
  const X = (H) => -j * Math.exp(-H / o), G = (H) => L + X(H), q = (H) => {
    const $ = X(H), Q = G(H);
    S.done = Math.abs($) <= h, S.value = S.done ? L : Q;
  };
  let F, ie;
  const R = (H) => {
    C(S.value) && (F = H, ie = fo({
      keyframes: [S.value, A(S.value)],
      velocity: Mg(G, H, S.value),
      // TODO: This should be passing * 1000
      damping: c,
      stiffness: m,
      restDelta: h,
      restSpeed: v
    }));
  };
  return R(0), {
    calculatedDuration: null,
    next: (H) => {
      let $ = !1;
      return !ie && F === void 0 && ($ = !0, q(H), R(H)), F !== void 0 && H >= F ? ie.next(H - F) : (!$ && q(H), S);
    }
  };
}
function bx(i, s, r) {
  const o = [], c = r || Fn.mix || kg, m = i.length - 1;
  for (let d = 0; d < m; d++) {
    let p = c(i[d], i[d + 1]);
    if (s) {
      const b = Array.isArray(s) ? s[d] || Lt : s;
      p = Ts(b, p);
    }
    o.push(p);
  }
  return o;
}
function xx(i, s, { clamp: r = !0, ease: o, mixer: c } = {}) {
  const m = i.length;
  if (Di(m === s.length, "Both input and output ranges must be the same length", "range-length"), m === 1)
    return () => s[0];
  if (m === 2 && s[0] === s[1])
    return () => s[1];
  const d = i[0] === i[1];
  i[0] > i[m - 1] && (i = [...i].reverse(), s = [...s].reverse());
  const p = bx(s, o, c), b = p.length, h = (v) => {
    if (d && v < i[0])
      return s[0];
    let x = 0;
    if (b > 1)
      for (; x < i.length - 2 && !(v < i[x + 1]); x++)
        ;
    const S = /* @__PURE__ */ xs(i[x], i[x + 1], v);
    return p[x](S);
  };
  return r ? (v) => h(en(i[0], i[m - 1], v)) : h;
}
function Sx(i, s) {
  const r = i[i.length - 1];
  for (let o = 1; o <= s; o++) {
    const c = /* @__PURE__ */ xs(0, s, o);
    i.push(ke(r, 1, c));
  }
}
function Nx(i) {
  const s = [0];
  return Sx(s, i.length - 1), s;
}
function Dx(i, s) {
  return i.map((r) => r * s);
}
function Ex(i, s) {
  return i.map(() => s || xg).splice(0, i.length - 1);
}
function ys({ duration: i = 300, keyframes: s, times: r, ease: o = "easeInOut" }) {
  const c = /* @__PURE__ */ P1(o) ? o.map(Ph) : Ph(o), m = {
    done: !1,
    value: s[0]
  }, d = Dx(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    r && r.length === s.length ? r : Nx(s),
    i
  ), p = xx(d, s, {
    ease: Array.isArray(c) ? c : Ex(s, c)
  });
  return {
    calculatedDuration: i,
    next: (b) => (m.value = p(b), m.done = b >= i, m)
  };
}
const Tx = (i) => i !== null;
function xo(i, { repeat: s, repeatType: r = "loop" }, o, c = 1) {
  const m = i.filter(Tx), p = c < 0 || s && r !== "loop" && s % 2 === 1 ? 0 : m.length - 1;
  return !p || o === void 0 ? m[p] : o;
}
const Cx = {
  decay: vc,
  inertia: vc,
  tween: ys,
  keyframes: ys,
  spring: fo
};
function Pg(i) {
  typeof i.type == "string" && (i.type = Cx[i.type]);
}
class tf {
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
  then(s, r) {
    return this.finished.then(s, r);
  }
}
const Vx = (i) => i / 100;
class mo extends tf {
  constructor(s) {
    super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.delayState = {
      done: !1,
      value: void 0
    }, this.stop = () => {
      var o, c;
      const { motionValue: r } = this.options;
      r && r.updatedAt !== ut.now() && this.tick(ut.now()), this.isStopped = !0, this.state !== "idle" && (this.teardown(), (c = (o = this.options).onStop) == null || c.call(o));
    }, this.options = s, this.initAnimation(), this.play(), s.autoplay === !1 && this.pause();
  }
  initAnimation() {
    const { options: s } = this;
    Pg(s);
    const { type: r = ys, repeat: o = 0, repeatDelay: c = 0, repeatType: m, velocity: d = 0 } = s;
    let { keyframes: p } = s;
    const b = r || ys;
    b !== ys && typeof p[0] != "number" && (this.mixKeyframes = Ts(Vx, kg(p[0], p[1])), p = [0, 100]);
    const h = b({ ...s, keyframes: p });
    m === "mirror" && (this.mirroredGenerator = b({
      ...s,
      keyframes: [...p].reverse(),
      velocity: -d
    })), h.calculatedDuration === null && (h.calculatedDuration = ef(h));
    const { calculatedDuration: v } = h;
    this.calculatedDuration = v, this.resolvedDuration = v + c, this.totalDuration = this.resolvedDuration * (o + 1) - c, this.generator = h;
  }
  updateTime(s) {
    const r = Math.round(s - this.startTime) * this.playbackSpeed;
    this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = r;
  }
  tick(s, r = !1) {
    const { generator: o, totalDuration: c, mixKeyframes: m, mirroredGenerator: d, resolvedDuration: p, calculatedDuration: b } = this;
    if (this.startTime === null)
      return o.next(0);
    const { delay: h = 0, keyframes: v, repeat: x, repeatType: S, repeatDelay: C, type: A, onUpdate: j, finalKeyframe: U } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, s) : this.speed < 0 && (this.startTime = Math.min(s - c / this.speed, this.startTime)), r ? this.currentTime = s : this.updateTime(s);
    const L = this.currentTime - h * (this.playbackSpeed >= 0 ? 1 : -1), X = this.playbackSpeed >= 0 ? L < 0 : L > c;
    this.currentTime = Math.max(L, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = c);
    let G = this.currentTime, q = o;
    if (x) {
      const H = Math.min(this.currentTime, c) / p;
      let $ = Math.floor(H), Q = H % 1;
      !Q && H >= 1 && (Q = 1), Q === 1 && $--, $ = Math.min($, x + 1), !!($ % 2) && (S === "reverse" ? (Q = 1 - Q, C && (Q -= C / p)) : S === "mirror" && (q = d)), G = en(0, 1, Q) * p;
    }
    let F;
    X ? (this.delayState.value = v[0], F = this.delayState) : F = q.next(G), m && !X && (F.value = m(F.value));
    let { done: ie } = F;
    !X && b !== null && (ie = this.playbackSpeed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
    const R = this.holdTime === null && (this.state === "finished" || this.state === "running" && ie);
    return R && A !== vc && (F.value = xo(v, this.options, U, this.speed)), j && j(F.value), R && this.finish(), F;
  }
  /**
   * Allows the returned animation to be awaited or promise-chained. Currently
   * resolves when the animation finishes at all but in a future update could/should
   * reject if its cancels.
   */
  then(s, r) {
    return this.finished.then(s, r);
  }
  get duration() {
    return /* @__PURE__ */ Ut(this.calculatedDuration);
  }
  get iterationDuration() {
    const { delay: s = 0 } = this.options || {};
    return this.duration + /* @__PURE__ */ Ut(s);
  }
  get time() {
    return /* @__PURE__ */ Ut(this.currentTime);
  }
  set time(s) {
    s = /* @__PURE__ */ vt(s), this.currentTime = s, this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = s : this.driver && (this.startTime = this.driver.now() - s / this.playbackSpeed), this.driver ? this.driver.start(!1) : (this.startTime = 0, this.state = "paused", this.holdTime = s, this.tick(s));
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
    const r = this.generator.next(s).value;
    return Mg((o) => this.generator.next(o).value, s, r);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(s) {
    const r = this.playbackSpeed !== s;
    r && this.driver && this.updateTime(ut.now()), this.playbackSpeed = s, r && this.driver && (this.time = /* @__PURE__ */ Ut(this.currentTime));
  }
  play() {
    var c, m;
    if (this.isStopped)
      return;
    const { driver: s = cx, startTime: r } = this.options;
    this.driver || (this.driver = s((d) => this.tick(d))), (m = (c = this.options).onPlay) == null || m.call(c);
    const o = this.driver.now();
    this.state === "finished" ? (this.updateFinished(), this.startTime = o) : this.holdTime !== null ? this.startTime = o - this.holdTime : this.startTime || (this.startTime = r ?? o), this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start();
  }
  pause() {
    this.state = "paused", this.updateTime(ut.now()), this.holdTime = this.currentTime;
  }
  complete() {
    this.state !== "running" && this.play(), this.state = "finished", this.holdTime = null;
  }
  finish() {
    var s, r;
    this.notifyFinished(), this.teardown(), this.state = "finished", (r = (s = this.options).onComplete) == null || r.call(s);
  }
  cancel() {
    var s, r;
    this.holdTime = null, this.startTime = 0, this.tick(0), this.teardown(), (r = (s = this.options).onCancel) == null || r.call(s);
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
    var r;
    return this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear", this.initAnimation()), (r = this.driver) == null || r.stop(), s.observe(this);
  }
}
function Bx(i) {
  for (let s = 1; s < i.length; s++)
    i[s] ?? (i[s] = i[s - 1]);
}
const xi = (i) => i * 180 / Math.PI, bc = (i) => {
  const s = xi(Math.atan2(i[1], i[0]));
  return xc(s);
}, Ax = {
  x: 4,
  y: 5,
  translateX: 4,
  translateY: 5,
  scaleX: 0,
  scaleY: 3,
  scale: (i) => (Math.abs(i[0]) + Math.abs(i[3])) / 2,
  rotate: bc,
  rotateZ: bc,
  skewX: (i) => xi(Math.atan(i[1])),
  skewY: (i) => xi(Math.atan(i[2])),
  skew: (i) => (Math.abs(i[1]) + Math.abs(i[2])) / 2
}, xc = (i) => (i = i % 360, i < 0 && (i += 360), i), Lh = bc, Hh = (i) => Math.sqrt(i[0] * i[0] + i[1] * i[1]), qh = (i) => Math.sqrt(i[4] * i[4] + i[5] * i[5]), kx = {
  x: 12,
  y: 13,
  z: 14,
  translateX: 12,
  translateY: 13,
  translateZ: 14,
  scaleX: Hh,
  scaleY: qh,
  scale: (i) => (Hh(i) + qh(i)) / 2,
  rotateX: (i) => xc(xi(Math.atan2(i[6], i[5]))),
  rotateY: (i) => xc(xi(Math.atan2(-i[2], i[0]))),
  rotateZ: Lh,
  rotate: Lh,
  skewX: (i) => xi(Math.atan(i[4])),
  skewY: (i) => xi(Math.atan(i[1])),
  skew: (i) => (Math.abs(i[1]) + Math.abs(i[4])) / 2
};
function Sc(i) {
  return i.includes("scale") ? 1 : 0;
}
function Nc(i, s) {
  if (!i || i === "none")
    return Sc(s);
  const r = i.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let o, c;
  if (r)
    o = kx, c = r;
  else {
    const p = i.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    o = Ax, c = p;
  }
  if (!c)
    return Sc(s);
  const m = o[s], d = c[1].split(",").map(Mx);
  return typeof m == "function" ? m(d) : d[m];
}
const wx = (i, s) => {
  const { transform: r = "none" } = getComputedStyle(i);
  return Nc(r, s);
};
function Mx(i) {
  return parseFloat(i.trim());
}
const ga = [
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
], ya = /* @__PURE__ */ new Set([...ga, "pathRotation"]), Gh = (i) => i === ha || i === I, Px = /* @__PURE__ */ new Set(["x", "y", "z"]), jx = ga.filter((i) => !Px.has(i));
function zx(i) {
  const s = [];
  return jx.forEach((r) => {
    const o = i.getValue(r);
    o !== void 0 && (s.push([r, o.get()]), o.set(r.startsWith("scale") ? 1 : 0));
  }), s;
}
const Zn = {
  // Dimensions
  width: ({ x: i }, { paddingLeft: s = "0", paddingRight: r = "0", boxSizing: o }) => {
    const c = i.max - i.min;
    return o === "border-box" ? c : c - parseFloat(s) - parseFloat(r);
  },
  height: ({ y: i }, { paddingTop: s = "0", paddingBottom: r = "0", boxSizing: o }) => {
    const c = i.max - i.min;
    return o === "border-box" ? c : c - parseFloat(s) - parseFloat(r);
  },
  top: (i, { top: s }) => parseFloat(s),
  left: (i, { left: s }) => parseFloat(s),
  bottom: ({ y: i }, { top: s }) => parseFloat(s) + (i.max - i.min),
  right: ({ x: i }, { left: s }) => parseFloat(s) + (i.max - i.min),
  // Transform
  x: (i, { transform: s }) => Nc(s, "x"),
  y: (i, { transform: s }) => Nc(s, "y")
};
Zn.translateX = Zn.x;
Zn.translateY = Zn.y;
const Si = /* @__PURE__ */ new Set();
let Dc = !1, Ec = !1, Tc = !1;
function jg() {
  if (Ec) {
    const i = Array.from(Si).filter((o) => o.needsMeasurement), s = new Set(i.map((o) => o.element)), r = /* @__PURE__ */ new Map();
    s.forEach((o) => {
      const c = zx(o);
      c.length && (r.set(o, c), o.render());
    }), i.forEach((o) => o.measureInitialState()), s.forEach((o) => {
      o.render();
      const c = r.get(o);
      c && c.forEach(([m, d]) => {
        var p;
        (p = o.getValue(m)) == null || p.set(d);
      });
    }), i.forEach((o) => o.measureEndState()), i.forEach((o) => {
      o.suspendedScrollY !== void 0 && window.scrollTo(0, o.suspendedScrollY);
    });
  }
  Ec = !1, Dc = !1, Si.forEach((i) => i.complete(Tc)), Si.clear();
}
function zg() {
  Si.forEach((i) => {
    i.readKeyframes(), i.needsMeasurement && (Ec = !0);
  });
}
function Rx() {
  Tc = !0, zg(), jg(), Tc = !1;
}
class nf {
  constructor(s, r, o, c, m, d = !1) {
    this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...s], this.onComplete = r, this.name = o, this.motionValue = c, this.element = m, this.isAsync = d;
  }
  scheduleResolve() {
    this.state = "scheduled", this.isAsync ? (Si.add(this), Dc || (Dc = !0, we.read(zg), we.resolveKeyframes(jg))) : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const { unresolvedKeyframes: s, name: r, element: o, motionValue: c } = this;
    if (s[0] === null) {
      const m = c == null ? void 0 : c.get(), d = s[s.length - 1];
      if (m !== void 0)
        s[0] = m;
      else if (o && r) {
        const p = o.readValue(r, d);
        p != null && (s[0] = p);
      }
      s[0] === void 0 && (s[0] = d), c && m === void 0 && c.set(s[0]);
    }
    Bx(s);
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
    this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, s), Si.delete(this);
  }
  cancel() {
    this.state === "scheduled" && (Si.delete(this), this.state = "pending");
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const Ox = (i) => i.startsWith("--");
function Rg(i, s, r) {
  Ox(s) ? i.style.setProperty(s, r) : i.style[s] = r;
}
const _x = {};
function Og(i, s) {
  const r = /* @__PURE__ */ cg(i);
  return () => _x[s] ?? r();
}
const Ux = /* @__PURE__ */ Og(() => window.ScrollTimeline !== void 0, "scrollTimeline"), _g = /* @__PURE__ */ Og(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing"), ps = ([i, s, r, o]) => `cubic-bezier(${i}, ${s}, ${r}, ${o})`, Yh = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ ps([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ ps([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ ps([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ ps([0.33, 1.53, 0.69, 0.99])
};
function Ug(i, s) {
  if (i)
    return typeof i == "function" ? _g() ? wg(i, s) : "ease-out" : /* @__PURE__ */ Sg(i) ? ps(i) : Array.isArray(i) ? i.map((r) => Ug(r, s) || Yh.easeOut) : Yh[i];
}
function Lx(i, s, r, { delay: o = 0, duration: c = 300, repeat: m = 0, repeatType: d = "loop", ease: p = "easeOut", times: b } = {}, h = void 0) {
  const v = {
    [s]: r
  };
  b && (v.offset = b);
  const x = Ug(p, c);
  Array.isArray(x) && (v.easing = x);
  const S = {
    delay: o,
    duration: c,
    easing: Array.isArray(x) ? "linear" : x,
    fill: "both",
    iterations: m + 1,
    direction: d === "reverse" ? "alternate" : "normal"
  };
  return h && (S.pseudoElement = h), i.animate(v, S);
}
function Lg(i) {
  return typeof i == "function" && "applyToOptions" in i;
}
function Hx({ type: i, ...s }) {
  return Lg(i) && _g() ? i.applyToOptions(s) : (s.duration ?? (s.duration = 300), s.ease ?? (s.ease = "easeOut"), s);
}
class Hg extends tf {
  constructor(s) {
    if (super(), this.finishedTime = null, this.isStopped = !1, this.manualStartTime = null, !s)
      return;
    const { element: r, name: o, keyframes: c, pseudoElement: m, allowFlatten: d = !1, finalKeyframe: p, onComplete: b } = s;
    this.isPseudoElement = !!m, this.allowFlatten = d, this.options = s, Di(typeof s.type != "string", `Mini animate() doesn't support "type" as a string.`, "mini-spring");
    const h = Hx(s);
    this.animation = Lx(r, o, c, h, m), h.autoplay === !1 && this.animation.pause(), this.animation.onfinish = () => {
      if (this.finishedTime = this.time, !m) {
        const v = xo(c, this.options, p, this.speed);
        this.updateMotionValue && this.updateMotionValue(v), Rg(r, o, v), this.animation.cancel();
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
    var s, r;
    (r = (s = this.animation).finish) == null || r.call(s);
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
    var r, o, c;
    const s = (r = this.options) == null ? void 0 : r.element;
    !this.isPseudoElement && (s != null && s.isConnected) && ((c = (o = this.animation).commitStyles) == null || c.call(o));
  }
  get duration() {
    var r, o;
    const s = ((o = (r = this.animation.effect) == null ? void 0 : r.getComputedTiming) == null ? void 0 : o.call(r).duration) || 0;
    return /* @__PURE__ */ Ut(Number(s));
  }
  get iterationDuration() {
    const { delay: s = 0 } = this.options || {};
    return this.duration + /* @__PURE__ */ Ut(s);
  }
  get time() {
    return /* @__PURE__ */ Ut(Number(this.animation.currentTime) || 0);
  }
  set time(s) {
    const r = this.finishedTime !== null;
    this.manualStartTime = null, this.finishedTime = null, this.animation.currentTime = /* @__PURE__ */ vt(s), r && this.animation.pause();
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
  attachTimeline({ timeline: s, rangeStart: r, rangeEnd: o, observe: c }) {
    var m;
    return this.allowFlatten && ((m = this.animation.effect) == null || m.updateTiming({ easing: "linear" })), this.animation.onfinish = null, s && Ux() ? (this.animation.timeline = s, r && (this.animation.rangeStart = r), o && (this.animation.rangeEnd = o), Lt) : c(this);
  }
}
const qg = {
  anticipate: yg,
  backInOut: gg,
  circInOut: bg
};
function qx(i) {
  return i in qg;
}
function Gx(i) {
  typeof i.ease == "string" && qx(i.ease) && (i.ease = qg[i.ease]);
}
const ec = 10;
class Yx extends Hg {
  constructor(s) {
    Gx(s), Pg(s), super(s), s.startTime !== void 0 && s.autoplay !== !1 && (this.startTime = s.startTime), this.options = s;
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
    const { motionValue: r, onUpdate: o, onComplete: c, element: m, ...d } = this.options;
    if (!r)
      return;
    if (s !== void 0) {
      r.set(s);
      return;
    }
    const p = new mo({
      ...d,
      autoplay: !1
    }), b = Math.max(ec, ut.now() - this.startTime), h = en(0, ec, b - ec), v = p.sample(b).value, { name: x } = this.options;
    m && x && Rg(m, x, v), r.setWithVelocity(p.sample(Math.max(0, b - h)).value, v, h), p.stop();
  }
}
const Xh = (i, s) => s === "zIndex" ? !1 : !!(typeof i == "number" || Array.isArray(i) || typeof i == "string" && // It's animatable if we have a string
(Kt.test(i) || i === "0") && // And it contains numbers and/or colors
!i.startsWith("url("));
function Xx(i) {
  const s = i[0];
  if (i.length === 1)
    return !0;
  for (let r = 0; r < i.length; r++)
    if (i[r] !== s)
      return !0;
}
function Kx(i, s, r, o) {
  const c = i[0];
  if (c === null)
    return !1;
  if (s === "display" || s === "visibility")
    return !0;
  const m = i[i.length - 1], d = Xh(c, s), p = Xh(m, s);
  return Es(d === p, `You are trying to animate ${s} from "${c}" to "${m}". "${d ? m : c}" is not an animatable value.`, "value-not-animatable"), !d || !p ? !1 : Xx(i) || (r === "spring" || Lg(r)) && o;
}
function Cc(i) {
  i.duration = 0, i.type = "keyframes";
}
const Gg = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform"
  // TODO: Can be accelerated but currently disabled until https://issues.chromium.org/issues/41491098 is resolved
  // or until we implement support for linear() easing.
  // "background-color"
]), Qx = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
function Zx(i) {
  for (let s = 0; s < i.length; s++)
    if (typeof i[s] == "string" && Qx.test(i[s]))
      return !0;
  return !1;
}
const Fx = /* @__PURE__ */ new Set([
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
]), Jx = /* @__PURE__ */ cg(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function $x(i) {
  var x;
  const { motionValue: s, name: r, repeatDelay: o, repeatType: c, damping: m, type: d, keyframes: p } = i;
  if (!(((x = s == null ? void 0 : s.owner) == null ? void 0 : x.current) instanceof HTMLElement))
    return !1;
  const { onUpdate: h, transformTemplate: v } = s.owner.getProps();
  return Jx() && r && /**
   * Force WAAPI for color properties with browser-only color formats
   * (oklch, oklab, lab, lch, etc.) that the JS animation path can't parse.
   */
  (Gg.has(r) || Fx.has(r) && Zx(p)) && (r !== "transform" || !v) && /**
   * If we're outputting values to onUpdate then we can't use WAAPI as there's
   * no way to read the value from WAAPI every frame.
   */
  !h && !o && c !== "mirror" && m !== 0 && d !== "inertia";
}
const Wx = 40;
class Ix extends tf {
  constructor({ autoplay: s = !0, delay: r = 0, type: o = "keyframes", repeat: c = 0, repeatDelay: m = 0, repeatType: d = "loop", keyframes: p, name: b, motionValue: h, element: v, ...x }) {
    var A;
    super(), this.stop = () => {
      var j, U;
      this._animation && (this._animation.stop(), (j = this.stopTimeline) == null || j.call(this)), (U = this.keyframeResolver) == null || U.cancel();
    }, this.createdAt = ut.now();
    const S = {
      autoplay: s,
      delay: r,
      type: o,
      repeat: c,
      repeatDelay: m,
      repeatType: d,
      name: b,
      motionValue: h,
      element: v,
      ...x
    }, C = (v == null ? void 0 : v.KeyframeResolver) || nf;
    this.keyframeResolver = new C(p, (j, U, L) => this.onKeyframesResolved(j, U, S, !L), b, h, v), (A = this.keyframeResolver) == null || A.scheduleResolve();
  }
  onKeyframesResolved(s, r, o, c) {
    var L, X;
    this.keyframeResolver = void 0;
    const { name: m, type: d, velocity: p, delay: b, isHandoff: h, onUpdate: v } = o;
    this.resolvedAt = ut.now();
    let x = !0;
    Kx(s, m, d, p) || (x = !1, (Fn.instantAnimations || !b) && (v == null || v(xo(s, o, r))), s[0] = s[s.length - 1], Cc(o), o.repeat = 0);
    const C = {
      startTime: c ? this.resolvedAt ? this.resolvedAt - this.createdAt > Wx ? this.resolvedAt : this.createdAt : this.createdAt : void 0,
      finalKeyframe: r,
      ...o,
      keyframes: s
    }, A = x && !h && $x(C), j = (X = (L = C.motionValue) == null ? void 0 : L.owner) == null ? void 0 : X.current;
    let U;
    if (A)
      try {
        U = new Yx({
          ...C,
          element: j
        });
      } catch {
        U = new mo(C);
      }
    else
      U = new mo(C);
    U.finished.then(() => {
      this.notifyFinished();
    }).catch(Lt), this.pendingTimeline && (this.stopTimeline = U.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = U;
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(s, r) {
    return this.finished.finally(s).then(() => {
    });
  }
  get animation() {
    var s;
    return this._animation || ((s = this.keyframeResolver) == null || s.resume(), Rx()), this._animation;
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
function Yg(i, s, r, o = 0, c = 1) {
  const m = Array.from(i).sort((h, v) => h.sortNodePosition(v)).indexOf(s), d = i.size, p = (d - 1) * o;
  return typeof r == "function" ? r(m, d) : c === 1 ? m * o : p - m * o;
}
const Kh = 30, eS = (i) => !isNaN(parseFloat(i));
class tS {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   */
  constructor(s, r = {}) {
    this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (o) => {
      var m;
      const c = ut.now();
      if (this.updatedAt !== c && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(o), this.current !== this.prev && ((m = this.events.change) == null || m.notify(this.current), this.dependents))
        for (const d of this.dependents)
          d.dirty();
    }, this.hasAnimated = !1, this.setCurrent(s), this.owner = r.owner;
  }
  setCurrent(s) {
    this.current = s, this.updatedAt = ut.now(), this.canTrackVelocity === null && s !== void 0 && (this.canTrackVelocity = eS(this.current));
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
  on(s, r) {
    this.events[s] || (this.events[s] = new Qc());
    const o = this.events[s].add(r);
    return s === "change" ? () => {
      o(), we.read(() => {
        this.events.change.getSize() || this.stop();
      });
    } : o;
  }
  clearListeners() {
    for (const s in this.events)
      this.events[s].clear();
  }
  /**
   * Attaches a passive effect to the `MotionValue`.
   */
  attach(s, r) {
    this.passiveEffect = s, this.stopPassiveEffect = r;
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
  setWithVelocity(s, r, o) {
    this.set(r), this.prev = void 0, this.prevFrameValue = s, this.prevUpdatedAt = this.updatedAt - o;
  }
  /**
   * Set the state of the `MotionValue`, stopping any active animations,
   * effects, and resets velocity to `0`.
   */
  jump(s, r = !0) {
    this.updateAndNotify(s), this.prev = s, this.prevUpdatedAt = this.prevFrameValue = void 0, r && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
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
    const s = ut.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || s - this.updatedAt > Kh)
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
  start(s) {
    return this.stop(), new Promise((r) => {
      this.hasAnimated = !0, this.animation = s(r), this.events.animationStart && this.events.animationStart.notify();
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
    var s, r;
    (s = this.dependents) == null || s.clear(), (r = this.events.destroy) == null || r.notify(), this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function pa(i, s) {
  return new tS(i, s);
}
function Xg(i, s) {
  if (i != null && i.inherit && s) {
    const { inherit: r, ...o } = i;
    return { ...s, ...o };
  }
  return i;
}
function af(i, s) {
  const r = (i == null ? void 0 : i[s]) ?? (i == null ? void 0 : i.default) ?? i;
  return r !== i ? Xg(r, i) : r;
}
const nS = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, iS = (i) => ({
  type: "spring",
  stiffness: 550,
  damping: i === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), aS = {
  type: "keyframes",
  duration: 0.8
}, sS = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, lS = (i, { keyframes: s }) => s.length > 2 ? aS : ya.has(i) ? i.startsWith("scale") ? iS(s[1]) : nS : sS, oS = /* @__PURE__ */ new Set([
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
function rS(i) {
  for (const s in i)
    if (!oS.has(s))
      return !0;
  return !1;
}
const sf = (i, s, r, o = {}, c, m) => (d) => {
  const p = af(o, i) || {}, b = p.delay || o.delay || 0;
  let { elapsed: h = 0 } = o;
  h = h - /* @__PURE__ */ vt(b);
  const v = {
    keyframes: Array.isArray(r) ? r : [null, r],
    ease: "easeOut",
    velocity: s.getVelocity(),
    ...p,
    delay: -h,
    onUpdate: (S) => {
      s.set(S), p.onUpdate && p.onUpdate(S);
    },
    onComplete: () => {
      d(), p.onComplete && p.onComplete();
    },
    name: i,
    motionValue: s,
    element: m ? void 0 : c
  };
  rS(p) || Object.assign(v, lS(i, v)), v.duration && (v.duration = /* @__PURE__ */ vt(v.duration)), v.repeatDelay && (v.repeatDelay = /* @__PURE__ */ vt(v.repeatDelay)), v.from !== void 0 && (v.keyframes[0] = v.from);
  let x = !1;
  if ((v.type === !1 || v.duration === 0 && !v.repeatDelay) && (Cc(v), v.delay === 0 && (x = !0)), (Fn.instantAnimations || Fn.skipAnimations || c != null && c.shouldSkipAnimations || p.skipAnimations) && (x = !0, Cc(v), v.delay = 0), v.allowFlatten = !p.type && !p.ease, x && !m && s.get() !== void 0) {
    const S = xo(v.keyframes, p);
    if (S !== void 0) {
      we.update(() => {
        v.onUpdate(S), v.onComplete();
      });
      return;
    }
  }
  return p.isSync ? new mo(v) : new Ix(v);
}, uS = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function cS(i) {
  const s = uS.exec(i);
  if (!s)
    return [,];
  const [, r, o, c] = s;
  return [`--${r ?? o}`, c];
}
const fS = 4;
function Kg(i, s, r = 1) {
  Di(r <= fS, `Max CSS variable fallback depth detected in property "${i}". This may indicate a circular fallback dependency.`, "max-css-var-depth");
  const [o, c] = cS(i);
  if (!o)
    return;
  const m = window.getComputedStyle(s).getPropertyValue(o);
  if (m) {
    const d = m.trim();
    return og(d) ? parseFloat(d) : d;
  }
  return Jc(c) ? Kg(c, s, r + 1) : c;
}
function Qh(i) {
  const s = [{}, {}];
  return i == null || i.values.forEach((r, o) => {
    s[0][o] = r.get(), s[1][o] = r.getVelocity();
  }), s;
}
function lf(i, s, r, o) {
  if (typeof s == "function") {
    const [c, m] = Qh(o);
    s = s(r !== void 0 ? r : i.custom, c, m);
  }
  if (typeof s == "string" && (s = i.variants && i.variants[s]), typeof s == "function") {
    const [c, m] = Qh(o);
    s = s(r !== void 0 ? r : i.custom, c, m);
  }
  return s;
}
function Ni(i, s, r) {
  const o = i.getProps();
  return lf(o, s, r !== void 0 ? r : o.custom, i);
}
const Qg = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...ga
]), Vc = (i) => Array.isArray(i);
function dS(i, s, r) {
  i.hasValue(s) ? i.getValue(s).set(r) : i.addValue(s, pa(r));
}
function mS(i) {
  return Vc(i) ? i[i.length - 1] || 0 : i;
}
function pS(i, s) {
  const r = Ni(i, s);
  let { transitionEnd: o = {}, transition: c = {}, ...m } = r || {};
  m = { ...m, ...o };
  for (const d in m) {
    const p = mS(m[d]);
    dS(i, d, p);
  }
}
const st = (i) => !!(i && i.getVelocity);
function hS(i) {
  return !!(st(i) && i.add);
}
function Bc(i, s) {
  const r = i.getValue("willChange");
  if (hS(r))
    return r.add(s);
  if (!r && Fn.WillChange) {
    const o = new Fn.WillChange("auto");
    i.addValue("willChange", o), o.add(s);
  }
}
function of(i) {
  return i.replace(/([A-Z])/g, (s) => `-${s.toLowerCase()}`);
}
const gS = "framerAppearId", Zg = "data-" + of(gS);
function Fg(i) {
  return i.props[Zg];
}
function yS({ protectedKeys: i, needsAnimating: s }, r) {
  const o = i.hasOwnProperty(r) && s[r] !== !0;
  return s[r] = !1, o;
}
function Jg(i, s, { delay: r = 0, transitionOverride: o, type: c } = {}) {
  let { transition: m, transitionEnd: d, ...p } = s;
  const b = i.getDefaultTransition();
  m = m ? Xg(m, b) : b;
  const h = m == null ? void 0 : m.reduceMotion, v = m == null ? void 0 : m.skipAnimations;
  o && (m = o);
  const x = [], S = c && i.animationState && i.animationState.getState()[c], C = m == null ? void 0 : m.path;
  C && C.animateVisualElement(i, p, m, r, x);
  for (const A in p) {
    const j = i.getValue(A, i.latestValues[A] ?? null), U = p[A];
    if (U === void 0 || S && yS(S, A))
      continue;
    const L = {
      delay: r,
      ...af(m || {}, A)
    };
    v && (L.skipAnimations = !0);
    const X = j.get();
    if (X !== void 0 && !j.isAnimating() && !Array.isArray(U) && U === X && !L.velocity) {
      we.update(() => j.set(U));
      continue;
    }
    let G = !1;
    if (window.MotionHandoffAnimation) {
      const ie = Fg(i);
      if (ie) {
        const R = window.MotionHandoffAnimation(ie, A, we);
        R !== null && (L.startTime = R, G = !0);
      }
    }
    Bc(i, A);
    const q = h ?? i.shouldReduceMotion;
    j.start(sf(A, j, U, q && Qg.has(A) ? { type: !1 } : L, i, G));
    const F = j.animation;
    F && x.push(F);
  }
  if (d) {
    const A = () => we.update(() => {
      d && pS(i, d);
    });
    x.length ? Promise.all(x).then(A) : A();
  }
  return x;
}
function Ac(i, s, r = {}) {
  var b;
  const o = Ni(i, s, r.type === "exit" ? (b = i.presenceContext) == null ? void 0 : b.custom : void 0);
  let { transition: c = i.getDefaultTransition() || {} } = o || {};
  r.transitionOverride && (c = r.transitionOverride);
  const m = o ? () => Promise.all(Jg(i, o, r)) : () => Promise.resolve(), d = i.variantChildren && i.variantChildren.size ? (h = 0) => {
    const { delayChildren: v = 0, staggerChildren: x, staggerDirection: S } = c;
    return vS(i, s, h, v, x, S, r);
  } : () => Promise.resolve(), { when: p } = c;
  if (p) {
    const [h, v] = p === "beforeChildren" ? [m, d] : [d, m];
    return h().then(() => v());
  } else
    return Promise.all([m(), d(r.delay)]);
}
function vS(i, s, r = 0, o = 0, c = 0, m = 1, d) {
  const p = [];
  for (const b of i.variantChildren)
    b.notify("AnimationStart", s), p.push(Ac(b, s, {
      ...d,
      delay: r + (typeof o == "function" ? 0 : o) + Yg(i.variantChildren, b, o, c, m)
    }).then(() => b.notify("AnimationComplete", s)));
  return Promise.all(p);
}
function bS(i, s, r = {}) {
  i.notify("AnimationStart", s);
  let o;
  if (Array.isArray(s)) {
    const c = s.map((m) => Ac(i, m, r));
    o = Promise.all(c);
  } else if (typeof s == "string")
    o = Ac(i, s, r);
  else {
    const c = typeof s == "function" ? Ni(i, s, r.custom) : s;
    o = Promise.all(Jg(i, c, r));
  }
  return o.then(() => {
    i.notify("AnimationComplete", s);
  });
}
const xS = {
  test: (i) => i === "auto",
  parse: (i) => i
}, $g = (i) => (s) => s.test(i), Wg = [ha, I, It, xn, X1, Y1, xS], Zh = (i) => Wg.find($g(i));
function SS(i) {
  return typeof i == "number" ? i === 0 : i !== null ? i === "none" || i === "0" || ug(i) : !0;
}
const NS = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function DS(i) {
  const [s, r] = i.slice(0, -1).split("(");
  if (s === "drop-shadow")
    return i;
  const [o] = r.match($c) || [];
  if (!o)
    return i;
  const c = r.replace(o, "");
  let m = NS.has(s) ? 1 : 0;
  return o !== r && (m *= 100), s + "(" + m + c + ")";
}
const ES = /\b([a-z-]*)\(.*?\)/gu, kc = {
  ...Kt,
  getAnimatableNone: (i) => {
    const s = i.match(ES);
    return s ? s.map(DS).join(" ") : i;
  }
}, wc = {
  ...Kt,
  getAnimatableNone: (i) => {
    const s = Kt.parse(i);
    return Kt.createTransformer(i)(s.map((o) => typeof o == "number" ? 0 : typeof o == "object" ? { ...o, alpha: 1 } : o));
  }
}, Fh = {
  ...ha,
  transform: Math.round
}, TS = {
  rotate: xn,
  /**
   * Internal channel for `transition.path` orientToPath. Composed onto
   * `rotate` at the transform-build sites so the user's `rotate` is
   * never read or overwritten. Not part of `transformPropOrder`.
   */
  pathRotation: xn,
  rotateX: xn,
  rotateY: xn,
  rotateZ: xn,
  scale: Fl,
  scaleX: Fl,
  scaleY: Fl,
  scaleZ: Fl,
  skew: xn,
  skewX: xn,
  skewY: xn,
  distance: I,
  translateX: I,
  translateY: I,
  translateZ: I,
  x: I,
  y: I,
  z: I,
  perspective: I,
  transformPerspective: I,
  opacity: Ss,
  originX: zh,
  originY: zh,
  originZ: I
}, po = {
  // Border props
  borderWidth: I,
  borderTopWidth: I,
  borderRightWidth: I,
  borderBottomWidth: I,
  borderLeftWidth: I,
  borderRadius: I,
  borderTopLeftRadius: I,
  borderTopRightRadius: I,
  borderBottomRightRadius: I,
  borderBottomLeftRadius: I,
  // Positioning props
  width: I,
  maxWidth: I,
  height: I,
  maxHeight: I,
  top: I,
  right: I,
  bottom: I,
  left: I,
  inset: I,
  insetBlock: I,
  insetBlockStart: I,
  insetBlockEnd: I,
  insetInline: I,
  insetInlineStart: I,
  insetInlineEnd: I,
  // Spacing props
  padding: I,
  paddingTop: I,
  paddingRight: I,
  paddingBottom: I,
  paddingLeft: I,
  paddingBlock: I,
  paddingBlockStart: I,
  paddingBlockEnd: I,
  paddingInline: I,
  paddingInlineStart: I,
  paddingInlineEnd: I,
  margin: I,
  marginTop: I,
  marginRight: I,
  marginBottom: I,
  marginLeft: I,
  marginBlock: I,
  marginBlockStart: I,
  marginBlockEnd: I,
  marginInline: I,
  marginInlineStart: I,
  marginInlineEnd: I,
  // Typography
  fontSize: I,
  // Misc
  backgroundPositionX: I,
  backgroundPositionY: I,
  ...TS,
  zIndex: Fh,
  // SVG
  fillOpacity: Ss,
  strokeOpacity: Ss,
  numOctaves: Fh
}, CS = {
  ...po,
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
  filter: kc,
  WebkitFilter: kc,
  mask: wc,
  WebkitMask: wc
}, Ig = (i) => CS[i], VS = /* @__PURE__ */ new Set([kc, wc]);
function ey(i, s) {
  let r = Ig(i);
  return VS.has(r) || (r = Kt), r.getAnimatableNone ? r.getAnimatableNone(s) : void 0;
}
const BS = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function AS(i, s, r) {
  let o = 0, c;
  for (; o < i.length && !c; ) {
    const m = i[o];
    typeof m == "string" && !BS.has(m) && ma(m).values.length && (c = i[o]), o++;
  }
  if (c && r)
    for (const m of s)
      i[m] = ey(r, c);
}
class kS extends nf {
  constructor(s, r, o, c, m) {
    super(s, r, o, c, m, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: s, element: r, name: o } = this;
    if (!r || !r.current)
      return;
    super.readKeyframes();
    for (let v = 0; v < s.length; v++) {
      let x = s[v];
      if (typeof x == "string" && (x = x.trim(), Jc(x))) {
        const S = Kg(x, r.current);
        S !== void 0 && (s[v] = S), v === s.length - 1 && (this.finalKeyframe = x);
      }
    }
    if (this.resolveNoneKeyframes(), !Qg.has(o) || s.length !== 2)
      return;
    const [c, m] = s, d = Zh(c), p = Zh(m), b = jh(c), h = jh(m);
    if (b !== h && Zn[o]) {
      this.needsMeasurement = !0;
      return;
    }
    if (d !== p)
      if (Gh(d) && Gh(p))
        for (let v = 0; v < s.length; v++) {
          const x = s[v];
          typeof x == "string" && (s[v] = parseFloat(x));
        }
      else Zn[o] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: s, name: r } = this, o = [];
    for (let c = 0; c < s.length; c++)
      (s[c] === null || SS(s[c])) && o.push(c);
    o.length && AS(s, o, r);
  }
  measureInitialState() {
    const { element: s, unresolvedKeyframes: r, name: o } = this;
    if (!s || !s.current)
      return;
    o === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = Zn[o](s.measureViewportBox(), window.getComputedStyle(s.current)), r[0] = this.measuredOrigin;
    const c = r[r.length - 1];
    c !== void 0 && s.getValue(o, c).jump(c, !1);
  }
  measureEndState() {
    var p;
    const { element: s, name: r, unresolvedKeyframes: o } = this;
    if (!s || !s.current)
      return;
    const c = s.getValue(r);
    c && c.jump(this.measuredOrigin, !1);
    const m = o.length - 1, d = o[m];
    o[m] = Zn[r](s.measureViewportBox(), window.getComputedStyle(s.current)), d !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = d), (p = this.removedTransforms) != null && p.length && this.removedTransforms.forEach(([b, h]) => {
      s.getValue(b).set(h);
    }), this.resolveNoneKeyframes();
  }
}
function ty(i, s, r) {
  if (i == null)
    return [];
  if (i instanceof EventTarget)
    return [i];
  if (typeof i == "string") {
    let o = document;
    const c = (r == null ? void 0 : r[i]) ?? o.querySelectorAll(i);
    return c ? Array.from(c) : [];
  }
  return Array.from(i).filter((o) => o != null);
}
const Mc = (i, s) => s && typeof i == "number" ? s.transform(i) : i;
function to(i) {
  return rg(i) && "offsetHeight" in i && !("ownerSVGElement" in i);
}
const { schedule: rf } = /* @__PURE__ */ Ng(queueMicrotask, !1), Xt = {
  x: !1,
  y: !1
};
function ny() {
  return Xt.x || Xt.y;
}
function wS(i) {
  return i === "x" || i === "y" ? Xt[i] ? null : (Xt[i] = !0, () => {
    Xt[i] = !1;
  }) : Xt.x || Xt.y ? null : (Xt.x = Xt.y = !0, () => {
    Xt.x = Xt.y = !1;
  });
}
function iy(i, s) {
  const r = ty(i), o = new AbortController(), c = {
    passive: !0,
    ...s,
    signal: o.signal
  };
  return [r, c, () => o.abort()];
}
function MS(i) {
  return !(i.pointerType === "touch" || ny());
}
function PS(i, s, r = {}) {
  const [o, c, m] = iy(i, r);
  return o.forEach((d) => {
    let p = !1, b = !1, h;
    const v = () => {
      d.removeEventListener("pointerleave", A);
    }, x = (U) => {
      h && (h(U), h = void 0), v();
    }, S = (U) => {
      p = !1, window.removeEventListener("pointerup", S), window.removeEventListener("pointercancel", S), b && (b = !1, x(U));
    }, C = () => {
      p = !0, window.addEventListener("pointerup", S, c), window.addEventListener("pointercancel", S, c);
    }, A = (U) => {
      if (U.pointerType !== "touch") {
        if (p) {
          b = !0;
          return;
        }
        x(U);
      }
    }, j = (U) => {
      if (!MS(U))
        return;
      b = !1;
      const L = s(d, U);
      typeof L == "function" && (h = L, d.addEventListener("pointerleave", A, c));
    };
    d.addEventListener("pointerenter", j, c), d.addEventListener("pointerdown", C, c);
  }), m;
}
const ay = (i, s) => s ? i === s ? !0 : ay(i, s.parentElement) : !1, uf = (i) => i.pointerType === "mouse" ? typeof i.button != "number" || i.button <= 0 : i.isPrimary !== !1, jS = /* @__PURE__ */ new Set([
  "BUTTON",
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "A"
]);
function zS(i) {
  return jS.has(i.tagName) || i.isContentEditable === !0;
}
const RS = /* @__PURE__ */ new Set(["INPUT", "SELECT", "TEXTAREA"]);
function OS(i) {
  return RS.has(i.tagName) || i.isContentEditable === !0;
}
const no = /* @__PURE__ */ new WeakSet();
function Jh(i) {
  return (s) => {
    s.key === "Enter" && i(s);
  };
}
function tc(i, s) {
  i.dispatchEvent(new PointerEvent("pointer" + s, { isPrimary: !0, bubbles: !0 }));
}
const _S = (i, s) => {
  const r = i.currentTarget;
  if (!r)
    return;
  const o = Jh(() => {
    if (no.has(r))
      return;
    tc(r, "down");
    const c = Jh(() => {
      tc(r, "up");
    }), m = () => tc(r, "cancel");
    r.addEventListener("keyup", c, s), r.addEventListener("blur", m, s);
  });
  r.addEventListener("keydown", o, s), r.addEventListener("blur", () => r.removeEventListener("keydown", o), s);
};
function $h(i) {
  return uf(i) && !ny();
}
const Wh = /* @__PURE__ */ new WeakSet();
function US(i, s, r = {}) {
  const [o, c, m] = iy(i, r), d = (p) => {
    const b = p.currentTarget;
    if (!$h(p) || Wh.has(p))
      return;
    no.add(b), r.stopPropagation && Wh.add(p);
    const h = s(b, p), v = (C, A) => {
      window.removeEventListener("pointerup", x), window.removeEventListener("pointercancel", S), no.has(b) && no.delete(b), $h(C) && typeof h == "function" && h(C, { success: A });
    }, x = (C) => {
      v(C, b === window || b === document || r.useGlobalTarget || ay(b, C.target));
    }, S = (C) => {
      v(C, !1);
    };
    window.addEventListener("pointerup", x, c), window.addEventListener("pointercancel", S, c);
  };
  return o.forEach((p) => {
    (r.useGlobalTarget ? window : p).addEventListener("pointerdown", d, c), to(p) && (p.addEventListener("focus", (h) => _S(h, c)), !zS(p) && !p.hasAttribute("tabindex") && (p.tabIndex = 0));
  }), m;
}
function cf(i) {
  return rg(i) && "ownerSVGElement" in i;
}
const io = /* @__PURE__ */ new WeakMap();
let Qn;
const sy = (i, s, r) => (o, c) => c && c[0] ? c[0][i + "Size"] : cf(o) && "getBBox" in o ? o.getBBox()[s] : o[r], LS = /* @__PURE__ */ sy("inline", "width", "offsetWidth"), HS = /* @__PURE__ */ sy("block", "height", "offsetHeight");
function qS({ target: i, borderBoxSize: s }) {
  var r;
  (r = io.get(i)) == null || r.forEach((o) => {
    o(i, {
      get width() {
        return LS(i, s);
      },
      get height() {
        return HS(i, s);
      }
    });
  });
}
function GS(i) {
  i.forEach(qS);
}
function YS() {
  typeof ResizeObserver > "u" || (Qn = new ResizeObserver(GS));
}
function XS(i, s) {
  Qn || YS();
  const r = ty(i);
  return r.forEach((o) => {
    let c = io.get(o);
    c || (c = /* @__PURE__ */ new Set(), io.set(o, c)), c.add(s), Qn == null || Qn.observe(o);
  }), () => {
    r.forEach((o) => {
      const c = io.get(o);
      c == null || c.delete(s), c != null && c.size || Qn == null || Qn.unobserve(o);
    });
  };
}
const ao = /* @__PURE__ */ new Set();
let fa;
function KS() {
  fa = () => {
    const i = {
      get width() {
        return window.innerWidth;
      },
      get height() {
        return window.innerHeight;
      }
    };
    ao.forEach((s) => s(i));
  }, window.addEventListener("resize", fa);
}
function QS(i) {
  return ao.add(i), fa || KS(), () => {
    ao.delete(i), !ao.size && typeof fa == "function" && (window.removeEventListener("resize", fa), fa = void 0);
  };
}
function Ih(i, s) {
  return typeof i == "function" ? QS(i) : XS(i, s);
}
function ZS(i) {
  return cf(i) && i.tagName === "svg";
}
const FS = [...Wg, Ze, Kt], JS = (i) => FS.find($g(i)), e0 = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), da = () => ({
  x: e0(),
  y: e0()
}), t0 = () => ({ min: 0, max: 0 }), Je = () => ({
  x: t0(),
  y: t0()
}), $S = /* @__PURE__ */ new WeakMap();
function So(i) {
  return i !== null && typeof i == "object" && typeof i.start == "function";
}
function Ns(i) {
  return typeof i == "string" || Array.isArray(i);
}
const ff = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], df = ["initial", ...ff];
function No(i) {
  return So(i.animate) || df.some((s) => Ns(i[s]));
}
function ly(i) {
  return !!(No(i) || i.variants);
}
function WS(i, s, r) {
  for (const o in s) {
    const c = s[o], m = r[o];
    if (st(c))
      i.addValue(o, c);
    else if (st(m))
      i.addValue(o, pa(c, { owner: i }));
    else if (m !== c)
      if (i.hasValue(o)) {
        const d = i.getValue(o);
        d.liveStyle === !0 ? d.jump(c) : d.hasAnimated || d.set(c);
      } else {
        const d = i.getStaticValue(o);
        i.addValue(o, pa(d !== void 0 ? d : c, { owner: i }));
      }
  }
  for (const o in r)
    s[o] === void 0 && i.removeValue(o);
  return s;
}
const Pc = { current: null }, oy = { current: !1 }, IS = typeof window < "u";
function eN() {
  if (oy.current = !0, !!IS)
    if (window.matchMedia) {
      const i = window.matchMedia("(prefers-reduced-motion)"), s = () => Pc.current = i.matches;
      i.addEventListener("change", s), s();
    } else
      Pc.current = !1;
}
const n0 = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
let ho = {};
function ry(i) {
  ho = i;
}
function tN() {
  return ho;
}
class nN {
  /**
   * This method takes React props and returns found MotionValues. For example, HTML
   * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
   *
   * This isn't an abstract method as it needs calling in the constructor, but it is
   * intended to be one.
   */
  scrapeMotionValuesFromProps(s, r, o) {
    return {};
  }
  constructor({ parent: s, props: r, presenceContext: o, reducedMotionConfig: c, skipAnimations: m, blockInitialAnimation: d, visualState: p }, b = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.shouldSkipAnimations = !1, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = nf, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.hasBeenMounted = !1, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const C = ut.now();
      this.renderScheduledAt < C && (this.renderScheduledAt = C, we.render(this.render, !1, !0));
    };
    const { latestValues: h, renderState: v } = p;
    this.latestValues = h, this.baseTarget = { ...h }, this.initialValues = r.initial ? { ...h } : {}, this.renderState = v, this.parent = s, this.props = r, this.presenceContext = o, this.depth = s ? s.depth + 1 : 0, this.reducedMotionConfig = c, this.skipAnimationsConfig = m, this.options = b, this.blockInitialAnimation = !!d, this.isControllingVariants = No(r), this.isVariantNode = ly(r), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(s && s.current);
    const { willChange: x, ...S } = this.scrapeMotionValuesFromProps(r, {}, this);
    for (const C in S) {
      const A = S[C];
      h[C] !== void 0 && st(A) && A.set(h[C]);
    }
  }
  mount(s) {
    var r, o;
    if (this.hasBeenMounted)
      for (const c in this.initialValues)
        (r = this.values.get(c)) == null || r.jump(this.initialValues[c]), this.latestValues[c] = this.initialValues[c];
    this.current = s, $S.set(s, this), this.projection && !this.projection.instance && this.projection.mount(s), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((c, m) => this.bindToMotionValue(m, c)), this.reducedMotionConfig === "never" ? this.shouldReduceMotion = !1 : this.reducedMotionConfig === "always" ? this.shouldReduceMotion = !0 : (oy.current || eN(), this.shouldReduceMotion = Pc.current), this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1, (o = this.parent) == null || o.addChild(this), this.update(this.props, this.presenceContext), this.hasBeenMounted = !0;
  }
  unmount() {
    var s;
    this.projection && this.projection.unmount(), Jn(this.notifyUpdate), Jn(this.render), this.valueSubscriptions.forEach((r) => r()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), (s = this.parent) == null || s.removeChild(this);
    for (const r in this.events)
      this.events[r].clear();
    for (const r in this.features) {
      const o = this.features[r];
      o && (o.unmount(), o.isMounted = !1);
    }
    this.current = null;
  }
  addChild(s) {
    this.children.add(s), this.enteringChildren ?? (this.enteringChildren = /* @__PURE__ */ new Set()), this.enteringChildren.add(s);
  }
  removeChild(s) {
    this.children.delete(s), this.enteringChildren && this.enteringChildren.delete(s);
  }
  bindToMotionValue(s, r) {
    if (this.valueSubscriptions.has(s) && this.valueSubscriptions.get(s)(), r.accelerate && Gg.has(s) && this.current instanceof HTMLElement) {
      const { factory: d, keyframes: p, times: b, ease: h, duration: v } = r.accelerate, x = new Hg({
        element: this.current,
        name: s,
        keyframes: p,
        times: b,
        ease: h,
        duration: /* @__PURE__ */ vt(v)
      }), S = d(x);
      this.valueSubscriptions.set(s, () => {
        S(), x.cancel();
      });
      return;
    }
    const o = ya.has(s);
    o && this.onBindTransform && this.onBindTransform();
    const c = r.on("change", (d) => {
      this.latestValues[s] = d, this.props.onUpdate && we.preRender(this.notifyUpdate), o && this.projection && (this.projection.isTransformDirty = !0), this.scheduleRender();
    });
    let m;
    typeof window < "u" && window.MotionCheckAppearSync && (m = window.MotionCheckAppearSync(this, s, r)), this.valueSubscriptions.set(s, () => {
      c(), m && m();
    });
  }
  sortNodePosition(s) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== s.type ? 0 : this.sortInstanceNodePosition(this.current, s.current);
  }
  updateFeatures() {
    let s = "animation";
    for (s in ho) {
      const r = ho[s];
      if (!r)
        continue;
      const { isEnabled: o, Feature: c } = r;
      if (!this.features[s] && c && o(this.props) && (this.features[s] = new c(this)), this.features[s]) {
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
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Je();
  }
  getStaticValue(s) {
    return this.latestValues[s];
  }
  setStaticValue(s, r) {
    this.latestValues[s] = r;
  }
  /**
   * Update the provided props. Ensure any newly-added motion values are
   * added to our map, old ones removed, and listeners updated.
   */
  update(s, r) {
    (s.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = s, this.prevPresenceContext = this.presenceContext, this.presenceContext = r;
    for (let o = 0; o < n0.length; o++) {
      const c = n0[o];
      this.propEventSubscriptions[c] && (this.propEventSubscriptions[c](), delete this.propEventSubscriptions[c]);
      const m = "on" + c, d = s[m];
      d && (this.propEventSubscriptions[c] = this.on(c, d));
    }
    this.prevMotionValues = WS(this, this.scrapeMotionValuesFromProps(s, this.prevProps || {}, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
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
    const r = this.getClosestVariantNode();
    if (r)
      return r.variantChildren && r.variantChildren.add(s), () => r.variantChildren.delete(s);
  }
  /**
   * Add a motion value and bind it to this visual element.
   */
  addValue(s, r) {
    const o = this.values.get(s);
    r !== o && (o && this.removeValue(s), this.bindToMotionValue(s, r), this.values.set(s, r), this.latestValues[s] = r.get());
  }
  /**
   * Remove a motion value and unbind any active subscriptions.
   */
  removeValue(s) {
    this.values.delete(s);
    const r = this.valueSubscriptions.get(s);
    r && (r(), this.valueSubscriptions.delete(s)), delete this.latestValues[s], this.removeValueFromRenderState(s, this.renderState);
  }
  /**
   * Check whether we have a motion value for this key
   */
  hasValue(s) {
    return this.values.has(s);
  }
  getValue(s, r) {
    if (this.props.values && this.props.values[s])
      return this.props.values[s];
    let o = this.values.get(s);
    return o === void 0 && r !== void 0 && (o = pa(r === null ? void 0 : r, { owner: this }), this.addValue(s, o)), o;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(s, r) {
    let o = this.latestValues[s] !== void 0 || !this.current ? this.latestValues[s] : this.getBaseTargetFromProps(this.props, s) ?? this.readValueFromInstance(this.current, s, this.options);
    return o != null && (typeof o == "string" && (og(o) || ug(o)) ? o = parseFloat(o) : !JS(o) && Kt.test(r) && (o = ey(s, r)), this.setBaseTarget(s, st(o) ? o.get() : o)), st(o) ? o.get() : o;
  }
  /**
   * Set the base target to later animate back to. This is currently
   * only hydrated on creation and when we first read a value.
   */
  setBaseTarget(s, r) {
    this.baseTarget[s] = r;
  }
  /**
   * Find the base target for a value thats been removed from all animation
   * props.
   */
  getBaseTarget(s) {
    var m;
    const { initial: r } = this.props;
    let o;
    if (typeof r == "string" || typeof r == "object") {
      const d = lf(this.props, r, (m = this.presenceContext) == null ? void 0 : m.custom);
      d && (o = d[s]);
    }
    if (r && o !== void 0)
      return o;
    const c = this.getBaseTargetFromProps(this.props, s);
    return c !== void 0 && !st(c) ? c : this.initialValues[s] !== void 0 && o === void 0 ? void 0 : this.baseTarget[s];
  }
  on(s, r) {
    return this.events[s] || (this.events[s] = new Qc()), this.events[s].add(r);
  }
  notify(s, ...r) {
    this.events[s] && this.events[s].notify(...r);
  }
  scheduleRenderMicrotask() {
    rf.render(this.render);
  }
}
class uy extends nN {
  constructor() {
    super(...arguments), this.KeyframeResolver = kS;
  }
  sortInstanceNodePosition(s, r) {
    return s.compareDocumentPosition(r) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(s, r) {
    const o = s.style;
    return o ? o[r] : void 0;
  }
  removeValueFromRenderState(s, { vars: r, style: o }) {
    delete r[s], delete o[s];
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: s } = this.props;
    st(s) && (this.childSubscription = s.on("change", (r) => {
      this.current && (this.current.textContent = `${r}`);
    }));
  }
}
class $n {
  constructor(s) {
    this.isMounted = !1, this.node = s;
  }
  update() {
  }
}
function cy({ top: i, left: s, right: r, bottom: o }) {
  return {
    x: { min: s, max: r },
    y: { min: i, max: o }
  };
}
function iN({ x: i, y: s }) {
  return { top: s.min, right: i.max, bottom: s.max, left: i.min };
}
function aN(i, s) {
  if (!s)
    return i;
  const r = s({ x: i.left, y: i.top }), o = s({ x: i.right, y: i.bottom });
  return {
    top: r.y,
    left: r.x,
    bottom: o.y,
    right: o.x
  };
}
function nc(i) {
  return i === void 0 || i === 1;
}
function jc({ scale: i, scaleX: s, scaleY: r }) {
  return !nc(i) || !nc(s) || !nc(r);
}
function vi(i) {
  return jc(i) || fy(i) || i.z || i.rotate || i.rotateX || i.rotateY || i.skewX || i.skewY;
}
function fy(i) {
  return i0(i.x) || i0(i.y);
}
function i0(i) {
  return i && i !== "0%";
}
function go(i, s, r) {
  const o = i - r, c = s * o;
  return r + c;
}
function a0(i, s, r, o, c) {
  return c !== void 0 && (i = go(i, c, o)), go(i, r, o) + s;
}
function zc(i, s = 0, r = 1, o, c) {
  i.min = a0(i.min, s, r, o, c), i.max = a0(i.max, s, r, o, c);
}
function dy(i, { x: s, y: r }) {
  zc(i.x, s.translate, s.scale, s.originPoint), zc(i.y, r.translate, r.scale, r.originPoint);
}
const s0 = 0.999999999999, l0 = 1.0000000000001;
function sN(i, s, r, o = !1) {
  var p;
  const c = r.length;
  if (!c)
    return;
  s.x = s.y = 1;
  let m, d;
  for (let b = 0; b < c; b++) {
    m = r[b], d = m.projectionDelta;
    const { visualElement: h } = m.options;
    h && h.props.style && h.props.style.display === "contents" || (o && m.options.layoutScroll && m.scroll && m !== m.root && (Wt(i.x, -m.scroll.offset.x), Wt(i.y, -m.scroll.offset.y)), d && (s.x *= d.x.scale, s.y *= d.y.scale, dy(i, d)), o && vi(m.latestValues) && so(i, m.latestValues, (p = m.layout) == null ? void 0 : p.layoutBox));
  }
  s.x < l0 && s.x > s0 && (s.x = 1), s.y < l0 && s.y > s0 && (s.y = 1);
}
function Wt(i, s) {
  i.min += s, i.max += s;
}
function o0(i, s, r, o, c = 0.5) {
  const m = ke(i.min, i.max, c);
  zc(i, s, r, m, o);
}
function r0(i, s) {
  return typeof i == "string" ? parseFloat(i) / 100 * (s.max - s.min) : i;
}
function so(i, s, r) {
  const o = r ?? i;
  o0(i.x, r0(s.x, o.x), s.scaleX, s.scale, s.originX), o0(i.y, r0(s.y, o.y), s.scaleY, s.scale, s.originY);
}
function my(i, s) {
  return cy(aN(i.getBoundingClientRect(), s));
}
function lN(i, s, r) {
  const o = my(i, r), { scroll: c } = s;
  return c && (Wt(o.x, c.offset.x), Wt(o.y, c.offset.y)), o;
}
const oN = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, rN = ga.length;
function uN(i, s, r) {
  let o = "", c = !0;
  for (let d = 0; d < rN; d++) {
    const p = ga[d], b = i[p];
    if (b === void 0)
      continue;
    let h = !0;
    if (typeof b == "number")
      h = b === (p.startsWith("scale") ? 1 : 0);
    else {
      const v = parseFloat(b);
      h = p.startsWith("scale") ? v === 1 : v === 0;
    }
    if (!h || r) {
      const v = Mc(b, po[p]);
      if (!h) {
        c = !1;
        const x = oN[p] || p;
        o += `${x}(${v}) `;
      }
      r && (s[p] = v);
    }
  }
  const m = i.pathRotation;
  return m && (c = !1, o += `rotate(${Mc(m, po.pathRotation)}) `), o = o.trim(), r ? o = r(s, c ? "" : o) : c && (o = "none"), o;
}
function mf(i, s, r) {
  const { style: o, vars: c, transformOrigin: m } = i;
  let d = !1, p = !1;
  for (const b in s) {
    const h = s[b];
    if (ya.has(b)) {
      d = !0;
      continue;
    } else if (Eg(b)) {
      c[b] = h;
      continue;
    } else {
      const v = Mc(h, po[b]);
      b.startsWith("origin") ? (p = !0, m[b] = v) : o[b] = v;
    }
  }
  if (s.transform || (d || r ? o.transform = uN(s, i.transform, r) : o.transform && (o.transform = "none")), p) {
    const { originX: b = "50%", originY: h = "50%", originZ: v = 0 } = m;
    o.transformOrigin = `${b} ${h} ${v}`;
  }
}
function py(i, { style: s, vars: r }, o, c) {
  const m = i.style;
  let d;
  for (d in s)
    m[d] = s[d];
  c == null || c.applyProjectionStyles(m, o);
  for (d in r)
    m.setProperty(d, r[d]);
}
function u0(i, s) {
  return s.max === s.min ? 0 : i / (s.max - s.min) * 100;
}
const ms = {
  correct: (i, s) => {
    if (!s.target)
      return i;
    if (typeof i == "string")
      if (I.test(i))
        i = parseFloat(i);
      else
        return i;
    const r = u0(i, s.target.x), o = u0(i, s.target.y);
    return `${r}% ${o}%`;
  }
}, cN = {
  correct: (i, { treeScale: s, projectionDelta: r }) => {
    const o = i, c = Kt.parse(i);
    if (c.length > 5)
      return o;
    const m = Kt.createTransformer(i), d = typeof c[0] != "number" ? 1 : 0, p = r.x.scale * s.x, b = r.y.scale * s.y;
    c[0 + d] /= p, c[1 + d] /= b;
    const h = ke(p, b, 0.5);
    return typeof c[2 + d] == "number" && (c[2 + d] /= h), typeof c[3 + d] == "number" && (c[3 + d] /= h), m(c);
  }
}, Rc = {
  borderRadius: {
    ...ms,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: ms,
  borderTopRightRadius: ms,
  borderBottomLeftRadius: ms,
  borderBottomRightRadius: ms,
  boxShadow: cN
};
function hy(i, { layout: s, layoutId: r }) {
  return ya.has(i) || i.startsWith("origin") || (s || r !== void 0) && (!!Rc[i] || i === "opacity");
}
function pf(i, s, r) {
  var d;
  const o = i.style, c = s == null ? void 0 : s.style, m = {};
  if (!o)
    return m;
  for (const p in o)
    (st(o[p]) || c && st(c[p]) || hy(p, i) || ((d = r == null ? void 0 : r.getValue(p)) == null ? void 0 : d.liveStyle) !== void 0) && (m[p] = o[p]);
  return m;
}
function fN(i) {
  return window.getComputedStyle(i);
}
class dN extends uy {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = py;
  }
  readValueFromInstance(s, r) {
    var o;
    if (ya.has(r))
      return (o = this.projection) != null && o.isProjecting ? Sc(r) : wx(s, r);
    {
      const c = fN(s), m = (Eg(r) ? c.getPropertyValue(r) : c[r]) || 0;
      return typeof m == "string" ? m.trim() : m;
    }
  }
  measureInstanceViewportBox(s, { transformPagePoint: r }) {
    return my(s, r);
  }
  build(s, r, o) {
    mf(s, r, o.transformTemplate);
  }
  scrapeMotionValuesFromProps(s, r, o) {
    return pf(s, r, o);
  }
}
const mN = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, pN = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function hN(i, s, r = 1, o = 0, c = !0) {
  i.pathLength = 1;
  const m = c ? mN : pN;
  i[m.offset] = `${-o}`, i[m.array] = `${s} ${r}`;
}
const gN = [
  "offsetDistance",
  "offsetPath",
  "offsetRotate",
  "offsetAnchor"
];
function gy(i, {
  attrX: s,
  attrY: r,
  attrScale: o,
  pathLength: c,
  pathSpacing: m = 1,
  pathOffset: d = 0,
  // This is object creation, which we try to avoid per-frame.
  ...p
}, b, h, v) {
  if (mf(i, p, h), b) {
    i.style.viewBox && (i.attrs.viewBox = i.style.viewBox);
    return;
  }
  i.attrs = i.style, i.style = {};
  const { attrs: x, style: S } = i;
  x.transform && (S.transform = x.transform, delete x.transform), (S.transform || x.transformOrigin) && (S.transformOrigin = x.transformOrigin ?? "50% 50%", delete x.transformOrigin), S.transform && (S.transformBox = (v == null ? void 0 : v.transformBox) ?? "fill-box", delete x.transformBox);
  for (const C of gN)
    x[C] !== void 0 && (S[C] = x[C], delete x[C]);
  s !== void 0 && (x.x = s), r !== void 0 && (x.y = r), o !== void 0 && (x.scale = o), c !== void 0 && hN(x, c, m, d, !1);
}
const yy = /* @__PURE__ */ new Set([
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
]), vy = (i) => typeof i == "string" && i.toLowerCase() === "svg";
function yN(i, s, r, o) {
  py(i, s, void 0, o);
  for (const c in s.attrs)
    i.setAttribute(yy.has(c) ? c : of(c), s.attrs[c]);
}
function by(i, s, r) {
  const o = pf(i, s, r);
  for (const c in i)
    if (st(i[c]) || st(s[c])) {
      const m = ga.indexOf(c) !== -1 ? "attr" + c.charAt(0).toUpperCase() + c.substring(1) : c;
      o[m] = i[c];
    }
  return o;
}
class vN extends uy {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = Je;
  }
  getBaseTargetFromProps(s, r) {
    return s[r];
  }
  readValueFromInstance(s, r) {
    if (ya.has(r)) {
      const o = Ig(r);
      return o && o.default || 0;
    }
    return r = yy.has(r) ? r : of(r), s.getAttribute(r);
  }
  scrapeMotionValuesFromProps(s, r, o) {
    return by(s, r, o);
  }
  build(s, r, o) {
    gy(s, r, this.isSVGTag, o.transformTemplate, o.style);
  }
  renderInstance(s, r, o, c) {
    yN(s, r, o, c);
  }
  mount(s) {
    this.isSVGTag = vy(s.tagName), super.mount(s);
  }
}
const bN = df.length;
function xy(i) {
  if (!i)
    return;
  if (!i.isControllingVariants) {
    const r = i.parent ? xy(i.parent) || {} : {};
    return i.props.initial !== void 0 && (r.initial = i.props.initial), r;
  }
  const s = {};
  for (let r = 0; r < bN; r++) {
    const o = df[r], c = i.props[o];
    (Ns(c) || c === !1) && (s[o] = c);
  }
  return s;
}
function Sy(i, s) {
  if (!Array.isArray(s))
    return !1;
  const r = s.length;
  if (r !== i.length)
    return !1;
  for (let o = 0; o < r; o++)
    if (s[o] !== i[o])
      return !1;
  return !0;
}
const xN = [...ff].reverse(), SN = ff.length;
function NN(i) {
  return (s) => Promise.all(s.map(({ animation: r, options: o }) => bS(i, r, o)));
}
function DN(i) {
  let s = NN(i), r = c0(), o = !0, c = !1;
  const m = (h) => (v, x) => {
    var C;
    const S = Ni(i, x, h === "exit" ? (C = i.presenceContext) == null ? void 0 : C.custom : void 0);
    if (S) {
      const { transition: A, transitionEnd: j, ...U } = S;
      v = { ...v, ...U, ...j };
    }
    return v;
  };
  function d(h) {
    s = h(i);
  }
  function p(h) {
    const { props: v } = i, x = xy(i.parent) || {}, S = [], C = /* @__PURE__ */ new Set();
    let A = {}, j = 1 / 0;
    for (let L = 0; L < SN; L++) {
      const X = xN[L], G = r[X], q = v[X] !== void 0 ? v[X] : x[X], F = Ns(q), ie = X === h ? G.isActive : null;
      ie === !1 && (j = L);
      let R = q === x[X] && q !== v[X] && F;
      if (R && (o || c) && i.manuallyAnimateOnMount && (R = !1), G.protectedKeys = { ...A }, // If it isn't active and hasn't *just* been set as inactive
      !G.isActive && ie === null || // If we didn't and don't have any defined prop for this animation type
      !q && !G.prevProp || // Or if the prop doesn't define an animation
      So(q) || typeof q == "boolean")
        continue;
      if (X === "exit" && G.isActive && ie !== !0) {
        G.prevResolvedValues && (A = {
          ...A,
          ...G.prevResolvedValues
        });
        continue;
      }
      const H = EN(G.prevProp, q);
      let $ = H || // If we're making this variant active, we want to always make it active
      X === h && G.isActive && !R && F || // If we removed a higher-priority variant (i is in reverse order)
      L > j && F, Q = !1;
      const se = Array.isArray(q) ? q : [q];
      let ge = se.reduce(m(X), {});
      ie === !1 && (ge = {});
      const { prevResolvedValues: Ge = {} } = G, ze = {
        ...Ge,
        ...ge
      }, be = (J) => {
        $ = !0, C.has(J) && (Q = !0, C.delete(J)), G.needsAnimating[J] = !0;
        const ue = i.getValue(J);
        ue && (ue.liveStyle = !1);
      };
      for (const J in ze) {
        const ue = ge[J], ye = Ge[J];
        if (A.hasOwnProperty(J))
          continue;
        let E = !1;
        Vc(ue) && Vc(ye) ? E = !Sy(ue, ye) || H : E = ue !== ye, E ? ue != null ? be(J) : C.add(J) : ue !== void 0 && C.has(J) ? be(J) : G.protectedKeys[J] = !0;
      }
      G.prevProp = q, G.prevResolvedValues = ge, G.isActive && (A = { ...A, ...ge }), (o || c) && i.blockInitialAnimation && ($ = !1);
      const w = R && H;
      $ && (!w || Q) && S.push(...se.map((J) => {
        const ue = { type: X };
        if (typeof J == "string" && (o || c) && !w && i.manuallyAnimateOnMount && i.parent) {
          const { parent: ye } = i, E = Ni(ye, J);
          if (ye.enteringChildren && E) {
            const { delayChildren: _ } = E.transition || {};
            ue.delay = Yg(ye.enteringChildren, i, _);
          }
        }
        return {
          animation: J,
          options: ue
        };
      }));
    }
    if (C.size) {
      const L = {};
      if (typeof v.initial != "boolean") {
        const X = Ni(i, Array.isArray(v.initial) ? v.initial[0] : v.initial);
        X && X.transition && (L.transition = X.transition);
      }
      C.forEach((X) => {
        const G = i.getBaseTarget(X), q = i.getValue(X);
        q && (q.liveStyle = !0), L[X] = G ?? null;
      }), S.push({ animation: L });
    }
    let U = !!S.length;
    return o && (v.initial === !1 || v.initial === v.animate) && !i.manuallyAnimateOnMount && (U = !1), o = !1, c = !1, U ? s(S) : Promise.resolve();
  }
  function b(h, v) {
    var S;
    if (r[h].isActive === v)
      return Promise.resolve();
    (S = i.variantChildren) == null || S.forEach((C) => {
      var A;
      return (A = C.animationState) == null ? void 0 : A.setActive(h, v);
    }), r[h].isActive = v;
    const x = p(h);
    for (const C in r)
      r[C].protectedKeys = {};
    return x;
  }
  return {
    animateChanges: p,
    setActive: b,
    setAnimateFunction: d,
    getState: () => r,
    reset: () => {
      r = c0(), c = !0;
    }
  };
}
function EN(i, s) {
  return typeof s == "string" ? s !== i : Array.isArray(s) ? !Sy(s, i) : !1;
}
function yi(i = !1) {
  return {
    isActive: i,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function c0() {
  return {
    animate: yi(!0),
    whileInView: yi(),
    whileHover: yi(),
    whileTap: yi(),
    whileDrag: yi(),
    whileFocus: yi(),
    exit: yi()
  };
}
function Oc(i, s) {
  i.min = s.min, i.max = s.max;
}
function Yt(i, s) {
  Oc(i.x, s.x), Oc(i.y, s.y);
}
function f0(i, s) {
  i.translate = s.translate, i.scale = s.scale, i.originPoint = s.originPoint, i.origin = s.origin;
}
const Ny = 1e-4, TN = 1 - Ny, CN = 1 + Ny, Dy = 0.01, VN = 0 - Dy, BN = 0 + Dy;
function ct(i) {
  return i.max - i.min;
}
function AN(i, s, r) {
  return Math.abs(i - s) <= r;
}
function d0(i, s, r, o = 0.5) {
  i.origin = o, i.originPoint = ke(s.min, s.max, i.origin), i.scale = ct(r) / ct(s), i.translate = ke(r.min, r.max, i.origin) - i.originPoint, (i.scale >= TN && i.scale <= CN || isNaN(i.scale)) && (i.scale = 1), (i.translate >= VN && i.translate <= BN || isNaN(i.translate)) && (i.translate = 0);
}
function vs(i, s, r, o) {
  d0(i.x, s.x, r.x, o ? o.originX : void 0), d0(i.y, s.y, r.y, o ? o.originY : void 0);
}
function m0(i, s, r, o = 0) {
  const c = o ? ke(r.min, r.max, o) : r.min;
  i.min = c + s.min, i.max = i.min + ct(s);
}
function kN(i, s, r, o) {
  m0(i.x, s.x, r.x, o == null ? void 0 : o.x), m0(i.y, s.y, r.y, o == null ? void 0 : o.y);
}
function p0(i, s, r, o = 0) {
  const c = o ? ke(r.min, r.max, o) : r.min;
  i.min = s.min - c, i.max = i.min + ct(s);
}
function yo(i, s, r, o) {
  p0(i.x, s.x, r.x, o == null ? void 0 : o.x), p0(i.y, s.y, r.y, o == null ? void 0 : o.y);
}
function h0(i, s, r, o, c) {
  return i -= s, i = go(i, 1 / r, o), c !== void 0 && (i = go(i, 1 / c, o)), i;
}
function wN(i, s = 0, r = 1, o = 0.5, c, m = i, d = i) {
  if (It.test(s) && (s = parseFloat(s), s = ke(d.min, d.max, s / 100) - d.min), typeof s != "number")
    return;
  let p = ke(m.min, m.max, o);
  i === m && (p -= s), i.min = h0(i.min, s, r, p, c), i.max = h0(i.max, s, r, p, c);
}
function g0(i, s, [r, o, c], m, d) {
  wN(i, s[r], s[o], s[c], s.scale, m, d);
}
const MN = ["x", "scaleX", "originX"], PN = ["y", "scaleY", "originY"];
function y0(i, s, r, o) {
  g0(i.x, s, MN, r ? r.x : void 0, o ? o.x : void 0), g0(i.y, s, PN, r ? r.y : void 0, o ? o.y : void 0);
}
function v0(i) {
  return i.translate === 0 && i.scale === 1;
}
function Ey(i) {
  return v0(i.x) && v0(i.y);
}
function b0(i, s) {
  return i.min === s.min && i.max === s.max;
}
function jN(i, s) {
  return b0(i.x, s.x) && b0(i.y, s.y);
}
function x0(i, s) {
  return Math.round(i.min) === Math.round(s.min) && Math.round(i.max) === Math.round(s.max);
}
function Ty(i, s) {
  return x0(i.x, s.x) && x0(i.y, s.y);
}
function S0(i) {
  return ct(i.x) / ct(i.y);
}
function N0(i, s) {
  return i.translate === s.translate && i.scale === s.scale && i.originPoint === s.originPoint;
}
function $t(i) {
  return [i("x"), i("y")];
}
function zN(i, s, r) {
  let o = "";
  const c = i.x.translate / s.x, m = i.y.translate / s.y, d = (r == null ? void 0 : r.z) || 0;
  if ((c || m || d) && (o = `translate3d(${c}px, ${m}px, ${d}px) `), (s.x !== 1 || s.y !== 1) && (o += `scale(${1 / s.x}, ${1 / s.y}) `), r) {
    const { transformPerspective: h, rotate: v, pathRotation: x, rotateX: S, rotateY: C, skewX: A, skewY: j } = r;
    h && (o = `perspective(${h}px) ${o}`), v && (o += `rotate(${v}deg) `), x && (o += `rotate(${x}deg) `), S && (o += `rotateX(${S}deg) `), C && (o += `rotateY(${C}deg) `), A && (o += `skewX(${A}deg) `), j && (o += `skewY(${j}deg) `);
  }
  const p = i.x.scale * s.x, b = i.y.scale * s.y;
  return (p !== 1 || b !== 1) && (o += `scale(${p}, ${b})`), o || "none";
}
const Cy = [
  "borderTopLeftRadius",
  "borderTopRightRadius",
  "borderBottomLeftRadius",
  "borderBottomRightRadius"
], RN = Cy.length, D0 = (i) => typeof i == "string" ? parseFloat(i) : i, E0 = (i) => typeof i == "number" || I.test(i);
function ON(i, s, r, o, c, m) {
  c ? (i.opacity = ke(0, r.opacity ?? 1, _N(o)), i.opacityExit = ke(s.opacity ?? 1, 0, UN(o))) : m && (i.opacity = ke(s.opacity ?? 1, r.opacity ?? 1, o));
  for (let d = 0; d < RN; d++) {
    const p = Cy[d];
    let b = T0(s, p), h = T0(r, p);
    if (b === void 0 && h === void 0)
      continue;
    b || (b = 0), h || (h = 0), b === 0 || h === 0 || E0(b) === E0(h) ? (i[p] = Math.max(ke(D0(b), D0(h), o), 0), (It.test(h) || It.test(b)) && (i[p] += "%")) : i[p] = h;
  }
  (s.rotate || r.rotate) && (i.rotate = ke(s.rotate || 0, r.rotate || 0, o));
}
function T0(i, s) {
  return i[s] !== void 0 ? i[s] : i.borderRadius;
}
const _N = /* @__PURE__ */ Vy(0, 0.5, vg), UN = /* @__PURE__ */ Vy(0.5, 0.95, Lt);
function Vy(i, s, r) {
  return (o) => o < i ? 0 : o > s ? 1 : r(/* @__PURE__ */ xs(i, s, o));
}
function LN(i, s, r) {
  const o = st(i) ? i : pa(i);
  return o.start(sf("", o, s, r)), o.animation;
}
function Ds(i, s, r, o = { passive: !0 }) {
  return i.addEventListener(s, r, o), () => i.removeEventListener(s, r);
}
const HN = (i, s) => i.depth - s.depth;
class qN {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(s) {
    Kc(this.children, s), this.isDirty = !0;
  }
  remove(s) {
    ro(this.children, s), this.isDirty = !0;
  }
  forEach(s) {
    this.isDirty && this.children.sort(HN), this.isDirty = !1, this.children.forEach(s);
  }
}
function GN(i, s) {
  const r = ut.now(), o = ({ timestamp: c }) => {
    const m = c - r;
    m >= s && (Jn(o), i(m - s));
  };
  return we.setup(o, !0), () => Jn(o);
}
function lo(i) {
  return st(i) ? i.get() : i;
}
class YN {
  constructor() {
    this.members = [];
  }
  add(s) {
    Kc(this.members, s);
    for (let r = this.members.length - 1; r >= 0; r--) {
      const o = this.members[r];
      if (o === s || o === this.lead || o === this.prevLead)
        continue;
      const c = o.instance;
      (!c || c.isConnected === !1) && !o.snapshot && (ro(this.members, o), o.unmount());
    }
    s.scheduleRender();
  }
  remove(s) {
    if (ro(this.members, s), s === this.prevLead && (this.prevLead = void 0), s === this.lead) {
      const r = this.members[this.members.length - 1];
      r && this.promote(r);
    }
  }
  relegate(s) {
    var r;
    for (let o = this.members.indexOf(s) - 1; o >= 0; o--) {
      const c = this.members[o];
      if (c.isPresent !== !1 && ((r = c.instance) == null ? void 0 : r.isConnected) !== !1)
        return this.promote(c), !0;
    }
    return !1;
  }
  promote(s, r) {
    var c;
    const o = this.lead;
    if (s !== o && (this.prevLead = o, this.lead = s, s.show(), o)) {
      o.updateSnapshot(), s.scheduleRender();
      const { layoutDependency: m } = o.options, { layoutDependency: d } = s.options;
      (m === void 0 || m !== d) && (s.resumeFrom = o, r && (o.preserveOpacity = !0), o.snapshot && (s.snapshot = o.snapshot, s.snapshot.latestValues = o.animationValues || o.latestValues), (c = s.root) != null && c.isUpdating && (s.isLayoutDirty = !0)), s.options.crossfade === !1 && o.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((s) => {
      var r, o, c, m, d;
      (o = (r = s.options).onExitComplete) == null || o.call(r), (d = (c = s.resumingFrom) == null ? void 0 : (m = c.options).onExitComplete) == null || d.call(m);
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
}, ic = ["", "X", "Y", "Z"], XN = 1e3;
let KN = 0;
function ac(i, s, r, o) {
  const { latestValues: c } = s;
  c[i] && (r[i] = c[i], s.setStaticValue(i, 0), o && (o[i] = 0));
}
function By(i) {
  if (i.hasCheckedOptimisedAppear = !0, i.root === i)
    return;
  const { visualElement: s } = i.options;
  if (!s)
    return;
  const r = Fg(s);
  if (window.MotionHasOptimisedAnimation(r, "transform")) {
    const { layout: c, layoutId: m } = i.options;
    window.MotionCancelOptimisedAnimation(r, "transform", we, !(c || m));
  }
  const { parent: o } = i;
  o && !o.hasCheckedOptimisedAppear && By(o);
}
function Ay({ attachResizeListener: i, defaultParent: s, measureScroll: r, checkIsScrollRoot: o, resetTransform: c }) {
  return class {
    constructor(d = {}, p = s == null ? void 0 : s()) {
      this.id = KN++, this.animationId = 0, this.animationCommitId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.layoutVersion = 0, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, this.nodes.forEach(FN), this.nodes.forEach(t2), this.nodes.forEach(n2), this.nodes.forEach(JN);
      }, this.resolvedRelativeTargetAt = 0, this.linkedParentVersion = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = d, this.root = p ? p.root || p : this, this.path = p ? [...p.path, p] : [], this.parent = p, this.depth = p ? p.depth + 1 : 0;
      for (let b = 0; b < this.path.length; b++)
        this.path[b].shouldResetTransform = !0;
      this.root === this && (this.nodes = new qN());
    }
    addEventListener(d, p) {
      return this.eventHandlers.has(d) || this.eventHandlers.set(d, new Qc()), this.eventHandlers.get(d).add(p);
    }
    notifyListeners(d, ...p) {
      const b = this.eventHandlers.get(d);
      b && b.notify(...p);
    }
    hasListeners(d) {
      return this.eventHandlers.has(d);
    }
    /**
     * Lifecycles
     */
    mount(d) {
      if (this.instance)
        return;
      this.isSVG = cf(d) && !ZS(d), this.instance = d;
      const { layoutId: p, layout: b, visualElement: h } = this.options;
      if (h && !h.current && h.mount(d), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (b || p) && (this.isLayoutDirty = !0), i) {
        let v, x = 0;
        const S = () => this.root.updateBlockedByResize = !1;
        we.read(() => {
          x = window.innerWidth;
        }), i(d, () => {
          const C = window.innerWidth;
          C !== x && (x = C, this.root.updateBlockedByResize = !0, v && v(), v = GN(S, 250), oo.hasAnimatedSinceResize && (oo.hasAnimatedSinceResize = !1, this.nodes.forEach(B0)));
        });
      }
      p && this.root.registerSharedNode(p, this), this.options.animate !== !1 && h && (p || b) && this.addEventListener("didUpdate", ({ delta: v, hasLayoutChanged: x, hasRelativeLayoutChanged: S, layout: C }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const A = this.options.transition || h.getDefaultTransition() || o2, { onLayoutAnimationStart: j, onLayoutAnimationComplete: U } = h.getProps(), L = !this.targetLayout || !Ty(this.targetLayout, C), X = !x && S;
        if (this.options.layoutRoot || this.resumeFrom || X || x && (L || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
          const G = {
            ...af(A, "layout"),
            onPlay: j,
            onComplete: U
          };
          (h.shouldReduceMotion || this.options.layoutRoot) && (G.delay = 0, G.type = !1), this.startAnimation(G), this.setAnimationOrigin(v, X, G.path);
        } else
          x || B0(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = C;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const d = this.getStack();
      d && d.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), Jn(this.updateProjection);
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
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(i2), this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: d } = this.options;
      return d && d.getProps().transformTemplate;
    }
    willUpdate(d = !0) {
      if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && By(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
        return;
      this.isLayoutDirty = !0;
      for (let v = 0; v < this.path.length; v++) {
        const x = this.path[v];
        x.shouldResetTransform = !0, (typeof x.latestValues.x == "string" || typeof x.latestValues.y == "string") && (x.isLayoutDirty = !0), x.updateScroll("snapshot"), x.options.layoutRoot && x.willUpdate(!1);
      }
      const { layoutId: p, layout: b } = this.options;
      if (p === void 0 && !b)
        return;
      const h = this.getTransformTemplate();
      this.prevTransformTemplateValue = h ? h(this.latestValues, "") : void 0, this.updateSnapshot(), d && this.notifyListeners("willUpdate");
    }
    update() {
      if (this.updateScheduled = !1, this.isUpdateBlocked()) {
        const b = this.updateBlockedByResize;
        this.unblockUpdate(), this.updateBlockedByResize = !1, this.clearAllSnapshots(), b && this.nodes.forEach(WN), this.nodes.forEach(C0);
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(V0);
        return;
      }
      this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach(IN), this.nodes.forEach(e2), this.nodes.forEach(QN), this.nodes.forEach(ZN)) : this.nodes.forEach(V0), this.clearAllSnapshots();
      const p = ut.now();
      at.delta = en(0, 1e3 / 60, p - at.timestamp), at.timestamp = p, at.isProcessing = !0, Fu.update.process(at), Fu.preRender.process(at), Fu.render.process(at), at.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, rf.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach($N), this.sharedNodes.forEach(a2);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, we.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      we.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    /**
     * Update measurements
     */
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !ct(this.snapshot.measuredBox.x) && !ct(this.snapshot.measuredBox.y) && (this.snapshot = void 0));
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let b = 0; b < this.path.length; b++)
          this.path[b].updateScroll();
      const d = this.layout;
      this.layout = this.measure(!1), this.layoutVersion++, this.layoutCorrected || (this.layoutCorrected = Je()), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: p } = this.options;
      p && p.notify("LayoutMeasure", this.layout.layoutBox, d ? d.layoutBox : void 0);
    }
    updateScroll(d = "measure") {
      let p = !!(this.options.layoutScroll && this.instance);
      if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === d && (p = !1), p && this.instance) {
        const b = o(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: d,
          isRoot: b,
          offset: r(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : b
        };
      }
    }
    resetTransform() {
      if (!c)
        return;
      const d = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, p = this.projectionDelta && !Ey(this.projectionDelta), b = this.getTransformTemplate(), h = b ? b(this.latestValues, "") : void 0, v = h !== this.prevTransformTemplateValue;
      d && this.instance && (p || vi(this.latestValues) || v) && (c(this.instance, h), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(d = !0) {
      const p = this.measurePageBox();
      let b = this.removeElementScroll(p);
      return d && (b = this.removeTransform(b)), r2(b), {
        animationId: this.root.animationId,
        measuredBox: p,
        layoutBox: b,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      var h;
      const { visualElement: d } = this.options;
      if (!d)
        return Je();
      const p = d.measureViewportBox();
      if (!(((h = this.scroll) == null ? void 0 : h.wasRoot) || this.path.some(u2))) {
        const { scroll: v } = this.root;
        v && (Wt(p.x, v.offset.x), Wt(p.y, v.offset.y));
      }
      return p;
    }
    removeElementScroll(d) {
      var b;
      const p = Je();
      if (Yt(p, d), (b = this.scroll) != null && b.wasRoot)
        return p;
      for (let h = 0; h < this.path.length; h++) {
        const v = this.path[h], { scroll: x, options: S } = v;
        v !== this.root && x && S.layoutScroll && (x.wasRoot && Yt(p, d), Wt(p.x, x.offset.x), Wt(p.y, x.offset.y));
      }
      return p;
    }
    applyTransform(d, p = !1, b) {
      var v, x;
      const h = b || Je();
      Yt(h, d);
      for (let S = 0; S < this.path.length; S++) {
        const C = this.path[S];
        !p && C.options.layoutScroll && C.scroll && C !== C.root && (Wt(h.x, -C.scroll.offset.x), Wt(h.y, -C.scroll.offset.y)), vi(C.latestValues) && so(h, C.latestValues, (v = C.layout) == null ? void 0 : v.layoutBox);
      }
      return vi(this.latestValues) && so(h, this.latestValues, (x = this.layout) == null ? void 0 : x.layoutBox), h;
    }
    removeTransform(d) {
      var b;
      const p = Je();
      Yt(p, d);
      for (let h = 0; h < this.path.length; h++) {
        const v = this.path[h];
        if (!vi(v.latestValues))
          continue;
        let x;
        v.instance && (jc(v.latestValues) && v.updateSnapshot(), x = Je(), Yt(x, v.measurePageBox())), y0(p, v.latestValues, (b = v.snapshot) == null ? void 0 : b.layoutBox, x);
      }
      return vi(this.latestValues) && y0(p, this.latestValues), p;
    }
    setTargetDelta(d) {
      this.targetDelta = d, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0;
    }
    setOptions(d) {
      this.options = {
        ...this.options,
        ...d,
        crossfade: d.crossfade !== void 0 ? d.crossfade : !0
      };
    }
    clearMeasurements() {
      this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== at.timestamp && this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(d = !1) {
      var C;
      const p = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = p.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = p.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = p.isSharedProjectionDirty);
      const b = !!this.resumingFrom || this !== p;
      if (!(d || b && this.isSharedProjectionDirty || this.isProjectionDirty || (C = this.parent) != null && C.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
        return;
      const { layout: v, layoutId: x } = this.options;
      if (!this.layout || !(v || x))
        return;
      this.resolvedRelativeTargetAt = at.timestamp;
      const S = this.getClosestProjectingParent();
      S && this.linkedParentVersion !== S.layoutVersion && !S.options.layoutRoot && this.removeRelativeTarget(), !this.targetDelta && !this.relativeTarget && (this.options.layoutAnchor !== !1 && S && S.layout ? this.createRelativeTarget(S, this.layout.layoutBox, S.layout.layoutBox) : this.removeRelativeTarget()), !(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = Je(), this.targetWithTransforms = Je()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), kN(this.target, this.relativeTarget, this.relativeParent.target, this.options.layoutAnchor || void 0)) : this.targetDelta ? (this.resumingFrom ? this.applyTransform(this.layout.layoutBox, !1, this.target) : Yt(this.target, this.layout.layoutBox), dy(this.target, this.targetDelta)) : Yt(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1, this.options.layoutAnchor !== !1 && S && !!S.resumingFrom == !!this.resumingFrom && !S.options.layoutScroll && S.target && this.animationProgress !== 1 ? this.createRelativeTarget(S, this.target, S.target) : this.relativeParent = this.relativeTarget = void 0));
    }
    getClosestProjectingParent() {
      if (!(!this.parent || jc(this.parent.latestValues) || fy(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    createRelativeTarget(d, p, b) {
      this.relativeParent = d, this.linkedParentVersion = d.layoutVersion, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Je(), this.relativeTargetOrigin = Je(), yo(this.relativeTargetOrigin, p, b, this.options.layoutAnchor || void 0), Yt(this.relativeTarget, this.relativeTargetOrigin);
    }
    removeRelativeTarget() {
      this.relativeParent = this.relativeTarget = void 0;
    }
    calcProjection() {
      var A;
      const d = this.getLead(), p = !!this.resumingFrom || this !== d;
      let b = !0;
      if ((this.isProjectionDirty || (A = this.parent) != null && A.isProjectionDirty) && (b = !1), p && (this.isSharedProjectionDirty || this.isTransformDirty) && (b = !1), this.resolvedRelativeTargetAt === at.timestamp && (b = !1), b)
        return;
      const { layout: h, layoutId: v } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(h || v))
        return;
      Yt(this.layoutCorrected, this.layout.layoutBox);
      const x = this.treeScale.x, S = this.treeScale.y;
      sN(this.layoutCorrected, this.treeScale, this.path, p), d.layout && !d.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (d.target = d.layout.layoutBox, d.targetWithTransforms = Je());
      const { target: C } = d;
      if (!C) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (f0(this.prevProjectionDelta.x, this.projectionDelta.x), f0(this.prevProjectionDelta.y, this.projectionDelta.y)), vs(this.projectionDelta, this.layoutCorrected, C, this.latestValues), (this.treeScale.x !== x || this.treeScale.y !== S || !N0(this.projectionDelta.x, this.prevProjectionDelta.x) || !N0(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", C));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(d = !0) {
      var p;
      if ((p = this.options.visualElement) == null || p.scheduleRender(), d) {
        const b = this.getStack();
        b && b.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      this.prevProjectionDelta = da(), this.projectionDelta = da(), this.projectionDeltaWithTransform = da();
    }
    setAnimationOrigin(d, p = !1, b) {
      const h = this.snapshot, v = h ? h.latestValues : {}, x = { ...this.latestValues }, S = da();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !p;
      const C = Je(), A = h ? h.source : void 0, j = this.layout ? this.layout.source : void 0, U = A !== j, L = this.getStack(), X = !L || L.members.length <= 1, G = !!(U && !X && this.options.crossfade === !0 && !this.path.some(l2));
      this.animationProgress = 0;
      let q;
      const F = b == null ? void 0 : b.interpolateProjection(d);
      this.mixTargetDelta = (ie) => {
        const R = ie / 1e3, H = F == null ? void 0 : F(R);
        H ? (S.x.translate = H.x, S.x.scale = ke(d.x.scale, 1, R), S.x.origin = d.x.origin, S.x.originPoint = d.x.originPoint, S.y.translate = H.y, S.y.scale = ke(d.y.scale, 1, R), S.y.origin = d.y.origin, S.y.originPoint = d.y.originPoint) : (A0(S.x, d.x, R), A0(S.y, d.y, R)), this.setTargetDelta(S), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (yo(C, this.layout.layoutBox, this.relativeParent.layout.layoutBox, this.options.layoutAnchor || void 0), s2(this.relativeTarget, this.relativeTargetOrigin, C, R), q && jN(this.relativeTarget, q) && (this.isProjectionDirty = !1), q || (q = Je()), Yt(q, this.relativeTarget)), U && (this.animationValues = x, ON(x, v, this.latestValues, R, G, X)), H && H.rotate !== void 0 && (this.animationValues || (this.animationValues = x), this.animationValues.pathRotation = H.rotate), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = R;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(d) {
      var p, b, h;
      this.notifyListeners("animationStart"), (p = this.currentAnimation) == null || p.stop(), (h = (b = this.resumingFrom) == null ? void 0 : b.currentAnimation) == null || h.stop(), this.pendingAnimation && (Jn(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = we.update(() => {
        oo.hasAnimatedSinceResize = !0, this.motionValue || (this.motionValue = pa(0)), this.motionValue.jump(0, !1), this.currentAnimation = LN(this.motionValue, [0, 1e3], {
          ...d,
          velocity: 0,
          isSync: !0,
          onUpdate: (v) => {
            this.mixTargetDelta(v), d.onUpdate && d.onUpdate(v);
          },
          onStop: () => {
          },
          onComplete: () => {
            d.onComplete && d.onComplete(), this.completeAnimation();
          }
        }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
      const d = this.getStack();
      d && d.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(XN), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const d = this.getLead();
      let { targetWithTransforms: p, target: b, layout: h, latestValues: v } = d;
      if (!(!p || !b || !h)) {
        if (this !== d && this.layout && h && ky(this.options.animationType, this.layout.layoutBox, h.layoutBox)) {
          b = this.target || Je();
          const x = ct(this.layout.layoutBox.x);
          b.x.min = d.target.x.min, b.x.max = b.x.min + x;
          const S = ct(this.layout.layoutBox.y);
          b.y.min = d.target.y.min, b.y.max = b.y.min + S;
        }
        Yt(p, b), so(p, v), vs(this.projectionDeltaWithTransform, this.layoutCorrected, p, v);
      }
    }
    registerSharedNode(d, p) {
      this.sharedNodes.has(d) || this.sharedNodes.set(d, new YN()), this.sharedNodes.get(d).add(p);
      const h = p.options.initialPromotionConfig;
      p.promote({
        transition: h ? h.transition : void 0,
        preserveFollowOpacity: h && h.shouldPreserveFollowOpacity ? h.shouldPreserveFollowOpacity(p) : void 0
      });
    }
    isLead() {
      const d = this.getStack();
      return d ? d.lead === this : !0;
    }
    getLead() {
      var p;
      const { layoutId: d } = this.options;
      return d ? ((p = this.getStack()) == null ? void 0 : p.lead) || this : this;
    }
    getPrevLead() {
      var p;
      const { layoutId: d } = this.options;
      return d ? (p = this.getStack()) == null ? void 0 : p.prevLead : void 0;
    }
    getStack() {
      const { layoutId: d } = this.options;
      if (d)
        return this.root.sharedNodes.get(d);
    }
    promote({ needsReset: d, transition: p, preserveFollowOpacity: b } = {}) {
      const h = this.getStack();
      h && h.promote(this, b), d && (this.projectionDelta = void 0, this.needsReset = !0), p && this.setOptions({ transition: p });
    }
    relegate() {
      const d = this.getStack();
      return d ? d.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: d } = this.options;
      if (!d)
        return;
      let p = !1;
      const { latestValues: b } = d;
      if ((b.z || b.rotate || b.rotateX || b.rotateY || b.rotateZ || b.skewX || b.skewY) && (p = !0), !p)
        return;
      const h = {};
      b.z && ac("z", d, h, this.animationValues);
      for (let v = 0; v < ic.length; v++)
        ac(`rotate${ic[v]}`, d, h, this.animationValues), ac(`skew${ic[v]}`, d, h, this.animationValues);
      d.render();
      for (const v in h)
        d.setStaticValue(v, h[v]), this.animationValues && (this.animationValues[v] = h[v]);
      d.scheduleRender();
    }
    applyProjectionStyles(d, p) {
      if (!this.instance || this.isSVG)
        return;
      if (!this.isVisible) {
        d.visibility = "hidden";
        return;
      }
      const b = this.getTransformTemplate();
      if (this.needsReset) {
        this.needsReset = !1, d.visibility = "", d.opacity = "", d.pointerEvents = lo(p == null ? void 0 : p.pointerEvents) || "", d.transform = b ? b(this.latestValues, "") : "none";
        return;
      }
      const h = this.getLead();
      if (!this.projectionDelta || !this.layout || !h.target) {
        this.options.layoutId && (d.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, d.pointerEvents = lo(p == null ? void 0 : p.pointerEvents) || ""), this.hasProjected && !vi(this.latestValues) && (d.transform = b ? b({}, "") : "none", this.hasProjected = !1);
        return;
      }
      d.visibility = "";
      const v = h.animationValues || h.latestValues;
      this.applyTransformsToTarget();
      let x = zN(this.projectionDeltaWithTransform, this.treeScale, v);
      b && (x = b(v, x)), d.transform = x;
      const { x: S, y: C } = this.projectionDelta;
      d.transformOrigin = `${S.origin * 100}% ${C.origin * 100}% 0`, h.animationValues ? d.opacity = h === this ? v.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : v.opacityExit : d.opacity = h === this ? v.opacity !== void 0 ? v.opacity : "" : v.opacityExit !== void 0 ? v.opacityExit : 0;
      for (const A in Rc) {
        if (v[A] === void 0)
          continue;
        const { correct: j, applyTo: U, isCSSVariable: L } = Rc[A], X = x === "none" ? v[A] : j(v[A], h);
        if (U) {
          const G = U.length;
          for (let q = 0; q < G; q++)
            d[U[q]] = X;
        } else
          L ? this.options.visualElement.renderState.vars[A] = X : d[A] = X;
      }
      this.options.layoutId && (d.pointerEvents = h === this ? lo(p == null ? void 0 : p.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((d) => {
        var p;
        return (p = d.currentAnimation) == null ? void 0 : p.stop();
      }), this.root.nodes.forEach(C0), this.root.sharedNodes.clear();
    }
  };
}
function QN(i) {
  i.updateLayout();
}
function ZN(i) {
  var r;
  const s = ((r = i.resumeFrom) == null ? void 0 : r.snapshot) || i.snapshot;
  if (i.isLead() && i.layout && s && i.hasListeners("didUpdate")) {
    const { layoutBox: o, measuredBox: c } = i.layout, { animationType: m } = i.options, d = s.source !== i.layout.source;
    if (m === "size")
      $t((x) => {
        const S = d ? s.measuredBox[x] : s.layoutBox[x], C = ct(S);
        S.min = o[x].min, S.max = S.min + C;
      });
    else if (m === "x" || m === "y") {
      const x = m === "x" ? "y" : "x";
      Oc(d ? s.measuredBox[x] : s.layoutBox[x], o[x]);
    } else ky(m, s.layoutBox, o) && $t((x) => {
      const S = d ? s.measuredBox[x] : s.layoutBox[x], C = ct(o[x]);
      S.max = S.min + C, i.relativeTarget && !i.currentAnimation && (i.isProjectionDirty = !0, i.relativeTarget[x].max = i.relativeTarget[x].min + C);
    });
    const p = da();
    vs(p, o, s.layoutBox);
    const b = da();
    d ? vs(b, i.applyTransform(c, !0), s.measuredBox) : vs(b, o, s.layoutBox);
    const h = !Ey(p);
    let v = !1;
    if (!i.resumeFrom) {
      const x = i.getClosestProjectingParent();
      if (x && !x.resumeFrom) {
        const { snapshot: S, layout: C } = x;
        if (S && C) {
          const A = i.options.layoutAnchor || void 0, j = Je();
          yo(j, s.layoutBox, S.layoutBox, A);
          const U = Je();
          yo(U, o, C.layoutBox, A), Ty(j, U) || (v = !0), x.options.layoutRoot && (i.relativeTarget = U, i.relativeTargetOrigin = j, i.relativeParent = x);
        }
      }
    }
    i.notifyListeners("didUpdate", {
      layout: o,
      snapshot: s,
      delta: b,
      layoutDelta: p,
      hasLayoutChanged: h,
      hasRelativeLayoutChanged: v
    });
  } else if (i.isLead()) {
    const { onExitComplete: o } = i.options;
    o && o();
  }
  i.options.transition = void 0;
}
function FN(i) {
  i.parent && (i.isProjecting() || (i.isProjectionDirty = i.parent.isProjectionDirty), i.isSharedProjectionDirty || (i.isSharedProjectionDirty = !!(i.isProjectionDirty || i.parent.isProjectionDirty || i.parent.isSharedProjectionDirty)), i.isTransformDirty || (i.isTransformDirty = i.parent.isTransformDirty));
}
function JN(i) {
  i.isProjectionDirty = i.isSharedProjectionDirty = i.isTransformDirty = !1;
}
function $N(i) {
  i.clearSnapshot();
}
function C0(i) {
  i.clearMeasurements();
}
function WN(i) {
  i.isLayoutDirty = !0, i.updateLayout();
}
function V0(i) {
  i.isLayoutDirty = !1;
}
function IN(i) {
  i.isAnimationBlocked && i.layout && !i.isLayoutDirty && (i.snapshot = i.layout, i.isLayoutDirty = !0);
}
function e2(i) {
  const { visualElement: s } = i.options;
  s && s.getProps().onBeforeLayoutMeasure && s.notify("BeforeLayoutMeasure"), i.resetTransform();
}
function B0(i) {
  i.finishAnimation(), i.targetDelta = i.relativeTarget = i.target = void 0, i.isProjectionDirty = !0;
}
function t2(i) {
  i.resolveTargetDelta();
}
function n2(i) {
  i.calcProjection();
}
function i2(i) {
  i.resetSkewAndRotation();
}
function a2(i) {
  i.removeLeadSnapshot();
}
function A0(i, s, r) {
  i.translate = ke(s.translate, 0, r), i.scale = ke(s.scale, 1, r), i.origin = s.origin, i.originPoint = s.originPoint;
}
function k0(i, s, r, o) {
  i.min = ke(s.min, r.min, o), i.max = ke(s.max, r.max, o);
}
function s2(i, s, r, o) {
  k0(i.x, s.x, r.x, o), k0(i.y, s.y, r.y, o);
}
function l2(i) {
  return i.animationValues && i.animationValues.opacityExit !== void 0;
}
const o2 = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, w0 = (i) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(i), M0 = w0("applewebkit/") && !w0("chrome/") ? Math.round : Lt;
function P0(i) {
  i.min = M0(i.min), i.max = M0(i.max);
}
function r2(i) {
  P0(i.x), P0(i.y);
}
function ky(i, s, r) {
  return i === "position" || i === "preserve-aspect" && !AN(S0(s), S0(r), 0.2);
}
function u2(i) {
  var s;
  return i !== i.root && ((s = i.scroll) == null ? void 0 : s.wasRoot);
}
const c2 = Ay({
  attachResizeListener: (i, s) => Ds(i, "resize", s),
  measureScroll: () => {
    var i, s;
    return {
      x: document.documentElement.scrollLeft || ((i = document.body) == null ? void 0 : i.scrollLeft) || 0,
      y: document.documentElement.scrollTop || ((s = document.body) == null ? void 0 : s.scrollTop) || 0
    };
  },
  checkIsScrollRoot: () => !0
}), sc = {
  current: void 0
}, wy = Ay({
  measureScroll: (i) => ({
    x: i.scrollLeft,
    y: i.scrollTop
  }),
  defaultParent: () => {
    if (!sc.current) {
      const i = new c2({});
      i.mount(window), i.setOptions({ layoutScroll: !0 }), sc.current = i;
    }
    return sc.current;
  },
  resetTransform: (i, s) => {
    i.style.transform = s !== void 0 ? s : "none";
  },
  checkIsScrollRoot: (i) => window.getComputedStyle(i).position === "fixed"
}), hf = Y.createContext({
  transformPagePoint: (i) => i,
  isStatic: !1,
  reducedMotion: "never"
});
function j0(i, s) {
  if (typeof i == "function")
    return i(s);
  i != null && (i.current = s);
}
function f2(...i) {
  return (s) => {
    let r = !1;
    const o = i.map((c) => {
      const m = j0(c, s);
      return !r && typeof m == "function" && (r = !0), m;
    });
    if (r)
      return () => {
        for (let c = 0; c < o.length; c++) {
          const m = o[c];
          typeof m == "function" ? m() : j0(i[c], null);
        }
      };
  };
}
function d2(...i) {
  return Y.useCallback(f2(...i), i);
}
class m2 extends Y.Component {
  getSnapshotBeforeUpdate(s) {
    const r = this.props.childRef.current;
    if (to(r) && s.isPresent && !this.props.isPresent && this.props.pop !== !1) {
      const o = r.offsetParent, c = to(o) && o.offsetWidth || 0, m = to(o) && o.offsetHeight || 0, d = getComputedStyle(r), p = this.props.sizeRef.current;
      p.height = parseFloat(d.height), p.width = parseFloat(d.width), p.top = r.offsetTop, p.left = r.offsetLeft, p.right = c - p.width - p.left, p.bottom = m - p.height - p.top, p.direction = d.direction;
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
function p2({ children: i, isPresent: s, anchorX: r, anchorY: o, root: c, pop: m }) {
  var S;
  const d = Y.useId(), p = Y.useRef(null), b = Y.useRef({
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    direction: "ltr"
  }), { nonce: h } = Y.useContext(hf), v = ((S = i.props) == null ? void 0 : S.ref) ?? (i == null ? void 0 : i.ref), x = d2(p, v);
  return Y.useInsertionEffect(() => {
    const { width: C, height: A, top: j, left: U, right: L, bottom: X, direction: G } = b.current;
    if (s || m === !1 || !p.current || !C || !A)
      return;
    const q = G === "rtl", F = r === "left" ? q ? `right: ${L}` : `left: ${U}` : q ? `left: ${U}` : `right: ${L}`, ie = o === "bottom" ? `bottom: ${X}` : `top: ${j}`;
    p.current.dataset.motionPopId = d;
    const R = document.createElement("style");
    h && (R.nonce = h);
    const H = c ?? document.head;
    return H.appendChild(R), R.sheet && R.sheet.insertRule(`
          [data-motion-pop-id="${d}"] {
            position: absolute !important;
            width: ${C}px !important;
            height: ${A}px !important;
            ${F}px !important;
            ${ie}px !important;
          }
        `), () => {
      var $;
      ($ = p.current) == null || $.removeAttribute("data-motion-pop-id"), H.contains(R) && H.removeChild(R);
    };
  }, [s]), Sn.jsx(m2, { isPresent: s, childRef: p, sizeRef: b, pop: m, children: m === !1 ? i : Y.cloneElement(i, { ref: x }) });
}
const h2 = ({ children: i, initial: s, isPresent: r, onExitComplete: o, custom: c, presenceAffectsLayout: m, mode: d, anchorX: p, anchorY: b, root: h }) => {
  const v = Xc(g2), x = Y.useId();
  let S = !0, C = Y.useMemo(() => (S = !1, {
    id: x,
    initial: s,
    isPresent: r,
    custom: c,
    onExitComplete: (A) => {
      v.set(A, !0);
      for (const j of v.values())
        if (!j)
          return;
      o && o();
    },
    register: (A) => (v.set(A, !1), () => v.delete(A))
  }), [r, v, o]);
  return m && S && (C = { ...C }), Y.useMemo(() => {
    v.forEach((A, j) => v.set(j, !1));
  }, [r]), Y.useEffect(() => {
    !r && !v.size && o && o();
  }, [r]), i = Sn.jsx(p2, { pop: d === "popLayout", isPresent: r, anchorX: p, anchorY: b, root: h, children: i }), Sn.jsx(bo.Provider, { value: C, children: i });
};
function g2() {
  return /* @__PURE__ */ new Map();
}
function My(i = !0) {
  const s = Y.useContext(bo);
  if (s === null)
    return [!0, null];
  const { isPresent: r, onExitComplete: o, register: c } = s, m = Y.useId();
  Y.useEffect(() => {
    if (i)
      return c(m);
  }, [i]);
  const d = Y.useCallback(() => i && o && o(m), [m, o, i]);
  return !r && o ? [!1, d] : [!0];
}
const Jl = (i) => i.key || "";
function z0(i) {
  const s = [];
  return Y.Children.forEach(i, (r) => {
    Y.isValidElement(r) && s.push(r);
  }), s;
}
const R0 = ({ children: i, custom: s, initial: r = !0, onExitComplete: o, presenceAffectsLayout: c = !0, mode: m = "sync", propagate: d = !1, anchorX: p = "left", anchorY: b = "top", root: h }) => {
  const [v, x] = My(d), S = Y.useMemo(() => z0(i), [i]), C = d && !v ? [] : S.map(Jl), A = Y.useRef(!0), j = Y.useRef(S), U = Xc(() => /* @__PURE__ */ new Map()), L = Y.useRef(/* @__PURE__ */ new Set()), [X, G] = Y.useState(S), [q, F] = Y.useState(S);
  lg(() => {
    A.current = !1, j.current = S;
    for (let H = 0; H < q.length; H++) {
      const $ = Jl(q[H]);
      C.includes($) ? (U.delete($), L.current.delete($)) : U.get($) !== !0 && U.set($, !1);
    }
  }, [q, C.length, C.join("-")]);
  const ie = [];
  if (S !== X) {
    let H = [...S];
    for (let $ = 0; $ < q.length; $++) {
      const Q = q[$], se = Jl(Q);
      C.includes(se) || (H.splice($, 0, Q), ie.push(Q));
    }
    return m === "wait" && ie.length && (H = ie), F(z0(H)), G(S), null;
  }
  const { forceRender: R } = Y.useContext(Yc);
  return Sn.jsx(Sn.Fragment, { children: q.map((H) => {
    const $ = Jl(H), Q = d && !v ? !1 : S === q || C.includes($), se = () => {
      if (L.current.has($))
        return;
      if (U.has($))
        L.current.add($), U.set($, !0);
      else
        return;
      let ge = !0;
      U.forEach((Ge) => {
        Ge || (ge = !1);
      }), ge && (R == null || R(), F(j.current), d && (x == null || x()), o && o());
    };
    return Sn.jsx(h2, { isPresent: Q, initial: !A.current || r ? void 0 : !1, custom: s, presenceAffectsLayout: c, mode: m, root: h, onExitComplete: Q ? void 0 : se, anchorX: p, anchorY: b, children: H }, $);
  }) });
}, Py = Y.createContext({ strict: !1 }), O0 = {
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
let _0 = !1;
function y2() {
  if (_0)
    return;
  const i = {};
  for (const s in O0)
    i[s] = {
      isEnabled: (r) => O0[s].some((o) => !!r[o])
    };
  ry(i), _0 = !0;
}
function jy() {
  return y2(), tN();
}
function v2(i) {
  const s = jy();
  for (const r in i)
    s[r] = {
      ...s[r],
      ...i[r]
    };
  ry(s);
}
const b2 = /* @__PURE__ */ new Set([
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
function vo(i) {
  return i.startsWith("while") || i.startsWith("drag") && i !== "draggable" || i.startsWith("layout") || i.startsWith("onTap") || i.startsWith("onPan") || i.startsWith("onLayout") || b2.has(i);
}
let zy = (i) => !vo(i);
function x2(i) {
  typeof i == "function" && (zy = (s) => s.startsWith("on") ? !vo(s) : i(s));
}
try {
  x2(require("@emotion/is-prop-valid").default);
} catch {
}
function S2(i, s, r) {
  const o = {};
  for (const c in i)
    c === "values" && typeof i.values == "object" || st(i[c]) || (zy(c) || r === !0 && vo(c) || !s && !vo(c) || // If trying to use native HTML drag events, forward drag listeners
    i.draggable && c.startsWith("onDrag")) && (o[c] = i[c]);
  return o;
}
const Do = /* @__PURE__ */ Y.createContext({});
function N2(i, s) {
  if (No(i)) {
    const { initial: r, animate: o } = i;
    return {
      initial: r === !1 || Ns(r) ? r : void 0,
      animate: Ns(o) ? o : void 0
    };
  }
  return i.inherit !== !1 ? s : {};
}
function D2(i) {
  const { initial: s, animate: r } = N2(i, Y.useContext(Do));
  return Y.useMemo(() => ({ initial: s, animate: r }), [U0(s), U0(r)]);
}
function U0(i) {
  return Array.isArray(i) ? i.join(" ") : i;
}
const gf = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function Ry(i, s, r) {
  for (const o in s)
    !st(s[o]) && !hy(o, r) && (i[o] = s[o]);
}
function E2({ transformTemplate: i }, s) {
  return Y.useMemo(() => {
    const r = gf();
    return mf(r, s, i), Object.assign({}, r.vars, r.style);
  }, [s]);
}
function T2(i, s) {
  const r = i.style || {}, o = {};
  return Ry(o, r, i), Object.assign(o, E2(i, s)), o;
}
function C2(i, s) {
  const r = {}, o = T2(i, s);
  return i.drag && i.dragListener !== !1 && (r.draggable = !1, o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none", o.touchAction = i.drag === !0 ? "none" : `pan-${i.drag === "x" ? "y" : "x"}`), i.tabIndex === void 0 && (i.onTap || i.onTapStart || i.whileTap) && (r.tabIndex = 0), r.style = o, r;
}
const Oy = () => ({
  ...gf(),
  attrs: {}
});
function V2(i, s, r, o) {
  const c = Y.useMemo(() => {
    const m = Oy();
    return gy(m, s, vy(o), i.transformTemplate, i.style), {
      ...m.attrs,
      style: { ...m.style }
    };
  }, [s]);
  if (i.style) {
    const m = {};
    Ry(m, i.style, i), c.style = { ...m, ...c.style };
  }
  return c;
}
const B2 = [
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
function yf(i) {
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
      !!(B2.indexOf(i) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(i))
    )
  );
}
function A2(i, s, r, { latestValues: o }, c, m = !1, d) {
  const b = (d ?? yf(i) ? V2 : C2)(s, o, c, i), h = S2(s, typeof i == "string", m), v = i !== Y.Fragment ? { ...h, ...b, ref: r } : {}, { children: x } = s, S = Y.useMemo(() => st(x) ? x.get() : x, [x]);
  return Y.createElement(i, {
    ...v,
    children: S
  });
}
function k2({ scrapeMotionValuesFromProps: i, createRenderState: s }, r, o, c) {
  return {
    latestValues: w2(r, o, c, i),
    renderState: s()
  };
}
function w2(i, s, r, o) {
  const c = {}, m = o(i, {});
  for (const S in m)
    c[S] = lo(m[S]);
  let { initial: d, animate: p } = i;
  const b = No(i), h = ly(i);
  s && h && !b && i.inherit !== !1 && (d === void 0 && (d = s.initial), p === void 0 && (p = s.animate));
  let v = r ? r.initial === !1 : !1;
  v = v || d === !1;
  const x = v ? p : d;
  if (x && typeof x != "boolean" && !So(x)) {
    const S = Array.isArray(x) ? x : [x];
    for (let C = 0; C < S.length; C++) {
      const A = lf(i, S[C]);
      if (A) {
        const { transitionEnd: j, transition: U, ...L } = A;
        for (const X in L) {
          let G = L[X];
          if (Array.isArray(G)) {
            const q = v ? G.length - 1 : 0;
            G = G[q];
          }
          G !== null && (c[X] = G);
        }
        for (const X in j)
          c[X] = j[X];
      }
    }
  }
  return c;
}
const _y = (i) => (s, r) => {
  const o = Y.useContext(Do), c = Y.useContext(bo), m = () => k2(i, s, o, c);
  return r ? m() : Xc(m);
}, M2 = /* @__PURE__ */ _y({
  scrapeMotionValuesFromProps: pf,
  createRenderState: gf
}), P2 = /* @__PURE__ */ _y({
  scrapeMotionValuesFromProps: by,
  createRenderState: Oy
}), j2 = Symbol.for("motionComponentSymbol");
function z2(i, s, r) {
  const o = Y.useRef(r);
  Y.useInsertionEffect(() => {
    o.current = r;
  });
  const c = Y.useRef(null);
  return Y.useCallback((m) => {
    var p;
    m && ((p = i.onMount) == null || p.call(i, m)), s && (m ? s.mount(m) : s.unmount());
    const d = o.current;
    if (typeof d == "function")
      if (m) {
        const b = d(m);
        typeof b == "function" && (c.current = b);
      } else c.current ? (c.current(), c.current = null) : d(m);
    else d && (d.current = m);
  }, [s]);
}
const Uy = Y.createContext({});
function ra(i) {
  return i && typeof i == "object" && Object.prototype.hasOwnProperty.call(i, "current");
}
function R2(i, s, r, o, c, m) {
  var G, q;
  const { visualElement: d } = Y.useContext(Do), p = Y.useContext(Py), b = Y.useContext(bo), h = Y.useContext(hf), v = h.reducedMotion, x = h.skipAnimations, S = Y.useRef(null), C = Y.useRef(!1);
  o = o || p.renderer, !S.current && o && (S.current = o(i, {
    visualState: s,
    parent: d,
    props: r,
    presenceContext: b,
    blockInitialAnimation: b ? b.initial === !1 : !1,
    reducedMotionConfig: v,
    skipAnimations: x,
    isSVG: m
  }), C.current && S.current && (S.current.manuallyAnimateOnMount = !0));
  const A = S.current, j = Y.useContext(Uy);
  A && !A.projection && c && (A.type === "html" || A.type === "svg") && O2(S.current, r, c, j);
  const U = Y.useRef(!1);
  Y.useInsertionEffect(() => {
    A && U.current && A.update(r, b);
  });
  const L = r[Zg], X = Y.useRef(!!L && typeof window < "u" && !((G = window.MotionHandoffIsComplete) != null && G.call(window, L)) && ((q = window.MotionHasOptimisedAnimation) == null ? void 0 : q.call(window, L)));
  return lg(() => {
    C.current = !0, A && (U.current = !0, window.MotionIsMounted = !0, A.updateFeatures(), A.scheduleRenderMicrotask(), X.current && A.animationState && A.animationState.animateChanges());
  }), Y.useEffect(() => {
    A && (!X.current && A.animationState && A.animationState.animateChanges(), X.current && (queueMicrotask(() => {
      var F;
      (F = window.MotionHandoffMarkAsComplete) == null || F.call(window, L);
    }), X.current = !1), A.enteringChildren = void 0);
  }), A;
}
function O2(i, s, r, o) {
  const { layoutId: c, layout: m, drag: d, dragConstraints: p, layoutScroll: b, layoutRoot: h, layoutAnchor: v, layoutCrossfade: x } = s;
  i.projection = new r(i.latestValues, s["data-framer-portal-id"] ? void 0 : Ly(i.parent)), i.projection.setOptions({
    layoutId: c,
    layout: m,
    alwaysMeasureLayout: !!d || p && ra(p),
    visualElement: i,
    /**
     * TODO: Update options in an effect. This could be tricky as it'll be too late
     * to update by the time layout animations run.
     * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
     * ensuring it gets called if there's no potential layout animations.
     *
     */
    animationType: typeof m == "string" ? m : "both",
    initialPromotionConfig: o,
    crossfade: x,
    layoutScroll: b,
    layoutRoot: h,
    layoutAnchor: v
  });
}
function Ly(i) {
  if (i)
    return i.options.allowProjection !== !1 ? i.projection : Ly(i.parent);
}
function lc(i, { forwardMotionProps: s = !1, type: r } = {}, o, c) {
  o && v2(o);
  const m = r ? r === "svg" : yf(i), d = m ? P2 : M2;
  function p(h, v) {
    let x;
    const S = {
      ...Y.useContext(hf),
      ...h,
      layoutId: _2(h)
    }, { isStatic: C } = S, A = D2(h), j = d(h, C);
    if (!C && typeof window < "u") {
      U2();
      const U = L2(S);
      x = U.MeasureLayout, A.visualElement = R2(i, j, S, c, U.ProjectionNode, m);
    }
    return Sn.jsxs(Do.Provider, { value: A, children: [x && A.visualElement ? Sn.jsx(x, { visualElement: A.visualElement, ...S }) : null, A2(i, h, z2(j, A.visualElement, v), j, C, s, m)] });
  }
  p.displayName = `motion.${typeof i == "string" ? i : `create(${i.displayName ?? i.name ?? ""})`}`;
  const b = Y.forwardRef(p);
  return b[j2] = i, b;
}
function _2({ layoutId: i }) {
  const s = Y.useContext(Yc).id;
  return s && i !== void 0 ? s + "-" + i : i;
}
function U2(i, s) {
  Y.useContext(Py).strict;
}
function L2(i) {
  const s = jy(), { drag: r, layout: o } = s;
  if (!r && !o)
    return {};
  const c = { ...r, ...o };
  return {
    MeasureLayout: r != null && r.isEnabled(i) || o != null && o.isEnabled(i) ? c.MeasureLayout : void 0,
    ProjectionNode: c.ProjectionNode
  };
}
function H2(i, s) {
  if (typeof Proxy > "u")
    return lc;
  const r = /* @__PURE__ */ new Map(), o = (m, d) => lc(m, d, i, s), c = (m, d) => o(m, d);
  return new Proxy(c, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (m, d) => d === "create" ? o : (r.has(d) || r.set(d, lc(d, void 0, i, s)), r.get(d))
  });
}
const q2 = (i, s) => s.isSVG ?? yf(i) ? new vN(s) : new dN(s, {
  allowProjection: i !== Y.Fragment
});
class G2 extends $n {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(s) {
    super(s), s.animationState || (s.animationState = DN(s));
  }
  updateAnimationControlsSubscription() {
    const { animate: s } = this.node.getProps();
    So(s) && (this.unmountControls = s.subscribe(this.node));
  }
  /**
   * Subscribe any provided AnimationControls to the component's VisualElement
   */
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: s } = this.node.getProps(), { animate: r } = this.node.prevProps || {};
    s !== r && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var s;
    this.node.animationState.reset(), (s = this.unmountControls) == null || s.call(this);
  }
}
let Y2 = 0;
class X2 extends $n {
  constructor() {
    super(...arguments), this.id = Y2++, this.isExitComplete = !1;
  }
  update() {
    var m;
    if (!this.node.presenceContext)
      return;
    const { isPresent: s, onExitComplete: r } = this.node.presenceContext, { isPresent: o } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || s === o)
      return;
    if (s && o === !1) {
      if (this.isExitComplete) {
        const { initial: d, custom: p } = this.node.getProps();
        if (typeof d == "string" || typeof d == "object" && d !== null && !Array.isArray(d)) {
          const b = Ni(this.node, d, p);
          if (b) {
            const { transition: h, transitionEnd: v, ...x } = b;
            for (const S in x)
              (m = this.node.getValue(S)) == null || m.jump(x[S]);
          }
        }
        this.node.animationState.reset(), this.node.animationState.animateChanges();
      } else
        this.node.animationState.setActive("exit", !1);
      this.isExitComplete = !1;
      return;
    }
    const c = this.node.animationState.setActive("exit", !s);
    r && !s && c.then(() => {
      this.isExitComplete = !0, r(this.id);
    });
  }
  mount() {
    const { register: s, onExitComplete: r } = this.node.presenceContext || {};
    r && r(this.id), s && (this.unmount = s(this.id));
  }
  unmount() {
  }
}
const K2 = {
  animation: {
    Feature: G2
  },
  exit: {
    Feature: X2
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
const Q2 = (i) => (s) => uf(s) && i(s, Bs(s));
function bs(i, s, r, o) {
  return Ds(i, s, Q2(r), o);
}
const Hy = ({ current: i }) => i ? i.ownerDocument.defaultView : null, L0 = (i, s) => Math.abs(i - s);
function Z2(i, s) {
  const r = L0(i.x, s.x), o = L0(i.y, s.y);
  return Math.sqrt(r ** 2 + o ** 2);
}
const H0 = /* @__PURE__ */ new Set(["auto", "scroll"]);
class qy {
  constructor(s, r, { transformPagePoint: o, contextWindow: c = window, dragSnapToOrigin: m = !1, distanceThreshold: d = 3, element: p } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.lastRawMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.scrollPositions = /* @__PURE__ */ new Map(), this.removeScrollListeners = null, this.onElementScroll = (C) => {
      this.handleScroll(C.target);
    }, this.onWindowScroll = () => {
      this.handleScroll(window);
    }, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      this.lastRawMoveEventInfo && (this.lastMoveEventInfo = $l(this.lastRawMoveEventInfo, this.transformPagePoint));
      const C = oc(this.lastMoveEventInfo, this.history), A = this.startEvent !== null, j = Z2(C.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
      if (!A && !j)
        return;
      const { point: U } = C, { timestamp: L } = at;
      this.history.push({ ...U, timestamp: L });
      const { onStart: X, onMove: G } = this.handlers;
      A || (X && X(this.lastMoveEvent, C), this.startEvent = this.lastMoveEvent), G && G(this.lastMoveEvent, C);
    }, this.handlePointerMove = (C, A) => {
      this.lastMoveEvent = C, this.lastRawMoveEventInfo = A, this.lastMoveEventInfo = $l(A, this.transformPagePoint), we.update(this.updatePoint, !0);
    }, this.handlePointerUp = (C, A) => {
      this.end();
      const { onEnd: j, onSessionEnd: U, resumeAnimation: L } = this.handlers;
      if ((this.dragSnapToOrigin || !this.startEvent) && L && L(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const X = oc(C.type === "pointercancel" ? this.lastMoveEventInfo : $l(A, this.transformPagePoint), this.history);
      this.startEvent && j && j(C, X), U && U(C, X);
    }, !uf(s))
      return;
    this.dragSnapToOrigin = m, this.handlers = r, this.transformPagePoint = o, this.distanceThreshold = d, this.contextWindow = c || window;
    const b = Bs(s), h = $l(b, this.transformPagePoint), { point: v } = h, { timestamp: x } = at;
    this.history = [{ ...v, timestamp: x }];
    const { onSessionStart: S } = r;
    S && S(s, oc(h, this.history)), this.removeListeners = Ts(bs(this.contextWindow, "pointermove", this.handlePointerMove), bs(this.contextWindow, "pointerup", this.handlePointerUp), bs(this.contextWindow, "pointercancel", this.handlePointerUp)), p && this.startScrollTracking(p);
  }
  /**
   * Start tracking scroll on ancestors and window.
   */
  startScrollTracking(s) {
    let r = s.parentElement;
    for (; r; ) {
      const o = getComputedStyle(r);
      (H0.has(o.overflowX) || H0.has(o.overflowY)) && this.scrollPositions.set(r, {
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
  handleScroll(s) {
    const r = this.scrollPositions.get(s);
    if (!r)
      return;
    const o = s === window, c = o ? { x: window.scrollX, y: window.scrollY } : {
      x: s.scrollLeft,
      y: s.scrollTop
    }, m = { x: c.x - r.x, y: c.y - r.y };
    m.x === 0 && m.y === 0 || (o ? this.lastMoveEventInfo && (this.lastMoveEventInfo.point.x += m.x, this.lastMoveEventInfo.point.y += m.y) : this.history.length > 0 && (this.history[0].x -= m.x, this.history[0].y -= m.y), this.scrollPositions.set(s, c), we.update(this.updatePoint, !0));
  }
  updateHandlers(s) {
    this.handlers = s;
  }
  end() {
    this.removeListeners && this.removeListeners(), this.removeScrollListeners && this.removeScrollListeners(), this.scrollPositions.clear(), Jn(this.updatePoint);
  }
}
function $l(i, s) {
  return s ? { point: s(i.point) } : i;
}
function q0(i, s) {
  return { x: i.x - s.x, y: i.y - s.y };
}
function oc({ point: i }, s) {
  return {
    point: i,
    delta: q0(i, Gy(s)),
    offset: q0(i, F2(s)),
    velocity: J2(s, 0.1)
  };
}
function F2(i) {
  return i[0];
}
function Gy(i) {
  return i[i.length - 1];
}
function J2(i, s) {
  if (i.length < 2)
    return { x: 0, y: 0 };
  let r = i.length - 1, o = null;
  const c = Gy(i);
  for (; r >= 0 && (o = i[r], !(c.timestamp - o.timestamp > /* @__PURE__ */ vt(s))); )
    r--;
  if (!o)
    return { x: 0, y: 0 };
  o === i[0] && i.length > 2 && c.timestamp - o.timestamp > /* @__PURE__ */ vt(s) * 2 && (o = i[1]);
  const m = /* @__PURE__ */ Ut(c.timestamp - o.timestamp);
  if (m === 0)
    return { x: 0, y: 0 };
  const d = {
    x: (c.x - o.x) / m,
    y: (c.y - o.y) / m
  };
  return d.x === 1 / 0 && (d.x = 0), d.y === 1 / 0 && (d.y = 0), d;
}
function $2(i, { min: s, max: r }, o) {
  return s !== void 0 && i < s ? i = o ? ke(s, i, o.min) : Math.max(i, s) : r !== void 0 && i > r && (i = o ? ke(r, i, o.max) : Math.min(i, r)), i;
}
function G0(i, s, r) {
  return {
    min: s !== void 0 ? i.min + s : void 0,
    max: r !== void 0 ? i.max + r - (i.max - i.min) : void 0
  };
}
function W2(i, { top: s, left: r, bottom: o, right: c }) {
  return {
    x: G0(i.x, r, c),
    y: G0(i.y, s, o)
  };
}
function Y0(i, s) {
  let r = s.min - i.min, o = s.max - i.max;
  return s.max - s.min < i.max - i.min && ([r, o] = [o, r]), { min: r, max: o };
}
function I2(i, s) {
  return {
    x: Y0(i.x, s.x),
    y: Y0(i.y, s.y)
  };
}
function eD(i, s) {
  let r = 0.5;
  const o = ct(i), c = ct(s);
  return c > o ? r = /* @__PURE__ */ xs(s.min, s.max - o, i.min) : o > c && (r = /* @__PURE__ */ xs(i.min, i.max - c, s.min)), en(0, 1, r);
}
function tD(i, s) {
  const r = {};
  return s.min !== void 0 && (r.min = s.min - i.min), s.max !== void 0 && (r.max = s.max - i.min), r;
}
const _c = 0.35;
function nD(i = _c) {
  return i === !1 ? i = 0 : i === !0 && (i = _c), {
    x: X0(i, "left", "right"),
    y: X0(i, "top", "bottom")
  };
}
function X0(i, s, r) {
  return {
    min: K0(i, s),
    max: K0(i, r)
  };
}
function K0(i, s) {
  return typeof i == "number" ? i : i[s] || 0;
}
const iD = /* @__PURE__ */ new WeakMap();
class aD {
  constructor(s) {
    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = Je(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = s;
  }
  start(s, { snapToCursor: r = !1, distanceThreshold: o } = {}) {
    const { presenceContext: c } = this.visualElement;
    if (c && c.isPresent === !1)
      return;
    const m = (x) => {
      r && this.snapToCursor(Bs(x).point), this.stopAnimation();
    }, d = (x, S) => {
      const { drag: C, dragPropagation: A, onDragStart: j } = this.getProps();
      if (C && !A && (this.openDragLock && this.openDragLock(), this.openDragLock = wS(C), !this.openDragLock))
        return;
      this.latestPointerEvent = x, this.latestPanInfo = S, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), $t((L) => {
        let X = this.getAxisMotionValue(L).get() || 0;
        if (It.test(X)) {
          const { projection: G } = this.visualElement;
          if (G && G.layout) {
            const q = G.layout.layoutBox[L];
            q && (X = ct(q) * (parseFloat(X) / 100));
          }
        }
        this.originPoint[L] = X;
      }), j && we.update(() => j(x, S), !1, !0), Bc(this.visualElement, "transform");
      const { animationState: U } = this.visualElement;
      U && U.setActive("whileDrag", !0);
    }, p = (x, S) => {
      this.latestPointerEvent = x, this.latestPanInfo = S;
      const { dragPropagation: C, dragDirectionLock: A, onDirectionLock: j, onDrag: U } = this.getProps();
      if (!C && !this.openDragLock)
        return;
      const { offset: L } = S;
      if (A && this.currentDirection === null) {
        this.currentDirection = lD(L), this.currentDirection !== null && j && j(this.currentDirection);
        return;
      }
      this.updateAxis("x", S.point, L), this.updateAxis("y", S.point, L), this.visualElement.render(), U && we.update(() => U(x, S), !1, !0);
    }, b = (x, S) => {
      this.latestPointerEvent = x, this.latestPanInfo = S, this.stop(x, S), this.latestPointerEvent = null, this.latestPanInfo = null;
    }, h = () => {
      const { dragSnapToOrigin: x } = this.getProps();
      (x || this.constraints) && this.startAnimation({ x: 0, y: 0 });
    }, { dragSnapToOrigin: v } = this.getProps();
    this.panSession = new qy(s, {
      onSessionStart: m,
      onStart: d,
      onMove: p,
      onSessionEnd: b,
      resumeAnimation: h
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: v,
      distanceThreshold: o,
      contextWindow: Hy(this.visualElement),
      element: this.visualElement.current
    });
  }
  /**
   * @internal
   */
  stop(s, r) {
    const o = s || this.latestPointerEvent, c = r || this.latestPanInfo, m = this.isDragging;
    if (this.cancel(), !m || !c || !o)
      return;
    const { velocity: d } = c;
    this.startAnimation(d);
    const { onDragEnd: p } = this.getProps();
    p && we.postRender(() => p(o, c));
  }
  /**
   * @internal
   */
  cancel() {
    this.isDragging = !1;
    const { projection: s, animationState: r } = this.visualElement;
    s && (s.isAnimationBlocked = !1), this.endPanSession();
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
  updateAxis(s, r, o) {
    const { drag: c } = this.getProps();
    if (!o || !Wl(s, c, this.currentDirection))
      return;
    const m = this.getAxisMotionValue(s);
    let d = this.originPoint[s] + o[s];
    this.constraints && this.constraints[s] && (d = $2(d, this.constraints[s], this.elastic[s])), m.set(d);
  }
  resolveConstraints() {
    var m;
    const { dragConstraints: s, dragElastic: r } = this.getProps(), o = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (m = this.visualElement.projection) == null ? void 0 : m.layout, c = this.constraints;
    s && ra(s) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : s && o ? this.constraints = W2(o.layoutBox, s) : this.constraints = !1, this.elastic = nD(r), c !== this.constraints && !ra(s) && o && this.constraints && !this.hasMutatedConstraints && $t((d) => {
      this.constraints !== !1 && this.getAxisMotionValue(d) && (this.constraints[d] = tD(o.layoutBox[d], this.constraints[d]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: s, onMeasureDragConstraints: r } = this.getProps();
    if (!s || !ra(s))
      return !1;
    const o = s.current;
    Di(o !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.", "drag-constraints-ref");
    const { projection: c } = this.visualElement;
    if (!c || !c.layout)
      return !1;
    c.root && (c.root.scroll = void 0, c.root.updateScroll());
    const m = lN(o, c.root, this.visualElement.getTransformPagePoint());
    let d = I2(c.layout.layoutBox, m);
    if (r) {
      const p = r(iN(d));
      this.hasMutatedConstraints = !!p, p && (d = cy(p));
    }
    return d;
  }
  startAnimation(s) {
    const { drag: r, dragMomentum: o, dragElastic: c, dragTransition: m, dragSnapToOrigin: d, onDragTransitionEnd: p } = this.getProps(), b = this.constraints || {}, h = $t((v) => {
      if (!Wl(v, r, this.currentDirection))
        return;
      let x = b && b[v] || {};
      (d === !0 || d === v) && (x = { min: 0, max: 0 });
      const S = c ? 200 : 1e6, C = c ? 40 : 1e7, A = {
        type: "inertia",
        velocity: o ? s[v] : 0,
        bounceStiffness: S,
        bounceDamping: C,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...m,
        ...x
      };
      return this.startAxisValueAnimation(v, A);
    });
    return Promise.all(h).then(p);
  }
  startAxisValueAnimation(s, r) {
    const o = this.getAxisMotionValue(s);
    return Bc(this.visualElement, s), o.start(sf(s, o, 0, r, this.visualElement, !1));
  }
  stopAnimation() {
    $t((s) => this.getAxisMotionValue(s).stop());
  }
  /**
   * Drag works differently depending on which props are provided.
   *
   * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
   * - Otherwise, we apply the delta to the x/y motion values.
   */
  getAxisMotionValue(s) {
    const r = `_drag${s.toUpperCase()}`, c = this.visualElement.getProps()[r];
    return c || this.visualElement.getValue(s, this.visualElement.latestValues[s] ?? 0);
  }
  snapToCursor(s) {
    $t((r) => {
      const { drag: o } = this.getProps();
      if (!Wl(r, o, this.currentDirection))
        return;
      const { projection: c } = this.visualElement, m = this.getAxisMotionValue(r);
      if (c && c.layout) {
        const { min: d, max: p } = c.layout.layoutBox[r], b = m.get() || 0;
        m.set(s[r] - ke(d, p, 0.5) + b);
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
    const { drag: s, dragConstraints: r } = this.getProps(), { projection: o } = this.visualElement;
    if (!ra(r) || !o || !this.constraints)
      return;
    this.stopAnimation();
    const c = { x: 0, y: 0 };
    $t((d) => {
      const p = this.getAxisMotionValue(d);
      if (p && this.constraints !== !1) {
        const b = p.get();
        c[d] = eD({ min: b, max: b }, this.constraints[d]);
      }
    });
    const { transformTemplate: m } = this.visualElement.getProps();
    this.visualElement.current.style.transform = m ? m({}, "") : "none", o.root && o.root.updateScroll(), o.updateLayout(), this.constraints = !1, this.resolveConstraints(), $t((d) => {
      if (!Wl(d, s, null))
        return;
      const p = this.getAxisMotionValue(d), { min: b, max: h } = this.constraints[d];
      p.set(ke(b, h, c[d]));
    }), this.visualElement.render();
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    iD.set(this.visualElement, this);
    const s = this.visualElement.current, r = bs(s, "pointerdown", (h) => {
      const { drag: v, dragListener: x = !0 } = this.getProps(), S = h.target, C = S !== s && OS(S);
      v && x && !C && this.start(h);
    });
    let o;
    const c = () => {
      const { dragConstraints: h } = this.getProps();
      ra(h) && h.current && (this.constraints = this.resolveRefConstraints(), o || (o = sD(s, h.current, () => this.scalePositionWithinConstraints())));
    }, { projection: m } = this.visualElement, d = m.addEventListener("measure", c);
    m && !m.layout && (m.root && m.root.updateScroll(), m.updateLayout()), we.read(c);
    const p = Ds(window, "resize", () => this.scalePositionWithinConstraints()), b = m.addEventListener("didUpdate", (({ delta: h, hasLayoutChanged: v }) => {
      this.isDragging && v && ($t((x) => {
        const S = this.getAxisMotionValue(x);
        S && (this.originPoint[x] += h[x].translate, S.set(S.get() + h[x].translate));
      }), this.visualElement.render());
    }));
    return () => {
      p(), r(), d(), b && b(), o && o();
    };
  }
  getProps() {
    const s = this.visualElement.getProps(), { drag: r = !1, dragDirectionLock: o = !1, dragPropagation: c = !1, dragConstraints: m = !1, dragElastic: d = _c, dragMomentum: p = !0 } = s;
    return {
      ...s,
      drag: r,
      dragDirectionLock: o,
      dragPropagation: c,
      dragConstraints: m,
      dragElastic: d,
      dragMomentum: p
    };
  }
}
function Q0(i) {
  let s = !0;
  return () => {
    if (s) {
      s = !1;
      return;
    }
    i();
  };
}
function sD(i, s, r) {
  const o = Ih(i, Q0(r)), c = Ih(s, Q0(r));
  return () => {
    o(), c();
  };
}
function Wl(i, s, r) {
  return (s === !0 || s === i) && (r === null || r === i);
}
function lD(i, s = 10) {
  let r = null;
  return Math.abs(i.y) > s ? r = "y" : Math.abs(i.x) > s && (r = "x"), r;
}
class oD extends $n {
  constructor(s) {
    super(s), this.removeGroupControls = Lt, this.removeListeners = Lt, this.controls = new aD(s);
  }
  mount() {
    const { dragControls: s } = this.node.getProps();
    s && (this.removeGroupControls = s.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || Lt;
  }
  update() {
    const { dragControls: s } = this.node.getProps(), { dragControls: r } = this.node.prevProps || {};
    s !== r && (this.removeGroupControls(), s && (this.removeGroupControls = s.subscribe(this.controls)));
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners(), this.controls.isDragging || this.controls.endPanSession();
  }
}
const rc = (i) => (s, r) => {
  i && we.update(() => i(s, r), !1, !0);
};
class rD extends $n {
  constructor() {
    super(...arguments), this.removePointerDownListener = Lt;
  }
  onPointerDown(s) {
    this.session = new qy(s, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Hy(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: s, onPanStart: r, onPan: o, onPanEnd: c } = this.node.getProps();
    return {
      onSessionStart: rc(s),
      onStart: rc(r),
      onMove: rc(o),
      onEnd: (m, d) => {
        delete this.session, c && we.postRender(() => c(m, d));
      }
    };
  }
  mount() {
    this.removePointerDownListener = bs(this.node.current, "pointerdown", (s) => this.onPointerDown(s));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
let uc = !1;
class uD extends Y.Component {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: s, layoutGroup: r, switchLayoutGroup: o, layoutId: c } = this.props, { projection: m } = s;
    m && (r.group && r.group.add(m), o && o.register && c && o.register(m), uc && m.root.didUpdate(), m.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), m.setOptions({
      ...m.options,
      layoutDependency: this.props.layoutDependency,
      onExitComplete: () => this.safeToRemove()
    })), oo.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(s) {
    const { layoutDependency: r, visualElement: o, drag: c, isPresent: m } = this.props, { projection: d } = o;
    return d && (d.isPresent = m, s.layoutDependency !== r && d.setOptions({
      ...d.options,
      layoutDependency: r
    }), uc = !0, c || s.layoutDependency !== r || r === void 0 || s.isPresent !== m ? d.willUpdate() : this.safeToRemove(), s.isPresent !== m && (m ? d.promote() : d.relegate() || we.postRender(() => {
      const p = d.getStack();
      (!p || !p.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { visualElement: s, layoutAnchor: r } = this.props, { projection: o } = s;
    o && (o.options.layoutAnchor = r, o.root.didUpdate(), rf.postRender(() => {
      !o.currentAnimation && o.isLead() && this.safeToRemove();
    }));
  }
  componentWillUnmount() {
    const { visualElement: s, layoutGroup: r, switchLayoutGroup: o } = this.props, { projection: c } = s;
    uc = !0, c && (c.scheduleCheckAfterUnmount(), r && r.group && r.group.remove(c), o && o.deregister && o.deregister(c));
  }
  safeToRemove() {
    const { safeToRemove: s } = this.props;
    s && s();
  }
  render() {
    return null;
  }
}
function Yy(i) {
  const [s, r] = My(), o = Y.useContext(Yc);
  return Sn.jsx(uD, { ...i, layoutGroup: o, switchLayoutGroup: Y.useContext(Uy), isPresent: s, safeToRemove: r });
}
const cD = {
  pan: {
    Feature: rD
  },
  drag: {
    Feature: oD,
    ProjectionNode: wy,
    MeasureLayout: Yy
  }
};
function Z0(i, s, r) {
  const { props: o } = i;
  i.animationState && o.whileHover && i.animationState.setActive("whileHover", r === "Start");
  const c = "onHover" + r, m = o[c];
  m && we.postRender(() => m(s, Bs(s)));
}
class fD extends $n {
  mount() {
    const { current: s } = this.node;
    s && (this.unmount = PS(s, (r, o) => (Z0(this.node, o, "Start"), (c) => Z0(this.node, c, "End"))));
  }
  unmount() {
  }
}
class dD extends $n {
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
    this.unmount = Ts(Ds(this.node.current, "focus", () => this.onFocus()), Ds(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
function F0(i, s, r) {
  const { props: o } = i;
  if (i.current instanceof HTMLButtonElement && i.current.disabled)
    return;
  i.animationState && o.whileTap && i.animationState.setActive("whileTap", r === "Start");
  const c = "onTap" + (r === "End" ? "" : r), m = o[c];
  m && we.postRender(() => m(s, Bs(s)));
}
class mD extends $n {
  mount() {
    const { current: s } = this.node;
    if (!s)
      return;
    const { globalTapTarget: r, propagate: o } = this.node.props;
    this.unmount = US(s, (c, m) => (F0(this.node, m, "Start"), (d, { success: p }) => F0(this.node, d, p ? "End" : "Cancel")), {
      useGlobalTarget: r,
      stopPropagation: (o == null ? void 0 : o.tap) === !1
    });
  }
  unmount() {
  }
}
const Uc = /* @__PURE__ */ new WeakMap(), cc = /* @__PURE__ */ new WeakMap(), pD = (i) => {
  const s = Uc.get(i.target);
  s && s(i);
}, hD = (i) => {
  i.forEach(pD);
};
function gD({ root: i, ...s }) {
  const r = i || document;
  cc.has(r) || cc.set(r, {});
  const o = cc.get(r), c = JSON.stringify(s);
  return o[c] || (o[c] = new IntersectionObserver(hD, { root: i, ...s })), o[c];
}
function yD(i, s, r) {
  const o = gD(s);
  return Uc.set(i, r), o.observe(i), () => {
    Uc.delete(i), o.unobserve(i);
  };
}
const vD = {
  some: 0,
  all: 1
};
class bD extends $n {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    var b;
    (b = this.stopObserver) == null || b.call(this);
    const { viewport: s = {} } = this.node.getProps(), { root: r, margin: o, amount: c = "some", once: m } = s, d = {
      root: r ? r.current : void 0,
      rootMargin: o,
      threshold: typeof c == "number" ? c : vD[c]
    }, p = (h) => {
      const { isIntersecting: v } = h;
      if (this.isInView === v || (this.isInView = v, m && !v && this.hasEnteredView))
        return;
      v && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", v);
      const { onViewportEnter: x, onViewportLeave: S } = this.node.getProps(), C = v ? x : S;
      C && C(h);
    };
    this.stopObserver = yD(this.node.current, d, p);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: s, prevProps: r } = this.node;
    ["amount", "margin", "root"].some(xD(s, r)) && this.startObserver();
  }
  unmount() {
    var s;
    (s = this.stopObserver) == null || s.call(this), this.hasEnteredView = !1, this.isInView = !1;
  }
}
function xD({ viewport: i = {} }, { viewport: s = {} } = {}) {
  return (r) => i[r] !== s[r];
}
const SD = {
  inView: {
    Feature: bD
  },
  tap: {
    Feature: mD
  },
  focus: {
    Feature: dD
  },
  hover: {
    Feature: fD
  }
}, ND = {
  layout: {
    ProjectionNode: wy,
    MeasureLayout: Yy
  }
}, DD = {
  ...K2,
  ...SD,
  ...cD,
  ...ND
}, J0 = /* @__PURE__ */ H2(DD, q2);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ED = (i) => i.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Xy = (...i) => i.filter((s, r, o) => !!s && s.trim() !== "" && o.indexOf(s) === r).join(" ").trim();
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var TD = {
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
const CD = Y.forwardRef(
  ({
    color: i = "currentColor",
    size: s = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: c = "",
    children: m,
    iconNode: d,
    ...p
  }, b) => Y.createElement(
    "svg",
    {
      ref: b,
      ...TD,
      width: s,
      height: s,
      stroke: i,
      strokeWidth: o ? Number(r) * 24 / Number(s) : r,
      className: Xy("lucide", c),
      ...p
    },
    [
      ...d.map(([h, v]) => Y.createElement(h, v)),
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
const Me = (i, s) => {
  const r = Y.forwardRef(
    ({ className: o, ...c }, m) => Y.createElement(CD, {
      ref: m,
      iconNode: s,
      className: Xy(`lucide-${ED(i)}`, o),
      ...c
    })
  );
  return r.displayName = `${i}`, r;
};
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const VD = [
  ["path", { d: "M7 7h10v10", key: "1tivn9" }],
  ["path", { d: "M7 17 17 7", key: "1vkiza" }]
], fc = Me("ArrowUpRight", VD);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const BD = [
  [
    "path",
    {
      d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
      key: "1yiouv"
    }
  ],
  ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }]
], $0 = Me("Award", BD);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const AD = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
], hs = Me("Calendar", AD);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kD = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], wD = Me("ChevronDown", kD);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const MD = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], PD = Me("ChevronLeft", MD);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jD = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], zD = Me("ChevronRight", jD);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const RD = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
], dc = Me("CircleAlert", RD);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const OD = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
], _D = Me("CircleCheck", OD);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const UD = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }]
], W0 = Me("CircleX", UD);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const LD = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]
], I0 = Me("Clock", LD);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const HD = [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "7 10 12 15 17 10", key: "2ggqvy" }],
  ["line", { x1: "12", x2: "12", y1: "15", y2: "3", key: "1vk2je" }]
], eg = Me("Download", HD);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qD = [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
], Lc = Me("ExternalLink", qD);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const GD = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
], mc = Me("FileText", GD);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const YD = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }],
  ["path", { d: "M2 12h20", key: "9i4pu4" }]
], XD = Me("Globe", YD);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const KD = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]], QD = Me("LoaderCircle", KD);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ZD = [
  ["polyline", { points: "15 3 21 3 21 9", key: "mznyad" }],
  ["polyline", { points: "9 21 3 21 3 15", key: "1avn1i" }],
  ["line", { x1: "21", x2: "14", y1: "3", y2: "10", key: "ota7mn" }],
  ["line", { x1: "3", x2: "10", y1: "21", y2: "14", key: "1atl0r" }]
], FD = Me("Maximize2", ZD);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const JD = [
  ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }]
], $D = Me("MessageSquare", JD);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const WD = [
  ["polyline", { points: "4 14 10 14 10 20", key: "11kfnr" }],
  ["polyline", { points: "20 10 14 10 14 4", key: "rlmsce" }],
  ["line", { x1: "14", x2: "21", y1: "10", y2: "3", key: "o5lafz" }],
  ["line", { x1: "3", x2: "10", y1: "21", y2: "14", key: "1atl0r" }]
], ID = Me("Minimize2", WD);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const eE = [["polygon", { points: "6 3 20 12 6 21 6 3", key: "1oa8hb" }]], tE = Me("Play", eE);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nE = [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
], tg = Me("RotateCcw", nE);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const iE = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
], aE = Me("Search", iE);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sE = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
], Hc = Me("ShieldCheck", sE);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lE = [
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
], Il = Me("Sparkles", lE);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oE = [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
], rE = Me("User", oE);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uE = [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75", key: "1da9ce" }]
], cE = Me("Users", uE);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fE = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], dE = Me("X", fE), mE = (i) => {
  if (!i) return "";
  try {
    const s = i.split("-");
    if (s.length === 3) {
      const r = parseInt(s[0], 10), o = parseInt(s[1], 10) - 1, c = parseInt(s[2], 10), m = new Date(r, o, c);
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
}, pE = () => {
  var G;
  const [i, s] = Y.useState(""), [r, o] = Y.useState(""), [c, m] = Y.useState(!1), [d, p] = Y.useState(null), [b, h] = Y.useState(null), [v, x] = Y.useState(null), [S, C] = Y.useState("dynamic"), [A, j] = Y.useState(!1);
  Y.useEffect(() => {
    const q = (F) => {
      F.key === "Escape" && A && j(!1);
    };
    return window.addEventListener("keydown", q), () => window.removeEventListener("keydown", q);
  }, [A]);
  const U = async (q) => {
    if (q.preventDefault(), c) return;
    p(null), h(null);
    const F = i.trim(), ie = r.trim();
    if (!F || !ie) {
      p("Please enter both your Full Name and Certificate ID.");
      return;
    }
    m(!0), x(null);
    const R = `certificate_id=${encodeURIComponent(ie)}&full_name=${encodeURIComponent(F)}`;
    try {
      let H;
      try {
        H = await fetch(`/wp-json/certificates/v1/verify?${R}`, {
          method: "GET",
          headers: {
            Accept: "application/json"
          }
        });
      } catch {
        H = await fetch(`https://chelsongordon.com/wp-json/certificates/v1/verify?${R}`, {
          method: "GET",
          headers: {
            Accept: "application/json"
          }
        });
      }
      const $ = await H.json();
      $ && $.verified && $.certificate ? x({
        verified: !0,
        certificate: $.certificate
      }) : x({
        verified: !1,
        message: ($ == null ? void 0 : $.message) || "No matching certificate was found for the provided details."
      });
    } catch (H) {
      console.error("Certificate verification request failed:", H), h("Unable to connect to the verification server. Please check your network connection and try again.");
    } finally {
      m(!1);
    }
  }, L = () => {
    s(""), o(""), p(null), h(null), x(null);
  }, X = (q) => {
    const F = (q || "").toLowerCase();
    return F === "valid" ? /* @__PURE__ */ y.jsxDEV("span", { className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-200/80", children: [
      /* @__PURE__ */ y.jsxDEV(_D, { className: "w-3.5 h-3.5 text-emerald-600 shrink-0" }, void 0, !1, {
        fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
        lineNumber: 163,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ y.jsxDEV("span", { children: "Valid Certificate" }, void 0, !1, {
        fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
        lineNumber: 164,
        columnNumber: 11
      }, void 0)
    ] }, void 0, !0, {
      fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
      lineNumber: 162,
      columnNumber: 9
    }, void 0) : F === "revoked" ? /* @__PURE__ */ y.jsxDEV("span", { className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-rose-100 text-rose-800 border border-rose-200/80", children: [
      /* @__PURE__ */ y.jsxDEV(W0, { className: "w-3.5 h-3.5 text-rose-600 shrink-0" }, void 0, !1, {
        fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
        lineNumber: 172,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ y.jsxDEV("span", { children: "Certificate Revoked" }, void 0, !1, {
        fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
        lineNumber: 173,
        columnNumber: 11
      }, void 0)
    ] }, void 0, !0, {
      fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
      lineNumber: 171,
      columnNumber: 9
    }, void 0) : F === "expired" ? /* @__PURE__ */ y.jsxDEV("span", { className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800 border border-amber-200/80", children: [
      /* @__PURE__ */ y.jsxDEV(dc, { className: "w-3.5 h-3.5 text-amber-600 shrink-0" }, void 0, !1, {
        fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
        lineNumber: 181,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ y.jsxDEV("span", { children: "Certificate Expired" }, void 0, !1, {
        fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
        lineNumber: 182,
        columnNumber: 11
      }, void 0)
    ] }, void 0, !0, {
      fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
      lineNumber: 180,
      columnNumber: 9
    }, void 0) : /* @__PURE__ */ y.jsxDEV("span", { className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-800 border border-slate-200", children: [
      /* @__PURE__ */ y.jsxDEV(Hc, { className: "w-3.5 h-3.5 text-slate-500 shrink-0" }, void 0, !1, {
        fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
        lineNumber: 190,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ y.jsxDEV("span", { className: "capitalize", children: q }, void 0, !1, {
        fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
        lineNumber: 191,
        columnNumber: 9
      }, void 0)
    ] }, void 0, !0, {
      fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
      lineNumber: 189,
      columnNumber: 7
    }, void 0);
  };
  return /* @__PURE__ */ y.jsxDEV(
    "div",
    {
      id: "certificate-verification-section",
      className: "mt-8 sm:mt-12 bg-white rounded-[26px] sm:rounded-[28px] p-6 sm:p-8 lg:p-10 border border-slate-200/80 shadow-sm relative overflow-hidden scroll-mt-28 sm:scroll-mt-36",
      children: [
        /* @__PURE__ */ y.jsxDEV(
          "div",
          {
            className: "absolute -top-24 -right-24 w-80 h-80 bg-[#0072CE]/8 rounded-full blur-3xl pointer-events-none",
            "aria-hidden": "true"
          },
          void 0,
          !1,
          {
            fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
            lineNumber: 202,
            columnNumber: 7
          },
          void 0
        ),
        /* @__PURE__ */ y.jsxDEV("div", { className: "mb-6 sm:mb-8 pb-5 sm:pb-6 border-b border-slate-100 relative z-10", children: [
          /* @__PURE__ */ y.jsxDEV("div", { className: "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0072CE]/10 text-[#0072CE] text-xs font-bold tracking-wider uppercase mb-3", children: [
            /* @__PURE__ */ y.jsxDEV(Hc, { className: "w-3.5 h-3.5 text-[#0072CE]" }, void 0, !1, {
              fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
              lineNumber: 210,
              columnNumber: 11
            }, void 0),
            /* @__PURE__ */ y.jsxDEV("span", { children: "Certificate Verification" }, void 0, !1, {
              fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
              lineNumber: 211,
              columnNumber: 11
            }, void 0)
          ] }, void 0, !0, {
            fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
            lineNumber: 209,
            columnNumber: 9
          }, void 0),
          /* @__PURE__ */ y.jsxDEV("h2", { className: "text-2xl sm:text-3xl lg:text-[32px] font-black text-[#042F61] tracking-tight leading-tight", children: "Verify your Certificate" }, void 0, !1, {
            fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
            lineNumber: 213,
            columnNumber: 9
          }, void 0),
          /* @__PURE__ */ y.jsxDEV("p", { className: "text-sm sm:text-base text-slate-600 max-w-2xl mt-2 leading-relaxed", children: "Verify the authenticity of a Professional Development Certificate by entering the participant's Full Name and unique Certificate ID." }, void 0, !1, {
            fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
            lineNumber: 216,
            columnNumber: 9
          }, void 0)
        ] }, void 0, !0, {
          fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
          lineNumber: 208,
          columnNumber: 7
        }, void 0),
        /* @__PURE__ */ y.jsxDEV("form", { onSubmit: U, className: "relative z-10", children: [
          /* @__PURE__ */ y.jsxDEV("div", { className: "grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-5 items-end", children: [
            /* @__PURE__ */ y.jsxDEV("div", { className: "sm:col-span-5", children: [
              /* @__PURE__ */ y.jsxDEV(
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
                  lineNumber: 227,
                  columnNumber: 13
                },
                void 0
              ),
              /* @__PURE__ */ y.jsxDEV("div", { className: "relative", children: [
                /* @__PURE__ */ y.jsxDEV("div", { className: "absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400", children: /* @__PURE__ */ y.jsxDEV(rE, { className: "w-4 h-4" }, void 0, !1, {
                  fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                  lineNumber: 235,
                  columnNumber: 17
                }, void 0) }, void 0, !1, {
                  fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                  lineNumber: 234,
                  columnNumber: 15
                }, void 0),
                /* @__PURE__ */ y.jsxDEV(
                  "input",
                  {
                    id: "verify-full-name",
                    type: "text",
                    value: i,
                    onChange: (q) => {
                      s(q.target.value), d && p(null);
                    },
                    disabled: c,
                    placeholder: "e.g. John Smith",
                    className: "w-full pl-10 pr-4 py-3 bg-slate-50 hover:bg-white focus:bg-white rounded-xl border border-slate-200 focus:border-[#0072CE] focus:ring-2 focus:ring-[#0072CE]/20 text-[#042F61] placeholder-slate-400 text-sm font-medium transition-all outline-hidden disabled:opacity-60 disabled:cursor-not-allowed"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                    lineNumber: 237,
                    columnNumber: 15
                  },
                  void 0
                )
              ] }, void 0, !0, {
                fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                lineNumber: 233,
                columnNumber: 13
              }, void 0)
            ] }, void 0, !0, {
              fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
              lineNumber: 226,
              columnNumber: 11
            }, void 0),
            /* @__PURE__ */ y.jsxDEV("div", { className: "sm:col-span-4", children: [
              /* @__PURE__ */ y.jsxDEV(
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
                  lineNumber: 254,
                  columnNumber: 13
                },
                void 0
              ),
              /* @__PURE__ */ y.jsxDEV("div", { className: "relative", children: [
                /* @__PURE__ */ y.jsxDEV("div", { className: "absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400", children: /* @__PURE__ */ y.jsxDEV($0, { className: "w-4 h-4" }, void 0, !1, {
                  fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                  lineNumber: 262,
                  columnNumber: 17
                }, void 0) }, void 0, !1, {
                  fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                  lineNumber: 261,
                  columnNumber: 15
                }, void 0),
                /* @__PURE__ */ y.jsxDEV(
                  "input",
                  {
                    id: "verify-certificate-id",
                    type: "text",
                    value: r,
                    onChange: (q) => {
                      o(q.target.value), d && p(null);
                    },
                    disabled: c,
                    placeholder: "e.g. CERT-12345",
                    className: "w-full pl-10 pr-4 py-3 bg-slate-50 hover:bg-white focus:bg-white rounded-xl border border-slate-200 focus:border-[#0072CE] focus:ring-2 focus:ring-[#0072CE]/20 text-[#042F61] placeholder-slate-400 text-sm font-medium transition-all outline-hidden disabled:opacity-60 disabled:cursor-not-allowed"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                    lineNumber: 264,
                    columnNumber: 15
                  },
                  void 0
                )
              ] }, void 0, !0, {
                fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                lineNumber: 260,
                columnNumber: 13
              }, void 0)
            ] }, void 0, !0, {
              fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
              lineNumber: 253,
              columnNumber: 11
            }, void 0),
            /* @__PURE__ */ y.jsxDEV("div", { className: "sm:col-span-3", children: /* @__PURE__ */ y.jsxDEV(
              "button",
              {
                type: "submit",
                disabled: c,
                className: "w-full bg-[#FDB913] hover:bg-[#0072CE] text-[#042F61] hover:text-white text-sm font-black tracking-wider uppercase py-3.5 px-5 rounded-xl shadow-md transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed select-none group",
                children: c ? /* @__PURE__ */ y.jsxDEV(y.Fragment, { children: [
                  /* @__PURE__ */ y.jsxDEV(QD, { className: "w-4 h-4 animate-spin text-[#042F61]" }, void 0, !1, {
                    fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                    lineNumber: 288,
                    columnNumber: 19
                  }, void 0),
                  /* @__PURE__ */ y.jsxDEV("span", { children: "Verifying..." }, void 0, !1, {
                    fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                    lineNumber: 289,
                    columnNumber: 19
                  }, void 0)
                ] }, void 0, !0, {
                  fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                  lineNumber: 287,
                  columnNumber: 17
                }, void 0) : /* @__PURE__ */ y.jsxDEV(y.Fragment, { children: [
                  /* @__PURE__ */ y.jsxDEV(aE, { className: "w-4 h-4 transition-transform duration-200 group-hover:scale-110" }, void 0, !1, {
                    fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                    lineNumber: 293,
                    columnNumber: 19
                  }, void 0),
                  /* @__PURE__ */ y.jsxDEV("span", { children: "Verify" }, void 0, !1, {
                    fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                    lineNumber: 294,
                    columnNumber: 19
                  }, void 0)
                ] }, void 0, !0, {
                  fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                  lineNumber: 292,
                  columnNumber: 17
                }, void 0)
              },
              void 0,
              !1,
              {
                fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                lineNumber: 281,
                columnNumber: 13
              },
              void 0
            ) }, void 0, !1, {
              fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
              lineNumber: 280,
              columnNumber: 11
            }, void 0)
          ] }, void 0, !0, {
            fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
            lineNumber: 223,
            columnNumber: 9
          }, void 0),
          d && /* @__PURE__ */ y.jsxDEV("div", { className: "mt-3.5 p-3 rounded-xl bg-amber-50 border border-amber-200/80 text-amber-800 text-xs font-semibold flex items-center gap-2 animate-fadeIn", children: [
            /* @__PURE__ */ y.jsxDEV(dc, { className: "w-4 h-4 text-amber-600 shrink-0" }, void 0, !1, {
              fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
              lineNumber: 305,
              columnNumber: 13
            }, void 0),
            /* @__PURE__ */ y.jsxDEV("span", { children: d }, void 0, !1, {
              fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
              lineNumber: 306,
              columnNumber: 13
            }, void 0)
          ] }, void 0, !0, {
            fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
            lineNumber: 304,
            columnNumber: 11
          }, void 0),
          b && /* @__PURE__ */ y.jsxDEV("div", { className: "mt-3.5 p-3 rounded-xl bg-rose-50 border border-rose-200/80 text-rose-800 text-xs font-semibold flex items-center gap-2 animate-fadeIn", children: [
            /* @__PURE__ */ y.jsxDEV(dc, { className: "w-4 h-4 text-rose-600 shrink-0" }, void 0, !1, {
              fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
              lineNumber: 313,
              columnNumber: 13
            }, void 0),
            /* @__PURE__ */ y.jsxDEV("span", { children: b }, void 0, !1, {
              fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
              lineNumber: 314,
              columnNumber: 13
            }, void 0)
          ] }, void 0, !0, {
            fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
            lineNumber: 312,
            columnNumber: 11
          }, void 0)
        ] }, void 0, !0, {
          fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
          lineNumber: 222,
          columnNumber: 7
        }, void 0),
        v && /* @__PURE__ */ y.jsxDEV("div", { className: "mt-8 pt-7 border-t border-slate-100 relative z-10", children: v.verified && v.certificate ? (
          /* Successful Verification Result */
          /* @__PURE__ */ y.jsxDEV("div", { className: "space-y-6", children: [
            /* @__PURE__ */ y.jsxDEV("div", { className: "bg-[#E1EFFB]/70 border border-[#B8DCF8] rounded-2xl p-5 sm:p-6 relative overflow-hidden", children: [
              /* @__PURE__ */ y.jsxDEV("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4", children: [
                /* @__PURE__ */ y.jsxDEV("div", { className: "flex items-start gap-3.5", children: [
                  /* @__PURE__ */ y.jsxDEV("div", { className: "w-10 h-10 rounded-xl bg-[#0072CE] text-white flex items-center justify-center shrink-0 shadow-sm mt-0.5", children: /* @__PURE__ */ y.jsxDEV($0, { className: "w-5 h-5" }, void 0, !1, {
                    fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                    lineNumber: 331,
                    columnNumber: 23
                  }, void 0) }, void 0, !1, {
                    fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                    lineNumber: 330,
                    columnNumber: 21
                  }, void 0),
                  /* @__PURE__ */ y.jsxDEV("div", { children: [
                    /* @__PURE__ */ y.jsxDEV("div", { className: "flex items-center gap-2.5 flex-wrap", children: [
                      /* @__PURE__ */ y.jsxDEV("span", { className: "text-[11px] font-bold text-[#0072CE] uppercase tracking-wider", children: "Verified Participant" }, void 0, !1, {
                        fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                        lineNumber: 335,
                        columnNumber: 25
                      }, void 0),
                      X(v.certificate.status)
                    ] }, void 0, !0, {
                      fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                      lineNumber: 334,
                      columnNumber: 23
                    }, void 0),
                    /* @__PURE__ */ y.jsxDEV("h3", { className: "text-xl sm:text-2xl font-black text-[#042F61] tracking-tight mt-1", children: v.certificate.full_name }, void 0, !1, {
                      fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                      lineNumber: 340,
                      columnNumber: 23
                    }, void 0),
                    /* @__PURE__ */ y.jsxDEV("p", { className: "text-xs sm:text-sm font-semibold text-slate-600 mt-0.5", children: v.certificate.session_name }, void 0, !1, {
                      fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                      lineNumber: 343,
                      columnNumber: 23
                    }, void 0)
                  ] }, void 0, !0, {
                    fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                    lineNumber: 333,
                    columnNumber: 21
                  }, void 0)
                ] }, void 0, !0, {
                  fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                  lineNumber: 329,
                  columnNumber: 19
                }, void 0),
                /* @__PURE__ */ y.jsxDEV(
                  "button",
                  {
                    type: "button",
                    onClick: L,
                    className: "inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-[#042F61] bg-white border border-slate-200 hover:border-[#0072CE] hover:text-[#0072CE] shadow-xs transition-colors self-start sm:self-center cursor-pointer",
                    children: [
                      /* @__PURE__ */ y.jsxDEV(tg, { className: "w-3.5 h-3.5" }, void 0, !1, {
                        fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                        lineNumber: 354,
                        columnNumber: 21
                      }, void 0),
                      /* @__PURE__ */ y.jsxDEV("span", { children: "Check Another" }, void 0, !1, {
                        fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                        lineNumber: 355,
                        columnNumber: 21
                      }, void 0)
                    ]
                  },
                  void 0,
                  !0,
                  {
                    fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                    lineNumber: 349,
                    columnNumber: 19
                  },
                  void 0
                )
              ] }, void 0, !0, {
                fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                lineNumber: 328,
                columnNumber: 17
              }, void 0),
              /* @__PURE__ */ y.jsxDEV("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-3 mt-5 pt-4 border-t border-[#B8DCF8]/60", children: [
                /* @__PURE__ */ y.jsxDEV("div", { className: "bg-white/80 rounded-xl p-3 border border-white/60", children: [
                  /* @__PURE__ */ y.jsxDEV("span", { className: "text-[10px] uppercase font-bold text-slate-400 block tracking-wider", children: "Certificate ID" }, void 0, !1, {
                    fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                    lineNumber: 362,
                    columnNumber: 21
                  }, void 0),
                  /* @__PURE__ */ y.jsxDEV("span", { className: "text-xs sm:text-sm font-black text-[#042F61] font-mono mt-0.5 block truncate", children: v.certificate.certificate_id }, void 0, !1, {
                    fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                    lineNumber: 365,
                    columnNumber: 21
                  }, void 0)
                ] }, void 0, !0, {
                  fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                  lineNumber: 361,
                  columnNumber: 19
                }, void 0),
                /* @__PURE__ */ y.jsxDEV("div", { className: "bg-white/80 rounded-xl p-3 border border-white/60", children: [
                  /* @__PURE__ */ y.jsxDEV("span", { className: "text-[10px] uppercase font-bold text-slate-400 block tracking-wider", children: "Issue Date" }, void 0, !1, {
                    fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                    lineNumber: 371,
                    columnNumber: 21
                  }, void 0),
                  /* @__PURE__ */ y.jsxDEV("span", { className: "text-xs sm:text-sm font-bold text-[#042F61] mt-0.5 flex items-center gap-1.5", children: [
                    /* @__PURE__ */ y.jsxDEV(hs, { className: "w-3.5 h-3.5 text-[#0072CE] shrink-0" }, void 0, !1, {
                      fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                      lineNumber: 375,
                      columnNumber: 23
                    }, void 0),
                    /* @__PURE__ */ y.jsxDEV("span", { className: "truncate", children: mE(v.certificate.issue_date) }, void 0, !1, {
                      fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                      lineNumber: 376,
                      columnNumber: 23
                    }, void 0)
                  ] }, void 0, !0, {
                    fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                    lineNumber: 374,
                    columnNumber: 21
                  }, void 0)
                ] }, void 0, !0, {
                  fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                  lineNumber: 370,
                  columnNumber: 19
                }, void 0),
                /* @__PURE__ */ y.jsxDEV("div", { className: "bg-white/80 rounded-xl p-3 border border-white/60", children: [
                  /* @__PURE__ */ y.jsxDEV("span", { className: "text-[10px] uppercase font-bold text-slate-400 block tracking-wider", children: "Status" }, void 0, !1, {
                    fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                    lineNumber: 381,
                    columnNumber: 21
                  }, void 0),
                  /* @__PURE__ */ y.jsxDEV("span", { className: "text-xs sm:text-sm font-bold text-[#042F61] mt-0.5 block capitalize truncate", children: v.certificate.status }, void 0, !1, {
                    fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                    lineNumber: 384,
                    columnNumber: 21
                  }, void 0)
                ] }, void 0, !0, {
                  fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                  lineNumber: 380,
                  columnNumber: 19
                }, void 0),
                /* @__PURE__ */ y.jsxDEV("div", { className: "bg-white/80 rounded-xl p-3 border border-white/60", children: [
                  /* @__PURE__ */ y.jsxDEV("span", { className: "text-[10px] uppercase font-bold text-slate-400 block tracking-wider", children: "Session Name" }, void 0, !1, {
                    fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                    lineNumber: 390,
                    columnNumber: 21
                  }, void 0),
                  /* @__PURE__ */ y.jsxDEV("span", { className: "text-xs sm:text-sm font-bold text-[#042F61] mt-0.5 block truncate", title: v.certificate.session_name, children: v.certificate.session_name }, void 0, !1, {
                    fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                    lineNumber: 393,
                    columnNumber: 21
                  }, void 0)
                ] }, void 0, !0, {
                  fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                  lineNumber: 389,
                  columnNumber: 19
                }, void 0)
              ] }, void 0, !0, {
                fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                lineNumber: 360,
                columnNumber: 17
              }, void 0)
            ] }, void 0, !0, {
              fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
              lineNumber: 327,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ y.jsxDEV("div", { className: "bg-slate-50 border border-slate-200/80 rounded-2xl p-4 sm:p-6", children: [
              /* @__PURE__ */ y.jsxDEV("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4", children: [
                /* @__PURE__ */ y.jsxDEV("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ y.jsxDEV("div", { className: "w-7 h-7 rounded-lg bg-[#0072CE]/10 flex items-center justify-center text-[#0072CE]", children: /* @__PURE__ */ y.jsxDEV(mc, { className: "w-4 h-4" }, void 0, !1, {
                    fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                    lineNumber: 405,
                    columnNumber: 23
                  }, void 0) }, void 0, !1, {
                    fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                    lineNumber: 404,
                    columnNumber: 21
                  }, void 0),
                  /* @__PURE__ */ y.jsxDEV("div", { children: [
                    /* @__PURE__ */ y.jsxDEV("h4", { className: "text-sm font-bold text-[#042F61]", children: "Official Certificate Document" }, void 0, !1, {
                      fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                      lineNumber: 408,
                      columnNumber: 23
                    }, void 0),
                    /* @__PURE__ */ y.jsxDEV("p", { className: "text-[11px] text-slate-500", children: [
                      "Rendered electronic verification document for ",
                      v.certificate.full_name
                    ] }, void 0, !0, {
                      fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                      lineNumber: 411,
                      columnNumber: 23
                    }, void 0)
                  ] }, void 0, !0, {
                    fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                    lineNumber: 407,
                    columnNumber: 21
                  }, void 0)
                ] }, void 0, !0, {
                  fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                  lineNumber: 403,
                  columnNumber: 19
                }, void 0),
                v.certificate.certificate_url && /* @__PURE__ */ y.jsxDEV("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ y.jsxDEV(
                    "a",
                    {
                      href: v.certificate.certificate_url,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      download: !0,
                      className: "inline-flex items-center justify-center gap-1.5 bg-[#0072CE] hover:bg-[#042F61] text-white text-xs font-bold py-2.5 px-4 rounded-xl shadow-xs transition-colors",
                      children: [
                        /* @__PURE__ */ y.jsxDEV(eg, { className: "w-3.5 h-3.5" }, void 0, !1, {
                          fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                          lineNumber: 427,
                          columnNumber: 25
                        }, void 0),
                        /* @__PURE__ */ y.jsxDEV("span", { children: "Download PDF" }, void 0, !1, {
                          fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                          lineNumber: 428,
                          columnNumber: 25
                        }, void 0)
                      ]
                    },
                    void 0,
                    !0,
                    {
                      fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                      lineNumber: 420,
                      columnNumber: 23
                    },
                    void 0
                  ),
                  /* @__PURE__ */ y.jsxDEV(
                    "a",
                    {
                      href: v.certificate.certificate_url,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "inline-flex items-center justify-center gap-1.5 bg-white hover:bg-slate-100 text-[#042F61] border border-slate-300 text-xs font-bold py-2.5 px-3.5 rounded-xl shadow-xs transition-colors",
                      title: "Open Certificate in new tab",
                      children: [
                        /* @__PURE__ */ y.jsxDEV(Lc, { className: "w-3.5 h-3.5" }, void 0, !1, {
                          fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                          lineNumber: 437,
                          columnNumber: 25
                        }, void 0),
                        /* @__PURE__ */ y.jsxDEV("span", { className: "hidden sm:inline", children: "Open" }, void 0, !1, {
                          fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                          lineNumber: 438,
                          columnNumber: 25
                        }, void 0)
                      ]
                    },
                    void 0,
                    !0,
                    {
                      fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                      lineNumber: 430,
                      columnNumber: 23
                    },
                    void 0
                  )
                ] }, void 0, !0, {
                  fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                  lineNumber: 419,
                  columnNumber: 21
                }, void 0)
              ] }, void 0, !0, {
                fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                lineNumber: 402,
                columnNumber: 17
              }, void 0),
              v.certificate.certificate_url && /* @__PURE__ */ y.jsxDEV("div", { className: "flex flex-wrap items-center justify-between gap-3 mb-3.5 pb-3 border-b border-slate-200/80", children: [
                /* @__PURE__ */ y.jsxDEV("div", { className: "flex items-center gap-1 bg-slate-200/70 p-1 rounded-xl", children: [
                  /* @__PURE__ */ y.jsxDEV(
                    "button",
                    {
                      type: "button",
                      onClick: () => C("dynamic"),
                      className: `px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${S === "dynamic" ? "bg-white text-[#042F61] shadow-xs" : "text-slate-600 hover:text-[#042F61]"}`,
                      title: "Dynamic responsive viewport to view the whole page",
                      children: "Dynamic Full View"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                      lineNumber: 448,
                      columnNumber: 23
                    },
                    void 0
                  ),
                  /* @__PURE__ */ y.jsxDEV(
                    "button",
                    {
                      type: "button",
                      onClick: () => C("a4-portrait"),
                      className: `px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${S === "a4-portrait" ? "bg-white text-[#042F61] shadow-xs" : "text-slate-600 hover:text-[#042F61]"}`,
                      title: "Standard A4 Portrait ratio (210 × 297 mm)",
                      children: "A4 Portrait"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                      lineNumber: 460,
                      columnNumber: 23
                    },
                    void 0
                  ),
                  /* @__PURE__ */ y.jsxDEV(
                    "button",
                    {
                      type: "button",
                      onClick: () => C("a4-landscape"),
                      className: `px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${S === "a4-landscape" ? "bg-white text-[#042F61] shadow-xs" : "text-slate-600 hover:text-[#042F61]"}`,
                      title: "Standard A4 Landscape ratio (297 × 210 mm)",
                      children: "A4 Landscape"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                      lineNumber: 472,
                      columnNumber: 23
                    },
                    void 0
                  )
                ] }, void 0, !0, {
                  fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                  lineNumber: 447,
                  columnNumber: 21
                }, void 0),
                /* @__PURE__ */ y.jsxDEV(
                  "button",
                  {
                    type: "button",
                    onClick: () => j(!0),
                    className: "inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold text-[#042F61] bg-white border border-slate-200 hover:border-[#0072CE] hover:text-[#0072CE] shadow-xs transition-colors cursor-pointer",
                    title: "Expand to Fullscreen A4 view",
                    children: [
                      /* @__PURE__ */ y.jsxDEV(FD, { className: "w-3.5 h-3.5" }, void 0, !1, {
                        fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                        lineNumber: 492,
                        columnNumber: 23
                      }, void 0),
                      /* @__PURE__ */ y.jsxDEV("span", { children: "Fullscreen" }, void 0, !1, {
                        fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                        lineNumber: 493,
                        columnNumber: 23
                      }, void 0)
                    ]
                  },
                  void 0,
                  !0,
                  {
                    fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                    lineNumber: 486,
                    columnNumber: 21
                  },
                  void 0
                )
              ] }, void 0, !0, {
                fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                lineNumber: 446,
                columnNumber: 19
              }, void 0),
              v.certificate.certificate_url ? /* @__PURE__ */ y.jsxDEV(
                "div",
                {
                  className: `relative rounded-xl overflow-hidden border border-slate-200 bg-white shadow-inner transition-all duration-300 ${S === "a4-portrait" ? "w-full max-w-[720px] aspect-[1/1.414] min-h-[580px] mx-auto" : S === "a4-landscape" ? "w-full aspect-[1.414/1] min-h-[460px] max-h-[85vh] mx-auto" : "w-full h-[78vh] min-h-[640px] sm:min-h-[750px] lg:min-h-[880px] max-h-[1100px]"}`,
                  children: /* @__PURE__ */ y.jsxDEV(
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
                      lineNumber: 509,
                      columnNumber: 21
                    },
                    void 0
                  )
                },
                void 0,
                !1,
                {
                  fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                  lineNumber: 500,
                  columnNumber: 19
                },
                void 0
              ) : /* @__PURE__ */ y.jsxDEV("div", { className: "p-6 text-center bg-white rounded-xl border border-dashed border-slate-300", children: [
                /* @__PURE__ */ y.jsxDEV(mc, { className: "w-8 h-8 text-slate-400 mx-auto mb-2" }, void 0, !1, {
                  fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                  lineNumber: 517,
                  columnNumber: 21
                }, void 0),
                /* @__PURE__ */ y.jsxDEV("p", { className: "text-xs text-slate-500 font-medium", children: "PDF preview is currently unavailable for this record." }, void 0, !1, {
                  fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                  lineNumber: 518,
                  columnNumber: 21
                }, void 0)
              ] }, void 0, !0, {
                fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                lineNumber: 516,
                columnNumber: 19
              }, void 0)
            ] }, void 0, !0, {
              fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
              lineNumber: 401,
              columnNumber: 15
            }, void 0),
            A && ((G = v == null ? void 0 : v.certificate) == null ? void 0 : G.certificate_url) && /* @__PURE__ */ y.jsxDEV("div", { className: "fixed inset-0 z-50 bg-[#042F61]/90 backdrop-blur-md p-3 sm:p-6 flex flex-col", children: [
              /* @__PURE__ */ y.jsxDEV("div", { className: "flex items-center justify-between mb-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-2.5 text-white", children: [
                /* @__PURE__ */ y.jsxDEV("div", { className: "flex items-center gap-2.5 truncate mr-3", children: [
                  /* @__PURE__ */ y.jsxDEV(mc, { className: "w-4 h-4 text-[#FDB913] shrink-0" }, void 0, !1, {
                    fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                    lineNumber: 530,
                    columnNumber: 23
                  }, void 0),
                  /* @__PURE__ */ y.jsxDEV("span", { className: "text-sm font-bold truncate", children: [
                    "Certificate: ",
                    v.certificate.full_name,
                    " (",
                    v.certificate.certificate_id,
                    ")"
                  ] }, void 0, !0, {
                    fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                    lineNumber: 531,
                    columnNumber: 23
                  }, void 0)
                ] }, void 0, !0, {
                  fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                  lineNumber: 529,
                  columnNumber: 21
                }, void 0),
                /* @__PURE__ */ y.jsxDEV("div", { className: "flex items-center gap-2 shrink-0", children: [
                  /* @__PURE__ */ y.jsxDEV(
                    "a",
                    {
                      href: v.certificate.certificate_url,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      download: !0,
                      className: "inline-flex items-center gap-1.5 bg-[#0072CE] hover:bg-[#005bb5] text-white text-xs font-bold py-1.5 px-3 rounded-lg transition-colors",
                      children: [
                        /* @__PURE__ */ y.jsxDEV(eg, { className: "w-3.5 h-3.5" }, void 0, !1, {
                          fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                          lineNumber: 543,
                          columnNumber: 25
                        }, void 0),
                        /* @__PURE__ */ y.jsxDEV("span", { children: "Download" }, void 0, !1, {
                          fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                          lineNumber: 544,
                          columnNumber: 25
                        }, void 0)
                      ]
                    },
                    void 0,
                    !0,
                    {
                      fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                      lineNumber: 536,
                      columnNumber: 23
                    },
                    void 0
                  ),
                  /* @__PURE__ */ y.jsxDEV(
                    "button",
                    {
                      type: "button",
                      onClick: () => j(!1),
                      className: "inline-flex items-center gap-1.5 bg-white/20 hover:bg-white/30 text-white text-xs font-bold py-1.5 px-3 rounded-lg transition-colors cursor-pointer",
                      children: [
                        /* @__PURE__ */ y.jsxDEV(ID, { className: "w-3.5 h-3.5" }, void 0, !1, {
                          fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                          lineNumber: 551,
                          columnNumber: 25
                        }, void 0),
                        /* @__PURE__ */ y.jsxDEV("span", { children: "Close (Esc)" }, void 0, !1, {
                          fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                          lineNumber: 552,
                          columnNumber: 25
                        }, void 0)
                      ]
                    },
                    void 0,
                    !0,
                    {
                      fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                      lineNumber: 546,
                      columnNumber: 23
                    },
                    void 0
                  )
                ] }, void 0, !0, {
                  fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                  lineNumber: 535,
                  columnNumber: 21
                }, void 0)
              ] }, void 0, !0, {
                fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                lineNumber: 528,
                columnNumber: 19
              }, void 0),
              /* @__PURE__ */ y.jsxDEV("div", { className: "flex-1 w-full rounded-xl overflow-hidden bg-white shadow-2xl border border-white/20", children: /* @__PURE__ */ y.jsxDEV(
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
                  lineNumber: 557,
                  columnNumber: 21
                },
                void 0
              ) }, void 0, !1, {
                fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                lineNumber: 556,
                columnNumber: 19
              }, void 0)
            ] }, void 0, !0, {
              fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
              lineNumber: 527,
              columnNumber: 17
            }, void 0)
          ] }, void 0, !0, {
            fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
            lineNumber: 324,
            columnNumber: 13
          }, void 0)
        ) : (
          /* Not Found / Invalid State */
          /* @__PURE__ */ y.jsxDEV("div", { className: "bg-rose-50/70 border border-rose-200/80 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4", children: [
            /* @__PURE__ */ y.jsxDEV("div", { className: "flex items-start gap-3.5", children: [
              /* @__PURE__ */ y.jsxDEV("div", { className: "w-10 h-10 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center shrink-0 mt-0.5", children: /* @__PURE__ */ y.jsxDEV(W0, { className: "w-5 h-5" }, void 0, !1, {
                fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                lineNumber: 572,
                columnNumber: 19
              }, void 0) }, void 0, !1, {
                fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                lineNumber: 571,
                columnNumber: 17
              }, void 0),
              /* @__PURE__ */ y.jsxDEV("div", { children: [
                /* @__PURE__ */ y.jsxDEV("h4", { className: "text-base font-bold text-rose-950", children: "Certificate Verification Failed" }, void 0, !1, {
                  fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                  lineNumber: 575,
                  columnNumber: 19
                }, void 0),
                /* @__PURE__ */ y.jsxDEV("p", { className: "text-xs sm:text-sm text-rose-800 mt-1 leading-relaxed max-w-xl", children: v.message || "No certificate record was found matching the provided Certificate ID and Full Name. Please confirm the details on the issued document." }, void 0, !1, {
                  fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                  lineNumber: 578,
                  columnNumber: 19
                }, void 0)
              ] }, void 0, !0, {
                fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                lineNumber: 574,
                columnNumber: 17
              }, void 0)
            ] }, void 0, !0, {
              fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
              lineNumber: 570,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ y.jsxDEV(
              "button",
              {
                type: "button",
                onClick: L,
                className: "inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-rose-900 bg-white border border-rose-200 hover:bg-rose-50 shadow-xs transition-colors shrink-0 cursor-pointer",
                children: [
                  /* @__PURE__ */ y.jsxDEV(tg, { className: "w-3.5 h-3.5" }, void 0, !1, {
                    fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                    lineNumber: 589,
                    columnNumber: 17
                  }, void 0),
                  /* @__PURE__ */ y.jsxDEV("span", { children: "Try Again" }, void 0, !1, {
                    fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                    lineNumber: 590,
                    columnNumber: 17
                  }, void 0)
                ]
              },
              void 0,
              !0,
              {
                fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
                lineNumber: 584,
                columnNumber: 15
              },
              void 0
            )
          ] }, void 0, !0, {
            fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
            lineNumber: 569,
            columnNumber: 13
          }, void 0)
        ) }, void 0, !1, {
          fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
          lineNumber: 321,
          columnNumber: 9
        }, void 0)
      ]
    },
    void 0,
    !0,
    {
      fileName: "/app/applet/src/components/BookPDSession/CertificateVerificationCard.tsx",
      lineNumber: 197,
      columnNumber: 5
    },
    void 0
  );
}, hE = ({ className: i = "w-5 h-5" }) => /* @__PURE__ */ y.jsxDEV(
  "svg",
  {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: i,
    "aria-hidden": "true",
    children: [
      /* @__PURE__ */ y.jsxDEV("rect", { width: "15", height: "11", x: "2", y: "8", rx: "2" }, void 0, !1, {
        fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
        lineNumber: 37,
        columnNumber: 5
      }, void 0),
      /* @__PURE__ */ y.jsxDEV("path", { d: "m2 10 7.5 5 7.5-5" }, void 0, !1, {
        fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
        lineNumber: 38,
        columnNumber: 5
      }, void 0),
      /* @__PURE__ */ y.jsxDEV("path", { d: "M15 3h6v6" }, void 0, !1, {
        fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
        lineNumber: 40,
        columnNumber: 5
      }, void 0),
      /* @__PURE__ */ y.jsxDEV("path", { d: "m14 10 7-7" }, void 0, !1, {
        fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
        lineNumber: 41,
        columnNumber: 5
      }, void 0)
    ]
  },
  void 0,
  !0,
  {
    fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
    lineNumber: 26,
    columnNumber: 3
  },
  void 0
), ua = (i) => {
  if (!i) return "";
  try {
    return new DOMParser().parseFromString(i, "text/html").body.textContent || i;
  } catch {
    return i.replace(/&#8211;/g, "–").replace(/&#8212;/g, "—").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#039;/g, "'");
  }
}, pc = (i) => {
  if (!i) return "";
  try {
    const s = i.split("-");
    if (s.length === 3) {
      const r = parseInt(s[0], 10), o = parseInt(s[1], 10) - 1, c = parseInt(s[2], 10), m = new Date(r, o, c);
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
}, gE = () => {
  const i = /* @__PURE__ */ new Date(), s = i.getFullYear(), r = String(i.getMonth() + 1).padStart(2, "0"), o = String(i.getDate()).padStart(2, "0");
  return `${s}-${r}-${o}`;
}, ng = (i) => {
  const s = ua(i), r = s.match(/^(.*?)\s*[-–—]\s*(.*)$/);
  if (r) {
    const o = r[1].trim(), c = r[2].trim();
    return /* @__PURE__ */ y.jsxDEV("div", { className: "font-sans leading-snug", children: [
      /* @__PURE__ */ y.jsxDEV("span", { className: "text-xs sm:text-[13px] font-bold text-white group-hover:text-[#FDB913] transition-colors block leading-tight", children: o }, void 0, !1, {
        fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
        lineNumber: 116,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ y.jsxDEV("span", { className: "text-[11px] sm:text-xs font-medium text-sky-100/90 group-hover:text-white transition-colors block mt-0.5 leading-snug", children: c }, void 0, !1, {
        fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
        lineNumber: 119,
        columnNumber: 9
      }, void 0)
    ] }, void 0, !0, {
      fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
      lineNumber: 115,
      columnNumber: 7
    }, void 0);
  }
  return /* @__PURE__ */ y.jsxDEV("div", { className: "font-sans leading-snug", children: /* @__PURE__ */ y.jsxDEV("span", { className: "text-xs sm:text-[13px] font-bold text-white group-hover:text-[#FDB913] transition-colors block leading-tight", children: s }, void 0, !1, {
    fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
    lineNumber: 128,
    columnNumber: 7
  }, void 0) }, void 0, !1, {
    fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
    lineNumber: 127,
    columnNumber: 5
  }, void 0);
}, ig = [
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
], ag = [
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
], yE = () => {
  const [i, s] = Y.useState([]), [r, o] = Y.useState(ig), [c, m] = Y.useState(ag), [d, p] = Y.useState(0), [b, h] = Y.useState(!1), [v, x] = Y.useState(!1), S = Y.useRef(null), C = Y.useRef(null), [A, j] = Y.useState(null), U = Y.useRef(null);
  Y.useEffect(() => {
    const R = document.title;
    document.title = "Book Professional Development Session - Chelson Gordon", window.scrollTo({ top: 0, behavior: "instant" });
    let H = !0;
    return (async () => {
      try {
        let Q;
        try {
          if (Q = await fetch("/wp-json/cg/v1/pd-sessions"), !Q.ok) throw new Error();
        } catch {
          Q = await fetch("https://chelsongordon.com/wp-json/cg/v1/pd-sessions");
        }
        if (Q.ok) {
          const se = await Q.json();
          if (H && Array.isArray(se) && se.length > 0) {
            s(se);
            const ge = gE(), Ge = se.filter((be) => !be.date || be.date >= ge).sort((be, w) => (be.date || "").localeCompare(w.date || "")), ze = se.filter((be) => be.date && be.date < ge).sort((be, w) => (w.date || "").localeCompare(be.date || ""));
            if (Ge.length > 0 && o(Ge), ze.length > 0) {
              const be = [
                ...ze,
                ...ag.filter((w) => !ze.some((K) => K.id === w.id || K.date === w.date))
              ];
              m(be);
            }
          }
        }
      } catch (Q) {
        console.warn("Using default sessions fallback:", Q);
      }
    })(), typeof window < "u" && window.dispatchEvent(new CustomEvent("gform_mount_ready", {
      detail: { containerId: "wp-gravity-form-mount" }
    })), () => {
      H = !1, document.title = R;
    };
  }, []);
  const L = r[d] || r[0] || ig[0], X = () => {
    p((R) => (R - 1 + r.length) % r.length);
  }, G = () => {
    p((R) => (R + 1) % r.length);
  }, q = (R) => {
    const H = R.currentTarget.scrollTop;
    x(H > 15), h(!0), S.current && clearTimeout(S.current), S.current = setTimeout(() => {
      h(!1);
    }, 900);
  }, F = () => {
    C.current && C.current.scrollBy({ top: 120, behavior: "smooth" });
  };
  Y.useEffect(() => () => {
    S.current && clearTimeout(S.current);
  }, []);
  const ie = (R) => {
    R && R.preventDefault();
    const H = document.getElementById("wp-gravity-form-mount") || U.current || document.getElementById("booking-registration-section");
    if (H) {
      const se = H.getBoundingClientRect().top + window.pageYOffset - 120;
      try {
        window.scrollTo({
          top: Math.max(0, se),
          behavior: "smooth"
        });
      } catch {
        window.scrollTo(0, Math.max(0, se));
      }
      try {
        H.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      } catch {
        H.scrollIntoView();
      }
      window.history && window.history.pushState ? window.history.pushState(null, "", "#wp-gravity-form-mount") : window.location.hash = "wp-gravity-form-mount";
    } else
      window.location.hash = "wp-gravity-form-mount";
  };
  return Y.useEffect(() => {
    if (typeof window < "u" && (window.location.hash === "#wp-gravity-form-mount" || window.location.hash === "#booking-registration-section")) {
      const R = setTimeout(() => {
        ie();
      }, 350);
      return () => clearTimeout(R);
    }
  }, []), /* @__PURE__ */ y.jsxDEV("div", { className: "min-h-screen bg-[#F4F7FB] font-sans pt-[165px] sm:pt-[180px] lg:pt-[170px] xl:pt-[190px] 2xl:pt-[205px] pb-24 relative overflow-hidden select-none", children: [
    /* @__PURE__ */ y.jsxDEV(
      "div",
      {
        className: "absolute inset-0 pointer-events-none overflow-hidden select-none z-0",
        "aria-hidden": "true",
        children: [
          /* @__PURE__ */ y.jsxDEV("div", { className: "absolute top-[165px] sm:top-[180px] lg:top-[170px] xl:top-[190px] 2xl:top-[205px] right-[120px] w-0 h-0 overflow-visible origin-top-left transform rotate-90 text-[52px] sm:text-[64px] lg:text-[72px] xl:text-[80px] font-black tracking-widest text-[#042F61]/[0.07] uppercase leading-none whitespace-nowrap select-none", children: "PROFESSIONAL DEVELOPMENT" }, void 0, !1, {
            fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
            lineNumber: 439,
            columnNumber: 9
          }, void 0),
          /* @__PURE__ */ y.jsxDEV("div", { className: "absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(0,114,206,0.06)_0%,transparent_70%)] blur-3xl pointer-events-none" }, void 0, !1, {
            fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
            lineNumber: 443,
            columnNumber: 9
          }, void 0),
          /* @__PURE__ */ y.jsxDEV("div", { className: "absolute bottom-1/4 right-10 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(253,185,19,0.05)_0%,transparent_70%)] blur-3xl pointer-events-none" }, void 0, !1, {
            fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
            lineNumber: 444,
            columnNumber: 9
          }, void 0)
        ]
      },
      void 0,
      !0,
      {
        fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
        lineNumber: 434,
        columnNumber: 7
      },
      void 0
    ),
    /* @__PURE__ */ y.jsxDEV("div", { className: "max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10", children: [
      /* @__PURE__ */ y.jsxDEV("div", { className: "relative", children: [
        /* @__PURE__ */ y.jsxDEV("div", { className: "relative mb-3.5 sm:mb-5", children: [
          /* @__PURE__ */ y.jsxDEV("div", { className: "bg-gradient-to-br from-[#CDE4F9] via-[#E2F0FD] to-[#BEE0F8] border border-white/80 rounded-[26px] sm:rounded-[28px] p-6 sm:p-8 lg:p-12 relative overflow-hidden", children: [
            /* @__PURE__ */ y.jsxDEV("div", { className: "absolute -left-12 -top-12 w-80 sm:w-96 h-80 sm:h-96 bg-[#0072CE]/18 rounded-full blur-3xl pointer-events-none" }, void 0, !1, {
              fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
              lineNumber: 465,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ y.jsxDEV("div", { className: "absolute left-40 top-20 w-72 h-72 bg-[#FDB913]/20 rounded-full blur-2xl pointer-events-none" }, void 0, !1, {
              fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
              lineNumber: 466,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ y.jsxDEV("div", { className: "absolute -right-20 -bottom-20 w-96 h-96 bg-[#0072CE]/16 rounded-full blur-3xl pointer-events-none" }, void 0, !1, {
              fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
              lineNumber: 467,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ y.jsxDEV("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10", children: [
              /* @__PURE__ */ y.jsxDEV("div", { className: "lg:col-span-5 flex flex-col items-center justify-center relative", children: /* @__PURE__ */ y.jsxDEV("div", { className: "relative w-full max-w-[340px] sm:max-w-[380px] aspect-[4/3.4] flex items-center justify-center", children: [
                /* @__PURE__ */ y.jsxDEV(
                  "svg",
                  {
                    viewBox: "0 0 200 200",
                    className: "absolute inset-0 w-full h-full text-[#0072CE]/15 fill-current transform -rotate-6 scale-110 pointer-events-none",
                    children: /* @__PURE__ */ y.jsxDEV("path", { d: "M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C86.9,14.6,81.3,29.1,72.9,41.9C64.6,54.6,53.5,65.6,40.3,72.7C27.1,79.8,11.8,83.1,-3.1,88.4C-17.9,93.8,-35.8,101.3,-50,95.5C-64.2,89.7,-74.7,70.8,-81.4,52.3C-88.1,33.8,-91,15.7,-88.9,-1.2C-86.8,-18.1,-79.7,-33.8,-69.8,-46.8C-59.9,-59.9,-47.2,-70.3,-33.4,-77.8C-19.6,-85.2,-9.8,-89.7,2.8,-94.5C15.4,-99.4,30.7,-83.6,44.7,-76.4Z", transform: "translate(100 100)" }, void 0, !1, {
                      fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                      lineNumber: 480,
                      columnNumber: 23
                    }, void 0)
                  },
                  void 0,
                  !1,
                  {
                    fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                    lineNumber: 476,
                    columnNumber: 21
                  },
                  void 0
                ),
                /* @__PURE__ */ y.jsxDEV("div", { className: "relative w-full h-full rounded-[24px] overflow-hidden border-2 border-white/80 shadow-[0_15px_35px_rgba(4,47,97,0.12)] bg-gradient-to-b from-white/90 via-sky-50 to-[#EAF3FA]", children: [
                  /* @__PURE__ */ y.jsxDEV(
                    "img",
                    {
                      src: "https://storage.googleapis.com/chelsongordon/com.chelsongordon/images/our-people/learning_2.webp",
                      alt: "Professional Development Facilitator",
                      className: "w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700",
                      loading: "eager"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                      lineNumber: 484,
                      columnNumber: 23
                    },
                    void 0
                  ),
                  /* @__PURE__ */ y.jsxDEV("div", { className: "absolute bottom-3.5 left-3.5 right-3.5 bg-white/95 backdrop-blur-md py-2 px-3.5 rounded-xl border border-slate-200/80 shadow-md flex items-center justify-between", children: [
                    /* @__PURE__ */ y.jsxDEV("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ y.jsxDEV("span", { className: "relative flex h-2.5 w-2.5", children: [
                        /* @__PURE__ */ y.jsxDEV("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0072CE] opacity-75" }, void 0, !1, {
                          fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                          lineNumber: 495,
                          columnNumber: 29
                        }, void 0),
                        /* @__PURE__ */ y.jsxDEV("span", { className: "relative inline-flex rounded-full h-2.5 w-2.5 bg-[#0072CE]" }, void 0, !1, {
                          fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                          lineNumber: 496,
                          columnNumber: 29
                        }, void 0)
                      ] }, void 0, !0, {
                        fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                        lineNumber: 494,
                        columnNumber: 27
                      }, void 0),
                      /* @__PURE__ */ y.jsxDEV("span", { className: "text-[11px] font-bold text-[#042F61] uppercase tracking-wider", children: "Live & Interactive" }, void 0, !1, {
                        fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                        lineNumber: 498,
                        columnNumber: 27
                      }, void 0)
                    ] }, void 0, !0, {
                      fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                      lineNumber: 493,
                      columnNumber: 25
                    }, void 0),
                    /* @__PURE__ */ y.jsxDEV("span", { className: "text-[11px] font-bold text-[#0072CE] bg-[#0072CE]/10 px-2 py-0.5 rounded-md", children: "VET Accredited" }, void 0, !1, {
                      fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                      lineNumber: 500,
                      columnNumber: 25
                    }, void 0)
                  ] }, void 0, !0, {
                    fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                    lineNumber: 492,
                    columnNumber: 23
                  }, void 0)
                ] }, void 0, !0, {
                  fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                  lineNumber: 483,
                  columnNumber: 21
                }, void 0)
              ] }, void 0, !0, {
                fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                lineNumber: 473,
                columnNumber: 19
              }, void 0) }, void 0, !1, {
                fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                lineNumber: 472,
                columnNumber: 17
              }, void 0),
              /* @__PURE__ */ y.jsxDEV("div", { className: "lg:col-span-7 flex flex-col justify-between h-full space-y-6 lg:space-y-8 sm:pr-8 lg:pr-14", children: /* @__PURE__ */ y.jsxDEV("div", { className: "space-y-4", children: [
                /* @__PURE__ */ y.jsxDEV("div", { className: "flex flex-wrap items-center justify-between gap-3", children: [
                  /* @__PURE__ */ y.jsxDEV("div", { className: "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/85 border border-[#0072CE]/20 text-[#0072CE] text-xs font-bold tracking-wider uppercase shadow-xs", children: [
                    /* @__PURE__ */ y.jsxDEV(Il, { className: "w-3.5 h-3.5 text-[#FDB913]" }, void 0, !1, {
                      fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                      lineNumber: 513,
                      columnNumber: 25
                    }, void 0),
                    /* @__PURE__ */ y.jsxDEV("span", { children: "Upcoming Masterclass" }, void 0, !1, {
                      fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                      lineNumber: 514,
                      columnNumber: 25
                    }, void 0),
                    r.length > 1 && /* @__PURE__ */ y.jsxDEV("span", { className: "bg-[#0072CE]/10 text-[#0072CE] text-[10px] px-2 py-0.5 rounded-full font-bold ml-1", children: [
                      d + 1,
                      " / ",
                      r.length
                    ] }, void 0, !0, {
                      fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                      lineNumber: 516,
                      columnNumber: 27
                    }, void 0)
                  ] }, void 0, !0, {
                    fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                    lineNumber: 512,
                    columnNumber: 23
                  }, void 0),
                  r.length > 1 && /* @__PURE__ */ y.jsxDEV("div", { className: "flex items-center gap-1.5 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full border border-slate-200/80 shadow-xs", children: [
                    /* @__PURE__ */ y.jsxDEV(
                      "button",
                      {
                        onClick: X,
                        "aria-label": "Previous upcoming session",
                        className: "w-7 h-7 rounded-full flex items-center justify-center text-[#042F61] hover:bg-[#0072CE] hover:text-white transition-colors cursor-pointer",
                        children: /* @__PURE__ */ y.jsxDEV(PD, { className: "w-4 h-4" }, void 0, !1, {
                          fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                          lineNumber: 530,
                          columnNumber: 29
                        }, void 0)
                      },
                      void 0,
                      !1,
                      {
                        fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                        lineNumber: 525,
                        columnNumber: 27
                      },
                      void 0
                    ),
                    /* @__PURE__ */ y.jsxDEV("div", { className: "flex items-center gap-1 px-1", children: r.map((R, H) => /* @__PURE__ */ y.jsxDEV(
                      "button",
                      {
                        onClick: () => p(H),
                        "aria-label": `Go to upcoming session slide ${H + 1}`,
                        className: `transition-all rounded-full cursor-pointer ${H === d ? "w-4 h-2 bg-[#0072CE]" : "w-2 h-2 bg-slate-300 hover:bg-slate-400"}`
                      },
                      H,
                      !1,
                      {
                        fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                        lineNumber: 535,
                        columnNumber: 31
                      },
                      void 0
                    )) }, void 0, !1, {
                      fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                      lineNumber: 533,
                      columnNumber: 27
                    }, void 0),
                    /* @__PURE__ */ y.jsxDEV(
                      "button",
                      {
                        onClick: G,
                        "aria-label": "Next upcoming session",
                        className: "w-7 h-7 rounded-full flex items-center justify-center text-[#042F61] hover:bg-[#0072CE] hover:text-white transition-colors cursor-pointer",
                        children: /* @__PURE__ */ y.jsxDEV(zD, { className: "w-4 h-4" }, void 0, !1, {
                          fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                          lineNumber: 553,
                          columnNumber: 29
                        }, void 0)
                      },
                      void 0,
                      !1,
                      {
                        fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                        lineNumber: 548,
                        columnNumber: 27
                      },
                      void 0
                    )
                  ] }, void 0, !0, {
                    fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                    lineNumber: 524,
                    columnNumber: 25
                  }, void 0)
                ] }, void 0, !0, {
                  fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                  lineNumber: 511,
                  columnNumber: 21
                }, void 0),
                /* @__PURE__ */ y.jsxDEV("h1", { className: "text-3xl sm:text-4xl md:text-5xl lg:text-[42px] xl:text-[46px] font-black text-[#042F61] tracking-tight leading-[1.18] font-sans transition-all", children: ua(L.title) }, void 0, !1, {
                  fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                  lineNumber: 560,
                  columnNumber: 21
                }, void 0),
                /* @__PURE__ */ y.jsxDEV("p", { className: "text-base sm:text-lg text-slate-700 leading-relaxed font-normal max-w-2xl", children: L.description ? ua(L.description) : "Join an interactive professional development masterclass where compliance rigour and practical training unite to build confidence, resilience, and fair assessment outcomes in line with ASQA Standards." }, void 0, !1, {
                  fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                  lineNumber: 565,
                  columnNumber: 21
                }, void 0)
              ] }, void 0, !0, {
                fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                lineNumber: 509,
                columnNumber: 19
              }, void 0) }, void 0, !1, {
                fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                lineNumber: 507,
                columnNumber: 17
              }, void 0)
            ] }, void 0, !0, {
              fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
              lineNumber: 469,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ y.jsxDEV("div", { className: "relative z-10 mt-6 sm:mt-7 w-full sm:max-w-[calc(100%-245px)] lg:max-w-[calc(100%-230px)]", children: [
              /* @__PURE__ */ y.jsxDEV("div", { className: "grid grid-cols-3 gap-2 sm:gap-3", children: [
                /* @__PURE__ */ y.jsxDEV("div", { className: "bg-white/85 backdrop-blur-sm rounded-xl p-2.5 sm:p-3 border border-slate-200/70 shadow-xs", children: [
                  /* @__PURE__ */ y.jsxDEV("span", { className: "text-[10px] uppercase font-bold text-slate-400 block tracking-wider", children: "Mode" }, void 0, !1, {
                    fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                    lineNumber: 580,
                    columnNumber: 21
                  }, void 0),
                  /* @__PURE__ */ y.jsxDEV("span", { className: "text-xs sm:text-[13px] md:text-sm font-bold text-[#042F61] flex items-center gap-1.5 mt-0.5", children: [
                    /* @__PURE__ */ y.jsxDEV(XD, { className: "w-3.5 h-3.5 text-[#0072CE] shrink-0" }, void 0, !1, {
                      fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                      lineNumber: 582,
                      columnNumber: 23
                    }, void 0),
                    /* @__PURE__ */ y.jsxDEV("span", { className: "truncate", children: "Online Session" }, void 0, !1, {
                      fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                      lineNumber: 583,
                      columnNumber: 23
                    }, void 0)
                  ] }, void 0, !0, {
                    fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                    lineNumber: 581,
                    columnNumber: 21
                  }, void 0)
                ] }, void 0, !0, {
                  fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                  lineNumber: 579,
                  columnNumber: 19
                }, void 0),
                /* @__PURE__ */ y.jsxDEV("div", { className: "bg-white/85 backdrop-blur-sm rounded-xl p-2.5 sm:p-3 border border-slate-200/70 shadow-xs", children: [
                  /* @__PURE__ */ y.jsxDEV("span", { className: "text-[10px] uppercase font-bold text-slate-400 block tracking-wider", children: "Session Date" }, void 0, !1, {
                    fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                    lineNumber: 587,
                    columnNumber: 21
                  }, void 0),
                  /* @__PURE__ */ y.jsxDEV("span", { className: "text-xs sm:text-[13px] md:text-sm font-bold text-[#042F61] flex items-center gap-1.5 mt-0.5", children: [
                    /* @__PURE__ */ y.jsxDEV(hs, { className: "w-3.5 h-3.5 text-[#0072CE] shrink-0" }, void 0, !1, {
                      fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                      lineNumber: 589,
                      columnNumber: 23
                    }, void 0),
                    /* @__PURE__ */ y.jsxDEV("span", { className: "truncate", children: pc(L.date) }, void 0, !1, {
                      fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                      lineNumber: 590,
                      columnNumber: 23
                    }, void 0)
                  ] }, void 0, !0, {
                    fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                    lineNumber: 588,
                    columnNumber: 21
                  }, void 0)
                ] }, void 0, !0, {
                  fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                  lineNumber: 586,
                  columnNumber: 19
                }, void 0),
                /* @__PURE__ */ y.jsxDEV("div", { className: "bg-white/85 backdrop-blur-sm rounded-xl p-2.5 border border-slate-200/70 shadow-xs", children: [
                  /* @__PURE__ */ y.jsxDEV("span", { className: "text-[10px] uppercase font-bold text-slate-400 block tracking-wider", children: "Session Time" }, void 0, !1, {
                    fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                    lineNumber: 594,
                    columnNumber: 21
                  }, void 0),
                  /* @__PURE__ */ y.jsxDEV("span", { className: "text-xs sm:text-[13px] md:text-sm font-bold text-[#042F61] flex items-center gap-1.5 mt-0.5", children: [
                    /* @__PURE__ */ y.jsxDEV(I0, { className: "w-3.5 h-3.5 text-[#0072CE] shrink-0" }, void 0, !1, {
                      fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                      lineNumber: 596,
                      columnNumber: 23
                    }, void 0),
                    /* @__PURE__ */ y.jsxDEV("span", { className: "truncate", children: L.time || "04:00 PM AEST" }, void 0, !1, {
                      fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                      lineNumber: 597,
                      columnNumber: 23
                    }, void 0)
                  ] }, void 0, !0, {
                    fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                    lineNumber: 595,
                    columnNumber: 21
                  }, void 0)
                ] }, void 0, !0, {
                  fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                  lineNumber: 593,
                  columnNumber: 19
                }, void 0)
              ] }, void 0, !0, {
                fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                lineNumber: 578,
                columnNumber: 17
              }, void 0),
              /* @__PURE__ */ y.jsxDEV("div", { className: "sm:hidden pt-3 mt-3 border-t border-slate-300/40 flex justify-end", children: /* @__PURE__ */ y.jsxDEV(
                "a",
                {
                  href: "#wp-gravity-form-mount",
                  onClick: ie,
                  className: "w-full bg-[#FDB913] hover:bg-[#042F61] text-[#042F61] hover:text-[#FDB913] text-sm font-black tracking-wider uppercase py-3.5 px-6 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer select-none",
                  children: [
                    /* @__PURE__ */ y.jsxDEV("span", { children: "Join Now" }, void 0, !1, {
                      fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                      lineNumber: 609,
                      columnNumber: 21
                    }, void 0),
                    /* @__PURE__ */ y.jsxDEV(fc, { className: "w-4 h-4" }, void 0, !1, {
                      fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                      lineNumber: 610,
                      columnNumber: 21
                    }, void 0)
                  ]
                },
                void 0,
                !0,
                {
                  fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                  lineNumber: 604,
                  columnNumber: 19
                },
                void 0
              ) }, void 0, !1, {
                fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                lineNumber: 603,
                columnNumber: 17
              }, void 0)
            ] }, void 0, !0, {
              fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
              lineNumber: 577,
              columnNumber: 15
            }, void 0)
          ] }, void 0, !0, {
            fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
            lineNumber: 462,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ y.jsxDEV(
            "svg",
            {
              className: "hidden sm:block absolute -bottom-px -right-px w-[265px] h-[101px] pointer-events-none z-10",
              viewBox: "0 0 264 100",
              preserveAspectRatio: "none",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              "aria-hidden": "true",
              children: /* @__PURE__ */ y.jsxDEV(
                "path",
                {
                  d: "M 264,0 A 24,24 0 0,1 240,24 L 48,24 A 24,24 0 0,0 24,48 L 24,76 A 24,24 0 0,1 0,100 L 264,100 Z",
                  fill: "#F4F7FB"
                },
                void 0,
                !1,
                {
                  fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                  lineNumber: 630,
                  columnNumber: 15
                },
                void 0
              )
            },
            void 0,
            !1,
            {
              fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
              lineNumber: 621,
              columnNumber: 13
            },
            void 0
          ),
          /* @__PURE__ */ y.jsxDEV("div", { className: "hidden sm:flex absolute bottom-3.5 right-[1px] z-20", children: /* @__PURE__ */ y.jsxDEV(
            "a",
            {
              href: "#wp-gravity-form-mount",
              onClick: ie,
              className: "relative group overflow-hidden bg-[#FDB913] hover:bg-[#0072CE] text-[#042F61] hover:text-white text-sm font-black tracking-wider uppercase px-[55px] py-3.5 rounded-full shadow-lg border border-[#FDB913]/60 hover:border-[#0072CE] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer select-none",
              children: [
                /* @__PURE__ */ y.jsxDEV("div", { className: "absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none -skew-x-12" }, void 0, !1, {
                  fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                  lineNumber: 646,
                  columnNumber: 17
                }, void 0),
                /* @__PURE__ */ y.jsxDEV("span", { className: "relative z-10 whitespace-nowrap", children: "JOIN NOW" }, void 0, !1, {
                  fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                  lineNumber: 648,
                  columnNumber: 17
                }, void 0),
                /* @__PURE__ */ y.jsxDEV(fc, { className: "w-4.5 h-4.5 relative z-10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 stroke-[2.5]" }, void 0, !1, {
                  fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                  lineNumber: 649,
                  columnNumber: 17
                }, void 0)
              ]
            },
            void 0,
            !0,
            {
              fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
              lineNumber: 640,
              columnNumber: 15
            },
            void 0
          ) }, void 0, !1, {
            fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
            lineNumber: 639,
            columnNumber: 13
          }, void 0)
        ] }, void 0, !0, {
          fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
          lineNumber: 459,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ y.jsxDEV("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-3.5 sm:gap-5", children: [
          /* @__PURE__ */ y.jsxDEV("div", { className: "lg:col-span-4 flex flex-col gap-3.5 sm:gap-5 justify-between", children: [
            /* @__PURE__ */ y.jsxDEV("div", { className: "bg-[#E1EFFB] border border-[#B8DCF8] rounded-[24px] p-5 sm:p-6 flex flex-col justify-between relative shadow-sm hover:shadow-md transition-shadow flex-1", children: [
              /* @__PURE__ */ y.jsxDEV("div", { className: "flex items-start justify-between gap-4 mb-4", children: [
                /* @__PURE__ */ y.jsxDEV("div", { children: [
                  /* @__PURE__ */ y.jsxDEV("span", { className: "text-[11px] font-bold text-[#0072CE] uppercase tracking-widest block", children: "Our" }, void 0, !1, {
                    fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                    lineNumber: 673,
                    columnNumber: 21
                  }, void 0),
                  /* @__PURE__ */ y.jsxDEV("h2", { className: "text-2xl sm:text-[24px] font-black text-[#042F61] tracking-tight leading-tight mt-0.5", children: "Community" }, void 0, !1, {
                    fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                    lineNumber: 674,
                    columnNumber: 21
                  }, void 0)
                ] }, void 0, !0, {
                  fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                  lineNumber: 672,
                  columnNumber: 19
                }, void 0),
                /* @__PURE__ */ y.jsxDEV(
                  "a",
                  {
                    href: "mailto:professionaldevelopment@chelsongordon.com",
                    className: "w-9 h-9 rounded-full bg-white shadow-sm flex items-center justify-center text-[#042F61] hover:bg-[#FDB913] hover:text-[#042F61] hover:scale-105 active:scale-95 transition-all cursor-pointer group",
                    "aria-label": "Email Our Community: professionaldevelopment@chelsongordon.com",
                    title: "Email our community team",
                    children: /* @__PURE__ */ y.jsxDEV(hE, { className: "w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" }, void 0, !1, {
                      fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                      lineNumber: 685,
                      columnNumber: 21
                    }, void 0)
                  },
                  void 0,
                  !1,
                  {
                    fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                    lineNumber: 679,
                    columnNumber: 19
                  },
                  void 0
                )
              ] }, void 0, !0, {
                fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                lineNumber: 671,
                columnNumber: 17
              }, void 0),
              /* @__PURE__ */ y.jsxDEV("div", { className: "space-y-3", children: [
                /* @__PURE__ */ y.jsxDEV("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ y.jsxDEV("div", { className: "w-9 h-9 rounded-full bg-white shadow-xs flex items-center justify-center text-[#042F61] shrink-0", children: /* @__PURE__ */ y.jsxDEV(cE, { className: "w-4 h-4 text-[#042F61]" }, void 0, !1, {
                    fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                    lineNumber: 694,
                    columnNumber: 23
                  }, void 0) }, void 0, !1, {
                    fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                    lineNumber: 693,
                    columnNumber: 21
                  }, void 0),
                  /* @__PURE__ */ y.jsxDEV("div", { children: [
                    /* @__PURE__ */ y.jsxDEV("span", { className: "text-sm sm:text-base font-black text-[#042F61] block leading-tight", children: "1,200+ Active" }, void 0, !1, {
                      fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                      lineNumber: 697,
                      columnNumber: 23
                    }, void 0),
                    /* @__PURE__ */ y.jsxDEV("span", { className: "text-[11px] font-semibold text-slate-600 block", children: "Educators & Assessors" }, void 0, !1, {
                      fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                      lineNumber: 698,
                      columnNumber: 23
                    }, void 0)
                  ] }, void 0, !0, {
                    fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                    lineNumber: 696,
                    columnNumber: 21
                  }, void 0)
                ] }, void 0, !0, {
                  fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                  lineNumber: 692,
                  columnNumber: 19
                }, void 0),
                /* @__PURE__ */ y.jsxDEV("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ y.jsxDEV("div", { className: "w-9 h-9 rounded-full bg-white shadow-xs flex items-center justify-center text-[#042F61] shrink-0", children: /* @__PURE__ */ y.jsxDEV(tE, { className: "w-4 h-4 text-[#042F61] fill-[#042F61]/10" }, void 0, !1, {
                    fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                    lineNumber: 705,
                    columnNumber: 23
                  }, void 0) }, void 0, !1, {
                    fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                    lineNumber: 704,
                    columnNumber: 21
                  }, void 0),
                  /* @__PURE__ */ y.jsxDEV("div", { children: [
                    /* @__PURE__ */ y.jsxDEV("span", { className: "text-sm sm:text-base font-black text-[#042F61] block leading-tight", children: "350+ Hours" }, void 0, !1, {
                      fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                      lineNumber: 708,
                      columnNumber: 23
                    }, void 0),
                    /* @__PURE__ */ y.jsxDEV("span", { className: "text-[11px] font-semibold text-slate-600 block", children: "Of PD Masterclasses" }, void 0, !1, {
                      fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                      lineNumber: 709,
                      columnNumber: 23
                    }, void 0)
                  ] }, void 0, !0, {
                    fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                    lineNumber: 707,
                    columnNumber: 21
                  }, void 0)
                ] }, void 0, !0, {
                  fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                  lineNumber: 703,
                  columnNumber: 19
                }, void 0),
                /* @__PURE__ */ y.jsxDEV("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ y.jsxDEV("div", { className: "w-9 h-9 rounded-full bg-white shadow-xs flex items-center justify-center text-[#042F61] shrink-0", children: /* @__PURE__ */ y.jsxDEV(Hc, { className: "w-4 h-4 text-[#042F61]" }, void 0, !1, {
                    fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                    lineNumber: 716,
                    columnNumber: 23
                  }, void 0) }, void 0, !1, {
                    fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                    lineNumber: 715,
                    columnNumber: 21
                  }, void 0),
                  /* @__PURE__ */ y.jsxDEV("div", { children: [
                    /* @__PURE__ */ y.jsxDEV("span", { className: "text-sm sm:text-base font-black text-[#042F61] block leading-tight", children: "100% ASQA" }, void 0, !1, {
                      fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                      lineNumber: 719,
                      columnNumber: 23
                    }, void 0),
                    /* @__PURE__ */ y.jsxDEV("span", { className: "text-[11px] font-semibold text-slate-600 block", children: "Compliant Frameworks" }, void 0, !1, {
                      fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                      lineNumber: 720,
                      columnNumber: 23
                    }, void 0)
                  ] }, void 0, !0, {
                    fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                    lineNumber: 718,
                    columnNumber: 21
                  }, void 0)
                ] }, void 0, !0, {
                  fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                  lineNumber: 714,
                  columnNumber: 19
                }, void 0)
              ] }, void 0, !0, {
                fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                lineNumber: 690,
                columnNumber: 17
              }, void 0)
            ] }, void 0, !0, {
              fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
              lineNumber: 669,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ y.jsxDEV("div", { className: "bg-[#E1EFFB] border border-[#B8DCF8] rounded-[24px] p-5 sm:p-6 flex flex-col justify-between relative shadow-sm hover:shadow-md transition-shadow", children: [
              /* @__PURE__ */ y.jsxDEV("div", { children: [
                /* @__PURE__ */ y.jsxDEV("div", { className: "flex items-start justify-between gap-4 mb-2", children: [
                  /* @__PURE__ */ y.jsxDEV("div", { children: [
                    /* @__PURE__ */ y.jsxDEV("span", { className: "text-[11px] font-bold text-[#0072CE] uppercase tracking-widest block", children: "Share Your Experience" }, void 0, !1, {
                      fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                      lineNumber: 731,
                      columnNumber: 23
                    }, void 0),
                    /* @__PURE__ */ y.jsxDEV("h2", { className: "text-2xl sm:text-[24px] font-black text-[#042F61] tracking-tight leading-tight mt-0.5", children: "Give Feedback" }, void 0, !1, {
                      fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                      lineNumber: 732,
                      columnNumber: 23
                    }, void 0)
                  ] }, void 0, !0, {
                    fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                    lineNumber: 730,
                    columnNumber: 21
                  }, void 0),
                  /* @__PURE__ */ y.jsxDEV("div", { className: "w-9 h-9 rounded-full bg-white shadow-sm flex items-center justify-center text-[#042F61] shrink-0", children: /* @__PURE__ */ y.jsxDEV($D, { className: "w-4 h-4 text-[#042F61]" }, void 0, !1, {
                    fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                    lineNumber: 737,
                    columnNumber: 23
                  }, void 0) }, void 0, !1, {
                    fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                    lineNumber: 736,
                    columnNumber: 21
                  }, void 0)
                ] }, void 0, !0, {
                  fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                  lineNumber: 729,
                  columnNumber: 19
                }, void 0),
                /* @__PURE__ */ y.jsxDEV("p", { className: "text-xs text-slate-600 leading-relaxed mt-2 mb-4", children: "Help us refine future vocational masterclasses and topic compliance coverage." }, void 0, !1, {
                  fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                  lineNumber: 740,
                  columnNumber: 19
                }, void 0)
              ] }, void 0, !0, {
                fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                lineNumber: 728,
                columnNumber: 17
              }, void 0),
              /* @__PURE__ */ y.jsxDEV(
                "a",
                {
                  href: "https://chelsongordon.com/feedback/",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "w-full inline-flex items-center justify-center gap-2 bg-[#042F61] hover:bg-[#0072CE] text-white text-xs font-black uppercase tracking-wider px-5 py-3 rounded-xl shadow-xs transition-colors cursor-pointer group select-none",
                  children: [
                    /* @__PURE__ */ y.jsxDEV("span", { children: "Give Feedback" }, void 0, !1, {
                      fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                      lineNumber: 751,
                      columnNumber: 19
                    }, void 0),
                    /* @__PURE__ */ y.jsxDEV(Lc, { className: "w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" }, void 0, !1, {
                      fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                      lineNumber: 752,
                      columnNumber: 19
                    }, void 0)
                  ]
                },
                void 0,
                !0,
                {
                  fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                  lineNumber: 745,
                  columnNumber: 17
                },
                void 0
              )
            ] }, void 0, !0, {
              fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
              lineNumber: 727,
              columnNumber: 15
            }, void 0)
          ] }, void 0, !0, {
            fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
            lineNumber: 666,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ y.jsxDEV("div", { className: "lg:col-span-8 bg-gradient-to-br from-[#123E6E] via-[#1A4E88] to-[#225E9F] text-white border border-white/15 rounded-[24px] p-5 sm:p-6 md:p-7 flex flex-col justify-start relative overflow-hidden shadow-md", children: [
            /* @__PURE__ */ y.jsxDEV(
              "div",
              {
                className: "absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-white/35 via-50% to-transparent pointer-events-none",
                "aria-hidden": "true"
              },
              void 0,
              !1,
              {
                fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                lineNumber: 766,
                columnNumber: 15
              },
              void 0
            ),
            /* @__PURE__ */ y.jsxDEV(
              "div",
              {
                className: "absolute -top-14 -right-14 w-40 h-40 bg-white/10 rounded-full blur-2xl pointer-events-none",
                "aria-hidden": "true"
              },
              void 0,
              !1,
              {
                fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                lineNumber: 770,
                columnNumber: 15
              },
              void 0
            ),
            /* @__PURE__ */ y.jsxDEV("style", { children: `
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
              lineNumber: 776,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ y.jsxDEV("div", { className: "flex items-center justify-between pb-3.5 sm:pb-4 border-b border-white/15 mb-3 sm:mb-3.5 relative z-10", children: [
              /* @__PURE__ */ y.jsxDEV("div", { children: [
                /* @__PURE__ */ y.jsxDEV("span", { className: "text-[11px] font-bold text-sky-200 uppercase tracking-wider block", children: "50+ Completed Masterclasses" }, void 0, !1, {
                  fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                  lineNumber: 799,
                  columnNumber: 19
                }, void 0),
                /* @__PURE__ */ y.jsxDEV("h2", { className: "text-2xl sm:text-[26px] font-black text-white tracking-tight leading-tight mt-0.5", children: "Previous Sessions" }, void 0, !1, {
                  fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                  lineNumber: 802,
                  columnNumber: 19
                }, void 0)
              ] }, void 0, !0, {
                fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                lineNumber: 798,
                columnNumber: 17
              }, void 0),
              /* @__PURE__ */ y.jsxDEV("span", { className: "text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/15 text-white border border-white/25 shadow-2xs font-sans", children: [
                c.length,
                " Topics"
              ] }, void 0, !0, {
                fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                lineNumber: 807,
                columnNumber: 17
              }, void 0)
            ] }, void 0, !0, {
              fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
              lineNumber: 797,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ y.jsxDEV(
              "div",
              {
                ref: C,
                onScroll: q,
                className: `overflow-y-auto max-h-[310px] sm:max-h-[340px] lg:max-h-[365px] pr-1.5 flex flex-col gap-1.5 sm:gap-2 past-pd-scroll-area relative z-10 ${b ? "is-scrolling" : ""}`,
                style: {
                  scrollbarWidth: "thin",
                  scrollbarColor: b ? "rgba(255, 255, 255, 0.4) transparent" : "transparent transparent"
                },
                tabIndex: 0,
                role: "region",
                "aria-label": "Scrollable list of previous session topics",
                children: [
                  (c.length > 3 ? c.slice(0, 3) : c).map((R, H) => {
                    const $ = ua(R.title);
                    return /* @__PURE__ */ y.jsxDEV(
                      "div",
                      {
                        onClick: () => j(R),
                        onKeyDown: (Q) => {
                          (Q.key === "Enter" || Q.key === " ") && (Q.preventDefault(), j(R));
                        },
                        role: "button",
                        tabIndex: 0,
                        "aria-label": `View details for ${$}`,
                        className: "px-2.5 py-0 rounded-xl bg-white/10 border border-white/15 hover:border-white/40 hover:bg-white/20 transition-all duration-200 group flex items-center w-full cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-white/40 select-none",
                        children: [
                          /* @__PURE__ */ y.jsxDEV("div", { className: "w-[16%] sm:w-[13%] aspect-square flex items-center justify-center shrink-0 -translate-x-[4px]", children: /* @__PURE__ */ y.jsxDEV("span", { className: "text-lg sm:text-xl font-black text-[#FDB913] font-sans select-none tracking-tight", children: H + 1 }, void 0, !1, {
                            fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                            lineNumber: 848,
                            columnNumber: 25
                          }, void 0) }, void 0, !1, {
                            fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                            lineNumber: 847,
                            columnNumber: 23
                          }, void 0),
                          /* @__PURE__ */ y.jsxDEV("div", { className: "w-[84%] sm:w-[87%] flex-1 pl-2 sm:pl-3 pr-2 py-0.5 sm:py-1 -translate-x-[4px]", children: [
                            /* @__PURE__ */ y.jsxDEV("div", { className: "flex items-center gap-2 mb-0.5", children: [
                              /* @__PURE__ */ y.jsxDEV("span", { className: "text-[10px] sm:text-[11px] font-semibold text-sky-200 flex items-center gap-1", children: [
                                /* @__PURE__ */ y.jsxDEV(hs, { className: "w-3 h-3 text-sky-300" }, void 0, !1, {
                                  fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                                  lineNumber: 857,
                                  columnNumber: 29
                                }, void 0),
                                pc(R.date)
                              ] }, void 0, !0, {
                                fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                                lineNumber: 856,
                                columnNumber: 27
                              }, void 0),
                              R.time && /* @__PURE__ */ y.jsxDEV("span", { className: "text-[10px] text-sky-200/80", children: [
                                "• ",
                                R.time
                              ] }, void 0, !0, {
                                fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                                lineNumber: 861,
                                columnNumber: 29
                              }, void 0)
                            ] }, void 0, !0, {
                              fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                              lineNumber: 855,
                              columnNumber: 25
                            }, void 0),
                            ng($)
                          ] }, void 0, !0, {
                            fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                            lineNumber: 854,
                            columnNumber: 23
                          }, void 0)
                        ]
                      },
                      R.id || H,
                      !0,
                      {
                        fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                        lineNumber: 832,
                        columnNumber: 21
                      },
                      void 0
                    );
                  }),
                  c.length > 3 && /* @__PURE__ */ y.jsxDEV(R0, { initial: !1, children: !v && /* @__PURE__ */ y.jsxDEV(
                    J0.div,
                    {
                      initial: { opacity: 0, height: 0, marginTop: -6 },
                      animate: { opacity: 1, height: "auto", marginTop: 0 },
                      exit: { opacity: 0, height: 0, marginTop: -6 },
                      transition: { duration: 0.28, ease: "easeInOut" },
                      className: "overflow-hidden w-full shrink-0",
                      children: /* @__PURE__ */ y.jsxDEV(
                        "div",
                        {
                          onClick: F,
                          onKeyDown: (R) => {
                            (R.key === "Enter" || R.key === " ") && (R.preventDefault(), F());
                          },
                          role: "button",
                          tabIndex: 0,
                          "aria-label": `Scroll to view ${c.length - 3} more sessions`,
                          className: "w-full py-1.5 px-2 flex items-center justify-center gap-2 text-white hover:text-[#FDB913] transition-colors cursor-pointer select-none group focus:outline-hidden",
                          children: [
                            /* @__PURE__ */ y.jsxDEV(wD, { className: "w-4 h-4 shrink-0 text-white group-hover:text-[#FDB913] group-hover:translate-y-0.5 transition-transform duration-200" }, void 0, !1, {
                              fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                              lineNumber: 895,
                              columnNumber: 27
                            }, void 0),
                            /* @__PURE__ */ y.jsxDEV("span", { className: "text-xs sm:text-sm font-semibold text-white group-hover:text-[#FDB913] transition-colors tracking-tight whitespace-nowrap", children: "Scroll to view more sessions" }, void 0, !1, {
                              fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                              lineNumber: 896,
                              columnNumber: 27
                            }, void 0),
                            /* @__PURE__ */ y.jsxDEV("span", { className: "inline-flex items-center justify-center px-2 py-0.5 text-[11px] font-bold rounded-full bg-white/15 text-white border border-white/20 group-hover:bg-white/25 group-hover:text-[#FDB913] transition-colors whitespace-nowrap shrink-0", children: [
                              "+",
                              c.length - 3
                            ] }, void 0, !0, {
                              fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                              lineNumber: 899,
                              columnNumber: 27
                            }, void 0)
                          ]
                        },
                        void 0,
                        !0,
                        {
                          fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                          lineNumber: 882,
                          columnNumber: 25
                        },
                        void 0
                      )
                    },
                    "scroll-more-past-indicator",
                    !1,
                    {
                      fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                      lineNumber: 874,
                      columnNumber: 23
                    },
                    void 0
                  ) }, void 0, !1, {
                    fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                    lineNumber: 872,
                    columnNumber: 19
                  }, void 0),
                  c.length > 3 && c.slice(3).map((R, H) => {
                    const $ = ua(R.title), Q = H + 4;
                    return /* @__PURE__ */ y.jsxDEV(
                      "div",
                      {
                        onClick: () => j(R),
                        onKeyDown: (se) => {
                          (se.key === "Enter" || se.key === " ") && (se.preventDefault(), j(R));
                        },
                        role: "button",
                        tabIndex: 0,
                        "aria-label": `View details for ${$}`,
                        className: "px-2.5 py-0 rounded-xl bg-white/10 border border-white/15 hover:border-white/40 hover:bg-white/20 transition-all duration-200 group flex items-center w-full cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-white/40 select-none",
                        children: [
                          /* @__PURE__ */ y.jsxDEV("div", { className: "w-[16%] sm:w-[13%] aspect-square flex items-center justify-center shrink-0 -translate-x-[4px]", children: /* @__PURE__ */ y.jsxDEV("span", { className: "text-lg sm:text-xl font-black text-[#FDB913] font-sans select-none tracking-tight", children: Q }, void 0, !1, {
                            fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                            lineNumber: 930,
                            columnNumber: 25
                          }, void 0) }, void 0, !1, {
                            fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                            lineNumber: 929,
                            columnNumber: 23
                          }, void 0),
                          /* @__PURE__ */ y.jsxDEV("div", { className: "w-[84%] sm:w-[87%] flex-1 pl-2 sm:pl-3 pr-2 py-0.5 sm:py-1 -translate-x-[4px]", children: [
                            /* @__PURE__ */ y.jsxDEV("div", { className: "flex items-center gap-2 mb-0.5", children: [
                              /* @__PURE__ */ y.jsxDEV("span", { className: "text-[10px] sm:text-[11px] font-semibold text-sky-200 flex items-center gap-1", children: [
                                /* @__PURE__ */ y.jsxDEV(hs, { className: "w-3 h-3 text-sky-300" }, void 0, !1, {
                                  fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                                  lineNumber: 939,
                                  columnNumber: 29
                                }, void 0),
                                pc(R.date)
                              ] }, void 0, !0, {
                                fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                                lineNumber: 938,
                                columnNumber: 27
                              }, void 0),
                              R.time && /* @__PURE__ */ y.jsxDEV("span", { className: "text-[10px] text-sky-200/80", children: [
                                "• ",
                                R.time
                              ] }, void 0, !0, {
                                fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                                lineNumber: 943,
                                columnNumber: 29
                              }, void 0)
                            ] }, void 0, !0, {
                              fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                              lineNumber: 937,
                              columnNumber: 25
                            }, void 0),
                            ng($)
                          ] }, void 0, !0, {
                            fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                            lineNumber: 936,
                            columnNumber: 23
                          }, void 0)
                        ]
                      },
                      R.id || Q,
                      !0,
                      {
                        fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                        lineNumber: 914,
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
                lineNumber: 813,
                columnNumber: 15
              },
              void 0
            )
          ] }, void 0, !0, {
            fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
            lineNumber: 763,
            columnNumber: 13
          }, void 0)
        ] }, void 0, !0, {
          fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
          lineNumber: 659,
          columnNumber: 11
        }, void 0)
      ] }, void 0, !0, {
        fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
        lineNumber: 452,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ y.jsxDEV(
        "div",
        {
          id: "booking-registration-section",
          className: "mt-8 sm:mt-12 bg-white rounded-[26px] sm:rounded-[28px] p-6 sm:p-8 lg:p-10 border border-slate-200/80 shadow-sm relative overflow-hidden scroll-mt-28 sm:scroll-mt-36",
          children: [
            /* @__PURE__ */ y.jsxDEV("div", { className: "mb-6 sm:mb-8 pb-5 sm:pb-6 border-b border-slate-100 relative z-10", children: [
              /* @__PURE__ */ y.jsxDEV("div", { className: "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0072CE]/10 text-[#0072CE] text-xs font-bold tracking-wider uppercase mb-3", children: [
                /* @__PURE__ */ y.jsxDEV(Il, { className: "w-3.5 h-3.5 text-[#FDB913]" }, void 0, !1, {
                  fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                  lineNumber: 970,
                  columnNumber: 15
                }, void 0),
                /* @__PURE__ */ y.jsxDEV("span", { children: "Session Registration" }, void 0, !1, {
                  fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                  lineNumber: 971,
                  columnNumber: 15
                }, void 0)
              ] }, void 0, !0, {
                fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                lineNumber: 969,
                columnNumber: 13
              }, void 0),
              /* @__PURE__ */ y.jsxDEV("h2", { className: "text-2xl sm:text-3xl lg:text-[32px] font-black text-[#042F61] tracking-tight leading-tight", children: "Book Your Professional Development Session" }, void 0, !1, {
                fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                lineNumber: 973,
                columnNumber: 13
              }, void 0),
              /* @__PURE__ */ y.jsxDEV("p", { className: "text-sm sm:text-base text-slate-600 max-w-2xl mt-2 leading-relaxed", children: "Complete the registration form below to secure your seat for upcoming masterclasses and receive direct session access details." }, void 0, !1, {
                fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                lineNumber: 976,
                columnNumber: 13
              }, void 0)
            ] }, void 0, !0, {
              fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
              lineNumber: 968,
              columnNumber: 11
            }, void 0),
            /* @__PURE__ */ y.jsxDEV(
              "div",
              {
                id: "wp-gravity-form-mount",
                ref: U,
                className: "gform_wrapper gravity-form-mount-container w-full min-h-[160px] flex items-center justify-center scroll-mt-28 sm:scroll-mt-36",
                "data-form-type": "gravity-forms",
                "data-form-name": "pd-session-registration",
                children: /* @__PURE__ */ y.jsxDEV("span", { className: "text-slate-400 text-xs font-mono select-none", children: "#wp-gravity-form-mount" }, void 0, !1, {
                  fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                  lineNumber: 989,
                  columnNumber: 13
                }, void 0)
              },
              void 0,
              !1,
              {
                fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                lineNumber: 981,
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
          lineNumber: 963,
          columnNumber: 9
        },
        void 0
      ),
      /* @__PURE__ */ y.jsxDEV(pE, {}, void 0, !1, {
        fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
        lineNumber: 999,
        columnNumber: 9
      }, void 0)
    ] }, void 0, !0, {
      fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
      lineNumber: 447,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ y.jsxDEV(R0, { children: A && /* @__PURE__ */ y.jsxDEV(
      "div",
      {
        className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs",
        onClick: () => j(null),
        children: /* @__PURE__ */ y.jsxDEV(
          J0.div,
          {
            initial: { opacity: 0, scale: 0.95, y: 15 },
            animate: { opacity: 1, scale: 1, y: 0 },
            exit: { opacity: 0, scale: 0.95, y: 15 },
            transition: { duration: 0.2 },
            className: "bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative max-h-[90vh] overflow-y-auto",
            onClick: (R) => R.stopPropagation(),
            children: [
              /* @__PURE__ */ y.jsxDEV(
                "button",
                {
                  onClick: () => j(null),
                  className: "absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors cursor-pointer",
                  "aria-label": "Close Modal",
                  children: /* @__PURE__ */ y.jsxDEV(dE, { className: "w-4 h-4" }, void 0, !1, {
                    fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                    lineNumber: 1026,
                    columnNumber: 17
                  }, void 0)
                },
                void 0,
                !1,
                {
                  fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                  lineNumber: 1021,
                  columnNumber: 15
                },
                void 0
              ),
              /* @__PURE__ */ y.jsxDEV("div", { className: "space-y-4", children: [
                /* @__PURE__ */ y.jsxDEV("div", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0072CE]/10 text-[#0072CE] text-xs font-bold uppercase tracking-wider", children: [
                  /* @__PURE__ */ y.jsxDEV(Il, { className: "w-3.5 h-3.5 text-[#FDB913]" }, void 0, !1, {
                    fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                    lineNumber: 1031,
                    columnNumber: 19
                  }, void 0),
                  /* @__PURE__ */ y.jsxDEV("span", { children: "About this Session" }, void 0, !1, {
                    fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                    lineNumber: 1032,
                    columnNumber: 19
                  }, void 0)
                ] }, void 0, !0, {
                  fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                  lineNumber: 1030,
                  columnNumber: 17
                }, void 0),
                /* @__PURE__ */ y.jsxDEV("h3", { className: "text-2xl font-black text-[#042F61] tracking-tight leading-snug", children: A.title }, void 0, !1, {
                  fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                  lineNumber: 1035,
                  columnNumber: 17
                }, void 0),
                /* @__PURE__ */ y.jsxDEV("div", { className: "grid grid-cols-2 gap-3 py-3 border-y border-slate-100", children: [
                  /* @__PURE__ */ y.jsxDEV("div", { className: "flex items-center gap-2.5", children: [
                    /* @__PURE__ */ y.jsxDEV("div", { className: "w-8 h-8 rounded-lg bg-[#0072CE]/10 flex items-center justify-center text-[#0072CE]", children: /* @__PURE__ */ y.jsxDEV(hs, { className: "w-4 h-4" }, void 0, !1, {
                      fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                      lineNumber: 1043,
                      columnNumber: 23
                    }, void 0) }, void 0, !1, {
                      fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                      lineNumber: 1042,
                      columnNumber: 21
                    }, void 0),
                    /* @__PURE__ */ y.jsxDEV("div", { children: [
                      /* @__PURE__ */ y.jsxDEV("span", { className: "text-[10px] uppercase font-bold text-[#042F61] block tracking-wider", children: "Session Date" }, void 0, !1, {
                        fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                        lineNumber: 1046,
                        columnNumber: 23
                      }, void 0),
                      /* @__PURE__ */ y.jsxDEV("span", { className: "text-sm font-semibold text-slate-800", children: A.date }, void 0, !1, {
                        fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                        lineNumber: 1047,
                        columnNumber: 23
                      }, void 0)
                    ] }, void 0, !0, {
                      fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                      lineNumber: 1045,
                      columnNumber: 21
                    }, void 0)
                  ] }, void 0, !0, {
                    fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                    lineNumber: 1041,
                    columnNumber: 19
                  }, void 0),
                  /* @__PURE__ */ y.jsxDEV("div", { className: "flex items-center gap-2.5", children: [
                    /* @__PURE__ */ y.jsxDEV("div", { className: "w-8 h-8 rounded-lg bg-[#0072CE]/10 flex items-center justify-center text-[#0072CE]", children: /* @__PURE__ */ y.jsxDEV(I0, { className: "w-4 h-4" }, void 0, !1, {
                      fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                      lineNumber: 1053,
                      columnNumber: 23
                    }, void 0) }, void 0, !1, {
                      fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                      lineNumber: 1052,
                      columnNumber: 21
                    }, void 0),
                    /* @__PURE__ */ y.jsxDEV("div", { children: [
                      /* @__PURE__ */ y.jsxDEV("span", { className: "text-[10px] uppercase font-bold text-[#042F61] block tracking-wider", children: "Session Time" }, void 0, !1, {
                        fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                        lineNumber: 1056,
                        columnNumber: 23
                      }, void 0),
                      /* @__PURE__ */ y.jsxDEV("span", { className: "text-sm font-semibold text-slate-800", children: A.time }, void 0, !1, {
                        fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                        lineNumber: 1057,
                        columnNumber: 23
                      }, void 0)
                    ] }, void 0, !0, {
                      fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                      lineNumber: 1055,
                      columnNumber: 21
                    }, void 0)
                  ] }, void 0, !0, {
                    fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                    lineNumber: 1051,
                    columnNumber: 19
                  }, void 0)
                ] }, void 0, !0, {
                  fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                  lineNumber: 1040,
                  columnNumber: 17
                }, void 0),
                /* @__PURE__ */ y.jsxDEV("div", { children: [
                  /* @__PURE__ */ y.jsxDEV("h4", { className: "text-xs uppercase font-bold text-[#042F61] tracking-wider mb-2", children: "Description" }, void 0, !1, {
                    fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                    lineNumber: 1063,
                    columnNumber: 19
                  }, void 0),
                  (A.description ? A.description.replace(/<[^>]*>?/gm, "").trim() : "").length > 0 ? /* @__PURE__ */ y.jsxDEV("p", { className: "text-sm text-slate-600 leading-relaxed whitespace-pre-line", children: ua(A.description) }, void 0, !1, {
                    fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                    lineNumber: 1070,
                    columnNumber: 25
                  }, void 0) : /* @__PURE__ */ y.jsxDEV("div", { className: "p-3.5 sm:p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-slate-600 flex items-start gap-3", children: [
                    /* @__PURE__ */ y.jsxDEV("div", { className: "w-8 h-8 rounded-xl bg-[#FDB913]/15 flex items-center justify-center shrink-0 mt-0.5", children: /* @__PURE__ */ y.jsxDEV(Il, { className: "w-4 h-4 text-[#FDB913]" }, void 0, !1, {
                      fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                      lineNumber: 1079,
                      columnNumber: 27
                    }, void 0) }, void 0, !1, {
                      fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                      lineNumber: 1078,
                      columnNumber: 25
                    }, void 0),
                    /* @__PURE__ */ y.jsxDEV("div", { children: [
                      /* @__PURE__ */ y.jsxDEV("span", { className: "text-xs font-bold text-[#042F61] uppercase tracking-wider block mb-1", children: "Description Pending Update" }, void 0, !1, {
                        fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                        lineNumber: 1082,
                        columnNumber: 27
                      }, void 0),
                      /* @__PURE__ */ y.jsxDEV("p", { className: "text-xs sm:text-sm text-slate-500 leading-relaxed", children: "A detailed session syllabus, learning outcomes, and recording archives for this masterclass will be updated shortly. You can reserve your seat or inquiry below." }, void 0, !1, {
                        fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                        lineNumber: 1085,
                        columnNumber: 27
                      }, void 0)
                    ] }, void 0, !0, {
                      fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                      lineNumber: 1081,
                      columnNumber: 25
                    }, void 0)
                  ] }, void 0, !0, {
                    fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                    lineNumber: 1077,
                    columnNumber: 23
                  }, void 0)
                ] }, void 0, !0, {
                  fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                  lineNumber: 1062,
                  columnNumber: 17
                }, void 0),
                /* @__PURE__ */ y.jsxDEV("div", { className: "pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-3", children: [
                  /* @__PURE__ */ y.jsxDEV(
                    "button",
                    {
                      type: "button",
                      onClick: () => {
                        j(null), setTimeout(() => {
                          ie();
                        }, 120);
                      },
                      className: "flex-1 bg-[#FDB913] hover:bg-[#0072CE] text-[#042F61] hover:text-white font-black text-sm py-3.5 px-6 rounded-xl shadow-md transition-all duration-300 flex items-center justify-center gap-2 text-center cursor-pointer select-none group",
                      children: [
                        /* @__PURE__ */ y.jsxDEV("span", { children: "Book This Session" }, void 0, !1, {
                          fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                          lineNumber: 1105,
                          columnNumber: 21
                        }, void 0),
                        /* @__PURE__ */ y.jsxDEV(fc, { className: "w-4 h-4 stroke-[2.5] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" }, void 0, !1, {
                          fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                          lineNumber: 1106,
                          columnNumber: 21
                        }, void 0)
                      ]
                    },
                    void 0,
                    !0,
                    {
                      fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                      lineNumber: 1095,
                      columnNumber: 19
                    },
                    void 0
                  ),
                  A.url && /* @__PURE__ */ y.jsxDEV(
                    "a",
                    {
                      href: A.url,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "inline-flex items-center justify-center gap-1.5 px-4 py-3.5 rounded-xl border border-slate-200 hover:border-[#0072CE] text-slate-700 hover:text-[#0072CE] font-bold text-xs transition-colors",
                      children: [
                        /* @__PURE__ */ y.jsxDEV("span", { children: "Direct Payment" }, void 0, !1, {
                          fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                          lineNumber: 1115,
                          columnNumber: 23
                        }, void 0),
                        /* @__PURE__ */ y.jsxDEV(Lc, { className: "w-3.5 h-3.5" }, void 0, !1, {
                          fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                          lineNumber: 1116,
                          columnNumber: 23
                        }, void 0)
                      ]
                    },
                    void 0,
                    !0,
                    {
                      fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                      lineNumber: 1109,
                      columnNumber: 21
                    },
                    void 0
                  ),
                  /* @__PURE__ */ y.jsxDEV(
                    "button",
                    {
                      type: "button",
                      onClick: () => j(null),
                      className: "border border-slate-300 hover:border-slate-400 text-slate-700 font-bold text-sm py-3.5 px-5 rounded-xl transition-colors cursor-pointer",
                      children: "Dismiss"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                      lineNumber: 1119,
                      columnNumber: 19
                    },
                    void 0
                  )
                ] }, void 0, !0, {
                  fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                  lineNumber: 1094,
                  columnNumber: 17
                }, void 0)
              ] }, void 0, !0, {
                fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
                lineNumber: 1029,
                columnNumber: 15
              }, void 0)
            ]
          },
          void 0,
          !0,
          {
            fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
            lineNumber: 1012,
            columnNumber: 13
          },
          void 0
        )
      },
      void 0,
      !1,
      {
        fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
        lineNumber: 1008,
        columnNumber: 11
      },
      void 0
    ) }, void 0, !1, {
      fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
      lineNumber: 1006,
      columnNumber: 7
    }, void 0)
  ] }, void 0, !0, {
    fileName: "/app/applet/src/components/BookPDSession/BookPDSessionPage.tsx",
    lineNumber: 431,
    columnNumber: 5
  }, void 0);
};
if (typeof Node < "u" && Node.prototype) {
  const i = Node.prototype.removeChild;
  Node.prototype.removeChild = function(o) {
    return o.parentNode !== this ? o : i.call(this, o);
  };
  const s = Node.prototype.insertBefore;
  Node.prototype.insertBefore = function(o, c) {
    return c && c.parentNode !== this ? o : s.call(this, o, c);
  };
  const r = Node.prototype.replaceChild;
  Node.prototype.replaceChild = function(o, c) {
    return c.parentNode !== this ? c : r.call(this, o, c);
  };
}
function qc() {
  const i = [
    "#cg-book-pd-session",
    "#book-pd-session-root",
    "#root"
  ];
  let s = null;
  for (const o of i) {
    const c = document.querySelector(o);
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
  s.dataset.cgInitialized = "true", E1.createRoot(s).render(
    /* @__PURE__ */ y.jsxDEV(Y.StrictMode, { children: /* @__PURE__ */ y.jsxDEV(yE, {}, void 0, !1, {
      fileName: "/app/applet/src/pd-session-main.tsx",
      lineNumber: 68,
      columnNumber: 7
    }, this) }, void 0, !1, {
      fileName: "/app/applet/src/pd-session-main.tsx",
      lineNumber: 67,
      columnNumber: 5
    }, this)
  );
}
typeof window < "u" && (window.initCgBookPdSession = qc);
document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", qc) : qc();
export {
  qc as default
};
