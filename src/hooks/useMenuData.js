import { useEffect, useState } from "react";

const useMenuData = (url, setVisibleSections) => {
  const [loading, setLoading] = useState(true);
  const [menu, setMenu] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      const resData =
        json?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

      const initialVisibleSections = {};

      resData.forEach((data) => {
        const title = data.card?.card?.title;
        if (title) {
          initialVisibleSections[title] = true; // Set to true to make all visible
        }
      });

      setVisibleSections(initialVisibleSections);
      setMenu(resData);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    } finally {
      setLoading(false);
    }
  };

  return { menu, loading };
};

export default useMenuData;
