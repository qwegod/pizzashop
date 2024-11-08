function Data() {
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="p-4 flex flex-col w-[600px] h-max bg-white dark:bg-black rounded-3xl"
    >
      <div className="flex flex-col items-center justify-between"></div>
    </div>
  );
}

export default Data;
