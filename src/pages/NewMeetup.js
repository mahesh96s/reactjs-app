import { useState} from 'react'
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import MeetupErrorFallback from "../components/meet-ups/MeetupErrorFallback";
import NewMeetupForm from "../components/meet-ups/NewMeetupForm";
import {ErrorBoundary} from 'react-error-boundary'

function NewMeetup() {
  const history = useHistory()
  const [resetFlag, setResetFlag] = useState(1)

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
      setResetFlag(1);
      history.replace('/')
    }).catch((error) => {
      throw error
    });
  }

  function handleReset () {
    setResetFlag(0);
  }

  return (
    <div>
      <ErrorBoundary key={resetFlag} FallbackComponent={MeetupErrorFallback} onReset={handleReset}>
        <NewMeetupForm onAddMeetup={addMeetup} />
      </ErrorBoundary>
    </div>
  );
}

export default NewMeetup;
