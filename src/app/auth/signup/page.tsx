/* eslint-disable @next/next/no-img-element */

export default function SigninPage() {
  return (
    <div className="pt-24 flex justify-center">
      <div className="w-[360px] gap-8 flex flex-col h-fit">
        <img src="/logos/Logomark.svg" alt="" className="mx-auto" />

        <div className="flex flex-col text-center gap-3">
          <p className="text-white font-medium text-large">Log in to your account</p>
          <p className="text-custom_white_1">Welcome back! Please enter your details</p>
        </div>

        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-[6px]">
            <p className="font-medium text-white text-medium">Email</p>
            <div className="px-[14px] py-[10px] w-full bg-custom_black_2 rounded-3xl flex gap-2">
              <img src="/icons/mail.svg" alt="" className="" />
              <input type="text" className="bg-transparent outline-none text-white hover:outline-none w-full" placeholder="Enter your email"/>
            </div>
          </div>
          <div className="flex flex-col gap-[6px]">
            <p className="font-medium text-white text-medium">Password</p>
            <div className="px-[14px] py-[10px] w-full bg-custom_black_2 rounded-3xl flex gap-2">
              <input type="password" className="bg-transparent outline-none text-white hover:outline-none w-full" placeholder="•••••••"/>
              <img src="/icons/eye.svg" alt="" className="cursor-pointer" />
            </div>
          </div>
        </div>

        <div className="flex justify-between">  
          <div className="flex gap-2">
            <img src="/icons/Checkbox.svg" alt="" className="cursor-pointer"/>
            <p className="text-white font-medium text-medium">Remember for 30 days</p>
          </div>
          <div className="text-custom_purple_1 font-medium text-medium cursor-pointer">Forgot password</div>
        </div>

        <div className="gap-4 flex-col flex">
          <div className="bg-custom_purple_1 rounded-3xl py-[10px] text-center cursor-pointer">
            <p className="text-white font-medium text-medium">Sign in</p>
          </div>
          <div className="bg-custom_black_1 rounded-3xl py-[10px] flex justify-center gap-3 cursor-pointer">
            <img src="/icons/Social icon.svg" alt="" />
            <p className="text-white font-medium text-medium">Sign in with Google</p>
          </div>
        </div>

        <div className="flex gap-1 justify-center">
          <p className="text-white font-medium text-medium">Don&apos;t have an account?</p>
          <p className="text-custom_purple_1 font-medium text-medium cursor-pointer">Sign up</p>
        </div>

      </div>
    </div>
  );
}
