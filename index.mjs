// @ts-check
import esConfig from '@eslint/js';
import { config, configs } from 'typescript-eslint';

/**
 * Default configuration for the Endor eslint standard.
 */
export default config({
  extends: [
    esConfig.configs.recommended,
    configs.recommended,
    configs.stylistic,
  ],
  rules: {
    'semi': [
      'error',
      'always',
      {
        omitLastInOneLineBlock: true,
        omitLastInOneLineClassBody: true,
      },
    ],
    'quotes': [
      'error',
      'single',
      {
        avoidEscape: true,
      },
    ],
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
      },
    ],
    'arrow-parens': [
      'error',
      'always',
    ],
    'no-duplicate-imports': [
      'error',
      {
        includeExports: true,
      },
    ],
    'indent': [
      'error',
      2,
    ],
    'space-unary-ops': [
      'error',
      {
        words: true,
        nonwords: false,
      },
    ],
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/prefer-enum-initializers': 'error',
    '@typescript-eslint/no-duplicate-enum-values': 'error',
    '@typescript-eslint/explicit-member-accessibility': 'error',
  },
});
