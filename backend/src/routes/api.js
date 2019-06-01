import { Router } from 'express';

import auth from '../auth'; // eslint-disable-line no-unused-vars
import * as authController  from '../controllers/api/auth';
import * as userController from '../controllers/api/user';

const router = Router();

router.get('/', (req, res) => {
  const message = {
    name: 'express-starter',
    license: 'MIT',
    keywords: [
      'express',
      "babel",
      'boilerplate',
      'scaffold',
      'es6',
      "es2015",
      'es2016',
      'es2017',
      'jest',
      'eslint'
    ],
    engines: {
      "node": "~6.9.1",
      'npm': ">=3.10.0"
    },
  };

  return res
    .status(200)
    .json(message);
});

/**
 * GET /rides Fetch all rides.
 */
router.get('/rides', (req, res) => {
  const rides = [];

  return res
    .status(200)
    .json(rides);
});

/**
 * POST /rides Create a ride offer.
 */
router.post('/rides', (req, res) => {
  const rides = [];

  rides.concat(req.body);

  return res
    .status(201)
    .json(rides);
});

/**
 * POST /register Register a user
 */
router.post('/register', authController.register);


/**
 * POST /login Log in
 */
router.post('/login', authController.login);

/**
 * GET /user Get authenticated user
 */
router.get('/user', /*[auth, ],*/ userController.getAuthUser);

export default router;
