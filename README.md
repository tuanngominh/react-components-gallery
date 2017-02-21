A job portal on react, [demo](https://tuanngominh.github.io/ureka-job-portal/)

# Setup steps
```sh
# generate initial version using create-react-app
npm install -g create-react-app
create-react-app ureka-job-portal
cd ureka-job-portal

# setup storybook
npm i -g getstorybook
getstorybook

# deploy storybook to github page
npm i --save-dev @kadira/storybook-deployer
```

Development env
```sh
# run app local at http://localhost:3000
npm start

# view storybook local at http://localhost:9009
npm run storybook

# deploy storybook to github pages
npm run deploy-storybook
```