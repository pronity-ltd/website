import Image from "next/image";
import Spline from '@splinetool/react-spline/next';
import Logo from '@/assets/img/logo-primary.png';
import LogoWhite from '@/assets/img/logo-white.png';
import Link from "next/link";

export default function Home() {

  const date = new Date();

  return (
    <main className=" bg-black min-h-svh flex justify-center">

      <div className=" container h-full ">
        <div className=" my-10 flex items-center justify-between">

          <Image src={Logo} width={40} height={40} alt="logo" />
          <div>
            <p className="text-white text-2xl ">
              Welcome from pronity!
            </p>
          </div>
          <div>
            <Link href={'https://www.linkedin.com/company/pronity'} className=" text-white">Linkedin</Link>
          </div>
        </div>
      
        <div className=" flex items-center justify-center">
          <div className=" hidden lg:block ">
            <Spline
              scene="https://prod.spline.design/Wl96qHQJNscjj3lg/scene.splinecode" 
            />
          </div>
        </div>

        <div className=" lg:hidden flex items-center justify-center min-h-screen ">
          <Image src={Logo} width={300} height={300} alt="logo" />
        </div>

        <div className=" my-10 flex items-center justify-between">
          
          <div>
            <Link href={''} className=" text-white">
              © 2020 – {date.getFullYear()} pronity
            </Link>
          </div>

          <div className=" flex items-center">
            <Image src={LogoWhite} width={20} height={20} alt="logo" />
            <span className=" text-white ms-2">@pronity</span>
          </div>
        </div>
      </div>
      
    </main>
  );
}
