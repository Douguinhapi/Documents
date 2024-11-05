import { User } from '../db.js'

const listUser = async (req, res) => {
    const receba = await User.findAll({ attributes: ['nome','email','status']})
    console.log(receba)
    res.send(receba)
}

const getUser = async (req, res) => {
    const { id } = req.body;
    const receba = await User.findOne({ where: { id: id }, attributes: ['nome', 'sobrenome', 'email', 'status', 'dataNascimento'] })
    res.send(receba)
}

const deleteUser = async (req, res) => {
    const { id } = req.body;
    const receba = await User.findOne({ where: { id: id }})
    if (!receba) {
        return res.send('Esse User ai nao existe')
    }
    const apaga = await User.destroy({where: {id: id}})
}

export { listUser, deleteUser, getUser }