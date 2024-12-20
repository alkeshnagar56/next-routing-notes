import React from 'react'

const forgotpassword = () => {
  return (
    <>
    <div>forgot password</div>
    <p> auth folder contains authentications like login, signup, forgot password etc. but in url we have to delare it as a '/auth/login' or '/auth/signup' etc. to deal with this situation we wrap the name of the auth folder from 'auth' to '(auth)'. this informs next.js that auth folder should be treated as a rout group. and its name will be omited from the url or will be not used in the url. by this despite having the login, signup folders in the auth folder , we dont have a need to access them by using '/auth/login' or '/auth/signup' etc. instead of that we just use the regular url like '/login', '/signup' etc.</p>
    </>
  )
}

export default forgotpassword