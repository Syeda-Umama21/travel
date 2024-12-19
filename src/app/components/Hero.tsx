import Container from "@/app/components/Container";
import Image from "next/image";
import SearchForm from "./Search-form";

export default function Hero() {
  return (
    <Container className="grid lg:grid-cols-2 p-1 mx-25">
   <div className="py-1 md:py-6">
    <p className="text-pink-500 mt-4 font-semibold ml-1 text-base">
      Book With Us
      </p>
    <h1 className=" text-base sm:text-7xl lg:text-8xl  font-bold mb-2 text-balance font-heading">
       Discover Your Next Adventure
       </h1>
    <p className="text-sm text-slate-500 mb-4"> 
        Discover amazing places at excessive deals.Eat, Shop, Visit
        interesting places around the Pakistan.
    </p>
    <div  className=" p-4 md:p-10 mt10 rounded-md bg-white pt-4 lg:-mr-[55%] relative"> 
      <SearchForm/>
      </div>
   </div>

   <div className="hidden lg:flex justify-center">
   <Image
     src="/hero.jpg"
    alt="Scenic view of a snowy mountain landscape"
     width={480}
     height={600}
     className="rounded-md md:w-[75%] h-[98%] max-h-[700px] object-cover"
   />
   </div>
   </Container>
  );
}
















// <Container className="grid grid-cols-2 p-10">
// <div className="py-2 md:py-20">
//   <p className="text-pink-500 font-semibold ml-1 text-base">
//     Book With Us!
//   </p>
//   <h1 className="text-8xl font-bold sm:text-6xl lg:text-8xl  text-balance mb-2 font-heading">
//      Discover Your Next Adventure
//   </h1>
//   <p className="text-sm text-slate-500">
//     Discover amazing places at excessive deals.Eat, Shop, Visit
//     interesting places around the Pakistan.
//   </p>

//   <div className="p-4 md:p-10 mt-1 rounded-md bg-white pt-9 lg:-mr-[50%] relative">
//     <SearchForm />
//   </div>
// </div>

// <div className="hidden lg:flex justify-center">
//   <Image
//     src="/hero.jpg"
//     alt="Scenic view of a snowy mountain landscape"
//     width={480}
//     height={600}
//     className="rounded-md w-[75%] h-[80%] max-h-[700px] object-cover"
//   />
// </div>
// </Container>