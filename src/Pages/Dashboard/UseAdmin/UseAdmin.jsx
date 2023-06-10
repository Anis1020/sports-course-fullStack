import React, { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const UseAdmin = () => {
  const { user } = useContext(AuthContext);
  const {
    data: isAdmin,
    refetch,
    loading: isAdminLoading,
  } = useQuery({
    queryKey: ["admin", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost/users/admin?email=${user?.email}`
      );
      return res.json();
    },
  });
  return [isAdmin, isAdminLoading, refetch];
};

export default UseAdmin;
