import express from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';
import mainRoutes from './routes/index';

dotenv.config();//Para Permitir trabalhar com variaveis de ambiente

const server = express();
server.set('view engine', 'mustache');//Dizendo ao server qual template engine usaremos
server.set('views', path.join(__dirname, 'views'));//As nossas views estarao na pasta chamada views
server.engine('mustache', mustache());//Aplicando de fato a engine a ser usada

server.use(express.static(path.join(__dirname, '../public')));//Disponibilizando uma pasta publica

//Rotas
server.use(mainRoutes);

server.use((req, res)=>{
	res.render('pages/404');
});//Page not found

server.listen(process.env.PORT);//Ouvindo na porta que esta no .env