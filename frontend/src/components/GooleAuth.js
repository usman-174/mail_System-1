import React from "react"
import { GoogleLogin } from "react-google-login"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router"
import { GoogleLogIn } from "../actions/auth"
import { useGoogleLogout } from "react-google-login"
const GoogleAuth = ({}) => {
  const router = useHistory()
  const dispatch = useDispatch()

  const { signOut } = useGoogleLogout({
    clientId:
      "897919728212-27u8rfoggnvqkh975k52ij2qs4j7mnke.apps.googleusercontent.com",
    onLogoutSuccess: () => {
      console.log("on google logout")
    },
    onFailure: () => console.log("FAiled"),
  })

  const GoogleSuccess = async ({ profileObj }) => {
    dispatch(
      GoogleLogIn(
        {
          id: profileObj.googleId,
          email: profileObj.email,
          name: profileObj.name,
        },
        router,
        signOut
      )
    )
  }

  const GoogleFailure = (e) => {
    alert("There was an error while processing. Please try again later.")
  }

  return (
    <>
      <GoogleLogin
        clientId="897919728212-27u8rfoggnvqkh975k52ij2qs4j7mnke.apps.googleusercontent.com"
        render={(renderProp) => {
          return (
            <button
              onClick={renderProp.onClick}
              className="my-1 p-2 text-white bg-danger"
            >
              G+    LOGIN WITH GOOGLE
            </button>
          )
        }}
        onSuccess={GoogleSuccess}
        onFailure={GoogleFailure}
        cookiePolicy="single_host_origin"
      />
    </>
  )
}
export default GoogleAuth
