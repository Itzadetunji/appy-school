/*! jQuery v3.2.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(a, b) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a);
    } : b(a);
}("undefined" != typeof window ? window : this, function(a, b) {
    "use strict";
    var c = [], d = a.document, e = Object.getPrototypeOf, f = c.slice, g = c.concat, h = c.push, i = c.indexOf, j = {}, k = j.toString, l = j.hasOwnProperty, m = l.toString, n = m.call(Object), o = {};
    function p(a, b) {
        b = b || d;
        var c = b.createElement("script");
        c.text = a, b.head.appendChild(c).parentNode.removeChild(c);
    }
    var q = "3.2.1", r = function(a, b) {
        return new r.fn.init(a, b);
    }, s = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, t = /^-ms-/, u = /-([a-z])/g, v = function(a, b) {
        return b.toUpperCase();
    };
    r.fn = r.prototype = {
        jquery: q,
        constructor: r,
        length: 0,
        toArray: function() {
            return f.call(this);
        },
        get: function(a) {
            return null == a ? f.call(this) : a < 0 ? this[a + this.length] : this[a];
        },
        pushStack: function(a) {
            var b = r.merge(this.constructor(), a);
            return b.prevObject = this, b;
        },
        each: function(a) {
            return r.each(this, a);
        },
        map: function(a) {
            return this.pushStack(r.map(this, function(b, c) {
                return a.call(b, c, b);
            }));
        },
        slice: function() {
            return this.pushStack(f.apply(this, arguments));
        },
        first: function() {
            return this.eq(0);
        },
        last: function() {
            return this.eq(-1);
        },
        eq: function(a) {
            var b = this.length, c = +a + (a < 0 ? b : 0);
            return this.pushStack(c >= 0 && c < b ? [ this[c] ] : []);
        },
        end: function() {
            return this.prevObject || this.constructor();
        },
        push: h,
        sort: c.sort,
        splice: c.splice
    }, r.extend = r.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || r.isFunction(g) || (g = {}), 
        h === i && (g = this, h--); h < i; h++) if (null != (a = arguments[h])) for (b in a) c = g[b], 
        d = a[b], g !== d && (j && d && (r.isPlainObject(d) || (e = Array.isArray(d))) ? (e ? (e = !1, 
        f = c && Array.isArray(c) ? c : []) : f = c && r.isPlainObject(c) ? c : {}, g[b] = r.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        return g;
    }, r.extend({
        expando: "jQuery" + (q + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a);
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === r.type(a);
        },
        isWindow: function(a) {
            return null != a && a === a.window;
        },
        isNumeric: function(a) {
            var b = r.type(a);
            return ("number" === b || "string" === b) && !isNaN(a - parseFloat(a));
        },
        isPlainObject: function(a) {
            var b, c;
            return !(!a || "[object Object]" !== k.call(a)) && (!(b = e(a)) || (c = l.call(b, "constructor") && b.constructor, 
            "function" == typeof c && m.call(c) === n));
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a) return !1;
            return !0;
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? j[k.call(a)] || "object" : typeof a;
        },
        globalEval: function(a) {
            p(a);
        },
        camelCase: function(a) {
            return a.replace(t, "ms-").replace(u, v);
        },
        each: function(a, b) {
            var c, d = 0;
            if (w(a)) {
                for (c = a.length; d < c; d++) if (b.call(a[d], d, a[d]) === !1) break;
            } else for (d in a) if (b.call(a[d], d, a[d]) === !1) break;
            return a;
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(s, "");
        },
        makeArray: function(a, b) {
            var c = b || [];
            return null != a && (w(Object(a)) ? r.merge(c, "string" == typeof a ? [ a ] : a) : h.call(c, a)), 
            c;
        },
        inArray: function(a, b, c) {
            return null == b ? -1 : i.call(b, a, c);
        },
        merge: function(a, b) {
            for (var c = +b.length, d = 0, e = a.length; d < c; d++) a[e++] = b[d];
            return a.length = e, a;
        },
        grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; f < g; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
            return e;
        },
        map: function(a, b, c) {
            var d, e, f = 0, h = [];
            if (w(a)) for (d = a.length; f < d; f++) e = b(a[f], f, c), null != e && h.push(e); else for (f in a) e = b(a[f], f, c), 
            null != e && h.push(e);
            return g.apply([], h);
        },
        guid: 1,
        proxy: function(a, b) {
            var c, d, e;
            if ("string" == typeof b && (c = a[b], b = a, a = c), r.isFunction(a)) return d = f.call(arguments, 2), 
            e = function() {
                return a.apply(b || this, d.concat(f.call(arguments)));
            }, e.guid = a.guid = a.guid || r.guid++, e;
        },
        now: Date.now,
        support: o
    }), "function" == typeof Symbol && (r.fn[Symbol.iterator] = c[Symbol.iterator]), 
    r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(a, b) {
        j["[object " + b + "]"] = b.toLowerCase();
    });
    function w(a) {
        var b = !!a && "length" in a && a.length, c = r.type(a);
        return "function" !== c && !r.isWindow(a) && ("array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a);
    }
    var x = function(a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date(), v = a.document, w = 0, x = 0, y = ha(), z = ha(), A = ha(), B = function(a, b) {
            return a === b && (l = !0), 0;
        }, C = {}.hasOwnProperty, D = [], E = D.pop, F = D.push, G = D.push, H = D.slice, I = function(a, b) {
            for (var c = 0, d = a.length; c < d; c++) if (a[c] === b) return c;
            return -1;
        }, J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", K = "[\\x20\\t\\r\\n\\f]", L = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", M = "\\[" + K + "*(" + L + ")(?:" + K + "*([*^$|!~]?=)" + K + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + L + "))|)" + K + "*\\]", N = ":(" + L + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)", O = new RegExp(K + "+", "g"), P = new RegExp("^" + K + "+|((?:^|[^\\\\])(?:\\\\.)*)" + K + "+$", "g"), Q = new RegExp("^" + K + "*," + K + "*"), R = new RegExp("^" + K + "*([>+~]|" + K + ")" + K + "*"), S = new RegExp("=" + K + "*([^\\]'\"]*?)" + K + "*\\]", "g"), T = new RegExp(N), U = new RegExp("^" + L + "$"), V = {
            ID: new RegExp("^#(" + L + ")"),
            CLASS: new RegExp("^\\.(" + L + ")"),
            TAG: new RegExp("^(" + L + "|[*])"),
            ATTR: new RegExp("^" + M),
            PSEUDO: new RegExp("^" + N),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + K + "*(even|odd|(([+-]|)(\\d*)n|)" + K + "*(?:([+-]|)" + K + "*(\\d+)|))" + K + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + J + ")$", "i"),
            needsContext: new RegExp("^" + K + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + K + "*((?:-\\d)?\\d*)" + K + "*\\)|)(?=[^-]|$)", "i")
        }, W = /^(?:input|select|textarea|button)$/i, X = /^h\d$/i, Y = /^[^{]+\{\s*\[native \w/, Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, $ = /[+~]/, _ = new RegExp("\\\\([\\da-f]{1,6}" + K + "?|(" + K + ")|.)", "ig"), aa = function(a, b, c) {
            var d = "0x" + b - 65536;
            return d !== d || c ? b : d < 0 ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320);
        }, ba = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ca = function(a, b) {
            return b ? "\0" === a ? "�" : a.slice(0, -1) + "\\" + a.charCodeAt(a.length - 1).toString(16) + " " : "\\" + a;
        }, da = function() {
            m();
        }, ea = ta(function(a) {
            return a.disabled === !0 && ("form" in a || "label" in a);
        }, {
            dir: "parentNode",
            next: "legend"
        });
        try {
            G.apply(D = H.call(v.childNodes), v.childNodes), D[v.childNodes.length].nodeType;
        } catch (fa) {
            G = {
                apply: D.length ? function(a, b) {
                    F.apply(a, H.call(b));
                } : function(a, b) {
                    var c = a.length, d = 0;
                    while (a[c++] = b[d++]) ;
                    a.length = c - 1;
                }
            };
        }
        function ga(a, b, d, e) {
            var f, h, j, k, l, o, r, s = b && b.ownerDocument, w = b ? b.nodeType : 9;
            if (d = d || [], "string" != typeof a || !a || 1 !== w && 9 !== w && 11 !== w) return d;
            if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
                if (11 !== w && (l = Z.exec(a))) if (f = l[1]) {
                    if (9 === w) {
                        if (!(j = b.getElementById(f))) return d;
                        if (j.id === f) return d.push(j), d;
                    } else if (s && (j = s.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), 
                    d;
                } else {
                    if (l[2]) return G.apply(d, b.getElementsByTagName(a)), d;
                    if ((f = l[3]) && c.getElementsByClassName && b.getElementsByClassName) return G.apply(d, b.getElementsByClassName(f)), 
                    d;
                }
                if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
                    if (1 !== w) s = b, r = a; else if ("object" !== b.nodeName.toLowerCase()) {
                        (k = b.getAttribute("id")) ? k = k.replace(ba, ca) : b.setAttribute("id", k = u), 
                        o = g(a), h = o.length;
                        while (h--) o[h] = "#" + k + " " + sa(o[h]);
                        r = o.join(","), s = $.test(a) && qa(b.parentNode) || b;
                    }
                    if (r) try {
                        return G.apply(d, s.querySelectorAll(r)), d;
                    } catch (x) {} finally {
                        k === u && b.removeAttribute("id");
                    }
                }
            }
            return i(a.replace(P, "$1"), b, d, e);
        }
        function ha() {
            var a = [];
            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e;
            }
            return b;
        }
        function ia(a) {
            return a[u] = !0, a;
        }
        function ja(a) {
            var b = n.createElement("fieldset");
            try {
                return !!a(b);
            } catch (c) {
                return !1;
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null;
            }
        }
        function ka(a, b) {
            var c = a.split("|"), e = c.length;
            while (e--) d.attrHandle[c[e]] = b;
        }
        function la(a, b) {
            var c = b && a, d = c && 1 === a.nodeType && 1 === b.nodeType && a.sourceIndex - b.sourceIndex;
            if (d) return d;
            if (c) while (c = c.nextSibling) if (c === b) return -1;
            return a ? 1 : -1;
        }
        function ma(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a;
            };
        }
        function na(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a;
            };
        }
        function oa(a) {
            return function(b) {
                return "form" in b ? b.parentNode && b.disabled === !1 ? "label" in b ? "label" in b.parentNode ? b.parentNode.disabled === a : b.disabled === a : b.isDisabled === a || b.isDisabled !== !a && ea(b) === a : b.disabled === a : "label" in b && b.disabled === a;
            };
        }
        function pa(a) {
            return ia(function(b) {
                return b = +b, ia(function(c, d) {
                    var e, f = a([], c.length, b), g = f.length;
                    while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]));
                });
            });
        }
        function qa(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a;
        }
        c = ga.support = {}, f = ga.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return !!b && "HTML" !== b.nodeName;
        }, m = ga.setDocument = function(a) {
            var b, e, g = a ? a.ownerDocument || a : v;
            return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, 
            p = !f(n), v !== n && (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), 
            c.attributes = ja(function(a) {
                return a.className = "i", !a.getAttribute("className");
            }), c.getElementsByTagName = ja(function(a) {
                return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length;
            }), c.getElementsByClassName = Y.test(n.getElementsByClassName), c.getById = ja(function(a) {
                return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length;
            }), c.getById ? (d.filter.ID = function(a) {
                var b = a.replace(_, aa);
                return function(a) {
                    return a.getAttribute("id") === b;
                };
            }, d.find.ID = function(a, b) {
                if ("undefined" != typeof b.getElementById && p) {
                    var c = b.getElementById(a);
                    return c ? [ c ] : [];
                }
            }) : (d.filter.ID = function(a) {
                var b = a.replace(_, aa);
                return function(a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b;
                };
            }, d.find.ID = function(a, b) {
                if ("undefined" != typeof b.getElementById && p) {
                    var c, d, e, f = b.getElementById(a);
                    if (f) {
                        if (c = f.getAttributeNode("id"), c && c.value === a) return [ f ];
                        e = b.getElementsByName(a), d = 0;
                        while (f = e[d++]) if (c = f.getAttributeNode("id"), c && c.value === a) return [ f ];
                    }
                    return [];
                }
            }), d.find.TAG = c.getElementsByTagName ? function(a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0;
            } : function(a, b) {
                var c, d = [], e = 0, f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while (c = f[e++]) 1 === c.nodeType && d.push(c);
                    return d;
                }
                return f;
            }, d.find.CLASS = c.getElementsByClassName && function(a, b) {
                if ("undefined" != typeof b.getElementsByClassName && p) return b.getElementsByClassName(a);
            }, r = [], q = [], (c.qsa = Y.test(n.querySelectorAll)) && (ja(function(a) {
                o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", 
                a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + K + "*(?:''|\"\")"), 
                a.querySelectorAll("[selected]").length || q.push("\\[" + K + "*(?:value|" + J + ")"), 
                a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), 
                a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]");
            }), ja(function(a) {
                a.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var b = n.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + K + "*[*^$|!~]?="), 
                2 !== a.querySelectorAll(":enabled").length && q.push(":enabled", ":disabled"), 
                o.appendChild(a).disabled = !0, 2 !== a.querySelectorAll(":disabled").length && q.push(":enabled", ":disabled"), 
                a.querySelectorAll("*,:x"), q.push(",.*:");
            })), (c.matchesSelector = Y.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function(a) {
                c.disconnectedMatch = s.call(a, "*"), s.call(a, "[s!='']:x"), r.push("!=", N);
            }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), 
            b = Y.test(o.compareDocumentPosition), t = b || Y.test(o.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a, d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
            } : function(a, b) {
                if (b) while (b = b.parentNode) if (b === a) return !0;
                return !1;
            }, B = b ? function(a, b) {
                if (a === b) return l = !0, 0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 
                1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? I(k, a) - I(k, b) : 0 : 4 & d ? -1 : 1);
            } : function(a, b) {
                if (a === b) return l = !0, 0;
                var c, d = 0, e = a.parentNode, f = b.parentNode, g = [ a ], h = [ b ];
                if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? I(k, a) - I(k, b) : 0;
                if (e === f) return la(a, b);
                c = a;
                while (c = c.parentNode) g.unshift(c);
                c = b;
                while (c = c.parentNode) h.unshift(c);
                while (g[d] === h[d]) d++;
                return d ? la(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0;
            }, n) : n;
        }, ga.matches = function(a, b) {
            return ga(a, null, null, b);
        }, ga.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(S, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try {
                var d = s.call(a, b);
                if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d;
            } catch (e) {}
            return ga(b, n, null, [ a ]).length > 0;
        }, ga.contains = function(a, b) {
            return (a.ownerDocument || a) !== n && m(a), t(a, b);
        }, ga.attr = function(a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()], f = e && C.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null;
        }, ga.escape = function(a) {
            return (a + "").replace(ba, ca);
        }, ga.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a);
        }, ga.uniqueSort = function(a) {
            var b, d = [], e = 0, f = 0;
            if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                while (b = a[f++]) b === a[f] && (e = d.push(f));
                while (e--) a.splice(d[e], 1);
            }
            return k = null, a;
        }, e = ga.getText = function(a) {
            var b, c = "", d = 0, f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += e(a);
                } else if (3 === f || 4 === f) return a.nodeValue;
            } else while (b = a[d++]) c += e(b);
            return c;
        }, d = ga.selectors = {
            cacheLength: 50,
            createPseudo: ia,
            match: V,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(_, aa), a[3] = (a[3] || a[4] || a[5] || "").replace(_, aa), 
                    "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4);
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]), 
                    a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]), 
                    a;
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    return V.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && T.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), 
                    a[2] = c.slice(0, b)), a.slice(0, 3));
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(_, aa).toLowerCase();
                    return "*" === a ? function() {
                        return !0;
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b;
                    };
                },
                CLASS: function(a) {
                    var b = y[a + " "];
                    return b || (b = new RegExp("(^|" + K + ")" + a + "(" + K + "|$)")) && y(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "");
                    });
                },
                ATTR: function(a, b, c) {
                    return function(d) {
                        var e = ga.attr(d, a);
                        return null == e ? "!=" === b : !b || (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(O, " ") + " ").indexOf(c) > -1 : "|=" === b && (e === c || e.slice(0, c.length + 1) === c + "-"));
                    };
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3), g = "last" !== a.slice(-4), h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode;
                    } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h, t = !1;
                        if (q) {
                            if (f) {
                                while (p) {
                                    m = b;
                                    while (m = m[p]) if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling";
                                }
                                return !0;
                            }
                            if (o = [ g ? q.firstChild : q.lastChild ], g && s) {
                                m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], 
                                n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n];
                                while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) if (1 === m.nodeType && ++t && m === b) {
                                    k[a] = [ w, n, t ];
                                    break;
                                }
                            } else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), 
                            j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1) while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), 
                            k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [ w, t ]), m === b)) break;
                            return t -= e, t === d || t % d === 0 && t / d >= 0;
                        }
                    };
                },
                PSEUDO: function(a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [ a, a, "", b ], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function(a, c) {
                        var d, f = e(a, b), g = f.length;
                        while (g--) d = I(a, f[g]), a[d] = !(c[d] = f[g]);
                    }) : function(a) {
                        return e(a, 0, c);
                    }) : e;
                }
            },
            pseudos: {
                not: ia(function(a) {
                    var b = [], c = [], d = h(a.replace(P, "$1"));
                    return d[u] ? ia(function(a, b, c, e) {
                        var f, g = d(a, null, e, []), h = a.length;
                        while (h--) (f = g[h]) && (a[h] = !(b[h] = f));
                    }) : function(a, e, f) {
                        return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop();
                    };
                }),
                has: ia(function(a) {
                    return function(b) {
                        return ga(a, b).length > 0;
                    };
                }),
                contains: ia(function(a) {
                    return a = a.replace(_, aa), function(b) {
                        return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
                    };
                }),
                lang: ia(function(a) {
                    return U.test(a || "") || ga.error("unsupported lang: " + a), a = a.replace(_, aa).toLowerCase(), 
                    function(b) {
                        var c;
                        do {
                            if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), 
                            c === a || 0 === c.indexOf(a + "-");
                        } while ((b = b.parentNode) && 1 === b.nodeType);
                        return !1;
                    };
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id;
                },
                root: function(a) {
                    return a === o;
                },
                focus: function(a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
                },
                enabled: oa(!1),
                disabled: oa(!0),
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected;
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0;
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling) if (a.nodeType < 6) return !1;
                    return !0;
                },
                parent: function(a) {
                    return !d.pseudos.empty(a);
                },
                header: function(a) {
                    return X.test(a.nodeName);
                },
                input: function(a) {
                    return W.test(a.nodeName);
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b;
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase());
                },
                first: pa(function() {
                    return [ 0 ];
                }),
                last: pa(function(a, b) {
                    return [ b - 1 ];
                }),
                eq: pa(function(a, b, c) {
                    return [ c < 0 ? c + b : c ];
                }),
                even: pa(function(a, b) {
                    for (var c = 0; c < b; c += 2) a.push(c);
                    return a;
                }),
                odd: pa(function(a, b) {
                    for (var c = 1; c < b; c += 2) a.push(c);
                    return a;
                }),
                lt: pa(function(a, b, c) {
                    for (var d = c < 0 ? c + b : c; --d >= 0; ) a.push(d);
                    return a;
                }),
                gt: pa(function(a, b, c) {
                    for (var d = c < 0 ? c + b : c; ++d < b; ) a.push(d);
                    return a;
                })
            }
        }, d.pseudos.nth = d.pseudos.eq;
        for (b in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) d.pseudos[b] = ma(b);
        for (b in {
            submit: !0,
            reset: !0
        }) d.pseudos[b] = na(b);
        function ra() {}
        ra.prototype = d.filters = d.pseudos, d.setFilters = new ra(), g = ga.tokenize = function(a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k) return b ? 0 : k.slice(0);
            h = a, i = [], j = d.preFilter;
            while (h) {
                c && !(e = Q.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), 
                c = !1, (e = R.exec(h)) && (c = e.shift(), f.push({
                    value: c,
                    type: e[0].replace(P, " ")
                }), h = h.slice(c.length));
                for (g in d.filter) !(e = V[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), 
                f.push({
                    value: c,
                    type: g,
                    matches: e
                }), h = h.slice(c.length));
                if (!c) break;
            }
            return b ? h.length : h ? ga.error(a) : z(a, i).slice(0);
        };
        function sa(a) {
            for (var b = 0, c = a.length, d = ""; b < c; b++) d += a[b].value;
            return d;
        }
        function ta(a, b, c) {
            var d = b.dir, e = b.next, f = e || d, g = c && "parentNode" === f, h = x++;
            return b.first ? function(b, c, e) {
                while (b = b[d]) if (1 === b.nodeType || g) return a(b, c, e);
                return !1;
            } : function(b, c, i) {
                var j, k, l, m = [ w, h ];
                if (i) {
                    while (b = b[d]) if ((1 === b.nodeType || g) && a(b, c, i)) return !0;
                } else while (b = b[d]) if (1 === b.nodeType || g) if (l = b[u] || (b[u] = {}), 
                k = l[b.uniqueID] || (l[b.uniqueID] = {}), e && e === b.nodeName.toLowerCase()) b = b[d] || b; else {
                    if ((j = k[f]) && j[0] === w && j[1] === h) return m[2] = j[2];
                    if (k[f] = m, m[2] = a(b, c, i)) return !0;
                }
                return !1;
            };
        }
        function ua(a) {
            return a.length > 1 ? function(b, c, d) {
                var e = a.length;
                while (e--) if (!a[e](b, c, d)) return !1;
                return !0;
            } : a[0];
        }
        function va(a, b, c) {
            for (var d = 0, e = b.length; d < e; d++) ga(a, b[d], c);
            return c;
        }
        function wa(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; h < i; h++) (f = a[h]) && (c && !c(f, d, e) || (g.push(f), 
            j && b.push(h)));
            return g;
        }
        function xa(a, b, c, d, e, f) {
            return d && !d[u] && (d = xa(d)), e && !e[u] && (e = xa(e, f)), ia(function(f, g, h, i) {
                var j, k, l, m = [], n = [], o = g.length, p = f || va(b || "*", h.nodeType ? [ h ] : h, []), q = !a || !f && b ? p : wa(p, m, a, h, i), r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) {
                    j = wa(r, n), d(j, [], h, i), k = j.length;
                    while (k--) (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;
                            while (k--) (l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i);
                        }
                        k = r.length;
                        while (k--) (l = r[k]) && (j = e ? I(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l));
                    }
                } else r = wa(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : G.apply(g, r);
            });
        }
        function ya(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ta(function(a) {
                return a === b;
            }, h, !0), l = ta(function(a) {
                return I(b, a) > -1;
            }, h, !0), m = [ function(a, c, d) {
                var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                return b = null, e;
            } ]; i < f; i++) if (c = d.relative[a[i].type]) m = [ ta(ua(m), c) ]; else {
                if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                    for (e = ++i; e < f; e++) if (d.relative[a[e].type]) break;
                    return xa(i > 1 && ua(m), i > 1 && sa(a.slice(0, i - 1).concat({
                        value: " " === a[i - 2].type ? "*" : ""
                    })).replace(P, "$1"), c, i < e && ya(a.slice(i, e)), e < f && ya(a = a.slice(e)), e < f && sa(a));
                }
                m.push(c);
            }
            return ua(m);
        }
        function za(a, b) {
            var c = b.length > 0, e = a.length > 0, f = function(f, g, h, i, k) {
                var l, o, q, r = 0, s = "0", t = f && [], u = [], v = j, x = f || e && d.find.TAG("*", k), y = w += null == v ? 1 : Math.random() || .1, z = x.length;
                for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
                    if (e && l) {
                        o = 0, g || l.ownerDocument === n || (m(l), h = !p);
                        while (q = a[o++]) if (q(l, g || n, h)) {
                            i.push(l);
                            break;
                        }
                        k && (w = y);
                    }
                    c && ((l = !q && l) && r--, f && t.push(l));
                }
                if (r += s, c && s !== r) {
                    o = 0;
                    while (q = b[o++]) q(t, u, g, h);
                    if (f) {
                        if (r > 0) while (s--) t[s] || u[s] || (u[s] = E.call(i));
                        u = wa(u);
                    }
                    G.apply(i, u), k && !f && u.length > 0 && r + b.length > 1 && ga.uniqueSort(i);
                }
                return k && (w = y, j = v), t;
            };
            return c ? ia(f) : f;
        }
        return h = ga.compile = function(a, b) {
            var c, d = [], e = [], f = A[a + " "];
            if (!f) {
                b || (b = g(a)), c = b.length;
                while (c--) f = ya(b[c]), f[u] ? d.push(f) : e.push(f);
                f = A(a, za(e, d)), f.selector = a;
            }
            return f;
        }, i = ga.select = function(a, b, c, e) {
            var f, i, j, k, l, m = "function" == typeof a && a, n = !e && g(a = m.selector || a);
            if (c = c || [], 1 === n.length) {
                if (i = n[0] = n[0].slice(0), i.length > 2 && "ID" === (j = i[0]).type && 9 === b.nodeType && p && d.relative[i[1].type]) {
                    if (b = (d.find.ID(j.matches[0].replace(_, aa), b) || [])[0], !b) return c;
                    m && (b = b.parentNode), a = a.slice(i.shift().value.length);
                }
                f = V.needsContext.test(a) ? 0 : i.length;
                while (f--) {
                    if (j = i[f], d.relative[k = j.type]) break;
                    if ((l = d.find[k]) && (e = l(j.matches[0].replace(_, aa), $.test(i[0].type) && qa(b.parentNode) || b))) {
                        if (i.splice(f, 1), a = e.length && sa(i), !a) return G.apply(c, e), c;
                        break;
                    }
                }
            }
            return (m || h(a, n))(e, b, !p, c, !b || $.test(a) && qa(b.parentNode) || b), c;
        }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, 
        m(), c.sortDetached = ja(function(a) {
            return 1 & a.compareDocumentPosition(n.createElement("fieldset"));
        }), ja(function(a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href");
        }) || ka("type|href|height|width", function(a, b, c) {
            if (!c) return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
        }), c.attributes && ja(function(a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value");
        }) || ka("value", function(a, b, c) {
            if (!c && "input" === a.nodeName.toLowerCase()) return a.defaultValue;
        }), ja(function(a) {
            return null == a.getAttribute("disabled");
        }) || ka(J, function(a, b, c) {
            var d;
            if (!c) return a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
        }), ga;
    }(a);
    r.find = x, r.expr = x.selectors, r.expr[":"] = r.expr.pseudos, r.uniqueSort = r.unique = x.uniqueSort, 
    r.text = x.getText, r.isXMLDoc = x.isXML, r.contains = x.contains, r.escapeSelector = x.escape;
    var y = function(a, b, c) {
        var d = [], e = void 0 !== c;
        while ((a = a[b]) && 9 !== a.nodeType) if (1 === a.nodeType) {
            if (e && r(a).is(c)) break;
            d.push(a);
        }
        return d;
    }, z = function(a, b) {
        for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
        return c;
    }, A = r.expr.match.needsContext;
    function B(a, b) {
        return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
    }
    var C = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i, D = /^.[^:#\[\.,]*$/;
    function E(a, b, c) {
        return r.isFunction(b) ? r.grep(a, function(a, d) {
            return !!b.call(a, d, a) !== c;
        }) : b.nodeType ? r.grep(a, function(a) {
            return a === b !== c;
        }) : "string" != typeof b ? r.grep(a, function(a) {
            return i.call(b, a) > -1 !== c;
        }) : D.test(b) ? r.filter(b, a, c) : (b = r.filter(b, a), r.grep(a, function(a) {
            return i.call(b, a) > -1 !== c && 1 === a.nodeType;
        }));
    }
    r.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? r.find.matchesSelector(d, a) ? [ d ] : [] : r.find.matches(a, r.grep(b, function(a) {
            return 1 === a.nodeType;
        }));
    }, r.fn.extend({
        find: function(a) {
            var b, c, d = this.length, e = this;
            if ("string" != typeof a) return this.pushStack(r(a).filter(function() {
                for (b = 0; b < d; b++) if (r.contains(e[b], this)) return !0;
            }));
            for (c = this.pushStack([]), b = 0; b < d; b++) r.find(a, e[b], c);
            return d > 1 ? r.uniqueSort(c) : c;
        },
        filter: function(a) {
            return this.pushStack(E(this, a || [], !1));
        },
        not: function(a) {
            return this.pushStack(E(this, a || [], !0));
        },
        is: function(a) {
            return !!E(this, "string" == typeof a && A.test(a) ? r(a) : a || [], !1).length;
        }
    });
    var F, G = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, H = r.fn.init = function(a, b, c) {
        var e, f;
        if (!a) return this;
        if (c = c || F, "string" == typeof a) {
            if (e = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [ null, a, null ] : G.exec(a), 
            !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
            if (e[1]) {
                if (b = b instanceof r ? b[0] : b, r.merge(this, r.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), 
                C.test(e[1]) && r.isPlainObject(b)) for (e in b) r.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
                return this;
            }
            return f = d.getElementById(e[2]), f && (this[0] = f, this.length = 1), this;
        }
        return a.nodeType ? (this[0] = a, this.length = 1, this) : r.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(r) : r.makeArray(a, this);
    };
    H.prototype = r.fn, F = r(d);
    var I = /^(?:parents|prev(?:Until|All))/, J = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    r.fn.extend({
        has: function(a) {
            var b = r(a, this), c = b.length;
            return this.filter(function() {
                for (var a = 0; a < c; a++) if (r.contains(this, b[a])) return !0;
            });
        },
        closest: function(a, b) {
            var c, d = 0, e = this.length, f = [], g = "string" != typeof a && r(a);
            if (!A.test(a)) for (;d < e; d++) for (c = this[d]; c && c !== b; c = c.parentNode) if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && r.find.matchesSelector(c, a))) {
                f.push(c);
                break;
            }
            return this.pushStack(f.length > 1 ? r.uniqueSort(f) : f);
        },
        index: function(a) {
            return a ? "string" == typeof a ? i.call(r(a), this[0]) : i.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function(a, b) {
            return this.pushStack(r.uniqueSort(r.merge(this.get(), r(a, b))));
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
        }
    });
    function K(a, b) {
        while ((a = a[b]) && 1 !== a.nodeType) ;
        return a;
    }
    r.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null;
        },
        parents: function(a) {
            return y(a, "parentNode");
        },
        parentsUntil: function(a, b, c) {
            return y(a, "parentNode", c);
        },
        next: function(a) {
            return K(a, "nextSibling");
        },
        prev: function(a) {
            return K(a, "previousSibling");
        },
        nextAll: function(a) {
            return y(a, "nextSibling");
        },
        prevAll: function(a) {
            return y(a, "previousSibling");
        },
        nextUntil: function(a, b, c) {
            return y(a, "nextSibling", c);
        },
        prevUntil: function(a, b, c) {
            return y(a, "previousSibling", c);
        },
        siblings: function(a) {
            return z((a.parentNode || {}).firstChild, a);
        },
        children: function(a) {
            return z(a.firstChild);
        },
        contents: function(a) {
            return B(a, "iframe") ? a.contentDocument : (B(a, "template") && (a = a.content || a), 
            r.merge([], a.childNodes));
        }
    }, function(a, b) {
        r.fn[a] = function(c, d) {
            var e = r.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = r.filter(d, e)), 
            this.length > 1 && (J[a] || r.uniqueSort(e), I.test(a) && e.reverse()), this.pushStack(e);
        };
    });
    var L = /[^\x20\t\r\n\f]+/g;
    function M(a) {
        var b = {};
        return r.each(a.match(L) || [], function(a, c) {
            b[c] = !0;
        }), b;
    }
    r.Callbacks = function(a) {
        a = "string" == typeof a ? M(a) : r.extend({}, a);
        var b, c, d, e, f = [], g = [], h = -1, i = function() {
            for (e = e || a.once, d = b = !0; g.length; h = -1) {
                c = g.shift();
                while (++h < f.length) f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, 
                c = !1);
            }
            a.memory || (c = !1), b = !1, e && (f = c ? [] : "");
        }, j = {
            add: function() {
                return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) {
                    r.each(b, function(b, c) {
                        r.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== r.type(c) && d(c);
                    });
                }(arguments), c && !b && i()), this;
            },
            remove: function() {
                return r.each(arguments, function(a, b) {
                    var c;
                    while ((c = r.inArray(b, f, c)) > -1) f.splice(c, 1), c <= h && h--;
                }), this;
            },
            has: function(a) {
                return a ? r.inArray(a, f) > -1 : f.length > 0;
            },
            empty: function() {
                return f && (f = []), this;
            },
            disable: function() {
                return e = g = [], f = c = "", this;
            },
            disabled: function() {
                return !f;
            },
            lock: function() {
                return e = g = [], c || b || (f = c = ""), this;
            },
            locked: function() {
                return !!e;
            },
            fireWith: function(a, c) {
                return e || (c = c || [], c = [ a, c.slice ? c.slice() : c ], g.push(c), b || i()), 
                this;
            },
            fire: function() {
                return j.fireWith(this, arguments), this;
            },
            fired: function() {
                return !!d;
            }
        };
        return j;
    };
    function N(a) {
        return a;
    }
    function O(a) {
        throw a;
    }
    function P(a, b, c, d) {
        var e;
        try {
            a && r.isFunction(e = a.promise) ? e.call(a).done(b).fail(c) : a && r.isFunction(e = a.then) ? e.call(a, b, c) : b.apply(void 0, [ a ].slice(d));
        } catch (a) {
            c.apply(void 0, [ a ]);
        }
    }
    r.extend({
        Deferred: function(b) {
            var c = [ [ "notify", "progress", r.Callbacks("memory"), r.Callbacks("memory"), 2 ], [ "resolve", "done", r.Callbacks("once memory"), r.Callbacks("once memory"), 0, "resolved" ], [ "reject", "fail", r.Callbacks("once memory"), r.Callbacks("once memory"), 1, "rejected" ] ], d = "pending", e = {
                state: function() {
                    return d;
                },
                always: function() {
                    return f.done(arguments).fail(arguments), this;
                },
                catch: function(a) {
                    return e.then(null, a);
                },
                pipe: function() {
                    var a = arguments;
                    return r.Deferred(function(b) {
                        r.each(c, function(c, d) {
                            var e = r.isFunction(a[d[4]]) && a[d[4]];
                            f[d[1]](function() {
                                var a = e && e.apply(this, arguments);
                                a && r.isFunction(a.promise) ? a.promise().progress(b.notify).done(b.resolve).fail(b.reject) : b[d[0] + "With"](this, e ? [ a ] : arguments);
                            });
                        }), a = null;
                    }).promise();
                },
                then: function(b, d, e) {
                    var f = 0;
                    function g(b, c, d, e) {
                        return function() {
                            var h = this, i = arguments, j = function() {
                                var a, j;
                                if (!(b < f)) {
                                    if (a = d.apply(h, i), a === c.promise()) throw new TypeError("Thenable self-resolution");
                                    j = a && ("object" == typeof a || "function" == typeof a) && a.then, r.isFunction(j) ? e ? j.call(a, g(f, c, N, e), g(f, c, O, e)) : (f++, 
                                    j.call(a, g(f, c, N, e), g(f, c, O, e), g(f, c, N, c.notifyWith))) : (d !== N && (h = void 0, 
                                    i = [ a ]), (e || c.resolveWith)(h, i));
                                }
                            }, k = e ? j : function() {
                                try {
                                    j();
                                } catch (a) {
                                    r.Deferred.exceptionHook && r.Deferred.exceptionHook(a, k.stackTrace), b + 1 >= f && (d !== O && (h = void 0, 
                                    i = [ a ]), c.rejectWith(h, i));
                                }
                            };
                            b ? k() : (r.Deferred.getStackHook && (k.stackTrace = r.Deferred.getStackHook()), 
                            a.setTimeout(k));
                        };
                    }
                    return r.Deferred(function(a) {
                        c[0][3].add(g(0, a, r.isFunction(e) ? e : N, a.notifyWith)), c[1][3].add(g(0, a, r.isFunction(b) ? b : N)), 
                        c[2][3].add(g(0, a, r.isFunction(d) ? d : O));
                    }).promise();
                },
                promise: function(a) {
                    return null != a ? r.extend(a, e) : e;
                }
            }, f = {};
            return r.each(c, function(a, b) {
                var g = b[2], h = b[5];
                e[b[1]] = g.add, h && g.add(function() {
                    d = h;
                }, c[3 - a][2].disable, c[0][2].lock), g.add(b[3].fire), f[b[0]] = function() {
                    return f[b[0] + "With"](this === f ? void 0 : this, arguments), this;
                }, f[b[0] + "With"] = g.fireWith;
            }), e.promise(f), b && b.call(f, f), f;
        },
        when: function(a) {
            var b = arguments.length, c = b, d = Array(c), e = f.call(arguments), g = r.Deferred(), h = function(a) {
                return function(c) {
                    d[a] = this, e[a] = arguments.length > 1 ? f.call(arguments) : c, --b || g.resolveWith(d, e);
                };
            };
            if (b <= 1 && (P(a, g.done(h(c)).resolve, g.reject, !b), "pending" === g.state() || r.isFunction(e[c] && e[c].then))) return g.then();
            while (c--) P(e[c], h(c), g.reject);
            return g.promise();
        }
    });
    var Q = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    r.Deferred.exceptionHook = function(b, c) {
        a.console && a.console.warn && b && Q.test(b.name) && a.console.warn("jQuery.Deferred exception: " + b.message, b.stack, c);
    }, r.readyException = function(b) {
        a.setTimeout(function() {
            throw b;
        });
    };
    var R = r.Deferred();
    r.fn.ready = function(a) {
        return R.then(a)["catch"](function(a) {
            r.readyException(a);
        }), this;
    }, r.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(a) {
            (a === !0 ? --r.readyWait : r.isReady) || (r.isReady = !0, a !== !0 && --r.readyWait > 0 || R.resolveWith(d, [ r ]));
        }
    }), r.ready.then = R.then;
    function S() {
        d.removeEventListener("DOMContentLoaded", S), a.removeEventListener("load", S), 
        r.ready();
    }
    "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll ? a.setTimeout(r.ready) : (d.addEventListener("DOMContentLoaded", S), 
    a.addEventListener("load", S));
    var T = function(a, b, c, d, e, f, g) {
        var h = 0, i = a.length, j = null == c;
        if ("object" === r.type(c)) {
            e = !0;
            for (h in c) T(a, b, h, c[h], !0, f, g);
        } else if (void 0 !== d && (e = !0, r.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), 
        b = null) : (j = b, b = function(a, b, c) {
            return j.call(r(a), c);
        })), b)) for (;h < i; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
    }, U = function(a) {
        return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType;
    };
    function V() {
        this.expando = r.expando + V.uid++;
    }
    V.uid = 1, V.prototype = {
        cache: function(a) {
            var b = a[this.expando];
            return b || (b = {}, U(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, {
                value: b,
                configurable: !0
            }))), b;
        },
        set: function(a, b, c) {
            var d, e = this.cache(a);
            if ("string" == typeof b) e[r.camelCase(b)] = c; else for (d in b) e[r.camelCase(d)] = b[d];
            return e;
        },
        get: function(a, b) {
            return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][r.camelCase(b)];
        },
        access: function(a, b, c) {
            return void 0 === b || b && "string" == typeof b && void 0 === c ? this.get(a, b) : (this.set(a, b, c), 
            void 0 !== c ? c : b);
        },
        remove: function(a, b) {
            var c, d = a[this.expando];
            if (void 0 !== d) {
                if (void 0 !== b) {
                    Array.isArray(b) ? b = b.map(r.camelCase) : (b = r.camelCase(b), b = b in d ? [ b ] : b.match(L) || []), 
                    c = b.length;
                    while (c--) delete d[b[c]];
                }
                (void 0 === b || r.isEmptyObject(d)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando]);
            }
        },
        hasData: function(a) {
            var b = a[this.expando];
            return void 0 !== b && !r.isEmptyObject(b);
        }
    };
    var W = new V(), X = new V(), Y = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Z = /[A-Z]/g;
    function $(a) {
        return "true" === a || "false" !== a && ("null" === a ? null : a === +a + "" ? +a : Y.test(a) ? JSON.parse(a) : a);
    }
    function _(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType) if (d = "data-" + b.replace(Z, "-$&").toLowerCase(), 
        c = a.getAttribute(d), "string" == typeof c) {
            try {
                c = $(c);
            } catch (e) {}
            X.set(a, b, c);
        } else c = void 0;
        return c;
    }
    r.extend({
        hasData: function(a) {
            return X.hasData(a) || W.hasData(a);
        },
        data: function(a, b, c) {
            return X.access(a, b, c);
        },
        removeData: function(a, b) {
            X.remove(a, b);
        },
        _data: function(a, b, c) {
            return W.access(a, b, c);
        },
        _removeData: function(a, b) {
            W.remove(a, b);
        }
    }), r.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0], g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = X.get(f), 1 === f.nodeType && !W.get(f, "hasDataAttrs"))) {
                    c = g.length;
                    while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = r.camelCase(d.slice(5)), 
                    _(f, d, e[d])));
                    W.set(f, "hasDataAttrs", !0);
                }
                return e;
            }
            return "object" == typeof a ? this.each(function() {
                X.set(this, a);
            }) : T(this, function(b) {
                var c;
                if (f && void 0 === b) {
                    if (c = X.get(f, a), void 0 !== c) return c;
                    if (c = _(f, a), void 0 !== c) return c;
                } else this.each(function() {
                    X.set(this, a, b);
                });
            }, null, b, arguments.length > 1, null, !0);
        },
        removeData: function(a) {
            return this.each(function() {
                X.remove(this, a);
            });
        }
    }), r.extend({
        queue: function(a, b, c) {
            var d;
            if (a) return b = (b || "fx") + "queue", d = W.get(a, b), c && (!d || Array.isArray(c) ? d = W.access(a, b, r.makeArray(c)) : d.push(c)), 
            d || [];
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = r.queue(a, b), d = c.length, e = c.shift(), f = r._queueHooks(a, b), g = function() {
                r.dequeue(a, b);
            };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), 
            delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire();
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return W.get(a, c) || W.access(a, c, {
                empty: r.Callbacks("once memory").add(function() {
                    W.remove(a, [ b + "queue", c ]);
                })
            });
        }
    }), r.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? r.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = r.queue(this, a, b);
                r._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && r.dequeue(this, a);
            });
        },
        dequeue: function(a) {
            return this.each(function() {
                r.dequeue(this, a);
            });
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", []);
        },
        promise: function(a, b) {
            var c, d = 1, e = r.Deferred(), f = this, g = this.length, h = function() {
                --d || e.resolveWith(f, [ f ]);
            };
            "string" != typeof a && (b = a, a = void 0), a = a || "fx";
            while (g--) c = W.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b);
        }
    });
    var aa = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, ba = new RegExp("^(?:([+-])=|)(" + aa + ")([a-z%]*)$", "i"), ca = [ "Top", "Right", "Bottom", "Left" ], da = function(a, b) {
        return a = b || a, "none" === a.style.display || "" === a.style.display && r.contains(a.ownerDocument, a) && "none" === r.css(a, "display");
    }, ea = function(a, b, c, d) {
        var e, f, g = {};
        for (f in b) g[f] = a.style[f], a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b) a.style[f] = g[f];
        return e;
    };
    function fa(a, b, c, d) {
        var e, f = 1, g = 20, h = d ? function() {
            return d.cur();
        } : function() {
            return r.css(a, b, "");
        }, i = h(), j = c && c[3] || (r.cssNumber[b] ? "" : "px"), k = (r.cssNumber[b] || "px" !== j && +i) && ba.exec(r.css(a, b));
        if (k && k[3] !== j) {
            j = j || k[3], c = c || [], k = +i || 1;
            do {
                f = f || ".5", k /= f, r.style(a, b, k + j);
            } while (f !== (f = h() / i) && 1 !== f && --g);
        }
        return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, 
        d.start = k, d.end = e)), e;
    }
    var ga = {};
    function ha(a) {
        var b, c = a.ownerDocument, d = a.nodeName, e = ga[d];
        return e ? e : (b = c.body.appendChild(c.createElement(d)), e = r.css(b, "display"), 
        b.parentNode.removeChild(b), "none" === e && (e = "block"), ga[d] = e, e);
    }
    function ia(a, b) {
        for (var c, d, e = [], f = 0, g = a.length; f < g; f++) d = a[f], d.style && (c = d.style.display, 
        b ? ("none" === c && (e[f] = W.get(d, "display") || null, e[f] || (d.style.display = "")), 
        "" === d.style.display && da(d) && (e[f] = ha(d))) : "none" !== c && (e[f] = "none", 
        W.set(d, "display", c)));
        for (f = 0; f < g; f++) null != e[f] && (a[f].style.display = e[f]);
        return a;
    }
    r.fn.extend({
        show: function() {
            return ia(this, !0);
        },
        hide: function() {
            return ia(this);
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                da(this) ? r(this).show() : r(this).hide();
            });
        }
    });
    var ja = /^(?:checkbox|radio)$/i, ka = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i, la = /^$|\/(?:java|ecma)script/i, ma = {
        option: [ 1, "<select multiple='multiple'>", "</select>" ],
        thead: [ 1, "<table>", "</table>" ],
        col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
        tr: [ 2, "<table><tbody>", "</tbody></table>" ],
        td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
        _default: [ 0, "", "" ]
    };
    ma.optgroup = ma.option, ma.tbody = ma.tfoot = ma.colgroup = ma.caption = ma.thead, 
    ma.th = ma.td;
    function na(a, b) {
        var c;
        return c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [], 
        void 0 === b || b && B(a, b) ? r.merge([ a ], c) : c;
    }
    function oa(a, b) {
        for (var c = 0, d = a.length; c < d; c++) W.set(a[c], "globalEval", !b || W.get(b[c], "globalEval"));
    }
    var pa = /<|&#?\w+;/;
    function qa(a, b, c, d, e) {
        for (var f, g, h, i, j, k, l = b.createDocumentFragment(), m = [], n = 0, o = a.length; n < o; n++) if (f = a[n], 
        f || 0 === f) if ("object" === r.type(f)) r.merge(m, f.nodeType ? [ f ] : f); else if (pa.test(f)) {
            g = g || l.appendChild(b.createElement("div")), h = (ka.exec(f) || [ "", "" ])[1].toLowerCase(), 
            i = ma[h] || ma._default, g.innerHTML = i[1] + r.htmlPrefilter(f) + i[2], k = i[0];
            while (k--) g = g.lastChild;
            r.merge(m, g.childNodes), g = l.firstChild, g.textContent = "";
        } else m.push(b.createTextNode(f));
        l.textContent = "", n = 0;
        while (f = m[n++]) if (d && r.inArray(f, d) > -1) e && e.push(f); else if (j = r.contains(f.ownerDocument, f), 
        g = na(l.appendChild(f), "script"), j && oa(g), c) {
            k = 0;
            while (f = g[k++]) la.test(f.type || "") && c.push(f);
        }
        return l;
    }
    !function() {
        var a = d.createDocumentFragment(), b = a.appendChild(d.createElement("div")), c = d.createElement("input");
        c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), 
        b.appendChild(c), o.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, 
        b.innerHTML = "<textarea>x</textarea>", o.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue;
    }();
    var ra = d.documentElement, sa = /^key/, ta = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, ua = /^([^.]*)(?:\.(.+)|)/;
    function va() {
        return !0;
    }
    function wa() {
        return !1;
    }
    function xa() {
        try {
            return d.activeElement;
        } catch (a) {}
    }
    function ya(a, b, c, d, e, f) {
        var g, h;
        if ("object" == typeof b) {
            "string" != typeof c && (d = d || c, c = void 0);
            for (h in b) ya(a, h, c, d, b[h], f);
            return a;
        }
        if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, 
        d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = wa; else if (!e) return a;
        return 1 === f && (g = e, e = function(a) {
            return r().off(a), g.apply(this, arguments);
        }, e.guid = g.guid || (g.guid = r.guid++)), a.each(function() {
            r.event.add(this, b, e, d, c);
        });
    }
    r.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = W.get(a);
            if (q) {
                c.handler && (f = c, c = f.handler, e = f.selector), e && r.find.matchesSelector(ra, e), 
                c.guid || (c.guid = r.guid++), (i = q.events) || (i = q.events = {}), (g = q.handle) || (g = q.handle = function(b) {
                    return "undefined" != typeof r && r.event.triggered !== b.type ? r.event.dispatch.apply(a, arguments) : void 0;
                }), b = (b || "").match(L) || [ "" ], j = b.length;
                while (j--) h = ua.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), 
                n && (l = r.event.special[n] || {}, n = (e ? l.delegateType : l.bindType) || n, 
                l = r.event.special[n] || {}, k = r.extend({
                    type: n,
                    origType: p,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && r.expr.match.needsContext.test(e),
                    namespace: o.join(".")
                }, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, o, g) !== !1 || a.addEventListener && a.addEventListener(n, g)), 
                l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), 
                r.event.global[n] = !0);
            }
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = W.hasData(a) && W.get(a);
            if (q && (i = q.events)) {
                b = (b || "").match(L) || [ "" ], j = b.length;
                while (j--) if (h = ua.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), 
                n) {
                    l = r.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], 
                    h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;
                    while (f--) k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), 
                    k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                    g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || r.removeEvent(a, n, q.handle), 
                    delete i[n]);
                } else for (n in i) r.event.remove(a, n + b[j], c, d, !0);
                r.isEmptyObject(i) && W.remove(a, "handle events");
            }
        },
        dispatch: function(a) {
            var b = r.event.fix(a), c, d, e, f, g, h, i = new Array(arguments.length), j = (W.get(this, "events") || {})[b.type] || [], k = r.event.special[b.type] || {};
            for (i[0] = b, c = 1; c < arguments.length; c++) i[c] = arguments[c];
            if (b.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, b) !== !1) {
                h = r.event.handlers.call(this, b, j), c = 0;
                while ((f = h[c++]) && !b.isPropagationStopped()) {
                    b.currentTarget = f.elem, d = 0;
                    while ((g = f.handlers[d++]) && !b.isImmediatePropagationStopped()) b.rnamespace && !b.rnamespace.test(g.namespace) || (b.handleObj = g, 
                    b.data = g.data, e = ((r.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), 
                    void 0 !== e && (b.result = e) === !1 && (b.preventDefault(), b.stopPropagation()));
                }
                return k.postDispatch && k.postDispatch.call(this, b), b.result;
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g, h = [], i = b.delegateCount, j = a.target;
            if (i && j.nodeType && !("click" === a.type && a.button >= 1)) for (;j !== this; j = j.parentNode || this) if (1 === j.nodeType && ("click" !== a.type || j.disabled !== !0)) {
                for (f = [], g = {}, c = 0; c < i; c++) d = b[c], e = d.selector + " ", void 0 === g[e] && (g[e] = d.needsContext ? r(e, this).index(j) > -1 : r.find(e, this, null, [ j ]).length), 
                g[e] && f.push(d);
                f.length && h.push({
                    elem: j,
                    handlers: f
                });
            }
            return j = this, i < b.length && h.push({
                elem: j,
                handlers: b.slice(i)
            }), h;
        },
        addProp: function(a, b) {
            Object.defineProperty(r.Event.prototype, a, {
                enumerable: !0,
                configurable: !0,
                get: r.isFunction(b) ? function() {
                    if (this.originalEvent) return b(this.originalEvent);
                } : function() {
                    if (this.originalEvent) return this.originalEvent[a];
                },
                set: function(b) {
                    Object.defineProperty(this, a, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: b
                    });
                }
            });
        },
        fix: function(a) {
            return a[r.expando] ? a : new r.Event(a);
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== xa() && this.focus) return this.focus(), !1;
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === xa() && this.blur) return this.blur(), !1;
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && B(this, "input")) return this.click(), 
                    !1;
                },
                _default: function(a) {
                    return B(a.target, "a");
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result);
                }
            }
        }
    }, r.removeEvent = function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c);
    }, r.Event = function(a, b) {
        return this instanceof r.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, 
        this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? va : wa, 
        this.target = a.target && 3 === a.target.nodeType ? a.target.parentNode : a.target, 
        this.currentTarget = a.currentTarget, this.relatedTarget = a.relatedTarget) : this.type = a, 
        b && r.extend(this, b), this.timeStamp = a && a.timeStamp || r.now(), void (this[r.expando] = !0)) : new r.Event(a, b);
    }, r.Event.prototype = {
        constructor: r.Event,
        isDefaultPrevented: wa,
        isPropagationStopped: wa,
        isImmediatePropagationStopped: wa,
        isSimulated: !1,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = va, a && !this.isSimulated && a.preventDefault();
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = va, a && !this.isSimulated && a.stopPropagation();
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = va, a && !this.isSimulated && a.stopImmediatePropagation(), 
            this.stopPropagation();
        }
    }, r.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(a) {
            var b = a.button;
            return null == a.which && sa.test(a.type) ? null != a.charCode ? a.charCode : a.keyCode : !a.which && void 0 !== b && ta.test(a.type) ? 1 & b ? 1 : 2 & b ? 3 : 4 & b ? 2 : 0 : a.which;
        }
    }, r.event.addProp), r.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        r.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this, e = a.relatedTarget, f = a.handleObj;
                return e && (e === d || r.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), 
                a.type = b), c;
            }
        };
    }), r.fn.extend({
        on: function(a, b, c, d) {
            return ya(this, a, b, c, d);
        },
        one: function(a, b, c, d) {
            return ya(this, a, b, c, d, 1);
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, r(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), 
            this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this;
            }
            return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = wa), 
            this.each(function() {
                r.event.remove(this, a, c, b);
            });
        }
    });
    var za = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi, Aa = /<script|<style|<link/i, Ba = /checked\s*(?:[^=]|=\s*.checked.)/i, Ca = /^true\/(.*)/, Da = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function Ea(a, b) {
        return B(a, "table") && B(11 !== b.nodeType ? b : b.firstChild, "tr") ? r(">tbody", a)[0] || a : a;
    }
    function Fa(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a;
    }
    function Ga(a) {
        var b = Ca.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a;
    }
    function Ha(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (W.hasData(a) && (f = W.access(a), g = W.set(b, f), j = f.events)) {
                delete g.handle, g.events = {};
                for (e in j) for (c = 0, d = j[e].length; c < d; c++) r.event.add(b, e, j[e][c]);
            }
            X.hasData(a) && (h = X.access(a), i = r.extend({}, h), X.set(b, i));
        }
    }
    function Ia(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && ja.test(a.type) ? b.checked = a.checked : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue);
    }
    function Ja(a, b, c, d) {
        b = g.apply([], b);
        var e, f, h, i, j, k, l = 0, m = a.length, n = m - 1, q = b[0], s = r.isFunction(q);
        if (s || m > 1 && "string" == typeof q && !o.checkClone && Ba.test(q)) return a.each(function(e) {
            var f = a.eq(e);
            s && (b[0] = q.call(this, e, f.html())), Ja(f, b, c, d);
        });
        if (m && (e = qa(b, a[0].ownerDocument, !1, a, d), f = e.firstChild, 1 === e.childNodes.length && (e = f), 
        f || d)) {
            for (h = r.map(na(e, "script"), Fa), i = h.length; l < m; l++) j = e, l !== n && (j = r.clone(j, !0, !0), 
            i && r.merge(h, na(j, "script"))), c.call(a[l], j, l);
            if (i) for (k = h[h.length - 1].ownerDocument, r.map(h, Ga), l = 0; l < i; l++) j = h[l], 
            la.test(j.type || "") && !W.access(j, "globalEval") && r.contains(k, j) && (j.src ? r._evalUrl && r._evalUrl(j.src) : p(j.textContent.replace(Da, ""), k));
        }
        return a;
    }
    function Ka(a, b, c) {
        for (var d, e = b ? r.filter(b, a) : a, f = 0; null != (d = e[f]); f++) c || 1 !== d.nodeType || r.cleanData(na(d)), 
        d.parentNode && (c && r.contains(d.ownerDocument, d) && oa(na(d, "script")), d.parentNode.removeChild(d));
        return a;
    }
    r.extend({
        htmlPrefilter: function(a) {
            return a.replace(za, "<$1></$2>");
        },
        clone: function(a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0), i = r.contains(a.ownerDocument, a);
            if (!(o.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || r.isXMLDoc(a))) for (g = na(h), 
            f = na(a), d = 0, e = f.length; d < e; d++) Ia(f[d], g[d]);
            if (b) if (c) for (f = f || na(a), g = g || na(h), d = 0, e = f.length; d < e; d++) Ha(f[d], g[d]); else Ha(a, h);
            return g = na(h, "script"), g.length > 0 && oa(g, !i && na(a, "script")), h;
        },
        cleanData: function(a) {
            for (var b, c, d, e = r.event.special, f = 0; void 0 !== (c = a[f]); f++) if (U(c)) {
                if (b = c[W.expando]) {
                    if (b.events) for (d in b.events) e[d] ? r.event.remove(c, d) : r.removeEvent(c, d, b.handle);
                    c[W.expando] = void 0;
                }
                c[X.expando] && (c[X.expando] = void 0);
            }
        }
    }), r.fn.extend({
        detach: function(a) {
            return Ka(this, a, !0);
        },
        remove: function(a) {
            return Ka(this, a);
        },
        text: function(a) {
            return T(this, function(a) {
                return void 0 === a ? r.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a);
                });
            }, null, a, arguments.length);
        },
        append: function() {
            return Ja(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = Ea(this, a);
                    b.appendChild(a);
                }
            });
        },
        prepend: function() {
            return Ja(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = Ea(this, a);
                    b.insertBefore(a, b.firstChild);
                }
            });
        },
        before: function() {
            return Ja(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this);
            });
        },
        after: function() {
            return Ja(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
            });
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (r.cleanData(na(a, !1)), 
            a.textContent = "");
            return this;
        },
        clone: function(a, b) {
            return a = null != a && a, b = null == b ? a : b, this.map(function() {
                return r.clone(this, a, b);
            });
        },
        html: function(a) {
            return T(this, function(a) {
                var b = this[0] || {}, c = 0, d = this.length;
                if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
                if ("string" == typeof a && !Aa.test(a) && !ma[(ka.exec(a) || [ "", "" ])[1].toLowerCase()]) {
                    a = r.htmlPrefilter(a);
                    try {
                        for (;c < d; c++) b = this[c] || {}, 1 === b.nodeType && (r.cleanData(na(b, !1)), 
                        b.innerHTML = a);
                        b = 0;
                    } catch (e) {}
                }
                b && this.empty().append(a);
            }, null, a, arguments.length);
        },
        replaceWith: function() {
            var a = [];
            return Ja(this, arguments, function(b) {
                var c = this.parentNode;
                r.inArray(this, a) < 0 && (r.cleanData(na(this)), c && c.replaceChild(b, this));
            }, a);
        }
    }), r.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        r.fn[a] = function(a) {
            for (var c, d = [], e = r(a), f = e.length - 1, g = 0; g <= f; g++) c = g === f ? this : this.clone(!0), 
            r(e[g])[b](c), h.apply(d, c.get());
            return this.pushStack(d);
        };
    });
    var La = /^margin/, Ma = new RegExp("^(" + aa + ")(?!px)[a-z%]+$", "i"), Na = function(b) {
        var c = b.ownerDocument.defaultView;
        return c && c.opener || (c = a), c.getComputedStyle(b);
    };
    !function() {
        function b() {
            if (i) {
                i.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", 
                i.innerHTML = "", ra.appendChild(h);
                var b = a.getComputedStyle(i);
                c = "1%" !== b.top, g = "2px" === b.marginLeft, e = "4px" === b.width, i.style.marginRight = "50%", 
                f = "4px" === b.marginRight, ra.removeChild(h), i = null;
            }
        }
        var c, e, f, g, h = d.createElement("div"), i = d.createElement("div");
        i.style && (i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", 
        o.clearCloneStyle = "content-box" === i.style.backgroundClip, h.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", 
        h.appendChild(i), r.extend(o, {
            pixelPosition: function() {
                return b(), c;
            },
            boxSizingReliable: function() {
                return b(), e;
            },
            pixelMarginRight: function() {
                return b(), f;
            },
            reliableMarginLeft: function() {
                return b(), g;
            }
        }));
    }();
    function Oa(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Na(a), c && (g = c.getPropertyValue(b) || c[b], "" !== g || r.contains(a.ownerDocument, a) || (g = r.style(a, b)), 
        !o.pixelMarginRight() && Ma.test(g) && La.test(b) && (d = h.width, e = h.minWidth, 
        f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, 
        h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g;
    }
    function Pa(a, b) {
        return {
            get: function() {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments);
            }
        };
    }
    var Qa = /^(none|table(?!-c[ea]).+)/, Ra = /^--/, Sa = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, Ta = {
        letterSpacing: "0",
        fontWeight: "400"
    }, Ua = [ "Webkit", "Moz", "ms" ], Va = d.createElement("div").style;
    function Wa(a) {
        if (a in Va) return a;
        var b = a[0].toUpperCase() + a.slice(1), c = Ua.length;
        while (c--) if (a = Ua[c] + b, a in Va) return a;
    }
    function Xa(a) {
        var b = r.cssProps[a];
        return b || (b = r.cssProps[a] = Wa(a) || a), b;
    }
    function Ya(a, b, c) {
        var d = ba.exec(b);
        return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b;
    }
    function Za(a, b, c, d, e) {
        var f, g = 0;
        for (f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0; f < 4; f += 2) "margin" === c && (g += r.css(a, c + ca[f], !0, e)), 
        d ? ("content" === c && (g -= r.css(a, "padding" + ca[f], !0, e)), "margin" !== c && (g -= r.css(a, "border" + ca[f] + "Width", !0, e))) : (g += r.css(a, "padding" + ca[f], !0, e), 
        "padding" !== c && (g += r.css(a, "border" + ca[f] + "Width", !0, e)));
        return g;
    }
    function $a(a, b, c) {
        var d, e = Na(a), f = Oa(a, b, e), g = "border-box" === r.css(a, "boxSizing", !1, e);
        return Ma.test(f) ? f : (d = g && (o.boxSizingReliable() || f === a.style[b]), "auto" === f && (f = a["offset" + b[0].toUpperCase() + b.slice(1)]), 
        f = parseFloat(f) || 0, f + Za(a, b, c || (g ? "border" : "content"), d, e) + "px");
    }
    r.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = Oa(a, "opacity");
                        return "" === c ? "1" : c;
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: "cssFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = r.camelCase(b), i = Ra.test(b), j = a.style;
                return i || (b = Xa(h)), g = r.cssHooks[b] || r.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : j[b] : (f = typeof c, 
                "string" === f && (e = ba.exec(c)) && e[1] && (c = fa(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (r.cssNumber[h] ? "" : "px")), 
                o.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (j[b] = "inherit"), 
                g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i ? j.setProperty(b, c) : j[b] = c)), 
                void 0);
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = r.camelCase(b), i = Ra.test(b);
            return i || (b = Xa(h)), g = r.cssHooks[b] || r.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), 
            void 0 === e && (e = Oa(a, b, d)), "normal" === e && b in Ta && (e = Ta[b]), "" === c || c ? (f = parseFloat(e), 
            c === !0 || isFinite(f) ? f || 0 : e) : e;
        }
    }), r.each([ "height", "width" ], function(a, b) {
        r.cssHooks[b] = {
            get: function(a, c, d) {
                if (c) return !Qa.test(r.css(a, "display")) || a.getClientRects().length && a.getBoundingClientRect().width ? $a(a, b, d) : ea(a, Sa, function() {
                    return $a(a, b, d);
                });
            },
            set: function(a, c, d) {
                var e, f = d && Na(a), g = d && Za(a, b, d, "border-box" === r.css(a, "boxSizing", !1, f), f);
                return g && (e = ba.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c, c = r.css(a, b)), 
                Ya(a, c, g);
            }
        };
    }), r.cssHooks.marginLeft = Pa(o.reliableMarginLeft, function(a, b) {
        if (b) return (parseFloat(Oa(a, "marginLeft")) || a.getBoundingClientRect().left - ea(a, {
            marginLeft: 0
        }, function() {
            return a.getBoundingClientRect().left;
        })) + "px";
    }), r.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        r.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [ c ]; d < 4; d++) e[a + ca[d] + b] = f[d] || f[d - 2] || f[0];
                return e;
            }
        }, La.test(a) || (r.cssHooks[a + b].set = Ya);
    }), r.fn.extend({
        css: function(a, b) {
            return T(this, function(a, b, c) {
                var d, e, f = {}, g = 0;
                if (Array.isArray(b)) {
                    for (d = Na(a), e = b.length; g < e; g++) f[b[g]] = r.css(a, b[g], !1, d);
                    return f;
                }
                return void 0 !== c ? r.style(a, b, c) : r.css(a, b);
            }, a, b, arguments.length > 1);
        }
    });
    function _a(a, b, c, d, e) {
        return new _a.prototype.init(a, b, c, d, e);
    }
    r.Tween = _a, _a.prototype = {
        constructor: _a,
        init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || r.easing._default, this.options = b, 
            this.start = this.now = this.cur(), this.end = d, this.unit = f || (r.cssNumber[c] ? "" : "px");
        },
        cur: function() {
            var a = _a.propHooks[this.prop];
            return a && a.get ? a.get(this) : _a.propHooks._default.get(this);
        },
        run: function(a) {
            var b, c = _a.propHooks[this.prop];
            return this.options.duration ? this.pos = b = r.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, 
            this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), 
            c && c.set ? c.set(this) : _a.propHooks._default.set(this), this;
        }
    }, _a.prototype.init.prototype = _a.prototype, _a.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = r.css(a.elem, a.prop, ""), 
                b && "auto" !== b ? b : 0);
            },
            set: function(a) {
                r.fx.step[a.prop] ? r.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[r.cssProps[a.prop]] && !r.cssHooks[a.prop] ? a.elem[a.prop] = a.now : r.style(a.elem, a.prop, a.now + a.unit);
            }
        }
    }, _a.propHooks.scrollTop = _a.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
        }
    }, r.easing = {
        linear: function(a) {
            return a;
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2;
        },
        _default: "swing"
    }, r.fx = _a.prototype.init, r.fx.step = {};
    var ab, bb, cb = /^(?:toggle|show|hide)$/, db = /queueHooks$/;
    function eb() {
        bb && (d.hidden === !1 && a.requestAnimationFrame ? a.requestAnimationFrame(eb) : a.setTimeout(eb, r.fx.interval), 
        r.fx.tick());
    }
    function fb() {
        return a.setTimeout(function() {
            ab = void 0;
        }), ab = r.now();
    }
    function gb(a, b) {
        var c, d = 0, e = {
            height: a
        };
        for (b = b ? 1 : 0; d < 4; d += 2 - b) c = ca[d], e["margin" + c] = e["padding" + c] = a;
        return b && (e.opacity = e.width = a), e;
    }
    function hb(a, b, c) {
        for (var d, e = (kb.tweeners[b] || []).concat(kb.tweeners["*"]), f = 0, g = e.length; f < g; f++) if (d = e[f].call(c, b, a)) return d;
    }
    function ib(a, b, c) {
        var d, e, f, g, h, i, j, k, l = "width" in b || "height" in b, m = this, n = {}, o = a.style, p = a.nodeType && da(a), q = W.get(a, "fxshow");
        c.queue || (g = r._queueHooks(a, "fx"), null == g.unqueued && (g.unqueued = 0, h = g.empty.fire, 
        g.empty.fire = function() {
            g.unqueued || h();
        }), g.unqueued++, m.always(function() {
            m.always(function() {
                g.unqueued--, r.queue(a, "fx").length || g.empty.fire();
            });
        }));
        for (d in b) if (e = b[d], cb.test(e)) {
            if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
                if ("show" !== e || !q || void 0 === q[d]) continue;
                p = !0;
            }
            n[d] = q && q[d] || r.style(a, d);
        }
        if (i = !r.isEmptyObject(b), i || !r.isEmptyObject(n)) {
            l && 1 === a.nodeType && (c.overflow = [ o.overflow, o.overflowX, o.overflowY ], 
            j = q && q.display, null == j && (j = W.get(a, "display")), k = r.css(a, "display"), 
            "none" === k && (j ? k = j : (ia([ a ], !0), j = a.style.display || j, k = r.css(a, "display"), 
            ia([ a ]))), ("inline" === k || "inline-block" === k && null != j) && "none" === r.css(a, "float") && (i || (m.done(function() {
                o.display = j;
            }), null == j && (k = o.display, j = "none" === k ? "" : k)), o.display = "inline-block")), 
            c.overflow && (o.overflow = "hidden", m.always(function() {
                o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2];
            })), i = !1;
            for (d in n) i || (q ? "hidden" in q && (p = q.hidden) : q = W.access(a, "fxshow", {
                display: j
            }), f && (q.hidden = !p), p && ia([ a ], !0), m.done(function() {
                p || ia([ a ]), W.remove(a, "fxshow");
                for (d in n) r.style(a, d, n[d]);
            })), i = hb(p ? q[d] : 0, d, m), d in q || (q[d] = i.start, p && (i.end = i.start, 
            i.start = 0));
        }
    }
    function jb(a, b) {
        var c, d, e, f, g;
        for (c in a) if (d = r.camelCase(c), e = b[d], f = a[c], Array.isArray(f) && (e = f[1], 
        f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = r.cssHooks[d], g && "expand" in g) {
            f = g.expand(f), delete a[d];
            for (c in f) c in a || (a[c] = f[c], b[c] = e);
        } else b[d] = e;
    }
    function kb(a, b, c) {
        var d, e, f = 0, g = kb.prefilters.length, h = r.Deferred().always(function() {
            delete i.elem;
        }), i = function() {
            if (e) return !1;
            for (var b = ab || fb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; g < i; g++) j.tweens[g].run(f);
            return h.notifyWith(a, [ j, f, c ]), f < 1 && i ? c : (i || h.notifyWith(a, [ j, 1, 0 ]), 
            h.resolveWith(a, [ j ]), !1);
        }, j = h.promise({
            elem: a,
            props: r.extend({}, b),
            opts: r.extend(!0, {
                specialEasing: {},
                easing: r.easing._default
            }, c),
            originalProperties: b,
            originalOptions: c,
            startTime: ab || fb(),
            duration: c.duration,
            tweens: [],
            createTween: function(b, c) {
                var d = r.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                return j.tweens.push(d), d;
            },
            stop: function(b) {
                var c = 0, d = b ? j.tweens.length : 0;
                if (e) return this;
                for (e = !0; c < d; c++) j.tweens[c].run(1);
                return b ? (h.notifyWith(a, [ j, 1, 0 ]), h.resolveWith(a, [ j, b ])) : h.rejectWith(a, [ j, b ]), 
                this;
            }
        }), k = j.props;
        for (jb(k, j.opts.specialEasing); f < g; f++) if (d = kb.prefilters[f].call(j, a, k, j.opts)) return r.isFunction(d.stop) && (r._queueHooks(j.elem, j.opts.queue).stop = r.proxy(d.stop, d)), 
        d;
        return r.map(k, hb, j), r.isFunction(j.opts.start) && j.opts.start.call(a, j), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always), 
        r.fx.timer(r.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j;
    }
    r.Animation = r.extend(kb, {
        tweeners: {
            "*": [ function(a, b) {
                var c = this.createTween(a, b);
                return fa(c.elem, a, ba.exec(b), c), c;
            } ]
        },
        tweener: function(a, b) {
            r.isFunction(a) ? (b = a, a = [ "*" ]) : a = a.match(L);
            for (var c, d = 0, e = a.length; d < e; d++) c = a[d], kb.tweeners[c] = kb.tweeners[c] || [], 
            kb.tweeners[c].unshift(b);
        },
        prefilters: [ ib ],
        prefilter: function(a, b) {
            b ? kb.prefilters.unshift(a) : kb.prefilters.push(a);
        }
    }), r.speed = function(a, b, c) {
        var d = a && "object" == typeof a ? r.extend({}, a) : {
            complete: c || !c && b || r.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !r.isFunction(b) && b
        };
        return r.fx.off ? d.duration = 0 : "number" != typeof d.duration && (d.duration in r.fx.speeds ? d.duration = r.fx.speeds[d.duration] : d.duration = r.fx.speeds._default), 
        null != d.queue && d.queue !== !0 || (d.queue = "fx"), d.old = d.complete, d.complete = function() {
            r.isFunction(d.old) && d.old.call(this), d.queue && r.dequeue(this, d.queue);
        }, d;
    }, r.fn.extend({
        fadeTo: function(a, b, c, d) {
            return this.filter(da).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d);
        },
        animate: function(a, b, c, d) {
            var e = r.isEmptyObject(a), f = r.speed(b, c, d), g = function() {
                var b = kb(this, r.extend({}, a), f);
                (e || W.get(this, "finish")) && b.stop(!0);
            };
            return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g);
        },
        stop: function(a, b, c) {
            var d = function(a) {
                var b = a.stop;
                delete a.stop, b(c);
            };
            return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), 
            this.each(function() {
                var b = !0, e = null != a && a + "queueHooks", f = r.timers, g = W.get(this);
                if (e) g[e] && g[e].stop && d(g[e]); else for (e in g) g[e] && g[e].stop && db.test(e) && d(g[e]);
                for (e = f.length; e--; ) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), 
                b = !1, f.splice(e, 1));
                !b && c || r.dequeue(this, a);
            });
        },
        finish: function(a) {
            return a !== !1 && (a = a || "fx"), this.each(function() {
                var b, c = W.get(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = r.timers, g = d ? d.length : 0;
                for (c.finish = !0, r.queue(this, a, []), e && e.stop && e.stop.call(this, !0), 
                b = f.length; b--; ) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), 
                f.splice(b, 1));
                for (b = 0; b < g; b++) d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish;
            });
        }
    }), r.each([ "toggle", "show", "hide" ], function(a, b) {
        var c = r.fn[b];
        r.fn[b] = function(a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(gb(b, !0), a, d, e);
        };
    }), r.each({
        slideDown: gb("show"),
        slideUp: gb("hide"),
        slideToggle: gb("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a, b) {
        r.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d);
        };
    }), r.timers = [], r.fx.tick = function() {
        var a, b = 0, c = r.timers;
        for (ab = r.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);
        c.length || r.fx.stop(), ab = void 0;
    }, r.fx.timer = function(a) {
        r.timers.push(a), r.fx.start();
    }, r.fx.interval = 13, r.fx.start = function() {
        bb || (bb = !0, eb());
    }, r.fx.stop = function() {
        bb = null;
    }, r.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, r.fn.delay = function(b, c) {
        return b = r.fx ? r.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function(c, d) {
            var e = a.setTimeout(c, b);
            d.stop = function() {
                a.clearTimeout(e);
            };
        });
    }, function() {
        var a = d.createElement("input"), b = d.createElement("select"), c = b.appendChild(d.createElement("option"));
        a.type = "checkbox", o.checkOn = "" !== a.value, o.optSelected = c.selected, a = d.createElement("input"), 
        a.value = "t", a.type = "radio", o.radioValue = "t" === a.value;
    }();
    var lb, mb = r.expr.attrHandle;
    r.fn.extend({
        attr: function(a, b) {
            return T(this, r.attr, a, b, arguments.length > 1);
        },
        removeAttr: function(a) {
            return this.each(function() {
                r.removeAttr(this, a);
            });
        }
    }), r.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? r.prop(a, b, c) : (1 === f && r.isXMLDoc(a) || (e = r.attrHooks[b.toLowerCase()] || (r.expr.match.bool.test(b) ? lb : void 0)), 
            void 0 !== c ? null === c ? void r.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), 
            c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = r.find.attr(a, b), 
            null == d ? void 0 : d));
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!o.radioValue && "radio" === b && B(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b;
                    }
                }
            }
        },
        removeAttr: function(a, b) {
            var c, d = 0, e = b && b.match(L);
            if (e && 1 === a.nodeType) while (c = e[d++]) a.removeAttribute(c);
        }
    }), lb = {
        set: function(a, b, c) {
            return b === !1 ? r.removeAttr(a, c) : a.setAttribute(c, c), c;
        }
    }, r.each(r.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = mb[b] || r.find.attr;
        mb[b] = function(a, b, d) {
            var e, f, g = b.toLowerCase();
            return d || (f = mb[g], mb[g] = e, e = null != c(a, b, d) ? g : null, mb[g] = f), 
            e;
        };
    });
    var nb = /^(?:input|select|textarea|button)$/i, ob = /^(?:a|area)$/i;
    r.fn.extend({
        prop: function(a, b) {
            return T(this, r.prop, a, b, arguments.length > 1);
        },
        removeProp: function(a) {
            return this.each(function() {
                delete this[r.propFix[a] || a];
            });
        }
    }), r.extend({
        prop: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return 1 === f && r.isXMLDoc(a) || (b = r.propFix[b] || b, 
            e = r.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b];
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var b = r.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : nb.test(a.nodeName) || ob.test(a.nodeName) && a.href ? 0 : -1;
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), o.optSelected || (r.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex, null;
        },
        set: function(a) {
            var b = a.parentNode;
            b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex);
        }
    }), r.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable" ], function() {
        r.propFix[this.toLowerCase()] = this;
    });
    function pb(a) {
        var b = a.match(L) || [];
        return b.join(" ");
    }
    function qb(a) {
        return a.getAttribute && a.getAttribute("class") || "";
    }
    r.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (r.isFunction(a)) return this.each(function(b) {
                r(this).addClass(a.call(this, b, qb(this)));
            });
            if ("string" == typeof a && a) {
                b = a.match(L) || [];
                while (c = this[i++]) if (e = qb(c), d = 1 === c.nodeType && " " + pb(e) + " ") {
                    g = 0;
                    while (f = b[g++]) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
                    h = pb(d), e !== h && c.setAttribute("class", h);
                }
            }
            return this;
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (r.isFunction(a)) return this.each(function(b) {
                r(this).removeClass(a.call(this, b, qb(this)));
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof a && a) {
                b = a.match(L) || [];
                while (c = this[i++]) if (e = qb(c), d = 1 === c.nodeType && " " + pb(e) + " ") {
                    g = 0;
                    while (f = b[g++]) while (d.indexOf(" " + f + " ") > -1) d = d.replace(" " + f + " ", " ");
                    h = pb(d), e !== h && c.setAttribute("class", h);
                }
            }
            return this;
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : r.isFunction(a) ? this.each(function(c) {
                r(this).toggleClass(a.call(this, c, qb(this), b), b);
            }) : this.each(function() {
                var b, d, e, f;
                if ("string" === c) {
                    d = 0, e = r(this), f = a.match(L) || [];
                    while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                } else void 0 !== a && "boolean" !== c || (b = qb(this), b && W.set(this, "__className__", b), 
                this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : W.get(this, "__className__") || ""));
            });
        },
        hasClass: function(a) {
            var b, c, d = 0;
            b = " " + a + " ";
            while (c = this[d++]) if (1 === c.nodeType && (" " + pb(qb(c)) + " ").indexOf(b) > -1) return !0;
            return !1;
        }
    });
    var rb = /\r/g;
    r.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0];
            {
                if (arguments.length) return d = r.isFunction(a), this.each(function(c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, r(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : Array.isArray(e) && (e = r.map(e, function(a) {
                        return null == a ? "" : a + "";
                    })), b = r.valHooks[this.type] || r.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e));
                });
                if (e) return b = r.valHooks[e.type] || r.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, 
                "string" == typeof c ? c.replace(rb, "") : null == c ? "" : c);
            }
        }
    }), r.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = r.find.attr(a, "value");
                    return null != b ? b : pb(r.text(a));
                }
            },
            select: {
                get: function(a) {
                    var b, c, d, e = a.options, f = a.selectedIndex, g = "select-one" === a.type, h = g ? null : [], i = g ? f + 1 : e.length;
                    for (d = f < 0 ? i : g ? f : 0; d < i; d++) if (c = e[d], (c.selected || d === f) && !c.disabled && (!c.parentNode.disabled || !B(c.parentNode, "optgroup"))) {
                        if (b = r(c).val(), g) return b;
                        h.push(b);
                    }
                    return h;
                },
                set: function(a, b) {
                    var c, d, e = a.options, f = r.makeArray(b), g = e.length;
                    while (g--) d = e[g], (d.selected = r.inArray(r.valHooks.option.get(d), f) > -1) && (c = !0);
                    return c || (a.selectedIndex = -1), f;
                }
            }
        }
    }), r.each([ "radio", "checkbox" ], function() {
        r.valHooks[this] = {
            set: function(a, b) {
                if (Array.isArray(b)) return a.checked = r.inArray(r(a).val(), b) > -1;
            }
        }, o.checkOn || (r.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value;
        });
    });
    var sb = /^(?:focusinfocus|focusoutblur)$/;
    r.extend(r.event, {
        trigger: function(b, c, e, f) {
            var g, h, i, j, k, m, n, o = [ e || d ], p = l.call(b, "type") ? b.type : b, q = l.call(b, "namespace") ? b.namespace.split(".") : [];
            if (h = i = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !sb.test(p + r.event.triggered) && (p.indexOf(".") > -1 && (q = p.split("."), 
            p = q.shift(), q.sort()), k = p.indexOf(":") < 0 && "on" + p, b = b[r.expando] ? b : new r.Event(p, "object" == typeof b && b), 
            b.isTrigger = f ? 2 : 3, b.namespace = q.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, 
            b.result = void 0, b.target || (b.target = e), c = null == c ? [ b ] : r.makeArray(c, [ b ]), 
            n = r.event.special[p] || {}, f || !n.trigger || n.trigger.apply(e, c) !== !1)) {
                if (!f && !n.noBubble && !r.isWindow(e)) {
                    for (j = n.delegateType || p, sb.test(j + p) || (h = h.parentNode); h; h = h.parentNode) o.push(h), 
                    i = h;
                    i === (e.ownerDocument || d) && o.push(i.defaultView || i.parentWindow || a);
                }
                g = 0;
                while ((h = o[g++]) && !b.isPropagationStopped()) b.type = g > 1 ? j : n.bindType || p, 
                m = (W.get(h, "events") || {})[b.type] && W.get(h, "handle"), m && m.apply(h, c), 
                m = k && h[k], m && m.apply && U(h) && (b.result = m.apply(h, c), b.result === !1 && b.preventDefault());
                return b.type = p, f || b.isDefaultPrevented() || n._default && n._default.apply(o.pop(), c) !== !1 || !U(e) || k && r.isFunction(e[p]) && !r.isWindow(e) && (i = e[k], 
                i && (e[k] = null), r.event.triggered = p, e[p](), r.event.triggered = void 0, i && (e[k] = i)), 
                b.result;
            }
        },
        simulate: function(a, b, c) {
            var d = r.extend(new r.Event(), c, {
                type: a,
                isSimulated: !0
            });
            r.event.trigger(d, null, b);
        }
    }), r.fn.extend({
        trigger: function(a, b) {
            return this.each(function() {
                r.event.trigger(a, b, this);
            });
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            if (c) return r.event.trigger(a, b, c, !0);
        }
    }), r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(a, b) {
        r.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
        };
    }), r.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a);
        }
    }), o.focusin = "onfocusin" in a, o.focusin || r.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            r.event.simulate(b, a.target, r.event.fix(a));
        };
        r.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this, e = W.access(d, b);
                e || d.addEventListener(a, c, !0), W.access(d, b, (e || 0) + 1);
            },
            teardown: function() {
                var d = this.ownerDocument || this, e = W.access(d, b) - 1;
                e ? W.access(d, b, e) : (d.removeEventListener(a, c, !0), W.remove(d, b));
            }
        };
    });
    var tb = a.location, ub = r.now(), vb = /\?/;
    r.parseXML = function(b) {
        var c;
        if (!b || "string" != typeof b) return null;
        try {
            c = new a.DOMParser().parseFromString(b, "text/xml");
        } catch (d) {
            c = void 0;
        }
        return c && !c.getElementsByTagName("parsererror").length || r.error("Invalid XML: " + b), 
        c;
    };
    var wb = /\[\]$/, xb = /\r?\n/g, yb = /^(?:submit|button|image|reset|file)$/i, zb = /^(?:input|select|textarea|keygen)/i;
    function Ab(a, b, c, d) {
        var e;
        if (Array.isArray(b)) r.each(b, function(b, e) {
            c || wb.test(a) ? d(a, e) : Ab(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d);
        }); else if (c || "object" !== r.type(b)) d(a, b); else for (e in b) Ab(a + "[" + e + "]", b[e], c, d);
    }
    r.param = function(a, b) {
        var c, d = [], e = function(a, b) {
            var c = r.isFunction(b) ? b() : b;
            d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(null == c ? "" : c);
        };
        if (Array.isArray(a) || a.jquery && !r.isPlainObject(a)) r.each(a, function() {
            e(this.name, this.value);
        }); else for (c in a) Ab(c, a[c], b, e);
        return d.join("&");
    }, r.fn.extend({
        serialize: function() {
            return r.param(this.serializeArray());
        },
        serializeArray: function() {
            return this.map(function() {
                var a = r.prop(this, "elements");
                return a ? r.makeArray(a) : this;
            }).filter(function() {
                var a = this.type;
                return this.name && !r(this).is(":disabled") && zb.test(this.nodeName) && !yb.test(a) && (this.checked || !ja.test(a));
            }).map(function(a, b) {
                var c = r(this).val();
                return null == c ? null : Array.isArray(c) ? r.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(xb, "\r\n")
                    };
                }) : {
                    name: b.name,
                    value: c.replace(xb, "\r\n")
                };
            }).get();
        }
    });
    var Bb = /%20/g, Cb = /#.*$/, Db = /([?&])_=[^&]*/, Eb = /^(.*?):[ \t]*([^\r\n]*)$/gm, Fb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Gb = /^(?:GET|HEAD)$/, Hb = /^\/\//, Ib = {}, Jb = {}, Kb = "*/".concat("*"), Lb = d.createElement("a");
    Lb.href = tb.href;
    function Mb(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0, f = b.toLowerCase().match(L) || [];
            if (r.isFunction(c)) while (d = f[e++]) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c);
        };
    }
    function Nb(a, b, c, d) {
        var e = {}, f = a === Jb;
        function g(h) {
            var i;
            return e[h] = !0, r.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), 
                g(j), !1);
            }), i;
        }
        return g(b.dataTypes[0]) || !e["*"] && g("*");
    }
    function Ob(a, b) {
        var c, d, e = r.ajaxSettings.flatOptions || {};
        for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        return d && r.extend(!0, a, d), a;
    }
    function Pb(a, b, c) {
        var d, e, f, g, h = a.contents, i = a.dataTypes;
        while ("*" === i[0]) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
        if (d) for (e in h) if (h[e] && h[e].test(d)) {
            i.unshift(e);
            break;
        }
        if (i[0] in c) f = i[0]; else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) {
                    f = e;
                    break;
                }
                g || (g = e);
            }
            f = f || g;
        }
        if (f) return f !== i[0] && i.unshift(f), c[f];
    }
    function Qb(a, b, c, d) {
        var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
        if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f) if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), 
        i = f, f = k.shift()) if ("*" === f) f = i; else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                break;
            }
            if (g !== !0) if (g && a["throws"]) b = g(b); else try {
                b = g(b);
            } catch (l) {
                return {
                    state: "parsererror",
                    error: g ? l : "No conversion from " + i + " to " + f
                };
            }
        }
        return {
            state: "success",
            data: b
        };
    }
    r.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: tb.href,
            type: "GET",
            isLocal: Fb.test(tb.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Kb,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": r.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? Ob(Ob(a, r.ajaxSettings), b) : Ob(r.ajaxSettings, a);
        },
        ajaxPrefilter: Mb(Ib),
        ajaxTransport: Mb(Jb),
        ajax: function(b, c) {
            "object" == typeof b && (c = b, b = void 0), c = c || {};
            var e, f, g, h, i, j, k, l, m, n, o = r.ajaxSetup({}, c), p = o.context || o, q = o.context && (p.nodeType || p.jquery) ? r(p) : r.event, s = r.Deferred(), t = r.Callbacks("once memory"), u = o.statusCode || {}, v = {}, w = {}, x = "canceled", y = {
                readyState: 0,
                getResponseHeader: function(a) {
                    var b;
                    if (k) {
                        if (!h) {
                            h = {};
                            while (b = Eb.exec(g)) h[b[1].toLowerCase()] = b[2];
                        }
                        b = h[a.toLowerCase()];
                    }
                    return null == b ? null : b;
                },
                getAllResponseHeaders: function() {
                    return k ? g : null;
                },
                setRequestHeader: function(a, b) {
                    return null == k && (a = w[a.toLowerCase()] = w[a.toLowerCase()] || a, v[a] = b), 
                    this;
                },
                overrideMimeType: function(a) {
                    return null == k && (o.mimeType = a), this;
                },
                statusCode: function(a) {
                    var b;
                    if (a) if (k) y.always(a[y.status]); else for (b in a) u[b] = [ u[b], a[b] ];
                    return this;
                },
                abort: function(a) {
                    var b = a || x;
                    return e && e.abort(b), A(0, b), this;
                }
            };
            if (s.promise(y), o.url = ((b || o.url || tb.href) + "").replace(Hb, tb.protocol + "//"), 
            o.type = c.method || c.type || o.method || o.type, o.dataTypes = (o.dataType || "*").toLowerCase().match(L) || [ "" ], 
            null == o.crossDomain) {
                j = d.createElement("a");
                try {
                    j.href = o.url, j.href = j.href, o.crossDomain = Lb.protocol + "//" + Lb.host != j.protocol + "//" + j.host;
                } catch (z) {
                    o.crossDomain = !0;
                }
            }
            if (o.data && o.processData && "string" != typeof o.data && (o.data = r.param(o.data, o.traditional)), 
            Nb(Ib, o, c, y), k) return y;
            l = r.event && o.global, l && 0 === r.active++ && r.event.trigger("ajaxStart"), 
            o.type = o.type.toUpperCase(), o.hasContent = !Gb.test(o.type), f = o.url.replace(Cb, ""), 
            o.hasContent ? o.data && o.processData && 0 === (o.contentType || "").indexOf("application/x-www-form-urlencoded") && (o.data = o.data.replace(Bb, "+")) : (n = o.url.slice(f.length), 
            o.data && (f += (vb.test(f) ? "&" : "?") + o.data, delete o.data), o.cache === !1 && (f = f.replace(Db, "$1"), 
            n = (vb.test(f) ? "&" : "?") + "_=" + ub++ + n), o.url = f + n), o.ifModified && (r.lastModified[f] && y.setRequestHeader("If-Modified-Since", r.lastModified[f]), 
            r.etag[f] && y.setRequestHeader("If-None-Match", r.etag[f])), (o.data && o.hasContent && o.contentType !== !1 || c.contentType) && y.setRequestHeader("Content-Type", o.contentType), 
            y.setRequestHeader("Accept", o.dataTypes[0] && o.accepts[o.dataTypes[0]] ? o.accepts[o.dataTypes[0]] + ("*" !== o.dataTypes[0] ? ", " + Kb + "; q=0.01" : "") : o.accepts["*"]);
            for (m in o.headers) y.setRequestHeader(m, o.headers[m]);
            if (o.beforeSend && (o.beforeSend.call(p, y, o) === !1 || k)) return y.abort();
            if (x = "abort", t.add(o.complete), y.done(o.success), y.fail(o.error), e = Nb(Jb, o, c, y)) {
                if (y.readyState = 1, l && q.trigger("ajaxSend", [ y, o ]), k) return y;
                o.async && o.timeout > 0 && (i = a.setTimeout(function() {
                    y.abort("timeout");
                }, o.timeout));
                try {
                    k = !1, e.send(v, A);
                } catch (z) {
                    if (k) throw z;
                    A(-1, z);
                }
            } else A(-1, "No Transport");
            function A(b, c, d, h) {
                var j, m, n, v, w, x = c;
                k || (k = !0, i && a.clearTimeout(i), e = void 0, g = h || "", y.readyState = b > 0 ? 4 : 0, 
                j = b >= 200 && b < 300 || 304 === b, d && (v = Pb(o, y, d)), v = Qb(o, v, y, j), 
                j ? (o.ifModified && (w = y.getResponseHeader("Last-Modified"), w && (r.lastModified[f] = w), 
                w = y.getResponseHeader("etag"), w && (r.etag[f] = w)), 204 === b || "HEAD" === o.type ? x = "nocontent" : 304 === b ? x = "notmodified" : (x = v.state, 
                m = v.data, n = v.error, j = !n)) : (n = x, !b && x || (x = "error", b < 0 && (b = 0))), 
                y.status = b, y.statusText = (c || x) + "", j ? s.resolveWith(p, [ m, x, y ]) : s.rejectWith(p, [ y, x, n ]), 
                y.statusCode(u), u = void 0, l && q.trigger(j ? "ajaxSuccess" : "ajaxError", [ y, o, j ? m : n ]), 
                t.fireWith(p, [ y, x ]), l && (q.trigger("ajaxComplete", [ y, o ]), --r.active || r.event.trigger("ajaxStop")));
            }
            return y;
        },
        getJSON: function(a, b, c) {
            return r.get(a, b, c, "json");
        },
        getScript: function(a, b) {
            return r.get(a, void 0, b, "script");
        }
    }), r.each([ "get", "post" ], function(a, b) {
        r[b] = function(a, c, d, e) {
            return r.isFunction(c) && (e = e || d, d = c, c = void 0), r.ajax(r.extend({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            }, r.isPlainObject(a) && a));
        };
    }), r._evalUrl = function(a) {
        return r.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        });
    }, r.fn.extend({
        wrapAll: function(a) {
            var b;
            return this[0] && (r.isFunction(a) && (a = a.call(this[0])), b = r(a, this[0].ownerDocument).eq(0).clone(!0), 
            this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                var a = this;
                while (a.firstElementChild) a = a.firstElementChild;
                return a;
            }).append(this)), this;
        },
        wrapInner: function(a) {
            return r.isFunction(a) ? this.each(function(b) {
                r(this).wrapInner(a.call(this, b));
            }) : this.each(function() {
                var b = r(this), c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a);
            });
        },
        wrap: function(a) {
            var b = r.isFunction(a);
            return this.each(function(c) {
                r(this).wrapAll(b ? a.call(this, c) : a);
            });
        },
        unwrap: function(a) {
            return this.parent(a).not("body").each(function() {
                r(this).replaceWith(this.childNodes);
            }), this;
        }
    }), r.expr.pseudos.hidden = function(a) {
        return !r.expr.pseudos.visible(a);
    }, r.expr.pseudos.visible = function(a) {
        return !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length);
    }, r.ajaxSettings.xhr = function() {
        try {
            return new a.XMLHttpRequest();
        } catch (b) {}
    };
    var Rb = {
        0: 200,
        1223: 204
    }, Sb = r.ajaxSettings.xhr();
    o.cors = !!Sb && "withCredentials" in Sb, o.ajax = Sb = !!Sb, r.ajaxTransport(function(b) {
        var c, d;
        if (o.cors || Sb && !b.crossDomain) return {
            send: function(e, f) {
                var g, h = b.xhr();
                if (h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields) for (g in b.xhrFields) h[g] = b.xhrFields[g];
                b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType), b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
                for (g in e) h.setRequestHeader(g, e[g]);
                c = function(a) {
                    return function() {
                        c && (c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null, "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Rb[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? {
                            binary: h.response
                        } : {
                            text: h.responseText
                        }, h.getAllResponseHeaders()));
                    };
                }, h.onload = c(), d = h.onerror = c("error"), void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function() {
                    4 === h.readyState && a.setTimeout(function() {
                        c && d();
                    });
                }, c = c("abort");
                try {
                    h.send(b.hasContent && b.data || null);
                } catch (i) {
                    if (c) throw i;
                }
            },
            abort: function() {
                c && c();
            }
        };
    }), r.ajaxPrefilter(function(a) {
        a.crossDomain && (a.contents.script = !1);
    }), r.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(a) {
                return r.globalEval(a), a;
            }
        }
    }), r.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET");
    }), r.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c;
            return {
                send: function(e, f) {
                    b = r("<script>").prop({
                        charset: a.scriptCharset,
                        src: a.url
                    }).on("load error", c = function(a) {
                        b.remove(), c = null, a && f("error" === a.type ? 404 : 200, a.type);
                    }), d.head.appendChild(b[0]);
                },
                abort: function() {
                    c && c();
                }
            };
        }
    });
    var Tb = [], Ub = /(=)\?(?=&|$)|\?\?/;
    r.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = Tb.pop() || r.expando + "_" + ub++;
            return this[a] = !0, a;
        }
    }), r.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (Ub.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Ub.test(b.data) && "data");
        if (h || "jsonp" === b.dataTypes[0]) return e = b.jsonpCallback = r.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, 
        h ? b[h] = b[h].replace(Ub, "$1" + e) : b.jsonp !== !1 && (b.url += (vb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), 
        b.converters["script json"] = function() {
            return g || r.error(e + " was not called"), g[0];
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
            g = arguments;
        }, d.always(function() {
            void 0 === f ? r(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, 
            Tb.push(e)), g && r.isFunction(f) && f(g[0]), g = f = void 0;
        }), "script";
    }), o.createHTMLDocument = function() {
        var a = d.implementation.createHTMLDocument("").body;
        return a.innerHTML = "<form></form><form></form>", 2 === a.childNodes.length;
    }(), r.parseHTML = function(a, b, c) {
        if ("string" != typeof a) return [];
        "boolean" == typeof b && (c = b, b = !1);
        var e, f, g;
        return b || (o.createHTMLDocument ? (b = d.implementation.createHTMLDocument(""), 
        e = b.createElement("base"), e.href = d.location.href, b.head.appendChild(e)) : b = d), 
        f = C.exec(a), g = !c && [], f ? [ b.createElement(f[1]) ] : (f = qa([ a ], b, g), 
        g && g.length && r(g).remove(), r.merge([], f.childNodes));
    }, r.fn.load = function(a, b, c) {
        var d, e, f, g = this, h = a.indexOf(" ");
        return h > -1 && (d = pb(a.slice(h)), a = a.slice(0, h)), r.isFunction(b) ? (c = b, 
        b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && r.ajax({
            url: a,
            type: e || "GET",
            dataType: "html",
            data: b
        }).done(function(a) {
            f = arguments, g.html(d ? r("<div>").append(r.parseHTML(a)).find(d) : a);
        }).always(c && function(a, b) {
            g.each(function() {
                c.apply(this, f || [ a.responseText, b, a ]);
            });
        }), this;
    }, r.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function(a, b) {
        r.fn[b] = function(a) {
            return this.on(b, a);
        };
    }), r.expr.pseudos.animated = function(a) {
        return r.grep(r.timers, function(b) {
            return a === b.elem;
        }).length;
    }, r.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = r.css(a, "position"), l = r(a), m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = r.css(a, "top"), 
            i = r.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, 
            j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), 
            r.isFunction(b) && (b = b.call(a, c, r.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), 
            null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m);
        }
    }, r.fn.extend({
        offset: function(a) {
            if (arguments.length) return void 0 === a ? this : this.each(function(b) {
                r.offset.setOffset(this, a, b);
            });
            var b, c, d, e, f = this[0];
            if (f) return f.getClientRects().length ? (d = f.getBoundingClientRect(), b = f.ownerDocument, 
            c = b.documentElement, e = b.defaultView, {
                top: d.top + e.pageYOffset - c.clientTop,
                left: d.left + e.pageXOffset - c.clientLeft
            }) : {
                top: 0,
                left: 0
            };
        },
        position: function() {
            if (this[0]) {
                var a, b, c = this[0], d = {
                    top: 0,
                    left: 0
                };
                return "fixed" === r.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), 
                b = this.offset(), B(a[0], "html") || (d = a.offset()), d = {
                    top: d.top + r.css(a[0], "borderTopWidth", !0),
                    left: d.left + r.css(a[0], "borderLeftWidth", !0)
                }), {
                    top: b.top - d.top - r.css(c, "marginTop", !0),
                    left: b.left - d.left - r.css(c, "marginLeft", !0)
                };
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var a = this.offsetParent;
                while (a && "static" === r.css(a, "position")) a = a.offsetParent;
                return a || ra;
            });
        }
    }), r.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, b) {
        var c = "pageYOffset" === b;
        r.fn[a] = function(d) {
            return T(this, function(a, d, e) {
                var f;
                return r.isWindow(a) ? f = a : 9 === a.nodeType && (f = a.defaultView), void 0 === e ? f ? f[b] : a[d] : void (f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e);
            }, a, d, arguments.length);
        };
    }), r.each([ "top", "left" ], function(a, b) {
        r.cssHooks[b] = Pa(o.pixelPosition, function(a, c) {
            if (c) return c = Oa(a, b), Ma.test(c) ? r(a).position()[b] + "px" : c;
        });
    }), r.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        r.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            r.fn[d] = function(e, f) {
                var g = arguments.length && (c || "boolean" != typeof e), h = c || (e === !0 || f === !0 ? "margin" : "border");
                return T(this, function(b, c, e) {
                    var f;
                    return r.isWindow(b) ? 0 === d.indexOf("outer") ? b["inner" + a] : b.document.documentElement["client" + a] : 9 === b.nodeType ? (f = b.documentElement, 
                    Math.max(b.body["scroll" + a], f["scroll" + a], b.body["offset" + a], f["offset" + a], f["client" + a])) : void 0 === e ? r.css(b, c, h) : r.style(b, c, e, h);
                }, b, g ? e : void 0, g);
            };
        });
    }), r.fn.extend({
        bind: function(a, b, c) {
            return this.on(a, null, b, c);
        },
        unbind: function(a, b) {
            return this.off(a, null, b);
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d);
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c);
        }
    }), r.holdReady = function(a) {
        a ? r.readyWait++ : r.ready(!0);
    }, r.isArray = Array.isArray, r.parseJSON = JSON.parse, r.nodeName = B, "function" == typeof define && define.amd && define("jquery", [], function() {
        return r;
    });
    var Vb = a.jQuery, Wb = a.$;
    return r.noConflict = function(b) {
        return a.$ === r && (a.$ = Wb), b && a.jQuery === r && (a.jQuery = Vb), r;
    }, b || (a.jQuery = a.$ = r), r;
});

/*
 Copyright (C) Federico Zivolo 2017
 Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 */ (function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Popper = t();
})(this, function() {
    "use strict";
    function e(e) {
        return e && "[object Function]" === {}.toString.call(e);
    }
    function t(e, t) {
        if (1 !== e.nodeType) return [];
        var o = window.getComputedStyle(e, null);
        return t ? o[t] : o;
    }
    function o(e) {
        return "HTML" === e.nodeName ? e : e.parentNode || e.host;
    }
    function n(e) {
        if (!e || -1 !== [ "HTML", "BODY", "#document" ].indexOf(e.nodeName)) return window.document.body;
        var i = t(e), r = i.overflow, p = i.overflowX, s = i.overflowY;
        return /(auto|scroll)/.test(r + s + p) ? e : n(o(e));
    }
    function r(e) {
        var o = e && e.offsetParent, i = o && o.nodeName;
        return i && "BODY" !== i && "HTML" !== i ? -1 !== [ "TD", "TABLE" ].indexOf(o.nodeName) && "static" === t(o, "position") ? r(o) : o : window.document.documentElement;
    }
    function p(e) {
        var t = e.nodeName;
        return "BODY" !== t && ("HTML" === t || r(e.firstElementChild) === e);
    }
    function s(e) {
        return null === e.parentNode ? e : s(e.parentNode);
    }
    function d(e, t) {
        if (!e || !e.nodeType || !t || !t.nodeType) return window.document.documentElement;
        var o = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING, i = o ? e : t, n = o ? t : e, a = document.createRange();
        a.setStart(i, 0), a.setEnd(n, 0);
        var f = a.commonAncestorContainer;
        if (e !== f && t !== f || i.contains(n)) return p(f) ? f : r(f);
        var l = s(e);
        return l.host ? d(l.host, t) : d(e, s(t).host);
    }
    function a(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "top", o = "top" === t ? "scrollTop" : "scrollLeft", i = e.nodeName;
        if ("BODY" === i || "HTML" === i) {
            var n = window.document.documentElement, r = window.document.scrollingElement || n;
            return r[o];
        }
        return e[o];
    }
    function f(e, t) {
        var o = 2 < arguments.length && void 0 !== arguments[2] && arguments[2], i = a(t, "top"), n = a(t, "left"), r = o ? -1 : 1;
        return e.top += i * r, e.bottom += i * r, e.left += n * r, e.right += n * r, e;
    }
    function l(e, t) {
        var o = "x" === t ? "Left" : "Top", i = "Left" == o ? "Right" : "Bottom";
        return +e["border" + o + "Width"].split("px")[0] + +e["border" + i + "Width"].split("px")[0];
    }
    function m(e, t, o, i) {
        return _(t["offset" + e], o["client" + e], o["offset" + e], ie() ? o["offset" + e] + i["margin" + ("Height" === e ? "Top" : "Left")] + i["margin" + ("Height" === e ? "Bottom" : "Right")] : 0);
    }
    function h() {
        var e = window.document.body, t = window.document.documentElement, o = ie() && window.getComputedStyle(t);
        return {
            height: m("Height", e, t, o),
            width: m("Width", e, t, o)
        };
    }
    function c(e) {
        return se({}, e, {
            right: e.left + e.width,
            bottom: e.top + e.height
        });
    }
    function g(e) {
        var o = {};
        if (ie()) try {
            o = e.getBoundingClientRect();
            var i = a(e, "top"), n = a(e, "left");
            o.top += i, o.left += n, o.bottom += i, o.right += n;
        } catch (e) {} else o = e.getBoundingClientRect();
        var r = {
            left: o.left,
            top: o.top,
            width: o.right - o.left,
            height: o.bottom - o.top
        }, p = "HTML" === e.nodeName ? h() : {}, s = p.width || e.clientWidth || r.right - r.left, d = p.height || e.clientHeight || r.bottom - r.top, f = e.offsetWidth - s, m = e.offsetHeight - d;
        if (f || m) {
            var g = t(e);
            f -= l(g, "x"), m -= l(g, "y"), r.width -= f, r.height -= m;
        }
        return c(r);
    }
    function u(e, o) {
        var i = ie(), r = "HTML" === o.nodeName, p = g(e), s = g(o), d = n(e), a = t(o), l = +a.borderTopWidth.split("px")[0], m = +a.borderLeftWidth.split("px")[0], h = c({
            top: p.top - s.top - l,
            left: p.left - s.left - m,
            width: p.width,
            height: p.height
        });
        if (h.marginTop = 0, h.marginLeft = 0, !i && r) {
            var u = +a.marginTop.split("px")[0], b = +a.marginLeft.split("px")[0];
            h.top -= l - u, h.bottom -= l - u, h.left -= m - b, h.right -= m - b, h.marginTop = u, 
            h.marginLeft = b;
        }
        return (i ? o.contains(d) : o === d && "BODY" !== d.nodeName) && (h = f(h, o)), 
        h;
    }
    function b(e) {
        var t = window.document.documentElement, o = u(e, t), i = _(t.clientWidth, window.innerWidth || 0), n = _(t.clientHeight, window.innerHeight || 0), r = a(t), p = a(t, "left"), s = {
            top: r - o.top + o.marginTop,
            left: p - o.left + o.marginLeft,
            width: i,
            height: n
        };
        return c(s);
    }
    function y(e) {
        var i = e.nodeName;
        return "BODY" === i || "HTML" === i ? !1 : "fixed" === t(e, "position") || y(o(e));
    }
    function w(e, t, i, r) {
        var p = {
            top: 0,
            left: 0
        }, s = d(e, t);
        if ("viewport" === r) p = b(s); else {
            var a;
            "scrollParent" === r ? (a = n(o(e)), "BODY" === a.nodeName && (a = window.document.documentElement)) : "window" === r ? a = window.document.documentElement : a = r;
            var f = u(a, s);
            if ("HTML" === a.nodeName && !y(s)) {
                var l = h(), m = l.height, c = l.width;
                p.top += f.top - f.marginTop, p.bottom = m + f.top, p.left += f.left - f.marginLeft, 
                p.right = c + f.left;
            } else p = f;
        }
        return p.left += i, p.top += i, p.right -= i, p.bottom -= i, p;
    }
    function v(e) {
        var t = e.width, o = e.height;
        return t * o;
    }
    function E(e, t, o, i, n) {
        var r = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === e.indexOf("auto")) return e;
        var p = w(o, i, r, n), s = {
            top: {
                width: p.width,
                height: t.top - p.top
            },
            right: {
                width: p.right - t.right,
                height: p.height
            },
            bottom: {
                width: p.width,
                height: p.bottom - t.bottom
            },
            left: {
                width: t.left - p.left,
                height: p.height
            }
        }, d = Object.keys(s).map(function(e) {
            return se({
                key: e
            }, s[e], {
                area: v(s[e])
            });
        }).sort(function(e, t) {
            return t.area - e.area;
        }), a = d.filter(function(e) {
            var t = e.width, i = e.height;
            return t >= o.clientWidth && i >= o.clientHeight;
        }), f = 0 < a.length ? a[0].key : d[0].key, l = e.split("-")[1];
        return f + (l ? "-" + l : "");
    }
    function x(e, t, o) {
        var i = d(t, o);
        return u(o, i);
    }
    function O(e) {
        var t = window.getComputedStyle(e), o = parseFloat(t.marginTop) + parseFloat(t.marginBottom), i = parseFloat(t.marginLeft) + parseFloat(t.marginRight), n = {
            width: e.offsetWidth + i,
            height: e.offsetHeight + o
        };
        return n;
    }
    function L(e) {
        var t = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        };
        return e.replace(/left|right|bottom|top/g, function(e) {
            return t[e];
        });
    }
    function S(e, t, o) {
        o = o.split("-")[0];
        var i = O(e), n = {
            width: i.width,
            height: i.height
        }, r = -1 !== [ "right", "left" ].indexOf(o), p = r ? "top" : "left", s = r ? "left" : "top", d = r ? "height" : "width", a = r ? "width" : "height";
        return n[p] = t[p] + t[d] / 2 - i[d] / 2, n[s] = o === s ? t[s] - i[a] : t[L(s)], 
        n;
    }
    function T(e, t) {
        return Array.prototype.find ? e.find(t) : e.filter(t)[0];
    }
    function C(e, t, o) {
        if (Array.prototype.findIndex) return e.findIndex(function(e) {
            return e[t] === o;
        });
        var i = T(e, function(e) {
            return e[t] === o;
        });
        return e.indexOf(i);
    }
    function N(t, o, i) {
        var n = void 0 === i ? t : t.slice(0, C(t, "name", i));
        return n.forEach(function(t) {
            t.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
            var i = t.function || t.fn;
            t.enabled && e(i) && (o.offsets.popper = c(o.offsets.popper), o.offsets.reference = c(o.offsets.reference), 
            o = i(o, t));
        }), o;
    }
    function k() {
        if (!this.state.isDestroyed) {
            var e = {
                instance: this,
                styles: {},
                attributes: {},
                flipped: !1,
                offsets: {}
            };
            e.offsets.reference = x(this.state, this.popper, this.reference), e.placement = E(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), 
            e.originalPlacement = e.placement, e.offsets.popper = S(this.popper, e.offsets.reference, e.placement), 
            e.offsets.popper.position = "absolute", e = N(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, 
            this.options.onCreate(e));
        }
    }
    function W(e, t) {
        return e.some(function(e) {
            var o = e.name, i = e.enabled;
            return i && o === t;
        });
    }
    function B(e) {
        for (var t = [ !1, "ms", "Webkit", "Moz", "O" ], o = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < t.length - 1; n++) {
            var i = t[n], r = i ? "" + i + o : e;
            if ("undefined" != typeof window.document.body.style[r]) return r;
        }
        return null;
    }
    function D() {
        return this.state.isDestroyed = !0, W(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), 
        this.popper.style.left = "", this.popper.style.position = "", this.popper.style.top = "", 
        this.popper.style[B("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), 
        this;
    }
    function H(e, t, o, i) {
        var r = "BODY" === e.nodeName, p = r ? window : e;
        p.addEventListener(t, o, {
            passive: !0
        }), r || H(n(p.parentNode), t, o, i), i.push(p);
    }
    function P(e, t, o, i) {
        o.updateBound = i, window.addEventListener("resize", o.updateBound, {
            passive: !0
        });
        var r = n(e);
        return H(r, "scroll", o.updateBound, o.scrollParents), o.scrollElement = r, o.eventsEnabled = !0, 
        o;
    }
    function A() {
        this.state.eventsEnabled || (this.state = P(this.reference, this.options, this.state, this.scheduleUpdate));
    }
    function M(e, t) {
        return window.removeEventListener("resize", t.updateBound), t.scrollParents.forEach(function(e) {
            e.removeEventListener("scroll", t.updateBound);
        }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, 
        t;
    }
    function I() {
        this.state.eventsEnabled && (window.cancelAnimationFrame(this.scheduleUpdate), this.state = M(this.reference, this.state));
    }
    function R(e) {
        return "" !== e && !isNaN(parseFloat(e)) && isFinite(e);
    }
    function U(e, t) {
        Object.keys(t).forEach(function(o) {
            var i = "";
            -1 !== [ "width", "height", "top", "right", "bottom", "left" ].indexOf(o) && R(t[o]) && (i = "px"), 
            e.style[o] = t[o] + i;
        });
    }
    function Y(e, t) {
        Object.keys(t).forEach(function(o) {
            var i = t[o];
            !1 === i ? e.removeAttribute(o) : e.setAttribute(o, t[o]);
        });
    }
    function F(e, t, o) {
        var i = T(e, function(e) {
            var o = e.name;
            return o === t;
        }), n = !!i && e.some(function(e) {
            return e.name === o && e.enabled && e.order < i.order;
        });
        if (!n) {
            var r = "`" + t + "`";
            console.warn("`" + o + "`" + " modifier is required by " + r + " modifier in order to work, be sure to include it before " + r + "!");
        }
        return n;
    }
    function j(e) {
        return "end" === e ? "start" : "start" === e ? "end" : e;
    }
    function K(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1], o = ae.indexOf(e), i = ae.slice(o + 1).concat(ae.slice(0, o));
        return t ? i.reverse() : i;
    }
    function q(e, t, o, i) {
        var n = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/), r = +n[1], p = n[2];
        if (!r) return e;
        if (0 === p.indexOf("%")) {
            var s;
            switch (p) {
              case "%p":
                s = o;
                break;

              case "%":
              case "%r":
              default:
                s = i;
            }
            var d = c(s);
            return d[t] / 100 * r;
        }
        if ("vh" === p || "vw" === p) {
            var a;
            return a = "vh" === p ? _(document.documentElement.clientHeight, window.innerHeight || 0) : _(document.documentElement.clientWidth, window.innerWidth || 0), 
            a / 100 * r;
        }
        return r;
    }
    function G(e, t, o, i) {
        var n = [ 0, 0 ], r = -1 !== [ "right", "left" ].indexOf(i), p = e.split(/(\+|\-)/).map(function(e) {
            return e.trim();
        }), s = p.indexOf(T(p, function(e) {
            return -1 !== e.search(/,|\s/);
        }));
        p[s] && -1 === p[s].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
        var d = /\s*,\s*|\s+/, a = -1 === s ? [ p ] : [ p.slice(0, s).concat([ p[s].split(d)[0] ]), [ p[s].split(d)[1] ].concat(p.slice(s + 1)) ];
        return a = a.map(function(e, i) {
            var n = (1 === i ? !r : r) ? "height" : "width", p = !1;
            return e.reduce(function(e, t) {
                return "" === e[e.length - 1] && -1 !== [ "+", "-" ].indexOf(t) ? (e[e.length - 1] = t, 
                p = !0, e) : p ? (e[e.length - 1] += t, p = !1, e) : e.concat(t);
            }, []).map(function(e) {
                return q(e, n, t, o);
            });
        }), a.forEach(function(e, t) {
            e.forEach(function(o, i) {
                R(o) && (n[t] += o * ("-" === e[i - 1] ? -1 : 1));
            });
        }), n;
    }
    for (var z = Math.min, V = Math.floor, _ = Math.max, X = [ "native code", "[object MutationObserverConstructor]" ], Q = function(e) {
        return X.some(function(t) {
            return -1 < (e || "").toString().indexOf(t);
        });
    }, J = "undefined" != typeof window, Z = [ "Edge", "Trident", "Firefox" ], $ = 0, ee = 0; ee < Z.length; ee += 1) if (J && 0 <= navigator.userAgent.indexOf(Z[ee])) {
        $ = 1;
        break;
    }
    var i, te = J && Q(window.MutationObserver), oe = te ? function(e) {
        var t = !1, o = 0, i = document.createElement("span"), n = new MutationObserver(function() {
            e(), t = !1;
        });
        return n.observe(i, {
            attributes: !0
        }), function() {
            t || (t = !0, i.setAttribute("x-index", o), ++o);
        };
    } : function(e) {
        var t = !1;
        return function() {
            t || (t = !0, setTimeout(function() {
                t = !1, e();
            }, $));
        };
    }, ie = function() {
        return void 0 == i && (i = -1 !== navigator.appVersion.indexOf("MSIE 10")), i;
    }, ne = function(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }, re = function() {
        function e(e, t) {
            for (var o, n = 0; n < t.length; n++) o = t[n], o.enumerable = o.enumerable || !1, 
            o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
        }
        return function(t, o, i) {
            return o && e(t.prototype, o), i && e(t, i), t;
        };
    }(), pe = function(e, t, o) {
        return t in e ? Object.defineProperty(e, t, {
            value: o,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = o, e;
    }, se = Object.assign || function(e) {
        for (var t, o = 1; o < arguments.length; o++) for (var i in t = arguments[o], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        return e;
    }, de = [ "auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start" ], ae = de.slice(3), fe = {
        FLIP: "flip",
        CLOCKWISE: "clockwise",
        COUNTERCLOCKWISE: "counterclockwise"
    }, le = function() {
        function t(o, i) {
            var n = this, r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
            ne(this, t), this.scheduleUpdate = function() {
                return requestAnimationFrame(n.update);
            }, this.update = oe(this.update.bind(this)), this.options = se({}, t.Defaults, r), 
            this.state = {
                isDestroyed: !1,
                isCreated: !1,
                scrollParents: []
            }, this.reference = o.jquery ? o[0] : o, this.popper = i.jquery ? i[0] : i, this.options.modifiers = {}, 
            Object.keys(se({}, t.Defaults.modifiers, r.modifiers)).forEach(function(e) {
                n.options.modifiers[e] = se({}, t.Defaults.modifiers[e] || {}, r.modifiers ? r.modifiers[e] : {});
            }), this.modifiers = Object.keys(this.options.modifiers).map(function(e) {
                return se({
                    name: e
                }, n.options.modifiers[e]);
            }).sort(function(e, t) {
                return e.order - t.order;
            }), this.modifiers.forEach(function(t) {
                t.enabled && e(t.onLoad) && t.onLoad(n.reference, n.popper, n.options, t, n.state);
            }), this.update();
            var p = this.options.eventsEnabled;
            p && this.enableEventListeners(), this.state.eventsEnabled = p;
        }
        return re(t, [ {
            key: "update",
            value: function() {
                return k.call(this);
            }
        }, {
            key: "destroy",
            value: function() {
                return D.call(this);
            }
        }, {
            key: "enableEventListeners",
            value: function() {
                return A.call(this);
            }
        }, {
            key: "disableEventListeners",
            value: function() {
                return I.call(this);
            }
        } ]), t;
    }();
    return le.Utils = ("undefined" == typeof window ? global : window).PopperUtils, 
    le.placements = de, le.Defaults = {
        placement: "bottom",
        eventsEnabled: !0,
        removeOnDestroy: !1,
        onCreate: function() {},
        onUpdate: function() {},
        modifiers: {
            shift: {
                order: 100,
                enabled: !0,
                fn: function(e) {
                    var t = e.placement, o = t.split("-")[0], i = t.split("-")[1];
                    if (i) {
                        var n = e.offsets, r = n.reference, p = n.popper, s = -1 !== [ "bottom", "top" ].indexOf(o), d = s ? "left" : "top", a = s ? "width" : "height", f = {
                            start: pe({}, d, r[d]),
                            end: pe({}, d, r[d] + r[a] - p[a])
                        };
                        e.offsets.popper = se({}, p, f[i]);
                    }
                    return e;
                }
            },
            offset: {
                order: 200,
                enabled: !0,
                fn: function(e, t) {
                    var o, i = t.offset, n = e.placement, r = e.offsets, p = r.popper, s = r.reference, d = n.split("-")[0];
                    return o = R(+i) ? [ +i, 0 ] : G(i, p, s, d), "left" === d ? (p.top += o[0], p.left -= o[1]) : "right" === d ? (p.top += o[0], 
                    p.left += o[1]) : "top" === d ? (p.left += o[0], p.top -= o[1]) : "bottom" === d && (p.left += o[0], 
                    p.top += o[1]), e.popper = p, e;
                },
                offset: 0
            },
            preventOverflow: {
                order: 300,
                enabled: !0,
                fn: function(e, t) {
                    var o = t.boundariesElement || r(e.instance.popper);
                    e.instance.reference === o && (o = r(o));
                    var i = w(e.instance.popper, e.instance.reference, t.padding, o);
                    t.boundaries = i;
                    var n = t.priority, p = e.offsets.popper, s = {
                        primary: function(e) {
                            var o = p[e];
                            return p[e] < i[e] && !t.escapeWithReference && (o = _(p[e], i[e])), pe({}, e, o);
                        },
                        secondary: function(e) {
                            var o = "right" === e ? "left" : "top", n = p[o];
                            return p[e] > i[e] && !t.escapeWithReference && (n = z(p[o], i[e] - ("right" === e ? p.width : p.height))), 
                            pe({}, o, n);
                        }
                    };
                    return n.forEach(function(e) {
                        var t = -1 === [ "left", "top" ].indexOf(e) ? "secondary" : "primary";
                        p = se({}, p, s[t](e));
                    }), e.offsets.popper = p, e;
                },
                priority: [ "left", "right", "top", "bottom" ],
                padding: 5,
                boundariesElement: "scrollParent"
            },
            keepTogether: {
                order: 400,
                enabled: !0,
                fn: function(e) {
                    var t = e.offsets, o = t.popper, i = t.reference, n = e.placement.split("-")[0], r = V, p = -1 !== [ "top", "bottom" ].indexOf(n), s = p ? "right" : "bottom", d = p ? "left" : "top", a = p ? "width" : "height";
                    return o[s] < r(i[d]) && (e.offsets.popper[d] = r(i[d]) - o[a]), o[d] > r(i[s]) && (e.offsets.popper[d] = r(i[s])), 
                    e;
                }
            },
            arrow: {
                order: 500,
                enabled: !0,
                fn: function(e, t) {
                    if (!F(e.instance.modifiers, "arrow", "keepTogether")) return e;
                    var o = t.element;
                    if ("string" == typeof o) {
                        if (o = e.instance.popper.querySelector(o), !o) return e;
                    } else if (!e.instance.popper.contains(o)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), 
                    e;
                    var i = e.placement.split("-")[0], n = e.offsets, r = n.popper, p = n.reference, s = -1 !== [ "left", "right" ].indexOf(i), d = s ? "height" : "width", a = s ? "top" : "left", f = s ? "left" : "top", l = s ? "bottom" : "right", m = O(o)[d];
                    p[l] - m < r[a] && (e.offsets.popper[a] -= r[a] - (p[l] - m)), p[a] + m > r[l] && (e.offsets.popper[a] += p[a] + m - r[l]);
                    var h = p[a] + p[d] / 2 - m / 2, g = h - c(e.offsets.popper)[a];
                    return g = _(z(r[d] - m, g), 0), e.arrowElement = o, e.offsets.arrow = {}, e.offsets.arrow[a] = Math.round(g), 
                    e.offsets.arrow[f] = "", e;
                },
                element: "[x-arrow]"
            },
            flip: {
                order: 600,
                enabled: !0,
                fn: function(e, t) {
                    if (W(e.instance.modifiers, "inner")) return e;
                    if (e.flipped && e.placement === e.originalPlacement) return e;
                    var o = w(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement), i = e.placement.split("-")[0], n = L(i), r = e.placement.split("-")[1] || "", p = [];
                    switch (t.behavior) {
                      case fe.FLIP:
                        p = [ i, n ];
                        break;

                      case fe.CLOCKWISE:
                        p = K(i);
                        break;

                      case fe.COUNTERCLOCKWISE:
                        p = K(i, !0);
                        break;

                      default:
                        p = t.behavior;
                    }
                    return p.forEach(function(s, d) {
                        if (i !== s || p.length === d + 1) return e;
                        i = e.placement.split("-")[0], n = L(i);
                        var a = e.offsets.popper, f = e.offsets.reference, l = V, m = "left" === i && l(a.right) > l(f.left) || "right" === i && l(a.left) < l(f.right) || "top" === i && l(a.bottom) > l(f.top) || "bottom" === i && l(a.top) < l(f.bottom), h = l(a.left) < l(o.left), c = l(a.right) > l(o.right), g = l(a.top) < l(o.top), u = l(a.bottom) > l(o.bottom), b = "left" === i && h || "right" === i && c || "top" === i && g || "bottom" === i && u, y = -1 !== [ "top", "bottom" ].indexOf(i), w = !!t.flipVariations && (y && "start" === r && h || y && "end" === r && c || !y && "start" === r && g || !y && "end" === r && u);
                        (m || b || w) && (e.flipped = !0, (m || b) && (i = p[d + 1]), w && (r = j(r)), e.placement = i + (r ? "-" + r : ""), 
                        e.offsets.popper = se({}, e.offsets.popper, S(e.instance.popper, e.offsets.reference, e.placement)), 
                        e = N(e.instance.modifiers, e, "flip"));
                    }), e;
                },
                behavior: "flip",
                padding: 5,
                boundariesElement: "viewport"
            },
            inner: {
                order: 700,
                enabled: !1,
                fn: function(e) {
                    var t = e.placement, o = t.split("-")[0], i = e.offsets, n = i.popper, r = i.reference, p = -1 !== [ "left", "right" ].indexOf(o), s = -1 === [ "top", "left" ].indexOf(o);
                    return n[p ? "left" : "top"] = r[t] - (s ? n[p ? "width" : "height"] : 0), e.placement = L(t), 
                    e.offsets.popper = c(n), e;
                }
            },
            hide: {
                order: 800,
                enabled: !0,
                fn: function(e) {
                    if (!F(e.instance.modifiers, "hide", "preventOverflow")) return e;
                    var t = e.offsets.reference, o = T(e.instance.modifiers, function(e) {
                        return "preventOverflow" === e.name;
                    }).boundaries;
                    if (t.bottom < o.top || t.left > o.right || t.top > o.bottom || t.right < o.left) {
                        if (!0 === e.hide) return e;
                        e.hide = !0, e.attributes["x-out-of-boundaries"] = "";
                    } else {
                        if (!1 === e.hide) return e;
                        e.hide = !1, e.attributes["x-out-of-boundaries"] = !1;
                    }
                    return e;
                }
            },
            computeStyle: {
                order: 850,
                enabled: !0,
                fn: function(e, t) {
                    var o = t.x, i = t.y, n = e.offsets.popper, p = T(e.instance.modifiers, function(e) {
                        return "applyStyle" === e.name;
                    }).gpuAcceleration;
                    void 0 !== p && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                    var s, d, a = void 0 === p ? t.gpuAcceleration : p, f = r(e.instance.popper), l = g(f), m = {
                        position: n.position
                    }, h = {
                        left: V(n.left),
                        top: V(n.top),
                        bottom: V(n.bottom),
                        right: V(n.right)
                    }, c = "bottom" === o ? "top" : "bottom", u = "right" === i ? "left" : "right", b = B("transform");
                    if (d = "bottom" == c ? -l.height + h.bottom : h.top, s = "right" == u ? -l.width + h.right : h.left, 
                    a && b) m[b] = "translate3d(" + s + "px, " + d + "px, 0)", m[c] = 0, m[u] = 0, m.willChange = "transform"; else {
                        var y = "bottom" == c ? -1 : 1, w = "right" == u ? -1 : 1;
                        m[c] = d * y, m[u] = s * w, m.willChange = c + ", " + u;
                    }
                    var v = {
                        "x-placement": e.placement
                    };
                    return e.attributes = se({}, v, e.attributes), e.styles = se({}, m, e.styles), e;
                },
                gpuAcceleration: !0,
                x: "bottom",
                y: "right"
            },
            applyStyle: {
                order: 900,
                enabled: !0,
                fn: function(e) {
                    return U(e.instance.popper, e.styles), Y(e.instance.popper, e.attributes), e.offsets.arrow && U(e.arrowElement, e.offsets.arrow), 
                    e;
                },
                onLoad: function(e, t, o, i, n) {
                    var r = x(n, t, e), p = E(o.placement, r, t, e, o.modifiers.flip.boundariesElement, o.modifiers.flip.padding);
                    return t.setAttribute("x-placement", p), U(t, {
                        position: "absolute"
                    }), o;
                },
                gpuAcceleration: void 0
            }
        }
    }, le;
});

/*!
  * Bootstrap v4.1.1 (https://getbootstrap.com/)
  * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
!function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define([ "exports", "jquery", "popper.js" ], e) : e(t.bootstrap = {}, t.jQuery, t.Popper);
}(this, function(t, e, c) {
    "use strict";
    function i(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
            Object.defineProperty(t, i.key, i);
        }
    }
    function o(t, e, n) {
        return e && i(t.prototype, e), n && i(t, n), t;
    }
    function h(r) {
        for (var t = 1; t < arguments.length; t++) {
            var s = null != arguments[t] ? arguments[t] : {}, e = Object.keys(s);
            "function" == typeof Object.getOwnPropertySymbols && (e = e.concat(Object.getOwnPropertySymbols(s).filter(function(t) {
                return Object.getOwnPropertyDescriptor(s, t).enumerable;
            }))), e.forEach(function(t) {
                var e, n, i;
                e = r, i = s[n = t], n in e ? Object.defineProperty(e, n, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = i;
            });
        }
        return r;
    }
    e = e && e.hasOwnProperty("default") ? e.default : e, c = c && c.hasOwnProperty("default") ? c.default : c;
    var r, n, s, a, l, u, f, d, _, g, m, p, v, E, y, T, C, I, A, D, b, S, w, N, O, k, P, L, j, R, H, W, M, x, U, K, F, V, Q, B, Y, G, q, z, X, J, Z, $, tt, et, nt, it, rt, st, ot, at, lt, ht, ct, ut, ft, dt, _t, gt, mt, pt, vt, Et, yt, Tt, Ct, It, At, Dt, bt, St, wt, Nt, Ot, kt, Pt, Lt, jt, Rt, Ht, Wt, Mt, xt, Ut, Kt, Ft, Vt, Qt, Bt, Yt, Gt, qt, zt, Xt, Jt, Zt, $t, te, ee, ne, ie, re, se, oe, ae, le, he, ce, ue, fe, de, _e, ge, me, pe, ve, Ee, ye, Te, Ce, Ie, Ae, De, be, Se, we, Ne, Oe, ke, Pe, Le, je, Re, He, We, Me, xe, Ue, Ke, Fe, Ve, Qe, Be, Ye, Ge, qe, ze, Xe, Je, Ze, $e, tn, en, nn, rn, sn, on, an, ln, hn, cn, un, fn, dn, _n, gn, mn, pn, vn, En, yn, Tn, Cn = function(i) {
        var e = "transitionend";
        function t(t) {
            var e = this, n = !1;
            return i(this).one(l.TRANSITION_END, function() {
                n = !0;
            }), setTimeout(function() {
                n || l.triggerTransitionEnd(e);
            }, t), this;
        }
        var l = {
            TRANSITION_END: "bsTransitionEnd",
            getUID: function(t) {
                for (;t += ~~(1e6 * Math.random()), document.getElementById(t); ) ;
                return t;
            },
            getSelectorFromElement: function(t) {
                var e = t.getAttribute("data-target");
                e && "#" !== e || (e = t.getAttribute("href") || "");
                try {
                    return 0 < i(document).find(e).length ? e : null;
                } catch (t) {
                    return null;
                }
            },
            getTransitionDurationFromElement: function(t) {
                if (!t) return 0;
                var e = i(t).css("transition-duration");
                return parseFloat(e) ? (e = e.split(",")[0], 1e3 * parseFloat(e)) : 0;
            },
            reflow: function(t) {
                return t.offsetHeight;
            },
            triggerTransitionEnd: function(t) {
                i(t).trigger(e);
            },
            supportsTransitionEnd: function() {
                return Boolean(e);
            },
            isElement: function(t) {
                return (t[0] || t).nodeType;
            },
            typeCheckConfig: function(t, e, n) {
                for (var i in n) if (Object.prototype.hasOwnProperty.call(n, i)) {
                    var r = n[i], s = e[i], o = s && l.isElement(s) ? "element" : (a = s, {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());
                    if (!new RegExp(r).test(o)) throw new Error(t.toUpperCase() + ': Option "' + i + '" provided type "' + o + '" but expected type "' + r + '".');
                }
                var a;
            }
        };
        return i.fn.emulateTransitionEnd = t, i.event.special[l.TRANSITION_END] = {
            bindType: e,
            delegateType: e,
            handle: function(t) {
                if (i(t.target).is(this)) return t.handleObj.handler.apply(this, arguments);
            }
        }, l;
    }(e), In = (n = "alert", a = "." + (s = "bs.alert"), l = (r = e).fn[n], u = {
        CLOSE: "close" + a,
        CLOSED: "closed" + a,
        CLICK_DATA_API: "click" + a + ".data-api"
    }, f = "alert", d = "fade", _ = "show", g = function() {
        function i(t) {
            this._element = t;
        }
        var t = i.prototype;
        return t.close = function(t) {
            var e = this._element;
            t && (e = this._getRootElement(t)), this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e);
        }, t.dispose = function() {
            r.removeData(this._element, s), this._element = null;
        }, t._getRootElement = function(t) {
            var e = Cn.getSelectorFromElement(t), n = !1;
            return e && (n = r(e)[0]), n || (n = r(t).closest("." + f)[0]), n;
        }, t._triggerCloseEvent = function(t) {
            var e = r.Event(u.CLOSE);
            return r(t).trigger(e), e;
        }, t._removeElement = function(e) {
            var n = this;
            if (r(e).removeClass(_), r(e).hasClass(d)) {
                var t = Cn.getTransitionDurationFromElement(e);
                r(e).one(Cn.TRANSITION_END, function(t) {
                    return n._destroyElement(e, t);
                }).emulateTransitionEnd(t);
            } else this._destroyElement(e);
        }, t._destroyElement = function(t) {
            r(t).detach().trigger(u.CLOSED).remove();
        }, i._jQueryInterface = function(n) {
            return this.each(function() {
                var t = r(this), e = t.data(s);
                e || (e = new i(this), t.data(s, e)), "close" === n && e[n](this);
            });
        }, i._handleDismiss = function(e) {
            return function(t) {
                t && t.preventDefault(), e.close(this);
            };
        }, o(i, null, [ {
            key: "VERSION",
            get: function() {
                return "4.1.1";
            }
        } ]), i;
    }(), r(document).on(u.CLICK_DATA_API, '[data-dismiss="alert"]', g._handleDismiss(new g())), 
    r.fn[n] = g._jQueryInterface, r.fn[n].Constructor = g, r.fn[n].noConflict = function() {
        return r.fn[n] = l, g._jQueryInterface;
    }, g), An = (p = "button", E = "." + (v = "bs.button"), y = ".data-api", T = (m = e).fn[p], 
    C = "active", I = "btn", D = '[data-toggle^="button"]', b = '[data-toggle="buttons"]', 
    S = "input", w = ".active", N = ".btn", O = {
        CLICK_DATA_API: "click" + E + y,
        FOCUS_BLUR_DATA_API: (A = "focus") + E + y + " blur" + E + y
    }, k = function() {
        function n(t) {
            this._element = t;
        }
        var t = n.prototype;
        return t.toggle = function() {
            var t = !0, e = !0, n = m(this._element).closest(b)[0];
            if (n) {
                var i = m(this._element).find(S)[0];
                if (i) {
                    if ("radio" === i.type) if (i.checked && m(this._element).hasClass(C)) t = !1; else {
                        var r = m(n).find(w)[0];
                        r && m(r).removeClass(C);
                    }
                    if (t) {
                        if (i.hasAttribute("disabled") || n.hasAttribute("disabled") || i.classList.contains("disabled") || n.classList.contains("disabled")) return;
                        i.checked = !m(this._element).hasClass(C), m(i).trigger("change");
                    }
                    i.focus(), e = !1;
                }
            }
            e && this._element.setAttribute("aria-pressed", !m(this._element).hasClass(C)), 
            t && m(this._element).toggleClass(C);
        }, t.dispose = function() {
            m.removeData(this._element, v), this._element = null;
        }, n._jQueryInterface = function(e) {
            return this.each(function() {
                var t = m(this).data(v);
                t || (t = new n(this), m(this).data(v, t)), "toggle" === e && t[e]();
            });
        }, o(n, null, [ {
            key: "VERSION",
            get: function() {
                return "4.1.1";
            }
        } ]), n;
    }(), m(document).on(O.CLICK_DATA_API, D, function(t) {
        t.preventDefault();
        var e = t.target;
        m(e).hasClass(I) || (e = m(e).closest(N)), k._jQueryInterface.call(m(e), "toggle");
    }).on(O.FOCUS_BLUR_DATA_API, D, function(t) {
        var e = m(t.target).closest(N)[0];
        m(e).toggleClass(A, /^focus(in)?$/.test(t.type));
    }), m.fn[p] = k._jQueryInterface, m.fn[p].Constructor = k, m.fn[p].noConflict = function() {
        return m.fn[p] = T, k._jQueryInterface;
    }, k), Dn = (L = "carousel", R = "." + (j = "bs.carousel"), H = ".data-api", W = (P = e).fn[L], 
    M = {
        interval: 5e3,
        keyboard: !0,
        slide: !1,
        pause: "hover",
        wrap: !0
    }, x = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        slide: "(boolean|string)",
        pause: "(string|boolean)",
        wrap: "boolean"
    }, U = "next", K = "prev", F = "left", V = "right", Q = {
        SLIDE: "slide" + R,
        SLID: "slid" + R,
        KEYDOWN: "keydown" + R,
        MOUSEENTER: "mouseenter" + R,
        MOUSELEAVE: "mouseleave" + R,
        TOUCHEND: "touchend" + R,
        LOAD_DATA_API: "load" + R + H,
        CLICK_DATA_API: "click" + R + H
    }, B = "carousel", Y = "active", G = "slide", q = "carousel-item-right", z = "carousel-item-left", 
    X = "carousel-item-next", J = "carousel-item-prev", Z = {
        ACTIVE: ".active",
        ACTIVE_ITEM: ".active.carousel-item",
        ITEM: ".carousel-item",
        NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
        INDICATORS: ".carousel-indicators",
        DATA_SLIDE: "[data-slide], [data-slide-to]",
        DATA_RIDE: '[data-ride="carousel"]'
    }, $ = function() {
        function s(t, e) {
            this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, 
            this._isSliding = !1, this.touchTimeout = null, this._config = this._getConfig(e), 
            this._element = P(t)[0], this._indicatorsElement = P(this._element).find(Z.INDICATORS)[0], 
            this._addEventListeners();
        }
        var t = s.prototype;
        return t.next = function() {
            this._isSliding || this._slide(U);
        }, t.nextWhenVisible = function() {
            !document.hidden && P(this._element).is(":visible") && "hidden" !== P(this._element).css("visibility") && this.next();
        }, t.prev = function() {
            this._isSliding || this._slide(K);
        }, t.pause = function(t) {
            t || (this._isPaused = !0), P(this._element).find(Z.NEXT_PREV)[0] && (Cn.triggerTransitionEnd(this._element), 
            this.cycle(!0)), clearInterval(this._interval), this._interval = null;
        }, t.cycle = function(t) {
            t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), 
            this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
        }, t.to = function(t) {
            var e = this;
            this._activeElement = P(this._element).find(Z.ACTIVE_ITEM)[0];
            var n = this._getItemIndex(this._activeElement);
            if (!(t > this._items.length - 1 || t < 0)) if (this._isSliding) P(this._element).one(Q.SLID, function() {
                return e.to(t);
            }); else {
                if (n === t) return this.pause(), void this.cycle();
                var i = n < t ? U : K;
                this._slide(i, this._items[t]);
            }
        }, t.dispose = function() {
            P(this._element).off(R), P.removeData(this._element, j), this._items = null, this._config = null, 
            this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, 
            this._activeElement = null, this._indicatorsElement = null;
        }, t._getConfig = function(t) {
            return t = h({}, M, t), Cn.typeCheckConfig(L, t, x), t;
        }, t._addEventListeners = function() {
            var e = this;
            this._config.keyboard && P(this._element).on(Q.KEYDOWN, function(t) {
                return e._keydown(t);
            }), "hover" === this._config.pause && (P(this._element).on(Q.MOUSEENTER, function(t) {
                return e.pause(t);
            }).on(Q.MOUSELEAVE, function(t) {
                return e.cycle(t);
            }), "ontouchstart" in document.documentElement && P(this._element).on(Q.TOUCHEND, function() {
                e.pause(), e.touchTimeout && clearTimeout(e.touchTimeout), e.touchTimeout = setTimeout(function(t) {
                    return e.cycle(t);
                }, 500 + e._config.interval);
            }));
        }, t._keydown = function(t) {
            if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {
              case 37:
                t.preventDefault(), this.prev();
                break;

              case 39:
                t.preventDefault(), this.next();
            }
        }, t._getItemIndex = function(t) {
            return this._items = P.makeArray(P(t).parent().find(Z.ITEM)), this._items.indexOf(t);
        }, t._getItemByDirection = function(t, e) {
            var n = t === U, i = t === K, r = this._getItemIndex(e), s = this._items.length - 1;
            if ((i && 0 === r || n && r === s) && !this._config.wrap) return e;
            var o = (r + (t === K ? -1 : 1)) % this._items.length;
            return -1 === o ? this._items[this._items.length - 1] : this._items[o];
        }, t._triggerSlideEvent = function(t, e) {
            var n = this._getItemIndex(t), i = this._getItemIndex(P(this._element).find(Z.ACTIVE_ITEM)[0]), r = P.Event(Q.SLIDE, {
                relatedTarget: t,
                direction: e,
                from: i,
                to: n
            });
            return P(this._element).trigger(r), r;
        }, t._setActiveIndicatorElement = function(t) {
            if (this._indicatorsElement) {
                P(this._indicatorsElement).find(Z.ACTIVE).removeClass(Y);
                var e = this._indicatorsElement.children[this._getItemIndex(t)];
                e && P(e).addClass(Y);
            }
        }, t._slide = function(t, e) {
            var n, i, r, s = this, o = P(this._element).find(Z.ACTIVE_ITEM)[0], a = this._getItemIndex(o), l = e || o && this._getItemByDirection(t, o), h = this._getItemIndex(l), c = Boolean(this._interval);
            if (t === U ? (n = z, i = X, r = F) : (n = q, i = J, r = V), l && P(l).hasClass(Y)) this._isSliding = !1; else if (!this._triggerSlideEvent(l, r).isDefaultPrevented() && o && l) {
                this._isSliding = !0, c && this.pause(), this._setActiveIndicatorElement(l);
                var u = P.Event(Q.SLID, {
                    relatedTarget: l,
                    direction: r,
                    from: a,
                    to: h
                });
                if (P(this._element).hasClass(G)) {
                    P(l).addClass(i), Cn.reflow(l), P(o).addClass(n), P(l).addClass(n);
                    var f = Cn.getTransitionDurationFromElement(o);
                    P(o).one(Cn.TRANSITION_END, function() {
                        P(l).removeClass(n + " " + i).addClass(Y), P(o).removeClass(Y + " " + i + " " + n), 
                        s._isSliding = !1, setTimeout(function() {
                            return P(s._element).trigger(u);
                        }, 0);
                    }).emulateTransitionEnd(f);
                } else P(o).removeClass(Y), P(l).addClass(Y), this._isSliding = !1, P(this._element).trigger(u);
                c && this.cycle();
            }
        }, s._jQueryInterface = function(i) {
            return this.each(function() {
                var t = P(this).data(j), e = h({}, M, P(this).data());
                "object" == typeof i && (e = h({}, e, i));
                var n = "string" == typeof i ? i : e.slide;
                if (t || (t = new s(this, e), P(this).data(j, t)), "number" == typeof i) t.to(i); else if ("string" == typeof n) {
                    if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
                    t[n]();
                } else e.interval && (t.pause(), t.cycle());
            });
        }, s._dataApiClickHandler = function(t) {
            var e = Cn.getSelectorFromElement(this);
            if (e) {
                var n = P(e)[0];
                if (n && P(n).hasClass(B)) {
                    var i = h({}, P(n).data(), P(this).data()), r = this.getAttribute("data-slide-to");
                    r && (i.interval = !1), s._jQueryInterface.call(P(n), i), r && P(n).data(j).to(r), 
                    t.preventDefault();
                }
            }
        }, o(s, null, [ {
            key: "VERSION",
            get: function() {
                return "4.1.1";
            }
        }, {
            key: "Default",
            get: function() {
                return M;
            }
        } ]), s;
    }(), P(document).on(Q.CLICK_DATA_API, Z.DATA_SLIDE, $._dataApiClickHandler), P(window).on(Q.LOAD_DATA_API, function() {
        P(Z.DATA_RIDE).each(function() {
            var t = P(this);
            $._jQueryInterface.call(t, t.data());
        });
    }), P.fn[L] = $._jQueryInterface, P.fn[L].Constructor = $, P.fn[L].noConflict = function() {
        return P.fn[L] = W, $._jQueryInterface;
    }, $), bn = (et = "collapse", it = "." + (nt = "bs.collapse"), rt = (tt = e).fn[et], 
    st = {
        toggle: !0,
        parent: ""
    }, ot = {
        toggle: "boolean",
        parent: "(string|element)"
    }, at = {
        SHOW: "show" + it,
        SHOWN: "shown" + it,
        HIDE: "hide" + it,
        HIDDEN: "hidden" + it,
        CLICK_DATA_API: "click" + it + ".data-api"
    }, lt = "show", ht = "collapse", ct = "collapsing", ut = "collapsed", ft = "width", 
    dt = "height", _t = {
        ACTIVES: ".show, .collapsing",
        DATA_TOGGLE: '[data-toggle="collapse"]'
    }, gt = function() {
        function a(t, e) {
            this._isTransitioning = !1, this._element = t, this._config = this._getConfig(e), 
            this._triggerArray = tt.makeArray(tt('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'));
            for (var n = tt(_t.DATA_TOGGLE), i = 0; i < n.length; i++) {
                var r = n[i], s = Cn.getSelectorFromElement(r);
                null !== s && 0 < tt(s).filter(t).length && (this._selector = s, this._triggerArray.push(r));
            }
            this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), 
            this._config.toggle && this.toggle();
        }
        var t = a.prototype;
        return t.toggle = function() {
            tt(this._element).hasClass(lt) ? this.hide() : this.show();
        }, t.show = function() {
            var t, e, n = this;
            if (!this._isTransitioning && !tt(this._element).hasClass(lt) && (this._parent && 0 === (t = tt.makeArray(tt(this._parent).find(_t.ACTIVES).filter('[data-parent="' + this._config.parent + '"]'))).length && (t = null), 
            !(t && (e = tt(t).not(this._selector).data(nt)) && e._isTransitioning))) {
                var i = tt.Event(at.SHOW);
                if (tt(this._element).trigger(i), !i.isDefaultPrevented()) {
                    t && (a._jQueryInterface.call(tt(t).not(this._selector), "hide"), e || tt(t).data(nt, null));
                    var r = this._getDimension();
                    tt(this._element).removeClass(ht).addClass(ct), (this._element.style[r] = 0) < this._triggerArray.length && tt(this._triggerArray).removeClass(ut).attr("aria-expanded", !0), 
                    this.setTransitioning(!0);
                    var s = "scroll" + (r[0].toUpperCase() + r.slice(1)), o = Cn.getTransitionDurationFromElement(this._element);
                    tt(this._element).one(Cn.TRANSITION_END, function() {
                        tt(n._element).removeClass(ct).addClass(ht).addClass(lt), n._element.style[r] = "", 
                        n.setTransitioning(!1), tt(n._element).trigger(at.SHOWN);
                    }).emulateTransitionEnd(o), this._element.style[r] = this._element[s] + "px";
                }
            }
        }, t.hide = function() {
            var t = this;
            if (!this._isTransitioning && tt(this._element).hasClass(lt)) {
                var e = tt.Event(at.HIDE);
                if (tt(this._element).trigger(e), !e.isDefaultPrevented()) {
                    var n = this._getDimension();
                    if (this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", Cn.reflow(this._element), 
                    tt(this._element).addClass(ct).removeClass(ht).removeClass(lt), 0 < this._triggerArray.length) for (var i = 0; i < this._triggerArray.length; i++) {
                        var r = this._triggerArray[i], s = Cn.getSelectorFromElement(r);
                        if (null !== s) tt(s).hasClass(lt) || tt(r).addClass(ut).attr("aria-expanded", !1);
                    }
                    this.setTransitioning(!0);
                    this._element.style[n] = "";
                    var o = Cn.getTransitionDurationFromElement(this._element);
                    tt(this._element).one(Cn.TRANSITION_END, function() {
                        t.setTransitioning(!1), tt(t._element).removeClass(ct).addClass(ht).trigger(at.HIDDEN);
                    }).emulateTransitionEnd(o);
                }
            }
        }, t.setTransitioning = function(t) {
            this._isTransitioning = t;
        }, t.dispose = function() {
            tt.removeData(this._element, nt), this._config = null, this._parent = null, this._element = null, 
            this._triggerArray = null, this._isTransitioning = null;
        }, t._getConfig = function(t) {
            return (t = h({}, st, t)).toggle = Boolean(t.toggle), Cn.typeCheckConfig(et, t, ot), 
            t;
        }, t._getDimension = function() {
            return tt(this._element).hasClass(ft) ? ft : dt;
        }, t._getParent = function() {
            var n = this, t = null;
            Cn.isElement(this._config.parent) ? (t = this._config.parent, "undefined" != typeof this._config.parent.jquery && (t = this._config.parent[0])) : t = tt(this._config.parent)[0];
            var e = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
            return tt(t).find(e).each(function(t, e) {
                n._addAriaAndCollapsedClass(a._getTargetFromElement(e), [ e ]);
            }), t;
        }, t._addAriaAndCollapsedClass = function(t, e) {
            if (t) {
                var n = tt(t).hasClass(lt);
                0 < e.length && tt(e).toggleClass(ut, !n).attr("aria-expanded", n);
            }
        }, a._getTargetFromElement = function(t) {
            var e = Cn.getSelectorFromElement(t);
            return e ? tt(e)[0] : null;
        }, a._jQueryInterface = function(i) {
            return this.each(function() {
                var t = tt(this), e = t.data(nt), n = h({}, st, t.data(), "object" == typeof i && i ? i : {});
                if (!e && n.toggle && /show|hide/.test(i) && (n.toggle = !1), e || (e = new a(this, n), 
                t.data(nt, e)), "string" == typeof i) {
                    if ("undefined" == typeof e[i]) throw new TypeError('No method named "' + i + '"');
                    e[i]();
                }
            });
        }, o(a, null, [ {
            key: "VERSION",
            get: function() {
                return "4.1.1";
            }
        }, {
            key: "Default",
            get: function() {
                return st;
            }
        } ]), a;
    }(), tt(document).on(at.CLICK_DATA_API, _t.DATA_TOGGLE, function(t) {
        "A" === t.currentTarget.tagName && t.preventDefault();
        var n = tt(this), e = Cn.getSelectorFromElement(this);
        tt(e).each(function() {
            var t = tt(this), e = t.data(nt) ? "toggle" : n.data();
            gt._jQueryInterface.call(t, e);
        });
    }), tt.fn[et] = gt._jQueryInterface, tt.fn[et].Constructor = gt, tt.fn[et].noConflict = function() {
        return tt.fn[et] = rt, gt._jQueryInterface;
    }, gt), Sn = (pt = "dropdown", Et = "." + (vt = "bs.dropdown"), yt = ".data-api", 
    Tt = (mt = e).fn[pt], Ct = new RegExp("38|40|27"), It = {
        HIDE: "hide" + Et,
        HIDDEN: "hidden" + Et,
        SHOW: "show" + Et,
        SHOWN: "shown" + Et,
        CLICK: "click" + Et,
        CLICK_DATA_API: "click" + Et + yt,
        KEYDOWN_DATA_API: "keydown" + Et + yt,
        KEYUP_DATA_API: "keyup" + Et + yt
    }, At = "disabled", Dt = "show", bt = "dropup", St = "dropright", wt = "dropleft", 
    Nt = "dropdown-menu-right", Ot = "position-static", kt = '[data-toggle="dropdown"]', 
    Pt = ".dropdown form", Lt = ".dropdown-menu", jt = ".navbar-nav", Rt = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", 
    Ht = "top-start", Wt = "top-end", Mt = "bottom-start", xt = "bottom-end", Ut = "right-start", 
    Kt = "left-start", Ft = {
        offset: 0,
        flip: !0,
        boundary: "scrollParent",
        reference: "toggle",
        display: "dynamic"
    }, Vt = {
        offset: "(number|string|function)",
        flip: "boolean",
        boundary: "(string|element)",
        reference: "(string|element)",
        display: "string"
    }, Qt = function() {
        function l(t, e) {
            this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), 
            this._inNavbar = this._detectNavbar(), this._addEventListeners();
        }
        var t = l.prototype;
        return t.toggle = function() {
            if (!this._element.disabled && !mt(this._element).hasClass(At)) {
                var t = l._getParentFromElement(this._element), e = mt(this._menu).hasClass(Dt);
                if (l._clearMenus(), !e) {
                    var n = {
                        relatedTarget: this._element
                    }, i = mt.Event(It.SHOW, n);
                    if (mt(t).trigger(i), !i.isDefaultPrevented()) {
                        if (!this._inNavbar) {
                            if ("undefined" == typeof c) throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");
                            var r = this._element;
                            "parent" === this._config.reference ? r = t : Cn.isElement(this._config.reference) && (r = this._config.reference, 
                            "undefined" != typeof this._config.reference.jquery && (r = this._config.reference[0])), 
                            "scrollParent" !== this._config.boundary && mt(t).addClass(Ot), this._popper = new c(r, this._menu, this._getPopperConfig());
                        }
                        "ontouchstart" in document.documentElement && 0 === mt(t).closest(jt).length && mt(document.body).children().on("mouseover", null, mt.noop), 
                        this._element.focus(), this._element.setAttribute("aria-expanded", !0), mt(this._menu).toggleClass(Dt), 
                        mt(t).toggleClass(Dt).trigger(mt.Event(It.SHOWN, n));
                    }
                }
            }
        }, t.dispose = function() {
            mt.removeData(this._element, vt), mt(this._element).off(Et), this._element = null, 
            (this._menu = null) !== this._popper && (this._popper.destroy(), this._popper = null);
        }, t.update = function() {
            this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate();
        }, t._addEventListeners = function() {
            var e = this;
            mt(this._element).on(It.CLICK, function(t) {
                t.preventDefault(), t.stopPropagation(), e.toggle();
            });
        }, t._getConfig = function(t) {
            return t = h({}, this.constructor.Default, mt(this._element).data(), t), Cn.typeCheckConfig(pt, t, this.constructor.DefaultType), 
            t;
        }, t._getMenuElement = function() {
            if (!this._menu) {
                var t = l._getParentFromElement(this._element);
                this._menu = mt(t).find(Lt)[0];
            }
            return this._menu;
        }, t._getPlacement = function() {
            var t = mt(this._element).parent(), e = Mt;
            return t.hasClass(bt) ? (e = Ht, mt(this._menu).hasClass(Nt) && (e = Wt)) : t.hasClass(St) ? e = Ut : t.hasClass(wt) ? e = Kt : mt(this._menu).hasClass(Nt) && (e = xt), 
            e;
        }, t._detectNavbar = function() {
            return 0 < mt(this._element).closest(".navbar").length;
        }, t._getPopperConfig = function() {
            var e = this, t = {};
            "function" == typeof this._config.offset ? t.fn = function(t) {
                return t.offsets = h({}, t.offsets, e._config.offset(t.offsets) || {}), t;
            } : t.offset = this._config.offset;
            var n = {
                placement: this._getPlacement(),
                modifiers: {
                    offset: t,
                    flip: {
                        enabled: this._config.flip
                    },
                    preventOverflow: {
                        boundariesElement: this._config.boundary
                    }
                }
            };
            return "static" === this._config.display && (n.modifiers.applyStyle = {
                enabled: !1
            }), n;
        }, l._jQueryInterface = function(e) {
            return this.each(function() {
                var t = mt(this).data(vt);
                if (t || (t = new l(this, "object" == typeof e ? e : null), mt(this).data(vt, t)), 
                "string" == typeof e) {
                    if ("undefined" == typeof t[e]) throw new TypeError('No method named "' + e + '"');
                    t[e]();
                }
            });
        }, l._clearMenus = function(t) {
            if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which)) for (var e = mt.makeArray(mt(kt)), n = 0; n < e.length; n++) {
                var i = l._getParentFromElement(e[n]), r = mt(e[n]).data(vt), s = {
                    relatedTarget: e[n]
                };
                if (r) {
                    var o = r._menu;
                    if (mt(i).hasClass(Dt) && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && mt.contains(i, t.target))) {
                        var a = mt.Event(It.HIDE, s);
                        mt(i).trigger(a), a.isDefaultPrevented() || ("ontouchstart" in document.documentElement && mt(document.body).children().off("mouseover", null, mt.noop), 
                        e[n].setAttribute("aria-expanded", "false"), mt(o).removeClass(Dt), mt(i).removeClass(Dt).trigger(mt.Event(It.HIDDEN, s)));
                    }
                }
            }
        }, l._getParentFromElement = function(t) {
            var e, n = Cn.getSelectorFromElement(t);
            return n && (e = mt(n)[0]), e || t.parentNode;
        }, l._dataApiKeydownHandler = function(t) {
            if ((/input|textarea/i.test(t.target.tagName) ? !(32 === t.which || 27 !== t.which && (40 !== t.which && 38 !== t.which || mt(t.target).closest(Lt).length)) : Ct.test(t.which)) && (t.preventDefault(), 
            t.stopPropagation(), !this.disabled && !mt(this).hasClass(At))) {
                var e = l._getParentFromElement(this), n = mt(e).hasClass(Dt);
                if ((n || 27 === t.which && 32 === t.which) && (!n || 27 !== t.which && 32 !== t.which)) {
                    var i = mt(e).find(Rt).get();
                    if (0 !== i.length) {
                        var r = i.indexOf(t.target);
                        38 === t.which && 0 < r && r--, 40 === t.which && r < i.length - 1 && r++, r < 0 && (r = 0), 
                        i[r].focus();
                    }
                } else {
                    if (27 === t.which) {
                        var s = mt(e).find(kt)[0];
                        mt(s).trigger("focus");
                    }
                    mt(this).trigger("click");
                }
            }
        }, o(l, null, [ {
            key: "VERSION",
            get: function() {
                return "4.1.1";
            }
        }, {
            key: "Default",
            get: function() {
                return Ft;
            }
        }, {
            key: "DefaultType",
            get: function() {
                return Vt;
            }
        } ]), l;
    }(), mt(document).on(It.KEYDOWN_DATA_API, kt, Qt._dataApiKeydownHandler).on(It.KEYDOWN_DATA_API, Lt, Qt._dataApiKeydownHandler).on(It.CLICK_DATA_API + " " + It.KEYUP_DATA_API, Qt._clearMenus).on(It.CLICK_DATA_API, kt, function(t) {
        t.preventDefault(), t.stopPropagation(), Qt._jQueryInterface.call(mt(this), "toggle");
    }).on(It.CLICK_DATA_API, Pt, function(t) {
        t.stopPropagation();
    }), mt.fn[pt] = Qt._jQueryInterface, mt.fn[pt].Constructor = Qt, mt.fn[pt].noConflict = function() {
        return mt.fn[pt] = Tt, Qt._jQueryInterface;
    }, Qt), wn = (Yt = "modal", qt = "." + (Gt = "bs.modal"), zt = (Bt = e).fn[Yt], 
    Xt = {
        backdrop: !0,
        keyboard: !0,
        focus: !0,
        show: !0
    }, Jt = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        focus: "boolean",
        show: "boolean"
    }, Zt = {
        HIDE: "hide" + qt,
        HIDDEN: "hidden" + qt,
        SHOW: "show" + qt,
        SHOWN: "shown" + qt,
        FOCUSIN: "focusin" + qt,
        RESIZE: "resize" + qt,
        CLICK_DISMISS: "click.dismiss" + qt,
        KEYDOWN_DISMISS: "keydown.dismiss" + qt,
        MOUSEUP_DISMISS: "mouseup.dismiss" + qt,
        MOUSEDOWN_DISMISS: "mousedown.dismiss" + qt,
        CLICK_DATA_API: "click" + qt + ".data-api"
    }, $t = "modal-scrollbar-measure", te = "modal-backdrop", ee = "modal-open", ne = "fade", 
    ie = "show", re = {
        DIALOG: ".modal-dialog",
        DATA_TOGGLE: '[data-toggle="modal"]',
        DATA_DISMISS: '[data-dismiss="modal"]',
        FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
        STICKY_CONTENT: ".sticky-top",
        NAVBAR_TOGGLER: ".navbar-toggler"
    }, se = function() {
        function r(t, e) {
            this._config = this._getConfig(e), this._element = t, this._dialog = Bt(t).find(re.DIALOG)[0], 
            this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, 
            this._scrollbarWidth = 0;
        }
        var t = r.prototype;
        return t.toggle = function(t) {
            return this._isShown ? this.hide() : this.show(t);
        }, t.show = function(t) {
            var e = this;
            if (!this._isTransitioning && !this._isShown) {
                Bt(this._element).hasClass(ne) && (this._isTransitioning = !0);
                var n = Bt.Event(Zt.SHOW, {
                    relatedTarget: t
                });
                Bt(this._element).trigger(n), this._isShown || n.isDefaultPrevented() || (this._isShown = !0, 
                this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), Bt(document.body).addClass(ee), 
                this._setEscapeEvent(), this._setResizeEvent(), Bt(this._element).on(Zt.CLICK_DISMISS, re.DATA_DISMISS, function(t) {
                    return e.hide(t);
                }), Bt(this._dialog).on(Zt.MOUSEDOWN_DISMISS, function() {
                    Bt(e._element).one(Zt.MOUSEUP_DISMISS, function(t) {
                        Bt(t.target).is(e._element) && (e._ignoreBackdropClick = !0);
                    });
                }), this._showBackdrop(function() {
                    return e._showElement(t);
                }));
            }
        }, t.hide = function(t) {
            var e = this;
            if (t && t.preventDefault(), !this._isTransitioning && this._isShown) {
                var n = Bt.Event(Zt.HIDE);
                if (Bt(this._element).trigger(n), this._isShown && !n.isDefaultPrevented()) {
                    this._isShown = !1;
                    var i = Bt(this._element).hasClass(ne);
                    if (i && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), 
                    Bt(document).off(Zt.FOCUSIN), Bt(this._element).removeClass(ie), Bt(this._element).off(Zt.CLICK_DISMISS), 
                    Bt(this._dialog).off(Zt.MOUSEDOWN_DISMISS), i) {
                        var r = Cn.getTransitionDurationFromElement(this._element);
                        Bt(this._element).one(Cn.TRANSITION_END, function(t) {
                            return e._hideModal(t);
                        }).emulateTransitionEnd(r);
                    } else this._hideModal();
                }
            }
        }, t.dispose = function() {
            Bt.removeData(this._element, Gt), Bt(window, document, this._element, this._backdrop).off(qt), 
            this._config = null, this._element = null, this._dialog = null, this._backdrop = null, 
            this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, 
            this._scrollbarWidth = null;
        }, t.handleUpdate = function() {
            this._adjustDialog();
        }, t._getConfig = function(t) {
            return t = h({}, Xt, t), Cn.typeCheckConfig(Yt, t, Jt), t;
        }, t._showElement = function(t) {
            var e = this, n = Bt(this._element).hasClass(ne);
            this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), 
            this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), 
            this._element.scrollTop = 0, n && Cn.reflow(this._element), Bt(this._element).addClass(ie), 
            this._config.focus && this._enforceFocus();
            var i = Bt.Event(Zt.SHOWN, {
                relatedTarget: t
            }), r = function() {
                e._config.focus && e._element.focus(), e._isTransitioning = !1, Bt(e._element).trigger(i);
            };
            if (n) {
                var s = Cn.getTransitionDurationFromElement(this._element);
                Bt(this._dialog).one(Cn.TRANSITION_END, r).emulateTransitionEnd(s);
            } else r();
        }, t._enforceFocus = function() {
            var e = this;
            Bt(document).off(Zt.FOCUSIN).on(Zt.FOCUSIN, function(t) {
                document !== t.target && e._element !== t.target && 0 === Bt(e._element).has(t.target).length && e._element.focus();
            });
        }, t._setEscapeEvent = function() {
            var e = this;
            this._isShown && this._config.keyboard ? Bt(this._element).on(Zt.KEYDOWN_DISMISS, function(t) {
                27 === t.which && (t.preventDefault(), e.hide());
            }) : this._isShown || Bt(this._element).off(Zt.KEYDOWN_DISMISS);
        }, t._setResizeEvent = function() {
            var e = this;
            this._isShown ? Bt(window).on(Zt.RESIZE, function(t) {
                return e.handleUpdate(t);
            }) : Bt(window).off(Zt.RESIZE);
        }, t._hideModal = function() {
            var t = this;
            this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), 
            this._isTransitioning = !1, this._showBackdrop(function() {
                Bt(document.body).removeClass(ee), t._resetAdjustments(), t._resetScrollbar(), Bt(t._element).trigger(Zt.HIDDEN);
            });
        }, t._removeBackdrop = function() {
            this._backdrop && (Bt(this._backdrop).remove(), this._backdrop = null);
        }, t._showBackdrop = function(t) {
            var e = this, n = Bt(this._element).hasClass(ne) ? ne : "";
            if (this._isShown && this._config.backdrop) {
                if (this._backdrop = document.createElement("div"), this._backdrop.className = te, 
                n && Bt(this._backdrop).addClass(n), Bt(this._backdrop).appendTo(document.body), 
                Bt(this._element).on(Zt.CLICK_DISMISS, function(t) {
                    e._ignoreBackdropClick ? e._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === e._config.backdrop ? e._element.focus() : e.hide());
                }), n && Cn.reflow(this._backdrop), Bt(this._backdrop).addClass(ie), !t) return;
                if (!n) return void t();
                var i = Cn.getTransitionDurationFromElement(this._backdrop);
                Bt(this._backdrop).one(Cn.TRANSITION_END, t).emulateTransitionEnd(i);
            } else if (!this._isShown && this._backdrop) {
                Bt(this._backdrop).removeClass(ie);
                var r = function() {
                    e._removeBackdrop(), t && t();
                };
                if (Bt(this._element).hasClass(ne)) {
                    var s = Cn.getTransitionDurationFromElement(this._backdrop);
                    Bt(this._backdrop).one(Cn.TRANSITION_END, r).emulateTransitionEnd(s);
                } else r();
            } else t && t();
        }, t._adjustDialog = function() {
            var t = this._element.scrollHeight > document.documentElement.clientHeight;
            !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), 
            this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px");
        }, t._resetAdjustments = function() {
            this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
        }, t._checkScrollbar = function() {
            var t = document.body.getBoundingClientRect();
            this._isBodyOverflowing = t.left + t.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth();
        }, t._setScrollbar = function() {
            var r = this;
            if (this._isBodyOverflowing) {
                Bt(re.FIXED_CONTENT).each(function(t, e) {
                    var n = Bt(e)[0].style.paddingRight, i = Bt(e).css("padding-right");
                    Bt(e).data("padding-right", n).css("padding-right", parseFloat(i) + r._scrollbarWidth + "px");
                }), Bt(re.STICKY_CONTENT).each(function(t, e) {
                    var n = Bt(e)[0].style.marginRight, i = Bt(e).css("margin-right");
                    Bt(e).data("margin-right", n).css("margin-right", parseFloat(i) - r._scrollbarWidth + "px");
                }), Bt(re.NAVBAR_TOGGLER).each(function(t, e) {
                    var n = Bt(e)[0].style.marginRight, i = Bt(e).css("margin-right");
                    Bt(e).data("margin-right", n).css("margin-right", parseFloat(i) + r._scrollbarWidth + "px");
                });
                var t = document.body.style.paddingRight, e = Bt(document.body).css("padding-right");
                Bt(document.body).data("padding-right", t).css("padding-right", parseFloat(e) + this._scrollbarWidth + "px");
            }
        }, t._resetScrollbar = function() {
            Bt(re.FIXED_CONTENT).each(function(t, e) {
                var n = Bt(e).data("padding-right");
                "undefined" != typeof n && Bt(e).css("padding-right", n).removeData("padding-right");
            }), Bt(re.STICKY_CONTENT + ", " + re.NAVBAR_TOGGLER).each(function(t, e) {
                var n = Bt(e).data("margin-right");
                "undefined" != typeof n && Bt(e).css("margin-right", n).removeData("margin-right");
            });
            var t = Bt(document.body).data("padding-right");
            "undefined" != typeof t && Bt(document.body).css("padding-right", t).removeData("padding-right");
        }, t._getScrollbarWidth = function() {
            var t = document.createElement("div");
            t.className = $t, document.body.appendChild(t);
            var e = t.getBoundingClientRect().width - t.clientWidth;
            return document.body.removeChild(t), e;
        }, r._jQueryInterface = function(n, i) {
            return this.each(function() {
                var t = Bt(this).data(Gt), e = h({}, Xt, Bt(this).data(), "object" == typeof n && n ? n : {});
                if (t || (t = new r(this, e), Bt(this).data(Gt, t)), "string" == typeof n) {
                    if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
                    t[n](i);
                } else e.show && t.show(i);
            });
        }, o(r, null, [ {
            key: "VERSION",
            get: function() {
                return "4.1.1";
            }
        }, {
            key: "Default",
            get: function() {
                return Xt;
            }
        } ]), r;
    }(), Bt(document).on(Zt.CLICK_DATA_API, re.DATA_TOGGLE, function(t) {
        var e, n = this, i = Cn.getSelectorFromElement(this);
        i && (e = Bt(i)[0]);
        var r = Bt(e).data(Gt) ? "toggle" : h({}, Bt(e).data(), Bt(this).data());
        "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();
        var s = Bt(e).one(Zt.SHOW, function(t) {
            t.isDefaultPrevented() || s.one(Zt.HIDDEN, function() {
                Bt(n).is(":visible") && n.focus();
            });
        });
        se._jQueryInterface.call(Bt(e), r, this);
    }), Bt.fn[Yt] = se._jQueryInterface, Bt.fn[Yt].Constructor = se, Bt.fn[Yt].noConflict = function() {
        return Bt.fn[Yt] = zt, se._jQueryInterface;
    }, se), Nn = (ae = "tooltip", he = "." + (le = "bs.tooltip"), ce = (oe = e).fn[ae], 
    ue = "bs-tooltip", fe = new RegExp("(^|\\s)" + ue + "\\S+", "g"), ge = {
        animation: !0,
        template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !(_e = {
            AUTO: "auto",
            TOP: "top",
            RIGHT: "right",
            BOTTOM: "bottom",
            LEFT: "left"
        }),
        selector: !(de = {
            animation: "boolean",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            offset: "(number|string)",
            container: "(string|element|boolean)",
            fallbackPlacement: "(string|array)",
            boundary: "(string|element)"
        }),
        placement: "top",
        offset: 0,
        container: !1,
        fallbackPlacement: "flip",
        boundary: "scrollParent"
    }, pe = "out", ve = {
        HIDE: "hide" + he,
        HIDDEN: "hidden" + he,
        SHOW: (me = "show") + he,
        SHOWN: "shown" + he,
        INSERTED: "inserted" + he,
        CLICK: "click" + he,
        FOCUSIN: "focusin" + he,
        FOCUSOUT: "focusout" + he,
        MOUSEENTER: "mouseenter" + he,
        MOUSELEAVE: "mouseleave" + he
    }, Ee = "fade", ye = "show", Te = ".tooltip-inner", Ce = ".arrow", Ie = "hover", 
    Ae = "focus", De = "click", be = "manual", Se = function() {
        function i(t, e) {
            if ("undefined" == typeof c) throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");
            this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, 
            this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, 
            this._setListeners();
        }
        var t = i.prototype;
        return t.enable = function() {
            this._isEnabled = !0;
        }, t.disable = function() {
            this._isEnabled = !1;
        }, t.toggleEnabled = function() {
            this._isEnabled = !this._isEnabled;
        }, t.toggle = function(t) {
            if (this._isEnabled) if (t) {
                var e = this.constructor.DATA_KEY, n = oe(t.currentTarget).data(e);
                n || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), oe(t.currentTarget).data(e, n)), 
                n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n);
            } else {
                if (oe(this.getTipElement()).hasClass(ye)) return void this._leave(null, this);
                this._enter(null, this);
            }
        }, t.dispose = function() {
            clearTimeout(this._timeout), oe.removeData(this.element, this.constructor.DATA_KEY), 
            oe(this.element).off(this.constructor.EVENT_KEY), oe(this.element).closest(".modal").off("hide.bs.modal"), 
            this.tip && oe(this.tip).remove(), this._isEnabled = null, this._timeout = null, 
            this._hoverState = null, (this._activeTrigger = null) !== this._popper && this._popper.destroy(), 
            this._popper = null, this.element = null, this.config = null, this.tip = null;
        }, t.show = function() {
            var e = this;
            if ("none" === oe(this.element).css("display")) throw new Error("Please use show on visible elements");
            var t = oe.Event(this.constructor.Event.SHOW);
            if (this.isWithContent() && this._isEnabled) {
                oe(this.element).trigger(t);
                var n = oe.contains(this.element.ownerDocument.documentElement, this.element);
                if (t.isDefaultPrevented() || !n) return;
                var i = this.getTipElement(), r = Cn.getUID(this.constructor.NAME);
                i.setAttribute("id", r), this.element.setAttribute("aria-describedby", r), this.setContent(), 
                this.config.animation && oe(i).addClass(Ee);
                var s = "function" == typeof this.config.placement ? this.config.placement.call(this, i, this.element) : this.config.placement, o = this._getAttachment(s);
                this.addAttachmentClass(o);
                var a = !1 === this.config.container ? document.body : oe(this.config.container);
                oe(i).data(this.constructor.DATA_KEY, this), oe.contains(this.element.ownerDocument.documentElement, this.tip) || oe(i).appendTo(a), 
                oe(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new c(this.element, i, {
                    placement: o,
                    modifiers: {
                        offset: {
                            offset: this.config.offset
                        },
                        flip: {
                            behavior: this.config.fallbackPlacement
                        },
                        arrow: {
                            element: Ce
                        },
                        preventOverflow: {
                            boundariesElement: this.config.boundary
                        }
                    },
                    onCreate: function(t) {
                        t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t);
                    },
                    onUpdate: function(t) {
                        e._handlePopperPlacementChange(t);
                    }
                }), oe(i).addClass(ye), "ontouchstart" in document.documentElement && oe(document.body).children().on("mouseover", null, oe.noop);
                var l = function() {
                    e.config.animation && e._fixTransition();
                    var t = e._hoverState;
                    e._hoverState = null, oe(e.element).trigger(e.constructor.Event.SHOWN), t === pe && e._leave(null, e);
                };
                if (oe(this.tip).hasClass(Ee)) {
                    var h = Cn.getTransitionDurationFromElement(this.tip);
                    oe(this.tip).one(Cn.TRANSITION_END, l).emulateTransitionEnd(h);
                } else l();
            }
        }, t.hide = function(t) {
            var e = this, n = this.getTipElement(), i = oe.Event(this.constructor.Event.HIDE), r = function() {
                e._hoverState !== me && n.parentNode && n.parentNode.removeChild(n), e._cleanTipClass(), 
                e.element.removeAttribute("aria-describedby"), oe(e.element).trigger(e.constructor.Event.HIDDEN), 
                null !== e._popper && e._popper.destroy(), t && t();
            };
            if (oe(this.element).trigger(i), !i.isDefaultPrevented()) {
                if (oe(n).removeClass(ye), "ontouchstart" in document.documentElement && oe(document.body).children().off("mouseover", null, oe.noop), 
                this._activeTrigger[De] = !1, this._activeTrigger[Ae] = !1, this._activeTrigger[Ie] = !1, 
                oe(this.tip).hasClass(Ee)) {
                    var s = Cn.getTransitionDurationFromElement(n);
                    oe(n).one(Cn.TRANSITION_END, r).emulateTransitionEnd(s);
                } else r();
                this._hoverState = "";
            }
        }, t.update = function() {
            null !== this._popper && this._popper.scheduleUpdate();
        }, t.isWithContent = function() {
            return Boolean(this.getTitle());
        }, t.addAttachmentClass = function(t) {
            oe(this.getTipElement()).addClass(ue + "-" + t);
        }, t.getTipElement = function() {
            return this.tip = this.tip || oe(this.config.template)[0], this.tip;
        }, t.setContent = function() {
            var t = oe(this.getTipElement());
            this.setElementContent(t.find(Te), this.getTitle()), t.removeClass(Ee + " " + ye);
        }, t.setElementContent = function(t, e) {
            var n = this.config.html;
            "object" == typeof e && (e.nodeType || e.jquery) ? n ? oe(e).parent().is(t) || t.empty().append(e) : t.text(oe(e).text()) : t[n ? "html" : "text"](e);
        }, t.getTitle = function() {
            var t = this.element.getAttribute("data-original-title");
            return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), 
            t;
        }, t._getAttachment = function(t) {
            return _e[t.toUpperCase()];
        }, t._setListeners = function() {
            var i = this;
            this.config.trigger.split(" ").forEach(function(t) {
                if ("click" === t) oe(i.element).on(i.constructor.Event.CLICK, i.config.selector, function(t) {
                    return i.toggle(t);
                }); else if (t !== be) {
                    var e = t === Ie ? i.constructor.Event.MOUSEENTER : i.constructor.Event.FOCUSIN, n = t === Ie ? i.constructor.Event.MOUSELEAVE : i.constructor.Event.FOCUSOUT;
                    oe(i.element).on(e, i.config.selector, function(t) {
                        return i._enter(t);
                    }).on(n, i.config.selector, function(t) {
                        return i._leave(t);
                    });
                }
                oe(i.element).closest(".modal").on("hide.bs.modal", function() {
                    return i.hide();
                });
            }), this.config.selector ? this.config = h({}, this.config, {
                trigger: "manual",
                selector: ""
            }) : this._fixTitle();
        }, t._fixTitle = function() {
            var t = typeof this.element.getAttribute("data-original-title");
            (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), 
            this.element.setAttribute("title", ""));
        }, t._enter = function(t, e) {
            var n = this.constructor.DATA_KEY;
            (e = e || oe(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), 
            oe(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusin" === t.type ? Ae : Ie] = !0), 
            oe(e.getTipElement()).hasClass(ye) || e._hoverState === me ? e._hoverState = me : (clearTimeout(e._timeout), 
            e._hoverState = me, e.config.delay && e.config.delay.show ? e._timeout = setTimeout(function() {
                e._hoverState === me && e.show();
            }, e.config.delay.show) : e.show());
        }, t._leave = function(t, e) {
            var n = this.constructor.DATA_KEY;
            (e = e || oe(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), 
            oe(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusout" === t.type ? Ae : Ie] = !1), 
            e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = pe, e.config.delay && e.config.delay.hide ? e._timeout = setTimeout(function() {
                e._hoverState === pe && e.hide();
            }, e.config.delay.hide) : e.hide());
        }, t._isWithActiveTrigger = function() {
            for (var t in this._activeTrigger) if (this._activeTrigger[t]) return !0;
            return !1;
        }, t._getConfig = function(t) {
            return "number" == typeof (t = h({}, this.constructor.Default, oe(this.element).data(), "object" == typeof t && t ? t : {})).delay && (t.delay = {
                show: t.delay,
                hide: t.delay
            }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), 
            Cn.typeCheckConfig(ae, t, this.constructor.DefaultType), t;
        }, t._getDelegateConfig = function() {
            var t = {};
            if (this.config) for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
            return t;
        }, t._cleanTipClass = function() {
            var t = oe(this.getTipElement()), e = t.attr("class").match(fe);
            null !== e && 0 < e.length && t.removeClass(e.join(""));
        }, t._handlePopperPlacementChange = function(t) {
            this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement));
        }, t._fixTransition = function() {
            var t = this.getTipElement(), e = this.config.animation;
            null === t.getAttribute("x-placement") && (oe(t).removeClass(Ee), this.config.animation = !1, 
            this.hide(), this.show(), this.config.animation = e);
        }, i._jQueryInterface = function(n) {
            return this.each(function() {
                var t = oe(this).data(le), e = "object" == typeof n && n;
                if ((t || !/dispose|hide/.test(n)) && (t || (t = new i(this, e), oe(this).data(le, t)), 
                "string" == typeof n)) {
                    if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
                    t[n]();
                }
            });
        }, o(i, null, [ {
            key: "VERSION",
            get: function() {
                return "4.1.1";
            }
        }, {
            key: "Default",
            get: function() {
                return ge;
            }
        }, {
            key: "NAME",
            get: function() {
                return ae;
            }
        }, {
            key: "DATA_KEY",
            get: function() {
                return le;
            }
        }, {
            key: "Event",
            get: function() {
                return ve;
            }
        }, {
            key: "EVENT_KEY",
            get: function() {
                return he;
            }
        }, {
            key: "DefaultType",
            get: function() {
                return de;
            }
        } ]), i;
    }(), oe.fn[ae] = Se._jQueryInterface, oe.fn[ae].Constructor = Se, oe.fn[ae].noConflict = function() {
        return oe.fn[ae] = ce, Se._jQueryInterface;
    }, Se), On = (Ne = "popover", ke = "." + (Oe = "bs.popover"), Pe = (we = e).fn[Ne], 
    Le = "bs-popover", je = new RegExp("(^|\\s)" + Le + "\\S+", "g"), Re = h({}, Nn.Default, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
    }), He = h({}, Nn.DefaultType, {
        content: "(string|element|function)"
    }), We = "fade", xe = ".popover-header", Ue = ".popover-body", Ke = {
        HIDE: "hide" + ke,
        HIDDEN: "hidden" + ke,
        SHOW: (Me = "show") + ke,
        SHOWN: "shown" + ke,
        INSERTED: "inserted" + ke,
        CLICK: "click" + ke,
        FOCUSIN: "focusin" + ke,
        FOCUSOUT: "focusout" + ke,
        MOUSEENTER: "mouseenter" + ke,
        MOUSELEAVE: "mouseleave" + ke
    }, Fe = function(t) {
        var e, n;
        function i() {
            return t.apply(this, arguments) || this;
        }
        n = t, (e = i).prototype = Object.create(n.prototype), (e.prototype.constructor = e).__proto__ = n;
        var r = i.prototype;
        return r.isWithContent = function() {
            return this.getTitle() || this._getContent();
        }, r.addAttachmentClass = function(t) {
            we(this.getTipElement()).addClass(Le + "-" + t);
        }, r.getTipElement = function() {
            return this.tip = this.tip || we(this.config.template)[0], this.tip;
        }, r.setContent = function() {
            var t = we(this.getTipElement());
            this.setElementContent(t.find(xe), this.getTitle());
            var e = this._getContent();
            "function" == typeof e && (e = e.call(this.element)), this.setElementContent(t.find(Ue), e), 
            t.removeClass(We + " " + Me);
        }, r._getContent = function() {
            return this.element.getAttribute("data-content") || this.config.content;
        }, r._cleanTipClass = function() {
            var t = we(this.getTipElement()), e = t.attr("class").match(je);
            null !== e && 0 < e.length && t.removeClass(e.join(""));
        }, i._jQueryInterface = function(n) {
            return this.each(function() {
                var t = we(this).data(Oe), e = "object" == typeof n ? n : null;
                if ((t || !/destroy|hide/.test(n)) && (t || (t = new i(this, e), we(this).data(Oe, t)), 
                "string" == typeof n)) {
                    if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
                    t[n]();
                }
            });
        }, o(i, null, [ {
            key: "VERSION",
            get: function() {
                return "4.1.1";
            }
        }, {
            key: "Default",
            get: function() {
                return Re;
            }
        }, {
            key: "NAME",
            get: function() {
                return Ne;
            }
        }, {
            key: "DATA_KEY",
            get: function() {
                return Oe;
            }
        }, {
            key: "Event",
            get: function() {
                return Ke;
            }
        }, {
            key: "EVENT_KEY",
            get: function() {
                return ke;
            }
        }, {
            key: "DefaultType",
            get: function() {
                return He;
            }
        } ]), i;
    }(Nn), we.fn[Ne] = Fe._jQueryInterface, we.fn[Ne].Constructor = Fe, we.fn[Ne].noConflict = function() {
        return we.fn[Ne] = Pe, Fe._jQueryInterface;
    }, Fe), kn = (Qe = "scrollspy", Ye = "." + (Be = "bs.scrollspy"), Ge = (Ve = e).fn[Qe], 
    qe = {
        offset: 10,
        method: "auto",
        target: ""
    }, ze = {
        offset: "number",
        method: "string",
        target: "(string|element)"
    }, Xe = {
        ACTIVATE: "activate" + Ye,
        SCROLL: "scroll" + Ye,
        LOAD_DATA_API: "load" + Ye + ".data-api"
    }, Je = "dropdown-item", Ze = "active", $e = {
        DATA_SPY: '[data-spy="scroll"]',
        ACTIVE: ".active",
        NAV_LIST_GROUP: ".nav, .list-group",
        NAV_LINKS: ".nav-link",
        NAV_ITEMS: ".nav-item",
        LIST_ITEMS: ".list-group-item",
        DROPDOWN: ".dropdown",
        DROPDOWN_ITEMS: ".dropdown-item",
        DROPDOWN_TOGGLE: ".dropdown-toggle"
    }, tn = "offset", en = "position", nn = function() {
        function n(t, e) {
            var n = this;
            this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(e), 
            this._selector = this._config.target + " " + $e.NAV_LINKS + "," + this._config.target + " " + $e.LIST_ITEMS + "," + this._config.target + " " + $e.DROPDOWN_ITEMS, 
            this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, 
            Ve(this._scrollElement).on(Xe.SCROLL, function(t) {
                return n._process(t);
            }), this.refresh(), this._process();
        }
        var t = n.prototype;
        return t.refresh = function() {
            var e = this, t = this._scrollElement === this._scrollElement.window ? tn : en, r = "auto" === this._config.method ? t : this._config.method, s = r === en ? this._getScrollTop() : 0;
            this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), 
            Ve.makeArray(Ve(this._selector)).map(function(t) {
                var e, n = Cn.getSelectorFromElement(t);
                if (n && (e = Ve(n)[0]), e) {
                    var i = e.getBoundingClientRect();
                    if (i.width || i.height) return [ Ve(e)[r]().top + s, n ];
                }
                return null;
            }).filter(function(t) {
                return t;
            }).sort(function(t, e) {
                return t[0] - e[0];
            }).forEach(function(t) {
                e._offsets.push(t[0]), e._targets.push(t[1]);
            });
        }, t.dispose = function() {
            Ve.removeData(this._element, Be), Ve(this._scrollElement).off(Ye), this._element = null, 
            this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, 
            this._targets = null, this._activeTarget = null, this._scrollHeight = null;
        }, t._getConfig = function(t) {
            if ("string" != typeof (t = h({}, qe, "object" == typeof t && t ? t : {})).target) {
                var e = Ve(t.target).attr("id");
                e || (e = Cn.getUID(Qe), Ve(t.target).attr("id", e)), t.target = "#" + e;
            }
            return Cn.typeCheckConfig(Qe, t, ze), t;
        }, t._getScrollTop = function() {
            return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
        }, t._getScrollHeight = function() {
            return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
        }, t._getOffsetHeight = function() {
            return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
        }, t._process = function() {
            var t = this._getScrollTop() + this._config.offset, e = this._getScrollHeight(), n = this._config.offset + e - this._getOffsetHeight();
            if (this._scrollHeight !== e && this.refresh(), n <= t) {
                var i = this._targets[this._targets.length - 1];
                this._activeTarget !== i && this._activate(i);
            } else {
                if (this._activeTarget && t < this._offsets[0] && 0 < this._offsets[0]) return this._activeTarget = null, 
                void this._clear();
                for (var r = this._offsets.length; r--; ) {
                    this._activeTarget !== this._targets[r] && t >= this._offsets[r] && ("undefined" == typeof this._offsets[r + 1] || t < this._offsets[r + 1]) && this._activate(this._targets[r]);
                }
            }
        }, t._activate = function(e) {
            this._activeTarget = e, this._clear();
            var t = this._selector.split(",");
            t = t.map(function(t) {
                return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]';
            });
            var n = Ve(t.join(","));
            n.hasClass(Je) ? (n.closest($e.DROPDOWN).find($e.DROPDOWN_TOGGLE).addClass(Ze), 
            n.addClass(Ze)) : (n.addClass(Ze), n.parents($e.NAV_LIST_GROUP).prev($e.NAV_LINKS + ", " + $e.LIST_ITEMS).addClass(Ze), 
            n.parents($e.NAV_LIST_GROUP).prev($e.NAV_ITEMS).children($e.NAV_LINKS).addClass(Ze)), 
            Ve(this._scrollElement).trigger(Xe.ACTIVATE, {
                relatedTarget: e
            });
        }, t._clear = function() {
            Ve(this._selector).filter($e.ACTIVE).removeClass(Ze);
        }, n._jQueryInterface = function(e) {
            return this.each(function() {
                var t = Ve(this).data(Be);
                if (t || (t = new n(this, "object" == typeof e && e), Ve(this).data(Be, t)), "string" == typeof e) {
                    if ("undefined" == typeof t[e]) throw new TypeError('No method named "' + e + '"');
                    t[e]();
                }
            });
        }, o(n, null, [ {
            key: "VERSION",
            get: function() {
                return "4.1.1";
            }
        }, {
            key: "Default",
            get: function() {
                return qe;
            }
        } ]), n;
    }(), Ve(window).on(Xe.LOAD_DATA_API, function() {
        for (var t = Ve.makeArray(Ve($e.DATA_SPY)), e = t.length; e--; ) {
            var n = Ve(t[e]);
            nn._jQueryInterface.call(n, n.data());
        }
    }), Ve.fn[Qe] = nn._jQueryInterface, Ve.fn[Qe].Constructor = nn, Ve.fn[Qe].noConflict = function() {
        return Ve.fn[Qe] = Ge, nn._jQueryInterface;
    }, nn), Pn = (on = "." + (sn = "bs.tab"), an = (rn = e).fn.tab, ln = {
        HIDE: "hide" + on,
        HIDDEN: "hidden" + on,
        SHOW: "show" + on,
        SHOWN: "shown" + on,
        CLICK_DATA_API: "click" + on + ".data-api"
    }, hn = "dropdown-menu", cn = "active", un = "disabled", fn = "fade", dn = "show", 
    _n = ".dropdown", gn = ".nav, .list-group", mn = ".active", pn = "> li > .active", 
    vn = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', En = ".dropdown-toggle", 
    yn = "> .dropdown-menu .active", Tn = function() {
        function i(t) {
            this._element = t;
        }
        var t = i.prototype;
        return t.show = function() {
            var n = this;
            if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && rn(this._element).hasClass(cn) || rn(this._element).hasClass(un))) {
                var t, i, e = rn(this._element).closest(gn)[0], r = Cn.getSelectorFromElement(this._element);
                if (e) {
                    var s = "UL" === e.nodeName ? pn : mn;
                    i = (i = rn.makeArray(rn(e).find(s)))[i.length - 1];
                }
                var o = rn.Event(ln.HIDE, {
                    relatedTarget: this._element
                }), a = rn.Event(ln.SHOW, {
                    relatedTarget: i
                });
                if (i && rn(i).trigger(o), rn(this._element).trigger(a), !a.isDefaultPrevented() && !o.isDefaultPrevented()) {
                    r && (t = rn(r)[0]), this._activate(this._element, e);
                    var l = function() {
                        var t = rn.Event(ln.HIDDEN, {
                            relatedTarget: n._element
                        }), e = rn.Event(ln.SHOWN, {
                            relatedTarget: i
                        });
                        rn(i).trigger(t), rn(n._element).trigger(e);
                    };
                    t ? this._activate(t, t.parentNode, l) : l();
                }
            }
        }, t.dispose = function() {
            rn.removeData(this._element, sn), this._element = null;
        }, t._activate = function(t, e, n) {
            var i = this, r = ("UL" === e.nodeName ? rn(e).find(pn) : rn(e).children(mn))[0], s = n && r && rn(r).hasClass(fn), o = function() {
                return i._transitionComplete(t, r, n);
            };
            if (r && s) {
                var a = Cn.getTransitionDurationFromElement(r);
                rn(r).one(Cn.TRANSITION_END, o).emulateTransitionEnd(a);
            } else o();
        }, t._transitionComplete = function(t, e, n) {
            if (e) {
                rn(e).removeClass(dn + " " + cn);
                var i = rn(e.parentNode).find(yn)[0];
                i && rn(i).removeClass(cn), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1);
            }
            if (rn(t).addClass(cn), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), 
            Cn.reflow(t), rn(t).addClass(dn), t.parentNode && rn(t.parentNode).hasClass(hn)) {
                var r = rn(t).closest(_n)[0];
                r && rn(r).find(En).addClass(cn), t.setAttribute("aria-expanded", !0);
            }
            n && n();
        }, i._jQueryInterface = function(n) {
            return this.each(function() {
                var t = rn(this), e = t.data(sn);
                if (e || (e = new i(this), t.data(sn, e)), "string" == typeof n) {
                    if ("undefined" == typeof e[n]) throw new TypeError('No method named "' + n + '"');
                    e[n]();
                }
            });
        }, o(i, null, [ {
            key: "VERSION",
            get: function() {
                return "4.1.1";
            }
        } ]), i;
    }(), rn(document).on(ln.CLICK_DATA_API, vn, function(t) {
        t.preventDefault(), Tn._jQueryInterface.call(rn(this), "show");
    }), rn.fn.tab = Tn._jQueryInterface, rn.fn.tab.Constructor = Tn, rn.fn.tab.noConflict = function() {
        return rn.fn.tab = an, Tn._jQueryInterface;
    }, Tn);
    !function(t) {
        if ("undefined" == typeof t) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
        var e = t.fn.jquery.split(" ")[0].split(".");
        if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || 4 <= e[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
    }(e), t.Util = Cn, t.Alert = In, t.Button = An, t.Carousel = Dn, t.Collapse = bn, 
    t.Dropdown = Sn, t.Modal = wn, t.Popover = On, t.Scrollspy = kn, t.Tab = Pn, t.Tooltip = Nn, 
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
});

/*! pace 1.0.2 */
(function() {
    var a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X = [].slice, Y = {}.hasOwnProperty, Z = function(a, b) {
        function c() {
            this.constructor = a;
        }
        for (var d in b) Y.call(b, d) && (a[d] = b[d]);
        return c.prototype = b.prototype, a.prototype = new c(), a.__super__ = b.prototype, 
        a;
    }, $ = [].indexOf || function(a) {
        for (var b = 0, c = this.length; c > b; b++) if (b in this && this[b] === a) return b;
        return -1;
    };
    for (u = {
        catchupTime: 100,
        initialRate: .03,
        minTime: 250,
        ghostTime: 100,
        maxProgressPerFrame: 20,
        easeFactor: 1.25,
        startOnPageLoad: !0,
        restartOnPushState: !0,
        restartOnRequestAfter: 500,
        target: "body",
        elements: {
            checkInterval: 100,
            selectors: [ "body" ]
        },
        eventLag: {
            minSamples: 10,
            sampleCount: 3,
            lagThreshold: 3
        },
        ajax: {
            trackMethods: [ "GET" ],
            trackWebSockets: !0,
            ignoreURLs: []
        }
    }, C = function() {
        var a;
        return null != (a = "undefined" != typeof performance && null !== performance && "function" == typeof performance.now ? performance.now() : void 0) ? a : +new Date();
    }, E = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame, 
    t = window.cancelAnimationFrame || window.mozCancelAnimationFrame, null == E && (E = function(a) {
        return setTimeout(a, 50);
    }, t = function(a) {
        return clearTimeout(a);
    }), G = function(a) {
        var b, c;
        return b = C(), (c = function() {
            var d;
            return d = C() - b, d >= 33 ? (b = C(), a(d, function() {
                return E(c);
            })) : setTimeout(c, 33 - d);
        })();
    }, F = function() {
        var a, b, c;
        return c = arguments[0], b = arguments[1], a = 3 <= arguments.length ? X.call(arguments, 2) : [], 
        "function" == typeof c[b] ? c[b].apply(c, a) : c[b];
    }, v = function() {
        var a, b, c, d, e, f, g;
        for (b = arguments[0], d = 2 <= arguments.length ? X.call(arguments, 1) : [], f = 0, 
        g = d.length; g > f; f++) if (c = d[f]) for (a in c) Y.call(c, a) && (e = c[a], 
        null != b[a] && "object" == typeof b[a] && null != e && "object" == typeof e ? v(b[a], e) : b[a] = e);
        return b;
    }, q = function(a) {
        var b, c, d, e, f;
        for (c = b = 0, e = 0, f = a.length; f > e; e++) d = a[e], c += Math.abs(d), b++;
        return c / b;
    }, x = function(a, b) {
        var c, d, e;
        if (null == a && (a = "options"), null == b && (b = !0), e = document.querySelector("[data-pace-" + a + "]")) {
            if (c = e.getAttribute("data-pace-" + a), !b) return c;
            try {
                return JSON.parse(c);
            } catch (f) {
                return d = f, "undefined" != typeof console && null !== console ? console.error("Error parsing inline pace options", d) : void 0;
            }
        }
    }, g = function() {
        function a() {}
        return a.prototype.on = function(a, b, c, d) {
            var e;
            return null == d && (d = !1), null == this.bindings && (this.bindings = {}), null == (e = this.bindings)[a] && (e[a] = []), 
            this.bindings[a].push({
                handler: b,
                ctx: c,
                once: d
            });
        }, a.prototype.once = function(a, b, c) {
            return this.on(a, b, c, !0);
        }, a.prototype.off = function(a, b) {
            var c, d, e;
            if (null != (null != (d = this.bindings) ? d[a] : void 0)) {
                if (null == b) return delete this.bindings[a];
                for (c = 0, e = []; c < this.bindings[a].length; ) this.bindings[a][c].handler === b ? e.push(this.bindings[a].splice(c, 1)) : e.push(c++);
                return e;
            }
        }, a.prototype.trigger = function() {
            var a, b, c, d, e, f, g, h, i;
            if (c = arguments[0], a = 2 <= arguments.length ? X.call(arguments, 1) : [], null != (g = this.bindings) ? g[c] : void 0) {
                for (e = 0, i = []; e < this.bindings[c].length; ) h = this.bindings[c][e], d = h.handler, 
                b = h.ctx, f = h.once, d.apply(null != b ? b : this, a), f ? i.push(this.bindings[c].splice(e, 1)) : i.push(e++);
                return i;
            }
        }, a;
    }(), j = window.Pace || {}, window.Pace = j, v(j, g.prototype), D = j.options = v({}, u, window.paceOptions, x()), 
    U = [ "ajax", "document", "eventLag", "elements" ], Q = 0, S = U.length; S > Q; Q++) K = U[Q], 
    D[K] === !0 && (D[K] = u[K]);
    i = function(a) {
        function b() {
            return V = b.__super__.constructor.apply(this, arguments);
        }
        return Z(b, a), b;
    }(Error), b = function() {
        function a() {
            this.progress = 0;
        }
        return a.prototype.getElement = function() {
            var a;
            if (null == this.el) {
                if (a = document.querySelector(D.target), !a) throw new i();
                this.el = document.createElement("div"), this.el.className = "pace pace-active", 
                document.body.className = document.body.className.replace(/pace-done/g, ""), document.body.className += " pace-running", 
                this.el.innerHTML = '<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>', 
                null != a.firstChild ? a.insertBefore(this.el, a.firstChild) : a.appendChild(this.el);
            }
            return this.el;
        }, a.prototype.finish = function() {
            var a;
            return a = this.getElement(), a.className = a.className.replace("pace-active", ""), 
            a.className += " pace-inactive", document.body.className = document.body.className.replace("pace-running", ""), 
            document.body.className += " pace-done";
        }, a.prototype.update = function(a) {
            return this.progress = a, this.render();
        }, a.prototype.destroy = function() {
            try {
                this.getElement().parentNode.removeChild(this.getElement());
            } catch (a) {
                i = a;
            }
            return this.el = void 0;
        }, a.prototype.render = function() {
            var a, b, c, d, e, f, g;
            if (null == document.querySelector(D.target)) return !1;
            for (a = this.getElement(), d = "translate3d(" + this.progress + "%, 0, 0)", g = [ "webkitTransform", "msTransform", "transform" ], 
            e = 0, f = g.length; f > e; e++) b = g[e], a.children[0].style[b] = d;
            return (!this.lastRenderedProgress || this.lastRenderedProgress | 0 !== this.progress | 0) && (a.children[0].setAttribute("data-progress-text", "" + (0 | this.progress) + "%"), 
            this.progress >= 100 ? c = "99" : (c = this.progress < 10 ? "0" : "", c += 0 | this.progress), 
            a.children[0].setAttribute("data-progress", "" + c)), this.lastRenderedProgress = this.progress;
        }, a.prototype.done = function() {
            return this.progress >= 100;
        }, a;
    }(), h = function() {
        function a() {
            this.bindings = {};
        }
        return a.prototype.trigger = function(a, b) {
            var c, d, e, f, g;
            if (null != this.bindings[a]) {
                for (f = this.bindings[a], g = [], d = 0, e = f.length; e > d; d++) c = f[d], g.push(c.call(this, b));
                return g;
            }
        }, a.prototype.on = function(a, b) {
            var c;
            return null == (c = this.bindings)[a] && (c[a] = []), this.bindings[a].push(b);
        }, a;
    }(), P = window.XMLHttpRequest, O = window.XDomainRequest, N = window.WebSocket, 
    w = function(a, b) {
        var c, d, e;
        e = [];
        for (d in b.prototype) try {
            null == a[d] && "function" != typeof b[d] ? "function" == typeof Object.defineProperty ? e.push(Object.defineProperty(a, d, {
                get: function() {
                    return b.prototype[d];
                },
                configurable: !0,
                enumerable: !0
            })) : e.push(a[d] = b.prototype[d]) : e.push(void 0);
        } catch (f) {
            c = f;
        }
        return e;
    }, A = [], j.ignore = function() {
        var a, b, c;
        return b = arguments[0], a = 2 <= arguments.length ? X.call(arguments, 1) : [], 
        A.unshift("ignore"), c = b.apply(null, a), A.shift(), c;
    }, j.track = function() {
        var a, b, c;
        return b = arguments[0], a = 2 <= arguments.length ? X.call(arguments, 1) : [], 
        A.unshift("track"), c = b.apply(null, a), A.shift(), c;
    }, J = function(a) {
        var b;
        if (null == a && (a = "GET"), "track" === A[0]) return "force";
        if (!A.length && D.ajax) {
            if ("socket" === a && D.ajax.trackWebSockets) return !0;
            if (b = a.toUpperCase(), $.call(D.ajax.trackMethods, b) >= 0) return !0;
        }
        return !1;
    }, k = function(a) {
        function b() {
            var a, c = this;
            b.__super__.constructor.apply(this, arguments), a = function(a) {
                var b;
                return b = a.open, a.open = function(d, e, f) {
                    return J(d) && c.trigger("request", {
                        type: d,
                        url: e,
                        request: a
                    }), b.apply(a, arguments);
                };
            }, window.XMLHttpRequest = function(b) {
                var c;
                return c = new P(b), a(c), c;
            };
            try {
                w(window.XMLHttpRequest, P);
            } catch (d) {}
            if (null != O) {
                window.XDomainRequest = function() {
                    var b;
                    return b = new O(), a(b), b;
                };
                try {
                    w(window.XDomainRequest, O);
                } catch (d) {}
            }
            if (null != N && D.ajax.trackWebSockets) {
                window.WebSocket = function(a, b) {
                    var d;
                    return d = null != b ? new N(a, b) : new N(a), J("socket") && c.trigger("request", {
                        type: "socket",
                        url: a,
                        protocols: b,
                        request: d
                    }), d;
                };
                try {
                    w(window.WebSocket, N);
                } catch (d) {}
            }
        }
        return Z(b, a), b;
    }(h), R = null, y = function() {
        return null == R && (R = new k()), R;
    }, I = function(a) {
        var b, c, d, e;
        for (e = D.ajax.ignoreURLs, c = 0, d = e.length; d > c; c++) if (b = e[c], "string" == typeof b) {
            if (-1 !== a.indexOf(b)) return !0;
        } else if (b.test(a)) return !0;
        return !1;
    }, y().on("request", function(b) {
        var c, d, e, f, g;
        return f = b.type, e = b.request, g = b.url, I(g) ? void 0 : j.running || D.restartOnRequestAfter === !1 && "force" !== J(f) ? void 0 : (d = arguments, 
        c = D.restartOnRequestAfter || 0, "boolean" == typeof c && (c = 0), setTimeout(function() {
            var b, c, g, h, i, k;
            if (b = "socket" === f ? e.readyState < 2 : 0 < (h = e.readyState) && 4 > h) {
                for (j.restart(), i = j.sources, k = [], c = 0, g = i.length; g > c; c++) {
                    if (K = i[c], K instanceof a) {
                        K.watch.apply(K, d);
                        break;
                    }
                    k.push(void 0);
                }
                return k;
            }
        }, c));
    }), a = function() {
        function a() {
            var a = this;
            this.elements = [], y().on("request", function() {
                return a.watch.apply(a, arguments);
            });
        }
        return a.prototype.watch = function(a) {
            var b, c, d, e;
            return d = a.type, b = a.request, e = a.url, I(e) ? void 0 : (c = "socket" === d ? new n(b) : new o(b), 
            this.elements.push(c));
        }, a;
    }(), o = function() {
        function a(a) {
            var b, c, d, e, f, g, h = this;
            if (this.progress = 0, null != window.ProgressEvent) for (c = null, a.addEventListener("progress", function(a) {
                return a.lengthComputable ? h.progress = 100 * a.loaded / a.total : h.progress = h.progress + (100 - h.progress) / 2;
            }, !1), g = [ "load", "abort", "timeout", "error" ], d = 0, e = g.length; e > d; d++) b = g[d], 
            a.addEventListener(b, function() {
                return h.progress = 100;
            }, !1); else f = a.onreadystatechange, a.onreadystatechange = function() {
                var b;
                return 0 === (b = a.readyState) || 4 === b ? h.progress = 100 : 3 === a.readyState && (h.progress = 50), 
                "function" == typeof f ? f.apply(null, arguments) : void 0;
            };
        }
        return a;
    }(), n = function() {
        function a(a) {
            var b, c, d, e, f = this;
            for (this.progress = 0, e = [ "error", "open" ], c = 0, d = e.length; d > c; c++) b = e[c], 
            a.addEventListener(b, function() {
                return f.progress = 100;
            }, !1);
        }
        return a;
    }(), d = function() {
        function a(a) {
            var b, c, d, f;
            for (null == a && (a = {}), this.elements = [], null == a.selectors && (a.selectors = []), 
            f = a.selectors, c = 0, d = f.length; d > c; c++) b = f[c], this.elements.push(new e(b));
        }
        return a;
    }(), e = function() {
        function a(a) {
            this.selector = a, this.progress = 0, this.check();
        }
        return a.prototype.check = function() {
            var a = this;
            return document.querySelector(this.selector) ? this.done() : setTimeout(function() {
                return a.check();
            }, D.elements.checkInterval);
        }, a.prototype.done = function() {
            return this.progress = 100;
        }, a;
    }(), c = function() {
        function a() {
            var a, b, c = this;
            this.progress = null != (b = this.states[document.readyState]) ? b : 100, a = document.onreadystatechange, 
            document.onreadystatechange = function() {
                return null != c.states[document.readyState] && (c.progress = c.states[document.readyState]), 
                "function" == typeof a ? a.apply(null, arguments) : void 0;
            };
        }
        return a.prototype.states = {
            loading: 0,
            interactive: 50,
            complete: 100
        }, a;
    }(), f = function() {
        function a() {
            var a, b, c, d, e, f = this;
            this.progress = 0, a = 0, e = [], d = 0, c = C(), b = setInterval(function() {
                var g;
                return g = C() - c - 50, c = C(), e.push(g), e.length > D.eventLag.sampleCount && e.shift(), 
                a = q(e), ++d >= D.eventLag.minSamples && a < D.eventLag.lagThreshold ? (f.progress = 100, 
                clearInterval(b)) : f.progress = 100 * (3 / (a + 3));
            }, 50);
        }
        return a;
    }(), m = function() {
        function a(a) {
            this.source = a, this.last = this.sinceLastUpdate = 0, this.rate = D.initialRate, 
            this.catchup = 0, this.progress = this.lastProgress = 0, null != this.source && (this.progress = F(this.source, "progress"));
        }
        return a.prototype.tick = function(a, b) {
            var c;
            return null == b && (b = F(this.source, "progress")), b >= 100 && (this.done = !0), 
            b === this.last ? this.sinceLastUpdate += a : (this.sinceLastUpdate && (this.rate = (b - this.last) / this.sinceLastUpdate), 
            this.catchup = (b - this.progress) / D.catchupTime, this.sinceLastUpdate = 0, this.last = b), 
            b > this.progress && (this.progress += this.catchup * a), c = 1 - Math.pow(this.progress / 100, D.easeFactor), 
            this.progress += c * this.rate * a, this.progress = Math.min(this.lastProgress + D.maxProgressPerFrame, this.progress), 
            this.progress = Math.max(0, this.progress), this.progress = Math.min(100, this.progress), 
            this.lastProgress = this.progress, this.progress;
        }, a;
    }(), L = null, H = null, r = null, M = null, p = null, s = null, j.running = !1, 
    z = function() {
        return D.restartOnPushState ? j.restart() : void 0;
    }, null != window.history.pushState && (T = window.history.pushState, window.history.pushState = function() {
        return z(), T.apply(window.history, arguments);
    }), null != window.history.replaceState && (W = window.history.replaceState, window.history.replaceState = function() {
        return z(), W.apply(window.history, arguments);
    }), l = {
        ajax: a,
        elements: d,
        document: c,
        eventLag: f
    }, (B = function() {
        var a, c, d, e, f, g, h, i;
        for (j.sources = L = [], g = [ "ajax", "elements", "document", "eventLag" ], c = 0, 
        e = g.length; e > c; c++) a = g[c], D[a] !== !1 && L.push(new l[a](D[a]));
        for (i = null != (h = D.extraSources) ? h : [], d = 0, f = i.length; f > d; d++) K = i[d], 
        L.push(new K(D));
        return j.bar = r = new b(), H = [], M = new m();
    })(), j.stop = function() {
        return j.trigger("stop"), j.running = !1, r.destroy(), s = !0, null != p && ("function" == typeof t && t(p), 
        p = null), B();
    }, j.restart = function() {
        return j.trigger("restart"), j.stop(), j.start();
    }, j.go = function() {
        var a;
        return j.running = !0, r.render(), a = C(), s = !1, p = G(function(b, c) {
            var d, e, f, g, h, i, k, l, n, o, p, q, t, u, v, w;
            for (l = 100 - r.progress, e = p = 0, f = !0, i = q = 0, u = L.length; u > q; i = ++q) for (K = L[i], 
            o = null != H[i] ? H[i] : H[i] = [], h = null != (w = K.elements) ? w : [ K ], k = t = 0, 
            v = h.length; v > t; k = ++t) g = h[k], n = null != o[k] ? o[k] : o[k] = new m(g), 
            f &= n.done, n.done || (e++, p += n.tick(b));
            return d = p / e, r.update(M.tick(b, d)), r.done() || f || s ? (r.update(100), j.trigger("done"), 
            setTimeout(function() {
                return r.finish(), j.running = !1, j.trigger("hide");
            }, Math.max(D.ghostTime, Math.max(D.minTime - (C() - a), 0)))) : c();
        });
    }, j.start = function(a) {
        v(D, a), j.running = !0;
        try {
            r.render();
        } catch (b) {
            i = b;
        }
        return document.querySelector(".pace") ? (j.trigger("start"), j.go()) : setTimeout(j.start, 50);
    }, "function" == typeof define && define.amd ? define([ "pace" ], function() {
        return j;
    }) : "object" == typeof exports ? module.exports = j : D.startOnPageLoad && j.start();
}).call(this);

/*! Select2 4.0.1 | https://github.com/select2/select2/blob/master/LICENSE.md */ !function(a) {
    "function" == typeof define && define.amd ? define([ "jquery" ], a) : a("object" == typeof exports ? require("jquery") : jQuery);
}(function(a) {
    var b = function() {
        if (a && a.fn && a.fn.select2 && a.fn.select2.amd) var b = a.fn.select2.amd;
        var b;
        return function() {
            if (!b || !b.requirejs) {
                b ? c = b : b = {};
                var a, c, d;
                !function(b) {
                    function e(a, b) {
                        return u.call(a, b);
                    }
                    function f(a, b) {
                        var c, d, e, f, g, h, i, j, k, l, m, n = b && b.split("/"), o = s.map, p = o && o["*"] || {};
                        if (a && "." === a.charAt(0)) if (b) {
                            for (a = a.split("/"), g = a.length - 1, s.nodeIdCompat && w.test(a[g]) && (a[g] = a[g].replace(w, "")), 
                            a = n.slice(0, n.length - 1).concat(a), k = 0; k < a.length; k += 1) if (m = a[k], 
                            "." === m) a.splice(k, 1), k -= 1; else if (".." === m) {
                                if (1 === k && (".." === a[2] || ".." === a[0])) break;
                                k > 0 && (a.splice(k - 1, 2), k -= 2);
                            }
                            a = a.join("/");
                        } else 0 === a.indexOf("./") && (a = a.substring(2));
                        if ((n || p) && o) {
                            for (c = a.split("/"), k = c.length; k > 0; k -= 1) {
                                if (d = c.slice(0, k).join("/"), n) for (l = n.length; l > 0; l -= 1) if (e = o[n.slice(0, l).join("/")], 
                                e && (e = e[d])) {
                                    f = e, h = k;
                                    break;
                                }
                                if (f) break;
                                !i && p && p[d] && (i = p[d], j = k);
                            }
                            !f && i && (f = i, h = j), f && (c.splice(0, h, f), a = c.join("/"));
                        }
                        return a;
                    }
                    function g(a, c) {
                        return function() {
                            var d = v.call(arguments, 0);
                            return "string" != typeof d[0] && 1 === d.length && d.push(null), n.apply(b, d.concat([ a, c ]));
                        };
                    }
                    function h(a) {
                        return function(b) {
                            return f(b, a);
                        };
                    }
                    function i(a) {
                        return function(b) {
                            q[a] = b;
                        };
                    }
                    function j(a) {
                        if (e(r, a)) {
                            var c = r[a];
                            delete r[a], t[a] = !0, m.apply(b, c);
                        }
                        if (!e(q, a) && !e(t, a)) throw new Error("No " + a);
                        return q[a];
                    }
                    function k(a) {
                        var b, c = a ? a.indexOf("!") : -1;
                        return c > -1 && (b = a.substring(0, c), a = a.substring(c + 1, a.length)), [ b, a ];
                    }
                    function l(a) {
                        return function() {
                            return s && s.config && s.config[a] || {};
                        };
                    }
                    var m, n, o, p, q = {}, r = {}, s = {}, t = {}, u = Object.prototype.hasOwnProperty, v = [].slice, w = /\.js$/;
                    o = function(a, b) {
                        var c, d = k(a), e = d[0];
                        return a = d[1], e && (e = f(e, b), c = j(e)), e ? a = c && c.normalize ? c.normalize(a, h(b)) : f(a, b) : (a = f(a, b), 
                        d = k(a), e = d[0], a = d[1], e && (c = j(e))), {
                            f: e ? e + "!" + a : a,
                            n: a,
                            pr: e,
                            p: c
                        };
                    }, p = {
                        require: function(a) {
                            return g(a);
                        },
                        exports: function(a) {
                            var b = q[a];
                            return "undefined" != typeof b ? b : q[a] = {};
                        },
                        module: function(a) {
                            return {
                                id: a,
                                uri: "",
                                exports: q[a],
                                config: l(a)
                            };
                        }
                    }, m = function(a, c, d, f) {
                        var h, k, l, m, n, s, u = [], v = typeof d;
                        if (f = f || a, "undefined" === v || "function" === v) {
                            for (c = !c.length && d.length ? [ "require", "exports", "module" ] : c, n = 0; n < c.length; n += 1) if (m = o(c[n], f), 
                            k = m.f, "require" === k) u[n] = p.require(a); else if ("exports" === k) u[n] = p.exports(a), 
                            s = !0; else if ("module" === k) h = u[n] = p.module(a); else if (e(q, k) || e(r, k) || e(t, k)) u[n] = j(k); else {
                                if (!m.p) throw new Error(a + " missing " + k);
                                m.p.load(m.n, g(f, !0), i(k), {}), u[n] = q[k];
                            }
                            l = d ? d.apply(q[a], u) : void 0, a && (h && h.exports !== b && h.exports !== q[a] ? q[a] = h.exports : l === b && s || (q[a] = l));
                        } else a && (q[a] = d);
                    }, a = c = n = function(a, c, d, e, f) {
                        if ("string" == typeof a) return p[a] ? p[a](c) : j(o(a, c).f);
                        if (!a.splice) {
                            if (s = a, s.deps && n(s.deps, s.callback), !c) return;
                            c.splice ? (a = c, c = d, d = null) : a = b;
                        }
                        return c = c || function() {}, "function" == typeof d && (d = e, e = f), e ? m(b, a, c, d) : setTimeout(function() {
                            m(b, a, c, d);
                        }, 4), n;
                    }, n.config = function(a) {
                        return n(a);
                    }, a._defined = q, d = function(a, b, c) {
                        if ("string" != typeof a) throw new Error("See almond README: incorrect module build, no module name");
                        b.splice || (c = b, b = []), e(q, a) || e(r, a) || (r[a] = [ a, b, c ]);
                    }, d.amd = {
                        jQuery: !0
                    };
                }(), b.requirejs = a, b.require = c, b.define = d;
            }
        }(), b.define("almond", function() {}), b.define("jquery", [], function() {
            var b = a || $;
            return null == b && console && console.error && console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."), 
            b;
        }), b.define("select2/utils", [ "jquery" ], function(a) {
            function b(a) {
                var b = a.prototype, c = [];
                for (var d in b) {
                    var e = b[d];
                    "function" == typeof e && "constructor" !== d && c.push(d);
                }
                return c;
            }
            var c = {};
            c.Extend = function(a, b) {
                function c() {
                    this.constructor = a;
                }
                var d = {}.hasOwnProperty;
                for (var e in b) d.call(b, e) && (a[e] = b[e]);
                return c.prototype = b.prototype, a.prototype = new c(), a.__super__ = b.prototype, 
                a;
            }, c.Decorate = function(a, c) {
                function d() {
                    var b = Array.prototype.unshift, d = c.prototype.constructor.length, e = a.prototype.constructor;
                    d > 0 && (b.call(arguments, a.prototype.constructor), e = c.prototype.constructor), 
                    e.apply(this, arguments);
                }
                function e() {
                    this.constructor = d;
                }
                var f = b(c), g = b(a);
                c.displayName = a.displayName, d.prototype = new e();
                for (var h = 0; h < g.length; h++) {
                    var i = g[h];
                    d.prototype[i] = a.prototype[i];
                }
                for (var j = function(a) {
                    var b = function() {};
                    a in d.prototype && (b = d.prototype[a]);
                    var e = c.prototype[a];
                    return function() {
                        var a = Array.prototype.unshift;
                        return a.call(arguments, b), e.apply(this, arguments);
                    };
                }, k = 0; k < f.length; k++) {
                    var l = f[k];
                    d.prototype[l] = j(l);
                }
                return d;
            };
            var d = function() {
                this.listeners = {};
            };
            return d.prototype.on = function(a, b) {
                this.listeners = this.listeners || {}, a in this.listeners ? this.listeners[a].push(b) : this.listeners[a] = [ b ];
            }, d.prototype.trigger = function(a) {
                var b = Array.prototype.slice;
                this.listeners = this.listeners || {}, a in this.listeners && this.invoke(this.listeners[a], b.call(arguments, 1)), 
                "*" in this.listeners && this.invoke(this.listeners["*"], arguments);
            }, d.prototype.invoke = function(a, b) {
                for (var c = 0, d = a.length; d > c; c++) a[c].apply(this, b);
            }, c.Observable = d, c.generateChars = function(a) {
                for (var b = "", c = 0; a > c; c++) {
                    var d = Math.floor(36 * Math.random());
                    b += d.toString(36);
                }
                return b;
            }, c.bind = function(a, b) {
                return function() {
                    a.apply(b, arguments);
                };
            }, c._convertData = function(a) {
                for (var b in a) {
                    var c = b.split("-"), d = a;
                    if (1 !== c.length) {
                        for (var e = 0; e < c.length; e++) {
                            var f = c[e];
                            f = f.substring(0, 1).toLowerCase() + f.substring(1), f in d || (d[f] = {}), e == c.length - 1 && (d[f] = a[b]), 
                            d = d[f];
                        }
                        delete a[b];
                    }
                }
                return a;
            }, c.hasScroll = function(b, c) {
                var d = a(c), e = c.style.overflowX, f = c.style.overflowY;
                return e !== f || "hidden" !== f && "visible" !== f ? "scroll" === e || "scroll" === f ? !0 : d.innerHeight() < c.scrollHeight || d.innerWidth() < c.scrollWidth : !1;
            }, c.escapeMarkup = function(a) {
                var b = {
                    "\\": "&#92;",
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#39;",
                    "/": "&#47;"
                };
                return "string" != typeof a ? a : String(a).replace(/[&<>"'\/\\]/g, function(a) {
                    return b[a];
                });
            }, c.appendMany = function(b, c) {
                if ("1.7" === a.fn.jquery.substr(0, 3)) {
                    var d = a();
                    a.map(c, function(a) {
                        d = d.add(a);
                    }), c = d;
                }
                b.append(c);
            }, c;
        }), b.define("select2/results", [ "jquery", "./utils" ], function(a, b) {
            function c(a, b, d) {
                this.$element = a, this.data = d, this.options = b, c.__super__.constructor.call(this);
            }
            return b.Extend(c, b.Observable), c.prototype.render = function() {
                var b = a('<ul class="select2-results__options" role="tree"></ul>');
                return this.options.get("multiple") && b.attr("aria-multiselectable", "true"), this.$results = b, 
                b;
            }, c.prototype.clear = function() {
                this.$results.empty();
            }, c.prototype.displayMessage = function(b) {
                var c = this.options.get("escapeMarkup");
                this.clear(), this.hideLoading();
                var d = a('<li role="treeitem" aria-live="assertive" class="select2-results__option"></li>'), e = this.options.get("translations").get(b.message);
                d.append(c(e(b.args))), d[0].className += " select2-results__message", this.$results.append(d);
            }, c.prototype.hideMessages = function() {
                this.$results.find(".select2-results__message").remove();
            }, c.prototype.append = function(a) {
                this.hideLoading();
                var b = [];
                if (null == a.results || 0 === a.results.length) return void (0 === this.$results.children().length && this.trigger("results:message", {
                    message: "noResults"
                }));
                a.results = this.sort(a.results);
                for (var c = 0; c < a.results.length; c++) {
                    var d = a.results[c], e = this.option(d);
                    b.push(e);
                }
                this.$results.append(b);
            }, c.prototype.position = function(a, b) {
                var c = b.find(".select2-results");
                c.append(a);
            }, c.prototype.sort = function(a) {
                var b = this.options.get("sorter");
                return b(a);
            }, c.prototype.setClasses = function() {
                var b = this;
                this.data.current(function(c) {
                    var d = a.map(c, function(a) {
                        return a.id.toString();
                    }), e = b.$results.find(".select2-results__option[aria-selected]");
                    e.each(function() {
                        var b = a(this), c = a.data(this, "data"), e = "" + c.id;
                        null != c.element && c.element.selected || null == c.element && a.inArray(e, d) > -1 ? b.attr("aria-selected", "true") : b.attr("aria-selected", "false");
                    });
                    var f = e.filter("[aria-selected=true]");
                    f.length > 0 ? f.first().trigger("mouseenter") : e.first().trigger("mouseenter");
                });
            }, c.prototype.showLoading = function(a) {
                this.hideLoading();
                var b = this.options.get("translations").get("searching"), c = {
                    disabled: !0,
                    loading: !0,
                    text: b(a)
                }, d = this.option(c);
                d.className += " loading-results", this.$results.prepend(d);
            }, c.prototype.hideLoading = function() {
                this.$results.find(".loading-results").remove();
            }, c.prototype.option = function(b) {
                var c = document.createElement("li");
                c.className = "select2-results__option";
                var d = {
                    role: "treeitem",
                    "aria-selected": "false"
                };
                b.disabled && (delete d["aria-selected"], d["aria-disabled"] = "true"), null == b.id && delete d["aria-selected"], 
                null != b._resultId && (c.id = b._resultId), b.title && (c.title = b.title), b.children && (d.role = "group", 
                d["aria-label"] = b.text, delete d["aria-selected"]);
                for (var e in d) {
                    var f = d[e];
                    c.setAttribute(e, f);
                }
                if (b.children) {
                    var g = a(c), h = document.createElement("strong");
                    h.className = "select2-results__group";
                    a(h);
                    this.template(b, h);
                    for (var i = [], j = 0; j < b.children.length; j++) {
                        var k = b.children[j], l = this.option(k);
                        i.push(l);
                    }
                    var m = a("<ul></ul>", {
                        class: "select2-results__options select2-results__options--nested"
                    });
                    m.append(i), g.append(h), g.append(m);
                } else this.template(b, c);
                return a.data(c, "data", b), c;
            }, c.prototype.bind = function(b, c) {
                var d = this, e = b.id + "-results";
                this.$results.attr("id", e), b.on("results:all", function(a) {
                    d.clear(), d.append(a.data), b.isOpen() && d.setClasses();
                }), b.on("results:append", function(a) {
                    d.append(a.data), b.isOpen() && d.setClasses();
                }), b.on("query", function(a) {
                    d.hideMessages(), d.showLoading(a);
                }), b.on("select", function() {
                    b.isOpen() && d.setClasses();
                }), b.on("unselect", function() {
                    b.isOpen() && d.setClasses();
                }), b.on("open", function() {
                    d.$results.attr("aria-expanded", "true"), d.$results.attr("aria-hidden", "false"), 
                    d.setClasses(), d.ensureHighlightVisible();
                }), b.on("close", function() {
                    d.$results.attr("aria-expanded", "false"), d.$results.attr("aria-hidden", "true"), 
                    d.$results.removeAttr("aria-activedescendant");
                }), b.on("results:toggle", function() {
                    var a = d.getHighlightedResults();
                    0 !== a.length && a.trigger("mouseup");
                }), b.on("results:select", function() {
                    var a = d.getHighlightedResults();
                    if (0 !== a.length) {
                        var b = a.data("data");
                        "true" == a.attr("aria-selected") ? d.trigger("close", {}) : d.trigger("select", {
                            data: b
                        });
                    }
                }), b.on("results:previous", function() {
                    var a = d.getHighlightedResults(), b = d.$results.find("[aria-selected]"), c = b.index(a);
                    if (0 !== c) {
                        var e = c - 1;
                        0 === a.length && (e = 0);
                        var f = b.eq(e);
                        f.trigger("mouseenter");
                        var g = d.$results.offset().top, h = f.offset().top, i = d.$results.scrollTop() + (h - g);
                        0 === e ? d.$results.scrollTop(0) : 0 > h - g && d.$results.scrollTop(i);
                    }
                }), b.on("results:next", function() {
                    var a = d.getHighlightedResults(), b = d.$results.find("[aria-selected]"), c = b.index(a), e = c + 1;
                    if (!(e >= b.length)) {
                        var f = b.eq(e);
                        f.trigger("mouseenter");
                        var g = d.$results.offset().top + d.$results.outerHeight(!1), h = f.offset().top + f.outerHeight(!1), i = d.$results.scrollTop() + h - g;
                        0 === e ? d.$results.scrollTop(0) : h > g && d.$results.scrollTop(i);
                    }
                }), b.on("results:focus", function(a) {
                    a.element.addClass("select2-results__option--highlighted");
                }), b.on("results:message", function(a) {
                    d.displayMessage(a);
                }), a.fn.mousewheel && this.$results.on("mousewheel", function(a) {
                    var b = d.$results.scrollTop(), c = d.$results.get(0).scrollHeight - d.$results.scrollTop() + a.deltaY, e = a.deltaY > 0 && b - a.deltaY <= 0, f = a.deltaY < 0 && c <= d.$results.height();
                    e ? (d.$results.scrollTop(0), a.preventDefault(), a.stopPropagation()) : f && (d.$results.scrollTop(d.$results.get(0).scrollHeight - d.$results.height()), 
                    a.preventDefault(), a.stopPropagation());
                }), this.$results.on("mouseup", ".select2-results__option[aria-selected]", function(b) {
                    var c = a(this), e = c.data("data");
                    return "true" === c.attr("aria-selected") ? void (d.options.get("multiple") ? d.trigger("unselect", {
                        originalEvent: b,
                        data: e
                    }) : d.trigger("close", {})) : void d.trigger("select", {
                        originalEvent: b,
                        data: e
                    });
                }), this.$results.on("mouseenter", ".select2-results__option[aria-selected]", function(b) {
                    var c = a(this).data("data");
                    d.getHighlightedResults().removeClass("select2-results__option--highlighted"), d.trigger("results:focus", {
                        data: c,
                        element: a(this)
                    });
                });
            }, c.prototype.getHighlightedResults = function() {
                var a = this.$results.find(".select2-results__option--highlighted");
                return a;
            }, c.prototype.destroy = function() {
                this.$results.remove();
            }, c.prototype.ensureHighlightVisible = function() {
                var a = this.getHighlightedResults();
                if (0 !== a.length) {
                    var b = this.$results.find("[aria-selected]"), c = b.index(a), d = this.$results.offset().top, e = a.offset().top, f = this.$results.scrollTop() + (e - d), g = e - d;
                    f -= 2 * a.outerHeight(!1), 2 >= c ? this.$results.scrollTop(0) : (g > this.$results.outerHeight() || 0 > g) && this.$results.scrollTop(f);
                }
            }, c.prototype.template = function(b, c) {
                var d = this.options.get("templateResult"), e = this.options.get("escapeMarkup"), f = d(b, c);
                null == f ? c.style.display = "none" : "string" == typeof f ? c.innerHTML = e(f) : a(c).append(f);
            }, c;
        }), b.define("select2/keys", [], function() {
            var a = {
                BACKSPACE: 8,
                TAB: 9,
                ENTER: 13,
                SHIFT: 16,
                CTRL: 17,
                ALT: 18,
                ESC: 27,
                SPACE: 32,
                PAGE_UP: 33,
                PAGE_DOWN: 34,
                END: 35,
                HOME: 36,
                LEFT: 37,
                UP: 38,
                RIGHT: 39,
                DOWN: 40,
                DELETE: 46
            };
            return a;
        }), b.define("select2/selection/base", [ "jquery", "../utils", "../keys" ], function(a, b, c) {
            function d(a, b) {
                this.$element = a, this.options = b, d.__super__.constructor.call(this);
            }
            return b.Extend(d, b.Observable), d.prototype.render = function() {
                var b = a('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');
                return this._tabindex = 0, null != this.$element.data("old-tabindex") ? this._tabindex = this.$element.data("old-tabindex") : null != this.$element.attr("tabindex") && (this._tabindex = this.$element.attr("tabindex")), 
                b.attr("title", this.$element.attr("title")), b.attr("tabindex", this._tabindex), 
                this.$selection = b, b;
            }, d.prototype.bind = function(a, b) {
                var d = this, e = (a.id + "-container", a.id + "-results");
                this.container = a, this.$selection.on("focus", function(a) {
                    d.trigger("focus", a);
                }), this.$selection.on("blur", function(a) {
                    d._handleBlur(a);
                }), this.$selection.on("keydown", function(a) {
                    d.trigger("keypress", a), a.which === c.SPACE && a.preventDefault();
                }), a.on("results:focus", function(a) {
                    d.$selection.attr("aria-activedescendant", a.data._resultId);
                }), a.on("selection:update", function(a) {
                    d.update(a.data);
                }), a.on("open", function() {
                    d.$selection.attr("aria-expanded", "true"), d.$selection.attr("aria-owns", e), d._attachCloseHandler(a);
                }), a.on("close", function() {
                    d.$selection.attr("aria-expanded", "false"), d.$selection.removeAttr("aria-activedescendant"), 
                    d.$selection.removeAttr("aria-owns"), d.$selection.focus(), d._detachCloseHandler(a);
                }), a.on("enable", function() {
                    d.$selection.attr("tabindex", d._tabindex);
                }), a.on("disable", function() {
                    d.$selection.attr("tabindex", "-1");
                });
            }, d.prototype._handleBlur = function(b) {
                var c = this;
                window.setTimeout(function() {
                    document.activeElement == c.$selection[0] || a.contains(c.$selection[0], document.activeElement) || c.trigger("blur", b);
                }, 1);
            }, d.prototype._attachCloseHandler = function(b) {
                a(document.body).on("mousedown.select2." + b.id, function(b) {
                    var c = a(b.target), d = c.closest(".select2"), e = a(".select2.select2-container--open");
                    e.each(function() {
                        var b = a(this);
                        if (this != d[0]) {
                            var c = b.data("element");
                            c.select2("close");
                        }
                    });
                });
            }, d.prototype._detachCloseHandler = function(b) {
                a(document.body).off("mousedown.select2." + b.id);
            }, d.prototype.position = function(a, b) {
                var c = b.find(".selection");
                c.append(a);
            }, d.prototype.destroy = function() {
                this._detachCloseHandler(this.container);
            }, d.prototype.update = function(a) {
                throw new Error("The `update` method must be defined in child classes.");
            }, d;
        }), b.define("select2/selection/single", [ "jquery", "./base", "../utils", "../keys" ], function(a, b, c, d) {
            function e() {
                e.__super__.constructor.apply(this, arguments);
            }
            return c.Extend(e, b), e.prototype.render = function() {
                var a = e.__super__.render.call(this);
                return a.addClass("select2-selection--single"), a.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'), 
                a;
            }, e.prototype.bind = function(a, b) {
                var c = this;
                e.__super__.bind.apply(this, arguments);
                var d = a.id + "-container";
                this.$selection.find(".select2-selection__rendered").attr("id", d), this.$selection.attr("aria-labelledby", d), 
                this.$selection.on("mousedown", function(a) {
                    1 === a.which && c.trigger("toggle", {
                        originalEvent: a
                    });
                }), this.$selection.on("focus", function(a) {}), this.$selection.on("blur", function(a) {}), 
                a.on("selection:update", function(a) {
                    c.update(a.data);
                });
            }, e.prototype.clear = function() {
                this.$selection.find(".select2-selection__rendered").empty();
            }, e.prototype.display = function(a, b) {
                var c = this.options.get("templateSelection"), d = this.options.get("escapeMarkup");
                return d(c(a, b));
            }, e.prototype.selectionContainer = function() {
                return a("<span></span>");
            }, e.prototype.update = function(a) {
                if (0 === a.length) return void this.clear();
                var b = a[0], c = this.$selection.find(".select2-selection__rendered"), d = this.display(b, c);
                c.empty().append(d), c.prop("title", b.title || b.text);
            }, e;
        }), b.define("select2/selection/multiple", [ "jquery", "./base", "../utils" ], function(a, b, c) {
            function d(a, b) {
                d.__super__.constructor.apply(this, arguments);
            }
            return c.Extend(d, b), d.prototype.render = function() {
                var a = d.__super__.render.call(this);
                return a.addClass("select2-selection--multiple"), a.html('<ul class="select2-selection__rendered"></ul>'), 
                a;
            }, d.prototype.bind = function(b, c) {
                var e = this;
                d.__super__.bind.apply(this, arguments), this.$selection.on("click", function(a) {
                    e.trigger("toggle", {
                        originalEvent: a
                    });
                }), this.$selection.on("click", ".select2-selection__choice__remove", function(b) {
                    if (!e.options.get("disabled")) {
                        var c = a(this), d = c.parent(), f = d.data("data");
                        e.trigger("unselect", {
                            originalEvent: b,
                            data: f
                        });
                    }
                });
            }, d.prototype.clear = function() {
                this.$selection.find(".select2-selection__rendered").empty();
            }, d.prototype.display = function(a, b) {
                var c = this.options.get("templateSelection"), d = this.options.get("escapeMarkup");
                return d(c(a, b));
            }, d.prototype.selectionContainer = function() {
                var b = a('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>');
                return b;
            }, d.prototype.update = function(a) {
                if (this.clear(), 0 !== a.length) {
                    for (var b = [], d = 0; d < a.length; d++) {
                        var e = a[d], f = this.selectionContainer(), g = this.display(e, f);
                        f.append(g), f.prop("title", e.title || e.text), f.data("data", e), b.push(f);
                    }
                    var h = this.$selection.find(".select2-selection__rendered");
                    c.appendMany(h, b);
                }
            }, d;
        }), b.define("select2/selection/placeholder", [ "../utils" ], function(a) {
            function b(a, b, c) {
                this.placeholder = this.normalizePlaceholder(c.get("placeholder")), a.call(this, b, c);
            }
            return b.prototype.normalizePlaceholder = function(a, b) {
                return "string" == typeof b && (b = {
                    id: "",
                    text: b
                }), b;
            }, b.prototype.createPlaceholder = function(a, b) {
                var c = this.selectionContainer();
                return c.html(this.display(b)), c.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"), 
                c;
            }, b.prototype.update = function(a, b) {
                var c = 1 == b.length && b[0].id != this.placeholder.id, d = b.length > 1;
                if (d || c) return a.call(this, b);
                this.clear();
                var e = this.createPlaceholder(this.placeholder);
                this.$selection.find(".select2-selection__rendered").append(e);
            }, b;
        }), b.define("select2/selection/allowClear", [ "jquery", "../keys" ], function(a, b) {
            function c() {}
            return c.prototype.bind = function(a, b, c) {
                var d = this;
                a.call(this, b, c), null == this.placeholder && this.options.get("debug") && window.console && console.error && console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."), 
                this.$selection.on("mousedown", ".select2-selection__clear", function(a) {
                    d._handleClear(a);
                }), b.on("keypress", function(a) {
                    d._handleKeyboardClear(a, b);
                });
            }, c.prototype._handleClear = function(a, b) {
                if (!this.options.get("disabled")) {
                    var c = this.$selection.find(".select2-selection__clear");
                    if (0 !== c.length) {
                        b.stopPropagation();
                        for (var d = c.data("data"), e = 0; e < d.length; e++) {
                            var f = {
                                data: d[e]
                            };
                            if (this.trigger("unselect", f), f.prevented) return;
                        }
                        this.$element.val(this.placeholder.id).trigger("change"), this.trigger("toggle", {});
                    }
                }
            }, c.prototype._handleKeyboardClear = function(a, c, d) {
                d.isOpen() || (c.which == b.DELETE || c.which == b.BACKSPACE) && this._handleClear(c);
            }, c.prototype.update = function(b, c) {
                if (b.call(this, c), !(this.$selection.find(".select2-selection__placeholder").length > 0 || 0 === c.length)) {
                    var d = a('<span class="select2-selection__clear">&times;</span>');
                    d.data("data", c), this.$selection.find(".select2-selection__rendered").prepend(d);
                }
            }, c;
        }), b.define("select2/selection/search", [ "jquery", "../utils", "../keys" ], function(a, b, c) {
            function d(a, b, c) {
                a.call(this, b, c);
            }
            return d.prototype.render = function(b) {
                var c = a('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" aria-autocomplete="list" /></li>');
                this.$searchContainer = c, this.$search = c.find("input");
                var d = b.call(this);
                return this._transferTabIndex(), d;
            }, d.prototype.bind = function(a, b, d) {
                var e = this;
                a.call(this, b, d), b.on("open", function() {
                    e.$search.trigger("focus");
                }), b.on("close", function() {
                    e.$search.val(""), e.$search.removeAttr("aria-activedescendant"), e.$search.trigger("focus");
                }), b.on("enable", function() {
                    e.$search.prop("disabled", !1), e._transferTabIndex();
                }), b.on("disable", function() {
                    e.$search.prop("disabled", !0);
                }), b.on("focus", function(a) {
                    e.$search.trigger("focus");
                }), b.on("results:focus", function(a) {
                    e.$search.attr("aria-activedescendant", a.id);
                }), this.$selection.on("focusin", ".select2-search--inline", function(a) {
                    e.trigger("focus", a);
                }), this.$selection.on("focusout", ".select2-search--inline", function(a) {
                    e._handleBlur(a);
                }), this.$selection.on("keydown", ".select2-search--inline", function(a) {
                    a.stopPropagation(), e.trigger("keypress", a), e._keyUpPrevented = a.isDefaultPrevented();
                    var b = a.which;
                    if (b === c.BACKSPACE && "" === e.$search.val()) {
                        var d = e.$searchContainer.prev(".select2-selection__choice");
                        if (d.length > 0) {
                            var f = d.data("data");
                            e.searchRemoveChoice(f), a.preventDefault();
                        }
                    }
                });
                var f = document.documentMode, g = f && 11 >= f;
                this.$selection.on("input.searchcheck", ".select2-search--inline", function(a) {
                    return g ? void e.$selection.off("input.search input.searchcheck") : void e.$selection.off("keyup.search");
                }), this.$selection.on("keyup.search input.search", ".select2-search--inline", function(a) {
                    if (g && "input" === a.type) return void e.$selection.off("input.search input.searchcheck");
                    var b = a.which;
                    b != c.SHIFT && b != c.CTRL && b != c.ALT && b != c.TAB && e.handleSearch(a);
                });
            }, d.prototype._transferTabIndex = function(a) {
                this.$search.attr("tabindex", this.$selection.attr("tabindex")), this.$selection.attr("tabindex", "-1");
            }, d.prototype.createPlaceholder = function(a, b) {
                this.$search.attr("placeholder", b.text);
            }, d.prototype.update = function(a, b) {
                var c = this.$search[0] == document.activeElement;
                this.$search.attr("placeholder", ""), a.call(this, b), this.$selection.find(".select2-selection__rendered").append(this.$searchContainer), 
                this.resizeSearch(), c && this.$search.focus();
            }, d.prototype.handleSearch = function() {
                if (this.resizeSearch(), !this._keyUpPrevented) {
                    var a = this.$search.val();
                    this.trigger("query", {
                        term: a
                    });
                }
                this._keyUpPrevented = !1;
            }, d.prototype.searchRemoveChoice = function(a, b) {
                this.trigger("unselect", {
                    data: b
                }), this.$search.val(b.text), this.handleSearch();
            }, d.prototype.resizeSearch = function() {
                this.$search.css("width", "25px");
                var a = "";
                if ("" !== this.$search.attr("placeholder")) a = this.$selection.find(".select2-selection__rendered").innerWidth(); else {
                    var b = this.$search.val().length + 1;
                    a = .75 * b + "em";
                }
                this.$search.css("width", a);
            }, d;
        }), b.define("select2/selection/eventRelay", [ "jquery" ], function(a) {
            function b() {}
            return b.prototype.bind = function(b, c, d) {
                var e = this, f = [ "open", "opening", "close", "closing", "select", "selecting", "unselect", "unselecting" ], g = [ "opening", "closing", "selecting", "unselecting" ];
                b.call(this, c, d), c.on("*", function(b, c) {
                    if (-1 !== a.inArray(b, f)) {
                        c = c || {};
                        var d = a.Event("select2:" + b, {
                            params: c
                        });
                        e.$element.trigger(d), -1 !== a.inArray(b, g) && (c.prevented = d.isDefaultPrevented());
                    }
                });
            }, b;
        }), b.define("select2/translation", [ "jquery", "require" ], function(a, b) {
            function c(a) {
                this.dict = a || {};
            }
            return c.prototype.all = function() {
                return this.dict;
            }, c.prototype.get = function(a) {
                return this.dict[a];
            }, c.prototype.extend = function(b) {
                this.dict = a.extend({}, b.all(), this.dict);
            }, c._cache = {}, c.loadPath = function(a) {
                if (!(a in c._cache)) {
                    var d = b(a);
                    c._cache[a] = d;
                }
                return new c(c._cache[a]);
            }, c;
        }), b.define("select2/diacritics", [], function() {
            var a = {
                "Ⓐ": "A",
                "Ａ": "A",
                "À": "A",
                "Á": "A",
                "Â": "A",
                "Ầ": "A",
                "Ấ": "A",
                "Ẫ": "A",
                "Ẩ": "A",
                "Ã": "A",
                "Ā": "A",
                "Ă": "A",
                "Ằ": "A",
                "Ắ": "A",
                "Ẵ": "A",
                "Ẳ": "A",
                "Ȧ": "A",
                "Ǡ": "A",
                "Ä": "A",
                "Ǟ": "A",
                "Ả": "A",
                "Å": "A",
                "Ǻ": "A",
                "Ǎ": "A",
                "Ȁ": "A",
                "Ȃ": "A",
                "Ạ": "A",
                "Ậ": "A",
                "Ặ": "A",
                "Ḁ": "A",
                "Ą": "A",
                "Ⱥ": "A",
                "Ɐ": "A",
                "Ꜳ": "AA",
                "Æ": "AE",
                "Ǽ": "AE",
                "Ǣ": "AE",
                "Ꜵ": "AO",
                "Ꜷ": "AU",
                "Ꜹ": "AV",
                "Ꜻ": "AV",
                "Ꜽ": "AY",
                "Ⓑ": "B",
                "Ｂ": "B",
                "Ḃ": "B",
                "Ḅ": "B",
                "Ḇ": "B",
                "Ƀ": "B",
                "Ƃ": "B",
                "Ɓ": "B",
                "Ⓒ": "C",
                "Ｃ": "C",
                "Ć": "C",
                "Ĉ": "C",
                "Ċ": "C",
                "Č": "C",
                "Ç": "C",
                "Ḉ": "C",
                "Ƈ": "C",
                "Ȼ": "C",
                "Ꜿ": "C",
                "Ⓓ": "D",
                "Ｄ": "D",
                "Ḋ": "D",
                "Ď": "D",
                "Ḍ": "D",
                "Ḑ": "D",
                "Ḓ": "D",
                "Ḏ": "D",
                "Đ": "D",
                "Ƌ": "D",
                "Ɗ": "D",
                "Ɖ": "D",
                "Ꝺ": "D",
                "Ǳ": "DZ",
                "Ǆ": "DZ",
                "ǲ": "Dz",
                "ǅ": "Dz",
                "Ⓔ": "E",
                "Ｅ": "E",
                "È": "E",
                "É": "E",
                "Ê": "E",
                "Ề": "E",
                "Ế": "E",
                "Ễ": "E",
                "Ể": "E",
                "Ẽ": "E",
                "Ē": "E",
                "Ḕ": "E",
                "Ḗ": "E",
                "Ĕ": "E",
                "Ė": "E",
                "Ë": "E",
                "Ẻ": "E",
                "Ě": "E",
                "Ȅ": "E",
                "Ȇ": "E",
                "Ẹ": "E",
                "Ệ": "E",
                "Ȩ": "E",
                "Ḝ": "E",
                "Ę": "E",
                "Ḙ": "E",
                "Ḛ": "E",
                "Ɛ": "E",
                "Ǝ": "E",
                "Ⓕ": "F",
                "Ｆ": "F",
                "Ḟ": "F",
                "Ƒ": "F",
                "Ꝼ": "F",
                "Ⓖ": "G",
                "Ｇ": "G",
                "Ǵ": "G",
                "Ĝ": "G",
                "Ḡ": "G",
                "Ğ": "G",
                "Ġ": "G",
                "Ǧ": "G",
                "Ģ": "G",
                "Ǥ": "G",
                "Ɠ": "G",
                "Ꞡ": "G",
                "Ᵹ": "G",
                "Ꝿ": "G",
                "Ⓗ": "H",
                "Ｈ": "H",
                "Ĥ": "H",
                "Ḣ": "H",
                "Ḧ": "H",
                "Ȟ": "H",
                "Ḥ": "H",
                "Ḩ": "H",
                "Ḫ": "H",
                "Ħ": "H",
                "Ⱨ": "H",
                "Ⱶ": "H",
                "Ɥ": "H",
                "Ⓘ": "I",
                "Ｉ": "I",
                "Ì": "I",
                "Í": "I",
                "Î": "I",
                "Ĩ": "I",
                "Ī": "I",
                "Ĭ": "I",
                "İ": "I",
                "Ï": "I",
                "Ḯ": "I",
                "Ỉ": "I",
                "Ǐ": "I",
                "Ȉ": "I",
                "Ȋ": "I",
                "Ị": "I",
                "Į": "I",
                "Ḭ": "I",
                "Ɨ": "I",
                "Ⓙ": "J",
                "Ｊ": "J",
                "Ĵ": "J",
                "Ɉ": "J",
                "Ⓚ": "K",
                "Ｋ": "K",
                "Ḱ": "K",
                "Ǩ": "K",
                "Ḳ": "K",
                "Ķ": "K",
                "Ḵ": "K",
                "Ƙ": "K",
                "Ⱪ": "K",
                "Ꝁ": "K",
                "Ꝃ": "K",
                "Ꝅ": "K",
                "Ꞣ": "K",
                "Ⓛ": "L",
                "Ｌ": "L",
                "Ŀ": "L",
                "Ĺ": "L",
                "Ľ": "L",
                "Ḷ": "L",
                "Ḹ": "L",
                "Ļ": "L",
                "Ḽ": "L",
                "Ḻ": "L",
                "Ł": "L",
                "Ƚ": "L",
                "Ɫ": "L",
                "Ⱡ": "L",
                "Ꝉ": "L",
                "Ꝇ": "L",
                "Ꞁ": "L",
                "Ǉ": "LJ",
                "ǈ": "Lj",
                "Ⓜ": "M",
                "Ｍ": "M",
                "Ḿ": "M",
                "Ṁ": "M",
                "Ṃ": "M",
                "Ɱ": "M",
                "Ɯ": "M",
                "Ⓝ": "N",
                "Ｎ": "N",
                "Ǹ": "N",
                "Ń": "N",
                "Ñ": "N",
                "Ṅ": "N",
                "Ň": "N",
                "Ṇ": "N",
                "Ņ": "N",
                "Ṋ": "N",
                "Ṉ": "N",
                "Ƞ": "N",
                "Ɲ": "N",
                "Ꞑ": "N",
                "Ꞥ": "N",
                "Ǌ": "NJ",
                "ǋ": "Nj",
                "Ⓞ": "O",
                "Ｏ": "O",
                "Ò": "O",
                "Ó": "O",
                "Ô": "O",
                "Ồ": "O",
                "Ố": "O",
                "Ỗ": "O",
                "Ổ": "O",
                "Õ": "O",
                "Ṍ": "O",
                "Ȭ": "O",
                "Ṏ": "O",
                "Ō": "O",
                "Ṑ": "O",
                "Ṓ": "O",
                "Ŏ": "O",
                "Ȯ": "O",
                "Ȱ": "O",
                "Ö": "O",
                "Ȫ": "O",
                "Ỏ": "O",
                "Ő": "O",
                "Ǒ": "O",
                "Ȍ": "O",
                "Ȏ": "O",
                "Ơ": "O",
                "Ờ": "O",
                "Ớ": "O",
                "Ỡ": "O",
                "Ở": "O",
                "Ợ": "O",
                "Ọ": "O",
                "Ộ": "O",
                "Ǫ": "O",
                "Ǭ": "O",
                "Ø": "O",
                "Ǿ": "O",
                "Ɔ": "O",
                "Ɵ": "O",
                "Ꝋ": "O",
                "Ꝍ": "O",
                "Ƣ": "OI",
                "Ꝏ": "OO",
                "Ȣ": "OU",
                "Ⓟ": "P",
                "Ｐ": "P",
                "Ṕ": "P",
                "Ṗ": "P",
                "Ƥ": "P",
                "Ᵽ": "P",
                "Ꝑ": "P",
                "Ꝓ": "P",
                "Ꝕ": "P",
                "Ⓠ": "Q",
                "Ｑ": "Q",
                "Ꝗ": "Q",
                "Ꝙ": "Q",
                "Ɋ": "Q",
                "Ⓡ": "R",
                "Ｒ": "R",
                "Ŕ": "R",
                "Ṙ": "R",
                "Ř": "R",
                "Ȑ": "R",
                "Ȓ": "R",
                "Ṛ": "R",
                "Ṝ": "R",
                "Ŗ": "R",
                "Ṟ": "R",
                "Ɍ": "R",
                "Ɽ": "R",
                "Ꝛ": "R",
                "Ꞧ": "R",
                "Ꞃ": "R",
                "Ⓢ": "S",
                "Ｓ": "S",
                "ẞ": "S",
                "Ś": "S",
                "Ṥ": "S",
                "Ŝ": "S",
                "Ṡ": "S",
                "Š": "S",
                "Ṧ": "S",
                "Ṣ": "S",
                "Ṩ": "S",
                "Ș": "S",
                "Ş": "S",
                "Ȿ": "S",
                "Ꞩ": "S",
                "Ꞅ": "S",
                "Ⓣ": "T",
                "Ｔ": "T",
                "Ṫ": "T",
                "Ť": "T",
                "Ṭ": "T",
                "Ț": "T",
                "Ţ": "T",
                "Ṱ": "T",
                "Ṯ": "T",
                "Ŧ": "T",
                "Ƭ": "T",
                "Ʈ": "T",
                "Ⱦ": "T",
                "Ꞇ": "T",
                "Ꜩ": "TZ",
                "Ⓤ": "U",
                "Ｕ": "U",
                "Ù": "U",
                "Ú": "U",
                "Û": "U",
                "Ũ": "U",
                "Ṹ": "U",
                "Ū": "U",
                "Ṻ": "U",
                "Ŭ": "U",
                "Ü": "U",
                "Ǜ": "U",
                "Ǘ": "U",
                "Ǖ": "U",
                "Ǚ": "U",
                "Ủ": "U",
                "Ů": "U",
                "Ű": "U",
                "Ǔ": "U",
                "Ȕ": "U",
                "Ȗ": "U",
                "Ư": "U",
                "Ừ": "U",
                "Ứ": "U",
                "Ữ": "U",
                "Ử": "U",
                "Ự": "U",
                "Ụ": "U",
                "Ṳ": "U",
                "Ų": "U",
                "Ṷ": "U",
                "Ṵ": "U",
                "Ʉ": "U",
                "Ⓥ": "V",
                "Ｖ": "V",
                "Ṽ": "V",
                "Ṿ": "V",
                "Ʋ": "V",
                "Ꝟ": "V",
                "Ʌ": "V",
                "Ꝡ": "VY",
                "Ⓦ": "W",
                "Ｗ": "W",
                "Ẁ": "W",
                "Ẃ": "W",
                "Ŵ": "W",
                "Ẇ": "W",
                "Ẅ": "W",
                "Ẉ": "W",
                "Ⱳ": "W",
                "Ⓧ": "X",
                "Ｘ": "X",
                "Ẋ": "X",
                "Ẍ": "X",
                "Ⓨ": "Y",
                "Ｙ": "Y",
                "Ỳ": "Y",
                "Ý": "Y",
                "Ŷ": "Y",
                "Ỹ": "Y",
                "Ȳ": "Y",
                "Ẏ": "Y",
                "Ÿ": "Y",
                "Ỷ": "Y",
                "Ỵ": "Y",
                "Ƴ": "Y",
                "Ɏ": "Y",
                "Ỿ": "Y",
                "Ⓩ": "Z",
                "Ｚ": "Z",
                "Ź": "Z",
                "Ẑ": "Z",
                "Ż": "Z",
                "Ž": "Z",
                "Ẓ": "Z",
                "Ẕ": "Z",
                "Ƶ": "Z",
                "Ȥ": "Z",
                "Ɀ": "Z",
                "Ⱬ": "Z",
                "Ꝣ": "Z",
                "ⓐ": "a",
                "ａ": "a",
                "ẚ": "a",
                "à": "a",
                "á": "a",
                "â": "a",
                "ầ": "a",
                "ấ": "a",
                "ẫ": "a",
                "ẩ": "a",
                "ã": "a",
                "ā": "a",
                "ă": "a",
                "ằ": "a",
                "ắ": "a",
                "ẵ": "a",
                "ẳ": "a",
                "ȧ": "a",
                "ǡ": "a",
                "ä": "a",
                "ǟ": "a",
                "ả": "a",
                "å": "a",
                "ǻ": "a",
                "ǎ": "a",
                "ȁ": "a",
                "ȃ": "a",
                "ạ": "a",
                "ậ": "a",
                "ặ": "a",
                "ḁ": "a",
                "ą": "a",
                "ⱥ": "a",
                "ɐ": "a",
                "ꜳ": "aa",
                "æ": "ae",
                "ǽ": "ae",
                "ǣ": "ae",
                "ꜵ": "ao",
                "ꜷ": "au",
                "ꜹ": "av",
                "ꜻ": "av",
                "ꜽ": "ay",
                "ⓑ": "b",
                "ｂ": "b",
                "ḃ": "b",
                "ḅ": "b",
                "ḇ": "b",
                "ƀ": "b",
                "ƃ": "b",
                "ɓ": "b",
                "ⓒ": "c",
                "ｃ": "c",
                "ć": "c",
                "ĉ": "c",
                "ċ": "c",
                "č": "c",
                "ç": "c",
                "ḉ": "c",
                "ƈ": "c",
                "ȼ": "c",
                "ꜿ": "c",
                "ↄ": "c",
                "ⓓ": "d",
                "ｄ": "d",
                "ḋ": "d",
                "ď": "d",
                "ḍ": "d",
                "ḑ": "d",
                "ḓ": "d",
                "ḏ": "d",
                "đ": "d",
                "ƌ": "d",
                "ɖ": "d",
                "ɗ": "d",
                "ꝺ": "d",
                "ǳ": "dz",
                "ǆ": "dz",
                "ⓔ": "e",
                "ｅ": "e",
                "è": "e",
                "é": "e",
                "ê": "e",
                "ề": "e",
                "ế": "e",
                "ễ": "e",
                "ể": "e",
                "ẽ": "e",
                "ē": "e",
                "ḕ": "e",
                "ḗ": "e",
                "ĕ": "e",
                "ė": "e",
                "ë": "e",
                "ẻ": "e",
                "ě": "e",
                "ȅ": "e",
                "ȇ": "e",
                "ẹ": "e",
                "ệ": "e",
                "ȩ": "e",
                "ḝ": "e",
                "ę": "e",
                "ḙ": "e",
                "ḛ": "e",
                "ɇ": "e",
                "ɛ": "e",
                "ǝ": "e",
                "ⓕ": "f",
                "ｆ": "f",
                "ḟ": "f",
                "ƒ": "f",
                "ꝼ": "f",
                "ⓖ": "g",
                "ｇ": "g",
                "ǵ": "g",
                "ĝ": "g",
                "ḡ": "g",
                "ğ": "g",
                "ġ": "g",
                "ǧ": "g",
                "ģ": "g",
                "ǥ": "g",
                "ɠ": "g",
                "ꞡ": "g",
                "ᵹ": "g",
                "ꝿ": "g",
                "ⓗ": "h",
                "ｈ": "h",
                "ĥ": "h",
                "ḣ": "h",
                "ḧ": "h",
                "ȟ": "h",
                "ḥ": "h",
                "ḩ": "h",
                "ḫ": "h",
                "ẖ": "h",
                "ħ": "h",
                "ⱨ": "h",
                "ⱶ": "h",
                "ɥ": "h",
                "ƕ": "hv",
                "ⓘ": "i",
                "ｉ": "i",
                "ì": "i",
                "í": "i",
                "î": "i",
                "ĩ": "i",
                "ī": "i",
                "ĭ": "i",
                "ï": "i",
                "ḯ": "i",
                "ỉ": "i",
                "ǐ": "i",
                "ȉ": "i",
                "ȋ": "i",
                "ị": "i",
                "į": "i",
                "ḭ": "i",
                "ɨ": "i",
                "ı": "i",
                "ⓙ": "j",
                "ｊ": "j",
                "ĵ": "j",
                "ǰ": "j",
                "ɉ": "j",
                "ⓚ": "k",
                "ｋ": "k",
                "ḱ": "k",
                "ǩ": "k",
                "ḳ": "k",
                "ķ": "k",
                "ḵ": "k",
                "ƙ": "k",
                "ⱪ": "k",
                "ꝁ": "k",
                "ꝃ": "k",
                "ꝅ": "k",
                "ꞣ": "k",
                "ⓛ": "l",
                "ｌ": "l",
                "ŀ": "l",
                "ĺ": "l",
                "ľ": "l",
                "ḷ": "l",
                "ḹ": "l",
                "ļ": "l",
                "ḽ": "l",
                "ḻ": "l",
                "ſ": "l",
                "ł": "l",
                "ƚ": "l",
                "ɫ": "l",
                "ⱡ": "l",
                "ꝉ": "l",
                "ꞁ": "l",
                "ꝇ": "l",
                "ǉ": "lj",
                "ⓜ": "m",
                "ｍ": "m",
                "ḿ": "m",
                "ṁ": "m",
                "ṃ": "m",
                "ɱ": "m",
                "ɯ": "m",
                "ⓝ": "n",
                "ｎ": "n",
                "ǹ": "n",
                "ń": "n",
                "ñ": "n",
                "ṅ": "n",
                "ň": "n",
                "ṇ": "n",
                "ņ": "n",
                "ṋ": "n",
                "ṉ": "n",
                "ƞ": "n",
                "ɲ": "n",
                "ŉ": "n",
                "ꞑ": "n",
                "ꞥ": "n",
                "ǌ": "nj",
                "ⓞ": "o",
                "ｏ": "o",
                "ò": "o",
                "ó": "o",
                "ô": "o",
                "ồ": "o",
                "ố": "o",
                "ỗ": "o",
                "ổ": "o",
                "õ": "o",
                "ṍ": "o",
                "ȭ": "o",
                "ṏ": "o",
                "ō": "o",
                "ṑ": "o",
                "ṓ": "o",
                "ŏ": "o",
                "ȯ": "o",
                "ȱ": "o",
                "ö": "o",
                "ȫ": "o",
                "ỏ": "o",
                "ő": "o",
                "ǒ": "o",
                "ȍ": "o",
                "ȏ": "o",
                "ơ": "o",
                "ờ": "o",
                "ớ": "o",
                "ỡ": "o",
                "ở": "o",
                "ợ": "o",
                "ọ": "o",
                "ộ": "o",
                "ǫ": "o",
                "ǭ": "o",
                "ø": "o",
                "ǿ": "o",
                "ɔ": "o",
                "ꝋ": "o",
                "ꝍ": "o",
                "ɵ": "o",
                "ƣ": "oi",
                "ȣ": "ou",
                "ꝏ": "oo",
                "ⓟ": "p",
                "ｐ": "p",
                "ṕ": "p",
                "ṗ": "p",
                "ƥ": "p",
                "ᵽ": "p",
                "ꝑ": "p",
                "ꝓ": "p",
                "ꝕ": "p",
                "ⓠ": "q",
                "ｑ": "q",
                "ɋ": "q",
                "ꝗ": "q",
                "ꝙ": "q",
                "ⓡ": "r",
                "ｒ": "r",
                "ŕ": "r",
                "ṙ": "r",
                "ř": "r",
                "ȑ": "r",
                "ȓ": "r",
                "ṛ": "r",
                "ṝ": "r",
                "ŗ": "r",
                "ṟ": "r",
                "ɍ": "r",
                "ɽ": "r",
                "ꝛ": "r",
                "ꞧ": "r",
                "ꞃ": "r",
                "ⓢ": "s",
                "ｓ": "s",
                "ß": "s",
                "ś": "s",
                "ṥ": "s",
                "ŝ": "s",
                "ṡ": "s",
                "š": "s",
                "ṧ": "s",
                "ṣ": "s",
                "ṩ": "s",
                "ș": "s",
                "ş": "s",
                "ȿ": "s",
                "ꞩ": "s",
                "ꞅ": "s",
                "ẛ": "s",
                "ⓣ": "t",
                "ｔ": "t",
                "ṫ": "t",
                "ẗ": "t",
                "ť": "t",
                "ṭ": "t",
                "ț": "t",
                "ţ": "t",
                "ṱ": "t",
                "ṯ": "t",
                "ŧ": "t",
                "ƭ": "t",
                "ʈ": "t",
                "ⱦ": "t",
                "ꞇ": "t",
                "ꜩ": "tz",
                "ⓤ": "u",
                "ｕ": "u",
                "ù": "u",
                "ú": "u",
                "û": "u",
                "ũ": "u",
                "ṹ": "u",
                "ū": "u",
                "ṻ": "u",
                "ŭ": "u",
                "ü": "u",
                "ǜ": "u",
                "ǘ": "u",
                "ǖ": "u",
                "ǚ": "u",
                "ủ": "u",
                "ů": "u",
                "ű": "u",
                "ǔ": "u",
                "ȕ": "u",
                "ȗ": "u",
                "ư": "u",
                "ừ": "u",
                "ứ": "u",
                "ữ": "u",
                "ử": "u",
                "ự": "u",
                "ụ": "u",
                "ṳ": "u",
                "ų": "u",
                "ṷ": "u",
                "ṵ": "u",
                "ʉ": "u",
                "ⓥ": "v",
                "ｖ": "v",
                "ṽ": "v",
                "ṿ": "v",
                "ʋ": "v",
                "ꝟ": "v",
                "ʌ": "v",
                "ꝡ": "vy",
                "ⓦ": "w",
                "ｗ": "w",
                "ẁ": "w",
                "ẃ": "w",
                "ŵ": "w",
                "ẇ": "w",
                "ẅ": "w",
                "ẘ": "w",
                "ẉ": "w",
                "ⱳ": "w",
                "ⓧ": "x",
                "ｘ": "x",
                "ẋ": "x",
                "ẍ": "x",
                "ⓨ": "y",
                "ｙ": "y",
                "ỳ": "y",
                "ý": "y",
                "ŷ": "y",
                "ỹ": "y",
                "ȳ": "y",
                "ẏ": "y",
                "ÿ": "y",
                "ỷ": "y",
                "ẙ": "y",
                "ỵ": "y",
                "ƴ": "y",
                "ɏ": "y",
                "ỿ": "y",
                "ⓩ": "z",
                "ｚ": "z",
                "ź": "z",
                "ẑ": "z",
                "ż": "z",
                "ž": "z",
                "ẓ": "z",
                "ẕ": "z",
                "ƶ": "z",
                "ȥ": "z",
                "ɀ": "z",
                "ⱬ": "z",
                "ꝣ": "z",
                "Ά": "Α",
                "Έ": "Ε",
                "Ή": "Η",
                "Ί": "Ι",
                "Ϊ": "Ι",
                "Ό": "Ο",
                "Ύ": "Υ",
                "Ϋ": "Υ",
                "Ώ": "Ω",
                "ά": "α",
                "έ": "ε",
                "ή": "η",
                "ί": "ι",
                "ϊ": "ι",
                "ΐ": "ι",
                "ό": "ο",
                "ύ": "υ",
                "ϋ": "υ",
                "ΰ": "υ",
                "ω": "ω",
                "ς": "σ"
            };
            return a;
        }), b.define("select2/data/base", [ "../utils" ], function(a) {
            function b(a, c) {
                b.__super__.constructor.call(this);
            }
            return a.Extend(b, a.Observable), b.prototype.current = function(a) {
                throw new Error("The `current` method must be defined in child classes.");
            }, b.prototype.query = function(a, b) {
                throw new Error("The `query` method must be defined in child classes.");
            }, b.prototype.bind = function(a, b) {}, b.prototype.destroy = function() {}, b.prototype.generateResultId = function(b, c) {
                var d = b.id + "-result-";
                return d += a.generateChars(4), d += null != c.id ? "-" + c.id.toString() : "-" + a.generateChars(4);
            }, b;
        }), b.define("select2/data/select", [ "./base", "../utils", "jquery" ], function(a, b, c) {
            function d(a, b) {
                this.$element = a, this.options = b, d.__super__.constructor.call(this);
            }
            return b.Extend(d, a), d.prototype.current = function(a) {
                var b = [], d = this;
                this.$element.find(":selected").each(function() {
                    var a = c(this), e = d.item(a);
                    b.push(e);
                }), a(b);
            }, d.prototype.select = function(a) {
                var b = this;
                if (a.selected = !0, c(a.element).is("option")) return a.element.selected = !0, 
                void this.$element.trigger("change");
                if (this.$element.prop("multiple")) this.current(function(d) {
                    var e = [];
                    a = [ a ], a.push.apply(a, d);
                    for (var f = 0; f < a.length; f++) {
                        var g = a[f].id;
                        -1 === c.inArray(g, e) && e.push(g);
                    }
                    b.$element.val(e), b.$element.trigger("change");
                }); else {
                    var d = a.id;
                    this.$element.val(d), this.$element.trigger("change");
                }
            }, d.prototype.unselect = function(a) {
                var b = this;
                if (this.$element.prop("multiple")) return a.selected = !1, c(a.element).is("option") ? (a.element.selected = !1, 
                void this.$element.trigger("change")) : void this.current(function(d) {
                    for (var e = [], f = 0; f < d.length; f++) {
                        var g = d[f].id;
                        g !== a.id && -1 === c.inArray(g, e) && e.push(g);
                    }
                    b.$element.val(e), b.$element.trigger("change");
                });
            }, d.prototype.bind = function(a, b) {
                var c = this;
                this.container = a, a.on("select", function(a) {
                    c.select(a.data);
                }), a.on("unselect", function(a) {
                    c.unselect(a.data);
                });
            }, d.prototype.destroy = function() {
                this.$element.find("*").each(function() {
                    c.removeData(this, "data");
                });
            }, d.prototype.query = function(a, b) {
                var d = [], e = this, f = this.$element.children();
                f.each(function() {
                    var b = c(this);
                    if (b.is("option") || b.is("optgroup")) {
                        var f = e.item(b), g = e.matches(a, f);
                        null !== g && d.push(g);
                    }
                }), b({
                    results: d
                });
            }, d.prototype.addOptions = function(a) {
                b.appendMany(this.$element, a);
            }, d.prototype.option = function(a) {
                var b;
                a.children ? (b = document.createElement("optgroup"), b.label = a.text) : (b = document.createElement("option"), 
                void 0 !== b.textContent ? b.textContent = a.text : b.innerText = a.text), a.id && (b.value = a.id), 
                a.disabled && (b.disabled = !0), a.selected && (b.selected = !0), a.title && (b.title = a.title);
                var d = c(b), e = this._normalizeItem(a);
                return e.element = b, c.data(b, "data", e), d;
            }, d.prototype.item = function(a) {
                var b = {};
                if (b = c.data(a[0], "data"), null != b) return b;
                if (a.is("option")) b = {
                    id: a.val(),
                    text: a.text(),
                    disabled: a.prop("disabled"),
                    selected: a.prop("selected"),
                    title: a.prop("title")
                }; else if (a.is("optgroup")) {
                    b = {
                        text: a.prop("label"),
                        children: [],
                        title: a.prop("title")
                    };
                    for (var d = a.children("option"), e = [], f = 0; f < d.length; f++) {
                        var g = c(d[f]), h = this.item(g);
                        e.push(h);
                    }
                    b.children = e;
                }
                return b = this._normalizeItem(b), b.element = a[0], c.data(a[0], "data", b), b;
            }, d.prototype._normalizeItem = function(a) {
                c.isPlainObject(a) || (a = {
                    id: a,
                    text: a
                }), a = c.extend({}, {
                    text: ""
                }, a);
                var b = {
                    selected: !1,
                    disabled: !1
                };
                return null != a.id && (a.id = a.id.toString()), null != a.text && (a.text = a.text.toString()), 
                null == a._resultId && a.id && null != this.container && (a._resultId = this.generateResultId(this.container, a)), 
                c.extend({}, b, a);
            }, d.prototype.matches = function(a, b) {
                var c = this.options.get("matcher");
                return c(a, b);
            }, d;
        }), b.define("select2/data/array", [ "./select", "../utils", "jquery" ], function(a, b, c) {
            function d(a, b) {
                var c = b.get("data") || [];
                d.__super__.constructor.call(this, a, b), this.addOptions(this.convertToOptions(c));
            }
            return b.Extend(d, a), d.prototype.select = function(a) {
                var b = this.$element.find("option").filter(function(b, c) {
                    return c.value == a.id.toString();
                });
                0 === b.length && (b = this.option(a), this.addOptions(b)), d.__super__.select.call(this, a);
            }, d.prototype.convertToOptions = function(a) {
                function d(a) {
                    return function() {
                        return c(this).val() == a.id;
                    };
                }
                for (var e = this, f = this.$element.find("option"), g = f.map(function() {
                    return e.item(c(this)).id;
                }).get(), h = [], i = 0; i < a.length; i++) {
                    var j = this._normalizeItem(a[i]);
                    if (c.inArray(j.id, g) >= 0) {
                        var k = f.filter(d(j)), l = this.item(k), m = c.extend(!0, {}, l, j), n = this.option(m);
                        k.replaceWith(n);
                    } else {
                        var o = this.option(j);
                        if (j.children) {
                            var p = this.convertToOptions(j.children);
                            b.appendMany(o, p);
                        }
                        h.push(o);
                    }
                }
                return h;
            }, d;
        }), b.define("select2/data/ajax", [ "./array", "../utils", "jquery" ], function(a, b, c) {
            function d(a, b) {
                this.ajaxOptions = this._applyDefaults(b.get("ajax")), null != this.ajaxOptions.processResults && (this.processResults = this.ajaxOptions.processResults), 
                d.__super__.constructor.call(this, a, b);
            }
            return b.Extend(d, a), d.prototype._applyDefaults = function(a) {
                var b = {
                    data: function(a) {
                        return c.extend({}, a, {
                            q: a.term
                        });
                    },
                    transport: function(a, b, d) {
                        var e = c.ajax(a);
                        return e.then(b), e.fail(d), e;
                    }
                };
                return c.extend({}, b, a, !0);
            }, d.prototype.processResults = function(a) {
                return a;
            }, d.prototype.query = function(a, b) {
                function d() {
                    var d = f.transport(f, function(d) {
                        var f = e.processResults(d, a);
                        e.options.get("debug") && window.console && console.error && (f && f.results && c.isArray(f.results) || console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")), 
                        b(f);
                    }, function() {});
                    e._request = d;
                }
                var e = this;
                null != this._request && (c.isFunction(this._request.abort) && this._request.abort(), 
                this._request = null);
                var f = c.extend({
                    type: "GET"
                }, this.ajaxOptions);
                "function" == typeof f.url && (f.url = f.url.call(this.$element, a)), "function" == typeof f.data && (f.data = f.data.call(this.$element, a)), 
                this.ajaxOptions.delay && "" !== a.term ? (this._queryTimeout && window.clearTimeout(this._queryTimeout), 
                this._queryTimeout = window.setTimeout(d, this.ajaxOptions.delay)) : d();
            }, d;
        }), b.define("select2/data/tags", [ "jquery" ], function(a) {
            function b(b, c, d) {
                var e = d.get("tags"), f = d.get("createTag");
                if (void 0 !== f && (this.createTag = f), b.call(this, c, d), a.isArray(e)) for (var g = 0; g < e.length; g++) {
                    var h = e[g], i = this._normalizeItem(h), j = this.option(i);
                    this.$element.append(j);
                }
            }
            return b.prototype.query = function(a, b, c) {
                function d(a, f) {
                    for (var g = a.results, h = 0; h < g.length; h++) {
                        var i = g[h], j = null != i.children && !d({
                            results: i.children
                        }, !0), k = i.text === b.term;
                        if (k || j) return f ? !1 : (a.data = g, void c(a));
                    }
                    if (f) return !0;
                    var l = e.createTag(b);
                    if (null != l) {
                        var m = e.option(l);
                        m.attr("data-select2-tag", !0), e.addOptions([ m ]), e.insertTag(g, l);
                    }
                    a.results = g, c(a);
                }
                var e = this;
                return this._removeOldTags(), null == b.term || null != b.page ? void a.call(this, b, c) : void a.call(this, b, d);
            }, b.prototype.createTag = function(b, c) {
                var d = a.trim(c.term);
                return "" === d ? null : {
                    id: d,
                    text: d
                };
            }, b.prototype.insertTag = function(a, b, c) {
                b.unshift(c);
            }, b.prototype._removeOldTags = function(b) {
                var c = (this._lastTag, this.$element.find("option[data-select2-tag]"));
                c.each(function() {
                    this.selected || a(this).remove();
                });
            }, b;
        }), b.define("select2/data/tokenizer", [ "jquery" ], function(a) {
            function b(a, b, c) {
                var d = c.get("tokenizer");
                void 0 !== d && (this.tokenizer = d), a.call(this, b, c);
            }
            return b.prototype.bind = function(a, b, c) {
                a.call(this, b, c), this.$search = b.dropdown.$search || b.selection.$search || c.find(".select2-search__field");
            }, b.prototype.query = function(a, b, c) {
                function d(a) {
                    e.trigger("select", {
                        data: a
                    });
                }
                var e = this;
                b.term = b.term || "";
                var f = this.tokenizer(b, this.options, d);
                f.term !== b.term && (this.$search.length && (this.$search.val(f.term), this.$search.focus()), 
                b.term = f.term), a.call(this, b, c);
            }, b.prototype.tokenizer = function(b, c, d, e) {
                for (var f = d.get("tokenSeparators") || [], g = c.term, h = 0, i = this.createTag || function(a) {
                    return {
                        id: a.term,
                        text: a.term
                    };
                }; h < g.length; ) {
                    var j = g[h];
                    if (-1 !== a.inArray(j, f)) {
                        var k = g.substr(0, h), l = a.extend({}, c, {
                            term: k
                        }), m = i(l);
                        null != m ? (e(m), g = g.substr(h + 1) || "", h = 0) : h++;
                    } else h++;
                }
                return {
                    term: g
                };
            }, b;
        }), b.define("select2/data/minimumInputLength", [], function() {
            function a(a, b, c) {
                this.minimumInputLength = c.get("minimumInputLength"), a.call(this, b, c);
            }
            return a.prototype.query = function(a, b, c) {
                return b.term = b.term || "", b.term.length < this.minimumInputLength ? void this.trigger("results:message", {
                    message: "inputTooShort",
                    args: {
                        minimum: this.minimumInputLength,
                        input: b.term,
                        params: b
                    }
                }) : void a.call(this, b, c);
            }, a;
        }), b.define("select2/data/maximumInputLength", [], function() {
            function a(a, b, c) {
                this.maximumInputLength = c.get("maximumInputLength"), a.call(this, b, c);
            }
            return a.prototype.query = function(a, b, c) {
                return b.term = b.term || "", this.maximumInputLength > 0 && b.term.length > this.maximumInputLength ? void this.trigger("results:message", {
                    message: "inputTooLong",
                    args: {
                        maximum: this.maximumInputLength,
                        input: b.term,
                        params: b
                    }
                }) : void a.call(this, b, c);
            }, a;
        }), b.define("select2/data/maximumSelectionLength", [], function() {
            function a(a, b, c) {
                this.maximumSelectionLength = c.get("maximumSelectionLength"), a.call(this, b, c);
            }
            return a.prototype.query = function(a, b, c) {
                var d = this;
                this.current(function(e) {
                    var f = null != e ? e.length : 0;
                    return d.maximumSelectionLength > 0 && f >= d.maximumSelectionLength ? void d.trigger("results:message", {
                        message: "maximumSelected",
                        args: {
                            maximum: d.maximumSelectionLength
                        }
                    }) : void a.call(d, b, c);
                });
            }, a;
        }), b.define("select2/dropdown", [ "jquery", "./utils" ], function(a, b) {
            function c(a, b) {
                this.$element = a, this.options = b, c.__super__.constructor.call(this);
            }
            return b.Extend(c, b.Observable), c.prototype.render = function() {
                var b = a('<span class="select2-dropdown"><span class="select2-results"></span></span>');
                return b.attr("dir", this.options.get("dir")), this.$dropdown = b, b;
            }, c.prototype.bind = function() {}, c.prototype.position = function(a, b) {}, c.prototype.destroy = function() {
                this.$dropdown.remove();
            }, c;
        }), b.define("select2/dropdown/search", [ "jquery", "../utils" ], function(a, b) {
            function c() {}
            return c.prototype.render = function(b) {
                var c = b.call(this), d = a('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" /></span>');
                return this.$searchContainer = d, this.$search = d.find("input"), c.prepend(d), 
                c;
            }, c.prototype.bind = function(b, c, d) {
                var e = this;
                b.call(this, c, d), this.$search.on("keydown", function(a) {
                    e.trigger("keypress", a), e._keyUpPrevented = a.isDefaultPrevented();
                }), this.$search.on("input", function(b) {
                    a(this).off("keyup");
                }), this.$search.on("keyup input", function(a) {
                    e.handleSearch(a);
                }), c.on("open", function() {
                    e.$search.attr("tabindex", 0), e.$search.focus(), window.setTimeout(function() {
                        e.$search.focus();
                    }, 0);
                }), c.on("close", function() {
                    e.$search.attr("tabindex", -1), e.$search.val("");
                }), c.on("results:all", function(a) {
                    if (null == a.query.term || "" === a.query.term) {
                        var b = e.showSearch(a);
                        b ? e.$searchContainer.removeClass("select2-search--hide") : e.$searchContainer.addClass("select2-search--hide");
                    }
                });
            }, c.prototype.handleSearch = function(a) {
                if (!this._keyUpPrevented) {
                    var b = this.$search.val();
                    this.trigger("query", {
                        term: b
                    });
                }
                this._keyUpPrevented = !1;
            }, c.prototype.showSearch = function(a, b) {
                return !0;
            }, c;
        }), b.define("select2/dropdown/hidePlaceholder", [], function() {
            function a(a, b, c, d) {
                this.placeholder = this.normalizePlaceholder(c.get("placeholder")), a.call(this, b, c, d);
            }
            return a.prototype.append = function(a, b) {
                b.results = this.removePlaceholder(b.results), a.call(this, b);
            }, a.prototype.normalizePlaceholder = function(a, b) {
                return "string" == typeof b && (b = {
                    id: "",
                    text: b
                }), b;
            }, a.prototype.removePlaceholder = function(a, b) {
                for (var c = b.slice(0), d = b.length - 1; d >= 0; d--) {
                    var e = b[d];
                    this.placeholder.id === e.id && c.splice(d, 1);
                }
                return c;
            }, a;
        }), b.define("select2/dropdown/infiniteScroll", [ "jquery" ], function(a) {
            function b(a, b, c, d) {
                this.lastParams = {}, a.call(this, b, c, d), this.$loadingMore = this.createLoadingMore(), 
                this.loading = !1;
            }
            return b.prototype.append = function(a, b) {
                this.$loadingMore.remove(), this.loading = !1, a.call(this, b), this.showLoadingMore(b) && this.$results.append(this.$loadingMore);
            }, b.prototype.bind = function(b, c, d) {
                var e = this;
                b.call(this, c, d), c.on("query", function(a) {
                    e.lastParams = a, e.loading = !0;
                }), c.on("query:append", function(a) {
                    e.lastParams = a, e.loading = !0;
                }), this.$results.on("scroll", function() {
                    var b = a.contains(document.documentElement, e.$loadingMore[0]);
                    if (!e.loading && b) {
                        var c = e.$results.offset().top + e.$results.outerHeight(!1), d = e.$loadingMore.offset().top + e.$loadingMore.outerHeight(!1);
                        c + 50 >= d && e.loadMore();
                    }
                });
            }, b.prototype.loadMore = function() {
                this.loading = !0;
                var b = a.extend({}, {
                    page: 1
                }, this.lastParams);
                b.page++, this.trigger("query:append", b);
            }, b.prototype.showLoadingMore = function(a, b) {
                return b.pagination && b.pagination.more;
            }, b.prototype.createLoadingMore = function() {
                var b = a('<li class="select2-results__option select2-results__option--load-more"role="treeitem" aria-disabled="true"></li>'), c = this.options.get("translations").get("loadingMore");
                return b.html(c(this.lastParams)), b;
            }, b;
        }), b.define("select2/dropdown/attachBody", [ "jquery", "../utils" ], function(a, b) {
            function c(b, c, d) {
                this.$dropdownParent = d.get("dropdownParent") || a(document.body), b.call(this, c, d);
            }
            return c.prototype.bind = function(a, b, c) {
                var d = this, e = !1;
                a.call(this, b, c), b.on("open", function() {
                    d._showDropdown(), d._attachPositioningHandler(b), e || (e = !0, b.on("results:all", function() {
                        d._positionDropdown(), d._resizeDropdown();
                    }), b.on("results:append", function() {
                        d._positionDropdown(), d._resizeDropdown();
                    }));
                }), b.on("close", function() {
                    d._hideDropdown(), d._detachPositioningHandler(b);
                }), this.$dropdownContainer.on("mousedown", function(a) {
                    a.stopPropagation();
                });
            }, c.prototype.destroy = function(a) {
                a.call(this), this.$dropdownContainer.remove();
            }, c.prototype.position = function(a, b, c) {
                b.attr("class", c.attr("class")), b.removeClass("select2"), b.addClass("select2-container--open"), 
                b.css({
                    position: "absolute",
                    top: -999999
                }), this.$container = c;
            }, c.prototype.render = function(b) {
                var c = a("<span></span>"), d = b.call(this);
                return c.append(d), this.$dropdownContainer = c, c;
            }, c.prototype._hideDropdown = function(a) {
                this.$dropdownContainer.detach();
            }, c.prototype._attachPositioningHandler = function(c, d) {
                var e = this, f = "scroll.select2." + d.id, g = "resize.select2." + d.id, h = "orientationchange.select2." + d.id, i = this.$container.parents().filter(b.hasScroll);
                i.each(function() {
                    a(this).data("select2-scroll-position", {
                        x: a(this).scrollLeft(),
                        y: a(this).scrollTop()
                    });
                }), i.on(f, function(b) {
                    var c = a(this).data("select2-scroll-position");
                    a(this).scrollTop(c.y);
                }), a(window).on(f + " " + g + " " + h, function(a) {
                    e._positionDropdown(), e._resizeDropdown();
                });
            }, c.prototype._detachPositioningHandler = function(c, d) {
                var e = "scroll.select2." + d.id, f = "resize.select2." + d.id, g = "orientationchange.select2." + d.id, h = this.$container.parents().filter(b.hasScroll);
                h.off(e), a(window).off(e + " " + f + " " + g);
            }, c.prototype._positionDropdown = function() {
                var b = a(window), c = this.$dropdown.hasClass("select2-dropdown--above"), d = this.$dropdown.hasClass("select2-dropdown--below"), e = null, f = (this.$container.position(), 
                this.$container.offset());
                f.bottom = f.top + this.$container.outerHeight(!1);
                var g = {
                    height: this.$container.outerHeight(!1)
                };
                g.top = f.top, g.bottom = f.top + g.height;
                var h = {
                    height: this.$dropdown.outerHeight(!1)
                }, i = {
                    top: b.scrollTop(),
                    bottom: b.scrollTop() + b.height()
                }, j = i.top < f.top - h.height, k = i.bottom > f.bottom + h.height, l = {
                    left: f.left,
                    top: g.bottom
                };
                if ("static" !== this.$dropdownParent[0].style.position) {
                    var m = this.$dropdownParent.offset();
                    l.top -= m.top, l.left -= m.left;
                }
                c || d || (e = "below"), k || !j || c ? !j && k && c && (e = "below") : e = "above", 
                ("above" == e || c && "below" !== e) && (l.top = g.top - h.height), null != e && (this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--" + e), 
                this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--" + e)), 
                this.$dropdownContainer.css(l);
            }, c.prototype._resizeDropdown = function() {
                var a = {
                    width: this.$container.outerWidth(!1) + "px"
                };
                this.options.get("dropdownAutoWidth") && (a.minWidth = a.width, a.width = "auto"), 
                this.$dropdown.css(a);
            }, c.prototype._showDropdown = function(a) {
                this.$dropdownContainer.appendTo(this.$dropdownParent), this._positionDropdown(), 
                this._resizeDropdown();
            }, c;
        }), b.define("select2/dropdown/minimumResultsForSearch", [], function() {
            function a(b) {
                for (var c = 0, d = 0; d < b.length; d++) {
                    var e = b[d];
                    e.children ? c += a(e.children) : c++;
                }
                return c;
            }
            function b(a, b, c, d) {
                this.minimumResultsForSearch = c.get("minimumResultsForSearch"), this.minimumResultsForSearch < 0 && (this.minimumResultsForSearch = 1 / 0), 
                a.call(this, b, c, d);
            }
            return b.prototype.showSearch = function(b, c) {
                return a(c.data.results) < this.minimumResultsForSearch ? !1 : b.call(this, c);
            }, b;
        }), b.define("select2/dropdown/selectOnClose", [], function() {
            function a() {}
            return a.prototype.bind = function(a, b, c) {
                var d = this;
                a.call(this, b, c), b.on("close", function() {
                    d._handleSelectOnClose();
                });
            }, a.prototype._handleSelectOnClose = function() {
                var a = this.getHighlightedResults();
                if (!(a.length < 1)) {
                    var b = a.data("data");
                    null != b.element && b.element.selected || null == b.element && b.selected || this.trigger("select", {
                        data: b
                    });
                }
            }, a;
        }), b.define("select2/dropdown/closeOnSelect", [], function() {
            function a() {}
            return a.prototype.bind = function(a, b, c) {
                var d = this;
                a.call(this, b, c), b.on("select", function(a) {
                    d._selectTriggered(a);
                }), b.on("unselect", function(a) {
                    d._selectTriggered(a);
                });
            }, a.prototype._selectTriggered = function(a, b) {
                var c = b.originalEvent;
                c && c.ctrlKey || this.trigger("close", {});
            }, a;
        }), b.define("select2/i18n/en", [], function() {
            return {
                errorLoading: function() {
                    return "The results could not be loaded.";
                },
                inputTooLong: function(a) {
                    var b = a.input.length - a.maximum, c = "Please delete " + b + " character";
                    return 1 != b && (c += "s"), c;
                },
                inputTooShort: function(a) {
                    var b = a.minimum - a.input.length, c = "Please enter " + b + " or more characters";
                    return c;
                },
                loadingMore: function() {
                    return "Loading more results…";
                },
                maximumSelected: function(a) {
                    var b = "You can only select " + a.maximum + " item";
                    return 1 != a.maximum && (b += "s"), b;
                },
                noResults: function() {
                    return "No results found";
                },
                searching: function() {
                    return "Searching…";
                }
            };
        }), b.define("select2/defaults", [ "jquery", "require", "./results", "./selection/single", "./selection/multiple", "./selection/placeholder", "./selection/allowClear", "./selection/search", "./selection/eventRelay", "./utils", "./translation", "./diacritics", "./data/select", "./data/array", "./data/ajax", "./data/tags", "./data/tokenizer", "./data/minimumInputLength", "./data/maximumInputLength", "./data/maximumSelectionLength", "./dropdown", "./dropdown/search", "./dropdown/hidePlaceholder", "./dropdown/infiniteScroll", "./dropdown/attachBody", "./dropdown/minimumResultsForSearch", "./dropdown/selectOnClose", "./dropdown/closeOnSelect", "./i18n/en" ], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C) {
            function D() {
                this.reset();
            }
            D.prototype.apply = function(l) {
                if (l = a.extend({}, this.defaults, l), null == l.dataAdapter) {
                    if (null != l.ajax ? l.dataAdapter = o : null != l.data ? l.dataAdapter = n : l.dataAdapter = m, 
                    l.minimumInputLength > 0 && (l.dataAdapter = j.Decorate(l.dataAdapter, r)), l.maximumInputLength > 0 && (l.dataAdapter = j.Decorate(l.dataAdapter, s)), 
                    l.maximumSelectionLength > 0 && (l.dataAdapter = j.Decorate(l.dataAdapter, t)), 
                    l.tags && (l.dataAdapter = j.Decorate(l.dataAdapter, p)), (null != l.tokenSeparators || null != l.tokenizer) && (l.dataAdapter = j.Decorate(l.dataAdapter, q)), 
                    null != l.query) {
                        var C = b(l.amdBase + "compat/query");
                        l.dataAdapter = j.Decorate(l.dataAdapter, C);
                    }
                    if (null != l.initSelection) {
                        var D = b(l.amdBase + "compat/initSelection");
                        l.dataAdapter = j.Decorate(l.dataAdapter, D);
                    }
                }
                if (null == l.resultsAdapter && (l.resultsAdapter = c, null != l.ajax && (l.resultsAdapter = j.Decorate(l.resultsAdapter, x)), 
                null != l.placeholder && (l.resultsAdapter = j.Decorate(l.resultsAdapter, w)), l.selectOnClose && (l.resultsAdapter = j.Decorate(l.resultsAdapter, A))), 
                null == l.dropdownAdapter) {
                    if (l.multiple) l.dropdownAdapter = u; else {
                        var E = j.Decorate(u, v);
                        l.dropdownAdapter = E;
                    }
                    if (0 !== l.minimumResultsForSearch && (l.dropdownAdapter = j.Decorate(l.dropdownAdapter, z)), 
                    l.closeOnSelect && (l.dropdownAdapter = j.Decorate(l.dropdownAdapter, B)), null != l.dropdownCssClass || null != l.dropdownCss || null != l.adaptDropdownCssClass) {
                        var F = b(l.amdBase + "compat/dropdownCss");
                        l.dropdownAdapter = j.Decorate(l.dropdownAdapter, F);
                    }
                    l.dropdownAdapter = j.Decorate(l.dropdownAdapter, y);
                }
                if (null == l.selectionAdapter) {
                    if (l.multiple ? l.selectionAdapter = e : l.selectionAdapter = d, null != l.placeholder && (l.selectionAdapter = j.Decorate(l.selectionAdapter, f)), 
                    l.allowClear && (l.selectionAdapter = j.Decorate(l.selectionAdapter, g)), l.multiple && (l.selectionAdapter = j.Decorate(l.selectionAdapter, h)), 
                    null != l.containerCssClass || null != l.containerCss || null != l.adaptContainerCssClass) {
                        var G = b(l.amdBase + "compat/containerCss");
                        l.selectionAdapter = j.Decorate(l.selectionAdapter, G);
                    }
                    l.selectionAdapter = j.Decorate(l.selectionAdapter, i);
                }
                if ("string" == typeof l.language) if (l.language.indexOf("-") > 0) {
                    var H = l.language.split("-"), I = H[0];
                    l.language = [ l.language, I ];
                } else l.language = [ l.language ];
                if (a.isArray(l.language)) {
                    var J = new k();
                    l.language.push("en");
                    for (var K = l.language, L = 0; L < K.length; L++) {
                        var M = K[L], N = {};
                        try {
                            N = k.loadPath(M);
                        } catch (O) {
                            try {
                                M = this.defaults.amdLanguageBase + M, N = k.loadPath(M);
                            } catch (P) {
                                l.debug && window.console && console.warn && console.warn('Select2: The language file for "' + M + '" could not be automatically loaded. A fallback will be used instead.');
                                continue;
                            }
                        }
                        J.extend(N);
                    }
                    l.translations = J;
                } else {
                    var Q = k.loadPath(this.defaults.amdLanguageBase + "en"), R = new k(l.language);
                    R.extend(Q), l.translations = R;
                }
                return l;
            }, D.prototype.reset = function() {
                function b(a) {
                    function b(a) {
                        return l[a] || a;
                    }
                    return a.replace(/[^\u0000-\u007E]/g, b);
                }
                function c(d, e) {
                    if ("" === a.trim(d.term)) return e;
                    if (e.children && e.children.length > 0) {
                        for (var f = a.extend(!0, {}, e), g = e.children.length - 1; g >= 0; g--) {
                            var h = e.children[g], i = c(d, h);
                            null == i && f.children.splice(g, 1);
                        }
                        return f.children.length > 0 ? f : c(d, f);
                    }
                    var j = b(e.text).toUpperCase(), k = b(d.term).toUpperCase();
                    return j.indexOf(k) > -1 ? e : null;
                }
                this.defaults = {
                    amdBase: "./",
                    amdLanguageBase: "./i18n/",
                    closeOnSelect: !0,
                    debug: !1,
                    dropdownAutoWidth: !1,
                    escapeMarkup: j.escapeMarkup,
                    language: C,
                    matcher: c,
                    minimumInputLength: 0,
                    maximumInputLength: 0,
                    maximumSelectionLength: 0,
                    minimumResultsForSearch: 0,
                    selectOnClose: !1,
                    sorter: function(a) {
                        return a;
                    },
                    templateResult: function(a) {
                        return a.text;
                    },
                    templateSelection: function(a) {
                        return a.text;
                    },
                    theme: "default",
                    width: "resolve"
                };
            }, D.prototype.set = function(b, c) {
                var d = a.camelCase(b), e = {};
                e[d] = c;
                var f = j._convertData(e);
                a.extend(this.defaults, f);
            };
            var E = new D();
            return E;
        }), b.define("select2/options", [ "require", "jquery", "./defaults", "./utils" ], function(a, b, c, d) {
            function e(b, e) {
                if (this.options = b, null != e && this.fromElement(e), this.options = c.apply(this.options), 
                e && e.is("input")) {
                    var f = a(this.get("amdBase") + "compat/inputData");
                    this.options.dataAdapter = d.Decorate(this.options.dataAdapter, f);
                }
            }
            return e.prototype.fromElement = function(a) {
                var c = [ "select2" ];
                null == this.options.multiple && (this.options.multiple = a.prop("multiple")), null == this.options.disabled && (this.options.disabled = a.prop("disabled")), 
                null == this.options.language && (a.prop("lang") ? this.options.language = a.prop("lang").toLowerCase() : a.closest("[lang]").prop("lang") && (this.options.language = a.closest("[lang]").prop("lang"))), 
                null == this.options.dir && (a.prop("dir") ? this.options.dir = a.prop("dir") : a.closest("[dir]").prop("dir") ? this.options.dir = a.closest("[dir]").prop("dir") : this.options.dir = "ltr"), 
                a.prop("disabled", this.options.disabled), a.prop("multiple", this.options.multiple), 
                a.data("select2Tags") && (this.options.debug && window.console && console.warn && console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'), 
                a.data("data", a.data("select2Tags")), a.data("tags", !0)), a.data("ajaxUrl") && (this.options.debug && window.console && console.warn && console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."), 
                a.attr("ajax--url", a.data("ajaxUrl")), a.data("ajax--url", a.data("ajaxUrl")));
                var e = {};
                e = b.fn.jquery && "1." == b.fn.jquery.substr(0, 2) && a[0].dataset ? b.extend(!0, {}, a[0].dataset, a.data()) : a.data();
                var f = b.extend(!0, {}, e);
                f = d._convertData(f);
                for (var g in f) b.inArray(g, c) > -1 || (b.isPlainObject(this.options[g]) ? b.extend(this.options[g], f[g]) : this.options[g] = f[g]);
                return this;
            }, e.prototype.get = function(a) {
                return this.options[a];
            }, e.prototype.set = function(a, b) {
                this.options[a] = b;
            }, e;
        }), b.define("select2/core", [ "jquery", "./options", "./utils", "./keys" ], function(a, b, c, d) {
            var e = function(a, c) {
                null != a.data("select2") && a.data("select2").destroy(), this.$element = a, this.id = this._generateId(a), 
                c = c || {}, this.options = new b(c, a), e.__super__.constructor.call(this);
                var d = a.attr("tabindex") || 0;
                a.data("old-tabindex", d), a.attr("tabindex", "-1");
                var f = this.options.get("dataAdapter");
                this.dataAdapter = new f(a, this.options);
                var g = this.render();
                this._placeContainer(g);
                var h = this.options.get("selectionAdapter");
                this.selection = new h(a, this.options), this.$selection = this.selection.render(), 
                this.selection.position(this.$selection, g);
                var i = this.options.get("dropdownAdapter");
                this.dropdown = new i(a, this.options), this.$dropdown = this.dropdown.render(), 
                this.dropdown.position(this.$dropdown, g);
                var j = this.options.get("resultsAdapter");
                this.results = new j(a, this.options, this.dataAdapter), this.$results = this.results.render(), 
                this.results.position(this.$results, this.$dropdown);
                var k = this;
                this._bindAdapters(), this._registerDomEvents(), this._registerDataEvents(), this._registerSelectionEvents(), 
                this._registerDropdownEvents(), this._registerResultsEvents(), this._registerEvents(), 
                this.dataAdapter.current(function(a) {
                    k.trigger("selection:update", {
                        data: a
                    });
                }), a.addClass("select2-hidden-accessible"), a.attr("aria-hidden", "true"), this._syncAttributes(), 
                a.data("select2", this);
            };
            return c.Extend(e, c.Observable), e.prototype._generateId = function(a) {
                var b = "";
                return b = null != a.attr("id") ? a.attr("id") : null != a.attr("name") ? a.attr("name") + "-" + c.generateChars(2) : c.generateChars(4), 
                b = "select2-" + b;
            }, e.prototype._placeContainer = function(a) {
                a.insertAfter(this.$element);
                var b = this._resolveWidth(this.$element, this.options.get("width"));
                null != b && a.css("width", b);
            }, e.prototype._resolveWidth = function(a, b) {
                var c = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
                if ("resolve" == b) {
                    var d = this._resolveWidth(a, "style");
                    return null != d ? d : this._resolveWidth(a, "element");
                }
                if ("element" == b) {
                    var e = a.outerWidth(!1);
                    return 0 >= e ? "auto" : e + "px";
                }
                if ("style" == b) {
                    var f = a.attr("style");
                    if ("string" != typeof f) return null;
                    for (var g = f.split(";"), h = 0, i = g.length; i > h; h += 1) {
                        var j = g[h].replace(/\s/g, ""), k = j.match(c);
                        if (null !== k && k.length >= 1) return k[1];
                    }
                    return null;
                }
                return b;
            }, e.prototype._bindAdapters = function() {
                this.dataAdapter.bind(this, this.$container), this.selection.bind(this, this.$container), 
                this.dropdown.bind(this, this.$container), this.results.bind(this, this.$container);
            }, e.prototype._registerDomEvents = function() {
                var b = this;
                this.$element.on("change.select2", function() {
                    b.dataAdapter.current(function(a) {
                        b.trigger("selection:update", {
                            data: a
                        });
                    });
                }), this._sync = c.bind(this._syncAttributes, this), this.$element[0].attachEvent && this.$element[0].attachEvent("onpropertychange", this._sync);
                var d = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
                null != d ? (this._observer = new d(function(c) {
                    a.each(c, b._sync);
                }), this._observer.observe(this.$element[0], {
                    attributes: !0,
                    subtree: !1
                })) : this.$element[0].addEventListener && this.$element[0].addEventListener("DOMAttrModified", b._sync, !1);
            }, e.prototype._registerDataEvents = function() {
                var a = this;
                this.dataAdapter.on("*", function(b, c) {
                    a.trigger(b, c);
                });
            }, e.prototype._registerSelectionEvents = function() {
                var b = this, c = [ "toggle", "focus" ];
                this.selection.on("toggle", function() {
                    b.toggleDropdown();
                }), this.selection.on("focus", function(a) {
                    b.focus(a);
                }), this.selection.on("*", function(d, e) {
                    -1 === a.inArray(d, c) && b.trigger(d, e);
                });
            }, e.prototype._registerDropdownEvents = function() {
                var a = this;
                this.dropdown.on("*", function(b, c) {
                    a.trigger(b, c);
                });
            }, e.prototype._registerResultsEvents = function() {
                var a = this;
                this.results.on("*", function(b, c) {
                    a.trigger(b, c);
                });
            }, e.prototype._registerEvents = function() {
                var a = this;
                this.on("open", function() {
                    a.$container.addClass("select2-container--open");
                }), this.on("close", function() {
                    a.$container.removeClass("select2-container--open");
                }), this.on("enable", function() {
                    a.$container.removeClass("select2-container--disabled");
                }), this.on("disable", function() {
                    a.$container.addClass("select2-container--disabled");
                }), this.on("blur", function() {
                    a.$container.removeClass("select2-container--focus");
                }), this.on("query", function(b) {
                    a.isOpen() || a.trigger("open", {}), this.dataAdapter.query(b, function(c) {
                        a.trigger("results:all", {
                            data: c,
                            query: b
                        });
                    });
                }), this.on("query:append", function(b) {
                    this.dataAdapter.query(b, function(c) {
                        a.trigger("results:append", {
                            data: c,
                            query: b
                        });
                    });
                }), this.on("keypress", function(b) {
                    var c = b.which;
                    a.isOpen() ? c === d.ESC || c === d.TAB || c === d.UP && b.altKey ? (a.close(), 
                    b.preventDefault()) : c === d.ENTER ? (a.trigger("results:select", {}), b.preventDefault()) : c === d.SPACE && b.ctrlKey ? (a.trigger("results:toggle", {}), 
                    b.preventDefault()) : c === d.UP ? (a.trigger("results:previous", {}), b.preventDefault()) : c === d.DOWN && (a.trigger("results:next", {}), 
                    b.preventDefault()) : (c === d.ENTER || c === d.SPACE || c === d.DOWN && b.altKey) && (a.open(), 
                    b.preventDefault());
                });
            }, e.prototype._syncAttributes = function() {
                this.options.set("disabled", this.$element.prop("disabled")), this.options.get("disabled") ? (this.isOpen() && this.close(), 
                this.trigger("disable", {})) : this.trigger("enable", {});
            }, e.prototype.trigger = function(a, b) {
                var c = e.__super__.trigger, d = {
                    open: "opening",
                    close: "closing",
                    select: "selecting",
                    unselect: "unselecting"
                };
                if (void 0 === b && (b = {}), a in d) {
                    var f = d[a], g = {
                        prevented: !1,
                        name: a,
                        args: b
                    };
                    if (c.call(this, f, g), g.prevented) return void (b.prevented = !0);
                }
                c.call(this, a, b);
            }, e.prototype.toggleDropdown = function() {
                this.options.get("disabled") || (this.isOpen() ? this.close() : this.open());
            }, e.prototype.open = function() {
                this.isOpen() || this.trigger("query", {});
            }, e.prototype.close = function() {
                this.isOpen() && this.trigger("close", {});
            }, e.prototype.isOpen = function() {
                return this.$container.hasClass("select2-container--open");
            }, e.prototype.hasFocus = function() {
                return this.$container.hasClass("select2-container--focus");
            }, e.prototype.focus = function(a) {
                this.hasFocus() || (this.$container.addClass("select2-container--focus"), this.trigger("focus", {}));
            }, e.prototype.enable = function(a) {
                this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'), 
                (null == a || 0 === a.length) && (a = [ !0 ]);
                var b = !a[0];
                this.$element.prop("disabled", b);
            }, e.prototype.data = function() {
                this.options.get("debug") && arguments.length > 0 && window.console && console.warn && console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');
                var a = [];
                return this.dataAdapter.current(function(b) {
                    a = b;
                }), a;
            }, e.prototype.val = function(b) {
                if (this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'), 
                null == b || 0 === b.length) return this.$element.val();
                var c = b[0];
                a.isArray(c) && (c = a.map(c, function(a) {
                    return a.toString();
                })), this.$element.val(c).trigger("change");
            }, e.prototype.destroy = function() {
                this.$container.remove(), this.$element[0].detachEvent && this.$element[0].detachEvent("onpropertychange", this._sync), 
                null != this._observer ? (this._observer.disconnect(), this._observer = null) : this.$element[0].removeEventListener && this.$element[0].removeEventListener("DOMAttrModified", this._sync, !1), 
                this._sync = null, this.$element.off(".select2"), this.$element.attr("tabindex", this.$element.data("old-tabindex")), 
                this.$element.removeClass("select2-hidden-accessible"), this.$element.attr("aria-hidden", "false"), 
                this.$element.removeData("select2"), this.dataAdapter.destroy(), this.selection.destroy(), 
                this.dropdown.destroy(), this.results.destroy(), this.dataAdapter = null, this.selection = null, 
                this.dropdown = null, this.results = null;
            }, e.prototype.render = function() {
                var b = a('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');
                return b.attr("dir", this.options.get("dir")), this.$container = b, this.$container.addClass("select2-container--" + this.options.get("theme")), 
                b.data("element", this.$element), b;
            }, e;
        }), b.define("select2/compat/utils", [ "jquery" ], function(a) {
            function b(b, c, d) {
                var e, f, g = [];
                e = a.trim(b.attr("class")), e && (e = "" + e, a(e.split(/\s+/)).each(function() {
                    0 === this.indexOf("select2-") && g.push(this);
                })), e = a.trim(c.attr("class")), e && (e = "" + e, a(e.split(/\s+/)).each(function() {
                    0 !== this.indexOf("select2-") && (f = d(this), null != f && g.push(f));
                })), b.attr("class", g.join(" "));
            }
            return {
                syncCssClasses: b
            };
        }), b.define("select2/compat/containerCss", [ "jquery", "./utils" ], function(a, b) {
            function c(a) {
                return null;
            }
            function d() {}
            return d.prototype.render = function(d) {
                var e = d.call(this), f = this.options.get("containerCssClass") || "";
                a.isFunction(f) && (f = f(this.$element));
                var g = this.options.get("adaptContainerCssClass");
                if (g = g || c, -1 !== f.indexOf(":all:")) {
                    f = f.replace(":all:", "");
                    var h = g;
                    g = function(a) {
                        var b = h(a);
                        return null != b ? b + " " + a : a;
                    };
                }
                var i = this.options.get("containerCss") || {};
                return a.isFunction(i) && (i = i(this.$element)), b.syncCssClasses(e, this.$element, g), 
                e.css(i), e.addClass(f), e;
            }, d;
        }), b.define("select2/compat/dropdownCss", [ "jquery", "./utils" ], function(a, b) {
            function c(a) {
                return null;
            }
            function d() {}
            return d.prototype.render = function(d) {
                var e = d.call(this), f = this.options.get("dropdownCssClass") || "";
                a.isFunction(f) && (f = f(this.$element));
                var g = this.options.get("adaptDropdownCssClass");
                if (g = g || c, -1 !== f.indexOf(":all:")) {
                    f = f.replace(":all:", "");
                    var h = g;
                    g = function(a) {
                        var b = h(a);
                        return null != b ? b + " " + a : a;
                    };
                }
                var i = this.options.get("dropdownCss") || {};
                return a.isFunction(i) && (i = i(this.$element)), b.syncCssClasses(e, this.$element, g), 
                e.css(i), e.addClass(f), e;
            }, d;
        }), b.define("select2/compat/initSelection", [ "jquery" ], function(a) {
            function b(a, b, c) {
                c.get("debug") && window.console && console.warn && console.warn("Select2: The `initSelection` option has been deprecated in favor of a custom data adapter that overrides the `current` method. This method is now called multiple times instead of a single time when the instance is initialized. Support will be removed for the `initSelection` option in future versions of Select2"), 
                this.initSelection = c.get("initSelection"), this._isInitialized = !1, a.call(this, b, c);
            }
            return b.prototype.current = function(b, c) {
                var d = this;
                return this._isInitialized ? void b.call(this, c) : void this.initSelection.call(null, this.$element, function(b) {
                    d._isInitialized = !0, a.isArray(b) || (b = [ b ]), c(b);
                });
            }, b;
        }), b.define("select2/compat/inputData", [ "jquery" ], function(a) {
            function b(a, b, c) {
                this._currentData = [], this._valueSeparator = c.get("valueSeparator") || ",", "hidden" === b.prop("type") && c.get("debug") && console && console.warn && console.warn("Select2: Using a hidden input with Select2 is no longer supported and may stop working in the future. It is recommended to use a `<select>` element instead."), 
                a.call(this, b, c);
            }
            return b.prototype.current = function(b, c) {
                function d(b, c) {
                    var e = [];
                    return b.selected || -1 !== a.inArray(b.id, c) ? (b.selected = !0, e.push(b)) : b.selected = !1, 
                    b.children && e.push.apply(e, d(b.children, c)), e;
                }
                for (var e = [], f = 0; f < this._currentData.length; f++) {
                    var g = this._currentData[f];
                    e.push.apply(e, d(g, this.$element.val().split(this._valueSeparator)));
                }
                c(e);
            }, b.prototype.select = function(b, c) {
                if (this.options.get("multiple")) {
                    var d = this.$element.val();
                    d += this._valueSeparator + c.id, this.$element.val(d), this.$element.trigger("change");
                } else this.current(function(b) {
                    a.map(b, function(a) {
                        a.selected = !1;
                    });
                }), this.$element.val(c.id), this.$element.trigger("change");
            }, b.prototype.unselect = function(a, b) {
                var c = this;
                b.selected = !1, this.current(function(a) {
                    for (var d = [], e = 0; e < a.length; e++) {
                        var f = a[e];
                        b.id != f.id && d.push(f.id);
                    }
                    c.$element.val(d.join(c._valueSeparator)), c.$element.trigger("change");
                });
            }, b.prototype.query = function(a, b, c) {
                for (var d = [], e = 0; e < this._currentData.length; e++) {
                    var f = this._currentData[e], g = this.matches(b, f);
                    null !== g && d.push(g);
                }
                c({
                    results: d
                });
            }, b.prototype.addOptions = function(b, c) {
                var d = a.map(c, function(b) {
                    return a.data(b[0], "data");
                });
                this._currentData.push.apply(this._currentData, d);
            }, b;
        }), b.define("select2/compat/matcher", [ "jquery" ], function(a) {
            function b(b) {
                function c(c, d) {
                    var e = a.extend(!0, {}, d);
                    if (null == c.term || "" === a.trim(c.term)) return e;
                    if (d.children) {
                        for (var f = d.children.length - 1; f >= 0; f--) {
                            var g = d.children[f], h = b(c.term, g.text, g);
                            h || e.children.splice(f, 1);
                        }
                        if (e.children.length > 0) return e;
                    }
                    return b(c.term, d.text, d) ? e : null;
                }
                return c;
            }
            return b;
        }), b.define("select2/compat/query", [], function() {
            function a(a, b, c) {
                c.get("debug") && window.console && console.warn && console.warn("Select2: The `query` option has been deprecated in favor of a custom data adapter that overrides the `query` method. Support will be removed for the `query` option in future versions of Select2."), 
                a.call(this, b, c);
            }
            return a.prototype.query = function(a, b, c) {
                b.callback = c;
                var d = this.options.get("query");
                d.call(null, b);
            }, a;
        }), b.define("select2/dropdown/attachContainer", [], function() {
            function a(a, b, c) {
                a.call(this, b, c);
            }
            return a.prototype.position = function(a, b, c) {
                var d = c.find(".dropdown-wrapper");
                d.append(b), b.addClass("select2-dropdown--below"), c.addClass("select2-container--below");
            }, a;
        }), b.define("select2/dropdown/stopPropagation", [], function() {
            function a() {}
            return a.prototype.bind = function(a, b, c) {
                a.call(this, b, c);
                var d = [ "blur", "change", "click", "dblclick", "focus", "focusin", "focusout", "input", "keydown", "keyup", "keypress", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseover", "mouseup", "search", "touchend", "touchstart" ];
                this.$dropdown.on(d.join(" "), function(a) {
                    a.stopPropagation();
                });
            }, a;
        }), b.define("select2/selection/stopPropagation", [], function() {
            function a() {}
            return a.prototype.bind = function(a, b, c) {
                a.call(this, b, c);
                var d = [ "blur", "change", "click", "dblclick", "focus", "focusin", "focusout", "input", "keydown", "keyup", "keypress", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseover", "mouseup", "search", "touchend", "touchstart" ];
                this.$selection.on(d.join(" "), function(a) {
                    a.stopPropagation();
                });
            }, a;
        }), function(c) {
            "function" == typeof b.define && b.define.amd ? b.define("jquery-mousewheel", [ "jquery" ], c) : "object" == typeof exports ? module.exports = c : c(a);
        }(function(a) {
            function b(b) {
                var g = b || window.event, h = i.call(arguments, 1), j = 0, l = 0, m = 0, n = 0, o = 0, p = 0;
                if (b = a.event.fix(g), b.type = "mousewheel", "detail" in g && (m = -1 * g.detail), 
                "wheelDelta" in g && (m = g.wheelDelta), "wheelDeltaY" in g && (m = g.wheelDeltaY), 
                "wheelDeltaX" in g && (l = -1 * g.wheelDeltaX), "axis" in g && g.axis === g.HORIZONTAL_AXIS && (l = -1 * m, 
                m = 0), j = 0 === m ? l : m, "deltaY" in g && (m = -1 * g.deltaY, j = m), "deltaX" in g && (l = g.deltaX, 
                0 === m && (j = -1 * l)), 0 !== m || 0 !== l) {
                    if (1 === g.deltaMode) {
                        var q = a.data(this, "mousewheel-line-height");
                        j *= q, m *= q, l *= q;
                    } else if (2 === g.deltaMode) {
                        var r = a.data(this, "mousewheel-page-height");
                        j *= r, m *= r, l *= r;
                    }
                    if (n = Math.max(Math.abs(m), Math.abs(l)), (!f || f > n) && (f = n, d(g, n) && (f /= 40)), 
                    d(g, n) && (j /= 40, l /= 40, m /= 40), j = Math[j >= 1 ? "floor" : "ceil"](j / f), 
                    l = Math[l >= 1 ? "floor" : "ceil"](l / f), m = Math[m >= 1 ? "floor" : "ceil"](m / f), 
                    k.settings.normalizeOffset && this.getBoundingClientRect) {
                        var s = this.getBoundingClientRect();
                        o = b.clientX - s.left, p = b.clientY - s.top;
                    }
                    return b.deltaX = l, b.deltaY = m, b.deltaFactor = f, b.offsetX = o, b.offsetY = p, 
                    b.deltaMode = 0, h.unshift(b, j, l, m), e && clearTimeout(e), e = setTimeout(c, 200), 
                    (a.event.dispatch || a.event.handle).apply(this, h);
                }
            }
            function c() {
                f = null;
            }
            function d(a, b) {
                return k.settings.adjustOldDeltas && "mousewheel" === a.type && b % 120 === 0;
            }
            var e, f, g = [ "wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll" ], h = "onwheel" in document || document.documentMode >= 9 ? [ "wheel" ] : [ "mousewheel", "DomMouseScroll", "MozMousePixelScroll" ], i = Array.prototype.slice;
            if (a.event.fixHooks) for (var j = g.length; j; ) a.event.fixHooks[g[--j]] = a.event.mouseHooks;
            var k = a.event.special.mousewheel = {
                version: "3.1.12",
                setup: function() {
                    if (this.addEventListener) for (var c = h.length; c; ) this.addEventListener(h[--c], b, !1); else this.onmousewheel = b;
                    a.data(this, "mousewheel-line-height", k.getLineHeight(this)), a.data(this, "mousewheel-page-height", k.getPageHeight(this));
                },
                teardown: function() {
                    if (this.removeEventListener) for (var c = h.length; c; ) this.removeEventListener(h[--c], b, !1); else this.onmousewheel = null;
                    a.removeData(this, "mousewheel-line-height"), a.removeData(this, "mousewheel-page-height");
                },
                getLineHeight: function(b) {
                    var c = a(b), d = c["offsetParent" in a.fn ? "offsetParent" : "parent"]();
                    return d.length || (d = a("body")), parseInt(d.css("fontSize"), 10) || parseInt(c.css("fontSize"), 10) || 16;
                },
                getPageHeight: function(b) {
                    return a(b).height();
                },
                settings: {
                    adjustOldDeltas: !0,
                    normalizeOffset: !0
                }
            };
            a.fn.extend({
                mousewheel: function(a) {
                    return a ? this.bind("mousewheel", a) : this.trigger("mousewheel");
                },
                unmousewheel: function(a) {
                    return this.unbind("mousewheel", a);
                }
            });
        }), b.define("jquery.select2", [ "jquery", "jquery-mousewheel", "./select2/core", "./select2/defaults" ], function(a, b, c, d) {
            if (null == a.fn.select2) {
                var e = [ "open", "close", "destroy" ];
                a.fn.select2 = function(b) {
                    if (b = b || {}, "object" == typeof b) return this.each(function() {
                        var d = a.extend(!0, {}, b);
                        new c(a(this), d);
                    }), this;
                    if ("string" == typeof b) {
                        var d;
                        return this.each(function() {
                            var c = a(this).data("select2");
                            null == c && window.console && console.error && console.error("The select2('" + b + "') method was called on an element that is not using Select2.");
                            var e = Array.prototype.slice.call(arguments, 1);
                            d = c[b].apply(c, e);
                        }), a.inArray(b, e) > -1 ? this : d;
                    }
                    throw new Error("Invalid arguments for Select2: " + b);
                };
            }
            return null == a.fn.select2.defaults && (a.fn.select2.defaults = d), c;
        }), {
            define: b.define,
            require: b.require
        };
    }(), c = b.require("jquery.select2");
    return a.fn.select2.amd = b, c;
});

/*!
 DataTables 1.10.16
 ©2008-2017 SpryMedia Ltd - datatables.net/license
*/
(function(h) {
    "function" === typeof define && define.amd ? define([ "jquery" ], function(E) {
        return h(E, window, document);
    }) : "object" === typeof exports ? module.exports = function(E, G) {
        E || (E = window);
        G || (G = "undefined" !== typeof window ? require("jquery") : require("jquery")(E));
        return h(G, E, E.document);
    } : h(jQuery, window, document);
})(function(h, E, G, k) {
    function X(a) {
        var b, c, d = {};
        h.each(a, function(e) {
            if ((b = e.match(/^([^A-Z]+?)([A-Z])/)) && -1 !== "a aa ai ao as b fn i m o s ".indexOf(b[1] + " ")) c = e.replace(b[0], b[2].toLowerCase()), 
            d[c] = e, "o" === b[1] && X(a[e]);
        });
        a._hungarianMap = d;
    }
    function I(a, b, c) {
        a._hungarianMap || X(a);
        var d;
        h.each(b, function(e) {
            d = a._hungarianMap[e];
            if (d !== k && (c || b[d] === k)) "o" === d.charAt(0) ? (b[d] || (b[d] = {}), h.extend(!0, b[d], b[e]), 
            I(a[d], b[d], c)) : b[d] = b[e];
        });
    }
    function Ca(a) {
        var b = m.defaults.oLanguage, c = a.sZeroRecords;
        !a.sEmptyTable && (c && "No data available in table" === b.sEmptyTable) && F(a, a, "sZeroRecords", "sEmptyTable");
        !a.sLoadingRecords && (c && "Loading..." === b.sLoadingRecords) && F(a, a, "sZeroRecords", "sLoadingRecords");
        a.sInfoThousands && (a.sThousands = a.sInfoThousands);
        (a = a.sDecimal) && cb(a);
    }
    function db(a) {
        A(a, "ordering", "bSort");
        A(a, "orderMulti", "bSortMulti");
        A(a, "orderClasses", "bSortClasses");
        A(a, "orderCellsTop", "bSortCellsTop");
        A(a, "order", "aaSorting");
        A(a, "orderFixed", "aaSortingFixed");
        A(a, "paging", "bPaginate");
        A(a, "pagingType", "sPaginationType");
        A(a, "pageLength", "iDisplayLength");
        A(a, "searching", "bFilter");
        "boolean" === typeof a.sScrollX && (a.sScrollX = a.sScrollX ? "100%" : "");
        "boolean" === typeof a.scrollX && (a.scrollX = a.scrollX ? "100%" : "");
        if (a = a.aoSearchCols) for (var b = 0, c = a.length; b < c; b++) a[b] && I(m.models.oSearch, a[b]);
    }
    function eb(a) {
        A(a, "orderable", "bSortable");
        A(a, "orderData", "aDataSort");
        A(a, "orderSequence", "asSorting");
        A(a, "orderDataType", "sortDataType");
        var b = a.aDataSort;
        "number" === typeof b && !h.isArray(b) && (a.aDataSort = [ b ]);
    }
    function fb(a) {
        if (!m.__browser) {
            var b = {};
            m.__browser = b;
            var c = h("<div/>").css({
                position: "fixed",
                top: 0,
                left: -1 * h(E).scrollLeft(),
                height: 1,
                width: 1,
                overflow: "hidden"
            }).append(h("<div/>").css({
                position: "absolute",
                top: 1,
                left: 1,
                width: 100,
                overflow: "scroll"
            }).append(h("<div/>").css({
                width: "100%",
                height: 10
            }))).appendTo("body"), d = c.children(), e = d.children();
            b.barWidth = d[0].offsetWidth - d[0].clientWidth;
            b.bScrollOversize = 100 === e[0].offsetWidth && 100 !== d[0].clientWidth;
            b.bScrollbarLeft = 1 !== Math.round(e.offset().left);
            b.bBounding = c[0].getBoundingClientRect().width ? !0 : !1;
            c.remove();
        }
        h.extend(a.oBrowser, m.__browser);
        a.oScroll.iBarWidth = m.__browser.barWidth;
    }
    function gb(a, b, c, d, e, f) {
        var g, j = !1;
        c !== k && (g = c, j = !0);
        for (;d !== e; ) a.hasOwnProperty(d) && (g = j ? b(g, a[d], d, a) : a[d], j = !0, 
        d += f);
        return g;
    }
    function Da(a, b) {
        var c = m.defaults.column, d = a.aoColumns.length, c = h.extend({}, m.models.oColumn, c, {
            nTh: b ? b : G.createElement("th"),
            sTitle: c.sTitle ? c.sTitle : b ? b.innerHTML : "",
            aDataSort: c.aDataSort ? c.aDataSort : [ d ],
            mData: c.mData ? c.mData : d,
            idx: d
        });
        a.aoColumns.push(c);
        c = a.aoPreSearchCols;
        c[d] = h.extend({}, m.models.oSearch, c[d]);
        ja(a, d, h(b).data());
    }
    function ja(a, b, c) {
        var b = a.aoColumns[b], d = a.oClasses, e = h(b.nTh);
        if (!b.sWidthOrig) {
            b.sWidthOrig = e.attr("width") || null;
            var f = (e.attr("style") || "").match(/width:\s*(\d+[pxem%]+)/);
            f && (b.sWidthOrig = f[1]);
        }
        c !== k && null !== c && (eb(c), I(m.defaults.column, c), c.mDataProp !== k && !c.mData && (c.mData = c.mDataProp), 
        c.sType && (b._sManualType = c.sType), c.className && !c.sClass && (c.sClass = c.className), 
        c.sClass && e.addClass(c.sClass), h.extend(b, c), F(b, c, "sWidth", "sWidthOrig"), 
        c.iDataSort !== k && (b.aDataSort = [ c.iDataSort ]), F(b, c, "aDataSort"));
        var g = b.mData, j = Q(g), i = b.mRender ? Q(b.mRender) : null, c = function(a) {
            return "string" === typeof a && -1 !== a.indexOf("@");
        };
        b._bAttrSrc = h.isPlainObject(g) && (c(g.sort) || c(g.type) || c(g.filter));
        b._setter = null;
        b.fnGetData = function(a, b, c) {
            var d = j(a, b, k, c);
            return i && b ? i(d, b, a, c) : d;
        };
        b.fnSetData = function(a, b, c) {
            return R(g)(a, b, c);
        };
        "number" !== typeof g && (a._rowReadObject = !0);
        a.oFeatures.bSort || (b.bSortable = !1, e.addClass(d.sSortableNone));
        a = -1 !== h.inArray("asc", b.asSorting);
        c = -1 !== h.inArray("desc", b.asSorting);
        !b.bSortable || !a && !c ? (b.sSortingClass = d.sSortableNone, b.sSortingClassJUI = "") : a && !c ? (b.sSortingClass = d.sSortableAsc, 
        b.sSortingClassJUI = d.sSortJUIAscAllowed) : !a && c ? (b.sSortingClass = d.sSortableDesc, 
        b.sSortingClassJUI = d.sSortJUIDescAllowed) : (b.sSortingClass = d.sSortable, b.sSortingClassJUI = d.sSortJUI);
    }
    function Y(a) {
        if (!1 !== a.oFeatures.bAutoWidth) {
            var b = a.aoColumns;
            Ea(a);
            for (var c = 0, d = b.length; c < d; c++) b[c].nTh.style.width = b[c].sWidth;
        }
        b = a.oScroll;
        ("" !== b.sY || "" !== b.sX) && ka(a);
        r(a, null, "column-sizing", [ a ]);
    }
    function Z(a, b) {
        var c = la(a, "bVisible");
        return "number" === typeof c[b] ? c[b] : null;
    }
    function $(a, b) {
        var c = la(a, "bVisible"), c = h.inArray(b, c);
        return -1 !== c ? c : null;
    }
    function aa(a) {
        var b = 0;
        h.each(a.aoColumns, function(a, d) {
            d.bVisible && "none" !== h(d.nTh).css("display") && b++;
        });
        return b;
    }
    function la(a, b) {
        var c = [];
        h.map(a.aoColumns, function(a, e) {
            a[b] && c.push(e);
        });
        return c;
    }
    function Fa(a) {
        var b = a.aoColumns, c = a.aoData, d = m.ext.type.detect, e, f, g, j, i, h, l, q, t;
        e = 0;
        for (f = b.length; e < f; e++) if (l = b[e], t = [], !l.sType && l._sManualType) l.sType = l._sManualType; else if (!l.sType) {
            g = 0;
            for (j = d.length; g < j; g++) {
                i = 0;
                for (h = c.length; i < h; i++) {
                    t[i] === k && (t[i] = B(a, i, e, "type"));
                    q = d[g](t[i], a);
                    if (!q && g !== d.length - 1) break;
                    if ("html" === q) break;
                }
                if (q) {
                    l.sType = q;
                    break;
                }
            }
            l.sType || (l.sType = "string");
        }
    }
    function hb(a, b, c, d) {
        var e, f, g, j, i, n, l = a.aoColumns;
        if (b) for (e = b.length - 1; 0 <= e; e--) {
            n = b[e];
            var q = n.targets !== k ? n.targets : n.aTargets;
            h.isArray(q) || (q = [ q ]);
            f = 0;
            for (g = q.length; f < g; f++) if ("number" === typeof q[f] && 0 <= q[f]) {
                for (;l.length <= q[f]; ) Da(a);
                d(q[f], n);
            } else if ("number" === typeof q[f] && 0 > q[f]) d(l.length + q[f], n); else if ("string" === typeof q[f]) {
                j = 0;
                for (i = l.length; j < i; j++) ("_all" == q[f] || h(l[j].nTh).hasClass(q[f])) && d(j, n);
            }
        }
        if (c) {
            e = 0;
            for (a = c.length; e < a; e++) d(e, c[e]);
        }
    }
    function M(a, b, c, d) {
        var e = a.aoData.length, f = h.extend(!0, {}, m.models.oRow, {
            src: c ? "dom" : "data",
            idx: e
        });
        f._aData = b;
        a.aoData.push(f);
        for (var g = a.aoColumns, j = 0, i = g.length; j < i; j++) g[j].sType = null;
        a.aiDisplayMaster.push(e);
        b = a.rowIdFn(b);
        b !== k && (a.aIds[b] = f);
        (c || !a.oFeatures.bDeferRender) && Ga(a, e, c, d);
        return e;
    }
    function ma(a, b) {
        var c;
        b instanceof h || (b = h(b));
        return b.map(function(b, e) {
            c = Ha(a, e);
            return M(a, c.data, e, c.cells);
        });
    }
    function B(a, b, c, d) {
        var e = a.iDraw, f = a.aoColumns[c], g = a.aoData[b]._aData, j = f.sDefaultContent, i = f.fnGetData(g, d, {
            settings: a,
            row: b,
            col: c
        });
        if (i === k) return a.iDrawError != e && null === j && (J(a, 0, "Requested unknown parameter " + ("function" == typeof f.mData ? "{function}" : "'" + f.mData + "'") + " for row " + b + ", column " + c, 4), 
        a.iDrawError = e), j;
        if ((i === g || null === i) && null !== j && d !== k) i = j; else if ("function" === typeof i) return i.call(g);
        return null === i && "display" == d ? "" : i;
    }
    function ib(a, b, c, d) {
        a.aoColumns[c].fnSetData(a.aoData[b]._aData, d, {
            settings: a,
            row: b,
            col: c
        });
    }
    function Ia(a) {
        return h.map(a.match(/(\\.|[^\.])+/g) || [ "" ], function(a) {
            return a.replace(/\\\./g, ".");
        });
    }
    function Q(a) {
        if (h.isPlainObject(a)) {
            var b = {};
            h.each(a, function(a, c) {
                c && (b[a] = Q(c));
            });
            return function(a, c, f, g) {
                var j = b[c] || b._;
                return j !== k ? j(a, c, f, g) : a;
            };
        }
        if (null === a) return function(a) {
            return a;
        };
        if ("function" === typeof a) return function(b, c, f, g) {
            return a(b, c, f, g);
        };
        if ("string" === typeof a && (-1 !== a.indexOf(".") || -1 !== a.indexOf("[") || -1 !== a.indexOf("("))) {
            var c = function(a, b, f) {
                var g, j;
                if ("" !== f) {
                    j = Ia(f);
                    for (var i = 0, n = j.length; i < n; i++) {
                        f = j[i].match(ba);
                        g = j[i].match(U);
                        if (f) {
                            j[i] = j[i].replace(ba, "");
                            "" !== j[i] && (a = a[j[i]]);
                            g = [];
                            j.splice(0, i + 1);
                            j = j.join(".");
                            if (h.isArray(a)) {
                                i = 0;
                                for (n = a.length; i < n; i++) g.push(c(a[i], b, j));
                            }
                            a = f[0].substring(1, f[0].length - 1);
                            a = "" === a ? g : g.join(a);
                            break;
                        } else if (g) {
                            j[i] = j[i].replace(U, "");
                            a = a[j[i]]();
                            continue;
                        }
                        if (null === a || a[j[i]] === k) return k;
                        a = a[j[i]];
                    }
                }
                return a;
            };
            return function(b, e) {
                return c(b, e, a);
            };
        }
        return function(b) {
            return b[a];
        };
    }
    function R(a) {
        if (h.isPlainObject(a)) return R(a._);
        if (null === a) return function() {};
        if ("function" === typeof a) return function(b, d, e) {
            a(b, "set", d, e);
        };
        if ("string" === typeof a && (-1 !== a.indexOf(".") || -1 !== a.indexOf("[") || -1 !== a.indexOf("("))) {
            var b = function(a, d, e) {
                var e = Ia(e), f;
                f = e[e.length - 1];
                for (var g, j, i = 0, n = e.length - 1; i < n; i++) {
                    g = e[i].match(ba);
                    j = e[i].match(U);
                    if (g) {
                        e[i] = e[i].replace(ba, "");
                        a[e[i]] = [];
                        f = e.slice();
                        f.splice(0, i + 1);
                        g = f.join(".");
                        if (h.isArray(d)) {
                            j = 0;
                            for (n = d.length; j < n; j++) f = {}, b(f, d[j], g), a[e[i]].push(f);
                        } else a[e[i]] = d;
                        return;
                    }
                    j && (e[i] = e[i].replace(U, ""), a = a[e[i]](d));
                    if (null === a[e[i]] || a[e[i]] === k) a[e[i]] = {};
                    a = a[e[i]];
                }
                if (f.match(U)) a[f.replace(U, "")](d); else a[f.replace(ba, "")] = d;
            };
            return function(c, d) {
                return b(c, d, a);
            };
        }
        return function(b, d) {
            b[a] = d;
        };
    }
    function Ja(a) {
        return D(a.aoData, "_aData");
    }
    function na(a) {
        a.aoData.length = 0;
        a.aiDisplayMaster.length = 0;
        a.aiDisplay.length = 0;
        a.aIds = {};
    }
    function oa(a, b, c) {
        for (var d = -1, e = 0, f = a.length; e < f; e++) a[e] == b ? d = e : a[e] > b && a[e]--;
        -1 != d && c === k && a.splice(d, 1);
    }
    function ca(a, b, c, d) {
        var e = a.aoData[b], f, g = function(c, d) {
            for (;c.childNodes.length; ) c.removeChild(c.firstChild);
            c.innerHTML = B(a, b, d, "display");
        };
        if ("dom" === c || (!c || "auto" === c) && "dom" === e.src) e._aData = Ha(a, e, d, d === k ? k : e._aData).data; else {
            var j = e.anCells;
            if (j) if (d !== k) g(j[d], d); else {
                c = 0;
                for (f = j.length; c < f; c++) g(j[c], c);
            }
        }
        e._aSortData = null;
        e._aFilterData = null;
        g = a.aoColumns;
        if (d !== k) g[d].sType = null; else {
            c = 0;
            for (f = g.length; c < f; c++) g[c].sType = null;
            Ka(a, e);
        }
    }
    function Ha(a, b, c, d) {
        var e = [], f = b.firstChild, g, j, i = 0, n, l = a.aoColumns, q = a._rowReadObject, d = d !== k ? d : q ? {} : [], t = function(a, b) {
            if ("string" === typeof a) {
                var c = a.indexOf("@");
                -1 !== c && (c = a.substring(c + 1), R(a)(d, b.getAttribute(c)));
            }
        }, m = function(a) {
            if (c === k || c === i) j = l[i], n = h.trim(a.innerHTML), j && j._bAttrSrc ? (R(j.mData._)(d, n), 
            t(j.mData.sort, a), t(j.mData.type, a), t(j.mData.filter, a)) : q ? (j._setter || (j._setter = R(j.mData)), 
            j._setter(d, n)) : d[i] = n;
            i++;
        };
        if (f) for (;f; ) {
            g = f.nodeName.toUpperCase();
            if ("TD" == g || "TH" == g) m(f), e.push(f);
            f = f.nextSibling;
        } else {
            e = b.anCells;
            f = 0;
            for (g = e.length; f < g; f++) m(e[f]);
        }
        if (b = b.firstChild ? b : b.nTr) (b = b.getAttribute("id")) && R(a.rowId)(d, b);
        return {
            data: d,
            cells: e
        };
    }
    function Ga(a, b, c, d) {
        var e = a.aoData[b], f = e._aData, g = [], j, i, n, l, q;
        if (null === e.nTr) {
            j = c || G.createElement("tr");
            e.nTr = j;
            e.anCells = g;
            j._DT_RowIndex = b;
            Ka(a, e);
            l = 0;
            for (q = a.aoColumns.length; l < q; l++) {
                n = a.aoColumns[l];
                i = c ? d[l] : G.createElement(n.sCellType);
                i._DT_CellIndex = {
                    row: b,
                    column: l
                };
                g.push(i);
                if ((!c || n.mRender || n.mData !== l) && (!h.isPlainObject(n.mData) || n.mData._ !== l + ".display")) i.innerHTML = B(a, b, l, "display");
                n.sClass && (i.className += " " + n.sClass);
                n.bVisible && !c ? j.appendChild(i) : !n.bVisible && c && i.parentNode.removeChild(i);
                n.fnCreatedCell && n.fnCreatedCell.call(a.oInstance, i, B(a, b, l), f, b, l);
            }
            r(a, "aoRowCreatedCallback", null, [ j, f, b ]);
        }
        e.nTr.setAttribute("role", "row");
    }
    function Ka(a, b) {
        var c = b.nTr, d = b._aData;
        if (c) {
            var e = a.rowIdFn(d);
            e && (c.id = e);
            d.DT_RowClass && (e = d.DT_RowClass.split(" "), b.__rowc = b.__rowc ? qa(b.__rowc.concat(e)) : e, 
            h(c).removeClass(b.__rowc.join(" ")).addClass(d.DT_RowClass));
            d.DT_RowAttr && h(c).attr(d.DT_RowAttr);
            d.DT_RowData && h(c).data(d.DT_RowData);
        }
    }
    function jb(a) {
        var b, c, d, e, f, g = a.nTHead, j = a.nTFoot, i = 0 === h("th, td", g).length, n = a.oClasses, l = a.aoColumns;
        i && (e = h("<tr/>").appendTo(g));
        b = 0;
        for (c = l.length; b < c; b++) f = l[b], d = h(f.nTh).addClass(f.sClass), i && d.appendTo(e), 
        a.oFeatures.bSort && (d.addClass(f.sSortingClass), !1 !== f.bSortable && (d.attr("tabindex", a.iTabIndex).attr("aria-controls", a.sTableId), 
        La(a, f.nTh, b))), f.sTitle != d[0].innerHTML && d.html(f.sTitle), Ma(a, "header")(a, d, f, n);
        i && da(a.aoHeader, g);
        h(g).find(">tr").attr("role", "row");
        h(g).find(">tr>th, >tr>td").addClass(n.sHeaderTH);
        h(j).find(">tr>th, >tr>td").addClass(n.sFooterTH);
        if (null !== j) {
            a = a.aoFooter[0];
            b = 0;
            for (c = a.length; b < c; b++) f = l[b], f.nTf = a[b].cell, f.sClass && h(f.nTf).addClass(f.sClass);
        }
    }
    function ea(a, b, c) {
        var d, e, f, g = [], j = [], i = a.aoColumns.length, n;
        if (b) {
            c === k && (c = !1);
            d = 0;
            for (e = b.length; d < e; d++) {
                g[d] = b[d].slice();
                g[d].nTr = b[d].nTr;
                for (f = i - 1; 0 <= f; f--) !a.aoColumns[f].bVisible && !c && g[d].splice(f, 1);
                j.push([]);
            }
            d = 0;
            for (e = g.length; d < e; d++) {
                if (a = g[d].nTr) for (;f = a.firstChild; ) a.removeChild(f);
                f = 0;
                for (b = g[d].length; f < b; f++) if (n = i = 1, j[d][f] === k) {
                    a.appendChild(g[d][f].cell);
                    for (j[d][f] = 1; g[d + i] !== k && g[d][f].cell == g[d + i][f].cell; ) j[d + i][f] = 1, 
                    i++;
                    for (;g[d][f + n] !== k && g[d][f].cell == g[d][f + n].cell; ) {
                        for (c = 0; c < i; c++) j[d + c][f + n] = 1;
                        n++;
                    }
                    h(g[d][f].cell).attr("rowspan", i).attr("colspan", n);
                }
            }
        }
    }
    function N(a) {
        var b = r(a, "aoPreDrawCallback", "preDraw", [ a ]);
        if (-1 !== h.inArray(!1, b)) C(a, !1); else {
            var b = [], c = 0, d = a.asStripeClasses, e = d.length, f = a.oLanguage, g = a.iInitDisplayStart, j = "ssp" == y(a), i = a.aiDisplay;
            a.bDrawing = !0;
            g !== k && -1 !== g && (a._iDisplayStart = j ? g : g >= a.fnRecordsDisplay() ? 0 : g, 
            a.iInitDisplayStart = -1);
            var g = a._iDisplayStart, n = a.fnDisplayEnd();
            if (a.bDeferLoading) a.bDeferLoading = !1, a.iDraw++, C(a, !1); else if (j) {
                if (!a.bDestroying && !kb(a)) return;
            } else a.iDraw++;
            if (0 !== i.length) {
                f = j ? a.aoData.length : n;
                for (j = j ? 0 : g; j < f; j++) {
                    var l = i[j], q = a.aoData[l];
                    null === q.nTr && Ga(a, l);
                    l = q.nTr;
                    if (0 !== e) {
                        var t = d[c % e];
                        q._sRowStripe != t && (h(l).removeClass(q._sRowStripe).addClass(t), q._sRowStripe = t);
                    }
                    r(a, "aoRowCallback", null, [ l, q._aData, c, j ]);
                    b.push(l);
                    c++;
                }
            } else c = f.sZeroRecords, 1 == a.iDraw && "ajax" == y(a) ? c = f.sLoadingRecords : f.sEmptyTable && 0 === a.fnRecordsTotal() && (c = f.sEmptyTable), 
            b[0] = h("<tr/>", {
                class: e ? d[0] : ""
            }).append(h("<td />", {
                valign: "top",
                colSpan: aa(a),
                class: a.oClasses.sRowEmpty
            }).html(c))[0];
            r(a, "aoHeaderCallback", "header", [ h(a.nTHead).children("tr")[0], Ja(a), g, n, i ]);
            r(a, "aoFooterCallback", "footer", [ h(a.nTFoot).children("tr")[0], Ja(a), g, n, i ]);
            d = h(a.nTBody);
            d.children().detach();
            d.append(h(b));
            r(a, "aoDrawCallback", "draw", [ a ]);
            a.bSorted = !1;
            a.bFiltered = !1;
            a.bDrawing = !1;
        }
    }
    function S(a, b) {
        var c = a.oFeatures, d = c.bFilter;
        c.bSort && lb(a);
        d ? fa(a, a.oPreviousSearch) : a.aiDisplay = a.aiDisplayMaster.slice();
        !0 !== b && (a._iDisplayStart = 0);
        a._drawHold = b;
        N(a);
        a._drawHold = !1;
    }
    function mb(a) {
        var b = a.oClasses, c = h(a.nTable), c = h("<div/>").insertBefore(c), d = a.oFeatures, e = h("<div/>", {
            id: a.sTableId + "_wrapper",
            class: b.sWrapper + (a.nTFoot ? "" : " " + b.sNoFooter)
        });
        a.nHolding = c[0];
        a.nTableWrapper = e[0];
        a.nTableReinsertBefore = a.nTable.nextSibling;
        for (var f = a.sDom.split(""), g, j, i, n, l, q, k = 0; k < f.length; k++) {
            g = null;
            j = f[k];
            if ("<" == j) {
                i = h("<div/>")[0];
                n = f[k + 1];
                if ("'" == n || '"' == n) {
                    l = "";
                    for (q = 2; f[k + q] != n; ) l += f[k + q], q++;
                    "H" == l ? l = b.sJUIHeader : "F" == l && (l = b.sJUIFooter);
                    -1 != l.indexOf(".") ? (n = l.split("."), i.id = n[0].substr(1, n[0].length - 1), 
                    i.className = n[1]) : "#" == l.charAt(0) ? i.id = l.substr(1, l.length - 1) : i.className = l;
                    k += q;
                }
                e.append(i);
                e = h(i);
            } else if (">" == j) e = e.parent(); else if ("l" == j && d.bPaginate && d.bLengthChange) g = nb(a); else if ("f" == j && d.bFilter) g = ob(a); else if ("r" == j && d.bProcessing) g = pb(a); else if ("t" == j) g = qb(a); else if ("i" == j && d.bInfo) g = rb(a); else if ("p" == j && d.bPaginate) g = sb(a); else if (0 !== m.ext.feature.length) {
                i = m.ext.feature;
                q = 0;
                for (n = i.length; q < n; q++) if (j == i[q].cFeature) {
                    g = i[q].fnInit(a);
                    break;
                }
            }
            g && (i = a.aanFeatures, i[j] || (i[j] = []), i[j].push(g), e.append(g));
        }
        c.replaceWith(e);
        a.nHolding = null;
    }
    function da(a, b) {
        var c = h(b).children("tr"), d, e, f, g, j, i, n, l, q, k;
        a.splice(0, a.length);
        f = 0;
        for (i = c.length; f < i; f++) a.push([]);
        f = 0;
        for (i = c.length; f < i; f++) {
            d = c[f];
            for (e = d.firstChild; e; ) {
                if ("TD" == e.nodeName.toUpperCase() || "TH" == e.nodeName.toUpperCase()) {
                    l = 1 * e.getAttribute("colspan");
                    q = 1 * e.getAttribute("rowspan");
                    l = !l || 0 === l || 1 === l ? 1 : l;
                    q = !q || 0 === q || 1 === q ? 1 : q;
                    g = 0;
                    for (j = a[f]; j[g]; ) g++;
                    n = g;
                    k = 1 === l ? !0 : !1;
                    for (j = 0; j < l; j++) for (g = 0; g < q; g++) a[f + g][n + j] = {
                        cell: e,
                        unique: k
                    }, a[f + g].nTr = d;
                }
                e = e.nextSibling;
            }
        }
    }
    function ra(a, b, c) {
        var d = [];
        c || (c = a.aoHeader, b && (c = [], da(c, b)));
        for (var b = 0, e = c.length; b < e; b++) for (var f = 0, g = c[b].length; f < g; f++) if (c[b][f].unique && (!d[f] || !a.bSortCellsTop)) d[f] = c[b][f].cell;
        return d;
    }
    function sa(a, b, c) {
        r(a, "aoServerParams", "serverParams", [ b ]);
        if (b && h.isArray(b)) {
            var d = {}, e = /(.*?)\[\]$/;
            h.each(b, function(a, b) {
                var c = b.name.match(e);
                c ? (c = c[0], d[c] || (d[c] = []), d[c].push(b.value)) : d[b.name] = b.value;
            });
            b = d;
        }
        var f, g = a.ajax, j = a.oInstance, i = function(b) {
            r(a, null, "xhr", [ a, b, a.jqXHR ]);
            c(b);
        };
        if (h.isPlainObject(g) && g.data) {
            f = g.data;
            var n = h.isFunction(f) ? f(b, a) : f, b = h.isFunction(f) && n ? n : h.extend(!0, b, n);
            delete g.data;
        }
        n = {
            data: b,
            success: function(b) {
                var c = b.error || b.sError;
                c && J(a, 0, c);
                a.json = b;
                i(b);
            },
            dataType: "json",
            cache: !1,
            type: a.sServerMethod,
            error: function(b, c) {
                var d = r(a, null, "xhr", [ a, null, a.jqXHR ]);
                -1 === h.inArray(!0, d) && ("parsererror" == c ? J(a, 0, "Invalid JSON response", 1) : 4 === b.readyState && J(a, 0, "Ajax error", 7));
                C(a, !1);
            }
        };
        a.oAjaxData = b;
        r(a, null, "preXhr", [ a, b ]);
        a.fnServerData ? a.fnServerData.call(j, a.sAjaxSource, h.map(b, function(a, b) {
            return {
                name: b,
                value: a
            };
        }), i, a) : a.sAjaxSource || "string" === typeof g ? a.jqXHR = h.ajax(h.extend(n, {
            url: g || a.sAjaxSource
        })) : h.isFunction(g) ? a.jqXHR = g.call(j, b, i, a) : (a.jqXHR = h.ajax(h.extend(n, g)), 
        g.data = f);
    }
    function kb(a) {
        return a.bAjaxDataGet ? (a.iDraw++, C(a, !0), sa(a, tb(a), function(b) {
            ub(a, b);
        }), !1) : !0;
    }
    function tb(a) {
        var b = a.aoColumns, c = b.length, d = a.oFeatures, e = a.oPreviousSearch, f = a.aoPreSearchCols, g, j = [], i, n, l, k = V(a);
        g = a._iDisplayStart;
        i = !1 !== d.bPaginate ? a._iDisplayLength : -1;
        var t = function(a, b) {
            j.push({
                name: a,
                value: b
            });
        };
        t("sEcho", a.iDraw);
        t("iColumns", c);
        t("sColumns", D(b, "sName").join(","));
        t("iDisplayStart", g);
        t("iDisplayLength", i);
        var pa = {
            draw: a.iDraw,
            columns: [],
            order: [],
            start: g,
            length: i,
            search: {
                value: e.sSearch,
                regex: e.bRegex
            }
        };
        for (g = 0; g < c; g++) n = b[g], l = f[g], i = "function" == typeof n.mData ? "function" : n.mData, 
        pa.columns.push({
            data: i,
            name: n.sName,
            searchable: n.bSearchable,
            orderable: n.bSortable,
            search: {
                value: l.sSearch,
                regex: l.bRegex
            }
        }), t("mDataProp_" + g, i), d.bFilter && (t("sSearch_" + g, l.sSearch), t("bRegex_" + g, l.bRegex), 
        t("bSearchable_" + g, n.bSearchable)), d.bSort && t("bSortable_" + g, n.bSortable);
        d.bFilter && (t("sSearch", e.sSearch), t("bRegex", e.bRegex));
        d.bSort && (h.each(k, function(a, b) {
            pa.order.push({
                column: b.col,
                dir: b.dir
            });
            t("iSortCol_" + a, b.col);
            t("sSortDir_" + a, b.dir);
        }), t("iSortingCols", k.length));
        b = m.ext.legacy.ajax;
        return null === b ? a.sAjaxSource ? j : pa : b ? j : pa;
    }
    function ub(a, b) {
        var c = ta(a, b), d = b.sEcho !== k ? b.sEcho : b.draw, e = b.iTotalRecords !== k ? b.iTotalRecords : b.recordsTotal, f = b.iTotalDisplayRecords !== k ? b.iTotalDisplayRecords : b.recordsFiltered;
        if (d) {
            if (1 * d < a.iDraw) return;
            a.iDraw = 1 * d;
        }
        na(a);
        a._iRecordsTotal = parseInt(e, 10);
        a._iRecordsDisplay = parseInt(f, 10);
        d = 0;
        for (e = c.length; d < e; d++) M(a, c[d]);
        a.aiDisplay = a.aiDisplayMaster.slice();
        a.bAjaxDataGet = !1;
        N(a);
        a._bInitComplete || ua(a, b);
        a.bAjaxDataGet = !0;
        C(a, !1);
    }
    function ta(a, b) {
        var c = h.isPlainObject(a.ajax) && a.ajax.dataSrc !== k ? a.ajax.dataSrc : a.sAjaxDataProp;
        return "data" === c ? b.aaData || b[c] : "" !== c ? Q(c)(b) : b;
    }
    function ob(a) {
        var b = a.oClasses, c = a.sTableId, d = a.oLanguage, e = a.oPreviousSearch, f = a.aanFeatures, g = '<input type="search" class="' + b.sFilterInput + '"/>', j = d.sSearch, j = j.match(/_INPUT_/) ? j.replace("_INPUT_", g) : j + g, b = h("<div/>", {
            id: !f.f ? c + "_filter" : null,
            class: b.sFilter
        }).append(h("<label/>").append(j)), f = function() {
            var b = !this.value ? "" : this.value;
            b != e.sSearch && (fa(a, {
                sSearch: b,
                bRegex: e.bRegex,
                bSmart: e.bSmart,
                bCaseInsensitive: e.bCaseInsensitive
            }), a._iDisplayStart = 0, N(a));
        }, g = null !== a.searchDelay ? a.searchDelay : "ssp" === y(a) ? 400 : 0, i = h("input", b).val(e.sSearch).attr("placeholder", d.sSearchPlaceholder).on("keyup.DT search.DT input.DT paste.DT cut.DT", g ? Na(f, g) : f).on("keypress.DT", function(a) {
            if (13 == a.keyCode) return !1;
        }).attr("aria-controls", c);
        h(a.nTable).on("search.dt.DT", function(b, c) {
            if (a === c) try {
                i[0] !== G.activeElement && i.val(e.sSearch);
            } catch (d) {}
        });
        return b[0];
    }
    function fa(a, b, c) {
        var d = a.oPreviousSearch, e = a.aoPreSearchCols, f = function(a) {
            d.sSearch = a.sSearch;
            d.bRegex = a.bRegex;
            d.bSmart = a.bSmart;
            d.bCaseInsensitive = a.bCaseInsensitive;
        };
        Fa(a);
        if ("ssp" != y(a)) {
            vb(a, b.sSearch, c, b.bEscapeRegex !== k ? !b.bEscapeRegex : b.bRegex, b.bSmart, b.bCaseInsensitive);
            f(b);
            for (b = 0; b < e.length; b++) wb(a, e[b].sSearch, b, e[b].bEscapeRegex !== k ? !e[b].bEscapeRegex : e[b].bRegex, e[b].bSmart, e[b].bCaseInsensitive);
            xb(a);
        } else f(b);
        a.bFiltered = !0;
        r(a, null, "search", [ a ]);
    }
    function xb(a) {
        for (var b = m.ext.search, c = a.aiDisplay, d, e, f = 0, g = b.length; f < g; f++) {
            for (var j = [], i = 0, n = c.length; i < n; i++) e = c[i], d = a.aoData[e], b[f](a, d._aFilterData, e, d._aData, i) && j.push(e);
            c.length = 0;
            h.merge(c, j);
        }
    }
    function wb(a, b, c, d, e, f) {
        if ("" !== b) {
            for (var g = [], j = a.aiDisplay, d = Oa(b, d, e, f), e = 0; e < j.length; e++) b = a.aoData[j[e]]._aFilterData[c], 
            d.test(b) && g.push(j[e]);
            a.aiDisplay = g;
        }
    }
    function vb(a, b, c, d, e, f) {
        var d = Oa(b, d, e, f), f = a.oPreviousSearch.sSearch, g = a.aiDisplayMaster, j, e = [];
        0 !== m.ext.search.length && (c = !0);
        j = yb(a);
        if (0 >= b.length) a.aiDisplay = g.slice(); else {
            if (j || c || f.length > b.length || 0 !== b.indexOf(f) || a.bSorted) a.aiDisplay = g.slice();
            b = a.aiDisplay;
            for (c = 0; c < b.length; c++) d.test(a.aoData[b[c]]._sFilterRow) && e.push(b[c]);
            a.aiDisplay = e;
        }
    }
    function Oa(a, b, c, d) {
        a = b ? a : Pa(a);
        c && (a = "^(?=.*?" + h.map(a.match(/"[^"]+"|[^ ]+/g) || [ "" ], function(a) {
            if ('"' === a.charAt(0)) var b = a.match(/^"(.*)"$/), a = b ? b[1] : a;
            return a.replace('"', "");
        }).join(")(?=.*?") + ").*$");
        return RegExp(a, d ? "i" : "");
    }
    function yb(a) {
        var b = a.aoColumns, c, d, e, f, g, j, i, h, l = m.ext.type.search;
        c = !1;
        d = 0;
        for (f = a.aoData.length; d < f; d++) if (h = a.aoData[d], !h._aFilterData) {
            j = [];
            e = 0;
            for (g = b.length; e < g; e++) c = b[e], c.bSearchable ? (i = B(a, d, e, "filter"), 
            l[c.sType] && (i = l[c.sType](i)), null === i && (i = ""), "string" !== typeof i && i.toString && (i = i.toString())) : i = "", 
            i.indexOf && -1 !== i.indexOf("&") && (va.innerHTML = i, i = Wb ? va.textContent : va.innerText), 
            i.replace && (i = i.replace(/[\r\n]/g, "")), j.push(i);
            h._aFilterData = j;
            h._sFilterRow = j.join("  ");
            c = !0;
        }
        return c;
    }
    function zb(a) {
        return {
            search: a.sSearch,
            smart: a.bSmart,
            regex: a.bRegex,
            caseInsensitive: a.bCaseInsensitive
        };
    }
    function Ab(a) {
        return {
            sSearch: a.search,
            bSmart: a.smart,
            bRegex: a.regex,
            bCaseInsensitive: a.caseInsensitive
        };
    }
    function rb(a) {
        var b = a.sTableId, c = a.aanFeatures.i, d = h("<div/>", {
            class: a.oClasses.sInfo,
            id: !c ? b + "_info" : null
        });
        c || (a.aoDrawCallback.push({
            fn: Bb,
            sName: "information"
        }), d.attr("role", "status").attr("aria-live", "polite"), h(a.nTable).attr("aria-describedby", b + "_info"));
        return d[0];
    }
    function Bb(a) {
        var b = a.aanFeatures.i;
        if (0 !== b.length) {
            var c = a.oLanguage, d = a._iDisplayStart + 1, e = a.fnDisplayEnd(), f = a.fnRecordsTotal(), g = a.fnRecordsDisplay(), j = g ? c.sInfo : c.sInfoEmpty;
            g !== f && (j += " " + c.sInfoFiltered);
            j += c.sInfoPostFix;
            j = Cb(a, j);
            c = c.fnInfoCallback;
            null !== c && (j = c.call(a.oInstance, a, d, e, f, g, j));
            h(b).html(j);
        }
    }
    function Cb(a, b) {
        var c = a.fnFormatNumber, d = a._iDisplayStart + 1, e = a._iDisplayLength, f = a.fnRecordsDisplay(), g = -1 === e;
        return b.replace(/_START_/g, c.call(a, d)).replace(/_END_/g, c.call(a, a.fnDisplayEnd())).replace(/_MAX_/g, c.call(a, a.fnRecordsTotal())).replace(/_TOTAL_/g, c.call(a, f)).replace(/_PAGE_/g, c.call(a, g ? 1 : Math.ceil(d / e))).replace(/_PAGES_/g, c.call(a, g ? 1 : Math.ceil(f / e)));
    }
    function ga(a) {
        var b, c, d = a.iInitDisplayStart, e = a.aoColumns, f;
        c = a.oFeatures;
        var g = a.bDeferLoading;
        if (a.bInitialised) {
            mb(a);
            jb(a);
            ea(a, a.aoHeader);
            ea(a, a.aoFooter);
            C(a, !0);
            c.bAutoWidth && Ea(a);
            b = 0;
            for (c = e.length; b < c; b++) f = e[b], f.sWidth && (f.nTh.style.width = v(f.sWidth));
            r(a, null, "preInit", [ a ]);
            S(a);
            e = y(a);
            if ("ssp" != e || g) "ajax" == e ? sa(a, [], function(c) {
                var f = ta(a, c);
                for (b = 0; b < f.length; b++) M(a, f[b]);
                a.iInitDisplayStart = d;
                S(a);
                C(a, !1);
                ua(a, c);
            }, a) : (C(a, !1), ua(a));
        } else setTimeout(function() {
            ga(a);
        }, 200);
    }
    function ua(a, b) {
        a._bInitComplete = !0;
        (b || a.oInit.aaData) && Y(a);
        r(a, null, "plugin-init", [ a, b ]);
        r(a, "aoInitComplete", "init", [ a, b ]);
    }
    function Qa(a, b) {
        var c = parseInt(b, 10);
        a._iDisplayLength = c;
        Ra(a);
        r(a, null, "length", [ a, c ]);
    }
    function nb(a) {
        for (var b = a.oClasses, c = a.sTableId, d = a.aLengthMenu, e = h.isArray(d[0]), f = e ? d[0] : d, d = e ? d[1] : d, e = h("<select/>", {
            name: c + "_length",
            "aria-controls": c,
            class: b.sLengthSelect
        }), g = 0, j = f.length; g < j; g++) e[0][g] = new Option("number" === typeof d[g] ? a.fnFormatNumber(d[g]) : d[g], f[g]);
        var i = h("<div><label/></div>").addClass(b.sLength);
        a.aanFeatures.l || (i[0].id = c + "_length");
        i.children().append(a.oLanguage.sLengthMenu.replace("_MENU_", e[0].outerHTML));
        h("select", i).val(a._iDisplayLength).on("change.DT", function() {
            Qa(a, h(this).val());
            N(a);
        });
        h(a.nTable).on("length.dt.DT", function(b, c, d) {
            a === c && h("select", i).val(d);
        });
        return i[0];
    }
    function sb(a) {
        var b = a.sPaginationType, c = m.ext.pager[b], d = "function" === typeof c, e = function(a) {
            N(a);
        }, b = h("<div/>").addClass(a.oClasses.sPaging + b)[0], f = a.aanFeatures;
        d || c.fnInit(a, b, e);
        f.p || (b.id = a.sTableId + "_paginate", a.aoDrawCallback.push({
            fn: function(a) {
                if (d) {
                    var b = a._iDisplayStart, i = a._iDisplayLength, h = a.fnRecordsDisplay(), l = -1 === i, b = l ? 0 : Math.ceil(b / i), i = l ? 1 : Math.ceil(h / i), h = c(b, i), k, l = 0;
                    for (k = f.p.length; l < k; l++) Ma(a, "pageButton")(a, f.p[l], l, h, b, i);
                } else c.fnUpdate(a, e);
            },
            sName: "pagination"
        }));
        return b;
    }
    function Sa(a, b, c) {
        var d = a._iDisplayStart, e = a._iDisplayLength, f = a.fnRecordsDisplay();
        0 === f || -1 === e ? d = 0 : "number" === typeof b ? (d = b * e, d > f && (d = 0)) : "first" == b ? d = 0 : "previous" == b ? (d = 0 <= e ? d - e : 0, 
        0 > d && (d = 0)) : "next" == b ? d + e < f && (d += e) : "last" == b ? d = Math.floor((f - 1) / e) * e : J(a, 0, "Unknown paging action: " + b, 5);
        b = a._iDisplayStart !== d;
        a._iDisplayStart = d;
        b && (r(a, null, "page", [ a ]), c && N(a));
        return b;
    }
    function pb(a) {
        return h("<div/>", {
            id: !a.aanFeatures.r ? a.sTableId + "_processing" : null,
            class: a.oClasses.sProcessing
        }).html(a.oLanguage.sProcessing).insertBefore(a.nTable)[0];
    }
    function C(a, b) {
        a.oFeatures.bProcessing && h(a.aanFeatures.r).css("display", b ? "block" : "none");
        r(a, null, "processing", [ a, b ]);
    }
    function qb(a) {
        var b = h(a.nTable);
        b.attr("role", "grid");
        var c = a.oScroll;
        if ("" === c.sX && "" === c.sY) return a.nTable;
        var d = c.sX, e = c.sY, f = a.oClasses, g = b.children("caption"), j = g.length ? g[0]._captionSide : null, i = h(b[0].cloneNode(!1)), n = h(b[0].cloneNode(!1)), l = b.children("tfoot");
        l.length || (l = null);
        i = h("<div/>", {
            class: f.sScrollWrapper
        }).append(h("<div/>", {
            class: f.sScrollHead
        }).css({
            overflow: "hidden",
            position: "relative",
            border: 0,
            width: d ? !d ? null : v(d) : "100%"
        }).append(h("<div/>", {
            class: f.sScrollHeadInner
        }).css({
            "box-sizing": "content-box",
            width: c.sXInner || "100%"
        }).append(i.removeAttr("id").css("margin-left", 0).append("top" === j ? g : null).append(b.children("thead"))))).append(h("<div/>", {
            class: f.sScrollBody
        }).css({
            position: "relative",
            overflow: "auto",
            width: !d ? null : v(d)
        }).append(b));
        l && i.append(h("<div/>", {
            class: f.sScrollFoot
        }).css({
            overflow: "hidden",
            border: 0,
            width: d ? !d ? null : v(d) : "100%"
        }).append(h("<div/>", {
            class: f.sScrollFootInner
        }).append(n.removeAttr("id").css("margin-left", 0).append("bottom" === j ? g : null).append(b.children("tfoot")))));
        var b = i.children(), k = b[0], f = b[1], t = l ? b[2] : null;
        if (d) h(f).on("scroll.DT", function() {
            var a = this.scrollLeft;
            k.scrollLeft = a;
            l && (t.scrollLeft = a);
        });
        h(f).css(e && c.bCollapse ? "max-height" : "height", e);
        a.nScrollHead = k;
        a.nScrollBody = f;
        a.nScrollFoot = t;
        a.aoDrawCallback.push({
            fn: ka,
            sName: "scrolling"
        });
        return i[0];
    }
    function ka(a) {
        var b = a.oScroll, c = b.sX, d = b.sXInner, e = b.sY, b = b.iBarWidth, f = h(a.nScrollHead), g = f[0].style, j = f.children("div"), i = j[0].style, n = j.children("table"), j = a.nScrollBody, l = h(j), q = j.style, t = h(a.nScrollFoot).children("div"), m = t.children("table"), o = h(a.nTHead), p = h(a.nTable), s = p[0], r = s.style, u = a.nTFoot ? h(a.nTFoot) : null, x = a.oBrowser, T = x.bScrollOversize, Xb = D(a.aoColumns, "nTh"), O, K, P, w, Ta = [], y = [], z = [], A = [], B, C = function(a) {
            a = a.style;
            a.paddingTop = "0";
            a.paddingBottom = "0";
            a.borderTopWidth = "0";
            a.borderBottomWidth = "0";
            a.height = 0;
        };
        K = j.scrollHeight > j.clientHeight;
        if (a.scrollBarVis !== K && a.scrollBarVis !== k) a.scrollBarVis = K, Y(a); else {
            a.scrollBarVis = K;
            p.children("thead, tfoot").remove();
            u && (P = u.clone().prependTo(p), O = u.find("tr"), P = P.find("tr"));
            w = o.clone().prependTo(p);
            o = o.find("tr");
            K = w.find("tr");
            w.find("th, td").removeAttr("tabindex");
            c || (q.width = "100%", f[0].style.width = "100%");
            h.each(ra(a, w), function(b, c) {
                B = Z(a, b);
                c.style.width = a.aoColumns[B].sWidth;
            });
            u && H(function(a) {
                a.style.width = "";
            }, P);
            f = p.outerWidth();
            if ("" === c) {
                r.width = "100%";
                if (T && (p.find("tbody").height() > j.offsetHeight || "scroll" == l.css("overflow-y"))) r.width = v(p.outerWidth() - b);
                f = p.outerWidth();
            } else "" !== d && (r.width = v(d), f = p.outerWidth());
            H(C, K);
            H(function(a) {
                z.push(a.innerHTML);
                Ta.push(v(h(a).css("width")));
            }, K);
            H(function(a, b) {
                if (h.inArray(a, Xb) !== -1) a.style.width = Ta[b];
            }, o);
            h(K).height(0);
            u && (H(C, P), H(function(a) {
                A.push(a.innerHTML);
                y.push(v(h(a).css("width")));
            }, P), H(function(a, b) {
                a.style.width = y[b];
            }, O), h(P).height(0));
            H(function(a, b) {
                a.innerHTML = '<div class="dataTables_sizing" style="height:0;overflow:hidden;">' + z[b] + "</div>";
                a.style.width = Ta[b];
            }, K);
            u && H(function(a, b) {
                a.innerHTML = '<div class="dataTables_sizing" style="height:0;overflow:hidden;">' + A[b] + "</div>";
                a.style.width = y[b];
            }, P);
            if (p.outerWidth() < f) {
                O = j.scrollHeight > j.offsetHeight || "scroll" == l.css("overflow-y") ? f + b : f;
                if (T && (j.scrollHeight > j.offsetHeight || "scroll" == l.css("overflow-y"))) r.width = v(O - b);
                ("" === c || "" !== d) && J(a, 1, "Possible column misalignment", 6);
            } else O = "100%";
            q.width = v(O);
            g.width = v(O);
            u && (a.nScrollFoot.style.width = v(O));
            !e && T && (q.height = v(s.offsetHeight + b));
            c = p.outerWidth();
            n[0].style.width = v(c);
            i.width = v(c);
            d = p.height() > j.clientHeight || "scroll" == l.css("overflow-y");
            e = "padding" + (x.bScrollbarLeft ? "Left" : "Right");
            i[e] = d ? b + "px" : "0px";
            u && (m[0].style.width = v(c), t[0].style.width = v(c), t[0].style[e] = d ? b + "px" : "0px");
            p.children("colgroup").insertBefore(p.children("thead"));
            l.scroll();
            if ((a.bSorted || a.bFiltered) && !a._drawHold) j.scrollTop = 0;
        }
    }
    function H(a, b, c) {
        for (var d = 0, e = 0, f = b.length, g, j; e < f; ) {
            g = b[e].firstChild;
            for (j = c ? c[e].firstChild : null; g; ) 1 === g.nodeType && (c ? a(g, j, d) : a(g, d), 
            d++), g = g.nextSibling, j = c ? j.nextSibling : null;
            e++;
        }
    }
    function Ea(a) {
        var b = a.nTable, c = a.aoColumns, d = a.oScroll, e = d.sY, f = d.sX, g = d.sXInner, j = c.length, i = la(a, "bVisible"), n = h("th", a.nTHead), l = b.getAttribute("width"), k = b.parentNode, t = !1, m, o, p = a.oBrowser, d = p.bScrollOversize;
        (m = b.style.width) && -1 !== m.indexOf("%") && (l = m);
        for (m = 0; m < i.length; m++) o = c[i[m]], null !== o.sWidth && (o.sWidth = Db(o.sWidthOrig, k), 
        t = !0);
        if (d || !t && !f && !e && j == aa(a) && j == n.length) for (m = 0; m < j; m++) i = Z(a, m), 
        null !== i && (c[i].sWidth = v(n.eq(m).width())); else {
            j = h(b).clone().css("visibility", "hidden").removeAttr("id");
            j.find("tbody tr").remove();
            var s = h("<tr/>").appendTo(j.find("tbody"));
            j.find("thead, tfoot").remove();
            j.append(h(a.nTHead).clone()).append(h(a.nTFoot).clone());
            j.find("tfoot th, tfoot td").css("width", "");
            n = ra(a, j.find("thead")[0]);
            for (m = 0; m < i.length; m++) o = c[i[m]], n[m].style.width = null !== o.sWidthOrig && "" !== o.sWidthOrig ? v(o.sWidthOrig) : "", 
            o.sWidthOrig && f && h(n[m]).append(h("<div/>").css({
                width: o.sWidthOrig,
                margin: 0,
                padding: 0,
                border: 0,
                height: 1
            }));
            if (a.aoData.length) for (m = 0; m < i.length; m++) t = i[m], o = c[t], h(Eb(a, t)).clone(!1).append(o.sContentPadding).appendTo(s);
            h("[name]", j).removeAttr("name");
            o = h("<div/>").css(f || e ? {
                position: "absolute",
                top: 0,
                left: 0,
                height: 1,
                right: 0,
                overflow: "hidden"
            } : {}).append(j).appendTo(k);
            f && g ? j.width(g) : f ? (j.css("width", "auto"), j.removeAttr("width"), j.width() < k.clientWidth && l && j.width(k.clientWidth)) : e ? j.width(k.clientWidth) : l && j.width(l);
            for (m = e = 0; m < i.length; m++) k = h(n[m]), g = k.outerWidth() - k.width(), 
            k = p.bBounding ? Math.ceil(n[m].getBoundingClientRect().width) : k.outerWidth(), 
            e += k, c[i[m]].sWidth = v(k - g);
            b.style.width = v(e);
            o.remove();
        }
        l && (b.style.width = v(l));
        if ((l || f) && !a._reszEvt) b = function() {
            h(E).on("resize.DT-" + a.sInstance, Na(function() {
                Y(a);
            }));
        }, d ? setTimeout(b, 1e3) : b(), a._reszEvt = !0;
    }
    function Db(a, b) {
        if (!a) return 0;
        var c = h("<div/>").css("width", v(a)).appendTo(b || G.body), d = c[0].offsetWidth;
        c.remove();
        return d;
    }
    function Eb(a, b) {
        var c = Fb(a, b);
        if (0 > c) return null;
        var d = a.aoData[c];
        return !d.nTr ? h("<td/>").html(B(a, c, b, "display"))[0] : d.anCells[b];
    }
    function Fb(a, b) {
        for (var c, d = -1, e = -1, f = 0, g = a.aoData.length; f < g; f++) c = B(a, f, b, "display") + "", 
        c = c.replace(Yb, ""), c = c.replace(/&nbsp;/g, " "), c.length > d && (d = c.length, 
        e = f);
        return e;
    }
    function v(a) {
        return null === a ? "0px" : "number" == typeof a ? 0 > a ? "0px" : a + "px" : a.match(/\d$/) ? a + "px" : a;
    }
    function V(a) {
        var b, c, d = [], e = a.aoColumns, f, g, j, i;
        b = a.aaSortingFixed;
        c = h.isPlainObject(b);
        var n = [];
        f = function(a) {
            a.length && !h.isArray(a[0]) ? n.push(a) : h.merge(n, a);
        };
        h.isArray(b) && f(b);
        c && b.pre && f(b.pre);
        f(a.aaSorting);
        c && b.post && f(b.post);
        for (a = 0; a < n.length; a++) {
            i = n[a][0];
            f = e[i].aDataSort;
            b = 0;
            for (c = f.length; b < c; b++) g = f[b], j = e[g].sType || "string", n[a]._idx === k && (n[a]._idx = h.inArray(n[a][1], e[g].asSorting)), 
            d.push({
                src: i,
                col: g,
                dir: n[a][1],
                index: n[a]._idx,
                type: j,
                formatter: m.ext.type.order[j + "-pre"]
            });
        }
        return d;
    }
    function lb(a) {
        var b, c, d = [], e = m.ext.type.order, f = a.aoData, g = 0, j, i = a.aiDisplayMaster, h;
        Fa(a);
        h = V(a);
        b = 0;
        for (c = h.length; b < c; b++) j = h[b], j.formatter && g++, Gb(a, j.col);
        if ("ssp" != y(a) && 0 !== h.length) {
            b = 0;
            for (c = i.length; b < c; b++) d[i[b]] = b;
            g === h.length ? i.sort(function(a, b) {
                var c, e, g, j, i = h.length, k = f[a]._aSortData, m = f[b]._aSortData;
                for (g = 0; g < i; g++) if (j = h[g], c = k[j.col], e = m[j.col], c = c < e ? -1 : c > e ? 1 : 0, 
                0 !== c) return "asc" === j.dir ? c : -c;
                c = d[a];
                e = d[b];
                return c < e ? -1 : c > e ? 1 : 0;
            }) : i.sort(function(a, b) {
                var c, g, j, i, k = h.length, m = f[a]._aSortData, o = f[b]._aSortData;
                for (j = 0; j < k; j++) if (i = h[j], c = m[i.col], g = o[i.col], i = e[i.type + "-" + i.dir] || e["string-" + i.dir], 
                c = i(c, g), 0 !== c) return c;
                c = d[a];
                g = d[b];
                return c < g ? -1 : c > g ? 1 : 0;
            });
        }
        a.bSorted = !0;
    }
    function Hb(a) {
        for (var b, c, d = a.aoColumns, e = V(a), a = a.oLanguage.oAria, f = 0, g = d.length; f < g; f++) {
            c = d[f];
            var j = c.asSorting;
            b = c.sTitle.replace(/<.*?>/g, "");
            var i = c.nTh;
            i.removeAttribute("aria-sort");
            c.bSortable && (0 < e.length && e[0].col == f ? (i.setAttribute("aria-sort", "asc" == e[0].dir ? "ascending" : "descending"), 
            c = j[e[0].index + 1] || j[0]) : c = j[0], b += "asc" === c ? a.sSortAscending : a.sSortDescending);
            i.setAttribute("aria-label", b);
        }
    }
    function Ua(a, b, c, d) {
        var e = a.aaSorting, f = a.aoColumns[b].asSorting, g = function(a, b) {
            var c = a._idx;
            c === k && (c = h.inArray(a[1], f));
            return c + 1 < f.length ? c + 1 : b ? null : 0;
        };
        "number" === typeof e[0] && (e = a.aaSorting = [ e ]);
        c && a.oFeatures.bSortMulti ? (c = h.inArray(b, D(e, "0")), -1 !== c ? (b = g(e[c], !0), 
        null === b && 1 === e.length && (b = 0), null === b ? e.splice(c, 1) : (e[c][1] = f[b], 
        e[c]._idx = b)) : (e.push([ b, f[0], 0 ]), e[e.length - 1]._idx = 0)) : e.length && e[0][0] == b ? (b = g(e[0]), 
        e.length = 1, e[0][1] = f[b], e[0]._idx = b) : (e.length = 0, e.push([ b, f[0] ]), 
        e[0]._idx = 0);
        S(a);
        "function" == typeof d && d(a);
    }
    function La(a, b, c, d) {
        var e = a.aoColumns[c];
        Va(b, {}, function(b) {
            !1 !== e.bSortable && (a.oFeatures.bProcessing ? (C(a, !0), setTimeout(function() {
                Ua(a, c, b.shiftKey, d);
                "ssp" !== y(a) && C(a, !1);
            }, 0)) : Ua(a, c, b.shiftKey, d));
        });
    }
    function wa(a) {
        var b = a.aLastSort, c = a.oClasses.sSortColumn, d = V(a), e = a.oFeatures, f, g;
        if (e.bSort && e.bSortClasses) {
            e = 0;
            for (f = b.length; e < f; e++) g = b[e].src, h(D(a.aoData, "anCells", g)).removeClass(c + (2 > e ? e + 1 : 3));
            e = 0;
            for (f = d.length; e < f; e++) g = d[e].src, h(D(a.aoData, "anCells", g)).addClass(c + (2 > e ? e + 1 : 3));
        }
        a.aLastSort = d;
    }
    function Gb(a, b) {
        var c = a.aoColumns[b], d = m.ext.order[c.sSortDataType], e;
        d && (e = d.call(a.oInstance, a, b, $(a, b)));
        for (var f, g = m.ext.type.order[c.sType + "-pre"], j = 0, i = a.aoData.length; j < i; j++) if (c = a.aoData[j], 
        c._aSortData || (c._aSortData = []), !c._aSortData[b] || d) f = d ? e[j] : B(a, j, b, "sort"), 
        c._aSortData[b] = g ? g(f) : f;
    }
    function xa(a) {
        if (a.oFeatures.bStateSave && !a.bDestroying) {
            var b = {
                time: +new Date(),
                start: a._iDisplayStart,
                length: a._iDisplayLength,
                order: h.extend(!0, [], a.aaSorting),
                search: zb(a.oPreviousSearch),
                columns: h.map(a.aoColumns, function(b, d) {
                    return {
                        visible: b.bVisible,
                        search: zb(a.aoPreSearchCols[d])
                    };
                })
            };
            r(a, "aoStateSaveParams", "stateSaveParams", [ a, b ]);
            a.oSavedState = b;
            a.fnStateSaveCallback.call(a.oInstance, a, b);
        }
    }
    function Ib(a, b, c) {
        var d, e, f = a.aoColumns, b = function(b) {
            if (b && b.time) {
                var g = r(a, "aoStateLoadParams", "stateLoadParams", [ a, b ]);
                if (-1 === h.inArray(!1, g) && (g = a.iStateDuration, !(0 < g && b.time < +new Date() - 1e3 * g) && !(b.columns && f.length !== b.columns.length))) {
                    a.oLoadedState = h.extend(!0, {}, b);
                    b.start !== k && (a._iDisplayStart = b.start, a.iInitDisplayStart = b.start);
                    b.length !== k && (a._iDisplayLength = b.length);
                    b.order !== k && (a.aaSorting = [], h.each(b.order, function(b, c) {
                        a.aaSorting.push(c[0] >= f.length ? [ 0, c[1] ] : c);
                    }));
                    b.search !== k && h.extend(a.oPreviousSearch, Ab(b.search));
                    if (b.columns) {
                        d = 0;
                        for (e = b.columns.length; d < e; d++) g = b.columns[d], g.visible !== k && (f[d].bVisible = g.visible), 
                        g.search !== k && h.extend(a.aoPreSearchCols[d], Ab(g.search));
                    }
                    r(a, "aoStateLoaded", "stateLoaded", [ a, b ]);
                }
            }
            c();
        };
        if (a.oFeatures.bStateSave) {
            var g = a.fnStateLoadCallback.call(a.oInstance, a, b);
            g !== k && b(g);
        } else c();
    }
    function ya(a) {
        var b = m.settings, a = h.inArray(a, D(b, "nTable"));
        return -1 !== a ? b[a] : null;
    }
    function J(a, b, c, d) {
        c = "DataTables warning: " + (a ? "table id=" + a.sTableId + " - " : "") + c;
        d && (c += ". For more information about this error, please see http://datatables.net/tn/" + d);
        if (b) E.console && console.log && console.log(c); else if (b = m.ext, b = b.sErrMode || b.errMode, 
        a && r(a, null, "error", [ a, d, c ]), "alert" == b) alert(c); else {
            if ("throw" == b) throw Error(c);
            "function" == typeof b && b(a, d, c);
        }
    }
    function F(a, b, c, d) {
        h.isArray(c) ? h.each(c, function(c, d) {
            h.isArray(d) ? F(a, b, d[0], d[1]) : F(a, b, d);
        }) : (d === k && (d = c), b[c] !== k && (a[d] = b[c]));
    }
    function Jb(a, b, c) {
        var d, e;
        for (e in b) b.hasOwnProperty(e) && (d = b[e], h.isPlainObject(d) ? (h.isPlainObject(a[e]) || (a[e] = {}), 
        h.extend(!0, a[e], d)) : a[e] = c && "data" !== e && "aaData" !== e && h.isArray(d) ? d.slice() : d);
        return a;
    }
    function Va(a, b, c) {
        h(a).on("click.DT", b, function(b) {
            a.blur();
            c(b);
        }).on("keypress.DT", b, function(a) {
            13 === a.which && (a.preventDefault(), c(a));
        }).on("selectstart.DT", function() {
            return !1;
        });
    }
    function z(a, b, c, d) {
        c && a[b].push({
            fn: c,
            sName: d
        });
    }
    function r(a, b, c, d) {
        var e = [];
        b && (e = h.map(a[b].slice().reverse(), function(b) {
            return b.fn.apply(a.oInstance, d);
        }));
        null !== c && (b = h.Event(c + ".dt"), h(a.nTable).trigger(b, d), e.push(b.result));
        return e;
    }
    function Ra(a) {
        var b = a._iDisplayStart, c = a.fnDisplayEnd(), d = a._iDisplayLength;
        b >= c && (b = c - d);
        b -= b % d;
        if (-1 === d || 0 > b) b = 0;
        a._iDisplayStart = b;
    }
    function Ma(a, b) {
        var c = a.renderer, d = m.ext.renderer[b];
        return h.isPlainObject(c) && c[b] ? d[c[b]] || d._ : "string" === typeof c ? d[c] || d._ : d._;
    }
    function y(a) {
        return a.oFeatures.bServerSide ? "ssp" : a.ajax || a.sAjaxSource ? "ajax" : "dom";
    }
    function ha(a, b) {
        var c = [], c = Kb.numbers_length, d = Math.floor(c / 2);
        b <= c ? c = W(0, b) : a <= d ? (c = W(0, c - 2), c.push("ellipsis"), c.push(b - 1)) : (a >= b - 1 - d ? c = W(b - (c - 2), b) : (c = W(a - d + 2, a + d - 1), 
        c.push("ellipsis"), c.push(b - 1)), c.splice(0, 0, "ellipsis"), c.splice(0, 0, 0));
        c.DT_el = "span";
        return c;
    }
    function cb(a) {
        h.each({
            num: function(b) {
                return za(b, a);
            },
            "num-fmt": function(b) {
                return za(b, a, Wa);
            },
            "html-num": function(b) {
                return za(b, a, Aa);
            },
            "html-num-fmt": function(b) {
                return za(b, a, Aa, Wa);
            }
        }, function(b, c) {
            x.type.order[b + a + "-pre"] = c;
            b.match(/^html\-/) && (x.type.search[b + a] = x.type.search.html);
        });
    }
    function Lb(a) {
        return function() {
            var b = [ ya(this[m.ext.iApiIndex]) ].concat(Array.prototype.slice.call(arguments));
            return m.ext.internal[a].apply(this, b);
        };
    }
    var m = function(a) {
        this.$ = function(a, b) {
            return this.api(!0).$(a, b);
        };
        this._ = function(a, b) {
            return this.api(!0).rows(a, b).data();
        };
        this.api = function(a) {
            return a ? new s(ya(this[x.iApiIndex])) : new s(this);
        };
        this.fnAddData = function(a, b) {
            var c = this.api(!0), d = h.isArray(a) && (h.isArray(a[0]) || h.isPlainObject(a[0])) ? c.rows.add(a) : c.row.add(a);
            (b === k || b) && c.draw();
            return d.flatten().toArray();
        };
        this.fnAdjustColumnSizing = function(a) {
            var b = this.api(!0).columns.adjust(), c = b.settings()[0], d = c.oScroll;
            a === k || a ? b.draw(!1) : ("" !== d.sX || "" !== d.sY) && ka(c);
        };
        this.fnClearTable = function(a) {
            var b = this.api(!0).clear();
            (a === k || a) && b.draw();
        };
        this.fnClose = function(a) {
            this.api(!0).row(a).child.hide();
        };
        this.fnDeleteRow = function(a, b, c) {
            var d = this.api(!0), a = d.rows(a), e = a.settings()[0], h = e.aoData[a[0][0]];
            a.remove();
            b && b.call(this, e, h);
            (c === k || c) && d.draw();
            return h;
        };
        this.fnDestroy = function(a) {
            this.api(!0).destroy(a);
        };
        this.fnDraw = function(a) {
            this.api(!0).draw(a);
        };
        this.fnFilter = function(a, b, c, d, e, h) {
            e = this.api(!0);
            null === b || b === k ? e.search(a, c, d, h) : e.column(b).search(a, c, d, h);
            e.draw();
        };
        this.fnGetData = function(a, b) {
            var c = this.api(!0);
            if (a !== k) {
                var d = a.nodeName ? a.nodeName.toLowerCase() : "";
                return b !== k || "td" == d || "th" == d ? c.cell(a, b).data() : c.row(a).data() || null;
            }
            return c.data().toArray();
        };
        this.fnGetNodes = function(a) {
            var b = this.api(!0);
            return a !== k ? b.row(a).node() : b.rows().nodes().flatten().toArray();
        };
        this.fnGetPosition = function(a) {
            var b = this.api(!0), c = a.nodeName.toUpperCase();
            return "TR" == c ? b.row(a).index() : "TD" == c || "TH" == c ? (a = b.cell(a).index(), 
            [ a.row, a.columnVisible, a.column ]) : null;
        };
        this.fnIsOpen = function(a) {
            return this.api(!0).row(a).child.isShown();
        };
        this.fnOpen = function(a, b, c) {
            return this.api(!0).row(a).child(b, c).show().child()[0];
        };
        this.fnPageChange = function(a, b) {
            var c = this.api(!0).page(a);
            (b === k || b) && c.draw(!1);
        };
        this.fnSetColumnVis = function(a, b, c) {
            a = this.api(!0).column(a).visible(b);
            (c === k || c) && a.columns.adjust().draw();
        };
        this.fnSettings = function() {
            return ya(this[x.iApiIndex]);
        };
        this.fnSort = function(a) {
            this.api(!0).order(a).draw();
        };
        this.fnSortListener = function(a, b, c) {
            this.api(!0).order.listener(a, b, c);
        };
        this.fnUpdate = function(a, b, c, d, e) {
            var h = this.api(!0);
            c === k || null === c ? h.row(b).data(a) : h.cell(b, c).data(a);
            (e === k || e) && h.columns.adjust();
            (d === k || d) && h.draw();
            return 0;
        };
        this.fnVersionCheck = x.fnVersionCheck;
        var b = this, c = a === k, d = this.length;
        c && (a = {});
        this.oApi = this.internal = x.internal;
        for (var e in m.ext.internal) e && (this[e] = Lb(e));
        this.each(function() {
            var e = {}, g = 1 < d ? Jb(e, a, !0) : a, j = 0, i, e = this.getAttribute("id"), n = !1, l = m.defaults, q = h(this);
            if ("table" != this.nodeName.toLowerCase()) J(null, 0, "Non-table node initialisation (" + this.nodeName + ")", 2); else {
                db(l);
                eb(l.column);
                I(l, l, !0);
                I(l.column, l.column, !0);
                I(l, h.extend(g, q.data()));
                var t = m.settings, j = 0;
                for (i = t.length; j < i; j++) {
                    var o = t[j];
                    if (o.nTable == this || o.nTHead.parentNode == this || o.nTFoot && o.nTFoot.parentNode == this) {
                        var s = g.bRetrieve !== k ? g.bRetrieve : l.bRetrieve;
                        if (c || s) return o.oInstance;
                        if (g.bDestroy !== k ? g.bDestroy : l.bDestroy) {
                            o.oInstance.fnDestroy();
                            break;
                        } else {
                            J(o, 0, "Cannot reinitialise DataTable", 3);
                            return;
                        }
                    }
                    if (o.sTableId == this.id) {
                        t.splice(j, 1);
                        break;
                    }
                }
                if (null === e || "" === e) this.id = e = "DataTables_Table_" + m.ext._unique++;
                var p = h.extend(!0, {}, m.models.oSettings, {
                    sDestroyWidth: q[0].style.width,
                    sInstance: e,
                    sTableId: e
                });
                p.nTable = this;
                p.oApi = b.internal;
                p.oInit = g;
                t.push(p);
                p.oInstance = 1 === b.length ? b : q.dataTable();
                db(g);
                g.oLanguage && Ca(g.oLanguage);
                g.aLengthMenu && !g.iDisplayLength && (g.iDisplayLength = h.isArray(g.aLengthMenu[0]) ? g.aLengthMenu[0][0] : g.aLengthMenu[0]);
                g = Jb(h.extend(!0, {}, l), g);
                F(p.oFeatures, g, "bPaginate bLengthChange bFilter bSort bSortMulti bInfo bProcessing bAutoWidth bSortClasses bServerSide bDeferRender".split(" "));
                F(p, g, [ "asStripeClasses", "ajax", "fnServerData", "fnFormatNumber", "sServerMethod", "aaSorting", "aaSortingFixed", "aLengthMenu", "sPaginationType", "sAjaxSource", "sAjaxDataProp", "iStateDuration", "sDom", "bSortCellsTop", "iTabIndex", "fnStateLoadCallback", "fnStateSaveCallback", "renderer", "searchDelay", "rowId", [ "iCookieDuration", "iStateDuration" ], [ "oSearch", "oPreviousSearch" ], [ "aoSearchCols", "aoPreSearchCols" ], [ "iDisplayLength", "_iDisplayLength" ] ]);
                F(p.oScroll, g, [ [ "sScrollX", "sX" ], [ "sScrollXInner", "sXInner" ], [ "sScrollY", "sY" ], [ "bScrollCollapse", "bCollapse" ] ]);
                F(p.oLanguage, g, "fnInfoCallback");
                z(p, "aoDrawCallback", g.fnDrawCallback, "user");
                z(p, "aoServerParams", g.fnServerParams, "user");
                z(p, "aoStateSaveParams", g.fnStateSaveParams, "user");
                z(p, "aoStateLoadParams", g.fnStateLoadParams, "user");
                z(p, "aoStateLoaded", g.fnStateLoaded, "user");
                z(p, "aoRowCallback", g.fnRowCallback, "user");
                z(p, "aoRowCreatedCallback", g.fnCreatedRow, "user");
                z(p, "aoHeaderCallback", g.fnHeaderCallback, "user");
                z(p, "aoFooterCallback", g.fnFooterCallback, "user");
                z(p, "aoInitComplete", g.fnInitComplete, "user");
                z(p, "aoPreDrawCallback", g.fnPreDrawCallback, "user");
                p.rowIdFn = Q(g.rowId);
                fb(p);
                var u = p.oClasses;
                h.extend(u, m.ext.classes, g.oClasses);
                q.addClass(u.sTable);
                p.iInitDisplayStart === k && (p.iInitDisplayStart = g.iDisplayStart, p._iDisplayStart = g.iDisplayStart);
                null !== g.iDeferLoading && (p.bDeferLoading = !0, e = h.isArray(g.iDeferLoading), 
                p._iRecordsDisplay = e ? g.iDeferLoading[0] : g.iDeferLoading, p._iRecordsTotal = e ? g.iDeferLoading[1] : g.iDeferLoading);
                var v = p.oLanguage;
                h.extend(!0, v, g.oLanguage);
                v.sUrl && (h.ajax({
                    dataType: "json",
                    url: v.sUrl,
                    success: function(a) {
                        Ca(a);
                        I(l.oLanguage, a);
                        h.extend(true, v, a);
                        ga(p);
                    },
                    error: function() {
                        ga(p);
                    }
                }), n = !0);
                null === g.asStripeClasses && (p.asStripeClasses = [ u.sStripeOdd, u.sStripeEven ]);
                var e = p.asStripeClasses, x = q.children("tbody").find("tr").eq(0);
                -1 !== h.inArray(!0, h.map(e, function(a) {
                    return x.hasClass(a);
                })) && (h("tbody tr", this).removeClass(e.join(" ")), p.asDestroyStripes = e.slice());
                e = [];
                t = this.getElementsByTagName("thead");
                0 !== t.length && (da(p.aoHeader, t[0]), e = ra(p));
                if (null === g.aoColumns) {
                    t = [];
                    j = 0;
                    for (i = e.length; j < i; j++) t.push(null);
                } else t = g.aoColumns;
                j = 0;
                for (i = t.length; j < i; j++) Da(p, e ? e[j] : null);
                hb(p, g.aoColumnDefs, t, function(a, b) {
                    ja(p, a, b);
                });
                if (x.length) {
                    var w = function(a, b) {
                        return a.getAttribute("data-" + b) !== null ? b : null;
                    };
                    h(x[0]).children("th, td").each(function(a, b) {
                        var c = p.aoColumns[a];
                        if (c.mData === a) {
                            var d = w(b, "sort") || w(b, "order"), e = w(b, "filter") || w(b, "search");
                            if (d !== null || e !== null) {
                                c.mData = {
                                    _: a + ".display",
                                    sort: d !== null ? a + ".@data-" + d : k,
                                    type: d !== null ? a + ".@data-" + d : k,
                                    filter: e !== null ? a + ".@data-" + e : k
                                };
                                ja(p, a);
                            }
                        }
                    });
                }
                var T = p.oFeatures, e = function() {
                    if (g.aaSorting === k) {
                        var a = p.aaSorting;
                        j = 0;
                        for (i = a.length; j < i; j++) a[j][1] = p.aoColumns[j].asSorting[0];
                    }
                    wa(p);
                    T.bSort && z(p, "aoDrawCallback", function() {
                        if (p.bSorted) {
                            var a = V(p), b = {};
                            h.each(a, function(a, c) {
                                b[c.src] = c.dir;
                            });
                            r(p, null, "order", [ p, a, b ]);
                            Hb(p);
                        }
                    });
                    z(p, "aoDrawCallback", function() {
                        (p.bSorted || y(p) === "ssp" || T.bDeferRender) && wa(p);
                    }, "sc");
                    var a = q.children("caption").each(function() {
                        this._captionSide = h(this).css("caption-side");
                    }), b = q.children("thead");
                    b.length === 0 && (b = h("<thead/>").appendTo(q));
                    p.nTHead = b[0];
                    b = q.children("tbody");
                    b.length === 0 && (b = h("<tbody/>").appendTo(q));
                    p.nTBody = b[0];
                    b = q.children("tfoot");
                    if (b.length === 0 && a.length > 0 && (p.oScroll.sX !== "" || p.oScroll.sY !== "")) b = h("<tfoot/>").appendTo(q);
                    if (b.length === 0 || b.children().length === 0) q.addClass(u.sNoFooter); else if (b.length > 0) {
                        p.nTFoot = b[0];
                        da(p.aoFooter, p.nTFoot);
                    }
                    if (g.aaData) for (j = 0; j < g.aaData.length; j++) M(p, g.aaData[j]); else (p.bDeferLoading || y(p) == "dom") && ma(p, h(p.nTBody).children("tr"));
                    p.aiDisplay = p.aiDisplayMaster.slice();
                    p.bInitialised = true;
                    n === false && ga(p);
                };
                g.bStateSave ? (T.bStateSave = !0, z(p, "aoDrawCallback", xa, "state_save"), Ib(p, g, e)) : e();
            }
        });
        b = null;
        return this;
    }, x, s, o, u, Xa = {}, Mb = /[\r\n]/g, Aa = /<.*?>/g, Zb = /^\d{2,4}[\.\/\-]\d{1,2}[\.\/\-]\d{1,2}([T ]{1}\d{1,2}[:\.]\d{2}([\.:]\d{2})?)?$/, $b = RegExp("(\\/|\\.|\\*|\\+|\\?|\\||\\(|\\)|\\[|\\]|\\{|\\}|\\\\|\\$|\\^|\\-)", "g"), Wa = /[',$£€¥%\u2009\u202F\u20BD\u20a9\u20BArfk]/gi, L = function(a) {
        return !a || !0 === a || "-" === a ? !0 : !1;
    }, Nb = function(a) {
        var b = parseInt(a, 10);
        return !isNaN(b) && isFinite(a) ? b : null;
    }, Ob = function(a, b) {
        Xa[b] || (Xa[b] = RegExp(Pa(b), "g"));
        return "string" === typeof a && "." !== b ? a.replace(/\./g, "").replace(Xa[b], ".") : a;
    }, Ya = function(a, b, c) {
        var d = "string" === typeof a;
        if (L(a)) return !0;
        b && d && (a = Ob(a, b));
        c && d && (a = a.replace(Wa, ""));
        return !isNaN(parseFloat(a)) && isFinite(a);
    }, Pb = function(a, b, c) {
        return L(a) ? !0 : !(L(a) || "string" === typeof a) ? null : Ya(a.replace(Aa, ""), b, c) ? !0 : null;
    }, D = function(a, b, c) {
        var d = [], e = 0, f = a.length;
        if (c !== k) for (;e < f; e++) a[e] && a[e][b] && d.push(a[e][b][c]); else for (;e < f; e++) a[e] && d.push(a[e][b]);
        return d;
    }, ia = function(a, b, c, d) {
        var e = [], f = 0, g = b.length;
        if (d !== k) for (;f < g; f++) a[b[f]][c] && e.push(a[b[f]][c][d]); else for (;f < g; f++) e.push(a[b[f]][c]);
        return e;
    }, W = function(a, b) {
        var c = [], d;
        b === k ? (b = 0, d = a) : (d = b, b = a);
        for (var e = b; e < d; e++) c.push(e);
        return c;
    }, Qb = function(a) {
        for (var b = [], c = 0, d = a.length; c < d; c++) a[c] && b.push(a[c]);
        return b;
    }, qa = function(a) {
        var b;
        a: {
            if (!(2 > a.length)) {
                b = a.slice().sort();
                for (var c = b[0], d = 1, e = b.length; d < e; d++) {
                    if (b[d] === c) {
                        b = !1;
                        break a;
                    }
                    c = b[d];
                }
            }
            b = !0;
        }
        if (b) return a.slice();
        b = [];
        var e = a.length, f, g = 0, d = 0;
        a: for (;d < e; d++) {
            c = a[d];
            for (f = 0; f < g; f++) if (b[f] === c) continue a;
            b.push(c);
            g++;
        }
        return b;
    };
    m.util = {
        throttle: function(a, b) {
            var c = b !== k ? b : 200, d, e;
            return function() {
                var b = this, g = +new Date(), j = arguments;
                d && g < d + c ? (clearTimeout(e), e = setTimeout(function() {
                    d = k;
                    a.apply(b, j);
                }, c)) : (d = g, a.apply(b, j));
            };
        },
        escapeRegex: function(a) {
            return a.replace($b, "\\$1");
        }
    };
    var A = function(a, b, c) {
        a[b] !== k && (a[c] = a[b]);
    }, ba = /\[.*?\]$/, U = /\(\)$/, Pa = m.util.escapeRegex, va = h("<div>")[0], Wb = va.textContent !== k, Yb = /<.*?>/g, Na = m.util.throttle, Rb = [], w = Array.prototype, ac = function(a) {
        var b, c, d = m.settings, e = h.map(d, function(a) {
            return a.nTable;
        });
        if (a) {
            if (a.nTable && a.oApi) return [ a ];
            if (a.nodeName && "table" === a.nodeName.toLowerCase()) return b = h.inArray(a, e), 
            -1 !== b ? [ d[b] ] : null;
            if (a && "function" === typeof a.settings) return a.settings().toArray();
            "string" === typeof a ? c = h(a) : a instanceof h && (c = a);
        } else return [];
        if (c) return c.map(function() {
            b = h.inArray(this, e);
            return -1 !== b ? d[b] : null;
        }).toArray();
    };
    s = function(a, b) {
        if (!(this instanceof s)) return new s(a, b);
        var c = [], d = function(a) {
            (a = ac(a)) && (c = c.concat(a));
        };
        if (h.isArray(a)) for (var e = 0, f = a.length; e < f; e++) d(a[e]); else d(a);
        this.context = qa(c);
        b && h.merge(this, b);
        this.selector = {
            rows: null,
            cols: null,
            opts: null
        };
        s.extend(this, this, Rb);
    };
    m.Api = s;
    h.extend(s.prototype, {
        any: function() {
            return 0 !== this.count();
        },
        concat: w.concat,
        context: [],
        count: function() {
            return this.flatten().length;
        },
        each: function(a) {
            for (var b = 0, c = this.length; b < c; b++) a.call(this, this[b], b, this);
            return this;
        },
        eq: function(a) {
            var b = this.context;
            return b.length > a ? new s(b[a], this[a]) : null;
        },
        filter: function(a) {
            var b = [];
            if (w.filter) b = w.filter.call(this, a, this); else for (var c = 0, d = this.length; c < d; c++) a.call(this, this[c], c, this) && b.push(this[c]);
            return new s(this.context, b);
        },
        flatten: function() {
            var a = [];
            return new s(this.context, a.concat.apply(a, this.toArray()));
        },
        join: w.join,
        indexOf: w.indexOf || function(a, b) {
            for (var c = b || 0, d = this.length; c < d; c++) if (this[c] === a) return c;
            return -1;
        },
        iterator: function(a, b, c, d) {
            var e = [], f, g, j, h, n, l = this.context, m, o, u = this.selector;
            "string" === typeof a && (d = c, c = b, b = a, a = !1);
            g = 0;
            for (j = l.length; g < j; g++) {
                var r = new s(l[g]);
                if ("table" === b) f = c.call(r, l[g], g), f !== k && e.push(f); else if ("columns" === b || "rows" === b) f = c.call(r, l[g], this[g], g), 
                f !== k && e.push(f); else if ("column" === b || "column-rows" === b || "row" === b || "cell" === b) {
                    o = this[g];
                    "column-rows" === b && (m = Ba(l[g], u.opts));
                    h = 0;
                    for (n = o.length; h < n; h++) f = o[h], f = "cell" === b ? c.call(r, l[g], f.row, f.column, g, h) : c.call(r, l[g], f, g, h, m), 
                    f !== k && e.push(f);
                }
            }
            return e.length || d ? (a = new s(l, a ? e.concat.apply([], e) : e), b = a.selector, 
            b.rows = u.rows, b.cols = u.cols, b.opts = u.opts, a) : this;
        },
        lastIndexOf: w.lastIndexOf || function(a, b) {
            return this.indexOf.apply(this.toArray.reverse(), arguments);
        },
        length: 0,
        map: function(a) {
            var b = [];
            if (w.map) b = w.map.call(this, a, this); else for (var c = 0, d = this.length; c < d; c++) b.push(a.call(this, this[c], c));
            return new s(this.context, b);
        },
        pluck: function(a) {
            return this.map(function(b) {
                return b[a];
            });
        },
        pop: w.pop,
        push: w.push,
        reduce: w.reduce || function(a, b) {
            return gb(this, a, b, 0, this.length, 1);
        },
        reduceRight: w.reduceRight || function(a, b) {
            return gb(this, a, b, this.length - 1, -1, -1);
        },
        reverse: w.reverse,
        selector: null,
        shift: w.shift,
        slice: function() {
            return new s(this.context, this);
        },
        sort: w.sort,
        splice: w.splice,
        toArray: function() {
            return w.slice.call(this);
        },
        to$: function() {
            return h(this);
        },
        toJQuery: function() {
            return h(this);
        },
        unique: function() {
            return new s(this.context, qa(this));
        },
        unshift: w.unshift
    });
    s.extend = function(a, b, c) {
        if (c.length && b && (b instanceof s || b.__dt_wrapper)) {
            var d, e, f, g = function(a, b, c) {
                return function() {
                    var d = b.apply(a, arguments);
                    s.extend(d, d, c.methodExt);
                    return d;
                };
            };
            d = 0;
            for (e = c.length; d < e; d++) f = c[d], b[f.name] = "function" === typeof f.val ? g(a, f.val, f) : h.isPlainObject(f.val) ? {} : f.val, 
            b[f.name].__dt_wrapper = !0, s.extend(a, b[f.name], f.propExt);
        }
    };
    s.register = o = function(a, b) {
        if (h.isArray(a)) for (var c = 0, d = a.length; c < d; c++) s.register(a[c], b); else for (var e = a.split("."), f = Rb, g, j, c = 0, d = e.length; c < d; c++) {
            g = (j = -1 !== e[c].indexOf("()")) ? e[c].replace("()", "") : e[c];
            var i;
            a: {
                i = 0;
                for (var n = f.length; i < n; i++) if (f[i].name === g) {
                    i = f[i];
                    break a;
                }
                i = null;
            }
            i || (i = {
                name: g,
                val: {},
                methodExt: [],
                propExt: []
            }, f.push(i));
            c === d - 1 ? i.val = b : f = j ? i.methodExt : i.propExt;
        }
    };
    s.registerPlural = u = function(a, b, c) {
        s.register(a, c);
        s.register(b, function() {
            var a = c.apply(this, arguments);
            return a === this ? this : a instanceof s ? a.length ? h.isArray(a[0]) ? new s(a.context, a[0]) : a[0] : k : a;
        });
    };
    o("tables()", function(a) {
        var b;
        if (a) {
            b = s;
            var c = this.context;
            if ("number" === typeof a) a = [ c[a] ]; else var d = h.map(c, function(a) {
                return a.nTable;
            }), a = h(d).filter(a).map(function() {
                var a = h.inArray(this, d);
                return c[a];
            }).toArray();
            b = new b(a);
        } else b = this;
        return b;
    });
    o("table()", function(a) {
        var a = this.tables(a), b = a.context;
        return b.length ? new s(b[0]) : a;
    });
    u("tables().nodes()", "table().node()", function() {
        return this.iterator("table", function(a) {
            return a.nTable;
        }, 1);
    });
    u("tables().body()", "table().body()", function() {
        return this.iterator("table", function(a) {
            return a.nTBody;
        }, 1);
    });
    u("tables().header()", "table().header()", function() {
        return this.iterator("table", function(a) {
            return a.nTHead;
        }, 1);
    });
    u("tables().footer()", "table().footer()", function() {
        return this.iterator("table", function(a) {
            return a.nTFoot;
        }, 1);
    });
    u("tables().containers()", "table().container()", function() {
        return this.iterator("table", function(a) {
            return a.nTableWrapper;
        }, 1);
    });
    o("draw()", function(a) {
        return this.iterator("table", function(b) {
            "page" === a ? N(b) : ("string" === typeof a && (a = "full-hold" === a ? !1 : !0), 
            S(b, !1 === a));
        });
    });
    o("page()", function(a) {
        return a === k ? this.page.info().page : this.iterator("table", function(b) {
            Sa(b, a);
        });
    });
    o("page.info()", function() {
        if (0 === this.context.length) return k;
        var a = this.context[0], b = a._iDisplayStart, c = a.oFeatures.bPaginate ? a._iDisplayLength : -1, d = a.fnRecordsDisplay(), e = -1 === c;
        return {
            page: e ? 0 : Math.floor(b / c),
            pages: e ? 1 : Math.ceil(d / c),
            start: b,
            end: a.fnDisplayEnd(),
            length: c,
            recordsTotal: a.fnRecordsTotal(),
            recordsDisplay: d,
            serverSide: "ssp" === y(a)
        };
    });
    o("page.len()", function(a) {
        return a === k ? 0 !== this.context.length ? this.context[0]._iDisplayLength : k : this.iterator("table", function(b) {
            Qa(b, a);
        });
    });
    var Sb = function(a, b, c) {
        if (c) {
            var d = new s(a);
            d.one("draw", function() {
                c(d.ajax.json());
            });
        }
        if ("ssp" == y(a)) S(a, b); else {
            C(a, !0);
            var e = a.jqXHR;
            e && 4 !== e.readyState && e.abort();
            sa(a, [], function(c) {
                na(a);
                for (var c = ta(a, c), d = 0, e = c.length; d < e; d++) M(a, c[d]);
                S(a, b);
                C(a, !1);
            });
        }
    };
    o("ajax.json()", function() {
        var a = this.context;
        if (0 < a.length) return a[0].json;
    });
    o("ajax.params()", function() {
        var a = this.context;
        if (0 < a.length) return a[0].oAjaxData;
    });
    o("ajax.reload()", function(a, b) {
        return this.iterator("table", function(c) {
            Sb(c, !1 === b, a);
        });
    });
    o("ajax.url()", function(a) {
        var b = this.context;
        if (a === k) {
            if (0 === b.length) return k;
            b = b[0];
            return b.ajax ? h.isPlainObject(b.ajax) ? b.ajax.url : b.ajax : b.sAjaxSource;
        }
        return this.iterator("table", function(b) {
            h.isPlainObject(b.ajax) ? b.ajax.url = a : b.ajax = a;
        });
    });
    o("ajax.url().load()", function(a, b) {
        return this.iterator("table", function(c) {
            Sb(c, !1 === b, a);
        });
    });
    var Za = function(a, b, c, d, e) {
        var f = [], g, j, i, n, l, m;
        i = typeof b;
        if (!b || "string" === i || "function" === i || b.length === k) b = [ b ];
        i = 0;
        for (n = b.length; i < n; i++) {
            j = b[i] && b[i].split && !b[i].match(/[\[\(:]/) ? b[i].split(",") : [ b[i] ];
            l = 0;
            for (m = j.length; l < m; l++) (g = c("string" === typeof j[l] ? h.trim(j[l]) : j[l])) && g.length && (f = f.concat(g));
        }
        a = x.selector[a];
        if (a.length) {
            i = 0;
            for (n = a.length; i < n; i++) f = a[i](d, e, f);
        }
        return qa(f);
    }, $a = function(a) {
        a || (a = {});
        a.filter && a.search === k && (a.search = a.filter);
        return h.extend({
            search: "none",
            order: "current",
            page: "all"
        }, a);
    }, ab = function(a) {
        for (var b = 0, c = a.length; b < c; b++) if (0 < a[b].length) return a[0] = a[b], 
        a[0].length = 1, a.length = 1, a.context = [ a.context[b] ], a;
        a.length = 0;
        return a;
    }, Ba = function(a, b) {
        var c, d, e, f = [], g = a.aiDisplay;
        c = a.aiDisplayMaster;
        var j = b.search;
        d = b.order;
        e = b.page;
        if ("ssp" == y(a)) return "removed" === j ? [] : W(0, c.length);
        if ("current" == e) {
            c = a._iDisplayStart;
            for (d = a.fnDisplayEnd(); c < d; c++) f.push(g[c]);
        } else if ("current" == d || "applied" == d) f = "none" == j ? c.slice() : "applied" == j ? g.slice() : h.map(c, function(a) {
            return -1 === h.inArray(a, g) ? a : null;
        }); else if ("index" == d || "original" == d) {
            c = 0;
            for (d = a.aoData.length; c < d; c++) "none" == j ? f.push(c) : (e = h.inArray(c, g), 
            (-1 === e && "removed" == j || 0 <= e && "applied" == j) && f.push(c));
        }
        return f;
    };
    o("rows()", function(a, b) {
        a === k ? a = "" : h.isPlainObject(a) && (b = a, a = "");
        var b = $a(b), c = this.iterator("table", function(c) {
            var e = b, f;
            return Za("row", a, function(a) {
                var b = Nb(a);
                if (b !== null && !e) return [ b ];
                f || (f = Ba(c, e));
                if (b !== null && h.inArray(b, f) !== -1) return [ b ];
                if (a === null || a === k || a === "") return f;
                if (typeof a === "function") return h.map(f, function(b) {
                    var e = c.aoData[b];
                    return a(b, e._aData, e.nTr) ? b : null;
                });
                b = Qb(ia(c.aoData, f, "nTr"));
                if (a.nodeName) {
                    if (a._DT_RowIndex !== k) return [ a._DT_RowIndex ];
                    if (a._DT_CellIndex) return [ a._DT_CellIndex.row ];
                    b = h(a).closest("*[data-dt-row]");
                    return b.length ? [ b.data("dt-row") ] : [];
                }
                if (typeof a === "string" && a.charAt(0) === "#") {
                    var i = c.aIds[a.replace(/^#/, "")];
                    if (i !== k) return [ i.idx ];
                }
                return h(b).filter(a).map(function() {
                    return this._DT_RowIndex;
                }).toArray();
            }, c, e);
        }, 1);
        c.selector.rows = a;
        c.selector.opts = b;
        return c;
    });
    o("rows().nodes()", function() {
        return this.iterator("row", function(a, b) {
            return a.aoData[b].nTr || k;
        }, 1);
    });
    o("rows().data()", function() {
        return this.iterator(!0, "rows", function(a, b) {
            return ia(a.aoData, b, "_aData");
        }, 1);
    });
    u("rows().cache()", "row().cache()", function(a) {
        return this.iterator("row", function(b, c) {
            var d = b.aoData[c];
            return "search" === a ? d._aFilterData : d._aSortData;
        }, 1);
    });
    u("rows().invalidate()", "row().invalidate()", function(a) {
        return this.iterator("row", function(b, c) {
            ca(b, c, a);
        });
    });
    u("rows().indexes()", "row().index()", function() {
        return this.iterator("row", function(a, b) {
            return b;
        }, 1);
    });
    u("rows().ids()", "row().id()", function(a) {
        for (var b = [], c = this.context, d = 0, e = c.length; d < e; d++) for (var f = 0, g = this[d].length; f < g; f++) {
            var h = c[d].rowIdFn(c[d].aoData[this[d][f]]._aData);
            b.push((!0 === a ? "#" : "") + h);
        }
        return new s(c, b);
    });
    u("rows().remove()", "row().remove()", function() {
        var a = this;
        this.iterator("row", function(b, c, d) {
            var e = b.aoData, f = e[c], g, h, i, n, l;
            e.splice(c, 1);
            g = 0;
            for (h = e.length; g < h; g++) if (i = e[g], l = i.anCells, null !== i.nTr && (i.nTr._DT_RowIndex = g), 
            null !== l) {
                i = 0;
                for (n = l.length; i < n; i++) l[i]._DT_CellIndex.row = g;
            }
            oa(b.aiDisplayMaster, c);
            oa(b.aiDisplay, c);
            oa(a[d], c, !1);
            0 < b._iRecordsDisplay && b._iRecordsDisplay--;
            Ra(b);
            c = b.rowIdFn(f._aData);
            c !== k && delete b.aIds[c];
        });
        this.iterator("table", function(a) {
            for (var c = 0, d = a.aoData.length; c < d; c++) a.aoData[c].idx = c;
        });
        return this;
    });
    o("rows.add()", function(a) {
        var b = this.iterator("table", function(b) {
            var c, f, g, h = [];
            f = 0;
            for (g = a.length; f < g; f++) c = a[f], c.nodeName && "TR" === c.nodeName.toUpperCase() ? h.push(ma(b, c)[0]) : h.push(M(b, c));
            return h;
        }, 1), c = this.rows(-1);
        c.pop();
        h.merge(c, b);
        return c;
    });
    o("row()", function(a, b) {
        return ab(this.rows(a, b));
    });
    o("row().data()", function(a) {
        var b = this.context;
        if (a === k) return b.length && this.length ? b[0].aoData[this[0]]._aData : k;
        b[0].aoData[this[0]]._aData = a;
        ca(b[0], this[0], "data");
        return this;
    });
    o("row().node()", function() {
        var a = this.context;
        return a.length && this.length ? a[0].aoData[this[0]].nTr || null : null;
    });
    o("row.add()", function(a) {
        a instanceof h && a.length && (a = a[0]);
        var b = this.iterator("table", function(b) {
            return a.nodeName && "TR" === a.nodeName.toUpperCase() ? ma(b, a)[0] : M(b, a);
        });
        return this.row(b[0]);
    });
    var bb = function(a, b) {
        var c = a.context;
        if (c.length && (c = c[0].aoData[b !== k ? b : a[0]]) && c._details) c._details.remove(), 
        c._detailsShow = k, c._details = k;
    }, Tb = function(a, b) {
        var c = a.context;
        if (c.length && a.length) {
            var d = c[0].aoData[a[0]];
            if (d._details) {
                (d._detailsShow = b) ? d._details.insertAfter(d.nTr) : d._details.detach();
                var e = c[0], f = new s(e), g = e.aoData;
                f.off("draw.dt.DT_details column-visibility.dt.DT_details destroy.dt.DT_details");
                0 < D(g, "_details").length && (f.on("draw.dt.DT_details", function(a, b) {
                    e === b && f.rows({
                        page: "current"
                    }).eq(0).each(function(a) {
                        a = g[a];
                        a._detailsShow && a._details.insertAfter(a.nTr);
                    });
                }), f.on("column-visibility.dt.DT_details", function(a, b) {
                    if (e === b) for (var c, d = aa(b), f = 0, h = g.length; f < h; f++) c = g[f], c._details && c._details.children("td[colspan]").attr("colspan", d);
                }), f.on("destroy.dt.DT_details", function(a, b) {
                    if (e === b) for (var c = 0, d = g.length; c < d; c++) g[c]._details && bb(f, c);
                }));
            }
        }
    };
    o("row().child()", function(a, b) {
        var c = this.context;
        if (a === k) return c.length && this.length ? c[0].aoData[this[0]]._details : k;
        if (!0 === a) this.child.show(); else if (!1 === a) bb(this); else if (c.length && this.length) {
            var d = c[0], c = c[0].aoData[this[0]], e = [], f = function(a, b) {
                if (h.isArray(a) || a instanceof h) for (var c = 0, k = a.length; c < k; c++) f(a[c], b); else a.nodeName && "tr" === a.nodeName.toLowerCase() ? e.push(a) : (c = h("<tr><td/></tr>").addClass(b), 
                h("td", c).addClass(b).html(a)[0].colSpan = aa(d), e.push(c[0]));
            };
            f(a, b);
            c._details && c._details.detach();
            c._details = h(e);
            c._detailsShow && c._details.insertAfter(c.nTr);
        }
        return this;
    });
    o([ "row().child.show()", "row().child().show()" ], function() {
        Tb(this, !0);
        return this;
    });
    o([ "row().child.hide()", "row().child().hide()" ], function() {
        Tb(this, !1);
        return this;
    });
    o([ "row().child.remove()", "row().child().remove()" ], function() {
        bb(this);
        return this;
    });
    o("row().child.isShown()", function() {
        var a = this.context;
        return a.length && this.length ? a[0].aoData[this[0]]._detailsShow || !1 : !1;
    });
    var bc = /^([^:]+):(name|visIdx|visible)$/, Ub = function(a, b, c, d, e) {
        for (var c = [], d = 0, f = e.length; d < f; d++) c.push(B(a, e[d], b));
        return c;
    };
    o("columns()", function(a, b) {
        a === k ? a = "" : h.isPlainObject(a) && (b = a, a = "");
        var b = $a(b), c = this.iterator("table", function(c) {
            var e = a, f = b, g = c.aoColumns, j = D(g, "sName"), i = D(g, "nTh");
            return Za("column", e, function(a) {
                var b = Nb(a);
                if (a === "") return W(g.length);
                if (b !== null) return [ b >= 0 ? b : g.length + b ];
                if (typeof a === "function") {
                    var e = Ba(c, f);
                    return h.map(g, function(b, f) {
                        return a(f, Ub(c, f, 0, 0, e), i[f]) ? f : null;
                    });
                }
                var k = typeof a === "string" ? a.match(bc) : "";
                if (k) switch (k[2]) {
                  case "visIdx":
                  case "visible":
                    b = parseInt(k[1], 10);
                    if (b < 0) {
                        var m = h.map(g, function(a, b) {
                            return a.bVisible ? b : null;
                        });
                        return [ m[m.length + b] ];
                    }
                    return [ Z(c, b) ];

                  case "name":
                    return h.map(j, function(a, b) {
                        return a === k[1] ? b : null;
                    });

                  default:
                    return [];
                }
                if (a.nodeName && a._DT_CellIndex) return [ a._DT_CellIndex.column ];
                b = h(i).filter(a).map(function() {
                    return h.inArray(this, i);
                }).toArray();
                if (b.length || !a.nodeName) return b;
                b = h(a).closest("*[data-dt-column]");
                return b.length ? [ b.data("dt-column") ] : [];
            }, c, f);
        }, 1);
        c.selector.cols = a;
        c.selector.opts = b;
        return c;
    });
    u("columns().header()", "column().header()", function() {
        return this.iterator("column", function(a, b) {
            return a.aoColumns[b].nTh;
        }, 1);
    });
    u("columns().footer()", "column().footer()", function() {
        return this.iterator("column", function(a, b) {
            return a.aoColumns[b].nTf;
        }, 1);
    });
    u("columns().data()", "column().data()", function() {
        return this.iterator("column-rows", Ub, 1);
    });
    u("columns().dataSrc()", "column().dataSrc()", function() {
        return this.iterator("column", function(a, b) {
            return a.aoColumns[b].mData;
        }, 1);
    });
    u("columns().cache()", "column().cache()", function(a) {
        return this.iterator("column-rows", function(b, c, d, e, f) {
            return ia(b.aoData, f, "search" === a ? "_aFilterData" : "_aSortData", c);
        }, 1);
    });
    u("columns().nodes()", "column().nodes()", function() {
        return this.iterator("column-rows", function(a, b, c, d, e) {
            return ia(a.aoData, e, "anCells", b);
        }, 1);
    });
    u("columns().visible()", "column().visible()", function(a, b) {
        var c = this.iterator("column", function(b, c) {
            if (a === k) return b.aoColumns[c].bVisible;
            var f = b.aoColumns, g = f[c], j = b.aoData, i, n, l;
            if (a !== k && g.bVisible !== a) {
                if (a) {
                    var m = h.inArray(!0, D(f, "bVisible"), c + 1);
                    i = 0;
                    for (n = j.length; i < n; i++) l = j[i].nTr, f = j[i].anCells, l && l.insertBefore(f[c], f[m] || null);
                } else h(D(b.aoData, "anCells", c)).detach();
                g.bVisible = a;
                ea(b, b.aoHeader);
                ea(b, b.aoFooter);
                xa(b);
            }
        });
        a !== k && (this.iterator("column", function(c, e) {
            r(c, null, "column-visibility", [ c, e, a, b ]);
        }), (b === k || b) && this.columns.adjust());
        return c;
    });
    u("columns().indexes()", "column().index()", function(a) {
        return this.iterator("column", function(b, c) {
            return "visible" === a ? $(b, c) : c;
        }, 1);
    });
    o("columns.adjust()", function() {
        return this.iterator("table", function(a) {
            Y(a);
        }, 1);
    });
    o("column.index()", function(a, b) {
        if (0 !== this.context.length) {
            var c = this.context[0];
            if ("fromVisible" === a || "toData" === a) return Z(c, b);
            if ("fromData" === a || "toVisible" === a) return $(c, b);
        }
    });
    o("column()", function(a, b) {
        return ab(this.columns(a, b));
    });
    o("cells()", function(a, b, c) {
        h.isPlainObject(a) && (a.row === k ? (c = a, a = null) : (c = b, b = null));
        h.isPlainObject(b) && (c = b, b = null);
        if (null === b || b === k) return this.iterator("table", function(b) {
            var d = a, e = $a(c), f = b.aoData, g = Ba(b, e), j = Qb(ia(f, g, "anCells")), i = h([].concat.apply([], j)), l, n = b.aoColumns.length, m, o, u, s, r, v;
            return Za("cell", d, function(a) {
                var c = typeof a === "function";
                if (a === null || a === k || c) {
                    m = [];
                    o = 0;
                    for (u = g.length; o < u; o++) {
                        l = g[o];
                        for (s = 0; s < n; s++) {
                            r = {
                                row: l,
                                column: s
                            };
                            if (c) {
                                v = f[l];
                                a(r, B(b, l, s), v.anCells ? v.anCells[s] : null) && m.push(r);
                            } else m.push(r);
                        }
                    }
                    return m;
                }
                if (h.isPlainObject(a)) return [ a ];
                c = i.filter(a).map(function(a, b) {
                    return {
                        row: b._DT_CellIndex.row,
                        column: b._DT_CellIndex.column
                    };
                }).toArray();
                if (c.length || !a.nodeName) return c;
                v = h(a).closest("*[data-dt-row]");
                return v.length ? [ {
                    row: v.data("dt-row"),
                    column: v.data("dt-column")
                } ] : [];
            }, b, e);
        });
        var d = this.columns(b, c), e = this.rows(a, c), f, g, j, i, n, l = this.iterator("table", function(a, b) {
            f = [];
            g = 0;
            for (j = e[b].length; g < j; g++) {
                i = 0;
                for (n = d[b].length; i < n; i++) f.push({
                    row: e[b][g],
                    column: d[b][i]
                });
            }
            return f;
        }, 1);
        h.extend(l.selector, {
            cols: b,
            rows: a,
            opts: c
        });
        return l;
    });
    u("cells().nodes()", "cell().node()", function() {
        return this.iterator("cell", function(a, b, c) {
            return (a = a.aoData[b]) && a.anCells ? a.anCells[c] : k;
        }, 1);
    });
    o("cells().data()", function() {
        return this.iterator("cell", function(a, b, c) {
            return B(a, b, c);
        }, 1);
    });
    u("cells().cache()", "cell().cache()", function(a) {
        a = "search" === a ? "_aFilterData" : "_aSortData";
        return this.iterator("cell", function(b, c, d) {
            return b.aoData[c][a][d];
        }, 1);
    });
    u("cells().render()", "cell().render()", function(a) {
        return this.iterator("cell", function(b, c, d) {
            return B(b, c, d, a);
        }, 1);
    });
    u("cells().indexes()", "cell().index()", function() {
        return this.iterator("cell", function(a, b, c) {
            return {
                row: b,
                column: c,
                columnVisible: $(a, c)
            };
        }, 1);
    });
    u("cells().invalidate()", "cell().invalidate()", function(a) {
        return this.iterator("cell", function(b, c, d) {
            ca(b, c, a, d);
        });
    });
    o("cell()", function(a, b, c) {
        return ab(this.cells(a, b, c));
    });
    o("cell().data()", function(a) {
        var b = this.context, c = this[0];
        if (a === k) return b.length && c.length ? B(b[0], c[0].row, c[0].column) : k;
        ib(b[0], c[0].row, c[0].column, a);
        ca(b[0], c[0].row, "data", c[0].column);
        return this;
    });
    o("order()", function(a, b) {
        var c = this.context;
        if (a === k) return 0 !== c.length ? c[0].aaSorting : k;
        "number" === typeof a ? a = [ [ a, b ] ] : a.length && !h.isArray(a[0]) && (a = Array.prototype.slice.call(arguments));
        return this.iterator("table", function(b) {
            b.aaSorting = a.slice();
        });
    });
    o("order.listener()", function(a, b, c) {
        return this.iterator("table", function(d) {
            La(d, a, b, c);
        });
    });
    o("order.fixed()", function(a) {
        if (!a) {
            var b = this.context, b = b.length ? b[0].aaSortingFixed : k;
            return h.isArray(b) ? {
                pre: b
            } : b;
        }
        return this.iterator("table", function(b) {
            b.aaSortingFixed = h.extend(!0, {}, a);
        });
    });
    o([ "columns().order()", "column().order()" ], function(a) {
        var b = this;
        return this.iterator("table", function(c, d) {
            var e = [];
            h.each(b[d], function(b, c) {
                e.push([ c, a ]);
            });
            c.aaSorting = e;
        });
    });
    o("search()", function(a, b, c, d) {
        var e = this.context;
        return a === k ? 0 !== e.length ? e[0].oPreviousSearch.sSearch : k : this.iterator("table", function(e) {
            e.oFeatures.bFilter && fa(e, h.extend({}, e.oPreviousSearch, {
                sSearch: a + "",
                bRegex: null === b ? !1 : b,
                bSmart: null === c ? !0 : c,
                bCaseInsensitive: null === d ? !0 : d
            }), 1);
        });
    });
    u("columns().search()", "column().search()", function(a, b, c, d) {
        return this.iterator("column", function(e, f) {
            var g = e.aoPreSearchCols;
            if (a === k) return g[f].sSearch;
            e.oFeatures.bFilter && (h.extend(g[f], {
                sSearch: a + "",
                bRegex: null === b ? !1 : b,
                bSmart: null === c ? !0 : c,
                bCaseInsensitive: null === d ? !0 : d
            }), fa(e, e.oPreviousSearch, 1));
        });
    });
    o("state()", function() {
        return this.context.length ? this.context[0].oSavedState : null;
    });
    o("state.clear()", function() {
        return this.iterator("table", function(a) {
            a.fnStateSaveCallback.call(a.oInstance, a, {});
        });
    });
    o("state.loaded()", function() {
        return this.context.length ? this.context[0].oLoadedState : null;
    });
    o("state.save()", function() {
        return this.iterator("table", function(a) {
            xa(a);
        });
    });
    m.versionCheck = m.fnVersionCheck = function(a) {
        for (var b = m.version.split("."), a = a.split("."), c, d, e = 0, f = a.length; e < f; e++) if (c = parseInt(b[e], 10) || 0, 
        d = parseInt(a[e], 10) || 0, c !== d) return c > d;
        return !0;
    };
    m.isDataTable = m.fnIsDataTable = function(a) {
        var b = h(a).get(0), c = !1;
        if (a instanceof m.Api) return !0;
        h.each(m.settings, function(a, e) {
            var f = e.nScrollHead ? h("table", e.nScrollHead)[0] : null, g = e.nScrollFoot ? h("table", e.nScrollFoot)[0] : null;
            if (e.nTable === b || f === b || g === b) c = !0;
        });
        return c;
    };
    m.tables = m.fnTables = function(a) {
        var b = !1;
        h.isPlainObject(a) && (b = a.api, a = a.visible);
        var c = h.map(m.settings, function(b) {
            if (!a || a && h(b.nTable).is(":visible")) return b.nTable;
        });
        return b ? new s(c) : c;
    };
    m.camelToHungarian = I;
    o("$()", function(a, b) {
        var c = this.rows(b).nodes(), c = h(c);
        return h([].concat(c.filter(a).toArray(), c.find(a).toArray()));
    });
    h.each([ "on", "one", "off" ], function(a, b) {
        o(b + "()", function() {
            var a = Array.prototype.slice.call(arguments);
            a[0] = h.map(a[0].split(/\s/), function(a) {
                return !a.match(/\.dt\b/) ? a + ".dt" : a;
            }).join(" ");
            var d = h(this.tables().nodes());
            d[b].apply(d, a);
            return this;
        });
    });
    o("clear()", function() {
        return this.iterator("table", function(a) {
            na(a);
        });
    });
    o("settings()", function() {
        return new s(this.context, this.context);
    });
    o("init()", function() {
        var a = this.context;
        return a.length ? a[0].oInit : null;
    });
    o("data()", function() {
        return this.iterator("table", function(a) {
            return D(a.aoData, "_aData");
        }).flatten();
    });
    o("destroy()", function(a) {
        a = a || !1;
        return this.iterator("table", function(b) {
            var c = b.nTableWrapper.parentNode, d = b.oClasses, e = b.nTable, f = b.nTBody, g = b.nTHead, j = b.nTFoot, i = h(e), f = h(f), k = h(b.nTableWrapper), l = h.map(b.aoData, function(a) {
                return a.nTr;
            }), o;
            b.bDestroying = !0;
            r(b, "aoDestroyCallback", "destroy", [ b ]);
            a || new s(b).columns().visible(!0);
            k.off(".DT").find(":not(tbody *)").off(".DT");
            h(E).off(".DT-" + b.sInstance);
            e != g.parentNode && (i.children("thead").detach(), i.append(g));
            j && e != j.parentNode && (i.children("tfoot").detach(), i.append(j));
            b.aaSorting = [];
            b.aaSortingFixed = [];
            wa(b);
            h(l).removeClass(b.asStripeClasses.join(" "));
            h("th, td", g).removeClass(d.sSortable + " " + d.sSortableAsc + " " + d.sSortableDesc + " " + d.sSortableNone);
            f.children().detach();
            f.append(l);
            g = a ? "remove" : "detach";
            i[g]();
            k[g]();
            !a && c && (c.insertBefore(e, b.nTableReinsertBefore), i.css("width", b.sDestroyWidth).removeClass(d.sTable), 
            (o = b.asDestroyStripes.length) && f.children().each(function(a) {
                h(this).addClass(b.asDestroyStripes[a % o]);
            }));
            c = h.inArray(b, m.settings);
            -1 !== c && m.settings.splice(c, 1);
        });
    });
    h.each([ "column", "row", "cell" ], function(a, b) {
        o(b + "s().every()", function(a) {
            var d = this.selector.opts, e = this;
            return this.iterator(b, function(f, g, h, i, n) {
                a.call(e[b](g, "cell" === b ? h : d, "cell" === b ? d : k), g, h, i, n);
            });
        });
    });
    o("i18n()", function(a, b, c) {
        var d = this.context[0], a = Q(a)(d.oLanguage);
        a === k && (a = b);
        c !== k && h.isPlainObject(a) && (a = a[c] !== k ? a[c] : a._);
        return a.replace("%d", c);
    });
    m.version = "1.10.16";
    m.settings = [];
    m.models = {};
    m.models.oSearch = {
        bCaseInsensitive: !0,
        sSearch: "",
        bRegex: !1,
        bSmart: !0
    };
    m.models.oRow = {
        nTr: null,
        anCells: null,
        _aData: [],
        _aSortData: null,
        _aFilterData: null,
        _sFilterRow: null,
        _sRowStripe: "",
        src: null,
        idx: -1
    };
    m.models.oColumn = {
        idx: null,
        aDataSort: null,
        asSorting: null,
        bSearchable: null,
        bSortable: null,
        bVisible: null,
        _sManualType: null,
        _bAttrSrc: !1,
        fnCreatedCell: null,
        fnGetData: null,
        fnSetData: null,
        mData: null,
        mRender: null,
        nTh: null,
        nTf: null,
        sClass: null,
        sContentPadding: null,
        sDefaultContent: null,
        sName: null,
        sSortDataType: "std",
        sSortingClass: null,
        sSortingClassJUI: null,
        sTitle: null,
        sType: null,
        sWidth: null,
        sWidthOrig: null
    };
    m.defaults = {
        aaData: null,
        aaSorting: [ [ 0, "asc" ] ],
        aaSortingFixed: [],
        ajax: null,
        aLengthMenu: [ 10, 25, 50, 100 ],
        aoColumns: null,
        aoColumnDefs: null,
        aoSearchCols: [],
        asStripeClasses: null,
        bAutoWidth: !0,
        bDeferRender: !1,
        bDestroy: !1,
        bFilter: !0,
        bInfo: !0,
        bLengthChange: !0,
        bPaginate: !0,
        bProcessing: !1,
        bRetrieve: !1,
        bScrollCollapse: !1,
        bServerSide: !1,
        bSort: !0,
        bSortMulti: !0,
        bSortCellsTop: !1,
        bSortClasses: !0,
        bStateSave: !1,
        fnCreatedRow: null,
        fnDrawCallback: null,
        fnFooterCallback: null,
        fnFormatNumber: function(a) {
            return a.toString().replace(/\B(?=(\d{3})+(?!\d))/g, this.oLanguage.sThousands);
        },
        fnHeaderCallback: null,
        fnInfoCallback: null,
        fnInitComplete: null,
        fnPreDrawCallback: null,
        fnRowCallback: null,
        fnServerData: null,
        fnServerParams: null,
        fnStateLoadCallback: function(a) {
            try {
                return JSON.parse((-1 === a.iStateDuration ? sessionStorage : localStorage).getItem("DataTables_" + a.sInstance + "_" + location.pathname));
            } catch (b) {}
        },
        fnStateLoadParams: null,
        fnStateLoaded: null,
        fnStateSaveCallback: function(a, b) {
            try {
                (-1 === a.iStateDuration ? sessionStorage : localStorage).setItem("DataTables_" + a.sInstance + "_" + location.pathname, JSON.stringify(b));
            } catch (c) {}
        },
        fnStateSaveParams: null,
        iStateDuration: 7200,
        iDeferLoading: null,
        iDisplayLength: 10,
        iDisplayStart: 0,
        iTabIndex: 0,
        oClasses: {},
        oLanguage: {
            oAria: {
                sSortAscending: ": activate to sort column ascending",
                sSortDescending: ": activate to sort column descending"
            },
            oPaginate: {
                sFirst: "First",
                sLast: "Last",
                sNext: "Next",
                sPrevious: "Previous"
            },
            sEmptyTable: "No data available in table",
            sInfo: "Showing _START_ to _END_ of _TOTAL_ entries",
            sInfoEmpty: "Showing 0 to 0 of 0 entries",
            sInfoFiltered: "(filtered from _MAX_ total entries)",
            sInfoPostFix: "",
            sDecimal: "",
            sThousands: ",",
            sLengthMenu: "Show _MENU_ entries",
            sLoadingRecords: "Loading...",
            sProcessing: "Processing...",
            sSearch: "Search:",
            sSearchPlaceholder: "",
            sUrl: "",
            sZeroRecords: "No matching records found"
        },
        oSearch: h.extend({}, m.models.oSearch),
        sAjaxDataProp: "data",
        sAjaxSource: null,
        sDom: "lfrtip",
        searchDelay: null,
        sPaginationType: "simple_numbers",
        sScrollX: "",
        sScrollXInner: "",
        sScrollY: "",
        sServerMethod: "GET",
        renderer: null,
        rowId: "DT_RowId"
    };
    X(m.defaults);
    m.defaults.column = {
        aDataSort: null,
        iDataSort: -1,
        asSorting: [ "asc", "desc" ],
        bSearchable: !0,
        bSortable: !0,
        bVisible: !0,
        fnCreatedCell: null,
        mData: null,
        mRender: null,
        sCellType: "td",
        sClass: "",
        sContentPadding: "",
        sDefaultContent: null,
        sName: "",
        sSortDataType: "std",
        sTitle: null,
        sType: null,
        sWidth: null
    };
    X(m.defaults.column);
    m.models.oSettings = {
        oFeatures: {
            bAutoWidth: null,
            bDeferRender: null,
            bFilter: null,
            bInfo: null,
            bLengthChange: null,
            bPaginate: null,
            bProcessing: null,
            bServerSide: null,
            bSort: null,
            bSortMulti: null,
            bSortClasses: null,
            bStateSave: null
        },
        oScroll: {
            bCollapse: null,
            iBarWidth: 0,
            sX: null,
            sXInner: null,
            sY: null
        },
        oLanguage: {
            fnInfoCallback: null
        },
        oBrowser: {
            bScrollOversize: !1,
            bScrollbarLeft: !1,
            bBounding: !1,
            barWidth: 0
        },
        ajax: null,
        aanFeatures: [],
        aoData: [],
        aiDisplay: [],
        aiDisplayMaster: [],
        aIds: {},
        aoColumns: [],
        aoHeader: [],
        aoFooter: [],
        oPreviousSearch: {},
        aoPreSearchCols: [],
        aaSorting: null,
        aaSortingFixed: [],
        asStripeClasses: null,
        asDestroyStripes: [],
        sDestroyWidth: 0,
        aoRowCallback: [],
        aoHeaderCallback: [],
        aoFooterCallback: [],
        aoDrawCallback: [],
        aoRowCreatedCallback: [],
        aoPreDrawCallback: [],
        aoInitComplete: [],
        aoStateSaveParams: [],
        aoStateLoadParams: [],
        aoStateLoaded: [],
        sTableId: "",
        nTable: null,
        nTHead: null,
        nTFoot: null,
        nTBody: null,
        nTableWrapper: null,
        bDeferLoading: !1,
        bInitialised: !1,
        aoOpenRows: [],
        sDom: null,
        searchDelay: null,
        sPaginationType: "two_button",
        iStateDuration: 0,
        aoStateSave: [],
        aoStateLoad: [],
        oSavedState: null,
        oLoadedState: null,
        sAjaxSource: null,
        sAjaxDataProp: null,
        bAjaxDataGet: !0,
        jqXHR: null,
        json: k,
        oAjaxData: k,
        fnServerData: null,
        aoServerParams: [],
        sServerMethod: null,
        fnFormatNumber: null,
        aLengthMenu: null,
        iDraw: 0,
        bDrawing: !1,
        iDrawError: -1,
        _iDisplayLength: 10,
        _iDisplayStart: 0,
        _iRecordsTotal: 0,
        _iRecordsDisplay: 0,
        oClasses: {},
        bFiltered: !1,
        bSorted: !1,
        bSortCellsTop: null,
        oInit: null,
        aoDestroyCallback: [],
        fnRecordsTotal: function() {
            return "ssp" == y(this) ? 1 * this._iRecordsTotal : this.aiDisplayMaster.length;
        },
        fnRecordsDisplay: function() {
            return "ssp" == y(this) ? 1 * this._iRecordsDisplay : this.aiDisplay.length;
        },
        fnDisplayEnd: function() {
            var a = this._iDisplayLength, b = this._iDisplayStart, c = b + a, d = this.aiDisplay.length, e = this.oFeatures, f = e.bPaginate;
            return e.bServerSide ? !1 === f || -1 === a ? b + d : Math.min(b + a, this._iRecordsDisplay) : !f || c > d || -1 === a ? d : c;
        },
        oInstance: null,
        sInstance: null,
        iTabIndex: 0,
        nScrollHead: null,
        nScrollFoot: null,
        aLastSort: [],
        oPlugins: {},
        rowIdFn: null,
        rowId: null
    };
    m.ext = x = {
        buttons: {},
        classes: {},
        builder: "-source-",
        errMode: "alert",
        feature: [],
        search: [],
        selector: {
            cell: [],
            column: [],
            row: []
        },
        internal: {},
        legacy: {
            ajax: null
        },
        pager: {},
        renderer: {
            pageButton: {},
            header: {}
        },
        order: {},
        type: {
            detect: [],
            search: {},
            order: {}
        },
        _unique: 0,
        fnVersionCheck: m.fnVersionCheck,
        iApiIndex: 0,
        oJUIClasses: {},
        sVersion: m.version
    };
    h.extend(x, {
        afnFiltering: x.search,
        aTypes: x.type.detect,
        ofnSearch: x.type.search,
        oSort: x.type.order,
        afnSortData: x.order,
        aoFeatures: x.feature,
        oApi: x.internal,
        oStdClasses: x.classes,
        oPagination: x.pager
    });
    h.extend(m.ext.classes, {
        sTable: "dataTable",
        sNoFooter: "no-footer",
        sPageButton: "paginate_button",
        sPageButtonActive: "current",
        sPageButtonDisabled: "disabled",
        sStripeOdd: "odd",
        sStripeEven: "even",
        sRowEmpty: "dataTables_empty",
        sWrapper: "dataTables_wrapper",
        sFilter: "dataTables_filter",
        sInfo: "dataTables_info",
        sPaging: "dataTables_paginate paging_",
        sLength: "dataTables_length",
        sProcessing: "dataTables_processing",
        sSortAsc: "sorting_asc",
        sSortDesc: "sorting_desc",
        sSortable: "sorting",
        sSortableAsc: "sorting_asc_disabled",
        sSortableDesc: "sorting_desc_disabled",
        sSortableNone: "sorting_disabled",
        sSortColumn: "sorting_",
        sFilterInput: "",
        sLengthSelect: "",
        sScrollWrapper: "dataTables_scroll",
        sScrollHead: "dataTables_scrollHead",
        sScrollHeadInner: "dataTables_scrollHeadInner",
        sScrollBody: "dataTables_scrollBody",
        sScrollFoot: "dataTables_scrollFoot",
        sScrollFootInner: "dataTables_scrollFootInner",
        sHeaderTH: "",
        sFooterTH: "",
        sSortJUIAsc: "",
        sSortJUIDesc: "",
        sSortJUI: "",
        sSortJUIAscAllowed: "",
        sSortJUIDescAllowed: "",
        sSortJUIWrapper: "",
        sSortIcon: "",
        sJUIHeader: "",
        sJUIFooter: ""
    });
    var Kb = m.ext.pager;
    h.extend(Kb, {
        simple: function() {
            return [ "previous", "next" ];
        },
        full: function() {
            return [ "first", "previous", "next", "last" ];
        },
        numbers: function(a, b) {
            return [ ha(a, b) ];
        },
        simple_numbers: function(a, b) {
            return [ "previous", ha(a, b), "next" ];
        },
        full_numbers: function(a, b) {
            return [ "first", "previous", ha(a, b), "next", "last" ];
        },
        first_last_numbers: function(a, b) {
            return [ "first", ha(a, b), "last" ];
        },
        _numbers: ha,
        numbers_length: 7
    });
    h.extend(!0, m.ext.renderer, {
        pageButton: {
            _: function(a, b, c, d, e, f) {
                var g = a.oClasses, j = a.oLanguage.oPaginate, i = a.oLanguage.oAria.paginate || {}, n, l, m = 0, o = function(b, d) {
                    var k, s, u, r, v = function(b) {
                        Sa(a, b.data.action, true);
                    };
                    k = 0;
                    for (s = d.length; k < s; k++) {
                        r = d[k];
                        if (h.isArray(r)) {
                            u = h("<" + (r.DT_el || "div") + "/>").appendTo(b);
                            o(u, r);
                        } else {
                            n = null;
                            l = "";
                            switch (r) {
                              case "ellipsis":
                                b.append('<span class="ellipsis">&#x2026;</span>');
                                break;

                              case "first":
                                n = j.sFirst;
                                l = r + (e > 0 ? "" : " " + g.sPageButtonDisabled);
                                break;

                              case "previous":
                                n = j.sPrevious;
                                l = r + (e > 0 ? "" : " " + g.sPageButtonDisabled);
                                break;

                              case "next":
                                n = j.sNext;
                                l = r + (e < f - 1 ? "" : " " + g.sPageButtonDisabled);
                                break;

                              case "last":
                                n = j.sLast;
                                l = r + (e < f - 1 ? "" : " " + g.sPageButtonDisabled);
                                break;

                              default:
                                n = r + 1;
                                l = e === r ? g.sPageButtonActive : "";
                            }
                            if (n !== null) {
                                u = h("<a>", {
                                    class: g.sPageButton + " " + l,
                                    "aria-controls": a.sTableId,
                                    "aria-label": i[r],
                                    "data-dt-idx": m,
                                    tabindex: a.iTabIndex,
                                    id: c === 0 && typeof r === "string" ? a.sTableId + "_" + r : null
                                }).html(n).appendTo(b);
                                Va(u, {
                                    action: r
                                }, v);
                                m++;
                            }
                        }
                    }
                }, s;
                try {
                    s = h(b).find(G.activeElement).data("dt-idx");
                } catch (u) {}
                o(h(b).empty(), d);
                s !== k && h(b).find("[data-dt-idx=" + s + "]").focus();
            }
        }
    });
    h.extend(m.ext.type.detect, [ function(a, b) {
        var c = b.oLanguage.sDecimal;
        return Ya(a, c) ? "num" + c : null;
    }, function(a) {
        if (a && !(a instanceof Date) && !Zb.test(a)) return null;
        var b = Date.parse(a);
        return null !== b && !isNaN(b) || L(a) ? "date" : null;
    }, function(a, b) {
        var c = b.oLanguage.sDecimal;
        return Ya(a, c, !0) ? "num-fmt" + c : null;
    }, function(a, b) {
        var c = b.oLanguage.sDecimal;
        return Pb(a, c) ? "html-num" + c : null;
    }, function(a, b) {
        var c = b.oLanguage.sDecimal;
        return Pb(a, c, !0) ? "html-num-fmt" + c : null;
    }, function(a) {
        return L(a) || "string" === typeof a && -1 !== a.indexOf("<") ? "html" : null;
    } ]);
    h.extend(m.ext.type.search, {
        html: function(a) {
            return L(a) ? a : "string" === typeof a ? a.replace(Mb, " ").replace(Aa, "") : "";
        },
        string: function(a) {
            return L(a) ? a : "string" === typeof a ? a.replace(Mb, " ") : a;
        }
    });
    var za = function(a, b, c, d) {
        if (0 !== a && (!a || "-" === a)) return -Infinity;
        b && (a = Ob(a, b));
        a.replace && (c && (a = a.replace(c, "")), d && (a = a.replace(d, "")));
        return 1 * a;
    };
    h.extend(x.type.order, {
        "date-pre": function(a) {
            return Date.parse(a) || -Infinity;
        },
        "html-pre": function(a) {
            return L(a) ? "" : a.replace ? a.replace(/<.*?>/g, "").toLowerCase() : a + "";
        },
        "string-pre": function(a) {
            return L(a) ? "" : "string" === typeof a ? a.toLowerCase() : !a.toString ? "" : a.toString();
        },
        "string-asc": function(a, b) {
            return a < b ? -1 : a > b ? 1 : 0;
        },
        "string-desc": function(a, b) {
            return a < b ? 1 : a > b ? -1 : 0;
        }
    });
    cb("");
    h.extend(!0, m.ext.renderer, {
        header: {
            _: function(a, b, c, d) {
                h(a.nTable).on("order.dt.DT", function(e, f, g, h) {
                    if (a === f) {
                        e = c.idx;
                        b.removeClass(c.sSortingClass + " " + d.sSortAsc + " " + d.sSortDesc).addClass(h[e] == "asc" ? d.sSortAsc : h[e] == "desc" ? d.sSortDesc : c.sSortingClass);
                    }
                });
            },
            jqueryui: function(a, b, c, d) {
                h("<div/>").addClass(d.sSortJUIWrapper).append(b.contents()).append(h("<span/>").addClass(d.sSortIcon + " " + c.sSortingClassJUI)).appendTo(b);
                h(a.nTable).on("order.dt.DT", function(e, f, g, h) {
                    if (a === f) {
                        e = c.idx;
                        b.removeClass(d.sSortAsc + " " + d.sSortDesc).addClass(h[e] == "asc" ? d.sSortAsc : h[e] == "desc" ? d.sSortDesc : c.sSortingClass);
                        b.find("span." + d.sSortIcon).removeClass(d.sSortJUIAsc + " " + d.sSortJUIDesc + " " + d.sSortJUI + " " + d.sSortJUIAscAllowed + " " + d.sSortJUIDescAllowed).addClass(h[e] == "asc" ? d.sSortJUIAsc : h[e] == "desc" ? d.sSortJUIDesc : c.sSortingClassJUI);
                    }
                });
            }
        }
    });
    var Vb = function(a) {
        return "string" === typeof a ? a.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") : a;
    };
    m.render = {
        number: function(a, b, c, d, e) {
            return {
                display: function(f) {
                    if ("number" !== typeof f && "string" !== typeof f) return f;
                    var g = 0 > f ? "-" : "", h = parseFloat(f);
                    if (isNaN(h)) return Vb(f);
                    h = h.toFixed(c);
                    f = Math.abs(h);
                    h = parseInt(f, 10);
                    f = c ? b + (f - h).toFixed(c).substring(2) : "";
                    return g + (d || "") + h.toString().replace(/\B(?=(\d{3})+(?!\d))/g, a) + f + (e || "");
                }
            };
        },
        text: function() {
            return {
                display: Vb
            };
        }
    };
    h.extend(m.ext.internal, {
        _fnExternApiFunc: Lb,
        _fnBuildAjax: sa,
        _fnAjaxUpdate: kb,
        _fnAjaxParameters: tb,
        _fnAjaxUpdateDraw: ub,
        _fnAjaxDataSrc: ta,
        _fnAddColumn: Da,
        _fnColumnOptions: ja,
        _fnAdjustColumnSizing: Y,
        _fnVisibleToColumnIndex: Z,
        _fnColumnIndexToVisible: $,
        _fnVisbleColumns: aa,
        _fnGetColumns: la,
        _fnColumnTypes: Fa,
        _fnApplyColumnDefs: hb,
        _fnHungarianMap: X,
        _fnCamelToHungarian: I,
        _fnLanguageCompat: Ca,
        _fnBrowserDetect: fb,
        _fnAddData: M,
        _fnAddTr: ma,
        _fnNodeToDataIndex: function(a, b) {
            return b._DT_RowIndex !== k ? b._DT_RowIndex : null;
        },
        _fnNodeToColumnIndex: function(a, b, c) {
            return h.inArray(c, a.aoData[b].anCells);
        },
        _fnGetCellData: B,
        _fnSetCellData: ib,
        _fnSplitObjNotation: Ia,
        _fnGetObjectDataFn: Q,
        _fnSetObjectDataFn: R,
        _fnGetDataMaster: Ja,
        _fnClearTable: na,
        _fnDeleteIndex: oa,
        _fnInvalidate: ca,
        _fnGetRowElements: Ha,
        _fnCreateTr: Ga,
        _fnBuildHead: jb,
        _fnDrawHead: ea,
        _fnDraw: N,
        _fnReDraw: S,
        _fnAddOptionsHtml: mb,
        _fnDetectHeader: da,
        _fnGetUniqueThs: ra,
        _fnFeatureHtmlFilter: ob,
        _fnFilterComplete: fa,
        _fnFilterCustom: xb,
        _fnFilterColumn: wb,
        _fnFilter: vb,
        _fnFilterCreateSearch: Oa,
        _fnEscapeRegex: Pa,
        _fnFilterData: yb,
        _fnFeatureHtmlInfo: rb,
        _fnUpdateInfo: Bb,
        _fnInfoMacros: Cb,
        _fnInitialise: ga,
        _fnInitComplete: ua,
        _fnLengthChange: Qa,
        _fnFeatureHtmlLength: nb,
        _fnFeatureHtmlPaginate: sb,
        _fnPageChange: Sa,
        _fnFeatureHtmlProcessing: pb,
        _fnProcessingDisplay: C,
        _fnFeatureHtmlTable: qb,
        _fnScrollDraw: ka,
        _fnApplyToChildren: H,
        _fnCalculateColumnWidths: Ea,
        _fnThrottle: Na,
        _fnConvertToWidth: Db,
        _fnGetWidestNode: Eb,
        _fnGetMaxLenString: Fb,
        _fnStringToCss: v,
        _fnSortFlatten: V,
        _fnSort: lb,
        _fnSortAria: Hb,
        _fnSortListener: Ua,
        _fnSortAttachListener: La,
        _fnSortingClasses: wa,
        _fnSortData: Gb,
        _fnSaveState: xa,
        _fnLoadState: Ib,
        _fnSettingsFromNode: ya,
        _fnLog: J,
        _fnMap: F,
        _fnBindAction: Va,
        _fnCallbackReg: z,
        _fnCallbackFire: r,
        _fnLengthOverflow: Ra,
        _fnRenderer: Ma,
        _fnDataSource: y,
        _fnRowAttributes: Ka,
        _fnCalculateEnd: function() {}
    });
    h.fn.dataTable = m;
    m.$ = h;
    h.fn.dataTableSettings = m.settings;
    h.fn.dataTableExt = m.ext;
    h.fn.DataTable = function(a) {
        return h(this).dataTable(a).api();
    };
    h.each(m, function(a, b) {
        h.fn.DataTable[a] = b;
    });
    return h.fn.dataTable;
});

/*!
 DataTables Bootstrap 3 integration
 ©2011-2015 SpryMedia Ltd - datatables.net/license
*/
(function(b) {
    "function" === typeof define && define.amd ? define([ "jquery", "datatables.net" ], function(a) {
        return b(a, window, document);
    }) : "object" === typeof exports ? module.exports = function(a, d) {
        a || (a = window);
        if (!d || !d.fn.dataTable) d = require("datatables.net")(a, d).$;
        return b(d, a, a.document);
    } : b(jQuery, window, document);
})(function(b, a, d, m) {
    var f = b.fn.dataTable;
    b.extend(!0, f.defaults, {
        dom: "<'row'<'col-sm-12 col-md-6'l><'col-sm-12 col-md-6'f>><'row'<'col-sm-12'tr>><'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
        renderer: "bootstrap"
    });
    b.extend(f.ext.classes, {
        sWrapper: "dataTables_wrapper container-fluid dt-bootstrap4",
        sFilterInput: "form-control form-control-sm",
        sLengthSelect: "form-control form-control-sm",
        sProcessing: "dataTables_processing card",
        sPageButton: "paginate_button page-item"
    });
    f.ext.renderer.pageButton.bootstrap = function(a, h, r, s, j, n) {
        var o = new f.Api(a), t = a.oClasses, k = a.oLanguage.oPaginate, u = a.oLanguage.oAria.paginate || {}, e, g, p = 0, q = function(d, f) {
            var l, h, i, c, m = function(a) {
                a.preventDefault();
                !b(a.currentTarget).hasClass("disabled") && o.page() != a.data.action && o.page(a.data.action).draw("page");
            };
            l = 0;
            for (h = f.length; l < h; l++) if (c = f[l], b.isArray(c)) q(d, c); else {
                g = e = "";
                switch (c) {
                  case "ellipsis":
                    e = "&#x2026;";
                    g = "disabled";
                    break;

                  case "first":
                    e = k.sFirst;
                    g = c + (0 < j ? "" : " disabled");
                    break;

                  case "previous":
                    e = k.sPrevious;
                    g = c + (0 < j ? "" : " disabled");
                    break;

                  case "next":
                    e = k.sNext;
                    g = c + (j < n - 1 ? "" : " disabled");
                    break;

                  case "last":
                    e = k.sLast;
                    g = c + (j < n - 1 ? "" : " disabled");
                    break;

                  default:
                    e = c + 1, g = j === c ? "active" : "";
                }
                e && (i = b("<li>", {
                    class: t.sPageButton + " " + g,
                    id: 0 === r && "string" === typeof c ? a.sTableId + "_" + c : null
                }).append(b("<a>", {
                    href: "#",
                    "aria-controls": a.sTableId,
                    "aria-label": u[c],
                    "data-dt-idx": p,
                    tabindex: a.iTabIndex,
                    class: "page-link"
                }).html(e)).appendTo(d), a.oApi._fnBindAction(i, {
                    action: c
                }, m), p++);
            }
        }, i;
        try {
            i = b(h).find(d.activeElement).data("dt-idx");
        } catch (v) {}
        q(b(h).empty().html('<ul class="pagination"/>').children("ul"), s);
        i !== m && b(h).find("[data-dt-idx=" + i + "]").focus();
    };
    return f;
});

/*
 * @license jQuery Basictable | MIT | Jerry Low | https://www.github.com/jerrylow/basictable
 */
!function(t) {
    t.fn.basictable = function(a) {
        var e = function(a, e, n) {
            a.children().each(function() {
                var a = t(this);
                if ("" !== a.html() && "&nbsp;" !== a.html() || n.showEmptyCells) {
                    for (var r = a.index(), i = "", s = 0; s < e.length; s++) {
                        0 != s && (i += ": "), i += e[s][r].text();
                    }
                    a.attr("data-th", i), n.contentWrap && !a.children().hasClass("bt-content") && a.wrapInner('<span class="bt-content" />');
                } else a.addClass("bt-hide");
            });
        }, n = function(a, e) {
            e.forceResponsive ? null !== e.breakpoint && t(window).width() <= e.breakpoint || null !== e.containerBreakpoint && a.parent().width() <= e.containerBreakpoint ? r(a, e) : i(a, e) : a.removeClass("bt").outerWidth() > a.parent().width() ? r(a, e) : i(a, e);
        }, r = function(t, a) {
            t.addClass("bt"), a.header || t.addClass("bt--no-header"), a.tableWrap && t.parent(".bt-wrapper").addClass("active");
        }, i = function(t, a) {
            t.removeClass("bt bt--no-header"), a.tableWrap && t.parent(".bt-wrapper").removeClass("active");
        }, s = function(a, e) {
            var n;
            a.removeClass("bt bt--no-header"), a.find("td").removeAttr("data-th"), e.tableWrap && a.unwrap(), 
            e.contentWrap && (n = a, t.each(n.find("td"), function() {
                var a = t(this), e = a.children(".bt-content").html();
                a.html(e);
            })), a.removeData("basictable");
        };
        this.each(function() {
            var o = t(this);
            if (0 === o.length || o.data("basictable")) return o.data("basictable") && ("destroy" == a ? s(o, o.data("basictable")) : "start" === a ? r(o, o.data("basictable")) : "stop" === a ? i(o, o.data("basictable")) : n(o, o.data("basictable"))), 
            !1;
            var l = t.extend({}, t.fn.basictable.defaults, a), b = {
                breakpoint: l.breakpoint,
                containerBreakpoint: l.containerBreakpoint,
                contentWrap: l.contentWrap,
                forceResponsive: l.forceResponsive,
                noResize: l.noResize,
                tableWrap: l.tableWrap,
                showEmptyCells: l.showEmptyCells,
                header: l.header
            };
            null === b.breakpoint && null === b.containerBreakpoint && (b.breakpoint = 568), 
            o.data("basictable", b), function(a, n) {
                var r = [];
                if (n.tableWrap && a.wrap('<div class="bt-wrapper"></div>'), n.header) {
                    var i = "";
                    i = a.find("thead tr th").length ? "thead th" : a.find("tbody tr th").length ? "tbody tr th" : a.find("th").length ? "tr:first th" : "tr:first td", 
                    t.each(a.find(i), function() {
                        var a = t(this), e = parseInt(a.attr("colspan"), 10) || 1, n = a.closest("tr").index();
                        r[n] || (r[n] = []);
                        for (var i = 0; i < e; i++) r[n].push(a);
                    });
                }
                t.each(a.find("tbody tr"), function() {
                    e(t(this), r, n);
                }), t.each(a.find("tfoot tr"), function() {
                    e(t(this), r, n);
                });
            }(o, o.data("basictable")), b.noResize || (n(o, o.data("basictable")), t(window).bind("resize.basictable", function() {
                var t;
                (t = o).data("basictable") && n(t, t.data("basictable"));
            }));
        });
    }, t.fn.basictable.defaults = {
        breakpoint: null,
        containerBreakpoint: null,
        contentWrap: !0,
        forceResponsive: !0,
        noResize: !1,
        tableWrap: !1,
        showEmptyCells: !1,
        header: !0
    };
}(jQuery);

!function(e, t, n) {
    "use strict";
    !function o(e, t, n) {
        function a(s, l) {
            if (!t[s]) {
                if (!e[s]) {
                    var i = "function" == typeof require && require;
                    if (!l && i) return i(s, !0);
                    if (r) return r(s, !0);
                    var u = new Error("Cannot find module '" + s + "'");
                    throw u.code = "MODULE_NOT_FOUND", u;
                }
                var c = t[s] = {
                    exports: {}
                };
                e[s][0].call(c.exports, function(t) {
                    var n = e[s][1][t];
                    return a(n ? n : t);
                }, c, c.exports, o, e, t, n);
            }
            return t[s].exports;
        }
        for (var r = "function" == typeof require && require, s = 0; s < n.length; s++) a(n[s]);
        return a;
    }({
        1: [ function(o, a, r) {
            var s = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            };
            Object.defineProperty(r, "__esModule", {
                value: !0
            });
            var l, i, u, c, d = o("./modules/handle-dom"), f = o("./modules/utils"), p = o("./modules/handle-swal-dom"), m = o("./modules/handle-click"), v = o("./modules/handle-key"), y = s(v), h = o("./modules/default-params"), b = s(h), g = o("./modules/set-params"), w = s(g);
            r["default"] = u = c = function() {
                function o(e) {
                    var t = a;
                    return t[e] === n ? b["default"][e] : t[e];
                }
                var a = arguments[0];
                if (d.addClass(t.body, "stop-scrolling"), p.resetInput(), a === n) return f.logStr("SweetAlert expects at least 1 attribute!"), 
                !1;
                var r = f.extend({}, b["default"]);
                switch (typeof a) {
                  case "string":
                    r.title = a, r.text = arguments[1] || "", r.type = arguments[2] || "";
                    break;

                  case "object":
                    if (a.title === n) return f.logStr('Missing "title" argument!'), !1;
                    r.title = a.title;
                    for (var s in b["default"]) r[s] = o(s);
                    r.confirmButtonText = r.showCancelButton ? "Confirm" : b["default"].confirmButtonText, 
                    r.confirmButtonText = o("confirmButtonText"), r.doneFunction = arguments[1] || null;
                    break;

                  default:
                    return f.logStr('Unexpected type of argument! Expected "string" or "object", got ' + typeof a), 
                    !1;
                }
                w["default"](r), p.fixVerticalPosition(), p.openModal(arguments[1]);
                for (var u = p.getModal(), v = u.querySelectorAll("button"), h = [ "onclick", "onmouseover", "onmouseout", "onmousedown", "onmouseup", "onfocus" ], g = function(e) {
                    return m.handleButton(e, r, u);
                }, C = 0; C < v.length; C++) for (var S = 0; S < h.length; S++) {
                    var x = h[S];
                    v[C][x] = g;
                }
                p.getOverlay().onclick = g, l = e.onkeydown;
                var k = function(e) {
                    return y["default"](e, r, u);
                };
                e.onkeydown = k, e.onfocus = function() {
                    setTimeout(function() {
                        i !== n && (i.focus(), i = n);
                    }, 0);
                }, c.enableButtons();
            }, u.setDefaults = c.setDefaults = function(e) {
                if (!e) throw new Error("userParams is required");
                if ("object" != typeof e) throw new Error("userParams has to be a object");
                f.extend(b["default"], e);
            }, u.close = c.close = function() {
                var o = p.getModal();
                d.fadeOut(p.getOverlay(), 5), d.fadeOut(o, 5), d.removeClass(o, "showSweetAlert"), 
                d.addClass(o, "hideSweetAlert"), d.removeClass(o, "visible");
                var a = o.querySelector(".sa-icon.sa-success");
                d.removeClass(a, "animate"), d.removeClass(a.querySelector(".sa-tip"), "animateSuccessTip"), 
                d.removeClass(a.querySelector(".sa-long"), "animateSuccessLong");
                var r = o.querySelector(".sa-icon.sa-error");
                d.removeClass(r, "animateErrorIcon"), d.removeClass(r.querySelector(".sa-x-mark"), "animateXMark");
                var s = o.querySelector(".sa-icon.sa-warning");
                return d.removeClass(s, "pulseWarning"), d.removeClass(s.querySelector(".sa-body"), "pulseWarningIns"), 
                d.removeClass(s.querySelector(".sa-dot"), "pulseWarningIns"), setTimeout(function() {
                    var e = o.getAttribute("data-custom-class");
                    d.removeClass(o, e);
                }, 300), d.removeClass(t.body, "stop-scrolling"), e.onkeydown = l, e.previousActiveElement && e.previousActiveElement.focus(), 
                i = n, clearTimeout(o.timeout), !0;
            }, u.showInputError = c.showInputError = function(e) {
                var t = p.getModal(), n = t.querySelector(".sa-input-error");
                d.addClass(n, "show");
                var o = t.querySelector(".sa-error-container");
                d.addClass(o, "show"), o.querySelector("p").innerHTML = e, setTimeout(function() {
                    u.enableButtons();
                }, 1), t.querySelector("input").focus();
            }, u.resetInputError = c.resetInputError = function(e) {
                if (e && 13 === e.keyCode) return !1;
                var t = p.getModal(), n = t.querySelector(".sa-input-error");
                d.removeClass(n, "show");
                var o = t.querySelector(".sa-error-container");
                d.removeClass(o, "show");
            }, u.disableButtons = c.disableButtons = function() {
                var e = p.getModal(), t = e.querySelector("button.confirm"), n = e.querySelector("button.cancel");
                t.disabled = !0, n.disabled = !0;
            }, u.enableButtons = c.enableButtons = function() {
                var e = p.getModal(), t = e.querySelector("button.confirm"), n = e.querySelector("button.cancel");
                t.disabled = !1, n.disabled = !1;
            }, "undefined" != typeof e ? e.sweetAlert = e.swal = u : f.logStr("SweetAlert is a frontend module!"), 
            a.exports = r["default"];
        }, {
            "./modules/default-params": 2,
            "./modules/handle-click": 3,
            "./modules/handle-dom": 4,
            "./modules/handle-key": 5,
            "./modules/handle-swal-dom": 6,
            "./modules/set-params": 8,
            "./modules/utils": 9
        } ],
        2: [ function(e, t, n) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var o = {
                title: "",
                text: "",
                type: null,
                allowOutsideClick: !1,
                showConfirmButton: !0,
                showCancelButton: !1,
                closeOnConfirm: !0,
                closeOnCancel: !0,
                confirmButtonText: "OK",
                confirmButtonColor: "#8CD4F5",
                cancelButtonText: "Cancel",
                imageUrl: null,
                imageSize: null,
                timer: null,
                customClass: "",
                html: !1,
                animation: !0,
                allowEscapeKey: !0,
                inputType: "text",
                inputPlaceholder: "",
                inputValue: "",
                showLoaderOnConfirm: !1
            };
            n["default"] = o, t.exports = n["default"];
        }, {} ],
        3: [ function(t, n, o) {
            Object.defineProperty(o, "__esModule", {
                value: !0
            });
            var a = t("./utils"), r = (t("./handle-swal-dom"), t("./handle-dom")), s = function(t, n, o) {
                function s(e) {
                    m && n.confirmButtonColor && (p.style.backgroundColor = e);
                }
                var u, c, d, f = t || e.event, p = f.target || f.srcElement, m = -1 !== p.className.indexOf("confirm"), v = -1 !== p.className.indexOf("sweet-overlay"), y = r.hasClass(o, "visible"), h = n.doneFunction && "true" === o.getAttribute("data-has-done-function");
                switch (m && n.confirmButtonColor && (u = n.confirmButtonColor, c = a.colorLuminance(u, -.04), 
                d = a.colorLuminance(u, -.14)), f.type) {
                  case "mouseover":
                    s(c);
                    break;

                  case "mouseout":
                    s(u);
                    break;

                  case "mousedown":
                    s(d);
                    break;

                  case "mouseup":
                    s(c);
                    break;

                  case "focus":
                    var b = o.querySelector("button.confirm"), g = o.querySelector("button.cancel");
                    m ? g.style.boxShadow = "none" : b.style.boxShadow = "none";
                    break;

                  case "click":
                    var w = o === p, C = r.isDescendant(o, p);
                    if (!w && !C && y && !n.allowOutsideClick) break;
                    m && h && y ? l(o, n) : h && y || v ? i(o, n) : r.isDescendant(o, p) && "BUTTON" === p.tagName && sweetAlert.close();
                }
            }, l = function(e, t) {
                var n = !0;
                r.hasClass(e, "show-input") && (n = e.querySelector("input").value, n || (n = "")), 
                t.doneFunction(n), t.closeOnConfirm && sweetAlert.close(), t.showLoaderOnConfirm && sweetAlert.disableButtons();
            }, i = function(e, t) {
                var n = String(t.doneFunction).replace(/\s/g, ""), o = "function(" === n.substring(0, 9) && ")" !== n.substring(9, 10);
                o && t.doneFunction(!1), t.closeOnCancel && sweetAlert.close();
            };
            o["default"] = {
                handleButton: s,
                handleConfirm: l,
                handleCancel: i
            }, n.exports = o["default"];
        }, {
            "./handle-dom": 4,
            "./handle-swal-dom": 6,
            "./utils": 9
        } ],
        4: [ function(n, o, a) {
            Object.defineProperty(a, "__esModule", {
                value: !0
            });
            var r = function(e, t) {
                return new RegExp(" " + t + " ").test(" " + e.className + " ");
            }, s = function(e, t) {
                r(e, t) || (e.className += " " + t);
            }, l = function(e, t) {
                var n = " " + e.className.replace(/[\t\r\n]/g, " ") + " ";
                if (r(e, t)) {
                    for (;n.indexOf(" " + t + " ") >= 0; ) n = n.replace(" " + t + " ", " ");
                    e.className = n.replace(/^\s+|\s+$/g, "");
                }
            }, i = function(e) {
                var n = t.createElement("div");
                return n.appendChild(t.createTextNode(e)), n.innerHTML;
            }, u = function(e) {
                e.style.opacity = "", e.style.display = "block";
            }, c = function(e) {
                if (e && !e.length) return u(e);
                for (var t = 0; t < e.length; ++t) u(e[t]);
            }, d = function(e) {
                e.style.opacity = "", e.style.display = "none";
            }, f = function(e) {
                if (e && !e.length) return d(e);
                for (var t = 0; t < e.length; ++t) d(e[t]);
            }, p = function(e, t) {
                for (var n = t.parentNode; null !== n; ) {
                    if (n === e) return !0;
                    n = n.parentNode;
                }
                return !1;
            }, m = function(e) {
                e.style.left = "-9999px", e.style.display = "block";
                var t, n = e.clientHeight;
                return t = "undefined" != typeof getComputedStyle ? parseInt(getComputedStyle(e).getPropertyValue("padding-top"), 10) : parseInt(e.currentStyle.padding), 
                e.style.left = "", e.style.display = "none", "-" + parseInt((n + t) / 2) + "px";
            }, v = function(e, t) {
                if (+e.style.opacity < 1) {
                    t = t || 16, e.style.opacity = 0, e.style.display = "block";
                    var n = +new Date(), o = function(e) {
                        function t() {
                            return e.apply(this, arguments);
                        }
                        return t.toString = function() {
                            return e.toString();
                        }, t;
                    }(function() {
                        e.style.opacity = +e.style.opacity + (new Date() - n) / 100, n = +new Date(), +e.style.opacity < 1 && setTimeout(o, t);
                    });
                    o();
                }
                e.style.display = "block";
            }, y = function(e, t) {
                t = t || 16, e.style.opacity = 1;
                var n = +new Date(), o = function(e) {
                    function t() {
                        return e.apply(this, arguments);
                    }
                    return t.toString = function() {
                        return e.toString();
                    }, t;
                }(function() {
                    e.style.opacity = +e.style.opacity - (new Date() - n) / 100, n = +new Date(), +e.style.opacity > 0 ? setTimeout(o, t) : e.style.display = "none";
                });
                o();
            }, h = function(n) {
                if ("function" == typeof MouseEvent) {
                    var o = new MouseEvent("click", {
                        view: e,
                        bubbles: !1,
                        cancelable: !0
                    });
                    n.dispatchEvent(o);
                } else if (t.createEvent) {
                    var a = t.createEvent("MouseEvents");
                    a.initEvent("click", !1, !1), n.dispatchEvent(a);
                } else t.createEventObject ? n.fireEvent("onclick") : "function" == typeof n.onclick && n.onclick();
            }, b = function(t) {
                "function" == typeof t.stopPropagation ? (t.stopPropagation(), t.preventDefault()) : e.event && e.event.hasOwnProperty("cancelBubble") && (e.event.cancelBubble = !0);
            };
            a.hasClass = r, a.addClass = s, a.removeClass = l, a.escapeHtml = i, a._show = u, 
            a.show = c, a._hide = d, a.hide = f, a.isDescendant = p, a.getTopMargin = m, a.fadeIn = v, 
            a.fadeOut = y, a.fireClick = h, a.stopEventPropagation = b;
        }, {} ],
        5: [ function(t, o, a) {
            Object.defineProperty(a, "__esModule", {
                value: !0
            });
            var r = t("./handle-dom"), s = t("./handle-swal-dom"), l = function(t, o, a) {
                var l = t || e.event, i = l.keyCode || l.which, u = a.querySelector("button.confirm"), c = a.querySelector("button.cancel"), d = a.querySelectorAll("button[tabindex]");
                if (-1 !== [ 9, 13, 32, 27 ].indexOf(i)) {
                    for (var f = l.target || l.srcElement, p = -1, m = 0; m < d.length; m++) if (f === d[m]) {
                        p = m;
                        break;
                    }
                    9 === i ? (f = -1 === p ? u : p === d.length - 1 ? d[0] : d[p + 1], r.stopEventPropagation(l), 
                    f.focus(), o.confirmButtonColor && s.setFocusStyle(f, o.confirmButtonColor)) : 13 === i ? ("INPUT" === f.tagName && (f = u, 
                    u.focus()), f = -1 === p ? u : n) : 27 === i && o.allowEscapeKey === !0 ? (f = c, 
                    r.fireClick(f, l)) : f = n;
                }
            };
            a["default"] = l, o.exports = a["default"];
        }, {
            "./handle-dom": 4,
            "./handle-swal-dom": 6
        } ],
        6: [ function(n, o, a) {
            var r = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            };
            Object.defineProperty(a, "__esModule", {
                value: !0
            });
            var s = n("./utils"), l = n("./handle-dom"), i = n("./default-params"), u = r(i), c = n("./injected-html"), d = r(c), f = ".sweet-alert", p = ".sweet-overlay", m = function() {
                var e = t.createElement("div");
                for (e.innerHTML = d["default"]; e.firstChild; ) t.body.appendChild(e.firstChild);
            }, v = function(e) {
                function t() {
                    return e.apply(this, arguments);
                }
                return t.toString = function() {
                    return e.toString();
                }, t;
            }(function() {
                var e = t.querySelector(f);
                return e || (m(), e = v()), e;
            }), y = function() {
                var e = v();
                return e ? e.querySelector("input") : void 0;
            }, h = function() {
                return t.querySelector(p);
            }, b = function(e, t) {
                var n = s.hexToRgb(t);
                e.style.boxShadow = "0 0 2px rgba(" + n + ", 0.8), inset 0 0 0 1px rgba(0, 0, 0, 0.05)";
            }, g = function(n) {
                var o = v();
                l.fadeIn(h(), 10), l.show(o), l.addClass(o, "showSweetAlert"), l.removeClass(o, "hideSweetAlert"), 
                e.previousActiveElement = t.activeElement;
                var a = o.querySelector("button.confirm");
                a.focus(), setTimeout(function() {
                    l.addClass(o, "visible");
                }, 500);
                var r = o.getAttribute("data-timer");
                if ("null" !== r && "" !== r) {
                    var s = n;
                    o.timeout = setTimeout(function() {
                        var e = (s || null) && "true" === o.getAttribute("data-has-done-function");
                        e ? s(null) : sweetAlert.close();
                    }, r);
                }
            }, w = function() {
                var e = v(), t = y();
                l.removeClass(e, "show-input"), t.value = u["default"].inputValue, t.setAttribute("type", u["default"].inputType), 
                t.setAttribute("placeholder", u["default"].inputPlaceholder), C();
            }, C = function(e) {
                if (e && 13 === e.keyCode) return !1;
                var t = v(), n = t.querySelector(".sa-input-error");
                l.removeClass(n, "show");
                var o = t.querySelector(".sa-error-container");
                l.removeClass(o, "show");
            }, S = function() {
                var e = v();
                e.style.marginTop = l.getTopMargin(v());
            };
            a.sweetAlertInitialize = m, a.getModal = v, a.getOverlay = h, a.getInput = y, a.setFocusStyle = b, 
            a.openModal = g, a.resetInput = w, a.resetInputError = C, a.fixVerticalPosition = S;
        }, {
            "./default-params": 2,
            "./handle-dom": 4,
            "./injected-html": 7,
            "./utils": 9
        } ],
        7: [ function(e, t, n) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var o = '<div class="sweet-overlay" tabIndex="-1"></div><div class="sweet-alert"><div class="sa-icon sa-error">\n      <span class="sa-x-mark">\n        <span class="sa-line sa-left"></span>\n        <span class="sa-line sa-right"></span>\n      </span>\n    </div><div class="sa-icon sa-warning">\n      <span class="sa-body"></span>\n      <span class="sa-dot"></span>\n    </div><div class="sa-icon sa-info"></div><div class="sa-icon sa-success">\n      <span class="sa-line sa-tip"></span>\n      <span class="sa-line sa-long"></span>\n\n      <div class="sa-placeholder"></div>\n      <div class="sa-fix"></div>\n    </div><div class="sa-icon sa-custom"></div><h2>Title</h2>\n    <p>Text</p>\n    <fieldset>\n      <input type="text" tabIndex="3" />\n      <div class="sa-input-error"></div>\n    </fieldset><div class="sa-error-container">\n      <div class="icon">!</div>\n      <p>Not valid!</p>\n    </div><div class="sa-button-container">\n      <button class="cancel" tabIndex="2">Cancel</button>\n      <div class="sa-confirm-button-container">\n        <button class="confirm" tabIndex="1">OK</button><div class="la-ball-fall">\n          <div></div>\n          <div></div>\n          <div></div>\n        </div>\n      </div>\n    </div></div>';
            n["default"] = o, t.exports = n["default"];
        }, {} ],
        8: [ function(e, t, o) {
            Object.defineProperty(o, "__esModule", {
                value: !0
            });
            var a = e("./utils"), r = e("./handle-swal-dom"), s = e("./handle-dom"), l = [ "error", "warning", "info", "success", "input", "prompt" ], i = function(e) {
                var t = r.getModal(), o = t.querySelector("h2"), i = t.querySelector("p"), u = t.querySelector("button.cancel"), c = t.querySelector("button.confirm");
                if (o.innerHTML = e.html ? e.title : s.escapeHtml(e.title).split("\n").join("<br>"), 
                i.innerHTML = e.html ? e.text : s.escapeHtml(e.text || "").split("\n").join("<br>"), 
                e.text && s.show(i), e.customClass) s.addClass(t, e.customClass), t.setAttribute("data-custom-class", e.customClass); else {
                    var d = t.getAttribute("data-custom-class");
                    s.removeClass(t, d), t.setAttribute("data-custom-class", "");
                }
                if (s.hide(t.querySelectorAll(".sa-icon")), e.type && !a.isIE8()) {
                    var f = function() {
                        for (var o = !1, a = 0; a < l.length; a++) if (e.type === l[a]) {
                            o = !0;
                            break;
                        }
                        if (!o) return logStr("Unknown alert type: " + e.type), {
                            v: !1
                        };
                        var i = [ "success", "error", "warning", "info" ], u = n;
                        -1 !== i.indexOf(e.type) && (u = t.querySelector(".sa-icon.sa-" + e.type), s.show(u));
                        var c = r.getInput();
                        switch (e.type) {
                          case "success":
                            s.addClass(u, "animate"), s.addClass(u.querySelector(".sa-tip"), "animateSuccessTip"), 
                            s.addClass(u.querySelector(".sa-long"), "animateSuccessLong");
                            break;

                          case "error":
                            s.addClass(u, "animateErrorIcon"), s.addClass(u.querySelector(".sa-x-mark"), "animateXMark");
                            break;

                          case "warning":
                            s.addClass(u, "pulseWarning"), s.addClass(u.querySelector(".sa-body"), "pulseWarningIns"), 
                            s.addClass(u.querySelector(".sa-dot"), "pulseWarningIns");
                            break;

                          case "input":
                          case "prompt":
                            c.setAttribute("type", e.inputType), c.value = e.inputValue, c.setAttribute("placeholder", e.inputPlaceholder), 
                            s.addClass(t, "show-input"), setTimeout(function() {
                                c.focus(), c.addEventListener("keyup", swal.resetInputError);
                            }, 400);
                        }
                    }();
                    if ("object" == typeof f) return f.v;
                }
                if (e.imageUrl) {
                    var p = t.querySelector(".sa-icon.sa-custom");
                    p.style.backgroundImage = "url(" + e.imageUrl + ")", s.show(p);
                    var m = 80, v = 80;
                    if (e.imageSize) {
                        var y = e.imageSize.toString().split("x"), h = y[0], b = y[1];
                        h && b ? (m = h, v = b) : logStr("Parameter imageSize expects value with format WIDTHxHEIGHT, got " + e.imageSize);
                    }
                    p.setAttribute("style", p.getAttribute("style") + "width:" + m + "px; height:" + v + "px");
                }
                t.setAttribute("data-has-cancel-button", e.showCancelButton), e.showCancelButton ? u.style.display = "inline-block" : s.hide(u), 
                t.setAttribute("data-has-confirm-button", e.showConfirmButton), e.showConfirmButton ? c.style.display = "inline-block" : s.hide(c), 
                e.cancelButtonText && (u.innerHTML = s.escapeHtml(e.cancelButtonText)), e.confirmButtonText && (c.innerHTML = s.escapeHtml(e.confirmButtonText)), 
                e.confirmButtonColor && (c.style.backgroundColor = e.confirmButtonColor, c.style.borderLeftColor = e.confirmLoadingButtonColor, 
                c.style.borderRightColor = e.confirmLoadingButtonColor, r.setFocusStyle(c, e.confirmButtonColor)), 
                t.setAttribute("data-allow-outside-click", e.allowOutsideClick);
                var g = e.doneFunction ? !0 : !1;
                t.setAttribute("data-has-done-function", g), e.animation ? "string" == typeof e.animation ? t.setAttribute("data-animation", e.animation) : t.setAttribute("data-animation", "pop") : t.setAttribute("data-animation", "none"), 
                t.setAttribute("data-timer", e.timer);
            };
            o["default"] = i, t.exports = o["default"];
        }, {
            "./handle-dom": 4,
            "./handle-swal-dom": 6,
            "./utils": 9
        } ],
        9: [ function(t, n, o) {
            Object.defineProperty(o, "__esModule", {
                value: !0
            });
            var a = function(e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                return e;
            }, r = function(e) {
                var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
                return t ? parseInt(t[1], 16) + ", " + parseInt(t[2], 16) + ", " + parseInt(t[3], 16) : null;
            }, s = function() {
                return e.attachEvent && !e.addEventListener;
            }, l = function(t) {
                e.console && e.console.log("SweetAlert: " + t);
            }, i = function(e, t) {
                e = String(e).replace(/[^0-9a-f]/gi, ""), e.length < 6 && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]), 
                t = t || 0;
                var n, o, a = "#";
                for (o = 0; 3 > o; o++) n = parseInt(e.substr(2 * o, 2), 16), n = Math.round(Math.min(Math.max(0, n + n * t), 255)).toString(16), 
                a += ("00" + n).substr(n.length);
                return a;
            };
            o.extend = a, o.hexToRgb = r, o.isIE8 = s, o.logStr = l, o.colorLuminance = i;
        }, {} ]
    }, {}, [ 1 ]), "function" == typeof define && define.amd ? define(function() {
        return sweetAlert;
    }) : "undefined" != typeof module && module.exports && (module.exports = sweetAlert);
}(window, document);