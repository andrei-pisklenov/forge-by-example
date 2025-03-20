import api, { route } from '@forge/api';
import type { JiraIssue } from '../model/type';

export const getJiraIssue = async (issueKeyOrId: string) => {
  const response = await api.asApp().requestJira(route`/rest/api/3/issue/${issueKeyOrId}`, {
    headers: {
      Accept: 'application/json',
    },
  });

  const data = await response.json() as JiraIssue;

  return data;
};
