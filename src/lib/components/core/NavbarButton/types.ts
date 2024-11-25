export type NavbarButtonProps = {
  onClick: () => void;
  label: string;
  expanded: boolean;
  icon?: React.ReactNode;
  expandedIcon?: React.ReactNode;
  collapsedIcon?: React.ReactNode;
};
