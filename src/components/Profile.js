import React from "react"
import DailyActivityTracker from "./DailyActivityTracker"

function Profile() {

    const today = new Date()
    
    return (
        <section style={{display: "flex"}}>
            <div>
                <h2>{today.toDateString()}</h2>
                <DailyActivityTracker />
            </div>
            <div>
                <h2>Name</h2>
                <p>Member Name goes Here</p>
                <h2>Email</h2>
                <p>Member Email goes here</p>
                <h2>Phone</h2>
                <button>Daily Activity History</button>
                <button>Time Card</button>
            </div>
            
        </section>
    )
}

export default Profile