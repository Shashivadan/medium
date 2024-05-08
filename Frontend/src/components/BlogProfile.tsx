import { Avatar, AvatarFallback } from "@radix-ui/react-avatar";

type PropType = {
  name: string;
  bio?: string;
  condition?: boolean;
};

function BlogProfile({ name, bio, condition }: PropType) {
  return (
    <>
      <div>
        <div className="flex items-center gap-3">
          <div>
            <Avatar
              className={` bg-slate-300  p-2 rounded-full ${
                condition ? null : " text-[13px]"
              } `}
            >
              <AvatarFallback>{name.slice(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
          </div>
          <div>
            <h1 className=" font-semibold">{name}</h1>
            <p className=" text-slate-700 text-sm">{bio}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogProfile;
