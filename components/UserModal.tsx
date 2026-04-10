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
        className="absolute inset-0 bg-text-primary/40 backdrop-blur-sm transition-opacity"
        onClick={onclose}
      />

      <div className="relative w-full max-w-md bg-surface-light border border-border-light rounded-xl shadow-xl overflow-hidden animate-in fade-in zoom-in duration-200">
        <div className="flex items-center justify-between px-6 py-4 border-b border-border-light">
          <div className="flex items-center gap-3">
            <div className="w-1 h-6 rounded-full bg-highlight-orange" />
            <div>
              <h2 className="text-base font-semibold text-text-primary">
                {userInfo.username}
              </h2>
              <p className="text-xs text-text-secondary mt-0.5">
                Información del usuario
              </p>
            </div>
          </div>

          <button
            onClick={onclose}
            className="p-1.5 hover:bg-bg-light rounded-lg transition-colors text-text-secondary hover:text-text-primary"
          >
            ✕
          </button>
        </div>

        <div className="p-6 space-y-5 text-sm">
          <div className="flex justify-between items-center p-3 bg-bg-light rounded-lg border border-border-light">
            <span className="text-text-secondary text-xs uppercase tracking-wide">
              Status
            </span>
            <span className="text-text-primary font-medium">
              {userInfo.status}
            </span>
          </div>

          <div className="flex justify-between items-center p-3 bg-bg-light rounded-lg border border-border-light">
            <span className="text-text-secondary text-xs uppercase tracking-wide">
              Created
            </span>
            <span className="text-text-primary font-medium">
              {userInfo.createdAt || "N/A"}
            </span>
          </div>

          <div className="space-y-2">
            <span className="text-xs font-medium text-text-secondary uppercase tracking-wide">
              Security Groups
            </span>

            <div className="flex flex-col gap-2">
              {userInfo.groups.map((group, index) => (
                <div
                  key={index}
                  className="p-3 bg-bg-light rounded-lg border border-border-light hover:border-highlight-blue/40 transition-colors"
                >
                  <GroupItem group={group} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="px-6 pb-6">
          <button
            onClick={onclose}
            className="w-full py-2.5 bg-highlight-orange hover:opacity-90 text-white rounded-lg font-medium text-sm transition-all active:scale-[0.98]"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
