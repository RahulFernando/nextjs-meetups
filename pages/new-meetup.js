import { useRouter } from 'next/router';
// components
import NewMeetupForm from "../components/meetups/NewMeetupForm";

const NewMeetup = () => {
    const router = useRouter();

  const addMeetUpHandler = async (enteredData) => {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredData),
      headers: {
          'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    if(data) {
        router.push('/');
    }
  };

  return <NewMeetupForm onAddMeetup={addMeetUpHandler} />;
};

export default NewMeetup;
