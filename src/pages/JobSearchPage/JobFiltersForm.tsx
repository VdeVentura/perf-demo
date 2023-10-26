import { Form, useFormikContext } from "formik";

import Button from "@components/atoms/Button";
import Block from "@components/atoms/Block";
import Container from "@components/atoms/Container";
import SelectField from "@components/atoms/SelectField";

import AddressField, {
  IAddressFieldValue,
} from "@components/atoms/AddressField";
import ToggleField from "@components/atoms/ToggleField";
import TextField from "@components/atoms/TextField";

export interface IJobFiltersFormValues {
  title: string;
  skills: { value: string; label: string }[];
  location: IAddressFieldValue | null;
  jobType: {
    fullTime: boolean;
    partTime: boolean;
    internship: boolean;
    remote: boolean;
    relocation: boolean;
    contract: boolean;
    sponsorship: boolean;
  };
}

const skillOptions = [
  { label: "react", value: "React" },
  { label: "TS", value: "TS" },
  { label: "JS", value: "JS" },
  { label: "css", value: "CSS" },
  { label: "html", value: "HTML" },
];

const JobFiltersForm = () => {
  const { handleSubmit, isSubmitting } = useFormikContext();
  return (
    <Form onSubmit={handleSubmit}>
      <Container>
        <Block>
          <TextField name="title" label="Job Title" />
        </Block>

        <Block>
          <SelectField
            name="skills"
            label="Skills"
            isMulti
            creatable
            options={skillOptions}
          />
        </Block>

        <Block>
          <AddressField name="location" label="Location (city)" />
        </Block>

        <Container justifyContent="space-between">
          <Block md="40%" verticalPadding="small">
            <ToggleField name="jobType.fullTime" label="Full Time" />
          </Block>
          <Block md="40%" verticalPadding="small">
            <ToggleField name="jobType.partTime" label="Part Time" />
          </Block>
          <Block md="40%" verticalPadding="small">
            <ToggleField name="jobType.internship" label="Internship" />
          </Block>
          <Block md="40%" verticalPadding="small">
            <ToggleField name="jobType.remote" label="Remote" />
          </Block>
          <Block md="40%" verticalPadding="small">
            <ToggleField name="jobType.relocation" label="Relocation" />
          </Block>
          <Block md="40%" verticalPadding="small">
            <ToggleField name="jobType.contract" label="Contract" />
          </Block>
          <Block md="40%" verticalPadding="small">
            <ToggleField name="jobType.sponsorship" label="Sponsorship" />
          </Block>
        </Container>

        <Container>
          <Block display="flex" justifyContent="center">
            <Button
              type="submit"
              color="primary"
              size="small"
              isSubmitting={isSubmitting}
            >
              Apply
            </Button>
          </Block>
        </Container>
      </Container>
    </Form>
  );
};

export default JobFiltersForm;
