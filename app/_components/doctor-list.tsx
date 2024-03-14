"use client";

import { Button } from "@/components/ui/button";
import { useDoctorList } from "@/hooks/useDoctorList";
import Image from "next/image";
import React from "react";

interface IDoctor {
  id: number;
  attributes: {
    Name: string;
    Year_of_Experience: string;
    Address: string;
    categories: {
      data: [
        {
          attributes: {
            Name: string;
          };
        }
      ];
    };
    image: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
  };
}

function DoctorList() {
  const { data, loading } = useDoctorList();

  return (
    <div className="mb-10 mx-auto max-w-screen-xl px-4 pb-8 sm:px-6 sm:pb-12 lg:px-8 lg:pb-16">
      <h2 className="font-bold text-xl pb-6">Popular Doctors</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {data.map((item: IDoctor) => (
          <div key={item.id} className="border hover:border-primary transition-all ease-in-out cursor-pointer rounded-xl p-3">
            <Image
              src={item.attributes.image.data.attributes.url}
              alt={item.attributes.Name}
              width={500}
              height={200}
              className="h-[200px] w-full object-cover rounded-lg "
            />
            <div className="mt-3 items-baseline gap-1 flex flex-col">
              <p className="text-[10px] bg-blue-100 p-1 rounded-full px-2 text-primary">
                {item.attributes.categories.data[0]?.attributes.Name}
              </p>
              <h2 className="font-bold">{item.attributes.Name}</h2>
              <p className="text-primary text-sm">
                {item.attributes.Year_of_Experience}
              </p>
              <p className="text-gray-500 text-sm">{item.attributes.Address}</p>
              <Button
                variant="outline"
                className="text-primary my-1.5 text-sm border-primary rounded-full hover:bg-primary hover:text-white px-3 py-2 w-full"
              >
                Book Now
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DoctorList;
