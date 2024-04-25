const { useEffect } = require("react");

const useMount = (callback: ()=> void) => {
  useEffect(() => {
    callback();
  }, []);
};

export default useMount;
