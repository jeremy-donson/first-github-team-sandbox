## Best Practices For Cross-Platform Installers.

# PROJECT ROADMAP

1. Target platform use-cases and user stories.

2. Local installers per platform.

3. Attempts to unify our installer frameworks:
* Do consolidated solutions make this easier?
* [Major rift to bridge is linux and wins](https://github.com/BYVoid/Batsh)

* Regardless, the intelligent tutor better know what OS version is running, else they will be useless.
* Other intelligent tutor configs can include:
- Male or female?
- Which voice should the intelligent tutor have, and why, and/or via chat?

4. Four stage process:

* Query system and user, locally or remotely.
* Optionally Configure Intelligent Tutor
* Execute installs accordingly.
* Demo tools installed.
    * Offer invitation to three free student orientations, with links to syllabi:
        - Team Dev Dojo
        - React.js & Express,
        - Linux Scripting

# Target platform use-cases and user stories.

1. Says yes to git+bash, and will trust the installer.
2. Says no to gitbash, but yes to python3.
3. Has a more recent version of win, which uses powershell.
4. Has an older version of win, and only uses CMD>
5. Has admin password and has sufficient disk space to proceed.
6. Will instead do it all in userland, where possible.

# Installer Tasks

1. See which use-case a given situation maps to...
* CAN WE INSTALL ANYTHING, AND CHANGE THAT CIRCUMSTANCE ABOVE?
* Perhaps do ALL of this in separate account?

2. query platform memory
- total
- used
- free

3. query platform hard disk
- total
- used
- free

4. Query operating system flavor and version
* Query unique system id and compile that call in C binary.
* OSX: $ system_profiler SPHardwareDataType | grep 'Serial Number (system)' | awk '{print $NF}'

5.  Ensure that there is sufficient space,
and get setup with github id.



7. install gui editor => configure defaults

8. install browser

9. scoop + node + yarn + gitbash + python3




# first-github-team-sandbox

urbanSpectra core team:
- react and express devs: trainers and professionals, led by Simeon Calixte
- git and github (workflow analytics and social learning):  trainers and professionals, led by Sophie Chown
- financial services operations security and app dev, led by Jeremy Donson
- academic librarians: teams of professors and curriculum/assessment designers, led by Erica Eynouf
- radio, tv and live venue managers: collaborative promo, lead by Gordon Politnick
- sponsorship engineers: 
---
## Three levels to git/github skills:
- [ ]: solo local
  - Non-Coder
  - Coder
  - Trainer
- [ ]: solo remote
  - Non-Coder
  - Coder
  - Trainer
- [ ]: team remote
  - Non-Coder
  - Coder
  - Trainer
---
## Three levels to react/express skills:
- [ ]: react debugging
  - Coder
  - Trainer
- [ ]: react ui
  - Coder
  - Trainer
- [ ]: react state and crud
  - Coder
  - Trainer
---
# TEST CASE AND RUN META-DATA:
## TEST CASE METADATA:
- test case id:
- test case name:
- test tool:
- case designer:
---
## TEST RUN METADATA:
- test-runner:
- system:
- test-conditions:
- timestamp:
- expected:
- actual:
- outcome:
- screenshot:
- reproducible:
---
# Problems with anchor links and targets.
* #image-as-link-with-hovertext
* [md page anchor](#image-as-link-with-hovertext)
* https://roachhd.gitbooks.io/master-markdown/content/syntax/anchors.html

* [this link seems to be a lie](https://michaelsoolee.com/markdown-anchor-target-blank/)
* Regards: {:target='_blank'}

---
## The root app directory for react and express:
![react-express-dir](app-dir-react-express.png)

[![react-express-dir](app-dir-react-express.png)](http://www.target.com "LINK TO: http://www.target.com in SAME window, _blank target sought!")

1. App.css
2. public/
3. node_modules/
4. package-lock.json
5. package.json
6. README.md
7. src/
---
## Sections of the App.js file:
1. imports
2. main class
3. constructor
4. pre-render
5. render
6. export
---
## React bugs to kill:
1. get bug  /name/bilbo/baggins
2. 404 bug
3. absolute path issue
4. import images
5. import components
6. heroku deploy bug
7. express deploys
8. react and express => docker
9. deploy to gcloud
10. redis + csv
---
# React Dev Lessons

1. Jumpstart install react tools and such.
1a. DESIGN LESSON: initial dev setup for windows

2. LESSON 1: [first test-driven react and git session](react-dev-lessons/GettingStartedWithReact.md)
2a. DESIGN LESSON:  first test-driven react and git session

3. LEARNING SESSION: making your windows system as linux as possible
3a. DESIGN LESSON: 

4. DESIGN LESSON: making your windows system as linux as possible

5. LEARNING LESSON:  debugging react
  DESIGN LESSON

6. LEARNING LESSON:  react strap + gets
DESIGN LESSON

7. LEARNING LESSON:  react-native first app
DESIGN LESSON

8. LEARNING LESSON:  git+github, test-driven

9. LEARNING LESSON:  react crud
---

# Meeting Agenda
* Tasks Below
* Trading Terms
* Action Items
* First vcurrency discussion
* [fingerprint auth](https://www.washingtonpost.com/news/the-switch/wp/2018/01/12/the-tech-to-embed-a-fingerprint-reader-inside-a-screen-arrived-at-ces-but-only-in-a-chinese-phone-for-now/?utm_term=.2da75766911e)
---

# Next Tasks
1. [test this before promoting](http://xyc.github.io/react-inspector/)
2. [Node Debugging](http://xyc.github.io/react-inspector/)
3. [node memory stuff](https://blog.codeship.com/understanding-garbage-collection-in-node-js/)
4. [more node memory stuff](http://jayconrod.com/posts/55/a-tour-of-v8-garbage-collection)
5. [we want more than just globals](https://stackoverflow.com/questions/31173473/list-all-global-variables-in-node-js)
6. [Absolute Paths](https://spin.atomicobject.com/2017/10/07/absolute-paths-javascript/)
7. [Testing With Selenium](https://christopher.su/2015/selenium-chromedriver-ubuntu/)
8. [frameworks bult atop of selenium](http://galenframework.com/docs/about/)
9. [csv2json](https://www.npmjs.com/package/csv2json)
10. [json2csv](https://www.npmjs.com/package/json2json)
11. [redis node package](https://redislabs.com/lp/node-js-redis/)
12. [review deploy2surge](http://surge.sh)
13. [review deploy2heroku](http://www.heroku.com)
14. [deploy2tectonic](http://www.tectonic.com)
---

# Further Steps
* Node debugging
* Express.js
* React-Native
* React-Redux
