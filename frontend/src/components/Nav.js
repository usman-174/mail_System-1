import React, { useEffect } from "react"
import { Link, useHistory } from "react-router-dom"
import { useDispatch,useSelector } from "react-redux"
import { me ,logout} from "../actions/auth"

import {
  BsPencil,
  HiOutlineMail,
  FaMeetup,
  SiPivotaltracker,
  RiDashboardLine,
} from "react-icons/all"

export default function Navs() {
  const authData = useSelector(state=>state.auth.authData)
  const history = useHistory()
  const dispatch = useDispatch()

  const Logout = () => {
    dispatch(logout(history))
  }
  useEffect(() => {
    dispatch(me())
  }, [])

  return (
    <div>
      <div id="viewport">
        <div id="sidebar">
          <header>
            <Link to="/" style={{ color: "white" }}>
              Paperless Campus
            </Link>
          </header>
          <ul className="nav">
            <Link to="./dashboard">
              <li className="sidebar-items">
                <RiDashboardLine />
                &nbsp;&nbsp;&nbsp;Dashboard
              </li>
            </Link>
            <Link to="./compose">
              <li className="sidebar-items">
                <BsPencil />
                &nbsp;&nbsp;&nbsp;Compose
              </li>
            </Link>
            <Link to="./inbox">
              <li className="sidebar-items">
                <HiOutlineMail />
                &nbsp;&nbsp;&nbsp;Inbox
              </li>
            </Link>
            <Link to="./meetings">
              <li className="sidebar-items">
                <FaMeetup />
                &nbsp;&nbsp;&nbsp;Meetings
              </li>
            </Link>
            <Link to="./tracker">
              <li className="sidebar-items">
                <SiPivotaltracker />
                &nbsp;&nbsp;&nbsp;Tracker
              </li>
            </Link>
            <footer>
              {authData?.user ? (
                <Link to="./login" onClick={Logout}>
                  Logout
                </Link>
              ) : (
                <Link to="./login">Login or Register</Link>
              )}
            </footer>
          </ul>
        </div>
      </div>
    </div>
  )
}
