import type { Task, TaskSearch } from "@/types";
import { normalizeString } from "./normalizeString";

export const filterSearchTask = (tasks: Task[], search: string, field: TaskSearch[]) => {
    return tasks.filter(task =>
        field.some(field =>
            normalizeString(String(task[field])).includes(normalizeString(search))
        )
    )
}
