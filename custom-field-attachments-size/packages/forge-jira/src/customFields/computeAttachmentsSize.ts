import { getJiraIssue } from '../api/getJiraIssue';
import type { JiraIssueAttachment, Payload } from '../model/type';

const bytesToMegatytes = (bytes: number) => {
  return bytes / 1000000;
};

export const computeAttachmentsSize = async (paylod: Payload): Promise<number[]> => {
  const results = [];
  for (const issue of paylod.issues) {
    const data = await getJiraIssue(String(issue.id));

    const totalSizeInBytes = data.fields.attachment?.reduce((all: number, currentAttachment: JiraIssueAttachment) => {
      return all + currentAttachment.size;
    }, 0);

    const totalSizeInMegabytes = totalSizeInBytes ? bytesToMegatytes(totalSizeInBytes) : 0;

    results.push(totalSizeInMegabytes);
  }

  return results;
};
