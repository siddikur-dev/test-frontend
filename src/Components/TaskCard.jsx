const TaskCard = ({ task }) => {
  return (
    <div className="rounded-lg border border-base-300 bg-base-100 p-4 hover:shadow-md transition">
      <h3 className="font-semibold text-base-content">
        {task.title}
      </h3>
      <p className="text-sm text-gray-500 mt-1">
        {task.description}
      </p>

      {/* Status Action (Optimistic Update Trigger) */}
      <div className="mt-3 flex gap-2">
        <button className="btn btn-xs bg-primary text-white">
          Move
        </button>
        <button className="btn btn-xs bg-error text-white">
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
