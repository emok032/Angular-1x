# userauth

a [Sails](http://sailsjs.org) application

Setup Notes:
Run Sails.js app - sails lift
See localhost:1337
Follow steps on localhost:133
	- (1) Generate a REST API: Run sails generate api user. This will create two files: a model and a controller.
	- (2) Lift your app: Run sails lift to start up your app server. If you visit http://localhost:1337/user in your browser, you'll see a WebSocket-compatible user API.
	- (3) Dive in: "Blueprints" are just the beginning. You'll probably also want to learn how to customize your app's routes, set up security policies, configure your data sources, and build custom controller actions. For more help getting started, check out the links on this page.

My Development Notes:
- Added Angular.js CDN file to assets/js/dependencies (with sails.io.js)
- Edited routes.js '/' to GET'
- Edited views.js 'layout' to false