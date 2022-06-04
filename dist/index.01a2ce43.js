/*!
 * ScrollTrigger 3.10.3
 * https://greensock.com
 * 
 * @license Copyright 2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ !function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define([
        "exports"
    ], t) : t((e = e || self).window = e.window || {});
}(this, function(e1) {
    "use strict";
    function _defineProperties(e, t) {
        for(var r = 0; r < t.length; r++){
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        }
    }
    function q1() {
        return we1 || "undefined" != typeof window && (we1 = window.gsap) && we1.registerPlugin && we1;
    }
    function y1(e, t) {
        return ~Re.indexOf(e) && Re[Re.indexOf(e) + 1][t];
    }
    function z1(e) {
        return !!~t1.indexOf(e);
    }
    function A1(e, t, r, n, i) {
        return e.addEventListener(t, r, {
            passive: !n,
            capture: !!i
        });
    }
    function B1(e, t, r) {
        return e.removeEventListener(t, r);
    }
    function E1() {
        return ze && ze.isPressed || a1.cache++;
    }
    function F1(t) {
        return function(e) {
            return e || 0 === e ? (r1 && (ke1.history.scrollRestoration = "manual"), t(e), t.v = e, t.c = a1.cache, ze && ze.isPressed && i1("ss", e)) : a1.cache === t.c && !i1("ref") || (t.c = a1.cache, t.v = t()), t.v;
        };
    }
    function I(e) {
        return we1.utils.toArray(e)[0] || ("string" == typeof e && !1 !== we1.config().nullTargetWarn ? console.warn("Element not found:", e) : null);
    }
    function J(t, e2) {
        var r = e2.s, n = e2.sc, i = a1.indexOf(t), o = n === Ge.sc ? 1 : 2;
        return ~i || (i = a1.push(t) - 1), a1[i + o] || (a1[i + o] = y1(t, r) || (z1(t) ? n : F1(function(e) {
            return arguments.length ? t[r] = e : t[r];
        })));
    }
    function K1(e3, t2, i) {
        function jd(e, t) {
            var r = Fe();
            t || n2 < r - s ? (a = o, o = e, l = s, s = r) : i ? o += e : o = a + (e - a) / (r - l) * (s - l);
        }
        var o = e3, a = e3, s = Fe(), l = s, n2 = t2 || 50, c = Math.max(500, 3 * n2);
        return {
            update: jd,
            reset: function reset() {
                a = o = i ? 0 : o, l = s = 0;
            },
            getVelocity: function getVelocity(e) {
                var t = l, r = a, n = Fe();
                return !e && 0 !== e || e === o || jd(e), s === l || c < n - l ? 0 : (o + (i ? r : -r)) / ((i ? n : s) - t) * 1e3;
            }
        };
    }
    function L1(e, t) {
        return t && !e._gsapAllow && e.preventDefault(), e.changedTouches ? e.changedTouches[0] : e;
    }
    function M1(e) {
        var t = Math.max.apply(Math, e), r = Math.min.apply(Math, e);
        return Math.abs(t) >= Math.abs(r) ? t : r;
    }
    function N1() {
        (Be = we1.core.globals().ScrollTrigger) && Be.core && function _integrate() {
            var e4 = Be.core, r = e4.bridge || {}, t3 = e4._scrollers, n = e4._proxies;
            t3.push.apply(t3, a1), n.push.apply(n, Re), a1 = t3, Re = n, i1 = function _bridge(e, t) {
                return r[e](t);
            };
        }();
    }
    function O1(e) {
        return (we1 = e || q1()) && "undefined" != typeof document && document.body && (ke1 = window, Ae1 = (Me1 = document).documentElement, Ee1 = Me1.body, t1 = [
            ke1,
            Me1,
            Ae1,
            Ee1
        ], we1.utils.clamp, Ie = "onpointerenter" in Ee1 ? "pointer" : "mouse", Ce = S1.isTouch = ke1.matchMedia && ke1.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in ke1 || 0 < navigator.maxTouchPoints || 0 < navigator.msMaxTouchPoints ? 2 : 0, De = S1.eventTypes = ("ontouchstart" in Ae1 ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in Ae1 ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout(function() {
            return r1 = 0;
        }, 500), N1(), _e1 = 1), _e1;
    }
    var we1, _e1, ke1, Me1, Ae1, Ee1, Ce, Ie, Be, t1, ze, De, r1 = 1, He = [], a1 = [], Re = [], Fe = Date.now, i1 = function _bridge(e, t) {
        return t;
    }, n1 = "scrollLeft", o1 = "scrollTop", je = {
        s: n1,
        p: "left",
        p2: "Left",
        os: "right",
        os2: "Right",
        d: "width",
        d2: "Width",
        a: "x",
        sc: F1(function(e) {
            return arguments.length ? ke1.scrollTo(e, Ge.sc()) : ke1.pageXOffset || Me1[n1] || Ae1[n1] || Ee1[n1] || 0;
        })
    }, Ge = {
        s: o1,
        p: "top",
        p2: "Top",
        os: "bottom",
        os2: "Bottom",
        d: "height",
        d2: "Height",
        a: "y",
        op: je,
        sc: F1(function(e) {
            return arguments.length ? ke1.scrollTo(je.sc(), e) : ke1.pageYOffset || Me1[o1] || Ae1[o1] || Ee1[o1] || 0;
        })
    };
    je.op = Ge, a1.cache = 0;
    var S1 = (Observer.prototype.init = function init(e5) {
        _e1 || O1(we1) || console.warn("Please gsap.registerPlugin(Observer)"), Be || N1();
        var i2 = e5.tolerance, a = e5.dragMinimum, t4 = e5.type, n3 = e5.target, r2 = e5.lineHeight, o2 = e5.debounce, s = e5.preventDefault, l = e5.onStop, c = e5.onStopDelay, u = e5.ignore, f = e5.wheelSpeed, d = e5.event, p = e5.onDragStart, g = e5.onDragEnd, h = e5.onDrag, b = e5.onPress, v = e5.onRelease, m = e5.onRight, y = e5.onLeft, x = e5.onUp, w = e5.onDown, S = e5.onChangeX, _ = e5.onChangeY, T = e5.onChange, k = e5.onToggleX, P = e5.onToggleY, C = e5.onHover, D = e5.onHoverEnd, Y = e5.onMove, H = e5.ignoreCheck, R = e5.isNormalizer, X = e5.onGestureStart, F = e5.onGestureEnd, j = e5.onWheel, W = e5.onEnable, G = e5.onDisable, V = e5.onClick, q = e5.scrollSpeed, U = e5.capture, Q = e5.allowClicks, Z = e5.lockAxis, $ = e5.onLockAxis;
        function Ke() {
            return ye = Fe();
        }
        function Le(e, t) {
            return (se.event = e) && u && ~u.indexOf(e.target) || t && ge && "touch" !== e.pointerType || H && H(e, t);
        }
        function Ne() {
            var e = se.deltaX = M1(ve), t = se.deltaY = M1(me), r = Math.abs(e) >= i2, n = Math.abs(t) >= i2;
            T && (r || n) && T(se, e, t, ve, me), r && (m && 0 < se.deltaX && m(se), y && se.deltaX < 0 && y(se), S && S(se), k && se.deltaX < 0 != le < 0 && k(se), le = se.deltaX, ve[0] = ve[1] = ve[2] = 0), n && (w && 0 < se.deltaY && w(se), x && se.deltaY < 0 && x(se), _ && _(se), P && se.deltaY < 0 != ce < 0 && P(se), ce = se.deltaY, me[0] = me[1] = me[2] = 0), (ne || re) && (Y && Y(se), $ && oe && $(se), re && (h(se), re = !1), ne = oe = !1), ie && (j(se), ie = !1), ee = 0;
        }
        function Oe(e, t, r) {
            ve[r] += e, me[r] += t, se._vx.update(e), se._vy.update(t), o2 ? ee = ee || requestAnimationFrame(Ne) : Ne();
        }
        function Pe(e, t) {
            "y" !== ae && (ve[2] += e, se._vx.update(e, !0)), "x" !== ae && (me[2] += t, se._vy.update(t, !0)), Z && !ae && (se.axis = ae = Math.abs(e) > Math.abs(t) ? "x" : "y", oe = !0), o2 ? ee = ee || requestAnimationFrame(Ne) : Ne();
        }
        function Qe(e) {
            if (!Le(e, 1)) {
                var t = (e = L1(e, s)).clientX, r = e.clientY, n = t - se.x, i = r - se.y, o = se.isDragging;
                se.x = t, se.y = r, (o || Math.abs(se.startX - t) >= a || Math.abs(se.startY - r) >= a) && (h && (re = !0), o || (se.isDragging = !0), Pe(n, i), o || p && p(se));
            }
        }
        function Se(t) {
            if (!Le(t, 1)) {
                B1(R ? n3 : be, De[1], Qe);
                var e6 = se.isDragging && (3 < Math.abs(se.x - se.startX) || 3 < Math.abs(se.y - se.startY)), r = L1(t);
                e6 || (se._vx.reset(), se._vy.reset(), s && Q && we1.delayedCall(.05, function() {
                    if (300 < Fe() - ye && !t.defaultPrevented) {
                        if (t.target.click) t.target.click();
                        else if (be.createEvent) {
                            var e = be.createEvent("MouseEvents");
                            e.initMouseEvent("click", !0, !0, ke1, 1, r.screenX, r.screenY, r.clientX, r.clientY, !1, !1, !1, !1, 0, null), t.target.dispatchEvent(e);
                        }
                    }
                })), se.isDragging = se.isGesturing = se.isPressed = !1, l && !R && te.restart(!0), g && e6 && g(se), v && v(se, e6);
            }
        }
        function Te(e) {
            return e.touches && 1 < e.touches.length && (se.isGesturing = !0) && X(e, se.isDragging);
        }
        function Ue() {
            return se.isGesturing = !1, F(se);
        }
        function Ve(e) {
            if (!Le(e)) {
                var t = ue(), r = fe();
                Oe((t - de) * q, (r - pe) * q, 1), de = t, pe = r, l && te.restart(!0);
            }
        }
        function We(e) {
            if (!Le(e)) {
                e = L1(e, s), j && (ie = !0);
                var t = (1 === e.deltaMode ? r2 : 2 === e.deltaMode ? ke1.innerHeight : 1) * f;
                Oe(e.deltaX * t, e.deltaY * t, 0), l && !R && te.restart(!0);
            }
        }
        function Xe(e) {
            if (!Le(e)) {
                var t = e.clientX, r = e.clientY, n = t - se.x, i = r - se.y;
                se.x = t, se.y = r, ne = !0, (n || i) && Pe(n, i);
            }
        }
        function Ye(e) {
            se.event = e, C(se);
        }
        function Ze(e) {
            se.event = e, D(se);
        }
        function $e(e) {
            return Le(e) || L1(e, s) && V(se);
        }
        this.target = n3 = I(n3) || Ae1, this.vars = e5, u = u && we1.utils.toArray(u), i2 = i2 || 0, a = a || 0, f = f || 1, q = q || 1, t4 = t4 || "wheel,touch,pointer", o2 = !1 !== o2, r2 = r2 || parseFloat(ke1.getComputedStyle(Ee1).lineHeight) || 22;
        var ee, te, re, ne, ie, oe, ae, se = this, le = 0, ce = 0, ue = J(n3, je), fe = J(n3, Ge), de = ue(), pe = fe(), ge = ~t4.indexOf("touch") && !~t4.indexOf("pointer") && "pointerdown" === De[0], he = z1(n3), be = n3.ownerDocument || Me1, ve = [
            0,
            0,
            0
        ], me = [
            0,
            0,
            0
        ], ye = 0, xe = se.onPress = function(e) {
            Le(e, 1) || (se.axis = ae = null, te.pause(), se.isPressed = !0, e = L1(e), le = ce = 0, se.startX = se.x = e.clientX, se.startY = se.y = e.clientY, se._vx.reset(), se._vy.reset(), A1(R ? n3 : be, De[1], Qe, s, U), se.deltaX = se.deltaY = 0, b && b(se));
        };
        te = se._dc = we1.delayedCall(c || .25, function onStopFunc() {
            se._vx.reset(), se._vy.reset(), te.pause(), l && l(se);
        }).pause(), se.deltaX = se.deltaY = 0, se._vx = K1(0, 50, !0), se._vy = K1(0, 50, !0), se.scrollX = ue, se.scrollY = fe, se.isDragging = se.isGesturing = se.isPressed = !1, se.enable = function(e) {
            return se.isEnabled || (A1(he ? be : n3, "scroll", E1), 0 <= t4.indexOf("scroll") && A1(he ? be : n3, "scroll", Ve, s, U), 0 <= t4.indexOf("wheel") && A1(n3, "wheel", We, s, U), (0 <= t4.indexOf("touch") && Ce || 0 <= t4.indexOf("pointer")) && (A1(n3, De[0], xe, s, U), A1(be, De[2], Se), A1(be, De[3], Se), Q && A1(n3, "click", Ke, !1, !0), V && A1(n3, "click", $e), X && A1(be, "gesturestart", Te), F && A1(be, "gestureend", Ue), C && A1(n3, Ie + "enter", Ye), D && A1(n3, Ie + "leave", Ze), Y && A1(n3, Ie + "move", Xe)), se.isEnabled = !0, e && e.type && xe(e), W && W(se)), se;
        }, se.disable = function() {
            se.isEnabled && (He.filter(function(e) {
                return e !== se && z1(e.target);
            }).length || B1(he ? be : n3, "scroll", E1), se.isPressed && (se._vx.reset(), se._vy.reset(), B1(R ? n3 : be, De[1], Qe)), B1(he ? be : n3, "scroll", Ve), B1(n3, "wheel", We), B1(n3, De[0], xe), B1(be, De[2], Se), B1(be, De[3], Se), B1(n3, "click", Ke), B1(n3, "click", $e), B1(be, "gesturestart", Te), B1(be, "gestureend", Ue), B1(n3, Ie + "enter", Ye), B1(n3, Ie + "leave", Ze), B1(n3, Ie + "move", Xe), se.isEnabled = se.isPressed = se.isDragging = !1, G && G(se));
        }, se.kill = function() {
            se.disable();
            var e = He.indexOf(se);
            0 <= e && He.splice(e, 1), ze === se && (ze = 0);
        }, He.push(se), R && z1(n3) && (ze = se), se.enable(d);
    }, function _createClass(e, t, r) {
        return t && _defineProperties(e.prototype, t), r && _defineProperties(e, r), e;
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
    S1.version = "3.10.3", S1.create = function(e) {
        return new S1(e);
    }, S1.register = O1, S1.getAll = function() {
        return He.slice();
    }, S1.getById = function(t) {
        return He.filter(function(e) {
            return e.vars.id === t;
        })[0];
    }, q1() && we1.registerPlugin(S1);
    function ua() {
        return st = 1;
    }
    function va() {
        return st = 0;
    }
    function wa(e) {
        return e;
    }
    function xa(e) {
        return Math.round(1e5 * e) / 1e5 || 0;
    }
    function ya() {
        return "undefined" != typeof window;
    }
    function za() {
        return Je || ya() && (Je = window.gsap) && Je.registerPlugin && Je;
    }
    function Aa(e) {
        return !!~l1.indexOf(e);
    }
    function Ba(e) {
        return y1(e, "getBoundingClientRect") || (Aa(e) ? function() {
            return Yt.width = qe.innerWidth, Yt.height = qe.innerHeight, Yt;
        } : function() {
            return Ot(e);
        });
    }
    function Ea(e, t) {
        var r = t.s, n = t.d2, i = t.d, o = t.a;
        return (r = "scroll" + n, o = y1(e, r)) ? o() - Ba(e)()[i] : Aa(e) ? (tt[r] || rt[r]) - (qe["inner" + n] || tt["client" + n] || rt["client" + n]) : e[r] - e["offset" + n];
    }
    function Fa(e, t) {
        for(var r = 0; r < g1.length; r += 3)t && !~t.indexOf(g1[r + 1]) || e(g1[r], g1[r + 1], g1[r + 2]);
    }
    function Ga(e) {
        return "string" == typeof e;
    }
    function Ha(e) {
        return "function" == typeof e;
    }
    function Ia(e) {
        return "number" == typeof e;
    }
    function Ja(e) {
        return "object" == typeof e;
    }
    function Ka(e) {
        return Ha(e) && e();
    }
    function La(r, n) {
        return function() {
            var e = Ka(r), t = Ka(n);
            return function() {
                Ka(e), Ka(t);
            };
        };
    }
    function Ma(e, t, r) {
        return e && e.progress(t ? 0 : 1) && r && e.pause();
    }
    function Na(e, t) {
        if (e.enabled) {
            var r = t(e);
            r && r.totalTime && (e.callbackAnimation = r);
        }
    }
    function cb(e) {
        return qe.getComputedStyle(e);
    }
    function eb(e, t) {
        for(var r in t)r in e || (e[r] = t[r]);
        return e;
    }
    function gb(e, t) {
        var r = t.d2;
        return e["offset" + r] || e["client" + r] || 0;
    }
    function hb(e) {
        var t, r = [], n = e.labels, i = e.duration();
        for(t in n)r.push(n[t] / i);
        return r;
    }
    function jb(i) {
        var o = Je.utils.snap(i), a = Array.isArray(i) && i.slice(0).sort(function(e, t) {
            return e - t;
        });
        return a ? function(e, t, r) {
            var n;
            if (void 0 === r && (r = .001), !t) return o(e);
            if (0 < t) {
                for(e -= r, n = 0; n < a.length; n++)if (a[n] >= e) return a[n];
                return a[n - 1];
            }
            for(n = a.length, e += r; n--;)if (a[n] <= e) return a[n];
            return a[0];
        } : function(e, t, r) {
            void 0 === r && (r = .001);
            var n = o(e);
            return !t || Math.abs(n - e) < r || n - e < 0 == t < 0 ? n : o(t < 0 ? e - i : e + i);
        };
    }
    function lb(t, r, e8, n) {
        return e8.split(",").forEach(function(e) {
            return t(r, e, n);
        });
    }
    function mb(e, t, r, n, i) {
        return e.addEventListener(t, r, {
            passive: !n,
            capture: !!i
        });
    }
    function nb(e, t, r) {
        return e.removeEventListener(t, r);
    }
    function ob(e, t, r) {
        return r && r.wheelHandler && e(t, "wheel", r);
    }
    function sb(e, t) {
        if (Ga(e)) {
            var r = e.indexOf("="), n = ~r ? (e.charAt(r - 1) + 1) * parseFloat(e.substr(r + 1)) : 0;
            ~r && (e.indexOf("%") > r && (n *= t / 100), e = e.substr(0, r - 1)), e = n + (e in D1 ? D1[e] * t : ~e.indexOf("%") ? parseFloat(e) * t / 100 : parseFloat(e) || 0);
        }
        return e;
    }
    function tb(e, t, r, n, i, o, a, s) {
        var l = i.startColor, c = i.endColor, u = i.fontSize, f = i.indent, d = i.fontWeight, p = et.createElement("div"), g = Aa(r) || "fixed" === y1(r, "pinType"), h = -1 !== e.indexOf("scroller"), b = g ? rt : r, v = -1 !== e.indexOf("start"), m = v ? l : c, x = "border-color:" + m + ";font-size:" + u + ";color:" + m + ";font-weight:" + d + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
        return x += "position:" + ((h || s) && g ? "fixed;" : "absolute;"), !h && !s && g || (x += (n === Ge ? k1 : P1) + ":" + (o + parseFloat(f)) + "px;"), a && (x += "box-sizing:border-box;text-align:left;width:" + a.offsetWidth + "px;"), p._isStart = v, p.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")), p.style.cssText = x, p.innerText = t || 0 === t ? e + "-" + t : e, b.children[0] ? b.insertBefore(p, b.children[0]) : b.appendChild(p), p._offset = p["offset" + n.op.d2], Y1(p, 0, n, v), p;
    }
    function yb() {
        return 34 < bt() - vt && $1();
    }
    function zb() {
        b1 && b1.isPressed || (a1.cache++, w1 = w1 || requestAnimationFrame($1), vt || j1("scrollStart"), vt = bt());
    }
    function Ab() {
        x1 = qe.innerWidth, m1 = qe.innerHeight;
    }
    function Bb() {
        a1.cache++, at || h1 || et.fullscreenElement || v1 && x1 === qe.innerWidth && !(Math.abs(qe.innerHeight - m1) > .25 * qe.innerHeight) || c1.restart(!0);
    }
    function Hb(e) {
        var t, r = Je.ticker.frame, n = [], i = 0;
        if (_1 !== r || ht) {
            for(V1(); i < X1.length; i += 4)(t = qe.matchMedia(X1[i]).matches) !== X1[i + 3] && ((X1[i + 3] = t) ? n.push(i) : V1(1, X1[i]) || Ha(X1[i + 2]) && X1[i + 2]());
            for(G1(), i = 0; i < n.length; i++)t = n[i], dt = X1[t], X1[t + 2] = X1[t + 1](e);
            dt = 0, s1 && Q1(0, 1), _1 = r, j1("matchMedia");
        }
    }
    function Ib() {
        return nb(ie1, "scrollEnd", Ib) || Q1(!0);
    }
    function Nb() {
        return a1.cache++ && a1.forEach(function(e) {
            return "function" == typeof e && (e.rec = 0);
        });
    }
    function Yb(e, t, r, n) {
        if (e.parentNode !== t) {
            for(var i, o = ee1.length, a = t.style, s = e.style; o--;)a[i = ee1[o]] = r[i];
            a.position = "absolute" === r.position ? "absolute" : "relative", "inline" === r.display && (a.display = "inline-block"), s[P1] = s[k1] = a.flexBasis = "auto", a.overflow = "visible", a.boxSizing = "border-box", a[xt] = gb(e, je) + Pt, a[wt] = gb(e, Ge) + Pt, a[Mt] = s[At] = s.top = s.left = "0", Dt(n), s[xt] = s.maxWidth = r[xt], s[wt] = s.maxHeight = r[wt], s[Mt] = r[Mt], e.parentNode.insertBefore(t, e), t.appendChild(e);
        }
    }
    function _b(e) {
        for(var t = te1.length, r = e.style, n = [], i = 0; i < t; i++)n.push(te1[i], r[te1[i]]);
        return n.t = e, n;
    }
    function cc(e, t, r, n, i, o, a, s, l, c, u, f, d) {
        Ha(e) && (e = e(s)), Ga(e) && "max" === e.substr(0, 3) && (e = f + ("=" === e.charAt(4) ? sb("0" + e.substr(3), r) : 0));
        var p, g, h, b = d ? d.time() : 0;
        if (d && d.seek(0), Ia(e)) a && Y1(a, r, n, !0);
        else {
            Ha(t) && (t = t(s));
            var v, m, y, x, w = e.split(" ");
            h = I(t) || rt, (v = Ot(h) || {}, v.left || v.top) || "none" !== cb(h).display || (x = h.style.display, h.style.display = "block", v = Ot(h), x ? h.style.display = x : h.style.removeProperty("display")), m = sb(w[0], v[n.d]), y = sb(w[1] || "0", r), e = v[n.p] - l[n.p] - c + m + i - y, a && Y1(a, y, n, r - y < 20 || a._isStart && 20 < y), r -= r - y;
        }
        if (o) {
            var S = e + r, _ = o._isStart;
            p = "scroll" + n.d2, Y1(o, S, n, _ && 20 < S || !_ && (u ? Math.max(rt[p], tt[p]) : o.parentNode[p]) <= S + 1), u && (l = Ot(a), u && (o.style[n.op.p] = l[n.op.p] - n.op.m - o._offset + Pt));
        }
        return d && h && (p = Ot(h), d.seek(f), g = Ot(h), d._caScrollDist = p[n.p] - g[n.p], e = e / d._caScrollDist * f), d && d.seek(b), d ? e : Math.round(e);
    }
    function ec(e, t, r, n) {
        if (e.parentNode !== t) {
            var i, o, a = e.style;
            if (t === rt) {
                for(i in e._stOrig = a.cssText, o = cb(e))+i || ne1.test(i) || !o[i] || "string" != typeof a[i] || "0" === i || (a[i] = o[i]);
                a.top = r, a.left = n;
            } else a.cssText = e._stOrig;
            Je.core.getCache(e).uncache = 1, t.appendChild(e);
        }
    }
    function fc(l, e9) {
        function Kj(e10, t, r, n, i) {
            var o = Kj.tween, a = t.onComplete, s = {};
            return r = r || f(), i = n && i || 0, n = n || e10 - r, o && o.kill(), c = Math.round(r), t[d] = e10, (t.modifiers = s)[d] = function(e) {
                return (e = xa(f())) !== c && e !== u && 2 < Math.abs(e - c) && 2 < Math.abs(e - u) ? (o.kill(), Kj.tween = 0) : e = r + n * o.ratio + i * o.ratio * o.ratio, u = c, c = xa(e);
            }, t.onComplete = function() {
                Kj.tween = 0, a && a.call(o);
            }, o = Kj.tween = Je.to(l, t);
        }
        var c, u, f = J(l, e9), d = "_scroll" + e9.p2;
        return (l[d] = f).wheelHandler = function() {
            return Kj.tween && Kj.tween.kill() && (Kj.tween = 0);
        }, mb(l, "wheel", f.wheelHandler), Kj;
    }
    var Je, s1, qe, et, tt, rt, l1, c1, nt, it, ot, u1, at, st, f1, lt, d1, p1, g1, ct, ut, h1, b1, v1, m1, x1, ft, w1, dt, _1, pt, gt, ht = 1, bt = Date.now, T1 = bt(), vt = 0, mt = 0, yt = Math.abs, k1 = "right", P1 = "bottom", xt = "width", wt = "height", St = "Right", _t = "Left", Tt = "Top", kt = "Bottom", Mt = "padding", At = "margin", Et = "Width", C1 = "Height", Pt = "px", Ot = function _getBounds(e, t) {
        var r = t && "matrix(1, 0, 0, 1, 0, 0)" !== cb(e)[f1] && Je.to(e, {
            x: 0,
            y: 0,
            xPercent: 0,
            yPercent: 0,
            rotation: 0,
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            skewX: 0,
            skewY: 0
        }).progress(1), n = e.getBoundingClientRect();
        return r && r.progress(0).kill(), n;
    }, Ct = {
        startColor: "green",
        endColor: "red",
        indent: 0,
        fontSize: "16px",
        fontWeight: "normal"
    }, It = {
        toggleActions: "play",
        anticipatePin: 0
    }, D1 = {
        top: 0,
        left: 0,
        center: .5,
        bottom: 1,
        right: 1
    }, Y1 = function _positionMarker(e, t, r, n) {
        var i = {
            display: "block"
        }, o = r[n ? "os2" : "p2"], a = r[n ? "p2" : "os2"];
        e._isFlipped = n, i[r.a + "Percent"] = n ? -100 : 0, i[r.a] = n ? "1px" : 0, i["border" + o + Et] = 1, i["border" + a + Et] = 0, i[r.p] = t + "px", Je.set(e, i);
    }, Bt = [], zt = {}, H1 = {}, R1 = [], X1 = [], j1 = function _dispatch(e11) {
        return H1[e11] && H1[e11].map(function(e) {
            return e();
        }) || R1;
    }, W1 = [], G1 = function _revertRecorded(e) {
        for(var t = 0; t < W1.length; t += 5)e && W1[t + 4] !== e || (W1[t].style.cssText = W1[t + 1], W1[t].getBBox && W1[t].setAttribute("transform", W1[t + 2] || ""), W1[t + 3].uncache = 1);
    }, V1 = function _revertAll(e, t) {
        var r;
        for(lt = 0; lt < Bt.length; lt++)r = Bt[lt], t && r.media !== t || (e ? r.kill(1) : r.revert());
        t && G1(t), t || j1("revert");
    }, U1 = 0, Q1 = function _refreshAll(e12, t) {
        if (!vt || e12) {
            pt = !0;
            var r = j1("refreshInit");
            ct && ie1.sort(), t || V1(), Bt.slice(0).forEach(function(e) {
                return e.refresh();
            }), Bt.forEach(function(e) {
                return "max" === e.vars.end && e.setPositions(e.start, Ea(e.scroller, e._dir));
            }), r.forEach(function(e) {
                return e && e.render && e.render(-1);
            }), Nb(), c1.pause(), U1++, pt = !1, j1("refresh");
        } else mb(ie1, "scrollEnd", Ib);
    }, Z1 = 0, Lt = 1, $1 = function _updateAll() {
        if (!pt) {
            gt && gt.update(0), ie1.isUpdating = !0;
            var e = Bt.length, t = bt(), r = 50 <= t - T1, n = e && Bt[0].scroll();
            if (Lt = n < Z1 ? -1 : 1, Z1 = n, r && (vt && !st && 200 < t - vt && (vt = 0, j1("scrollEnd")), ot = T1, T1 = t), Lt < 0) {
                for(lt = e; 0 < lt--;)Bt[lt] && Bt[lt].update(0, r);
                Lt = 1;
            } else for(lt = 0; lt < e; lt++)Bt[lt] && Bt[lt].update(0, r);
            ie1.isUpdating = !1;
        }
        w1 = 0;
    }, ee1 = [
        "left",
        "top",
        P1,
        k1,
        At + kt,
        At + St,
        At + Tt,
        At + _t,
        "display",
        "flexShrink",
        "float",
        "zIndex",
        "gridColumnStart",
        "gridColumnEnd",
        "gridRowStart",
        "gridRowEnd",
        "gridArea",
        "justifySelf",
        "alignSelf",
        "placeSelf",
        "order"
    ], te1 = ee1.concat([
        xt,
        wt,
        "boxSizing",
        "max" + Et,
        "max" + C1,
        "position",
        At,
        Mt,
        Mt + Tt,
        Mt + St,
        Mt + kt,
        Mt + _t
    ]), re1 = /([A-Z])/g, Dt = function _setState(e) {
        if (e) {
            var t, r, n = e.t.style, i = e.length, o = 0;
            for((e.t._gsap || Je.core.getCache(e.t)).uncache = 1; o < i; o += 2)r = e[o + 1], t = e[o], r ? n[t] = r : n[t] && n.removeProperty(t.replace(re1, "-$1").toLowerCase());
        }
    }, Yt = {
        left: 0,
        top: 0
    }, ne1 = /(webkit|moz|length|cssText|inset)/i, ie1 = (ScrollTrigger.prototype.init = function init(_, T) {
        if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), mt) {
            var k, n4, p2, M, A, E, P, O, C, B, z, e13, L, D, Y, H, N, t5, R, v2, X, F, m2, K, x2, w2, r3, S2, j, W, i3, g2, G, V, q, U, Q, o3, Z = (_ = eb(Ga(_) || Ia(_) || _.nodeType ? {
                trigger: _
            } : _, It)).onUpdate, $ = _.toggleClass, a2 = _.id, ee = _.onToggle, te = _.onRefresh, re = _.scrub, ne = _.trigger, ie = _.pin, oe = _.pinSpacing, ae = _.invalidateOnRefresh, se = _.anticipatePin, s2 = _.onScrubComplete, h2 = _.onSnapComplete, le = _.once, ce = _.snap, ue = _.pinReparent, l2 = _.pinSpacer, fe = _.containerAnimation, de = _.fastScrollEnd, pe = _.preventOverlaps, ge = _.horizontal || _.containerAnimation && !1 !== _.horizontal ? je : Ge, he = !re && 0 !== re, be = I(_.scroller || qe), c2 = Je.core.getCache(be), ve = Aa(be), me = "fixed" === ("pinType" in _ ? _.pinType : y1(be, "pinType") || ve && "fixed"), ye = [
                _.onEnter,
                _.onLeave,
                _.onEnterBack,
                _.onLeaveBack
            ], xe = he && _.toggleActions.split(" "), u2 = "markers" in _ ? _.markers : It.markers, we = ve ? 0 : parseFloat(cb(be)["border" + ge.p2 + Et]) || 0, Se = this, _e = _.onRefreshInit && function() {
                return _.onRefreshInit(Se);
            }, Te = function _getSizeFunc(e, t, r) {
                var n = r.d, i = r.d2, o = r.a;
                return (o = y1(e, "getBoundingClientRect")) ? function() {
                    return o()[n];
                } : function() {
                    return (t ? qe["inner" + i] : e["client" + i]) || 0;
                };
            }(be, ve, ge), ke = function _getOffsetsFunc(e, t) {
                return !t || ~Re.indexOf(e) ? Ba(e) : function() {
                    return Yt;
                };
            }(be, ve), Me = 0, Ae = 0, Ee = J(be, ge);
            if (Se.media = dt, Se._dir = ge, se *= 45, Se.scroller = be, Se.scroll = fe ? fe.time.bind(fe) : Ee, M = Ee(), Se.vars = _, T = T || _.animation, "refreshPriority" in _ && (ct = 1, -9999 === _.refreshPriority && (gt = Se)), c2.tweenScroll = c2.tweenScroll || {
                top: fc(be, Ge),
                left: fc(be, je)
            }, Se.tweenTo = k = c2.tweenScroll[ge.p], Se.scrubDuration = function(e) {
                (i3 = Ia(e) && e) ? W ? W.duration(e) : W = Je.to(T, {
                    ease: "expo",
                    totalProgress: "+=0.001",
                    duration: i3,
                    paused: !0,
                    onComplete: function onComplete() {
                        return s2 && s2(Se);
                    }
                }) : (W && W.progress(1).kill(), W = 0);
            }, T && (T.vars.lazy = !1, T._initted || !1 !== T.vars.immediateRender && !1 !== _.immediateRender && T.render(0, !0, !0), Se.animation = T.pause(), (T.scrollTrigger = Se).scrubDuration(re), S2 = 0, a2 = a2 || T.vars.id), Bt.push(Se), ce && (Ja(ce) && !ce.push || (ce = {
                snapTo: ce
            }), "scrollBehavior" in rt.style && Je.set(ve ? [
                rt,
                tt
            ] : be, {
                scrollBehavior: "auto"
            }), p2 = Ha(ce.snapTo) ? ce.snapTo : "labels" === ce.snapTo ? function _getClosestLabel(t) {
                return function(e) {
                    return Je.utils.snap(hb(t), e);
                };
            }(T) : "labelsDirectional" === ce.snapTo ? function _getLabelAtDirection(r) {
                return function(e, t) {
                    return jb(hb(r))(e, t.direction);
                };
            }(T) : !1 !== ce.directional ? function(e, t) {
                return jb(ce.snapTo)(e, bt() - Ae < 500 ? 0 : t.direction);
            } : Je.utils.snap(ce.snapTo), g2 = ce.duration || {
                min: .1,
                max: 2
            }, g2 = Ja(g2) ? it(g2.min, g2.max) : it(g2, g2), G = Je.delayedCall(ce.delay || i3 / 2 || .1, function() {
                var e = Ee(), t = bt() - Ae < 500, r = k.tween;
                if (!(t || Math.abs(Se.getVelocity()) < 10) || r || st || Me === e) Se.isActive && Me !== e && G.restart(!0);
                else {
                    var n = (e - E) / L, i = T && !he ? T.totalProgress() : n, o = t ? 0 : (i - j) / (bt() - ot) * 1e3 || 0, a = Je.utils.clamp(-n, 1 - n, yt(o / 2) * o / .185), s = n + (!1 === ce.inertia ? 0 : a), l = it(0, 1, p2(s, Se)), c = Math.round(E + l * L), u = ce.onStart, f = ce.onInterrupt, d = ce.onComplete;
                    if (e <= P && E <= e && c !== e) {
                        if (r && !r._initted && r.data <= yt(c - e)) return;
                        !1 === ce.inertia && (a = l - n), k(c, {
                            duration: g2(yt(.185 * Math.max(yt(s - i), yt(l - i)) / o / .05 || 0)),
                            ease: ce.ease || "power3",
                            data: yt(c - e),
                            onInterrupt: function onInterrupt() {
                                return G.restart(!0) && f && f(Se);
                            },
                            onComplete: function onComplete() {
                                Se.update(), Me = Ee(), S2 = j = T && !he ? T.totalProgress() : Se.progress, h2 && h2(Se), d && d(Se);
                            }
                        }, e, a * L, c - e - a * L), u && u(Se, k.tween);
                    }
                }
            }).pause()), a2 && (zt[a2] = Se), o3 = (o3 = (ne = Se.trigger = I(ne || ie)) && ne._gsap && ne._gsap.stRevert) && o3(Se), ie = !0 === ie ? ne : I(ie), Ga($) && ($ = {
                targets: ne,
                className: $
            }), ie && (!1 === oe || oe === At || (oe = !(!oe && "flex" === cb(ie.parentNode).display) && Mt), Se.pin = ie, !1 !== _.force3D && Je.set(ie, {
                force3D: !0
            }), (n4 = Je.core.getCache(ie)).spacer ? D = n4.pinState : (l2 && ((l2 = I(l2)) && !l2.nodeType && (l2 = l2.current || l2.nativeElement), n4.spacerIsNative = !!l2, l2 && (n4.spacerState = _b(l2))), n4.spacer = N = l2 || et.createElement("div"), N.classList.add("pin-spacer"), a2 && N.classList.add("pin-spacer-" + a2), n4.pinState = D = _b(ie)), Se.spacer = N = n4.spacer, r3 = cb(ie), m2 = r3[oe + ge.os2], R = Je.getProperty(ie), v2 = Je.quickSetter(ie, ge.a, Pt), Yb(ie, N, r3), H = _b(ie)), u2) {
                e13 = Ja(u2) ? eb(u2, Ct) : Ct, B = tb("scroller-start", a2, be, ge, e13, 0), z = tb("scroller-end", a2, be, ge, e13, 0, B), t5 = B["offset" + ge.op.d2];
                var f2 = I(y1(be, "content") || be);
                O = this.markerStart = tb("start", a2, f2, ge, e13, t5, 0, fe), C = this.markerEnd = tb("end", a2, f2, ge, e13, t5, 0, fe), fe && (Q = Je.quickSetter([
                    O,
                    C
                ], ge.a, Pt)), me || Re.length && !0 === y1(be, "fixedMarkers") || (function _makePositionable(e) {
                    var t = cb(e).position;
                    e.style.position = "absolute" === t || "fixed" === t ? t : "relative";
                }(ve ? rt : be), Je.set([
                    B,
                    z
                ], {
                    force3D: !0
                }), x2 = Je.quickSetter(B, ge.a, Pt), w2 = Je.quickSetter(z, ge.a, Pt));
            }
            if (fe) {
                var d2 = fe.vars.onUpdate, b = fe.vars.onUpdateParams;
                fe.eventCallback("onUpdate", function() {
                    Se.update(0, 0, 1), d2 && d2.apply(b || []);
                });
            }
            Se.previous = function() {
                return Bt[Bt.indexOf(Se) - 1];
            }, Se.next = function() {
                return Bt[Bt.indexOf(Se) + 1];
            }, Se.revert = function(e15) {
                var t7 = !1 !== e15 || !Se.enabled, r5 = at;
                t7 !== Se.isReverted && (t7 && (!Se.scroll.rec && at && pt && (Se.scroll.rec = Ee()), q = Math.max(Ee(), Se.scroll.rec || 0), V = Se.progress, U = T && T.progress()), O && [
                    O,
                    C,
                    B,
                    z
                ].forEach(function(e) {
                    return e.style.display = t7 ? "none" : "block";
                }), t7 && (at = 1), Se.update(t7), at = r5, ie && (t7 ? function _swapPinOut(e, t, r) {
                    Dt(r);
                    var n = e._gsap;
                    if (n.spacerIsNative) Dt(n.spacerState);
                    else if (e.parentNode === t) {
                        var i = t.parentNode;
                        i && (i.insertBefore(e, t), i.removeChild(t));
                    }
                }(ie, N, D) : ue && Se.isActive || Yb(ie, N, cb(ie), K)), Se.isReverted = t7);
            }, Se.refresh = function(e16, t8) {
                if (!at && Se.enabled || t8) {
                    if (ie && e16 && vt) mb(ScrollTrigger, "scrollEnd", Ib);
                    else {
                        !pt && _e && _e(Se), at = 1, Ae = bt(), k.tween && (k.tween.kill(), k.tween = 0), W && W.pause(), ae && T && T.time(-0.01, !0).invalidate(), Se.isReverted || Se.revert();
                        for(var r6, n6, i5, o5, a4, s, l, c, u, f, d = Te(), p = ke(), g = fe ? fe.duration() : Ea(be, ge), h = 0, b = 0, v = _.end, m = _.endTrigger || ne, y = _.start || (0 !== _.start && ne ? ie ? "0 0" : "0 100%" : 0), x = Se.pinnedContainer = _.pinnedContainer && I(_.pinnedContainer), w = ne && Math.max(0, Bt.indexOf(Se)) || 0, S = w; S--;)(s = Bt[S]).end || s.refresh(0, 1) || (at = 1), !(l = s.pin) || l !== ne && l !== ie || s.isReverted || ((f = f || []).unshift(s), s.revert()), s !== Bt[S] && (w--, S--);
                        for(Ha(y) && (y = y(Se)), E = cc(y, ne, d, ge, Ee(), O, B, Se, p, we, me, g, fe) || (ie ? -0.001 : 0), Ha(v) && (v = v(Se)), Ga(v) && !v.indexOf("+=") && (~v.indexOf(" ") ? v = (Ga(y) ? y.split(" ")[0] : "") + v : (h = sb(v.substr(2), d), v = Ga(y) ? y : E + h, m = ne)), P = Math.max(E, cc(v || (m ? "100% 0" : g), m, d, ge, Ee() + h, C, z, Se, p, we, me, g, fe)) || -0.001, L = P - E || (E -= .01) && .001, h = 0, S = w; S--;)(l = (s = Bt[S]).pin) && s.start - s._pinPush < E && !fe && 0 < s.end && (r6 = s.end - s.start, l !== ne && l !== x || Ia(y) || (h += r6 * (1 - s.progress)), l === ie && (b += r6));
                        if (E += h, P += h, Se._pinPush = b, O && h && ((r6 = {})[ge.a] = "+=" + h, x && (r6[ge.p] = "-=" + Ee()), Je.set([
                            O,
                            C
                        ], r6)), ie) r6 = cb(ie), o5 = ge === Ge, i5 = Ee(), X = parseFloat(R(ge.a)) + b, !g && 1 < P && ((ve ? rt : be).style["overflow-" + ge.a] = "scroll"), Yb(ie, N, r6), H = _b(ie), n6 = Ot(ie, !0), c = me && J(be, o5 ? je : Ge)(), oe && ((K = [
                            oe + ge.os2,
                            L + b + Pt
                        ]).t = N, (S = oe === Mt ? gb(ie, ge) + L + b : 0) && K.push(ge.d, S + Pt), Dt(K), me && Ee(q)), me && ((a4 = {
                            top: n6.top + (o5 ? i5 - E : c) + Pt,
                            left: n6.left + (o5 ? c : i5 - E) + Pt,
                            boxSizing: "border-box",
                            position: "fixed"
                        })[xt] = a4.maxWidth = Math.ceil(n6.width) + Pt, a4[wt] = a4.maxHeight = Math.ceil(n6.height) + Pt, a4[At] = a4[At + Tt] = a4[At + St] = a4[At + kt] = a4[At + _t] = "0", a4[Mt] = r6[Mt], a4[Mt + Tt] = r6[Mt + Tt], a4[Mt + St] = r6[Mt + St], a4[Mt + kt] = r6[Mt + kt], a4[Mt + _t] = r6[Mt + _t], Y = function _copyState(e, t, r) {
                            for(var n, i = [], o = e.length, a = r ? 8 : 0; a < o; a += 2)n = e[a], i.push(n, n in t ? t[n] : e[a + 1]);
                            return i.t = e.t, i;
                        }(D, a4, ue)), T ? (u = T._initted, ut(1), T.render(T.duration(), !0, !0), F = R(ge.a) - X + L + b, L !== F && Y.splice(Y.length - 2, 2), T.render(0, !0, !0), u || T.invalidate(), ut(0)) : F = L;
                        else if (ne && Ee() && !fe) for(n6 = ne.parentNode; n6 && n6 !== rt;)n6._pinOffset && (E -= n6._pinOffset, P -= n6._pinOffset), n6 = n6.parentNode;
                        f && f.forEach(function(e) {
                            return e.revert(!1);
                        }), Se.start = E, Se.end = P, M = A = Ee(), fe || (M < q && Ee(q), Se.scroll.rec = 0), Se.revert(!1), G && (Me = -1, Se.isActive && Ee(E + L * V), G.restart(!0)), at = 0, T && he && (T._initted || U) && T.progress() !== U && T.progress(U, !0).render(T.time(), !0, !0), V === Se.progress && !fe || (T && !he && T.totalProgress(V, !0), Se.progress = V, Se.update(0, 0, 1)), ie && oe && (N._pinOffset = Math.round(Se.progress * F)), te && te(Se);
                    }
                }
            }, Se.getVelocity = function() {
                return (Ee() - A) / (bt() - ot) * 1e3 || 0;
            }, Se.endAnimation = function() {
                Ma(Se.callbackAnimation), T && (W ? W.progress(1) : T.paused() ? he || Ma(T, Se.direction < 0, 1) : Ma(T, T.reversed()));
            }, Se.labelToScroll = function(e) {
                return T && T.labels && (E || Se.refresh() || E) + T.labels[e] / T.duration() * L || 0;
            }, Se.getTrailing = function(t) {
                var e17 = Bt.indexOf(Se), r = 0 < Se.direction ? Bt.slice(0, e17).reverse() : Bt.slice(e17 + 1);
                return (Ga(t) ? r.filter(function(e) {
                    return e.vars.preventOverlaps === t;
                }) : r).filter(function(e) {
                    return 0 < Se.direction ? e.end <= E : e.start >= P;
                });
            }, Se.update = function(e18, t, r) {
                if (!fe || r || e18) {
                    var n, i, o, a, s, l, c, u = Se.scroll(), f = e18 ? 0 : (u - E) / L, d = f < 0 ? 0 : 1 < f ? 1 : f || 0, p = Se.progress;
                    if (t && (A = M, M = fe ? Ee() : u, ce && (j = S2, S2 = T && !he ? T.totalProgress() : d)), se && !d && ie && !at && !ht && vt && E < u + (u - A) / (bt() - ot) * se && (d = 1e-4), d !== p && Se.enabled) {
                        if (a = (s = (n = Se.isActive = !!d && d < 1) != (!!p && p < 1)) || !!d != !!p, Se.direction = p < d ? 1 : -1, Se.progress = d, a && !at && (i = d && !p ? 0 : 1 === d ? 1 : 1 === p ? 2 : 3, he && (o = !s && "none" !== xe[i + 1] && xe[i + 1] || xe[i], c = T && ("complete" === o || "reset" === o || o in T))), pe && (s || c) && (c || re || !T) && (Ha(pe) ? pe(Se) : Se.getTrailing(pe).forEach(function(e) {
                            return e.endAnimation();
                        })), he || (!W || at || ht ? T && T.totalProgress(d, !!at) : ((fe || gt && gt !== Se) && W.render(W._dp._time - W._start), W.resetTo ? W.resetTo("totalProgress", d, T._tTime / T._tDur) : (W.vars.totalProgress = d, W.invalidate().restart()))), ie) {
                            if (e18 && oe && (N.style[oe + ge.os2] = m2), me) {
                                if (a) {
                                    if (l = !e18 && p < d && u < P + 1 && u + 1 >= Ea(be, ge), ue) {
                                        if (e18 || !n && !l) ec(ie, N);
                                        else {
                                            var g = Ot(ie, !0), h = u - E;
                                            ec(ie, rt, g.top + (ge === Ge ? h : 0) + Pt, g.left + (ge === Ge ? 0 : h) + Pt);
                                        }
                                    }
                                    Dt(n || l ? Y : H), F !== L && d < 1 && n || v2(X + (1 !== d || l ? 0 : F));
                                }
                            } else v2(xa(X + F * d));
                        }
                        !ce || k.tween || at || ht || G.restart(!0), $ && (s || le && d && (d < 1 || !ft)) && nt($.targets).forEach(function(e) {
                            return e.classList[n || le ? "add" : "remove"]($.className);
                        }), !Z || he || e18 || Z(Se), a && !at ? (he && (c && ("complete" === o ? T.pause().totalProgress(1) : "reset" === o ? T.restart(!0).pause() : "restart" === o ? T.restart(!0) : T[o]()), Z && Z(Se)), !s && ft || (ee && s && Na(Se, ee), ye[i] && Na(Se, ye[i]), le && (1 === d ? Se.kill(!1, 1) : ye[i] = 0), s || ye[i = 1 === d ? 1 : 3] && Na(Se, ye[i])), de && !n && Math.abs(Se.getVelocity()) > (Ia(de) ? de : 2500) && (Ma(Se.callbackAnimation), W ? W.progress(1) : Ma(T, !d, 1))) : he && Z && !at && Z(Se);
                    }
                    if (w2) {
                        var b = fe ? u / fe.duration() * (fe._caScrollDist || 0) : u;
                        x2(b + (B._isFlipped ? 1 : 0)), w2(b);
                    }
                    Q && Q(-u / fe.duration() * (fe._caScrollDist || 0));
                }
            }, Se.enable = function(e, t) {
                Se.enabled || (Se.enabled = !0, mb(be, "resize", Bb), mb(ve ? et : be, "scroll", zb), _e && mb(ScrollTrigger, "refreshInit", _e), !1 !== e && (Se.progress = V = 0, M = A = Me = Ee()), !1 !== t && Se.refresh());
            }, Se.getTween = function(e) {
                return e && k ? k.tween : W;
            }, Se.setPositions = function(e, t) {
                ie && (X += e - E, F += t - e - L), Se.start = E = e, Se.end = P = t, L = t - e, Se.update();
            }, Se.disable = function(e, t) {
                if (Se.enabled && (!1 !== e && Se.revert(), Se.enabled = Se.isActive = !1, t || W && W.pause(), q = 0, n4 && (n4.uncache = 1), _e && nb(ScrollTrigger, "refreshInit", _e), G && (G.pause(), k.tween && k.tween.kill() && (k.tween = 0)), !ve)) {
                    for(var r = Bt.length; r--;)if (Bt[r].scroller === be && Bt[r] !== Se) return;
                    nb(be, "resize", Bb), nb(be, "scroll", zb);
                }
            }, Se.kill = function(e19, t) {
                Se.disable(e19, t), W && !t && W.kill(), a2 && delete zt[a2];
                var r = Bt.indexOf(Se);
                0 <= r && Bt.splice(r, 1), r === lt && 0 < Lt && lt--, r = 0, Bt.forEach(function(e) {
                    return e.scroller === Se.scroller && (r = 1);
                }), r || (Se.scroll.rec = 0), T && (T.scrollTrigger = null, e19 && T.render(-1), t || T.kill()), O && [
                    O,
                    C,
                    B,
                    z
                ].forEach(function(e) {
                    return e.parentNode && e.parentNode.removeChild(e);
                }), gt === Se && (gt = 0), ie && (n4 && (n4.uncache = 1), r = 0, Bt.forEach(function(e) {
                    return e.pin === ie && r++;
                }), r || (n4.spacer = 0)), _.onKill && _.onKill(Se);
            }, Se.enable(!1, !1), o3 && o3(Se), T && T.add && !L ? Je.delayedCall(.01, function() {
                return E || P || Se.refresh();
            }) && (L = .01) && (E = P = 0) : Se.refresh();
        } else this.update = this.refresh = this.kill = wa;
    }, ScrollTrigger.register = function register(e) {
        return s1 || (Je = e || za(), ya() && window.document && ScrollTrigger.enable(), s1 = mt), s1;
    }, ScrollTrigger.defaults = function defaults(e) {
        if (e) for(var t in e)It[t] = e[t];
        return It;
    }, ScrollTrigger.disable = function disable(t, r) {
        mt = 0, Bt.forEach(function(e) {
            return e[r ? "kill" : "disable"](t);
        }), nb(qe, "wheel", zb), nb(et, "scroll", zb), clearInterval(u1), nb(et, "touchcancel", wa), nb(rt, "touchstart", wa), lb(nb, et, "pointerdown,touchstart,mousedown", ua), lb(nb, et, "pointerup,touchend,mouseup", va), c1.kill(), Fa(nb);
        for(var e20 = 0; e20 < a1.length; e20 += 3)ob(nb, a1[e20], a1[e20 + 1]), ob(nb, a1[e20], a1[e20 + 2]);
    }, ScrollTrigger.enable = function enable() {
        if (qe = window, et = document, tt = et.documentElement, rt = et.body, Je && (nt = Je.utils.toArray, it = Je.utils.clamp, ut = Je.core.suppressOverwrites || wa, Je.core.globals("ScrollTrigger", ScrollTrigger), rt)) {
            mt = 1, S1.register(Je), ScrollTrigger.isTouch = S1.isTouch, mb(qe, "wheel", zb), l1 = [
                qe,
                et,
                tt,
                rt
            ], ScrollTrigger.matchMedia({
                "(orientation: portrait)": function orientationPortrait() {
                    return Ab(), Ab;
                }
            }), mb(et, "scroll", zb);
            var e21, t9, r = rt.style, n = r.borderTopStyle;
            for(r.borderTopStyle = "solid", e21 = Ot(rt), Ge.m = Math.round(e21.top + Ge.sc()) || 0, je.m = Math.round(e21.left + je.sc()) || 0, n ? r.borderTopStyle = n : r.removeProperty("border-top-style"), u1 = setInterval(yb, 250), Je.delayedCall(.5, function() {
                return ht = 0;
            }), mb(et, "touchcancel", wa), mb(rt, "touchstart", wa), lb(mb, et, "pointerdown,touchstart,mousedown", ua), lb(mb, et, "pointerup,touchend,mouseup", va), f1 = Je.utils.checkPrefix("transform"), te1.push(f1), s1 = bt(), c1 = Je.delayedCall(.2, Q1).pause(), g1 = [
                et,
                "visibilitychange",
                function() {
                    var e = qe.innerWidth, t = qe.innerHeight;
                    et.hidden ? (d1 = e, p1 = t) : d1 === e && p1 === t || Bb();
                },
                et,
                "DOMContentLoaded",
                Q1,
                qe,
                "load",
                Q1,
                qe,
                "resize",
                Bb
            ], Fa(mb), Bt.forEach(function(e) {
                return e.enable(0, 1);
            }), t9 = 0; t9 < a1.length; t9 += 3)ob(nb, a1[t9], a1[t9 + 1]), ob(nb, a1[t9], a1[t9 + 2]);
        }
    }, ScrollTrigger.config = function config(e) {
        "limitCallbacks" in e && (ft = !!e.limitCallbacks);
        var t = e.syncInterval;
        t && clearInterval(u1) || (u1 = t) && setInterval(yb, t), "ignoreMobileResize" in e && (v1 = 1 === ScrollTrigger.isTouch && e.ignoreMobileResize), "autoRefreshEvents" in e && (Fa(nb) || Fa(mb, e.autoRefreshEvents || "none"), h1 = -1 === (e.autoRefreshEvents + "").indexOf("resize"));
    }, ScrollTrigger.scrollerProxy = function scrollerProxy(e, t) {
        var r = I(e), n = a1.indexOf(r), i = Aa(r);
        ~n && a1.splice(n, i ? 6 : 2), t && (i ? Re.unshift(qe, t, rt, t, tt, t) : Re.unshift(r, t));
    }, ScrollTrigger.matchMedia = function matchMedia(e) {
        var t, r, n, i, o;
        for(r in e)n = X1.indexOf(r), i = e[r], "all" === (dt = r) ? i() : (t = qe.matchMedia(r)) && (t.matches && (o = i()), ~n ? (X1[n + 1] = La(X1[n + 1], i), X1[n + 2] = La(X1[n + 2], o)) : (n = X1.length, X1.push(r, i, o), t.addListener ? t.addListener(Hb) : t.addEventListener("change", Hb)), X1[n + 3] = t.matches), dt = 0;
        return X1;
    }, ScrollTrigger.clearMatchMedia = function clearMatchMedia(e) {
        e || (X1.length = 0), 0 <= (e = X1.indexOf(e)) && X1.splice(e, 4);
    }, ScrollTrigger.isInViewport = function isInViewport(e, t, r) {
        var n = (Ga(e) ? I(e) : e).getBoundingClientRect(), i = n[r ? xt : wt] * t || 0;
        return r ? 0 < n.right - i && n.left + i < qe.innerWidth : 0 < n.bottom - i && n.top + i < qe.innerHeight;
    }, ScrollTrigger.positionInViewport = function positionInViewport(e, t, r) {
        Ga(e) && (e = I(e));
        var n = e.getBoundingClientRect(), i = n[r ? xt : wt], o = null == t ? i / 2 : t in D1 ? D1[t] * i : ~t.indexOf("%") ? parseFloat(t) * i / 100 : parseFloat(t) || 0;
        return r ? (n.left + o) / qe.innerWidth : (n.top + o) / qe.innerHeight;
    }, ScrollTrigger);
    function ScrollTrigger(e, t) {
        s1 || ScrollTrigger.register(Je) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), this.init(e, t);
    }
    ie1.version = "3.10.3", ie1.saveStyles = function(e23) {
        return e23 ? nt(e23).forEach(function(e) {
            if (e && e.style) {
                var t = W1.indexOf(e);
                0 <= t && W1.splice(t, 5), W1.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), Je.core.getCache(e), dt);
            }
        }) : W1;
    }, ie1.revert = function(e, t) {
        return V1(!e, t);
    }, ie1.create = function(e, t) {
        return new ie1(e, t);
    }, ie1.refresh = function(e) {
        return e ? Bb() : (s1 || ie1.register()) && Q1(!0);
    }, ie1.update = $1, ie1.clearScrollMemory = Nb, ie1.maxScroll = function(e, t) {
        return Ea(e, t ? je : Ge);
    }, ie1.getScrollFunc = function(e, t) {
        return J(I(e), t ? je : Ge);
    }, ie1.getById = function(e) {
        return zt[e];
    }, ie1.getAll = function() {
        return Bt.filter(function(e) {
            return "ScrollSmoother" !== e.vars.id;
        });
    }, ie1.isScrolling = function() {
        return !!vt;
    }, ie1.snapDirectional = jb, ie1.addEventListener = function(e, t) {
        var r = H1[e] || (H1[e] = []);
        ~r.indexOf(t) || r.push(t);
    }, ie1.removeEventListener = function(e, t) {
        var r = H1[e], n = r && r.indexOf(t);
        0 <= n && r.splice(n, 1);
    }, ie1.batch = function(e24, t11) {
        function no(e25, t) {
            var r = [], n = [], i = Je.delayedCall(o, function() {
                t(r, n), r = [], n = [];
            }).pause();
            return function(e) {
                r.length || i.restart(!0), r.push(e.trigger), n.push(e), a <= r.length && i.progress(1);
            };
        }
        var r9, n9 = [], i8 = {}, o = t11.interval || .016, a = t11.batchMax || 1e9;
        for(r9 in t11)i8[r9] = "on" === r9.substr(0, 2) && Ha(t11[r9]) && "onRefreshInit" !== r9 ? no(0, t11[r9]) : t11[r9];
        return Ha(a) && (a = a(), mb(ie1, "refresh", function() {
            return a = t11.batchMax();
        })), nt(e24).forEach(function(e) {
            var t = {};
            for(r9 in i8)t[r9] = i8[r9];
            t.trigger = e, n9.push(ie1.create(t));
        }), n9;
    };
    function hc(e, t, r, n) {
        return n < t ? e(n) : t < 0 && e(0), n < r ? (n - t) / (r - t) : r < 0 ? t / (t - r) : 1;
    }
    function ic(e, t) {
        !0 === t ? e.style.removeProperty("touch-action") : e.style.touchAction = t ? "pan-" + t : "none", e === tt && ic(rt);
    }
    function kc(e) {
        var t, r = e.event, n = e.target, i = e.axis, o = (r.changedTouches ? r.changedTouches[0] : r).target, a = o._gsap || Je.core.getCache(o), s = bt();
        if (!a._isScrollT || 2e3 < s - a._isScrollT) {
            for(; o && o.scrollHeight <= o.clientHeight;)o = o.parentNode;
            a._isScroll = o && !Aa(o) && o !== n && (ae1[(t = cb(o)).overflowY] || ae1[t.overflowX]), a._isScrollT = s;
        }
        !a._isScroll && "x" !== i || (r._gsapAllow = !0);
    }
    function lc(e, t, r, n) {
        return S1.create({
            target: e,
            capture: !0,
            debounce: !1,
            lockAxis: !0,
            type: t,
            onWheel: n = n && kc,
            onPress: n,
            onDrag: n,
            onScroll: n,
            onEnable: function onEnable() {
                return r && mb(et, S1.eventTypes[0], le1, !1, !0);
            },
            onDisable: function onDisable() {
                return nb(et, S1.eventTypes[0], le1);
            }
        });
    }
    function pc(e26) {
        function fp() {
            return n10 = !1;
        }
        function ip() {
            r10 = Ea(d, Ge), x = it(0, r10), u && (y = it(0, Ea(d, je))), o = U1;
        }
        function pp() {
            ip(), a.isActive() && a.vars.scrollY > r10 && a.resetTo("scrollY", Ea(d, Ge));
        }
        Ja(e26) || (e26 = {}), e26.preventDefault = e26.isNormalizer = e26.allowClicks = !0, e26.type || (e26.type = "wheel,touch"), e26.debounce = !!e26.debounce, e26.id = e26.id || "normalizer";
        var t12, r10, n10, o, a, s, l, c, u = e26.normalizeScrollX, i9 = e26.momentum, f = e26.allowNestedScroll, d = I(e26.target) || tt, p = J(d, Ge), g = J(d, je), h = 1, b = 0, v = Ha(i9) ? function() {
            return i9(t12);
        } : function() {
            return i9 || 2.8;
        }, m = lc(d, e26.type, !0, f), y = wa, x = wa, w = ie1.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent);
        return e26.ignoreCheck = function(e) {
            return w && "touchmove" === e.type && function ignoreDrag() {
                if (n10) return requestAnimationFrame(fp), !0;
                n10 = !0;
            }() || 1 < h || t12.isGesturing || e.touches && 1 < e.touches.length;
        }, e26.onPress = function() {
            var e = h;
            h = qe.visualViewport && qe.visualViewport.scale || 1, a.pause(), e !== h && ic(d, 1 < h || !u && "x"), n10 = !1, s = g(), l = p(), ip(), o = U1;
        }, e26.onRelease = e26.onGestureStart = function(e, t) {
            if (t) {
                var r, n, i = v();
                u && (n = (r = g()) + .05 * i * -e.velocityX / .227 / h, i *= hc(g, r, n, Ea(d, je)), a.vars.scrollX = y(n)), n = (r = p()) + .05 * i * -e.velocityY / .227 / h, i *= hc(p, r, n, Ea(d, Ge)), a.vars.scrollY = x(n), a.invalidate().duration(i).play(.01);
            } else c.restart(!0);
        }, e26.onWheel = function() {
            a._ts && a.pause(), 1e3 < bt() - b && (o = 0, b = bt());
        }, e26.onChange = function(e, t, r, n, i) {
            U1 !== o && ip(), t && u && g(y(n[2] === t ? s + (e.startX - e.x) / h : g() + t - n[1])), r && p(x(i[2] === r ? l + (e.startY - e.y) / h : p() + r - i[1])), $1();
        }, e26.onEnable = function() {
            ic(d, !u && "x"), mb(qe, "resize", pp), m.enable();
        }, e26.onDisable = function() {
            ic(d, !0), nb(qe, "resize", pp), m.kill();
        }, t12 = new S1(e26), c = t12._dc, a = Je.to(t12, {
            ease: "power4",
            paused: !0,
            scrollX: u ? "+=0.1" : "+=0",
            scrollY: "+=0.1",
            onComplete: c.vars.onComplete
        }), t12;
    }
    var oe1, ae1 = {
        auto: 1,
        scroll: 1
    }, se1 = /(input|label|select|textarea)/i, le1 = function _captureInputs(e) {
        var t = se1.test(e.target.tagName);
        (t || oe1) && (e._gsapAllow = !0, oe1 = t);
    };
    ie1.sort = function(e27) {
        return Bt.sort(e27 || function(e, t) {
            return -1000000 * (e.vars.refreshPriority || 0) + e.start - (t.start + -1000000 * (t.vars.refreshPriority || 0));
        });
    }, ie1.observe = function(e) {
        return new S1(e);
    }, ie1.normalizeScroll = function(e) {
        if (void 0 === e) return b1;
        if (!0 === e && b1) return b1.enable();
        if (!1 === e) return b1 && b1.kill();
        var t = e instanceof S1 ? e : pc(e);
        return b1 && b1.target === t.target && b1.kill(), Aa(t.target) && (b1 = t), t;
    }, ie1.core = {
        _getVelocityProp: K1,
        _inputObserver: lc,
        _scrollers: a1,
        _proxies: Re,
        bridge: {
            ss: function ss() {
                vt || j1("scrollStart"), vt = bt();
            },
            ref: function ref() {
                return at;
            }
        }
    }, za() && Je.registerPlugin(ie1), e1.ScrollTrigger = ie1, e1.default = ie1;
    if (typeof window === "undefined" || window !== e1) Object.defineProperty(e1, "__esModule", {
        value: !0
    });
    else delete e1.default;
});

//# sourceMappingURL=index.01a2ce43.js.map
