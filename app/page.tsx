import Table from "@/components/Table";
import FilterForm from "@/components/FilterForm";
import userResponse from "@/mocks/userResponse.json";
import { USER_COLUMNS } from "@/data/data";
export default function Home() {
  return (
    <main className="w-full min-h-screen h-screen bg-bg-dark text-white">
      <header className="w-full h-16 bg-surface-dark flex items-center justify-between p-5">
        <div>
          <h1>User Dashboard Arido Software</h1>
        </div>
        <div>
          <button>Create User</button>
        </div>
      </header>
      <FilterForm />
      <Table columns={USER_COLUMNS} />
    </main>
  );
}
