import type { statusType, statuTaskEnum } from "@/enums"

export interface TaskResponse {
  "first": 1 | 0,
  "prev": 1 | 0,
  "next": Number,
  "last": Number,
  "pages": Number,
  "items": Number,
  "data": Task[]
}
export interface Task {
  "id": string,
  "str_automation_name": string,
  "str_step_name": string,
  "str_task_status": statuTaskEnum,
  "str_step_type": "approval",
  "ts_created_at": string | Date,
  "ts_finished_at": string | Date,
  "str_step_label": null | string
}