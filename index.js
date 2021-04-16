const express = require('express');
const app = express();
app.use(express.static('public'));

//ROTAS
app.get('/', function(req,res){
	res.sendFile(__dirname+'/public/index.html');
} )
app.get('/produtos', function(req,res){
	res.sendFile(__dirname+'/public/produtos.html');
} )
app.get('/usuarios', function(req,res){
	res.sendFile(__dirname+'/public/usuarios.html');
} )
app.get('/sobre', function(req,res){
	res.sendFile(__dirname+'/public/sobre.html');
} )
app.get('/teste', function(req,res){
	res.sendFile(__dirname+'/public/teste.html');
} )

//SERVIDOR RODANDO…
app.listen(3000,servidorRodando);

//FUNÇÕES
function olaMundo(req,res){
res.send('OláMundo')
}
function servidorRodando(){
	console.log('Servidor rodando…')
}
