
import classes from './AccountIcons.module.css';

function AccountIcons(props) {

    return <div className={classes.houseMember}>
    {props.members.map((member, index) => {
        let conditionalClass;
       if (member.selected){
        conditionalClass = classes.selected;
       }
       else {
        conditionalClass = classes.unselected;
       }
      return (
        <div className={conditionalClass} key={index}>
          <div classes={classes.houseMemberLogo}>{member.name.charAt(0)}</div>
        </div>
      );
    })}
  </div>
}
export default AccountIcons;

// () - starts the if statement and closes
// ?  - is the if condition is met
// :  - is the else