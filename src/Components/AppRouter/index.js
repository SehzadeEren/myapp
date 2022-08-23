import React from "react"
import { Routes, Route } from "react-router-dom"
import Contact from "../Contact"
import AppTable from "../../Pages/Table"

function AppRouter() {

    return (

        <Routes>
            <Route path="/" element={<Contact />} />
            <Route path="/Table" element={<AppTable />} />
        </Routes>

    )
}

export default AppRouter