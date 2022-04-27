export default function BoardService(){
    return {
        write(req, res){
            new BoardSchema(req.body).save(()=>{
                res.status(200).json({'result':'ok'}) 
            }) 
        },

        getBoards(_req, res){
            console.log(`### boardController access `)
            BoardSchema.find()
            .exec((err, boards) => {
                if (err) return res.status(400).send(err)
                res.status(200).json({ success: true, boards })
            })
        }
        
    }
}