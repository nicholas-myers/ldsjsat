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

  const changeResource = (e, i) => {
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

  const changeFace2Face = (e, i) => {
    meetings[i] = {
      ...meetings[i],
      [e.target.name]: e.target.value,
    };
    setMeetings([...meetings]);
  };

  return (
    <section className="dat" style={{display: "flex"}}>
      <div>
        <div className="instructions">
          <h2>Daily Goals</h2>
          <p>15 Resources</p>
          <p>10 Contacts</p>
          <p>2 Face-to-Face Meetings</p>
        </div>
        <div className="instructions" style={{display: "flex", flexDirection: "column", justifyContent: "flex-start", textAlign: "left"}}>
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
        </div>
      </div>
      <div>
        <h2>Resources</h2>
        <button onClick={addResource}>New Resource</button>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {resources.map((resource, index) => {
            return (
              <div >
                <label>
                  {index + 1} <input value={resource.resource_description} onChange={(e, i) => changeResource(e, index)}/>
                </label>
              </div>
            );
          })}
        </div>
        <h2>Contacts</h2>
        <button onClick={addContact}>New Contact</button>
        <div>
          {contacts.map((contact, index) => {
            return (
              <div style={{ display: "flex", alignItems: "center", flexFlow: "row wrap" }}>
                <h3>{index + 1}</h3>
                <div style={{display: "flex", justifyContent: "flex-start", flexFlow: "row wrap"}}>
                  <label>
                    Contact Name <input name="contact_name" value={contact.contact_name} onChange={(e) => {changeContact(e, index)}} />
                  </label>
                  <label>
                    Organization <input name="organization" value={contact.organization} onChange={(e) => {changeContact(e, index)}} />
                  </label>
                  <label>
                    Email <input name="email" value={contact.email} onChange={(e) => {changeContact(e, index)}} />
                  </label>
                  <label>
                    Phone <input name="phone" value={contact.phone} onChange={(e) => {changeContact(e, index)}} />
                  </label>
                  <label>
                    Comments <input name="comments" value={contact.comments} onChange={(e) => {changeContact(e, index)}} />
                  </label>
                  <label>
                    Contact Type <input name="contact_type" value={contact.contact_type} onChange={(e) => {changeContact(e, index)}} />
                  </label>
                  <label>
                    Follow-up <input name="followup_date" value={contact.followup_date} onChange={(e) => {changeContact(e, index)}} />
                  </label>
                </div>
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
                justifyContent: "flex-start",
              }}
            >
              <h3>{index + 1}</h3>
              <div style={{display: "flex", justifyContent: "flex-start", flexFlow: "row wrap"}}>
                <label>
                  Contact Name <input name="contact_name" value={meeting.contact_name} onChange={(e) => {changeFace2Face(e, index)}} />
                </label>
                <label>
                  Organization <input name="organization" value={meeting.organization} onChange={(e) => {changeFace2Face(e, index)}} />
                </label>
                <label>
                  Email <input name="email" value={meeting.email} onChange={(e) => {changeFace2Face(e, index)}} />
                </label>
                <label>
                  Phone Number <input name="phone" value={meeting.phone} onChange={(e) => {changeFace2Face(e, index)}} />
                </label>
                <label>
                  Comments <input name="comments" value={meeting.comments} onChange={(e) => {changeFace2Face(e, index)}} />
                </label>
                <label>
                  Meeting Type <input name="meeting_type" value={meeting.meeting_type} onChange={(e) => {changeFace2Face(e, index)}} />
                </label>
                <label>
                  Follow-up <input name="followup_date" value={meeting.followup_date} onChange={(e) => {changeFace2Face(e, index)}} />
                </label>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default DailyActivityTracker;
