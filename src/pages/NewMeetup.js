import NewMeetupForm from "../components/meet-ups/NewMeetupForm";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

function NewMeetup() {
  const history = useHistory()

  function addMeetup(meetup) {
    fetch(
      "https://my-react-project-f842a-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetup),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      history.replace('/')
    });
  }

  return (
    <div>
      <NewMeetupForm onAddMeetup={addMeetup} />
    </div>
  );
}

export default NewMeetup;
