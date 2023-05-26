import { Suspense, useEffect, useState, lazy } from "react";
import MeetupList from "../components/meet-ups/MeetupList";

const Todo = lazy(() => import("../components/custom-components/Todo"));

function AllMeetups() {
  const [isLoading, setIsLoading] = useState(false);
  const [meetup, setMeetup] = useState([]);
  const [showTodo, setShowTodo] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://my-react-project-f842a-default-rtdb.firebaseio.com/meetups.json"
    )
      .then((res) => res.json())
      .then((data) => {
        const meetupList = [];
        Object.keys(data).forEach((key) => {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetupList.push(meetup);
        });
        setMeetup(meetupList);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    <div>Loading ....</div>;
  }

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={showTodo}
          onChange={(e) => setShowTodo(e.target.checked)}
        />
        Show Todo components
      </label>
      <Suspense fallback={<div>Loading ....</div>}>
        <h1>Welcome to react meetup</h1>
        {showTodo ? <Todo text="Title" /> : null}
      </Suspense>
      <MeetupList meetups={meetup} />
    </div>
  );
}

export default AllMeetups;
