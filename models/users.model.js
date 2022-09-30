'use strict';

function createUsersTable(sequelize, dataTypes) {
    return (
        sequelize.define('users', {
            userName : {
                type:dataTypes.STRING,
                allowNull:false,unique:true
            },
            email : {
                type:dataTypes.STRING,
                allowNull:false,
                unique:true,
                isEmail:true
            },
            passWord : {
                type:dataTypes.STRING,
                allowNull:false
            },
            token : {
                type:dataTypes.VIRTUAL
            },
            role: {
                type: dataTypes.ENUM('user', 'admin'), defaultValue: 'user', allowNull: false
            },
            capabilites: {
                type: dataTypes.VIRTUAL,
                get() {
                    const actions = {
                        user: ['read', 'create'],
                        admin: ['read', 'create', 'update', 'delete']
                    }
                    return (actions[this.role]);
                }
            }
        })
    );
}



module.exports = {createUsersTable};