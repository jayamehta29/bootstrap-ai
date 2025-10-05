import { checkIcon } from './check.js';
import { closeIcon } from './close.js';
import { arrowRightIcon } from './arrow-right.js';

export { checkIcon, closeIcon, arrowRightIcon };

export const iconRegistry = {
  check: checkIcon,
  close: closeIcon,
  'arrow-right': arrowRightIcon,
} as const;

export type IconName = keyof typeof iconRegistry;
