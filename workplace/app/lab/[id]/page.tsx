import Link from "next/link";
import { notFound } from "next/navigation";
import { Rail } from "@/components/Rail";
import { QUEUE, getLab, intranetFiles, listLabs } from "@/lib/content";
import { DeskClient } from "./DeskClient";

export function generateStaticParams() {
  return listLabs().map((lab) => ({ id: lab.id }));
}

export default async function LabPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const lab = getLab(id);
  if (!lab) notFound();
  const ticket = QUEUE.find((q) => q.labId === lab.id)?.ticket ?? lab.id;
  return (
    <>
      <Rail right={<Link href="/desk">Back to queue</Link>} />
      <DeskClient lab={lab} files={intranetFiles(lab.company)} ticket={ticket} />
    </>
  );
}
