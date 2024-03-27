import UserList from "./components/UserList";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <UserList />
      <div> if you do not see any users, you should add some users in the database</div>
    </main>
  );
}
