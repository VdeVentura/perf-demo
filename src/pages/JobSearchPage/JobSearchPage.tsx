import { useEffect } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { Formik } from "formik";

import qs from "qs";

import JobFiltersForm, { IJobFiltersFormValues } from "./JobFiltersForm";

import SearchLayout from "@components/templates/SearchLayout";
import Button from "@components/atoms/Button";
import Block from "@components/atoms/Block";

import { useModal } from "@components/molecules/Modal";

import JobCard from "@components/organisms/JobCard";
import JobDetails from "@components/organisms/JobDetails";
import { useJobs } from "@pages/JobSearchPage/useJobs";
import { useInitialFilters } from "@pages/JobSearchPage/useInitialFilters";

export const JobSearchPage = () => {
  const navigate = useNavigate();
  const { jobId } = useParams<{ jobId: string | undefined }>();
  const { openModal, closeModal, Modal } = useModal({ closeOnBackdrop: true, closeOnEsc: true });

  const { jobs } = useJobs();
  const { initialFilters } = useInitialFilters();

  const [, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (!jobId) {
      navigate(`/job-search/${jobs[0].id}`);
    }
  }, [jobId, jobs, navigate]);

  const onSubmit = async (filters: IJobFiltersFormValues) => {
    setSearchParams(qs.stringify(filters));
    closeModal();
  };

  const searchActions = (
    <Block padding="none" verticalPadding="small">
      <Button size="small" full onClick={openModal}>
        Filter
      </Button>
      <Formik onSubmit={onSubmit} initialValues={initialFilters} enableReinitialize>
        <Modal header="Filters">
          <JobFiltersForm />
        </Modal>
      </Formik>
    </Block>
  );

  const searchResults = jobs.map((job) => (
    <Block padding="none" verticalPadding="small" key={job.id}>
      <JobCard job={job} />
    </Block>
  ));

  const selectedResult = jobId ? (
    <Block padding="none" verticalPadding="small" height="100%">
      <JobDetails jobId={jobId} />
    </Block>
  ) : null;

  return <SearchLayout searchActions={searchActions} searchResults={searchResults} selectedResult={selectedResult} />;
};

export default JobSearchPage;
