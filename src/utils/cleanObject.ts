const cleanObject = (object: object) => {
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    // @ts-ignore
    const value = result[key];
    if (value === undefined || value === "") {
      // @ts-ignore
      delete result[key];
    }
  });
  return result;
};

export default cleanObject;
