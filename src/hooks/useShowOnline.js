import { useEffect, useState } from "react";

const useShowOnline = () => {
  const [status, setStatus] = useState(true);
  useEffect(() => {
    addEventListener("offline", () => {
      setStatus(false);
    });
    addEventListener("online", () => {
      setStatus(true);
    });
  }, []);

  return status;
};
export default useShowOnline;
