/*!
 * MotionPathPlugin 3.10.3
 * https://greensock.com
 * 
 * @license Copyright 2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ !function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define([
        "exports"
    ], e) : e((t = t || self).window = t.window || {});
}(this, function(t1) {
    "use strict";
    function p1(t) {
        return "string" == typeof t;
    }
    function x1(t) {
        return Math.round(1e10 * t) / 1e10 || 0;
    }
    function y1(t, e, n, r) {
        var a = t[e], o = 1 === r ? 6 : subdivideSegment(a, n, r);
        if (o && o + n + 2 < a.length) return t.splice(e, 0, a.slice(0, n + o + 2)), a.splice(0, n + o), 1;
    }
    function C1(t, e) {
        var n = t.length, r = t[n - 1] || [], a = r.length;
        n && e[0] === r[a - 2] && e[1] === r[a - 1] && (e = r.concat(e.slice(2)), n--), t[n] = e;
    }
    var M1 = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi, T1 = /(?:(-)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi, L1 = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi, r1 = /(^[#\.][a-z]|[a-y][a-z])/i, q = Math.PI / 180, s1 = 180 / Math.PI, F = Math.sin, U = Math.cos, H = Math.abs, $ = Math.sqrt, l1 = Math.atan2, A1 = 1e8, h1 = function _isNumber(t) {
        return "number" == typeof t;
    }, S1 = {}, _1 = {}, e1 = 1e5, d1 = function _wrapProgress(t) {
        return Math.round((t + A1) % 1 * e1) / e1 || (t < 0 ? 0 : 1);
    }, N1 = function _round(t) {
        return Math.round(t * e1) / e1 || 0;
    }, m1 = function _getSampleIndex(t, e, n) {
        var r = t.length, a = ~~(n * r);
        if (t[a] > e) {
            for(; --a && t[a] > e;);
            a < 0 && (a = 0);
        } else for(; t[++a] < e && a < r;);
        return a < r ? a : r - 1;
    }, B1 = function _copyMetaData(t, e) {
        return e.totalLength = t.totalLength, t.samples ? (e.samples = t.samples.slice(0), e.lookup = t.lookup.slice(0), e.minLength = t.minLength, e.resolution = t.resolution) : t.totalPoints && (e.totalPoints = t.totalPoints), e;
    };
    function getRawPath(t) {
        var e, n = (t = p1(t) && r1.test(t) && document.querySelector(t) || t).getAttribute ? t : 0;
        return n && (t = t.getAttribute("d")) ? (n._gsPath || (n._gsPath = {}), (e = n._gsPath[t]) && !e._dirty ? e : n._gsPath[t] = stringToRawPath(t)) : t ? p1(t) ? stringToRawPath(t) : h1(t[0]) ? [
            t
        ] : t : console.warn("Expecting a <path> element or an SVG path data string");
    }
    function reverseSegment(t) {
        var e, n = 0;
        for(t.reverse(); n < t.length; n += 2)e = t[n], t[n] = t[n + 1], t[n + 1] = e;
        t.reversed = !t.reversed;
    }
    var O1 = {
        rect: "rx,ry,x,y,width,height",
        circle: "r,cx,cy",
        ellipse: "rx,ry,cx,cy",
        line: "x1,x2,y1,y2"
    };
    function convertToPath(t2, e2) {
        var n2, r2, a2, o2, i, s, l, h, u, g, f, p, c, d, m, v, x, y, w, P, b, M, R = t2.tagName.toLowerCase(), L = .552284749831;
        return "path" !== R && t2.getBBox ? (s = function _createPath(t, e) {
            var n, r = document.createElementNS("http://www.w3.org/2000/svg", "path"), a = [].slice.call(t.attributes), o = a.length;
            for(e = "," + e + ","; -1 < --o;)n = a[o].nodeName.toLowerCase(), e.indexOf("," + n + ",") < 0 && r.setAttributeNS(null, n, a[o].nodeValue);
            return r;
        }(t2, "x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points"), M = function _attrToObj(t, e) {
            for(var n = e ? e.split(",") : [], r = {}, a = n.length; -1 < --a;)r[n[a]] = +t.getAttribute(n[a]) || 0;
            return r;
        }(t2, O1[R]), "rect" === R ? (o2 = M.rx, i = M.ry || o2, r2 = M.x, a2 = M.y, g = M.width - 2 * o2, f = M.height - 2 * i, n2 = o2 || i ? "M" + (v = (d = (c = r2 + o2) + g) + o2) + "," + (y = a2 + i) + " V" + (w = y + f) + " C" + [
            v,
            P = w + i * L,
            m = d + o2 * L,
            b = w + i,
            d,
            b,
            d - (d - c) / 3,
            b,
            c + (d - c) / 3,
            b,
            c,
            b,
            p = r2 + o2 * (1 - L),
            b,
            r2,
            P,
            r2,
            w,
            r2,
            w - (w - y) / 3,
            r2,
            y + (w - y) / 3,
            r2,
            y,
            r2,
            x = a2 + i * (1 - L),
            p,
            a2,
            c,
            a2,
            c + (d - c) / 3,
            a2,
            d - (d - c) / 3,
            a2,
            d,
            a2,
            m,
            a2,
            v,
            x,
            v,
            y
        ].join(",") + "z" : "M" + (r2 + g) + "," + a2 + " v" + f + " h" + -g + " v" + -f + " h" + g + "z") : "circle" === R || "ellipse" === R ? (h = "circle" === R ? (o2 = i = M.r) * L : (o2 = M.rx, (i = M.ry) * L), n2 = "M" + ((r2 = M.cx) + o2) + "," + (a2 = M.cy) + " C" + [
            r2 + o2,
            a2 + h,
            r2 + (l = o2 * L),
            a2 + i,
            r2,
            a2 + i,
            r2 - l,
            a2 + i,
            r2 - o2,
            a2 + h,
            r2 - o2,
            a2,
            r2 - o2,
            a2 - h,
            r2 - l,
            a2 - i,
            r2,
            a2 - i,
            r2 + l,
            a2 - i,
            r2 + o2,
            a2 - h,
            r2 + o2,
            a2
        ].join(",") + "z") : "line" === R ? n2 = "M" + M.x1 + "," + M.y1 + " L" + M.x2 + "," + M.y2 : "polyline" !== R && "polygon" !== R || (n2 = "M" + (r2 = (u = (t2.getAttribute("points") + "").match(T1) || []).shift()) + "," + (a2 = u.shift()) + " L" + u.join(","), "polygon" === R && (n2 += "," + r2 + "," + a2 + "z")), s.setAttribute("d", rawPathToString(s._gsRawPath = stringToRawPath(n2))), e2 && t2.parentNode && (t2.parentNode.insertBefore(s, t2), t2.parentNode.removeChild(t2)), s) : t2;
    }
    function getRotationAtBezierT(t, e, n) {
        var r, a = t[e], o = t[e + 2], i = t[e + 4];
        return a += (o - a) * n, a += ((o += (i - o) * n) - a) * n, r = o + (i + (t[e + 6] - i) * n - o) * n - a, a = t[e + 1], a += ((o = t[e + 3]) - a) * n, a += ((o += ((i = t[e + 5]) - o) * n) - a) * n, N1(l1(o + (i + (t[e + 7] - i) * n - o) * n - a, r) * s1);
    }
    function sliceRawPath(t3, e3, n3) {
        n3 = function _isUndefined(t) {
            return void 0 === t;
        }(n3) ? 1 : x1(n3) || 0, e3 = x1(e3) || 0;
        var r = Math.max(0, ~~(H(n3 - e3) - 1e-8)), a = function copyRawPath(t) {
            for(var e = [], n = 0; n < t.length; n++)e[n] = B1(t[n], t[n].slice(0));
            return B1(t, e);
        }(t3);
        if (n3 < e3 && (e3 = 1 - e3, n3 = 1 - n3, function _reverseRawPath(t, e) {
            var n = t.length;
            for(e || t.reverse(); n--;)t[n].reversed || reverseSegment(t[n]);
        }(a), a.totalLength = 0), e3 < 0 || n3 < 0) {
            var o = Math.abs(~~Math.min(e3, n3)) + 1;
            e3 += o, n3 += o;
        }
        a.totalLength || cacheRawPathMeasurements(a);
        var i, s, l, h, u, g, f, p, c = 1 < n3, d = getProgressData(a, e3, S1, !0), m = getProgressData(a, n3, _1), v = m.segment, w = d.segment, P = m.segIndex, b = d.segIndex, M = m.i, R = d.i, L = b === P, T = M === R && L;
        if (c || r) {
            for(i = P < b || L && M < R || T && m.t < d.t, y1(a, b, R, d.t) && (b++, i || (P++, T ? (m.t = (m.t - d.t) / (1 - d.t), M = 0) : L && (M -= R))), Math.abs(1 - (n3 - e3)) < 1e-5 ? P = b - 1 : !m.t && P ? P-- : y1(a, P, M, m.t) && i && b++, 1 === d.t && (b = (b + 1) % a.length), u = [], f = 1 + (g = a.length) * r, f += (g - (p = b) + P) % g, h = 0; h < f; h++)C1(u, a[(p++) % g]);
            a = u;
        } else if (l = 1 === m.t ? 6 : subdivideSegment(v, M, m.t), e3 !== n3) for(s = subdivideSegment(w, R, T ? d.t / m.t : d.t), L && (l += s), v.splice(M + l + 2), (s || R) && w.splice(0, R + s), h = a.length; h--;)(h < b || P < h) && a.splice(h, 1);
        else v.angle = getRotationAtBezierT(v, M + l, 0), d = v[M += l], m = v[M + 1], v.length = v.totalLength = 0, v.totalPoints = a.totalPoints = 8, v.push(d, m, d, m, d, m, d, m);
        return a.totalLength = 0, a;
    }
    function measureSegment(t, e, n) {
        e = e || 0, t.samples || (t.samples = [], t.lookup = []);
        var r, a, o, i, s, l, h, u, g, f, p, c, d, m, v, x, y, w = ~~t.resolution || 12, P = 1 / w, b = n ? e + 6 * n + 1 : t.length, M = t[e], R = t[e + 1], L = e ? e / 6 * w : 0, T = t.samples, S = t.lookup, _ = (e ? t.minLength : A1) || A1, C = T[L + n * w - 1], N = e ? T[L - 1] : 0;
        for(T.length = S.length = 0, a = e + 2; a < b; a += 6){
            if (o = t[a + 4] - M, i = t[a + 2] - M, s = t[a] - M, u = t[a + 5] - R, g = t[a + 3] - R, f = t[a + 1] - R, l = h = p = c = 0, H(o) < .01 && H(u) < .01 && H(s) + H(f) < .01) 8 < t.length && (t.splice(a, 6), a -= 6, b -= 6);
            else for(r = 1; r <= w; r++)l = h - (h = ((m = P * r) * m * o + 3 * (d = 1 - m) * (m * i + d * s)) * m), p = c - (c = (m * m * u + 3 * d * (m * g + d * f)) * m), (x = $(p * p + l * l)) < _ && (_ = x), N += x, T[L++] = N;
            M += o, R += u;
        }
        if (C) for(C -= N; L < T.length; L++)T[L] += C;
        if (T.length && _) {
            if (t.totalLength = y = T[T.length - 1] || 0, y / (t.minLength = _) < 9999) for(x = v = 0, r = 0; r < y; r += _)S[x++] = T[v] < r ? ++v : v;
        } else t.totalLength = T[0] = 0;
        return e ? N - T[e / 2 - 1] : N;
    }
    function cacheRawPathMeasurements(t, e) {
        var n, r, a;
        for(a = n = r = 0; a < t.length; a++)t[a].resolution = ~~e || 12, r += t[a].length, n += measureSegment(t[a]);
        return t.totalPoints = r, t.totalLength = n, t;
    }
    function subdivideSegment(t, e, n) {
        if (n <= 0 || 1 <= n) return 0;
        var r = t[e], a = t[e + 1], o = t[e + 2], i = t[e + 3], s = t[e + 4], l = t[e + 5], h = r + (o - r) * n, u = o + (s - o) * n, g = a + (i - a) * n, f = i + (l - i) * n, p = h + (u - h) * n, c = g + (f - g) * n, d = s + (t[e + 6] - s) * n, m = l + (t[e + 7] - l) * n;
        return u += (d - u) * n, f += (m - f) * n, t.splice(e + 2, 4, N1(h), N1(g), N1(p), N1(c), N1(p + (u - p) * n), N1(c + (f - c) * n), N1(u), N1(f), N1(d), N1(m)), t.samples && t.samples.splice(e / 6 * t.resolution | 0, 0, 0, 0, 0, 0, 0, 0), 6;
    }
    function getProgressData(t, e, n, r) {
        n = n || {}, t.totalLength || cacheRawPathMeasurements(t), (e < 0 || 1 < e) && (e = d1(e));
        var a, o, i, s, l, h, u, g = 0, f = t[0];
        if (e) {
            if (1 === e) u = 1, h = (f = t[g = t.length - 1]).length - 8;
            else {
                if (1 < t.length) {
                    for(i = t.totalLength * e, l = h = 0; (l += t[h++].totalLength) < i;)g = h;
                    e = (i - (s = l - (f = t[g]).totalLength)) / (l - s) || 0;
                }
                a = f.samples, o = f.resolution, i = f.totalLength * e, s = (h = f.lookup.length ? f.lookup[~~(i / f.minLength)] || 0 : m1(a, i, e)) ? a[h - 1] : 0, (l = a[h]) < i && (s = l, l = a[++h]), u = 1 / o * ((i - s) / (l - s) + h % o), h = 6 * ~~(h / o), r && 1 === u && (h + 6 < f.length ? (h += 6, u = 0) : g + 1 < t.length && (h = u = 0, f = t[++g]));
            }
        } else u = h = g = 0, f = t[0];
        return n.t = u, n.i = h, n.path = t, n.segment = f, n.segIndex = g, n;
    }
    function getPositionOnPath(t, e, n, r) {
        var a, o, i, s, l, h, u, g, f, p = t[0], c = r || {};
        if ((e < 0 || 1 < e) && (e = d1(e)), 1 < t.length) {
            for(i = t.totalLength * e, l = h = 0; (l += t[h++].totalLength) < i;)p = t[h];
            e = (i - (s = l - p.totalLength)) / (l - s) || 0;
        }
        return a = p.samples, o = p.resolution, i = p.totalLength * e, s = (h = p.lookup.length ? p.lookup[e < 1 ? ~~(i / p.minLength) : p.lookup.length - 1] || 0 : m1(a, i, e)) ? a[h - 1] : 0, (l = a[h]) < i && (s = l, l = a[++h]), f = 1 - (u = 1 / o * ((i - s) / (l - s) + h % o) || 0), g = p[h = 6 * ~~(h / o)], c.x = N1((u * u * (p[h + 6] - g) + 3 * f * (u * (p[h + 4] - g) + f * (p[h + 2] - g))) * u + g), c.y = N1((u * u * (p[h + 7] - (g = p[h + 1])) + 3 * f * (u * (p[h + 5] - g) + f * (p[h + 3] - g))) * u + g), n && (c.angle = p.totalLength ? getRotationAtBezierT(p, h, 1 <= u ? 1 - 1e-9 : u || 1e-9) : p.angle || 0), c;
    }
    function transformRawPath(t, e, n, r, a, o, i) {
        for(var s, l, h, u, g, f = t.length; -1 < --f;)for(l = (s = t[f]).length, h = 0; h < l; h += 2)u = s[h], g = s[h + 1], s[h] = u * e + g * r + o, s[h + 1] = u * n + g * a + i;
        return t._dirty = 1, t;
    }
    function arcToSegment(t, e, n, r, a, o, i, s, l) {
        if (t !== s || e !== l) {
            n = H(n), r = H(r);
            var h = a % 360 * q, u = U(h), g = F(h), f = Math.PI, p = 2 * f, c = (t - s) / 2, d = (e - l) / 2, m = u * c + g * d, v = -g * c + u * d, x = m * m, y = v * v, w = x / (n * n) + y / (r * r);
            1 < w && (n = $(w) * n, r = $(w) * r);
            var P = n * n, b = r * r, M = (P * b - P * y - b * x) / (P * y + b * x);
            M < 0 && (M = 0);
            var R = (o === i ? -1 : 1) * $(M), L = n * v / r * R, T = -r * m / n * R, S = u * L - g * T + (t + s) / 2, _ = g * L + u * T + (e + l) / 2, C = (m - L) / n, N = (v - T) / r, A = (-m - L) / n, B = (-v - T) / r, O = C * C + N * N, E = (N < 0 ? -1 : 1) * Math.acos(C / $(O)), G = (C * B - N * A < 0 ? -1 : 1) * Math.acos((C * A + N * B) / $(O * (A * A + B * B)));
            isNaN(G) && (G = f), !i && 0 < G ? G -= p : i && G < 0 && (G += p), E %= p, G %= p;
            var I, D = Math.ceil(H(G) / (p / 4)), X = [], z = G / D, k = 4 / 3 * F(z / 2) / (1 + U(z / 2)), Z = u * n, V = g * n, Y = g * -r, j = u * r;
            for(I = 0; I < D; I++)m = U(a = E + I * z), v = F(a), C = U(a += z), N = F(a), X.push(m - k * v, v + k * m, C + k * N, N - k * C, C, N);
            for(I = 0; I < X.length; I += 2)m = X[I], v = X[I + 1], X[I] = m * Z + v * Y + S, X[I + 1] = m * V + v * j + _;
            return X[I - 2] = s, X[I - 1] = l, X;
        }
    }
    function stringToRawPath(t4) {
        function Af(t, e, n, r) {
            u = (n - t) / 3, g = (r - e) / 3, s.push(t + u, e + g, n - u, r - g, n, r);
        }
        var e4, n4, r3, a, o, i, s, l, h, u, g, f, p, c, d, m = (t4 + "").replace(L1, function(t) {
            var e = +t;
            return e < 1e-4 && -0.0001 < e ? 0 : e;
        }).match(M1) || [], v = [], x = 0, y = 0, w = m.length, P = 0, b = "ERROR: malformed path: " + t4;
        if (!t4 || !isNaN(m[0]) || isNaN(m[1])) return console.log(b), v;
        for(e4 = 0; e4 < w; e4++)if (p = o, isNaN(m[e4]) ? i = (o = m[e4].toUpperCase()) !== m[e4] : e4--, r3 = +m[e4 + 1], a = +m[e4 + 2], i && (r3 += x, a += y), e4 || (l = r3, h = a), "M" === o) s && (s.length < 8 ? --v.length : P += s.length), x = l = r3, y = h = a, s = [
            r3,
            a
        ], v.push(s), e4 += 2, o = "L";
        else if ("C" === o) i || (x = y = 0), (s = s || [
            0,
            0
        ]).push(r3, a, x + 1 * m[e4 + 3], y + 1 * m[e4 + 4], x += 1 * m[e4 + 5], y += 1 * m[e4 + 6]), e4 += 6;
        else if ("S" === o) u = x, g = y, "C" !== p && "S" !== p || (u += x - s[s.length - 4], g += y - s[s.length - 3]), i || (x = y = 0), s.push(u, g, r3, a, x += 1 * m[e4 + 3], y += 1 * m[e4 + 4]), e4 += 4;
        else if ("Q" === o) u = x + 2 / 3 * (r3 - x), g = y + 2 / 3 * (a - y), i || (x = y = 0), x += 1 * m[e4 + 3], y += 1 * m[e4 + 4], s.push(u, g, x + 2 / 3 * (r3 - x), y + 2 / 3 * (a - y), x, y), e4 += 4;
        else if ("T" === o) u = x - s[s.length - 4], g = y - s[s.length - 3], s.push(x + u, y + g, r3 + 2 / 3 * (x + 1.5 * u - r3), a + 2 / 3 * (y + 1.5 * g - a), x = r3, y = a), e4 += 2;
        else if ("H" === o) Af(x, y, x = r3, y), e4 += 1;
        else if ("V" === o) Af(x, y, x, y = r3 + (i ? y - x : 0)), e4 += 1;
        else if ("L" === o || "Z" === o) "Z" === o && (r3 = l, a = h, s.closed = !0), ("L" === o || .5 < H(x - r3) || .5 < H(y - a)) && (Af(x, y, r3, a), "L" === o && (e4 += 2)), x = r3, y = a;
        else if ("A" === o) {
            if (c = m[e4 + 4], d = m[e4 + 5], u = m[e4 + 6], g = m[e4 + 7], n4 = 7, 1 < c.length && (c.length < 3 ? (g = u, u = d, n4--) : (g = d, u = c.substr(2), n4 -= 2), d = c.charAt(1), c = c.charAt(0)), f = arcToSegment(x, y, +m[e4 + 1], +m[e4 + 2], +m[e4 + 3], +c, +d, (i ? x : 0) + 1 * u, (i ? y : 0) + 1 * g), e4 += n4, f) for(n4 = 0; n4 < f.length; n4++)s.push(f[n4]);
            x = s[s.length - 2], y = s[s.length - 1];
        } else console.log(b);
        return (e4 = s.length) < 6 ? (v.pop(), e4 = 0) : s[0] === s[e4 - 2] && s[1] === s[e4 - 1] && (s.closed = !0), v.totalPoints = P + e4, v;
    }
    function flatPointsToSegment(t, e) {
        void 0 === e && (e = 1);
        for(var n = t[0], r = 0, a = [
            n,
            r
        ], o = 2; o < t.length; o += 2)a.push(n, r, t[o], r = (t[o] - n) * e / 2, n = t[o], -r);
        return a;
    }
    function pointsToSegment(t, e) {
        H(t[0] - t[2]) < 1e-4 && H(t[1] - t[3]) < 1e-4 && (t = t.slice(2));
        var n, r, a, o, i, s, l, h, u, g, f, p, c, d, m = t.length - 2, v = +t[0], x = +t[1], y = +t[2], w = +t[3], P = [
            v,
            x,
            v,
            x
        ], b = y - v, M = w - x, R = Math.abs(t[m] - v) < .001 && Math.abs(t[m + 1] - x) < .001;
        for(R && (t.push(y, w), y = v, w = x, v = t[m - 2], x = t[m - 1], t.unshift(v, x), m += 4), e = e || 0 === e ? +e : 1, a = 2; a < m; a += 2)n = v, r = x, v = y, x = w, y = +t[a + 2], w = +t[a + 3], v === y && x === w || (o = b, i = M, b = y - v, M = w - x, h = ((s = $(o * o + i * i)) + (l = $(b * b + M * M))) * e * .25 / $(Math.pow(b / l + o / s, 2) + Math.pow(M / l + i / s, 2)), f = v - ((u = v - (v - n) * (s ? h / s : 0)) + (((g = v + (y - v) * (l ? h / l : 0)) - u) * (3 * s / (s + l) + .5) / 4 || 0)), d = x - ((p = x - (x - r) * (s ? h / s : 0)) + (((c = x + (w - x) * (l ? h / l : 0)) - p) * (3 * s / (s + l) + .5) / 4 || 0)), v === n && x === r || P.push(N1(u + f), N1(p + d), N1(v), N1(x), N1(g + f), N1(c + d)));
        return v !== y || x !== w || P.length < 4 ? P.push(N1(y), N1(w), N1(y), N1(w)) : P.length -= 2, 2 === P.length ? P.push(v, x, v, x, v, x) : R && (P.splice(0, 6), P.length = P.length - 6), P;
    }
    function rawPathToString(t) {
        h1(t[0]) && (t = [
            t
        ]);
        var e, n, r, a, o = "", i = t.length;
        for(n = 0; n < i; n++){
            for(a = t[n], o += "M" + N1(a[0]) + "," + N1(a[1]) + " C", e = a.length, r = 2; r < e; r++)o += N1(a[r++]) + "," + N1(a[r++]) + " " + N1(a[r++]) + "," + N1(a[r++]) + " " + N1(a[r++]) + "," + N1(a[r]) + " ";
            a.closed && (o += "z");
        }
        return o;
    }
    function R1(t) {
        var e = t.ownerDocument || t;
        !(D1 in t.style) && "msTransform" in t.style && (z1 = (D1 = "msTransform") + "Origin");
        for(; e.parentNode && (e = e.parentNode););
        if (v1 = window, E1 = new Y1, e) {
            w1 = (c1 = e).documentElement, P1 = e.body, (G1 = c1.createElementNS("http://www.w3.org/2000/svg", "g")).style.transform = "none";
            var n = e.createElement("div"), r = e.createElement("div");
            P1.appendChild(n), n.appendChild(r), n.style.position = "static", n.style[D1] = "translate3d(0,0,1px)", I1 = r.offsetParent !== n, P1.removeChild(n);
        }
        return e;
    }
    function X1(t) {
        return t.ownerSVGElement || ("svg" === (t.tagName + "").toLowerCase() ? t : null);
    }
    function Z1(t, e) {
        if (t.parentNode && (c1 || R1(t))) {
            var n = X1(t), r = n ? n.getAttribute("xmlns") || "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml", a = n ? e ? "rect" : "g" : "div", o = 2 !== e ? 0 : 100, i = 3 === e ? 100 : 0, s = "position:absolute;display:block;pointer-events:none;margin:0;padding:0;", l = c1.createElementNS ? c1.createElementNS(r.replace(/^https/, "http"), a) : c1.createElement(a);
            return e && (n ? (b1 = b1 || Z1(t), l.setAttribute("width", .01), l.setAttribute("height", .01), l.setAttribute("transform", "translate(" + o + "," + i + ")"), b1.appendChild(l)) : (f1 || ((f1 = Z1(t)).style.cssText = s), l.style.cssText = s + "width:0.1px;height:0.1px;top:" + i + "px;left:" + o + "px", f1.appendChild(l))), l;
        }
        throw "Need document and parent.";
    }
    function aa(t5, e5) {
        var n5, r, a, o, i, s, l = X1(t5), h = t5 === l, u = l ? k1 : V1, g = t5.parentNode;
        if (t5 === v1) return t5;
        if (u.length || u.push(Z1(t5, 1), Z1(t5, 2), Z1(t5, 3)), n5 = l ? b1 : f1, l) h ? (o = -(a = function _getCTM(t) {
            var e, n = t.getCTM();
            return n || (e = t.style[D1], t.style[D1] = "none", t.appendChild(G1), n = G1.getCTM(), t.removeChild(G1), e ? t.style[D1] = e : t.style.removeProperty(D1.replace(/([A-Z])/g, "-$1").toLowerCase())), n || E1.clone();
        }(t5)).e / a.a, i = -a.f / a.d, r = E1) : t5.getBBox ? (a = t5.getBBox(), o = (r = (r = t5.transform ? t5.transform.baseVal : {}).numberOfItems ? 1 < r.numberOfItems ? function _consolidate(t) {
            for(var e = new Y1, n = 0; n < t.numberOfItems; n++)e.multiply(t.getItem(n).matrix);
            return e;
        }(r) : r.getItem(0).matrix : E1).a * a.x + r.c * a.y, i = r.b * a.x + r.d * a.y) : (r = new Y1, o = i = 0), e5 && "g" === t5.tagName.toLowerCase() && (o = i = 0), (h ? l : g).appendChild(n5), n5.setAttribute("transform", "matrix(" + r.a + "," + r.b + "," + r.c + "," + r.d + "," + (r.e + o) + "," + (r.f + i) + ")");
        else {
            if (o = i = 0, I1) for(r = t5.offsetParent, a = t5; (a = a && a.parentNode) && a !== r && a.parentNode;)4 < (v1.getComputedStyle(a)[D1] + "").length && (o = a.offsetLeft, i = a.offsetTop, a = 0);
            if ("absolute" !== (s = v1.getComputedStyle(t5)).position && "fixed" !== s.position) for(r = t5.offsetParent; g && g !== r;)o += g.scrollLeft || 0, i += g.scrollTop || 0, g = g.parentNode;
            (a = n5.style).top = t5.offsetTop - i + "px", a.left = t5.offsetLeft - o + "px", a[D1] = s[D1], a[z1] = s[z1], a.position = "fixed" === s.position ? "fixed" : "absolute", t5.parentNode.appendChild(n5);
        }
        return n5;
    }
    function ba(t, e, n, r, a, o, i) {
        return t.a = e, t.b = n, t.c = r, t.d = a, t.e = o, t.f = i, t;
    }
    var c1, v1, w1, P1, f1, b1, E1, G1, I1, n1, D1 = "transform", z1 = D1 + "Origin", k1 = [], V1 = [], Y1 = ((n1 = Matrix2D.prototype).inverse = function inverse() {
        var t = this.a, e = this.b, n = this.c, r = this.d, a = this.e, o = this.f, i = t * r - e * n || 1e-10;
        return ba(this, r / i, -e / i, -n / i, t / i, (n * o - r * a) / i, -(t * o - e * a) / i);
    }, n1.multiply = function multiply(t) {
        var e = this.a, n = this.b, r = this.c, a = this.d, o = this.e, i = this.f, s = t.a, l = t.c, h = t.b, u = t.d, g = t.e, f = t.f;
        return ba(this, s * e + h * r, s * n + h * a, l * e + u * r, l * n + u * a, o + g * e + f * r, i + g * n + f * a);
    }, n1.clone = function clone() {
        return new Matrix2D(this.a, this.b, this.c, this.d, this.e, this.f);
    }, n1.equals = function equals(t) {
        var e = this.a, n = this.b, r = this.c, a = this.d, o = this.e, i = this.f;
        return e === t.a && n === t.b && r === t.c && a === t.d && o === t.e && i === t.f;
    }, n1.apply = function apply(t, e) {
        void 0 === e && (e = {});
        var n = t.x, r = t.y, a = this.a, o = this.b, i = this.c, s = this.d, l = this.e, h = this.f;
        return e.x = n * a + r * i + l || 0, e.y = n * o + r * s + h || 0, e;
    }, Matrix2D);
    function Matrix2D(t, e, n, r, a, o) {
        void 0 === t && (t = 1), void 0 === e && (e = 0), void 0 === n && (n = 0), void 0 === r && (r = 1), void 0 === a && (a = 0), void 0 === o && (o = 0), ba(this, t, e, n, r, a, o);
    }
    function getGlobalMatrix(t6, e6, n6, r) {
        if (!t6 || !t6.parentNode || (c1 || R1(t6)).documentElement === t6) return new Y1;
        var a = function _forceNonZeroScale(t) {
            for(var e, n; t && t !== P1;)(n = t._gsap) && n.uncache && n.get(t, "x"), n && !n.scaleX && !n.scaleY && n.renderTransform && (n.scaleX = n.scaleY = 1e-4, n.renderTransform(1, n), e ? e.push(n) : e = [
                n
            ]), t = t.parentNode;
            return e;
        }(t6), o = X1(t6) ? k1 : V1, i = aa(t6, n6), s = o[0].getBoundingClientRect(), l = o[1].getBoundingClientRect(), h = o[2].getBoundingClientRect(), u = i.parentNode, g = !r && function _isFixed(t) {
            return "fixed" === v1.getComputedStyle(t).position || ((t = t.parentNode) && 1 === t.nodeType ? _isFixed(t) : void 0);
        }(t6), f = new Y1((l.left - s.left) / 100, (l.top - s.top) / 100, (h.left - s.left) / 100, (h.top - s.top) / 100, s.left + (g ? 0 : function _getDocScrollLeft() {
            return v1.pageXOffset || c1.scrollLeft || w1.scrollLeft || P1.scrollLeft || 0;
        }()), s.top + (g ? 0 : function _getDocScrollTop() {
            return v1.pageYOffset || c1.scrollTop || w1.scrollTop || P1.scrollTop || 0;
        }()));
        if (u.removeChild(i), a) for(s = a.length; s--;)(l = a[s]).scaleX = l.scaleY = 0, l.renderTransform(1, l);
        return e6 ? f.inverse() : f;
    }
    function la(t, e, n, r) {
        for(var a = e.length, o = 2 === r ? 0 : r, i = 0; i < a; i++)t[o] = parseFloat(e[i][n]), 2 === r && (t[o + 1] = 0), o += 2;
        return t;
    }
    function ma(t, e, n) {
        return parseFloat(t._gsap.get(t, e, n || "px")) || 0;
    }
    function na(t) {
        var e, n = t[0], r = t[1];
        for(e = 2; e < t.length; e += 2)n = t[e] += n, r = t[e + 1] += r;
    }
    function oa(t, e, n, r, a, o, i, s, l) {
        return e = "cubic" === i.type ? [
            e
        ] : (!1 !== i.fromCurrent && e.unshift(ma(n, r, s), a ? ma(n, a, l) : 0), i.relative && na(e), [
            (a ? pointsToSegment : flatPointsToSegment)(e, i.curviness)
        ]), e = o(et(e, n, i)), nt(t, n, r, e, "x", s), a && nt(t, n, a, e, "y", l), cacheRawPathMeasurements(e, i.resolution || (0 === i.curviness ? 20 : 12));
    }
    function pa(t) {
        return t;
    }
    function ra(t, e, n) {
        var r, a = getGlobalMatrix(t), o = 0, i = 0;
        return "svg" === (t.tagName + "").toLowerCase() ? (r = t.viewBox.baseVal).width || (r = {
            width: +t.getAttribute("width"),
            height: +t.getAttribute("height")
        }) : r = e && t.getBBox && t.getBBox(), e && "auto" !== e && (o = e.push ? e[0] * (r ? r.width : t.offsetWidth || 0) : e.x, i = e.push ? e[1] * (r ? r.height : t.offsetHeight || 0) : e.y), n.apply(o || i ? a.apply({
            x: o,
            y: i
        }) : {
            x: a.e,
            y: a.f
        });
    }
    function sa(t, e, n, r) {
        var a, o = getGlobalMatrix(t.parentNode, !0, !0), i = o.clone().multiply(getGlobalMatrix(e)), s = ra(t, n, o), l = ra(e, r, o), h = l.x, u = l.y;
        return i.e = i.f = 0, "auto" === r && e.getTotalLength && "path" === e.tagName.toLowerCase() && (a = e.getAttribute("d").match(tt) || [], h += (a = i.apply({
            x: +a[0],
            y: +a[1]
        })).x, u += a.y), (a || e.getBBox && t.getBBox && e.ownerSVGElement === t.ownerSVGElement) && (h -= (a = i.apply(e.getBBox())).x, u -= a.y), i.e = h - s.x, i.f = u - s.y, i;
    }
    var j1, g1, Q, W, J = "x,translateX,left,marginLeft,xPercent".split(","), K = "y,translateY,top,marginTop,yPercent".split(","), o1 = Math.PI / 180, tt = /[-+\.]*\d+\.?(?:e-|e\+)?\d*/g, et = function _align(t, e, n) {
        var r, a, o, i = n.align, s = n.matrix, l = n.offsetX, h = n.offsetY, u = n.alignOrigin, g = t[0][0], f = t[0][1], p = ma(e, "x"), c = ma(e, "y");
        return t && t.length ? (i && ("self" === i || (r = W(i)[0] || e) === e ? transformRawPath(t, 1, 0, 0, 1, p - g, c - f) : (u && !1 !== u[2] ? j1.set(e, {
            transformOrigin: 100 * u[0] + "% " + 100 * u[1] + "%"
        }) : u = [
            ma(e, "xPercent") / -100,
            ma(e, "yPercent") / -100
        ], o = (a = sa(e, r, u, "auto")).apply({
            x: g,
            y: f
        }), transformRawPath(t, a.a, a.b, a.c, a.d, p + a.e - (o.x - a.e), c + a.f - (o.y - a.f)))), s ? transformRawPath(t, s.a, s.b, s.c, s.d, s.e, s.f) : (l || h) && transformRawPath(t, 1, 0, 0, 1, l || 0, h || 0), t) : getRawPath("M0,0L0,0");
    }, nt = function _addDimensionalPropTween(t, e, n, r, a, o) {
        var i = e._gsap, s = i.harness, l = s && s.aliases && s.aliases[n], h = l && l.indexOf(",") < 0 ? l : n, u = t._pt = new g1(t._pt, e, h, 0, 0, pa, 0, i.set(e, h, t));
        u.u = Q(i.get(e, h, o)) || 0, u.path = r, u.pp = a, t._props.push(h);
    }, a1 = {
        version: "3.10.3",
        name: "motionPath",
        register: function register(t, e, n) {
            Q = (j1 = t).utils.getUnit, W = j1.utils.toArray, g1 = n;
        },
        init: function init(t7, e7) {
            if (!j1) return console.warn("Please gsap.registerPlugin(MotionPathPlugin)"), !1;
            "object" == typeof e7 && !e7.style && e7.path || (e7 = {
                path: e7
            });
            var n7, r, a = [], o = e7.path, i = e7.autoRotate, s = e7.unitX, l = e7.unitY, h = e7.x, u = e7.y, g = o[0], f = function _sliceModifier(e, n) {
                return function(t) {
                    return e || 1 !== n ? sliceRawPath(t, e, n) : t;
                };
            }(e7.start, "end" in e7 ? e7.end : 1);
            if (this.rawPaths = a, this.target = t7, (this.rotate = i || 0 === i) && (this.rOffset = parseFloat(i) || 0, this.radians = !!e7.useRadians, this.rProp = e7.rotation || "rotation", this.rSet = t7._gsap.set(t7, this.rProp, this), this.ru = Q(t7._gsap.get(t7, this.rProp)) || 0), !Array.isArray(o) || "closed" in o || "number" == typeof g) cacheRawPathMeasurements(n7 = f(et(getRawPath(e7.path), t7, e7)), e7.resolution), a.push(n7), nt(this, t7, e7.x || "x", n7, "x", e7.unitX || "px"), nt(this, t7, e7.y || "y", n7, "y", e7.unitY || "px");
            else {
                for(r in g)!h && ~J.indexOf(r) ? h = r : !u && ~K.indexOf(r) && (u = r);
                for(r in h && u ? a.push(oa(this, la(la([], o, h, 0), o, u, 1), t7, h, u, f, e7, s || Q(o[0][h]), l || Q(o[0][u]))) : h = u = 0, g)r !== h && r !== u && a.push(oa(this, la([], o, r, 2), t7, r, 0, f, e7, Q(o[0][r])));
            }
        },
        render: function render(t, e) {
            var n = e.rawPaths, r = n.length, a = e._pt;
            for(1 < t ? t = 1 : t < 0 && (t = 0); r--;)getPositionOnPath(n[r], t, !r && e.rotate, n[r]);
            for(; a;)a.set(a.t, a.p, a.path[a.pp] + a.u, a.d, t), a = a._next;
            e.rotate && e.rSet(e.target, e.rProp, n[0].angle * (e.radians ? o1 : 1) + e.rOffset + e.ru, e, t);
        },
        getLength: function getLength(t) {
            return cacheRawPathMeasurements(getRawPath(t)).totalLength;
        },
        sliceRawPath: sliceRawPath,
        getRawPath: getRawPath,
        pointsToSegment: pointsToSegment,
        stringToRawPath: stringToRawPath,
        rawPathToString: rawPathToString,
        transformRawPath: transformRawPath,
        getGlobalMatrix: getGlobalMatrix,
        getPositionOnPath: getPositionOnPath,
        cacheRawPathMeasurements: cacheRawPathMeasurements,
        convertToPath: function convertToPath$1(t8, e) {
            return W(t8).map(function(t) {
                return convertToPath(t, !1 !== e);
            });
        },
        convertCoordinates: function convertCoordinates(t, e, n) {
            var r = getGlobalMatrix(e, !0, !0).multiply(getGlobalMatrix(t));
            return n ? r.apply(n) : r;
        },
        getAlignMatrix: sa,
        getRelativePosition: function getRelativePosition(t, e, n, r) {
            var a = sa(t, e, n, r);
            return {
                x: a.e,
                y: a.f
            };
        },
        arrayToRawPath: function arrayToRawPath(t, e) {
            var n = la(la([], t, (e = e || {}).x || "x", 0), t, e.y || "y", 1);
            return e.relative && na(n), [
                "cubic" === e.type ? n : pointsToSegment(n, e.curviness)
            ];
        }
    };
    !function _getGSAP() {
        return j1 || "undefined" != typeof window && (j1 = window.gsap) && j1.registerPlugin && j1;
    }() || j1.registerPlugin(a1), t1.MotionPathPlugin = a1, t1.default = a1;
    if (typeof window === "undefined" || window !== t1) Object.defineProperty(t1, "__esModule", {
        value: !0
    });
    else delete t1.default;
});

//# sourceMappingURL=index.ddd496d1.js.map
