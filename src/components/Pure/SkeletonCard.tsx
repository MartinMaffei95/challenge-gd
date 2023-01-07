const SkeletonCard = () => {
  //
  return (
    <div className=" border-gray-200 border text-lg w-2/2 rounded-sm overflow-hidden relative shadow-xl">
      <div className="flex flex-row animate-pulse items-center h-full justify-center space-x-2 p-2">
        <div className="flex flex-col space-y-2">
          <div className="w-20 bg-gray-300 h-6 rounded-md "></div>
          <div className="w-32 bg-gray-300 h-6 rounded-md "></div>
          <div className="w-20 bg-gray-300 h-6 rounded-md "></div>
          <div className="w-32 bg-gray-300 h-6 rounded-md "></div>
        </div>
        <div className="flex flex-col space-y-2 items-end">
          <div className="w-32 bg-gray-300 h-6 rounded-md "></div>
          <div className="w-20 bg-gray-300 h-6 rounded-md "></div>
          <div className="w-32 bg-gray-300 h-6 rounded-md "></div>
          <div className="w-20 bg-gray-300 h-6 rounded-md "></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;
