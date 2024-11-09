'use server';


import { createAdminClient } from "@/config/appwrite";

import { redirect } from "next/navigation";

async function getSingleRoom(id) {
  try {
    const { databases } = await createAdminClient();

    const room= await databases.getDocument(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
      process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ROOMS,
      id
    );
    
    return room;
  } catch (error) {
    console.log("Failed to get room", error);
    redirect("/error");
  }
}


export default getSingleRoom;