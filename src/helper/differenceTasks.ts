import type { statusTaskEnum } from "@/enums";
import type { Task } from "@/types";

export const differenceTasks = (tasks: Task[], statusAccepted: statusTaskEnum[]): Task[] => {
    return tasks.filter((task: Task) => statusAccepted.includes(task.str_task_status))
}