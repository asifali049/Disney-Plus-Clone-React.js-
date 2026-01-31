function HeaderItem({ name, Icon }) {
  return (
    <div className=" flex items-center gap-2 cursor-pointer text-[18px] font-semibold course-pointer hover:underline underline-offset-8 mb-2">
      <Icon />
      <h2 className="text-black t">{name}</h2>
    </div>
  );
}

export default HeaderItem;
