"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import React from "react";
// import GlobalApi from "../_utils/GlobalApi";
import Image from "next/image";
import { useCategories } from "@/hooks/useCategories";

interface IIcon {
  data: {
    id: number;
    attributes: {
      name: string;
      url: string;
    };
  };
}

interface ICategory {
  id: number;
  attributes: {
    Name: string;
    Icon: IIcon;
  };
}

function CategorySearch() {
  const { data: categories } = useCategories();

  // const [categoryList, setCategoryList] = useState([]);
  // const getCategoryList = () => {
  //   GlobalApi.getCategory().then((resp) => {
  //     setCategoryList(resp.data.data);
  //   });
  // };

  // useEffect(() => {
  //   getCategoryList();
  // }, []);

  return (
    <div className="mb-10 px-4 items-center flex flex-col gap-2">
      <h2 className="font-bold text-4xl tracking-wide">
        Search <span className="text-primary">Doctors</span>
      </h2>
      <p className="text-gray-500 text-xl">
        Search Your Doctor and Book Appointment in one click
      </p>
      <div className="flex w-full mt-3 max-w-sm items-center space-x-2">
        <Input type="text" placeholder="Search..." />
        <Button type="submit">
          <Search className="h-4 w-4 mr-2" />
          Search
        </Button>
      </div>

      <div className="mt-4 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {categories.map((item: ICategory) => (
          <div
            key={item.id}
            className="flex flex-col text-center gap-2 items-center cursor-pointer p-5 bg-blue-50 rounded-lg hover:scale-105 transition-all ease-in-out"
          >
            <Image
              alt={item.attributes.Name}
              className="pointer-events-none"
              width={40}
              height={40}
              src={item.attributes.Icon.data.attributes.url}
            />
            <label className="text-sm text-blue-500 select-none cursor-pointer">
              {item.attributes.Name}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategorySearch;
