import { ZodIssue } from 'zod';

export function formatZodErrors(issues: ZodIssue[]): Record<string, string> {
  return issues.reduce((acc, issue) => {
    const key = issue.path[0] as string;
    acc[key] = issue.message;
    return acc;
  }, {} as Record<string, string>);
}
