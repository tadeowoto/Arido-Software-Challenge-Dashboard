"use client";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import debounce from "just-debounce-it";
import { UserResponse } from "@/types/userTypes";
import { userService } from "@/services/userService";

export default function UserGroupsPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<UserResponse | null>(null);

  const fetchUserGroups = useMemo(
    () =>
      debounce(async (username: string) => {
        if (!username || username.length < 3) {
          setResults(null);
          return;
        }

        try {
          const res = await userService.getUserByUsername(username);
          setResults(res);
        } catch (error) {
          setResults(null);
        }
      }, 500),
    [],
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    fetchUserGroups(value);
  };

  return (
    <main className="w-full min-h-screen bg-bg-dark flex flex-col">
      <header className="w-full h-16 border-b border-border-dark flex items-center px-8 gap-4 bg-bg-dark/50 backdrop-blur-md sticky top-0 z-10">
        <h1 className="text-text-primary font-bold text-lg tracking-tight">
          User Security Groups
        </h1>
      </header>
      <section className="flex-1 flex flex-col items-center p-8 gap-6 max-w-5xl mx-auto w-full">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-full flex gap-2"
        >
          <div className="relative flex-1 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary w-5 h-5" />
            <input
              type="search"
              value={query}
              onChange={handleChange}
              name="username"
              placeholder="Search by username..."
              className="w-full h-12 bg-surface-dark border border-border-dark rounded-xl pl-12 pr-4 text-text-primary focus:border-highlight-blue/50 outline-none"
            />
          </div>
        </form>

        {query.length >= 3 && results === null && (
          <div className="text-center p-8 border border-border-dark rounded-3xl bg-surface-dark/20">
            <p className="text-text-secondary italic">
              No se encontró ningún usuario llamado {query}
            </p>
          </div>
        )}

        {results && (
          <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-text-primary text-2xl font-bold mb-4">
              Grupos de {results.username}
            </h2>
          </div>
        )}
      </section>
    </main>
  );
}
