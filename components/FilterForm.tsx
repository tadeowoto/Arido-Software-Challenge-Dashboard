export default function FilterForm() {
  return (
    <form
      action=""
      className="w-full h-20  flex-col items-center justify-center rounded-lg p-4 md:flex md:items-center md:justify-center md:flex-row gap-4 bg-surface-dark/20 border border-border-dark/50"
    >
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
