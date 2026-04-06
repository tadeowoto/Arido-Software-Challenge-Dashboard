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
      <form action="">
        <input type="text" placeholder="Search users..." />
        <select name="" id="">
          <option value="">All</option>
          <option value="">Active</option>
          <option value="">Inactive</option>
        </select>
        <select name="" id="">
          <option value="">Security Groups</option>
          <option value=""></option>
          <option value="">User</option>
          <option value="">Guest</option>
          <option value="">Other</option>
        </select>
      </form>
      <table className="w-full h-fit text-black">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Security Group</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John Doe</td>
            <td>
              <a href="mailto:7aMlE@example.com">7aMlE@example.com</a>
            </td>
            <td>Admin</td>
            <td>Active</td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}
