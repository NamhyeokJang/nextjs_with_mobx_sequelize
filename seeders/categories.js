const { Category } = require('../models')

const CATEGORY = [
    {
        name: '음악',
        folder: 'music'
    },
    {
        name: '영어성취기준',
        folder: 'english'
    },
    {
        name: '수학성취기준',
        folder: 'math'
    },
]

const init = async () => {
    CATEGORY.forEach(data => {
        Category.create({
            name: data.name,
            folder: data.folder
        })
    })
}

init()