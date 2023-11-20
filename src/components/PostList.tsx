import {Card, CardHeader, CardBody, Divider} from "@nextui-org/react";

export default function PostList({post} : any) {
  return (
    <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3">
        <div className="flex flex-col">
          <p className="text-md">{post.title}</p>
        </div>
      </CardHeader>
      <Divider/>
      <CardBody>
        <p className="text-small text-default-500">{post.link}</p>
      </CardBody>
    </Card>
  );
}