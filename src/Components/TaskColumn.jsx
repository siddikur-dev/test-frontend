import TaskCard from "./TaskCard";
import LoadingState from "./LoadingState";
import ErrorState from "./ErrorState";

const TaskColumn = ({ title, status }) => {
  const isLoading = false; // from TanStack Query
  const isError = false;   // from TanStack Query

  const tasks = [
    { id: 1, title: "Design UI", description: "Create dashboard UI" },
    { id: 2, title: "Setup API", description: "Integrate backend" },
  ];

  return (
    <div className="bg-base-100 rounded-xl p-4 shadow">
      <h2 className="text-lg font-semibold text-secondary mb-4">
        {title}
      </h2>
 
      {isLoading && <LoadingState />}
      {isError && <ErrorState />}

      <div className="space-y-3">
        {tasks.map(task => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default TaskColumn;
