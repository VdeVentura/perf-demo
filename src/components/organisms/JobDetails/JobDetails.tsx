import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

import Button from "@components/atoms/Button";
import Block from "@components/atoms/Block";
import Card from "@components/atoms/Card";
import Container from "@components/atoms/Container";
import Logo from "@components/atoms/Logo";
import Subtitle from "@components/atoms/Subtitle";
import Title from "@components/atoms/Title";
import HR from "@components/atoms/HR";

import { useSelector } from "react-redux";
import { RootState } from "../../../store";

const JobDetails = ({ jobId }: { jobId: string }) => {
  const job = useSelector((state: RootState) => state.jobs.all.find((job) => job.id === jobId));
  if (!job) {
    return null;
  }
  return (
    <Card>
      <Container>
        <Logo src={job.creator.profileImage || ""} />

        <Block padding="small" flexBasis="0" flexGrow={1}>
          <Title clamp={1}>{job.title}</Title>
          <Subtitle size="small">
            {job.address?.city}, {job.address?.country}
          </Subtitle>
          <Subtitle size="small">
            {job.creator.firstName} {job.creator.lastName}
          </Subtitle>
        </Block>
        <Block padding="small" flexBasis="0">
          <Button size="small" inlineIcon={faExternalLinkAlt}>
            Apply
          </Button>
        </Block>
      </Container>
      <Container>
        <HR />
        <Title>Description</Title>
        <div style={{ whiteSpace: "pre-line" }}>{job.description}</div>
        <Block sm="50%" padding="none" verticalPadding="small">
          <Title>Required skills:</Title>
          {job.skillsNeeded.map((skill: any) => (
            <div key={skill.name}>{skill.name}</div>
          ))}
        </Block>
        <Block sm="50%" padding="none" verticalPadding="small">
          <Title>Benefits:</Title>
          {job.benefits?.map((benefit: any) => (
            <div key={benefit.name}>{benefit.name}</div>
          ))}
        </Block>
      </Container>
    </Card>
  );
};

export default JobDetails;
