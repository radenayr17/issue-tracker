import IssueForm from "@/app/issues/components/IssueForm";
import prisma from "@/prisma/client";
import { Issue } from "@prisma/client";
import { notFound } from "next/navigation";

interface Props {
  params: {
    id: string;
  };
}

const EditIssuePage = async ({ params: { id } }: Props) => {
  const issue: Issue | null = await prisma.issue.findUnique({ where: { id } });

  if (!issue) {
    notFound();
  }

  return <IssueForm issue={issue} />;
};

export default EditIssuePage;
