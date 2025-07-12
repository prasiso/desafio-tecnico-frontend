import type { statusTaskEnum } from "@/enums"

export interface TaskResponse {
  "first": 1 | 0,
  "prev": 1 | 0,
  "next": number,
  "last": number,
  "pages": number,
  "items": number,
  "data": Task[]
}
export interface Task {
  "id": string,
  "str_automation_name": string,
  "str_step_name": string,
  "str_task_status": statusTaskEnum,
  "str_step_type": "approval",
  "ts_created_at": string | Date | null,
  "ts_finished_at"?: string | Date | null,
  "str_step_label": null | string
}