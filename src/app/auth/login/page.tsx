/* eslint-disable @next/next/no-img-element */

export default function LoginPage() {
  return (
    <div className="pt-24 flex justify-center">
      <div className="w-[360px] gap-8 flex flex-col h-fit">

        <div className="flex flex-col gap-8">

          <div className="flex flex-col gap-6">
            <img src="/logos/Logomark.svg" alt="" className="mx-auto" />
            <div className="flex flex-col text-center">
              <p className="text-white font-medium text-large">Create an account</p>
            </div>
          </div>

          <div className="flex flex-col gap-6">

            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-6">
                <div className="flex gap-8">
                  <div className="px-[14px] py-[10px] w-full bg-custom_black_2 rounded-3xl flex gap-2">
                    <input type="text" className="bg-transparent outline-none text-white hover:outline-none w-full" placeholder="First Name"/>
                  </div>
                  <div className="px-[14px] py-[10px] w-full bg-custom_black_2 rounded-3xl flex gap-2">
                    <input type="text" className="bg-transparent outline-none text-white hover:outline-none w-full" placeholder="Last Name"/>
                  </div>
                </div>
                <div></div>
                <div></div>
                <div className="flex gap-2">
                  <img src="/icons/Checkbox.svg" alt="" className="cursor-pointer"/>
                  <p className="text-white font-normal text-medium">I agree to the terms & conditions</p>
                </div>
              </div>
              <div className="bg-custom_purple_1 rounded-3xl py-[10px] text-center cursor-pointer">
                <p className="text-white font-medium text-medium">Get started</p>
              </div>
            </div>

            <div className="flex gap-2 items-center">
              <hr className="border-gray-500 flex-grow"></hr>
              <span className="mx-4 text-white text-small font-normal">OR</span>  
              <hr className="border-gray-500 flex-grow"></hr>
            </div>

            <div className="bg-custom_black_1 rounded-3xl py-[10px] flex justify-center gap-3 cursor-pointer">
              <img src="/icons/Social icon.svg" alt="" />
              <p className="text-white font-medium text-medium">Sign up with Google</p>
            </div>

          </div>

          <div className="flex gap-1 justify-center">
            <p className="text-white font-medium text-medium">Already have an account?</p>
            <p className="text-custom_purple_1 font-medium text-medium cursor-pointer">Log in</p>
          </div>

        </div>

      </div>
    </div>
  );
}
