const { useEffect } = require("react");

const useMount = (callback) => {
  useEffect(() => {
    callback();
  }, []);
};

export default useMount;
