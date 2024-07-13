module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:@typescript-eslint/stylistic-type-checked",
    "./rules/typescript.js",
  ],
  "rules": {
    "@typescript-eslint/ban-ts-comment": "error"
  }
};
