function ProgressTracker() {
  return (
    <div>
      <div className="flex flex-col space-y-1 p-4 bg-gray-500">
        <div className="flex justify-between items-center bg-orange-400 text-white p-2 rounded-md">
          <span>Chest</span>
          <span>10 Days Ago</span>
        </div>
      </div>
    </div>
  );
}

export default ProgressTracker;