import Block from "@components/atoms/Block";
import Card from "@components/atoms/Card";
import Container from "@components/atoms/Container";
import Subtitle from "@components/atoms/Subtitle";
import Title from "@components/atoms/Title";
import Logo from "@components/atoms/Logo";
import Button from "@components/atoms/Button";
import { toggleFavorite } from "../../../store";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { memo } from "react";

export interface IJobCard {
  job: JobFragment;
}

const JobCard = memo(({ job }: IJobCard) => {
  const dispatch = useDispatch();
  // const isFavorite = useSelector((state: RootState) => state.jobs.favorites.includes(job.id));

  return (
    <Card>
      <Container>
        <Logo src={job.creator.profileImage || ""} />
        <Block padding="small" flexBasis="0" flexGrow={1}>
          <Title clamp={1} size="small">
            {job.title}
          </Title>
          <Subtitle size="small">{job.creator.firstName}</Subtitle>
        </Block>
        <Button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            dispatch(toggleFavorite(job.id));
          }}
        >
          <FontAwesomeIcon icon={faHeart} color={job.isFavorite ? "red" : "white"} size="lg" />
        </Button>
        {/* <Button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            dispatch(toggleFavorite(job.id));
          }}
        >
          <FontAwesomeIcon icon={faHeart} color={isFavorite ? "red" : "white"} size="lg" />
        </Button> */}
      </Container>
    </Card>
  );
});

export default JobCard;

export type JobFragment = {
  __typename?: "JobModel";
  id: string;
  title: string;
  description: string;
  isFavorite?: boolean;
  creator: {
    __typename?: "BasicUserModel";
    firstName: string;
    lastName: string;
    profileImage?: string | null | undefined;
  };
  address?:
    | {
        __typename?: "Address";
        city?: string | null | undefined;
        country: string;
      }
    | null
    | undefined;
  skillsNeeded: Array<{ __typename?: "Skill"; name: string; id: string }>;
  benefits?: Array<{ __typename?: "Benefit"; name: string; id: string }> | null | undefined;
};
