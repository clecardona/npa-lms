//@ts-nocheck
import { useAuth } from "state/AuthProvider";

export default function Home() {
  const { user } = useAuth;
  return (
    <>
      <h1>HOME : FootX</h1>
      <h2>@{user}@</h2>
    </>
  );
}
