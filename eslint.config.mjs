import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: [
      "next/core-web-vitals",
      "next/typescript",
      "prettier",
      "plugin:tailwindcss/recommended",
    ],
    plugins: ["tailwindcss"],
    rules: {
      semi: ["error"],
      quotes: ["error", "double"],
      "prefer-arrow-callback": ["error"],
      "prefer-template": ["error"],
      "tailwindcss/classnames-order": "warn",
      "tailwindcss/no-custom-classname": "warn",
      "tailwindcss/no-contradicting-classname": "error",
    },
    settings: {
      tailwindcss: {
        callees: ["cn", "clsx"],
        config: "tailwind.config.js",
      },
    },
  }),
];

export default eslintConfig;
