export default function handlerCustomers(req, res) {
    const resParams = req.query.params;

    let values = {};

    resParams.map((item, index) => {
        values[`value ${index + 1}`] = item;
    });

    res.status(200).json({
        msg: `Provider ${resParams}`,
        length: resParams.length,
        ...values
    });
}