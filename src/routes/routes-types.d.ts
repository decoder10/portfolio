type TCustomRouteItem = {
  permission?: TPermissionList;
  isMenuItem: boolean;
  title: string;
  icon?: React.ReactElement;
  children?: CustomRouteConfig[];
};

type CustomRouteConfig = import('react-router-dom').RouteObject & TCustomRouteItem;
