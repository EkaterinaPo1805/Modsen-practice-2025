import { Badge } from "@appTypes/badge";
import { ColumnDescription } from "./columnDescription";

export interface Task {
    id: string;
    title?: string;
    description?: string;
    badge?: Badge['badge'];
    column: ColumnDescription['column'];
}