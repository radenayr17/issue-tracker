import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const useDelete = (id: string) => {
  const { push, refresh } = useRouter();
  const [loading, setLoading] = useState<boolean>(false);

  const onDelete = async () => {
    try {
      setLoading(true);

      await axios.delete(`/api/issues/${id}`);

      push("/issues");
      refresh();
    } catch (err: any) {
      setLoading(false);
    }
  };

  return { onDelete, loading };
};
