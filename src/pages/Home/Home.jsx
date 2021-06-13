import React, { useState } from "react";
import { makeStyles, Tab, Tabs } from "@material-ui/core";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import { IoBookOutline } from "react-icons/io5";
import { AiOutlineProject } from "react-icons/ai";
import { MdTimeline } from "react-icons/md";
import "./Home.css";
import Overview from "../../components/Overview/Overview";
import Timeline from "../../components/Timeline/Timeline";
import Projects from "../../components/Projects/Projects";

const useStyles = makeStyles({
  tab: {
    textTransform: "capitalize",
    borderBottom: "2px solid transparent",
    minWidth: 0,
    fontSize: 12,
    paddingLeft: 15,
    "&:hover": {
      color: "white",
      borderBottom: "2px solid white",
    },
  },
  tabDark: {
    textTransform: "capitalize",
    borderBottom: "2px solid transparent",
    minWidth: 0,
    fontSize: 12,
    paddingLeft: 15,
    "&:hover": {
      color: "black",
      borderBottom: "2px solid #316dca",
    },
  },
  tabTitle: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
  },
  tabTitleLogo: {
    marginRight: "10px",
    fontSize: "17px",
  },
  headRuler: {
    width: "100%",
    height: "0.5px",
    marginTop: "128px",
    color: "transparent",
    position: "absolute",
    border: "1px solid rgba(48, 54, 61, 0.2)",
  },
  headRulerDark: {
    width: "100%",
    height: "1px",
    marginTop: "128px",
    color: "transparent",
    position: "absolute",
    border: "1px solid rgba(48, 54, 61, 0.5)",
  },
});

function Home({ darkState, toggleDarkMode }) {
  const styles = useStyles();
  const [tab, setTab] = useState(0);

  const tabs = [
    {
      title: "overview",
      icon: <IoBookOutline className={styles.tabTitleLogo} />,
    },
    {
      title: "projects",
      icon: <AiOutlineProject className={styles.tabTitleLogo} />,
    },
    {
      title: "timeline",
      icon: <MdTimeline className={styles.tabTitleLogo} />,
    },
  ];

  const handleChange = (event, newValue) => {
    setTab(newValue);
  };

  return (
    <div className="home">
      <Header darkState={darkState} toggleDarkMode={toggleDarkMode} />
      <hr className={darkState ? styles.headRulerDark : styles.headRuler} />
      <div className="home__body">
        <Sidebar darkState={darkState} />
        <div className="home__bodyTabs">
          <Tabs value={tab} onChange={handleChange} indicatorColor="secondary">
            {tabs.map((tab, index) => {
              return (
                <Tab
                  key={index}
                  disableRipple
                  className={`${!darkState ? styles.tabDark : styles.tab}`}
                  label={
                    <span className={styles.tabTitle}>
                      {tab.icon} {tab.title}
                    </span>
                  }
                />
              );
            })}
          </Tabs>
          {tab === 0 ? (
            <Overview darkState={darkState} />
          ) : tab === 1 ? (
            <Projects darkState={darkState} />
          ) : tab === 2 ? (
            <Timeline />
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
