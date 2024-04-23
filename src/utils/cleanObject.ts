const cleanObject = (object) => {
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    const value = result[key];
    if (value == undefined || value === "") {
      delete result[key];
    }
  });
  return result;
};

export default cleanObject;
