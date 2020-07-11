import { Category } from '../../models'

export default async (req, res) => {
  await Category.findAll({})
  res.statusCode = 200
  res.json({ name: 'John Doe' })
}
