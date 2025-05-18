module.exports.helloGet = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "GET /hello" }),
  };
};

module.exports.helloPost = async (event) => {
  const body = JSON.parse(event.body || '{}');
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "POST /hello", data: body }),
  };
};

module.exports.helloById = async (event) => {
  const id = event.pathParameters?.id;
  return {
    statusCode: 200,
    body: JSON.stringify({ message: `GET /hello/${id}` }),
  };
};
