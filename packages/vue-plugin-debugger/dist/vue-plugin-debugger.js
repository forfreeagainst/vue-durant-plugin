import { onMounted as p, createElementBlock as s, openBlock as a, createElementVNode as r, createApp as _ } from "vue";
const l = (o, t) => {
  const e = o.__vccOpts || o;
  for (const [n, c] of t)
    e[n] = c;
  return e;
}, m = { id: "app" }, u = {
  __name: "App",
  setup(o) {
    return p(() => {
      console.log("Hello, John !");
    }), (t, e) => (a(), s("div", m, e[0] || (e[0] = [
      r("h1", null, "Hello Vue 3 with Webpack!", -1)
    ])));
  }
}, d = /* @__PURE__ */ l(u, [["__scopeId", "data-v-52bc0c8f"]]);
_(d).mount("#app");
