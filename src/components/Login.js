import React from "react"

const member = {
    memberid: "",
    username: "",
    password: "",
    daily_activity_forms: [],
}

const daily_activity_form = {
    daily_activity_form_id: "",
    resources: [],
    contacts: [],
    face2faces: []
}

function Login() {
    return (
        <div>
            <label>Username: <input /></label>
            <label>Password: <input /></label>
        </div>
    )
}