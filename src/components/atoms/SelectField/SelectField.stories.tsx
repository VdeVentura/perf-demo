import { Story } from '@storybook/react/types-6-0';
import { Formik } from 'formik';
import React from 'react';
import { mapToOptions } from 'utils/mapToOptions';

import SelectField, { ISelectField, AsyncSelectField } from './SelectField';

import { useGetBenefits } from 'api/benefits';
import Block from 'components/atoms/Block';

export default {
  title: 'Atoms/SelectField',
  component: SelectField,
};

export const Base: Story<ISelectField> = (args) => {
  const loadOptions = useGetBenefits();

  return (
    <>
      <Block>
        <SelectField
          name="empty"
          label="Empty Field"
          options={[
            { label: 'test 1', value: '1' },
            { label: 'test 2', value: '2' },
          ]}
        />
      </Block>
      <Block>
        <AsyncSelectField
          name="empty-async"
          label="Empty Async Field"
          loadOptions={(query: string) => loadOptions(query).then(mapToOptions)}
        />
      </Block>
      <Block>
        <AsyncSelectField
          name="empty-async-multi"
          label="Empty Async Field Multi"
          loadOptions={(query: string) => loadOptions(query).then(mapToOptions)}
          isMulti
        />
      </Block>
    </>
  );
};

Base.args = {};

Base.argTypes = {};

Base.decorators = [
  (Story) => (
    <Formik
      initialValues={{
        empty: '',
        'empty-async': '',
        'empty-async-multi': '',
        filled: 'Value',
        errorAndFilled: 'Value',
      }}
      initialErrors={{ error: 'Error', errorAndFilled: 'Error' }}
      onSubmit={() => {}}
    >
      <Story />
    </Formik>
  ),
];
