<<<<<<< HEAD
import {Router} from "./user.routes";
import {
    addComment,
    deleteComment,
    getVideoComment,
    updateComment
} from '../controllers/comment.controller'

import { verifyJWT } from "../middlewares/auth.middleware";

const router=Router();

router.use(verifyJWT); // Apply verifyJWT middleware to all routes in this file

router.route("/:videoId").get(getVideoComment).post(addComment);
router.use("/c/:commentId").delete(deleteComment).patch(updateComment);

=======
import {Router} from "./user.routes";
import {
    addComment,
    deleteComment,
    getVideoComment,
    updateComment
} from '../controllers/comment.controller'

import { verifyJWT } from "../middlewares/auth.middleware";

const router=Router();

router.use(verifyJWT); // Apply verifyJWT middleware to all routes in this file

router.route("/:videoId").get(getVideoComment).post(addComment);
router.use("/c/:commentId").delete(deleteComment).patch(updateComment);

>>>>>>> 70857d0b1e22b5a4f500ddec480e2d1b1f768775
export  default router