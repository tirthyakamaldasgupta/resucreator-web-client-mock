import React from "react";
import axios from "axios";
import {setCookie} from "cookies-next";

export default function LoginForm() {
    async function submitLoginForm(event: React.FormEvent<HTMLFormElement>) {
        const formElement = event.target as HTMLFormElement

        event.preventDefault()

        const email = (formElement.elements as any).emailInput.value
        const password = (formElement.elements as any).passwordInput.value

        const configuration = {
            headers: {
                "Content-Type": "application/json"
            }
        }

        const loginData = {
            email: email,
            password: password
        }

        const apiResponse = await axios.post("http://localhost:3000/login", loginData, configuration)

        console.log(apiResponse)

        if (apiResponse.status === 200) {
            const accessToken = apiResponse.data.accessToken
            const userID = apiResponse.data.user.id

            setCookie("token", accessToken, {
                maxAge: 3600,
                sameSite: "strict"
            });

            setCookie("userID", accessToken, {
                maxAge: 3600,
                sameSite: "strict"
            });

            window.location.href = "/"
        }
    }

    return (
        <form onSubmit={submitLoginForm}>
            <div className="mb-3">
                <label htmlFor="emailInput" className="form-label">Email</label>
                <input type="email" className="form-control" id="emailInput" />
            </div>
            <div className="mb-3">
                <label htmlFor="passwordInput" className="form-label">Password</label>
                <input type="password" className="form-control" id="passwordInput" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
}