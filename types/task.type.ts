export type Task = {
    id: number;
    title: string;
    description: string;
    status: "Completed" | "Not completed";
    createdDate: string;
}