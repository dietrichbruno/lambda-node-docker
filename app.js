exports.lambdaHandler = async (event) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify("hello World")
    };
    return response;
}