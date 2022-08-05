import { Form, Link } from "@remix-run/react";
import Button from "~/components/Button";

export default function NotesPage() {
  // const data = useLoaderData<typeof loader>();
  // const user = useUser();

  return (
    <div className="flex h-full min-h-screen flex-col">
      <header className="flex items-center justify-between bg-slate-800 p-4 text-white">
        <h1 className="text-3xl font-bold">
          <Link to=".">Notes</Link>
        </h1>
        <Form action="/logout" method="post">
          <button
            type="submit"
            className="rounded bg-slate-600 py-2 px-4 text-blue-100 hover:bg-blue-500 active:bg-blue-600"
          >
            Logout
          </button>
        </Form>
      </header>

      <main className="flex h-full bg-white">
        <div className="flex-1 p-6 text-center">
          <Link to="/app">
            <Button>View timetable</Button>
          </Link>
        </div>
      </main>
    </div>
  );
}
