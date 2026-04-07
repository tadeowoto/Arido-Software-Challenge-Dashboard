interface StatusItemProps {
  status: string;
}

export default function StatusItem({ status }: StatusItemProps) {
  return (
    <p
      className={`inline-block px-3 py-1 rounded-full text-[10px] font-black tracking-widest ${
        status === "ACTIVE"
          ? "bg-green-500/10 text-green-400"
          : "bg-red-500/10 text-red-400"
      }`}
    >
      {status}
    </p>
  );
}
