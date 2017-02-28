import { configure } from '@kadira/storybook';

function loadStories() {
  require('../src/stories/Homepage.js')
  require('../src/stories/BigCalendar.js')
  require('../src/stories/FullCalendar.js')
  require('../src/stories/ReactDropzone.js')
}

configure(loadStories, module);
