import { useEffect, useState } from 'react';
import { type MRT_ColumnFiltersState as MRTColumnFiltersState } from 'material-react-table';
import {
  useDataTableStoreActions,
  useDataTableStoreColumnFiltersRecord,
} from '@/core/stores/store-interface-and-intial-values/data-table-state';

interface UseFilteredRowsProps {
  layerKey: string;
}

/**
 * Custom hook to set the filtered row  for data table.
 * @param {string} layerKey key of the layer selected.
 * @returns {Object}
 */
export function useFilteredRows({ layerKey }: UseFilteredRowsProps) {
  const columnFiltersRecord = useDataTableStoreColumnFiltersRecord();

  const { setColumnFiltersEntry } = useDataTableStoreActions();

  const [columnFilters, setColumnFilters] = useState<MRTColumnFiltersState>(columnFiltersRecord[layerKey] || []);

  // update store column filters
  useEffect(() => {
    setColumnFiltersEntry(columnFilters, layerKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [columnFilters]);

  return { columnFilters, setColumnFilters };
}
