import { useForm } from "react-hook-form";

const TaskForm = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = data => {
    // optimistic mutation trigger here
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col md:flex-row gap-2 bg-base-100 p-4 rounded-xl shadow"
    >
      <input
        {...register("title", { required: "Title is required" })}
        placeholder="Task title"
        className="input input-bordered w-full"
      />
      {errors.title && (
        <span className="text-error text-sm">
          {errors.title.message}
        </span>
      )}

      <button className="btn bg-primary text-white">
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
