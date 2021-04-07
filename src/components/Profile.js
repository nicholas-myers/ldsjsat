import React from "react";
import { Route, NavLink } from "react-router-dom";
import DailyActivityTracker from "./DailyActivityTracker";
import TimeCard from "./TimeCard";

function Profile() {
  const today = new Date();
  
  return (
    <section>
      <h2>Welcome Name goes here.</h2>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <NavLink to="/profile/activity-tracker">
          <button>Daily Activity Tracker</button>
        </NavLink>
        <NavLink to="/profile/time-card">
          <button>Time Card</button>
        </NavLink>
      </div>
      <div>
        <Route path="/profile/activity-tracker">
          <h2>{today.toDateString()}</h2>
          <DailyActivityTracker />
        </Route>
        <Route path="/profile/time-card">
          <TimeCard today={today} />
        </Route>
      </div>
    </section>
  );
}

export default Profile;
