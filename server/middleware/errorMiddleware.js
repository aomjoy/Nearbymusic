const notFound = (req, res, nect) => {
    const error = new Error (`Not found - ${req.originalUrl}`)
    res.status(404);
    nect(error);
}

const errorHandler = (error, req, res, next) => {
    if(res.headreSent) {
        return next(error)
    }

    res.status(error.code || 500).json ({message: error.message || "An unknown error occured"})
}

module.exports = {notFound, errorHandler}