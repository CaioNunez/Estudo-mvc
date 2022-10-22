const produtoController = {
    index:(req, res)=>{

        return res.render ("produto",{"pp":"Produto"})
    },

    create:(req, res)=>{
        return res.render ("criarProduto")

    },

    store: (req, res)=>{
        const nome = req.body;
        console.log (nome)
    }
}
module.exports = produtoController;