import { Category } from '@models'

export default async (req, res) => {
    switch (req.method) {
        case 'GET':
            const getCategories = await Category.findAll()
            res.json({ categories: getCategories })
            break;

        case 'POST':
            break;

        default:
            break;
    }
}
