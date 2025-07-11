import type { statuTaskEnum } from "@/enums";
import type { Task } from "@/types";

export const differenceTasks = (tasks: Task[], statusAccepted: statuTaskEnum[]): Task[] => {
    return tasks.filter((task: Task) => statusAccepted.includes(task.str_task_status))
}