import { getJiraIssue } from '../api/getJiraIssue';
import type { Payload } from '../model/type';

export const computeAttachmentsCount = async (paylod: Payload): Promise<number[]> => {
  const results = [];
  for (const issue of paylod.issues) {
    const data = await getJiraIssue(String(issue.id));

    results.push(data.fields.attachment?.length ?? 0);
  }

  return results;
};
