import ChatIcon from "@mui/icons-material/Chat";
import Badge from "@mui/material/Badge";


export default function ChatSection() {
  return (
    <div className="shadow-lg p-4 rounded-lg w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 dark:bg-lime-300 dark:bg-opacity-55 bg-orange-300 bg-opacity-75 transition-transform transform hover:scale-105 hover:cursor-pointer">
      <div className="flex items-center space-x-4">
        <span>
          <Badge badgeContent={4} color="error">
            <ChatIcon className="text-4xl dark:text-gray-300" />
          </Badge>
        </span>
        <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-200">
          Chat
        </h4>
      </div>

      {/* Chat Nachrichten */}
      <div className="chat chat-start">
        <div className="chat-bubble dark:text-gray-400 dark:bg-slate-950">
          Hey, wie geht es dir heute?
        </div>
      </div>
      <div className="chat chat-end">
        <div className="chat-bubble dark:text-gray-400 dark:bg-slate-950">
          Mir geht's gut, danke! Und dir?
        </div>
      </div>
    </div>
  );
}
