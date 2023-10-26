import { PartialAddressInput } from 'generated/graphql';

export const parseAddressComponents = (address: google.maps.GeocoderResult): PartialAddressInput => {
  const components = address.address_components;

  const componentTypes = {
    city: ['locality', 'sublocality'],
    state: ['administrative_area_level_1', 'administrative_area_level_2'],
    country: ['country'],
    zip: ['postal_code'],
  };

  const componentTypesKeys = Object.keys(componentTypes) as (keyof typeof componentTypes)[];

  const findComponent = (val: any, type: string, index: any) => {
    const component = components.find((component) => component.types.includes(type));

    const componentText = component ? component.long_name : undefined;
    return val ? val : componentText;
  };

  const parsedAddress = componentTypesKeys.reduce((acc, componentTypeKey) => {
    const types = componentTypes[componentTypeKey];
    return { ...acc, [componentTypeKey]: types.reduce(findComponent, undefined) };
  }, {});

  const countryCode = components.find((component) => component.types.includes('country'))?.short_name;

  const geo_ = address.geometry ? [address.geometry.location.lng(), address.geometry.location.lat()] : null;

  return { ...parsedAddress, countryCode, geo_, fullAddress: address.formatted_address, placeId: address.place_id };
};
