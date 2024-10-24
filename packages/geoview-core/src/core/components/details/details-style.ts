import { Theme } from '@mui/material/styles';

// ? I doubt we want to define an explicit type for style properties?
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getSxClasses = (theme: Theme): any => ({
  detailsContainer: {
    background: theme.palette.geoViewColor.bgColor.main,
    paddingBottom: '1rem',
  },
  detailsInstructionsTitle: {
    fontSize: theme.palette.geoViewFontSize.lg,
    fontWeight: '600',
    lineHeight: '1.5em',
  },
  detailsInstructionsBody: {
    fontSize: theme.palette.geoViewFontSize.default,
  },
  panelHeaders: {
    fontSize: theme.palette.geoViewFontSize.lg,
    fontWeight: '600',
  },
  rightPanelContainer: {
    color: theme.palette.geoViewColor.textColor.main,
  },
  rightPanelBtnHolder: {
    marginTop: '20px',
    paddingBottom: '9px',
    boxShadow: `0px 12px 9px -13px ${theme.palette.geoViewColor.bgColor.dark[200]}`,
  },
  featureInfoListContainer: {
    paddingLeft: '25px',
    paddingRight: '25px',
    paddingBottom: '25px',
    overflowY: 'auto',
    overflowX: 'hidden',
  },
  featureDetailListContainer: {
    overflowY: 'auto',
    overflowX: 'hidden',
  },
  selectFeatureCheckbox: {
    color: theme.palette.geoViewColor.primary.main,
    '&.Mui-checked': {
      color: theme.palette.geoViewColor.primary.main,
    },
  },
  featureInfoItemValue: {
    marginRight: 0,
    wordBreak: 'break-word',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  boxContainerFeatureInfo: {
    wordWrap: 'break-word',
    fontSize: theme.palette.geoViewFontSize.default,
    lineHeight: '19px',
  },
  flexBoxAlignCenter: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  featureDetailModal: {
    '& .MuiDialog-container': {
      '& .MuiPaper-root': {
        minWidth: '40rem',
      },
    },
  },
});
