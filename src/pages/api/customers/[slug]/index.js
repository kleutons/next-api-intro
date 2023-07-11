export default function handlerCustomers( req, res ) {
    res.status(200).json(
        {
            msg: `Customer ${req.query.slug}`
        }
    )
}