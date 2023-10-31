// Copyright (C) 2023 Ather Digital. All rights reserved.
module.exports = Object.assign(
  {
    printWidth: 120,
    tabWidth: 2,
    useTabs: false,
    semi: false,
    singleQuote: true,
    trailingComma: 'all',
    bracketSpacing: true,
    jsxBracketSameLine: false,
    arrowParens: 'always',
    importOrder: ['^components/(.*)$', '^[./]'],
    importOrderSeparation: true,
    importOrderSortSpecifiers: true,
    plugins: [require.resolve('@trivago/prettier-plugin-sort-imports')],
  },
  {
    overrides: [
      {
        files: '*.tsx',
        options: {
          parser: 'typescript',
        },
      },
      {
        files: '*.ts',
        options: {
          parser: 'typescript',
        },
      },
      {
        files: '*.md',
        options: {
          parser: 'markdown',
        },
      },
      {
        files: '*.json',
        options: {
          parser: 'json',
        },
      },
      {
        files: '*.yml',
        options: {
          parser: 'yaml',
        },
      },
    ],
    bracketSpacing: true,
  },
)
