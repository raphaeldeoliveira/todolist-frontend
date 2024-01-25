import React from "react";

export default function Login() {


    return (
        <div className="login">
            <div className="left-page">
a
            </div>
            <div className="right-page">
                <form className="right-page">
                    <label>user: </label>
                    <input type="text" placeholder="username"/>
                    <label>password: </label>
                    <input type="text" placeholder="password"/>
                    <div>
                        <input type="checkbox" />
                        <label>Remember me?</label>
                    </div>
                    <button type="submit">Enter</button>
                </form>
            </div>
        </div>
    )
}