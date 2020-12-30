(window.webpackJsonp = window.webpackJsonp || []).push([['about'], {
  '1dde': function (t, e, o) { const n = o('d039'); const r = o('b622'); const i = o('2d00'); const a = r('species'); t.exports = function (t) { return i >= 51 || !n((() => { const e = []; const o = e.constructor = {}; return o[a] = function () { return { foo: 1 }; }, e[t](Boolean).foo !== 1; })); }; },
  '35d0': function (t, e, o) {},
  '498a': function (t, e, o) {
    const n = o('23e7'); const r = o('58a8').trim; const i = o('c8d2'); n({ target: 'String', proto: !0, forced: i('trim') }, { trim() { return r(this); } });
  },
  '4de4': function (t, e, o) {
    const n = o('23e7'); const r = o('b727').filter; const i = o('1dde'); const a = o('ae40'); const c = i('filter'); const s = a('filter'); n({ target: 'Array', proto: !0, forced: !c || !s }, { filter(t) { return r(this, t, arguments.length > 1 ? arguments[1] : void 0); } });
  },
  5233(t, e, o) {
    o('35d0');
  },
  5899(t, e) { t.exports = '\t\n\v\f\r                　\u2028\u2029\ufeff'; },
  '58a8': function (t, e, o) { const n = o('1d80'); const r = o('5899'); const i = `[${r}]`; const a = RegExp(`^${i}${i}*`); const c = RegExp(`${i + i}*$`); const s = function (t) { return function (e) { let o = String(n(e)); return 1 & t && (o = o.replace(a, '')), 2 & t && (o = o.replace(c, '')), o; }; }; t.exports = { start: s(1), end: s(2), trim: s(3) }; },
  '5dbf': function (t, e, o) {
    o('ffca');
  },
  '65f0': function (t, e, o) { const n = o('861d'); const r = o('e8b5'); const i = o('b622'); const a = i('species'); t.exports = function (t, e) { let o; return r(t) && (o = t.constructor, typeof o !== 'function' || o !== Array && !r(o.prototype) ? n(o) && (o = o[a], o === null && (o = void 0)) : o = void 0), new (void 0 === o ? Array : o)(e === 0 ? 0 : e); }; },
  7156(t, e, o) { const n = o('861d'); const r = o('d2bb'); t.exports = function (t, e, o) { let i; let a; return r && typeof (i = e.constructor) === 'function' && i !== o && n(a = i.prototype) && a !== o.prototype && r(t, a), t; }; },
  '75cf': function (t, e, o) {
    o.r(e); const n = function () {
      const t = this; const e = t.$createElement; const o = t._self._c || e; return o('div', { staticClass: 'todos' }, [o('router-link', { attrs: { to: '/' } }, [t._v('Home')]), o('AddTodo', { on: { 'add-todo': t.addTodo } }), o('select', {
        directives: [{
          name: 'model', rawName: 'v-model', value: t.filter, expression: 'filter',
        }],
        on: { change(e) { const o = Array.prototype.filter.call(e.target.options, ((t) => t.selected)).map(((t) => { const e = '_value' in t ? t._value : t.value; return e; })); t.filter = e.target.multiple ? o : o[0]; } },
      }, [o('option', { attrs: { value: 'all' } }, [t._v('All')]), o('option', { attrs: { value: 'completed' } }, [t._v('Completed')]), o('option', { attrs: { value: 'not-completed' } }, [t._v('Not Completed')])]), o('hr'), t.loading ? o('Loader') : t.filteredTodos.length ? o('TodoList', { attrs: { todos: t.filteredTodos }, on: { 'remove-todo': t.removeTodo } }) : o('p', [t._v('No todos!')])], 1);
    }; const r = []; const i = (o('4de4'), o('d3b7'), function () { const t = this; const e = t.$createElement; const o = t._self._c || e; return o('div', [o('ul', t._l(t.todos, ((e, n) => o('TodoItem', { key: e.id, attrs: { index: n, todo: e }, on: { 'remove-todo': t.removeTodo } }))), 1)]); }); const a = []; const c = function () { const t = this; const e = t.$createElement; const o = t._self._c || e; return o('li', [o('span', { class: { done: t.todo.completed } }, [o('input', { staticClass: 'filled-in', attrs: { type: 'checkbox' }, on: { change(e) { t.todo.completed = !t.todo.completed; } } }), o('strong', [t._v(t._s(t.index + 1))]), t._v(` ${t._s(t._f('uppercase')(t.todo.title))} `)]), o('button', { staticClass: 'btn-floating btn-small waves-effect waves-light red', on: { click(e) { return t.$emit('remove-todo', t.todo.id); } } }, [o('i', { staticClass: 'material-icons' }, [t._v('close')])])]); }; const s = []; const u = (o('a9e3'), { name: 'TodoItem', props: { todo: { type: Object, required: !0 }, index: Number }, filters: { uppercase(t) { return t.toUpperCase(); } } }); const l = u; const d = (o('9520'), o('2877')); const f = Object(d.a)(l, c, s, !1, null, '82b32e08', null); const p = f.exports; const m = {
      name: 'TodoList', props: ['todos'], components: { TodoItem: p }, methods: { removeTodo(t) { this.$emit('remove-todo', t); } },
    }; const v = m; const h = Object(d.a)(v, i, a, !1, null, 'bbdb92ce', null); const b = h.exports; const g = function () {
      const t = this; const e = t.$createElement; const o = t._self._c || e; return o('form', { on: { submit(e) { return e.preventDefault(), t.onSubmit(e); } } }, [o('input', {
        directives: [{
          name: 'model', rawName: 'v-model', value: t.title, expression: 'title',
        }],
        staticClass: 'input',
        attrs: { type: 'text' },
        domProps: { value: t.title },
        on: { input(e) { e.target.composing || (t.title = e.target.value); } },
      }), o('button', { staticClass: 'btn waves-effect', attrs: { type: 'submit' } }, [t._v('Create Todo')])]);
    }; const _ = []; const T = (o('498a'), { name: 'AddTodo', data() { return { title: '' }; }, methods: { onSubmit() { if (this.title.trim()) { const t = { id: Date.now(), title: this.title, completed: !1 }; this.$emit('add-todo', t), this.title = ''; } } } }); const x = T; const y = (o('5dbf'), Object(d.a)(x, g, _, !1, null, '5ef4302c', null)); const A = y.exports; const N = function () { const t = this; const e = t.$createElement; const o = t._self._c || e; return o('div', { staticClass: 'lds-dual-ring' }); }; const I = []; const E = { name: 'Loader' }; const C = E; const w = (o('5233'), Object(d.a)(C, N, I, !1, null, '338f46cd', null)); const S = w.exports; const O = {
      name: 'app', components: { TodoList: b, AddTodo: A, Loader: S }, data() { return { todos: [], loading: !0, filter: 'all' }; }, mounted() { const t = this; fetch('https://jsonplaceholder.typicode.com/todos?_limit=5').then(((t) => t.json())).then(((e) => { setTimeout((() => { t.todos = e, t.loading = !1; }), 1e3); })); }, computed: { filteredTodos() { return this.filter === 'all' ? this.todos : this.filter === 'completed' ? this.todos.filter(((t) => t.completed)) : this.filter === 'not-completed' ? this.todos.filter(((t) => !t.completed)) : this.todos; } }, methods: { removeTodo(t) { this.todos = this.todos.filter(((e) => e.id !== t)); }, addTodo(t) { this.todos.push(t); } },
    }; const j = O; const L = Object(d.a)(j, n, r, !1, null, null, null); e.default = L.exports;
  },
  '7c8e': function (t, e, o) {},
  9520(t, e, o) {
    o('7c8e');
  },
  a9e3(t, e, o) {
    const n = o('83ab'); const r = o('da84'); const i = o('94ca'); const a = o('6eeb'); const c = o('5135'); const s = o('c6b6'); const u = o('7156'); const l = o('c04e'); const d = o('d039'); const f = o('7c73'); const p = o('241c').f; const m = o('06cf').f; const v = o('9bf2').f; const h = o('58a8').trim; const b = 'Number'; const g = r[b]; const _ = g.prototype; const T = s(f(_)) == b; const x = function (t) { let e; let o; let n; let r; let i; let a; let c; let s; let u = l(t, !1); if (typeof u === 'string' && u.length > 2) if (u = h(u), e = u.charCodeAt(0), e === 43 || e === 45) { if (o = u.charCodeAt(2), o === 88 || o === 120) return NaN; } else if (e === 48) { switch (u.charCodeAt(1)) { case 66: case 98: n = 2, r = 49; break; case 79: case 111: n = 8, r = 55; break; default: return +u; } for (i = u.slice(2), a = i.length, c = 0; c < a; c++) if (s = i.charCodeAt(c), s < 48 || s > r) return NaN; return parseInt(i, n); } return +u; }; if (i(b, !g(' 0o1') || !g('0b1') || g('+0x1'))) { for (var y, A = function (t) { const e = arguments.length < 1 ? 0 : t; const o = this; return o instanceof A && (T ? d((() => { _.valueOf.call(o); })) : s(o) != b) ? u(new g(x(e)), o, A) : x(e); }, N = n ? p(g) : 'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range'.split(','), I = 0; N.length > I; I++)c(g, y = N[I]) && !c(A, y) && v(A, y, m(g, y)); A.prototype = _, _.constructor = A, a(r, b, A); }
  },
  ae40(t, e, o) { const n = o('83ab'); const r = o('d039'); const i = o('5135'); const a = Object.defineProperty; const c = {}; const s = function (t) { throw t; }; t.exports = function (t, e) { if (i(c, t)) return c[t]; e || (e = {}); const o = [][t]; const u = !!i(e, 'ACCESSORS') && e.ACCESSORS; const l = i(e, 0) ? e[0] : s; const d = i(e, 1) ? e[1] : void 0; return c[t] = !!o && !r((() => { if (u && !n) return !0; const t = { length: -1 }; u ? a(t, 1, { enumerable: !0, get: s }) : t[1] = 1, o.call(t, l, d); })); }; },
  b727(t, e, o) {
    const n = o('0366'); const r = o('44ad'); const i = o('7b0b'); const a = o('50c4'); const c = o('65f0'); const s = [].push; const u = function (t) { const e = t == 1; const o = t == 2; const u = t == 3; const l = t == 4; const d = t == 6; const f = t == 7; const p = t == 5 || d; return function (m, v, h, b) { for (var g, _, T = i(m), x = r(T), y = n(v, h, 3), A = a(x.length), N = 0, I = b || c, E = e ? I(m, A) : o || f ? I(m, 0) : void 0; A > N; N++) if ((p || N in x) && (g = x[N], _ = y(g, N, T), t)) if (e)E[N] = _; else if (_) switch (t) { case 3: return !0; case 5: return g; case 6: return N; case 2: s.call(E, g); } else switch (t) { case 4: return !1; case 7: s.call(E, g); } return d ? -1 : u || l ? l : E; }; }; t.exports = {
      forEach: u(0), map: u(1), filter: u(2), some: u(3), every: u(4), find: u(5), findIndex: u(6), filterOut: u(7),
    };
  },
  c8d2(t, e, o) { const n = o('d039'); const r = o('5899'); const i = '​᠎'; t.exports = function (t) { return n((() => !!r[t]() || i[t]() != i || r[t].name !== t)); }; },
  e8b5(t, e, o) { const n = o('c6b6'); t.exports = Array.isArray || function (t) { return n(t) == 'Array'; }; },
  ffca(t, e, o) {},
}]);
// # sourceMappingURL=about.63d19623.js.map
