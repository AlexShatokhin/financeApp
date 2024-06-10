const db = require('../config/config');

class MuscleGroup {

    async getAll(req, res){
        let response = {};
        try {
            const [muscleGroups] = await db.query('SELECT * FROM musclesgroup');
            response = {
                status: 200,
                data: muscleGroups,
                count: muscleGroups.length
            }
        } catch (error) {
            console.log(error);
            response = {
                status: 500,
                data: [],
                count: 0
            }
        }
        res.status(response.status).json(response.data);
    }

    async getById(req, res){
        let response = {};
        const id = req.params.id;
        try {
            const [muscleGroups] = await db.query('SELECT * FROM musclesgroup WHERE id = ?', [id]);
            response = {
                status: 200,
                data: muscleGroups,
                count: muscleGroups.length
            }
        } catch (error) {
            console.log(error);
            response = {
                status: 500,
                data: [],
                count: 0
            }
        }
        res.status(response.status).json(response.data);
    }

    async create(req, res){
        let response = {};
        try {
            await db.query(`INSERT INTO musclesgroup (musclesGroupName) VALUES ('${req.body.name}')`);
            response = {status: 200}
        } catch (error) {
            console.log(error);
            response = {status: 500}
        }
        res.sendStatus(response.status);
    }

    async update(req, res){
        let response = {};
        const id = req.params.id;
        try {
            await db.query('UPDATE musclesgroup SET ? WHERE id = ?', [req.body, id]);
            response = {status: 200}
        } catch (error) {
            console.log(error);
            response = {status: 500}
        }
        res.sendStatus(response.status);
    }

    async delete(req, res){
        let response = {};
        const id = req.params.id;
        try {
            await db.query('DELETE FROM musclesgroup WHERE id = ?', [id]);
            response = {status: 200}
        } catch (error) {
            console.log(error);
            response = {status: 500}
        }
        res.sendStatus(response.status);
    }

}

module.exports = new MuscleGroup();

