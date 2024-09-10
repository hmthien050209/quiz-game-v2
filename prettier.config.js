module.exports = {
  printWidth: 80,
  tabWidth: 2,
  singleAttributePerLine: true,
  importOrder: ["<THIRD_PARTY_MODULES>", "@/*"],
  importOrderSeparation: true,
  plugins: [
    "@trivago/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
  ],
};
