export interface ShortIssue {
  id: number;
  context: number;
  value: number | null;
}

export interface Payload {
  field: {
    id: string;
    key: string;
    type: string;
    name: string;
  };
  issues: ShortIssue[];
  contexts: unknown;
  context: {
    cloudId: string;
    moduleKey: string;
  };
}

export interface JiraIssueAttachment {
  id: string;
  filename: string;
  created: string;
  size: number;
}

export interface JiraIssue {
  id: string;
  self: string;
  key: string;
  fields: {
    attachment?: JiraIssueAttachment[];
  };
}
