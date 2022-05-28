// component
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "ReactJs meetup",
    image: "https://miro.medium.com/max/1400/1*GLDQpQCYMUs3DPa7-6F5fQ.png",
    address: "Some address 5, 12345 Some city",
    description: "This is a reactJs meetup",
  },
  {
    id: "m2",
    title: "Angular meetup",
    image:
      "https://external-preview.redd.it/d8eDl7hdWRy7mhZr-VEs2IgzDWf_uZZTxABNTk77Fn4.jpg?auto=webp&s=3bc38eb5fad8bd3213213d35e031511eba04e7d7",
    address: "Some address 1, 00345 Some city",
    description: "This is a Angular meetup",
  },
];

const HomePage = () => {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
};

export default HomePage;
