# To Do app
Journey 

1. Use babel to package a simple app.
    - I wanted to start from bottom so chose babel as Transpiler. It was instantly a bad trip
    when I got an error due to a module dependency of babel-preset-env and babel-core. The link is [this](https://dev.to/ganeshmani/configuring-babel-for-node-js-express-server-35hp#:~:text=Babel%20Setup&text=babel%2Dnode%20%2D%20babel%2Dnode,to%20implement%20in%20the%20node.)
    - I realised people use webpack for a reason.
2. Use webpack instead
    - Tried using webpack instead, Hit upon another bad resource ([this](https://www.freecodecamp.org/news/part-1-react-app-from-scratch-using-webpack-4-562b1d231e75/))
    - `You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file."` this error. I was importing a styles file in JS. Solution was to 
    add modules.rules in webpack.config.js stating the loaders
    - got stuck on `
ERROR in multi webpack-hot-middleware/client ./client/client.js babel-loader
` and decided to drop this tutorial
    - later hit upon another source  [url](https://medium.com/@imranhsayed/set-up-react-app-with-webpack-webpack-dev-server-and-babel-from-scratch-df398174446d). This saved me.
    - stuck on create-node-app. Had to upgrade node to 8+.
    - got stuck on latter with `gyp: No Xcode or CLT version detected!` . had to reinstall xcode and it worked.
    - got success with first small app but in console saw error `localhost:8080/sockjs-node/info?t=1597066412086%20net::ERR_CONNECTION_REFUSED`. [this](https://github.com/webpack/webpack-dev-server/issues/416) helped
    

3. Todo App
    - followed [url](https://www.digitalocean.com/community/tutorials/how-to-build-a-react-to-do-app-with-react-hooks)
    - but is using react-hooks. I wanted to use vanilla react. React-hooks is a way to write components in functional form.
    I wanted state way only so I refactored the code.
    - ```super(props)``` in constructor is necessary even if props is not used.
    
    

Resources - 
- using webpack. [url](https://medium.com/@imranhsayed/set-up-react-app-with-webpack-webpack-dev-server-and-babel-from-scratch-df398174446d)

- making todo app. [url](https://www.digitalocean.com/community/tutorials/how-to-build-a-react-to-do-app-with-react-hooks)


 