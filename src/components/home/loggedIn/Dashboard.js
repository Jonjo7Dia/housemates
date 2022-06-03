import classes from "./Dashboard.module.css";
import { useState } from "react";
import AddNewHouse from "./addHouse/AddNewHouse";
import HasHouse from "./hasHouse/HasHouse";
import {useSelector} from 'react-redux';
function Dashboard() {
  const userInfo = useSelector((state)=> state.userInfo);
  const houseInfo = useSelector((state)=> state.houseInfo);

  const [house, setHouse] = useState({
    isHouse: userInfo.hasHouse,
    houseName: userInfo.houseBasic.name,
    currentMembers: houseInfo.currentMembers,
  });
  console.log(house);
  return (
    <div className={classes.dashboard}>
      {!house.isHouse && <AddNewHouse house={house} />}
      {house.isHouse && <HasHouse house={house} />}
    </div>
  );
}

export default Dashboard;
