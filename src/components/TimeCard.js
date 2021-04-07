import React, {useState, useEffect} from "react";

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
  const [totalHours, setTotalHours] = useState(0)

  
  const [hours, setHours] = useState([0, 0, 0, 0, 0, 0])
  useEffect(() => {
    let count = 0
    hours.map(day => {
      count += Number(day)
    })
    setTotalHours(count)
  }, [hours])
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
  const changeHours = (e, index) => {
    hours[index] = e.target.value
    setHours([...hours])
  }
  return (
    <section>
      <p>
        * Please only include work hours - do not include the daily schedule or
        lunch breaks.
      </p>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {Object.keys(week).map((weekday, i) => {
          return (
            <div className="week-day" style={weekday === todaysDay ? activeDay : null}>
              <h2>{weekday}</h2>
              <p>{week[weekday]}</p>
              <input onChange={(e) => changeHours(e, i)} type="number" min="0" max="7" value={hours[i]}/>
            </div>
          );
        })}
        <div className="week-day">
          <h2>Total Hours</h2>
          <p>{totalHours}</p>
        </div>
      </div>
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
