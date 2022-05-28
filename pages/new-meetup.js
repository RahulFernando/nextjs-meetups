// components
import NewMeetupForm from '../components/meetups/NewMeetupForm';

const NewMeetup = () => {
    const addMeetUpHandler = (enteredData) => {
        console.log(enteredData);
    }

    return (
        <NewMeetupForm onAddMeetup={addMeetUpHandler} />
    );
};

export default NewMeetup;