import type { Task } from "@/types";
import type { HeaderProps } from ".";

export interface SectionProps extends HeaderProps {
    tasks: Task[]
    totalTasks: number
}