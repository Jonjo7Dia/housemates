import classes from "./AddNewHouse.module.css";
import AddHouseButton from "../../../UI/buttons/AddHouseButton";
import HouseForm from '../../../UI/houseSettings/HouseForm';
import { useState } from "react";
function AddNewHouse(props) {
  const [houseSettings, setHouseSettings] = useState(false);
  const configHouse = props.house;
  const showHouseSettings= () => {
    setHouseSettings(true);
  }
  return (
    <div className={classes.addNewHouse}>
      {!configHouse.isHouse && <AddHouseButton onClick={showHouseSettings}/>}
      {houseSettings && <HouseForm house={configHouse}/>}
    </div>
  );
}

export default AddNewHouse;
