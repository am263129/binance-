import React, { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { StandardButton } from '../../components/button'
import { VerifyInput } from '../../components/input'
import { Label, XLTitle } from '../../components/label'
import Notification from '../../components/notification';
import Layout from '../../layout/layout'
const VerifyPage = () => {
  const email = "vam***@veb65.com"
  const phone = "777***1416"
  const [emailCode, setEmailCode] = useState("")
  const [phoneCode, setPhoneCode] = useState("")
  const [valid, setValid] = useState(false)
  useEffect(() => {
    setValid(emailCode.length === 6 && phoneCode.length === 6)
  }, [emailCode, phoneCode])

  const handleSendEmail = () =>{
    toast.custom(<Notification>Email verification code sent successfully.</Notification>);
  }
  const handleSendPhone = () => {
    toast.custom(<Notification>Mobile phone verification code send successfully.</Notification>);
  }
  return (
    <Layout
      title="Two-factor Authentication | Binance"
    >
      <Toaster position="top-right"/>
      <div className='max-w-115 mx-auto flex'>
        <div className='w-49 hidden lg:block flex-shrink-0'></div>
        <div className='w-full lg:justify-start justify-center flex '>
          <div className='lg:w-96 md:w-82 w-full pt-4 px-3'>
            <div className='flex flex-col'>
              <XLTitle>Confirm New Device Login</XLTitle>
              <Label className="mt-2 mb-10">To secure your account, please complete the following verification.</Label>
            </div>
            <div className='flex flex-col'>
              <VerifyInput value={emailCode} setValue={setEmailCode} title="E-mail verification code" target={email} send={handleSendEmail}/>
              <VerifyInput value={phoneCode} setValue={setPhoneCode} title="Phone verification code" target={phone} send={handleSendPhone}/>
            </div>
            <div className='mb-10'>
              <a className='text-app-yellow-dark text-sm' href='https://accounts.binance.com/en/security-reset'>Security verification unavailable?</a>
            </div>
            <StandardButton disabled={!valid} className="w-full font-medium text-sm ">Submit</StandardButton>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default VerifyPage