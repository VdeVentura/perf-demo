import { ReactNode } from "react";
import styled from "styled-components";

import Container from "@components/atoms/Container";
import { useWindowSize } from "@hooks/useWindowSize";
import { theme } from "@styles/theme";

const SearchLayoutGrid = styled.div`
  display: grid;
  margin: auto;

  grid-template-columns: minmax(0, 1fr);
  max-width: ${({ theme }) => theme.breakpoints.xl};

  margin-bottom: -${({ theme }) => theme.spacing.small};
  min-height: calc(100vh - 125px);

  grid-template-areas: "activePanel";

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-gap: ${({ theme }) => theme.spacing.normal};
    grid-template-columns: minmax(0, 2fr) minmax(0, 4fr);
    grid-template-areas: "searchResults  selectedResult";
  }
`;

const SearchResults = styled.div`
  grid-area: activePanel;
  padding-bottom: 56px;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-area: searchResults;
    height: calc(100vh);
    overflow-y: scroll;
    position: sticky;
    top: 0;
    padding-bottom: 0;
  }
`;

const SelectedResult = styled.div`
  grid-area: activePanel;
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-area: selectedResult;
  }
`;

const SearchActions = styled(Container)`
  position: fixed;
  bottom: 60px;
  left: 0;
  z-index: 1;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    position: sticky;
    top: 0;
    bottom: unset;
  }
`;

export interface ISearchLayout {
  searchActions: ReactNode;
  searchResults: ReactNode;
  selectedResult: ReactNode;
}

const SearchLayout = ({ searchActions, searchResults, selectedResult }: ISearchLayout) => {
  const [width] = useWindowSize();
  const isSmallViewport = width <= parseInt(theme.breakpoints.md, 10);

  const renderSearchResults = Boolean(!isSmallViewport || !selectedResult);
  return (
    <SearchLayoutGrid>
      {renderSearchResults && (
        <SearchResults>
          <SearchActions>{searchActions}</SearchActions>
          {searchResults}
        </SearchResults>
      )}
      <SelectedResult>{selectedResult}</SelectedResult>
    </SearchLayoutGrid>
  );
};

export default SearchLayout;
