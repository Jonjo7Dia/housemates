import classes from "./NavBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
function NavBar(props) {
  return (
    <nav className={classes.mainNav}>
      <div className={classes.mainNavWrapper}>
        <div className={classes.fixedNav}>
          <div className={classes.logoName}>
            <div className={classes.logo}>
              <Link to="/">
                <FontAwesomeIcon icon={faHouse} />
              </Link>
            </div>

            <div className={classes.name}>
              <Link to="/">OurHome</Link>
            </div>
          </div>
        </div>
        <div className={classes.adaptableNav}>{props.children}</div>
      </div>
    </nav>
  );
}

export default NavBar;
