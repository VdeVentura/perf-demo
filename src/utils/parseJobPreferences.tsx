import { JobType } from 'generated/graphql';

export const parseJobPreferences = (jobType: keyof JobType): string | null => {
  switch (jobType) {
    case 'fullTime':
      return 'Full-Time';
    case 'partTime':
      return 'Part-Time';
    case 'contract':
      return 'Contract/Temp';
    case 'internship':
      return 'Internship';
    case 'relocation':
      return 'Open to relocation';
    case 'remote':
      return 'Remote';

    default:
      return null;
  }
};
