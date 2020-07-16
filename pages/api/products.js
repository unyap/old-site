const products = [
  {
    id: 1,
    title: 'Palet 1'
  },
  {
    id: 2,
    title: 'Palet 2'
  },
  {
    id: 3,
    title: 'Palet 3'
  },
  {
    id: 4,
    title: 'Palet 4'
  }
]

export default (req, res) => {
  res.status(200).json(products)
}