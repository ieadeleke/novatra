import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "prefer-const": "off",
      "@typescript-eslint/ban-types": "off",
      "@typescript-eslint/ban-types": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-explicit-any": "off", // Disables "Unexpected any" error
      "@typescript-eslint/ban-types": "off",
      "react-hooks/exhaustive-deps": "off",
      // Disable errors/warnings for unescaped entities in JSX
      "react/no-unescaped-entities": "off",
      // Disable errors/warnings for async client components in Next.js
      "@next/next/no-async-client-component": "off",
      // Disable errors/warnings for using <img> element instead of next/image
      "@next/next/no-img-element": "off",
      // Disable warnings about empty alt attributes in images
      "jsx-a11y/alt-text": "off",
      // Disable errors for import issues (if you want to ignore default import errors)
      // Note: It might be better to fix the import rather than ignore it
      "import/no-named-as-default": "off",
      // Disable errors for empty object types in TypeScript
      "@typescript-eslint/no-empty-object-type": "off",
      // Disable errors for extra non-null assertions in TypeScript
      "@typescript-eslint/no-extra-non-null-assertion": "off",
      // Disable errors for unused expressions
      "@typescript-eslint/no-unused-expressions": "off",
      // Disable errors for empty interfaces (if you really need them)
      "@typescript-eslint/no-empty-interface": "off",
    },
  }
];

export default eslintConfig;
