export default function users( req, res ) {


    if(req.method === 'POST'){
        res.status(200).json(
            {
                msg: `Method ${req.method}`
            }
        )
    }else{
        res.status(500).json(
            {
                msg: `Error`
            }
        )
    }
}