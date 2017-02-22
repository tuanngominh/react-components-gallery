import { configure } from '@kadira/storybook';

function loadStories() {
  require('../src/stories/Homepage.js')
  require('../src/stories/BigCalendar.js')
}

configure(loadStories, module);
