const homeController ={

    index:(req, res) =>{
        return res.render ("home")
    },

    store: (req, res)=>{
        const nome= req.body

        console.log (nome)

    }


   
}
module.exports = homeController;