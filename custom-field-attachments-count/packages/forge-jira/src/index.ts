

import api, { route } from '@forge/api';

interface ShortIssue {
  id: number,
  context: number,
  value: number | null;
}

interface Payload {
  field: {
    id: string,
    key: string,
    type: string,
    name: string
  },
  issues: ShortIssue[],
  contexts: unknown,
  context: {
    cloudId: string,
    moduleKey: string
  },
}

interface JiraIssue {
  id: string,
  self: string,
  key: string,
  fields: {
    attachment?: unknown[]
  }
}

export const computeValue = async (paylod: Payload): Promise<number[]> => {
  const results = [];
  for (const issue of paylod.issues) {
    const response = await api.asApp().requestJira(route`/rest/api/3/issue/${issue.id}`, {
      headers: {
        'Accept': 'application/json'
      }
    });

    const data = await response.json() as JiraIssue;

    results.push(data.fields.attachment?.length ?? 0);
  }

  return results;
}
