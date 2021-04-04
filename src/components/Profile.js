import React from "react"
import DailyActivityTracker from "./DailyActivityTracker"

function Profile() {

    const today = new Date()
    
    return (
        <section className="profile">
            <div>
                <div className="member-info">
                    <p>Member Name</p>
                    <p>Email</p>
                    <p>Phone</p>
                    <button>Edit</button>
                </div>
                <div className="member-info">
                    <button>Daily Activity History</button>
                    <button>Time Card</button>
                </div>
            </div>
            <div>
                <h2>{today.toDateString()}</h2>
                <DailyActivityTracker />
            </div>
        </section>
    )
}

export default Profile