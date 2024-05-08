type PropsType = {
  crumb: string;
};

function Breadcrumb({ crumb }: PropsType) {
  return (
    <div>
      <div className="">
        <h3 className=" p-2 font-semibold  text-slate-600">{crumb}</h3>
      </div>
    </div>
  );
}

export default Breadcrumb;
