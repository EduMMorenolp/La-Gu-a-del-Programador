export const responseFormatter = (req, res, next) => {
  const originalJson = res.json;

  res.json = function (data) {
    if (data && (data.success === false || data.error)) {
      return originalJson.call(this, data);
    }

    const formattedResponse = {
      success: true,
      data,
      timestamp: new Date().toISOString(),
    };
    return originalJson.call(this, formattedResponse);
  };

  next();
};
