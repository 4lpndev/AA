(self.webpackChunk_N_E = self.webpackChunk_N_E || [])
.push([
    [1593], {
        62484: function (t, e, n) {
            "use strict";
            var a, o = n(67294);
            
            function _extends() {
                return (_extends = Object.assign ? Object.assign.bind() : function (t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var n = arguments[e];
                            for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a])
                        }
                        return t
                    })
                    .apply(this, arguments)
            }
            e.Z = function (t) {
                return o.createElement("svg", _extends({
                    fill: "#8690bf"
                    , xmlns: "http://www.w3.org/2000/svg"
                    , viewBox: "0 0 318.293 318.293"
                    , style: {
                        enableBackground: "new 0 0 318.293 318.293"
                    }
                    , xmlSpace: "preserve"
                }, t), a || (a = o.createElement("path", {
                    d: "M159.148 0c-52.696 0-95.544 39.326-95.544 87.662h47.736c0-22.007 21.438-39.927 47.808-39.927 26.367 0 47.804 17.92 47.804 39.927v6.929c0 23.39-10.292 34.31-25.915 50.813-20.371 21.531-45.744 48.365-45.744 105.899h47.745c0-38.524 15.144-54.568 32.692-73.12 17.368-18.347 38.96-41.192 38.96-83.592v-6.929C254.689 39.326 211.845 0 159.148 0zM134.475 277.996h49.968v40.297h-49.968z"
                })))
            }
        }
        , 76005: function (t, e, n) {
            (window.__NEXT_P = window.__NEXT_P || [])
            .push(["/mines", function () {
                return n(67005)
            }])
        }
        , 27031: function (t, e, n) {
            "use strict";
            n.d(e, {
                Z: function () {
                    return GameLayout
                }
            });
            var a = n(85893)
                , o = n(94184)
                , u = n.n(o)
                , r = n(76633)
                , m = n.n(r)
                , i = n(1277);
            let l = {
                left: m()
                    .gameLayoutColumnLeft
                , right: m()
                    .gameLayoutColumnRight
                , row: m()
                    .gameLayoutColumnRow
                , anotherLeft: m()
                    .gameLayoutColumnAnotherLeft
                , anotherRight: m()
                    .gameLayoutColumnAnotherRight
            };
            
            function GameLayout(t) {
                let {
                    className: e
                    , children: n
                    , ...o
                } = t;
                return (0, a.jsx)("div", {
                    className: u()(m()
                        .gameLayout, e)
                    , ...o
                    , children: n
                })
            }
            GameLayout.Column = function (t) {
                let {
                    type: e
                    , className: n
                    , children: o
                    , customMobileOrder: r = "initial"
                    , ...g
                } = t, c = (0, i.Z)();
                return (0, a.jsx)("div", {
                    className: u()(m()
                        .gameLayoutColumn, l[e], n)
                    , style: {
                        order: c.width < 993 ? r : "initial"
                    }
                    , ...g
                    , children: o
                })
            }
        }
        , 67005: function (t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function () {
                    return MinesGame
                }
            });
            var a = n(85893);
            n(67294);
            var o = n(58418)
                , u = n(73020);
            
            function MinesGame() {
                return (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(u.Z, {})
                })
            }
            MinesGame.getLayout = function (t) {
                return (0, a.jsx)(o.Z, {
                    children: t
                })
            }
        }
        , 76633: function (t) {
            t.exports = {
                gameLayout: "game-layout_gameLayout__bgIOR"
                , gameLayoutColumnRow: "game-layout_gameLayoutColumnRow__0wXiL"
                , gameLayoutColumn: "game-layout_gameLayoutColumn__q01vS"
                , gameLayoutColumnLeft: "game-layout_gameLayoutColumnLeft__55fuZ"
                , gameLayoutColumnRight: "game-layout_gameLayoutColumnRight__oj_7g"
                , gameLayoutColumnAnotherLeft: "game-layout_gameLayoutColumnAnotherLeft__uOx3g"
                , gameLayoutColumnAnotherRight: "game-layout_gameLayoutColumnAnotherRight__j_wQx"
            }
        }
    }
    
    
    
    
    
    
    , function (t) {
        t.O(0, [4885, 8331, 9518, 3020, 9774, 2888, 179], function () {
            return t(t.s = 76005)
        }), _N_E = t.O()
    }
]);
