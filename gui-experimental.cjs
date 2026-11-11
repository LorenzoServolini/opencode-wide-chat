const { Plugin, Style } = require("@opencode/plugin/gui")

const css = `
:root[data-timeline-width="wide"] {
  --container-session: max(min(1000px, 100%), calc(100% - 4rem)) !important;
}
`

module.exports = Plugin.define({
  setup(ctx) {
    ctx.add(Style, css)
  },
})
