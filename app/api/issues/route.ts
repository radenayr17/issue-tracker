import { Issue } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

import prisma from "@/prisma/client";

import { createIssueSchema } from "@/app/validations/issue";
import { request } from "http";

export const POST = async (request: NextRequest) => {
  const body = await request.json();
  const validation = createIssueSchema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(validation?.error.format(), { status: 400 });
  }

  const issue: Issue = await prisma.issue.create({
    data: {
      title: body.title,
      description: body.description,
    },
  });

  return NextResponse.json(issue, { status: 201 });
};
