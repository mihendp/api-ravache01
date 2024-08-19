const { Endereco } = require('../models');

//Criação de um novo endereço
exports.createEndereco = async (req, res) => {
    try {
        const { Cep, Logradouro, Numero, Complemento, Bairro, Cidade, Estado, MunicipioIBGE } = req.body;

        const novoEndereco = await Endereco.create({
            Cep,
            Logradouro,
            Numero,
            Complemento,
            Bairro,
            Cidade,
            Estado,
            MunicipioIBGE
        });

        res.status(201).json(novoEndereco);
    } catch (error) {
        res.status(500).json({
            error: "Erro ao criar endereço",
            details: error.message
        });
    }
};

// Leitura de todos os endereços
exports.getAllEnderecos = async (req, res) => {
    try {
        const enderecos = await Endereco.findAll();
        res.status(200).json(enderecos);
    } catch (error) {
        res.status(500).json({
            error: "Erro ao buscar endereços",
            details: error.message
        });
    }
};

// Leitura de um endereço por ID
exports.getEnderecoById = async (req, res) => {
    try {
        const { Id } = req.params;
        const endereco = await Endereco.findByPk(Id);

        if (!endereco) {
            return res.status(404).json({ error: "Endereço não encontrado" })
        }

        res.status(200).json(endereco);
    } catch (error) {
        res.status(500).json({
            error: "Erro ao buscar endereço",
            details: error.message
        });
    }
};

// Atualização de um endereço
exports.updateEndereco = async (req, res) => {
    try {
        const { Id } = req.params;
        const { Cep, Logradouro, Numero, Complemento, Bairro, Cidade, Estado, MunicipioIBGE } = req.body;

        const endereco = await Endereco.findByPk(Id);

        if (!endereco) {
            return res.status(404).json({
                error: "Endereço não encontrado"
            });
        }

        endereco.Cep = Cep;
        endereco.Logradouro = Logradouro;
        endereco.Numero = Numero;
        endereco.Complemento = Complemento;
        endereco.Bairro = Bairro;
        endereco.Cidade = Cidade;
        endereco.Estado = Estado;
        endereco.MunicipioIBGE = MunicipioIBGE;

        await endereco.save();

        res.status(200).json(endereco);
    } catch (error) {
        res.status(500).json({
            erorr: "Erro ao atualizar endereço",
            details: error.message
        });
    }
};

exports.deleteEndereco = async (req, res) => {
    try {
        const { Id } = req.params;

        const endereco = await Endereco.findByPk(Id);

        if (!endereco) {
            return res.status(404).json({
                error: "Endereço não encontrado"
            })
        }

        await endereco.destroy();

        res.status(204).send(); //Sem conteúdo, pois foi deletado com sucesso 
    } catch (error) {
        res.status(500).json({
            error: "Erro ao deletar endereço", 
            details: error.message
        });
    }
};