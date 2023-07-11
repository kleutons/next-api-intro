export default function handlerPost ( req, res ) {
    res.status(200).json(
        {
            msg: `Params ${req.query.id}`
        }
    )
}