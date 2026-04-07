import type { UserResponse } from "@/types/userTypes";
import GroupItem from "./GroupItem";

interface UserModalProps {
  userInfo: UserResponse;
  open?: boolean;
  onclose: () => void;
}

export default function UserModal({ userInfo, open, onclose }: UserModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onclose}
      />
      <div className="relative w-full max-w-md bg-surface-dark border border-border-dark p-6 rounded-2xl shadow-2xl animate-in fade-in zoom-in duration-200">
        <h2 className="text-xl font-bold text-white mb-4">
          {userInfo.username}
        </h2>

        <div className="space-y-4 text-sm">
          <div className="flex justify-between border-b border-border-dark/50 pb-2">
            <span className="text-text-secondary">Status:</span>
            <span className="text-white font-medium">{userInfo.status}</span>
          </div>

          <div className="flex justify-between border-b border-border-dark/50 pb-2">
            <span className="text-text-secondary">Created:</span>
            <span className="text-white font-medium">
              {userInfo.createdAt || "N/A"}
            </span>
          </div>

          <div>
            <span className="text-text-secondary block mb-2">
              Security Groups:
            </span>
            <div className="flex flex-wrap  flex-col items-start gap-3 py-2">
              {userInfo.groups.map((group, index) => (
                <GroupItem key={index} group={group} />
              ))}
            </div>
          </div>
        </div>

        <button
          onClick={onclose}
          className="w-full mt-8 py-2 bg-highlight-blue hover:bg-highlight-blue/90 text-white rounded-lg font-bold transition-all"
        >
          Close
        </button>
      </div>
    </div>
  );
}
