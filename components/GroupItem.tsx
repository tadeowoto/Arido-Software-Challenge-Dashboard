interface GroupItemProps {
  group: { groupName: string; accessLevel: string };
}

export default function GroupItem({ group }: GroupItemProps) {
  return (
    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-bg-light border border-border-light">
      <span className="text-[11px] font-medium text-text-primary">
        {group.groupName}
      </span>
      <span className="text-[10px] text-text-secondary">·</span>
      <span className="text-[11px] font-medium text-highlight-blue">
        {group.accessLevel}
      </span>
    </div>
  );
}
