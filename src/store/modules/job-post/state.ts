export type State = {
  loadingJobPostings: boolean;
  jobPostings: any[];
  jobPostingsTotalCount: number
  jobPostingsError: any;
};

export const state: State = {
  loadingJobPostings: false,
  jobPostings: [],
  jobPostingsTotalCount: 0,
  jobPostingsError: {},
};
