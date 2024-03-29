import { Issue } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

import prisma from "@/prisma/client";

import { issueSchema } from "@/app/validations/issue";

export const POST = async (request: NextRequest) => {
  const body = await request.json();
  const validation = issueSchema.safeParse(body);

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
