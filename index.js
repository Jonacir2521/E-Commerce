const express = require('express');
const app = express();

//ROTAS
app.get('/', olaMundo)
app.get('/sobre', function(req,res){
	res.send('<h1>Página Sobre</h1>');
});

//SERVIDOR RODANDO…
app.listen(3000,servidorRodando);

//FUNÇÕES
function olaMundo(req,res){
res.send('OláMundo')
}
function servidorRodando(){
	console.log('Servidor rodando…')
}
