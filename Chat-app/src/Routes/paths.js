function Path(root, sublink) {
  return `${root}${sublink}`;
}

const ROOTS_DASHBOARD = "/";

export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
  genral: {
    app: Path(ROOTS_DASHBOARD, "app"),
    settings: Path(ROOTS_DASHBOARD, "settings"),
  },
};

// just for good practice only
// Just for defining varibles that we dont need to change it eveery where if some changes occur
