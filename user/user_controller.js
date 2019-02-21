const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());
const user = require('./user');

/**
 * Create
 *
 * Creates a user, then returns the user.
 */
router.post('/', function(request,  response) {
  user.create({
    username: request.body.username,
    password: request.body.password,
    firstName: request.body.firstName,
    lastName: request.body.lastName
  }, function (error, user) {
    if (error) {
      return response.status(500).send('Could not create user.');
    }
    console.log(request.body);
    response.status(200).send(user);
  });
});

/**
 * Get All
 *
 * Returns all users
 */
router.get('/', function(request, response) {
  user.find({}, function(error, users) {
    if (error) {
      return response.status(500).send('Could not find users.');
    }
    response.status(200).send(users);
  });
});

/**
 * Get By id
 *
 * Returns a user by their id
 */
router.get('/:id', function(request, response) {
  user.findById(request.params.id, function(error, user) {
    if (error) {
      return response.status(500).send('Could not find user.');
    } 
    if (!user) {
      return response.status(404).send('No user found.');
    }
    response.status(200).send(user);
  });
});

/**
 * Update
 *
 * Updates a user by id.
 */
router.put('/:id', function(request, response) {
  user.findByIdAndUpdate(request.params.id, request.body, {new: true}, function(error, user) {
    if (error) {
      return response.status(500).send('Could not update user.');
    }
    response.status(200).send(user);
  });
});

/**
 * Delete
 *
 * Deletes a user by id
 */
router.delete('/:id', function(request, response) {
  user.findByIdAndRemove(request.params.id, function(error, user) {
    if (error) {
      return response.status(500).send('Could not delete user.');
    }
    response.status(200).send(`${user.username} was deleted.`);
  });
});

module.exports = router;
