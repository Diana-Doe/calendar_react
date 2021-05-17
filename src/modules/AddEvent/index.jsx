import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { useHistory } from "react-router-dom";
import { createMuiTheme } from "@material-ui/core/styles"
import { ThemeProvider } from "@material-ui/styles";
import yellow from "@material-ui/core/colors/yellow"
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
}));


const theme = createMuiTheme({ palette: { primary: yellow } })

const importances = [
    {
        value: 'Low',
        label: 'low',
    },
    {
        value: 'Medium',
        label: 'medium',
    },
    {
        value: 'High',
        label: 'high',
    },
];

const AddEvent = () => {
    const history = useHistory();
    const classes = useStyles();

    const addHandler = () => {
        const event_name = document.getElementById("event_name").value;
        const start_time = document.getElementById("datetime-start").value;
        const end_time = document.getElementById("datetime-end").value;
        history.replace("/mycalendar");
    };

    return (
        <form>
            <span>ADD YOUR EVENT</span>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                id="event_name"
                                fullWidth
                                label="Event Name"
                                name="name"
                                size="small"
                                variant="outlined"
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="datetime-start"
                                label="Start Time"
                                type="datetime-local"
                                required
                                className={classes.textField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <TextField
                                id="datetime-end"
                                label="End Time"
                                type="time"
                                required
                                className={classes.textField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <TextField
                                id="select"
                                select
                                label="Event Importance"
                                required
                                helperText="Please select importance of your event"
                            >
                                {importances.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <ThemeProvider theme={theme}>
                        <Button
                            color="primary"
                            fullWidth
                            type="submit"
                            variant="contained"
                            onClick={addHandler}
                        >
                            ADD EVENT
            </Button>
                    </ThemeProvider>
                </Grid>
            </Grid>
        </form>
    );
};

export default AddEvent;
