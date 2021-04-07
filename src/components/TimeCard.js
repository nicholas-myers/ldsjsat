import React from "react";

function TimeCard({ today }) {
  const week = {
    Sat: "",
    Mon: "",
    Tue: "",
    Wed: "",
    Thu: "",
    Fri: "",
  };
  const weekValues = {
    Sat: 1,
    Mon: 3,
    Tue: 4,
    Wed: 5,
    Thu: 6,
    Fri: 7,
  };

  const activeDay = {
    backgroundColor: 'skyblue',
  }

  const todayString = today.toDateString();
  const todayList = todayString.split(" ");
  const todaysDay = todayList[0];
  const todaysValue = weekValues[todaysDay];

  Object.keys(week).map((weekday) => {
    let date = new Date();
    if (weekValues[weekday] < todaysValue) {
      date.setDate(date.getDate() - (todaysValue - weekValues[weekday]));
    } else if (weekValues[weekday] > todaysValue) {
      date.setDate(date.getDate() + (weekValues[weekday] - todaysValue));
    }
    let dateString = date.toDateString();
    let dateList = dateString.split(" ");
    dateList.shift();
    dateList.splice(2, 0, ",");
    week[weekday] = dateList.join(" ");
  });

  return (
    <section>
      <p>
        * Please only include work hours - do not include the daily schedule or
        lunch breaks.
      </p>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {Object.keys(week).map((weekday) => {
          return (
            <div className="week-day" style={weekday === todaysDay ? activeDay : null}>
              <h2>{weekday}</h2>
              <p>{week[weekday]}</p>
              <input type="number" min="0" max="7" />
            </div>
          );
        })}
      </div>
      <h2>Total Hours</h2>
      <h2>Electronic Signature</h2>
      <div>
        <label>
          Associate Name: <input />
        </label>
        <label>
          Date: <input />
        </label>
      </div>
      <div>
        <label>
          Job Developer: <input />
        </label>
        <label>
          Date: <input />
        </label>
      </div>
      <div>
        <h2>Instructions: </h2>
        <p>
          To be completed and signed/dated by the associate, then approved by
          the Job Developer. The Job Developer may delegate supervision of this
          timesheet to an ERC Missionary, but it must be checked and signed by
          the Job Developer.
        </p>
      </div>
    </section>
  );
}

export default TimeCard;
