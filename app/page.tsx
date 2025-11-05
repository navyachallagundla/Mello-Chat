import { getHumeAccessToken } from "@/utils/getHumeAccessToken";
import dynamic from "next/dynamic";

const Chat = dynamic(() => import("@/components/Chat"), {
  ssr: false,
});

export default async function Page() {
  const accessToken = await getHumeAccessToken();

  if (!accessToken) {
    throw new Error('Unable to get access token');
  }

  return (
 
  <div className={"grow flex flex-col relative"}>
  
      <Chat accessToken={accessToken} />
      <img className="absolute bottom-0 -left-25 z-10" src="/girl.png" alt="Mello Logo" width={750} height={750} />
    </div>



  );
}
