interface StatusItemProps {
  status: string;
}

export default function StatusItem({ status }: StatusItemProps) {
  return (
    <p
      className={`inline-block px-3 py-1 rounded-full text-[10px] font-semibold tracking-widest ${
        status === "ACTIVE"
          ? "bg-green-50 text-green-700 ring-1 ring-green-200"
          : "bg-red-50 text-red-600 ring-1 ring-red-200"
      }`}
    >
      {status}
    </p>
  );
}
