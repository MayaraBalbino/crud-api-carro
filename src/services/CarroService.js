const db = require('../db.js');

module.exports = {
    buscarTodos: ()=>{
        return new Promise((aceito, rejeitado)=>{
            db.query('SELECT * FROM carros', (error, results)=>{
                if(error) {rejeitado(error); return;}
                aceito(results);
            });
        });
    },

    buscarUm: (codigos)=>{
        return new Promise((aceito, rejeitado)=>{
            db.query('SELECT * FROM carros WHERE codigos = ? ', [codigos], (error, results)=>{
                if(error) {rejeitado(error); return;}
                if(results.length > 0){
                    aceito(results[0])
                }else{
                    aceito(false)
                }
            })
        })
    },

    inserir: (modelo, placa)=>{
        return new Promise((aceito, rejeitado)=>{
            db.query('INSERT INTO carros (modelo, placa) VALUES  (?, ?)', [modelo, placa], (error, results)=>{
                    if(error) {rejeitado(error); return;}
                    aceito(results.inserirCodigo);
            })
        })
    },

    alterar: (modelo, placa, codigos)=>{
        return new Promise((aceito, rejeitado)=>{
            db.query('UPDATE carros SET modelo = ?, placa = ? WHERE codigos = ?', [modelo, placa, codigos], (error, results)=>{
                if(error) {rejeitado(error); return;}
                aceito(results)
            })
        })
    },

    excluir: (codigos)=>{
        return new Promise((aceito, rejeitado)=>{
            db.query('DELETE FROM carros WHERE codigos = ?', [codigos], (error, results)=>{
                if(error) {rejeitado(error); return;}
                aceito(results)
            })
        })
    }
}