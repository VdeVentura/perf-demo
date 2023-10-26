import { Seniority_Types } from 'generated/graphql';

export const parseSeniority = (seniority: Seniority_Types) => {
  switch (seniority) {
    case Seniority_Types.EntryLevel:
      return 'Entry level';
    case Seniority_Types.MidSenior:
      return 'Mid - Senior level';
    case Seniority_Types.Associate:
      return 'Associate';
    case Seniority_Types.Director:
      return 'Director';
    case Seniority_Types.Executive:
      return 'Executive';
  }
};
