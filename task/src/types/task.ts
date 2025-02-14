import { Badge } from "@appTypes/badge";
import { ColumnDescription } from "./columnDescription";

export interface TaskCard {
    id: string;
    title?: string;
    description?: string;
    badge?: Badge['badge'];
    column: ColumnDescription['column'];
}