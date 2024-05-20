// import AppNav from "../components/AppNav";
import styles from "./AppLayout.module.css";
import Sidebar from "../components/SideBar";
import Map from "../components/Map";

function AppLayout() {
  return (
    <div className={styles.App}>
      <Sidebar />
      <Map />
    </div>
  );
}

export default AppLayout;
