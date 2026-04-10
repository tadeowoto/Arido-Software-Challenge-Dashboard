import Table from "@/components/Table";
import FilterForm from "@/components/FilterForm";
import { USER_COLUMNS } from "@/data/data";
import Header from "@/components/layout/Header";
import { userService } from "@/services/userService";

export default async function Home() {
  const users = await userService.getAll();

  return (
    <section className="w-full min-h-screen overflow-auto h-fit bg-bg-dark text-white flex flex-col">
      <Header where="Users" />
      <section className="w-full flex  items-center justify-between p-4">
        <FilterForm />
      </section>
      <section className="w-full  flex items-center justify-center p-4">
        <Table columns={USER_COLUMNS} data={users} />
      </section>
    </section>
  );
}
