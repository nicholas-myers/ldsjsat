import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function DailyActivityTracker() {
  const [resources, setResources] = useState([]);
  const resource = { resource_description: "" };

  const addResource = () => {
    if (resources.length < 15) {
      resources.push(resource);
      return setResources([...resources]);
    }
  };

  const changeResource = (i, e) => {
    resources[i].resource_description = e.target.value;
    setResources([...resources]);
  };

  const [contacts, setContacts] = useState([]);
  const contact = {
    contact_name: "",
    organization: "",
    email: "",
    phone: "",
    comments: "",
    contact_type: "",
    followup_date: "",
  };
  const addContact = () => {
    if (contacts.length < 10) {
      contacts.push(contact);
      console.log(contacts);
      return setContacts([...contacts]);
    }
  };

  const [contactStart, setContactStart] = useState(new Date());

  const changeContact = (e, i) => {
    contacts[i] = {
      ...contacts[i],
      [e.target.name]: e.target.value,
    };
    console.log(contacts[i]);
    setContacts([...contacts]);
  };

  const [meetings, setMeetings] = useState([]);
  const face2face = {
    contact_name: "",
    organization: "",
    email: "",
    phone: "",
    comments: "",
    meeting_type: "",
    followup_date: "",
  };

  const addMeeting = () => {
    if (meetings.length < 3) {
      meetings.push(face2face);
      setMeetings([...meetings]);
    }
  };

  return (
    <section className="activity-tracker">
      <h2>Daily Goals</h2>
      <p>15 Resources</p>
      <p>10 Contacts</p>
      <p>2 Face-to-Face Meetings</p>
      <h2>Instructions</h2>
      <p>Contact Name: Record the contact's name.</p>
      <p>Organization: Record the company name or organization.</p>
      <p>
        Email or Phone Number: Record the contact's email address, phone number
        and website.
      </p>
      <p>
        Comments: Record results of the conversation. Record any follow-up items
        you'll do, and put a follow up date in the last column.
      </p>
      <p>
        Kind of Contact: Identify the type of contact (application, resume,
        thank-you note, employer call, network call).
      </p>
      <p>
        Kind of Meeting: Identify the type of interview (informational or job).
      </p>
      <p>
        Follow-up date: record the date that you will call the contact. Record
        what the follow-up will be in the "Comments" field.
      </p>
      <h2>Resources</h2>
      <button onClick={addResource}>New Resource</button>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {resources.map((resource, index) => {
          return (
            <label>
              {index + 1}{" "}
              <input
                value={resource.resource_description}
                onChange={(e) => changeResource(index, e)}
              />
            </label>
          );
        })}
      </div>

      <h2>Contacts</h2>
      <button onClick={addContact}>New Contact</button>
      <div>
        {contacts.map((contact, index) => {
          return (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexFlow: "row wrap",
                justifyContent: "center",
              }}
            >
              <h3>{index + 1}</h3>
              <label name="contact_name">
                Contact Name{" "}
                <input
                  name="contact_name"
                  value={contact.contact_name}
                  onChange={(e) => changeContact(e, index)}
                />
              </label>
              <label name="organization">
                Organization{" "}
                <input
                  name="organization"
                  value={contact.organization}
                  onChange={(e) => changeContact(e, index)}
                />
              </label>
              <label name="email">
                Email{" "}
                <input
                  name="email"
                  value={contact.email}
                  onChange={(e) => changeContact(e, index)}
                />
              </label>
              <label name="phone">
                Phone{" "}
                <input
                  name="phone"
                  value={contact.phone}
                  onChange={(e) => changeContact(e, index)}
                />
              </label>
              <label name="comments">
                Comments{" "}
                <input
                  name="comments"
                  value={contact.comments}
                  onChange={(e) => changeContact(e, index)}
                />
              </label>
              <label name="contact_type">
                Contact Type{" "}
                <input
                  name="contact_type"
                  value={contact.contact_type}
                  onChange={(e) => changeContact(e, index)}
                />
              </label>
              <label name="followup_date">
                Follow-up{" "}
                <DatePicker
                  name="followup_date"
                  selected={contactStart}
                  onChange={(date) => {
                    setContactStart(date);
                    contacts[index].followup_date = date
                    setContacts([...contacts])
                    console.log(contacts[index])
                  }}
                />
              </label>
            </div>
          );
        })}
      </div>
      <h2> Face-to-Face Meetings</h2>
      <button onClick={addMeeting}>New Face-to-Face</button>
      {meetings.map((meeting, index) => {
        return (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexFlow: "row wrap",
            }}
          >
            <h3>{index + 1}</h3>
            <label>
              Contact Name <input value={meeting.contact_name} />
            </label>
            <label>
              Organization <input value={meeting.organization} />
            </label>
            <label>
              Email <input value={meeting.email} />
            </label>
            <label>
              Phone Number <input value={meeting.phone} />
            </label>
            <label>
              Comments <input value={meeting.comments} />
            </label>
            <label>
              Meeting Type <input value={meeting.meeting_type} />
            </label>
            <label>
              Follow-up <input value={meeting.followup_date} />
            </label>
          </div>
        );
      })}
    </section>
  );
}

export default DailyActivityTracker;
