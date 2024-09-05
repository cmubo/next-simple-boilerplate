/** @type {import('eslint').Linter.Config} */
module.exports = {
    extends: [
        'next',
        'next/core-web-vitals',
        'next/typescript',
        'plugin:prettier/recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    parserOptions: {
        project: ['./tsconfig.json'],
        tsconfigRootDir: __dirname,
    },
    rules: {
        'prettier/prettier': [
            'error',
            {
                endOfLine: 'auto',
            },
        ],
        '@typescript-eslint/no-unsafe-call': 'warn',
    },
};
