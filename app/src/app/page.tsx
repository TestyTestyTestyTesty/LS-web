"use client"
import { Components } from "@components"

import { FormEvent, useState } from "react"

export default function Home() {
	const [isAuthenticated, setIsAuthenticated] = useState(false)
	const [password, setPassword] = useState("")

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault()
		if (password === "ls-web") {
			setIsAuthenticated(true)
		} else {
			alert("Incorrect Password")
		}
	}
	return (
		<>
			{!isAuthenticated && (
				<form onSubmit={handleSubmit}>
					<div>
						<input
							type="password"
							placeholder="Enter Password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							style={{ padding: "10px", fontSize: "16px" }}
						/>
					</div>
					<button
						type="submit"
						style={{
							marginTop: "10px",
							padding: "10px 20px",
							fontSize: "16px",
							cursor: "pointer",
						}}
					>
						Submit
					</button>
				</form>
			)}
			{isAuthenticated && <Components />}
		</>
	)
}
