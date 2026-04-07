interface GroupItemProps {
  group: { groupName: string; accessLevel: string };
}

export default function GroupItem({ group }: GroupItemProps) {
  return (
    <div className="flex flex-col items-center">
      <p className="text-highlight-orange font-bold text-[11px] uppercase tracking-tighter">
        {group.groupName}
      </p>
      <p className="text-highlight-blue text-[10px] font-black uppercase tracking-widest opacity-80">
        {group.accessLevel}
      </p>
    </div>
  );
}
