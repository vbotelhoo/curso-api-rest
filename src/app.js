import express from 'express';
import conectaDatabase from './config/dbConnect.js';
import routes from './routes/index.js';

const conexao = await conectaDatabase();

conexao.on('error', (erro)=>{
    console.error('Erro de conexao', erro);
});

conexao.once('open', ()=>{
    console.log('Conexão realizada com sucesso');
})

const app = express();

routes(app);

export default app;
