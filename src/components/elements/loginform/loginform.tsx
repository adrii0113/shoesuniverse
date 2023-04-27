import Link from "next/link";

import { FormProvider, useForm } from "react-hook-form";

import { useAuth } from "@/modules/auth/context/authcontext";
import { useRouter } from "next/router";




interface LoginType {
    email: string;
    password: string;
  }
export default function Loginform(){

    const { logIn } = useAuth();
    const router = useRouter();

    const methods = useForm<LoginType>({ mode: "onBlur" });

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = methods;


      const onSubmit = async (data: LoginType) => {
          
        
        try {
            console.log(data)
            await logIn(data.email, data.password)
            router.push("/");
        } catch (error: any) {
            console.log(error.message)
            
        }
      };

    return(

  
    <div>
        <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
             <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                 <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo"></img>
                MovieAPI
            </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign in to your account
              </h1>
              <FormProvider {...methods}>

              
              <form className="space-y-4 md:space-y-6" action="" onSubmit={handleSubmit(onSubmit)}>
                  <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input type="email"  id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" {...register("email", { required: "Email is required" })} required={true}></input>{errors.email && <p className="text-red-400">{errors.email.message}</p>}
                  </div>
                  <div>
                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password"  id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required={true} {...register("password", { required: "Password is required" })}></input>
                      {errors.password && <p className="text-red-400">{errors.password.message}</p>}
                  </div>
                  <div className="flex items-center justify-between">
                      <div className="flex items-start">
                      </div>
                      <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"><Link href="/forgotpass">Forgot password?</Link></a>
                  </div>


                  <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>



              </form>
              </FormProvider>
              <button className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Back home</button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Don’t have an account yet? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500"><Link href='/register'>Sign up</Link></a>
                  </p>
          </div>
      </div>
  </div>
</section>
    </div>
    )
}