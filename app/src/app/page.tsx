'use client'

import { useAuth } from "@/resources"
import  Login  from "./login/page"
import GalleryPage from "./gallery/page"

export default function Home() {

  const auth = useAuth();
  const user = auth.getUserSession();

  if(!user){
    return <Login/>
  }
  return (
    <GalleryPage></GalleryPage>
  )
}
