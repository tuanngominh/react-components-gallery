import { configure } from '@kadira/storybook';

function loadStories() {
  require('../src/stories/Homepage.js')
  require('../src/stories/BigCalendar.js')
  require('../src/stories/FullCalendar.js')
}

configure(loadStories, module);
