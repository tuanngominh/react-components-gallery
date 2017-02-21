import { configure } from '@kadira/storybook';

function loadStories() {
  require('../src/stories/Homepage.js');
}

configure(loadStories, module);
