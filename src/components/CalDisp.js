import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { TextField, Grid, Box, Typography, Button, AppBar, Toolbar } from '@mui/material'
import { makeStyles } from '@material-ui/core/styles';
import img from '../images/Logo-Peach.png';

const locales = {
    "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});

const useStyles = makeStyles({
    logo: {
      maxWidth: 50,
      marginRight : 5,
    },
  });

const events = [
    {
        title: "Meeting",
        allDay: true,
        start: new Date(2022, 0, 1),
        end: new Date(2022, 0, 1),
    },
    {
        title: "Republic Day",
        allDay: true,
        start: new Date(2022, 0, 26),
        end: new Date(2022, 0, 26),
    },
    {
        title: "Christmas",
        allDay: true,
        start: new Date(2022, 0, 25),
        end: new Date(2022, 0, 25),
    },
    {
        title: "Diwali",
        allDay: true,
        start: new Date(2022, 0, 30),
        end: new Date(2022, 0, 30),
    },

];
const CalDisp = () => {
    const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "", });
    const [allEvents, setAllEvents] = useState(events);
    const classes = useStyles()

    function handleAddEvent() {
        setAllEvents([...allEvents, newEvent]);
    }
    return (

        <Box>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" style={{ background: '#252422', margin: '' }}>
                    <Toolbar >
                    <img src={img} alt="logo" className={classes.logo}/>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            PEACH
                        </Typography>
                        <Button color="success">Send Daily SMS</Button>
                        <Button color="inherit">Logout</Button>
                    </Toolbar>
                </AppBar>
            </Box>
            <h1>Calendar</h1>
            <h2>Add New Event</h2>
            <div >

                <TextField
                    margin="normal"
                    required
                    id="name"
                    label="Name"
                    name="name"
                    value={newEvent.title}
                    autoComplete=""
                    onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}

                />
                <DatePicker placeholderText="Start Date" style={{ marginRight: "10px", padding: "20em" }} selected={newEvent.start} onChange={(start) => setNewEvent({ ...newEvent, start })} />
                <DatePicker placeholderText="End Date" selected={newEvent.end} onChange={(end) => setNewEvent({ ...newEvent, end })} />
                <Box sx={{
                    justifyContent: "flex-start",
                    display: "",
                }}>
                    <Button style={{ marginTop: "10px" }} color='warning' variant='outlined' onClick={handleAddEvent}>Add</Button>

                </Box>

            </div>
            <Calendar localizer={localizer} events={allEvents} startAccessor="start" endAccessor="end" style={{ height: 500, margin: "50px" }} />
        </Box>
    )
        ;
};

export default CalDisp;
