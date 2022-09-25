'use strict';


const createPostsTable = (dataBase, DataType) => dataBase.define('posts', {

    title:
    {
        type: DataType.STRING,
        allowNull: false
    },
    content:
    {
        type: DataType.STRING,
        defaultValue: 'Test Data'
    },

});



module.exports = { createPostsTable };





