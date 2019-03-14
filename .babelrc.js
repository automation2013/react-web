module.exports = {
  presets: [
      [
          "@babel/preset-env",
          {
              "useBuiltIns": "entry", // https://babel.docschina.org/docs/en/babel-preset-env
          }
      ],
      "@babel/preset-react"
  ],
  plugins: [
    ["@babel/plugin-proposal-class-properties", { "loose": true }]
  ]
}