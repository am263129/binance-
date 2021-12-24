import React, { useState } from 'react'
import { VerifyInput } from '../../components/input'
import { Label, XLTitle } from '../../components/label'
import Layout from '../../layout/layout'

const VerifyPage = () => {
  const [emailCode, setEmailCode] = useState("")
  const [phoneCode, setPhoneCode] = useState("")
  return (
    <Layout
      title="Two-factor Authentication | Binance"
    >
      <div className='w-115 mx-auto flex'>
        <div className='w-49 hidden md:block'></div>
        <div>
          <div className='lg:w-96 w-82 pt-4 px-3'>
            <div className='flex flex-col'>
              <XLTitle>Confirm New Device Login</XLTitle>
              <Label className="mt-2 mb-10">To secure your account, please complete the following verification.</Label>
            </div>
            <div className='flex flex-col'>
              <VerifyInput value={emailCode} setValue={setEmailCode} title="E-mail verification code"/>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default VerifyPage