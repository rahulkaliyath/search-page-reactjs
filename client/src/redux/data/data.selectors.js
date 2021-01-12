import {createSelector} from 'reselect';

const selectData = state => state.data;

export const selectResults = createSelector(
    [selectData],
    data => data.results
);

export const selectFilters = createSelector(
    [selectData],
    data => data.filters
);

export const selectLoading = createSelector(
    [selectData],
    data => data.loading
);


export const selectAppliedFilters = createSelector(
    [selectData],
    data => data.appliedFilters
);

export const selectSourceFilters = createSelector(
    [selectData],
    data => data.appliedFilters.Source
);

export const selectFrequencyFilters = createSelector(
    [selectData],
    data => data.appliedFilters.Frequency
);

export const selectUnitFilters = createSelector(
    [selectData],
    data => data.appliedFilters.Unit
);

export const selectTagFilters = createSelector(
    [selectData],
    data => data.appliedFilters.Tags
);

export const selectResultAfterFilter = createSelector(
    [selectResults,selectSourceFilters,selectFrequencyFilters,selectUnitFilters,selectTagFilters],
    (results,source,frequency,unit,tags) => results.filter(result => result["Source"].includes(source) && 
        result["Frequency"].includes(frequency) && result["Unit"].includes(unit)  
        && tags.length==0 || tags.some(tag => result['Tags'].split(',').includes(tag)))
)