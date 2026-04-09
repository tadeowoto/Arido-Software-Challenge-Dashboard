import { groupService } from "@/services/groupService";
import { Search, ChevronDown } from "lucide-react";
export default async function FilterForm() {
  const groups = await groupService.getAllGroups();

  return (
    <form className="flex flex-col md:flex-row gap-3 w-full mb-6">
      <div className="relative flex-1 group">
        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
          <Search className="h-4 w-4 text-text-secondary group-focus-within:text-highlight-blue transition-colors" />
        </div>
        <input
          type="text"
          placeholder="Search by username..."
          className="w-full h-11 pl-10 pr-4 bg-surface-dark/10 border border-border-dark/50 rounded-xl text-sm text-white placeholder:text-text-secondary focus:outline-none focus:border-highlight-blue/50 focus:bg-surface-dark/20 transition-all"
        />
      </div>

      <div className="relative min-w-40">
        <select className="w-full h-11 px-4 bg-surface-dark/10 border border-border-dark/50 rounded-xl text-sm text-white appearance-none focus:outline-none focus:border-highlight-blue/50 focus:bg-surface-dark/20 transition-all">
          <option value="">All Statuses</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
        <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
          <ChevronDown className="h-4 w-4 text-text-secondary" />
        </div>
      </div>

      <div className="relative min-w-45">
        <select className="w-full h-11 px-4 bg-surface-dark/10 border border-border-dark/50 rounded-xl text-sm text-white appearance-none focus:outline-none focus:border-highlight-blue/50 focus:bg-surface-dark/20 transition-all">
          <option value="">All Groups</option>
          {groups.map((group) => (
            <option key={group.groupId} value={group.groupId}>
              {group.name}
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
          <ChevronDown className="h-4 w-4 text-text-secondary" />
        </div>
      </div>
    </form>
  );
}
