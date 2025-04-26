export interface Incident {
    id: string;
    title: string;
    description: string;
    severity: "Low" | "Medium" | "High";
    reportedDate: string;
    expanded?: boolean;
  }
  
  export type SeverityFilter = "All" | "Low" | "Medium" | "High";
  export type SortOrder = "Newest" | "Oldest";