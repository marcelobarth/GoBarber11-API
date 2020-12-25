import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '@config/upload';

import UsersController from '@modules/users/infra/http/controllers/UsersController'
import UserAvatarController from '@modules/users/infra/http/controllers/UserAvatarController'

import ensureAuthentication from '@modules/users/infra/http/middlewares/ensureAuthenticated';

const usersRouter = Router();
const usersController = new UsersController();
const userAvatarController = new UserAvatarController();
const upload = multer(uploadConfig);

usersRouter.post('/', usersController.create);

usersRouter.patch('/avatar', ensureAuthentication, upload.single('avatar'),
userAvatarController.update);

export default usersRouter;
