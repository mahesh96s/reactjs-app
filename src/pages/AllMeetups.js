import { useEffect, useState } from "react";
import Todo from "../components/custom-components/Todo";
import MeetupList from "../components/meet-ups/MeetupList";

function AllMeetups() {
  const [isLoading, setIsLoading] = useState(false)
  const [meetup, setMeetup] = useState([]);
  useEffect(() => {
    setIsLoading(true)
    fetch(
      "https://my-react-project-f842a-default-rtdb.firebaseio.com/meetups.json"
    )
      .then((res) => res.json())
      .then((data) => {
        const meetupList = []
        Object.keys(data).forEach(key => {
          const meetup = {
            id: key,
            ...data[key]
          }
          meetupList.push(meetup)
        });
        setMeetup(meetupList)
        setIsLoading(false)
      });
  }, []);

  if (isLoading) {
    <div>
      Loading ....
    </div>
  }

  return (
    <div>
      <h1>Welcome to react meetup</h1>
      <Todo text="Title" />
      <MeetupList meetups={meetup} />
    </div>
  );
}

export default AllMeetups;
