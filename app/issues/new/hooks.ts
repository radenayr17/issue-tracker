import { createIssueSchema } from "@/app/validations/issue";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

type IssueForm = z.infer<typeof createIssueSchema>;

export const useSubmit = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IssueForm>({
    resolver: zodResolver(createIssueSchema),
  });
  const { push } = useRouter();
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit = handleSubmit(async (data) => {
    try {
      setLoading(true);

      await axios.post("/api/issues", data);

      push("/issues");
    } catch (err: any) {
      const error: Error = err as Error;

      setLoading(false);
      setError(error.message);
    }
  });

  return { onSubmit, error, loading, register, errors };
};
