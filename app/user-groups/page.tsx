"use client";
import { Search, UserCheck } from "lucide-react";
import { useMemo, useState } from "react";
import debounce from "just-debounce-it";
import { UserResponse } from "@/types/userTypes";
import { userService } from "@/services/userService";
import UserAccessTable from "@/components/UserAccessTable";
import { formatDate } from "@/utils/utils";

export default function UserGroupsPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<UserResponse | null>(null);

  const fetchUserGroups = useMemo(
    () =>
      debounce(async (username: string) => {
        try {
          const res = await userService.getUserByUsername(username);

          if (res) {
            const formattedRes = {
              ...res,
              createdAt: formatDate(res.createdAt),
            };
            setResults(formattedRes);
          }
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
    <main className="w-full min-h-screen bg-bg-light flex flex-col">
      <header className="w-full h-16 border-b border-border-light flex items-center px-8 gap-3 bg-surface-light sticky top-0 z-10">
        <div className="w-1 h-6 rounded-full bg-highlight-orange" />
        <h1 className="text-text-primary font-semibold text-lg">
          User Security Groups
        </h1>
      </header>

      <section className="flex-1 flex flex-col items-center p-8 gap-6 max-w-5xl mx-auto w-full">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-full flex gap-2"
        >
          <div className="relative flex-1 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary w-4 h-4 group-focus-within:text-highlight-blue transition-colors" />
            <input
              type="search"
              value={query}
              onChange={handleChange}
              name="username"
              placeholder="Search by username..."
              className="w-full h-10 bg-surface-light border border-border-light rounded-lg pl-11 pr-4 text-text-primary text-sm focus:border-highlight-blue focus:ring-2 focus:ring-highlight-blue/10 outline-none transition-all"
            />
          </div>
        </form>

        {!query && (
          <div className="w-full flex-1 min-h-100 bg-surface-light border border-border-light border-dashed rounded-xl flex flex-col items-center justify-center p-12 text-center gap-4">
            <div className="w-16 h-16 bg-highlight-orange/10 rounded-full flex items-center justify-center mb-2">
              <UserCheck className="w-8 h-8 text-highlight-orange" />
            </div>
            <div className="space-y-1">
              <h2 className="text-text-primary text-base font-semibold">
                Search for a user
              </h2>
              <p className="text-text-secondary text-sm max-w-xs mx-auto">
                Type a username to see their security groups
              </p>
            </div>
          </div>
        )}

        {query.length >= 3 && results === null && (
          <div className="text-center p-8 border border-border-light rounded-xl bg-surface-light w-full">
            <p className="text-text-secondary text-sm">
              No se encontró ningún usuario llamado{" "}
              <span className="text-text-primary font-medium">{query}</span>
            </p>
          </div>
        )}

        {results && <UserAccessTable user={results} />}
      </section>
    </main>
  );
}
