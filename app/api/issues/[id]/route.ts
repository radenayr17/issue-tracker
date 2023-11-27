import { issueSchema } from "@/app/validations/issue";
import prisma from "@/prisma/client";
import { Issue } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export const PATCH = async (request: NextRequest, { params: { id } }: { params: { id: string } }) => {
  const body = await request.json();
  const validation = issueSchema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(validation?.error.format(), { status: 400 });
  }

  const issue: Issue | null = await prisma.issue.findUnique({
    where: { id },
  });

  if (!issue) {
    return NextResponse.json({ message: "Issue not found" }, { status: 404 });
  }

  const updatedIssue: Issue = await prisma.issue.update({
    where: { id },
    data: {
      title: body.title,
      description: body.description,
    },
  });

  return NextResponse.json(updatedIssue, { status: 200 });
};
