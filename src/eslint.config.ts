import eslint from '@eslint/js';
import { defineConfig } from 'eslint/config';
import eslintFunctional from 'eslint-plugin-functional';
import eslintImport from 'eslint-plugin-import';
import tseslint from 'typescript-eslint';
import eslintUnusedImports from 'eslint-plugin-unused-imports';

const config = defineConfig(
  eslint.configs.recommended,
  eslintImport.flatConfigs.recommended,
  eslintImport.flatConfigs.typescript,
  ...tseslint.configs.strict,
  {
    plugins: {
      functional: eslintFunctional,
      'unused-imports': eslintUnusedImports,
    },
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: ['./tsconfig.eslint.json'],
        tsconfigRootDir: process.cwd(),
      },
    },
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
      'linebreak-style': ['error', 'unix'],
      'no-constant-condition': ['error', { checkLoops: false }],
      quotes: ['error', 'single', { avoidEscape: true }],
      semi: ['error', 'always'],
      '@typescript-eslint/consistent-type-imports': 'error',
      'functional/immutable-data': 'error',
      'functional/no-let': 'error',
      'functional/prefer-tacit': 'error',
      'import/order': 'error',
      'no-param-reassign': 'error',
      'no-var': 'error',
      'prefer-const': 'error',
      'unused-imports/no-unused-imports': 'error',
    },
    settings: {
      'import/resolver': {
        typescript: true,
        node: true,
      },
    },
  },
);

export default config;
