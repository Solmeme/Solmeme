/*! Created by Cloudways 
 On 14-02-2024 */
! function(e, t) {
    t = t(e, e.document, Date);
    "object" == typeof module && module.exports ? module.exports = t : "function" == typeof define && define.amd ? define(t) : e.lazySizes = t
}(window, function(n, f, s) {
    "use strict";
    var m, h, e, z, D, i, y, t, c, k, o, H, O, a, P, r, u, g, p, v, b, C, $, A, q, I, U, j, l, d, G, J, K, E, Q, _, V, X, Y, M, N, w, L, Z, ee, te, ae, ne, x, ie, se, oe, re, W, S, B, le, T, de, ce, ue, F, fe, me, he, ze, ye, R, ge = {
        lazyClass: "br-lazy",
        loadedClass: "br-loaded",
        loadingClass: "br-loading",
        preloadClass: "br-preload",
        errorClass: "br-error",
        autosizesClass: "br-autosizes",
        fastLoadedClass: "ls-is-cached",
        iframeLoadMode: 0,
        srcAttr: "data-breeze",
        srcsetAttr: "data-brsrcset",
        sizesAttr: "data-brsizes",
        minSize: 40,
        customMedia: {},
        init: !0,
        expFactor: 1.5,
        hFac: .8,
        loadMode: 2,
        loadHidden: !0,
        ricTimeout: 0,
        throttleDelay: 125
    };
    for (e in h = n.lazySizesConfig || n.lazysizesConfig || {}, ge) e in h || (h[e] = ge[e]);
    return f && f.getElementsByClassName ? (z = f.documentElement, D = n.HTMLPictureElement, y = "getAttribute", t = n[i = "addEventListener"].bind(n), c = n.setTimeout, k = n.requestAnimationFrame || c, o = n.requestIdleCallback, H = /^picture$/i, O = ["load", "error", "lazyincluded", "_lazyloaded"], a = {}, P = Array.prototype.forEach, r = function(e, t) {
        return a[t] || (a[t] = new RegExp("(\\s|^)" + t + "(\\s|$)")), a[t].test(e[y]("class") || "") && a[t]
    }, u = function(e, t) {
        r(e, t) || e.setAttribute("class", (e[y]("class") || "").trim() + " " + t)
    }, g = function(e, t) {
        (t = r(e, t)) && e.setAttribute("class", (e[y]("class") || "").replace(t, " "))
    }, p = function(t, a, e) {
        var n = e ? i : "removeEventListener";
        e && p(t, a), O.forEach(function(e) {
            t[n](e, a)
        })
    }, v = function(e, t, a, n, i) {
        var s = f.createEvent("Event");
        return (a = a || {}).instance = m, s.initEvent(t, !n, !i), s.detail = a, e.dispatchEvent(s), s
    }, b = function(e, t) {
        var a;
        !D && (a = n.picturefill || h.pf) ? (t && t.src && !e[y]("srcset") && e.setAttribute("srcset", t.src), a({
            reevaluate: !0,
            elements: [e]
        })) : t && t.src && (e.src = t.src)
    }, C = function(e, t) {
        return (getComputedStyle(e, null) || {})[t]
    }, $ = function(e, t, a) {
        for (a = a || e.offsetWidth; a < h.minSize && t && !e._lazysizesWidth;) a = t.offsetWidth, t = t.parentNode;
        return a
    }, j = [], l = U = [], ve._lsFlush = pe, A = ve, d = function(a, e) {
        return e ? function() {
            A(a)
        } : function() {
            var e = this,
                t = arguments;
            A(function() {
                a.apply(e, t)
            })
        }
    }, G = function(e) {
        function t() {
            var e = s.now() - n;
            e < 99 ? c(t, 99 - e) : (o || i)(i)
        }
        var a, n, i = function() {
            a = null, e()
        };
        return function() {
            n = s.now(), a = a || c(t, 99)
        }
    }, se = /^img$/i, oe = /^iframe$/i, re = "onscroll" in n && !/(gle|ing)bot/.test(navigator.userAgent), B = -1, le = function(e) {
        return (Z = null == Z ? "hidden" == C(f.body, "visibility") : Z) || !("hidden" == C(e.parentNode, "visibility") && "hidden" == C(e, "visibility"))
    }, ee = Ce, ae = S = W = 0, ne = h.throttleDelay, x = h.ricTimeout, ie = o && 49 < x ? function() {
        o(Ae, {
            timeout: x
        }), x !== h.ricTimeout && (x = h.ricTimeout)
    } : d(function() {
        c(Ae)
    }, !0), de = d(Ee), ce = function(e) {
        de({
            target: e.target
        })
    }, ue = d(function(t, e, a, n, i) {
        var s, o, r, l, d;
        (o = v(t, "lazybeforeunveil", e)).defaultPrevented || (n && (a ? u(t, h.autosizesClass) : t.setAttribute("sizes", n)), a = t[y](h.srcsetAttr), n = t[y](h.srcAttr), i && (s = (l = t.parentNode) && H.test(l.nodeName || "")), r = e.firesLoad || "src" in t && (a || n || s), o = {
            target: t
        }, u(t, h.loadingClass), r && (clearTimeout(Q), Q = c(be, 2500), p(t, ce, !0)), s && P.call(l.getElementsByTagName("source"), _e), a ? t.setAttribute("srcset", a) : n && !s && (oe.test(t.nodeName) ? (e = n, 0 == (d = (l = t).getAttribute("data-load-mode") || h.iframeLoadMode) ? l.contentWindow.location.replace(e) : 1 == d && (l.src = e)) : t.src = n), i && (a || s) && b(t, {
            src: n
        })), t._lazyRace && delete t._lazyRace, g(t, h.lazyClass), A(function() {
            var e = t.complete && 1 < t.naturalWidth;
            r && !e || (e && u(t, h.fastLoadedClass), Ee(o), t._lazyCache = !0, c(function() {
                "_lazyCache" in t && delete t._lazyCache
            }, 9)), "lazy" == t.loading && S--
        }, !0)
    }), fe = G(function() {
        h.loadMode = 3, T()
    }), J = {
        _: function() {
            V = s.now(), m.elements = f.getElementsByClassName(h.lazyClass), K = f.getElementsByClassName(h.lazyClass + " " + h.preloadClass), t("scroll", T, !0), t("resize", T, !0), t("pageshow", function(e) {
                var t;
                e.persisted && (t = f.querySelectorAll("." + h.loadingClass)).length && t.forEach && k(function() {
                    t.forEach(function(e) {
                        e.complete && F(e)
                    })
                })
            }), n.MutationObserver ? new MutationObserver(T).observe(z, {
                childList: !0,
                subtree: !0,
                attributes: !0
            }) : (z[i]("DOMNodeInserted", T, !0), z[i]("DOMAttrModified", T, !0), setInterval(T, 999)), t("hashchange", T, !0), ["focus", "mouseover", "click", "load", "transitionend", "animationend"].forEach(function(e) {
                f[i](e, T, !0)
            }), /d$|^c/.test(f.readyState) ? Ne() : (t("load", Ne), f[i]("DOMContentLoaded", T), c(Ne, 2e4)), m.elements.length ? (Ce(), A._lsFlush()) : T()
        },
        checkElems: T = function(e) {
            var t;
            (e = !0 === e) && (x = 33), te || (te = !0, (t = ne - (s.now() - ae)) < 0 && (t = 0), e || t < 9 ? ie() : c(ie, t))
        },
        unveil: F = function(e) {
            var t, a, n, i;
            e._lazyRace || !(!(i = "auto" == (n = (a = se.test(e.nodeName)) && (e[y](h.sizesAttr) || e[y]("sizes")))) && E || !a || !e[y]("src") && !e.srcset || e.complete || r(e, h.errorClass)) && r(e, h.lazyClass) || (t = v(e, "lazyunveilread").detail, i && me.updateElem(e, !0, e.offsetWidth), e._lazyRace = !0, S++, ue(e, t, i, n, a))
        },
        _aLSL: Me
    }, ze = d(function(e, t, a, n) {
        var i, s, o;
        if (e._lazysizesWidth = n, e.setAttribute("sizes", n += "px"), H.test(t.nodeName || ""))
            for (s = 0, o = (i = t.getElementsByTagName("source")).length; s < o; s++) i[s].setAttribute("sizes", n);
        a.detail.dataAttr || b(e, a.detail)
    }), me = {
        _: function() {
            he = f.getElementsByClassName(h.autosizesClass), t("resize", ye)
        },
        checkElems: ye = G(function() {
            var e, t = he.length;
            if (t)
                for (e = 0; e < t; e++) we(he[e])
        }),
        updateElem: we
    }, R = function() {
        !R.i && f.getElementsByClassName && (R.i = !0, me._(), J._())
    }, c(function() {
        h.init && R()
    }), m = {
        cfg: h,
        autoSizer: me,
        loader: J,
        init: R,
        uP: b,
        aC: u,
        rC: g,
        hC: r,
        fire: v,
        gW: $,
        rAF: A
    }) : {
        init: function() {},
        cfg: h,
        noSupport: !0
    };

    function pe() {
        var e = l;
        for (l = U.length ? j : U, I = !(q = !0); e.length;) e.shift()();
        q = !1
    }

    function ve(e, t) {
        q && !t ? e.apply(this, arguments) : (l.push(e), I || (I = !0, (f.hidden ? c : k)(pe)))
    }

    function be(e) {
        S--, e && !(S < 0) && e.target || (S = 0)
    }

    function Ce() {
        var e, t, a, n, i, s, o, r, l, d, c, u = m.elements;
        if ((_ = h.loadMode) && S < 8 && (e = u.length)) {
            for (t = 0, B++; t < e; t++)
                if (u[t] && !u[t]._lazyRace)
                    if (!re || m.prematureUnveil && m.prematureUnveil(u[t])) F(u[t]);
                    else if ((o = u[t][y]("data-expand")) && (i = +o) || (i = W), l || (l = !h.expand || h.expand < 1 ? 500 < z.clientHeight && 500 < z.clientWidth ? 500 : 370 : h.expand, d = (m._defEx = l) * h.expFactor, c = h.hFac, Z = null, W < d && S < 1 && 2 < B && 2 < _ && !f.hidden ? (W = d, B = 0) : W = 1 < _ && 1 < B && S < 6 ? l : 0), r !== i && (X = innerWidth + i * c, Y = innerHeight + i, s = -1 * i, r = i), d = u[t].getBoundingClientRect(), (L = d.bottom) >= s && (M = d.top) <= Y && (w = d.right) >= s * c && (N = d.left) <= X && (L || w || N || M) && (h.loadHidden || le(u[t])) && (E && S < 3 && !o && (_ < 3 || B < 4) || function(e, t) {
                    var a, n = e,
                        i = le(e);
                    for (M -= t, L += t, N -= t, w += t; i && (n = n.offsetParent) && n != f.body && n != z;)(i = 0 < (C(n, "opacity") || 1)) && "visible" != C(n, "overflow") && (a = n.getBoundingClientRect(), i = w > a.left && N < a.right && L > a.top - 1 && M < a.bottom + 1);
                    return i
                }(u[t], i))) {
                if (F(u[t]), n = !0, 9 < S) break
            } else !n && E && !a && S < 4 && B < 4 && 2 < _ && (K[0] || h.preloadAfterLoad) && (K[0] || !o && (L || w || N || M || "auto" != u[t][y](h.sizesAttr))) && (a = K[0] || u[t]);
            a && !n && F(a)
        }
    }

    function Ae() {
        te = !1, ae = s.now(), ee()
    }

    function Ee(e) {
        var t = e.target;
        t._lazyCache ? delete t._lazyCache : (be(e), u(t, h.loadedClass), g(t, h.loadingClass), p(t, ce), v(t, "lazyloaded"))
    }

    function _e(e) {
        var t, a = e[y](h.srcsetAttr);
        (t = h.customMedia[e[y]("data-media") || e[y]("media")]) && e.setAttribute("media", t), a && e.setAttribute("srcset", a)
    }

    function Me() {
        3 == h.loadMode && (h.loadMode = 2), fe()
    }

    function Ne() {
        E || (s.now() - V < 999 ? c(Ne, 999) : (E = !0, h.loadMode = 3, T(), t("scroll", Me, !0)))
    }

    function we(e, t, a) {
        var n = e.parentNode;
        n && (a = $(e, n, a), (t = v(e, "lazybeforesizes", {
            width: a,
            dataAttr: !!t
        })).defaultPrevented || (a = t.detail.width) && a !== e._lazysizesWidth && ze(e, n, t, a))
    }
});