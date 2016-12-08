/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	// Sign-up for User
	signup: function(req, res){
		console.log('Backend Signup');

		var Passwords = require('machinepack-passwords');

		// Encrypt Password
		Passwords.encryptPassword({
			password: req.param('password'),
			difficulty: 10
		}).exec({
			error: function(err){
				return res.negotiate(err);
			},
			success: function(encryptedPassword){
				require('machinepack-gravatar').getImageUrl({
					emailAddress: req.param('email')
				}).exec({
					error: function(){
						return res.negotiate(err);
					},
					success: function(gravatarUrl){
						// Creating User
						User.create({
							name: req.param('name'),
							email: req.param('email'),
							password: encryptedPassword,
							lastLoggedIn: new Date(),
							gravatarUrl: gravatarUrl
						}, function userCreated(err, newUser){
							if(err) {
								console.log('Error: ' + err);
								return res.negotiate(err);
							}

							// Session Variable

							console.log('User Added');
							
							return res.json({
								id: newUser.id
							});
						})
					}
				})
			}
		})
	},
	login: function(req, res){
		//  Validating User
		User.findOne({
			email: req.param('email')
		}, function foundUser(err, user){
			if(err){
				return res.negotiate(err);
			}
			if(!user){
				return res.notFound();
			}
		})
	}
};

