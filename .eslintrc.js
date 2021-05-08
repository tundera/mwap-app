module.exports = {
  root: false,
  parser: '@babel/eslint-parser',
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    requireConfigFile: false,
  },
  plugins: ['import', 'unicorn', 'simple-import-sort'],
  extends: ['react-app'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'import/first': 'off',
    'import/no-default-export': 'off',
    'import/no-anonymous-default-export': 'off',
    'require-await': 'error',
    'no-async-promise-executor': 'error',
    'simple-import-sort/imports': [
      'warn',
      {
        groups: [
          [
            // Side effect imports.
            '^\\u0000',
            // Packages.
            // Things that start with a letter (or digit or underscore), or `@` followed by a letter.
            '^@?\\w',
            // Absolute imports and other imports such as Vue-style `@/foo`.
            // Anything that does not start with a dot.
            '^[^.]',
            // Relative imports.
            // Anything that starts with a dot.
            '^\\.',
          ],
        ],
      },
    ],
  },
  overrides: [
    {
      files: ['**/*.ts', '**.*tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: [
          './tsconfig.eslint.json',
          './services/db/tsconfig.json',
          './services/graphql/tsconfig.json',
          './scripts/tsconfig.json',
          './packages/*/tsconfig.json',
          './services/*/tsconfig.json',
          './apps/next-app/tsconfig.json',
          './apps/remix-app/app/tsconfig.json',
          './apps/expo-app/tsconfig.json',
          './apps/react-app/tsconfig.json',
          './sites/docs/tsconfig.json',
          './examples/tailwind/tsconfig.json',
          './examples/admin/tsconfig.json',
          './examples/graphcms/tsconfig.json',
        ],
        tsconfigRootDir: __dirname,
        ecmaVersion: 2020,
        sourceType: 'module',
        extraFileExtensions: ['.graphql', '.mdx'],
      },
      plugins: ['@typescript-eslint', 'cypress', 'jest', 'import'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:cypress/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:mdx/recommended',
        'prettier',
        'react-app',
      ],
      env: {
        es6: true,
        browser: true,
        commonjs: true,
        jest: true,
        node: true,
      },
      rules: {
        '@typescript-eslint/no-shadow': 'off',
        '@typescript-eslint/naming-convention': 'off',
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-unused-vars': 'warn',
        '@typescript-eslint/no-var-requires': 'off',
        'global-require': 'off',
        'consistent-return': 'off',
        'import/prefer-default-export': 'off',
        'import/no-useless-path-segments': 'off',
        'no-param-reassign': 'off',
        'react/prop-types': 'off',
        'react/no-unescaped-entities': 'warn',
        'react/display-name': 'off',
        'import/no-cycle': 'off',
        'no-multi-assign': 'off',
        'no-underscore-dangle': 'off',
        'no-nested-ternary': 'off',
        'import/imports-first': ['error', 'absolute-first'],
        'react/jsx-filename-extension': [
          1,
          {
            extensions: ['.js', '.jsx', '.ts', '.tsx', '.mdx'],
          },
        ],
        'react/jsx-props-no-spreading': 'off',
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
        quotes: [
          2,
          'single',
          {
            avoidEscape: true,
          },
        ],
        semi: ['error', 'never'],
      },
      settings: {
        'import/parsers': {
          '@typescript-eslint/parser': ['.js', '.jsx', '.ts', '.tsx', '.mdx', '.json'],
        },
        'import/resolver': {
          'babel-module': {},
          typescript: {},
        },
        react: {
          version: 'detect',
        },
      },
    },
  ],
}
