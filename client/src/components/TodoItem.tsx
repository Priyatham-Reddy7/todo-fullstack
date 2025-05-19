import { MdDelete } from "react-icons/md";

interface TodoItemProps {
    name: string;
    status: string;
    index: number;
}

const statusColors: Record<string, string> = {
    "In Progress": "text-blue-500",
    "Completed": "text-green-600",
    "Not started": "text-gray-500",
};

const TodoItem = ({ name, status, index }: TodoItemProps) => {
    const statusClass = statusColors[status] || "text-black";

    return (
        <div className="bg-white w-xl rounded-lg p-3 shadow-md text-black flex justify-between items-center hover:shadow-lg">
            <span className="font-bold text-xl text-yellow-950 w-[180px] text-start">
                {index + 1}. {name}
            </span>
            <span className={`font-medium ${statusClass}`}>{status}</span>
            <span className="text-red-400 cursor-pointer text-2xl">
                <MdDelete />
            </span>
        </div>
    );
};

export default TodoItem;
