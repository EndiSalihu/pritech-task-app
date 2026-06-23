export type Task = {
    id: string;
    title: string;
    description: string;
    status: "Completed" | "Not completed";
    createdDate: string;
}