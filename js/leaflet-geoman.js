!(function(t) {
  var e = {};
  function r(n) {
    if (e[n]) return e[n].exports;
    var i = (e[n] = { i: n, l: !1, exports: {} });
    return t[n].call(i.exports, i, i.exports, r), (i.l = !0), i.exports;
  }
  (r.m = t),
    (r.c = e),
    (r.d = function(t, e, n) {
      r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
    }),
    (r.r = function(t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (r.t = function(t, e) {
      if ((1 & e && (t = r(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (
        (r.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var i in t)
          r.d(
            n,
            i,
            function(e) {
              return t[e];
            }.bind(null, i)
          );
      return n;
    }),
    (r.n = function(t) {
      var e =
        t && t.__esModule
          ? function() {
              return t.default;
            }
          : function() {
              return t;
            };
      return r.d(e, "a", e), e;
    }),
    (r.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (r.p = ""),
    r((r.s = 55));
})([
  function(t, e, r) {
    var n = r(123);
    t.exports = function(t, e, r) {
      var i = null == t ? void 0 : n(t, e);
      return void 0 === i ? r : i;
    };
  },
  function(t, e, r) {
    "use strict";
    function n(t, e, r) {
      void 0 === r && (r = {});
      var n = { type: "Feature" };
      return (
        (0 !== r.id && !r.id) || (n.id = r.id),
        r.bbox && (n.bbox = r.bbox),
        (n.properties = e || {}),
        (n.geometry = t),
        n
      );
    }
    function i(t, e, r) {
      return (
        void 0 === r && (r = {}), n({ type: "Point", coordinates: t }, e, r)
      );
    }
    function o(t, e, r) {
      void 0 === r && (r = {});
      for (var i = 0, o = t; i < o.length; i++) {
        var a = o[i];
        if (a.length < 4)
          throw new Error(
            "Each LinearRing of a Polygon must have 4 or more Positions."
          );
        for (var s = 0; s < a[a.length - 1].length; s++)
          if (a[a.length - 1][s] !== a[0][s])
            throw new Error("First and last Position are not equivalent.");
      }
      return n({ type: "Polygon", coordinates: t }, e, r);
    }
    function a(t, e, r) {
      if ((void 0 === r && (r = {}), t.length < 2))
        throw new Error(
          "coordinates must be an array of two or more positions"
        );
      return n({ type: "LineString", coordinates: t }, e, r);
    }
    function s(t, e) {
      void 0 === e && (e = {});
      var r = { type: "FeatureCollection" };
      return (
        e.id && (r.id = e.id), e.bbox && (r.bbox = e.bbox), (r.features = t), r
      );
    }
    function l(t, e, r) {
      return (
        void 0 === r && (r = {}),
        n({ type: "MultiLineString", coordinates: t }, e, r)
      );
    }
    function h(t, e, r) {
      return (
        void 0 === r && (r = {}),
        n({ type: "MultiPoint", coordinates: t }, e, r)
      );
    }
    function c(t, e, r) {
      return (
        void 0 === r && (r = {}),
        n({ type: "MultiPolygon", coordinates: t }, e, r)
      );
    }
    function u(t, r) {
      void 0 === r && (r = "kilometers");
      var n = e.factors[r];
      if (!n) throw new Error(r + " units is invalid");
      return t * n;
    }
    function p(t, r) {
      void 0 === r && (r = "kilometers");
      var n = e.factors[r];
      if (!n) throw new Error(r + " units is invalid");
      return t / n;
    }
    function f(t) {
      return ((t % (2 * Math.PI)) * 180) / Math.PI;
    }
    function d(t) {
      return !isNaN(t) && null !== t && !Array.isArray(t) && !/^\s*$/.test(t);
    }
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.earthRadius = 6371008.8),
      (e.factors = {
        centimeters: 100 * e.earthRadius,
        centimetres: 100 * e.earthRadius,
        degrees: e.earthRadius / 111325,
        feet: 3.28084 * e.earthRadius,
        inches: 39.37 * e.earthRadius,
        kilometers: e.earthRadius / 1e3,
        kilometres: e.earthRadius / 1e3,
        meters: e.earthRadius,
        metres: e.earthRadius,
        miles: e.earthRadius / 1609.344,
        millimeters: 1e3 * e.earthRadius,
        millimetres: 1e3 * e.earthRadius,
        nauticalmiles: e.earthRadius / 1852,
        radians: 1,
        yards: e.earthRadius / 1.0936
      }),
      (e.unitsFactors = {
        centimeters: 100,
        centimetres: 100,
        degrees: 1 / 111325,
        feet: 3.28084,
        inches: 39.37,
        kilometers: 0.001,
        kilometres: 0.001,
        meters: 1,
        metres: 1,
        miles: 1 / 1609.344,
        millimeters: 1e3,
        millimetres: 1e3,
        nauticalmiles: 1 / 1852,
        radians: 1 / e.earthRadius,
        yards: 1 / 1.0936
      }),
      (e.areaFactors = {
        acres: 247105e-9,
        centimeters: 1e4,
        centimetres: 1e4,
        feet: 10.763910417,
        inches: 1550.003100006,
        kilometers: 1e-6,
        kilometres: 1e-6,
        meters: 1,
        metres: 1,
        miles: 386e-9,
        millimeters: 1e6,
        millimetres: 1e6,
        yards: 1.195990046
      }),
      (e.feature = n),
      (e.geometry = function(t, e, r) {
        switch ((void 0 === r && (r = {}), t)) {
          case "Point":
            return i(e).geometry;
          case "LineString":
            return a(e).geometry;
          case "Polygon":
            return o(e).geometry;
          case "MultiPoint":
            return h(e).geometry;
          case "MultiLineString":
            return l(e).geometry;
          case "MultiPolygon":
            return c(e).geometry;
          default:
            throw new Error(t + " is invalid");
        }
      }),
      (e.point = i),
      (e.points = function(t, e, r) {
        return (
          void 0 === r && (r = {}),
          s(
            t.map(function(t) {
              return i(t, e);
            }),
            r
          )
        );
      }),
      (e.polygon = o),
      (e.polygons = function(t, e, r) {
        return (
          void 0 === r && (r = {}),
          s(
            t.map(function(t) {
              return o(t, e);
            }),
            r
          )
        );
      }),
      (e.lineString = a),
      (e.lineStrings = function(t, e, r) {
        return (
          void 0 === r && (r = {}),
          s(
            t.map(function(t) {
              return a(t, e);
            }),
            r
          )
        );
      }),
      (e.featureCollection = s),
      (e.multiLineString = l),
      (e.multiPoint = h),
      (e.multiPolygon = c),
      (e.geometryCollection = function(t, e, r) {
        return (
          void 0 === r && (r = {}),
          n({ type: "GeometryCollection", geometries: t }, e, r)
        );
      }),
      (e.round = function(t, e) {
        if ((void 0 === e && (e = 0), e && !(0 <= e)))
          throw new Error("precision must be a positive number");
        var r = Math.pow(10, e || 0);
        return Math.round(t * r) / r;
      }),
      (e.radiansToLength = u),
      (e.lengthToRadians = p),
      (e.lengthToDegrees = function(t, e) {
        return f(p(t, e));
      }),
      (e.bearingToAzimuth = function(t) {
        var e = t % 360;
        return e < 0 && (e += 360), e;
      }),
      (e.radiansToDegrees = f),
      (e.degreesToRadians = function(t) {
        return ((t % 360) * Math.PI) / 180;
      }),
      (e.convertLength = function(t, e, r) {
        if (
          (void 0 === e && (e = "kilometers"),
          void 0 === r && (r = "kilometers"),
          !(0 <= t))
        )
          throw new Error("length must be a positive number");
        return u(p(t, e), r);
      }),
      (e.convertArea = function(t, r, n) {
        if (
          (void 0 === r && (r = "meters"),
          void 0 === n && (n = "kilometers"),
          !(0 <= t))
        )
          throw new Error("area must be a positive number");
        var i = e.areaFactors[r];
        if (!i) throw new Error("invalid original units");
        var o = e.areaFactors[n];
        if (!o) throw new Error("invalid final units");
        return (t / i) * o;
      }),
      (e.isNumber = d),
      (e.isObject = function(t) {
        return !!t && t.constructor === Object;
      }),
      (e.validateBBox = function(t) {
        if (!t) throw new Error("bbox is required");
        if (!Array.isArray(t)) throw new Error("bbox must be an Array");
        if (4 !== t.length && 6 !== t.length)
          throw new Error("bbox must be an Array of 4 or 6 numbers");
        t.forEach(function(t) {
          if (!d(t)) throw new Error("bbox must only contain numbers");
        });
      }),
      (e.validateId = function(t) {
        if (!t) throw new Error("id is required");
        if (-1 === ["string", "number"].indexOf(typeof t))
          throw new Error("id must be a number or a string");
      }),
      (e.radians2degrees = function() {
        throw new Error("method has been renamed to `radiansToDegrees`");
      }),
      (e.degrees2radians = function() {
        throw new Error("method has been renamed to `degreesToRadians`");
      }),
      (e.distanceToDegrees = function() {
        throw new Error("method has been renamed to `lengthToDegrees`");
      }),
      (e.distanceToRadians = function() {
        throw new Error("method has been renamed to `lengthToRadians`");
      }),
      (e.radiansToDistance = function() {
        throw new Error("method has been renamed to `radiansToLength`");
      }),
      (e.bearingToAngle = function() {
        throw new Error("method has been renamed to `bearingToAzimuth`");
      }),
      (e.convertDistance = function() {
        throw new Error("method has been renamed to `convertLength`");
      });
  },
  function(t, e) {
    t.exports = function(t) {
      var e = typeof t;
      return null != t && ("object" == e || "function" == e);
    };
  },
  function(t, e, r) {
    var n = r(28),
      i = "object" == typeof self && self && self.Object === Object && self,
      o = n || i || Function("return this")();
    t.exports = o;
  },
  function(t, e) {
    t.exports = function(t) {
      return null != t && "object" == typeof t;
    };
  },
  function(t, e) {
    var r = Array.isArray;
    t.exports = r;
  },
  function(t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = r(1);
    function i(t, e, r, n, i, o, a, s) {
      var l,
        h,
        c,
        u,
        p = { x: null, y: null, onLine1: !1, onLine2: !1 };
      return 0 == (l = (s - o) * (r - t) - (a - i) * (n - e))
        ? null !== p.x && null !== p.y && p
        : ((u = (r - t) * (h = e - o) - (n - e) * (c = t - i)),
          (h = ((a - i) * h - (s - o) * c) / l),
          (c = u / l),
          (p.x = t + h * (r - t)),
          (p.y = e + h * (n - e)),
          0 <= h && h <= 1 && (p.onLine1 = !0),
          0 <= c && c <= 1 && (p.onLine2 = !0),
          !(!p.onLine1 || !p.onLine2) && [p.x, p.y]);
    }
    e.default = function(t) {
      var e,
        r,
        o = { type: "FeatureCollection", features: [] };
      if ("LineString" === (r = "Feature" === t.type ? t.geometry : t).type)
        e = [r.coordinates];
      else if ("MultiLineString" === r.type) e = r.coordinates;
      else if ("MultiPolygon" === r.type)
        e = [].concat.apply([], r.coordinates);
      else {
        if ("Polygon" !== r.type)
          throw new Error(
            "Input must be a LineString, MultiLineString, Polygon, or MultiPolygon Feature or Geometry"
          );
        e = r.coordinates;
      }
      return (
        e.forEach(function(t) {
          e.forEach(function(e) {
            for (var r = 0; r < t.length - 1; r++)
              for (var a = r; a < e.length - 1; a++) {
                if (t === e) {
                  if (1 === Math.abs(r - a)) continue;
                  if (
                    0 === r &&
                    a === t.length - 2 &&
                    t[r][0] === t[t.length - 1][0] &&
                    t[r][1] === t[t.length - 1][1]
                  )
                    continue;
                }
                var s = i(
                  t[r][0],
                  t[r][1],
                  t[r + 1][0],
                  t[r + 1][1],
                  e[a][0],
                  e[a][1],
                  e[a + 1][0],
                  e[a + 1][1]
                );
                s && o.features.push(n.point([s[0], s[1]]));
              }
          });
        }),
        o
      );
    };
  },
  function(t, e, r) {
    var n = r(16),
      i = r(71),
      o = r(72),
      a = n ? n.toStringTag : void 0;
    t.exports = function(t) {
      return null == t
        ? void 0 === t
          ? "[object Undefined]"
          : "[object Null]"
        : a && a in Object(t)
        ? i(t)
        : o(t);
    };
  },
  function(t, e, r) {
    var n = r(59),
      i = r(60),
      o = r(61),
      a = r(62),
      s = r(63);
    function l(t) {
      var e = -1,
        r = null == t ? 0 : t.length;
      for (this.clear(); ++e < r; ) {
        var n = t[e];
        this.set(n[0], n[1]);
      }
    }
    (l.prototype.clear = n),
      (l.prototype.delete = i),
      (l.prototype.get = o),
      (l.prototype.has = a),
      (l.prototype.set = s),
      (t.exports = l);
  },
  function(t, e, r) {
    var n = r(10);
    t.exports = function(t, e) {
      for (var r = t.length; r--; ) if (n(t[r][0], e)) return r;
      return -1;
    };
  },
  function(t, e) {
    t.exports = function(t, e) {
      return t === e || (t != t && e != e);
    };
  },
  function(t, e, r) {
    var n = r(14)(Object, "create");
    t.exports = n;
  },
  function(t, e, r) {
    var n = r(85);
    t.exports = function(t, e) {
      var r = t.__data__;
      return n(e) ? r["string" == typeof e ? "string" : "hash"] : r.map;
    };
  },
  function(t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = r(1);
    (e.getCoord = function(t) {
      if (!t) throw new Error("coord is required");
      if (!Array.isArray(t)) {
        if (
          "Feature" === t.type &&
          null !== t.geometry &&
          "Point" === t.geometry.type
        )
          return t.geometry.coordinates;
        if ("Point" === t.type) return t.coordinates;
      }
      if (
        Array.isArray(t) &&
        2 <= t.length &&
        !Array.isArray(t[0]) &&
        !Array.isArray(t[1])
      )
        return t;
      throw new Error("coord must be GeoJSON Point or an Array of numbers");
    }),
      (e.getCoords = function(t) {
        if (Array.isArray(t)) return t;
        if ("Feature" === t.type) {
          if (null !== t.geometry) return t.geometry.coordinates;
        } else if (t.coordinates) return t.coordinates;
        throw new Error(
          "coords must be GeoJSON Feature, Geometry Object or an Array"
        );
      }),
      (e.containsNumber = function t(e) {
        if (1 < e.length && n.isNumber(e[0]) && n.isNumber(e[1])) return !0;
        if (Array.isArray(e[0]) && e[0].length) return t(e[0]);
        throw new Error("coordinates must only contain numbers");
      }),
      (e.geojsonType = function(t, e, r) {
        if (!e || !r) throw new Error("type and name required");
        if (!t || t.type !== e)
          throw new Error(
            "Invalid input to " + r + ": must be a " + e + ", given " + t.type
          );
      }),
      (e.featureOf = function(t, e, r) {
        if (!t) throw new Error("No feature passed");
        if (!r) throw new Error(".featureOf() requires a name");
        if (!t || "Feature" !== t.type || !t.geometry)
          throw new Error(
            "Invalid input to " + r + ", Feature with geometry required"
          );
        if (!t.geometry || t.geometry.type !== e)
          throw new Error(
            "Invalid input to " +
              r +
              ": must be a " +
              e +
              ", given " +
              t.geometry.type
          );
      }),
      (e.collectionOf = function(t, e, r) {
        if (!t) throw new Error("No featureCollection passed");
        if (!r) throw new Error(".collectionOf() requires a name");
        if (!t || "FeatureCollection" !== t.type)
          throw new Error(
            "Invalid input to " + r + ", FeatureCollection required"
          );
        for (var n = 0, i = t.features; n < i.length; n++) {
          var o = i[n];
          if (!o || "Feature" !== o.type || !o.geometry)
            throw new Error(
              "Invalid input to " + r + ", Feature with geometry required"
            );
          if (!o.geometry || o.geometry.type !== e)
            throw new Error(
              "Invalid input to " +
                r +
                ": must be a " +
                e +
                ", given " +
                o.geometry.type
            );
        }
      }),
      (e.getGeom = function(t) {
        return "Feature" === t.type ? t.geometry : t;
      }),
      (e.getType = function(t, e) {
        return "FeatureCollection" === t.type
          ? "FeatureCollection"
          : "GeometryCollection" === t.type
          ? "GeometryCollection"
          : "Feature" === t.type && null !== t.geometry
          ? t.geometry.type
          : t.type;
      });
  },
  function(t, e, r) {
    var n = r(69),
      i = r(76);
    t.exports = function(t, e) {
      var r = i(t, e);
      return n(r) ? r : void 0;
    };
  },
  function(t, e, r) {
    var n = r(7),
      i = r(2);
    t.exports = function(t) {
      if (!i(t)) return !1;
      var e = n(t);
      return (
        "[object Function]" == e ||
        "[object GeneratorFunction]" == e ||
        "[object AsyncFunction]" == e ||
        "[object Proxy]" == e
      );
    };
  },
  function(t, e, r) {
    var n = r(3).Symbol;
    t.exports = n;
  },
  function(t, e, r) {
    var n = r(31);
    t.exports = function(t, e, r) {
      "__proto__" == e && n
        ? n(t, e, { configurable: !0, enumerable: !0, value: r, writable: !0 })
        : (t[e] = r);
    };
  },
  function(t, e) {
    t.exports = function(t) {
      return (
        t.webpackPolyfill ||
          ((t.deprecate = function() {}),
          (t.paths = []),
          t.children || (t.children = []),
          Object.defineProperty(t, "loaded", {
            enumerable: !0,
            get: function() {
              return t.l;
            }
          }),
          Object.defineProperty(t, "id", {
            enumerable: !0,
            get: function() {
              return t.i;
            }
          }),
          (t.webpackPolyfill = 1)),
        t
      );
    };
  },
  function(t, e, r) {
    var n = r(100),
      i = r(4),
      o = Object.prototype,
      a = o.hasOwnProperty,
      s = o.propertyIsEnumerable,
      l = n(
        (function() {
          return arguments;
        })()
      )
        ? n
        : function(t) {
            return i(t) && a.call(t, "callee") && !s.call(t, "callee");
          };
    t.exports = l;
  },
  function(t, e, r) {
    var n = r(15),
      i = r(21);
    t.exports = function(t) {
      return null != t && i(t.length) && !n(t);
    };
  },
  function(t, e) {
    t.exports = function(t) {
      return (
        "number" == typeof t && -1 < t && t % 1 == 0 && t <= 9007199254740991
      );
    };
  },
  function(t, e) {
    var r = /^(?:0|[1-9]\d*)$/;
    t.exports = function(t, e) {
      var n = typeof t;
      return (
        !!(e = null == e ? 9007199254740991 : e) &&
        ("number" == n || ("symbol" != n && r.test(t))) &&
        -1 < t &&
        t % 1 == 0 &&
        t < e
      );
    };
  },
  function(t, e, r) {
    var n = r(7),
      i = r(4);
    t.exports = function(t) {
      return "symbol" == typeof t || (i(t) && "[object Symbol]" == n(t));
    };
  },
  function(t, e, r) {
    !(function(t) {
      "use strict";
      function e(t, e) {
        return e < t ? 1 : t < e ? -1 : 0;
      }
      var r = function(t, r) {
          void 0 === t && (t = e),
            void 0 === r && (r = !1),
            (this._compare = t),
            (this._root = null),
            (this._size = 0),
            (this._noDuplicates = !!r);
        },
        n = { size: { configurable: !0 } };
      (r.prototype.rotateLeft = function(t) {
        var e = t.right;
        e &&
          ((t.right = e.left),
          e.left && (e.left.parent = t),
          (e.parent = t.parent)),
          t.parent
            ? t === t.parent.left
              ? (t.parent.left = e)
              : (t.parent.right = e)
            : (this._root = e),
          e && (e.left = t),
          (t.parent = e);
      }),
        (r.prototype.rotateRight = function(t) {
          var e = t.left;
          e &&
            ((t.left = e.right),
            e.right && (e.right.parent = t),
            (e.parent = t.parent)),
            t.parent
              ? t === t.parent.left
                ? (t.parent.left = e)
                : (t.parent.right = e)
              : (this._root = e),
            e && (e.right = t),
            (t.parent = e);
        }),
        (r.prototype._splay = function(t) {
          for (var e = this; t.parent; ) {
            var r = t.parent;
            r.parent
              ? r.left === t && r.parent.left === r
                ? (e.rotateRight(r.parent), e.rotateRight(r))
                : r.right === t && r.parent.right === r
                ? (e.rotateLeft(r.parent), e.rotateLeft(r))
                : r.left === t && r.parent.right === r
                ? (e.rotateRight(r), e.rotateLeft(r))
                : (e.rotateLeft(r), e.rotateRight(r))
              : r.left === t
              ? e.rotateRight(r)
              : e.rotateLeft(r);
          }
        }),
        (r.prototype.splay = function(t) {
          for (var e, r, n, i, o; t.parent; )
            (r = (e = t.parent).parent) && r.parent
              ? ((n = r.parent).left === r ? (n.left = t) : (n.right = t),
                (t.parent = n))
              : ((t.parent = null), (this._root = t)),
              (i = t.left),
              (o = t.right),
              t === e.left
                ? (r &&
                    (r.left === e
                      ? (e.right
                          ? ((r.left = e.right), (r.left.parent = r))
                          : (r.left = null),
                        ((e.right = r).parent = e))
                      : (i ? ((r.right = i).parent = r) : (r.right = null),
                        ((t.left = r).parent = t))),
                  o ? ((e.left = o).parent = e) : (e.left = null),
                  ((t.right = e).parent = t))
                : (r &&
                    (r.right === e
                      ? (e.left
                          ? ((r.right = e.left), (r.right.parent = r))
                          : (r.right = null),
                        ((e.left = r).parent = e))
                      : (o ? ((r.left = o).parent = r) : (r.left = null),
                        ((t.right = r).parent = t))),
                  i ? ((e.right = i).parent = e) : (e.right = null),
                  ((t.left = e).parent = t));
        }),
        (r.prototype.replace = function(t, e) {
          t.parent
            ? t === t.parent.left
              ? (t.parent.left = e)
              : (t.parent.right = e)
            : (this._root = e),
            e && (e.parent = t.parent);
        }),
        (r.prototype.minNode = function(t) {
          if ((void 0 === t && (t = this._root), t))
            for (; t.left; ) t = t.left;
          return t;
        }),
        (r.prototype.maxNode = function(t) {
          if ((void 0 === t && (t = this._root), t))
            for (; t.right; ) t = t.right;
          return t;
        }),
        (r.prototype.insert = function(t, e) {
          var r = this._root,
            n = null,
            i = this._compare;
          if (this._noDuplicates)
            for (; r; ) {
              if (0 === i((n = r).key, t)) return;
              r = i(r.key, t) < 0 ? r.right : r.left;
            }
          else for (; r; ) r = i((n = r).key, t) < 0 ? r.right : r.left;
          return (
            (r = { key: t, data: e, left: null, right: null, parent: n }),
            n
              ? i(n.key, r.key) < 0
                ? (n.right = r)
                : (n.left = r)
              : (this._root = r),
            this.splay(r),
            this._size++,
            r
          );
        }),
        (r.prototype.find = function(t) {
          for (var e = this._root, r = this._compare; e; ) {
            var n = r(e.key, t);
            if (n < 0) e = e.right;
            else {
              if (!(0 < n)) return e;
              e = e.left;
            }
          }
          return null;
        }),
        (r.prototype.contains = function(t) {
          for (var e = this._root, r = this._compare; e; ) {
            var n = r(t, e.key);
            if (0 === n) return !0;
            e = n < 0 ? e.left : e.right;
          }
          return !1;
        }),
        (r.prototype.remove = function(t) {
          var e = this.find(t);
          if (!e) return !1;
          if ((this.splay(e), e.left))
            if (e.right) {
              var r = this.minNode(e.right);
              r.parent !== e &&
                (this.replace(r, r.right),
                (r.right = e.right),
                (r.right.parent = r)),
                this.replace(e, r),
                (r.left = e.left),
                (r.left.parent = r);
            } else this.replace(e, e.left);
          else this.replace(e, e.right);
          return this._size--, !0;
        }),
        (r.prototype.removeNode = function(t) {
          if (!t) return !1;
          if ((this.splay(t), t.left))
            if (t.right) {
              var e = this.minNode(t.right);
              e.parent !== t &&
                (this.replace(e, e.right),
                (e.right = t.right),
                (e.right.parent = e)),
                this.replace(t, e),
                (e.left = t.left),
                (e.left.parent = e);
            } else this.replace(t, t.left);
          else this.replace(t, t.right);
          return this._size--, !0;
        }),
        (r.prototype.erase = function(t) {
          var e = this.find(t);
          if (e) {
            this.splay(e);
            var r = e.left,
              n = e.right,
              i = null;
            r &&
              ((r.parent = null),
              (i = this.maxNode(r)),
              this.splay(i),
              (this._root = i)),
              n && (r ? (i.right = n) : (this._root = n), (n.parent = i)),
              this._size--;
          }
        }),
        (r.prototype.pop = function() {
          var t = this._root,
            e = null;
          if (t) {
            for (; t.left; ) t = t.left;
            (e = { key: t.key, data: t.data }), this.remove(t.key);
          }
          return e;
        }),
        (r.prototype.next = function(t) {
          var e = t;
          if (e)
            if (e.right) for (e = e.right; e && e.left; ) e = e.left;
            else for (e = t.parent; e && e.right === t; ) e = (t = e).parent;
          return e;
        }),
        (r.prototype.prev = function(t) {
          var e = t;
          if (e)
            if (e.left) for (e = e.left; e && e.right; ) e = e.right;
            else for (e = t.parent; e && e.left === t; ) e = (t = e).parent;
          return e;
        }),
        (r.prototype.forEach = function(t) {
          for (var e = this._root, r = [], n = !1, i = 0; !n; )
            e
              ? (r.push(e), (e = e.left))
              : 0 < r.length
              ? (t((e = r.pop()), i++), (e = e.right))
              : (n = !0);
          return this;
        }),
        (r.prototype.range = function(t, e, r, n) {
          for (
            var i = [], o = this._compare, a = this._root;
            0 !== i.length || a;

          )
            if (a) i.push(a), (a = a.left);
            else {
              if (0 < o((a = i.pop()).key, e)) break;
              if (0 <= o(a.key, t) && r.call(n, a)) return this;
              a = a.right;
            }
          return this;
        }),
        (r.prototype.keys = function() {
          for (var t = this._root, e = [], r = [], n = !1; !n; )
            t
              ? (e.push(t), (t = t.left))
              : 0 < e.length
              ? ((t = e.pop()), r.push(t.key), (t = t.right))
              : (n = !0);
          return r;
        }),
        (r.prototype.values = function() {
          for (var t = this._root, e = [], r = [], n = !1; !n; )
            t
              ? (e.push(t), (t = t.left))
              : 0 < e.length
              ? ((t = e.pop()), r.push(t.data), (t = t.right))
              : (n = !0);
          return r;
        }),
        (r.prototype.at = function(t) {
          for (var e = this._root, r = [], n = !1, i = 0; !n; )
            if (e) r.push(e), (e = e.left);
            else if (0 < r.length) {
              if (((e = r.pop()), i === t)) return e;
              i++, (e = e.right);
            } else n = !0;
          return null;
        }),
        (r.prototype.load = function(t, e, r) {
          if (
            (void 0 === t && (t = []),
            void 0 === e && (e = []),
            void 0 === r && (r = !1),
            0 !== this._size)
          )
            throw new Error("bulk-load: tree is not empty");
          var n = t.length;
          return (
            r &&
              (function t(e, r, n, i, o) {
                if (!(i <= n)) {
                  for (var a = e[(n + i) >> 1], s = n - 1, l = i + 1; ; ) {
                    for (; o(e[++s], a) < 0; );
                    for (; 0 < o(e[--l], a); );
                    if (l <= s) break;
                    var h = e[s];
                    (e[s] = e[l]),
                      (e[l] = h),
                      (h = r[s]),
                      (r[s] = r[l]),
                      (r[l] = h);
                  }
                  t(e, r, n, l, o), t(e, r, l + 1, i, o);
                }
              })(t, e, 0, n - 1, this._compare),
            (this._root = (function t(e, r, n, i, o) {
              var a = o - i;
              if (0 < a) {
                var s = i + Math.floor(a / 2),
                  l = { key: r[s], data: n[s], parent: e };
                return (
                  (l.left = t(l, r, n, i, s)),
                  (l.right = t(l, r, n, s + 1, o)),
                  l
                );
              }
              return null;
            })(null, t, e, 0, n)),
            (this._size = n),
            this
          );
        }),
        (r.prototype.min = function() {
          var t = this.minNode(this._root);
          return t ? t.key : null;
        }),
        (r.prototype.max = function() {
          var t = this.maxNode(this._root);
          return t ? t.key : null;
        }),
        (r.prototype.isEmpty = function() {
          return null === this._root;
        }),
        (n.size.get = function() {
          return this._size;
        }),
        (r.createTree = function(t, e, n, i, o) {
          return new r(n, o).load(t, e, i);
        }),
        Object.defineProperties(r.prototype, n);
      var i = 0,
        o = 1,
        a = 2,
        s = 3,
        l = 0,
        h = 1,
        c = 2,
        u = 3;
      function p(t, e, r) {
        null === e
          ? ((t.inOut = !1), (t.otherInOut = !0))
          : (t.isSubject === e.isSubject
              ? ((t.inOut = !e.inOut), (t.otherInOut = e.otherInOut))
              : ((t.inOut = !e.otherInOut),
                (t.otherInOut = e.isVertical() ? !e.inOut : e.inOut)),
            e &&
              (t.prevInResult =
                !f(e, r) || e.isVertical() ? e.prevInResult : e)),
          (t.inResult = f(t, r));
      }
      function f(t, e) {
        switch (t.type) {
          case i:
            switch (e) {
              case l:
                return !t.otherInOut;
              case h:
                return t.otherInOut;
              case c:
                return (
                  (t.isSubject && t.otherInOut) ||
                  (!t.isSubject && !t.otherInOut)
                );
              case u:
                return !0;
            }
            break;
          case a:
            return e === l || e === h;
          case s:
            return e === c;
          case o:
            return !1;
        }
        return !1;
      }
      var d = function(t, e, r, n, o) {
        (this.left = e),
          (this.point = t),
          (this.otherEvent = r),
          (this.isSubject = n),
          (this.type = o || i),
          (this.inOut = !1),
          (this.otherInOut = !1),
          (this.prevInResult = null),
          (this.inResult = !1),
          (this.resultInOut = !1),
          (this.isExteriorRing = !0);
      };
      function g(t, e) {
        return t[0] === e[0] && t[1] === e[1];
      }
      function _(t, e, r) {
        return (t[0] - r[0]) * (e[1] - r[1]) - (e[0] - r[0]) * (t[1] - r[1]);
      }
      function m(t, e) {
        var r = t.point,
          n = e.point;
        return r[0] > n[0]
          ? 1
          : r[0] < n[0]
          ? -1
          : r[1] !== n[1]
          ? r[1] > n[1]
            ? 1
            : -1
          : (function(t, e, r, n) {
              return t.left === e.left
                ? 0 === _(r, t.otherEvent.point, e.otherEvent.point)
                  ? !t.isSubject && e.isSubject
                    ? 1
                    : -1
                  : t.isBelow(e.otherEvent.point)
                  ? -1
                  : 1
                : t.left
                ? 1
                : -1;
            })(t, e, r);
      }
      function y(t, e, r) {
        var n = new d(e, !1, t, t.isSubject),
          i = new d(e, !0, t.otherEvent, t.isSubject);
        return (
          g(t.point, t.otherEvent.point) &&
            console.warn("what is that, a collapsed segment?", t),
          (n.contourId = i.contourId = t.contourId),
          0 < m(i, t.otherEvent) && ((t.otherEvent.left = !0), (i.left = !1)),
          (t.otherEvent.otherEvent = i),
          (t.otherEvent = n),
          r.push(i),
          r.push(n),
          r
        );
      }
      function v(t, e) {
        return t[0] * e[1] - t[1] * e[0];
      }
      function L(t, e) {
        return t[0] * e[0] + t[1] * e[1];
      }
      function b(t, e, r) {
        var n = (function(t, e, r, n, i) {
            var o = [e[0] - t[0], e[1] - t[1]],
              a = [n[0] - r[0], n[1] - r[1]];
            function s(t, e, r) {
              return [t[0] + e * r[0], t[1] + e * r[1]];
            }
            var l = [r[0] - t[0], r[1] - t[1]],
              h = v(o, a),
              c = h * h,
              u = L(o, o);
            if (0 < c) {
              var p = v(l, a) / h;
              if (p < 0 || 1 < p) return null;
              var f = v(l, o) / h;
              return f < 0 || 1 < f
                ? null
                : 0 == p || 1 == p
                ? i
                  ? null
                  : [s(t, p, o)]
                : 0 == f || 1 == f
                ? i
                  ? null
                  : [s(r, f, a)]
                : [s(t, p, o)];
            }
            if (0 < (c = (h = v(l, o)) * h)) return null;
            var d = L(o, l) / u,
              g = d + L(o, a) / u,
              _ = Math.min(d, g),
              m = Math.max(d, g);
            return _ <= 1 && 0 <= m
              ? 1 === _
                ? i
                  ? null
                  : [s(t, 0 < _ ? _ : 0, o)]
                : 0 === m
                ? i
                  ? null
                  : [s(t, m < 1 ? m : 1, o)]
                : i && 0 === _ && 1 === m
                ? null
                : [s(t, 0 < _ ? _ : 0, o), s(t, m < 1 ? m : 1, o)]
              : null;
          })(t.point, t.otherEvent.point, e.point, e.otherEvent.point),
          i = n ? n.length : 0;
        if (0 === i) return 0;
        if (
          1 === i &&
          (g(t.point, e.point) || g(t.otherEvent.point, e.otherEvent.point))
        )
          return 0;
        if (2 === i && t.isSubject === e.isSubject) return 0;
        if (1 === i)
          return (
            g(t.point, n[0]) || g(t.otherEvent.point, n[0]) || y(t, n[0], r),
            g(e.point, n[0]) || g(e.otherEvent.point, n[0]) || y(e, n[0], r),
            1
          );
        var l = [],
          h = !1,
          c = !1;
        return (
          g(t.point, e.point)
            ? (h = !0)
            : 1 === m(t, e)
            ? l.push(e, t)
            : l.push(t, e),
          g(t.otherEvent.point, e.otherEvent.point)
            ? (c = !0)
            : 1 === m(t.otherEvent, e.otherEvent)
            ? l.push(e.otherEvent, t.otherEvent)
            : l.push(t.otherEvent, e.otherEvent),
          (h && c) || h
            ? ((e.type = o),
              (t.type = e.inOut === t.inOut ? a : s),
              h && !c && y(l[1].otherEvent, l[0].point, r),
              2)
            : (c
                ? y(l[0], l[1].point, r)
                : l[0] !== l[3].otherEvent
                ? (y(l[0], l[1].point, r), y(l[1], l[2].point, r))
                : (y(l[0], l[1].point, r), y(l[3].otherEvent, l[2].point, r)),
              3)
        );
      }
      function k(t, e) {
        if (t === e) return 0;
        if (
          0 !== _(t.point, t.otherEvent.point, e.point) ||
          0 !== _(t.point, t.otherEvent.point, e.otherEvent.point)
        )
          return g(t.point, e.point)
            ? t.isBelow(e.otherEvent.point)
              ? -1
              : 1
            : t.point[0] === e.point[0]
            ? t.point[1] < e.point[1]
              ? -1
              : 1
            : 1 === m(t, e)
            ? e.isAbove(t.point)
              ? -1
              : 1
            : t.isBelow(e.point)
            ? -1
            : 1;
        if (t.isSubject !== e.isSubject) return t.isSubject ? -1 : 1;
        var r = t.point,
          n = e.point;
        return r[0] === n[0] && r[1] === n[1]
          ? ((r = t.otherEvent.point),
            (n = e.otherEvent.point),
            r[0] === n[0] && r[1] === n[1]
              ? 0
              : t.contourId > e.contourId
              ? 1
              : -1)
          : 1 === m(t, e)
          ? 1
          : -1;
      }
      function M(t, e, r, n) {
        var i = t + 1,
          o = e.length;
        if (o - 1 < i) return t - 1;
        for (
          var a = e[t].point, s = e[i].point;
          i < o && s[0] === a[0] && s[1] === a[1];

        ) {
          if (!r[i]) return i;
          s = e[++i].point;
        }
        for (i = t - 1; r[i] && n <= i; ) i--;
        return i;
      }
      (d.prototype.isBelow = function(t) {
        var e = this.point,
          r = this.otherEvent.point;
        return this.left
          ? 0 < (e[0] - t[0]) * (r[1] - t[1]) - (r[0] - t[0]) * (e[1] - t[1])
          : 0 < (r[0] - t[0]) * (e[1] - t[1]) - (e[0] - t[0]) * (r[1] - t[1]);
      }),
        (d.prototype.isAbove = function(t) {
          return !this.isBelow(t);
        }),
        (d.prototype.isVertical = function() {
          return this.point[0] === this.otherEvent.point[0];
        }),
        (d.prototype.clone = function() {
          var t = new d(
            this.point,
            this.left,
            this.otherEvent,
            this.isSubject,
            this.type
          );
          return (
            (t.inResult = this.inResult),
            (t.prevInResult = this.prevInResult),
            (t.isExteriorRing = this.isExteriorRing),
            (t.inOut = this.inOut),
            (t.otherInOut = this.otherInOut),
            t
          );
        });
      var w = x,
        C = x;
      function x(t, e) {
        if (!(this instanceof x)) return new x(t, e);
        if (
          ((this.data = t || []),
          (this.length = this.data.length),
          (this.compare = e || S),
          0 < this.length)
        )
          for (var r = (this.length >> 1) - 1; 0 <= r; r--) this._down(r);
      }
      function S(t, e) {
        return t < e ? -1 : e < t ? 1 : 0;
      }
      (x.prototype = {
        push: function(t) {
          this.data.push(t), this.length++, this._up(this.length - 1);
        },
        pop: function() {
          if (0 !== this.length) {
            var t = this.data[0];
            return (
              this.length--,
              0 < this.length &&
                ((this.data[0] = this.data[this.length]), this._down(0)),
              this.data.pop(),
              t
            );
          }
        },
        peek: function() {
          return this.data[0];
        },
        _up: function(t) {
          for (var e = this.data, r = this.compare, n = e[t]; 0 < t; ) {
            var i = (t - 1) >> 1,
              o = e[i];
            if (0 <= r(n, o)) break;
            (e[t] = o), (t = i);
          }
          e[t] = n;
        },
        _down: function(t) {
          for (
            var e = this.data, r = this.compare, n = this.length >> 1, i = e[t];
            t < n;

          ) {
            var o = 1 + (t << 1),
              a = o + 1,
              s = e[o];
            if (
              (a < this.length && r(e[a], s) < 0 && (s = e[(o = a)]),
              0 <= r(s, i))
            )
              break;
            (e[t] = s), (t = o);
          }
          e[t] = i;
        }
      }),
        (w.default = C);
      var E = Math.max,
        P = Math.min,
        O = 0;
      function B(t, e, r, n, i, o) {
        var a, s, l, h, c, u;
        for (a = 0, s = t.length - 1; a < s; a++)
          if (
            ((l = t[a]),
            (h = t[a + 1]),
            (c = new d(l, !1, void 0, e)),
            (u = new d(h, !1, c, e)),
            (c.otherEvent = u),
            l[0] !== h[0] || l[1] !== h[1])
          ) {
            (c.contourId = u.contourId = r),
              o || ((c.isExteriorRing = !1), (u.isExteriorRing = !1)),
              0 < m(c, u) ? (u.left = !0) : (c.left = !0);
            var p = l[0],
              f = l[1];
            (i[0] = P(i[0], p)),
              (i[1] = P(i[1], f)),
              (i[2] = E(i[2], p)),
              (i[3] = E(i[3], f)),
              n.push(c),
              n.push(u);
          }
      }
      var T = [];
      function D(t, e, n) {
        "number" == typeof t[0][0][0] && (t = [t]),
          "number" == typeof e[0][0][0] && (e = [e]);
        var i = (function(t, e, r) {
          var n = null;
          return (
            t.length * e.length == 0 &&
              (r === l
                ? (n = T)
                : r === c
                ? (n = t)
                : (r !== h && r !== u) || (n = 0 === t.length ? e : t)),
            n
          );
        })(t, e, n);
        if (i) return i === T ? null : i;
        var o = [1 / 0, 1 / 0, -1 / 0, -1 / 0],
          a = [1 / 0, 1 / 0, -1 / 0, -1 / 0],
          s = (function(t, e, r, n, i) {
            var o,
              a,
              s,
              l,
              h,
              u,
              p = new w(null, m);
            for (s = 0, l = t.length; s < l; s++)
              for (h = 0, u = (o = t[s]).length; h < u; h++)
                (a = 0 === h) && O++, B(o[h], !0, O, p, r, a);
            for (s = 0, l = e.length; s < l; s++)
              for (h = 0, u = (o = e[s]).length; h < u; h++)
                (a = 0 === h),
                  i === c && (a = !1),
                  a && O++,
                  B(o[h], !1, O, p, n, a);
            return p;
          })(t, e, o, a, n);
        return (i = (function(t, e, r, n, i) {
          var o = null;
          return (
            (r[0] > n[2] || n[0] > r[2] || r[1] > n[3] || n[1] > r[3]) &&
              (i === l
                ? (o = T)
                : i === c
                ? (o = t)
                : (i !== h && i !== u) || (o = t.concat(e))),
            o
          );
        })(t, e, o, a, n))
          ? i === T
            ? null
            : i
          : (function(t, e) {
              var r,
                n,
                i,
                o = (function(t) {
                  var e,
                    r,
                    n,
                    i,
                    o = [];
                  for (r = 0, n = t.length; r < n; r++)
                    (((e = t[r]).left && e.inResult) ||
                      (!e.left && e.otherEvent.inResult)) &&
                      o.push(e);
                  for (var a = !1; !a; )
                    for (a = !0, r = 0, n = o.length; r < n; r++)
                      r + 1 < n &&
                        1 === m(o[r], o[r + 1]) &&
                        ((i = o[r]),
                        (o[r] = o[r + 1]),
                        (o[r + 1] = i),
                        (a = !1));
                  for (r = 0, n = o.length; r < n; r++) (e = o[r]).pos = r;
                  for (r = 0, n = o.length; r < n; r++)
                    (e = o[r]).left ||
                      ((i = e.pos),
                      (e.pos = e.otherEvent.pos),
                      (e.otherEvent.pos = i));
                  return o;
                })(t),
                a = {},
                s = [];
              for (r = 0, n = o.length; r < n; r++)
                if (!a[r]) {
                  var l = [[]];
                  o[r].isExteriorRing
                    ? e === c && !o[r].isSubject && 1 < s.length
                      ? s[s.length - 1].push(l[0])
                      : s.push(l)
                    : e !== c || o[r].isSubject || 0 !== s.length
                    ? 0 === s.length
                      ? s.push([[l]])
                      : s[s.length - 1].push(l[0])
                    : s.push(l);
                  var h = s.length - 1,
                    u = r,
                    p = o[r].point;
                  for (l[0].push(p); r <= u; )
                    (i = o[u]),
                      (a[u] = !0),
                      i.left
                        ? ((i.resultInOut = !1), (i.contourId = h))
                        : ((i.otherEvent.resultInOut = !0),
                          (i.otherEvent.contourId = h)),
                      (a[(u = i.pos)] = !0),
                      l[0].push(o[u].point),
                      (u = M(u, o, a, r));
                  (i = o[(u = -1 === u ? r : u)]),
                    (a[u] = a[i.pos] = !0),
                    (i.otherEvent.resultInOut = !0),
                    (i.otherEvent.contourId = h);
                }
              return s;
            })(
              (function(t, e, n, i, o, a) {
                for (
                  var s, h, u, f = new r(k), d = [], g = Math.min(i[2], o[2]);
                  0 !== t.length;

                ) {
                  var _ = t.pop();
                  if (
                    (d.push(_),
                    (a === l && _.point[0] > g) ||
                      (a === c && _.point[0] > i[2]))
                  )
                    break;
                  if (_.left) {
                    (h = s = f.insert(_)),
                      (s = s !== (u = f.minNode()) ? f.prev(s) : null),
                      (h = f.next(h));
                    var m = s ? s.key : null;
                    if (
                      (p(_, m, a),
                      h && 2 === b(_, h.key, t) && (p(_, m, a), p(_, h.key, a)),
                      s && 2 === b(s.key, _, t))
                    ) {
                      var y = s;
                      p(m, (y = y !== u ? f.prev(y) : null) ? y.key : null, a),
                        p(_, m, a);
                    }
                  } else
                    (_ = _.otherEvent),
                      (h = s = f.find(_)),
                      s &&
                        h &&
                        ((s = s !== u ? f.prev(s) : null),
                        (h = f.next(h)),
                        f.remove(_),
                        h && s && b(s.key, h.key, t));
                }
                return d;
              })(s, 0, 0, o, a, n),
              n
            );
      }
      var j = { UNION: h, DIFFERENCE: c, INTERSECTION: l, XOR: u };
      (t.union = function(t, e) {
        return D(t, e, h);
      }),
        (t.diff = function(t, e) {
          return D(t, e, c);
        }),
        (t.xor = function(t, e) {
          return D(t, e, u);
        }),
        (t.intersection = function(t, e) {
          return D(t, e, l);
        }),
        (t.operations = j),
        Object.defineProperty(t, "__esModule", { value: !0 });
    })(e);
  },
  function(t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = r(1);
    function i(t, e, r) {
      if (null !== t)
        for (
          var n,
            o,
            a,
            s,
            l,
            h,
            c,
            u,
            p = 0,
            f = 0,
            d = t.type,
            g = "FeatureCollection" === d,
            _ = "Feature" === d,
            m = g ? t.features.length : 1,
            y = 0;
          y < m;
          y++
        ) {
          l = (u =
            !!(c = g ? t.features[y].geometry : _ ? t.geometry : t) &&
            "GeometryCollection" === c.type)
            ? c.geometries.length
            : 1;
          for (var v = 0; v < l; v++) {
            var L = 0,
              b = 0;
            if (null !== (s = u ? c.geometries[v] : c)) {
              h = s.coordinates;
              var k = s.type;
              switch (
                ((p = !r || ("Polygon" !== k && "MultiPolygon" !== k) ? 0 : 1),
                k)
              ) {
                case null:
                  break;
                case "Point":
                  if (!1 === e(h, f, y, L, b)) return !1;
                  f++, L++;
                  break;
                case "LineString":
                case "MultiPoint":
                  for (n = 0; n < h.length; n++) {
                    if (!1 === e(h[n], f, y, L, b)) return !1;
                    f++, "MultiPoint" === k && L++;
                  }
                  "LineString" === k && L++;
                  break;
                case "Polygon":
                case "MultiLineString":
                  for (n = 0; n < h.length; n++) {
                    for (o = 0; o < h[n].length - p; o++) {
                      if (!1 === e(h[n][o], f, y, L, b)) return !1;
                      f++;
                    }
                    "MultiLineString" === k && L++, "Polygon" === k && b++;
                  }
                  "Polygon" === k && L++;
                  break;
                case "MultiPolygon":
                  for (n = 0; n < h.length; n++) {
                    for (o = b = 0; o < h[n].length; o++) {
                      for (a = 0; a < h[n][o].length - p; a++) {
                        if (!1 === e(h[n][o][a], f, y, L, b)) return !1;
                        f++;
                      }
                      b++;
                    }
                    L++;
                  }
                  break;
                case "GeometryCollection":
                  for (n = 0; n < s.geometries.length; n++)
                    if (!1 === i(s.geometries[n], e, r)) return !1;
                  break;
                default:
                  throw new Error("Unknown Geometry Type");
              }
            }
          }
        }
    }
    function o(t, e) {
      var r;
      switch (t.type) {
        case "FeatureCollection":
          for (
            r = 0;
            r < t.features.length && !1 !== e(t.features[r].properties, r);
            r++
          );
          break;
        case "Feature":
          e(t.properties, 0);
      }
    }
    function a(t, e) {
      if ("Feature" === t.type) e(t, 0);
      else if ("FeatureCollection" === t.type)
        for (
          var r = 0;
          r < t.features.length && !1 !== e(t.features[r], r);
          r++
        );
    }
    function s(t, e) {
      var r,
        n,
        i,
        o,
        a,
        s,
        l,
        h,
        c,
        u,
        p = 0,
        f = "FeatureCollection" === t.type,
        d = "Feature" === t.type,
        g = f ? t.features.length : 1;
      for (r = 0; r < g; r++) {
        for (
          s = f ? t.features[r].geometry : d ? t.geometry : t,
            h = f ? t.features[r].properties : d ? t.properties : {},
            c = f ? t.features[r].bbox : d ? t.bbox : void 0,
            u = f ? t.features[r].id : d ? t.id : void 0,
            a = (l = !!s && "GeometryCollection" === s.type)
              ? s.geometries.length
              : 1,
            i = 0;
          i < a;
          i++
        )
          if (null !== (o = l ? s.geometries[i] : s))
            switch (o.type) {
              case "Point":
              case "LineString":
              case "MultiPoint":
              case "Polygon":
              case "MultiLineString":
              case "MultiPolygon":
                if (!1 === e(o, p, h, c, u)) return !1;
                break;
              case "GeometryCollection":
                for (n = 0; n < o.geometries.length; n++)
                  if (!1 === e(o.geometries[n], p, h, c, u)) return !1;
                break;
              default:
                throw new Error("Unknown Geometry Type");
            }
          else if (!1 === e(null, p, h, c, u)) return !1;
        p++;
      }
    }
    function l(t, e) {
      s(t, function(t, r, i, o, a) {
        var s,
          l = null === t ? null : t.type;
        switch (l) {
          case null:
          case "Point":
          case "LineString":
          case "Polygon":
            return (
              !1 !== e(n.feature(t, i, { bbox: o, id: a }), r, 0) && void 0
            );
        }
        switch (l) {
          case "MultiPoint":
            s = "Point";
            break;
          case "MultiLineString":
            s = "LineString";
            break;
          case "MultiPolygon":
            s = "Polygon";
        }
        for (var h = 0; h < t.coordinates.length; h++) {
          var c = { type: s, coordinates: t.coordinates[h] };
          if (!1 === e(n.feature(c, i), r, h)) return !1;
        }
      });
    }
    function h(t, e) {
      l(t, function(t, r, o) {
        var a = 0;
        if (t.geometry) {
          var s = t.geometry.type;
          if ("Point" !== s && "MultiPoint" !== s) {
            var l,
              h = 0,
              c = 0,
              u = 0;
            return (
              !1 !==
                i(t, function(i, s, p, f, d) {
                  if (void 0 === l || h < r || c < f || u < d)
                    return (l = i), (h = r), (c = f), (u = d), void (a = 0);
                  var g = n.lineString([l, i], t.properties);
                  if (!1 === e(g, r, o, d, a)) return !1;
                  a++, (l = i);
                }) && void 0
            );
          }
        }
      });
    }
    function c(t, e) {
      if (!t) throw new Error("geojson is required");
      l(t, function(t, r, i) {
        if (null !== t.geometry) {
          var o = t.geometry.type,
            a = t.geometry.coordinates;
          switch (o) {
            case "LineString":
              if (!1 === e(t, r, i, 0, 0)) return !1;
              break;
            case "Polygon":
              for (var s = 0; s < a.length; s++)
                if (!1 === e(n.lineString(a[s], t.properties), r, i, s))
                  return !1;
          }
        }
      });
    }
    (e.coordEach = i),
      (e.coordReduce = function(t, e, r, n) {
        var o = r;
        return (
          i(
            t,
            function(t, n, i, a, s) {
              o = 0 === n && void 0 === r ? t : e(o, t, n, i, a, s);
            },
            n
          ),
          o
        );
      }),
      (e.propEach = o),
      (e.propReduce = function(t, e, r) {
        var n = r;
        return (
          o(t, function(t, i) {
            n = 0 === i && void 0 === r ? t : e(n, t, i);
          }),
          n
        );
      }),
      (e.featureEach = a),
      (e.featureReduce = function(t, e, r) {
        var n = r;
        return (
          a(t, function(t, i) {
            n = 0 === i && void 0 === r ? t : e(n, t, i);
          }),
          n
        );
      }),
      (e.coordAll = function(t) {
        var e = [];
        return (
          i(t, function(t) {
            e.push(t);
          }),
          e
        );
      }),
      (e.geomEach = s),
      (e.geomReduce = function(t, e, r) {
        var n = r;
        return (
          s(t, function(t, i, o, a, s) {
            n = 0 === i && void 0 === r ? t : e(n, t, i, o, a, s);
          }),
          n
        );
      }),
      (e.flattenEach = l),
      (e.flattenReduce = function(t, e, r) {
        var n = r;
        return (
          l(t, function(t, i, o) {
            n = 0 === i && 0 === o && void 0 === r ? t : e(n, t, i, o);
          }),
          n
        );
      }),
      (e.segmentEach = h),
      (e.segmentReduce = function(t, e, r) {
        var n = r,
          i = !1;
        return (
          h(t, function(t, o, a, s, l) {
            (n = !1 === i && void 0 === r ? t : e(n, t, o, a, s, l)), (i = !0);
          }),
          n
        );
      }),
      (e.lineEach = c),
      (e.lineReduce = function(t, e, r) {
        var n = r;
        return (
          c(t, function(t, i, o, a) {
            n = 0 === i && void 0 === r ? t : e(n, t, i, o, a);
          }),
          n
        );
      }),
      (e.findSegment = function(t, e) {
        if (((e = e || {}), !n.isObject(e)))
          throw new Error("options is invalid");
        var r,
          i = e.featureIndex || 0,
          o = e.multiFeatureIndex || 0,
          a = e.geometryIndex || 0,
          s = e.segmentIndex || 0,
          l = e.properties;
        switch (t.type) {
          case "FeatureCollection":
            i < 0 && (i = t.features.length + i),
              (l = l || t.features[i].properties),
              (r = t.features[i].geometry);
            break;
          case "Feature":
            (l = l || t.properties), (r = t.geometry);
            break;
          case "Point":
          case "MultiPoint":
            return null;
          case "LineString":
          case "Polygon":
          case "MultiLineString":
          case "MultiPolygon":
            r = t;
            break;
          default:
            throw new Error("geojson is invalid");
        }
        if (null === r) return null;
        var h = r.coordinates;
        switch (r.type) {
          case "Point":
          case "MultiPoint":
            return null;
          case "LineString":
            return (
              s < 0 && (s = h.length + s - 1),
              n.lineString([h[s], h[s + 1]], l, e)
            );
          case "Polygon":
            return (
              a < 0 && (a = h.length + a),
              s < 0 && (s = h[a].length + s - 1),
              n.lineString([h[a][s], h[a][s + 1]], l, e)
            );
          case "MultiLineString":
            return (
              o < 0 && (o = h.length + o),
              s < 0 && (s = h[o].length + s - 1),
              n.lineString([h[o][s], h[o][s + 1]], l, e)
            );
          case "MultiPolygon":
            return (
              o < 0 && (o = h.length + o),
              a < 0 && (a = h[o].length + a),
              s < 0 && (s = h[o][a].length - s - 1),
              n.lineString([h[o][a][s], h[o][a][s + 1]], l, e)
            );
        }
        throw new Error("geojson is invalid");
      }),
      (e.findPoint = function(t, e) {
        if (((e = e || {}), !n.isObject(e)))
          throw new Error("options is invalid");
        var r,
          i = e.featureIndex || 0,
          o = e.multiFeatureIndex || 0,
          a = e.geometryIndex || 0,
          s = e.coordIndex || 0,
          l = e.properties;
        switch (t.type) {
          case "FeatureCollection":
            i < 0 && (i = t.features.length + i),
              (l = l || t.features[i].properties),
              (r = t.features[i].geometry);
            break;
          case "Feature":
            (l = l || t.properties), (r = t.geometry);
            break;
          case "Point":
          case "MultiPoint":
            return null;
          case "LineString":
          case "Polygon":
          case "MultiLineString":
          case "MultiPolygon":
            r = t;
            break;
          default:
            throw new Error("geojson is invalid");
        }
        if (null === r) return null;
        var h = r.coordinates;
        switch (r.type) {
          case "Point":
            return n.point(h, l, e);
          case "MultiPoint":
            return o < 0 && (o = h.length + o), n.point(h[o], l, e);
          case "LineString":
            return s < 0 && (s = h.length + s), n.point(h[s], l, e);
          case "Polygon":
            return (
              a < 0 && (a = h.length + a),
              s < 0 && (s = h[a].length + s),
              n.point(h[a][s], l, e)
            );
          case "MultiLineString":
            return (
              o < 0 && (o = h.length + o),
              s < 0 && (s = h[o].length + s),
              n.point(h[o][s], l, e)
            );
          case "MultiPolygon":
            return (
              o < 0 && (o = h.length + o),
              a < 0 && (a = h[o].length + a),
              s < 0 && (s = h[o][a].length - s),
              n.point(h[o][a][s], l, e)
            );
        }
        throw new Error("geojson is invalid");
      });
  },
  function(t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = r(25),
      i = 6378137;
    function o(t) {
      var e = 0;
      if (t && 0 < t.length) {
        e += Math.abs(a(t[0]));
        for (var r = 1; r < t.length; r++) e -= Math.abs(a(t[r]));
      }
      return e;
    }
    function a(t) {
      var e,
        r,
        n,
        o,
        a,
        l,
        h = 0,
        c = t.length;
      if (2 < c) {
        for (l = 0; l < c; l++)
          (a =
            l === c - 2
              ? ((n = c - 2), (o = c - 1), 0)
              : l === c - 1
              ? ((n = c - 1), (o = 0), 1)
              : ((o = (n = l) + 1), l + 2)),
            (e = t[n]),
            (r = t[o]),
            (h += (s(t[a][0]) - s(e[0])) * Math.sin(s(r[1])));
        h = (h * i * i) / 2;
      }
      return h;
    }
    function s(t) {
      return (t * Math.PI) / 180;
    }
    e.default = function(t) {
      return n.geomReduce(
        t,
        function(t, e) {
          return (
            t +
            (function(t) {
              var e,
                r = 0;
              switch (t.type) {
                case "Polygon":
                  return o(t.coordinates);
                case "MultiPolygon":
                  for (e = 0; e < t.coordinates.length; e++)
                    r += o(t.coordinates[e]);
                  return r;
                case "Point":
                case "MultiPoint":
                case "LineString":
                case "MultiLineString":
                  return 0;
              }
              return 0;
            })(e)
          );
        },
        0
      );
    };
  },
  function(t, e, r) {
    var n = r(14)(r(3), "Map");
    t.exports = n;
  },
  function(t, e, r) {
    (function(e) {
      var r = "object" == typeof e && e && e.Object === Object && e;
      t.exports = r;
    }.call(this, r(70)));
  },
  function(t, e, r) {
    var n = r(77),
      i = r(84),
      o = r(86),
      a = r(87),
      s = r(88);
    function l(t) {
      var e = -1,
        r = null == t ? 0 : t.length;
      for (this.clear(); ++e < r; ) {
        var n = t[e];
        this.set(n[0], n[1]);
      }
    }
    (l.prototype.clear = n),
      (l.prototype.delete = i),
      (l.prototype.get = o),
      (l.prototype.has = a),
      (l.prototype.set = s),
      (t.exports = l);
  },
  function(t, e, r) {
    var n = r(17),
      i = r(10);
    t.exports = function(t, e, r) {
      ((void 0 === r || i(t[e], r)) && (void 0 !== r || e in t)) || n(t, e, r);
    };
  },
  function(t, e, r) {
    var n = r(14),
      i = (function() {
        try {
          var t = n(Object, "defineProperty");
          return t({}, "", {}), t;
        } catch (t) {}
      })();
    t.exports = i;
  },
  function(t, e, r) {
    var n = r(99)(Object.getPrototypeOf, Object);
    t.exports = n;
  },
  function(t, e) {
    var r = Object.prototype;
    t.exports = function(t) {
      var e = t && t.constructor;
      return t === (("function" == typeof e && e.prototype) || r);
    };
  },
  function(t, e, r) {
    (function(t) {
      var n = r(3),
        i = r(102),
        o = e && !e.nodeType && e,
        a = o && "object" == typeof t && t && !t.nodeType && t,
        s = a && a.exports === o ? n.Buffer : void 0,
        l = (s ? s.isBuffer : void 0) || i;
      t.exports = l;
    }.call(this, r(18)(t)));
  },
  function(t, e, r) {
    var n = r(104),
      i = r(105),
      o = r(106),
      a = o && o.isTypedArray,
      s = a ? i(a) : n;
    t.exports = s;
  },
  function(t, e) {
    t.exports = function(t, e) {
      if (
        ("constructor" !== e || "function" != typeof t[e]) &&
        "__proto__" != e
      )
        return t[e];
    };
  },
  function(t, e, r) {
    var n = r(110),
      i = r(112),
      o = r(20);
    t.exports = function(t) {
      return o(t) ? n(t, !0) : i(t);
    };
  },
  function(t, e) {
    t.exports = function(t) {
      return t;
    };
  },
  function(t, e, r) {
    var n = r(5),
      i = r(124),
      o = r(125),
      a = r(128);
    t.exports = function(t, e) {
      return n(t) ? t : i(t, e) ? [t] : o(a(t));
    };
  },
  function(t, e, r) {
    var n = r(23);
    t.exports = function(t) {
      if ("string" == typeof t || n(t)) return t;
      var e = t + "";
      return "0" == e && 1 / t == -1 / 0 ? "-0" : e;
    };
  },
  function(t) {
    t.exports = JSON.parse('{"a":"2.3.0"}');
  },
  function(t, e, r) {
    var n = r(57),
      i = r(114)(function(t, e, r) {
        n(t, e, r);
      });
    t.exports = i;
  },
  function(t) {
    t.exports = JSON.parse(
      '{"tooltips":{"placeMarker":"Click to place marker","firstVertex":"Click to place first vertex","continueLine":"Click to continue drawing","finishLine":"Click any existing marker to finish","finishPoly":"Click first marker to finish","finishRect":"Click to finish","startCircle":"Click to place circle center","finishCircle":"Click to finish circle","placeCircleMarker":"Click to place circle marker"},"actions":{"finish":"Finish","cancel":"Cancel","removeLastVertex":"Remove Last Vertex"},"buttonTitles":{"drawMarkerButton":"Draw Marker","drawPolyButton":"Draw Polygons","drawLineButton":"Draw Polyline","drawCircleButton":"Draw Circle","drawRectButton":"Draw Rectangle","editButton":"Edit Layers","dragButton":"Drag Layers","cutButton":"Cut Layers","deleteButton":"Remove Layers","drawCircleMarkerButton":"Draw Circle Marker"}}'
    );
  },
  function(t) {
    t.exports = JSON.parse(
      '{"tooltips":{"placeMarker":"Platziere den Marker mit Klick","firstVertex":"Platziere den ersten Marker mit Klick","continueLine":"Klicke, um weiter zu zeichnen","finishLine":"Beende mit Klick auf existierenden Marker","finishPoly":"Beende mit Klick auf ersten Marker","finishRect":"Beende mit Klick","startCircle":"Platziere das Kreiszentrum mit Klick","finishCircle":"Beende den Kreis mit Klick","placeCircleMarker":"Platziere den Kreismarker mit Klick"},"actions":{"finish":"Beenden","cancel":"Abbrechen","removeLastVertex":"Letzten Vertex löschen"},"buttonTitles":{"drawMarkerButton":"Marker zeichnen","drawPolyButton":"Polygon zeichnen","drawLineButton":"Polyline zeichnen","drawCircleButton":"Kreis zeichnen","drawRectButton":"Rechteck zeichnen","editButton":"Layer editieren","dragButton":"Layer bewegen","cutButton":"Layer schneiden","deleteButton":"Layer löschen","drawCircleMarkerButton":"Kreismarker zeichnen"}}'
    );
  },
  function(t) {
    t.exports = JSON.parse(
      '{"tooltips":{"placeMarker":"Clicca per posizionare un Marker","firstVertex":"Clicca per posizionare il primo vertice","continueLine":"Clicca per continuare a disegnare","finishLine":"Clicca qualsiasi marker esistente per terminare","finishPoly":"Clicca il primo marker per terminare","finishRect":"Clicca per terminare","startCircle":"Clicca per posizionare il punto centrale del cerchio","finishCircle":"Clicca per terminare il cerchio","placeCircleMarker":"Clicca per posizionare un Marker del cherchio"},"actions":{"finish":"Termina","cancel":"Annulla","removeLastVertex":"Rimuovi l\'ultimo vertice"},"buttonTitles":{"drawMarkerButton":"Disegna Marker","drawPolyButton":"Disegna Poligoni","drawLineButton":"Disegna Polilinea","drawCircleButton":"Disegna Cerchio","drawRectButton":"Disegna Rettangolo","editButton":"Modifica Livelli","dragButton":"Sposta Livelli","cutButton":"Ritaglia Livelli","deleteButton":"Elimina Livelli","drawCircleMarkerButton":"Disegna Marker del Cherchio"}}'
    );
  },
  function(t) {
    t.exports = JSON.parse(
      '{"tooltips":{"placeMarker":"Adaugă un punct","firstVertex":"Apasă aici pentru a adăuga primul Vertex","continueLine":"Apasă aici pentru a continua desenul","finishLine":"Apasă pe orice obiect pentru a finisa desenul","finishPoly":"Apasă pe primul obiect pentru a finisa","finishRect":"Apasă pentru a finisa","startCircle":"Apasă pentru a desena un cerc","finishCircle":"Apasă pentru a finisa un cerc","placeCircleMarker":"Adaugă un punct"},"actions":{"finish":"Termină","cancel":"Anulează","removeLastVertex":"Șterge ultimul Vertex"},"buttonTitles":{"drawMarkerButton":"Adaugă o bulină","drawPolyButton":"Desenează un poligon","drawLineButton":"Desenează o linie","drawCircleButton":"Desenează un cerc","drawRectButton":"Desenează un dreptunghi","editButton":"Editează straturile","dragButton":"Mută straturile","cutButton":"Taie straturile","deleteButton":"Șterge straturile","placeCircleMarker":"Adaugă o bulină"}}'
    );
  },
  function(t) {
    t.exports = JSON.parse(
      '{"tooltips":{"placeMarker":"Щелкните, чтобы поместить маркер","firstVertex":"Нажмите, чтобы поместить первый объект","continueLine":"Нажмите, чтобы продолжить рисование","finishLine":"Щелкните любой существующий маркер для завершения","finishPoly":"Выберите первую точку, чтобы закончить","finishRect":"Нажмите, чтобы закончить","startCircle":"Нажмите чтобы добавить круг","finishCircle":"Нажмите чтобы закончить круг","placeCircleMarker":"Click to place circle marker"},"actions":{"finish":"Заканчивать","cancel":"Отмена","removeLastVertex":"Удалить последний объект на карте"},"buttonTitles":{"drawMarkerButton":"Добавить маркер","drawPolyButton":"Рисовать полигон","drawLineButton":"Рисовать Полилинию","drawCircleButton":"Рисовать круг","drawRectButton":"Рисовать Прямоугольник","editButton":"Редактировать слой","dragButton":"Перетаскивать слой","cutButton":"Вырезать слой","deleteButton":"Удалить слой","placeCircleMarker":"Щелкните, чтобы поместить маркер"}}'
    );
  },
  function(t) {
    t.exports = JSON.parse(
      '{"tooltips":{"placeMarker":"Presiona para colocar un marcador","firstVertex":"Presiona para colocar el primer vértice","continueLine":"Presiona para continuar dibujando","finishLine":"Presiona cualquier marcador existente para finalizar","finishPoly":"Presiona el primer marcador para finalizar","finishRect":"Presiona para finalizar","startCircle":"Presiona para colocar el centro del circulo","finishCircle":"Presiona para finalizar el circulo","placeCircleMarker":"Presiona para colocar un marcador de circulo"},"actions":{"finish":"Finalizar","cancel":"Cancelar","removeLastVertex":"Remover ultimo vértice"},"buttonTitles":{"drawMarkerButton":"Dibujar Marcador","drawPolyButton":"Dibujar Polígono","drawLineButton":"Dibujar Línea","drawCircleButton":"Dibujar Circulo","drawRectButton":"Dibujar Rectángulo","editButton":"Editar Capas","dragButton":"Arrastrar Capas","cutButton":"Cortar Capas","deleteButton":"Remover Capas","drawCircleMarkerButton":"Dibujar Marcador de Circulo"}}'
    );
  },
  function(t) {
    t.exports = JSON.parse(
      '{"tooltips":{"placeMarker":"Klik om een marker te plaatsen","firstVertex":"Klik om het eerste punt te plaatsen","continueLine":"Klik om te blijven tekenen","finishLine":"Klik op een bestaand punt om te beëindigen","finishPoly":"Klik op het eerst punt om te beëindigen","finishRect":"Klik om te beëindigen","startCircle":"Klik om het middelpunt te plaatsen","finishCircle":"Klik om de cirkel te beëindigen","placeCircleMarker":"Klik om een marker te plaatsen"},"actions":{"finish":"Bewaar","cancel":"Annuleer","removeLastVertex":"Verwijder laatste punt"},"buttonTitles":{"drawMarkerButton":"Plaats Marker","drawPolyButton":"Teken een vlak","drawLineButton":"Teken een lijn","drawCircleButton":"Teken een cirkel","drawRectButton":"Teken een vierkant","editButton":"Bewerk","dragButton":"Verplaats","cutButton":"Knip","deleteButton":"Verwijder","drawCircleMarkerButton":"Plaats Marker"}}'
    );
  },
  function(t) {
    t.exports = JSON.parse(
      '{"tooltips":{"placeMarker":"Cliquez pour placer un marqueur","firstVertex":"Cliquez pour placer le premier sommet","continueLine":"Cliquez pour continuer à dessiner","finishLine":"Cliquez sur n\'importe quel marqueur pour terminer","finishPoly":"Cliquez sur le premier marqueur pour terminer","finishRect":"Cliquez pour terminer","startCircle":"Cliquez pour placer le centre du cercle","finishCircle":"Cliquez pour finir le cercle"},"actions":{"finish":"Terminer","cancel":"Annuler","removeLastVertex":"Retirer le dernier sommet"},"buttonTitles":{"drawMarkerButton":"Placer des marqueurs","drawPolyButton":"Dessiner des polygones","drawLineButton":"Dessiner des polylignes","drawCircleButton":"Dessiner un cercle","drawRectButton":"Dessiner un rectangle","editButton":"Éditer des calques","dragButton":"Déplacer des calques","cutButton":"Couper des calques","deleteButton":"Supprimer des calques"}}'
    );
  },
  function(t) {
    t.exports = JSON.parse(
      '{"tooltips":{"placeMarker":"单击放置标记","firstVertex":"单击放置首个顶点","continueLine":"单击继续绘制","finishLine":"单击任何存在的标记以完成","finishPoly":"单击第一个标记以完成","finishRect":"单击完成","startCircle":"单击放置圆心","finishCircle":"单击完成圆形"},"actions":{"finish":"完成","cancel":"取消","removeLastVertex":"移除最后的顶点"},"buttonTitles":{"drawMarkerButton":"绘制标记","drawPolyButton":"绘制多边形","drawLineButton":"绘制线段","drawCircleButton":"绘制圆形","drawRectButton":"绘制长方形","editButton":"编辑图层","dragButton":"拖拽图层","cutButton":"剪切图层","deleteButton":"删除图层"}}'
    );
  },
  function(t) {
    t.exports = JSON.parse(
      '{"tooltips":{"placeMarker":"Clique para posicionar o marcador","firstVertex":"Clique para posicionar o primeiro vértice","continueLine":"Clique para continuar desenhando","finishLine":"Clique em qualquer marcador existente para finalizar","finishPoly":"Clique no primeiro ponto para fechar o polígono","finishRect":"Clique para finalizar","startCircle":"Clique para posicionar o centro do círculo","finishCircle":"Clique para fechar o círculo"},"actions":{"finish":"Finalizar","cancel":"Cancelar","removeLastVertex":"Remover último vértice"},"buttonTitles":{"drawMarkerButton":"Desenhar um marcador","drawPolyButton":"Desenhar um polígono","drawLineButton":"Desenhar uma polilinha","drawCircleButton":"Desenhar um círculo","drawRectButton":"Desenhar um retângulo","editButton":"Editar camada(s)","dragButton":"Mover camada(s)","cutButton":"Recortar camada(s)","deleteButton":"Remover camada(s)"}}'
    );
  },
  function(t, e, r) {
    var n = r(131),
      i = r(132);
    t.exports = function(t, e) {
      return null != t && i(t, e, n);
    };
  },
  function(t, e, r) {
    "use strict";
    var n =
      (this && this.__importStar) ||
      function(t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t)
          for (var r in t) Object.hasOwnProperty.call(t, r) && (e[r] = t[r]);
        return (e.default = t), e;
      };
    Object.defineProperty(e, "__esModule", { value: !0 });
    var i = r(1),
      o = r(13),
      a = n(r(24));
    e.default = function t(e, r, n) {
      void 0 === n && (n = {});
      var s = o.getGeom(e),
        l = o.getGeom(r);
      if ("Polygon" === s.type && "Polygon" === l.type) {
        var h = a.intersection(s.coordinates, l.coordinates);
        if (null === h || 0 === h.length) return null;
        if (1 !== h.length) return i.multiPolygon(h, n.properties);
        var c = h[0][0][0],
          u = h[0][0][h[0][0].length - 1];
        return c[0] === u[0] && c[1] === u[1]
          ? i.polygon(h[0], n.properties)
          : null;
      }
      if ("MultiPolygon" === s.type) {
        for (var p = [], f = 0, d = s.coordinates; f < d.length; f++) {
          var g = d[f],
            _ = t(o.getGeom(i.polygon(g)), l);
          if (_) {
            var m = o.getGeom(_);
            if ("Polygon" === m.type) p.push(m.coordinates);
            else {
              if ("MultiPolygon" !== m.type)
                throw new Error("intersection is invalid");
              p = p.concat(m.coordinates);
            }
          }
        }
        return 0 === p.length
          ? null
          : 1 === p.length
          ? i.polygon(p[0], n.properties)
          : i.multiPolygon(p, n.properties);
      }
      if ("MultiPolygon" === l.type) return t(l, s);
      throw new Error(
        "poly1 and poly2 must be either polygons or multiPolygons"
      );
    };
  },
  function(t, e, r) {
    t.exports = r(135);
  },
  function(t, e) {
    (Array.prototype.findIndex =
      Array.prototype.findIndex ||
      function(t) {
        if (null === this)
          throw new TypeError(
            "Array.prototype.findIndex called on null or undefined"
          );
        if ("function" != typeof t)
          throw new TypeError("callback must be a function");
        for (
          var e = Object(this), r = e.length >>> 0, n = arguments[1], i = 0;
          i < r;
          i++
        )
          if (t.call(n, e[i], i, e)) return i;
        return -1;
      }),
      (Array.prototype.find =
        Array.prototype.find ||
        function(t) {
          if (null === this)
            throw new TypeError(
              "Array.prototype.find called on null or undefined"
            );
          if ("function" != typeof t)
            throw new TypeError("callback must be a function");
          for (
            var e = Object(this), r = e.length >>> 0, n = arguments[1], i = 0;
            i < r;
            i++
          ) {
            var o = e[i];
            if (t.call(n, o, i, e)) return o;
          }
        }),
      "function" != typeof Object.assign &&
        (Object.assign = function(t) {
          "use strict";
          if (null == t)
            throw new TypeError("Cannot convert undefined or null to object");
          t = Object(t);
          for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            if (null != r)
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
          }
          return t;
        }),
      [
        Element.prototype,
        CharacterData.prototype,
        DocumentType.prototype
      ].forEach(function(t) {
        t.hasOwnProperty("remove") ||
          Object.defineProperty(t, "remove", {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            value: function() {
              this.parentNode.removeChild(this);
            }
          });
      });
  },
  function(t, e, r) {
    var n = r(58),
      i = r(30),
      o = r(89),
      a = r(91),
      s = r(2),
      l = r(37),
      h = r(36);
    t.exports = function t(e, r, c, u, p) {
      e !== r &&
        o(
          r,
          function(o, l) {
            if (((p = p || new n()), s(o))) a(e, r, l, c, t, u, p);
            else {
              var f = u ? u(h(e, l), o, l + "", e, r, p) : void 0;
              void 0 === f && (f = o), i(e, l, f);
            }
          },
          l
        );
    };
  },
  function(t, e, r) {
    var n = r(8),
      i = r(64),
      o = r(65),
      a = r(66),
      s = r(67),
      l = r(68);
    function h(t) {
      var e = (this.__data__ = new n(t));
      this.size = e.size;
    }
    (h.prototype.clear = i),
      (h.prototype.delete = o),
      (h.prototype.get = a),
      (h.prototype.has = s),
      (h.prototype.set = l),
      (t.exports = h);
  },
  function(t, e) {
    t.exports = function() {
      (this.__data__ = []), (this.size = 0);
    };
  },
  function(t, e, r) {
    var n = r(9),
      i = Array.prototype.splice;
    t.exports = function(t) {
      var e = this.__data__,
        r = n(e, t);
      return !(
        r < 0 || (r == e.length - 1 ? e.pop() : i.call(e, r, 1), --this.size, 0)
      );
    };
  },
  function(t, e, r) {
    var n = r(9);
    t.exports = function(t) {
      var e = this.__data__,
        r = n(e, t);
      return r < 0 ? void 0 : e[r][1];
    };
  },
  function(t, e, r) {
    var n = r(9);
    t.exports = function(t) {
      return -1 < n(this.__data__, t);
    };
  },
  function(t, e, r) {
    var n = r(9);
    t.exports = function(t, e) {
      var r = this.__data__,
        i = n(r, t);
      return i < 0 ? (++this.size, r.push([t, e])) : (r[i][1] = e), this;
    };
  },
  function(t, e, r) {
    var n = r(8);
    t.exports = function() {
      (this.__data__ = new n()), (this.size = 0);
    };
  },
  function(t, e) {
    t.exports = function(t) {
      var e = this.__data__,
        r = e.delete(t);
      return (this.size = e.size), r;
    };
  },
  function(t, e) {
    t.exports = function(t) {
      return this.__data__.get(t);
    };
  },
  function(t, e) {
    t.exports = function(t) {
      return this.__data__.has(t);
    };
  },
  function(t, e, r) {
    var n = r(8),
      i = r(27),
      o = r(29);
    t.exports = function(t, e) {
      var r = this.__data__;
      if (r instanceof n) {
        var a = r.__data__;
        if (!i || a.length < 199)
          return a.push([t, e]), (this.size = ++r.size), this;
        r = this.__data__ = new o(a);
      }
      return r.set(t, e), (this.size = r.size), this;
    };
  },
  function(t, e, r) {
    var n = r(15),
      i = r(73),
      o = r(2),
      a = r(75),
      s = /^\[object .+?Constructor\]$/,
      l = Function.prototype,
      h = Object.prototype,
      c = l.toString,
      u = h.hasOwnProperty,
      p = RegExp(
        "^" +
          c
            .call(u)
            .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
            .replace(
              /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
              "$1.*?"
            ) +
          "$"
      );
    t.exports = function(t) {
      return !(!o(t) || i(t)) && (n(t) ? p : s).test(a(t));
    };
  },
  function(t, e) {
    var r;
    r = (function() {
      return this;
    })();
    try {
      r = r || new Function("return this")();
    } catch (t) {
      "object" == typeof window && (r = window);
    }
    t.exports = r;
  },
  function(t, e, r) {
    var n = r(16),
      i = Object.prototype,
      o = i.hasOwnProperty,
      a = i.toString,
      s = n ? n.toStringTag : void 0;
    t.exports = function(t) {
      var e = o.call(t, s),
        r = t[s];
      try {
        t[s] = void 0;
        var n = !0;
      } catch (t) {}
      var i = a.call(t);
      return n && (e ? (t[s] = r) : delete t[s]), i;
    };
  },
  function(t, e) {
    var r = Object.prototype.toString;
    t.exports = function(t) {
      return r.call(t);
    };
  },
  function(t, e, r) {
    var n,
      i = r(74),
      o = (n = /[^.]+$/.exec((i && i.keys && i.keys.IE_PROTO) || ""))
        ? "Symbol(src)_1." + n
        : "";
    t.exports = function(t) {
      return !!o && o in t;
    };
  },
  function(t, e, r) {
    var n = r(3)["__core-js_shared__"];
    t.exports = n;
  },
  function(t, e) {
    var r = Function.prototype.toString;
    t.exports = function(t) {
      if (null != t) {
        try {
          return r.call(t);
        } catch (t) {}
        try {
          return t + "";
        } catch (t) {}
      }
      return "";
    };
  },
  function(t, e) {
    t.exports = function(t, e) {
      return null == t ? void 0 : t[e];
    };
  },
  function(t, e, r) {
    var n = r(78),
      i = r(8),
      o = r(27);
    t.exports = function() {
      (this.size = 0),
        (this.__data__ = {
          hash: new n(),
          map: new (o || i)(),
          string: new n()
        });
    };
  },
  function(t, e, r) {
    var n = r(79),
      i = r(80),
      o = r(81),
      a = r(82),
      s = r(83);
    function l(t) {
      var e = -1,
        r = null == t ? 0 : t.length;
      for (this.clear(); ++e < r; ) {
        var n = t[e];
        this.set(n[0], n[1]);
      }
    }
    (l.prototype.clear = n),
      (l.prototype.delete = i),
      (l.prototype.get = o),
      (l.prototype.has = a),
      (l.prototype.set = s),
      (t.exports = l);
  },
  function(t, e, r) {
    var n = r(11);
    t.exports = function() {
      (this.__data__ = n ? n(null) : {}), (this.size = 0);
    };
  },
  function(t, e) {
    t.exports = function(t) {
      var e = this.has(t) && delete this.__data__[t];
      return (this.size -= e ? 1 : 0), e;
    };
  },
  function(t, e, r) {
    var n = r(11),
      i = Object.prototype.hasOwnProperty;
    t.exports = function(t) {
      var e = this.__data__;
      if (n) {
        var r = e[t];
        return "__lodash_hash_undefined__" === r ? void 0 : r;
      }
      return i.call(e, t) ? e[t] : void 0;
    };
  },
  function(t, e, r) {
    var n = r(11),
      i = Object.prototype.hasOwnProperty;
    t.exports = function(t) {
      var e = this.__data__;
      return n ? void 0 !== e[t] : i.call(e, t);
    };
  },
  function(t, e, r) {
    var n = r(11);
    t.exports = function(t, e) {
      var r = this.__data__;
      return (
        (this.size += this.has(t) ? 0 : 1),
        (r[t] = n && void 0 === e ? "__lodash_hash_undefined__" : e),
        this
      );
    };
  },
  function(t, e, r) {
    var n = r(12);
    t.exports = function(t) {
      var e = n(this, t).delete(t);
      return (this.size -= e ? 1 : 0), e;
    };
  },
  function(t, e) {
    t.exports = function(t) {
      var e = typeof t;
      return "string" == e || "number" == e || "symbol" == e || "boolean" == e
        ? "__proto__" !== t
        : null === t;
    };
  },
  function(t, e, r) {
    var n = r(12);
    t.exports = function(t) {
      return n(this, t).get(t);
    };
  },
  function(t, e, r) {
    var n = r(12);
    t.exports = function(t) {
      return n(this, t).has(t);
    };
  },
  function(t, e, r) {
    var n = r(12);
    t.exports = function(t, e) {
      var r = n(this, t),
        i = r.size;
      return r.set(t, e), (this.size += r.size == i ? 0 : 1), this;
    };
  },
  function(t, e, r) {
    var n = r(90)();
    t.exports = n;
  },
  function(t, e) {
    t.exports = function(t) {
      return function(e, r, n) {
        for (var i = -1, o = Object(e), a = n(e), s = a.length; s--; ) {
          var l = a[t ? s : ++i];
          if (!1 === r(o[l], l, o)) break;
        }
        return e;
      };
    };
  },
  function(t, e, r) {
    var n = r(30),
      i = r(92),
      o = r(93),
      a = r(96),
      s = r(97),
      l = r(19),
      h = r(5),
      c = r(101),
      u = r(34),
      p = r(15),
      f = r(2),
      d = r(103),
      g = r(35),
      _ = r(36),
      m = r(107);
    t.exports = function(t, e, r, y, v, L, b) {
      var k = _(t, r),
        M = _(e, r),
        w = b.get(M);
      if (w) n(t, r, w);
      else {
        var C = L ? L(k, M, r + "", t, e, b) : void 0,
          x = void 0 === C;
        if (x) {
          var S = h(M),
            E = !S && u(M),
            P = !S && !E && g(M);
          (C = M),
            S || E || P
              ? (C = h(k)
                  ? k
                  : c(k)
                  ? a(k)
                  : E
                  ? i(M, !(x = !1))
                  : P
                  ? o(M, !(x = !1))
                  : [])
              : d(M) || l(M)
              ? l((C = k))
                ? (C = m(k))
                : (f(k) && !p(k)) || (C = s(M))
              : (x = !1);
        }
        x && (b.set(M, C), v(C, M, y, L, b), b.delete(M)), n(t, r, C);
      }
    };
  },
  function(t, e, r) {
    (function(t) {
      var n = r(3),
        i = e && !e.nodeType && e,
        o = i && "object" == typeof t && t && !t.nodeType && t,
        a = o && o.exports === i ? n.Buffer : void 0,
        s = a ? a.allocUnsafe : void 0;
      t.exports = function(t, e) {
        if (e) return t.slice();
        var r = t.length,
          n = s ? s(r) : new t.constructor(r);
        return t.copy(n), n;
      };
    }.call(this, r(18)(t)));
  },
  function(t, e, r) {
    var n = r(94);
    t.exports = function(t, e) {
      var r = e ? n(t.buffer) : t.buffer;
      return new t.constructor(r, t.byteOffset, t.length);
    };
  },
  function(t, e, r) {
    var n = r(95);
    t.exports = function(t) {
      var e = new t.constructor(t.byteLength);
      return new n(e).set(new n(t)), e;
    };
  },
  function(t, e, r) {
    var n = r(3).Uint8Array;
    t.exports = n;
  },
  function(t, e) {
    t.exports = function(t, e) {
      var r = -1,
        n = t.length;
      for (e = e || Array(n); ++r < n; ) e[r] = t[r];
      return e;
    };
  },
  function(t, e, r) {
    var n = r(98),
      i = r(32),
      o = r(33);
    t.exports = function(t) {
      return "function" != typeof t.constructor || o(t) ? {} : n(i(t));
    };
  },
  function(t, e, r) {
    var n = r(2),
      i = Object.create;
    function o() {}
    t.exports = function(t) {
      if (!n(t)) return {};
      if (i) return i(t);
      o.prototype = t;
      var e = new o();
      return (o.prototype = void 0), e;
    };
  },
  function(t, e) {
    t.exports = function(t, e) {
      return function(r) {
        return t(e(r));
      };
    };
  },
  function(t, e, r) {
    var n = r(7),
      i = r(4);
    t.exports = function(t) {
      return i(t) && "[object Arguments]" == n(t);
    };
  },
  function(t, e, r) {
    var n = r(20),
      i = r(4);
    t.exports = function(t) {
      return i(t) && n(t);
    };
  },
  function(t, e) {
    t.exports = function() {
      return !1;
    };
  },
  function(t, e, r) {
    var n = r(7),
      i = r(32),
      o = r(4),
      a = Function.prototype,
      s = Object.prototype,
      l = a.toString,
      h = s.hasOwnProperty,
      c = l.call(Object);
    t.exports = function(t) {
      if (!o(t) || "[object Object]" != n(t)) return !1;
      var e = i(t);
      if (null === e) return !0;
      var r = h.call(e, "constructor") && e.constructor;
      return "function" == typeof r && r instanceof r && l.call(r) == c;
    };
  },
  function(t, e, r) {
    var n = r(7),
      i = r(21),
      o = r(4),
      a = {};
    (a["[object Float32Array]"] = a["[object Float64Array]"] = a[
      "[object Int8Array]"
    ] = a["[object Int16Array]"] = a["[object Int32Array]"] = a[
      "[object Uint8Array]"
    ] = a["[object Uint8ClampedArray]"] = a["[object Uint16Array]"] = a[
      "[object Uint32Array]"
    ] = !0),
      (a["[object Arguments]"] = a["[object Array]"] = a[
        "[object ArrayBuffer]"
      ] = a["[object Boolean]"] = a["[object DataView]"] = a[
        "[object Date]"
      ] = a["[object Error]"] = a["[object Function]"] = a["[object Map]"] = a[
        "[object Number]"
      ] = a["[object Object]"] = a["[object RegExp]"] = a["[object Set]"] = a[
        "[object String]"
      ] = a["[object WeakMap]"] = !1),
      (t.exports = function(t) {
        return o(t) && i(t.length) && !!a[n(t)];
      });
  },
  function(t, e) {
    t.exports = function(t) {
      return function(e) {
        return t(e);
      };
    };
  },
  function(t, e, r) {
    (function(t) {
      var n = r(28),
        i = e && !e.nodeType && e,
        o = i && "object" == typeof t && t && !t.nodeType && t,
        a = o && o.exports === i && n.process,
        s = (function() {
          try {
            return (
              (o && o.require && o.require("util").types) ||
              (a && a.binding && a.binding("util"))
            );
          } catch (t) {}
        })();
      t.exports = s;
    }.call(this, r(18)(t)));
  },
  function(t, e, r) {
    var n = r(108),
      i = r(37);
    t.exports = function(t) {
      return n(t, i(t));
    };
  },
  function(t, e, r) {
    var n = r(109),
      i = r(17);
    t.exports = function(t, e, r, o) {
      var a = !r;
      r = r || {};
      for (var s = -1, l = e.length; ++s < l; ) {
        var h = e[s],
          c = o ? o(r[h], t[h], h, r, t) : void 0;
        void 0 === c && (c = t[h]), a ? i(r, h, c) : n(r, h, c);
      }
      return r;
    };
  },
  function(t, e, r) {
    var n = r(17),
      i = r(10),
      o = Object.prototype.hasOwnProperty;
    t.exports = function(t, e, r) {
      var a = t[e];
      (o.call(t, e) && i(a, r) && (void 0 !== r || e in t)) || n(t, e, r);
    };
  },
  function(t, e, r) {
    var n = r(111),
      i = r(19),
      o = r(5),
      a = r(34),
      s = r(22),
      l = r(35),
      h = Object.prototype.hasOwnProperty;
    t.exports = function(t, e) {
      var r = o(t),
        c = !r && i(t),
        u = !r && !c && a(t),
        p = !r && !c && !u && l(t),
        f = r || c || u || p,
        d = f ? n(t.length, String) : [],
        g = d.length;
      for (var _ in t)
        (!e && !h.call(t, _)) ||
          (f &&
            ("length" == _ ||
              (u && ("offset" == _ || "parent" == _)) ||
              (p &&
                ("buffer" == _ || "byteLength" == _ || "byteOffset" == _)) ||
              s(_, g))) ||
          d.push(_);
      return d;
    };
  },
  function(t, e) {
    t.exports = function(t, e) {
      for (var r = -1, n = Array(t); ++r < t; ) n[r] = e(r);
      return n;
    };
  },
  function(t, e, r) {
    var n = r(2),
      i = r(33),
      o = r(113),
      a = Object.prototype.hasOwnProperty;
    t.exports = function(t) {
      if (!n(t)) return o(t);
      var e = i(t),
        r = [];
      for (var s in t)
        ("constructor" != s || (!e && a.call(t, s))) && r.push(s);
      return r;
    };
  },
  function(t, e) {
    t.exports = function(t) {
      var e = [];
      if (null != t) for (var r in Object(t)) e.push(r);
      return e;
    };
  },
  function(t, e, r) {
    var n = r(115),
      i = r(122);
    t.exports = function(t) {
      return n(function(e, r) {
        var n = -1,
          o = r.length,
          a = 1 < o ? r[o - 1] : void 0,
          s = 2 < o ? r[2] : void 0;
        for (
          a = 3 < t.length && "function" == typeof a ? (o--, a) : void 0,
            s && i(r[0], r[1], s) && ((a = o < 3 ? void 0 : a), (o = 1)),
            e = Object(e);
          ++n < o;

        ) {
          var l = r[n];
          l && t(e, l, n, a);
        }
        return e;
      });
    };
  },
  function(t, e, r) {
    var n = r(38),
      i = r(116),
      o = r(118);
    t.exports = function(t, e) {
      return o(i(t, e, n), t + "");
    };
  },
  function(t, e, r) {
    var n = r(117),
      i = Math.max;
    t.exports = function(t, e, r) {
      return (
        (e = i(void 0 === e ? t.length - 1 : e, 0)),
        function() {
          for (
            var o = arguments, a = -1, s = i(o.length - e, 0), l = Array(s);
            ++a < s;

          )
            l[a] = o[e + a];
          a = -1;
          for (var h = Array(e + 1); ++a < e; ) h[a] = o[a];
          return (h[e] = r(l)), n(t, this, h);
        }
      );
    };
  },
  function(t, e) {
    t.exports = function(t, e, r) {
      switch (r.length) {
        case 0:
          return t.call(e);
        case 1:
          return t.call(e, r[0]);
        case 2:
          return t.call(e, r[0], r[1]);
        case 3:
          return t.call(e, r[0], r[1], r[2]);
      }
      return t.apply(e, r);
    };
  },
  function(t, e, r) {
    var n = r(119),
      i = r(121)(n);
    t.exports = i;
  },
  function(t, e, r) {
    var n = r(120),
      i = r(31),
      o = r(38),
      a = i
        ? function(t, e) {
            return i(t, "toString", {
              configurable: !0,
              enumerable: !1,
              value: n(e),
              writable: !0
            });
          }
        : o;
    t.exports = a;
  },
  function(t, e) {
    t.exports = function(t) {
      return function() {
        return t;
      };
    };
  },
  function(t, e) {
    var r = Date.now;
    t.exports = function(t) {
      var e = 0,
        n = 0;
      return function() {
        var i = r(),
          o = 16 - (i - n);
        if (((n = i), 0 < o)) {
          if (800 <= ++e) return arguments[0];
        } else e = 0;
        return t.apply(void 0, arguments);
      };
    };
  },
  function(t, e, r) {
    var n = r(10),
      i = r(20),
      o = r(22),
      a = r(2);
    t.exports = function(t, e, r) {
      if (!a(r)) return !1;
      var s = typeof e;
      return (
        !!("number" == s ? i(r) && o(e, r.length) : "string" == s && e in r) &&
        n(r[e], t)
      );
    };
  },
  function(t, e, r) {
    var n = r(39),
      i = r(40);
    t.exports = function(t, e) {
      for (var r = 0, o = (e = n(e, t)).length; null != t && r < o; )
        t = t[i(e[r++])];
      return r && r == o ? t : void 0;
    };
  },
  function(t, e, r) {
    var n = r(5),
      i = r(23),
      o = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      a = /^\w*$/;
    t.exports = function(t, e) {
      if (n(t)) return !1;
      var r = typeof t;
      return (
        !(
          "number" != r &&
          "symbol" != r &&
          "boolean" != r &&
          null != t &&
          !i(t)
        ) ||
        a.test(t) ||
        !o.test(t) ||
        (null != e && t in Object(e))
      );
    };
  },
  function(t, e, r) {
    var n = r(126),
      i = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      o = /\\(\\)?/g,
      a = n(function(t) {
        var e = [];
        return (
          46 === t.charCodeAt(0) && e.push(""),
          t.replace(i, function(t, r, n, i) {
            e.push(n ? i.replace(o, "$1") : r || t);
          }),
          e
        );
      });
    t.exports = a;
  },
  function(t, e, r) {
    var n = r(127);
    t.exports = function(t) {
      var e = n(t, function(t) {
          return 500 === r.size && r.clear(), t;
        }),
        r = e.cache;
      return e;
    };
  },
  function(t, e, r) {
    var n = r(29),
      i = "Expected a function";
    function o(t, e) {
      if ("function" != typeof t || (null != e && "function" != typeof e))
        throw new TypeError(i);
      var r = function() {
        var n = arguments,
          i = e ? e.apply(this, n) : n[0],
          o = r.cache;
        if (o.has(i)) return o.get(i);
        var a = t.apply(this, n);
        return (r.cache = o.set(i, a) || o), a;
      };
      return (r.cache = new (o.Cache || n)()), r;
    }
    (o.Cache = n), (t.exports = o);
  },
  function(t, e, r) {
    var n = r(129);
    t.exports = function(t) {
      return null == t ? "" : n(t);
    };
  },
  function(t, e, r) {
    var n = r(16),
      i = r(130),
      o = r(5),
      a = r(23),
      s = n ? n.prototype : void 0,
      l = s ? s.toString : void 0;
    t.exports = function t(e) {
      if ("string" == typeof e) return e;
      if (o(e)) return i(e, t) + "";
      if (a(e)) return l ? l.call(e) : "";
      var r = e + "";
      return "0" == r && 1 / e == -1 / 0 ? "-0" : r;
    };
  },
  function(t, e) {
    t.exports = function(t, e) {
      for (var r = -1, n = null == t ? 0 : t.length, i = Array(n); ++r < n; )
        i[r] = e(t[r], r, t);
      return i;
    };
  },
  function(t, e) {
    var r = Object.prototype.hasOwnProperty;
    t.exports = function(t, e) {
      return null != t && r.call(t, e);
    };
  },
  function(t, e, r) {
    var n = r(39),
      i = r(19),
      o = r(5),
      a = r(22),
      s = r(21),
      l = r(40);
    t.exports = function(t, e, r) {
      for (var h = -1, c = (e = n(e, t)).length, u = !1; ++h < c; ) {
        var p = l(e[h]);
        if (!(u = null != t && r(t, p))) break;
        t = t[p];
      }
      return u || ++h != c
        ? u
        : !!(c = null == t ? 0 : t.length) && s(c) && a(p, c) && (o(t) || i(t));
    };
  },
  function(t, e, r) {},
  function(t, e, r) {},
  function(t, e, r) {
    "use strict";
    r.r(e), r(56);
    var n = r(41),
      i = r(42),
      o = r.n(i),
      a = r(43),
      s = r(44),
      l = r(45),
      h = r(46),
      c = r(47),
      u = r(48),
      p = r(49),
      f = r(50),
      d = r(51),
      g = {
        en: a,
        de: s,
        it: l,
        ro: h,
        ru: c,
        es: u,
        nl: p,
        fr: f,
        pt_br: r(52),
        zh: d
      },
      _ = L.Class.extend({
        initialize: function(t) {
          (this.map = t),
            (this.Draw = new L.PM.Draw(t)),
            (this.Toolbar = new L.PM.Toolbar(t)),
            (this._globalRemovalMode = !1);
        },
        setLang: function() {
          var t =
              0 < arguments.length && void 0 !== arguments[0]
                ? arguments[0]
                : "en",
            e = 1 < arguments.length ? arguments[1] : void 0,
            r =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : "en";
          e && (g[t] = o()(g[r], e)),
            (L.PM.activeLang = t),
            this.map.pm.Toolbar.reinit();
        },
        addControls: function(t) {
          this.Toolbar.addControls(t);
        },
        removeControls: function() {
          this.Toolbar.removeControls();
        },
        toggleControls: function() {
          this.Toolbar.toggleControls();
        },
        controlsVisible: function() {
          return this.Toolbar.isVisible;
        },
        enableDraw: function() {
          var t =
              0 < arguments.length && void 0 !== arguments[0]
                ? arguments[0]
                : "Polygon",
            e = 1 < arguments.length ? arguments[1] : void 0;
          "Poly" === t && (t = "Polygon"), this.Draw.enable(t, e);
        },
        disableDraw: function() {
          var t =
            0 < arguments.length && void 0 !== arguments[0]
              ? arguments[0]
              : "Polygon";
          "Poly" === t && (t = "Polygon"), this.Draw.disable(t);
        },
        setPathOptions: function(t) {
          this.Draw.setPathOptions(t);
        },
        findLayers: function() {
          var t = [];
          return (
            this.map.eachLayer(function(e) {
              (e instanceof L.Polyline ||
                e instanceof L.Marker ||
                e instanceof L.Circle ||
                e instanceof L.CircleMarker) &&
                t.push(e);
            }),
            (t = (t = t.filter(function(t) {
              return !!t.pm;
            })).filter(function(t) {
              return !t._pmTempLayer;
            }))
          );
        },
        removeLayer: function(t) {
          var e = t.target;
          e._pmTempLayer ||
            (e.pm && e.pm.dragging()) ||
            (e.remove(), this.map.fire("pm:remove", { layer: e }));
        },
        globalDragModeEnabled: function() {
          return !!this._globalDragMode;
        },
        enableGlobalDragMode: function() {
          var t = this.findLayers();
          (this._globalDragMode = !0),
            t.forEach(function(t) {
              t.pm.enableLayerDrag();
            }),
            this.map.on("layeradd", this.layerAddHandler, this),
            this.Toolbar.toggleButton("dragMode", this._globalDragMode),
            this._fireDragModeEvent(!0);
        },
        disableGlobalDragMode: function() {
          var t = this.findLayers();
          (this._globalDragMode = !1),
            t.forEach(function(t) {
              t.pm.disableLayerDrag();
            }),
            this.map.off("layeradd", this.layerAddHandler, this),
            this.Toolbar.toggleButton("dragMode", this._globalDragMode),
            this._fireDragModeEvent(!1);
        },
        _fireDragModeEvent: function(t) {
          this.map.fire("pm:globaldragmodetoggled", {
            enabled: t,
            map: this.map
          });
        },
        toggleGlobalDragMode: function() {
          this.globalDragModeEnabled()
            ? this.disableGlobalDragMode()
            : this.enableGlobalDragMode();
        },
        layerAddHandler: function(t) {
          var e = t.layer;
          !e.pm ||
            e._pmTempLayer ||
            (this.globalRemovalEnabled() &&
              (this.disableGlobalRemovalMode(), this.enableGlobalRemovalMode()),
            this.globalEditEnabled() &&
              (this.disableGlobalEditMode(), this.enableGlobalEditMode()),
            this.globalDragModeEnabled() &&
              (this.disableGlobalDragMode(), this.enableGlobalDragMode()));
        },
        disableGlobalRemovalMode: function() {
          var t = this;
          (this._globalRemovalMode = !1),
            this.map.eachLayer(function(e) {
              e.off("click", t.removeLayer, t);
            }),
            this.map.off("layeradd", this.layerAddHandler, this),
            this.Toolbar.toggleButton("deleteLayer", this._globalRemovalMode),
            this._fireRemovalModeEvent(!1);
        },
        enableGlobalRemovalMode: function() {
          var t = this;
          (this._globalRemovalMode = !0),
            this.map.eachLayer(function(e) {
              (function(t) {
                return (
                  t.pm &&
                  !(t.pm.options && t.pm.options.preventMarkerRemoval) &&
                  !(t instanceof L.LayerGroup)
                );
              })(e) && e.on("click", t.removeLayer, t);
            }),
            this.map.on("layeradd", this.layerAddHandler, this),
            this.Toolbar.toggleButton("deleteLayer", this._globalRemovalMode),
            this._fireRemovalModeEvent(!0);
        },
        _fireRemovalModeEvent: function(t) {
          this.map.fire("pm:globalremovalmodetoggled", {
            enabled: t,
            map: this.map
          });
        },
        toggleGlobalRemovalMode: function() {
          this.globalRemovalEnabled()
            ? this.disableGlobalRemovalMode()
            : this.enableGlobalRemovalMode();
        },
        globalRemovalEnabled: function() {
          return !!this._globalRemovalMode;
        },
        globalEditEnabled: function() {
          return this._globalEditMode;
        },
        enableGlobalEditMode: function(t) {
          var e = this.findLayers();
          (this._globalEditMode = !0),
            e.forEach(function(e) {
              e.pm.enable(t);
            }),
            this.map.on("layeradd", this.layerAddHandler, this),
            this.Toolbar.toggleButton("editPolygon", this._globalEditMode),
            this._fireEditModeEvent(!0);
        },
        disableGlobalEditMode: function() {
          var t = this.findLayers();
          (this._globalEditMode = !1),
            t.forEach(function(t) {
              t.pm.disable();
            }),
            this.map.on("layeroff", this.layerAddHandler, this),
            this.Toolbar.toggleButton("editPolygon", this._globalEditMode),
            this._fireEditModeEvent(!1);
        },
        _fireEditModeEvent: function(t) {
          this.map.fire("pm:globaleditmodetoggled", {
            enabled: t,
            map: this.map
          });
        },
        toggleGlobalEditMode: function(t) {
          this.globalEditEnabled()
            ? this.disableGlobalEditMode()
            : this.enableGlobalEditMode(t);
        }
      }),
      m = r(0),
      y = r.n(m),
      v = r(53),
      b = r.n(v);
    function k(t) {
      var e = L.PM.activeLang;
      return b()(g, e) || (e = "en"), y()(g[e], t);
    }
    var M = L.Control.extend({
      options: { position: "topleft" },
      initialize: function(t) {
        this._button = L.Util.setOptions(this, t);
      },
      onAdd: function(t) {
        return (
          (this._map = t),
          (this._container =
            "edit" === this._button.tool
              ? this._map.pm.Toolbar.editContainer
              : this._map.pm.Toolbar.drawContainer),
          (this.buttonsDomNode = this._makeButton(this._button)),
          this._container.appendChild(this.buttonsDomNode),
          this._container
        );
      },
      onRemove: function() {
        return this.buttonsDomNode.remove(), this._container;
      },
      getText: function() {
        return this._button.text;
      },
      getIconUrl: function() {
        return this._button.iconUrl;
      },
      destroy: function() {
        (this._button = {}), this._update();
      },
      toggle: function(t) {
        return (
          (this._button.toggleStatus =
            "boolean" == typeof t ? t : !this._button.toggleStatus),
          this._applyStyleClasses(),
          this._button.toggleStatus
        );
      },
      toggled: function() {
        return this._button.toggleStatus;
      },
      onCreate: function() {
        this.toggle(!1);
      },
      _triggerClick: function(t) {
        this._button.onClick(t), this._clicked(t), this._button.afterClick(t);
      },
      _makeButton: function(t) {
        var e = this,
          r = L.DomUtil.create("div", "button-container", this._container),
          n = L.DomUtil.create("a", "leaflet-buttons-control-button", r),
          i = L.DomUtil.create("div", "leaflet-pm-actions-container", r),
          o = t.actions,
          a = {
            cancel: {
              text: k("actions.cancel"),
              onClick: function() {
                this._triggerClick();
              }
            },
            removeLastVertex: {
              text: k("actions.removeLastVertex"),
              onClick: function() {
                this._map.pm.Draw[t.jsClass]._removeLastVertex();
              }
            },
            finish: {
              text: k("actions.finish"),
              onClick: function(e) {
                this._map.pm.Draw[t.jsClass]._finishShape(e);
              }
            }
          };
        o.forEach(function(t) {
          var r = a[t],
            n = L.DomUtil.create("a", "leaflet-pm-action action-".concat(t), i);
          (n.innerHTML = r.text),
            L.DomEvent.addListener(n, "click", r.onClick, e),
            L.DomEvent.disableClickPropagation(n);
        }),
          t.toggleStatus && L.DomUtil.addClass(n, "active");
        var s = L.DomUtil.create("div", "control-icon", n);
        return (
          t.title && s.setAttribute("title", t.title),
          t.iconUrl && s.setAttribute("src", t.iconUrl),
          t.className && L.DomUtil.addClass(s, t.className),
          L.DomEvent.addListener(n, "click", function() {
            e._button.disableOtherButtons &&
              e._map.pm.Toolbar.triggerClickOnToggledButtons(e);
          }),
          L.DomEvent.addListener(n, "click", this._triggerClick, this),
          L.DomEvent.disableClickPropagation(n),
          r
        );
      },
      _applyStyleClasses: function() {
        this._container &&
          (this._button.toggleStatus
            ? L.DomUtil.addClass(this.buttonsDomNode, "active")
            : L.DomUtil.removeClass(this.buttonsDomNode, "active"));
      },
      _clicked: function() {
        this._button.doToggle && this.toggle();
      }
    });
    L.Control.PMButton = M;
    var w = L.Class.extend({
        options: {
          drawMarker: !0,
          drawRectangle: !0,
          drawPolyline: !0,
          drawPolygon: !0,
          drawCircle: !0,
          drawCircleMarker: !0,
          editMode: !0,
          dragMode: !0,
          cutPolygon: !0,
          removalMode: !0,
          position: "topleft"
        },
        initialize: function(t) {
          this.init(t);
        },
        reinit: function() {
          var t = this.isVisible;
          this.removeControls(), this._defineButtons(), t && this.addControls();
        },
        init: function(t) {
          (this.map = t),
            (this.buttons = {}),
            (this.isVisible = !1),
            (this.drawContainer = L.DomUtil.create(
              "div",
              "leaflet-pm-toolbar leaflet-pm-draw leaflet-bar leaflet-control"
            )),
            (this.editContainer = L.DomUtil.create(
              "div",
              "leaflet-pm-toolbar leaflet-pm-edit leaflet-bar leaflet-control"
            )),
            this._defineButtons();
        },
        getButtons: function() {
          return this.buttons;
        },
        addControls: function() {
          var t =
            0 < arguments.length && void 0 !== arguments[0]
              ? arguments[0]
              : this.options;
          void 0 !== t.editPolygon && (t.editMode = t.editPolygon),
            void 0 !== t.deleteLayer && (t.removalMode = t.deleteLayer),
            L.Util.setOptions(this, t),
            this.applyIconStyle(),
            this._showHideButtons(),
            (this.isVisible = !0);
        },
        applyIconStyle: function() {
          var t = this.getButtons(),
            e = {
              geomanIcons: {
                drawMarker: "control-icon leaflet-pm-icon-marker",
                drawPolyline: "control-icon leaflet-pm-icon-polyline",
                drawRectangle: "control-icon leaflet-pm-icon-rectangle",
                drawPolygon: "control-icon leaflet-pm-icon-polygon",
                drawCircle: "control-icon leaflet-pm-icon-circle",
                drawCircleMarker: "control-icon leaflet-pm-icon-circle-marker",
                editMode: "control-icon leaflet-pm-icon-edit",
                dragMode: "control-icon leaflet-pm-icon-drag",
                cutPolygon: "control-icon leaflet-pm-icon-cut",
                removalMode: "control-icon leaflet-pm-icon-delete"
              }
            };
          for (var r in t) {
            var n = t[r];
            L.Util.setOptions(n, { className: e.geomanIcons[r] });
          }
        },
        removeControls: function() {
          var t = this.getButtons();
          for (var e in t) t[e].remove();
          this.isVisible = !1;
        },
        toggleControls: function() {
          var t =
            0 < arguments.length && void 0 !== arguments[0]
              ? arguments[0]
              : this.options;
          this.isVisible ? this.removeControls() : this.addControls(t);
        },
        _addButton: function(t, e) {
          return (
            (this.buttons[t] = e),
            (this.options[t] = this.options[t] || !1),
            this.buttons[t]
          );
        },
        triggerClickOnToggledButtons: function(t) {
          for (var e in this.buttons)
            this.buttons[e] !== t &&
              this.buttons[e].toggled() &&
              this.buttons[e]._triggerClick();
        },
        toggleButton: function(t, e) {
          return (
            "editPolygon" === t && (t = "editMode"),
            "deleteLayer" === t && (t = "removalMode"),
            this.triggerClickOnToggledButtons(this.buttons[t]),
            this.buttons[t].toggle(e)
          );
        },
        _defineButtons: function() {
          var t = this,
            e = {
              className: "control-icon leaflet-pm-icon-marker",
              title: k("buttonTitles.drawMarkerButton"),
              jsClass: "Marker",
              onClick: function() {},
              afterClick: function() {
                t.map.pm.Draw.Marker.toggle();
              },
              doToggle: !0,
              toggleStatus: !1,
              disableOtherButtons: !0,
              position: this.options.position,
              actions: ["cancel"]
            },
            r = {
              title: k("buttonTitles.drawPolyButton"),
              className: "control-icon leaflet-pm-icon-polygon",
              jsClass: "Polygon",
              onClick: function() {},
              afterClick: function() {
                t.map.pm.Draw.Polygon.toggle();
              },
              doToggle: !0,
              toggleStatus: !1,
              disableOtherButtons: !0,
              position: this.options.position,
              actions: ["finish", "removeLastVertex", "cancel"]
            },
            n = {
              className: "control-icon leaflet-pm-icon-polyline",
              title: k("buttonTitles.drawLineButton"),
              jsClass: "Line",
              onClick: function() {},
              afterClick: function() {
                t.map.pm.Draw.Line.toggle();
              },
              doToggle: !0,
              toggleStatus: !1,
              disableOtherButtons: !0,
              position: this.options.position,
              actions: ["finish", "removeLastVertex", "cancel"]
            },
            i = {
              title: k("buttonTitles.drawCircleButton"),
              className: "control-icon leaflet-pm-icon-circle",
              jsClass: "Circle",
              onClick: function() {},
              afterClick: function() {
                t.map.pm.Draw.Circle.toggle();
              },
              doToggle: !0,
              toggleStatus: !1,
              disableOtherButtons: !0,
              position: this.options.position,
              actions: ["cancel"]
            },
            o = {
              title: k("buttonTitles.drawCircleMarkerButton"),
              className: "control-icon leaflet-pm-icon-circle-marker",
              jsClass: "CircleMarker",
              onClick: function() {},
              afterClick: function() {
                t.map.pm.Draw.CircleMarker.toggle();
              },
              doToggle: !0,
              toggleStatus: !1,
              disableOtherButtons: !0,
              position: this.options.position,
              actions: ["cancel"]
            },
            a = {
              title: k("buttonTitles.drawRectButton"),
              className: "control-icon leaflet-pm-icon-rectangle",
              jsClass: "Rectangle",
              onClick: function() {},
              afterClick: function() {
                t.map.pm.Draw.Rectangle.toggle();
              },
              doToggle: !0,
              toggleStatus: !1,
              disableOtherButtons: !0,
              position: this.options.position,
              actions: ["cancel"]
            },
            s = {
              title: k("buttonTitles.editButton"),
              className: "control-icon leaflet-pm-icon-edit",
              onClick: function() {},
              afterClick: function() {
                t.map.pm.toggleGlobalEditMode();
              },
              doToggle: !0,
              toggleStatus: !1,
              disableOtherButtons: !0,
              position: this.options.position,
              tool: "edit",
              actions: ["cancel"]
            },
            l = {
              title: k("buttonTitles.dragButton"),
              className: "control-icon leaflet-pm-icon-drag",
              onClick: function() {},
              afterClick: function() {
                t.map.pm.toggleGlobalDragMode();
              },
              doToggle: !0,
              toggleStatus: !1,
              disableOtherButtons: !0,
              position: this.options.position,
              tool: "edit",
              actions: ["cancel"]
            },
            h = {
              title: k("buttonTitles.cutButton"),
              className: "control-icon leaflet-pm-icon-cut",
              jsClass: "Cut",
              onClick: function() {},
              afterClick: function() {
                t.map.pm.Draw.Cut.toggle({
                  snappable: !0,
                  cursorMarker: !0,
                  allowSelfIntersection: !1
                });
              },
              doToggle: !0,
              toggleStatus: !1,
              disableOtherButtons: !0,
              position: this.options.position,
              tool: "edit",
              actions: ["finish", "removeLastVertex", "cancel"]
            },
            c = {
              title: k("buttonTitles.deleteButton"),
              className: "control-icon leaflet-pm-icon-delete",
              onClick: function() {},
              afterClick: function() {
                t.map.pm.toggleGlobalRemovalMode();
              },
              doToggle: !0,
              toggleStatus: !1,
              disableOtherButtons: !0,
              position: this.options.position,
              tool: "edit",
              actions: ["cancel"]
            };
          this._addButton("drawMarker", new L.Control.PMButton(e)),
            this._addButton("drawPolyline", new L.Control.PMButton(n)),
            this._addButton("drawRectangle", new L.Control.PMButton(a)),
            this._addButton("drawPolygon", new L.Control.PMButton(r)),
            this._addButton("drawCircle", new L.Control.PMButton(i)),
            this._addButton("drawCircleMarker", new L.Control.PMButton(o)),
            this._addButton("editMode", new L.Control.PMButton(s)),
            this._addButton("dragMode", new L.Control.PMButton(l)),
            this._addButton("cutPolygon", new L.Control.PMButton(h)),
            this._addButton("removalMode", new L.Control.PMButton(c));
        },
        _showHideButtons: function() {
          this.removeControls();
          var t = this.getButtons();
          for (var e in t)
            this.options[e] &&
              (t[e].setPosition(this.options.position), t[e].addTo(this.map));
        }
      }),
      C = function(t, e, r) {
        var n = t.project(e),
          i = t.project(r);
        return t.unproject(n._add(i)._divideBy(2));
      },
      x = {
        _initSnappableMarkers: function() {
          (this.options.snapDistance = this.options.snapDistance || 30),
            this._assignEvents(this._markers),
            this._layer.off("pm:dragstart", this._unsnap, this),
            this._layer.on("pm:dragstart", this._unsnap, this);
        },
        _assignEvents: function(t) {
          var e = this;
          t.forEach(function(t) {
            Array.isArray(t)
              ? e._assignEvents(t)
              : (t.off("drag", e._handleSnapping, e),
                t.on("drag", e._handleSnapping, e),
                t.off("dragend", e._cleanupSnapping, e),
                t.on("dragend", e._cleanupSnapping, e));
          });
        },
        _unsnap: function() {
          delete this._snapLatLng;
        },
        _cleanupSnapping: function() {
          delete this._snapList,
            this._map.off("pm:remove", this._handleSnapLayerRemoval, this),
            this.debugIndicatorLines &&
              this.debugIndicatorLines.forEach(function(t) {
                t.remove();
              });
        },
        _handleSnapLayerRemoval: function(t) {
          var e = t.layer,
            r = this._snapList.findIndex(function(t) {
              return t._leaflet_id === e._leaflet_id;
            });
          this._snapList.splice(r, 1);
        },
        _handleSnapping: function(t) {
          var e = this;
          if (t.originalEvent.altKey) return !1;
          if (
            (void 0 === this._snapList &&
              (this._createSnapList(),
              this._map.off("layeradd", this._createSnapList, this),
              this._map.on("layeradd", this._createSnapList, this)),
            this._snapList.length <= 0)
          )
            return !1;
          var r,
            n = t.target,
            i = this._calcClosestLayer(n.getLatLng(), this._snapList),
            o =
              i.layer instanceof L.Marker || i.layer instanceof L.CircleMarker;
          r = o ? i.latlng : this._checkPrioritiySnapping(i);
          var a = this.options.snapDistance,
            s = {
              marker: n,
              snapLatLng: r,
              segment: i.segment,
              layer: this._layer,
              layerInteractedWith: i.layer,
              distance: i.distance
            };
          if (
            (s.marker.fire("pm:snapdrag", s),
            this._layer.fire("pm:snapdrag", s),
            i.distance < a)
          ) {
            n.setLatLng(r), (n._snapped = !0);
            var l = this._snapLatLng || {},
              h = r || {};
            (l.lat === h.lat && l.lng === h.lng) ||
              ((e._snapLatLng = r),
              n.fire("pm:snap", s),
              e._layer.fire("pm:snap", s));
          } else
            this._snapLatLng &&
              (this._unsnap(s),
              (n._snapped = !1),
              s.marker.fire("pm:unsnap", s),
              this._layer.fire("pm:unsnap", s));
          return !0;
        },
        _checkPrioritiySnapping: function(t) {
          var e,
            r = this._map,
            n = t.segment[0],
            i = t.segment[1],
            o = t.latlng,
            a = this._getDistance(r, n, o),
            s = this._getDistance(r, i, o),
            l = a < s ? n : i,
            h = a < s ? a : s;
          if (this.options.snapMiddle) {
            var c = C(r, n, i),
              u = this._getDistance(r, c, o);
            u < a && u < s && ((l = c), (h = u));
          }
          return (
            (e = h < this.options.snapDistance ? l : o), Object.assign({}, e)
          );
        },
        _createSnapList: function() {
          var t = this,
            e = [],
            r = [],
            n = this._map;
          n.off("pm:remove", this._handleSnapLayerRemoval, this),
            n.on("pm:remove", this._handleSnapLayerRemoval, this),
            n.eachLayer(function(t) {
              if (
                (t instanceof L.Polyline ||
                  t instanceof L.Marker ||
                  t instanceof L.CircleMarker) &&
                !0 !== t.options.snapIgnore
              ) {
                e.push(t);
                var n = L.polyline([], { color: "red", pmIgnore: !0 });
                (n._pmTempLayer = !0), r.push(n);
              }
            }),
            (e = (e = (e = e.filter(function(e) {
              return t._layer !== e;
            })).filter(function(t) {
              return t._latlng || (t._latlngs && 0 < t._latlngs.length);
            })).filter(function(t) {
              return !t._pmTempLayer;
            })),
            this._otherSnapLayers
              ? (this._snapList = e.concat(this._otherSnapLayers))
              : (this._snapList = e),
            (this.debugIndicatorLines = r);
        },
        _calcClosestLayer: function(t, e) {
          var r = this,
            n = {};
          return (
            e.forEach(function(e, i) {
              var o = r._calcLayerDistances(t, e);
              r.debugIndicatorLines[i].setLatLngs([t, o.latlng]),
                (void 0 === n.distance || o.distance < n.distance) &&
                  ((n = o).layer = e);
            }),
            n
          );
        },
        _calcLayerDistances: function(t, e) {
          var r,
            n,
            i = this,
            o = this._map,
            a = e instanceof L.Marker || e instanceof L.CircleMarker,
            s = e instanceof L.Polygon,
            l = t,
            h = a ? e.getLatLng() : e.getLatLngs();
          if (a)
            return {
              latlng: Object.assign({}, h),
              distance: this._getDistance(o, h, l)
            };
          !(function t(e) {
            e.forEach(function(a, h) {
              if (Array.isArray(a)) t(a);
              else {
                var c,
                  u = a;
                c = s
                  ? h + 1 === e.length
                    ? 0
                    : h + 1
                  : h + 1 === e.length
                  ? void 0
                  : h + 1;
                var p = e[c];
                if (p) {
                  var f = i._getDistanceToSegment(o, l, u, p);
                  (void 0 === n || f < n) && ((n = f), (r = [u, p]));
                }
              }
            });
          })(h);
          var c = this._getClosestPointOnSegment(o, t, r[0], r[1]);
          return { latlng: Object.assign({}, c), segment: r, distance: n };
        },
        _getClosestPointOnSegment: function(t, e, r, n) {
          var i = t.getMaxZoom();
          i === 1 / 0 && (i = t.getZoom());
          var o = t.project(e, i),
            a = t.project(r, i),
            s = t.project(n, i),
            l = L.LineUtil.closestPointOnSegment(o, a, s);
          return t.unproject(l, i);
        },
        _getDistanceToSegment: function(t, e, r, n) {
          var i = t.latLngToLayerPoint(e),
            o = t.latLngToLayerPoint(r),
            a = t.latLngToLayerPoint(n);
          return L.LineUtil.pointToSegmentDistance(i, o, a);
        },
        _getDistance: function(t, e, r) {
          return t.latLngToLayerPoint(e).distanceTo(t.latLngToLayerPoint(r));
        }
      },
      S = L.Class.extend({
        includes: [x],
        options: {
          snappable: !0,
          snapDistance: 20,
          tooltips: !0,
          cursorMarker: !0,
          finishOnDoubleClick: !1,
          finishOn: null,
          allowSelfIntersection: !0,
          templineStyle: {},
          hintlineStyle: { color: "#3388ff", dashArray: "5,5" },
          markerStyle: { draggable: !0 }
        },
        initialize: function(t) {
          var e = this;
          (this._map = t),
            (this.shapes = [
              "Marker",
              "CircleMarker",
              "Line",
              "Polygon",
              "Rectangle",
              "Circle",
              "Cut"
            ]),
            this.shapes.forEach(function(t) {
              e[t] = new L.PM.Draw[t](e._map);
            });
        },
        setPathOptions: function(t) {
          this.options.pathOptions = t;
        },
        getShapes: function() {
          return this.shapes;
        },
        enable: function(t, e) {
          if (!t)
            throw new Error(
              "Error: Please pass a shape as a parameter. Possible shapes are: ".concat(
                this.getShapes().join(",")
              )
            );
          this.disable(), this[t].enable(e);
        },
        disable: function() {
          var t = this;
          this.shapes.forEach(function(e) {
            t[e].disable();
          });
        },
        addControls: function() {
          var t = this;
          this.shapes.forEach(function(e) {
            t[e].addButton();
          });
        }
      });
    S.Marker = S.extend({
      initialize: function(t) {
        (this._map = t),
          (this._shape = "Marker"),
          (this.toolbarButtonName = "drawMarker");
      },
      enable: function(t) {
        var e = this;
        L.Util.setOptions(this, t),
          (this._enabled = !0),
          this._map.on("click", this._createMarker, this),
          this._map.pm.Toolbar.toggleButton(this.toolbarButtonName, !0),
          (this._hintMarker = L.marker([0, 0], this.options.markerStyle)),
          (this._hintMarker._pmTempLayer = !0),
          this._hintMarker.addTo(this._map),
          this.options.tooltips &&
            this._hintMarker
              .bindTooltip(k("tooltips.placeMarker"), {
                permanent: !0,
                offset: L.point(0, 10),
                direction: "bottom",
                opacity: 0.8
              })
              .openTooltip(),
          (this._layer = this._hintMarker),
          this._map.on("mousemove", this._syncHintMarker, this),
          this._map.fire("pm:drawstart", {
            shape: this._shape,
            workingLayer: this._layer
          }),
          this._map.eachLayer(function(t) {
            e.isRelevantMarker(t) && t.pm.enable();
          });
      },
      disable: function() {
        var t = this;
        this._enabled &&
          (this._map.off("click", this._createMarker, this),
          this._hintMarker.remove(),
          this._map.off("mousemove", this._syncHintMarker, this),
          this._map.eachLayer(function(e) {
            t.isRelevantMarker(e) && e.pm.disable();
          }),
          this._map.fire("pm:drawend", { shape: this._shape }),
          this._map.pm.Toolbar.toggleButton(this.toolbarButtonName, !1),
          this.options.snappable && this._cleanupSnapping(),
          (this._enabled = !1));
      },
      isRelevantMarker: function(t) {
        return t instanceof L.Marker && t.pm && !t._pmTempLayer;
      },
      enabled: function() {
        return this._enabled;
      },
      toggle: function(t) {
        this.enabled() ? this.disable() : this.enable(t);
      },
      _createMarker: function(t) {
        if (t.latlng) {
          this._hintMarker._snapped || this._hintMarker.setLatLng(t.latlng);
          var e = this._hintMarker.getLatLng(),
            r = new L.Marker(e, this.options.markerStyle);
          r.addTo(this._map),
            r.pm.enable(),
            this._map.fire("pm:create", {
              shape: this._shape,
              marker: r,
              layer: r
            }),
            this._cleanupSnapping();
        }
      },
      _syncHintMarker: function(t) {
        if ((this._hintMarker.setLatLng(t.latlng), this.options.snappable)) {
          var e = t;
          (e.target = this._hintMarker), this._handleSnapping(e);
        }
      }
    });
    var E = r(6),
      P = r.n(E);
    (S.Line = S.extend({
      initialize: function(t) {
        (this._map = t),
          (this._shape = "Line"),
          (this.toolbarButtonName = "drawPolyline"),
          (this._doesSelfIntersect = !1);
      },
      enable: function(t) {
        L.Util.setOptions(this, t),
          this.options.finishOnDoubleClick &&
            !this.options.finishOn &&
            (this.options.finishOn = "dblclick"),
          (this._enabled = !0),
          (this._layerGroup = new L.LayerGroup()),
          (this._layerGroup._pmTempLayer = !0),
          this._layerGroup.addTo(this._map),
          (this._layer = L.polyline([], this.options.templineStyle)),
          (this._layer._pmTempLayer = !0),
          this._layerGroup.addLayer(this._layer),
          (this._hintline = L.polyline([], this.options.hintlineStyle)),
          (this._hintline._pmTempLayer = !0),
          this._layerGroup.addLayer(this._hintline),
          (this._hintMarker = L.marker(this._map.getCenter(), {
            icon: L.divIcon({ className: "marker-icon cursor-marker" })
          })),
          (this._hintMarker._pmTempLayer = !0),
          this._layerGroup.addLayer(this._hintMarker),
          this.options.cursorMarker &&
            L.DomUtil.addClass(this._hintMarker._icon, "visible"),
          this.options.tooltips &&
            this._hintMarker
              .bindTooltip(k("tooltips.firstVertex"), {
                permanent: !0,
                offset: L.point(0, 10),
                direction: "bottom",
                opacity: 0.8
              })
              .openTooltip(),
          (this._map._container.style.cursor = "crosshair"),
          this._map.on("click", this._createVertex, this),
          this.options.finishOn &&
            this._map.on(this.options.finishOn, this._finishShape, this),
          "dblclick" === this.options.finishOn &&
            ((this.tempMapDoubleClickZoomState = this._map.doubleClickZoom._enabled),
            this.tempMapDoubleClickZoomState &&
              this._map.doubleClickZoom.disable()),
          this._map.on("mousemove", this._syncHintMarker, this),
          this._hintMarker.on("move", this._syncHintLine, this),
          this._map.fire("pm:drawstart", {
            shape: this._shape,
            workingLayer: this._layer
          }),
          this._map.pm.Toolbar.toggleButton(this.toolbarButtonName, !0),
          (this._otherSnapLayers = []);
      },
      disable: function() {
        this._enabled &&
          ((this._enabled = !1),
          (this._map._container.style.cursor = ""),
          this._map.off("click", this._createVertex, this),
          this._map.off("mousemove", this._syncHintMarker, this),
          this.options.finishOn &&
            this._map.off(this.options.finishOn, this._finishShape, this),
          this.tempMapDoubleClickZoomState &&
            this._map.doubleClickZoom.enable(),
          this._map.removeLayer(this._layerGroup),
          this._map.fire("pm:drawend", { shape: this._shape }),
          this._map.pm.Toolbar.toggleButton(this.toolbarButtonName, !1),
          this.options.snappable && this._cleanupSnapping());
      },
      enabled: function() {
        return this._enabled;
      },
      toggle: function(t) {
        this.enabled() ? this.disable() : this.enable(t);
      },
      hasSelfIntersection: function() {
        return 0 < P()(this._layer.toGeoJSON(15)).features.length;
      },
      _syncHintLine: function() {
        var t = this._layer.getLatLngs();
        if (0 < t.length) {
          var e = t[t.length - 1];
          this._hintline.setLatLngs([e, this._hintMarker.getLatLng()]);
        }
      },
      _syncHintMarker: function(t) {
        if ((this._hintMarker.setLatLng(t.latlng), this.options.snappable)) {
          var e = t;
          (e.target = this._hintMarker), this._handleSnapping(e);
        }
        this.options.allowSelfIntersection ||
          this._handleSelfIntersection(!0, t.latlng);
      },
      _handleSelfIntersection: function(t, e) {
        var r = L.polyline(this._layer.getLatLngs());
        t && ((e = e || this._hintMarker.getLatLng()), r.addLatLng(e));
        var n = P()(r.toGeoJSON(15));
        (this._doesSelfIntersect = 0 < n.features.length),
          this._doesSelfIntersect
            ? this._hintline.setStyle({ color: "red" })
            : this._hintline.setStyle(this.options.hintlineStyle);
      },
      _removeLastVertex: function() {
        var t = this._layer.getLatLngs(),
          e = t.pop();
        if (t.length < 1) this.disable();
        else {
          var r = this._layerGroup
            .getLayers()
            .filter(function(t) {
              return t instanceof L.Marker;
            })
            .filter(function(t) {
              return !L.DomUtil.hasClass(t._icon, "cursor-marker");
            })
            .find(function(t) {
              return t.getLatLng() === e;
            });
          this._layerGroup.removeLayer(r),
            this._layer.setLatLngs(t),
            this._syncHintLine();
        }
      },
      _createVertex: function(t) {
        if (
          this.options.allowSelfIntersection ||
          (this._handleSelfIntersection(!0, t.latlng), !this._doesSelfIntersect)
        ) {
          this._hintMarker._snapped || this._hintMarker.setLatLng(t.latlng);
          var e = this._hintMarker.getLatLng();
          if (e.equals(this._layer.getLatLngs()[0])) this._finishShape(t);
          else {
            var r = 0 === this._layer.getLatLngs().length;
            this._layer.addLatLng(e);
            var n = this._createMarker(e, r);
            this._hintline.setLatLngs([e, e]),
              this._layer.fire("pm:vertexadded", {
                shape: this._shape,
                workingLayer: this._layer,
                marker: n,
                latlng: e
              });
          }
        }
      },
      _finishShape: function() {
        if (
          this.options.allowSelfIntersection ||
          (this._handleSelfIntersection(!1), !this._doesSelfIntersect)
        ) {
          var t = this._layer.getLatLngs();
          if (!(t.length <= 1)) {
            var e = L.polyline(t, this.options.pathOptions).addTo(this._map);
            this.disable(),
              this._map.fire("pm:create", { shape: this._shape, layer: e }),
              this.options.snappable && this._cleanupSnapping();
          }
        }
      },
      _createMarker: function(t, e) {
        var r = new L.Marker(t, {
          draggable: !1,
          icon: L.divIcon({ className: "marker-icon" })
        });
        return (
          (r._pmTempLayer = !0),
          this._layerGroup.addLayer(r),
          r.on("click", this._finishShape, this),
          e && this._hintMarker.setTooltipContent(k("tooltips.continueLine")),
          2 === this._layer.getLatLngs().length &&
            this._hintMarker.setTooltipContent(k("tooltips.finishLine")),
          r
        );
      }
    })),
      (S.Polygon = S.Line.extend({
        initialize: function(t) {
          (this._map = t),
            (this._shape = "Polygon"),
            (this.toolbarButtonName = "drawPolygon");
        },
        _finishShape: function(t) {
          if (
            this.options.allowSelfIntersection ||
            (this._handleSelfIntersection(!1), !this._doesSelfIntersect)
          ) {
            var e = this._layer.getLatLngs();
            if (!(e.length <= 2)) {
              t && "dblclick" === t.type && e.splice(e.length - 1, 1);
              var r = L.polygon(e, this.options.pathOptions).addTo(this._map);
              this.disable(),
                this._map.fire("pm:create", { shape: this._shape, layer: r }),
                this._cleanupSnapping(),
                this._otherSnapLayers.splice(this._tempSnapLayerIndex, 1),
                delete this._tempSnapLayerIndex;
            }
          }
        },
        _createMarker: function(t, e) {
          var r = new L.Marker(t, {
            draggable: !1,
            icon: L.divIcon({ className: "marker-icon" })
          });
          return (
            (r._pmTempLayer = !0),
            this._layerGroup.addLayer(r),
            e &&
              (r.on("click", this._finishShape, this),
              (this._tempSnapLayerIndex = this._otherSnapLayers.push(r) - 1),
              this.options.snappable && this._cleanupSnapping()),
            e && this._hintMarker.setTooltipContent(k("tooltips.continueLine")),
            3 === this._layer.getLatLngs().length &&
              this._hintMarker.setTooltipContent(k("tooltips.finishPoly")),
            r
          );
        }
      })),
      (S.Rectangle = S.extend({
        initialize: function(t) {
          (this._map = t),
            (this._shape = "Rectangle"),
            (this.toolbarButtonName = "drawRectangle");
        },
        enable: function(t) {
          if (
            (L.Util.setOptions(this, t),
            (this._enabled = !0),
            (this._layerGroup = new L.LayerGroup()),
            (this._layerGroup._pmTempLayer = !0),
            this._layerGroup.addTo(this._map),
            (this._layer = L.rectangle(
              [
                [0, 0],
                [0, 0]
              ],
              this.options.pathOptions
            )),
            (this._layer._pmTempLayer = !0),
            (this._startMarker = L.marker([0, 0], {
              icon: L.divIcon({ className: "marker-icon rect-start-marker" }),
              draggable: !0,
              zIndexOffset: 100,
              opacity: this.options.cursorMarker ? 1 : 0
            })),
            (this._startMarker._pmTempLayer = !0),
            this._layerGroup.addLayer(this._startMarker),
            (this._hintMarker = L.marker([0, 0], {
              icon: L.divIcon({ className: "marker-icon cursor-marker" })
            })),
            (this._hintMarker._pmTempLayer = !0),
            this._layerGroup.addLayer(this._hintMarker),
            this.options.tooltips &&
              this._hintMarker
                .bindTooltip(k("tooltips.firstVertex"), {
                  permanent: !0,
                  offset: L.point(0, 10),
                  direction: "bottom",
                  opacity: 0.8
                })
                .openTooltip(),
            this.options.cursorMarker)
          ) {
            L.DomUtil.addClass(this._hintMarker._icon, "visible"),
              (this._styleMarkers = []);
            for (var e = 0; e < 2; e += 1) {
              var r = L.marker([0, 0], {
                icon: L.divIcon({ className: "marker-icon rect-style-marker" }),
                draggable: !0,
                zIndexOffset: 100
              });
              (r._pmTempLayer = !0),
                this._layerGroup.addLayer(r),
                this._styleMarkers.push(r);
            }
          }
          (this._map._container.style.cursor = "crosshair"),
            this._map.on("click", this._placeStartingMarkers, this),
            this._map.on("mousemove", this._syncHintMarker, this),
            this._map.fire("pm:drawstart", {
              shape: this._shape,
              workingLayer: this._layer
            }),
            this._map.pm.Toolbar.toggleButton(this.toolbarButtonName, !0),
            (this._otherSnapLayers = []);
        },
        disable: function() {
          this._enabled &&
            ((this._enabled = !1),
            (this._map._container.style.cursor = ""),
            this._map.off("click", this._finishShape, this),
            this._map.off("click", this._placeStartingMarkers, this),
            this._map.off("mousemove", this._syncHintMarker, this),
            this._map.removeLayer(this._layerGroup),
            this._map.fire("pm:drawend", { shape: this._shape }),
            this._map.pm.Toolbar.toggleButton(this.toolbarButtonName, !1),
            this.options.snappable && this._cleanupSnapping());
        },
        enabled: function() {
          return this._enabled;
        },
        toggle: function(t) {
          this.enabled() ? this.disable() : this.enable(t);
        },
        _placeStartingMarkers: function(t) {
          this._hintMarker._snapped || this._hintMarker.setLatLng(t.latlng);
          var e = this._hintMarker.getLatLng();
          L.DomUtil.addClass(this._startMarker._icon, "visible"),
            this._startMarker.setLatLng(e),
            this.options.cursorMarker &&
              this._styleMarkers &&
              this._styleMarkers.forEach(function(t) {
                L.DomUtil.addClass(t._icon, "visible"), t.setLatLng(e);
              }),
            this._map.off("click", this._placeStartingMarkers, this),
            this._map.on("click", this._finishShape, this),
            this._hintMarker.setTooltipContent(k("tooltips.finishRect")),
            this._setRectangleOrigin();
        },
        _setRectangleOrigin: function() {
          var t = this._startMarker.getLatLng();
          t &&
            (this._layerGroup.addLayer(this._layer),
            this._layer.setLatLngs([t, t]),
            this._hintMarker.on("move", this._syncRectangleSize, this));
        },
        _syncHintMarker: function(t) {
          if ((this._hintMarker.setLatLng(t.latlng), this.options.snappable)) {
            var e = t;
            (e.target = this._hintMarker), this._handleSnapping(e);
          }
        },
        _syncRectangleSize: function() {
          var t = this,
            e = this._startMarker.getLatLng(),
            r = this._hintMarker.getLatLng();
          if (
            (this._layer.setBounds([e, r]),
            this.options.cursorMarker && this._styleMarkers)
          ) {
            var n = this._findCorners(),
              i = [];
            n.forEach(function(e) {
              e.equals(t._startMarker.getLatLng()) ||
                e.equals(t._hintMarker.getLatLng()) ||
                i.push(e);
            }),
              i.forEach(function(e, r) {
                t._styleMarkers[r].setLatLng(e);
              });
          }
        },
        _finishShape: function(t) {
          this._hintMarker._snapped || this._hintMarker.setLatLng(t.latlng);
          var e = this._hintMarker.getLatLng(),
            r = this._startMarker.getLatLng(),
            n = L.rectangle([r, e], this.options.pathOptions).addTo(this._map);
          this.disable(),
            this._map.fire("pm:create", { shape: this._shape, layer: n });
        },
        _findCorners: function() {
          var t = this._layer.getBounds();
          return [
            t.getNorthWest(),
            t.getNorthEast(),
            t.getSouthEast(),
            t.getSouthWest()
          ];
        }
      })),
      (S.Circle = S.extend({
        initialize: function(t) {
          (this._map = t),
            (this._shape = "Circle"),
            (this.toolbarButtonName = "drawCircle");
        },
        enable: function(t) {
          L.Util.setOptions(this, t),
            (this.options.radius = 0),
            (this._enabled = !0),
            (this._layerGroup = new L.LayerGroup()),
            (this._layerGroup._pmTempLayer = !0),
            this._layerGroup.addTo(this._map),
            (this._layer = L.circle([0, 0], this.options.templineStyle)),
            (this._layer._pmTempLayer = !0),
            this._layerGroup.addLayer(this._layer),
            (this._centerMarker = L.marker([0, 0], {
              icon: L.divIcon({ className: "marker-icon" }),
              draggable: !1,
              zIndexOffset: 100
            })),
            (this._centerMarker._pmTempLayer = !0),
            this._layerGroup.addLayer(this._centerMarker),
            (this._hintMarker = L.marker([0, 0], {
              icon: L.divIcon({ className: "marker-icon cursor-marker" })
            })),
            (this._hintMarker._pmTempLayer = !0),
            this._layerGroup.addLayer(this._hintMarker),
            this.options.cursorMarker &&
              L.DomUtil.addClass(this._hintMarker._icon, "visible"),
            this.options.tooltips &&
              this._hintMarker
                .bindTooltip(k("tooltips.startCircle"), {
                  permanent: !0,
                  offset: L.point(0, 10),
                  direction: "bottom",
                  opacity: 0.8
                })
                .openTooltip(),
            (this._hintline = L.polyline([], this.options.hintlineStyle)),
            (this._hintline._pmTempLayer = !0),
            this._layerGroup.addLayer(this._hintline),
            (this._map._container.style.cursor = "crosshair"),
            this._map.on("click", this._placeCenterMarker, this),
            this._map.on("mousemove", this._syncHintMarker, this),
            this._map.fire("pm:drawstart", {
              shape: this._shape,
              workingLayer: this._layer
            }),
            this._map.pm.Toolbar.toggleButton(this.toolbarButtonName, !0),
            (this._otherSnapLayers = []);
        },
        disable: function() {
          this._enabled &&
            ((this._enabled = !1),
            (this._map._container.style.cursor = ""),
            this._map.off("click", this._finishShape, this),
            this._map.off("click", this._placeCenterMarker, this),
            this._map.off("mousemove", this._syncHintMarker, this),
            this._map.removeLayer(this._layerGroup),
            this._map.fire("pm:drawend", { shape: this._shape }),
            this._map.pm.Toolbar.toggleButton(this.toolbarButtonName, !1),
            this.options.snappable && this._cleanupSnapping());
        },
        enabled: function() {
          return this._enabled;
        },
        toggle: function(t) {
          this.enabled() ? this.disable() : this.enable(t);
        },
        _syncHintLine: function() {
          var t = this._centerMarker.getLatLng();
          this._hintline.setLatLngs([t, this._hintMarker.getLatLng()]);
        },
        _syncCircleRadius: function() {
          var t = this._centerMarker.getLatLng(),
            e = this._hintMarker.getLatLng(),
            r = t.distanceTo(e);
          this._layer.setRadius(r);
        },
        _syncHintMarker: function(t) {
          if ((this._hintMarker.setLatLng(t.latlng), this.options.snappable)) {
            var e = t;
            (e.target = this._hintMarker), this._handleSnapping(e);
          }
        },
        _placeCenterMarker: function(t) {
          this._hintMarker._snapped || this._hintMarker.setLatLng(t.latlng);
          var e = this._hintMarker.getLatLng();
          this._centerMarker.setLatLng(e),
            this._map.off("click", this._placeCenterMarker, this),
            this._map.on("click", this._finishShape, this),
            this._placeCircleCenter();
        },
        _placeCircleCenter: function() {
          var t = this._centerMarker.getLatLng();
          t &&
            (this._layer.setLatLng(t),
            this._hintMarker.on("move", this._syncHintLine, this),
            this._hintMarker.on("move", this._syncCircleRadius, this),
            this._hintMarker.setTooltipContent(k("tooltips.finishCircle")),
            this._layer.fire("pm:centerplaced", {
              shape: this._shape,
              workingLayer: this._layer,
              latlng: t
            }));
        },
        _finishShape: function(t) {
          var e = this._centerMarker.getLatLng(),
            r = t.latlng,
            n = e.distanceTo(r),
            i = Object.assign({}, this.options.pathOptions, { radius: n }),
            o = L.circle(e, i).addTo(this._map);
          this.disable(),
            this._map.fire("pm:create", { shape: this._shape, layer: o });
        },
        _createMarker: function(t) {
          var e = new L.Marker(t, {
            draggable: !1,
            icon: L.divIcon({ className: "marker-icon" })
          });
          return (e._pmTempLayer = !0), this._layerGroup.addLayer(e), e;
        }
      })),
      (S.CircleMarker = S.Marker.extend({
        initialize: function(t) {
          (this._map = t),
            (this._shape = "CircleMarker"),
            (this.toolbarButtonName = "drawCircleMarker");
        },
        enable: function(t) {
          var e = this;
          L.Util.setOptions(this, t),
            (this._enabled = !0),
            this._map.on("click", this._createMarker, this),
            this._map.pm.Toolbar.toggleButton(this.toolbarButtonName, !0),
            (this._hintMarker = L.circleMarker(
              [0, 0],
              this.options.templineStyle
            )),
            (this._hintMarker._pmTempLayer = !0),
            this._hintMarker.addTo(this._map),
            this.options.tooltips &&
              this._hintMarker
                .bindTooltip(k("tooltips.placeCircleMarker"), {
                  permanent: !0,
                  offset: L.point(0, 10),
                  direction: "bottom",
                  opacity: 0.8
                })
                .openTooltip(),
            (this._layer = this._hintMarker),
            this._map.on("mousemove", this._syncHintMarker, this),
            this._map.fire("pm:drawstart", {
              shape: this._shape,
              workingLayer: this._layer
            }),
            this._map.eachLayer(function(t) {
              e.isRelevantMarker(t) && t.pm.enable();
            });
        },
        isRelevantMarker: function(t) {
          return (
            t instanceof L.CircleMarker &&
            !(t instanceof L.Circle) &&
            t.pm &&
            !t._pmTempLayer
          );
        },
        _createMarker: function(t) {
          if (t.latlng) {
            this._hintMarker._snapped || this._hintMarker.setLatLng(t.latlng);
            var e = this._hintMarker.getLatLng(),
              r = L.circleMarker(e, this.options.pathOptions);
            r.addTo(this._map),
              r.pm.enable(),
              this._map.fire("pm:create", {
                shape: this._shape,
                marker: r,
                layer: r
              }),
              this._cleanupSnapping();
          }
        }
      }));
    var O = r(54),
      B = r.n(O),
      T = r(24),
      D = r(26),
      j = r.n(D),
      I = r(1),
      R = r(13),
      G = r(25);
    function A(t) {
      switch (t.type) {
        case "Polygon":
          return 1 < j()(t) ? t : null;
        case "MultiPolygon":
          var e = [];
          if (
            (Object(G.flattenEach)(t, function(t) {
              1 < j()(t) && e.push(t.geometry.coordinates);
            }),
            e.length)
          )
            return { type: "MultiPolygon", coordinates: e };
      }
    }
    S.Cut = S.Polygon.extend({
      initialize: function(t) {
        (this._map = t),
          (this._shape = "Cut"),
          (this.toolbarButtonName = "cutPolygon");
      },
      _cut: function(t) {
        var e = this,
          r = this._map._layers;
        Object.keys(r)
          .map(function(t) {
            return r[t];
          })
          .filter(function(t) {
            return t.pm;
          })
          .filter(function(t) {
            return t instanceof L.Polygon;
          })
          .filter(function(e) {
            return e !== t;
          })
          .filter(function(e) {
            try {
              return !!B()(t.toGeoJSON(15), e.toGeoJSON(15));
            } catch (t) {
              return (
                console.error("You cant cut polygons with self-intersections"),
                !1
              );
            }
          })
          .forEach(function(r) {
            var n = (function(t, e) {
                var r = Object(R.getGeom)(t),
                  n = Object(R.getGeom)(e),
                  i = t.properties || {};
                if (((r = A(r)), (n = A(n)), !r)) return null;
                if (!n) return Object(I.feature)(r, i);
                var o = T.diff(r.coordinates, n.coordinates);
                return 0 === o.length
                  ? null
                  : 1 === o.length
                  ? Object(I.polygon)(o[0], i)
                  : Object(I.multiPolygon)(o, i);
              })(r.toGeoJSON(15), t.toGeoJSON(15)),
              i = L.geoJSON(n, r.options).addTo(e._map);
            i.addTo(e._map),
              i.pm.enable(e.options),
              i.pm.disable(),
              r.fire("pm:cut", { shape: e._shape, layer: i, originalLayer: r }),
              e._map.fire("pm:cut", {
                shape: e._shape,
                layer: i,
                originalLayer: r
              }),
              (r._pmTempLayer = !0),
              (t._pmTempLayer = !0),
              r.remove(),
              t.remove(),
              0 === i.getLayers().length &&
                e._map.pm.removeLayer({ target: i });
          });
      },
      _finishShape: function() {
        if (
          this.options.allowSelfIntersection ||
          (this._handleSelfIntersection(!1), !this._doesSelfIntersect)
        ) {
          var t = this._layer.getLatLngs(),
            e = L.polygon(t, this.options.pathOptions);
          this._cut(e),
            this.disable(),
            this._cleanupSnapping(),
            this._otherSnapLayers.splice(this._tempSnapLayerIndex, 1),
            delete this._tempSnapLayerIndex;
        }
      }
    });
    var N = {
        enableLayerDrag: function() {
          if (this._layer instanceof L.Marker) this._layer.dragging.enable();
          else {
            this._tempDragCoord = null;
            var t = this._layer._path
              ? this._layer._path
              : this._layer._renderer._container;
            L.DomUtil.addClass(t, "leaflet-pm-draggable"),
              (this._originalMapDragState = this._layer._map.dragging._enabled),
              (this._safeToCacheDragState = !0),
              this._layer.on("mousedown", this._dragMixinOnMouseDown, this);
          }
        },
        disableLayerDrag: function() {
          if (this._layer instanceof L.Marker) this._layer.dragging.disable();
          else {
            var t = this._layer._path
              ? this._layer._path
              : this._layer._renderer._container;
            L.DomUtil.removeClass(t, "leaflet-pm-draggable"),
              (this._safeToCacheDragState = !1),
              this._layer.off("mousedown", this._dragMixinOnMouseDown, this);
          }
        },
        _dragMixinOnMouseUp: function() {
          var t = this,
            e = this._layer._path
              ? this._layer._path
              : this._layer._renderer._container;
          return (
            this._originalMapDragState && this._layer._map.dragging.enable(),
            (this._safeToCacheDragState = !0),
            this._layer._map.off("mousemove", this._dragMixinOnMouseMove, this),
            this._layer._map.off("mouseup", this._dragMixinOnMouseUp, this),
            !!this._dragging &&
              (window.setTimeout(function() {
                (t._dragging = !1),
                  L.DomUtil.removeClass(e, "leaflet-pm-dragging"),
                  t._layer.fire("pm:dragend"),
                  t._fireEdit();
              }, 10),
              !0)
          );
        },
        _dragMixinOnMouseMove: function(t) {
          var e = this._layer._path
            ? this._layer._path
            : this._layer._renderer._container;
          this._dragging ||
            ((this._dragging = !0),
            L.DomUtil.addClass(e, "leaflet-pm-dragging"),
            this._layer.bringToFront(),
            this._originalMapDragState && this._layer._map.dragging.disable(),
            this._layer.fire("pm:dragstart")),
            this._onLayerDrag(t);
        },
        _dragMixinOnMouseDown: function(t) {
          0 < t.originalEvent.button ||
            (this._safeToCacheDragState &&
              ((this._originalMapDragState = this._layer._map.dragging._enabled),
              (this._safeToCacheDragState = !1)),
            (this._tempDragCoord = t.latlng),
            this._layer._map.on("mouseup", this._dragMixinOnMouseUp, this),
            this._layer._map.on("mousemove", this._dragMixinOnMouseMove, this));
        },
        dragging: function() {
          return this._dragging;
        },
        _onLayerDrag: function(t) {
          var e = t.latlng,
            r = e.lat - this._tempDragCoord.lat,
            n = e.lng - this._tempDragCoord.lng;
          if (this._layer instanceof L.CircleMarker) this._layer.setLatLng(e);
          else {
            var i = (function t(e) {
              return e.map(function(e) {
                return Array.isArray(e)
                  ? t(e)
                  : { lat: e.lat + r, lng: e.lng + n };
              });
            })(this._layer.getLatLngs());
            this._layer.setLatLngs(i);
          }
          (this._tempDragCoord = e), this._layer.fire("pm:drag", t);
        }
      },
      z = L.Class.extend({
        includes: [N, x],
        options: {
          snappable: !0,
          snapDistance: 20,
          allowSelfIntersection: !0,
          draggable: !0
        },
        isPolygon: function() {
          return this._layer instanceof L.Polygon;
        }
      });
    (z.LayerGroup = L.Class.extend({
      initialize: function(t) {
        var e = this;
        (this._layerGroup = t),
          (this._layers = this.findLayers()),
          this._layers.forEach(function(t) {
            return e._initLayer(t);
          }),
          this._layerGroup.on("layeradd", function(t) {
            t.target._pmTempLayer ||
              ((e._layers = e.findLayers()),
              t.layer.pm && e._initLayer(t.layer),
              t.target.pm.enabled() && e.enable(e.getOptions()));
          });
      },
      findLayers: function() {
        var t = this._layerGroup.getLayers();
        return (t = (t = t.filter(function(t) {
          return !(t instanceof L.LayerGroup);
        })).filter(function(t) {
          return !!t.pm;
        })).filter(function(t) {
          return !t._pmTempLayer;
        });
      },
      _initLayer: function(t) {
        var e = this;
        [
          "pm:edit",
          "pm:update",
          "pm:remove",
          "pm:dragstart",
          "pm:drag",
          "pm:dragend",
          "pm:snap",
          "pm:unsnap",
          "pm:cut",
          "pm:intersect",
          "pm:raiseMarkers",
          "pm:markerdragend",
          "pm:markerdragstart",
          "pm:vertexadded",
          "pm:vertexremoved",
          "pm:centerplaced"
        ].forEach(function(r) {
          t.on(r, e._fireEvent, e);
        }),
          (t.pm._layerGroup = this._layerGroup);
      },
      _fireEvent: function(t) {
        this._layerGroup.fireEvent(t.type, t);
      },
      toggleEdit: function(t) {
        (this._options = t),
          this._layers.forEach(function(e) {
            e.pm.toggleEdit(t);
          });
      },
      enable: function(t) {
        (this._options = t),
          this._layers.forEach(function(e) {
            e.pm.enable(t);
          });
      },
      disable: function() {
        this._layers.forEach(function(t) {
          t.pm.disable();
        });
      },
      enabled: function() {
        var t = this._layers.find(function(t) {
          return t.pm.enabled();
        });
        return !!t;
      },
      dragging: function() {
        var t = this._layers.find(function(t) {
          return t.pm.dragging();
        });
        return !!t;
      },
      getOptions: function() {
        return this._options;
      }
    })),
      (z.Marker = z.extend({
        initialize: function(t) {
          (this._layer = t),
            (this._enabled = !1),
            this._layer.on("dragend", this._onDragEnd, this);
        },
        toggleEdit: function(t) {
          this.enabled() ? this.disable() : this.enable(t);
        },
        enable: function() {
          var t =
            0 < arguments.length && void 0 !== arguments[0]
              ? arguments[0]
              : { draggable: !0, snappable: !0 };
          L.Util.setOptions(this, t),
            (this._map = this._layer._map),
            this.enabled() ||
              ((this._enabled = !0),
              this.options.preventMarkerRemoval ||
                this._layer.on("contextmenu", this._removeMarker, this),
              this.options.draggable && this._layer.dragging.enable(),
              this.options.snappable && this._initSnappableMarkers());
        },
        enabled: function() {
          return this._enabled;
        },
        disable: function() {
          (this._enabled = !1),
            this._layer.dragging && this._layer.dragging.disable(),
            this._layer.off("contextmenu", this._removeMarker, this),
            this._layerEdited && this._layer.fire("pm:update", {}),
            (this._layerEdited = !1);
        },
        _removeMarker: function(t) {
          var e = t.target;
          e.remove(), e.fire("pm:remove");
        },
        _onDragEnd: function(t) {
          t.target.fire("pm:edit"), (this._layerEdited = !0);
        },
        _initSnappableMarkers: function() {
          var t = this._layer;
          (this.options.snapDistance = this.options.snapDistance || 30),
            t.off("drag", this._handleSnapping, this),
            t.on("drag", this._handleSnapping, this),
            t.off("dragend", this._cleanupSnapping, this),
            t.on("dragend", this._cleanupSnapping, this),
            t.off("pm:dragstart", this._unsnap, this),
            t.on("pm:dragstart", this._unsnap, this);
        }
      })),
      (z.Line = z.extend({
        initialize: function(t) {
          (this._layer = t), (this._enabled = !1);
        },
        toggleEdit: function(t) {
          return (
            this.enabled() ? this.disable() : this.enable(t), this.enabled()
          );
        },
        enable: function(t) {
          L.Util.setOptions(this, t),
            (this._map = this._layer._map),
            this._map &&
              (this.enabled() || this.disable(),
              (this._enabled = !0),
              this._initMarkers(),
              this._layer.on("remove", this._onLayerRemove, this),
              this.options.allowSelfIntersection ||
                this._layer.on(
                  "pm:vertexremoved",
                  this._handleSelfIntersectionOnVertexRemoval,
                  this
                ),
              this.options.allowSelfIntersection ||
                ((this.cachedColor = this._layer.options.color),
                (this.isRed = !1),
                this._handleLayerStyle()));
        },
        _onLayerRemove: function(t) {
          this.disable(t.target);
        },
        enabled: function() {
          return this._enabled;
        },
        disable: function() {
          var t =
            0 < arguments.length && void 0 !== arguments[0]
              ? arguments[0]
              : this._layer;
          if (!this.enabled()) return !1;
          if (t.pm._dragging) return !1;
          (t.pm._enabled = !1),
            t.pm._markerGroup.clearLayers(),
            t.off("mousedown"),
            t.off("mouseup"),
            this._layer.off("remove", this._onLayerRemove, this),
            this.options.allowSelfIntersection ||
              this._layer.off(
                "pm:vertexremoved",
                this._handleSelfIntersectionOnVertexRemoval
              );
          var e = t._path ? t._path : this._layer._renderer._container;
          return (
            L.DomUtil.removeClass(e, "leaflet-pm-draggable"),
            this.hasSelfIntersection() &&
              L.DomUtil.removeClass(e, "leaflet-pm-invalid"),
            this._layerEdited && this._layer.fire("pm:update", {}),
            !(this._layerEdited = !1)
          );
        },
        hasSelfIntersection: function() {
          return 0 < P()(this._layer.toGeoJSON(15)).features.length;
        },
        _handleSelfIntersectionOnVertexRemoval: function() {
          this._handleLayerStyle(!0),
            this.hasSelfIntersection() &&
              (this._layer.setLatLngs(this._coordsBeforeEdit),
              (this._coordsBeforeEdit = null),
              this._initMarkers());
        },
        _handleLayerStyle: function(t) {
          var e = this,
            r = this._layer;
          if (this.hasSelfIntersection()) {
            if (this.isRed) return;
            t
              ? (r.setStyle({ color: "red" }),
                (this.isRed = !0),
                window.setTimeout(function() {
                  r.setStyle({ color: e.cachedColor }), (e.isRed = !1);
                }, 200))
              : (r.setStyle({ color: "red" }), (this.isRed = !0)),
              this._layer.fire("pm:intersect", {
                intersection: P()(this._layer.toGeoJSON(15))
              });
          } else r.setStyle({ color: this.cachedColor }), (this.isRed = !1);
        },
        _initMarkers: function() {
          var t = this,
            e = this._map,
            r = this._layer.getLatLngs();
          this._markerGroup && this._markerGroup.clearLayers(),
            (this._markerGroup = new L.LayerGroup()),
            (this._markerGroup._pmTempLayer = !0),
            e.addLayer(this._markerGroup);
          (this._markers = (function e(r) {
            if (Array.isArray(r[0])) return r.map(e, t);
            var n = r.map(t._createMarker, t);
            return (
              r.map(function(e, i) {
                var o = t.isPolygon() ? (i + 1) % r.length : i + 1;
                return t._createMiddleMarker(n[i], n[o]);
              }),
              n
            );
          })(r)),
            this.options.snappable && this._initSnappableMarkers();
        },
        _createMarker: function(t) {
          var e = new L.Marker(t, {
            draggable: !0,
            icon: L.divIcon({ className: "marker-icon" })
          });
          return (
            (e._pmTempLayer = !0),
            e.on("dragstart", this._onMarkerDragStart, this),
            e.on("move", this._onMarkerDrag, this),
            e.on("dragend", this._onMarkerDragEnd, this),
            this.options.preventMarkerRemoval ||
              e.on("contextmenu", this._removeMarker, this),
            this._markerGroup.addLayer(e),
            e
          );
        },
        _createMiddleMarker: function(t, e) {
          var r = this;
          if (!t || !e) return !1;
          var n = C(this._map, t.getLatLng(), e.getLatLng()),
            i = this._createMarker(n),
            o = L.divIcon({ className: "marker-icon marker-icon-middle" });
          return (
            i.setIcon(o),
            (t._middleMarkerNext = i),
            (e._middleMarkerPrev = i).on("click", function() {
              var n = L.divIcon({ className: "marker-icon" });
              i.setIcon(n), r._addMarker(i, t, e);
            }),
            i.on("movestart", function() {
              i.on("moveend", function() {
                var t = L.divIcon({ className: "marker-icon" });
                i.setIcon(t), i.off("moveend");
              }),
                r._addMarker(i, t, e);
            }),
            i
          );
        },
        _addMarker: function(t, e, r) {
          t.off("movestart"), t.off("click");
          var n = t.getLatLng(),
            i = this._layer._latlngs,
            o = this.findDeepMarkerIndex(this._markers, e),
            a = o.indexPath,
            s = o.index,
            l = o.parentPath,
            h = 1 < a.length ? y()(i, l) : i,
            c = 1 < a.length ? y()(this._markers, l) : this._markers;
          h.splice(s + 1, 0, n),
            c.splice(s + 1, 0, t),
            this._layer.setLatLngs(i),
            this._createMiddleMarker(e, t),
            this._createMiddleMarker(t, r),
            this._fireEdit(),
            this._layer.fire("pm:vertexadded", {
              layer: this._layer,
              marker: t,
              indexPath: this.findDeepMarkerIndex(this._markers, t).indexPath,
              latlng: n
            }),
            this.options.snappable && this._initSnappableMarkers();
        },
        _removeMarker: function(t) {
          if (!this.options.allowSelfIntersection) {
            var e = this._layer.getLatLngs();
            this._coordsBeforeEdit = JSON.parse(JSON.stringify(e));
          }
          var r = t.target,
            n = this._layer.getLatLngs(),
            i = this.findDeepMarkerIndex(this._markers, r),
            o = i.indexPath,
            a = i.index,
            s = i.parentPath;
          if (o) {
            var l,
              h,
              c = 1 < o.length ? y()(n, s) : n,
              u = 1 < o.length ? y()(this._markers, s) : this._markers;
            if (
              (c.splice(a, 1),
              this._layer.setLatLngs(n),
              c.length <= 1 &&
                (c.splice(0, c.length),
                this._layer.setLatLngs(n),
                this.disable(),
                this.enable(this.options)),
              (function(t) {
                return !(function t(e) {
                  return e
                    .filter(function(t) {
                      return ![null, "", void 0].includes(t);
                    })
                    .reduce(function(e, r) {
                      return e.concat(Array.isArray(r) ? t(r) : r);
                    }, []);
                })(t).length;
              })(n) && this._layer.remove(),
              r._middleMarkerPrev &&
                this._markerGroup.removeLayer(r._middleMarkerPrev),
              r._middleMarkerNext &&
                this._markerGroup.removeLayer(r._middleMarkerNext),
              this._markerGroup.removeLayer(r),
              this.isPolygon()
                ? ((l = (a + 1) % u.length),
                  (h = (a + (u.length - 1)) % u.length))
                : ((h = a - 1 < 0 ? void 0 : a - 1),
                  (l = a + 1 >= u.length ? void 0 : a + 1)),
              l !== h)
            ) {
              var p = u[h],
                f = u[l];
              this._createMiddleMarker(p, f);
            }
            u.splice(a, 1),
              this._fireEdit(),
              this._layer.fire("pm:vertexremoved", {
                layer: this._layer,
                marker: r,
                indexPath: o
              });
          }
        },
        findDeepMarkerIndex: function(t, e) {
          var r;
          t.some(
            (function t(n) {
              return function(i, o) {
                var a = n.concat(o);
                return i._leaflet_id === e._leaflet_id
                  ? ((r = a), !0)
                  : Array.isArray(i) && i.some(t(a));
              };
            })([])
          );
          var n = {};
          return (
            r &&
              (n = {
                indexPath: r,
                index: r[r.length - 1],
                parentPath: r.slice(0, r.length - 1)
              }),
            n
          );
        },
        updatePolygonCoordsFromMarkerDrag: function(t) {
          var e = this._layer.getLatLngs(),
            r = t.getLatLng(),
            n = this.findDeepMarkerIndex(this._markers, t),
            i = n.indexPath,
            o = n.index,
            a = n.parentPath;
          (1 < i.length ? y()(e, a) : e).splice(o, 1, r),
            this._layer.setLatLngs(e);
        },
        _onMarkerDrag: function(t) {
          var e = t.target,
            r = this.findDeepMarkerIndex(this._markers, e),
            n = r.indexPath,
            i = r.index,
            o = r.parentPath;
          if (n) {
            this.updatePolygonCoordsFromMarkerDrag(e);
            var a = 1 < n.length ? y()(this._markers, o) : this._markers,
              s = (i + 1) % a.length,
              l = (i + (a.length - 1)) % a.length,
              h = e.getLatLng(),
              c = a[l].getLatLng(),
              u = a[s].getLatLng();
            if (e._middleMarkerNext) {
              var p = C(this._map, h, u);
              e._middleMarkerNext.setLatLng(p);
            }
            if (e._middleMarkerPrev) {
              var f = C(this._map, h, c);
              e._middleMarkerPrev.setLatLng(f);
            }
            this.options.allowSelfIntersection || this._handleLayerStyle();
          }
        },
        _onMarkerDragEnd: function(t) {
          var e = t.target,
            r = this.findDeepMarkerIndex(this._markers, e).indexPath;
          if (!this.options.allowSelfIntersection && this.hasSelfIntersection())
            return (
              this._layer.setLatLngs(this._coordsBeforeEdit),
              (this._coordsBeforeEdit = null),
              this._initMarkers(),
              void this._handleLayerStyle()
            );
          this._layer.fire("pm:markerdragend", {
            markerEvent: t,
            indexPath: r
          }),
            this._fireEdit();
        },
        _onMarkerDragStart: function(t) {
          var e = t.target,
            r = this.findDeepMarkerIndex(this._markers, e).indexPath;
          this._layer.fire("pm:markerdragstart", {
            markerEvent: t,
            indexPath: r
          }),
            this.options.allowSelfIntersection ||
              (this._coordsBeforeEdit = this._layer.getLatLngs()),
            (this.cachedColor = this._layer.options.color);
        },
        _fireEdit: function() {
          (this._layerEdited = !0), this._layer.fire("pm:edit");
        }
      })),
      (z.Polygon = z.Line.extend({})),
      (z.Rectangle = z.Polygon.extend({
        _initMarkers: function() {
          var t = this._map,
            e = this._findCorners();
          this._markerGroup && this._markerGroup.clearLayers(),
            (this._markerGroup = new L.LayerGroup()),
            (this._markerGroup._pmTempLayer = !0),
            t.addLayer(this._markerGroup),
            (this._markers = []),
            (this._markers[0] = e.map(this._createMarker, this));
          var r = (function(t, e) {
            return (
              (function(t) {
                if (Array.isArray(t)) return t;
              })(t) ||
              (function(t, e) {
                if (
                  Symbol.iterator in Object(t) ||
                  "[object Arguments]" === Object.prototype.toString.call(t)
                ) {
                  var r = [],
                    n = !0,
                    i = !1,
                    o = void 0;
                  try {
                    for (
                      var a, s = t[Symbol.iterator]();
                      !(n = (a = s.next()).done) &&
                      (r.push(a.value), !e || r.length !== e);
                      n = !0
                    );
                  } catch (t) {
                    (i = !0), (o = t);
                  } finally {
                    try {
                      n || null == s.return || s.return();
                    } finally {
                      if (i) throw o;
                    }
                  }
                  return r;
                }
              })(t, e) ||
              (function() {
                throw new TypeError(
                  "Invalid attempt to destructure non-iterable instance"
                );
              })()
            );
          })(this._markers, 1);
          (this._cornerMarkers = r[0]),
            this.options.snappable && this._initSnappableMarkers();
        },
        _createMarker: function(t, e) {
          var r = new L.Marker(t, {
            draggable: !0,
            icon: L.divIcon({ className: "marker-icon" })
          });
          return (
            (r._origLatLng = t),
            (r._index = e),
            (r._pmTempLayer = !0),
            r.on("dragstart", this._onMarkerDragStart, this),
            r.on("drag", this._onMarkerDrag, this),
            r.on("dragend", this._onMarkerDragEnd, this),
            r.on("pm:snap", this._adjustRectangleForMarkerSnap, this),
            this.options.preventMarkerRemoval ||
              r.on("contextmenu", this._removeMarker, this),
            this._markerGroup.addLayer(r),
            r
          );
        },
        _removeMarker: function() {
          return null;
        },
        _onMarkerDragStart: function(t) {
          var e = t.target,
            r = this._findCorners();
          (e._oppositeCornerLatLng = r[(e._index + 2) % 4]),
            (e._snapped = !1),
            this._layer.fire("pm:markerdragstart", { markerEvent: t });
        },
        _onMarkerDrag: function(t) {
          var e = t.target;
          void 0 !== e._index &&
            (e._snapped || this._adjustRectangleForMarkerMove(e));
        },
        _onMarkerDragEnd: function(t) {
          var e = this._findCorners();
          this._adjustAllMarkers(e),
            this._cornerMarkers.forEach(function(t) {
              delete t._oppositeCornerLatLng;
            }),
            this._layer.setLatLngs(e),
            this._layer.fire("pm:markerdragend", { markerEvent: t }),
            this._fireEdit();
        },
        _adjustRectangleForMarkerMove: function(t) {
          L.extend(t._origLatLng, t._latlng);
          var e = t.getLatLng();
          this._layer.setBounds(L.latLngBounds(e, t._oppositeCornerLatLng)),
            this._adjustAdjacentMarkers(t),
            this._layer.redraw();
        },
        _adjustRectangleForMarkerSnap: function(t) {
          if (this.options.snappable) {
            var e = t.target;
            this._adjustRectangleForMarkerMove(e);
          }
        },
        _adjustAllMarkers: function(t) {
          t.length && 4 === t.length
            ? this._cornerMarkers.forEach(function(e, r) {
                e.setLatLng(t[r]);
              })
            : console.error(
                "_adjustAllMarkers() requires an array of EXACTLY 4 LatLng coordinates"
              );
        },
        _adjustAdjacentMarkers: function(t) {
          if (t && t.getLatLng && t._oppositeCornerLatLng) {
            var e = t.getLatLng(),
              r = t._oppositeCornerLatLng,
              n = [];
            this._findCorners().forEach(function(t) {
              t.equals(e) || t.equals(r) || n.push(t);
            });
            var i = 0;
            2 === n.length &&
              this._cornerMarkers.forEach(function(t) {
                var o = t.getLatLng();
                o.equals(e) || o.equals(r) || (t.setLatLng(n[i]), (i += 1));
              });
          } else
            console.error(
              "_adjustAdjacentMarkers() requires a valid Marker object"
            );
        },
        _findCorners: function() {
          var t = this._layer.getBounds();
          return [
            t.getNorthWest(),
            t.getNorthEast(),
            t.getSouthEast(),
            t.getSouthWest()
          ];
        }
      })),
      (z.Circle = z.extend({
        initialize: function(t) {
          (this._layer = t), (this._enabled = !1);
        },
        toggleEdit: function(t) {
          this.enabled() ? this.disable() : this.enable(t);
        },
        enabled: function() {
          return this._enabled;
        },
        enable: function(t) {
          var e = this;
          L.Util.setOptions(this, t),
            (this._map = this._layer._map),
            this.enabled() || this.disable(),
            (this._enabled = !0),
            this._initMarkers(),
            this._layer.on("remove", function(t) {
              e.disable(t.target);
            });
        },
        disable: function() {
          var t =
            0 < arguments.length && void 0 !== arguments[0]
              ? arguments[0]
              : this._layer;
          if (!this.enabled()) return !1;
          if (t.pm._dragging) return !1;
          (t.pm._enabled = !1),
            t.pm._helperLayers.clearLayers(),
            t.off("mousedown"),
            t.off("mouseup");
          var e = t._path ? t._path : this._layer._renderer._container;
          return (
            L.DomUtil.removeClass(e, "leaflet-pm-draggable"),
            this._layerEdited && this._layer.fire("pm:update", {}),
            !(this._layerEdited = !1)
          );
        },
        _initMarkers: function() {
          var t = this._map;
          this._helperLayers && this._helperLayers.clearLayers(),
            (this._helperLayers = new L.LayerGroup()),
            (this._helperLayers._pmTempLayer = !0),
            this._helperLayers.addTo(t);
          var e = this._layer.getLatLng(),
            r = this._layer._radius,
            n = this._getLatLngOnCircle(e, r);
          (this._centerMarker = this._createCenterMarker(e)),
            (this._outerMarker = this._createOuterMarker(n)),
            (this._markers = [this._centerMarker, this._outerMarker]),
            this._createHintLine(this._centerMarker, this._outerMarker),
            this.options.snappable && this._initSnappableMarkers();
        },
        _getLatLngOnCircle: function(t, e) {
          var r = this._map.project(t),
            n = L.point(r.x + e, r.y);
          return this._map.unproject(n);
        },
        _resizeCircle: function() {
          this._syncHintLine(), this._syncCircleRadius();
        },
        _moveCircle: function(t) {
          var e = t.latlng;
          this._layer.setLatLng(e);
          var r = this._layer._radius,
            n = this._getLatLngOnCircle(e, r);
          this._outerMarker.setLatLng(n),
            this._syncHintLine(),
            this._layer.fire("pm:centerplaced", {
              layer: this._layer,
              latlng: e
            });
        },
        _onMarkerDragStart: function(t) {
          this._layer.fire("pm:markerdragstart", { markerEvent: t });
        },
        _onMarkerDragEnd: function(t) {
          this._fireEdit(),
            this._layer.fire("pm:markerdragend", { markerEvent: t });
        },
        _syncCircleRadius: function() {
          var t = this._centerMarker.getLatLng(),
            e = this._outerMarker.getLatLng(),
            r = t.distanceTo(e);
          this._layer.setRadius(r);
        },
        _syncHintLine: function() {
          var t = this._centerMarker.getLatLng(),
            e = this._outerMarker.getLatLng();
          this._hintline.setLatLngs([t, e]);
        },
        _createHintLine: function(t, e) {
          var r = t.getLatLng(),
            n = e.getLatLng();
          (this._hintline = L.polyline([r, n], this.options.hintlineStyle)),
            (this._hintline._pmTempLayer = !0),
            this._helperLayers.addLayer(this._hintline);
        },
        _createCenterMarker: function(t) {
          var e = this._createMarker(t);
          return (
            L.DomUtil.addClass(e._icon, "leaflet-pm-draggable"),
            e.on("drag", this._moveCircle, this),
            e
          );
        },
        _createOuterMarker: function(t) {
          var e = this._createMarker(t);
          return e.on("drag", this._resizeCircle, this), e;
        },
        _createMarker: function(t) {
          var e = new L.Marker(t, {
            draggable: !0,
            icon: L.divIcon({ className: "marker-icon" })
          });
          return (
            (e._origLatLng = t),
            (e._pmTempLayer = !0),
            e.on("dragstart", this._onMarkerDragStart, this),
            e.on("dragend", this._onMarkerDragEnd, this),
            this._helperLayers.addLayer(e),
            e
          );
        },
        _fireEdit: function() {
          this._layer.fire("pm:edit"), (this._layerEdited = !0);
        }
      })),
      (z.CircleMarker = z.extend({
        initialize: function(t) {
          (this._layer = t), (this._enabled = !1);
        },
        toggleEdit: function(t) {
          this.enabled() ? this.disable() : this.enable(t);
        },
        enabled: function() {
          return this._enabled;
        },
        enable: function() {
          var t =
            0 < arguments.length && void 0 !== arguments[0]
              ? arguments[0]
              : { draggable: !0, snappable: !0 };
          L.Util.setOptions(this, t),
            (this._map = this._layer._map),
            this._map &&
              (this.enabled() || this.disable(),
              (this._enabled = !0),
              this.options.preventMarkerRemoval ||
                this._layer.on("contextmenu", this._removeMarker, this),
              this.options.draggable && this.enableLayerDrag(),
              this.options.snappable && this._initSnappableMarkers(),
              this._layer.on("pm:dragend", this._onMarkerDragEnd, this));
        },
        disable: function() {
          var t =
            0 < arguments.length && void 0 !== arguments[0]
              ? arguments[0]
              : this._layer;
          if (!this.enabled()) return !1;
          if (t.pm._dragging) return !1;
          if (((t.pm._enabled = !1), t._path)) {
            var e = t._path;
            L.DomUtil.removeClass(e, "leaflet-pm-draggable");
          }
          return (
            this._layerEdited && this._layer.fire("pm:update", {}),
            !(this._layerEdited = !1)
          );
        },
        _moveMarker: function(t) {
          var e = t.latlng;
          this._layer.setLatLng(e).redraw();
        },
        _removeMarker: function() {
          this._layer.fire("pm:remove"), this._layer.remove();
        },
        _fireEdit: function() {
          this._layer.fire("pm:edit"), (this._layerEdited = !0);
        },
        _onMarkerDragEnd: function(t) {
          this._layer.fire("pm:markerdragend", { markerEvent: t }),
            this._fireEdit();
        },
        _initSnappableMarkers: function() {
          var t = this._layer;
          (this.options.snapDistance = this.options.snapDistance || 30),
            t.off("pm:drag", this._handleSnapping, this),
            t.on("pm:drag", this._handleSnapping, this),
            t.off("pm:dragend", this._cleanupSnapping, this),
            t.on("pm:dragend", this._cleanupSnapping, this),
            t.off("pm:dragstart", this._unsnap, this),
            t.on("pm:dragstart", this._unsnap, this);
        }
      })),
      r(133),
      r(134),
      (L.PM = L.PM || {
        version: n.a,
        Map: _,
        Toolbar: w,
        Draw: S,
        Edit: z,
        activeLang: "en",
        initialize: function(t) {
          this.addInitHooks(t);
        },
        addInitHooks: function() {
          var t =
            0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
          L.Map.addInitHook(function() {
            (this.pm = void 0),
              t.optIn
                ? !1 === this.options.pmIgnore && (this.pm = new L.PM.Map(this))
                : this.options.pmIgnore || (this.pm = new L.PM.Map(this));
          }),
            L.LayerGroup.addInitHook(function() {
              this.pm = new L.PM.Edit.LayerGroup(this);
            }),
            L.Marker.addInitHook(function() {
              (this.pm = void 0),
                t.optIn
                  ? !1 === this.options.pmIgnore &&
                    (this.pm = new L.PM.Edit.Marker(this))
                  : this.options.pmIgnore ||
                    (this.pm = new L.PM.Edit.Marker(this));
            }),
            L.CircleMarker.addInitHook(function() {
              (this.pm = void 0),
                t.optIn
                  ? !1 === this.options.pmIgnore &&
                    (this.pm = new L.PM.Edit.CircleMarker(this))
                  : this.options.pmIgnore ||
                    (this.pm = new L.PM.Edit.CircleMarker(this));
            }),
            L.Polyline.addInitHook(function() {
              (this.pm = void 0),
                t.optIn
                  ? !1 === this.options.pmIgnore &&
                    (this.pm = new L.PM.Edit.Line(this))
                  : this.options.pmIgnore ||
                    (this.pm = new L.PM.Edit.Line(this));
            }),
            L.Polygon.addInitHook(function() {
              (this.pm = void 0),
                t.optIn
                  ? !1 === this.options.pmIgnore &&
                    (this.pm = new L.PM.Edit.Polygon(this))
                  : this.options.pmIgnore ||
                    (this.pm = new L.PM.Edit.Polygon(this));
            }),
            L.Rectangle.addInitHook(function() {
              (this.pm = void 0),
                t.optIn
                  ? !1 === this.options.pmIgnore &&
                    (this.pm = new L.PM.Edit.Rectangle(this))
                  : this.options.pmIgnore ||
                    (this.pm = new L.PM.Edit.Rectangle(this));
            }),
            L.Circle.addInitHook(function() {
              (this.pm = void 0),
                t.optIn
                  ? !1 === this.options.pmIgnore &&
                    (this.pm = new L.PM.Edit.Circle(this))
                  : this.options.pmIgnore ||
                    (this.pm = new L.PM.Edit.Circle(this));
            });
        }
      }),
      L.PM.initialize();
  }
]);
