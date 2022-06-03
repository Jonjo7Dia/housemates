import Navigation from "./navigation/Navigation";
import classes from './Layout.module.css';
function Layout(props) {
  return (
    <div className={classes.layout}>
      <Navigation />
      <main>{props.children}</main>
    </div>
  );
}

export default Layout;
