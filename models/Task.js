const { DataTypes } = require("sequelize");
const db = require("../db/conn");

const Task = db.define("Task", {
title: {
    type: DataTypes.STRING,
    allowNull: false,
},
description: {
    type: DataTypes.STRING,
},
done: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
},
priority: {
    type: DataTypes.STRING,
    defaultValue: 'Média',
    allowNull: false,
    validate: {
        isIn: [['Baixa', 'Média', 'Alta']],
    }
},
dueDate: {
    type: DataTypes.DATE,
    allowNull: false,
    validate: {
        isDate: true,
    }
},
});

module.exports = Task;
