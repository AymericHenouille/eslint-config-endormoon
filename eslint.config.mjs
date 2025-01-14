import { config } from 'typescript-eslint';
import endor from './index.mjs';

/**
 * Lint rules used to lint the current rules. 🙃
 */
export default config({
  files: ['*.ts', '*.d.ts'],
  extends: [endor],
});
