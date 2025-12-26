import TaskColumn from "./TaskColumn";
import TaskForm from "./TaskForm";

const TaskBoard = () => {
  return (
    <div className="min-h-screen bg-base-200 p-6">
      {/* Header */}
      <div className="mb-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-primary">
          Task Dashboard
        </h1>
        <TaskForm />
      </div>

      {/* Kanban Board */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <TaskColumn title="Todo" status="todo" />
        <TaskColumn title="In Progress" status="in-progress" />
        <TaskColumn title="Done" status="done" />
      </div>
    </div>
  );
};

export default TaskBoard;
