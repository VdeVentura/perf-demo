import { IJobFiltersFormValues } from "@pages/JobSearchPage/JobFiltersForm";
import qs from "qs";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const useInitialFilters = () => {
  const [searchParams] = useSearchParams();
  const [initialFilters, setInitialFilters] = useState<IJobFiltersFormValues>(INITIAL_FILTERS);
  useEffect(() => {
    setInitialFilters((initialFilters) => ({
      ...initialFilters,
      ...parseSearchParams(searchParams),
    }));
  }, [searchParams]);

  return { initialFilters };
};

// export const useInitialFilters = () => {
//   const [searchParams] = useSearchParams();
//   const initialFilters: IJobFiltersFormValues = useMemo(
//     () => ({
//       ...INITIAL_FILTERS,
//       ...parseSearchParams(searchParams),
//     }),
//     [searchParams]
//   );
//   return { initialFilters };
// };

const INITIAL_FILTERS = {
  jobType: {
    contract: false,
    fullTime: false,
    internship: false,
    partTime: false,
    relocation: false,
    remote: false,
    sponsorship: false,
  },
  location: null,
  skills: [],
  title: "",
};

const parseSearchParams = (searchParams: URLSearchParams) => {
  return qs.parse(searchParams.toString(), {
    decoder: (str, defaultDecoder, _, type) => {
      if (type === "value") {
        if (str === "false") {
          return false;
        }
        if (str === "true") {
          return true;
        }
      }
      return defaultDecoder(str);
    },
  }) as any;
};
