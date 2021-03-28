import * as React from "react";
import Paper from "@material-ui/core/Paper";
import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  DayView,
  Appointments,
  MonthView
} from "@devexpress/dx-react-scheduler-material-ui";
import styles from './Calendar.module.css'



const schedulerData = [
  {
    startDate: "2018-11-01T09:45",
    endDate: "2018-11-01T11:00",
    title: "Meeting",
  },
  {
    startDate: "2018-11-01T12:00",
    endDate: "2018-11-01T13:30",
    title: "Go to a gym",
  },
];

const currentDate = new Date();

function Calendars(props) {

  return (
    <div className={styles.Container}>
    <div className = {styles.fakebody}>
    <h1>Calendar</h1>
    <Paper className = {styles.calendar}>
    <Scheduler
      data={schedulerData}
    >
      <ViewState
        currentDate={currentDate}
      />
      <MonthView />
      <Appointments />
    </Scheduler>
  </Paper>
  </div>

  </div>
  );
}

export default Calendars;
