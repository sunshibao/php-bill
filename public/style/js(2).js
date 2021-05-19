// Copyright 2012 Google Inc. All rights reserved.
(function () {

    var data = {
        "resource": {
            "version": "1",

            "macros": [{
                "function": "__e"
            }, {
                "function": "__cid"
            }],
            "tags": [{
                "function": "__rep",
                "once_per_event": true,
                "vtp_containerId": ["macro", 1],
                "tag_id": 1
            }],
            "predicates": [{
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.js"
            }],
            "rules": [
                [["if", 0], ["add", 0]]]
        },
        "runtime": []


    };
    /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
    var aa, ba = "function" == typeof Object.create ? Object.create : function (a) {
        var b = function () {
        };
        b.prototype = a;
        return new b
    }, da;
    if ("function" == typeof Object.setPrototypeOf) da = Object.setPrototypeOf; else {
        var ea;
        a:{
            var ha = {lg: !0}, ia = {};
            try {
                ia.__proto__ = ha;
                ea = ia.lg;
                break a
            } catch (a) {
            }
            ea = !1
        }
        da = ea ? function (a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var ka = da, la = function (a, b) {
        a.prototype = ba(b.prototype);
        a.prototype.constructor = a;
        if (ka) ka(a, b); else for (var c in b) if ("prototype" != c) if (Object.defineProperties) {
            var d = Object.getOwnPropertyDescriptor(b, c);
            d && Object.defineProperty(a, c, d)
        } else a[c] = b[c];
        a.Sh = b.prototype
    }, ma = this || self, ra = function (a) {
        if (a && a != ma) return pa(a.document);
        null === qa && (qa = pa(ma.document));
        return qa
    }, sa = /^[\w+/_-]+[=]{0,2}$/, qa = null, pa = function (a) {
        var b = a.querySelector && a.querySelector("script[nonce]");
        if (b) {
            var c = b.nonce || b.getAttribute("nonce");
            if (c && sa.test(c)) return c
        }
        return ""
    }, ta = function (a) {
        var b = typeof a;
        return "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null"
    }, ua = function (a, b) {
        function c() {
        }

        c.prototype = b.prototype;
        a.Sh = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.ii = function (d, e, f) {
            for (var h = Array(arguments.length - 2), k = 2; k < arguments.length; k++) h[k - 2] = arguments[k];
            return b.prototype[e].apply(d, h)
        }
    }, va = function (a) {
        return a
    };
    var wa = function () {
    }, xa = function (a) {
        return "function" == typeof a
    }, g = function (a) {
        return "string" == typeof a
    }, ya = function (a) {
        return "number" == typeof a && !isNaN(a)
    }, za = function (a) {
        return "[object Array]" == Object.prototype.toString.call(Object(a))
    }, Aa = function (a, b) {
        if (Array.prototype.indexOf) {
            var c = a.indexOf(b);
            return "number" == typeof c ? c : -1
        }
        for (var d = 0; d < a.length; d++) if (a[d] === b) return d;
        return -1
    }, Ba = function (a, b) {
        if (a && za(a)) for (var c = 0; c < a.length; c++) if (a[c] && b(a[c])) return a[c]
    }, Ca = function (a, b) {
        if (!ya(a) ||
            !ya(b) || a > b) a = 0, b = 2147483647;
        return Math.floor(Math.random() * (b - a + 1) + a)
    }, Ea = function (a, b) {
        for (var c = new Da, d = 0; d < a.length; d++) c.set(a[d], !0);
        for (var e = 0; e < b.length; e++) if (c.get(b[e])) return !0;
        return !1
    }, Fa = function (a, b) {
        for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c])
    }, Ga = function (a) {
        return Math.round(Number(a)) || 0
    }, Ha = function (a) {
        return "false" == String(a).toLowerCase() ? !1 : !!a
    }, Ia = function (a) {
        var b = [];
        if (za(a)) for (var c = 0; c < a.length; c++) b.push(String(a[c]));
        return b
    }, Ka = function (a) {
        return a ?
            a.replace(/^\s+|\s+$/g, "") : ""
    }, La = function () {
        return (new Date).getTime()
    }, Da = function () {
        this.prefix = "gtm.";
        this.values = {}
    };
    Da.prototype.set = function (a, b) {
        this.values[this.prefix + a] = b
    };
    Da.prototype.get = function (a) {
        return this.values[this.prefix + a]
    };
    var Ma = function (a, b, c) {
        return a && a.hasOwnProperty(b) ? a[b] : c
    }, Na = function (a) {
        var b = !1;
        return function () {
            if (!b) try {
                a()
            } catch (c) {
            }
            b = !0
        }
    }, Oa = function (a, b) {
        for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
    }, Pa = function (a) {
        for (var b in a) if (a.hasOwnProperty(b)) return !0;
        return !1
    }, Qa = function (a, b) {
        for (var c = [], d = 0; d < a.length; d++) c.push(a[d]), c.push.apply(c, b[a[d]] || []);
        return c
    }, Va = function (a, b) {
        for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++) d = d[e[f]] = {};
        d[e[e.length - 1]] = b;
        return c
    }, Xa = function (a) {
        var b =
            [];
        Fa(a, function (c, d) {
            10 > c.length && d && b.push(c)
        });
        return b.join(",")
    };/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
    var Za = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/, $a = function (a) {
        if (null == a) return String(a);
        var b = Za.exec(Object.prototype.toString.call(Object(a)));
        return b ? b[1].toLowerCase() : "object"
    }, ab = function (a, b) {
        return Object.prototype.hasOwnProperty.call(Object(a), b)
    }, bb = function (a) {
        if (!a || "object" != $a(a) || a.nodeType || a == a.window) return !1;
        try {
            if (a.constructor && !ab(a, "constructor") && !ab(a.constructor.prototype, "isPrototypeOf")) return !1
        } catch (c) {
            return !1
        }
        for (var b in a) ;
        return void 0 ===
            b || ab(a, b)
    }, m = function (a, b) {
        var c = b || ("array" == $a(a) ? [] : {}), d;
        for (d in a) if (ab(a, d)) {
            var e = a[d];
            "array" == $a(e) ? ("array" != $a(c[d]) && (c[d] = []), c[d] = m(e, c[d])) : bb(e) ? (bb(c[d]) || (c[d] = {}), c[d] = m(e, c[d])) : c[d] = e
        }
        return c
    };
    var cb = function (a) {
        if (void 0 === a || za(a) || bb(a)) return !0;
        switch (typeof a) {
            case "boolean":
            case "number":
            case "string":
            case "function":
                return !0
        }
        return !1
    };
    var Bb;
    var Cb = [], Db = [], Eb = [], Fb = [], Gb = [], Hb = {}, Ib, Kb, Lb, Mb = function (a, b) {
        var c = a["function"];
        if (!c) throw Error("Error: No function name given for function call.");
        var d = Hb[c], e = {}, f;
        for (f in a) a.hasOwnProperty(f) && 0 === f.indexOf("vtp_") && (d && b && b.Le && b.Le(a[f]), e[void 0 !== d ? f : f.substr(4)] = a[f]);
        return void 0 !== d ? d(e) : Bb(c, e, b)
    }, Ob = function (a, b, c) {
        c = c || [];
        var d = {}, e;
        for (e in a) a.hasOwnProperty(e) && (d[e] = Nb(a[e], b, c));
        return d
    }, Pb = function (a) {
        var b = a["function"];
        if (!b) throw"Error: No function name given for function call.";
        var c = Hb[b];
        return c ? c.priorityOverride || 0 : 0
    }, Nb = function (a, b, c) {
        if (za(a)) {
            var d;
            switch (a[0]) {
                case "function_id":
                    return a[1];
                case "list":
                    d = [];
                    for (var e = 1; e < a.length; e++) d.push(Nb(a[e], b, c));
                    return d;
                case "macro":
                    var f = a[1];
                    if (c[f]) return;
                    var h = Cb[f];
                    if (!h || b.ld(h)) return;
                    c[f] = !0;
                    try {
                        var k = Ob(h, b, c);
                        k.vtp_gtmEventId = b.id;
                        d = Mb(k, b);
                        Lb && (d = Lb.Kg(d, k))
                    } catch (y) {
                        b.Xe && b.Xe(y, Number(f)), d = !1
                    }
                    c[f] = !1;
                    return d;
                case "map":
                    d = {};
                    for (var l = 1; l < a.length; l += 2) d[Nb(a[l], b, c)] = Nb(a[l + 1], b, c);
                    return d;
                case "template":
                    d =
                        [];
                    for (var n = !1, q = 1; q < a.length; q++) {
                        var r = Nb(a[q], b, c);
                        Kb && (n = n || r === Kb.Ub);
                        d.push(r)
                    }
                    return Kb && n ? Kb.Ng(d) : d.join("");
                case "escape":
                    d = Nb(a[1], b, c);
                    if (Kb && za(a[1]) && "macro" === a[1][0] && Kb.lh(a)) return Kb.Dh(d);
                    d = String(d);
                    for (var t = 2; t < a.length; t++) db[a[t]] && (d = db[a[t]](d));
                    return d;
                case "tag":
                    var p = a[1];
                    if (!Fb[p]) throw Error("Unable to resolve tag reference " + p + ".");
                    return d = {Qe: a[2], index: p};
                case "zb":
                    var u = {arg0: a[2], arg1: a[3], ignore_case: a[5]};
                    u["function"] = a[1];
                    var v = Qb(u, b, c), x = !!a[4];
                    return x ||
                    2 !== v ? x !== (1 === v) : null;
                default:
                    throw Error("Attempting to expand unknown Value type: " + a[0] + ".");
            }
        }
        return a
    }, Qb = function (a, b, c) {
        try {
            return Ib(Ob(a, b, c))
        } catch (d) {
            JSON.stringify(a)
        }
        return 2
    };
    var Rb = function () {
        var a = function (b) {
            return {
                toString: function () {
                    return b
                }
            }
        };
        return {
            nf: a("consent"),
            Kd: a("convert_case_to"),
            Ld: a("convert_false_to"),
            Md: a("convert_null_to"),
            Nd: a("convert_true_to"),
            Od: a("convert_undefined_to"),
            ai: a("debug_mode_metadata"),
            Fa: a("function"),
            cg: a("instance_name"),
            dg: a("live_only"),
            fg: a("malware_disabled"),
            gg: a("metadata"),
            di: a("original_vendor_template_id"),
            ig: a("once_per_event"),
            Be: a("once_per_load"),
            Fe: a("setup_tags"),
            Ge: a("tag_id"),
            He: a("teardown_tags")
        }
    }();
    var Sb = null, Vb = function (a) {
        function b(r) {
            for (var t = 0; t < r.length; t++) d[r[t]] = !0
        }

        var c = [], d = [];
        Sb = Tb(a);
        for (var e = 0; e < Db.length; e++) {
            var f = Db[e], h = Ub(f);
            if (h) {
                for (var k = f.add || [], l = 0; l < k.length; l++) c[k[l]] = !0;
                b(f.block || [])
            } else null === h && b(f.block || [])
        }
        for (var n = [], q = 0; q < Fb.length; q++) c[q] && !d[q] && (n[q] = !0);
        return n
    }, Ub = function (a) {
        for (var b = a["if"] || [], c = 0; c < b.length; c++) {
            var d = Sb(b[c]);
            if (0 === d) return !1;
            if (2 === d) return null
        }
        for (var e = a.unless || [], f = 0; f < e.length; f++) {
            var h = Sb(e[f]);
            if (2 === h) return null;
            if (1 === h) return !1
        }
        return !0
    }, Tb = function (a) {
        var b = [];
        return function (c) {
            void 0 === b[c] && (b[c] = Qb(Eb[c], a));
            return b[c]
        }
    };
    var Wb = {
        Kg: function (a, b) {
            b[Rb.Kd] && "string" === typeof a && (a = 1 == b[Rb.Kd] ? a.toLowerCase() : a.toUpperCase());
            b.hasOwnProperty(Rb.Md) && null === a && (a = b[Rb.Md]);
            b.hasOwnProperty(Rb.Od) && void 0 === a && (a = b[Rb.Od]);
            b.hasOwnProperty(Rb.Nd) && !0 === a && (a = b[Rb.Nd]);
            b.hasOwnProperty(Rb.Ld) && !1 === a && (a = b[Rb.Ld]);
            return a
        }
    };/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
    var C = {
        rb: "_ee",
        Wc: "_syn",
        gi: "_uei",
        ei: "_pci",
        Fc: "event_callback",
        Qb: "event_timeout",
        ia: "gtag.config"
    };
    C.Ba = "gtag.get";
    C.Aa = "purchase";
    C.Mb = "refund";
    C.cb = "begin_checkout";
    C.Kb = "add_to_cart";
    C.Lb = "remove_from_cart";
    C.xf = "view_cart";
    C.Qd = "add_to_wishlist";
    C.Ma = "view_item";
    C.Af = "view_promotion";
    C.zf = "select_promotion";
    C.yf = "select_item";
    C.Ac = "view_item_list";
    C.Pd = "add_payment_info";
    C.wf = "add_shipping_info";
    C.va = "value_key", C.sa = "value_callback";
    C.ba = "allow_ad_personalization_signals";
    C.Oc = "restricted_data_processing";
    C.eb = "allow_google_signals";
    C.ca = "cookie_expires";
    C.Pb = "cookie_update";
    C.ob = "session_duration";
    C.la = "user_properties";
    C.Ea = "transport_url";
    C.M = "ads_data_redaction";
    C.s = "ad_storage";
    C.J = "analytics_storage";
    C.pf = "region";
    C.qf = "wait_for_update";
    C.Bc = "page_view", C.Rd = "user_engagement", C.rf = "app_remove", C.sf = "app_store_refund", C.tf = "app_store_subscription_cancel", C.uf = "app_store_subscription_convert", C.vf = "app_store_subscription_renew", C.Bf = "first_open", C.Cf = "first_visit", C.Df = "in_app_purchase", C.Ef = "session_start", C.Ff = "allow_custom_scripts", C.Gf = "allow_display_features", C.Cc = "allow_enhanced_conversions", C.fe = "enhanced_conversions", C.fb = "client_id", C.V = "cookie_domain", C.Ob = "cookie_name", C.Na = "cookie_path", C.ja = "cookie_flags", C.ra = "currency",
        C.$d = "custom_map", C.Jc = "groups", C.Oa = "language", C.Yd = "country", C.bi = "non_interaction", C.mb = "page_location", C.Ca = "page_referrer", C.Mc = "page_title", C.nb = "send_page_view", C.Da = "send_to", C.Pc = "session_engaged", C.Sb = "session_id", C.Qc = "session_number", C.Zf = "tracking_id", C.ka = "linker", C.Pa = "url_passthrough", C.jb = "accept_incoming", C.D = "domains", C.lb = "url_position", C.kb = "decorate_forms", C.me = "phone_conversion_number", C.je = "phone_conversion_callback", C.ke = "phone_conversion_css_class", C.ne = "phone_conversion_options",
        C.Uf = "phone_conversion_ids", C.Tf = "phone_conversion_country_code", C.Sd = "aw_remarketing", C.Td = "aw_remarketing_only", C.Nb = "gclid", C.wa = "value", C.Vf = "quantity", C.Kf = "affiliation", C.ee = "tax", C.de = "shipping", C.Ec = "list_name", C.ce = "checkout_step", C.be = "checkout_option", C.Lf = "coupon", C.Mf = "promotions", C.pb = "transaction_id", C.qb = "user_id", C.Wf = "retoken", C.hb = "conversion_linker", C.gb = "conversion_cookie_prefix", C.da = "cookie_prefix", C.T = "items", C.Xd = "aw_merchant_id", C.Vd = "aw_feed_country", C.Wd = "aw_feed_language",
        C.Ud = "discount", C.ae = "disable_merchant_reported_purchases", C.ie = "new_customer", C.Zd = "customer_lifetime_value", C.Jf = "dc_natural_search", C.If = "dc_custom_params", C.$f = "trip_type", C.Sf = "passengers", C.Qf = "method", C.Yf = "search_term", C.Hf = "content_type", C.Rf = "optimize_id", C.Nf = "experiments", C.ib = "google_signals", C.Ic = "google_tld", C.Tb = "update", C.Hc = "firebase_id", C.Rb = "ga_restrict_domain", C.Gc = "event_settings", C.Dc = "dynamic_event_settings", C.Xf = "screen_name", C.Pf = "_x_19", C.Of = "_x_20", C.Lc = "internal_traffic_results",
        C.pe = "traffic_type", C.Nc = "referral_exclusion_definition", C.Kc = "ignore_referrer", C.oe = "delivery_postal_code", C.he = "estimated_delivery_date", C.ag = [C.ba, C.Cc, C.eb, C.T, C.Oc, C.V, C.ca, C.ja, C.Ob, C.Na, C.da, C.Pb, C.$d, C.Dc, C.Fc, C.Gc, C.Qb, C.Rb, C.ib, C.Ic, C.Jc, C.Lc, C.ka, C.Nc, C.Da, C.nb, C.ob, C.Ea, C.Tb, C.la], C.qe = [C.mb, C.Ca, C.Mc, C.Oa, C.Xf, C.qb, C.Hc],C.bg = [C.rf, C.sf, C.tf, C.uf, C.vf, C.Bf, C.Cf, C.Df, C.Ef, C.Rd],C.Jd = [C.Da, C.Sd, C.Td, C.nb, C.Oa, C.wa, C.ra, C.pb, C.qb, C.hb, C.gb, C.da, C.V, C.ca, C.ja, C.mb, C.Ca, C.me, C.je, C.ke, C.ne,
        C.T, C.Xd, C.Vd, C.Wd, C.Ud, C.ae, C.ie, C.Zd, C.ba, C.Oc, C.Tb, C.Hc, C.fe, C.Ea, C.Pa, C.Cc, C.oe, C.he];
    C.te = [C.Aa, C.Mb, C.cb, C.Kb, C.Lb, C.xf, C.Qd, C.Ma, C.Af, C.zf, C.Ac, C.yf, C.Pd, C.wf];
    C.se = [C.ba, C.eb, C.Pb];
    C.ue = [C.ca, C.Qb, C.ob];
    var tc = {}, uc = function (a, b) {
        tc[a] = tc[a] || [];
        tc[a][b] = !0
    }, vc = function (a) {
        for (var b = [], c = tc[a] || [], d = 0; d < c.length; d++) c[d] && (b[Math.floor(d / 6)] ^= 1 << d % 6);
        for (var e = 0; e < b.length; e++) b[e] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e] || 0);
        return b.join("")
    };
    var D = function (a) {
        uc("GTM", a)
    };

    function wc(a) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, wc); else {
            var b = Error().stack;
            b && (this.stack = b)
        }
        a && (this.message = String(a))
    }

    ua(wc, Error);
    wc.prototype.name = "CustomError";
    var xc = function (a, b) {
        for (var c = a.split("%s"), d = "", e = c.length - 1, f = 0; f < e; f++) d += c[f] + (f < b.length ? b[f] : "%s");
        wc.call(this, d + c[e])
    };
    ua(xc, wc);
    xc.prototype.name = "AssertionError";
    var yc = function (a, b) {
        throw new xc("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
    };
    var zc = function (a, b) {
        var c = function () {
        };
        c.prototype = a.prototype;
        var d = new c;
        a.apply(d, Array.prototype.slice.call(arguments, 1));
        return d
    }, Ac = function (a) {
        var b = a;
        return function () {
            if (b) {
                var c = b;
                b = null;
                c()
            }
        }
    };
    var Bc, Cc = function () {
        if (void 0 === Bc) {
            var a = null, b = ma.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {createHTML: va, createScript: va, createScriptURL: va})
                } catch (c) {
                    ma.console && ma.console.error(c.message)
                }
                Bc = a
            } else Bc = a
        }
        return Bc
    };
    var Ec = function (a, b) {
        this.h = b === Dc ? a : ""
    };
    Ec.prototype.toString = function () {
        return "TrustedResourceUrl{" + this.h + "}"
    };
    var Dc = {};
    var Fc = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
    var Gc;
    a:{
        var Hc = ma.navigator;
        if (Hc) {
            var Ic = Hc.userAgent;
            if (Ic) {
                Gc = Ic;
                break a
            }
        }
        Gc = ""
    }
    var Jc = function (a) {
        return -1 != Gc.indexOf(a)
    };
    var Mc = function (a, b, c) {
        this.h = c === Kc ? a : ""
    };
    Mc.prototype.toString = function () {
        return "SafeHtml{" + this.h + "}"
    };
    var Nc = function (a) {
        if (a instanceof Mc && a.constructor === Mc) return a.h;
        yc("expected object of type SafeHtml, got '" + a + "' of type " + ta(a));
        return "type_error:SafeHtml"
    }, Kc = {}, Oc = new Mc(ma.trustedTypes && ma.trustedTypes.emptyHTML || "", 0, Kc);
    var Pc = {MATH: !0, SCRIPT: !0, STYLE: !0, SVG: !0, TEMPLATE: !0}, Qc = function (a) {
        var b = !1, c;
        return function () {
            b || (c = a(), b = !0);
            return c
        }
    }(function () {
        if ("undefined" === typeof document) return !1;
        var a = document.createElement("div"), b = document.createElement("div");
        b.appendChild(document.createElement("div"));
        a.appendChild(b);
        if (!a.firstChild) return !1;
        var c = a.firstChild.firstChild;
        a.innerHTML = Nc(Oc);
        return !c.parentElement
    }), Rc = function (a, b) {
        if (a.tagName && Pc[a.tagName.toUpperCase()]) throw Error("goog.dom.safe.setInnerHtml cannot be used to set content of " +
            a.tagName + ".");
        if (Qc()) for (; a.lastChild;) a.removeChild(a.lastChild);
        a.innerHTML = Nc(b)
    };
    var Sc = function (a) {
        var b = Cc(), c = b ? b.createHTML(a) : a;
        return new Mc(c, null, Kc)
    };
    var F = window, H = document, Tc = navigator, Uc = H.currentScript && H.currentScript.src, Vc = function (a, b) {
        var c = F[a];
        F[a] = void 0 === c ? b : c;
        return F[a]
    }, Wc = function (a, b) {
        b && (a.addEventListener ? a.onload = b : a.onreadystatechange = function () {
            a.readyState in {loaded: 1, complete: 1} && (a.onreadystatechange = null, b())
        })
    }, Xc = function (a, b, c) {
        var d = H.createElement("script");
        d.type = "text/javascript";
        d.async = !0;
        var e, f = Cc(), h = f ? f.createScriptURL(a) : a;
        e = new Ec(h, Dc);
        var k;
        a:{
            try {
                var l = d && d.ownerDocument, n = l && (l.defaultView || l.parentWindow);
                n = n || ma;
                if (n.Element && n.Location) {
                    k = n;
                    break a
                }
            } catch (x) {
            }
            k = null
        }
        if (k && "undefined" != typeof k.HTMLScriptElement && (!d || !(d instanceof k.HTMLScriptElement) && (d instanceof k.Location || d instanceof k.Element))) {
            var q;
            var r = typeof d;
            if ("object" == r && null != d || "function" == r) try {
                q = d.constructor.displayName || d.constructor.name || Object.prototype.toString.call(d)
            } catch (x) {
                q = "<object could not be stringified>"
            } else q = void 0 === d ? "undefined" : null === d ? "null" : typeof d;
            yc("Argument is not a %s (or a non-Element, non-Location mock); got: %s",
                "HTMLScriptElement", q)
        }
        var t;
        e instanceof Ec && e.constructor === Ec ? t = e.h : (yc("expected object of type TrustedResourceUrl, got '" + e + "' of type " + ta(e)), t = "type_error:TrustedResourceUrl");
        d.src = t;
        var p = ra(d.ownerDocument && d.ownerDocument.defaultView);
        p && d.setAttribute("nonce", p);
        Wc(d, b);
        c && (d.onerror = c);
        var u = ra();
        u && d.setAttribute("nonce", u);
        var v = H.getElementsByTagName("script")[0] || H.body || H.head;
        v.parentNode.insertBefore(d, v);
        return d
    }, Yc = function () {
        if (Uc) {
            var a = Uc.toLowerCase();
            if (0 === a.indexOf("https://")) return 2;
            if (0 === a.indexOf("http://")) return 3
        }
        return 1
    }, Zc = function (a, b) {
        var c = H.createElement("iframe");
        c.height = "0";
        c.width = "0";
        c.style.display = "none";
        c.style.visibility = "hidden";
        var d = H.body && H.body.lastChild || H.body || H.head;
        d.parentNode.insertBefore(c, d);
        Wc(c, b);
        void 0 !== a && (c.src = a);
        return c
    }, $c = function (a, b, c) {
        var d = new Image(1, 1);
        d.onload = function () {
            d.onload = null;
            b && b()
        };
        d.onerror = function () {
            d.onerror = null;
            c && c()
        };
        d.src = a;
        return d
    }, ad = function (a, b, c, d) {
        a.addEventListener ? a.addEventListener(b, c, !!d) :
            a.attachEvent && a.attachEvent("on" + b, c)
    }, bd = function (a, b, c) {
        a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c)
    }, I = function (a) {
        F.setTimeout(a, 0)
    }, cd = function (a, b) {
        return a && b && a.attributes && a.attributes[b] ? a.attributes[b].value : null
    }, dd = function (a) {
        var b = a.innerText || a.textContent || "";
        b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
        b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
        return b
    }, ed = function (a) {
        var b = H.createElement("div");
        Rc(b, Sc("A<div>" + a + "</div>"));
        b = b.lastChild;
        for (var c = []; b.firstChild;) c.push(b.removeChild(b.firstChild));
        return c
    }, fd = function (a, b, c) {
        c = c || 100;
        for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
        for (var f = a, h = 0; f && h <= c; h++) {
            if (d[String(f.tagName).toLowerCase()]) return f;
            f = f.parentElement
        }
        return null
    }, gd = function (a) {
        Tc.sendBeacon && Tc.sendBeacon(a) || $c(a)
    }, hd = function (a, b) {
        var c = a[b];
        c && "string" === typeof c.animVal && (c = c.animVal);
        return c
    };
    var id = {}, jd = function (a) {
        return void 0 == id[a] ? !1 : id[a]
    };
    var kd = [];

    function ld() {
        var a = Vc("google_tag_data", {});
        a.ics || (a.ics = {entries: {}, set: md, update: nd, addListener: od, notifyListeners: pd, active: !1});
        return a.ics
    }

    function md(a, b, c, d, e, f) {
        var h = ld();
        h.active = !0;
        if (void 0 != b) {
            var k = h.entries, l = k[a] || {}, n = l.region, q = c && g(c) ? c.toUpperCase() : void 0;
            d = d.toUpperCase();
            e = e.toUpperCase();
            if (q === e || (q === d ? n !== e : !q && !n)) {
                var r = !!(f && 0 < f && void 0 === l.update),
                    t = {region: q, initial: "granted" === b, update: l.update, quiet: r};
                k[a] = t;
                r && F.setTimeout(function () {
                    k[a] === t && t.quiet && (t.quiet = !1, qd(a), pd(), uc("TAGGING", 2))
                }, f)
            }
        }
    }

    function nd(a, b) {
        var c = ld();
        c.active = !0;
        if (void 0 != b) {
            var d = rd(a), e = c.entries, f = e[a] = e[a] || {};
            f.update = "granted" === b;
            var h = rd(a);
            f.quiet ? (f.quiet = !1, qd(a)) : h !== d && qd(a)
        }
    }

    function od(a, b) {
        kd.push({Ne: a, Wg: b})
    }

    function qd(a) {
        for (var b = 0; b < kd.length; ++b) {
            var c = kd[b];
            za(c.Ne) && -1 !== c.Ne.indexOf(a) && (c.af = !0)
        }
    }

    function pd(a) {
        for (var b = 0; b < kd.length; ++b) {
            var c = kd[b];
            if (c.af) {
                c.af = !1;
                try {
                    c.Wg({Me: a})
                } catch (d) {
                }
            }
        }
    }

    var rd = function (a) {
        var b = ld().entries[a] || {};
        return void 0 !== b.update ? b.update : void 0 !== b.initial ? b.initial : void 0
    }, sd = function (a) {
        return !(ld().entries[a] || {}).quiet
    }, td = function () {
        return jd("gtag_cs_api") ? ld().active : !1
    }, ud = function (a, b) {
        ld().addListener(a, b)
    }, vd = function (a, b) {
        function c() {
            for (var e = 0; e < b.length; e++) if (!sd(b[e])) return !0;
            return !1
        }

        if (c()) {
            var d = !1;
            ud(b, function (e) {
                d || c() || (d = !0, a(e))
            })
        } else a({})
    }, wd = function (a, b) {
        if (!1 === rd(b)) {
            var c = !1;
            ud([b], function (d) {
                !c && rd(b) && (a(d), c = !0)
            })
        }
    };
    var xd = [C.s, C.J], yd = function (a) {
        var b = a[C.pf];
        b && D(40);
        var c = a[C.qf];
        c && D(41);
        for (var d = za(b) ? b : [b], e = 0; e < d.length; ++e) for (var f = 0; f < xd.length; f++) {
            var h = xd[f], k = a[xd[f]], l = d[e];
            ld().set(h, k, l, "", "", c)
        }
    }, zd = function (a, b) {
        for (var c = 0; c < xd.length; c++) {
            var d = xd[c], e = a[xd[c]];
            ld().update(d, e)
        }
        ld().notifyListeners(b)
    }, Ad = function (a) {
        var b = rd(a);
        return void 0 != b ? b : !0
    }, Fd = function () {
        for (var a = [], b = 0; b < xd.length; b++) {
            var c = rd(xd[b]);
            a[b] = !0 === c ? "1" : !1 === c ? "0" : "-"
        }
        return "G1" +
            a.join("")
    }, Gd = function (a, b) {
        vd(a, b)
    };
    var Id = function (a) {
        return Hd ? H.querySelectorAll(a) : null
    }, Jd = function (a, b) {
        if (!Hd) return null;
        if (Element.prototype.closest) try {
            return a.closest(b)
        } catch (e) {
            return null
        }
        var c = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector,
            d = a;
        if (!H.documentElement.contains(d)) return null;
        do {
            try {
                if (c.call(d, b)) return d
            } catch (e) {
                break
            }
            d = d.parentElement || d.parentNode
        } while (null !== d && 1 === d.nodeType);
        return null
    }, Kd = !1;
    if (H.querySelectorAll) try {
        var Ld = H.querySelectorAll(":root");
        Ld && 1 == Ld.length && Ld[0] == H.documentElement && (Kd = !0)
    } catch (a) {
    }
    var Hd = Kd;
    var Zd = {}, L = null, $d = Math.random();
    Zd.B = "UA-55279261-1";
    Zd.Yb = "al2";
    Zd.ci = "";
    var ae = {
        __cl: !0,
        __ecl: !0,
        __ehl: !0,
        __evl: !0,
        __fal: !0,
        __fil: !0,
        __fsl: !0,
        __hl: !0,
        __jel: !0,
        __lcl: !0,
        __sdl: !0,
        __tl: !0,
        __ytl: !0
    }, be = {__paused: !0, __tg: !0}, ce;
    for (ce in ae) ae.hasOwnProperty(ce) && (be[ce] = !0);
    var de = "www.googletagmanager.com/gtm.js";
    de = "www.googletagmanager.com/gtag/js";
    var ee = de, fe = Ha("true"), ge = null, he = null, ie = "//www.googletagmanager.com/a?id=" + Zd.B + "&cv=1",
        je = {}, ke = {}, le = function () {
            var a = L.sequence || 1;
            L.sequence = a + 1;
            return a
        };
    var me = {}, ne = new Da, oe = {}, pe = {}, se = {
            name: "dataLayer", set: function (a, b) {
                m(Va(a, b), oe);
                qe()
            }, get: function (a) {
                return re(a, 2)
            }, reset: function () {
                ne = new Da;
                oe = {};
                qe()
            }
        }, re = function (a, b) {
            return 2 != b ? ne.get(a) : te(a.split("."))
        }, te = function (a) {
            for (var b = oe, c = 0; c < a.length; c++) {
                if (null === b) return !1;
                if (void 0 === b) break;
                b = b[a[c]]
            }
            return b
        }, ue = function (a, b) {
            pe.hasOwnProperty(a) || (ne.set(a, b), m(Va(a, b), oe), qe())
        }, qe = function (a) {
            Fa(pe, function (b, c) {
                ne.set(b, c);
                m(Va(b, void 0), oe);
                m(Va(b, c), oe);
                a && delete pe[b]
            })
        },
        ve = function (a, b, c) {
            me[a] = me[a] || {};
            var d = 1 !== c ? te(b.split(".")) : ne.get(b);
            "array" === $a(d) || "object" === $a(d) ? me[a][b] = m(d) : me[a][b] = d
        }, we = function (a, b) {
            if (me[a]) return me[a][b]
        }, xe = function (a, b) {
            me[a] && delete me[a][b]
        };
    var Ae = {}, Be = function (a, b) {
        if (F._gtmexpgrp && F._gtmexpgrp.hasOwnProperty(a)) return F._gtmexpgrp[a];
        void 0 === Ae[a] && (Ae[a] = Math.floor(Math.random() * b));
        return Ae[a]
    };
    var Ce = /:[0-9]+$/, De = function (a, b, c) {
        for (var d = a.split("&"), e = 0; e < d.length; e++) {
            var f = d[e].split("=");
            if (decodeURIComponent(f[0]).replace(/\+/g, " ") === b) {
                var h = f.slice(1).join("=");
                return c ? h : decodeURIComponent(h).replace(/\+/g, " ")
            }
        }
    }, Ge = function (a, b, c, d, e) {
        b && (b = String(b).toLowerCase());
        if ("protocol" === b || "port" === b) a.protocol = Ee(a.protocol) || Ee(F.location.protocol);
        "port" === b ? a.port = String(Number(a.hostname ? a.port : F.location.port) || ("http" == a.protocol ? 80 : "https" == a.protocol ? 443 : "")) : "host" === b &&
            (a.hostname = (a.hostname || F.location.hostname).replace(Ce, "").toLowerCase());
        return Fe(a, b, c, d, e)
    }, Fe = function (a, b, c, d, e) {
        var f, h = Ee(a.protocol);
        b && (b = String(b).toLowerCase());
        switch (b) {
            case "url_no_fragment":
                f = He(a);
                break;
            case "protocol":
                f = h;
                break;
            case "host":
                f = a.hostname.replace(Ce, "").toLowerCase();
                if (c) {
                    var k = /^www\d*\./.exec(f);
                    k && k[0] && (f = f.substr(k[0].length))
                }
                break;
            case "port":
                f = String(Number(a.port) || ("http" == h ? 80 : "https" == h ? 443 : ""));
                break;
            case "path":
                a.pathname || a.hostname || uc("TAGGING",
                    1);
                f = "/" == a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
                var l = f.split("/");
                0 <= Aa(d || [], l[l.length - 1]) && (l[l.length - 1] = "");
                f = l.join("/");
                break;
            case "query":
                f = a.search.replace("?", "");
                e && (f = De(f, e, void 0));
                break;
            case "extension":
                var n = a.pathname.split(".");
                f = 1 < n.length ? n[n.length - 1] : "";
                f = f.split("/")[0];
                break;
            case "fragment":
                f = a.hash.replace("#", "");
                break;
            default:
                f = a && a.href
        }
        return f
    }, Ee = function (a) {
        return a ? a.replace(":", "").toLowerCase() : ""
    }, He = function (a) {
        var b = "";
        if (a && a.href) {
            var c = a.href.indexOf("#");
            b = 0 > c ? a.href : a.href.substr(0, c)
        }
        return b
    }, Ie = function (a) {
        var b = H.createElement("a");
        a && (b.href = a);
        var c = b.pathname;
        "/" !== c[0] && (a || uc("TAGGING", 1), c = "/" + c);
        var d = b.hostname.replace(Ce, "");
        return {
            href: b.href,
            protocol: b.protocol,
            host: b.host,
            hostname: d,
            pathname: c,
            search: b.search,
            hash: b.hash,
            port: b.port
        }
    }, Je = function (a) {
        function b(n) {
            var q = n.split("=")[0];
            return 0 > d.indexOf(q) ? n : q + "=0"
        }

        function c(n) {
            return n.split("&").map(b).filter(function (q) {
                return void 0 != q
            }).join("&")
        }

        var d = "gclid dclid gclaw gcldc gclgp gclha gclgf _gl".split(" "),
            e = Ie(a), f = a.split(/[?#]/)[0], h = e.search, k = e.hash;
        "?" === h[0] && (h = h.substring(1));
        "#" === k[0] && (k = k.substring(1));
        h = c(h);
        k = c(k);
        "" !== h && (h = "?" + h);
        "" !== k && (k = "#" + k);
        var l = "" + f + h + k;
        "/" === l[l.length - 1] && (l = l.substring(0, l.length - 1));
        return l
    };

    function Ke(a, b, c) {
        for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) {
            var h = e[f].split("="), k = h[0].replace(/^\s*|\s*$/g, "");
            if (k && k == a) {
                var l = h.slice(1).join("=").replace(/^\s*|\s*$/g, "");
                l && c && (l = decodeURIComponent(l));
                d.push(l)
            }
        }
        return d
    };var Me = function (a, b, c, d) {
        return Le(d) ? Ke(a, String(b || document.cookie), c) : []
    }, Pe = function (a, b, c, d, e) {
        if (Le(e)) {
            var f = Ne(a, d, e);
            if (1 === f.length) return f[0].id;
            if (0 !== f.length) {
                f = Oe(f, function (h) {
                    return h.cc
                }, b);
                if (1 === f.length) return f[0].id;
                f = Oe(f, function (h) {
                    return h.Ab
                }, c);
                return f[0] ? f[0].id : void 0
            }
        }
    };

    function Qe(a, b, c, d) {
        var e = document.cookie;
        document.cookie = a;
        var f = document.cookie;
        return e != f || void 0 != c && 0 <= Me(b, f, !1, d).indexOf(c)
    }

    var Ue = function (a, b, c) {
        function d(p, u, v) {
            if (null == v) return delete h[u], p;
            h[u] = v;
            return p + "; " + u + "=" + v
        }

        function e(p, u) {
            if (null == u) return delete h[u], p;
            h[u] = !0;
            return p + "; " + u
        }

        if (!Le(c.Ha)) return 2;
        var f;
        void 0 == b ? f = a + "=deleted; expires=" + (new Date(0)).toUTCString() : (c.encode && (b = encodeURIComponent(b)), b = Re(b), f = a + "=" + b);
        var h = {};
        f = d(f, "path", c.path);
        var k;
        c.expires instanceof Date ? k = c.expires.toUTCString() : null != c.expires && (k = "" + c.expires);
        f = d(f, "expires", k);
        f = d(f, "max-age", c.si);
        f = d(f, "samesite",
            c.xi);
        c.yi && (f = e(f, "secure"));
        var l = c.domain;
        if ("auto" === l) {
            for (var n = Se(), q = 0; q < n.length; ++q) {
                var r = "none" !== n[q] ? n[q] : void 0, t = d(f, "domain", r);
                t = e(t, c.flags);
                if (!Te(r, c.path) && Qe(t, a, b, c.Ha)) return 0
            }
            return 1
        }
        l && "none" !== l && (f = d(f, "domain", l));
        f = e(f, c.flags);
        return Te(l, c.path) ? 1 : Qe(f, a, b, c.Ha) ? 0 : 1
    }, Ve = function (a, b, c) {
        null == c.path && (c.path = "/");
        c.domain || (c.domain = "auto");
        return Ue(a, b, c)
    };

    function Oe(a, b, c) {
        for (var d = [], e = [], f, h = 0; h < a.length; h++) {
            var k = a[h], l = b(k);
            l === c ? d.push(k) : void 0 === f || l < f ? (e = [k], f = l) : l === f && e.push(k)
        }
        return 0 < d.length ? d : e
    }

    function Ne(a, b, c) {
        for (var d = [], e = Me(a, void 0, void 0, c), f = 0; f < e.length; f++) {
            var h = e[f].split("."), k = h.shift();
            if (!b || -1 !== b.indexOf(k)) {
                var l = h.shift();
                l && (l = l.split("-"), d.push({id: h.join("."), cc: 1 * l[0] || 1, Ab: 1 * l[1] || 1}))
            }
        }
        return d
    }

    var Re = function (a) {
        a && 1200 < a.length && (a = a.substring(0, 1200));
        return a
    }, We = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/, Xe = /(^|\.)doubleclick\.net$/i, Te = function (a, b) {
        return Xe.test(document.location.hostname) || "/" === b && We.test(a)
    }, Se = function () {
        var a = [], b = document.location.hostname.split(".");
        if (4 === b.length) {
            var c = b[b.length - 1];
            if (parseInt(c, 10).toString() === c) return ["none"]
        }
        for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
        var e = document.location.hostname;
        Xe.test(e) || We.test(e) || a.push("none");
        return a
    }, Le = function (a) {
        if (!jd("gtag_cs_api") || !a || !td()) return !0;
        if (!sd(a)) return !1;
        var b = rd(a);
        return null == b ? !0 : !!b
    };
    var Ye = function () {
        for (var a = Tc.userAgent + (H.cookie || "") + (H.referrer || ""), b = a.length, c = F.history.length; 0 < c;) a += c-- ^ b++;
        var d = 1, e, f, h;
        if (a) for (d = 0, f = a.length - 1; 0 <= f; f--) h = a.charCodeAt(f), d = (d << 6 & 268435455) + h + (h << 14), e = d & 266338304, d = 0 != e ? d ^ e >> 21 : d;
        return [Math.round(2147483647 * Math.random()) ^ d & 2147483647, Math.round(La() / 1E3)].join(".")
    }, af = function (a, b, c, d, e) {
        var f = Ze(b);
        return Pe(a, f, $e(c), d, e)
    }, bf = function (a, b, c, d) {
        var e = "" + Ze(c), f = $e(d);
        1 < f && (e += "-" + f);
        return [b, e, a].join(".")
    }, Ze = function (a) {
        if (!a) return 1;
        a = 0 === a.indexOf(".") ? a.substr(1) : a;
        return a.split(".").length
    }, $e = function (a) {
        if (!a || "/" === a) return 1;
        "/" !== a[0] && (a = "/" + a);
        "/" !== a[a.length - 1] && (a += "/");
        return a.split("/").length - 1
    };

    function cf(a, b, c) {
        var d, e = a.zb;
        null == e && (e = 7776E3);
        0 !== e && (d = new Date((b || La()) + 1E3 * e));
        return {path: a.path, domain: a.domain, flags: a.flags, encode: !!c, expires: d}
    };var df = ["1"], ef = {}, jf = function (a) {
        var b = ff(a.prefix);
        ef[b] || gf(b, a.path, a.domain) || (hf(b, Ye(), a), gf(b, a.path, a.domain))
    };

    function hf(a, b, c) {
        var d = bf(b, "1", c.domain, c.path), e = cf(c);
        e.Ha = "ad_storage";
        Ve(a, d, e)
    }

    function gf(a, b, c) {
        var d = af(a, b, c, df, "ad_storage");
        d && (ef[a] = d);
        return d
    }

    function ff(a) {
        return (a || "_gcl") + "_au"
    };

    function kf() {
        for (var a = lf, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
        return b
    }

    function mf() {
        var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        a += a.toLowerCase() + "0123456789-_";
        return a + "."
    }

    var lf, nf;

    function of(a) {
        lf = lf || mf();
        nf = nf || kf();
        for (var b = [], c = 0; c < a.length; c += 3) {
            var d = c + 1 < a.length, e = c + 2 < a.length, f = a.charCodeAt(c), h = d ? a.charCodeAt(c + 1) : 0,
                k = e ? a.charCodeAt(c + 2) : 0, l = f >> 2, n = (f & 3) << 4 | h >> 4, q = (h & 15) << 2 | k >> 6,
                r = k & 63;
            e || (r = 64, d || (q = 64));
            b.push(lf[l], lf[n], lf[q], lf[r])
        }
        return b.join("")
    }

    function pf(a) {
        function b(l) {
            for (; d < a.length;) {
                var n = a.charAt(d++), q = nf[n];
                if (null != q) return q;
                if (!/^[\s\xa0]*$/.test(n)) throw Error("Unknown base64 encoding at char: " + n);
            }
            return l
        }

        lf = lf || mf();
        nf = nf || kf();
        for (var c = "", d = 0; ;) {
            var e = b(-1), f = b(0), h = b(64), k = b(64);
            if (64 === k && -1 === e) return c;
            c += String.fromCharCode(e << 2 | f >> 4);
            64 != h && (c += String.fromCharCode(f << 4 & 240 | h >> 2), 64 != k && (c += String.fromCharCode(h << 6 & 192 | k)))
        }
    };var qf;
    var uf = function () {
        var a = rf, b = sf, c = tf(), d = function (h) {
            a(h.target || h.srcElement || {})
        }, e = function (h) {
            b(h.target || h.srcElement || {})
        };
        if (!c.init) {
            ad(H, "mousedown", d);
            ad(H, "keyup", d);
            ad(H, "submit", e);
            var f = HTMLFormElement.prototype.submit;
            HTMLFormElement.prototype.submit = function () {
                b(this);
                f.call(this)
            };
            c.init = !0
        }
    }, vf = function (a, b, c, d, e) {
        var f = {callback: a, domains: b, fragment: 2 === c, placement: c, forms: d, sameHost: e};
        tf().decorators.push(f)
    }, wf = function (a, b, c) {
        for (var d = tf().decorators, e = {}, f = 0; f < d.length; ++f) {
            var h =
                d[f], k;
            if (k = !c || h.forms) a:{
                var l = h.domains, n = a, q = !!h.sameHost;
                if (l && (q || n !== H.location.hostname)) for (var r = 0; r < l.length; r++) if (l[r] instanceof RegExp) {
                    if (l[r].test(n)) {
                        k = !0;
                        break a
                    }
                } else if (0 <= n.indexOf(l[r]) || q && 0 <= l[r].indexOf(n)) {
                    k = !0;
                    break a
                }
                k = !1
            }
            if (k) {
                var t = h.placement;
                void 0 == t && (t = h.fragment ? 2 : 1);
                t === b && Oa(e, h.callback())
            }
        }
        return e
    }, tf = function () {
        var a = Vc("google_tag_data", {}), b = a.gl;
        b && b.decorators || (b = {decorators: []}, a.gl = b);
        return b
    };
    var xf = /(.*?)\*(.*?)\*(.*)/, yf = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
        zf = /^(?:www\.|m\.|amp\.)+/, Af = /([^?#]+)(\?[^#]*)?(#.*)?/;

    function Bf(a) {
        return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)")
    }

    var Df = function (a) {
        var b = [], c;
        for (c in a) if (a.hasOwnProperty(c)) {
            var d = a[c];
            void 0 !== d && d === d && null !== d && "[object Object]" !== d.toString() && (b.push(c), b.push(of(String(d))))
        }
        var e = b.join("*");
        return ["1", Cf(e), e].join("*")
    }, Cf = function (a, b) {
        var c = [window.navigator.userAgent, (new Date).getTimezoneOffset(), window.navigator.userLanguage || window.navigator.language, Math.floor((new Date).getTime() / 60 / 1E3) - (void 0 === b ? 0 : b), a].join("*"),
            d;
        if (!(d = qf)) {
            for (var e = Array(256), f = 0; 256 > f; f++) {
                for (var h = f, k = 0; 8 > k; k++) h =
                    h & 1 ? h >>> 1 ^ 3988292384 : h >>> 1;
                e[f] = h
            }
            d = e
        }
        qf = d;
        for (var l = 4294967295, n = 0; n < c.length; n++) l = l >>> 8 ^ qf[(l ^ c.charCodeAt(n)) & 255];
        return ((l ^ -1) >>> 0).toString(36)
    }, Ff = function () {
        return function (a) {
            var b = Ie(F.location.href), c = b.search.replace("?", ""), d = De(c, "_gl", !0) || "";
            a.query = Ef(d) || {};
            var e = Ge(b, "fragment").match(Bf("_gl"));
            a.fragment = Ef(e && e[3] || "") || {}
        }
    }, Gf = function (a) {
        var b = Ff(), c = tf();
        c.data || (c.data = {query: {}, fragment: {}}, b(c.data));
        var d = {}, e = c.data;
        e && (Oa(d, e.query), a && Oa(d, e.fragment));
        return d
    }, Ef =
        function (a) {
            var b;
            b = void 0 === b ? 3 : b;
            try {
                if (a) {
                    var c;
                    a:{
                        for (var d = a, e = 0; 3 > e; ++e) {
                            var f = xf.exec(d);
                            if (f) {
                                c = f;
                                break a
                            }
                            d = decodeURIComponent(d)
                        }
                        c = void 0
                    }
                    var h = c;
                    if (h && "1" === h[1]) {
                        var k = h[3], l;
                        a:{
                            for (var n = h[2], q = 0; q < b; ++q) if (n === Cf(k, q)) {
                                l = !0;
                                break a
                            }
                            l = !1
                        }
                        if (l) {
                            for (var r = {}, t = k ? k.split("*") : [], p = 0; p < t.length; p += 2) r[t[p]] = pf(t[p + 1]);
                            return r
                        }
                    }
                }
            } catch (u) {
            }
        };

    function Hf(a, b, c, d) {
        function e(q) {
            var r = q, t = Bf(a).exec(r), p = r;
            if (t) {
                var u = t[2], v = t[4];
                p = t[1];
                v && (p = p + u + v)
            }
            q = p;
            var x = q.charAt(q.length - 1);
            q && "&" !== x && (q += "&");
            return q + n
        }

        d = void 0 === d ? !1 : d;
        var f = Af.exec(c);
        if (!f) return "";
        var h = f[1], k = f[2] || "", l = f[3] || "", n = a + "=" + b;
        d ? l = "#" + e(l.substring(1)) : k = "?" + e(k.substring(1));
        return "" + h + k + l
    }

    function If(a, b) {
        var c = "FORM" === (a.tagName || "").toUpperCase(), d = wf(b, 1, c), e = wf(b, 2, c), f = wf(b, 3, c);
        if (Pa(d)) {
            var h = Df(d);
            c ? Jf("_gl", h, a) : Kf("_gl", h, a, !1)
        }
        if (!c && Pa(e)) {
            var k = Df(e);
            Kf("_gl", k, a, !0)
        }
        for (var l in f) if (f.hasOwnProperty(l)) a:{
            var n = l, q = f[l], r = a;
            if (r.tagName) {
                if ("a" === r.tagName.toLowerCase()) {
                    Kf(n, q, r, void 0);
                    break a
                }
                if ("form" === r.tagName.toLowerCase()) {
                    Jf(n, q, r);
                    break a
                }
            }
            "string" == typeof r && Hf(n, q, r, void 0)
        }
    }

    function Kf(a, b, c, d) {
        if (c.href) {
            var e = Hf(a, b, c.href, void 0 === d ? !1 : d);
            Fc.test(e) && (c.href = e)
        }
    }

    function Jf(a, b, c) {
        if (c && c.action) {
            var d = (c.method || "").toLowerCase();
            if ("get" === d) {
                for (var e = c.childNodes || [], f = !1, h = 0; h < e.length; h++) {
                    var k = e[h];
                    if (k.name === a) {
                        k.setAttribute("value", b);
                        f = !0;
                        break
                    }
                }
                if (!f) {
                    var l = H.createElement("input");
                    l.setAttribute("type", "hidden");
                    l.setAttribute("name", a);
                    l.setAttribute("value", b);
                    c.appendChild(l)
                }
            } else if ("post" === d) {
                var n = Hf(a, b, c.action);
                Fc.test(n) && (c.action = n)
            }
        }
    }

    var rf = function (a) {
        try {
            var b;
            a:{
                for (var c = a, d = 100; c && 0 < d;) {
                    if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
                        b = c;
                        break a
                    }
                    c = c.parentNode;
                    d--
                }
                b = null
            }
            var e = b;
            if (e) {
                var f = e.protocol;
                "http:" !== f && "https:" !== f || If(e, e.hostname)
            }
        } catch (h) {
        }
    }, sf = function (a) {
        try {
            if (a.action) {
                var b = Ge(Ie(a.action), "host");
                If(a, b)
            }
        } catch (c) {
        }
    }, Lf = function (a, b, c, d) {
        uf();
        vf(a, b, "fragment" === c ? 2 : 1, !!d, !1)
    }, Mf = function (a, b) {
        uf();
        vf(a, [Fe(F.location, "host", !0)], b, !0, !0)
    }, Nf = function () {
        var a = H.location.hostname, b = yf.exec(H.referrer);
        if (!b) return !1;
        var c = b[2], d = b[1], e = "";
        if (c) {
            var f = c.split("/"), h = f[1];
            e = "s" === h ? decodeURIComponent(f[2]) : decodeURIComponent(h)
        } else if (d) {
            if (0 === d.indexOf("xn--")) return !1;
            e = d.replace(/-/g, ".").replace(/\.\./g, "-")
        }
        var k = a.replace(zf, ""), l = e.replace(zf, ""), n;
        if (!(n = k === l)) {
            var q = "." + l;
            n = k.substring(k.length - q.length, k.length) === q
        }
        return n
    }, Of = function (a, b) {
        return !1 === a ? !1 : a || b || Nf()
    };
    var Pf = /^\w+$/, Qf = /^[\w-]+$/, Rf = /^~?[\w-]+$/, Sf = {aw: "_aw", dc: "_dc", gf: "_gf", ha: "_ha", gp: "_gp"},
        Tf = function () {
            if (!jd("gtag_cs_api") || !td()) return !0;
            var a = rd("ad_storage");
            return null == a ? !0 : !!a
        }, Uf = function (a, b) {
            sd("ad_storage") ? Tf() ? a() : wd(a, "ad_storage") : b ? uc("TAGGING", 3) : vd(function () {
                Uf(a, !0)
            }, ["ad_storage"])
        }, Xf = function (a) {
            var b = [];
            if (!H.cookie) return b;
            var c = Me(a, H.cookie, void 0, "ad_storage");
            if (!c || 0 == c.length) return b;
            for (var d = 0; d < c.length; d++) {
                var e = Vf(c[d]);
                e && -1 === Aa(b, e) && b.push(e)
            }
            return Wf(b)
        };

    function Yf(a) {
        return a && "string" == typeof a && a.match(Pf) ? a : "_gcl"
    }

    var $f = function () {
        var a = Ie(F.location.href), b = Ge(a, "query", !1, void 0, "gclid"), c = Ge(a, "query", !1, void 0, "gclsrc"),
            d = Ge(a, "query", !1, void 0, "dclid");
        if (!b || !c) {
            var e = a.hash.replace("#", "");
            b = b || De(e, "gclid", void 0);
            c = c || De(e, "gclsrc", void 0)
        }
        return Zf(b, c, d)
    }, Zf = function (a, b, c) {
        var d = {}, e = function (f, h) {
            d[h] || (d[h] = []);
            d[h].push(f)
        };
        d.gclid = a;
        d.gclsrc = b;
        d.dclid = c;
        if (void 0 !== a && a.match(Qf)) switch (b) {
            case void 0:
                e(a, "aw");
                break;
            case "aw.ds":
                e(a, "aw");
                e(a, "dc");
                break;
            case "ds":
                e(a, "dc");
                break;
            case "3p.ds":
                jd("gtm_3pds") &&
                e(a, "dc");
                break;
            case "gf":
                e(a, "gf");
                break;
            case "ha":
                e(a, "ha");
                break;
            case "gp":
                e(a, "gp")
        }
        c && e(c, "dc");
        return d
    }, bg = function (a) {
        var b = $f();
        Uf(function () {
            ag(b, a)
        })
    };

    function ag(a, b, c) {
        function d(l, n) {
            var q = cg(l, e);
            q && Ve(q, n, f)
        }

        b = b || {};
        var e = Yf(b.prefix);
        c = c || La();
        var f = cf(b, c, !0);
        f.Ha = "ad_storage";
        var h = Math.round(c / 1E3), k = function (l) {
            return ["GCL", h, l].join(".")
        };
        a.aw && (!0 === b.Di ? d("aw", k("~" + a.aw[0])) : d("aw", k(a.aw[0])));
        a.dc && d("dc", k(a.dc[0]));
        a.gf && d("gf", k(a.gf[0]));
        a.ha && d("ha", k(a.ha[0]));
        a.gp && d("gp", k(a.gp[0]))
    }

    var eg = function (a, b) {
        var c = Gf(!0);
        Uf(function () {
            for (var d = Yf(b.prefix), e = 0; e < a.length; ++e) {
                var f = a[e];
                if (void 0 !== Sf[f]) {
                    var h = cg(f, d), k = c[h];
                    if (k) {
                        var l = Math.min(dg(k), La()), n;
                        b:{
                            for (var q = l, r = Me(h, H.cookie, void 0, "ad_storage"), t = 0; t < r.length; ++t) if (dg(r[t]) > q) {
                                n = !0;
                                break b
                            }
                            n = !1
                        }
                        if (!n) {
                            var p = cf(b, l, !0);
                            p.Ha = "ad_storage";
                            Ve(h, k, p)
                        }
                    }
                }
            }
            ag(Zf(c.gclid, c.gclsrc), b)
        })
    }, cg = function (a, b) {
        var c = Sf[a];
        if (void 0 !== c) return b + c
    }, dg = function (a) {
        var b = a.split(".");
        return 3 !== b.length || "GCL" !== b[0] ? 0 : 1E3 * (Number(b[1]) ||
            0)
    };

    function Vf(a) {
        var b = a.split(".");
        if (3 == b.length && "GCL" == b[0] && b[1]) return b[2]
    }

    var fg = function (a, b, c, d, e) {
        if (za(b)) {
            var f = Yf(e), h = function () {
                for (var k = {}, l = 0; l < a.length; ++l) {
                    var n = cg(a[l], f);
                    if (n) {
                        var q = Me(n, H.cookie, void 0, "ad_storage");
                        q.length && (k[n] = q.sort()[q.length - 1])
                    }
                }
                return k
            };
            Uf(function () {
                Lf(h, b, c, d)
            })
        }
    }, Wf = function (a) {
        return a.filter(function (b) {
            return Rf.test(b)
        })
    }, gg = function (a, b) {
        for (var c = Yf(b.prefix), d = {}, e = 0; e < a.length; e++) Sf[a[e]] && (d[a[e]] = Sf[a[e]]);
        Uf(function () {
            Fa(d, function (f, h) {
                var k = Me(c + h, H.cookie, void 0, "ad_storage");
                if (k.length) {
                    var l = k[0], n = dg(l),
                        q = {};
                    q[f] = [Vf(l)];
                    ag(q, b, n)
                }
            })
        })
    };

    function hg(a, b) {
        for (var c = 0; c < b.length; ++c) if (a[b[c]]) return !0;
        return !1
    }

    var ig = function () {
        function a(e, f, h) {
            h && (e[f] = h)
        }

        var b = ["aw", "dc"];
        if (td()) {
            var c = $f();
            if (hg(c, b)) {
                var d = {};
                a(d, "gclid", c.gclid);
                a(d, "dclid", c.dclid);
                a(d, "gclsrc", c.gclsrc);
                Mf(function () {
                    return d
                }, 3);
                Mf(function () {
                    var e = {};
                    return e._up = "1", e
                }, 1)
            }
        }
    }, jg = function () {
        var a;
        if (Tf()) {
            for (var b = [], c = H.cookie.split(";"), d = /^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/, e = 0; e < c.length; e++) {
                var f = c[e].match(d);
                f && b.push({Ed: f[1], value: f[2]})
            }
            var h = {};
            if (b && b.length) for (var k = 0; k < b.length; k++) {
                var l = b[k].value.split(".");
                "1" == l[0] && 3 == l.length && l[1] && (h[b[k].Ed] || (h[b[k].Ed] = []), h[b[k].Ed].push({
                    timestamp: l[1],
                    Yg: l[2]
                }))
            }
            a = h
        } else a = {};
        return a
    };
    var kg = /^\d+\.fls\.doubleclick\.net$/;

    function lg(a, b) {
        sd(C.s) ? Ad(C.s) ? a() : wd(a, C.s) : b ? D(42) : Gd(function () {
            lg(a, !0)
        }, [C.s])
    }

    function mg(a) {
        var b = Ie(F.location.href), c = Ge(b, "host", !1);
        if (c && c.match(kg)) {
            var d = Ge(b, "path").split(a + "=");
            if (1 < d.length) return d[1].split(";")[0].split("?")[0]
        }
    }

    function ng(a, b, c) {
        if ("aw" == a || "dc" == a) {
            var d = mg("gcl" + a);
            if (d) return d.split(".")
        }
        var e = Yf(b);
        if ("_gcl" == e) {
            c = void 0 === c ? !0 : c;
            var f = !Ad(C.s) && c, h;
            h = $f()[a] || [];
            if (0 < h.length) return f ? ["0"] : h
        }
        var k = cg(a, e);
        return k ? Xf(k) : []
    }

    var og = function (a) {
        var b = mg("gac");
        if (b) return !Ad(C.s) && a ? "0" : decodeURIComponent(b);
        var c = jg(), d = [];
        Fa(c, function (e, f) {
            for (var h = [], k = 0; k < f.length; k++) h.push(f[k].Yg);
            h = Wf(h);
            h.length && d.push(e + ":" + h.join(","))
        });
        return d.join(";")
    }, pg = function (a, b) {
        var c = $f().dc || [];
        lg(function () {
            jf(b);
            var d = ef[ff(b.prefix)], e = !1;
            if (d && 0 < c.length) {
                var f = L.joined_au = L.joined_au || {}, h = b.prefix || "_gcl";
                if (!f[h]) for (var k = 0; k < c.length; k++) {
                    var l = "http://ad.doubleclick.net/ddm/regclk";
                    l = l + "?gclid=" + c[k] + "&auiddc=" + d;
                    gd(l);
                    e = f[h] =
                        !0
                }
            }
            null == a && (a = e);
            if (a && d) {
                var n = ff(b.prefix), q = ef[n];
                q && hf(n, q, b)
            }
        })
    };
    var qg = /[A-Z]+/, rg = /\s/, sg = function (a) {
        if (g(a) && (a = Ka(a), !rg.test(a))) {
            var b = a.indexOf("-");
            if (!(0 > b)) {
                var c = a.substring(0, b);
                if (qg.test(c)) {
                    for (var d = a.substring(b + 1).split("/"), e = 0; e < d.length; e++) if (!d[e]) return;
                    return {id: a, prefix: c, containerId: c + "-" + d[0], C: d}
                }
            }
        }
    }, ug = function (a) {
        for (var b = {}, c = 0; c < a.length; ++c) {
            var d = sg(a[c]);
            d && (b[d.id] = d)
        }
        tg(b);
        var e = [];
        Fa(b, function (f, h) {
            e.push(h)
        });
        return e
    };

    function tg(a) {
        var b = [], c;
        for (c in a) if (a.hasOwnProperty(c)) {
            var d = a[c];
            "AW" === d.prefix && d.C[1] && b.push(d.containerId)
        }
        for (var e = 0; e < b.length; ++e) delete a[b[e]]
    };var vg = function () {
        var a = !1;
        return a
    };
    var xg = function (a, b, c, d) {
        return (2 === wg() || d || "http:" != F.location.protocol ? a : b) + c
    }, wg = function () {
        var a = Yc(), b;
        if (1 === a) a:{
            var c = ee;
            c = c.toLowerCase();
            for (var d = "https://" + c, e = "http://" + c, f = 1, h = H.getElementsByTagName("script"), k = 0; k < h.length && 100 > k; k++) {
                var l = h[k].src;
                if (l) {
                    l = l.toLowerCase();
                    if (0 === l.indexOf(e)) {
                        b = 3;
                        break a
                    }
                    1 === f && 0 === l.indexOf(d) && (f = 2)
                }
            }
            b = f
        } else b = a;
        return b
    };
    var zg = function (a, b, c) {
            if (F[a.functionName]) return b.rd && I(b.rd), F[a.functionName];
            var d = yg();
            F[a.functionName] = d;
            if (a.$b) for (var e = 0; e < a.$b.length; e++) F[a.$b[e]] = F[a.$b[e]] || yg();
            a.jc && void 0 === F[a.jc] && (F[a.jc] = c);
            Xc(xg("https://", "http://", a.Bd), b.rd, b.yh);
            return d
        }, yg = function () {
            var a = function () {
                a.q = a.q || [];
                a.q.push(arguments)
            };
            return a
        }, Ag = {functionName: "_googWcmImpl", jc: "_googWcmAk", Bd: "www.gstatic.com/wcm/loader.js"},
        Bg = {functionName: "_gaPhoneImpl", jc: "ga_wpid", Bd: "www.gstatic.com/gaphone/loader.js"},
        Cg = {lf: "", jg: "5"}, Dg = {
            functionName: "_googCallTrackingImpl",
            $b: [Bg.functionName, Ag.functionName],
            Bd: "www.gstatic.com/call-tracking/call-tracking_" + (Cg.lf || Cg.jg) + ".js"
        }, Eg = {}, Fg = function (a, b, c, d) {
            D(22);
            if (c) {
                d = d || {};
                var e = zg(Ag, d, a), f = {ak: a, cl: b};
                void 0 === d.na && (f.autoreplace = c);
                e(2, d.na, f, c, 0, new Date, d.options)
            }
        }, Gg = function (a, b, c, d) {
            D(21);
            if (b && c) {
                d = d || {};
                for (var e = {
                    countryNameCode: c,
                    destinationNumber: b,
                    retrievalTime: new Date
                }, f = 0; f < a.length; f++) {
                    var h = a[f];
                    Eg[h.id] || (h && "AW" === h.prefix && !e.adData && 2 <= h.C.length ? (e.adData = {
                        ak: h.C[0],
                        cl: h.C[1]
                    }, Eg[h.id] = !0) : h && "UA" === h.prefix && !e.gaData && (e.gaData = {gaWpid: h.containerId}, Eg[h.id] = !0))
                }
                (e.gaData || e.adData) && zg(Dg, d)(d.na, e, d.options)
            }
        }, Hg = function () {
            var a = !1;
            return a
        }, Ig = function (a, b) {
            if (a) if (vg()) {
            } else {
                if (g(a)) {
                    var c =
                        sg(a);
                    if (!c) return;
                    a = c
                }
                var d = void 0, e = !1, f = b.getWithConfig(C.Uf);
                if (f && za(f)) {
                    d = [];
                    for (var h = 0; h < f.length; h++) {
                        var k = sg(f[h]);
                        k && (d.push(k), (a.id === k.id || a.id === a.containerId && a.containerId === k.containerId) && (e = !0))
                    }
                }
                if (!d || e) {
                    var l = b.getWithConfig(C.me), n;
                    if (l) {
                        za(l) ? n = l : n = [l];
                        var q = b.getWithConfig(C.je), r = b.getWithConfig(C.ke), t = b.getWithConfig(C.ne),
                            p = b.getWithConfig(C.Tf), u = q || r, v = 1;
                        "UA" !== a.prefix || d || (v = 5);
                        for (var x = 0; x < n.length; x++) if (x < v) if (d) Gg(d, n[x], p, {
                            na: u,
                            options: t
                        }); else if ("AW" === a.prefix &&
                            a.C[1]) Hg() ? Gg([a], n[x], p || "US", {na: u, options: t}) : Fg(a.C[0], a.C[1], n[x], {
                            na: u,
                            options: t
                        }); else if ("UA" === a.prefix) if (Hg()) Gg([a], n[x], p || "US", {na: u}); else {
                            var y = a.containerId, w = n[x], B = {na: u};
                            D(23);
                            if (w) {
                                B = B || {};
                                var z = zg(Bg, B, y), A = {};
                                void 0 !== B.na ? A.receiver = B.na : A.replace = w;
                                A.ga_wpid = y;
                                A.destination = w;
                                z(2, new Date, A)
                            }
                        }
                    }
                }
            }
        };
    var Lg = function (a) {
        return Ad(C.s) ? a : a.replace(/&url=([^&#]+)/, function (b, c) {
            var d = Je(decodeURIComponent(c));
            return "&url=" + encodeURIComponent(d)
        })
    }, Mg = function () {
        var a;
        if (!(a = fe)) {
            var b;
            if (!0 === F._gtmdgs) b = !0; else {
                var c = Tc && Tc.userAgent || "";
                b = 0 > c.indexOf("Safari") || /Chrome|Coast|Opera|Edg|Silk|Android/.test(c) || 11 > ((/Version\/([\d]+)/.exec(c) || [])[1] || "") ? !1 : !0
            }
            a = !b
        }
        if (a) return -1;
        var d = Ga("5");
        return Be(1, 100) < d ? Be(2, 2) : -1
    }, Ng = function (a) {
        var b;
        return b
    };
    var Og = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/), Pg = {
        cl: ["ecl"],
        customPixels: ["nonGooglePixels"],
        ecl: ["cl"],
        ehl: ["hl"],
        hl: ["ehl"],
        html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
        customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
        nonGooglePixels: [],
        nonGoogleScripts: ["nonGooglePixels"],
        nonGoogleIframes: ["nonGooglePixels"]
    }, Qg = {
        cl: ["ecl"],
        customPixels: ["customScripts", "html"],
        ecl: ["cl"],
        ehl: ["hl"],
        hl: ["ehl"],
        html: ["customScripts"],
        customScripts: ["html"],
        nonGooglePixels: ["customPixels", "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"],
        nonGoogleScripts: ["customScripts", "html"],
        nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"]
    }, Rg = "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
    var Tg = function (a) {
            var b;
            re("gtm.allowlist") && D(52);
            b = re("gtm.allowlist");
            b || (b = re("gtm.whitelist"));
            b && D(9);
            b = "google gtagfl lcl zone oid op".split(" ");
            var c = b && Qa(Ia(b), Pg), d;
            re("gtm.blocklist") && D(51);
            d = re("gtm.blocklist");
            d || (d = re("gtm.blacklist"));
            d || (d = re("tagTypeBlacklist")) && D(3);
            d ? D(8) : d = [];
            Sg() && (d = Ia(d), d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
            0 <= Aa(Ia(d), "google") && D(2);
            var e =
                d && Qa(Ia(d), Qg), f = {};
            return function (h) {
                var k = h && h[Rb.Fa];
                if (!k || "string" != typeof k) return !0;
                k = k.replace(/^_*/, "");
                if (void 0 !== f[k]) return f[k];
                var l = ke[k] || [], n = a(k, l);
                if (b) {
                    var q;
                    if (q = n) a:{
                        if (0 > Aa(c, k)) if (l && 0 < l.length) for (var r = 0; r < l.length; r++) {
                            if (0 > Aa(c, l[r])) {
                                D(11);
                                q = !1;
                                break a
                            }
                        } else {
                            q = !1;
                            break a
                        }
                        q = !0
                    }
                    n = q
                }
                var t = !1;
                if (d) {
                    var p = 0 <= Aa(e, k);
                    if (p) t = p; else {
                        var u = Ea(e, l || []);
                        u && D(10);
                        t = u
                    }
                }
                var v = !n || t;
                v || !(0 <= Aa(l, "sandboxedScripts")) || c && -1 !== Aa(c, "sandboxedScripts") || (v = Ea(e, Rg));
                return f[k] = v
            }
        },
        Sg = function () {
            return Og.test(F.location && F.location.hostname)
        };
    var Ug = {
        active: !0, isAllowed: function () {
            return !0
        }
    }, Vg = function (a) {
        var b = L.zones;
        return b ? b.checkState(Zd.B, a) : Ug
    }, Wg = function (a) {
        var b = L.zones;
        !b && a && (b = L.zones = a());
        return b
    };
    var Xg = function () {
    }, Yg = function () {
    };
    var Zg = !1, $g = 0, ah = [];

    function bh(a) {
        if (!Zg) {
            var b = H.createEventObject, c = "complete" == H.readyState, d = "interactive" == H.readyState;
            if (!a || "readystatechange" != a.type || c || !b && d) {
                Zg = !0;
                for (var e = 0; e < ah.length; e++) I(ah[e])
            }
            ah.push = function () {
                for (var f = 0; f < arguments.length; f++) I(arguments[f]);
                return 0
            }
        }
    }

    function ch() {
        if (!Zg && 140 > $g) {
            $g++;
            try {
                H.documentElement.doScroll("left"), bh()
            } catch (a) {
                F.setTimeout(ch, 50)
            }
        }
    }

    var dh = function (a) {
        Zg ? a() : ah.push(a)
    };
    var eh = {}, fh = {}, gh = function (a, b, c, d) {
        if (!fh[a] || be[b] || "__zone" === b) return -1;
        var e = {};
        bb(d) && (e = m(d, e));
        e.id = c;
        e.status = "timeout";
        return fh[a].tags.push(e) - 1
    }, hh = function (a, b, c, d) {
        if (fh[a]) {
            var e = fh[a].tags[b];
            e && (e.status = c, e.executionTime = d)
        }
    };

    function ih(a) {
        for (var b = eh[a] || [], c = 0; c < b.length; c++) b[c]();
        eh[a] = {
            push: function (d) {
                d(Zd.B, fh[a])
            }
        }
    }

    var lh = function (a, b, c) {
        fh[a] = {tags: []};
        xa(b) && jh(a, b);
        c && F.setTimeout(function () {
            return ih(a)
        }, Number(c));
        return kh(a)
    }, jh = function (a, b) {
        eh[a] = eh[a] || [];
        eh[a].push(Na(function () {
            return I(function () {
                b(Zd.B, fh[a])
            })
        }))
    };

    function kh(a) {
        var b = 0, c = 0, d = !1;
        return {
            add: function () {
                c++;
                return Na(function () {
                    b++;
                    d && b >= c && ih(a)
                })
            }, xg: function () {
                d = !0;
                b >= c && ih(a)
            }
        }
    };var mh = function () {
        function a(d) {
            return !ya(d) || 0 > d ? 0 : d
        }

        if (!L._li && F.performance && F.performance.timing) {
            var b = F.performance.timing.navigationStart, c = ya(se.get("gtm.start")) ? se.get("gtm.start") : 0;
            L._li = {cst: a(c - b), cbt: a(he - b)}
        }
    };
    var qh = {}, rh = function () {
        return F.GoogleAnalyticsObject && F[F.GoogleAnalyticsObject]
    }, sh = !1;
    var th = function (a) {
        F.GoogleAnalyticsObject || (F.GoogleAnalyticsObject = a || "ga");
        var b = F.GoogleAnalyticsObject;
        if (F[b]) F.hasOwnProperty(b) || D(12); else {
            var c = function () {
                c.q = c.q || [];
                c.q.push(arguments)
            };
            c.l = Number(new Date);
            F[b] = c
        }
        mh();
        return F[b]
    }, uh = function (a, b, c, d) {
        b = String(b).replace(/\s+/g, "").split(",");
        var e = rh();
        e(a + "require", "linker");
        e(a + "linker:autoLink", b, c, d)
    }, vh = function (a) {
    };
    var xh = function (a) {
    }, wh = function () {
        return F.GoogleAnalyticsObject || "ga"
    }, yh = function (a, b) {
        return function () {
            var c = rh(), d = c && c.getByName && c.getByName(a);
            if (d) {
                var e = d.get("sendHitTask");
                d.set("sendHitTask", function (f) {
                    var h = f.get("hitPayload"), k = f.get("hitCallback"), l = 0 > h.indexOf("&tid=" + b);
                    l && (f.set("hitPayload", h.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" +
                        b), !0), f.set("hitCallback", void 0, !0));
                    e(f);
                    l && (f.set("hitPayload", h, !0), f.set("hitCallback", k, !0), f.set("_x_19", void 0, !0), e(f))
                })
            }
        }
    };
    var Dh = function () {
            return "&tc=" + Fb.filter(function (a) {
                return a
            }).length
        }, Gh = function () {
            2022 <= Eh().length && Fh()
        }, Ih = function () {
            Hh || (Hh = F.setTimeout(Fh, 500))
        }, Fh = function () {
            Hh && (F.clearTimeout(Hh), Hh = void 0);
            void 0 === Jh || Kh[Jh] && !Lh && !Mh || (Nh[Jh] || Oh.nh() || 0 >= Ph-- ? (D(1), Nh[Jh] = !0) : (Oh.Kh(), $c(Eh()), Kh[Jh] = !0, Qh = Rh = Sh = Mh = Lh = ""))
        }, Eh = function () {
            var a = Jh;
            if (void 0 === a) return "";
            var b = vc("GTM"), c = vc("TAGGING");
            return [Th, Kh[a] ? "" : "&es=1", Uh[a], b ? "&u=" + b : "", c ? "&ut=" + c : "", Dh(), Lh, Mh, Sh ? Sh : "", Rh, Qh, "&z=0"].join("")
        },
        Vh = function () {
            return [ie, "&v=3&t=t", "&pid=" + Ca(), "&rv=" + Zd.Yb].join("")
        }, Wh = "0.005000" > Math.random(), Th = Vh(), Xh = function () {
            Th = Vh()
        }, Kh = {}, Lh = "", Mh = "", Qh = "", Rh = "", Sh = "", Jh = void 0, Uh = {}, Nh = {}, Hh = void 0,
        Oh = function (a, b) {
            var c = 0, d = 0;
            return {
                nh: function () {
                    if (c < a) return !1;
                    La() - d >= b && (c = 0);
                    return c >= a
                }, Kh: function () {
                    La() - d >= b && (c = 0);
                    c++;
                    d = La()
                }
            }
        }(2, 1E3), Ph = 1E3, Yh = function (a, b, c) {
            if (Wh && !Nh[a] && b) {
                a !== Jh && (Fh(), Jh = a);
                var d, e = String(b[Rb.Fa] || "").replace(/_/g, "");
                0 === e.indexOf("cvt") && (e = "cvt");
                d = e;
                var f = c + d;
                Lh = Lh ? Lh + "." + f : "&tr=" + f;
                var h = b["function"];
                if (!h) throw Error("Error: No function name given for function call.");
                var k = (Hb[h] ? "1" : "2") + d;
                Qh = Qh ? Qh + "." + k : "&ti=" + k;
                Ih();
                Gh()
            }
        }, Zh = function (a, b, c) {
            if (Wh && !Nh[a]) {
                a !== Jh && (Fh(), Jh = a);
                var d = c + b;
                Mh = Mh ? Mh + "." + d : "&epr=" + d;
                Ih();
                Gh()
            }
        }, $h = function (a, b, c) {
        };

    function ai(a, b, c, d) {
        var e = Fb[a], f = bi(a, b, c, d);
        if (!f) return null;
        var h = Nb(e[Rb.Fe], c, []);
        if (h && h.length) {
            var k = h[0];
            f = ai(k.index, {H: f, F: 1 === k.Qe ? b.terminate : f, terminate: b.terminate}, c, d)
        }
        return f
    }

    function bi(a, b, c, d) {
        function e() {
            if (f[Rb.fg]) k(); else {
                var x = Ob(f, c, []);
                var B = gh(c.id, String(f[Rb.Fa]), Number(f[Rb.Ge]), x[Rb.gg]), z = !1;
                x.vtp_gtmOnSuccess = function () {
                    if (!z) {
                        z = !0;
                        var G = La() - E;
                        Yh(c.id, Fb[a], "5");
                        hh(c.id, B, "success",
                            G);
                        h()
                    }
                };
                x.vtp_gtmOnFailure = function () {
                    if (!z) {
                        z = !0;
                        var G = La() - E;
                        Yh(c.id, Fb[a], "6");
                        hh(c.id, B, "failure", G);
                        k()
                    }
                };
                x.vtp_gtmTagId = f.tag_id;
                x.vtp_gtmEventId = c.id;
                Yh(c.id, f, "1");
                var A = function () {
                    var G = La() - E;
                    Yh(c.id, f, "7");
                    hh(c.id, B, "exception", G);
                    z || (z = !0, k())
                };
                var E = La();
                try {
                    Mb(x, c)
                } catch (G) {
                    A(G)
                }
            }
        }

        var f = Fb[a], h = b.H, k = b.F, l = b.terminate;
        if (c.ld(f)) return null;
        var n = Nb(f[Rb.He], c, []);
        if (n && n.length) {
            var q = n[0], r = ai(q.index, {H: h, F: k, terminate: l}, c, d);
            if (!r) return null;
            h = r;
            k = 2 === q.Qe ? l : r
        }
        if (f[Rb.Be] || f[Rb.ig]) {
            var t = f[Rb.Be] ? Gb : c.Th, p = h, u = k;
            if (!t[a]) {
                e = Na(e);
                var v = ci(a, t, e);
                h = v.H;
                k = v.F
            }
            return function () {
                t[a](p, u)
            }
        }
        return e
    }

    function ci(a, b, c) {
        var d = [], e = [];
        b[a] = di(d, e, c);
        return {
            H: function () {
                b[a] = ei;
                for (var f = 0; f < d.length; f++) d[f]()
            }, F: function () {
                b[a] = fi;
                for (var f = 0; f < e.length; f++) e[f]()
            }
        }
    }

    function di(a, b, c) {
        return function (d, e) {
            a.push(d);
            b.push(e);
            c()
        }
    }

    function ei(a) {
        a()
    }

    function fi(a, b) {
        b()
    };var ii = function (a, b, c) {
        for (var d = [], e = 0; e < Fb.length; e++) if (a[e]) {
            var f = Fb[e];
            var h = c.add();
            try {
                var k = ai(e, {H: h, F: h, terminate: h}, b, e);
                k ? d.push({jf: e, bf: Pb(f), Ug: k}) : (gi(e, b), h())
            } catch (n) {
                h()
            }
        }
        c.xg();
        d.sort(hi);
        for (var l = 0; l < d.length; l++) d[l].Ug();
        return 0 < d.length
    };

    function hi(a, b) {
        var c, d = b.bf, e = a.bf;
        c = d > e ? 1 : d < e ? -1 : 0;
        var f;
        if (0 !== c) f = c; else {
            var h = a.jf, k = b.jf;
            f = h > k ? 1 : h < k ? -1 : 0
        }
        return f
    }

    function gi(a, b) {
        if (!Wh) return;
        var c = function (d) {
            var e = b.ld(Fb[d]) ? "3" : "4", f = Nb(Fb[d][Rb.Fe], b, []);
            f && f.length && c(f[0].index);
            Yh(b.id, Fb[d], e);
            var h = Nb(Fb[d][Rb.He], b, []);
            h && h.length && c(h[0].index)
        };
        c(a);
    }

    var ji = !1, oi = function (a) {
        var b = a["gtm.uniqueEventId"], c = a.event;
        if ("gtm.js" === c) {
            if (ji) return !1;
            ji = !0
        }
        var d = Vg(b), e = !1;
        if (!d.active) {
            var f = !0;
            if ("gtm.js" === c) {
                f = !1, e = !0, d = Vg(Number.MAX_SAFE_INTEGER);
            }
            if (f) return !1
        }
        Wh && !Nh[b] && Jh !== b && (Fh(), Jh = b, Qh = Lh = "", Uh[b] = "&e=" + (0 === c.indexOf("gtm.") ? encodeURIComponent(c) : "*") + "&eid=" + b, Ih());
        var h = {
            id: b, name: c, ld: Tg(d.isAllowed), Th: [], Xe: function () {
                D(6)
            }, Le: ki(b)
        }, k = lh(b, a.eventCallback, a.eventTimeout);
        li(b);
        var l = Vb(h);
        e && (l = mi(l));
        var n = ii(l, h, k);
        "gtm.js" !== c && "gtm.sync" !== c || xh(Zd.B);
        switch (c) {
            case "gtm.init":
                D(19), n && D(20)
        }
        return ni(l,
            n)
    };

    function ki(a) {
        return function (b) {
            Wh && (cb(b) || $h(a, "input", b))
        }
    }

    function li(a) {
        ve(a, "event", 1);
        ve(a, "ecommerce", 1);
        ve(a, "gtm");
    }

    function mi(a) {
        var b = [];
        for (var c = 0; c < a.length; c++) a[c] && ae[String(Fb[c][Rb.Fa])] && (b[c] = !0);
        return b
    }

    function ni(a, b) {
        if (!b) return b;
        for (var c = 0; c < a.length; c++) if (a[c] && Fb[c] && !be[String(Fb[c][Rb.Fa])]) return !0;
        return !1
    }

    function pi(a, b) {
        if (a) {
            var c = "" + a;
            0 !== c.indexOf("http://") && 0 !== c.indexOf("https://") && (c = "https://" + c);
            "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1));
            return Ie("" + c + b).href
        }
    }

    function qi(a, b) {
        return ri() ? pi(a, b) : void 0
    }

    function ri() {
        var a = !1;
        return a
    };var si = function () {
        this.eventModel = {};
        this.targetConfig = {};
        this.containerConfig = {};
        this.h = {};
        this.globalConfig = {};
        this.H = function () {
        };
        this.F = function () {
        };
        this.eventId = void 0
    }, ti = function (a) {
        var b = new si;
        b.eventModel = a;
        return b
    }, ui = function (a, b) {
        a.targetConfig = b;
        return a
    }, vi = function (a, b) {
        a.containerConfig = b;
        return a
    }, wi = function (a, b) {
        a.h = b;
        return a
    }, xi = function (a, b) {
        a.globalConfig = b;
        return a
    }, yi = function (a, b) {
        a.H = b;
        return a
    }, zi = function (a, b) {
        a.F = b;
        return a
    };
    si.prototype.getWithConfig = function (a) {
        if (void 0 !== this.eventModel[a]) return this.eventModel[a];
        if (void 0 !== this.targetConfig[a]) return this.targetConfig[a];
        if (void 0 !== this.containerConfig[a]) return this.containerConfig[a];
        if (void 0 !== this.h[a]) return this.h[a];
        if (void 0 !== this.globalConfig[a]) return this.globalConfig[a]
    };
    var Ai = function (a) {
        function b(e) {
            Fa(e, function (f) {
                c[f] = null
            })
        }

        var c = {};
        b(a.eventModel);
        b(a.targetConfig);
        b(a.containerConfig);
        b(a.globalConfig);
        var d = [];
        Fa(c, function (e) {
            d.push(e)
        });
        return d
    };
    var Bi;
    if (3 === Zd.Yb.length) Bi = "g"; else {
        var Ci = "G";
        Ci = "g";
        Bi = Ci
    }
    var Di = {"": "n", UA: "u", AW: "a", DC: "d", G: "e", GF: "f", HA: "h", GTM: Bi, OPT: "o"}, Ei = function (a) {
        var b = Zd.B.split("-"), c = b[0].toUpperCase(), d = Di[c] || "i",
            e = a && "GTM" === c ? b[1] : "OPT" === c ? b[1] : "", f;
        if (3 === Zd.Yb.length) {
            var h = "w";
            h = vg() ? "s" : "o";
            f = "2" + h
        } else f = "";
        return f + d + Zd.Yb + e
    };
    var Fi = function (a, b) {
        a.addEventListener && a.addEventListener("message", b, !1)
    };
    var Gi = function () {
        return Jc("iPhone") && !Jc("iPod") && !Jc("iPad")
    };
    Jc("Opera");
    Jc("Trident") || Jc("MSIE");
    Jc("Edge");
    !Jc("Gecko") || -1 != Gc.toLowerCase().indexOf("webkit") && !Jc("Edge") || Jc("Trident") || Jc("MSIE") || Jc("Edge");
    -1 != Gc.toLowerCase().indexOf("webkit") && !Jc("Edge") && Jc("Mobile");
    Jc("Macintosh");
    Jc("Windows");
    Jc("Linux") || Jc("CrOS");
    var Hi = ma.navigator || null;
    Hi && (Hi.appVersion || "").indexOf("X11");
    Jc("Android");
    Gi();
    Jc("iPad");
    Jc("iPod");
    Gi() || Jc("iPad") || Jc("iPod");
    Gc.toLowerCase().indexOf("kaios");
    var Ii = function (a, b) {
        for (var c = a, d = 0; 50 > d; ++d) {
            var e;
            try {
                e = !(!c.frames || !c.frames[b])
            } catch (k) {
                e = !1
            }
            if (e) return c;
            var f;
            a:{
                try {
                    var h = c.parent;
                    if (h && h != c) {
                        f = h;
                        break a
                    }
                } catch (k) {
                }
                f = null
            }
            if (!(c = f)) break
        }
        return null
    };
    var Ji = function () {
    };
    var Ki = function (a) {
        return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies || void 0 !== a.listenerId && "number" !== typeof a.listenerId || void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
    }, Li = function (a, b) {
        this.i = a;
        this.h = null;
        this.L = {};
        this.oa = 0;
        this.fa = void 0 === b ? 500 : b;
        this.o = null
    };
    la(Li, Ji);
    var Ni = function (a) {
        return "function" === typeof a.i.__tcfapi || null != Mi(a)
    };
    Li.prototype.addEventListener = function (a) {
        var b = {}, c = Ac(function () {
            return a(b)
        }), d = 0;
        -1 !== this.fa && (d = setTimeout(function () {
            b.tcString = "tcunavailable";
            b.internalErrorState = 1;
            c()
        }, this.fa));
        var e = function (f, h) {
            clearTimeout(d);
            f ? (b = f, b.internalErrorState = Ki(b), h && 0 === b.internalErrorState || (b.tcString = "tcunavailable", h || (b.internalErrorState = 3))) : (b.tcString = "tcunavailable", b.internalErrorState = 3);
            a(b)
        };
        try {
            Oi(this, "addEventListener", e)
        } catch (f) {
            b.tcString = "tcunavailable", b.internalErrorState = 3, d && (clearTimeout(d),
                d = 0), c()
        }
    };
    Li.prototype.removeEventListener = function (a) {
        a && a.listenerId && Oi(this, "removeEventListener", null, a.listenerId)
    };
    var Qi = function (a, b, c) {
        var d;
        d = void 0 === d ? "755" : d;
        var e;
        a:{
            if (a.publisher && a.publisher.restrictions) {
                var f = a.publisher.restrictions[b];
                if (void 0 !== f) {
                    e = f[void 0 === d ? "755" : d];
                    break a
                }
            }
            e = void 0
        }
        var h = e;
        if (0 === h) return !1;
        var k = c;
        2 === c ? (k = 0, 2 === h && (k = 1)) : 3 === c && (k = 1, 1 === h && (k = 0));
        var l;
        if (0 === k) if (a.purpose && a.vendor) {
            var n = Pi(a.vendor.consents, void 0 === d ? "755" : d);
            l = n && "1" === b && a.purposeOneTreatment && "DE" === a.publisherCC ? !0 : n && Pi(a.purpose.consents, b)
        } else l = jd("ticdac"); else l = 1 === k ? a.purpose && a.vendor ?
            Pi(a.purpose.legitimateInterests, b) && Pi(a.vendor.legitimateInterests, void 0 === d ? "755" : d) : jd("ticdac") : !0;
        return l
    }, Pi = function (a, b) {
        return !(!a || !a[b])
    }, Oi = function (a, b, c, d) {
        c || (c = function () {
        });
        if ("function" === typeof a.i.__tcfapi) {
            var e = a.i.__tcfapi;
            e(b, 2, c, d)
        } else if (Mi(a)) {
            Ri(a);
            var f = ++a.oa;
            a.L[f] = c;
            if (a.h) {
                var h = {};
                a.h.postMessage((h.__tcfapiCall = {command: b, version: 2, callId: f, parameter: d}, h), "*")
            }
        } else c({}, !1)
    }, Mi = function (a) {
        if (a.h) return a.h;
        a.h = Ii(a.i, "__tcfapiLocator");
        return a.h
    }, Ri = function (a) {
        a.o ||
        (a.o = function (b) {
            try {
                var c, d;
                "string" === typeof b.data ? d = JSON.parse(b.data) : d = b.data;
                c = d.__tcfapiReturn;
                a.L[c.callId](c.returnValue, c.success)
            } catch (e) {
            }
        }, Fi(a.i, a.o))
    };
    var Si = {1: 0, 3: 0, 4: 0, 7: 3, 9: 3, 10: 3};

    function Ti(a, b) {
        if ("" === a) return b;
        var c = Number(a);
        return isNaN(c) ? b : c
    }

    var Ui = Ti("", 550), Vi = Ti("", 500);

    function Wi() {
        var a = L.tcf || {};
        return L.tcf = a
    }

    var Xi = function (a, b) {
        this.o = a;
        this.h = b;
        this.i = La();
    }, Yi = function (a) {
    }, Zi = function (a) {
    }, ej = function () {
        var a = Wi(), b = new Li(F, 3E3), c = new Xi(b, a);
        if (($i() ? !0 === F.gtag_enable_tcf_support : !1 !== F.gtag_enable_tcf_support) && !a.active && ("function" === typeof F.__tcfapi || Ni(b))) {
            a.active = !0;
            a.Bb = {};
            aj();
            var d = setTimeout(function () {
                bj(a);
                cj(a);
                d = null
            }, Vi);
            try {
                b.addEventListener(function (e) {
                    d && (clearTimeout(d), d = null);
                    if (0 !== e.internalErrorState) bj(a), cj(a), Yi(c); else {
                        var f;
                        if (!1 === e.gdprApplies) f = dj(), b.removeEventListener(e);
                        else if ("tcloaded" === e.eventStatus || "useractioncomplete" === e.eventStatus || "cmpuishown" === e.eventStatus) {
                            var h = {}, k;
                            for (k in Si) if (Si.hasOwnProperty(k)) if ("1" === k) {
                                var l = e, n = !0;
                                n = void 0 === n ? !1 : n;
                                var q;
                                var r = l;
                                !1 === r.gdprApplies ? q = !0 : (void 0 === r.internalErrorState && (r.internalErrorState = Ki(r)), q = "error" === r.cmpStatus || 0 !== r.internalErrorState || "loaded" === r.cmpStatus && ("tcloaded" === r.eventStatus || "useractioncomplete" === r.eventStatus) ? !0 : !1);
                                h["1"] = q ? !1 === l.gdprApplies || "tcunavailable" === l.tcString ||
                                jd("tugac") && void 0 === l.gdprApplies && !n || jd("tntac") && ("string" !== typeof l.tcString || !l.tcString.length) ? !0 : Qi(l, "1", 0) : !1
                            } else h[k] = Qi(e, k, Si[k]);
                            f = h
                        }
                        f && (a.tcString = e.tcString || "tcempty", a.Bb = f, cj(a), Yi(c))
                    }
                }), Zi(c)
            } catch (e) {
                d && (clearTimeout(d), d = null), bj(a), cj(a)
            }
        }
    };

    function bj(a) {
        a.type = "e";
        a.tcString = "tcunavailable";
        a.Bb = dj()
    }

    function aj() {
        var a = {};
        yd((a.ad_storage = "denied", a.wait_for_update = Ui, a))
    }

    var $i = function () {
        var a = !1;
        a = !0;
        return a
    };

    function dj() {
        var a = {}, b;
        for (b in Si) Si.hasOwnProperty(b) && (a[b] = !0);
        return a
    }

    function cj(a) {
        var b = {};
        zd((b.ad_storage = a.Bb["1"] ? "granted" : "denied", b))
    }

    var fj = function () {
        var a = Wi();
        if (a.active && void 0 !== a.loadTime) return Number(a.loadTime)
    }, gj = function () {
        var a = Wi();
        return a.active ? a.tcString || "" : ""
    }, hj = function (a) {
        if (!Si.hasOwnProperty(String(a))) return !0;
        var b = Wi();
        return b.active && b.Bb ? !!b.Bb[String(a)] : !0
    };

    function ij(a, b, c) {
        function d(r) {
            var t;
            L.reported_gclid || (L.reported_gclid = {});
            t = L.reported_gclid;
            var p = f + (r ? "gcu" : "gcs");
            if (!t[p]) {
                t[p] = !0;
                var u = [], v = function (z, A) {
                    A && u.push(z + "=" + encodeURIComponent(A))
                }, x = "https://www.google.com";
                if (td()) {
                    var y = Ad(C.s);
                    v("gcs", Fd());
                    r && v("gcu", "1");
                    v("rnd", q);
                    if ((!f || h && "aw.ds" !== h) && Ad(C.s)) {
                        var w = Xf("_gcl_aw");
                        v("gclaw", w.join("."))
                    }
                    v("url", String(F.location).split(/[?#]/)[0]);
                    v("dclid", jj(b, k));
                    !y && b && (x = "https://pagead2.googlesyndication.com")
                }
                v("gdpr_consent", gj());
                "1" === Gf(!1)._up && v("gtm_up", "1");
                v("gclid", jj(b, f));
                v("gclsrc", h);
                v("gtm", Ei(!c));
                var B = x + "/pagead/landing?" + u.join("&");
                gd(B)
            }
        }

        var e = $f(), f = e.gclid || "", h = e.gclsrc, k = e.dclid || "",
            l = !a && (!f || h && "aw.ds" !== h ? !1 : !0), n = td();
        if (l || n) {
            var q = "" + Ye();
            n ? Gd(function () {
                d();
                Ad(C.s) || wd(function (r) {
                    return d(!0, r.Me)
                }, C.s)
            }, [C.s]) : d()
        }
    }

    function jj(a, b) {
        var c = a && !Ad(C.s);
        return b && c ? "0" : b
    }

    var kj = function (a) {
        if (H.hidden) return !0;
        var b = a.getBoundingClientRect();
        if (b.top == b.bottom || b.left == b.right || !F.getComputedStyle) return !0;
        var c = F.getComputedStyle(a, null);
        if ("hidden" === c.visibility) return !0;
        for (var d = a, e = c; d;) {
            if ("none" === e.display) return !0;
            var f = e.opacity, h = e.filter;
            if (h) {
                var k = h.indexOf("opacity(");
                0 <= k && (h = h.substring(k + 8, h.indexOf(")", k)), "%" == h.charAt(h.length - 1) && (h = h.substring(0, h.length - 1)), f = Math.min(h, f))
            }
            if (void 0 !== f && 0 >= f) return !0;
            (d = d.parentElement) && (e = F.getComputedStyle(d,
                null))
        }
        return !1
    };
    var tj = new RegExp(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i), uj = ["SCRIPT", "IMG", "SVG", "PATH", "BR"],
        vj = ["BR"];

    function wj(a) {
        var b;
        if (a === H.body) b = "body"; else {
            var c;
            if (a.id) c = "#" + a.id; else {
                var d;
                if (a.parentElement) {
                    var e;
                    a:{
                        var f = a.parentElement;
                        if (f) {
                            for (var h = 0; h < f.childElementCount; h++) if (f.children[h] === a) {
                                e = h + 1;
                                break a
                            }
                            e = -1
                        } else e = 1
                    }
                    d = wj(a.parentElement) + ">:nth-child(" + e + ")"
                } else d = "";
                c = d
            }
            b = c
        }
        return b
    }

    function xj() {
        var a;
        var b = [], c = H.body;
        if (c) {
            for (var d = c.querySelectorAll("*"), e = 0; e < d.length && 1E4 > e; e++) {
                var f = d[e];
                if (!(0 <= uj.indexOf(f.tagName.toUpperCase()))) {
                    for (var h = !1, k = 0; k < f.childElementCount && 1E4 > k; k++) if (!(0 <= vj.indexOf(f.children[k].tagName.toUpperCase()))) {
                        h = !0;
                        break
                    }
                    h || b.push(f)
                }
            }
            a = {elements: b, status: 1E4 < d.length ? "2" : "1"}
        } else a = {elements: b, status: "4"};
        for (var l = a, n = l.elements, q = [], r = 0; r < n.length; r++) {
            var t = n[r], p = t.textContent;
            t.value && (p = t.value);
            if (p) {
                var u = p.match(tj);
                if (u) {
                    var v =
                        u[0], x;
                    if (F.location) {
                        var y = Fe(F.location, "host", !0);
                        x = 0 <= v.toLowerCase().indexOf(y)
                    } else x = !1;
                    x || q.push({element: t, Ci: v})
                }
            }
        }
        for (var w = [], B = 10 < q.length ? "3" : l.status, z = 0; z < q.length && 10 > z; z++) {
            var A = q[z].element;
            w.push({querySelector: wj(A), tagName: A.tagName, isVisible: !kj(A), type: 1})
        }
        return {elements: w, status: B}
    }

    var yj = function (a) {
        var b = qi(a, "/pagead/conversion_async.js");
        if (b) return b;
        var c = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox"),
            d = xg("https://", "http://", "www.googleadservices.com");
        if (c || 1 === Mg()) d = "https://www.google.com";
        return d + "/pagead/conversion_async.js"
    }, zj = !1, Aj = [], Bj = ["aw", "dc"], Cj = function (a) {
        var b = F.google_trackConversion, c = a.gtm_onFailure;
        "function" == typeof b ? b(a) || c() : c()
    }, Dj = function () {
        for (; 0 < Aj.length;) Cj(Aj.shift())
    }, Ej = function (a) {
        if (!zj) {
            zj = !0;
            mh();
            var b = function () {
                Dj();
                Aj = {push: Cj}
            };
            vg() ? b() : Xc(a, b, function () {
                Dj();
                zj = !1
            })
        }
    }, Fj = function (a) {
        if (a) {
            for (var b = [], c = 0; c < a.length; ++c) {
                var d = a[c];
                d && b.push({
                    item_id: d.id,
                    quantity: d.quantity,
                    value: d.price,
                    start_date: d.start_date,
                    end_date: d.end_date
                })
            }
            return b
        }
    }, Gj = function (a, b, c, d) {
        function e() {
            T("gdpr_consent", gj());
        }

        function f() {
        }

        function h(R) {
            var fa = !0;
            R && f();
            fa && Aj.push(J)
        }

        function k() {
            return function (R) {
                u && (R = Lg(R));
                return R
            }
        }

        var l = sg(a), n = b == C.ia, q = l.C[0], r = l.C[1], t = void 0 !== r, p = function (R) {
                return d.getWithConfig(R)
            },
            u = void 0 != p(C.M) && !1 !== p(C.M), v = !1 !== p(C.hb), x = p(C.gb) || p(C.da), y = p(C.V), w = p(C.ca),
            B = p(C.ja), z = p(C.Ea), A = yj(z);
        Ej(A);
        var E = {prefix: x, domain: y, zb: w, flags: B};
        if (n) {
            var G = p(C.ka) || {};
            v && (Of(G[C.jb], !!G[C.D]) && eg(Bj, E), bg(E), gg(["aw", "dc"], E));
            p(C.Pa) && ig();
            G[C.D] && fg(Bj, G[C.D], G[C.lb], !!G[C.kb], x);
            Ig(l, d);
            ij(!1, u, a)
        }
        if (b === C.Ba) {
            var M = p(C.va), O = p(C.sa), V = p(M);
            if (M === C.Nb && void 0 === V) {
                var W = ng("aw", E.prefix, u);
                0 === W.length ? O(void 0) : 1 === W.length ? O(W[0]) :
                    O(W)
            } else O(V);
            return
        }
        var ca = !1 === p(C.Sd) || !1 === p(C.nb);
        if (!n || !t && !ca) if (!0 === p(C.Td) && (t = !1), !1 !== p(C.ba) || t) {
            var J = {
                google_conversion_id: q,
                google_remarketing_only: !t,
                onload_callback: d.H,
                gtm_onFailure: d.F,
                google_conversion_format: "3",
                google_conversion_color: "ffffff",
                google_conversion_domain: "",
                google_conversion_label: r,
                google_conversion_language: p(C.Oa),
                google_conversion_value: p(C.wa),
                google_conversion_currency: p(C.ra),
                google_conversion_order_id: p(C.pb),
                google_user_id: p(C.qb),
                google_conversion_page_url: p(C.mb),
                google_conversion_referrer_url: p(C.Ca),
                google_gtm: Ei()
            };
            t && (J.google_transport_url = pi(z, "/"));
            J.google_restricted_data_processing = p(C.Oc);
            vg() && (J.opt_image_generator = function () {
                return new Image
            }, J.google_enable_display_cookie_match = !1);
            !1 === p(C.ba) && (J.google_allow_ad_personalization_signals = !1);
            J.google_read_gcl_cookie_opt_out =
                !v;
            v && x && (J.google_gcl_cookie_prefix = x);
            var K = function () {
                var R = {event: b}, fa = d.eventModel;
                if (!fa) return null;
                m(fa, R);
                for (var U = 0; U < C.Jd.length; ++U) delete R[C.Jd[U]];
                return R
            }();
            K && (J.google_custom_params = K);
            !t && p(C.T) && (J.google_gtag_event_data = {items: p(C.T)});
            if (t && b == C.Aa) {
                J.google_conversion_merchant_id = p(C.Xd);
                J.google_basket_feed_country = p(C.Vd);
                J.google_basket_feed_language = p(C.Wd);
                J.google_basket_discount = p(C.Ud);
                J.google_basket_transaction_type = b;
                J.google_disable_merchant_reported_conversions =
                    !0 === p(C.ae);
                vg() && (J.google_disable_merchant_reported_conversions = !0);
                var P = Fj(p(C.T));
                P && (J.google_conversion_items = P)
            }
            var S = function (R, fa) {
                void 0 != fa && "" !== fa && (J.google_additional_conversion_params = J.google_additional_conversion_params || {}, J.google_additional_conversion_params[R] = fa)
            }, T = function (R, fa) {
                void 0 != fa && "" !== fa && (J.google_additional_params = J.google_additional_params || {}, J.google_additional_params[R] = fa)
            };
            "1" === Gf(!1)._up && S("gtm_up", "1");
            t && (S("vdnc", p(C.ie)), S("vdltv", p(C.Zd)));
            e();
            var na = Mg();
            0 === na ? T("dg", "c") : 1 === na && T("dg", "e");
            J.google_gtm_url_processor = k();
            (function () {
                td() ? Gd(function () {
                    e();
                    var R = Ad(C.s);
                    if (t) S("gcs", Fd()), R || z || !u || (J.google_transport_url = "https://pagead2.googlesyndication.com/"), h(R); else if (R) {
                        h(R);
                        return
                    }
                    R || wd(function (fa) {
                        var U = fa.Me;
                        J = m(J);
                        J.google_gtm_url_processor = k(U);
                        !z && J.google_transport_url && delete J.google_transport_url;
                        e();
                        t && (S("gcs", Fd()), S("gcu", "1"));
                        h(!0)
                    }, C.s)
                }, [C.s]) : h(!0)
            })()
        }
    };

    var Hj = function (a) {
        return !(void 0 === a || null === a || 0 === (a + "").length)
    }, Ij = function (a, b) {
        var c;
        if (2 === b.Y) return a("ord", Ca(1E11, 1E13)), !0;
        if (3 === b.Y) return a("ord", "1"), a("num", Ca(1E11, 1E13)), !0;
        if (4 === b.Y) return Hj(b.sessionId) && a("ord", b.sessionId), !0;
        if (5 === b.Y) c = "1"; else if (6 === b.Y) c = b.zd; else return !1;
        Hj(c) && a("qty", c);
        Hj(b.ac) && a("cost", b.ac);
        Hj(b.transactionId) && a("ord", b.transactionId);
        return !0
    }, Kj = function (a, b, c) {
        function d(w, B, z) {
            q.hasOwnProperty(w) || (B = String(B), n.push(";" + w + "=" + (z ? B : Jj(B))))
        }

        var e = a.dd, f = a.Cd, h = a.protocol;
        h += f ? "//" + e + ".fls.doubleclick.net/activityi" : "//ad.doubleclick.net/activity";
        var k = ";", l = !Ad(C.s) && a.Cb;
        l && (h = "https://ade.googlesyndication.com/ddm/activity", k = "/", f = !1);
        var n = [k, "src=" + Jj(e), ";type=" + Jj(a.gd), ";cat=" + Jj(a.ub)], q = a.Pg || {};
        Fa(q, function (w, B) {
            n.push(";" + Jj(w) + "=" + Jj(B + ""))
        });
        if (Ij(d, a)) {
            Hj(a.xc) && d("u", a.xc);
            Hj(a.wc) && d("tran", a.wc);
            d("gtm", Ei());
            td() && (d("gcs", Fd()), c && d("gcu", "1"));
            (function (w, B) {
                B && d(w, B)
            })("gdpr_consent",
                gj());
            "1" === Gf(!1)._up && d("gtm_up", "1");
            !1 === a.ug && d("npa", "1");
            if (a.cd) {
                var r = void 0 === a.Cb ? !0 : !!a.Cb, t = ng("dc", a.Ra, r);
                t && t.length && d("gcldc", t.join("."));
                var p = ng("aw", a.Ra, r);
                p && p.length && d("gclaw", p.join("."));
                var u = og(r);
                u && d("gac", u);
                jf({prefix: a.Ra, zb: a.Mg, domain: a.Lg, flags: a.ki});
                var v = ef[ff(a.Ra)];
                v && d("auiddc", v)
            }
            Hj(a.vd) && d("prd", a.vd, !0);
            Fa(a.Gd, function (w, B) {
                d(w, B)
            });
            n.push(b || "");
            if (Hj(a.kc)) {
                var x = a.kc || "";
                l && (x = Je(x));
                d("~oref", x)
            }
            var y = h +
                n.join("") + "?";
            f ? Zc(y, a.H) : $c(y, a.H, a.F)
        } else I(a.F)
    }, Jj = encodeURIComponent, Lj = function (a, b) {
        td() ? Gd(function () {
            Kj(a, b);
            Ad(C.s) || wd(function () {
                Kj(a, b, !0)
            }, C.s)
        }, [C.s]) : Kj(a, b)
    };
    var Mj = function (a, b, c, d) {
        function e() {
            var f = {config: a, gtm: Ei()};
            c && (jf(d), f.auiddc = ef[ff(d.prefix)]);
            b && (f.loadInsecure = b);
            void 0 === F.__dc_ns_processor && (F.__dc_ns_processor = []);
            F.__dc_ns_processor.push(f);
            Xc((b ? "http" : "https") + "://www.googletagmanager.com/dclk/ns/v1.js")
        }

        Ad(C.s) ? e() : wd(e, C.s)
    }, Nj = function (a) {
        var b = /^u([1-9]\d?|100)$/, c = a.getWithConfig(C.$d) || {}, d = Ai(a), e = {}, f = {};
        if (bb(c)) for (var h in c) if (c.hasOwnProperty(h) && b.test(h)) {
            var k = c[h];
            g(k) && (e[h] = k)
        }
        for (var l = 0; l < d.length; l++) {
            var n =
                d[l];
            b.test(n) && (e[n] = n)
        }
        for (var q in e) e.hasOwnProperty(q) && (f[q] = a.getWithConfig(e[q]));
        return f
    }, Oj = function (a) {
        function b(l, n, q) {
            void 0 !== q && 0 !== (q + "").length && d.push(l + n + ":" + c(q + ""))
        }

        var c = encodeURIComponent, d = [], e = a(C.T) || [];
        if (za(e)) for (var f = 0; f < e.length; f++) {
            var h = e[f], k = f + 1;
            b("i", k, h.id);
            b("p", k, h.price);
            b("q", k, h.quantity);
            b("c", k, a(C.Yd));
            b("l", k, a(C.Oa))
        }
        return d.join("|")
    }, Pj = function (a) {
        var b = /^DC-(\d+)(\/([\w-]+)\/([\w-]+)\+(\w+))?$/.exec(a);
        if (b) {
            var c = {
                standard: 2, unique: 3, per_session: 4,
                transactions: 5, items_sold: 6, "": 1
            }[(b[5] || "").toLowerCase()];
            if (c) return {containerId: "DC-" + b[1], aa: b[3] ? a : "", ng: b[1], mg: b[3] || "", ub: b[4] || "", Y: c}
        }
    }, Rj = function (a, b, c, d) {
        var e = Pj(a);
        if (e) {
            var f = function (K) {
                    return d.getWithConfig(K)
                }, h = !1 !== f(C.hb), k = f(C.gb) || f(C.da), l = f(C.V), n = f(C.ca), q = f(C.ja), r = f(C.Jf),
                t = void 0 != f(C.M) && !1 !== f(C.M), p = 3 === wg();
            if (b === C.Ba) {
                var u = f(C.va), v = f(C.sa), x = f(u);
                if (u === C.Nb && void 0 === x) {
                    var y = ng("dc", k, t);
                    0 === y.length ? v(void 0) :
                        1 === y.length ? v(y[0]) : v(y)
                } else v(x);
                return
            }
            if (b === C.ia) {
                var w = {prefix: k, domain: l, zb: n, flags: q}, B = f(C.ka) || {}, z = f(C.Pb),
                    A = void 0 === z ? !0 : !!z;
                h && (Of(B[C.jb], !!B[C.D]) && eg(Qj, w), bg(w), gg(Qj, w), pg(A, w));
                B[C.D] && fg(Qj, B[C.D], B[C.lb], !!B[C.kb], k);
                f(C.Pa) && ig();
                if (r && r.exclusion_parameters && r.engines) if (vg()) {
                } else Mj(r, p, h, w);
                ij(!0, t, a);
                I(d.H)
            } else {
                var E = {}, G = f(C.If);
                if (bb(G)) for (var M in G) if (G.hasOwnProperty(M)) {
                    var O =
                        G[M];
                    void 0 !== O && null !== O && (E[M] = O)
                }
                var V = "";
                if (5 === e.Y || 6 === e.Y) V = Oj(f);
                var W = Nj(d), ca = !0 === f(C.Ff);
                if (vg() && ca) {
                    ca = !1
                }
                var J = {
                    ub: e.ub,
                    cd: h,
                    Lg: l,
                    Mg: n,
                    Ra: k,
                    ac: f(C.wa),
                    Y: e.Y,
                    Pg: E,
                    dd: e.ng,
                    gd: e.mg,
                    F: d.F,
                    H: d.H,
                    kc: He(Ie(F.location.href)),
                    vd: V,
                    protocol: p ? "http:" : "https:",
                    zd: f(C.Vf),
                    Cd: ca,
                    sessionId: f(C.Sb),
                    wc: void 0,
                    transactionId: f(C.pb),
                    xc: void 0,
                    Gd: W,
                    ug: !1 !== f(C.ba),
                    eventId: d.eventId,
                    Cb: t
                };
                Lj(J)
            }
        } else I(d.F)
    }, Qj = ["aw", "dc"];

    var Tj = function (a) {
        function b() {
            var d = c, e = Sj(JSON.stringify(a[d])),
                f = "https://www.google.com/travel/flights/click/conversion/" + Sj(a.conversion_id) + "/?" + d + "=" + e;
            if (a.conversionLinkerEnabled) {
                var h = ng("gf", a.cookiePrefix, void 0);
                if (h && h.length) for (var k = 0; k < h.length; k++) f += "&gclgf=" + Sj(h[k])
            }
            $c(f, a.onSuccess, a.onFailure)
        }

        var c;
        if (a.hasOwnProperty("conversion_data")) c = "conversion_data"; else if (a.hasOwnProperty("price")) c = "price"; else return;
        Ad(C.s) ? b() : wd(b, C.s)
    }, Sj = function (a) {
        return null === a || void 0 ===
        a || 0 === String(a).length ? "" : encodeURIComponent(String(a))
    };
    var Uj = /.*\.google\.com(:\d+)?\/(?:booking|travel)\/flights.*/, Wj = function (a, b, c, d) {
        var e = function (E) {
            return d.getWithConfig(E)
        }, f = sg(a).C[0], h = !1 !== e(C.hb), k = e(C.gb) || e(C.da), l = e(C.V), n = e(C.ca), q = e(C.ja);
        if (b === C.Ba) {
            var r = e(C.va), t = e(C.sa), p = e(r);
            if (r === C.Nb && void 0 === p) {
                var u = void 0 != e(C.M) && !1 !== e(C.M), v = ng("gf", k, u);
                0 === v.length ? t(void 0) : 1 === v.length ? t(v[0]) : t(v)
            } else t(p);
            return
        }
        if (b === C.ia) {
            if (h) {
                var x =
                    {prefix: k, domain: l, flags: q, zb: n};
                bg(x);
                gg(["aw", "dc"], x)
            }
            I(d.H)
        } else {
            var y = {conversion_id: f, onFailure: d.F, onSuccess: d.H, conversionLinkerEnabled: h, cookiePrefix: k},
                w = Uj.test(F.location.href);
            if (b === C.Ma) {
                var B = {partner_id: f, is_direct_booking: w, total_price: e(C.wa), currency: e(C.ra)};
                y.price = B;
                Tj(y);
                return
            }
            if (b !== C.Aa) I(d.F); else {
                var z = {
                    partner_id: f, trip_type: e(C.$f), total_price: e(C.wa),
                    currency: e(C.ra), is_direct_booking: w, flight_segment: Vj(e(C.T))
                }, A = e(C.Sf);
                A && "object" === typeof A && (z.passengers_total = Ga(A.total), z.passengers_adult = Ga(A.adult), z.passengers_child = Ga(A.child), z.passengers_infant_in_seat = Ga(A.infant_in_seat), z.passengers_infant_in_lap = Ga(A.infant_in_lap));
                y.conversion_data = z;
                Tj(y)
            }
        }
    }, Vj = function (a) {
        if (a) {
            for (var b = [], c = 0, d = 0; d < a.length; ++d) {
                var e = a[d];
                !e || void 0 !== e.category && "" !== e.category && "FlightSegment" !== e.category || (b[c] = {
                    cabin: e.travel_class,
                    fare_product: e.fare_product,
                    booking_code: e.booking_code,
                    flight_number: e.flight_number,
                    origin: e.origin,
                    destination: e.destination,
                    departure_date: e.start_date
                }, c++)
            }
            return b
        }
    };
    var bk = function (a, b, c, d) {
        function e() {
            gj() && (z += "&gdpr_consent=" + encodeURIComponent(gj()));
            if (k) {
                var G = b === C.Ma ? ng("aw", l, void 0) : ng("ha", l, void 0);
                z += G.map(function (M) {
                    return "&gclha=" + encodeURIComponent(M)
                }).join("")
            }
            $c(z, d.H, d.F)
        }

        var f = sg(a), h = function (G) {
            return d.getWithConfig(G)
        }, k = !1 !== h(C.hb), l = h(C.gb) || h(C.da), n = h(C.V), q = h(C.ca), r = h(C.ja);
        if (b === C.Ba) {
            var t =
                h(C.va), p = h(C.sa), u = h(t);
            if (t === C.Nb && void 0 === u) {
                var v = void 0 != h(C.M) && !1 !== h(C.M), x = ng("ha", l, v);
                0 === x.length ? p(void 0) : 1 === x.length ? p(x[0]) : p(x)
            } else p(u);
            return
        }
        if (b === C.ia) {
            var y = h(C.ka) || {};
            if (k) {
                var w = {prefix: l, domain: n, flags: r, zb: q};
                Of(y[C.jb], !!y[C.D]) && eg(Xj, w);
                bg(w);
                gg(["aw", "dc"], w)
            }
            y[C.D] && fg(Xj, y[C.D], y[C.lb], !!y[C.kb], l);
            I(d.H)
        } else {
            var B = f.C[0];
            if (/^\d+$/.test(B)) {
                var z = "https://www.googletraveladservices.com/travel/clk/pagead/conversion/" +
                    encodeURIComponent(B) + "/";
                if (b === C.Aa) {
                    var A = Yj(h(C.pb), h(C.wa), h(C.ra), h(C.T));
                    A = encodeURIComponent(Zj(A));
                    z += "?data=" + A
                } else if (b === C.Ma) {
                    var E = ak(B, h(C.wa), h(C.ee), h(C.ra), h(C.T));
                    E = encodeURIComponent(Zj(E));
                    z += "?label=FH&guid=ON&script=0&ord=" + Ca(0, 4294967295) + ("&price=" + E)
                } else {
                    I(d.F);
                    return
                }
                Ad(C.s) ? e() : wd(e, C.s)
            } else I(d.F)
        }
    }, Yj = function (a, b, c, d) {
        var e = {};
        ck(a) && (e.hct_booking_xref = a);
        g(c) && (e.hct_currency_code = c);
        ck(b) && (e.hct_total_price = b, e.hct_base_price = b);
        if (!za(d) || 0 === d.length) return e;
        var f = d[0];
        if (!bb(f)) return e;
        ck(f[dk.Tc]) && (e.hct_partner_hotel_id = f[dk.Tc]);
        g(f[dk.Vc]) && (e.hct_checkin_date = f[dk.Vc]);
        g(f[dk.zc]) && (e.hct_checkout_date = f[dk.zc]);
        return e
    }, ak = function (a, b, c, d, e) {
        function f(q) {
            void 0 === q && (q = 0);
            if (ck(q)) return l + q
        }

        function h(q, r, t) {
            t(r) && (k[q] = r)
        }

        var k = {};
        k.partner_id = a;
        var l = "USD";
        g(d) && (l = k.currency = d);
        ck(b) && (k.base_price_value_string = f(b), k.display_price_value_string = f(b));
        ck(c) && (k.tax_price_value_string = f(c));
        g("LANDING_PAGE") && (k.page_type = "LANDING_PAGE");
        if (!za(e) || 0 == e.length) return k;
        var n = e[0];
        if (!bb(n)) return k;
        ck(n[dk.Ce]) && (k.total_price_value_string = f(n[dk.Ce]));
        h("partner_hotel_id", n[dk.Tc], ck);
        h("check_in_date", n[dk.Vc], g);
        h("check_out_date", n[dk.zc], g);
        h("adults", n[dk.hg], ek);
        h(dk.Ee, n[dk.Ee], g);
        h(dk.De, n[dk.De], g);
        return k
    }, Zj = function (a) {
        var b = [];
        Fa(a, function (c, d) {
            b.push(c + "=" + d)
        });
        return b.join(";")
    }, ck = function (a) {
        return g(a) || ek(a)
    }, ek = function (a) {
        return "number" === typeof a
    }, dk = {
        Tc: "id", Ce: "price", Vc: "start_date", zc: "end_date", hg: "occupancy",
        Ee: "room_id", De: "rate_rule_id"
    }, Xj = ["ha"];
    var gk = function () {
        var a = !0;
        hj(7) && hj(9) && hj(10) || (a = !1);
        var b = !0;
        b = !1;
        b && !fk() && (a = !1);
        return a
    }, fk = function () {
        var a = !0;
        hj(3) && hj(4) || (a = !1);
        return a
    };
    var kk = function (a, b) {
            var c = b.getWithConfig(C.va), d = b.getWithConfig(C.sa), e = b.getWithConfig(c);
            if (void 0 === e) {
                var f = void 0;
                hk.hasOwnProperty(c) ? f = hk[c] : ik.hasOwnProperty(c) && (f = ik[c]);
                1 === f && (f = jk(c));
                g(f) ? rh()(function () {
                    var h = rh().getByName(a).get(f);
                    d(h)
                }) : d(void 0)
            } else d(e)
        }, nk = function (a, b, c) {
            if (td()) {
                var d = function () {
                    var e = rh(), f = lk(a, b, "", c);
                    mk(b, f.xa) && (e(function () {
                        e.remove(b)
                    }), e("create", a, f.xa))
                };
                wd(d, C.J);
                wd(d, C.s)
            }
        }, uk = function (a, b, c) {
            var d = "https://www.google-analytics.com/analytics.js",
                e = th();
            if (xa(e)) {
                var f = "gtag_" + a.split("-").join("_"), h = function (y) {
                    var w = [].slice.call(arguments, 0);
                    w[0] = f + "." + w[0];
                    e.apply(window, w)
                }, k = function () {
                    var y = function (A, E) {
                        for (var G = 0; E && G < E.length; G++) h(A, E[G])
                    }, w = ok(b, c);
                    if (w) {
                        var B = w.action;
                        if ("impressions" === B) y("ec:addImpression", w.gh); else if ("promo_click" === B || "promo_view" === B) {
                            var z = w.wd;
                            y("ec:addPromo", w.wd);
                            z && 0 < z.length && "promo_click" === B && h("ec:setAction", B)
                        } else y("ec:addProduct", w.Ua), h("ec:setAction", B, w.tb)
                    }
                }, l = function () {
                    if (vg()) {
                    } else {
                        var y = c.getWithConfig(C.Rf);
                        y && (h("require", y, {dataLayer: "dataLayer"}), h("require", "render"))
                    }
                }, n = lk(a, f, b, c), q = function (y, w, B) {
                    B && (w = "" + w);
                    n.ya[y] = w
                };
                mk(f, n.xa) && (e(function () {
                    rh() && rh().remove(f)
                }), pk[f] = !1);
                e("create", a, n.xa);
                if (n.xa._x_19) {
                    var r = qi(n.xa._x_19, "/analytics.js");
                    r && (d = r);
                    n.xa._x_20 && !pk[f] && (pk[f] = !0, e(yh(f, n.xa._x_20)))
                }
                (function () {
                    var y = c.getWithConfig("custom_map");
                    e(function () {
                        if (bb(y)) {
                            var w = n.ya, B = rh().getByName(f), z;
                            for (z in y) if (y.hasOwnProperty(z) &&
                                /^(dimension|metric)\d+$/.test(z) && void 0 != y[z]) {
                                var A = B.get(jk(y[z]));
                                qk(w, z, A)
                            }
                        }
                    })
                })();
                (function (y) {
                    if (y) {
                        var w = {};
                        if (bb(y)) for (var B in rk) rk.hasOwnProperty(B) && sk(rk[B], B, y[B], w);
                        h("require", "linkid", w)
                    }
                })(n.linkAttribution);
                var t = n[C.ka];
                if (t && t[C.D]) {
                    var p = t[C.lb];
                    uh(f + ".", t[C.D], void 0 === p ? !!t.use_anchor : "fragment" === p, !!t[C.kb])
                }
                var u = !1;
                u = b === C.Ba;
                if (b === C.Bc) l(), h("send", "pageview", n.ya);
                else if (b === C.ia) l(), Ig(a, c), c.getWithConfig(C.Pa) && (ig(), vh(f + ".")), 0 != n.sendPageView && h("send", "pageview", n.ya), nk(a, f, c); else if (u) {
                    kk(f, c);
                } else "screen_view" === b ? h("send", "screenview", n.ya) : "timing_complete" === b ? (q("timingCategory", n.eventCategory, !0), q("timingVar", n.name, !0), q("timingValue", Ga(n.value)), void 0 !== n.eventLabel && q("timingLabel", n.eventLabel, !0), h("send", "timing", n.ya)) : "exception" ===
                b ? h("send", "exception", n.ya) : "optimize.callback" !== b && (0 <= Aa([C.Ac, "select_content", C.Ma, C.Kb, C.Lb, C.cb, "set_checkout_option", C.Aa, C.Mb, "view_promotion", "checkout_progress"], b) && (h("require", "ec", "ec.js"), k()), q("eventCategory", n.eventCategory, !0), q("eventAction", n.eventAction || b, !0), void 0 !== n.eventLabel && q("eventLabel", n.eventLabel, !0), void 0 !== n.value && q("eventValue", Ga(n.value)), h("send", "event", n.ya));
                if (!tk) {
                    tk = !0;
                    mh();
                    var v = c.F, x = function () {
                        rh().loaded || v()
                    };
                    vg() ? I(x) : Xc(d, x, v)
                }
            } else I(c.F)
        },
        vk = function (a, b, c, d) {
            Gd(function () {
                uk(a, b, d)
            }, [C.J, C.s])
        }, wk = function (a) {
            return Ad(a)
        }, tk, pk = {}, hk = {
            client_id: 1,
            client_storage: "storage",
            cookie_name: 1,
            cookie_domain: 1,
            cookie_expires: 1,
            cookie_path: 1,
            cookie_update: 1,
            cookie_flags: 1,
            sample_rate: 1,
            site_speed_sample_rate: 1,
            use_amp_client_id: 1,
            store_gac: 1,
            conversion_linker: "storeGac"
        }, ik = {
            anonymize_ip: 1,
            app_id: 1,
            app_installer_id: 1,
            app_name: 1,
            app_version: 1,
            campaign: {
                name: "campaignName", source: "campaignSource", medium: "campaignMedium", term: "campaignKeyword",
                content: "campaignContent", id: "campaignId"
            },
            currency: "currencyCode",
            description: "exDescription",
            fatal: "exFatal",
            language: 1,
            non_interaction: 1,
            page_hostname: "hostname",
            page_referrer: "referrer",
            page_path: "page",
            page_location: "location",
            page_title: "title",
            screen_name: 1,
            transport_type: "transport",
            user_id: 1
        }, xk = {
            content_id: 1,
            event_category: 1,
            event_action: 1,
            event_label: 1,
            link_attribution: 1,
            linker: 1,
            method: 1,
            name: 1,
            send_page_view: 1,
            value: 1
        }, rk = {cookie_name: 1, cookie_expires: "duration", levels: 1}, yk = {
            anonymize_ip: 1,
            fatal: 1, non_interaction: 1, use_amp_client_id: 1, send_page_view: 1, store_gac: 1, conversion_linker: 1
        }, sk = function (a, b, c, d) {
            if (void 0 !== c) if (yk[b] && (c = Ha(c)), "anonymize_ip" !== b || c || (c = void 0), 1 === a) d[jk(b)] = c; else if (g(a)) d[a] = c; else for (var e in a) a.hasOwnProperty(e) && void 0 !== c[e] && (d[a[e]] = c[e])
        }, jk = function (a) {
            return a && g(a) ? a.replace(/(_[a-z])/g, function (b) {
                return b[1].toUpperCase()
            }) : a
        }, zk = function (a) {
            var b = "general";
            0 <= Aa([C.Pd, C.Kb, C.Qd, C.cb, "checkout_progress", C.Aa, C.Mb, C.Lb, "set_checkout_option"],
                a) ? b = "ecommerce" : 0 <= Aa("generate_lead login search select_content share sign_up view_item view_item_list view_promotion view_search_results".split(" "), a) ? b = "engagement" : "exception" === a && (b = "error");
            return b
        }, qk = function (a, b, c) {
            a.hasOwnProperty(b) || (a[b] = c)
        }, Ak = function (a) {
            if (za(a)) {
                for (var b = [], c = 0; c < a.length; c++) {
                    var d = a[c];
                    if (void 0 != d) {
                        var e = d.id, f = d.variant;
                        void 0 != e && void 0 != f && b.push(String(e) + "." + String(f))
                    }
                }
                return 0 < b.length ? b.join("!") : void 0
            }
        }, lk = function (a, b, c, d) {
            function e(G, M) {
                void 0 !==
                M && (k[G] = M)
            }

            var f = function (G) {
                return d.getWithConfig(G)
            }, h = {}, k = {}, l = {}, n = Ak(f(C.Nf));
            n && qk(k, "exp", n);
            td() && (l._cs = wk);
            var q = f("custom_map");
            if (bb(q)) for (var r in q) if (q.hasOwnProperty(r) && /^(dimension|metric)\d+$/.test(r) && void 0 != q[r]) {
                var t = f(String(q[r]));
                void 0 !== t && qk(k, r, t)
            }
            for (var p = Ai(d), u = 0; u < p.length; ++u) {
                var v = p[u], x = f(v);
                if (xk.hasOwnProperty(v)) sk(xk[v], v, x, h); else if (ik.hasOwnProperty(v)) sk(ik[v], v, x, k); else if (hk.hasOwnProperty(v)) sk(hk[v], v, x, l); else if (/^(dimension|metric|content_group)\d+$/.test(v)) sk(1,
                    v, x, k); else if ("developer_id" === v) {
                    var y = Xa(x);
                    y && (k["&did"] = y)
                } else v === C.da && 0 > Aa(p, C.Ob) && (l.cookieName = x + "_ga")
            }
            qk(l, "cookieDomain", "auto");
            qk(k, "forceSSL", !0);
            qk(h, "eventCategory", zk(c));
            0 <= Aa(["view_item", "view_item_list", "view_promotion", "view_search_results"], c) && qk(k, "nonInteraction", !0);
            "login" === c || "sign_up" === c || "share" === c ? qk(h, "eventLabel", f(C.Qf)) : "search" === c || "view_search_results" === c ? qk(h, "eventLabel", f(C.Yf)) : "select_content" === c && qk(h, "eventLabel", f(C.Hf));
            var w = h[C.ka] || {}, B =
                w[C.jb];
            B || 0 != B && w[C.D] ? l.allowLinker = !0 : !1 === B && qk(l, "useAmpClientId", !1);
            f(C.Pa) && (l._useUp = !0);
            !1 !== f(C.Gf) && !1 !== f(C.eb) && gk() || (k.allowAdFeatures = !1);
            if (!1 === f(C.ba) || !fk()) {
                var z = "allowAdFeatures";
                z = "allowAdPersonalizationSignals";
                k[z] = !1
            }
            l.name = b;
            k["&gtm"] = Ei(!0);
            k.hitCallback = d.H;
            td() && (k["&gcs"] = Fd(), Ad(C.J) || (l.storage = "none"), Ad(C.s) || (k.allowAdFeatures = !1, l.storeGac = !1));
            var A = f(C.Ea) || f(C.Pf) || re("gtag.remote_config." + a + ".url", 2),
                E = f(C.Of) || re("gtag.remote_config." + a + ".dualId", 2);
            if (A && null != Uc) {
                l._x_19 = A;
            }
            E && (l._x_20 = E);
            h.ya = k;
            h.xa = l;
            return h
        }, ok = function (a, b) {
            function c(v) {
                var x = m(v);
                x.list = v.list_name;
                x.listPosition = v.list_position;
                x.position = v.list_position || v.creative_slot;
                x.creative = v.creative_name;
                return x
            }

            function d(v) {
                for (var x = [], y = 0; v && y < v.length; y++) v[y] && x.push(c(v[y]));
                return x.length ? x : void 0
            }

            function e(v) {
                return {
                    id: f(C.pb),
                    affiliation: f(C.Kf),
                    revenue: f(C.wa),
                    tax: f(C.ee),
                    shipping: f(C.de),
                    coupon: f(C.Lf),
                    list: f(C.Ec) || v
                }
            }

            for (var f = function (v) {
                return b.getWithConfig(v)
            }, h = f(C.T), k, l = 0; h && l < h.length && !(k = h[l][C.Ec]); l++) ;
            var n = f("custom_map");
            if (bb(n)) for (var q = 0; h && q < h.length; ++q) {
                var r = h[q], t;
                for (t in n) n.hasOwnProperty(t) &&
                /^(dimension|metric)\d+$/.test(t) && void 0 != n[t] && qk(r, t, r[n[t]])
            }
            var p = null, u = f(C.Mf);
            a === C.Aa || a === C.Mb ? p = {action: a, tb: e(), Ua: d(h)} : a === C.Kb ? p = {
                action: "add",
                Ua: d(h)
            } : a === C.Lb ? p = {action: "remove", Ua: d(h)} : a === C.Ma ? p = {
                action: "detail",
                tb: e(k),
                Ua: d(h)
            } : a === C.Ac ? p = {action: "impressions", gh: d(h)} : "view_promotion" === a ? p = {
                action: "promo_view",
                wd: d(u)
            } : "select_content" === a && u && 0 < u.length ? p = {
                action: "promo_click",
                wd: d(u)
            } : "select_content" === a ? p = {
                action: "click",
                tb: {list: f(C.Ec) || k},
                Ua: d(h)
            } : a === C.cb || "checkout_progress" ===
            a ? p = {
                action: "checkout",
                Ua: d(h),
                tb: {step: a === C.cb ? 1 : f(C.ce), option: f(C.be)}
            } : "set_checkout_option" === a && (p = {action: "checkout_option", tb: {step: f(C.ce), option: f(C.be)}});
            p && (p.li = f(C.ra));
            return p
        }, Bk = {}, mk = function (a, b) {
            var c = Bk[a];
            Bk[a] = m(b);
            if (!c) return !1;
            for (var d in b) if (b.hasOwnProperty(d) && b[d] !== c[d]) return !0;
            for (var e in c) if (c.hasOwnProperty(e) && c[e] !== b[e]) return !0;
            return !1
        };

    function Ck() {
        var a = L;
        return a.gcq = a.gcq || new Dk
    }

    var Ek = function (a, b, c) {
            Ck().register(a, b, c)
        }, Fk = function (a, b, c, d) {
            Ck().push("event", [b, a], c, d)
        }, Gk = function (a, b) {
            Ck().push("config", [a], b)
        }, Hk = function (a, b, c) {
            Ck().push("get", [a, b], c)
        }, Ik = {}, Jk = function () {
            this.status = 1;
            this.containerConfig = {};
            this.targetConfig = {};
            this.i = {};
            this.o = null;
            this.h = !1
        }, Kk = function (a, b, c, d, e) {
            this.type = a;
            this.o = b;
            this.aa = c || "";
            this.h = d;
            this.i = e
        }, Dk = function () {
            this.o = {};
            this.i = {};
            this.h = []
        }, Lk = function (a, b) {
            var c = sg(b);
            return a.o[c.containerId] = a.o[c.containerId] || new Jk
        },
        Mk = function (a, b, c) {
            if (b) {
                var d = sg(b);
                if (d && 1 === Lk(a, b).status) {
                    Lk(a, b).status = 2;
                    var e = {};
                    Wh && (e.timeoutId = F.setTimeout(function () {
                        D(38);
                        Ih()
                    }, 3E3));
                    a.push("require", [e], d.containerId);
                    Ik[d.containerId] = La();
                    if (vg()) {
                    } else {
                        var h = "/gtag/js?id=" +
                            encodeURIComponent(d.containerId) + "&l=dataLayer&cx=c",
                            k = ("http:" != F.location.protocol ? "https:" : "http:") + ("//www.googletagmanager.com" + h),
                            l = qi(c, h) || k;
                        Xc(l)
                    }
                }
            }
        }, Nk = function (a, b, c, d) {
            if (d.aa) {
                var e = Lk(a, d.aa), f = e.o;
                if (f) {
                    var h = m(c), k = m(e.targetConfig[d.aa]), l = m(e.containerConfig), n = m(e.i), q = m(a.i),
                        r = re("gtm.uniqueEventId"), t = sg(d.aa).prefix,
                        p = zi(yi(xi(wi(vi(ui(ti(h), k), l), n), q), function () {
                            Zh(r, t, "2");
                        }), function () {
                            Zh(r, t, "3");
                        });
                    try {
                        Zh(r, t, "1");
                        f(d.aa, b, d.o, p)
                    } catch (u) {
                        Zh(r, t, "4");
                    }
                }
            }
        };
    Dk.prototype.register = function (a, b, c) {
        if (3 !== Lk(this, a).status) {
            Lk(this, a).o = b;
            Lk(this, a).status = 3;
            c && (Lk(this, a).i = c);
            var d = sg(a), e = Ik[d.containerId];
            if (void 0 !== e) {
                var f = L[d.containerId].bootstrap, h = d.prefix.toUpperCase();
                L[d.containerId]._spx && (h = h.toLowerCase());
                var k = re("gtm.uniqueEventId"), l = h, n = La() - f;
                if (Wh && !Nh[k]) {
                    k !== Jh && (Fh(), Jh = k);
                    var q = l + "." + Math.floor(f - e) + "." + Math.floor(n);
                    Rh = Rh ? Rh + "," + q : "&cl=" + q
                }
                delete Ik[d.containerId]
            }
            this.flush()
        }
    };
    Dk.prototype.push = function (a, b, c, d) {
        var e = Math.floor(La() / 1E3);
        Mk(this, c, b[0][C.Ea] || this.i[C.Ea]);
        this.h.push(new Kk(a, e, c, b, d));
        d || this.flush()
    };
    Dk.prototype.flush = function (a) {
        for (var b = this; this.h.length;) {
            var c = this.h[0];
            if (c.i) c.i = !1, this.h.push(c); else switch (c.type) {
                case "require":
                    if (3 !== Lk(this, c.aa).status && !a) return;
                    Wh && F.clearTimeout(c.h[0].timeoutId);
                    break;
                case "set":
                    Fa(c.h[0], function (q, r) {
                        m(Va(q, r), b.i)
                    });
                    break;
                case "config":
                    var d = c.h[0], e = !!d[C.Tb];
                    delete d[C.Tb];
                    var f = Lk(this, c.aa), h = sg(c.aa), k = h.containerId === h.id;
                    e || (k ? f.containerConfig = {} : f.targetConfig[c.aa] = {});
                    f.h && e || Nk(this, C.ia, d, c);
                    f.h = !0;
                    delete d[C.rb];
                    k ? m(d, f.containerConfig) :
                        m(d, f.targetConfig[c.aa]);
                    break;
                case "event":
                    Nk(this, c.h[1], c.h[0], c);
                    break;
                case "get":
                    var l = {}, n = (l[C.va] = c.h[0], l[C.sa] = c.h[1], l);
                    Nk(this, C.Ba, n, c);
            }
            this.h.shift()
        }
    };
    var Ok = !1, Pk = [];

    function Qk() {
        if (!Ok) {
            Ok = !0;
            for (var a = 0; a < Pk.length; a++) I(Pk[a])
        }
    }

    var Rk = function (a) {
        Ok ? I(a) : Pk.push(a)
    };
    var Sk = "HA GF G UA AW DC".split(" "), Tk = !1, Uk = {}, Vk = !1;

    function Wk(a, b) {
        var c = {event: a};
        b && (c.eventModel = m(b), b[C.Fc] && (c.eventCallback = b[C.Fc]), b[C.Qb] && (c.eventTimeout = b[C.Qb]));
        return c
    }

    function Xk() {
        Tk = Tk || !L.gtagRegistered, L.gtagRegistered = !0, Tk && (L.addTargetToGroup = function (a) {
            Yk(a, "default")
        });
        return Tk
    }

    var Zk = function (a) {
        Fa(Uk, function (b, c) {
            var d = Aa(c, a);
            0 <= d && c.splice(d, 1)
        })
    }, Yk = function (a, b) {
        b = b.toString().split(",");
        for (var c = 0; c < b.length; c++) Uk[b[c]] = Uk[b[c]] || [], Uk[b[c]].push(a)
    };
    var $k = {
        config: function (a) {
            var b = a[2] || {};
            if (2 > a.length || !g(a[1]) || !bb(b)) return;
            var c = sg(a[1]);
            if (!c) return;
            Zk(c.id);
            Yk(c.id, b[C.Jc] || "default");
            delete b[C.Jc];
            Vk || D(43);
            le();
            if (Xk() && -1 !== Aa(Sk, c.prefix)) {
                "G" === c.prefix && (b[C.rb] = !0);
                Gk(b, c.id);
                return
            }
            ue("gtag.targets." + c.id, void 0);
            ue("gtag.targets." + c.id, m(b));
            var d = {};
            d[C.Da] = c.id;
            return Wk(C.ia, d);
        }, event: function (a) {
            var b = a[1];
            if (g(b) && !(3 < a.length)) {
                var c;
                if (2 < a.length) {
                    if (!bb(a[2]) &&
                        void 0 != a[2]) return;
                    c = a[2]
                }
                var d = Wk(b, c);
                var e;
                var f = c && c[C.Da];
                void 0 === f && (f = re(C.Da, 2), void 0 === f && (f = "default"));
                if (g(f) || za(f)) {
                    for (var h = f.toString().replace(/\s+/g, "").split(","), k = [], l = 0; l < h.length; l++) 0 <= h[l].indexOf("-") ? k.push(h[l]) : k = k.concat(Uk[h[l]] || []);
                    e = ug(k)
                } else e = void 0;
                var n = e;
                if (!n) return;
                var q = Xk();
                le();
                for (var r = [], t = 0; q && t < n.length; t++) {
                    var p = n[t];
                    if (-1 !== Aa(Sk, p.prefix)) {
                        var u = m(c);
                        "G" === p.prefix && (u[C.rb] = !0);
                        Fk(b, u, p.id)
                    }
                    r.push(p.id)
                }
                d.eventModel =
                    d.eventModel || {};
                0 < n.length ? d.eventModel[C.Da] = r.join() : delete d.eventModel[C.Da];
                Vk || D(43);
                return d
            }
        }, js: function (a) {
            if (2 == a.length && a[1].getTime) return Vk = !0, Xk(), {event: "gtm.js", "gtm.start": a[1].getTime()}
        }, policy: function () {
        }, set: function (a) {
            var b;
            2 == a.length && bb(a[1]) ? b = m(a[1]) : 3 == a.length && g(a[1]) && (b = {}, bb(a[2]) || za(a[2]) ? b[a[1]] = m(a[2]) : b[a[1]] = a[2]);
            if (b) {
                if (le(), Xk()) {
                    m(b);
                    var c = m(b);
                    Ck().push("set", [c])
                }
                b._clear = !0;
                return b
            }
        }, consent: function (a) {
            function b() {
                Xk() && m(a[2], {subcommand: a[1]})
            }

            if (3 === a.length) {
                D(39);
                var c = le(), d = a[1];
                "default" === d ? (b(), yd(a[2])) : "update" === d && (b(), zd(a[2], c))
            }
        }
    };
    $k.get = function (a) {
        D(53);
        if (4 !== a.length || !g(a[1]) || !g(a[2]) || !xa(a[3])) return;
        var b = sg(a[1]), c = String(a[2]), d = a[3];
        if (!b) return;
        Vk || D(43);
        if (!Xk() || -1 === Aa(Sk, b.prefix)) return;
        le();
        var e = {};
        Xg(m((e[C.va] = c, e[C.sa] = d, e)));
        Hk(c, function (f) {
            I(function () {
                return d(f)
            })
        }, b.id);
    };
    var al = {policy: !0};
    var cl = function (a, b) {
        var c = a.hide;
        if (c && void 0 !== c[b] && c.end) {
            c[b] = !1;
            var d = !0, e;
            for (e in c) if (c.hasOwnProperty(e) && !0 === c[e]) {
                d = !1;
                break
            }
            d && (c.end(), c.end = null)
        }
    }, el = function (a) {
        var b = dl(), c = b && b.hide;
        c && c.end && (c[a] = !0)
    };
    var vl = function (a) {
        if (ul(a)) return a;
        this.h = a
    };
    vl.prototype.dh = function () {
        return this.h
    };
    var ul = function (a) {
        return !a || "object" !== $a(a) || bb(a) ? !1 : "getUntrustedUpdateValue" in a
    };
    vl.prototype.getUntrustedUpdateValue = vl.prototype.dh;
    var wl = [], xl = !1, yl = function (a) {
        return F["dataLayer"].push(a)
    }, zl = function (a) {
        var b = L["dataLayer"], c = b ? b.subscribers : 1, d = 0;
        return function () {
            ++d === c && a()
        }
    };

    function Al(a) {
        var b = a._clear;
        Fa(a, function (d, e) {
            "_clear" !== d && (b && ue(d, void 0), ue(d, e))
        });
        ge || (ge = a["gtm.start"]);
        var c = a["gtm.uniqueEventId"];
        if (!a.event) return !1;
        c || (c = le(), a["gtm.uniqueEventId"] = c, ue("gtm.uniqueEventId", c));
        return oi(a)
    }

    function Bl() {
        for (var a = !1; !xl && 0 < wl.length;) {
            xl = !0;
            delete oe.eventModel;
            qe();
            var b = wl.shift();
            if (null != b) {
                var c = ul(b);
                if (c) {
                    var d = b;
                    b = ul(d) ? d.getUntrustedUpdateValue() : void 0;
                    for (var e = ["gtm.allowlist", "gtm.blocklist", "gtm.whitelist", "gtm.blacklist", "tagTypeBlacklist"], f = 0; f < e.length; f++) {
                        var h = e[f], k = re(h, 1);
                        if (za(k) || bb(k)) k = m(k);
                        pe[h] = k
                    }
                }
                try {
                    if (xa(b)) try {
                        b.call(se)
                    } catch (x) {
                    } else if (za(b)) {
                        var l =
                            b;
                        if (g(l[0])) {
                            var n = l[0].split("."), q = n.pop(), r = l.slice(1), t = re(n.join("."), 2);
                            if (void 0 !== t && null !== t) try {
                                t[q].apply(t, r)
                            } catch (x) {
                            }
                        }
                    } else {
                        var p = b;
                        if (p && ("[object Arguments]" == Object.prototype.toString.call(p) || Object.prototype.hasOwnProperty.call(p, "callee"))) {
                            a:{
                                var u = b;
                                if (u.length && g(u[0])) {
                                    var v = $k[u[0]];
                                    if (v && (!c || !al[u[0]])) {
                                        b = v(u);
                                        break a
                                    }
                                }
                                b = void 0
                            }
                            if (!b) {
                                xl = !1;
                                continue
                            }
                        }
                        a = Al(b) || a
                    }
                } finally {
                    c && qe(!0)
                }
            }
            xl = !1
        }
        return !a
    }

    function Cl() {
        var a = Bl();
        try {
            cl(F["dataLayer"], Zd.B)
        } catch (b) {
        }
        return a
    }

    var El = function () {
        var a = Vc("dataLayer", []), b = Vc("google_tag_manager", {});
        b = b["dataLayer"] = b["dataLayer"] || {};
        dh(function () {
            b.gtmDom || (b.gtmDom = !0, a.push({event: "gtm.dom"}))
        });
        Rk(function () {
            b.gtmLoad || (b.gtmLoad = !0, a.push({event: "gtm.load"}))
        });
        b.subscribers = (b.subscribers || 0) + 1;
        var c = a.push;
        a.push = function () {
            var e;
            if (0 < L.SANDBOXED_JS_SEMAPHORE) {
                e = [];
                for (var f = 0; f < arguments.length; f++) e[f] = new vl(arguments[f])
            } else e = [].slice.call(arguments, 0);
            var h = c.apply(a, e);
            wl.push.apply(wl, e);
            if (300 <
                this.length) for (D(4); 300 < this.length;) this.shift();
            var k = "boolean" !== typeof h || h;
            return Bl() && k
        };
        var d = a.slice(0);
        wl.push.apply(wl, d);
        Dl() && I(Cl)
    }, Dl = function () {
        var a = !0;
        return a
    };
    var Fl = {};
    Fl.Ub = new String("undefined");
    var Gl = function (a) {
        this.h = function (b) {
            for (var c = [], d = 0; d < a.length; d++) c.push(a[d] === Fl.Ub ? b : a[d]);
            return c.join("")
        }
    };
    Gl.prototype.toString = function () {
        return this.h("undefined")
    };
    Gl.prototype.valueOf = Gl.prototype.toString;
    Fl.kg = Gl;
    Fl.Uc = {};
    Fl.Ng = function (a) {
        return new Gl(a)
    };
    var Hl = {};
    Fl.Lh = function (a, b) {
        var c = le();
        Hl[c] = [a, b];
        return c
    };
    Fl.Oe = function (a) {
        var b = a ? 0 : 1;
        return function (c) {
            var d = Hl[c];
            if (d && "function" === typeof d[b]) d[b]();
            Hl[c] = void 0
        }
    };
    Fl.lh = function (a) {
        for (var b = !1, c = !1, d = 2; d < a.length; d++) b =
            b || 8 === a[d], c = c || 16 === a[d];
        return b && c
    };
    Fl.Dh = function (a) {
        if (a === Fl.Ub) return a;
        var b = le();
        Fl.Uc[b] = a;
        return 'google_tag_manager["' + Zd.B + '"].macro(' + b + ")"
    };
    Fl.wh = function (a, b, c) {
        a instanceof Fl.kg && (a = a.h(Fl.Lh(b, c)), b = wa);
        return {jd: a, H: b}
    };
    var Il = function (a, b, c) {
        function d(f, h) {
            var k = f[h];
            return k
        }

        var e = {
            event: b,
            "gtm.element": a,
            "gtm.elementClasses": d(a, "className"),
            "gtm.elementId": a["for"] || cd(a, "id") || "",
            "gtm.elementTarget": a.formTarget || d(a, "target") || ""
        };
        c && (e["gtm.triggers"] = c.join(","));
        e["gtm.elementUrl"] = (a.attributes && a.attributes.formaction ? a.formAction : "") || a.action || d(a, "href") || a.src || a.code || a.codebase ||
            "";
        return e
    }, Jl = function (a) {
        L.hasOwnProperty("autoEventsSettings") || (L.autoEventsSettings = {});
        var b = L.autoEventsSettings;
        b.hasOwnProperty(a) || (b[a] = {});
        return b[a]
    }, Kl = function (a, b, c) {
        Jl(a)[b] = c
    }, Ll = function (a, b, c, d) {
        var e = Jl(a), f = Ma(e, b, d);
        e[b] = c(f)
    }, Ml = function (a, b, c) {
        var d = Jl(a);
        return Ma(d, b, c)
    };
    var Nl = ["input", "select", "textarea"], Ol = ["button", "hidden", "image", "reset", "submit"], Pl = function (a) {
        var b = a.tagName.toLowerCase();
        return !Ba(Nl, function (c) {
            return c === b
        }) || "input" === b && Ba(Ol, function (c) {
            return c === a.type.toLowerCase()
        }) ? !1 : !0
    }, Ql = function (a) {
        return a.form ? a.form.tagName ? a.form : H.getElementById(a.form) : fd(a, ["form"], 100)
    }, Rl = function (a, b, c) {
        if (!a.elements) return 0;
        for (var d = b.getAttribute(c), e = 0, f = 1; e < a.elements.length; e++) {
            var h = a.elements[e];
            if (Pl(h)) {
                if (h.getAttribute(c) === d) return f;
                f++
            }
        }
        return 0
    };
    var Sl = !!F.MutationObserver, Tl = void 0, Ul = function (a) {
        if (!Tl) {
            var b = function () {
                var c = H.body;
                if (c) if (Sl) (new MutationObserver(function () {
                    for (var e = 0; e < Tl.length; e++) I(Tl[e])
                })).observe(c, {childList: !0, subtree: !0}); else {
                    var d = !1;
                    ad(c, "DOMNodeInserted", function () {
                        d || (d = !0, I(function () {
                            d = !1;
                            for (var e = 0; e < Tl.length; e++) I(Tl[e])
                        }))
                    })
                }
            };
            Tl = [];
            H.body ? b() : I(b)
        }
        Tl.push(a)
    };
    var fm = F.clearTimeout, gm = F.setTimeout, N = function (a, b, c) {
        if (vg()) {
            b && I(b)
        } else return Xc(a, b, c)
    }, hm = function () {
        return new Date
    }, im = function () {
        return F.location.href
    }, jm = function (a) {
        return Ge(Ie(a), "fragment")
    }, km = function (a) {
        return He(Ie(a))
    }, lm = function (a, b) {
        return re(a, b || 2)
    }, mm = function (a, b, c) {
        var d;
        b ? (a.eventCallback = b, c && (a.eventTimeout = c), d = yl(a)) : d = yl(a);
        return d
    }, nm = function (a, b) {
        F[a] = b
    }, X = function (a, b, c) {
        b &&
        (void 0 === F[a] || c && !F[a]) && (F[a] = b);
        return F[a]
    }, om = function (a, b, c) {
        return Me(a, b, void 0 === c ? !0 : !!c)
    }, pm = function (a, b, c) {
        return 0 === Ve(a, b, c)
    }, qm = function (a, b) {
        if (vg()) {
            b && I(b)
        } else Zc(a, b)
    }, rm = function (a) {
        return !!Ml(a, "init", !1)
    }, sm = function (a) {
        Kl(a, "init", !0)
    }, tm = function (a, b) {
        var c = (void 0 === b ? 0 : b) ? "www.googletagmanager.com/gtag/js" : ee;
        c += "?id=" + encodeURIComponent(a) + "&l=dataLayer";
        N(xg("https://", "http://", c))
    }, um = function (a,
                      b) {
        var c = a[b];
        return c
    }, vm = function (a, b, c) {
        Wh && (cb(a) || $h(c, b, a))
    };
    var wm = Fl.wh;

    function Tm(a, b) {
        a = String(a);
        b = String(b);
        var c = a.length - b.length;
        return 0 <= c && a.indexOf(b, c) == c
    }

    var Um = new Da;

    function Vm(a, b) {
        function c(h) {
            var k = Ie(h), l = Ge(k, "protocol"), n = Ge(k, "host", !0), q = Ge(k, "port"),
                r = Ge(k, "path").toLowerCase().replace(/\/$/, "");
            if (void 0 === l || "http" == l && "80" == q || "https" == l && "443" == q) l = "web", q = "default";
            return [l, n, q, r]
        }

        for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++) if (d[f] !== e[f]) return !1;
        return !0
    }

    function Wm(a) {
        return Xm(a) ? 1 : 0
    }

    function Xm(a) {
        var b = a.arg0, c = a.arg1;
        if (a.any_of && za(c)) {
            for (var d = 0; d < c.length; d++) {
                var e = m(a, {});
                m({arg1: c[d], any_of: void 0}, e);
                if (Wm(e)) return !0
            }
            return !1
        }
        switch (a["function"]) {
            case "_cn":
                return 0 <= String(b).indexOf(String(c));
            case "_css":
                var f;
                a:{
                    if (b) {
                        var h = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"];
                        try {
                            for (var k = 0; k < h.length; k++) if (b[h[k]]) {
                                f = b[h[k]](c);
                                break a
                            }
                        } catch (p) {
                        }
                    }
                    f = !1
                }
                return f;
            case "_ew":
                return Tm(b, c);
            case "_eq":
                return String(b) ==
                    String(c);
            case "_ge":
                return Number(b) >= Number(c);
            case "_gt":
                return Number(b) > Number(c);
            case "_lc":
                var l;
                l = String(b).split(",");
                return 0 <= Aa(l, String(c));
            case "_le":
                return Number(b) <= Number(c);
            case "_lt":
                return Number(b) < Number(c);
            case "_re":
                var n;
                var q = a.ignore_case ? "i" : void 0;
                try {
                    var r = String(c) + q, t = Um.get(r);
                    t || (t = new RegExp(c, q), Um.set(r, t));
                    n = t.test(b)
                } catch (p) {
                    n = !1
                }
                return n;
            case "_sw":
                return 0 == String(b).indexOf(String(c));
            case "_um":
                return Vm(b, c)
        }
        return !1
    };var Ym = {}, Zm = encodeURI, Y = encodeURIComponent, $m = $c;
    var an = function (a, b) {
        if (!a) return !1;
        var c = Ge(Ie(a), "host");
        if (!c) return !1;
        for (var d = 0; b && d < b.length; d++) {
            var e = b[d] && b[d].toLowerCase();
            if (e) {
                var f = c.length - e.length;
                0 < f && "." != e.charAt(0) && (f--, e = "." + e);
                if (0 <= f && c.indexOf(e, f) == f) return !0
            }
        }
        return !1
    };
    var bn = function (a, b, c) {
        for (var d = {}, e = !1, f = 0; a && f < a.length; f++) a[f] && a[f].hasOwnProperty(b) && a[f].hasOwnProperty(c) && (d[a[f][b]] = a[f][c], e = !0);
        return e ? d : null
    };
    Ym.mh = function () {
        var a = !1;
        return a
    };

    function mo() {
        return F.gaGlobal = F.gaGlobal || {}
    }

    var no = function () {
        var a = mo();
        a.hid = a.hid || Ca();
        return a.hid
    }, oo = function (a, b) {
        var c = mo();
        if (void 0 == c.vid || b && !c.from_cookie) c.vid = a, c.from_cookie = b
    };
    var Qo = window, Ro = document, So = function (a) {
        var b = Qo._gaUserPrefs;
        if (b && b.ioo && b.ioo() || a && !0 === Qo["ga-disable-" + a]) return !0;
        try {
            var c = Qo.external;
            if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0
        } catch (f) {
        }
        for (var d = Ke("AMP_TOKEN", String(Ro.cookie), !0), e = 0; e < d.length; e++) if ("$OPT_OUT" == d[e]) return !0;
        return Ro.getElementById("__gaOptOutExtension") ? !0 : !1
    };

    function Vo(a) {
        delete a.eventModel[C.rb];
        Xo(a.eventModel)
    }

    var Xo = function (a) {
        Fa(a, function (c) {
            "_" === c.charAt(0) && delete a[c]
        });
        var b = a[C.la] || {};
        Fa(b, function (c) {
            "_" === c.charAt(0) && delete b[c]
        })
    };
    var $o = function (a, b, c) {
        Fk(b, c, a)
    }, ap = function (a, b, c) {
        Fk(b, c, a, !0)
    }, dp = function (a, b) {
    };

    function cp(a, b) {
    }

    var Z = {a: {}};

    Z.a.gtagha = ["google"], function () {
        (function (a) {
            Z.__gtagha = a;
            Z.__gtagha.b = "gtagha";
            Z.__gtagha.g = !0;
            Z.__gtagha.priorityOverride = 0
        })(function (a) {
            I(a.vtp_gtmOnSuccess)
        })
    }();

    Z.a.e = ["google"], function () {
        (function (a) {
            Z.__e = a;
            Z.__e.b = "e";
            Z.__e.g = !0;
            Z.__e.priorityOverride = 0
        })(function (a) {
            return String(we(a.vtp_gtmEventId, "event"))
        })
    }();

    Z.a.v = ["google"], function () {
        (function (a) {
            Z.__v = a;
            Z.__v.b = "v";
            Z.__v.g = !0;
            Z.__v.priorityOverride = 0
        })(function (a) {
            var b = a.vtp_name;
            if (!b || !b.replace) return !1;
            var c = lm(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1), d = void 0 !== c ? c : a.vtp_defaultValue;
            vm(d, "v", a.vtp_gtmEventId);
            return d
        })
    }();
    Z.a.rep = ["google"], function () {
        (function (a) {
            Z.__rep = a;
            Z.__rep.b = "rep";
            Z.__rep.g = !0;
            Z.__rep.priorityOverride = 0
        })(function (a) {
            var b;
            switch (sg(a.vtp_containerId).prefix) {
                case "AW":
                    b = Gj;
                    break;
                case "DC":
                    b = Rj;
                    break;
                case "GF":
                    b = Wj;
                    break;
                case "HA":
                    b = bk;
                    break;
                case "UA":
                    b = vk;
                    break;
                default:
                    I(a.vtp_gtmOnFailure);
                    return
            }
            I(a.vtp_gtmOnSuccess);
            Ek(a.vtp_containerId, b, a.vtp_remoteConfig || {})
        })
    }();


    Z.a.cid = ["google"], function () {
        (function (a) {
            Z.__cid = a;
            Z.__cid.b = "cid";
            Z.__cid.g = !0;
            Z.__cid.priorityOverride = 0
        })(function () {
            return Zd.B
        })
    }();


    Z.a.gtagaw = ["google"], function () {
        (function (a) {
            Z.__gtagaw = a;
            Z.__gtagaw.b = "gtagaw";
            Z.__gtagaw.g = !0;
            Z.__gtagaw.priorityOverride = 0
        })(function (a) {
            var b = "AW-" + String(a.vtp_conversionId);
            Fk(String(a.vtp_eventName), a.vtp_eventData || {}, a.vtp_conversionLabel ? b + "/" + String(a.vtp_conversionLabel) : b);
            I(a.vtp_gtmOnSuccess)
        })
    }();

    Z.a.get = ["google"], function () {
        (function (a) {
            Z.__get = a;
            Z.__get.b = "get";
            Z.__get.g = !0;
            Z.__get.priorityOverride = 0
        })(function (a) {
            var b = a.vtp_settings;
            (a.vtp_deferrable ? ap : $o)(String(b.streamId), String(a.vtp_eventName), b.eventParameters || {});
            a.vtp_gtmOnSuccess()
        })
    }();


    Z.a.gtagfl = [], function () {
        (function (a) {
            Z.__gtagfl = a;
            Z.__gtagfl.b = "gtagfl";
            Z.__gtagfl.g = !0;
            Z.__gtagfl.priorityOverride = 0
        })(function (a) {
            I(a.vtp_gtmOnSuccess)
        })
    }();

    Z.a.gtaggf = ["google"], function () {
        (function (a) {
            Z.__gtaggf = a;
            Z.__gtaggf.b = "gtaggf";
            Z.__gtaggf.g = !0;
            Z.__gtaggf.priorityOverride = 0
        })(function (a) {
            I(a.vtp_gtmOnSuccess)
        })
    }();


    Z.a.gtagua = ["google"], function () {
        (function (a) {
            Z.__gtagua = a;
            Z.__gtagua.b = "gtagua";
            Z.__gtagua.g = !0;
            Z.__gtagua.priorityOverride = 0
        })(function (a) {
            I(a.vtp_gtmOnSuccess)
        })
    }();


    var ep = {};
    ep.macro = function (a) {
        if (Fl.Uc.hasOwnProperty(a)) return Fl.Uc[a]
    }, ep.onHtmlSuccess = Fl.Oe(!0), ep.onHtmlFailure = Fl.Oe(!1);
    ep.dataLayer = se;
    ep.callback = function (a) {
        je.hasOwnProperty(a) && xa(je[a]) && je[a]();
        delete je[a]
    };

    function fp() {
        L[Zd.B] = ep;
        Oa(ke, Z.a);
        Kb = Kb || Fl;
        Lb = Wb
    }

    function gp() {
        id.gtm_3pds = !0;
        id.gtag_cs_api = !0;
        L = F.google_tag_manager = F.google_tag_manager || {};
        ej();
        if (L[Zd.B]) {
            var a = L.zones;
            a && a.unregisterChild(Zd.B);
        } else {
            for (var b = data.resource || {}, c = b.macros || [], d =
                0; d < c.length; d++) Cb.push(c[d]);
            for (var e = b.tags || [], f = 0; f < e.length; f++) Fb.push(e[f]);
            for (var h = b.predicates || [], k = 0; k < h.length; k++) Eb.push(h[k]);
            for (var l = b.rules || [], n = 0; n < l.length; n++) {
                for (var q = l[n], r = {}, t = 0; t < q.length; t++) r[q[t][0]] = Array.prototype.slice.call(q[t], 1);
                Db.push(r)
            }
            Hb = Z;
            Ib = Wm;
            fp();
            El();
            Zg = !1;
            $g = 0;
            if ("interactive" == H.readyState && !H.createEventObject || "complete" == H.readyState) bh(); else {
                ad(H, "DOMContentLoaded", bh);
                ad(H, "readystatechange", bh);
                if (H.createEventObject && H.documentElement.doScroll) {
                    var p =
                        !0;
                    try {
                        p = !F.frameElement
                    } catch (y) {
                    }
                    p && ch()
                }
                ad(F, "load", bh)
            }
            Ok = !1;
            "complete" === H.readyState ? Qk() : ad(F, "load", Qk);
            a:{
                if (!Wh) break a;
                F.setInterval(Xh, 864E5);
            }
            he = (new Date).getTime();
            ep.bootstrap = he;
        }
    }

    (function (a) {
        var b = !0;
        b = !1;
        b = !1;
        if (b) {
            a();
            return
        }
        var c = function () {
            var h =
                F["google.tagmanager.debugui2.queue"];
            h || (h = [], F["google.tagmanager.debugui2.queue"] = h, Xc("https://www.googletagmanager.com/debug/bootstrap"));
            return h
        }, d = "x" === Ge(F.location, "query", !1, void 0, "gtm_debug");
        if (!d && H.referrer) {
            var e = Ie(H.referrer);
            d = "tagassistant.google.com" === Fe(e, "host")
        }
        if (!d) {
            var f = Me("__TAG_ASSISTANT");
            d = f.length && f[0].length
        }
        F.__TAG_ASSISTANT_API && (d = !0);
        if (d && Uc) {
            c().push({
                messageType: "CONTAINER_STARTING", data: {
                    scriptSource: Uc, resume: function () {
                        a()
                    }
                }
            });
            return
        }
        a()
    })(gp);

})()
