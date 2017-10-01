import node_resolve from 'rollup-plugin-node-resolve';

export default {
  entry: './lib/es6/src/main.js',
  format: 'iife',
  dest: './releases/todo-bundled.js',
  moduleName: 'todo',
  plugins: [
    node_resolve({
      module: true,
      browser: true
    })
  ]
}