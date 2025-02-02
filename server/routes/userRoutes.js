const { Router } = require('express');
const router = Router();
const{signupUser, loginUser, getUser, changeAvatar, editUser} = require("../controllers/userControllers")

router.post('/signup', signupUser)
router.post('/login', loginUser)
router.get('/:id', getUser)
router.post('/change-avatar', changeAvatar)
router.patch('/edit-user', editUser)

router.get('/', (req, res, next) => {
    res.json({ message: "This is the user route" });
});

module.exports = router;