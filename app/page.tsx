import Table from "@/components/Table";
import FilterForm from "@/components/FilterForm";
import { USER_COLUMNS } from "@/data/data";
import Header from "@/components/layout/Header";
import { userService } from "@/services/userService";

export default async function Home() {
  const users = await userService.getAll();

  return (
    <section className="w-full min-h-screen overflow-auto h-fit bg-bg-light text-text-primary flex flex-col">
      <Header where="Users" />
      <section className="w-full mt-10 flex flex-col items-center justify-center px-6 pb-6">
        <Table columns={USER_COLUMNS} data={users} />
      </section>
    </section>
  );
}
