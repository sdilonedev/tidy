import Breadcrumbs from "@/components/breadcrumbs";
import DashHeader from "@/components/dash-header";

export default function DashLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <DashHeader />
      <Breadcrumbs />
      <main className="container flex w-full items-center my-14">
        {children}
      </main>
    </>
  );
}
