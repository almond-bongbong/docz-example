export const imports = {
  'index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "index" */ 'index.mdx'),
  'src/components/Hello.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-hello" */ 'src/components/Hello.mdx'),
  'src/components/Buttons/Button.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-buttons-button" */ 'src/components/Buttons/Button.mdx'),
  'src/components/Input/Input.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-input-input" */ 'src/components/Input/Input.mdx'),
}
