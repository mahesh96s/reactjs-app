import classes from "./NewMeetupForm.module.css";
import Card from "../ui/Card";
import { useRef } from "react";
import ToggleButton from "../custom-components/ToggleButton";
import { useState } from "react";

function NewMeetupForm(props) {
  const titleRef = useRef();
  const imageUrlRef = useRef();
  const addressRef = useRef();
  const descriptionRef = useRef();
  const [checked, setChecked] = useState(false)

  function onChange(newValue) {
    setChecked(newValue);
  }


  function handleSubmit(event) {
    event.preventDefault();
    const meetup = {
        title: titleRef.current.value,
        imageUrl: imageUrlRef.current.value,
        address: addressRef.current.value,
        description:descriptionRef.current.value,
        active: checked
    }
    props.onAddMeetup(meetup)
  }

  return (
    <Card>
      <h2>Add New Meetup</h2>
      <form className={classes.form} onSubmit={handleSubmit}>
        <div className={classes.control}>
          <label htmlFor="title">MeetUp Title</label>
          <input type="text" id="title" required ref={titleRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="imageUrl">Image URL</label>
          <input type="url" id="imageUrl" ref={imageUrlRef} required />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input type="text" id="address" ref={addressRef} required />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea id="description" row="5" ref={descriptionRef} required></textarea>
        </div>
        <ToggleButton id="toggleSwitch" name="Active Meetup" optionLabels={['Active', 'Inactive']} checked={checked} onChange={onChange} />
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
