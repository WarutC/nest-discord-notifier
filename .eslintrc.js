module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin', 'import'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:import/typescript',
    'prettier',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',

    // Remove unused variables
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],

    // Import order rules
    'import/order': [
      'error',
      {
        groups: [
          ['builtin', 'external'],
          ['internal', 'sibling', 'parent'],
          'index',
        ],

        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
        ],

        pathGroupsExcludedImportTypes: ['builtin', 'external'],

        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },

        'newlines-between': 'always',
      },
    ],

    // Naming Conventions
    // '@typescript-eslint/naming-convention': [
    //   'error',
    //   {
    //     selector: 'default',
    //     format: ['camelCase'],
    //     leadingUnderscore: 'allow',
    //     trailingUnderscore: 'forbid',
    //   },
    //   {
    //     selector: 'variable',
    //     format: ['camelCase', 'UPPER_CASE'],
    //     leadingUnderscore: 'allow',
    //   },
    //   {
    //     selector: 'function',
    //     format: ['camelCase'],
    //   },
    //   {
    //     selector: 'parameter',
    //     format: ['camelCase'],
    //     leadingUnderscore: 'allow',
    //   },
    //   {
    //     selector: 'class',
    //     format: ['PascalCase'],
    //   },
    //   {
    //     selector: 'interface',
    //     format: ['PascalCase'],
    //     custom: {
    //       regex: '^I[A-Z]',
    //       match: false, // Enforces interfaces **NOT** prefixed with "I"
    //     },
    //   },
    //   {
    //     selector: 'typeAlias',
    //     format: ['PascalCase'],
    //   },
    //   {
    //     selector: 'enum',
    //     format: ['PascalCase'],
    //   },
    //   {
    //     selector: 'enumMember',
    //     format: ['UPPER_CASE'],
    //   },
    //   {
    //     selector: 'property',
    //     format: ['camelCase', 'UPPER_CASE'],
    //   },
    //   {
    //     selector: 'method',
    //     format: ['camelCase'],
    //   },
    // ],
  },
};
