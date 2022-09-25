'use strict';

class CrudOperations {

    constructor(model) {
        this.model = model;
    }

    async addOn(obj) {
        try {
            return await this.model.create(obj);
        } catch (e) {
            console.error(`Error in creating data`, this.model.name);
        }
    }

    async getFrom(id) {

        try {
            if (id) {
                return await this.model.findOne({ where: { id } })
            } else {
                return await this.model.findAll()
            }
        } catch (e) {
            console.error(`Error in reading data`, this.model.name);
        }

    }

    async updateAt(obj,id) {
        try {
            return await this.model.update(obj, { where: { id } });
        } catch (e) {
            console.error(`Error in updating data`, this.model.name);
        }
    }

    async deleteFrom(id) {
        try {
            return await this.model.destroy({ where: { id } });
        } catch (e) {
            console.error(`Error in deleting data`, this.model.name);
        }
    }

}



module.exports = { CrudOperations };