import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const AppId = () => {
  const router = useRouter();
  const { appId } = router.query;
  const [appData, setAppData] = useState(null);

  useEffect(() => {
    getApp();
  }, []);

  const getApp = async () => {
    await fetch(`http://localhost:3000/api/getApp?appId=${appId}`)
      .then((res) => res.json())
      .then((json) => setAppData(json.data));
  };

  console.log(appData);

  return <div>{appId}</div>;
};

export default AppId;
