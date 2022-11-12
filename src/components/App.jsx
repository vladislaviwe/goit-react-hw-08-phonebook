import { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { current } from 'redux/auth/auth-operations'
import { selectLoadingUserStatus } from 'redux/auth/auth-selectors'

import UserRoutes from 'UserRoutes'
import { Toaster } from 'react-hot-toast'

export default function App() {
  const dispatch = useDispatch();
  const isLoadingUser = useSelector(selectLoadingUserStatus);
  
  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  return (
    <>
      {!isLoadingUser &&
          <>
              <Toaster
                position="top-right"
                reverseOrder={false}
              />
              <UserRoutes />
          </>
      }
    </>
  )
}
