import React from "react";
import styles from "./BorderMenu.module.css";

function BorderMenu(props) {
  return (
    <div className={styles.MenuContainer}>
      <div className={styles.center}>
        <nav className={styles.menu}>
          <ol>
            <li className={styles.menuItem}>
              <a href="#0">Add</a>
            </li>
            <li className={styles.menuItem}>
              <a href="#0">Edit</a>
            </li>

            <li className={styles.menuItem}>
              <a href="#0">Delete</a>
            </li>
          </ol>
        </nav>
      </div>
    </div>
  );
}

export default BorderMenu;
