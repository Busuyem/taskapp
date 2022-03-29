const { CustomApiError } = require('../custom-error/error')

const errorHandler = (err, req, res, next) => {
    //return res.status(500).json({ msg: err })
    if (err instanceof CustomApiError) {
        return res.status(err.statusCode).json({ msg: err.message })
    }

    console.log(err)
    return res.status(500).json({ err: `Something went wrong` })
}

module.exports = errorHandler