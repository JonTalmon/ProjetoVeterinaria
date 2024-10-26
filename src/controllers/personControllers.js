import PersonRegister from "../models/personRegister.js"
import Role from "../models/role.js"

async function readAllPersons(req, res) {
    try {
        const person = await PersonRegister.findAll();
        res.status(200).json(person);
    } catch (err) {
        res.status(500).json({ Error: "Error retriving persons", details: err.message});
    };
};

async function readPersonById(req, res) {
    try {
        const { id } = req.params
        const person = await PersonRegister.findByPk(id);
        if (person) {
            res.status(200).json(person)
        } else {
            res.status(404).json({Error: "Person not found"});
        }
    } catch (err) {
        res.status(500).json({ Error: "Error retriving persons", details: err.message});
    }
};

async function readPersonByName(req, res) {
    try {
        const { name } = req.params;
        const person = await PersonRegister.findOne({ where: name});
        if (person) {
            res.status(200).json(person);
        } else {
            res.status(404).json({Error: "Person not found"});
        }
    } catch (err) {
        res.status(500).json({ Error: "Error retriving persons", details: err.message});
    }
};

async function readPersonsByRole(req, res) {
    try {
        const { role } = req.params;
        const person = await PersonRegister.findAll({
            include: {
                model: Role,
                where: { role },
                attributes: []
            }
        });
        if 
    } catch (err) {

    }
}


export default readAllPersons