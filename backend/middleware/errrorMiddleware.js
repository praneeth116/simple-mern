const notFound = (req, res, next) => {
    // Error contains the message
    const error = new Error(`Not found - ${req.originalUrl}`);
    // res contains the status code
    res.status(404);
    next(error);
}

// Error handling middleware must have this order -> (err, req, res, next)
const errorHandler = (err, req, res, next) => {
    let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    let message = err.message;

    // Handle invalid MongoDB ObjectID
    if (err.name === 'CastError' && err.kind === 'ObjectId'){
        statusCode = 404;
        message = 'Resource not found';
    }
    // stack helps us in debugging in development environment!
    res.status(statusCode).json({
        message,
        stack: process.env.NODE_ENV === "production" ? null : err.stack  
    })
}