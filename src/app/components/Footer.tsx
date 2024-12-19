import  Link  from "next/link";
import Container from "@/app/components/Container";

export default function Footer() {
  return (
    <footer className="pt-20 mt-20 bg-slate-700">
      <Container className="flex flex-col md:flex-row gap-16 justify-between">
        <div>
          <div className="text-lg text-white">Next-Tour</div>
          <p className="text-slate-400 max-w-sm">
            Discover amazing places at excessive deals.Eat, Shop, Visit
            interesting places around the Pakistan.
          </p>
        </div>

        <div>
          <div className="text-lg text-white">Contact</div>
          <p className="text-slate-400">Hello No. 453546849</p>
          <Link
            className="text-slate-400 underline"
            href="emailto:nexttour@gmail.com"
          >
            Email:mailto:nexttour@gmail.com
          </Link>
        </div>
      </Container>
      <p className="text-center text-sm text-slate-500 pt-20 pb-4">
            Copyright 2024 The Brave Coders. All Right Reserved
          </p>
    </footer>
  );
}
