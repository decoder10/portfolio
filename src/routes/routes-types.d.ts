type TCustomRouteItem = {
  permission?: TPermissionList;
  isMenuItem: boolean;
  title: string;
  seoTitle: string;
  description: string;
  icon?: React.ReactElement;
  children?: CustomRouteConfig[];
};

type CustomRouteConfig = import('react-router-dom').RouteObject & TCustomRouteItem;
