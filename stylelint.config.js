/** @type {import('stylelint').Config} */
export default {
  plugins: [
    "stylelint-value-no-unknown-custom-properties"
  ],
  rules: {
    "csstools/value-no-unknown-custom-properties": [true, {
      "importFrom": [
        "./src/styles/colors.css"
      ]
    }],
    "block-no-empty": true,
    "color-no-invalid-hex": true,
    "declaration-block-no-duplicate-properties": true,
    "no-duplicate-selectors": true
  }
}; 