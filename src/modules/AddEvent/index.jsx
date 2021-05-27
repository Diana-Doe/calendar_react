import MenuItem from '@material-ui/core/MenuItem';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import FormGroup from "@material-ui/core/FormGroup";
import { useForm, Controller } from "react-hook-form";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import * as obj from '../../data/index.json';


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


const AddEvent = ({ open, handleClose }) => {
    const { control, handleSubmit, getValues, errors } = useForm();
    // const dispatch = useDispatch();

    const addHandler = () => {
        console.log("adding event");
        // const event_name = document.getElementById("event_name").value;
        // const start_time = document.getElementById("datetime-start").value;
        // const end_time = document.getElementById("datetime-end").value;
        // history.replace("/mycalendar");
        // obj.default.push({ "id": id,
        //     "email": props.email,
        //     "password":props.password,
        //     "name": "default",
        //     "surname": "default"})

        //   console.log("registered")
        //   console.log(obj)

        //   JSON.stringify()
    };

    const onSubmit = () => {
        if (!errors) {
            const values = getValues();
            // dispatch(addHandler());

            handleClose();
        }
    };

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="form-dialog-title"
        >
            <form onSubmit={handleSubmit(onSubmit)}>
                <DialogTitle id="form-dialog-title">EVENT CREATOR</DialogTitle>
                <DialogContent>
                    <DialogContentText>Add your event below</DialogContentText>
                    <FormGroup>
                        <Controller
                            name="event_name"
                            control={control}
                            render={({
                                field: { onChange, value },
                                fieldState: { error },
                            }) => (
                                <TextField
                                    label="Event Name"
                                    margin="dense"
                                    value={value}
                                    onChange={onChange}
                                    error={!!error}
                                    helperText={error ? error.message : null}
                                />
                            )}
                            rules={{ required: "Event Name required" }}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Controller
                            name="start_time"
                            control={control}
                            render={({
                                field: { onChange, value },
                                fieldState: { error },
                            }) => (
                                <TextField
                                    label="Start Time"
                                    margin="dense"
                                    type="datetime-local"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    value={value}
                                    onChange={onChange}
                                    error={!!error}
                                    helperText={error ? error.message : null}
                                />
                            )}
                            rules={{ required: "Start Time required" }}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Controller
                            name="end_time"
                            control={control}
                            render={({
                                field: { onChange, value },
                                fieldState: { error },
                            }) => (
                                <TextField
                                    label="End Time"
                                    margin="dense"
                                    type="time"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    value={value}
                                    onChange={onChange}
                                    error={!!error}
                                    helperText={error ? error.message : null}
                                />
                            )}
                            rules={{ required: "End Time required" }}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Controller
                            name="importance"
                            control={control}
                            render={({
                                field: { onChange, value },
                                fieldState: { error },
                            }) => (
                                <TextField
                                    select
                                    value={value}
                                    onChange={onChange}
                                    label="Event Importance"
                                    error={!!error}
                                    helperText={error ? error.message : null}
                                >
                                    {importances.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>

                            )}
                            rules={{ required: "Importance required" }}
                        />
                    </FormGroup>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
            </Button>
                    <Button type="submit" color="primary">
                        Create
            </Button>
                </DialogActions>
            </form>
        </Dialog>
    );
};

AddEvent.propTypes = {
    open: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
};

export default AddEvent;
