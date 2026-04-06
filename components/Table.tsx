export default function Table() {
  return (
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
  );
}
