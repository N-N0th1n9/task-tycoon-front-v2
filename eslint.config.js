import { FlatCompat } from '@eslint/eslintrc'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript', 'prettier'),
  {
    rules: {
      // Запрещает мутацию состояния без использования set
      'no-param-reassign': ['error', { props: true, ignorePropertyModificationsFor: ['state'] }],

      // Предупреждает, если передан анонимный коллбэк в useStore (оптимизация ререндеров)
      'react/jsx-no-bind': ['warn', { allowArrowFunctions: true }],

      // Разрешает использование неиспользуемых функций в zustand store
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],

      // Запрещает лишние зависимости в zustand-селекторах
      'react-hooks/exhaustive-deps': 'warn',

      'react/react-in-jsx-scope': 'off',
    },
  },
  {
    ignores: ['node_modules/', '.next/', '.husky/'], // Игнорируем ненужные папки
  },
]

export default eslintConfig
