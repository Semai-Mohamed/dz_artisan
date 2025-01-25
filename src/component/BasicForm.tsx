'use client';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

interface BasicFormProps {
  whatHeWillDo: string;
  imgProfile: string;
  username: string;
  profession: string;
}

export default function BasicForm({
  whatHeWillDo,
  imgProfile,
  username,
  profession,
}: BasicFormProps) {
  return (
    <div className="  ">
      <Card className=" bg-white px-8">
        <CardHeader className="w-full">
          <CardTitle className="text-2xl font-bold">{whatHeWillDo}</CardTitle>
          <div className="flex items-center gap-3 mt-4">
            <div className="h-12 w-12">
              <Image src={imgProfile} alt={username} ></Image>
             
            </div>
            <div>
              <h3 className="font-semibold">{username}</h3>
              <p className="text-sm text-gray-500">{profession}</p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="">
          <p className="text-lg text-gray-600">Tell me more about your project</p>
          <form className="space-y-4">
            <Textarea placeholder="I am ..." className="min-h-[200px] resize-none outline-none" />
            <div className="flex justify-end">
              <Button className="bg-gray-900 hover:bg-gray-800 px-8 text-white">Send</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}