export const getAddressDetails = (placeId: string): Promise<google.maps.GeocoderResult> => {
  const geocoder = new window.google.maps.Geocoder();

  return new Promise<google.maps.GeocoderResult>((resolve, reject) => {
    geocoder.geocode({ placeId }, (results, status) => {
      if (status === 'OK' && results[0]) {
        resolve(results[0]);
      } else {
        reject(status);
      }
    });
  });
};

export const getAddressPrediction = (input: string) => {
  const autocompleteService = new window.google.maps.places.AutocompleteService();

  return new Promise<google.maps.places.AutocompletePrediction[]>((resolve, reject) => {
    autocompleteService.getPlacePredictions({ input }, (result) => {
      resolve(result);
    });
  });
};
