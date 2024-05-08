type PropTypes = {
  title: string;
  posted: string;
  description: string;
  condition?: boolean;
  id: string;
};

function Bloglayout({ title, posted, description, condition, id }: PropTypes) {
  return (
    <>
      <div key={id + "q"}>
        <h1 className="text-2xl md:text-5xl font-bold">{title} </h1>
        <p className=" my-2 mb-3 text-sm text-slate-900 font-medium">
          Posted on {posted}
        </p>
        <p className=" word-break: break-all font-serif ">
          {condition ? description : description.slice(0, 100) + "..."}
        </p>
      </div>
    </>
  );
}

export default Bloglayout;
