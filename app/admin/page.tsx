import Link from "next/link";

const page = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="font-bold text-5xl">Admin Page</h1>
      <Link href="/" className="p-4 bg-teal-300 mt-6 rounded-md">
        Home
      </Link>
    </div>
  );
}

export default page;