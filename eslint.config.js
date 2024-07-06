import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';
import { fixupConfigRules } from '@eslint/compat';

pluginReactConfig.rules['react/react-in-jsx-scope'] = 'off';

pluginReactConfig.settings = {
  react: {
    version: 'detect', 
  },
};

export default [
  { files: ['**/*.{js,mjs,cjs,jsx}'] },
  { languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } } },
  { languageOptions: { globals: { ...globals.browser, module: true } } }, 
  pluginJs.configs.recommended,
  ...fixupConfigRules(pluginReactConfig),
];
