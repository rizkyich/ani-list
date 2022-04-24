import facepaint from 'facepaint';

import { breakPoints } from '../constants';

export const mq = facepaint(breakPoints.map((bp) => `@media (min-width: ${bp}px)`));
