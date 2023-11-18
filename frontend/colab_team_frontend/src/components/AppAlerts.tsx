import React from "react";
import { Alert, AlertTitle } from "@mui/material";

interface AlertProps {
  title: string;
  severity: "error" | "success" | "info" | "warning";
}

export default function AppAlerts({ title, severity }: AlertProps) {
  return (
    <Alert
      sx={{ width: "20%", margin: "10px auto", border: "1px solid" }}
      severity={severity}
    >
      <AlertTitle>{title}</AlertTitle>
    </Alert>
  );
}
