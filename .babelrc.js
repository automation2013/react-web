module.exports = {
  presets: [
      [
          "@babel/preset-env",
          {
              "useBuiltIns": "usage", // https://babel.docschina.org/docs/en/babel-preset-env  https://babeljs.io/docs/en/babel-polyfill
          }
      ],
      "@babel/preset-react"
  ],
  plugins: [
      [
          "@babel/plugin-proposal-class-properties",
          {
              "loose": true,
          }
      ], [
          "@babel/plugin-transform-runtime",
          {
              "absoluteRuntime": false,
              "corejs": false,
              "helpers": true,
              "regenerator": true,
              "useESModules": false
          }
      ]
  ]
}