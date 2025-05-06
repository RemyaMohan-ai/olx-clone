'use client'

import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'




import guitar from "../assets/guitar.webp";
import glogo from "../assets/glogo.png";
import phone from "../assets/phone.jpg";


import { signinWithGoogle} from "../firebase/setup";
type LoginpopProps ={
  setPop : React.Dispatch<React.SetStateAction<boolean>>,
  setUser :React.Dispatch<React.SetStateAction<any>>,
}


export default function Loginpop({setPop,setUser}:LoginpopProps) {
  const [open, setOpen] = useState(true)
  const handleGoogleSignIn = async () => {
    const user = await signinWithGoogle();
    if (user) {
      setUser(user);
      setPop(false); 
    }
  };
  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-zinc-500 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto h-screen">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
          >
             <h1 onClick={()=>setPop(false)} className='font-thin text-3xl absolute right-3 top-3 '>X</h1>


            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">

              <div className="sm:flex sm:items-start mt-6">
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                
                  <img src={guitar} alt=""  className='w-20 h-30 m-auto'/>
                  <div className="mt-2">
                    <p className="text-base font-light text-center mb-4">
                      Help us to become one of the safest places to <br /> buy and sell.
                    </p>
                  </div>
                  <div className='flex flex-col pt-3 mb-28'>
                    <button className='w-full h-12 p-2 flex border-2 mt-4 hover:border-4  cursor-pointer'>
                      
                      <img src={phone} alt="" className='w-10 h-8'/>
                      <p className='p-1 font-semibold text-sm'>Continue with Phone </p>
                     
                    </button>
                    <button onClick={handleGoogleSignIn} className='w-full h-12 p-2 flex border border-gray-400 mt-4 '>
                      <img src={glogo} alt="" className='w-9 h-8'/>
                      <p className='p-2 m-auto text-sm'>Continue with Google </p>
                    </button>
                     <h1 className='text-center text-lg m-3'>OR</h1>
                    <p className='text-center underline cursor-pointer font-semibold text-sm'>Login with Email</p>
                    <div className='text-xs mt-28 text-center text-gray-500'>
                      <p>All your personal details are safe with us.</p>
                      <p>If you continue, you are accepting <span className='text-blue-500'> OLX Terms and Conditions and Privacy Policy </span> </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}
