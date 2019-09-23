const uuid = require('uuid/v4')

const bookmarks = [
  { id: uuid(),
    title: 'webpage1',
    url: 'https://www.google.com',
    description: 'loerm ipsum nopam',
    rating: 5 },
  { id: uuid(),
    title: 'webpage2',
    url: 'https://www.instagram.com',
    description: 'picture sharing',
    rating: 3 },
  { id: uuid(),
    title: 'website3',
    url: 'https://thinkful.com',
    description: 'coding bootcamp',
    rating: 4 },
]

module.exports = { bookmarks }
