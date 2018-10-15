# Developer Portfolio

A responsive, single-page developer portfolio built to demonstrate a basic understanding of fundamental web design and development skills. Intended to showcase future projects as they're completed!

## Design

From the start, I had in mind to create a minimal, split-screen layout, with the left column prominently displaying essential links and contact information. Meanwhile, the right column is inspired by modern resume design, such as those produced using Adobe InDesign.

The project itself uses completely free assets, with fonts straight off Google Fonts, the Font Awesome Free glyphicon set, and a beautiful photograph, courtesy of Justin Main, from Unsplash.

The site's color scheme, red, white, and black, is intended to reflect both Canadian and Torontonian (TTC) colors, where I'm currently located!

#### CSS3, SCSS (Node-sass), Flexbox, CSS Grid, Variables, and Mixins

The site is designed using modern CSS3 and SCSS, including extensive use of flexbox and CSS grid. SCSS variables are used throughout the project, allowing colors and typography to be manipulated on the fly with ease. In addition, SCSS mixins are also used, namely in place of flexbox and grid properties, containing browser prefixes in order to maximize cross-browser support while keeping the project's working .scss files clean.

#### Responsive, Consistent, and Cross-Browser Compatible

The site is fully responsive across devices, with the use of hand-placed media queries and breakpoints. The site is also cross-browser compatible and includes support for IE11. The Simplebar library is used to customize scrollbars consistently across browsers.

## Development

For this project, I decided to continue practicing Vue.js, Webpack, Node.js, and Express. I also learned how to make API calls, how to use Axios, and how to save time (no pun intended...maybe) using Moment.js.

#### HTML5, Vue.js, Webpack

The site's front end is built with Vue.js, with Webpack bundling. Though the design is rather creative, I make an effort to use semantic HTML throughout the project.

#### RESTful API, Axios, Moment.js

The project utilizes Axios to make REST API calls to pull recent commit history from GitHub. To ease the conversion of commit dates into a more readable format consistent with the rest of the site, I use the Moment.js library. (RESTful APIs being a new topic for me, I was supervised by my mentor during a collaborative TeamViewer coding session.)

#### Node.js, Express, npm, nodemon, concurrently

In the back end, the project is run by Node.js and a simple Express server.

## Other Notes

The project includes a few other features I can't take any credit for. My mentor dockerized the site, set up a continuous integration service provided by Azure DevOps, and deployed the project onto the AWS cloud. Thank you!
