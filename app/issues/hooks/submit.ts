import { issueSchema } from "@/app/validations/issue";
import { zodResolver } from "@hookform/resolvers/zod";
import { Issue } from "@prisma/client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

type IssueForm = z.infer<typeof issueSchema>;

export const useSubmit = (issue?: Issue) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IssueForm>({
    resolver: zodResolver(issueSchema),
  });
  const { push, refresh } = useRouter();
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit = handleSubmit(async (data) => {
    try {
      setLoading(true);

      if (issue) {
        await axios.patch(`/api/issues/${issue?.id}`, data);
      } else {
        await axios.post(`/api/issues`, data);
      }

      push("/issues/list");
      refresh();
    } catch (err: any) {
      const error: Error = err as Error;

      setLoading(false);
      setError(error.message);
    }
  });

  return { onSubmit, error, loading, register, errors };
};
