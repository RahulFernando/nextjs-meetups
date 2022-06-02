import { MongoClient, ObjectId } from "mongodb";

// components
import MeetupDetail from "../components/meetups/MeetupDetail";

const MeetUp = (props) => {
  return (
    <MeetupDetail
      image={props.meetup.image}
      title={props.meetup.title}
      address={props.meetup.address}
      description={props.meetup.description}
    />
  );
};

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb://localhost:27017/meetup_db",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
  const db = client.db();

  const meetupCollection = db.collection("meetups");

  const meetups = await meetupCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: false,
    paths: meetups.map((meetup) => ({ params: { id: meetup._id.toString() } })),
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.id;

  const client = await MongoClient.connect(
    "mongodb://localhost:27017/meetup_db",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
  const db = client.db();

  const meetupCollection = db.collection("meetups");

  const selected = await meetupCollection.findOne({ _id: ObjectId(meetupId) });

  client.close();

  return {
    props: {
      meetup: {
        id: selected._id.toString(),
        title: selected.title,
        description: selected.description,
        image: selected.image,
        address: selected.address,
      },
    },
  };
}

export default MeetUp;
