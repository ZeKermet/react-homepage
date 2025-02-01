import {useState} from 'react';

import styles from './pageHeader.module.css';
import logo from '../../assets/images/logo.svg';
import dropArrow from '../../assets/images/icon-arrow-down.svg';
import menuIcon from '../../assets/images/icon-menu.svg';
import closeMenuIcon from '../../assets/images/icon-close-menu.svg';

import calendarIcon from '../../assets/images/icon-calendar.svg';
import reminderIcon from '../../assets/images/icon-reminders.svg';
import todoIcon from '../../assets/images/icon-todo.svg';
import planningIcon from '../../assets/images/icon-planning.svg';



export default function PageHeader() { 
    const [headerRightPos, setHeaderRightPos] = useState('100%');

    window.addEventListener('click', (e) => {
        if (!(e.target.parentElement.classList.contains(styles.dropdown) || e.target.parentElement.classList.contains(styles.dropdownLink))) {
            for (const navlink of document.getElementsByClassName(`${styles.navlink} ${styles.dropdown}`)) {
                navlink.classList.remove(styles.opened);
            }
        }
        
        if (e.target.classList.contains(styles.headerRightBackground)) {
            setHeaderRightPos("100%");
            setTimeout(() => {e.target.classList.remove(styles.opened)}, 250);
        }
    });

    window.addEventListener('resize', () => {
        const headerRight = document.getElementsByClassName(styles.headerRight)[0];
        const headerRightWidthStyle = `${Math.floor(parseInt(getComputedStyle(headerRight).width.replace("px", "")))}px`;

        if (headerRight.parentElement.classList.contains(styles.opened)) {
            setHeaderRightPos(`calc(100% - ${headerRightWidthStyle})`);
        }
    });


    const handleOpenDropdown = (e) => {
        for (const navlink of document.getElementsByClassName(`${styles.navlink} ${styles.dropdown}`)) {
            if (navlink !== e.target.parentElement && navlink !== e.target.parentElement.parentElement.parentElement.parentElement) {
                navlink.classList.remove(styles.opened);
            }
        }

        if (e.target.parentElement.classList.contains(styles.dropdown)) {
            e.target.parentElement.classList.toggle(styles.opened);
        }
    }

    const handleCloseMenu = (e) => {
        if (e.target.classList.contains(styles.closeMenuBtn)) {
            setHeaderRightPos("100%");
            setTimeout(() => {document.getElementsByClassName(styles.headerRightBackground)[0].classList.remove(styles.opened)}, 250);
        }
    }

    const handleOpenMenu = (e) => {
        console.log("true");
        if (e.target.classList.contains(styles.menuBtn)) {
            const headerRight = document.getElementsByClassName(styles.headerRight)[0];
            const headerRightWidthStyle = `${Math.floor(parseInt(getComputedStyle(headerRight).width.replace("px", "")))}px`;

            document.getElementsByClassName(styles.headerRightBackground)[0].classList.add(styles.opened);
            setTimeout(() => {setHeaderRightPos(`calc(100% - ${headerRightWidthStyle})`)}, 250);
        }
    }

    return (
        <>
            <div className={styles.pageHeader}>
                <div className={styles.logo}>
                    <img src={logo} />
                </div>

                <div className={`${styles.headerRightBackground}`}>
                    <div className={styles.headerRight} style={{left: headerRightPos}}>
                        <img src={closeMenuIcon} className={styles.closeMenuBtn} onClick={handleCloseMenu} style={{pointerEvents: "all"}} />

                        <div className={styles.navbar}>
                            <div className={`${styles.navlink} ${styles.dropdown}`} onClick={handleOpenDropdown}>
                                <p className={styles.navlinkText}>Features</p>
                                <img src={dropArrow} className={styles.dropArrow} />
                                <div className={styles.dropdownLinksContainer}>
                                    <div>
                                        <div className={styles.dropdownLink}>
                                            <img src={todoIcon} />
                                            <p>Todo List</p>
                                        </div>

                                        <div className={styles.dropdownLink}>
                                            <img src={calendarIcon} />
                                            <p>Calendar</p>
                                        </div>

                                        <div className={styles.dropdownLink}>
                                            <img src={reminderIcon} />
                                            <p>Reminder</p>
                                        </div>

                                        <div className={styles.dropdownLink}>
                                            <img src={planningIcon} />
                                            <p>Planning</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={`${styles.navlink} ${styles.dropdown}`} onClick={handleOpenDropdown}>
                                <p className={styles.navlinkText}>Company</p>
                                <img src={dropArrow} className={styles.dropArrow} />
                                <div className={styles.dropdownLinksContainer}>
                                    <div>
                                        <div className={styles.dropdownLink}>
                                            <p>History</p>
                                        </div>

                                        <div className={styles.dropdownLink}>
                                            <p>Our Team</p>
                                        </div>

                                        <div className={styles.dropdownLink}>
                                            <p>Blog</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={`${styles.navlink}`}>
                                <p className={styles.navlinkText}>Careers</p>
                            </div>

                            <div className={`${styles.navlink}`}>
                                <p className={styles.navlinkText}>About</p>
                            </div>
                        </div>

                        <div className={styles.headerButtons}>
                            <button className={styles.loginBtn}>Login</button>
                            <button className={styles.registerBtn}>Register</button>
                        </div>
                        
                    </div>
                </div>
                

                <img src={menuIcon} className={styles.menuBtn} onClick={handleOpenMenu} style={{pointerEvents: "all"}} />
            </div>
        </>
    )
}