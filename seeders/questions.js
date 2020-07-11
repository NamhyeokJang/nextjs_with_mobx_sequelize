const { Category, Question } = require('../models')
const { englishData, musicData } = require('./data')


const makeEn = async () => {
    const english = await Category.findOne({
        where: {
            folder: 'english'
        }
    }).then(res => res.dataValues)

    englishData.forEach(async data => {
        const filename = data.image.split('/')[3]
        await Question.create({
            question: filename,
            answer: data.title,
            ctg_id: english.id
        })
    })
}

const makeMusic = async () => {
    const music = await Category.findOne({
        where: {
            folder: 'music'
        }
    }).then(res => res.dataValues)

    musicData.forEach(async data => {
        await Question.create({
            question: `${data}.png`,
            answer: `${parseInt(data) + 101}.png`,
            ctg_id: music.id
        })
    })
}


const init = async () => {
    await makeEn()
    await makeMusic()
}

init()