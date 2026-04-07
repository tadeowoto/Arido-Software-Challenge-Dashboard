import Table from "@/components/Table";
import FilterForm from "@/components/FilterForm";
import userResponse from "@/mocks/userResponse.json";
import { USER_COLUMNS } from "@/data/data";
export default function Home() {
  return (
    <main className="w-full min-h-screen overflow-auto h-fit bg-bg-dark text-white flex flex-col gap-10">
      <header className=" sticky top-0 z-50 w-full h-16 bg-surface-dark flex items-center justify-between p-5">
        <div>
          <h1>User Dashboard Arido Software</h1>
        </div>
        <div>
          <button>Create User</button>
        </div>
      </header>
      <section className="w-full flex  items-center justify-between p-4">
        <FilterForm />
      </section>
      <section className="w-full flex items-center justify-center p-4">
        <Table columns={USER_COLUMNS} data={userResponse} />
      </section>
    </main>
  );
}
