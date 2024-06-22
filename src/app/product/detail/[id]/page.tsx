"use client";
import { getData } from "@/services/product";
import Image from "next/image";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());
export default function DetailProductPage({
  params,
}: {
  params: { id: string };
}) {
  // const product = await getData(
  //   `${process.env.NEXT_PUBLIC_API_URL}/api/product?id=${params.id}`
  // );
  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/api/product?id=${params.id}`,
    fetcher
  );
  console.log(data);

  const product = {
    data: data?.data,
  };
  return (
    <div className="ccontainer mx-auto my-10">
      <div className="w-1/2 mx-auto border border-gray-700">
        <Image
          src={product.data?.image}
          alt=""
          className="w-full object-cover aspect-square col-span-2"
          width={500}
          height={500}
        />
        <div className="bg-white p-4 px-6">
          <h3>{product.data?.name}</h3>
          <p>Price: ${product.data?.price}</p>
        </div>
      </div>
    </div>
  );
}
