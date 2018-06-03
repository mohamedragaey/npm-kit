!function (e, t) {'object' == typeof exports && 'object' == typeof module ? module.exports = t() : 'function' == typeof define && define.amd ? define([], t) : 'object' == typeof exports ? exports.UserList = t() : e.UserList = t()}(window, function () {
  return function (e) {
    var t = {}

    function n (r) {
      if (t[r]) return t[r].exports
      var o = t[r] = {i: r, l: !1, exports: {}}
      return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }

    return n.m = e, n.c = t, n.d = function (e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, {
        enumerable: !0,
        get: r
      })
    }, n.r = function (e) {'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: 'Module'}), Object.defineProperty(e, '__esModule', {value: !0})}, n.t = function (e, t) {
      if (1 & t && (e = n(e)), 8 & t) return e
      if (4 & t && 'object' == typeof e && e && e.__esModule) return e
      var r = Object.create(null)
      if (n.r(r), Object.defineProperty(r, 'default', {
          enumerable: !0,
          value: e
        }), 2 & t && 'string' != typeof e) for (var o in e) n.d(r, o, function (t) {return e[t]}.bind(null, o));
      return r
    }, n.n = function (e) {
      var t = e && e.__esModule ? function () {return e.default} : function () {return e}
      return n.d(t, 'a', t), t
    }, n.o = function (e, t) {return Object.prototype.hasOwnProperty.call(e, t)}, n.p = '', n(n.s = 7)
  }([function (e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', {value: !0}), t.concat = function () {
      for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
      return t.join(' ')
    }
  }, function (e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', {value: !0}), t.UserList = void 0
    var r = function () {
      function e (e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n]
          r.enumerable = r.enumerable || !1, r.configurable = !0, 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
      }

      return function (t, n, r) {return n && e(t.prototype, n), r && e(t, r), t}
    }(), o = n(0)
    t.UserList = function () {
      function e (t, n) {!function (e, t) {if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')}(this, e), this.elem = t, this.users = n, this.initialized = !1}

      return r(e, [{
        key: 'init', value: function () {
          var e = document.createElement('ul')
          e.classList.add('users-list'), this.ul = this.elem.appendChild(e), this.renderList(), this.initialized = !0
        }
      }, {key: 'getUserFullName', value: function (e) {return (0, o.concat)(e.firstname, e.lastname)}}, {
        key: 'getUsers',
        value: function () {
          var e = this
          return this.users.map(function (t) {return e.getUserFullName(t)})
        }
      }, {
        key: 'getUserLi', value: function (e) {
          var t = document.createElement('li')
          return t.innerText = e, t
        }
      }, {key: 'appendLi', value: function (e) {this.ul.appendChild(e)}}, {
        key: 'renderList',
        value: function () {
          var e = this, t = this.getUsers().map(function (t) {return e.getUserLi(t)}), n = !0, r = !1, o = void 0
          try {
            for (var i, s = t[Symbol.iterator](); !(n = (i = s.next()).done); n = !0) {
              var a = i.value
              this.appendLi(a)
            }
          } catch (e) {
            r = !0, o = e
          } finally {
            try {
              !n && s.return && s.return()
            } finally {
              if (r) throw o
            }
          }
        }
      }, {
        key: 'addUser', value: function (e) {
          var t = this.getUserFullName(e), n = this.getUserLi(t)
          this.appendLi(n)
        }
      }]), e
    }()
  }, function (e, t) {
    e.exports = function (e) {
      var t = 'undefined' != typeof window && window.location
      if (!t) throw new Error('fixUrls requires window.location')
      if (!e || 'string' != typeof e) return e
      var n = t.protocol + '//' + t.host, r = n + t.pathname.replace(/\/[^\/]*$/, '/')
      return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (e, t) {
        var o,
          i = t.trim().replace(/^"(.*)"$/, function (e, t) {return t}).replace(/^'(.*)'$/, function (e, t) {return t})
        return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i) ? e : (o = 0 === i.indexOf('//') ? i : 0 === i.indexOf('/') ? n + i : r + i.replace(/^\.\//, ''), 'url(' + JSON.stringify(o) + ')')
      })
    }
  }, function (e, t, n) {
    var r, o, i = {},
      s = (r = function () {return window && document && document.all && !window.atob}, function () {return void 0 === o && (o = r.apply(this, arguments)), o}),
      a = function (e) {
        var t = {}
        return function (e) {
          if ('function' == typeof e) return e()
          if (void 0 === t[e]) {
            var n = function (e) {return document.querySelector(e)}.call(this, e)
            if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try {
              n = n.contentDocument.head
            } catch (e) {
              n = null
            }
            t[e] = n
          }
          return t[e]
        }
      }(), u = null, f = 0, c = [], l = n(2)

    function p (e, t) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n], o = i[r.id]
        if (o) {
          o.refs++
          for (var s = 0; s < o.parts.length; s++) o.parts[s](r.parts[s]);
          for (; s < r.parts.length; s++) o.parts.push(m(r.parts[s], t))
        } else {
          var a = []
          for (s = 0; s < r.parts.length; s++) a.push(m(r.parts[s], t));
          i[r.id] = {id: r.id, refs: 1, parts: a}
        }
      }
    }

    function d (e, t) {
      for (var n = [], r = {}, o = 0; o < e.length; o++) {
        var i = e[o], s = t.base ? i[0] + t.base : i[0], a = {css: i[1], media: i[2], sourceMap: i[3]}
        r[s] ? r[s].parts.push(a) : n.push(r[s] = {id: s, parts: [a]})
      }
      return n
    }

    function h (e, t) {
      var n = a(e.insertInto)
      if (!n) throw new Error('Couldn\'t find a style target. This probably means that the value for the \'insertInto\' parameter is invalid.')
      var r = c[c.length - 1]
      if ('top' === e.insertAt) r ? r.nextSibling ? n.insertBefore(t, r.nextSibling) : n.appendChild(t) : n.insertBefore(t, n.firstChild), c.push(t) else if ('bottom' === e.insertAt) n.appendChild(t) else {
        if ('object' != typeof e.insertAt || !e.insertAt.before) throw new Error('[Style Loader]\n\n Invalid value for parameter \'insertAt\' (\'options.insertAt\') found.\n Must be \'top\', \'bottom\', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n')
        var o = a(e.insertInto + ' ' + e.insertAt.before)
        n.insertBefore(t, o)
      }
    }

    function v (e) {
      if (null === e.parentNode) return !1
      e.parentNode.removeChild(e)
      var t = c.indexOf(e)
      t >= 0 && c.splice(t, 1)
    }

    function y (e) {
      var t = document.createElement('style')
      return void 0 === e.attrs.type && (e.attrs.type = 'text/css'), b(t, e.attrs), h(e, t), t
    }

    function b (e, t) {Object.keys(t).forEach(function (n) {e.setAttribute(n, t[n])})}

    function m (e, t) {
      var n, r, o, i
      if (t.transform && e.css) {
        if (!(i = t.transform(e.css))) return function () {}
        e.css = i
      }
      if (t.singleton) {
        var s = f++
        n = u || (u = y(t)), r = U.bind(null, n, s, !1), o = U.bind(null, n, s, !0)
      } else e.sourceMap && 'function' == typeof URL && 'function' == typeof URL.createObjectURL && 'function' == typeof URL.revokeObjectURL && 'function' == typeof Blob && 'function' == typeof btoa ? (n = function (e) {
        var t = document.createElement('link')
        return void 0 === e.attrs.type && (e.attrs.type = 'text/css'), e.attrs.rel = 'stylesheet', b(t, e.attrs), h(e, t), t
      }(t), r = function (e, t, n) {
        var r = n.css, o = n.sourceMap, i = void 0 === t.convertToAbsoluteUrls && o;
        (t.convertToAbsoluteUrls || i) && (r = l(r)), o && (r += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + ' */')
        var s = new Blob([r], {type: 'text/css'}), a = e.href
        e.href = URL.createObjectURL(s), a && URL.revokeObjectURL(a)
      }.bind(null, n, t), o = function () {v(n), n.href && URL.revokeObjectURL(n.href)}) : (n = y(t), r = function (e, t) {
        var n = t.css, r = t.media
        if (r && e.setAttribute('media', r), e.styleSheet) e.styleSheet.cssText = n else {
          for (; e.firstChild;) e.removeChild(e.firstChild);
          e.appendChild(document.createTextNode(n))
        }
      }.bind(null, n), o = function () {v(n)})
      return r(e), function (t) {
        if (t) {
          if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return
          r(e = t)
        } else o()
      }
    }

    e.exports = function (e, t) {
      if ('undefined' != typeof DEBUG && DEBUG && 'object' != typeof document) throw new Error('The style-loader cannot be used in a non-browser environment')
      (t = t || {}).attrs = 'object' == typeof t.attrs ? t.attrs : {}, t.singleton || 'boolean' == typeof t.singleton || (t.singleton = s()), t.insertInto || (t.insertInto = 'head'), t.insertAt || (t.insertAt = 'bottom')
      var n = d(e, t)
      return p(n, t), function (e) {
        for (var r = [], o = 0; o < n.length; o++) {
          var s = n[o];
          (a = i[s.id]).refs--, r.push(a)
        }
        for (e && p(d(e, t), t), o = 0; o < r.length; o++) {
          var a
          if (0 === (a = r[o]).refs) {
            for (var u = 0; u < a.parts.length; u++) a.parts[u]();
            delete i[a.id]
          }
        }
      }
    }
    var g, x = (g = [], function (e, t) {return g[e] = t, g.filter(Boolean).join('\n')})

    function U (e, t, n, r) {
      var o = n ? '' : r.css
      if (e.styleSheet) e.styleSheet.cssText = x(t, o) else {
        var i = document.createTextNode(o), s = e.childNodes
        s[t] && e.removeChild(s[t]), s.length ? e.insertBefore(i, s[t]) : e.appendChild(i)
      }
    }
  }, function (e, t) {
    e.exports = function (e) {
      var t = []
      return t.toString = function () {
        return this.map(function (t) {
          var n = function (e, t) {
            var n, r = e[1] || '', o = e[3]
            if (!o) return r
            if (t && 'function' == typeof btoa) {
              var i = (n = o, '/*# sourceMappingURL=data:application/json;charset=utf-8;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(n)))) + ' */'),
                s = o.sources.map(function (e) {return '/*# sourceURL=' + o.sourceRoot + e + ' */'})
              return [r].concat(s).concat([i]).join('\n')
            }
            return [r].join('\n')
          }(t, e)
          return t[2] ? '@media ' + t[2] + '{' + n + '}' : n
        }).join('')
      }, t.i = function (e, n) {
        'string' == typeof e && (e = [[null, e, '']])
        for (var r = {}, o = 0; o < this.length; o++) {
          var i = this[o][0]
          'number' == typeof i && (r[i] = !0)
        }
        for (o = 0; o < e.length; o++) {
          var s = e[o]
          'number' == typeof s[0] && r[s[0]] || (n && !s[2] ? s[2] = n : n && (s[2] = '(' + s[2] + ') and (' + n + ')'), t.push(s))
        }
      }, t
    }
  }, function (e, t, n) {(e.exports = n(4)(!1)).push([e.i, '.users-list{width:400px;min-height:200px;border-radius:3px;background-color:#fff;padding:15px 30px;list-style-type:none}.users-list>li{line-height:30px}', ''])}, function (e, t, n) {
    var r = n(5)
    'string' == typeof r && (r = [[e.i, r, '']])
    n(3)(r, {hmr: !0, transform: void 0, insertInto: void 0}), r.locals && (e.exports = r.locals)
  }, function (e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', {value: !0}), n(6)
    var r = n(1)
    t.default = r.UserList
  }]).default
})