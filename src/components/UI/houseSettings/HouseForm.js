import classes from "./HouseForm.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faUser, faPlus } from "@fortawesome/free-solid-svg-icons";
import MainButton from "../buttons/MainButton";
import { useDispatch, useSelector } from "react-redux";
import { houseInfoActions } from "../../../store/houseInfo-slice";
import {userInfoActions} from '../../../store/userInfo-slice';
import { useState } from "react";
import uniqid from "uniqid";
function HouseForm(props) {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.userInfo.userName);
  const userEmail = useSelector((state) => state.userInfo.email);
  const house = useSelector((state) =>  state.houseInfo);
  const [emailInvite, setEmailInvite] = useState();
  let { isHouse, houseName, currentMembers } = props.house;
  const [houseTitle, setHousTitle] = useState("");
  if (houseName === "") {
    houseName = "Set your Home's Name";
  }

  let membersComponent = (
    <div className={classes.memberIcons}>
      {currentMembers.map((member, index) => {
        return (
          <div className={classes.memberIcon} key={index}>
            <div className={classes.memberInfo}>
              <div className={classes.memberLogo}>{member.name.charAt(0)}</div>
              <div className={classes.memberName}>{member.name}</div>
            </div>
          </div>
        );
      })}
    </div>
  );

  const submitHandler = (event) => {
    event.preventDefault();

    if (houseTitle.trim().length < 1) {
      alert("Your house name has to be at least one character long");
    } else {
      const id = uniqid();
      dispatch(houseInfoActions.setHouseName({payload: houseTitle}));
      dispatch(houseInfoActions.setHouseId({payload: id}));
      dispatch(
        houseInfoActions.addCurrentMembers({payload: {
          name: userName,
          email: userEmail,
        }})
      );
      dispatch(userInfoActions.setHasHouse({payload: true}));
      dispatch(userInfoActions.setHouseBasic({payload: {name: houseTitle, id: id}}));
    }
  };

  return (
    <div className={classes.houseFormOverlay}>
      <div className={classes.houseFormBackground}>
        <div className={classes.houseFormHeader}>
          <h1>Home Configurations</h1>
        </div>
        <form action="" className={classes.houseForm} onSubmit={submitHandler}>
          <div className={classes.houseNameInput}>
            <label htmlFor="houseName">
              <FontAwesomeIcon icon={faHouse} />
            </label>
            <input
              type="text"
              placeholder={houseName}
              name="houseName"
              onChange={(e) => {
                setHousTitle(e.target.value);
              }}
            />
          </div>
          {currentMembers.length > 0 && (
            <div className={classes.currentHouseMembers}>
              <h2>Current Members</h2>
              {membersComponent}
            </div>
          )}
          <div className={classes.inviteMembers}>
            <h2>Invite Members</h2>
            <div className={classes.inviteMembersInput}>
              <label htmlFor="userEmail">
                <FontAwesomeIcon icon={faUser} />
              </label>
              <input
                type="email"
                placeholder="input user email"
                name="userEmail"
                value={emailInvite || ''}
                onChange={(e) => {
                  setEmailInvite(e.target.value);
                }}
              />
              <button
                className={classes.addInvitation}
                onClick={() => {
                  console.log(emailInvite);
                  setEmailInvite("");
                }}
                type={"push"}
              >
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>
          </div>
          <div className={classes.houseFormButtons}>
            <MainButton width={20} height={55} text={"cancel"} />
            <MainButton
              width={20}
              height={55}
              text={"confirm"}
              type={"submit"}

            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default HouseForm;
