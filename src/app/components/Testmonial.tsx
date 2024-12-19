import Container from "@/app/components/Container";
import Image from "next/image";
import { testmonials } from "../data";
import Rating from "@/app/components/Rating";

export default function Testmonial() {
  return (
    <Container className="py-12">
      <h2 className="text-4xl font-heading font-semibold text-center py-10">
        What are customers are say
      </h2>

      <div className="flex flex-col md:flex-row md:flex-wrap justify-center gap-6">
        {testmonials.map((testmonial) => (
          <div
            key={testmonial.name}
            className="bg-white p-6 rounded-md flex gap-4 md:w-[calc(50%-24px)]"
          >
            <Image
              src={testmonial.image}
              alt={testmonial.name}
              width={100}
              height={100}
              className="w-16 h-16 rounded-full object-cover shrink-0"
            />
            <div>
              <div className="flex justify-between">
                <div>
                  <p>{testmonial.name}</p>
                  <p className="text-slate-400">{testmonial.country}</p>
                </div>
                <Rating rate={testmonial.rating} />
              </div>
              <p>{testmonial.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
