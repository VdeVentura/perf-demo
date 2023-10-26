import debounce from "lodash.debounce";
import { getAddressPrediction } from "@utils/googleMaps";

import { AsyncSelectField } from "@components/atoms/SelectField";

export interface IAddressField {
  name: string;
  label: string;
  isMulti?: true;
}

export interface IAddressFieldValue {
  label: string;
  value: string;
}

const loadOptions = debounce((input: string, callback: any) => {
  getAddressPrediction(input)
    .then((predictions) =>
      predictions.map(({ description, place_id }) => ({
        label: description,
        value: place_id,
      }))
    )
    .then(callback);
}, 300);

const AddressField = ({ name, label, isMulti }: IAddressField) => (
  <AsyncSelectField
    name={name}
    label={label}
    loadOptions={loadOptions}
    isMulti={isMulti}
    isClearable
  />
);

export default AddressField;
