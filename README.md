# Angular Express

Bootstrap your node.js web project with an Express server and Angular frontend.

  - Express serves the Angular frontend as well as your service APIs
  - Developed in Typescript, with Gulp build system and VSCode setting and task files
  - Style with Sass

### Technology

Angular Express brings together the following technologies

* [Express] - fast node.js network app framework
* [AngularJS] - HTML enhanced for web apps!
* [node.js] - evented I/O for the backend
* [Gulp] - the streaming build system
* [Sass] -S yntactically Awesome Style Sheets
* [Visual Studio Code] - Code editing. Redefined.

### Installation and Execution

Angular Express requires [Node.js](https://nodejs.org/) to run.

Clone this project and then:

```sh
$ cd angular-express
$ npm install
$ gulp
$ node build/server.js
```

### Folder Layout

| Folder | Detail |
| ------ | ------ |
| ./routes | Express routes for your service APIs |
| ./frontend | Contains the AngularJS app |
| ./model | The data model (to be shared between frontend and backend) |
| ./build | The output directory containing transpiled js |

### VSCode and Gulp

Angular Express contains configuration and tasks for VSCode including:
* VSCode task to launch Gulp Build and Watch
* Launch configurations for the frontend (Chrome), Server (node.js or nodemon); and both simultaniously.

Author
----
Paul Stidworthy

License
----

MIT

   [Visual Studio Code]: <https://code.visualstudio.com/>
   [node.js]: <http://nodejs.org>
   [express]: <http://expressjs.com>
   [AngularJS]: <http://angularjs.org>
   [Gulp]: <http://gulpjs.com>
   [Sass]: <https://sass-lang.com/>