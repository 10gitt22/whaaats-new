module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: ['plugin:react/recommended', 'standard-with-typescript', 'plugin:i18next/recommended', 'plugin:storybook/recommended'],
  overrides: [{
    files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
    rules: {
      'i18next/no-literal-string': 'off',
      'max-len': 'off',
    }
  }],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
    
  },
  plugins: ['react', 'i18next', 'react-hooks'],
  rules: {
    'react/jsx-indent': [2, 2],
    '@typescript-eslint/indent': [2, 2],
    '@typescript-eslint/no-floating-promises': 'warn',
    '@typescript-eslint/naming-convention': 'warn',
    '@typescript-eslint/consistent-type-definitions': 'off',
    '@typescript-eslint/prefer-nullish-coalescing': 'off',
    'react/jsx-indent-props': [2, 2],
    indent: [2, 2],
    semi: 'off',
    'react/jsx-filename-extension': [2, {
      extensions: ['.js', '.jsx', '.tsx']
    }],
    'import/no-unresolved': 'off',
    'react/display-name': 'off',
    'react/prop-types': 'off',
    'import/prefer-default-export': 'off',
    'no-unused-vars': 'warn',
    'react/require-default-props': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'warn',
    'react/function-component-definition': 'off',
    'no-shadow': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-underscore-dangle': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'no-undef': 'off',
    "@typescript-eslint/no-non-null-assertion": "warn",
    'i18next/no-literal-string': ['error', {
      markupOnly: true,
      ignoreAttribute: ['data-testid', 'to', 'label', 'keyName', 'name', 'error']
    }],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
  globals: {
    __IS_DEV__: true,
    __API__: true,
    __PROJECT__: true
  }
};
