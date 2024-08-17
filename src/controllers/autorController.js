import { autor } from "../models/Autor.js";

class AutorController {

    static async listarAutor (req, res) {
        try {
            const listaAutor = await autor.find({});
            res.status(200).json(listaAutor);
        } catch (erro){
            res.status(500).json({ message: `${erro.message} - falha na requisição` });
        }
    }

    static async listarAutorPorId (req, res) {
        try {
            const id = req.params.id;
            const autorEncontrado = await autor.findById(id);
            res.status(200).json(autorEncontrado);
        } catch (erro){
            res.status(500).json({ message: `${erro.message} - falha na requisição do autor` });
        }
    }    

    static async cadastrarAutor (req, res) {
        try{
            const novoAutor = await autor.create(req.body);
            res.status(201).send({ message: "Criado com sucesso", autor: novoAutor});
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao cadastrar autor.` });
        }
    }

    static async atualizarAutor (req, res) {
        try {
            const id = req.params.id;
            await autor.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: 'Autor atualizado' });
        } catch (erro){
            res.status(500).json({ message: `${erro.message} - falha na atualização` });
        }
    }

    static async deletarAutor (req, res) {
        try {
            const id = req.params.id;
            await autor.findByIdAndDelete(id);
            res.status(200).json({ message: 'Autor deletado com sucesso' });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao deletar Autor.` });
        }
    }

};

export default AutorController;