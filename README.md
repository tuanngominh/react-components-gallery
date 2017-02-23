A [storybook](https://tuanngominh.github.io/react-components-gallery/) of react components. Help to boostrap new projects quickly.

# Setup steps
```sh
# generate initial version using create-react-app
npm install -g create-react-app
create-react-app new-react-project-name
cd new-react-project-name

# setup storybook
npm i -g getstorybook
getstorybook

# deploy storybook to github page
npm i --save-dev @kadira/storybook-deployer

# Enable sass, https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-a-css-preprocessor-sass-less-etc
npm install node-sass --save-dev


```

Development env
```sh
# run app local at http://localhost:3000
npm start

# view storybook local at http://localhost:9009
npm run storybook

# deploy storybook to github pages
npm run deploy-storybook

firebase deploy --token "firebase-token" --project new-react-project-name
```