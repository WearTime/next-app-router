import { retrieveData, retrieveDataById } from "@/lib/firebase/service";
import { NextRequest, NextResponse } from "next/server";

const data = [
  {
    id: 1,
    title: "Nike Air Max Plus",
    image:
      "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_407,c_limit/49b3c5b3-cfb7-4c70-bf51-29cdbb9fec30/air-max-plus-shoes-dz4jLD.png",
    price: 2669000,
  },
  {
    id: 2,
    title: "Nike Air Max Koko",
    image:
      "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_407,c_limit/2c2cacaa-6581-4a56-b7d0-bfb1a3e624af/air-max-koko-sandals-w4Xp4m.png",
    price: 1549000,
  },
  {
    id: 3,
    title: "Nike Pegasus 41",
    image:
      "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_407,c_limit/870add6a-ba05-4546-80cc-f0e3d0268848/pegasus-41-road-running-shoes-SKDkNs.png",
    price: 2099000,
  },
  {
    id: 4,
    title: "Nike Pegasus 41",
    image:
      "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_407,c_limit/870add6a-ba05-4546-80cc-f0e3d0268848/pegasus-41-road-running-shoes-SKDkNs.png",
    price: 2099000,
  },
  // {
  //   id: 5,
  //   title: "Nike Air Max Plus",
  //   image:
  //     "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_407,c_limit/49b3c5b3-cfb7-4c70-bf51-29cdbb9fec30/air-max-plus-shoes-dz4jLD.png",
  //   price: 2669000,
  // },
];

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (id) {
    const detailProduct = await retrieveDataById("products", id);
    if (detailProduct) {
      return NextResponse.json({
        status: 200,
        message: "Success",
        data: detailProduct,
      });
    }

    return NextResponse.json({
      status: 404,
      message: "Not Found",
    });
  }
  const products = await retrieveData("products");
  return NextResponse.json({ status: 200, message: "Success", data: products });
}
