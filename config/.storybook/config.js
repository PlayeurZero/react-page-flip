import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from "@storybook/addon-knobs"
import { withConsole } from "@storybook/addon-console"

addDecorator(withKnobs);
addDecorator((storyFn, context) => withConsole()(storyFn)(context));

// automatically import all files ending in *.stories.js
const req = require.context('../../src', true, /__stories__\/[A-z]+-story.tsx$/);
function loadStories() {
  req.keys().sort().forEach(filename => req(filename));
}


configure(loadStories, module);
