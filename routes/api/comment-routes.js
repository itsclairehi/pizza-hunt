const router = require('express').Router();

//import functions created in controller files
const { addComment, removeComment, addReply, removeReply
 } = require('../../controllers/comment-controller');

// /api/comments/<pizzaId>
router.route('/:pizzaId').post(addComment);

// /api/comments/<pizzaId>/<commentId>
router.route('/:pizzaId/:commentId')
.put(addReply)
.delete(removeComment);

router.route('/:pizzaId/:commentID/:replyId').delete(removeReply)
module.exports = router;