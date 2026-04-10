import { groupService } from "@/services/groupService";

export default async function GroupPage() {
  const groups = await groupService.getAllGroups();

  return (
    <section className="w-full min-h-screen overflow-auto h-fit bg-bg-dark text-white flex flex-col">
      <h1 className="text-2xl font-bold p-4">Groups</h1>
      <section className="w-full  flex items-center justify-center p-4">
        <ul>
          {groups.map((group) => (
            <li key={group.groupId} className="p-2 border-b border-gray-700">
              {group.name}
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
}
