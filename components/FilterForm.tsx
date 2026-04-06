export default function FilterForm() {
  return (
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
  );
}
