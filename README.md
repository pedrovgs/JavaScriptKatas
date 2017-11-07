# JavaScriptKatas [![Build Status](https://travis-ci.org/pedrovgs/JavaScriptKatas.svg?branch=master)](https://travis-ci.org/pedrovgs/JavaScriptKatas)

<img alt="JavaScript" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/240px-Unofficial_JavaScript_logo_2.svg.png" height="60"/>

JavaScript training repository used to practice and learn by solving some common katas.

### List of katas:

* [ES6 Katas.](http://es6katas.org/)

### Executing tests:

This project contains some tests written using [Mocha](https://mochajs.org/). You can easily run the tests by executing:

```
yarn test //Executes every test.
yarn test -w //Waits for code changes and executes every test.
yarn test -g "YOUR_REG_EX" //Executes tests matching with the regex passed as param.
```

### Packaging:

This project uses [webpack](https://webpack.js.org) and [babel](https://babeljs.io) in order to pack a simple ``bundle.js`` file, with all the repository code, fully backward compatible with some old JavaScript versions. If you want to pack all this code into a single file you can easily do it by just running:

```
yarn webpack
```

### Linter:

This repository uses [eslint]() in order to check if the js code written matchers the checkstyle configured. You can check if everything is ok by executing ``yarn eslint src`` and automatically fix the issues by executing ``yarn eslint --fix src`` if needed.

Developed By
------------

* Pedro Vicente Gómez Sánchez - <pedrovicente.gomez@gmail.com>

<a href="https://twitter.com/pedro_g_s">
  <img alt="Follow me on Twitter" src="https://image.freepik.com/iconos-gratis/twitter-logo_318-40209.jpg" height="60" width="60"/>
</a>
<a href="https://es.linkedin.com/in/pedrovgs">
  <img alt="Add me to Linkedin" src="https://image.freepik.com/iconos-gratis/boton-del-logotipo-linkedin_318-84979.png" height="60" width="60"/>
</a>

License
-------

    Copyright 2017 Pedro Vicente Gómez Sánchez

    Licensed under the GNU General Public License, Version 3 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.gnu.org/licenses/gpl-3.0.en.html

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.