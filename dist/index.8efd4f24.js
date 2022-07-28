/*!
 * Observer 3.10.3
 * https://greensock.com
 * 
 * @license Copyright 2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ !function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define([
        "exports"
    ], t) : t((e = e || self).window = e.window || {});
}(this, function(c1) {
    "use strict";
    function _defineProperties(e, t) {
        for(var n = 0; n < t.length; n++){
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
        }
    }
    function q1() {
        return be || "undefined" != typeof window && (be = window.gsap) && be.registerPlugin && be;
    }
    var be, we, Me, Pe, Oe, De, Xe, Ye, ke, t1, ze, Ee, n1 = 1, Te = [];
    c1._scrollers = [], c1._proxies = [];
    function w1(e, t) {
        return ~c1._proxies.indexOf(e) && c1._proxies[c1._proxies.indexOf(e) + 1][t];
    }
    function x(e) {
        return !!~t1.indexOf(e);
    }
    function y(e, t, n, r, o) {
        return e.addEventListener(t, n, {
            passive: !r,
            capture: !!o
        });
    }
    function z(e, t, n) {
        return e.removeEventListener(t, n);
    }
    function C() {
        return ze && ze.isPressed || c1._scrollers.cache++;
    }
    function D1(t) {
        return function(e) {
            return e || 0 === e ? (n1 && (Me.history.scrollRestoration = "manual"), t(e), t.v = e, t.c = c1._scrollers.cache, ze && ze.isPressed && o1("ss", e)) : c1._scrollers.cache === t.c && !o1("ref") || (t.c = c1._scrollers.cache, t.v = t()), t.v;
        };
    }
    function G(e) {
        return be.utils.toArray(e)[0] || ("string" == typeof e && !1 !== be.config().nullTargetWarn ? console.warn("Element not found:", e) : null);
    }
    function H(t, e1) {
        var n = e1.s, r = e1.sc, o = c1._scrollers.indexOf(t), i = r === Se.sc ? 1 : 2;
        return ~o || (o = c1._scrollers.push(t) - 1), c1._scrollers[o + i] || (c1._scrollers[o + i] = w1(t, n) || (x(t) ? r : D1(function(e) {
            return arguments.length ? t[n] = e : t[n];
        })));
    }
    function I(e2, t2, o) {
        function Ha(e, t) {
            var n = Ce();
            t || r2 < n - s ? (c = i, i = e, a = s, s = n) : o ? i += e : i = c + (e - c) / (n - a) * (s - a);
        }
        var i = e2, c = e2, s = Ce(), a = s, r2 = t2 || 50, l = Math.max(500, 3 * r2);
        return {
            update: Ha,
            reset: function reset() {
                c = i = o ? 0 : i, a = s = 0;
            },
            getVelocity: function getVelocity(e) {
                var t = a, n = c, r = Ce();
                return !e && 0 !== e || e === i || Ha(e), s === a || l < r - a ? 0 : (i + (o ? n : -n)) / ((o ? r : s) - t) * 1e3;
            }
        };
    }
    function J(e, t) {
        return t && !e._gsapAllow && e.preventDefault(), e.changedTouches ? e.changedTouches[0] : e;
    }
    function K(e) {
        var t = Math.max.apply(Math, e), n = Math.min.apply(Math, e);
        return Math.abs(t) >= Math.abs(n) ? t : n;
    }
    function L() {
        (ke = be.core.globals().ScrollTrigger) && ke.core && function _integrate() {
            var e3 = ke.core, n = e3.bridge || {}, t3 = e3._scrollers, r = e3._proxies;
            t3.push.apply(t3, c1._scrollers), r.push.apply(r, c1._proxies), c1._scrollers = t3, c1._proxies = r, o1 = function _bridge(e, t) {
                return n[e](t);
            };
        }();
    }
    function M(e) {
        return (be = e || q1()) && "undefined" != typeof document && document.body && (Me = window, Oe = (Pe = document).documentElement, De = Pe.body, t1 = [
            Me,
            Pe,
            Oe,
            De
        ], be.utils.clamp, Ye = "onpointerenter" in De ? "pointer" : "mouse", Xe = s1.isTouch = Me.matchMedia && Me.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in Me || 0 < navigator.maxTouchPoints || 0 < navigator.msMaxTouchPoints ? 2 : 0, Ee = s1.eventTypes = ("ontouchstart" in Oe ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in Oe ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout(function() {
            return n1 = 0;
        }, 500), L(), we = 1), we;
    }
    var Ce = Date.now, o1 = function _bridge(e, t) {
        return t;
    }, r1 = "scrollLeft", i1 = "scrollTop", He = {
        s: r1,
        p: "left",
        p2: "Left",
        os: "right",
        os2: "Right",
        d: "width",
        d2: "Width",
        a: "x",
        sc: D1(function(e) {
            return arguments.length ? Me.scrollTo(e, Se.sc()) : Me.pageXOffset || Pe[r1] || Oe[r1] || De[r1] || 0;
        })
    }, Se = {
        s: i1,
        p: "top",
        p2: "Top",
        os: "bottom",
        os2: "Bottom",
        d: "height",
        d2: "Height",
        a: "y",
        op: He,
        sc: D1(function(e) {
            return arguments.length ? Me.scrollTo(He.sc(), e) : Me.pageYOffset || Pe[i1] || Oe[i1] || De[i1] || 0;
        })
    };
    He.op = Se, c1._scrollers.cache = 0;
    var s1 = (Observer.prototype.init = function init(e4) {
        we || M(be) || console.warn("Please gsap.registerPlugin(Observer)"), ke || L();
        var o2 = e4.tolerance, c = e4.dragMinimum, t4 = e4.type, r3 = e4.target, n2 = e4.lineHeight, i2 = e4.debounce, s = e4.preventDefault, a = e4.onStop, l = e4.onStopDelay, u = e4.ignore, d = e4.wheelSpeed, f = e4.event, g = e4.onDragStart, p = e4.onDragEnd, h = e4.onDrag, v = e4.onPress, _ = e4.onRelease, m = e4.onRight, b = e4.onLeft, w = e4.onUp, P = e4.onDown, O = e4.onChangeX, D = e4.onChangeY, X = e4.onChange, Y = e4.onToggleX, k = e4.onToggleY, E = e4.onHover, T = e4.onHoverEnd, S = e4.onMove, j = e4.ignoreCheck, q = e4.isNormalizer, A = e4.onGestureStart, V = e4.onGestureEnd, F = e4.onWheel, R = e4.onEnable, W = e4.onDisable, B = e4.onClick, N = e4.scrollSpeed, U = e4.capture, Q = e4.allowClicks, Z = e4.lockAxis, $ = e4.onLockAxis;
        function gc() {
            return _e = Ce();
        }
        function hc(e, t) {
            return (se.event = e) && u && ~u.indexOf(e.target) || t && pe && "touch" !== e.pointerType || j && j(e, t);
        }
        function jc() {
            var e = se.deltaX = K(ye), t = se.deltaY = K(xe), n = Math.abs(e) >= o2, r = Math.abs(t) >= o2;
            X && (n || r) && X(se, e, t, ye, xe), n && (m && 0 < se.deltaX && m(se), b && se.deltaX < 0 && b(se), O && O(se), Y && se.deltaX < 0 != ae < 0 && Y(se), ae = se.deltaX, ye[0] = ye[1] = ye[2] = 0), r && (P && 0 < se.deltaY && P(se), w && se.deltaY < 0 && w(se), D && D(se), k && se.deltaY < 0 != le < 0 && k(se), le = se.deltaY, xe[0] = xe[1] = xe[2] = 0), (re || ne) && (S && S(se), $ && ie && $(se), ne && (h(se), ne = !1), re = ie = !1), oe && (F(se), oe = !1), ee = 0;
        }
        function kc(e, t, n) {
            ye[n] += e, xe[n] += t, se._vx.update(e), se._vy.update(t), i2 ? ee = ee || requestAnimationFrame(jc) : jc();
        }
        function lc(e, t) {
            "y" !== ce && (ye[2] += e, se._vx.update(e, !0)), "x" !== ce && (xe[2] += t, se._vy.update(t, !0)), Z && !ce && (se.axis = ce = Math.abs(e) > Math.abs(t) ? "x" : "y", ie = !0), i2 ? ee = ee || requestAnimationFrame(jc) : jc();
        }
        function mc(e) {
            if (!hc(e, 1)) {
                var t = (e = J(e, s)).clientX, n = e.clientY, r = t - se.x, o = n - se.y, i = se.isDragging;
                se.x = t, se.y = n, (i || Math.abs(se.startX - t) >= c || Math.abs(se.startY - n) >= c) && (h && (ne = !0), i || (se.isDragging = !0), lc(r, o), i || g && g(se));
            }
        }
        function oc(t) {
            if (!hc(t, 1)) {
                z(q ? r3 : ve, Ee[1], mc);
                var e5 = se.isDragging && (3 < Math.abs(se.x - se.startX) || 3 < Math.abs(se.y - se.startY)), n = J(t);
                e5 || (se._vx.reset(), se._vy.reset(), s && Q && be.delayedCall(.05, function() {
                    if (300 < Ce() - _e && !t.defaultPrevented) {
                        if (t.target.click) t.target.click();
                        else if (ve.createEvent) {
                            var e = ve.createEvent("MouseEvents");
                            e.initMouseEvent("click", !0, !0, Me, 1, n.screenX, n.screenY, n.clientX, n.clientY, !1, !1, !1, !1, 0, null), t.target.dispatchEvent(e);
                        }
                    }
                })), se.isDragging = se.isGesturing = se.isPressed = !1, a && !q && te.restart(!0), p && e5 && p(se), _ && _(se, e5);
            }
        }
        function pc(e) {
            return e.touches && 1 < e.touches.length && (se.isGesturing = !0) && A(e, se.isDragging);
        }
        function qc() {
            return se.isGesturing = !1, V(se);
        }
        function rc(e) {
            if (!hc(e)) {
                var t = ue(), n = de();
                kc((t - fe) * N, (n - ge) * N, 1), fe = t, ge = n, a && te.restart(!0);
            }
        }
        function sc(e) {
            if (!hc(e)) {
                e = J(e, s), F && (oe = !0);
                var t = (1 === e.deltaMode ? n2 : 2 === e.deltaMode ? Me.innerHeight : 1) * d;
                kc(e.deltaX * t, e.deltaY * t, 0), a && !q && te.restart(!0);
            }
        }
        function tc(e) {
            if (!hc(e)) {
                var t = e.clientX, n = e.clientY, r = t - se.x, o = n - se.y;
                se.x = t, se.y = n, re = !0, (r || o) && lc(r, o);
            }
        }
        function uc(e) {
            se.event = e, E(se);
        }
        function vc(e) {
            se.event = e, T(se);
        }
        function wc(e) {
            return hc(e) || J(e, s) && B(se);
        }
        this.target = r3 = G(r3) || Oe, this.vars = e4, u = u && be.utils.toArray(u), o2 = o2 || 0, c = c || 0, d = d || 1, N = N || 1, t4 = t4 || "wheel,touch,pointer", i2 = !1 !== i2, n2 = n2 || parseFloat(Me.getComputedStyle(De).lineHeight) || 22;
        var ee, te, ne, re, oe, ie, ce, se = this, ae = 0, le = 0, ue = H(r3, He), de = H(r3, Se), fe = ue(), ge = de(), pe = ~t4.indexOf("touch") && !~t4.indexOf("pointer") && "pointerdown" === Ee[0], he = x(r3), ve = r3.ownerDocument || Pe, ye = [
            0,
            0,
            0
        ], xe = [
            0,
            0,
            0
        ], _e = 0, me = se.onPress = function(e) {
            hc(e, 1) || (se.axis = ce = null, te.pause(), se.isPressed = !0, e = J(e), ae = le = 0, se.startX = se.x = e.clientX, se.startY = se.y = e.clientY, se._vx.reset(), se._vy.reset(), y(q ? r3 : ve, Ee[1], mc, s, U), se.deltaX = se.deltaY = 0, v && v(se));
        };
        te = se._dc = be.delayedCall(l || .25, function onStopFunc() {
            se._vx.reset(), se._vy.reset(), te.pause(), a && a(se);
        }).pause(), se.deltaX = se.deltaY = 0, se._vx = I(0, 50, !0), se._vy = I(0, 50, !0), se.scrollX = ue, se.scrollY = de, se.isDragging = se.isGesturing = se.isPressed = !1, se.enable = function(e) {
            return se.isEnabled || (y(he ? ve : r3, "scroll", C), 0 <= t4.indexOf("scroll") && y(he ? ve : r3, "scroll", rc, s, U), 0 <= t4.indexOf("wheel") && y(r3, "wheel", sc, s, U), (0 <= t4.indexOf("touch") && Xe || 0 <= t4.indexOf("pointer")) && (y(r3, Ee[0], me, s, U), y(ve, Ee[2], oc), y(ve, Ee[3], oc), Q && y(r3, "click", gc, !1, !0), B && y(r3, "click", wc), A && y(ve, "gesturestart", pc), V && y(ve, "gestureend", qc), E && y(r3, Ye + "enter", uc), T && y(r3, Ye + "leave", vc), S && y(r3, Ye + "move", tc)), se.isEnabled = !0, e && e.type && me(e), R && R(se)), se;
        }, se.disable = function() {
            se.isEnabled && (Te.filter(function(e) {
                return e !== se && x(e.target);
            }).length || z(he ? ve : r3, "scroll", C), se.isPressed && (se._vx.reset(), se._vy.reset(), z(q ? r3 : ve, Ee[1], mc)), z(he ? ve : r3, "scroll", rc), z(r3, "wheel", sc), z(r3, Ee[0], me), z(ve, Ee[2], oc), z(ve, Ee[3], oc), z(r3, "click", gc), z(r3, "click", wc), z(ve, "gesturestart", pc), z(ve, "gestureend", qc), z(r3, Ye + "enter", uc), z(r3, Ye + "leave", vc), z(r3, Ye + "move", tc), se.isEnabled = se.isPressed = se.isDragging = !1, W && W(se));
        }, se.kill = function() {
            se.disable();
            var e = Te.indexOf(se);
            0 <= e && Te.splice(e, 1), ze === se && (ze = 0);
        }, Te.push(se), q && x(r3) && (ze = se), se.enable(f);
    }, function _createClass(e, t, n) {
        return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e;
    }(Observer, [
        {
            key: "velocityX",
            get: function get() {
                return this._vx.getVelocity();
            }
        },
        {
            key: "velocityY",
            get: function get() {
                return this._vy.getVelocity();
            }
        }
    ]), Observer);
    function Observer(e) {
        this.init(e);
    }
    s1.version = "3.10.3", s1.create = function(e) {
        return new s1(e);
    }, s1.register = M, s1.getAll = function() {
        return Te.slice();
    }, s1.getById = function(t) {
        return Te.filter(function(e) {
            return e.vars.id === t;
        })[0];
    }, q1() && be.registerPlugin(s1), c1.Observer = s1, c1._getProxyProp = w1, c1._getScrollFunc = H, c1._getTarget = G, c1._getVelocityProp = I, c1._horizontal = He, c1._isViewport = x, c1._vertical = Se, c1.default = s1;
    if (typeof window === "undefined" || window !== c1) Object.defineProperty(c1, "__esModule", {
        value: !0
    });
    else delete c1.default;
});

//# sourceMappingURL=index.8efd4f24.js.map
