import prisma from "@/prisma/client";
import { Issue } from "@prisma/client";
import { notFound } from "next/navigation";

interface Props {
  params: { id: string };
}

const IssueDetailPage = async ({ params: { id } }: Props) => {
  const issue: Issue | null = await prisma.issue.findUnique({ where: { id } });

  if (!issue) {
    notFound();
  }

  return (
    <>
      <p>{issue.title}</p>
      <p>{issue.description}</p>
      <p>{issue.status}</p>
      <p>{issue.createdAt.toDateString()}</p>
      <p>{issue.updatedAt.toDateString()}</p>
    </>
  );
};

export default IssueDetailPage;
