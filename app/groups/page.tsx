import GroupCard from "@/components/GroupCard";
import { groupService } from "@/services/groupService";

export default async function GroupPage() {
  const groups = await groupService.getAllGroups();

  return (
    <section className="w-full min-h-screen bg-bg-dark p-8">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-text-primary">
            Grupos de Seguridad
          </h1>
          <p className="text-text-secondary mt-2">
            Listado de roles y niveles de acceso configurados.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map((group) => (
            <GroupCard
              key={group.groupId}
              name={group.name}
              description={group.description}
            />
          ))}
        </div>

        {groups.length === 0 && (
          <div className="text-center py-20 bg-surface-dark rounded-3xl border-2 border-dashed border-border-dark">
            <p className="text-text-secondary">
              No se encontraron grupos configurados.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
