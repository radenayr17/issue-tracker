import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const useDelete = (id: string) => {
  const { push, refresh } = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const clearError = () => setError("");

  const onDelete = async () => {
    try {
      setError("");
      setLoading(true);

      await axios.delete(`/api/issues/${id}`);

      push("/issues/list");
      refresh();
    } catch (err: any) {
      const error: Error = err as Error;

      setError(error.message);

      setLoading(false);
    }
  };

  return { onDelete, loading, error, clearError };
};
