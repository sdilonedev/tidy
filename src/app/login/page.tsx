import LoginOptions from "@/components/login-options";

export default function Login() {
  return (
    <>
      <div className="flex items-center flex-col justify-center mx-auto py-12 gap-6 max-w-4xl">
        <h1 className="text-2xl text-center max-w-80 font-extrabold text-tidy-ash dark:text-tidy-bone">
          It&#39;s time to decide what to login in with
        </h1>

        <LoginOptions />
      </div>
    </>
  );
}
