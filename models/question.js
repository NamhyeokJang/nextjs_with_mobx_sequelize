module.exports = (sequelize, DataTypes) => {
    return sequelize.define('question', {
        question: {
            type: DataTypes.STRING(150),
            allowNull: false,
        },
        answer: {
            type: DataTypes.STRING(150),
            allowNull: false,
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize.literal('now()'),
        },
    }, {
        timestamps: false,
    })
}