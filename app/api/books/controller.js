const { Book } = require('../../db/models');


module.exports = {
    getAllBooks: async (req, res, next) => {
        try {
            const categories = await Book.findAll({
                where: { user: req.user.id },
                attributes: ['id', 'name'],
            });
            res.status(200).json({
                message: 'Success get All Books',
                data: categories,
            });
        } catch (err) {
            next(err);
        }
    }
}