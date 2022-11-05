module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/typescript',
    'plugin:import/warnings',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'import', 'react'],
  rules: {
    '@typescript-eslint/adjacent-overload-signatures': 'warn',
    '@typescript-eslint/array-type': [
      'warn',
      {
        default: 'generic',
      },
    ],
    '@typescript-eslint/no-empty-interface': 'warn',
    '@typescript-eslint/no-floating-promises': 'warn',
    '@typescript-eslint/no-namespace': 'warn',
    '@typescript-eslint/no-unnecessary-type-assertion': 'warn',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/prefer-for-of': 'warn',
    '@typescript-eslint/triple-slash-reference': 'warn',
    '@typescript-eslint/unified-signatures': 'warn',
    'comma-dangle': ['warn', 'always-multiline'],
    'constructor-super': 'warn',
    'import/no-deprecated': 'warn',
    'import/no-duplicates': 'off',
    'import/no-extraneous-dependencies': 'warn',
    'import/no-named-default': 'off',
    'import/no-unassigned-import': 'warn',
    'no-cond-assign': 'warn',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'warn',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'warn',
    'no-duplicate-case': 'warn',
    'no-duplicate-imports': 'off',
    'no-invalid-this': 'warn',
    'no-multi-spaces': 'off',
    'no-new-wrappers': 'warn',
    'no-param-reassign': 'warn',
    'no-redeclare': 'warn',
    'no-sequences': 'warn',
    'no-throw-literal': 'warn',
    'no-unsafe-finally': 'warn',
    'no-unused-labels': 'warn',
    'no-use-before-define': 'off',
    'no-useless-constructor': 'off',
    'no-var': 'warn',
    'no-void': 'warn',
    'prefer-const': 'warn',
    eqeqeq: ['warn', 'always'],
    'space-before-function-paren': [
      'warn',
      {
        named: 'never',
        anonymous: 'always',
        asyncArrow: 'always',
      },
    ],
    'no-empty': [
      'warn',
      {
        allowEmptyCatch: true,
      },
    ],
    'no-shadow': [
      'warn',
      {
        hoist: 'all',
      },
    ],
    '@typescript-eslint/no-empty-function': [
      'warn',
      {
        allow: ['arrowFunctions'],
      },
    ],
  },

  settings: {
    jsdoc: {
      tagNamePreference: {
        returns: 'return',
      },
    },

    // https://github.com/jsx-eslint/eslint-plugin-react#configuration-legacy-eslintrc
    react: {
      createClass: 'createReactClass',
      pragma: 'React',
      fragment: 'Fragment',
      version: 'detect',
    },
    propWrapperFunctions: [
      'forbidExtraProps',
      { property: 'freeze', object: 'Object' },
      { property: 'myFavoriteWrapper' },
      { property: 'forbidExtraProps', exact: true },
    ],
    componentWrapperFunctions: [
      'observer',
      { property: 'styled' },
      { property: 'observer', object: 'Mobx' },
      { property: 'observer', object: '<pragma>' },
    ],
    formComponents: ['CustomForm', { name: 'Form', formAttribute: 'endpoint' }],
    linkComponents: ['Hyperlink', { name: 'Link', linkAttribute: 'to' }],
  },
}
