const getStatusColor = (status) => {
  switch (status && status.toLowerCase()) {
    case "active":
      return "bg-green-600";
    case "retired":
      return "bg-red-600";
    case "lost":
      return "bg-red-600";
    default:
      return "bg-yellow-500";
  }
};
export { getStatusColor };
